var ah = Object.defineProperty;
var sh = (r, e, t) => e in r ? ah(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => (sh(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as ae from "react";
import Ko, { createContext as Mr, useContext as cr, useState as Z, useRef as ue, useEffect as W, Fragment as Cl, useMemo as On, useCallback as me, useLayoutEffect as ya, useId as wl, forwardRef as ye, cloneElement as qo, Children as Li, createElement as Fi } from "react";
import * as ch from "react-dom";
import Sl, { flushSync as lh, createPortal as uh } from "react-dom";
function dh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Il = { exports: {} }, Vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hh = Ko, fh = Symbol.for("react.element"), ph = Symbol.for("react.fragment"), gh = Object.prototype.hasOwnProperty, mh = hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tl(r, e, t) {
  var n, o = {}, i = null, a = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (n in e)
    gh.call(e, n) && !yh.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: fh, type: r, key: i, ref: a, props: o, _owner: mh.current };
}
Vo.Fragment = ph;
Vo.jsx = Tl;
Vo.jsxs = Tl;
Il.exports = Vo;
var y = Il.exports, ji = {}, Fs = Sl;
ji.createRoot = Fs.createRoot, ji.hydrateRoot = Fs.hydrateRoot;
var El = { exports: {} }, _l = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn = Ko;
function vh(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var bh = typeof Object.is == "function" ? Object.is : vh, Ch = Kn.useSyncExternalStore, wh = Kn.useRef, Sh = Kn.useEffect, Ih = Kn.useMemo, Th = Kn.useDebugValue;
_l.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var i = wh(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else
    a = i.current;
  i = Ih(function() {
    function c(f) {
      if (!l) {
        if (l = !0, u = f, f = n(f), o !== void 0 && a.hasValue) {
          var p = a.value;
          if (o(p, f))
            return h = p;
        }
        return h = f;
      }
      if (p = h, bh(u, f))
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
  var s = Ch(r, i[0], i[1]);
  return Sh(function() {
    a.hasValue = !0, a.value = s;
  }, [s]), Th(s), s;
};
El.exports = _l;
var Eh = El.exports, tt = (
  // prettier-ignore
  // @ts-ignore
  "default" in ae ? ae.default : ae
), js = Symbol.for("react-redux-context"), Us = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function _h() {
  if (!tt.createContext)
    return {};
  const r = Us[js] ?? (Us[js] = /* @__PURE__ */ new Map());
  let e = r.get(tt.createContext);
  return e || (e = tt.createContext(
    null
  ), r.set(tt.createContext, e)), e;
}
var nr = /* @__PURE__ */ _h(), kh = () => {
  throw new Error("uSES not initialized!");
};
function va(r = nr) {
  return function() {
    return tt.useContext(r);
  };
}
var kl = /* @__PURE__ */ va(), Al = kh, Ah = (r) => {
  Al = r;
}, Rh = (r, e) => r === e;
function Ph(r = nr) {
  const e = r === nr ? kl : va(r), t = (n, o = {}) => {
    const { equalityFn: i = Rh, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o, {
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
    ), f = Al(
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
var Sr = /* @__PURE__ */ Ph();
function Nh(r) {
  r();
}
function Mh() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      Nh(() => {
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
var Hs = {
  notify() {
  },
  get: () => []
};
function Oh(r, e) {
  let t, n = Hs, o = 0, i = !1;
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
    o++, t || (t = e ? e.addNestedSub(c) : r.subscribe(c), n = Mh());
  }
  function h() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = Hs);
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
var xh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dh = typeof navigator < "u" && navigator.product === "ReactNative", Lh = xh || Dh ? tt.useLayoutEffect : tt.useEffect;
function Fh({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = tt.useMemo(() => {
    const l = Oh(r);
    return {
      store: r,
      subscription: l,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [r, n, o, i]), s = tt.useMemo(() => r.getState(), [r]);
  Lh(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== r.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = e || nr;
  return /* @__PURE__ */ tt.createElement(c.Provider, { value: a }, t);
}
var jh = Fh;
function Rl(r = nr) {
  const e = r === nr ? kl : (
    // @ts-ignore
    va(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Uh = /* @__PURE__ */ Rl();
function Hh(r = nr) {
  const e = r === nr ? Uh : Rl(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Bh = /* @__PURE__ */ Hh();
Ah(Eh.useSyncExternalStoreWithSelector);
const zh = {
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
let $h = class Ui {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || zh, this.options = t, this.debug = t.debug;
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
    return new Ui(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ui(this.logger, e);
  }
};
var At = new $h();
class Go {
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
function gn() {
  let r, e;
  const t = new Promise((n, o) => {
    r = n, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}
function Bs(r) {
  return r == null ? "" : "" + r;
}
function Kh(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
const qh = /###/g;
function In(r, e, t) {
  function n(s) {
    return s && s.indexOf("###") > -1 ? s.replace(qh, ".") : s;
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
function zs(r, e, t) {
  const {
    obj: n,
    k: o
  } = In(r, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[o] = t;
    return;
  }
  let i = e[e.length - 1], a = e.slice(0, e.length - 1), s = In(r, a, Object);
  for (; s.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), s = In(r, a, Object), s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = t;
}
function Vh(r, e, t, n) {
  const {
    obj: o,
    k: i
  } = In(r, e, Object);
  o[i] = o[i] || [], n && (o[i] = o[i].concat(t)), n || o[i].push(t);
}
function go(r, e) {
  const {
    obj: t,
    k: n
  } = In(r, e);
  if (t)
    return t[n];
}
function Gh(r, e, t) {
  const n = go(r, t);
  return n !== void 0 ? n : go(e, t);
}
function Pl(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Pl(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function Hr(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Wh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Yh(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => Wh[e]) : r;
}
class Qh {
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
const Jh = [" ", ",", "?", "!", ";"], Xh = new Qh(20);
function Zh(r, e, t) {
  e = e || "", t = t || "";
  const n = Jh.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (n.length === 0)
    return !0;
  const o = Xh.getRegExp(`(${n.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !o.test(r);
  if (!i) {
    const a = r.indexOf(t);
    a > 0 && !o.test(r.substring(0, a)) && (i = !0);
  }
  return i;
}
function Hi(r, e) {
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
function mo(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
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
  getResource(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, a = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], n && (Array.isArray(n) ? s.push(...n) : typeof n == "string" && i ? s.push(...n.split(i)) : s.push(n)));
    const c = go(this.data, s);
    return !c && !t && !n && e.indexOf(".") > -1 && (e = s[0], t = s[1], n = s.slice(2).join(".")), c || !a || typeof n != "string" ? c : Hi(this.data && this.data[e] && this.data[e][t], n, i);
  }
  addResource(e, t, n, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [e, t];
    n && (s = s.concat(a ? n.split(a) : n)), e.indexOf(".") > -1 && (s = e.split("."), o = t, t = s[1]), this.addNamespaces(t), zs(this.data, s, o), i.silent || this.emit("added", e, t, n, o);
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
    let c = go(this.data, s) || {};
    a.skipCopy || (n = JSON.parse(JSON.stringify(n))), o ? Pl(c, n, i) : c = {
      ...c,
      ...n
    }, zs(this.data, s, c), a.silent || this.emit("added", e, t, n);
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
var Nl = {
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
const Ks = {};
class yo extends Go {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Kh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = At.create("translator");
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
    const a = n && e.indexOf(n) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Zh(e, n, o);
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
    const f = h && h.usedKey || a, p = h && h.exactUsedKey || a, g = Object.prototype.toString.apply(d), m = ["[object Number]", "[object Function]", "[object RegExp]"], C = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (b && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && m.indexOf(g) < 0 && !(typeof C == "string" && Array.isArray(d))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, d, {
          ...t,
          ns: s
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (h.res = w, h.usedParams = this.getUsedParamsDetails(t), h) : w;
      }
      if (i) {
        const w = Array.isArray(d), I = w ? [] : {}, T = w ? p : f;
        for (const k in d)
          if (Object.prototype.hasOwnProperty.call(d, k)) {
            const E = `${T}${i}${k}`;
            I[k] = this.translate(E, {
              ...t,
              joinArrays: !1,
              ns: s
            }), I[k] === E && (I[k] = d[k]);
          }
        d = I;
      }
    } else if (b && typeof C == "string" && Array.isArray(d))
      d = d.join(C), d && (d = this.extendTranslation(d, e, t, n));
    else {
      let w = !1, I = !1;
      const T = t.count !== void 0 && typeof t.count != "string", k = yo.hasDefaultValue(t), E = T ? this.pluralResolver.getSuffix(l, t.count, t) : "", O = t.ordinal && T ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", H = T && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), $ = H && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${E}`] || t[`defaultValue${O}`] || t.defaultValue;
      !this.isValidLookup(d) && k && (w = !0, d = $), this.isValidLookup(d) || (I = !0, d = a);
      const oe = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && I ? void 0 : d, D = k && $ !== d && this.options.updateMissing;
      if (I || w || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", l, c, a, D ? $ : d), i) {
          const U = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          U && U.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let G = [];
        const x = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && x && x[0])
          for (let U = 0; U < x.length; U++)
            G.push(x[U]);
        else
          this.options.saveMissingTo === "all" ? G = this.languageUtils.toResolveHierarchy(t.lng || this.language) : G.push(t.lng || this.language);
        const F = (U, X, ce) => {
          const Ie = k && ce !== d ? ce : oe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(U, c, X, Ie, D, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(U, c, X, Ie, D, t), this.emit("missingKey", U, c, X, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && T ? G.forEach((U) => {
          const X = this.pluralResolver.getSuffixes(U, t);
          H && t[`defaultValue${this.options.pluralSeparator}zero`] && X.indexOf(`${this.options.pluralSeparator}zero`) < 0 && X.push(`${this.options.pluralSeparator}zero`), X.forEach((ce) => {
            F([U], a + ce, t[`defaultValue${ce}`] || $);
          });
        }) : F(G, a, $));
      }
      d = this.extendTranslation(d, e, t, h, n), I && d === a && this.options.appendNamespaceToMissingKey && (d = `${c}:${a}`), (I || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${a}` : a, w ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
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
    return e != null && c && c.length && n.applyPostProcessor !== !1 && (e = Nl.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(n) || (s = m, !Ks[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (Ks[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((C) => {
          if (this.isValidLookup(n))
            return;
          a = C;
          const b = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(b, u, C, m, t);
          else {
            let w;
            d && (w = this.pluralResolver.getSuffix(C, t.count, t));
            const I = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (b.push(u + w), t.ordinal && w.indexOf(T) === 0 && b.push(u + w.replace(T, this.options.pluralSeparator)), f && b.push(u + I)), p) {
              const k = `${u}${this.options.contextSeparator}${t.context}`;
              b.push(k), d && (b.push(k + w), t.ordinal && w.indexOf(T) === 0 && b.push(k + w.replace(T, this.options.pluralSeparator)), f && b.push(k + I));
            }
          }
          let v;
          for (; v = b.pop(); )
            this.isValidLookup(n) || (i = v, n = this.getResource(C, m, v, t));
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
function yi(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
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
      let n = e.split("-");
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = yi(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = yi(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = yi(n[2].toLowerCase()))), n.join("-");
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
let ef = [{
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
}], tf = {
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
const rf = ["v1", "v2", "v3"], nf = ["v4"], Vs = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function of() {
  const r = {};
  return ef.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: tf[e.fc]
      };
    });
  }), r;
}
class af {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = At.create("pluralResolver"), (!this.options.compatibilityJSON || nf.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = of();
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, i) => Vs[o] - Vs[i]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !rf.includes(this.options.compatibilityJSON);
  }
}
function Gs(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Gh(r, e, t);
  return !i && o && typeof t == "string" && (i = Hi(r, t, n), i === void 0 && (i = Hi(e, t, n))), i;
}
class sf {
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
      alwaysFormat: b
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Yh, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Hr(i) : a || "{{", this.suffix = s ? Hr(s) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? Hr(d) : f || Hr("$t("), this.nestingSuffix = p ? Hr(p) : g || Hr(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = b !== void 0 ? b : !1, this.resetRegExp();
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
        const b = Gs(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(b, void 0, n, {
          ...o,
          ...t,
          interpolationkey: p
        }) : b;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), C = g.join(this.formatSeparator).trim();
      return this.format(Gs(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), C, n, {
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
          typeof a != "string" && !this.useRawValueToEscape && (a = Bs(a));
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
      typeof i != "string" && (i = Bs(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), i = ""), l && (i = c.reduce((u, h) => this.format(u, h, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function cf(r) {
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
function Br(r) {
  const e = {};
  return function(n, o, i) {
    const a = o + JSON.stringify(i);
    let s = e[a];
    return s || (s = r(mo(o), i), e[a] = s), s(n);
  };
}
class lf {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = At.create("formatter"), this.options = e, this.formats = {
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
    return t.split(this.formatSeparator).reduce((s, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = cf(c);
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
function uf(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class df extends Go {
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
      Vh(c.loaded, [i], a), uf(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
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
function Ys(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function ro() {
}
function hf(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class xn extends Go {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ys(e), this.services = {}, this.logger = At, this.modules = {
      external: []
    }, hf(this), t && !this.isInitialized && !e.isClone) {
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
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = lf);
      const h = new qs(this.options);
      this.store = new $s(this.options.resources, this.options);
      const d = this.services;
      d.logger = At, d.resourceStore = this.store, d.languageUtils = h, d.pluralResolver = new af(h, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (d.formatter = i(u), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new sf(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new df(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(f) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new yo(this.services, this.options), this.translator.on("*", function(f) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = ro), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = gn(), l = () => {
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ro;
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
    const o = gn();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = ro), this.services.backendConnector.reload(e, t, (i) => {
      o.resolve(), n(i);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Nl.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const o = gn();
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
    const n = gn();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), t && t(o);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = gn();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], i = e.filter((a) => o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((a) => {
      n.resolve(), t && t(a);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new qs(Ws());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new xn(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ro;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new xn(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, n && (i.store = new $s(this.store.data, o), i.services.resourceStore = i.store), i.translator = new yo(i.services, o), i.translator.on("*", function(s) {
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
const xe = xn.createInstance();
xe.createInstance = xn.createInstance;
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
function ff() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Qs = {};
function Bi() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Qs[e[0]] || (typeof e[0] == "string" && (Qs[e[0]] = /* @__PURE__ */ new Date()), ff(...e));
}
const Ml = (r, e) => () => {
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
function Js(r, e, t) {
  r.loadNamespaces(e, Ml(r, t));
}
function Xs(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, Ml(r, n));
}
function pf(r, e) {
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
function gf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Bi("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : pf(r, e, t);
}
const mf = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, yf = {
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
}, vf = (r) => yf[r], bf = (r) => r.replace(mf, vf);
let zi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: bf
};
function Cf() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  zi = {
    ...zi,
    ...r
  };
}
function wf() {
  return zi;
}
let Ol;
function Sf(r) {
  Ol = r;
}
function If() {
  return Ol;
}
const Tf = {
  type: "3rdParty",
  init(r) {
    Cf(r.options.react), Sf(r);
  }
}, Ef = Mr();
class _f {
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
const kf = (r, e) => {
  const t = ue();
  return W(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function Wo(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = cr(Ef) || {}, i = t || n || If();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new _f()), !i) {
    Bi("You will need to pass in an i18next instance by using initReactI18next");
    const v = (I, T) => typeof T == "string" ? T : T && typeof T == "object" && typeof T.defaultValue == "string" ? T.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, w = [v, {}, !1];
    return w.t = v, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && Bi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...wf(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: c
  } = a;
  let l = r || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((v) => gf(v, i, a));
  function h() {
    return i.getFixedT(e.lng || null, a.nsMode === "fallback" ? l : l[0], c);
  }
  const [d, f] = Z(h);
  let p = l.join();
  e.lng && (p = `${e.lng}${p}`);
  const g = kf(p), m = ue(!0);
  W(() => {
    const {
      bindI18n: v,
      bindI18nStore: w
    } = a;
    m.current = !0, !u && !s && (e.lng ? Xs(i, e.lng, l, () => {
      m.current && f(h);
    }) : Js(i, l, () => {
      m.current && f(h);
    })), u && g && g !== p && m.current && f(h);
    function I() {
      m.current && f(h);
    }
    return v && i && i.on(v, I), w && i && i.store.on(w, I), () => {
      m.current = !1, v && i && v.split(" ").forEach((T) => i.off(T, I)), w && i && w.split(" ").forEach((T) => i.store.off(T, I));
    };
  }, [i, p]);
  const C = ue(!0);
  W(() => {
    m.current && !C.current && f(h), C.current = !1;
  }, [i, c]);
  const b = [d, i, u];
  if (b.t = d, b.i18n = i, b.ready = u, u || !u && !s)
    return b;
  throw new Promise((v) => {
    e.lng ? Xs(i, e.lng, l, () => v()) : Js(i, l, () => v());
  });
}
const Af = {
  apply: "تطبيق",
  save: "حفظ",
  cancel: "إلغاء",
  classSearchInstruction: "حدد تصنيفًا في مربع البحث أعلاه.",
  noDescription: "لا يوجد وصف",
  linkTabTitle: "رابط",
  settingsTabTitle: "الإعدادات",
  language: "اللغة",
  searchMainDictionaryLabel: "ابحث عن فئة",
  searchClassesPlaceholder: "ابحث عن فئة",
  selectLanguageInstruction: "اختر اللغة",
  selectMainDictionary: "القاموس الرئيسي",
  selectMainDictionaryPlaceholder: "حدد القاموس الرئيسي",
  selectIfcDictionary: "قاموس IFC",
  selectIfcDictionaryPlaceholder: "حدد قاموس IFC",
  selectFilterDictionaries: "حدد قواميس التصفية",
  selectFilterDictionariesPlaceholder: "حدد قواميس التصفية",
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
}, Rf = {
  translation: Af
}, Pf = {
  apply: "Použít",
  save: "Uložit",
  cancel: "Zrušit",
  classSearchInstruction: "Vyberte klasifikaci v horním vyhledávacím poli.",
  noDescription: "Žádný popis",
  linkTabTitle: "Odkaz",
  settingsTabTitle: "Nastavení",
  language: "Jazyk",
  searchMainDictionaryLabel: "Vyhledat třídu",
  searchClassesPlaceholder: "Vyhledat třídu",
  selectLanguageInstruction: "Vyberte jazyk",
  selectMainDictionary: "Hlavní slovník",
  selectMainDictionaryPlaceholder: "Vyberte hlavní slovník",
  selectIfcDictionary: "Slovník IFC",
  selectIfcDictionaryPlaceholder: "Vyberte slovník IFC",
  selectFilterDictionaries: "Vyberte filtrační slovníky",
  selectFilterDictionariesPlaceholder: "Vyberte filtrační slovníky",
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
}, Nf = {
  translation: Pf
}, Mf = {
  apply: "Anvend",
  save: "Gem",
  cancel: "Annuller",
  classSearchInstruction: "Vælg en klassifikation i søgefeltet ovenfor.",
  noDescription: "Ingen beskrivelse",
  linkTabTitle: "Link",
  settingsTabTitle: "Indstillinger",
  language: "Sprog",
  searchMainDictionaryLabel: "Søg en klasse",
  searchClassesPlaceholder: "Søg en klasse",
  selectLanguageInstruction: "Vælg sprog",
  selectMainDictionary: "Hovedordbog",
  selectMainDictionaryPlaceholder: "Vælg hovedordbog",
  selectIfcDictionary: "IFC-ordbog",
  selectIfcDictionaryPlaceholder: "Vælg IFC-ordbog",
  selectFilterDictionaries: "Vælg filterordbøger",
  selectFilterDictionariesPlaceholder: "Vælg filterordbøger",
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
}, Of = {
  translation: Mf
}, xf = {
  apply: "Anwenden",
  save: "Speichern",
  cancel: "Abbrechen",
  classSearchInstruction: "Wählen Sie eine Klassifikation im obigen Suchfeld aus.",
  noDescription: "Keine Beschreibung",
  linkTabTitle: "Verknüpfen",
  settingsTabTitle: "Einstellungen",
  language: "Sprache",
  searchMainDictionaryLabel: "Suche eine Klasse",
  searchClassesPlaceholder: "Suche eine Klasse",
  selectLanguageInstruction: "Sprache auswählen",
  selectMainDictionary: "Hauptwörterbuch",
  selectMainDictionaryPlaceholder: "Hauptwörterbuch auswählen",
  selectIfcDictionary: "IFC-Wörterbuch",
  selectIfcDictionaryPlaceholder: "IFC-Wörterbuch auswählen",
  selectFilterDictionaries: "Filterwörterbücher auswählen",
  selectFilterDictionariesPlaceholder: "Filterwörterbuch auswählen",
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
}, Df = {
  translation: xf
}, Lf = {
  apply: "Assign",
  save: "Save",
  cancel: "Cancel",
  classSearchInstruction: "Select a classification in the search box above.",
  noDescription: "No description",
  linkTabTitle: "Link",
  settingsTabTitle: "Settings",
  language: "Language",
  searchMainDictionaryLabel: "Search a class",
  searchClassesPlaceholder: "Search classes",
  selectLanguageInstruction: "Select language",
  selectMainDictionary: "Main dictionary",
  selectMainDictionaryPlaceholder: "Select main dictionary",
  selectIfcDictionary: "IFC dictionary",
  selectIfcDictionaryPlaceholder: "Select IFC dictionary",
  selectFilterDictionaries: "Filter dictionaries",
  selectFilterDictionariesPlaceholder: "Select filter dictionaries",
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
}, Ff = {
  translation: Lf
}, jf = {
  apply: "Aplicar",
  save: "Guardar",
  cancel: "Cancelar",
  classSearchInstruction: "Seleccione una clasificación en el cuadro de búsqueda de arriba.",
  noDescription: "Sin descripción",
  linkTabTitle: "Enlace",
  settingsTabTitle: "Configuraciones",
  language: "Idioma",
  searchMainDictionaryLabel: "Buscar una clase",
  searchClassesPlaceholder: "Buscar una clase",
  selectLanguageInstruction: "Seleccione el idioma",
  selectMainDictionary: "Diccionario principal",
  selectMainDictionaryPlaceholder: "Seleccione el diccionario principal",
  selectIfcDictionary: "Diccionario IFC",
  selectIfcDictionaryPlaceholder: "Seleccione el diccionario IFC",
  selectFilterDictionaries: "Seleccione diccionarios de filtro",
  selectFilterDictionariesPlaceholder: "Seleccione diccionarios de filtro",
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
}, Uf = {
  translation: jf
}, Hf = {
  apply: "Käytä",
  save: "Tallenna",
  cancel: "Peruuta",
  classSearchInstruction: "Valitse luokitus yllä olevasta hakukentästä.",
  noDescription: "Ei kuvausta",
  linkTabTitle: "Linkki",
  settingsTabTitle: "Asetukset",
  language: "Kieli",
  searchMainDictionaryLabel: "Hae luokkaa",
  searchClassesPlaceholder: "Hae luokkaa",
  selectLanguageInstruction: "Valitse kieli",
  selectMainDictionary: "Pääsanakirja",
  selectMainDictionaryPlaceholder: "Valitse pääsanakirja",
  selectIfcDictionary: "IFC-sanakirja",
  selectIfcDictionaryPlaceholder: "Valitse IFC-sanakirja",
  selectFilterDictionaries: "Valitse suodatussanakirjat",
  selectFilterDictionariesPlaceholder: "Valitse suodatussanakirjat",
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
}, Bf = {
  translation: Hf
}, zf = {
  apply: "Appliquer",
  save: "Enregistrer",
  cancel: "Annuler",
  classSearchInstruction: "Sélectionnez une classification dans la boîte de recherche ci-dessus.",
  noDescription: "Pas de description",
  linkTabTitle: "Lien",
  settingsTabTitle: "Paramètres",
  language: "Langue",
  searchMainDictionaryLabel: "Rechercher une classe",
  searchClassesPlaceholder: "Rechercher une classe",
  selectLanguageInstruction: "Sélectionnez la langue",
  selectMainDictionary: "Dictionnaire principal",
  selectMainDictionaryPlaceholder: "Sélectionner le dictionnaire principal",
  selectIfcDictionary: "Dictionnaire IFC",
  selectIfcDictionaryPlaceholder: "Sélectionner le dictionnaire IFC",
  selectFilterDictionaries: "Sélectionner les dictionnaires de filtre",
  selectFilterDictionariesPlaceholder: "Sélectionner les dictionnaires de filtre",
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
}, $f = {
  translation: zf
}, Kf = {
  apply: "लागू करें",
  save: "सहेजें",
  cancel: "रद्द करें",
  classSearchInstruction: "ऊपर दिए गए खोज बॉक्स में एक वर्गीकरण चुनें।",
  noDescription: "कोई विवरण नहीं",
  linkTabTitle: "लिंक",
  settingsTabTitle: "सेटिंग्स",
  language: "भाषा",
  searchMainDictionaryLabel: "एक वर्ग खोजें",
  searchClassesPlaceholder: "वर्ग खोजें",
  selectLanguageInstruction: "भाषा चुनें",
  selectMainDictionary: "मुख्य शब्दकोश",
  selectMainDictionaryPlaceholder: "मुख्य शब्दकोश चुनें",
  selectIfcDictionary: "IFC शब्दकोश",
  selectIfcDictionaryPlaceholder: "IFC शब्दकोश चुनें",
  selectFilterDictionaries: "फिल्टर शब्दकोश चुनें",
  selectFilterDictionariesPlaceholder: "फिल्टर शब्दकोश चुनें",
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
}, qf = {
  translation: Kf
}, Vf = {
  apply: "Primijeni",
  save: "Spremi",
  cancel: "Otkazati",
  classSearchInstruction: "Odaberite klasifikaciju u gornjem okviru za pretraživanje.",
  noDescription: "Nema opisa",
  linkTabTitle: "Poveznica",
  settingsTabTitle: "Postavke",
  language: "Jezik",
  searchMainDictionaryLabel: "Pretraži klasu",
  searchClassesPlaceholder: "Pretraži klasu",
  selectLanguageInstruction: "Odaberite jezik",
  selectMainDictionary: "Glavni rječnik",
  selectMainDictionaryPlaceholder: "Odaberite glavni rječnik",
  selectIfcDictionary: "IFC rječnik",
  selectIfcDictionaryPlaceholder: "Odaberite IFC rječnik",
  selectFilterDictionaries: "Odaberite filtar rječnike",
  selectFilterDictionariesPlaceholder: "Odaberite filtar rječnika",
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
}, Gf = {
  translation: Vf
}, Wf = {
  apply: "Nota",
  save: "Vista",
  cancel: "Hætta við",
  classSearchInstruction: "Veldu flokkun í leitarglugganum hér að ofan.",
  noDescription: "Engin lýsing",
  linkTabTitle: "Tengja",
  settingsTabTitle: "Stillingar",
  language: "Tungumál",
  searchMainDictionaryLabel: "Leita að flokki",
  searchClassesPlaceholder: "Leita að flokki",
  selectLanguageInstruction: "Veldu tungumál",
  selectMainDictionary: "Aðalorðabók",
  selectMainDictionaryPlaceholder: "Veldu aðalorðabók",
  selectIfcDictionary: "IFC orðabók",
  selectIfcDictionaryPlaceholder: "Veldu IFC orðabók",
  selectFilterDictionaries: "Veldu síu orðabækur",
  selectFilterDictionariesPlaceholder: "Veldu síu orðabækur",
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
}, Yf = {
  translation: Wf
}, Qf = {
  apply: "Applica",
  save: "Salva",
  cancel: "Annulla",
  classSearchInstruction: "Seleziona una classificazione nella casella di ricerca sopra.",
  noDescription: "Nessuna descrizione",
  linkTabTitle: "Collega",
  settingsTabTitle: "Impostazioni",
  language: "Lingua",
  searchMainDictionaryLabel: "Cerca una classe",
  searchClassesPlaceholder: "Cerca una classe",
  selectLanguageInstruction: "Seleziona lingua",
  selectMainDictionary: "Dizionario principale",
  selectMainDictionaryPlaceholder: "Seleziona dizionario principale",
  selectIfcDictionary: "Dizionario IFC",
  selectIfcDictionaryPlaceholder: "Seleziona dizionario IFC",
  selectFilterDictionaries: "Seleziona dizionari filtro",
  selectFilterDictionariesPlaceholder: "Seleziona dizionari filtro",
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
}, Jf = {
  translation: Qf
}, Xf = {
  apply: "適用",
  save: "保存",
  cancel: "キャンセル",
  classSearchInstruction: "上の検索ボックスで分類を選択してください。",
  noDescription: "説明なし",
  linkTabTitle: "リンク",
  settingsTabTitle: "設定",
  language: "言語",
  searchMainDictionaryLabel: "クラスを検索",
  searchClassesPlaceholder: "クラスを検索",
  selectLanguageInstruction: "言語を選択",
  selectMainDictionary: "メイン辞書",
  selectMainDictionaryPlaceholder: "メイン辞書を選択",
  selectIfcDictionary: "IFC辞書",
  selectIfcDictionaryPlaceholder: "IFC辞書を選択",
  selectFilterDictionaries: "フィルター辞書を選択",
  selectFilterDictionariesPlaceholder: "フィルター辞書を選択",
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
}, Zf = {
  translation: Xf
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
  searchClassesPlaceholder: "클래스 검색",
  selectLanguageInstruction: "언어 선택",
  selectMainDictionary: "주요 사전",
  selectMainDictionaryPlaceholder: "주요 사전 선택",
  selectIfcDictionary: "IFC 사전",
  selectIfcDictionaryPlaceholder: "IFC 사전 선택",
  selectFilterDictionaries: "필터 사전 선택",
  selectFilterDictionariesPlaceholder: "필터 사전 선택",
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
}, rp = {
  apply: "Taikyti",
  save: "Išsaugoti",
  cancel: "Atšaukti",
  classSearchInstruction: "Pasirinkite klasifikaciją aukščiau esančiame paieškos laukelyje.",
  noDescription: "Nėra aprašymo",
  linkTabTitle: "Nuoroda",
  settingsTabTitle: "Nustatymai",
  language: "Kalba",
  searchMainDictionaryLabel: "Ieškoti klasės",
  searchClassesPlaceholder: "Ieškoti klasės",
  selectLanguageInstruction: "Pasirinkite kalbą",
  selectMainDictionary: "Pagrindinis žodynas",
  selectMainDictionaryPlaceholder: "Pasirinkite pagrindinį žodyną",
  selectIfcDictionary: "IFC žodynas",
  selectIfcDictionaryPlaceholder: "Pasirinkite IFC žodyną",
  selectFilterDictionaries: "Pasirinkite filtro žodynus",
  selectFilterDictionariesPlaceholder: "Pasirinkite filtro žodynus",
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
}, np = {
  translation: rp
}, op = {
  apply: "Toewijzen",
  save: "Opslaan",
  cancel: "Annuleren",
  classSearchInstruction: "Selecteer een classificatie in het zoekveld hierboven.",
  noDescription: "Geen beschrijving",
  linkTabTitle: "Koppelen",
  settingsTabTitle: "Instellingen",
  language: "Taal",
  searchMainDictionaryLabel: "Zoek een classificatie in",
  searchClassesPlaceholder: "Zoek een classificatie",
  selectLanguageInstruction: "Selecteer taal",
  selectMainDictionary: "bSDD domein",
  selectMainDictionaryPlaceholder: "Selecteer bSDD domein",
  selectIfcDictionary: "IFC domein",
  selectIfcDictionaryPlaceholder: "Selecteer IFC domein",
  selectFilterDictionaries: "Filter domeinen",
  selectFilterDictionariesPlaceholder: "Selecteer filter domeinen",
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
  searchClassesPlaceholder: "Søk etter klasse",
  selectLanguageInstruction: "Velg språk",
  selectMainDictionary: "Hovedordbok",
  selectMainDictionaryPlaceholder: "Velg hovedordbok",
  selectIfcDictionary: "IFC-ordbok",
  selectIfcDictionaryPlaceholder: "Velg IFC-ordbok",
  selectFilterDictionaries: "Velg filterordbøker",
  selectFilterDictionariesPlaceholder: "Velg filterordbøker",
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
  searchClassesPlaceholder: "Szukaj klasy",
  selectLanguageInstruction: "Wybierz język",
  selectMainDictionary: "Główny słownik",
  selectMainDictionaryPlaceholder: "Wybierz główny słownik",
  selectIfcDictionary: "Słownik IFC",
  selectIfcDictionaryPlaceholder: "Wybierz słownik IFC",
  selectFilterDictionaries: "Wybierz słowniki filtrów",
  selectFilterDictionariesPlaceholder: "Wybierz słowniki filtrów",
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
  searchClassesPlaceholder: "Pesquisar classe",
  selectLanguageInstruction: "Selecione o idioma",
  selectMainDictionary: "Dicionário principal",
  selectMainDictionaryPlaceholder: "Selecione o dicionário principal",
  selectIfcDictionary: "Dicionário IFC",
  selectIfcDictionaryPlaceholder: "Selecione o dicionário IFC",
  selectFilterDictionaries: "Dicionários de filtro",
  selectFilterDictionariesPlaceholder: "Selecione dicionários de filtro",
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
}, hp = {
  apply: "Aplicar",
  save: "Guardar",
  cancel: "Cancelar",
  classSearchInstruction: "Selecione uma classificação na caixa de pesquisa acima.",
  noDescription: "Sem descrição",
  linkTabTitle: "Link",
  settingsTabTitle: "Configurações",
  language: "Idioma",
  searchMainDictionaryLabel: "Pesquisar classe",
  searchClassesPlaceholder: "Pesquisar classe",
  selectLanguageInstruction: "Selecione o idioma",
  selectMainDictionary: "Dicionário principal",
  selectMainDictionaryPlaceholder: "Selecione o dicionário principal",
  selectIfcDictionary: "Dicionário IFC",
  selectIfcDictionaryPlaceholder: "Selecione o dicionário IFC",
  selectFilterDictionaries: "Dicionários de filtro",
  selectFilterDictionariesPlaceholder: "Selecione dicionários de filtro",
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
}, fp = {
  translation: hp
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
  searchClassesPlaceholder: "Căutați o clasă",
  selectLanguageInstruction: "Selectați limba",
  selectMainDictionary: "Dicționar principal",
  selectMainDictionaryPlaceholder: "Selectați dicționarul principal",
  selectIfcDictionary: "Dicționar IFC",
  selectIfcDictionaryPlaceholder: "Selectați dicționarul IFC",
  selectFilterDictionaries: "Dicționarele de filtrare",
  selectFilterDictionariesPlaceholder: "Selectați dicționare de filtrare",
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
  searchClassesPlaceholder: "Išči razred",
  selectLanguageInstruction: "Izberite jezik",
  selectMainDictionary: "Glavni slovar",
  selectMainDictionaryPlaceholder: "Izberite glavni slovar",
  selectIfcDictionary: "IFC slovar",
  selectIfcDictionaryPlaceholder: "Izberite IFC slovar",
  selectFilterDictionaries: "Filtriraj slovarje",
  selectFilterDictionariesPlaceholder: "Izberite filtre slovarjev",
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
  searchClassesPlaceholder: "Pretraži klasu",
  selectLanguageInstruction: "Izaberite jezik",
  selectMainDictionary: "Glavni rečnik",
  selectMainDictionaryPlaceholder: "Izaberite glavni rečnik",
  selectIfcDictionary: "IFC rečnik",
  selectIfcDictionaryPlaceholder: "Izaberite IFC rečnik",
  selectFilterDictionaries: "Filtrirajte rječnike",
  selectFilterDictionariesPlaceholder: "Izaberite filter rečnike",
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
  searchClassesPlaceholder: "Sök en klass",
  selectLanguageInstruction: "Välj språk",
  selectMainDictionary: "Huvudordbok",
  selectMainDictionaryPlaceholder: "Välj huvudordbok",
  selectIfcDictionary: "IFC-ordbok",
  selectIfcDictionaryPlaceholder: "Välj IFC-ordbok",
  selectFilterDictionaries: "Filterordböcker",
  selectFilterDictionariesPlaceholder: "Välj filterordböcker",
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
  searchClassesPlaceholder: "Bir sınıf ara",
  selectLanguageInstruction: "Dili seçin",
  selectMainDictionary: "Ana sözlük",
  selectMainDictionaryPlaceholder: "Ana sözlük seçin",
  selectIfcDictionary: "IFC sözlüğü seçin",
  selectIfcDictionaryPlaceholder: "IFC sözlüğü seçin",
  selectFilterDictionaries: "Filtre sözlüklerini seçin",
  selectFilterDictionariesPlaceholder: "Filtre sözlüklerini seçin",
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
}, Ip = {
  translation: Sp
}, Tp = {
  apply: "应用",
  cancel: "取消",
  classSearchInstruction: "在上面的搜索框中选择一个分类。",
  noDescription: "没有描述",
  linkTabTitle: "链接",
  settingsTabTitle: "设置",
  language: "语言",
  searchMainDictionaryLabel: "搜索分类",
  searchClassesPlaceholder: "搜索分类",
  selectLanguageInstruction: "选择语言",
  selectMainDictionary: "主词典",
  selectMainDictionaryPlaceholder: "选择主词典",
  selectIfcDictionary: "IFC词典",
  selectIfcDictionaryPlaceholder: "选择IFC词典",
  selectFilterDictionaries: "选择过滤词典",
  selectFilterDictionariesPlaceholder: "选择过滤词典",
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
}, Ep = {
  translation: Tp
};
xe.use(Tf).init({
  resources: {
    "en-GB": Ff,
    "nl-NL": ip,
    "ar-SA": Rf,
    "zh-CN": Ep,
    "hr-HR": Gf,
    "cs-CZ": Nf,
    "da-DK": Of,
    "fi-FI": Bf,
    "fr-FR": $f,
    "de-DE": Df,
    "hi-IN": qf,
    "is-IS": Yf,
    "it-IT": Jf,
    "ja-JP": Zf,
    "ko-KR": tp,
    "lt-LT": np,
    "no-NO": sp,
    "pl-PL": lp,
    "pt-PT": fp,
    "pt-BR": dp,
    "ro-RO": gp,
    "sr-SP": bp,
    "sl-SI": yp,
    "es-ES": Uf,
    "sv-SE": wp,
    "tr-TR": Ip
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
var $i = function(r, e) {
  return $i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, $i(r, e);
};
function De(r, e) {
  $i(r, e);
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
function Zs(r, e) {
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
function _p(r, e) {
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
function ba() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(_p(arguments[e]));
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
var Ki = function(r, e) {
  return Ki = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Ki(r, e);
};
function et(r, e) {
  Ki(r, e);
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
function re(r, e, t, n) {
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
function ne(r, e) {
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
function Yo() {
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
}, qn = [
  S.OPENID_SCOPE,
  S.PROFILE_SCOPE,
  S.OFFLINE_ACCESS_SCOPE
], ec = Yo(qn, [
  S.EMAIL_SCOPE
]), ot;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(ot || (ot = {}));
var _e;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(_e || (_e = {}));
var Ir;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(Ir || (Ir = {}));
var ie;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(ie || (ie = {}));
var qr;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(qr || (qr = {}));
var Ue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Tn;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Tn || (Tn = {}));
var tc = {
  PLAIN: "plain",
  S256: "S256"
}, vo;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(vo || (vo = {}));
var bo;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(bo || (bo = {}));
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
var En;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(En || (En = {}));
var qi = "appmetadata", kp = "client_info", _n = "1", kn = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, dt;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(dt || (dt = {}));
var Me = {
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
var An = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, rc = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Co;
(function(r) {
  r.username = "username", r.password = "password";
})(Co || (Co = {}));
var Vr;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(Vr || (Vr = {}));
var Xt;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Xt || (Xt = {}));
var Rn;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Rn || (Rn = {}));
var er;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(er || (er = {}));
var Vi;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(Vi || (Vi = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var no = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, q = (
  /** @class */
  function(r) {
    et(e, r);
    function e(t, n, o) {
      var i = this, a = n ? t + ": " + n : t;
      return i = r.call(this, a) || this, Object.setPrototypeOf(i, e.prototype), i.errorCode = t || S.EMPTY_STRING, i.errorMessage = n || S.EMPTY_STRING, i.subError = o || S.EMPTY_STRING, i.name = "AuthError", i;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(no.unexpectedError.code, no.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(no.postRequestFailed.code, no.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var wo = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw q.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw q.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw q.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", q.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", q.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", q.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", q.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", q.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", q.createUnexpectedError(r);
      });
    });
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var M = {
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
    et(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createClientInfoDecodingError = function(t) {
      return new e(M.clientInfoDecodingError.code, M.clientInfoDecodingError.desc + " Failed with error: " + t);
    }, e.createClientInfoEmptyError = function() {
      return new e(M.clientInfoEmptyError.code, "" + M.clientInfoEmptyError.desc);
    }, e.createTokenParsingError = function(t) {
      return new e(M.tokenParsingError.code, M.tokenParsingError.desc + " Failed with error: " + t);
    }, e.createTokenNullOrEmptyError = function(t) {
      return new e(M.nullOrEmptyToken.code, M.nullOrEmptyToken.desc + " Raw Token Value: " + t);
    }, e.createEndpointDiscoveryIncompleteError = function(t) {
      return new e(M.endpointResolutionError.code, M.endpointResolutionError.desc + " Detail: " + t);
    }, e.createNetworkError = function(t, n) {
      return new e(M.networkError.code, M.networkError.desc + " | Fetch client threw: " + n + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToGetOpenidConfigError = function(t) {
      return new e(M.unableToGetOpenidConfigError.code, M.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + t);
    }, e.createHashNotDeserializedError = function(t) {
      return new e(M.hashNotDeserialized.code, M.hashNotDeserialized.desc + " Given Object: " + t);
    }, e.createInvalidStateError = function(t, n) {
      return new e(M.invalidStateError.code, M.invalidStateError.desc + " Invalid State: " + t + ", Root Err: " + n);
    }, e.createStateMismatchError = function() {
      return new e(M.stateMismatchError.code, M.stateMismatchError.desc);
    }, e.createStateNotFoundError = function(t) {
      return new e(M.stateNotFoundError.code, M.stateNotFoundError.desc + ":  " + t);
    }, e.createNonceMismatchError = function() {
      return new e(M.nonceMismatchError.code, M.nonceMismatchError.desc);
    }, e.createAuthTimeNotFoundError = function() {
      return new e(M.authTimeNotFoundError.code, M.authTimeNotFoundError.desc);
    }, e.createMaxAgeTranspiredError = function() {
      return new e(M.maxAgeTranspiredError.code, M.maxAgeTranspiredError.desc);
    }, e.createNonceNotFoundError = function(t) {
      return new e(M.nonceNotFoundError.code, M.nonceNotFoundError.desc + ":  " + t);
    }, e.createMultipleMatchingTokensInCacheError = function() {
      return new e(M.multipleMatchingTokens.code, M.multipleMatchingTokens.desc + ".");
    }, e.createMultipleMatchingAccountsInCacheError = function() {
      return new e(M.multipleMatchingAccounts.code, M.multipleMatchingAccounts.desc);
    }, e.createMultipleMatchingAppMetadataInCacheError = function() {
      return new e(M.multipleMatchingAppMetadata.code, M.multipleMatchingAppMetadata.desc);
    }, e.createTokenRequestCannotBeMadeError = function() {
      return new e(M.tokenRequestCannotBeMade.code, M.tokenRequestCannotBeMade.desc);
    }, e.createAppendEmptyScopeToSetError = function(t) {
      return new e(M.appendEmptyScopeError.code, M.appendEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createRemoveEmptyScopeFromSetError = function(t) {
      return new e(M.removeEmptyScopeError.code, M.removeEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createAppendScopeSetError = function(t) {
      return new e(M.appendScopeSetError.code, M.appendScopeSetError.desc + " Detail Error: " + t);
    }, e.createEmptyInputScopeSetError = function() {
      return new e(M.emptyInputScopeSetError.code, "" + M.emptyInputScopeSetError.desc);
    }, e.createDeviceCodeCancelledError = function() {
      return new e(M.DeviceCodePollingCancelled.code, "" + M.DeviceCodePollingCancelled.desc);
    }, e.createDeviceCodeExpiredError = function() {
      return new e(M.DeviceCodeExpired.code, "" + M.DeviceCodeExpired.desc);
    }, e.createDeviceCodeUnknownError = function() {
      return new e(M.DeviceCodeUnknownError.code, "" + M.DeviceCodeUnknownError.desc);
    }, e.createNoAccountInSilentRequestError = function() {
      return new e(M.NoAccountInSilentRequest.code, "" + M.NoAccountInSilentRequest.desc);
    }, e.createNullOrUndefinedCacheRecord = function() {
      return new e(M.invalidCacheRecord.code, M.invalidCacheRecord.desc);
    }, e.createInvalidCacheEnvironmentError = function() {
      return new e(M.invalidCacheEnvironment.code, M.invalidCacheEnvironment.desc);
    }, e.createNoAccountFoundError = function() {
      return new e(M.noAccountFound.code, M.noAccountFound.desc);
    }, e.createCachePluginError = function() {
      return new e(M.CachePluginError.code, "" + M.CachePluginError.desc);
    }, e.createNoCryptoObjectError = function(t) {
      return new e(M.noCryptoObj.code, "" + M.noCryptoObj.desc + t);
    }, e.createInvalidCacheTypeError = function() {
      return new e(M.invalidCacheType.code, "" + M.invalidCacheType.desc);
    }, e.createUnexpectedAccountTypeError = function() {
      return new e(M.unexpectedAccountType.code, "" + M.unexpectedAccountType.desc);
    }, e.createUnexpectedCredentialTypeError = function() {
      return new e(M.unexpectedCredentialType.code, "" + M.unexpectedCredentialType.desc);
    }, e.createInvalidAssertionError = function() {
      return new e(M.invalidAssertion.code, "" + M.invalidAssertion.desc);
    }, e.createInvalidCredentialError = function() {
      return new e(M.invalidClientCredential.code, "" + M.invalidClientCredential.desc);
    }, e.createRefreshRequiredError = function() {
      return new e(M.tokenRefreshRequired.code, M.tokenRefreshRequired.desc);
    }, e.createUserTimeoutReachedError = function() {
      return new e(M.userTimeoutReached.code, M.userTimeoutReached.desc);
    }, e.createTokenClaimsRequiredError = function() {
      return new e(M.tokenClaimsRequired.code, M.tokenClaimsRequired.desc);
    }, e.createNoAuthCodeInServerResponseError = function() {
      return new e(M.noAuthorizationCodeFromServer.code, M.noAuthorizationCodeFromServer.desc);
    }, e.createBindingKeyNotRemovedError = function() {
      return new e(M.bindingKeyNotRemovedError.code, M.bindingKeyNotRemovedError.desc);
    }, e.createLogoutNotSupportedError = function() {
      return new e(M.logoutNotSupported.code, M.logoutNotSupported.desc);
    }, e.createKeyIdMissingError = function() {
      return new e(M.keyIdMissing.code, M.keyIdMissing.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(M.noNetworkConnectivity.code, M.noNetworkConnectivity.desc);
    }, e.createUserCanceledError = function() {
      return new e(M.userCanceledError.code, M.userCanceledError.desc);
    }, e;
  }(q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var j = (
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
var Ca = (
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
        j.isEmpty(t.correlationId) ? j.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
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
var xl = "@azure/msal-common", wa = "13.3.3";
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Dn;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(Dn || (Dn = {}));
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
  function(r) {
    et(e, r);
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
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Fe = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? j.trimArrayEntries(Yo(e)) : [], o = n ? j.removeEmptyStringsFromArray(n) : [];
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
      return j.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return ec.forEach(function(n) {
        e.containsScope(n) && (t += 1);
      }), this.scopes.size === t;
    }, r.prototype.appendScope = function(e) {
      j.isEmpty(e) || this.scopes.add(e.trim());
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
      if (j.isEmpty(e))
        throw z.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      ec.forEach(function(t) {
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
function So(r, e) {
  if (j.isEmpty(r))
    throw z.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw z.createClientInfoDecodingError(n.message);
  }
}
function Gr(r) {
  if (j.isEmpty(r))
    throw z.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(Ae.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? S.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ye;
(function(r) {
  r[r.Default = 0] = "Default", r[r.Adfs = 1] = "Adfs", r[r.Dsts = 2] = "Dsts", r[r.Ciam = 3] = "Ciam";
})(Ye || (Ye = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var en;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(en || (en = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var He = (
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
      t.authorityType === Ye.Adfs ? n.authorityType = Cr.ADFS_ACCOUNT_TYPE : t.protocolMode === en.AAD ? n.authorityType = Cr.MSSTS_ACCOUNT_TYPE : n.authorityType = Cr.GENERIC_ACCOUNT_TYPE, n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
      var o = e.environment || t && t.getPreferredCache();
      if (!o)
        throw z.createInvalidCacheEnvironmentError();
      if (n.environment = o, n.realm = e.idTokenClaims.tid || S.EMPTY_STRING, n.idTokenClaims = e.idTokenClaims, n.localAccountId = e.idTokenClaims.oid || e.idTokenClaims.sub || S.EMPTY_STRING, n.authorityType === Cr.MSSTS_ACCOUNT_TYPE) {
        var i = e.idTokenClaims.preferred_username, a = e.idTokenClaims.emails ? e.idTokenClaims.emails[0] : null;
        n.username = i || a || "";
      } else
        n.username = e.idTokenClaims.upn || "";
      return n.name = e.idTokenClaims.name, n.cloudGraphHostName = e.cloudGraphHostName, n.msGraphHost = e.msGraphHost, n;
    }, r.createFromAccountInfo = function(e, t, n) {
      var o = new r();
      return o.authorityType = e.authorityType || Cr.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.idTokenClaims = e.idTokenClaims, o.cloudGraphHostName = t, o.msGraphHost = n, o;
    }, r.generateHomeAccountId = function(e, t, n, o, i) {
      var a = i != null && i.sub ? i.sub : S.EMPTY_STRING;
      if (t === Ye.Adfs || t === Ye.Dsts)
        return a;
      if (e)
        try {
          var s = So(e, o);
          if (!j.isEmpty(s.uid) && !j.isEmpty(s.utid))
            return "" + s.uid + Ae.CLIENT_INFO_SEPARATOR + s.utid;
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
var Mt = (
  /** @class */
  function() {
    function r(e, t) {
      if (j.isEmpty(e))
        throw z.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = j.decodeAuthToken(e);
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
var We = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(xl, wa);
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
      return n && (t.idToken = n.secret, t.idTokenClaims = new Mt(n.secret, this.cryptoImpl).claims), t;
    }, r.prototype.saveCacheRecord = function(e) {
      return re(this, void 0, void 0, function() {
        return ne(this, function(t) {
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
      return re(this, void 0, void 0, function() {
        var t, n, o, i, a = this;
        return ne(this, function(s) {
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
              }, n = this.getTokenKeys(), o = Fe.fromString(e.target), i = [], n.accessToken.forEach(function(c) {
                if (a.accessTokenKeyMatchesFilter(c, t, !1)) {
                  var l = a.getAccessTokenCredential(c);
                  if (l && a.credentialMatchesFilter(l, t)) {
                    var u = Fe.fromString(l.target);
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
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === Y.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === ge.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
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
      return re(this, void 0, void 0, function() {
        var t, n, o, i = this;
        return ne(this, function(a) {
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
      return i && a && (i.idTokenClaims = new Mt(a.secret, this.cryptoImpl).claims), {
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
        credentialType: Y.ID_TOKEN,
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
      var i = Fe.createSearchScopes(t.scopes), a = t.authenticationScheme || ge.BEARER, s = a && a.toLowerCase() !== ge.BEARER.toLowerCase() ? Y.ACCESS_TOKEN_WITH_AUTH_SCHEME : Y.ACCESS_TOKEN, c = {
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
      var i = t ? _n : void 0, a = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: Y.REFRESH_TOKEN,
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
      var o = Fe.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(qi) !== -1;
    }, r.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(kn.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return kn.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, r.toObject = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    }, r;
  }()
), Ap = (
  /** @class */
  function(r) {
    et(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return re(this, void 0, void 0, function() {
        var t;
        return ne(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", q.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw q.createUnexpectedError(t);
    }, e;
  }(We)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Rp = 300, Dl = {
  tokenRenewalOffsetSeconds: Rp,
  preventCorsPreflight: !1
}, Pp = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: we.Info,
  correlationId: S.EMPTY_STRING
}, Np = {
  claimsBasedCachingEnabled: !0
}, Mp = {
  sendGetRequestAsync: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", q.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", q.createUnexpectedError(r);
      });
    });
  }
}, Op = {
  sku: S.SKU,
  version: wa,
  cpu: S.EMPTY_STRING,
  os: S.EMPTY_STRING
}, xp = {
  clientSecret: S.EMPTY_STRING,
  clientAssertion: void 0
}, Dp = {
  azureCloudInstance: Dn.None,
  tenant: "" + S.DEFAULT_COMMON_TENANT
}, Lp = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function Fp(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, i = r.storageInterface, a = r.networkInterface, s = r.cryptoInterface, c = r.clientCredentials, l = r.libraryInfo, u = r.telemetry, h = r.serverTelemetryManager, d = r.persistencePlugin, f = r.serializableCache, p = fe(fe({}, Pp), n);
  return {
    authOptions: jp(e),
    systemOptions: fe(fe({}, Dl), t),
    loggerOptions: p,
    cacheOptions: fe(fe({}, Np), o),
    storageInterface: i || new Ap(e.clientId, wo, new Ca(p)),
    networkInterface: a || Mp,
    cryptoInterface: s || wo,
    clientCredentials: c || xp,
    libraryInfo: fe(fe({}, Op), l),
    telemetry: fe(fe({}, Lp), u),
    serverTelemetryManager: h || null,
    persistencePlugin: d || null,
    serializableCache: f || null
  };
}
function jp(r) {
  return fe({ clientCapabilities: [], azureCloudOptions: Dp, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var kr = (
  /** @class */
  function(r) {
    et(e, r);
    function e(t, n, o) {
      var i = r.call(this, t, n, o) || this;
      return i.name = "ServerError", Object.setPrototypeOf(i, e.prototype), i;
    }
    return e;
  }(q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Io = (
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
        throw new kr(((n = i.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || S.EMPTY_STRING, i.errorMessage, i.subError);
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
      }, a = this.generateThrottlingStorageKey(i);
      e.removeItem(a);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Up = (
  /** @class */
  function() {
    function r(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return r.prototype.sendPostRequest = function(e, t, n) {
      return re(this, void 0, void 0, function() {
        var o, i;
        return ne(this, function(a) {
          switch (a.label) {
            case 0:
              Io.preProcess(this.cacheManager, e), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = a.sent(), [3, 4];
            case 3:
              throw i = a.sent(), i instanceof q ? i : z.createNetworkError(t, i);
            case 4:
              return Io.postProcess(this.cacheManager, e, o), [2, o];
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
var vr = (
  /** @class */
  function() {
    function r() {
    }
    return r.validateRedirectUri = function(e) {
      if (j.isEmpty(e))
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
      if (j.isEmpty(e) || j.isEmpty(t))
        throw be.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        tc.PLAIN,
        tc.S256
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
var Pn = (
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
      this.parameters.set(ie.RESPONSE_MODE, encodeURIComponent(e || vo.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(ie.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? Yo(e || [], qn) : e || [], o = new Fe(n);
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
      this.parameters.set(Tn.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Tn.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Tn.SID, encodeURIComponent(e));
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
      j.isEmpty(e) || this.parameters.set(ie.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(ie.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (vr.validateCodeChallengeParams(e, t), e && t)
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
      j.isEmpty(e) || this.parameters.set(ie.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      j.isEmpty(e) || this.parameters.set(ie.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(ie.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(ie.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(ie.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(kp, "1");
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
          throw be.createInvalidClaimsRequestError();
        }
      return t && t.length > 0 && (n.hasOwnProperty(qr.ACCESS_TOKEN) || (n[qr.ACCESS_TOKEN] = {}), n[qr.ACCESS_TOKEN][qr.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(Co.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(Co.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      j.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ge.POP), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      j.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ge.SSH), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
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
var Sa = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = Fp(e), this.logger = new Ca(this.config.loggerOptions, xl, wa), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new Up(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
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
        return ne(this, function(a) {
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
      var t = new Pn();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ia = (
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
          return En.ID_TOKEN;
        case Y.ACCESS_TOKEN:
        case Y.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return En.ACCESS_TOKEN;
        case Y.REFRESH_TOKEN:
          return En.REFRESH_TOKEN;
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
      return u.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateAccountIdForCacheKey = function(e, t) {
      var n = [e, t];
      return n.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateCredentialIdForCacheKey = function(e, t, n, o) {
      var i = e === Y.REFRESH_TOKEN && o || t, a = [
        e,
        i,
        n || S.EMPTY_STRING
      ];
      return a.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
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
var tr = (
  /** @class */
  function(r) {
    et(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, n, o, i, a) {
      var s = new e();
      return s.credentialType = Y.ID_TOKEN, s.homeAccountId = t, s.environment = n, s.clientId = i, s.secret = o, s.realm = a, s;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === Y.ID_TOKEN : !1;
    }, e;
  }(Ia)
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
var rr = (
  /** @class */
  function(r) {
    et(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, i, a, s, c, l, u, h, d, f, p, g, m) {
      var C, b, v = new e();
      v.homeAccountId = t, v.credentialType = Y.ACCESS_TOKEN, v.secret = o;
      var w = ht.nowSeconds();
      if (v.cachedAt = w.toString(), v.expiresOn = c.toString(), v.extendedExpiresOn = l.toString(), h && (v.refreshOn = h.toString()), v.environment = n, v.clientId = i, v.realm = a, v.target = s, v.userAssertionHash = f, v.tokenType = j.isEmpty(d) ? ge.BEARER : d, g && (v.requestedClaims = g, v.requestedClaimsHash = m), ((C = v.tokenType) === null || C === void 0 ? void 0 : C.toLowerCase()) !== ge.BEARER.toLowerCase())
        switch (v.credentialType = Y.ACCESS_TOKEN_WITH_AUTH_SCHEME, v.tokenType) {
          case ge.POP:
            var I = Mt.extractTokenClaims(o, u);
            if (!(!((b = I == null ? void 0 : I.cnf) === null || b === void 0) && b.kid))
              throw z.createTokenClaimsRequiredError();
            v.keyId = I.cnf.kid;
            break;
          case ge.SSH:
            v.keyId = p;
        }
      return v;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === Y.ACCESS_TOKEN || t.credentialType === Y.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Ia)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Wr = (
  /** @class */
  function(r) {
    et(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, n, o, i, a, s) {
      var c = new e();
      return c.clientId = i, c.credentialType = Y.REFRESH_TOKEN, c.environment = n, c.homeAccountId = t, c.secret = o, c.userAssertionHash = s, a && (c.familyId = a), c;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === Y.REFRESH_TOKEN : !1;
    }, e;
  }(Ia)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var nc = [
  "interaction_required",
  "consent_required",
  "login_required"
], Hp = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Yr = {
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
    et(e, r);
    function e(t, n, o, i, a, s, c) {
      var l = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(l, e.prototype), l.timestamp = i || S.EMPTY_STRING, l.traceId = a || S.EMPTY_STRING, l.correlationId = s || S.EMPTY_STRING, l.claims = c || S.EMPTY_STRING, l.name = "InteractionRequiredAuthError", l;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var i = !!t && nc.indexOf(t) > -1, a = !!o && Hp.indexOf(o) > -1, s = !!n && nc.some(function(c) {
        return n.indexOf(c) > -1;
      });
      return i || s || a;
    }, e.createNoTokensFoundError = function() {
      return new e(Yr.noTokensFoundError.code, Yr.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Yr.native_account_unavailable.code, Yr.native_account_unavailable.desc);
    }, e;
  }(q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Jr = (
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
      return j.isEmpty(t) ? o : "" + o + S.RESOURCE_DELIM + t;
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
      if (j.isEmpty(t))
        throw z.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(S.RESOURCE_DELIM), o = n[0], i = n.length > 1 ? n.slice(1).join(S.RESOURCE_DELIM) : S.EMPTY_STRING, a = e.base64Decode(o), s = JSON.parse(a);
        return {
          userRequestState: j.isEmpty(i) ? S.EMPTY_STRING : i,
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
      if (this._urlString = e, j.isEmpty(this._urlString))
        throw be.createUrlEmptyError();
      j.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
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
        return j.endsWith(t, "?") ? t = t.slice(0, -1) : j.endsWith(t, "?/") && (t = t.slice(0, -2)), j.endsWith(t, "/") || (t += "/"), t;
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
      return j.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, r.removeHashFromUrl = function(e) {
      return r.canonicalizeUri(e.split("#")[0]);
    }, r.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), n = t.PathSegments;
      return e && n.length !== 0 && (n[0] === Ir.COMMON || n[0] === Ir.ORGANIZATIONS) && (n[0] = e), r.constructAuthorityUriFromObject(t);
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
      }), n.PathSegments = o, !j.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
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
      if (j.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = j.queryStringToObject(j.isEmpty(t) ? e : t);
      if (!n)
        throw z.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (j.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = j.queryStringToObject(j.isEmpty(t) ? e : t);
      if (!n)
        throw z.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (j.isEmpty(e) || e.indexOf("=") < 0)
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
var To;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(To || (To = {}));
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
var Gi;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})(Gi || (Gi = {}));
var tn = (
  /** @class */
  function() {
    function r(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return r.prototype.generateCnf = function(e) {
      var t, n;
      return re(this, void 0, void 0, function() {
        var o, i, a;
        return ne(this, function(s) {
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
      return re(this, void 0, void 0, function() {
        var n;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: Gi.SW
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
        var i, a, s, c, l, u;
        return ne(this, function(h) {
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
var Wi = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(e, t) {
      var n = [
        qi,
        e,
        t
      ];
      return n.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(e, t, n) {
      var o = new r();
      return o.clientId = e, o.environment = t, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(qi) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var zp = (
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
        throw wt.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new wt(e.error || S.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING) : new kr(e.error || S.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && So(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (wt.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new wt(e.error, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new kr(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, i, a, s, c, l) {
      var u;
      return re(this, void 0, void 0, function() {
        var h, d, f, p, g, m, C;
        return ne(this, function(b) {
          switch (b.label) {
            case 0:
              if ((u = this.performanceClient) === null || u === void 0 || u.addQueueMeasurement(_.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (h = new Mt(e.id_token || S.EMPTY_STRING, this.cryptoObj), i && !j.isEmpty(i.nonce) && h.claims.nonce !== i.nonce)
                  throw z.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (d = h.claims.auth_time, !d)
                    throw z.createAuthTimeNotFoundError();
                  Mt.checkMaxAge(d, o.maxAge);
                }
              }
              this.homeAccountIdentifier = He.generateHomeAccountId(e.client_info || S.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, h == null ? void 0 : h.claims), i && i.state && (f = Ht.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0, p = this.generateCacheRecord(e, t, n, o, h, a, i), b.label = 1;
            case 1:
              return b.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), g = new zp(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(g)]) : [3, 3];
            case 2:
              b.sent(), b.label = 3;
            case 3:
              return s && !c && p.account && (m = p.account.generateAccountKey(), C = this.cacheStorage.getAccount(m), !C) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, h, f, void 0, l)]) : [4, this.cacheStorage.saveCacheRecord(p)];
            case 4:
              return b.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && g ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(g)]) : [3, 7];
            case 6:
              b.sent(), b.label = 7;
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
      if (j.isEmpty(c))
        throw z.createInvalidCacheEnvironmentError();
      var l, u;
      !j.isEmpty(e.id_token) && i && (l = tr.createIdTokenEntity(this.homeAccountIdentifier, c, e.id_token || S.EMPTY_STRING, this.clientId, i.claims.tid || S.EMPTY_STRING), u = He.createAccount({
        homeAccountId: this.homeAccountIdentifier,
        idTokenClaims: i.claims,
        clientInfo: e.client_info || S.EMPTY_STRING,
        cloudGraphHostName: s == null ? void 0 : s.cloud_graph_host_name,
        msGraphHost: s == null ? void 0 : s.msgraph_host
      }, t));
      var h = null;
      if (!j.isEmpty(e.access_token)) {
        var d = e.scope ? Fe.fromString(e.scope) : new Fe(o.scopes || []), f = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, p = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, g = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, m = n + f, C = m + p, b = g && g > 0 ? n + g : void 0;
        h = rr.createAccessTokenEntity(this.homeAccountIdentifier, c, e.access_token || S.EMPTY_STRING, this.clientId, i ? i.claims.tid || S.EMPTY_STRING : t.tenant, d.printScopes(), m, C, this.cryptoObj, b, e.token_type, a, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var v = null;
      j.isEmpty(e.refresh_token) || (v = Wr.createRefreshTokenEntity(this.homeAccountIdentifier, c, e.refresh_token || S.EMPTY_STRING, this.clientId, e.foci, a));
      var w = null;
      return j.isEmpty(e.foci) || (w = Wi.createAppMetadataEntity(this.clientId, c, e.foci)), new Jr(u, l, h, v, w);
    }, r.generateAuthenticationResult = function(e, t, n, o, i, a, s, c, l) {
      var u, h, d;
      return re(this, void 0, void 0, function() {
        var f, p, g, m, C, b, v, w, I, T, k;
        return ne(this, function(E) {
          switch (E.label) {
            case 0:
              if (f = S.EMPTY_STRING, p = [], g = null, C = S.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== ge.POP)
                return [3, 2];
              if (b = new tn(e), v = n.accessToken, w = v.secret, I = v.keyId, !I)
                throw z.createKeyIdMissingError();
              return [4, b.signPopToken(w, I, i)];
            case 1:
              return f = E.sent(), [3, 3];
            case 2:
              f = n.accessToken.secret, E.label = 3;
            case 3:
              p = Fe.fromString(n.accessToken.target).asArray(), g = new Date(Number(n.accessToken.expiresOn) * 1e3), m = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), E.label = 4;
            case 4:
              return n.appMetadata && (C = n.appMetadata.familyId === _n ? _n : S.EMPTY_STRING), T = (a == null ? void 0 : a.claims.oid) || (a == null ? void 0 : a.claims.sub) || S.EMPTY_STRING, k = (a == null ? void 0 : a.claims.tid) || S.EMPTY_STRING, c != null && c.spa_accountid && n.account && (n.account.nativeAccountId = c == null ? void 0 : c.spa_accountid), [2, {
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
var Ll = (
  /** @class */
  function(r) {
    et(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var n, o;
      return re(this, void 0, void 0, function() {
        var i;
        return ne(this, function(a) {
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
      return re(this, void 0, void 0, function() {
        var u, h, d, f, p, g, m = this;
        return ne(this, function(C) {
          switch (C.label) {
            case 0:
              if (!t || !t.code)
                throw z.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.AuthClientAcquireToken, t.correlationId), u = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), h = ht.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return d = C.sent(), f = (s = d.headers) === null || s === void 0 ? void 0 : s[ot.X_MS_REQUEST_ID], p = (c = d.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_HTTP_VERSION], p && (u == null || u.addStaticFields({
                httpVerAuthority: p
              })), g = new Eo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(_.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, h, t, n, void 0, void 0, void 0, f).then(function(b) {
                return u == null || u.endMeasurement({
                  success: !0
                }), b;
              }).catch(function(b) {
                throw m.logger.verbose("Error in fetching token in ACC", t.correlationId), u == null || u.endMeasurement({
                  errorCode: b.errorCode,
                  subErrorCode: b.subError,
                  success: !1
                }), b;
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
      return re(this, void 0, void 0, function() {
        var a, s, c, l, u, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.AuthClientExecuteTokenRequest, n.correlationId), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.AuthClientCreateTokenRequestBody, n.correlationId), a = this.createTokenQueryParameters(n), s = de.appendQueryString(t.tokenEndpoint, a), [4, this.createTokenRequestBody(n)];
            case 1:
              if (c = f.sent(), l = void 0, n.clientInfo)
                try {
                  u = So(n.clientInfo, this.cryptoUtils), l = {
                    credential: "" + u.uid + Ae.CLIENT_INFO_SEPARATOR + u.utid,
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
      return re(this, void 0, void 0, function() {
        var i, a, s, c, l, u, h, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.AuthClientCreateTokenRequestBody, t.correlationId), i = new Pn(), i.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? i.addRedirectUri(t.redirectUri) : vr.validateRedirectUri(t.redirectUri), i.addScopes(t.scopes), i.addAuthorizationCode(t.code), i.addLibraryInfo(this.config.libraryInfo), i.addApplicationTelemetry(this.config.telemetry.application), i.addThrottling(), this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && i.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (a = this.config.clientCredentials.clientAssertion, i.addClientAssertion(a.assertion), i.addClientAssertionType(a.assertionType)), i.addGrantType(bo.AUTHORIZATION_CODE_GRANT), i.addClientInfo(), t.authenticationScheme !== ge.POP ? [3, 2] : (s = new tn(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.PopTokenGenerateCnf, t.correlationId), [4, s.generateCnf(t)]);
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
              if (l = t.correlationId || this.config.cryptoInterface.createNewGuid(), i.addCorrelationId(l), (!j.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities), u = void 0, t.clientInfo)
                try {
                  h = So(t.clientInfo, this.cryptoUtils), u = {
                    credential: "" + h.uid + Ae.CLIENT_INFO_SEPARATOR + h.utid,
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
                      h = Gr(u.credential), i.addCcsOid(h);
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
      return re(this, void 0, void 0, function() {
        var o, i, a, s, c, l, l, l, u, h;
        return ne(this, function(d) {
          switch (d.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.AuthClientCreateQueryString, t.correlationId), o = new Pn(), o.addClientId(this.config.authOptions.clientId), i = Yo(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(i), o.addRedirectUri(t.redirectUri), a = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(a), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ue.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ue.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (s = this.extractAccountSid(t.account), c = this.extractLoginHint(t.account), c) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(c);
                    try {
                      l = Gr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (s && t.prompt === Ue.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(s);
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
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!j.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== ge.POP ? [3, 2] : (u = new tn(this.cryptoUtils), [4, u.generateCnf(t)])) : [3, 2];
            case 1:
              h = d.sent(), o.addPopToken(h.reqCnfString), d.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var n = new Pn();
      return t.postLogoutRedirectUri && n.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && n.addCorrelationId(t.correlationId), t.idTokenHint && n.addIdTokenHint(t.idTokenHint), t.state && n.addState(t.state), t.logoutHint && n.addLogoutHint(t.logoutHint), t.extraQueryParameters && n.addExtraQueryParameters(t.extraQueryParameters), n.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, e;
  }(Sa)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Fl = (
  /** @class */
  function(r) {
    et(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, i, a, s, c, l;
      return re(this, void 0, void 0, function() {
        var u, h, d, f, p, g, m = this;
        return ne(this, function(C) {
          switch (C.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RefreshTokenClientAcquireToken, t.correlationId), u = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), h = ht.nowSeconds(), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return d = C.sent(), f = (a = d.headers) === null || a === void 0 ? void 0 : a[ot.X_MS_HTTP_VERSION], u == null || u.addStaticFields({
                refreshTokenSize: ((s = d.body.refresh_token) === null || s === void 0 ? void 0 : s.length) || 0
              }), f && (u == null || u.addStaticFields({
                httpVerToken: f
              })), p = (c = d.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_REQUEST_ID], g = new Eo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(_.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, h, t, void 0, void 0, !0, t.forceCache, p).then(function(b) {
                return u == null || u.endMeasurement({
                  success: !0
                }), b;
              }).catch(function(b) {
                throw m.logger.verbose("Error in fetching refresh token", t.correlationId), u == null || u.endMeasurement({
                  errorCode: b.errorCode,
                  subErrorCode: b.subError,
                  success: !1
                }), b;
              })];
          }
        });
      });
    }, e.prototype.acquireTokenByRefreshToken = function(t) {
      var n, o, i, a;
      return re(this, void 0, void 0, function() {
        var s, c, l;
        return ne(this, function(u) {
          if (!t)
            throw be.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw z.createNoAccountInSilentRequestError();
          if (s = this.cacheManager.isAppMetadataFOCI(t.account.environment), s)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (h) {
              if (c = h instanceof wt && h.errorCode === Yr.noTokensFoundError.code, l = h instanceof kr && h.errorCode === rc.INVALID_GRANT_ERROR && h.subError === rc.CLIENT_MISMATCH_ERROR, c || l)
                return (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw h;
            }
          return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, n) {
      var o, i, a;
      return re(this, void 0, void 0, function() {
        var s, c, l;
        return ne(this, function(u) {
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
      return re(this, void 0, void 0, function() {
        var s, c, l, u, h, d;
        return ne(this, function(f) {
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
      return re(this, void 0, void 0, function() {
        var a, s, c, l, u, h, d;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RefreshTokenClientCreateTokenRequestBody, t.correlationId), a = t.correlationId, s = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.BaseClientCreateTokenRequestHeaders, a), c = new Pn(), c.addClientId(this.config.authOptions.clientId), c.addScopes(t.scopes), c.addGrantType(bo.REFRESH_TOKEN_GRANT), c.addClientInfo(), c.addLibraryInfo(this.config.libraryInfo), c.addApplicationTelemetry(this.config.telemetry.application), c.addThrottling(), this.serverTelemetryManager && c.addServerTelemetry(this.serverTelemetryManager), c.addCorrelationId(a), c.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && c.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (l = this.config.clientCredentials.clientAssertion, c.addClientAssertion(l.assertion), c.addClientAssertionType(l.assertionType)), t.authenticationScheme !== ge.POP ? [3, 2] : (u = new tn(this.cryptoUtils, this.performanceClient), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.PopTokenGenerateCnf, t.correlationId), [4, u.generateCnf(t)]);
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
              if ((!j.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && c.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case rt.HOME_ACCOUNT_ID:
                    try {
                      d = Gr(t.ccsCredential.credential), c.addCcsOid(d);
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
  }(Sa)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var $p = (
  /** @class */
  function(r) {
    et(e, r);
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
              if (n = i.sent(), n instanceof z && n.errorCode === M.tokenRefreshRequired.code)
                return o = new Fl(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
      return re(this, void 0, void 0, function() {
        var c, l;
        return ne(this, function(u) {
          switch (u.label) {
            case 0:
              if (!t)
                throw be.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(er.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), z.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !j.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(er.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), z.createRefreshRequiredError();
              if (!t.account)
                throw z.createNoAccountInSilentRequestError();
              if (c = t.authority || this.authority.getPreferredCache(), l = this.cacheManager.readCacheRecord(t.account, t, c), l.accessToken) {
                if (ht.wasClockTurnedBack(l.accessToken.cachedAt) || ht.isTokenExpired(l.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(er.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), z.createRefreshRequiredError();
                if (l.accessToken.refreshOn && ht.isTokenExpired(l.accessToken.refreshOn, 0))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(er.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), z.createRefreshRequiredError();
              } else
                throw (i = this.serverTelemetryManager) === null || i === void 0 || i.setCacheOutcome(er.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), z.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(l, t)];
            case 1:
              return [2, u.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, n) {
      return re(this, void 0, void 0, function() {
        var o, i;
        return ne(this, function(a) {
          switch (a.label) {
            case 0:
              if (t.idToken && (o = new Mt(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (i = o == null ? void 0 : o.claims.auth_time, !i)
                  throw z.createAuthTimeNotFoundError();
                Mt.checkMaxAge(i, n.maxAge);
              }
              return [4, Eo.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e;
  }(Sa)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Kp(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var jl = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, oc = jl.endpointMetadata, ic = jl.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Yi = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = ht.nowSeconds() + kn.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = ht.nowSeconds() + kn.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= ht.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(kn.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function qp(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Vp(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Gp = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, i, a;
      return re(this, void 0, void 0, function() {
        var s, c, l, u, h;
        return ne(this, function(d) {
          switch (d.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RegionDiscoveryDetectRegion, this.correlationId), s = e, s)
                return [3, 8];
              c = r.IMDS_OPTIONS, d.label = 1;
            case 1:
              return d.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(S.IMDS_VERSION, c)];
            case 2:
              return l = d.sent(), l.status === Vr.httpSuccess && (s = l.body, t.region_source = Xt.IMDS), l.status !== Vr.httpBadRequest ? [3, 5] : ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(c)]);
            case 3:
              return u = d.sent(), u ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(u, c)]) : (t.region_source = Xt.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              h = d.sent(), h.status === Vr.httpSuccess && (s = h.body, t.region_source = Xt.IMDS), d.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return d.sent(), t.region_source = Xt.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Xt.ENVIRONMENT_VARIABLE, d.label = 9;
            case 9:
              return s || (t.region_source = Xt.FAILED_AUTO_DETECTION), [2, s || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(e, t) {
      var n;
      return re(this, void 0, void 0, function() {
        return ne(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(S.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, S.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(e) {
      var t;
      return re(this, void 0, void 0, function() {
        var n;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(S.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return n = o.sent(), n.status === Vr.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
var Ln = (
  /** @class */
  function() {
    function r(e, t, n, o, i, a, s) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = a, this.correlationId = s, this.regionDiscovery = new Gp(t, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(S.CIAM_AUTH_URL))
        return Ye.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case S.ADFS:
            return Ye.Adfs;
          case S.DSTS:
            return Ye.Dsts;
        }
      return Ye.Default;
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
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Ye.Default && this.protocolMode === en.AAD;
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
        return this.authorityType === Ye.Adfs || this.authorityType === Ye.Dsts || this.protocolMode === en.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, r.prototype.resolveEndpointsAsync = function() {
      var e, t, n;
      return re(this, void 0, void 0, function() {
        var o, i, a, s;
        return ne(this, function(c) {
          switch (c.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new Yi(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(_.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
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
      return re(this, void 0, void 0, function() {
        var c, l;
        return ne(this, function(u) {
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
      return re(this, void 0, void 0, function() {
        var t, n;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return n = o.sent(), [2, Kp(n.body) ? n.body : null];
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
      return this.canonicalAuthority in oc ? oc[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, i;
      return re(this, void 0, void 0, function() {
        var a, s;
        return ne(this, function(c) {
          switch (c.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), a = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, a ? a !== S.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Rn.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = a, [2, r.replaceWithRegionalInformation(e, a)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((i = this.authorityOptions.azureRegionConfiguration) === null || i === void 0 ? void 0 : i.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (s = c.sent(), s)
                return this.regionDiscoveryMetadata.region_outcome = Rn.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)];
              this.regionDiscoveryMetadata.region_outcome = Rn.AUTO_DETECTION_REQUESTED_FAILED, c.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, r.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, n;
      return re(this, void 0, void 0, function() {
        var o, i, a;
        return ne(this, function(s) {
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
      if (this.authorityType === Ye.Ciam)
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
      return re(this, void 0, void 0, function() {
        var t, n, o, i, a, s, c, l;
        return ne(this, function(u) {
          switch (u.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + S.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (i = u.sent(), a = void 0, s = void 0, qp(i.body))
                a = i.body, s = a.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + a.tenant_discovery_endpoint);
              else if (Vp(i.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + i.status), a = i.body, a.error === S.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + a.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + a.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), s = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(s, this.hostnameAndPort), [3, 4];
            case 3:
              return c = u.sent(), c instanceof q ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
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
      return this.canonicalAuthority in ic ? ic[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return de.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== Dn.None) {
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
      Ir.COMMON,
      Ir.CONSUMERS,
      Ir.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _o = (
  /** @class */
  function() {
    function r() {
    }
    return r.createDiscoveredInstance = function(e, t, n, o, i, a, s) {
      return re(this, void 0, void 0, function() {
        var c, l, u;
        return ne(this, function(h) {
          switch (h.label) {
            case 0:
              a == null || a.addQueueMeasurement(_.AuthorityFactoryCreateDiscoveredInstance, s), c = Ln.transformCIAMAuthority(e), l = r.createInstance(c, t, n, o, i, a, s), h.label = 1;
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
      if (j.isEmpty(e))
        throw be.createUrlEmptyError();
      return new Ln(e, t, n, o, i, a, s);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ko = (
  /** @class */
  function() {
    function r() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return r.isServerTelemetryEntity = function(e, t) {
      var n = e.indexOf(Me.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ac = (
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
var Wp = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(q.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(q.createUnexpectedError(r));
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
  function(r) {
    et(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(oo.missingKidError.code, oo.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(oo.missingAlgError.code, oo.missingAlgError.desc);
    }, e;
  }(q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Yp = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw sc.createMissingKidError();
      if (!e.alg)
        throw sc.createMissingAlgError();
      var t = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || Vi.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Qp = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = er.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || S.EMPTY_STRING, this.wrapperVer = e.wrapperVer || S.EMPTY_STRING, this.telemetryCacheKey = Me.CACHE_KEY + Ae.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Me.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Me.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(Me.VALUE_SEPARATOR);
      return [Me.SCHEMA_VERSION, o, t].join(Me.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(Me.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Me.VALUE_SEPARATOR), i = e.errors.length, a = t < i ? Me.OVERFLOW_TRUE : Me.OVERFLOW_FALSE, s = [i, a].join(Me.VALUE_SEPARATOR);
      return [Me.SCHEMA_VERSION, e.cacheHits, n, o, s].join(Me.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Me.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), j.isEmpty(e.subError) ? j.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Me.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new ko(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new ko();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(e) {
      var t, n = 0, o = 0, i = e.errors.length;
      for (t = 0; t < i; t++) {
        var a = e.failedRequests[2 * t] || S.EMPTY_STRING, s = e.failedRequests[2 * t + 1] || S.EMPTY_STRING, c = e.errors[t] || S.EMPTY_STRING;
        if (o += a.toString().length + s.toString().length + c.length + 3, o < Me.MAX_LAST_HEADER_BYTES)
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
var Ul = (
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
      return Bp;
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
        status: To.InProgress,
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
      }), u.incompleteSubMeasurements = void 0, u = fe(fe({}, u), { durationMs: Math.round(l), queuedTimeMs: c.totalQueueTime, queuedCount: c.totalQueueCount, queuedManuallyCompletedCount: c.manuallyCompletedCount, status: To.Completed, incompleteSubsCount: h }), this.truncateIntegralFields(u, this.getIntFields()), this.emitEvents([u], e.correlationId), u;
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
var cc = (
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
), Jp = (
  /** @class */
  function(r) {
    et(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new cc();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new cc();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(Ul)
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
}, L = (
  /** @class */
  function(r) {
    De(e, r);
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
      return n = j.isEmpty(t) ? n : n + " Details: " + t, new e(N.popupWindowError.code, n);
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
  }(q)
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
}, wn = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, Ut;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(Ut || (Ut = {}));
var Ee;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(Ee || (Ee = {}));
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
var Qr;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Qr || (Qr = {}));
var ve;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(ve || (ve = {}));
var K;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(K || (K = {}));
var lc;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(lc || (lc = {}));
var uc = {
  scopes: qn
}, rn = "jwk", dc;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(dc || (dc = {}));
var Qi = "msal.db", Xp = 1, Zp = Qi + ".keys", Qe;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
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
  function(r) {
    De(e, r);
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
  }(q)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hc = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== Ee.LocalStorage && e !== Ee.SessionStorage)
        throw Ao.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Ao.createStorageNotSupportedError(e);
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
var Ji = (
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
var Hl = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (j.isEmpty(t))
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
var Xi = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t, n, o, i) {
      var a = r.call(this, t, o, i) || this;
      return a.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, a.cacheConfig = n, a.logger = i, a.internalStorage = new Ji(), a.browserStorage = a.setupBrowserStorage(a.cacheConfig.cacheLocation), a.temporaryCacheStorage = a.setupTemporaryCacheStorage(a.cacheConfig.temporaryCacheLocation, a.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (a.migrateCacheEntries(), a.createKeyMaps()), a;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case Ee.LocalStorage:
        case Ee.SessionStorage:
          try {
            return new hc(t);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = Ee.MemoryStorage, new Ji();
    }, e.prototype.setupTemporaryCacheStorage = function(t, n) {
      switch (n) {
        case Ee.LocalStorage:
        case Ee.SessionStorage:
          try {
            return new hc(t || Ee.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case Ee.MemoryStorage:
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
                case Y.ID_TOKEN:
                  if (tr.isIdTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + a + " found, saving key to token key map");
                    var l = We.toObject(new tr(), c), u = t.updateCredentialCacheKey(a, l);
                    t.addTokenKey(u, Y.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + a);
                  break;
                case Y.ACCESS_TOKEN:
                case Y.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (rr.isAccessTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + a + " found, saving key to token key map");
                    var h = We.toObject(new rr(), c), u = t.updateCredentialCacheKey(a, h);
                    t.addTokenKey(u, Y.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + a);
                  break;
                case Y.REFRESH_TOKEN:
                  if (Wr.isRefreshTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + a + " found, saving key to token key map");
                    var d = We.toObject(new Wr(), c), u = t.updateCredentialCacheKey(a, d);
                    t.addTokenKey(u, Y.REFRESH_TOKEN);
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
      return !o || !He.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : We.toObject(new He(), o);
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
      r.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, Y.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
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
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), z.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
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
          var a = o.accessToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case Y.REFRESH_TOKEN:
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
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !tr.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), We.toObject(new tr(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Y.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !rr.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), We.toObject(new rr(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Y.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Wr.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), We.toObject(new Wr(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Y.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Wi.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), We.toObject(new Wi(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !ko.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), We.toObject(new ko(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && Yi.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), We.toObject(new Yi(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, n = this.internalStorage.getKeys();
      return n.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, n) {
      this.internalStorage.setItem(Qr.WRAPPER_SKU, t), this.internalStorage.setItem(Qr.WRAPPER_VER, n);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Qr.WRAPPER_SKU) || S.EMPTY_STRING, n = this.internalStorage.getItem(Qr.WRAPPER_VER) || S.EMPTY_STRING;
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
      return !o || !ac.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), We.toObject(new ac(), o));
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
        if (this.cacheConfig.cacheLocation === Ee.LocalStorage) {
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
      return ba(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
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
      return n ? JSON.stringify(t) : j.startsWith(t, S.CACHE_PREFIX) || j.startsWith(t, _e.ADAL_ID_TOKEN) ? t : S.CACHE_PREFIX + "." + this.clientId + "." + t;
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
      } else if (!j.isEmpty(i)) {
        var u = {
          credential: i,
          type: rt.UPN
        };
        this.setTemporaryCache(he.CCS_CREDENTIAL, JSON.stringify(u), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), j.isEmpty(t) || this.getKeys().forEach(function(o) {
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
            var a = Hl.extractBrowserRequestState(n.cryptoImpl, i);
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
        throw L.createNoTokenRequestCacheError();
      var i = this.validateAndParseJson(n.base64Decode(o));
      if (!i)
        throw L.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(he.REQUEST_PARAMS)), j.isEmpty(i.authority)) {
        var a = this.generateAuthorityKey(t), s = this.getTemporaryCache(a);
        if (!s)
          throw L.createNoCachedAuthorityError();
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
          throw L.createInteractionInProgressError();
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
        var i = new Mt(o, this.cryptoImpl);
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
              return u = tr.createIdTokenEntity(((o = t.account) === null || o === void 0 ? void 0 : o.homeAccountId) || "", ((i = t.account) === null || i === void 0 ? void 0 : i.environment) || "", t.idToken, this.clientId, t.tenantId), n.claims ? [4, this.cryptoImpl.hashString(n.claims)] : [3, 2];
            case 1:
              h = p.sent(), p.label = 2;
            case 2:
              return d = rr.createAccessTokenEntity(
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
              ), f = new Jr(void 0, u, d), [2, this.saveCacheRecord(f)];
          }
        });
      });
    }, e;
  }(We)
), eg = function(r, e) {
  var t = {
    cacheLocation: Ee.MemoryStorage,
    temporaryCacheLocation: Ee.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new Xi(r, t, wo, e);
};
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var vi = "@azure/msal-browser", Nn = "2.39.0";
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var tg = (
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
              throw o = a.sent(), window.navigator.onLine ? L.createGetRequestFailedError(o, e) : L.createNoNetworkConnectivityError();
            case 3:
              return a.trys.push([3, 5, , 6]), i = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (i.body = a.sent(), i.status = n.status, i)];
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
var rg = (
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
        }, t === kt.POST && n && n.body)
          s.send(n.body);
        else if (t === kt.GET)
          s.send();
        else
          throw L.createHttpMethodNotImplementedError(t);
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
      return window.fetch && window.Headers ? new tg() : new rg();
    }, r.blockReloadInHiddenIframes = function() {
      var e = de.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw L.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === K.Redirect && n && !t)
        throw L.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw L.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw L.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw L.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/"), o = e.indexOf("Edge/"), i = t > 0 || n > 0, a = o > 0;
      return i || a;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Bl = (
  /** @class */
  function() {
    function r(e, t, n, o, i, a, s, c, l) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = a, this.nativeMessageHandler = c, this.correlationId = l || this.browserCrypto.createNewGuid(), this.logger = o.clone(bt.MSAL_SKU, Nn, this.correlationId), this.performanceClient = s;
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
              if (o = ba(e && e.scopes || []), i = B(B({}, e), {
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
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !j.isEmptyObj(e.claims) ? (a = i, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
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
      return new Qp(n, this.browserStorage);
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
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, _o.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, _o.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, n.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var cn = (
  /** @class */
  function(r) {
    De(e, r);
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
              return i = a.sent(), [2, new Ll(i, this.performanceClient)];
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
        throw L.createHashDoesNotContainStateError();
      var i = Hl.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!i)
        throw L.createUnableToParseStateError();
      if (i.interactionType !== n)
        throw L.createStateInteractionTypeMismatchError();
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
              }, s = t || this.config.auth.authority, c = Ln.generateAuthority(s, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(_.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, _o.createDiscoveredInstance(c, this.config.system.networkClient, this.browserStorage, a, this.logger, this.performanceClient, this.correlationId).then(function(u) {
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
              return s = B.apply(void 0, [B.apply(void 0, c.concat([h.sent()])), { redirectUri: o, state: a, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: vo.FRAGMENT }]), l = t.account || this.browserStorage.getActiveAccount(), l && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + l.homeAccountId, this.correlationId), s.account = l), j.isEmpty(s.loginHint) && !l && (u = this.browserStorage.getLegacyLoginHint(), u && (s.loginHint = u)), [2, s];
          }
        });
      });
    }, e;
  }(Bl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ta = (
  /** @class */
  function() {
    function r(e, t, n, o, i) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = n, this.logger = o, this.performanceClient = i;
    }
    return r.prototype.handleCodeResponseFromHash = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        var i, a, s;
        return P(this, function(c) {
          if (this.performanceClient.addQueueMeasurement(_.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), j.isEmpty(e))
            throw L.createEmptyHashError(e);
          if (i = this.browserStorage.generateStateKey(t), a = this.browserStorage.getTemporaryCache(i), !a)
            throw z.createStateNotFoundError("Cached State");
          try {
            s = this.authModule.handleFragmentResponse(e, a);
          } catch (l) {
            throw l instanceof kr && l.subError === N.userCancelledError.code ? L.createUserCancelledError() : l;
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
              return this.performanceClient.addQueueMeasurement(_.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, _o.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
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
var fc = (
  /** @class */
  function(r) {
    De(e, r);
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), j.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(he.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(he.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
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
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), L.createEmptyNavigationUriError();
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
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), j.isEmpty(t))
                throw L.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), a = this.browserStorage.generateStateKey(n), s = this.browserStorage.getTemporaryCache(a), !s)
                throw z.createStateNotFoundError("Cached State");
              try {
                c = this.authModule.handleFragmentResponse(t, s);
              } catch (p) {
                throw p instanceof kr && p.subError === N.userCancelledError.code ? L.createUserCancelledError() : p;
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
  }(Ta)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ee;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(ee || (ee = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Zt;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(Zt || (Zt = {}));
var mn = {
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
    De(e, r);
    function e(t, n, o) {
      var i = r.call(this, t, n) || this;
      return Object.setPrototypeOf(i, e.prototype), i.name = "NativeAuthError", i.ext = o, i;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Zt.PERSISTENT_ERROR || this.ext.status === Zt.DISABLED))
        return !0;
      switch (this.errorCode) {
        case mn.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, e.createError = function(t, n, o) {
      if (o && o.status)
        switch (o.status) {
          case Zt.ACCOUNT_UNAVAILABLE:
            return wt.createNativeAccountUnavailableError();
          case Zt.USER_INTERACTION_REQUIRED:
            return new wt(t, n);
          case Zt.USER_CANCEL:
            return L.createUserCancelledError();
          case Zt.NO_NETWORK:
            return L.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(mn.userSwitch.code, mn.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(mn.tokensNotFoundInCache.code, mn.tokensNotFoundInCache.desc);
    }, e;
  }(q)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var zl = (
  /** @class */
  function(r) {
    De(e, r);
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
              throw s = c.sent(), s instanceof L && s.errorCode === N.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
                errorCode: s instanceof q && s.errorCode || void 0,
                subErrorCode: s instanceof q && s.subError || void 0,
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
    }, e.prototype.createSilentFlowClient = function(t, n, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = a.sent(), [2, new $p(i, this.performanceClient)];
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
  }(cn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Xr = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t, n, o, i, a, s, c, l, u, h, d, f) {
      var p = r.call(this, t, n, o, i, a, s, l, u, f) || this;
      return p.apiId = c, p.accountId = h, p.nativeMessageHandler = u, p.nativeStorageManager = d, p.silentCacheClient = new zl(t, p.nativeStorageManager, o, i, a, s, l, u, f), p;
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
        scopes: Fe.fromString(t.scope).asArray(),
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
              n = t.prompt, o = Zs(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(he.NATIVE_REQUEST)), i = {
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
      return new Mt(t.id_token || S.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = He.generateHomeAccountId(t.client_info || S.EMPTY_STRING, Ye.Default, this.logger, this.browserCrypto, n.claims);
      return o;
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? Fe.fromString(t.scope) : Fe.fromString(n.scope);
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
              if (o = new tn(this.browserCrypto), i = {
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
              return c = this.addTelemetryFromNativeResponse(t), l = t.scope ? Fe.fromString(t.scope) : Fe.fromString(n.scope), u = t.account.properties || {}, h = u.UID || o.claims.oid || o.claims.sub || S.EMPTY_STRING, d = u.TenantId || o.claims.tid || S.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
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
      var l = tr.createIdTokenEntity(o, n.authority, t.id_token || S.EMPTY_STRING, n.clientId, i.claims.tid || S.EMPTY_STRING), u = n.tokenType === ge.POP ? S.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, h = c + u, d = this.generateScopes(t, n), f = rr.createAccessTokenEntity(o, n.authority, a, n.clientId, i ? i.claims.tid || S.EMPTY_STRING : s, d.printScopes(), h, 0, this.browserCrypto), p = new Jr(void 0, l, f);
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
              return o = new de(n), o.validateAsUri(), i = t.scopes, a = Zs(t, ["scopes"]), s = new Fe(i || []), s.appendScopes(qn), c = function() {
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
                    throw f.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), L.createNativePromptParameterNotSupportedError();
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
                extraParameters: B(B(B({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: wn.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== ge.POP ? [3, 4] : (u = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, h = new tn(this.browserCrypto), [4, h.generateCnf(u)]);
            case 3:
              d = p.sent(), l.reqCnf = d.reqCnfString, l.keyId = d.kid, p.label = 4;
            case 4:
              return [2, l];
          }
        });
      });
    }, e;
  }(Bl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Tr = (
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
            channel: wn.CHANNEL_ID,
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
              return a.trys.push([1, 3, , 5]), o = new r(e, t, n, wn.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
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
            channel: wn.CHANNEL_ID,
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
    }, r.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== wn.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Ut.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var n = this.handshakeResolvers.get(t.responseId);
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(L.createNativeExtensionNotInstalledError()));
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
            throw q.createUnexpectedError("Event does not contain result.");
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
var ng = (
  /** @class */
  function(r) {
    De(e, r);
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
              return s = f.sent(), this.logger.verbose("Auth code client created"), c = new fc(s, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, s.getAuthCodeUrl(B(B({}, n), { nativeBroker: Tr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw h = f.sent(), h instanceof q && h.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", i), o.cacheFailedRequest(h), this.browserStorage.cleanRequestByState(n.state), h;
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
              throw p = g.sent(), p instanceof q && p.setCorrelationId(this.correlationId), n.cacheFailedRequest(p), this.browserStorage.cleanRequestByInteractionType(K.Redirect), p;
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
                  throw L.createNativeConnectionNotEstablishedError();
                return s = new Xr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, a.accountId, this.nativeStorage, i.correlationId), c = Ht.parseRequestState(this.browserCrypto, n).userRequestState, [2, s.acquireToken(B(B({}, i), {
                  state: c,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  d.browserStorage.cleanRequestByState(n);
                })];
              }
              if (l = this.browserStorage.getCachedAuthority(n), !l)
                throw L.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, i.correlationId), [4, this.createAuthCodeClient(o, l)];
            case 1:
              return u = f.sent(), this.logger.verbose("Auth code client created"), Io.removeThrottle(this.browserStorage, this.config.auth.clientId, i), h = new fc(u, this.browserStorage, i, this.logger, this.browserCrypto, this.performanceClient), [4, h.handleCodeResponseFromHash(t, n, u.authority, this.networkClient)];
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
              throw l = u.sent(), l instanceof q && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, K.Redirect, null, l), this.eventHandler.emitEvent(ee.LOGOUT_END, K.Redirect), l;
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
  }(cn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var og = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t, n, o, i, a, s, c, l, u, h) {
      var d = r.call(this, t, n, o, i, a, s, c, u, h) || this;
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
        var a, s, c, l, u, h, d, f, p, g, m, C, b, v, w, I, T, k = this;
        return P(this, function(E) {
          switch (E.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), a = this.initializeServerTelemetryManager(ve.acquireTokenPopup), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Popup)];
            case 1:
              s = E.sent(), this.browserStorage.updateCacheEntries(s.state, s.nonce, s.authority, s.loginHint || S.EMPTY_STRING, s.account || null), E.label = 2;
            case 2:
              return E.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(s)];
            case 3:
              return c = E.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(a, s.authority, s.azureCloudOptions)];
            case 4:
              return l = E.sent(), this.logger.verbose("Auth code client created"), u = Tr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), h = void 0, u && (h = this.performanceClient.startMeasurement(_.FetchAccountIdWithNativeBroker, t.correlationId)), [4, l.getAuthCodeUrl(B(B({}, s), { nativeBroker: u }))];
            case 5:
              return d = E.sent(), f = new Ta(l, this.browserStorage, c, this.logger, this.performanceClient), p = {
                popup: i,
                popupName: n,
                popupWindowAttributes: o
              }, g = this.initiateAuthRequest(d, p), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: g }, null), [4, this.monitorPopupForHash(g)];
            case 6:
              if (m = E.sent(), C = de.getDeserializedHash(m), b = this.validateAndExtractStateFromHash(C, K.Popup, s.correlationId), Io.removeThrottle(this.browserStorage, this.config.auth.clientId, c), C.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), h && h.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw L.createNativeConnectionNotEstablishedError();
                return v = new Xr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, C.accountId, this.nativeStorage, s.correlationId), w = Ht.parseRequestState(this.browserCrypto, b).userRequestState, [2, v.acquireToken(B(B({}, s), {
                  state: w,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  k.browserStorage.cleanRequestByState(b);
                })];
              }
              return [4, f.handleCodeResponseFromHash(m, b, l.authority, this.networkClient)];
            case 7:
              return I = E.sent(), [2, I];
            case 8:
              throw T = E.sent(), i && i.close(), T instanceof q && T.setCorrelationId(this.correlationId), a.cacheFailedRequest(T), this.browserStorage.cleanRequestByState(s.state), T;
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
              throw p = g.sent(), a && a.close(), p instanceof q && p.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, K.Popup, null, p), this.eventHandler.emitEvent(ee.LOGOUT_END, K.Popup), c.cacheFailedRequest(p), p;
            case 6:
              return this.eventHandler.emitEvent(ee.LOGOUT_END, K.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (j.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), L.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, n);
    }, e.prototype.monitorPopupForHash = function(t) {
      var n = this;
      return new Promise(function(o, i) {
        var a = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, s = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var c = setInterval(function() {
          if (t.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(c), i(L.createUserCancelledError());
            return;
          }
          var l = S.EMPTY_STRING, u = S.EMPTY_STRING;
          try {
            l = t.location.href, u = t.location.hash;
          } catch {
          }
          j.isEmpty(l) || l === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), s++, u ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(c), n.cleanPopup(t), de.hashContainsKnownProperties(u) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(u)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + u), i(L.createHashDoesNotContainKnownPropertiesError()))) : s > a && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(c), i(L.createMonitorPopupTimeoutError())));
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
          j.isEmpty(a) || a === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(i), n.cleanPopup(t), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, n.popupName, n.popupWindowAttributes)), !o)
          throw L.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (i) {
        throw this.logger.error("error opening popup " + i.message), this.browserStorage.setInteractionInProgress(!1), L.createPopupWindowError(i.toString());
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
  }(cn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ig = (
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
var ag = 6e4, Zi = 6e3, sg = 3e4, cg = 2e3;
function lg(r, e) {
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
    protocolMode: en.AAD,
    azureCloudOptions: {
      azureCloudInstance: Dn.None,
      tenant: S.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, s = {
    cacheLocation: Ee.SessionStorage,
    temporaryCacheLocation: Ee.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(n && n.cacheLocation === Ee.LocalStorage),
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
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Zi,
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
var $l = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t, n, o, i, a, s) {
      var c = r.call(this, t, n, o, i, s) || this;
      return c.navigateFrameWait = a.navigateFrameWait, c.pollIntervalMilliseconds = a.pollIntervalMilliseconds, c;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), j.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), L.createEmptyNavigationUriError();
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
        n < Zi && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + Zi + "ms). This may result in timeouts.");
        var s = window.performance.now(), c = s + n, l = setInterval(function() {
          if (window.performance.now() > c) {
            o.removeHiddenIframe(t), clearInterval(l), a(L.createMonitorIframeTimeoutError());
            return;
          }
          var u = S.EMPTY_STRING, h = t.contentWindow;
          try {
            u = h ? h.location.href : S.EMPTY_STRING;
          } catch {
          }
          if (!j.isEmpty(u)) {
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
  }(Ta)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ug = (
  /** @class */
  function(r) {
    De(e, r);
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
              if (this.performanceClient.addQueueMeasurement(_.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(_.SilentIframeClientAcquireToken, t.correlationId), j.isEmpty(t.loginHint) && j.isEmpty(t.sid) && (!t.account || j.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ue.NONE && t.prompt !== Ue.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), L.createSilentPromptValueError(t.prompt);
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
              throw s = c.sent(), s instanceof q && s.setCorrelationId(this.correlationId), i.cacheFailedRequest(s), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: s instanceof q && s.errorCode || void 0,
                subErrorCode: s instanceof q && s.subError || void 0,
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
    }, e.prototype.silentTokenHelper = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u, h, d, f = this;
        return P(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = p.sent(), this.performanceClient.setPreQueueTime(_.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(B(B({}, n), { nativeBroker: Tr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return i = p.sent(), a = new $l(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(_.SilentHandlerInitiateAuthRequest, n.correlationId), [4, a.initiateAuthRequest(i)];
            case 3:
              return s = p.sent(), this.performanceClient.setPreQueueTime(_.SilentHandlerMonitorIframeForHash, n.correlationId), [4, a.monitorIframeForHash(s, this.config.system.iframeHashTimeout)];
            case 4:
              if (c = p.sent(), l = de.getDeserializedHash(c), u = this.validateAndExtractStateFromHash(l, K.Silent, o.correlationId), l.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw L.createNativeConnectionNotEstablishedError();
                return h = new Xr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId), d = Ht.parseRequestState(this.browserCrypto, u).userRequestState, [2, h.acquireToken(B(B({}, n), { state: d, prompt: n.prompt || Ue.NONE })).finally(function() {
                  f.browserStorage.cleanRequestByState(u);
                })];
              }
              return this.performanceClient.setPreQueueTime(_.HandleCodeResponseFromHash, n.correlationId), [2, a.handleCodeResponseFromHash(c, u, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(cn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var dg = (
  /** @class */
  function(r) {
    De(e, r);
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
                throw u instanceof q && u.setCorrelationId(c.correlationId), a.cacheFailedRequest(u), i.endMeasurement({
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
    }, e.prototype.createRefreshTokenClient = function(t, n, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = a.sent(), [2, new Fl(i, this.performanceClient)];
          }
        });
      });
    }, e;
  }(cn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hg = (
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
        var o = We.toObject(new He(), n), i = o.getAccountInfo();
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
var Kl = (
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
var ql = (
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
var fg = (
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
var pg = 32, gg = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new ql(), this.cryptoObj = e;
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
        var e = new Uint8Array(pg);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (n) {
        throw L.createPkceNotGeneratedError(n);
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
              throw n = o.sent(), L.createPkceNotGeneratedError(n);
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
var mg = (
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
          return [2, window.crypto.subtle.exportKey(rn, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        return P(this, function(i) {
          return [2, window.crypto.subtle.importKey(rn, e, t, n, o)];
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
var yg = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(ba(e));
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
          return [2, window.msrCrypto.subtle.exportKey(rn, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        return P(this, function(i) {
          return [2, window.msrCrypto.subtle.importKey(rn, e, t, n, o)];
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
var vg = (
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
            var i = window.msCrypto.subtle.exportKey(rn, e);
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
            var u = window.msCrypto.subtle.importKey(rn, a, t, n, o);
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
var bg = "RSASSA-PKCS1-v1_5", pc = "SHA-256", Cg = 2048, wg = new Uint8Array([1, 0, 1]), Vl = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new mg();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new vg();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
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
          return t = Bt.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: pc }, t)];
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
var Sg = (
  /** @class */
  function() {
    function r() {
      this.dbName = Qi, this.version = Xp, this.tableName = Zp, this.dbOpen = !1;
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
              return o(L.createDatabaseUnavailableError());
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
                  return a(L.createDatabaseNotOpenError());
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
                  return o(L.createDatabaseNotOpenError());
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
    }, r.prototype.deleteDatabase = function() {
      return R(this, void 0, void 0, function() {
        return P(this, function(e) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(t, n) {
            var o = window.indexedDB.deleteDatabase(Qi);
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
var gc = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new Ji(), this.indexedDBCache = new Sg(), this.logger = e, this.storeName = t;
    }
    return r.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof L && e.errorCode === N.databaseUnavailable.code)
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
var Ro;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(Ro || (Ro = {}));
var Ig = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new gc(this.logger, Ro.asymmetricKeys), this.symmetricKeys = new gc(this.logger, Ro.symmetricKeys);
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
var Tg = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new Vl(this.logger, n), this.b64Encode = new ql(), this.b64Decode = new fg(), this.guidGenerator = new Kl(this.browserCrypto), this.pkceGenerator = new gg(this.browserCrypto), this.cache = new Ig(this.logger), this.performanceClient = t;
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
        return P(this, function(b) {
          switch (b.label) {
            case 0:
              return i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (a = b.sent(), !a)
                throw L.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(a.publicKey)];
            case 2:
              return s = b.sent(), c = Bt.getSortedObjectString(s), l = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), u = Yp.getShrHeaderString({ kid: l, alg: s.alg }), h = this.b64Encode.urlEncode(u), e.cnf = {
                jwk: JSON.parse(c)
              }, d = this.b64Encode.urlEncode(JSON.stringify(e)), f = h + "." + d, p = Bt.stringToArrayBuffer(f), [4, this.browserCrypto.sign(a.privateKey, p)];
            case 3:
              return g = b.sent(), m = this.b64Encode.urlEncodeArr(new Uint8Array(g)), C = f + "." + m, i && i.endMeasurement({
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
var mc = (
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
var Eg = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t, n, o, i, a, s, c) {
      var l = r.call(this, t, n, o, i, a, s) || this;
      return l.browserCrypto = new Vl(l.logger, c), l.guidGenerator = new Kl(l.browserCrypto), l;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new mc(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, i = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(a) {
        i.push(B({}, a));
      }), i.length > 0 && mc.flushMeasurements(t.event.correlationId, i);
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
  }(Ul)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var _g = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw L.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new Mt(t.id_token, this.cryptoObj), i, a, s;
      if (e.account)
        s = He.createFromAccountInfo(e.account), i = new Jr(s, this.loadIdToken(o, s.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, s.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, s.homeAccountId, e.account.environment));
      else if (e.authority) {
        var c = Ln.generateAuthority(e.authority, e.azureCloudOptions), l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (a = new Ln(c, this.config.system.networkClient, this.storage, l, this.logger), n.clientInfo)
          this.logger.trace("TokenCache - homeAccountId from options"), s = this.loadAccount(o, a, n.clientInfo), i = new Jr(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, n), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else if (t.client_info)
          this.logger.trace("TokenCache - homeAccountId from response"), s = this.loadAccount(o, a, t.client_info), i = new Jr(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, n), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else
          throw L.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw L.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, i, s, a);
    }, r.prototype.loadAccount = function(e, t, n, o) {
      var i;
      if (o ? i = o : t.authorityType !== void 0 && n && (i = He.generateHomeAccountId(n, t.authorityType, this.logger, this.cryptoObj, e.claims)), !i)
        throw L.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var a = He.createAccount({ homeAccountId: i, idTokenClaims: e.claims, clientInfo: n, environment: t.hostnameAndPort }, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(a), a;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(e, t, n, o) {
      var i = tr.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(i), i;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(e, t, n, o, i, a) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw L.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!a.extendedExpiresOn)
        throw L.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var s = new Fe(e.scopes).printScopes(), c = a.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, l = a.extendedExpiresOn, u = rr.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, i, s, c, l, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u), u;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var i = Wr.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(i), i;
      throw L.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o, i) {
      var a, s = S.EMPTY_STRING, c = [], l = null, u;
      n.accessToken && (s = n.accessToken.secret, c = Fe.fromString(n.accessToken.target).asArray(), l = new Date(Number(n.accessToken.expiresOn) * 1e3), u = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
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
var kg = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(Ll)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ag = (
  /** @class */
  function(r) {
    De(e, r);
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
                throw L.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Silent)];
            case 1:
              n = u.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || S.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), i = B(B({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return a = u.sent(), s = new kg(a), this.logger.verbose("Auth code client created"), c = new $l(s, this.browserStorage, i, this.logger, this.config.system, this.performanceClient), [2, c.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, s.authority, this.networkClient, !1)];
            case 4:
              throw l = u.sent(), l instanceof q && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(n.state), l;
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
  }(cn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Rg = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = lg(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Ca(this.config.system.loggerOptions, vi, Nn), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new Eg(this.config.auth.clientId, this.config.auth.authority, this.logger, vi, Nn, this.config.telemetry.application, this.config.system.cryptoOptions) : new Jp(this.config.auth.clientId, this.config.auth.authority, this.logger, vi, Nn, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new Tg(this.logger, this.performanceClient, this.config.system.cryptoOptions) : wo, this.eventHandler = new hg(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new Xi(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : eg(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: Ee.MemoryStorage,
        temporaryCacheLocation: Ee.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new Xi(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new _g(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
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
              return a.trys.push([1, 3, , 4]), n = this, [4, Tr.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
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
          return this.logger.verbose("handleRedirectPromise called"), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || S.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(ee.HANDLE_REDIRECT_START, K.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), i = this.browserStorage.getCachedNativeRequest(), a = void 0, i && Tr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), s = new Xr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId), a = s.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), c = this.browserStorage.getTemporaryCache(he.CORRELATION_ID, !0) || S.EMPTY_STRING, l = this.createRedirectClient(c), a = l.handleRedirectPromise(e)), o = a.then(function(d) {
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
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(K.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Redirect, e) : this.eventHandler.emitEvent(ee.LOGIN_START, K.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (i = new Xr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = i.acquireTokenRedirect(e).catch(function(l) {
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
              throw L.createSpaCodeAndNativeAccountIdPresentError();
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
              throw L.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw L.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (c) {
            throw this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, K.Silent, null, c), n.endMeasurement({
              errorCode: c instanceof q && c.errorCode || void 0,
              subErrorCode: c instanceof q && c.subError || void 0,
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
    }, r.prototype.acquireTokenByRefreshToken = function(e, t) {
      return R(this, void 0, void 0, function() {
        var n;
        return P(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(_.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case Qe.Default:
            case Qe.AccessTokenAndRefreshToken:
            case Qe.RefreshToken:
            case Qe.RefreshTokenAndNetwork:
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), Se.blockNonBrowserEnvironment(this.isBrowserEnvironment), Se.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), Se.blockReloadInHiddenIframes(), Se.blockAcquireTokenInPopups(), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === K.Redirect && this.config.cache.cacheLocation === Ee.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Ao.createInMemoryRedirectUnavailableError();
      (e === K.Redirect || e === K.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), Se.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        var o;
        return P(this, function(i) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw L.createNativeConnectionNotEstablishedError();
          return o = new Xr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !Tr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
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
      return new og(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new ng(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new ug(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new zl(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new dg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new Ag(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var Pg = (
  /** @class */
  function(r) {
    De(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return e.prototype.loginRedirect = function(t) {
      return R(this, void 0, void 0, function() {
        var n;
        return P(this, function(o) {
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(B({ correlationId: n }, t || uc))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(B({ correlationId: n }, t || uc));
    }, e.prototype.acquireTokenSilent = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l, u = this;
        return P(this, function(h) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(_.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(K.Silent), this.logger.verbose("acquireTokenSilent called", n), i = t.account || this.getActiveAccount(), !i)
            throw L.createNoAccountError();
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
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), Tr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), a = B(B({}, t), { account: n }), i = this.acquireTokenNative(a, ve.acquireTokenSilent_silentFlow).catch(function(d) {
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
                cacheLookupPolicy: t.cacheLookupPolicy || Qe.Default
              }), this.performanceClient.setPreQueueTime(_.AcquireTokenFromCache, c.correlationId), i = this.acquireTokenFromCache(s, c, l).catch(function(d) {
                if (l.cacheLookupPolicy === Qe.AccessToken)
                  throw d;
                return Se.blockReloadInHiddenIframes(), u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_NETWORK_START, K.Silent, c), u.performanceClient.setPreQueueTime(_.AcquireTokenByRefreshToken, c.correlationId), u.acquireTokenByRefreshToken(c, l).catch(function(f) {
                  var p = f instanceof kr, g = f instanceof wt, m = f.errorCode === Yr.noTokensFoundError.code, C = f.errorCode === bt.INVALID_GRANT_ERROR;
                  if ((!p || !C || g || l.cacheLookupPolicy === Qe.AccessTokenAndRefreshToken || l.cacheLookupPolicy === Qe.RefreshToken) && l.cacheLookupPolicy !== Qe.Skip && !m)
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
  }(Rg)
);
function Pt(r) {
  return Object.keys(r);
}
function bi(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Ea(r, e) {
  const t = { ...r }, n = e;
  return bi(r) && bi(e) && Object.keys(e).forEach((o) => {
    bi(n[o]) && o in r ? t[o] = Ea(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function Ng(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function Mg(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function Og(r) {
  const e = Mg(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Ci(r) {
  return r === "0rem" ? "0rem" : `calc(${r} * var(--mantine-scale))`;
}
function Gl(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return `0${r}`;
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? Ci(o) : o;
    }
    if (typeof n == "string") {
      if (n === "" || n.startsWith("calc(") || n.startsWith("clamp(") || n.includes("rgba("))
        return n;
      if (n.includes(","))
        return n.split(",").map((i) => t(i)).join(",");
      if (n.includes(" "))
        return n.split(" ").map((i) => t(i)).join(" ");
      if (n.includes(r))
        return e ? Ci(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${r}`;
        return e ? Ci(i) : i;
      }
    }
    return n;
  }
  return t;
}
const A = Gl("rem", { shouldScale: !0 }), yc = Gl("em");
function _a(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function Wl(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function Vn(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== Cl : !1;
}
function ln(r) {
  const e = Mr(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => {
    const o = cr(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function Yl(r = null) {
  const e = Mr(r);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => cr(e)];
}
function vc(r, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${r}-${t}`;
  };
}
function ea(r, e) {
  let t = r;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function xg(r, e, t) {
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
function Dg(r, e, t) {
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
function Lg(r, e, t) {
  return ea(r, t) === ea(e, t);
}
function Fg({
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
      ((p = ea(s.currentTarget, r)) == null ? void 0 : p.querySelectorAll(
        e
      )) || []
    ).filter((g) => Lg(s.currentTarget, g, r)), l = c.findIndex((g) => s.currentTarget === g), u = Dg(l, c, n), h = xg(l, c, n), d = i === "rtl" ? h : u, f = i === "rtl" ? u : h;
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
const jg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Ug(r) {
  return jg[r];
}
const Hg = () => {
};
function Bg(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || Hg : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Re(r, e = "size", t = !0) {
  if (r !== void 0)
    return Wl(r) ? t ? A(r) : r : `var(--${e}-${r})`;
}
function ka(r) {
  return Re(r, "mantine-spacing");
}
function Et(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Re(r, "mantine-radius");
}
function it(r) {
  return Re(r, "mantine-font-size");
}
function zg(r) {
  return Re(r, "mantine-line-height", !1);
}
function Ql(r) {
  if (r)
    return Re(r, "mantine-shadow", !1);
}
function Jl() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function wr(r) {
  const e = ue(r);
  return W(() => {
    e.current = r;
  }), On(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Qo(r, e) {
  const t = wr(r), n = ue(0);
  return W(() => () => window.clearTimeout(n.current), []), me(
    (...o) => {
      window.clearTimeout(n.current), n.current = window.setTimeout(() => t(...o), e);
    },
    [t, e]
  );
}
const bc = ["mousedown", "touchstart"];
function $g(r, e, t) {
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
    return (e || bc).forEach((i) => document.addEventListener(i, o)), () => {
      (e || bc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [n, r, t]), n;
}
function Kg(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function qg(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function Vg(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = Z(
    t ? e : qg(r)
  ), i = ue();
  return W(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(r), o(i.current.matches), Kg(i.current, (a) => o(a.matches));
  }, [r]), n;
}
function Gg(r, e, t = { leading: !1 }) {
  const [n, o] = Z(r), i = ue(!1), a = ue(null), s = ue(!1), c = () => window.clearTimeout(a.current);
  return W(() => {
    i.current && (!s.current && t.leading ? (s.current = !0, o(r)) : (c(), a.current = window.setTimeout(() => {
      s.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), W(() => (i.current = !0, c), []), [n, c];
}
const Gn = typeof document < "u" ? ya : W;
function Ar(r, e) {
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
function Wg({ opened: r, shouldReturnFocus: e = !0 }) {
  const t = ue(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Ar(() => {
    let o = -1;
    const i = (a) => {
      a.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), r ? t.current = document.activeElement : e && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [r, e]), n;
}
function Yg(r, e = "body > :not(script)") {
  const t = Jl(), n = Array.from(
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
const Qg = /input|select|textarea|button|object/, Xl = "a, input, select, textarea, button, object, [tabindex]";
function Jg(r) {
  return r.style.display === "none";
}
function Xg(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Jg(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function Zl(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function ta(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(Zl(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Qg.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && Xg(r);
}
function eu(r) {
  const e = Zl(r);
  return (Number.isNaN(e) || e >= 0) && ta(r);
}
function Zg(r) {
  return Array.from(r.querySelectorAll(Xl)).filter(eu);
}
function em(r, e) {
  const t = Zg(r);
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
function tm(r = !0) {
  const e = ue(), t = ue(null), n = (i) => {
    let a = i.querySelector("[data-autofocus]");
    if (!a) {
      const s = Array.from(i.querySelectorAll(Xl));
      a = s.find(eu) || s.find(ta) || null, !a && ta(i) && (a = i);
    }
    a && a.focus({ preventScroll: !0 });
  }, o = me(
    (i) => {
      if (r) {
        if (i === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = Yg(i), e.current !== i && (i ? (setTimeout(() => {
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
      a.key === "Tab" && e.current && em(e.current, a);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), t.current && t.current();
    };
  }, [r]), o;
}
const rm = Ko["useId".toString()] || (() => {
});
function nm() {
  const r = rm();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function lr(r) {
  const e = nm(), [t, n] = Z(e);
  return Gn(() => {
    n(Jl());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function tu(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function ru(...r) {
  return (e) => {
    r.forEach((t) => tu(t, e));
  };
}
function ft(...r) {
  return me(ru(...r), r);
}
function Rr({
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
function nu(r, e) {
  return Vg("(prefers-reduced-motion: reduce)", r, e);
}
function om(r) {
  const e = ue();
  return W(() => {
    e.current = r;
  }, [r]), e.current;
}
function ou(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (t = ou(r[e])) && (n && (n += " "), n += t);
    } else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function qt() {
  for (var r, e, t = 0, n = "", o = arguments.length; t < o; t++)
    (r = arguments[t]) && (e = ou(r)) && (n && (n += " "), n += e);
  return n;
}
const im = {};
function am(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = qt(e[n], o) : e[n] = o;
    });
  }), e;
}
function Jo({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const i = (Array.isArray(e) ? e : [e]).map(
    (a) => typeof a == "function" ? a(r, t, n) : a || im
  );
  return am(i);
}
function Po({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((i, a) => typeof a == "function" ? { ...i, ...a(r, t, n) } : { ...i, ...a }, {});
}
const iu = Mr(null);
function Or() {
  const r = cr(iu);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function sm() {
  return Or().cssVariablesResolver;
}
function cm() {
  return Or().classNamesPrefix;
}
function Aa() {
  return Or().getStyleNonce;
}
function lm() {
  return Or().withStaticClasses;
}
function um() {
  return Or().headless;
}
function dm() {
  var r;
  return (r = Or().stylesTransform) == null ? void 0 : r.sx;
}
function hm() {
  var r;
  return (r = Or().stylesTransform) == null ? void 0 : r.styles;
}
function fm(r) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(r);
}
function pm(r) {
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
function gm(r) {
  const [e, t, n, o] = r.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function mm(r) {
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
function Ra(r) {
  return fm(r) ? pm(r) : r.startsWith("rgb") ? gm(r) : r.startsWith("hsl") ? mm(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function io(r, e) {
  if (r.startsWith("var("))
    return `color-mix(in srgb, ${r}, black ${e * 100}%)`;
  const { r: t, g: n, b: o, a: i } = Ra(r), a = 1 - e, s = (c) => Math.round(c * a);
  return `rgba(${s(t)}, ${s(n)}, ${s(o)}, ${i})`;
}
function Fn(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function wi(r) {
  return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
}
function ym(r) {
  const e = r.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function vm(r) {
  if (r.startsWith("oklch("))
    return (ym(r) || 0) / 100;
  const { r: e, g: t, b: n } = Ra(r), o = e / 255, i = t / 255, a = n / 255, s = wi(o), c = wi(i), l = wi(a);
  return 0.2126 * s + 0.7152 * c + 0.0722 * l;
}
function yn(r, e = 0.179) {
  return r.startsWith("var(") ? !1 : vm(r) > e;
}
function xr({
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
      isLight: yn(
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
      isLight: yn(
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
      isLight: yn(
        r === "white" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: `--mantine-color-${r}`
    };
  const [n, o] = r.split("."), i = o ? Number(o) : void 0, a = n in e.colors;
  if (a) {
    const s = i !== void 0 ? e.colors[n][i] : e.colors[n][Fn(e, t || "light")];
    return {
      color: n,
      value: s,
      shade: i,
      isThemeColor: a,
      isLight: yn(s, e.luminanceThreshold),
      variable: o ? `--mantine-color-${n}-${i}` : `--mantine-color-${n}-filled`
    };
  }
  return {
    color: r,
    value: r,
    isThemeColor: a,
    isLight: yn(r, e.luminanceThreshold),
    shade: i,
    variable: void 0
  };
}
function or(r, e) {
  const t = xr({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function ra(r, e) {
  const t = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, n = or(t.from, e), o = or(t.to, e);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function jt(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (r.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${r}, transparent ${i}%)`;
  }
  if (r.startsWith("oklch"))
    return r.includes("/") ? r.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : r.replace(")", ` / ${e})`);
  const { r: t, g: n, b: o } = Ra(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const zr = jt, bm = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n,
  autoContrast: o
}) => {
  const i = xr({ color: r, theme: e }), a = typeof o == "boolean" ? o : e.autoContrast;
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
      hover: io(r, 0.1),
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
        background: jt(s, 0.1),
        hover: jt(s, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${A(1)} solid transparent`
      };
    }
    return {
      background: jt(r, 0.1),
      hover: jt(r, 0.12),
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
      hover: jt(e.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${A(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: jt(r, 0.05),
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
        hover: jt(s, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${A(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: jt(r, 0.12),
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
    hover: io(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${A(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: io(e.white, 0.01),
    color: `var(--mantine-color-${i.color}-${i.shade})`,
    border: `${A(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: io(e.white, 0.01),
    color: r,
    border: `${A(1)} solid transparent`
  } : t === "gradient" ? {
    background: ra(n, e),
    hover: ra(n, e),
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
}, Cc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Pa = {
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
function wc(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function wm({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return wc(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && wc(n.newValue) && t(n.newValue);
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
const Sm = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Sc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Si(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Ic(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(Sm);
  if (typeof r.primaryShade == "object" && (!Si(r.primaryShade.dark) || !Si(r.primaryShade.light)))
    throw new Error(Sc);
  if (typeof r.primaryShade == "number" && !Si(r.primaryShade))
    throw new Error(Sc);
}
function Im(r, e) {
  var n;
  if (!e)
    return Ic(r), r;
  const t = Ea(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), Ic(t), t;
}
const Na = Mr(null), Tm = () => cr(Na) || Pa;
function Vt() {
  const r = cr(Na);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function au({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = Tm(), o = On(
    () => Im(t ? n : Pa, r),
    [r, n, t]
  );
  return /* @__PURE__ */ y.jsx(Na.Provider, { value: o, children: e });
}
au.displayName = "@mantine/core/MantineThemeProvider";
function Em() {
  const r = Vt(), e = Aa(), t = Pt(r.breakpoints).reduce((n, o) => {
    const i = r.breakpoints[o].includes("px"), a = Og(r.breakpoints[o]), s = i ? `${a - 0.1}px` : yc(a - 0.1), c = i ? `${a}px` : yc(a);
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
function Ii(r) {
  return Object.entries(r).map(([e, t]) => `${e}: ${t};`).join("");
}
function vn(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, e);
}
function _m(r, e) {
  const t = Ii(r.variables), n = t ? vn(e, t) : "", o = Ii(r.dark), i = Ii(r.light), a = o ? vn(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, o) : "", s = i ? vn(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, i) : "";
  return `${n}${a}${s}`;
}
function Ma({ color: r, theme: e, autoContrast: t }) {
  return (typeof t == "boolean" ? t : e.autoContrast) && xr({ color: r || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Tc(r, e) {
  return Ma({
    color: r.colors[r.primaryColor][Fn(r, e)],
    theme: r,
    autoContrast: null
  });
}
function ao({
  theme: r,
  color: e,
  colorScheme: t,
  name: n = e,
  withColorValues: o = !0
}) {
  if (!r.colors[e])
    return {};
  if (t === "light") {
    const s = Fn(r, "light"), c = {
      [`--mantine-color-${n}-text`]: `var(--mantine-color-${n}-filled)`,
      [`--mantine-color-${n}-filled`]: `var(--mantine-color-${n}-${s})`,
      [`--mantine-color-${n}-filled-hover`]: `var(--mantine-color-${n}-${s === 9 ? 8 : s + 1})`,
      [`--mantine-color-${n}-light`]: zr(r.colors[e][s], 0.1),
      [`--mantine-color-${n}-light-hover`]: zr(r.colors[e][s], 0.12),
      [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${s})`,
      [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${s})`,
      [`--mantine-color-${n}-outline-hover`]: zr(r.colors[e][s], 0.05)
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
  const i = Fn(r, "dark"), a = {
    [`--mantine-color-${n}-text`]: `var(--mantine-color-${n}-4)`,
    [`--mantine-color-${n}-filled`]: `var(--mantine-color-${n}-${i})`,
    [`--mantine-color-${n}-filled-hover`]: `var(--mantine-color-${n}-${i === 9 ? 8 : i + 1})`,
    [`--mantine-color-${n}-light`]: zr(
      r.colors[e][Math.max(0, i - 2)],
      0.15
    ),
    [`--mantine-color-${n}-light-hover`]: zr(
      r.colors[e][Math.max(0, i - 2)],
      0.2
    ),
    [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${Math.max(i - 5, 0)})`,
    [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${Math.max(i - 4, 0)})`,
    [`--mantine-color-${n}-outline-hover`]: zr(
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
function km(r) {
  return !!r && typeof r == "object" && "mantine-virtual-color" in r;
}
function $r(r, e, t) {
  Pt(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const su = (r) => {
  const e = Fn(r, "light"), t = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : A(r.defaultRadius), n = {
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
      "--mantine-primary-color-contrast": Tc(r, "light"),
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
      "--mantine-primary-color-contrast": Tc(r, "dark"),
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
  $r(n.variables, r.breakpoints, "breakpoint"), $r(n.variables, r.spacing, "spacing"), $r(n.variables, r.fontSizes, "font-size"), $r(n.variables, r.lineHeights, "line-height"), $r(n.variables, r.shadows, "shadow"), $r(n.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((i, a) => {
    n.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${r.primaryColor}-${a})`;
  }), Pt(r.colors).forEach((i) => {
    const a = r.colors[i];
    if (km(a)) {
      Object.assign(
        n.light,
        ao({
          theme: r,
          name: a.name,
          color: a.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        n.dark,
        ao({
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
      ao({
        theme: r,
        color: i,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      n.dark,
      ao({
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
function Am({ theme: r, generator: e }) {
  const t = su(r), n = e == null ? void 0 : e(r);
  return n ? Ea(t, n) : t;
}
const Ti = su(Pa);
function Rm(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return Pt(r.variables).forEach((t) => {
    Ti.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), Pt(r.light).forEach((t) => {
    Ti.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), Pt(r.dark).forEach((t) => {
    Ti.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function Pm(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function cu({
  cssVariablesSelector: r,
  deduplicateCssVariables: e
}) {
  const t = Vt(), n = Aa(), o = sm(), i = Am({ theme: t, generator: o }), a = r === ":root" && e, s = a ? Rm(i) : i, c = _m(s, r);
  return c ? /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${c}${a ? "" : Pm(r)}`
      }
    }
  ) : null;
}
cu.displayName = "@mantine/CssVariables";
function Nm() {
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
function Mm({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = ue(), [i, a] = Z(() => r.get(e)), s = n || i, c = me(
    (u) => {
      n || (Kr(u, t), a(u), r.set(u));
    },
    [r.set, s, n]
  ), l = me(() => {
    a(e), Kr(e, t), r.clear();
  }, [r.clear, e]);
  return W(() => (r.subscribe(c), r.unsubscribe), [r.subscribe, r.unsubscribe]), Gn(() => {
    Kr(r.get(e), t);
  }, []), W(() => {
    var h;
    if (n)
      return Kr(n, t), () => {
      };
    n === void 0 && Kr(i, t), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (d) => {
      i === "auto" && Kr(d.matches ? "dark" : "light", t);
    };
    return (h = o.current) == null || h.addEventListener("change", u), () => {
      var d;
      return (d = o.current) == null ? void 0 : d.removeEventListener("change", u);
    };
  }, [i, n]), { colorScheme: s, setColorScheme: c, clearColorScheme: l };
}
function Om({
  respectReducedMotion: r,
  getRootElement: e
}) {
  Gn(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
Nm();
function lu({
  theme: r,
  children: e,
  getStyleNonce: t,
  withStaticClasses: n = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: a = !0,
  cssVariablesSelector: s = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = wm(),
  defaultColorScheme: u = "light",
  getRootElement: h = () => document.documentElement,
  cssVariablesResolver: d,
  forceColorScheme: f,
  stylesTransform: p
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: C } = Mm({
    defaultColorScheme: u,
    forceColorScheme: f,
    manager: l,
    getRootElement: h
  });
  return Om({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: h
  }), /* @__PURE__ */ y.jsx(
    iu.Provider,
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
      children: /* @__PURE__ */ y.jsxs(au, { theme: r, children: [
        a && /* @__PURE__ */ y.jsx(
          cu,
          {
            cssVariablesSelector: s,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ y.jsx(Em, {}),
        e
      ] })
    }
  );
}
lu.displayName = "@mantine/core/MantineProvider";
function uu({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = Vt();
  return {
    resolvedClassNames: Jo({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: Po({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const xm = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Dm({ theme: r, options: e, unstyled: t }) {
  return qt(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || xm[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function Lm({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Jo({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function Ec({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Jo({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function Fm({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function jm({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function Um({
  themeName: r,
  classNamesPrefix: e,
  selector: t,
  withStaticClass: n
}) {
  return n === !1 ? [] : r.map((o) => `${e}-${o}-${t}`);
}
function Hm({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (i) => {
      var a, s;
      return (s = Jo({
        theme: e,
        classNames: (a = e.components[i]) == null ? void 0 : a.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : s[t];
    }
  );
}
function Bm({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function zm({
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
    Dm({ theme: r, options: e, unstyled: s || f }),
    Hm({ theme: r, themeName: t, selector: n, props: u, stylesCtx: h }),
    Bm({ options: e, classes: a, selector: n, unstyled: s }),
    Ec({ selector: n, stylesCtx: h, theme: r, classNames: i, props: u }),
    Ec({ selector: n, stylesCtx: h, theme: r, classNames: p, props: u }),
    Lm({ selector: n, stylesCtx: h, options: e, props: u, theme: r }),
    Fm({ rootSelector: l, selector: n, className: c }),
    jm({ selector: n, classes: a, unstyled: s || f }),
    d && !f && Um({
      themeName: t,
      classNamesPrefix: o,
      selector: n,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function $m({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (i) => {
      var a;
      return Po({
        theme: r,
        styles: (a = r.components[i]) == null ? void 0 : a.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((i, a) => ({ ...i, ...a }), {});
}
function na({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...na({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Km(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ..._a(t[n]) };
  }), e), {});
}
function qm({
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
  return (c = Km([
    s ? {} : e == null ? void 0 : e(t, n, o),
    ...a.map((l) => {
      var u, h, d;
      return (d = (h = (u = t.components) == null ? void 0 : u[l]) == null ? void 0 : h.vars) == null ? void 0 : d.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : c[i];
}
function Vm({
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
    ...!d && $m({ theme: r, themeName: e, props: o, stylesCtx: i, selector: t }),
    ...!d && Po({ theme: r, styles: s, props: o, stylesCtx: i })[t],
    ...!d && Po({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: i })[t],
    ...qm({ theme: r, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: t, themeName: e, headless: h }),
    ...a === t ? na({ style: c, theme: r }) : null,
    ...na({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function Gm({ props: r, stylesCtx: e, themeName: t }) {
  var a;
  const n = Vt(), o = (a = hm()) == null ? void 0 : a();
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
  const d = Vt(), f = cm(), p = lm(), g = um(), m = (Array.isArray(r) ? r : [r]).filter((v) => v), { withStylesTransform: C, getTransformedStyles: b } = Gm({
    props: t,
    stylesCtx: n,
    themeName: m
  });
  return (v, w) => ({
    className: zm({
      theme: d,
      options: w,
      themeName: m,
      selector: v,
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
      transformedStyles: b([w == null ? void 0 : w.styles, l])
    }),
    style: Vm({
      theme: d,
      themeName: m,
      selector: v,
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
function du(r, e) {
  return typeof r == "boolean" ? r : e.autoContrast;
}
function V(r, e, t) {
  var a;
  const n = Vt(), o = (a = n.components[r]) == null ? void 0 : a.defaultProps, i = typeof o == "function" ? o(n) : o;
  return { ...e, ...i, ..._a(t) };
}
function Ei(r) {
  return Pt(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${Ng(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function Wm({ selector: r, styles: e, media: t, container: n }) {
  const o = e ? Ei(e) : "", i = Array.isArray(t) ? t.map((s) => `@media${s.query}{${r}{${Ei(s.styles)}}}`) : [], a = Array.isArray(n) ? n.map(
    (s) => `@container ${s.query}{${r}{${Ei(s.styles)}}}`
  ) : [];
  return `${o ? `${r}{${o}}` : ""}${i.join("")}${a.join("")}`.trim();
}
function Ym(r) {
  const e = Aa();
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: Wm(r) }
    }
  );
}
function Xo(r) {
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
    ps: b,
    bd: v,
    bg: w,
    c: I,
    opacity: T,
    ff: k,
    fz: E,
    fw: O,
    lts: H,
    ta: $,
    lh: J,
    fs: oe,
    tt: D,
    td: G,
    w: x,
    miw: F,
    maw: U,
    h: X,
    mih: ce,
    mah: Ie,
    bgsz: Ce,
    bgp: Ve,
    bgr: yt,
    bga: Pe,
    pos: hr,
    top: Jt,
    left: fr,
    bottom: pr,
    right: gr,
    inset: fn,
    display: pn,
    flex: xt,
    hiddenFrom: Te,
    visibleFrom: Dt,
    lightHidden: Fr,
    darkHidden: ze,
    sx: mr,
    ...jr
  } = r;
  return { styleProps: _a({
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
    ps: b,
    bd: v,
    bg: w,
    c: I,
    opacity: T,
    ff: k,
    fz: E,
    fw: O,
    lts: H,
    ta: $,
    lh: J,
    fs: oe,
    tt: D,
    td: G,
    w: x,
    miw: F,
    maw: U,
    h: X,
    mih: ce,
    mah: Ie,
    bgsz: Ce,
    bgp: Ve,
    bgr: yt,
    bga: Pe,
    pos: hr,
    top: Jt,
    left: fr,
    bottom: pr,
    right: gr,
    inset: fn,
    display: pn,
    flex: xt,
    hiddenFrom: Te,
    visibleFrom: Dt,
    lightHidden: Fr,
    darkHidden: ze,
    sx: mr
  }), rest: jr };
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
function Oa(r, e) {
  const t = xr({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function Jm(r, e) {
  const t = xr({ color: r, theme: e });
  return t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : Oa(r, e);
}
function Xm(r, e) {
  if (typeof r == "number")
    return A(r);
  if (typeof r == "string") {
    const [t, n, ...o] = r.split(" ").filter((a) => a.trim() !== "");
    let i = `${A(t)}`;
    return n && (i += ` ${n}`), o.length > 0 && (i += ` ${Oa(o.join(" "), e)}`), i.trim();
  }
  return r;
}
const _c = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Zm(r) {
  return typeof r == "string" && r in _c ? _c[r] : r;
}
const ey = ["h1", "h2", "h3", "h4", "h5", "h6"];
function ty(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "string" && ey.includes(r) ? `var(--mantine-${r}-font-size)` : typeof r == "number" || typeof r == "string" ? A(r) : r;
}
function ry(r) {
  return r;
}
const ny = ["h1", "h2", "h3", "h4", "h5", "h6"];
function oy(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : typeof r == "string" && ny.includes(r) ? `var(--mantine-${r}-line-height)` : r;
}
function iy(r) {
  return typeof r == "number" ? A(r) : r;
}
function ay(r, e) {
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
const _i = {
  color: Oa,
  textColor: Jm,
  fontSize: ty,
  spacing: ay,
  identity: ry,
  size: iy,
  lineHeight: oy,
  fontFamily: Zm,
  border: Xm
};
function kc(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function sy({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, i) => Number(kc(o)) - Number(kc(i))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function cy(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function ly(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function uy(r) {
  return typeof r == "object" && r !== null ? Pt(r).filter((e) => e !== "base") : [];
}
function dy(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function hy({
  styleProps: r,
  data: e,
  theme: t
}) {
  return sy(
    Pt(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return n;
        const i = e[o], a = Array.isArray(i.property) ? i.property : [i.property], s = ly(r[o]);
        if (!cy(r[o]))
          return a.forEach((l) => {
            n.inlineStyles[l] = _i[i.type](s, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const c = uy(r[o]);
        return a.forEach((l) => {
          s && (n.styles[l] = _i[i.type](s, t)), c.forEach((u) => {
            const h = `(min-width: ${t.breakpoints[u]})`;
            n.media[h] = {
              ...n.media[h],
              [l]: _i[i.type](
                dy(r[o], u),
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
function fy() {
  return `__m__-${wl().replace(/:/g, "")}`;
}
function hu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...hu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function fu(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function py(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[fu(t)] = r[t]), e;
  }, {});
}
function pu(r) {
  return r ? typeof r == "string" ? { [fu(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...pu(t) }),
    {}
  ) : py(r) : null;
}
function oa(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...oa(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function gy({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = oa(e, r), i = oa(t, r);
  return { ...o, ...i, ...n };
}
const gu = ye(
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
    var E;
    const g = Vt(), m = r || "div", { styleProps: C, rest: b } = Xo(f), v = dm(), w = (E = v == null ? void 0 : v()) == null ? void 0 : E(C.sx), I = fy(), T = hy({
      styleProps: C,
      theme: g,
      data: Qm
    }), k = {
      ref: p,
      style: gy({
        theme: g,
        style: e,
        vars: t,
        styleProps: T.inlineStyles
      }),
      className: qt(n, w, {
        [I]: T.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${s}`]: s,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Wl(a) ? void 0 : a || void 0,
      size: d,
      ...pu(i),
      ...b
    };
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      T.hasResponsiveStyles && /* @__PURE__ */ y.jsx(
        Ym,
        {
          selector: `.${I}`,
          styles: T.styles,
          media: T.media
        }
      ),
      typeof h == "function" ? h(k) : /* @__PURE__ */ y.jsx(m, { ...k })
    ] });
  }
);
gu.displayName = "@mantine/core/Box";
const Q = gu;
function mu(r) {
  return r;
}
function se(r) {
  const e = ye(r);
  return e.extend = mu, e.withProps = (t) => {
    const n = ye((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e;
}
function Gt(r) {
  const e = ye(r);
  return e.withProps = (t) => {
    const n = ye((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e.extend = mu, e;
}
const my = Mr({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function xa() {
  return cr(my);
}
function yy(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function ki(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const bn = typeof window < "u" && window.requestAnimationFrame;
function vy({
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
    lh(() => c(p));
  }, u = (p) => {
    l((g) => ({ ...g, ...p }));
  };
  function h(p) {
    const g = r || yy(p);
    return {
      transition: `height ${g}ms ${e}, opacity ${g}ms ${e}`
    };
  }
  Ar(() => {
    typeof bn == "function" && bn(n ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), bn(() => {
        const p = ki(o);
        u({ ...h(p), height: p });
      });
    } : () => {
      const p = ki(o);
      u({ ...h(p), willChange: "height", height: p }), bn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [n]);
  const d = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (n) {
        const g = ki(o);
        g === s.height ? l({}) : u({ height: g }), t();
      } else
        s.height === i && (l(a), t());
  };
  function f({ style: p = {}, refKey: g = "ref", ...m } = {}) {
    const C = m[g];
    return {
      "aria-hidden": !n,
      ...m,
      [g]: ru(o, C),
      onTransitionEnd: d,
      style: { boxSizing: "border-box", ...p, ...s }
    };
  }
  return f;
}
const by = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, yu = se((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: a,
    onTransitionEnd: s,
    animateOpacity: c,
    ...l
  } = V("Collapse", by, r), u = Vt(), h = nu(), f = (u.respectReducedMotion ? h : !1) ? 0 : o, p = vy({
    opened: n,
    transitionDuration: f,
    transitionTimingFunction: i,
    onTransitionEnd: s
  });
  return f === 0 ? n ? /* @__PURE__ */ y.jsx(Q, { ...l, children: t }) : null : /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p({
        style: {
          opacity: n || !c ? 1 : 0,
          transition: c ? `opacity ${f}ms ${i}` : "none",
          ...hu(a, u)
        },
        ref: e,
        ...l
      }),
      children: t
    }
  );
});
yu.displayName = "@mantine/core/Collapse";
const [Cy, pt] = ln(
  "ScrollArea.Root component was not found in tree"
);
function nn(r, e) {
  const t = wr(e);
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
const wy = ye((r, e) => {
  const { style: t, ...n } = r, o = pt(), [i, a] = Z(0), [s, c] = Z(0), l = !!(i && s);
  return nn(o.scrollbarX, () => {
    var h;
    const u = ((h = o.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), nn(o.scrollbarY, () => {
    var h;
    const u = ((h = o.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
    o.onCornerWidthChange(u), a(u);
  }), l ? /* @__PURE__ */ y.jsx("div", { ...n, ref: e, style: { ...t, width: i, height: s } }) : null;
}), Sy = ye((r, e) => {
  const t = pt(), n = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && n ? /* @__PURE__ */ y.jsx(wy, { ...r, ref: e }) : null;
}), Iy = {
  scrollHideDelay: 1e3,
  type: "hover"
}, vu = ye((r, e) => {
  const t = V("ScrollAreaRoot", Iy, r), { type: n, scrollHideDelay: o, scrollbars: i, ...a } = t, [s, c] = Z(null), [l, u] = Z(null), [h, d] = Z(null), [f, p] = Z(null), [g, m] = Z(null), [C, b] = Z(0), [v, w] = Z(0), [I, T] = Z(!1), [k, E] = Z(!1), O = ft(e, (H) => c(H));
  return /* @__PURE__ */ y.jsx(
    Cy,
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
        scrollbarXEnabled: I,
        onScrollbarXEnabledChange: T,
        scrollbarY: g,
        onScrollbarYChange: m,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: b,
        onCornerHeightChange: w
      },
      children: /* @__PURE__ */ y.jsx(
        Q,
        {
          ...a,
          ref: O,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${C}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${v}px`
          }
        }
      )
    }
  );
});
vu.displayName = "@mantine/core/ScrollAreaRoot";
function bu(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Zo(r) {
  const e = bu(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function Cu(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function Ty(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function Ac(r, e, t = "ltr") {
  const n = Zo(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, a = e.content - e.viewport, s = i - n, c = t === "ltr" ? [0, a] : [a * -1, 0], l = Ty(r, c);
  return Cu([0, a], [0, s])(l);
}
function Ey(r, e, t, n = "ltr") {
  const o = Zo(t), i = o / 2, a = e || i, s = o - a, c = t.scrollbar.paddingStart + a, l = t.scrollbar.size - t.scrollbar.paddingEnd - s, u = t.content - t.viewport, h = n === "ltr" ? [0, u] : [u * -1, 0];
  return Cu([c, l], h)(r);
}
function wu(r, e) {
  return r > 0 && r < e;
}
function No(r) {
  return r ? parseInt(r, 10) : 0;
}
function Er(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [_y, Su] = ln(
  "ScrollAreaScrollbar was not found in tree"
), Iu = ye((r, e) => {
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
  } = r, d = pt(), [f, p] = Z(null), g = ft(e, (E) => p(E)), m = ue(null), C = ue(""), { viewport: b } = d, v = t.content - t.viewport, w = wr(l), I = wr(s), T = Qo(u, 10), k = (E) => {
    if (m.current) {
      const O = E.clientX - m.current.left, H = E.clientY - m.current.top;
      c({ x: O, y: H });
    }
  };
  return W(() => {
    const E = (O) => {
      const H = O.target;
      (f == null ? void 0 : f.contains(H)) && w(O, v);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [b, f, v, w]), W(I, [t, I]), nn(f, T), nn(d.content, T), /* @__PURE__ */ y.jsx(
    _y,
    {
      value: {
        scrollbar: f,
        hasThumb: n,
        onThumbChange: wr(o),
        onThumbPointerUp: wr(i),
        onThumbPositionChange: I,
        onThumbPointerDown: wr(a)
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...h,
          ref: g,
          style: { position: "absolute", ...h.style },
          onPointerDown: Er(r.onPointerDown, (E) => {
            E.preventDefault();
            const O = 0;
            E.button === O && (E.target.setPointerCapture(E.pointerId), m.current = f.getBoundingClientRect(), C.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", k(E));
          }),
          onPointerMove: Er(r.onPointerMove, k),
          onPointerUp: Er(r.onPointerUp, (E) => {
            E.preventDefault();
            const O = E.target;
            O.hasPointerCapture(E.pointerId) && O.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = C.current, document.body.style.pointerEvents = "auto", m.current = null;
          })
        }
      )
    }
  );
}), ky = ye(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, a = pt(), [s, c] = Z(), l = ue(null), u = ft(e, l, a.onScrollbarXChange);
    return W(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ y.jsx(
      Iu,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Zo(t)}px`
        },
        onThumbPointerDown: (h) => r.onThumbPointerDown(h.x),
        onDragScroll: (h) => r.onDragScroll(h.x),
        onWheelScroll: (h, d) => {
          if (a.viewport) {
            const f = a.viewport.scrollLeft + h.deltaX;
            r.onWheelScroll(f), wu(f, d) && h.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && n({
            content: a.viewport.scrollWidth,
            viewport: a.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: No(s.paddingLeft),
              paddingEnd: No(s.paddingRight)
            }
          });
        }
      }
    );
  }
), Ay = ye(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, a = pt(), [s, c] = Z(), l = ue(null), u = ft(e, l, a.onScrollbarYChange);
    return W(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ y.jsx(
      Iu,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Zo(t)}px`,
          ...o
        },
        onThumbPointerDown: (h) => r.onThumbPointerDown(h.y),
        onDragScroll: (h) => r.onDragScroll(h.y),
        onWheelScroll: (h, d) => {
          if (a.viewport) {
            const f = a.viewport.scrollTop + h.deltaY;
            r.onWheelScroll(f), wu(f, d) && h.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && n({
            content: a.viewport.scrollHeight,
            viewport: a.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: No(s.paddingTop),
              paddingEnd: No(s.paddingBottom)
            }
          });
        }
      }
    );
  }
), Da = ye((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = xa(), i = pt(), a = ue(null), s = ue(0), [c, l] = Z({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = bu(c.viewport, c.content), h = {
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
  }, d = (f, p) => Ey(f, s.current, c, p);
  return t === "horizontal" ? /* @__PURE__ */ y.jsx(
    ky,
    {
      ...h,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const f = i.viewport.scrollLeft, p = Ac(f, c, o);
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
    Ay,
    {
      ...h,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const f = i.viewport.scrollTop, p = Ac(f, c);
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
}), Tu = ye(
  (r, e) => {
    const t = pt(), { forceMount: n, ...o } = r, [i, a] = Z(!1), s = r.orientation === "horizontal", c = Qo(() => {
      if (t.viewport) {
        const l = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
        a(s ? l : u);
      }
    }, 10);
    return nn(t.viewport, c), nn(t.content, c), n || i ? /* @__PURE__ */ y.jsx(
      Da,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), Ry = ye(
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
      Tu,
      {
        "data-state": i ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), Py = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), i = r.orientation === "horizontal", [a, s] = Z("hidden"), c = Qo(() => s("idle"), 100);
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
      Da,
      {
        "data-state": a === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: Er(r.onPointerEnter, () => s("interacting")),
        onPointerLeave: Er(r.onPointerLeave, () => s("idle"))
      }
    ) : null;
  }
), Rc = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = r.orientation === "horizontal";
    return W(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ y.jsx(Ry, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ y.jsx(Py, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ y.jsx(Tu, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ y.jsx(Da, { ...n, ref: e }) : null;
  }
);
function Ny(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const i = { left: r.scrollLeft, top: r.scrollTop }, a = t.left !== i.left, s = t.top !== i.top;
    (a || s) && e(), t = i, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const My = ye((r, e) => {
  const { style: t, ...n } = r, o = pt(), i = Su(), { onThumbPositionChange: a } = i, s = ft(e, (u) => i.onThumbChange(u)), c = ue(), l = Qo(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: u } = o;
    if (u) {
      const h = () => {
        if (l(), !c.current) {
          const d = Ny(u, a);
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
}), Pc = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = Su();
    return t || o.hasThumb ? /* @__PURE__ */ y.jsx(My, { ref: e, ...n }) : null;
  }
), Eu = ye(
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
Eu.displayName = "@mantine/core/ScrollAreaViewport";
var La = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const _u = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Oy = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": A(e)
  }
}), Wn = se((r, e) => {
  const t = V("ScrollArea", _u, r), {
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
    ...b
  } = t, [v, w] = Z(!1), I = pe({
    name: "ScrollArea",
    props: t,
    classes: La,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: Oy
  });
  return /* @__PURE__ */ y.jsxs(
    vu,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: h,
      ref: e,
      scrollbars: C,
      ...I("root"),
      ...b,
      children: [
        /* @__PURE__ */ y.jsx(
          Eu,
          {
            ...d,
            ...I("viewport", { style: d == null ? void 0 : d.style }),
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
          Rc,
          {
            ...I("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Pc, { ...I("thumb") })
          }
        ),
        (C === "xy" || C === "y") && /* @__PURE__ */ y.jsx(
          Rc,
          {
            ...I("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Pc, { ...I("thumb") })
          }
        ),
        /* @__PURE__ */ y.jsx(
          Sy,
          {
            ...I("corner"),
            "data-hovered": v || void 0,
            "data-hidden": u === "never" || void 0
          }
        )
      ]
    }
  );
});
Wn.displayName = "@mantine/core/ScrollArea";
const Fa = se((r, e) => {
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
    ...b
  } = V("ScrollAreaAutosize", _u, r);
  return /* @__PURE__ */ y.jsx(Q, { ...b, ref: e, style: [{ display: "flex", overflow: "auto" }, m], children: /* @__PURE__ */ y.jsx(Q, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ y.jsx(
    Wn,
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
Wn.classes = La;
Fa.displayName = "@mantine/core/ScrollAreaAutosize";
Fa.classes = La;
Wn.Autosize = Fa;
var ku = { root: "m_87cf2631" };
const xy = {
  __staticSelector: "UnstyledButton"
}, Dr = Gt(
  (r, e) => {
    const t = V("UnstyledButton", xy, r), {
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
      classes: ku,
      className: n,
      style: l,
      classNames: s,
      styles: c,
      unstyled: a
    });
    return /* @__PURE__ */ y.jsx(
      Q,
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
Dr.classes = ku;
Dr.displayName = "@mantine/core/UnstyledButton";
var Au = { root: "m_515a97f8" };
const Dy = {}, ja = se((r, e) => {
  const t = V("VisuallyHidden", Dy, r), { classNames: n, className: o, style: i, styles: a, unstyled: s, vars: c, ...l } = t, u = pe({
    name: "VisuallyHidden",
    classes: Au,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s
  });
  return /* @__PURE__ */ y.jsx(Q, { component: "span", ref: e, ...u("root"), ...l });
});
ja.classes = Au;
ja.displayName = "@mantine/core/VisuallyHidden";
var Ru = { root: "m_1b7284a3" };
const Ly = {}, Fy = (r, { radius: e, shadow: t }) => ({
  root: {
    "--paper-radius": e === void 0 ? void 0 : Et(e),
    "--paper-shadow": Ql(t)
  }
}), ei = Gt((r, e) => {
  const t = V("Paper", Ly, r), {
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
    classes: Ru,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: Fy
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      mod: [{ "data-with-border": c }, f],
      ...g("root"),
      variant: d,
      ...p
    }
  );
});
ei.classes = Ru;
ei.displayName = "@mantine/core/Paper";
function un(r) {
  return Pu(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function at(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Wt(r) {
  var e;
  return (e = (Pu(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function Pu(r) {
  return r instanceof Node || r instanceof at(r).Node;
}
function Je(r) {
  return r instanceof Element || r instanceof at(r).Element;
}
function Ot(r) {
  return r instanceof HTMLElement || r instanceof at(r).HTMLElement;
}
function Nc(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof at(r).ShadowRoot;
}
function Yn(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = It(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function jy(r) {
  return ["table", "td", "th"].includes(un(r));
}
function ti(r) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return r.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ua(r) {
  const e = Ha(), t = It(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Uy(r) {
  let e = ir(r);
  for (; Ot(e) && !on(e); ) {
    if (ti(e))
      return null;
    if (Ua(e))
      return e;
    e = ir(e);
  }
  return null;
}
function Ha() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function on(r) {
  return ["html", "body", "#document"].includes(un(r));
}
function It(r) {
  return at(r).getComputedStyle(r);
}
function ri(r) {
  return Je(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function ir(r) {
  if (un(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    Nc(r) && r.host || // Fallback.
    Wt(r)
  );
  return Nc(e) ? e.host : e;
}
function Nu(r) {
  const e = ir(r);
  return on(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : Ot(e) && Yn(e) ? e : Nu(e);
}
function jn(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Nu(r), i = o === ((n = r.ownerDocument) == null ? void 0 : n.body), a = at(o);
  return i ? e.concat(a, a.visualViewport || [], Yn(o) ? o : [], a.frameElement && t ? jn(a.frameElement) : []) : e.concat(o, jn(o, [], t));
}
const nt = Math.min, je = Math.max, Mo = Math.round, so = Math.floor, ar = (r) => ({
  x: r,
  y: r
}), Hy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, By = {
  start: "end",
  end: "start"
};
function ia(r, e, t) {
  return je(r, nt(e, t));
}
function zt(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Tt(r) {
  return r.split("-")[0];
}
function dn(r) {
  return r.split("-")[1];
}
function Ba(r) {
  return r === "x" ? "y" : "x";
}
function za(r) {
  return r === "y" ? "height" : "width";
}
function $t(r) {
  return ["top", "bottom"].includes(Tt(r)) ? "y" : "x";
}
function $a(r) {
  return Ba($t(r));
}
function zy(r, e, t) {
  t === void 0 && (t = !1);
  const n = dn(r), o = $a(r), i = za(o);
  let a = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (a = Oo(a)), [a, Oo(a)];
}
function $y(r) {
  const e = Oo(r);
  return [aa(r), e, aa(e)];
}
function aa(r) {
  return r.replace(/start|end/g, (e) => By[e]);
}
function Ky(r, e, t) {
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
function qy(r, e, t, n) {
  const o = dn(r);
  let i = Ky(Tt(r), t === "start", n);
  return o && (i = i.map((a) => a + "-" + o), e && (i = i.concat(i.map(aa)))), i;
}
function Oo(r) {
  return r.replace(/left|right|bottom|top/g, (e) => Hy[e]);
}
function Vy(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Ka(r) {
  return typeof r != "number" ? Vy(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function an(r) {
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
function Mc(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const i = $t(e), a = $a(e), s = za(a), c = Tt(e), l = i === "y", u = n.x + n.width / 2 - o.width / 2, h = n.y + n.height / 2 - o.height / 2, d = n[s] / 2 - o[s] / 2;
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
  switch (dn(e)) {
    case "start":
      f[a] -= d * (t && l ? -1 : 1);
      break;
    case "end":
      f[a] += d * (t && l ? -1 : 1);
      break;
  }
  return f;
}
const Gy = async (r, e, t) => {
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
  } = Mc(l, n, c), d = n, f = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: m,
      fn: C
    } = s[g], {
      x: b,
      y: v,
      data: w,
      reset: I
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
    u = b ?? u, h = v ?? h, f = {
      ...f,
      [m]: {
        ...f[m],
        ...w
      }
    }, I && p <= 50 && (p++, typeof I == "object" && (I.placement && (d = I.placement), I.rects && (l = I.rects === !0 ? await a.getElementRects({
      reference: r,
      floating: e,
      strategy: o
    }) : I.rects), {
      x: u,
      y: h
    } = Mc(l, d, c)), g = -1);
  }
  return {
    x: u,
    y: h,
    placement: d,
    strategy: o,
    middlewareData: f
  };
};
async function qa(r, e) {
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
  } = zt(e, r), p = Ka(f), m = s[d ? h === "floating" ? "reference" : "floating" : h], C = an(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = h === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), w = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = an(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: v,
    strategy: c
  }) : b);
  return {
    top: (C.top - I.top + p.top) / w.y,
    bottom: (I.bottom - C.bottom + p.bottom) / w.y,
    left: (C.left - I.left + p.left) / w.x,
    right: (I.right - C.right + p.right) / w.x
  };
}
const Wy = (r) => ({
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
    const h = Ka(u), d = {
      x: t,
      y: n
    }, f = $a(o), p = za(f), g = await a.getDimensions(l), m = f === "y", C = m ? "top" : "left", b = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[f] - d[f] - i.floating[p], I = d[f] - i.reference[f], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let k = T ? T[v] : 0;
    (!k || !await (a.isElement == null ? void 0 : a.isElement(T))) && (k = s.floating[v] || i.floating[p]);
    const E = w / 2 - I / 2, O = k / 2 - g[p] / 2 - 1, H = nt(h[C], O), $ = nt(h[b], O), J = H, oe = k - g[p] - $, D = k / 2 - g[p] / 2 + E, G = ia(J, D, oe), x = !c.arrow && dn(o) != null && D !== G && i.reference[p] / 2 - (D < J ? H : $) - g[p] / 2 < 0, F = x ? D < J ? D - J : D - oe : 0;
    return {
      [f]: d[f] + F,
      data: {
        [f]: G,
        centerOffset: D - G - F,
        ...x && {
          alignmentOffset: F
        }
      },
      reset: x
    };
  }
}), Yy = function(r) {
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
      const C = Tt(o), b = $t(s), v = Tt(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), I = d || (v || !g ? [Oo(s)] : $y(s)), T = p !== "none";
      !d && T && I.push(...qy(s, g, p, w));
      const k = [s, ...I], E = await qa(e, m), O = [];
      let H = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && O.push(E[C]), h) {
        const D = zy(o, a, w);
        O.push(E[D[0]], E[D[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: O
      }], !O.every((D) => D <= 0)) {
        var $, J;
        const D = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, G = k[D];
        if (G)
          return {
            data: {
              index: D,
              overflows: H
            },
            reset: {
              placement: G
            }
          };
        let x = (J = H.filter((F) => F.overflows[0] <= 0).sort((F, U) => F.overflows[1] - U.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!x)
          switch (f) {
            case "bestFit": {
              var oe;
              const F = (oe = H.filter((U) => {
                if (T) {
                  const X = $t(U.placement);
                  return X === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((U) => [U.placement, U.overflows.filter((X) => X > 0).reduce((X, ce) => X + ce, 0)]).sort((U, X) => U[1] - X[1])[0]) == null ? void 0 : oe[0];
              F && (x = F);
              break;
            }
            case "initialPlacement":
              x = s;
              break;
          }
        if (o !== x)
          return {
            reset: {
              placement: x
            }
          };
      }
      return {};
    }
  };
};
function Mu(r) {
  const e = nt(...r.map((i) => i.left)), t = nt(...r.map((i) => i.top)), n = je(...r.map((i) => i.right)), o = je(...r.map((i) => i.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function Qy(r) {
  const e = r.slice().sort((o, i) => o.y - i.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !n || i.y - n.y > n.height / 2 ? t.push([i]) : t[t.length - 1].push(i), n = i;
  }
  return t.map((o) => an(Mu(o)));
}
const Jy = function(r) {
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
      } = zt(r, e), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(n.reference)) || []), h = Qy(u), d = an(Mu(u)), f = Ka(s);
      function p() {
        if (h.length === 2 && h[0].left > h[1].right && c != null && l != null)
          return h.find((m) => c > m.left - f.left && c < m.right + f.right && l > m.top - f.top && l < m.bottom + f.bottom) || d;
        if (h.length >= 2) {
          if ($t(t) === "y") {
            const H = h[0], $ = h[h.length - 1], J = Tt(t) === "top", oe = H.top, D = $.bottom, G = J ? H.left : $.left, x = J ? H.right : $.right, F = x - G, U = D - oe;
            return {
              top: oe,
              bottom: D,
              left: G,
              right: x,
              width: F,
              height: U,
              x: G,
              y: oe
            };
          }
          const m = Tt(t) === "left", C = je(...h.map((H) => H.right)), b = nt(...h.map((H) => H.left)), v = h.filter((H) => m ? H.left === b : H.right === C), w = v[0].top, I = v[v.length - 1].bottom, T = b, k = C, E = k - T, O = I - w;
          return {
            top: w,
            bottom: I,
            left: T,
            right: k,
            width: E,
            height: O,
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
async function Xy(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = Tt(t), s = dn(t), c = $t(t) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = i && c ? -1 : 1, h = zt(e, r);
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
const Zy = function(r) {
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
      } = e, c = await Xy(e, r);
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
}, ev = function(r) {
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
              y: b
            } = m;
            return {
              x: C,
              y: b
            };
          }
        },
        ...c
      } = zt(r, e), l = {
        x: t,
        y: n
      }, u = await qa(e, c), h = $t(Tt(o)), d = Ba(h);
      let f = l[d], p = l[h];
      if (i) {
        const m = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", b = f + u[m], v = f - u[C];
        f = ia(b, f, v);
      }
      if (a) {
        const m = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", b = p + u[m], v = p - u[C];
        p = ia(b, p, v);
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
}, tv = function(r) {
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
      }, h = $t(o), d = Ba(h);
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
        const v = d === "y" ? "height" : "width", w = i.reference[d] - i.floating[v] + m.mainAxis, I = i.reference[d] + i.reference[v] - m.mainAxis;
        f < w ? f = w : f > I && (f = I);
      }
      if (l) {
        var C, b;
        const v = d === "y" ? "width" : "height", w = ["top", "left"].includes(Tt(o)), I = i.reference[h] - i.floating[v] + (w && ((C = a.offset) == null ? void 0 : C[h]) || 0) + (w ? 0 : m.crossAxis), T = i.reference[h] + i.reference[v] + (w ? 0 : ((b = a.offset) == null ? void 0 : b[h]) || 0) - (w ? m.crossAxis : 0);
        p < I ? p = I : p > T && (p = T);
      }
      return {
        [d]: f,
        [h]: p
      };
    }
  };
}, rv = function(r) {
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
      } = zt(r, e), c = await qa(e, s), l = Tt(t), u = dn(t), h = $t(t) === "y", {
        width: d,
        height: f
      } = n.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = u === "end" ? "top" : "bottom");
      const m = f - c.top - c.bottom, C = d - c.left - c.right, b = nt(f - c[p], m), v = nt(d - c[g], C), w = !e.middlewareData.shift;
      let I = b, T = v;
      if (h ? T = u || w ? nt(v, C) : C : I = u || w ? nt(b, m) : m, w && !u) {
        const E = je(c.left, 0), O = je(c.right, 0), H = je(c.top, 0), $ = je(c.bottom, 0);
        h ? T = d - 2 * (E !== 0 || O !== 0 ? E + O : je(c.left, c.right)) : I = f - 2 * (H !== 0 || $ !== 0 ? H + $ : je(c.top, c.bottom));
      }
      await a({
        ...e,
        availableWidth: T,
        availableHeight: I
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
function Ou(r) {
  const e = It(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = Ot(r), i = o ? r.offsetWidth : t, a = o ? r.offsetHeight : n, s = Mo(t) !== i || Mo(n) !== a;
  return s && (t = i, n = a), {
    width: t,
    height: n,
    $: s
  };
}
function Va(r) {
  return Je(r) ? r : r.contextElement;
}
function Zr(r) {
  const e = Va(r);
  if (!Ot(e))
    return ar(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Ou(e);
  let a = (i ? Mo(t.width) : t.width) / n, s = (i ? Mo(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const nv = /* @__PURE__ */ ar(0);
function xu(r) {
  const e = at(r);
  return !Ha() || !e.visualViewport ? nv : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ov(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== at(r) ? !1 : e;
}
function Pr(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), i = Va(r);
  let a = ar(1);
  e && (n ? Je(n) && (a = Zr(n)) : a = Zr(r));
  const s = ov(i, t, n) ? xu(i) : ar(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, u = o.width / a.x, h = o.height / a.y;
  if (i) {
    const d = at(i), f = n && Je(n) ? at(n) : n;
    let p = d, g = p.frameElement;
    for (; g && n && f !== p; ) {
      const m = Zr(g), C = g.getBoundingClientRect(), b = It(g), v = C.left + (g.clientLeft + parseFloat(b.paddingLeft)) * m.x, w = C.top + (g.clientTop + parseFloat(b.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, h *= m.y, c += v, l += w, p = at(g), g = p.frameElement;
    }
  }
  return an({
    width: u,
    height: h,
    x: c,
    y: l
  });
}
function iv(r) {
  let {
    elements: e,
    rect: t,
    offsetParent: n,
    strategy: o
  } = r;
  const i = o === "fixed", a = Wt(n), s = e ? ti(e.floating) : !1;
  if (n === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ar(1);
  const u = ar(0), h = Ot(n);
  if ((h || !h && !i) && ((un(n) !== "body" || Yn(a)) && (c = ri(n)), Ot(n))) {
    const d = Pr(n);
    l = Zr(n), u.x = d.x + n.clientLeft, u.y = d.y + n.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function av(r) {
  return Array.from(r.getClientRects());
}
function Du(r) {
  return Pr(Wt(r)).left + ri(r).scrollLeft;
}
function sv(r) {
  const e = Wt(r), t = ri(r), n = r.ownerDocument.body, o = je(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = je(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -t.scrollLeft + Du(r);
  const s = -t.scrollTop;
  return It(n).direction === "rtl" && (a += je(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function cv(r, e) {
  const t = at(r), n = Wt(r), o = t.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
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
function lv(r, e) {
  const t = Pr(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, i = Ot(r) ? Zr(r) : ar(1), a = r.clientWidth * i.x, s = r.clientHeight * i.y, c = o * i.x, l = n * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Oc(r, e, t) {
  let n;
  if (e === "viewport")
    n = cv(r, t);
  else if (e === "document")
    n = sv(Wt(r));
  else if (Je(e))
    n = lv(e, t);
  else {
    const o = xu(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return an(n);
}
function Lu(r, e) {
  const t = ir(r);
  return t === e || !Je(t) || on(t) ? !1 : It(t).position === "fixed" || Lu(t, e);
}
function uv(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = jn(r, [], !1).filter((s) => Je(s) && un(s) !== "body"), o = null;
  const i = It(r).position === "fixed";
  let a = i ? ir(r) : r;
  for (; Je(a) && !on(a); ) {
    const s = It(a), c = Ua(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Yn(a) && !c && Lu(r, a)) ? n = n.filter((u) => u !== a) : o = s, a = ir(a);
  }
  return e.set(r, n), n;
}
function dv(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const a = [...t === "clippingAncestors" ? ti(e) ? [] : uv(e, this._c) : [].concat(t), n], s = a[0], c = a.reduce((l, u) => {
    const h = Oc(e, u, o);
    return l.top = je(h.top, l.top), l.right = nt(h.right, l.right), l.bottom = nt(h.bottom, l.bottom), l.left = je(h.left, l.left), l;
  }, Oc(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function hv(r) {
  const {
    width: e,
    height: t
  } = Ou(r);
  return {
    width: e,
    height: t
  };
}
function fv(r, e, t) {
  const n = Ot(e), o = Wt(e), i = t === "fixed", a = Pr(r, !0, i, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ar(0);
  if (n || !n && !i)
    if ((un(e) !== "body" || Yn(o)) && (s = ri(e)), n) {
      const h = Pr(e, !0, i, e);
      c.x = h.x + e.clientLeft, c.y = h.y + e.clientTop;
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
function Ai(r) {
  return It(r).position === "static";
}
function xc(r, e) {
  return !Ot(r) || It(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function Fu(r, e) {
  const t = at(r);
  if (ti(r))
    return t;
  if (!Ot(r)) {
    let o = ir(r);
    for (; o && !on(o); ) {
      if (Je(o) && !Ai(o))
        return o;
      o = ir(o);
    }
    return t;
  }
  let n = xc(r, e);
  for (; n && jy(n) && Ai(n); )
    n = xc(n, e);
  return n && on(n) && Ai(n) && !Ua(n) ? t : n || Uy(r) || t;
}
const pv = async function(r) {
  const e = this.getOffsetParent || Fu, t = this.getDimensions, n = await t(r.floating);
  return {
    reference: fv(r.reference, await e(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function gv(r) {
  return It(r).direction === "rtl";
}
const mv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: iv,
  getDocumentElement: Wt,
  getClippingRect: dv,
  getOffsetParent: Fu,
  getElementRects: pv,
  getClientRects: av,
  getDimensions: hv,
  getScale: Zr,
  isElement: Je,
  isRTL: gv
};
function yv(r, e) {
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
    const f = so(u), p = so(o.clientWidth - (l + h)), g = so(o.clientHeight - (u + d)), m = so(l), b = {
      rootMargin: -f + "px " + -p + "px " + -g + "px " + -m + "px",
      threshold: je(0, nt(1, c)) || 1
    };
    let v = !0;
    function w(I) {
      const T = I[0].intersectionRatio;
      if (T !== c) {
        if (!v)
          return a();
        T ? a(!1, T) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, b);
    }
    t.observe(r);
  }
  return a(!0), i;
}
function vv(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Va(r), u = o || i ? [...l ? jn(l) : [], ...jn(e)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", t, {
      passive: !0
    }), i && C.addEventListener("resize", t);
  });
  const h = l && s ? yv(l, t) : null;
  let d = -1, f = null;
  a && (f = new ResizeObserver((C) => {
    let [b] = C;
    b && b.target === l && f && (f.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var v;
      (v = f) == null || v.observe(e);
    })), t();
  }), l && !c && f.observe(l), f.observe(e));
  let p, g = c ? Pr(r) : null;
  c && m();
  function m() {
    const C = Pr(r);
    g && (C.x !== g.x || C.y !== g.y || C.width !== g.width || C.height !== g.height) && t(), g = C, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var C;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", t), i && b.removeEventListener("resize", t);
    }), h == null || h(), (C = f) == null || C.disconnect(), f = null, c && cancelAnimationFrame(p);
  };
}
const bv = Zy, Cv = ev, wv = Yy, Sv = rv, Dc = Wy, Iv = Jy, Tv = tv, Ev = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: mv,
    ...t
  }, i = {
    ...o.platform,
    _c: n
  };
  return Gy(r, e, {
    ...o,
    platform: i
  });
};
var fo = typeof document < "u" ? ya : W;
function xo(r, e) {
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
        if (!xo(r[n], e[n]))
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
      if (!(i === "_owner" && r.$$typeof) && !xo(r[i], e[i]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function ju(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lc(r, e) {
  const t = ju(r);
  return Math.round(e * t) / t;
}
function Fc(r) {
  const e = ae.useRef(r);
  return fo(() => {
    e.current = r;
  }), e;
}
function _v(r) {
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
  } = r, [u, h] = ae.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = ae.useState(n);
  xo(d, n) || f(n);
  const [p, g] = ae.useState(null), [m, C] = ae.useState(null), b = ae.useCallback((F) => {
    F !== T.current && (T.current = F, g(F));
  }, []), v = ae.useCallback((F) => {
    F !== k.current && (k.current = F, C(F));
  }, []), w = i || p, I = a || m, T = ae.useRef(null), k = ae.useRef(null), E = ae.useRef(u), O = c != null, H = Fc(c), $ = Fc(o), J = ae.useCallback(() => {
    if (!T.current || !k.current)
      return;
    const F = {
      placement: e,
      strategy: t,
      middleware: d
    };
    $.current && (F.platform = $.current), Ev(T.current, k.current, F).then((U) => {
      const X = {
        ...U,
        isPositioned: !0
      };
      oe.current && !xo(E.current, X) && (E.current = X, ch.flushSync(() => {
        h(X);
      }));
    });
  }, [d, e, t, $]);
  fo(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, h((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [l]);
  const oe = ae.useRef(!1);
  fo(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), fo(() => {
    if (w && (T.current = w), I && (k.current = I), w && I) {
      if (H.current)
        return H.current(w, I, J);
      J();
    }
  }, [w, I, J, H, O]);
  const D = ae.useMemo(() => ({
    reference: T,
    floating: k,
    setReference: b,
    setFloating: v
  }), [b, v]), G = ae.useMemo(() => ({
    reference: w,
    floating: I
  }), [w, I]), x = ae.useMemo(() => {
    const F = {
      position: t,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return F;
    const U = Lc(G.floating, u.x), X = Lc(G.floating, u.y);
    return s ? {
      ...F,
      transform: "translate(" + U + "px, " + X + "px)",
      ...ju(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: U,
      top: X
    };
  }, [t, s, G.floating, u.x, u.y]);
  return ae.useMemo(() => ({
    ...u,
    update: J,
    refs: D,
    elements: G,
    floatingStyles: x
  }), [u, J, D, G, x]);
}
const kv = (r) => {
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
      return n && e(n) ? n.current != null ? Dc({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? Dc({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
}, Av = (r, e) => ({
  ...bv(r),
  options: [r, e]
}), Rv = (r, e) => ({
  ...Cv(r),
  options: [r, e]
}), jc = (r, e) => ({
  ...Tv(r),
  options: [r, e]
}), Uc = (r, e) => ({
  ...wv(r),
  options: [r, e]
}), Pv = (r, e) => ({
  ...Sv(r),
  options: [r, e]
}), Hc = (r, e) => ({
  ...Iv(r),
  options: [r, e]
}), Nv = (r, e) => ({
  ...kv(r),
  options: [r, e]
}), Uu = {
  ...ae
}, Mv = Uu.useInsertionEffect, Ov = Mv || ((r) => r());
function xv(r) {
  const e = ae.useRef(() => {
  });
  return Ov(() => {
    e.current = r;
  }), ae.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var sa = typeof document < "u" ? ya : W;
let Bc = !1, Dv = 0;
const zc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Dv++
);
function Lv() {
  const [r, e] = ae.useState(() => Bc ? zc() : void 0);
  return sa(() => {
    r == null && e(zc());
  }, []), ae.useEffect(() => {
    Bc = !0;
  }, []), r;
}
const Fv = Uu.useId, jv = Fv || Lv;
function Uv() {
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
const Hv = /* @__PURE__ */ ae.createContext(null), Bv = /* @__PURE__ */ ae.createContext(null), zv = () => {
  var r;
  return ((r = ae.useContext(Hv)) == null ? void 0 : r.id) || null;
}, $v = () => ae.useContext(Bv);
function Kv(r) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: n
  } = r, o = jv(), i = ae.useRef({}), [a] = ae.useState(() => Uv()), s = zv() != null, [c, l] = ae.useState(n.reference), u = xv((f, p, g) => {
    i.current.openEvent = f ? p : void 0, a.emit("openchange", {
      open: f,
      event: p,
      reason: g,
      nested: s
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
    events: a,
    floatingId: o,
    refs: h
  }), [e, u, d, a, o, h]);
}
function qv(r) {
  r === void 0 && (r = {});
  const {
    nodeId: e
  } = r, t = Kv({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), n = r.rootContext || t, o = n.elements, [i, a] = ae.useState(null), [s, c] = ae.useState(null), u = (o == null ? void 0 : o.reference) || i, h = ae.useRef(null), d = $v();
  sa(() => {
    u && (h.current = u);
  }, [u]);
  const f = _v({
    ...r,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), p = ae.useCallback((v) => {
    const w = Je(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c(w), f.refs.setReference(w);
  }, [f.refs]), g = ae.useCallback((v) => {
    (Je(v) || v === null) && (h.current = v, a(v)), (Je(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !Je(v)) && f.refs.setReference(v);
  }, [f.refs]), m = ae.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: p,
    domReference: h
  }), [f.refs, g, p]), C = ae.useMemo(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), b = ae.useMemo(() => ({
    ...f,
    ...n,
    refs: m,
    elements: C,
    nodeId: e
  }), [f, m, C, e, n]);
  return sa(() => {
    n.dataRef.current.floatingContext = b;
    const v = d == null ? void 0 : d.nodesRef.current.find((w) => w.id === e);
    v && (v.context = b);
  }), ae.useMemo(() => ({
    ...f,
    context: b,
    refs: m,
    elements: C
  }), [f, m, C, b]);
}
function Vv(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function $c(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function Kc(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const Gv = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Wv({
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
    [Gv[c]]: n
  }, h = -e / 2;
  return c === "left" ? {
    ...u,
    ...$c(l, a, t, o),
    right: h,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...$c(l, a, t, o),
    left: h,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...Kc(l, i, t, o, s),
    bottom: h,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...Kc(l, i, t, o, s),
    top: h,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Hu = ye(
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
    const { dir: h } = xa();
    return i ? /* @__PURE__ */ y.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Wv({
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
Hu.displayName = "@mantine/core/FloatingArrow";
const [Yv, Bu] = ln(
  "Popover component was not found in the tree"
);
function Ga({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = tm(e), o = ft(n, r == null ? void 0 : r.ref);
  return Vn(r) ? qo(r, { [t]: o }) : r;
}
function zu(r) {
  return /* @__PURE__ */ y.jsx(ja, { tabIndex: -1, "data-autofocus": !0, ...r });
}
Ga.displayName = "@mantine/core/FocusTrap";
zu.displayName = "@mantine/core/FocusTrapInitialFocus";
Ga.InitialFocus = zu;
function Qv(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const Jv = {}, $u = ye((r, e) => {
  const { children: t, target: n, ...o } = V("Portal", Jv, r), [i, a] = Z(!1), s = ue(null);
  return Gn(() => (a(!0), s.current = n ? typeof n == "string" ? document.querySelector(n) : n : Qv(o), tu(e, s.current), !n && s.current && document.body.appendChild(s.current), () => {
    !n && s.current && document.body.removeChild(s.current);
  }), [n]), !i || !s.current ? null : uh(/* @__PURE__ */ y.jsx(y.Fragment, { children: t }), s.current);
});
$u.displayName = "@mantine/core/Portal";
function Ku({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ y.jsx($u, { ...t, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
Ku.displayName = "@mantine/core/OptionalPortal";
const Cn = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${A(r === "bottom" ? 10 : -10)})` },
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
}, qc = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Xv({
  transition: r,
  state: e,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in co ? {
    transitionProperty: co[r].transitionProperty,
    ...o,
    ...co[r].common,
    ...co[r][qc[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[qc[e]]
  };
}
function Zv({
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
  const u = Vt(), h = nu(), d = u.respectReducedMotion ? h : !1, [f, p] = Z(d ? 0 : r), [g, m] = Z(n ? "entered" : "exited"), C = ue(-1), b = ue(-1), v = ue(-1), w = (T) => {
    const k = T ? o : i, E = T ? a : s;
    window.clearTimeout(C.current);
    const O = d ? 0 : T ? r : e;
    p(O), O === 0 ? (typeof k == "function" && k(), typeof E == "function" && E(), m(T ? "entered" : "exited")) : v.current = requestAnimationFrame(() => {
      Sl.flushSync(() => {
        m(T ? "pre-entering" : "pre-exiting");
      }), v.current = requestAnimationFrame(() => {
        typeof k == "function" && k(), m(T ? "entering" : "exiting"), C.current = window.setTimeout(() => {
          typeof E == "function" && E(), m(T ? "entered" : "exited");
        }, O);
      });
    });
  }, I = (T) => {
    if (window.clearTimeout(b.current), typeof (T ? c : l) != "number") {
      w(T);
      return;
    }
    b.current = window.setTimeout(
      () => {
        w(T);
      },
      T ? c : l
    );
  };
  return Ar(() => {
    I(n);
  }, [n]), W(
    () => () => {
      window.clearTimeout(C.current), cancelAnimationFrame(v.current);
    },
    []
  ), {
    transitionDuration: f,
    transitionStatus: g,
    transitionTimingFunction: t || "ease"
  };
}
function ni({
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
  const { transitionDuration: f, transitionStatus: p, transitionTimingFunction: g } = Zv({
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
    Xv({
      transition: e,
      duration: f,
      state: p,
      timingFunction: g
    })
  ) });
}
ni.displayName = "@mantine/core/Transition";
var qu = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const eb = {}, Wa = se((r, e) => {
  var m, C, b, v;
  const t = V("PopoverDropdown", eb, r), {
    className: n,
    style: o,
    vars: i,
    children: a,
    onKeyDownCapture: s,
    variant: c,
    classNames: l,
    styles: u,
    ...h
  } = t, d = Bu(), f = Wg({
    opened: d.opened,
    shouldReturnFocus: d.returnFocus
  }), p = d.withRoles ? {
    "aria-labelledby": d.getTargetId(),
    id: d.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = ft(e, d.floating);
  return d.disabled ? null : /* @__PURE__ */ y.jsx(Ku, { ...d.portalProps, withinPortal: d.withinPortal, children: /* @__PURE__ */ y.jsx(
    ni,
    {
      mounted: d.opened,
      ...d.transitionProps,
      transition: ((m = d.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((C = d.transitionProps) == null ? void 0 : C.duration) ?? 150,
      keepMounted: d.keepMounted,
      exitDuration: typeof ((b = d.transitionProps) == null ? void 0 : b.exitDuration) == "number" ? d.transitionProps.exitDuration : (v = d.transitionProps) == null ? void 0 : v.duration,
      children: (w) => /* @__PURE__ */ y.jsx(Ga, { active: d.trapFocus, children: /* @__PURE__ */ y.jsxs(
        Q,
        {
          ...p,
          ...h,
          variant: c,
          ref: g,
          onKeyDownCapture: Bg(d.onClose, {
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
              Hu,
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
Wa.classes = qu;
Wa.displayName = "@mantine/core/PopoverDropdown";
const tb = {
  refProp: "ref",
  popupType: "dialog"
}, Vu = se((r, e) => {
  const { children: t, refProp: n, popupType: o, ...i } = V(
    "PopoverTarget",
    tb,
    r
  );
  if (!Vn(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const a = i, s = Bu(), c = ft(s.reference, t.ref, e), l = s.withRoles ? {
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
    [n]: c,
    ...s.controlled ? null : { onClick: s.onToggle }
  });
});
Vu.displayName = "@mantine/core/PopoverTarget";
function rb({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, i] = Z(0);
  W(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return vv(
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
  ]), Ar(() => {
    e.update();
  }, n), Ar(() => {
    i((a) => a + 1);
  }, [r]);
}
function nb(r) {
  if (r === void 0)
    return { shift: !0, flip: !0 };
  const e = { ...r };
  return r.shift === void 0 && (e.shift = !0), r.flip === void 0 && (e.flip = !0), e;
}
function ob(r, e) {
  const t = nb(r.middlewares), n = [Av(r.offset)];
  return t.shift && n.push(
    Rv(
      typeof t.shift == "boolean" ? { limiter: jc(), padding: 5 } : { limiter: jc(), padding: 5, ...t.shift }
    )
  ), t.flip && n.push(
    typeof t.flip == "boolean" ? Uc() : Uc(t.flip)
  ), t.inline && n.push(
    typeof t.inline == "boolean" ? Hc() : Hc(t.inline)
  ), n.push(Nv({ element: r.arrowRef, padding: r.arrowOffset })), (t.size || r.width === "target") && n.push(
    Pv({
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
function ib(r) {
  const [e, t] = Rr({
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
  }, i = qv({
    strategy: r.strategy,
    placement: r.position,
    middleware: ob(r, () => i)
  });
  return rb({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: i
  }), Ar(() => {
    var a;
    (a = r.onPositionChange) == null || a.call(r, i.placement);
  }, [i.placement]), Ar(() => {
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
}, sb = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : Et(e),
    "--popover-shadow": Ql(t)
  }
});
function ur(r) {
  var ze, mr, jr, $e, Lt, Ur;
  const e = V("Popover", ab, r), {
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
    styles: b,
    closeOnClickOutside: v,
    withinPortal: w,
    portalProps: I,
    closeOnEscape: T,
    clickOutsideEvents: k,
    trapFocus: E,
    onClose: O,
    onOpen: H,
    onChange: $,
    zIndex: J,
    radius: oe,
    shadow: D,
    id: G,
    defaultOpened: x,
    __staticSelector: F,
    withRoles: U,
    disabled: X,
    returnFocus: ce,
    variant: Ie,
    keepMounted: Ce,
    vars: Ve,
    floatingStrategy: yt,
    ...Pe
  } = e, hr = pe({
    name: F,
    props: e,
    classes: qu,
    classNames: C,
    styles: b,
    unstyled: m,
    rootSelector: "dropdown",
    vars: Ve,
    varsResolver: sb
  }), Jt = ue(null), [fr, pr] = Z(null), [gr, fn] = Z(null), { dir: pn } = xa(), xt = lr(G), Te = ib({
    middlewares: u,
    width: l,
    position: Vv(pn, n),
    offset: typeof o == "number" ? o + (h ? d / 2 : 0) : o,
    arrowRef: Jt,
    arrowOffset: f,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    defaultOpened: x,
    onChange: $,
    onOpen: H,
    onClose: O,
    strategy: yt
  });
  $g(() => v && Te.onClose(), k, [
    fr,
    gr
  ]);
  const Dt = me(
    (lt) => {
      pr(lt), Te.floating.refs.setReference(lt);
    },
    [Te.floating.refs.setReference]
  ), Fr = me(
    (lt) => {
      fn(lt), Te.floating.refs.setFloating(lt);
    },
    [Te.floating.refs.setFloating]
  );
  return /* @__PURE__ */ y.jsx(
    Yv,
    {
      value: {
        returnFocus: ce,
        disabled: X,
        controlled: Te.controlled,
        reference: Dt,
        floating: Fr,
        x: Te.floating.x,
        y: Te.floating.y,
        arrowX: (jr = (mr = (ze = Te.floating) == null ? void 0 : ze.middlewareData) == null ? void 0 : mr.arrow) == null ? void 0 : jr.x,
        arrowY: (Ur = (Lt = ($e = Te.floating) == null ? void 0 : $e.middlewareData) == null ? void 0 : Lt.arrow) == null ? void 0 : Ur.y,
        opened: Te.opened,
        arrowRef: Jt,
        transitionProps: c,
        width: l,
        withArrow: h,
        arrowSize: d,
        arrowOffset: f,
        arrowRadius: p,
        arrowPosition: g,
        placement: Te.floating.placement,
        trapFocus: E,
        withinPortal: w,
        portalProps: I,
        zIndex: J,
        radius: oe,
        shadow: D,
        closeOnEscape: T,
        onClose: Te.onClose,
        onToggle: Te.onToggle,
        getTargetId: () => `${xt}-target`,
        getDropdownId: () => `${xt}-dropdown`,
        withRoles: U,
        targetProps: Pe,
        __staticSelector: F,
        classNames: C,
        styles: b,
        unstyled: m,
        variant: Ie,
        keepMounted: Ce,
        getStyles: hr,
        floatingStrategy: yt
      },
      children: t
    }
  );
}
ur.Target = Vu;
ur.Dropdown = Wa;
ur.displayName = "@mantine/core/Popover";
ur.extend = (r) => r;
var St = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const cb = ye(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsxs(Q, { component: "span", className: qt(St.barsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: St.bar }),
  /* @__PURE__ */ y.jsx("span", { className: St.bar }),
  /* @__PURE__ */ y.jsx("span", { className: St.bar })
] })), lb = ye(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsxs(Q, { component: "span", className: qt(St.dotsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: St.dot }),
  /* @__PURE__ */ y.jsx("span", { className: St.dot }),
  /* @__PURE__ */ y.jsx("span", { className: St.dot })
] })), ub = ye(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsx(Q, { component: "span", className: qt(St.ovalLoader, r), ...e, ref: t })), Gu = {
  bars: cb,
  oval: ub,
  dots: lb
}, db = {
  loaders: Gu,
  type: "oval"
}, hb = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Re(e, "loader-size"),
    "--loader-color": t ? or(t, r) : void 0
  }
}), Qn = se((r, e) => {
  const t = V("Loader", db, r), {
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
    varsResolver: hb
  });
  return p ? /* @__PURE__ */ y.jsx(Q, { ...m("root"), ref: e, ...g, children: p }) : /* @__PURE__ */ y.jsx(
    Q,
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
Qn.defaultLoaders = Gu;
Qn.classes = St;
Qn.displayName = "@mantine/core/Loader";
var oi = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const Vc = {
  orientation: "horizontal"
}, fb = (r, { borderWidth: e }) => ({
  group: { "--ai-border-width": A(e) }
}), Ya = se((r, e) => {
  const t = V("ActionIconGroup", Vc, r), {
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
  } = V("ActionIconGroup", Vc, r), p = pe({
    name: "ActionIconGroup",
    props: t,
    classes: oi,
    className: n,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: fb,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
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
Ya.classes = oi;
Ya.displayName = "@mantine/core/ActionIconGroup";
const pb = {}, gb = (r, { size: e, radius: t, variant: n, gradient: o, color: i, autoContrast: a }) => {
  const s = r.variantColorResolver({
    color: i || r.primaryColor,
    theme: r,
    gradient: o,
    variant: n || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--ai-size": Re(e, "ai-size"),
      "--ai-radius": t === void 0 ? void 0 : Et(t),
      "--ai-bg": i || n ? s.background : void 0,
      "--ai-hover": i || n ? s.hover : void 0,
      "--ai-hover-color": i || n ? s.hoverColor : void 0,
      "--ai-color": s.color,
      "--ai-bd": i || n ? s.border : void 0
    }
  };
}, ii = Gt((r, e) => {
  const t = V("ActionIcon", pb, r), {
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
    disabled: b,
    "data-disabled": v,
    autoContrast: w,
    mod: I,
    ...T
  } = t, k = pe({
    name: ["ActionIcon", p],
    props: t,
    className: n,
    style: c,
    classes: oi,
    classNames: a,
    styles: s,
    unstyled: o,
    vars: m,
    varsResolver: gb
  });
  return /* @__PURE__ */ y.jsxs(
    Dr,
    {
      ...k("root", { active: !b && !l && !v }),
      ...T,
      unstyled: o,
      variant: i,
      size: h,
      disabled: b || l,
      ref: e,
      mod: [{ loading: l, disabled: b || v }, I],
      children: [
        /* @__PURE__ */ y.jsx(ni, { mounted: !!l, transition: "slide-down", duration: 150, children: (E) => /* @__PURE__ */ y.jsx(Q, { component: "span", ...k("loader", { style: E }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(Qn, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ y.jsx(Q, { component: "span", mod: { loading: l }, ...k("icon"), children: C })
      ]
    }
  );
});
ii.classes = oi;
ii.displayName = "@mantine/core/ActionIcon";
ii.Group = Ya;
const Wu = ye(
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
Wu.displayName = "@mantine/core/CloseIcon";
var Yu = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const mb = {
  variant: "subtle"
}, yb = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Re(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : Et(t),
    "--cb-icon-size": A(n)
  }
}), hn = Gt((r, e) => {
  const t = V("CloseButton", mb, r), {
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
  } = t, b = pe({
    name: "CloseButton",
    props: t,
    className: s,
    style: l,
    classes: Yu,
    classNames: c,
    styles: u,
    unstyled: h,
    vars: i,
    varsResolver: yb
  });
  return /* @__PURE__ */ y.jsxs(
    Dr,
    {
      ref: e,
      ...C,
      unstyled: h,
      variant: p,
      disabled: f,
      mod: [{ disabled: f || d }, m],
      ...b("root", { variant: p, active: !f && !d }),
      children: [
        g || /* @__PURE__ */ y.jsx(Wu, {}),
        o
      ]
    }
  );
});
hn.classes = Yu;
hn.displayName = "@mantine/core/CloseButton";
function vb(r) {
  return Li.toArray(r).filter(Boolean);
}
var Qu = { root: "m_4081bf90" };
const bb = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Cb = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: i, wrap: a }, { childWidth: s }) => ({
  root: {
    "--group-child-width": e && t ? s : void 0,
    "--group-gap": ka(n),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": a
  }
}), Un = se((r, e) => {
  const t = V("Group", bb, r), {
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
    mod: b,
    ...v
  } = t, w = vb(c), I = w.length, T = ka(l ?? "md"), E = { childWidth: `calc(${100 / I}% - (${T} - ${T} / ${I}))` }, O = pe({
    name: "Group",
    props: t,
    stylesCtx: E,
    className: o,
    style: i,
    classes: Qu,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: g,
    varsResolver: Cb
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...O("root"),
      ref: e,
      variant: m,
      mod: [{ grow: f }, b],
      size: C,
      ...v,
      children: w
    }
  );
});
Un.classes = Qu;
Un.displayName = "@mantine/core/Group";
const [wb, Jn] = Yl({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var gt = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const Gc = {}, Sb = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), ai = se((r, e) => {
  const t = V("InputDescription", Gc, r), {
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
  } = V("InputDescription", Gc, t), p = Jn(), g = pe({
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
    varsResolver: Sb
  }), m = h && (p == null ? void 0 : p.getStyles) || g;
  return /* @__PURE__ */ y.jsx(
    Q,
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
ai.classes = gt;
ai.displayName = "@mantine/core/InputDescription";
const Ib = {}, Tb = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), si = se((r, e) => {
  const t = V("InputError", Ib, r), {
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
    varsResolver: Tb
  }), g = Jn(), m = h && (g == null ? void 0 : g.getStyles) || p;
  return /* @__PURE__ */ y.jsx(
    Q,
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
si.classes = gt;
si.displayName = "@mantine/core/InputError";
const Wc = {
  labelElement: "label"
}, Eb = (r, { size: e }) => ({
  label: {
    "--input-label-size": it(e),
    "--input-asterisk-color": void 0
  }
}), ci = se((r, e) => {
  const t = V("InputLabel", Wc, r), {
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
    ...b
  } = V("InputLabel", Wc, t), v = pe({
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
    varsResolver: Eb
  }), w = Jn(), I = (w == null ? void 0 : w.getStyles) || v;
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ...I("label", w != null && w.getStyles ? { className: o, style: i } : void 0),
      component: l,
      variant: m,
      size: u,
      ref: e,
      htmlFor: l === "label" ? d : void 0,
      mod: [{ required: h }, C],
      onMouseDown: (T) => {
        f == null || f(T), !T.defaultPrevented && T.detail > 1 && T.preventDefault();
      },
      ...b,
      children: [
        p,
        h && /* @__PURE__ */ y.jsx("span", { ...I("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
ci.classes = gt;
ci.displayName = "@mantine/core/InputLabel";
const Yc = {}, Qa = se((r, e) => {
  const t = V("InputPlaceholder", Yc, r), {
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
  } = V("InputPlaceholder", Yc, t), p = pe({
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
    Q,
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
Qa.classes = gt;
Qa.displayName = "@mantine/core/InputPlaceholder";
function _b(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((c) => c === "input"), o = r.slice(0, n), i = r.slice(n + 1), a = e && o.includes("description") || t && o.includes("error");
  return { offsetBottom: e && i.includes("description") || t && i.includes("error"), offsetTop: a };
}
const kb = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Ab = (r, { size: e }) => ({
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
}), Ja = se((r, e) => {
  const t = V("InputWrapper", kb, r), {
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
    descriptionProps: b,
    errorProps: v,
    labelElement: w,
    children: I,
    withAsterisk: T,
    id: k,
    required: E,
    __stylesApiProps: O,
    mod: H,
    ...$
  } = t, J = pe({
    name: ["InputWrapper", h],
    props: O || t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: Ab
  }), oe = {
    size: l,
    variant: u,
    __staticSelector: h
  }, D = lr(k), G = typeof T == "boolean" ? T : E, x = (v == null ? void 0 : v.id) || `${D}-error`, F = (b == null ? void 0 : b.id) || `${D}-description`, U = D, X = !!g && typeof g != "boolean", ce = !!m, Ie = `${X ? x : ""} ${ce ? F : ""}`, Ce = Ie.trim().length > 0 ? Ie.trim() : void 0, Ve = (C == null ? void 0 : C.id) || `${D}-label`, yt = p && /* @__PURE__ */ y.jsx(
    ci,
    {
      labelElement: w,
      id: Ve,
      htmlFor: U,
      required: G,
      ...oe,
      ...C,
      children: p
    },
    "label"
  ), Pe = ce && /* @__PURE__ */ y.jsx(
    ai,
    {
      ...b,
      ...oe,
      size: (b == null ? void 0 : b.size) || oe.size,
      id: (b == null ? void 0 : b.id) || F,
      children: m
    },
    "description"
  ), hr = /* @__PURE__ */ y.jsx(Cl, { children: d(I) }, "input"), Jt = X && /* @__PURE__ */ Fi(
    si,
    {
      ...v,
      ...oe,
      size: (v == null ? void 0 : v.size) || oe.size,
      key: "error",
      id: (v == null ? void 0 : v.id) || x
    },
    g
  ), fr = f.map((pr) => {
    switch (pr) {
      case "label":
        return yt;
      case "input":
        return hr;
      case "description":
        return Pe;
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
        getStyles: J,
        describedBy: Ce,
        inputId: U,
        labelId: Ve,
        ..._b(f, { hasDescription: ce, hasError: X })
      },
      children: /* @__PURE__ */ y.jsx(
        Q,
        {
          ref: e,
          variant: u,
          size: l,
          mod: [{ error: !!g }, H],
          ...J("root"),
          ...$,
          children: fr
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
}, Pb = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Re(e.size, "input-height"),
    "--input-fz": it(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : Et(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? A(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? A(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Re(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Be = Gt((r, e) => {
  const t = V("Input", Rb, r), {
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
    rightSection: b,
    rightSectionProps: v,
    rightSectionWidth: w,
    rightSectionPointerEvents: I,
    leftSectionPointerEvents: T,
    variant: k,
    vars: E,
    pointer: O,
    multiline: H,
    radius: $,
    id: J,
    withAria: oe,
    withErrorStyles: D,
    mod: G,
    inputSize: x,
    ...F
  } = t, { styleProps: U, rest: X } = Xo(F), ce = Jn(), Ie = { offsetBottom: ce == null ? void 0 : ce.offsetBottom, offsetTop: ce == null ? void 0 : ce.offsetTop }, Ce = pe({
    name: ["Input", l],
    props: u || t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    stylesCtx: Ie,
    rootSelector: "wrapper",
    vars: E,
    varsResolver: Pb
  }), Ve = oe ? {
    required: c,
    disabled: p,
    "aria-invalid": !!f,
    "aria-describedby": ce == null ? void 0 : ce.describedBy,
    id: (ce == null ? void 0 : ce.inputId) || J
  } : {};
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ...Ce("wrapper"),
      ...U,
      ...d,
      mod: [
        {
          error: !!f && D,
          pointer: O,
          disabled: p,
          multiline: H,
          "data-with-right-section": !!b,
          "data-with-left-section": !!g
        },
        G
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
          Q,
          {
            component: "input",
            ...X,
            ...Ve,
            ref: e,
            required: c,
            mod: { disabled: p, error: !!f && D },
            variant: k,
            __size: x,
            ...Ce("input")
          }
        ),
        b && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...v,
            "data-position": "right",
            ...Ce("section", {
              className: v == null ? void 0 : v.className,
              style: v == null ? void 0 : v.style
            }),
            children: b
          }
        )
      ]
    }
  );
});
Be.classes = gt;
Be.Wrapper = Ja;
Be.Label = ci;
Be.Error = si;
Be.Description = ai;
Be.Placeholder = Qa;
Be.displayName = "@mantine/core/Input";
function Nb(r, e, t) {
  const n = V(r, e, t), {
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
    id: b,
    size: v,
    style: w,
    inputContainer: I,
    inputWrapperOrder: T,
    withAsterisk: k,
    variant: E,
    vars: O,
    mod: H,
    ...$
  } = n, { styleProps: J, rest: oe } = Xo($), D = {
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
    size: v,
    style: w,
    inputContainer: I,
    inputWrapperOrder: T,
    withAsterisk: k,
    variant: E,
    id: b,
    mod: H,
    ...C
  };
  return {
    ...oe,
    classNames: c,
    styles: l,
    unstyled: h,
    wrapperProps: { ...D, ...J },
    inputProps: {
      required: s,
      classNames: c,
      styles: l,
      unstyled: h,
      size: v,
      __staticSelector: d,
      __stylesApiProps: f || n,
      error: a,
      variant: E,
      id: b
    }
  };
}
const Mb = {
  __staticSelector: "InputBase",
  withAria: !0
}, Yt = Gt((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = Nb("InputBase", Mb, r);
  return /* @__PURE__ */ y.jsx(Be.Wrapper, { ...n, children: /* @__PURE__ */ y.jsx(Be, { ...t, ...o, ref: e }) });
});
Yt.classes = { ...Be.classes, ...Be.Wrapper.classes };
Yt.displayName = "@mantine/core/InputBase";
const [Ob, Xa] = ln(
  "Accordion component was not found in the tree"
);
function Za({ style: r, size: e = 16, ...t }) {
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
Za.displayName = "@mantine/core/AccordionChevron";
const [xb, Ju] = ln("Accordion.Item component was not found in the tree");
var Xn = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const Db = {}, es = se((r, e) => {
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
  } = V("AccordionControl", Db, r), { value: g } = Ju(), m = Xa(), C = m.isItemActive(g), b = typeof m.order == "number", v = `h${m.order}`, w = /* @__PURE__ */ y.jsxs(
    Dr,
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
      onClick: (I) => {
        l == null || l(I), m.onChange(g);
      },
      type: "button",
      disabled: d,
      "aria-expanded": C,
      "aria-controls": m.getRegionId(g),
      id: m.getControlId(g),
      onKeyDown: Fg({
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
            mod: { rotate: !m.disableChevronRotation && C, position: m.chevronPosition },
            ...m.getStyles("chevron", { classNames: t, styles: i }),
            children: s || m.chevron
          }
        ),
        /* @__PURE__ */ y.jsx("span", { ...m.getStyles("label", { classNames: t, styles: i }), children: h }),
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
  return b ? /* @__PURE__ */ y.jsx(v, { ...m.getStyles("itemTitle", { classNames: t, styles: i }), children: w }) : w;
});
es.displayName = "@mantine/core/AccordionControl";
es.classes = Xn;
const Lb = {}, ts = se((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, value: s, mod: c, ...l } = V(
    "AccordionItem",
    Lb,
    r
  ), u = Xa();
  return /* @__PURE__ */ y.jsx(xb, { value: { value: s }, children: /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      mod: [{ active: u.isItemActive(s) }, c],
      ...u.getStyles("item", { className: n, classNames: t, styles: i, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
ts.displayName = "@mantine/core/AccordionItem";
ts.classes = Xn;
const Fb = {}, rs = se((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, children: s, ...c } = V(
    "AccordionPanel",
    Fb,
    r
  ), { value: l } = Ju(), u = Xa();
  return /* @__PURE__ */ y.jsx(
    yu,
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
rs.displayName = "@mantine/core/AccordionPanel";
rs.classes = Xn;
const jb = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ y.jsx(Za, {})
}, Ub = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : A(t),
    "--accordion-radius": n === void 0 ? void 0 : Et(n)
  }
});
function Ne(r) {
  const e = V("Accordion", jb, r), {
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
    chevronSize: b,
    order: v,
    chevron: w,
    variant: I,
    radius: T,
    ...k
  } = e, E = lr(f), [O, H] = Rr({
    value: u,
    defaultValue: h,
    finalValue: l ? [] : null,
    onChange: d
  }), $ = (D) => Array.isArray(O) ? O.includes(D) : D === O, J = (D) => {
    const G = Array.isArray(O) ? O.includes(D) ? O.filter((x) => x !== D) : [...O, D] : D === O ? null : D;
    H(G);
  }, oe = pe({
    name: "Accordion",
    classes: Xn,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: i,
    unstyled: a,
    vars: s,
    varsResolver: Ub
  });
  return /* @__PURE__ */ y.jsx(
    Ob,
    {
      value: {
        isItemActive: $,
        onChange: J,
        getControlId: vc(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: vc(
          `${E}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: m,
        chevronPosition: C,
        order: v,
        chevron: w,
        loop: p,
        getStyles: oe,
        variant: I,
        unstyled: a
      },
      children: /* @__PURE__ */ y.jsx(Q, { ...oe("root"), id: E, ...k, variant: I, "data-accordion": !0, children: c })
    }
  );
}
const Hb = (r) => r;
Ne.extend = Hb;
Ne.classes = Xn;
Ne.displayName = "@mantine/core/Accordion";
Ne.Item = ts;
Ne.Panel = rs;
Ne.Control = es;
Ne.Chevron = Za;
var Xu = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const Bb = {}, zb = (r, { radius: e, color: t, variant: n, autoContrast: o }) => {
  const i = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    variant: n || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : Et(e),
      "--alert-bg": t || n ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": t || n ? i.border : void 0
    }
  };
}, ns = se((r, e) => {
  const t = V("Alert", Bb, r), {
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
    variant: b,
    autoContrast: v,
    ...w
  } = t, I = pe({
    name: "Alert",
    classes: Xu,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: zb
  }), T = lr(f), k = h && `${T}-title` || void 0, E = `${T}-body`;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      id: T,
      ...I("root", { variant: b }),
      variant: b,
      ref: e,
      ...w,
      role: "alert",
      "aria-describedby": E,
      "aria-labelledby": k,
      children: /* @__PURE__ */ y.jsxs("div", { ...I("wrapper"), children: [
        p && /* @__PURE__ */ y.jsx("div", { ...I("icon"), children: p }),
        /* @__PURE__ */ y.jsxs("div", { ...I("body"), children: [
          h && /* @__PURE__ */ y.jsx("div", { ...I("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ y.jsx("span", { id: k, ...I("label"), children: h }) }),
          d && /* @__PURE__ */ y.jsx("div", { id: E, ...I("message"), "data-variant": b, children: d })
        ] }),
        g && /* @__PURE__ */ y.jsx(
          hn,
          {
            ...I("closeButton"),
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
ns.classes = Xu;
ns.displayName = "@mantine/core/Alert";
var Zu = { root: "m_b6d8b162" };
function $b(r) {
  if (r === "start")
    return "start";
  if (r === "end" || r)
    return "end";
}
const Kb = {
  inherit: !1
}, qb = (r, { variant: e, lineClamp: t, gradient: n, size: o, color: i }) => ({
  root: {
    "--text-fz": it(o),
    "--text-lh": zg(o),
    "--text-gradient": e === "gradient" ? ra(n, r) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": i ? or(i, r) : void 0
  }
}), Do = Gt((r, e) => {
  const t = V("Text", Kb, r), {
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
    size: b,
    ...v
  } = t, w = pe({
    name: ["Text", l],
    props: t,
    classes: Zu,
    className: h,
    style: d,
    classNames: f,
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
          "data-line-clamp": typeof n == "number",
          "data-inline": i,
          "data-inherit": a
        },
        C
      ],
      size: b,
      ...v
    }
  );
});
Do.classes = Zu;
Do.displayName = "@mantine/core/Text";
function ed(r) {
  return typeof r == "string" ? { value: r, label: r } : "value" in r && !("label" in r) ? { value: r.value, label: r.value, disabled: r.disabled } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => ed(e))
  } : r;
}
function td(r) {
  return r ? r.map((e) => ed(e)) : [];
}
function os(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...os(t.items) } : (e[t.value] = t, e), {});
}
var Ze = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Vb = {
  error: null
}, Gb = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Re(e, "combobox-chevron-size")
  }
}), is = se((r, e) => {
  const t = V("ComboboxChevron", Vb, r), { size: n, error: o, style: i, className: a, classNames: s, styles: c, unstyled: l, vars: u, mod: h, ...d } = t, f = pe({
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
is.classes = Ze;
is.displayName = "@mantine/core/ComboboxChevron";
const [Wb, mt] = ln(
  "Combobox component was not found in tree"
), rd = ye(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, i) => /* @__PURE__ */ y.jsx(
    hn,
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
rd.displayName = "@mantine/core/ComboboxClearButton";
const Yb = {}, as = se((r, e) => {
  const { classNames: t, styles: n, className: o, style: i, hidden: a, ...s } = V(
    "ComboboxDropdown",
    Yb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    ur.Dropdown,
    {
      ...s,
      ref: e,
      role: "presentation",
      "data-hidden": a || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: t, styles: n })
    }
  );
});
as.classes = Ze;
as.displayName = "@mantine/core/ComboboxDropdown";
const Qb = {
  refProp: "ref"
}, nd = se((r, e) => {
  const { children: t, refProp: n } = V("ComboboxDropdownTarget", Qb, r);
  if (mt(), !Vn(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ y.jsx(ur.Target, { ref: e, refProp: n, children: t });
});
nd.displayName = "@mantine/core/ComboboxDropdownTarget";
const Jb = {}, ss = se((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, ...s } = V(
    "ComboboxEmpty",
    Jb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("empty", { className: n, classNames: t, styles: i, style: o }),
      ...s
    }
  );
});
ss.classes = Ze;
ss.displayName = "@mantine/core/ComboboxEmpty";
function cs({
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
const Xb = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, od = se((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = V("ComboboxEventsTarget", Xb, r);
  if (!Vn(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), h = cs({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  });
  return qo(t, {
    ...h,
    ...l,
    [n]: ft(e, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
od.displayName = "@mantine/core/ComboboxEventsTarget";
const Zb = {}, ls = se((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, ...s } = V(
    "ComboboxFooter",
    Zb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
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
ls.classes = Ze;
ls.displayName = "@mantine/core/ComboboxFooter";
const eC = {}, us = se((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, children: s, label: c, ...l } = V(
    "ComboboxGroup",
    eC,
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
        s
      ]
    }
  );
});
us.classes = Ze;
us.displayName = "@mantine/core/ComboboxGroup";
const tC = {}, ds = se((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, ...s } = V(
    "ComboboxHeader",
    tC,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
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
ds.classes = Ze;
ds.displayName = "@mantine/core/ComboboxHeader";
function id({
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
id.displayName = "@mantine/core/ComboboxHiddenInput";
const rC = {}, hs = se((r, e) => {
  const t = V("ComboboxOption", rC, r), {
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
  } = t, C = mt(), b = wl(), v = l || b;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...C.getStyles("option", { className: o, classNames: n, styles: a, style: i }),
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
        var I;
        f ? w.preventDefault() : ((I = C.onOptionSubmit) == null || I.call(C, t.value, t), c == null || c(w));
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
hs.classes = Ze;
hs.displayName = "@mantine/core/ComboboxOption";
const nC = {}, fs = se((r, e) => {
  const t = V("ComboboxOptions", nC, r), { classNames: n, className: o, style: i, styles: a, id: s, onMouseDown: c, labelledBy: l, ...u } = t, h = mt(), d = lr(s);
  return W(() => {
    h.store.setListId(d);
  }, [d]), /* @__PURE__ */ y.jsx(
    Q,
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
fs.classes = Ze;
fs.displayName = "@mantine/core/ComboboxOptions";
const oC = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ps = se((r, e) => {
  const t = V("ComboboxSearch", oC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: a,
    withAriaAttributes: s,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...h
  } = t, d = mt(), f = d.getStyles("search"), p = cs({
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
ps.classes = Ze;
ps.displayName = "@mantine/core/ComboboxSearch";
const iC = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, ad = se((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = V("ComboboxTarget", iC, r);
  if (!Vn(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), h = cs({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  }), d = qo(t, {
    ...h,
    ...l
  });
  return /* @__PURE__ */ y.jsx(ur.Target, { ref: ft(e, u.store.targetRef), children: d });
});
ad.displayName = "@mantine/core/ComboboxTarget";
function aC(r, e, t) {
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
function sC(r, e, t) {
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
function cC(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function li({
  defaultOpened: r,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: a = "instant"
} = {}) {
  const [s, c] = Rr({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), l = ue(null), u = ue(-1), h = ue(null), d = ue(null), f = ue(-1), p = ue(-1), g = ue(-1), m = me(
    (x = "unknown") => {
      s || (c(!0), o == null || o(x));
    },
    [c, o, s]
  ), C = me(
    (x = "unknown") => {
      s && (c(!1), n == null || n(x));
    },
    [c, n, s]
  ), b = me(
    (x = "unknown") => {
      s ? C(x) : m(x);
    },
    [C, m, s]
  ), v = me(() => {
    const x = document.querySelector(`#${l.current} [data-combobox-selected]`);
    x == null || x.removeAttribute("data-combobox-selected"), x == null || x.removeAttribute("aria-selected");
  }, []), w = me(
    (x) => {
      const F = document.getElementById(l.current), U = F == null ? void 0 : F.querySelectorAll("[data-combobox-option]");
      if (!U)
        return null;
      const X = x >= U.length ? 0 : x < 0 ? U.length - 1 : x;
      return u.current = X, U != null && U[X] && !U[X].hasAttribute("data-combobox-disabled") ? (v(), U[X].setAttribute("data-combobox-selected", "true"), U[X].setAttribute("aria-selected", "true"), U[X].scrollIntoView({ block: "nearest", behavior: a }), U[X].id) : null;
    },
    [a, v]
  ), I = me(() => {
    const x = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (x) {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), U = Array.from(F).findIndex((X) => X === x);
      return w(U);
    }
    return w(0);
  }, [w]), T = me(
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
  ), E = me(
    () => w(
      cC(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
  ), O = me(
    (x = "selected", F) => {
      g.current = window.setTimeout(() => {
        var ce;
        const U = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), X = Array.from(U).findIndex(
          (Ie) => Ie.hasAttribute(`data-combobox-${x}`)
        );
        u.current = X, F != null && F.scrollIntoView && ((ce = U[X]) == null || ce.scrollIntoView({ block: "nearest", behavior: a }));
      }, 0);
    },
    []
  ), H = me(() => {
    u.current = -1, v();
  }, [v]), $ = me(() => {
    const x = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), F = x == null ? void 0 : x[u.current];
    F == null || F.click();
  }, []), J = me((x) => {
    l.current = x;
  }, []), oe = me(() => {
    f.current = window.setTimeout(() => h.current.focus(), 0);
  }, []), D = me(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), G = me(() => u.current, []);
  return W(
    () => () => {
      window.clearTimeout(f.current), window.clearTimeout(p.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: s,
    openDropdown: m,
    closeDropdown: C,
    toggleDropdown: b,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: G,
    selectOption: w,
    selectFirstOption: E,
    selectActiveOption: I,
    selectNextOption: T,
    selectPreviousOption: k,
    resetSelectedOption: H,
    updateSelectedOptionIndex: O,
    listId: l.current,
    setListId: J,
    clickSelectedOption: $,
    searchRef: h,
    focusSearchInput: oe,
    targetRef: d,
    focusTarget: D
  };
}
const lC = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, uC = (r, { size: e, dropdownPadding: t }) => ({
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
function le(r) {
  const e = V("Combobox", lC, r), {
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
  } = e, m = li(), C = a || m, b = pe({
    name: f || "Combobox",
    classes: Ze,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: s,
    varsResolver: uC
  }), v = () => {
    l == null || l(), C.closeDropdown();
  };
  return /* @__PURE__ */ y.jsx(
    Wb,
    {
      value: {
        getStyles: b,
        store: C,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: d,
        readOnly: p
      },
      children: /* @__PURE__ */ y.jsx(
        ur,
        {
          opened: C.dropdownOpened,
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
const dC = (r) => r;
le.extend = dC;
le.classes = Ze;
le.displayName = "@mantine/core/Combobox";
le.Target = ad;
le.Dropdown = as;
le.Options = fs;
le.Option = hs;
le.Search = ps;
le.Empty = ss;
le.Chevron = is;
le.Footer = ls;
le.Header = ds;
le.EventsTarget = od;
le.DropdownTarget = nd;
le.Group = us;
le.ClearButton = rd;
le.HiddenInput = id;
var sd = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const hC = sd, cd = ye(
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
    vars: b,
    mod: v,
    ...w
  }, I) => {
    const T = pe({
      name: r,
      props: e,
      className: t,
      style: C,
      classes: sd,
      classNames: n,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ y.jsx(
      Q,
      {
        ...T("root"),
        ref: I,
        __vars: {
          "--label-fz": it(d),
          "--label-lh": Re(d, "label-lh")
        },
        mod: [{ "label-position": f }, v],
        variant: m,
        size: d,
        ...w,
        children: /* @__PURE__ */ y.jsxs(
          Q,
          {
            component: p,
            htmlFor: p === "label" ? l : void 0,
            ...T("body"),
            children: [
              a,
              /* @__PURE__ */ y.jsxs("div", { ...T("labelWrapper"), "data-disabled": u || void 0, children: [
                s && /* @__PURE__ */ y.jsx(
                  Q,
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
cd.displayName = "@mantine/core/InlineInput";
const ld = Mr(null), fC = ld.Provider, ud = () => cr(ld), [pC, gC] = Yl();
var dd = { card: "m_26775b0a" };
const mC = {
  withBorder: !0
}, yC = (r, { radius: e }) => ({
  card: {
    "--card-radius": Et(e)
  }
}), gs = se((r, e) => {
  const t = V("CheckboxCard", mC, r), {
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
    classes: dd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: yC,
    rootSelector: "card"
  }), m = ud(), C = typeof l == "boolean" ? l : (m == null ? void 0 : m.value.includes(d || "")) || !1;
  return /* @__PURE__ */ y.jsx(pC, { value: { checked: C }, children: /* @__PURE__ */ y.jsx(
    Dr,
    {
      ref: e,
      mod: [{ "with-border": h, checked: C }, u],
      ...g("card"),
      ...p,
      role: "checkbox",
      "aria-checked": C,
      onClick: (b) => {
        f == null || f(b), m == null || m.onChange(d || "");
      }
    }
  ) });
});
gs.displayName = "@mantine/core/CheckboxCard";
gs.classes = dd;
function vC({ children: r, role: e }) {
  const t = Jn();
  return t ? /* @__PURE__ */ y.jsx("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy, children: r }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: r });
}
const bC = {}, ms = se((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: i, wrapperProps: a, children: s, readOnly: c, ...l } = V("CheckboxGroup", bC, r), [u, h] = Rr({
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
  return /* @__PURE__ */ y.jsx(fC, { value: { value: u, onChange: d, size: i }, children: /* @__PURE__ */ y.jsx(
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
function ys({ size: r, style: e, ...t }) {
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
function hd({ indeterminate: r, ...e }) {
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
  ) : /* @__PURE__ */ y.jsx(ys, { ...e });
}
var fd = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const CC = {
  icon: hd
}, wC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: a }) => {
  const s = xr({ color: t || r.primaryColor, theme: r }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    indicator: {
      "--checkbox-size": Re(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Et(e),
      "--checkbox-color": i === "outline" ? c : or(t, r),
      "--checkbox-icon-color": o ? or(o, r) : du(a, r) ? Ma({ color: t, theme: r, autoContrast: a }) : void 0
    }
  };
}, vs = se((r, e) => {
  const t = V("CheckboxIndicator", CC, r), {
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
    disabled: b,
    ...v
  } = t, w = l, I = pe({
    name: "CheckboxIndicator",
    classes: fd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: wC,
    rootSelector: "indicator"
  }), T = gC(), k = typeof g == "boolean" || typeof u == "boolean" ? g || u : (T == null ? void 0 : T.checked) || !1;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...I("indicator", { variant: C }),
      variant: C,
      mod: [{ checked: k, disabled: b }, m],
      ...v,
      children: /* @__PURE__ */ y.jsx(w, { indeterminate: u, ...I("icon") })
    }
  );
});
vs.displayName = "@mantine/core/CheckboxIndicator";
vs.classes = fd;
var pd = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const SC = {
  labelPosition: "right",
  icon: hd
}, IC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: a }) => {
  const s = xr({ color: t || r.primaryColor, theme: r }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Re(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Et(e),
      "--checkbox-color": i === "outline" ? c : or(t, r),
      "--checkbox-icon-color": o ? or(o, r) : du(a, r) ? Ma({ color: t, theme: r, autoContrast: a }) : void 0
    }
  };
}, Lr = se((r, e) => {
  const t = V("Checkbox", SC, r), {
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
    description: b,
    error: v,
    disabled: w,
    variant: I,
    indeterminate: T,
    icon: k,
    rootRef: E,
    iconColor: O,
    onChange: H,
    autoContrast: $,
    mod: J,
    ...oe
  } = t, D = ud(), G = d || (D == null ? void 0 : D.size), x = k, F = pe({
    name: "Checkbox",
    props: t,
    classes: pd,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: IC
  }), { styleProps: U, rest: X } = Xo(oe), ce = lr(h), Ie = D ? {
    checked: D.value.includes(X.value),
    onChange: (Ce) => {
      D.onChange(Ce), H == null || H(Ce);
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
      labelPosition: C,
      label: u,
      description: b,
      error: v,
      disabled: w,
      classNames: n,
      styles: a,
      unstyled: s,
      "data-checked": Ie.checked || m || void 0,
      variant: I,
      ref: E,
      mod: J,
      ...U,
      ...p,
      children: /* @__PURE__ */ y.jsxs(Q, { ...F("inner"), mod: { "data-label-position": C }, children: [
        /* @__PURE__ */ y.jsx(
          Q,
          {
            component: "input",
            id: ce,
            ref: e,
            checked: m,
            disabled: w,
            mod: { error: !!v, indeterminate: T },
            ...F("input", { focusable: !0, variant: I }),
            onChange: H,
            ...X,
            ...Ie,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ y.jsx(x, { indeterminate: T, ...F("icon") })
      ] })
    }
  );
});
Lr.classes = { ...pd, ...hC };
Lr.displayName = "@mantine/core/Checkbox";
Lr.Group = ms;
Lr.Indicator = vs;
Lr.Card = gs;
function Hn(r) {
  return "group" in r;
}
function gd({
  options: r,
  search: e,
  limit: t
}) {
  const n = e.trim().toLowerCase(), o = [];
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
    if (o.length === t)
      return o;
    Hn(a) && o.push({
      group: a.group,
      items: gd({
        options: a.items,
        search: e,
        limit: t - o.length
      })
    }), Hn(a) || a.label.toLowerCase().includes(n) && o.push(a);
  }
  return o;
}
function TC(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function md(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Hn(t))
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
function EC(r, e) {
  return Array.isArray(r) ? r.includes(e) : r === e;
}
function yd({
  data: r,
  withCheckIcon: e,
  value: t,
  checkIconPosition: n,
  unstyled: o,
  renderOption: i
}) {
  if (!Hn(r)) {
    const s = EC(t, r.value), c = e && s && /* @__PURE__ */ y.jsx(ys, { className: Ze.optionsDropdownCheckIcon }), l = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      n === "left" && c,
      /* @__PURE__ */ y.jsx("span", { children: r.label }),
      n === "right" && c
    ] });
    return /* @__PURE__ */ y.jsx(
      le.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: qt({ [Ze.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": s || void 0,
        "aria-selected": s,
        active: s,
        children: typeof i == "function" ? i({ option: r, checked: s }) : l
      }
    );
  }
  const a = r.items.map((s) => /* @__PURE__ */ y.jsx(
    yd,
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
function vd({
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
  md(r);
  const v = typeof o == "string" ? (n || gd)({
    options: r,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : r, w = TC(v), I = v.map((T) => /* @__PURE__ */ y.jsx(
    yd,
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
  return /* @__PURE__ */ y.jsx(le.Dropdown, { hidden: e || t && w, children: /* @__PURE__ */ y.jsxs(le.Options, { labelledBy: p, "aria-label": C, children: [
    s ? /* @__PURE__ */ y.jsx(
      Wn.Autosize,
      {
        mah: a ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...m,
        children: I
      }
    ) : I,
    w && d && /* @__PURE__ */ y.jsx(le.Empty, { children: d })
  ] }) });
}
const _C = {}, bs = se((r, e) => {
  const t = V("Autocomplete", _C, r), {
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
    selectFirstOptionOnChange: b,
    onOptionSubmit: v,
    comboboxProps: w,
    readOnly: I,
    disabled: T,
    filter: k,
    limit: E,
    withScrollArea: O,
    maxDropdownHeight: H,
    size: $,
    id: J,
    renderOption: oe,
    autoComplete: D,
    scrollAreaProps: G,
    ...x
  } = t, F = lr(J), U = td(g), X = os(U), [ce, Ie] = Rr({
    value: m,
    defaultValue: C,
    finalValue: "",
    onChange: p
  }), Ce = li({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Ce.resetSelectedOption();
    }
  }), { resolvedClassNames: Ve, resolvedStyles: yt } = uu({
    props: t,
    styles: o,
    classNames: n
  });
  return W(() => {
    b && Ce.selectFirstOption();
  }, [b, ce]), /* @__PURE__ */ y.jsxs(
    le,
    {
      store: Ce,
      __staticSelector: "Autocomplete",
      classNames: Ve,
      styles: yt,
      unstyled: i,
      readOnly: I,
      onOptionSubmit: (Pe) => {
        v == null || v(Pe), Ie(X[Pe].label), Ce.closeDropdown();
      },
      size: $,
      ...w,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { autoComplete: D, children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            ref: e,
            ...x,
            size: $,
            __staticSelector: "Autocomplete",
            disabled: T,
            readOnly: I,
            value: ce,
            onChange: (Pe) => {
              Ie(Pe.currentTarget.value), Ce.openDropdown(), b && Ce.selectFirstOption();
            },
            onFocus: (Pe) => {
              Ce.openDropdown(), h == null || h(Pe);
            },
            onBlur: (Pe) => {
              Ce.closeDropdown(), d == null || d(Pe);
            },
            onClick: (Pe) => {
              Ce.openDropdown(), f == null || f(Pe);
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
            data: U,
            hidden: I || T,
            filter: k,
            search: ce,
            limit: E,
            hiddenWhenEmpty: !0,
            withScrollArea: O,
            maxDropdownHeight: H,
            unstyled: i,
            labelId: x.label ? `${F}-label` : void 0,
            "aria-label": x.label ? void 0 : x["aria-label"],
            renderOption: oe,
            scrollAreaProps: G
          }
        )
      ]
    }
  );
});
bs.classes = { ...Yt.classes, ...le.classes };
bs.displayName = "@mantine/core/Autocomplete";
var ui = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const Qc = {
  orientation: "horizontal"
}, kC = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": A(e) }
}), Cs = se((r, e) => {
  const t = V("ButtonGroup", Qc, r), {
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
  } = V("ButtonGroup", Qc, r), p = pe({
    name: "ButtonGroup",
    props: t,
    classes: ui,
    className: n,
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
      variant: h,
      mod: [{ "data-orientation": c }, d],
      role: "group",
      ...f
    }
  );
});
Cs.classes = ui;
Cs.displayName = "@mantine/core/ButtonGroup";
const AC = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${A(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, RC = {}, PC = (r, { radius: e, color: t, gradient: n, variant: o, size: i, justify: a, autoContrast: s }) => {
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
      "--button-height": Re(i, "button-height"),
      "--button-padding-x": Re(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? it(i.replace("compact-", "")) : it(i),
      "--button-radius": e === void 0 ? void 0 : Et(e),
      "--button-bg": t || o ? c.background : void 0,
      "--button-hover": t || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": t || o ? c.border : void 0,
      "--button-hover-color": t || o ? c.hoverColor : void 0
    }
  };
}, Zn = Gt((r, e) => {
  const t = V("Button", RC, r), {
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
    styles: b,
    unstyled: v,
    "data-disabled": w,
    autoContrast: I,
    mod: T,
    ...k
  } = t, E = pe({
    name: "Button",
    props: t,
    classes: ui,
    className: i,
    style: n,
    classNames: C,
    styles: b,
    unstyled: v,
    vars: o,
    varsResolver: PC
  }), O = !!l, H = !!u;
  return /* @__PURE__ */ y.jsxs(
    Dr,
    {
      ref: e,
      ...E("root", { active: !s && !p && !w }),
      unstyled: v,
      variant: d,
      disabled: s || p,
      mod: [
        {
          disabled: s || w,
          loading: p,
          block: h,
          "with-left-section": O,
          "with-right-section": H
        },
        T
      ],
      ...k,
      children: [
        /* @__PURE__ */ y.jsx(ni, { mounted: !!p, transition: AC, duration: 150, children: ($) => /* @__PURE__ */ y.jsx(Q, { component: "span", ...E("loader", { style: $ }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(
          Qn,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("span", { ...E("inner"), children: [
          l && /* @__PURE__ */ y.jsx(Q, { component: "span", ...E("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ y.jsx(Q, { component: "span", mod: { loading: p }, ...E("label"), children: c }),
          u && /* @__PURE__ */ y.jsx(Q, { component: "span", ...E("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
Zn.classes = ui;
Zn.displayName = "@mantine/core/Button";
Zn.Group = Cs;
var bd = { root: "m_4451eb3a" };
const NC = {}, ws = Gt((r, e) => {
  const t = V("Center", NC, r), { classNames: n, className: o, style: i, styles: a, unstyled: s, vars: c, inline: l, mod: u, ...h } = t, d = pe({
    name: "Center",
    props: t,
    classes: bd,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, mod: [{ inline: l }, u], ...d("root"), ...h });
});
ws.classes = bd;
ws.displayName = "@mantine/core/Center";
var Cd = { root: "m_7485cace" };
const MC = {}, OC = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Re(e, "container-size")
  }
}), Ss = se((r, e) => {
  const t = V("Container", MC, r), { classNames: n, className: o, style: i, styles: a, unstyled: s, vars: c, fluid: l, mod: u, ...h } = t, d = pe({
    name: "Container",
    classes: Cd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: OC
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, mod: [{ fluid: l }, u], ...d("root"), ...h });
});
Ss.classes = Cd;
Ss.displayName = "@mantine/core/Container";
const xC = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Is = se((r, e) => {
  const t = V("Select", xC, r), {
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
    selectFirstOptionOnChange: b,
    onOptionSubmit: v,
    comboboxProps: w,
    readOnly: I,
    disabled: T,
    filter: k,
    limit: E,
    withScrollArea: O,
    maxDropdownHeight: H,
    size: $,
    searchable: J,
    rightSection: oe,
    checkIconPosition: D,
    withCheckIcon: G,
    nothingFoundMessage: x,
    name: F,
    form: U,
    searchValue: X,
    defaultSearchValue: ce,
    onSearchChange: Ie,
    allowDeselect: Ce,
    error: Ve,
    rightSectionPointerEvents: yt,
    id: Pe,
    clearable: hr,
    clearButtonProps: Jt,
    hiddenInputProps: fr,
    renderOption: pr,
    onClear: gr,
    autoComplete: fn,
    scrollAreaProps: pn,
    ...xt
  } = t, Te = On(() => td(g), [g]), Dt = On(() => os(Te), [Te]), Fr = lr(Pe), [ze, mr, jr] = Rr({
    value: m,
    defaultValue: C,
    finalValue: null,
    onChange: p
  }), $e = typeof ze == "string" ? Dt[ze] : void 0, Lt = om($e), [Ur, lt] = Rr({
    value: X,
    defaultValue: ce,
    finalValue: $e ? $e.label : "",
    onChange: Ie
  }), vt = li({
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
    classNames: n
  });
  W(() => {
    b && vt.selectFirstOption();
  }, [b, ze]), W(() => {
    m === null && lt(""), typeof m == "string" && $e && ((Lt == null ? void 0 : Lt.value) !== $e.value || (Lt == null ? void 0 : Lt.label) !== $e.label) && lt($e.label);
  }, [m, $e]);
  const Ls = hr && !!ze && !T && !I && /* @__PURE__ */ y.jsx(
    le.ClearButton,
    {
      size: $,
      ...Jt,
      onClear: () => {
        mr(null, null), lt(""), gr == null || gr();
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
        readOnly: I,
        onOptionSubmit: (ut) => {
          v == null || v(ut);
          const Ft = Ce && Dt[ut].value === ze ? null : Dt[ut], mi = Ft ? Ft.value : null;
          mi !== ze && mr(mi, Ft), !jr && lt(typeof mi == "string" && (Ft == null ? void 0 : Ft.label) || ""), vt.closeDropdown();
        },
        size: $,
        ...w,
        children: [
          /* @__PURE__ */ y.jsx(le.Target, { targetType: J ? "input" : "button", autoComplete: fn, children: /* @__PURE__ */ y.jsx(
            Yt,
            {
              id: Fr,
              ref: e,
              rightSection: oe || Ls || /* @__PURE__ */ y.jsx(le.Chevron, { size: $, error: Ve, unstyled: i }),
              rightSectionPointerEvents: yt || (Ls ? "all" : "none"),
              ...xt,
              size: $,
              __staticSelector: "Select",
              disabled: T,
              readOnly: I || !J,
              value: Ur,
              onChange: (ut) => {
                lt(ut.currentTarget.value), vt.openDropdown(), b && vt.selectFirstOption();
              },
              onFocus: (ut) => {
                J && vt.openDropdown(), h == null || h(ut);
              },
              onBlur: (ut) => {
                var Ft;
                J && vt.closeDropdown(), lt(ze != null && ((Ft = Dt[ze]) == null ? void 0 : Ft.label) || ""), d == null || d(ut);
              },
              onClick: (ut) => {
                J ? vt.openDropdown() : vt.toggleDropdown(), f == null || f(ut);
              },
              classNames: xs,
              styles: Ds,
              unstyled: i,
              pointer: !J,
              error: Ve
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            vd,
            {
              data: Te,
              hidden: I || T,
              filter: k,
              search: Ur,
              limit: E,
              hiddenWhenEmpty: !x,
              withScrollArea: O,
              maxDropdownHeight: H,
              filterOptions: J && ($e == null ? void 0 : $e.label) !== Ur,
              value: ze,
              checkIconPosition: D,
              withCheckIcon: G,
              nothingFoundMessage: x,
              unstyled: i,
              labelId: xt.label ? `${Fr}-label` : void 0,
              "aria-label": xt.label ? void 0 : xt["aria-label"],
              renderOption: pr,
              scrollAreaProps: pn
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
        form: U,
        disabled: T,
        ...fr
      }
    )
  ] });
});
Is.classes = { ...Yt.classes, ...le.classes };
Is.displayName = "@mantine/core/Select";
const DC = {}, wd = se((r, e) => {
  const { w: t, h: n, miw: o, mih: i, ...a } = V("Space", DC, r);
  return /* @__PURE__ */ y.jsx(Q, { ref: e, ...a, w: t, miw: o ?? t, h: n, mih: i ?? n });
});
wd.displayName = "@mantine/core/Space";
var Sd = { root: "m_6d731127" };
const LC = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, FC = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": ka(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Ts = se((r, e) => {
  const t = V("Stack", LC, r), {
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
    classes: Sd,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: FC
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, ...p("root"), variant: d, ...f });
});
Ts.classes = Sd;
Ts.displayName = "@mantine/core/Stack";
const jC = {}, _r = se((r, e) => {
  const t = V("TextInput", jC, r);
  return /* @__PURE__ */ y.jsx(Yt, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
_r.classes = Yt.classes;
_r.displayName = "@mantine/core/TextInput";
const UC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function HC(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return UC.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: A(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var Id = { root: "m_8a5d1357" };
const BC = {
  order: 1
}, zC = (r, { order: e, size: t, lineClamp: n, textWrap: o }) => {
  const i = HC(e, t);
  return {
    root: {
      "--title-fw": i.fontWeight,
      "--title-lh": i.lineHeight,
      "--title-fz": i.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, Lo = se((r, e) => {
  const t = V("Title", BC, r), {
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
    classes: Id,
    className: o,
    style: i,
    classNames: n,
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
      variant: h,
      ref: e,
      mod: [{ order: c, "data-line-clamp": typeof d == "number" }, p],
      size: u,
      ...g
    }
  ) : null;
});
Lo.classes = Id;
Lo.displayName = "@mantine/core/Title";
var Td = { exports: {} }, $C = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", KC = $C, qC = KC;
function Ed() {
}
function _d() {
}
_d.resetWarningCache = Ed;
var VC = function() {
  function r(n, o, i, a, s, c) {
    if (c !== qC) {
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
    checkPropTypes: _d,
    resetWarningCache: Ed
  };
  return t.PropTypes = t, t;
};
Td.exports = VC();
var GC = Td.exports;
const yr = /* @__PURE__ */ dh(GC);
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
}, YC = Object.defineProperty, QC = Object.defineProperties, JC = Object.getOwnPropertyDescriptors, Fo = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, Jc = (r, e, t) => e in r ? YC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Xc = (r, e) => {
  for (var t in e || (e = {}))
    kd.call(e, t) && Jc(r, t, e[t]);
  if (Fo)
    for (var t of Fo(e))
      Ad.call(e, t) && Jc(r, t, e[t]);
  return r;
}, XC = (r, e) => QC(r, JC(e)), ZC = (r, e) => {
  var t = {};
  for (var n in r)
    kd.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Fo)
    for (var n of Fo(r))
      e.indexOf(n) < 0 && Ad.call(r, n) && (t[n] = r[n]);
  return t;
}, Es = (r, e, t) => {
  const n = ye(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: c = 24, stroke: l = 2, children: u } = a, h = ZC(a, ["color", "size", "stroke", "children"]);
      return Fi(
        "svg",
        Xc(XC(Xc({
          ref: i
        }, WC), {
          width: c,
          height: c,
          stroke: s,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${r}`
        }), h),
        [...t.map(([d, f]) => Fi(d, f)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: yr.string,
    size: yr.oneOfType([yr.string, yr.number]),
    stroke: yr.oneOfType([yr.string, yr.number])
  }, n.displayName = `${e}`, n;
}, ew = Es("arrow-down", "IconArrowDown", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M18 13l-6 6", key: "svg-1" }],
  ["path", { d: "M6 13l6 6", key: "svg-2" }]
]), tw = Es("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), rw = Es("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function nw({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ y.jsx(rw, { ...e }) : /* @__PURE__ */ y.jsx(tw, { ...e });
}
const ow = {
  components: {
    Checkbox: Lr.extend({
      defaultProps: {
        icon: nw,
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
        const C = p ? await g[p]().then((b) => (m.ok ? m.data = b : m.error = b, m)).catch((b) => (m.error = b, m)) : m;
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
class Bn extends sw {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Rd = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, cw = !0, lw = "production";
const eo = Bh, ke = Sr;
function uw(r) {
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
var dw = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), el = dw, Ri = () => Math.random().toString(36).substring(7).split("").join("."), hw = {
  INIT: `@@redux/INIT${Ri()}`,
  REPLACE: `@@redux/REPLACE${Ri()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ri()}`
}, jo = hw;
function _s(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Pd(r, e, t) {
  if (typeof r != "function")
    throw new Error(Oe(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(Oe(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(Oe(1));
    return t(Pd)(r, e);
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
    const b = s++;
    return a.set(b, m), function() {
      if (C) {
        if (c)
          throw new Error(Oe(6));
        C = !1, l(), a.delete(b), i = null;
      }
    };
  }
  function d(m) {
    if (!_s(m))
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
    return (i = a).forEach((b) => {
      b();
    }), m;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(Oe(10));
    n = m, d({
      type: jo.REPLACE
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
        function b() {
          const w = C;
          w.next && w.next(u());
        }
        return b(), {
          unsubscribe: m(b)
        };
      },
      [el]() {
        return this;
      }
    };
  }
  return d({
    type: jo.INIT
  }), {
    dispatch: d,
    subscribe: h,
    getState: u,
    replaceReducer: f,
    [el]: p
  };
}
function fw(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: jo.INIT
    }) > "u")
      throw new Error(Oe(12));
    if (typeof t(void 0, {
      type: jo.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Oe(13));
  });
}
function pw(r) {
  const e = Object.keys(r), t = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    typeof r[a] == "function" && (t[a] = r[a]);
  }
  const n = Object.keys(t);
  let o;
  try {
    fw(t);
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
function Uo(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function gw(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let i = () => {
      throw new Error(Oe(15));
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = r.map((c) => c(a));
    return i = Uo(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function mw(r) {
  return _s(r) && "type" in r && typeof r.type == "string";
}
var Nd = Symbol.for("immer-nothing"), tl = Symbol.for("immer-draftable"), st = Symbol.for("immer-state");
function Ct(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var sn = Object.getPrototypeOf;
function sr(r) {
  return !!r && !!r[st];
}
function Kt(r) {
  var e;
  return r ? Md(r) || Array.isArray(r) || !!r[tl] || !!((e = r.constructor) != null && e[tl]) || hi(r) || fi(r) : !1;
}
var yw = Object.prototype.constructor.toString();
function Md(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = sn(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === yw;
}
function Ho(r, e) {
  di(r) === 0 ? Reflect.ownKeys(r).forEach((t) => {
    e(t, r[t], r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function di(r) {
  const e = r[st];
  return e ? e.type_ : Array.isArray(r) ? 1 : hi(r) ? 2 : fi(r) ? 3 : 0;
}
function ca(r, e) {
  return di(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Od(r, e, t) {
  const n = di(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function vw(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function hi(r) {
  return r instanceof Map;
}
function fi(r) {
  return r instanceof Set;
}
function br(r) {
  return r.copy_ || r.base_;
}
function la(r, e) {
  if (hi(r))
    return new Map(r);
  if (fi(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  const t = Md(r);
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
    return Object.create(sn(r), n);
  } else {
    const n = sn(r);
    if (n !== null && t)
      return { ...r };
    const o = Object.create(n);
    return Object.assign(o, r);
  }
}
function ks(r, e = !1) {
  return pi(r) || sr(r) || !Kt(r) || (di(r) > 1 && (r.set = r.add = r.clear = r.delete = bw), Object.freeze(r), e && Object.entries(r).forEach(([t, n]) => ks(n, !0))), r;
}
function bw() {
  Ct(2);
}
function pi(r) {
  return Object.isFrozen(r);
}
var Cw = {};
function Nr(r) {
  const e = Cw[r];
  return e || Ct(0, r), e;
}
var zn;
function xd() {
  return zn;
}
function ww(r, e) {
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
function rl(r, e) {
  e && (Nr("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function ua(r) {
  da(r), r.drafts_.forEach(Sw), r.drafts_ = null;
}
function da(r) {
  r === zn && (zn = r.parent_);
}
function nl(r) {
  return zn = ww(zn, r);
}
function Sw(r) {
  const e = r[st];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ol(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[st].modified_ && (ua(e), Ct(4)), Kt(r) && (r = Bo(e, r), e.parent_ || zo(e, r)), e.patches_ && Nr("Patches").generateReplacementPatches_(
    t[st].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Bo(e, t, []), ua(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== Nd ? r : void 0;
}
function Bo(r, e, t) {
  if (pi(e))
    return e;
  const n = e[st];
  if (!n)
    return Ho(
      e,
      (o, i) => il(r, n, e, o, i, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return zo(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, a = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Ho(
      i,
      (s, c) => il(r, n, o, s, c, t, a)
    ), zo(r, o, !1), t && r.patches_ && Nr("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function il(r, e, t, n, o, i, a) {
  if (sr(o)) {
    const s = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ca(e.assigned_, n) ? i.concat(n) : void 0, c = Bo(r, o, s);
    if (Od(t, n, c), sr(c))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && t.add(o);
  if (Kt(o) && !pi(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Bo(r, o), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(t, n) && zo(r, o);
  }
}
function zo(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && ks(e, t);
}
function Iw(r, e) {
  const t = Array.isArray(r), n = {
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
  let o = n, i = As;
  t && (o = [n], i = $n);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return n.draft_ = s, n.revoke_ = a, s;
}
var As = {
  get(r, e) {
    if (e === st)
      return r;
    const t = br(r);
    if (!ca(t, e))
      return Tw(r, t, e);
    const n = t[e];
    return r.finalized_ || !Kt(n) ? n : n === Pi(r.base_, e) ? (Ni(r), r.copy_[e] = fa(n, r)) : n;
  },
  has(r, e) {
    return e in br(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(br(r));
  },
  set(r, e, t) {
    const n = Dd(br(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = Pi(br(r), e), i = o == null ? void 0 : o[st];
      if (i && i.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (vw(t, o) && (t !== void 0 || ca(r.base_, e)))
        return !0;
      Ni(r), ha(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return Pi(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Ni(r), ha(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = br(r), n = Reflect.getOwnPropertyDescriptor(t, e);
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
    return sn(r.base_);
  },
  setPrototypeOf() {
    Ct(12);
  }
}, $n = {};
Ho(As, (r, e) => {
  $n[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
$n.deleteProperty = function(r, e) {
  return $n.set.call(this, r, e, void 0);
};
$n.set = function(r, e, t) {
  return As.set.call(this, r[0], e, t, r[0]);
};
function Pi(r, e) {
  const t = r[st];
  return (t ? br(t) : r)[e];
}
function Tw(r, e, t) {
  var o;
  const n = Dd(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Dd(r, e) {
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
function ha(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && ha(r.parent_));
}
function Ni(r) {
  r.copy_ || (r.copy_ = la(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ew = class {
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
        const i = nl(this), a = fa(e, void 0);
        let s = !0;
        try {
          o = t(a), s = !1;
        } finally {
          s ? ua(i) : da(i);
        }
        return rl(i, n), ol(o, i);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Nd && (o = void 0), this.autoFreeze_ && ks(o, !0), n) {
          const i = [], a = [];
          Nr("Patches").generateReplacementPatches_(e, o, i, a), n(i, a);
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
    Kt(r) || Ct(8), sr(r) && (r = Ld(r));
    const e = nl(this), t = fa(r, void 0);
    return t[st].isManual_ = !0, da(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[st];
    (!t || !t.isManual_) && Ct(9);
    const { scope_: n } = t;
    return rl(n, e), ol(void 0, n);
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
    const n = Nr("Patches").applyPatches_;
    return sr(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function fa(r, e) {
  const t = hi(r) ? Nr("MapSet").proxyMap_(r, e) : fi(r) ? Nr("MapSet").proxySet_(r, e) : Iw(r, e);
  return (e ? e.scope_ : xd()).drafts_.push(t), t;
}
function Ld(r) {
  return sr(r) || Ct(10, r), Fd(r);
}
function Fd(r) {
  if (!Kt(r) || pi(r))
    return r;
  const e = r[st];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = la(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = la(r, !0);
  return Ho(t, (n, o) => {
    Od(t, n, Fd(o));
  }), e && (e.finalized_ = !1), t;
}
var ct = new Ew(), jd = ct.produce;
ct.produceWithPatches.bind(
  ct
);
ct.setAutoFreeze.bind(ct);
ct.setUseStrictShallowCopy.bind(ct);
ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);
function _w(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function kw(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function Aw(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var al = (r) => Array.isArray(r) ? r : [r];
function Rw(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return Aw(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function Pw(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var Nw = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, Mw = typeof WeakRef < "u" ? WeakRef : Nw, Ow = 0, sl = 1;
function lo() {
  return {
    s: Ow,
    v: void 0,
    o: null,
    p: null
  };
}
function Rs(r, e = {}) {
  let t = lo();
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
    else if (u = r.apply(null, arguments), i++, n) {
      const d = ((h = o == null ? void 0 : o.deref) == null ? void 0 : h.call(o)) ?? o;
      d != null && n(d, u) && (u = d, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new Mw(u) : u;
    }
    return l.s = sl, l.v = u, u;
  }
  return a.clearCache = () => {
    t = lo(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function Ud(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), _w(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...t,
      ...c
    }, {
      memoize: h,
      memoizeOptions: d = [],
      argsMemoize: f = Rs,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, m = al(d), C = al(p), b = Rw(o), v = h(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), w = f(function() {
      a++;
      const T = Pw(
        b,
        arguments
      );
      return s = v.apply(null, T), s;
    }, ...C);
    return Object.assign(w, {
      resultFunc: l,
      memoizedResultFunc: v,
      dependencies: b,
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
var dr = /* @__PURE__ */ Ud(Rs), xw = Object.assign(
  (r, e = dr) => {
    kw(
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
  { withTypes: () => xw }
);
function Hd(r) {
  return ({ dispatch: t, getState: n }) => (o) => (i) => typeof i == "function" ? i(t, n, r) : o(i);
}
var Dw = Hd(), Lw = Hd, Fw = (...r) => {
  const e = Ud(...r), t = Object.assign((...n) => {
    const o = e(...n), i = (a, ...s) => o(sr(a) ? Ld(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => t
  });
  return t;
};
Fw(Rs);
var jw = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Uo : Uo.apply(null, arguments);
}, Uw = (r) => r && typeof r.match == "function";
function Nt(r, e) {
  function t(...n) {
    if (e) {
      let o = e(...n);
      if (!o)
        throw new Error(Xe(0));
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => mw(n) && n.type === r, t;
}
var Bd = class Sn extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Sn.prototype);
  }
  static get [Symbol.species]() {
    return Sn;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Sn(...e[0].concat(this)) : new Sn(...e.concat(this));
  }
};
function cl(r) {
  return Kt(r) ? jd(r, () => {
  }) : r;
}
function ll(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(Xe(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function Hw(r) {
  return typeof r == "boolean";
}
var Bw = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = e ?? {};
  let a = new Bd();
  return t && (Hw(t) ? a.push(Dw) : a.push(Lw(t.extraArgument))), a;
}, zw = "RTK_autoBatch", zd = (r) => (e) => {
  setTimeout(e, r);
}, $w = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : zd(10), Kw = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = r.type === "tick" ? queueMicrotask : r.type === "raf" ? $w : r.type === "callback" ? r.queueNotification : zd(r.timeout), l = () => {
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
        return o = !((h = u == null ? void 0 : u.meta) != null && h[zw]), i = !o, i && (a || (a = !0, c(l))), n.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, qw = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Bd(r);
  return n && o.push(Kw(typeof n == "object" ? n : void 0)), o;
}, Vw = !0;
function Gw(r) {
  const e = Bw(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = r || {};
  let s;
  if (typeof t == "function")
    s = t;
  else if (_s(t))
    s = pw(t);
  else
    throw new Error(Xe(1));
  let c;
  typeof n == "function" ? c = n(e) : c = e();
  let l = Uo;
  o && (l = jw({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Vw,
    ...typeof o == "object" && o
  }));
  const u = gw(...c), h = qw(u);
  let d = typeof a == "function" ? a(h) : h();
  const f = l(...d);
  return Pd(s, i, f);
}
function $d(r) {
  const e = {}, t = [];
  let n;
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
      return n = i, o;
    }
  };
  return r(o), [e, t, n];
}
function Ww(r) {
  return typeof r == "function";
}
function Yw(r, e) {
  let [t, n, o] = $d(e), i;
  if (Ww(r))
    i = () => cl(r());
  else {
    const s = cl(r);
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
        if (sr(u)) {
          const f = h(u, c);
          return f === void 0 ? u : f;
        } else {
          if (Kt(u))
            return jd(u, (d) => h(d, c));
          {
            const d = h(u, c);
            if (d === void 0) {
              if (u === null)
                return u;
              throw new Error(Xe(9));
            }
            return d;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = i, a;
}
var Qw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Kd = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Qw[Math.random() * 64 | 0];
  return e;
}, Jw = (r, e) => Uw(r) ? r.match(e) : r(e);
function Xw(...r) {
  return (e) => r.some((t) => Jw(t, e));
}
var Zw = ["name", "message", "stack", "code"], Mi = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, ul = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, eS = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of Zw)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, Qt = /* @__PURE__ */ (() => {
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
      error: (n && n.serializeError || eS)(c || "Rejected"),
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
        const d = n != null && n.idGenerator ? n.idGenerator(c) : Kd(), f = new AbortController();
        let p, g;
        function m(b) {
          g = b, f.abort();
        }
        const C = async function() {
          var w, I;
          let b;
          try {
            let T = (w = n == null ? void 0 : n.condition) == null ? void 0 : w.call(n, c, {
              getState: u,
              extra: h
            });
            if (rS(T) && (T = await T), T === !1 || f.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const k = new Promise((E, O) => {
              p = () => {
                O({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, f.signal.addEventListener("abort", p);
            });
            l(i(d, c, (I = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : I.call(n, {
              requestId: d,
              arg: c
            }, {
              getState: u,
              extra: h
            }))), b = await Promise.race([k, Promise.resolve(t(c, {
              dispatch: l,
              getState: u,
              extra: h,
              requestId: d,
              signal: f.signal,
              abort: m,
              rejectWithValue: (E, O) => new Mi(E, O),
              fulfillWithValue: (E, O) => new ul(E, O)
            })).then((E) => {
              if (E instanceof Mi)
                throw E;
              return E instanceof ul ? o(E.payload, d, c, E.meta) : o(E, d, c);
            })]);
          } catch (T) {
            b = T instanceof Mi ? a(null, d, c, T.payload, T.meta) : a(T, d, c);
          } finally {
            p && f.signal.removeEventListener("abort", p);
          }
          return n && !n.dispatchConditionRejection && a.match(b) && b.meta.condition || l(b), b;
        }();
        return Object.assign(C, {
          abort: m,
          requestId: d,
          arg: c,
          unwrap() {
            return C.then(tS);
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
  return r.withTypes = () => r, r;
})();
function tS(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function rS(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var nS = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function oS(r, e) {
  return `${r}/${e}`;
}
function iS({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[nS];
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
        const I = typeof v == "string" ? v : v.type;
        if (!I)
          throw new Error(Xe(12));
        if (I in l.sliceCaseReducersByType)
          throw new Error(Xe(13));
        return l.sliceCaseReducersByType[I] = w, u;
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
      const w = s[v], I = {
        reducerName: v,
        type: oS(i, v),
        createNotation: typeof o.reducers == "function"
      };
      lS(w) ? dS(I, w, u, e) : cS(I, w, u);
    });
    function h() {
      const [v = {}, w = [], I = void 0] = typeof o.extraReducers == "function" ? $d(o.extraReducers) : [o.extraReducers], T = {
        ...v,
        ...l.sliceCaseReducersByType
      };
      return Yw(o.initialState, (k) => {
        for (let E in T)
          k.addCase(E, T[E]);
        for (let E of l.sliceMatchers)
          k.addMatcher(E.matcher, E.reducer);
        for (let E of w)
          k.addMatcher(E.matcher, E.reducer);
        I && k.addDefaultCase(I);
      });
    }
    const d = (v) => v, f = /* @__PURE__ */ new Map();
    let p;
    function g(v, w) {
      return p || (p = h()), p(v, w);
    }
    function m() {
      return p || (p = h()), p.getInitialState();
    }
    function C(v, w = !1) {
      function I(k) {
        let E = k[v];
        return typeof E > "u" && w && (E = m()), E;
      }
      function T(k = d) {
        const E = ll(f, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return ll(E, k, {
          insert: () => {
            const O = {};
            for (const [H, $] of Object.entries(o.selectors ?? {}))
              O[H] = aS($, k, m, w);
            return O;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: T,
        get selectors() {
          return T(I);
        },
        selectSlice: I
      };
    }
    const b = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: m,
      ...C(a),
      injectInto(v, {
        reducerPath: w,
        ...I
      } = {}) {
        const T = w ?? a;
        return v.inject({
          reducerPath: T,
          reducer: g
        }, I), {
          ...b,
          ...C(T, !0)
        };
      }
    };
    return b;
  };
}
function aS(r, e, t, n) {
  function o(i, ...a) {
    let s = e(i);
    return typeof s > "u" && n && (s = t()), r(s, ...a);
  }
  return o.unwrapped = r, o;
}
var gi = /* @__PURE__ */ iS();
function sS() {
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
function cS({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let i, a;
  if ("reducer" in n) {
    if (t && !uS(n))
      throw new Error(Xe(17));
    i = n.reducer, a = n.prepare;
  } else
    i = n;
  o.addCase(r, i).exposeCaseReducer(e, i).exposeAction(e, a ? Nt(r, a) : Nt(r));
}
function lS(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function uS(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function dS({
  type: r,
  reducerName: e
}, t, n, o) {
  if (!o)
    throw new Error(Xe(18));
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = t, h = o(r, i, u);
  n.exposeAction(e, h), a && n.addCase(h.fulfilled, a), s && n.addCase(h.pending, s), c && n.addCase(h.rejected, c), l && n.addMatcher(h.settled, l), n.exposeCaseReducer(e, {
    fulfilled: a || uo,
    pending: s || uo,
    rejected: c || uo,
    settled: l || uo
  });
}
function uo() {
}
var hS = (r, e) => {
  if (typeof r != "function")
    throw new Error(Xe(32));
}, Ps = "listenerMiddleware", fS = (r) => {
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
    throw new Error(Xe(21));
  return hS(i), {
    predicate: o,
    type: e,
    effect: i
  };
}, pS = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = fS(r);
  return {
    id: Kd(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Xe(22));
    }
  };
}, {
  withTypes: () => pS
}), gS = Object.assign(Nt(`${Ps}/add`), {
  withTypes: () => gS
});
Nt(`${Ps}/removeAll`);
var mS = Object.assign(Nt(`${Ps}/remove`), {
  withTypes: () => mS
});
function Xe(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
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
}, dl = (r, e) => {
  r.language = e.payload, xe.changeLanguage(e.payload);
}, qd = Nt("settings/setSettings"), Vd = gi({
  name: "settings",
  initialState: vS,
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
    setLanguage: dl,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      qd,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(i) && (e.filterDictionaries = i), JSON.stringify(e.language) !== JSON.stringify(a) && dl(e, { payload: a, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(s) && (e.includeTestDictionaries = s);
      }
    );
  }
}), pa = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Rd[e] : null;
}, Gd = dr(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
), bS = dr(Gd, (r) => new Map(
  r.map((t) => [t.ifcClassification.location, t.ifcClassification])
)), Ns = (r) => r.settings.mainDictionary, Wd = (r) => r.settings.language, CS = (r) => r.settings.includeTestDictionaries, wS = dr(
  Gd,
  (r) => r.map((e) => e.ifcClassification.location)
), SS = dr(
  Ns,
  (r) => r ? r.ifcClassification.location : null
);
Vd.actions;
const IS = Vd.reducer, ga = 500, TS = 500;
let qe = null, ho = {};
const hl = {
  mainDictionaryClassification: null,
  mainDictionaryClassificationUri: null,
  classes: {},
  propertyNamesByLanguage: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1,
  groupedClassRelations: {}
}, ES = (r) => {
  const e = pa(r);
  return e && (!qe || qe.baseUrl !== e) && (qe = new Bn(e)), qe;
}, fl = Qt("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new Bn(r), o = TS;
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
}), _S = Qt("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
  if (!r || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const n = new Bn(r), o = {};
  return await Promise.all(
    e.map(async (i) => {
      var a;
      try {
        const s = await n.api.dictionaryV1List({ Uri: i }, { headers: to });
        s.ok && s.data ? (a = s.data.dictionaries) == null || a.forEach((c) => {
          o[c.uri] = c;
        }) : console.error(`Failed to fetch dictionaries for URI: ${i}`);
      } catch (s) {
        console.error(`Error fetching dictionaries for URI: ${i}`, s);
      }
    })
  ), o;
});
async function pl(r, e, t, n) {
  const o = await r.api.dictionaryV1ClassesList(
    {
      Uri: e,
      UseNestedClasses: !1,
      ClassType: "Class",
      Offset: t,
      Limit: ga,
      languageCode: n
    },
    { headers: to }
  );
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const kS = async (r, e, t) => {
  const n = [];
  let o = 0;
  const i = await pl(r, e, o, t), a = i.classesTotalCount;
  if (a == null)
    throw new Error("Total count is null or undefined");
  n.push(...i.classes ?? []);
  const s = [];
  for (o = ga; o < a; o += ga)
    s.push(pl(r, e, o, t));
  return (await Promise.all(s)).forEach((l) => {
    n.push(...l.classes ?? []);
  }), n;
}, Ms = Qt(
  "bsdd/fetchDictionaryClasses",
  async ({ location: r, languageCode: e }, { getState: t, dispatch: n }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[r])
      return o.bsdd.dictionaryClasses[r];
    if (ho[r])
      return ho[r];
    const i = ES(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const a = kS(i, r, e).then((s) => (n({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: s } }), s)).finally(() => {
      delete ho[r];
    });
    return ho[r] = a, a;
  }
), AS = Qt(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n, languageCode: o } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((i) => e(Ms({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), Yd = Qt(
  "bsdd/updateDictionaries",
  async (r) => r
), Qd = Qt(
  "bsdd/updatePropertyNaturalLanguageNames",
  async ({ classProperties: r, languageCode: e }) => {
    if (!qe)
      throw new Error("BsddApi is not initialized");
    const t = {}, n = async (i) => {
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
    }, o = r.map(n);
    return await Promise.all(o), { languageCode: e, propertyNames: t };
  }
), Mn = gi({
  name: "bsdd",
  initialState: hl,
  reducers: {
    resetState: () => hl,
    setMainDictionaryClassification: (r, e) => {
      r.mainDictionaryClassification = e.payload;
    },
    setMainDictionaryClassificationUri: (r, e) => {
      r.mainDictionaryClassificationUri = e.payload;
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
      Qd.fulfilled,
      (e, t) => {
        const { languageCode: n, propertyNames: o } = t.payload;
        e.propertyNamesByLanguage[n] = o;
      }
    ).addCase(fl.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      fl.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(Ms.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(Yd.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, i) => (o[i] = e.dictionaries[i], o), {});
    });
  }
}), Jd = Qt(
  "bsdd/fetchClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e(), o = n.settings.language;
    if (!qe)
      throw new Error("BsddApi is not initialized");
    const i = { ...n.bsdd.classes }, a = async (c) => {
      if (!i[c])
        if (qe && qe.api) {
          const l = await qe.api.classV1List({
            Uri: c,
            languageCode: o
          });
          if (!l.ok)
            throw new Error(`HTTP error! status: ${l.status}`);
          const { data: u } = l;
          i[c] = u;
        } else
          throw new Error("bsddApi or bsddApi.api is not initialized");
    }, s = r.map(a);
    await Promise.all(s), t({ type: "bsdd/setClasses", payload: i });
  }
), Xd = (r) => r.bsdd.mainDictionaryClassification, RS = (r) => r.bsdd.mainDictionaryClassificationUri, Zd = (r) => r.bsdd.dictionaries, PS = (r) => r.bsdd.classes, NS = (r) => r.bsdd.propertyNamesByLanguage, MS = dr([PS], (r) => Object.values(r).reduce((n, o) => {
  const { dictionaryUri: i } = o;
  return i && (n[i] || (n[i] = []), n[i].push(o)), n;
}, {})), {
  resetState: dI,
  setMainDictionaryClassification: OS,
  setMainDictionaryClassificationUri: hI,
  addDictionaryClasses: fI,
  addDictionary: pI
} = Mn.actions, eh = Qt(
  "bsdd/fetchMainDictionaryClassification",
  async (r, { getState: e, dispatch: t }) => {
    if (!qe)
      throw new Error("BsddApi is not initialized");
    const o = e().settings.language, i = {
      headers: to
    }, a = {
      Uri: r,
      IncludeClassRelations: !0,
      IncludeClassProperties: !0,
      languageCode: o
    };
    try {
      const s = await qe.api.classV1List(a, i);
      if (s.status !== 200)
        return console.error(`API request failed with status ${s.status}`), null;
      const c = s.data;
      t(OS(c));
      const l = c == null ? void 0 : c.classProperties;
      return l && l.length > 0 && t(Qd({ classProperties: l, languageCode: o })), c;
    } catch (s) {
      return console.error("Error fetching classification:", s), null;
    }
  }
), ma = Qt(
  "bsdd/updateMainDictionaryClassificationUri",
  async (r, { dispatch: e, getState: t }) => {
    const n = t();
    if (r !== n.bsdd.mainDictionaryClassificationUri)
      if (e(Mn.actions.setMainDictionaryClassificationUri(r)), r === null)
        e(Mn.actions.setMainDictionaryClassification(null));
      else {
        const i = (await e(eh(r))).payload;
        if (e(Mn.actions.setMainDictionaryClassification(i)), i != null && i.classRelations) {
          const a = i.classRelations.map(
            (s) => s.relatedClassUri
          );
          a.push(i.uri), await e(Jd(a));
        }
      }
  }
), xS = Mn.reducer, DS = {
  type: void 0,
  name: void 0,
  description: void 0,
  objectType: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
};
function Oi(r, e, t) {
  let n = r.objectType, o = r.predefinedType;
  e ? !t || t === "NOTDEFINED" ? o = "USERDEFINED" : o = t : (n = "", !t || t === "USERDEFINED" ? o = "NOTDEFINED" : o = t), r.objectType !== n && (r.objectType = n), r.predefinedType !== o && (r.predefinedType = o);
}
function gl(r, e) {
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
function ml(r, e) {
  const t = JSON.stringify(r.hasAssociations), n = JSON.stringify(e);
  t !== n && (r.hasAssociations = e);
}
const th = gi({
  name: "ifcEntity",
  initialState: DS,
  reducers: {
    setIfcEntity: (r, e) => {
      r.type !== e.payload.type && (r.type = e.payload.type), r.name !== e.payload.name && (r.name = e.payload.name), r.description !== e.payload.description && (r.description = e.payload.description), Oi(r, e.payload.objectType, e.payload.predefinedType), r.tag !== e.payload.tag && (r.tag = e.payload.tag), gl(r, e.payload.isDefinedBy), ml(r, e.payload.hasAssociations);
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
      Oi(r, e.payload, r.predefinedType);
    },
    setTag: (r, e) => {
      r.tag = e.payload;
    },
    setPredefinedType: (r, e) => {
      r.predefinedType = e.payload, Oi(r, r.objectType, e.payload);
    },
    setIsDefinedBy: (r, e) => {
      gl(r, e.payload);
    },
    setHasAssociations: (r, e) => {
      ml(r, e.payload);
    }
  }
}), LS = (r) => r.ifcEntity, Os = (r) => r.ifcEntity.isDefinedBy, rh = (r) => r.ifcEntity.hasAssociations, FS = dr(
  rh,
  (r) => (r == null ? void 0 : r.filter(
    (n) => n && n.type === "IfcClassificationReference"
  )).reduce((n, o) => {
    var a;
    const i = (a = o == null ? void 0 : o.referencedSource) == null ? void 0 : a.location;
    return i && (n[i] || (n[i] = []), n[i].push(o)), n;
  }, {})
), { setIfcEntity: jS, setName: gI, setDescription: mI, setTag: yI, setPredefinedType: vI, setIsDefinedBy: po, setHasAssociations: US } = th.actions, HS = th.reducer;
function BS({ callback: r, ifcEntity: e }) {
  const { t } = Wo();
  ke(Zd);
  const n = Sr(Os), o = Sr(rh);
  function i(s) {
    const c = s ? { ...JSON.parse(JSON.stringify(s)) } : { hasAssociations: [], isDefinedBy: [] };
    return c.isDefinedBy = n == null ? void 0 : n.filter((l) => l.name !== "Attributes"), c.hasAssociations = [], o == null || o.forEach((l) => {
      var u, h, d;
      if (l.type === "IfcClassificationReference" && ((h = (u = l == null ? void 0 : l.referencedSource) == null ? void 0 : u.location) != null && h.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))) {
        const { type: f, predefinedType: p } = uw(l.identification);
        f && (c.type = f), p && (c.predefinedType = p), c.predefinedType || (c.predefinedType = "NOTDEFINED");
      } else
        (d = c.hasAssociations) == null || d.push(l);
    }), c;
  }
  const a = () => {
    const s = i(e);
    console.log(s), r(s);
  };
  return /* @__PURE__ */ y.jsx(Zn, { color: "gray", fullWidth: !0, onClick: a, variant: "filled", children: t("apply") });
}
const yl = 25, zS = 25;
function $S({ height: r, options: e, label: t, value: n, setValue: o, placeholder: i = "Search values", disabled: a }) {
  const [s, c] = Z(""), [l, u] = Z(e.slice(0, yl)), h = ue(null), d = li({
    onDropdownClose: () => {
      d.resetSelectedOption(), d.focusTarget();
    },
    onDropdownOpen: () => {
      d.focusSearchInput();
    }
  });
  W(() => {
    e.length === 1 && n !== e[0] && (o(e[0]), c(e[0].label));
  }, [e, o, n, c]), W(() => {
    c((n == null ? void 0 : n.label) || "");
  }, [n]), W(() => {
    const g = n === null ? e.filter(
      (m) => (m == null ? void 0 : m.label.toLowerCase().includes(s.toLowerCase().trim())) || (m == null ? void 0 : m.value.toString().toLowerCase().includes(s.toLowerCase().trim()))
    ) : e;
    u(g.slice(0, yl));
  }, [e, s, n]);
  const f = (g) => {
    const { scrollTop: m, scrollHeight: C, clientHeight: b } = g.currentTarget, v = 5;
    C - m <= b + v && u((I) => {
      const T = I.length, k = e.filter((E) => E == null ? void 0 : E.label.toLowerCase().includes(s.toLowerCase().trim())).slice(T, T + zS);
      return [...I, ...k];
    });
  }, p = On(() => l.map((g) => /* @__PURE__ */ y.jsx(le.Option, { value: g.value, active: (n == null ? void 0 : n.value) === g.value, children: /* @__PURE__ */ y.jsxs(Un, { gap: "sm", children: [
    (n == null ? void 0 : n.value) === g.value ? /* @__PURE__ */ y.jsx(ys, { size: 12 }) : null,
    /* @__PURE__ */ y.jsx(Do, { fz: "sm", opacity: a ? 0.6 : 1, children: g.label }),
    /* @__PURE__ */ y.jsxs(Do, { fz: "xs", opacity: 0.6, children: [
      "(",
      g.value,
      ")"
    ] })
  ] }) }, g.value)), [l, n, a]);
  return /* @__PURE__ */ y.jsx("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: /* @__PURE__ */ y.jsxs(
    le,
    {
      store: d,
      onOptionSubmit: (g) => {
        if (!a) {
          const m = e.find((b) => b.value === g), C = m && (n == null ? void 0 : n.value) !== m.value ? m : null;
          o(C), d.closeDropdown();
        }
      },
      disabled: a,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            rightSection: !a && /* @__PURE__ */ y.jsx(
              hn,
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
          ei,
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
function KS({ height: r, handleMouseDown: e }) {
  const t = eo(), { t: n } = Wo(), [o, i] = Z(/* @__PURE__ */ new Map()), [a, s] = Z(/* @__PURE__ */ new Map()), c = ke(bS), l = ke(FS), u = Sr(Zd), h = Sr(MS), d = Sr(Xd), f = Sr(SS);
  return W(() => {
    (async () => {
      const m = Array.from(c.entries()).map(async ([w, I]) => {
        var H;
        if (d && w === f) {
          const { code: $, name: J, uri: oe } = d;
          return [
            w,
            [
              {
                value: $,
                label: J,
                uri: oe
              }
            ]
          ];
        }
        let T = [];
        const k = h[w], E = (H = d == null ? void 0 : d.classRelations) == null ? void 0 : H.map(
          ($) => $.relatedClassUri
        ), O = k == null ? void 0 : k.filter(($) => E == null ? void 0 : E.includes($.uri));
        if (O && O.length > 0)
          T = O.map(($) => ({
            value: $.code,
            label: $.name,
            uri: $.uri
          }));
        else
          try {
            T = (await t(
              Ms({
                location: w,
                languageCode: "nl-NL"
              })
            ).unwrap()).map(
              (J) => ({
                value: J.code,
                label: J.name || "",
                uri: J.uri
              })
            );
          } catch ($) {
            console.error("Failed to fetch dictionary classes for", w, $), T = [];
          }
        return [w, T];
      }), C = await Promise.all(m), b = new Map(C);
      i(b);
      const v = /* @__PURE__ */ new Map();
      b.forEach((w, I) => {
        if (w.length === 1)
          v.set(I, w[0]);
        else if (I in l) {
          const T = l[I];
          if (T.length === 1) {
            const k = T[0];
            if (w.some((O) => O.value === k.identification)) {
              const O = {
                label: k.name || "",
                value: k.identification || "",
                uri: I
              };
              v.set(I, O);
            }
          }
        }
      }), s(v);
    })();
  }, [
    c,
    h,
    t,
    l,
    d,
    f
  ]), W(() => {
    (() => {
      const g = Array.from(a.entries()).map(([m, C]) => {
        if (!C || !C.value)
          return null;
        const b = u[m];
        return {
          type: "IfcClassificationReference",
          name: C.label,
          location: C.uri,
          identification: C.value,
          referencedSource: {
            type: "IfcClassification",
            name: b.name,
            location: b.uri,
            edition: b.version,
            editionDate: b.releaseDate
          }
        };
      }).filter((m) => m !== null);
      g.length > 0 && t(US(g));
    })();
  }, [u, t, a]), /* @__PURE__ */ y.jsxs(ei, { style: { height: `${r}px`, position: "relative" }, children: [
    Array.from(c.entries()).map(([p, g]) => {
      var m;
      return /* @__PURE__ */ y.jsx(
        $S,
        {
          height: r,
          label: g.name,
          options: o.get(p) || [],
          value: a.get(p) || null,
          setValue: (C) => {
            const b = new Map(a);
            b.set(p, C), s(b);
          },
          placeholder: n("searchClassesPlaceholder"),
          disabled: p === (d == null ? void 0 : d.dictionaryUri) || ((m = o.get(p)) == null ? void 0 : m.length) === 1
        },
        p
      );
    }),
    /* @__PURE__ */ y.jsx(ws, { onMouseDown: e, style: { marginTop: "4px" }, children: /* @__PURE__ */ y.jsx(ii, { m: "xxs", variant: "outline", size: "lg", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ y.jsx(ew, {}) }) })
  ] });
}
const qS = {
  loadedIfcEntities: []
}, nh = gi({
  name: "ifcData",
  initialState: qS,
  reducers: {
    setLoadedIfcEntities: (r, e) => {
      r.loadedIfcEntities = e.payload;
    }
  }
}), { setLoadedIfcEntities: VS } = nh.actions, GS = (r) => r.ifcData.loadedIfcEntities, oh = dr(GS, (r) => r[0]), WS = nh.reducer;
function YS({ label: r, description: e, value: t, setValue: n, disabled: o }) {
  const [i, a] = Z(!1), [s, c] = Z(!0), l = (u) => {
    u.target.indeterminate = !1, n(u.target.checked);
  };
  return W(() => {
    t === !0 ? (a(!0), c(!1)) : t === !1 ? (a(!1), c(!1)) : t === void 0 && (a(!1), c(!0));
  }, [t]), /* @__PURE__ */ y.jsx(
    Lr,
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
const xi = (r, e, t, n) => r.map((o) => {
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
function QS({ propertySet: r, property: e, property_natural_language_name: t }) {
  const n = eo(), o = ke(Os), [i, a] = Z();
  return W(() => {
    var s, c, l, u, h;
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
              setValue: (d) => {
                if (o && r.name) {
                  const f = {
                    nominalValue: { ...e.nominalValue, value: d }
                  }, p = xi(
                    o,
                    r.name,
                    e.name,
                    f
                  );
                  n(po(Object.values(p)));
                }
              }
            }
          )
        ) : a(
          /* @__PURE__ */ y.jsx(
            _r,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              placeholder: e.nominalValue.value,
              value: e.nominalValue.value || "",
              onChange: (d) => {
                if (o && r.name) {
                  const f = {
                    nominalValue: { ...e.nominalValue, value: d.target.value }
                  }, p = xi(o, r.name, e.name, f);
                  n(po(Object.values(p)));
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
            Is,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              value: d,
              disabled: ((h = (u = e.enumerationReference) == null ? void 0 : u.enumerationValues) == null ? void 0 : h.length) === 1,
              onChange: (p) => {
                if (o && r.name) {
                  const g = f.find((b) => b.value === p), m = {
                    enumerationValues: g ? [g] : []
                  }, C = xi(o, r.name, e.name, m);
                  n(po(Object.values(C)));
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
        a(/* @__PURE__ */ y.jsx(_r, { placeholder: e.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [e, r, a, t, n, o]), i;
}
const JS = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function $o(r, e) {
  const t = r && JS[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function ih(r, e, t) {
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
function XS(r, e, t, n) {
  var a;
  const o = ih(e, t, n), i = ((a = o == null ? void 0 : o.nominalValue) == null ? void 0 : a.value) ?? null;
  return $o(r, i);
}
function ZS(r, e, t, n, o) {
  const i = ih(e, t, n);
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
function eI(r, e, t, n) {
  var s;
  const o = ((s = r.allowedValues) == null ? void 0 : s.map(
    (c) => $o(r.dataType, c.value)
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
  const a = r.predefinedValue ? [$o(r.dataType, r.predefinedValue)] : ZS(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return a.length > 0 && (i.enumerationValues = a), i;
}
function tI(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e,
    specification: r.propertyUri || ""
  }, i = r.predefinedValue ? $o(r.dataType, r.predefinedValue) : XS(r.dataType, n, t, e);
  return i !== null && (o.nominalValue = i), o;
}
function rI(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown", i = r.allowedValues ? eI(r, o, e, t) : tI(r, o, e, t);
  return i.specification = r.propertyUri || "", i;
}
function nI({ mainDictionaryClassification: r, recursiveMode: e }) {
  const t = eo(), n = ke(oh), o = ke(Os), i = ke(NS), a = ke(Wd), [s, c] = Z({});
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
        }), l[p].hasProperties.push(
          rI(f, p, n)
        );
      });
    }), t(po(Object.values(l)));
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
  }, [r, e, n, i, a]), /* @__PURE__ */ y.jsx("div", { children: Li.toArray(
    o == null ? void 0 : o.map((l) => /* @__PURE__ */ y.jsx(Ne, { children: /* @__PURE__ */ y.jsxs(Ne.Item, { value: l.name || "Unknown", children: [
      /* @__PURE__ */ y.jsx(Ne.Control, { children: l.name }),
      /* @__PURE__ */ y.jsx(Ne.Panel, { children: /* @__PURE__ */ y.jsx(Ts, { children: Li.toArray(
        l.hasProperties.map((u) => {
          const h = u.specification ? s[u.specification] : "";
          return /* @__PURE__ */ y.jsx(
            QS,
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
function oI({ api: r, defaultSelection: e }) {
  const t = eo(), { t: n } = Wo(), [o, i] = Z([]), a = ke(Ns), s = ue(null), [c, l] = Z(void 0), [u, h] = Z(""), [d] = Gg(u, 300), [f, p] = Z(!1);
  W(() => {
    e && (l(e), h(e.label));
  }, [e]);
  const g = me((v) => {
    h(v);
  }, []), m = me(
    (v) => {
      const w = o.find((I) => I.value === v);
      w && (l(w), p(!0));
    },
    [o]
  ), C = me(
    (v) => {
      v.key === "Enter" && o[0] && (h(o[0].label), m(o[0].value), s.current && s.current.blur());
    },
    [o, m]
  );
  W(() => {
    e && !f && (h(e.label), l(e));
  }, [e, f]), W(() => {
    if (a) {
      t(Jd([]));
      const v = {
        headers: to
      }, w = {
        SearchText: d,
        DictionaryUri: a.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(w, v).then((I) => {
        var k;
        const T = I.data;
        if (T) {
          if (T.count) {
            const E = (k = T.dictionary) == null ? void 0 : k.classes;
            E && i(
              E.filter((O) => O.uri && O.name).map(
                (O) => ({
                  value: O.uri,
                  label: O.name
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
      i([]);
  }, [r.api, d, t, a]), W(() => {
    s.current && s.current.focus();
  }, []), W(() => {
    t(ma(c ? c.value : null));
  }, [t, c]);
  const b = me(() => {
    g(""), s.current && s.current.focus(), l(void 0);
  }, [g]);
  return /* @__PURE__ */ y.jsx(
    bs,
    {
      label: `${n("searchMainDictionaryLabel")} ${a ? a.ifcClassification.name : ""}`,
      data: o,
      placeholder: "bSDD search...",
      value: u,
      onChange: g,
      onOptionSubmit: m,
      onKeyDown: C,
      ref: s,
      style: { width: "100%" },
      rightSection: /* @__PURE__ */ y.jsx(
        hn,
        {
          size: "sm",
          onMouseDown: (v) => {
            v.preventDefault();
          },
          onClick: b,
          "aria-label": "Clear value"
        }
      )
    }
  );
}
const Di = 60.7969;
let vl = 0, bl = 0;
function iI() {
  const { t: r } = Wo(), e = eo(), [t, n] = Z(), [o, i] = Z(!1), [a, s] = Z(new Bn(Rd[lw])), c = ke(Ns), l = ke(Wd), [u, h] = Z(null), d = ke(pa), f = ke(pa), p = ke(CS), g = ke(wS), m = ke(LS), C = ke(oh), b = ke(RS), [v, w] = Z(Di), [I, T] = Z("auto"), k = ke(Xd), E = me((D) => {
    var x;
    const G = JSON.stringify(D);
    (x = window == null ? void 0 : window.bsddBridge) == null || x.save(G).then((F) => {
      console.log("Sent to Revit", F);
    });
  }, []), O = me(() => {
    var D;
    (D = window == null ? void 0 : window.bsddBridge) == null || D.cancel();
  }, []), H = (D) => {
    h(D);
  };
  W(() => {
    u && (console.log("settings updated: ", u), e(qd(u)), h(null));
  }, [u, e]), W(() => {
    d && s(new Bn(d));
  }, [d]), W(() => {
    (async () => {
      try {
        let G, x;
        if (cw && window != null && window.bsddBridge) {
          const F = await window.bsddBridge.loadSettings();
          ({ settings: G, ifcData: x } = JSON.parse(F));
        }
        if (G && H(G), x && (e(VS(x)), x.length > 0)) {
          const F = x[0];
          e(jS(F));
        }
      } catch (G) {
        console.error("Failed to load settings:", G);
      }
    })();
  }, [e]), W(() => {
    var G;
    if (!C || !c)
      return;
    const D = c.ifcClassification.location;
    (G = C.hasAssociations) == null || G.forEach((x) => {
      var F;
      if (x.type === "IfcClassificationReference") {
        const U = x;
        (F = U.referencedSource) != null && F.location && U.referencedSource.location === D && (U.location && e(ma(U.location)), n({
          label: U.name,
          value: U.location
        }));
      }
    });
  }, [c, C, e]), W(() => {
    if (d !== null && p !== null) {
      const D = {
        bsddApiEnvironment: d,
        includeTestDictionaries: p,
        languageCode: l,
        dictionaryUris: g
      };
      e(Yd(g)), e(_S(D)), e(AS(D));
    }
  }, [
    d,
    f,
    p,
    e,
    g,
    l
  ]), W(() => {
    b && e(eh(b));
  }, [b, e]), W(() => {
    T(`${v * g.length + 48}px`);
  }, [g.length, v]);
  const $ = (D) => {
    const G = bl + (D.clientY - vl) / g.length;
    w(G > Di ? G : Di);
  }, J = () => {
    document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", J);
  }, oe = (D) => {
    vl = D.clientY, bl = v, document.addEventListener("mousemove", $), document.addEventListener("mouseup", J);
  };
  return /* @__PURE__ */ y.jsxs(Ss, { children: [
    /* @__PURE__ */ y.jsx(_r, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ y.jsx(_r, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ y.jsx(_r, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ y.jsx(Un, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ y.jsx(oI, { api: a, defaultSelection: t }) }),
    b ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs(Ne, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ y.jsxs(Ne.Item, { value: "Classifications", children: [
          /* @__PURE__ */ y.jsx(Ne.Control, { children: /* @__PURE__ */ y.jsx(Lo, { order: 5, children: r("classificationsLabel") }) }),
          /* @__PURE__ */ y.jsx(Ne.Panel, { style: { height: I }, children: /* @__PURE__ */ y.jsx(KS, { height: v, handleMouseDown: oe }) })
        ] }, "Classifications"),
        /* @__PURE__ */ y.jsxs(Ne.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ y.jsx(Ne.Control, { children: /* @__PURE__ */ y.jsx(Lo, { order: 5, children: r("propertysetsLabel") }) }),
          /* @__PURE__ */ y.jsx(Ne.Panel, { children: /* @__PURE__ */ y.jsx(
            nI,
            {
              mainDictionaryClassification: k,
              recursiveMode: o
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ y.jsxs(Un, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ y.jsx(BS, { callback: E, ifcEntity: m }),
        /* @__PURE__ */ y.jsx(Zn, { fullWidth: !0, variant: "light", color: "gray", onClick: O, children: r("cancel") })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs(ns, { mx: "md", title: r("noClassificationSelected"), mt: "xl", children: [
      r("classSearchInstruction"),
      /* @__PURE__ */ y.jsx(wd, { h: "md" }),
      r("needHelp"),
      " ",
      /* @__PURE__ */ y.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: r("checkDocumentation") })
    ] })
  ] });
}
function aI() {
  const [r, e] = Z(null);
  return W(() => {
    const t = new Pg(iw);
    e(t);
  }, []), r ? /* @__PURE__ */ y.jsx(lu, { theme: ow, children: /* @__PURE__ */ y.jsx(iI, {}) }) : /* @__PURE__ */ y.jsx("div", { children: "Loading..." });
}
const sI = Gw({
  reducer: {
    settings: IS,
    ifcData: WS,
    ifcEntity: HS,
    bsdd: xS
  }
});
ji.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ y.jsx(Ko.StrictMode, { children: /* @__PURE__ */ y.jsx(jh, { store: sI, children: /* @__PURE__ */ y.jsx(aI, {}) }) })
);
