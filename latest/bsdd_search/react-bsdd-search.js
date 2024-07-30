var Vd = Object.defineProperty;
var Wd = (r, e, t) => e in r ? Vd(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => (Wd(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as ae from "react";
import jo, { createContext as Nr, useContext as ar, useState as X, useRef as ue, useEffect as V, Fragment as dl, useMemo as ho, useCallback as ye, useLayoutEffect as ds, useId as hl, forwardRef as Ce, cloneElement as $o, Children as Pi, createElement as Oi } from "react";
import * as Yd from "react-dom";
import fl, { flushSync as Qd, createPortal as Jd } from "react-dom";
function Xd(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var pl = { exports: {} }, Ko = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd = jo, eh = Symbol.for("react.element"), th = Symbol.for("react.fragment"), rh = Object.prototype.hasOwnProperty, nh = Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, oh = { key: !0, ref: !0, __self: !0, __source: !0 };
function gl(r, e, t) {
  var n, o = {}, i = null, s = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    rh.call(e, n) && !oh.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: eh, type: r, key: i, ref: s, props: o, _owner: nh.current };
}
Ko.Fragment = th;
Ko.jsx = gl;
Ko.jsxs = gl;
pl.exports = Ko;
var v = pl.exports, xi = {}, Na = fl;
xi.createRoot = Na.createRoot, xi.hydrateRoot = Na.hydrateRoot;
var ml = { exports: {} }, vl = {};
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
function ih(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var sh = typeof Object.is == "function" ? Object.is : ih, ah = Kn.useSyncExternalStore, ch = Kn.useRef, lh = Kn.useEffect, uh = Kn.useMemo, dh = Kn.useDebugValue;
vl.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var i = ch(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = uh(function() {
    function c(f) {
      if (!l) {
        if (l = !0, u = f, f = n(f), o !== void 0 && s.hasValue) {
          var p = s.value;
          if (o(p, f))
            return h = p;
        }
        return h = f;
      }
      if (p = h, sh(u, f))
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
  var a = ah(r, i[0], i[1]);
  return lh(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), dh(a), a;
};
ml.exports = vl;
var hh = ml.exports, et = (
  // prettier-ignore
  // @ts-ignore
  "default" in ae ? ae.default : ae
), Pa = Symbol.for("react-redux-context"), Oa = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function fh() {
  if (!et.createContext)
    return {};
  const r = Oa[Pa] ?? (Oa[Pa] = /* @__PURE__ */ new Map());
  let e = r.get(et.createContext);
  return e || (e = et.createContext(
    null
  ), r.set(et.createContext, e)), e;
}
var rr = /* @__PURE__ */ fh(), ph = () => {
  throw new Error("uSES not initialized!");
};
function hs(r = rr) {
  return function() {
    return et.useContext(r);
  };
}
var yl = /* @__PURE__ */ hs(), Cl = ph, gh = (r) => {
  Cl = r;
}, mh = (r, e) => r === e;
function vh(r = rr) {
  const e = r === rr ? yl : hs(r), t = (n, o = {}) => {
    const { equalityFn: i = mh, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: h
    } = e();
    et.useRef(!0);
    const d = et.useCallback(
      {
        [n.name](p) {
          return n(p);
        }
      }[n.name],
      [n, u, s.stabilityCheck]
    ), f = Cl(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      d,
      i
    );
    return et.useDebugValue(f), f;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Pn = /* @__PURE__ */ vh();
function yh(r) {
  r();
}
function Ch() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      yh(() => {
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
var xa = {
  notify() {
  },
  get: () => []
};
function bh(r, e) {
  let t, n = xa, o = 0, i = !1;
  function s(g) {
    u();
    const m = n.subscribe(g);
    let b = !1;
    return () => {
      b || (b = !0, m(), h());
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
    o++, t || (t = e ? e.addNestedSub(c) : r.subscribe(c), n = Ch());
  }
  function h() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = xa);
  }
  function d() {
    i || (i = !0, u());
  }
  function f() {
    i && (i = !1, h());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return p;
}
var wh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Eh = typeof navigator < "u" && navigator.product === "ReactNative", Sh = wh || Eh ? et.useLayoutEffect : et.useEffect;
function Th({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = et.useMemo(() => {
    const l = bh(r);
    return {
      store: r,
      subscription: l,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [r, n, o, i]), a = et.useMemo(() => r.getState(), [r]);
  Sh(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== r.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = e || rr;
  return /* @__PURE__ */ et.createElement(c.Provider, { value: s }, t);
}
var _h = Th;
function bl(r = rr) {
  const e = r === rr ? yl : (
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
var Ih = /* @__PURE__ */ bl();
function Ah(r = rr) {
  const e = r === rr ? Ih : bl(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Rh = /* @__PURE__ */ Ah();
gh(hh.useSyncExternalStoreWithSelector);
const kh = {
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
let Nh = class Mi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || kh, this.options = t, this.debug = t.debug;
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
var At = new Nh();
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
function Ma(r) {
  return r == null ? "" : "" + r;
}
function Ph(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
const Oh = /###/g;
function En(r, e, t) {
  function n(a) {
    return a && a.indexOf("###") > -1 ? a.replace(Oh, ".") : a;
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
function La(r, e, t) {
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
function xh(r, e, t, n) {
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
function Mh(r, e, t) {
  const n = fo(r, t);
  return n !== void 0 ? n : fo(e, t);
}
function wl(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : wl(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function Hr(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Lh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Dh(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => Lh[e]) : r;
}
class Uh {
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
const Hh = [" ", ",", "?", "!", ";"], Fh = new Uh(20);
function Bh(r, e, t) {
  e = e || "", t = t || "";
  const n = Hh.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
  if (n.length === 0)
    return !0;
  const o = Fh.getRegExp(`(${n.map((s) => s === "?" ? "\\?" : s).join("|")})`);
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
class Da extends qo {
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
    n && (a = a.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (a = e.split("."), o = t, t = a[1]), this.addNamespaces(t), La(this.data, a, o), i.silent || this.emit("added", e, t, n, o);
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
    s.skipCopy || (n = JSON.parse(JSON.stringify(n))), o ? wl(c, n, i) : c = {
      ...c,
      ...n
    }, La(this.data, a, c), s.silent || this.emit("added", e, t, n);
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
var El = {
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
const Ua = {};
class go extends qo {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ph(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = At.create("translator");
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
    const s = n && e.indexOf(n) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Bh(e, n, o);
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
    const h = this.resolve(e, t);
    let d = h && h.res;
    const f = h && h.usedKey || s, p = h && h.exactUsedKey || s, g = Object.prototype.toString.apply(d), m = ["[object Number]", "[object Function]", "[object RegExp]"], b = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (y && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && m.indexOf(g) < 0 && !(typeof b == "string" && Array.isArray(d))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, d, {
          ...t,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (h.res = w, h.usedParams = this.getUsedParamsDetails(t), h) : w;
      }
      if (i) {
        const w = Array.isArray(d), E = w ? [] : {}, T = w ? p : f;
        for (const A in d)
          if (Object.prototype.hasOwnProperty.call(d, A)) {
            const _ = `${T}${i}${A}`;
            E[A] = this.translate(_, {
              ...t,
              joinArrays: !1,
              ns: a
            }), E[A] === _ && (E[A] = d[A]);
          }
        d = E;
      }
    } else if (y && typeof b == "string" && Array.isArray(d))
      d = d.join(b), d && (d = this.extendTranslation(d, e, t, n));
    else {
      let w = !1, E = !1;
      const T = t.count !== void 0 && typeof t.count != "string", A = go.hasDefaultValue(t), _ = T ? this.pluralResolver.getSuffix(l, t.count, t) : "", L = t.ordinal && T ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", F = T && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), Q = F && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${_}`] || t[`defaultValue${L}`] || t.defaultValue;
      !this.isValidLookup(d) && A && (w = !0, d = Q), this.isValidLookup(d) || (E = !0, d = s);
      const se = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : d, $ = A && Q !== d && this.options.updateMissing;
      if (E || w || $) {
        if (this.logger.log($ ? "updateKey" : "missingKey", l, c, s, $ ? Q : d), i) {
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
        const x = (D, q, J) => {
          const me = A && J !== d ? J : se;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(D, c, q, me, $, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(D, c, q, me, $, t), this.emit("missingKey", D, c, q, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && T ? oe.forEach((D) => {
          const q = this.pluralResolver.getSuffixes(D, t);
          F && t[`defaultValue${this.options.pluralSeparator}zero`] && q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && q.push(`${this.options.pluralSeparator}zero`), q.forEach((J) => {
            x([D], s + J, t[`defaultValue${J}`] || Q);
          });
        }) : x(oe, s, Q));
      }
      d = this.extendTranslation(d, e, t, h, n), E && d === s && this.options.appendNamespaceToMissingKey && (d = `${c}:${s}`), (E || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${s}` : s, w ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return o ? (h.res = d, h.usedParams = this.getUsedParamsDetails(t), h) : d;
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
        return i && i[0] === f[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : s.translate(...f, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const a = n.postProcess || this.options.postProcess, c = typeof a == "string" ? [a] : a;
    return e != null && c && c.length && n.applyPostProcessor !== !1 && (e = El.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
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
      let h = l.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && typeof t.count != "string", f = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), p = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((m) => {
        this.isValidLookup(n) || (a = m, !Ua[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Ua[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((b) => {
          if (this.isValidLookup(n))
            return;
          s = b;
          const y = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(y, u, b, m, t);
          else {
            let w;
            d && (w = this.pluralResolver.getSuffix(b, t.count, t));
            const E = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (y.push(u + w), t.ordinal && w.indexOf(T) === 0 && y.push(u + w.replace(T, this.options.pluralSeparator)), f && y.push(u + E)), p) {
              const A = `${u}${this.options.contextSeparator}${t.context}`;
              y.push(A), d && (y.push(A + w), t.ordinal && w.indexOf(T) === 0 && y.push(A + w.replace(T, this.options.pluralSeparator)), f && y.push(A + E));
            }
          }
          let C;
          for (; C = y.pop(); )
            this.isValidLookup(n) || (i = C, n = this.getResource(b, m, C, t));
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
function pi(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class Ha {
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
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], i = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), n.forEach((s) => {
      o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
    }), o;
  }
}
let jh = [{
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
}], $h = {
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
const Kh = ["v1", "v2", "v3"], qh = ["v4"], Fa = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function zh() {
  const r = {};
  return jh.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: $h[e.fc]
      };
    });
  }), r;
}
class Gh {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = At.create("pluralResolver"), (!this.options.compatibilityJSON || qh.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = zh();
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, i) => Fa[o] - Fa[i]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !Kh.includes(this.options.compatibilityJSON);
  }
}
function Ba(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Mh(r, e, t);
  return !i && o && typeof t == "string" && (i = Li(r, t, n), i === void 0 && (i = Li(e, t, n))), i;
}
class Vh {
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
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: d,
      nestingPrefixEscaped: f,
      nestingSuffix: p,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: b,
      alwaysFormat: y
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Dh, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Hr(i) : s || "{{", this.suffix = a ? Hr(a) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? Hr(d) : f || Hr("$t("), this.nestingSuffix = p ? Hr(p) : g || Hr(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
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
        const y = Ba(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(y, void 0, n, {
          ...o,
          ...t,
          interpolationkey: p
        }) : y;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), b = g.join(this.formatSeparator).trim();
      return this.format(Ba(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), b, n, {
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
      for (a = 0; i = p.regex.exec(e); ) {
        const g = i[1].trim();
        if (s = u(g), s === void 0)
          if (typeof h == "function") {
            const b = h(e, i, o);
            s = typeof b == "string" ? b : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            s = "";
          else if (d) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = Ma(s));
        const m = p.safeValue(s);
        if (e = e.replace(i[0], m), d ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, a++, a >= this.maxReplaces)
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
      const h = c.split(new RegExp(`${u}[ ]*{`));
      let d = `{${h[1]}`;
      c = h[0], d = this.interpolate(d, s);
      const f = d.match(/'/g), p = d.match(/"/g);
      (f && f.length % 2 === 0 && !p || p.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        s = JSON.parse(d), l && (s = {
          ...l,
          ...s
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, g), `${c}${u}${d}`;
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
        const u = o[1].split(this.formatSeparator).map((h) => h.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (i = t(a.call(this, o[1].trim(), s), s), i && o[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = Ma(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), i = ""), l && (i = c.reduce((u, h) => this.format(u, h, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function Wh(r) {
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
function Fr(r) {
  const e = {};
  return function(n, o, i) {
    const s = o + JSON.stringify(i);
    let a = e[s];
    return a || (a = r(po(o), i), e[s] = a), a(n);
  };
}
class Yh {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = At.create("formatter"), this.options = e, this.formats = {
      number: Fr((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (i) => o.format(i);
      }),
      currency: Fr((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: Fr((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (i) => o.format(i);
      }),
      relativetime: Fr((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (i) => o.format(i, n.range || "day");
      }),
      list: Fr((t, n) => {
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
    this.formats[e.toLowerCase().trim()] = Fr(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = Wh(c);
      if (this.formats[l]) {
        let h = a;
        try {
          const d = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, f = d.locale || d.lng || o.locale || o.lng || n;
          h = this.formats[l](a, f, {
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
      return a;
    }, e);
  }
}
function Qh(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class Jh extends qo {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = At.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
  }
  queueLoad(e, t, n, o) {
    const i = {}, s = {}, a = {}, c = {};
    return e.forEach((l) => {
      let u = !0;
      t.forEach((h) => {
        const d = `${l}|${h}`;
        !n.reload && this.store.hasResourceBundle(l, h) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, u = !1, s[d] === void 0 && (s[d] = !0), i[d] === void 0 && (i[d] = !0), c[h] === void 0 && (c[h] = !0)));
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
      xh(c.loaded, [i], s), Qh(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((h) => {
          a[l][h] === void 0 && (a[l][h] = !0);
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
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
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
            l.length === 5 ? u = l(e, t, n, o, c) : u = l(e, t, n, o), u && typeof u.then == "function" ? u.then((h) => a(null, h)).catch(a) : a(null, u);
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
function ja() {
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
function $a(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function eo() {
}
function Xh(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class On extends qo {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = $a(e), this.services = {}, this.logger = At, this.modules = {
      external: []
    }, Xh(this), t && !this.isInitialized && !e.isClone) {
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
    const o = ja();
    this.options = {
      ...o,
      ...this.options,
      ...$a(t)
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
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Yh);
      const h = new Ha(this.options);
      this.store = new Da(this.options.resources, this.options);
      const d = this.services;
      d.logger = At, d.resourceStore = this.store, d.languageUtils = h, d.pluralResolver = new Gh(h, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (d.formatter = i(u), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new Vh(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new Jh(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(f) {
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
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && El.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), h = 2; h < l; h++)
          u[h - 2] = arguments[h];
        c = o.options.overloadTranslationOptionHandler([s, a].concat(u));
      } else
        c = {
          ...a
        };
      c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix = c.keyPrefix || n || i.keyPrefix;
      const d = o.options.keySeparator || ".";
      let f;
      return c.keyPrefix && Array.isArray(s) ? f = s.map((p) => `${c.keyPrefix}${d}${p}`) : f = c.keyPrefix ? `${c.keyPrefix}${d}${s}` : s, o.t(f, c);
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
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new Ha(ja());
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
    }, n && (i.store = new Da(this.store.data, o), i.services.resourceStore = i.store), i.translator = new go(i.services, o), i.translator.on("*", function(a) {
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
function Zh() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Ka = {};
function Di() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Ka[e[0]] || (typeof e[0] == "string" && (Ka[e[0]] = /* @__PURE__ */ new Date()), Zh(...e));
}
const Sl = (r, e) => () => {
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
function qa(r, e, t) {
  r.loadNamespaces(e, Sl(r, t));
}
function za(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, Sl(r, n));
}
function ef(r, e) {
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
function tf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Di("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : ef(r, e, t);
}
const rf = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, nf = {
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
}, of = (r) => nf[r], sf = (r) => r.replace(rf, of);
let Ui = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: sf
};
function af() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Ui = {
    ...Ui,
    ...r
  };
}
function cf() {
  return Ui;
}
let Tl;
function lf(r) {
  Tl = r;
}
function uf() {
  return Tl;
}
const df = {
  type: "3rdParty",
  init(r) {
    af(r.options.react), lf(r);
  }
}, hf = Nr();
class ff {
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
const pf = (r, e) => {
  const t = ue();
  return V(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function zo(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = ar(hf) || {}, i = t || n || uf();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new ff()), !i) {
    Di("You will need to pass in an i18next instance by using initReactI18next");
    const C = (E, T) => typeof T == "string" ? T : T && typeof T == "object" && typeof T.defaultValue == "string" ? T.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, w = [C, {}, !1];
    return w.t = C, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && Di("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...cf(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = r || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((C) => tf(C, i, s));
  function h() {
    return i.getFixedT(e.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [d, f] = X(h);
  let p = l.join();
  e.lng && (p = `${e.lng}${p}`);
  const g = pf(p), m = ue(!0);
  V(() => {
    const {
      bindI18n: C,
      bindI18nStore: w
    } = s;
    m.current = !0, !u && !a && (e.lng ? za(i, e.lng, l, () => {
      m.current && f(h);
    }) : qa(i, l, () => {
      m.current && f(h);
    })), u && g && g !== p && m.current && f(h);
    function E() {
      m.current && f(h);
    }
    return C && i && i.on(C, E), w && i && i.store.on(w, E), () => {
      m.current = !1, C && i && C.split(" ").forEach((T) => i.off(T, E)), w && i && w.split(" ").forEach((T) => i.store.off(T, E));
    };
  }, [i, p]);
  const b = ue(!0);
  V(() => {
    m.current && !b.current && f(h), b.current = !1;
  }, [i, c]);
  const y = [d, i, u];
  if (y.t = d, y.i18n = i, y.ready = u, u || !u && !a)
    return y;
  throw new Promise((C) => {
    e.lng ? za(i, e.lng, l, () => C()) : qa(i, l, () => C());
  });
}
xe.use(df).init({
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
function Ga(r, e) {
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
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (h) {
        s(h);
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
function gf(r, e) {
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
function fs() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(gf(arguments[e]));
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
function Xe(r, e) {
  Fi(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var pe = function() {
  return pe = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, pe.apply(this, arguments);
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
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (h) {
        s(h);
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
function Go() {
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
], Va = Go(qn, [
  S.EMAIL_SCOPE
]), nt;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(nt || (nt = {}));
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
var Kr;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(Kr || (Kr = {}));
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
var Wa = {
  PLAIN: "plain",
  S256: "S256"
}, mo;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(mo || (mo = {}));
var vo;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(vo || (vo = {}));
var Cr;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(Cr || (Cr = {}));
var Ae;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(Ae || (Ae = {}));
var W;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(W || (W = {}));
var Tn;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(Tn || (Tn = {}));
var Bi = "appmetadata", mf = "client_info", _n = "1", In = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, ut;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(ut || (ut = {}));
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
}, ve;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(ve || (ve = {}));
var An = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Ya = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, yo;
(function(r) {
  r.username = "username", r.password = "password";
})(yo || (yo = {}));
var qr;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(qr || (qr = {}));
var Qt;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Qt || (Qt = {}));
var Rn;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Rn || (Rn = {}));
var Xt;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(Xt || (Xt = {}));
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
    Xe(e, r);
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
    Xe(e, r);
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
var ps = (
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
var _l = "@azure/msal-common", gs = "13.3.3";
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
    Xe(e, r);
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
      var t = this, n = e ? H.trimArrayEntries(Go(e)) : [], o = n ? H.removeEmptyStringsFromArray(n) : [];
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
      return Va.forEach(function(n) {
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
      Va.forEach(function(t) {
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
function zr(r) {
  if (H.isEmpty(r))
    throw j.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(Ae.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? S.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ve;
(function(r) {
  r[r.Default = 0] = "Default", r[r.Adfs = 1] = "Adfs", r[r.Dsts = 2] = "Dsts", r[r.Ciam = 3] = "Ciam";
})(Ve || (Ve = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Xr;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(Xr || (Xr = {}));
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
      t.authorityType === Ve.Adfs ? n.authorityType = Cr.ADFS_ACCOUNT_TYPE : t.protocolMode === Xr.AAD ? n.authorityType = Cr.MSSTS_ACCOUNT_TYPE : n.authorityType = Cr.GENERIC_ACCOUNT_TYPE, n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
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
      if (t === Ve.Adfs || t === Ve.Dsts)
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
var Pt = (
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
var Ge = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(_l, gs);
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
      return n && (t.idToken = n.secret, t.idTokenClaims = new Pt(n.secret, this.cryptoImpl).claims), t;
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
      if (t.indexOf(W.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(W.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(W.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(W.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(W.REFRESH_TOKEN.toLowerCase()) > -1) {
        var n = "" + W.REFRESH_TOKEN + Ae.CACHE_KEY_SEPARATOR + this.clientId + Ae.CACHE_KEY_SEPARATOR, o = "" + W.REFRESH_TOKEN + Ae.CACHE_KEY_SEPARATOR + _n + Ae.CACHE_KEY_SEPARATOR;
        if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === W.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === ve.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
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
              if (t.credentialType.toLowerCase() !== W.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (t.tokenType !== ve.POP)
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
      return i && s && (i.idTokenClaims = new Pt(s.secret, this.cryptoImpl).claims), {
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
        credentialType: W.ID_TOKEN,
        clientId: this.clientId,
        realm: e.tenantId
      }, i = this.getIdTokensByFilter(o, t), s = i.length;
      return s < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : s > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), i.forEach(function(a) {
        n.removeIdToken(a.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), i[0]);
    }, r.prototype.getIdTokensByFilter = function(e, t) {
      var n = this, o = t && t.idToken || this.getTokenKeys().idToken, i = [];
      return o.forEach(function(s) {
        if (n.idTokenKeyMatchesFilter(s, pe({ clientId: n.clientId }, e))) {
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
      var i = De.createSearchScopes(t.scopes), s = t.authenticationScheme || ve.BEARER, a = s && s.toLowerCase() !== ve.BEARER.toLowerCase() ? W.ACCESS_TOKEN_WITH_AUTH_SCHEME : W.ACCESS_TOKEN, c = {
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
        credentialType: W.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: i
      }, a = n && n.refreshToken || this.getTokenKeys().refreshToken, c = [];
      a.forEach(function(u) {
        if (o.refreshTokenKeyMatchesFilter(u, s)) {
          var h = o.getRefreshTokenCredential(u);
          h && o.credentialMatchesFilter(h, s) && c.push(h);
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
      var n = e.credentialType !== W.ACCESS_TOKEN && e.credentialType !== W.ACCESS_TOKEN_WITH_AUTH_SCHEME;
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
), vf = (
  /** @class */
  function(r) {
    Xe(e, r);
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
  }(Ge)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var yf = 300, Il = {
  tokenRenewalOffsetSeconds: yf,
  preventCorsPreflight: !1
}, Cf = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: Ee.Info,
  correlationId: S.EMPTY_STRING
}, bf = {
  claimsBasedCachingEnabled: !0
}, wf = {
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
}, Ef = {
  sku: S.SKU,
  version: gs,
  cpu: S.EMPTY_STRING,
  os: S.EMPTY_STRING
}, Sf = {
  clientSecret: S.EMPTY_STRING,
  clientAssertion: void 0
}, Tf = {
  azureCloudInstance: xn.None,
  tenant: "" + S.DEFAULT_COMMON_TENANT
}, _f = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function If(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, i = r.storageInterface, s = r.networkInterface, a = r.cryptoInterface, c = r.clientCredentials, l = r.libraryInfo, u = r.telemetry, h = r.serverTelemetryManager, d = r.persistencePlugin, f = r.serializableCache, p = pe(pe({}, Cf), n);
  return {
    authOptions: Af(e),
    systemOptions: pe(pe({}, Il), t),
    loggerOptions: p,
    cacheOptions: pe(pe({}, bf), o),
    storageInterface: i || new vf(e.clientId, Co, new ps(p)),
    networkInterface: s || wf,
    cryptoInterface: a || Co,
    clientCredentials: c || Sf,
    libraryInfo: pe(pe({}, Ef), l),
    telemetry: pe(pe({}, _f), u),
    serverTelemetryManager: h || null,
    persistencePlugin: d || null,
    serializableCache: f || null
  };
}
function Af(r) {
  return pe({ clientCapabilities: [], azureCloudOptions: Tf, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _r = (
  /** @class */
  function(r) {
    Xe(e, r);
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
          throttleTime: r.calculateThrottleTime(parseInt(n.headers[nt.RETRY_AFTER])),
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
      return e.headers ? e.headers.hasOwnProperty(nt.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1;
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
var Rf = (
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
var tt;
(function(r) {
  r.HOME_ACCOUNT_ID = "home_account_id", r.UPN = "UPN";
})(tt || (tt = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var vr = (
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
        Wa.PLAIN,
        Wa.S256
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
      var n = t ? Go(e || [], qn) : e || [], o = new De(n);
      this.parameters.set(ie.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(ie.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      vr.validateRedirectUri(e), this.parameters.set(ie.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      vr.validateRedirectUri(e), this.parameters.set(ie.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(ie.ID_TOKEN_HINT, encodeURIComponent(e));
    }, r.prototype.addDomainHint = function(e) {
      this.parameters.set(Sn.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Sn.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(nt.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(nt.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Sn.SID, encodeURIComponent(e));
    }, r.prototype.addClaims = function(e, t) {
      var n = this.addClientCapabilitiesToClaims(e, t);
      vr.validateClaims(n), this.parameters.set(ie.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(ie.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(ie.X_CLIENT_SKU, e.sku), this.parameters.set(ie.X_CLIENT_VER, e.version), e.os && this.parameters.set(ie.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(ie.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(ie.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(ie.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      vr.validatePrompt(e), this.parameters.set("" + ie.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      H.isEmpty(e) || this.parameters.set(ie.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(ie.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (vr.validateCodeChallengeParams(e, t), e && t)
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
      this.parameters.set(mf, "1");
    }, r.prototype.addExtraQueryParameters = function(e) {
      var t = this, n = vr.sanitizeEQParams(e, this.parameters);
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
      return t && t.length > 0 && (n.hasOwnProperty(Kr.ACCESS_TOKEN) || (n[Kr.ACCESS_TOKEN] = {}), n[Kr.ACCESS_TOKEN][Kr.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(yo.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(yo.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      H.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ve.POP), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      H.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ve.SSH), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
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
var ms = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = If(e), this.logger = new ps(this.config.loggerOptions, _l, gs), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new Rf(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[nt.CONTENT_TYPE] = S.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case tt.HOME_ACCOUNT_ID:
            try {
              var n = zr(e.credential);
              t[nt.CCS_HEADER] = "Oid:" + n.uid + "@" + n.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case tt.UPN:
            t[nt.CCS_HEADER] = "UPN: " + e.credential;
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
        case W.ID_TOKEN:
          return Tn.ID_TOKEN;
        case W.ACCESS_TOKEN:
        case W.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return Tn.ACCESS_TOKEN;
        case W.REFRESH_TOKEN:
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
      var i = e === W.REFRESH_TOKEN && o || t, s = [
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
      return e && e.toLowerCase() !== ve.BEARER.toLowerCase() ? e.toLowerCase() : S.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Zt = (
  /** @class */
  function(r) {
    Xe(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, n, o, i, s) {
      var a = new e();
      return a.credentialType = W.ID_TOKEN, a.homeAccountId = t, a.environment = n, a.clientId = i, a.secret = o, a.realm = s, a;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === W.ID_TOKEN : !1;
    }, e;
  }(vs)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var dt = (
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
var er = (
  /** @class */
  function(r) {
    Xe(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, i, s, a, c, l, u, h, d, f, p, g, m) {
      var b, y, C = new e();
      C.homeAccountId = t, C.credentialType = W.ACCESS_TOKEN, C.secret = o;
      var w = dt.nowSeconds();
      if (C.cachedAt = w.toString(), C.expiresOn = c.toString(), C.extendedExpiresOn = l.toString(), h && (C.refreshOn = h.toString()), C.environment = n, C.clientId = i, C.realm = s, C.target = a, C.userAssertionHash = f, C.tokenType = H.isEmpty(d) ? ve.BEARER : d, g && (C.requestedClaims = g, C.requestedClaimsHash = m), ((b = C.tokenType) === null || b === void 0 ? void 0 : b.toLowerCase()) !== ve.BEARER.toLowerCase())
        switch (C.credentialType = W.ACCESS_TOKEN_WITH_AUTH_SCHEME, C.tokenType) {
          case ve.POP:
            var E = Pt.extractTokenClaims(o, u);
            if (!(!((y = E == null ? void 0 : E.cnf) === null || y === void 0) && y.kid))
              throw j.createTokenClaimsRequiredError();
            C.keyId = E.cnf.kid;
            break;
          case ve.SSH:
            C.keyId = p;
        }
      return C;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === W.ACCESS_TOKEN || t.credentialType === W.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(vs)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Gr = (
  /** @class */
  function(r) {
    Xe(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, n, o, i, s, a) {
      var c = new e();
      return c.clientId = i, c.credentialType = W.REFRESH_TOKEN, c.environment = n, c.homeAccountId = t, c.secret = o, c.userAssertionHash = a, s && (c.familyId = s), c;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === W.REFRESH_TOKEN : !1;
    }, e;
  }(vs)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Qa = [
  "interaction_required",
  "consent_required",
  "login_required"
], kf = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Vr = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
}, bt = (
  /** @class */
  function(r) {
    Xe(e, r);
    function e(t, n, o, i, s, a, c) {
      var l = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(l, e.prototype), l.timestamp = i || S.EMPTY_STRING, l.traceId = s || S.EMPTY_STRING, l.correlationId = a || S.EMPTY_STRING, l.claims = c || S.EMPTY_STRING, l.name = "InteractionRequiredAuthError", l;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var i = !!t && Qa.indexOf(t) > -1, s = !!o && kf.indexOf(o) > -1, a = !!n && Qa.some(function(c) {
        return n.indexOf(c) > -1;
      });
      return i || a || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Vr.noTokensFoundError.code, Vr.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Vr.native_account_unavailable.code, Vr.native_account_unavailable.desc);
    }, e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Yr = (
  /** @class */
  function() {
    function r(e, t, n, o, i) {
      this.account = e || null, this.idToken = t || null, this.accessToken = n || null, this.refreshToken = o || null, this.appMetadata = i || null;
    }
    return r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ft = (
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
var de = (
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
var Nf = /* @__PURE__ */ new Set([
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
var Zr = (
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
        return ne(this, function(h) {
          switch (h.label) {
            case 0:
              return i = n.resourceRequestMethod, s = n.resourceRequestUri, a = n.shrClaims, c = n.shrNonce, l = s ? new de(s) : void 0, u = l == null ? void 0 : l.getUrlComponents(), [4, this.cryptoUtils.signJwt(pe({ at: e, ts: dt.nowSeconds(), m: i == null ? void 0 : i.toUpperCase(), u: u == null ? void 0 : u.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: u == null ? void 0 : u.AbsolutePath, q: u != null && u.QueryString ? [[], u.QueryString] : void 0, client_claims: a || void 0 }, o), t, n.correlationId)];
            case 1:
              return [2, h.sent()];
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
var Pf = (
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
        throw bt.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new bt(e.error || S.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING) : new _r(e.error || S.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && bo(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (bt.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new bt(e.error, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new _r(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, i, s, a, c, l) {
      var u;
      return re(this, void 0, void 0, function() {
        var h, d, f, p, g, m, b;
        return ne(this, function(y) {
          switch (y.label) {
            case 0:
              if ((u = this.performanceClient) === null || u === void 0 || u.addQueueMeasurement(I.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (h = new Pt(e.id_token || S.EMPTY_STRING, this.cryptoObj), i && !H.isEmpty(i.nonce) && h.claims.nonce !== i.nonce)
                  throw j.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (d = h.claims.auth_time, !d)
                    throw j.createAuthTimeNotFoundError();
                  Pt.checkMaxAge(d, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Fe.generateHomeAccountId(e.client_info || S.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, h == null ? void 0 : h.claims), i && i.state && (f = Ft.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0, p = this.generateCacheRecord(e, t, n, o, h, s, i), y.label = 1;
            case 1:
              return y.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), g = new Pf(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(g)]) : [3, 3];
            case 2:
              y.sent(), y.label = 3;
            case 3:
              return a && !c && p.account && (m = p.account.generateAccountKey(), b = this.cacheStorage.getAccount(m), !b) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, h, f, void 0, l)]) : [4, this.cacheStorage.saveCacheRecord(p)];
            case 4:
              return y.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && g ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(g)]) : [3, 7];
            case 6:
              y.sent(), y.label = 7;
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
    }, r.prototype.generateCacheRecord = function(e, t, n, o, i, s, a) {
      var c = t.getPreferredCache();
      if (H.isEmpty(c))
        throw j.createInvalidCacheEnvironmentError();
      var l, u;
      !H.isEmpty(e.id_token) && i && (l = Zt.createIdTokenEntity(this.homeAccountIdentifier, c, e.id_token || S.EMPTY_STRING, this.clientId, i.claims.tid || S.EMPTY_STRING), u = Fe.createAccount({
        homeAccountId: this.homeAccountIdentifier,
        idTokenClaims: i.claims,
        clientInfo: e.client_info || S.EMPTY_STRING,
        cloudGraphHostName: a == null ? void 0 : a.cloud_graph_host_name,
        msGraphHost: a == null ? void 0 : a.msgraph_host
      }, t));
      var h = null;
      if (!H.isEmpty(e.access_token)) {
        var d = e.scope ? De.fromString(e.scope) : new De(o.scopes || []), f = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, p = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, g = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, m = n + f, b = m + p, y = g && g > 0 ? n + g : void 0;
        h = er.createAccessTokenEntity(this.homeAccountIdentifier, c, e.access_token || S.EMPTY_STRING, this.clientId, i ? i.claims.tid || S.EMPTY_STRING : t.tenant, d.printScopes(), m, b, this.cryptoObj, y, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var C = null;
      H.isEmpty(e.refresh_token) || (C = Gr.createRefreshTokenEntity(this.homeAccountIdentifier, c, e.refresh_token || S.EMPTY_STRING, this.clientId, e.foci, s));
      var w = null;
      return H.isEmpty(e.foci) || (w = Ki.createAppMetadataEntity(this.clientId, c, e.foci)), new Yr(u, l, h, C, w);
    }, r.generateAuthenticationResult = function(e, t, n, o, i, s, a, c, l) {
      var u, h, d;
      return re(this, void 0, void 0, function() {
        var f, p, g, m, b, y, C, w, E, T, A;
        return ne(this, function(_) {
          switch (_.label) {
            case 0:
              if (f = S.EMPTY_STRING, p = [], g = null, b = S.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== ve.POP)
                return [3, 2];
              if (y = new Zr(e), C = n.accessToken, w = C.secret, E = C.keyId, !E)
                throw j.createKeyIdMissingError();
              return [4, y.signPopToken(w, E, i)];
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
var Al = (
  /** @class */
  function(r) {
    Xe(e, r);
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
              return i = s.sent(), [2, de.appendQueryString(this.authority.authorizationEndpoint, i)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, n) {
      var o, i, s, a, c, l;
      return re(this, void 0, void 0, function() {
        var u, h, d, f, p, g, m = this;
        return ne(this, function(b) {
          switch (b.label) {
            case 0:
              if (!t || !t.code)
                throw j.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.AuthClientAcquireToken, t.correlationId), u = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), h = dt.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return d = b.sent(), f = (a = d.headers) === null || a === void 0 ? void 0 : a[nt.X_MS_REQUEST_ID], p = (c = d.headers) === null || c === void 0 ? void 0 : c[nt.X_MS_HTTP_VERSION], p && (u == null || u.addStaticFields({
                httpVerAuthority: p
              })), g = new So(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(I.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, h, t, n, void 0, void 0, void 0, f).then(function(y) {
                return u == null || u.endMeasurement({
                  success: !0
                }), y;
              }).catch(function(y) {
                throw m.logger.verbose("Error in fetching token in ACC", t.correlationId), u == null || u.endMeasurement({
                  errorCode: y.errorCode,
                  subErrorCode: y.subError,
                  success: !1
                }), y;
              })];
          }
        });
      });
    }, e.prototype.handleFragmentResponse = function(t, n) {
      var o = new So(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), i = new de(t), s = de.getDeserializedHash(i.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw j.createNoAuthCodeInServerResponseError();
      return pe(pe({}, s), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: s.code
      });
    }, e.prototype.getLogoutUri = function(t) {
      if (!t)
        throw we.createEmptyLogoutRequestError();
      var n = this.createLogoutUrlQueryString(t);
      return de.appendQueryString(this.authority.endSessionEndpoint, n);
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, i;
      return re(this, void 0, void 0, function() {
        var s, a, c, l, u, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.AuthClientExecuteTokenRequest, n.correlationId), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), a = de.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
            case 1:
              if (c = f.sent(), l = void 0, n.clientInfo)
                try {
                  u = bo(n.clientInfo, this.cryptoUtils), l = {
                    credential: "" + u.uid + Ae.CLIENT_INFO_SEPARATOR + u.utid,
                    type: tt.HOME_ACCOUNT_ID
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
              }, [2, this.executePostToTokenEndpoint(a, c, h, d)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o;
      return re(this, void 0, void 0, function() {
        var i, s, a, c, l, u, h, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.AuthClientCreateTokenRequestBody, t.correlationId), i = new kn(), i.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? i.addRedirectUri(t.redirectUri) : vr.validateRedirectUri(t.redirectUri), i.addScopes(t.scopes), i.addAuthorizationCode(t.code), i.addLibraryInfo(this.config.libraryInfo), i.addApplicationTelemetry(this.config.telemetry.application), i.addThrottling(), this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && i.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, i.addClientAssertion(s.assertion), i.addClientAssertionType(s.assertionType)), i.addGrantType(vo.AUTHORIZATION_CODE_GRANT), i.addClientInfo(), t.authenticationScheme !== ve.POP ? [3, 2] : (a = new Zr(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.PopTokenGenerateCnf, t.correlationId), [4, a.generateCnf(t)]);
            case 1:
              return c = f.sent(), i.addPopToken(c.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ve.SSH)
                if (t.sshJwk)
                  i.addSshJwk(t.sshJwk);
                else
                  throw we.createMissingSshJwkError();
              f.label = 3;
            case 3:
              if (l = t.correlationId || this.config.cryptoInterface.createNewGuid(), i.addCorrelationId(l), (!H.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities), u = void 0, t.clientInfo)
                try {
                  h = bo(t.clientInfo, this.cryptoUtils), u = {
                    credential: "" + h.uid + Ae.CLIENT_INFO_SEPARATOR + h.utid,
                    type: tt.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              else
                u = t.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && u)
                switch (u.type) {
                  case tt.HOME_ACCOUNT_ID:
                    try {
                      h = zr(u.credential), i.addCcsOid(h);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case tt.UPN:
                    i.addCcsUpn(u.credential);
                    break;
                }
              return t.tokenBodyParameters && i.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[ie.RETURN_SPA_CODE]) && i.addExtraQueryParameters((d = {}, d[ie.RETURN_SPA_CODE] = "1", d)), [2, i.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var n;
      return re(this, void 0, void 0, function() {
        var o, i, s, a, c, l, l, l, u, h;
        return ne(this, function(d) {
          switch (d.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.AuthClientCreateQueryString, t.correlationId), o = new kn(), o.addClientId(this.config.authOptions.clientId), i = Go(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(i), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== He.SELECT_ACCOUNT)
                if (t.sid && t.prompt === He.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (a = this.extractAccountSid(t.account), c = this.extractLoginHint(t.account), c) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(c);
                    try {
                      l = zr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (a && t.prompt === He.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(a);
                    try {
                      l = zr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      l = zr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!H.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== ve.POP ? [3, 2] : (u = new Zr(this.cryptoUtils), [4, u.generateCnf(t)])) : [3, 2];
            case 1:
              h = d.sent(), o.addPopToken(h.reqCnfString), d.label = 2;
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
  }(ms)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Rl = (
  /** @class */
  function(r) {
    Xe(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, i, s, a, c, l;
      return re(this, void 0, void 0, function() {
        var u, h, d, f, p, g, m = this;
        return ne(this, function(b) {
          switch (b.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RefreshTokenClientAcquireToken, t.correlationId), u = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), h = dt.nowSeconds(), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return d = b.sent(), f = (s = d.headers) === null || s === void 0 ? void 0 : s[nt.X_MS_HTTP_VERSION], u == null || u.addStaticFields({
                refreshTokenSize: ((a = d.body.refresh_token) === null || a === void 0 ? void 0 : a.length) || 0
              }), f && (u == null || u.addStaticFields({
                httpVerToken: f
              })), p = (c = d.headers) === null || c === void 0 ? void 0 : c[nt.X_MS_REQUEST_ID], g = new So(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(I.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, h, t, void 0, void 0, !0, t.forceCache, p).then(function(y) {
                return u == null || u.endMeasurement({
                  success: !0
                }), y;
              }).catch(function(y) {
                throw m.logger.verbose("Error in fetching refresh token", t.correlationId), u == null || u.endMeasurement({
                  errorCode: y.errorCode,
                  subErrorCode: y.subError,
                  success: !1
                }), y;
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
            } catch (h) {
              if (c = h instanceof bt && h.errorCode === Vr.noTokensFoundError.code, l = h instanceof _r && h.errorCode === Ya.INVALID_GRANT_ERROR && h.subError === Ya.CLIENT_MISMATCH_ERROR, c || l)
                return (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw h;
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
            throw a == null || a.discardMeasurement(), bt.createNoTokensFoundError();
          return a == null || a.endMeasurement({
            success: !0
          }), l = pe(pe({}, t), { refreshToken: c.secret, authenticationScheme: t.authenticationScheme || ve.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: tt.HOME_ACCOUNT_ID
          } }), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(l)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, i, s;
      return re(this, void 0, void 0, function() {
        var a, c, l, u, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.RefreshTokenClientExecuteTokenRequest, t.correlationId), a = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(I.RefreshTokenClientExecuteTokenRequest, t.correlationId), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RefreshTokenClientCreateTokenRequestBody, t.correlationId), c = this.createTokenQueryParameters(t), l = de.appendQueryString(n.tokenEndpoint, c), [4, this.createTokenRequestBody(t)];
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
        var s, a, c, l, u, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.BaseClientCreateTokenRequestHeaders, s), c = new kn(), c.addClientId(this.config.authOptions.clientId), c.addScopes(t.scopes), c.addGrantType(vo.REFRESH_TOKEN_GRANT), c.addClientInfo(), c.addLibraryInfo(this.config.libraryInfo), c.addApplicationTelemetry(this.config.telemetry.application), c.addThrottling(), this.serverTelemetryManager && c.addServerTelemetry(this.serverTelemetryManager), c.addCorrelationId(s), c.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && c.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (l = this.config.clientCredentials.clientAssertion, c.addClientAssertion(l.assertion), c.addClientAssertionType(l.assertionType)), t.authenticationScheme !== ve.POP ? [3, 2] : (u = new Zr(this.cryptoUtils, this.performanceClient), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.PopTokenGenerateCnf, t.correlationId), [4, u.generateCnf(t)]);
            case 1:
              return h = f.sent(), c.addPopToken(h.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ve.SSH)
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
                  case tt.HOME_ACCOUNT_ID:
                    try {
                      d = zr(t.ccsCredential.credential), c.addCcsOid(d);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case tt.UPN:
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
  }(ms)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Of = (
  /** @class */
  function(r) {
    Xe(e, r);
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
                return o = new Rl(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(Xt.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), j.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !H.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(Xt.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), j.createRefreshRequiredError();
              if (!t.account)
                throw j.createNoAccountInSilentRequestError();
              if (c = t.authority || this.authority.getPreferredCache(), l = this.cacheManager.readCacheRecord(t.account, t, c), l.accessToken) {
                if (dt.wasClockTurnedBack(l.accessToken.cachedAt) || dt.isTokenExpired(l.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(Xt.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), j.createRefreshRequiredError();
                if (l.accessToken.refreshOn && dt.isTokenExpired(l.accessToken.refreshOn, 0))
                  throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(Xt.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), j.createRefreshRequiredError();
              } else
                throw (i = this.serverTelemetryManager) === null || i === void 0 || i.setCacheOutcome(Xt.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), j.createRefreshRequiredError();
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
              if (t.idToken && (o = new Pt(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (i = o == null ? void 0 : o.claims.auth_time, !i)
                  throw j.createAuthTimeNotFoundError();
                Pt.checkMaxAge(i, n.maxAge);
              }
              return [4, So.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(ms)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function xf(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var kl = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Ja = kl.endpointMetadata, Xa = kl.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.3 2024-06-06 */
var qi = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = dt.nowSeconds() + In.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = dt.nowSeconds() + In.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= dt.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(In.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Mf(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Lf(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Df = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, i, s;
      return re(this, void 0, void 0, function() {
        var a, c, l, u, h;
        return ne(this, function(d) {
          switch (d.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RegionDiscoveryDetectRegion, this.correlationId), a = e, a)
                return [3, 8];
              c = r.IMDS_OPTIONS, d.label = 1;
            case 1:
              return d.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(S.IMDS_VERSION, c)];
            case 2:
              return l = d.sent(), l.status === qr.httpSuccess && (a = l.body, t.region_source = Qt.IMDS), l.status !== qr.httpBadRequest ? [3, 5] : ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(c)]);
            case 3:
              return u = d.sent(), u ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(u, c)]) : (t.region_source = Qt.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              h = d.sent(), h.status === qr.httpSuccess && (a = h.body, t.region_source = Qt.IMDS), d.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return d.sent(), t.region_source = Qt.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Qt.ENVIRONMENT_VARIABLE, d.label = 9;
            case 9:
              return a || (t.region_source = Qt.FAILED_AUTO_DETECTION), [2, a || null];
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
var Mn = (
  /** @class */
  function() {
    function r(e, t, n, o, i, s, a) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = s, this.correlationId = a, this.regionDiscovery = new Df(t, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(S.CIAM_AUTH_URL))
        return Ve.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case S.ADFS:
            return Ve.Adfs;
          case S.DSTS:
            return Ve.Dsts;
        }
      return Ve.Default;
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
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Ve.Default && this.protocolMode === Xr.AAD;
    }, r.prototype.replaceTenant = function(e) {
      return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, r.prototype.replacePath = function(e) {
      var t = this, n = e, o = new de(this.metadata.canonical_authority), i = o.getUrlComponents(), s = i.PathSegments, a = this.canonicalAuthorityUrlComponents.PathSegments;
      return a.forEach(function(c, l) {
        var u = s[l];
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
        return this.authorityType === Ve.Adfs || this.authorityType === Ve.Dsts || this.protocolMode === Xr.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
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
              return s = c.sent(), i !== ut.CACHE && s !== ut.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), a = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(a, o), this.metadata = o, [
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.AuthorityUpdateEndpointMetadata, this.correlationId), c = this.getEndpointMetadataFromConfig(), c ? (e.updateEndpointMetadata(c, !1), [2, ut.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, ut.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(I.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return c = u.sent(), c ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(c)]) : [3, 3] : [3, 4];
            case 2:
              c = u.sent(), u.label = 3;
            case 3:
              return e.updateEndpointMetadata(c, !0), [2, ut.NETWORK];
            case 4:
              return l = this.getEndpointMetadataFromHardcodedValues(), l && !this.authorityOptions.skipAuthorityMetadataCache ? !((s = this.authorityOptions.azureRegionConfiguration) === null || s === void 0) && s.azureRegion ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(I.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(l)]) : [3, 6] : [3, 7];
            case 5:
              l = u.sent(), u.label = 6;
            case 6:
              return e.updateEndpointMetadata(l, !1), [2, ut.HARDCODED_VALUES];
            case 7:
              throw j.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
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
              return n = o.sent(), [2, xf(n.body) ? n.body : null];
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
      return this.canonicalAuthority in Ja ? Ja[this.canonicalAuthority] : null;
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
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || S.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || S.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || S.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, ut.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), i = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !i ? (this.logger.verbose("Found metadata in the cache."), [2, ut.CACHE]) : (i && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(I.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = a.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, ut.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), s = this.getCloudDiscoveryMetadataFromHarcodedValues(), s && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(s, !1), [2, ut.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), we.createUntrustedAuthorityError();
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === Ve.Ciam)
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
              if (i = u.sent(), s = void 0, a = void 0, Mf(i.body))
                s = i.body, a = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (Lf(i.body)) {
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
      return this.canonicalAuthority in Xa ? Xa[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return de.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
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
      var o = new de(e);
      o.validateAsUri();
      var i = o.getUrlComponents(), s = t + "." + i.HostNameAndPort;
      this.isPublicCloudAuthority(i.HostNameAndPort) && (s = t + "." + S.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var a = de.constructAuthorityUriFromObject(pe(pe({}, o.getUrlComponents()), { HostNameAndPort: s })).urlString;
      return n ? a + "?" + n : a;
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
    return r.createDiscoveredInstance = function(e, t, n, o, i, s, a) {
      return re(this, void 0, void 0, function() {
        var c, l, u;
        return ne(this, function(h) {
          switch (h.label) {
            case 0:
              s == null || s.addQueueMeasurement(I.AuthorityFactoryCreateDiscoveredInstance, a), c = Mn.transformCIAMAuthority(e), l = r.createInstance(c, t, n, o, i, s, a), h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), s == null || s.setPreQueueTime(I.AuthorityResolveEndpointsAsync, a), [4, l.resolveEndpointsAsync()];
            case 2:
              return h.sent(), [2, l];
            case 3:
              throw u = h.sent(), j.createEndpointDiscoveryIncompleteError(u);
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
var Za = (
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
var Uf = {
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
}, ec = (
  /** @class */
  function(r) {
    Xe(e, r);
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
var Hf = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw ec.createMissingKidError();
      if (!e.alg)
        throw ec.createMissingAlgError();
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
var Ff = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = Xt.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || S.EMPTY_STRING, this.wrapperVer = e.wrapperVer || S.EMPTY_STRING, this.telemetryCacheKey = Pe.CACHE_KEY + Ae.CACHE_KEY_SEPARATOR + e.clientId;
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
var Nl = (
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
      return Nf;
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
          return n.endMeasurement(pe(pe({}, c), l), a);
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
        return s[e.name + "DurationMs"] = Math.floor(l), pe({}, s);
      var u = pe(pe({}, s), e), h = 0;
      return (i = u.incompleteSubMeasurements) === null || i === void 0 || i.forEach(function(d) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + d.name + " found for " + e.name, u.correlationId), h++;
      }), u.incompleteSubMeasurements = void 0, u = pe(pe({}, u), { durationMs: Math.round(l), queuedTimeMs: c.totalQueueTime, queuedCount: c.totalQueueCount, queuedManuallyCompletedCount: c.manuallyCompletedCount, status: Eo.Completed, incompleteSubsCount: h }), this.truncateIntegralFields(u, this.getIntFields()), this.emitEvents([u], e.correlationId), u;
    }, r.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var n = this.eventsByCorrelationId.get(t);
      n ? this.eventsByCorrelationId.set(t, pe(pe({}, n), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
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
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, pe({}, e)));
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
var tc = (
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
), Bf = (
  /** @class */
  function(r) {
    Xe(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new tc();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new tc();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(Nl)
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
var yt = {
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
}, Ht;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(Ht || (Ht = {}));
var _e;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(_e || (_e = {}));
var It;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(It || (It = {}));
var he;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(he || (he = {}));
var _t;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(_t || (_t = {}));
var Wr;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Wr || (Wr = {}));
var be;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(be || (be = {}));
var K;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(K || (K = {}));
var rc;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(rc || (rc = {}));
var nc = {
  scopes: qn
}, en = "jwk", oc;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(oc || (oc = {}));
var zi = "msal.db", jf = 1, $f = zi + ".keys", We;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
})(We || (We = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ze = {
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
      return new e(ze.redirectUriNotSet.code, ze.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(ze.postLogoutUriNotSet.code, ze.postLogoutUriNotSet.desc);
    }, e.createStorageNotSupportedError = function(t) {
      return new e(ze.storageNotSupportedError.code, ze.storageNotSupportedError.desc + " Given Location: " + t);
    }, e.createRedirectCallbacksNotSetError = function() {
      return new e(ze.noRedirectCallbacksSet.code, ze.noRedirectCallbacksSet.desc);
    }, e.createStubPcaInstanceCalledError = function() {
      return new e(ze.stubPcaInstanceCalled.code, ze.stubPcaInstanceCalled.desc);
    }, e.createInMemoryRedirectUnavailableError = function() {
      return new e(ze.inMemRedirectUnavailable.code, ze.inMemRedirectUnavailable.desc);
    }, e.createEntropyNotProvided = function() {
      return new e(ze.entropyNotProvided.code, ze.entropyNotProvided.desc);
    }, e;
  }(z)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ic = (
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
var Pl = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (H.isEmpty(t))
        return null;
      try {
        var n = Ft.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw j.createInvalidStateError(t, o);
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
            return new ic(t);
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
            return new ic(t || _e.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case _e.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, n = S.CACHE_PREFIX + "." + Ie.ID_TOKEN, o = S.CACHE_PREFIX + "." + Ie.CLIENT_INFO, i = S.CACHE_PREFIX + "." + Ie.ERROR, s = S.CACHE_PREFIX + "." + Ie.ERROR_DESC, a = this.browserStorage.getItem(n), c = this.browserStorage.getItem(o), l = this.browserStorage.getItem(i), u = this.browserStorage.getItem(s), h = [a, c, l, u], d = [Ie.ID_TOKEN, Ie.CLIENT_INFO, Ie.ERROR, Ie.ERROR_DESC];
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
      i.forEach(function(s) {
        if (t.isCredentialKey(s)) {
          var a = t.getItem(s);
          if (a) {
            var c = t.validateAndParseJson(a);
            if (c && c.hasOwnProperty("credentialType"))
              switch (c.credentialType) {
                case W.ID_TOKEN:
                  if (Zt.isIdTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + s + " found, saving key to token key map");
                    var l = Ge.toObject(new Zt(), c), u = t.updateCredentialCacheKey(s, l);
                    t.addTokenKey(u, W.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + s);
                  break;
                case W.ACCESS_TOKEN:
                case W.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (er.isAccessTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + s + " found, saving key to token key map");
                    var h = Ge.toObject(new er(), c), u = t.updateCredentialCacheKey(s, h);
                    t.addTokenKey(u, W.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + s);
                  break;
                case W.REFRESH_TOKEN:
                  if (Gr.isRefreshTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + s + " found, saving key to token key map");
                    var d = Ge.toObject(new Gr(), c), u = t.updateCredentialCacheKey(s, d);
                    t.addTokenKey(u, W.REFRESH_TOKEN);
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
      return !o || !Fe.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : Ge.toObject(new Fe(), o);
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
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return r.prototype.removeAccount.call(this, t), this.removeAccountKeyFromMap(t), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeIdToken = function(t) {
      r.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, W.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return r.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, W.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      r.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, W.REFRESH_TOKEN);
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
        case W.ID_TOKEN:
          o.idToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(t));
          break;
        case W.ACCESS_TOKEN:
          o.accessToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(t));
          break;
        case W.REFRESH_TOKEN:
          o.refreshToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(t));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), j.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, n) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case W.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var i = o.idToken.indexOf(t);
          i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case W.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var s = o.accessToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case W.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var a = o.refreshToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), j.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Zt.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), Ge.toObject(new Zt(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, W.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !er.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), Ge.toObject(new er(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, W.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Gr.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), Ge.toObject(new Gr(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, W.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Ki.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), Ge.toObject(new Ki(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !_o.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), Ge.toObject(new _o(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && qi.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), Ge.toObject(new qi(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, n = this.internalStorage.getKeys();
      return n.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, n) {
      this.internalStorage.setItem(Wr.WRAPPER_SKU, t), this.internalStorage.setItem(Wr.WRAPPER_VER, n);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Wr.WRAPPER_SKU) || S.EMPTY_STRING, n = this.internalStorage.getItem(Wr.WRAPPER_VER) || S.EMPTY_STRING;
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
      return !o || !Za.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), Ge.toObject(new Za(), o));
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
      return fs(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
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
      var n = Ft.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(he.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = Ft.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(he.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = Ft.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(he.REQUEST_STATE + "." + n);
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
          type: tt.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(he.CCS_CREDENTIAL, JSON.stringify(u), !0);
      } else if (!H.isEmpty(i)) {
        var u = {
          credential: i,
          type: tt.UPN
        };
        this.setTemporaryCache(he.CCS_CREDENTIAL, JSON.stringify(u), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), H.isEmpty(t) || this.getKeys().forEach(function(o) {
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
            var s = Pl.extractBrowserRequestState(n.cryptoImpl, i);
            s && s.interactionType === t && (n.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + i), n.resetRequestCache(i));
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
        throw M.createNoTokenRequestCacheError();
      var i = this.validateAndParseJson(n.base64Decode(o));
      if (!i)
        throw M.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(he.REQUEST_PARAMS)), H.isEmpty(i.authority)) {
        var s = this.generateAuthorityKey(t), a = this.getTemporaryCache(s);
        if (!a)
          throw M.createNoCachedAuthorityError();
        i.authority = a;
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
        var i = new Pt(o, this.cryptoImpl);
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
      var o, i, s, a, c, l;
      return k(this, void 0, void 0, function() {
        var u, h, d, f;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return u = Zt.createIdTokenEntity(((o = t.account) === null || o === void 0 ? void 0 : o.homeAccountId) || "", ((i = t.account) === null || i === void 0 ? void 0 : i.environment) || "", t.idToken, this.clientId, t.tenantId), n.claims ? [4, this.cryptoImpl.hashString(n.claims)] : [3, 2];
            case 1:
              h = p.sent(), p.label = 2;
            case 2:
              return d = er.createAccessTokenEntity(
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
                h
              ), f = new Yr(void 0, u, d), [2, this.saveCacheRecord(f)];
          }
        });
      });
    }, e;
  }(Ge)
), Kf = function(r, e) {
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
var gi = "@azure/msal-browser", Nn = "2.39.0";
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var qf = (
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
                method: It.GET,
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
                method: It.POST,
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
var zf = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, this.sendRequestAsync(e, It.GET, t)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, this.sendRequestAsync(e, It.POST, t)];
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
          (a.status < 200 || a.status >= 300) && (t === It.POST ? s(M.createPostRequestFailedError("Failed with status " + a.status, e)) : s(M.createGetRequestFailedError("Failed with status " + a.status, e)));
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
          window.navigator.onLine ? t === It.POST ? s(M.createPostRequestFailedError("Failed with status " + a.status, e)) : s(M.createGetRequestFailedError("Failed with status " + a.status, e)) : s(M.createNoNetworkConnectivityError());
        }, t === It.POST && n && n.body)
          a.send(n.body);
        else if (t === It.GET)
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
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(yt.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var e = new de(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new qf() : new zf();
    }, r.blockReloadInHiddenIframes = function() {
      var e = de.hashContainsKnownProperties(window.location.hash);
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
var Ol = (
  /** @class */
  function() {
    function r(e, t, n, o, i, s, a, c, l) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = s, this.nativeMessageHandler = c, this.correlationId = l || this.browserCrypto.createNewGuid(), this.logger = o.clone(yt.MSAL_SKU, Nn, this.correlationId), this.performanceClient = a;
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
              if (o = fs(e && e.scopes || []), i = B(B({}, e), {
                correlationId: this.correlationId,
                authority: n,
                scopes: o
              }), !i.authenticationScheme)
                i.authenticationScheme = ve.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (i.authenticationScheme === ve.SSH) {
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
      return de.getAbsoluteUrl(t, Se.getCurrentUri());
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
      return new Ff(n, this.browserStorage);
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
var sn = (
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
      return k(this, void 0, void 0, function() {
        var i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(I.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = s.sent(), [2, new Al(i, this.performanceClient)];
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
                  sku: yt.MSAL_SKU,
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
      var i = Pl.extractBrowserRequestState(this.browserCrypto, t.state);
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
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), i = {
                interactionType: n
              }, s = Ft.setRequestState(this.browserCrypto, t && t.state || S.EMPTY_STRING, i), this.performanceClient.setPreQueueTime(I.InitializeBaseRequest, this.correlationId), c = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return a = B.apply(void 0, [B.apply(void 0, c.concat([h.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: mo.FRAGMENT }]), l = t.account || this.browserStorage.getActiveAccount(), l && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + l.homeAccountId, this.correlationId), a.account = l), H.isEmpty(a.loginHint) && !l && (u = this.browserStorage.getLegacyLoginHint(), u && (a.loginHint = u)), [2, a];
          }
        });
      });
    }, e;
  }(Ol)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ys = (
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
        var s, a, c, l, u, h;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(I.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), a = this.browserStorage.getTemporaryCache(s), !a)
                throw j.createStateNotFoundError("Cached State");
              return c = this.browserStorage.generateNonceKey(a), l = this.browserStorage.getTemporaryCache(c), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(I.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              d.sent(), d.label = 2;
            case 2:
              return i && (e.nonce = l || void 0), e.state = a, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (u = this.checkCcsCredentials(), u && (this.authCodeRequest.ccsCredential = u)), this.performanceClient.setPreQueueTime(I.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return h = d.sent(), this.browserStorage.cleanRequestByState(t), [2, h];
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
var sc = (
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), H.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(he.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(he.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
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
        var s, a, c, l, u, h, d;
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
              return c.nonce = u || void 0, c.state = a, c.client_info ? this.authCodeRequest.clientInfo = c.client_info : (h = this.checkCcsCredentials(), h && (this.authCodeRequest.ccsCredential = h)), [4, this.authModule.acquireToken(this.authCodeRequest, c)];
            case 3:
              return d = f.sent(), this.browserStorage.cleanRequestByState(n), [2, d];
          }
        });
      });
    }, e;
  }(ys)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ee;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(ee || (ee = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Jt;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(Jt || (Jt = {}));
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
    Me(e, r);
    function e(t, n, o) {
      var i = r.call(this, t, n) || this;
      return Object.setPrototypeOf(i, e.prototype), i.name = "NativeAuthError", i.ext = o, i;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Jt.PERSISTENT_ERROR || this.ext.status === Jt.DISABLED))
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
          case Jt.ACCOUNT_UNAVAILABLE:
            return bt.createNativeAccountUnavailableError();
          case Jt.USER_INTERACTION_REQUIRED:
            return new bt(t, n);
          case Jt.USER_CANCEL:
            return M.createUserCancelledError();
          case Jt.NO_NETWORK:
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
var xl = (
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
              return i = s.sent(), [2, new Of(i, this.performanceClient)];
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
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Qr = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, h, d, f) {
      var p = r.call(this, t, n, o, i, s, a, l, u, f) || this;
      return p.apiId = c, p.accountId = h, p.nativeMessageHandler = u, p.nativeStorageManager = d, p.silentCacheClient = new xl(t, p.nativeStorageManager, o, i, s, a, l, u, f), p;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(I.NativeInteractionClientAcquireToken, t.correlationId), o = dt.nowSeconds(), [4, this.initializeNativeRequest(t)];
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
                method: Ht.GetToken,
                request: i
              }, [4, this.nativeMessageHandler.sendMessage(a)];
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
                method: Ht.GetToken,
                request: n
              }, l.label = 2;
            case 2:
              return l.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return i = l.sent(), this.validateNativeResponse(i), [3, 5];
            case 4:
              if (s = l.sent(), s instanceof Rt && s.isFatal())
                throw s;
              return [3, 5];
            case 5:
              return this.browserStorage.setTemporaryCache(he.NATIVE_REQUEST, JSON.stringify(n), !0), a = {
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
              n = t.prompt, o = Ga(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(he.NATIVE_REQUEST)), i = {
                method: Ht.GetToken,
                request: o
              }, s = dt.nowSeconds(), u.label = 1;
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
                throw Rt.createUserSwitchError();
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
      return new Pt(t.id_token || S.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = Fe.generateHomeAccountId(t.client_info || S.EMPTY_STRING, Ve.Default, this.logger, this.browserCrypto, n.claims);
      return o;
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? De.fromString(t.scope) : De.fromString(n.scope);
    }, e.prototype.generatePopAccessToken = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              if (n.tokenType !== ve.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new Zr(this.browserCrypto), i = {
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
        var c, l, u, h, d, f, p, g;
        return N(this, function(m) {
          switch (m.label) {
            case 0:
              return c = this.addTelemetryFromNativeResponse(t), l = t.scope ? De.fromString(t.scope) : De.fromString(n.scope), u = t.account.properties || {}, h = u.UID || o.claims.oid || o.claims.sub || S.EMPTY_STRING, d = u.TenantId || o.claims.tid || S.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return f = m.sent(), p = n.tokenType === ve.POP ? ve.POP : ve.BEARER, g = {
                authority: s,
                uniqueId: h,
                tenantId: d,
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
      var l = Zt.createIdTokenEntity(o, n.authority, t.id_token || S.EMPTY_STRING, n.clientId, i.claims.tid || S.EMPTY_STRING), u = n.tokenType === ve.POP ? S.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, h = c + u, d = this.generateScopes(t, n), f = er.createAccessTokenEntity(o, n.authority, s, n.clientId, i ? i.claims.tid || S.EMPTY_STRING : a, d.printScopes(), h, 0, this.browserCrypto), p = new Yr(void 0, l, f);
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
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u, h, d, f = this;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(n, t.account)] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return o = new de(n), o.validateAsUri(), i = t.scopes, s = Ga(t, ["scopes"]), a = new De(i || []), a.appendScopes(qn), c = function() {
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
              }), t.authenticationScheme !== ve.POP ? [3, 4] : (u = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, h = new Zr(this.browserCrypto), [4, h.generateCnf(u)]);
            case 3:
              d = p.sent(), l.reqCnf = d.reqCnfString, l.keyId = d.kid, p.label = 4;
            case 4:
              return [2, l];
          }
        });
      });
    }, e;
  }(Ol)
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
              method: Ht.HandshakeRequest
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
        if (!(!t.channel || t.channel !== bn.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Ht.HandshakeRequest) {
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
        if (i === Ht.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(Rt.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(Rt.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw z.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (i === Ht.HandshakeResponse) {
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
          case ve.BEARER:
          case ve.POP:
            return t.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Gf = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, h) {
      var d = r.call(this, t, n, o, i, s, a, c, u, h) || this;
      return d.nativeStorage = l, d;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u, h, d = this;
        return N(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Redirect)];
            case 1:
              n = f.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || S.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(be.acquireTokenRedirect), i = function(p) {
                p.persisted && (d.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), d.browserStorage.cleanRequestByState(n.state), d.eventHandler.emitEvent(ee.RESTORE_FROM_BFCACHE, K.Redirect));
              }, f.label = 2;
            case 2:
              return f.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = f.sent(), this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return a = f.sent(), this.logger.verbose("Auth code client created"), c = new sc(a, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, a.getAuthCodeUrl(B(B({}, n), { nativeBroker: Er.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw h = f.sent(), h instanceof z && h.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", i), o.cacheFailedRequest(h), this.browserStorage.cleanRequestByState(n.state), h;
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
        var n, o, i, s, a, c, l, u, h, d, f, p;
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
                s = de.getDeserializedHash(o), i = this.validateAndExtractStateFromHash(s, K.Redirect), this.logger.verbose("State extracted from hash");
              } catch (m) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + m), this.browserStorage.cleanRequestByInteractionType(K.Redirect), [2, null];
              }
              return a = this.browserStorage.getTemporaryCache(he.ORIGIN_URI, !0) || S.EMPTY_STRING, c = de.removeHashFromUrl(a), l = de.removeHashFromUrl(window.location.href), c === l && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, i, n)]) : [3, 3];
            case 2:
              return u = g.sent(), a.indexOf("#") > -1 && Se.replaceHash(a), [2, u];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, i, n)]);
            case 4:
              return !Se.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(he.URL_HASH, o, !0), h = {
                apiId: be.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, d = !0, !a || a === "null" ? (f = Se.getHomepage(), this.browserStorage.setTemporaryCache(he.ORIGIN_URI, f, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(f, h)]) : [3, 6]) : [3, 9];
            case 5:
              return d = g.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + a), [4, this.navigationClient.navigateInternal(a, h)];
            case 7:
              d = g.sent(), g.label = 8;
            case 8:
              if (!d)
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
      var n = de.hashContainsKnownProperties(t);
      if (n)
        return Se.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
      var o = this.browserStorage.getTemporaryCache(he.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(he.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, e.prototype.handleHash = function(t, n, o) {
      return k(this, void 0, void 0, function() {
        var i, s, a, c, l, u, h, d = this;
        return N(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), s = de.getDeserializedHash(t), s.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw M.createNativeConnectionNotEstablishedError();
                return a = new Qr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, i.correlationId), c = Ft.parseRequestState(this.browserCrypto, n).userRequestState, [2, a.acquireToken(B(B({}, i), {
                  state: c,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  d.browserStorage.cleanRequestByState(n);
                })];
              }
              if (l = this.browserStorage.getCachedAuthority(n), !l)
                throw M.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, i.correlationId), [4, this.createAuthCodeClient(o, l)];
            case 1:
              return u = f.sent(), this.logger.verbose("Auth code client created"), wo.removeThrottle(this.browserStorage, this.config.auth.clientId, i), h = new sc(u, this.browserStorage, i, this.logger, this.browserCrypto, this.performanceClient), [4, h.handleCodeResponseFromHash(t, n, u.authority, this.networkClient)];
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
      return de.getAbsoluteUrl(n, Se.getCurrentUri());
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Vf = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, h) {
      var d = r.call(this, t, n, o, i, s, a, c, u, h) || this;
      return d.unloadWindow = d.unloadWindow.bind(d), d.nativeStorage = l, d;
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
        var s, a, c, l, u, h, d, f, p, g, m, b, y, C, w, E, T, A = this;
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
              return l = _.sent(), this.logger.verbose("Auth code client created"), u = Er.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), h = void 0, u && (h = this.performanceClient.startMeasurement(I.FetchAccountIdWithNativeBroker, t.correlationId)), [4, l.getAuthCodeUrl(B(B({}, a), { nativeBroker: u }))];
            case 5:
              return d = _.sent(), f = new ys(l, this.browserStorage, c, this.logger, this.performanceClient), p = {
                popup: i,
                popupName: n,
                popupWindowAttributes: o
              }, g = this.initiateAuthRequest(d, p), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: g }, null), [4, this.monitorPopupForHash(g)];
            case 6:
              if (m = _.sent(), b = de.getDeserializedHash(m), y = this.validateAndExtractStateFromHash(b, K.Popup, a.correlationId), wo.removeThrottle(this.browserStorage, this.config.auth.clientId, c), b.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), h && h.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw M.createNativeConnectionNotEstablishedError();
                return C = new Qr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, b.accountId, this.nativeStorage, a.correlationId), w = Ft.parseRequestState(this.browserCrypto, y).userRequestState, [2, C.acquireToken(B(B({}, a), {
                  state: w,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  A.browserStorage.cleanRequestByState(y);
                })];
              }
              return [4, f.handleCodeResponseFromHash(m, y, l.authority, this.networkClient)];
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
        var c, l, u, h, d, f, p;
        return N(this, function(g) {
          switch (g.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(ee.LOGOUT_START, K.Popup, t), c = this.initializeServerTelemetryManager(be.logoutPopup), g.label = 1;
            case 1:
              return g.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return g.sent(), this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(c, i)];
            case 3:
              return l = g.sent(), this.logger.verbose("Auth code client created"), u = l.getLogoutUri(t), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, K.Popup, t), h = this.openPopup(u, { popupName: n, popupWindowAttributes: o, popup: s }), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: h }, null), [4, this.waitForLogoutPopup(h)];
            case 4:
              return g.sent(), a ? (d = {
                apiId: be.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, f = de.getAbsoluteUrl(a, Se.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + f), this.navigationClient.navigateInternal(f, d)) : this.logger.verbose("No main window navigation requested"), [3, 6];
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
          H.isEmpty(l) || l === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), a++, u ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(c), n.cleanPopup(t), de.hashContainsKnownProperties(u) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(u)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + u), i(M.createHashDoesNotContainKnownPropertiesError()))) : a > s && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(c), i(M.createMonitorPopupTimeoutError())));
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
      var i, s, a, c, l = window.screenLeft ? window.screenLeft : window.screenX, u = window.screenTop ? window.screenTop : window.screenY, h = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, d = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, f = (i = o.popupSize) === null || i === void 0 ? void 0 : i.width, p = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, g = (a = o.popupPosition) === null || a === void 0 ? void 0 : a.top, m = (c = o.popupPosition) === null || c === void 0 ? void 0 : c.left;
      return (!f || f < 0 || f > h) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), f = yt.POPUP_WIDTH), (!p || p < 0 || p > d) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), p = yt.POPUP_HEIGHT), (!g || g < 0 || g > d) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), g = Math.max(0, d / 2 - yt.POPUP_HEIGHT / 2 + u)), (!m || m < 0 || m > h) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), m = Math.max(0, h / 2 - yt.POPUP_WIDTH / 2 + l)), window.open(t, n, "width=" + f + ", height=" + p + ", top=" + g + ", left=" + m + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(K.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, n) {
      return yt.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + n + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var n = t.account && t.account.homeAccountId;
      return yt.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + n + "." + this.correlationId;
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Wf = (
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
var Yf = 6e4, Wi = 6e3, Qf = 3e4, Jf = 2e3;
function Xf(r, e) {
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
    protocolMode: Xr.AAD,
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
  }, l = B(B({}, Il), {
    loggerOptions: c,
    networkClient: e ? Se.getBrowserNetworkClient() : Uf,
    navigationClient: new Wf(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Yf,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Wi,
    navigateFrameWait: e && Se.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: Qf,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || Jf,
    pollIntervalMilliseconds: yt.DEFAULT_POLL_INTERVAL_MS,
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
    auth: B(B({}, s), t),
    cache: B(B({}, a), n),
    system: B(B({}, l), u),
    telemetry: B(B({}, h), i)
  };
  return d;
}
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ml = (
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
          var u = S.EMPTY_STRING, h = t.contentWindow;
          try {
            u = h ? h.location.href : S.EMPTY_STRING;
          } catch {
          }
          if (!H.isEmpty(u)) {
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
  }(ys)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Zf = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, h, d) {
      var f = r.call(this, t, n, o, i, s, a, l, h, d) || this;
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
        var o, i, s, a, c, l, u, h, d, f = this;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = p.sent(), this.performanceClient.setPreQueueTime(I.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(B(B({}, n), { nativeBroker: Er.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return i = p.sent(), s = new Ml(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(I.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(i)];
            case 3:
              return a = p.sent(), this.performanceClient.setPreQueueTime(I.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(a, this.config.system.iframeHashTimeout)];
            case 4:
              if (c = p.sent(), l = de.getDeserializedHash(c), u = this.validateAndExtractStateFromHash(l, K.Silent, o.correlationId), l.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw M.createNativeConnectionNotEstablishedError();
                return h = new Qr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId), d = Ft.parseRequestState(this.browserCrypto, u).userRequestState, [2, h.acquireToken(B(B({}, n), { state: d, prompt: n.prompt || He.NONE })).finally(function() {
                  f.browserStorage.cleanRequestByState(u);
                })];
              }
              return this.performanceClient.setPreQueueTime(I.HandleCodeResponseFromHash, n.correlationId), [2, s.handleCodeResponseFromHash(c, u, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ep = (
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
              return i = s.sent(), [2, new Rl(i, this.performanceClient)];
          }
        });
      });
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var tp = (
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
        var o = Ge.toObject(new Fe(), n), i = o.getAccountInfo();
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
var Ll = (
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
var Bt = (
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
var Dl = (
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
      for (var t = (3 - e.length % 3) % 3, n = S.EMPTY_STRING, o = void 0, i = e.length, s = 0, a = 0; a < i; a++)
        o = a % 3, s |= e[a] << (16 >>> o & 24), (o === 2 || e.length - a === 1) && (n += String.fromCharCode(this.uint6ToB64(s >>> 18 & 63), this.uint6ToB64(s >>> 12 & 63), this.uint6ToB64(s >>> 6 & 63), this.uint6ToB64(s & 63)), s = 0);
      return t === 0 ? n : n.substring(0, n.length - t) + (t === 1 ? "=" : "==");
    }, r.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var rp = (
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
      for (var n = e.replace(/[^A-Za-z0-9\+\/]/g, S.EMPTY_STRING), o = n.length, i = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, s = new Uint8Array(i), a = void 0, c = void 0, l = 0, u = 0, h = 0; h < o; h++)
        if (c = h & 3, l |= this.b64ToUint6(n.charCodeAt(h)) << 18 - 6 * c, c === 3 || o - h === 1) {
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
var np = 32, op = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new Dl(), this.cryptoObj = e;
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
        var e = new Uint8Array(np);
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
var ip = (
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
          return [2, window.crypto.subtle.exportKey(en, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return k(this, void 0, void 0, function() {
        return N(this, function(i) {
          return [2, window.crypto.subtle.importKey(en, e, t, n, o)];
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
var sp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(fs(e));
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
          return [2, window.msrCrypto.subtle.exportKey(en, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return k(this, void 0, void 0, function() {
        return N(this, function(i) {
          return [2, window.msrCrypto.subtle.importKey(en, e, t, n, o)];
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
var ap = (
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
            var i = window.msCrypto.subtle.exportKey(en, e);
            i.addEventListener("complete", function(s) {
              var a = s.target.result, c = Bt.utf8ArrToString(new Uint8Array(a)).replace(/\r/g, S.EMPTY_STRING).replace(/\n/g, S.EMPTY_STRING).replace(/\t/g, S.EMPTY_STRING).split(" ").join(S.EMPTY_STRING).replace("\0", S.EMPTY_STRING);
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
          return i = Bt.getSortedObjectString(e), s = Bt.stringToArrayBuffer(i), [2, new Promise(function(c, l) {
            var u = window.msCrypto.subtle.importKey(en, s, t, n, o);
            u.addEventListener("complete", function(h) {
              c(h.target.result);
            }), u.addEventListener("error", function(h) {
              l(h);
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
var cp = "RSASSA-PKCS1-v1_5", ac = "SHA-256", lp = 2048, up = new Uint8Array([1, 0, 1]), Ul = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new ip();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new ap();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new sp();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), M.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Io.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: cp,
        hash: ac,
        modulusLength: lp,
        publicExponent: up
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
          return t = Bt.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: ac }, t)];
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
var dp = (
  /** @class */
  function() {
    function r() {
      this.dbName = zi, this.version = jf, this.tableName = $f, this.dbOpen = !1;
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
var cc = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new Gi(), this.indexedDBCache = new dp(), this.logger = e, this.storeName = t;
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
var hp = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new cc(this.logger, Ao.asymmetricKeys), this.symmetricKeys = new cc(this.logger, Ao.symmetricKeys);
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
var fp = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new Ul(this.logger, n), this.b64Encode = new Dl(), this.b64Decode = new rp(), this.guidGenerator = new Ll(this.browserCrypto), this.pkceGenerator = new op(this.browserCrypto), this.cache = new hp(this.logger), this.performanceClient = t;
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
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              return n = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(I.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(r.EXTRACTABLE, r.POP_KEY_USAGES)];
            case 1:
              return o = h.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return i = h.sent(), s = {
                e: i.e,
                kty: i.kty,
                n: i.n
              }, a = Bt.getSortedObjectString(s), [4, this.hashString(a)];
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
        var i, s, a, c, l, u, h, d, f, p, g, m, b;
        return N(this, function(y) {
          switch (y.label) {
            case 0:
              return i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = y.sent(), !s)
                throw M.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return a = y.sent(), c = Bt.getSortedObjectString(a), l = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), u = Hf.getShrHeaderString({ kid: l, alg: a.alg }), h = this.b64Encode.urlEncode(u), e.cnf = {
                jwk: JSON.parse(c)
              }, d = this.b64Encode.urlEncode(JSON.stringify(e)), f = h + "." + d, p = Bt.stringToArrayBuffer(f), [4, this.browserCrypto.sign(s.privateKey, p)];
            case 3:
              return g = y.sent(), m = this.b64Encode.urlEncodeArr(new Uint8Array(g)), b = f + "." + m, i && i.endMeasurement({
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
var lc = (
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
var pp = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c) {
      var l = r.call(this, t, n, o, i, s, a) || this;
      return l.browserCrypto = new Ul(l.logger, c), l.guidGenerator = new Ll(l.browserCrypto), l;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new lc(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, i = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        i.push(B({}, s));
      }), i.length > 0 && lc.flushMeasurements(t.event.correlationId, i);
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
  }(Nl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var gp = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw M.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new Pt(t.id_token, this.cryptoObj), i, s, a;
      if (e.account)
        a = Fe.createFromAccountInfo(e.account), i = new Yr(a, this.loadIdToken(o, a.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, a.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, a.homeAccountId, e.account.environment));
      else if (e.authority) {
        var c = Mn.generateAuthority(e.authority, e.azureCloudOptions), l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (s = new Mn(c, this.config.system.networkClient, this.storage, l, this.logger), n.clientInfo)
          this.logger.trace("TokenCache - homeAccountId from options"), a = this.loadAccount(o, s, n.clientInfo), i = new Yr(a, this.loadIdToken(o, a.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, a.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, a.homeAccountId, s.hostnameAndPort));
        else if (t.client_info)
          this.logger.trace("TokenCache - homeAccountId from response"), a = this.loadAccount(o, s, t.client_info), i = new Yr(a, this.loadIdToken(o, a.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, a.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, a.homeAccountId, s.hostnameAndPort));
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
      var i = Zt.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
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
      var a = new De(e.scopes).printScopes(), c = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, l = s.extendedExpiresOn, u = er.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, i, a, c, l, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u), u;
      throw M.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var i = Gr.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(i), i;
      throw M.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o, i) {
      var s, a = S.EMPTY_STRING, c = [], l = null, u;
      n.accessToken && (a = n.accessToken.secret, c = De.fromString(n.accessToken.target).asArray(), l = new Date(Number(n.accessToken.expiresOn) * 1e3), u = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var h = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || S.EMPTY_STRING, d = (t == null ? void 0 : t.claims.tid) || S.EMPTY_STRING;
      return {
        authority: i ? i.canonicalAuthority : S.EMPTY_STRING,
        uniqueId: h,
        tenantId: d,
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
var mp = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(Al)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var vp = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, h) {
      var d = r.call(this, t, n, o, i, s, a, l, u, h) || this;
      return d.apiId = c, d;
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
              return s = u.sent(), a = new mp(s), this.logger.verbose("Auth code client created"), c = new Ml(a, this.browserStorage, i, this.logger, this.config.system, this.performanceClient), [2, c.handleCodeResponseFromServer({
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
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var yp = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = Xf(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new ps(this.config.system.loggerOptions, gi, Nn), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new pp(this.config.auth.clientId, this.config.auth.authority, this.logger, gi, Nn, this.config.telemetry.application, this.config.system.cryptoOptions) : new Bf(this.config.auth.clientId, this.config.auth.authority, this.logger, gi, Nn, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new fp(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Co, this.eventHandler = new tp(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new Vi(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : Kf(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: _e.MemoryStorage,
        temporaryCacheLocation: _e.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new Vi(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new gp(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
        return N(this, function(h) {
          return this.logger.verbose("handleRedirectPromise called"), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || S.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(ee.HANDLE_REDIRECT_START, K.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), i = this.browserStorage.getCachedNativeRequest(), s = void 0, i && Er.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), a = new Qr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId), s = a.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), c = this.browserStorage.getTemporaryCache(he.CORRELATION_ID, !0) || S.EMPTY_STRING, l = this.createRedirectClient(c), s = l.handleRedirectPromise(e)), o = s.then(function(d) {
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
      return k(this, void 0, void 0, function() {
        var t, n, o, i, s, a = this;
        return N(this, function(c) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(K.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Redirect, e) : this.eventHandler.emitEvent(ee.LOGIN_START, K.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (i = new Qr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = i.acquireTokenRedirect(e).catch(function(l) {
            if (l instanceof Rt && l.isFatal()) {
              a.nativeExtensionProvider = void 0;
              var u = a.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            } else if (l instanceof bt) {
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
          if (c instanceof Rt && c.isFatal()) {
            t.nativeExtensionProvider = void 0;
            var l = t.createPopupClient(e.correlationId);
            return l.acquireToken(e);
          } else if (c instanceof bt) {
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
            if (l instanceof Rt && l.isFatal()) {
              a.nativeExtensionProvider = void 0;
              var u = a.createSilentIframeClient(o.correlationId);
              return u.acquireToken(o);
            }
            throw l;
          }) : (s = this.createSilentIframeClient(o.correlationId), i = s.acquireToken(o)), [2, i.then(function(l) {
            var u, h;
            return a.eventHandler.emitEvent(ee.SSO_SILENT_SUCCESS, K.Silent, l), (u = a.ssoSilentMeasurement) === null || u === void 0 || u.addStaticFields({
              accessTokenSize: l.accessToken.length,
              idTokenSize: l.idToken.length
            }), (h = a.ssoSilentMeasurement) === null || h === void 0 || h.endMeasurement({
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
                  throw c instanceof Rt && c.isFatal() && (s.nativeExtensionProvider = void 0), c;
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
            case We.Default:
            case We.AccessToken:
            case We.AccessTokenAndRefreshToken:
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
            case We.Default:
            case We.AccessTokenAndRefreshToken:
            case We.RefreshToken:
            case We.RefreshTokenAndNetwork:
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
          return o = new Qr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
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
      return new Vf(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new Gf(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new Zf(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new xl(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new ep(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new vp(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var Cp = (
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
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(B({ correlationId: n }, t || nc))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(B({ correlationId: n }, t || nc));
    }, e.prototype.acquireTokenSilent = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u = this;
        return N(this, function(h) {
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
          }, a = JSON.stringify(s), c = this.activeSilentTokenRequests.get(a), typeof c > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(I.AcquireTokenSilentAsync, n), l = this.acquireTokenSilentAsync(B(B({}, t), { correlationId: n }), i).then(function(d) {
            return u.activeSilentTokenRequests.delete(a), o.addStaticFields({
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
            throw u.activeSilentTokenRequests.delete(a), o.endMeasurement({
              errorCode: d.errorCode,
              subErrorCode: d.subError,
              success: !1
            }), d;
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
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(I.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), Er.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = B(B({}, t), { account: n }), i = this.acquireTokenNative(s, be.acquireTokenSilent_silentFlow).catch(function(d) {
                return k(u, void 0, void 0, function() {
                  var f;
                  return N(this, function(p) {
                    if (d instanceof Rt && d.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, f = this.createSilentIframeClient(t.correlationId), [2, f.acquireToken(t)];
                    throw d;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), a = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(I.InitializeSilentRequest, t.correlationId), [4, a.initializeSilentRequest(t, n)];
            case 2:
              c = h.sent(), l = B(B({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || We.Default
              }), this.performanceClient.setPreQueueTime(I.AcquireTokenFromCache, c.correlationId), i = this.acquireTokenFromCache(a, c, l).catch(function(d) {
                if (l.cacheLookupPolicy === We.AccessToken)
                  throw d;
                return Se.blockReloadInHiddenIframes(), u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_NETWORK_START, K.Silent, c), u.performanceClient.setPreQueueTime(I.AcquireTokenByRefreshToken, c.correlationId), u.acquireTokenByRefreshToken(c, l).catch(function(f) {
                  var p = f instanceof _r, g = f instanceof bt, m = f.errorCode === Vr.noTokensFoundError.code, b = f.errorCode === yt.INVALID_GRANT_ERROR;
                  if ((!p || !b || g || l.cacheLookupPolicy === We.AccessTokenAndRefreshToken || l.cacheLookupPolicy === We.RefreshToken) && l.cacheLookupPolicy !== We.Skip && !m)
                    throw f;
                  return u.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), u.performanceClient.setPreQueueTime(I.AcquireTokenBySilentIframe, c.correlationId), u.acquireTokenBySilentIframe(c);
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
  }(yp)
);
function kt(r) {
  return Object.keys(r);
}
function mi(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Cs(r, e) {
  const t = { ...r }, n = e;
  return mi(r) && mi(e) && Object.keys(e).forEach((o) => {
    mi(n[o]) && o in r ? t[o] = Cs(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function bp(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function wp(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function Ep(r) {
  const e = wp(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function vi(r) {
  return r === "0rem" ? "0rem" : `calc(${r} * var(--mantine-scale))`;
}
function Hl(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return `0${r}`;
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? vi(o) : o;
    }
    if (typeof n == "string") {
      if (n === "" || n.startsWith("calc(") || n.startsWith("clamp(") || n.includes("rgba("))
        return n;
      if (n.includes(","))
        return n.split(",").map((i) => t(i)).join(",");
      if (n.includes(" "))
        return n.split(" ").map((i) => t(i)).join(" ");
      if (n.includes(r))
        return e ? vi(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${r}`;
        return e ? vi(i) : i;
      }
    }
    return n;
  }
  return t;
}
const R = Hl("rem", { shouldScale: !0 }), uc = Hl("em");
function bs(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function Fl(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function zn(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== dl : !1;
}
function an(r) {
  const e = Nr(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ v.jsx(e.Provider, { value: i, children: o }), () => {
    const o = ar(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function Bl(r = null) {
  const e = Nr(r);
  return [({ children: o, value: i }) => /* @__PURE__ */ v.jsx(e.Provider, { value: i, children: o }), () => ar(e)];
}
function dc(r, e) {
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
function Sp(r, e, t) {
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
function Tp(r, e, t) {
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
function _p(r, e, t) {
  return Yi(r, t) === Yi(e, t);
}
function Ip({
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
    ).filter((g) => _p(a.currentTarget, g, r)), l = c.findIndex((g) => a.currentTarget === g), u = Tp(l, c, n), h = Sp(l, c, n), d = i === "rtl" ? h : u, f = i === "rtl" ? u : h;
    switch (a.key) {
      case "ArrowRight": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[d].focus(), o && c[d].click());
        break;
      }
      case "ArrowLeft": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[f].focus(), o && c[f].click());
        break;
      }
      case "ArrowUp": {
        s === "vertical" && (a.stopPropagation(), a.preventDefault(), c[h].focus(), o && c[h].click());
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
const Ap = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Rp(r) {
  return Ap[r];
}
const kp = () => {
};
function Np(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || kp : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Re(r, e = "size", t = !0) {
  if (r !== void 0)
    return Fl(r) ? t ? R(r) : r : `var(--${e}-${r})`;
}
function ws(r) {
  return Re(r, "mantine-spacing");
}
function Tt(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Re(r, "mantine-radius");
}
function ot(r) {
  return Re(r, "mantine-font-size");
}
function Pp(r) {
  return Re(r, "mantine-line-height", !1);
}
function jl(r) {
  if (r)
    return Re(r, "mantine-shadow", !1);
}
function $l() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function br(r) {
  const e = ue(r);
  return V(() => {
    e.current = r;
  }), ho(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Vo(r, e) {
  const t = br(r), n = ue(0);
  return V(() => () => window.clearTimeout(n.current), []), ye(
    (...o) => {
      window.clearTimeout(n.current), n.current = window.setTimeout(() => t(...o), e);
    },
    [t, e]
  );
}
const hc = ["mousedown", "touchstart"];
function Op(r, e, t) {
  const n = ue();
  return V(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(t)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((l) => !!l && !i.composedPath().includes(l)) && !a && r();
      } else
        n.current && !n.current.contains(s) && r();
    };
    return (e || hc).forEach((i) => document.addEventListener(i, o)), () => {
      (e || hc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [n, r, t]), n;
}
function xp(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function Mp(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function Lp(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = X(
    t ? e : Mp(r)
  ), i = ue();
  return V(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(r), o(i.current.matches), xp(i.current, (s) => o(s.matches));
  }, [r]), n;
}
function Dp(r, e, t = { leading: !1 }) {
  const [n, o] = X(r), i = ue(!1), s = ue(null), a = ue(!1), c = () => window.clearTimeout(s.current);
  return V(() => {
    i.current && (!a.current && t.leading ? (a.current = !0, o(r)) : (c(), s.current = window.setTimeout(() => {
      a.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), V(() => (i.current = !0, c), []), [n, c];
}
const Gn = typeof document < "u" ? ds : V;
function Ir(r, e) {
  const t = ue(!1);
  V(
    () => () => {
      t.current = !1;
    },
    []
  ), V(() => {
    if (t.current)
      return r();
    t.current = !0;
  }, e);
}
function Up({ opened: r, shouldReturnFocus: e = !0 }) {
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
function Hp(r, e = "body > :not(script)") {
  const t = $l(), n = Array.from(
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
const Fp = /input|select|textarea|button|object/, Kl = "a, input, select, textarea, button, object, [tabindex]";
function Bp(r) {
  return r.style.display === "none";
}
function jp(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Bp(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function ql(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function Qi(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(ql(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Fp.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && jp(r);
}
function zl(r) {
  const e = ql(r);
  return (Number.isNaN(e) || e >= 0) && Qi(r);
}
function $p(r) {
  return Array.from(r.querySelectorAll(Kl)).filter(zl);
}
function Kp(r, e) {
  const t = $p(r);
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
function qp(r = !0) {
  const e = ue(), t = ue(null), n = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Kl));
      s = a.find(zl) || a.find(Qi) || null, !s && Qi(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ye(
    (i) => {
      if (r) {
        if (i === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = Hp(i), e.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && n(i);
        }), e.current = i) : e.current = null);
      }
    },
    [r]
  );
  return V(() => {
    if (!r)
      return;
    e.current && setTimeout(() => n(e.current));
    const i = (s) => {
      s.key === "Tab" && e.current && Kp(e.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), t.current && t.current();
    };
  }, [r]), o;
}
const zp = jo["useId".toString()] || (() => {
});
function Gp() {
  const r = zp();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function cr(r) {
  const e = Gp(), [t, n] = X(e);
  return Gn(() => {
    n($l());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function Gl(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function Vl(...r) {
  return (e) => {
    r.forEach((t) => Gl(t, e));
  };
}
function ht(...r) {
  return ye(Vl(...r), r);
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
function Wl(r, e) {
  return Lp("(prefers-reduced-motion: reduce)", r, e);
}
function Vp(r) {
  const e = ue();
  return V(() => {
    e.current = r;
  }, [r]), e.current;
}
function Yl(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (t = Yl(r[e])) && (n && (n += " "), n += t);
    } else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function qt() {
  for (var r, e, t = 0, n = "", o = arguments.length; t < o; t++)
    (r = arguments[t]) && (e = Yl(r)) && (n && (n += " "), n += e);
  return n;
}
const Wp = {};
function Yp(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = qt(e[n], o) : e[n] = o;
    });
  }), e;
}
function Wo({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const i = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || Wp
  );
  return Yp(i);
}
function Ro({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(r, t, n) } : { ...i, ...s }, {});
}
const Ql = Nr(null);
function Pr() {
  const r = ar(Ql);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function Qp() {
  return Pr().cssVariablesResolver;
}
function Jp() {
  return Pr().classNamesPrefix;
}
function Es() {
  return Pr().getStyleNonce;
}
function Xp() {
  return Pr().withStaticClasses;
}
function Zp() {
  return Pr().headless;
}
function eg() {
  var r;
  return (r = Pr().stylesTransform) == null ? void 0 : r.sx;
}
function tg() {
  var r;
  return (r = Pr().stylesTransform) == null ? void 0 : r.styles;
}
function rg(r) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(r);
}
function ng(r) {
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
function og(r) {
  const [e, t, n, o] = r.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function ig(r) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = r.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, i = parseInt(t[3], 10) / 100, s = t[5] ? parseFloat(t[5]) : void 0, a = (1 - Math.abs(2 * i - 1)) * o, c = n / 60, l = a * (1 - Math.abs(c % 2 - 1)), u = i - a / 2;
  let h, d, f;
  return c >= 0 && c < 1 ? (h = a, d = l, f = 0) : c >= 1 && c < 2 ? (h = l, d = a, f = 0) : c >= 2 && c < 3 ? (h = 0, d = a, f = l) : c >= 3 && c < 4 ? (h = 0, d = l, f = a) : c >= 4 && c < 5 ? (h = l, d = 0, f = a) : (h = a, d = 0, f = l), {
    r: Math.round((h + u) * 255),
    g: Math.round((d + u) * 255),
    b: Math.round((f + u) * 255),
    a: s || 1
  };
}
function Ss(r) {
  return rg(r) ? ng(r) : r.startsWith("rgb") ? og(r) : r.startsWith("hsl") ? ig(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function no(r, e) {
  if (r.startsWith("var("))
    return `color-mix(in srgb, ${r}, black ${e * 100}%)`;
  const { r: t, g: n, b: o, a: i } = Ss(r), s = 1 - e, a = (c) => Math.round(c * s);
  return `rgba(${a(t)}, ${a(n)}, ${a(o)}, ${i})`;
}
function Ln(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function yi(r) {
  return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
}
function sg(r) {
  const e = r.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function ag(r) {
  if (r.startsWith("oklch("))
    return (sg(r) || 0) / 100;
  const { r: e, g: t, b: n } = Ss(r), o = e / 255, i = t / 255, s = n / 255, a = yi(o), c = yi(i), l = yi(s);
  return 0.2126 * a + 0.7152 * c + 0.0722 * l;
}
function mn(r, e = 0.179) {
  return r.startsWith("var(") ? !1 : ag(r) > e;
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
function Ut(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (r.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${r}, transparent ${i}%)`;
  }
  if (r.startsWith("oklch"))
    return r.includes("/") ? r.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : r.replace(")", ` / ${e})`);
  const { r: t, g: n, b: o } = Ss(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const Br = Ut, cg = ({
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
        background: Ut(a, 0.1),
        hover: Ut(a, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: Ut(r, 0.1),
      hover: Ut(r, 0.12),
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
      hover: Ut(e.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${R(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: Ut(r, 0.05),
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
        hover: Ut(a, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Ut(r, 0.12),
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
}, lg = {
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
}, fc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Ts = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: lg,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: cg,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: fc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: fc,
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
function pc(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function ug({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return pc(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && pc(n.newValue) && t(n.newValue);
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
const dg = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", gc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Ci(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function mc(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(dg);
  if (typeof r.primaryShade == "object" && (!Ci(r.primaryShade.dark) || !Ci(r.primaryShade.light)))
    throw new Error(gc);
  if (typeof r.primaryShade == "number" && !Ci(r.primaryShade))
    throw new Error(gc);
}
function hg(r, e) {
  var n;
  if (!e)
    return mc(r), r;
  const t = Cs(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), mc(t), t;
}
const _s = Nr(null), fg = () => ar(_s) || Ts;
function zt() {
  const r = ar(_s);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function Jl({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = fg(), o = ho(
    () => hg(t ? n : Ts, r),
    [r, n, t]
  );
  return /* @__PURE__ */ v.jsx(_s.Provider, { value: o, children: e });
}
Jl.displayName = "@mantine/core/MantineThemeProvider";
function pg() {
  const r = zt(), e = Es(), t = kt(r.breakpoints).reduce((n, o) => {
    const i = r.breakpoints[o].includes("px"), s = Ep(r.breakpoints[o]), a = i ? `${s - 0.1}px` : uc(s - 0.1), c = i ? `${s}px` : uc(s);
    return `${n}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ v.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}
function bi(r) {
  return Object.entries(r).map(([e, t]) => `${e}: ${t};`).join("");
}
function vn(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, e);
}
function gg(r, e) {
  const t = bi(r.variables), n = t ? vn(e, t) : "", o = bi(r.dark), i = bi(r.light), s = o ? vn(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, o) : "", a = i ? vn(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, i) : "";
  return `${n}${s}${a}`;
}
function Is({ color: r, theme: e, autoContrast: t }) {
  return (typeof t == "boolean" ? t : e.autoContrast) && Or({ color: r || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function vc(r, e) {
  return Is({
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
      [`--mantine-color-${n}-light`]: Br(r.colors[e][a], 0.1),
      [`--mantine-color-${n}-light-hover`]: Br(r.colors[e][a], 0.12),
      [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${a})`,
      [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${a})`,
      [`--mantine-color-${n}-outline-hover`]: Br(r.colors[e][a], 0.05)
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
    ...s
  } : s;
}
function mg(r) {
  return !!r && typeof r == "object" && "mantine-virtual-color" in r;
}
function jr(r, e, t) {
  kt(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const Xl = (r) => {
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
  jr(n.variables, r.breakpoints, "breakpoint"), jr(n.variables, r.spacing, "spacing"), jr(n.variables, r.fontSizes, "font-size"), jr(n.variables, r.lineHeights, "line-height"), jr(n.variables, r.shadows, "shadow"), jr(n.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((i, s) => {
    n.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${r.primaryColor}-${s})`;
  }), kt(r.colors).forEach((i) => {
    const s = r.colors[i];
    if (mg(s)) {
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
  return kt(o).forEach((i) => {
    n.variables[`--mantine-${i}-font-size`] = o[i].fontSize, n.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, n.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || r.headings.fontWeight;
  }), n;
};
function vg({ theme: r, generator: e }) {
  const t = Xl(r), n = e == null ? void 0 : e(r);
  return n ? Cs(t, n) : t;
}
const wi = Xl(Ts);
function yg(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return kt(r.variables).forEach((t) => {
    wi.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), kt(r.light).forEach((t) => {
    wi.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), kt(r.dark).forEach((t) => {
    wi.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function Cg(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Zl({
  cssVariablesSelector: r,
  deduplicateCssVariables: e
}) {
  const t = zt(), n = Es(), o = Qp(), i = vg({ theme: t, generator: o }), s = r === ":root" && e, a = s ? yg(i) : i, c = gg(a, r);
  return c ? /* @__PURE__ */ v.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${c}${s ? "" : Cg(r)}`
      }
    }
  ) : null;
}
Zl.displayName = "@mantine/CssVariables";
function bg() {
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
function wg({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = ue(), [i, s] = X(() => r.get(e)), a = n || i, c = ye(
    (u) => {
      n || ($r(u, t), s(u), r.set(u));
    },
    [r.set, a, n]
  ), l = ye(() => {
    s(e), $r(e, t), r.clear();
  }, [r.clear, e]);
  return V(() => (r.subscribe(c), r.unsubscribe), [r.subscribe, r.unsubscribe]), Gn(() => {
    $r(r.get(e), t);
  }, []), V(() => {
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
  }, [i, n]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function Eg({
  respectReducedMotion: r,
  getRootElement: e
}) {
  Gn(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
bg();
function eu({
  theme: r,
  children: e,
  getStyleNonce: t,
  withStaticClasses: n = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = ug(),
  defaultColorScheme: u = "light",
  getRootElement: h = () => document.documentElement,
  cssVariablesResolver: d,
  forceColorScheme: f,
  stylesTransform: p
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: b } = wg({
    defaultColorScheme: u,
    forceColorScheme: f,
    manager: l,
    getRootElement: h
  });
  return Eg({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: h
  }), /* @__PURE__ */ v.jsx(
    Ql.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: m,
        clearColorScheme: b,
        getRootElement: h,
        classNamesPrefix: c,
        getStyleNonce: t,
        cssVariablesResolver: d,
        cssVariablesSelector: a,
        withStaticClasses: n,
        stylesTransform: p
      },
      children: /* @__PURE__ */ v.jsxs(Jl, { theme: r, children: [
        s && /* @__PURE__ */ v.jsx(
          Zl,
          {
            cssVariablesSelector: a,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ v.jsx(pg, {}),
        e
      ] })
    }
  );
}
eu.displayName = "@mantine/core/MantineProvider";
function tu({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = zt();
  return {
    resolvedClassNames: Wo({
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
const Sg = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Tg({ theme: r, options: e, unstyled: t }) {
  return qt(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || Sg[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function _g({
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
function yc({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Wo({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function Ig({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function Ag({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function Rg({
  themeName: r,
  classNamesPrefix: e,
  selector: t,
  withStaticClass: n
}) {
  return n === !1 ? [] : r.map((o) => `${e}-${o}-${t}`);
}
function kg({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (i) => {
      var s, a;
      return (a = Wo({
        theme: e,
        classNames: (s = e.components[i]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : a[t];
    }
  );
}
function Ng({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function Pg({
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
  stylesCtx: h,
  withStaticClasses: d,
  headless: f,
  transformedStyles: p
}) {
  return qt(
    Tg({ theme: r, options: e, unstyled: a || f }),
    kg({ theme: r, themeName: t, selector: n, props: u, stylesCtx: h }),
    Ng({ options: e, classes: s, selector: n, unstyled: a }),
    yc({ selector: n, stylesCtx: h, theme: r, classNames: i, props: u }),
    yc({ selector: n, stylesCtx: h, theme: r, classNames: p, props: u }),
    _g({ selector: n, stylesCtx: h, options: e, props: u, theme: r }),
    Ig({ rootSelector: l, selector: n, className: c }),
    Ag({ selector: n, classes: s, unstyled: a || f }),
    d && !f && Rg({
      themeName: t,
      classNamesPrefix: o,
      selector: n,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function Og({
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
function xg(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...bs(t[n]) };
  }), e), {});
}
function Mg({
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
  return (c = xg([
    a ? {} : e == null ? void 0 : e(t, n, o),
    ...s.map((l) => {
      var u, h, d;
      return (d = (h = (u = t.components) == null ? void 0 : u[l]) == null ? void 0 : h.vars) == null ? void 0 : d.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : c[i];
}
function Lg({
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
  headless: h,
  withStylesTransform: d
}) {
  return {
    ...!d && Og({ theme: r, themeName: e, props: o, stylesCtx: i, selector: t }),
    ...!d && Ro({ theme: r, styles: a, props: o, stylesCtx: i })[t],
    ...!d && Ro({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: i })[t],
    ...Mg({ theme: r, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: t, themeName: e, headless: h }),
    ...s === t ? Xi({ style: c, theme: r }) : null,
    ...Xi({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function Dg({ props: r, stylesCtx: e, themeName: t }) {
  var s;
  const n = zt(), o = (s = tg()) == null ? void 0 : s();
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
function ge({
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
  varsResolver: h
}) {
  const d = zt(), f = Jp(), p = Xp(), g = Zp(), m = (Array.isArray(r) ? r : [r]).filter((C) => C), { withStylesTransform: b, getTransformedStyles: y } = Dg({
    props: t,
    stylesCtx: n,
    themeName: m
  });
  return (C, w) => ({
    className: Pg({
      theme: d,
      options: w,
      themeName: m,
      selector: C,
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
      transformedStyles: y([w == null ? void 0 : w.styles, l])
    }),
    style: Lg({
      theme: d,
      themeName: m,
      selector: C,
      options: w,
      props: t,
      stylesCtx: n,
      rootSelector: s,
      styles: l,
      style: i,
      vars: u,
      varsResolver: h,
      headless: g,
      withStylesTransform: b
    })
  });
}
function ru(r, e) {
  return typeof r == "boolean" ? r : e.autoContrast;
}
function G(r, e, t) {
  var s;
  const n = zt(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(n) : o;
  return { ...e, ...i, ...bs(t) };
}
function Ei(r) {
  return kt(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${bp(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function Ug({ selector: r, styles: e, media: t, container: n }) {
  const o = e ? Ei(e) : "", i = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${Ei(a.styles)}}}`) : [], s = Array.isArray(n) ? n.map(
    (a) => `@container ${a.query}{${r}{${Ei(a.styles)}}}`
  ) : [];
  return `${o ? `${r}{${o}}` : ""}${i.join("")}${s.join("")}`.trim();
}
function Hg(r) {
  const e = Es();
  return /* @__PURE__ */ v.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: Ug(r) }
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
    ml: s,
    mr: a,
    me: c,
    ms: l,
    p: u,
    px: h,
    py: d,
    pt: f,
    pb: p,
    pl: g,
    pr: m,
    pe: b,
    ps: y,
    bd: C,
    bg: w,
    c: E,
    opacity: T,
    ff: A,
    fz: _,
    fw: L,
    lts: F,
    ta: Q,
    lh: Z,
    fs: se,
    tt: $,
    td: oe,
    w: U,
    miw: x,
    maw: D,
    h: q,
    mih: J,
    mah: me,
    bgsz: fe,
    bgp: qe,
    bgr: mt,
    bga: ke,
    pos: dr,
    top: Yt,
    left: hr,
    bottom: fr,
    right: pr,
    inset: hn,
    display: fn,
    flex: xt,
    hiddenFrom: Te,
    visibleFrom: Mt,
    lightHidden: Lr,
    darkHidden: je,
    sx: gr,
    ...Dr
  } = r;
  return { styleProps: bs({
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
    px: h,
    py: d,
    pt: f,
    pb: p,
    pl: g,
    pr: m,
    pe: b,
    ps: y,
    bd: C,
    bg: w,
    c: E,
    opacity: T,
    ff: A,
    fz: _,
    fw: L,
    lts: F,
    ta: Q,
    lh: Z,
    fs: se,
    tt: $,
    td: oe,
    w: U,
    miw: x,
    maw: D,
    h: q,
    mih: J,
    mah: me,
    bgsz: fe,
    bgp: qe,
    bgr: mt,
    bga: ke,
    pos: dr,
    top: Yt,
    left: hr,
    bottom: fr,
    right: pr,
    inset: hn,
    display: fn,
    flex: xt,
    hiddenFrom: Te,
    visibleFrom: Mt,
    lightHidden: Lr,
    darkHidden: je,
    sx: gr
  }), rest: Dr };
}
const Fg = {
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
function As(r, e) {
  const t = Or({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function Bg(r, e) {
  const t = Or({ color: r, theme: e });
  return t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : As(r, e);
}
function jg(r, e) {
  if (typeof r == "number")
    return R(r);
  if (typeof r == "string") {
    const [t, n, ...o] = r.split(" ").filter((s) => s.trim() !== "");
    let i = `${R(t)}`;
    return n && (i += ` ${n}`), o.length > 0 && (i += ` ${As(o.join(" "), e)}`), i.trim();
  }
  return r;
}
const Cc = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function $g(r) {
  return typeof r == "string" && r in Cc ? Cc[r] : r;
}
const Kg = ["h1", "h2", "h3", "h4", "h5", "h6"];
function qg(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "string" && Kg.includes(r) ? `var(--mantine-${r}-font-size)` : typeof r == "number" || typeof r == "string" ? R(r) : r;
}
function zg(r) {
  return r;
}
const Gg = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Vg(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : typeof r == "string" && Gg.includes(r) ? `var(--mantine-${r}-line-height)` : r;
}
function Wg(r) {
  return typeof r == "number" ? R(r) : r;
}
function Yg(r, e) {
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
const Si = {
  color: As,
  textColor: Bg,
  fontSize: qg,
  spacing: Yg,
  identity: zg,
  size: Wg,
  lineHeight: Vg,
  fontFamily: $g,
  border: jg
};
function bc(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function Qg({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, i) => Number(bc(o)) - Number(bc(i))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function Jg(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function Xg(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function Zg(r) {
  return typeof r == "object" && r !== null ? kt(r).filter((e) => e !== "base") : [];
}
function em(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function tm({
  styleProps: r,
  data: e,
  theme: t
}) {
  return Qg(
    kt(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return n;
        const i = e[o], s = Array.isArray(i.property) ? i.property : [i.property], a = Xg(r[o]);
        if (!Jg(r[o]))
          return s.forEach((l) => {
            n.inlineStyles[l] = Si[i.type](a, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const c = Zg(r[o]);
        return s.forEach((l) => {
          a && (n.styles[l] = Si[i.type](a, t)), c.forEach((u) => {
            const h = `(min-width: ${t.breakpoints[u]})`;
            n.media[h] = {
              ...n.media[h],
              [l]: Si[i.type](
                em(r[o], u),
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
function rm() {
  return `__m__-${hl().replace(/:/g, "")}`;
}
function nu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...nu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function ou(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function nm(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[ou(t)] = r[t]), e;
  }, {});
}
function iu(r) {
  return r ? typeof r == "string" ? { [ou(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...iu(t) }),
    {}
  ) : nm(r) : null;
}
function Zi(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...Zi(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function om({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = Zi(e, r), i = Zi(t, r);
  return { ...o, ...i, ...n };
}
const su = Ce(
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
    renderRoot: h,
    __size: d,
    ...f
  }, p) => {
    var _;
    const g = zt(), m = r || "div", { styleProps: b, rest: y } = Yo(f), C = eg(), w = (_ = C == null ? void 0 : C()) == null ? void 0 : _(b.sx), E = rm(), T = tm({
      styleProps: b,
      theme: g,
      data: Fg
    }), A = {
      ref: p,
      style: om({
        theme: g,
        style: e,
        vars: t,
        styleProps: T.inlineStyles
      }),
      className: qt(n, w, {
        [E]: T.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Fl(s) ? void 0 : s || void 0,
      size: d,
      ...iu(i),
      ...y
    };
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      T.hasResponsiveStyles && /* @__PURE__ */ v.jsx(
        Hg,
        {
          selector: `.${E}`,
          styles: T.styles,
          media: T.media
        }
      ),
      typeof h == "function" ? h(A) : /* @__PURE__ */ v.jsx(m, { ...A })
    ] });
  }
);
su.displayName = "@mantine/core/Box";
const Y = su;
function au(r) {
  return r;
}
function ce(r) {
  const e = Ce(r);
  return e.extend = au, e.withProps = (t) => {
    const n = Ce((o, i) => /* @__PURE__ */ v.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e;
}
function Gt(r) {
  const e = Ce(r);
  return e.withProps = (t) => {
    const n = Ce((o, i) => /* @__PURE__ */ v.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e.extend = au, e;
}
const im = Nr({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Rs() {
  return ar(im);
}
function sm(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Ti(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const yn = typeof window < "u" && window.requestAnimationFrame;
function am({
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
    Qd(() => c(p));
  }, u = (p) => {
    l((g) => ({ ...g, ...p }));
  };
  function h(p) {
    const g = r || sm(p);
    return {
      transition: `height ${g}ms ${e}, opacity ${g}ms ${e}`
    };
  }
  Ir(() => {
    typeof yn == "function" && yn(n ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), yn(() => {
        const p = Ti(o);
        u({ ...h(p), height: p });
      });
    } : () => {
      const p = Ti(o);
      u({ ...h(p), willChange: "height", height: p }), yn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [n]);
  const d = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (n) {
        const g = Ti(o);
        g === a.height ? l({}) : u({ height: g }), t();
      } else
        a.height === i && (l(s), t());
  };
  function f({ style: p = {}, refKey: g = "ref", ...m } = {}) {
    const b = m[g];
    return {
      "aria-hidden": !n,
      ...m,
      [g]: Vl(o, b),
      onTransitionEnd: d,
      style: { boxSizing: "border-box", ...p, ...a }
    };
  }
  return f;
}
const cm = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, cu = ce((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = G("Collapse", cm, r), u = zt(), h = Wl(), f = (u.respectReducedMotion ? h : !1) ? 0 : o, p = am({
    opened: n,
    transitionDuration: f,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return f === 0 ? n ? /* @__PURE__ */ v.jsx(Y, { ...l, children: t }) : null : /* @__PURE__ */ v.jsx(
    Y,
    {
      ...p({
        style: {
          opacity: n || !c ? 1 : 0,
          transition: c ? `opacity ${f}ms ${i}` : "none",
          ...nu(s, u)
        },
        ref: e,
        ...l
      }),
      children: t
    }
  );
});
cu.displayName = "@mantine/core/Collapse";
const [lm, ft] = an(
  "ScrollArea.Root component was not found in tree"
);
function tn(r, e) {
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
const um = Ce((r, e) => {
  const { style: t, ...n } = r, o = ft(), [i, s] = X(0), [a, c] = X(0), l = !!(i && a);
  return tn(o.scrollbarX, () => {
    var h;
    const u = ((h = o.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), tn(o.scrollbarY, () => {
    var h;
    const u = ((h = o.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ v.jsx("div", { ...n, ref: e, style: { ...t, width: i, height: a } }) : null;
}), dm = Ce((r, e) => {
  const t = ft(), n = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && n ? /* @__PURE__ */ v.jsx(um, { ...r, ref: e }) : null;
}), hm = {
  scrollHideDelay: 1e3,
  type: "hover"
}, lu = Ce((r, e) => {
  const t = G("ScrollAreaRoot", hm, r), { type: n, scrollHideDelay: o, scrollbars: i, ...s } = t, [a, c] = X(null), [l, u] = X(null), [h, d] = X(null), [f, p] = X(null), [g, m] = X(null), [b, y] = X(0), [C, w] = X(0), [E, T] = X(!1), [A, _] = X(!1), L = ht(e, (F) => c(F));
  return /* @__PURE__ */ v.jsx(
    lm,
    {
      value: {
        type: n,
        scrollHideDelay: o,
        scrollArea: a,
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
        scrollbarYEnabled: A,
        onScrollbarYEnabledChange: _,
        onCornerWidthChange: y,
        onCornerHeightChange: w
      },
      children: /* @__PURE__ */ v.jsx(
        Y,
        {
          ...s,
          ref: L,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${b}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${C}px`
          }
        }
      )
    }
  );
});
lu.displayName = "@mantine/core/ScrollAreaRoot";
function uu(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Qo(r) {
  const e = uu(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function du(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function fm(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function wc(r, e, t = "ltr") {
  const n = Qo(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, s = e.content - e.viewport, a = i - n, c = t === "ltr" ? [0, s] : [s * -1, 0], l = fm(r, c);
  return du([0, s], [0, a])(l);
}
function pm(r, e, t, n = "ltr") {
  const o = Qo(t), i = o / 2, s = e || i, a = o - s, c = t.scrollbar.paddingStart + s, l = t.scrollbar.size - t.scrollbar.paddingEnd - a, u = t.content - t.viewport, h = n === "ltr" ? [0, u] : [u * -1, 0];
  return du([c, l], h)(r);
}
function hu(r, e) {
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
const [gm, fu] = an(
  "ScrollAreaScrollbar was not found in tree"
), pu = Ce((r, e) => {
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
    ...h
  } = r, d = ft(), [f, p] = X(null), g = ht(e, (_) => p(_)), m = ue(null), b = ue(""), { viewport: y } = d, C = t.content - t.viewport, w = br(l), E = br(a), T = Vo(u, 10), A = (_) => {
    if (m.current) {
      const L = _.clientX - m.current.left, F = _.clientY - m.current.top;
      c({ x: L, y: F });
    }
  };
  return V(() => {
    const _ = (L) => {
      const F = L.target;
      (f == null ? void 0 : f.contains(F)) && w(L, C);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [y, f, C, w]), V(E, [t, E]), tn(f, T), tn(d.content, T), /* @__PURE__ */ v.jsx(
    gm,
    {
      value: {
        scrollbar: f,
        hasThumb: n,
        onThumbChange: br(o),
        onThumbPointerUp: br(i),
        onThumbPositionChange: E,
        onThumbPointerDown: br(s)
      },
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          ...h,
          ref: g,
          style: { position: "absolute", ...h.style },
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
}), mm = Ce(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, s = ft(), [a, c] = X(), l = ue(null), u = ht(e, l, s.onScrollbarXChange);
    return V(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ v.jsx(
      pu,
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
          if (s.viewport) {
            const f = s.viewport.scrollLeft + h.deltaX;
            r.onWheelScroll(f), hu(f, d) && h.preventDefault();
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
), vm = Ce(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, s = ft(), [a, c] = X(), l = ue(null), u = ht(e, l, s.onScrollbarYChange);
    return V(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ v.jsx(
      pu,
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
          if (s.viewport) {
            const f = s.viewport.scrollTop + h.deltaY;
            r.onWheelScroll(f), hu(f, d) && h.preventDefault();
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
), ks = Ce((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = Rs(), i = ft(), s = ue(null), a = ue(0), [c, l] = X({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = uu(c.viewport, c.content), h = {
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
  }, d = (f, p) => pm(f, a.current, c, p);
  return t === "horizontal" ? /* @__PURE__ */ v.jsx(
    mm,
    {
      ...h,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const f = i.viewport.scrollLeft, p = wc(f, c, o);
          s.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        i.viewport && (i.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        i.viewport && (i.viewport.scrollLeft = d(f, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ v.jsx(
    vm,
    {
      ...h,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const f = i.viewport.scrollTop, p = wc(f, c);
          c.scrollbar.size === 0 ? s.current.style.opacity = "0" : s.current.style.opacity = "1", s.current.style.transform = `translate3d(0, ${p}px, 0)`;
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
}), gu = Ce(
  (r, e) => {
    const t = ft(), { forceMount: n, ...o } = r, [i, s] = X(!1), a = r.orientation === "horizontal", c = Vo(() => {
      if (t.viewport) {
        const l = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return tn(t.viewport, c), tn(t.content, c), n || i ? /* @__PURE__ */ v.jsx(
      ks,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), ym = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = ft(), [i, s] = X(!1);
    return V(() => {
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
    }, [o.scrollArea, o.scrollHideDelay]), t || i ? /* @__PURE__ */ v.jsx(
      gu,
      {
        "data-state": i ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), Cm = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = ft(), i = r.orientation === "horizontal", [s, a] = X("hidden"), c = Vo(() => a("idle"), 100);
    return V(() => {
      if (s === "idle") {
        const l = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [s, o.scrollHideDelay]), V(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let h = l[u];
        const d = () => {
          const f = l[u];
          h !== f && (a("scrolling"), c()), h = f;
        };
        return l.addEventListener("scroll", d), () => l.removeEventListener("scroll", d);
      }
    }, [o.viewport, i, c]), t || s !== "hidden" ? /* @__PURE__ */ v.jsx(
      ks,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: Sr(r.onPointerEnter, () => a("interacting")),
        onPointerLeave: Sr(r.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Ec = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = ft(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = r.orientation === "horizontal";
    return V(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ v.jsx(ym, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ v.jsx(Cm, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ v.jsx(gu, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ v.jsx(ks, { ...n, ref: e }) : null;
  }
);
function bm(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const i = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== i.left, a = t.top !== i.top;
    (s || a) && e(), t = i, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const wm = Ce((r, e) => {
  const { style: t, ...n } = r, o = ft(), i = fu(), { onThumbPositionChange: s } = i, a = ht(e, (u) => i.onThumbChange(u)), c = ue(), l = Vo(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return V(() => {
    const { viewport: u } = o;
    if (u) {
      const h = () => {
        if (l(), !c.current) {
          const d = bm(u, s);
          c.current = d, s();
        }
      };
      return s(), u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, l, s]), /* @__PURE__ */ v.jsx(
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
        const d = u.target.getBoundingClientRect(), f = u.clientX - d.left, p = u.clientY - d.top;
        i.onThumbPointerDown({ x: f, y: p });
      }),
      onPointerUp: Sr(r.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Sc = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = fu();
    return t || o.hasThumb ? /* @__PURE__ */ v.jsx(wm, { ref: e, ...n }) : null;
  }
), mu = Ce(
  ({ children: r, style: e, ...t }, n) => {
    const o = ft(), i = ht(n, o.onViewportChange);
    return /* @__PURE__ */ v.jsx(
      Y,
      {
        ...t,
        ref: i,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...e
        },
        children: /* @__PURE__ */ v.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange, children: r })
      }
    );
  }
);
mu.displayName = "@mantine/core/ScrollAreaViewport";
var Ns = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const vu = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Em = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": R(e)
  }
}), Vn = ce((r, e) => {
  const t = G("ScrollArea", vu, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    scrollbarSize: c,
    vars: l,
    type: u,
    scrollHideDelay: h,
    viewportProps: d,
    viewportRef: f,
    onScrollPositionChange: p,
    children: g,
    offsetScrollbars: m,
    scrollbars: b,
    ...y
  } = t, [C, w] = X(!1), E = ge({
    name: "ScrollArea",
    props: t,
    classes: Ns,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Em
  });
  return /* @__PURE__ */ v.jsxs(
    lu,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: h,
      ref: e,
      scrollbars: b,
      ...E("root"),
      ...y,
      children: [
        /* @__PURE__ */ v.jsx(
          mu,
          {
            ...d,
            ...E("viewport", { style: d == null ? void 0 : d.style }),
            ref: f,
            "data-offset-scrollbars": m === !0 ? "xy" : m || void 0,
            "data-scrollbars": b || void 0,
            onScroll: (T) => {
              var A;
              (A = d == null ? void 0 : d.onScroll) == null || A.call(d, T), p == null || p({ x: T.currentTarget.scrollLeft, y: T.currentTarget.scrollTop });
            },
            children: g
          }
        ),
        (b === "xy" || b === "x") && /* @__PURE__ */ v.jsx(
          Ec,
          {
            ...E("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ v.jsx(Sc, { ...E("thumb") })
          }
        ),
        (b === "xy" || b === "y") && /* @__PURE__ */ v.jsx(
          Ec,
          {
            ...E("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ v.jsx(Sc, { ...E("thumb") })
          }
        ),
        /* @__PURE__ */ v.jsx(
          dm,
          {
            ...E("corner"),
            "data-hovered": C || void 0,
            "data-hidden": u === "never" || void 0
          }
        )
      ]
    }
  );
});
Vn.displayName = "@mantine/core/ScrollArea";
const Ps = ce((r, e) => {
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
    onScrollPositionChange: h,
    unstyled: d,
    variant: f,
    viewportProps: p,
    scrollbars: g,
    style: m,
    vars: b,
    ...y
  } = G("ScrollAreaAutosize", vu, r);
  return /* @__PURE__ */ v.jsx(Y, { ...y, ref: e, style: [{ display: "flex", overflow: "auto" }, m], children: /* @__PURE__ */ v.jsx(Y, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ v.jsx(
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
      onScrollPositionChange: h,
      unstyled: d,
      variant: f,
      viewportProps: p,
      vars: b,
      scrollbars: g,
      children: t
    }
  ) }) });
});
Vn.classes = Ns;
Ps.displayName = "@mantine/core/ScrollAreaAutosize";
Ps.classes = Ns;
Vn.Autosize = Ps;
var yu = { root: "m_87cf2631" };
const Sm = {
  __staticSelector: "UnstyledButton"
}, xr = Gt(
  (r, e) => {
    const t = G("UnstyledButton", Sm, r), {
      className: n,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: c,
      style: l,
      ...u
    } = t, h = ge({
      name: i,
      props: t,
      classes: yu,
      className: n,
      style: l,
      classNames: a,
      styles: c,
      unstyled: s
    });
    return /* @__PURE__ */ v.jsx(
      Y,
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
xr.classes = yu;
xr.displayName = "@mantine/core/UnstyledButton";
var Cu = { root: "m_515a97f8" };
const Tm = {}, Os = ce((r, e) => {
  const t = G("VisuallyHidden", Tm, r), { classNames: n, className: o, style: i, styles: s, unstyled: a, vars: c, ...l } = t, u = ge({
    name: "VisuallyHidden",
    classes: Cu,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a
  });
  return /* @__PURE__ */ v.jsx(Y, { component: "span", ref: e, ...u("root"), ...l });
});
Os.classes = Cu;
Os.displayName = "@mantine/core/VisuallyHidden";
var bu = { root: "m_1b7284a3" };
const _m = {}, Im = (r, { radius: e, shadow: t }) => ({
  root: {
    "--paper-radius": e === void 0 ? void 0 : Tt(e),
    "--paper-shadow": jl(t)
  }
}), Jo = Gt((r, e) => {
  const t = G("Paper", _m, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    withBorder: c,
    vars: l,
    radius: u,
    shadow: h,
    variant: d,
    mod: f,
    ...p
  } = t, g = ge({
    name: "Paper",
    props: t,
    classes: bu,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Im
  });
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      ref: e,
      mod: [{ "data-with-border": c }, f],
      ...g("root"),
      variant: d,
      ...p
    }
  );
});
Jo.classes = bu;
Jo.displayName = "@mantine/core/Paper";
function cn(r) {
  return wu(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function it(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Vt(r) {
  var e;
  return (e = (wu(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function wu(r) {
  return r instanceof Node || r instanceof it(r).Node;
}
function Ye(r) {
  return r instanceof Element || r instanceof it(r).Element;
}
function Ot(r) {
  return r instanceof HTMLElement || r instanceof it(r).HTMLElement;
}
function Tc(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof it(r).ShadowRoot;
}
function Wn(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = Et(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function Am(r) {
  return ["table", "td", "th"].includes(cn(r));
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
function xs(r) {
  const e = Ms(), t = Et(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Rm(r) {
  let e = or(r);
  for (; Ot(e) && !rn(e); ) {
    if (Xo(e))
      return null;
    if (xs(e))
      return e;
    e = or(e);
  }
  return null;
}
function Ms() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function rn(r) {
  return ["html", "body", "#document"].includes(cn(r));
}
function Et(r) {
  return it(r).getComputedStyle(r);
}
function Zo(r) {
  return Ye(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function or(r) {
  if (cn(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    Tc(r) && r.host || // Fallback.
    Vt(r)
  );
  return Tc(e) ? e.host : e;
}
function Eu(r) {
  const e = or(r);
  return rn(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : Ot(e) && Wn(e) ? e : Eu(e);
}
function Dn(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Eu(r), i = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = it(o);
  return i ? e.concat(s, s.visualViewport || [], Wn(o) ? o : [], s.frameElement && t ? Dn(s.frameElement) : []) : e.concat(o, Dn(o, [], t));
}
const rt = Math.min, Ue = Math.max, No = Math.round, io = Math.floor, ir = (r) => ({
  x: r,
  y: r
}), km = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Nm = {
  start: "end",
  end: "start"
};
function es(r, e, t) {
  return Ue(r, rt(e, t));
}
function jt(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function St(r) {
  return r.split("-")[0];
}
function ln(r) {
  return r.split("-")[1];
}
function Ls(r) {
  return r === "x" ? "y" : "x";
}
function Ds(r) {
  return r === "y" ? "height" : "width";
}
function $t(r) {
  return ["top", "bottom"].includes(St(r)) ? "y" : "x";
}
function Us(r) {
  return Ls($t(r));
}
function Pm(r, e, t) {
  t === void 0 && (t = !1);
  const n = ln(r), o = Us(r), i = Ds(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Po(s)), [s, Po(s)];
}
function Om(r) {
  const e = Po(r);
  return [ts(r), e, ts(e)];
}
function ts(r) {
  return r.replace(/start|end/g, (e) => Nm[e]);
}
function xm(r, e, t) {
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
function Mm(r, e, t, n) {
  const o = ln(r);
  let i = xm(St(r), t === "start", n);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(ts)))), i;
}
function Po(r) {
  return r.replace(/left|right|bottom|top/g, (e) => km[e]);
}
function Lm(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Hs(r) {
  return typeof r != "number" ? Lm(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function nn(r) {
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
function _c(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const i = $t(e), s = Us(e), a = Ds(s), c = St(e), l = i === "y", u = n.x + n.width / 2 - o.width / 2, h = n.y + n.height / 2 - o.height / 2, d = n[a] / 2 - o[a] / 2;
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
  switch (ln(e)) {
    case "start":
      f[s] -= d * (t && l ? -1 : 1);
      break;
    case "end":
      f[s] += d * (t && l ? -1 : 1);
      break;
  }
  return f;
}
const Dm = async (r, e, t) => {
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
    y: h
  } = _c(l, n, c), d = n, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: m,
      fn: b
    } = a[g], {
      x: y,
      y: C,
      data: w,
      reset: E
    } = await b({
      x: u,
      y: h,
      initialPlacement: n,
      placement: d,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: s,
      elements: {
        reference: r,
        floating: e
      }
    });
    u = y ?? u, h = C ?? h, f = {
      ...f,
      [m]: {
        ...f[m],
        ...w
      }
    }, E && p <= 50 && (p++, typeof E == "object" && (E.placement && (d = E.placement), E.rects && (l = E.rects === !0 ? await s.getElementRects({
      reference: r,
      floating: e,
      strategy: o
    }) : E.rects), {
      x: u,
      y: h
    } = _c(l, d, c)), g = -1);
  }
  return {
    x: u,
    y: h,
    placement: d,
    strategy: o,
    middlewareData: f
  };
};
async function Fs(r, e) {
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
    elementContext: h = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = jt(e, r), p = Hs(f), m = a[d ? h === "floating" ? "reference" : "floating" : h], b = nn(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), y = h === "floating" ? {
    x: n,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), w = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = nn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: C,
    strategy: c
  }) : y);
  return {
    top: (b.top - E.top + p.top) / w.y,
    bottom: (E.bottom - b.bottom + p.bottom) / w.y,
    left: (b.left - E.left + p.left) / w.x,
    right: (E.right - b.right + p.right) / w.x
  };
}
const Um = (r) => ({
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
    } = jt(r, e) || {};
    if (l == null)
      return {};
    const h = Hs(u), d = {
      x: t,
      y: n
    }, f = Us(o), p = Ds(f), g = await s.getDimensions(l), m = f === "y", b = m ? "top" : "left", y = m ? "bottom" : "right", C = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[f] - d[f] - i.floating[p], E = d[f] - i.reference[f], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let A = T ? T[C] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = a.floating[C] || i.floating[p]);
    const _ = w / 2 - E / 2, L = A / 2 - g[p] / 2 - 1, F = rt(h[b], L), Q = rt(h[y], L), Z = F, se = A - g[p] - Q, $ = A / 2 - g[p] / 2 + _, oe = es(Z, $, se), U = !c.arrow && ln(o) != null && $ !== oe && i.reference[p] / 2 - ($ < Z ? F : Q) - g[p] / 2 < 0, x = U ? $ < Z ? $ - Z : $ - se : 0;
    return {
      [f]: d[f] + x,
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
}), Hm = function(r) {
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
        crossAxis: h = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...m
      } = jt(r, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = St(o), y = $t(a), C = St(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = d || (C || !g ? [Po(a)] : Om(a)), T = p !== "none";
      !d && T && E.push(...Mm(a, g, p, w));
      const A = [a, ...E], _ = await Fs(e, m), L = [];
      let F = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && L.push(_[b]), h) {
        const $ = Pm(o, s, w);
        L.push(_[$[0]], _[$[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: L
      }], !L.every(($) => $ <= 0)) {
        var Q, Z;
        const $ = (((Q = i.flip) == null ? void 0 : Q.index) || 0) + 1, oe = A[$];
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
                  const q = $t(D.placement);
                  return q === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((q) => q > 0).reduce((q, J) => q + J, 0)]).sort((D, q) => D[1] - q[1])[0]) == null ? void 0 : se[0];
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
function Su(r) {
  const e = rt(...r.map((i) => i.left)), t = rt(...r.map((i) => i.top)), n = Ue(...r.map((i) => i.right)), o = Ue(...r.map((i) => i.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function Fm(r) {
  const e = r.slice().sort((o, i) => o.y - i.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !n || i.y - n.y > n.height / 2 ? t.push([i]) : t[t.length - 1].push(i), n = i;
  }
  return t.map((o) => nn(Su(o)));
}
const Bm = function(r) {
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
      } = jt(r, e), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(n.reference)) || []), h = Fm(u), d = nn(Su(u)), f = Hs(a);
      function p() {
        if (h.length === 2 && h[0].left > h[1].right && c != null && l != null)
          return h.find((m) => c > m.left - f.left && c < m.right + f.right && l > m.top - f.top && l < m.bottom + f.bottom) || d;
        if (h.length >= 2) {
          if ($t(t) === "y") {
            const F = h[0], Q = h[h.length - 1], Z = St(t) === "top", se = F.top, $ = Q.bottom, oe = Z ? F.left : Q.left, U = Z ? F.right : Q.right, x = U - oe, D = $ - se;
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
          const m = St(t) === "left", b = Ue(...h.map((F) => F.right)), y = rt(...h.map((F) => F.left)), C = h.filter((F) => m ? F.left === y : F.right === b), w = C[0].top, E = C[C.length - 1].bottom, T = y, A = b, _ = A - T, L = E - w;
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
        return d;
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
async function jm(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = St(t), a = ln(t), c = $t(t) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, h = jt(e, r);
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
  return a && typeof p == "number" && (f = a === "end" ? p * -1 : p), c ? {
    x: f * u,
    y: d * l
  } : {
    x: d * l,
    y: f * u
  };
}
const $m = function(r) {
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
      } = e, c = await jm(e, r);
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
}, Km = function(r) {
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
              y
            } = m;
            return {
              x: b,
              y
            };
          }
        },
        ...c
      } = jt(r, e), l = {
        x: t,
        y: n
      }, u = await Fs(e, c), h = $t(St(o)), d = Ls(h);
      let f = l[d], p = l[h];
      if (i) {
        const m = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = f + u[m], C = f - u[b];
        f = es(y, f, C);
      }
      if (s) {
        const m = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", y = p + u[m], C = p - u[b];
        p = es(y, p, C);
      }
      const g = a.fn({
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
}, qm = function(r) {
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
      } = jt(r, e), u = {
        x: t,
        y: n
      }, h = $t(o), d = Ls(h);
      let f = u[d], p = u[h];
      const g = jt(a, e), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const C = d === "y" ? "height" : "width", w = i.reference[d] - i.floating[C] + m.mainAxis, E = i.reference[d] + i.reference[C] - m.mainAxis;
        f < w ? f = w : f > E && (f = E);
      }
      if (l) {
        var b, y;
        const C = d === "y" ? "width" : "height", w = ["top", "left"].includes(St(o)), E = i.reference[h] - i.floating[C] + (w && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (w ? 0 : m.crossAxis), T = i.reference[h] + i.reference[C] + (w ? 0 : ((y = s.offset) == null ? void 0 : y[h]) || 0) - (w ? m.crossAxis : 0);
        p < E ? p = E : p > T && (p = T);
      }
      return {
        [d]: f,
        [h]: p
      };
    }
  };
}, zm = function(r) {
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
      } = jt(r, e), c = await Fs(e, a), l = St(t), u = ln(t), h = $t(t) === "y", {
        width: d,
        height: f
      } = n.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = u === "end" ? "top" : "bottom");
      const m = f - c.top - c.bottom, b = d - c.left - c.right, y = rt(f - c[p], m), C = rt(d - c[g], b), w = !e.middlewareData.shift;
      let E = y, T = C;
      if (h ? T = u || w ? rt(C, b) : b : E = u || w ? rt(y, m) : m, w && !u) {
        const _ = Ue(c.left, 0), L = Ue(c.right, 0), F = Ue(c.top, 0), Q = Ue(c.bottom, 0);
        h ? T = d - 2 * (_ !== 0 || L !== 0 ? _ + L : Ue(c.left, c.right)) : E = f - 2 * (F !== 0 || Q !== 0 ? F + Q : Ue(c.top, c.bottom));
      }
      await s({
        ...e,
        availableWidth: T,
        availableHeight: E
      });
      const A = await o.getDimensions(i.floating);
      return d !== A.width || f !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Tu(r) {
  const e = Et(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = Ot(r), i = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, a = No(t) !== i || No(n) !== s;
  return a && (t = i, n = s), {
    width: t,
    height: n,
    $: a
  };
}
function Bs(r) {
  return Ye(r) ? r : r.contextElement;
}
function Jr(r) {
  const e = Bs(r);
  if (!Ot(e))
    return ir(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Tu(e);
  let s = (i ? No(t.width) : t.width) / n, a = (i ? No(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Gm = /* @__PURE__ */ ir(0);
function _u(r) {
  const e = it(r);
  return !Ms() || !e.visualViewport ? Gm : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Vm(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== it(r) ? !1 : e;
}
function Rr(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), i = Bs(r);
  let s = ir(1);
  e && (n ? Ye(n) && (s = Jr(n)) : s = Jr(r));
  const a = Vm(i, t, n) ? _u(i) : ir(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, h = o.height / s.y;
  if (i) {
    const d = it(i), f = n && Ye(n) ? it(n) : n;
    let p = d, g = p.frameElement;
    for (; g && n && f !== p; ) {
      const m = Jr(g), b = g.getBoundingClientRect(), y = Et(g), C = b.left + (g.clientLeft + parseFloat(y.paddingLeft)) * m.x, w = b.top + (g.clientTop + parseFloat(y.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, h *= m.y, c += C, l += w, p = it(g), g = p.frameElement;
    }
  }
  return nn({
    width: u,
    height: h,
    x: c,
    y: l
  });
}
function Wm(r) {
  let {
    elements: e,
    rect: t,
    offsetParent: n,
    strategy: o
  } = r;
  const i = o === "fixed", s = Vt(n), a = e ? Xo(e.floating) : !1;
  if (n === s || a && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ir(1);
  const u = ir(0), h = Ot(n);
  if ((h || !h && !i) && ((cn(n) !== "body" || Wn(s)) && (c = Zo(n)), Ot(n))) {
    const d = Rr(n);
    l = Jr(n), u.x = d.x + n.clientLeft, u.y = d.y + n.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function Ym(r) {
  return Array.from(r.getClientRects());
}
function Iu(r) {
  return Rr(Vt(r)).left + Zo(r).scrollLeft;
}
function Qm(r) {
  const e = Vt(r), t = Zo(r), n = r.ownerDocument.body, o = Ue(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Ue(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + Iu(r);
  const a = -t.scrollTop;
  return Et(n).direction === "rtl" && (s += Ue(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Jm(r, e) {
  const t = it(r), n = Vt(r), o = t.visualViewport;
  let i = n.clientWidth, s = n.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Ms();
    (!l || l && e === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Xm(r, e) {
  const t = Rr(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, i = Ot(r) ? Jr(r) : ir(1), s = r.clientWidth * i.x, a = r.clientHeight * i.y, c = o * i.x, l = n * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Ic(r, e, t) {
  let n;
  if (e === "viewport")
    n = Jm(r, t);
  else if (e === "document")
    n = Qm(Vt(r));
  else if (Ye(e))
    n = Xm(e, t);
  else {
    const o = _u(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return nn(n);
}
function Au(r, e) {
  const t = or(r);
  return t === e || !Ye(t) || rn(t) ? !1 : Et(t).position === "fixed" || Au(t, e);
}
function Zm(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Dn(r, [], !1).filter((a) => Ye(a) && cn(a) !== "body"), o = null;
  const i = Et(r).position === "fixed";
  let s = i ? or(r) : r;
  for (; Ye(s) && !rn(s); ) {
    const a = Et(s), c = xs(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Wn(s) && !c && Au(r, s)) ? n = n.filter((u) => u !== s) : o = a, s = or(s);
  }
  return e.set(r, n), n;
}
function ev(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Xo(e) ? [] : Zm(e, this._c) : [].concat(t), n], a = s[0], c = s.reduce((l, u) => {
    const h = Ic(e, u, o);
    return l.top = Ue(h.top, l.top), l.right = rt(h.right, l.right), l.bottom = rt(h.bottom, l.bottom), l.left = Ue(h.left, l.left), l;
  }, Ic(e, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function tv(r) {
  const {
    width: e,
    height: t
  } = Tu(r);
  return {
    width: e,
    height: t
  };
}
function rv(r, e, t) {
  const n = Ot(e), o = Vt(e), i = t === "fixed", s = Rr(r, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ir(0);
  if (n || !n && !i)
    if ((cn(e) !== "body" || Wn(o)) && (a = Zo(e)), n) {
      const h = Rr(e, !0, i, e);
      c.x = h.x + e.clientLeft, c.y = h.y + e.clientTop;
    } else
      o && (c.x = Iu(o));
  const l = s.left + a.scrollLeft - c.x, u = s.top + a.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: s.width,
    height: s.height
  };
}
function _i(r) {
  return Et(r).position === "static";
}
function Ac(r, e) {
  return !Ot(r) || Et(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function Ru(r, e) {
  const t = it(r);
  if (Xo(r))
    return t;
  if (!Ot(r)) {
    let o = or(r);
    for (; o && !rn(o); ) {
      if (Ye(o) && !_i(o))
        return o;
      o = or(o);
    }
    return t;
  }
  let n = Ac(r, e);
  for (; n && Am(n) && _i(n); )
    n = Ac(n, e);
  return n && rn(n) && _i(n) && !xs(n) ? t : n || Rm(r) || t;
}
const nv = async function(r) {
  const e = this.getOffsetParent || Ru, t = this.getDimensions, n = await t(r.floating);
  return {
    reference: rv(r.reference, await e(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ov(r) {
  return Et(r).direction === "rtl";
}
const iv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wm,
  getDocumentElement: Vt,
  getClippingRect: ev,
  getOffsetParent: Ru,
  getElementRects: nv,
  getClientRects: Ym,
  getDimensions: tv,
  getScale: Jr,
  isElement: Ye,
  isRTL: ov
};
function sv(r, e) {
  let t = null, n;
  const o = Vt(r);
  function i() {
    var a;
    clearTimeout(n), (a = t) == null || a.disconnect(), t = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: h,
      height: d
    } = r.getBoundingClientRect();
    if (a || e(), !h || !d)
      return;
    const f = io(u), p = io(o.clientWidth - (l + h)), g = io(o.clientHeight - (u + d)), m = io(l), y = {
      rootMargin: -f + "px " + -p + "px " + -g + "px " + -m + "px",
      threshold: Ue(0, rt(1, c)) || 1
    };
    let C = !0;
    function w(E) {
      const T = E[0].intersectionRatio;
      if (T !== c) {
        if (!C)
          return s();
        T ? s(!1, T) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, y);
    }
    t.observe(r);
  }
  return s(!0), i;
}
function av(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Bs(r), u = o || i ? [...l ? Dn(l) : [], ...Dn(e)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const h = l && a ? sv(l, t) : null;
  let d = -1, f = null;
  s && (f = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && f && (f.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var C;
      (C = f) == null || C.observe(e);
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
    u.forEach((y) => {
      o && y.removeEventListener("scroll", t), i && y.removeEventListener("resize", t);
    }), h == null || h(), (b = f) == null || b.disconnect(), f = null, c && cancelAnimationFrame(p);
  };
}
const cv = $m, lv = Km, uv = Hm, dv = zm, Rc = Um, hv = Bm, fv = qm, pv = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: iv,
    ...t
  }, i = {
    ...o.platform,
    _c: n
  };
  return Dm(r, e, {
    ...o,
    platform: i
  });
};
var uo = typeof document < "u" ? ds : V;
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
function ku(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kc(r, e) {
  const t = ku(r);
  return Math.round(e * t) / t;
}
function Nc(r) {
  const e = ae.useRef(r);
  return uo(() => {
    e.current = r;
  }), e;
}
function gv(r) {
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
  } = r, [u, h] = ae.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = ae.useState(n);
  Oo(d, n) || f(n);
  const [p, g] = ae.useState(null), [m, b] = ae.useState(null), y = ae.useCallback((x) => {
    x !== T.current && (T.current = x, g(x));
  }, []), C = ae.useCallback((x) => {
    x !== A.current && (A.current = x, b(x));
  }, []), w = i || p, E = s || m, T = ae.useRef(null), A = ae.useRef(null), _ = ae.useRef(u), L = c != null, F = Nc(c), Q = Nc(o), Z = ae.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const x = {
      placement: e,
      strategy: t,
      middleware: d
    };
    Q.current && (x.platform = Q.current), pv(T.current, A.current, x).then((D) => {
      const q = {
        ...D,
        isPositioned: !0
      };
      se.current && !Oo(_.current, q) && (_.current = q, Yd.flushSync(() => {
        h(q);
      }));
    });
  }, [d, e, t, Q]);
  uo(() => {
    l === !1 && _.current.isPositioned && (_.current.isPositioned = !1, h((x) => ({
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
    setReference: y,
    setFloating: C
  }), [y, C]), oe = ae.useMemo(() => ({
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
    const D = kc(oe.floating, u.x), q = kc(oe.floating, u.y);
    return a ? {
      ...x,
      transform: "translate(" + D + "px, " + q + "px)",
      ...ku(oe.floating) >= 1.5 && {
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
const mv = (r) => {
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
      return n && e(n) ? n.current != null ? Rc({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? Rc({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
}, vv = (r, e) => ({
  ...cv(r),
  options: [r, e]
}), yv = (r, e) => ({
  ...lv(r),
  options: [r, e]
}), Pc = (r, e) => ({
  ...fv(r),
  options: [r, e]
}), Oc = (r, e) => ({
  ...uv(r),
  options: [r, e]
}), Cv = (r, e) => ({
  ...dv(r),
  options: [r, e]
}), xc = (r, e) => ({
  ...hv(r),
  options: [r, e]
}), bv = (r, e) => ({
  ...mv(r),
  options: [r, e]
}), Nu = {
  ...ae
}, wv = Nu.useInsertionEffect, Ev = wv || ((r) => r());
function Sv(r) {
  const e = ae.useRef(() => {
  });
  return Ev(() => {
    e.current = r;
  }), ae.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var rs = typeof document < "u" ? ds : V;
let Mc = !1, Tv = 0;
const Lc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Tv++
);
function _v() {
  const [r, e] = ae.useState(() => Mc ? Lc() : void 0);
  return rs(() => {
    r == null && e(Lc());
  }, []), ae.useEffect(() => {
    Mc = !0;
  }, []), r;
}
const Iv = Nu.useId, Av = Iv || _v;
function Rv() {
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
const kv = /* @__PURE__ */ ae.createContext(null), Nv = /* @__PURE__ */ ae.createContext(null), Pv = () => {
  var r;
  return ((r = ae.useContext(kv)) == null ? void 0 : r.id) || null;
}, Ov = () => ae.useContext(Nv);
function xv(r) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: n
  } = r, o = Av(), i = ae.useRef({}), [s] = ae.useState(() => Rv()), a = Pv() != null, [c, l] = ae.useState(n.reference), u = Sv((f, p, g) => {
    i.current.openEvent = f ? p : void 0, s.emit("openchange", {
      open: f,
      event: p,
      reason: g,
      nested: a
    }), t == null || t(f, p, g);
  }), h = ae.useMemo(() => ({
    setPositionReference: l
  }), []), d = ae.useMemo(() => ({
    reference: c || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [c, n.reference, n.floating]);
  return ae.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: d,
    events: s,
    floatingId: o,
    refs: h
  }), [e, u, d, s, o, h]);
}
function Mv(r) {
  r === void 0 && (r = {});
  const {
    nodeId: e
  } = r, t = xv({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), n = r.rootContext || t, o = n.elements, [i, s] = ae.useState(null), [a, c] = ae.useState(null), u = (o == null ? void 0 : o.reference) || i, h = ae.useRef(null), d = Ov();
  rs(() => {
    u && (h.current = u);
  }, [u]);
  const f = gv({
    ...r,
    elements: {
      ...o,
      ...a && {
        reference: a
      }
    }
  }), p = ae.useCallback((C) => {
    const w = Ye(C) ? {
      getBoundingClientRect: () => C.getBoundingClientRect(),
      contextElement: C
    } : C;
    c(w), f.refs.setReference(w);
  }, [f.refs]), g = ae.useCallback((C) => {
    (Ye(C) || C === null) && (h.current = C, s(C)), (Ye(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    C !== null && !Ye(C)) && f.refs.setReference(C);
  }, [f.refs]), m = ae.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: p,
    domReference: h
  }), [f.refs, g, p]), b = ae.useMemo(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), y = ae.useMemo(() => ({
    ...f,
    ...n,
    refs: m,
    elements: b,
    nodeId: e
  }), [f, m, b, e, n]);
  return rs(() => {
    n.dataRef.current.floatingContext = y;
    const C = d == null ? void 0 : d.nodesRef.current.find((w) => w.id === e);
    C && (C.context = y);
  }), ae.useMemo(() => ({
    ...f,
    context: y,
    refs: m,
    elements: b
  }), [f, m, b, y]);
}
function Lv(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function Dc(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function Uc(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const Dv = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Uv({
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
    [Dv[c]]: n
  }, h = -e / 2;
  return c === "left" ? {
    ...u,
    ...Dc(l, s, t, o),
    right: h,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...Dc(l, s, t, o),
    left: h,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...Uc(l, i, t, o, a),
    bottom: h,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...Uc(l, i, t, o, a),
    top: h,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Pu = Ce(
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
    const { dir: h } = Rs();
    return i ? /* @__PURE__ */ v.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Uv({
            position: r,
            arrowSize: e,
            arrowOffset: t,
            arrowRadius: n,
            arrowPosition: o,
            dir: h,
            arrowX: s,
            arrowY: a
          })
        }
      }
    ) : null;
  }
);
Pu.displayName = "@mantine/core/FloatingArrow";
const [Hv, Ou] = an(
  "Popover component was not found in the tree"
);
function js({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = qp(e), o = ht(n, r == null ? void 0 : r.ref);
  return zn(r) ? $o(r, { [t]: o }) : r;
}
function xu(r) {
  return /* @__PURE__ */ v.jsx(Os, { tabIndex: -1, "data-autofocus": !0, ...r });
}
js.displayName = "@mantine/core/FocusTrap";
xu.displayName = "@mantine/core/FocusTrapInitialFocus";
js.InitialFocus = xu;
function Fv(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const Bv = {}, Mu = Ce((r, e) => {
  const { children: t, target: n, ...o } = G("Portal", Bv, r), [i, s] = X(!1), a = ue(null);
  return Gn(() => (s(!0), a.current = n ? typeof n == "string" ? document.querySelector(n) : n : Fv(o), Gl(e, a.current), !n && a.current && document.body.appendChild(a.current), () => {
    !n && a.current && document.body.removeChild(a.current);
  }), [n]), !i || !a.current ? null : Jd(/* @__PURE__ */ v.jsx(v.Fragment, { children: t }), a.current);
});
Mu.displayName = "@mantine/core/Portal";
function Lu({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ v.jsx(Mu, { ...t, children: e }) : /* @__PURE__ */ v.jsx(v.Fragment, { children: e });
}
Lu.displayName = "@mantine/core/OptionalPortal";
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
}, Hc = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function jv({
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
    ...so[r][Hc[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[Hc[e]]
  };
}
function $v({
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
  const u = zt(), h = Wl(), d = u.respectReducedMotion ? h : !1, [f, p] = X(d ? 0 : r), [g, m] = X(n ? "entered" : "exited"), b = ue(-1), y = ue(-1), C = ue(-1), w = (T) => {
    const A = T ? o : i, _ = T ? s : a;
    window.clearTimeout(b.current);
    const L = d ? 0 : T ? r : e;
    p(L), L === 0 ? (typeof A == "function" && A(), typeof _ == "function" && _(), m(T ? "entered" : "exited")) : C.current = requestAnimationFrame(() => {
      fl.flushSync(() => {
        m(T ? "pre-entering" : "pre-exiting");
      }), C.current = requestAnimationFrame(() => {
        typeof A == "function" && A(), m(T ? "entering" : "exiting"), b.current = window.setTimeout(() => {
          typeof _ == "function" && _(), m(T ? "entered" : "exited");
        }, L);
      });
    });
  }, E = (T) => {
    if (window.clearTimeout(y.current), typeof (T ? c : l) != "number") {
      w(T);
      return;
    }
    y.current = window.setTimeout(
      () => {
        w(T);
      },
      T ? c : l
    );
  };
  return Ir(() => {
    E(n);
  }, [n]), V(
    () => () => {
      window.clearTimeout(b.current), cancelAnimationFrame(C.current);
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
  timingFunction: s = "ease",
  onExit: a,
  onEntered: c,
  onEnter: l,
  onExited: u,
  enterDelay: h,
  exitDelay: d
}) {
  const { transitionDuration: f, transitionStatus: p, transitionTimingFunction: g } = $v({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: s,
    onExit: a,
    onEntered: c,
    onEnter: l,
    onExited: u,
    enterDelay: h,
    exitDelay: d
  });
  return f === 0 ? o ? /* @__PURE__ */ v.jsx(v.Fragment, { children: i({}) }) : r ? i({ display: "none" }) : null : p === "exited" ? r ? i({ display: "none" }) : null : /* @__PURE__ */ v.jsx(v.Fragment, { children: i(
    jv({
      transition: e,
      duration: f,
      state: p,
      timingFunction: g
    })
  ) });
}
ei.displayName = "@mantine/core/Transition";
var Du = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Kv = {}, $s = ce((r, e) => {
  var m, b, y, C;
  const t = G("PopoverDropdown", Kv, r), {
    className: n,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...h
  } = t, d = Ou(), f = Up({
    opened: d.opened,
    shouldReturnFocus: d.returnFocus
  }), p = d.withRoles ? {
    "aria-labelledby": d.getTargetId(),
    id: d.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = ht(e, d.floating);
  return d.disabled ? null : /* @__PURE__ */ v.jsx(Lu, { ...d.portalProps, withinPortal: d.withinPortal, children: /* @__PURE__ */ v.jsx(
    ei,
    {
      mounted: d.opened,
      ...d.transitionProps,
      transition: ((m = d.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((b = d.transitionProps) == null ? void 0 : b.duration) ?? 150,
      keepMounted: d.keepMounted,
      exitDuration: typeof ((y = d.transitionProps) == null ? void 0 : y.exitDuration) == "number" ? d.transitionProps.exitDuration : (C = d.transitionProps) == null ? void 0 : C.duration,
      children: (w) => /* @__PURE__ */ v.jsx(js, { active: d.trapFocus, children: /* @__PURE__ */ v.jsxs(
        Y,
        {
          ...p,
          ...h,
          variant: c,
          ref: g,
          onKeyDownCapture: Np(d.onClose, {
            active: d.closeOnEscape,
            onTrigger: f,
            onKeyDown: a
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
                width: d.width === "target" ? void 0 : R(d.width)
              },
              o
            ]
          }),
          children: [
            s,
            /* @__PURE__ */ v.jsx(
              Pu,
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
$s.classes = Du;
$s.displayName = "@mantine/core/PopoverDropdown";
const qv = {
  refProp: "ref",
  popupType: "dialog"
}, Uu = ce((r, e) => {
  const { children: t, refProp: n, popupType: o, ...i } = G(
    "PopoverTarget",
    qv,
    r
  );
  if (!zn(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Ou(), c = ht(a.reference, t.ref, e), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return $o(t, {
    ...s,
    ...l,
    ...a.targetProps,
    className: qt(a.targetProps.className, s.className, t.props.className),
    [n]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
Uu.displayName = "@mantine/core/PopoverTarget";
function zv({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, i] = X(0);
  V(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return av(
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
function Gv(r) {
  if (r === void 0)
    return { shift: !0, flip: !0 };
  const e = { ...r };
  return r.shift === void 0 && (e.shift = !0), r.flip === void 0 && (e.flip = !0), e;
}
function Vv(r, e) {
  const t = Gv(r.middlewares), n = [vv(r.offset)];
  return t.shift && n.push(
    yv(
      typeof t.shift == "boolean" ? { limiter: Pc(), padding: 5 } : { limiter: Pc(), padding: 5, ...t.shift }
    )
  ), t.flip && n.push(
    typeof t.flip == "boolean" ? Oc() : Oc(t.flip)
  ), t.inline && n.push(
    typeof t.inline == "boolean" ? xc() : xc(t.inline)
  ), n.push(bv({ element: r.arrowRef, padding: r.arrowOffset })), (t.size || r.width === "target") && n.push(
    Cv({
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
function Wv(r) {
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
  }, i = Mv({
    strategy: r.strategy,
    placement: r.position,
    middleware: Vv(r, () => i)
  });
  return zv({
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
const Yv = {
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
  zIndex: Rp("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Qv = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : Tt(e),
    "--popover-shadow": jl(t)
  }
});
function lr(r) {
  var je, gr, Dr, $e, Lt, Ur;
  const e = G("Popover", Yv, r), {
    children: t,
    position: n,
    offset: o,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    transitionProps: c,
    width: l,
    middlewares: u,
    withArrow: h,
    arrowSize: d,
    arrowOffset: f,
    arrowRadius: p,
    arrowPosition: g,
    unstyled: m,
    classNames: b,
    styles: y,
    closeOnClickOutside: C,
    withinPortal: w,
    portalProps: E,
    closeOnEscape: T,
    clickOutsideEvents: A,
    trapFocus: _,
    onClose: L,
    onOpen: F,
    onChange: Q,
    zIndex: Z,
    radius: se,
    shadow: $,
    id: oe,
    defaultOpened: U,
    __staticSelector: x,
    withRoles: D,
    disabled: q,
    returnFocus: J,
    variant: me,
    keepMounted: fe,
    vars: qe,
    floatingStrategy: mt,
    ...ke
  } = e, dr = ge({
    name: x,
    props: e,
    classes: Du,
    classNames: b,
    styles: y,
    unstyled: m,
    rootSelector: "dropdown",
    vars: qe,
    varsResolver: Qv
  }), Yt = ue(null), [hr, fr] = X(null), [pr, hn] = X(null), { dir: fn } = Rs(), xt = cr(oe), Te = Wv({
    middlewares: u,
    width: l,
    position: Lv(fn, n),
    offset: typeof o == "number" ? o + (h ? d / 2 : 0) : o,
    arrowRef: Yt,
    arrowOffset: f,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: U,
    onChange: Q,
    onOpen: F,
    onClose: L,
    strategy: mt
  });
  Op(() => C && Te.onClose(), A, [
    hr,
    pr
  ]);
  const Mt = ye(
    (ct) => {
      fr(ct), Te.floating.refs.setReference(ct);
    },
    [Te.floating.refs.setReference]
  ), Lr = ye(
    (ct) => {
      hn(ct), Te.floating.refs.setFloating(ct);
    },
    [Te.floating.refs.setFloating]
  );
  return /* @__PURE__ */ v.jsx(
    Hv,
    {
      value: {
        returnFocus: J,
        disabled: q,
        controlled: Te.controlled,
        reference: Mt,
        floating: Lr,
        x: Te.floating.x,
        y: Te.floating.y,
        arrowX: (Dr = (gr = (je = Te.floating) == null ? void 0 : je.middlewareData) == null ? void 0 : gr.arrow) == null ? void 0 : Dr.x,
        arrowY: (Ur = (Lt = ($e = Te.floating) == null ? void 0 : $e.middlewareData) == null ? void 0 : Lt.arrow) == null ? void 0 : Ur.y,
        opened: Te.opened,
        arrowRef: Yt,
        transitionProps: c,
        width: l,
        withArrow: h,
        arrowSize: d,
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
        getTargetId: () => `${xt}-target`,
        getDropdownId: () => `${xt}-dropdown`,
        withRoles: D,
        targetProps: ke,
        __staticSelector: x,
        classNames: b,
        styles: y,
        unstyled: m,
        variant: me,
        keepMounted: fe,
        getStyles: dr,
        floatingStrategy: mt
      },
      children: t
    }
  );
}
lr.Target = Uu;
lr.Dropdown = $s;
lr.displayName = "@mantine/core/Popover";
lr.extend = (r) => r;
var wt = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const Jv = Ce(({ className: r, ...e }, t) => /* @__PURE__ */ v.jsxs(Y, { component: "span", className: qt(wt.barsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ v.jsx("span", { className: wt.bar }),
  /* @__PURE__ */ v.jsx("span", { className: wt.bar }),
  /* @__PURE__ */ v.jsx("span", { className: wt.bar })
] })), Xv = Ce(({ className: r, ...e }, t) => /* @__PURE__ */ v.jsxs(Y, { component: "span", className: qt(wt.dotsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ v.jsx("span", { className: wt.dot }),
  /* @__PURE__ */ v.jsx("span", { className: wt.dot }),
  /* @__PURE__ */ v.jsx("span", { className: wt.dot })
] })), Zv = Ce(({ className: r, ...e }, t) => /* @__PURE__ */ v.jsx(Y, { component: "span", className: qt(wt.ovalLoader, r), ...e, ref: t })), Hu = {
  bars: Jv,
  oval: Zv,
  dots: Xv
}, ey = {
  loaders: Hu,
  type: "oval"
}, ty = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Re(e, "loader-size"),
    "--loader-color": t ? nr(t, r) : void 0
  }
}), Yn = ce((r, e) => {
  const t = G("Loader", ey, r), {
    size: n,
    color: o,
    type: i,
    vars: s,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: h,
    loaders: d,
    variant: f,
    children: p,
    ...g
  } = t, m = ge({
    name: "Loader",
    props: t,
    classes: wt,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: h,
    vars: s,
    varsResolver: ty
  });
  return p ? /* @__PURE__ */ v.jsx(Y, { ...m("root"), ref: e, ...g, children: p }) : /* @__PURE__ */ v.jsx(
    Y,
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
Yn.defaultLoaders = Hu;
Yn.classes = wt;
Yn.displayName = "@mantine/core/Loader";
var ti = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const Fc = {
  orientation: "horizontal"
}, ry = (r, { borderWidth: e }) => ({
  group: { "--ai-border-width": R(e) }
}), Ks = ce((r, e) => {
  const t = G("ActionIconGroup", Fc, r), {
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: h,
    mod: d,
    ...f
  } = G("ActionIconGroup", Fc, r), p = ge({
    name: "ActionIconGroup",
    props: t,
    classes: ti,
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: ry,
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.jsx(
    Y,
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
Ks.classes = ti;
Ks.displayName = "@mantine/core/ActionIconGroup";
const ny = {}, oy = (r, { size: e, radius: t, variant: n, gradient: o, color: i, autoContrast: s }) => {
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
      "--ai-radius": t === void 0 ? void 0 : Tt(t),
      "--ai-bg": i || n ? a.background : void 0,
      "--ai-hover": i || n ? a.hover : void 0,
      "--ai-hover-color": i || n ? a.hoverColor : void 0,
      "--ai-color": a.color,
      "--ai-bd": i || n ? a.border : void 0
    }
  };
}, ri = Gt((r, e) => {
  const t = G("ActionIcon", ny, r), {
    className: n,
    unstyled: o,
    variant: i,
    classNames: s,
    styles: a,
    style: c,
    loading: l,
    loaderProps: u,
    size: h,
    color: d,
    radius: f,
    __staticSelector: p,
    gradient: g,
    vars: m,
    children: b,
    disabled: y,
    "data-disabled": C,
    autoContrast: w,
    mod: E,
    ...T
  } = t, A = ge({
    name: ["ActionIcon", p],
    props: t,
    className: n,
    style: c,
    classes: ti,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: m,
    varsResolver: oy
  });
  return /* @__PURE__ */ v.jsxs(
    xr,
    {
      ...A("root", { active: !y && !l && !C }),
      ...T,
      unstyled: o,
      variant: i,
      size: h,
      disabled: y || l,
      ref: e,
      mod: [{ loading: l, disabled: y || C }, E],
      children: [
        /* @__PURE__ */ v.jsx(ei, { mounted: !!l, transition: "slide-down", duration: 150, children: (_) => /* @__PURE__ */ v.jsx(Y, { component: "span", ...A("loader", { style: _ }), "aria-hidden": !0, children: /* @__PURE__ */ v.jsx(Yn, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ v.jsx(Y, { component: "span", mod: { loading: l }, ...A("icon"), children: b })
      ]
    }
  );
});
ri.classes = ti;
ri.displayName = "@mantine/core/ActionIcon";
ri.Group = Ks;
const Fu = Ce(
  ({ size: r = "var(--cb-icon-size, 70%)", style: e, ...t }, n) => /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: r, height: r },
      ref: n,
      ...t,
      children: /* @__PURE__ */ v.jsx(
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
Fu.displayName = "@mantine/core/CloseIcon";
var Bu = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const iy = {
  variant: "subtle"
}, sy = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Re(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : Tt(t),
    "--cb-icon-size": R(n)
  }
}), un = Gt((r, e) => {
  const t = G("CloseButton", iy, r), {
    iconSize: n,
    children: o,
    vars: i,
    radius: s,
    className: a,
    classNames: c,
    style: l,
    styles: u,
    unstyled: h,
    "data-disabled": d,
    disabled: f,
    variant: p,
    icon: g,
    mod: m,
    ...b
  } = t, y = ge({
    name: "CloseButton",
    props: t,
    className: a,
    style: l,
    classes: Bu,
    classNames: c,
    styles: u,
    unstyled: h,
    vars: i,
    varsResolver: sy
  });
  return /* @__PURE__ */ v.jsxs(
    xr,
    {
      ref: e,
      ...b,
      unstyled: h,
      variant: p,
      disabled: f,
      mod: [{ disabled: f || d }, m],
      ...y("root", { variant: p, active: !f && !d }),
      children: [
        g || /* @__PURE__ */ v.jsx(Fu, {}),
        o
      ]
    }
  );
});
un.classes = Bu;
un.displayName = "@mantine/core/CloseButton";
function ay(r) {
  return Pi.toArray(r).filter(Boolean);
}
var ju = { root: "m_4081bf90" };
const cy = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, ly = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": e && t ? a : void 0,
    "--group-gap": ws(n),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), Un = ce((r, e) => {
  const t = G("Group", cy, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    children: c,
    gap: l,
    align: u,
    justify: h,
    wrap: d,
    grow: f,
    preventGrowOverflow: p,
    vars: g,
    variant: m,
    __size: b,
    mod: y,
    ...C
  } = t, w = ay(c), E = w.length, T = ws(l ?? "md"), _ = { childWidth: `calc(${100 / E}% - (${T} - ${T} / ${E}))` }, L = ge({
    name: "Group",
    props: t,
    stylesCtx: _,
    className: o,
    style: i,
    classes: ju,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: ly
  });
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      ...L("root"),
      ref: e,
      variant: m,
      mod: [{ grow: f }, y],
      size: b,
      ...C,
      children: w
    }
  );
});
Un.classes = ju;
Un.displayName = "@mantine/core/Group";
const [uy, Qn] = Bl({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var pt = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const Bc = {}, dy = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${ot(e)} - ${R(2)})`
  }
}), ni = ce((r, e) => {
  const t = G("InputDescription", Bc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: h = !0,
    variant: d,
    ...f
  } = G("InputDescription", Bc, t), p = Qn(), g = ge({
    name: ["InputWrapper", u],
    props: t,
    classes: pt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: c,
    varsResolver: dy
  }), m = h && (p == null ? void 0 : p.getStyles) || g;
  return /* @__PURE__ */ v.jsx(
    Y,
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
ni.classes = pt;
ni.displayName = "@mantine/core/InputDescription";
const hy = {}, fy = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${ot(e)} - ${R(2)})`
  }
}), oi = ce((r, e) => {
  const t = G("InputError", hy, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: h = !0,
    variant: d,
    ...f
  } = t, p = ge({
    name: ["InputWrapper", u],
    props: t,
    classes: pt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "error",
    vars: c,
    varsResolver: fy
  }), g = Qn(), m = h && (g == null ? void 0 : g.getStyles) || p;
  return /* @__PURE__ */ v.jsx(
    Y,
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
oi.classes = pt;
oi.displayName = "@mantine/core/InputError";
const jc = {
  labelElement: "label"
}, py = (r, { size: e }) => ({
  label: {
    "--input-label-size": ot(e),
    "--input-asterisk-color": void 0
  }
}), ii = ce((r, e) => {
  const t = G("InputLabel", jc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    labelElement: l,
    size: u,
    required: h,
    htmlFor: d,
    onMouseDown: f,
    children: p,
    __staticSelector: g,
    variant: m,
    mod: b,
    ...y
  } = G("InputLabel", jc, t), C = ge({
    name: ["InputWrapper", g],
    props: t,
    classes: pt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: c,
    varsResolver: py
  }), w = Qn(), E = (w == null ? void 0 : w.getStyles) || C;
  return /* @__PURE__ */ v.jsxs(
    Y,
    {
      ...E("label", w != null && w.getStyles ? { className: o, style: i } : void 0),
      component: l,
      variant: m,
      size: u,
      ref: e,
      htmlFor: l === "label" ? d : void 0,
      mod: [{ required: h }, b],
      onMouseDown: (T) => {
        f == null || f(T), !T.defaultPrevented && T.detail > 1 && T.preventDefault();
      },
      ...y,
      children: [
        p,
        h && /* @__PURE__ */ v.jsx("span", { ...E("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
ii.classes = pt;
ii.displayName = "@mantine/core/InputLabel";
const $c = {}, qs = ce((r, e) => {
  const t = G("InputPlaceholder", $c, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: h,
    mod: d,
    ...f
  } = G("InputPlaceholder", $c, t), p = ge({
    name: ["InputPlaceholder", l],
    props: t,
    classes: pt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ v.jsx(
    Y,
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
qs.classes = pt;
qs.displayName = "@mantine/core/InputPlaceholder";
function gy(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((c) => c === "input"), o = r.slice(0, n), i = r.slice(n + 1), s = e && o.includes("description") || t && o.includes("error");
  return { offsetBottom: e && i.includes("description") || t && i.includes("error"), offsetTop: s };
}
const my = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, vy = (r, { size: e }) => ({
  label: {
    "--input-label-size": ot(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${ot(e)} - ${R(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${ot(e)} - ${R(2)})`
  }
}), zs = ce((r, e) => {
  const t = G("InputWrapper", my, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    variant: u,
    __staticSelector: h,
    inputContainer: d,
    inputWrapperOrder: f,
    label: p,
    error: g,
    description: m,
    labelProps: b,
    descriptionProps: y,
    errorProps: C,
    labelElement: w,
    children: E,
    withAsterisk: T,
    id: A,
    required: _,
    __stylesApiProps: L,
    mod: F,
    ...Q
  } = t, Z = ge({
    name: ["InputWrapper", h],
    props: L || t,
    classes: pt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: vy
  }), se = {
    size: l,
    variant: u,
    __staticSelector: h
  }, $ = cr(A), oe = typeof T == "boolean" ? T : _, U = (C == null ? void 0 : C.id) || `${$}-error`, x = (y == null ? void 0 : y.id) || `${$}-description`, D = $, q = !!g && typeof g != "boolean", J = !!m, me = `${q ? U : ""} ${J ? x : ""}`, fe = me.trim().length > 0 ? me.trim() : void 0, qe = (b == null ? void 0 : b.id) || `${$}-label`, mt = p && /* @__PURE__ */ v.jsx(
    ii,
    {
      labelElement: w,
      id: qe,
      htmlFor: D,
      required: oe,
      ...se,
      ...b,
      children: p
    },
    "label"
  ), ke = J && /* @__PURE__ */ v.jsx(
    ni,
    {
      ...y,
      ...se,
      size: (y == null ? void 0 : y.size) || se.size,
      id: (y == null ? void 0 : y.id) || x,
      children: m
    },
    "description"
  ), dr = /* @__PURE__ */ v.jsx(dl, { children: d(E) }, "input"), Yt = q && /* @__PURE__ */ Oi(
    oi,
    {
      ...C,
      ...se,
      size: (C == null ? void 0 : C.size) || se.size,
      key: "error",
      id: (C == null ? void 0 : C.id) || U
    },
    g
  ), hr = f.map((fr) => {
    switch (fr) {
      case "label":
        return mt;
      case "input":
        return dr;
      case "description":
        return ke;
      case "error":
        return Yt;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ v.jsx(
    uy,
    {
      value: {
        getStyles: Z,
        describedBy: fe,
        inputId: D,
        labelId: qe,
        ...gy(f, { hasDescription: J, hasError: q })
      },
      children: /* @__PURE__ */ v.jsx(
        Y,
        {
          ref: e,
          variant: u,
          size: l,
          mod: [{ error: !!g }, F],
          ...Z("root"),
          ...Q,
          children: hr
        }
      )
    }
  );
});
zs.classes = pt;
zs.displayName = "@mantine/core/InputWrapper";
const yy = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Cy = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Re(e.size, "input-height"),
    "--input-fz": ot(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : Tt(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? R(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? R(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Re(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Be = Gt((r, e) => {
  const t = G("Input", yy, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    required: c,
    __staticSelector: l,
    __stylesApiProps: u,
    size: h,
    wrapperProps: d,
    error: f,
    disabled: p,
    leftSection: g,
    leftSectionProps: m,
    leftSectionWidth: b,
    rightSection: y,
    rightSectionProps: C,
    rightSectionWidth: w,
    rightSectionPointerEvents: E,
    leftSectionPointerEvents: T,
    variant: A,
    vars: _,
    pointer: L,
    multiline: F,
    radius: Q,
    id: Z,
    withAria: se,
    withErrorStyles: $,
    mod: oe,
    inputSize: U,
    ...x
  } = t, { styleProps: D, rest: q } = Yo(x), J = Qn(), me = { offsetBottom: J == null ? void 0 : J.offsetBottom, offsetTop: J == null ? void 0 : J.offsetTop }, fe = ge({
    name: ["Input", l],
    props: u || t,
    classes: pt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    stylesCtx: me,
    rootSelector: "wrapper",
    vars: _,
    varsResolver: Cy
  }), qe = se ? {
    required: c,
    disabled: p,
    "aria-invalid": !!f,
    "aria-describedby": J == null ? void 0 : J.describedBy,
    id: (J == null ? void 0 : J.inputId) || Z
  } : {};
  return /* @__PURE__ */ v.jsxs(
    Y,
    {
      ...fe("wrapper"),
      ...D,
      ...d,
      mod: [
        {
          error: !!f && $,
          pointer: L,
          disabled: p,
          multiline: F,
          "data-with-right-section": !!y,
          "data-with-left-section": !!g
        },
        oe
      ],
      variant: A,
      size: h,
      children: [
        g && /* @__PURE__ */ v.jsx(
          "div",
          {
            ...m,
            "data-position": "left",
            ...fe("section", {
              className: m == null ? void 0 : m.className,
              style: m == null ? void 0 : m.style
            }),
            children: g
          }
        ),
        /* @__PURE__ */ v.jsx(
          Y,
          {
            component: "input",
            ...q,
            ...qe,
            ref: e,
            required: c,
            mod: { disabled: p, error: !!f && $ },
            variant: A,
            __size: U,
            ...fe("input")
          }
        ),
        y && /* @__PURE__ */ v.jsx(
          "div",
          {
            ...C,
            "data-position": "right",
            ...fe("section", {
              className: C == null ? void 0 : C.className,
              style: C == null ? void 0 : C.style
            }),
            children: y
          }
        )
      ]
    }
  );
});
Be.classes = pt;
Be.Wrapper = zs;
Be.Label = ii;
Be.Error = oi;
Be.Description = ni;
Be.Placeholder = qs;
Be.displayName = "@mantine/core/Input";
function by(r, e, t) {
  const n = G(r, e, t), {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: c,
    styles: l,
    className: u,
    unstyled: h,
    __staticSelector: d,
    __stylesApiProps: f,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    wrapperProps: b,
    id: y,
    size: C,
    style: w,
    inputContainer: E,
    inputWrapperOrder: T,
    withAsterisk: A,
    variant: _,
    vars: L,
    mod: F,
    ...Q
  } = n, { styleProps: Z, rest: se } = Yo(Q), $ = {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: c,
    className: u,
    __staticSelector: d,
    __stylesApiProps: f || n,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    unstyled: h,
    styles: l,
    size: C,
    style: w,
    inputContainer: E,
    inputWrapperOrder: T,
    withAsterisk: A,
    variant: _,
    id: y,
    mod: F,
    ...b
  };
  return {
    ...se,
    classNames: c,
    styles: l,
    unstyled: h,
    wrapperProps: { ...$, ...Z },
    inputProps: {
      required: a,
      classNames: c,
      styles: l,
      unstyled: h,
      size: C,
      __staticSelector: d,
      __stylesApiProps: f || n,
      error: s,
      variant: _,
      id: y
    }
  };
}
const wy = {
  __staticSelector: "InputBase",
  withAria: !0
}, Wt = Gt((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = by("InputBase", wy, r);
  return /* @__PURE__ */ v.jsx(Be.Wrapper, { ...n, children: /* @__PURE__ */ v.jsx(Be, { ...t, ...o, ref: e }) });
});
Wt.classes = { ...Be.classes, ...Be.Wrapper.classes };
Wt.displayName = "@mantine/core/InputBase";
const [Ey, Gs] = an(
  "Accordion component was not found in the tree"
);
function Vs({ style: r, size: e = 16, ...t }) {
  return /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: R(e), height: R(e), display: "block" },
      ...t,
      children: /* @__PURE__ */ v.jsx(
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
Vs.displayName = "@mantine/core/AccordionChevron";
const [Sy, $u] = an("Accordion.Item component was not found in the tree");
var Jn = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const Ty = {}, Ws = ce((r, e) => {
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
    children: h,
    disabled: d,
    mod: f,
    ...p
  } = G("AccordionControl", Ty, r), { value: g } = $u(), m = Gs(), b = m.isItemActive(g), y = typeof m.order == "number", C = `h${m.order}`, w = /* @__PURE__ */ v.jsxs(
    xr,
    {
      ...p,
      ...m.getStyles("control", { className: n, classNames: t, style: o, styles: i, variant: m.variant }),
      unstyled: m.unstyled,
      mod: [
        "accordion-control",
        { active: b, "chevron-position": m.chevronPosition, disabled: d },
        f
      ],
      ref: e,
      onClick: (E) => {
        l == null || l(E), m.onChange(g);
      },
      type: "button",
      disabled: d,
      "aria-expanded": b,
      "aria-controls": m.getRegionId(g),
      id: m.getControlId(g),
      onKeyDown: Ip({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: m.loop,
        orientation: "vertical",
        onKeyDown: u
      }),
      children: [
        /* @__PURE__ */ v.jsx(
          Y,
          {
            component: "span",
            mod: { rotate: !m.disableChevronRotation && b, position: m.chevronPosition },
            ...m.getStyles("chevron", { classNames: t, styles: i }),
            children: a || m.chevron
          }
        ),
        /* @__PURE__ */ v.jsx("span", { ...m.getStyles("label", { classNames: t, styles: i }), children: h }),
        c && /* @__PURE__ */ v.jsx(
          Y,
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
  return y ? /* @__PURE__ */ v.jsx(C, { ...m.getStyles("itemTitle", { classNames: t, styles: i }), children: w }) : w;
});
Ws.displayName = "@mantine/core/AccordionControl";
Ws.classes = Jn;
const _y = {}, Ys = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, value: a, mod: c, ...l } = G(
    "AccordionItem",
    _y,
    r
  ), u = Gs();
  return /* @__PURE__ */ v.jsx(Sy, { value: { value: a }, children: /* @__PURE__ */ v.jsx(
    Y,
    {
      ref: e,
      mod: [{ active: u.isItemActive(a) }, c],
      ...u.getStyles("item", { className: n, classNames: t, styles: i, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
Ys.displayName = "@mantine/core/AccordionItem";
Ys.classes = Jn;
const Iy = {}, Qs = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, children: a, ...c } = G(
    "AccordionPanel",
    Iy,
    r
  ), { value: l } = $u(), u = Gs();
  return /* @__PURE__ */ v.jsx(
    cu,
    {
      ref: e,
      ...u.getStyles("panel", { className: n, classNames: t, style: o, styles: i }),
      ...c,
      in: u.isItemActive(l),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(l),
      "aria-labelledby": u.getControlId(l),
      children: /* @__PURE__ */ v.jsx("div", { ...u.getStyles("content", { classNames: t, styles: i }), children: a })
    }
  );
});
Qs.displayName = "@mantine/core/AccordionPanel";
Qs.classes = Jn;
const Ay = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ v.jsx(Vs, {})
}, Ry = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : R(t),
    "--accordion-radius": n === void 0 ? void 0 : Tt(n)
  }
});
function Ne(r) {
  const e = G("Accordion", Ay, r), {
    classNames: t,
    className: n,
    style: o,
    styles: i,
    unstyled: s,
    vars: a,
    children: c,
    multiple: l,
    value: u,
    defaultValue: h,
    onChange: d,
    id: f,
    loop: p,
    transitionDuration: g,
    disableChevronRotation: m,
    chevronPosition: b,
    chevronSize: y,
    order: C,
    chevron: w,
    variant: E,
    radius: T,
    ...A
  } = e, _ = cr(f), [L, F] = Ar({
    value: u,
    defaultValue: h,
    finalValue: l ? [] : null,
    onChange: d
  }), Q = ($) => Array.isArray(L) ? L.includes($) : $ === L, Z = ($) => {
    const oe = Array.isArray(L) ? L.includes($) ? L.filter((U) => U !== $) : [...L, $] : $ === L ? null : $;
    F(oe);
  }, se = ge({
    name: "Accordion",
    classes: Jn,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: Ry
  });
  return /* @__PURE__ */ v.jsx(
    Ey,
    {
      value: {
        isItemActive: Q,
        onChange: Z,
        getControlId: dc(
          `${_}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: dc(
          `${_}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: m,
        chevronPosition: b,
        order: C,
        chevron: w,
        loop: p,
        getStyles: se,
        variant: E,
        unstyled: s
      },
      children: /* @__PURE__ */ v.jsx(Y, { ...se("root"), id: _, ...A, variant: E, "data-accordion": !0, children: c })
    }
  );
}
const ky = (r) => r;
Ne.extend = ky;
Ne.classes = Jn;
Ne.displayName = "@mantine/core/Accordion";
Ne.Item = Ys;
Ne.Panel = Qs;
Ne.Control = Ws;
Ne.Chevron = Vs;
var Ku = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const Ny = {}, Py = (r, { radius: e, color: t, variant: n, autoContrast: o }) => {
  const i = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    variant: n || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : Tt(e),
      "--alert-bg": t || n ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": t || n ? i.border : void 0
    }
  };
}, Js = ce((r, e) => {
  const t = G("Alert", Ny, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    radius: l,
    color: u,
    title: h,
    children: d,
    id: f,
    icon: p,
    withCloseButton: g,
    onClose: m,
    closeButtonLabel: b,
    variant: y,
    autoContrast: C,
    ...w
  } = t, E = ge({
    name: "Alert",
    classes: Ku,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Py
  }), T = cr(f), A = h && `${T}-title` || void 0, _ = `${T}-body`;
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      id: T,
      ...E("root", { variant: y }),
      variant: y,
      ref: e,
      ...w,
      role: "alert",
      "aria-describedby": _,
      "aria-labelledby": A,
      children: /* @__PURE__ */ v.jsxs("div", { ...E("wrapper"), children: [
        p && /* @__PURE__ */ v.jsx("div", { ...E("icon"), children: p }),
        /* @__PURE__ */ v.jsxs("div", { ...E("body"), children: [
          h && /* @__PURE__ */ v.jsx("div", { ...E("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ v.jsx("span", { id: A, ...E("label"), children: h }) }),
          d && /* @__PURE__ */ v.jsx("div", { id: _, ...E("message"), "data-variant": y, children: d })
        ] }),
        g && /* @__PURE__ */ v.jsx(
          un,
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
Js.classes = Ku;
Js.displayName = "@mantine/core/Alert";
var qu = { root: "m_b6d8b162" };
function Oy(r) {
  if (r === "start")
    return "start";
  if (r === "end" || r)
    return "end";
}
const xy = {
  inherit: !1
}, My = (r, { variant: e, lineClamp: t, gradient: n, size: o, color: i }) => ({
  root: {
    "--text-fz": ot(o),
    "--text-lh": Pp(o),
    "--text-gradient": e === "gradient" ? Ji(n, r) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": i ? nr(i, r) : void 0
  }
}), xo = Gt((r, e) => {
  const t = G("Text", xy, r), {
    lineClamp: n,
    truncate: o,
    inline: i,
    inherit: s,
    gradient: a,
    span: c,
    __staticSelector: l,
    vars: u,
    className: h,
    style: d,
    classNames: f,
    styles: p,
    unstyled: g,
    variant: m,
    mod: b,
    size: y,
    ...C
  } = t, w = ge({
    name: ["Text", l],
    props: t,
    classes: qu,
    className: h,
    style: d,
    classNames: f,
    styles: p,
    unstyled: g,
    vars: u,
    varsResolver: My
  });
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      ...w("root", { focusable: !0 }),
      ref: e,
      component: c ? "span" : "p",
      variant: m,
      mod: [
        {
          "data-truncate": Oy(o),
          "data-line-clamp": typeof n == "number",
          "data-inline": i,
          "data-inherit": s
        },
        b
      ],
      size: y,
      ...C
    }
  );
});
xo.classes = qu;
xo.displayName = "@mantine/core/Text";
function zu(r) {
  return typeof r == "string" ? { value: r, label: r } : "value" in r && !("label" in r) ? { value: r.value, label: r.value, disabled: r.disabled } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => zu(e))
  } : r;
}
function Gu(r) {
  return r ? r.map((e) => zu(e)) : [];
}
function Xs(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...Xs(t.items) } : (e[t.value] = t, e), {});
}
var Je = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Ly = {
  error: null
}, Dy = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Re(e, "combobox-chevron-size")
  }
}), Zs = ce((r, e) => {
  const t = G("ComboboxChevron", Ly, r), { size: n, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, mod: h, ...d } = t, f = ge({
    name: "ComboboxChevron",
    classes: Je,
    props: t,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: Dy,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ v.jsx(
    Y,
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
      children: /* @__PURE__ */ v.jsx(
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
Zs.classes = Je;
Zs.displayName = "@mantine/core/ComboboxChevron";
const [Uy, gt] = an(
  "Combobox component was not found in tree"
), Vu = Ce(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, i) => /* @__PURE__ */ v.jsx(
    un,
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
Vu.displayName = "@mantine/core/ComboboxClearButton";
const Hy = {}, ea = ce((r, e) => {
  const { classNames: t, styles: n, className: o, style: i, hidden: s, ...a } = G(
    "ComboboxDropdown",
    Hy,
    r
  ), c = gt();
  return /* @__PURE__ */ v.jsx(
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
ea.classes = Je;
ea.displayName = "@mantine/core/ComboboxDropdown";
const Fy = {
  refProp: "ref"
}, Wu = ce((r, e) => {
  const { children: t, refProp: n } = G("ComboboxDropdownTarget", Fy, r);
  if (gt(), !zn(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ v.jsx(lr.Target, { ref: e, refProp: n, children: t });
});
Wu.displayName = "@mantine/core/ComboboxDropdownTarget";
const By = {}, ta = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, ...a } = G(
    "ComboboxEmpty",
    By,
    r
  ), c = gt();
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      ref: e,
      ...c.getStyles("empty", { className: n, classNames: t, styles: i, style: o }),
      ...a
    }
  );
});
ta.classes = Je;
ta.displayName = "@mantine/core/ComboboxEmpty";
function ra({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o,
  autoComplete: i
}) {
  const s = gt(), [a, c] = X(null), l = (h) => {
    if (r == null || r(h), !s.readOnly && e) {
      if (h.nativeEvent.isComposing)
        return;
      if (h.nativeEvent.code === "ArrowDown" && (h.preventDefault(), s.store.dropdownOpened ? c(s.store.selectNextOption()) : (s.store.openDropdown("keyboard"), c(s.store.selectActiveOption()))), h.nativeEvent.code === "ArrowUp" && (h.preventDefault(), s.store.dropdownOpened ? c(s.store.selectPreviousOption()) : (s.store.openDropdown("keyboard"), c(s.store.selectActiveOption()))), h.nativeEvent.code === "Enter" || h.nativeEvent.code === "NumpadEnter") {
        if (h.nativeEvent.keyCode === 229)
          return;
        const d = s.store.getSelectedOptionIndex();
        s.store.dropdownOpened && d !== -1 ? (h.preventDefault(), s.store.clickSelectedOption()) : o === "button" && (h.preventDefault(), s.store.openDropdown("keyboard"));
      }
      h.nativeEvent.code === "Escape" && s.store.closeDropdown("keyboard"), h.nativeEvent.code === "Space" && o === "button" && (h.preventDefault(), s.store.toggleDropdown("keyboard"));
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
const jy = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Yu = ce((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    autoComplete: c,
    ...l
  } = G("ComboboxEventsTarget", jy, r);
  if (!zn(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = gt(), h = ra({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  });
  return $o(t, {
    ...h,
    ...l,
    [n]: ht(e, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
Yu.displayName = "@mantine/core/ComboboxEventsTarget";
const $y = {}, na = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, ...a } = G(
    "ComboboxFooter",
    $y,
    r
  ), c = gt();
  return /* @__PURE__ */ v.jsx(
    Y,
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
na.classes = Je;
na.displayName = "@mantine/core/ComboboxFooter";
const Ky = {}, oa = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, children: a, label: c, ...l } = G(
    "ComboboxGroup",
    Ky,
    r
  ), u = gt();
  return /* @__PURE__ */ v.jsxs(
    Y,
    {
      ref: e,
      ...u.getStyles("group", { className: n, classNames: t, style: o, styles: i }),
      ...l,
      children: [
        c && /* @__PURE__ */ v.jsx("div", { ...u.getStyles("groupLabel", { classNames: t, styles: i }), children: c }),
        a
      ]
    }
  );
});
oa.classes = Je;
oa.displayName = "@mantine/core/ComboboxGroup";
const qy = {}, ia = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, ...a } = G(
    "ComboboxHeader",
    qy,
    r
  ), c = gt();
  return /* @__PURE__ */ v.jsx(
    Y,
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
ia.classes = Je;
ia.displayName = "@mantine/core/ComboboxHeader";
function Qu({
  value: r,
  valuesDivider: e = ",",
  ...t
}) {
  return /* @__PURE__ */ v.jsx(
    "input",
    {
      type: "hidden",
      value: Array.isArray(r) ? r.join(e) : r || "",
      ...t
    }
  );
}
Qu.displayName = "@mantine/core/ComboboxHiddenInput";
const zy = {}, sa = ce((r, e) => {
  const t = G("ComboboxOption", zy, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    vars: a,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: h,
    onMouseOver: d,
    disabled: f,
    selected: p,
    mod: g,
    ...m
  } = t, b = gt(), y = hl(), C = l || y;
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      ...b.getStyles("option", { className: o, classNames: n, styles: s, style: i }),
      ...m,
      ref: e,
      id: C,
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
        w.preventDefault(), h == null || h(w);
      },
      onMouseOver: (w) => {
        b.resetSelectionOnOptionHover && b.store.resetSelectedOption(), d == null || d(w);
      }
    }
  );
});
sa.classes = Je;
sa.displayName = "@mantine/core/ComboboxOption";
const Gy = {}, aa = ce((r, e) => {
  const t = G("ComboboxOptions", Gy, r), { classNames: n, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = t, h = gt(), d = cr(a);
  return V(() => {
    h.store.setListId(d);
  }, [d]), /* @__PURE__ */ v.jsx(
    Y,
    {
      ref: e,
      ...h.getStyles("options", { className: o, style: i, classNames: n, styles: s }),
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
aa.classes = Je;
aa.displayName = "@mantine/core/ComboboxOptions";
const Vy = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ca = ce((r, e) => {
  const t = G("ComboboxSearch", Vy, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...h
  } = t, d = gt(), f = d.getStyles("search"), p = ra({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c,
    autoComplete: "off"
  });
  return /* @__PURE__ */ v.jsx(
    Be,
    {
      ref: ht(e, d.store.searchRef),
      classNames: [{ input: f.className }, n],
      styles: [{ input: f.style }, o],
      size: u || d.size,
      ...p,
      ...h,
      __staticSelector: "Combobox"
    }
  );
});
ca.classes = Je;
ca.displayName = "@mantine/core/ComboboxSearch";
const Wy = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Ju = ce((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    autoComplete: c,
    ...l
  } = G("ComboboxTarget", Wy, r);
  if (!zn(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = gt(), h = ra({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  }), d = $o(t, {
    ...h,
    ...l
  });
  return /* @__PURE__ */ v.jsx(lr.Target, { ref: ht(e, u.store.targetRef), children: d });
});
Ju.displayName = "@mantine/core/ComboboxTarget";
function Yy(r, e, t) {
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
function Qy(r, e, t) {
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
function Jy(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function si({
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
  }), l = ue(null), u = ue(-1), h = ue(null), d = ue(null), f = ue(-1), p = ue(-1), g = ue(-1), m = ye(
    (U = "unknown") => {
      a || (c(!0), o == null || o(U));
    },
    [c, o, a]
  ), b = ye(
    (U = "unknown") => {
      a && (c(!1), n == null || n(U));
    },
    [c, n, a]
  ), y = ye(
    (U = "unknown") => {
      a ? b(U) : m(U);
    },
    [b, m, a]
  ), C = ye(() => {
    const U = document.querySelector(`#${l.current} [data-combobox-selected]`);
    U == null || U.removeAttribute("data-combobox-selected"), U == null || U.removeAttribute("aria-selected");
  }, []), w = ye(
    (U) => {
      const x = document.getElementById(l.current), D = x == null ? void 0 : x.querySelectorAll("[data-combobox-option]");
      if (!D)
        return null;
      const q = U >= D.length ? 0 : U < 0 ? D.length - 1 : U;
      return u.current = q, D != null && D[q] && !D[q].hasAttribute("data-combobox-disabled") ? (C(), D[q].setAttribute("data-combobox-selected", "true"), D[q].setAttribute("aria-selected", "true"), D[q].scrollIntoView({ block: "nearest", behavior: s }), D[q].id) : null;
    },
    [s, C]
  ), E = ye(() => {
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
  }, [w]), T = ye(
    () => w(
      Qy(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), A = ye(
    () => w(
      Yy(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), _ = ye(
    () => w(
      Jy(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
  ), L = ye(
    (U = "selected", x) => {
      g.current = window.setTimeout(() => {
        var J;
        const D = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), q = Array.from(D).findIndex(
          (me) => me.hasAttribute(`data-combobox-${U}`)
        );
        u.current = q, x != null && x.scrollIntoView && ((J = D[q]) == null || J.scrollIntoView({ block: "nearest", behavior: s }));
      }, 0);
    },
    []
  ), F = ye(() => {
    u.current = -1, C();
  }, [C]), Q = ye(() => {
    const U = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), x = U == null ? void 0 : U[u.current];
    x == null || x.click();
  }, []), Z = ye((U) => {
    l.current = U;
  }, []), se = ye(() => {
    f.current = window.setTimeout(() => h.current.focus(), 0);
  }, []), $ = ye(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), oe = ye(() => u.current, []);
  return V(
    () => () => {
      window.clearTimeout(f.current), window.clearTimeout(p.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: m,
    closeDropdown: b,
    toggleDropdown: y,
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
    clickSelectedOption: Q,
    searchRef: h,
    focusSearchInput: se,
    targetRef: d,
    focusTarget: $
  };
}
const Xy = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, Zy = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": ot(e),
    "--combobox-option-padding": Re(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : R(t),
    "--combobox-option-fz": ot(e),
    "--combobox-option-padding": Re(e, "combobox-option-padding")
  }
});
function le(r) {
  const e = G("Combobox", Xy, r), {
    classNames: t,
    styles: n,
    unstyled: o,
    children: i,
    store: s,
    vars: a,
    onOptionSubmit: c,
    onClose: l,
    size: u,
    dropdownPadding: h,
    resetSelectionOnOptionHover: d,
    __staticSelector: f,
    readOnly: p,
    ...g
  } = e, m = si(), b = s || m, y = ge({
    name: f || "Combobox",
    classes: Je,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: a,
    varsResolver: Zy
  }), C = () => {
    l == null || l(), b.closeDropdown();
  };
  return /* @__PURE__ */ v.jsx(
    Uy,
    {
      value: {
        getStyles: y,
        store: b,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: d,
        readOnly: p
      },
      children: /* @__PURE__ */ v.jsx(
        lr,
        {
          opened: b.dropdownOpened,
          ...g,
          onClose: C,
          withRoles: !1,
          unstyled: o,
          children: i
        }
      )
    }
  );
}
const eC = (r) => r;
le.extend = eC;
le.classes = Je;
le.displayName = "@mantine/core/Combobox";
le.Target = Ju;
le.Dropdown = ea;
le.Options = aa;
le.Option = sa;
le.Search = ca;
le.Empty = ta;
le.Chevron = Zs;
le.Footer = na;
le.Header = ia;
le.EventsTarget = Yu;
le.DropdownTarget = Wu;
le.Group = oa;
le.ClearButton = Vu;
le.HiddenInput = Qu;
var Xu = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const tC = Xu, Zu = Ce(
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
    error: h,
    size: d,
    labelPosition: f = "left",
    bodyElement: p = "div",
    labelElement: g = "label",
    variant: m,
    style: b,
    vars: y,
    mod: C,
    ...w
  }, E) => {
    const T = ge({
      name: r,
      props: e,
      className: t,
      style: b,
      classes: Xu,
      classNames: n,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ v.jsx(
      Y,
      {
        ...T("root"),
        ref: E,
        __vars: {
          "--label-fz": ot(d),
          "--label-lh": Re(d, "label-lh")
        },
        mod: [{ "label-position": f }, C],
        variant: m,
        size: d,
        ...w,
        children: /* @__PURE__ */ v.jsxs(
          Y,
          {
            component: p,
            htmlFor: p === "label" ? l : void 0,
            ...T("body"),
            children: [
              s,
              /* @__PURE__ */ v.jsxs("div", { ...T("labelWrapper"), "data-disabled": u || void 0, children: [
                a && /* @__PURE__ */ v.jsx(
                  Y,
                  {
                    component: g,
                    htmlFor: g === "label" ? l : void 0,
                    ...T("label"),
                    "data-disabled": u || void 0,
                    children: a
                  }
                ),
                c && /* @__PURE__ */ v.jsx(Be.Description, { size: d, __inheritStyles: !1, ...T("description"), children: c }),
                h && typeof h != "boolean" && /* @__PURE__ */ v.jsx(Be.Error, { size: d, __inheritStyles: !1, ...T("error"), children: h })
              ] })
            ]
          }
        )
      }
    );
  }
);
Zu.displayName = "@mantine/core/InlineInput";
const ed = Nr(null), rC = ed.Provider, td = () => ar(ed), [nC, oC] = Bl();
var rd = { card: "m_26775b0a" };
const iC = {
  withBorder: !0
}, sC = (r, { radius: e }) => ({
  card: {
    "--card-radius": Tt(e)
  }
}), la = ce((r, e) => {
  const t = G("CheckboxCard", iC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    checked: l,
    mod: u,
    withBorder: h,
    value: d,
    onClick: f,
    ...p
  } = t, g = ge({
    name: "CheckboxCard",
    classes: rd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: sC,
    rootSelector: "card"
  }), m = td(), b = typeof l == "boolean" ? l : (m == null ? void 0 : m.value.includes(d || "")) || !1;
  return /* @__PURE__ */ v.jsx(nC, { value: { checked: b }, children: /* @__PURE__ */ v.jsx(
    xr,
    {
      ref: e,
      mod: [{ "with-border": h, checked: b }, u],
      ...g("card"),
      ...p,
      role: "checkbox",
      "aria-checked": b,
      onClick: (y) => {
        f == null || f(y), m == null || m.onChange(d || "");
      }
    }
  ) });
});
la.displayName = "@mantine/core/CheckboxCard";
la.classes = rd;
function aC({ children: r, role: e }) {
  const t = Qn();
  return t ? /* @__PURE__ */ v.jsx("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy, children: r }) : /* @__PURE__ */ v.jsx(v.Fragment, { children: r });
}
const cC = {}, ua = ce((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: i, wrapperProps: s, children: a, readOnly: c, ...l } = G("CheckboxGroup", cC, r), [u, h] = Ar({
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
  return /* @__PURE__ */ v.jsx(rC, { value: { value: u, onChange: d, size: i }, children: /* @__PURE__ */ v.jsx(
    Be.Wrapper,
    {
      size: i,
      ref: e,
      ...s,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ v.jsx(aC, { role: "group", children: a })
    }
  ) });
});
ua.classes = Be.Wrapper.classes;
ua.displayName = "@mantine/core/CheckboxGroup";
function da({ size: r, style: e, ...t }) {
  const n = r !== void 0 ? { width: R(r), height: R(r), ...e } : e;
  return /* @__PURE__ */ v.jsx(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      "aria-hidden": !0,
      ...t,
      children: /* @__PURE__ */ v.jsx(
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
function nd({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ v.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e,
      children: /* @__PURE__ */ v.jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    }
  ) : /* @__PURE__ */ v.jsx(da, { ...e });
}
var od = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const lC = {
  icon: nd
}, uC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: s }) => {
  const a = Or({ color: t || r.primaryColor, theme: r }), c = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    indicator: {
      "--checkbox-size": Re(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Tt(e),
      "--checkbox-color": i === "outline" ? c : nr(t, r),
      "--checkbox-icon-color": o ? nr(o, r) : ru(s, r) ? Is({ color: t, theme: r, autoContrast: s }) : void 0
    }
  };
}, ha = ce((r, e) => {
  const t = G("CheckboxIndicator", lC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    icon: l,
    indeterminate: u,
    radius: h,
    color: d,
    iconColor: f,
    autoContrast: p,
    checked: g,
    mod: m,
    variant: b,
    disabled: y,
    ...C
  } = t, w = l, E = ge({
    name: "CheckboxIndicator",
    classes: od,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: uC,
    rootSelector: "indicator"
  }), T = oC(), A = typeof g == "boolean" || typeof u == "boolean" ? g || u : (T == null ? void 0 : T.checked) || !1;
  return /* @__PURE__ */ v.jsx(
    Y,
    {
      ref: e,
      ...E("indicator", { variant: b }),
      variant: b,
      mod: [{ checked: A, disabled: y }, m],
      ...C,
      children: /* @__PURE__ */ v.jsx(w, { indeterminate: u, ...E("icon") })
    }
  );
});
ha.displayName = "@mantine/core/CheckboxIndicator";
ha.classes = od;
var id = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const dC = {
  labelPosition: "right",
  icon: nd
}, hC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: s }) => {
  const a = Or({ color: t || r.primaryColor, theme: r }), c = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    root: {
      "--checkbox-size": Re(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Tt(e),
      "--checkbox-color": i === "outline" ? c : nr(t, r),
      "--checkbox-icon-color": o ? nr(o, r) : ru(s, r) ? Is({ color: t, theme: r, autoContrast: s }) : void 0
    }
  };
}, Mr = ce((r, e) => {
  const t = G("Checkbox", dC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    color: l,
    label: u,
    id: h,
    size: d,
    radius: f,
    wrapperProps: p,
    children: g,
    checked: m,
    labelPosition: b,
    description: y,
    error: C,
    disabled: w,
    variant: E,
    indeterminate: T,
    icon: A,
    rootRef: _,
    iconColor: L,
    onChange: F,
    autoContrast: Q,
    mod: Z,
    ...se
  } = t, $ = td(), oe = d || ($ == null ? void 0 : $.size), U = A, x = ge({
    name: "Checkbox",
    props: t,
    classes: id,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: hC
  }), { styleProps: D, rest: q } = Yo(se), J = cr(h), me = $ ? {
    checked: $.value.includes(q.value),
    onChange: (fe) => {
      $.onChange(fe), F == null || F(fe);
    }
  } : {};
  return /* @__PURE__ */ v.jsx(
    Zu,
    {
      ...x("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: J,
      size: oe,
      labelPosition: b,
      label: u,
      description: y,
      error: C,
      disabled: w,
      classNames: n,
      styles: s,
      unstyled: a,
      "data-checked": me.checked || m || void 0,
      variant: E,
      ref: _,
      mod: Z,
      ...D,
      ...p,
      children: /* @__PURE__ */ v.jsxs(Y, { ...x("inner"), mod: { "data-label-position": b }, children: [
        /* @__PURE__ */ v.jsx(
          Y,
          {
            component: "input",
            id: J,
            ref: e,
            checked: m,
            disabled: w,
            mod: { error: !!C, indeterminate: T },
            ...x("input", { focusable: !0, variant: E }),
            onChange: F,
            ...q,
            ...me,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ v.jsx(U, { indeterminate: T, ...x("icon") })
      ] })
    }
  );
});
Mr.classes = { ...id, ...tC };
Mr.displayName = "@mantine/core/Checkbox";
Mr.Group = ua;
Mr.Indicator = ha;
Mr.Card = la;
function Hn(r) {
  return "group" in r;
}
function sd({
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
      items: sd({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), Hn(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function fC(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function ad(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Hn(t))
        ad(t.items, e);
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
function pC(r, e) {
  return Array.isArray(r) ? r.includes(e) : r === e;
}
function cd({
  data: r,
  withCheckIcon: e,
  value: t,
  checkIconPosition: n,
  unstyled: o,
  renderOption: i
}) {
  if (!Hn(r)) {
    const a = pC(t, r.value), c = e && a && /* @__PURE__ */ v.jsx(da, { className: Je.optionsDropdownCheckIcon }), l = /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      n === "left" && c,
      /* @__PURE__ */ v.jsx("span", { children: r.label }),
      n === "right" && c
    ] });
    return /* @__PURE__ */ v.jsx(
      le.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: qt({ [Je.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": a || void 0,
        "aria-selected": a,
        active: a,
        children: typeof i == "function" ? i({ option: r, checked: a }) : l
      }
    );
  }
  const s = r.items.map((a) => /* @__PURE__ */ v.jsx(
    cd,
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
  return /* @__PURE__ */ v.jsx(le.Group, { label: r.group, children: s });
}
function ld({
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
  checkIconPosition: h,
  nothingFoundMessage: d,
  unstyled: f,
  labelId: p,
  renderOption: g,
  scrollAreaProps: m,
  "aria-label": b
}) {
  ad(r);
  const C = typeof o == "string" ? (n || sd)({
    options: r,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : r, w = fC(C), E = C.map((T) => /* @__PURE__ */ v.jsx(
    cd,
    {
      data: T,
      withCheckIcon: l,
      value: u,
      checkIconPosition: h,
      unstyled: f,
      renderOption: g
    },
    Hn(T) ? T.group : T.value
  ));
  return /* @__PURE__ */ v.jsx(le.Dropdown, { hidden: e || t && w, children: /* @__PURE__ */ v.jsxs(le.Options, { labelledBy: p, "aria-label": b, children: [
    a ? /* @__PURE__ */ v.jsx(
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
    w && d && /* @__PURE__ */ v.jsx(le.Empty, { children: d })
  ] }) });
}
const gC = {}, fa = ce((r, e) => {
  const t = G("Autocomplete", gC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: s,
    dropdownOpened: a,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: h,
    onBlur: d,
    onClick: f,
    onChange: p,
    data: g,
    value: m,
    defaultValue: b,
    selectFirstOptionOnChange: y,
    onOptionSubmit: C,
    comboboxProps: w,
    readOnly: E,
    disabled: T,
    filter: A,
    limit: _,
    withScrollArea: L,
    maxDropdownHeight: F,
    size: Q,
    id: Z,
    renderOption: se,
    autoComplete: $,
    scrollAreaProps: oe,
    ...U
  } = t, x = cr(Z), D = Gu(g), q = Xs(D), [J, me] = Ar({
    value: m,
    defaultValue: b,
    finalValue: "",
    onChange: p
  }), fe = si({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), fe.resetSelectedOption();
    }
  }), { resolvedClassNames: qe, resolvedStyles: mt } = tu({
    props: t,
    styles: o,
    classNames: n
  });
  return V(() => {
    y && fe.selectFirstOption();
  }, [y, J]), /* @__PURE__ */ v.jsxs(
    le,
    {
      store: fe,
      __staticSelector: "Autocomplete",
      classNames: qe,
      styles: mt,
      unstyled: i,
      readOnly: E,
      onOptionSubmit: (ke) => {
        C == null || C(ke), me(q[ke].label), fe.closeDropdown();
      },
      size: Q,
      ...w,
      children: [
        /* @__PURE__ */ v.jsx(le.Target, { autoComplete: $, children: /* @__PURE__ */ v.jsx(
          Wt,
          {
            ref: e,
            ...U,
            size: Q,
            __staticSelector: "Autocomplete",
            disabled: T,
            readOnly: E,
            value: J,
            onChange: (ke) => {
              me(ke.currentTarget.value), fe.openDropdown(), y && fe.selectFirstOption();
            },
            onFocus: (ke) => {
              fe.openDropdown(), h == null || h(ke);
            },
            onBlur: (ke) => {
              fe.closeDropdown(), d == null || d(ke);
            },
            onClick: (ke) => {
              fe.openDropdown(), f == null || f(ke);
            },
            classNames: qe,
            styles: mt,
            unstyled: i,
            id: x
          }
        ) }),
        /* @__PURE__ */ v.jsx(
          ld,
          {
            data: D,
            hidden: E || T,
            filter: A,
            search: J,
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
fa.classes = { ...Wt.classes, ...le.classes };
fa.displayName = "@mantine/core/Autocomplete";
var ai = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const Kc = {
  orientation: "horizontal"
}, mC = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": R(e) }
}), pa = ce((r, e) => {
  const t = G("ButtonGroup", Kc, r), {
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: h,
    mod: d,
    ...f
  } = G("ButtonGroup", Kc, r), p = ge({
    name: "ButtonGroup",
    props: t,
    classes: ai,
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: mC,
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.jsx(
    Y,
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
pa.classes = ai;
pa.displayName = "@mantine/core/ButtonGroup";
const vC = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${R(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, yC = {}, CC = (r, { radius: e, color: t, gradient: n, variant: o, size: i, justify: s, autoContrast: a }) => {
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
      "--button-fz": i != null && i.includes("compact") ? ot(i.replace("compact-", "")) : ot(i),
      "--button-radius": e === void 0 ? void 0 : Tt(e),
      "--button-bg": t || o ? c.background : void 0,
      "--button-hover": t || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": t || o ? c.border : void 0,
      "--button-hover-color": t || o ? c.hoverColor : void 0
    }
  };
}, Xn = Gt((r, e) => {
  const t = G("Button", yC, r), {
    style: n,
    vars: o,
    className: i,
    color: s,
    disabled: a,
    children: c,
    leftSection: l,
    rightSection: u,
    fullWidth: h,
    variant: d,
    radius: f,
    loading: p,
    loaderProps: g,
    gradient: m,
    classNames: b,
    styles: y,
    unstyled: C,
    "data-disabled": w,
    autoContrast: E,
    mod: T,
    ...A
  } = t, _ = ge({
    name: "Button",
    props: t,
    classes: ai,
    className: i,
    style: n,
    classNames: b,
    styles: y,
    unstyled: C,
    vars: o,
    varsResolver: CC
  }), L = !!l, F = !!u;
  return /* @__PURE__ */ v.jsxs(
    xr,
    {
      ref: e,
      ..._("root", { active: !a && !p && !w }),
      unstyled: C,
      variant: d,
      disabled: a || p,
      mod: [
        {
          disabled: a || w,
          loading: p,
          block: h,
          "with-left-section": L,
          "with-right-section": F
        },
        T
      ],
      ...A,
      children: [
        /* @__PURE__ */ v.jsx(ei, { mounted: !!p, transition: vC, duration: 150, children: (Q) => /* @__PURE__ */ v.jsx(Y, { component: "span", ..._("loader", { style: Q }), "aria-hidden": !0, children: /* @__PURE__ */ v.jsx(
          Yn,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ v.jsxs("span", { ..._("inner"), children: [
          l && /* @__PURE__ */ v.jsx(Y, { component: "span", ..._("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ v.jsx(Y, { component: "span", mod: { loading: p }, ..._("label"), children: c }),
          u && /* @__PURE__ */ v.jsx(Y, { component: "span", ..._("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
Xn.classes = ai;
Xn.displayName = "@mantine/core/Button";
Xn.Group = pa;
var ud = { root: "m_4451eb3a" };
const bC = {}, ga = Gt((r, e) => {
  const t = G("Center", bC, r), { classNames: n, className: o, style: i, styles: s, unstyled: a, vars: c, inline: l, mod: u, ...h } = t, d = ge({
    name: "Center",
    props: t,
    classes: ud,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c
  });
  return /* @__PURE__ */ v.jsx(Y, { ref: e, mod: [{ inline: l }, u], ...d("root"), ...h });
});
ga.classes = ud;
ga.displayName = "@mantine/core/Center";
var dd = { root: "m_7485cace" };
const wC = {}, EC = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Re(e, "container-size")
  }
}), ma = ce((r, e) => {
  const t = G("Container", wC, r), { classNames: n, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, mod: u, ...h } = t, d = ge({
    name: "Container",
    classes: dd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: EC
  });
  return /* @__PURE__ */ v.jsx(Y, { ref: e, mod: [{ fluid: l }, u], ...d("root"), ...h });
});
ma.classes = dd;
ma.displayName = "@mantine/core/Container";
const SC = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, va = ce((r, e) => {
  const t = G("Select", SC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: s,
    dropdownOpened: a,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: h,
    onBlur: d,
    onClick: f,
    onChange: p,
    data: g,
    value: m,
    defaultValue: b,
    selectFirstOptionOnChange: y,
    onOptionSubmit: C,
    comboboxProps: w,
    readOnly: E,
    disabled: T,
    filter: A,
    limit: _,
    withScrollArea: L,
    maxDropdownHeight: F,
    size: Q,
    searchable: Z,
    rightSection: se,
    checkIconPosition: $,
    withCheckIcon: oe,
    nothingFoundMessage: U,
    name: x,
    form: D,
    searchValue: q,
    defaultSearchValue: J,
    onSearchChange: me,
    allowDeselect: fe,
    error: qe,
    rightSectionPointerEvents: mt,
    id: ke,
    clearable: dr,
    clearButtonProps: Yt,
    hiddenInputProps: hr,
    renderOption: fr,
    onClear: pr,
    autoComplete: hn,
    scrollAreaProps: fn,
    ...xt
  } = t, Te = ho(() => Gu(g), [g]), Mt = ho(() => Xs(Te), [Te]), Lr = cr(ke), [je, gr, Dr] = Ar({
    value: m,
    defaultValue: b,
    finalValue: null,
    onChange: p
  }), $e = typeof je == "string" ? Mt[je] : void 0, Lt = Vp($e), [Ur, ct] = Ar({
    value: q,
    defaultValue: J,
    finalValue: $e ? $e.label : "",
    onChange: me
  }), vt = si({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: () => {
      u == null || u(), vt.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      l == null || l(), vt.resetSelectedOption();
    }
  }), { resolvedClassNames: Aa, resolvedStyles: Ra } = tu({
    props: t,
    styles: o,
    classNames: n
  });
  V(() => {
    y && vt.selectFirstOption();
  }, [y, je]), V(() => {
    m === null && ct(""), typeof m == "string" && $e && ((Lt == null ? void 0 : Lt.value) !== $e.value || (Lt == null ? void 0 : Lt.label) !== $e.label) && ct($e.label);
  }, [m, $e]);
  const ka = dr && !!je && !T && !E && /* @__PURE__ */ v.jsx(
    le.ClearButton,
    {
      size: Q,
      ...Yt,
      onClear: () => {
        gr(null, null), ct(""), pr == null || pr();
      }
    }
  );
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(
      le,
      {
        store: vt,
        __staticSelector: "Select",
        classNames: Aa,
        styles: Ra,
        unstyled: i,
        readOnly: E,
        onOptionSubmit: (lt) => {
          C == null || C(lt);
          const Dt = fe && Mt[lt].value === je ? null : Mt[lt], fi = Dt ? Dt.value : null;
          fi !== je && gr(fi, Dt), !Dr && ct(typeof fi == "string" && (Dt == null ? void 0 : Dt.label) || ""), vt.closeDropdown();
        },
        size: Q,
        ...w,
        children: [
          /* @__PURE__ */ v.jsx(le.Target, { targetType: Z ? "input" : "button", autoComplete: hn, children: /* @__PURE__ */ v.jsx(
            Wt,
            {
              id: Lr,
              ref: e,
              rightSection: se || ka || /* @__PURE__ */ v.jsx(le.Chevron, { size: Q, error: qe, unstyled: i }),
              rightSectionPointerEvents: mt || (ka ? "all" : "none"),
              ...xt,
              size: Q,
              __staticSelector: "Select",
              disabled: T,
              readOnly: E || !Z,
              value: Ur,
              onChange: (lt) => {
                ct(lt.currentTarget.value), vt.openDropdown(), y && vt.selectFirstOption();
              },
              onFocus: (lt) => {
                Z && vt.openDropdown(), h == null || h(lt);
              },
              onBlur: (lt) => {
                var Dt;
                Z && vt.closeDropdown(), ct(je != null && ((Dt = Mt[je]) == null ? void 0 : Dt.label) || ""), d == null || d(lt);
              },
              onClick: (lt) => {
                Z ? vt.openDropdown() : vt.toggleDropdown(), f == null || f(lt);
              },
              classNames: Aa,
              styles: Ra,
              unstyled: i,
              pointer: !Z,
              error: qe
            }
          ) }),
          /* @__PURE__ */ v.jsx(
            ld,
            {
              data: Te,
              hidden: E || T,
              filter: A,
              search: Ur,
              limit: _,
              hiddenWhenEmpty: !U,
              withScrollArea: L,
              maxDropdownHeight: F,
              filterOptions: Z && ($e == null ? void 0 : $e.label) !== Ur,
              value: je,
              checkIconPosition: $,
              withCheckIcon: oe,
              nothingFoundMessage: U,
              unstyled: i,
              labelId: xt.label ? `${Lr}-label` : void 0,
              "aria-label": xt.label ? void 0 : xt["aria-label"],
              renderOption: fr,
              scrollAreaProps: fn
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v.jsx(
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
va.classes = { ...Wt.classes, ...le.classes };
va.displayName = "@mantine/core/Select";
const TC = {}, hd = ce((r, e) => {
  const { w: t, h: n, miw: o, mih: i, ...s } = G("Space", TC, r);
  return /* @__PURE__ */ v.jsx(Y, { ref: e, ...s, w: t, miw: o ?? t, h: n, mih: i ?? n });
});
hd.displayName = "@mantine/core/Space";
var fd = { root: "m_6d731127" };
const _C = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, IC = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": ws(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), ya = ce((r, e) => {
  const t = G("Stack", _C, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    align: l,
    justify: u,
    gap: h,
    variant: d,
    ...f
  } = t, p = ge({
    name: "Stack",
    props: t,
    classes: fd,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: IC
  });
  return /* @__PURE__ */ v.jsx(Y, { ref: e, ...p("root"), variant: d, ...f });
});
ya.classes = fd;
ya.displayName = "@mantine/core/Stack";
const AC = {}, Tr = ce((r, e) => {
  const t = G("TextInput", AC, r);
  return /* @__PURE__ */ v.jsx(Wt, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Tr.classes = Wt.classes;
Tr.displayName = "@mantine/core/TextInput";
const RC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function kC(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return RC.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: R(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var pd = { root: "m_8a5d1357" };
const NC = {
  order: 1
}, PC = (r, { order: e, size: t, lineClamp: n, textWrap: o }) => {
  const i = kC(e, t);
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
  const t = G("Title", NC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    order: c,
    vars: l,
    size: u,
    variant: h,
    lineClamp: d,
    textWrap: f,
    mod: p,
    ...g
  } = t, m = ge({
    name: "Title",
    props: t,
    classes: pd,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: PC
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ v.jsx(
    Y,
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
Mo.classes = pd;
Mo.displayName = "@mantine/core/Title";
var gd = { exports: {} }, OC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", xC = OC, MC = xC;
function md() {
}
function vd() {
}
vd.resetWarningCache = md;
var LC = function() {
  function r(n, o, i, s, a, c) {
    if (c !== MC) {
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
    checkPropTypes: vd,
    resetWarningCache: md
  };
  return t.PropTypes = t, t;
};
gd.exports = LC();
var DC = gd.exports;
const mr = /* @__PURE__ */ Xd(DC);
var UC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, HC = Object.defineProperty, FC = Object.defineProperties, BC = Object.getOwnPropertyDescriptors, Lo = Object.getOwnPropertySymbols, yd = Object.prototype.hasOwnProperty, Cd = Object.prototype.propertyIsEnumerable, qc = (r, e, t) => e in r ? HC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, zc = (r, e) => {
  for (var t in e || (e = {}))
    yd.call(e, t) && qc(r, t, e[t]);
  if (Lo)
    for (var t of Lo(e))
      Cd.call(e, t) && qc(r, t, e[t]);
  return r;
}, jC = (r, e) => FC(r, BC(e)), $C = (r, e) => {
  var t = {};
  for (var n in r)
    yd.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Lo)
    for (var n of Lo(r))
      e.indexOf(n) < 0 && Cd.call(r, n) && (t[n] = r[n]);
  return t;
}, Ca = (r, e, t) => {
  const n = Ce(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, h = $C(s, ["color", "size", "stroke", "children"]);
      return Oi(
        "svg",
        zc(jC(zc({
          ref: i
        }, UC), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${r}`
        }), h),
        [...t.map(([d, f]) => Oi(d, f)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: mr.string,
    size: mr.oneOfType([mr.string, mr.number]),
    stroke: mr.oneOfType([mr.string, mr.number])
  }, n.displayName = `${e}`, n;
}, KC = Ca("arrow-down", "IconArrowDown", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M18 13l-6 6", key: "svg-1" }],
  ["path", { d: "M6 13l6 6", key: "svg-2" }]
]), qC = Ca("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), zC = Ca("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function GC({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ v.jsx(zC, { ...e }) : /* @__PURE__ */ v.jsx(qC, { ...e });
}
const VC = {
  components: {
    Checkbox: Mr.extend({
      defaultProps: {
        icon: GC,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, Gc = {
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
}, WC = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Gc.authorities.signUpSignIn.authority,
    knownAuthorities: [Gc.authorityDomain],
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
class YC {
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
      const u = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, h = this.mergeRequestParams(l, u), d = i && this.toQueryString(i), f = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], p = s || h.format;
      return this.customFetch(`${a || this.baseUrl || ""}${n}${d ? `?${d}` : ""}`, {
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
        const b = p ? await g[p]().then((y) => (m.ok ? m.data = y : m.error = y, m)).catch((y) => (m.error = y, m)) : m;
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
class QC extends YC {
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
class Fn extends QC {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const bd = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, JC = "production", Zn = Rh, Ze = Pn;
function XC(r) {
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
var ZC = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Vc = ZC, Ii = () => Math.random().toString(36).substring(7).split("").join("."), eb = {
  INIT: `@@redux/INIT${Ii()}`,
  REPLACE: `@@redux/REPLACE${Ii()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ii()}`
}, Do = eb;
function ba(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function wd(r, e, t) {
  if (typeof r != "function")
    throw new Error(Oe(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(Oe(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(Oe(1));
    return t(wd)(r, e);
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
  function h(m) {
    if (typeof m != "function")
      throw new Error(Oe(4));
    if (c)
      throw new Error(Oe(5));
    let b = !0;
    l();
    const y = a++;
    return s.set(y, m), function() {
      if (b) {
        if (c)
          throw new Error(Oe(6));
        b = !1, l(), s.delete(y), i = null;
      }
    };
  }
  function d(m) {
    if (!ba(m))
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
    return (i = s).forEach((y) => {
      y();
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
      subscribe(b) {
        if (typeof b != "object" || b === null)
          throw new Error(Oe(11));
        function y() {
          const w = b;
          w.next && w.next(u());
        }
        return y(), {
          unsubscribe: m(y)
        };
      },
      [Vc]() {
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
    [Vc]: p
  };
}
function tb(r) {
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
function rb(r) {
  const e = Object.keys(r), t = {};
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    tb(t);
  } catch (i) {
    o = i;
  }
  return function(s = {}, a) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < n.length; u++) {
      const h = n[u], d = t[h], f = s[h], p = d(f, a);
      if (typeof p > "u")
        throw a && a.type, new Error(Oe(14));
      l[h] = p, c = c || p !== f;
    }
    return c = c || n.length !== Object.keys(s).length, c ? l : s;
  };
}
function Uo(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function nb(...r) {
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
function ob(r) {
  return ba(r) && "type" in r && typeof r.type == "string";
}
var Ed = Symbol.for("immer-nothing"), Wc = Symbol.for("immer-draftable"), st = Symbol.for("immer-state");
function Ct(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var on = Object.getPrototypeOf;
function sr(r) {
  return !!r && !!r[st];
}
function Kt(r) {
  var e;
  return r ? Sd(r) || Array.isArray(r) || !!r[Wc] || !!((e = r.constructor) != null && e[Wc]) || li(r) || ui(r) : !1;
}
var ib = Object.prototype.constructor.toString();
function Sd(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = on(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === ib;
}
function Ho(r, e) {
  ci(r) === 0 ? Reflect.ownKeys(r).forEach((t) => {
    e(t, r[t], r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function ci(r) {
  const e = r[st];
  return e ? e.type_ : Array.isArray(r) ? 1 : li(r) ? 2 : ui(r) ? 3 : 0;
}
function ns(r, e) {
  return ci(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Td(r, e, t) {
  const n = ci(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function sb(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function li(r) {
  return r instanceof Map;
}
function ui(r) {
  return r instanceof Set;
}
function yr(r) {
  return r.copy_ || r.base_;
}
function os(r, e) {
  if (li(r))
    return new Map(r);
  if (ui(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  const t = Sd(r);
  if (e === !0 || e === "class_only" && !t) {
    const n = Object.getOwnPropertyDescriptors(r);
    delete n[st];
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
    return Object.create(on(r), n);
  } else {
    const n = on(r);
    if (n !== null && t)
      return { ...r };
    const o = Object.create(n);
    return Object.assign(o, r);
  }
}
function wa(r, e = !1) {
  return di(r) || sr(r) || !Kt(r) || (ci(r) > 1 && (r.set = r.add = r.clear = r.delete = ab), Object.freeze(r), e && Object.entries(r).forEach(([t, n]) => wa(n, !0))), r;
}
function ab() {
  Ct(2);
}
function di(r) {
  return Object.isFrozen(r);
}
var cb = {};
function kr(r) {
  const e = cb[r];
  return e || Ct(0, r), e;
}
var Bn;
function _d() {
  return Bn;
}
function lb(r, e) {
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
function Yc(r, e) {
  e && (kr("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function is(r) {
  ss(r), r.drafts_.forEach(ub), r.drafts_ = null;
}
function ss(r) {
  r === Bn && (Bn = r.parent_);
}
function Qc(r) {
  return Bn = lb(Bn, r);
}
function ub(r) {
  const e = r[st];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Jc(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[st].modified_ && (is(e), Ct(4)), Kt(r) && (r = Fo(e, r), e.parent_ || Bo(e, r)), e.patches_ && kr("Patches").generateReplacementPatches_(
    t[st].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Fo(e, t, []), is(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== Ed ? r : void 0;
}
function Fo(r, e, t) {
  if (di(e))
    return e;
  const n = e[st];
  if (!n)
    return Ho(
      e,
      (o, i) => Xc(r, n, e, o, i, t)
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
      (a, c) => Xc(r, n, o, a, c, t, s)
    ), Bo(r, o, !1), t && r.patches_ && kr("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function Xc(r, e, t, n, o, i, s) {
  if (sr(o)) {
    const a = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ns(e.assigned_, n) ? i.concat(n) : void 0, c = Fo(r, o, a);
    if (Td(t, n, c), sr(c))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (Kt(o) && !di(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Fo(r, o), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(t, n) && Bo(r, o);
  }
}
function Bo(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && wa(e, t);
}
function db(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : _d(),
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
  let o = n, i = Ea;
  t && (o = [n], i = jn);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return n.draft_ = a, n.revoke_ = s, a;
}
var Ea = {
  get(r, e) {
    if (e === st)
      return r;
    const t = yr(r);
    if (!ns(t, e))
      return hb(r, t, e);
    const n = t[e];
    return r.finalized_ || !Kt(n) ? n : n === Ai(r.base_, e) ? (Ri(r), r.copy_[e] = cs(n, r)) : n;
  },
  has(r, e) {
    return e in yr(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(yr(r));
  },
  set(r, e, t) {
    const n = Id(yr(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = Ai(yr(r), e), i = o == null ? void 0 : o[st];
      if (i && i.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (sb(t, o) && (t !== void 0 || ns(r.base_, e)))
        return !0;
      Ri(r), as(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return Ai(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Ri(r), as(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = yr(r), n = Reflect.getOwnPropertyDescriptor(t, e);
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
    return on(r.base_);
  },
  setPrototypeOf() {
    Ct(12);
  }
}, jn = {};
Ho(Ea, (r, e) => {
  jn[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
jn.deleteProperty = function(r, e) {
  return jn.set.call(this, r, e, void 0);
};
jn.set = function(r, e, t) {
  return Ea.set.call(this, r[0], e, t, r[0]);
};
function Ai(r, e) {
  const t = r[st];
  return (t ? yr(t) : r)[e];
}
function hb(r, e, t) {
  var o;
  const n = Id(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Id(r, e) {
  if (!(e in r))
    return;
  let t = on(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = on(t);
  }
}
function as(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && as(r.parent_));
}
function Ri(r) {
  r.copy_ || (r.copy_ = os(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var fb = class {
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
      typeof t != "function" && Ct(6), n !== void 0 && typeof n != "function" && Ct(7);
      let o;
      if (Kt(e)) {
        const i = Qc(this), s = cs(e, void 0);
        let a = !0;
        try {
          o = t(s), a = !1;
        } finally {
          a ? is(i) : ss(i);
        }
        return Yc(i, n), Jc(o, i);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Ed && (o = void 0), this.autoFreeze_ && wa(o, !0), n) {
          const i = [], s = [];
          kr("Patches").generateReplacementPatches_(e, o, i, s), n(i, s);
        }
        return o;
      } else
        Ct(1, e);
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
    Kt(r) || Ct(8), sr(r) && (r = Ad(r));
    const e = Qc(this), t = cs(r, void 0);
    return t[st].isManual_ = !0, ss(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[st];
    (!t || !t.isManual_) && Ct(9);
    const { scope_: n } = t;
    return Yc(n, e), Jc(void 0, n);
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
  const t = li(r) ? kr("MapSet").proxyMap_(r, e) : ui(r) ? kr("MapSet").proxySet_(r, e) : db(r, e);
  return (e ? e.scope_ : _d()).drafts_.push(t), t;
}
function Ad(r) {
  return sr(r) || Ct(10, r), Rd(r);
}
function Rd(r) {
  if (!Kt(r) || di(r))
    return r;
  const e = r[st];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = os(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = os(r, !0);
  return Ho(t, (n, o) => {
    Td(t, n, Rd(o));
  }), e && (e.finalized_ = !1), t;
}
var at = new fb(), kd = at.produce;
at.produceWithPatches.bind(
  at
);
at.setAutoFreeze.bind(at);
at.setUseStrictShallowCopy.bind(at);
at.applyPatches.bind(at);
at.createDraft.bind(at);
at.finishDraft.bind(at);
function pb(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function gb(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function mb(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Zc = (r) => Array.isArray(r) ? r : [r];
function vb(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return mb(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function yb(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var Cb = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, bb = typeof WeakRef < "u" ? WeakRef : Cb, wb = 0, el = 1;
function ao() {
  return {
    s: wb,
    v: void 0,
    o: null,
    p: null
  };
}
function Sa(r, e = {}) {
  let t = ao();
  const { resultEqualityCheck: n } = e;
  let o, i = 0;
  function s() {
    var h;
    let a = t;
    const { length: c } = arguments;
    for (let d = 0, f = c; d < f; d++) {
      const p = arguments[d];
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
    if (a.s === el)
      u = a.v;
    else if (u = r.apply(null, arguments), i++, n) {
      const d = ((h = o == null ? void 0 : o.deref) == null ? void 0 : h.call(o)) ?? o;
      d != null && n(d, u) && (u = d, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new bb(u) : u;
    }
    return l.s = el, l.v = u, u;
  }
  return s.clearCache = () => {
    t = ao(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Nd(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), pb(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...t,
      ...c
    }, {
      memoize: h,
      memoizeOptions: d = [],
      argsMemoize: f = Sa,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, m = Zc(d), b = Zc(p), y = vb(o), C = h(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), w = f(function() {
      s++;
      const T = yb(
        y,
        arguments
      );
      return a = C.apply(null, T), a;
    }, ...b);
    return Object.assign(w, {
      resultFunc: l,
      memoizedResultFunc: C,
      dependencies: y,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
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
var ur = /* @__PURE__ */ Nd(Sa), Eb = Object.assign(
  (r, e = ur) => {
    gb(
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
  { withTypes: () => Eb }
);
function Pd(r) {
  return ({ dispatch: t, getState: n }) => (o) => (i) => typeof i == "function" ? i(t, n, r) : o(i);
}
var Sb = Pd(), Tb = Pd, _b = (...r) => {
  const e = Nd(...r), t = Object.assign((...n) => {
    const o = e(...n), i = (s, ...a) => o(sr(s) ? Ad(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => t
  });
  return t;
};
_b(Sa);
var Ib = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Uo : Uo.apply(null, arguments);
}, Ab = (r) => r && typeof r.match == "function";
function Nt(r, e) {
  function t(...n) {
    if (e) {
      let o = e(...n);
      if (!o)
        throw new Error(Qe(0));
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => ob(n) && n.type === r, t;
}
var Od = class wn extends Array {
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
function tl(r) {
  return Kt(r) ? kd(r, () => {
  }) : r;
}
function rl(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(Qe(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function Rb(r) {
  return typeof r == "boolean";
}
var kb = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = e ?? {};
  let s = new Od();
  return t && (Rb(t) ? s.push(Sb) : s.push(Tb(t.extraArgument))), s;
}, Nb = "RTK_autoBatch", xd = (r) => (e) => {
  setTimeout(e, r);
}, Pb = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : xd(10), Ob = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = r.type === "tick" ? queueMicrotask : r.type === "raf" ? Pb : r.type === "callback" ? r.queueNotification : xd(r.timeout), l = () => {
    s = !1, i && (i = !1, a.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const h = () => o && u(), d = n.subscribe(h);
      return a.add(u), () => {
        d(), a.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var h;
      try {
        return o = !((h = u == null ? void 0 : u.meta) != null && h[Nb]), i = !o, i && (s || (s = !0, c(l))), n.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, xb = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Od(r);
  return n && o.push(Ob(typeof n == "object" ? n : void 0)), o;
}, Mb = !0;
function Lb(r) {
  const e = kb(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = r || {};
  let a;
  if (typeof t == "function")
    a = t;
  else if (ba(t))
    a = rb(t);
  else
    throw new Error(Qe(1));
  let c;
  typeof n == "function" ? c = n(e) : c = e();
  let l = Uo;
  o && (l = Ib({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Mb,
    ...typeof o == "object" && o
  }));
  const u = nb(...c), h = xb(u);
  let d = typeof s == "function" ? s(h) : h();
  const f = l(...d);
  return wd(a, i, f);
}
function Md(r) {
  const e = {}, t = [];
  let n;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(Qe(28));
      if (a in e)
        throw new Error(Qe(29));
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
function Db(r) {
  return typeof r == "function";
}
function Ub(r, e) {
  let [t, n, o] = Md(e), i;
  if (Db(r))
    i = () => tl(r());
  else {
    const a = tl(r);
    i = () => a;
  }
  function s(a = i(), c) {
    let l = [t[c.type], ...n.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, h) => {
      if (h)
        if (sr(u)) {
          const f = h(u, c);
          return f === void 0 ? u : f;
        } else {
          if (Kt(u))
            return kd(u, (d) => h(d, c));
          {
            const d = h(u, c);
            if (d === void 0) {
              if (u === null)
                return u;
              throw new Error(Qe(9));
            }
            return d;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var Hb = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ld = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Hb[Math.random() * 64 | 0];
  return e;
}, Fb = (r, e) => Ab(r) ? r.match(e) : r(e);
function Bb(...r) {
  return (e) => r.some((t) => Fb(t, e));
}
var jb = ["name", "message", "stack", "code"], ki = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, nl = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, $b = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of jb)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, dn = /* @__PURE__ */ (() => {
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
    })), s = Nt(e + "/rejected", (c, l, u, h, d) => ({
      payload: h,
      error: (n && n.serializeError || $b)(c || "Rejected"),
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
    function a(c) {
      return (l, u, h) => {
        const d = n != null && n.idGenerator ? n.idGenerator(c) : Ld(), f = new AbortController();
        let p, g;
        function m(y) {
          g = y, f.abort();
        }
        const b = async function() {
          var w, E;
          let y;
          try {
            let T = (w = n == null ? void 0 : n.condition) == null ? void 0 : w.call(n, c, {
              getState: u,
              extra: h
            });
            if (qb(T) && (T = await T), T === !1 || f.signal.aborted)
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
            l(i(d, c, (E = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : E.call(n, {
              requestId: d,
              arg: c
            }, {
              getState: u,
              extra: h
            }))), y = await Promise.race([A, Promise.resolve(t(c, {
              dispatch: l,
              getState: u,
              extra: h,
              requestId: d,
              signal: f.signal,
              abort: m,
              rejectWithValue: (_, L) => new ki(_, L),
              fulfillWithValue: (_, L) => new nl(_, L)
            })).then((_) => {
              if (_ instanceof ki)
                throw _;
              return _ instanceof nl ? o(_.payload, d, c, _.meta) : o(_, d, c);
            })]);
          } catch (T) {
            y = T instanceof ki ? s(null, d, c, T.payload, T.meta) : s(T, d, c);
          } finally {
            p && f.signal.removeEventListener("abort", p);
          }
          return n && !n.dispatchConditionRejection && s.match(y) && y.meta.condition || l(y), y;
        }();
        return Object.assign(b, {
          abort: m,
          requestId: d,
          arg: c,
          unwrap() {
            return b.then(Kb);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: Bb(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function Kb(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function qb(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var zb = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Gb(r, e) {
  return `${r}/${e}`;
}
function Vb({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[zb];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Qe(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(Yb()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(C, w) {
        const E = typeof C == "string" ? C : C.type;
        if (!E)
          throw new Error(Qe(12));
        if (E in l.sliceCaseReducersByType)
          throw new Error(Qe(13));
        return l.sliceCaseReducersByType[E] = w, u;
      },
      addMatcher(C, w) {
        return l.sliceMatchers.push({
          matcher: C,
          reducer: w
        }), u;
      },
      exposeAction(C, w) {
        return l.actionCreators[C] = w, u;
      },
      exposeCaseReducer(C, w) {
        return l.sliceCaseReducersByName[C] = w, u;
      }
    };
    c.forEach((C) => {
      const w = a[C], E = {
        reducerName: C,
        type: Gb(i, C),
        createNotation: typeof o.reducers == "function"
      };
      Jb(w) ? Zb(E, w, u, e) : Qb(E, w, u);
    });
    function h() {
      const [C = {}, w = [], E = void 0] = typeof o.extraReducers == "function" ? Md(o.extraReducers) : [o.extraReducers], T = {
        ...C,
        ...l.sliceCaseReducersByType
      };
      return Ub(o.initialState, (A) => {
        for (let _ in T)
          A.addCase(_, T[_]);
        for (let _ of l.sliceMatchers)
          A.addMatcher(_.matcher, _.reducer);
        for (let _ of w)
          A.addMatcher(_.matcher, _.reducer);
        E && A.addDefaultCase(E);
      });
    }
    const d = (C) => C, f = /* @__PURE__ */ new Map();
    let p;
    function g(C, w) {
      return p || (p = h()), p(C, w);
    }
    function m() {
      return p || (p = h()), p.getInitialState();
    }
    function b(C, w = !1) {
      function E(A) {
        let _ = A[C];
        return typeof _ > "u" && w && (_ = m()), _;
      }
      function T(A = d) {
        const _ = rl(f, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return rl(_, A, {
          insert: () => {
            const L = {};
            for (const [F, Q] of Object.entries(o.selectors ?? {}))
              L[F] = Wb(Q, A, m, w);
            return L;
          }
        });
      }
      return {
        reducerPath: C,
        getSelectors: T,
        get selectors() {
          return T(E);
        },
        selectSlice: E
      };
    }
    const y = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: m,
      ...b(s),
      injectInto(C, {
        reducerPath: w,
        ...E
      } = {}) {
        const T = w ?? s;
        return C.inject({
          reducerPath: T,
          reducer: g
        }, E), {
          ...y,
          ...b(T, !0)
        };
      }
    };
    return y;
  };
}
function Wb(r, e, t, n) {
  function o(i, ...s) {
    let a = e(i);
    return typeof a > "u" && n && (a = t()), r(a, ...s);
  }
  return o.unwrapped = r, o;
}
var hi = /* @__PURE__ */ Vb();
function Yb() {
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
function Qb({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let i, s;
  if ("reducer" in n) {
    if (t && !Xb(n))
      throw new Error(Qe(17));
    i = n.reducer, s = n.prepare;
  } else
    i = n;
  o.addCase(r, i).exposeCaseReducer(e, i).exposeAction(e, s ? Nt(r, s) : Nt(r));
}
function Jb(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function Xb(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function Zb({
  type: r,
  reducerName: e
}, t, n, o) {
  if (!o)
    throw new Error(Qe(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = t, h = o(r, i, u);
  n.exposeAction(e, h), s && n.addCase(h.fulfilled, s), a && n.addCase(h.pending, a), c && n.addCase(h.rejected, c), l && n.addMatcher(h.settled, l), n.exposeCaseReducer(e, {
    fulfilled: s || co,
    pending: a || co,
    rejected: c || co,
    settled: l || co
  });
}
function co() {
}
var ew = (r, e) => {
  if (typeof r != "function")
    throw new Error(Qe(32));
}, Ta = "listenerMiddleware", tw = (r) => {
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
    throw new Error(Qe(21));
  return ew(i), {
    predicate: o,
    type: e,
    effect: i
  };
}, rw = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = tw(r);
  return {
    id: Ld(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Qe(22));
    }
  };
}, {
  withTypes: () => rw
}), nw = Object.assign(Nt(`${Ta}/add`), {
  withTypes: () => nw
});
Nt(`${Ta}/removeAll`);
var ow = Object.assign(Nt(`${Ta}/remove`), {
  withTypes: () => ow
});
function Qe(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const iw = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, ol = (r, e) => {
  r.language = e.payload, xe.changeLanguage(e.payload);
}, Dd = Nt("settings/setSettings"), Ud = hi({
  name: "settings",
  initialState: iw,
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
    setLanguage: ol,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      Dd,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(i) && (e.filterDictionaries = i), JSON.stringify(e.language) !== JSON.stringify(s) && ol(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(a) && (e.includeTestDictionaries = a);
      }
    );
  }
}), ls = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? bd[e] : null;
}, Hd = ur(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
), sw = ur(Hd, (r) => new Map(
  r.map((t) => [t.ifcClassification.location, t.ifcClassification])
)), _a = (r) => r.settings.mainDictionary, aw = (r) => r.settings.language, cw = (r) => r.settings.includeTestDictionaries, lw = ur(
  Hd,
  (r) => r.map((e) => e.ifcClassification.location)
);
ur(
  _a,
  (r) => r ? r.ifcClassification.location : null
);
Ud.actions;
const uw = Ud.reducer, us = 500, dw = 500;
let tr = null, lo = {};
const il = {
  mainDictionaryClassification: null,
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1,
  groupedClassRelations: {}
}, hw = (r) => {
  const e = ls(r);
  return e && (!tr || tr.baseUrl !== e) && (tr = new Fn(e)), tr;
}, sl = dn("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new Fn(r), o = dw;
  let i = 0;
  const s = [];
  return new Promise((a, c) => {
    function l() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: i }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: h, totalCount: d } = {} } = u;
        if (h && typeof d < "u")
          if (s.push(...h), i += o, s.length >= d) {
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
}), fw = dn("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
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
async function al(r, e, t, n) {
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
const pw = async (r, e, t) => {
  const n = [];
  let o = 0;
  const i = await al(r, e, o, t), s = i.classesTotalCount;
  if (s == null)
    throw new Error("Total count is null or undefined");
  n.push(...i.classes ?? []);
  const a = [];
  for (o = us; o < s; o += us)
    a.push(al(r, e, o, t));
  return (await Promise.all(a)).forEach((l) => {
    n.push(...l.classes ?? []);
  }), n;
}, Ia = dn(
  "bsdd/fetchDictionaryClasses",
  async ({ location: r, languageCode: e }, { getState: t, dispatch: n }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[r])
      return o.bsdd.dictionaryClasses[r];
    if (lo[r])
      return lo[r];
    const i = hw(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const s = pw(i, r, e).then((a) => (n({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: a } }), a)).finally(() => {
      delete lo[r];
    });
    return lo[r] = s, s;
  }
), gw = dn(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n, languageCode: o } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((i) => e(Ia({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), Fd = dn(
  "bsdd/updateDictionaries",
  async (r) => r
), Bd = hi({
  name: "bsdd",
  initialState: il,
  reducers: {
    resetState: () => il,
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
    r.addCase(sl.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      sl.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(Ia.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(Fd.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, i) => (o[i] = e.dictionaries[i], o), {});
    });
  }
}), jd = dn(
  "bsdd/fetchRelatedClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (!tr)
      throw new Error("BsddApi is not initialized");
    const o = {}, i = async (a) => {
      if (tr && tr.api) {
        const c = await tr.api.classV1List({
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
), mw = (r) => r.bsdd.mainDictionaryClassification, $d = (r) => r.bsdd.dictionaries, vw = (r) => r.bsdd.classes, yw = ur([vw], (r) => Object.values(r).reduce((n, o) => {
  const { dictionaryUri: i } = o;
  return i && (n[i] || (n[i] = []), n[i].push(o)), n;
}, {})), { resetState: Zw, setMainDictionaryClassification: Cw, addDictionaryClasses: eE, addDictionary: tE } = Bd.actions, bw = Bd.reducer, ww = {
  type: void 0,
  name: void 0,
  description: void 0,
  objectType: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
}, Kd = hi({
  name: "ifcEntity",
  initialState: ww,
  reducers: {
    setIfcEntity: (r, e) => {
      r.type = e.payload.type, r.name = e.payload.name, r.description = e.payload.description, r.objectType = e.payload.objectType, r.tag = e.payload.tag, r.predefinedType = e.payload.predefinedType, r.isDefinedBy = e.payload.isDefinedBy, r.hasAssociations = e.payload.hasAssociations;
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
      r.objectType = e.payload;
    },
    setTag: (r, e) => {
      r.tag = e.payload;
    },
    setPredefinedType: (r, e) => {
      r.predefinedType = e.payload;
    },
    setIsDefinedBy: (r, e) => {
      var n, o, i;
      r.isDefinedBy = e.payload;
      const t = e.payload.find((s) => s.name === "Attributes");
      if (t) {
        const s = t.hasProperties.find(
          (a) => a.name === "ObjectType"
        );
        s && (s.type === "IfcPropertySingleValue" ? r.objectType = (n = s.nominalValue) == null ? void 0 : n.value : s.type === "IfcPropertyEnumeratedValue" && (r.objectType = (i = (o = s.enumerationValues) == null ? void 0 : o[0]) == null ? void 0 : i.value));
      }
    },
    setHasAssociations: (r, e) => {
      const t = JSON.stringify(r.hasAssociations), n = JSON.stringify(e.payload);
      t !== n && (r.hasAssociations = e.payload);
    }
  }
}), Ew = (r) => r.ifcEntity.isDefinedBy, qd = (r) => r.ifcEntity.hasAssociations, Sw = ur(
  qd,
  (r) => (r == null ? void 0 : r.filter(
    (n) => n && n.type === "IfcClassificationReference"
  )).reduce((n, o) => {
    var s;
    const i = (s = o == null ? void 0 : o.referencedSource) == null ? void 0 : s.location;
    return i && (n[i] || (n[i] = []), n[i].push(o)), n;
  }, {})
), { setIfcEntity: Tw, setName: rE, setDescription: nE, setTag: oE, setPredefinedType: iE, setIsDefinedBy: _w, setHasAssociations: Iw } = Kd.actions, Aw = Kd.reducer;
function Rw({ callback: r, ifcEntity: e }) {
  const { t } = zo();
  Ze($d);
  const n = Pn(Ew), o = Pn(qd);
  function i(a) {
    const c = a ? { ...JSON.parse(JSON.stringify(a)) } : { hasAssociations: [], isDefinedBy: [] };
    return c.isDefinedBy = n == null ? void 0 : n.filter((l) => l.name !== "Attributes"), c.hasAssociations = [], o == null || o.forEach((l) => {
      var u, h, d;
      if (l.type === "IfcClassificationReference" && ((h = (u = l == null ? void 0 : l.referencedSource) == null ? void 0 : u.location) != null && h.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))) {
        const { type: f, predefinedType: p } = XC(l.identification);
        c.type = f, c.predefinedType = p;
      } else
        (d = c.hasAssociations) == null || d.push(l);
    }), c;
  }
  const s = () => {
    const a = i(e);
    console.log(a), r(a);
  };
  return /* @__PURE__ */ v.jsx(Xn, { color: "gray", fullWidth: !0, onClick: s, variant: "filled", children: t("apply") });
}
const cl = 25, kw = 25;
function Nw({ height: r, options: e, label: t, value: n, setValue: o, placeholder: i = "Search values", disabled: s }) {
  const [a, c] = X(""), [l, u] = X(e.slice(0, cl)), h = ue(null), d = si({
    onDropdownClose: () => {
      d.resetSelectedOption(), d.focusTarget();
    },
    onDropdownOpen: () => {
      d.focusSearchInput();
    }
  });
  V(() => {
    c((n == null ? void 0 : n.label) || "");
  }, [n]), V(() => {
    const g = n === null ? e.filter(
      (m) => (m == null ? void 0 : m.label.toLowerCase().includes(a.toLowerCase().trim())) || (m == null ? void 0 : m.value.toString().toLowerCase().includes(a.toLowerCase().trim()))
    ) : e;
    u(g.slice(0, cl));
  }, [e, a, n]);
  const f = (g) => {
    const { scrollTop: m, scrollHeight: b, clientHeight: y } = g.currentTarget, C = 5;
    b - m <= y + C && u((E) => {
      const T = E.length, A = e.filter((_) => _ == null ? void 0 : _.label.toLowerCase().includes(a.toLowerCase().trim())).slice(T, T + kw);
      return [...E, ...A];
    });
  }, p = l.map((g) => /* @__PURE__ */ v.jsx(le.Option, { value: g.value, active: (n == null ? void 0 : n.value) === g.value, children: /* @__PURE__ */ v.jsxs(Un, { gap: "sm", children: [
    (n == null ? void 0 : n.value) === g.value ? /* @__PURE__ */ v.jsx(da, { size: 12 }) : null,
    /* @__PURE__ */ v.jsx(xo, { fz: "sm", opacity: s ? 0.6 : 1, children: g.label }),
    /* @__PURE__ */ v.jsxs(xo, { fz: "xs", opacity: 0.6, children: [
      "(",
      g.value,
      ")"
    ] })
  ] }) }, g.value));
  return /* @__PURE__ */ v.jsx("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: /* @__PURE__ */ v.jsxs(
    le,
    {
      store: d,
      onOptionSubmit: (g) => {
        if (!s) {
          const m = e.find((y) => y.value === g), b = m && (n == null ? void 0 : n.value) !== m.value ? m : null;
          o(b), d.closeDropdown();
        }
      },
      disabled: s,
      children: [
        /* @__PURE__ */ v.jsx(le.Target, { children: /* @__PURE__ */ v.jsx(
          Wt,
          {
            rightSection: !s && /* @__PURE__ */ v.jsx(
              un,
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
              s || (o(null), d.updateSelectedOptionIndex(), c(g.currentTarget.value));
            },
            onClick: () => {
              s || d.openDropdown();
            },
            onBlur: () => d.closeDropdown(),
            placeholder: s ? "" : i,
            disabled: s
          }
        ) }),
        r < 80 ? /* @__PURE__ */ v.jsx(
          le.Dropdown,
          {
            style: { maxHeight: "20em", overflowY: "auto" },
            ref: h,
            onScroll: f,
            children: /* @__PURE__ */ v.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ v.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        ) : /* @__PURE__ */ v.jsx(
          Jo,
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
            ref: h,
            onScroll: f,
            children: /* @__PURE__ */ v.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ v.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        )
      ]
    }
  ) });
}
function Pw({ height: r, mainDictionaryClassification: e, handleMouseDown: t }) {
  const n = Zn(), [o, i] = X(/* @__PURE__ */ new Map()), [s, a] = X(/* @__PURE__ */ new Map()), c = Ze(sw), l = Ze(Sw), u = Pn($d), h = Pn(yw);
  return V(() => {
    (async () => {
      const p = Array.from(c.entries()).map(async ([y, C]) => {
        let w = [];
        const E = h[y];
        if (E)
          w = E.map((T) => ({
            value: T.code,
            label: T.name,
            uri: T.uri
          }));
        else
          try {
            w = (await n(
              Ia({
                location: y,
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
            console.error("Failed to fetch dictionary classes for", y, T), w = [];
          }
        return [y, w];
      }), g = await Promise.all(p), m = new Map(g);
      i(m);
      const b = /* @__PURE__ */ new Map();
      m.forEach((y, C) => {
        if (y.length === 1)
          b.set(C, y[0]);
        else if (C in l) {
          const w = l[C];
          if (w.length === 1) {
            const E = w[0], T = {
              label: E.name || "",
              value: E.identification || "",
              uri: C
            };
            b.set(C, T);
          }
        }
      }), a(b);
    })();
  }, [c, h, n, l]), V(() => {
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
      f.length > 0 && n(Iw(f));
    })();
  }, [u, n, s]), V(() => {
    if (e != null && e.classRelations) {
      const d = e.classRelations.map((f) => f.relatedClassUri);
      d.push(e.uri), n(jd(d));
    }
  }, [e, n]), /* @__PURE__ */ v.jsxs(Jo, { style: { height: `${r}px`, position: "relative" }, children: [
    Array.from(c.entries()).map(([d, f]) => {
      var p;
      return /* @__PURE__ */ v.jsx(
        Nw,
        {
          height: r,
          label: f.name,
          options: o.get(d) || [],
          value: s.get(d) || null,
          setValue: (g) => {
            const m = new Map(s);
            m.set(d, g), a(m);
          },
          placeholder: "Search classes",
          disabled: d === (e == null ? void 0 : e.dictionaryUri) || ((p = o.get(d)) == null ? void 0 : p.length) === 1
        },
        d
      );
    }),
    /* @__PURE__ */ v.jsx(ga, { onMouseDown: t, style: { marginTop: "4px" }, children: /* @__PURE__ */ v.jsx(ri, { m: "xxs", variant: "outline", size: "lg", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ v.jsx(KC, {}) }) })
  ] });
}
const Ow = {
  ifcEntities: []
}, zd = hi({
  name: "ifcData",
  initialState: Ow,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: xw } = zd.actions, Mw = (r) => r.ifcData.ifcEntities, Lw = ur(Mw, (r) => r[0]), Dw = zd.reducer;
function Uw({ label: r, description: e, value: t, setValue: n, disabled: o }) {
  const [i, s] = X(!1), [a, c] = X(!0), l = (u) => {
    u.target.indeterminate = !1, n(u.target.checked);
  };
  return V(() => {
    t === !0 ? (s(!0), c(!1)) : t === !1 ? (s(!1), c(!1)) : t === void 0 && (s(!1), c(!0));
  }, [t]), /* @__PURE__ */ v.jsx(
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
function Hw({
  propertySet: r,
  property: e,
  property_natural_language_name: t,
  propertySets: n,
  setPropertySets: o
}) {
  const i = Zn(), [s, a] = X();
  return V(() => {
    var c, l, u, h;
    switch (e.type) {
      case "IfcPropertySingleValue": {
        e.nominalValue.type === "IfcBoolean" ? a(
          /* @__PURE__ */ v.jsx(
            Uw,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              disabled: !1,
              value: e.nominalValue.value,
              setValue: (d) => {
                const f = { ...n }, p = { ...r };
                if (p.name) {
                  const g = { ...e }, m = { ...g.nominalValue, value: d };
                  g.nominalValue = m;
                  const b = p.hasProperties.findIndex(
                    (y) => y.name === e.name
                  );
                  if (b !== -1) {
                    const y = [...p.hasProperties];
                    y[b] = g, p.hasProperties = y, f[p.name] = p, JSON.stringify(n) !== JSON.stringify(f) && o(f);
                  }
                }
              }
            }
          )
        ) : a(
          /* @__PURE__ */ v.jsx(
            Tr,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              placeholder: e.nominalValue.value,
              value: e.nominalValue.value || "",
              onChange: (d) => {
                const f = JSON.parse(JSON.stringify(n)), p = f[r.name];
                if (p && p.name) {
                  const g = p.hasProperties.findIndex(
                    (m) => m.name === e.name
                  );
                  g !== -1 && (p.hasProperties[g] = {
                    ...p.hasProperties[g],
                    nominalValue: {
                      ...p.hasProperties[g].nominalValue,
                      value: d.target.value
                    }
                  }, JSON.stringify(n) !== JSON.stringify(f) && o(f));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const d = (l = (c = e.enumerationValues) == null ? void 0 : c[0]) == null ? void 0 : l.value, f = ((u = e.enumerationReference) == null ? void 0 : u.enumerationValues) || [];
        a(
          /* @__PURE__ */ v.jsx(
            va,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              value: d,
              disabled: ((h = e.enumerationValues) == null ? void 0 : h.length) === 1,
              onChange: (p) => {
                const g = f.find((C) => C.value === p), m = g ? [g] : [], b = { ...n }, y = { ...r };
                if (y.name) {
                  const C = { ...e };
                  C.enumerationValues = m;
                  const w = y.hasProperties.findIndex(
                    (E) => E.name === e.name
                  );
                  if (w !== -1) {
                    const E = y.hasProperties.map(
                      (T, A) => A === w ? C : T
                    );
                    y.hasProperties = E, b[y.name] = y, JSON.stringify(n) !== JSON.stringify(b) && o(b);
                  }
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
        a(/* @__PURE__ */ v.jsx(Tr, { placeholder: e.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [e, r, a, n, o, t, i]), s;
}
const Fw = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function $n(r, e) {
  const t = r && Fw[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function Gd(r, e, t) {
  if (r && r.isDefinedBy) {
    let n = r.isDefinedBy.find((o) => o.name === e);
    if (n || (n = r.isDefinedBy.find((o) => o.name === "")), n)
      return n.hasProperties.find(
        (o) => o.name === t
      );
  }
}
function Bw(r, e, t, n) {
  const o = Gd(e, t, n);
  return o && "nominalValue" in o ? $n(r, o.nominalValue.value) : $n(r);
}
function jw(r, e, t, n, o) {
  const i = Gd(e, t, n);
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
function $w(r, e, t, n) {
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
  const s = r.predefinedValue ? [$n(r.dataType, r.predefinedValue)] : jw(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return s.length > 0 && (i.enumerationValues = s), i;
}
function Kw(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e
  };
  r.propertyUri && (o.specification = r.propertyUri);
  const i = r.predefinedValue ? $n(r.dataType, r.predefinedValue) : Bw(r.dataType, n, t, e);
  return i !== null && (o.nominalValue = i), o;
}
function qw(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown", i = r.allowedValues ? $w(r, o, e, t) : Kw(r, o, e, t);
  return i.specification = r.propertyUri || void 0, i;
}
function zw({
  mainDictionaryClassification: r,
  propertySets: e,
  setPropertySets: t,
  recursiveMode: n
}) {
  const o = Zn();
  zo();
  const i = Ze(Lw), [s, a] = X({});
  return V(() => {
    r && o(_w(Object.values(e)));
  }, [e, o, r]), V(() => {
    if (!r)
      return;
    const c = {}, l = {};
    [r].forEach((h) => {
      var d;
      (d = h.classProperties) == null || d.forEach((f) => {
        if (!f)
          return;
        const p = f.propertySet || h.name;
        c[p] || (c[p] = {
          type: "IfcPropertySet",
          name: p,
          hasProperties: []
        }), c[p].hasProperties.push(qw(f, p, i)), f.propertyCode && (l[f.propertyCode] = f.name);
      });
    }), JSON.stringify(e) !== JSON.stringify(c) && t(c), a(l);
  }, [r, t, n, i]), /* @__PURE__ */ v.jsx("div", { children: Pi.toArray(
    Object.values(e).map((c, l) => /* @__PURE__ */ v.jsx(Ne, { children: /* @__PURE__ */ v.jsxs(Ne.Item, { value: c.name || "Unknown", children: [
      /* @__PURE__ */ v.jsx(Ne.Control, { children: c.name }),
      /* @__PURE__ */ v.jsx(Ne.Panel, { children: /* @__PURE__ */ v.jsx(ya, { children: Pi.toArray(
        c.hasProperties.map((u) => /* @__PURE__ */ v.jsx(
          Hw,
          {
            propertySet: c,
            property: u,
            property_natural_language_name: s[u.name] || "",
            propertySets: e,
            setPropertySets: t
          }
        ))
      ) }) })
    ] }, c.name) }))
  ) });
}
function Gw({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var E;
  const n = Zn(), { t: o } = zo(), [i, s] = X([]), a = Ze(_a), c = ue(null), l = ue(e), [u, h] = X(l.current), [d, f] = X(((E = l.current) == null ? void 0 : E.label) || ""), [p] = Dp(d, 300), [g, m] = X(!1), b = ye((T) => {
    f(T);
  }, []), y = ye(
    (T) => {
      const A = i.find((_) => _.value === T);
      A && (h(A), m(!0));
    },
    [i]
  ), C = ye(
    (T) => {
      T.key === "Enter" && i[0] && (f(i[0].label), y(i[0].value), c.current && c.current.blur());
    },
    [i, y, c]
  );
  V(() => {
    e && !g && (f(e.label), h(e));
  }, [e, g]), V(() => {
    if (a) {
      n(jd([]));
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
            const Q = (F = L.dictionary) == null ? void 0 : F.classes;
            Q && s(
              Q.filter((Z) => Z.uri && Z.name).map(
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
  }, [r.api, p, n, a]), V(() => {
    c.current && c.current.focus();
  }, []), V(() => {
    u && t(u.value);
  }, [u, t]);
  const w = () => {
    b(""), c.current && c.current.focus();
  };
  return /* @__PURE__ */ v.jsx(
    fa,
    {
      label: `${o("searchMainDictionaryLabel")} ${a ? a.ifcClassification.name : ""}`,
      data: i,
      placeholder: "bSDD search...",
      value: d,
      onChange: b,
      onOptionSubmit: y,
      onKeyDown: C,
      ref: c,
      style: { width: "100%" },
      rightSection: /* @__PURE__ */ v.jsx(
        un,
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
let ll = 0, ul = 0;
function Vw() {
  const { t: r } = zo(), e = Zn(), [t, n] = X(), [o, i] = X(), [s, a] = X(!1), [c, l] = X({}), [u, h] = X(new Fn(bd[JC])), d = Ze(_a), f = Ze(aw), [p, g] = X(null), m = Ze(ls), b = Ze(ls), y = Ze(cw), C = Ze(lw), w = Ze((x) => x.ifcEntity), [E, T] = X(Ni), [A, _] = X("auto"), L = Ze(mw), F = ye((x) => {
    var q;
    const D = JSON.stringify(x);
    (q = window == null ? void 0 : window.bsddBridge) == null || q.save(D).then((J) => {
      console.log("Sent to Revit", J);
    });
  }, []), Q = ye(() => {
    var x;
    (x = window == null ? void 0 : window.bsddBridge) == null || x.cancel();
  }, []), Z = (x) => {
    g(x);
  };
  V(() => {
    p && (console.log("settings updated: ", p), e(Dd(p)), g(null));
  }, [p, e]), V(() => {
    m && h(new Fn(m));
  }, [m]), V(() => {
  }, [e]), V(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const D = await window.bsddBridge.loadSettings(), { settings: q, ifcData: J } = JSON.parse(D);
        if (e(xw(J)), Z(q), !J || J.length === 0)
          return;
        e(Tw(J[0]));
      }
    })();
  }, []), V(() => {
    var D;
    if (!w || !d)
      return;
    const x = d.ifcClassification.location;
    (D = w.hasAssociations) == null || D.forEach((q) => {
      var J;
      if (q.type === "IfcClassificationReference") {
        const me = q;
        (J = me.referencedSource) != null && J.location && me.referencedSource.location === x && (me.location && n(me.location), i({
          label: me.name,
          value: me.location
        }));
      }
    });
  }, [d, w]), V(() => {
    if (m !== null && y !== null) {
      const x = {
        bsddApiEnvironment: m,
        includeTestDictionaries: y,
        languageCode: f,
        dictionaryUris: C
      };
      e(Fd(C)), e(fw(x)), e(gw(x));
    }
  }, [
    m,
    b,
    y,
    e,
    C,
    f
  ]);
  const se = ye(
    (x) => {
      const D = {
        headers: { Accept: "text/plain" }
      };
      new Promise(function(J) {
        const me = {
          Uri: x,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0,
          languageCode: f
        };
        J(
          u.api.classV1List(me, D).then((fe) => fe.status !== 200 ? (console.error(`API request failed with status ${fe.status}`), null) : fe.data).catch((fe) => (console.error("Error fetching classification:", fe), null))
        );
      }).then((J) => {
        e(Cw(J));
      });
    },
    [u.api, e, f]
  );
  V(() => {
    t && se(t);
  }, [t, se]), V(() => {
    _(`${E * C.length + 48}px`);
  }, [C.length, E]);
  const $ = (x) => {
    const D = ul + (x.clientY - ll) / C.length;
    T(D > Ni ? D : Ni);
  }, oe = () => {
    document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", oe);
  }, U = (x) => {
    ll = x.clientY, ul = E, document.addEventListener("mousemove", $), document.addEventListener("mouseup", oe);
  };
  return /* @__PURE__ */ v.jsxs(ma, { children: [
    /* @__PURE__ */ v.jsx(Tr, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ v.jsx(Tr, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ v.jsx(Tr, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ v.jsx(Un, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ v.jsx(Gw, { api: u, defaultValue: o, setActiveClassificationUri: n }) }),
    t ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsxs(Ne, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ v.jsxs(Ne.Item, { value: "Classifications", children: [
          /* @__PURE__ */ v.jsx(Ne.Control, { children: /* @__PURE__ */ v.jsx(Mo, { order: 5, children: r("classificationsLabel") }) }),
          /* @__PURE__ */ v.jsx(Ne.Panel, { style: { height: A }, children: /* @__PURE__ */ v.jsx(
            Pw,
            {
              height: E,
              mainDictionaryClassification: L,
              handleMouseDown: U
            }
          ) })
        ] }, "Classifications"),
        /* @__PURE__ */ v.jsxs(Ne.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ v.jsx(Ne.Control, { children: /* @__PURE__ */ v.jsx(Mo, { order: 5, children: r("propertysetsLabel") }) }),
          /* @__PURE__ */ v.jsx(Ne.Panel, { children: /* @__PURE__ */ v.jsx(
            zw,
            {
              mainDictionaryClassification: L,
              propertySets: c,
              setPropertySets: l,
              recursiveMode: s
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ v.jsxs(Un, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ v.jsx(Rw, { callback: F, ifcEntity: w }),
        /* @__PURE__ */ v.jsx(Xn, { fullWidth: !0, variant: "light", color: "gray", onClick: Q, children: r("cancel") })
      ] })
    ] }) : /* @__PURE__ */ v.jsxs(Js, { mx: "md", title: r("noClassificationSelected"), mt: "xl", children: [
      r("classSearchInstruction"),
      /* @__PURE__ */ v.jsx(hd, { h: "md" }),
      r("needHelp"),
      " ",
      /* @__PURE__ */ v.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: r("checkDocumentation") })
    ] })
  ] });
}
function Ww() {
  const [r, e] = X(null);
  return V(() => {
    const t = new Cp(WC);
    e(t);
  }, []), r ? /* @__PURE__ */ v.jsx(eu, { theme: VC, children: /* @__PURE__ */ v.jsx(Vw, {}) }) : /* @__PURE__ */ v.jsx("div", { children: "Loading..." });
}
const Yw = Lb({
  reducer: {
    settings: uw,
    ifcData: Dw,
    ifcEntity: Aw,
    bsdd: bw
  }
});
xi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ v.jsx(jo.StrictMode, { children: /* @__PURE__ */ v.jsx(_h, { store: Yw, children: /* @__PURE__ */ v.jsx(Ww, {}) }) })
);
