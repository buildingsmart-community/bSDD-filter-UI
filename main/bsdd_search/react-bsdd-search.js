var sf = Object.defineProperty;
var cf = (n, e, t) => e in n ? sf(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ke = (n, e, t) => (cf(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as ie from "react";
import Ko, { createContext as Mn, useContext as ln, useState as X, useRef as ue, useEffect as Y, Fragment as Cl, useMemo as Mr, useCallback as me, useLayoutEffect as ma, useId as wl, forwardRef as ye, cloneElement as qo, Children as Di, createElement as Li } from "react";
import * as lf from "react-dom";
import Sl, { flushSync as uf, createPortal as df } from "react-dom";
function ff(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Tl = { exports: {} }, Vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf = Ko, pf = Symbol.for("react.element"), gf = Symbol.for("react.fragment"), mf = Object.prototype.hasOwnProperty, yf = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function El(n, e, t) {
  var r, o = {}, i = null, a = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e)
    mf.call(e, r) && !vf.hasOwnProperty(r) && (o[r] = e[r]);
  if (n && n.defaultProps)
    for (r in e = n.defaultProps, e)
      o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: pf, type: n, key: i, ref: a, props: o, _owner: yf.current };
}
Vo.Fragment = gf;
Vo.jsx = El;
Vo.jsxs = El;
Tl.exports = Vo;
var y = Tl.exports, ji = {}, js = Sl;
ji.createRoot = js.createRoot, ji.hydrateRoot = js.hydrateRoot;
var Il = { exports: {} }, _l = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr = Ko;
function bf(n, e) {
  return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
}
var Cf = typeof Object.is == "function" ? Object.is : bf, wf = Kr.useSyncExternalStore, Sf = Kr.useRef, Tf = Kr.useEffect, Ef = Kr.useMemo, If = Kr.useDebugValue;
_l.useSyncExternalStoreWithSelector = function(n, e, t, r, o) {
  var i = Sf(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else
    a = i.current;
  i = Ef(function() {
    function c(h) {
      if (!l) {
        if (l = !0, u = h, h = r(h), o !== void 0 && a.hasValue) {
          var p = a.value;
          if (o(p, h))
            return d = p;
        }
        return d = h;
      }
      if (p = d, Cf(u, h))
        return p;
      var g = r(h);
      return o !== void 0 && o(p, g) ? p : (u = h, d = g);
    }
    var l = !1, u, d, f = t === void 0 ? null : t;
    return [function() {
      return c(e());
    }, f === null ? void 0 : function() {
      return c(f());
    }];
  }, [e, t, r, o]);
  var s = wf(n, i[0], i[1]);
  return Tf(function() {
    a.hasValue = !0, a.value = s;
  }, [s]), If(s), s;
};
Il.exports = _l;
var _f = Il.exports, tt = (
  // prettier-ignore
  // @ts-ignore
  "default" in ie ? ie.default : ie
), Fs = Symbol.for("react-redux-context"), Us = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kf() {
  if (!tt.createContext)
    return {};
  const n = Us[Fs] ?? (Us[Fs] = /* @__PURE__ */ new Map());
  let e = n.get(tt.createContext);
  return e || (e = tt.createContext(
    null
  ), n.set(tt.createContext, e)), e;
}
var rn = /* @__PURE__ */ kf(), Af = () => {
  throw new Error("uSES not initialized!");
};
function ya(n = rn) {
  return function() {
    return tt.useContext(n);
  };
}
var kl = /* @__PURE__ */ ya(), Al = Af, Rf = (n) => {
  Al = n;
}, Nf = (n, e) => n === e;
function Pf(n = rn) {
  const e = n === rn ? kl : ya(n), t = (r, o = {}) => {
    const { equalityFn: i = Nf, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: s,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = e();
    tt.useRef(!0);
    const f = tt.useCallback(
      {
        [r.name](p) {
          return r(p);
        }
      }[r.name],
      [r, u, a.stabilityCheck]
    ), h = Al(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      f,
      i
    );
    return tt.useDebugValue(h), h;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Tn = /* @__PURE__ */ Pf();
function Of(n) {
  n();
}
function Mf() {
  let n = null, e = null;
  return {
    clear() {
      n = null, e = null;
    },
    notify() {
      Of(() => {
        let t = n;
        for (; t; )
          t.callback(), t = t.next;
      });
    },
    get() {
      const t = [];
      let r = n;
      for (; r; )
        t.push(r), r = r.next;
      return t;
    },
    subscribe(t) {
      let r = !0;
      const o = e = {
        callback: t,
        next: null,
        prev: e
      };
      return o.prev ? o.prev.next = o : n = o, function() {
        !r || n === null || (r = !1, o.next ? o.next.prev = o.prev : e = o.prev, o.prev ? o.prev.next = o.next : n = o.next);
      };
    }
  };
}
var Hs = {
  notify() {
  },
  get: () => []
};
function xf(n, e) {
  let t, r = Hs, o = 0, i = !1;
  function a(g) {
    u();
    const m = r.subscribe(g);
    let b = !1;
    return () => {
      b || (b = !0, m(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    p.onStateChange && p.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, t || (t = e ? e.addNestedSub(c) : n.subscribe(c), r = Mf());
  }
  function d() {
    o--, t && o === 0 && (t(), t = void 0, r.clear(), r = Hs);
  }
  function f() {
    i || (i = !0, u());
  }
  function h() {
    i && (i = !1, d());
  }
  const p = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return p;
}
var Df = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Lf = typeof navigator < "u" && navigator.product === "ReactNative", jf = Df || Lf ? tt.useLayoutEffect : tt.useEffect;
function Ff({
  store: n,
  context: e,
  children: t,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = tt.useMemo(() => {
    const l = xf(n);
    return {
      store: n,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [n, r, o, i]), s = tt.useMemo(() => n.getState(), [n]);
  jf(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== n.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = e || rn;
  return /* @__PURE__ */ tt.createElement(c.Provider, { value: a }, t);
}
var Uf = Ff;
function Rl(n = rn) {
  const e = n === rn ? kl : (
    // @ts-ignore
    ya(n)
  ), t = () => {
    const { store: r } = e();
    return r;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Hf = /* @__PURE__ */ Rl();
function Bf(n = rn) {
  const e = n === rn ? Hf : Rl(n), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var zf = /* @__PURE__ */ Bf();
Rf(_f.useSyncExternalStoreWithSelector);
const $f = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    console && console[n] && console[n].apply(console, e);
  }
};
let Kf = class Fi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || $f, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, r, o) {
    return o && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Fi(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Fi(this.logger, e);
  }
};
var At = new Kf();
class Go {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const o = this.observers[r].get(t) || 0;
      this.observers[r].set(t, o + 1);
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
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      r[o - 1] = arguments[o];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((a) => {
      let [s, c] = a;
      for (let l = 0; l < c; l++)
        s(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((a) => {
      let [s, c] = a;
      for (let l = 0; l < c; l++)
        s.apply(s, [e, ...r]);
    });
  }
}
function gr() {
  let n, e;
  const t = new Promise((r, o) => {
    n = r, e = o;
  });
  return t.resolve = n, t.reject = e, t;
}
function Bs(n) {
  return n == null ? "" : "" + n;
}
function qf(n, e, t) {
  n.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}
const Vf = /###/g;
function Tr(n, e, t) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(Vf, ".") : s;
  }
  function o() {
    return !n || typeof n == "string";
  }
  const i = typeof e != "string" ? e : e.split(".");
  let a = 0;
  for (; a < i.length - 1; ) {
    if (o())
      return {};
    const s = r(i[a]);
    !n[s] && t && (n[s] = new t()), Object.prototype.hasOwnProperty.call(n, s) ? n = n[s] : n = {}, ++a;
  }
  return o() ? {} : {
    obj: n,
    k: r(i[a])
  };
}
function zs(n, e, t) {
  const {
    obj: r,
    k: o
  } = Tr(n, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[o] = t;
    return;
  }
  let i = e[e.length - 1], a = e.slice(0, e.length - 1), s = Tr(n, a, Object);
  for (; s.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), s = Tr(n, a, Object), s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = t;
}
function Gf(n, e, t, r) {
  const {
    obj: o,
    k: i
  } = Tr(n, e, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(t)), r || o[i].push(t);
}
function go(n, e) {
  const {
    obj: t,
    k: r
  } = Tr(n, e);
  if (t)
    return t[r];
}
function Wf(n, e, t) {
  const r = go(n, t);
  return r !== void 0 ? r : go(e, t);
}
function Nl(n, e, t) {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? typeof n[r] == "string" || n[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (n[r] = e[r]) : Nl(n[r], e[r], t) : n[r] = e[r]);
  return n;
}
function Bn(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Yf = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Qf(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => Yf[e]) : n;
}
class Jf {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const Xf = [" ", ",", "?", "!", ";"], Zf = new Jf(20);
function eh(n, e, t) {
  e = e || "", t = t || "";
  const r = Xf.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (r.length === 0)
    return !0;
  const o = Zf.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !o.test(n);
  if (!i) {
    const a = n.indexOf(t);
    a > 0 && !o.test(n.substring(0, a)) && (i = !0);
  }
  return i;
}
function Ui(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n)
    return;
  if (n[e])
    return n[e];
  const r = e.split(t);
  let o = n;
  for (let i = 0; i < r.length; ) {
    if (!o || typeof o != "object")
      return;
    let a, s = "";
    for (let c = i; c < r.length; ++c)
      if (c !== i && (s += t), s += r[c], a = o[s], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < r.length - 1)
          continue;
        i += c - i + 1;
        break;
      }
    o = a;
  }
  return o;
}
function mo(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class $s extends Go {
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
  getResource(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, a = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], r && (Array.isArray(r) ? s.push(...r) : typeof r == "string" && i ? s.push(...r.split(i)) : s.push(r)));
    const c = go(this.data, s);
    return !c && !t && !r && e.indexOf(".") > -1 && (e = s[0], t = s[1], r = s.slice(2).join(".")), c || !a || typeof r != "string" ? c : Ui(this.data && this.data[e] && this.data[e][t], r, i);
  }
  addResource(e, t, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [e, t];
    r && (s = s.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (s = e.split("."), o = t, t = s[1]), this.addNamespaces(t), zs(this.data, s, o), i.silent || this.emit("added", e, t, r, o);
  }
  addResources(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (typeof r[i] == "string" || Array.isArray(r[i])) && this.addResource(e, t, i, r[i], {
        silent: !0
      });
    o.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, o, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, s = [e, t];
    e.indexOf(".") > -1 && (s = e.split("."), o = r, r = t, t = s[1]), this.addNamespaces(t);
    let c = go(this.data, s) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? Nl(c, r, i) : c = {
      ...c,
      ...r
    }, zs(this.data, s, c), a.silent || this.emit("added", e, t, r);
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
var Pl = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, r, o) {
    return n.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, t, r, o));
    }), e;
  }
};
const Ks = {};
class yo extends Go {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), qf(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = At.create("translator");
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
    const r = this.resolve(e, t);
    return r && r.res !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const a = r && e.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !eh(e, r, o);
    if (a && !s) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const l = e.split(r);
      (r !== o || r === o && this.options.ns.indexOf(l[0]) > -1) && (i = l.shift()), e = l.join(o);
    }
    return typeof i == "string" && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, t, r) {
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
    const d = this.resolve(e, t);
    let f = d && d.res;
    const h = d && d.usedKey || a, p = d && d.exactUsedKey || a, g = Object.prototype.toString.apply(f), m = ["[object Number]", "[object Function]", "[object RegExp]"], b = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (C && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && m.indexOf(g) < 0 && !(typeof b == "string" && Array.isArray(f))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, f, {
          ...t,
          ns: s
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = w, d.usedParams = this.getUsedParamsDetails(t), d) : w;
      }
      if (i) {
        const w = Array.isArray(f), S = w ? [] : {}, E = w ? p : h;
        for (const k in f)
          if (Object.prototype.hasOwnProperty.call(f, k)) {
            const I = `${E}${i}${k}`;
            S[k] = this.translate(I, {
              ...t,
              joinArrays: !1,
              ns: s
            }), S[k] === I && (S[k] = f[k]);
          }
        f = S;
      }
    } else if (C && typeof b == "string" && Array.isArray(f))
      f = f.join(b), f && (f = this.extendTranslation(f, e, t, r));
    else {
      let w = !1, S = !1;
      const E = t.count !== void 0 && typeof t.count != "string", k = yo.hasDefaultValue(t), I = E ? this.pluralResolver.getSuffix(l, t.count, t) : "", x = t.ordinal && E ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", j = E && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), V = j && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${I}`] || t[`defaultValue${x}`] || t.defaultValue;
      !this.isValidLookup(f) && k && (w = !0, f = V), this.isValidLookup(f) || (S = !0, f = a);
      const ae = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, D = k && V !== f && this.options.updateMissing;
      if (S || w || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", l, c, a, D ? V : f), i) {
          const H = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          H && H.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let G = [];
        const M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && M && M[0])
          for (let H = 0; H < M.length; H++)
            G.push(M[H]);
        else
          this.options.saveMissingTo === "all" ? G = this.languageUtils.toResolveHierarchy(t.lng || this.language) : G.push(t.lng || this.language);
        const F = (H, J, ce) => {
          const Te = k && ce !== f ? ce : ae;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(H, c, J, Te, D, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(H, c, J, Te, D, t), this.emit("missingKey", H, c, J, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? G.forEach((H) => {
          const J = this.pluralResolver.getSuffixes(H, t);
          j && t[`defaultValue${this.options.pluralSeparator}zero`] && J.indexOf(`${this.options.pluralSeparator}zero`) < 0 && J.push(`${this.options.pluralSeparator}zero`), J.forEach((ce) => {
            F([H], a + ce, t[`defaultValue${ce}`] || V);
          });
        }) : F(G, a, V));
      }
      f = this.extendTranslation(f, e, t, d, r), S && f === a && this.options.appendNamespaceToMissingKey && (f = `${c}:${a}`), (S || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${a}` : a, w ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return o ? (d.res = f, d.usedParams = this.getUsedParamsDetails(t), d) : f;
  }
  extendTranslation(e, t, r, o, i) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
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
      const l = typeof e == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (l) {
        const f = e.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), e = this.interpolator.interpolate(e, d, r.lng || this.language, r), l) {
        const f = e.match(this.interpolator.nestingRegexp), h = f && f.length;
        u < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = o.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, h = new Array(f), p = 0; p < f; p++)
          h[p] = arguments[p];
        return i && i[0] === h[0] && !r.context ? (a.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${t[0]}`), null) : a.translate(...h, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, c = typeof s == "string" ? [s] : s;
    return e != null && c && c.length && r.applyPostProcessor !== !1 && (e = Pl.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, o, i, a, s;
    return typeof e == "string" && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(r))
        return;
      const l = this.extractFromKey(c, t), u = l.key;
      o = u;
      let d = l.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && typeof t.count != "string", h = f && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), p = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((m) => {
        this.isValidLookup(r) || (s = m, !Ks[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (Ks[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((b) => {
          if (this.isValidLookup(r))
            return;
          a = b;
          const C = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, u, b, m, t);
          else {
            let w;
            f && (w = this.pluralResolver.getSuffix(b, t.count, t));
            const S = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (C.push(u + w), t.ordinal && w.indexOf(E) === 0 && C.push(u + w.replace(E, this.options.pluralSeparator)), h && C.push(u + S)), p) {
              const k = `${u}${this.options.contextSeparator}${t.context}`;
              C.push(k), f && (C.push(k + w), t.ordinal && w.indexOf(E) === 0 && C.push(k + w.replace(E, this.options.pluralSeparator)), h && C.push(k + S));
            }
          }
          let v;
          for (; v = C.pop(); )
            this.isValidLookup(r) || (i = v, r = this.getResource(b, m, v, t));
        }));
      });
    }), {
      res: r,
      usedKey: o,
      exactUsedKey: i,
      usedLng: a,
      usedNS: s
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, r, o) : this.resourceStore.getResource(e, t, r, o);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && typeof e.replace != "string";
    let o = r ? e.replace : e;
    if (r && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !r) {
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
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
function mi(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class qs {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = At.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = mo(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = mo(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = mi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = mi(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = mi(r[2].toLowerCase()))), r.join("-");
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
    return e.forEach((r) => {
      if (t)
        return;
      const o = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (t = o);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t)
        return;
      const o = this.getLanguagePartFromCode(r);
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
    let r = e[t];
    return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, t) {
    const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], i = (a) => {
      a && (this.isSupportedCode(a) ? o.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), r.forEach((a) => {
      o.indexOf(a) < 0 && i(this.formatLanguageCode(a));
    }), o;
  }
}
let th = [{
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
}], nh = {
  1: function(n) {
    return +(n > 1);
  },
  2: function(n) {
    return +(n != 1);
  },
  3: function(n) {
    return 0;
  },
  4: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  5: function(n) {
    return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
  },
  6: function(n) {
    return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
  },
  7: function(n) {
    return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  8: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
  },
  9: function(n) {
    return +(n >= 2);
  },
  10: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
  },
  11: function(n) {
    return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
  },
  12: function(n) {
    return +(n % 10 != 1 || n % 100 == 11);
  },
  13: function(n) {
    return +(n !== 0);
  },
  14: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
  },
  15: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  16: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2;
  },
  17: function(n) {
    return n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1;
  },
  18: function(n) {
    return n == 0 ? 0 : n == 1 ? 1 : 2;
  },
  19: function(n) {
    return n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
  },
  20: function(n) {
    return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;
  },
  21: function(n) {
    return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0;
  },
  22: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3;
  }
};
const rh = ["v1", "v2", "v3"], oh = ["v4"], Vs = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function ih() {
  const n = {};
  return th.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: nh[e.fc]
      };
    });
  }), n;
}
class ah {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = At.create("pluralResolver"), (!this.options.compatibilityJSON || oh.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = ih();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(mo(e === "dev" ? "en" : e), {
          type: t.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, t);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((o) => `${t}${o}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, t);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Vs[o] - Vs[i]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(e, o, t)) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(e, r);
    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(t)}` : this.getSuffixRetroCompatible(o, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let o = e.numbers[r];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
    const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !rh.includes(this.options.compatibilityJSON);
  }
}
function Gs(n, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Wf(n, e, t);
  return !i && o && typeof t == "string" && (i = Ui(n, t, r), i === void 0 && (i = Ui(e, t, r))), i;
}
class sh {
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
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: a,
      suffix: s,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: p,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: b,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Qf, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Bn(i) : a || "{{", this.suffix = s ? Bn(s) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? Bn(f) : h || Bn("$t("), this.nestingSuffix = p ? Bn(p) : g || Bn(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => t && t.source === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, o) {
    let i, a, s;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(p) {
      return p.replace(/\$/g, "$$$$");
    }
    const u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const C = Gs(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, r, {
          ...o,
          ...t,
          interpolationkey: p
        }) : C;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), b = g.join(this.formatSeparator).trim();
      return this.format(Gs(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), b, r, {
        ...o,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const d = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, f = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
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
          if (typeof d == "function") {
            const b = d(e, i, o);
            a = typeof b == "string" ? b : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            a = "";
          else if (f) {
            a = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), a = "";
        else
          typeof a != "string" && !this.useRawValueToEscape && (a = Bs(a));
        const m = p.safeValue(a);
        if (e = e.replace(i[0], m), f ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, i, a;
    function s(c, l) {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0)
        return c;
      const d = c.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      c = d[0], f = this.interpolate(f, a);
      const h = f.match(/'/g), p = f.match(/"/g);
      (h && h.length % 2 === 0 && !p || p.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        a = JSON.parse(f), l && (a = {
          ...l,
          ...a
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, g), `${c}${u}${f}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    }
    for (; o = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...r
      }, a = a.replace && typeof a.replace != "string" ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((d) => d.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (i = t(s.call(this, o[1].trim(), a), a), i && o[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = Bs(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function ch(n) {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const r = n.split("(");
    e = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
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
function zn(n) {
  const e = {};
  return function(r, o, i) {
    const a = o + JSON.stringify(i);
    let s = e[a];
    return s || (s = n(mo(o), i), e[a] = s), s(r);
  };
}
class lh {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = At.create("formatter"), this.options = e, this.formats = {
      number: zn((t, r) => {
        const o = new Intl.NumberFormat(t, {
          ...r
        });
        return (i) => o.format(i);
      }),
      currency: zn((t, r) => {
        const o = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: zn((t, r) => {
        const o = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (i) => o.format(i);
      }),
      relativetime: zn((t, r) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (i) => o.format(i, r.range || "day");
      }),
      list: zn((t, r) => {
        const o = new Intl.ListFormat(t, {
          ...r
        });
        return (i) => o.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = zn(t);
  }
  format(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((s, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = ch(c);
      if (this.formats[l]) {
        let d = s;
        try {
          const f = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, h = f.locale || f.lng || o.locale || o.lng || r;
          d = this.formats[l](s, h, {
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
      return s;
    }, e);
  }
}
function uh(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class dh extends Go {
  constructor(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = At.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(e, t, r, o) {
    const i = {}, a = {}, s = {}, c = {};
    return e.forEach((l) => {
      let u = !0;
      t.forEach((d) => {
        const f = `${l}|${d}`;
        !r.reload && this.store.hasResourceBundle(l, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? a[f] === void 0 && (a[f] = !0) : (this.state[f] = 1, u = !1, a[f] === void 0 && (a[f] = !0), i[f] === void 0 && (i[f] = !0), c[d] === void 0 && (c[d] = !0)));
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
  loaded(e, t, r) {
    const o = e.split("|"), i = o[0], a = o[1];
    t && this.emit("failedLoading", i, a, t), r && this.store.addResourceBundle(i, a, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2;
    const s = {};
    this.queue.forEach((c) => {
      Gf(c.loaded, [i], a), uh(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        s[l] || (s[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((d) => {
          s[l][d] === void 0 && (s[l][d] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
        tried: o,
        wait: i,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const s = (l, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (l && u && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, o + 1, i * 2, a);
        }, i);
        return;
      }
      a(l, u);
    }, c = this.backend[r].bind(this.backend);
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
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const i = this.queueLoad(e, t, r, o);
    if (!i.toLoad.length)
      return i.pending.length || o(), null;
    i.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, r) {
    this.prepareLoading(e, t, {}, r);
  }
  reload(e, t, r) {
    this.prepareLoading(e, t, {
      reload: !0
    }, r);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"), o = r[0], i = r[1];
    this.read(o, i, "read", void 0, void 0, (a, s) => {
      a && this.logger.warn(`${t}loading namespace ${i} for language ${o} failed`, a), !a && s && this.logger.log(`${t}loaded namespace ${i} for language ${o}`, s), this.loaded(e, a, s);
    });
  }
  saveMissing(e, t, r, o, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const c = {
          ...a,
          isUpdate: i
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let u;
            l.length === 5 ? u = l(e, t, r, o, c) : u = l(e, t, r, o), u && typeof u.then == "function" ? u.then((d) => s(null, d)).catch(s) : s(null, u);
          } catch (u) {
            s(u);
          }
        else
          l(e, t, r, o, s, c);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, o);
    }
  }
}
function Ws() {
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
        const r = e[3] || e[2];
        Object.keys(r).forEach((o) => {
          t[o] = r[o];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
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
function Ys(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function no() {
}
function fh(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class xr extends Go {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ys(e), this.services = {}, this.logger = At, this.modules = {
      external: []
    }, fh(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const o = Ws();
    this.options = {
      ...o,
      ...this.options,
      ...Ys(t)
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
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = lh);
      const d = new qs(this.options);
      this.store = new $s(this.options.resources, this.options);
      const f = this.services;
      f.logger = At, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new ah(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new sh(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new dh(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(h) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(h, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new yo(this.services, this.options), this.translator.on("*", function(h) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(h, ...g);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = no), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = gr(), l = () => {
      const u = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : no;
    const o = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const i = [], a = (s) => {
        if (!s || s === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((l) => {
          l !== "cimode" && i.indexOf(l) < 0 && i.push(l);
        });
      };
      o ? a(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => a(c)), this.options.preload && this.options.preload.forEach((s) => a(s)), this.services.backendConnector.load(i, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(s);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const o = gr();
    return e || (e = this.languages), t || (t = this.options.ns), r || (r = no), this.services.backendConnector.reload(e, t, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Pl.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const r = this.languages[t];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var r = this;
    this.isLanguageChangingTo = e;
    const o = gr();
    this.emit("languageChanging", e);
    const i = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, a = (c, l) => {
      l ? (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return r.t(...arguments);
      }), t && t(c, function() {
        return r.t(...arguments);
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
  getFixedT(e, t, r) {
    var o = this;
    const i = function(a, s) {
      let c;
      if (typeof s != "object") {
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), d = 2; d < l; d++)
          u[d - 2] = arguments[d];
        c = o.options.overloadTranslationOptionHandler([a, s].concat(u));
      } else
        c = {
          ...s
        };
      c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix = c.keyPrefix || r || i.keyPrefix;
      const f = o.options.keySeparator || ".";
      let h;
      return c.keyPrefix && Array.isArray(a) ? h = a.map((p) => `${c.keyPrefix}${f}${p}`) : h = c.keyPrefix ? `${c.keyPrefix}${f}${a}` : a, o.t(h, c);
    };
    return typeof e == "string" ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = r, i;
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
    const r = t.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
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
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, e) && (!o || a(i, e)));
  }
  loadNamespaces(e, t) {
    const r = gr();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), t && t(o);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = gr();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], i = e.filter((a) => o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new qs(Ws());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new xr(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : no;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new xr(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new $s(this.store.data, o), i.services.resourceStore = i.store), i.translator = new yo(i.services, o), i.translator.on("*", function(s) {
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
const xe = xr.createInstance();
xe.createInstance = xr.createInstance;
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
function hh() {
  if (console && console.warn) {
    for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Qs = {};
function Hi() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Qs[e[0]] || (typeof e[0] == "string" && (Qs[e[0]] = /* @__PURE__ */ new Date()), hh(...e));
}
const Ol = (n, e) => () => {
  if (n.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        n.off("initialized", t);
      }, 0), e();
    };
    n.on("initialized", t);
  }
};
function Js(n, e, t) {
  n.loadNamespaces(e, Ol(n, t));
}
function Xs(n, e, t, r) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    n.options.ns.indexOf(o) < 0 && n.options.ns.push(o);
  }), n.loadLanguages(e, Ol(n, r));
}
function ph(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = e.languages[0], o = e.options ? e.options.fallbackLng : !1, i = e.languages[e.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  const a = (s, c) => {
    const l = e.services.backendConnector.state[`${s}|${c}`];
    return l === -1 || l === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !a(e.isLanguageChangingTo, n) ? !1 : !!(e.hasResourceBundle(r, n) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || a(r, n) && (!o || a(i, n)));
}
function gh(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Hi("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(n, {
    lng: t.lng,
    precheck: (o, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, n))
        return !1;
    }
  }) : ph(n, e, t);
}
const mh = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, yh = {
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
}, vh = (n) => yh[n], bh = (n) => n.replace(mh, vh);
let Bi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: bh
};
function Ch() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Bi = {
    ...Bi,
    ...n
  };
}
function wh() {
  return Bi;
}
let Ml;
function Sh(n) {
  Ml = n;
}
function Th() {
  return Ml;
}
const Eh = {
  type: "3rdParty",
  init(n) {
    Ch(n.options.react), Sh(n);
  }
}, Ih = Mn();
class _h {
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
const kh = (n, e) => {
  const t = ue();
  return Y(() => {
    t.current = e ? t.current : n;
  }, [n, e]), t.current;
};
function va(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: o
  } = ln(Ih) || {}, i = t || r || Th();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new _h()), !i) {
    Hi("You will need to pass in an i18next instance by using initReactI18next");
    const v = (S, E) => typeof E == "string" ? E : E && typeof E == "object" && typeof E.defaultValue == "string" ? E.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, w = [v, {}, !1];
    return w.t = v, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && Hi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...wh(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: c
  } = a;
  let l = n || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((v) => gh(v, i, a));
  function d() {
    return i.getFixedT(e.lng || null, a.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, h] = X(d);
  let p = l.join();
  e.lng && (p = `${e.lng}${p}`);
  const g = kh(p), m = ue(!0);
  Y(() => {
    const {
      bindI18n: v,
      bindI18nStore: w
    } = a;
    m.current = !0, !u && !s && (e.lng ? Xs(i, e.lng, l, () => {
      m.current && h(d);
    }) : Js(i, l, () => {
      m.current && h(d);
    })), u && g && g !== p && m.current && h(d);
    function S() {
      m.current && h(d);
    }
    return v && i && i.on(v, S), w && i && i.store.on(w, S), () => {
      m.current = !1, v && i && v.split(" ").forEach((E) => i.off(E, S)), w && i && w.split(" ").forEach((E) => i.store.off(E, S));
    };
  }, [i, p]);
  const b = ue(!0);
  Y(() => {
    m.current && !b.current && h(d), b.current = !1;
  }, [i, c]);
  const C = [f, i, u];
  if (C.t = f, C.i18n = i, C.ready = u, u || !u && !s)
    return C;
  throw new Promise((v) => {
    e.lng ? Xs(i, e.lng, l, () => v()) : Js(i, l, () => v());
  });
}
const Ah = {
  apply: "تطبيق",
  save: "حفظ",
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
}, Rh = {
  translation: Ah
}, Nh = {
  apply: "Použít",
  save: "Uložit",
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
}, Ph = {
  translation: Nh
}, Oh = {
  apply: "Anvend",
  save: "Gem",
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
}, Mh = {
  translation: Oh
}, xh = {
  apply: "Anwenden",
  save: "Speichern",
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
}, Dh = {
  translation: xh
}, Lh = {
  apply: "Assign",
  save: "Save",
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
}, jh = {
  translation: Lh
}, Fh = {
  apply: "Aplicar",
  save: "Guardar",
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
}, Uh = {
  translation: Fh
}, Hh = {
  apply: "Käytä",
  save: "Tallenna",
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
}, Bh = {
  translation: Hh
}, zh = {
  apply: "Appliquer",
  save: "Enregistrer",
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
}, $h = {
  translation: zh
}, Kh = {
  apply: "लागू करें",
  save: "सहेजें",
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
}, qh = {
  translation: Kh
}, Vh = {
  apply: "Primijeni",
  save: "Spremi",
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
}, Gh = {
  translation: Vh
}, Wh = {
  apply: "Nota",
  save: "Vista",
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
}, Yh = {
  translation: Wh
}, Qh = {
  apply: "Applica",
  save: "Salva",
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
}, Jh = {
  translation: Qh
}, Xh = {
  apply: "適用",
  save: "保存",
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
}, Zh = {
  translation: Xh
}, ep = {
  apply: "적용",
  save: "저장",
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
}, tp = {
  translation: ep
}, np = {
  apply: "Taikyti",
  save: "Išsaugoti",
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
}, rp = {
  translation: np
}, op = {
  apply: "Toewijzen",
  save: "Opslaan",
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
}, ip = {
  translation: op
}, ap = {
  apply: "Bruk",
  save: "Lagre",
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
}, sp = {
  translation: ap
}, cp = {
  apply: "Zastosuj",
  save: "Zapisz",
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
}, lp = {
  translation: cp
}, up = {
  apply: "Aplicar",
  save: "Salvar",
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
}, dp = {
  translation: up
}, fp = {
  apply: "Aplicar",
  save: "Guardar",
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
}, hp = {
  translation: fp
}, pp = {
  apply: "Aplică",
  save: "Salvează",
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
}, gp = {
  translation: pp
}, mp = {
  apply: "Uporabi",
  save: "Shrani",
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
}, yp = {
  translation: mp
}, vp = {
  apply: "Primeni",
  save: "Sačuvaj",
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
}, bp = {
  translation: vp
}, Cp = {
  apply: "Tillämpa",
  save: "Spara",
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
}, wp = {
  translation: Cp
}, Sp = {
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
}, Tp = {
  translation: Sp
}, Ep = {
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
}, Ip = {
  translation: Ep
};
xe.use(Eh).init({
  resources: {
    "en-GB": jh,
    "nl-NL": ip,
    "ar-SA": Rh,
    "zh-CN": Ip,
    "hr-HR": Gh,
    "cs-CZ": Ph,
    "da-DK": Mh,
    "fi-FI": Bh,
    "fr-FR": $h,
    "de-DE": Dh,
    "hi-IN": qh,
    "is-IS": Yh,
    "it-IT": Jh,
    "ja-JP": Zh,
    "ko-KR": tp,
    "lt-LT": rp,
    "no-NO": sp,
    "pl-PL": lp,
    "pt-PT": hp,
    "pt-BR": dp,
    "ro-RO": gp,
    "sr-SP": bp,
    "sl-SI": yp,
    "es-ES": Uh,
    "sv-SE": wp,
    "tr-TR": Tp
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
var zi = function(n, e) {
  return zi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, zi(n, e);
};
function De(n, e) {
  zi(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var B = function() {
  return B = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, B.apply(this, arguments);
};
function Zs(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
      e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (t[r[o]] = n[r[o]]);
  return t;
}
function R(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
}
function N(n, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
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
        l = e.call(n, t);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        r = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function _p(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var r = t.call(n), o, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (t = r.return) && t.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function ba() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n = n.concat(_p(arguments[e]));
  return n;
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
var $i = function(n, e) {
  return $i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, $i(n, e);
};
function et(n, e) {
  $i(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var he = function() {
  return he = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, he.apply(this, arguments);
};
function ne(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
}
function re(n, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
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
        l = e.call(n, t);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        r = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Wo() {
  for (var n = 0, e = 0, t = arguments.length; e < t; e++)
    n += arguments[e].length;
  for (var r = Array(n), o = 0, e = 0; e < t; e++)
    for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
      r[o] = i[a];
  return r;
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var T = {
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
}, qr = [
  T.OPENID_SCOPE,
  T.PROFILE_SCOPE,
  T.OFFLINE_ACCESS_SCOPE
], ec = Wo(qr, [
  T.EMAIL_SCOPE
]), ot;
(function(n) {
  n.CONTENT_TYPE = "Content-Type", n.RETRY_AFTER = "Retry-After", n.CCS_HEADER = "X-AnchorMailbox", n.WWWAuthenticate = "WWW-Authenticate", n.AuthenticationInfo = "Authentication-Info", n.X_MS_REQUEST_ID = "x-ms-request-id", n.X_MS_HTTP_VERSION = "x-ms-httpver";
})(ot || (ot = {}));
var _e;
(function(n) {
  n.ID_TOKEN = "idtoken", n.CLIENT_INFO = "client.info", n.ADAL_ID_TOKEN = "adal.idtoken", n.ERROR = "error", n.ERROR_DESC = "error.description", n.ACTIVE_ACCOUNT = "active-account", n.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(_e || (_e = {}));
var En;
(function(n) {
  n.COMMON = "common", n.ORGANIZATIONS = "organizations", n.CONSUMERS = "consumers";
})(En || (En = {}));
var oe;
(function(n) {
  n.CLIENT_ID = "client_id", n.REDIRECT_URI = "redirect_uri", n.RESPONSE_TYPE = "response_type", n.RESPONSE_MODE = "response_mode", n.GRANT_TYPE = "grant_type", n.CLAIMS = "claims", n.SCOPE = "scope", n.ERROR = "error", n.ERROR_DESCRIPTION = "error_description", n.ACCESS_TOKEN = "access_token", n.ID_TOKEN = "id_token", n.REFRESH_TOKEN = "refresh_token", n.EXPIRES_IN = "expires_in", n.STATE = "state", n.NONCE = "nonce", n.PROMPT = "prompt", n.SESSION_STATE = "session_state", n.CLIENT_INFO = "client_info", n.CODE = "code", n.CODE_CHALLENGE = "code_challenge", n.CODE_CHALLENGE_METHOD = "code_challenge_method", n.CODE_VERIFIER = "code_verifier", n.CLIENT_REQUEST_ID = "client-request-id", n.X_CLIENT_SKU = "x-client-SKU", n.X_CLIENT_VER = "x-client-VER", n.X_CLIENT_OS = "x-client-OS", n.X_CLIENT_CPU = "x-client-CPU", n.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", n.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", n.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", n.X_APP_NAME = "x-app-name", n.X_APP_VER = "x-app-ver", n.POST_LOGOUT_URI = "post_logout_redirect_uri", n.ID_TOKEN_HINT = "id_token_hint", n.DEVICE_CODE = "device_code", n.CLIENT_SECRET = "client_secret", n.CLIENT_ASSERTION = "client_assertion", n.CLIENT_ASSERTION_TYPE = "client_assertion_type", n.TOKEN_TYPE = "token_type", n.REQ_CNF = "req_cnf", n.OBO_ASSERTION = "assertion", n.REQUESTED_TOKEN_USE = "requested_token_use", n.ON_BEHALF_OF = "on_behalf_of", n.FOCI = "foci", n.CCS_HEADER = "X-AnchorMailbox", n.RETURN_SPA_CODE = "return_spa_code", n.NATIVE_BROKER = "nativebroker", n.LOGOUT_HINT = "logout_hint";
})(oe || (oe = {}));
var Vn;
(function(n) {
  n.ACCESS_TOKEN = "access_token", n.XMS_CC = "xms_cc";
})(Vn || (Vn = {}));
var Ue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Er;
(function(n) {
  n.ACCOUNT = "account", n.SID = "sid", n.LOGIN_HINT = "login_hint", n.ID_TOKEN = "id_token", n.DOMAIN_HINT = "domain_hint", n.ORGANIZATIONS = "organizations", n.CONSUMERS = "consumers", n.ACCOUNT_ID = "accountIdentifier", n.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Er || (Er = {}));
var tc = {
  PLAIN: "plain",
  S256: "S256"
}, vo;
(function(n) {
  n.QUERY = "query", n.FRAGMENT = "fragment", n.FORM_POST = "form_post";
})(vo || (vo = {}));
var bo;
(function(n) {
  n.IMPLICIT_GRANT = "implicit", n.AUTHORIZATION_CODE_GRANT = "authorization_code", n.CLIENT_CREDENTIALS_GRANT = "client_credentials", n.RESOURCE_OWNER_PASSWORD_GRANT = "password", n.REFRESH_TOKEN_GRANT = "refresh_token", n.DEVICE_CODE_GRANT = "device_code", n.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(bo || (bo = {}));
var wn;
(function(n) {
  n.MSSTS_ACCOUNT_TYPE = "MSSTS", n.ADFS_ACCOUNT_TYPE = "ADFS", n.MSAV1_ACCOUNT_TYPE = "MSA", n.GENERIC_ACCOUNT_TYPE = "Generic";
})(wn || (wn = {}));
var Ae;
(function(n) {
  n.CACHE_KEY_SEPARATOR = "-", n.CLIENT_INFO_SEPARATOR = ".";
})(Ae || (Ae = {}));
var W;
(function(n) {
  n.ID_TOKEN = "IdToken", n.ACCESS_TOKEN = "AccessToken", n.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", n.REFRESH_TOKEN = "RefreshToken";
})(W || (W = {}));
var Ir;
(function(n) {
  n[n.ADFS = 1001] = "ADFS", n[n.MSA = 1002] = "MSA", n[n.MSSTS = 1003] = "MSSTS", n[n.GENERIC = 1004] = "GENERIC", n[n.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", n[n.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", n[n.ID_TOKEN = 2003] = "ID_TOKEN", n[n.APP_METADATA = 3001] = "APP_METADATA", n[n.UNDEFINED = 9999] = "UNDEFINED";
})(Ir || (Ir = {}));
var Ki = "appmetadata", kp = "client_info", _r = "1", kr = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, dt;
(function(n) {
  n.CONFIG = "config", n.CACHE = "cache", n.NETWORK = "network", n.HARDCODED_VALUES = "hardcoded_values";
})(dt || (dt = {}));
var Oe = {
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
(function(n) {
  n.BEARER = "Bearer", n.POP = "pop", n.SSH = "ssh-cert";
})(ge || (ge = {}));
var Ar = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, nc = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Co;
(function(n) {
  n.username = "username", n.password = "password";
})(Co || (Co = {}));
var Gn;
(function(n) {
  n[n.httpSuccess = 200] = "httpSuccess", n[n.httpBadRequest = 400] = "httpBadRequest";
})(Gn || (Gn = {}));
var Xt;
(function(n) {
  n.FAILED_AUTO_DETECTION = "1", n.INTERNAL_CACHE = "2", n.ENVIRONMENT_VARIABLE = "3", n.IMDS = "4";
})(Xt || (Xt = {}));
var Rr;
(function(n) {
  n.CONFIGURED_MATCHES_DETECTED = "1", n.CONFIGURED_NO_AUTO_DETECTION = "2", n.CONFIGURED_NOT_DETECTED = "3", n.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", n.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Rr || (Rr = {}));
var en;
(function(n) {
  n.NO_CACHE_HIT = "0", n.FORCE_REFRESH = "1", n.NO_CACHED_ACCESS_TOKEN = "2", n.CACHED_ACCESS_TOKEN_EXPIRED = "3", n.REFRESH_CACHED_ACCESS_TOKEN = "4", n.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(en || (en = {}));
var qi;
(function(n) {
  n.Jwt = "JWT", n.Jwk = "JWK", n.Pop = "pop";
})(qi || (qi = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ro = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, K = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r, o) {
      var i = this, a = r ? t + ": " + r : t;
      return i = n.call(this, a) || this, Object.setPrototypeOf(i, e.prototype), i.errorCode = t || T.EMPTY_STRING, i.errorMessage = r || T.EMPTY_STRING, i.subError = o || T.EMPTY_STRING, i.name = "AuthError", i;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(ro.unexpectedError.code, ro.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(ro.postRequestFailed.code, ro.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var wo = {
  createNewGuid: function() {
    var n = "Crypto interface - createNewGuid() has not been implemented";
    throw K.createUnexpectedError(n);
  },
  base64Decode: function() {
    var n = "Crypto interface - base64Decode() has not been implemented";
    throw K.createUnexpectedError(n);
  },
  base64Encode: function() {
    var n = "Crypto interface - base64Encode() has not been implemented";
    throw K.createUnexpectedError(n);
  },
  generatePkceCodes: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Crypto interface - generatePkceCodes() has not been implemented", K.createUnexpectedError(n);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Crypto interface - getPublicKeyThumbprint() has not been implemented", K.createUnexpectedError(n);
      });
    });
  },
  removeTokenBindingKey: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Crypto interface - removeTokenBindingKey() has not been implemented", K.createUnexpectedError(n);
      });
    });
  },
  clearKeystore: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Crypto interface - clearKeystore() has not been implemented", K.createUnexpectedError(n);
      });
    });
  },
  signJwt: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Crypto interface - signJwt() has not been implemented", K.createUnexpectedError(n);
      });
    });
  },
  hashString: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Crypto interface - hashString() has not been implemented", K.createUnexpectedError(n);
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
  function(n) {
    et(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
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
    }, e.createNetworkError = function(t, r) {
      return new e(O.networkError.code, O.networkError.desc + " | Fetch client threw: " + r + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToGetOpenidConfigError = function(t) {
      return new e(O.unableToGetOpenidConfigError.code, O.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + t);
    }, e.createHashNotDeserializedError = function(t) {
      return new e(O.hashNotDeserialized.code, O.hashNotDeserialized.desc + " Given Object: " + t);
    }, e.createInvalidStateError = function(t, r) {
      return new e(O.invalidStateError.code, O.invalidStateError.desc + " Invalid State: " + t + ", Root Err: " + r);
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
  }(K)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var U = (
  /** @class */
  function() {
    function n() {
    }
    return n.decodeAuthToken = function(e) {
      if (n.isEmpty(e))
        throw z.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, r = t.exec(e);
      if (!r || r.length < 4)
        throw z.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
      var o = {
        header: r[1],
        JWSPayload: r[2],
        JWSSig: r[3]
      };
      return o;
    }, n.isEmpty = function(e) {
      return typeof e > "u" || !e || e.length === 0;
    }, n.isEmptyObj = function(e) {
      if (e && !n.isEmpty(e))
        try {
          var t = JSON.parse(e);
          return Object.keys(t).length === 0;
        } catch {
        }
      return !0;
    }, n.startsWith = function(e, t) {
      return e.indexOf(t) === 0;
    }, n.endsWith = function(e, t) {
      return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
    }, n.queryStringToObject = function(e) {
      var t = {}, r = e.split("&"), o = function(i) {
        return decodeURIComponent(i.replace(/\+/g, " "));
      };
      return r.forEach(function(i) {
        if (i.trim()) {
          var a = i.split(/=(.+)/g, 2), s = a[0], c = a[1];
          s && c && (t[o(s)] = o(c));
        }
      }), t;
    }, n.trimArrayEntries = function(e) {
      return e.map(function(t) {
        return t.trim();
      });
    }, n.removeEmptyStringsFromArray = function(e) {
      return e.filter(function(t) {
        return !n.isEmpty(t);
      });
    }, n.jsonParseHelper = function(e) {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    }, n.matchPattern = function(e, t) {
      var r = new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
      return r.test(t);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var we;
(function(n) {
  n[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Info = 2] = "Info", n[n.Verbose = 3] = "Verbose", n[n.Trace = 4] = "Trace";
})(we || (we = {}));
var Ca = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.level = we.Info;
      var o = function() {
      }, i = e || n.createDefaultLoggerOptions();
      this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || !1, this.level = typeof i.logLevel == "number" ? i.logLevel : we.Info, this.correlationId = i.correlationId || T.EMPTY_STRING, this.packageName = t || T.EMPTY_STRING, this.packageVersion = r || T.EMPTY_STRING;
    }
    return n.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: we.Info
      };
    }, n.prototype.clone = function(e, t, r) {
      return new n({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: r || this.correlationId }, e, t);
    }, n.prototype.logMessage = function(e, t) {
      if (!(t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii)) {
        var r = (/* @__PURE__ */ new Date()).toUTCString(), o;
        U.isEmpty(t.correlationId) ? U.isEmpty(this.correlationId) ? o = "[" + r + "]" : o = "[" + r + "] : [" + this.correlationId + "]" : o = "[" + r + "] : [" + t.correlationId + "]";
        var i = o + " : " + this.packageName + "@" + this.packageVersion + " : " + we[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, i, t.containsPii || !1);
      }
    }, n.prototype.executeCallback = function(e, t, r) {
      this.localCallback && this.localCallback(e, t, r);
    }, n.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Error,
        containsPii: !1,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Error,
        containsPii: !0,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Warning,
        containsPii: !1,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Warning,
        containsPii: !0,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Info,
        containsPii: !1,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Info,
        containsPii: !0,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Verbose,
        containsPii: !1,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Verbose,
        containsPii: !0,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Trace,
        containsPii: !1,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Trace,
        containsPii: !0,
        correlationId: t || T.EMPTY_STRING
      });
    }, n.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xl = "@azure/msal-common", wa = "13.3.3";
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Dr;
(function(n) {
  n[n.None = 0] = "None", n.AzurePublic = "https://login.microsoftonline.com", n.AzurePpe = "https://login.windows-ppe.net", n.AzureChina = "https://login.chinacloudapi.cn", n.AzureGermany = "https://login.microsoftonline.de", n.AzureUsGovernment = "https://login.microsoftonline.us";
})(Dr || (Dr = {}));
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
}, be = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
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
    }, e.createInvalidAuthenticationHeaderError = function(t, r) {
      return new e(te.invalidAuthenticationHeader.code, te.invalidAuthenticationHeader.desc + ". Invalid header: " + t + ". Details: " + r);
    }, e.createAuthorityMismatchError = function() {
      return new e(te.authorityMismatch.code, te.authorityMismatch.desc);
    }, e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var je = (
  /** @class */
  function() {
    function n(e) {
      var t = this, r = e ? U.trimArrayEntries(Wo(e)) : [], o = r ? U.removeEmptyStringsFromArray(r) : [];
      this.validateInputScopes(o), this.scopes = /* @__PURE__ */ new Set(), o.forEach(function(i) {
        return t.scopes.add(i);
      });
    }
    return n.fromString = function(e) {
      var t = e || T.EMPTY_STRING, r = t.split(" ");
      return new n(r);
    }, n.createSearchScopes = function(e) {
      var t = new n(e);
      return t.containsOnlyOIDCScopes() ? t.removeScope(T.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t;
    }, n.prototype.validateInputScopes = function(e) {
      if (!e || e.length < 1)
        throw be.createEmptyScopesArrayError();
    }, n.prototype.containsScope = function(e) {
      var t = this.printScopesLowerCase().split(" "), r = new n(t);
      return U.isEmpty(e) ? !1 : r.scopes.has(e.toLowerCase());
    }, n.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(r) {
        return t.containsScope(r);
      });
    }, n.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return ec.forEach(function(r) {
        e.containsScope(r) && (t += 1);
      }), this.scopes.size === t;
    }, n.prototype.appendScope = function(e) {
      U.isEmpty(e) || this.scopes.add(e.trim());
    }, n.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(r) {
          return t.appendScope(r);
        });
      } catch (r) {
        throw z.createAppendScopeSetError(r);
      }
    }, n.prototype.removeScope = function(e) {
      if (U.isEmpty(e))
        throw z.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, n.prototype.removeOIDCScopes = function() {
      var e = this;
      ec.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, n.prototype.unionScopeSets = function(e) {
      if (!e)
        throw z.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(r) {
        return t.add(r.toLowerCase());
      }), this.scopes.forEach(function(r) {
        return t.add(r.toLowerCase());
      }), t;
    }, n.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw z.createEmptyInputScopeSetError();
      e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
      var t = this.unionScopeSets(e), r = e.getScopeCount(), o = this.getScopeCount(), i = t.size;
      return i < o + r;
    }, n.prototype.getScopeCount = function() {
      return this.scopes.size;
    }, n.prototype.asArray = function() {
      var e = [];
      return this.scopes.forEach(function(t) {
        return e.push(t);
      }), e;
    }, n.prototype.printScopes = function() {
      if (this.scopes) {
        var e = this.asArray();
        return e.join(" ");
      }
      return T.EMPTY_STRING;
    }, n.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function So(n, e) {
  if (U.isEmpty(n))
    throw z.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(n);
    return JSON.parse(t);
  } catch (r) {
    throw z.createClientInfoDecodingError(r.message);
  }
}
function Wn(n) {
  if (U.isEmpty(n))
    throw z.createClientInfoDecodingError("Home account ID was empty.");
  var e = n.split(Ae.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? T.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ye;
(function(n) {
  n[n.Default = 0] = "Default", n[n.Adfs = 1] = "Adfs", n[n.Dsts = 2] = "Dsts", n[n.Ciam = 3] = "Ciam";
})(Ye || (Ye = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var tr;
(function(n) {
  n.AAD = "AAD", n.OIDC = "OIDC";
})(tr || (tr = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var He = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.generateAccountId = function() {
      var e = [this.homeAccountId, this.environment];
      return e.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.prototype.generateAccountKey = function() {
      return n.generateAccountCacheKey({
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId
      });
    }, n.prototype.getAccountInfo = function() {
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
    }, n.generateAccountCacheKey = function(e) {
      var t = [
        e.homeAccountId,
        e.environment || T.EMPTY_STRING,
        e.tenantId || T.EMPTY_STRING
      ];
      return t.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.createAccount = function(e, t) {
      var r = new n();
      t.authorityType === Ye.Adfs ? r.authorityType = wn.ADFS_ACCOUNT_TYPE : t.protocolMode === tr.AAD ? r.authorityType = wn.MSSTS_ACCOUNT_TYPE : r.authorityType = wn.GENERIC_ACCOUNT_TYPE, r.clientInfo = e.clientInfo, r.homeAccountId = e.homeAccountId, r.nativeAccountId = e.nativeAccountId;
      var o = e.environment || t && t.getPreferredCache();
      if (!o)
        throw z.createInvalidCacheEnvironmentError();
      if (r.environment = o, r.realm = e.idTokenClaims.tid || T.EMPTY_STRING, r.idTokenClaims = e.idTokenClaims, r.localAccountId = e.idTokenClaims.oid || e.idTokenClaims.sub || T.EMPTY_STRING, r.authorityType === wn.MSSTS_ACCOUNT_TYPE) {
        var i = e.idTokenClaims.preferred_username, a = e.idTokenClaims.emails ? e.idTokenClaims.emails[0] : null;
        r.username = i || a || "";
      } else
        r.username = e.idTokenClaims.upn || "";
      return r.name = e.idTokenClaims.name, r.cloudGraphHostName = e.cloudGraphHostName, r.msGraphHost = e.msGraphHost, r;
    }, n.createFromAccountInfo = function(e, t, r) {
      var o = new n();
      return o.authorityType = e.authorityType || wn.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.idTokenClaims = e.idTokenClaims, o.cloudGraphHostName = t, o.msGraphHost = r, o;
    }, n.generateHomeAccountId = function(e, t, r, o, i) {
      var a = i != null && i.sub ? i.sub : T.EMPTY_STRING;
      if (t === Ye.Adfs || t === Ye.Dsts)
        return a;
      if (e)
        try {
          var s = So(e, o);
          if (!U.isEmpty(s.uid) && !U.isEmpty(s.utid))
            return "" + s.uid + Ae.CLIENT_INFO_SEPARATOR + s.utid;
        } catch {
        }
      return r.verbose("No client info in response"), a;
    }, n.isAccountEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType") : !1;
    }, n.accountInfoIsEqual = function(e, t, r) {
      if (!e || !t)
        return !1;
      var o = !0;
      if (r) {
        var i = e.idTokenClaims || {}, a = t.idTokenClaims || {};
        o = i.iat === a.iat && i.nonce === a.nonce;
      }
      return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && o;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ot = (
  /** @class */
  function() {
    function n(e, t) {
      if (U.isEmpty(e))
        throw z.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = n.extractTokenClaims(e, t);
    }
    return n.extractTokenClaims = function(e, t) {
      var r = U.decodeAuthToken(e);
      try {
        var o = r.JWSPayload, i = t.base64Decode(o);
        return JSON.parse(i);
      } catch (a) {
        throw z.createTokenParsingError(a);
      }
    }, n.checkMaxAge = function(e, t) {
      var r = 3e5;
      if (t === 0 || Date.now() - r > e + t)
        throw z.createMaxAgeTranspiredError();
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var We = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = r.clone(xl, wa);
    }
    return n.prototype.getAllAccounts = function() {
      var e = this, t = this.getAccountKeys();
      if (t.length < 1)
        return [];
      var r = t.reduce(function(i, a) {
        var s = e.getAccount(a);
        return s && i.push(s), i;
      }, []);
      if (r.length < 1)
        return [];
      var o = r.map(function(i) {
        return e.getAccountInfoFromEntity(i);
      });
      return o;
    }, n.prototype.getAccountInfoFilteredBy = function(e) {
      var t = this.getAccountsFilteredBy(e);
      return t.length > 0 ? this.getAccountInfoFromEntity(t[0]) : null;
    }, n.prototype.getAccountInfoFromEntity = function(e) {
      var t = e.getAccountInfo(), r = this.getIdToken(t);
      return r && (t.idToken = r.secret, t.idTokenClaims = new Ot(r.secret, this.cryptoImpl).claims), t;
    }, n.prototype.saveCacheRecord = function(e) {
      return ne(this, void 0, void 0, function() {
        return re(this, function(t) {
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
    }, n.prototype.saveAccessToken = function(e) {
      return ne(this, void 0, void 0, function() {
        var t, r, o, i, a = this;
        return re(this, function(s) {
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
              }, r = this.getTokenKeys(), o = je.fromString(e.target), i = [], r.accessToken.forEach(function(c) {
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
    }, n.prototype.getAccountsFilteredBy = function(e) {
      var t = this, r = this.getAccountKeys(), o = [];
      return r.forEach(function(i) {
        if (t.isAccountKey(i, e.homeAccountId, e.realm)) {
          var a = t.getAccount(i);
          a && (e.homeAccountId && !t.matchHomeAccountId(a, e.homeAccountId) || e.localAccountId && !t.matchLocalAccountId(a, e.localAccountId) || e.username && !t.matchUsername(a, e.username) || e.environment && !t.matchEnvironment(a, e.environment) || e.realm && !t.matchRealm(a, e.realm) || e.nativeAccountId && !t.matchNativeAccountId(a, e.nativeAccountId) || o.push(a));
        }
      }), o;
    }, n.prototype.isAccountKey = function(e, t, r) {
      return !(e.split(Ae.CACHE_KEY_SEPARATOR).length < 3 || t && !e.toLowerCase().includes(t.toLowerCase()) || r && !e.toLowerCase().includes(r.toLowerCase()));
    }, n.prototype.isCredentialKey = function(e) {
      if (e.split(Ae.CACHE_KEY_SEPARATOR).length < 6)
        return !1;
      var t = e.toLowerCase();
      if (t.indexOf(W.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(W.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(W.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(W.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(W.REFRESH_TOKEN.toLowerCase()) > -1) {
        var r = "" + W.REFRESH_TOKEN + Ae.CACHE_KEY_SEPARATOR + this.clientId + Ae.CACHE_KEY_SEPARATOR, o = "" + W.REFRESH_TOKEN + Ae.CACHE_KEY_SEPARATOR + _r + Ae.CACHE_KEY_SEPARATOR;
        if (t.indexOf(r.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, n.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === W.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === ge.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
    }, n.prototype.getAppMetadataFilteredBy = function(e) {
      return this.getAppMetadataFilteredByInternal(e.environment, e.clientId);
    }, n.prototype.getAppMetadataFilteredByInternal = function(e, t) {
      var r = this, o = this.getKeys(), i = {};
      return o.forEach(function(a) {
        if (r.isAppMetadata(a)) {
          var s = r.getAppMetadata(a);
          s && (e && !r.matchEnvironment(s, e) || t && !r.matchClientId(s, t) || (i[a] = s));
        }
      }), i;
    }, n.prototype.getAuthorityMetadataByAlias = function(e) {
      var t = this, r = this.getAuthorityMetadataKeys(), o = null;
      return r.forEach(function(i) {
        if (!(!t.isAuthorityMetadata(i) || i.indexOf(t.clientId) === -1)) {
          var a = t.getAuthorityMetadata(i);
          a && a.aliases.indexOf(e) !== -1 && (o = a);
        }
      }), o;
    }, n.prototype.removeAllAccounts = function() {
      return ne(this, void 0, void 0, function() {
        var e, t, r = this;
        return re(this, function(o) {
          switch (o.label) {
            case 0:
              return e = this.getAccountKeys(), t = [], e.forEach(function(i) {
                t.push(r.removeAccount(i));
              }), [4, Promise.all(t)];
            case 1:
              return o.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.removeAccount = function(e) {
      return ne(this, void 0, void 0, function() {
        var t;
        return re(this, function(r) {
          switch (r.label) {
            case 0:
              if (t = this.getAccount(e), !t)
                throw z.createNoAccountFoundError();
              return [4, this.removeAccountContext(t)];
            case 1:
              return r.sent(), this.removeItem(e), [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.removeAccountContext = function(e) {
      return ne(this, void 0, void 0, function() {
        var t, r, o, i = this;
        return re(this, function(a) {
          switch (a.label) {
            case 0:
              return t = this.getTokenKeys(), r = e.generateAccountId(), o = [], t.idToken.forEach(function(s) {
                s.indexOf(r) === 0 && i.removeIdToken(s);
              }), t.accessToken.forEach(function(s) {
                s.indexOf(r) === 0 && o.push(i.removeAccessToken(s));
              }), t.refreshToken.forEach(function(s) {
                s.indexOf(r) === 0 && i.removeRefreshToken(s);
              }), [4, Promise.all(o)];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.removeAccessToken = function(e) {
      return ne(this, void 0, void 0, function() {
        var t, r, o;
        return re(this, function(i) {
          switch (i.label) {
            case 0:
              if (t = this.getAccessTokenCredential(e), !t)
                return [
                  2
                  /*return*/
                ];
              if (t.credentialType.toLowerCase() !== W.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (t.tokenType !== ge.POP)
                return [3, 4];
              if (r = t, o = r.keyId, !o)
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
    }, n.prototype.removeAppMetadata = function() {
      var e = this, t = this.getKeys();
      return t.forEach(function(r) {
        e.isAppMetadata(r) && e.removeItem(r);
      }), !0;
    }, n.prototype.readCacheRecord = function(e, t, r) {
      var o = this.getTokenKeys(), i = this.readAccountFromCache(e), a = this.getIdToken(e, o), s = this.getAccessToken(e, t, o), c = this.getRefreshToken(e, !1, o), l = this.readAppMetadataFromCache(r);
      return i && a && (i.idTokenClaims = new Ot(a.secret, this.cryptoImpl).claims), {
        account: i,
        idToken: a,
        accessToken: s,
        refreshToken: c,
        appMetadata: l
      };
    }, n.prototype.readAccountFromCache = function(e) {
      var t = He.generateAccountCacheKey(e);
      return this.getAccount(t);
    }, n.prototype.getIdToken = function(e, t) {
      var r = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: W.ID_TOKEN,
        clientId: this.clientId,
        realm: e.tenantId
      }, i = this.getIdTokensByFilter(o, t), a = i.length;
      return a < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : a > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), i.forEach(function(s) {
        r.removeIdToken(s.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), i[0]);
    }, n.prototype.getIdTokensByFilter = function(e, t) {
      var r = this, o = t && t.idToken || this.getTokenKeys().idToken, i = [];
      return o.forEach(function(a) {
        if (r.idTokenKeyMatchesFilter(a, he({ clientId: r.clientId }, e))) {
          var s = r.getIdTokenCredential(a);
          s && r.credentialMatchesFilter(s, e) && i.push(s);
        }
      }), i;
    }, n.prototype.idTokenKeyMatchesFilter = function(e, t) {
      var r = e.toLowerCase();
      return !(t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1);
    }, n.prototype.removeIdToken = function(e) {
      this.removeItem(e);
    }, n.prototype.removeRefreshToken = function(e) {
      this.removeItem(e);
    }, n.prototype.getAccessToken = function(e, t, r) {
      var o = this;
      this.commonLogger.trace("CacheManager - getAccessToken called");
      var i = je.createSearchScopes(t.scopes), a = t.authenticationScheme || ge.BEARER, s = a && a.toLowerCase() !== ge.BEARER.toLowerCase() ? W.ACCESS_TOKEN_WITH_AUTH_SCHEME : W.ACCESS_TOKEN, c = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: s,
        clientId: this.clientId,
        realm: e.tenantId,
        target: i,
        tokenType: a,
        keyId: t.sshKid,
        requestedClaimsHash: t.requestedClaimsHash
      }, l = r && r.accessToken || this.getTokenKeys().accessToken, u = [];
      l.forEach(function(f) {
        if (o.accessTokenKeyMatchesFilter(f, c, !0)) {
          var h = o.getAccessTokenCredential(f);
          h && o.credentialMatchesFilter(h, c) && u.push(h);
        }
      });
      var d = u.length;
      return d < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : d > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), u.forEach(function(f) {
        o.removeAccessToken(f.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), u[0]);
    }, n.prototype.accessTokenKeyMatchesFilter = function(e, t, r) {
      var o = e.toLowerCase();
      if (t.clientId && o.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && o.indexOf(t.homeAccountId.toLowerCase()) === -1 || t.realm && o.indexOf(t.realm.toLowerCase()) === -1 || t.requestedClaimsHash && o.indexOf(t.requestedClaimsHash.toLowerCase()) === -1)
        return !1;
      if (t.target)
        for (var i = t.target.asArray(), a = 0; a < i.length; a++) {
          if (r && !o.includes(i[a].toLowerCase()))
            return !1;
          if (!r && o.includes(i[a].toLowerCase()))
            return !0;
        }
      return !0;
    }, n.prototype.getAccessTokensByFilter = function(e) {
      var t = this, r = this.getTokenKeys(), o = [];
      return r.accessToken.forEach(function(i) {
        if (t.accessTokenKeyMatchesFilter(i, e, !0)) {
          var a = t.getAccessTokenCredential(i);
          a && t.credentialMatchesFilter(a, e) && o.push(a);
        }
      }), o;
    }, n.prototype.getRefreshToken = function(e, t, r) {
      var o = this;
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      var i = t ? _r : void 0, a = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: W.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: i
      }, s = r && r.refreshToken || this.getTokenKeys().refreshToken, c = [];
      s.forEach(function(u) {
        if (o.refreshTokenKeyMatchesFilter(u, a)) {
          var d = o.getRefreshTokenCredential(u);
          d && o.credentialMatchesFilter(d, a) && c.push(d);
        }
      });
      var l = c.length;
      return l < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), c[0]);
    }, n.prototype.refreshTokenKeyMatchesFilter = function(e, t) {
      var r = e.toLowerCase();
      return !(t.familyId && r.indexOf(t.familyId.toLowerCase()) === -1 || !t.familyId && t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1);
    }, n.prototype.readAppMetadataFromCache = function(e) {
      var t = {
        environment: e,
        clientId: this.clientId
      }, r = this.getAppMetadataFilteredBy(t), o = Object.keys(r).map(function(a) {
        return r[a];
      }), i = o.length;
      if (i < 1)
        return null;
      if (i > 1)
        throw z.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, n.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === _r);
    }, n.prototype.matchHomeAccountId = function(e, t) {
      return typeof e.homeAccountId == "string" && t === e.homeAccountId;
    }, n.prototype.matchLocalAccountId = function(e, t) {
      return typeof e.localAccountId == "string" && t === e.localAccountId;
    }, n.prototype.matchUsername = function(e, t) {
      return typeof e.username == "string" && t.toLowerCase() === e.username.toLowerCase();
    }, n.prototype.matchUserAssertionHash = function(e, t) {
      return !!(e.userAssertionHash && t === e.userAssertionHash);
    }, n.prototype.matchEnvironment = function(e, t) {
      var r = this.getAuthorityMetadataByAlias(t);
      return !!(r && r.aliases.indexOf(e.environment) > -1);
    }, n.prototype.matchCredentialType = function(e, t) {
      return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
    }, n.prototype.matchClientId = function(e, t) {
      return !!(e.clientId && t === e.clientId);
    }, n.prototype.matchFamilyId = function(e, t) {
      return !!(e.familyId && t === e.familyId);
    }, n.prototype.matchRealm = function(e, t) {
      return !!(e.realm && t === e.realm);
    }, n.prototype.matchNativeAccountId = function(e, t) {
      return !!(e.nativeAccountId && t === e.nativeAccountId);
    }, n.prototype.matchTarget = function(e, t) {
      var r = e.credentialType !== W.ACCESS_TOKEN && e.credentialType !== W.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (r || !e.target)
        return !1;
      var o = je.fromString(e.target);
      return o.containsScopeSet(t);
    }, n.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, n.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, n.prototype.isAppMetadata = function(e) {
      return e.indexOf(Ki) !== -1;
    }, n.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(kr.CACHE_KEY) !== -1;
    }, n.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return kr.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, n.toObject = function(e, t) {
      for (var r in t)
        e[r] = t[r];
      return e;
    }, n;
  }()
), Ap = (
  /** @class */
  function(n) {
    et(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return ne(this, void 0, void 0, function() {
        var t;
        return re(this, function(r) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", K.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw K.createUnexpectedError(t);
    }, e;
  }(We)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Rp = 300, Dl = {
  tokenRenewalOffsetSeconds: Rp,
  preventCorsPreflight: !1
}, Np = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: we.Info,
  correlationId: T.EMPTY_STRING
}, Pp = {
  claimsBasedCachingEnabled: !0
}, Op = {
  sendGetRequestAsync: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Network interface - sendGetRequestAsync() has not been implemented", K.createUnexpectedError(n);
      });
    });
  },
  sendPostRequestAsync: function() {
    return ne(this, void 0, void 0, function() {
      var n;
      return re(this, function(e) {
        throw n = "Network interface - sendPostRequestAsync() has not been implemented", K.createUnexpectedError(n);
      });
    });
  }
}, Mp = {
  sku: T.SKU,
  version: wa,
  cpu: T.EMPTY_STRING,
  os: T.EMPTY_STRING
}, xp = {
  clientSecret: T.EMPTY_STRING,
  clientAssertion: void 0
}, Dp = {
  azureCloudInstance: Dr.None,
  tenant: "" + T.DEFAULT_COMMON_TENANT
}, Lp = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function jp(n) {
  var e = n.authOptions, t = n.systemOptions, r = n.loggerOptions, o = n.cacheOptions, i = n.storageInterface, a = n.networkInterface, s = n.cryptoInterface, c = n.clientCredentials, l = n.libraryInfo, u = n.telemetry, d = n.serverTelemetryManager, f = n.persistencePlugin, h = n.serializableCache, p = he(he({}, Np), r);
  return {
    authOptions: Fp(e),
    systemOptions: he(he({}, Dl), t),
    loggerOptions: p,
    cacheOptions: he(he({}, Pp), o),
    storageInterface: i || new Ap(e.clientId, wo, new Ca(p)),
    networkInterface: a || Op,
    cryptoInterface: s || wo,
    clientCredentials: c || xp,
    libraryInfo: he(he({}, Mp), l),
    telemetry: he(he({}, Lp), u),
    serverTelemetryManager: d || null,
    persistencePlugin: f || null,
    serializableCache: h || null
  };
}
function Fp(n) {
  return he({ clientCapabilities: [], azureCloudOptions: Dp, skipAuthorityMetadataCache: !1 }, n);
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var An = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r, o) {
      var i = n.call(this, t, r, o) || this;
      return i.name = "ServerError", Object.setPrototypeOf(i, e.prototype), i;
    }
    return e;
  }(K)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var To = (
  /** @class */
  function() {
    function n() {
    }
    return n.generateThrottlingStorageKey = function(e) {
      return Ar.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, n.preProcess = function(e, t) {
      var r, o = n.generateThrottlingStorageKey(t), i = e.getThrottlingCache(o);
      if (i) {
        if (i.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new An(((r = i.errorCodes) === null || r === void 0 ? void 0 : r.join(" ")) || T.EMPTY_STRING, i.errorMessage, i.subError);
      }
    }, n.postProcess = function(e, t, r) {
      if (n.checkResponseStatus(r) || n.checkResponseForRetryAfter(r)) {
        var o = {
          throttleTime: n.calculateThrottleTime(parseInt(r.headers[ot.RETRY_AFTER])),
          error: r.body.error,
          errorCodes: r.body.error_codes,
          errorMessage: r.body.error_description,
          subError: r.body.suberror
        };
        e.setThrottlingCache(n.generateThrottlingStorageKey(t), o);
      }
    }, n.checkResponseStatus = function(e) {
      return e.status === 429 || e.status >= 500 && e.status < 600;
    }, n.checkResponseForRetryAfter = function(e) {
      return e.headers ? e.headers.hasOwnProperty(ot.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1;
    }, n.calculateThrottleTime = function(e) {
      var t = e <= 0 ? 0 : e, r = Date.now() / 1e3;
      return Math.floor(Math.min(r + (t || Ar.DEFAULT_THROTTLE_TIME_SECONDS), r + Ar.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
    }, n.removeThrottle = function(e, t, r, o) {
      var i = {
        clientId: t,
        authority: r.authority,
        scopes: r.scopes,
        homeAccountIdentifier: o,
        claims: r.claims,
        authenticationScheme: r.authenticationScheme,
        resourceRequestMethod: r.resourceRequestMethod,
        resourceRequestUri: r.resourceRequestUri,
        shrClaims: r.shrClaims,
        sshKid: r.sshKid
      }, a = this.generateThrottlingStorageKey(i);
      e.removeItem(a);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Up = (
  /** @class */
  function() {
    function n(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return n.prototype.sendPostRequest = function(e, t, r) {
      return ne(this, void 0, void 0, function() {
        var o, i;
        return re(this, function(a) {
          switch (a.label) {
            case 0:
              To.preProcess(this.cacheManager, e), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, r)];
            case 2:
              return o = a.sent(), [3, 4];
            case 3:
              throw i = a.sent(), i instanceof K ? i : z.createNetworkError(t, i);
            case 4:
              return To.postProcess(this.cacheManager, e, o), [2, o];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var nt;
(function(n) {
  n.HOME_ACCOUNT_ID = "home_account_id", n.UPN = "UPN";
})(nt || (nt = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var bn = (
  /** @class */
  function() {
    function n() {
    }
    return n.validateRedirectUri = function(e) {
      if (U.isEmpty(e))
        throw be.createRedirectUriEmptyError();
    }, n.validatePrompt = function(e) {
      var t = [];
      for (var r in Ue)
        t.push(Ue[r]);
      if (t.indexOf(e) < 0)
        throw be.createInvalidPromptError(e);
    }, n.validateClaims = function(e) {
      try {
        JSON.parse(e);
      } catch {
        throw be.createInvalidClaimsRequestError();
      }
    }, n.validateCodeChallengeParams = function(e, t) {
      if (U.isEmpty(e) || U.isEmpty(t))
        throw be.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, n.validateCodeChallengeMethod = function(e) {
      if ([
        tc.PLAIN,
        tc.S256
      ].indexOf(e) < 0)
        throw be.createInvalidCodeChallengeMethodError();
    }, n.sanitizeEQParams = function(e, t) {
      return e ? (t.forEach(function(r, o) {
        e[o] && delete e[o];
      }), Object.fromEntries(Object.entries(e).filter(function(r) {
        var o = r[1];
        return o !== "";
      }))) : {};
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Nr = (
  /** @class */
  function() {
    function n() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return n.prototype.addResponseTypeCode = function() {
      this.parameters.set(oe.RESPONSE_TYPE, encodeURIComponent(T.CODE_RESPONSE_TYPE));
    }, n.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(oe.RESPONSE_TYPE, encodeURIComponent(T.TOKEN_RESPONSE_TYPE + " " + T.ID_TOKEN_RESPONSE_TYPE));
    }, n.prototype.addResponseMode = function(e) {
      this.parameters.set(oe.RESPONSE_MODE, encodeURIComponent(e || vo.QUERY));
    }, n.prototype.addNativeBroker = function() {
      this.parameters.set(oe.NATIVE_BROKER, encodeURIComponent("1"));
    }, n.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var r = t ? Wo(e || [], qr) : e || [], o = new je(r);
      this.parameters.set(oe.SCOPE, encodeURIComponent(o.printScopes()));
    }, n.prototype.addClientId = function(e) {
      this.parameters.set(oe.CLIENT_ID, encodeURIComponent(e));
    }, n.prototype.addRedirectUri = function(e) {
      bn.validateRedirectUri(e), this.parameters.set(oe.REDIRECT_URI, encodeURIComponent(e));
    }, n.prototype.addPostLogoutRedirectUri = function(e) {
      bn.validateRedirectUri(e), this.parameters.set(oe.POST_LOGOUT_URI, encodeURIComponent(e));
    }, n.prototype.addIdTokenHint = function(e) {
      this.parameters.set(oe.ID_TOKEN_HINT, encodeURIComponent(e));
    }, n.prototype.addDomainHint = function(e) {
      this.parameters.set(Er.DOMAIN_HINT, encodeURIComponent(e));
    }, n.prototype.addLoginHint = function(e) {
      this.parameters.set(Er.LOGIN_HINT, encodeURIComponent(e));
    }, n.prototype.addCcsUpn = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, n.prototype.addCcsOid = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, n.prototype.addSid = function(e) {
      this.parameters.set(Er.SID, encodeURIComponent(e));
    }, n.prototype.addClaims = function(e, t) {
      var r = this.addClientCapabilitiesToClaims(e, t);
      bn.validateClaims(r), this.parameters.set(oe.CLAIMS, encodeURIComponent(r));
    }, n.prototype.addCorrelationId = function(e) {
      this.parameters.set(oe.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, n.prototype.addLibraryInfo = function(e) {
      this.parameters.set(oe.X_CLIENT_SKU, e.sku), this.parameters.set(oe.X_CLIENT_VER, e.version), e.os && this.parameters.set(oe.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(oe.X_CLIENT_CPU, e.cpu);
    }, n.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(oe.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(oe.X_APP_VER, e.appVersion);
    }, n.prototype.addPrompt = function(e) {
      bn.validatePrompt(e), this.parameters.set("" + oe.PROMPT, encodeURIComponent(e));
    }, n.prototype.addState = function(e) {
      U.isEmpty(e) || this.parameters.set(oe.STATE, encodeURIComponent(e));
    }, n.prototype.addNonce = function(e) {
      this.parameters.set(oe.NONCE, encodeURIComponent(e));
    }, n.prototype.addCodeChallengeParams = function(e, t) {
      if (bn.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(oe.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(oe.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw be.createInvalidCodeChallengeParamsError();
    }, n.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(oe.CODE, encodeURIComponent(e));
    }, n.prototype.addDeviceCode = function(e) {
      this.parameters.set(oe.DEVICE_CODE, encodeURIComponent(e));
    }, n.prototype.addRefreshToken = function(e) {
      this.parameters.set(oe.REFRESH_TOKEN, encodeURIComponent(e));
    }, n.prototype.addCodeVerifier = function(e) {
      this.parameters.set(oe.CODE_VERIFIER, encodeURIComponent(e));
    }, n.prototype.addClientSecret = function(e) {
      this.parameters.set(oe.CLIENT_SECRET, encodeURIComponent(e));
    }, n.prototype.addClientAssertion = function(e) {
      U.isEmpty(e) || this.parameters.set(oe.CLIENT_ASSERTION, encodeURIComponent(e));
    }, n.prototype.addClientAssertionType = function(e) {
      U.isEmpty(e) || this.parameters.set(oe.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, n.prototype.addOboAssertion = function(e) {
      this.parameters.set(oe.OBO_ASSERTION, encodeURIComponent(e));
    }, n.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(oe.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, n.prototype.addGrantType = function(e) {
      this.parameters.set(oe.GRANT_TYPE, encodeURIComponent(e));
    }, n.prototype.addClientInfo = function() {
      this.parameters.set(kp, "1");
    }, n.prototype.addExtraQueryParameters = function(e) {
      var t = this, r = bn.sanitizeEQParams(e, this.parameters);
      Object.keys(r).forEach(function(o) {
        t.parameters.set(o, e[o]);
      });
    }, n.prototype.addClientCapabilitiesToClaims = function(e, t) {
      var r;
      if (!e)
        r = {};
      else
        try {
          r = JSON.parse(e);
        } catch {
          throw be.createInvalidClaimsRequestError();
        }
      return t && t.length > 0 && (r.hasOwnProperty(Vn.ACCESS_TOKEN) || (r[Vn.ACCESS_TOKEN] = {}), r[Vn.ACCESS_TOKEN][Vn.XMS_CC] = {
        values: t
      }), JSON.stringify(r);
    }, n.prototype.addUsername = function(e) {
      this.parameters.set(Co.username, encodeURIComponent(e));
    }, n.prototype.addPassword = function(e) {
      this.parameters.set(Co.password, encodeURIComponent(e));
    }, n.prototype.addPopToken = function(e) {
      U.isEmpty(e) || (this.parameters.set(oe.TOKEN_TYPE, ge.POP), this.parameters.set(oe.REQ_CNF, encodeURIComponent(e)));
    }, n.prototype.addSshJwk = function(e) {
      U.isEmpty(e) || (this.parameters.set(oe.TOKEN_TYPE, ge.SSH), this.parameters.set(oe.REQ_CNF, encodeURIComponent(e)));
    }, n.prototype.addServerTelemetry = function(e) {
      this.parameters.set(oe.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(oe.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, n.prototype.addThrottling = function() {
      this.parameters.set(oe.X_MS_LIB_CAPABILITY, Ar.X_MS_LIB_CAPABILITY_VALUE);
    }, n.prototype.addLogoutHint = function(e) {
      this.parameters.set(oe.LOGOUT_HINT, encodeURIComponent(e));
    }, n.prototype.createQueryString = function() {
      var e = new Array();
      return this.parameters.forEach(function(t, r) {
        e.push(r + "=" + t);
      }), e.join("&");
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Sa = (
  /** @class */
  function() {
    function n(e, t) {
      this.config = jp(e), this.logger = new Ca(this.config.loggerOptions, xl, wa), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new Up(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return n.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[ot.CONTENT_TYPE] = T.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case nt.HOME_ACCOUNT_ID:
            try {
              var r = Wn(e.credential);
              t[ot.CCS_HEADER] = "Oid:" + r.uid + "@" + r.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case nt.UPN:
            t[ot.CCS_HEADER] = "UPN: " + e.credential;
            break;
        }
      return t;
    }, n.prototype.executePostToTokenEndpoint = function(e, t, r, o) {
      return ne(this, void 0, void 0, function() {
        var i;
        return re(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(o, e, { body: t, headers: r })];
            case 1:
              return i = a.sent(), this.config.serverTelemetryManager && i.status < 500 && i.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), [2, i];
          }
        });
      });
    }, n.prototype.updateAuthority = function(e) {
      if (!e.discoveryComplete())
        throw z.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, n.prototype.createTokenQueryParameters = function(e) {
      var t = new Nr();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ta = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.generateAccountId = function() {
      return n.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    }, n.prototype.generateCredentialId = function() {
      return n.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    }, n.prototype.generateTarget = function() {
      return n.generateTargetForCacheKey(this.target);
    }, n.prototype.generateCredentialKey = function() {
      return n.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
    }, n.prototype.generateType = function() {
      switch (this.credentialType) {
        case W.ID_TOKEN:
          return Ir.ID_TOKEN;
        case W.ACCESS_TOKEN:
        case W.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return Ir.ACCESS_TOKEN;
        case W.REFRESH_TOKEN:
          return Ir.REFRESH_TOKEN;
        default:
          throw z.createUnexpectedCredentialTypeError();
      }
    }, n.generateCredentialCacheKey = function(e, t, r, o, i, a, s, c, l) {
      var u = [
        this.generateAccountIdForCacheKey(e, t),
        this.generateCredentialIdForCacheKey(r, o, i, s),
        this.generateTargetForCacheKey(a),
        this.generateClaimsHashForCacheKey(l),
        this.generateSchemeForCacheKey(c)
      ];
      return u.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.generateAccountIdForCacheKey = function(e, t) {
      var r = [e, t];
      return r.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.generateCredentialIdForCacheKey = function(e, t, r, o) {
      var i = e === W.REFRESH_TOKEN && o || t, a = [
        e,
        i,
        r || T.EMPTY_STRING
      ];
      return a.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.generateTargetForCacheKey = function(e) {
      return (e || T.EMPTY_STRING).toLowerCase();
    }, n.generateClaimsHashForCacheKey = function(e) {
      return (e || T.EMPTY_STRING).toLowerCase();
    }, n.generateSchemeForCacheKey = function(e) {
      return e && e.toLowerCase() !== ge.BEARER.toLowerCase() ? e.toLowerCase() : T.EMPTY_STRING;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var tn = (
  /** @class */
  function(n) {
    et(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, r, o, i, a) {
      var s = new e();
      return s.credentialType = W.ID_TOKEN, s.homeAccountId = t, s.environment = r, s.clientId = i, s.secret = o, s.realm = a, s;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === W.ID_TOKEN : !1;
    }, e;
  }(Ta)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ft = (
  /** @class */
  function() {
    function n() {
    }
    return n.nowSeconds = function() {
      return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
    }, n.isTokenExpired = function(e, t) {
      var r = Number(e) || 0, o = n.nowSeconds() + t;
      return o > r;
    }, n.wasClockTurnedBack = function(e) {
      var t = Number(e);
      return t > n.nowSeconds();
    }, n.delay = function(e, t) {
      return new Promise(function(r) {
        return setTimeout(function() {
          return r(t);
        }, e);
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var nn = (
  /** @class */
  function(n) {
    et(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, r, o, i, a, s, c, l, u, d, f, h, p, g, m) {
      var b, C, v = new e();
      v.homeAccountId = t, v.credentialType = W.ACCESS_TOKEN, v.secret = o;
      var w = ft.nowSeconds();
      if (v.cachedAt = w.toString(), v.expiresOn = c.toString(), v.extendedExpiresOn = l.toString(), d && (v.refreshOn = d.toString()), v.environment = r, v.clientId = i, v.realm = a, v.target = s, v.userAssertionHash = h, v.tokenType = U.isEmpty(f) ? ge.BEARER : f, g && (v.requestedClaims = g, v.requestedClaimsHash = m), ((b = v.tokenType) === null || b === void 0 ? void 0 : b.toLowerCase()) !== ge.BEARER.toLowerCase())
        switch (v.credentialType = W.ACCESS_TOKEN_WITH_AUTH_SCHEME, v.tokenType) {
          case ge.POP:
            var S = Ot.extractTokenClaims(o, u);
            if (!(!((C = S == null ? void 0 : S.cnf) === null || C === void 0) && C.kid))
              throw z.createTokenClaimsRequiredError();
            v.keyId = S.cnf.kid;
            break;
          case ge.SSH:
            v.keyId = p;
        }
      return v;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === W.ACCESS_TOKEN || t.credentialType === W.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Ta)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Yn = (
  /** @class */
  function(n) {
    et(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, r, o, i, a, s) {
      var c = new e();
      return c.clientId = i, c.credentialType = W.REFRESH_TOKEN, c.environment = r, c.homeAccountId = t, c.secret = o, c.userAssertionHash = s, a && (c.familyId = a), c;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === W.REFRESH_TOKEN : !1;
    }, e;
  }(Ta)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var rc = [
  "interaction_required",
  "consent_required",
  "login_required"
], Hp = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Qn = {
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
  function(n) {
    et(e, n);
    function e(t, r, o, i, a, s, c) {
      var l = n.call(this, t, r, o) || this;
      return Object.setPrototypeOf(l, e.prototype), l.timestamp = i || T.EMPTY_STRING, l.traceId = a || T.EMPTY_STRING, l.correlationId = s || T.EMPTY_STRING, l.claims = c || T.EMPTY_STRING, l.name = "InteractionRequiredAuthError", l;
    }
    return e.isInteractionRequiredError = function(t, r, o) {
      var i = !!t && rc.indexOf(t) > -1, a = !!o && Hp.indexOf(o) > -1, s = !!r && rc.some(function(c) {
        return r.indexOf(c) > -1;
      });
      return i || s || a;
    }, e.createNoTokensFoundError = function() {
      return new e(Qn.noTokensFoundError.code, Qn.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Qn.native_account_unavailable.code, Qn.native_account_unavailable.desc);
    }, e;
  }(K)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Xn = (
  /** @class */
  function() {
    function n(e, t, r, o, i) {
      this.account = e || null, this.idToken = t || null, this.accessToken = r || null, this.refreshToken = o || null, this.appMetadata = i || null;
    }
    return n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ht = (
  /** @class */
  function() {
    function n() {
    }
    return n.setRequestState = function(e, t, r) {
      var o = n.generateLibraryState(e, r);
      return U.isEmpty(t) ? o : "" + o + T.RESOURCE_DELIM + t;
    }, n.generateLibraryState = function(e, t) {
      if (!e)
        throw z.createNoCryptoObjectError("generateLibraryState");
      var r = {
        id: e.createNewGuid()
      };
      t && (r.meta = t);
      var o = JSON.stringify(r);
      return e.base64Encode(o);
    }, n.parseRequestState = function(e, t) {
      if (!e)
        throw z.createNoCryptoObjectError("parseRequestState");
      if (U.isEmpty(t))
        throw z.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var r = t.split(T.RESOURCE_DELIM), o = r[0], i = r.length > 1 ? r.slice(1).join(T.RESOURCE_DELIM) : T.EMPTY_STRING, a = e.base64Decode(o), s = JSON.parse(a);
        return {
          userRequestState: U.isEmpty(i) ? T.EMPTY_STRING : i,
          libraryState: s
        };
      } catch (c) {
        throw z.createInvalidStateError(t, c);
      }
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var de = (
  /** @class */
  function() {
    function n(e) {
      if (this._urlString = e, U.isEmpty(this._urlString))
        throw be.createUrlEmptyError();
      U.isEmpty(this.getHash()) && (this._urlString = n.canonicalizeUri(e));
    }
    return Object.defineProperty(n.prototype, "urlString", {
      get: function() {
        return this._urlString;
      },
      enumerable: !1,
      configurable: !0
    }), n.canonicalizeUri = function(e) {
      if (e) {
        var t = e.toLowerCase();
        return U.endsWith(t, "?") ? t = t.slice(0, -1) : U.endsWith(t, "?/") && (t = t.slice(0, -2)), U.endsWith(t, "/") || (t += "/"), t;
      }
      return e;
    }, n.prototype.validateAsUri = function() {
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
    }, n.appendQueryString = function(e, t) {
      return U.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, n.removeHashFromUrl = function(e) {
      return n.canonicalizeUri(e.split("#")[0]);
    }, n.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), r = t.PathSegments;
      return e && r.length !== 0 && (r[0] === En.COMMON || r[0] === En.ORGANIZATIONS) && (r[0] = e), n.constructAuthorityUriFromObject(t);
    }, n.prototype.getHash = function() {
      return n.parseHash(this.urlString);
    }, n.prototype.getUrlComponents = function() {
      var e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
      if (!t)
        throw be.createUrlParseError("Given url string: " + this.urlString);
      var r = {
        Protocol: t[1],
        HostNameAndPort: t[4],
        AbsolutePath: t[5],
        QueryString: t[7]
      }, o = r.AbsolutePath.split("/");
      return o = o.filter(function(i) {
        return i && i.length > 0;
      }), r.PathSegments = o, !U.isEmpty(r.QueryString) && r.QueryString.endsWith("/") && (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)), r;
    }, n.getDomainFromUrl = function(e) {
      var t = RegExp("^([^:/?#]+://)?([^/?#]*)"), r = e.match(t);
      if (!r)
        throw be.createUrlParseError("Given url string: " + e);
      return r[2];
    }, n.getAbsoluteUrl = function(e, t) {
      if (e[0] === T.FORWARD_SLASH) {
        var r = new n(t), o = r.getUrlComponents();
        return o.Protocol + "//" + o.HostNameAndPort + e;
      }
      return e;
    }, n.parseHash = function(e) {
      var t = e.indexOf("#"), r = e.indexOf("#/");
      return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : T.EMPTY_STRING;
    }, n.parseQueryString = function(e) {
      var t = e.indexOf("?"), r = e.indexOf("/?");
      return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : T.EMPTY_STRING;
    }, n.constructAuthorityUriFromObject = function(e) {
      return new n(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
    }, n.getDeserializedHash = function(e) {
      if (U.isEmpty(e))
        return {};
      var t = n.parseHash(e), r = U.queryStringToObject(U.isEmpty(t) ? e : t);
      if (!r)
        throw z.createHashNotDeserializedError(JSON.stringify(r));
      return r;
    }, n.getDeserializedQueryString = function(e) {
      if (U.isEmpty(e))
        return {};
      var t = n.parseQueryString(e), r = U.queryStringToObject(U.isEmpty(t) ? e : t);
      if (!r)
        throw z.createHashNotDeserializedError(JSON.stringify(r));
      return r;
    }, n.hashContainsKnownProperties = function(e) {
      if (U.isEmpty(e) || e.indexOf("=") < 0)
        return !1;
      var t = n.getDeserializedHash(e);
      return !!(t.code || t.error_description || t.error || t.state);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _;
(function(n) {
  n.AcquireTokenByCode = "acquireTokenByCode", n.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", n.AcquireTokenSilent = "acquireTokenSilent", n.AcquireTokenSilentAsync = "acquireTokenSilentAsync", n.AcquireTokenPopup = "acquireTokenPopup", n.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", n.CryptoOptsSignJwt = "cryptoOptsSignJwt", n.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", n.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", n.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", n.SsoSilent = "ssoSilent", n.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", n.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", n.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", n.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", n.BrokerHandhshake = "brokerHandshake", n.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", n.AcquireTokenByBroker = "acquireTokenByBroker", n.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", n.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", n.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", n.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", n.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", n.AcquireTokenFromCache = "acquireTokenFromCache", n.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", n.InitializeBaseRequest = "initializeBaseRequest", n.InitializeSilentRequest = "initializeSilentRequest", n.InitializeClientApplication = "initializeClientApplication", n.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", n.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", n.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", n.SilentHandlerLoadFrame = "silentHandlerLoadFrame", n.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", n.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", n.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", n.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", n.GetAuthCodeUrl = "getAuthCodeUrl", n.HandleCodeResponseFromServer = "handleCodeResponseFromServer", n.HandleCodeResponseFromHash = "handleCodeResponseFromHash", n.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", n.AuthClientAcquireToken = "authClientAcquireToken", n.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", n.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", n.AuthClientCreateQueryString = "authClientCreateQueryString", n.PopTokenGenerateCnf = "popTokenGenerateCnf", n.PopTokenGenerateKid = "popTokenGenerateKid", n.HandleServerTokenResponse = "handleServerTokenResponse", n.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", n.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", n.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", n.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", n.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", n.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", n.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", n.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", n.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", n.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", n.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", n.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", n.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", n.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", n.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", n.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", n.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", n.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(_ || (_ = {}));
var Eo;
(function(n) {
  n[n.NotStarted = 0] = "NotStarted", n[n.InProgress = 1] = "InProgress", n[n.Completed = 2] = "Completed";
})(Eo || (Eo = {}));
var Bp = /* @__PURE__ */ new Set([
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
var Vi;
(function(n) {
  n.SW = "sw", n.UHW = "uhw";
})(Vi || (Vi = {}));
var nr = (
  /** @class */
  function() {
    function n(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return n.prototype.generateCnf = function(e) {
      var t, r;
      return ne(this, void 0, void 0, function() {
        var o, i, a;
        return re(this, function(s) {
          switch (s.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.PopTokenGenerateCnf, e.correlationId), (r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(_.PopTokenGenerateKid, e.correlationId), [4, this.generateKid(e)];
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
    }, n.prototype.generateKid = function(e) {
      var t;
      return ne(this, void 0, void 0, function() {
        var r;
        return re(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return r = o.sent(), [2, {
                kid: r,
                xms_ksl: Vi.SW
              }];
          }
        });
      });
    }, n.prototype.signPopToken = function(e, t, r) {
      return ne(this, void 0, void 0, function() {
        return re(this, function(o) {
          return [2, this.signPayload(e, t, r)];
        });
      });
    }, n.prototype.signPayload = function(e, t, r, o) {
      return ne(this, void 0, void 0, function() {
        var i, a, s, c, l, u;
        return re(this, function(d) {
          switch (d.label) {
            case 0:
              return i = r.resourceRequestMethod, a = r.resourceRequestUri, s = r.shrClaims, c = r.shrNonce, l = a ? new de(a) : void 0, u = l == null ? void 0 : l.getUrlComponents(), [4, this.cryptoUtils.signJwt(he({ at: e, ts: ft.nowSeconds(), m: i == null ? void 0 : i.toUpperCase(), u: u == null ? void 0 : u.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: u == null ? void 0 : u.AbsolutePath, q: u != null && u.QueryString ? [[], u.QueryString] : void 0, client_claims: s || void 0 }, o), t, r.correlationId)];
            case 1:
              return [2, d.sent()];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Gi = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.generateAppMetadataKey = function() {
      return n.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, n.generateAppMetadataCacheKey = function(e, t) {
      var r = [
        Ki,
        e,
        t
      ];
      return r.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.createAppMetadataEntity = function(e, t, r) {
      var o = new n();
      return o.clientId = e, o.environment = t, r && (o.familyId = r), o;
    }, n.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(Ki) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var zp = (
  /** @class */
  function() {
    function n(e, t) {
      this.cache = e, this.hasChanged = t;
    }
    return Object.defineProperty(n.prototype, "cacheHasChanged", {
      /**
       * boolean which indicates the changes in cache
       */
      get: function() {
        return this.hasChanged;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "tokenCache", {
      /**
       * function to retrieve the token cache
       */
      get: function() {
        return this.cache;
      },
      enumerable: !1,
      configurable: !0
    }), n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Io = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a, s) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = r, this.logger = o, this.serializableCache = i, this.persistencePlugin = a, this.performanceClient = s;
    }
    return n.prototype.validateServerAuthorizationCodeResponse = function(e, t, r) {
      if (!e.state || !t)
        throw e.state ? z.createStateNotFoundError("Cached State") : z.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw z.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw wt.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new wt(e.error || T.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || T.EMPTY_STRING, e.trace_id || T.EMPTY_STRING, e.correlation_id || T.EMPTY_STRING, e.claims || T.EMPTY_STRING) : new An(e.error || T.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && So(e.client_info, r);
    }, n.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (wt.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new wt(e.error, e.error_description, e.suberror, e.timestamp || T.EMPTY_STRING, e.trace_id || T.EMPTY_STRING, e.correlation_id || T.EMPTY_STRING, e.claims || T.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new An(e.error, t, e.suberror);
      }
    }, n.prototype.handleServerTokenResponse = function(e, t, r, o, i, a, s, c, l) {
      var u;
      return ne(this, void 0, void 0, function() {
        var d, f, h, p, g, m, b;
        return re(this, function(C) {
          switch (C.label) {
            case 0:
              if ((u = this.performanceClient) === null || u === void 0 || u.addQueueMeasurement(_.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (d = new Ot(e.id_token || T.EMPTY_STRING, this.cryptoObj), i && !U.isEmpty(i.nonce) && d.claims.nonce !== i.nonce)
                  throw z.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (f = d.claims.auth_time, !f)
                    throw z.createAuthTimeNotFoundError();
                  Ot.checkMaxAge(f, o.maxAge);
                }
              }
              this.homeAccountIdentifier = He.generateHomeAccountId(e.client_info || T.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, d == null ? void 0 : d.claims), i && i.state && (h = Ht.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0, p = this.generateCacheRecord(e, t, r, o, d, a, i), C.label = 1;
            case 1:
              return C.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), g = new zp(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(g)]) : [3, 3];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return s && !c && p.account && (m = p.account.generateAccountKey(), b = this.cacheStorage.getAccount(m), !b) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, n.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, d, h, void 0, l)]) : [4, this.cacheStorage.saveCacheRecord(p)];
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
              return [2, n.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, d, h, e, l)];
          }
        });
      });
    }, n.prototype.generateCacheRecord = function(e, t, r, o, i, a, s) {
      var c = t.getPreferredCache();
      if (U.isEmpty(c))
        throw z.createInvalidCacheEnvironmentError();
      var l, u;
      !U.isEmpty(e.id_token) && i && (l = tn.createIdTokenEntity(this.homeAccountIdentifier, c, e.id_token || T.EMPTY_STRING, this.clientId, i.claims.tid || T.EMPTY_STRING), u = He.createAccount({
        homeAccountId: this.homeAccountIdentifier,
        idTokenClaims: i.claims,
        clientInfo: e.client_info || T.EMPTY_STRING,
        cloudGraphHostName: s == null ? void 0 : s.cloud_graph_host_name,
        msGraphHost: s == null ? void 0 : s.msgraph_host
      }, t));
      var d = null;
      if (!U.isEmpty(e.access_token)) {
        var f = e.scope ? je.fromString(e.scope) : new je(o.scopes || []), h = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, p = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, g = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, m = r + h, b = m + p, C = g && g > 0 ? r + g : void 0;
        d = nn.createAccessTokenEntity(this.homeAccountIdentifier, c, e.access_token || T.EMPTY_STRING, this.clientId, i ? i.claims.tid || T.EMPTY_STRING : t.tenant, f.printScopes(), m, b, this.cryptoObj, C, e.token_type, a, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var v = null;
      U.isEmpty(e.refresh_token) || (v = Yn.createRefreshTokenEntity(this.homeAccountIdentifier, c, e.refresh_token || T.EMPTY_STRING, this.clientId, e.foci, a));
      var w = null;
      return U.isEmpty(e.foci) || (w = Gi.createAppMetadataEntity(this.clientId, c, e.foci)), new Xn(u, l, d, v, w);
    }, n.generateAuthenticationResult = function(e, t, r, o, i, a, s, c, l) {
      var u, d, f;
      return ne(this, void 0, void 0, function() {
        var h, p, g, m, b, C, v, w, S, E, k;
        return re(this, function(I) {
          switch (I.label) {
            case 0:
              if (h = T.EMPTY_STRING, p = [], g = null, b = T.EMPTY_STRING, !r.accessToken)
                return [3, 4];
              if (r.accessToken.tokenType !== ge.POP)
                return [3, 2];
              if (C = new nr(e), v = r.accessToken, w = v.secret, S = v.keyId, !S)
                throw z.createKeyIdMissingError();
              return [4, C.signPopToken(w, S, i)];
            case 1:
              return h = I.sent(), [3, 3];
            case 2:
              h = r.accessToken.secret, I.label = 3;
            case 3:
              p = je.fromString(r.accessToken.target).asArray(), g = new Date(Number(r.accessToken.expiresOn) * 1e3), m = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3), I.label = 4;
            case 4:
              return r.appMetadata && (b = r.appMetadata.familyId === _r ? _r : T.EMPTY_STRING), E = (a == null ? void 0 : a.claims.oid) || (a == null ? void 0 : a.claims.sub) || T.EMPTY_STRING, k = (a == null ? void 0 : a.claims.tid) || T.EMPTY_STRING, c != null && c.spa_accountid && r.account && (r.account.nativeAccountId = c == null ? void 0 : c.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: E,
                tenantId: k,
                scopes: p,
                account: r.account ? r.account.getAccountInfo() : null,
                idToken: a ? a.rawToken : T.EMPTY_STRING,
                idTokenClaims: a ? a.claims : {},
                accessToken: h,
                fromCache: o,
                expiresOn: g,
                correlationId: i.correlationId,
                requestId: l || T.EMPTY_STRING,
                extExpiresOn: m,
                familyId: b,
                tokenType: ((u = r.accessToken) === null || u === void 0 ? void 0 : u.tokenType) || T.EMPTY_STRING,
                state: s ? s.userRequestState : T.EMPTY_STRING,
                cloudGraphHostName: ((d = r.account) === null || d === void 0 ? void 0 : d.cloudGraphHostName) || T.EMPTY_STRING,
                msGraphHost: ((f = r.account) === null || f === void 0 ? void 0 : f.msGraphHost) || T.EMPTY_STRING,
                code: c == null ? void 0 : c.spa_code,
                fromNativeBroker: !1
              }];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ll = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var r, o;
      return ne(this, void 0, void 0, function() {
        var i;
        return re(this, function(a) {
          switch (a.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.GetAuthCodeUrl, t.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.AuthClientCreateQueryString, t.correlationId), [4, this.createAuthCodeUrlQueryString(t)];
            case 1:
              return i = a.sent(), [2, de.appendQueryString(this.authority.authorizationEndpoint, i)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, r) {
      var o, i, a, s, c, l;
      return ne(this, void 0, void 0, function() {
        var u, d, f, h, p, g, m = this;
        return re(this, function(b) {
          switch (b.label) {
            case 0:
              if (!t || !t.code)
                throw z.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.AuthClientAcquireToken, t.correlationId), u = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), d = ft.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return f = b.sent(), h = (s = f.headers) === null || s === void 0 ? void 0 : s[ot.X_MS_REQUEST_ID], p = (c = f.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_HTTP_VERSION], p && (u == null || u.addStaticFields({
                httpVerAuthority: p
              })), g = new Io(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), g.validateTokenResponse(f.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(_.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(f.body, this.authority, d, t, r, void 0, void 0, void 0, h).then(function(C) {
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
    }, e.prototype.handleFragmentResponse = function(t, r) {
      var o = new Io(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), i = new de(t), a = de.getDeserializedHash(i.getHash());
      if (o.validateServerAuthorizationCodeResponse(a, r, this.cryptoUtils), !a.code)
        throw z.createNoAuthCodeInServerResponseError();
      return he(he({}, a), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: a.code
      });
    }, e.prototype.getLogoutUri = function(t) {
      if (!t)
        throw be.createEmptyLogoutRequestError();
      var r = this.createLogoutUrlQueryString(t);
      return de.appendQueryString(this.authority.endSessionEndpoint, r);
    }, e.prototype.executeTokenRequest = function(t, r) {
      var o, i;
      return ne(this, void 0, void 0, function() {
        var a, s, c, l, u, d, f;
        return re(this, function(h) {
          switch (h.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.AuthClientExecuteTokenRequest, r.correlationId), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.AuthClientCreateTokenRequestBody, r.correlationId), a = this.createTokenQueryParameters(r), s = de.appendQueryString(t.tokenEndpoint, a), [4, this.createTokenRequestBody(r)];
            case 1:
              if (c = h.sent(), l = void 0, r.clientInfo)
                try {
                  u = So(r.clientInfo, this.cryptoUtils), l = {
                    credential: "" + u.uid + Ae.CLIENT_INFO_SEPARATOR + u.utid,
                    type: nt.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              return d = this.createTokenRequestHeaders(l || r.ccsCredential), f = {
                clientId: this.config.authOptions.clientId,
                authority: t.canonicalAuthority,
                scopes: r.scopes,
                claims: r.claims,
                authenticationScheme: r.authenticationScheme,
                resourceRequestMethod: r.resourceRequestMethod,
                resourceRequestUri: r.resourceRequestUri,
                shrClaims: r.shrClaims,
                sshKid: r.sshKid
              }, [2, this.executePostToTokenEndpoint(s, c, d, f)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var r, o;
      return ne(this, void 0, void 0, function() {
        var i, a, s, c, l, u, d, d, f;
        return re(this, function(h) {
          switch (h.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.AuthClientCreateTokenRequestBody, t.correlationId), i = new Nr(), i.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? i.addRedirectUri(t.redirectUri) : bn.validateRedirectUri(t.redirectUri), i.addScopes(t.scopes), i.addAuthorizationCode(t.code), i.addLibraryInfo(this.config.libraryInfo), i.addApplicationTelemetry(this.config.telemetry.application), i.addThrottling(), this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && i.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (a = this.config.clientCredentials.clientAssertion, i.addClientAssertion(a.assertion), i.addClientAssertionType(a.assertionType)), i.addGrantType(bo.AUTHORIZATION_CODE_GRANT), i.addClientInfo(), t.authenticationScheme !== ge.POP ? [3, 2] : (s = new nr(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.PopTokenGenerateCnf, t.correlationId), [4, s.generateCnf(t)]);
            case 1:
              return c = h.sent(), i.addPopToken(c.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ge.SSH)
                if (t.sshJwk)
                  i.addSshJwk(t.sshJwk);
                else
                  throw be.createMissingSshJwkError();
              h.label = 3;
            case 3:
              if (l = t.correlationId || this.config.cryptoInterface.createNewGuid(), i.addCorrelationId(l), (!U.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities), u = void 0, t.clientInfo)
                try {
                  d = So(t.clientInfo, this.cryptoUtils), u = {
                    credential: "" + d.uid + Ae.CLIENT_INFO_SEPARATOR + d.utid,
                    type: nt.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              else
                u = t.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && u)
                switch (u.type) {
                  case nt.HOME_ACCOUNT_ID:
                    try {
                      d = Wn(u.credential), i.addCcsOid(d);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case nt.UPN:
                    i.addCcsUpn(u.credential);
                    break;
                }
              return t.tokenBodyParameters && i.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[oe.RETURN_SPA_CODE]) && i.addExtraQueryParameters((f = {}, f[oe.RETURN_SPA_CODE] = "1", f)), [2, i.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var r;
      return ne(this, void 0, void 0, function() {
        var o, i, a, s, c, l, l, l, u, d;
        return re(this, function(f) {
          switch (f.label) {
            case 0:
              if ((r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.AuthClientCreateQueryString, t.correlationId), o = new Nr(), o.addClientId(this.config.authOptions.clientId), i = Wo(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(i), o.addRedirectUri(t.redirectUri), a = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(a), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ue.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ue.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (s = this.extractAccountSid(t.account), c = this.extractLoginHint(t.account), c) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(c);
                    try {
                      l = Wn(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (s && t.prompt === Ue.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(s);
                    try {
                      l = Wn(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      l = Wn(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!U.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== ge.POP ? [3, 2] : (u = new nr(this.cryptoUtils), [4, u.generateCnf(t)])) : [3, 2];
            case 1:
              d = f.sent(), o.addPopToken(d.reqCnfString), f.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var r = new Nr();
      return t.postLogoutRedirectUri && r.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && r.addCorrelationId(t.correlationId), t.idTokenHint && r.addIdTokenHint(t.idTokenHint), t.state && r.addState(t.state), t.logoutHint && r.addLogoutHint(t.logoutHint), t.extraQueryParameters && r.addExtraQueryParameters(t.extraQueryParameters), r.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var r;
      return ((r = t.idTokenClaims) === null || r === void 0 ? void 0 : r.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var r;
      return ((r = t.idTokenClaims) === null || r === void 0 ? void 0 : r.login_hint) || null;
    }, e;
  }(Sa)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var jl = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r) {
      return n.call(this, t, r) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var r, o, i, a, s, c, l;
      return ne(this, void 0, void 0, function() {
        var u, d, f, h, p, g, m = this;
        return re(this, function(b) {
          switch (b.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.RefreshTokenClientAcquireToken, t.correlationId), u = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), d = ft.nowSeconds(), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return f = b.sent(), h = (a = f.headers) === null || a === void 0 ? void 0 : a[ot.X_MS_HTTP_VERSION], u == null || u.addStaticFields({
                refreshTokenSize: ((s = f.body.refresh_token) === null || s === void 0 ? void 0 : s.length) || 0
              }), h && (u == null || u.addStaticFields({
                httpVerToken: h
              })), p = (c = f.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_REQUEST_ID], g = new Io(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), g.validateTokenResponse(f.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(_.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(f.body, this.authority, d, t, void 0, void 0, !0, t.forceCache, p).then(function(C) {
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
      var r, o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l;
        return re(this, function(u) {
          if (!t)
            throw be.createEmptyTokenRequestError();
          if ((r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw z.createNoAccountInSilentRequestError();
          if (s = this.cacheManager.isAppMetadataFOCI(t.account.environment), s)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (d) {
              if (c = d instanceof wt && d.errorCode === Qn.noTokensFoundError.code, l = d instanceof An && d.errorCode === nc.INVALID_GRANT_ERROR && d.subError === nc.CLIENT_MISMATCH_ERROR, c || l)
                return (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw d;
            }
          return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, r) {
      var o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l;
        return re(this, function(u) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), s = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", t.correlationId), c = this.cacheManager.getRefreshToken(t.account, r), !c)
            throw s == null || s.discardMeasurement(), wt.createNoTokensFoundError();
          return s == null || s.endMeasurement({
            success: !0
          }), l = he(he({}, t), { refreshToken: c.secret, authenticationScheme: t.authenticationScheme || ge.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: nt.HOME_ACCOUNT_ID
          } }), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(l)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, r) {
      var o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l, u, d, f;
        return re(this, function(h) {
          switch (h.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), s = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientCreateTokenRequestBody, t.correlationId), c = this.createTokenQueryParameters(t), l = de.appendQueryString(r.tokenEndpoint, c), [4, this.createTokenRequestBody(t)];
            case 1:
              return u = h.sent(), d = this.createTokenRequestHeaders(t.ccsCredential), f = {
                clientId: this.config.authOptions.clientId,
                authority: r.canonicalAuthority,
                scopes: t.scopes,
                claims: t.claims,
                authenticationScheme: t.authenticationScheme,
                resourceRequestMethod: t.resourceRequestMethod,
                resourceRequestUri: t.resourceRequestUri,
                shrClaims: t.shrClaims,
                sshKid: t.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, d, f).then(function(p) {
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
      var r, o, i;
      return ne(this, void 0, void 0, function() {
        var a, s, c, l, u, d, f;
        return re(this, function(h) {
          switch (h.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.RefreshTokenClientCreateTokenRequestBody, t.correlationId), a = t.correlationId, s = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.BaseClientCreateTokenRequestHeaders, a), c = new Nr(), c.addClientId(this.config.authOptions.clientId), c.addScopes(t.scopes), c.addGrantType(bo.REFRESH_TOKEN_GRANT), c.addClientInfo(), c.addLibraryInfo(this.config.libraryInfo), c.addApplicationTelemetry(this.config.telemetry.application), c.addThrottling(), this.serverTelemetryManager && c.addServerTelemetry(this.serverTelemetryManager), c.addCorrelationId(a), c.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && c.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (l = this.config.clientCredentials.clientAssertion, c.addClientAssertion(l.assertion), c.addClientAssertionType(l.assertionType)), t.authenticationScheme !== ge.POP ? [3, 2] : (u = new nr(this.cryptoUtils, this.performanceClient), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.PopTokenGenerateCnf, t.correlationId), [4, u.generateCnf(t)]);
            case 1:
              return d = h.sent(), c.addPopToken(d.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ge.SSH)
                if (t.sshJwk)
                  c.addSshJwk(t.sshJwk);
                else
                  throw s == null || s.endMeasurement({
                    success: !1
                  }), be.createMissingSshJwkError();
              h.label = 3;
            case 3:
              if ((!U.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && c.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case nt.HOME_ACCOUNT_ID:
                    try {
                      f = Wn(t.ccsCredential.credential), c.addCcsOid(f);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case nt.UPN:
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
  }(Sa)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var $p = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r) {
      return n.call(this, t, r) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return ne(this, void 0, void 0, function() {
        var r, o;
        return re(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(t)];
            case 1:
              return [2, i.sent()];
            case 2:
              if (r = i.sent(), r instanceof z && r.errorCode === O.tokenRefreshRequired.code)
                return o = new jl(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
              throw r;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.acquireCachedToken = function(t) {
      var r, o, i, a, s;
      return ne(this, void 0, void 0, function() {
        var c, l;
        return re(this, function(u) {
          switch (u.label) {
            case 0:
              if (!t)
                throw be.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (r = this.serverTelemetryManager) === null || r === void 0 || r.setCacheOutcome(en.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), z.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !U.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(en.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), z.createRefreshRequiredError();
              if (!t.account)
                throw z.createNoAccountInSilentRequestError();
              if (c = t.authority || this.authority.getPreferredCache(), l = this.cacheManager.readCacheRecord(t.account, t, c), l.accessToken) {
                if (ft.wasClockTurnedBack(l.accessToken.cachedAt) || ft.isTokenExpired(l.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(en.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), z.createRefreshRequiredError();
                if (l.accessToken.refreshOn && ft.isTokenExpired(l.accessToken.refreshOn, 0))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(en.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), z.createRefreshRequiredError();
              } else
                throw (i = this.serverTelemetryManager) === null || i === void 0 || i.setCacheOutcome(en.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), z.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(l, t)];
            case 1:
              return [2, u.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, r) {
      return ne(this, void 0, void 0, function() {
        var o, i;
        return re(this, function(a) {
          switch (a.label) {
            case 0:
              if (t.idToken && (o = new Ot(t.idToken.secret, this.config.cryptoInterface)), r.maxAge || r.maxAge === 0) {
                if (i = o == null ? void 0 : o.claims.auth_time, !i)
                  throw z.createAuthTimeNotFoundError();
                Ot.checkMaxAge(i, r.maxAge);
              }
              return [4, Io.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, r, o)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e;
  }(Sa)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Kp(n) {
  return n.hasOwnProperty("authorization_endpoint") && n.hasOwnProperty("token_endpoint") && n.hasOwnProperty("issuer") && n.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Fl = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, oc = Fl.endpointMetadata, ic = Fl.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Wi = (
  /** @class */
  function() {
    function n() {
      this.expiresAt = ft.nowSeconds() + kr.REFRESH_TIME_SECONDS;
    }
    return n.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, n.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, n.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, n.prototype.resetExpiresAt = function() {
      this.expiresAt = ft.nowSeconds() + kr.REFRESH_TIME_SECONDS;
    }, n.prototype.isExpired = function() {
      return this.expiresAt <= ft.nowSeconds();
    }, n.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(kr.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function qp(n) {
  return n.hasOwnProperty("tenant_discovery_endpoint") && n.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Vp(n) {
  return n.hasOwnProperty("error") && n.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Gp = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = r;
    }
    return n.prototype.detectRegion = function(e, t) {
      var r, o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l, u, d;
        return re(this, function(f) {
          switch (f.label) {
            case 0:
              if ((r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.RegionDiscoveryDetectRegion, this.correlationId), s = e, s)
                return [3, 8];
              c = n.IMDS_OPTIONS, f.label = 1;
            case 1:
              return f.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(T.IMDS_VERSION, c)];
            case 2:
              return l = f.sent(), l.status === Gn.httpSuccess && (s = l.body, t.region_source = Xt.IMDS), l.status !== Gn.httpBadRequest ? [3, 5] : ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(c)]);
            case 3:
              return u = f.sent(), u ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(u, c)]) : (t.region_source = Xt.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              d = f.sent(), d.status === Gn.httpSuccess && (s = d.body, t.region_source = Xt.IMDS), f.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return f.sent(), t.region_source = Xt.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Xt.ENVIRONMENT_VARIABLE, f.label = 9;
            case 9:
              return s || (t.region_source = Xt.FAILED_AUTO_DETECTION), [2, s || null];
          }
        });
      });
    }, n.prototype.getRegionFromIMDS = function(e, t) {
      var r;
      return ne(this, void 0, void 0, function() {
        return re(this, function(o) {
          return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(T.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, T.IMDS_TIMEOUT)];
        });
      });
    }, n.prototype.getCurrentVersion = function(e) {
      var t;
      return ne(this, void 0, void 0, function() {
        var r;
        return re(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(T.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return r = o.sent(), r.status === Gn.httpBadRequest && r.body && r.body["newest-versions"] && r.body["newest-versions"].length > 0 ? [2, r.body["newest-versions"][0]] : [2, null];
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
    }, n.IMDS_OPTIONS = {
      headers: {
        Metadata: "true"
      }
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Lr = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a, s) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = r, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = a, this.correlationId = s, this.regionDiscovery = new Gp(t, this.performanceClient, this.correlationId);
    }
    return n.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(T.CIAM_AUTH_URL))
        return Ye.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case T.ADFS:
            return Ye.Adfs;
          case T.DSTS:
            return Ye.Dsts;
        }
      return Ye.Default;
    }, Object.defineProperty(n.prototype, "authorityType", {
      // See above for AuthorityType
      get: function() {
        return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "protocolMode", {
      /**
       * ProtocolMode enum representing the way endpoints are constructed.
       */
      get: function() {
        return this.authorityOptions.protocolMode;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "options", {
      /**
       * Returns authorityOptions which can be used to reinstantiate a new authority instance
       */
      get: function() {
        return this.authorityOptions;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "canonicalAuthority", {
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
    }), Object.defineProperty(n.prototype, "canonicalAuthorityUrlComponents", {
      /**
       * Get authority components.
       */
      get: function() {
        return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()), this._canonicalAuthorityUrlComponents;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "hostnameAndPort", {
      /**
       * Get hostname and port i.e. login.microsoftonline.com
       */
      get: function() {
        return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "tenant", {
      /**
       * Get tenant for authority.
       */
      get: function() {
        return this.canonicalAuthorityUrlComponents.PathSegments[0];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "authorizationEndpoint", {
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
    }), Object.defineProperty(n.prototype, "tokenEndpoint", {
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
    }), Object.defineProperty(n.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "endSessionEndpoint", {
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
    }), Object.defineProperty(n.prototype, "selfSignedJwtAudience", {
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
    }), Object.defineProperty(n.prototype, "jwksUri", {
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
    }), n.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !n.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Ye.Default && this.protocolMode === tr.AAD;
    }, n.prototype.replaceTenant = function(e) {
      return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, n.prototype.replacePath = function(e) {
      var t = this, r = e, o = new de(this.metadata.canonical_authority), i = o.getUrlComponents(), a = i.PathSegments, s = this.canonicalAuthorityUrlComponents.PathSegments;
      return s.forEach(function(c, l) {
        var u = a[l];
        if (l === 0 && t.canReplaceTenant(i)) {
          var d = new de(t.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          u !== d && (t.logger.verbose("Replacing tenant domain name " + u + " with id " + d), u = d);
        }
        c !== u && (r = r.replace("/" + u + "/", "/" + c + "/"));
      }), this.replaceTenant(r);
    }, Object.defineProperty(n.prototype, "defaultOpenIdConfigurationEndpoint", {
      /**
       * The default open id configuration endpoint for any canonical authority.
       */
      get: function() {
        return this.authorityType === Ye.Adfs || this.authorityType === Ye.Dsts || this.protocolMode === tr.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, n.prototype.resolveEndpointsAsync = function() {
      var e, t, r;
      return ne(this, void 0, void 0, function() {
        var o, i, a, s;
        return re(this, function(c) {
          switch (c.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new Wi(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(_.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return i = c.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(_.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
            case 2:
              return a = c.sent(), i !== dt.CACHE && a !== dt.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), s = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(s, o), this.metadata = o, [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.updateEndpointMetadata = function(e) {
      var t, r, o, i, a, s;
      return ne(this, void 0, void 0, function() {
        var c, l;
        return re(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateEndpointMetadata, this.correlationId), c = this.getEndpointMetadataFromConfig(), c ? (e.updateEndpointMetadata(c, !1), [2, dt.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, dt.CACHE] : ((r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(_.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
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
    }, n.prototype.isAuthoritySameType = function(e) {
      var t = new de(e.canonical_authority), r = t.getUrlComponents().PathSegments;
      return r.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }, n.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata)
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch {
          throw be.createInvalidAuthorityMetadataError();
        }
      return null;
    }, n.prototype.getEndpointMetadataFromNetwork = function() {
      var e;
      return ne(this, void 0, void 0, function() {
        var t, r;
        return re(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return r = o.sent(), [2, Kp(r.body) ? r.body : null];
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
    }, n.prototype.getEndpointMetadataFromHardcodedValues = function() {
      return this.canonicalAuthority in oc ? oc[this.canonicalAuthority] : null;
    }, n.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, r, o, i;
      return ne(this, void 0, void 0, function() {
        var a, s;
        return re(this, function(c) {
          switch (c.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), a = (r = this.authorityOptions.azureRegionConfiguration) === null || r === void 0 ? void 0 : r.azureRegion, a ? a !== T.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Rr.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = a, [2, n.replaceWithRegionalInformation(e, a)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((i = this.authorityOptions.azureRegionConfiguration) === null || i === void 0 ? void 0 : i.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (s = c.sent(), s)
                return this.regionDiscoveryMetadata.region_outcome = Rr.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = s, [2, n.replaceWithRegionalInformation(e, s)];
              this.regionDiscoveryMetadata.region_outcome = Rr.AUTO_DETECTION_REQUESTED_FAILED, c.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, n.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, r;
      return ne(this, void 0, void 0, function() {
        var o, i, a;
        return re(this, function(s) {
          switch (s.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || T.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || T.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || T.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, dt.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), i = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !i ? (this.logger.verbose("Found metadata in the cache."), [2, dt.CACHE]) : (i && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(_.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = s.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, dt.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), a = this.getCloudDiscoveryMetadataFromHarcodedValues(), a && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(a, !1), [2, dt.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), be.createUntrustedAuthorityError();
          }
        });
      });
    }, n.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === Ye.Ciam)
        return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), n.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      if (this.authorityOptions.cloudDiscoveryMetadata) {
        this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
        try {
          this.logger.verbose("Attempting to parse the cloud discovery metadata.");
          var e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata), t = n.getCloudDiscoveryMetadataFromNetworkResponse(e.metadata, this.hostnameAndPort);
          if (this.logger.verbose("Parsed the cloud discovery metadata."), t)
            return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), t;
          this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
        } catch {
          throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), be.createInvalidCloudDiscoveryMetadataError();
        }
      }
      return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), n.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
    }, n.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var e;
      return ne(this, void 0, void 0, function() {
        var t, r, o, i, a, s, c, l;
        return re(this, function(u) {
          switch (u.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + T.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", r = {}, o = null, u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, r)];
            case 2:
              if (i = u.sent(), a = void 0, s = void 0, qp(i.body))
                a = i.body, s = a.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + a.tenant_discovery_endpoint);
              else if (Vp(i.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + i.status), a = i.body, a.error === T.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + a.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + a.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), s = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = n.getCloudDiscoveryMetadataFromNetworkResponse(s, this.hostnameAndPort), [3, 4];
            case 3:
              return c = u.sent(), c instanceof K ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ` + c.errorCode + `
Error Description: ` + c.errorMessage) : (l = c, this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ` + l.name + `
Error Description: ` + l.message)), [2, null];
            case 4:
              return o || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), o = n.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), [2, o];
          }
        });
      });
    }, n.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function() {
      return this.canonicalAuthority in ic ? ic[this.canonicalAuthority] : null;
    }, n.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(r) {
        return de.getDomainFromUrl(r).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, n.generateAuthority = function(e, t) {
      var r;
      if (t && t.azureCloudInstance !== Dr.None) {
        var o = t.tenant ? t.tenant : T.DEFAULT_COMMON_TENANT;
        r = t.azureCloudInstance + "/" + o + "/";
      }
      return r || e;
    }, n.createCloudDiscoveryMetadataFromHost = function(e) {
      return {
        preferred_network: e,
        preferred_cache: e,
        aliases: [e]
      };
    }, n.getCloudDiscoveryMetadataFromNetworkResponse = function(e, t) {
      for (var r = 0; r < e.length; r++) {
        var o = e[r];
        if (o.aliases.indexOf(t) > -1)
          return o;
      }
      return null;
    }, n.prototype.getPreferredCache = function() {
      if (this.discoveryComplete())
        return this.metadata.preferred_cache;
      throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, n.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, n.isPublicCloudAuthority = function(e) {
      return T.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, n.buildRegionalAuthorityString = function(e, t, r) {
      var o = new de(e);
      o.validateAsUri();
      var i = o.getUrlComponents(), a = t + "." + i.HostNameAndPort;
      this.isPublicCloudAuthority(i.HostNameAndPort) && (a = t + "." + T.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var s = de.constructAuthorityUriFromObject(he(he({}, o.getUrlComponents()), { HostNameAndPort: a })).urlString;
      return r ? s + "?" + r : s;
    }, n.replaceWithRegionalInformation = function(e, t) {
      return e.authorization_endpoint = n.buildRegionalAuthorityString(e.authorization_endpoint, t), e.token_endpoint = n.buildRegionalAuthorityString(e.token_endpoint, t, T.REGIONAL_AUTH_NON_MSI_QUERY_STRING), e.end_session_endpoint && (e.end_session_endpoint = n.buildRegionalAuthorityString(e.end_session_endpoint, t)), e;
    }, n.transformCIAMAuthority = function(e) {
      var t = e.endsWith(T.FORWARD_SLASH) ? e : "" + e + T.FORWARD_SLASH, r = new de(e), o = r.getUrlComponents();
      if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(T.CIAM_AUTH_URL)) {
        var i = o.HostNameAndPort.split(".")[0];
        t = "" + t + i + T.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return t;
    }, n.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      En.COMMON,
      En.CONSUMERS,
      En.ORGANIZATIONS
    ]), n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _o = (
  /** @class */
  function() {
    function n() {
    }
    return n.createDiscoveredInstance = function(e, t, r, o, i, a, s) {
      return ne(this, void 0, void 0, function() {
        var c, l, u;
        return re(this, function(d) {
          switch (d.label) {
            case 0:
              a == null || a.addQueueMeasurement(_.AuthorityFactoryCreateDiscoveredInstance, s), c = Lr.transformCIAMAuthority(e), l = n.createInstance(c, t, r, o, i, a, s), d.label = 1;
            case 1:
              return d.trys.push([1, 3, , 4]), a == null || a.setPreQueueTime(_.AuthorityResolveEndpointsAsync, s), [4, l.resolveEndpointsAsync()];
            case 2:
              return d.sent(), [2, l];
            case 3:
              throw u = d.sent(), z.createEndpointDiscoveryIncompleteError(u);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.createInstance = function(e, t, r, o, i, a, s) {
      if (U.isEmpty(e))
        throw be.createUrlEmptyError();
      return new Lr(e, t, r, o, i, a, s);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ko = (
  /** @class */
  function() {
    function n() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return n.isServerTelemetryEntity = function(e, t) {
      var r = e.indexOf(Oe.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), r && o;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ac = (
  /** @class */
  function() {
    function n() {
    }
    return n.isThrottlingEntity = function(e, t) {
      var r = !1;
      e && (r = e.indexOf(Ar.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), r && o;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Wp = {
  sendGetRequestAsync: function() {
    var n = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(K.createUnexpectedError(n));
  },
  sendPostRequestAsync: function() {
    var n = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(K.createUnexpectedError(n));
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var oo = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, sc = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(oo.missingKidError.code, oo.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(oo.missingAlgError.code, oo.missingAlgError.desc);
    }, e;
  }(K)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Yp = (
  /** @class */
  function() {
    function n(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return n.getShrHeaderString = function(e) {
      if (!e.kid)
        throw sc.createMissingKidError();
      if (!e.alg)
        throw sc.createMissingAlgError();
      var t = new n({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || qi.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Qp = (
  /** @class */
  function() {
    function n(e, t) {
      this.cacheOutcome = en.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || T.EMPTY_STRING, this.wrapperVer = e.wrapperVer || T.EMPTY_STRING, this.telemetryCacheKey = Oe.CACHE_KEY + Ae.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return n.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Oe.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Oe.VALUE_SEPARATOR), r = this.getRegionDiscoveryFields(), o = [e, r].join(Oe.VALUE_SEPARATOR);
      return [Oe.SCHEMA_VERSION, o, t].join(Oe.CATEGORY_SEPARATOR);
    }, n.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = n.maxErrorsToSend(e), r = e.failedRequests.slice(0, 2 * t).join(Oe.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Oe.VALUE_SEPARATOR), i = e.errors.length, a = t < i ? Oe.OVERFLOW_TRUE : Oe.OVERFLOW_FALSE, s = [i, a].join(Oe.VALUE_SEPARATOR);
      return [Oe.SCHEMA_VERSION, e.cacheHits, r, o, s].join(Oe.CATEGORY_SEPARATOR);
    }, n.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Oe.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), U.isEmpty(e.subError) ? U.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Oe.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, n.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, n.prototype.getLastRequests = function() {
      var e = new ko(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, n.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = n.maxErrorsToSend(e), r = e.errors.length;
      if (t === r)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new ko();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, n.maxErrorsToSend = function(e) {
      var t, r = 0, o = 0, i = e.errors.length;
      for (t = 0; t < i; t++) {
        var a = e.failedRequests[2 * t] || T.EMPTY_STRING, s = e.failedRequests[2 * t + 1] || T.EMPTY_STRING, c = e.errors[t] || T.EMPTY_STRING;
        if (o += a.toString().length + s.toString().length + c.length + 3, o < Oe.MAX_LAST_HEADER_BYTES)
          r += 1;
        else
          break;
      }
      return r;
    }, n.prototype.getRegionDiscoveryFields = function() {
      var e = [];
      return e.push(this.regionUsed || T.EMPTY_STRING), e.push(this.regionSource || T.EMPTY_STRING), e.push(this.regionOutcome || T.EMPTY_STRING), e.join(",");
    }, n.prototype.updateRegionDiscoveryMetadata = function(e) {
      this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
    }, n.prototype.setCacheOutcome = function(e) {
      this.cacheOutcome = e;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ul = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a) {
      this.authority = t, this.libraryName = o, this.libraryVersion = i, this.applicationTelemetry = a, this.clientId = e, this.logger = r, this.callbacks = /* @__PURE__ */ new Map(), this.eventsByCorrelationId = /* @__PURE__ */ new Map(), this.queueMeasurements = /* @__PURE__ */ new Map(), this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    }
    return n.prototype.startPerformanceMeasurement = function(e, t) {
      return {};
    }, n.prototype.startPerformanceMeasuremeant = function(e, t) {
      return {};
    }, n.prototype.getIntFields = function() {
      return Bp;
    }, n.prototype.getPreQueueTime = function(e, t) {
      var r = this.preQueueTimeByCorrelationId.get(t);
      if (r) {
        if (r.name !== e) {
          this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue time found for " + e + ", unable to add queue measurement");
          return;
        }
      } else {
        this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue times found for correlationId: " + t + ", unable to add queue measurement");
        return;
      }
      return r.time;
    }, n.prototype.calculateQueuedTime = function(e, t) {
      return e < 1 ? (this.logger.trace("PerformanceClient: preQueueTime should be a positive integer and not " + e), 0) : t < 1 ? (this.logger.trace("PerformanceClient: currentTime should be a positive integer and not " + t), 0) : t < e ? (this.logger.trace("PerformanceClient: currentTime is less than preQueueTime, check how time is being retrieved"), 0) : t - e;
    }, n.prototype.addQueueMeasurement = function(e, t, r, o) {
      if (!t) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: correlationId not provided for " + e + ", cannot add queue measurement");
        return;
      }
      if (r === 0)
        this.logger.trace("PerformanceClient.addQueueMeasurement: queue time provided for " + e + " is " + r);
      else if (!r) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: no queue time provided for " + e);
        return;
      }
      var i = { eventName: e, queueTime: r, manuallyCompleted: o }, a = this.queueMeasurements.get(t);
      if (a)
        a.push(i), this.queueMeasurements.set(t, a);
      else {
        this.logger.trace("PerformanceClient.addQueueMeasurement: adding correlationId " + t + " to queue measurements");
        var s = [i];
        this.queueMeasurements.set(t, s);
      }
      this.preQueueTimeByCorrelationId.delete(t);
    }, n.prototype.startMeasurement = function(e, t) {
      var r = this, o, i, a = t || this.generateId();
      t || this.logger.info("PerformanceClient: No correlation id provided for " + e + ", generating", a), this.logger.trace("PerformanceClient: Performance measurement started for " + e, a);
      var s = this.startPerformanceMeasuremeant(e, a);
      s.startMeasurement();
      var c = {
        eventId: this.generateId(),
        status: Eo.InProgress,
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
          return r.endMeasurement(he(he({}, c), l), s);
        },
        discardMeasurement: function() {
          return r.discardMeasurements(c.correlationId);
        },
        addStaticFields: function(l) {
          return r.addStaticFields(l, c.correlationId);
        },
        increment: function(l) {
          return r.increment(l, c.correlationId);
        },
        measurement: s,
        event: c
      };
    }, n.prototype.endMeasurement = function(e, t) {
      var r = this, o, i, a = this.eventsByCorrelationId.get(e.correlationId);
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
        return a[e.name + "DurationMs"] = Math.floor(l), he({}, a);
      var u = he(he({}, a), e), d = 0;
      return (i = u.incompleteSubMeasurements) === null || i === void 0 || i.forEach(function(f) {
        r.logger.trace("PerformanceClient: Incomplete submeasurement " + f.name + " found for " + e.name, u.correlationId), d++;
      }), u.incompleteSubMeasurements = void 0, u = he(he({}, u), { durationMs: Math.round(l), queuedTimeMs: c.totalQueueTime, queuedCount: c.totalQueueCount, queuedManuallyCompletedCount: c.manuallyCompletedCount, status: Eo.Completed, incompleteSubsCount: d }), this.truncateIntegralFields(u, this.getIntFields()), this.emitEvents([u], e.correlationId), u;
    }, n.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var r = this.eventsByCorrelationId.get(t);
      r ? this.eventsByCorrelationId.set(t, he(he({}, r), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
    }, n.prototype.increment = function(e, t) {
      this.logger.trace("PerformanceClient: Updating counters");
      var r = this.eventsByCorrelationId.get(t);
      if (r)
        for (var o in e)
          r.hasOwnProperty(o) || (r[o] = 0), r[o] += e[o];
      else
        this.logger.trace("PerformanceClient: Event not found for", t);
    }, n.prototype.cacheEventByCorrelationId = function(e) {
      var t = this.eventsByCorrelationId.get(e.correlationId);
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, he({}, e)));
    }, n.prototype.getQueueInfo = function(e) {
      var t = this.queueMeasurements.get(e);
      t || this.logger.trace("PerformanceClient: no queue measurements found for for correlationId: " + e);
      var r = 0, o = 0, i = 0;
      return t == null || t.forEach(function(a) {
        r += a.queueTime, o++, i += a.manuallyCompleted ? 1 : 0;
      }), {
        totalQueueTime: r,
        totalQueueCount: o,
        manuallyCompletedCount: i
      };
    }, n.prototype.discardMeasurements = function(e) {
      this.logger.trace("PerformanceClient: Performance measurements discarded", e), this.eventsByCorrelationId.delete(e);
    }, n.prototype.discardCache = function(e) {
      this.discardMeasurements(e), this.logger.trace("PerformanceClient: QueueMeasurements discarded", e), this.queueMeasurements.delete(e), this.logger.trace("PerformanceClient: Pre-queue times discarded", e), this.preQueueTimeByCorrelationId.delete(e);
    }, n.prototype.addPerformanceCallback = function(e) {
      var t = this.generateId();
      return this.callbacks.set(t, e), this.logger.verbose("PerformanceClient: Performance callback registered with id: " + t), t;
    }, n.prototype.removePerformanceCallback = function(e) {
      var t = this.callbacks.delete(e);
      return t ? this.logger.verbose("PerformanceClient: Performance callback " + e + " removed.") : this.logger.verbose("PerformanceClient: Performance callback " + e + " not removed."), t;
    }, n.prototype.emitEvents = function(e, t) {
      var r = this;
      this.logger.verbose("PerformanceClient: Emitting performance events", t), this.callbacks.forEach(function(o, i) {
        r.logger.trace("PerformanceClient: Emitting event to callback " + i, t), o.apply(null, [e]);
      });
    }, n.prototype.truncateIntegralFields = function(e, t) {
      t.forEach(function(r) {
        r in e && typeof e[r] == "number" && (e[r] = Math.floor(e[r]));
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var cc = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.startMeasurement = function() {
    }, n.prototype.endMeasurement = function() {
    }, n.prototype.flushMeasurement = function() {
      return null;
    }, n;
  }()
), Jp = (
  /** @class */
  function(n) {
    et(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new cc();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new cc();
    }, e.prototype.calculateQueuedTime = function(t, r) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, r, o) {
    }, e.prototype.setPreQueueTime = function(t, r) {
    }, e;
  }(Ul)
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
}, L = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
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
      var r = P.popupWindowError.desc;
      return r = U.isEmpty(t) ? r : r + " Details: " + t, new e(P.popupWindowError.code, r);
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
    }, e.createPostRequestFailedError = function(t, r) {
      return new e(P.postRequestFailed.code, P.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + r.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, r) {
      return new e(P.getRequestFailed.code, P.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + r.split("?")[0]);
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
  }(K)
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
}, wr = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, Ut;
(function(n) {
  n.HandshakeRequest = "Handshake", n.HandshakeResponse = "HandshakeResponse", n.GetToken = "GetToken", n.Response = "Response";
})(Ut || (Ut = {}));
var Ie;
(function(n) {
  n.LocalStorage = "localStorage", n.SessionStorage = "sessionStorage", n.MemoryStorage = "memoryStorage";
})(Ie || (Ie = {}));
var kt;
(function(n) {
  n.GET = "GET", n.POST = "POST";
})(kt || (kt = {}));
var fe;
(function(n) {
  n.AUTHORITY = "authority", n.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", n.SESSION_STATE = "session.state", n.REQUEST_STATE = "request.state", n.NONCE_IDTOKEN = "nonce.id_token", n.ORIGIN_URI = "request.origin", n.RENEW_STATUS = "token.renew.status", n.URL_HASH = "urlHash", n.REQUEST_PARAMS = "request.params", n.SCOPES = "scopes", n.INTERACTION_STATUS_KEY = "interaction.status", n.CCS_CREDENTIAL = "ccs.credential", n.CORRELATION_ID = "request.correlationId", n.NATIVE_REQUEST = "request.native", n.REDIRECT_CONTEXT = "request.redirect.context";
})(fe || (fe = {}));
var _t;
(function(n) {
  n.ACCOUNT_KEYS = "msal.account.keys", n.TOKEN_KEYS = "msal.token.keys";
})(_t || (_t = {}));
var Jn;
(function(n) {
  n.WRAPPER_SKU = "wrapper.sku", n.WRAPPER_VER = "wrapper.version";
})(Jn || (Jn = {}));
var ve;
(function(n) {
  n[n.acquireTokenRedirect = 861] = "acquireTokenRedirect", n[n.acquireTokenPopup = 862] = "acquireTokenPopup", n[n.ssoSilent = 863] = "ssoSilent", n[n.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", n[n.handleRedirectPromise = 865] = "handleRedirectPromise", n[n.acquireTokenByCode = 866] = "acquireTokenByCode", n[n.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", n[n.logout = 961] = "logout", n[n.logoutPopup = 962] = "logoutPopup";
})(ve || (ve = {}));
var $;
(function(n) {
  n.Redirect = "redirect", n.Popup = "popup", n.Silent = "silent", n.None = "none";
})($ || ($ = {}));
var lc;
(function(n) {
  n.Startup = "startup", n.Login = "login", n.Logout = "logout", n.AcquireToken = "acquireToken", n.SsoSilent = "ssoSilent", n.HandleRedirect = "handleRedirect", n.None = "none";
})(lc || (lc = {}));
var uc = {
  scopes: qr
}, rr = "jwk", dc;
(function(n) {
  n.React = "@azure/msal-react", n.Angular = "@azure/msal-angular";
})(dc || (dc = {}));
var Yi = "msal.db", Xp = 1, Zp = Yi + ".keys", Qe;
(function(n) {
  n[n.Default = 0] = "Default", n[n.AccessToken = 1] = "AccessToken", n[n.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", n[n.RefreshToken = 3] = "RefreshToken", n[n.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", n[n.Skip = 5] = "Skip";
})(Qe || (Qe = {}));
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
}, Ao = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
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
  }(K)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var fc = (
  /** @class */
  function() {
    function n(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return n.prototype.validateWindowStorage = function(e) {
      if (e !== Ie.LocalStorage && e !== Ie.SessionStorage)
        throw Ao.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Ao.createStorageNotSupportedError(e);
    }, n.prototype.getItem = function(e) {
      return this.windowStorage.getItem(e);
    }, n.prototype.setItem = function(e, t) {
      this.windowStorage.setItem(e, t);
    }, n.prototype.removeItem = function(e) {
      this.windowStorage.removeItem(e);
    }, n.prototype.getKeys = function() {
      return Object.keys(this.windowStorage);
    }, n.prototype.containsKey = function(e) {
      return this.windowStorage.hasOwnProperty(e);
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Qi = (
  /** @class */
  function() {
    function n() {
      this.cache = /* @__PURE__ */ new Map();
    }
    return n.prototype.getItem = function(e) {
      return this.cache.get(e) || null;
    }, n.prototype.setItem = function(e, t) {
      this.cache.set(e, t);
    }, n.prototype.removeItem = function(e) {
      this.cache.delete(e);
    }, n.prototype.getKeys = function() {
      var e = [];
      return this.cache.forEach(function(t, r) {
        e.push(r);
      }), e;
    }, n.prototype.containsKey = function(e) {
      return this.cache.has(e);
    }, n.prototype.clear = function() {
      this.cache.clear();
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Hl = (
  /** @class */
  function() {
    function n() {
    }
    return n.extractBrowserRequestState = function(e, t) {
      if (U.isEmpty(t))
        return null;
      try {
        var r = Ht.parseRequestState(e, t);
        return r.libraryState.meta;
      } catch (o) {
        throw z.createInvalidStateError(t, o);
      }
    }, n.parseServerResponseFromHash = function(e) {
      if (!e)
        return {};
      var t = new de(e);
      return de.getDeserializedHash(t.getHash());
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ji = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i) {
      var a = n.call(this, t, o, i) || this;
      return a.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, a.cacheConfig = r, a.logger = i, a.internalStorage = new Qi(), a.browserStorage = a.setupBrowserStorage(a.cacheConfig.cacheLocation), a.temporaryCacheStorage = a.setupTemporaryCacheStorage(a.cacheConfig.temporaryCacheLocation, a.cacheConfig.cacheLocation), r.cacheMigrationEnabled && (a.migrateCacheEntries(), a.createKeyMaps()), a;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case Ie.LocalStorage:
        case Ie.SessionStorage:
          try {
            return new fc(t);
          } catch (r) {
            this.logger.verbose(r);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = Ie.MemoryStorage, new Qi();
    }, e.prototype.setupTemporaryCacheStorage = function(t, r) {
      switch (r) {
        case Ie.LocalStorage:
        case Ie.SessionStorage:
          try {
            return new fc(t || Ie.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case Ie.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, r = T.CACHE_PREFIX + "." + _e.ID_TOKEN, o = T.CACHE_PREFIX + "." + _e.CLIENT_INFO, i = T.CACHE_PREFIX + "." + _e.ERROR, a = T.CACHE_PREFIX + "." + _e.ERROR_DESC, s = this.browserStorage.getItem(r), c = this.browserStorage.getItem(o), l = this.browserStorage.getItem(i), u = this.browserStorage.getItem(a), d = [s, c, l, u], f = [_e.ID_TOKEN, _e.CLIENT_INFO, _e.ERROR, _e.ERROR_DESC];
      f.forEach(function(h, p) {
        return t.migrateCacheEntry(h, d[p]);
      });
    }, e.prototype.migrateCacheEntry = function(t, r) {
      r && this.setTemporaryCache(t, r, !0);
    }, e.prototype.createKeyMaps = function() {
      var t = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var r = this.getItem(_t.ACCOUNT_KEYS), o = this.getItem(_t.TOKEN_KEYS + "." + this.clientId);
      if (r && o) {
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
                case W.ID_TOKEN:
                  if (tn.isIdTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + a + " found, saving key to token key map");
                    var l = We.toObject(new tn(), c), u = t.updateCredentialCacheKey(a, l);
                    t.addTokenKey(u, W.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + a);
                  break;
                case W.ACCESS_TOKEN:
                case W.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (nn.isAccessTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + a + " found, saving key to token key map");
                    var d = We.toObject(new nn(), c), u = t.updateCredentialCacheKey(a, d);
                    t.addTokenKey(u, W.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + a);
                  break;
                case W.REFRESH_TOKEN:
                  if (Yn.isRefreshTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + a + " found, saving key to token key map");
                    var f = We.toObject(new Yn(), c), u = t.updateCredentialCacheKey(a, f);
                    t.addTokenKey(u, W.REFRESH_TOKEN);
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
            var h = t.validateAndParseJson(s);
            h && He.isAccountEntity(h) && (t.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + a + " found, saving key to account key map"), t.addAccountKeyToMap(a));
          }
        }
      });
    }, e.prototype.validateAndParseJson = function(t) {
      try {
        var r = JSON.parse(t);
        return r && typeof r == "object" ? r : null;
      } catch {
        return null;
      }
    }, e.prototype.getItem = function(t) {
      return this.browserStorage.getItem(t);
    }, e.prototype.setItem = function(t, r) {
      this.browserStorage.setItem(t, r);
    }, e.prototype.getAccount = function(t) {
      this.logger.trace("BrowserCacheManager.getAccount called");
      var r = this.getItem(t);
      if (!r)
        return this.removeAccountKeyFromMap(t), null;
      var o = this.validateAndParseJson(r);
      return !o || !He.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : We.toObject(new He(), o);
    }, e.prototype.setAccount = function(t) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var r = t.generateAccountKey();
      this.setItem(r, JSON.stringify(t)), this.addAccountKeyToMap(r);
    }, e.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var t = this.getItem(_t.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var r = this.getAccountKeys();
      r.indexOf(t) === -1 ? (r.push(t), this.setItem(_t.ACCOUNT_KEYS, JSON.stringify(r)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var r = this.getAccountKeys(), o = r.indexOf(t);
      o > -1 ? (r.splice(o, 1), this.setItem(_t.ACCOUNT_KEYS, JSON.stringify(r)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }, e.prototype.removeAccount = function(t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return n.prototype.removeAccount.call(this, t), this.removeAccountKeyFromMap(t), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeIdToken = function(t) {
      n.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, W.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return n.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, W.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      n.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, W.REFRESH_TOKEN);
    }, e.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var t = this.getItem(_t.TOKEN_KEYS + "." + this.clientId);
      if (t) {
        var r = this.validateAndParseJson(t);
        if (r && r.hasOwnProperty("idToken") && r.hasOwnProperty("accessToken") && r.hasOwnProperty("refreshToken"))
          return r;
        this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.");
      } else
        this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
      return {
        idToken: [],
        accessToken: [],
        refreshToken: []
      };
    }, e.prototype.addTokenKey = function(t, r) {
      this.logger.trace("BrowserCacheManager addTokenKey called");
      var o = this.getTokenKeys();
      switch (r) {
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
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + r), z.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, r) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (r) {
        case W.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var i = o.idToken.indexOf(t);
          i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case W.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var a = o.accessToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case W.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var s = o.refreshToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + r), z.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ID_TOKEN), null;
      var o = this.validateAndParseJson(r);
      return !o || !tn.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), We.toObject(new tn(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var r = t.generateCredentialKey();
      this.setItem(r, JSON.stringify(t)), this.addTokenKey(r, W.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(r);
      return !o || !nn.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), We.toObject(new nn(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var r = t.generateCredentialKey();
      this.setItem(r, JSON.stringify(t)), this.addTokenKey(r, W.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(r);
      return !o || !Yn.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, W.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), We.toObject(new Yn(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var r = t.generateCredentialKey();
      this.setItem(r, JSON.stringify(t)), this.addTokenKey(r, W.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return !o || !Gi.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), We.toObject(new Gi(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var r = t.generateAppMetadataKey();
      this.setItem(r, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return !o || !ko.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), We.toObject(new ko(), o));
    }, e.prototype.setServerTelemetry = function(t, r) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(r));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var r = this.internalStorage.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return o && Wi.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), We.toObject(new Wi(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, r = this.internalStorage.getKeys();
      return r.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, r) {
      this.internalStorage.setItem(Jn.WRAPPER_SKU, t), this.internalStorage.setItem(Jn.WRAPPER_VER, r);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Jn.WRAPPER_SKU) || T.EMPTY_STRING, r = this.internalStorage.getItem(Jn.WRAPPER_VER) || T.EMPTY_STRING;
      return [t, r];
    }, e.prototype.setAuthorityMetadata = function(t, r) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(t, JSON.stringify(r));
    }, e.prototype.getActiveAccount = function() {
      var t = this.generateCacheKey(_e.ACTIVE_ACCOUNT_FILTERS), r = this.getItem(t);
      if (!r) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var o = this.generateCacheKey(_e.ACTIVE_ACCOUNT), i = this.getItem(o);
        if (!i)
          return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
        var a = this.getAccountInfoByFilter({ localAccountId: i })[0] || null;
        return a ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(a), a) : null;
      }
      var s = this.validateAndParseJson(r);
      return s ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoByFilter({
        homeAccountId: s.homeAccountId,
        localAccountId: s.localAccountId
      })[0] || null) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null);
    }, e.prototype.setActiveAccount = function(t) {
      var r = this.generateCacheKey(_e.ACTIVE_ACCOUNT_FILTERS), o = this.generateCacheKey(_e.ACTIVE_ACCOUNT);
      if (t) {
        this.logger.verbose("setActiveAccount: Active account set");
        var i = {
          homeAccountId: t.homeAccountId,
          localAccountId: t.localAccountId
        };
        this.browserStorage.setItem(r, JSON.stringify(i)), this.browserStorage.setItem(o, t.localAccountId);
      } else
        this.logger.verbose("setActiveAccount: No account passed, active account not set"), this.browserStorage.removeItem(r), this.browserStorage.removeItem(o);
    }, e.prototype.getAccountInfoByFilter = function(t) {
      var r = this.getAllAccounts();
      return this.logger.trace("BrowserCacheManager.getAccountInfoByFilter: total " + r.length + " accounts found"), r.filter(function(o) {
        return !(t.username && t.username.toLowerCase() !== o.username.toLowerCase() || t.homeAccountId && t.homeAccountId !== o.homeAccountId || t.localAccountId && t.localAccountId !== o.localAccountId || t.tenantId && t.tenantId !== o.tenantId || t.environment && t.environment !== o.environment);
      });
    }, e.prototype.getAccountInfoByHints = function(t, r) {
      var o = this.getAllAccounts().filter(function(i) {
        if (r) {
          var a = i.idTokenClaims && i.idTokenClaims.sid;
          return r === a;
        }
        return t ? t === i.username : !1;
      });
      if (o.length === 1)
        return o[0];
      if (o.length > 1)
        throw z.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return !o || !ac.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), We.toObject(new ac(), o));
    }, e.prototype.setThrottlingCache = function(t, r) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(t, JSON.stringify(r));
    }, e.prototype.getTemporaryCache = function(t, r) {
      var o = r ? this.generateCacheKey(t) : t;
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
    }, e.prototype.setTemporaryCache = function(t, r, o) {
      var i = o ? this.generateCacheKey(t) : t;
      this.temporaryCacheStorage.setItem(i, r), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.setItemCookie(i, r));
    }, e.prototype.removeItem = function(t) {
      this.browserStorage.removeItem(t), this.temporaryCacheStorage.removeItem(t), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.clearItemCookie(t));
    }, e.prototype.containsKey = function(t) {
      return this.browserStorage.containsKey(t) || this.temporaryCacheStorage.containsKey(t);
    }, e.prototype.getKeys = function() {
      return ba(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, e.prototype.clear = function() {
      return R(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              return r.sent(), this.removeAppMetadata(), this.getKeys().forEach(function(o) {
                (t.browserStorage.containsKey(o) || t.temporaryCacheStorage.containsKey(o)) && (o.indexOf(T.CACHE_PREFIX) !== -1 || o.indexOf(t.clientId) !== -1) && t.removeItem(o);
              }), this.internalStorage.clear(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.clearTokensAndKeysWithClaims = function() {
      return R(this, void 0, void 0, function() {
        var t, r, o = this;
        return N(this, function(i) {
          switch (i.label) {
            case 0:
              return this.logger.trace("BrowserCacheManager.clearTokensAndKeysWithClaims called"), t = this.getTokenKeys(), r = [], t.accessToken.forEach(function(a) {
                var s = o.getAccessTokenCredential(a);
                s != null && s.requestedClaimsHash && a.includes(s.requestedClaimsHash.toLowerCase()) && r.push(o.removeAccessToken(a));
              }), [4, Promise.all(r)];
            case 1:
              return i.sent(), r.length > 0 && this.logger.warning(r.length + " access tokens with claims in the cache keys have been removed from the cache."), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.setItemCookie = function(t, r, o) {
      var i = encodeURIComponent(t) + "=" + encodeURIComponent(r) + ";path=/;SameSite=Lax;";
      if (o) {
        var a = this.getCookieExpirationTime(o);
        i += "expires=" + a + ";";
      }
      this.cacheConfig.secureCookies && (i += "Secure;"), document.cookie = i;
    }, e.prototype.getItemCookie = function(t) {
      for (var r = encodeURIComponent(t) + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var a = o[i]; a.charAt(0) === " "; )
          a = a.substring(1);
        if (a.indexOf(r) === 0)
          return decodeURIComponent(a.substring(r.length, a.length));
      }
      return T.EMPTY_STRING;
    }, e.prototype.clearMsalCookies = function() {
      var t = this, r = T.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(i) {
        for (; i.charAt(0) === " "; )
          i = i.substring(1);
        if (i.indexOf(r) === 0) {
          var a = i.split("=")[0];
          t.clearItemCookie(a);
        }
      });
    }, e.prototype.clearItemCookie = function(t) {
      this.setItemCookie(t, T.EMPTY_STRING, -1);
    }, e.prototype.getCookieExpirationTime = function(t) {
      var r = /* @__PURE__ */ new Date(), o = new Date(r.getTime() + t * this.COOKIE_LIFE_MULTIPLIER);
      return o.toUTCString();
    }, e.prototype.getCache = function() {
      return this.browserStorage;
    }, e.prototype.setCache = function() {
    }, e.prototype.generateCacheKey = function(t) {
      var r = this.validateAndParseJson(t);
      return r ? JSON.stringify(t) : U.startsWith(t, T.CACHE_PREFIX) || U.startsWith(t, _e.ADAL_ID_TOKEN) ? t : T.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var r = Ht.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(fe.AUTHORITY + "." + r);
    }, e.prototype.generateNonceKey = function(t) {
      var r = Ht.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(fe.NONCE_IDTOKEN + "." + r);
    }, e.prototype.generateStateKey = function(t) {
      var r = Ht.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(fe.REQUEST_STATE + "." + r);
    }, e.prototype.getCachedAuthority = function(t) {
      var r = this.generateStateKey(t), o = this.getTemporaryCache(r);
      if (!o)
        return null;
      var i = this.generateAuthorityKey(o);
      return this.getTemporaryCache(i);
    }, e.prototype.updateCacheEntries = function(t, r, o, i, a) {
      this.logger.trace("BrowserCacheManager.updateCacheEntries called");
      var s = this.generateStateKey(t);
      this.setTemporaryCache(s, t, !1);
      var c = this.generateNonceKey(t);
      this.setTemporaryCache(c, r, !1);
      var l = this.generateAuthorityKey(t);
      if (this.setTemporaryCache(l, o, !1), a) {
        var u = {
          credential: a.homeAccountId,
          type: nt.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(fe.CCS_CREDENTIAL, JSON.stringify(u), !0);
      } else if (!U.isEmpty(i)) {
        var u = {
          credential: i,
          type: nt.UPN
        };
        this.setTemporaryCache(fe.CCS_CREDENTIAL, JSON.stringify(u), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var r = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), U.isEmpty(t) || this.getKeys().forEach(function(o) {
        o.indexOf(t) !== -1 && r.removeItem(o);
      }), t && (this.removeItem(this.generateStateKey(t)), this.removeItem(this.generateNonceKey(t)), this.removeItem(this.generateAuthorityKey(t))), this.removeItem(this.generateCacheKey(fe.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(fe.ORIGIN_URI)), this.removeItem(this.generateCacheKey(fe.URL_HASH)), this.removeItem(this.generateCacheKey(fe.CORRELATION_ID)), this.removeItem(this.generateCacheKey(fe.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(fe.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, e.prototype.cleanRequestByState = function(t) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), t) {
        var r = this.generateStateKey(t), o = this.temporaryCacheStorage.getItem(r);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || T.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var r = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(fe.REQUEST_STATE) !== -1) {
          var i = r.temporaryCacheStorage.getItem(o);
          if (i) {
            var a = Hl.extractBrowserRequestState(r.cryptoImpl, i);
            a && a.interactionType === t && (r.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + i), r.resetRequestCache(i));
          }
        }
      }), this.clearMsalCookies(), this.setInteractionInProgress(!1);
    }, e.prototype.cacheCodeRequest = function(t, r) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var o = r.base64Encode(JSON.stringify(t));
      this.setTemporaryCache(fe.REQUEST_PARAMS, o, !0);
    }, e.prototype.getCachedRequest = function(t, r) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var o = this.getTemporaryCache(fe.REQUEST_PARAMS, !0);
      if (!o)
        throw L.createNoTokenRequestCacheError();
      var i = this.validateAndParseJson(r.base64Decode(o));
      if (!i)
        throw L.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(fe.REQUEST_PARAMS)), U.isEmpty(i.authority)) {
        var a = this.generateAuthorityKey(t), s = this.getTemporaryCache(a);
        if (!s)
          throw L.createNoCachedAuthorityError();
        i.authority = s;
      }
      return i;
    }, e.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var t = this.getTemporaryCache(fe.NATIVE_REQUEST, !0);
      if (!t)
        return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null;
      var r = this.validateAndParseJson(t);
      return r || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null);
    }, e.prototype.isInteractionInProgress = function(t) {
      var r = this.getInteractionInProgress();
      return t ? r === this.clientId : !!r;
    }, e.prototype.getInteractionInProgress = function() {
      var t = T.CACHE_PREFIX + "." + fe.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(t, !1);
    }, e.prototype.setInteractionInProgress = function(t) {
      var r = T.CACHE_PREFIX + "." + fe.INTERACTION_STATUS_KEY;
      if (t) {
        if (this.getInteractionInProgress())
          throw L.createInteractionInProgressError();
        this.setTemporaryCache(r, this.clientId, !1);
      } else
        !t && this.getInteractionInProgress() === this.clientId && this.removeItem(r);
    }, e.prototype.getLegacyLoginHint = function() {
      var t = this.getTemporaryCache(_e.ADAL_ID_TOKEN);
      t && (this.browserStorage.removeItem(_e.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
      var r = this.getTemporaryCache(_e.ID_TOKEN, !0);
      r && (this.removeItem(this.generateCacheKey(_e.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
      var o = r || t;
      if (o) {
        var i = new Ot(o, this.cryptoImpl);
        if (i.claims && i.claims.preferred_username)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"), i.claims.preferred_username;
        if (i.claims && i.claims.upn)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"), i.claims.upn;
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
      }
      return null;
    }, e.prototype.updateCredentialCacheKey = function(t, r) {
      var o = r.generateCredentialKey();
      if (t !== o) {
        var i = this.getItem(t);
        if (i)
          return this.removeItem(t), this.setItem(o, i), this.logger.verbose("Updated an outdated " + r.credentialType + " cache key"), o;
        this.logger.error("Attempted to update an outdated " + r.credentialType + " cache key but no item matching the outdated key was found in storage");
      }
      return t;
    }, e.prototype.getRedirectRequestContext = function() {
      return this.getTemporaryCache(fe.REDIRECT_CONTEXT, !0);
    }, e.prototype.setRedirectRequestContext = function(t) {
      this.setTemporaryCache(fe.REDIRECT_CONTEXT, t, !0);
    }, e.prototype.hydrateCache = function(t, r) {
      var o, i, a, s, c, l;
      return R(this, void 0, void 0, function() {
        var u, d, f, h;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return u = tn.createIdTokenEntity(((o = t.account) === null || o === void 0 ? void 0 : o.homeAccountId) || "", ((i = t.account) === null || i === void 0 ? void 0 : i.environment) || "", t.idToken, this.clientId, t.tenantId), r.claims ? [4, this.cryptoImpl.hashString(r.claims)] : [3, 2];
            case 1:
              d = p.sent(), p.label = 2;
            case 2:
              return f = nn.createAccessTokenEntity(
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
                r.sshKid,
                r.claims,
                d
              ), h = new Xn(void 0, u, f), [2, this.saveCacheRecord(h)];
          }
        });
      });
    }, e;
  }(We)
), eg = function(n, e) {
  var t = {
    cacheLocation: Ie.MemoryStorage,
    temporaryCacheLocation: Ie.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new Ji(n, t, wo, e);
};
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var yi = "@azure/msal-browser", Pr = "2.39.0";
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var tg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.sendGetRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r, o, i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, fetch(e, {
                method: kt.GET,
                headers: this.getFetchHeaders(t)
              })];
            case 1:
              return r = a.sent(), [3, 3];
            case 2:
              throw o = a.sent(), window.navigator.onLine ? L.createGetRequestFailedError(o, e) : L.createNoNetworkConnectivityError();
            case 3:
              return a.trys.push([3, 5, , 6]), i = {
                headers: this.getHeaderDict(r.headers)
              }, [4, r.json()];
            case 4:
              return [2, (i.body = a.sent(), i.status = r.status, i)];
            case 5:
              throw a.sent(), L.createFailedToParseNetworkResponseError(e);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.sendPostRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              r = t && t.body || T.EMPTY_STRING, s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, fetch(e, {
                method: kt.POST,
                headers: this.getFetchHeaders(t),
                body: r
              })];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw i = s.sent(), window.navigator.onLine ? L.createPostRequestFailedError(i, e) : L.createNoNetworkConnectivityError();
            case 4:
              return s.trys.push([4, 6, , 7]), a = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (a.body = s.sent(), a.status = o.status, a)];
            case 6:
              throw s.sent(), L.createFailedToParseNetworkResponseError(e);
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.getFetchHeaders = function(e) {
      var t = new Headers();
      if (!(e && e.headers))
        return t;
      var r = e.headers;
      return Object.keys(r).forEach(function(o) {
        t.append(o, r[o]);
      }), t;
    }, n.prototype.getHeaderDict = function(e) {
      var t = {};
      return e.forEach(function(r, o) {
        t[o] = r;
      }), t;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ng = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.sendGetRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return [2, this.sendRequestAsync(e, kt.GET, t)];
        });
      });
    }, n.prototype.sendPostRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return [2, this.sendRequestAsync(e, kt.POST, t)];
        });
      });
    }, n.prototype.sendRequestAsync = function(e, t, r) {
      var o = this;
      return new Promise(function(i, a) {
        var s = new XMLHttpRequest();
        if (s.open(
          t,
          e,
          /* async: */
          !0
        ), o.setXhrHeaders(s, r), s.onload = function() {
          (s.status < 200 || s.status >= 300) && (t === kt.POST ? a(L.createPostRequestFailedError("Failed with status " + s.status, e)) : a(L.createGetRequestFailedError("Failed with status " + s.status, e)));
          try {
            var c = JSON.parse(s.responseText), l = {
              headers: o.getHeaderDict(s),
              body: c,
              status: s.status
            };
            i(l);
          } catch {
            a(L.createFailedToParseNetworkResponseError(e));
          }
        }, s.onerror = function() {
          window.navigator.onLine ? t === kt.POST ? a(L.createPostRequestFailedError("Failed with status " + s.status, e)) : a(L.createGetRequestFailedError("Failed with status " + s.status, e)) : a(L.createNoNetworkConnectivityError());
        }, t === kt.POST && r && r.body)
          s.send(r.body);
        else if (t === kt.GET)
          s.send();
        else
          throw L.createHttpMethodNotImplementedError(t);
      });
    }, n.prototype.setXhrHeaders = function(e, t) {
      if (t && t.headers) {
        var r = t.headers;
        Object.keys(r).forEach(function(o) {
          e.setRequestHeader(o, r[o]);
        });
      }
    }, n.prototype.getHeaderDict = function(e) {
      var t = e.getAllResponseHeaders(), r = t.trim().split(/[\r\n]+/), o = {};
      return r.forEach(function(i) {
        var a = i.split(": "), s = a.shift(), c = a.join(": ");
        s && c && (o[s] = c);
      }), o;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Se = (
  /** @class */
  function() {
    function n() {
    }
    return n.clearHash = function(e) {
      e.location.hash = T.EMPTY_STRING, typeof e.history.replaceState == "function" && e.history.replaceState(null, T.EMPTY_STRING, "" + e.location.origin + e.location.pathname + e.location.search);
    }, n.replaceHash = function(e) {
      var t = e.split("#");
      t.shift(), window.location.hash = t.length > 0 ? t.join("#") : T.EMPTY_STRING;
    }, n.isInIframe = function() {
      return window.parent !== window;
    }, n.isInPopup = function() {
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(bt.POPUP_NAME_PREFIX + ".") === 0;
    }, n.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, n.getHomepage = function() {
      var e = new de(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, n.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new tg() : new ng();
    }, n.blockReloadInHiddenIframes = function() {
      var e = de.hashContainsKnownProperties(window.location.hash);
      if (e && n.isInIframe())
        throw L.createBlockReloadInHiddenIframeError();
    }, n.blockRedirectInIframe = function(e, t) {
      var r = n.isInIframe();
      if (e === $.Redirect && r && !t)
        throw L.createRedirectInIframeError(r);
    }, n.blockAcquireTokenInPopups = function() {
      if (n.isInPopup())
        throw L.createBlockAcquireTokenInPopupsError();
    }, n.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw L.createNonBrowserEnvironmentError();
    }, n.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw L.createNativeBrokerCalledBeforeInitialize();
    }, n.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), r = e.indexOf("Trident/"), o = e.indexOf("Edge/"), i = t > 0 || r > 0, a = o > 0;
      return i || a;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Bl = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a, s, c, l) {
      this.config = e, this.browserStorage = t, this.browserCrypto = r, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = a, this.nativeMessageHandler = c, this.correlationId = l || this.browserCrypto.createNewGuid(), this.logger = o.clone(bt.MSAL_SKU, Pr, this.correlationId), this.performanceClient = s;
    }
    return n.prototype.clearCacheOnLogout = function(e) {
      return R(this, void 0, void 0, function() {
        return N(this, function(t) {
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
    }, n.prototype.initializeBaseRequest = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.InitializeBaseRequest, e.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), r = e.authority || this.config.auth.authority, t ? [4, this.validateRequestAuthority(r, t)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              if (o = ba(e && e.scopes || []), i = B(B({}, e), {
                correlationId: this.correlationId,
                authority: r,
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
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !U.isEmptyObj(e.claims) ? (a = i, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
            case 3:
              a.requestedClaimsHash = s.sent(), s.label = 4;
            case 4:
              return [2, i];
          }
        });
      });
    }, n.prototype.getRedirectUri = function(e) {
      this.logger.verbose("getRedirectUri called");
      var t = e || this.config.auth.redirectUri || Se.getCurrentUri();
      return de.getAbsoluteUrl(t, Se.getCurrentUri());
    }, n.prototype.validateRequestAuthority = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(e)];
            case 1:
              if (r = o.sent(), !r.isAlias(t.environment))
                throw be.createAuthorityMismatchError();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.initializeServerTelemetryManager = function(e, t) {
      this.logger.verbose("initializeServerTelemetryManager called");
      var r = {
        clientId: this.config.auth.clientId,
        correlationId: this.correlationId,
        apiId: e,
        forceRefresh: t || !1,
        wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
        wrapperVer: this.browserStorage.getWrapperMetadata()[1]
      };
      return new Qp(r, this.browserStorage);
    }, n.prototype.getDiscoveredAuthority = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return this.logger.verbose("getDiscoveredAuthority called"), t = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, _o.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, r.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, _o.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, r.sent()];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var cr = (
  /** @class */
  function(n) {
    De(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.initializeAuthorizationCodeRequest = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o;
        return N(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), this.logger.verbose("initializeAuthorizationRequest called", t.correlationId), [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              return r = i.sent(), o = B(B({}, t), { redirectUri: t.redirectUri, code: T.EMPTY_STRING, codeVerifier: r.verifier }), t.codeChallenge = r.challenge, t.codeChallengeMethod = T.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, e.prototype.initializeLogoutRequest = function(t) {
      this.logger.verbose("initializeLogoutRequest called", t == null ? void 0 : t.correlationId);
      var r = B({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, t);
      if (t)
        if (t.logoutHint)
          this.logger.verbose("logoutHint has already been set in logoutRequest");
        else if (t.account) {
          var o = this.getLogoutHintFromIdTokenClaims(t.account);
          o && (this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided"), r.logoutHint = o);
        } else
          this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
      else
        this.logger.verbose("logoutHint will not be set since no logout request was configured");
      return !t || t.postLogoutRedirectUri !== null ? t && t.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", r.correlationId), r.postLogoutRedirectUri = de.getAbsoluteUrl(t.postLogoutRedirectUri, Se.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", r.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", r.correlationId), r.postLogoutRedirectUri = de.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, Se.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", r.correlationId), r.postLogoutRedirectUri = de.getAbsoluteUrl(Se.getCurrentUri(), Se.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", r.correlationId), r;
    }, e.prototype.getLogoutHintFromIdTokenClaims = function(t) {
      var r = t.idTokenClaims;
      if (r) {
        if (r.login_hint)
          return r.login_hint;
        this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
      } else
        this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
      return null;
    }, e.prototype.createAuthCodeClient = function(t, r, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, r, o)];
            case 1:
              return i = a.sent(), [2, new Ll(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.getClientConfiguration = function(t, r, o) {
      return R(this, void 0, void 0, function() {
        var i, a;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(r, o)];
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
                  version: Pr,
                  cpu: T.EMPTY_STRING,
                  os: T.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    }, e.prototype.validateAndExtractStateFromHash = function(t, r, o) {
      if (this.logger.verbose("validateAndExtractStateFromHash called", o), !t.state)
        throw L.createHashDoesNotContainStateError();
      var i = Hl.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!i)
        throw L.createUnableToParseStateError();
      if (i.interactionType !== r)
        throw L.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), t.state;
    }, e.prototype.getDiscoveredAuthority = function(t, r) {
      var o;
      return R(this, void 0, void 0, function() {
        var i, a, s, c;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), a = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, s = t || this.config.auth.authority, c = Lr.generateAuthority(s, r || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(_.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, _o.createDiscoveredInstance(c, this.config.system.networkClient, this.browserStorage, a, this.logger, this.performanceClient, this.correlationId).then(function(u) {
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
    }, e.prototype.initializeAuthorizationRequest = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), i = {
                interactionType: r
              }, a = Ht.setRequestState(this.browserCrypto, t && t.state || T.EMPTY_STRING, i), this.performanceClient.setPreQueueTime(_.InitializeBaseRequest, this.correlationId), c = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return s = B.apply(void 0, [B.apply(void 0, c.concat([d.sent()])), { redirectUri: o, state: a, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: vo.FRAGMENT }]), l = t.account || this.browserStorage.getActiveAccount(), l && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + l.homeAccountId, this.correlationId), s.account = l), U.isEmpty(s.loginHint) && !l && (u = this.browserStorage.getLegacyLoginHint(), u && (s.loginHint = u)), [2, s];
          }
        });
      });
    }, e;
  }(Bl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ea = (
  /** @class */
  function() {
    function n(e, t, r, o, i) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = r, this.logger = o, this.performanceClient = i;
    }
    return n.prototype.handleCodeResponseFromHash = function(e, t, r, o) {
      return R(this, void 0, void 0, function() {
        var i, a, s;
        return N(this, function(c) {
          if (this.performanceClient.addQueueMeasurement(_.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), U.isEmpty(e))
            throw L.createEmptyHashError(e);
          if (i = this.browserStorage.generateStateKey(t), a = this.browserStorage.getTemporaryCache(i), !a)
            throw z.createStateNotFoundError("Cached State");
          try {
            s = this.authModule.handleFragmentResponse(e, a);
          } catch (l) {
            throw l instanceof An && l.subError === P.userCancelledError.code ? L.createUserCancelledError() : l;
          }
          return this.performanceClient.setPreQueueTime(_.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(s, t, r, o)];
        });
      });
    }, n.prototype.handleCodeResponseFromServer = function(e, t, r, o, i) {
      return i === void 0 && (i = !0), R(this, void 0, void 0, function() {
        var a, s, c, l, u, d;
        return N(this, function(f) {
          switch (f.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
                throw z.createStateNotFoundError("Cached State");
              return c = this.browserStorage.generateNonceKey(s), l = this.browserStorage.getTemporaryCache(c), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(_.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, r, o)]) : [3, 2];
            case 1:
              f.sent(), f.label = 2;
            case 2:
              return i && (e.nonce = l || void 0), e.state = s, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (u = this.checkCcsCredentials(), u && (this.authCodeRequest.ccsCredential = u)), this.performanceClient.setPreQueueTime(_.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return d = f.sent(), this.browserStorage.cleanRequestByState(t), [2, d];
          }
        });
      });
    }, n.prototype.updateTokenEndpointAuthority = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, _o.createDiscoveredInstance(o, r, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              return i = a.sent(), this.authModule.updateAuthority(i), [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.checkCcsCredentials = function() {
      var e = this.browserStorage.getTemporaryCache(fe.CCS_CREDENTIAL, !0);
      if (e)
        try {
          return JSON.parse(e);
        } catch {
          this.authModule.logger.error("Cache credential could not be parsed"), this.authModule.logger.errorPii("Cache credential could not be parsed: " + e);
        }
      return null;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hc = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s) {
      var c = n.call(this, t, r, o, i, s) || this;
      return c.browserCrypto = a, c;
    }
    return e.prototype.initiateAuthRequest = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), U.isEmpty(t) ? [3, 7] : (r.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(fe.ORIGIN_URI, r.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(fe.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
                apiId: ve.acquireTokenRedirect,
                timeout: r.redirectTimeout,
                noHistory: !1
              }, typeof r.onRedirectNavigate != "function" ? [3, 4] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), i = r.onRedirectNavigate(t), i === !1 ? [3, 2] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), [4, r.navigationClient.navigateExternal(t, o)])));
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url"), [4, r.navigationClient.navigateExternal(t, o)];
            case 5:
              return a.sent(), [
                2
                /*return*/
              ];
            case 6:
              return [3, 8];
            case 7:
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), L.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleCodeResponseFromHash = function(t, r, o, i) {
      return R(this, void 0, void 0, function() {
        var a, s, c, l, u, d, f;
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), U.isEmpty(t))
                throw L.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), a = this.browserStorage.generateStateKey(r), s = this.browserStorage.getTemporaryCache(a), !s)
                throw z.createStateNotFoundError("Cached State");
              try {
                c = this.authModule.handleFragmentResponse(t, s);
              } catch (p) {
                throw p instanceof An && p.subError === P.userCancelledError.code ? L.createUserCancelledError() : p;
              }
              return l = this.browserStorage.generateNonceKey(s), u = this.browserStorage.getTemporaryCache(l), this.authCodeRequest.code = c.code, c.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(c.cloud_instance_host_name, o, i)] : [3, 2];
            case 1:
              h.sent(), h.label = 2;
            case 2:
              return c.nonce = u || void 0, c.state = s, c.client_info ? this.authCodeRequest.clientInfo = c.client_info : (d = this.checkCcsCredentials(), d && (this.authCodeRequest.ccsCredential = d)), [4, this.authModule.acquireToken(this.authCodeRequest, c)];
            case 3:
              return f = h.sent(), this.browserStorage.cleanRequestByState(r), [2, f];
          }
        });
      });
    }, e;
  }(Ea)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ee;
(function(n) {
  n.INITIALIZE_START = "msal:initializeStart", n.INITIALIZE_END = "msal:initializeEnd", n.ACCOUNT_ADDED = "msal:accountAdded", n.ACCOUNT_REMOVED = "msal:accountRemoved", n.LOGIN_START = "msal:loginStart", n.LOGIN_SUCCESS = "msal:loginSuccess", n.LOGIN_FAILURE = "msal:loginFailure", n.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", n.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", n.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", n.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", n.SSO_SILENT_START = "msal:ssoSilentStart", n.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", n.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", n.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", n.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", n.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", n.HANDLE_REDIRECT_START = "msal:handleRedirectStart", n.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", n.POPUP_OPENED = "msal:popupOpened", n.LOGOUT_START = "msal:logoutStart", n.LOGOUT_SUCCESS = "msal:logoutSuccess", n.LOGOUT_FAILURE = "msal:logoutFailure", n.LOGOUT_END = "msal:logoutEnd", n.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(ee || (ee = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Zt;
(function(n) {
  n.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", n.USER_CANCEL = "USER_CANCEL", n.NO_NETWORK = "NO_NETWORK", n.TRANSIENT_ERROR = "TRANSIENT_ERROR", n.PERSISTENT_ERROR = "PERSISTENT_ERROR", n.DISABLED = "DISABLED", n.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(Zt || (Zt = {}));
var mr = {
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
  function(n) {
    De(e, n);
    function e(t, r, o) {
      var i = n.call(this, t, r) || this;
      return Object.setPrototypeOf(i, e.prototype), i.name = "NativeAuthError", i.ext = o, i;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Zt.PERSISTENT_ERROR || this.ext.status === Zt.DISABLED))
        return !0;
      switch (this.errorCode) {
        case mr.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, e.createError = function(t, r, o) {
      if (o && o.status)
        switch (o.status) {
          case Zt.ACCOUNT_UNAVAILABLE:
            return wt.createNativeAccountUnavailableError();
          case Zt.USER_INTERACTION_REQUIRED:
            return new wt(t, r);
          case Zt.USER_CANCEL:
            return L.createUserCancelledError();
          case Zt.NO_NETWORK:
            return L.createNoNetworkConnectivityError();
        }
      return new e(t, r, o);
    }, e.createUserSwitchError = function() {
      return new e(mr.userSwitch.code, mr.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(mr.tokensNotFoundInCache.code, mr.tokensNotFoundInCache.desc);
    }, e;
  }(K)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var zl = (
  /** @class */
  function(n) {
    De(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s;
        return N(this, function(c) {
          switch (c.label) {
            case 0:
              return r = this.performanceClient.startMeasurement(_.SilentCacheClientAcquireToken, t.correlationId), o = this.initializeServerTelemetryManager(ve.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, t.authority, t.azureCloudOptions)];
            case 1:
              i = c.sent(), this.logger.verbose("Silent auth client created"), c.label = 2;
            case 2:
              return c.trys.push([2, 4, , 5]), [4, i.acquireCachedToken(t)];
            case 3:
              return a = c.sent(), r.endMeasurement({
                success: !0,
                fromCache: !0
              }), [2, a];
            case 4:
              throw s = c.sent(), s instanceof L && s.errorCode === P.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), r.endMeasurement({
                errorCode: s instanceof K && s.errorCode || void 0,
                subErrorCode: s instanceof K && s.subError || void 0,
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
      return Promise.reject(L.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, r, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, r, o)];
            case 1:
              return i = a.sent(), [2, new $p(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o;
        return N(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(_.InitializeBaseRequest, this.correlationId), o = [B({}, t)], [4, this.initializeBaseRequest(t, r)];
            case 1:
              return [2, B.apply(void 0, [B.apply(void 0, o.concat([i.sent()])), { account: r, forceRefresh: t.forceRefresh || !1 }])];
          }
        });
      });
    }, e;
  }(cr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Zn = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s, c, l, u, d, f, h) {
      var p = n.call(this, t, r, o, i, a, s, l, u, h) || this;
      return p.apiId = c, p.accountId = d, p.nativeMessageHandler = u, p.nativeStorageManager = f, p.silentCacheClient = new zl(t, p.nativeStorageManager, o, i, a, s, l, u, h), p;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), r = this.performanceClient.startMeasurement(_.NativeInteractionClientAcquireToken, t.correlationId), o = ft.nowSeconds(), [4, this.initializeNativeRequest(t)];
            case 1:
              i = u.sent(), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), [4, this.acquireTokensFromCache(this.accountId, i)];
            case 3:
              return a = u.sent(), r.endMeasurement({
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
              return c = u.sent(), l = this.validateNativeResponse(c), [2, this.handleNativeResponse(l, i, o).then(function(d) {
                return r.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: d.requestId
                }), d;
              }).catch(function(d) {
                throw r.endMeasurement({
                  success: !1,
                  errorCode: d.errorCode,
                  subErrorCode: d.subError,
                  isNativeBroker: !0
                }), d;
              })];
          }
        });
      });
    }, e.prototype.createSilentCacheRequest = function(t, r) {
      return {
        authority: t.authority,
        correlationId: this.correlationId,
        scopes: je.fromString(t.scope).asArray(),
        account: r,
        forceRefresh: !1
      };
    }, e.prototype.acquireTokensFromCache = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              if (!t)
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), z.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw z.createNoAccountFoundError();
              l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), i = this.createSilentCacheRequest(r, o), [4, this.silentCacheClient.acquireToken(i)];
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
        var r, o, i, a, s, c;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireTokenRedirect called."), [4, this.initializeNativeRequest(t)];
            case 1:
              r = l.sent(), o = {
                method: Ut.GetToken,
                request: r
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
              return this.browserStorage.setTemporaryCache(fe.NATIVE_REQUEST, JSON.stringify(r), !0), s = {
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
        var t, r, o, i, a, s, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (t = this.browserStorage.getCachedNativeRequest(), !t)
                return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), [2, null];
              r = t.prompt, o = Zs(t, ["prompt"]), r && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(fe.NATIVE_REQUEST)), i = {
                method: Ut.GetToken,
                request: o
              }, a = ft.nowSeconds(), u.label = 1;
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
    }, e.prototype.handleNativeResponse = function(t, r, o) {
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleNativeResponse called."), t.account.id !== r.accountId)
                throw Rt.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(r.authority)];
            case 1:
              return i = u.sent(), a = this.createIdTokenObj(t), s = this.createHomeAccountIdentifier(t, a), c = He.createAccount({
                homeAccountId: s,
                idTokenClaims: a.claims,
                clientInfo: t.client_info,
                nativeAccountId: t.account.id
              }, i), [4, this.generateAuthenticationResult(t, r, a, c, i.canonicalAuthority, o)];
            case 2:
              return l = u.sent(), this.cacheAccount(c), this.cacheNativeTokens(t, r, s, a, l.accessToken, l.tenantId, o), [2, l];
          }
        });
      });
    }, e.prototype.createIdTokenObj = function(t) {
      return new Ot(t.id_token || T.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, r) {
      var o = He.generateHomeAccountId(t.client_info || T.EMPTY_STRING, Ye.Default, this.logger, this.browserCrypto, r.claims);
      return o;
    }, e.prototype.generateScopes = function(t, r) {
      return t.scope ? je.fromString(t.scope) : je.fromString(r.scope);
    }, e.prototype.generatePopAccessToken = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              if (r.tokenType !== ge.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new nr(this.browserCrypto), i = {
                resourceRequestMethod: r.resourceRequestMethod,
                resourceRequestUri: r.resourceRequestUri,
                shrClaims: r.shrClaims,
                shrNonce: r.shrNonce
              }, !r.keyId)
                throw z.createKeyIdMissingError();
              return [4, o.signPopToken(t.access_token, r.keyId, i)];
            case 1:
              return [2, a.sent()];
            case 2:
              return [2, t.access_token];
          }
        });
      });
    }, e.prototype.generateAuthenticationResult = function(t, r, o, i, a, s) {
      return R(this, void 0, void 0, function() {
        var c, l, u, d, f, h, p, g;
        return N(this, function(m) {
          switch (m.label) {
            case 0:
              return c = this.addTelemetryFromNativeResponse(t), l = t.scope ? je.fromString(t.scope) : je.fromString(r.scope), u = t.account.properties || {}, d = u.UID || o.claims.oid || o.claims.sub || T.EMPTY_STRING, f = u.TenantId || o.claims.tid || T.EMPTY_STRING, [4, this.generatePopAccessToken(t, r)];
            case 1:
              return h = m.sent(), p = r.tokenType === ge.POP ? ge.POP : ge.BEARER, g = {
                authority: a,
                uniqueId: d,
                tenantId: f,
                scopes: l.asArray(),
                account: i.getAccountInfo(),
                idToken: t.id_token,
                idTokenClaims: o.claims,
                accessToken: h,
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
      var r = this;
      this.browserStorage.setAccount(t), this.browserStorage.removeAccountContext(t).catch(function(o) {
        r.logger.error("Error occurred while removing account context from browser storage. " + o);
      });
    }, e.prototype.cacheNativeTokens = function(t, r, o, i, a, s, c) {
      var l = tn.createIdTokenEntity(o, r.authority, t.id_token || T.EMPTY_STRING, r.clientId, i.claims.tid || T.EMPTY_STRING), u = r.tokenType === ge.POP ? T.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, d = c + u, f = this.generateScopes(t, r), h = nn.createAccessTokenEntity(o, r.authority, a, r.clientId, i ? i.claims.tid || T.EMPTY_STRING : s, f.printScopes(), d, 0, this.browserCrypto), p = new Xn(void 0, l, h);
      this.nativeStorageManager.saveCacheRecord(p);
    }, e.prototype.addTelemetryFromNativeResponse = function(t) {
      var r = this.getMATSFromResponse(t);
      return r ? (this.performanceClient.addStaticFields({
        extensionId: this.nativeMessageHandler.getExtensionId(),
        extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
        matsBrokerVersion: r.broker_version,
        matsAccountJoinOnStart: r.account_join_on_start,
        matsAccountJoinOnEnd: r.account_join_on_end,
        matsDeviceJoin: r.device_join,
        matsPromptBehavior: r.prompt_behavior,
        matsApiErrorCode: r.api_error_code,
        matsUiVisible: r.ui_visible,
        matsSilentCode: r.silent_code,
        matsSilentBiSubCode: r.silent_bi_sub_code,
        matsSilentMessage: r.silent_message,
        matsSilentStatus: r.silent_status,
        matsHttpStatus: r.http_status,
        matsHttpEventCount: r.http_event_count
      }, this.correlationId), r) : null;
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
        var r, o, i, a, s, c, l, u, d, f, h = this;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), r = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(r, t.account)] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return o = new de(r), o.validateAsUri(), i = t.scopes, a = Zs(t, ["scopes"]), s = new je(i || []), s.appendScopes(qr), c = function() {
                switch (h.apiId) {
                  case ve.ssoSilent:
                  case ve.acquireTokenSilent_silentFlow:
                    return h.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ue.NONE;
                }
                if (!t.prompt) {
                  h.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case Ue.NONE:
                  case Ue.CONSENT:
                  case Ue.LOGIN:
                    return h.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), t.prompt;
                  default:
                    throw h.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), L.createNativePromptParameterNotSupportedError();
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
                extraParameters: B(B(B({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: wr.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== ge.POP ? [3, 4] : (u = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, d = new nr(this.browserCrypto), [4, d.generateCnf(u)]);
            case 3:
              f = p.sent(), l.reqCnf = f.reqCnfString, l.keyId = f.kid, p.label = 4;
            case 4:
              return [2, l];
          }
        });
      });
    }, e;
  }(Bl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var In = (
  /** @class */
  function() {
    function n(e, t, r, o) {
      this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = r, this.handshakeEvent = r.startMeasurement(_.NativeMessageHandlerHandshake);
    }
    return n.prototype.sendMessage = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r = this;
        return N(this, function(o) {
          return this.logger.trace("NativeMessageHandler - sendMessage called."), t = {
            channel: wr.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: e
          }, this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(t)), this.messageChannel.port1.postMessage(t), [2, new Promise(function(i, a) {
            r.resolvers.set(t.responseId, { resolve: i, reject: a });
          })];
        });
      });
    }, n.createProvider = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              e.trace("NativeMessageHandler - createProvider called."), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 5]), o = new n(e, t, r, wr.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
            case 2:
              return a.sent(), [2, o];
            case 3:
              return a.sent(), i = new n(e, t, r), [4, i.sendHandshakeRequest()];
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
    }, n.prototype.sendHandshakeRequest = function() {
      return R(this, void 0, void 0, function() {
        var e, t = this;
        return N(this, function(r) {
          return this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1), e = {
            channel: wr.CHANNEL_ID,
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
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), i(L.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
            }, t.handshakeTimeoutMs);
          })];
        });
      });
    }, n.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== wr.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Ut.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var r = this.handshakeResolvers.get(t.responseId);
          r && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), r.reject(L.createNativeExtensionNotInstalledError()));
        }
      }
    }, n.prototype.onChannelMessage = function(e) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var t = e.data, r = this.resolvers.get(t.responseId), o = this.handshakeResolvers.get(t.responseId);
      try {
        var i = t.body.method;
        if (i === Ut.Response) {
          if (!r)
            return;
          var a = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(a)), a.status !== "Success")
            r.reject(Rt.createError(a.code, a.description, a.ext));
          else if (a.result)
            a.result.code && a.result.description ? r.reject(Rt.createError(a.result.code, a.result.description, a.result.ext)) : r.resolve(a.result);
          else
            throw K.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (i === Ut.HandshakeResponse) {
          if (!o)
            return;
          clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = t.extensionId, this.extensionVersion = t.body.version, this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId), this.handshakeEvent.endMeasurement({ extensionInstalled: !0, success: !0 }), o.resolve(), this.handshakeResolvers.delete(t.responseId);
        }
      } catch (s) {
        this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii("Error parsing response from WAM Extension: " + s.toString()), this.logger.errorPii("Unable to parse " + e), r ? r.reject(s) : o && o.reject(s);
      }
    }, n.prototype.getExtensionId = function() {
      return this.extensionId;
    }, n.prototype.getExtensionVersion = function() {
      return this.extensionVersion;
    }, n.isNativeAvailable = function(e, t, r, o) {
      if (t.trace("isNativeAvailable called"), !e.system.allowNativeBroker)
        return t.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false"), !1;
      if (!r)
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
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var rg = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s, c, l, u, d) {
      var f = n.call(this, t, r, o, i, a, s, c, u, d) || this;
      return f.nativeStorage = l, f;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u, d, f = this;
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, $.Redirect)];
            case 1:
              r = h.sent(), this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority, r.loginHint || T.EMPTY_STRING, r.account || null), o = this.initializeServerTelemetryManager(ve.acquireTokenRedirect), i = function(p) {
                p.persisted && (f.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), f.browserStorage.cleanRequestByState(r.state), f.eventHandler.emitEvent(ee.RESTORE_FROM_BFCACHE, $.Redirect));
              }, h.label = 2;
            case 2:
              return h.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(r)];
            case 3:
              return a = h.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, r.authority, r.azureCloudOptions)];
            case 4:
              return s = h.sent(), this.logger.verbose("Auth code client created"), c = new hc(s, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, s.getAuthCodeUrl(B(B({}, r), { nativeBroker: In.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
            case 5:
              return l = h.sent(), u = this.getRedirectStartPage(t.redirectStartPage), this.logger.verbosePii("Redirect start page: " + u), window.addEventListener("pageshow", i), [4, c.initiateAuthRequest(l, {
                navigationClient: this.navigationClient,
                redirectTimeout: this.config.system.redirectNavigationTimeout,
                redirectStartPage: u,
                onRedirectNavigate: t.onRedirectNavigate
              })];
            case 6:
              return [2, h.sent()];
            case 7:
              throw d = h.sent(), d instanceof K && d.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", i), o.cacheFailedRequest(d), this.browserStorage.cleanRequestByState(r.state), d;
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
        var r, o, i, a, s, c, l, u, d, f, h, p;
        return N(this, function(g) {
          switch (g.label) {
            case 0:
              r = this.initializeServerTelemetryManager(ve.handleRedirectPromise), g.label = 1;
            case 1:
              if (g.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(t || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType($.Redirect), [2, null];
              i = void 0;
              try {
                a = de.getDeserializedHash(o), i = this.validateAndExtractStateFromHash(a, $.Redirect), this.logger.verbose("State extracted from hash");
              } catch (m) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + m), this.browserStorage.cleanRequestByInteractionType($.Redirect), [2, null];
              }
              return s = this.browserStorage.getTemporaryCache(fe.ORIGIN_URI, !0) || T.EMPTY_STRING, c = de.removeHashFromUrl(s), l = de.removeHashFromUrl(window.location.href), c === l && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, i, r)]) : [3, 3];
            case 2:
              return u = g.sent(), s.indexOf("#") > -1 && Se.replaceHash(s), [2, u];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, i, r)]);
            case 4:
              return !Se.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(fe.URL_HASH, o, !0), d = {
                apiId: ve.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, f = !0, !s || s === "null" ? (h = Se.getHomepage(), this.browserStorage.setTemporaryCache(fe.ORIGIN_URI, h, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(h, d)]) : [3, 6]) : [3, 9];
            case 5:
              return f = g.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + s), [4, this.navigationClient.navigateInternal(s, d)];
            case 7:
              f = g.sent(), g.label = 8;
            case 8:
              if (!f)
                return [2, this.handleHash(o, i, r)];
              g.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw p = g.sent(), p instanceof K && p.setCorrelationId(this.correlationId), r.cacheFailedRequest(p), this.browserStorage.cleanRequestByInteractionType($.Redirect), p;
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
      var r = de.hashContainsKnownProperties(t);
      if (r)
        return Se.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
      var o = this.browserStorage.getTemporaryCache(fe.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(fe.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, e.prototype.handleHash = function(t, r, o) {
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l, u, d, f = this;
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              if (i = this.browserStorage.getCachedRequest(r, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), a = de.getDeserializedHash(t), a.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw L.createNativeConnectionNotEstablishedError();
                return s = new Zn(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, a.accountId, this.nativeStorage, i.correlationId), c = Ht.parseRequestState(this.browserCrypto, r).userRequestState, [2, s.acquireToken(B(B({}, i), {
                  state: c,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  f.browserStorage.cleanRequestByState(r);
                })];
              }
              if (l = this.browserStorage.getCachedAuthority(r), !l)
                throw L.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, i.correlationId), [4, this.createAuthCodeClient(o, l)];
            case 1:
              return u = h.sent(), this.logger.verbose("Auth code client created"), To.removeThrottle(this.browserStorage, this.config.auth.clientId, i), d = new hc(u, this.browserStorage, i, this.logger, this.browserCrypto, this.performanceClient), [4, d.handleCodeResponseFromHash(t, r, u.authority, this.networkClient)];
            case 2:
              return [2, h.sent()];
          }
        });
      });
    }, e.prototype.logout = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              this.logger.verbose("logoutRedirect called"), r = this.initializeLogoutRequest(t), o = this.initializeServerTelemetryManager(ve.logout), u.label = 1;
            case 1:
              return u.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(ee.LOGOUT_START, $.Redirect, t), [4, this.clearCacheOnLogout(r.account)];
            case 2:
              return u.sent(), i = {
                apiId: ve.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, r.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return a = u.sent(), this.logger.verbose("Auth code client created"), s = a.getLogoutUri(r), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, $.Redirect, r), t && typeof t.onRedirectNavigate == "function" ? (c = t.onRedirectNavigate(s), c === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(s, i)])) : [3, 7];
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
              throw l = u.sent(), l instanceof K && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, $.Redirect, null, l), this.eventHandler.emitEvent(ee.LOGOUT_END, $.Redirect), l;
            case 11:
              return this.eventHandler.emitEvent(ee.LOGOUT_END, $.Redirect), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRedirectStartPage = function(t) {
      var r = t || window.location.href;
      return de.getAbsoluteUrl(r, Se.getCurrentUri());
    }, e;
  }(cr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var og = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s, c, l, u, d) {
      var f = n.call(this, t, r, o, i, a, s, c, u, d) || this;
      return f.unloadWindow = f.unloadWindow.bind(f), f.nativeStorage = l, f;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var r = this.generatePopupName(t.scopes || qr, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(t, r, o);
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        var i = this.openSizedPopup("about:blank", r, o);
        return this.acquireTokenPopupAsync(t, r, o, i);
      } catch (a) {
        return Promise.reject(a);
      }
    }, e.prototype.logout = function(t) {
      try {
        this.logger.verbose("logoutPopup called");
        var r = this.initializeLogoutRequest(t), o = this.generateLogoutPopupName(r), i = t && t.authority, a = t && t.mainWindowRedirectUri, s = (t == null ? void 0 : t.popupWindowAttributes) || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(r, o, s, i, void 0, a);
        this.logger.verbose("asyncPopup set to false, opening popup");
        var c = this.openSizedPopup("about:blank", o, s);
        return this.logoutPopupAsync(r, o, s, i, c, a);
      } catch (l) {
        return Promise.reject(l);
      }
    }, e.prototype.acquireTokenPopupAsync = function(t, r, o, i) {
      return R(this, void 0, void 0, function() {
        var a, s, c, l, u, d, f, h, p, g, m, b, C, v, w, S, E, k = this;
        return N(this, function(I) {
          switch (I.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), a = this.initializeServerTelemetryManager(ve.acquireTokenPopup), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, $.Popup)];
            case 1:
              s = I.sent(), this.browserStorage.updateCacheEntries(s.state, s.nonce, s.authority, s.loginHint || T.EMPTY_STRING, s.account || null), I.label = 2;
            case 2:
              return I.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(s)];
            case 3:
              return c = I.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(a, s.authority, s.azureCloudOptions)];
            case 4:
              return l = I.sent(), this.logger.verbose("Auth code client created"), u = In.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), d = void 0, u && (d = this.performanceClient.startMeasurement(_.FetchAccountIdWithNativeBroker, t.correlationId)), [4, l.getAuthCodeUrl(B(B({}, s), { nativeBroker: u }))];
            case 5:
              return f = I.sent(), h = new Ea(l, this.browserStorage, c, this.logger, this.performanceClient), p = {
                popup: i,
                popupName: r,
                popupWindowAttributes: o
              }, g = this.initiateAuthRequest(f, p), this.eventHandler.emitEvent(ee.POPUP_OPENED, $.Popup, { popupWindow: g }, null), [4, this.monitorPopupForHash(g)];
            case 6:
              if (m = I.sent(), b = de.getDeserializedHash(m), C = this.validateAndExtractStateFromHash(b, $.Popup, s.correlationId), To.removeThrottle(this.browserStorage, this.config.auth.clientId, c), b.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), d && d.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw L.createNativeConnectionNotEstablishedError();
                return v = new Zn(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, b.accountId, this.nativeStorage, s.correlationId), w = Ht.parseRequestState(this.browserCrypto, C).userRequestState, [2, v.acquireToken(B(B({}, s), {
                  state: w,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  k.browserStorage.cleanRequestByState(C);
                })];
              }
              return [4, h.handleCodeResponseFromHash(m, C, l.authority, this.networkClient)];
            case 7:
              return S = I.sent(), [2, S];
            case 8:
              throw E = I.sent(), i && i.close(), E instanceof K && E.setCorrelationId(this.correlationId), a.cacheFailedRequest(E), this.browserStorage.cleanRequestByState(s.state), E;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logoutPopupAsync = function(t, r, o, i, a, s) {
      return R(this, void 0, void 0, function() {
        var c, l, u, d, f, h, p;
        return N(this, function(g) {
          switch (g.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(ee.LOGOUT_START, $.Popup, t), c = this.initializeServerTelemetryManager(ve.logoutPopup), g.label = 1;
            case 1:
              return g.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return g.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(c, i)];
            case 3:
              return l = g.sent(), this.logger.verbose("Auth code client created"), u = l.getLogoutUri(t), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, $.Popup, t), d = this.openPopup(u, { popupName: r, popupWindowAttributes: o, popup: a }), this.eventHandler.emitEvent(ee.POPUP_OPENED, $.Popup, { popupWindow: d }, null), [4, this.waitForLogoutPopup(d)];
            case 4:
              return g.sent(), s ? (f = {
                apiId: ve.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, h = de.getAbsoluteUrl(s, Se.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + h), this.navigationClient.navigateInternal(h, f)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw p = g.sent(), a && a.close(), p instanceof K && p.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, $.Popup, null, p), this.eventHandler.emitEvent(ee.LOGOUT_END, $.Popup), c.cacheFailedRequest(p), p;
            case 6:
              return this.eventHandler.emitEvent(ee.LOGOUT_END, $.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, r) {
      if (U.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), L.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, r);
    }, e.prototype.monitorPopupForHash = function(t) {
      var r = this;
      return new Promise(function(o, i) {
        var a = r.config.system.windowHashTimeout / r.config.system.pollIntervalMilliseconds, s = 0;
        r.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var c = setInterval(function() {
          if (t.closed) {
            r.logger.error("PopupHandler.monitorPopupForHash - window closed"), r.cleanPopup(), clearInterval(c), i(L.createUserCancelledError());
            return;
          }
          var l = T.EMPTY_STRING, u = T.EMPTY_STRING;
          try {
            l = t.location.href, u = t.location.hash;
          } catch {
          }
          U.isEmpty(l) || l === "about:blank" || (r.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), s++, u ? (r.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(c), r.cleanPopup(t), de.hashContainsKnownProperties(u) ? (r.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(u)) : (r.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), r.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + u), i(L.createHashDoesNotContainKnownPropertiesError()))) : s > a && (r.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(c), i(L.createMonitorPopupTimeoutError())));
        }, r.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.waitForLogoutPopup = function(t) {
      var r = this;
      return new Promise(function(o) {
        r.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var i = setInterval(function() {
          t.closed && (r.logger.error("PopupHandler.waitForLogoutPopup - window closed"), r.cleanPopup(), clearInterval(i), o());
          var a = T.EMPTY_STRING;
          try {
            a = t.location.href;
          } catch {
          }
          U.isEmpty(a) || a === "about:blank" || (r.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(i), r.cleanPopup(t), o());
        }, r.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, r) {
      try {
        var o = void 0;
        if (r.popup ? (o = r.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof r.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, r.popupName, r.popupWindowAttributes)), !o)
          throw L.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (i) {
        throw this.logger.error("error opening popup " + i.message), this.browserStorage.setInteractionInProgress(!1), L.createPopupWindowError(i.toString());
      }
    }, e.prototype.openSizedPopup = function(t, r, o) {
      var i, a, s, c, l = window.screenLeft ? window.screenLeft : window.screenX, u = window.screenTop ? window.screenTop : window.screenY, d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, f = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, h = (i = o.popupSize) === null || i === void 0 ? void 0 : i.width, p = (a = o.popupSize) === null || a === void 0 ? void 0 : a.height, g = (s = o.popupPosition) === null || s === void 0 ? void 0 : s.top, m = (c = o.popupPosition) === null || c === void 0 ? void 0 : c.left;
      return (!h || h < 0 || h > d) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), h = bt.POPUP_WIDTH), (!p || p < 0 || p > f) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), p = bt.POPUP_HEIGHT), (!g || g < 0 || g > f) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), g = Math.max(0, f / 2 - bt.POPUP_HEIGHT / 2 + u)), (!m || m < 0 || m > d) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), m = Math.max(0, d / 2 - bt.POPUP_WIDTH / 2 + l)), window.open(t, r, "width=" + h + ", height=" + p + ", top=" + g + ", left=" + m + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType($.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, r) {
      return bt.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + r + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var r = t.account && t.account.homeAccountId;
      return bt.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + r + "." + this.correlationId;
    }, e;
  }(cr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ig = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.navigateInternal = function(e, t) {
      return n.defaultNavigateWindow(e, t);
    }, n.prototype.navigateExternal = function(e, t) {
      return n.defaultNavigateWindow(e, t);
    }, n.defaultNavigateWindow = function(e, t) {
      return t.noHistory ? window.location.replace(e) : window.location.assign(e), new Promise(function(r) {
        setTimeout(function() {
          r(!0);
        }, t.timeout);
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ag = 6e4, Xi = 6e3, sg = 3e4, cg = 2e3;
function lg(n, e) {
  var t = n.auth, r = n.cache, o = n.system, i = n.telemetry, a = {
    clientId: T.EMPTY_STRING,
    authority: "" + T.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: T.EMPTY_STRING,
    authorityMetadata: T.EMPTY_STRING,
    redirectUri: T.EMPTY_STRING,
    postLogoutRedirectUri: T.EMPTY_STRING,
    navigateToLoginRequestUrl: !0,
    clientCapabilities: [],
    protocolMode: tr.AAD,
    azureCloudOptions: {
      azureCloudInstance: Dr.None,
      tenant: T.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, s = {
    cacheLocation: Ie.SessionStorage,
    temporaryCacheLocation: Ie.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(r && r.cacheLocation === Ie.LocalStorage),
    claimsBasedCachingEnabled: !0
  }, c = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: we.Info,
    piiLoggingEnabled: !1
  }, l = B(B({}, Dl), {
    loggerOptions: c,
    networkClient: e ? Se.getBrowserNetworkClient() : Wp,
    navigationClient: new ig(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || ag,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Xi,
    navigateFrameWait: e && Se.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: sg,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || cg,
    pollIntervalMilliseconds: bt.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), u = B(B({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || c }), d = {
    application: {
      appName: T.EMPTY_STRING,
      appVersion: T.EMPTY_STRING
    }
  }, f = {
    auth: B(B({}, a), t),
    cache: B(B({}, s), r),
    system: B(B({}, l), u),
    telemetry: B(B({}, d), i)
  };
  return f;
}
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var $l = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s) {
      var c = n.call(this, t, r, o, i, s) || this;
      return c.navigateFrameWait = a.navigateFrameWait, c.pollIntervalMilliseconds = a.pollIntervalMilliseconds, c;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), U.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), L.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(_.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(t)]) : [3, 2];
            case 1:
              return [2, r.sent()];
            case 2:
              return [2, this.loadFrameSync(t)];
          }
        });
      });
    }, e.prototype.monitorIframeForHash = function(t, r) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(_.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(i, a) {
        r < Xi && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + r + "ms) than the default (" + Xi + "ms). This may result in timeouts.");
        var s = window.performance.now(), c = s + r, l = setInterval(function() {
          if (window.performance.now() > c) {
            o.removeHiddenIframe(t), clearInterval(l), a(L.createMonitorIframeTimeoutError());
            return;
          }
          var u = T.EMPTY_STRING, d = t.contentWindow;
          try {
            u = d ? d.location.href : T.EMPTY_STRING;
          } catch {
          }
          if (!U.isEmpty(u)) {
            var f = d ? d.location.hash : T.EMPTY_STRING;
            if (de.hashContainsKnownProperties(f)) {
              o.removeHiddenIframe(t), clearInterval(l), i(f);
              return;
            }
          }
        }, o.pollIntervalMilliseconds);
      });
    }, e.prototype.loadFrame = function(t) {
      var r = this;
      return this.performanceClient.addQueueMeasurement(_.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, i) {
        var a = r.createHiddenIframe();
        setTimeout(function() {
          if (!a) {
            i("Unable to load iframe");
            return;
          }
          a.src = t, o(a);
        }, r.navigateFrameWait);
      });
    }, e.prototype.loadFrameSync = function(t) {
      var r = this.createHiddenIframe();
      return r.src = t, r;
    }, e.prototype.createHiddenIframe = function() {
      var t = document.createElement("iframe");
      return t.className = "msalSilentIframe", t.style.visibility = "hidden", t.style.position = "absolute", t.style.width = t.style.height = "0", t.style.border = "0", t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), document.getElementsByTagName("body")[0].appendChild(t), t;
    }, e.prototype.removeHiddenIframe = function(t) {
      document.body === t.parentNode && document.body.removeChild(t);
    }, e;
  }(Ea)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ug = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s, c, l, u, d, f) {
      var h = n.call(this, t, r, o, i, a, s, l, d, f) || this;
      return h.apiId = c, h.nativeStorage = u, h;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s;
        return N(this, function(c) {
          switch (c.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), r = this.performanceClient.startMeasurement(_.SilentIframeClientAcquireToken, t.correlationId), U.isEmpty(t.loginHint) && U.isEmpty(t.sid) && (!t.account || U.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ue.NONE && t.prompt !== Ue.NO_SESSION)
                throw r.endMeasurement({
                  success: !1
                }), L.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(B(B({}, t), { prompt: t.prompt || Ue.NONE }), $.Silent)];
            case 1:
              o = c.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || T.EMPTY_STRING, o.account || null), i = this.initializeServerTelemetryManager(this.apiId), c.label = 2;
            case 2:
              return c.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(i, o.authority, o.azureCloudOptions)];
            case 3:
              return a = c.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(_.SilentIframeClientTokenHelper, t.correlationId), [4, this.silentTokenHelper(a, o).then(function(l) {
                return r.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: l.requestId
                }), l;
              })];
            case 4:
              return [2, c.sent()];
            case 5:
              throw s = c.sent(), s instanceof K && s.setCorrelationId(this.correlationId), i.cacheFailedRequest(s), this.browserStorage.cleanRequestByState(o.state), r.endMeasurement({
                errorCode: s instanceof K && s.errorCode || void 0,
                subErrorCode: s instanceof K && s.subError || void 0,
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
      return Promise.reject(L.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u, d, f, h = this;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.SilentIframeClientTokenHelper, r.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, r.correlationId), [4, this.initializeAuthorizationCodeRequest(r)];
            case 1:
              return o = p.sent(), this.performanceClient.setPreQueueTime(_.GetAuthCodeUrl, r.correlationId), [4, t.getAuthCodeUrl(B(B({}, r), { nativeBroker: In.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, r.authenticationScheme) }))];
            case 2:
              return i = p.sent(), a = new $l(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(_.SilentHandlerInitiateAuthRequest, r.correlationId), [4, a.initiateAuthRequest(i)];
            case 3:
              return s = p.sent(), this.performanceClient.setPreQueueTime(_.SilentHandlerMonitorIframeForHash, r.correlationId), [4, a.monitorIframeForHash(s, this.config.system.iframeHashTimeout)];
            case 4:
              if (c = p.sent(), l = de.getDeserializedHash(c), u = this.validateAndExtractStateFromHash(l, $.Silent, o.correlationId), l.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw L.createNativeConnectionNotEstablishedError();
                return d = new Zn(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId), f = Ht.parseRequestState(this.browserCrypto, u).userRequestState, [2, d.acquireToken(B(B({}, r), { state: f, prompt: r.prompt || Ue.NONE })).finally(function() {
                  h.browserStorage.cleanRequestByState(u);
                })];
              }
              return this.performanceClient.setPreQueueTime(_.HandleCodeResponseFromHash, r.correlationId), [2, a.handleCodeResponseFromHash(c, u, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(cr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var dg = (
  /** @class */
  function(n) {
    De(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c = this;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(_.InitializeBaseRequest, t.correlationId), o = [B({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return r = B.apply(void 0, o.concat([l.sent()])), i = this.performanceClient.startMeasurement(_.SilentRefreshClientAcquireToken, r.correlationId), a = this.initializeServerTelemetryManager(ve.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(a, r.authority, r.azureCloudOptions)];
            case 2:
              return s = l.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(_.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, s.acquireTokenByRefreshToken(r).then(function(u) {
                return i.endMeasurement({
                  success: !0,
                  fromCache: u.fromCache,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw u instanceof K && u.setCorrelationId(c.correlationId), a.cacheFailedRequest(u), i.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              })];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(L.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, r, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, r, o)];
            case 1:
              return i = a.sent(), [2, new jl(i, this.performanceClient)];
          }
        });
      });
    }, e;
  }(cr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var fg = (
  /** @class */
  function() {
    function n(e, t) {
      this.eventCallbacks = /* @__PURE__ */ new Map(), this.logger = e, this.browserCrypto = t, this.listeningToStorageEvents = !1, this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
    }
    return n.prototype.addEventCallback = function(e) {
      if (typeof window < "u") {
        var t = this.browserCrypto.createNewGuid();
        return this.eventCallbacks.set(t, e), this.logger.verbose("Event callback registered with id: " + t), t;
      }
      return null;
    }, n.prototype.removeEventCallback = function(e) {
      this.eventCallbacks.delete(e), this.logger.verbose("Event callback " + e + " removed.");
    }, n.prototype.enableAccountStorageEvents = function() {
      typeof window > "u" || (this.listeningToStorageEvents ? this.logger.verbose("Account storage listener already registered.") : (this.logger.verbose("Adding account storage listener."), this.listeningToStorageEvents = !0, window.addEventListener("storage", this.handleAccountCacheChange)));
    }, n.prototype.disableAccountStorageEvents = function() {
      typeof window > "u" || (this.listeningToStorageEvents ? (this.logger.verbose("Removing account storage listener."), window.removeEventListener("storage", this.handleAccountCacheChange), this.listeningToStorageEvents = !1) : this.logger.verbose("No account storage listener registered."));
    }, n.prototype.emitEvent = function(e, t, r, o) {
      var i = this;
      if (typeof window < "u") {
        var a = {
          eventType: e,
          interactionType: t || null,
          payload: r || null,
          error: o || null,
          timestamp: Date.now()
        };
        this.logger.info("Emitting event: " + e), this.eventCallbacks.forEach(function(s, c) {
          i.logger.verbose("Emitting event to callback " + c + ": " + e), s.apply(null, [a]);
        });
      }
    }, n.prototype.handleAccountCacheChange = function(e) {
      try {
        var t = e.newValue || e.oldValue;
        if (!t)
          return;
        var r = JSON.parse(t);
        if (typeof r != "object" || !He.isAccountEntity(r))
          return;
        var o = We.toObject(new He(), r), i = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(ee.ACCOUNT_ADDED, void 0, i)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(ee.ACCOUNT_REMOVED, void 0, i));
      } catch {
        return;
      }
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Le = (
  /** @class */
  function() {
    function n() {
    }
    return n.decimalToHex = function(e) {
      for (var t = e.toString(16); t.length < 2; )
        t = "0" + t;
      return t;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Kl = (
  /** @class */
  function() {
    function n(e) {
      this.cryptoObj = e;
    }
    return n.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, Le.decimalToHex(e[0]) + Le.decimalToHex(e[1]) + Le.decimalToHex(e[2]) + Le.decimalToHex(e[3]) + "-" + Le.decimalToHex(e[4]) + Le.decimalToHex(e[5]) + "-" + Le.decimalToHex(e[6]) + Le.decimalToHex(e[7]) + "-" + Le.decimalToHex(e[8]) + Le.decimalToHex(e[9]) + "-" + Le.decimalToHex(e[10]) + Le.decimalToHex(e[11]) + Le.decimalToHex(e[12]) + Le.decimalToHex(e[13]) + Le.decimalToHex(e[14]) + Le.decimalToHex(e[15]);
      } catch {
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", r = "0123456789abcdef", o = 0, i = T.EMPTY_STRING, a = 0; a < 36; a++)
          t[a] !== "-" && t[a] !== "4" && (o = Math.random() * 16 | 0), t[a] === "x" ? i += r[o] : t[a] === "y" ? (o &= 3, o |= 8, i += r[o]) : i += t[a];
        return i;
      }
    }, n.prototype.isGuid = function(e) {
      var t = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return t.test(e);
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Bt = (
  /** @class */
  function() {
    function n() {
    }
    return n.stringToUtf8Arr = function(e) {
      for (var t, r = 0, o = e.length, i = 0; i < o; i++)
        t = e.charCodeAt(i), r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
      for (var a = new Uint8Array(r), s = 0, c = 0; s < r; c++)
        t = e.charCodeAt(c), t < 128 ? a[s++] = t : t < 2048 ? (a[s++] = 192 + (t >>> 6), a[s++] = 128 + (t & 63)) : t < 65536 ? (a[s++] = 224 + (t >>> 12), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63)) : t < 2097152 ? (a[s++] = 240 + (t >>> 18), a[s++] = 128 + (t >>> 12 & 63), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63)) : t < 67108864 ? (a[s++] = 248 + (t >>> 24), a[s++] = 128 + (t >>> 18 & 63), a[s++] = 128 + (t >>> 12 & 63), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63)) : (a[s++] = 252 + (t >>> 30), a[s++] = 128 + (t >>> 24 & 63), a[s++] = 128 + (t >>> 18 & 63), a[s++] = 128 + (t >>> 12 & 63), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63));
      return a;
    }, n.stringToArrayBuffer = function(e) {
      for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), o = 0; o < e.length; o++)
        r[o] = e.charCodeAt(o);
      return t;
    }, n.utf8ArrToString = function(e) {
      for (var t = T.EMPTY_STRING, r = void 0, o = e.length, i = 0; i < o; i++)
        r = e[i], t += String.fromCharCode(r > 251 && r < 254 && i + 5 < o ? (
          /* six bytes */
          /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (r - 252) * 1073741824 + (e[++i] - 128 << 24) + (e[++i] - 128 << 18) + (e[++i] - 128 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : r > 247 && r < 252 && i + 4 < o ? (
          /* five bytes */
          (r - 248 << 24) + (e[++i] - 128 << 18) + (e[++i] - 128 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : r > 239 && r < 248 && i + 3 < o ? (
          /* four bytes */
          (r - 240 << 18) + (e[++i] - 128 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : r > 223 && r < 240 && i + 2 < o ? (
          /* three bytes */
          (r - 224 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : r > 191 && r < 224 && i + 1 < o ? (
          /* two bytes */
          (r - 192 << 6) + e[++i] - 128
        ) : (
          /* nPart < 127 ? */
          /* one byte */
          r
        ));
      return t;
    }, n.getSortedObjectString = function(e) {
      return JSON.stringify(e, Object.keys(e).sort());
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ql = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, T.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, n.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, T.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, n.prototype.encode = function(e) {
      var t = Bt.stringToUtf8Arr(e);
      return this.base64EncArr(t);
    }, n.prototype.base64EncArr = function(e) {
      for (var t = (3 - e.length % 3) % 3, r = T.EMPTY_STRING, o = void 0, i = e.length, a = 0, s = 0; s < i; s++)
        o = s % 3, a |= e[s] << (16 >>> o & 24), (o === 2 || e.length - s === 1) && (r += String.fromCharCode(this.uint6ToB64(a >>> 18 & 63), this.uint6ToB64(a >>> 12 & 63), this.uint6ToB64(a >>> 6 & 63), this.uint6ToB64(a & 63)), a = 0);
      return t === 0 ? r : r.substring(0, r.length - t) + (t === 1 ? "=" : "==");
    }, n.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.decode = function(e) {
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
      var r = this.base64DecToArr(t);
      return Bt.utf8ArrToString(r);
    }, n.prototype.base64DecToArr = function(e, t) {
      for (var r = e.replace(/[^A-Za-z0-9\+\/]/g, T.EMPTY_STRING), o = r.length, i = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, a = new Uint8Array(i), s = void 0, c = void 0, l = 0, u = 0, d = 0; d < o; d++)
        if (c = d & 3, l |= this.b64ToUint6(r.charCodeAt(d)) << 18 - 6 * c, c === 3 || o - d === 1) {
          for (s = 0; s < 3 && u < i; s++, u++)
            a[u] = l >>> (16 >>> s & 24) & 255;
          l = 0;
        }
      return a;
    }, n.prototype.b64ToUint6 = function(e) {
      return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : e === 43 ? 62 : e === 47 ? 63 : 0;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var pg = 32, gg = (
  /** @class */
  function() {
    function n(e) {
      this.base64Encode = new ql(), this.cryptoObj = e;
    }
    return n.prototype.generateCodes = function() {
      return R(this, void 0, void 0, function() {
        var e, t;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return e = this.generateCodeVerifier(), [4, this.generateCodeChallengeFromVerifier(e)];
            case 1:
              return t = r.sent(), [2, {
                verifier: e,
                challenge: t
              }];
          }
        });
      });
    }, n.prototype.generateCodeVerifier = function() {
      try {
        var e = new Uint8Array(pg);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (r) {
        throw L.createPkceNotGeneratedError(r);
      }
    }, n.prototype.generateCodeChallengeFromVerifier = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(e)];
            case 1:
              return t = o.sent(), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
            case 2:
              throw r = o.sent(), L.createPkceNotGeneratedError(r);
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var mg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.getRandomValues = function(e) {
      return window.crypto.getRandomValues(e);
    }, n.prototype.generateKey = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.crypto.subtle.generateKey(e, t, r)];
        });
      });
    }, n.prototype.exportKey = function(e) {
      return R(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, window.crypto.subtle.exportKey(rr, e)];
        });
      });
    }, n.prototype.importKey = function(e, t, r, o) {
      return R(this, void 0, void 0, function() {
        return N(this, function(i) {
          return [2, window.crypto.subtle.importKey(rr, e, t, r, o)];
        });
      });
    }, n.prototype.sign = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.crypto.subtle.sign(e, t, r)];
        });
      });
    }, n.prototype.digest = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return [2, window.crypto.subtle.digest(e, t)];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var yg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(ba(e));
    }, n.prototype.getRandomValues = function(e) {
      return window.msrCrypto.getRandomValues(e);
    }, n.prototype.generateKey = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.msrCrypto.subtle.generateKey(e, t, r)];
        });
      });
    }, n.prototype.exportKey = function(e) {
      return R(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, window.msrCrypto.subtle.exportKey(rr, e)];
        });
      });
    }, n.prototype.importKey = function(e, t, r, o) {
      return R(this, void 0, void 0, function() {
        return N(this, function(i) {
          return [2, window.msrCrypto.subtle.importKey(rr, e, t, r, o)];
        });
      });
    }, n.prototype.sign = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.msrCrypto.subtle.sign(e, t, r)];
        });
      });
    }, n.prototype.digest = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return [2, window.msrCrypto.subtle.digest(e, t)];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var vg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.getRandomValues = function(e) {
      return window.msCrypto.getRandomValues(e);
    }, n.prototype.generateKey = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, new Promise(function(i, a) {
            var s = window.msCrypto.subtle.generateKey(e, t, r);
            s.addEventListener("complete", function(c) {
              i(c.target.result);
            }), s.addEventListener("error", function(c) {
              a(c);
            });
          })];
        });
      });
    }, n.prototype.exportKey = function(e) {
      return R(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, new Promise(function(r, o) {
            var i = window.msCrypto.subtle.exportKey(rr, e);
            i.addEventListener("complete", function(a) {
              var s = a.target.result, c = Bt.utf8ArrToString(new Uint8Array(s)).replace(/\r/g, T.EMPTY_STRING).replace(/\n/g, T.EMPTY_STRING).replace(/\t/g, T.EMPTY_STRING).split(" ").join(T.EMPTY_STRING).replace("\0", T.EMPTY_STRING);
              try {
                r(JSON.parse(c));
              } catch (l) {
                o(l);
              }
            }), i.addEventListener("error", function(a) {
              o(a);
            });
          })];
        });
      });
    }, n.prototype.importKey = function(e, t, r, o) {
      return R(this, void 0, void 0, function() {
        var i, a;
        return N(this, function(s) {
          return i = Bt.getSortedObjectString(e), a = Bt.stringToArrayBuffer(i), [2, new Promise(function(c, l) {
            var u = window.msCrypto.subtle.importKey(rr, a, t, r, o);
            u.addEventListener("complete", function(d) {
              c(d.target.result);
            }), u.addEventListener("error", function(d) {
              l(d);
            });
          })];
        });
      });
    }, n.prototype.sign = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, new Promise(function(i, a) {
            var s = window.msCrypto.subtle.sign(e, t, r);
            s.addEventListener("complete", function(c) {
              i(c.target.result);
            }), s.addEventListener("error", function(c) {
              a(c);
            });
          })];
        });
      });
    }, n.prototype.digest = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
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
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var bg = "RSASSA-PKCS1-v1_5", pc = "SHA-256", Cg = 2048, wg = new Uint8Array([1, 0, 1]), Vl = (
  /** @class */
  function() {
    function n(e, t) {
      var r, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new mg();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new vg();
      else if (this.hasMsrCrypto() && (!((r = this.cryptoOptions) === null || r === void 0) && r.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new yg();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), L.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Ao.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: bg,
        hash: pc,
        modulusLength: Cg,
        publicExponent: wg
      };
    }
    return n.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    }, n.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    }, n.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    }, n.prototype.sha256Digest = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return N(this, function(r) {
          return t = Bt.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: pc }, t)];
        });
      });
    }, n.prototype.getRandomValues = function(e) {
      return this.subtleCrypto.getRandomValues(e);
    }, n.prototype.generateKeyPair = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, n.prototype.exportJwk = function(e) {
      return R(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, this.subtleCrypto.exportKey(e)];
        });
      });
    }, n.prototype.importJwk = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, this.subtleCrypto.importKey(e, this.keygenAlgorithmOptions, t, r)];
        });
      });
    }, n.prototype.sign = function(e, t) {
      return R(this, void 0, void 0, function() {
        return N(this, function(r) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Sg = (
  /** @class */
  function() {
    function n() {
      this.dbName = Yi, this.version = Xp, this.tableName = Zp, this.dbOpen = !1;
    }
    return n.prototype.open = function() {
      return R(this, void 0, void 0, function() {
        var e = this;
        return N(this, function(t) {
          return [2, new Promise(function(r, o) {
            var i = window.indexedDB.open(e.dbName, e.version);
            i.addEventListener("upgradeneeded", function(a) {
              var s = a;
              s.target.result.createObjectStore(e.tableName);
            }), i.addEventListener("success", function(a) {
              var s = a;
              e.db = s.target.result, e.dbOpen = !0, r();
            }), i.addEventListener("error", function() {
              return o(L.createDatabaseUnavailableError());
            });
          })];
        });
      });
    }, n.prototype.closeConnection = function() {
      var e = this.db;
      e && this.dbOpen && (e.close(), this.dbOpen = !1);
    }, n.prototype.validateDbIsOpen = function() {
      return R(this, void 0, void 0, function() {
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
    }, n.prototype.getItem = function(e) {
      return R(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return r.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(L.createDatabaseNotOpenError());
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
    }, n.prototype.setItem = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r = this;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return o.sent(), [2, new Promise(function(i, a) {
                if (!r.db)
                  return a(L.createDatabaseNotOpenError());
                var s = r.db.transaction([r.tableName], "readwrite"), c = s.objectStore(r.tableName), l = c.put(t, e);
                l.addEventListener("success", function() {
                  r.closeConnection(), i();
                }), l.addEventListener("error", function(u) {
                  r.closeConnection(), a(u);
                });
              })];
          }
        });
      });
    }, n.prototype.removeItem = function(e) {
      return R(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return r.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(L.createDatabaseNotOpenError());
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
    }, n.prototype.getKeys = function() {
      return R(this, void 0, void 0, function() {
        var e = this;
        return N(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return t.sent(), [2, new Promise(function(r, o) {
                if (!e.db)
                  return o(L.createDatabaseNotOpenError());
                var i = e.db.transaction([e.tableName], "readonly"), a = i.objectStore(e.tableName), s = a.getAllKeys();
                s.addEventListener("success", function(c) {
                  var l = c;
                  e.closeConnection(), r(l.target.result);
                }), s.addEventListener("error", function(c) {
                  e.closeConnection(), o(c);
                });
              })];
          }
        });
      });
    }, n.prototype.containsKey = function(e) {
      return R(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return r.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(L.createDatabaseNotOpenError());
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
    }, n.prototype.deleteDatabase = function() {
      return R(this, void 0, void 0, function() {
        return N(this, function(e) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(t, r) {
            var o = window.indexedDB.deleteDatabase(Yi);
            o.addEventListener("success", function() {
              return t(!0);
            }), o.addEventListener("blocked", function() {
              return t(!0);
            }), o.addEventListener("error", function() {
              return r(!1);
            });
          })];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var gc = (
  /** @class */
  function() {
    function n(e, t) {
      this.inMemoryCache = new Qi(), this.indexedDBCache = new Sg(), this.logger = e, this.storeName = t;
    }
    return n.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof L && e.errorCode === P.databaseUnavailable.code)
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      else
        throw e;
    }, n.prototype.getItem = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r;
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
              return r = o.sent(), this.handleDatabaseAccessError(r), [3, 4];
            case 4:
              return [2, t];
          }
        });
      });
    }, n.prototype.setItem = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              this.inMemoryCache.setItem(e, t), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.indexedDBCache.setItem(e, t)];
            case 2:
              return o.sent(), [3, 4];
            case 3:
              return r = o.sent(), this.handleDatabaseAccessError(r), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.removeItem = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              this.inMemoryCache.removeItem(e), r.label = 1;
            case 1:
              return r.trys.push([1, 3, , 4]), [4, this.indexedDBCache.removeItem(e)];
            case 2:
              return r.sent(), [3, 4];
            case 3:
              return t = r.sent(), this.handleDatabaseAccessError(t), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.getKeys = function() {
      return R(this, void 0, void 0, function() {
        var e, t;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              if (e = this.inMemoryCache.getKeys(), e.length !== 0)
                return [3, 4];
              r.label = 1;
            case 1:
              return r.trys.push([1, 3, , 4]), this.logger.verbose("In-memory cache is empty, now querying persistent storage."), [4, this.indexedDBCache.getKeys()];
            case 2:
              return [2, r.sent()];
            case 3:
              return t = r.sent(), this.handleDatabaseAccessError(t), [3, 4];
            case 4:
              return [2, e];
          }
        });
      });
    }, n.prototype.containsKey = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r;
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
              return r = o.sent(), this.handleDatabaseAccessError(r), [3, 4];
            case 4:
              return [2, t];
          }
        });
      });
    }, n.prototype.clearInMemory = function() {
      this.logger.verbose("Deleting in-memory keystore " + this.storeName), this.inMemoryCache.clear(), this.logger.verbose("In-memory keystore " + this.storeName + " deleted");
    }, n.prototype.clearPersistent = function() {
      return R(this, void 0, void 0, function() {
        var e, t;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), this.logger.verbose("Deleting persistent keystore"), [4, this.indexedDBCache.deleteDatabase()];
            case 1:
              return e = r.sent(), e && this.logger.verbose("Persistent keystore deleted"), [2, e];
            case 2:
              return t = r.sent(), this.handleDatabaseAccessError(t), [2, !1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ro;
(function(n) {
  n.asymmetricKeys = "asymmetricKeys", n.symmetricKeys = "symmetricKeys";
})(Ro || (Ro = {}));
var Tg = (
  /** @class */
  function() {
    function n(e) {
      this.logger = e, this.asymmetricKeys = new gc(this.logger, Ro.asymmetricKeys), this.symmetricKeys = new gc(this.logger, Ro.symmetricKeys);
    }
    return n.prototype.clear = function() {
      return R(this, void 0, void 0, function() {
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
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Eg = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.logger = e, this.browserCrypto = new Vl(this.logger, r), this.b64Encode = new ql(), this.b64Decode = new hg(), this.guidGenerator = new Kl(this.browserCrypto), this.pkceGenerator = new gg(this.browserCrypto), this.cache = new Tg(this.logger), this.performanceClient = t;
    }
    return n.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    }, n.prototype.base64Encode = function(e) {
      return this.b64Encode.encode(e);
    }, n.prototype.base64Decode = function(e) {
      return this.b64Decode.decode(e);
    }, n.prototype.generatePkceCodes = function() {
      return R(this, void 0, void 0, function() {
        return N(this, function(e) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    }, n.prototype.getPublicKeyThumbprint = function(e) {
      var t;
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              return r = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(_.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(n.EXTRACTABLE, n.POP_KEY_USAGES)];
            case 1:
              return o = d.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return i = d.sent(), a = {
                e: i.e,
                kty: i.kty,
                n: i.n
              }, s = Bt.getSortedObjectString(a), [4, this.hashString(s)];
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
              return d.sent(), r && r.endMeasurement({
                success: !0
              }), [2, c];
          }
        });
      });
    }, n.prototype.removeTokenBindingKey = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return N(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.cache.asymmetricKeys.removeItem(e)];
            case 1:
              return r.sent(), [4, this.cache.asymmetricKeys.containsKey(e)];
            case 2:
              return t = r.sent(), [2, !t];
          }
        });
      });
    }, n.prototype.clearKeystore = function() {
      return R(this, void 0, void 0, function() {
        return N(this, function(e) {
          switch (e.label) {
            case 0:
              return [4, this.cache.clear()];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }, n.prototype.signJwt = function(e, t, r) {
      var o;
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l, u, d, f, h, p, g, m, b;
        return N(this, function(C) {
          switch (C.label) {
            case 0:
              return i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.CryptoOptsSignJwt, r), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (a = C.sent(), !a)
                throw L.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(a.publicKey)];
            case 2:
              return s = C.sent(), c = Bt.getSortedObjectString(s), l = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), u = Yp.getShrHeaderString({ kid: l, alg: s.alg }), d = this.b64Encode.urlEncode(u), e.cnf = {
                jwk: JSON.parse(c)
              }, f = this.b64Encode.urlEncode(JSON.stringify(e)), h = d + "." + f, p = Bt.stringToArrayBuffer(h), [4, this.browserCrypto.sign(a.privateKey, p)];
            case 3:
              return g = C.sent(), m = this.b64Encode.urlEncodeArr(new Uint8Array(g)), b = h + "." + m, i && i.endMeasurement({
                success: !0
              }), [2, b];
          }
        });
      });
    }, n.prototype.hashString = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.browserCrypto.sha256Digest(e)];
            case 1:
              return t = o.sent(), r = new Uint8Array(t), [2, this.b64Encode.urlEncodeArr(r)];
          }
        });
      });
    }, n.POP_KEY_USAGES = ["sign", "verify"], n.EXTRACTABLE = !0, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var mc = (
  /** @class */
  function() {
    function n(e, t) {
      this.correlationId = t, this.measureName = n.makeMeasureName(e, t), this.startMark = n.makeStartMark(e, t), this.endMark = n.makeEndMark(e, t);
    }
    return n.makeMeasureName = function(e, t) {
      return "msal.measure." + e + "." + t;
    }, n.makeStartMark = function(e, t) {
      return "msal.start." + e + "." + t;
    }, n.makeEndMark = function(e, t) {
      return "msal.end." + e + "." + t;
    }, n.supportsBrowserPerformance = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.mark == "function" && typeof window.performance.measure == "function" && typeof window.performance.clearMarks == "function" && typeof window.performance.clearMeasures == "function" && typeof window.performance.getEntriesByName == "function";
    }, n.flushMeasurements = function(e, t) {
      if (n.supportsBrowserPerformance())
        try {
          t.forEach(function(r) {
            var o = n.makeMeasureName(r.name, e), i = window.performance.getEntriesByName(o, "measure");
            i.length > 0 && (window.performance.clearMeasures(o), window.performance.clearMarks(n.makeStartMark(o, e)), window.performance.clearMarks(n.makeEndMark(o, e)));
          });
        } catch {
        }
    }, n.prototype.startMeasurement = function() {
      if (n.supportsBrowserPerformance())
        try {
          window.performance.mark(this.startMark);
        } catch {
        }
    }, n.prototype.endMeasurement = function() {
      if (n.supportsBrowserPerformance())
        try {
          window.performance.mark(this.endMark), window.performance.measure(this.measureName, this.startMark, this.endMark);
        } catch {
        }
    }, n.prototype.flushMeasurement = function() {
      if (n.supportsBrowserPerformance())
        try {
          var e = window.performance.getEntriesByName(this.measureName, "measure");
          if (e.length > 0) {
            var t = e[0].duration;
            return window.performance.clearMeasures(this.measureName), window.performance.clearMarks(this.startMark), window.performance.clearMarks(this.endMark), t;
          }
        } catch {
        }
      return null;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ig = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s, c) {
      var l = n.call(this, t, r, o, i, a, s) || this;
      return l.browserCrypto = new Vl(l.logger, c), l.guidGenerator = new Kl(l.browserCrypto), l;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, r) {
      return new mc(t, r);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var r = this.eventsByCorrelationId.get(t.event.correlationId), o = r && r.eventId === t.event.eventId, i = [];
      o && (r != null && r.incompleteSubMeasurements) && r.incompleteSubMeasurements.forEach(function(a) {
        i.push(B({}, a));
      }), i.length > 0 && mc.flushMeasurements(t.event.correlationId, i);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, r) {
      var o = this, i = this.getPageVisibility(), a = n.prototype.startMeasurement.call(this, t, r);
      return B(B({}, a), { endMeasurement: function(s) {
        var c = a.endMeasurement(B({ startPageVisibility: i, endPageVisibility: o.getPageVisibility() }, s));
        return o.deleteIncompleteSubMeasurements(a), c;
      }, discardMeasurement: function() {
        a.discardMeasurement(), o.deleteIncompleteSubMeasurements(a), a.measurement.flushMeasurement();
      } });
    }, e.prototype.setPreQueueTime = function(t, r) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to set telemetry queue time for " + t);
        return;
      }
      if (!r) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + t + " not provided, unable to set telemetry queue time");
        return;
      }
      var o = this.preQueueTimeByCorrelationId.get(r);
      o && (this.logger.trace("BrowserPerformanceClient: Incomplete pre-queue " + o.name + " found", r), this.addQueueMeasurement(o.name, r, void 0, !0)), this.preQueueTimeByCorrelationId.set(r, { name: t, time: window.performance.now() });
    }, e.prototype.addQueueMeasurement = function(t, r, o, i) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to add queue measurement for " + t);
        return;
      }
      if (!r) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + t + " not provided, unable to add queue measurement");
        return;
      }
      var a = n.prototype.getPreQueueTime.call(this, t, r);
      if (a) {
        var s = window.performance.now(), c = o || n.prototype.calculateQueuedTime.call(this, a, s);
        return n.prototype.addQueueMeasurement.call(this, t, r, c, i);
      }
    }, e;
  }(Ul)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var _g = (
  /** @class */
  function() {
    function n(e, t, r, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = r, this.cryptoObj = o;
    }
    return n.prototype.loadExternalTokens = function(e, t, r) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw L.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new Ot(t.id_token, this.cryptoObj), i, a, s;
      if (e.account)
        s = He.createFromAccountInfo(e.account), i = new Xn(s, this.loadIdToken(o, s.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, s.homeAccountId, e.account.environment, e.account.tenantId, r), this.loadRefreshToken(e, t, s.homeAccountId, e.account.environment));
      else if (e.authority) {
        var c = Lr.generateAuthority(e.authority, e.azureCloudOptions), l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (a = new Lr(c, this.config.system.networkClient, this.storage, l, this.logger), r.clientInfo)
          this.logger.trace("TokenCache - homeAccountId from options"), s = this.loadAccount(o, a, r.clientInfo), i = new Xn(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, r), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else if (t.client_info)
          this.logger.trace("TokenCache - homeAccountId from response"), s = this.loadAccount(o, a, t.client_info), i = new Xn(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, r), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else
          throw L.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw L.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, i, s, a);
    }, n.prototype.loadAccount = function(e, t, r, o) {
      var i;
      if (o ? i = o : t.authorityType !== void 0 && r && (i = He.generateHomeAccountId(r, t.authorityType, this.logger, this.cryptoObj, e.claims)), !i)
        throw L.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var a = He.createAccount({ homeAccountId: i, idTokenClaims: e.claims, clientInfo: r, environment: t.hostnameAndPort }, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(a), a;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.loadIdToken = function(e, t, r, o) {
      var i = tn.createIdTokenEntity(t, r, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(i), i;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.loadAccessToken = function(e, t, r, o, i, a) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw L.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!a.extendedExpiresOn)
        throw L.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var s = new je(e.scopes).printScopes(), c = a.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, l = a.extendedExpiresOn, u = nn.createAccessTokenEntity(r, o, t.access_token, this.config.auth.clientId, i, s, c, l, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u), u;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.loadRefreshToken = function(e, t, r, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var i = Yn.createRefreshTokenEntity(r, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(i), i;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.generateAuthenticationResult = function(e, t, r, o, i) {
      var a, s = T.EMPTY_STRING, c = [], l = null, u;
      r.accessToken && (s = r.accessToken.secret, c = je.fromString(r.accessToken.target).asArray(), l = new Date(Number(r.accessToken.expiresOn) * 1e3), u = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3));
      var d = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || T.EMPTY_STRING, f = (t == null ? void 0 : t.claims.tid) || T.EMPTY_STRING;
      return {
        authority: i ? i.canonicalAuthority : T.EMPTY_STRING,
        uniqueId: d,
        tenantId: f,
        scopes: c,
        account: o ? o.getAccountInfo() : null,
        idToken: t ? t.rawToken : T.EMPTY_STRING,
        idTokenClaims: t ? t.claims : {},
        accessToken: s,
        fromCache: !0,
        expiresOn: l,
        correlationId: e.correlationId || T.EMPTY_STRING,
        requestId: T.EMPTY_STRING,
        extExpiresOn: u,
        familyId: T.EMPTY_STRING,
        tokenType: ((a = r == null ? void 0 : r.accessToken) === null || a === void 0 ? void 0 : a.tokenType) || T.EMPTY_STRING,
        state: T.EMPTY_STRING,
        cloudGraphHostName: o.cloudGraphHostName || T.EMPTY_STRING,
        msGraphHost: o.msGraphHost || T.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: !1
      };
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var kg = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t) {
      var r = n.call(this, t) || this;
      return r.includeRedirectUri = !1, r;
    }
    return e;
  }(Ll)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ag = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t, r, o, i, a, s, c, l, u, d) {
      var f = n.call(this, t, r, o, i, a, s, l, u, d) || this;
      return f.apiId = c, f;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !t.code)
                throw L.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, $.Silent)];
            case 1:
              r = u.sent(), this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority, r.loginHint || T.EMPTY_STRING, r.account || null), o = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), i = B(B({}, r), { code: t.code }), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, r.authority)];
            case 3:
              return a = u.sent(), s = new kg(a), this.logger.verbose("Auth code client created"), c = new $l(s, this.browserStorage, i, this.logger, this.config.system, this.performanceClient), [2, c.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, r.state, s.authority, this.networkClient, !1)];
            case 4:
              throw l = u.sent(), l instanceof K && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(r.state), l;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(L.createSilentLogoutUnsupportedError());
    }, e;
  }(cr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Rg = (
  /** @class */
  function() {
    function n(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = lg(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Ca(this.config.system.loggerOptions, yi, Pr), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new Ig(this.config.auth.clientId, this.config.auth.authority, this.logger, yi, Pr, this.config.telemetry.application, this.config.system.cryptoOptions) : new Jp(this.config.auth.clientId, this.config.auth.authority, this.logger, yi, Pr, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new Eg(this.logger, this.performanceClient, this.config.system.cryptoOptions) : wo, this.eventHandler = new fg(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new Ji(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : eg(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: Ie.MemoryStorage,
        temporaryCacheLocation: Ie.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new Ji(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new _g(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    return n.prototype.initialize = function() {
      return R(this, void 0, void 0, function() {
        var e, t, r, o, i;
        return N(this, function(a) {
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
              return a.trys.push([1, 3, , 4]), r = this, [4, In.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return r.nativeExtensionProvider = a.sent(), [3, 4];
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
    }, n.prototype.handleRedirectPromise = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r, o, i, a, s, c, l, u = this;
        return N(this, function(d) {
          return this.logger.verbose("handleRedirectPromise called"), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (r = e || T.EMPTY_STRING, o = this.redirectResponse.get(r), typeof o > "u" ? (this.eventHandler.emitEvent(ee.HANDLE_REDIRECT_START, $.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), i = this.browserStorage.getCachedNativeRequest(), a = void 0, i && In.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), s = new Zn(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId), a = s.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), c = this.browserStorage.getTemporaryCache(fe.CORRELATION_ID, !0) || T.EMPTY_STRING, l = this.createRedirectClient(c), a = l.handleRedirectPromise(e)), o = a.then(function(f) {
            if (f) {
              var h = t.length < u.getAllAccounts().length;
              h ? (u.eventHandler.emitEvent(ee.LOGIN_SUCCESS, $.Redirect, f), u.logger.verbose("handleRedirectResponse returned result, login success")) : (u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, $.Redirect, f), u.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return u.eventHandler.emitEvent(ee.HANDLE_REDIRECT_END, $.Redirect), f;
          }).catch(function(f) {
            throw t.length > 0 ? u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, $.Redirect, null, f) : u.eventHandler.emitEvent(ee.LOGIN_FAILURE, $.Redirect, null, f), u.eventHandler.emitEvent(ee.HANDLE_REDIRECT_END, $.Redirect), f;
          }), this.redirectResponse.set(r, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, n.prototype.acquireTokenRedirect = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r, o, i, a, s = this;
        return N(this, function(c) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck($.Redirect), r = this.getAllAccounts().length > 0, r ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, $.Redirect, e) : this.eventHandler.emitEvent(ee.LOGIN_START, $.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (i = new Zn(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = i.acquireTokenRedirect(e).catch(function(l) {
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
            throw r ? s.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, $.Redirect, null, l) : s.eventHandler.emitEvent(ee.LOGIN_FAILURE, $.Redirect, null, l), l;
          })];
        });
      });
    }, n.prototype.acquireTokenPopup = function(e) {
      var t = this, r = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(_.AcquireTokenPopup, r);
      try {
        this.logger.verbose("acquireTokenPopup called", r), this.preflightBrowserEnvironmentCheck($.Popup);
      } catch (c) {
        return Promise.reject(c);
      }
      var i = this.getAllAccounts();
      i.length > 0 ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, $.Popup, e) : this.eventHandler.emitEvent(ee.LOGIN_START, $.Popup, e);
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
        return l ? t.eventHandler.emitEvent(ee.LOGIN_SUCCESS, $.Popup, c) : t.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, $.Popup, c), o.addStaticFields({
          accessTokenSize: c.accessToken.length,
          idTokenSize: c.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: c.requestId
        }), c;
      }).catch(function(c) {
        return i.length > 0 ? t.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, $.Popup, null, c) : t.eventHandler.emitEvent(ee.LOGIN_FAILURE, $.Popup, null, c), o.endMeasurement({
          errorCode: c.errorCode,
          subErrorCode: c.subError,
          success: !1
        }), Promise.reject(c);
      });
    }, n.prototype.trackPageVisibilityWithMeasurement = function() {
      var e = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
      e && (this.logger.info("Perf: Visibility change detected in ", e.event.name), e.increment({
        visibilityChangeCount: 1
      }));
    }, n.prototype.ssoSilent = function(e) {
      var t;
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s = this;
        return N(this, function(c) {
          return r = this.getRequestCorrelationId(e), o = B(B({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: r
          }), this.preflightBrowserEnvironmentCheck($.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(_.SsoSilent, r), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", r), this.eventHandler.emitEvent(ee.SSO_SILENT_START, $.Silent, o), this.canUseNative(o) ? i = this.acquireTokenNative(o, ve.ssoSilent).catch(function(l) {
            if (l instanceof Rt && l.isFatal()) {
              s.nativeExtensionProvider = void 0;
              var u = s.createSilentIframeClient(o.correlationId);
              return u.acquireToken(o);
            }
            throw l;
          }) : (a = this.createSilentIframeClient(o.correlationId), i = a.acquireToken(o)), [2, i.then(function(l) {
            var u, d;
            return s.eventHandler.emitEvent(ee.SSO_SILENT_SUCCESS, $.Silent, l), (u = s.ssoSilentMeasurement) === null || u === void 0 || u.addStaticFields({
              accessTokenSize: l.accessToken.length,
              idTokenSize: l.idToken.length
            }), (d = s.ssoSilentMeasurement) === null || d === void 0 || d.endMeasurement({
              success: !0,
              isNativeBroker: l.fromNativeBroker,
              requestId: l.requestId
            }), l;
          }).catch(function(l) {
            var u;
            throw s.eventHandler.emitEvent(ee.SSO_SILENT_FAILURE, $.Silent, null, l), (u = s.ssoSilentMeasurement) === null || u === void 0 || u.endMeasurement({
              errorCode: l.errorCode,
              subErrorCode: l.subError,
              success: !1
            }), l;
          }).finally(function() {
            document.removeEventListener("visibilitychange", s.trackPageVisibilityWithMeasurement);
          })];
        });
      });
    }, n.prototype.acquireTokenByCode = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r, o, i, a = this;
        return N(this, function(s) {
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck($.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_START, $.Silent, e), r = this.performanceClient.startMeasurement(_.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw L.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, i = this.hybridAuthCodeResponses.get(o), i ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), r.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), i = this.acquireTokenByCodeAsync(B(B({}, e), { correlationId: t })).then(function(c) {
                return a.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_SUCCESS, $.Silent, c), a.hybridAuthCodeResponses.delete(o), r.addStaticFields({
                  accessTokenSize: c.accessToken.length,
                  idTokenSize: c.idToken.length
                }), r.endMeasurement({
                  success: !0,
                  isNativeBroker: c.fromNativeBroker,
                  requestId: c.requestId
                }), c;
              }).catch(function(c) {
                throw a.hybridAuthCodeResponses.delete(o), a.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, $.Silent, null, c), r.endMeasurement({
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
              throw L.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw L.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (c) {
            throw this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, $.Silent, null, c), r.endMeasurement({
              errorCode: c instanceof K && c.errorCode || void 0,
              subErrorCode: c instanceof K && c.subError || void 0,
              success: !1
            }), c;
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, n.prototype.acquireTokenByCodeAsync = function(e) {
      var t;
      return R(this, void 0, void 0, function() {
        var r, o, i = this;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(_.AcquireTokenByCodeAsync, e.correlationId), (t = this.acquireTokenByCodeAsyncMeasurement) === null || t === void 0 || t.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), r = this.createSilentAuthCodeClient(e.correlationId), [4, r.acquireToken(e).then(function(s) {
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
    }, n.prototype.acquireTokenFromCache = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        return N(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(_.AcquireTokenFromCache, t.correlationId), r.cacheLookupPolicy) {
            case Qe.Default:
            case Qe.AccessToken:
            case Qe.AccessTokenAndRefreshToken:
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
    }, n.prototype.acquireTokenByRefreshToken = function(e, t) {
      return R(this, void 0, void 0, function() {
        var r;
        return N(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(_.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case Qe.Default:
            case Qe.AccessTokenAndRefreshToken:
            case Qe.RefreshToken:
            case Qe.RefreshTokenAndNetwork:
              return r = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(_.SilentRefreshClientAcquireToken, e.correlationId), [2, r.acquireToken(e)];
            default:
              throw z.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, n.prototype.acquireTokenBySilentIframe = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return N(this, function(r) {
          return this.performanceClient.addQueueMeasurement(_.AcquireTokenBySilentIframe, e.correlationId), t = this.createSilentIframeClient(e.correlationId), this.performanceClient.setPreQueueTime(_.SilentIframeClientAcquireToken, e.correlationId), [2, t.acquireToken(e)];
        });
      });
    }, n.prototype.logout = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return N(this, function(r) {
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(B({ correlationId: t }, e))];
        });
      });
    }, n.prototype.logoutRedirect = function(e) {
      return R(this, void 0, void 0, function() {
        var t, r;
        return N(this, function(o) {
          return t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck($.Redirect), r = this.createRedirectClient(t), [2, r.logout(e)];
        });
      });
    }, n.prototype.logoutPopup = function(e) {
      try {
        var t = this.getRequestCorrelationId(e);
        this.preflightBrowserEnvironmentCheck($.Popup);
        var r = this.createPopupClient(t);
        return r.logout(e);
      } catch (o) {
        return Promise.reject(o);
      }
    }, n.prototype.getAllAccounts = function() {
      return this.logger.verbose("getAllAccounts called"), this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
    }, n.prototype.getAccountByUsername = function(e) {
      if (this.logger.trace("getAccountByUsername called"), !e)
        return this.logger.warning("getAccountByUsername: No username provided"), null;
      var t = this.browserStorage.getAccountInfoFilteredBy({ username: e });
      return t ? (this.logger.verbose("getAccountByUsername: Account matching username found, returning"), this.logger.verbosePii("getAccountByUsername: Returning signed-in accounts matching username: " + e), t) : (this.logger.verbose("getAccountByUsername: No matching account found, returning null"), null);
    }, n.prototype.getAccountByHomeId = function(e) {
      if (this.logger.trace("getAccountByHomeId called"), !e)
        return this.logger.warning("getAccountByHomeId: No homeAccountId provided"), null;
      var t = this.browserStorage.getAccountInfoFilteredBy({ homeAccountId: e });
      return t ? (this.logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning"), this.logger.verbosePii("getAccountByHomeId: Returning signed-in accounts matching homeAccountId: " + e), t) : (this.logger.verbose("getAccountByHomeId: No matching account found, returning null"), null);
    }, n.prototype.getAccountByLocalId = function(e) {
      if (this.logger.trace("getAccountByLocalId called"), !e)
        return this.logger.warning("getAccountByLocalId: No localAccountId provided"), null;
      var t = this.browserStorage.getAccountInfoFilteredBy({ localAccountId: e });
      return t ? (this.logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning"), this.logger.verbosePii("getAccountByLocalId: Returning signed-in accounts matching localAccountId: " + e), t) : (this.logger.verbose("getAccountByLocalId: No matching account found, returning null"), null);
    }, n.prototype.setActiveAccount = function(e) {
      this.browserStorage.setActiveAccount(e);
    }, n.prototype.getActiveAccount = function() {
      return this.browserStorage.getActiveAccount();
    }, n.prototype.preflightBrowserEnvironmentCheck = function(e, t) {
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), Se.blockNonBrowserEnvironment(this.isBrowserEnvironment), Se.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), Se.blockReloadInHiddenIframes(), Se.blockAcquireTokenInPopups(), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === $.Redirect && this.config.cache.cacheLocation === Ie.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Ao.createInMemoryRedirectUnavailableError();
      (e === $.Redirect || e === $.Popup) && this.preflightInteractiveRequest(t);
    }, n.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), Se.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, n.prototype.acquireTokenNative = function(e, t, r) {
      return R(this, void 0, void 0, function() {
        var o;
        return N(this, function(i) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw L.createNativeConnectionNotEstablishedError();
          return o = new Zn(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, r || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, n.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !In.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
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
    }, n.prototype.getNativeAccountId = function(e) {
      var t = e.account || this.browserStorage.getAccountInfoByHints(e.loginHint, e.sid) || this.getActiveAccount();
      return t && t.nativeAccountId || "";
    }, n.prototype.createPopupClient = function(e) {
      return new og(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, n.prototype.createRedirectClient = function(e) {
      return new rg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentIframeClient = function(e) {
      return new ug(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentCacheClient = function(e) {
      return new zl(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentRefreshClient = function(e) {
      return new dg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentAuthCodeClient = function(e) {
      return new Ag(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
    }, n.prototype.addEventCallback = function(e) {
      return this.eventHandler.addEventCallback(e);
    }, n.prototype.removeEventCallback = function(e) {
      this.eventHandler.removeEventCallback(e);
    }, n.prototype.addPerformanceCallback = function(e) {
      return this.performanceClient.addPerformanceCallback(e);
    }, n.prototype.removePerformanceCallback = function(e) {
      return this.performanceClient.removePerformanceCallback(e);
    }, n.prototype.enableAccountStorageEvents = function() {
      this.eventHandler.enableAccountStorageEvents();
    }, n.prototype.disableAccountStorageEvents = function() {
      this.eventHandler.disableAccountStorageEvents();
    }, n.prototype.getTokenCache = function() {
      return this.tokenCache;
    }, n.prototype.getLogger = function() {
      return this.logger;
    }, n.prototype.setLogger = function(e) {
      this.logger = e;
    }, n.prototype.initializeWrapperLibrary = function(e, t) {
      this.browserStorage.setWrapperMetadata(e, t);
    }, n.prototype.setNavigationClient = function(e) {
      this.navigationClient = e;
    }, n.prototype.getConfiguration = function() {
      return this.config;
    }, n.prototype.getRequestCorrelationId = function(e) {
      return e != null && e.correlationId ? e.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : T.EMPTY_STRING;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ng = (
  /** @class */
  function(n) {
    De(e, n);
    function e(t) {
      var r = n.call(this, t) || this;
      return r.astsAsyncMeasurement = void 0, r.activeSilentTokenRequests = /* @__PURE__ */ new Map(), r.trackPageVisibility = r.trackPageVisibility.bind(r), r;
    }
    return e.prototype.loginRedirect = function(t) {
      return R(this, void 0, void 0, function() {
        var r;
        return N(this, function(o) {
          return r = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", r), [2, this.acquireTokenRedirect(B({ correlationId: r }, t || uc))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var r = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", r), this.acquireTokenPopup(B({ correlationId: r }, t || uc));
    }, e.prototype.acquireTokenSilent = function(t) {
      return R(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u = this;
        return N(this, function(d) {
          if (r = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(_.AcquireTokenSilent, r), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck($.Silent), this.logger.verbose("acquireTokenSilent called", r), i = t.account || this.getActiveAccount(), !i)
            throw L.createNoAccountError();
          return a = {
            clientId: this.config.auth.clientId,
            authority: t.authority || T.EMPTY_STRING,
            scopes: t.scopes,
            homeAccountIdentifier: i.homeAccountId,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
          }, s = JSON.stringify(a), c = this.activeSilentTokenRequests.get(s), typeof c > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", r), this.performanceClient.setPreQueueTime(_.AcquireTokenSilentAsync, r), l = this.acquireTokenSilentAsync(B(B({}, t), { correlationId: r }), i).then(function(f) {
            return u.activeSilentTokenRequests.delete(s), o.addStaticFields({
              accessTokenSize: f.accessToken.length,
              idTokenSize: f.idToken.length
            }), o.endMeasurement({
              success: !0,
              fromCache: f.fromCache,
              isNativeBroker: f.fromNativeBroker,
              cacheLookupPolicy: t.cacheLookupPolicy,
              requestId: f.requestId
            }), f;
          }).catch(function(f) {
            throw u.activeSilentTokenRequests.delete(s), o.endMeasurement({
              errorCode: f.errorCode,
              subErrorCode: f.subError,
              success: !1
            }), f;
          }), this.activeSilentTokenRequests.set(s, l), [2, l]) : (this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", r), o.discardMeasurement(), [2, c]);
        });
      });
    }, e.prototype.trackPageVisibility = function() {
      this.astsAsyncMeasurement && (this.logger.info("Perf: Visibility change detected"), this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      }));
    }, e.prototype.acquireTokenSilentAsync = function(t, r) {
      var o;
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l, u = this;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, $.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(_.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), In.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && r.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), a = B(B({}, t), { account: r }), i = this.acquireTokenNative(a, ve.acquireTokenSilent_silentFlow).catch(function(f) {
                return R(u, void 0, void 0, function() {
                  var h;
                  return N(this, function(p) {
                    if (f instanceof Rt && f.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, h = this.createSilentIframeClient(t.correlationId), [2, h.acquireToken(t)];
                    throw f;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), s = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(_.InitializeSilentRequest, t.correlationId), [4, s.initializeSilentRequest(t, r)];
            case 2:
              c = d.sent(), l = B(B({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || Qe.Default
              }), this.performanceClient.setPreQueueTime(_.AcquireTokenFromCache, c.correlationId), i = this.acquireTokenFromCache(s, c, l).catch(function(f) {
                if (l.cacheLookupPolicy === Qe.AccessToken)
                  throw f;
                return Se.blockReloadInHiddenIframes(), u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_NETWORK_START, $.Silent, c), u.performanceClient.setPreQueueTime(_.AcquireTokenByRefreshToken, c.correlationId), u.acquireTokenByRefreshToken(c, l).catch(function(h) {
                  var p = h instanceof An, g = h instanceof wt, m = h.errorCode === Qn.noTokensFoundError.code, b = h.errorCode === bt.INVALID_GRANT_ERROR;
                  if ((!p || !b || g || l.cacheLookupPolicy === Qe.AccessTokenAndRefreshToken || l.cacheLookupPolicy === Qe.RefreshToken) && l.cacheLookupPolicy !== Qe.Skip && !m)
                    throw h;
                  return u.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), u.performanceClient.setPreQueueTime(_.AcquireTokenBySilentIframe, c.correlationId), u.acquireTokenBySilentIframe(c);
                });
              }), d.label = 3;
            case 3:
              return [2, i.then(function(f) {
                var h;
                return u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, $.Silent, f), (h = u.astsAsyncMeasurement) === null || h === void 0 || h.endMeasurement({
                  success: !0,
                  fromCache: f.fromCache,
                  isNativeBroker: f.fromNativeBroker,
                  requestId: f.requestId
                }), f;
              }).catch(function(f) {
                var h;
                throw u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, $.Silent, null, f), (h = u.astsAsyncMeasurement) === null || h === void 0 || h.endMeasurement({
                  errorCode: f.errorCode,
                  subErrorCode: f.subError,
                  success: !1
                }), f;
              }).finally(function() {
                document.removeEventListener("visibilitychange", u.trackPageVisibility);
              })];
          }
        });
      });
    }, e.prototype.hydrateCache = function(t, r) {
      return R(this, void 0, void 0, function() {
        var o;
        return N(this, function(i) {
          return this.logger.verbose("hydrateCache called"), t.account ? (o = He.createFromAccountInfo(t.account, t.cloudGraphHostName, t.msGraphHost), this.browserStorage.setAccount(o), t.fromNativeBroker ? (this.logger.verbose("Response was from native broker, storing in-memory"), [2, this.nativeInternalStorage.hydrateCache(t, r)]) : [2, this.browserStorage.hydrateCache(t, r)]) : [
            2
            /*return*/
          ];
        });
      });
    }, e;
  }(Rg)
);
function Nt(n) {
  return Object.keys(n);
}
function vi(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function Ia(n, e) {
  const t = { ...n }, r = e;
  return vi(n) && vi(e) && Object.keys(e).forEach((o) => {
    vi(r[o]) && o in n ? t[o] = Ia(t[o], r[o]) : t[o] = r[o];
  }), t;
}
function Pg(n) {
  return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function Og(n) {
  var e;
  return typeof n != "string" || !n.includes("var(--mantine-scale)") ? n : (e = n.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function Mg(n) {
  const e = Og(n);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function bi(n) {
  return n === "0rem" ? "0rem" : `calc(${n} * var(--mantine-scale))`;
}
function Gl(n, { shouldScale: e = !1 } = {}) {
  function t(r) {
    if (r === 0 || r === "0")
      return `0${n}`;
    if (typeof r == "number") {
      const o = `${r / 16}${n}`;
      return e ? bi(o) : o;
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba("))
        return r;
      if (r.includes(","))
        return r.split(",").map((i) => t(i)).join(",");
      if (r.includes(" "))
        return r.split(" ").map((i) => t(i)).join(" ");
      if (r.includes(n))
        return e ? bi(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${n}`;
        return e ? bi(i) : i;
      }
    }
    return r;
  }
  return t;
}
const A = Gl("rem", { shouldScale: !0 }), yc = Gl("em");
function _a(n) {
  return Object.keys(n).reduce((e, t) => (n[t] !== void 0 && (e[t] = n[t]), e), {});
}
function Wl(n) {
  return typeof n == "number" ? !0 : typeof n == "string" ? n.startsWith("calc(") || n.startsWith("var(") || n.includes(" ") && n.trim() !== "" ? !0 : /[0-9]/.test(n.trim().replace("-", "")[0]) : !1;
}
function Vr(n) {
  return Array.isArray(n) || n === null ? !1 : typeof n == "object" ? n.type !== Cl : !1;
}
function lr(n) {
  const e = Mn(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => {
    const o = ln(e);
    if (o === null)
      throw new Error(n);
    return o;
  }];
}
function Yl(n = null) {
  const e = Mn(n);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => ln(e)];
}
function vc(n, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${n}-${t}`;
  };
}
function Zi(n, e) {
  let t = n;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function xg(n, e, t) {
  for (let r = n - 1; r >= 0; r -= 1)
    if (!e[r].disabled)
      return r;
  if (t) {
    for (let r = e.length - 1; r > -1; r -= 1)
      if (!e[r].disabled)
        return r;
  }
  return n;
}
function Dg(n, e, t) {
  for (let r = n + 1; r < e.length; r += 1)
    if (!e[r].disabled)
      return r;
  if (t) {
    for (let r = 0; r < e.length; r += 1)
      if (!e[r].disabled)
        return r;
  }
  return n;
}
function Lg(n, e, t) {
  return Zi(n, t) === Zi(e, t);
}
function jg({
  parentSelector: n,
  siblingSelector: e,
  onKeyDown: t,
  loop: r = !0,
  activateOnFocus: o = !1,
  dir: i = "rtl",
  orientation: a
}) {
  return (s) => {
    var p;
    t == null || t(s);
    const c = Array.from(
      ((p = Zi(s.currentTarget, n)) == null ? void 0 : p.querySelectorAll(
        e
      )) || []
    ).filter((g) => Lg(s.currentTarget, g, n)), l = c.findIndex((g) => s.currentTarget === g), u = Dg(l, c, r), d = xg(l, c, r), f = i === "rtl" ? d : u, h = i === "rtl" ? u : d;
    switch (s.key) {
      case "ArrowRight": {
        a === "horizontal" && (s.stopPropagation(), s.preventDefault(), c[f].focus(), o && c[f].click());
        break;
      }
      case "ArrowLeft": {
        a === "horizontal" && (s.stopPropagation(), s.preventDefault(), c[h].focus(), o && c[h].click());
        break;
      }
      case "ArrowUp": {
        a === "vertical" && (s.stopPropagation(), s.preventDefault(), c[d].focus(), o && c[d].click());
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
const Fg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Ug(n) {
  return Fg[n];
}
const Hg = () => {
};
function Bg(n, e = { active: !0 }) {
  return typeof n != "function" || !e.active ? e.onKeyDown || Hg : (t) => {
    var r;
    t.key === "Escape" && (n(t), (r = e.onTrigger) == null || r.call(e));
  };
}
function Re(n, e = "size", t = !0) {
  if (n !== void 0)
    return Wl(n) ? t ? A(n) : n : `var(--${e}-${n})`;
}
function ka(n) {
  return Re(n, "mantine-spacing");
}
function It(n) {
  return n === void 0 ? "var(--mantine-radius-default)" : Re(n, "mantine-radius");
}
function it(n) {
  return Re(n, "mantine-font-size");
}
function zg(n) {
  return Re(n, "mantine-line-height", !1);
}
function Ql(n) {
  if (n)
    return Re(n, "mantine-shadow", !1);
}
function Jl() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Sn(n) {
  const e = ue(n);
  return Y(() => {
    e.current = n;
  }), Mr(() => (...t) => {
    var r;
    return (r = e.current) == null ? void 0 : r.call(e, ...t);
  }, []);
}
function Yo(n, e) {
  const t = Sn(n), r = ue(0);
  return Y(() => () => window.clearTimeout(r.current), []), me(
    (...o) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => t(...o), e);
    },
    [t, e]
  );
}
const bc = ["mousedown", "touchstart"];
function $g(n, e, t) {
  const r = ue();
  return Y(() => {
    const o = (i) => {
      const { target: a } = i ?? {};
      if (Array.isArray(t)) {
        const s = (a == null ? void 0 : a.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(a) && a.tagName !== "HTML";
        t.every((l) => !!l && !i.composedPath().includes(l)) && !s && n();
      } else
        r.current && !r.current.contains(a) && n();
    };
    return (e || bc).forEach((i) => document.addEventListener(i, o)), () => {
      (e || bc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, n, t]), r;
}
function Kg(n, e) {
  try {
    return n.addEventListener("change", e), () => n.removeEventListener("change", e);
  } catch {
    return n.addListener(e), () => n.removeListener(e);
  }
}
function qg(n, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(n).matches : !1;
}
function Vg(n, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = X(
    t ? e : qg(n)
  ), i = ue();
  return Y(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(n), o(i.current.matches), Kg(i.current, (a) => o(a.matches));
  }, [n]), r;
}
function Gg(n, e, t = { leading: !1 }) {
  const [r, o] = X(n), i = ue(!1), a = ue(null), s = ue(!1), c = () => window.clearTimeout(a.current);
  return Y(() => {
    i.current && (!s.current && t.leading ? (s.current = !0, o(n)) : (c(), a.current = window.setTimeout(() => {
      s.current = !1, o(n);
    }, e)));
  }, [n, t.leading, e]), Y(() => (i.current = !0, c), []), [r, c];
}
const Gr = typeof document < "u" ? ma : Y;
function Rn(n, e) {
  const t = ue(!1);
  Y(
    () => () => {
      t.current = !1;
    },
    []
  ), Y(() => {
    if (t.current)
      return n();
    t.current = !0;
  }, e);
}
function Wg({ opened: n, shouldReturnFocus: e = !0 }) {
  const t = ue(), r = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Rn(() => {
    let o = -1;
    const i = (a) => {
      a.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), n ? t.current = document.activeElement : e && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [n, e]), r;
}
function Yg(n, e = "body > :not(script)") {
  const t = Jl(), r = Array.from(
    document.querySelectorAll(e)
  ).map((o) => {
    var c;
    if ((c = o == null ? void 0 : o.shadowRoot) != null && c.contains(n) || o.contains(n))
      return;
    const i = o.getAttribute("aria-hidden"), a = o.getAttribute("data-hidden"), s = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", t), i === null || i === "false" ? o.setAttribute("aria-hidden", "true") : !a && !s && o.setAttribute("data-hidden", i), {
      node: o,
      ariaHidden: a || null
    };
  });
  return () => {
    r.forEach((o) => {
      !o || t !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const Qg = /input|select|textarea|button|object/, Xl = "a, input, select, textarea, button, object, [tabindex]";
function Jg(n) {
  return n.style.display === "none";
}
function Xg(n) {
  if (n.getAttribute("aria-hidden") || n.getAttribute("hidden") || n.getAttribute("type") === "hidden")
    return !1;
  let t = n;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Jg(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function Zl(n) {
  let e = n.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function ea(n) {
  const e = n.nodeName.toLowerCase(), t = !Number.isNaN(Zl(n));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Qg.test(e) && !n.disabled || n instanceof HTMLAnchorElement && n.href || t) && Xg(n);
}
function eu(n) {
  const e = Zl(n);
  return (Number.isNaN(e) || e >= 0) && ea(n);
}
function Zg(n) {
  return Array.from(n.querySelectorAll(Xl)).filter(eu);
}
function em(n, e) {
  const t = Zg(n);
  if (!t.length) {
    e.preventDefault();
    return;
  }
  const r = t[e.shiftKey ? 0 : t.length - 1], o = n.getRootNode();
  let i = r === o.activeElement || n === o.activeElement;
  const a = o.activeElement;
  if (a.tagName === "INPUT" && a.getAttribute("type") === "radio" && (i = t.filter(
    (u) => u.getAttribute("type") === "radio" && u.getAttribute("name") === a.getAttribute("name")
  ).includes(r)), !i)
    return;
  e.preventDefault();
  const c = t[e.shiftKey ? t.length - 1 : 0];
  c && c.focus();
}
function tm(n = !0) {
  const e = ue(), t = ue(null), r = (i) => {
    let a = i.querySelector("[data-autofocus]");
    if (!a) {
      const s = Array.from(i.querySelectorAll(Xl));
      a = s.find(eu) || s.find(ea) || null, !a && ea(i) && (a = i);
    }
    a && a.focus({ preventScroll: !0 });
  }, o = me(
    (i) => {
      if (n) {
        if (i === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = Yg(i), e.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i);
        }), e.current = i) : e.current = null);
      }
    },
    [n]
  );
  return Y(() => {
    if (!n)
      return;
    e.current && setTimeout(() => r(e.current));
    const i = (a) => {
      a.key === "Tab" && e.current && em(e.current, a);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), t.current && t.current();
    };
  }, [n]), o;
}
const nm = Ko["useId".toString()] || (() => {
});
function rm() {
  const n = nm();
  return n ? `mantine-${n.replace(/:/g, "")}` : "";
}
function un(n) {
  const e = rm(), [t, r] = X(e);
  return Gr(() => {
    r(Jl());
  }, []), typeof n == "string" ? n : typeof window > "u" ? e : t;
}
function tu(n, e) {
  typeof n == "function" ? n(e) : typeof n == "object" && n !== null && "current" in n && (n.current = e);
}
function nu(...n) {
  return (e) => {
    n.forEach((t) => tu(t, e));
  };
}
function ht(...n) {
  return me(nu(...n), n);
}
function Nn({
  value: n,
  defaultValue: e,
  finalValue: t,
  onChange: r = () => {
  }
}) {
  const [o, i] = X(
    e !== void 0 ? e : t
  ), a = (s, ...c) => {
    i(s), r == null || r(s, ...c);
  };
  return n !== void 0 ? [n, r, !0] : [o, a, !1];
}
function ru(n, e) {
  return Vg("(prefers-reduced-motion: reduce)", n, e);
}
function om(n) {
  const e = ue();
  return Y(() => {
    e.current = n;
  }, [n]), e.current;
}
function ou(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number")
    r += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var o = n.length;
      for (e = 0; e < o; e++)
        n[e] && (t = ou(n[e])) && (r && (r += " "), r += t);
    } else
      for (t in n)
        n[t] && (r && (r += " "), r += t);
  return r;
}
function qt() {
  for (var n, e, t = 0, r = "", o = arguments.length; t < o; t++)
    (n = arguments[t]) && (e = ou(n)) && (r && (r += " "), r += e);
  return r;
}
const im = {};
function am(n) {
  const e = {};
  return n.forEach((t) => {
    Object.entries(t).forEach(([r, o]) => {
      e[r] ? e[r] = qt(e[r], o) : e[r] = o;
    });
  }), e;
}
function Qo({ theme: n, classNames: e, props: t, stylesCtx: r }) {
  const i = (Array.isArray(e) ? e : [e]).map(
    (a) => typeof a == "function" ? a(n, t, r) : a || im
  );
  return am(i);
}
function No({ theme: n, styles: e, props: t, stylesCtx: r }) {
  return (Array.isArray(e) ? e : [e]).reduce((i, a) => typeof a == "function" ? { ...i, ...a(n, t, r) } : { ...i, ...a }, {});
}
const iu = Mn(null);
function xn() {
  const n = ln(iu);
  if (!n)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return n;
}
function sm() {
  return xn().cssVariablesResolver;
}
function cm() {
  return xn().classNamesPrefix;
}
function Aa() {
  return xn().getStyleNonce;
}
function lm() {
  return xn().withStaticClasses;
}
function um() {
  return xn().headless;
}
function dm() {
  var n;
  return (n = xn().stylesTransform) == null ? void 0 : n.sx;
}
function fm() {
  var n;
  return (n = xn().stylesTransform) == null ? void 0 : n.styles;
}
function hm(n) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(n);
}
function pm(n) {
  let e = n.replace("#", "");
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
  const t = parseInt(e, 16), r = t >> 16 & 255, o = t >> 8 & 255, i = t & 255;
  return {
    r,
    g: o,
    b: i,
    a: 1
  };
}
function gm(n) {
  const [e, t, r, o] = n.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: t, b: r, a: o || 1 };
}
function mm(n) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = n.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, i = parseInt(t[3], 10) / 100, a = t[5] ? parseFloat(t[5]) : void 0, s = (1 - Math.abs(2 * i - 1)) * o, c = r / 60, l = s * (1 - Math.abs(c % 2 - 1)), u = i - s / 2;
  let d, f, h;
  return c >= 0 && c < 1 ? (d = s, f = l, h = 0) : c >= 1 && c < 2 ? (d = l, f = s, h = 0) : c >= 2 && c < 3 ? (d = 0, f = s, h = l) : c >= 3 && c < 4 ? (d = 0, f = l, h = s) : c >= 4 && c < 5 ? (d = l, f = 0, h = s) : (d = s, f = 0, h = l), {
    r: Math.round((d + u) * 255),
    g: Math.round((f + u) * 255),
    b: Math.round((h + u) * 255),
    a: a || 1
  };
}
function Ra(n) {
  return hm(n) ? pm(n) : n.startsWith("rgb") ? gm(n) : n.startsWith("hsl") ? mm(n) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function io(n, e) {
  if (n.startsWith("var("))
    return `color-mix(in srgb, ${n}, black ${e * 100}%)`;
  const { r: t, g: r, b: o, a: i } = Ra(n), a = 1 - e, s = (c) => Math.round(c * a);
  return `rgba(${s(t)}, ${s(r)}, ${s(o)}, ${i})`;
}
function jr(n, e) {
  return typeof n.primaryShade == "number" ? n.primaryShade : e === "dark" ? n.primaryShade.dark : n.primaryShade.light;
}
function Ci(n) {
  return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
}
function ym(n) {
  const e = n.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function vm(n) {
  if (n.startsWith("oklch("))
    return (ym(n) || 0) / 100;
  const { r: e, g: t, b: r } = Ra(n), o = e / 255, i = t / 255, a = r / 255, s = Ci(o), c = Ci(i), l = Ci(a);
  return 0.2126 * s + 0.7152 * c + 0.0722 * l;
}
function yr(n, e = 0.179) {
  return n.startsWith("var(") ? !1 : vm(n) > e;
}
function Dn({
  color: n,
  theme: e,
  colorScheme: t
}) {
  if (typeof n != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof n}`
    );
  if (n === "bright")
    return {
      color: n,
      value: t === "dark" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: yr(
        t === "dark" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (n === "dimmed")
    return {
      color: n,
      value: t === "dark" ? e.colors.dark[2] : e.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: yr(
        t === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        e.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (n === "white" || n === "black")
    return {
      color: n,
      value: n === "white" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: yr(
        n === "white" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: `--mantine-color-${n}`
    };
  const [r, o] = n.split("."), i = o ? Number(o) : void 0, a = r in e.colors;
  if (a) {
    const s = i !== void 0 ? e.colors[r][i] : e.colors[r][jr(e, t || "light")];
    return {
      color: r,
      value: s,
      shade: i,
      isThemeColor: a,
      isLight: yr(s, e.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`
    };
  }
  return {
    color: n,
    value: n,
    isThemeColor: a,
    isLight: yr(n, e.luminanceThreshold),
    shade: i,
    variable: void 0
  };
}
function on(n, e) {
  const t = Dn({ color: n || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : n;
}
function ta(n, e) {
  const t = {
    from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
    to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
    deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg || 0
  }, r = on(t.from, e), o = on(t.to, e);
  return `linear-gradient(${t.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Ft(n, e) {
  if (typeof n != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (n.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${n}, transparent ${i}%)`;
  }
  if (n.startsWith("oklch"))
    return n.includes("/") ? n.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : n.replace(")", ` / ${e})`);
  const { r: t, g: r, b: o } = Ra(n);
  return `rgba(${t}, ${r}, ${o}, ${e})`;
}
const $n = Ft, bm = ({
  color: n,
  theme: e,
  variant: t,
  gradient: r,
  autoContrast: o
}) => {
  const i = Dn({ color: n, theme: e }), a = typeof o == "boolean" ? o : e.autoContrast;
  if (t === "filled") {
    const s = a && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return i.isThemeColor ? i.shade === void 0 ? {
      background: `var(--mantine-color-${n}-filled)`,
      hover: `var(--mantine-color-${n}-filled-hover)`,
      color: s,
      border: `${A(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${i.color}-${i.shade})`,
      hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
      color: s,
      border: `${A(1)} solid transparent`
    } : {
      background: n,
      hover: io(n, 0.1),
      color: s,
      border: `${A(1)} solid transparent`
    };
  }
  if (t === "light") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: `var(--mantine-color-${n}-light)`,
          hover: `var(--mantine-color-${n}-light-hover)`,
          color: `var(--mantine-color-${n}-light-color)`,
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
      background: Ft(n, 0.1),
      hover: Ft(n, 0.12),
      color: n,
      border: `${A(1)} solid transparent`
    };
  }
  if (t === "outline")
    return i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${n}-outline-hover)`,
      color: `var(--mantine-color-${n}-outline)`,
      border: `${A(1)} solid var(--mantine-color-${n}-outline)`
    } : {
      background: "transparent",
      hover: Ft(e.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${A(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: Ft(n, 0.05),
      color: n,
      border: `${A(1)} solid ${n}`
    };
  if (t === "subtle") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${n}-light-hover)`,
          color: `var(--mantine-color-${n}-light-color)`,
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
      hover: Ft(n, 0.12),
      color: n,
      border: `${A(1)} solid transparent`
    };
  }
  return t === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${n}-light-color)`,
    border: `${A(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
    border: `${A(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: n,
    border: `${A(1)} solid transparent`
  } : t === "white" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: io(e.white, 0.01),
    color: `var(--mantine-color-${n}-filled)`,
    border: `${A(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: io(e.white, 0.01),
    color: `var(--mantine-color-${i.color}-${i.shade})`,
    border: `${A(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: io(e.white, 0.01),
    color: n,
    border: `${A(1)} solid transparent`
  } : t === "gradient" ? {
    background: ta(r, e),
    hover: ta(r, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${A(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Cm = {
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
}, Cc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Na = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Cm,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: bm,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Cc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Cc,
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
function wc(n) {
  return n === "auto" || n === "dark" || n === "light";
}
function wm({
  key: n = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const r = window.localStorage.getItem(n);
        return wc(r) ? r : t;
      } catch {
        return t;
      }
    },
    set: (t) => {
      try {
        window.localStorage.setItem(n, t);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (t) => {
      e = (r) => {
        r.storageArea === window.localStorage && r.key === n && wc(r.newValue) && t(r.newValue);
      }, window.addEventListener("storage", e);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", e);
    },
    clear: () => {
      window.localStorage.removeItem(n);
    }
  };
}
const Sm = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Sc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function wi(n) {
  return n < 0 || n > 9 ? !1 : parseInt(n.toString(), 10) === n;
}
function Tc(n) {
  if (!(n.primaryColor in n.colors))
    throw new Error(Sm);
  if (typeof n.primaryShade == "object" && (!wi(n.primaryShade.dark) || !wi(n.primaryShade.light)))
    throw new Error(Sc);
  if (typeof n.primaryShade == "number" && !wi(n.primaryShade))
    throw new Error(Sc);
}
function Tm(n, e) {
  var r;
  if (!e)
    return Tc(n), n;
  const t = Ia(n, e);
  return e.fontFamily && !((r = e.headings) != null && r.fontFamily) && (t.headings.fontFamily = e.fontFamily), Tc(t), t;
}
const Pa = Mn(null), Em = () => ln(Pa) || Na;
function Vt() {
  const n = ln(Pa);
  if (!n)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return n;
}
function au({
  theme: n,
  children: e,
  inherit: t = !0
}) {
  const r = Em(), o = Mr(
    () => Tm(t ? r : Na, n),
    [n, r, t]
  );
  return /* @__PURE__ */ y.jsx(Pa.Provider, { value: o, children: e });
}
au.displayName = "@mantine/core/MantineThemeProvider";
function Im() {
  const n = Vt(), e = Aa(), t = Nt(n.breakpoints).reduce((r, o) => {
    const i = n.breakpoints[o].includes("px"), a = Mg(n.breakpoints[o]), s = i ? `${a - 0.1}px` : yc(a - 0.1), c = i ? `${a}px` : yc(a);
    return `${r}@media (max-width: ${s}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${o} {display: none !important;}}`;
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
function Si(n) {
  return Object.entries(n).map(([e, t]) => `${e}: ${t};`).join("");
}
function vr(n, e) {
  return (Array.isArray(n) ? n : [n]).reduce((r, o) => `${o}{${r}}`, e);
}
function _m(n, e) {
  const t = Si(n.variables), r = t ? vr(e, t) : "", o = Si(n.dark), i = Si(n.light), a = o ? vr(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, o) : "", s = i ? vr(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${a}${s}`;
}
function Oa({ color: n, theme: e, autoContrast: t }) {
  return (typeof t == "boolean" ? t : e.autoContrast) && Dn({ color: n || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Ec(n, e) {
  return Oa({
    color: n.colors[n.primaryColor][jr(n, e)],
    theme: n,
    autoContrast: null
  });
}
function ao({
  theme: n,
  color: e,
  colorScheme: t,
  name: r = e,
  withColorValues: o = !0
}) {
  if (!n.colors[e])
    return {};
  if (t === "light") {
    const s = jr(n, "light"), c = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${s === 9 ? 8 : s + 1})`,
      [`--mantine-color-${r}-light`]: $n(n.colors[e][s], 0.1),
      [`--mantine-color-${r}-light-hover`]: $n(n.colors[e][s], 0.12),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-outline-hover`]: $n(n.colors[e][s], 0.05)
    };
    return o ? {
      [`--mantine-color-${r}-0`]: n.colors[e][0],
      [`--mantine-color-${r}-1`]: n.colors[e][1],
      [`--mantine-color-${r}-2`]: n.colors[e][2],
      [`--mantine-color-${r}-3`]: n.colors[e][3],
      [`--mantine-color-${r}-4`]: n.colors[e][4],
      [`--mantine-color-${r}-5`]: n.colors[e][5],
      [`--mantine-color-${r}-6`]: n.colors[e][6],
      [`--mantine-color-${r}-7`]: n.colors[e][7],
      [`--mantine-color-${r}-8`]: n.colors[e][8],
      [`--mantine-color-${r}-9`]: n.colors[e][9],
      ...c
    } : c;
  }
  const i = jr(n, "dark"), a = {
    [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
    [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
    [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${i === 9 ? 8 : i + 1})`,
    [`--mantine-color-${r}-light`]: $n(
      n.colors[e][Math.max(0, i - 2)],
      0.15
    ),
    [`--mantine-color-${r}-light-hover`]: $n(
      n.colors[e][Math.max(0, i - 2)],
      0.2
    ),
    [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(i - 5, 0)})`,
    [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(i - 4, 0)})`,
    [`--mantine-color-${r}-outline-hover`]: $n(
      n.colors[e][Math.max(i - 4, 0)],
      0.05
    )
  };
  return o ? {
    [`--mantine-color-${r}-0`]: n.colors[e][0],
    [`--mantine-color-${r}-1`]: n.colors[e][1],
    [`--mantine-color-${r}-2`]: n.colors[e][2],
    [`--mantine-color-${r}-3`]: n.colors[e][3],
    [`--mantine-color-${r}-4`]: n.colors[e][4],
    [`--mantine-color-${r}-5`]: n.colors[e][5],
    [`--mantine-color-${r}-6`]: n.colors[e][6],
    [`--mantine-color-${r}-7`]: n.colors[e][7],
    [`--mantine-color-${r}-8`]: n.colors[e][8],
    [`--mantine-color-${r}-9`]: n.colors[e][9],
    ...a
  } : a;
}
function km(n) {
  return !!n && typeof n == "object" && "mantine-virtual-color" in n;
}
function Kn(n, e, t) {
  Nt(e).forEach(
    (r) => Object.assign(n, { [`--mantine-${t}-${r}`]: e[r] })
  );
}
const su = (n) => {
  const e = jr(n, "light"), t = n.defaultRadius in n.radius ? n.radius[n.defaultRadius] : A(n.defaultRadius), r = {
    variables: {
      "--mantine-scale": n.scale.toString(),
      "--mantine-cursor-type": n.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": n.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": n.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": n.white,
      "--mantine-color-black": n.black,
      "--mantine-line-height": n.lineHeights.md,
      "--mantine-font-family": n.fontFamily,
      "--mantine-font-family-monospace": n.fontFamilyMonospace,
      "--mantine-font-family-headings": n.headings.fontFamily,
      "--mantine-heading-font-weight": n.headings.fontWeight,
      "--mantine-heading-text-wrap": n.headings.textWrap,
      "--mantine-radius-default": t,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${n.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${n.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${n.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${n.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${n.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": Ec(n, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": n.black,
      "--mantine-color-body": n.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${n.primaryColor}-${e})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": Ec(n, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${n.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  Kn(r.variables, n.breakpoints, "breakpoint"), Kn(r.variables, n.spacing, "spacing"), Kn(r.variables, n.fontSizes, "font-size"), Kn(r.variables, n.lineHeights, "line-height"), Kn(r.variables, n.shadows, "shadow"), Kn(r.variables, n.radius, "radius"), n.colors[n.primaryColor].forEach((i, a) => {
    r.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${n.primaryColor}-${a})`;
  }), Nt(n.colors).forEach((i) => {
    const a = n.colors[i];
    if (km(a)) {
      Object.assign(
        r.light,
        ao({
          theme: n,
          name: a.name,
          color: a.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        r.dark,
        ao({
          theme: n,
          name: a.name,
          color: a.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    a.forEach((s, c) => {
      r.variables[`--mantine-color-${i}-${c}`] = s;
    }), Object.assign(
      r.light,
      ao({
        theme: n,
        color: i,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      r.dark,
      ao({
        theme: n,
        color: i,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = n.headings.sizes;
  return Nt(o).forEach((i) => {
    r.variables[`--mantine-${i}-font-size`] = o[i].fontSize, r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, r.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || n.headings.fontWeight;
  }), r;
};
function Am({ theme: n, generator: e }) {
  const t = su(n), r = e == null ? void 0 : e(n);
  return r ? Ia(t, r) : t;
}
const Ti = su(Na);
function Rm(n) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return Nt(n.variables).forEach((t) => {
    Ti.variables[t] !== n.variables[t] && (e.variables[t] = n.variables[t]);
  }), Nt(n.light).forEach((t) => {
    Ti.light[t] !== n.light[t] && (e.light[t] = n.light[t]);
  }), Nt(n.dark).forEach((t) => {
    Ti.dark[t] !== n.dark[t] && (e.dark[t] = n.dark[t]);
  }), e;
}
function Nm(n) {
  return `
  ${n}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${n}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function cu({
  cssVariablesSelector: n,
  deduplicateCssVariables: e
}) {
  const t = Vt(), r = Aa(), o = sm(), i = Am({ theme: t, generator: o }), a = n === ":root" && e, s = a ? Rm(i) : i, c = _m(s, n);
  return c ? /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: {
        __html: `${c}${a ? "" : Nm(n)}`
      }
    }
  ) : null;
}
cu.displayName = "@mantine/CssVariables";
function Pm() {
  const n = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || n(...e);
  };
}
function qn(n, e) {
  var r;
  const t = n !== "auto" ? n : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = e()) == null || r.setAttribute("data-mantine-color-scheme", t);
}
function Om({
  manager: n,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: r
}) {
  const o = ue(), [i, a] = X(() => n.get(e)), s = r || i, c = me(
    (u) => {
      r || (qn(u, t), a(u), n.set(u));
    },
    [n.set, s, r]
  ), l = me(() => {
    a(e), qn(e, t), n.clear();
  }, [n.clear, e]);
  return Y(() => (n.subscribe(c), n.unsubscribe), [n.subscribe, n.unsubscribe]), Gr(() => {
    qn(n.get(e), t);
  }, []), Y(() => {
    var d;
    if (r)
      return qn(r, t), () => {
      };
    r === void 0 && qn(i, t), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && qn(f.matches ? "dark" : "light", t);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: s, setColorScheme: c, clearColorScheme: l };
}
function Mm({
  respectReducedMotion: n,
  getRootElement: e
}) {
  Gr(() => {
    var t;
    n && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [n]);
}
Pm();
function lu({
  theme: n,
  children: e,
  getStyleNonce: t,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: a = !0,
  cssVariablesSelector: s = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = wm(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: h,
  stylesTransform: p
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: b } = Om({
    defaultColorScheme: u,
    forceColorScheme: h,
    manager: l,
    getRootElement: d
  });
  return Mm({
    respectReducedMotion: (n == null ? void 0 : n.respectReducedMotion) || !1,
    getRootElement: d
  }), /* @__PURE__ */ y.jsx(
    iu.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: m,
        clearColorScheme: b,
        getRootElement: d,
        classNamesPrefix: c,
        getStyleNonce: t,
        cssVariablesResolver: f,
        cssVariablesSelector: s,
        withStaticClasses: r,
        stylesTransform: p
      },
      children: /* @__PURE__ */ y.jsxs(au, { theme: n, children: [
        a && /* @__PURE__ */ y.jsx(
          cu,
          {
            cssVariablesSelector: s,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ y.jsx(Im, {}),
        e
      ] })
    }
  );
}
lu.displayName = "@mantine/core/MantineProvider";
function uu({
  classNames: n,
  styles: e,
  props: t,
  stylesCtx: r
}) {
  const o = Vt();
  return {
    resolvedClassNames: Qo({
      theme: o,
      classNames: n,
      props: t,
      stylesCtx: r || void 0
    }),
    resolvedStyles: No({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: r || void 0
    })
  };
}
const xm = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Dm({ theme: n, options: e, unstyled: t }) {
  return qt(
    (e == null ? void 0 : e.focusable) && !t && (n.focusClassName || xm[n.focusRing]),
    (e == null ? void 0 : e.active) && !t && n.activeClassName
  );
}
function Lm({
  selector: n,
  stylesCtx: e,
  options: t,
  props: r,
  theme: o
}) {
  return Qo({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || r,
    stylesCtx: e
  })[n];
}
function Ic({
  selector: n,
  stylesCtx: e,
  theme: t,
  classNames: r,
  props: o
}) {
  return Qo({ theme: t, classNames: r, props: o, stylesCtx: e })[n];
}
function jm({ rootSelector: n, selector: e, className: t }) {
  return n === e ? t : void 0;
}
function Fm({ selector: n, classes: e, unstyled: t }) {
  return t ? void 0 : e[n];
}
function Um({
  themeName: n,
  classNamesPrefix: e,
  selector: t,
  withStaticClass: r
}) {
  return r === !1 ? [] : n.map((o) => `${e}-${o}-${t}`);
}
function Hm({
  themeName: n,
  theme: e,
  selector: t,
  props: r,
  stylesCtx: o
}) {
  return n.map(
    (i) => {
      var a, s;
      return (s = Qo({
        theme: e,
        classNames: (a = e.components[i]) == null ? void 0 : a.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : s[t];
    }
  );
}
function Bm({
  options: n,
  classes: e,
  selector: t,
  unstyled: r
}) {
  return n != null && n.variant && !r ? e[`${t}--${n.variant}`] : void 0;
}
function zm({
  theme: n,
  options: e,
  themeName: t,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: a,
  unstyled: s,
  className: c,
  rootSelector: l,
  props: u,
  stylesCtx: d,
  withStaticClasses: f,
  headless: h,
  transformedStyles: p
}) {
  return qt(
    Dm({ theme: n, options: e, unstyled: s || h }),
    Hm({ theme: n, themeName: t, selector: r, props: u, stylesCtx: d }),
    Bm({ options: e, classes: a, selector: r, unstyled: s }),
    Ic({ selector: r, stylesCtx: d, theme: n, classNames: i, props: u }),
    Ic({ selector: r, stylesCtx: d, theme: n, classNames: p, props: u }),
    Lm({ selector: r, stylesCtx: d, options: e, props: u, theme: n }),
    jm({ rootSelector: l, selector: r, className: c }),
    Fm({ selector: r, classes: a, unstyled: s || h }),
    f && !h && Um({
      themeName: t,
      classNamesPrefix: o,
      selector: r,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function $m({
  theme: n,
  themeName: e,
  props: t,
  stylesCtx: r,
  selector: o
}) {
  return e.map(
    (i) => {
      var a;
      return No({
        theme: n,
        styles: (a = n.components[i]) == null ? void 0 : a.styles,
        props: t,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, a) => ({ ...i, ...a }), {});
}
function na({ style: n, theme: e }) {
  return Array.isArray(n) ? [...n].reduce(
    (t, r) => ({ ...t, ...na({ style: r, theme: e }) }),
    {}
  ) : typeof n == "function" ? n(e) : n ?? {};
}
function Km(n) {
  return n.reduce((e, t) => (t && Object.keys(t).forEach((r) => {
    e[r] = { ...e[r], ..._a(t[r]) };
  }), e), {});
}
function qm({
  vars: n,
  varsResolver: e,
  theme: t,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: a,
  headless: s
}) {
  var c;
  return (c = Km([
    s ? {} : e == null ? void 0 : e(t, r, o),
    ...a.map((l) => {
      var u, d, f;
      return (f = (d = (u = t.components) == null ? void 0 : u[l]) == null ? void 0 : d.vars) == null ? void 0 : f.call(d, t, r, o);
    }),
    n == null ? void 0 : n(t, r, o)
  ])) == null ? void 0 : c[i];
}
function Vm({
  theme: n,
  themeName: e,
  selector: t,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: a,
  styles: s,
  style: c,
  vars: l,
  varsResolver: u,
  headless: d,
  withStylesTransform: f
}) {
  return {
    ...!f && $m({ theme: n, themeName: e, props: o, stylesCtx: i, selector: t }),
    ...!f && No({ theme: n, styles: s, props: o, stylesCtx: i })[t],
    ...!f && No({ theme: n, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[t],
    ...qm({ theme: n, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: t, themeName: e, headless: d }),
    ...a === t ? na({ style: c, theme: n }) : null,
    ...na({ style: r == null ? void 0 : r.style, theme: n })
  };
}
function Gm({ props: n, stylesCtx: e, themeName: t }) {
  var a;
  const r = Vt(), o = (a = fm()) == null ? void 0 : a();
  return {
    getTransformedStyles: (s) => o ? [
      ...s.map(
        (l) => o(l, { props: n, theme: r, ctx: e })
      ),
      ...t.map(
        (l) => {
          var u;
          return o((u = r.components[l]) == null ? void 0 : u.styles, { props: n, theme: r, ctx: e });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!o
  };
}
function pe({
  name: n,
  classes: e,
  props: t,
  stylesCtx: r,
  className: o,
  style: i,
  rootSelector: a = "root",
  unstyled: s,
  classNames: c,
  styles: l,
  vars: u,
  varsResolver: d
}) {
  const f = Vt(), h = cm(), p = lm(), g = um(), m = (Array.isArray(n) ? n : [n]).filter((v) => v), { withStylesTransform: b, getTransformedStyles: C } = Gm({
    props: t,
    stylesCtx: r,
    themeName: m
  });
  return (v, w) => ({
    className: zm({
      theme: f,
      options: w,
      themeName: m,
      selector: v,
      classNamesPrefix: h,
      classNames: c,
      classes: e,
      unstyled: s,
      className: o,
      rootSelector: a,
      props: t,
      stylesCtx: r,
      withStaticClasses: p,
      headless: g,
      transformedStyles: C([w == null ? void 0 : w.styles, l])
    }),
    style: Vm({
      theme: f,
      themeName: m,
      selector: v,
      options: w,
      props: t,
      stylesCtx: r,
      rootSelector: a,
      styles: l,
      style: i,
      vars: u,
      varsResolver: d,
      headless: g,
      withStylesTransform: b
    })
  });
}
function du(n, e) {
  return typeof n == "boolean" ? n : e.autoContrast;
}
function q(n, e, t) {
  var a;
  const r = Vt(), o = (a = r.components[n]) == null ? void 0 : a.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...e, ...i, ..._a(t) };
}
function Ei(n) {
  return Nt(n).reduce(
    (e, t) => n[t] !== void 0 ? `${e}${Pg(t)}:${n[t]};` : e,
    ""
  ).trim();
}
function Wm({ selector: n, styles: e, media: t, container: r }) {
  const o = e ? Ei(e) : "", i = Array.isArray(t) ? t.map((s) => `@media${s.query}{${n}{${Ei(s.styles)}}}`) : [], a = Array.isArray(r) ? r.map(
    (s) => `@container ${s.query}{${n}{${Ei(s.styles)}}}`
  ) : [];
  return `${o ? `${n}{${o}}` : ""}${i.join("")}${a.join("")}`.trim();
}
function Ym(n) {
  const e = Aa();
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: Wm(n) }
    }
  );
}
function Jo(n) {
  const {
    m: e,
    mx: t,
    my: r,
    mt: o,
    mb: i,
    ml: a,
    mr: s,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: f,
    pt: h,
    pb: p,
    pl: g,
    pr: m,
    pe: b,
    ps: C,
    bd: v,
    bg: w,
    c: S,
    opacity: E,
    ff: k,
    fz: I,
    fw: x,
    lts: j,
    ta: V,
    lh: Z,
    fs: ae,
    tt: D,
    td: G,
    w: M,
    miw: F,
    maw: H,
    h: J,
    mih: ce,
    mah: Te,
    bgsz: Ce,
    bgp: Ve,
    bgr: yt,
    bga: Ne,
    pos: hn,
    top: Jt,
    left: pn,
    bottom: gn,
    right: mn,
    inset: hr,
    display: pr,
    flex: xt,
    hiddenFrom: Ee,
    visibleFrom: Dt,
    lightHidden: Fn,
    darkHidden: ze,
    sx: yn,
    ...Un
  } = n;
  return { styleProps: _a({
    m: e,
    mx: t,
    my: r,
    mt: o,
    mb: i,
    ml: a,
    mr: s,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: f,
    pt: h,
    pb: p,
    pl: g,
    pr: m,
    pe: b,
    ps: C,
    bd: v,
    bg: w,
    c: S,
    opacity: E,
    ff: k,
    fz: I,
    fw: x,
    lts: j,
    ta: V,
    lh: Z,
    fs: ae,
    tt: D,
    td: G,
    w: M,
    miw: F,
    maw: H,
    h: J,
    mih: ce,
    mah: Te,
    bgsz: Ce,
    bgp: Ve,
    bgr: yt,
    bga: Ne,
    pos: hn,
    top: Jt,
    left: pn,
    bottom: gn,
    right: mn,
    inset: hr,
    display: pr,
    flex: xt,
    hiddenFrom: Ee,
    visibleFrom: Dt,
    lightHidden: Fn,
    darkHidden: ze,
    sx: yn
  }), rest: Un };
}
const Qm = {
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
function Ma(n, e) {
  const t = Dn({ color: n, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function Jm(n, e) {
  const t = Dn({ color: n, theme: e });
  return t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : Ma(n, e);
}
function Xm(n, e) {
  if (typeof n == "number")
    return A(n);
  if (typeof n == "string") {
    const [t, r, ...o] = n.split(" ").filter((a) => a.trim() !== "");
    let i = `${A(t)}`;
    return r && (i += ` ${r}`), o.length > 0 && (i += ` ${Ma(o.join(" "), e)}`), i.trim();
  }
  return n;
}
const _c = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Zm(n) {
  return typeof n == "string" && n in _c ? _c[n] : n;
}
const ey = ["h1", "h2", "h3", "h4", "h5", "h6"];
function ty(n, e) {
  return typeof n == "string" && n in e.fontSizes ? `var(--mantine-font-size-${n})` : typeof n == "string" && ey.includes(n) ? `var(--mantine-${n}-font-size)` : typeof n == "number" || typeof n == "string" ? A(n) : n;
}
function ny(n) {
  return n;
}
const ry = ["h1", "h2", "h3", "h4", "h5", "h6"];
function oy(n, e) {
  return typeof n == "string" && n in e.lineHeights ? `var(--mantine-line-height-${n})` : typeof n == "string" && ry.includes(n) ? `var(--mantine-${n}-line-height)` : n;
}
function iy(n) {
  return typeof n == "number" ? A(n) : n;
}
function ay(n, e) {
  if (typeof n == "number")
    return A(n);
  if (typeof n == "string") {
    const t = n.replace("-", "");
    if (!(t in e.spacing))
      return A(n);
    const r = `--mantine-spacing-${t}`;
    return n.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return n;
}
const Ii = {
  color: Ma,
  textColor: Jm,
  fontSize: ty,
  spacing: ay,
  identity: ny,
  size: iy,
  lineHeight: oy,
  fontFamily: Zm,
  border: Xm
};
function kc(n) {
  return n.replace("(min-width: ", "").replace("em)", "");
}
function sy({
  media: n,
  ...e
}) {
  const r = Object.keys(n).sort((o, i) => Number(kc(o)) - Number(kc(i))).map((o) => ({ query: o, styles: n[o] }));
  return { ...e, media: r };
}
function cy(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const e = Object.keys(n);
  return !(e.length === 1 && e[0] === "base");
}
function ly(n) {
  return typeof n == "object" && n !== null ? "base" in n ? n.base : void 0 : n;
}
function uy(n) {
  return typeof n == "object" && n !== null ? Nt(n).filter((e) => e !== "base") : [];
}
function dy(n, e) {
  return typeof n == "object" && n !== null && e in n ? n[e] : n;
}
function fy({
  styleProps: n,
  data: e,
  theme: t
}) {
  return sy(
    Nt(n).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return r;
        const i = e[o], a = Array.isArray(i.property) ? i.property : [i.property], s = ly(n[o]);
        if (!cy(n[o]))
          return a.forEach((l) => {
            r.inlineStyles[l] = Ii[i.type](s, t);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = uy(n[o]);
        return a.forEach((l) => {
          s && (r.styles[l] = Ii[i.type](s, t)), c.forEach((u) => {
            const d = `(min-width: ${t.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: Ii[i.type](
                dy(n[o], u),
                t
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
function hy() {
  return `__m__-${wl().replace(/:/g, "")}`;
}
function fu(n, e) {
  return Array.isArray(n) ? [...n].reduce(
    (t, r) => ({ ...t, ...fu(r, e) }),
    {}
  ) : typeof n == "function" ? n(e) : n ?? {};
}
function hu(n) {
  return n.startsWith("data-") ? n : `data-${n}`;
}
function py(n) {
  return Object.keys(n).reduce((e, t) => {
    const r = n[t];
    return r === void 0 || r === "" || r === !1 || r === null || (e[hu(t)] = n[t]), e;
  }, {});
}
function pu(n) {
  return n ? typeof n == "string" ? { [hu(n)]: !0 } : Array.isArray(n) ? [...n].reduce(
    (e, t) => ({ ...e, ...pu(t) }),
    {}
  ) : py(n) : null;
}
function ra(n, e) {
  return Array.isArray(n) ? [...n].reduce(
    (t, r) => ({ ...t, ...ra(r, e) }),
    {}
  ) : typeof n == "function" ? n(e) : n ?? {};
}
function gy({
  theme: n,
  style: e,
  vars: t,
  styleProps: r
}) {
  const o = ra(e, n), i = ra(t, n);
  return { ...o, ...i, ...r };
}
const gu = ye(
  ({
    component: n,
    style: e,
    __vars: t,
    className: r,
    variant: o,
    mod: i,
    size: a,
    hiddenFrom: s,
    visibleFrom: c,
    lightHidden: l,
    darkHidden: u,
    renderRoot: d,
    __size: f,
    ...h
  }, p) => {
    var I;
    const g = Vt(), m = n || "div", { styleProps: b, rest: C } = Jo(h), v = dm(), w = (I = v == null ? void 0 : v()) == null ? void 0 : I(b.sx), S = hy(), E = fy({
      styleProps: b,
      theme: g,
      data: Qm
    }), k = {
      ref: p,
      style: gy({
        theme: g,
        style: e,
        vars: t,
        styleProps: E.inlineStyles
      }),
      className: qt(r, w, {
        [S]: E.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${s}`]: s,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Wl(a) ? void 0 : a || void 0,
      size: f,
      ...pu(i),
      ...C
    };
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      E.hasResponsiveStyles && /* @__PURE__ */ y.jsx(
        Ym,
        {
          selector: `.${S}`,
          styles: E.styles,
          media: E.media
        }
      ),
      typeof d == "function" ? d(k) : /* @__PURE__ */ y.jsx(m, { ...k })
    ] });
  }
);
gu.displayName = "@mantine/core/Box";
const Q = gu;
function mu(n) {
  return n;
}
function se(n) {
  const e = ye(n);
  return e.extend = mu, e.withProps = (t) => {
    const r = ye((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return r.extend = e.extend, r.displayName = `WithProps(${e.displayName})`, r;
  }, e;
}
function Gt(n) {
  const e = ye(n);
  return e.withProps = (t) => {
    const r = ye((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return r.extend = e.extend, r.displayName = `WithProps(${e.displayName})`, r;
  }, e.extend = mu, e;
}
const my = Mn({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function xa() {
  return ln(my);
}
function yy(n) {
  if (!n || typeof n == "string")
    return 0;
  const e = n / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function _i(n) {
  return n != null && n.current ? n.current.scrollHeight : "auto";
}
const br = typeof window < "u" && window.requestAnimationFrame;
function vy({
  transitionDuration: n,
  transitionTimingFunction: e = "ease",
  onTransitionEnd: t = () => {
  },
  opened: r
}) {
  const o = ue(null), i = 0, a = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [s, c] = X(r ? {} : a), l = (p) => {
    uf(() => c(p));
  }, u = (p) => {
    l((g) => ({ ...g, ...p }));
  };
  function d(p) {
    const g = n || yy(p);
    return {
      transition: `height ${g}ms ${e}, opacity ${g}ms ${e}`
    };
  }
  Rn(() => {
    typeof br == "function" && br(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), br(() => {
        const p = _i(o);
        u({ ...d(p), height: p });
      });
    } : () => {
      const p = _i(o);
      u({ ...d(p), willChange: "height", height: p }), br(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (r) {
        const g = _i(o);
        g === s.height ? l({}) : u({ height: g }), t();
      } else
        s.height === i && (l(a), t());
  };
  function h({ style: p = {}, refKey: g = "ref", ...m } = {}) {
    const b = m[g];
    return {
      "aria-hidden": !r,
      ...m,
      [g]: nu(o, b),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...p, ...s }
    };
  }
  return h;
}
const by = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, yu = se((n, e) => {
  const {
    children: t,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: a,
    onTransitionEnd: s,
    animateOpacity: c,
    ...l
  } = q("Collapse", by, n), u = Vt(), d = ru(), h = (u.respectReducedMotion ? d : !1) ? 0 : o, p = vy({
    opened: r,
    transitionDuration: h,
    transitionTimingFunction: i,
    onTransitionEnd: s
  });
  return h === 0 ? r ? /* @__PURE__ */ y.jsx(Q, { ...l, children: t }) : null : /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p({
        style: {
          opacity: r || !c ? 1 : 0,
          transition: c ? `opacity ${h}ms ${i}` : "none",
          ...fu(a, u)
        },
        ref: e,
        ...l
      }),
      children: t
    }
  );
});
yu.displayName = "@mantine/core/Collapse";
const [Cy, pt] = lr(
  "ScrollArea.Root component was not found in tree"
);
function or(n, e) {
  const t = Sn(e);
  Gr(() => {
    let r = 0;
    if (n) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(t);
      });
      return o.observe(n), () => {
        window.cancelAnimationFrame(r), o.unobserve(n);
      };
    }
  }, [n, t]);
}
const wy = ye((n, e) => {
  const { style: t, ...r } = n, o = pt(), [i, a] = X(0), [s, c] = X(0), l = !!(i && s);
  return or(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), or(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), a(u);
  }), l ? /* @__PURE__ */ y.jsx("div", { ...r, ref: e, style: { ...t, width: i, height: s } }) : null;
}), Sy = ye((n, e) => {
  const t = pt(), r = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && r ? /* @__PURE__ */ y.jsx(wy, { ...n, ref: e }) : null;
}), Ty = {
  scrollHideDelay: 1e3,
  type: "hover"
}, vu = ye((n, e) => {
  const t = q("ScrollAreaRoot", Ty, n), { type: r, scrollHideDelay: o, scrollbars: i, ...a } = t, [s, c] = X(null), [l, u] = X(null), [d, f] = X(null), [h, p] = X(null), [g, m] = X(null), [b, C] = X(0), [v, w] = X(0), [S, E] = X(!1), [k, I] = X(!1), x = ht(e, (j) => c(j));
  return /* @__PURE__ */ y.jsx(
    Cy,
    {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: h,
        onScrollbarXChange: p,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: E,
        scrollbarY: g,
        onScrollbarYChange: m,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: I,
        onCornerWidthChange: C,
        onCornerHeightChange: w
      },
      children: /* @__PURE__ */ y.jsx(
        Q,
        {
          ...a,
          ref: x,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${b}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${v}px`
          }
        }
      )
    }
  );
});
vu.displayName = "@mantine/core/ScrollAreaRoot";
function bu(n, e) {
  const t = n / e;
  return Number.isNaN(t) ? 0 : t;
}
function Xo(n) {
  const e = bu(n.viewport, n.content), t = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, r = (n.scrollbar.size - t) * e;
  return Math.max(r, 18);
}
function Cu(n, e) {
  return (t) => {
    if (n[0] === n[1] || e[0] === e[1])
      return e[0];
    const r = (e[1] - e[0]) / (n[1] - n[0]);
    return e[0] + r * (t - n[0]);
  };
}
function Ey(n, [e, t]) {
  return Math.min(t, Math.max(e, n));
}
function Ac(n, e, t = "ltr") {
  const r = Xo(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, a = e.content - e.viewport, s = i - r, c = t === "ltr" ? [0, a] : [a * -1, 0], l = Ey(n, c);
  return Cu([0, a], [0, s])(l);
}
function Iy(n, e, t, r = "ltr") {
  const o = Xo(t), i = o / 2, a = e || i, s = o - a, c = t.scrollbar.paddingStart + a, l = t.scrollbar.size - t.scrollbar.paddingEnd - s, u = t.content - t.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return Cu([c, l], d)(n);
}
function wu(n, e) {
  return n > 0 && n < e;
}
function Po(n) {
  return n ? parseInt(n, 10) : 0;
}
function _n(n, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (r) => {
    n == null || n(r), (t === !1 || !r.defaultPrevented) && (e == null || e(r));
  };
}
const [_y, Su] = lr(
  "ScrollAreaScrollbar was not found in tree"
), Tu = ye((n, e) => {
  const {
    sizes: t,
    hasThumb: r,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: s,
    onDragScroll: c,
    onWheelScroll: l,
    onResize: u,
    ...d
  } = n, f = pt(), [h, p] = X(null), g = ht(e, (I) => p(I)), m = ue(null), b = ue(""), { viewport: C } = f, v = t.content - t.viewport, w = Sn(l), S = Sn(s), E = Yo(u, 10), k = (I) => {
    if (m.current) {
      const x = I.clientX - m.current.left, j = I.clientY - m.current.top;
      c({ x, y: j });
    }
  };
  return Y(() => {
    const I = (x) => {
      const j = x.target;
      (h == null ? void 0 : h.contains(j)) && w(x, v);
    };
    return document.addEventListener("wheel", I, { passive: !1 }), () => document.removeEventListener("wheel", I, { passive: !1 });
  }, [C, h, v, w]), Y(S, [t, S]), or(h, E), or(f.content, E), /* @__PURE__ */ y.jsx(
    _y,
    {
      value: {
        scrollbar: h,
        hasThumb: r,
        onThumbChange: Sn(o),
        onThumbPointerUp: Sn(i),
        onThumbPositionChange: S,
        onThumbPointerDown: Sn(a)
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...d,
          ref: g,
          style: { position: "absolute", ...d.style },
          onPointerDown: _n(n.onPointerDown, (I) => {
            I.preventDefault();
            const x = 0;
            I.button === x && (I.target.setPointerCapture(I.pointerId), m.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", k(I));
          }),
          onPointerMove: _n(n.onPointerMove, k),
          onPointerUp: _n(n.onPointerUp, (I) => {
            I.preventDefault();
            const x = I.target;
            x.hasPointerCapture(I.pointerId) && x.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = b.current, document.body.style.pointerEvents = "auto", m.current = null;
          })
        }
      )
    }
  );
}), ky = ye(
  (n, e) => {
    const { sizes: t, onSizesChange: r, style: o, ...i } = n, a = pt(), [s, c] = X(), l = ue(null), u = ht(e, l, a.onScrollbarXChange);
    return Y(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ y.jsx(
      Tu,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Xo(t)}px`
        },
        onThumbPointerDown: (d) => n.onThumbPointerDown(d.x),
        onDragScroll: (d) => n.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (a.viewport) {
            const h = a.viewport.scrollLeft + d.deltaX;
            n.onWheelScroll(h), wu(h, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && r({
            content: a.viewport.scrollWidth,
            viewport: a.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: Po(s.paddingLeft),
              paddingEnd: Po(s.paddingRight)
            }
          });
        }
      }
    );
  }
), Ay = ye(
  (n, e) => {
    const { sizes: t, onSizesChange: r, style: o, ...i } = n, a = pt(), [s, c] = X(), l = ue(null), u = ht(e, l, a.onScrollbarYChange);
    return Y(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ y.jsx(
      Tu,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Xo(t)}px`,
          ...o
        },
        onThumbPointerDown: (d) => n.onThumbPointerDown(d.y),
        onDragScroll: (d) => n.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (a.viewport) {
            const h = a.viewport.scrollTop + d.deltaY;
            n.onWheelScroll(h), wu(h, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && r({
            content: a.viewport.scrollHeight,
            viewport: a.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: Po(s.paddingTop),
              paddingEnd: Po(s.paddingBottom)
            }
          });
        }
      }
    );
  }
), Da = ye((n, e) => {
  const { orientation: t = "vertical", ...r } = n, { dir: o } = xa(), i = pt(), a = ue(null), s = ue(0), [c, l] = X({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = bu(c.viewport, c.content), d = {
    ...r,
    sizes: c,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (h) => {
      a.current = h;
    },
    onThumbPointerUp: () => {
      s.current = 0;
    },
    onThumbPointerDown: (h) => {
      s.current = h;
    }
  }, f = (h, p) => Iy(h, s.current, c, p);
  return t === "horizontal" ? /* @__PURE__ */ y.jsx(
    ky,
    {
      ...d,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const h = i.viewport.scrollLeft, p = Ac(h, c, o);
          a.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        i.viewport && (i.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        i.viewport && (i.viewport.scrollLeft = f(h, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ y.jsx(
    Ay,
    {
      ...d,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const h = i.viewport.scrollTop, p = Ac(h, c);
          c.scrollbar.size === 0 ? a.current.style.opacity = "0" : a.current.style.opacity = "1", a.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        i.viewport && (i.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        i.viewport && (i.viewport.scrollTop = f(h));
      }
    }
  ) : null;
}), Eu = ye(
  (n, e) => {
    const t = pt(), { forceMount: r, ...o } = n, [i, a] = X(!1), s = n.orientation === "horizontal", c = Yo(() => {
      if (t.viewport) {
        const l = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
        a(s ? l : u);
      }
    }, 10);
    return or(t.viewport, c), or(t.content, c), r || i ? /* @__PURE__ */ y.jsx(
      Da,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), Ry = ye(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = pt(), [i, a] = X(!1);
    return Y(() => {
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
      Eu,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: e
      }
    ) : null;
  }
), Ny = ye(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = pt(), i = n.orientation === "horizontal", [a, s] = X("hidden"), c = Yo(() => s("idle"), 100);
    return Y(() => {
      if (a === "idle") {
        const l = window.setTimeout(() => s("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [a, o.scrollHideDelay]), Y(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let d = l[u];
        const f = () => {
          const h = l[u];
          d !== h && (s("scrolling"), c()), d = h;
        };
        return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
      }
    }, [o.viewport, i, c]), t || a !== "hidden" ? /* @__PURE__ */ y.jsx(
      Da,
      {
        "data-state": a === "hidden" ? "hidden" : "visible",
        ...r,
        ref: e,
        onPointerEnter: _n(n.onPointerEnter, () => s("interacting")),
        onPointerLeave: _n(n.onPointerLeave, () => s("idle"))
      }
    ) : null;
  }
), Rc = ye(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = pt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = n.orientation === "horizontal";
    return Y(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ y.jsx(Ry, { ...r, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ y.jsx(Ny, { ...r, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ y.jsx(Eu, { ...r, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ y.jsx(Da, { ...r, ref: e }) : null;
  }
);
function Py(n, e = () => {
}) {
  let t = { left: n.scrollLeft, top: n.scrollTop }, r = 0;
  return function o() {
    const i = { left: n.scrollLeft, top: n.scrollTop }, a = t.left !== i.left, s = t.top !== i.top;
    (a || s) && e(), t = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Oy = ye((n, e) => {
  const { style: t, ...r } = n, o = pt(), i = Su(), { onThumbPositionChange: a } = i, s = ht(e, (u) => i.onThumbChange(u)), c = ue(), l = Yo(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return Y(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = Py(u, a);
          c.current = f, a();
        }
      };
      return a(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, l, a]), /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...r,
      ref: s,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...t
      },
      onPointerDownCapture: _n(n.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), h = u.clientX - f.left, p = u.clientY - f.top;
        i.onThumbPointerDown({ x: h, y: p });
      }),
      onPointerUp: _n(n.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Nc = ye(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = Su();
    return t || o.hasThumb ? /* @__PURE__ */ y.jsx(Oy, { ref: e, ...r }) : null;
  }
), Iu = ye(
  ({ children: n, style: e, ...t }, r) => {
    const o = pt(), i = ht(r, o.onViewportChange);
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
        children: /* @__PURE__ */ y.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange, children: n })
      }
    );
  }
);
Iu.displayName = "@mantine/core/ScrollAreaViewport";
var La = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const _u = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, My = (n, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": A(e)
  }
}), Wr = se((n, e) => {
  const t = q("ScrollArea", _u, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    scrollbarSize: c,
    vars: l,
    type: u,
    scrollHideDelay: d,
    viewportProps: f,
    viewportRef: h,
    onScrollPositionChange: p,
    children: g,
    offsetScrollbars: m,
    scrollbars: b,
    ...C
  } = t, [v, w] = X(!1), S = pe({
    name: "ScrollArea",
    props: t,
    classes: La,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: My
  });
  return /* @__PURE__ */ y.jsxs(
    vu,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: e,
      scrollbars: b,
      ...S("root"),
      ...C,
      children: [
        /* @__PURE__ */ y.jsx(
          Iu,
          {
            ...f,
            ...S("viewport", { style: f == null ? void 0 : f.style }),
            ref: h,
            "data-offset-scrollbars": m === !0 ? "xy" : m || void 0,
            "data-scrollbars": b || void 0,
            onScroll: (E) => {
              var k;
              (k = f == null ? void 0 : f.onScroll) == null || k.call(f, E), p == null || p({ x: E.currentTarget.scrollLeft, y: E.currentTarget.scrollTop });
            },
            children: g
          }
        ),
        (b === "xy" || b === "x") && /* @__PURE__ */ y.jsx(
          Rc,
          {
            ...S("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Nc, { ...S("thumb") })
          }
        ),
        (b === "xy" || b === "y") && /* @__PURE__ */ y.jsx(
          Rc,
          {
            ...S("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Nc, { ...S("thumb") })
          }
        ),
        /* @__PURE__ */ y.jsx(
          Sy,
          {
            ...S("corner"),
            "data-hovered": v || void 0,
            "data-hidden": u === "never" || void 0
          }
        )
      ]
    }
  );
});
Wr.displayName = "@mantine/core/ScrollArea";
const ja = se((n, e) => {
  const {
    children: t,
    classNames: r,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: a,
    type: s,
    dir: c,
    offsetScrollbars: l,
    viewportRef: u,
    onScrollPositionChange: d,
    unstyled: f,
    variant: h,
    viewportProps: p,
    scrollbars: g,
    style: m,
    vars: b,
    ...C
  } = q("ScrollAreaAutosize", _u, n);
  return /* @__PURE__ */ y.jsx(Q, { ...C, ref: e, style: [{ display: "flex", overflow: "auto" }, m], children: /* @__PURE__ */ y.jsx(Q, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ y.jsx(
    Wr,
    {
      classNames: r,
      styles: o,
      scrollHideDelay: a,
      scrollbarSize: i,
      type: s,
      dir: c,
      offsetScrollbars: l,
      viewportRef: u,
      onScrollPositionChange: d,
      unstyled: f,
      variant: h,
      viewportProps: p,
      vars: b,
      scrollbars: g,
      children: t
    }
  ) }) });
});
Wr.classes = La;
ja.displayName = "@mantine/core/ScrollAreaAutosize";
ja.classes = La;
Wr.Autosize = ja;
var ku = { root: "m_87cf2631" };
const xy = {
  __staticSelector: "UnstyledButton"
}, Ln = Gt(
  (n, e) => {
    const t = q("UnstyledButton", xy, n), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: a,
      classNames: s,
      styles: c,
      style: l,
      ...u
    } = t, d = pe({
      name: i,
      props: t,
      classes: ku,
      className: r,
      style: l,
      classNames: s,
      styles: c,
      unstyled: a
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
Ln.classes = ku;
Ln.displayName = "@mantine/core/UnstyledButton";
var Au = { root: "m_515a97f8" };
const Dy = {}, Fa = se((n, e) => {
  const t = q("VisuallyHidden", Dy, n), { classNames: r, className: o, style: i, styles: a, unstyled: s, vars: c, ...l } = t, u = pe({
    name: "VisuallyHidden",
    classes: Au,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s
  });
  return /* @__PURE__ */ y.jsx(Q, { component: "span", ref: e, ...u("root"), ...l });
});
Fa.classes = Au;
Fa.displayName = "@mantine/core/VisuallyHidden";
var Ru = { root: "m_1b7284a3" };
const Ly = {}, jy = (n, { radius: e, shadow: t }) => ({
  root: {
    "--paper-radius": e === void 0 ? void 0 : It(e),
    "--paper-shadow": Ql(t)
  }
}), Zo = Gt((n, e) => {
  const t = q("Paper", Ly, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    withBorder: c,
    vars: l,
    radius: u,
    shadow: d,
    variant: f,
    mod: h,
    ...p
  } = t, g = pe({
    name: "Paper",
    props: t,
    classes: Ru,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: jy
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      mod: [{ "data-with-border": c }, h],
      ...g("root"),
      variant: f,
      ...p
    }
  );
});
Zo.classes = Ru;
Zo.displayName = "@mantine/core/Paper";
function ur(n) {
  return Nu(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function at(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Wt(n) {
  var e;
  return (e = (Nu(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function Nu(n) {
  return n instanceof Node || n instanceof at(n).Node;
}
function Je(n) {
  return n instanceof Element || n instanceof at(n).Element;
}
function Mt(n) {
  return n instanceof HTMLElement || n instanceof at(n).HTMLElement;
}
function Pc(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof at(n).ShadowRoot;
}
function Yr(n) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: r,
    display: o
  } = Tt(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + t) && !["inline", "contents"].includes(o);
}
function Fy(n) {
  return ["table", "td", "th"].includes(ur(n));
}
function ei(n) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return n.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ua(n) {
  const e = Ha(), t = Tt(n);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function Uy(n) {
  let e = an(n);
  for (; Mt(e) && !ir(e); ) {
    if (ei(e))
      return null;
    if (Ua(e))
      return e;
    e = an(e);
  }
  return null;
}
function Ha() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ir(n) {
  return ["html", "body", "#document"].includes(ur(n));
}
function Tt(n) {
  return at(n).getComputedStyle(n);
}
function ti(n) {
  return Je(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function an(n) {
  if (ur(n) === "html")
    return n;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Pc(n) && n.host || // Fallback.
    Wt(n)
  );
  return Pc(e) ? e.host : e;
}
function Pu(n) {
  const e = an(n);
  return ir(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : Mt(e) && Yr(e) ? e : Pu(e);
}
function Fr(n, e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Pu(n), i = o === ((r = n.ownerDocument) == null ? void 0 : r.body), a = at(o);
  return i ? e.concat(a, a.visualViewport || [], Yr(o) ? o : [], a.frameElement && t ? Fr(a.frameElement) : []) : e.concat(o, Fr(o, [], t));
}
const rt = Math.min, Fe = Math.max, Oo = Math.round, so = Math.floor, sn = (n) => ({
  x: n,
  y: n
}), Hy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, By = {
  start: "end",
  end: "start"
};
function oa(n, e, t) {
  return Fe(n, rt(e, t));
}
function zt(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Et(n) {
  return n.split("-")[0];
}
function dr(n) {
  return n.split("-")[1];
}
function Ba(n) {
  return n === "x" ? "y" : "x";
}
function za(n) {
  return n === "y" ? "height" : "width";
}
function $t(n) {
  return ["top", "bottom"].includes(Et(n)) ? "y" : "x";
}
function $a(n) {
  return Ba($t(n));
}
function zy(n, e, t) {
  t === void 0 && (t = !1);
  const r = dr(n), o = $a(n), i = za(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (a = Mo(a)), [a, Mo(a)];
}
function $y(n) {
  const e = Mo(n);
  return [ia(n), e, ia(e)];
}
function ia(n) {
  return n.replace(/start|end/g, (e) => By[e]);
}
function Ky(n, e, t) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return t ? e ? o : r : e ? r : o;
    case "left":
    case "right":
      return e ? i : a;
    default:
      return [];
  }
}
function qy(n, e, t, r) {
  const o = dr(n);
  let i = Ky(Et(n), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), e && (i = i.concat(i.map(ia)))), i;
}
function Mo(n) {
  return n.replace(/left|right|bottom|top/g, (e) => Hy[e]);
}
function Vy(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Ka(n) {
  return typeof n != "number" ? Vy(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function ar(n) {
  const {
    x: e,
    y: t,
    width: r,
    height: o
  } = n;
  return {
    width: r,
    height: o,
    top: t,
    left: e,
    right: e + r,
    bottom: t + o,
    x: e,
    y: t
  };
}
function Oc(n, e, t) {
  let {
    reference: r,
    floating: o
  } = n;
  const i = $t(e), a = $a(e), s = za(a), c = Et(e), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (dr(e)) {
    case "start":
      h[a] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      h[a] += f * (t && l ? -1 : 1);
      break;
  }
  return h;
}
const Gy = async (n, e, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(e));
  let l = await a.getElementRects({
    reference: n,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: d
  } = Oc(l, r, c), f = r, h = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: m,
      fn: b
    } = s[g], {
      x: C,
      y: v,
      data: w,
      reset: S
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: a,
      elements: {
        reference: n,
        floating: e
      }
    });
    u = C ?? u, d = v ?? d, h = {
      ...h,
      [m]: {
        ...h[m],
        ...w
      }
    }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await a.getElementRects({
      reference: n,
      floating: e,
      strategy: o
    }) : S.rects), {
      x: u,
      y: d
    } = Oc(l, f, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function qa(n, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = n, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = zt(e, n), p = Ka(h), m = s[f ? d === "floating" ? "reference" : "floating" : d], b = ar(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), w = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ar(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: v,
    strategy: c
  }) : C);
  return {
    top: (b.top - S.top + p.top) / w.y,
    bottom: (S.bottom - b.bottom + p.bottom) / w.y,
    left: (b.left - S.left + p.left) / w.x,
    right: (S.right - b.right + p.right) / w.x
  };
}
const Wy = (n) => ({
  name: "arrow",
  options: n,
  async fn(e) {
    const {
      x: t,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = e, {
      element: l,
      padding: u = 0
    } = zt(n, e) || {};
    if (l == null)
      return {};
    const d = Ka(u), f = {
      x: t,
      y: r
    }, h = $a(o), p = za(h), g = await a.getDimensions(l), m = h === "y", b = m ? "top" : "left", C = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[h] - f[h] - i.floating[p], S = f[h] - i.reference[h], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let k = E ? E[v] : 0;
    (!k || !await (a.isElement == null ? void 0 : a.isElement(E))) && (k = s.floating[v] || i.floating[p]);
    const I = w / 2 - S / 2, x = k / 2 - g[p] / 2 - 1, j = rt(d[b], x), V = rt(d[C], x), Z = j, ae = k - g[p] - V, D = k / 2 - g[p] / 2 + I, G = oa(Z, D, ae), M = !c.arrow && dr(o) != null && D !== G && i.reference[p] / 2 - (D < Z ? j : V) - g[p] / 2 < 0, F = M ? D < Z ? D - Z : D - ae : 0;
    return {
      [h]: f[h] + F,
      data: {
        [h]: G,
        centerOffset: D - G - F,
        ...M && {
          alignmentOffset: F
        }
      },
      reset: M
    };
  }
}), Yy = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(e) {
      var t, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: l
      } = e, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...m
      } = zt(n, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = Et(o), C = $t(s), v = Et(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = f || (v || !g ? [Mo(s)] : $y(s)), E = p !== "none";
      !f && E && S.push(...qy(s, g, p, w));
      const k = [s, ...S], I = await qa(e, m), x = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && x.push(I[b]), d) {
        const D = zy(o, a, w);
        x.push(I[D[0]], I[D[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: x
      }], !x.every((D) => D <= 0)) {
        var V, Z;
        const D = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, G = k[D];
        if (G)
          return {
            data: {
              index: D,
              overflows: j
            },
            reset: {
              placement: G
            }
          };
        let M = (Z = j.filter((F) => F.overflows[0] <= 0).sort((F, H) => F.overflows[1] - H.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var ae;
              const F = (ae = j.filter((H) => {
                if (E) {
                  const J = $t(H.placement);
                  return J === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((J) => J > 0).reduce((J, ce) => J + ce, 0)]).sort((H, J) => H[1] - J[1])[0]) == null ? void 0 : ae[0];
              F && (M = F);
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
function Ou(n) {
  const e = rt(...n.map((i) => i.left)), t = rt(...n.map((i) => i.top)), r = Fe(...n.map((i) => i.right)), o = Fe(...n.map((i) => i.bottom));
  return {
    x: e,
    y: t,
    width: r - e,
    height: o - t
  };
}
function Qy(n) {
  const e = n.slice().sort((o, i) => o.y - i.y), t = [];
  let r = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !r || i.y - r.y > r.height / 2 ? t.push([i]) : t[t.length - 1].push(i), r = i;
  }
  return t.map((o) => ar(Ou(o)));
}
const Jy = function(n) {
  return n === void 0 && (n = {}), {
    name: "inline",
    options: n,
    async fn(e) {
      const {
        placement: t,
        elements: r,
        rects: o,
        platform: i,
        strategy: a
      } = e, {
        padding: s = 2,
        x: c,
        y: l
      } = zt(n, e), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = Qy(u), f = ar(Ou(u)), h = Ka(s);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((m) => c > m.left - h.left && c < m.right + h.right && l > m.top - h.top && l < m.bottom + h.bottom) || f;
        if (d.length >= 2) {
          if ($t(t) === "y") {
            const j = d[0], V = d[d.length - 1], Z = Et(t) === "top", ae = j.top, D = V.bottom, G = Z ? j.left : V.left, M = Z ? j.right : V.right, F = M - G, H = D - ae;
            return {
              top: ae,
              bottom: D,
              left: G,
              right: M,
              width: F,
              height: H,
              x: G,
              y: ae
            };
          }
          const m = Et(t) === "left", b = Fe(...d.map((j) => j.right)), C = rt(...d.map((j) => j.left)), v = d.filter((j) => m ? j.left === C : j.right === b), w = v[0].top, S = v[v.length - 1].bottom, E = C, k = b, I = k - E, x = S - w;
          return {
            top: w,
            bottom: S,
            left: E,
            right: k,
            width: I,
            height: x,
            x: E,
            y: w
          };
        }
        return f;
      }
      const g = await i.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: r.floating,
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
async function Xy(n, e) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = n, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Et(t), s = dr(t), c = $t(t) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = i && c ? -1 : 1, d = zt(e, n);
  let {
    mainAxis: f,
    crossAxis: h,
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
  return s && typeof p == "number" && (h = s === "end" ? p * -1 : p), c ? {
    x: h * u,
    y: f * l
  } : {
    x: f * l,
    y: h * u
  };
}
const Zy = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(e) {
      var t, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = e, c = await Xy(e, n);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, ev = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(e) {
      const {
        x: t,
        y: r,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
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
      } = zt(n, e), l = {
        x: t,
        y: r
      }, u = await qa(e, c), d = $t(Et(o)), f = Ba(d);
      let h = l[f], p = l[d];
      if (i) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", C = h + u[m], v = h - u[b];
        h = oa(C, h, v);
      }
      if (a) {
        const m = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", C = p + u[m], v = p - u[b];
        p = oa(C, p, v);
      }
      const g = s.fn({
        ...e,
        [f]: h,
        [d]: p
      });
      return {
        ...g,
        data: {
          x: g.x - t,
          y: g.y - r
        }
      };
    }
  };
}, tv = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(e) {
      const {
        x: t,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = e, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = zt(n, e), u = {
        x: t,
        y: r
      }, d = $t(o), f = Ba(d);
      let h = u[f], p = u[d];
      const g = zt(s, e), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const v = f === "y" ? "height" : "width", w = i.reference[f] - i.floating[v] + m.mainAxis, S = i.reference[f] + i.reference[v] - m.mainAxis;
        h < w ? h = w : h > S && (h = S);
      }
      if (l) {
        var b, C;
        const v = f === "y" ? "width" : "height", w = ["top", "left"].includes(Et(o)), S = i.reference[d] - i.floating[v] + (w && ((b = a.offset) == null ? void 0 : b[d]) || 0) + (w ? 0 : m.crossAxis), E = i.reference[d] + i.reference[v] + (w ? 0 : ((C = a.offset) == null ? void 0 : C[d]) || 0) - (w ? m.crossAxis : 0);
        p < S ? p = S : p > E && (p = E);
      }
      return {
        [f]: h,
        [d]: p
      };
    }
  };
}, nv = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(e) {
      const {
        placement: t,
        rects: r,
        platform: o,
        elements: i
      } = e, {
        apply: a = () => {
        },
        ...s
      } = zt(n, e), c = await qa(e, s), l = Et(t), u = dr(t), d = $t(t) === "y", {
        width: f,
        height: h
      } = r.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = u === "end" ? "top" : "bottom");
      const m = h - c.top - c.bottom, b = f - c.left - c.right, C = rt(h - c[p], m), v = rt(f - c[g], b), w = !e.middlewareData.shift;
      let S = C, E = v;
      if (d ? E = u || w ? rt(v, b) : b : S = u || w ? rt(C, m) : m, w && !u) {
        const I = Fe(c.left, 0), x = Fe(c.right, 0), j = Fe(c.top, 0), V = Fe(c.bottom, 0);
        d ? E = f - 2 * (I !== 0 || x !== 0 ? I + x : Fe(c.left, c.right)) : S = h - 2 * (j !== 0 || V !== 0 ? j + V : Fe(c.top, c.bottom));
      }
      await a({
        ...e,
        availableWidth: E,
        availableHeight: S
      });
      const k = await o.getDimensions(i.floating);
      return f !== k.width || h !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Mu(n) {
  const e = Tt(n);
  let t = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Mt(n), i = o ? n.offsetWidth : t, a = o ? n.offsetHeight : r, s = Oo(t) !== i || Oo(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function Va(n) {
  return Je(n) ? n : n.contextElement;
}
function er(n) {
  const e = Va(n);
  if (!Mt(e))
    return sn(1);
  const t = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Mu(e);
  let a = (i ? Oo(t.width) : t.width) / r, s = (i ? Oo(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const rv = /* @__PURE__ */ sn(0);
function xu(n) {
  const e = at(n);
  return !Ha() || !e.visualViewport ? rv : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ov(n, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== at(n) ? !1 : e;
}
function Pn(n, e, t, r) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = n.getBoundingClientRect(), i = Va(n);
  let a = sn(1);
  e && (r ? Je(r) && (a = er(r)) : a = er(n));
  const s = ov(i, t, r) ? xu(i) : sn(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, u = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = at(i), h = r && Je(r) ? at(r) : r;
    let p = f, g = p.frameElement;
    for (; g && r && h !== p; ) {
      const m = er(g), b = g.getBoundingClientRect(), C = Tt(g), v = b.left + (g.clientLeft + parseFloat(C.paddingLeft)) * m.x, w = b.top + (g.clientTop + parseFloat(C.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, d *= m.y, c += v, l += w, p = at(g), g = p.frameElement;
    }
  }
  return ar({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function iv(n) {
  let {
    elements: e,
    rect: t,
    offsetParent: r,
    strategy: o
  } = n;
  const i = o === "fixed", a = Wt(r), s = e ? ei(e.floating) : !1;
  if (r === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = sn(1);
  const u = sn(0), d = Mt(r);
  if ((d || !d && !i) && ((ur(r) !== "body" || Yr(a)) && (c = ti(r)), Mt(r))) {
    const f = Pn(r);
    l = er(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function av(n) {
  return Array.from(n.getClientRects());
}
function Du(n) {
  return Pn(Wt(n)).left + ti(n).scrollLeft;
}
function sv(n) {
  const e = Wt(n), t = ti(n), r = n.ownerDocument.body, o = Fe(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Fe(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + Du(n);
  const s = -t.scrollTop;
  return Tt(r).direction === "rtl" && (a += Fe(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function cv(n, e) {
  const t = at(n), r = Wt(n), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = Ha();
    (!l || l && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function lv(n, e) {
  const t = Pn(n, !0, e === "fixed"), r = t.top + n.clientTop, o = t.left + n.clientLeft, i = Mt(n) ? er(n) : sn(1), a = n.clientWidth * i.x, s = n.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Mc(n, e, t) {
  let r;
  if (e === "viewport")
    r = cv(n, t);
  else if (e === "document")
    r = sv(Wt(n));
  else if (Je(e))
    r = lv(e, t);
  else {
    const o = xu(n);
    r = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return ar(r);
}
function Lu(n, e) {
  const t = an(n);
  return t === e || !Je(t) || ir(t) ? !1 : Tt(t).position === "fixed" || Lu(t, e);
}
function uv(n, e) {
  const t = e.get(n);
  if (t)
    return t;
  let r = Fr(n, [], !1).filter((s) => Je(s) && ur(s) !== "body"), o = null;
  const i = Tt(n).position === "fixed";
  let a = i ? an(n) : n;
  for (; Je(a) && !ir(a); ) {
    const s = Tt(a), c = Ua(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Yr(a) && !c && Lu(n, a)) ? r = r.filter((u) => u !== a) : o = s, a = an(a);
  }
  return e.set(n, r), r;
}
function dv(n) {
  let {
    element: e,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = n;
  const a = [...t === "clippingAncestors" ? ei(e) ? [] : uv(e, this._c) : [].concat(t), r], s = a[0], c = a.reduce((l, u) => {
    const d = Mc(e, u, o);
    return l.top = Fe(d.top, l.top), l.right = rt(d.right, l.right), l.bottom = rt(d.bottom, l.bottom), l.left = Fe(d.left, l.left), l;
  }, Mc(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fv(n) {
  const {
    width: e,
    height: t
  } = Mu(n);
  return {
    width: e,
    height: t
  };
}
function hv(n, e, t) {
  const r = Mt(e), o = Wt(e), i = t === "fixed", a = Pn(n, !0, i, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = sn(0);
  if (r || !r && !i)
    if ((ur(e) !== "body" || Yr(o)) && (s = ti(e)), r) {
      const d = Pn(e, !0, i, e);
      c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
    } else
      o && (c.x = Du(o));
  const l = a.left + s.scrollLeft - c.x, u = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function ki(n) {
  return Tt(n).position === "static";
}
function xc(n, e) {
  return !Mt(n) || Tt(n).position === "fixed" ? null : e ? e(n) : n.offsetParent;
}
function ju(n, e) {
  const t = at(n);
  if (ei(n))
    return t;
  if (!Mt(n)) {
    let o = an(n);
    for (; o && !ir(o); ) {
      if (Je(o) && !ki(o))
        return o;
      o = an(o);
    }
    return t;
  }
  let r = xc(n, e);
  for (; r && Fy(r) && ki(r); )
    r = xc(r, e);
  return r && ir(r) && ki(r) && !Ua(r) ? t : r || Uy(n) || t;
}
const pv = async function(n) {
  const e = this.getOffsetParent || ju, t = this.getDimensions, r = await t(n.floating);
  return {
    reference: hv(n.reference, await e(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gv(n) {
  return Tt(n).direction === "rtl";
}
const mv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: iv,
  getDocumentElement: Wt,
  getClippingRect: dv,
  getOffsetParent: ju,
  getElementRects: pv,
  getClientRects: av,
  getDimensions: fv,
  getScale: er,
  isElement: Je,
  isRTL: gv
};
function yv(n, e) {
  let t = null, r;
  const o = Wt(n);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: d,
      height: f
    } = n.getBoundingClientRect();
    if (s || e(), !d || !f)
      return;
    const h = so(u), p = so(o.clientWidth - (l + d)), g = so(o.clientHeight - (u + f)), m = so(l), C = {
      rootMargin: -h + "px " + -p + "px " + -g + "px " + -m + "px",
      threshold: Fe(0, rt(1, c)) || 1
    };
    let v = !0;
    function w(S) {
      const E = S[0].intersectionRatio;
      if (E !== c) {
        if (!v)
          return a();
        E ? a(!1, E) : r = setTimeout(() => {
          a(!1, 1e-7);
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
    t.observe(n);
  }
  return a(!0), i;
}
function vv(n, e, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Va(n), u = o || i ? [...l ? Fr(l) : [], ...Fr(e)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const d = l && s ? yv(l, t) : null;
  let f = -1, h = null;
  a && (h = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === l && h && (h.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = h) == null || v.observe(e);
    })), t();
  }), l && !c && h.observe(l), h.observe(e));
  let p, g = c ? Pn(n) : null;
  c && m();
  function m() {
    const b = Pn(n);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && t(), g = b, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var b;
    u.forEach((C) => {
      o && C.removeEventListener("scroll", t), i && C.removeEventListener("resize", t);
    }), d == null || d(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(p);
  };
}
const bv = Zy, Cv = ev, wv = Yy, Sv = nv, Dc = Wy, Tv = Jy, Ev = tv, Iv = (n, e, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: mv,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return Gy(n, e, {
    ...o,
    platform: i
  });
};
var ho = typeof document < "u" ? ma : Y;
function xo(n, e) {
  if (n === e)
    return !0;
  if (typeof n != typeof e)
    return !1;
  if (typeof n == "function" && n.toString() === e.toString())
    return !0;
  let t, r, o;
  if (n && e && typeof n == "object") {
    if (Array.isArray(n)) {
      if (t = n.length, t !== e.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (!xo(n[r], e[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(n), t = o.length, t !== Object.keys(e).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && n.$$typeof) && !xo(n[i], e[i]))
        return !1;
    }
    return !0;
  }
  return n !== n && e !== e;
}
function Fu(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lc(n, e) {
  const t = Fu(n);
  return Math.round(e * t) / t;
}
function jc(n) {
  const e = ie.useRef(n);
  return ho(() => {
    e.current = n;
  }), e;
}
function _v(n) {
  n === void 0 && (n = {});
  const {
    placement: e = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = n, [u, d] = ie.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = ie.useState(r);
  xo(f, r) || h(r);
  const [p, g] = ie.useState(null), [m, b] = ie.useState(null), C = ie.useCallback((F) => {
    F !== E.current && (E.current = F, g(F));
  }, []), v = ie.useCallback((F) => {
    F !== k.current && (k.current = F, b(F));
  }, []), w = i || p, S = a || m, E = ie.useRef(null), k = ie.useRef(null), I = ie.useRef(u), x = c != null, j = jc(c), V = jc(o), Z = ie.useCallback(() => {
    if (!E.current || !k.current)
      return;
    const F = {
      placement: e,
      strategy: t,
      middleware: f
    };
    V.current && (F.platform = V.current), Iv(E.current, k.current, F).then((H) => {
      const J = {
        ...H,
        isPositioned: !0
      };
      ae.current && !xo(I.current, J) && (I.current = J, lf.flushSync(() => {
        d(J);
      }));
    });
  }, [f, e, t, V]);
  ho(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [l]);
  const ae = ie.useRef(!1);
  ho(() => (ae.current = !0, () => {
    ae.current = !1;
  }), []), ho(() => {
    if (w && (E.current = w), S && (k.current = S), w && S) {
      if (j.current)
        return j.current(w, S, Z);
      Z();
    }
  }, [w, S, Z, j, x]);
  const D = ie.useMemo(() => ({
    reference: E,
    floating: k,
    setReference: C,
    setFloating: v
  }), [C, v]), G = ie.useMemo(() => ({
    reference: w,
    floating: S
  }), [w, S]), M = ie.useMemo(() => {
    const F = {
      position: t,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return F;
    const H = Lc(G.floating, u.x), J = Lc(G.floating, u.y);
    return s ? {
      ...F,
      transform: "translate(" + H + "px, " + J + "px)",
      ...Fu(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: H,
      top: J
    };
  }, [t, s, G.floating, u.x, u.y]);
  return ie.useMemo(() => ({
    ...u,
    update: Z,
    refs: D,
    elements: G,
    floatingStyles: M
  }), [u, Z, D, G, M]);
}
const kv = (n) => {
  function e(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const {
        element: r,
        padding: o
      } = typeof n == "function" ? n(t) : n;
      return r && e(r) ? r.current != null ? Dc({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Dc({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, Av = (n, e) => ({
  ...bv(n),
  options: [n, e]
}), Rv = (n, e) => ({
  ...Cv(n),
  options: [n, e]
}), Fc = (n, e) => ({
  ...Ev(n),
  options: [n, e]
}), Uc = (n, e) => ({
  ...wv(n),
  options: [n, e]
}), Nv = (n, e) => ({
  ...Sv(n),
  options: [n, e]
}), Hc = (n, e) => ({
  ...Tv(n),
  options: [n, e]
}), Pv = (n, e) => ({
  ...kv(n),
  options: [n, e]
}), Uu = {
  ...ie
}, Ov = Uu.useInsertionEffect, Mv = Ov || ((n) => n());
function xv(n) {
  const e = ie.useRef(() => {
  });
  return Mv(() => {
    e.current = n;
  }), ie.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
var aa = typeof document < "u" ? ma : Y;
let Bc = !1, Dv = 0;
const zc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Dv++
);
function Lv() {
  const [n, e] = ie.useState(() => Bc ? zc() : void 0);
  return aa(() => {
    n == null && e(zc());
  }, []), ie.useEffect(() => {
    Bc = !0;
  }, []), n;
}
const jv = Uu.useId, Fv = jv || Lv;
function Uv() {
  const n = /* @__PURE__ */ new Map();
  return {
    emit(e, t) {
      var r;
      (r = n.get(e)) == null || r.forEach((o) => o(t));
    },
    on(e, t) {
      n.set(e, [...n.get(e) || [], t]);
    },
    off(e, t) {
      var r;
      n.set(e, ((r = n.get(e)) == null ? void 0 : r.filter((o) => o !== t)) || []);
    }
  };
}
const Hv = /* @__PURE__ */ ie.createContext(null), Bv = /* @__PURE__ */ ie.createContext(null), zv = () => {
  var n;
  return ((n = ie.useContext(Hv)) == null ? void 0 : n.id) || null;
}, $v = () => ie.useContext(Bv);
function Kv(n) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: r
  } = n, o = Fv(), i = ie.useRef({}), [a] = ie.useState(() => Uv()), s = zv() != null, [c, l] = ie.useState(r.reference), u = xv((h, p, g) => {
    i.current.openEvent = h ? p : void 0, a.emit("openchange", {
      open: h,
      event: p,
      reason: g,
      nested: s
    }), t == null || t(h, p, g);
  }), d = ie.useMemo(() => ({
    setPositionReference: l
  }), []), f = ie.useMemo(() => ({
    reference: c || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [c, r.reference, r.floating]);
  return ie.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: f,
    events: a,
    floatingId: o,
    refs: d
  }), [e, u, f, a, o, d]);
}
function qv(n) {
  n === void 0 && (n = {});
  const {
    nodeId: e
  } = n, t = Kv({
    ...n,
    elements: {
      reference: null,
      floating: null,
      ...n.elements
    }
  }), r = n.rootContext || t, o = r.elements, [i, a] = ie.useState(null), [s, c] = ie.useState(null), u = (o == null ? void 0 : o.reference) || i, d = ie.useRef(null), f = $v();
  aa(() => {
    u && (d.current = u);
  }, [u]);
  const h = _v({
    ...n,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), p = ie.useCallback((v) => {
    const w = Je(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c(w), h.refs.setReference(w);
  }, [h.refs]), g = ie.useCallback((v) => {
    (Je(v) || v === null) && (d.current = v, a(v)), (Je(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !Je(v)) && h.refs.setReference(v);
  }, [h.refs]), m = ie.useMemo(() => ({
    ...h.refs,
    setReference: g,
    setPositionReference: p,
    domReference: d
  }), [h.refs, g, p]), b = ie.useMemo(() => ({
    ...h.elements,
    domReference: u
  }), [h.elements, u]), C = ie.useMemo(() => ({
    ...h,
    ...r,
    refs: m,
    elements: b,
    nodeId: e
  }), [h, m, b, e, r]);
  return aa(() => {
    r.dataRef.current.floatingContext = C;
    const v = f == null ? void 0 : f.nodesRef.current.find((w) => w.id === e);
    v && (v.context = C);
  }), ie.useMemo(() => ({
    ...h,
    context: C,
    refs: m,
    elements: b
  }), [h, m, b, C]);
}
function Vv(n, e) {
  if (n === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, r] = e.split("-"), o = t === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return e;
}
function $c(n, e, t, r) {
  return n === "center" || r === "center" ? { top: e } : n === "end" ? { bottom: t } : n === "start" ? { top: t } : {};
}
function Kc(n, e, t, r, o) {
  return n === "center" || r === "center" ? { left: e } : n === "end" ? { [o === "ltr" ? "right" : "left"]: t } : n === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const Gv = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Wv({
  position: n,
  arrowSize: e,
  arrowOffset: t,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: i,
  arrowY: a,
  dir: s
}) {
  const [c, l = "center"] = n.split("-"), u = {
    width: e,
    height: e,
    transform: "rotate(45deg)",
    position: "absolute",
    [Gv[c]]: r
  }, d = -e / 2;
  return c === "left" ? {
    ...u,
    ...$c(l, a, t, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...$c(l, a, t, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...Kc(l, i, t, o, s),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...Kc(l, i, t, o, s),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Hu = ye(
  ({
    position: n,
    arrowSize: e,
    arrowOffset: t,
    arrowRadius: r,
    arrowPosition: o,
    visible: i,
    arrowX: a,
    arrowY: s,
    style: c,
    ...l
  }, u) => {
    const { dir: d } = xa();
    return i ? /* @__PURE__ */ y.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Wv({
            position: n,
            arrowSize: e,
            arrowOffset: t,
            arrowRadius: r,
            arrowPosition: o,
            dir: d,
            arrowX: a,
            arrowY: s
          })
        }
      }
    ) : null;
  }
);
Hu.displayName = "@mantine/core/FloatingArrow";
const [Yv, Bu] = lr(
  "Popover component was not found in the tree"
);
function Ga({
  children: n,
  active: e = !0,
  refProp: t = "ref"
}) {
  const r = tm(e), o = ht(r, n == null ? void 0 : n.ref);
  return Vr(n) ? qo(n, { [t]: o }) : n;
}
function zu(n) {
  return /* @__PURE__ */ y.jsx(Fa, { tabIndex: -1, "data-autofocus": !0, ...n });
}
Ga.displayName = "@mantine/core/FocusTrap";
zu.displayName = "@mantine/core/FocusTrapInitialFocus";
Ga.InitialFocus = zu;
function Qv(n) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof n.className == "string" && e.classList.add(...n.className.split(" ").filter(Boolean)), typeof n.style == "object" && Object.assign(e.style, n.style), typeof n.id == "string" && e.setAttribute("id", n.id), e;
}
const Jv = {}, $u = ye((n, e) => {
  const { children: t, target: r, ...o } = q("Portal", Jv, n), [i, a] = X(!1), s = ue(null);
  return Gr(() => (a(!0), s.current = r ? typeof r == "string" ? document.querySelector(r) : r : Qv(o), tu(e, s.current), !r && s.current && document.body.appendChild(s.current), () => {
    !r && s.current && document.body.removeChild(s.current);
  }), [r]), !i || !s.current ? null : df(/* @__PURE__ */ y.jsx(y.Fragment, { children: t }), s.current);
});
$u.displayName = "@mantine/core/Portal";
function Ku({ withinPortal: n = !0, children: e, ...t }) {
  return n ? /* @__PURE__ */ y.jsx($u, { ...t, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
Ku.displayName = "@mantine/core/OptionalPortal";
const Cr = (n) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${A(n === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), co = {
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
    ...Cr("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Cr("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Cr("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Cr("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Cr("top"),
    common: { transformOrigin: "top right" }
  }
}, qc = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Xv({
  transition: n,
  state: e,
  duration: t,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: r
  };
  return typeof n == "string" ? n in co ? {
    transitionProperty: co[n].transitionProperty,
    ...o,
    ...co[n].common,
    ...co[n][qc[e]]
  } : {} : {
    transitionProperty: n.transitionProperty,
    ...o,
    ...n.common,
    ...n[qc[e]]
  };
}
function Zv({
  duration: n,
  exitDuration: e,
  timingFunction: t,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: a,
  onExited: s,
  enterDelay: c,
  exitDelay: l
}) {
  const u = Vt(), d = ru(), f = u.respectReducedMotion ? d : !1, [h, p] = X(f ? 0 : n), [g, m] = X(r ? "entered" : "exited"), b = ue(-1), C = ue(-1), v = ue(-1), w = (E) => {
    const k = E ? o : i, I = E ? a : s;
    window.clearTimeout(b.current);
    const x = f ? 0 : E ? n : e;
    p(x), x === 0 ? (typeof k == "function" && k(), typeof I == "function" && I(), m(E ? "entered" : "exited")) : v.current = requestAnimationFrame(() => {
      Sl.flushSync(() => {
        m(E ? "pre-entering" : "pre-exiting");
      }), v.current = requestAnimationFrame(() => {
        typeof k == "function" && k(), m(E ? "entering" : "exiting"), b.current = window.setTimeout(() => {
          typeof I == "function" && I(), m(E ? "entered" : "exited");
        }, x);
      });
    });
  }, S = (E) => {
    if (window.clearTimeout(C.current), typeof (E ? c : l) != "number") {
      w(E);
      return;
    }
    C.current = window.setTimeout(
      () => {
        w(E);
      },
      E ? c : l
    );
  };
  return Rn(() => {
    S(r);
  }, [r]), Y(
    () => () => {
      window.clearTimeout(b.current), cancelAnimationFrame(v.current);
    },
    []
  ), {
    transitionDuration: h,
    transitionStatus: g,
    transitionTimingFunction: t || "ease"
  };
}
function ni({
  keepMounted: n,
  transition: e = "fade",
  duration: t = 250,
  exitDuration: r = t,
  mounted: o,
  children: i,
  timingFunction: a = "ease",
  onExit: s,
  onEntered: c,
  onEnter: l,
  onExited: u,
  enterDelay: d,
  exitDelay: f
}) {
  const { transitionDuration: h, transitionStatus: p, transitionTimingFunction: g } = Zv({
    mounted: o,
    exitDuration: r,
    duration: t,
    timingFunction: a,
    onExit: s,
    onEntered: c,
    onEnter: l,
    onExited: u,
    enterDelay: d,
    exitDelay: f
  });
  return h === 0 ? o ? /* @__PURE__ */ y.jsx(y.Fragment, { children: i({}) }) : n ? i({ display: "none" }) : null : p === "exited" ? n ? i({ display: "none" }) : null : /* @__PURE__ */ y.jsx(y.Fragment, { children: i(
    Xv({
      transition: e,
      duration: h,
      state: p,
      timingFunction: g
    })
  ) });
}
ni.displayName = "@mantine/core/Transition";
var qu = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const eb = {}, Wa = se((n, e) => {
  var m, b, C, v;
  const t = q("PopoverDropdown", eb, n), {
    className: r,
    style: o,
    vars: i,
    children: a,
    onKeyDownCapture: s,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = t, f = Bu(), h = Wg({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), p = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = ht(e, f.floating);
  return f.disabled ? null : /* @__PURE__ */ y.jsx(Ku, { ...f.portalProps, withinPortal: f.withinPortal, children: /* @__PURE__ */ y.jsx(
    ni,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((m = f.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((b = f.transitionProps) == null ? void 0 : b.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((C = f.transitionProps) == null ? void 0 : C.exitDuration) == "number" ? f.transitionProps.exitDuration : (v = f.transitionProps) == null ? void 0 : v.duration,
      children: (w) => /* @__PURE__ */ y.jsx(Ga, { active: f.trapFocus, children: /* @__PURE__ */ y.jsxs(
        Q,
        {
          ...p,
          ...d,
          variant: c,
          ref: g,
          onKeyDownCapture: Bg(f.onClose, {
            active: f.closeOnEscape,
            onTrigger: h,
            onKeyDown: s
          }),
          "data-position": f.placement,
          "data-fixed": f.floatingStrategy === "fixed" || void 0,
          ...f.getStyles("dropdown", {
            className: r,
            props: t,
            classNames: l,
            styles: u,
            style: [
              {
                ...w,
                zIndex: f.zIndex,
                top: f.y ?? 0,
                left: f.x ?? 0,
                width: f.width === "target" ? void 0 : A(f.width)
              },
              o
            ]
          }),
          children: [
            a,
            /* @__PURE__ */ y.jsx(
              Hu,
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
Wa.classes = qu;
Wa.displayName = "@mantine/core/PopoverDropdown";
const tb = {
  refProp: "ref",
  popupType: "dialog"
}, Vu = se((n, e) => {
  const { children: t, refProp: r, popupType: o, ...i } = q(
    "PopoverTarget",
    tb,
    n
  );
  if (!Vr(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const a = i, s = Bu(), c = ht(s.reference, t.ref, e), l = s.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": s.opened,
    "aria-controls": s.getDropdownId(),
    id: s.getTargetId()
  } : {};
  return qo(t, {
    ...a,
    ...l,
    ...s.targetProps,
    className: qt(s.targetProps.className, a.className, t.props.className),
    [r]: c,
    ...s.controlled ? null : { onClick: s.onToggle }
  });
});
Vu.displayName = "@mantine/core/PopoverTarget";
function nb({
  opened: n,
  floating: e,
  position: t,
  positionDependencies: r
}) {
  const [o, i] = X(0);
  Y(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return vv(
        e.refs.reference.current,
        e.refs.floating.current,
        e.update
      );
  }, [
    e.refs.reference.current,
    e.refs.floating.current,
    n,
    o,
    t
  ]), Rn(() => {
    e.update();
  }, r), Rn(() => {
    i((a) => a + 1);
  }, [n]);
}
function rb(n) {
  if (n === void 0)
    return { shift: !0, flip: !0 };
  const e = { ...n };
  return n.shift === void 0 && (e.shift = !0), n.flip === void 0 && (e.flip = !0), e;
}
function ob(n, e) {
  const t = rb(n.middlewares), r = [Av(n.offset)];
  return t.shift && r.push(
    Rv(
      typeof t.shift == "boolean" ? { limiter: Fc(), padding: 5 } : { limiter: Fc(), padding: 5, ...t.shift }
    )
  ), t.flip && r.push(
    typeof t.flip == "boolean" ? Uc() : Uc(t.flip)
  ), t.inline && r.push(
    typeof t.inline == "boolean" ? Hc() : Hc(t.inline)
  ), r.push(Pv({ element: n.arrowRef, padding: n.arrowOffset })), (t.size || n.width === "target") && r.push(
    Nv({
      ...typeof t.size == "boolean" ? {} : t.size,
      apply({ rects: o, availableWidth: i, availableHeight: a }) {
        var l;
        const c = ((l = e().refs.floating.current) == null ? void 0 : l.style) ?? {};
        t.size && Object.assign(c, {
          maxWidth: `${i}px`,
          maxHeight: `${a}px`
        }), n.width === "target" && Object.assign(c, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), r;
}
function ib(n) {
  const [e, t] = Nn({
    value: n.opened,
    defaultValue: n.defaultOpened,
    finalValue: !1,
    onChange: n.onChange
  }), r = () => {
    var a;
    e && ((a = n.onClose) == null || a.call(n), t(!1));
  }, o = () => {
    var a, s;
    e ? ((a = n.onClose) == null || a.call(n), t(!1)) : ((s = n.onOpen) == null || s.call(n), t(!0));
  }, i = qv({
    strategy: n.strategy,
    placement: n.position,
    middleware: ob(n, () => i)
  });
  return nb({
    opened: n.opened,
    position: n.position,
    positionDependencies: n.positionDependencies || [],
    floating: i
  }), Rn(() => {
    var a;
    (a = n.onPositionChange) == null || a.call(n, i.placement);
  }, [i.placement]), Rn(() => {
    var a, s;
    n.opened ? (s = n.onOpen) == null || s.call(n) : (a = n.onClose) == null || a.call(n);
  }, [n.opened]), {
    floating: i,
    controlled: typeof n.opened == "boolean",
    opened: e,
    onClose: r,
    onToggle: o
  };
}
const ab = {
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
  zIndex: Ug("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, sb = (n, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : It(e),
    "--popover-shadow": Ql(t)
  }
});
function dn(n) {
  var ze, yn, Un, $e, Lt, Hn;
  const e = q("Popover", ab, n), {
    children: t,
    position: r,
    offset: o,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    transitionProps: c,
    width: l,
    middlewares: u,
    withArrow: d,
    arrowSize: f,
    arrowOffset: h,
    arrowRadius: p,
    arrowPosition: g,
    unstyled: m,
    classNames: b,
    styles: C,
    closeOnClickOutside: v,
    withinPortal: w,
    portalProps: S,
    closeOnEscape: E,
    clickOutsideEvents: k,
    trapFocus: I,
    onClose: x,
    onOpen: j,
    onChange: V,
    zIndex: Z,
    radius: ae,
    shadow: D,
    id: G,
    defaultOpened: M,
    __staticSelector: F,
    withRoles: H,
    disabled: J,
    returnFocus: ce,
    variant: Te,
    keepMounted: Ce,
    vars: Ve,
    floatingStrategy: yt,
    ...Ne
  } = e, hn = pe({
    name: F,
    props: e,
    classes: qu,
    classNames: b,
    styles: C,
    unstyled: m,
    rootSelector: "dropdown",
    vars: Ve,
    varsResolver: sb
  }), Jt = ue(null), [pn, gn] = X(null), [mn, hr] = X(null), { dir: pr } = xa(), xt = un(G), Ee = ib({
    middlewares: u,
    width: l,
    position: Vv(pr, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: Jt,
    arrowOffset: h,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    defaultOpened: M,
    onChange: V,
    onOpen: j,
    onClose: x,
    strategy: yt
  });
  $g(() => v && Ee.onClose(), k, [
    pn,
    mn
  ]);
  const Dt = me(
    (lt) => {
      gn(lt), Ee.floating.refs.setReference(lt);
    },
    [Ee.floating.refs.setReference]
  ), Fn = me(
    (lt) => {
      hr(lt), Ee.floating.refs.setFloating(lt);
    },
    [Ee.floating.refs.setFloating]
  );
  return /* @__PURE__ */ y.jsx(
    Yv,
    {
      value: {
        returnFocus: ce,
        disabled: J,
        controlled: Ee.controlled,
        reference: Dt,
        floating: Fn,
        x: Ee.floating.x,
        y: Ee.floating.y,
        arrowX: (Un = (yn = (ze = Ee.floating) == null ? void 0 : ze.middlewareData) == null ? void 0 : yn.arrow) == null ? void 0 : Un.x,
        arrowY: (Hn = (Lt = ($e = Ee.floating) == null ? void 0 : $e.middlewareData) == null ? void 0 : Lt.arrow) == null ? void 0 : Hn.y,
        opened: Ee.opened,
        arrowRef: Jt,
        transitionProps: c,
        width: l,
        withArrow: d,
        arrowSize: f,
        arrowOffset: h,
        arrowRadius: p,
        arrowPosition: g,
        placement: Ee.floating.placement,
        trapFocus: I,
        withinPortal: w,
        portalProps: S,
        zIndex: Z,
        radius: ae,
        shadow: D,
        closeOnEscape: E,
        onClose: Ee.onClose,
        onToggle: Ee.onToggle,
        getTargetId: () => `${xt}-target`,
        getDropdownId: () => `${xt}-dropdown`,
        withRoles: H,
        targetProps: Ne,
        __staticSelector: F,
        classNames: b,
        styles: C,
        unstyled: m,
        variant: Te,
        keepMounted: Ce,
        getStyles: hn,
        floatingStrategy: yt
      },
      children: t
    }
  );
}
dn.Target = Vu;
dn.Dropdown = Wa;
dn.displayName = "@mantine/core/Popover";
dn.extend = (n) => n;
var St = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const cb = ye(({ className: n, ...e }, t) => /* @__PURE__ */ y.jsxs(Q, { component: "span", className: qt(St.barsLoader, n), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: St.bar }),
  /* @__PURE__ */ y.jsx("span", { className: St.bar }),
  /* @__PURE__ */ y.jsx("span", { className: St.bar })
] })), lb = ye(({ className: n, ...e }, t) => /* @__PURE__ */ y.jsxs(Q, { component: "span", className: qt(St.dotsLoader, n), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: St.dot }),
  /* @__PURE__ */ y.jsx("span", { className: St.dot }),
  /* @__PURE__ */ y.jsx("span", { className: St.dot })
] })), ub = ye(({ className: n, ...e }, t) => /* @__PURE__ */ y.jsx(Q, { component: "span", className: qt(St.ovalLoader, n), ...e, ref: t })), Gu = {
  bars: cb,
  oval: ub,
  dots: lb
}, db = {
  loaders: Gu,
  type: "oval"
}, fb = (n, { size: e, color: t }) => ({
  root: {
    "--loader-size": Re(e, "loader-size"),
    "--loader-color": t ? on(t, n) : void 0
  }
}), Qr = se((n, e) => {
  const t = q("Loader", db, n), {
    size: r,
    color: o,
    type: i,
    vars: a,
    className: s,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    loaders: f,
    variant: h,
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
    unstyled: d,
    vars: a,
    varsResolver: fb
  });
  return p ? /* @__PURE__ */ y.jsx(Q, { ...m("root"), ref: e, ...g, children: p }) : /* @__PURE__ */ y.jsx(
    Q,
    {
      ...m("root"),
      ref: e,
      component: f[i],
      variant: h,
      size: r,
      ...g
    }
  );
});
Qr.defaultLoaders = Gu;
Qr.classes = St;
Qr.displayName = "@mantine/core/Loader";
var ri = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const Vc = {
  orientation: "horizontal"
}, hb = (n, { borderWidth: e }) => ({
  group: { "--ai-border-width": A(e) }
}), Ya = se((n, e) => {
  const t = q("ActionIconGroup", Vc, n), {
    className: r,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    mod: f,
    ...h
  } = q("ActionIconGroup", Vc, n), p = pe({
    name: "ActionIconGroup",
    props: t,
    classes: ri,
    className: r,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: hb,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p("group"),
      ref: e,
      variant: d,
      mod: [{ "data-orientation": c }, f],
      role: "group",
      ...h
    }
  );
});
Ya.classes = ri;
Ya.displayName = "@mantine/core/ActionIconGroup";
const pb = {}, gb = (n, { size: e, radius: t, variant: r, gradient: o, color: i, autoContrast: a }) => {
  const s = n.variantColorResolver({
    color: i || n.primaryColor,
    theme: n,
    gradient: o,
    variant: r || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--ai-size": Re(e, "ai-size"),
      "--ai-radius": t === void 0 ? void 0 : It(t),
      "--ai-bg": i || r ? s.background : void 0,
      "--ai-hover": i || r ? s.hover : void 0,
      "--ai-hover-color": i || r ? s.hoverColor : void 0,
      "--ai-color": s.color,
      "--ai-bd": i || r ? s.border : void 0
    }
  };
}, oi = Gt((n, e) => {
  const t = q("ActionIcon", pb, n), {
    className: r,
    unstyled: o,
    variant: i,
    classNames: a,
    styles: s,
    style: c,
    loading: l,
    loaderProps: u,
    size: d,
    color: f,
    radius: h,
    __staticSelector: p,
    gradient: g,
    vars: m,
    children: b,
    disabled: C,
    "data-disabled": v,
    autoContrast: w,
    mod: S,
    ...E
  } = t, k = pe({
    name: ["ActionIcon", p],
    props: t,
    className: r,
    style: c,
    classes: ri,
    classNames: a,
    styles: s,
    unstyled: o,
    vars: m,
    varsResolver: gb
  });
  return /* @__PURE__ */ y.jsxs(
    Ln,
    {
      ...k("root", { active: !C && !l && !v }),
      ...E,
      unstyled: o,
      variant: i,
      size: d,
      disabled: C || l,
      ref: e,
      mod: [{ loading: l, disabled: C || v }, S],
      children: [
        /* @__PURE__ */ y.jsx(ni, { mounted: !!l, transition: "slide-down", duration: 150, children: (I) => /* @__PURE__ */ y.jsx(Q, { component: "span", ...k("loader", { style: I }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(Qr, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ y.jsx(Q, { component: "span", mod: { loading: l }, ...k("icon"), children: b })
      ]
    }
  );
});
oi.classes = ri;
oi.displayName = "@mantine/core/ActionIcon";
oi.Group = Ya;
const Wu = ye(
  ({ size: n = "var(--cb-icon-size, 70%)", style: e, ...t }, r) => /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: n, height: n },
      ref: r,
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
Wu.displayName = "@mantine/core/CloseIcon";
var Yu = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const mb = {
  variant: "subtle"
}, yb = (n, { size: e, radius: t, iconSize: r }) => ({
  root: {
    "--cb-size": Re(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : It(t),
    "--cb-icon-size": A(r)
  }
}), fr = Gt((n, e) => {
  const t = q("CloseButton", mb, n), {
    iconSize: r,
    children: o,
    vars: i,
    radius: a,
    className: s,
    classNames: c,
    style: l,
    styles: u,
    unstyled: d,
    "data-disabled": f,
    disabled: h,
    variant: p,
    icon: g,
    mod: m,
    ...b
  } = t, C = pe({
    name: "CloseButton",
    props: t,
    className: s,
    style: l,
    classes: Yu,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: yb
  });
  return /* @__PURE__ */ y.jsxs(
    Ln,
    {
      ref: e,
      ...b,
      unstyled: d,
      variant: p,
      disabled: h,
      mod: [{ disabled: h || f }, m],
      ...C("root", { variant: p, active: !h && !f }),
      children: [
        g || /* @__PURE__ */ y.jsx(Wu, {}),
        o
      ]
    }
  );
});
fr.classes = Yu;
fr.displayName = "@mantine/core/CloseButton";
function vb(n) {
  return Di.toArray(n).filter(Boolean);
}
var Qu = { root: "m_4081bf90" };
const bb = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Cb = (n, { grow: e, preventGrowOverflow: t, gap: r, align: o, justify: i, wrap: a }, { childWidth: s }) => ({
  root: {
    "--group-child-width": e && t ? s : void 0,
    "--group-gap": ka(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": a
  }
}), Ur = se((n, e) => {
  const t = q("Group", bb, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    children: c,
    gap: l,
    align: u,
    justify: d,
    wrap: f,
    grow: h,
    preventGrowOverflow: p,
    vars: g,
    variant: m,
    __size: b,
    mod: C,
    ...v
  } = t, w = vb(c), S = w.length, E = ka(l ?? "md"), I = { childWidth: `calc(${100 / S}% - (${E} - ${E} / ${S}))` }, x = pe({
    name: "Group",
    props: t,
    stylesCtx: I,
    className: o,
    style: i,
    classes: Qu,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: g,
    varsResolver: Cb
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...x("root"),
      ref: e,
      variant: m,
      mod: [{ grow: h }, C],
      size: b,
      ...v,
      children: w
    }
  );
});
Ur.classes = Qu;
Ur.displayName = "@mantine/core/Group";
const [wb, Jr] = Yl({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var gt = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const Gc = {}, Sb = (n, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), ii = se((n, e) => {
  const t = q("InputDescription", Gc, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...h
  } = q("InputDescription", Gc, t), p = Jr(), g = pe({
    name: ["InputWrapper", u],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "description",
    vars: c,
    varsResolver: Sb
  }), m = d && (p == null ? void 0 : p.getStyles) || g;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      component: "p",
      ref: e,
      variant: f,
      size: l,
      ...m("description", p != null && p.getStyles ? { className: o, style: i } : void 0),
      ...h
    }
  );
});
ii.classes = gt;
ii.displayName = "@mantine/core/InputDescription";
const Tb = {}, Eb = (n, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), ai = se((n, e) => {
  const t = q("InputError", Tb, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...h
  } = t, p = pe({
    name: ["InputWrapper", u],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "error",
    vars: c,
    varsResolver: Eb
  }), g = Jr(), m = d && (g == null ? void 0 : g.getStyles) || p;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      component: "p",
      ref: e,
      variant: f,
      size: l,
      ...m("error", g != null && g.getStyles ? { className: o, style: i } : void 0),
      ...h
    }
  );
});
ai.classes = gt;
ai.displayName = "@mantine/core/InputError";
const Wc = {
  labelElement: "label"
}, Ib = (n, { size: e }) => ({
  label: {
    "--input-label-size": it(e),
    "--input-asterisk-color": void 0
  }
}), si = se((n, e) => {
  const t = q("InputLabel", Wc, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    labelElement: l,
    size: u,
    required: d,
    htmlFor: f,
    onMouseDown: h,
    children: p,
    __staticSelector: g,
    variant: m,
    mod: b,
    ...C
  } = q("InputLabel", Wc, t), v = pe({
    name: ["InputWrapper", g],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "label",
    vars: c,
    varsResolver: Ib
  }), w = Jr(), S = (w == null ? void 0 : w.getStyles) || v;
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ...S("label", w != null && w.getStyles ? { className: o, style: i } : void 0),
      component: l,
      variant: m,
      size: u,
      ref: e,
      htmlFor: l === "label" ? f : void 0,
      mod: [{ required: d }, b],
      onMouseDown: (E) => {
        h == null || h(E), !E.defaultPrevented && E.detail > 1 && E.preventDefault();
      },
      ...C,
      children: [
        p,
        d && /* @__PURE__ */ y.jsx("span", { ...S("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
si.classes = gt;
si.displayName = "@mantine/core/InputLabel";
const Yc = {}, Qa = se((n, e) => {
  const t = q("InputPlaceholder", Yc, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: d,
    mod: f,
    ...h
  } = q("InputPlaceholder", Yc, t), p = pe({
    name: ["InputPlaceholder", l],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p("placeholder"),
      mod: [{ error: !!d }, f],
      component: "span",
      variant: u,
      ref: e,
      ...h
    }
  );
});
Qa.classes = gt;
Qa.displayName = "@mantine/core/InputPlaceholder";
function _b(n, { hasDescription: e, hasError: t }) {
  const r = n.findIndex((c) => c === "input"), o = n.slice(0, r), i = n.slice(r + 1), a = e && o.includes("description") || t && o.includes("error");
  return { offsetBottom: e && i.includes("description") || t && i.includes("error"), offsetTop: a };
}
const kb = {
  labelElement: "label",
  inputContainer: (n) => n,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Ab = (n, { size: e }) => ({
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
}), Ja = se((n, e) => {
  const t = q("InputWrapper", kb, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    variant: u,
    __staticSelector: d,
    inputContainer: f,
    inputWrapperOrder: h,
    label: p,
    error: g,
    description: m,
    labelProps: b,
    descriptionProps: C,
    errorProps: v,
    labelElement: w,
    children: S,
    withAsterisk: E,
    id: k,
    required: I,
    __stylesApiProps: x,
    mod: j,
    ...V
  } = t, Z = pe({
    name: ["InputWrapper", d],
    props: x || t,
    classes: gt,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: Ab
  }), ae = {
    size: l,
    variant: u,
    __staticSelector: d
  }, D = un(k), G = typeof E == "boolean" ? E : I, M = (v == null ? void 0 : v.id) || `${D}-error`, F = (C == null ? void 0 : C.id) || `${D}-description`, H = D, J = !!g && typeof g != "boolean", ce = !!m, Te = `${J ? M : ""} ${ce ? F : ""}`, Ce = Te.trim().length > 0 ? Te.trim() : void 0, Ve = (b == null ? void 0 : b.id) || `${D}-label`, yt = p && /* @__PURE__ */ y.jsx(
    si,
    {
      labelElement: w,
      id: Ve,
      htmlFor: H,
      required: G,
      ...ae,
      ...b,
      children: p
    },
    "label"
  ), Ne = ce && /* @__PURE__ */ y.jsx(
    ii,
    {
      ...C,
      ...ae,
      size: (C == null ? void 0 : C.size) || ae.size,
      id: (C == null ? void 0 : C.id) || F,
      children: m
    },
    "description"
  ), hn = /* @__PURE__ */ y.jsx(Cl, { children: f(S) }, "input"), Jt = J && /* @__PURE__ */ Li(
    ai,
    {
      ...v,
      ...ae,
      size: (v == null ? void 0 : v.size) || ae.size,
      key: "error",
      id: (v == null ? void 0 : v.id) || M
    },
    g
  ), pn = h.map((gn) => {
    switch (gn) {
      case "label":
        return yt;
      case "input":
        return hn;
      case "description":
        return Ne;
      case "error":
        return Jt;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ y.jsx(
    wb,
    {
      value: {
        getStyles: Z,
        describedBy: Ce,
        inputId: H,
        labelId: Ve,
        ..._b(h, { hasDescription: ce, hasError: J })
      },
      children: /* @__PURE__ */ y.jsx(
        Q,
        {
          ref: e,
          variant: u,
          size: l,
          mod: [{ error: !!g }, j],
          ...Z("root"),
          ...V,
          children: pn
        }
      )
    }
  );
});
Ja.classes = gt;
Ja.displayName = "@mantine/core/InputWrapper";
const Rb = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Nb = (n, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Re(e.size, "input-height"),
    "--input-fz": it(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : It(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? A(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? A(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Re(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Be = Gt((n, e) => {
  const t = q("Input", Rb, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    required: c,
    __staticSelector: l,
    __stylesApiProps: u,
    size: d,
    wrapperProps: f,
    error: h,
    disabled: p,
    leftSection: g,
    leftSectionProps: m,
    leftSectionWidth: b,
    rightSection: C,
    rightSectionProps: v,
    rightSectionWidth: w,
    rightSectionPointerEvents: S,
    leftSectionPointerEvents: E,
    variant: k,
    vars: I,
    pointer: x,
    multiline: j,
    radius: V,
    id: Z,
    withAria: ae,
    withErrorStyles: D,
    mod: G,
    inputSize: M,
    ...F
  } = t, { styleProps: H, rest: J } = Jo(F), ce = Jr(), Te = { offsetBottom: ce == null ? void 0 : ce.offsetBottom, offsetTop: ce == null ? void 0 : ce.offsetTop }, Ce = pe({
    name: ["Input", l],
    props: u || t,
    classes: gt,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    stylesCtx: Te,
    rootSelector: "wrapper",
    vars: I,
    varsResolver: Nb
  }), Ve = ae ? {
    required: c,
    disabled: p,
    "aria-invalid": !!h,
    "aria-describedby": ce == null ? void 0 : ce.describedBy,
    id: (ce == null ? void 0 : ce.inputId) || Z
  } : {};
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ...Ce("wrapper"),
      ...H,
      ...f,
      mod: [
        {
          error: !!h && D,
          pointer: x,
          disabled: p,
          multiline: j,
          "data-with-right-section": !!C,
          "data-with-left-section": !!g
        },
        G
      ],
      variant: k,
      size: d,
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
          Q,
          {
            component: "input",
            ...J,
            ...Ve,
            ref: e,
            required: c,
            mod: { disabled: p, error: !!h && D },
            variant: k,
            __size: M,
            ...Ce("input")
          }
        ),
        C && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...v,
            "data-position": "right",
            ...Ce("section", {
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
Be.Wrapper = Ja;
Be.Label = si;
Be.Error = ai;
Be.Description = ii;
Be.Placeholder = Qa;
Be.displayName = "@mantine/core/Input";
function Pb(n, e, t) {
  const r = q(n, e, t), {
    label: o,
    description: i,
    error: a,
    required: s,
    classNames: c,
    styles: l,
    className: u,
    unstyled: d,
    __staticSelector: f,
    __stylesApiProps: h,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    wrapperProps: b,
    id: C,
    size: v,
    style: w,
    inputContainer: S,
    inputWrapperOrder: E,
    withAsterisk: k,
    variant: I,
    vars: x,
    mod: j,
    ...V
  } = r, { styleProps: Z, rest: ae } = Jo(V), D = {
    label: o,
    description: i,
    error: a,
    required: s,
    classNames: c,
    className: u,
    __staticSelector: f,
    __stylesApiProps: h || r,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    unstyled: d,
    styles: l,
    size: v,
    style: w,
    inputContainer: S,
    inputWrapperOrder: E,
    withAsterisk: k,
    variant: I,
    id: C,
    mod: j,
    ...b
  };
  return {
    ...ae,
    classNames: c,
    styles: l,
    unstyled: d,
    wrapperProps: { ...D, ...Z },
    inputProps: {
      required: s,
      classNames: c,
      styles: l,
      unstyled: d,
      size: v,
      __staticSelector: f,
      __stylesApiProps: h || r,
      error: a,
      variant: I,
      id: C
    }
  };
}
const Ob = {
  __staticSelector: "InputBase",
  withAria: !0
}, Yt = Gt((n, e) => {
  const { inputProps: t, wrapperProps: r, ...o } = Pb("InputBase", Ob, n);
  return /* @__PURE__ */ y.jsx(Be.Wrapper, { ...r, children: /* @__PURE__ */ y.jsx(Be, { ...t, ...o, ref: e }) });
});
Yt.classes = { ...Be.classes, ...Be.Wrapper.classes };
Yt.displayName = "@mantine/core/InputBase";
const [Mb, Xa] = lr(
  "Accordion component was not found in the tree"
);
function Za({ style: n, size: e = 16, ...t }) {
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...n, width: A(e), height: A(e), display: "block" },
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
Za.displayName = "@mantine/core/AccordionChevron";
const [xb, Ju] = lr("Accordion.Item component was not found in the tree");
var Xr = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const Db = {}, es = se((n, e) => {
  const {
    classNames: t,
    className: r,
    style: o,
    styles: i,
    vars: a,
    chevron: s,
    icon: c,
    onClick: l,
    onKeyDown: u,
    children: d,
    disabled: f,
    mod: h,
    ...p
  } = q("AccordionControl", Db, n), { value: g } = Ju(), m = Xa(), b = m.isItemActive(g), C = typeof m.order == "number", v = `h${m.order}`, w = /* @__PURE__ */ y.jsxs(
    Ln,
    {
      ...p,
      ...m.getStyles("control", { className: r, classNames: t, style: o, styles: i, variant: m.variant }),
      unstyled: m.unstyled,
      mod: [
        "accordion-control",
        { active: b, "chevron-position": m.chevronPosition, disabled: f },
        h
      ],
      ref: e,
      onClick: (S) => {
        l == null || l(S), m.onChange(g);
      },
      type: "button",
      disabled: f,
      "aria-expanded": b,
      "aria-controls": m.getRegionId(g),
      id: m.getControlId(g),
      onKeyDown: jg({
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
            children: s || m.chevron
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
es.displayName = "@mantine/core/AccordionControl";
es.classes = Xr;
const Lb = {}, ts = se((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, value: s, mod: c, ...l } = q(
    "AccordionItem",
    Lb,
    n
  ), u = Xa();
  return /* @__PURE__ */ y.jsx(xb, { value: { value: s }, children: /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      mod: [{ active: u.isItemActive(s) }, c],
      ...u.getStyles("item", { className: r, classNames: t, styles: i, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
ts.displayName = "@mantine/core/AccordionItem";
ts.classes = Xr;
const jb = {}, ns = se((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, children: s, ...c } = q(
    "AccordionPanel",
    jb,
    n
  ), { value: l } = Ju(), u = Xa();
  return /* @__PURE__ */ y.jsx(
    yu,
    {
      ref: e,
      ...u.getStyles("panel", { className: r, classNames: t, style: o, styles: i }),
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
ns.displayName = "@mantine/core/AccordionPanel";
ns.classes = Xr;
const Fb = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ y.jsx(Za, {})
}, Ub = (n, { transitionDuration: e, chevronSize: t, radius: r }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : A(t),
    "--accordion-radius": r === void 0 ? void 0 : It(r)
  }
});
function Pe(n) {
  const e = q("Accordion", Fb, n), {
    classNames: t,
    className: r,
    style: o,
    styles: i,
    unstyled: a,
    vars: s,
    children: c,
    multiple: l,
    value: u,
    defaultValue: d,
    onChange: f,
    id: h,
    loop: p,
    transitionDuration: g,
    disableChevronRotation: m,
    chevronPosition: b,
    chevronSize: C,
    order: v,
    chevron: w,
    variant: S,
    radius: E,
    ...k
  } = e, I = un(h), [x, j] = Nn({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), V = (D) => Array.isArray(x) ? x.includes(D) : D === x, Z = (D) => {
    const G = Array.isArray(x) ? x.includes(D) ? x.filter((M) => M !== D) : [...x, D] : D === x ? null : D;
    j(G);
  }, ae = pe({
    name: "Accordion",
    classes: Xr,
    props: e,
    className: r,
    style: o,
    classNames: t,
    styles: i,
    unstyled: a,
    vars: s,
    varsResolver: Ub
  });
  return /* @__PURE__ */ y.jsx(
    Mb,
    {
      value: {
        isItemActive: V,
        onChange: Z,
        getControlId: vc(
          `${I}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: vc(
          `${I}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: m,
        chevronPosition: b,
        order: v,
        chevron: w,
        loop: p,
        getStyles: ae,
        variant: S,
        unstyled: a
      },
      children: /* @__PURE__ */ y.jsx(Q, { ...ae("root"), id: I, ...k, variant: S, "data-accordion": !0, children: c })
    }
  );
}
const Hb = (n) => n;
Pe.extend = Hb;
Pe.classes = Xr;
Pe.displayName = "@mantine/core/Accordion";
Pe.Item = ts;
Pe.Panel = ns;
Pe.Control = es;
Pe.Chevron = Za;
var Xu = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const Bb = {}, zb = (n, { radius: e, color: t, variant: r, autoContrast: o }) => {
  const i = n.variantColorResolver({
    color: t || n.primaryColor,
    theme: n,
    variant: r || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : It(e),
      "--alert-bg": t || r ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": t || r ? i.border : void 0
    }
  };
}, rs = se((n, e) => {
  const t = q("Alert", Bb, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    radius: l,
    color: u,
    title: d,
    children: f,
    id: h,
    icon: p,
    withCloseButton: g,
    onClose: m,
    closeButtonLabel: b,
    variant: C,
    autoContrast: v,
    ...w
  } = t, S = pe({
    name: "Alert",
    classes: Xu,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: zb
  }), E = un(h), k = d && `${E}-title` || void 0, I = `${E}-body`;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      id: E,
      ...S("root", { variant: C }),
      variant: C,
      ref: e,
      ...w,
      role: "alert",
      "aria-describedby": I,
      "aria-labelledby": k,
      children: /* @__PURE__ */ y.jsxs("div", { ...S("wrapper"), children: [
        p && /* @__PURE__ */ y.jsx("div", { ...S("icon"), children: p }),
        /* @__PURE__ */ y.jsxs("div", { ...S("body"), children: [
          d && /* @__PURE__ */ y.jsx("div", { ...S("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ y.jsx("span", { id: k, ...S("label"), children: d }) }),
          f && /* @__PURE__ */ y.jsx("div", { id: I, ...S("message"), "data-variant": C, children: f })
        ] }),
        g && /* @__PURE__ */ y.jsx(
          fr,
          {
            ...S("closeButton"),
            onClick: m,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": b,
            unstyled: s
          }
        )
      ] })
    }
  );
});
rs.classes = Xu;
rs.displayName = "@mantine/core/Alert";
var Zu = { root: "m_b6d8b162" };
function $b(n) {
  if (n === "start")
    return "start";
  if (n === "end" || n)
    return "end";
}
const Kb = {
  inherit: !1
}, qb = (n, { variant: e, lineClamp: t, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": it(o),
    "--text-lh": zg(o),
    "--text-gradient": e === "gradient" ? ta(r, n) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": i ? on(i, n) : void 0
  }
}), Do = Gt((n, e) => {
  const t = q("Text", Kb, n), {
    lineClamp: r,
    truncate: o,
    inline: i,
    inherit: a,
    gradient: s,
    span: c,
    __staticSelector: l,
    vars: u,
    className: d,
    style: f,
    classNames: h,
    styles: p,
    unstyled: g,
    variant: m,
    mod: b,
    size: C,
    ...v
  } = t, w = pe({
    name: ["Text", l],
    props: t,
    classes: Zu,
    className: d,
    style: f,
    classNames: h,
    styles: p,
    unstyled: g,
    vars: u,
    varsResolver: qb
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
          "data-truncate": $b(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": a
        },
        b
      ],
      size: C,
      ...v
    }
  );
});
Do.classes = Zu;
Do.displayName = "@mantine/core/Text";
function ed(n) {
  return typeof n == "string" ? { value: n, label: n } : "value" in n && !("label" in n) ? { value: n.value, label: n.value, disabled: n.disabled } : typeof n == "number" ? { value: n.toString(), label: n.toString() } : "group" in n ? {
    group: n.group,
    items: n.items.map((e) => ed(e))
  } : n;
}
function td(n) {
  return n ? n.map((e) => ed(e)) : [];
}
function os(n) {
  return n.reduce((e, t) => "group" in t ? { ...e, ...os(t.items) } : (e[t.value] = t, e), {});
}
var Ze = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Vb = {
  error: null
}, Gb = (n, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Re(e, "combobox-chevron-size")
  }
}), is = se((n, e) => {
  const t = q("ComboboxChevron", Vb, n), { size: r, error: o, style: i, className: a, classNames: s, styles: c, unstyled: l, vars: u, mod: d, ...f } = t, h = pe({
    name: "ComboboxChevron",
    classes: Ze,
    props: t,
    style: i,
    className: a,
    classNames: s,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: Gb,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      component: "svg",
      ...f,
      ...h("chevron"),
      size: r,
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
is.classes = Ze;
is.displayName = "@mantine/core/ComboboxChevron";
const [Wb, mt] = lr(
  "Combobox component was not found in tree"
), nd = ye(
  ({ size: n, onMouseDown: e, onClick: t, onClear: r, ...o }, i) => /* @__PURE__ */ y.jsx(
    fr,
    {
      ref: i,
      size: n || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...o,
      onMouseDown: (a) => {
        a.preventDefault(), e == null || e(a);
      },
      onClick: (a) => {
        r(), t == null || t(a);
      }
    }
  )
);
nd.displayName = "@mantine/core/ComboboxClearButton";
const Yb = {}, as = se((n, e) => {
  const { classNames: t, styles: r, className: o, style: i, hidden: a, ...s } = q(
    "ComboboxDropdown",
    Yb,
    n
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    dn.Dropdown,
    {
      ...s,
      ref: e,
      role: "presentation",
      "data-hidden": a || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: t, styles: r })
    }
  );
});
as.classes = Ze;
as.displayName = "@mantine/core/ComboboxDropdown";
const Qb = {
  refProp: "ref"
}, rd = se((n, e) => {
  const { children: t, refProp: r } = q("ComboboxDropdownTarget", Qb, n);
  if (mt(), !Vr(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ y.jsx(dn.Target, { ref: e, refProp: r, children: t });
});
rd.displayName = "@mantine/core/ComboboxDropdownTarget";
const Jb = {}, ss = se((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, ...s } = q(
    "ComboboxEmpty",
    Jb,
    n
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("empty", { className: r, classNames: t, styles: i, style: o }),
      ...s
    }
  );
});
ss.classes = Ze;
ss.displayName = "@mantine/core/ComboboxEmpty";
function cs({
  onKeyDown: n,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: i
}) {
  const a = mt(), [s, c] = X(null), l = (d) => {
    if (n == null || n(d), !a.readOnly && e) {
      if (d.nativeEvent.isComposing)
        return;
      if (d.nativeEvent.code === "ArrowDown" && (d.preventDefault(), a.store.dropdownOpened ? c(a.store.selectNextOption()) : (a.store.openDropdown("keyboard"), c(a.store.selectActiveOption()))), d.nativeEvent.code === "ArrowUp" && (d.preventDefault(), a.store.dropdownOpened ? c(a.store.selectPreviousOption()) : (a.store.openDropdown("keyboard"), c(a.store.selectActiveOption()))), d.nativeEvent.code === "Enter" || d.nativeEvent.code === "NumpadEnter") {
        if (d.nativeEvent.keyCode === 229)
          return;
        const f = a.store.getSelectedOptionIndex();
        a.store.dropdownOpened && f !== -1 ? (d.preventDefault(), a.store.clickSelectedOption()) : o === "button" && (d.preventDefault(), a.store.openDropdown("keyboard"));
      }
      d.nativeEvent.code === "Escape" && a.store.closeDropdown("keyboard"), d.nativeEvent.code === "Space" && o === "button" && (d.preventDefault(), a.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...t ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(a.store.listId && a.store.dropdownOpened) || void 0,
      "aria-controls": a.store.listId,
      "aria-activedescendant": a.store.dropdownOpened && s || void 0,
      autoComplete: i,
      "data-expanded": a.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": a.store.dropdownOpened || void 0
    } : {},
    onKeyDown: l
  };
}
const Xb = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, od = se((n, e) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = q("ComboboxEventsTarget", Xb, n);
  if (!Vr(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), d = cs({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  });
  return qo(t, {
    ...d,
    ...l,
    [r]: ht(e, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
od.displayName = "@mantine/core/ComboboxEventsTarget";
const Zb = {}, ls = se((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, ...s } = q(
    "ComboboxFooter",
    Zb,
    n
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("footer", { className: r, classNames: t, style: o, styles: i }),
      ...s,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
ls.classes = Ze;
ls.displayName = "@mantine/core/ComboboxFooter";
const eC = {}, us = se((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, children: s, label: c, ...l } = q(
    "ComboboxGroup",
    eC,
    n
  ), u = mt();
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ref: e,
      ...u.getStyles("group", { className: r, classNames: t, style: o, styles: i }),
      ...l,
      children: [
        c && /* @__PURE__ */ y.jsx("div", { ...u.getStyles("groupLabel", { classNames: t, styles: i }), children: c }),
        s
      ]
    }
  );
});
us.classes = Ze;
us.displayName = "@mantine/core/ComboboxGroup";
const tC = {}, ds = se((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, ...s } = q(
    "ComboboxHeader",
    tC,
    n
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("header", { className: r, classNames: t, style: o, styles: i }),
      ...s,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
ds.classes = Ze;
ds.displayName = "@mantine/core/ComboboxHeader";
function id({
  value: n,
  valuesDivider: e = ",",
  ...t
}) {
  return /* @__PURE__ */ y.jsx(
    "input",
    {
      type: "hidden",
      value: Array.isArray(n) ? n.join(e) : n || "",
      ...t
    }
  );
}
id.displayName = "@mantine/core/ComboboxHiddenInput";
const nC = {}, fs = se((n, e) => {
  const t = q("ComboboxOption", nC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    vars: s,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: d,
    onMouseOver: f,
    disabled: h,
    selected: p,
    mod: g,
    ...m
  } = t, b = mt(), C = wl(), v = l || C;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...b.getStyles("option", { className: o, classNames: r, styles: a, style: i }),
      ...m,
      ref: e,
      id: v,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": h, "combobox-selected": p },
        g
      ],
      role: "option",
      onClick: (w) => {
        var S;
        h ? w.preventDefault() : ((S = b.onOptionSubmit) == null || S.call(b, t.value, t), c == null || c(w));
      },
      onMouseDown: (w) => {
        w.preventDefault(), d == null || d(w);
      },
      onMouseOver: (w) => {
        b.resetSelectionOnOptionHover && b.store.resetSelectedOption(), f == null || f(w);
      }
    }
  );
});
fs.classes = Ze;
fs.displayName = "@mantine/core/ComboboxOption";
const rC = {}, hs = se((n, e) => {
  const t = q("ComboboxOptions", rC, n), { classNames: r, className: o, style: i, styles: a, id: s, onMouseDown: c, labelledBy: l, ...u } = t, d = mt(), f = un(s);
  return Y(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...d.getStyles("options", { className: o, style: i, classNames: r, styles: a }),
      ...u,
      id: f,
      role: "listbox",
      "aria-labelledby": l,
      onMouseDown: (h) => {
        h.preventDefault(), c == null || c(h);
      }
    }
  );
});
hs.classes = Ze;
hs.displayName = "@mantine/core/ComboboxOptions";
const oC = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ps = se((n, e) => {
  const t = q("ComboboxSearch", oC, n), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: a,
    withAriaAttributes: s,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = t, f = mt(), h = f.getStyles("search"), p = cs({
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
      ref: ht(e, f.store.searchRef),
      classNames: [{ input: h.className }, r],
      styles: [{ input: h.style }, o],
      size: u || f.size,
      ...p,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
ps.classes = Ze;
ps.displayName = "@mantine/core/ComboboxSearch";
const iC = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, ad = se((n, e) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = q("ComboboxTarget", iC, n);
  if (!Vr(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), d = cs({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  }), f = qo(t, {
    ...d,
    ...l
  });
  return /* @__PURE__ */ y.jsx(dn.Target, { ref: ht(e, u.store.targetRef), children: f });
});
ad.displayName = "@mantine/core/ComboboxTarget";
function aC(n, e, t) {
  for (let r = n - 1; r >= 0; r -= 1)
    if (!e[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (t) {
    for (let r = e.length - 1; r > -1; r -= 1)
      if (!e[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return n;
}
function sC(n, e, t) {
  for (let r = n + 1; r < e.length; r += 1)
    if (!e[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (t) {
    for (let r = 0; r < e.length; r += 1)
      if (!e[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return n;
}
function cC(n) {
  for (let e = 0; e < n.length; e += 1)
    if (!n[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function ci({
  defaultOpened: n,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: a = "instant"
} = {}) {
  const [s, c] = Nn({
    value: e,
    defaultValue: n,
    finalValue: !1,
    onChange: t
  }), l = ue(null), u = ue(-1), d = ue(null), f = ue(null), h = ue(-1), p = ue(-1), g = ue(-1), m = me(
    (M = "unknown") => {
      s || (c(!0), o == null || o(M));
    },
    [c, o, s]
  ), b = me(
    (M = "unknown") => {
      s && (c(!1), r == null || r(M));
    },
    [c, r, s]
  ), C = me(
    (M = "unknown") => {
      s ? b(M) : m(M);
    },
    [b, m, s]
  ), v = me(() => {
    const M = document.querySelector(`#${l.current} [data-combobox-selected]`);
    M == null || M.removeAttribute("data-combobox-selected"), M == null || M.removeAttribute("aria-selected");
  }, []), w = me(
    (M) => {
      const F = document.getElementById(l.current), H = F == null ? void 0 : F.querySelectorAll("[data-combobox-option]");
      if (!H)
        return null;
      const J = M >= H.length ? 0 : M < 0 ? H.length - 1 : M;
      return u.current = J, H != null && H[J] && !H[J].hasAttribute("data-combobox-disabled") ? (v(), H[J].setAttribute("data-combobox-selected", "true"), H[J].setAttribute("aria-selected", "true"), H[J].scrollIntoView({ block: "nearest", behavior: a }), H[J].id) : null;
    },
    [a, v]
  ), S = me(() => {
    const M = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (M) {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), H = Array.from(F).findIndex((J) => J === M);
      return w(H);
    }
    return w(0);
  }, [w]), E = me(
    () => w(
      sC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), k = me(
    () => w(
      aC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), I = me(
    () => w(
      cC(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
  ), x = me(
    (M = "selected", F) => {
      g.current = window.setTimeout(() => {
        var ce;
        const H = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), J = Array.from(H).findIndex(
          (Te) => Te.hasAttribute(`data-combobox-${M}`)
        );
        u.current = J, F != null && F.scrollIntoView && ((ce = H[J]) == null || ce.scrollIntoView({ block: "nearest", behavior: a }));
      }, 0);
    },
    []
  ), j = me(() => {
    u.current = -1, v();
  }, [v]), V = me(() => {
    const M = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), F = M == null ? void 0 : M[u.current];
    F == null || F.click();
  }, []), Z = me((M) => {
    l.current = M;
  }, []), ae = me(() => {
    h.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), D = me(() => {
    p.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), G = me(() => u.current, []);
  return Y(
    () => () => {
      window.clearTimeout(h.current), window.clearTimeout(p.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: s,
    openDropdown: m,
    closeDropdown: b,
    toggleDropdown: C,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: G,
    selectOption: w,
    selectFirstOption: I,
    selectActiveOption: S,
    selectNextOption: E,
    selectPreviousOption: k,
    resetSelectedOption: j,
    updateSelectedOptionIndex: x,
    listId: l.current,
    setListId: Z,
    clickSelectedOption: V,
    searchRef: d,
    focusSearchInput: ae,
    targetRef: f,
    focusTarget: D
  };
}
const lC = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, uC = (n, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": it(e),
    "--combobox-option-padding": Re(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : A(t),
    "--combobox-option-fz": it(e),
    "--combobox-option-padding": Re(e, "combobox-option-padding")
  }
});
function le(n) {
  const e = q("Combobox", lC, n), {
    classNames: t,
    styles: r,
    unstyled: o,
    children: i,
    store: a,
    vars: s,
    onOptionSubmit: c,
    onClose: l,
    size: u,
    dropdownPadding: d,
    resetSelectionOnOptionHover: f,
    __staticSelector: h,
    readOnly: p,
    ...g
  } = e, m = ci(), b = a || m, C = pe({
    name: h || "Combobox",
    classes: Ze,
    props: e,
    classNames: t,
    styles: r,
    unstyled: o,
    vars: s,
    varsResolver: uC
  }), v = () => {
    l == null || l(), b.closeDropdown();
  };
  return /* @__PURE__ */ y.jsx(
    Wb,
    {
      value: {
        getStyles: C,
        store: b,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: f,
        readOnly: p
      },
      children: /* @__PURE__ */ y.jsx(
        dn,
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
const dC = (n) => n;
le.extend = dC;
le.classes = Ze;
le.displayName = "@mantine/core/Combobox";
le.Target = ad;
le.Dropdown = as;
le.Options = hs;
le.Option = fs;
le.Search = ps;
le.Empty = ss;
le.Chevron = is;
le.Footer = ls;
le.Header = ds;
le.EventsTarget = od;
le.DropdownTarget = rd;
le.Group = us;
le.ClearButton = nd;
le.HiddenInput = id;
var sd = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const fC = sd, cd = ye(
  ({
    __staticSelector: n,
    __stylesApiProps: e,
    className: t,
    classNames: r,
    styles: o,
    unstyled: i,
    children: a,
    label: s,
    description: c,
    id: l,
    disabled: u,
    error: d,
    size: f,
    labelPosition: h = "left",
    bodyElement: p = "div",
    labelElement: g = "label",
    variant: m,
    style: b,
    vars: C,
    mod: v,
    ...w
  }, S) => {
    const E = pe({
      name: n,
      props: e,
      className: t,
      style: b,
      classes: sd,
      classNames: r,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ y.jsx(
      Q,
      {
        ...E("root"),
        ref: S,
        __vars: {
          "--label-fz": it(f),
          "--label-lh": Re(f, "label-lh")
        },
        mod: [{ "label-position": h }, v],
        variant: m,
        size: f,
        ...w,
        children: /* @__PURE__ */ y.jsxs(
          Q,
          {
            component: p,
            htmlFor: p === "label" ? l : void 0,
            ...E("body"),
            children: [
              a,
              /* @__PURE__ */ y.jsxs("div", { ...E("labelWrapper"), "data-disabled": u || void 0, children: [
                s && /* @__PURE__ */ y.jsx(
                  Q,
                  {
                    component: g,
                    htmlFor: g === "label" ? l : void 0,
                    ...E("label"),
                    "data-disabled": u || void 0,
                    children: s
                  }
                ),
                c && /* @__PURE__ */ y.jsx(Be.Description, { size: f, __inheritStyles: !1, ...E("description"), children: c }),
                d && typeof d != "boolean" && /* @__PURE__ */ y.jsx(Be.Error, { size: f, __inheritStyles: !1, ...E("error"), children: d })
              ] })
            ]
          }
        )
      }
    );
  }
);
cd.displayName = "@mantine/core/InlineInput";
const ld = Mn(null), hC = ld.Provider, ud = () => ln(ld), [pC, gC] = Yl();
var dd = { card: "m_26775b0a" };
const mC = {
  withBorder: !0
}, yC = (n, { radius: e }) => ({
  card: {
    "--card-radius": It(e)
  }
}), gs = se((n, e) => {
  const t = q("CheckboxCard", mC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    checked: l,
    mod: u,
    withBorder: d,
    value: f,
    onClick: h,
    ...p
  } = t, g = pe({
    name: "CheckboxCard",
    classes: dd,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: yC,
    rootSelector: "card"
  }), m = ud(), b = typeof l == "boolean" ? l : (m == null ? void 0 : m.value.includes(f || "")) || !1;
  return /* @__PURE__ */ y.jsx(pC, { value: { checked: b }, children: /* @__PURE__ */ y.jsx(
    Ln,
    {
      ref: e,
      mod: [{ "with-border": d, checked: b }, u],
      ...g("card"),
      ...p,
      role: "checkbox",
      "aria-checked": b,
      onClick: (C) => {
        h == null || h(C), m == null || m.onChange(f || "");
      }
    }
  ) });
});
gs.displayName = "@mantine/core/CheckboxCard";
gs.classes = dd;
function vC({ children: n, role: e }) {
  const t = Jr();
  return t ? /* @__PURE__ */ y.jsx("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy, children: n }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: n });
}
const bC = {}, ms = se((n, e) => {
  const { value: t, defaultValue: r, onChange: o, size: i, wrapperProps: a, children: s, readOnly: c, ...l } = q("CheckboxGroup", bC, n), [u, d] = Nn({
    value: t,
    defaultValue: r,
    finalValue: [],
    onChange: o
  }), f = (h) => {
    const p = typeof h == "string" ? h : h.currentTarget.value;
    !c && d(
      u.includes(p) ? u.filter((g) => g !== p) : [...u, p]
    );
  };
  return /* @__PURE__ */ y.jsx(hC, { value: { value: u, onChange: f, size: i }, children: /* @__PURE__ */ y.jsx(
    Be.Wrapper,
    {
      size: i,
      ref: e,
      ...a,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ y.jsx(vC, { role: "group", children: s })
    }
  ) });
});
ms.classes = Be.Wrapper.classes;
ms.displayName = "@mantine/core/CheckboxGroup";
function ys({ size: n, style: e, ...t }) {
  const r = n !== void 0 ? { width: A(n), height: A(n), ...e } : e;
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
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
function fd({ indeterminate: n, ...e }) {
  return n ? /* @__PURE__ */ y.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e,
      children: /* @__PURE__ */ y.jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    }
  ) : /* @__PURE__ */ y.jsx(ys, { ...e });
}
var hd = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const CC = {
  icon: fd
}, wC = (n, { radius: e, color: t, size: r, iconColor: o, variant: i, autoContrast: a }) => {
  const s = Dn({ color: t || n.primaryColor, theme: n }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    indicator: {
      "--checkbox-size": Re(r, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : It(e),
      "--checkbox-color": i === "outline" ? c : on(t, n),
      "--checkbox-icon-color": o ? on(o, n) : du(a, n) ? Oa({ color: t, theme: n, autoContrast: a }) : void 0
    }
  };
}, vs = se((n, e) => {
  const t = q("CheckboxIndicator", CC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    icon: l,
    indeterminate: u,
    radius: d,
    color: f,
    iconColor: h,
    autoContrast: p,
    checked: g,
    mod: m,
    variant: b,
    disabled: C,
    ...v
  } = t, w = l, S = pe({
    name: "CheckboxIndicator",
    classes: hd,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: wC,
    rootSelector: "indicator"
  }), E = gC(), k = typeof g == "boolean" || typeof u == "boolean" ? g || u : (E == null ? void 0 : E.checked) || !1;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...S("indicator", { variant: b }),
      variant: b,
      mod: [{ checked: k, disabled: C }, m],
      ...v,
      children: /* @__PURE__ */ y.jsx(w, { indeterminate: u, ...S("icon") })
    }
  );
});
vs.displayName = "@mantine/core/CheckboxIndicator";
vs.classes = hd;
var pd = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const SC = {
  labelPosition: "right",
  icon: fd
}, TC = (n, { radius: e, color: t, size: r, iconColor: o, variant: i, autoContrast: a }) => {
  const s = Dn({ color: t || n.primaryColor, theme: n }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Re(r, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : It(e),
      "--checkbox-color": i === "outline" ? c : on(t, n),
      "--checkbox-icon-color": o ? on(o, n) : du(a, n) ? Oa({ color: t, theme: n, autoContrast: a }) : void 0
    }
  };
}, jn = se((n, e) => {
  const t = q("Checkbox", SC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    color: l,
    label: u,
    id: d,
    size: f,
    radius: h,
    wrapperProps: p,
    children: g,
    checked: m,
    labelPosition: b,
    description: C,
    error: v,
    disabled: w,
    variant: S,
    indeterminate: E,
    icon: k,
    rootRef: I,
    iconColor: x,
    onChange: j,
    autoContrast: V,
    mod: Z,
    ...ae
  } = t, D = ud(), G = f || (D == null ? void 0 : D.size), M = k, F = pe({
    name: "Checkbox",
    props: t,
    classes: pd,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: TC
  }), { styleProps: H, rest: J } = Jo(ae), ce = un(d), Te = D ? {
    checked: D.value.includes(J.value),
    onChange: (Ce) => {
      D.onChange(Ce), j == null || j(Ce);
    }
  } : {};
  return /* @__PURE__ */ y.jsx(
    cd,
    {
      ...F("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: ce,
      size: G,
      labelPosition: b,
      label: u,
      description: C,
      error: v,
      disabled: w,
      classNames: r,
      styles: a,
      unstyled: s,
      "data-checked": Te.checked || m || void 0,
      variant: S,
      ref: I,
      mod: Z,
      ...H,
      ...p,
      children: /* @__PURE__ */ y.jsxs(Q, { ...F("inner"), mod: { "data-label-position": b }, children: [
        /* @__PURE__ */ y.jsx(
          Q,
          {
            component: "input",
            id: ce,
            ref: e,
            checked: m,
            disabled: w,
            mod: { error: !!v, indeterminate: E },
            ...F("input", { focusable: !0, variant: S }),
            onChange: j,
            ...J,
            ...Te,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ y.jsx(M, { indeterminate: E, ...F("icon") })
      ] })
    }
  );
});
jn.classes = { ...pd, ...fC };
jn.displayName = "@mantine/core/Checkbox";
jn.Group = ms;
jn.Indicator = vs;
jn.Card = gs;
function Hr(n) {
  return "group" in n;
}
function gd({
  options: n,
  search: e,
  limit: t
}) {
  const r = e.trim().toLowerCase(), o = [];
  for (let i = 0; i < n.length; i += 1) {
    const a = n[i];
    if (o.length === t)
      return o;
    Hr(a) && o.push({
      group: a.group,
      items: gd({
        options: a.items,
        search: e,
        limit: t - o.length
      })
    }), Hr(a) || a.label.toLowerCase().includes(r) && o.push(a);
  }
  return o;
}
function EC(n) {
  if (n.length === 0)
    return !0;
  for (const e of n)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function md(n, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(n))
    for (const t of n)
      if (Hr(t))
        md(t.items, e);
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
function IC(n, e) {
  return Array.isArray(n) ? n.includes(e) : n === e;
}
function yd({
  data: n,
  withCheckIcon: e,
  value: t,
  checkIconPosition: r,
  unstyled: o,
  renderOption: i
}) {
  if (!Hr(n)) {
    const s = IC(t, n.value), c = e && s && /* @__PURE__ */ y.jsx(ys, { className: Ze.optionsDropdownCheckIcon }), l = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      r === "left" && c,
      /* @__PURE__ */ y.jsx("span", { children: n.label }),
      r === "right" && c
    ] });
    return /* @__PURE__ */ y.jsx(
      le.Option,
      {
        value: n.value,
        disabled: n.disabled,
        className: qt({ [Ze.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": s || void 0,
        "aria-selected": s,
        active: s,
        children: typeof i == "function" ? i({ option: n, checked: s }) : l
      }
    );
  }
  const a = n.items.map((s) => /* @__PURE__ */ y.jsx(
    yd,
    {
      data: s,
      value: t,
      unstyled: o,
      withCheckIcon: e,
      checkIconPosition: r,
      renderOption: i
    },
    s.value
  ));
  return /* @__PURE__ */ y.jsx(le.Group, { label: n.group, children: a });
}
function vd({
  data: n,
  hidden: e,
  hiddenWhenEmpty: t,
  filter: r,
  search: o,
  limit: i,
  maxDropdownHeight: a,
  withScrollArea: s = !0,
  filterOptions: c = !0,
  withCheckIcon: l = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: f,
  unstyled: h,
  labelId: p,
  renderOption: g,
  scrollAreaProps: m,
  "aria-label": b
}) {
  md(n);
  const v = typeof o == "string" ? (r || gd)({
    options: n,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : n, w = EC(v), S = v.map((E) => /* @__PURE__ */ y.jsx(
    yd,
    {
      data: E,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: h,
      renderOption: g
    },
    Hr(E) ? E.group : E.value
  ));
  return /* @__PURE__ */ y.jsx(le.Dropdown, { hidden: e || t && w, children: /* @__PURE__ */ y.jsxs(le.Options, { labelledBy: p, "aria-label": b, children: [
    s ? /* @__PURE__ */ y.jsx(
      Wr.Autosize,
      {
        mah: a ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...m,
        children: S
      }
    ) : S,
    w && f && /* @__PURE__ */ y.jsx(le.Empty, { children: f })
  ] }) });
}
const _C = {}, bs = se((n, e) => {
  const t = q("Autocomplete", _C, n), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: a,
    dropdownOpened: s,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: d,
    onBlur: f,
    onClick: h,
    onChange: p,
    data: g,
    value: m,
    defaultValue: b,
    selectFirstOptionOnChange: C,
    onOptionSubmit: v,
    comboboxProps: w,
    readOnly: S,
    disabled: E,
    filter: k,
    limit: I,
    withScrollArea: x,
    maxDropdownHeight: j,
    size: V,
    id: Z,
    renderOption: ae,
    autoComplete: D,
    scrollAreaProps: G,
    ...M
  } = t, F = un(Z), H = td(g), J = os(H), [ce, Te] = Nn({
    value: m,
    defaultValue: b,
    finalValue: "",
    onChange: p
  }), Ce = ci({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Ce.resetSelectedOption();
    }
  }), { resolvedClassNames: Ve, resolvedStyles: yt } = uu({
    props: t,
    styles: o,
    classNames: r
  });
  return Y(() => {
    C && Ce.selectFirstOption();
  }, [C, ce]), /* @__PURE__ */ y.jsxs(
    le,
    {
      store: Ce,
      __staticSelector: "Autocomplete",
      classNames: Ve,
      styles: yt,
      unstyled: i,
      readOnly: S,
      onOptionSubmit: (Ne) => {
        v == null || v(Ne), Te(J[Ne].label), Ce.closeDropdown();
      },
      size: V,
      ...w,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { autoComplete: D, children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            ref: e,
            ...M,
            size: V,
            __staticSelector: "Autocomplete",
            disabled: E,
            readOnly: S,
            value: ce,
            onChange: (Ne) => {
              Te(Ne.currentTarget.value), Ce.openDropdown(), C && Ce.selectFirstOption();
            },
            onFocus: (Ne) => {
              Ce.openDropdown(), d == null || d(Ne);
            },
            onBlur: (Ne) => {
              Ce.closeDropdown(), f == null || f(Ne);
            },
            onClick: (Ne) => {
              Ce.openDropdown(), h == null || h(Ne);
            },
            classNames: Ve,
            styles: yt,
            unstyled: i,
            id: F
          }
        ) }),
        /* @__PURE__ */ y.jsx(
          vd,
          {
            data: H,
            hidden: S || E,
            filter: k,
            search: ce,
            limit: I,
            hiddenWhenEmpty: !0,
            withScrollArea: x,
            maxDropdownHeight: j,
            unstyled: i,
            labelId: M.label ? `${F}-label` : void 0,
            "aria-label": M.label ? void 0 : M["aria-label"],
            renderOption: ae,
            scrollAreaProps: G
          }
        )
      ]
    }
  );
});
bs.classes = { ...Yt.classes, ...le.classes };
bs.displayName = "@mantine/core/Autocomplete";
var li = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const Qc = {
  orientation: "horizontal"
}, kC = (n, { borderWidth: e }) => ({
  group: { "--button-border-width": A(e) }
}), Cs = se((n, e) => {
  const t = q("ButtonGroup", Qc, n), {
    className: r,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    mod: f,
    ...h
  } = q("ButtonGroup", Qc, n), p = pe({
    name: "ButtonGroup",
    props: t,
    classes: li,
    className: r,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: kC,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p("group"),
      ref: e,
      variant: d,
      mod: [{ "data-orientation": c }, f],
      role: "group",
      ...h
    }
  );
});
Cs.classes = li;
Cs.displayName = "@mantine/core/ButtonGroup";
const AC = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${A(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, RC = {}, NC = (n, { radius: e, color: t, gradient: r, variant: o, size: i, justify: a, autoContrast: s }) => {
  const c = n.variantColorResolver({
    color: t || n.primaryColor,
    theme: n,
    gradient: r,
    variant: o || "filled",
    autoContrast: s
  });
  return {
    root: {
      "--button-justify": a,
      "--button-height": Re(i, "button-height"),
      "--button-padding-x": Re(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? it(i.replace("compact-", "")) : it(i),
      "--button-radius": e === void 0 ? void 0 : It(e),
      "--button-bg": t || o ? c.background : void 0,
      "--button-hover": t || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": t || o ? c.border : void 0,
      "--button-hover-color": t || o ? c.hoverColor : void 0
    }
  };
}, Zr = Gt((n, e) => {
  const t = q("Button", RC, n), {
    style: r,
    vars: o,
    className: i,
    color: a,
    disabled: s,
    children: c,
    leftSection: l,
    rightSection: u,
    fullWidth: d,
    variant: f,
    radius: h,
    loading: p,
    loaderProps: g,
    gradient: m,
    classNames: b,
    styles: C,
    unstyled: v,
    "data-disabled": w,
    autoContrast: S,
    mod: E,
    ...k
  } = t, I = pe({
    name: "Button",
    props: t,
    classes: li,
    className: i,
    style: r,
    classNames: b,
    styles: C,
    unstyled: v,
    vars: o,
    varsResolver: NC
  }), x = !!l, j = !!u;
  return /* @__PURE__ */ y.jsxs(
    Ln,
    {
      ref: e,
      ...I("root", { active: !s && !p && !w }),
      unstyled: v,
      variant: f,
      disabled: s || p,
      mod: [
        {
          disabled: s || w,
          loading: p,
          block: d,
          "with-left-section": x,
          "with-right-section": j
        },
        E
      ],
      ...k,
      children: [
        /* @__PURE__ */ y.jsx(ni, { mounted: !!p, transition: AC, duration: 150, children: (V) => /* @__PURE__ */ y.jsx(Q, { component: "span", ...I("loader", { style: V }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(
          Qr,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("span", { ...I("inner"), children: [
          l && /* @__PURE__ */ y.jsx(Q, { component: "span", ...I("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ y.jsx(Q, { component: "span", mod: { loading: p }, ...I("label"), children: c }),
          u && /* @__PURE__ */ y.jsx(Q, { component: "span", ...I("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
Zr.classes = li;
Zr.displayName = "@mantine/core/Button";
Zr.Group = Cs;
var bd = { root: "m_4451eb3a" };
const PC = {}, ws = Gt((n, e) => {
  const t = q("Center", PC, n), { classNames: r, className: o, style: i, styles: a, unstyled: s, vars: c, inline: l, mod: u, ...d } = t, f = pe({
    name: "Center",
    props: t,
    classes: bd,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, mod: [{ inline: l }, u], ...f("root"), ...d });
});
ws.classes = bd;
ws.displayName = "@mantine/core/Center";
var Cd = { root: "m_7485cace" };
const OC = {}, MC = (n, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Re(e, "container-size")
  }
}), Ss = se((n, e) => {
  const t = q("Container", OC, n), { classNames: r, className: o, style: i, styles: a, unstyled: s, vars: c, fluid: l, mod: u, ...d } = t, f = pe({
    name: "Container",
    classes: Cd,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: MC
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, mod: [{ fluid: l }, u], ...f("root"), ...d });
});
Ss.classes = Cd;
Ss.displayName = "@mantine/core/Container";
const xC = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Ts = se((n, e) => {
  const t = q("Select", xC, n), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: a,
    dropdownOpened: s,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: d,
    onBlur: f,
    onClick: h,
    onChange: p,
    data: g,
    value: m,
    defaultValue: b,
    selectFirstOptionOnChange: C,
    onOptionSubmit: v,
    comboboxProps: w,
    readOnly: S,
    disabled: E,
    filter: k,
    limit: I,
    withScrollArea: x,
    maxDropdownHeight: j,
    size: V,
    searchable: Z,
    rightSection: ae,
    checkIconPosition: D,
    withCheckIcon: G,
    nothingFoundMessage: M,
    name: F,
    form: H,
    searchValue: J,
    defaultSearchValue: ce,
    onSearchChange: Te,
    allowDeselect: Ce,
    error: Ve,
    rightSectionPointerEvents: yt,
    id: Ne,
    clearable: hn,
    clearButtonProps: Jt,
    hiddenInputProps: pn,
    renderOption: gn,
    onClear: mn,
    autoComplete: hr,
    scrollAreaProps: pr,
    ...xt
  } = t, Ee = Mr(() => td(g), [g]), Dt = Mr(() => os(Ee), [Ee]), Fn = un(Ne), [ze, yn, Un] = Nn({
    value: m,
    defaultValue: b,
    finalValue: null,
    onChange: p
  }), $e = typeof ze == "string" ? Dt[ze] : void 0, Lt = om($e), [Hn, lt] = Nn({
    value: J,
    defaultValue: ce,
    finalValue: $e ? $e.label : "",
    onChange: Te
  }), vt = ci({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: () => {
      u == null || u(), vt.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      l == null || l(), vt.resetSelectedOption();
    }
  }), { resolvedClassNames: xs, resolvedStyles: Ds } = uu({
    props: t,
    styles: o,
    classNames: r
  });
  Y(() => {
    C && vt.selectFirstOption();
  }, [C, ze]), Y(() => {
    m === null && lt(""), typeof m == "string" && $e && ((Lt == null ? void 0 : Lt.value) !== $e.value || (Lt == null ? void 0 : Lt.label) !== $e.label) && lt($e.label);
  }, [m, $e]);
  const Ls = hn && !!ze && !E && !S && /* @__PURE__ */ y.jsx(
    le.ClearButton,
    {
      size: V,
      ...Jt,
      onClear: () => {
        yn(null, null), lt(""), mn == null || mn();
      }
    }
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      le,
      {
        store: vt,
        __staticSelector: "Select",
        classNames: xs,
        styles: Ds,
        unstyled: i,
        readOnly: S,
        onOptionSubmit: (ut) => {
          v == null || v(ut);
          const jt = Ce && Dt[ut].value === ze ? null : Dt[ut], gi = jt ? jt.value : null;
          gi !== ze && yn(gi, jt), !Un && lt(typeof gi == "string" && (jt == null ? void 0 : jt.label) || ""), vt.closeDropdown();
        },
        size: V,
        ...w,
        children: [
          /* @__PURE__ */ y.jsx(le.Target, { targetType: Z ? "input" : "button", autoComplete: hr, children: /* @__PURE__ */ y.jsx(
            Yt,
            {
              id: Fn,
              ref: e,
              rightSection: ae || Ls || /* @__PURE__ */ y.jsx(le.Chevron, { size: V, error: Ve, unstyled: i }),
              rightSectionPointerEvents: yt || (Ls ? "all" : "none"),
              ...xt,
              size: V,
              __staticSelector: "Select",
              disabled: E,
              readOnly: S || !Z,
              value: Hn,
              onChange: (ut) => {
                lt(ut.currentTarget.value), vt.openDropdown(), C && vt.selectFirstOption();
              },
              onFocus: (ut) => {
                Z && vt.openDropdown(), d == null || d(ut);
              },
              onBlur: (ut) => {
                var jt;
                Z && vt.closeDropdown(), lt(ze != null && ((jt = Dt[ze]) == null ? void 0 : jt.label) || ""), f == null || f(ut);
              },
              onClick: (ut) => {
                Z ? vt.openDropdown() : vt.toggleDropdown(), h == null || h(ut);
              },
              classNames: xs,
              styles: Ds,
              unstyled: i,
              pointer: !Z,
              error: Ve
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            vd,
            {
              data: Ee,
              hidden: S || E,
              filter: k,
              search: Hn,
              limit: I,
              hiddenWhenEmpty: !M,
              withScrollArea: x,
              maxDropdownHeight: j,
              filterOptions: Z && ($e == null ? void 0 : $e.label) !== Hn,
              value: ze,
              checkIconPosition: D,
              withCheckIcon: G,
              nothingFoundMessage: M,
              unstyled: i,
              labelId: xt.label ? `${Fn}-label` : void 0,
              "aria-label": xt.label ? void 0 : xt["aria-label"],
              renderOption: gn,
              scrollAreaProps: pr
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      le.HiddenInput,
      {
        value: ze,
        name: F,
        form: H,
        disabled: E,
        ...pn
      }
    )
  ] });
});
Ts.classes = { ...Yt.classes, ...le.classes };
Ts.displayName = "@mantine/core/Select";
const DC = {}, wd = se((n, e) => {
  const { w: t, h: r, miw: o, mih: i, ...a } = q("Space", DC, n);
  return /* @__PURE__ */ y.jsx(Q, { ref: e, ...a, w: t, miw: o ?? t, h: r, mih: i ?? r });
});
wd.displayName = "@mantine/core/Space";
var Sd = { root: "m_6d731127" };
const LC = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, jC = (n, { gap: e, align: t, justify: r }) => ({
  root: {
    "--stack-gap": ka(e),
    "--stack-align": t,
    "--stack-justify": r
  }
}), Es = se((n, e) => {
  const t = q("Stack", LC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    align: l,
    justify: u,
    gap: d,
    variant: f,
    ...h
  } = t, p = pe({
    name: "Stack",
    props: t,
    classes: Sd,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: jC
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, ...p("root"), variant: f, ...h });
});
Es.classes = Sd;
Es.displayName = "@mantine/core/Stack";
const FC = {}, kn = se((n, e) => {
  const t = q("TextInput", FC, n);
  return /* @__PURE__ */ y.jsx(Yt, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
kn.classes = Yt.classes;
kn.displayName = "@mantine/core/TextInput";
const UC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function HC(n, e) {
  const t = e !== void 0 ? e : `h${n}`;
  return UC.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: A(t),
    fontWeight: `var(--mantine-h${n}-font-weight)`,
    lineHeight: `var(--mantine-h${n}-line-height)`
  };
}
var Td = { root: "m_8a5d1357" };
const BC = {
  order: 1
}, zC = (n, { order: e, size: t, lineClamp: r, textWrap: o }) => {
  const i = HC(e, t);
  return {
    root: {
      "--title-fw": i.fontWeight,
      "--title-lh": i.lineHeight,
      "--title-fz": i.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, Lo = se((n, e) => {
  const t = q("Title", BC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    order: c,
    vars: l,
    size: u,
    variant: d,
    lineClamp: f,
    textWrap: h,
    mod: p,
    ...g
  } = t, m = pe({
    name: "Title",
    props: t,
    classes: Td,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: zC
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ y.jsx(
    Q,
    {
      ...m("root"),
      component: `h${c}`,
      variant: d,
      ref: e,
      mod: [{ order: c, "data-line-clamp": typeof f == "number" }, p],
      size: u,
      ...g
    }
  ) : null;
});
Lo.classes = Td;
Lo.displayName = "@mantine/core/Title";
var Ed = { exports: {} }, $C = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", KC = $C, qC = KC;
function Id() {
}
function _d() {
}
_d.resetWarningCache = Id;
var VC = function() {
  function n(r, o, i, a, s, c) {
    if (c !== qC) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw l.name = "Invariant Violation", l;
    }
  }
  n.isRequired = n;
  function e() {
    return n;
  }
  var t = {
    array: n,
    bigint: n,
    bool: n,
    func: n,
    number: n,
    object: n,
    string: n,
    symbol: n,
    any: n,
    arrayOf: e,
    element: n,
    elementType: n,
    instanceOf: e,
    node: n,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: _d,
    resetWarningCache: Id
  };
  return t.PropTypes = t, t;
};
Ed.exports = VC();
var GC = Ed.exports;
const vn = /* @__PURE__ */ ff(GC);
var WC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, YC = Object.defineProperty, QC = Object.defineProperties, JC = Object.getOwnPropertyDescriptors, jo = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, Jc = (n, e, t) => e in n ? YC(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, Xc = (n, e) => {
  for (var t in e || (e = {}))
    kd.call(e, t) && Jc(n, t, e[t]);
  if (jo)
    for (var t of jo(e))
      Ad.call(e, t) && Jc(n, t, e[t]);
  return n;
}, XC = (n, e) => QC(n, JC(e)), ZC = (n, e) => {
  var t = {};
  for (var r in n)
    kd.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && jo)
    for (var r of jo(n))
      e.indexOf(r) < 0 && Ad.call(n, r) && (t[r] = n[r]);
  return t;
}, Is = (n, e, t) => {
  const r = ye(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: c = 24, stroke: l = 2, children: u } = a, d = ZC(a, ["color", "size", "stroke", "children"]);
      return Li(
        "svg",
        Xc(XC(Xc({
          ref: i
        }, WC), {
          width: c,
          height: c,
          stroke: s,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${n}`
        }), d),
        [...t.map(([f, h]) => Li(f, h)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: vn.string,
    size: vn.oneOfType([vn.string, vn.number]),
    stroke: vn.oneOfType([vn.string, vn.number])
  }, r.displayName = `${e}`, r;
}, ew = Is("arrow-down", "IconArrowDown", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M18 13l-6 6", key: "svg-1" }],
  ["path", { d: "M6 13l6 6", key: "svg-2" }]
]), tw = Is("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), nw = Is("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function rw({ indeterminate: n, ...e }) {
  return n ? /* @__PURE__ */ y.jsx(nw, { ...e }) : /* @__PURE__ */ y.jsx(tw, { ...e });
}
const ow = {
  components: {
    Checkbox: jn.extend({
      defaultProps: {
        icon: rw,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, Zc = {
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
}, iw = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Zc.authorities.signUpSignIn.authority,
    knownAuthorities: [Zc.authorityDomain],
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
      loggerCallback: (n, e, t) => {
        if (!t)
          switch (n) {
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
class aw {
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
      "multipart/form-data": (e) => Object.keys(e || {}).reduce((t, r) => {
        const o = e[r];
        return t.append(
          r,
          o instanceof Blob ? o : typeof o == "object" && o !== null ? JSON.stringify(o) : `${o}`
        ), t;
      }, new FormData()),
      "application/x-www-form-urlencoded": (e) => this.toQueryString(e)
    });
    Ke(this, "createAbortSignal", (e) => {
      if (this.abortControllers.has(e)) {
        const r = this.abortControllers.get(e);
        return r ? r.signal : void 0;
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
      path: r,
      type: o,
      query: i,
      format: a,
      baseUrl: s,
      cancelToken: c,
      ...l
    }) => {
      const u = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, d = this.mergeRequestParams(l, u), f = i && this.toQueryString(i), h = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], p = a || d.format;
      return this.customFetch(`${s || this.baseUrl || ""}${r}${f ? `?${f}` : ""}`, {
        ...d,
        headers: {
          ...d.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (c ? this.createAbortSignal(c) : d.signal) || null,
        body: typeof e > "u" || e === null ? null : h(e)
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
class sw extends aw {
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
      classV1List: (t, r = {}) => this.request({
        path: "/api/Class/v1",
        method: "GET",
        query: t,
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
      dictionaryV1List: (t, r = {}) => this.request({
        path: "/api/Dictionary/v1",
        method: "GET",
        query: t,
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
      dictionaryV1ClassesList: (t, r = {}) => this.request({
        path: "/api/Dictionary/v1/Classes",
        method: "GET",
        query: t,
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
      dictionaryV1PropertiesList: (t, r = {}) => this.request({
        path: "/api/Dictionary/v1/Properties",
        method: "GET",
        query: t,
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
      dictionaryDownloadSketchupV1Create: (t, r = {}) => this.request({
        path: "/api/DictionaryDownload/sketchup/v1",
        method: "POST",
        query: t,
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
      uploadImportFileV1Create: (t, r = {}) => this.request({
        path: "/api/UploadImportFile/v1",
        method: "POST",
        body: t,
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
      dictionaryV1Update: (t, r, o, i, a = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${r}/${o}`,
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
      dictionaryV1Delete: (t, r, o, i = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${r}/${o}`,
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
      dictionaryV1Delete2: (t, r, o = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${r}`,
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
      propertyV4List: (t, r = {}) => this.request({
        path: "/api/Property/v4",
        method: "GET",
        query: t,
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
      propertyValueV2List: (t, r = {}) => this.request({
        path: "/api/PropertyValue/v2",
        method: "GET",
        query: t,
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
      textSearchV1List: (t, r = {}) => this.request({
        path: "/api/TextSearch/v1",
        method: "GET",
        query: t,
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
      searchInDictionaryV1List: (t, r = {}) => this.request({
        path: "/api/SearchInDictionary/v1",
        method: "GET",
        query: t,
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
      classSearchV1List: (t, r = {}) => this.request({
        path: "/api/Class/Search/v1",
        method: "GET",
        query: t,
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
      textSearchListOpenV6List: (t, r = {}) => this.request({
        path: "/api/TextSearchListOpen/v6",
        method: "GET",
        query: t,
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
      textSearchListOpenV5List: (t, r = {}) => this.request({
        path: "/api/TextSearchListOpen/v5",
        method: "GET",
        query: t,
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
      searchListV2List: (t, r = {}) => this.request({
        path: "/api/SearchList/v2",
        method: "GET",
        query: t,
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
      searchListOpenV2List: (t, r = {}) => this.request({
        path: "/api/SearchListOpen/v2",
        method: "GET",
        query: t,
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
      requestExportFilePreviewCreate: (t, r = {}) => this.request({
        path: "/api/RequestExportFile/preview",
        method: "POST",
        query: t,
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
      propertyV3List: (t, r = {}) => this.request({
        path: "/api/Property/v3",
        method: "GET",
        query: t,
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
      propertyV2List: (t, r = {}) => this.request({
        path: "/api/Property/v2",
        method: "GET",
        query: t,
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
      propertyValueV1List: (t, r = {}) => this.request({
        path: "/api/PropertyValue/v1",
        method: "GET",
        query: t,
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
      materialV2List: (t, r = {}) => this.request({
        path: "/api/Material/v2",
        method: "GET",
        query: t,
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
      materialV1List: (t, r = {}) => this.request({
        path: "/api/Material/v1",
        method: "GET",
        query: t,
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
      materialSearchOpenPreviewList: (t, r = {}) => this.request({
        path: "/api/Material/SearchOpen/preview",
        method: "GET",
        query: t,
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
      domainV3List: (t, r = {}) => this.request({
        path: "/api/Domain/v3",
        method: "GET",
        query: t,
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
      domainV3ClassificationsList: (t, r = {}) => this.request({
        path: "/api/Domain/v3/Classifications",
        method: "GET",
        query: t,
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
      domainV3Update: (t, r, o, i, a = {}) => this.request({
        path: `/api/Domain/v3/${t}/${r}/${o}`,
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
      domainV3Delete: (t, r, o, i = {}) => this.request({
        path: `/api/Domain/v3/${t}/${r}/${o}`,
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
      domainV3Delete2: (t, r, o = {}) => this.request({
        path: `/api/Domain/v3/${t}/${r}`,
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
      domainV2List: (t, r = {}) => this.request({
        path: "/api/Domain/v2",
        method: "GET",
        query: t,
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
      domainV2ClassificationsList: (t, r = {}) => this.request({
        path: "/api/Domain/v2/Classifications",
        method: "GET",
        query: t,
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
      classificationV4List: (t, r = {}) => this.request({
        path: "/api/Classification/v4",
        method: "GET",
        query: t,
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
      classificationV3List: (t, r = {}) => this.request({
        path: "/api/Classification/v3",
        method: "GET",
        query: t,
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
      classificationSearchOpenV1List: (t, r = {}) => this.request({
        path: "/api/ClassificationSearchOpen/v1",
        method: "GET",
        query: t,
        format: "json",
        ...r
      })
    });
  }
}
class Br extends sw {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Rd = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, cw = !0, lw = "production";
const eo = zf, ke = Tn;
function uw(n) {
  if (!n)
    return { type: void 0, predefinedType: void 0 };
  const e = n.length - [...n].reverse().findIndex((o) => o === o.toLowerCase()), [t, r] = [
    n.slice(0, e),
    n.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: r };
}
function Me(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var dw = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), el = dw, Ai = () => Math.random().toString(36).substring(7).split("").join("."), fw = {
  INIT: `@@redux/INIT${Ai()}`,
  REPLACE: `@@redux/REPLACE${Ai()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ai()}`
}, Fo = fw;
function _s(n) {
  if (typeof n != "object" || n === null)
    return !1;
  let e = n;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(n) === e || Object.getPrototypeOf(n) === null;
}
function Nd(n, e, t) {
  if (typeof n != "function")
    throw new Error(Me(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(Me(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(Me(1));
    return t(Nd)(n, e);
  }
  let r = n, o = e, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((m, b) => {
      a.set(b, m);
    }));
  }
  function u() {
    if (c)
      throw new Error(Me(3));
    return o;
  }
  function d(m) {
    if (typeof m != "function")
      throw new Error(Me(4));
    if (c)
      throw new Error(Me(5));
    let b = !0;
    l();
    const C = s++;
    return a.set(C, m), function() {
      if (b) {
        if (c)
          throw new Error(Me(6));
        b = !1, l(), a.delete(C), i = null;
      }
    };
  }
  function f(m) {
    if (!_s(m))
      throw new Error(Me(7));
    if (typeof m.type > "u")
      throw new Error(Me(8));
    if (typeof m.type != "string")
      throw new Error(Me(17));
    if (c)
      throw new Error(Me(9));
    try {
      c = !0, o = r(o, m);
    } finally {
      c = !1;
    }
    return (i = a).forEach((C) => {
      C();
    }), m;
  }
  function h(m) {
    if (typeof m != "function")
      throw new Error(Me(10));
    r = m, f({
      type: Fo.REPLACE
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
          throw new Error(Me(11));
        function C() {
          const w = b;
          w.next && w.next(u());
        }
        return C(), {
          unsubscribe: m(C)
        };
      },
      [el]() {
        return this;
      }
    };
  }
  return f({
    type: Fo.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: h,
    [el]: p
  };
}
function hw(n) {
  Object.keys(n).forEach((e) => {
    const t = n[e];
    if (typeof t(void 0, {
      type: Fo.INIT
    }) > "u")
      throw new Error(Me(12));
    if (typeof t(void 0, {
      type: Fo.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Me(13));
  });
}
function pw(n) {
  const e = Object.keys(n), t = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    typeof n[a] == "function" && (t[a] = n[a]);
  }
  const r = Object.keys(t);
  let o;
  try {
    hw(t);
  } catch (i) {
    o = i;
  }
  return function(a = {}, s) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u], f = t[d], h = a[d], p = f(h, s);
      if (typeof p > "u")
        throw s && s.type, new Error(Me(14));
      l[d] = p, c = c || p !== h;
    }
    return c = c || r.length !== Object.keys(a).length, c ? l : a;
  };
}
function Uo(...n) {
  return n.length === 0 ? (e) => e : n.length === 1 ? n[0] : n.reduce((e, t) => (...r) => e(t(...r)));
}
function gw(...n) {
  return (e) => (t, r) => {
    const o = e(t, r);
    let i = () => {
      throw new Error(Me(15));
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = n.map((c) => c(a));
    return i = Uo(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function mw(n) {
  return _s(n) && "type" in n && typeof n.type == "string";
}
var Pd = Symbol.for("immer-nothing"), tl = Symbol.for("immer-draftable"), st = Symbol.for("immer-state");
function Ct(n, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var sr = Object.getPrototypeOf;
function cn(n) {
  return !!n && !!n[st];
}
function Kt(n) {
  var e;
  return n ? Od(n) || Array.isArray(n) || !!n[tl] || !!((e = n.constructor) != null && e[tl]) || di(n) || fi(n) : !1;
}
var yw = Object.prototype.constructor.toString();
function Od(n) {
  if (!n || typeof n != "object")
    return !1;
  const e = sr(n);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === yw;
}
function Ho(n, e) {
  ui(n) === 0 ? Reflect.ownKeys(n).forEach((t) => {
    e(t, n[t], n);
  }) : n.forEach((t, r) => e(r, t, n));
}
function ui(n) {
  const e = n[st];
  return e ? e.type_ : Array.isArray(n) ? 1 : di(n) ? 2 : fi(n) ? 3 : 0;
}
function sa(n, e) {
  return ui(n) === 2 ? n.has(e) : Object.prototype.hasOwnProperty.call(n, e);
}
function Md(n, e, t) {
  const r = ui(n);
  r === 2 ? n.set(e, t) : r === 3 ? n.add(t) : n[e] = t;
}
function vw(n, e) {
  return n === e ? n !== 0 || 1 / n === 1 / e : n !== n && e !== e;
}
function di(n) {
  return n instanceof Map;
}
function fi(n) {
  return n instanceof Set;
}
function Cn(n) {
  return n.copy_ || n.base_;
}
function ca(n, e) {
  if (di(n))
    return new Map(n);
  if (fi(n))
    return new Set(n);
  if (Array.isArray(n))
    return Array.prototype.slice.call(n);
  const t = Od(n);
  if (e === !0 || e === "class_only" && !t) {
    const r = Object.getOwnPropertyDescriptors(n);
    delete r[st];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const a = o[i], s = r[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: n[a]
      });
    }
    return Object.create(sr(n), r);
  } else {
    const r = sr(n);
    if (r !== null && t)
      return { ...n };
    const o = Object.create(r);
    return Object.assign(o, n);
  }
}
function ks(n, e = !1) {
  return hi(n) || cn(n) || !Kt(n) || (ui(n) > 1 && (n.set = n.add = n.clear = n.delete = bw), Object.freeze(n), e && Object.entries(n).forEach(([t, r]) => ks(r, !0))), n;
}
function bw() {
  Ct(2);
}
function hi(n) {
  return Object.isFrozen(n);
}
var Cw = {};
function On(n) {
  const e = Cw[n];
  return e || Ct(0, n), e;
}
var zr;
function xd() {
  return zr;
}
function ww(n, e) {
  return {
    drafts_: [],
    parent_: n,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function nl(n, e) {
  e && (On("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = e);
}
function la(n) {
  ua(n), n.drafts_.forEach(Sw), n.drafts_ = null;
}
function ua(n) {
  n === zr && (zr = n.parent_);
}
function rl(n) {
  return zr = ww(zr, n);
}
function Sw(n) {
  const e = n[st];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ol(n, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return n !== void 0 && n !== t ? (t[st].modified_ && (la(e), Ct(4)), Kt(n) && (n = Bo(e, n), e.parent_ || zo(e, n)), e.patches_ && On("Patches").generateReplacementPatches_(
    t[st].base_,
    n,
    e.patches_,
    e.inversePatches_
  )) : n = Bo(e, t, []), la(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), n !== Pd ? n : void 0;
}
function Bo(n, e, t) {
  if (hi(e))
    return e;
  const r = e[st];
  if (!r)
    return Ho(
      e,
      (o, i) => il(n, r, e, o, i, t)
    ), e;
  if (r.scope_ !== n)
    return e;
  if (!r.modified_)
    return zo(n, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, a = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Ho(
      i,
      (s, c) => il(n, r, o, s, c, t, a)
    ), zo(n, o, !1), t && n.patches_ && On("Patches").generatePatches_(
      r,
      t,
      n.patches_,
      n.inversePatches_
    );
  }
  return r.copy_;
}
function il(n, e, t, r, o, i, a) {
  if (cn(o)) {
    const s = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !sa(e.assigned_, r) ? i.concat(r) : void 0, c = Bo(n, o, s);
    if (Md(t, r, c), cn(c))
      n.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && t.add(o);
  if (Kt(o) && !hi(o)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1)
      return;
    Bo(n, o), (!e || !e.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(t, r) && zo(n, o);
  }
}
function zo(n, e, t = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && ks(e, t);
}
function Tw(n, e) {
  const t = Array.isArray(n), r = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : xd(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: n,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, i = As;
  t && (o = [r], i = $r);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return r.draft_ = s, r.revoke_ = a, s;
}
var As = {
  get(n, e) {
    if (e === st)
      return n;
    const t = Cn(n);
    if (!sa(t, e))
      return Ew(n, t, e);
    const r = t[e];
    return n.finalized_ || !Kt(r) ? r : r === Ri(n.base_, e) ? (Ni(n), n.copy_[e] = fa(r, n)) : r;
  },
  has(n, e) {
    return e in Cn(n);
  },
  ownKeys(n) {
    return Reflect.ownKeys(Cn(n));
  },
  set(n, e, t) {
    const r = Dd(Cn(n), e);
    if (r != null && r.set)
      return r.set.call(n.draft_, t), !0;
    if (!n.modified_) {
      const o = Ri(Cn(n), e), i = o == null ? void 0 : o[st];
      if (i && i.base_ === t)
        return n.copy_[e] = t, n.assigned_[e] = !1, !0;
      if (vw(t, o) && (t !== void 0 || sa(n.base_, e)))
        return !0;
      Ni(n), da(n);
    }
    return n.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in n.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(n.copy_[e]) || (n.copy_[e] = t, n.assigned_[e] = !0), !0;
  },
  deleteProperty(n, e) {
    return Ri(n.base_, e) !== void 0 || e in n.base_ ? (n.assigned_[e] = !1, Ni(n), da(n)) : delete n.assigned_[e], n.copy_ && delete n.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(n, e) {
    const t = Cn(n), r = Reflect.getOwnPropertyDescriptor(t, e);
    return r && {
      writable: !0,
      configurable: n.type_ !== 1 || e !== "length",
      enumerable: r.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    Ct(11);
  },
  getPrototypeOf(n) {
    return sr(n.base_);
  },
  setPrototypeOf() {
    Ct(12);
  }
}, $r = {};
Ho(As, (n, e) => {
  $r[n] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
$r.deleteProperty = function(n, e) {
  return $r.set.call(this, n, e, void 0);
};
$r.set = function(n, e, t) {
  return As.set.call(this, n[0], e, t, n[0]);
};
function Ri(n, e) {
  const t = n[st];
  return (t ? Cn(t) : n)[e];
}
function Ew(n, e, t) {
  var o;
  const r = Dd(e, t);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(n.draft_)
  ) : void 0;
}
function Dd(n, e) {
  if (!(e in n))
    return;
  let t = sr(n);
  for (; t; ) {
    const r = Object.getOwnPropertyDescriptor(t, e);
    if (r)
      return r;
    t = sr(t);
  }
}
function da(n) {
  n.modified_ || (n.modified_ = !0, n.parent_ && da(n.parent_));
}
function Ni(n) {
  n.copy_ || (n.copy_ = ca(
    n.base_,
    n.scope_.immer_.useStrictShallowCopy_
  ));
}
var Iw = class {
  constructor(n) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
      if (typeof e == "function" && typeof t != "function") {
        const i = t;
        t = e;
        const a = this;
        return function(c = i, ...l) {
          return a.produce(c, (u) => t.call(this, u, ...l));
        };
      }
      typeof t != "function" && Ct(6), r !== void 0 && typeof r != "function" && Ct(7);
      let o;
      if (Kt(e)) {
        const i = rl(this), a = fa(e, void 0);
        let s = !0;
        try {
          o = t(a), s = !1;
        } finally {
          s ? la(i) : ua(i);
        }
        return nl(i, r), ol(o, i);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Pd && (o = void 0), this.autoFreeze_ && ks(o, !0), r) {
          const i = [], a = [];
          On("Patches").generateReplacementPatches_(e, o, i, a), r(i, a);
        }
        return o;
      } else
        Ct(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (a, ...s) => this.produceWithPatches(a, (c) => e(c, ...s));
      let r, o;
      return [this.produce(e, t, (a, s) => {
        r = a, o = s;
      }), r, o];
    }, typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze), typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Kt(n) || Ct(8), cn(n) && (n = Ld(n));
    const e = rl(this), t = fa(n, void 0);
    return t[st].isManual_ = !0, ua(e), t;
  }
  finishDraft(n, e) {
    const t = n && n[st];
    (!t || !t.isManual_) && Ct(9);
    const { scope_: r } = t;
    return nl(r, e), ol(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, e) {
    let t;
    for (t = e.length - 1; t >= 0; t--) {
      const o = e[t];
      if (o.path.length === 0 && o.op === "replace") {
        n = o.value;
        break;
      }
    }
    t > -1 && (e = e.slice(t + 1));
    const r = On("Patches").applyPatches_;
    return cn(n) ? r(n, e) : this.produce(
      n,
      (o) => r(o, e)
    );
  }
};
function fa(n, e) {
  const t = di(n) ? On("MapSet").proxyMap_(n, e) : fi(n) ? On("MapSet").proxySet_(n, e) : Tw(n, e);
  return (e ? e.scope_ : xd()).drafts_.push(t), t;
}
function Ld(n) {
  return cn(n) || Ct(10, n), jd(n);
}
function jd(n) {
  if (!Kt(n) || hi(n))
    return n;
  const e = n[st];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = ca(n, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = ca(n, !0);
  return Ho(t, (r, o) => {
    Md(t, r, jd(o));
  }), e && (e.finalized_ = !1), t;
}
var ct = new Iw(), Fd = ct.produce;
ct.produceWithPatches.bind(
  ct
);
ct.setAutoFreeze.bind(ct);
ct.setUseStrictShallowCopy.bind(ct);
ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);
function _w(n, e = `expected a function, instead received ${typeof n}`) {
  if (typeof n != "function")
    throw new TypeError(e);
}
function kw(n, e = `expected an object, instead received ${typeof n}`) {
  if (typeof n != "object")
    throw new TypeError(e);
}
function Aw(n, e = "expected all items to be functions, instead received the following types: ") {
  if (!n.every((t) => typeof t == "function")) {
    const t = n.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var al = (n) => Array.isArray(n) ? n : [n];
function Rw(n) {
  const e = Array.isArray(n[0]) ? n[0] : n;
  return Aw(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function Nw(n, e) {
  const t = [], { length: r } = n;
  for (let o = 0; o < r; o++)
    t.push(n[o].apply(null, e));
  return t;
}
var Pw = class {
  constructor(n) {
    this.value = n;
  }
  deref() {
    return this.value;
  }
}, Ow = typeof WeakRef < "u" ? WeakRef : Pw, Mw = 0, sl = 1;
function lo() {
  return {
    s: Mw,
    v: void 0,
    o: null,
    p: null
  };
}
function Rs(n, e = {}) {
  let t = lo();
  const { resultEqualityCheck: r } = e;
  let o, i = 0;
  function a() {
    var d;
    let s = t;
    const { length: c } = arguments;
    for (let f = 0, h = c; f < h; f++) {
      const p = arguments[f];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = s.o;
        g === null && (s.o = g = /* @__PURE__ */ new WeakMap());
        const m = g.get(p);
        m === void 0 ? (s = lo(), g.set(p, s)) : s = m;
      } else {
        let g = s.p;
        g === null && (s.p = g = /* @__PURE__ */ new Map());
        const m = g.get(p);
        m === void 0 ? (s = lo(), g.set(p, s)) : s = m;
      }
    }
    const l = s;
    let u;
    if (s.s === sl)
      u = s.v;
    else if (u = n.apply(null, arguments), i++, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new Ow(u) : u;
    }
    return l.s = sl, l.v = u, u;
  }
  return a.clearCache = () => {
    t = lo(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function Ud(n, ...e) {
  const t = typeof n == "function" ? {
    memoize: n,
    memoizeOptions: e
  } : n, r = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), _w(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...t,
      ...c
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: h = Rs,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, m = al(f), b = al(p), C = Rw(o), v = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), w = h(function() {
      a++;
      const E = Nw(
        C,
        arguments
      );
      return s = v.apply(null, E), s;
    }, ...b);
    return Object.assign(w, {
      resultFunc: l,
      memoizedResultFunc: v,
      dependencies: C,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => s,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: d,
      argsMemoize: h
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var fn = /* @__PURE__ */ Ud(Rs), xw = Object.assign(
  (n, e = fn) => {
    kw(
      n,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`
    );
    const t = Object.keys(n), r = t.map(
      (i) => n[i]
    );
    return e(
      r,
      (...i) => i.reduce((a, s, c) => (a[t[c]] = s, a), {})
    );
  },
  { withTypes: () => xw }
);
function Hd(n) {
  return ({ dispatch: t, getState: r }) => (o) => (i) => typeof i == "function" ? i(t, r, n) : o(i);
}
var Dw = Hd(), Lw = Hd, jw = (...n) => {
  const e = Ud(...n), t = Object.assign((...r) => {
    const o = e(...r), i = (a, ...s) => o(cn(a) ? Ld(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => t
  });
  return t;
};
jw(Rs);
var Fw = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Uo : Uo.apply(null, arguments);
}, Uw = (n) => n && typeof n.match == "function";
function Pt(n, e) {
  function t(...r) {
    if (e) {
      let o = e(...r);
      if (!o)
        throw new Error(Xe(0));
      return {
        type: n,
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
      type: n,
      payload: r[0]
    };
  }
  return t.toString = () => `${n}`, t.type = n, t.match = (r) => mw(r) && r.type === n, t;
}
var Bd = class Sr extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Sr.prototype);
  }
  static get [Symbol.species]() {
    return Sr;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Sr(...e[0].concat(this)) : new Sr(...e.concat(this));
  }
};
function cl(n) {
  return Kt(n) ? Fd(n, () => {
  }) : n;
}
function ll(n, e, t) {
  if (n.has(e)) {
    let o = n.get(e);
    return t.update && (o = t.update(o, e, n), n.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(Xe(10));
  const r = t.insert(e, n);
  return n.set(e, r), r;
}
function Hw(n) {
  return typeof n == "boolean";
}
var Bw = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = e ?? {};
  let a = new Bd();
  return t && (Hw(t) ? a.push(Dw) : a.push(Lw(t.extraArgument))), a;
}, zw = "RTK_autoBatch", zd = (n) => (e) => {
  setTimeout(e, n);
}, $w = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : zd(10), Kw = (n = {
  type: "raf"
}) => (e) => (...t) => {
  const r = e(...t);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = n.type === "tick" ? queueMicrotask : n.type === "raf" ? $w : n.type === "callback" ? n.queueNotification : zd(n.timeout), l = () => {
    a = !1, i && (i = !1, s.forEach((u) => u()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => o && u(), f = r.subscribe(d);
      return s.add(u), () => {
        f(), s.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var d;
      try {
        return o = !((d = u == null ? void 0 : u.meta) != null && d[zw]), i = !o, i && (a || (a = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, qw = (n) => function(t) {
  const {
    autoBatch: r = !0
  } = t ?? {};
  let o = new Bd(n);
  return r && o.push(Kw(typeof r == "object" ? r : void 0)), o;
}, Vw = !0;
function Gw(n) {
  const e = Bw(), {
    reducer: t = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = n || {};
  let s;
  if (typeof t == "function")
    s = t;
  else if (_s(t))
    s = pw(t);
  else
    throw new Error(Xe(1));
  let c;
  typeof r == "function" ? c = r(e) : c = e();
  let l = Uo;
  o && (l = Fw({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Vw,
    ...typeof o == "object" && o
  }));
  const u = gw(...c), d = qw(u);
  let f = typeof a == "function" ? a(d) : d();
  const h = l(...f);
  return Nd(s, i, h);
}
function $d(n) {
  const e = {}, t = [];
  let r;
  const o = {
    addCase(i, a) {
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(Xe(28));
      if (s in e)
        throw new Error(Xe(29));
      return e[s] = a, o;
    },
    addMatcher(i, a) {
      return t.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      return r = i, o;
    }
  };
  return n(o), [e, t, r];
}
function Ww(n) {
  return typeof n == "function";
}
function Yw(n, e) {
  let [t, r, o] = $d(e), i;
  if (Ww(n))
    i = () => cl(n());
  else {
    const s = cl(n);
    i = () => s;
  }
  function a(s = i(), c) {
    let l = [t[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, d) => {
      if (d)
        if (cn(u)) {
          const h = d(u, c);
          return h === void 0 ? u : h;
        } else {
          if (Kt(u))
            return Fd(u, (f) => d(f, c));
          {
            const f = d(u, c);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(Xe(9));
            }
            return f;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = i, a;
}
var Qw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Kd = (n = 21) => {
  let e = "", t = n;
  for (; t--; )
    e += Qw[Math.random() * 64 | 0];
  return e;
}, Jw = (n, e) => Uw(n) ? n.match(e) : n(e);
function Xw(...n) {
  return (e) => n.some((t) => Jw(t, e));
}
var Zw = ["name", "message", "stack", "code"], Pi = class {
  constructor(n, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = n, this.meta = e;
  }
}, ul = class {
  constructor(n, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = n, this.meta = e;
  }
}, eS = (n) => {
  if (typeof n == "object" && n !== null) {
    const e = {};
    for (const t of Zw)
      typeof n[t] == "string" && (e[t] = n[t]);
    return e;
  }
  return {
    message: String(n)
  };
}, Qt = /* @__PURE__ */ (() => {
  function n(e, t, r) {
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
    })), a = Pt(e + "/rejected", (c, l, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || eS)(c || "Rejected"),
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
    function s(c) {
      return (l, u, d) => {
        const f = r != null && r.idGenerator ? r.idGenerator(c) : Kd(), h = new AbortController();
        let p, g;
        function m(C) {
          g = C, h.abort();
        }
        const b = async function() {
          var w, S;
          let C;
          try {
            let E = (w = r == null ? void 0 : r.condition) == null ? void 0 : w.call(r, c, {
              getState: u,
              extra: d
            });
            if (nS(E) && (E = await E), E === !1 || h.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const k = new Promise((I, x) => {
              p = () => {
                x({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, h.signal.addEventListener("abort", p);
            });
            l(i(f, c, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: f,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), C = await Promise.race([k, Promise.resolve(t(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: f,
              signal: h.signal,
              abort: m,
              rejectWithValue: (I, x) => new Pi(I, x),
              fulfillWithValue: (I, x) => new ul(I, x)
            })).then((I) => {
              if (I instanceof Pi)
                throw I;
              return I instanceof ul ? o(I.payload, f, c, I.meta) : o(I, f, c);
            })]);
          } catch (E) {
            C = E instanceof Pi ? a(null, f, c, E.payload, E.meta) : a(E, f, c);
          } finally {
            p && h.signal.removeEventListener("abort", p);
          }
          return r && !r.dispatchConditionRejection && a.match(C) && C.meta.condition || l(C), C;
        }();
        return Object.assign(b, {
          abort: m,
          requestId: f,
          arg: c,
          unwrap() {
            return b.then(tS);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: a,
      fulfilled: o,
      settled: Xw(a, o),
      typePrefix: e
    });
  }
  return n.withTypes = () => n, n;
})();
function tS(n) {
  if (n.meta && n.meta.rejectedWithValue)
    throw n.payload;
  if (n.error)
    throw n.error;
  return n.payload;
}
function nS(n) {
  return n !== null && typeof n == "object" && typeof n.then == "function";
}
var rS = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function oS(n, e) {
  return `${n}/${e}`;
}
function iS({
  creators: n
} = {}) {
  var t;
  const e = (t = n == null ? void 0 : n.asyncThunk) == null ? void 0 : t[rS];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(Xe(11));
    typeof process < "u";
    const s = (typeof o.reducers == "function" ? o.reducers(sS()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(v, w) {
        const S = typeof v == "string" ? v : v.type;
        if (!S)
          throw new Error(Xe(12));
        if (S in l.sliceCaseReducersByType)
          throw new Error(Xe(13));
        return l.sliceCaseReducersByType[S] = w, u;
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
      const w = s[v], S = {
        reducerName: v,
        type: oS(i, v),
        createNotation: typeof o.reducers == "function"
      };
      lS(w) ? dS(S, w, u, e) : cS(S, w, u);
    });
    function d() {
      const [v = {}, w = [], S = void 0] = typeof o.extraReducers == "function" ? $d(o.extraReducers) : [o.extraReducers], E = {
        ...v,
        ...l.sliceCaseReducersByType
      };
      return Yw(o.initialState, (k) => {
        for (let I in E)
          k.addCase(I, E[I]);
        for (let I of l.sliceMatchers)
          k.addMatcher(I.matcher, I.reducer);
        for (let I of w)
          k.addMatcher(I.matcher, I.reducer);
        S && k.addDefaultCase(S);
      });
    }
    const f = (v) => v, h = /* @__PURE__ */ new Map();
    let p;
    function g(v, w) {
      return p || (p = d()), p(v, w);
    }
    function m() {
      return p || (p = d()), p.getInitialState();
    }
    function b(v, w = !1) {
      function S(k) {
        let I = k[v];
        return typeof I > "u" && w && (I = m()), I;
      }
      function E(k = f) {
        const I = ll(h, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return ll(I, k, {
          insert: () => {
            const x = {};
            for (const [j, V] of Object.entries(o.selectors ?? {}))
              x[j] = aS(V, k, m, w);
            return x;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: E,
        get selectors() {
          return E(S);
        },
        selectSlice: S
      };
    }
    const C = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: m,
      ...b(a),
      injectInto(v, {
        reducerPath: w,
        ...S
      } = {}) {
        const E = w ?? a;
        return v.inject({
          reducerPath: E,
          reducer: g
        }, S), {
          ...C,
          ...b(E, !0)
        };
      }
    };
    return C;
  };
}
function aS(n, e, t, r) {
  function o(i, ...a) {
    let s = e(i);
    return typeof s > "u" && r && (s = t()), n(s, ...a);
  }
  return o.unwrapped = n, o;
}
var pi = /* @__PURE__ */ iS();
function sS() {
  function n(e, t) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: e,
      ...t
    };
  }
  return n.withTypes = () => n, {
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
    asyncThunk: n
  };
}
function cS({
  type: n,
  reducerName: e,
  createNotation: t
}, r, o) {
  let i, a;
  if ("reducer" in r) {
    if (t && !uS(r))
      throw new Error(Xe(17));
    i = r.reducer, a = r.prepare;
  } else
    i = r;
  o.addCase(n, i).exposeCaseReducer(e, i).exposeAction(e, a ? Pt(n, a) : Pt(n));
}
function lS(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function uS(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function dS({
  type: n,
  reducerName: e
}, t, r, o) {
  if (!o)
    throw new Error(Xe(18));
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = t, d = o(n, i, u);
  r.exposeAction(e, d), a && r.addCase(d.fulfilled, a), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(e, {
    fulfilled: a || uo,
    pending: s || uo,
    rejected: c || uo,
    settled: l || uo
  });
}
function uo() {
}
var fS = (n, e) => {
  if (typeof n != "function")
    throw new Error(Xe(32));
}, Ns = "listenerMiddleware", hS = (n) => {
  let {
    type: e,
    actionCreator: t,
    matcher: r,
    predicate: o,
    effect: i
  } = n;
  if (e)
    o = Pt(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(Xe(21));
  return fS(i), {
    predicate: o,
    type: e,
    effect: i
  };
}, pS = Object.assign((n) => {
  const {
    type: e,
    predicate: t,
    effect: r
  } = hS(n);
  return {
    id: Kd(),
    effect: r,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Xe(22));
    }
  };
}, {
  withTypes: () => pS
}), gS = Object.assign(Pt(`${Ns}/add`), {
  withTypes: () => gS
});
Pt(`${Ns}/removeAll`);
var mS = Object.assign(Pt(`${Ns}/remove`), {
  withTypes: () => mS
});
function Xe(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const yS = "main", to = {
  "X-User-Agent": `bSDD-filter-UI/${yS}`,
  Accept: "text/plain"
}, vS = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, dl = (n, e) => {
  n.language = e.payload, xe.changeLanguage(e.payload);
}, qd = Pt("settings/setSettings"), Vd = pi({
  name: "settings",
  initialState: vS,
  reducers: {
    setBsddApiEnvironment: (n, { payload: e }) => {
      n.bsddApiEnvironment = e;
    },
    setMainDictionary: (n, { payload: e }) => {
      n.mainDictionary = e;
    },
    setIfcDictionary: (n, { payload: e }) => {
      n.mainDictionary = e;
    },
    setFilterDictionaries: (n, { payload: e }) => {
      n.filterDictionaries = e;
    },
    setLanguage: dl,
    setIncludeTestDictionaries: (n, e) => {
      n.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (n) => {
    n.addCase(
      qd,
      (e, {
        payload: {
          bsddApiEnvironment: t,
          mainDictionary: r,
          ifcDictionary: o,
          filterDictionaries: i,
          language: a,
          includeTestDictionaries: s
        }
      }) => {
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(r) && (e.mainDictionary = r), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(i) && (e.filterDictionaries = i), JSON.stringify(e.language) !== JSON.stringify(a) && dl(e, { payload: a, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(s) && (e.includeTestDictionaries = s);
      }
    );
  }
}), ha = (n) => {
  const e = n.settings.bsddApiEnvironment;
  return e !== null ? Rd[e] : null;
}, Gd = fn(
  (n) => n.settings.mainDictionary,
  (n) => n.settings.ifcDictionary,
  (n) => n.settings.filterDictionaries,
  (n, e, t) => {
    const r = [n, e, ...t].filter(Boolean), o = new Map(r.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
), bS = fn(Gd, (n) => new Map(
  n.map((t) => [t.ifcClassification.location, t.ifcClassification])
)), Ps = (n) => n.settings.mainDictionary, Wd = (n) => n.settings.language, CS = (n) => n.settings.includeTestDictionaries, wS = fn(
  Gd,
  (n) => n.map((e) => e.ifcClassification.location)
), SS = fn(
  Ps,
  (n) => n ? n.ifcClassification.location : null
);
Vd.actions;
const TS = Vd.reducer, pa = 500, ES = 500;
let qe = null, fo = {};
const fl = {
  mainDictionaryClassification: null,
  mainDictionaryClassificationUri: null,
  classes: {},
  propertyNamesByLanguage: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1,
  groupedClassRelations: {}
}, IS = (n) => {
  const e = ha(n);
  return e && (!qe || qe.baseUrl !== e) && (qe = new Br(e)), qe;
}, hl = Qt("bsdd/fetchDictionaries", ({ bsddApiEnvironment: n, includeTestDictionaries: e }, t) => {
  if (!n)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const r = new Br(n), o = ES;
  let i = 0;
  const a = [];
  return new Promise((s, c) => {
    function l() {
      r.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: i }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: d, totalCount: f } = {} } = u;
        if (d && typeof f < "u")
          if (a.push(...d), i += o, a.length >= f) {
            const h = a.reduce((p, g) => (p[g.uri] = g, p), {});
            s(h);
          } else
            l();
        else
          c(new Error(`bSDD API error! status: ${u.status}`));
      });
    }
    l();
  });
}), _S = Qt("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: n, dictionaryUris: e }, t) => {
  if (!n || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const r = new Br(n), o = {};
  return await Promise.all(
    e.map(async (i) => {
      var a;
      try {
        const s = await r.api.dictionaryV1List({ Uri: i }, { headers: to });
        s.ok && s.data ? (a = s.data.dictionaries) == null || a.forEach((c) => {
          o[c.uri] = c;
        }) : console.error(`Failed to fetch dictionaries for URI: ${i}`);
      } catch (s) {
        console.error(`Error fetching dictionaries for URI: ${i}`, s);
      }
    })
  ), o;
});
async function pl(n, e, t, r) {
  const o = await n.api.dictionaryV1ClassesList(
    {
      Uri: e,
      UseNestedClasses: !1,
      ClassType: "Class",
      Offset: t,
      Limit: pa,
      languageCode: r || void 0
    },
    { headers: to }
  );
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const kS = async (n, e, t) => {
  const r = [];
  let o = 0;
  const i = await pl(n, e, o, t), a = i.classesTotalCount;
  if (a == null)
    throw new Error("Total count is null or undefined");
  r.push(...i.classes ?? []);
  const s = [];
  for (o = pa; o < a; o += pa)
    s.push(pl(n, e, o, t));
  return (await Promise.all(s)).forEach((l) => {
    r.push(...l.classes ?? []);
  }), r;
}, Os = Qt(
  "bsdd/fetchDictionaryClasses",
  async ({ location: n, languageCode: e }, { getState: t, dispatch: r }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[n])
      return o.bsdd.dictionaryClasses[n];
    if (fo[n])
      return fo[n];
    const i = IS(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const a = kS(i, n, e).then((s) => (r({ type: "bsdd/addDictionaryClasses", payload: { uri: n, data: s } }), s)).finally(() => {
      delete fo[n];
    });
    return fo[n] = a, a;
  }
), AS = Qt(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (n, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: r, languageCode: o } = n;
    if (!r || r.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(r.map((i) => e(Os({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), Yd = Qt(
  "bsdd/updateDictionaries",
  async (n) => n
), Qd = Qt(
  "bsdd/updatePropertyNaturalLanguageNames",
  async ({ classProperties: n, languageCode: e }) => {
    if (!qe)
      throw new Error("BsddApi is not initialized");
    const t = {}, r = async (i) => {
      if (qe != null && qe.api && i.propertyUri)
        try {
          const a = await qe.api.propertyV4List(
            {
              uri: i.propertyUri,
              languageCode: e,
              includeClasses: !1
            },
            { headers: to }
          );
          if (!a.ok)
            throw new Error(`HTTP error! status: ${a.status}`);
          const { data: s } = a;
          t[i.propertyUri] = s.name || i.name;
        } catch (a) {
          console.error("Error fetching property details:", a), t[i.propertyUri] = i.name;
        }
    }, o = n.map(r);
    return await Promise.all(o), { languageCode: e, propertyNames: t };
  }
), Or = pi({
  name: "bsdd",
  initialState: fl,
  reducers: {
    resetState: () => fl,
    setMainDictionaryClassification: (n, e) => {
      n.mainDictionaryClassification = e.payload;
    },
    setMainDictionaryClassificationUri: (n, e) => {
      e.payload !== n.mainDictionaryClassificationUri && (n.mainDictionaryClassificationUri = e.payload, e.payload === null && (n.mainDictionaryClassification = null));
    },
    setClasses: (n, e) => {
      n.classes = e.payload;
    },
    // addClass: (state, action: PayloadAction<{ uri: string; data: ClassContractV1 }>) => {
    //   console.log('addClass', action.payload);
    //   state.classes[action.payload.uri] = action.payload.data;
    // },
    addDictionaryClasses: (n, e) => {
      n.dictionaryClasses[e.payload.uri] ? n.dictionaryClasses[e.payload.uri] = [
        ...n.dictionaryClasses[e.payload.uri],
        ...e.payload.data
      ] : n.dictionaryClasses[e.payload.uri] = e.payload.data;
    },
    addDictionary: (n, e) => {
      n.dictionaries[e.payload.uri] = e.payload;
    }
  },
  extraReducers: (n) => {
    n.addCase(
      Qd.fulfilled,
      (e, t) => {
        const { languageCode: r, propertyNames: o } = t.payload;
        e.propertyNamesByLanguage[r] = o;
      }
    ).addCase(hl.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      hl.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(Os.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(Yd.fulfilled, (e, t) => {
      const r = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => r.includes(o)).reduce((o, i) => (o[i] = e.dictionaries[i], o), {});
    });
  }
}), Jd = Qt(
  "bsdd/fetchRelatedClasses",
  async (n, { getState: e, dispatch: t }) => {
    const r = e();
    if (!qe)
      throw new Error("BsddApi is not initialized");
    const o = { ...r.bsdd.classes }, i = async (s) => {
      if (!o[s])
        if (qe && qe.api) {
          const c = await qe.api.classV1List({
            Uri: s,
            languageCode: r.settings.language || void 0
          });
          if (!c.ok)
            throw new Error(`HTTP error! status: ${c.status}`);
          const { data: l } = c;
          o[s] = l;
        } else
          throw new Error("bsddApi or bsddApi.api is not initialized");
    }, a = n.map(i);
    await Promise.all(a), t({ type: "bsdd/setClasses", payload: o });
  }
), Xd = (n) => n.bsdd.mainDictionaryClassification, RS = (n) => n.bsdd.mainDictionaryClassificationUri, Zd = (n) => n.bsdd.dictionaries, NS = (n) => n.bsdd.classes, PS = (n) => n.bsdd.propertyNamesByLanguage, OS = fn([NS], (n) => Object.values(n).reduce((r, o) => {
  const { dictionaryUri: i } = o;
  return i && (r[i] || (r[i] = []), r[i].push(o)), r;
}, {})), {
  resetState: d0,
  setMainDictionaryClassification: MS,
  setMainDictionaryClassificationUri: ga,
  addDictionaryClasses: f0,
  addDictionary: h0
} = Or.actions, ef = Qt(
  "bsdd/fetchMainDictionaryClassification",
  async (n, { getState: e, dispatch: t }) => {
    if (!qe)
      throw new Error("BsddApi is not initialized");
    const o = e().settings.language, i = {
      headers: to
    }, a = {
      Uri: n,
      IncludeClassRelations: !0,
      IncludeClassProperties: !0,
      languageCode: o
    };
    try {
      const s = await qe.api.classV1List(a, i);
      if (s.status !== 200)
        return console.error(`API request failed with status ${s.status}`), null;
      const c = s.data;
      t(MS(c));
      const l = c == null ? void 0 : c.classProperties;
      return l && l.length > 0 && t(Qd({ classProperties: l, languageCode: o })), c;
    } catch (s) {
      return console.error("Error fetching classification:", s), null;
    }
  }
);
Qt(
  "bsdd/updateMainDictionaryClassificationUri",
  async (n, { dispatch: e, getState: t }) => {
    const r = t();
    if (n !== r.bsdd.mainDictionaryClassificationUri)
      if (e(Or.actions.setMainDictionaryClassificationUri(n)), n === null)
        e(Or.actions.setMainDictionaryClassification(null));
      else {
        const i = (await e(ef(n))).payload;
        if (e(Or.actions.setMainDictionaryClassification(i)), i != null && i.classRelations) {
          const a = i.classRelations.map(
            (s) => s.relatedClassUri
          );
          a.push(i.uri), await e(Jd(a));
        }
      }
  }
);
const xS = Or.reducer, DS = {
  type: void 0,
  name: void 0,
  description: void 0,
  objectType: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
};
function Oi(n, e, t) {
  let r = n.objectType, o = n.predefinedType;
  e ? !t || t === "NOTDEFINED" ? o = "USERDEFINED" : o = t : (r = "", !t || t === "USERDEFINED" ? o = "NOTDEFINED" : o = t), n.objectType !== r && (n.objectType = r), n.predefinedType !== o && (n.predefinedType = o);
}
function gl(n, e) {
  var r, o, i, a, s, c;
  if (n.isDefinedBy = e || [], !e)
    return;
  const t = e.find((l) => l.name === "Attributes");
  if (t) {
    const l = t.hasProperties.find((d) => d.name === "ObjectType");
    l && (l.type === "IfcPropertySingleValue" ? n.objectType = (r = l.nominalValue) == null ? void 0 : r.value : l.type === "IfcPropertyEnumeratedValue" && (n.objectType = (i = (o = l.enumerationValues) == null ? void 0 : o[0]) == null ? void 0 : i.value));
    const u = t.hasProperties.find(
      (d) => d.name === "PredefinedType"
    );
    u && (u.type === "IfcPropertySingleValue" ? n.predefinedType = (a = u.nominalValue) == null ? void 0 : a.value : u.type === "IfcPropertyEnumeratedValue" && (n.predefinedType = (c = (s = u.enumerationValues) == null ? void 0 : s[0]) == null ? void 0 : c.value));
  }
}
function ml(n, e) {
  const t = JSON.stringify(n.hasAssociations), r = JSON.stringify(e);
  t !== r && (n.hasAssociations = e);
}
const tf = pi({
  name: "ifcEntity",
  initialState: DS,
  reducers: {
    setIfcEntity: (n, e) => {
      n.type !== e.payload.type && (n.type = e.payload.type), n.name !== e.payload.name && (n.name = e.payload.name), n.description !== e.payload.description && (n.description = e.payload.description), Oi(n, e.payload.objectType, e.payload.predefinedType), n.tag !== e.payload.tag && (n.tag = e.payload.tag), gl(n, e.payload.isDefinedBy), ml(n, e.payload.hasAssociations);
    },
    setType: (n, e) => {
      n.type = e.payload;
    },
    setName: (n, e) => {
      n.name = e.payload;
    },
    setDescription: (n, e) => {
      n.description = e.payload;
    },
    setObjectType: (n, e) => {
      Oi(n, e.payload, n.predefinedType);
    },
    setTag: (n, e) => {
      n.tag = e.payload;
    },
    setPredefinedType: (n, e) => {
      n.predefinedType = e.payload, Oi(n, n.objectType, e.payload);
    },
    setIsDefinedBy: (n, e) => {
      gl(n, e.payload);
    },
    setHasAssociations: (n, e) => {
      ml(n, e.payload);
    }
  }
}), LS = (n) => n.ifcEntity, Ms = (n) => n.ifcEntity.isDefinedBy, nf = (n) => n.ifcEntity.hasAssociations, jS = fn(
  nf,
  (n) => (n == null ? void 0 : n.filter(
    (r) => r && r.type === "IfcClassificationReference"
  )).reduce((r, o) => {
    var a;
    const i = (a = o == null ? void 0 : o.referencedSource) == null ? void 0 : a.location;
    return i && (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {})
), { setIfcEntity: FS, setName: p0, setDescription: g0, setTag: m0, setPredefinedType: y0, setIsDefinedBy: po, setHasAssociations: US } = tf.actions, HS = tf.reducer;
function BS({ callback: n, ifcEntity: e }) {
  const { t } = va();
  ke(Zd);
  const r = Tn(Ms), o = Tn(nf);
  function i(s) {
    const c = s ? { ...JSON.parse(JSON.stringify(s)) } : { hasAssociations: [], isDefinedBy: [] };
    return c.isDefinedBy = r == null ? void 0 : r.filter((l) => l.name !== "Attributes"), c.hasAssociations = [], o == null || o.forEach((l) => {
      var u, d, f;
      if (l.type === "IfcClassificationReference" && ((d = (u = l == null ? void 0 : l.referencedSource) == null ? void 0 : u.location) != null && d.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))) {
        const { type: h, predefinedType: p } = uw(l.identification);
        h && (c.type = h), p && (c.predefinedType = p), c.predefinedType || (c.predefinedType = "NOTDEFINED");
      } else
        (f = c.hasAssociations) == null || f.push(l);
    }), c;
  }
  const a = () => {
    const s = i(e);
    console.log(s), n(s);
  };
  return /* @__PURE__ */ y.jsx(Zr, { color: "gray", fullWidth: !0, onClick: a, variant: "filled", children: t("apply") });
}
const yl = 25, zS = 25;
function $S({ height: n, options: e, label: t, value: r, setValue: o, placeholder: i = "Search values", disabled: a }) {
  const [s, c] = X(""), [l, u] = X(e.slice(0, yl)), d = ue(null), f = ci({
    onDropdownClose: () => {
      f.resetSelectedOption(), f.focusTarget();
    },
    onDropdownOpen: () => {
      f.focusSearchInput();
    }
  });
  Y(() => {
    c((r == null ? void 0 : r.label) || "");
  }, [r]), Y(() => {
    const g = r === null ? e.filter(
      (m) => (m == null ? void 0 : m.label.toLowerCase().includes(s.toLowerCase().trim())) || (m == null ? void 0 : m.value.toString().toLowerCase().includes(s.toLowerCase().trim()))
    ) : e;
    u(g.slice(0, yl));
  }, [e, s, r]);
  const h = (g) => {
    const { scrollTop: m, scrollHeight: b, clientHeight: C } = g.currentTarget, v = 5;
    b - m <= C + v && u((S) => {
      const E = S.length, k = e.filter((I) => I == null ? void 0 : I.label.toLowerCase().includes(s.toLowerCase().trim())).slice(E, E + zS);
      return [...S, ...k];
    });
  }, p = Mr(() => l.map((g) => /* @__PURE__ */ y.jsx(le.Option, { value: g.value, active: (r == null ? void 0 : r.value) === g.value, children: /* @__PURE__ */ y.jsxs(Ur, { gap: "sm", children: [
    (r == null ? void 0 : r.value) === g.value ? /* @__PURE__ */ y.jsx(ys, { size: 12 }) : null,
    /* @__PURE__ */ y.jsx(Do, { fz: "sm", opacity: a ? 0.6 : 1, children: g.label }),
    /* @__PURE__ */ y.jsxs(Do, { fz: "xs", opacity: 0.6, children: [
      "(",
      g.value,
      ")"
    ] })
  ] }) }, g.value)), [l, r, a]);
  return /* @__PURE__ */ y.jsx("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: /* @__PURE__ */ y.jsxs(
    le,
    {
      store: f,
      onOptionSubmit: (g) => {
        if (!a) {
          const m = e.find((C) => C.value === g), b = m && (r == null ? void 0 : r.value) !== m.value ? m : null;
          o(b), f.closeDropdown();
        }
      },
      disabled: a,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            rightSection: !a && /* @__PURE__ */ y.jsx(
              fr,
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
              a || (o(null), f.updateSelectedOptionIndex(), c(g.currentTarget.value));
            },
            onClick: () => {
              a || f.openDropdown();
            },
            onBlur: () => f.closeDropdown(),
            placeholder: a ? "" : i,
            disabled: a
          }
        ) }),
        n < 80 ? /* @__PURE__ */ y.jsx(
          le.Dropdown,
          {
            style: { maxHeight: "20em", overflowY: "auto" },
            ref: d,
            onScroll: h,
            children: /* @__PURE__ */ y.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        ) : /* @__PURE__ */ y.jsx(
          Zo,
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
            ref: d,
            onScroll: h,
            children: /* @__PURE__ */ y.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        )
      ]
    }
  ) });
}
function KS({ height: n, handleMouseDown: e }) {
  const t = eo(), [r, o] = X(/* @__PURE__ */ new Map()), [i, a] = X(/* @__PURE__ */ new Map()), s = ke(bS), c = ke(jS), l = Tn(Zd), u = Tn(OS), d = Tn(Xd), f = Tn(SS);
  return Y(() => {
    (async () => {
      const g = Array.from(s.entries()).map(async ([v, w]) => {
        var x;
        if (d && v === f) {
          const { code: j, name: V, uri: Z } = d;
          return [
            v,
            [
              {
                value: j,
                label: V,
                uri: Z
              }
            ]
          ];
        }
        let S = [];
        const E = u[v], k = (x = d == null ? void 0 : d.classRelations) == null ? void 0 : x.map(
          (j) => j.relatedClassUri
        ), I = E == null ? void 0 : E.filter((j) => k == null ? void 0 : k.includes(j.uri));
        if (I && I.length > 0)
          S = I.map((j) => ({
            value: j.code,
            label: j.name,
            uri: j.uri
          }));
        else
          try {
            S = (await t(
              Os({
                location: v,
                languageCode: "nl-NL"
              })
            ).unwrap()).map(
              (V) => ({
                value: V.code,
                label: V.name || "",
                uri: V.uri
              })
            );
          } catch (j) {
            console.error("Failed to fetch dictionary classes for", v, j), S = [];
          }
        return [v, S];
      }), m = await Promise.all(g), b = new Map(m);
      o(b);
      const C = /* @__PURE__ */ new Map();
      b.forEach((v, w) => {
        if (v.length === 1)
          C.set(w, v[0]);
        else if (w in c) {
          const S = c[w];
          if (S.length === 1) {
            const E = S[0];
            if (v.some((I) => I.value === E.identification)) {
              const I = {
                label: E.name || "",
                value: E.identification || "",
                uri: w
              };
              C.set(w, I);
            }
          }
        }
      }), a(C);
    })();
  }, [
    s,
    u,
    t,
    c,
    d,
    f
  ]), Y(() => {
    (() => {
      const p = Array.from(i.entries()).map(([g, m]) => {
        if (!m || !m.value)
          return null;
        const b = l[g];
        return {
          type: "IfcClassificationReference",
          name: m.label,
          location: m.uri,
          identification: m.value,
          referencedSource: {
            type: "IfcClassification",
            name: b.name,
            location: b.uri,
            edition: b.version,
            editionDate: b.releaseDate
          }
        };
      }).filter((g) => g !== null);
      p.length > 0 && t(US(p));
    })();
  }, [l, t, i]), /* @__PURE__ */ y.jsxs(Zo, { style: { height: `${n}px`, position: "relative" }, children: [
    Array.from(s.entries()).map(([h, p]) => {
      var g;
      return /* @__PURE__ */ y.jsx(
        $S,
        {
          height: n,
          label: p.name,
          options: r.get(h) || [],
          value: i.get(h) || null,
          setValue: (m) => {
            const b = new Map(i);
            b.set(h, m), a(b);
          },
          placeholder: "Search classes",
          disabled: h === (d == null ? void 0 : d.dictionaryUri) || ((g = r.get(h)) == null ? void 0 : g.length) === 1
        },
        h
      );
    }),
    /* @__PURE__ */ y.jsx(ws, { onMouseDown: e, style: { marginTop: "4px" }, children: /* @__PURE__ */ y.jsx(oi, { m: "xxs", variant: "outline", size: "lg", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ y.jsx(ew, {}) }) })
  ] });
}
const qS = {
  loadedIfcEntities: []
}, rf = pi({
  name: "ifcData",
  initialState: qS,
  reducers: {
    setLoadedIfcEntities: (n, e) => {
      n.loadedIfcEntities = e.payload;
    }
  }
}), { setLoadedIfcEntities: VS } = rf.actions, GS = (n) => n.ifcData.loadedIfcEntities, of = fn(GS, (n) => n[0]), WS = rf.reducer;
function YS({ label: n, description: e, value: t, setValue: r, disabled: o }) {
  const [i, a] = X(!1), [s, c] = X(!0), l = (u) => {
    u.target.indeterminate = !1, r(u.target.checked);
  };
  return Y(() => {
    t === !0 ? (a(!0), c(!1)) : t === !1 ? (a(!1), c(!1)) : t === void 0 && (a(!1), c(!0));
  }, [t]), /* @__PURE__ */ y.jsx(
    jn,
    {
      label: n,
      description: e,
      checked: i,
      indeterminate: s,
      type: "checkbox",
      onChange: (u) => l(u),
      disabled: o
    }
  );
}
const Mi = (n, e, t, r) => n.map((o) => {
  if (o.name === e) {
    const i = o.hasProperties.map((a) => a.name === t ? {
      ...a,
      ...r
    } : a);
    return {
      ...o,
      hasProperties: i
    };
  }
  return o;
});
function QS({ propertySet: n, property: e, property_natural_language_name: t }) {
  const r = eo(), o = ke(Ms), [i, a] = X();
  return Y(() => {
    var s, c, l, u, d;
    switch (e.type) {
      case "IfcPropertySingleValue": {
        e.nominalValue.type === "IfcBoolean" ? a(
          /* @__PURE__ */ y.jsx(
            YS,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              disabled: !1,
              value: e.nominalValue.value,
              setValue: (f) => {
                if (o && n.name) {
                  const h = {
                    nominalValue: { ...e.nominalValue, value: f }
                  }, p = Mi(
                    o,
                    n.name,
                    e.name,
                    h
                  );
                  r(po(Object.values(p)));
                }
              }
            }
          )
        ) : a(
          /* @__PURE__ */ y.jsx(
            kn,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              placeholder: e.nominalValue.value,
              value: e.nominalValue.value || "",
              onChange: (f) => {
                if (o && n.name) {
                  const h = {
                    nominalValue: { ...e.nominalValue, value: f.target.value }
                  }, p = Mi(o, n.name, e.name, h);
                  r(po(Object.values(p)));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const f = (c = (s = e.enumerationValues) == null ? void 0 : s[0]) == null ? void 0 : c.value, h = ((l = e.enumerationReference) == null ? void 0 : l.enumerationValues) || [];
        a(
          /* @__PURE__ */ y.jsx(
            Ts,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              value: f,
              disabled: ((d = (u = e.enumerationReference) == null ? void 0 : u.enumerationValues) == null ? void 0 : d.length) === 1,
              onChange: (p) => {
                if (o && n.name) {
                  const g = h.find((C) => C.value === p), m = {
                    enumerationValues: g ? [g] : []
                  }, b = Mi(o, n.name, e.name, m);
                  r(po(Object.values(b)));
                }
              },
              data: h.map((p) => ({
                value: p.value,
                label: p.value
              }))
            }
          )
        );
        break;
      }
      default: {
        a(/* @__PURE__ */ y.jsx(kn, { placeholder: e.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [e, n, a, t, r, o]), i;
}
const JS = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function $o(n, e) {
  const t = n && JS[n] || "default";
  let r;
  return n === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? r = !0 : e.toUpperCase() === "FALSE" ? r = !1 : r = void 0 : r = e, {
    type: t,
    value: r
  };
}
function af(n, e, t) {
  let r;
  if (n && n.isDefinedBy) {
    let o = n.isDefinedBy.find((i) => i.name === e);
    if (o && (r = o.hasProperties.find((i) => i.name === t)), r)
      return r;
    if (o = n.isDefinedBy.find((i) => i.name === ""), o)
      return o.hasProperties.find((i) => i.name === t);
  }
  return r;
}
function XS(n, e, t, r) {
  var a;
  const o = af(e, t, r), i = ((a = o == null ? void 0 : o.nominalValue) == null ? void 0 : a.value) ?? null;
  return $o(n, i);
}
function ZS(n, e, t, r, o) {
  const i = af(e, t, r);
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
function e0(n, e, t, r) {
  var s;
  const o = ((s = n.allowedValues) == null ? void 0 : s.map(
    (c) => $o(n.dataType, c.value)
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
  n.propertyUri && (i.specification = n.propertyUri);
  const a = n.predefinedValue ? [$o(n.dataType, n.predefinedValue)] : ZS(
    n.dataType,
    r,
    t,
    e,
    o
  );
  return a.length > 0 && (i.enumerationValues = a), i;
}
function t0(n, e, t, r) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e,
    specification: n.propertyUri || ""
  }, i = n.predefinedValue ? $o(n.dataType, n.predefinedValue) : XS(n.dataType, r, t, e);
  return i !== null && (o.nominalValue = i), o;
}
function n0(n, e, t) {
  const { propertyCode: r } = n, o = r || "unknown", i = n.allowedValues ? e0(n, o, e, t) : t0(n, o, e, t);
  return i.specification = n.propertyUri || "", i;
}
function r0({ mainDictionaryClassification: n, recursiveMode: e }) {
  const t = eo(), r = ke(of), o = ke(Ms), i = ke(PS), a = ke(Wd), [s, c] = X({});
  return Y(() => {
    if (!n)
      return;
    const l = {};
    [n].forEach((d) => {
      var f;
      (f = d.classProperties) == null || f.forEach((h) => {
        if (!h || !h.propertySet)
          return;
        const p = h.propertySet || d.name;
        l[p] || (l[p] = {
          type: "IfcPropertySet",
          name: p,
          hasProperties: []
        }), l[p].hasProperties.push(
          n0(h, p, r)
        );
      });
    }), t(po(Object.values(l)));
  }, [t, r, n]), Y(() => {
    if (!n)
      return;
    const l = {};
    [n].forEach((d) => {
      var f;
      (f = d.classProperties) == null || f.forEach((h) => {
        h && h.propertyUri && (a && i && i[a] && i[a][h.propertyUri] ? l[h.propertyUri] = i[a][h.propertyUri] || "" : l[h.propertyUri] = h.name);
      });
    }), c(l);
  }, [n, e, r, i, a]), /* @__PURE__ */ y.jsx("div", { children: Di.toArray(
    o == null ? void 0 : o.map((l) => /* @__PURE__ */ y.jsx(Pe, { children: /* @__PURE__ */ y.jsxs(Pe.Item, { value: l.name || "Unknown", children: [
      /* @__PURE__ */ y.jsx(Pe.Control, { children: l.name }),
      /* @__PURE__ */ y.jsx(Pe.Panel, { children: /* @__PURE__ */ y.jsx(Es, { children: Di.toArray(
        l.hasProperties.map((u) => {
          const d = u.specification ? s[u.specification] : "";
          return /* @__PURE__ */ y.jsx(
            QS,
            {
              propertySet: l,
              property: u,
              property_natural_language_name: d
            }
          );
        })
      ) }) })
    ] }, l.name) }))
  ) });
}
function o0({ api: n, defaultSelection: e }) {
  const t = eo(), { t: r } = va(), [o, i] = X([]), a = ke(Ps), s = ue(null), [c, l] = X(void 0), [u, d] = X(""), [f] = Gg(u, 300), [h, p] = X(!1);
  Y(() => {
    e && (l(e), d(e.label));
  }, [e]);
  const g = me((v) => {
    d(v);
  }, []), m = me(
    (v) => {
      const w = o.find((S) => S.value === v);
      w && (l(w), p(!0));
    },
    [o]
  ), b = me(
    (v) => {
      v.key === "Enter" && o[0] && (d(o[0].label), m(o[0].value), s.current && s.current.blur());
    },
    [o, m]
  );
  Y(() => {
    e && !h && (d(e.label), l(e));
  }, [e, h]), Y(() => {
    if (a) {
      t(Jd([]));
      const v = {
        headers: to
      }, w = {
        SearchText: f,
        DictionaryUri: a.ifcClassification.location
      };
      n.api.searchInDictionaryV1List(w, v).then((S) => {
        var k;
        const E = S.data;
        if (E) {
          if (E.count) {
            const I = (k = E.dictionary) == null ? void 0 : k.classes;
            I && i(
              I.filter((x) => x.uri && x.name).map(
                (x) => ({
                  value: x.uri,
                  label: x.name
                })
              )
            );
          }
        } else
          console.error("API response data is null", S);
      }).catch((S) => {
        console.error("API request failed", S);
      });
    } else
      i([]);
  }, [n.api, f, t, a]), Y(() => {
    s.current && s.current.focus();
  }, []), Y(() => {
    t(ga(c ? c.value : null));
  }, [t, c]);
  const C = me(() => {
    g(""), s.current && s.current.focus(), l(void 0);
  }, [g]);
  return /* @__PURE__ */ y.jsx(
    bs,
    {
      label: `${r("searchMainDictionaryLabel")} ${a ? a.ifcClassification.name : ""}`,
      data: o,
      placeholder: "bSDD search...",
      value: u,
      onChange: g,
      onOptionSubmit: m,
      onKeyDown: b,
      ref: s,
      style: { width: "100%" },
      rightSection: /* @__PURE__ */ y.jsx(
        fr,
        {
          size: "sm",
          onMouseDown: (v) => {
            v.preventDefault();
          },
          onClick: C,
          "aria-label": "Clear value"
        }
      )
    }
  );
}
const xi = 60.7969;
let vl = 0, bl = 0;
function i0() {
  const { t: n } = va(), e = eo(), [t, r] = X(), [o, i] = X(!1), [a, s] = X(new Br(Rd[lw])), c = ke(Ps), l = ke(Wd), [u, d] = X(null), f = ke(ha), h = ke(ha), p = ke(CS), g = ke(wS), m = ke(LS), b = ke(of), C = ke(RS), [v, w] = X(xi), [S, E] = X("auto"), k = ke(Xd), I = me((D) => {
    var M;
    const G = JSON.stringify(D);
    (M = window == null ? void 0 : window.bsddBridge) == null || M.save(G).then((F) => {
      console.log("Sent to Revit", F);
    });
  }, []), x = me(() => {
    var D;
    (D = window == null ? void 0 : window.bsddBridge) == null || D.cancel();
  }, []), j = (D) => {
    d(D);
  };
  Y(() => {
    u && (console.log("settings updated: ", u), e(qd(u)), d(null));
  }, [u, e]), Y(() => {
    f && s(new Br(f));
  }, [f]), Y(() => {
    (async () => {
      try {
        let G, M;
        if (cw && window != null && window.bsddBridge) {
          const F = await window.bsddBridge.loadSettings();
          ({ settings: G, ifcData: M } = JSON.parse(F));
        }
        if (G && j(G), M && (e(VS(M)), M.length > 0)) {
          const F = M[0];
          e(FS(F));
        }
      } catch (G) {
        console.error("Failed to load settings:", G);
      }
    })();
  }, [e]), Y(() => {
    var G;
    if (!b || !c)
      return;
    const D = c.ifcClassification.location;
    (G = b.hasAssociations) == null || G.forEach((M) => {
      var F;
      if (M.type === "IfcClassificationReference") {
        const H = M;
        (F = H.referencedSource) != null && F.location && H.referencedSource.location === D && (H.location && e(ga(H.location)), r({
          label: H.name,
          value: H.location
        }));
      }
    });
  }, [c, b, e]), Y(() => {
    if (f !== null && p !== null) {
      const D = {
        bsddApiEnvironment: f,
        includeTestDictionaries: p,
        languageCode: l,
        dictionaryUris: g
      };
      e(Yd(g)), e(_S(D)), e(AS(D));
    }
  }, [
    f,
    h,
    p,
    e,
    g,
    l
  ]), Y(() => {
    C && e(ef(C));
  }, [C, e]), Y(() => {
    E(`${v * g.length + 48}px`);
  }, [g.length, v]);
  const V = (D) => {
    const G = bl + (D.clientY - vl) / g.length;
    w(G > xi ? G : xi);
  }, Z = () => {
    document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", Z);
  }, ae = (D) => {
    vl = D.clientY, bl = v, document.addEventListener("mousemove", V), document.addEventListener("mouseup", Z);
  };
  return /* @__PURE__ */ y.jsxs(Ss, { children: [
    /* @__PURE__ */ y.jsx(kn, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ y.jsx(kn, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ y.jsx(kn, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ y.jsx(Ur, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ y.jsx(o0, { api: a, defaultSelection: t }) }),
    C ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs(Pe, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ y.jsxs(Pe.Item, { value: "Classifications", children: [
          /* @__PURE__ */ y.jsx(Pe.Control, { children: /* @__PURE__ */ y.jsx(Lo, { order: 5, children: n("classificationsLabel") }) }),
          /* @__PURE__ */ y.jsx(Pe.Panel, { style: { height: S }, children: /* @__PURE__ */ y.jsx(KS, { height: v, handleMouseDown: ae }) })
        ] }, "Classifications"),
        /* @__PURE__ */ y.jsxs(Pe.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ y.jsx(Pe.Control, { children: /* @__PURE__ */ y.jsx(Lo, { order: 5, children: n("propertysetsLabel") }) }),
          /* @__PURE__ */ y.jsx(Pe.Panel, { children: /* @__PURE__ */ y.jsx(
            r0,
            {
              mainDictionaryClassification: k,
              recursiveMode: o
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ y.jsxs(Ur, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ y.jsx(BS, { callback: I, ifcEntity: m }),
        /* @__PURE__ */ y.jsx(Zr, { fullWidth: !0, variant: "light", color: "gray", onClick: x, children: n("cancel") })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs(rs, { mx: "md", title: n("noClassificationSelected"), mt: "xl", children: [
      n("classSearchInstruction"),
      /* @__PURE__ */ y.jsx(wd, { h: "md" }),
      n("needHelp"),
      " ",
      /* @__PURE__ */ y.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: n("checkDocumentation") })
    ] })
  ] });
}
function a0() {
  const [n, e] = X(null);
  return Y(() => {
    const t = new Ng(iw);
    e(t);
  }, []), n ? /* @__PURE__ */ y.jsx(lu, { theme: ow, children: /* @__PURE__ */ y.jsx(i0, {}) }) : /* @__PURE__ */ y.jsx("div", { children: "Loading..." });
}
const s0 = Gw({
  reducer: {
    settings: TS,
    ifcData: WS,
    ifcEntity: HS,
    bsdd: xS
  }
});
ji.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ y.jsx(Ko.StrictMode, { children: /* @__PURE__ */ y.jsx(Uf, { store: s0, children: /* @__PURE__ */ y.jsx(a0, {}) }) })
);
