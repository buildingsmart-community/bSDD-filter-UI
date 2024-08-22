var Hf = Object.defineProperty;
var Bf = (n, e, t) => e in n ? Hf(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Qe = (n, e, t) => (Bf(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as U from "react";
import Xo, { createContext as Cn, useContext as nn, useState as te, useRef as ue, useEffect as X, Fragment as Vl, useMemo as Br, useCallback as me, useLayoutEffect as xa, useId as Gl, forwardRef as Ce, cloneElement as gr, Children as Yi, createElement as Qi } from "react";
import * as zf from "react-dom";
import Wl, { flushSync as $f, createPortal as Kf } from "react-dom";
function qf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Yl = { exports: {} }, Zo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vf = Xo, Gf = Symbol.for("react.element"), Wf = Symbol.for("react.fragment"), Yf = Object.prototype.hasOwnProperty, Qf = Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ql(n, e, t) {
  var r, o = {}, i = null, a = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e)
    Yf.call(e, r) && !Jf.hasOwnProperty(r) && (o[r] = e[r]);
  if (n && n.defaultProps)
    for (r in e = n.defaultProps, e)
      o[r] === void 0 && (o[r] = e[r]);
  return { $$typeof: Gf, type: n, key: i, ref: a, props: o, _owner: Qf.current };
}
Zo.Fragment = Wf;
Zo.jsx = Ql;
Zo.jsxs = Ql;
Yl.exports = Zo;
var y = Yl.exports, Ji = {}, ac = Wl;
Ji.createRoot = ac.createRoot, Ji.hydrateRoot = ac.hydrateRoot;
var Jl = { exports: {} }, Xl = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr = Xo;
function Xf(n, e) {
  return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
}
var Zf = typeof Object.is == "function" ? Object.is : Xf, eh = Xr.useSyncExternalStore, th = Xr.useRef, nh = Xr.useEffect, rh = Xr.useMemo, oh = Xr.useDebugValue;
Xl.useSyncExternalStoreWithSelector = function(n, e, t, r, o) {
  var i = th(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else
    a = i.current;
  i = rh(function() {
    function c(h) {
      if (!l) {
        if (l = !0, u = h, h = r(h), o !== void 0 && a.hasValue) {
          var p = a.value;
          if (o(p, h))
            return f = p;
        }
        return f = h;
      }
      if (p = f, Zf(u, h))
        return p;
      var g = r(h);
      return o !== void 0 && o(p, g) ? p : (u = h, f = g);
    }
    var l = !1, u, f, d = t === void 0 ? null : t;
    return [function() {
      return c(e());
    }, d === null ? void 0 : function() {
      return c(d());
    }];
  }, [e, t, r, o]);
  var s = eh(n, i[0], i[1]);
  return nh(function() {
    a.hasValue = !0, a.value = s;
  }, [s]), oh(s), s;
};
Jl.exports = Xl;
var ih = Jl.exports, st = (
  // prettier-ignore
  // @ts-ignore
  "default" in U ? U.default : U
), sc = Symbol.for("react-redux-context"), cc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ah() {
  if (!st.createContext)
    return {};
  const n = cc[sc] ?? (cc[sc] = /* @__PURE__ */ new Map());
  let e = n.get(st.createContext);
  return e || (e = st.createContext(
    null
  ), n.set(st.createContext, e)), e;
}
var gn = /* @__PURE__ */ ah(), sh = () => {
  throw new Error("uSES not initialized!");
};
function Da(n = gn) {
  return function() {
    return st.useContext(n);
  };
}
var Zl = /* @__PURE__ */ Da(), eu = sh, ch = (n) => {
  eu = n;
}, lh = (n, e) => n === e;
function uh(n = gn) {
  const e = n === gn ? Zl : Da(n), t = (r, o = {}) => {
    const { equalityFn: i = lh, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: s,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: f
    } = e();
    st.useRef(!0);
    const d = st.useCallback(
      {
        [r.name](p) {
          return r(p);
        }
      }[r.name],
      [r, u, a.stabilityCheck]
    ), h = eu(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      d,
      i
    );
    return st.useDebugValue(h), h;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Pn = /* @__PURE__ */ uh();
function dh(n) {
  n();
}
function fh() {
  let n = null, e = null;
  return {
    clear() {
      n = null, e = null;
    },
    notify() {
      dh(() => {
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
var lc = {
  notify() {
  },
  get: () => []
};
function hh(n, e) {
  let t, r = lc, o = 0, i = !1;
  function a(g) {
    u();
    const m = r.subscribe(g);
    let b = !1;
    return () => {
      b || (b = !0, m(), f());
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
    o++, t || (t = e ? e.addNestedSub(c) : n.subscribe(c), r = fh());
  }
  function f() {
    o--, t && o === 0 && (t(), t = void 0, r.clear(), r = lc);
  }
  function d() {
    i || (i = !0, u());
  }
  function h() {
    i && (i = !1, f());
  }
  const p = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return p;
}
var ph = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", gh = typeof navigator < "u" && navigator.product === "ReactNative", mh = ph || gh ? st.useLayoutEffect : st.useEffect;
function yh({
  store: n,
  context: e,
  children: t,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = st.useMemo(() => {
    const l = hh(n);
    return {
      store: n,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [n, r, o, i]), s = st.useMemo(() => n.getState(), [n]);
  mh(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== n.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = e || gn;
  return /* @__PURE__ */ st.createElement(c.Provider, { value: a }, t);
}
var vh = yh;
function tu(n = gn) {
  const e = n === gn ? Zl : (
    // @ts-ignore
    Da(n)
  ), t = () => {
    const { store: r } = e();
    return r;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var bh = /* @__PURE__ */ tu();
function Ch(n = gn) {
  const e = n === gn ? bh : tu(n), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var wh = /* @__PURE__ */ Ch();
ch(ih.useSyncExternalStoreWithSelector);
const Sh = {
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
let Eh = class Xi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Sh, this.options = t, this.debug = t.debug;
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
    return new Xi(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Xi(this.logger, e);
  }
};
var Dt = new Eh();
class ei {
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
function Er() {
  let n, e;
  const t = new Promise((r, o) => {
    n = r, e = o;
  });
  return t.resolve = n, t.reject = e, t;
}
function uc(n) {
  return n == null ? "" : "" + n;
}
function Ih(n, e, t) {
  n.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}
const Th = /###/g;
function Nr(n, e, t) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(Th, ".") : s;
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
function dc(n, e, t) {
  const {
    obj: r,
    k: o
  } = Nr(n, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[o] = t;
    return;
  }
  let i = e[e.length - 1], a = e.slice(0, e.length - 1), s = Nr(n, a, Object);
  for (; s.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), s = Nr(n, a, Object), s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = t;
}
function _h(n, e, t, r) {
  const {
    obj: o,
    k: i
  } = Nr(n, e, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(t)), r || o[i].push(t);
}
function Eo(n, e) {
  const {
    obj: t,
    k: r
  } = Nr(n, e);
  if (t)
    return t[r];
}
function kh(n, e, t) {
  const r = Eo(n, t);
  return r !== void 0 ? r : Eo(e, t);
}
function nu(n, e, t) {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? typeof n[r] == "string" || n[r] instanceof String || typeof e[r] == "string" || e[r] instanceof String ? t && (n[r] = e[r]) : nu(n[r], e[r], t) : n[r] = e[r]);
  return n;
}
function Wn(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Ah = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Rh(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => Ah[e]) : n;
}
class Ph {
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
const Nh = [" ", ",", "?", "!", ";"], Mh = new Ph(20);
function Oh(n, e, t) {
  e = e || "", t = t || "";
  const r = Nh.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (r.length === 0)
    return !0;
  const o = Mh.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !o.test(n);
  if (!i) {
    const a = n.indexOf(t);
    a > 0 && !o.test(n.substring(0, a)) && (i = !0);
  }
  return i;
}
function Zi(n, e) {
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
function Io(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class fc extends ei {
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
    const c = Eo(this.data, s);
    return !c && !t && !r && e.indexOf(".") > -1 && (e = s[0], t = s[1], r = s.slice(2).join(".")), c || !a || typeof r != "string" ? c : Zi(this.data && this.data[e] && this.data[e][t], r, i);
  }
  addResource(e, t, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [e, t];
    r && (s = s.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (s = e.split("."), o = t, t = s[1]), this.addNamespaces(t), dc(this.data, s, o), i.silent || this.emit("added", e, t, r, o);
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
    let c = Eo(this.data, s) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? nu(c, r, i) : c = {
      ...c,
      ...r
    }, dc(this.data, s, c), a.silent || this.emit("added", e, t, r);
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
var ru = {
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
const hc = {};
class To extends ei {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ih(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Dt.create("translator");
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
    const a = r && e.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Oh(e, r, o);
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
    const f = this.resolve(e, t);
    let d = f && f.res;
    const h = f && f.usedKey || a, p = f && f.exactUsedKey || a, g = Object.prototype.toString.apply(d), m = ["[object Number]", "[object Function]", "[object RegExp]"], b = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (C && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && m.indexOf(g) < 0 && !(typeof b == "string" && Array.isArray(d))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, d, {
          ...t,
          ns: s
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (f.res = w, f.usedParams = this.getUsedParamsDetails(t), f) : w;
      }
      if (i) {
        const w = Array.isArray(d), S = w ? [] : {}, E = w ? p : h;
        for (const _ in d)
          if (Object.prototype.hasOwnProperty.call(d, _)) {
            const T = `${E}${i}${_}`;
            S[_] = this.translate(T, {
              ...t,
              joinArrays: !1,
              ns: s
            }), S[_] === T && (S[_] = d[_]);
          }
        d = S;
      }
    } else if (C && typeof b == "string" && Array.isArray(d))
      d = d.join(b), d && (d = this.extendTranslation(d, e, t, r));
    else {
      let w = !1, S = !1;
      const E = t.count !== void 0 && typeof t.count != "string", _ = To.hasDefaultValue(t), T = E ? this.pluralResolver.getSuffix(l, t.count, t) : "", M = t.ordinal && E ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", B = E && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), z = B && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${T}`] || t[`defaultValue${M}`] || t.defaultValue;
      !this.isValidLookup(d) && _ && (w = !0, d = z), this.isValidLookup(d) || (S = !0, d = a);
      const Z = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : d, D = _ && z !== d && this.options.updateMissing;
      if (S || w || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", l, c, a, D ? z : d), i) {
          const P = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const R = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && R && R[0])
          for (let P = 0; P < R.length; P++)
            j.push(R[P]);
        else
          this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(t.lng || this.language) : j.push(t.lng || this.language);
        const A = (P, $, H) => {
          const re = _ && H !== d ? H : Z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, c, $, re, D, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(P, c, $, re, D, t), this.emit("missingKey", P, c, $, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? j.forEach((P) => {
          const $ = this.pluralResolver.getSuffixes(P, t);
          B && t[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach((H) => {
            A([P], a + H, t[`defaultValue${H}`] || z);
          });
        }) : A(j, a, z));
      }
      d = this.extendTranslation(d, e, t, f, r), S && d === a && this.options.appendNamespaceToMissingKey && (d = `${c}:${a}`), (S || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${a}` : a, w ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return o ? (f.res = d, f.usedParams = this.getUsedParamsDetails(t), f) : d;
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
        const d = e.match(this.interpolator.nestingRegexp);
        u = d && d.length;
      }
      let f = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), e = this.interpolator.interpolate(e, f, r.lng || this.language, r), l) {
        const d = e.match(this.interpolator.nestingRegexp), h = d && d.length;
        u < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = o.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var d = arguments.length, h = new Array(d), p = 0; p < d; p++)
          h[p] = arguments[p];
        return i && i[0] === h[0] && !r.context ? (a.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${t[0]}`), null) : a.translate(...h, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, c = typeof s == "string" ? [s] : s;
    return e != null && c && c.length && r.applyPostProcessor !== !1 && (e = ru.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
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
      let f = l.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && typeof t.count != "string", h = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), p = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((m) => {
        this.isValidLookup(r) || (s = m, !hc[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (hc[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((b) => {
          if (this.isValidLookup(r))
            return;
          a = b;
          const C = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, u, b, m, t);
          else {
            let w;
            d && (w = this.pluralResolver.getSuffix(b, t.count, t));
            const S = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (C.push(u + w), t.ordinal && w.indexOf(E) === 0 && C.push(u + w.replace(E, this.options.pluralSeparator)), h && C.push(u + S)), p) {
              const _ = `${u}${this.options.contextSeparator}${t.context}`;
              C.push(_), d && (C.push(_ + w), t.ordinal && w.indexOf(E) === 0 && C.push(_ + w.replace(E, this.options.pluralSeparator)), h && C.push(_ + S));
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
function Ti(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class pc {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Dt.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Io(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Io(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ti(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), t.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ti(r[1].toLowerCase())), t.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ti(r[2].toLowerCase()))), r.join("-");
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
let xh = [{
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
}], Dh = {
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
const Lh = ["v1", "v2", "v3"], Fh = ["v4"], gc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function jh() {
  const n = {};
  return xh.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: Dh[e.fc]
      };
    });
  }), n;
}
class Uh {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = Dt.create("pluralResolver"), (!this.options.compatibilityJSON || Fh.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = jh();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Io(e === "dev" ? "en" : e), {
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => gc[o] - gc[i]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !Lh.includes(this.options.compatibilityJSON);
  }
}
function mc(n, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = kh(n, e, t);
  return !i && o && typeof t == "string" && (i = Zi(n, t, r), i === void 0 && (i = Zi(e, t, r))), i;
}
class Hh {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Dt.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
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
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: h,
      nestingSuffix: p,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: b,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Rh, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Wn(i) : a || "{{", this.suffix = s ? Wn(s) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? Wn(d) : h || Wn("$t("), this.nestingSuffix = p ? Wn(p) : g || Wn(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
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
        const C = mc(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, r, {
          ...o,
          ...t,
          interpolationkey: p
        }) : C;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), b = g.join(this.formatSeparator).trim();
      return this.format(mc(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), b, r, {
        ...o,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const f = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, d = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
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
          if (typeof f == "function") {
            const b = f(e, i, o);
            a = typeof b == "string" ? b : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            a = "";
          else if (d) {
            a = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), a = "";
        else
          typeof a != "string" && !this.useRawValueToEscape && (a = uc(a));
        const m = p.safeValue(a);
        if (e = e.replace(i[0], m), d ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, s++, s >= this.maxReplaces)
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
      const f = c.split(new RegExp(`${u}[ ]*{`));
      let d = `{${f[1]}`;
      c = f[0], d = this.interpolate(d, a);
      const h = d.match(/'/g), p = d.match(/"/g);
      (h && h.length % 2 === 0 && !p || p.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
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
        ...r
      }, a = a.replace && typeof a.replace != "string" ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((f) => f.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (i = t(s.call(this, o[1].trim(), a), a), i && o[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = uc(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), i = ""), l && (i = c.reduce((u, f) => this.format(u, f, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function Bh(n) {
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
function Yn(n) {
  const e = {};
  return function(r, o, i) {
    const a = o + JSON.stringify(i);
    let s = e[a];
    return s || (s = n(Io(o), i), e[a] = s), s(r);
  };
}
class zh {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Dt.create("formatter"), this.options = e, this.formats = {
      number: Yn((t, r) => {
        const o = new Intl.NumberFormat(t, {
          ...r
        });
        return (i) => o.format(i);
      }),
      currency: Yn((t, r) => {
        const o = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: Yn((t, r) => {
        const o = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (i) => o.format(i);
      }),
      relativetime: Yn((t, r) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (i) => o.format(i, r.range || "day");
      }),
      list: Yn((t, r) => {
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
    this.formats[e.toLowerCase().trim()] = Yn(t);
  }
  format(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((s, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = Bh(c);
      if (this.formats[l]) {
        let f = s;
        try {
          const d = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, h = d.locale || d.lng || o.locale || o.lng || r;
          f = this.formats[l](s, h, {
            ...u,
            ...o,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return s;
    }, e);
  }
}
function $h(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class Kh extends ei {
  constructor(e, t, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = Dt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(e, t, r, o) {
    const i = {}, a = {}, s = {}, c = {};
    return e.forEach((l) => {
      let u = !0;
      t.forEach((f) => {
        const d = `${l}|${f}`;
        !r.reload && this.store.hasResourceBundle(l, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? a[d] === void 0 && (a[d] = !0) : (this.state[d] = 1, u = !1, a[d] === void 0 && (a[d] = !0), i[d] === void 0 && (i[d] = !0), c[f] === void 0 && (c[f] = !0)));
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
      _h(c.loaded, [i], a), $h(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        s[l] || (s[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((f) => {
          s[l][f] === void 0 && (s[l][f] = !0);
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
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
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
            l.length === 5 ? u = l(e, t, r, o, c) : u = l(e, t, r, o), u && typeof u.then == "function" ? u.then((f) => s(null, f)).catch(s) : s(null, u);
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
function yc() {
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
function vc(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function lo() {
}
function qh(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class zr extends ei {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = vc(e), this.services = {}, this.logger = Dt, this.modules = {
      external: []
    }, qh(this), t && !this.isInitialized && !e.isClone) {
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
    const o = yc();
    this.options = {
      ...o,
      ...this.options,
      ...vc(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Dt.init(i(this.modules.logger), this.options) : Dt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = zh);
      const f = new pc(this.options);
      this.store = new fc(this.options.resources, this.options);
      const d = this.services;
      d.logger = Dt, d.resourceStore = this.store, d.languageUtils = f, d.pluralResolver = new Uh(f, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (d.formatter = i(u), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new Hh(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new Kh(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(h) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(h, ...g);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new To(this.services, this.options), this.translator.on("*", function(h) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(h, ...g);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = lo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = Er(), l = () => {
      const u = (f, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(d), r(f, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
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
    const o = Er();
    return e || (e = this.languages), t || (t = this.options.ns), r || (r = lo), this.services.backendConnector.reload(e, t, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && ru.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const o = Er();
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
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), f = 2; f < l; f++)
          u[f - 2] = arguments[f];
        c = o.options.overloadTranslationOptionHandler([a, s].concat(u));
      } else
        c = {
          ...s
        };
      c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix = c.keyPrefix || r || i.keyPrefix;
      const d = o.options.keySeparator || ".";
      let h;
      return c.keyPrefix && Array.isArray(a) ? h = a.map((p) => `${c.keyPrefix}${d}${p}`) : h = c.keyPrefix ? `${c.keyPrefix}${d}${a}` : a, o.t(h, c);
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
    const r = Er();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), t && t(o);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = Er();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], i = e.filter((a) => o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new pc(yc());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new zr(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new zr(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new fc(this.store.data, o), i.services.resourceStore = i.store), i.translator = new To(i.services, o), i.translator.on("*", function(s) {
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
const Ue = zr.createInstance();
Ue.createInstance = zr.createInstance;
Ue.createInstance;
Ue.dir;
Ue.init;
Ue.loadResources;
Ue.reloadResources;
Ue.use;
Ue.changeLanguage;
Ue.getFixedT;
Ue.t;
Ue.exists;
Ue.setDefaultNamespace;
Ue.hasLoadedNamespace;
Ue.loadNamespaces;
Ue.loadLanguages;
function Vh() {
  if (console && console.warn) {
    for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const bc = {};
function ea() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && bc[e[0]] || (typeof e[0] == "string" && (bc[e[0]] = /* @__PURE__ */ new Date()), Vh(...e));
}
const ou = (n, e) => () => {
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
function Cc(n, e, t) {
  n.loadNamespaces(e, ou(n, t));
}
function wc(n, e, t, r) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    n.options.ns.indexOf(o) < 0 && n.options.ns.push(o);
  }), n.loadLanguages(e, ou(n, r));
}
function Gh(n, e) {
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
function Wh(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (ea("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(n, {
    lng: t.lng,
    precheck: (o, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, n))
        return !1;
    }
  }) : Gh(n, e, t);
}
const Yh = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Qh = {
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
}, Jh = (n) => Qh[n], Xh = (n) => n.replace(Yh, Jh);
let ta = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Xh
};
function Zh() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ta = {
    ...ta,
    ...n
  };
}
function ep() {
  return ta;
}
let iu;
function tp(n) {
  iu = n;
}
function np() {
  return iu;
}
const rp = {
  type: "3rdParty",
  init(n) {
    Zh(n.options.react), tp(n);
  }
}, op = Cn();
class ip {
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
const ap = (n, e) => {
  const t = ue();
  return X(() => {
    t.current = e ? t.current : n;
  }, [n, e]), t.current;
};
function Zr(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: o
  } = nn(op) || {}, i = t || r || np();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new ip()), !i) {
    ea("You will need to pass in an i18next instance by using initReactI18next");
    const v = (S, E) => typeof E == "string" ? E : E && typeof E == "object" && typeof E.defaultValue == "string" ? E.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, w = [v, {}, !1];
    return w.t = v, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && ea("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...ep(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: c
  } = a;
  let l = n || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((v) => Wh(v, i, a));
  function f() {
    return i.getFixedT(e.lng || null, a.nsMode === "fallback" ? l : l[0], c);
  }
  const [d, h] = te(f);
  let p = l.join();
  e.lng && (p = `${e.lng}${p}`);
  const g = ap(p), m = ue(!0);
  X(() => {
    const {
      bindI18n: v,
      bindI18nStore: w
    } = a;
    m.current = !0, !u && !s && (e.lng ? wc(i, e.lng, l, () => {
      m.current && h(f);
    }) : Cc(i, l, () => {
      m.current && h(f);
    })), u && g && g !== p && m.current && h(f);
    function S() {
      m.current && h(f);
    }
    return v && i && i.on(v, S), w && i && i.store.on(w, S), () => {
      m.current = !1, v && i && v.split(" ").forEach((E) => i.off(E, S)), w && i && w.split(" ").forEach((E) => i.store.off(E, S));
    };
  }, [i, p]);
  const b = ue(!0);
  X(() => {
    m.current && !b.current && h(f), b.current = !1;
  }, [i, c]);
  const C = [d, i, u];
  if (C.t = d, C.i18n = i, C.ready = u, u || !u && !s)
    return C;
  throw new Promise((v) => {
    e.lng ? wc(i, e.lng, l, () => v()) : Cc(i, l, () => v());
  });
}
const sp = {
  apply: "تطبيق",
  save: "حفظ",
  cancel: "إلغاء",
  groupBy: "تجميع",
  checkbox: {
    true: "نعم",
    false: "لا",
    indeterminate: "غير محدد"
  },
  classSearchInstruction: "حدد تصنيفًا في مربع البحث أعلاه.",
  noDescription: "لا يوجد وصف",
  linkTabTitle: "رابط",
  settingsTabTitle: "الإعدادات",
  language: "اللغة",
  searchMainDictionaryLabel: "ابحث عن فئة",
  classifications: {
    searchClassesPlaceholder: "ابحث عن فئة",
    dragResize: "اسحب لتغيير الحجم"
  },
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
}, cp = {
  translation: sp
}, lp = {
  apply: "Použít",
  save: "Uložit",
  cancel: "Zrušit",
  groupBy: "Seskupit",
  checkbox: {
    true: "Ano",
    false: "Ne",
    indeterminate: "Nespecifikováno"
  },
  classSearchInstruction: "Vyberte klasifikaci v horním vyhledávacím poli.",
  noDescription: "Žádný popis",
  linkTabTitle: "Odkaz",
  settingsTabTitle: "Nastavení",
  language: "Jazyk",
  searchMainDictionaryLabel: "Vyhledat třídu",
  classifications: {
    searchClassesPlaceholder: "Vyhledat třídu",
    dragResize: "Přetáhněte pro změnu velikosti"
  },
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
}, up = {
  translation: lp
}, dp = {
  apply: "Anvend",
  save: "Gem",
  cancel: "Annuller",
  groupBy: "Gruppér",
  checkbox: {
    true: "Ja",
    false: "Nej",
    indeterminate: "Ikke afgjort"
  },
  classSearchInstruction: "Vælg en klassifikation i søgefeltet ovenfor.",
  noDescription: "Ingen beskrivelse",
  linkTabTitle: "Link",
  settingsTabTitle: "Indstillinger",
  language: "Sprog",
  searchMainDictionaryLabel: "Søg en klasse",
  classifications: {
    searchClassesPlaceholder: "Søg en klasse",
    dragResize: "Træk for at ændre størrelse"
  },
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
}, fp = {
  translation: dp
}, hp = {
  apply: "Anwenden",
  save: "Speichern",
  cancel: "Abbrechen",
  groupBy: "Gruppieren",
  checkbox: {
    true: "Ja",
    false: "Nein",
    indeterminate: "Unbestimmt"
  },
  classSearchInstruction: "Wählen Sie eine Klassifikation im obigen Suchfeld aus.",
  noDescription: "Keine Beschreibung",
  linkTabTitle: "Verknüpfen",
  settingsTabTitle: "Einstellungen",
  language: "Sprache",
  searchMainDictionaryLabel: "Suche eine Klasse",
  classifications: {
    searchClassesPlaceholder: "Suche eine Klasse",
    dragResize: "Zum Ändern der Größe ziehen"
  },
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
}, pp = {
  translation: hp
}, gp = {
  apply: "Assign",
  save: "Save",
  cancel: "Cancel",
  groupBy: "Group",
  checkbox: {
    true: "yes",
    false: "no",
    indeterminate: "indeterminate"
  },
  classSearchInstruction: "Select a classification in the search box above.",
  noDescription: "No description",
  linkTabTitle: "Link",
  settingsTabTitle: "Settings",
  language: "Language",
  searchMainDictionaryLabel: "Search a class",
  classifications: {
    searchClassesPlaceholder: "Search classes",
    dragResize: "Drag to resize"
  },
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
}, mp = {
  translation: gp
}, yp = {
  apply: "Aplicar",
  save: "Guardar",
  cancel: "Cancelar",
  groupBy: "Agrupar",
  checkbox: {
    true: "Sí",
    false: "No",
    indeterminate: "Indeterminado"
  },
  classSearchInstruction: "Seleccione una clasificación en el cuadro de búsqueda de arriba.",
  noDescription: "Sin descripción",
  linkTabTitle: "Enlace",
  settingsTabTitle: "Configuraciones",
  language: "Idioma",
  searchMainDictionaryLabel: "Buscar una clase",
  classifications: {
    searchClassesPlaceholder: "Buscar una clase",
    dragResize: "Arrastrar para redimensionar"
  },
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
}, vp = {
  translation: yp
}, bp = {
  apply: "Käytä",
  save: "Tallenna",
  cancel: "Peruuta",
  groupBy: "Ryhmittele",
  checkbox: {
    true: "Kyllä",
    false: "Ei",
    indeterminate: "Määrittelemätön"
  },
  classSearchInstruction: "Valitse luokitus yllä olevasta hakukentästä.",
  noDescription: "Ei kuvausta",
  linkTabTitle: "Linkki",
  settingsTabTitle: "Asetukset",
  language: "Kieli",
  searchMainDictionaryLabel: "Hae luokkaa",
  classifications: {
    searchClassesPlaceholder: "Hae luokkaa",
    dragResize: "Raahaa muuttaaksesi kokoa"
  },
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
}, Cp = {
  translation: bp
}, wp = {
  apply: "Appliquer",
  save: "Enregistrer",
  cancel: "Annuler",
  groupBy: "Grouper",
  checkbox: {
    true: "Oui",
    false: "Non",
    indeterminate: "Indéterminé"
  },
  classSearchInstruction: "Sélectionnez une classification dans la boîte de recherche ci-dessus.",
  noDescription: "Pas de description",
  linkTabTitle: "Lien",
  settingsTabTitle: "Paramètres",
  language: "Langue",
  searchMainDictionaryLabel: "Rechercher une classe",
  classifications: {
    searchClassesPlaceholder: "Rechercher une classe",
    dragResize: "Faites glisser pour redimensionner"
  },
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
}, Sp = {
  translation: wp
}, Ep = {
  apply: "लागू करें",
  save: "सहेजें",
  cancel: "रद्द करें",
  groupBy: "समूहित करें",
  checkbox: {
    true: "हाँ",
    false: "नहीं",
    indeterminate: "अनिश्चित"
  },
  classSearchInstruction: "ऊपर दिए गए खोज बॉक्स में एक वर्गीकरण चुनें।",
  noDescription: "कोई विवरण नहीं",
  linkTabTitle: "लिंक",
  settingsTabTitle: "सेटिंग्स",
  language: "भाषा",
  searchMainDictionaryLabel: "एक वर्ग खोजें",
  classifications: {
    searchClassesPlaceholder: "वर्ग खोजें",
    dragResize: "रेसाइज करने के लिए खींचें"
  },
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
}, Ip = {
  translation: Ep
}, Tp = {
  apply: "Primijeni",
  save: "Spremi",
  cancel: "Otkazati",
  groupBy: "Grupiraj",
  checkbox: {
    true: "Da",
    false: "Ne",
    indeterminate: "Nepoznato"
  },
  classSearchInstruction: "Odaberite klasifikaciju u gornjem okviru za pretraživanje.",
  noDescription: "Nema opisa",
  linkTabTitle: "Poveznica",
  settingsTabTitle: "Postavke",
  language: "Jezik",
  searchMainDictionaryLabel: "Pretraži klasu",
  classifications: {
    searchClassesPlaceholder: "Pretraži klasu",
    dragResize: "Povuci za promjenu veličine"
  },
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
}, _p = {
  translation: Tp
}, kp = {
  apply: "Nota",
  save: "Vista",
  cancel: "Hætta við",
  groupBy: "Flokkun",
  checkbox: {
    true: "Já",
    false: "Nei",
    indeterminate: "Óákveðið"
  },
  classSearchInstruction: "Veldu flokkun í leitarglugganum hér að ofan.",
  noDescription: "Engin lýsing",
  linkTabTitle: "Tengja",
  settingsTabTitle: "Stillingar",
  language: "Tungumál",
  searchMainDictionaryLabel: "Leita að flokki",
  classifications: {
    searchClassesPlaceholder: "Leita að flokki",
    dragResize: "Dragðu til að breyta stærð"
  },
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
}, Ap = {
  translation: kp
}, Rp = {
  apply: "Applica",
  save: "Salva",
  cancel: "Annulla",
  groupBy: "Raggruppa",
  checkbox: {
    true: "Sì",
    false: "No",
    indeterminate: "Indeterminato"
  },
  classSearchInstruction: "Seleziona una classificazione nella casella di ricerca sopra.",
  noDescription: "Nessuna descrizione",
  linkTabTitle: "Collega",
  settingsTabTitle: "Impostazioni",
  language: "Lingua",
  searchMainDictionaryLabel: "Cerca una classe",
  classifications: {
    searchClassesPlaceholder: "Cerca una classe",
    dragResize: "Trascina per ridimensionare"
  },
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
}, Pp = {
  translation: Rp
}, Np = {
  apply: "適用",
  save: "保存",
  cancel: "キャンセル",
  groupBy: "グループ化",
  checkbox: {
    true: "はい",
    false: "いいえ",
    indeterminate: "不確定"
  },
  classSearchInstruction: "上の検索ボックスで分類を選択してください。",
  noDescription: "説明なし",
  linkTabTitle: "リンク",
  settingsTabTitle: "設定",
  language: "言語",
  searchMainDictionaryLabel: "クラスを検索",
  classifications: {
    searchClassesPlaceholder: "クラスを検索",
    dragResize: "ドラッグしてリサイズ"
  },
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
}, Mp = {
  translation: Np
}, Op = {
  apply: "적용",
  save: "저장",
  cancel: "취소",
  groupBy: "그룹화",
  checkbox: {
    true: "예",
    false: "아니요",
    indeterminate: "불확실"
  },
  classSearchInstruction: "위의 검색 상자에서 분류를 선택하세요.",
  noDescription: "설명 없음",
  linkTabTitle: "링크",
  settingsTabTitle: "설정",
  language: "언어",
  searchMainDictionaryLabel: "클래스 검색",
  classifications: {
    searchClassesPlaceholder: "클래스 검색",
    dragResize: "드래그하여 크기 조정"
  },
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
}, xp = {
  translation: Op
}, Dp = {
  apply: "Taikyti",
  save: "Išsaugoti",
  cancel: "Atšaukti",
  groupBy: "Grupuoti",
  checkbox: {
    true: "Taip",
    false: "Ne",
    indeterminate: "Neapibrėžta"
  },
  classSearchInstruction: "Pasirinkite klasifikaciją aukščiau esančiame paieškos laukelyje.",
  noDescription: "Nėra aprašymo",
  linkTabTitle: "Nuoroda",
  settingsTabTitle: "Nustatymai",
  language: "Kalba",
  searchMainDictionaryLabel: "Ieškoti klasės",
  classifications: {
    searchClassesPlaceholder: "Ieškoti klasės",
    dragResize: "Tempkite, kad pakeistumėte dydį"
  },
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
}, Lp = {
  translation: Dp
}, Fp = {
  apply: "Toewijzen",
  save: "Opslaan",
  cancel: "Annuleren",
  groupBy: "Groeperen",
  checkbox: {
    true: "ja",
    false: "nee",
    indeterminate: "onbepaald"
  },
  classSearchInstruction: "Selecteer een classificatie in het zoekveld hierboven.",
  noDescription: "Geen beschrijving",
  linkTabTitle: "Koppelen",
  settingsTabTitle: "Instellingen",
  language: "Taal",
  searchMainDictionaryLabel: "Zoek een classificatie in",
  classifications: {
    searchClassesPlaceholder: "Zoek een classificatie",
    dragResize: "Sleep om hoogte aan te passen"
  },
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
}, jp = {
  translation: Fp
}, Up = {
  apply: "Bruk",
  save: "Lagre",
  cancel: "Avbryt",
  groupBy: "Grupper etter",
  checkbox: {
    true: "Ja",
    false: "Nei",
    indeterminate: "Ubestemt"
  },
  classSearchInstruction: "Velg en klassifisering i søkeboksen ovenfor.",
  noDescription: "Ingen beskrivelse",
  linkTabTitle: "Lenke",
  settingsTabTitle: "Innstillinger",
  language: "Språk",
  searchMainDictionaryLabel: "Søk etter klasse",
  classifications: {
    searchClassesPlaceholder: "Søk etter klasse",
    dragResize: "Dra for å endre størrelse"
  },
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
}, Hp = {
  translation: Up
}, Bp = {
  apply: "Zastosuj",
  save: "Zapisz",
  cancel: "Anuluj",
  groupBy: "Grupuj",
  checkbox: {
    true: "Tak",
    false: "Nie",
    indeterminate: "Nieokreślony"
  },
  classSearchInstruction: "Wybierz klasyfikację w polu wyszukiwania powyżej.",
  noDescription: "Brak opisu",
  linkTabTitle: "Link",
  settingsTabTitle: "Ustawienia",
  language: "Język",
  searchMainDictionaryLabel: "Szukaj klasy",
  classifications: {
    searchClassesPlaceholder: "Szukaj klasy",
    dragResize: "Przeciągnij, aby zmienić rozmiar"
  },
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
}, zp = {
  translation: Bp
}, $p = {
  apply: "Aplicar",
  save: "Salvar",
  cancel: "Cancelar",
  groupBy: "Agrupar",
  checkbox: {
    true: "Sim",
    false: "Não",
    indeterminate: "Indeterminado"
  },
  classSearchInstruction: "Selecione uma classificação na caixa de pesquisa acima.",
  noDescription: "Sem descrição",
  linkTabTitle: "Link",
  settingsTabTitle: "Configurações",
  language: "Idioma",
  searchMainDictionaryLabel: "Pesquisar classe",
  classifications: {
    searchClassesPlaceholder: "Pesquisar classe",
    dragResize: "Arraste para redimensionar"
  },
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
}, Kp = {
  translation: $p
}, qp = {
  apply: "Aplicar",
  save: "Guardar",
  cancel: "Cancelar",
  groupBy: "Agrupar",
  checkbox: {
    true: "Sim",
    false: "Não",
    indeterminate: "Indeterminado"
  },
  classSearchInstruction: "Selecione uma classificação na caixa de pesquisa acima.",
  noDescription: "Sem descrição",
  linkTabTitle: "Link",
  settingsTabTitle: "Configurações",
  language: "Idioma",
  searchMainDictionaryLabel: "Pesquisar classe",
  classifications: {
    searchClassesPlaceholder: "Pesquisar classe",
    dragResize: "Arraste para redimensionar"
  },
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
}, Vp = {
  translation: qp
}, Gp = {
  apply: "Aplică",
  save: "Salvează",
  cancel: "Anulează",
  groupBy: "Grupare",
  checkbox: {
    true: "Da",
    false: "Nu",
    indeterminate: "Indeterminat"
  },
  classSearchInstruction: "Selectați o clasificare în caseta de căutare de mai sus.",
  noDescription: "Fără descriere",
  linkTabTitle: "Link",
  settingsTabTitle: "Setări",
  language: "Limbă",
  searchMainDictionaryLabel: "Căutați o clasă",
  classifications: {
    searchClassesPlaceholder: "Căutați o clasă",
    dragResize: "Trageți pentru a redimensiona"
  },
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
}, Wp = {
  translation: Gp
}, Yp = {
  apply: "Uporabi",
  save: "Shrani",
  cancel: "Prekliči",
  groupBy: "Razvrsti po",
  checkbox: {
    true: "Da",
    false: "Ne",
    indeterminate: "Nedoločeno"
  },
  classSearchInstruction: "Izberite klasifikacijo v iskalnem polju zgoraj.",
  noDescription: "Brez opisa",
  linkTabTitle: "Povezava",
  settingsTabTitle: "Nastavitve",
  language: "Jezik",
  searchMainDictionaryLabel: "Išči razred",
  classifications: {
    searchClassesPlaceholder: "Išči razred",
    dragResize: "Povlecite za spremembo velikosti"
  },
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
}, Qp = {
  translation: Yp
}, Jp = {
  apply: "Primeni",
  save: "Sačuvaj",
  cancel: "Otkaži",
  groupBy: "Grupiši",
  checkbox: {
    true: "Da",
    false: "Ne",
    indeterminate: "Nepoznato"
  },
  classSearchInstruction: "Izaberite klasifikaciju u polju za pretragu iznad.",
  noDescription: "Nema opisa",
  linkTabTitle: "Link",
  settingsTabTitle: "Podešavanja",
  language: "Jezik",
  searchMainDictionaryLabel: "Pretraži klasu",
  classifications: {
    searchClassesPlaceholder: "Pretraži klasu",
    dragResize: "Povuci za promenu veličine"
  },
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
}, Xp = {
  translation: Jp
}, Zp = {
  apply: "Tillämpa",
  save: "Spara",
  cancel: "Avbryt",
  groupBy: "Gruppera efter",
  checkbox: {
    true: "Ja",
    false: "Nej",
    indeterminate: "Obestämd"
  },
  classSearchInstruction: "Välj en klassificering i sökrutan ovan.",
  noDescription: "Ingen beskrivning",
  linkTabTitle: "Länk",
  settingsTabTitle: "Inställningar",
  language: "Språk",
  searchMainDictionaryLabel: "Sök en klass",
  classifications: {
    searchClassesPlaceholder: "Sök en klass",
    dragResize: "Dra för att ändra storlek"
  },
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
}, eg = {
  translation: Zp
}, tg = {
  apply: "Uygula",
  cancel: "İptal",
  groupBy: "Grupla",
  checkbox: {
    true: "Evet",
    false: "Hayır",
    indeterminate: "Belirsiz"
  },
  classSearchInstruction: "Yukarıdaki arama kutusunda bir sınıflandırma seçin.",
  noDescription: "Açıklama yok",
  linkTabTitle: "Bağlantı",
  settingsTabTitle: "Ayarlar",
  language: "Dil",
  searchMainDictionaryLabel: "Bir sınıf ara",
  classifications: {
    searchClassesPlaceholder: "Bir sınıf ara",
    dragResize: "Boyutlandırmak için sürükleyin"
  },
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
}, ng = {
  translation: tg
}, rg = {
  apply: "应用",
  cancel: "取消",
  groupBy: "分组",
  checkbox: {
    true: "是",
    false: "否",
    indeterminate: "不确定"
  },
  classSearchInstruction: "在上面的搜索框中选择一个分类。",
  noDescription: "没有描述",
  linkTabTitle: "链接",
  settingsTabTitle: "设置",
  language: "语言",
  searchMainDictionaryLabel: "搜索分类",
  classifications: {
    searchClassesPlaceholder: "搜索分类",
    dragResize: "拖动调整大小"
  },
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
}, og = {
  translation: rg
};
Ue.use(rp).init({
  resources: {
    "en-GB": mp,
    "nl-NL": jp,
    "ar-SA": cp,
    "zh-CN": og,
    "hr-HR": _p,
    "cs-CZ": up,
    "da-DK": fp,
    "fi-FI": Cp,
    "fr-FR": Sp,
    "de-DE": pp,
    "hi-IN": Ip,
    "is-IS": Ap,
    "it-IT": Pp,
    "ja-JP": Mp,
    "ko-KR": xp,
    "lt-LT": Lp,
    "no-NO": Hp,
    "pl-PL": zp,
    "pt-PT": Vp,
    "pt-BR": Kp,
    "ro-RO": Wp,
    "sr-SP": Xp,
    "sl-SI": Qp,
    "es-ES": vp,
    "sv-SE": eg,
    "tr-TR": ng
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
var na = function(n, e) {
  return na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, na(n, e);
};
function He(n, e) {
  na(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var G = function() {
  return G = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, G.apply(this, arguments);
};
function Sc(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
      e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (t[r[o]] = n[r[o]]);
  return t;
}
function O(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
}
function x(n, e) {
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
function ig(n, e) {
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
function La() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n = n.concat(ig(arguments[e]));
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
var ra = function(n, e) {
  return ra = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, ra(n, e);
};
function it(n, e) {
  ra(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ye = function() {
  return ye = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ye.apply(this, arguments);
};
function ae(n, e, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(n, e || [])).next());
  });
}
function se(n, e) {
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
function ti() {
  for (var n = 0, e = 0, t = arguments.length; e < t; e++)
    n += arguments[e].length;
  for (var r = Array(n), o = 0, e = 0; e < t; e++)
    for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
      r[o] = i[a];
  return r;
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var I = {
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
}, eo = [
  I.OPENID_SCOPE,
  I.PROFILE_SCOPE,
  I.OFFLINE_ACCESS_SCOPE
], Ec = ti(eo, [
  I.EMAIL_SCOPE
]), ut;
(function(n) {
  n.CONTENT_TYPE = "Content-Type", n.RETRY_AFTER = "Retry-After", n.CCS_HEADER = "X-AnchorMailbox", n.WWWAuthenticate = "WWW-Authenticate", n.AuthenticationInfo = "Authentication-Info", n.X_MS_REQUEST_ID = "x-ms-request-id", n.X_MS_HTTP_VERSION = "x-ms-httpver";
})(ut || (ut = {}));
var Pe;
(function(n) {
  n.ID_TOKEN = "idtoken", n.CLIENT_INFO = "client.info", n.ADAL_ID_TOKEN = "adal.idtoken", n.ERROR = "error", n.ERROR_DESC = "error.description", n.ACTIVE_ACCOUNT = "active-account", n.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(Pe || (Pe = {}));
var Mn;
(function(n) {
  n.COMMON = "common", n.ORGANIZATIONS = "organizations", n.CONSUMERS = "consumers";
})(Mn || (Mn = {}));
var ce;
(function(n) {
  n.CLIENT_ID = "client_id", n.REDIRECT_URI = "redirect_uri", n.RESPONSE_TYPE = "response_type", n.RESPONSE_MODE = "response_mode", n.GRANT_TYPE = "grant_type", n.CLAIMS = "claims", n.SCOPE = "scope", n.ERROR = "error", n.ERROR_DESCRIPTION = "error_description", n.ACCESS_TOKEN = "access_token", n.ID_TOKEN = "id_token", n.REFRESH_TOKEN = "refresh_token", n.EXPIRES_IN = "expires_in", n.STATE = "state", n.NONCE = "nonce", n.PROMPT = "prompt", n.SESSION_STATE = "session_state", n.CLIENT_INFO = "client_info", n.CODE = "code", n.CODE_CHALLENGE = "code_challenge", n.CODE_CHALLENGE_METHOD = "code_challenge_method", n.CODE_VERIFIER = "code_verifier", n.CLIENT_REQUEST_ID = "client-request-id", n.X_CLIENT_SKU = "x-client-SKU", n.X_CLIENT_VER = "x-client-VER", n.X_CLIENT_OS = "x-client-OS", n.X_CLIENT_CPU = "x-client-CPU", n.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", n.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", n.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", n.X_APP_NAME = "x-app-name", n.X_APP_VER = "x-app-ver", n.POST_LOGOUT_URI = "post_logout_redirect_uri", n.ID_TOKEN_HINT = "id_token_hint", n.DEVICE_CODE = "device_code", n.CLIENT_SECRET = "client_secret", n.CLIENT_ASSERTION = "client_assertion", n.CLIENT_ASSERTION_TYPE = "client_assertion_type", n.TOKEN_TYPE = "token_type", n.REQ_CNF = "req_cnf", n.OBO_ASSERTION = "assertion", n.REQUESTED_TOKEN_USE = "requested_token_use", n.ON_BEHALF_OF = "on_behalf_of", n.FOCI = "foci", n.CCS_HEADER = "X-AnchorMailbox", n.RETURN_SPA_CODE = "return_spa_code", n.NATIVE_BROKER = "nativebroker", n.LOGOUT_HINT = "logout_hint";
})(ce || (ce = {}));
var er;
(function(n) {
  n.ACCESS_TOKEN = "access_token", n.XMS_CC = "xms_cc";
})(er || (er = {}));
var Ve = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Mr;
(function(n) {
  n.ACCOUNT = "account", n.SID = "sid", n.LOGIN_HINT = "login_hint", n.ID_TOKEN = "id_token", n.DOMAIN_HINT = "domain_hint", n.ORGANIZATIONS = "organizations", n.CONSUMERS = "consumers", n.ACCOUNT_ID = "accountIdentifier", n.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Mr || (Mr = {}));
var Ic = {
  PLAIN: "plain",
  S256: "S256"
}, _o;
(function(n) {
  n.QUERY = "query", n.FRAGMENT = "fragment", n.FORM_POST = "form_post";
})(_o || (_o = {}));
var ko;
(function(n) {
  n.IMPLICIT_GRANT = "implicit", n.AUTHORIZATION_CODE_GRANT = "authorization_code", n.CLIENT_CREDENTIALS_GRANT = "client_credentials", n.RESOURCE_OWNER_PASSWORD_GRANT = "password", n.REFRESH_TOKEN_GRANT = "refresh_token", n.DEVICE_CODE_GRANT = "device_code", n.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(ko || (ko = {}));
var An;
(function(n) {
  n.MSSTS_ACCOUNT_TYPE = "MSSTS", n.ADFS_ACCOUNT_TYPE = "ADFS", n.MSAV1_ACCOUNT_TYPE = "MSA", n.GENERIC_ACCOUNT_TYPE = "Generic";
})(An || (An = {}));
var Me;
(function(n) {
  n.CACHE_KEY_SEPARATOR = "-", n.CLIENT_INFO_SEPARATOR = ".";
})(Me || (Me = {}));
var ee;
(function(n) {
  n.ID_TOKEN = "IdToken", n.ACCESS_TOKEN = "AccessToken", n.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", n.REFRESH_TOKEN = "RefreshToken";
})(ee || (ee = {}));
var Or;
(function(n) {
  n[n.ADFS = 1001] = "ADFS", n[n.MSA = 1002] = "MSA", n[n.MSSTS = 1003] = "MSSTS", n[n.GENERIC = 1004] = "GENERIC", n[n.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", n[n.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", n[n.ID_TOKEN = 2003] = "ID_TOKEN", n[n.APP_METADATA = 3001] = "APP_METADATA", n[n.UNDEFINED = 9999] = "UNDEFINED";
})(Or || (Or = {}));
var oa = "appmetadata", ag = "client_info", xr = "1", Dr = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, yt;
(function(n) {
  n.CONFIG = "config", n.CACHE = "cache", n.NETWORK = "network", n.HARDCODED_VALUES = "hardcoded_values";
})(yt || (yt = {}));
var Le = {
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
(function(n) {
  n.BEARER = "Bearer", n.POP = "pop", n.SSH = "ssh-cert";
})(ve || (ve = {}));
var Lr = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Tc = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Ao;
(function(n) {
  n.username = "username", n.password = "password";
})(Ao || (Ao = {}));
var tr;
(function(n) {
  n[n.httpSuccess = 200] = "httpSuccess", n[n.httpBadRequest = 400] = "httpBadRequest";
})(tr || (tr = {}));
var ln;
(function(n) {
  n.FAILED_AUTO_DETECTION = "1", n.INTERNAL_CACHE = "2", n.ENVIRONMENT_VARIABLE = "3", n.IMDS = "4";
})(ln || (ln = {}));
var Fr;
(function(n) {
  n.CONFIGURED_MATCHES_DETECTED = "1", n.CONFIGURED_NO_AUTO_DETECTION = "2", n.CONFIGURED_NOT_DETECTED = "3", n.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", n.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Fr || (Fr = {}));
var dn;
(function(n) {
  n.NO_CACHE_HIT = "0", n.FORCE_REFRESH = "1", n.NO_CACHED_ACCESS_TOKEN = "2", n.CACHED_ACCESS_TOKEN_EXPIRED = "3", n.REFRESH_CACHED_ACCESS_TOKEN = "4", n.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(dn || (dn = {}));
var ia;
(function(n) {
  n.Jwt = "JWT", n.Jwk = "JWK", n.Pop = "pop";
})(ia || (ia = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var uo = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, Q = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r, o) {
      var i = this, a = r ? t + ": " + r : t;
      return i = n.call(this, a) || this, Object.setPrototypeOf(i, e.prototype), i.errorCode = t || I.EMPTY_STRING, i.errorMessage = r || I.EMPTY_STRING, i.subError = o || I.EMPTY_STRING, i.name = "AuthError", i;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(uo.unexpectedError.code, uo.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(uo.postRequestFailed.code, uo.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ro = {
  createNewGuid: function() {
    var n = "Crypto interface - createNewGuid() has not been implemented";
    throw Q.createUnexpectedError(n);
  },
  base64Decode: function() {
    var n = "Crypto interface - base64Decode() has not been implemented";
    throw Q.createUnexpectedError(n);
  },
  base64Encode: function() {
    var n = "Crypto interface - base64Encode() has not been implemented";
    throw Q.createUnexpectedError(n);
  },
  generatePkceCodes: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Crypto interface - generatePkceCodes() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Crypto interface - getPublicKeyThumbprint() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  },
  removeTokenBindingKey: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Crypto interface - removeTokenBindingKey() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  },
  clearKeystore: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Crypto interface - clearKeystore() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  },
  signJwt: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Crypto interface - signJwt() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  },
  hashString: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Crypto interface - hashString() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var F = {
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
}, W = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.name = "ClientAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createClientInfoDecodingError = function(t) {
      return new e(F.clientInfoDecodingError.code, F.clientInfoDecodingError.desc + " Failed with error: " + t);
    }, e.createClientInfoEmptyError = function() {
      return new e(F.clientInfoEmptyError.code, "" + F.clientInfoEmptyError.desc);
    }, e.createTokenParsingError = function(t) {
      return new e(F.tokenParsingError.code, F.tokenParsingError.desc + " Failed with error: " + t);
    }, e.createTokenNullOrEmptyError = function(t) {
      return new e(F.nullOrEmptyToken.code, F.nullOrEmptyToken.desc + " Raw Token Value: " + t);
    }, e.createEndpointDiscoveryIncompleteError = function(t) {
      return new e(F.endpointResolutionError.code, F.endpointResolutionError.desc + " Detail: " + t);
    }, e.createNetworkError = function(t, r) {
      return new e(F.networkError.code, F.networkError.desc + " | Fetch client threw: " + r + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToGetOpenidConfigError = function(t) {
      return new e(F.unableToGetOpenidConfigError.code, F.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + t);
    }, e.createHashNotDeserializedError = function(t) {
      return new e(F.hashNotDeserialized.code, F.hashNotDeserialized.desc + " Given Object: " + t);
    }, e.createInvalidStateError = function(t, r) {
      return new e(F.invalidStateError.code, F.invalidStateError.desc + " Invalid State: " + t + ", Root Err: " + r);
    }, e.createStateMismatchError = function() {
      return new e(F.stateMismatchError.code, F.stateMismatchError.desc);
    }, e.createStateNotFoundError = function(t) {
      return new e(F.stateNotFoundError.code, F.stateNotFoundError.desc + ":  " + t);
    }, e.createNonceMismatchError = function() {
      return new e(F.nonceMismatchError.code, F.nonceMismatchError.desc);
    }, e.createAuthTimeNotFoundError = function() {
      return new e(F.authTimeNotFoundError.code, F.authTimeNotFoundError.desc);
    }, e.createMaxAgeTranspiredError = function() {
      return new e(F.maxAgeTranspiredError.code, F.maxAgeTranspiredError.desc);
    }, e.createNonceNotFoundError = function(t) {
      return new e(F.nonceNotFoundError.code, F.nonceNotFoundError.desc + ":  " + t);
    }, e.createMultipleMatchingTokensInCacheError = function() {
      return new e(F.multipleMatchingTokens.code, F.multipleMatchingTokens.desc + ".");
    }, e.createMultipleMatchingAccountsInCacheError = function() {
      return new e(F.multipleMatchingAccounts.code, F.multipleMatchingAccounts.desc);
    }, e.createMultipleMatchingAppMetadataInCacheError = function() {
      return new e(F.multipleMatchingAppMetadata.code, F.multipleMatchingAppMetadata.desc);
    }, e.createTokenRequestCannotBeMadeError = function() {
      return new e(F.tokenRequestCannotBeMade.code, F.tokenRequestCannotBeMade.desc);
    }, e.createAppendEmptyScopeToSetError = function(t) {
      return new e(F.appendEmptyScopeError.code, F.appendEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createRemoveEmptyScopeFromSetError = function(t) {
      return new e(F.removeEmptyScopeError.code, F.removeEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createAppendScopeSetError = function(t) {
      return new e(F.appendScopeSetError.code, F.appendScopeSetError.desc + " Detail Error: " + t);
    }, e.createEmptyInputScopeSetError = function() {
      return new e(F.emptyInputScopeSetError.code, "" + F.emptyInputScopeSetError.desc);
    }, e.createDeviceCodeCancelledError = function() {
      return new e(F.DeviceCodePollingCancelled.code, "" + F.DeviceCodePollingCancelled.desc);
    }, e.createDeviceCodeExpiredError = function() {
      return new e(F.DeviceCodeExpired.code, "" + F.DeviceCodeExpired.desc);
    }, e.createDeviceCodeUnknownError = function() {
      return new e(F.DeviceCodeUnknownError.code, "" + F.DeviceCodeUnknownError.desc);
    }, e.createNoAccountInSilentRequestError = function() {
      return new e(F.NoAccountInSilentRequest.code, "" + F.NoAccountInSilentRequest.desc);
    }, e.createNullOrUndefinedCacheRecord = function() {
      return new e(F.invalidCacheRecord.code, F.invalidCacheRecord.desc);
    }, e.createInvalidCacheEnvironmentError = function() {
      return new e(F.invalidCacheEnvironment.code, F.invalidCacheEnvironment.desc);
    }, e.createNoAccountFoundError = function() {
      return new e(F.noAccountFound.code, F.noAccountFound.desc);
    }, e.createCachePluginError = function() {
      return new e(F.CachePluginError.code, "" + F.CachePluginError.desc);
    }, e.createNoCryptoObjectError = function(t) {
      return new e(F.noCryptoObj.code, "" + F.noCryptoObj.desc + t);
    }, e.createInvalidCacheTypeError = function() {
      return new e(F.invalidCacheType.code, "" + F.invalidCacheType.desc);
    }, e.createUnexpectedAccountTypeError = function() {
      return new e(F.unexpectedAccountType.code, "" + F.unexpectedAccountType.desc);
    }, e.createUnexpectedCredentialTypeError = function() {
      return new e(F.unexpectedCredentialType.code, "" + F.unexpectedCredentialType.desc);
    }, e.createInvalidAssertionError = function() {
      return new e(F.invalidAssertion.code, "" + F.invalidAssertion.desc);
    }, e.createInvalidCredentialError = function() {
      return new e(F.invalidClientCredential.code, "" + F.invalidClientCredential.desc);
    }, e.createRefreshRequiredError = function() {
      return new e(F.tokenRefreshRequired.code, F.tokenRefreshRequired.desc);
    }, e.createUserTimeoutReachedError = function() {
      return new e(F.userTimeoutReached.code, F.userTimeoutReached.desc);
    }, e.createTokenClaimsRequiredError = function() {
      return new e(F.tokenClaimsRequired.code, F.tokenClaimsRequired.desc);
    }, e.createNoAuthCodeInServerResponseError = function() {
      return new e(F.noAuthorizationCodeFromServer.code, F.noAuthorizationCodeFromServer.desc);
    }, e.createBindingKeyNotRemovedError = function() {
      return new e(F.bindingKeyNotRemovedError.code, F.bindingKeyNotRemovedError.desc);
    }, e.createLogoutNotSupportedError = function() {
      return new e(F.logoutNotSupported.code, F.logoutNotSupported.desc);
    }, e.createKeyIdMissingError = function() {
      return new e(F.keyIdMissing.code, F.keyIdMissing.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(F.noNetworkConnectivity.code, F.noNetworkConnectivity.desc);
    }, e.createUserCanceledError = function() {
      return new e(F.userCanceledError.code, F.userCanceledError.desc);
    }, e;
  }(Q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var q = (
  /** @class */
  function() {
    function n() {
    }
    return n.decodeAuthToken = function(e) {
      if (n.isEmpty(e))
        throw W.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, r = t.exec(e);
      if (!r || r.length < 4)
        throw W.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
var Ie;
(function(n) {
  n[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Info = 2] = "Info", n[n.Verbose = 3] = "Verbose", n[n.Trace = 4] = "Trace";
})(Ie || (Ie = {}));
var Fa = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.level = Ie.Info;
      var o = function() {
      }, i = e || n.createDefaultLoggerOptions();
      this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || !1, this.level = typeof i.logLevel == "number" ? i.logLevel : Ie.Info, this.correlationId = i.correlationId || I.EMPTY_STRING, this.packageName = t || I.EMPTY_STRING, this.packageVersion = r || I.EMPTY_STRING;
    }
    return n.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: Ie.Info
      };
    }, n.prototype.clone = function(e, t, r) {
      return new n({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: r || this.correlationId }, e, t);
    }, n.prototype.logMessage = function(e, t) {
      if (!(t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii)) {
        var r = (/* @__PURE__ */ new Date()).toUTCString(), o;
        q.isEmpty(t.correlationId) ? q.isEmpty(this.correlationId) ? o = "[" + r + "]" : o = "[" + r + "] : [" + this.correlationId + "]" : o = "[" + r + "] : [" + t.correlationId + "]";
        var i = o + " : " + this.packageName + "@" + this.packageVersion + " : " + Ie[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, i, t.containsPii || !1);
      }
    }, n.prototype.executeCallback = function(e, t, r) {
      this.localCallback && this.localCallback(e, t, r);
    }, n.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Error,
        containsPii: !1,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Error,
        containsPii: !0,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Warning,
        containsPii: !1,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Warning,
        containsPii: !0,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Info,
        containsPii: !1,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Info,
        containsPii: !0,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Verbose,
        containsPii: !1,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Verbose,
        containsPii: !0,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Trace,
        containsPii: !1,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ie.Trace,
        containsPii: !0,
        correlationId: t || I.EMPTY_STRING
      });
    }, n.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var au = "@azure/msal-common", ja = "13.3.3";
/*! @azure/msal-common v13.3.3 2024-06-06 */
var $r;
(function(n) {
  n[n.None = 0] = "None", n.AzurePublic = "https://login.microsoftonline.com", n.AzurePpe = "https://login.windows-ppe.net", n.AzureChina = "https://login.chinacloudapi.cn", n.AzureGermany = "https://login.microsoftonline.de", n.AzureUsGovernment = "https://login.microsoftonline.us";
})($r || ($r = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ie = {
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
}, Se = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.name = "ClientConfigurationError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(ie.redirectUriNotSet.code, ie.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(ie.postLogoutUriNotSet.code, ie.postLogoutUriNotSet.desc);
    }, e.createClaimsRequestParsingError = function(t) {
      return new e(ie.claimsRequestParsingError.code, ie.claimsRequestParsingError.desc + " Given value: " + t);
    }, e.createInsecureAuthorityUriError = function(t) {
      return new e(ie.authorityUriInsecure.code, ie.authorityUriInsecure.desc + " Given URI: " + t);
    }, e.createUrlParseError = function(t) {
      return new e(ie.urlParseError.code, ie.urlParseError.desc + " Given Error: " + t);
    }, e.createUrlEmptyError = function() {
      return new e(ie.urlEmptyError.code, ie.urlEmptyError.desc);
    }, e.createEmptyScopesArrayError = function() {
      return new e(ie.emptyScopesError.code, "" + ie.emptyScopesError.desc);
    }, e.createClientIdSingleScopeError = function(t) {
      return new e(ie.clientIdSingleScopeError.code, ie.clientIdSingleScopeError.desc + " Given Scopes: " + t);
    }, e.createInvalidPromptError = function(t) {
      return new e(ie.invalidPrompt.code, ie.invalidPrompt.desc + " Given value: " + t);
    }, e.createInvalidClaimsRequestError = function() {
      return new e(ie.invalidClaimsRequest.code, ie.invalidClaimsRequest.desc);
    }, e.createEmptyLogoutRequestError = function() {
      return new e(ie.logoutRequestEmptyError.code, ie.logoutRequestEmptyError.desc);
    }, e.createEmptyTokenRequestError = function() {
      return new e(ie.tokenRequestEmptyError.code, ie.tokenRequestEmptyError.desc);
    }, e.createInvalidCodeChallengeMethodError = function() {
      return new e(ie.invalidCodeChallengeMethod.code, ie.invalidCodeChallengeMethod.desc);
    }, e.createInvalidCodeChallengeParamsError = function() {
      return new e(ie.invalidCodeChallengeParams.code, ie.invalidCodeChallengeParams.desc);
    }, e.createInvalidCloudDiscoveryMetadataError = function() {
      return new e(ie.invalidCloudDiscoveryMetadata.code, ie.invalidCloudDiscoveryMetadata.desc);
    }, e.createInvalidAuthorityMetadataError = function() {
      return new e(ie.invalidAuthorityMetadata.code, ie.invalidAuthorityMetadata.desc);
    }, e.createUntrustedAuthorityError = function() {
      return new e(ie.untrustedAuthority.code, ie.untrustedAuthority.desc);
    }, e.createInvalidAzureCloudInstanceError = function() {
      return new e(ie.invalidAzureCloudInstance.code, ie.invalidAzureCloudInstance.desc);
    }, e.createMissingSshJwkError = function() {
      return new e(ie.missingSshJwk.code, ie.missingSshJwk.desc);
    }, e.createMissingSshKidError = function() {
      return new e(ie.missingSshKid.code, ie.missingSshKid.desc);
    }, e.createMissingNonceAuthenticationHeadersError = function() {
      return new e(ie.missingNonceAuthenticationHeader.code, ie.missingNonceAuthenticationHeader.desc);
    }, e.createInvalidAuthenticationHeaderError = function(t, r) {
      return new e(ie.invalidAuthenticationHeader.code, ie.invalidAuthenticationHeader.desc + ". Invalid header: " + t + ". Details: " + r);
    }, e.createAuthorityMismatchError = function() {
      return new e(ie.authorityMismatch.code, ie.authorityMismatch.desc);
    }, e;
  }(W)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ke = (
  /** @class */
  function() {
    function n(e) {
      var t = this, r = e ? q.trimArrayEntries(ti(e)) : [], o = r ? q.removeEmptyStringsFromArray(r) : [];
      this.validateInputScopes(o), this.scopes = /* @__PURE__ */ new Set(), o.forEach(function(i) {
        return t.scopes.add(i);
      });
    }
    return n.fromString = function(e) {
      var t = e || I.EMPTY_STRING, r = t.split(" ");
      return new n(r);
    }, n.createSearchScopes = function(e) {
      var t = new n(e);
      return t.containsOnlyOIDCScopes() ? t.removeScope(I.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t;
    }, n.prototype.validateInputScopes = function(e) {
      if (!e || e.length < 1)
        throw Se.createEmptyScopesArrayError();
    }, n.prototype.containsScope = function(e) {
      var t = this.printScopesLowerCase().split(" "), r = new n(t);
      return q.isEmpty(e) ? !1 : r.scopes.has(e.toLowerCase());
    }, n.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(r) {
        return t.containsScope(r);
      });
    }, n.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Ec.forEach(function(r) {
        e.containsScope(r) && (t += 1);
      }), this.scopes.size === t;
    }, n.prototype.appendScope = function(e) {
      q.isEmpty(e) || this.scopes.add(e.trim());
    }, n.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(r) {
          return t.appendScope(r);
        });
      } catch (r) {
        throw W.createAppendScopeSetError(r);
      }
    }, n.prototype.removeScope = function(e) {
      if (q.isEmpty(e))
        throw W.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, n.prototype.removeOIDCScopes = function() {
      var e = this;
      Ec.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, n.prototype.unionScopeSets = function(e) {
      if (!e)
        throw W.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(r) {
        return t.add(r.toLowerCase());
      }), this.scopes.forEach(function(r) {
        return t.add(r.toLowerCase());
      }), t;
    }, n.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw W.createEmptyInputScopeSetError();
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
      return I.EMPTY_STRING;
    }, n.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Po(n, e) {
  if (q.isEmpty(n))
    throw W.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(n);
    return JSON.parse(t);
  } catch (r) {
    throw W.createClientInfoDecodingError(r.message);
  }
}
function nr(n) {
  if (q.isEmpty(n))
    throw W.createClientInfoDecodingError("Home account ID was empty.");
  var e = n.split(Me.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? I.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var et;
(function(n) {
  n[n.Default = 0] = "Default", n[n.Adfs = 1] = "Adfs", n[n.Dsts = 2] = "Dsts", n[n.Ciam = 3] = "Ciam";
})(et || (et = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var lr;
(function(n) {
  n.AAD = "AAD", n.OIDC = "OIDC";
})(lr || (lr = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ge = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.generateAccountId = function() {
      var e = [this.homeAccountId, this.environment];
      return e.join(Me.CACHE_KEY_SEPARATOR).toLowerCase();
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
        e.environment || I.EMPTY_STRING,
        e.tenantId || I.EMPTY_STRING
      ];
      return t.join(Me.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.createAccount = function(e, t) {
      var r = new n();
      t.authorityType === et.Adfs ? r.authorityType = An.ADFS_ACCOUNT_TYPE : t.protocolMode === lr.AAD ? r.authorityType = An.MSSTS_ACCOUNT_TYPE : r.authorityType = An.GENERIC_ACCOUNT_TYPE, r.clientInfo = e.clientInfo, r.homeAccountId = e.homeAccountId, r.nativeAccountId = e.nativeAccountId;
      var o = e.environment || t && t.getPreferredCache();
      if (!o)
        throw W.createInvalidCacheEnvironmentError();
      if (r.environment = o, r.realm = e.idTokenClaims.tid || I.EMPTY_STRING, r.idTokenClaims = e.idTokenClaims, r.localAccountId = e.idTokenClaims.oid || e.idTokenClaims.sub || I.EMPTY_STRING, r.authorityType === An.MSSTS_ACCOUNT_TYPE) {
        var i = e.idTokenClaims.preferred_username, a = e.idTokenClaims.emails ? e.idTokenClaims.emails[0] : null;
        r.username = i || a || "";
      } else
        r.username = e.idTokenClaims.upn || "";
      return r.name = e.idTokenClaims.name, r.cloudGraphHostName = e.cloudGraphHostName, r.msGraphHost = e.msGraphHost, r;
    }, n.createFromAccountInfo = function(e, t, r) {
      var o = new n();
      return o.authorityType = e.authorityType || An.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.idTokenClaims = e.idTokenClaims, o.cloudGraphHostName = t, o.msGraphHost = r, o;
    }, n.generateHomeAccountId = function(e, t, r, o, i) {
      var a = i != null && i.sub ? i.sub : I.EMPTY_STRING;
      if (t === et.Adfs || t === et.Dsts)
        return a;
      if (e)
        try {
          var s = Po(e, o);
          if (!q.isEmpty(s.uid) && !q.isEmpty(s.utid))
            return "" + s.uid + Me.CLIENT_INFO_SEPARATOR + s.utid;
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
var Ht = (
  /** @class */
  function() {
    function n(e, t) {
      if (q.isEmpty(e))
        throw W.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = n.extractTokenClaims(e, t);
    }
    return n.extractTokenClaims = function(e, t) {
      var r = q.decodeAuthToken(e);
      try {
        var o = r.JWSPayload, i = t.base64Decode(o);
        return JSON.parse(i);
      } catch (a) {
        throw W.createTokenParsingError(a);
      }
    }, n.checkMaxAge = function(e, t) {
      var r = 3e5;
      if (t === 0 || Date.now() - r > e + t)
        throw W.createMaxAgeTranspiredError();
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ze = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = r.clone(au, ja);
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
      return r && (t.idToken = r.secret, t.idTokenClaims = new Ht(r.secret, this.cryptoImpl).claims), t;
    }, n.prototype.saveCacheRecord = function(e) {
      return ae(this, void 0, void 0, function() {
        return se(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw W.createNullOrUndefinedCacheRecord();
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
      return ae(this, void 0, void 0, function() {
        var t, r, o, i, a = this;
        return se(this, function(s) {
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
              }, r = this.getTokenKeys(), o = Ke.fromString(e.target), i = [], r.accessToken.forEach(function(c) {
                if (a.accessTokenKeyMatchesFilter(c, t, !1)) {
                  var l = a.getAccessTokenCredential(c);
                  if (l && a.credentialMatchesFilter(l, t)) {
                    var u = Ke.fromString(l.target);
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
      return !(e.split(Me.CACHE_KEY_SEPARATOR).length < 3 || t && !e.toLowerCase().includes(t.toLowerCase()) || r && !e.toLowerCase().includes(r.toLowerCase()));
    }, n.prototype.isCredentialKey = function(e) {
      if (e.split(Me.CACHE_KEY_SEPARATOR).length < 6)
        return !1;
      var t = e.toLowerCase();
      if (t.indexOf(ee.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(ee.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(ee.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(ee.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(ee.REFRESH_TOKEN.toLowerCase()) > -1) {
        var r = "" + ee.REFRESH_TOKEN + Me.CACHE_KEY_SEPARATOR + this.clientId + Me.CACHE_KEY_SEPARATOR, o = "" + ee.REFRESH_TOKEN + Me.CACHE_KEY_SEPARATOR + xr + Me.CACHE_KEY_SEPARATOR;
        if (t.indexOf(r.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, n.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === ee.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === ve.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
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
      return ae(this, void 0, void 0, function() {
        var e, t, r = this;
        return se(this, function(o) {
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
      return ae(this, void 0, void 0, function() {
        var t;
        return se(this, function(r) {
          switch (r.label) {
            case 0:
              if (t = this.getAccount(e), !t)
                throw W.createNoAccountFoundError();
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
      return ae(this, void 0, void 0, function() {
        var t, r, o, i = this;
        return se(this, function(a) {
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
      return ae(this, void 0, void 0, function() {
        var t, r, o;
        return se(this, function(i) {
          switch (i.label) {
            case 0:
              if (t = this.getAccessTokenCredential(e), !t)
                return [
                  2
                  /*return*/
                ];
              if (t.credentialType.toLowerCase() !== ee.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (t.tokenType !== ve.POP)
                return [3, 4];
              if (r = t, o = r.keyId, !o)
                return [3, 4];
              i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(o)];
            case 2:
              return i.sent(), [3, 4];
            case 3:
              throw i.sent(), W.createBindingKeyNotRemovedError();
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
      return i && a && (i.idTokenClaims = new Ht(a.secret, this.cryptoImpl).claims), {
        account: i,
        idToken: a,
        accessToken: s,
        refreshToken: c,
        appMetadata: l
      };
    }, n.prototype.readAccountFromCache = function(e) {
      var t = Ge.generateAccountCacheKey(e);
      return this.getAccount(t);
    }, n.prototype.getIdToken = function(e, t) {
      var r = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: ee.ID_TOKEN,
        clientId: this.clientId,
        realm: e.tenantId
      }, i = this.getIdTokensByFilter(o, t), a = i.length;
      return a < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : a > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), i.forEach(function(s) {
        r.removeIdToken(s.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), i[0]);
    }, n.prototype.getIdTokensByFilter = function(e, t) {
      var r = this, o = t && t.idToken || this.getTokenKeys().idToken, i = [];
      return o.forEach(function(a) {
        if (r.idTokenKeyMatchesFilter(a, ye({ clientId: r.clientId }, e))) {
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
      var i = Ke.createSearchScopes(t.scopes), a = t.authenticationScheme || ve.BEARER, s = a && a.toLowerCase() !== ve.BEARER.toLowerCase() ? ee.ACCESS_TOKEN_WITH_AUTH_SCHEME : ee.ACCESS_TOKEN, c = {
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
      l.forEach(function(d) {
        if (o.accessTokenKeyMatchesFilter(d, c, !0)) {
          var h = o.getAccessTokenCredential(d);
          h && o.credentialMatchesFilter(h, c) && u.push(h);
        }
      });
      var f = u.length;
      return f < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : f > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), u.forEach(function(d) {
        o.removeAccessToken(d.generateCredentialKey());
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
      var i = t ? xr : void 0, a = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: ee.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: i
      }, s = r && r.refreshToken || this.getTokenKeys().refreshToken, c = [];
      s.forEach(function(u) {
        if (o.refreshTokenKeyMatchesFilter(u, a)) {
          var f = o.getRefreshTokenCredential(u);
          f && o.credentialMatchesFilter(f, a) && c.push(f);
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
        throw W.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, n.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === xr);
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
      var r = e.credentialType !== ee.ACCESS_TOKEN && e.credentialType !== ee.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (r || !e.target)
        return !1;
      var o = Ke.fromString(e.target);
      return o.containsScopeSet(t);
    }, n.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, n.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, n.prototype.isAppMetadata = function(e) {
      return e.indexOf(oa) !== -1;
    }, n.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(Dr.CACHE_KEY) !== -1;
    }, n.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return Dr.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, n.toObject = function(e, t) {
      for (var r in t)
        e[r] = t[r];
      return e;
    }, n;
  }()
), sg = (
  /** @class */
  function(n) {
    it(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return ae(this, void 0, void 0, function() {
        var t;
        return se(this, function(r) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", Q.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw Q.createUnexpectedError(t);
    }, e;
  }(Ze)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var cg = 300, su = {
  tokenRenewalOffsetSeconds: cg,
  preventCorsPreflight: !1
}, lg = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: Ie.Info,
  correlationId: I.EMPTY_STRING
}, ug = {
  claimsBasedCachingEnabled: !0
}, dg = {
  sendGetRequestAsync: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Network interface - sendGetRequestAsync() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  },
  sendPostRequestAsync: function() {
    return ae(this, void 0, void 0, function() {
      var n;
      return se(this, function(e) {
        throw n = "Network interface - sendPostRequestAsync() has not been implemented", Q.createUnexpectedError(n);
      });
    });
  }
}, fg = {
  sku: I.SKU,
  version: ja,
  cpu: I.EMPTY_STRING,
  os: I.EMPTY_STRING
}, hg = {
  clientSecret: I.EMPTY_STRING,
  clientAssertion: void 0
}, pg = {
  azureCloudInstance: $r.None,
  tenant: "" + I.DEFAULT_COMMON_TENANT
}, gg = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function mg(n) {
  var e = n.authOptions, t = n.systemOptions, r = n.loggerOptions, o = n.cacheOptions, i = n.storageInterface, a = n.networkInterface, s = n.cryptoInterface, c = n.clientCredentials, l = n.libraryInfo, u = n.telemetry, f = n.serverTelemetryManager, d = n.persistencePlugin, h = n.serializableCache, p = ye(ye({}, lg), r);
  return {
    authOptions: yg(e),
    systemOptions: ye(ye({}, su), t),
    loggerOptions: p,
    cacheOptions: ye(ye({}, ug), o),
    storageInterface: i || new sg(e.clientId, Ro, new Fa(p)),
    networkInterface: a || dg,
    cryptoInterface: s || Ro,
    clientCredentials: c || hg,
    libraryInfo: ye(ye({}, fg), l),
    telemetry: ye(ye({}, gg), u),
    serverTelemetryManager: f || null,
    persistencePlugin: d || null,
    serializableCache: h || null
  };
}
function yg(n) {
  return ye({ clientCapabilities: [], azureCloudOptions: pg, skipAuthorityMetadataCache: !1 }, n);
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ln = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r, o) {
      var i = n.call(this, t, r, o) || this;
      return i.name = "ServerError", Object.setPrototypeOf(i, e.prototype), i;
    }
    return e;
  }(Q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var No = (
  /** @class */
  function() {
    function n() {
    }
    return n.generateThrottlingStorageKey = function(e) {
      return Lr.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, n.preProcess = function(e, t) {
      var r, o = n.generateThrottlingStorageKey(t), i = e.getThrottlingCache(o);
      if (i) {
        if (i.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new Ln(((r = i.errorCodes) === null || r === void 0 ? void 0 : r.join(" ")) || I.EMPTY_STRING, i.errorMessage, i.subError);
      }
    }, n.postProcess = function(e, t, r) {
      if (n.checkResponseStatus(r) || n.checkResponseForRetryAfter(r)) {
        var o = {
          throttleTime: n.calculateThrottleTime(parseInt(r.headers[ut.RETRY_AFTER])),
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
      return e.headers ? e.headers.hasOwnProperty(ut.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1;
    }, n.calculateThrottleTime = function(e) {
      var t = e <= 0 ? 0 : e, r = Date.now() / 1e3;
      return Math.floor(Math.min(r + (t || Lr.DEFAULT_THROTTLE_TIME_SECONDS), r + Lr.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
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
var vg = (
  /** @class */
  function() {
    function n(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return n.prototype.sendPostRequest = function(e, t, r) {
      return ae(this, void 0, void 0, function() {
        var o, i;
        return se(this, function(a) {
          switch (a.label) {
            case 0:
              No.preProcess(this.cacheManager, e), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, r)];
            case 2:
              return o = a.sent(), [3, 4];
            case 3:
              throw i = a.sent(), i instanceof Q ? i : W.createNetworkError(t, i);
            case 4:
              return No.postProcess(this.cacheManager, e, o), [2, o];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ct;
(function(n) {
  n.HOME_ACCOUNT_ID = "home_account_id", n.UPN = "UPN";
})(ct || (ct = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _n = (
  /** @class */
  function() {
    function n() {
    }
    return n.validateRedirectUri = function(e) {
      if (q.isEmpty(e))
        throw Se.createRedirectUriEmptyError();
    }, n.validatePrompt = function(e) {
      var t = [];
      for (var r in Ve)
        t.push(Ve[r]);
      if (t.indexOf(e) < 0)
        throw Se.createInvalidPromptError(e);
    }, n.validateClaims = function(e) {
      try {
        JSON.parse(e);
      } catch {
        throw Se.createInvalidClaimsRequestError();
      }
    }, n.validateCodeChallengeParams = function(e, t) {
      if (q.isEmpty(e) || q.isEmpty(t))
        throw Se.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, n.validateCodeChallengeMethod = function(e) {
      if ([
        Ic.PLAIN,
        Ic.S256
      ].indexOf(e) < 0)
        throw Se.createInvalidCodeChallengeMethodError();
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
var jr = (
  /** @class */
  function() {
    function n() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return n.prototype.addResponseTypeCode = function() {
      this.parameters.set(ce.RESPONSE_TYPE, encodeURIComponent(I.CODE_RESPONSE_TYPE));
    }, n.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(ce.RESPONSE_TYPE, encodeURIComponent(I.TOKEN_RESPONSE_TYPE + " " + I.ID_TOKEN_RESPONSE_TYPE));
    }, n.prototype.addResponseMode = function(e) {
      this.parameters.set(ce.RESPONSE_MODE, encodeURIComponent(e || _o.QUERY));
    }, n.prototype.addNativeBroker = function() {
      this.parameters.set(ce.NATIVE_BROKER, encodeURIComponent("1"));
    }, n.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var r = t ? ti(e || [], eo) : e || [], o = new Ke(r);
      this.parameters.set(ce.SCOPE, encodeURIComponent(o.printScopes()));
    }, n.prototype.addClientId = function(e) {
      this.parameters.set(ce.CLIENT_ID, encodeURIComponent(e));
    }, n.prototype.addRedirectUri = function(e) {
      _n.validateRedirectUri(e), this.parameters.set(ce.REDIRECT_URI, encodeURIComponent(e));
    }, n.prototype.addPostLogoutRedirectUri = function(e) {
      _n.validateRedirectUri(e), this.parameters.set(ce.POST_LOGOUT_URI, encodeURIComponent(e));
    }, n.prototype.addIdTokenHint = function(e) {
      this.parameters.set(ce.ID_TOKEN_HINT, encodeURIComponent(e));
    }, n.prototype.addDomainHint = function(e) {
      this.parameters.set(Mr.DOMAIN_HINT, encodeURIComponent(e));
    }, n.prototype.addLoginHint = function(e) {
      this.parameters.set(Mr.LOGIN_HINT, encodeURIComponent(e));
    }, n.prototype.addCcsUpn = function(e) {
      this.parameters.set(ut.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, n.prototype.addCcsOid = function(e) {
      this.parameters.set(ut.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, n.prototype.addSid = function(e) {
      this.parameters.set(Mr.SID, encodeURIComponent(e));
    }, n.prototype.addClaims = function(e, t) {
      var r = this.addClientCapabilitiesToClaims(e, t);
      _n.validateClaims(r), this.parameters.set(ce.CLAIMS, encodeURIComponent(r));
    }, n.prototype.addCorrelationId = function(e) {
      this.parameters.set(ce.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, n.prototype.addLibraryInfo = function(e) {
      this.parameters.set(ce.X_CLIENT_SKU, e.sku), this.parameters.set(ce.X_CLIENT_VER, e.version), e.os && this.parameters.set(ce.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(ce.X_CLIENT_CPU, e.cpu);
    }, n.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(ce.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(ce.X_APP_VER, e.appVersion);
    }, n.prototype.addPrompt = function(e) {
      _n.validatePrompt(e), this.parameters.set("" + ce.PROMPT, encodeURIComponent(e));
    }, n.prototype.addState = function(e) {
      q.isEmpty(e) || this.parameters.set(ce.STATE, encodeURIComponent(e));
    }, n.prototype.addNonce = function(e) {
      this.parameters.set(ce.NONCE, encodeURIComponent(e));
    }, n.prototype.addCodeChallengeParams = function(e, t) {
      if (_n.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(ce.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(ce.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw Se.createInvalidCodeChallengeParamsError();
    }, n.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(ce.CODE, encodeURIComponent(e));
    }, n.prototype.addDeviceCode = function(e) {
      this.parameters.set(ce.DEVICE_CODE, encodeURIComponent(e));
    }, n.prototype.addRefreshToken = function(e) {
      this.parameters.set(ce.REFRESH_TOKEN, encodeURIComponent(e));
    }, n.prototype.addCodeVerifier = function(e) {
      this.parameters.set(ce.CODE_VERIFIER, encodeURIComponent(e));
    }, n.prototype.addClientSecret = function(e) {
      this.parameters.set(ce.CLIENT_SECRET, encodeURIComponent(e));
    }, n.prototype.addClientAssertion = function(e) {
      q.isEmpty(e) || this.parameters.set(ce.CLIENT_ASSERTION, encodeURIComponent(e));
    }, n.prototype.addClientAssertionType = function(e) {
      q.isEmpty(e) || this.parameters.set(ce.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, n.prototype.addOboAssertion = function(e) {
      this.parameters.set(ce.OBO_ASSERTION, encodeURIComponent(e));
    }, n.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(ce.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, n.prototype.addGrantType = function(e) {
      this.parameters.set(ce.GRANT_TYPE, encodeURIComponent(e));
    }, n.prototype.addClientInfo = function() {
      this.parameters.set(ag, "1");
    }, n.prototype.addExtraQueryParameters = function(e) {
      var t = this, r = _n.sanitizeEQParams(e, this.parameters);
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
          throw Se.createInvalidClaimsRequestError();
        }
      return t && t.length > 0 && (r.hasOwnProperty(er.ACCESS_TOKEN) || (r[er.ACCESS_TOKEN] = {}), r[er.ACCESS_TOKEN][er.XMS_CC] = {
        values: t
      }), JSON.stringify(r);
    }, n.prototype.addUsername = function(e) {
      this.parameters.set(Ao.username, encodeURIComponent(e));
    }, n.prototype.addPassword = function(e) {
      this.parameters.set(Ao.password, encodeURIComponent(e));
    }, n.prototype.addPopToken = function(e) {
      q.isEmpty(e) || (this.parameters.set(ce.TOKEN_TYPE, ve.POP), this.parameters.set(ce.REQ_CNF, encodeURIComponent(e)));
    }, n.prototype.addSshJwk = function(e) {
      q.isEmpty(e) || (this.parameters.set(ce.TOKEN_TYPE, ve.SSH), this.parameters.set(ce.REQ_CNF, encodeURIComponent(e)));
    }, n.prototype.addServerTelemetry = function(e) {
      this.parameters.set(ce.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(ce.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, n.prototype.addThrottling = function() {
      this.parameters.set(ce.X_MS_LIB_CAPABILITY, Lr.X_MS_LIB_CAPABILITY_VALUE);
    }, n.prototype.addLogoutHint = function(e) {
      this.parameters.set(ce.LOGOUT_HINT, encodeURIComponent(e));
    }, n.prototype.createQueryString = function() {
      var e = new Array();
      return this.parameters.forEach(function(t, r) {
        e.push(r + "=" + t);
      }), e.join("&");
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ua = (
  /** @class */
  function() {
    function n(e, t) {
      this.config = mg(e), this.logger = new Fa(this.config.loggerOptions, au, ja), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new vg(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return n.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[ut.CONTENT_TYPE] = I.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case ct.HOME_ACCOUNT_ID:
            try {
              var r = nr(e.credential);
              t[ut.CCS_HEADER] = "Oid:" + r.uid + "@" + r.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case ct.UPN:
            t[ut.CCS_HEADER] = "UPN: " + e.credential;
            break;
        }
      return t;
    }, n.prototype.executePostToTokenEndpoint = function(e, t, r, o) {
      return ae(this, void 0, void 0, function() {
        var i;
        return se(this, function(a) {
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
        throw W.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, n.prototype.createTokenQueryParameters = function(e) {
      var t = new jr();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ha = (
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
        case ee.ID_TOKEN:
          return Or.ID_TOKEN;
        case ee.ACCESS_TOKEN:
        case ee.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return Or.ACCESS_TOKEN;
        case ee.REFRESH_TOKEN:
          return Or.REFRESH_TOKEN;
        default:
          throw W.createUnexpectedCredentialTypeError();
      }
    }, n.generateCredentialCacheKey = function(e, t, r, o, i, a, s, c, l) {
      var u = [
        this.generateAccountIdForCacheKey(e, t),
        this.generateCredentialIdForCacheKey(r, o, i, s),
        this.generateTargetForCacheKey(a),
        this.generateClaimsHashForCacheKey(l),
        this.generateSchemeForCacheKey(c)
      ];
      return u.join(Me.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.generateAccountIdForCacheKey = function(e, t) {
      var r = [e, t];
      return r.join(Me.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.generateCredentialIdForCacheKey = function(e, t, r, o) {
      var i = e === ee.REFRESH_TOKEN && o || t, a = [
        e,
        i,
        r || I.EMPTY_STRING
      ];
      return a.join(Me.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.generateTargetForCacheKey = function(e) {
      return (e || I.EMPTY_STRING).toLowerCase();
    }, n.generateClaimsHashForCacheKey = function(e) {
      return (e || I.EMPTY_STRING).toLowerCase();
    }, n.generateSchemeForCacheKey = function(e) {
      return e && e.toLowerCase() !== ve.BEARER.toLowerCase() ? e.toLowerCase() : I.EMPTY_STRING;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var fn = (
  /** @class */
  function(n) {
    it(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, r, o, i, a) {
      var s = new e();
      return s.credentialType = ee.ID_TOKEN, s.homeAccountId = t, s.environment = r, s.clientId = i, s.secret = o, s.realm = a, s;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === ee.ID_TOKEN : !1;
    }, e;
  }(Ha)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var vt = (
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
var hn = (
  /** @class */
  function(n) {
    it(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, r, o, i, a, s, c, l, u, f, d, h, p, g, m) {
      var b, C, v = new e();
      v.homeAccountId = t, v.credentialType = ee.ACCESS_TOKEN, v.secret = o;
      var w = vt.nowSeconds();
      if (v.cachedAt = w.toString(), v.expiresOn = c.toString(), v.extendedExpiresOn = l.toString(), f && (v.refreshOn = f.toString()), v.environment = r, v.clientId = i, v.realm = a, v.target = s, v.userAssertionHash = h, v.tokenType = q.isEmpty(d) ? ve.BEARER : d, g && (v.requestedClaims = g, v.requestedClaimsHash = m), ((b = v.tokenType) === null || b === void 0 ? void 0 : b.toLowerCase()) !== ve.BEARER.toLowerCase())
        switch (v.credentialType = ee.ACCESS_TOKEN_WITH_AUTH_SCHEME, v.tokenType) {
          case ve.POP:
            var S = Ht.extractTokenClaims(o, u);
            if (!(!((C = S == null ? void 0 : S.cnf) === null || C === void 0) && C.kid))
              throw W.createTokenClaimsRequiredError();
            v.keyId = S.cnf.kid;
            break;
          case ve.SSH:
            v.keyId = p;
        }
      return v;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === ee.ACCESS_TOKEN || t.credentialType === ee.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Ha)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var rr = (
  /** @class */
  function(n) {
    it(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, r, o, i, a, s) {
      var c = new e();
      return c.clientId = i, c.credentialType = ee.REFRESH_TOKEN, c.environment = r, c.homeAccountId = t, c.secret = o, c.userAssertionHash = s, a && (c.familyId = a), c;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === ee.REFRESH_TOKEN : !1;
    }, e;
  }(Ha)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _c = [
  "interaction_required",
  "consent_required",
  "login_required"
], bg = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], or = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
}, Pt = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r, o, i, a, s, c) {
      var l = n.call(this, t, r, o) || this;
      return Object.setPrototypeOf(l, e.prototype), l.timestamp = i || I.EMPTY_STRING, l.traceId = a || I.EMPTY_STRING, l.correlationId = s || I.EMPTY_STRING, l.claims = c || I.EMPTY_STRING, l.name = "InteractionRequiredAuthError", l;
    }
    return e.isInteractionRequiredError = function(t, r, o) {
      var i = !!t && _c.indexOf(t) > -1, a = !!o && bg.indexOf(o) > -1, s = !!r && _c.some(function(c) {
        return r.indexOf(c) > -1;
      });
      return i || s || a;
    }, e.createNoTokensFoundError = function() {
      return new e(or.noTokensFoundError.code, or.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(or.native_account_unavailable.code, or.native_account_unavailable.desc);
    }, e;
  }(Q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ar = (
  /** @class */
  function() {
    function n(e, t, r, o, i) {
      this.account = e || null, this.idToken = t || null, this.accessToken = r || null, this.refreshToken = o || null, this.appMetadata = i || null;
    }
    return n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Yt = (
  /** @class */
  function() {
    function n() {
    }
    return n.setRequestState = function(e, t, r) {
      var o = n.generateLibraryState(e, r);
      return q.isEmpty(t) ? o : "" + o + I.RESOURCE_DELIM + t;
    }, n.generateLibraryState = function(e, t) {
      if (!e)
        throw W.createNoCryptoObjectError("generateLibraryState");
      var r = {
        id: e.createNewGuid()
      };
      t && (r.meta = t);
      var o = JSON.stringify(r);
      return e.base64Encode(o);
    }, n.parseRequestState = function(e, t) {
      if (!e)
        throw W.createNoCryptoObjectError("parseRequestState");
      if (q.isEmpty(t))
        throw W.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var r = t.split(I.RESOURCE_DELIM), o = r[0], i = r.length > 1 ? r.slice(1).join(I.RESOURCE_DELIM) : I.EMPTY_STRING, a = e.base64Decode(o), s = JSON.parse(a);
        return {
          userRequestState: q.isEmpty(i) ? I.EMPTY_STRING : i,
          libraryState: s
        };
      } catch (c) {
        throw W.createInvalidStateError(t, c);
      }
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var he = (
  /** @class */
  function() {
    function n(e) {
      if (this._urlString = e, q.isEmpty(this._urlString))
        throw Se.createUrlEmptyError();
      q.isEmpty(this.getHash()) && (this._urlString = n.canonicalizeUri(e));
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
        return q.endsWith(t, "?") ? t = t.slice(0, -1) : q.endsWith(t, "?/") && (t = t.slice(0, -2)), q.endsWith(t, "/") || (t += "/"), t;
      }
      return e;
    }, n.prototype.validateAsUri = function() {
      var e;
      try {
        e = this.getUrlComponents();
      } catch (t) {
        throw Se.createUrlParseError(t);
      }
      if (!e.HostNameAndPort || !e.PathSegments)
        throw Se.createUrlParseError("Given url string: " + this.urlString);
      if (!e.Protocol || e.Protocol.toLowerCase() !== "https:")
        throw Se.createInsecureAuthorityUriError(this.urlString);
    }, n.appendQueryString = function(e, t) {
      return q.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, n.removeHashFromUrl = function(e) {
      return n.canonicalizeUri(e.split("#")[0]);
    }, n.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), r = t.PathSegments;
      return e && r.length !== 0 && (r[0] === Mn.COMMON || r[0] === Mn.ORGANIZATIONS) && (r[0] = e), n.constructAuthorityUriFromObject(t);
    }, n.prototype.getHash = function() {
      return n.parseHash(this.urlString);
    }, n.prototype.getUrlComponents = function() {
      var e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
      if (!t)
        throw Se.createUrlParseError("Given url string: " + this.urlString);
      var r = {
        Protocol: t[1],
        HostNameAndPort: t[4],
        AbsolutePath: t[5],
        QueryString: t[7]
      }, o = r.AbsolutePath.split("/");
      return o = o.filter(function(i) {
        return i && i.length > 0;
      }), r.PathSegments = o, !q.isEmpty(r.QueryString) && r.QueryString.endsWith("/") && (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)), r;
    }, n.getDomainFromUrl = function(e) {
      var t = RegExp("^([^:/?#]+://)?([^/?#]*)"), r = e.match(t);
      if (!r)
        throw Se.createUrlParseError("Given url string: " + e);
      return r[2];
    }, n.getAbsoluteUrl = function(e, t) {
      if (e[0] === I.FORWARD_SLASH) {
        var r = new n(t), o = r.getUrlComponents();
        return o.Protocol + "//" + o.HostNameAndPort + e;
      }
      return e;
    }, n.parseHash = function(e) {
      var t = e.indexOf("#"), r = e.indexOf("#/");
      return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : I.EMPTY_STRING;
    }, n.parseQueryString = function(e) {
      var t = e.indexOf("?"), r = e.indexOf("/?");
      return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : I.EMPTY_STRING;
    }, n.constructAuthorityUriFromObject = function(e) {
      return new n(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
    }, n.getDeserializedHash = function(e) {
      if (q.isEmpty(e))
        return {};
      var t = n.parseHash(e), r = q.queryStringToObject(q.isEmpty(t) ? e : t);
      if (!r)
        throw W.createHashNotDeserializedError(JSON.stringify(r));
      return r;
    }, n.getDeserializedQueryString = function(e) {
      if (q.isEmpty(e))
        return {};
      var t = n.parseQueryString(e), r = q.queryStringToObject(q.isEmpty(t) ? e : t);
      if (!r)
        throw W.createHashNotDeserializedError(JSON.stringify(r));
      return r;
    }, n.hashContainsKnownProperties = function(e) {
      if (q.isEmpty(e) || e.indexOf("=") < 0)
        return !1;
      var t = n.getDeserializedHash(e);
      return !!(t.code || t.error_description || t.error || t.state);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var k;
(function(n) {
  n.AcquireTokenByCode = "acquireTokenByCode", n.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", n.AcquireTokenSilent = "acquireTokenSilent", n.AcquireTokenSilentAsync = "acquireTokenSilentAsync", n.AcquireTokenPopup = "acquireTokenPopup", n.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", n.CryptoOptsSignJwt = "cryptoOptsSignJwt", n.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", n.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", n.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", n.SsoSilent = "ssoSilent", n.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", n.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", n.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", n.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", n.BrokerHandhshake = "brokerHandshake", n.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", n.AcquireTokenByBroker = "acquireTokenByBroker", n.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", n.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", n.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", n.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", n.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", n.AcquireTokenFromCache = "acquireTokenFromCache", n.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", n.InitializeBaseRequest = "initializeBaseRequest", n.InitializeSilentRequest = "initializeSilentRequest", n.InitializeClientApplication = "initializeClientApplication", n.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", n.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", n.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", n.SilentHandlerLoadFrame = "silentHandlerLoadFrame", n.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", n.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", n.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", n.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", n.GetAuthCodeUrl = "getAuthCodeUrl", n.HandleCodeResponseFromServer = "handleCodeResponseFromServer", n.HandleCodeResponseFromHash = "handleCodeResponseFromHash", n.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", n.AuthClientAcquireToken = "authClientAcquireToken", n.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", n.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", n.AuthClientCreateQueryString = "authClientCreateQueryString", n.PopTokenGenerateCnf = "popTokenGenerateCnf", n.PopTokenGenerateKid = "popTokenGenerateKid", n.HandleServerTokenResponse = "handleServerTokenResponse", n.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", n.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", n.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", n.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", n.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", n.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", n.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", n.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", n.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", n.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", n.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", n.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", n.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", n.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", n.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", n.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", n.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", n.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(k || (k = {}));
var Mo;
(function(n) {
  n[n.NotStarted = 0] = "NotStarted", n[n.InProgress = 1] = "InProgress", n[n.Completed = 2] = "Completed";
})(Mo || (Mo = {}));
var Cg = /* @__PURE__ */ new Set([
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
var aa;
(function(n) {
  n.SW = "sw", n.UHW = "uhw";
})(aa || (aa = {}));
var ur = (
  /** @class */
  function() {
    function n(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return n.prototype.generateCnf = function(e) {
      var t, r;
      return ae(this, void 0, void 0, function() {
        var o, i, a;
        return se(this, function(s) {
          switch (s.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(k.PopTokenGenerateCnf, e.correlationId), (r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(k.PopTokenGenerateKid, e.correlationId), [4, this.generateKid(e)];
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
      return ae(this, void 0, void 0, function() {
        var r;
        return se(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(k.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return r = o.sent(), [2, {
                kid: r,
                xms_ksl: aa.SW
              }];
          }
        });
      });
    }, n.prototype.signPopToken = function(e, t, r) {
      return ae(this, void 0, void 0, function() {
        return se(this, function(o) {
          return [2, this.signPayload(e, t, r)];
        });
      });
    }, n.prototype.signPayload = function(e, t, r, o) {
      return ae(this, void 0, void 0, function() {
        var i, a, s, c, l, u;
        return se(this, function(f) {
          switch (f.label) {
            case 0:
              return i = r.resourceRequestMethod, a = r.resourceRequestUri, s = r.shrClaims, c = r.shrNonce, l = a ? new he(a) : void 0, u = l == null ? void 0 : l.getUrlComponents(), [4, this.cryptoUtils.signJwt(ye({ at: e, ts: vt.nowSeconds(), m: i == null ? void 0 : i.toUpperCase(), u: u == null ? void 0 : u.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: u == null ? void 0 : u.AbsolutePath, q: u != null && u.QueryString ? [[], u.QueryString] : void 0, client_claims: s || void 0 }, o), t, r.correlationId)];
            case 1:
              return [2, f.sent()];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var sa = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.generateAppMetadataKey = function() {
      return n.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, n.generateAppMetadataCacheKey = function(e, t) {
      var r = [
        oa,
        e,
        t
      ];
      return r.join(Me.CACHE_KEY_SEPARATOR).toLowerCase();
    }, n.createAppMetadataEntity = function(e, t, r) {
      var o = new n();
      return o.clientId = e, o.environment = t, r && (o.familyId = r), o;
    }, n.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(oa) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var wg = (
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
var Oo = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a, s) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = r, this.logger = o, this.serializableCache = i, this.persistencePlugin = a, this.performanceClient = s;
    }
    return n.prototype.validateServerAuthorizationCodeResponse = function(e, t, r) {
      if (!e.state || !t)
        throw e.state ? W.createStateNotFoundError("Cached State") : W.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw W.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw Pt.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new Pt(e.error || I.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || I.EMPTY_STRING, e.trace_id || I.EMPTY_STRING, e.correlation_id || I.EMPTY_STRING, e.claims || I.EMPTY_STRING) : new Ln(e.error || I.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && Po(e.client_info, r);
    }, n.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (Pt.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new Pt(e.error, e.error_description, e.suberror, e.timestamp || I.EMPTY_STRING, e.trace_id || I.EMPTY_STRING, e.correlation_id || I.EMPTY_STRING, e.claims || I.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new Ln(e.error, t, e.suberror);
      }
    }, n.prototype.handleServerTokenResponse = function(e, t, r, o, i, a, s, c, l) {
      var u;
      return ae(this, void 0, void 0, function() {
        var f, d, h, p, g, m, b;
        return se(this, function(C) {
          switch (C.label) {
            case 0:
              if ((u = this.performanceClient) === null || u === void 0 || u.addQueueMeasurement(k.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (f = new Ht(e.id_token || I.EMPTY_STRING, this.cryptoObj), i && !q.isEmpty(i.nonce) && f.claims.nonce !== i.nonce)
                  throw W.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (d = f.claims.auth_time, !d)
                    throw W.createAuthTimeNotFoundError();
                  Ht.checkMaxAge(d, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Ge.generateHomeAccountId(e.client_info || I.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, f == null ? void 0 : f.claims), i && i.state && (h = Yt.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0, p = this.generateCacheRecord(e, t, r, o, f, a, i), C.label = 1;
            case 1:
              return C.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), g = new wg(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(g)]) : [3, 3];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return s && !c && p.account && (m = p.account.generateAccountKey(), b = this.cacheStorage.getAccount(m), !b) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, n.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, f, h, void 0, l)]) : [4, this.cacheStorage.saveCacheRecord(p)];
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
              return [2, n.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, f, h, e, l)];
          }
        });
      });
    }, n.prototype.generateCacheRecord = function(e, t, r, o, i, a, s) {
      var c = t.getPreferredCache();
      if (q.isEmpty(c))
        throw W.createInvalidCacheEnvironmentError();
      var l, u;
      !q.isEmpty(e.id_token) && i && (l = fn.createIdTokenEntity(this.homeAccountIdentifier, c, e.id_token || I.EMPTY_STRING, this.clientId, i.claims.tid || I.EMPTY_STRING), u = Ge.createAccount({
        homeAccountId: this.homeAccountIdentifier,
        idTokenClaims: i.claims,
        clientInfo: e.client_info || I.EMPTY_STRING,
        cloudGraphHostName: s == null ? void 0 : s.cloud_graph_host_name,
        msGraphHost: s == null ? void 0 : s.msgraph_host
      }, t));
      var f = null;
      if (!q.isEmpty(e.access_token)) {
        var d = e.scope ? Ke.fromString(e.scope) : new Ke(o.scopes || []), h = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, p = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, g = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, m = r + h, b = m + p, C = g && g > 0 ? r + g : void 0;
        f = hn.createAccessTokenEntity(this.homeAccountIdentifier, c, e.access_token || I.EMPTY_STRING, this.clientId, i ? i.claims.tid || I.EMPTY_STRING : t.tenant, d.printScopes(), m, b, this.cryptoObj, C, e.token_type, a, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var v = null;
      q.isEmpty(e.refresh_token) || (v = rr.createRefreshTokenEntity(this.homeAccountIdentifier, c, e.refresh_token || I.EMPTY_STRING, this.clientId, e.foci, a));
      var w = null;
      return q.isEmpty(e.foci) || (w = sa.createAppMetadataEntity(this.clientId, c, e.foci)), new ar(u, l, f, v, w);
    }, n.generateAuthenticationResult = function(e, t, r, o, i, a, s, c, l) {
      var u, f, d;
      return ae(this, void 0, void 0, function() {
        var h, p, g, m, b, C, v, w, S, E, _;
        return se(this, function(T) {
          switch (T.label) {
            case 0:
              if (h = I.EMPTY_STRING, p = [], g = null, b = I.EMPTY_STRING, !r.accessToken)
                return [3, 4];
              if (r.accessToken.tokenType !== ve.POP)
                return [3, 2];
              if (C = new ur(e), v = r.accessToken, w = v.secret, S = v.keyId, !S)
                throw W.createKeyIdMissingError();
              return [4, C.signPopToken(w, S, i)];
            case 1:
              return h = T.sent(), [3, 3];
            case 2:
              h = r.accessToken.secret, T.label = 3;
            case 3:
              p = Ke.fromString(r.accessToken.target).asArray(), g = new Date(Number(r.accessToken.expiresOn) * 1e3), m = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3), T.label = 4;
            case 4:
              return r.appMetadata && (b = r.appMetadata.familyId === xr ? xr : I.EMPTY_STRING), E = (a == null ? void 0 : a.claims.oid) || (a == null ? void 0 : a.claims.sub) || I.EMPTY_STRING, _ = (a == null ? void 0 : a.claims.tid) || I.EMPTY_STRING, c != null && c.spa_accountid && r.account && (r.account.nativeAccountId = c == null ? void 0 : c.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: E,
                tenantId: _,
                scopes: p,
                account: r.account ? r.account.getAccountInfo() : null,
                idToken: a ? a.rawToken : I.EMPTY_STRING,
                idTokenClaims: a ? a.claims : {},
                accessToken: h,
                fromCache: o,
                expiresOn: g,
                correlationId: i.correlationId,
                requestId: l || I.EMPTY_STRING,
                extExpiresOn: m,
                familyId: b,
                tokenType: ((u = r.accessToken) === null || u === void 0 ? void 0 : u.tokenType) || I.EMPTY_STRING,
                state: s ? s.userRequestState : I.EMPTY_STRING,
                cloudGraphHostName: ((f = r.account) === null || f === void 0 ? void 0 : f.cloudGraphHostName) || I.EMPTY_STRING,
                msGraphHost: ((d = r.account) === null || d === void 0 ? void 0 : d.msGraphHost) || I.EMPTY_STRING,
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
var cu = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var r, o;
      return ae(this, void 0, void 0, function() {
        var i;
        return se(this, function(a) {
          switch (a.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.GetAuthCodeUrl, t.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(k.AuthClientCreateQueryString, t.correlationId), [4, this.createAuthCodeUrlQueryString(t)];
            case 1:
              return i = a.sent(), [2, he.appendQueryString(this.authority.authorizationEndpoint, i)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, r) {
      var o, i, a, s, c, l;
      return ae(this, void 0, void 0, function() {
        var u, f, d, h, p, g, m = this;
        return se(this, function(b) {
          switch (b.label) {
            case 0:
              if (!t || !t.code)
                throw W.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(k.AuthClientAcquireToken, t.correlationId), u = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), f = vt.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(k.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return d = b.sent(), h = (s = d.headers) === null || s === void 0 ? void 0 : s[ut.X_MS_REQUEST_ID], p = (c = d.headers) === null || c === void 0 ? void 0 : c[ut.X_MS_HTTP_VERSION], p && (u == null || u.addStaticFields({
                httpVerAuthority: p
              })), g = new Oo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(k.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, f, t, r, void 0, void 0, void 0, h).then(function(C) {
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
      var o = new Oo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), i = new he(t), a = he.getDeserializedHash(i.getHash());
      if (o.validateServerAuthorizationCodeResponse(a, r, this.cryptoUtils), !a.code)
        throw W.createNoAuthCodeInServerResponseError();
      return ye(ye({}, a), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: a.code
      });
    }, e.prototype.getLogoutUri = function(t) {
      if (!t)
        throw Se.createEmptyLogoutRequestError();
      var r = this.createLogoutUrlQueryString(t);
      return he.appendQueryString(this.authority.endSessionEndpoint, r);
    }, e.prototype.executeTokenRequest = function(t, r) {
      var o, i;
      return ae(this, void 0, void 0, function() {
        var a, s, c, l, u, f, d;
        return se(this, function(h) {
          switch (h.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(k.AuthClientExecuteTokenRequest, r.correlationId), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(k.AuthClientCreateTokenRequestBody, r.correlationId), a = this.createTokenQueryParameters(r), s = he.appendQueryString(t.tokenEndpoint, a), [4, this.createTokenRequestBody(r)];
            case 1:
              if (c = h.sent(), l = void 0, r.clientInfo)
                try {
                  u = Po(r.clientInfo, this.cryptoUtils), l = {
                    credential: "" + u.uid + Me.CLIENT_INFO_SEPARATOR + u.utid,
                    type: ct.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              return f = this.createTokenRequestHeaders(l || r.ccsCredential), d = {
                clientId: this.config.authOptions.clientId,
                authority: t.canonicalAuthority,
                scopes: r.scopes,
                claims: r.claims,
                authenticationScheme: r.authenticationScheme,
                resourceRequestMethod: r.resourceRequestMethod,
                resourceRequestUri: r.resourceRequestUri,
                shrClaims: r.shrClaims,
                sshKid: r.sshKid
              }, [2, this.executePostToTokenEndpoint(s, c, f, d)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var r, o;
      return ae(this, void 0, void 0, function() {
        var i, a, s, c, l, u, f, f, d;
        return se(this, function(h) {
          switch (h.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.AuthClientCreateTokenRequestBody, t.correlationId), i = new jr(), i.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? i.addRedirectUri(t.redirectUri) : _n.validateRedirectUri(t.redirectUri), i.addScopes(t.scopes), i.addAuthorizationCode(t.code), i.addLibraryInfo(this.config.libraryInfo), i.addApplicationTelemetry(this.config.telemetry.application), i.addThrottling(), this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && i.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (a = this.config.clientCredentials.clientAssertion, i.addClientAssertion(a.assertion), i.addClientAssertionType(a.assertionType)), i.addGrantType(ko.AUTHORIZATION_CODE_GRANT), i.addClientInfo(), t.authenticationScheme !== ve.POP ? [3, 2] : (s = new ur(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(k.PopTokenGenerateCnf, t.correlationId), [4, s.generateCnf(t)]);
            case 1:
              return c = h.sent(), i.addPopToken(c.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ve.SSH)
                if (t.sshJwk)
                  i.addSshJwk(t.sshJwk);
                else
                  throw Se.createMissingSshJwkError();
              h.label = 3;
            case 3:
              if (l = t.correlationId || this.config.cryptoInterface.createNewGuid(), i.addCorrelationId(l), (!q.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities), u = void 0, t.clientInfo)
                try {
                  f = Po(t.clientInfo, this.cryptoUtils), u = {
                    credential: "" + f.uid + Me.CLIENT_INFO_SEPARATOR + f.utid,
                    type: ct.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              else
                u = t.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && u)
                switch (u.type) {
                  case ct.HOME_ACCOUNT_ID:
                    try {
                      f = nr(u.credential), i.addCcsOid(f);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case ct.UPN:
                    i.addCcsUpn(u.credential);
                    break;
                }
              return t.tokenBodyParameters && i.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[ce.RETURN_SPA_CODE]) && i.addExtraQueryParameters((d = {}, d[ce.RETURN_SPA_CODE] = "1", d)), [2, i.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var r;
      return ae(this, void 0, void 0, function() {
        var o, i, a, s, c, l, l, l, u, f;
        return se(this, function(d) {
          switch (d.label) {
            case 0:
              if ((r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.AuthClientCreateQueryString, t.correlationId), o = new jr(), o.addClientId(this.config.authOptions.clientId), i = ti(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(i), o.addRedirectUri(t.redirectUri), a = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(a), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ve.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ve.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (s = this.extractAccountSid(t.account), c = this.extractLoginHint(t.account), c) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(c);
                    try {
                      l = nr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (s && t.prompt === Ve.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(s);
                    try {
                      l = nr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      l = nr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!q.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== ve.POP ? [3, 2] : (u = new ur(this.cryptoUtils), [4, u.generateCnf(t)])) : [3, 2];
            case 1:
              f = d.sent(), o.addPopToken(f.reqCnfString), d.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var r = new jr();
      return t.postLogoutRedirectUri && r.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && r.addCorrelationId(t.correlationId), t.idTokenHint && r.addIdTokenHint(t.idTokenHint), t.state && r.addState(t.state), t.logoutHint && r.addLogoutHint(t.logoutHint), t.extraQueryParameters && r.addExtraQueryParameters(t.extraQueryParameters), r.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var r;
      return ((r = t.idTokenClaims) === null || r === void 0 ? void 0 : r.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var r;
      return ((r = t.idTokenClaims) === null || r === void 0 ? void 0 : r.login_hint) || null;
    }, e;
  }(Ua)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var lu = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r) {
      return n.call(this, t, r) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var r, o, i, a, s, c, l;
      return ae(this, void 0, void 0, function() {
        var u, f, d, h, p, g, m = this;
        return se(this, function(b) {
          switch (b.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.RefreshTokenClientAcquireToken, t.correlationId), u = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(k.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), f = vt.nowSeconds(), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(k.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return d = b.sent(), h = (a = d.headers) === null || a === void 0 ? void 0 : a[ut.X_MS_HTTP_VERSION], u == null || u.addStaticFields({
                refreshTokenSize: ((s = d.body.refresh_token) === null || s === void 0 ? void 0 : s.length) || 0
              }), h && (u == null || u.addStaticFields({
                httpVerToken: h
              })), p = (c = d.headers) === null || c === void 0 ? void 0 : c[ut.X_MS_REQUEST_ID], g = new Oo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(k.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, f, t, void 0, void 0, !0, t.forceCache, p).then(function(C) {
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
      return ae(this, void 0, void 0, function() {
        var s, c, l;
        return se(this, function(u) {
          if (!t)
            throw Se.createEmptyTokenRequestError();
          if ((r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw W.createNoAccountInSilentRequestError();
          if (s = this.cacheManager.isAppMetadataFOCI(t.account.environment), s)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(k.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (f) {
              if (c = f instanceof Pt && f.errorCode === or.noTokensFoundError.code, l = f instanceof Ln && f.errorCode === Tc.INVALID_GRANT_ERROR && f.subError === Tc.CLIENT_MISMATCH_ERROR, c || l)
                return (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(k.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw f;
            }
          return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(k.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, r) {
      var o, i, a;
      return ae(this, void 0, void 0, function() {
        var s, c, l;
        return se(this, function(u) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(k.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), s = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(k.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", t.correlationId), c = this.cacheManager.getRefreshToken(t.account, r), !c)
            throw s == null || s.discardMeasurement(), Pt.createNoTokensFoundError();
          return s == null || s.endMeasurement({
            success: !0
          }), l = ye(ye({}, t), { refreshToken: c.secret, authenticationScheme: t.authenticationScheme || ve.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: ct.HOME_ACCOUNT_ID
          } }), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(k.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(l)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, r) {
      var o, i, a;
      return ae(this, void 0, void 0, function() {
        var s, c, l, u, f, d;
        return se(this, function(h) {
          switch (h.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(k.RefreshTokenClientExecuteTokenRequest, t.correlationId), s = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(k.RefreshTokenClientExecuteTokenRequest, t.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(k.RefreshTokenClientCreateTokenRequestBody, t.correlationId), c = this.createTokenQueryParameters(t), l = he.appendQueryString(r.tokenEndpoint, c), [4, this.createTokenRequestBody(t)];
            case 1:
              return u = h.sent(), f = this.createTokenRequestHeaders(t.ccsCredential), d = {
                clientId: this.config.authOptions.clientId,
                authority: r.canonicalAuthority,
                scopes: t.scopes,
                claims: t.claims,
                authenticationScheme: t.authenticationScheme,
                resourceRequestMethod: t.resourceRequestMethod,
                resourceRequestUri: t.resourceRequestUri,
                shrClaims: t.shrClaims,
                sshKid: t.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, f, d).then(function(p) {
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
      return ae(this, void 0, void 0, function() {
        var a, s, c, l, u, f, d;
        return se(this, function(h) {
          switch (h.label) {
            case 0:
              return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.RefreshTokenClientCreateTokenRequestBody, t.correlationId), a = t.correlationId, s = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(k.BaseClientCreateTokenRequestHeaders, a), c = new jr(), c.addClientId(this.config.authOptions.clientId), c.addScopes(t.scopes), c.addGrantType(ko.REFRESH_TOKEN_GRANT), c.addClientInfo(), c.addLibraryInfo(this.config.libraryInfo), c.addApplicationTelemetry(this.config.telemetry.application), c.addThrottling(), this.serverTelemetryManager && c.addServerTelemetry(this.serverTelemetryManager), c.addCorrelationId(a), c.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && c.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (l = this.config.clientCredentials.clientAssertion, c.addClientAssertion(l.assertion), c.addClientAssertionType(l.assertionType)), t.authenticationScheme !== ve.POP ? [3, 2] : (u = new ur(this.cryptoUtils, this.performanceClient), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(k.PopTokenGenerateCnf, t.correlationId), [4, u.generateCnf(t)]);
            case 1:
              return f = h.sent(), c.addPopToken(f.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ve.SSH)
                if (t.sshJwk)
                  c.addSshJwk(t.sshJwk);
                else
                  throw s == null || s.endMeasurement({
                    success: !1
                  }), Se.createMissingSshJwkError();
              h.label = 3;
            case 3:
              if ((!q.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && c.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case ct.HOME_ACCOUNT_ID:
                    try {
                      d = nr(t.ccsCredential.credential), c.addCcsOid(d);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case ct.UPN:
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
  }(Ua)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Sg = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r) {
      return n.call(this, t, r) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return ae(this, void 0, void 0, function() {
        var r, o;
        return se(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(t)];
            case 1:
              return [2, i.sent()];
            case 2:
              if (r = i.sent(), r instanceof W && r.errorCode === F.tokenRefreshRequired.code)
                return o = new lu(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
      return ae(this, void 0, void 0, function() {
        var c, l;
        return se(this, function(u) {
          switch (u.label) {
            case 0:
              if (!t)
                throw Se.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (r = this.serverTelemetryManager) === null || r === void 0 || r.setCacheOutcome(dn.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), W.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !q.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(dn.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), W.createRefreshRequiredError();
              if (!t.account)
                throw W.createNoAccountInSilentRequestError();
              if (c = t.authority || this.authority.getPreferredCache(), l = this.cacheManager.readCacheRecord(t.account, t, c), l.accessToken) {
                if (vt.wasClockTurnedBack(l.accessToken.cachedAt) || vt.isTokenExpired(l.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(dn.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), W.createRefreshRequiredError();
                if (l.accessToken.refreshOn && vt.isTokenExpired(l.accessToken.refreshOn, 0))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(dn.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), W.createRefreshRequiredError();
              } else
                throw (i = this.serverTelemetryManager) === null || i === void 0 || i.setCacheOutcome(dn.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), W.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(l, t)];
            case 1:
              return [2, u.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, r) {
      return ae(this, void 0, void 0, function() {
        var o, i;
        return se(this, function(a) {
          switch (a.label) {
            case 0:
              if (t.idToken && (o = new Ht(t.idToken.secret, this.config.cryptoInterface)), r.maxAge || r.maxAge === 0) {
                if (i = o == null ? void 0 : o.claims.auth_time, !i)
                  throw W.createAuthTimeNotFoundError();
                Ht.checkMaxAge(i, r.maxAge);
              }
              return [4, Oo.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, r, o)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e;
  }(Ua)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Eg(n) {
  return n.hasOwnProperty("authorization_endpoint") && n.hasOwnProperty("token_endpoint") && n.hasOwnProperty("issuer") && n.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var uu = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, kc = uu.endpointMetadata, Ac = uu.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ca = (
  /** @class */
  function() {
    function n() {
      this.expiresAt = vt.nowSeconds() + Dr.REFRESH_TIME_SECONDS;
    }
    return n.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, n.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, n.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, n.prototype.resetExpiresAt = function() {
      this.expiresAt = vt.nowSeconds() + Dr.REFRESH_TIME_SECONDS;
    }, n.prototype.isExpired = function() {
      return this.expiresAt <= vt.nowSeconds();
    }, n.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(Dr.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Ig(n) {
  return n.hasOwnProperty("tenant_discovery_endpoint") && n.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Tg(n) {
  return n.hasOwnProperty("error") && n.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _g = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = r;
    }
    return n.prototype.detectRegion = function(e, t) {
      var r, o, i, a;
      return ae(this, void 0, void 0, function() {
        var s, c, l, u, f;
        return se(this, function(d) {
          switch (d.label) {
            case 0:
              if ((r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.RegionDiscoveryDetectRegion, this.correlationId), s = e, s)
                return [3, 8];
              c = n.IMDS_OPTIONS, d.label = 1;
            case 1:
              return d.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(k.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(I.IMDS_VERSION, c)];
            case 2:
              return l = d.sent(), l.status === tr.httpSuccess && (s = l.body, t.region_source = ln.IMDS), l.status !== tr.httpBadRequest ? [3, 5] : ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(k.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(c)]);
            case 3:
              return u = d.sent(), u ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(k.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(u, c)]) : (t.region_source = ln.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              f = d.sent(), f.status === tr.httpSuccess && (s = f.body, t.region_source = ln.IMDS), d.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return d.sent(), t.region_source = ln.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = ln.ENVIRONMENT_VARIABLE, d.label = 9;
            case 9:
              return s || (t.region_source = ln.FAILED_AUTO_DETECTION), [2, s || null];
          }
        });
      });
    }, n.prototype.getRegionFromIMDS = function(e, t) {
      var r;
      return ae(this, void 0, void 0, function() {
        return se(this, function(o) {
          return (r = this.performanceClient) === null || r === void 0 || r.addQueueMeasurement(k.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(I.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, I.IMDS_TIMEOUT)];
        });
      });
    }, n.prototype.getCurrentVersion = function(e) {
      var t;
      return ae(this, void 0, void 0, function() {
        var r;
        return se(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(k.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(I.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return r = o.sent(), r.status === tr.httpBadRequest && r.body && r.body["newest-versions"] && r.body["newest-versions"].length > 0 ? [2, r.body["newest-versions"][0]] : [2, null];
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
var Kr = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a, s) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = r, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = a, this.correlationId = s, this.regionDiscovery = new _g(t, this.performanceClient, this.correlationId);
    }
    return n.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(I.CIAM_AUTH_URL))
        return et.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case I.ADFS:
            return et.Adfs;
          case I.DSTS:
            return et.Dsts;
        }
      return et.Default;
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
        this._canonicalAuthority = new he(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
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
        throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw W.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !n.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === et.Default && this.protocolMode === lr.AAD;
    }, n.prototype.replaceTenant = function(e) {
      return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, n.prototype.replacePath = function(e) {
      var t = this, r = e, o = new he(this.metadata.canonical_authority), i = o.getUrlComponents(), a = i.PathSegments, s = this.canonicalAuthorityUrlComponents.PathSegments;
      return s.forEach(function(c, l) {
        var u = a[l];
        if (l === 0 && t.canReplaceTenant(i)) {
          var f = new he(t.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          u !== f && (t.logger.verbose("Replacing tenant domain name " + u + " with id " + f), u = f);
        }
        c !== u && (r = r.replace("/" + u + "/", "/" + c + "/"));
      }), this.replaceTenant(r);
    }, Object.defineProperty(n.prototype, "defaultOpenIdConfigurationEndpoint", {
      /**
       * The default open id configuration endpoint for any canonical authority.
       */
      get: function() {
        return this.authorityType === et.Adfs || this.authorityType === et.Dsts || this.protocolMode === lr.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, n.prototype.resolveEndpointsAsync = function() {
      var e, t, r;
      return ae(this, void 0, void 0, function() {
        var o, i, a, s;
        return se(this, function(c) {
          switch (c.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(k.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new ca(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(k.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return i = c.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(k.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
            case 2:
              return a = c.sent(), i !== yt.CACHE && a !== yt.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), s = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(s, o), this.metadata = o, [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.updateEndpointMetadata = function(e) {
      var t, r, o, i, a, s;
      return ae(this, void 0, void 0, function() {
        var c, l;
        return se(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(k.AuthorityUpdateEndpointMetadata, this.correlationId), c = this.getEndpointMetadataFromConfig(), c ? (e.updateEndpointMetadata(c, !1), [2, yt.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, yt.CACHE] : ((r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(k.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return c = u.sent(), c ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(k.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(c)]) : [3, 3] : [3, 4];
            case 2:
              c = u.sent(), u.label = 3;
            case 3:
              return e.updateEndpointMetadata(c, !0), [2, yt.NETWORK];
            case 4:
              return l = this.getEndpointMetadataFromHardcodedValues(), l && !this.authorityOptions.skipAuthorityMetadataCache ? !((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0) && a.azureRegion ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(k.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(l)]) : [3, 6] : [3, 7];
            case 5:
              l = u.sent(), u.label = 6;
            case 6:
              return e.updateEndpointMetadata(l, !1), [2, yt.HARDCODED_VALUES];
            case 7:
              throw W.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
          }
        });
      });
    }, n.prototype.isAuthoritySameType = function(e) {
      var t = new he(e.canonical_authority), r = t.getUrlComponents().PathSegments;
      return r.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }, n.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata)
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch {
          throw Se.createInvalidAuthorityMetadataError();
        }
      return null;
    }, n.prototype.getEndpointMetadataFromNetwork = function() {
      var e;
      return ae(this, void 0, void 0, function() {
        var t, r;
        return se(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(k.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return r = o.sent(), [2, Eg(r.body) ? r.body : null];
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
      return this.canonicalAuthority in kc ? kc[this.canonicalAuthority] : null;
    }, n.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, r, o, i;
      return ae(this, void 0, void 0, function() {
        var a, s;
        return se(this, function(c) {
          switch (c.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(k.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), a = (r = this.authorityOptions.azureRegionConfiguration) === null || r === void 0 ? void 0 : r.azureRegion, a ? a !== I.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Fr.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = a, [2, n.replaceWithRegionalInformation(e, a)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(k.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((i = this.authorityOptions.azureRegionConfiguration) === null || i === void 0 ? void 0 : i.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (s = c.sent(), s)
                return this.regionDiscoveryMetadata.region_outcome = Fr.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = s, [2, n.replaceWithRegionalInformation(e, s)];
              this.regionDiscoveryMetadata.region_outcome = Fr.AUTO_DETECTION_REQUESTED_FAILED, c.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, n.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, r;
      return ae(this, void 0, void 0, function() {
        var o, i, a;
        return se(this, function(s) {
          switch (s.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(k.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || I.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || I.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || I.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, yt.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), i = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !i ? (this.logger.verbose("Found metadata in the cache."), [2, yt.CACHE]) : (i && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (r = this.performanceClient) === null || r === void 0 || r.setPreQueueTime(k.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = s.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, yt.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), a = this.getCloudDiscoveryMetadataFromHarcodedValues(), a && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(a, !1), [2, yt.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), Se.createUntrustedAuthorityError();
          }
        });
      });
    }, n.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === et.Ciam)
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
          throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), Se.createInvalidCloudDiscoveryMetadataError();
        }
      }
      return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), n.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
    }, n.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var e;
      return ae(this, void 0, void 0, function() {
        var t, r, o, i, a, s, c, l;
        return se(this, function(u) {
          switch (u.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(k.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + I.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", r = {}, o = null, u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, r)];
            case 2:
              if (i = u.sent(), a = void 0, s = void 0, Ig(i.body))
                a = i.body, s = a.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + a.tenant_discovery_endpoint);
              else if (Tg(i.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + i.status), a = i.body, a.error === I.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + a.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + a.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), s = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = n.getCloudDiscoveryMetadataFromNetworkResponse(s, this.hostnameAndPort), [3, 4];
            case 3:
              return c = u.sent(), c instanceof Q ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
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
      return this.canonicalAuthority in Ac ? Ac[this.canonicalAuthority] : null;
    }, n.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(r) {
        return he.getDomainFromUrl(r).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, n.generateAuthority = function(e, t) {
      var r;
      if (t && t.azureCloudInstance !== $r.None) {
        var o = t.tenant ? t.tenant : I.DEFAULT_COMMON_TENANT;
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
      throw W.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, n.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, n.isPublicCloudAuthority = function(e) {
      return I.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, n.buildRegionalAuthorityString = function(e, t, r) {
      var o = new he(e);
      o.validateAsUri();
      var i = o.getUrlComponents(), a = t + "." + i.HostNameAndPort;
      this.isPublicCloudAuthority(i.HostNameAndPort) && (a = t + "." + I.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var s = he.constructAuthorityUriFromObject(ye(ye({}, o.getUrlComponents()), { HostNameAndPort: a })).urlString;
      return r ? s + "?" + r : s;
    }, n.replaceWithRegionalInformation = function(e, t) {
      return e.authorization_endpoint = n.buildRegionalAuthorityString(e.authorization_endpoint, t), e.token_endpoint = n.buildRegionalAuthorityString(e.token_endpoint, t, I.REGIONAL_AUTH_NON_MSI_QUERY_STRING), e.end_session_endpoint && (e.end_session_endpoint = n.buildRegionalAuthorityString(e.end_session_endpoint, t)), e;
    }, n.transformCIAMAuthority = function(e) {
      var t = e.endsWith(I.FORWARD_SLASH) ? e : "" + e + I.FORWARD_SLASH, r = new he(e), o = r.getUrlComponents();
      if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(I.CIAM_AUTH_URL)) {
        var i = o.HostNameAndPort.split(".")[0];
        t = "" + t + i + I.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return t;
    }, n.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      Mn.COMMON,
      Mn.CONSUMERS,
      Mn.ORGANIZATIONS
    ]), n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xo = (
  /** @class */
  function() {
    function n() {
    }
    return n.createDiscoveredInstance = function(e, t, r, o, i, a, s) {
      return ae(this, void 0, void 0, function() {
        var c, l, u;
        return se(this, function(f) {
          switch (f.label) {
            case 0:
              a == null || a.addQueueMeasurement(k.AuthorityFactoryCreateDiscoveredInstance, s), c = Kr.transformCIAMAuthority(e), l = n.createInstance(c, t, r, o, i, a, s), f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), a == null || a.setPreQueueTime(k.AuthorityResolveEndpointsAsync, s), [4, l.resolveEndpointsAsync()];
            case 2:
              return f.sent(), [2, l];
            case 3:
              throw u = f.sent(), W.createEndpointDiscoveryIncompleteError(u);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.createInstance = function(e, t, r, o, i, a, s) {
      if (q.isEmpty(e))
        throw Se.createUrlEmptyError();
      return new Kr(e, t, r, o, i, a, s);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Do = (
  /** @class */
  function() {
    function n() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return n.isServerTelemetryEntity = function(e, t) {
      var r = e.indexOf(Le.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), r && o;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Rc = (
  /** @class */
  function() {
    function n() {
    }
    return n.isThrottlingEntity = function(e, t) {
      var r = !1;
      e && (r = e.indexOf(Lr.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), r && o;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var kg = {
  sendGetRequestAsync: function() {
    var n = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(Q.createUnexpectedError(n));
  },
  sendPostRequestAsync: function() {
    var n = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(Q.createUnexpectedError(n));
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var fo = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, Pc = (
  /** @class */
  function(n) {
    it(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(fo.missingKidError.code, fo.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(fo.missingAlgError.code, fo.missingAlgError.desc);
    }, e;
  }(Q)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ag = (
  /** @class */
  function() {
    function n(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return n.getShrHeaderString = function(e) {
      if (!e.kid)
        throw Pc.createMissingKidError();
      if (!e.alg)
        throw Pc.createMissingAlgError();
      var t = new n({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || ia.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Rg = (
  /** @class */
  function() {
    function n(e, t) {
      this.cacheOutcome = dn.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || I.EMPTY_STRING, this.wrapperVer = e.wrapperVer || I.EMPTY_STRING, this.telemetryCacheKey = Le.CACHE_KEY + Me.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return n.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Le.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Le.VALUE_SEPARATOR), r = this.getRegionDiscoveryFields(), o = [e, r].join(Le.VALUE_SEPARATOR);
      return [Le.SCHEMA_VERSION, o, t].join(Le.CATEGORY_SEPARATOR);
    }, n.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = n.maxErrorsToSend(e), r = e.failedRequests.slice(0, 2 * t).join(Le.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Le.VALUE_SEPARATOR), i = e.errors.length, a = t < i ? Le.OVERFLOW_TRUE : Le.OVERFLOW_FALSE, s = [i, a].join(Le.VALUE_SEPARATOR);
      return [Le.SCHEMA_VERSION, e.cacheHits, r, o, s].join(Le.CATEGORY_SEPARATOR);
    }, n.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Le.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), q.isEmpty(e.subError) ? q.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Le.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, n.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, n.prototype.getLastRequests = function() {
      var e = new Do(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, n.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = n.maxErrorsToSend(e), r = e.errors.length;
      if (t === r)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new Do();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, n.maxErrorsToSend = function(e) {
      var t, r = 0, o = 0, i = e.errors.length;
      for (t = 0; t < i; t++) {
        var a = e.failedRequests[2 * t] || I.EMPTY_STRING, s = e.failedRequests[2 * t + 1] || I.EMPTY_STRING, c = e.errors[t] || I.EMPTY_STRING;
        if (o += a.toString().length + s.toString().length + c.length + 3, o < Le.MAX_LAST_HEADER_BYTES)
          r += 1;
        else
          break;
      }
      return r;
    }, n.prototype.getRegionDiscoveryFields = function() {
      var e = [];
      return e.push(this.regionUsed || I.EMPTY_STRING), e.push(this.regionSource || I.EMPTY_STRING), e.push(this.regionOutcome || I.EMPTY_STRING), e.join(",");
    }, n.prototype.updateRegionDiscoveryMetadata = function(e) {
      this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
    }, n.prototype.setCacheOutcome = function(e) {
      this.cacheOutcome = e;
    }, n;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var du = (
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
      return Cg;
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
        status: Mo.InProgress,
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
          return r.endMeasurement(ye(ye({}, c), l), s);
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
        return a[e.name + "DurationMs"] = Math.floor(l), ye({}, a);
      var u = ye(ye({}, a), e), f = 0;
      return (i = u.incompleteSubMeasurements) === null || i === void 0 || i.forEach(function(d) {
        r.logger.trace("PerformanceClient: Incomplete submeasurement " + d.name + " found for " + e.name, u.correlationId), f++;
      }), u.incompleteSubMeasurements = void 0, u = ye(ye({}, u), { durationMs: Math.round(l), queuedTimeMs: c.totalQueueTime, queuedCount: c.totalQueueCount, queuedManuallyCompletedCount: c.manuallyCompletedCount, status: Mo.Completed, incompleteSubsCount: f }), this.truncateIntegralFields(u, this.getIntFields()), this.emitEvents([u], e.correlationId), u;
    }, n.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var r = this.eventsByCorrelationId.get(t);
      r ? this.eventsByCorrelationId.set(t, ye(ye({}, r), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
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
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, ye({}, e)));
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
var Nc = (
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
), Pg = (
  /** @class */
  function(n) {
    it(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new Nc();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new Nc();
    }, e.prototype.calculateQueuedTime = function(t, r) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, r, o) {
    }, e.prototype.setPreQueueTime = function(t, r) {
    }, e;
  }(du)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var L = {
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
}, K = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return Object.setPrototypeOf(o, e.prototype), o.name = "BrowserAuthError", o;
    }
    return e.createPkceNotGeneratedError = function(t) {
      return new e(L.pkceNotGenerated.code, L.pkceNotGenerated.desc + " Detail:" + t);
    }, e.createCryptoNotAvailableError = function(t) {
      return new e(L.cryptoDoesNotExist.code, L.cryptoDoesNotExist.desc + " Detail:" + t);
    }, e.createHttpMethodNotImplementedError = function(t) {
      return new e(L.httpMethodNotImplementedError.code, L.httpMethodNotImplementedError.desc + " Given Method: " + t);
    }, e.createEmptyNavigationUriError = function() {
      return new e(L.emptyNavigateUriError.code, L.emptyNavigateUriError.desc);
    }, e.createEmptyHashError = function(t) {
      return new e(L.hashEmptyError.code, L.hashEmptyError.desc + " Given Url: " + t);
    }, e.createHashDoesNotContainStateError = function() {
      return new e(L.hashDoesNotContainStateError.code, L.hashDoesNotContainStateError.desc);
    }, e.createHashDoesNotContainKnownPropertiesError = function() {
      return new e(L.hashDoesNotContainKnownPropertiesError.code, L.hashDoesNotContainKnownPropertiesError.desc);
    }, e.createUnableToParseStateError = function() {
      return new e(L.unableToParseStateError.code, L.unableToParseStateError.desc);
    }, e.createStateInteractionTypeMismatchError = function() {
      return new e(L.stateInteractionTypeMismatchError.code, L.stateInteractionTypeMismatchError.desc);
    }, e.createInteractionInProgressError = function() {
      return new e(L.interactionInProgress.code, L.interactionInProgress.desc);
    }, e.createPopupWindowError = function(t) {
      var r = L.popupWindowError.desc;
      return r = q.isEmpty(t) ? r : r + " Details: " + t, new e(L.popupWindowError.code, r);
    }, e.createEmptyWindowCreatedError = function() {
      return new e(L.emptyWindowError.code, L.emptyWindowError.desc);
    }, e.createUserCancelledError = function() {
      return new e(L.userCancelledError.code, L.userCancelledError.desc);
    }, e.createMonitorPopupTimeoutError = function() {
      return new e(L.monitorPopupTimeoutError.code, L.monitorPopupTimeoutError.desc);
    }, e.createMonitorIframeTimeoutError = function() {
      return new e(L.monitorIframeTimeoutError.code, L.monitorIframeTimeoutError.desc);
    }, e.createRedirectInIframeError = function(t) {
      return new e(L.redirectInIframeError.code, L.redirectInIframeError.desc + " (window.parent !== window) => " + t);
    }, e.createBlockReloadInHiddenIframeError = function() {
      return new e(L.blockTokenRequestsInHiddenIframeError.code, L.blockTokenRequestsInHiddenIframeError.desc);
    }, e.createBlockAcquireTokenInPopupsError = function() {
      return new e(L.blockAcquireTokenInPopupsError.code, L.blockAcquireTokenInPopupsError.desc);
    }, e.createIframeClosedPrematurelyError = function() {
      return new e(L.iframeClosedPrematurelyError.code, L.iframeClosedPrematurelyError.desc);
    }, e.createSilentLogoutUnsupportedError = function() {
      return new e(L.silentLogoutUnsupportedError.code, L.silentLogoutUnsupportedError.desc);
    }, e.createNoAccountError = function() {
      return new e(L.noAccountError.code, L.noAccountError.desc);
    }, e.createSilentPromptValueError = function(t) {
      return new e(L.silentPromptValueError.code, L.silentPromptValueError.desc + " Given value: " + t);
    }, e.createUnableToParseTokenRequestCacheError = function() {
      return new e(L.unableToParseTokenRequestCacheError.code, L.unableToParseTokenRequestCacheError.desc);
    }, e.createNoTokenRequestCacheError = function() {
      return new e(L.noTokenRequestCacheError.code, L.noTokenRequestCacheError.desc);
    }, e.createAuthRequestNotSetError = function() {
      return new e(L.authRequestNotSet.code, L.authRequestNotSet.desc);
    }, e.createNoCachedAuthorityError = function() {
      return new e(L.noCachedAuthorityError.code, L.noCachedAuthorityError.desc);
    }, e.createInvalidCacheTypeError = function() {
      return new e(L.invalidCacheType.code, "" + L.invalidCacheType.desc);
    }, e.createNonBrowserEnvironmentError = function() {
      return new e(L.notInBrowserEnvironment.code, L.notInBrowserEnvironment.desc);
    }, e.createDatabaseNotOpenError = function() {
      return new e(L.databaseNotOpen.code, L.databaseNotOpen.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(L.noNetworkConnectivity.code, L.noNetworkConnectivity.desc);
    }, e.createPostRequestFailedError = function(t, r) {
      return new e(L.postRequestFailed.code, L.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + r.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, r) {
      return new e(L.getRequestFailed.code, L.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + r.split("?")[0]);
    }, e.createFailedToParseNetworkResponseError = function(t) {
      return new e(L.failedToParseNetworkResponse.code, L.failedToParseNetworkResponse.desc + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToLoadTokenError = function(t) {
      return new e(L.unableToLoadTokenError.code, L.unableToLoadTokenError.desc + " | " + t);
    }, e.createSigningKeyNotFoundInStorageError = function(t) {
      return new e(L.signingKeyNotFoundInStorage.code, L.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + t);
    }, e.createAuthCodeRequiredError = function() {
      return new e(L.authCodeRequired.code, L.authCodeRequired.desc);
    }, e.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new e(L.authCodeOrNativeAccountRequired.code, L.authCodeOrNativeAccountRequired.desc);
    }, e.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new e(L.spaCodeAndNativeAccountPresent.code, L.spaCodeAndNativeAccountPresent.desc);
    }, e.createDatabaseUnavailableError = function() {
      return new e(L.databaseUnavailable.code, L.databaseUnavailable.desc);
    }, e.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new e(L.unableToAcquireTokenFromNativePlatform.code, L.unableToAcquireTokenFromNativePlatform.desc);
    }, e.createNativeHandshakeTimeoutError = function() {
      return new e(L.nativeHandshakeTimeout.code, L.nativeHandshakeTimeout.desc);
    }, e.createNativeExtensionNotInstalledError = function() {
      return new e(L.nativeExtensionNotInstalled.code, L.nativeExtensionNotInstalled.desc);
    }, e.createNativeConnectionNotEstablishedError = function() {
      return new e(L.nativeConnectionNotEstablished.code, L.nativeConnectionNotEstablished.desc);
    }, e.createNativeBrokerCalledBeforeInitialize = function() {
      return new e(L.nativeBrokerCalledBeforeInitialize.code, L.nativeBrokerCalledBeforeInitialize.desc);
    }, e.createNativePromptParameterNotSupportedError = function() {
      return new e(L.nativePromptNotSupported.code, L.nativePromptNotSupported.desc);
    }, e;
  }(Q)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var At = {
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
}, Rr = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, Wt;
(function(n) {
  n.HandshakeRequest = "Handshake", n.HandshakeResponse = "HandshakeResponse", n.GetToken = "GetToken", n.Response = "Response";
})(Wt || (Wt = {}));
var Ae;
(function(n) {
  n.LocalStorage = "localStorage", n.SessionStorage = "sessionStorage", n.MemoryStorage = "memoryStorage";
})(Ae || (Ae = {}));
var xt;
(function(n) {
  n.GET = "GET", n.POST = "POST";
})(xt || (xt = {}));
var ge;
(function(n) {
  n.AUTHORITY = "authority", n.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", n.SESSION_STATE = "session.state", n.REQUEST_STATE = "request.state", n.NONCE_IDTOKEN = "nonce.id_token", n.ORIGIN_URI = "request.origin", n.RENEW_STATUS = "token.renew.status", n.URL_HASH = "urlHash", n.REQUEST_PARAMS = "request.params", n.SCOPES = "scopes", n.INTERACTION_STATUS_KEY = "interaction.status", n.CCS_CREDENTIAL = "ccs.credential", n.CORRELATION_ID = "request.correlationId", n.NATIVE_REQUEST = "request.native", n.REDIRECT_CONTEXT = "request.redirect.context";
})(ge || (ge = {}));
var Ot;
(function(n) {
  n.ACCOUNT_KEYS = "msal.account.keys", n.TOKEN_KEYS = "msal.token.keys";
})(Ot || (Ot = {}));
var ir;
(function(n) {
  n.WRAPPER_SKU = "wrapper.sku", n.WRAPPER_VER = "wrapper.version";
})(ir || (ir = {}));
var we;
(function(n) {
  n[n.acquireTokenRedirect = 861] = "acquireTokenRedirect", n[n.acquireTokenPopup = 862] = "acquireTokenPopup", n[n.ssoSilent = 863] = "ssoSilent", n[n.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", n[n.handleRedirectPromise = 865] = "handleRedirectPromise", n[n.acquireTokenByCode = 866] = "acquireTokenByCode", n[n.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", n[n.logout = 961] = "logout", n[n.logoutPopup = 962] = "logoutPopup";
})(we || (we = {}));
var Y;
(function(n) {
  n.Redirect = "redirect", n.Popup = "popup", n.Silent = "silent", n.None = "none";
})(Y || (Y = {}));
var Mc;
(function(n) {
  n.Startup = "startup", n.Login = "login", n.Logout = "logout", n.AcquireToken = "acquireToken", n.SsoSilent = "ssoSilent", n.HandleRedirect = "handleRedirect", n.None = "none";
})(Mc || (Mc = {}));
var Oc = {
  scopes: eo
}, dr = "jwk", xc;
(function(n) {
  n.React = "@azure/msal-react", n.Angular = "@azure/msal-angular";
})(xc || (xc = {}));
var la = "msal.db", Ng = 1, Mg = la + ".keys", tt;
(function(n) {
  n[n.Default = 0] = "Default", n[n.AccessToken = 1] = "AccessToken", n[n.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", n[n.RefreshToken = 3] = "RefreshToken", n[n.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", n[n.Skip = 5] = "Skip";
})(tt || (tt = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Xe = {
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
}, Lo = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r) {
      var o = n.call(this, t, r) || this;
      return o.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(Xe.redirectUriNotSet.code, Xe.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(Xe.postLogoutUriNotSet.code, Xe.postLogoutUriNotSet.desc);
    }, e.createStorageNotSupportedError = function(t) {
      return new e(Xe.storageNotSupportedError.code, Xe.storageNotSupportedError.desc + " Given Location: " + t);
    }, e.createRedirectCallbacksNotSetError = function() {
      return new e(Xe.noRedirectCallbacksSet.code, Xe.noRedirectCallbacksSet.desc);
    }, e.createStubPcaInstanceCalledError = function() {
      return new e(Xe.stubPcaInstanceCalled.code, Xe.stubPcaInstanceCalled.desc);
    }, e.createInMemoryRedirectUnavailableError = function() {
      return new e(Xe.inMemRedirectUnavailable.code, Xe.inMemRedirectUnavailable.desc);
    }, e.createEntropyNotProvided = function() {
      return new e(Xe.entropyNotProvided.code, Xe.entropyNotProvided.desc);
    }, e;
  }(Q)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Dc = (
  /** @class */
  function() {
    function n(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return n.prototype.validateWindowStorage = function(e) {
      if (e !== Ae.LocalStorage && e !== Ae.SessionStorage)
        throw Lo.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Lo.createStorageNotSupportedError(e);
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
var ua = (
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
var fu = (
  /** @class */
  function() {
    function n() {
    }
    return n.extractBrowserRequestState = function(e, t) {
      if (q.isEmpty(t))
        return null;
      try {
        var r = Yt.parseRequestState(e, t);
        return r.libraryState.meta;
      } catch (o) {
        throw W.createInvalidStateError(t, o);
      }
    }, n.parseServerResponseFromHash = function(e) {
      if (!e)
        return {};
      var t = new he(e);
      return he.getDeserializedHash(t.getHash());
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var da = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i) {
      var a = n.call(this, t, o, i) || this;
      return a.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, a.cacheConfig = r, a.logger = i, a.internalStorage = new ua(), a.browserStorage = a.setupBrowserStorage(a.cacheConfig.cacheLocation), a.temporaryCacheStorage = a.setupTemporaryCacheStorage(a.cacheConfig.temporaryCacheLocation, a.cacheConfig.cacheLocation), r.cacheMigrationEnabled && (a.migrateCacheEntries(), a.createKeyMaps()), a;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case Ae.LocalStorage:
        case Ae.SessionStorage:
          try {
            return new Dc(t);
          } catch (r) {
            this.logger.verbose(r);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = Ae.MemoryStorage, new ua();
    }, e.prototype.setupTemporaryCacheStorage = function(t, r) {
      switch (r) {
        case Ae.LocalStorage:
        case Ae.SessionStorage:
          try {
            return new Dc(t || Ae.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case Ae.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, r = I.CACHE_PREFIX + "." + Pe.ID_TOKEN, o = I.CACHE_PREFIX + "." + Pe.CLIENT_INFO, i = I.CACHE_PREFIX + "." + Pe.ERROR, a = I.CACHE_PREFIX + "." + Pe.ERROR_DESC, s = this.browserStorage.getItem(r), c = this.browserStorage.getItem(o), l = this.browserStorage.getItem(i), u = this.browserStorage.getItem(a), f = [s, c, l, u], d = [Pe.ID_TOKEN, Pe.CLIENT_INFO, Pe.ERROR, Pe.ERROR_DESC];
      d.forEach(function(h, p) {
        return t.migrateCacheEntry(h, f[p]);
      });
    }, e.prototype.migrateCacheEntry = function(t, r) {
      r && this.setTemporaryCache(t, r, !0);
    }, e.prototype.createKeyMaps = function() {
      var t = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var r = this.getItem(Ot.ACCOUNT_KEYS), o = this.getItem(Ot.TOKEN_KEYS + "." + this.clientId);
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
                case ee.ID_TOKEN:
                  if (fn.isIdTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + a + " found, saving key to token key map");
                    var l = Ze.toObject(new fn(), c), u = t.updateCredentialCacheKey(a, l);
                    t.addTokenKey(u, ee.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + a);
                  break;
                case ee.ACCESS_TOKEN:
                case ee.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (hn.isAccessTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + a + " found, saving key to token key map");
                    var f = Ze.toObject(new hn(), c), u = t.updateCredentialCacheKey(a, f);
                    t.addTokenKey(u, ee.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + a);
                  break;
                case ee.REFRESH_TOKEN:
                  if (rr.isRefreshTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + a + " found, saving key to token key map");
                    var d = Ze.toObject(new rr(), c), u = t.updateCredentialCacheKey(a, d);
                    t.addTokenKey(u, ee.REFRESH_TOKEN);
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
            h && Ge.isAccountEntity(h) && (t.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + a + " found, saving key to account key map"), t.addAccountKeyToMap(a));
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
      return !o || !Ge.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : Ze.toObject(new Ge(), o);
    }, e.prototype.setAccount = function(t) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var r = t.generateAccountKey();
      this.setItem(r, JSON.stringify(t)), this.addAccountKeyToMap(r);
    }, e.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var t = this.getItem(Ot.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var r = this.getAccountKeys();
      r.indexOf(t) === -1 ? (r.push(t), this.setItem(Ot.ACCOUNT_KEYS, JSON.stringify(r)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var r = this.getAccountKeys(), o = r.indexOf(t);
      o > -1 ? (r.splice(o, 1), this.setItem(Ot.ACCOUNT_KEYS, JSON.stringify(r)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }, e.prototype.removeAccount = function(t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return n.prototype.removeAccount.call(this, t), this.removeAccountKeyFromMap(t), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeIdToken = function(t) {
      n.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, ee.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return n.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, ee.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      n.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, ee.REFRESH_TOKEN);
    }, e.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var t = this.getItem(Ot.TOKEN_KEYS + "." + this.clientId);
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
        case ee.ID_TOKEN:
          o.idToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(t));
          break;
        case ee.ACCESS_TOKEN:
          o.accessToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(t));
          break;
        case ee.REFRESH_TOKEN:
          o.refreshToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(t));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + r), W.createUnexpectedCredentialTypeError();
      }
      this.setItem(Ot.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, r) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (r) {
        case ee.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var i = o.idToken.indexOf(t);
          i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case ee.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var a = o.accessToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case ee.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var s = o.refreshToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + r), W.createUnexpectedCredentialTypeError();
      }
      this.setItem(Ot.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, ee.ID_TOKEN), null;
      var o = this.validateAndParseJson(r);
      return !o || !fn.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, ee.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), Ze.toObject(new fn(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var r = t.generateCredentialKey();
      this.setItem(r, JSON.stringify(t)), this.addTokenKey(r, ee.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, ee.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(r);
      return !o || !hn.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, ee.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), Ze.toObject(new hn(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var r = t.generateCredentialKey();
      this.setItem(r, JSON.stringify(t)), this.addTokenKey(r, ee.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, ee.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(r);
      return !o || !rr.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, ee.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), Ze.toObject(new rr(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var r = t.generateCredentialKey();
      this.setItem(r, JSON.stringify(t)), this.addTokenKey(r, ee.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return !o || !sa.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), Ze.toObject(new sa(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var r = t.generateAppMetadataKey();
      this.setItem(r, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return !o || !Do.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), Ze.toObject(new Do(), o));
    }, e.prototype.setServerTelemetry = function(t, r) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(r));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var r = this.internalStorage.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return o && ca.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), Ze.toObject(new ca(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, r = this.internalStorage.getKeys();
      return r.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, r) {
      this.internalStorage.setItem(ir.WRAPPER_SKU, t), this.internalStorage.setItem(ir.WRAPPER_VER, r);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(ir.WRAPPER_SKU) || I.EMPTY_STRING, r = this.internalStorage.getItem(ir.WRAPPER_VER) || I.EMPTY_STRING;
      return [t, r];
    }, e.prototype.setAuthorityMetadata = function(t, r) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(t, JSON.stringify(r));
    }, e.prototype.getActiveAccount = function() {
      var t = this.generateCacheKey(Pe.ACTIVE_ACCOUNT_FILTERS), r = this.getItem(t);
      if (!r) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var o = this.generateCacheKey(Pe.ACTIVE_ACCOUNT), i = this.getItem(o);
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
      var r = this.generateCacheKey(Pe.ACTIVE_ACCOUNT_FILTERS), o = this.generateCacheKey(Pe.ACTIVE_ACCOUNT);
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
        throw W.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var r = this.getItem(t);
      if (!r)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(r);
      return !o || !Rc.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), Ze.toObject(new Rc(), o));
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
        if (this.cacheConfig.cacheLocation === Ae.LocalStorage) {
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
      return La(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, e.prototype.clear = function() {
      return O(this, void 0, void 0, function() {
        var t = this;
        return x(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              return r.sent(), this.removeAppMetadata(), this.getKeys().forEach(function(o) {
                (t.browserStorage.containsKey(o) || t.temporaryCacheStorage.containsKey(o)) && (o.indexOf(I.CACHE_PREFIX) !== -1 || o.indexOf(t.clientId) !== -1) && t.removeItem(o);
              }), this.internalStorage.clear(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.clearTokensAndKeysWithClaims = function() {
      return O(this, void 0, void 0, function() {
        var t, r, o = this;
        return x(this, function(i) {
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
      return I.EMPTY_STRING;
    }, e.prototype.clearMsalCookies = function() {
      var t = this, r = I.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(i) {
        for (; i.charAt(0) === " "; )
          i = i.substring(1);
        if (i.indexOf(r) === 0) {
          var a = i.split("=")[0];
          t.clearItemCookie(a);
        }
      });
    }, e.prototype.clearItemCookie = function(t) {
      this.setItemCookie(t, I.EMPTY_STRING, -1);
    }, e.prototype.getCookieExpirationTime = function(t) {
      var r = /* @__PURE__ */ new Date(), o = new Date(r.getTime() + t * this.COOKIE_LIFE_MULTIPLIER);
      return o.toUTCString();
    }, e.prototype.getCache = function() {
      return this.browserStorage;
    }, e.prototype.setCache = function() {
    }, e.prototype.generateCacheKey = function(t) {
      var r = this.validateAndParseJson(t);
      return r ? JSON.stringify(t) : q.startsWith(t, I.CACHE_PREFIX) || q.startsWith(t, Pe.ADAL_ID_TOKEN) ? t : I.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var r = Yt.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(ge.AUTHORITY + "." + r);
    }, e.prototype.generateNonceKey = function(t) {
      var r = Yt.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(ge.NONCE_IDTOKEN + "." + r);
    }, e.prototype.generateStateKey = function(t) {
      var r = Yt.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(ge.REQUEST_STATE + "." + r);
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
          type: ct.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(ge.CCS_CREDENTIAL, JSON.stringify(u), !0);
      } else if (!q.isEmpty(i)) {
        var u = {
          credential: i,
          type: ct.UPN
        };
        this.setTemporaryCache(ge.CCS_CREDENTIAL, JSON.stringify(u), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var r = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), q.isEmpty(t) || this.getKeys().forEach(function(o) {
        o.indexOf(t) !== -1 && r.removeItem(o);
      }), t && (this.removeItem(this.generateStateKey(t)), this.removeItem(this.generateNonceKey(t)), this.removeItem(this.generateAuthorityKey(t))), this.removeItem(this.generateCacheKey(ge.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(ge.ORIGIN_URI)), this.removeItem(this.generateCacheKey(ge.URL_HASH)), this.removeItem(this.generateCacheKey(ge.CORRELATION_ID)), this.removeItem(this.generateCacheKey(ge.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(ge.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, e.prototype.cleanRequestByState = function(t) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), t) {
        var r = this.generateStateKey(t), o = this.temporaryCacheStorage.getItem(r);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || I.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var r = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(ge.REQUEST_STATE) !== -1) {
          var i = r.temporaryCacheStorage.getItem(o);
          if (i) {
            var a = fu.extractBrowserRequestState(r.cryptoImpl, i);
            a && a.interactionType === t && (r.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + i), r.resetRequestCache(i));
          }
        }
      }), this.clearMsalCookies(), this.setInteractionInProgress(!1);
    }, e.prototype.cacheCodeRequest = function(t, r) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var o = r.base64Encode(JSON.stringify(t));
      this.setTemporaryCache(ge.REQUEST_PARAMS, o, !0);
    }, e.prototype.getCachedRequest = function(t, r) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var o = this.getTemporaryCache(ge.REQUEST_PARAMS, !0);
      if (!o)
        throw K.createNoTokenRequestCacheError();
      var i = this.validateAndParseJson(r.base64Decode(o));
      if (!i)
        throw K.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(ge.REQUEST_PARAMS)), q.isEmpty(i.authority)) {
        var a = this.generateAuthorityKey(t), s = this.getTemporaryCache(a);
        if (!s)
          throw K.createNoCachedAuthorityError();
        i.authority = s;
      }
      return i;
    }, e.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var t = this.getTemporaryCache(ge.NATIVE_REQUEST, !0);
      if (!t)
        return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null;
      var r = this.validateAndParseJson(t);
      return r || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null);
    }, e.prototype.isInteractionInProgress = function(t) {
      var r = this.getInteractionInProgress();
      return t ? r === this.clientId : !!r;
    }, e.prototype.getInteractionInProgress = function() {
      var t = I.CACHE_PREFIX + "." + ge.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(t, !1);
    }, e.prototype.setInteractionInProgress = function(t) {
      var r = I.CACHE_PREFIX + "." + ge.INTERACTION_STATUS_KEY;
      if (t) {
        if (this.getInteractionInProgress())
          throw K.createInteractionInProgressError();
        this.setTemporaryCache(r, this.clientId, !1);
      } else
        !t && this.getInteractionInProgress() === this.clientId && this.removeItem(r);
    }, e.prototype.getLegacyLoginHint = function() {
      var t = this.getTemporaryCache(Pe.ADAL_ID_TOKEN);
      t && (this.browserStorage.removeItem(Pe.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
      var r = this.getTemporaryCache(Pe.ID_TOKEN, !0);
      r && (this.removeItem(this.generateCacheKey(Pe.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
      var o = r || t;
      if (o) {
        var i = new Ht(o, this.cryptoImpl);
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
      return this.getTemporaryCache(ge.REDIRECT_CONTEXT, !0);
    }, e.prototype.setRedirectRequestContext = function(t) {
      this.setTemporaryCache(ge.REDIRECT_CONTEXT, t, !0);
    }, e.prototype.hydrateCache = function(t, r) {
      var o, i, a, s, c, l;
      return O(this, void 0, void 0, function() {
        var u, f, d, h;
        return x(this, function(p) {
          switch (p.label) {
            case 0:
              return u = fn.createIdTokenEntity(((o = t.account) === null || o === void 0 ? void 0 : o.homeAccountId) || "", ((i = t.account) === null || i === void 0 ? void 0 : i.environment) || "", t.idToken, this.clientId, t.tenantId), r.claims ? [4, this.cryptoImpl.hashString(r.claims)] : [3, 2];
            case 1:
              f = p.sent(), p.label = 2;
            case 2:
              return d = hn.createAccessTokenEntity(
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
                f
              ), h = new ar(void 0, u, d), [2, this.saveCacheRecord(h)];
          }
        });
      });
    }, e;
  }(Ze)
), Og = function(n, e) {
  var t = {
    cacheLocation: Ae.MemoryStorage,
    temporaryCacheLocation: Ae.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new da(n, t, Ro, e);
};
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var _i = "@azure/msal-browser", Ur = "2.39.0";
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var xg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.sendGetRequestAsync = function(e, t) {
      return O(this, void 0, void 0, function() {
        var r, o, i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, fetch(e, {
                method: xt.GET,
                headers: this.getFetchHeaders(t)
              })];
            case 1:
              return r = a.sent(), [3, 3];
            case 2:
              throw o = a.sent(), window.navigator.onLine ? K.createGetRequestFailedError(o, e) : K.createNoNetworkConnectivityError();
            case 3:
              return a.trys.push([3, 5, , 6]), i = {
                headers: this.getHeaderDict(r.headers)
              }, [4, r.json()];
            case 4:
              return [2, (i.body = a.sent(), i.status = r.status, i)];
            case 5:
              throw a.sent(), K.createFailedToParseNetworkResponseError(e);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.sendPostRequestAsync = function(e, t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a;
        return x(this, function(s) {
          switch (s.label) {
            case 0:
              r = t && t.body || I.EMPTY_STRING, s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, fetch(e, {
                method: xt.POST,
                headers: this.getFetchHeaders(t),
                body: r
              })];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw i = s.sent(), window.navigator.onLine ? K.createPostRequestFailedError(i, e) : K.createNoNetworkConnectivityError();
            case 4:
              return s.trys.push([4, 6, , 7]), a = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (a.body = s.sent(), a.status = o.status, a)];
            case 6:
              throw s.sent(), K.createFailedToParseNetworkResponseError(e);
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
var Dg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.sendGetRequestAsync = function(e, t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return [2, this.sendRequestAsync(e, xt.GET, t)];
        });
      });
    }, n.prototype.sendPostRequestAsync = function(e, t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return [2, this.sendRequestAsync(e, xt.POST, t)];
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
          (s.status < 200 || s.status >= 300) && (t === xt.POST ? a(K.createPostRequestFailedError("Failed with status " + s.status, e)) : a(K.createGetRequestFailedError("Failed with status " + s.status, e)));
          try {
            var c = JSON.parse(s.responseText), l = {
              headers: o.getHeaderDict(s),
              body: c,
              status: s.status
            };
            i(l);
          } catch {
            a(K.createFailedToParseNetworkResponseError(e));
          }
        }, s.onerror = function() {
          window.navigator.onLine ? t === xt.POST ? a(K.createPostRequestFailedError("Failed with status " + s.status, e)) : a(K.createGetRequestFailedError("Failed with status " + s.status, e)) : a(K.createNoNetworkConnectivityError());
        }, t === xt.POST && r && r.body)
          s.send(r.body);
        else if (t === xt.GET)
          s.send();
        else
          throw K.createHttpMethodNotImplementedError(t);
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
var Te = (
  /** @class */
  function() {
    function n() {
    }
    return n.clearHash = function(e) {
      e.location.hash = I.EMPTY_STRING, typeof e.history.replaceState == "function" && e.history.replaceState(null, I.EMPTY_STRING, "" + e.location.origin + e.location.pathname + e.location.search);
    }, n.replaceHash = function(e) {
      var t = e.split("#");
      t.shift(), window.location.hash = t.length > 0 ? t.join("#") : I.EMPTY_STRING;
    }, n.isInIframe = function() {
      return window.parent !== window;
    }, n.isInPopup = function() {
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(At.POPUP_NAME_PREFIX + ".") === 0;
    }, n.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, n.getHomepage = function() {
      var e = new he(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, n.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new xg() : new Dg();
    }, n.blockReloadInHiddenIframes = function() {
      var e = he.hashContainsKnownProperties(window.location.hash);
      if (e && n.isInIframe())
        throw K.createBlockReloadInHiddenIframeError();
    }, n.blockRedirectInIframe = function(e, t) {
      var r = n.isInIframe();
      if (e === Y.Redirect && r && !t)
        throw K.createRedirectInIframeError(r);
    }, n.blockAcquireTokenInPopups = function() {
      if (n.isInPopup())
        throw K.createBlockAcquireTokenInPopupsError();
    }, n.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw K.createNonBrowserEnvironmentError();
    }, n.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw K.createNativeBrokerCalledBeforeInitialize();
    }, n.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), r = e.indexOf("Trident/"), o = e.indexOf("Edge/"), i = t > 0 || r > 0, a = o > 0;
      return i || a;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hu = (
  /** @class */
  function() {
    function n(e, t, r, o, i, a, s, c, l) {
      this.config = e, this.browserStorage = t, this.browserCrypto = r, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = a, this.nativeMessageHandler = c, this.correlationId = l || this.browserCrypto.createNewGuid(), this.logger = o.clone(At.MSAL_SKU, Ur, this.correlationId), this.performanceClient = s;
    }
    return n.prototype.clearCacheOnLogout = function(e) {
      return O(this, void 0, void 0, function() {
        return x(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                return [3, 5];
              Ge.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)), t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(Ge.generateAccountCacheKey(e))];
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
      return O(this, void 0, void 0, function() {
        var r, o, i, a;
        return x(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.InitializeBaseRequest, e.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), r = e.authority || this.config.auth.authority, t ? [4, this.validateRequestAuthority(r, t)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              if (o = La(e && e.scopes || []), i = G(G({}, e), {
                correlationId: this.correlationId,
                authority: r,
                scopes: o
              }), !i.authenticationScheme)
                i.authenticationScheme = ve.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (i.authenticationScheme === ve.SSH) {
                  if (!e.sshJwk)
                    throw Se.createMissingSshJwkError();
                  if (!e.sshKid)
                    throw Se.createMissingSshKidError();
                }
                this.logger.verbose('Authentication Scheme set to "' + i.authenticationScheme + '" as configured in Auth request');
              }
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !q.isEmptyObj(e.claims) ? (a = i, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
            case 3:
              a.requestedClaimsHash = s.sent(), s.label = 4;
            case 4:
              return [2, i];
          }
        });
      });
    }, n.prototype.getRedirectUri = function(e) {
      this.logger.verbose("getRedirectUri called");
      var t = e || this.config.auth.redirectUri || Te.getCurrentUri();
      return he.getAbsoluteUrl(t, Te.getCurrentUri());
    }, n.prototype.validateRequestAuthority = function(e, t) {
      return O(this, void 0, void 0, function() {
        var r;
        return x(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(e)];
            case 1:
              if (r = o.sent(), !r.isAlias(t.environment))
                throw Se.createAuthorityMismatchError();
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
      return new Rg(r, this.browserStorage);
    }, n.prototype.getDiscoveredAuthority = function(e) {
      return O(this, void 0, void 0, function() {
        var t;
        return x(this, function(r) {
          switch (r.label) {
            case 0:
              return this.logger.verbose("getDiscoveredAuthority called"), t = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, xo.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, r.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, xo.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, r.sent()];
          }
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var mr = (
  /** @class */
  function(n) {
    He(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.initializeAuthorizationCodeRequest = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o;
        return x(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), this.logger.verbose("initializeAuthorizationRequest called", t.correlationId), [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              return r = i.sent(), o = G(G({}, t), { redirectUri: t.redirectUri, code: I.EMPTY_STRING, codeVerifier: r.verifier }), t.codeChallenge = r.challenge, t.codeChallengeMethod = I.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, e.prototype.initializeLogoutRequest = function(t) {
      this.logger.verbose("initializeLogoutRequest called", t == null ? void 0 : t.correlationId);
      var r = G({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, t);
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
      return !t || t.postLogoutRedirectUri !== null ? t && t.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", r.correlationId), r.postLogoutRedirectUri = he.getAbsoluteUrl(t.postLogoutRedirectUri, Te.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", r.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", r.correlationId), r.postLogoutRedirectUri = he.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, Te.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", r.correlationId), r.postLogoutRedirectUri = he.getAbsoluteUrl(Te.getCurrentUri(), Te.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", r.correlationId), r;
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
      return O(this, void 0, void 0, function() {
        var i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(k.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, r, o)];
            case 1:
              return i = a.sent(), [2, new cu(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.getClientConfiguration = function(t, r, o) {
      return O(this, void 0, void 0, function() {
        var i, a;
        return x(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(k.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(r, o)];
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
                  sku: At.MSAL_SKU,
                  version: Ur,
                  cpu: I.EMPTY_STRING,
                  os: I.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    }, e.prototype.validateAndExtractStateFromHash = function(t, r, o) {
      if (this.logger.verbose("validateAndExtractStateFromHash called", o), !t.state)
        throw K.createHashDoesNotContainStateError();
      var i = fu.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!i)
        throw K.createUnableToParseStateError();
      if (i.interactionType !== r)
        throw K.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), t.state;
    }, e.prototype.getDiscoveredAuthority = function(t, r) {
      var o;
      return O(this, void 0, void 0, function() {
        var i, a, s, c;
        return x(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(k.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), a = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, s = t || this.config.auth.authority, c = Kr.generateAuthority(s, r || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(k.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, xo.createDiscoveredInstance(c, this.config.system.networkClient, this.browserStorage, a, this.logger, this.performanceClient, this.correlationId).then(function(u) {
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
      return O(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u;
        return x(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), i = {
                interactionType: r
              }, a = Yt.setRequestState(this.browserCrypto, t && t.state || I.EMPTY_STRING, i), this.performanceClient.setPreQueueTime(k.InitializeBaseRequest, this.correlationId), c = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return s = G.apply(void 0, [G.apply(void 0, c.concat([f.sent()])), { redirectUri: o, state: a, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: _o.FRAGMENT }]), l = t.account || this.browserStorage.getActiveAccount(), l && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + l.homeAccountId, this.correlationId), s.account = l), q.isEmpty(s.loginHint) && !l && (u = this.browserStorage.getLegacyLoginHint(), u && (s.loginHint = u)), [2, s];
          }
        });
      });
    }, e;
  }(hu)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ba = (
  /** @class */
  function() {
    function n(e, t, r, o, i) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = r, this.logger = o, this.performanceClient = i;
    }
    return n.prototype.handleCodeResponseFromHash = function(e, t, r, o) {
      return O(this, void 0, void 0, function() {
        var i, a, s;
        return x(this, function(c) {
          if (this.performanceClient.addQueueMeasurement(k.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), q.isEmpty(e))
            throw K.createEmptyHashError(e);
          if (i = this.browserStorage.generateStateKey(t), a = this.browserStorage.getTemporaryCache(i), !a)
            throw W.createStateNotFoundError("Cached State");
          try {
            s = this.authModule.handleFragmentResponse(e, a);
          } catch (l) {
            throw l instanceof Ln && l.subError === L.userCancelledError.code ? K.createUserCancelledError() : l;
          }
          return this.performanceClient.setPreQueueTime(k.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(s, t, r, o)];
        });
      });
    }, n.prototype.handleCodeResponseFromServer = function(e, t, r, o, i) {
      return i === void 0 && (i = !0), O(this, void 0, void 0, function() {
        var a, s, c, l, u, f;
        return x(this, function(d) {
          switch (d.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(k.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
                throw W.createStateNotFoundError("Cached State");
              return c = this.browserStorage.generateNonceKey(s), l = this.browserStorage.getTemporaryCache(c), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(k.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, r, o)]) : [3, 2];
            case 1:
              d.sent(), d.label = 2;
            case 2:
              return i && (e.nonce = l || void 0), e.state = s, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (u = this.checkCcsCredentials(), u && (this.authCodeRequest.ccsCredential = u)), this.performanceClient.setPreQueueTime(k.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return f = d.sent(), this.browserStorage.cleanRequestByState(t), [2, f];
          }
        });
      });
    }, n.prototype.updateTokenEndpointAuthority = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        var o, i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, xo.createDiscoveredInstance(o, r, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              return i = a.sent(), this.authModule.updateAuthority(i), [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.checkCcsCredentials = function() {
      var e = this.browserStorage.getTemporaryCache(ge.CCS_CREDENTIAL, !0);
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
var Lc = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s) {
      var c = n.call(this, t, r, o, i, s) || this;
      return c.browserCrypto = a, c;
    }
    return e.prototype.initiateAuthRequest = function(t, r) {
      return O(this, void 0, void 0, function() {
        var o, i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), q.isEmpty(t) ? [3, 7] : (r.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(ge.ORIGIN_URI, r.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(ge.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
                apiId: we.acquireTokenRedirect,
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
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), K.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleCodeResponseFromHash = function(t, r, o, i) {
      return O(this, void 0, void 0, function() {
        var a, s, c, l, u, f, d;
        return x(this, function(h) {
          switch (h.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), q.isEmpty(t))
                throw K.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), a = this.browserStorage.generateStateKey(r), s = this.browserStorage.getTemporaryCache(a), !s)
                throw W.createStateNotFoundError("Cached State");
              try {
                c = this.authModule.handleFragmentResponse(t, s);
              } catch (p) {
                throw p instanceof Ln && p.subError === L.userCancelledError.code ? K.createUserCancelledError() : p;
              }
              return l = this.browserStorage.generateNonceKey(s), u = this.browserStorage.getTemporaryCache(l), this.authCodeRequest.code = c.code, c.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(c.cloud_instance_host_name, o, i)] : [3, 2];
            case 1:
              h.sent(), h.label = 2;
            case 2:
              return c.nonce = u || void 0, c.state = s, c.client_info ? this.authCodeRequest.clientInfo = c.client_info : (f = this.checkCcsCredentials(), f && (this.authCodeRequest.ccsCredential = f)), [4, this.authModule.acquireToken(this.authCodeRequest, c)];
            case 3:
              return d = h.sent(), this.browserStorage.cleanRequestByState(r), [2, d];
          }
        });
      });
    }, e;
  }(Ba)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var oe;
(function(n) {
  n.INITIALIZE_START = "msal:initializeStart", n.INITIALIZE_END = "msal:initializeEnd", n.ACCOUNT_ADDED = "msal:accountAdded", n.ACCOUNT_REMOVED = "msal:accountRemoved", n.LOGIN_START = "msal:loginStart", n.LOGIN_SUCCESS = "msal:loginSuccess", n.LOGIN_FAILURE = "msal:loginFailure", n.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", n.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", n.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", n.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", n.SSO_SILENT_START = "msal:ssoSilentStart", n.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", n.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", n.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", n.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", n.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", n.HANDLE_REDIRECT_START = "msal:handleRedirectStart", n.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", n.POPUP_OPENED = "msal:popupOpened", n.LOGOUT_START = "msal:logoutStart", n.LOGOUT_SUCCESS = "msal:logoutSuccess", n.LOGOUT_FAILURE = "msal:logoutFailure", n.LOGOUT_END = "msal:logoutEnd", n.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(oe || (oe = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var un;
(function(n) {
  n.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", n.USER_CANCEL = "USER_CANCEL", n.NO_NETWORK = "NO_NETWORK", n.TRANSIENT_ERROR = "TRANSIENT_ERROR", n.PERSISTENT_ERROR = "PERSISTENT_ERROR", n.DISABLED = "DISABLED", n.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(un || (un = {}));
var Ir = {
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
}, Lt = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o) {
      var i = n.call(this, t, r) || this;
      return Object.setPrototypeOf(i, e.prototype), i.name = "NativeAuthError", i.ext = o, i;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === un.PERSISTENT_ERROR || this.ext.status === un.DISABLED))
        return !0;
      switch (this.errorCode) {
        case Ir.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, e.createError = function(t, r, o) {
      if (o && o.status)
        switch (o.status) {
          case un.ACCOUNT_UNAVAILABLE:
            return Pt.createNativeAccountUnavailableError();
          case un.USER_INTERACTION_REQUIRED:
            return new Pt(t, r);
          case un.USER_CANCEL:
            return K.createUserCancelledError();
          case un.NO_NETWORK:
            return K.createNoNetworkConnectivityError();
        }
      return new e(t, r, o);
    }, e.createUserSwitchError = function() {
      return new e(Ir.userSwitch.code, Ir.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(Ir.tokensNotFoundInCache.code, Ir.tokensNotFoundInCache.desc);
    }, e;
  }(Q)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var pu = (
  /** @class */
  function(n) {
    He(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s;
        return x(this, function(c) {
          switch (c.label) {
            case 0:
              return r = this.performanceClient.startMeasurement(k.SilentCacheClientAcquireToken, t.correlationId), o = this.initializeServerTelemetryManager(we.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, t.authority, t.azureCloudOptions)];
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
              throw s = c.sent(), s instanceof K && s.errorCode === L.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), r.endMeasurement({
                errorCode: s instanceof Q && s.errorCode || void 0,
                subErrorCode: s instanceof Q && s.subError || void 0,
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
      return Promise.reject(K.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, r, o) {
      return O(this, void 0, void 0, function() {
        var i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(k.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, r, o)];
            case 1:
              return i = a.sent(), [2, new Sg(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, r) {
      return O(this, void 0, void 0, function() {
        var o;
        return x(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(k.InitializeBaseRequest, this.correlationId), o = [G({}, t)], [4, this.initializeBaseRequest(t, r)];
            case 1:
              return [2, G.apply(void 0, [G.apply(void 0, o.concat([i.sent()])), { account: r, forceRefresh: t.forceRefresh || !1 }])];
          }
        });
      });
    }, e;
  }(mr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var sr = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s, c, l, u, f, d, h) {
      var p = n.call(this, t, r, o, i, a, s, l, u, h) || this;
      return p.apiId = c, p.accountId = f, p.nativeMessageHandler = u, p.nativeStorageManager = d, p.silentCacheClient = new pu(t, p.nativeStorageManager, o, i, a, s, l, u, h), p;
    }
    return e.prototype.acquireToken = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l;
        return x(this, function(u) {
          switch (u.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), r = this.performanceClient.startMeasurement(k.NativeInteractionClientAcquireToken, t.correlationId), o = vt.nowSeconds(), [4, this.initializeNativeRequest(t)];
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
                method: Wt.GetToken,
                request: i
              }, [4, this.nativeMessageHandler.sendMessage(s)];
            case 6:
              return c = u.sent(), l = this.validateNativeResponse(c), [2, this.handleNativeResponse(l, i, o).then(function(f) {
                return r.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: f.requestId
                }), f;
              }).catch(function(f) {
                throw r.endMeasurement({
                  success: !1,
                  errorCode: f.errorCode,
                  subErrorCode: f.subError,
                  isNativeBroker: !0
                }), f;
              })];
          }
        });
      });
    }, e.prototype.createSilentCacheRequest = function(t, r) {
      return {
        authority: t.authority,
        correlationId: this.correlationId,
        scopes: Ke.fromString(t.scope).asArray(),
        account: r,
        forceRefresh: !1
      };
    }, e.prototype.acquireTokensFromCache = function(t, r) {
      return O(this, void 0, void 0, function() {
        var o, i, a, s, c;
        return x(this, function(l) {
          switch (l.label) {
            case 0:
              if (!t)
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), W.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw W.createNoAccountFoundError();
              l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), i = this.createSilentCacheRequest(r, o), [4, this.silentCacheClient.acquireToken(i)];
            case 2:
              return a = l.sent(), s = G(G({}, o), { idTokenClaims: a.idTokenClaims }), [2, G(G({}, a), { account: s })];
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
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c;
        return x(this, function(l) {
          switch (l.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireTokenRedirect called."), [4, this.initializeNativeRequest(t)];
            case 1:
              r = l.sent(), o = {
                method: Wt.GetToken,
                request: r
              }, l.label = 2;
            case 2:
              return l.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return i = l.sent(), this.validateNativeResponse(i), [3, 5];
            case 4:
              if (a = l.sent(), a instanceof Lt && a.isFatal())
                throw a;
              return [3, 5];
            case 5:
              return this.browserStorage.setTemporaryCache(ge.NATIVE_REQUEST, JSON.stringify(r), !0), s = {
                apiId: we.acquireTokenRedirect,
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
      return O(this, void 0, void 0, function() {
        var t, r, o, i, a, s, c, l;
        return x(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (t = this.browserStorage.getCachedNativeRequest(), !t)
                return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), [2, null];
              r = t.prompt, o = Sc(t, ["prompt"]), r && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(ge.NATIVE_REQUEST)), i = {
                method: Wt.GetToken,
                request: o
              }, a = vt.nowSeconds(), u.label = 1;
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
      return O(this, void 0, void 0, function() {
        var i, a, s, c, l;
        return x(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleNativeResponse called."), t.account.id !== r.accountId)
                throw Lt.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(r.authority)];
            case 1:
              return i = u.sent(), a = this.createIdTokenObj(t), s = this.createHomeAccountIdentifier(t, a), c = Ge.createAccount({
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
      return new Ht(t.id_token || I.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, r) {
      var o = Ge.generateHomeAccountId(t.client_info || I.EMPTY_STRING, et.Default, this.logger, this.browserCrypto, r.claims);
      return o;
    }, e.prototype.generateScopes = function(t, r) {
      return t.scope ? Ke.fromString(t.scope) : Ke.fromString(r.scope);
    }, e.prototype.generatePopAccessToken = function(t, r) {
      return O(this, void 0, void 0, function() {
        var o, i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              if (r.tokenType !== ve.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new ur(this.browserCrypto), i = {
                resourceRequestMethod: r.resourceRequestMethod,
                resourceRequestUri: r.resourceRequestUri,
                shrClaims: r.shrClaims,
                shrNonce: r.shrNonce
              }, !r.keyId)
                throw W.createKeyIdMissingError();
              return [4, o.signPopToken(t.access_token, r.keyId, i)];
            case 1:
              return [2, a.sent()];
            case 2:
              return [2, t.access_token];
          }
        });
      });
    }, e.prototype.generateAuthenticationResult = function(t, r, o, i, a, s) {
      return O(this, void 0, void 0, function() {
        var c, l, u, f, d, h, p, g;
        return x(this, function(m) {
          switch (m.label) {
            case 0:
              return c = this.addTelemetryFromNativeResponse(t), l = t.scope ? Ke.fromString(t.scope) : Ke.fromString(r.scope), u = t.account.properties || {}, f = u.UID || o.claims.oid || o.claims.sub || I.EMPTY_STRING, d = u.TenantId || o.claims.tid || I.EMPTY_STRING, [4, this.generatePopAccessToken(t, r)];
            case 1:
              return h = m.sent(), p = r.tokenType === ve.POP ? ve.POP : ve.BEARER, g = {
                authority: a,
                uniqueId: f,
                tenantId: d,
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
      var l = fn.createIdTokenEntity(o, r.authority, t.id_token || I.EMPTY_STRING, r.clientId, i.claims.tid || I.EMPTY_STRING), u = r.tokenType === ve.POP ? I.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, f = c + u, d = this.generateScopes(t, r), h = hn.createAccessTokenEntity(o, r.authority, a, r.clientId, i ? i.claims.tid || I.EMPTY_STRING : s, d.printScopes(), f, 0, this.browserCrypto), p = new ar(void 0, l, h);
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
      throw Lt.createUnexpectedError("Response missing expected properties.");
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
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u, f, d, h = this;
        return x(this, function(p) {
          switch (p.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), r = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(r, t.account)] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return o = new he(r), o.validateAsUri(), i = t.scopes, a = Sc(t, ["scopes"]), s = new Ke(i || []), s.appendScopes(eo), c = function() {
                switch (h.apiId) {
                  case we.ssoSilent:
                  case we.acquireTokenSilent_silentFlow:
                    return h.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ve.NONE;
                }
                if (!t.prompt) {
                  h.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case Ve.NONE:
                  case Ve.CONSENT:
                  case Ve.LOGIN:
                    return h.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), t.prompt;
                  default:
                    throw h.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), K.createNativePromptParameterNotSupportedError();
                }
              }, l = G(G({}, a), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: s.printScopes(),
                redirectUri: this.getRedirectUri(t.redirectUri),
                prompt: c(),
                correlationId: this.correlationId,
                tokenType: t.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: G(G(G({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: Rr.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== ve.POP ? [3, 4] : (u = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, f = new ur(this.browserCrypto), [4, f.generateCnf(u)]);
            case 3:
              d = p.sent(), l.reqCnf = d.reqCnfString, l.keyId = d.kid, p.label = 4;
            case 4:
              return [2, l];
          }
        });
      });
    }, e;
  }(hu)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var On = (
  /** @class */
  function() {
    function n(e, t, r, o) {
      this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = r, this.handshakeEvent = r.startMeasurement(k.NativeMessageHandlerHandshake);
    }
    return n.prototype.sendMessage = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r = this;
        return x(this, function(o) {
          return this.logger.trace("NativeMessageHandler - sendMessage called."), t = {
            channel: Rr.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: e
          }, this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(t)), this.messageChannel.port1.postMessage(t), [2, new Promise(function(i, a) {
            r.resolvers.set(t.responseId, { resolve: i, reject: a });
          })];
        });
      });
    }, n.createProvider = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        var o, i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              e.trace("NativeMessageHandler - createProvider called."), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 5]), o = new n(e, t, r, Rr.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
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
      return O(this, void 0, void 0, function() {
        var e, t = this;
        return x(this, function(r) {
          return this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1), e = {
            channel: Rr.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: Wt.HandshakeRequest
            }
          }, this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          }), this.messageChannel.port1.onmessage = function(o) {
            t.onChannelMessage(o);
          }, window.postMessage(e, window.origin, [this.messageChannel.port2]), [2, new Promise(function(o, i) {
            t.handshakeResolvers.set(e.responseId, { resolve: o, reject: i }), t.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), i(K.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
            }, t.handshakeTimeoutMs);
          })];
        });
      });
    }, n.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== Rr.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Wt.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var r = this.handshakeResolvers.get(t.responseId);
          r && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), r.reject(K.createNativeExtensionNotInstalledError()));
        }
      }
    }, n.prototype.onChannelMessage = function(e) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var t = e.data, r = this.resolvers.get(t.responseId), o = this.handshakeResolvers.get(t.responseId);
      try {
        var i = t.body.method;
        if (i === Wt.Response) {
          if (!r)
            return;
          var a = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(a)), a.status !== "Success")
            r.reject(Lt.createError(a.code, a.description, a.ext));
          else if (a.result)
            a.result.code && a.result.description ? r.reject(Lt.createError(a.result.code, a.result.description, a.result.ext)) : r.resolve(a.result);
          else
            throw Q.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (i === Wt.HandshakeResponse) {
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
          case ve.BEARER:
          case ve.POP:
            return t.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Lg = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s, c, l, u, f) {
      var d = n.call(this, t, r, o, i, a, s, c, u, f) || this;
      return d.nativeStorage = l, d;
    }
    return e.prototype.acquireToken = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u, f, d = this;
        return x(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, Y.Redirect)];
            case 1:
              r = h.sent(), this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority, r.loginHint || I.EMPTY_STRING, r.account || null), o = this.initializeServerTelemetryManager(we.acquireTokenRedirect), i = function(p) {
                p.persisted && (d.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), d.browserStorage.cleanRequestByState(r.state), d.eventHandler.emitEvent(oe.RESTORE_FROM_BFCACHE, Y.Redirect));
              }, h.label = 2;
            case 2:
              return h.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(r)];
            case 3:
              return a = h.sent(), this.performanceClient.setPreQueueTime(k.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, r.authority, r.azureCloudOptions)];
            case 4:
              return s = h.sent(), this.logger.verbose("Auth code client created"), c = new Lc(s, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, s.getAuthCodeUrl(G(G({}, r), { nativeBroker: On.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw f = h.sent(), f instanceof Q && f.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", i), o.cacheFailedRequest(f), this.browserStorage.cleanRequestByState(r.state), f;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u, f, d, h, p;
        return x(this, function(g) {
          switch (g.label) {
            case 0:
              r = this.initializeServerTelemetryManager(we.handleRedirectPromise), g.label = 1;
            case 1:
              if (g.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(t || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(Y.Redirect), [2, null];
              i = void 0;
              try {
                a = he.getDeserializedHash(o), i = this.validateAndExtractStateFromHash(a, Y.Redirect), this.logger.verbose("State extracted from hash");
              } catch (m) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + m), this.browserStorage.cleanRequestByInteractionType(Y.Redirect), [2, null];
              }
              return s = this.browserStorage.getTemporaryCache(ge.ORIGIN_URI, !0) || I.EMPTY_STRING, c = he.removeHashFromUrl(s), l = he.removeHashFromUrl(window.location.href), c === l && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, i, r)]) : [3, 3];
            case 2:
              return u = g.sent(), s.indexOf("#") > -1 && Te.replaceHash(s), [2, u];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, i, r)]);
            case 4:
              return !Te.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(ge.URL_HASH, o, !0), f = {
                apiId: we.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, d = !0, !s || s === "null" ? (h = Te.getHomepage(), this.browserStorage.setTemporaryCache(ge.ORIGIN_URI, h, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(h, f)]) : [3, 6]) : [3, 9];
            case 5:
              return d = g.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + s), [4, this.navigationClient.navigateInternal(s, f)];
            case 7:
              d = g.sent(), g.label = 8;
            case 8:
              if (!d)
                return [2, this.handleHash(o, i, r)];
              g.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw p = g.sent(), p instanceof Q && p.setCorrelationId(this.correlationId), r.cacheFailedRequest(p), this.browserStorage.cleanRequestByInteractionType(Y.Redirect), p;
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
      var r = he.hashContainsKnownProperties(t);
      if (r)
        return Te.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
      var o = this.browserStorage.getTemporaryCache(ge.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(ge.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, e.prototype.handleHash = function(t, r, o) {
      return O(this, void 0, void 0, function() {
        var i, a, s, c, l, u, f, d = this;
        return x(this, function(h) {
          switch (h.label) {
            case 0:
              if (i = this.browserStorage.getCachedRequest(r, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), a = he.getDeserializedHash(t), a.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw K.createNativeConnectionNotEstablishedError();
                return s = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, we.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, a.accountId, this.nativeStorage, i.correlationId), c = Yt.parseRequestState(this.browserCrypto, r).userRequestState, [2, s.acquireToken(G(G({}, i), {
                  state: c,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  d.browserStorage.cleanRequestByState(r);
                })];
              }
              if (l = this.browserStorage.getCachedAuthority(r), !l)
                throw K.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(k.StandardInteractionClientCreateAuthCodeClient, i.correlationId), [4, this.createAuthCodeClient(o, l)];
            case 1:
              return u = h.sent(), this.logger.verbose("Auth code client created"), No.removeThrottle(this.browserStorage, this.config.auth.clientId, i), f = new Lc(u, this.browserStorage, i, this.logger, this.browserCrypto, this.performanceClient), [4, f.handleCodeResponseFromHash(t, r, u.authority, this.networkClient)];
            case 2:
              return [2, h.sent()];
          }
        });
      });
    }, e.prototype.logout = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l;
        return x(this, function(u) {
          switch (u.label) {
            case 0:
              this.logger.verbose("logoutRedirect called"), r = this.initializeLogoutRequest(t), o = this.initializeServerTelemetryManager(we.logout), u.label = 1;
            case 1:
              return u.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(oe.LOGOUT_START, Y.Redirect, t), [4, this.clearCacheOnLogout(r.account)];
            case 2:
              return u.sent(), i = {
                apiId: we.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(k.StandardInteractionClientCreateAuthCodeClient, r.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return a = u.sent(), this.logger.verbose("Auth code client created"), s = a.getLogoutUri(r), this.eventHandler.emitEvent(oe.LOGOUT_SUCCESS, Y.Redirect, r), t && typeof t.onRedirectNavigate == "function" ? (c = t.onRedirectNavigate(s), c === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(s, i)])) : [3, 7];
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
              throw l = u.sent(), l instanceof Q && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.eventHandler.emitEvent(oe.LOGOUT_FAILURE, Y.Redirect, null, l), this.eventHandler.emitEvent(oe.LOGOUT_END, Y.Redirect), l;
            case 11:
              return this.eventHandler.emitEvent(oe.LOGOUT_END, Y.Redirect), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRedirectStartPage = function(t) {
      var r = t || window.location.href;
      return he.getAbsoluteUrl(r, Te.getCurrentUri());
    }, e;
  }(mr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Fg = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s, c, l, u, f) {
      var d = n.call(this, t, r, o, i, a, s, c, u, f) || this;
      return d.unloadWindow = d.unloadWindow.bind(d), d.nativeStorage = l, d;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var r = this.generatePopupName(t.scopes || eo, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
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
      return O(this, void 0, void 0, function() {
        var a, s, c, l, u, f, d, h, p, g, m, b, C, v, w, S, E, _ = this;
        return x(this, function(T) {
          switch (T.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), a = this.initializeServerTelemetryManager(we.acquireTokenPopup), this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, Y.Popup)];
            case 1:
              s = T.sent(), this.browserStorage.updateCacheEntries(s.state, s.nonce, s.authority, s.loginHint || I.EMPTY_STRING, s.account || null), T.label = 2;
            case 2:
              return T.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(s)];
            case 3:
              return c = T.sent(), this.performanceClient.setPreQueueTime(k.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(a, s.authority, s.azureCloudOptions)];
            case 4:
              return l = T.sent(), this.logger.verbose("Auth code client created"), u = On.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), f = void 0, u && (f = this.performanceClient.startMeasurement(k.FetchAccountIdWithNativeBroker, t.correlationId)), [4, l.getAuthCodeUrl(G(G({}, s), { nativeBroker: u }))];
            case 5:
              return d = T.sent(), h = new Ba(l, this.browserStorage, c, this.logger, this.performanceClient), p = {
                popup: i,
                popupName: r,
                popupWindowAttributes: o
              }, g = this.initiateAuthRequest(d, p), this.eventHandler.emitEvent(oe.POPUP_OPENED, Y.Popup, { popupWindow: g }, null), [4, this.monitorPopupForHash(g)];
            case 6:
              if (m = T.sent(), b = he.getDeserializedHash(m), C = this.validateAndExtractStateFromHash(b, Y.Popup, s.correlationId), No.removeThrottle(this.browserStorage, this.config.auth.clientId, c), b.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), f && f.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw K.createNativeConnectionNotEstablishedError();
                return v = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, we.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, b.accountId, this.nativeStorage, s.correlationId), w = Yt.parseRequestState(this.browserCrypto, C).userRequestState, [2, v.acquireToken(G(G({}, s), {
                  state: w,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  _.browserStorage.cleanRequestByState(C);
                })];
              }
              return [4, h.handleCodeResponseFromHash(m, C, l.authority, this.networkClient)];
            case 7:
              return S = T.sent(), [2, S];
            case 8:
              throw E = T.sent(), i && i.close(), E instanceof Q && E.setCorrelationId(this.correlationId), a.cacheFailedRequest(E), this.browserStorage.cleanRequestByState(s.state), E;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logoutPopupAsync = function(t, r, o, i, a, s) {
      return O(this, void 0, void 0, function() {
        var c, l, u, f, d, h, p;
        return x(this, function(g) {
          switch (g.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(oe.LOGOUT_START, Y.Popup, t), c = this.initializeServerTelemetryManager(we.logoutPopup), g.label = 1;
            case 1:
              return g.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return g.sent(), this.performanceClient.setPreQueueTime(k.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(c, i)];
            case 3:
              return l = g.sent(), this.logger.verbose("Auth code client created"), u = l.getLogoutUri(t), this.eventHandler.emitEvent(oe.LOGOUT_SUCCESS, Y.Popup, t), f = this.openPopup(u, { popupName: r, popupWindowAttributes: o, popup: a }), this.eventHandler.emitEvent(oe.POPUP_OPENED, Y.Popup, { popupWindow: f }, null), [4, this.waitForLogoutPopup(f)];
            case 4:
              return g.sent(), s ? (d = {
                apiId: we.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, h = he.getAbsoluteUrl(s, Te.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + h), this.navigationClient.navigateInternal(h, d)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw p = g.sent(), a && a.close(), p instanceof Q && p.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(oe.LOGOUT_FAILURE, Y.Popup, null, p), this.eventHandler.emitEvent(oe.LOGOUT_END, Y.Popup), c.cacheFailedRequest(p), p;
            case 6:
              return this.eventHandler.emitEvent(oe.LOGOUT_END, Y.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, r) {
      if (q.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), K.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, r);
    }, e.prototype.monitorPopupForHash = function(t) {
      var r = this;
      return new Promise(function(o, i) {
        var a = r.config.system.windowHashTimeout / r.config.system.pollIntervalMilliseconds, s = 0;
        r.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var c = setInterval(function() {
          if (t.closed) {
            r.logger.error("PopupHandler.monitorPopupForHash - window closed"), r.cleanPopup(), clearInterval(c), i(K.createUserCancelledError());
            return;
          }
          var l = I.EMPTY_STRING, u = I.EMPTY_STRING;
          try {
            l = t.location.href, u = t.location.hash;
          } catch {
          }
          q.isEmpty(l) || l === "about:blank" || (r.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), s++, u ? (r.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(c), r.cleanPopup(t), he.hashContainsKnownProperties(u) ? (r.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(u)) : (r.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), r.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + u), i(K.createHashDoesNotContainKnownPropertiesError()))) : s > a && (r.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(c), i(K.createMonitorPopupTimeoutError())));
        }, r.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.waitForLogoutPopup = function(t) {
      var r = this;
      return new Promise(function(o) {
        r.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var i = setInterval(function() {
          t.closed && (r.logger.error("PopupHandler.waitForLogoutPopup - window closed"), r.cleanPopup(), clearInterval(i), o());
          var a = I.EMPTY_STRING;
          try {
            a = t.location.href;
          } catch {
          }
          q.isEmpty(a) || a === "about:blank" || (r.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(i), r.cleanPopup(t), o());
        }, r.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, r) {
      try {
        var o = void 0;
        if (r.popup ? (o = r.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof r.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, r.popupName, r.popupWindowAttributes)), !o)
          throw K.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (i) {
        throw this.logger.error("error opening popup " + i.message), this.browserStorage.setInteractionInProgress(!1), K.createPopupWindowError(i.toString());
      }
    }, e.prototype.openSizedPopup = function(t, r, o) {
      var i, a, s, c, l = window.screenLeft ? window.screenLeft : window.screenX, u = window.screenTop ? window.screenTop : window.screenY, f = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, d = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, h = (i = o.popupSize) === null || i === void 0 ? void 0 : i.width, p = (a = o.popupSize) === null || a === void 0 ? void 0 : a.height, g = (s = o.popupPosition) === null || s === void 0 ? void 0 : s.top, m = (c = o.popupPosition) === null || c === void 0 ? void 0 : c.left;
      return (!h || h < 0 || h > f) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), h = At.POPUP_WIDTH), (!p || p < 0 || p > d) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), p = At.POPUP_HEIGHT), (!g || g < 0 || g > d) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), g = Math.max(0, d / 2 - At.POPUP_HEIGHT / 2 + u)), (!m || m < 0 || m > f) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), m = Math.max(0, f / 2 - At.POPUP_WIDTH / 2 + l)), window.open(t, r, "width=" + h + ", height=" + p + ", top=" + g + ", left=" + m + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(Y.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, r) {
      return At.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + r + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var r = t.account && t.account.homeAccountId;
      return At.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + r + "." + this.correlationId;
    }, e;
  }(mr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var jg = (
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
var Ug = 6e4, fa = 6e3, Hg = 3e4, Bg = 2e3;
function zg(n, e) {
  var t = n.auth, r = n.cache, o = n.system, i = n.telemetry, a = {
    clientId: I.EMPTY_STRING,
    authority: "" + I.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: I.EMPTY_STRING,
    authorityMetadata: I.EMPTY_STRING,
    redirectUri: I.EMPTY_STRING,
    postLogoutRedirectUri: I.EMPTY_STRING,
    navigateToLoginRequestUrl: !0,
    clientCapabilities: [],
    protocolMode: lr.AAD,
    azureCloudOptions: {
      azureCloudInstance: $r.None,
      tenant: I.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, s = {
    cacheLocation: Ae.SessionStorage,
    temporaryCacheLocation: Ae.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(r && r.cacheLocation === Ae.LocalStorage),
    claimsBasedCachingEnabled: !0
  }, c = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: Ie.Info,
    piiLoggingEnabled: !1
  }, l = G(G({}, su), {
    loggerOptions: c,
    networkClient: e ? Te.getBrowserNetworkClient() : kg,
    navigationClient: new jg(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Ug,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || fa,
    navigateFrameWait: e && Te.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: Hg,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || Bg,
    pollIntervalMilliseconds: At.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), u = G(G({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || c }), f = {
    application: {
      appName: I.EMPTY_STRING,
      appVersion: I.EMPTY_STRING
    }
  }, d = {
    auth: G(G({}, a), t),
    cache: G(G({}, s), r),
    system: G(G({}, l), u),
    telemetry: G(G({}, f), i)
  };
  return d;
}
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var gu = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s) {
      var c = n.call(this, t, r, o, i, s) || this;
      return c.navigateFrameWait = a.navigateFrameWait, c.pollIntervalMilliseconds = a.pollIntervalMilliseconds, c;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          switch (r.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(k.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), q.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), K.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(k.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(t)]) : [3, 2];
            case 1:
              return [2, r.sent()];
            case 2:
              return [2, this.loadFrameSync(t)];
          }
        });
      });
    }, e.prototype.monitorIframeForHash = function(t, r) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(k.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(i, a) {
        r < fa && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + r + "ms) than the default (" + fa + "ms). This may result in timeouts.");
        var s = window.performance.now(), c = s + r, l = setInterval(function() {
          if (window.performance.now() > c) {
            o.removeHiddenIframe(t), clearInterval(l), a(K.createMonitorIframeTimeoutError());
            return;
          }
          var u = I.EMPTY_STRING, f = t.contentWindow;
          try {
            u = f ? f.location.href : I.EMPTY_STRING;
          } catch {
          }
          if (!q.isEmpty(u)) {
            var d = f ? f.location.hash : I.EMPTY_STRING;
            if (he.hashContainsKnownProperties(d)) {
              o.removeHiddenIframe(t), clearInterval(l), i(d);
              return;
            }
          }
        }, o.pollIntervalMilliseconds);
      });
    }, e.prototype.loadFrame = function(t) {
      var r = this;
      return this.performanceClient.addQueueMeasurement(k.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, i) {
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
  }(Ba)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var $g = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s, c, l, u, f, d) {
      var h = n.call(this, t, r, o, i, a, s, l, f, d) || this;
      return h.apiId = c, h.nativeStorage = u, h;
    }
    return e.prototype.acquireToken = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s;
        return x(this, function(c) {
          switch (c.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(k.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), r = this.performanceClient.startMeasurement(k.SilentIframeClientAcquireToken, t.correlationId), q.isEmpty(t.loginHint) && q.isEmpty(t.sid) && (!t.account || q.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ve.NONE && t.prompt !== Ve.NO_SESSION)
                throw r.endMeasurement({
                  success: !1
                }), K.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(G(G({}, t), { prompt: t.prompt || Ve.NONE }), Y.Silent)];
            case 1:
              o = c.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || I.EMPTY_STRING, o.account || null), i = this.initializeServerTelemetryManager(this.apiId), c.label = 2;
            case 2:
              return c.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(k.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(i, o.authority, o.azureCloudOptions)];
            case 3:
              return a = c.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(k.SilentIframeClientTokenHelper, t.correlationId), [4, this.silentTokenHelper(a, o).then(function(l) {
                return r.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: l.requestId
                }), l;
              })];
            case 4:
              return [2, c.sent()];
            case 5:
              throw s = c.sent(), s instanceof Q && s.setCorrelationId(this.correlationId), i.cacheFailedRequest(s), this.browserStorage.cleanRequestByState(o.state), r.endMeasurement({
                errorCode: s instanceof Q && s.errorCode || void 0,
                subErrorCode: s instanceof Q && s.subError || void 0,
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
      return Promise.reject(K.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, r) {
      return O(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u, f, d, h = this;
        return x(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.SilentIframeClientTokenHelper, r.correlationId), this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationCodeRequest, r.correlationId), [4, this.initializeAuthorizationCodeRequest(r)];
            case 1:
              return o = p.sent(), this.performanceClient.setPreQueueTime(k.GetAuthCodeUrl, r.correlationId), [4, t.getAuthCodeUrl(G(G({}, r), { nativeBroker: On.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, r.authenticationScheme) }))];
            case 2:
              return i = p.sent(), a = new gu(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(k.SilentHandlerInitiateAuthRequest, r.correlationId), [4, a.initiateAuthRequest(i)];
            case 3:
              return s = p.sent(), this.performanceClient.setPreQueueTime(k.SilentHandlerMonitorIframeForHash, r.correlationId), [4, a.monitorIframeForHash(s, this.config.system.iframeHashTimeout)];
            case 4:
              if (c = p.sent(), l = he.getDeserializedHash(c), u = this.validateAndExtractStateFromHash(l, Y.Silent, o.correlationId), l.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw K.createNativeConnectionNotEstablishedError();
                return f = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId), d = Yt.parseRequestState(this.browserCrypto, u).userRequestState, [2, f.acquireToken(G(G({}, r), { state: d, prompt: r.prompt || Ve.NONE })).finally(function() {
                  h.browserStorage.cleanRequestByState(u);
                })];
              }
              return this.performanceClient.setPreQueueTime(k.HandleCodeResponseFromHash, r.correlationId), [2, a.handleCodeResponseFromHash(c, u, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(mr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Kg = (
  /** @class */
  function(n) {
    He(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c = this;
        return x(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(k.InitializeBaseRequest, t.correlationId), o = [G({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return r = G.apply(void 0, o.concat([l.sent()])), i = this.performanceClient.startMeasurement(k.SilentRefreshClientAcquireToken, r.correlationId), a = this.initializeServerTelemetryManager(we.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(a, r.authority, r.azureCloudOptions)];
            case 2:
              return s = l.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(k.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, s.acquireTokenByRefreshToken(r).then(function(u) {
                return i.endMeasurement({
                  success: !0,
                  fromCache: u.fromCache,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw u instanceof Q && u.setCorrelationId(c.correlationId), a.cacheFailedRequest(u), i.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              })];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(K.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, r, o) {
      return O(this, void 0, void 0, function() {
        var i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(k.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, r, o)];
            case 1:
              return i = a.sent(), [2, new lu(i, this.performanceClient)];
          }
        });
      });
    }, e;
  }(mr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var qg = (
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
        if (typeof r != "object" || !Ge.isAccountEntity(r))
          return;
        var o = Ze.toObject(new Ge(), r), i = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(oe.ACCOUNT_ADDED, void 0, i)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(oe.ACCOUNT_REMOVED, void 0, i));
      } catch {
        return;
      }
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var $e = (
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
var mu = (
  /** @class */
  function() {
    function n(e) {
      this.cryptoObj = e;
    }
    return n.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, $e.decimalToHex(e[0]) + $e.decimalToHex(e[1]) + $e.decimalToHex(e[2]) + $e.decimalToHex(e[3]) + "-" + $e.decimalToHex(e[4]) + $e.decimalToHex(e[5]) + "-" + $e.decimalToHex(e[6]) + $e.decimalToHex(e[7]) + "-" + $e.decimalToHex(e[8]) + $e.decimalToHex(e[9]) + "-" + $e.decimalToHex(e[10]) + $e.decimalToHex(e[11]) + $e.decimalToHex(e[12]) + $e.decimalToHex(e[13]) + $e.decimalToHex(e[14]) + $e.decimalToHex(e[15]);
      } catch {
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", r = "0123456789abcdef", o = 0, i = I.EMPTY_STRING, a = 0; a < 36; a++)
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
var Qt = (
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
      for (var t = I.EMPTY_STRING, r = void 0, o = e.length, i = 0; i < o; i++)
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
var yu = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, I.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, n.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, I.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, n.prototype.encode = function(e) {
      var t = Qt.stringToUtf8Arr(e);
      return this.base64EncArr(t);
    }, n.prototype.base64EncArr = function(e) {
      for (var t = (3 - e.length % 3) % 3, r = I.EMPTY_STRING, o = void 0, i = e.length, a = 0, s = 0; s < i; s++)
        o = s % 3, a |= e[s] << (16 >>> o & 24), (o === 2 || e.length - s === 1) && (r += String.fromCharCode(this.uint6ToB64(a >>> 18 & 63), this.uint6ToB64(a >>> 12 & 63), this.uint6ToB64(a >>> 6 & 63), this.uint6ToB64(a & 63)), a = 0);
      return t === 0 ? r : r.substring(0, r.length - t) + (t === 1 ? "=" : "==");
    }, n.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Vg = (
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
      return Qt.utf8ArrToString(r);
    }, n.prototype.base64DecToArr = function(e, t) {
      for (var r = e.replace(/[^A-Za-z0-9\+\/]/g, I.EMPTY_STRING), o = r.length, i = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, a = new Uint8Array(i), s = void 0, c = void 0, l = 0, u = 0, f = 0; f < o; f++)
        if (c = f & 3, l |= this.b64ToUint6(r.charCodeAt(f)) << 18 - 6 * c, c === 3 || o - f === 1) {
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
var Gg = 32, Wg = (
  /** @class */
  function() {
    function n(e) {
      this.base64Encode = new yu(), this.cryptoObj = e;
    }
    return n.prototype.generateCodes = function() {
      return O(this, void 0, void 0, function() {
        var e, t;
        return x(this, function(r) {
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
        var e = new Uint8Array(Gg);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (r) {
        throw K.createPkceNotGeneratedError(r);
      }
    }, n.prototype.generateCodeChallengeFromVerifier = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r;
        return x(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(e)];
            case 1:
              return t = o.sent(), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
            case 2:
              throw r = o.sent(), K.createPkceNotGeneratedError(r);
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
var Yg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.getRandomValues = function(e) {
      return window.crypto.getRandomValues(e);
    }, n.prototype.generateKey = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
          return [2, window.crypto.subtle.generateKey(e, t, r)];
        });
      });
    }, n.prototype.exportKey = function(e) {
      return O(this, void 0, void 0, function() {
        return x(this, function(t) {
          return [2, window.crypto.subtle.exportKey(dr, e)];
        });
      });
    }, n.prototype.importKey = function(e, t, r, o) {
      return O(this, void 0, void 0, function() {
        return x(this, function(i) {
          return [2, window.crypto.subtle.importKey(dr, e, t, r, o)];
        });
      });
    }, n.prototype.sign = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
          return [2, window.crypto.subtle.sign(e, t, r)];
        });
      });
    }, n.prototype.digest = function(e, t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return [2, window.crypto.subtle.digest(e, t)];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Qg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(La(e));
    }, n.prototype.getRandomValues = function(e) {
      return window.msrCrypto.getRandomValues(e);
    }, n.prototype.generateKey = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
          return [2, window.msrCrypto.subtle.generateKey(e, t, r)];
        });
      });
    }, n.prototype.exportKey = function(e) {
      return O(this, void 0, void 0, function() {
        return x(this, function(t) {
          return [2, window.msrCrypto.subtle.exportKey(dr, e)];
        });
      });
    }, n.prototype.importKey = function(e, t, r, o) {
      return O(this, void 0, void 0, function() {
        return x(this, function(i) {
          return [2, window.msrCrypto.subtle.importKey(dr, e, t, r, o)];
        });
      });
    }, n.prototype.sign = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
          return [2, window.msrCrypto.subtle.sign(e, t, r)];
        });
      });
    }, n.prototype.digest = function(e, t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return [2, window.msrCrypto.subtle.digest(e, t)];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Jg = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.getRandomValues = function(e) {
      return window.msCrypto.getRandomValues(e);
    }, n.prototype.generateKey = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
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
      return O(this, void 0, void 0, function() {
        return x(this, function(t) {
          return [2, new Promise(function(r, o) {
            var i = window.msCrypto.subtle.exportKey(dr, e);
            i.addEventListener("complete", function(a) {
              var s = a.target.result, c = Qt.utf8ArrToString(new Uint8Array(s)).replace(/\r/g, I.EMPTY_STRING).replace(/\n/g, I.EMPTY_STRING).replace(/\t/g, I.EMPTY_STRING).split(" ").join(I.EMPTY_STRING).replace("\0", I.EMPTY_STRING);
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
      return O(this, void 0, void 0, function() {
        var i, a;
        return x(this, function(s) {
          return i = Qt.getSortedObjectString(e), a = Qt.stringToArrayBuffer(i), [2, new Promise(function(c, l) {
            var u = window.msCrypto.subtle.importKey(dr, a, t, r, o);
            u.addEventListener("complete", function(f) {
              c(f.target.result);
            }), u.addEventListener("error", function(f) {
              l(f);
            });
          })];
        });
      });
    }, n.prototype.sign = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
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
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
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
var Xg = "RSASSA-PKCS1-v1_5", Fc = "SHA-256", Zg = 2048, em = new Uint8Array([1, 0, 1]), vu = (
  /** @class */
  function() {
    function n(e, t) {
      var r, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new Yg();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new Jg();
      else if (this.hasMsrCrypto() && (!((r = this.cryptoOptions) === null || r === void 0) && r.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new Qg();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), K.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Lo.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: Xg,
        hash: Fc,
        modulusLength: Zg,
        publicExponent: em
      };
    }
    return n.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    }, n.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    }, n.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    }, n.prototype.sha256Digest = function(e) {
      return O(this, void 0, void 0, function() {
        var t;
        return x(this, function(r) {
          return t = Qt.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: Fc }, t)];
        });
      });
    }, n.prototype.getRandomValues = function(e) {
      return this.subtleCrypto.getRandomValues(e);
    }, n.prototype.generateKeyPair = function(e, t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, n.prototype.exportJwk = function(e) {
      return O(this, void 0, void 0, function() {
        return x(this, function(t) {
          return [2, this.subtleCrypto.exportKey(e)];
        });
      });
    }, n.prototype.importJwk = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
          return [2, this.subtleCrypto.importKey(e, this.keygenAlgorithmOptions, t, r)];
        });
      });
    }, n.prototype.sign = function(e, t) {
      return O(this, void 0, void 0, function() {
        return x(this, function(r) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var tm = (
  /** @class */
  function() {
    function n() {
      this.dbName = la, this.version = Ng, this.tableName = Mg, this.dbOpen = !1;
    }
    return n.prototype.open = function() {
      return O(this, void 0, void 0, function() {
        var e = this;
        return x(this, function(t) {
          return [2, new Promise(function(r, o) {
            var i = window.indexedDB.open(e.dbName, e.version);
            i.addEventListener("upgradeneeded", function(a) {
              var s = a;
              s.target.result.createObjectStore(e.tableName);
            }), i.addEventListener("success", function(a) {
              var s = a;
              e.db = s.target.result, e.dbOpen = !0, r();
            }), i.addEventListener("error", function() {
              return o(K.createDatabaseUnavailableError());
            });
          })];
        });
      });
    }, n.prototype.closeConnection = function() {
      var e = this.db;
      e && this.dbOpen && (e.close(), this.dbOpen = !1);
    }, n.prototype.validateDbIsOpen = function() {
      return O(this, void 0, void 0, function() {
        return x(this, function(e) {
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
      return O(this, void 0, void 0, function() {
        var t = this;
        return x(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return r.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(K.createDatabaseNotOpenError());
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
      return O(this, void 0, void 0, function() {
        var r = this;
        return x(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return o.sent(), [2, new Promise(function(i, a) {
                if (!r.db)
                  return a(K.createDatabaseNotOpenError());
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
      return O(this, void 0, void 0, function() {
        var t = this;
        return x(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return r.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(K.createDatabaseNotOpenError());
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
      return O(this, void 0, void 0, function() {
        var e = this;
        return x(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return t.sent(), [2, new Promise(function(r, o) {
                if (!e.db)
                  return o(K.createDatabaseNotOpenError());
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
      return O(this, void 0, void 0, function() {
        var t = this;
        return x(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return r.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(K.createDatabaseNotOpenError());
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
      return O(this, void 0, void 0, function() {
        return x(this, function(e) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(t, r) {
            var o = window.indexedDB.deleteDatabase(la);
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
var jc = (
  /** @class */
  function() {
    function n(e, t) {
      this.inMemoryCache = new ua(), this.indexedDBCache = new tm(), this.logger = e, this.storeName = t;
    }
    return n.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof K && e.errorCode === L.databaseUnavailable.code)
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      else
        throw e;
    }, n.prototype.getItem = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r;
        return x(this, function(o) {
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
      return O(this, void 0, void 0, function() {
        var r;
        return x(this, function(o) {
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
      return O(this, void 0, void 0, function() {
        var t;
        return x(this, function(r) {
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
      return O(this, void 0, void 0, function() {
        var e, t;
        return x(this, function(r) {
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
      return O(this, void 0, void 0, function() {
        var t, r;
        return x(this, function(o) {
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
      return O(this, void 0, void 0, function() {
        var e, t;
        return x(this, function(r) {
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
var Fo;
(function(n) {
  n.asymmetricKeys = "asymmetricKeys", n.symmetricKeys = "symmetricKeys";
})(Fo || (Fo = {}));
var nm = (
  /** @class */
  function() {
    function n(e) {
      this.logger = e, this.asymmetricKeys = new jc(this.logger, Fo.asymmetricKeys), this.symmetricKeys = new jc(this.logger, Fo.symmetricKeys);
    }
    return n.prototype.clear = function() {
      return O(this, void 0, void 0, function() {
        var e;
        return x(this, function(t) {
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
var rm = (
  /** @class */
  function() {
    function n(e, t, r) {
      this.logger = e, this.browserCrypto = new vu(this.logger, r), this.b64Encode = new yu(), this.b64Decode = new Vg(), this.guidGenerator = new mu(this.browserCrypto), this.pkceGenerator = new Wg(this.browserCrypto), this.cache = new nm(this.logger), this.performanceClient = t;
    }
    return n.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    }, n.prototype.base64Encode = function(e) {
      return this.b64Encode.encode(e);
    }, n.prototype.base64Decode = function(e) {
      return this.b64Decode.decode(e);
    }, n.prototype.generatePkceCodes = function() {
      return O(this, void 0, void 0, function() {
        return x(this, function(e) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    }, n.prototype.getPublicKeyThumbprint = function(e) {
      var t;
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u;
        return x(this, function(f) {
          switch (f.label) {
            case 0:
              return r = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(k.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(n.EXTRACTABLE, n.POP_KEY_USAGES)];
            case 1:
              return o = f.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return i = f.sent(), a = {
                e: i.e,
                kty: i.kty,
                n: i.n
              }, s = Qt.getSortedObjectString(a), [4, this.hashString(s)];
            case 3:
              return c = f.sent(), [4, this.browserCrypto.exportJwk(o.privateKey)];
            case 4:
              return l = f.sent(), [4, this.browserCrypto.importJwk(l, !1, ["sign"])];
            case 5:
              return u = f.sent(), [4, this.cache.asymmetricKeys.setItem(c, {
                privateKey: u,
                publicKey: o.publicKey,
                requestMethod: e.resourceRequestMethod,
                requestUri: e.resourceRequestUri
              })];
            case 6:
              return f.sent(), r && r.endMeasurement({
                success: !0
              }), [2, c];
          }
        });
      });
    }, n.prototype.removeTokenBindingKey = function(e) {
      return O(this, void 0, void 0, function() {
        var t;
        return x(this, function(r) {
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
      return O(this, void 0, void 0, function() {
        return x(this, function(e) {
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
      return O(this, void 0, void 0, function() {
        var i, a, s, c, l, u, f, d, h, p, g, m, b;
        return x(this, function(C) {
          switch (C.label) {
            case 0:
              return i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(k.CryptoOptsSignJwt, r), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (a = C.sent(), !a)
                throw K.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(a.publicKey)];
            case 2:
              return s = C.sent(), c = Qt.getSortedObjectString(s), l = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), u = Ag.getShrHeaderString({ kid: l, alg: s.alg }), f = this.b64Encode.urlEncode(u), e.cnf = {
                jwk: JSON.parse(c)
              }, d = this.b64Encode.urlEncode(JSON.stringify(e)), h = f + "." + d, p = Qt.stringToArrayBuffer(h), [4, this.browserCrypto.sign(a.privateKey, p)];
            case 3:
              return g = C.sent(), m = this.b64Encode.urlEncodeArr(new Uint8Array(g)), b = h + "." + m, i && i.endMeasurement({
                success: !0
              }), [2, b];
          }
        });
      });
    }, n.prototype.hashString = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r;
        return x(this, function(o) {
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
var Uc = (
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
var om = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s, c) {
      var l = n.call(this, t, r, o, i, a, s) || this;
      return l.browserCrypto = new vu(l.logger, c), l.guidGenerator = new mu(l.browserCrypto), l;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, r) {
      return new Uc(t, r);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var r = this.eventsByCorrelationId.get(t.event.correlationId), o = r && r.eventId === t.event.eventId, i = [];
      o && (r != null && r.incompleteSubMeasurements) && r.incompleteSubMeasurements.forEach(function(a) {
        i.push(G({}, a));
      }), i.length > 0 && Uc.flushMeasurements(t.event.correlationId, i);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, r) {
      var o = this, i = this.getPageVisibility(), a = n.prototype.startMeasurement.call(this, t, r);
      return G(G({}, a), { endMeasurement: function(s) {
        var c = a.endMeasurement(G({ startPageVisibility: i, endPageVisibility: o.getPageVisibility() }, s));
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
  }(du)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var im = (
  /** @class */
  function() {
    function n(e, t, r, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = r, this.cryptoObj = o;
    }
    return n.prototype.loadExternalTokens = function(e, t, r) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw K.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new Ht(t.id_token, this.cryptoObj), i, a, s;
      if (e.account)
        s = Ge.createFromAccountInfo(e.account), i = new ar(s, this.loadIdToken(o, s.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, s.homeAccountId, e.account.environment, e.account.tenantId, r), this.loadRefreshToken(e, t, s.homeAccountId, e.account.environment));
      else if (e.authority) {
        var c = Kr.generateAuthority(e.authority, e.azureCloudOptions), l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (a = new Kr(c, this.config.system.networkClient, this.storage, l, this.logger), r.clientInfo)
          this.logger.trace("TokenCache - homeAccountId from options"), s = this.loadAccount(o, a, r.clientInfo), i = new ar(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, r), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else if (t.client_info)
          this.logger.trace("TokenCache - homeAccountId from response"), s = this.loadAccount(o, a, t.client_info), i = new ar(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, r), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else
          throw K.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw K.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, i, s, a);
    }, n.prototype.loadAccount = function(e, t, r, o) {
      var i;
      if (o ? i = o : t.authorityType !== void 0 && r && (i = Ge.generateHomeAccountId(r, t.authorityType, this.logger, this.cryptoObj, e.claims)), !i)
        throw K.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var a = Ge.createAccount({ homeAccountId: i, idTokenClaims: e.claims, clientInfo: r, environment: t.hostnameAndPort }, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(a), a;
      throw K.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.loadIdToken = function(e, t, r, o) {
      var i = fn.createIdTokenEntity(t, r, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(i), i;
      throw K.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.loadAccessToken = function(e, t, r, o, i, a) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw K.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!a.extendedExpiresOn)
        throw K.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var s = new Ke(e.scopes).printScopes(), c = a.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, l = a.extendedExpiresOn, u = hn.createAccessTokenEntity(r, o, t.access_token, this.config.auth.clientId, i, s, c, l, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u), u;
      throw K.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.loadRefreshToken = function(e, t, r, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var i = rr.createRefreshTokenEntity(r, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(i), i;
      throw K.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, n.prototype.generateAuthenticationResult = function(e, t, r, o, i) {
      var a, s = I.EMPTY_STRING, c = [], l = null, u;
      r.accessToken && (s = r.accessToken.secret, c = Ke.fromString(r.accessToken.target).asArray(), l = new Date(Number(r.accessToken.expiresOn) * 1e3), u = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3));
      var f = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || I.EMPTY_STRING, d = (t == null ? void 0 : t.claims.tid) || I.EMPTY_STRING;
      return {
        authority: i ? i.canonicalAuthority : I.EMPTY_STRING,
        uniqueId: f,
        tenantId: d,
        scopes: c,
        account: o ? o.getAccountInfo() : null,
        idToken: t ? t.rawToken : I.EMPTY_STRING,
        idTokenClaims: t ? t.claims : {},
        accessToken: s,
        fromCache: !0,
        expiresOn: l,
        correlationId: e.correlationId || I.EMPTY_STRING,
        requestId: I.EMPTY_STRING,
        extExpiresOn: u,
        familyId: I.EMPTY_STRING,
        tokenType: ((a = r == null ? void 0 : r.accessToken) === null || a === void 0 ? void 0 : a.tokenType) || I.EMPTY_STRING,
        state: I.EMPTY_STRING,
        cloudGraphHostName: o.cloudGraphHostName || I.EMPTY_STRING,
        msGraphHost: o.msGraphHost || I.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: !1
      };
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var am = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t) {
      var r = n.call(this, t) || this;
      return r.includeRedirectUri = !1, r;
    }
    return e;
  }(cu)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var sm = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t, r, o, i, a, s, c, l, u, f) {
      var d = n.call(this, t, r, o, i, a, s, l, u, f) || this;
      return d.apiId = c, d;
    }
    return e.prototype.acquireToken = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l;
        return x(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !t.code)
                throw K.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(k.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, Y.Silent)];
            case 1:
              r = u.sent(), this.browserStorage.updateCacheEntries(r.state, r.nonce, r.authority, r.loginHint || I.EMPTY_STRING, r.account || null), o = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), i = G(G({}, r), { code: t.code }), this.performanceClient.setPreQueueTime(k.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, r.authority)];
            case 3:
              return a = u.sent(), s = new am(a), this.logger.verbose("Auth code client created"), c = new gu(s, this.browserStorage, i, this.logger, this.config.system, this.performanceClient), [2, c.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, r.state, s.authority, this.networkClient, !1)];
            case 4:
              throw l = u.sent(), l instanceof Q && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(r.state), l;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(K.createSilentLogoutUnsupportedError());
    }, e;
  }(mr)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var cm = (
  /** @class */
  function() {
    function n(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = zg(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new Fa(this.config.system.loggerOptions, _i, Ur), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new om(this.config.auth.clientId, this.config.auth.authority, this.logger, _i, Ur, this.config.telemetry.application, this.config.system.cryptoOptions) : new Pg(this.config.auth.clientId, this.config.auth.authority, this.logger, _i, Ur, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new rm(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Ro, this.eventHandler = new qg(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new da(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : Og(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: Ae.MemoryStorage,
        temporaryCacheLocation: Ae.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new da(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new im(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    return n.prototype.initialize = function() {
      return O(this, void 0, void 0, function() {
        var e, t, r, o, i;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              if (this.logger.trace("initialize called"), this.initialized)
                return this.logger.info("initialize has already been called, exiting early."), [
                  2
                  /*return*/
                ];
              if (e = this.config.system.allowNativeBroker, t = this.performanceClient.startMeasurement(k.InitializeClientApplication), this.eventHandler.emitEvent(oe.INITIALIZE_START), !e)
                return [3, 4];
              a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), r = this, [4, On.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return r.nativeExtensionProvider = a.sent(), [3, 4];
            case 3:
              return o = a.sent(), this.logger.verbose(o), [3, 4];
            case 4:
              return this.config.cache.claimsBasedCachingEnabled ? [3, 6] : (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), i = this.performanceClient.startMeasurement(k.ClearTokensAndKeysWithClaims), [4, this.browserStorage.clearTokensAndKeysWithClaims()]);
            case 5:
              a.sent(), i.endMeasurement({ success: !0 }), a.label = 6;
            case 6:
              return this.initialized = !0, this.eventHandler.emitEvent(oe.INITIALIZE_END), t.endMeasurement({ allowNativeBroker: e, success: !0 }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, n.prototype.handleRedirectPromise = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r, o, i, a, s, c, l, u = this;
        return x(this, function(f) {
          return this.logger.verbose("handleRedirectPromise called"), Te.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (r = e || I.EMPTY_STRING, o = this.redirectResponse.get(r), typeof o > "u" ? (this.eventHandler.emitEvent(oe.HANDLE_REDIRECT_START, Y.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), i = this.browserStorage.getCachedNativeRequest(), a = void 0, i && On.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), s = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, we.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId), a = s.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), c = this.browserStorage.getTemporaryCache(ge.CORRELATION_ID, !0) || I.EMPTY_STRING, l = this.createRedirectClient(c), a = l.handleRedirectPromise(e)), o = a.then(function(d) {
            if (d) {
              var h = t.length < u.getAllAccounts().length;
              h ? (u.eventHandler.emitEvent(oe.LOGIN_SUCCESS, Y.Redirect, d), u.logger.verbose("handleRedirectResponse returned result, login success")) : (u.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_SUCCESS, Y.Redirect, d), u.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return u.eventHandler.emitEvent(oe.HANDLE_REDIRECT_END, Y.Redirect), d;
          }).catch(function(d) {
            throw t.length > 0 ? u.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_FAILURE, Y.Redirect, null, d) : u.eventHandler.emitEvent(oe.LOGIN_FAILURE, Y.Redirect, null, d), u.eventHandler.emitEvent(oe.HANDLE_REDIRECT_END, Y.Redirect), d;
          }), this.redirectResponse.set(r, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, n.prototype.acquireTokenRedirect = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r, o, i, a, s = this;
        return x(this, function(c) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(Y.Redirect), r = this.getAllAccounts().length > 0, r ? this.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_START, Y.Redirect, e) : this.eventHandler.emitEvent(oe.LOGIN_START, Y.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (i = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, we.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = i.acquireTokenRedirect(e).catch(function(l) {
            if (l instanceof Lt && l.isFatal()) {
              s.nativeExtensionProvider = void 0;
              var u = s.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            } else if (l instanceof Pt) {
              s.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var u = s.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            }
            throw s.browserStorage.setInteractionInProgress(!1), l;
          })) : (a = this.createRedirectClient(e.correlationId), o = a.acquireToken(e)), [2, o.catch(function(l) {
            throw r ? s.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_FAILURE, Y.Redirect, null, l) : s.eventHandler.emitEvent(oe.LOGIN_FAILURE, Y.Redirect, null, l), l;
          })];
        });
      });
    }, n.prototype.acquireTokenPopup = function(e) {
      var t = this, r = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(k.AcquireTokenPopup, r);
      try {
        this.logger.verbose("acquireTokenPopup called", r), this.preflightBrowserEnvironmentCheck(Y.Popup);
      } catch (c) {
        return Promise.reject(c);
      }
      var i = this.getAllAccounts();
      i.length > 0 ? this.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_START, Y.Popup, e) : this.eventHandler.emitEvent(oe.LOGIN_START, Y.Popup, e);
      var a;
      if (this.canUseNative(e))
        a = this.acquireTokenNative(e, we.acquireTokenPopup).then(function(c) {
          return t.browserStorage.setInteractionInProgress(!1), o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: c.requestId
          }), c;
        }).catch(function(c) {
          if (c instanceof Lt && c.isFatal()) {
            t.nativeExtensionProvider = void 0;
            var l = t.createPopupClient(e.correlationId);
            return l.acquireToken(e);
          } else if (c instanceof Pt) {
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
        return l ? t.eventHandler.emitEvent(oe.LOGIN_SUCCESS, Y.Popup, c) : t.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_SUCCESS, Y.Popup, c), o.addStaticFields({
          accessTokenSize: c.accessToken.length,
          idTokenSize: c.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: c.requestId
        }), c;
      }).catch(function(c) {
        return i.length > 0 ? t.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_FAILURE, Y.Popup, null, c) : t.eventHandler.emitEvent(oe.LOGIN_FAILURE, Y.Popup, null, c), o.endMeasurement({
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
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s = this;
        return x(this, function(c) {
          return r = this.getRequestCorrelationId(e), o = G(G({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: r
          }), this.preflightBrowserEnvironmentCheck(Y.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(k.SsoSilent, r), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", r), this.eventHandler.emitEvent(oe.SSO_SILENT_START, Y.Silent, o), this.canUseNative(o) ? i = this.acquireTokenNative(o, we.ssoSilent).catch(function(l) {
            if (l instanceof Lt && l.isFatal()) {
              s.nativeExtensionProvider = void 0;
              var u = s.createSilentIframeClient(o.correlationId);
              return u.acquireToken(o);
            }
            throw l;
          }) : (a = this.createSilentIframeClient(o.correlationId), i = a.acquireToken(o)), [2, i.then(function(l) {
            var u, f;
            return s.eventHandler.emitEvent(oe.SSO_SILENT_SUCCESS, Y.Silent, l), (u = s.ssoSilentMeasurement) === null || u === void 0 || u.addStaticFields({
              accessTokenSize: l.accessToken.length,
              idTokenSize: l.idToken.length
            }), (f = s.ssoSilentMeasurement) === null || f === void 0 || f.endMeasurement({
              success: !0,
              isNativeBroker: l.fromNativeBroker,
              requestId: l.requestId
            }), l;
          }).catch(function(l) {
            var u;
            throw s.eventHandler.emitEvent(oe.SSO_SILENT_FAILURE, Y.Silent, null, l), (u = s.ssoSilentMeasurement) === null || u === void 0 || u.endMeasurement({
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
      return O(this, void 0, void 0, function() {
        var t, r, o, i, a = this;
        return x(this, function(s) {
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(Y.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_BY_CODE_START, Y.Silent, e), r = this.performanceClient.startMeasurement(k.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw K.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, i = this.hybridAuthCodeResponses.get(o), i ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), r.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), i = this.acquireTokenByCodeAsync(G(G({}, e), { correlationId: t })).then(function(c) {
                return a.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_BY_CODE_SUCCESS, Y.Silent, c), a.hybridAuthCodeResponses.delete(o), r.addStaticFields({
                  accessTokenSize: c.accessToken.length,
                  idTokenSize: c.idToken.length
                }), r.endMeasurement({
                  success: !0,
                  isNativeBroker: c.fromNativeBroker,
                  requestId: c.requestId
                }), c;
              }).catch(function(c) {
                throw a.hybridAuthCodeResponses.delete(o), a.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_BY_CODE_FAILURE, Y.Silent, null, c), r.endMeasurement({
                  errorCode: c.errorCode,
                  subErrorCode: c.subError,
                  success: !1
                }), c;
              }), this.hybridAuthCodeResponses.set(o, i)), [2, i];
            if (e.nativeAccountId) {
              if (this.canUseNative(e, e.nativeAccountId))
                return [2, this.acquireTokenNative(e, we.acquireTokenByCode, e.nativeAccountId).catch(function(c) {
                  throw c instanceof Lt && c.isFatal() && (a.nativeExtensionProvider = void 0), c;
                })];
              throw K.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw K.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (c) {
            throw this.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_BY_CODE_FAILURE, Y.Silent, null, c), r.endMeasurement({
              errorCode: c instanceof Q && c.errorCode || void 0,
              subErrorCode: c instanceof Q && c.subError || void 0,
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
      return O(this, void 0, void 0, function() {
        var r, o, i = this;
        return x(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(k.AcquireTokenByCodeAsync, e.correlationId), (t = this.acquireTokenByCodeAsyncMeasurement) === null || t === void 0 || t.increment({
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
      return O(this, void 0, void 0, function() {
        return x(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(k.AcquireTokenFromCache, t.correlationId), r.cacheLookupPolicy) {
            case tt.Default:
            case tt.AccessToken:
            case tt.AccessTokenAndRefreshToken:
              return [2, e.acquireToken(t)];
            default:
              throw W.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, n.prototype.acquireTokenByRefreshToken = function(e, t) {
      return O(this, void 0, void 0, function() {
        var r;
        return x(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(k.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case tt.Default:
            case tt.AccessTokenAndRefreshToken:
            case tt.RefreshToken:
            case tt.RefreshTokenAndNetwork:
              return r = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(k.SilentRefreshClientAcquireToken, e.correlationId), [2, r.acquireToken(e)];
            default:
              throw W.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, n.prototype.acquireTokenBySilentIframe = function(e) {
      return O(this, void 0, void 0, function() {
        var t;
        return x(this, function(r) {
          return this.performanceClient.addQueueMeasurement(k.AcquireTokenBySilentIframe, e.correlationId), t = this.createSilentIframeClient(e.correlationId), this.performanceClient.setPreQueueTime(k.SilentIframeClientAcquireToken, e.correlationId), [2, t.acquireToken(e)];
        });
      });
    }, n.prototype.logout = function(e) {
      return O(this, void 0, void 0, function() {
        var t;
        return x(this, function(r) {
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(G({ correlationId: t }, e))];
        });
      });
    }, n.prototype.logoutRedirect = function(e) {
      return O(this, void 0, void 0, function() {
        var t, r;
        return x(this, function(o) {
          return t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(Y.Redirect), r = this.createRedirectClient(t), [2, r.logout(e)];
        });
      });
    }, n.prototype.logoutPopup = function(e) {
      try {
        var t = this.getRequestCorrelationId(e);
        this.preflightBrowserEnvironmentCheck(Y.Popup);
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), Te.blockNonBrowserEnvironment(this.isBrowserEnvironment), Te.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), Te.blockReloadInHiddenIframes(), Te.blockAcquireTokenInPopups(), Te.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === Y.Redirect && this.config.cache.cacheLocation === Ae.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Lo.createInMemoryRedirectUnavailableError();
      (e === Y.Redirect || e === Y.Popup) && this.preflightInteractiveRequest(t);
    }, n.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), Te.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, n.prototype.acquireTokenNative = function(e, t, r) {
      return O(this, void 0, void 0, function() {
        var o;
        return x(this, function(i) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw K.createNativeConnectionNotEstablishedError();
          return o = new sr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, r || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, n.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !On.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (e.prompt)
        switch (e.prompt) {
          case Ve.NONE:
          case Ve.CONSENT:
          case Ve.LOGIN:
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
      return new Fg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, n.prototype.createRedirectClient = function(e) {
      return new Lg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentIframeClient = function(e) {
      return new $g(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, we.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentCacheClient = function(e) {
      return new pu(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentRefreshClient = function(e) {
      return new Kg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, n.prototype.createSilentAuthCodeClient = function(e) {
      return new sm(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, we.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
      return e != null && e.correlationId ? e.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : I.EMPTY_STRING;
    }, n;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var lm = (
  /** @class */
  function(n) {
    He(e, n);
    function e(t) {
      var r = n.call(this, t) || this;
      return r.astsAsyncMeasurement = void 0, r.activeSilentTokenRequests = /* @__PURE__ */ new Map(), r.trackPageVisibility = r.trackPageVisibility.bind(r), r;
    }
    return e.prototype.loginRedirect = function(t) {
      return O(this, void 0, void 0, function() {
        var r;
        return x(this, function(o) {
          return r = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", r), [2, this.acquireTokenRedirect(G({ correlationId: r }, t || Oc))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var r = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", r), this.acquireTokenPopup(G({ correlationId: r }, t || Oc));
    }, e.prototype.acquireTokenSilent = function(t) {
      return O(this, void 0, void 0, function() {
        var r, o, i, a, s, c, l, u = this;
        return x(this, function(f) {
          if (r = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(k.AcquireTokenSilent, r), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(Y.Silent), this.logger.verbose("acquireTokenSilent called", r), i = t.account || this.getActiveAccount(), !i)
            throw K.createNoAccountError();
          return a = {
            clientId: this.config.auth.clientId,
            authority: t.authority || I.EMPTY_STRING,
            scopes: t.scopes,
            homeAccountIdentifier: i.homeAccountId,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
          }, s = JSON.stringify(a), c = this.activeSilentTokenRequests.get(s), typeof c > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", r), this.performanceClient.setPreQueueTime(k.AcquireTokenSilentAsync, r), l = this.acquireTokenSilentAsync(G(G({}, t), { correlationId: r }), i).then(function(d) {
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
          }), this.activeSilentTokenRequests.set(s, l), [2, l]) : (this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", r), o.discardMeasurement(), [2, c]);
        });
      });
    }, e.prototype.trackPageVisibility = function() {
      this.astsAsyncMeasurement && (this.logger.info("Perf: Visibility change detected"), this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      }));
    }, e.prototype.acquireTokenSilentAsync = function(t, r) {
      var o;
      return O(this, void 0, void 0, function() {
        var i, a, s, c, l, u = this;
        return x(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(k.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_START, Y.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(k.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), On.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && r.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), a = G(G({}, t), { account: r }), i = this.acquireTokenNative(a, we.acquireTokenSilent_silentFlow).catch(function(d) {
                return O(u, void 0, void 0, function() {
                  var h;
                  return x(this, function(p) {
                    if (d instanceof Lt && d.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, h = this.createSilentIframeClient(t.correlationId), [2, h.acquireToken(t)];
                    throw d;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), s = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(k.InitializeSilentRequest, t.correlationId), [4, s.initializeSilentRequest(t, r)];
            case 2:
              c = f.sent(), l = G(G({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || tt.Default
              }), this.performanceClient.setPreQueueTime(k.AcquireTokenFromCache, c.correlationId), i = this.acquireTokenFromCache(s, c, l).catch(function(d) {
                if (l.cacheLookupPolicy === tt.AccessToken)
                  throw d;
                return Te.blockReloadInHiddenIframes(), u.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_NETWORK_START, Y.Silent, c), u.performanceClient.setPreQueueTime(k.AcquireTokenByRefreshToken, c.correlationId), u.acquireTokenByRefreshToken(c, l).catch(function(h) {
                  var p = h instanceof Ln, g = h instanceof Pt, m = h.errorCode === or.noTokensFoundError.code, b = h.errorCode === At.INVALID_GRANT_ERROR;
                  if ((!p || !b || g || l.cacheLookupPolicy === tt.AccessTokenAndRefreshToken || l.cacheLookupPolicy === tt.RefreshToken) && l.cacheLookupPolicy !== tt.Skip && !m)
                    throw h;
                  return u.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), u.performanceClient.setPreQueueTime(k.AcquireTokenBySilentIframe, c.correlationId), u.acquireTokenBySilentIframe(c);
                });
              }), f.label = 3;
            case 3:
              return [2, i.then(function(d) {
                var h;
                return u.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_SUCCESS, Y.Silent, d), (h = u.astsAsyncMeasurement) === null || h === void 0 || h.endMeasurement({
                  success: !0,
                  fromCache: d.fromCache,
                  isNativeBroker: d.fromNativeBroker,
                  requestId: d.requestId
                }), d;
              }).catch(function(d) {
                var h;
                throw u.eventHandler.emitEvent(oe.ACQUIRE_TOKEN_FAILURE, Y.Silent, null, d), (h = u.astsAsyncMeasurement) === null || h === void 0 || h.endMeasurement({
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
    }, e.prototype.hydrateCache = function(t, r) {
      return O(this, void 0, void 0, function() {
        var o;
        return x(this, function(i) {
          return this.logger.verbose("hydrateCache called"), t.account ? (o = Ge.createFromAccountInfo(t.account, t.cloudGraphHostName, t.msGraphHost), this.browserStorage.setAccount(o), t.fromNativeBroker ? (this.logger.verbose("Response was from native broker, storing in-memory"), [2, this.nativeInternalStorage.hydrateCache(t, r)]) : [2, this.browserStorage.hydrateCache(t, r)]) : [
            2
            /*return*/
          ];
        });
      });
    }, e;
  }(cm)
);
function Ft(n) {
  return Object.keys(n);
}
function ki(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function za(n, e) {
  const t = { ...n }, r = e;
  return ki(n) && ki(e) && Object.keys(e).forEach((o) => {
    ki(r[o]) && o in n ? t[o] = za(t[o], r[o]) : t[o] = r[o];
  }), t;
}
function um(n) {
  return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function dm(n) {
  var e;
  return typeof n != "string" || !n.includes("var(--mantine-scale)") ? n : (e = n.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function fm(n) {
  const e = dm(n);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function Ai(n) {
  return n === "0rem" ? "0rem" : `calc(${n} * var(--mantine-scale))`;
}
function bu(n, { shouldScale: e = !1 } = {}) {
  function t(r) {
    if (r === 0 || r === "0")
      return `0${n}`;
    if (typeof r == "number") {
      const o = `${r / 16}${n}`;
      return e ? Ai(o) : o;
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba("))
        return r;
      if (r.includes(","))
        return r.split(",").map((i) => t(i)).join(",");
      if (r.includes(" "))
        return r.split(" ").map((i) => t(i)).join(" ");
      if (r.includes(n))
        return e ? Ai(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${n}`;
        return e ? Ai(i) : i;
      }
    }
    return r;
  }
  return t;
}
const N = bu("rem", { shouldScale: !0 }), Hc = bu("em");
function $a(n) {
  return Object.keys(n).reduce((e, t) => (n[t] !== void 0 && (e[t] = n[t]), e), {});
}
function Cu(n) {
  return typeof n == "number" ? !0 : typeof n == "string" ? n.startsWith("calc(") || n.startsWith("var(") || n.includes(" ") && n.trim() !== "" ? !0 : /[0-9]/.test(n.trim().replace("-", "")[0]) : !1;
}
function Hn(n) {
  return Array.isArray(n) || n === null ? !1 : typeof n == "object" ? n.type !== Vl : !1;
}
function yr(n) {
  const e = Cn(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => {
    const o = nn(e);
    if (o === null)
      throw new Error(n);
    return o;
  }];
}
function wu(n = null) {
  const e = Cn(n);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => nn(e)];
}
function Bc(n, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${n}-${t}`;
  };
}
function ha(n, e) {
  let t = n;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function hm(n, e, t) {
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
function pm(n, e, t) {
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
function gm(n, e, t) {
  return ha(n, t) === ha(e, t);
}
function mm({
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
      ((p = ha(s.currentTarget, n)) == null ? void 0 : p.querySelectorAll(
        e
      )) || []
    ).filter((g) => gm(s.currentTarget, g, n)), l = c.findIndex((g) => s.currentTarget === g), u = pm(l, c, r), f = hm(l, c, r), d = i === "rtl" ? f : u, h = i === "rtl" ? u : f;
    switch (s.key) {
      case "ArrowRight": {
        a === "horizontal" && (s.stopPropagation(), s.preventDefault(), c[d].focus(), o && c[d].click());
        break;
      }
      case "ArrowLeft": {
        a === "horizontal" && (s.stopPropagation(), s.preventDefault(), c[h].focus(), o && c[h].click());
        break;
      }
      case "ArrowUp": {
        a === "vertical" && (s.stopPropagation(), s.preventDefault(), c[f].focus(), o && c[f].click());
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
const ym = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Ka(n) {
  return ym[n];
}
const vm = () => {
};
function bm(n, e = { active: !0 }) {
  return typeof n != "function" || !e.active ? e.onKeyDown || vm : (t) => {
    var r;
    t.key === "Escape" && (n(t), (r = e.onTrigger) == null || r.call(e));
  };
}
function De(n, e = "size", t = !0) {
  if (n !== void 0)
    return Cu(n) ? t ? N(n) : n : `var(--${e}-${n})`;
}
function qa(n) {
  return De(n, "mantine-spacing");
}
function Ct(n) {
  return n === void 0 ? "var(--mantine-radius-default)" : De(n, "mantine-radius");
}
function dt(n) {
  return De(n, "mantine-font-size");
}
function Cm(n) {
  return De(n, "mantine-line-height", !1);
}
function Su(n) {
  if (n)
    return De(n, "mantine-shadow", !1);
}
function Eu() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Rn(n) {
  const e = ue(n);
  return X(() => {
    e.current = n;
  }), Br(() => (...t) => {
    var r;
    return (r = e.current) == null ? void 0 : r.call(e, ...t);
  }, []);
}
function ni(n, e) {
  const t = Rn(n), r = ue(0);
  return X(() => () => window.clearTimeout(r.current), []), me(
    (...o) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => t(...o), e);
    },
    [t, e]
  );
}
const zc = ["mousedown", "touchstart"];
function wm(n, e, t) {
  const r = ue();
  return X(() => {
    const o = (i) => {
      const { target: a } = i ?? {};
      if (Array.isArray(t)) {
        const s = (a == null ? void 0 : a.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(a) && a.tagName !== "HTML";
        t.every((l) => !!l && !i.composedPath().includes(l)) && !s && n();
      } else
        r.current && !r.current.contains(a) && n();
    };
    return (e || zc).forEach((i) => document.addEventListener(i, o)), () => {
      (e || zc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, n, t]), r;
}
function Sm(n, e) {
  try {
    return n.addEventListener("change", e), () => n.removeEventListener("change", e);
  } catch {
    return n.addListener(e), () => n.removeListener(e);
  }
}
function Em(n, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(n).matches : !1;
}
function Im(n, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = te(
    t ? e : Em(n)
  ), i = ue();
  return X(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(n), o(i.current.matches), Sm(i.current, (a) => o(a.matches));
  }, [n]), r;
}
function Tm(n, e, t = { leading: !1 }) {
  const [r, o] = te(n), i = ue(!1), a = ue(null), s = ue(!1), c = () => window.clearTimeout(a.current);
  return X(() => {
    i.current && (!s.current && t.leading ? (s.current = !0, o(n)) : (c(), a.current = window.setTimeout(() => {
      s.current = !1, o(n);
    }, e)));
  }, [n, t.leading, e]), X(() => (i.current = !0, c), []), [r, c];
}
const to = typeof document < "u" ? xa : X;
function mn(n, e) {
  const t = ue(!1);
  X(
    () => () => {
      t.current = !1;
    },
    []
  ), X(() => {
    if (t.current)
      return n();
    t.current = !0;
  }, e);
}
function _m({ opened: n, shouldReturnFocus: e = !0 }) {
  const t = ue(), r = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return mn(() => {
    let o = -1;
    const i = (a) => {
      a.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), n ? t.current = document.activeElement : e && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [n, e]), r;
}
function km(n, e = "body > :not(script)") {
  const t = Eu(), r = Array.from(
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
const Am = /input|select|textarea|button|object/, Iu = "a, input, select, textarea, button, object, [tabindex]";
function Rm(n) {
  return n.style.display === "none";
}
function Pm(n) {
  if (n.getAttribute("aria-hidden") || n.getAttribute("hidden") || n.getAttribute("type") === "hidden")
    return !1;
  let t = n;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Rm(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function Tu(n) {
  let e = n.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function pa(n) {
  const e = n.nodeName.toLowerCase(), t = !Number.isNaN(Tu(n));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Am.test(e) && !n.disabled || n instanceof HTMLAnchorElement && n.href || t) && Pm(n);
}
function _u(n) {
  const e = Tu(n);
  return (Number.isNaN(e) || e >= 0) && pa(n);
}
function Nm(n) {
  return Array.from(n.querySelectorAll(Iu)).filter(_u);
}
function Mm(n, e) {
  const t = Nm(n);
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
function Om(n = !0) {
  const e = ue(), t = ue(null), r = (i) => {
    let a = i.querySelector("[data-autofocus]");
    if (!a) {
      const s = Array.from(i.querySelectorAll(Iu));
      a = s.find(_u) || s.find(pa) || null, !a && pa(i) && (a = i);
    }
    a && a.focus({ preventScroll: !0 });
  }, o = me(
    (i) => {
      if (n) {
        if (i === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = km(i), e.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i);
        }), e.current = i) : e.current = null);
      }
    },
    [n]
  );
  return X(() => {
    if (!n)
      return;
    e.current && setTimeout(() => r(e.current));
    const i = (a) => {
      a.key === "Tab" && e.current && Mm(e.current, a);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), t.current && t.current();
    };
  }, [n]), o;
}
const xm = Xo["useId".toString()] || (() => {
});
function Dm() {
  const n = xm();
  return n ? `mantine-${n.replace(/:/g, "")}` : "";
}
function rn(n) {
  const e = Dm(), [t, r] = te(e);
  return to(() => {
    r(Eu());
  }, []), typeof n == "string" ? n : typeof window > "u" ? e : t;
}
function ku(n, e) {
  typeof n == "function" ? n(e) : typeof n == "object" && n !== null && "current" in n && (n.current = e);
}
function Au(...n) {
  return (e) => {
    n.forEach((t) => ku(t, e));
  };
}
function at(...n) {
  return me(Au(...n), n);
}
function Fn({
  value: n,
  defaultValue: e,
  finalValue: t,
  onChange: r = () => {
  }
}) {
  const [o, i] = te(
    e !== void 0 ? e : t
  ), a = (s, ...c) => {
    i(s), r == null || r(s, ...c);
  };
  return n !== void 0 ? [n, r, !0] : [o, a, !1];
}
function Ru(n, e) {
  return Im("(prefers-reduced-motion: reduce)", n, e);
}
function Lm(n) {
  const e = ue();
  return X(() => {
    e.current = n;
  }, [n]), e.current;
}
function Pu(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number")
    r += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var o = n.length;
      for (e = 0; e < o; e++)
        n[e] && (t = Pu(n[e])) && (r && (r += " "), r += t);
    } else
      for (t in n)
        n[t] && (r && (r += " "), r += t);
  return r;
}
function zt() {
  for (var n, e, t = 0, r = "", o = arguments.length; t < o; t++)
    (n = arguments[t]) && (e = Pu(n)) && (r && (r += " "), r += e);
  return r;
}
const Fm = {};
function jm(n) {
  const e = {};
  return n.forEach((t) => {
    Object.entries(t).forEach(([r, o]) => {
      e[r] ? e[r] = zt(e[r], o) : e[r] = o;
    });
  }), e;
}
function ri({ theme: n, classNames: e, props: t, stylesCtx: r }) {
  const i = (Array.isArray(e) ? e : [e]).map(
    (a) => typeof a == "function" ? a(n, t, r) : a || Fm
  );
  return jm(i);
}
function jo({ theme: n, styles: e, props: t, stylesCtx: r }) {
  return (Array.isArray(e) ? e : [e]).reduce((i, a) => typeof a == "function" ? { ...i, ...a(n, t, r) } : { ...i, ...a }, {});
}
const Nu = Cn(null);
function Bn() {
  const n = nn(Nu);
  if (!n)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return n;
}
function Um() {
  return Bn().cssVariablesResolver;
}
function Hm() {
  return Bn().classNamesPrefix;
}
function Va() {
  return Bn().getStyleNonce;
}
function Bm() {
  return Bn().withStaticClasses;
}
function zm() {
  return Bn().headless;
}
function $m() {
  var n;
  return (n = Bn().stylesTransform) == null ? void 0 : n.sx;
}
function Km() {
  var n;
  return (n = Bn().stylesTransform) == null ? void 0 : n.styles;
}
function qm(n) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(n);
}
function Vm(n) {
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
function Gm(n) {
  const [e, t, r, o] = n.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: t, b: r, a: o || 1 };
}
function Wm(n) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = n.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, i = parseInt(t[3], 10) / 100, a = t[5] ? parseFloat(t[5]) : void 0, s = (1 - Math.abs(2 * i - 1)) * o, c = r / 60, l = s * (1 - Math.abs(c % 2 - 1)), u = i - s / 2;
  let f, d, h;
  return c >= 0 && c < 1 ? (f = s, d = l, h = 0) : c >= 1 && c < 2 ? (f = l, d = s, h = 0) : c >= 2 && c < 3 ? (f = 0, d = s, h = l) : c >= 3 && c < 4 ? (f = 0, d = l, h = s) : c >= 4 && c < 5 ? (f = l, d = 0, h = s) : (f = s, d = 0, h = l), {
    r: Math.round((f + u) * 255),
    g: Math.round((d + u) * 255),
    b: Math.round((h + u) * 255),
    a: a || 1
  };
}
function Ga(n) {
  return qm(n) ? Vm(n) : n.startsWith("rgb") ? Gm(n) : n.startsWith("hsl") ? Wm(n) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function ho(n, e) {
  if (n.startsWith("var("))
    return `color-mix(in srgb, ${n}, black ${e * 100}%)`;
  const { r: t, g: r, b: o, a: i } = Ga(n), a = 1 - e, s = (c) => Math.round(c * a);
  return `rgba(${s(t)}, ${s(r)}, ${s(o)}, ${i})`;
}
function qr(n, e) {
  return typeof n.primaryShade == "number" ? n.primaryShade : e === "dark" ? n.primaryShade.dark : n.primaryShade.light;
}
function Ri(n) {
  return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
}
function Ym(n) {
  const e = n.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function Qm(n) {
  if (n.startsWith("oklch("))
    return (Ym(n) || 0) / 100;
  const { r: e, g: t, b: r } = Ga(n), o = e / 255, i = t / 255, a = r / 255, s = Ri(o), c = Ri(i), l = Ri(a);
  return 0.2126 * s + 0.7152 * c + 0.0722 * l;
}
function Tr(n, e = 0.179) {
  return n.startsWith("var(") ? !1 : Qm(n) > e;
}
function zn({
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
      isLight: Tr(
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
      isLight: Tr(
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
      isLight: Tr(
        n === "white" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: `--mantine-color-${n}`
    };
  const [r, o] = n.split("."), i = o ? Number(o) : void 0, a = r in e.colors;
  if (a) {
    const s = i !== void 0 ? e.colors[r][i] : e.colors[r][qr(e, t || "light")];
    return {
      color: r,
      value: s,
      shade: i,
      isThemeColor: a,
      isLight: Tr(s, e.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`
    };
  }
  return {
    color: n,
    value: n,
    isThemeColor: a,
    isLight: Tr(n, e.luminanceThreshold),
    shade: i,
    variable: void 0
  };
}
function Bt(n, e) {
  const t = zn({ color: n || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : n;
}
function ga(n, e) {
  const t = {
    from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
    to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
    deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg || 0
  }, r = Bt(t.from, e), o = Bt(t.to, e);
  return `linear-gradient(${t.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Gt(n, e) {
  if (typeof n != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (n.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${n}, transparent ${i}%)`;
  }
  if (n.startsWith("oklch"))
    return n.includes("/") ? n.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : n.replace(")", ` / ${e})`);
  const { r: t, g: r, b: o } = Ga(n);
  return `rgba(${t}, ${r}, ${o}, ${e})`;
}
const Qn = Gt, Jm = ({
  color: n,
  theme: e,
  variant: t,
  gradient: r,
  autoContrast: o
}) => {
  const i = zn({ color: n, theme: e }), a = typeof o == "boolean" ? o : e.autoContrast;
  if (t === "filled") {
    const s = a && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return i.isThemeColor ? i.shade === void 0 ? {
      background: `var(--mantine-color-${n}-filled)`,
      hover: `var(--mantine-color-${n}-filled-hover)`,
      color: s,
      border: `${N(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${i.color}-${i.shade})`,
      hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
      color: s,
      border: `${N(1)} solid transparent`
    } : {
      background: n,
      hover: ho(n, 0.1),
      color: s,
      border: `${N(1)} solid transparent`
    };
  }
  if (t === "light") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: `var(--mantine-color-${n}-light)`,
          hover: `var(--mantine-color-${n}-light-hover)`,
          color: `var(--mantine-color-${n}-light-color)`,
          border: `${N(1)} solid transparent`
        };
      const s = e.colors[i.color][i.shade];
      return {
        background: Gt(s, 0.1),
        hover: Gt(s, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${N(1)} solid transparent`
      };
    }
    return {
      background: Gt(n, 0.1),
      hover: Gt(n, 0.12),
      color: n,
      border: `${N(1)} solid transparent`
    };
  }
  if (t === "outline")
    return i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${n}-outline-hover)`,
      color: `var(--mantine-color-${n}-outline)`,
      border: `${N(1)} solid var(--mantine-color-${n}-outline)`
    } : {
      background: "transparent",
      hover: Gt(e.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${N(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: Gt(n, 0.05),
      color: n,
      border: `${N(1)} solid ${n}`
    };
  if (t === "subtle") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${n}-light-hover)`,
          color: `var(--mantine-color-${n}-light-color)`,
          border: `${N(1)} solid transparent`
        };
      const s = e.colors[i.color][i.shade];
      return {
        background: "transparent",
        hover: Gt(s, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${N(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Gt(n, 0.12),
      color: n,
      border: `${N(1)} solid transparent`
    };
  }
  return t === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${n}-light-color)`,
    border: `${N(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
    border: `${N(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: n,
    border: `${N(1)} solid transparent`
  } : t === "white" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: ho(e.white, 0.01),
    color: `var(--mantine-color-${n}-filled)`,
    border: `${N(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: ho(e.white, 0.01),
    color: `var(--mantine-color-${i.color}-${i.shade})`,
    border: `${N(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: ho(e.white, 0.01),
    color: n,
    border: `${N(1)} solid transparent`
  } : t === "gradient" ? {
    background: ga(r, e),
    hover: ga(r, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${N(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Xm = {
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
}, $c = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Wa = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Xm,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Jm,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: $c,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: $c,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: N(34), lineHeight: "1.3" },
      h2: { fontSize: N(26), lineHeight: "1.35" },
      h3: { fontSize: N(22), lineHeight: "1.4" },
      h4: { fontSize: N(18), lineHeight: "1.45" },
      h5: { fontSize: N(16), lineHeight: "1.5" },
      h6: { fontSize: N(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: N(12),
    sm: N(14),
    md: N(16),
    lg: N(18),
    xl: N(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: N(2),
    sm: N(4),
    md: N(8),
    lg: N(16),
    xl: N(32)
  },
  spacing: {
    xs: N(10),
    sm: N(12),
    md: N(16),
    lg: N(20),
    xl: N(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), 0 ${N(1)} ${N(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(10)} ${N(
      15
    )} ${N(-5)}, rgba(0, 0, 0, 0.04) 0 ${N(7)} ${N(7)} ${N(-5)}`,
    md: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(20)} ${N(
      25
    )} ${N(-5)}, rgba(0, 0, 0, 0.04) 0 ${N(10)} ${N(10)} ${N(-5)}`,
    lg: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(28)} ${N(
      23
    )} ${N(-7)}, rgba(0, 0, 0, 0.04) 0 ${N(12)} ${N(12)} ${N(-7)}`,
    xl: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(36)} ${N(
      28
    )} ${N(-7)}, rgba(0, 0, 0, 0.04) 0 ${N(17)} ${N(17)} ${N(-7)}`
  },
  other: {},
  components: {}
};
function Kc(n) {
  return n === "auto" || n === "dark" || n === "light";
}
function Zm({
  key: n = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const r = window.localStorage.getItem(n);
        return Kc(r) ? r : t;
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
        r.storageArea === window.localStorage && r.key === n && Kc(r.newValue) && t(r.newValue);
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
const ey = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", qc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Pi(n) {
  return n < 0 || n > 9 ? !1 : parseInt(n.toString(), 10) === n;
}
function Vc(n) {
  if (!(n.primaryColor in n.colors))
    throw new Error(ey);
  if (typeof n.primaryShade == "object" && (!Pi(n.primaryShade.dark) || !Pi(n.primaryShade.light)))
    throw new Error(qc);
  if (typeof n.primaryShade == "number" && !Pi(n.primaryShade))
    throw new Error(qc);
}
function ty(n, e) {
  var r;
  if (!e)
    return Vc(n), n;
  const t = za(n, e);
  return e.fontFamily && !((r = e.headings) != null && r.fontFamily) && (t.headings.fontFamily = e.fontFamily), Vc(t), t;
}
const Ya = Cn(null), ny = () => nn(Ya) || Wa;
function $t() {
  const n = nn(Ya);
  if (!n)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return n;
}
function Mu({
  theme: n,
  children: e,
  inherit: t = !0
}) {
  const r = ny(), o = Br(
    () => ty(t ? r : Wa, n),
    [n, r, t]
  );
  return /* @__PURE__ */ y.jsx(Ya.Provider, { value: o, children: e });
}
Mu.displayName = "@mantine/core/MantineThemeProvider";
function ry() {
  const n = $t(), e = Va(), t = Ft(n.breakpoints).reduce((r, o) => {
    const i = n.breakpoints[o].includes("px"), a = fm(n.breakpoints[o]), s = i ? `${a - 0.1}px` : Hc(a - 0.1), c = i ? `${a}px` : Hc(a);
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
function Ni(n) {
  return Object.entries(n).map(([e, t]) => `${e}: ${t};`).join("");
}
function _r(n, e) {
  return (Array.isArray(n) ? n : [n]).reduce((r, o) => `${o}{${r}}`, e);
}
function oy(n, e) {
  const t = Ni(n.variables), r = t ? _r(e, t) : "", o = Ni(n.dark), i = Ni(n.light), a = o ? _r(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, o) : "", s = i ? _r(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${a}${s}`;
}
function Qa({ color: n, theme: e, autoContrast: t }) {
  return (typeof t == "boolean" ? t : e.autoContrast) && zn({ color: n || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Gc(n, e) {
  return Qa({
    color: n.colors[n.primaryColor][qr(n, e)],
    theme: n,
    autoContrast: null
  });
}
function po({
  theme: n,
  color: e,
  colorScheme: t,
  name: r = e,
  withColorValues: o = !0
}) {
  if (!n.colors[e])
    return {};
  if (t === "light") {
    const s = qr(n, "light"), c = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${s === 9 ? 8 : s + 1})`,
      [`--mantine-color-${r}-light`]: Qn(n.colors[e][s], 0.1),
      [`--mantine-color-${r}-light-hover`]: Qn(n.colors[e][s], 0.12),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-outline-hover`]: Qn(n.colors[e][s], 0.05)
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
  const i = qr(n, "dark"), a = {
    [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
    [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
    [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${i === 9 ? 8 : i + 1})`,
    [`--mantine-color-${r}-light`]: Qn(
      n.colors[e][Math.max(0, i - 2)],
      0.15
    ),
    [`--mantine-color-${r}-light-hover`]: Qn(
      n.colors[e][Math.max(0, i - 2)],
      0.2
    ),
    [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(i - 5, 0)})`,
    [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(i - 4, 0)})`,
    [`--mantine-color-${r}-outline-hover`]: Qn(
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
function iy(n) {
  return !!n && typeof n == "object" && "mantine-virtual-color" in n;
}
function Jn(n, e, t) {
  Ft(e).forEach(
    (r) => Object.assign(n, { [`--mantine-${t}-${r}`]: e[r] })
  );
}
const Ou = (n) => {
  const e = qr(n, "light"), t = n.defaultRadius in n.radius ? n.radius[n.defaultRadius] : N(n.defaultRadius), r = {
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
      "--mantine-primary-color-contrast": Gc(n, "light"),
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
      "--mantine-primary-color-contrast": Gc(n, "dark"),
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
  Jn(r.variables, n.breakpoints, "breakpoint"), Jn(r.variables, n.spacing, "spacing"), Jn(r.variables, n.fontSizes, "font-size"), Jn(r.variables, n.lineHeights, "line-height"), Jn(r.variables, n.shadows, "shadow"), Jn(r.variables, n.radius, "radius"), n.colors[n.primaryColor].forEach((i, a) => {
    r.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${n.primaryColor}-${a})`;
  }), Ft(n.colors).forEach((i) => {
    const a = n.colors[i];
    if (iy(a)) {
      Object.assign(
        r.light,
        po({
          theme: n,
          name: a.name,
          color: a.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        r.dark,
        po({
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
      po({
        theme: n,
        color: i,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      r.dark,
      po({
        theme: n,
        color: i,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = n.headings.sizes;
  return Ft(o).forEach((i) => {
    r.variables[`--mantine-${i}-font-size`] = o[i].fontSize, r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, r.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || n.headings.fontWeight;
  }), r;
};
function ay({ theme: n, generator: e }) {
  const t = Ou(n), r = e == null ? void 0 : e(n);
  return r ? za(t, r) : t;
}
const Mi = Ou(Wa);
function sy(n) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return Ft(n.variables).forEach((t) => {
    Mi.variables[t] !== n.variables[t] && (e.variables[t] = n.variables[t]);
  }), Ft(n.light).forEach((t) => {
    Mi.light[t] !== n.light[t] && (e.light[t] = n.light[t]);
  }), Ft(n.dark).forEach((t) => {
    Mi.dark[t] !== n.dark[t] && (e.dark[t] = n.dark[t]);
  }), e;
}
function cy(n) {
  return `
  ${n}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${n}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function xu({
  cssVariablesSelector: n,
  deduplicateCssVariables: e
}) {
  const t = $t(), r = Va(), o = Um(), i = ay({ theme: t, generator: o }), a = n === ":root" && e, s = a ? sy(i) : i, c = oy(s, n);
  return c ? /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: {
        __html: `${c}${a ? "" : cy(n)}`
      }
    }
  ) : null;
}
xu.displayName = "@mantine/CssVariables";
function ly() {
  const n = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || n(...e);
  };
}
function Xn(n, e) {
  var r;
  const t = n !== "auto" ? n : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = e()) == null || r.setAttribute("data-mantine-color-scheme", t);
}
function uy({
  manager: n,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: r
}) {
  const o = ue(), [i, a] = te(() => n.get(e)), s = r || i, c = me(
    (u) => {
      r || (Xn(u, t), a(u), n.set(u));
    },
    [n.set, s, r]
  ), l = me(() => {
    a(e), Xn(e, t), n.clear();
  }, [n.clear, e]);
  return X(() => (n.subscribe(c), n.unsubscribe), [n.subscribe, n.unsubscribe]), to(() => {
    Xn(n.get(e), t);
  }, []), X(() => {
    var f;
    if (r)
      return Xn(r, t), () => {
      };
    r === void 0 && Xn(i, t), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (d) => {
      i === "auto" && Xn(d.matches ? "dark" : "light", t);
    };
    return (f = o.current) == null || f.addEventListener("change", u), () => {
      var d;
      return (d = o.current) == null ? void 0 : d.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: s, setColorScheme: c, clearColorScheme: l };
}
function dy({
  respectReducedMotion: n,
  getRootElement: e
}) {
  to(() => {
    var t;
    n && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [n]);
}
ly();
function Du({
  theme: n,
  children: e,
  getStyleNonce: t,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: a = !0,
  cssVariablesSelector: s = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = Zm(),
  defaultColorScheme: u = "light",
  getRootElement: f = () => document.documentElement,
  cssVariablesResolver: d,
  forceColorScheme: h,
  stylesTransform: p
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: b } = uy({
    defaultColorScheme: u,
    forceColorScheme: h,
    manager: l,
    getRootElement: f
  });
  return dy({
    respectReducedMotion: (n == null ? void 0 : n.respectReducedMotion) || !1,
    getRootElement: f
  }), /* @__PURE__ */ y.jsx(
    Nu.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: m,
        clearColorScheme: b,
        getRootElement: f,
        classNamesPrefix: c,
        getStyleNonce: t,
        cssVariablesResolver: d,
        cssVariablesSelector: s,
        withStaticClasses: r,
        stylesTransform: p
      },
      children: /* @__PURE__ */ y.jsxs(Mu, { theme: n, children: [
        a && /* @__PURE__ */ y.jsx(
          xu,
          {
            cssVariablesSelector: s,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ y.jsx(ry, {}),
        e
      ] })
    }
  );
}
Du.displayName = "@mantine/core/MantineProvider";
function Lu({
  classNames: n,
  styles: e,
  props: t,
  stylesCtx: r
}) {
  const o = $t();
  return {
    resolvedClassNames: ri({
      theme: o,
      classNames: n,
      props: t,
      stylesCtx: r || void 0
    }),
    resolvedStyles: jo({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: r || void 0
    })
  };
}
const fy = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function hy({ theme: n, options: e, unstyled: t }) {
  return zt(
    (e == null ? void 0 : e.focusable) && !t && (n.focusClassName || fy[n.focusRing]),
    (e == null ? void 0 : e.active) && !t && n.activeClassName
  );
}
function py({
  selector: n,
  stylesCtx: e,
  options: t,
  props: r,
  theme: o
}) {
  return ri({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || r,
    stylesCtx: e
  })[n];
}
function Wc({
  selector: n,
  stylesCtx: e,
  theme: t,
  classNames: r,
  props: o
}) {
  return ri({ theme: t, classNames: r, props: o, stylesCtx: e })[n];
}
function gy({ rootSelector: n, selector: e, className: t }) {
  return n === e ? t : void 0;
}
function my({ selector: n, classes: e, unstyled: t }) {
  return t ? void 0 : e[n];
}
function yy({
  themeName: n,
  classNamesPrefix: e,
  selector: t,
  withStaticClass: r
}) {
  return r === !1 ? [] : n.map((o) => `${e}-${o}-${t}`);
}
function vy({
  themeName: n,
  theme: e,
  selector: t,
  props: r,
  stylesCtx: o
}) {
  return n.map(
    (i) => {
      var a, s;
      return (s = ri({
        theme: e,
        classNames: (a = e.components[i]) == null ? void 0 : a.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : s[t];
    }
  );
}
function by({
  options: n,
  classes: e,
  selector: t,
  unstyled: r
}) {
  return n != null && n.variant && !r ? e[`${t}--${n.variant}`] : void 0;
}
function Cy({
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
  stylesCtx: f,
  withStaticClasses: d,
  headless: h,
  transformedStyles: p
}) {
  return zt(
    hy({ theme: n, options: e, unstyled: s || h }),
    vy({ theme: n, themeName: t, selector: r, props: u, stylesCtx: f }),
    by({ options: e, classes: a, selector: r, unstyled: s }),
    Wc({ selector: r, stylesCtx: f, theme: n, classNames: i, props: u }),
    Wc({ selector: r, stylesCtx: f, theme: n, classNames: p, props: u }),
    py({ selector: r, stylesCtx: f, options: e, props: u, theme: n }),
    gy({ rootSelector: l, selector: r, className: c }),
    my({ selector: r, classes: a, unstyled: s || h }),
    d && !h && yy({
      themeName: t,
      classNamesPrefix: o,
      selector: r,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function wy({
  theme: n,
  themeName: e,
  props: t,
  stylesCtx: r,
  selector: o
}) {
  return e.map(
    (i) => {
      var a;
      return jo({
        theme: n,
        styles: (a = n.components[i]) == null ? void 0 : a.styles,
        props: t,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, a) => ({ ...i, ...a }), {});
}
function ma({ style: n, theme: e }) {
  return Array.isArray(n) ? [...n].reduce(
    (t, r) => ({ ...t, ...ma({ style: r, theme: e }) }),
    {}
  ) : typeof n == "function" ? n(e) : n ?? {};
}
function Sy(n) {
  return n.reduce((e, t) => (t && Object.keys(t).forEach((r) => {
    e[r] = { ...e[r], ...$a(t[r]) };
  }), e), {});
}
function Ey({
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
  return (c = Sy([
    s ? {} : e == null ? void 0 : e(t, r, o),
    ...a.map((l) => {
      var u, f, d;
      return (d = (f = (u = t.components) == null ? void 0 : u[l]) == null ? void 0 : f.vars) == null ? void 0 : d.call(f, t, r, o);
    }),
    n == null ? void 0 : n(t, r, o)
  ])) == null ? void 0 : c[i];
}
function Iy({
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
  headless: f,
  withStylesTransform: d
}) {
  return {
    ...!d && wy({ theme: n, themeName: e, props: o, stylesCtx: i, selector: t }),
    ...!d && jo({ theme: n, styles: s, props: o, stylesCtx: i })[t],
    ...!d && jo({ theme: n, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[t],
    ...Ey({ theme: n, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: t, themeName: e, headless: f }),
    ...a === t ? ma({ style: c, theme: n }) : null,
    ...ma({ style: r == null ? void 0 : r.style, theme: n })
  };
}
function Ty({ props: n, stylesCtx: e, themeName: t }) {
  var a;
  const r = $t(), o = (a = Km()) == null ? void 0 : a();
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
function be({
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
  varsResolver: f
}) {
  const d = $t(), h = Hm(), p = Bm(), g = zm(), m = (Array.isArray(n) ? n : [n]).filter((v) => v), { withStylesTransform: b, getTransformedStyles: C } = Ty({
    props: t,
    stylesCtx: r,
    themeName: m
  });
  return (v, w) => ({
    className: Cy({
      theme: d,
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
    style: Iy({
      theme: d,
      themeName: m,
      selector: v,
      options: w,
      props: t,
      stylesCtx: r,
      rootSelector: a,
      styles: l,
      style: i,
      vars: u,
      varsResolver: f,
      headless: g,
      withStylesTransform: b
    })
  });
}
function Fu(n, e) {
  return typeof n == "boolean" ? n : e.autoContrast;
}
function J(n, e, t) {
  var a;
  const r = $t(), o = (a = r.components[n]) == null ? void 0 : a.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...e, ...i, ...$a(t) };
}
function Oi(n) {
  return Ft(n).reduce(
    (e, t) => n[t] !== void 0 ? `${e}${um(t)}:${n[t]};` : e,
    ""
  ).trim();
}
function _y({ selector: n, styles: e, media: t, container: r }) {
  const o = e ? Oi(e) : "", i = Array.isArray(t) ? t.map((s) => `@media${s.query}{${n}{${Oi(s.styles)}}}`) : [], a = Array.isArray(r) ? r.map(
    (s) => `@container ${s.query}{${n}{${Oi(s.styles)}}}`
  ) : [];
  return `${o ? `${n}{${o}}` : ""}${i.join("")}${a.join("")}`.trim();
}
function ky(n) {
  const e = Va();
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: _y(n) }
    }
  );
}
function oi(n) {
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
    px: f,
    py: d,
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
    ff: _,
    fz: T,
    fw: M,
    lts: B,
    ta: z,
    lh: V,
    fs: Z,
    tt: D,
    td: j,
    w: R,
    miw: A,
    maw: P,
    h: $,
    mih: H,
    mah: re,
    bgsz: fe,
    bgp: _e,
    bgr: Be,
    bga: pe,
    pos: Oe,
    top: ze,
    left: It,
    bottom: Re,
    right: Tt,
    inset: En,
    display: cn,
    flex: _t,
    hiddenFrom: ke,
    visibleFrom: Kt,
    lightHidden: qn,
    darkHidden: We,
    sx: In,
    ...Vn
  } = n;
  return { styleProps: $a({
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
    px: f,
    py: d,
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
    ff: _,
    fz: T,
    fw: M,
    lts: B,
    ta: z,
    lh: V,
    fs: Z,
    tt: D,
    td: j,
    w: R,
    miw: A,
    maw: P,
    h: $,
    mih: H,
    mah: re,
    bgsz: fe,
    bgp: _e,
    bgr: Be,
    bga: pe,
    pos: Oe,
    top: ze,
    left: It,
    bottom: Re,
    right: Tt,
    inset: En,
    display: cn,
    flex: _t,
    hiddenFrom: ke,
    visibleFrom: Kt,
    lightHidden: qn,
    darkHidden: We,
    sx: In
  }), rest: Vn };
}
const Ay = {
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
function Ja(n, e) {
  const t = zn({ color: n, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function Ry(n, e) {
  const t = zn({ color: n, theme: e });
  return t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : Ja(n, e);
}
function Py(n, e) {
  if (typeof n == "number")
    return N(n);
  if (typeof n == "string") {
    const [t, r, ...o] = n.split(" ").filter((a) => a.trim() !== "");
    let i = `${N(t)}`;
    return r && (i += ` ${r}`), o.length > 0 && (i += ` ${Ja(o.join(" "), e)}`), i.trim();
  }
  return n;
}
const Yc = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Ny(n) {
  return typeof n == "string" && n in Yc ? Yc[n] : n;
}
const My = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Oy(n, e) {
  return typeof n == "string" && n in e.fontSizes ? `var(--mantine-font-size-${n})` : typeof n == "string" && My.includes(n) ? `var(--mantine-${n}-font-size)` : typeof n == "number" || typeof n == "string" ? N(n) : n;
}
function xy(n) {
  return n;
}
const Dy = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Ly(n, e) {
  return typeof n == "string" && n in e.lineHeights ? `var(--mantine-line-height-${n})` : typeof n == "string" && Dy.includes(n) ? `var(--mantine-${n}-line-height)` : n;
}
function Fy(n) {
  return typeof n == "number" ? N(n) : n;
}
function jy(n, e) {
  if (typeof n == "number")
    return N(n);
  if (typeof n == "string") {
    const t = n.replace("-", "");
    if (!(t in e.spacing))
      return N(n);
    const r = `--mantine-spacing-${t}`;
    return n.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return n;
}
const xi = {
  color: Ja,
  textColor: Ry,
  fontSize: Oy,
  spacing: jy,
  identity: xy,
  size: Fy,
  lineHeight: Ly,
  fontFamily: Ny,
  border: Py
};
function Qc(n) {
  return n.replace("(min-width: ", "").replace("em)", "");
}
function Uy({
  media: n,
  ...e
}) {
  const r = Object.keys(n).sort((o, i) => Number(Qc(o)) - Number(Qc(i))).map((o) => ({ query: o, styles: n[o] }));
  return { ...e, media: r };
}
function Hy(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const e = Object.keys(n);
  return !(e.length === 1 && e[0] === "base");
}
function By(n) {
  return typeof n == "object" && n !== null ? "base" in n ? n.base : void 0 : n;
}
function zy(n) {
  return typeof n == "object" && n !== null ? Ft(n).filter((e) => e !== "base") : [];
}
function $y(n, e) {
  return typeof n == "object" && n !== null && e in n ? n[e] : n;
}
function Ky({
  styleProps: n,
  data: e,
  theme: t
}) {
  return Uy(
    Ft(n).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return r;
        const i = e[o], a = Array.isArray(i.property) ? i.property : [i.property], s = By(n[o]);
        if (!Hy(n[o]))
          return a.forEach((l) => {
            r.inlineStyles[l] = xi[i.type](s, t);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = zy(n[o]);
        return a.forEach((l) => {
          s && (r.styles[l] = xi[i.type](s, t)), c.forEach((u) => {
            const f = `(min-width: ${t.breakpoints[u]})`;
            r.media[f] = {
              ...r.media[f],
              [l]: xi[i.type](
                $y(n[o], u),
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
function qy() {
  return `__m__-${Gl().replace(/:/g, "")}`;
}
function Xa(n, e) {
  return Array.isArray(n) ? [...n].reduce(
    (t, r) => ({ ...t, ...Xa(r, e) }),
    {}
  ) : typeof n == "function" ? n(e) : n ?? {};
}
function ju(n) {
  return n.startsWith("data-") ? n : `data-${n}`;
}
function Vy(n) {
  return Object.keys(n).reduce((e, t) => {
    const r = n[t];
    return r === void 0 || r === "" || r === !1 || r === null || (e[ju(t)] = n[t]), e;
  }, {});
}
function Uu(n) {
  return n ? typeof n == "string" ? { [ju(n)]: !0 } : Array.isArray(n) ? [...n].reduce(
    (e, t) => ({ ...e, ...Uu(t) }),
    {}
  ) : Vy(n) : null;
}
function ya(n, e) {
  return Array.isArray(n) ? [...n].reduce(
    (t, r) => ({ ...t, ...ya(r, e) }),
    {}
  ) : typeof n == "function" ? n(e) : n ?? {};
}
function Gy({
  theme: n,
  style: e,
  vars: t,
  styleProps: r
}) {
  const o = ya(e, n), i = ya(t, n);
  return { ...o, ...i, ...r };
}
const Hu = Ce(
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
    renderRoot: f,
    __size: d,
    ...h
  }, p) => {
    var T;
    const g = $t(), m = n || "div", { styleProps: b, rest: C } = oi(h), v = $m(), w = (T = v == null ? void 0 : v()) == null ? void 0 : T(b.sx), S = qy(), E = Ky({
      styleProps: b,
      theme: g,
      data: Ay
    }), _ = {
      ref: p,
      style: Gy({
        theme: g,
        style: e,
        vars: t,
        styleProps: E.inlineStyles
      }),
      className: zt(r, w, {
        [S]: E.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${s}`]: s,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Cu(a) ? void 0 : a || void 0,
      size: d,
      ...Uu(i),
      ...C
    };
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      E.hasResponsiveStyles && /* @__PURE__ */ y.jsx(
        ky,
        {
          selector: `.${S}`,
          styles: E.styles,
          media: E.media
        }
      ),
      typeof f == "function" ? f(_) : /* @__PURE__ */ y.jsx(m, { ..._ })
    ] });
  }
);
Hu.displayName = "@mantine/core/Box";
const ne = Hu;
function Bu(n) {
  return n;
}
function le(n) {
  const e = Ce(n);
  return e.extend = Bu, e.withProps = (t) => {
    const r = Ce((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return r.extend = e.extend, r.displayName = `WithProps(${e.displayName})`, r;
  }, e;
}
function $n(n) {
  const e = Ce(n);
  return e.withProps = (t) => {
    const r = Ce((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return r.extend = e.extend, r.displayName = `WithProps(${e.displayName})`, r;
  }, e.extend = Bu, e;
}
const Wy = Cn({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function ii() {
  return nn(Wy);
}
function Yy(n) {
  if (!n || typeof n == "string")
    return 0;
  const e = n / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Di(n) {
  return n != null && n.current ? n.current.scrollHeight : "auto";
}
const kr = typeof window < "u" && window.requestAnimationFrame;
function Qy({
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
  }, [s, c] = te(r ? {} : a), l = (p) => {
    $f(() => c(p));
  }, u = (p) => {
    l((g) => ({ ...g, ...p }));
  };
  function f(p) {
    const g = n || Yy(p);
    return {
      transition: `height ${g}ms ${e}, opacity ${g}ms ${e}`
    };
  }
  mn(() => {
    typeof kr == "function" && kr(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), kr(() => {
        const p = Di(o);
        u({ ...f(p), height: p });
      });
    } : () => {
      const p = Di(o);
      u({ ...f(p), willChange: "height", height: p }), kr(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const d = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (r) {
        const g = Di(o);
        g === s.height ? l({}) : u({ height: g }), t();
      } else
        s.height === i && (l(a), t());
  };
  function h({ style: p = {}, refKey: g = "ref", ...m } = {}) {
    const b = m[g];
    return {
      "aria-hidden": !r,
      ...m,
      [g]: Au(o, b),
      onTransitionEnd: d,
      style: { boxSizing: "border-box", ...p, ...s }
    };
  }
  return h;
}
const Jy = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, zu = le((n, e) => {
  const {
    children: t,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: a,
    onTransitionEnd: s,
    animateOpacity: c,
    ...l
  } = J("Collapse", Jy, n), u = $t(), f = Ru(), h = (u.respectReducedMotion ? f : !1) ? 0 : o, p = Qy({
    opened: r,
    transitionDuration: h,
    transitionTimingFunction: i,
    onTransitionEnd: s
  });
  return h === 0 ? r ? /* @__PURE__ */ y.jsx(ne, { ...l, children: t }) : null : /* @__PURE__ */ y.jsx(
    ne,
    {
      ...p({
        style: {
          opacity: r || !c ? 1 : 0,
          transition: c ? `opacity ${h}ms ${i}` : "none",
          ...Xa(a, u)
        },
        ref: e,
        ...l
      }),
      children: t
    }
  );
});
zu.displayName = "@mantine/core/Collapse";
const [Xy, wt] = yr(
  "ScrollArea.Root component was not found in tree"
);
function fr(n, e) {
  const t = Rn(e);
  to(() => {
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
const Zy = Ce((n, e) => {
  const { style: t, ...r } = n, o = wt(), [i, a] = te(0), [s, c] = te(0), l = !!(i && s);
  return fr(o.scrollbarX, () => {
    var f;
    const u = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), fr(o.scrollbarY, () => {
    var f;
    const u = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(u), a(u);
  }), l ? /* @__PURE__ */ y.jsx("div", { ...r, ref: e, style: { ...t, width: i, height: s } }) : null;
}), ev = Ce((n, e) => {
  const t = wt(), r = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && r ? /* @__PURE__ */ y.jsx(Zy, { ...n, ref: e }) : null;
}), tv = {
  scrollHideDelay: 1e3,
  type: "hover"
}, $u = Ce((n, e) => {
  const t = J("ScrollAreaRoot", tv, n), { type: r, scrollHideDelay: o, scrollbars: i, ...a } = t, [s, c] = te(null), [l, u] = te(null), [f, d] = te(null), [h, p] = te(null), [g, m] = te(null), [b, C] = te(0), [v, w] = te(0), [S, E] = te(!1), [_, T] = te(!1), M = at(e, (B) => c(B));
  return /* @__PURE__ */ y.jsx(
    Xy,
    {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: f,
        onContentChange: d,
        scrollbarX: h,
        onScrollbarXChange: p,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: E,
        scrollbarY: g,
        onScrollbarYChange: m,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: C,
        onCornerHeightChange: w
      },
      children: /* @__PURE__ */ y.jsx(
        ne,
        {
          ...a,
          ref: M,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${b}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${v}px`
          }
        }
      )
    }
  );
});
$u.displayName = "@mantine/core/ScrollAreaRoot";
function Ku(n, e) {
  const t = n / e;
  return Number.isNaN(t) ? 0 : t;
}
function ai(n) {
  const e = Ku(n.viewport, n.content), t = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, r = (n.scrollbar.size - t) * e;
  return Math.max(r, 18);
}
function qu(n, e) {
  return (t) => {
    if (n[0] === n[1] || e[0] === e[1])
      return e[0];
    const r = (e[1] - e[0]) / (n[1] - n[0]);
    return e[0] + r * (t - n[0]);
  };
}
function nv(n, [e, t]) {
  return Math.min(t, Math.max(e, n));
}
function Jc(n, e, t = "ltr") {
  const r = ai(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, a = e.content - e.viewport, s = i - r, c = t === "ltr" ? [0, a] : [a * -1, 0], l = nv(n, c);
  return qu([0, a], [0, s])(l);
}
function rv(n, e, t, r = "ltr") {
  const o = ai(t), i = o / 2, a = e || i, s = o - a, c = t.scrollbar.paddingStart + a, l = t.scrollbar.size - t.scrollbar.paddingEnd - s, u = t.content - t.viewport, f = r === "ltr" ? [0, u] : [u * -1, 0];
  return qu([c, l], f)(n);
}
function Vu(n, e) {
  return n > 0 && n < e;
}
function Uo(n) {
  return n ? parseInt(n, 10) : 0;
}
function xn(n, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (r) => {
    n == null || n(r), (t === !1 || !r.defaultPrevented) && (e == null || e(r));
  };
}
const [ov, Gu] = yr(
  "ScrollAreaScrollbar was not found in tree"
), Wu = Ce((n, e) => {
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
    ...f
  } = n, d = wt(), [h, p] = te(null), g = at(e, (T) => p(T)), m = ue(null), b = ue(""), { viewport: C } = d, v = t.content - t.viewport, w = Rn(l), S = Rn(s), E = ni(u, 10), _ = (T) => {
    if (m.current) {
      const M = T.clientX - m.current.left, B = T.clientY - m.current.top;
      c({ x: M, y: B });
    }
  };
  return X(() => {
    const T = (M) => {
      const B = M.target;
      (h == null ? void 0 : h.contains(B)) && w(M, v);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [C, h, v, w]), X(S, [t, S]), fr(h, E), fr(d.content, E), /* @__PURE__ */ y.jsx(
    ov,
    {
      value: {
        scrollbar: h,
        hasThumb: r,
        onThumbChange: Rn(o),
        onThumbPointerUp: Rn(i),
        onThumbPositionChange: S,
        onThumbPointerDown: Rn(a)
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...f,
          ref: g,
          style: { position: "absolute", ...f.style },
          onPointerDown: xn(n.onPointerDown, (T) => {
            T.preventDefault();
            const M = 0;
            T.button === M && (T.target.setPointerCapture(T.pointerId), m.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", _(T));
          }),
          onPointerMove: xn(n.onPointerMove, _),
          onPointerUp: xn(n.onPointerUp, (T) => {
            T.preventDefault();
            const M = T.target;
            M.hasPointerCapture(T.pointerId) && M.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = b.current, document.body.style.pointerEvents = "auto", m.current = null;
          })
        }
      )
    }
  );
}), iv = Ce(
  (n, e) => {
    const { sizes: t, onSizesChange: r, style: o, ...i } = n, a = wt(), [s, c] = te(), l = ue(null), u = at(e, l, a.onScrollbarXChange);
    return X(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ y.jsx(
      Wu,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${ai(t)}px`
        },
        onThumbPointerDown: (f) => n.onThumbPointerDown(f.x),
        onDragScroll: (f) => n.onDragScroll(f.x),
        onWheelScroll: (f, d) => {
          if (a.viewport) {
            const h = a.viewport.scrollLeft + f.deltaX;
            n.onWheelScroll(h), Vu(h, d) && f.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && r({
            content: a.viewport.scrollWidth,
            viewport: a.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: Uo(s.paddingLeft),
              paddingEnd: Uo(s.paddingRight)
            }
          });
        }
      }
    );
  }
), av = Ce(
  (n, e) => {
    const { sizes: t, onSizesChange: r, style: o, ...i } = n, a = wt(), [s, c] = te(), l = ue(null), u = at(e, l, a.onScrollbarYChange);
    return X(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ y.jsx(
      Wu,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: t,
        style: {
          "--sa-thumb-height": `${ai(t)}px`,
          ...o
        },
        onThumbPointerDown: (f) => n.onThumbPointerDown(f.y),
        onDragScroll: (f) => n.onDragScroll(f.y),
        onWheelScroll: (f, d) => {
          if (a.viewport) {
            const h = a.viewport.scrollTop + f.deltaY;
            n.onWheelScroll(h), Vu(h, d) && f.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && r({
            content: a.viewport.scrollHeight,
            viewport: a.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: Uo(s.paddingTop),
              paddingEnd: Uo(s.paddingBottom)
            }
          });
        }
      }
    );
  }
), Za = Ce((n, e) => {
  const { orientation: t = "vertical", ...r } = n, { dir: o } = ii(), i = wt(), a = ue(null), s = ue(0), [c, l] = te({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Ku(c.viewport, c.content), f = {
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
  }, d = (h, p) => rv(h, s.current, c, p);
  return t === "horizontal" ? /* @__PURE__ */ y.jsx(
    iv,
    {
      ...f,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const h = i.viewport.scrollLeft, p = Jc(h, c, o);
          a.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        i.viewport && (i.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        i.viewport && (i.viewport.scrollLeft = d(h, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ y.jsx(
    av,
    {
      ...f,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const h = i.viewport.scrollTop, p = Jc(h, c);
          c.scrollbar.size === 0 ? a.current.style.opacity = "0" : a.current.style.opacity = "1", a.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        i.viewport && (i.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        i.viewport && (i.viewport.scrollTop = d(h));
      }
    }
  ) : null;
}), Yu = Ce(
  (n, e) => {
    const t = wt(), { forceMount: r, ...o } = n, [i, a] = te(!1), s = n.orientation === "horizontal", c = ni(() => {
      if (t.viewport) {
        const l = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
        a(s ? l : u);
      }
    }, 10);
    return fr(t.viewport, c), fr(t.content, c), r || i ? /* @__PURE__ */ y.jsx(
      Za,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), sv = Ce(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = wt(), [i, a] = te(!1);
    return X(() => {
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
      Yu,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: e
      }
    ) : null;
  }
), cv = Ce(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = wt(), i = n.orientation === "horizontal", [a, s] = te("hidden"), c = ni(() => s("idle"), 100);
    return X(() => {
      if (a === "idle") {
        const l = window.setTimeout(() => s("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [a, o.scrollHideDelay]), X(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let f = l[u];
        const d = () => {
          const h = l[u];
          f !== h && (s("scrolling"), c()), f = h;
        };
        return l.addEventListener("scroll", d), () => l.removeEventListener("scroll", d);
      }
    }, [o.viewport, i, c]), t || a !== "hidden" ? /* @__PURE__ */ y.jsx(
      Za,
      {
        "data-state": a === "hidden" ? "hidden" : "visible",
        ...r,
        ref: e,
        onPointerEnter: xn(n.onPointerEnter, () => s("interacting")),
        onPointerLeave: xn(n.onPointerLeave, () => s("idle"))
      }
    ) : null;
  }
), Xc = Ce(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = wt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = n.orientation === "horizontal";
    return X(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ y.jsx(sv, { ...r, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ y.jsx(cv, { ...r, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ y.jsx(Yu, { ...r, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ y.jsx(Za, { ...r, ref: e }) : null;
  }
);
function lv(n, e = () => {
}) {
  let t = { left: n.scrollLeft, top: n.scrollTop }, r = 0;
  return function o() {
    const i = { left: n.scrollLeft, top: n.scrollTop }, a = t.left !== i.left, s = t.top !== i.top;
    (a || s) && e(), t = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const uv = Ce((n, e) => {
  const { style: t, ...r } = n, o = wt(), i = Gu(), { onThumbPositionChange: a } = i, s = at(e, (u) => i.onThumbChange(u)), c = ue(), l = ni(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return X(() => {
    const { viewport: u } = o;
    if (u) {
      const f = () => {
        if (l(), !c.current) {
          const d = lv(u, a);
          c.current = d, a();
        }
      };
      return a(), u.addEventListener("scroll", f), () => u.removeEventListener("scroll", f);
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
      onPointerDownCapture: xn(n.onPointerDownCapture, (u) => {
        const d = u.target.getBoundingClientRect(), h = u.clientX - d.left, p = u.clientY - d.top;
        i.onThumbPointerDown({ x: h, y: p });
      }),
      onPointerUp: xn(n.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Zc = Ce(
  (n, e) => {
    const { forceMount: t, ...r } = n, o = Gu();
    return t || o.hasThumb ? /* @__PURE__ */ y.jsx(uv, { ref: e, ...r }) : null;
  }
), Qu = Ce(
  ({ children: n, style: e, ...t }, r) => {
    const o = wt(), i = at(r, o.onViewportChange);
    return /* @__PURE__ */ y.jsx(
      ne,
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
Qu.displayName = "@mantine/core/ScrollAreaViewport";
var es = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const Ju = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, dv = (n, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": N(e)
  }
}), no = le((n, e) => {
  const t = J("ScrollArea", Ju, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    scrollbarSize: c,
    vars: l,
    type: u,
    scrollHideDelay: f,
    viewportProps: d,
    viewportRef: h,
    onScrollPositionChange: p,
    children: g,
    offsetScrollbars: m,
    scrollbars: b,
    ...C
  } = t, [v, w] = te(!1), S = be({
    name: "ScrollArea",
    props: t,
    classes: es,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: dv
  });
  return /* @__PURE__ */ y.jsxs(
    $u,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: f,
      ref: e,
      scrollbars: b,
      ...S("root"),
      ...C,
      children: [
        /* @__PURE__ */ y.jsx(
          Qu,
          {
            ...d,
            ...S("viewport", { style: d == null ? void 0 : d.style }),
            ref: h,
            "data-offset-scrollbars": m === !0 ? "xy" : m || void 0,
            "data-scrollbars": b || void 0,
            onScroll: (E) => {
              var _;
              (_ = d == null ? void 0 : d.onScroll) == null || _.call(d, E), p == null || p({ x: E.currentTarget.scrollLeft, y: E.currentTarget.scrollTop });
            },
            children: g
          }
        ),
        (b === "xy" || b === "x") && /* @__PURE__ */ y.jsx(
          Xc,
          {
            ...S("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Zc, { ...S("thumb") })
          }
        ),
        (b === "xy" || b === "y") && /* @__PURE__ */ y.jsx(
          Xc,
          {
            ...S("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Zc, { ...S("thumb") })
          }
        ),
        /* @__PURE__ */ y.jsx(
          ev,
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
no.displayName = "@mantine/core/ScrollArea";
const ts = le((n, e) => {
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
    onScrollPositionChange: f,
    unstyled: d,
    variant: h,
    viewportProps: p,
    scrollbars: g,
    style: m,
    vars: b,
    ...C
  } = J("ScrollAreaAutosize", Ju, n);
  return /* @__PURE__ */ y.jsx(ne, { ...C, ref: e, style: [{ display: "flex", overflow: "auto" }, m], children: /* @__PURE__ */ y.jsx(ne, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ y.jsx(
    no,
    {
      classNames: r,
      styles: o,
      scrollHideDelay: a,
      scrollbarSize: i,
      type: s,
      dir: c,
      offsetScrollbars: l,
      viewportRef: u,
      onScrollPositionChange: f,
      unstyled: d,
      variant: h,
      viewportProps: p,
      vars: b,
      scrollbars: g,
      children: t
    }
  ) }) });
});
no.classes = es;
ts.displayName = "@mantine/core/ScrollAreaAutosize";
ts.classes = es;
no.Autosize = ts;
var Xu = { root: "m_87cf2631" };
const fv = {
  __staticSelector: "UnstyledButton"
}, vr = $n(
  (n, e) => {
    const t = J("UnstyledButton", fv, n), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: a,
      classNames: s,
      styles: c,
      style: l,
      ...u
    } = t, f = be({
      name: i,
      props: t,
      classes: Xu,
      className: r,
      style: l,
      classNames: s,
      styles: c,
      unstyled: a
    });
    return /* @__PURE__ */ y.jsx(
      ne,
      {
        ...f("root", { focusable: !0 }),
        component: o,
        ref: e,
        type: o === "button" ? "button" : void 0,
        ...u
      }
    );
  }
);
vr.classes = Xu;
vr.displayName = "@mantine/core/UnstyledButton";
var Zu = { root: "m_515a97f8" };
const hv = {}, ns = le((n, e) => {
  const t = J("VisuallyHidden", hv, n), { classNames: r, className: o, style: i, styles: a, unstyled: s, vars: c, ...l } = t, u = be({
    name: "VisuallyHidden",
    classes: Zu,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s
  });
  return /* @__PURE__ */ y.jsx(ne, { component: "span", ref: e, ...u("root"), ...l });
});
ns.classes = Zu;
ns.displayName = "@mantine/core/VisuallyHidden";
var ed = { root: "m_1b7284a3" };
const pv = {}, gv = (n, { radius: e, shadow: t }) => ({
  root: {
    "--paper-radius": e === void 0 ? void 0 : Ct(e),
    "--paper-shadow": Su(t)
  }
}), si = $n((n, e) => {
  const t = J("Paper", pv, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    withBorder: c,
    vars: l,
    radius: u,
    shadow: f,
    variant: d,
    mod: h,
    ...p
  } = t, g = be({
    name: "Paper",
    props: t,
    classes: ed,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: gv
  });
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ref: e,
      mod: [{ "data-with-border": c }, h],
      ...g("root"),
      variant: d,
      ...p
    }
  );
});
si.classes = ed;
si.displayName = "@mantine/core/Paper";
function br(n) {
  return td(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function nt(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function on(n) {
  var e;
  return (e = (td(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function td(n) {
  return n instanceof Node || n instanceof nt(n).Node;
}
function Ee(n) {
  return n instanceof Element || n instanceof nt(n).Element;
}
function ft(n) {
  return n instanceof HTMLElement || n instanceof nt(n).HTMLElement;
}
function va(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof nt(n).ShadowRoot;
}
function ro(n) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: r,
    display: o
  } = bt(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + t) && !["inline", "contents"].includes(o);
}
function mv(n) {
  return ["table", "td", "th"].includes(br(n));
}
function ci(n) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return n.matches(e);
    } catch {
      return !1;
    }
  });
}
function rs(n) {
  const e = os(), t = bt(n);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function yv(n) {
  let e = Xt(n);
  for (; ft(e) && !yn(e); ) {
    if (ci(e))
      return null;
    if (rs(e))
      return e;
    e = Xt(e);
  }
  return null;
}
function os() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yn(n) {
  return ["html", "body", "#document"].includes(br(n));
}
function bt(n) {
  return nt(n).getComputedStyle(n);
}
function li(n) {
  return Ee(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Xt(n) {
  if (br(n) === "html")
    return n;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    va(n) && n.host || // Fallback.
    on(n)
  );
  return va(e) ? e.host : e;
}
function nd(n) {
  const e = Xt(n);
  return yn(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : ft(e) && ro(e) ? e : nd(e);
}
function Jt(n, e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = nd(n), i = o === ((r = n.ownerDocument) == null ? void 0 : r.body), a = nt(o);
  return i ? e.concat(a, a.visualViewport || [], ro(o) ? o : [], a.frameElement && t ? Jt(a.frameElement) : []) : e.concat(o, Jt(o, [], t));
}
function el(n) {
  let e = n.activeElement;
  for (; ((t = e) == null || (t = t.shadowRoot) == null ? void 0 : t.activeElement) != null; ) {
    var t;
    e = e.shadowRoot.activeElement;
  }
  return e;
}
function Vr(n, e) {
  if (!n || !e)
    return !1;
  const t = e.getRootNode == null ? void 0 : e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && va(t)) {
    let r = e;
    for (; r; ) {
      if (n === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function rd() {
  const n = navigator.userAgentData;
  return n != null && n.platform ? n.platform : navigator.platform;
}
function od() {
  const n = navigator.userAgentData;
  return n && Array.isArray(n.brands) ? n.brands.map((e) => {
    let {
      brand: t,
      version: r
    } = e;
    return t + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function vv(n) {
  return wv() ? !1 : !tl() && n.width === 0 && n.height === 0 || tl() && n.width === 1 && n.height === 1 && n.pressure === 0 && n.detail === 0 && n.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  n.width < 1 && n.height < 1 && n.pressure === 0 && n.detail === 0 && n.pointerType === "touch";
}
function bv() {
  return /apple/i.test(navigator.vendor);
}
function tl() {
  const n = /android/i;
  return n.test(rd()) || n.test(od());
}
function Cv() {
  return rd().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function wv() {
  return od().includes("jsdom/");
}
function ba(n, e) {
  const t = ["mouse", "pen"];
  return e || t.push("", void 0), t.includes(n);
}
function Sv(n) {
  return "nativeEvent" in n;
}
function Ev(n) {
  return n.matches("html,body");
}
function Nn(n) {
  return (n == null ? void 0 : n.ownerDocument) || document;
}
function Li(n, e) {
  if (e == null)
    return !1;
  if ("composedPath" in n)
    return n.composedPath().includes(e);
  const t = n;
  return t.target != null && e.contains(t.target);
}
function Zn(n) {
  return "composedPath" in n ? n.composedPath()[0] : n.target;
}
const Iv = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Tv(n) {
  return ft(n) && n.matches(Iv);
}
const lt = Math.min, qe = Math.max, Ho = Math.round, go = Math.floor, vn = (n) => ({
  x: n,
  y: n
}), _v = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kv = {
  start: "end",
  end: "start"
};
function Ca(n, e, t) {
  return qe(n, lt(e, t));
}
function Zt(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Mt(n) {
  return n.split("-")[0];
}
function Cr(n) {
  return n.split("-")[1];
}
function is(n) {
  return n === "x" ? "y" : "x";
}
function as(n) {
  return n === "y" ? "height" : "width";
}
function en(n) {
  return ["top", "bottom"].includes(Mt(n)) ? "y" : "x";
}
function ss(n) {
  return is(en(n));
}
function Av(n, e, t) {
  t === void 0 && (t = !1);
  const r = Cr(n), o = ss(n), i = as(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (a = Bo(a)), [a, Bo(a)];
}
function Rv(n) {
  const e = Bo(n);
  return [wa(n), e, wa(e)];
}
function wa(n) {
  return n.replace(/start|end/g, (e) => kv[e]);
}
function Pv(n, e, t) {
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
function Nv(n, e, t, r) {
  const o = Cr(n);
  let i = Pv(Mt(n), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), e && (i = i.concat(i.map(wa)))), i;
}
function Bo(n) {
  return n.replace(/left|right|bottom|top/g, (e) => _v[e]);
}
function Mv(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function cs(n) {
  return typeof n != "number" ? Mv(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function hr(n) {
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
function nl(n, e, t) {
  let {
    reference: r,
    floating: o
  } = n;
  const i = en(e), a = ss(e), s = as(a), c = Mt(e), l = i === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[s] / 2 - o[s] / 2;
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
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Cr(e)) {
    case "start":
      h[a] -= d * (t && l ? -1 : 1);
      break;
    case "end":
      h[a] += d * (t && l ? -1 : 1);
      break;
  }
  return h;
}
const Ov = async (n, e, t) => {
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
    y: f
  } = nl(l, r, c), d = r, h = {}, p = 0;
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
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: a,
      elements: {
        reference: n,
        floating: e
      }
    });
    u = C ?? u, f = v ?? f, h = {
      ...h,
      [m]: {
        ...h[m],
        ...w
      }
    }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (l = S.rects === !0 ? await a.getElementRects({
      reference: n,
      floating: e,
      strategy: o
    }) : S.rects), {
      x: u,
      y: f
    } = nl(l, d, c)), g = -1);
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: h
  };
};
async function ls(n, e) {
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
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = Zt(e, n), p = cs(h), m = s[d ? f === "floating" ? "reference" : "floating" : f], b = hr(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), C = f === "floating" ? {
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
  }, S = hr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const xv = (n) => ({
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
    } = Zt(n, e) || {};
    if (l == null)
      return {};
    const f = cs(u), d = {
      x: t,
      y: r
    }, h = ss(o), p = as(h), g = await a.getDimensions(l), m = h === "y", b = m ? "top" : "left", C = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[h] - d[h] - i.floating[p], S = d[h] - i.reference[h], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let _ = E ? E[v] : 0;
    (!_ || !await (a.isElement == null ? void 0 : a.isElement(E))) && (_ = s.floating[v] || i.floating[p]);
    const T = w / 2 - S / 2, M = _ / 2 - g[p] / 2 - 1, B = lt(f[b], M), z = lt(f[C], M), V = B, Z = _ - g[p] - z, D = _ / 2 - g[p] / 2 + T, j = Ca(V, D, Z), R = !c.arrow && Cr(o) != null && D !== j && i.reference[p] / 2 - (D < V ? B : z) - g[p] / 2 < 0, A = R ? D < V ? D - V : D - Z : 0;
    return {
      [h]: d[h] + A,
      data: {
        [h]: j,
        centerOffset: D - j - A,
        ...R && {
          alignmentOffset: A
        }
      },
      reset: R
    };
  }
}), Dv = function(n) {
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
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...m
      } = Zt(n, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = Mt(o), C = en(s), v = Mt(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = d || (v || !g ? [Bo(s)] : Rv(s)), E = p !== "none";
      !d && E && S.push(...Nv(s, g, p, w));
      const _ = [s, ...S], T = await ls(e, m), M = [];
      let B = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && M.push(T[b]), f) {
        const D = Av(o, a, w);
        M.push(T[D[0]], T[D[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: M
      }], !M.every((D) => D <= 0)) {
        var z, V;
        const D = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1, j = _[D];
        if (j)
          return {
            data: {
              index: D,
              overflows: B
            },
            reset: {
              placement: j
            }
          };
        let R = (V = B.filter((A) => A.overflows[0] <= 0).sort((A, P) => A.overflows[1] - P.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!R)
          switch (h) {
            case "bestFit": {
              var Z;
              const A = (Z = B.filter((P) => {
                if (E) {
                  const $ = en(P.placement);
                  return $ === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter(($) => $ > 0).reduce(($, H) => $ + H, 0)]).sort((P, $) => P[1] - $[1])[0]) == null ? void 0 : Z[0];
              A && (R = A);
              break;
            }
            case "initialPlacement":
              R = s;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function id(n) {
  const e = lt(...n.map((i) => i.left)), t = lt(...n.map((i) => i.top)), r = qe(...n.map((i) => i.right)), o = qe(...n.map((i) => i.bottom));
  return {
    x: e,
    y: t,
    width: r - e,
    height: o - t
  };
}
function Lv(n) {
  const e = n.slice().sort((o, i) => o.y - i.y), t = [];
  let r = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !r || i.y - r.y > r.height / 2 ? t.push([i]) : t[t.length - 1].push(i), r = i;
  }
  return t.map((o) => hr(id(o)));
}
const Fv = function(n) {
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
      } = Zt(n, e), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), f = Lv(u), d = hr(id(u)), h = cs(s);
      function p() {
        if (f.length === 2 && f[0].left > f[1].right && c != null && l != null)
          return f.find((m) => c > m.left - h.left && c < m.right + h.right && l > m.top - h.top && l < m.bottom + h.bottom) || d;
        if (f.length >= 2) {
          if (en(t) === "y") {
            const B = f[0], z = f[f.length - 1], V = Mt(t) === "top", Z = B.top, D = z.bottom, j = V ? B.left : z.left, R = V ? B.right : z.right, A = R - j, P = D - Z;
            return {
              top: Z,
              bottom: D,
              left: j,
              right: R,
              width: A,
              height: P,
              x: j,
              y: Z
            };
          }
          const m = Mt(t) === "left", b = qe(...f.map((B) => B.right)), C = lt(...f.map((B) => B.left)), v = f.filter((B) => m ? B.left === C : B.right === b), w = v[0].top, S = v[v.length - 1].bottom, E = C, _ = b, T = _ - E, M = S - w;
          return {
            top: w,
            bottom: S,
            left: E,
            right: _,
            width: T,
            height: M,
            x: E,
            y: w
          };
        }
        return d;
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
async function jv(n, e) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = n, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Mt(t), s = Cr(t), c = en(t) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = i && c ? -1 : 1, f = Zt(e, n);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return s && typeof p == "number" && (h = s === "end" ? p * -1 : p), c ? {
    x: h * u,
    y: d * l
  } : {
    x: d * l,
    y: h * u
  };
}
const Uv = function(n) {
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
      } = e, c = await jv(e, n);
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
}, Hv = function(n) {
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
      } = Zt(n, e), l = {
        x: t,
        y: r
      }, u = await ls(e, c), f = en(Mt(o)), d = is(f);
      let h = l[d], p = l[f];
      if (i) {
        const m = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", C = h + u[m], v = h - u[b];
        h = Ca(C, h, v);
      }
      if (a) {
        const m = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", C = p + u[m], v = p - u[b];
        p = Ca(C, p, v);
      }
      const g = s.fn({
        ...e,
        [d]: h,
        [f]: p
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
}, Bv = function(n) {
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
      } = Zt(n, e), u = {
        x: t,
        y: r
      }, f = en(o), d = is(f);
      let h = u[d], p = u[f];
      const g = Zt(s, e), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const v = d === "y" ? "height" : "width", w = i.reference[d] - i.floating[v] + m.mainAxis, S = i.reference[d] + i.reference[v] - m.mainAxis;
        h < w ? h = w : h > S && (h = S);
      }
      if (l) {
        var b, C;
        const v = d === "y" ? "width" : "height", w = ["top", "left"].includes(Mt(o)), S = i.reference[f] - i.floating[v] + (w && ((b = a.offset) == null ? void 0 : b[f]) || 0) + (w ? 0 : m.crossAxis), E = i.reference[f] + i.reference[v] + (w ? 0 : ((C = a.offset) == null ? void 0 : C[f]) || 0) - (w ? m.crossAxis : 0);
        p < S ? p = S : p > E && (p = E);
      }
      return {
        [d]: h,
        [f]: p
      };
    }
  };
}, zv = function(n) {
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
      } = Zt(n, e), c = await ls(e, s), l = Mt(t), u = Cr(t), f = en(t) === "y", {
        width: d,
        height: h
      } = r.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = u === "end" ? "top" : "bottom");
      const m = h - c.top - c.bottom, b = d - c.left - c.right, C = lt(h - c[p], m), v = lt(d - c[g], b), w = !e.middlewareData.shift;
      let S = C, E = v;
      if (f ? E = u || w ? lt(v, b) : b : S = u || w ? lt(C, m) : m, w && !u) {
        const T = qe(c.left, 0), M = qe(c.right, 0), B = qe(c.top, 0), z = qe(c.bottom, 0);
        f ? E = d - 2 * (T !== 0 || M !== 0 ? T + M : qe(c.left, c.right)) : S = h - 2 * (B !== 0 || z !== 0 ? B + z : qe(c.top, c.bottom));
      }
      await a({
        ...e,
        availableWidth: E,
        availableHeight: S
      });
      const _ = await o.getDimensions(i.floating);
      return d !== _.width || h !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ad(n) {
  const e = bt(n);
  let t = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = ft(n), i = o ? n.offsetWidth : t, a = o ? n.offsetHeight : r, s = Ho(t) !== i || Ho(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function us(n) {
  return Ee(n) ? n : n.contextElement;
}
function cr(n) {
  const e = us(n);
  if (!ft(e))
    return vn(1);
  const t = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ad(e);
  let a = (i ? Ho(t.width) : t.width) / r, s = (i ? Ho(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const $v = /* @__PURE__ */ vn(0);
function sd(n) {
  const e = nt(n);
  return !os() || !e.visualViewport ? $v : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Kv(n, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== nt(n) ? !1 : e;
}
function jn(n, e, t, r) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = n.getBoundingClientRect(), i = us(n);
  let a = vn(1);
  e && (r ? Ee(r) && (a = cr(r)) : a = cr(n));
  const s = Kv(i, t, r) ? sd(i) : vn(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, u = o.width / a.x, f = o.height / a.y;
  if (i) {
    const d = nt(i), h = r && Ee(r) ? nt(r) : r;
    let p = d, g = p.frameElement;
    for (; g && r && h !== p; ) {
      const m = cr(g), b = g.getBoundingClientRect(), C = bt(g), v = b.left + (g.clientLeft + parseFloat(C.paddingLeft)) * m.x, w = b.top + (g.clientTop + parseFloat(C.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, f *= m.y, c += v, l += w, p = nt(g), g = p.frameElement;
    }
  }
  return hr({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function qv(n) {
  let {
    elements: e,
    rect: t,
    offsetParent: r,
    strategy: o
  } = n;
  const i = o === "fixed", a = on(r), s = e ? ci(e.floating) : !1;
  if (r === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = vn(1);
  const u = vn(0), f = ft(r);
  if ((f || !f && !i) && ((br(r) !== "body" || ro(a)) && (c = li(r)), ft(r))) {
    const d = jn(r);
    l = cr(r), u.x = d.x + r.clientLeft, u.y = d.y + r.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function Vv(n) {
  return Array.from(n.getClientRects());
}
function cd(n) {
  return jn(on(n)).left + li(n).scrollLeft;
}
function Gv(n) {
  const e = on(n), t = li(n), r = n.ownerDocument.body, o = qe(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = qe(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + cd(n);
  const s = -t.scrollTop;
  return bt(r).direction === "rtl" && (a += qe(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Wv(n, e) {
  const t = nt(n), r = on(n), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = os();
    (!l || l && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function Yv(n, e) {
  const t = jn(n, !0, e === "fixed"), r = t.top + n.clientTop, o = t.left + n.clientLeft, i = ft(n) ? cr(n) : vn(1), a = n.clientWidth * i.x, s = n.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function rl(n, e, t) {
  let r;
  if (e === "viewport")
    r = Wv(n, t);
  else if (e === "document")
    r = Gv(on(n));
  else if (Ee(e))
    r = Yv(e, t);
  else {
    const o = sd(n);
    r = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return hr(r);
}
function ld(n, e) {
  const t = Xt(n);
  return t === e || !Ee(t) || yn(t) ? !1 : bt(t).position === "fixed" || ld(t, e);
}
function Qv(n, e) {
  const t = e.get(n);
  if (t)
    return t;
  let r = Jt(n, [], !1).filter((s) => Ee(s) && br(s) !== "body"), o = null;
  const i = bt(n).position === "fixed";
  let a = i ? Xt(n) : n;
  for (; Ee(a) && !yn(a); ) {
    const s = bt(a), c = rs(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ro(a) && !c && ld(n, a)) ? r = r.filter((u) => u !== a) : o = s, a = Xt(a);
  }
  return e.set(n, r), r;
}
function Jv(n) {
  let {
    element: e,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = n;
  const a = [...t === "clippingAncestors" ? ci(e) ? [] : Qv(e, this._c) : [].concat(t), r], s = a[0], c = a.reduce((l, u) => {
    const f = rl(e, u, o);
    return l.top = qe(f.top, l.top), l.right = lt(f.right, l.right), l.bottom = lt(f.bottom, l.bottom), l.left = qe(f.left, l.left), l;
  }, rl(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Xv(n) {
  const {
    width: e,
    height: t
  } = ad(n);
  return {
    width: e,
    height: t
  };
}
function Zv(n, e, t) {
  const r = ft(e), o = on(e), i = t === "fixed", a = jn(n, !0, i, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = vn(0);
  if (r || !r && !i)
    if ((br(e) !== "body" || ro(o)) && (s = li(e)), r) {
      const f = jn(e, !0, i, e);
      c.x = f.x + e.clientLeft, c.y = f.y + e.clientTop;
    } else
      o && (c.x = cd(o));
  const l = a.left + s.scrollLeft - c.x, u = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function Fi(n) {
  return bt(n).position === "static";
}
function ol(n, e) {
  return !ft(n) || bt(n).position === "fixed" ? null : e ? e(n) : n.offsetParent;
}
function ud(n, e) {
  const t = nt(n);
  if (ci(n))
    return t;
  if (!ft(n)) {
    let o = Xt(n);
    for (; o && !yn(o); ) {
      if (Ee(o) && !Fi(o))
        return o;
      o = Xt(o);
    }
    return t;
  }
  let r = ol(n, e);
  for (; r && mv(r) && Fi(r); )
    r = ol(r, e);
  return r && yn(r) && Fi(r) && !rs(r) ? t : r || yv(n) || t;
}
const eb = async function(n) {
  const e = this.getOffsetParent || ud, t = this.getDimensions, r = await t(n.floating);
  return {
    reference: Zv(n.reference, await e(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function tb(n) {
  return bt(n).direction === "rtl";
}
const nb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qv,
  getDocumentElement: on,
  getClippingRect: Jv,
  getOffsetParent: ud,
  getElementRects: eb,
  getClientRects: Vv,
  getDimensions: Xv,
  getScale: cr,
  isElement: Ee,
  isRTL: tb
};
function rb(n, e) {
  let t = null, r;
  const o = on(n);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: f,
      height: d
    } = n.getBoundingClientRect();
    if (s || e(), !f || !d)
      return;
    const h = go(u), p = go(o.clientWidth - (l + f)), g = go(o.clientHeight - (u + d)), m = go(l), C = {
      rootMargin: -h + "px " + -p + "px " + -g + "px " + -m + "px",
      threshold: qe(0, lt(1, c)) || 1
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
function ob(n, e, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = us(n), u = o || i ? [...l ? Jt(l) : [], ...Jt(e)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const f = l && s ? rb(l, t) : null;
  let d = -1, h = null;
  a && (h = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === l && h && (h.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var v;
      (v = h) == null || v.observe(e);
    })), t();
  }), l && !c && h.observe(l), h.observe(e));
  let p, g = c ? jn(n) : null;
  c && m();
  function m() {
    const b = jn(n);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && t(), g = b, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var b;
    u.forEach((C) => {
      o && C.removeEventListener("scroll", t), i && C.removeEventListener("resize", t);
    }), f == null || f(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(p);
  };
}
const ib = Uv, ab = Hv, sb = Dv, cb = zv, il = xv, lb = Fv, ub = Bv, db = (n, e, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: nb,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ov(n, e, {
    ...o,
    platform: i
  });
};
var Co = typeof document < "u" ? xa : X;
function zo(n, e) {
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
        if (!zo(n[r], e[r]))
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
      if (!(i === "_owner" && n.$$typeof) && !zo(n[i], e[i]))
        return !1;
    }
    return !0;
  }
  return n !== n && e !== e;
}
function dd(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function al(n, e) {
  const t = dd(n);
  return Math.round(e * t) / t;
}
function sl(n) {
  const e = U.useRef(n);
  return Co(() => {
    e.current = n;
  }), e;
}
function fb(n) {
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
  } = n, [u, f] = U.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [d, h] = U.useState(r);
  zo(d, r) || h(r);
  const [p, g] = U.useState(null), [m, b] = U.useState(null), C = U.useCallback((A) => {
    A !== E.current && (E.current = A, g(A));
  }, []), v = U.useCallback((A) => {
    A !== _.current && (_.current = A, b(A));
  }, []), w = i || p, S = a || m, E = U.useRef(null), _ = U.useRef(null), T = U.useRef(u), M = c != null, B = sl(c), z = sl(o), V = U.useCallback(() => {
    if (!E.current || !_.current)
      return;
    const A = {
      placement: e,
      strategy: t,
      middleware: d
    };
    z.current && (A.platform = z.current), db(E.current, _.current, A).then((P) => {
      const $ = {
        ...P,
        isPositioned: !0
      };
      Z.current && !zo(T.current, $) && (T.current = $, zf.flushSync(() => {
        f($);
      }));
    });
  }, [d, e, t, z]);
  Co(() => {
    l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const Z = U.useRef(!1);
  Co(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), Co(() => {
    if (w && (E.current = w), S && (_.current = S), w && S) {
      if (B.current)
        return B.current(w, S, V);
      V();
    }
  }, [w, S, V, B, M]);
  const D = U.useMemo(() => ({
    reference: E,
    floating: _,
    setReference: C,
    setFloating: v
  }), [C, v]), j = U.useMemo(() => ({
    reference: w,
    floating: S
  }), [w, S]), R = U.useMemo(() => {
    const A = {
      position: t,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return A;
    const P = al(j.floating, u.x), $ = al(j.floating, u.y);
    return s ? {
      ...A,
      transform: "translate(" + P + "px, " + $ + "px)",
      ...dd(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: P,
      top: $
    };
  }, [t, s, j.floating, u.x, u.y]);
  return U.useMemo(() => ({
    ...u,
    update: V,
    refs: D,
    elements: j,
    floatingStyles: R
  }), [u, V, D, j, R]);
}
const hb = (n) => {
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
      return r && e(r) ? r.current != null ? il({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? il({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, fd = (n, e) => ({
  ...ib(n),
  options: [n, e]
}), ds = (n, e) => ({
  ...ab(n),
  options: [n, e]
}), cl = (n, e) => ({
  ...ub(n),
  options: [n, e]
}), Sa = (n, e) => ({
  ...sb(n),
  options: [n, e]
}), pb = (n, e) => ({
  ...cb(n),
  options: [n, e]
}), Ea = (n, e) => ({
  ...lb(n),
  options: [n, e]
}), hd = (n, e) => ({
  ...hb(n),
  options: [n, e]
}), pd = {
  ...U
}, gb = pd.useInsertionEffect, mb = gb || ((n) => n());
function pn(n) {
  const e = U.useRef(() => {
  });
  return mb(() => {
    e.current = n;
  }), U.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
var jt = typeof document < "u" ? xa : X;
let ll = !1, yb = 0;
const ul = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + yb++
);
function vb() {
  const [n, e] = U.useState(() => ll ? ul() : void 0);
  return jt(() => {
    n == null && e(ul());
  }, []), U.useEffect(() => {
    ll = !0;
  }, []), n;
}
const bb = pd.useId, gd = bb || vb;
function Cb() {
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
const wb = /* @__PURE__ */ U.createContext(null), Sb = /* @__PURE__ */ U.createContext(null), fs = () => {
  var n;
  return ((n = U.useContext(wb)) == null ? void 0 : n.id) || null;
}, hs = () => U.useContext(Sb);
function ps(n) {
  return "data-floating-ui-" + n;
}
function ji(n) {
  const e = ue(n);
  return jt(() => {
    e.current = n;
  }), e;
}
const dl = /* @__PURE__ */ ps("safe-polygon");
function wo(n, e, t) {
  return t && !ba(t) ? 0 : typeof n == "number" ? n : n == null ? void 0 : n[e];
}
function Eb(n, e) {
  e === void 0 && (e = {});
  const {
    open: t,
    onOpenChange: r,
    dataRef: o,
    events: i,
    elements: a
  } = n, {
    enabled: s = !0,
    delay: c = 0,
    handleClose: l = null,
    mouseOnly: u = !1,
    restMs: f = 0,
    move: d = !0
  } = e, h = hs(), p = fs(), g = ji(l), m = ji(c), b = ji(t), C = U.useRef(), v = U.useRef(-1), w = U.useRef(), S = U.useRef(-1), E = U.useRef(!0), _ = U.useRef(!1), T = U.useRef(() => {
  }), M = U.useCallback(() => {
    var j;
    const R = (j = o.current.openEvent) == null ? void 0 : j.type;
    return (R == null ? void 0 : R.includes("mouse")) && R !== "mousedown";
  }, [o]);
  U.useEffect(() => {
    if (!s)
      return;
    function j(R) {
      let {
        open: A
      } = R;
      A || (clearTimeout(v.current), clearTimeout(S.current), E.current = !0);
    }
    return i.on("openchange", j), () => {
      i.off("openchange", j);
    };
  }, [s, i]), U.useEffect(() => {
    if (!s || !g.current || !t)
      return;
    function j(A) {
      M() && r(!1, A, "hover");
    }
    const R = Nn(a.floating).documentElement;
    return R.addEventListener("mouseleave", j), () => {
      R.removeEventListener("mouseleave", j);
    };
  }, [a.floating, t, r, s, g, M]);
  const B = U.useCallback(function(j, R, A) {
    R === void 0 && (R = !0), A === void 0 && (A = "hover");
    const P = wo(m.current, "close", C.current);
    P && !w.current ? (clearTimeout(v.current), v.current = window.setTimeout(() => r(!1, j, A), P)) : R && (clearTimeout(v.current), r(!1, j, A));
  }, [m, r]), z = pn(() => {
    T.current(), w.current = void 0;
  }), V = pn(() => {
    if (_.current) {
      const j = Nn(a.floating).body;
      j.style.pointerEvents = "", j.removeAttribute(dl), _.current = !1;
    }
  });
  U.useEffect(() => {
    if (!s)
      return;
    function j() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function R(H) {
      if (clearTimeout(v.current), E.current = !1, u && !ba(C.current) || f > 0 && !wo(m.current, "open"))
        return;
      const re = wo(m.current, "open", C.current);
      re ? v.current = window.setTimeout(() => {
        b.current || r(!0, H, "hover");
      }, re) : r(!0, H, "hover");
    }
    function A(H) {
      if (j())
        return;
      T.current();
      const re = Nn(a.floating);
      if (clearTimeout(S.current), g.current && o.current.floatingContext) {
        t || clearTimeout(v.current), w.current = g.current({
          ...o.current.floatingContext,
          tree: h,
          x: H.clientX,
          y: H.clientY,
          onClose() {
            V(), z(), B(H, !0, "safe-polygon");
          }
        });
        const _e = w.current;
        re.addEventListener("mousemove", _e), T.current = () => {
          re.removeEventListener("mousemove", _e);
        };
        return;
      }
      (C.current === "touch" ? !Vr(a.floating, H.relatedTarget) : !0) && B(H);
    }
    function P(H) {
      j() || o.current.floatingContext && (g.current == null || g.current({
        ...o.current.floatingContext,
        tree: h,
        x: H.clientX,
        y: H.clientY,
        onClose() {
          V(), z(), B(H);
        }
      })(H));
    }
    if (Ee(a.domReference)) {
      var $;
      const H = a.domReference;
      return t && H.addEventListener("mouseleave", P), ($ = a.floating) == null || $.addEventListener("mouseleave", P), d && H.addEventListener("mousemove", R, {
        once: !0
      }), H.addEventListener("mouseenter", R), H.addEventListener("mouseleave", A), () => {
        var re;
        t && H.removeEventListener("mouseleave", P), (re = a.floating) == null || re.removeEventListener("mouseleave", P), d && H.removeEventListener("mousemove", R), H.removeEventListener("mouseenter", R), H.removeEventListener("mouseleave", A);
      };
    }
  }, [a, s, n, u, f, d, B, z, V, r, t, b, h, m, g, o]), jt(() => {
    var j;
    if (s && t && (j = g.current) != null && j.__options.blockPointerEvents && M()) {
      const A = Nn(a.floating).body;
      A.setAttribute(dl, ""), A.style.pointerEvents = "none", _.current = !0;
      const P = a.floating;
      if (Ee(a.domReference) && P) {
        var R;
        const $ = a.domReference, H = h == null || (R = h.nodesRef.current.find((re) => re.id === p)) == null || (R = R.context) == null ? void 0 : R.elements.floating;
        return H && (H.style.pointerEvents = ""), $.style.pointerEvents = "auto", P.style.pointerEvents = "auto", () => {
          $.style.pointerEvents = "", P.style.pointerEvents = "";
        };
      }
    }
  }, [s, t, p, a, h, g, M]), jt(() => {
    t || (C.current = void 0, z(), V());
  }, [t, z, V]), U.useEffect(() => () => {
    z(), clearTimeout(v.current), clearTimeout(S.current), V();
  }, [s, a.domReference, z, V]);
  const Z = U.useMemo(() => {
    function j(R) {
      C.current = R.pointerType;
    }
    return {
      onPointerDown: j,
      onPointerEnter: j,
      onMouseMove(R) {
        const {
          nativeEvent: A
        } = R;
        function P() {
          !E.current && !b.current && r(!0, A, "hover");
        }
        u && !ba(C.current) || t || f === 0 || (clearTimeout(S.current), C.current === "touch" ? P() : S.current = window.setTimeout(P, f));
      }
    };
  }, [u, r, t, b, f]), D = U.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(v.current);
    },
    onMouseLeave(j) {
      B(j.nativeEvent, !1);
    }
  }), [B]);
  return U.useMemo(() => s ? {
    reference: Z,
    floating: D
  } : {}, [s, Z, D]);
}
const Ia = () => {
}, md = /* @__PURE__ */ U.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: Ia,
  setState: Ia,
  isInstantPhase: !1
}), yd = () => U.useContext(md);
function Ib(n) {
  const {
    children: e,
    delay: t,
    timeoutMs: r = 0
  } = n, [o, i] = U.useReducer((c, l) => ({
    ...c,
    ...l
  }), {
    delay: t,
    timeoutMs: r,
    initialDelay: t,
    currentId: null,
    isInstantPhase: !1
  }), a = U.useRef(null), s = U.useCallback((c) => {
    i({
      currentId: c
    });
  }, []);
  return jt(() => {
    o.currentId ? a.current === null ? a.current = o.currentId : o.isInstantPhase || i({
      isInstantPhase: !0
    }) : (o.isInstantPhase && i({
      isInstantPhase: !1
    }), a.current = null);
  }, [o.currentId, o.isInstantPhase]), /* @__PURE__ */ U.createElement(md.Provider, {
    value: U.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: s
    }), [o, s])
  }, e);
}
function Tb(n, e) {
  e === void 0 && (e = {});
  const {
    open: t,
    onOpenChange: r,
    floatingId: o
  } = n, {
    id: i
  } = e, a = i ?? o, s = yd(), {
    currentId: c,
    setCurrentId: l,
    initialDelay: u,
    setState: f,
    timeoutMs: d
  } = s;
  return jt(() => {
    c && (f({
      delay: {
        open: 1,
        close: wo(u, "close")
      }
    }), c !== a && r(!1));
  }, [a, r, f, c, u]), jt(() => {
    function h() {
      r(!1), f({
        delay: u,
        currentId: null
      });
    }
    if (c && !t && c === a) {
      if (d) {
        const p = window.setTimeout(h, d);
        return () => {
          clearTimeout(p);
        };
      }
      h();
    }
  }, [t, f, c, a, r, u, d]), jt(() => {
    l === Ia || !t || l(a);
  }, [t, l, a]), s;
}
function Ui(n, e) {
  let t = n.filter((o) => {
    var i;
    return o.parentId === e && ((i = o.context) == null ? void 0 : i.open);
  }), r = t;
  for (; r.length; )
    r = n.filter((o) => {
      var i;
      return (i = r) == null ? void 0 : i.some((a) => {
        var s;
        return o.parentId === a.id && ((s = o.context) == null ? void 0 : s.open);
      });
    }), t = t.concat(r);
  return t;
}
const _b = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, kb = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, fl = (n) => {
  var e, t;
  return {
    escapeKey: typeof n == "boolean" ? n : (e = n == null ? void 0 : n.escapeKey) != null ? e : !1,
    outsidePress: typeof n == "boolean" ? n : (t = n == null ? void 0 : n.outsidePress) != null ? t : !0
  };
};
function Ab(n, e) {
  e === void 0 && (e = {});
  const {
    open: t,
    onOpenChange: r,
    elements: o,
    dataRef: i
  } = n, {
    enabled: a = !0,
    escapeKey: s = !0,
    outsidePress: c = !0,
    outsidePressEvent: l = "pointerdown",
    referencePress: u = !1,
    referencePressEvent: f = "pointerdown",
    ancestorScroll: d = !1,
    bubbles: h,
    capture: p
  } = e, g = hs(), m = pn(typeof c == "function" ? c : () => !1), b = typeof c == "function" ? m : c, C = U.useRef(!1), v = U.useRef(!1), {
    escapeKey: w,
    outsidePress: S
  } = fl(h), {
    escapeKey: E,
    outsidePress: _
  } = fl(p), T = pn((D) => {
    var j;
    if (!t || !a || !s || D.key !== "Escape")
      return;
    const R = (j = i.current.floatingContext) == null ? void 0 : j.nodeId, A = g ? Ui(g.nodesRef.current, R) : [];
    if (!w && (D.stopPropagation(), A.length > 0)) {
      let P = !0;
      if (A.forEach(($) => {
        var H;
        if ((H = $.context) != null && H.open && !$.context.dataRef.current.__escapeKeyBubbles) {
          P = !1;
          return;
        }
      }), !P)
        return;
    }
    r(!1, Sv(D) ? D.nativeEvent : D, "escape-key");
  }), M = pn((D) => {
    var j;
    const R = () => {
      var A;
      T(D), (A = Zn(D)) == null || A.removeEventListener("keydown", R);
    };
    (j = Zn(D)) == null || j.addEventListener("keydown", R);
  }), B = pn((D) => {
    var j;
    const R = C.current;
    C.current = !1;
    const A = v.current;
    if (v.current = !1, l === "click" && A || R || typeof b == "function" && !b(D))
      return;
    const P = Zn(D), $ = "[" + ps("inert") + "]", H = Nn(o.floating).querySelectorAll($);
    let re = Ee(P) ? P : null;
    for (; re && !yn(re); ) {
      const pe = Xt(re);
      if (yn(pe) || !Ee(pe))
        break;
      re = pe;
    }
    if (H.length && Ee(P) && !Ev(P) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !Vr(P, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(H).every((pe) => !Vr(re, pe)))
      return;
    if (ft(P) && Z) {
      const pe = P.clientWidth > 0 && P.scrollWidth > P.clientWidth, Oe = P.clientHeight > 0 && P.scrollHeight > P.clientHeight;
      let ze = Oe && D.offsetX > P.clientWidth;
      if (Oe && bt(P).direction === "rtl" && (ze = D.offsetX <= P.offsetWidth - P.clientWidth), ze || pe && D.offsetY > P.clientHeight)
        return;
    }
    const fe = (j = i.current.floatingContext) == null ? void 0 : j.nodeId, _e = g && Ui(g.nodesRef.current, fe).some((pe) => {
      var Oe;
      return Li(D, (Oe = pe.context) == null ? void 0 : Oe.elements.floating);
    });
    if (Li(D, o.floating) || Li(D, o.domReference) || _e)
      return;
    const Be = g ? Ui(g.nodesRef.current, fe) : [];
    if (Be.length > 0) {
      let pe = !0;
      if (Be.forEach((Oe) => {
        var ze;
        if ((ze = Oe.context) != null && ze.open && !Oe.context.dataRef.current.__outsidePressBubbles) {
          pe = !1;
          return;
        }
      }), !pe)
        return;
    }
    r(!1, D, "outside-press");
  }), z = pn((D) => {
    var j;
    const R = () => {
      var A;
      B(D), (A = Zn(D)) == null || A.removeEventListener(l, R);
    };
    (j = Zn(D)) == null || j.addEventListener(l, R);
  });
  U.useEffect(() => {
    if (!t || !a)
      return;
    i.current.__escapeKeyBubbles = w, i.current.__outsidePressBubbles = S;
    function D(A) {
      r(!1, A, "ancestor-scroll");
    }
    const j = Nn(o.floating);
    s && j.addEventListener("keydown", E ? M : T, E), b && j.addEventListener(l, _ ? z : B, _);
    let R = [];
    return d && (Ee(o.domReference) && (R = Jt(o.domReference)), Ee(o.floating) && (R = R.concat(Jt(o.floating))), !Ee(o.reference) && o.reference && o.reference.contextElement && (R = R.concat(Jt(o.reference.contextElement)))), R = R.filter((A) => {
      var P;
      return A !== ((P = j.defaultView) == null ? void 0 : P.visualViewport);
    }), R.forEach((A) => {
      A.addEventListener("scroll", D, {
        passive: !0
      });
    }), () => {
      s && j.removeEventListener("keydown", E ? M : T, E), b && j.removeEventListener(l, _ ? z : B, _), R.forEach((A) => {
        A.removeEventListener("scroll", D);
      });
    };
  }, [i, o, s, b, l, t, r, d, a, w, S, T, E, M, B, _, z]), U.useEffect(() => {
    C.current = !1;
  }, [b, l]);
  const V = U.useMemo(() => ({
    onKeyDown: T,
    [_b[f]]: (D) => {
      u && r(!1, D.nativeEvent, "reference-press");
    }
  }), [T, r, u, f]), Z = U.useMemo(() => ({
    onKeyDown: T,
    onMouseDown() {
      v.current = !0;
    },
    onMouseUp() {
      v.current = !0;
    },
    [kb[l]]: () => {
      C.current = !0;
    }
  }), [T, l]);
  return U.useMemo(() => a ? {
    reference: V,
    floating: Z
  } : {}, [a, V, Z]);
}
function Rb(n) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: r
  } = n, o = gd(), i = U.useRef({}), [a] = U.useState(() => Cb()), s = fs() != null, [c, l] = U.useState(r.reference), u = pn((h, p, g) => {
    i.current.openEvent = h ? p : void 0, a.emit("openchange", {
      open: h,
      event: p,
      reason: g,
      nested: s
    }), t == null || t(h, p, g);
  }), f = U.useMemo(() => ({
    setPositionReference: l
  }), []), d = U.useMemo(() => ({
    reference: c || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [c, r.reference, r.floating]);
  return U.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: d,
    events: a,
    floatingId: o,
    refs: f
  }), [e, u, d, a, o, f]);
}
function gs(n) {
  n === void 0 && (n = {});
  const {
    nodeId: e
  } = n, t = Rb({
    ...n,
    elements: {
      reference: null,
      floating: null,
      ...n.elements
    }
  }), r = n.rootContext || t, o = r.elements, [i, a] = U.useState(null), [s, c] = U.useState(null), u = (o == null ? void 0 : o.reference) || i, f = U.useRef(null), d = hs();
  jt(() => {
    u && (f.current = u);
  }, [u]);
  const h = fb({
    ...n,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), p = U.useCallback((v) => {
    const w = Ee(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c(w), h.refs.setReference(w);
  }, [h.refs]), g = U.useCallback((v) => {
    (Ee(v) || v === null) && (f.current = v, a(v)), (Ee(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !Ee(v)) && h.refs.setReference(v);
  }, [h.refs]), m = U.useMemo(() => ({
    ...h.refs,
    setReference: g,
    setPositionReference: p,
    domReference: f
  }), [h.refs, g, p]), b = U.useMemo(() => ({
    ...h.elements,
    domReference: u
  }), [h.elements, u]), C = U.useMemo(() => ({
    ...h,
    ...r,
    refs: m,
    elements: b,
    nodeId: e
  }), [h, m, b, e, r]);
  return jt(() => {
    r.dataRef.current.floatingContext = C;
    const v = d == null ? void 0 : d.nodesRef.current.find((w) => w.id === e);
    v && (v.context = C);
  }), U.useMemo(() => ({
    ...h,
    context: C,
    refs: m,
    elements: b
  }), [h, m, b, C]);
}
function Pb(n, e) {
  e === void 0 && (e = {});
  const {
    open: t,
    onOpenChange: r,
    events: o,
    dataRef: i,
    elements: a
  } = n, {
    enabled: s = !0,
    visibleOnly: c = !0
  } = e, l = U.useRef(!1), u = U.useRef(), f = U.useRef(!0);
  U.useEffect(() => {
    if (!s)
      return;
    const h = nt(a.domReference);
    function p() {
      !t && ft(a.domReference) && a.domReference === el(Nn(a.domReference)) && (l.current = !0);
    }
    function g() {
      f.current = !0;
    }
    return h.addEventListener("blur", p), h.addEventListener("keydown", g, !0), () => {
      h.removeEventListener("blur", p), h.removeEventListener("keydown", g, !0);
    };
  }, [a.domReference, t, s]), U.useEffect(() => {
    if (!s)
      return;
    function h(p) {
      let {
        reason: g
      } = p;
      (g === "reference-press" || g === "escape-key") && (l.current = !0);
    }
    return o.on("openchange", h), () => {
      o.off("openchange", h);
    };
  }, [o, s]), U.useEffect(() => () => {
    clearTimeout(u.current);
  }, []);
  const d = U.useMemo(() => ({
    onPointerDown(h) {
      vv(h.nativeEvent) || (f.current = !1);
    },
    onMouseLeave() {
      l.current = !1;
    },
    onFocus(h) {
      if (l.current)
        return;
      const p = Zn(h.nativeEvent);
      if (c && Ee(p))
        try {
          if (bv() && Cv())
            throw Error();
          if (!p.matches(":focus-visible"))
            return;
        } catch {
          if (!f.current && !Tv(p))
            return;
        }
      r(!0, h.nativeEvent, "focus");
    },
    onBlur(h) {
      l.current = !1;
      const p = h.relatedTarget, g = h.nativeEvent, m = Ee(p) && p.hasAttribute(ps("focus-guard")) && p.getAttribute("data-type") === "outside";
      u.current = window.setTimeout(() => {
        var b;
        const C = el(a.domReference ? a.domReference.ownerDocument : document);
        !p && C === a.domReference || Vr((b = i.current.floatingContext) == null ? void 0 : b.refs.floating.current, C) || Vr(a.domReference, C) || m || r(!1, g, "focus");
      });
    }
  }), [i, a.domReference, r, c]);
  return U.useMemo(() => s ? {
    reference: d
  } : {}, [s, d]);
}
const hl = "active", pl = "selected";
function Hi(n, e, t) {
  const r = /* @__PURE__ */ new Map(), o = t === "item";
  let i = n;
  if (o && n) {
    const {
      [hl]: a,
      [pl]: s,
      ...c
    } = n;
    i = c;
  }
  return {
    ...t === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...e.map((a) => {
      const s = a ? a[t] : null;
      return typeof s == "function" ? n ? s(n) : null : s;
    }).concat(n).reduce((a, s) => (s && Object.entries(s).forEach((c) => {
      let [l, u] = c;
      if (!(o && [hl, pl].includes(l)))
        if (l.indexOf("on") === 0) {
          if (r.has(l) || r.set(l, []), typeof u == "function") {
            var f;
            (f = r.get(l)) == null || f.push(u), a[l] = function() {
              for (var d, h = arguments.length, p = new Array(h), g = 0; g < h; g++)
                p[g] = arguments[g];
              return (d = r.get(l)) == null ? void 0 : d.map((m) => m(...p)).find((m) => m !== void 0);
            };
          }
        } else
          a[l] = u;
    }), a), {})
  };
}
function Nb(n) {
  n === void 0 && (n = []);
  const e = n.map((s) => s == null ? void 0 : s.reference), t = n.map((s) => s == null ? void 0 : s.floating), r = n.map((s) => s == null ? void 0 : s.item), o = U.useCallback(
    (s) => Hi(s, n, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), i = U.useCallback(
    (s) => Hi(s, n, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), a = U.useCallback(
    (s) => Hi(s, n, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return U.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: a
  }), [o, i, a]);
}
const Mb = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Ob(n, e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: r,
    floatingId: o
  } = n, {
    enabled: i = !0,
    role: a = "dialog"
  } = e, s = (t = Mb.get(a)) != null ? t : a, c = gd(), u = fs() != null, f = U.useMemo(() => s === "tooltip" || a === "label" ? {
    ["aria-" + (a === "label" ? "labelledby" : "describedby")]: r ? o : void 0
  } : {
    "aria-expanded": r ? "true" : "false",
    "aria-haspopup": s === "alertdialog" ? "dialog" : s,
    "aria-controls": r ? o : void 0,
    ...s === "listbox" && {
      role: "combobox"
    },
    ...s === "menu" && {
      id: c
    },
    ...s === "menu" && u && {
      role: "menuitem"
    },
    ...a === "select" && {
      "aria-autocomplete": "none"
    },
    ...a === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [s, o, u, r, c, a]), d = U.useMemo(() => {
    const p = {
      id: o,
      ...s && {
        role: s
      }
    };
    return s === "tooltip" || a === "label" ? p : {
      ...p,
      ...s === "menu" && {
        "aria-labelledby": c
      }
    };
  }, [s, o, c, a]), h = U.useCallback((p) => {
    let {
      active: g,
      selected: m
    } = p;
    const b = {
      role: "option",
      ...g && {
        id: o + "-option"
      }
    };
    switch (a) {
      case "select":
        return {
          ...b,
          "aria-selected": g && m
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
  }, [o, a]);
  return U.useMemo(() => i ? {
    reference: f,
    floating: d,
    item: h
  } : {}, [i, f, d, h]);
}
function vd(n, e) {
  if (n === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, r] = e.split("-"), o = t === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return e;
}
function gl(n, e, t, r) {
  return n === "center" || r === "center" ? { top: e } : n === "end" ? { bottom: t } : n === "start" ? { top: t } : {};
}
function ml(n, e, t, r, o) {
  return n === "center" || r === "center" ? { left: e } : n === "end" ? { [o === "ltr" ? "right" : "left"]: t } : n === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const xb = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Db({
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
    [xb[c]]: r
  }, f = -e / 2;
  return c === "left" ? {
    ...u,
    ...gl(l, a, t, o),
    right: f,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...gl(l, a, t, o),
    left: f,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...ml(l, i, t, o, s),
    bottom: f,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...ml(l, i, t, o, s),
    top: f,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const ms = Ce(
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
    const { dir: f } = ii();
    return i ? /* @__PURE__ */ y.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Db({
            position: n,
            arrowSize: e,
            arrowOffset: t,
            arrowRadius: r,
            arrowPosition: o,
            dir: f,
            arrowX: a,
            arrowY: s
          })
        }
      }
    ) : null;
  }
);
ms.displayName = "@mantine/core/FloatingArrow";
const [Lb, bd] = yr(
  "Popover component was not found in the tree"
);
function ys({
  children: n,
  active: e = !0,
  refProp: t = "ref"
}) {
  const r = Om(e), o = at(r, n == null ? void 0 : n.ref);
  return Hn(n) ? gr(n, { [t]: o }) : n;
}
function Cd(n) {
  return /* @__PURE__ */ y.jsx(ns, { tabIndex: -1, "data-autofocus": !0, ...n });
}
ys.displayName = "@mantine/core/FocusTrap";
Cd.displayName = "@mantine/core/FocusTrapInitialFocus";
ys.InitialFocus = Cd;
function Fb(n) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof n.className == "string" && e.classList.add(...n.className.split(" ").filter(Boolean)), typeof n.style == "object" && Object.assign(e.style, n.style), typeof n.id == "string" && e.setAttribute("id", n.id), e;
}
const jb = {}, wd = Ce((n, e) => {
  const { children: t, target: r, ...o } = J("Portal", jb, n), [i, a] = te(!1), s = ue(null);
  return to(() => (a(!0), s.current = r ? typeof r == "string" ? document.querySelector(r) : r : Fb(o), ku(e, s.current), !r && s.current && document.body.appendChild(s.current), () => {
    !r && s.current && document.body.removeChild(s.current);
  }), [r]), !i || !s.current ? null : Kf(/* @__PURE__ */ y.jsx(y.Fragment, { children: t }), s.current);
});
wd.displayName = "@mantine/core/Portal";
function ui({ withinPortal: n = !0, children: e, ...t }) {
  return n ? /* @__PURE__ */ y.jsx(wd, { ...t, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
ui.displayName = "@mantine/core/OptionalPortal";
const Ar = (n) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${N(n === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), mo = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${N(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${N(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${N(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${N(-30)}` },
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
    out: { opacity: 0, transform: `translateY(${N(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${N(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${N(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${N(20)}) rotate(5deg)` },
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
    ...Ar("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Ar("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Ar("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Ar("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Ar("top"),
    common: { transformOrigin: "top right" }
  }
}, yl = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Ub({
  transition: n,
  state: e,
  duration: t,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: r
  };
  return typeof n == "string" ? n in mo ? {
    transitionProperty: mo[n].transitionProperty,
    ...o,
    ...mo[n].common,
    ...mo[n][yl[e]]
  } : {} : {
    transitionProperty: n.transitionProperty,
    ...o,
    ...n.common,
    ...n[yl[e]]
  };
}
function Hb({
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
  const u = $t(), f = Ru(), d = u.respectReducedMotion ? f : !1, [h, p] = te(d ? 0 : n), [g, m] = te(r ? "entered" : "exited"), b = ue(-1), C = ue(-1), v = ue(-1), w = (E) => {
    const _ = E ? o : i, T = E ? a : s;
    window.clearTimeout(b.current);
    const M = d ? 0 : E ? n : e;
    p(M), M === 0 ? (typeof _ == "function" && _(), typeof T == "function" && T(), m(E ? "entered" : "exited")) : v.current = requestAnimationFrame(() => {
      Wl.flushSync(() => {
        m(E ? "pre-entering" : "pre-exiting");
      }), v.current = requestAnimationFrame(() => {
        typeof _ == "function" && _(), m(E ? "entering" : "exiting"), b.current = window.setTimeout(() => {
          typeof T == "function" && T(), m(E ? "entered" : "exited");
        }, M);
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
  return mn(() => {
    S(r);
  }, [r]), X(
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
function di({
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
  enterDelay: f,
  exitDelay: d
}) {
  const { transitionDuration: h, transitionStatus: p, transitionTimingFunction: g } = Hb({
    mounted: o,
    exitDuration: r,
    duration: t,
    timingFunction: a,
    onExit: s,
    onEntered: c,
    onEnter: l,
    onExited: u,
    enterDelay: f,
    exitDelay: d
  });
  return h === 0 ? o ? /* @__PURE__ */ y.jsx(y.Fragment, { children: i({}) }) : n ? i({ display: "none" }) : null : p === "exited" ? n ? i({ display: "none" }) : null : /* @__PURE__ */ y.jsx(y.Fragment, { children: i(
    Ub({
      transition: e,
      duration: h,
      state: p,
      timingFunction: g
    })
  ) });
}
di.displayName = "@mantine/core/Transition";
var Sd = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Bb = {}, vs = le((n, e) => {
  var m, b, C, v;
  const t = J("PopoverDropdown", Bb, n), {
    className: r,
    style: o,
    vars: i,
    children: a,
    onKeyDownCapture: s,
    variant: c,
    classNames: l,
    styles: u,
    ...f
  } = t, d = bd(), h = _m({
    opened: d.opened,
    shouldReturnFocus: d.returnFocus
  }), p = d.withRoles ? {
    "aria-labelledby": d.getTargetId(),
    id: d.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = at(e, d.floating);
  return d.disabled ? null : /* @__PURE__ */ y.jsx(ui, { ...d.portalProps, withinPortal: d.withinPortal, children: /* @__PURE__ */ y.jsx(
    di,
    {
      mounted: d.opened,
      ...d.transitionProps,
      transition: ((m = d.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((b = d.transitionProps) == null ? void 0 : b.duration) ?? 150,
      keepMounted: d.keepMounted,
      exitDuration: typeof ((C = d.transitionProps) == null ? void 0 : C.exitDuration) == "number" ? d.transitionProps.exitDuration : (v = d.transitionProps) == null ? void 0 : v.duration,
      children: (w) => /* @__PURE__ */ y.jsx(ys, { active: d.trapFocus, children: /* @__PURE__ */ y.jsxs(
        ne,
        {
          ...p,
          ...f,
          variant: c,
          ref: g,
          onKeyDownCapture: bm(d.onClose, {
            active: d.closeOnEscape,
            onTrigger: h,
            onKeyDown: s
          }),
          "data-position": d.placement,
          "data-fixed": d.floatingStrategy === "fixed" || void 0,
          ...d.getStyles("dropdown", {
            className: r,
            props: t,
            classNames: l,
            styles: u,
            style: [
              {
                ...w,
                zIndex: d.zIndex,
                top: d.y ?? 0,
                left: d.x ?? 0,
                width: d.width === "target" ? void 0 : N(d.width)
              },
              o
            ]
          }),
          children: [
            a,
            /* @__PURE__ */ y.jsx(
              ms,
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
vs.classes = Sd;
vs.displayName = "@mantine/core/PopoverDropdown";
const zb = {
  refProp: "ref",
  popupType: "dialog"
}, Ed = le((n, e) => {
  const { children: t, refProp: r, popupType: o, ...i } = J(
    "PopoverTarget",
    zb,
    n
  );
  if (!Hn(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const a = i, s = bd(), c = at(s.reference, t.ref, e), l = s.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": s.opened,
    "aria-controls": s.getDropdownId(),
    id: s.getTargetId()
  } : {};
  return gr(t, {
    ...a,
    ...l,
    ...s.targetProps,
    className: zt(s.targetProps.className, a.className, t.props.className),
    [r]: c,
    ...s.controlled ? null : { onClick: s.onToggle }
  });
});
Ed.displayName = "@mantine/core/PopoverTarget";
function Id({
  opened: n,
  floating: e,
  position: t,
  positionDependencies: r
}) {
  const [o, i] = te(0);
  X(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return ob(
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
  ]), mn(() => {
    e.update();
  }, r), mn(() => {
    i((a) => a + 1);
  }, [n]);
}
function $b(n) {
  if (n === void 0)
    return { shift: !0, flip: !0 };
  const e = { ...n };
  return n.shift === void 0 && (e.shift = !0), n.flip === void 0 && (e.flip = !0), e;
}
function Kb(n, e) {
  const t = $b(n.middlewares), r = [fd(n.offset)];
  return t.shift && r.push(
    ds(
      typeof t.shift == "boolean" ? { limiter: cl(), padding: 5 } : { limiter: cl(), padding: 5, ...t.shift }
    )
  ), t.flip && r.push(
    typeof t.flip == "boolean" ? Sa() : Sa(t.flip)
  ), t.inline && r.push(
    typeof t.inline == "boolean" ? Ea() : Ea(t.inline)
  ), r.push(hd({ element: n.arrowRef, padding: n.arrowOffset })), (t.size || n.width === "target") && r.push(
    pb({
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
function qb(n) {
  const [e, t] = Fn({
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
  }, i = gs({
    strategy: n.strategy,
    placement: n.position,
    middleware: Kb(n, () => i)
  });
  return Id({
    opened: n.opened,
    position: n.position,
    positionDependencies: n.positionDependencies || [],
    floating: i
  }), mn(() => {
    var a;
    (a = n.onPositionChange) == null || a.call(n, i.placement);
  }, [i.placement]), mn(() => {
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
const Vb = {
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
  zIndex: Ka("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Gb = (n, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : Ct(e),
    "--popover-shadow": Su(t)
  }
});
function wn(n) {
  var We, In, Vn, Ye, qt, Gn;
  const e = J("Popover", Vb, n), {
    children: t,
    position: r,
    offset: o,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    transitionProps: c,
    width: l,
    middlewares: u,
    withArrow: f,
    arrowSize: d,
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
    clickOutsideEvents: _,
    trapFocus: T,
    onClose: M,
    onOpen: B,
    onChange: z,
    zIndex: V,
    radius: Z,
    shadow: D,
    id: j,
    defaultOpened: R,
    __staticSelector: A,
    withRoles: P,
    disabled: $,
    returnFocus: H,
    variant: re,
    keepMounted: fe,
    vars: _e,
    floatingStrategy: Be,
    ...pe
  } = e, Oe = be({
    name: A,
    props: e,
    classes: Sd,
    classNames: b,
    styles: C,
    unstyled: m,
    rootSelector: "dropdown",
    vars: _e,
    varsResolver: Gb
  }), ze = ue(null), [It, Re] = te(null), [Tt, En] = te(null), { dir: cn } = ii(), _t = rn(j), ke = qb({
    middlewares: u,
    width: l,
    position: vd(cn, r),
    offset: typeof o == "number" ? o + (f ? d / 2 : 0) : o,
    arrowRef: ze,
    arrowOffset: h,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    defaultOpened: R,
    onChange: z,
    onOpen: B,
    onClose: M,
    strategy: Be
  });
  wm(() => v && ke.onClose(), _, [
    It,
    Tt
  ]);
  const Kt = me(
    (gt) => {
      Re(gt), ke.floating.refs.setReference(gt);
    },
    [ke.floating.refs.setReference]
  ), qn = me(
    (gt) => {
      En(gt), ke.floating.refs.setFloating(gt);
    },
    [ke.floating.refs.setFloating]
  );
  return /* @__PURE__ */ y.jsx(
    Lb,
    {
      value: {
        returnFocus: H,
        disabled: $,
        controlled: ke.controlled,
        reference: Kt,
        floating: qn,
        x: ke.floating.x,
        y: ke.floating.y,
        arrowX: (Vn = (In = (We = ke.floating) == null ? void 0 : We.middlewareData) == null ? void 0 : In.arrow) == null ? void 0 : Vn.x,
        arrowY: (Gn = (qt = (Ye = ke.floating) == null ? void 0 : Ye.middlewareData) == null ? void 0 : qt.arrow) == null ? void 0 : Gn.y,
        opened: ke.opened,
        arrowRef: ze,
        transitionProps: c,
        width: l,
        withArrow: f,
        arrowSize: d,
        arrowOffset: h,
        arrowRadius: p,
        arrowPosition: g,
        placement: ke.floating.placement,
        trapFocus: T,
        withinPortal: w,
        portalProps: S,
        zIndex: V,
        radius: Z,
        shadow: D,
        closeOnEscape: E,
        onClose: ke.onClose,
        onToggle: ke.onToggle,
        getTargetId: () => `${_t}-target`,
        getDropdownId: () => `${_t}-dropdown`,
        withRoles: P,
        targetProps: pe,
        __staticSelector: A,
        classNames: b,
        styles: C,
        unstyled: m,
        variant: re,
        keepMounted: fe,
        getStyles: Oe,
        floatingStrategy: Be
      },
      children: t
    }
  );
}
wn.Target = Ed;
wn.Dropdown = vs;
wn.displayName = "@mantine/core/Popover";
wn.extend = (n) => n;
var Nt = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const Wb = Ce(({ className: n, ...e }, t) => /* @__PURE__ */ y.jsxs(ne, { component: "span", className: zt(Nt.barsLoader, n), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: Nt.bar }),
  /* @__PURE__ */ y.jsx("span", { className: Nt.bar }),
  /* @__PURE__ */ y.jsx("span", { className: Nt.bar })
] })), Yb = Ce(({ className: n, ...e }, t) => /* @__PURE__ */ y.jsxs(ne, { component: "span", className: zt(Nt.dotsLoader, n), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: Nt.dot }),
  /* @__PURE__ */ y.jsx("span", { className: Nt.dot }),
  /* @__PURE__ */ y.jsx("span", { className: Nt.dot })
] })), Qb = Ce(({ className: n, ...e }, t) => /* @__PURE__ */ y.jsx(ne, { component: "span", className: zt(Nt.ovalLoader, n), ...e, ref: t })), Td = {
  bars: Wb,
  oval: Qb,
  dots: Yb
}, Jb = {
  loaders: Td,
  type: "oval"
}, Xb = (n, { size: e, color: t }) => ({
  root: {
    "--loader-size": De(e, "loader-size"),
    "--loader-color": t ? Bt(t, n) : void 0
  }
}), fi = le((n, e) => {
  const t = J("Loader", Jb, n), {
    size: r,
    color: o,
    type: i,
    vars: a,
    className: s,
    style: c,
    classNames: l,
    styles: u,
    unstyled: f,
    loaders: d,
    variant: h,
    children: p,
    ...g
  } = t, m = be({
    name: "Loader",
    props: t,
    classes: Nt,
    className: s,
    style: c,
    classNames: l,
    styles: u,
    unstyled: f,
    vars: a,
    varsResolver: Xb
  });
  return p ? /* @__PURE__ */ y.jsx(ne, { ...m("root"), ref: e, ...g, children: p }) : /* @__PURE__ */ y.jsx(
    ne,
    {
      ...m("root"),
      ref: e,
      component: d[i],
      variant: h,
      size: r,
      ...g
    }
  );
});
fi.defaultLoaders = Td;
fi.classes = Nt;
fi.displayName = "@mantine/core/Loader";
const _d = Ce(
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
_d.displayName = "@mantine/core/CloseIcon";
var kd = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Zb = {
  variant: "subtle"
}, eC = (n, { size: e, radius: t, iconSize: r }) => ({
  root: {
    "--cb-size": De(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : Ct(t),
    "--cb-icon-size": N(r)
  }
}), wr = $n((n, e) => {
  const t = J("CloseButton", Zb, n), {
    iconSize: r,
    children: o,
    vars: i,
    radius: a,
    className: s,
    classNames: c,
    style: l,
    styles: u,
    unstyled: f,
    "data-disabled": d,
    disabled: h,
    variant: p,
    icon: g,
    mod: m,
    ...b
  } = t, C = be({
    name: "CloseButton",
    props: t,
    className: s,
    style: l,
    classes: kd,
    classNames: c,
    styles: u,
    unstyled: f,
    vars: i,
    varsResolver: eC
  });
  return /* @__PURE__ */ y.jsxs(
    vr,
    {
      ref: e,
      ...b,
      unstyled: f,
      variant: p,
      disabled: h,
      mod: [{ disabled: h || d }, m],
      ...C("root", { variant: p, active: !h && !d }),
      children: [
        g || /* @__PURE__ */ y.jsx(_d, {}),
        o
      ]
    }
  );
});
wr.classes = kd;
wr.displayName = "@mantine/core/CloseButton";
function tC(n) {
  return Yi.toArray(n).filter(Boolean);
}
var Ad = { root: "m_4081bf90" };
const nC = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, rC = (n, { grow: e, preventGrowOverflow: t, gap: r, align: o, justify: i, wrap: a }, { childWidth: s }) => ({
  root: {
    "--group-child-width": e && t ? s : void 0,
    "--group-gap": qa(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": a
  }
}), Gr = le((n, e) => {
  const t = J("Group", nC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    children: c,
    gap: l,
    align: u,
    justify: f,
    wrap: d,
    grow: h,
    preventGrowOverflow: p,
    vars: g,
    variant: m,
    __size: b,
    mod: C,
    ...v
  } = t, w = tC(c), S = w.length, E = qa(l ?? "md"), T = { childWidth: `calc(${100 / S}% - (${E} - ${E} / ${S}))` }, M = be({
    name: "Group",
    props: t,
    stylesCtx: T,
    className: o,
    style: i,
    classes: Ad,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: g,
    varsResolver: rC
  });
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ...M("root"),
      ref: e,
      variant: m,
      mod: [{ grow: h }, C],
      size: b,
      ...v,
      children: w
    }
  );
});
Gr.classes = Ad;
Gr.displayName = "@mantine/core/Group";
const [oC, oo] = wu({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var St = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const vl = {}, iC = (n, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${dt(e)} - ${N(2)})`
  }
}), hi = le((n, e) => {
  const t = J("InputDescription", vl, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: f = !0,
    variant: d,
    ...h
  } = J("InputDescription", vl, t), p = oo(), g = be({
    name: ["InputWrapper", u],
    props: t,
    classes: St,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "description",
    vars: c,
    varsResolver: iC
  }), m = f && (p == null ? void 0 : p.getStyles) || g;
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      component: "p",
      ref: e,
      variant: d,
      size: l,
      ...m("description", p != null && p.getStyles ? { className: o, style: i } : void 0),
      ...h
    }
  );
});
hi.classes = St;
hi.displayName = "@mantine/core/InputDescription";
const aC = {}, sC = (n, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${dt(e)} - ${N(2)})`
  }
}), pi = le((n, e) => {
  const t = J("InputError", aC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: f = !0,
    variant: d,
    ...h
  } = t, p = be({
    name: ["InputWrapper", u],
    props: t,
    classes: St,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "error",
    vars: c,
    varsResolver: sC
  }), g = oo(), m = f && (g == null ? void 0 : g.getStyles) || p;
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      component: "p",
      ref: e,
      variant: d,
      size: l,
      ...m("error", g != null && g.getStyles ? { className: o, style: i } : void 0),
      ...h
    }
  );
});
pi.classes = St;
pi.displayName = "@mantine/core/InputError";
const bl = {
  labelElement: "label"
}, cC = (n, { size: e }) => ({
  label: {
    "--input-label-size": dt(e),
    "--input-asterisk-color": void 0
  }
}), gi = le((n, e) => {
  const t = J("InputLabel", bl, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    labelElement: l,
    size: u,
    required: f,
    htmlFor: d,
    onMouseDown: h,
    children: p,
    __staticSelector: g,
    variant: m,
    mod: b,
    ...C
  } = J("InputLabel", bl, t), v = be({
    name: ["InputWrapper", g],
    props: t,
    classes: St,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "label",
    vars: c,
    varsResolver: cC
  }), w = oo(), S = (w == null ? void 0 : w.getStyles) || v;
  return /* @__PURE__ */ y.jsxs(
    ne,
    {
      ...S("label", w != null && w.getStyles ? { className: o, style: i } : void 0),
      component: l,
      variant: m,
      size: u,
      ref: e,
      htmlFor: l === "label" ? d : void 0,
      mod: [{ required: f }, b],
      onMouseDown: (E) => {
        h == null || h(E), !E.defaultPrevented && E.detail > 1 && E.preventDefault();
      },
      ...C,
      children: [
        p,
        f && /* @__PURE__ */ y.jsx("span", { ...S("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
gi.classes = St;
gi.displayName = "@mantine/core/InputLabel";
const Cl = {}, bs = le((n, e) => {
  const t = J("InputPlaceholder", Cl, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: f,
    mod: d,
    ...h
  } = J("InputPlaceholder", Cl, t), p = be({
    name: ["InputPlaceholder", l],
    props: t,
    classes: St,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ...p("placeholder"),
      mod: [{ error: !!f }, d],
      component: "span",
      variant: u,
      ref: e,
      ...h
    }
  );
});
bs.classes = St;
bs.displayName = "@mantine/core/InputPlaceholder";
function lC(n, { hasDescription: e, hasError: t }) {
  const r = n.findIndex((c) => c === "input"), o = n.slice(0, r), i = n.slice(r + 1), a = e && o.includes("description") || t && o.includes("error");
  return { offsetBottom: e && i.includes("description") || t && i.includes("error"), offsetTop: a };
}
const uC = {
  labelElement: "label",
  inputContainer: (n) => n,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, dC = (n, { size: e }) => ({
  label: {
    "--input-label-size": dt(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${dt(e)} - ${N(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${dt(e)} - ${N(2)})`
  }
}), Cs = le((n, e) => {
  const t = J("InputWrapper", uC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    variant: u,
    __staticSelector: f,
    inputContainer: d,
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
    id: _,
    required: T,
    __stylesApiProps: M,
    mod: B,
    ...z
  } = t, V = be({
    name: ["InputWrapper", f],
    props: M || t,
    classes: St,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: dC
  }), Z = {
    size: l,
    variant: u,
    __staticSelector: f
  }, D = rn(_), j = typeof E == "boolean" ? E : T, R = (v == null ? void 0 : v.id) || `${D}-error`, A = (C == null ? void 0 : C.id) || `${D}-description`, P = D, $ = !!g && typeof g != "boolean", H = !!m, re = `${$ ? R : ""} ${H ? A : ""}`, fe = re.trim().length > 0 ? re.trim() : void 0, _e = (b == null ? void 0 : b.id) || `${D}-label`, Be = p && /* @__PURE__ */ y.jsx(
    gi,
    {
      labelElement: w,
      id: _e,
      htmlFor: P,
      required: j,
      ...Z,
      ...b,
      children: p
    },
    "label"
  ), pe = H && /* @__PURE__ */ y.jsx(
    hi,
    {
      ...C,
      ...Z,
      size: (C == null ? void 0 : C.size) || Z.size,
      id: (C == null ? void 0 : C.id) || A,
      children: m
    },
    "description"
  ), Oe = /* @__PURE__ */ y.jsx(Vl, { children: d(S) }, "input"), ze = $ && /* @__PURE__ */ Qi(
    pi,
    {
      ...v,
      ...Z,
      size: (v == null ? void 0 : v.size) || Z.size,
      key: "error",
      id: (v == null ? void 0 : v.id) || R
    },
    g
  ), It = h.map((Re) => {
    switch (Re) {
      case "label":
        return Be;
      case "input":
        return Oe;
      case "description":
        return pe;
      case "error":
        return ze;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ y.jsx(
    oC,
    {
      value: {
        getStyles: V,
        describedBy: fe,
        inputId: P,
        labelId: _e,
        ...lC(h, { hasDescription: H, hasError: $ })
      },
      children: /* @__PURE__ */ y.jsx(
        ne,
        {
          ref: e,
          variant: u,
          size: l,
          mod: [{ error: !!g }, B],
          ...V("root"),
          ...z,
          children: It
        }
      )
    }
  );
});
Cs.classes = St;
Cs.displayName = "@mantine/core/InputWrapper";
const fC = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, hC = (n, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": De(e.size, "input-height"),
    "--input-fz": dt(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : Ct(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? N(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? N(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? De(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), je = $n((n, e) => {
  const t = J("Input", fC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    required: c,
    __staticSelector: l,
    __stylesApiProps: u,
    size: f,
    wrapperProps: d,
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
    variant: _,
    vars: T,
    pointer: M,
    multiline: B,
    radius: z,
    id: V,
    withAria: Z,
    withErrorStyles: D,
    mod: j,
    inputSize: R,
    ...A
  } = t, { styleProps: P, rest: $ } = oi(A), H = oo(), re = { offsetBottom: H == null ? void 0 : H.offsetBottom, offsetTop: H == null ? void 0 : H.offsetTop }, fe = be({
    name: ["Input", l],
    props: u || t,
    classes: St,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    stylesCtx: re,
    rootSelector: "wrapper",
    vars: T,
    varsResolver: hC
  }), _e = Z ? {
    required: c,
    disabled: p,
    "aria-invalid": !!h,
    "aria-describedby": H == null ? void 0 : H.describedBy,
    id: (H == null ? void 0 : H.inputId) || V
  } : {};
  return /* @__PURE__ */ y.jsxs(
    ne,
    {
      ...fe("wrapper"),
      ...P,
      ...d,
      mod: [
        {
          error: !!h && D,
          pointer: M,
          disabled: p,
          multiline: B,
          "data-with-right-section": !!C,
          "data-with-left-section": !!g
        },
        j
      ],
      variant: _,
      size: f,
      children: [
        g && /* @__PURE__ */ y.jsx(
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
        /* @__PURE__ */ y.jsx(
          ne,
          {
            component: "input",
            ...$,
            ..._e,
            ref: e,
            required: c,
            mod: { disabled: p, error: !!h && D },
            variant: _,
            __size: R,
            ...fe("input")
          }
        ),
        C && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...v,
            "data-position": "right",
            ...fe("section", {
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
je.classes = St;
je.Wrapper = Cs;
je.Label = gi;
je.Error = pi;
je.Description = hi;
je.Placeholder = bs;
je.displayName = "@mantine/core/Input";
function pC(n, e, t) {
  const r = J(n, e, t), {
    label: o,
    description: i,
    error: a,
    required: s,
    classNames: c,
    styles: l,
    className: u,
    unstyled: f,
    __staticSelector: d,
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
    withAsterisk: _,
    variant: T,
    vars: M,
    mod: B,
    ...z
  } = r, { styleProps: V, rest: Z } = oi(z), D = {
    label: o,
    description: i,
    error: a,
    required: s,
    classNames: c,
    className: u,
    __staticSelector: d,
    __stylesApiProps: h || r,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    unstyled: f,
    styles: l,
    size: v,
    style: w,
    inputContainer: S,
    inputWrapperOrder: E,
    withAsterisk: _,
    variant: T,
    id: C,
    mod: B,
    ...b
  };
  return {
    ...Z,
    classNames: c,
    styles: l,
    unstyled: f,
    wrapperProps: { ...D, ...V },
    inputProps: {
      required: s,
      classNames: c,
      styles: l,
      unstyled: f,
      size: v,
      __staticSelector: d,
      __stylesApiProps: h || r,
      error: a,
      variant: T,
      id: C
    }
  };
}
const gC = {
  __staticSelector: "InputBase",
  withAria: !0
}, an = $n((n, e) => {
  const { inputProps: t, wrapperProps: r, ...o } = pC("InputBase", gC, n);
  return /* @__PURE__ */ y.jsx(je.Wrapper, { ...r, children: /* @__PURE__ */ y.jsx(je, { ...t, ...o, ref: e }) });
});
an.classes = { ...je.classes, ...je.Wrapper.classes };
an.displayName = "@mantine/core/InputBase";
const [mC, ws] = yr(
  "Accordion component was not found in the tree"
);
function Ss({ style: n, size: e = 16, ...t }) {
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...n, width: N(e), height: N(e), display: "block" },
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
Ss.displayName = "@mantine/core/AccordionChevron";
const [yC, Rd] = yr("Accordion.Item component was not found in the tree");
var io = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const vC = {}, Es = le((n, e) => {
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
    children: f,
    disabled: d,
    mod: h,
    ...p
  } = J("AccordionControl", vC, n), { value: g } = Rd(), m = ws(), b = m.isItemActive(g), C = typeof m.order == "number", v = `h${m.order}`, w = /* @__PURE__ */ y.jsxs(
    vr,
    {
      ...p,
      ...m.getStyles("control", { className: r, classNames: t, style: o, styles: i, variant: m.variant }),
      unstyled: m.unstyled,
      mod: [
        "accordion-control",
        { active: b, "chevron-position": m.chevronPosition, disabled: d },
        h
      ],
      ref: e,
      onClick: (S) => {
        l == null || l(S), m.onChange(g);
      },
      type: "button",
      disabled: d,
      "aria-expanded": b,
      "aria-controls": m.getRegionId(g),
      id: m.getControlId(g),
      onKeyDown: mm({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: m.loop,
        orientation: "vertical",
        onKeyDown: u
      }),
      children: [
        /* @__PURE__ */ y.jsx(
          ne,
          {
            component: "span",
            mod: { rotate: !m.disableChevronRotation && b, position: m.chevronPosition },
            ...m.getStyles("chevron", { classNames: t, styles: i }),
            children: s || m.chevron
          }
        ),
        /* @__PURE__ */ y.jsx("span", { ...m.getStyles("label", { classNames: t, styles: i }), children: f }),
        c && /* @__PURE__ */ y.jsx(
          ne,
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
Es.displayName = "@mantine/core/AccordionControl";
Es.classes = io;
const bC = {}, Is = le((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, value: s, mod: c, ...l } = J(
    "AccordionItem",
    bC,
    n
  ), u = ws();
  return /* @__PURE__ */ y.jsx(yC, { value: { value: s }, children: /* @__PURE__ */ y.jsx(
    ne,
    {
      ref: e,
      mod: [{ active: u.isItemActive(s) }, c],
      ...u.getStyles("item", { className: r, classNames: t, styles: i, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
Is.displayName = "@mantine/core/AccordionItem";
Is.classes = io;
const CC = {}, Ts = le((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, children: s, ...c } = J(
    "AccordionPanel",
    CC,
    n
  ), { value: l } = Rd(), u = ws();
  return /* @__PURE__ */ y.jsx(
    zu,
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
Ts.displayName = "@mantine/core/AccordionPanel";
Ts.classes = io;
const wC = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ y.jsx(Ss, {})
}, SC = (n, { transitionDuration: e, chevronSize: t, radius: r }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : N(t),
    "--accordion-radius": r === void 0 ? void 0 : Ct(r)
  }
});
function xe(n) {
  const e = J("Accordion", wC, n), {
    classNames: t,
    className: r,
    style: o,
    styles: i,
    unstyled: a,
    vars: s,
    children: c,
    multiple: l,
    value: u,
    defaultValue: f,
    onChange: d,
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
    ..._
  } = e, T = rn(h), [M, B] = Fn({
    value: u,
    defaultValue: f,
    finalValue: l ? [] : null,
    onChange: d
  }), z = (D) => Array.isArray(M) ? M.includes(D) : D === M, V = (D) => {
    const j = Array.isArray(M) ? M.includes(D) ? M.filter((R) => R !== D) : [...M, D] : D === M ? null : D;
    B(j);
  }, Z = be({
    name: "Accordion",
    classes: io,
    props: e,
    className: r,
    style: o,
    classNames: t,
    styles: i,
    unstyled: a,
    vars: s,
    varsResolver: SC
  });
  return /* @__PURE__ */ y.jsx(
    mC,
    {
      value: {
        isItemActive: z,
        onChange: V,
        getControlId: Bc(
          `${T}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Bc(
          `${T}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: m,
        chevronPosition: b,
        order: v,
        chevron: w,
        loop: p,
        getStyles: Z,
        variant: S,
        unstyled: a
      },
      children: /* @__PURE__ */ y.jsx(ne, { ...Z("root"), id: T, ..._, variant: S, "data-accordion": !0, children: c })
    }
  );
}
const EC = (n) => n;
xe.extend = EC;
xe.classes = io;
xe.displayName = "@mantine/core/Accordion";
xe.Item = Is;
xe.Panel = Ts;
xe.Control = Es;
xe.Chevron = Ss;
var Pd = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const IC = {}, TC = (n, { radius: e, color: t, variant: r, autoContrast: o }) => {
  const i = n.variantColorResolver({
    color: t || n.primaryColor,
    theme: n,
    variant: r || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : Ct(e),
      "--alert-bg": t || r ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": t || r ? i.border : void 0
    }
  };
}, _s = le((n, e) => {
  const t = J("Alert", IC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    radius: l,
    color: u,
    title: f,
    children: d,
    id: h,
    icon: p,
    withCloseButton: g,
    onClose: m,
    closeButtonLabel: b,
    variant: C,
    autoContrast: v,
    ...w
  } = t, S = be({
    name: "Alert",
    classes: Pd,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: TC
  }), E = rn(h), _ = f && `${E}-title` || void 0, T = `${E}-body`;
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      id: E,
      ...S("root", { variant: C }),
      variant: C,
      ref: e,
      ...w,
      role: "alert",
      "aria-describedby": T,
      "aria-labelledby": _,
      children: /* @__PURE__ */ y.jsxs("div", { ...S("wrapper"), children: [
        p && /* @__PURE__ */ y.jsx("div", { ...S("icon"), children: p }),
        /* @__PURE__ */ y.jsxs("div", { ...S("body"), children: [
          f && /* @__PURE__ */ y.jsx("div", { ...S("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ y.jsx("span", { id: _, ...S("label"), children: f }) }),
          d && /* @__PURE__ */ y.jsx("div", { id: T, ...S("message"), "data-variant": C, children: d })
        ] }),
        g && /* @__PURE__ */ y.jsx(
          wr,
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
_s.classes = Pd;
_s.displayName = "@mantine/core/Alert";
var Nd = { root: "m_b6d8b162" };
function _C(n) {
  if (n === "start")
    return "start";
  if (n === "end" || n)
    return "end";
}
const kC = {
  inherit: !1
}, AC = (n, { variant: e, lineClamp: t, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": dt(o),
    "--text-lh": Cm(o),
    "--text-gradient": e === "gradient" ? ga(r, n) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": i ? Bt(i, n) : void 0
  }
}), $o = $n((n, e) => {
  const t = J("Text", kC, n), {
    lineClamp: r,
    truncate: o,
    inline: i,
    inherit: a,
    gradient: s,
    span: c,
    __staticSelector: l,
    vars: u,
    className: f,
    style: d,
    classNames: h,
    styles: p,
    unstyled: g,
    variant: m,
    mod: b,
    size: C,
    ...v
  } = t, w = be({
    name: ["Text", l],
    props: t,
    classes: Nd,
    className: f,
    style: d,
    classNames: h,
    styles: p,
    unstyled: g,
    vars: u,
    varsResolver: AC
  });
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ...w("root", { focusable: !0 }),
      ref: e,
      component: c ? "span" : "p",
      variant: m,
      mod: [
        {
          "data-truncate": _C(o),
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
$o.classes = Nd;
$o.displayName = "@mantine/core/Text";
function Md(n) {
  return typeof n == "string" ? { value: n, label: n } : "value" in n && !("label" in n) ? { value: n.value, label: n.value, disabled: n.disabled } : typeof n == "number" ? { value: n.toString(), label: n.toString() } : "group" in n ? {
    group: n.group,
    items: n.items.map((e) => Md(e))
  } : n;
}
function Od(n) {
  return n ? n.map((e) => Md(e)) : [];
}
function ks(n) {
  return n.reduce((e, t) => "group" in t ? { ...e, ...ks(t.items) } : (e[t.value] = t, e), {});
}
var ot = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const RC = {
  error: null
}, PC = (n, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": De(e, "combobox-chevron-size")
  }
}), As = le((n, e) => {
  const t = J("ComboboxChevron", RC, n), { size: r, error: o, style: i, className: a, classNames: s, styles: c, unstyled: l, vars: u, mod: f, ...d } = t, h = be({
    name: "ComboboxChevron",
    classes: ot,
    props: t,
    style: i,
    className: a,
    classNames: s,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: PC,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      component: "svg",
      ...d,
      ...h("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, f],
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
As.classes = ot;
As.displayName = "@mantine/core/ComboboxChevron";
const [NC, Et] = yr(
  "Combobox component was not found in tree"
), xd = Ce(
  ({ size: n, onMouseDown: e, onClick: t, onClear: r, ...o }, i) => /* @__PURE__ */ y.jsx(
    wr,
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
xd.displayName = "@mantine/core/ComboboxClearButton";
const MC = {}, Rs = le((n, e) => {
  const { classNames: t, styles: r, className: o, style: i, hidden: a, ...s } = J(
    "ComboboxDropdown",
    MC,
    n
  ), c = Et();
  return /* @__PURE__ */ y.jsx(
    wn.Dropdown,
    {
      ...s,
      ref: e,
      role: "presentation",
      "data-hidden": a || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: t, styles: r })
    }
  );
});
Rs.classes = ot;
Rs.displayName = "@mantine/core/ComboboxDropdown";
const OC = {
  refProp: "ref"
}, Dd = le((n, e) => {
  const { children: t, refProp: r } = J("ComboboxDropdownTarget", OC, n);
  if (Et(), !Hn(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ y.jsx(wn.Target, { ref: e, refProp: r, children: t });
});
Dd.displayName = "@mantine/core/ComboboxDropdownTarget";
const xC = {}, Ps = le((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, ...s } = J(
    "ComboboxEmpty",
    xC,
    n
  ), c = Et();
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ref: e,
      ...c.getStyles("empty", { className: r, classNames: t, styles: i, style: o }),
      ...s
    }
  );
});
Ps.classes = ot;
Ps.displayName = "@mantine/core/ComboboxEmpty";
function Ns({
  onKeyDown: n,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: i
}) {
  const a = Et(), [s, c] = te(null), l = (f) => {
    if (n == null || n(f), !a.readOnly && e) {
      if (f.nativeEvent.isComposing)
        return;
      if (f.nativeEvent.code === "ArrowDown" && (f.preventDefault(), a.store.dropdownOpened ? c(a.store.selectNextOption()) : (a.store.openDropdown("keyboard"), c(a.store.selectActiveOption()))), f.nativeEvent.code === "ArrowUp" && (f.preventDefault(), a.store.dropdownOpened ? c(a.store.selectPreviousOption()) : (a.store.openDropdown("keyboard"), c(a.store.selectActiveOption()))), f.nativeEvent.code === "Enter" || f.nativeEvent.code === "NumpadEnter") {
        if (f.nativeEvent.keyCode === 229)
          return;
        const d = a.store.getSelectedOptionIndex();
        a.store.dropdownOpened && d !== -1 ? (f.preventDefault(), a.store.clickSelectedOption()) : o === "button" && (f.preventDefault(), a.store.openDropdown("keyboard"));
      }
      f.nativeEvent.code === "Escape" && a.store.closeDropdown("keyboard"), f.nativeEvent.code === "Space" && o === "button" && (f.preventDefault(), a.store.toggleDropdown("keyboard"));
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
const DC = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Ld = le((n, e) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = J("ComboboxEventsTarget", DC, n);
  if (!Hn(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = Et(), f = Ns({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  });
  return gr(t, {
    ...f,
    ...l,
    [r]: at(e, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
Ld.displayName = "@mantine/core/ComboboxEventsTarget";
const LC = {}, Ms = le((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, ...s } = J(
    "ComboboxFooter",
    LC,
    n
  ), c = Et();
  return /* @__PURE__ */ y.jsx(
    ne,
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
Ms.classes = ot;
Ms.displayName = "@mantine/core/ComboboxFooter";
const FC = {}, Os = le((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, children: s, label: c, ...l } = J(
    "ComboboxGroup",
    FC,
    n
  ), u = Et();
  return /* @__PURE__ */ y.jsxs(
    ne,
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
Os.classes = ot;
Os.displayName = "@mantine/core/ComboboxGroup";
const jC = {}, xs = le((n, e) => {
  const { classNames: t, className: r, style: o, styles: i, vars: a, ...s } = J(
    "ComboboxHeader",
    jC,
    n
  ), c = Et();
  return /* @__PURE__ */ y.jsx(
    ne,
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
xs.classes = ot;
xs.displayName = "@mantine/core/ComboboxHeader";
function Fd({
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
Fd.displayName = "@mantine/core/ComboboxHiddenInput";
const UC = {}, Ds = le((n, e) => {
  const t = J("ComboboxOption", UC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    vars: s,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: f,
    onMouseOver: d,
    disabled: h,
    selected: p,
    mod: g,
    ...m
  } = t, b = Et(), C = Gl(), v = l || C;
  return /* @__PURE__ */ y.jsx(
    ne,
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
        w.preventDefault(), f == null || f(w);
      },
      onMouseOver: (w) => {
        b.resetSelectionOnOptionHover && b.store.resetSelectedOption(), d == null || d(w);
      }
    }
  );
});
Ds.classes = ot;
Ds.displayName = "@mantine/core/ComboboxOption";
const HC = {}, Ls = le((n, e) => {
  const t = J("ComboboxOptions", HC, n), { classNames: r, className: o, style: i, styles: a, id: s, onMouseDown: c, labelledBy: l, ...u } = t, f = Et(), d = rn(s);
  return X(() => {
    f.store.setListId(d);
  }, [d]), /* @__PURE__ */ y.jsx(
    ne,
    {
      ref: e,
      ...f.getStyles("options", { className: o, style: i, classNames: r, styles: a }),
      ...u,
      id: d,
      role: "listbox",
      "aria-labelledby": l,
      onMouseDown: (h) => {
        h.preventDefault(), c == null || c(h);
      }
    }
  );
});
Ls.classes = ot;
Ls.displayName = "@mantine/core/ComboboxOptions";
const BC = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Fs = le((n, e) => {
  const t = J("ComboboxSearch", BC, n), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: a,
    withAriaAttributes: s,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...f
  } = t, d = Et(), h = d.getStyles("search"), p = Ns({
    targetType: "input",
    withAriaAttributes: s,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c,
    autoComplete: "off"
  });
  return /* @__PURE__ */ y.jsx(
    je,
    {
      ref: at(e, d.store.searchRef),
      classNames: [{ input: h.className }, r],
      styles: [{ input: h.style }, o],
      size: u || d.size,
      ...p,
      ...f,
      __staticSelector: "Combobox"
    }
  );
});
Fs.classes = ot;
Fs.displayName = "@mantine/core/ComboboxSearch";
const zC = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, jd = le((n, e) => {
  const {
    children: t,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = J("ComboboxTarget", zC, n);
  if (!Hn(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = Et(), f = Ns({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  }), d = gr(t, {
    ...f,
    ...l
  });
  return /* @__PURE__ */ y.jsx(wn.Target, { ref: at(e, u.store.targetRef), children: d });
});
jd.displayName = "@mantine/core/ComboboxTarget";
function $C(n, e, t) {
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
function KC(n, e, t) {
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
function qC(n) {
  for (let e = 0; e < n.length; e += 1)
    if (!n[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function mi({
  defaultOpened: n,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: a = "instant"
} = {}) {
  const [s, c] = Fn({
    value: e,
    defaultValue: n,
    finalValue: !1,
    onChange: t
  }), l = ue(null), u = ue(-1), f = ue(null), d = ue(null), h = ue(-1), p = ue(-1), g = ue(-1), m = me(
    (R = "unknown") => {
      s || (c(!0), o == null || o(R));
    },
    [c, o, s]
  ), b = me(
    (R = "unknown") => {
      s && (c(!1), r == null || r(R));
    },
    [c, r, s]
  ), C = me(
    (R = "unknown") => {
      s ? b(R) : m(R);
    },
    [b, m, s]
  ), v = me(() => {
    const R = document.querySelector(`#${l.current} [data-combobox-selected]`);
    R == null || R.removeAttribute("data-combobox-selected"), R == null || R.removeAttribute("aria-selected");
  }, []), w = me(
    (R) => {
      const A = document.getElementById(l.current), P = A == null ? void 0 : A.querySelectorAll("[data-combobox-option]");
      if (!P)
        return null;
      const $ = R >= P.length ? 0 : R < 0 ? P.length - 1 : R;
      return u.current = $, P != null && P[$] && !P[$].hasAttribute("data-combobox-disabled") ? (v(), P[$].setAttribute("data-combobox-selected", "true"), P[$].setAttribute("aria-selected", "true"), P[$].scrollIntoView({ block: "nearest", behavior: a }), P[$].id) : null;
    },
    [a, v]
  ), S = me(() => {
    const R = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (R) {
      const A = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), P = Array.from(A).findIndex(($) => $ === R);
      return w(P);
    }
    return w(0);
  }, [w]), E = me(
    () => w(
      KC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), _ = me(
    () => w(
      $C(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), T = me(
    () => w(
      qC(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
  ), M = me(
    (R = "selected", A) => {
      g.current = window.setTimeout(() => {
        var H;
        const P = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), $ = Array.from(P).findIndex(
          (re) => re.hasAttribute(`data-combobox-${R}`)
        );
        u.current = $, A != null && A.scrollIntoView && ((H = P[$]) == null || H.scrollIntoView({ block: "nearest", behavior: a }));
      }, 0);
    },
    []
  ), B = me(() => {
    u.current = -1, v();
  }, [v]), z = me(() => {
    const R = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), A = R == null ? void 0 : R[u.current];
    A == null || A.click();
  }, []), V = me((R) => {
    l.current = R;
  }, []), Z = me(() => {
    h.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), D = me(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), j = me(() => u.current, []);
  return X(
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
    getSelectedOptionIndex: j,
    selectOption: w,
    selectFirstOption: T,
    selectActiveOption: S,
    selectNextOption: E,
    selectPreviousOption: _,
    resetSelectedOption: B,
    updateSelectedOptionIndex: M,
    listId: l.current,
    setListId: V,
    clickSelectedOption: z,
    searchRef: f,
    focusSearchInput: Z,
    targetRef: d,
    focusTarget: D
  };
}
const VC = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, GC = (n, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": dt(e),
    "--combobox-option-padding": De(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : N(t),
    "--combobox-option-fz": dt(e),
    "--combobox-option-padding": De(e, "combobox-option-padding")
  }
});
function de(n) {
  const e = J("Combobox", VC, n), {
    classNames: t,
    styles: r,
    unstyled: o,
    children: i,
    store: a,
    vars: s,
    onOptionSubmit: c,
    onClose: l,
    size: u,
    dropdownPadding: f,
    resetSelectionOnOptionHover: d,
    __staticSelector: h,
    readOnly: p,
    ...g
  } = e, m = mi(), b = a || m, C = be({
    name: h || "Combobox",
    classes: ot,
    props: e,
    classNames: t,
    styles: r,
    unstyled: o,
    vars: s,
    varsResolver: GC
  }), v = () => {
    l == null || l(), b.closeDropdown();
  };
  return /* @__PURE__ */ y.jsx(
    NC,
    {
      value: {
        getStyles: C,
        store: b,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: d,
        readOnly: p
      },
      children: /* @__PURE__ */ y.jsx(
        wn,
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
const WC = (n) => n;
de.extend = WC;
de.classes = ot;
de.displayName = "@mantine/core/Combobox";
de.Target = jd;
de.Dropdown = Rs;
de.Options = Ls;
de.Option = Ds;
de.Search = Fs;
de.Empty = Ps;
de.Chevron = As;
de.Footer = Ms;
de.Header = xs;
de.EventsTarget = Ld;
de.DropdownTarget = Dd;
de.Group = Os;
de.ClearButton = xd;
de.HiddenInput = Fd;
var Ud = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const YC = Ud, Hd = Ce(
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
    error: f,
    size: d,
    labelPosition: h = "left",
    bodyElement: p = "div",
    labelElement: g = "label",
    variant: m,
    style: b,
    vars: C,
    mod: v,
    ...w
  }, S) => {
    const E = be({
      name: n,
      props: e,
      className: t,
      style: b,
      classes: Ud,
      classNames: r,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ y.jsx(
      ne,
      {
        ...E("root"),
        ref: S,
        __vars: {
          "--label-fz": dt(d),
          "--label-lh": De(d, "label-lh")
        },
        mod: [{ "label-position": h }, v],
        variant: m,
        size: d,
        ...w,
        children: /* @__PURE__ */ y.jsxs(
          ne,
          {
            component: p,
            htmlFor: p === "label" ? l : void 0,
            ...E("body"),
            children: [
              a,
              /* @__PURE__ */ y.jsxs("div", { ...E("labelWrapper"), "data-disabled": u || void 0, children: [
                s && /* @__PURE__ */ y.jsx(
                  ne,
                  {
                    component: g,
                    htmlFor: g === "label" ? l : void 0,
                    ...E("label"),
                    "data-disabled": u || void 0,
                    children: s
                  }
                ),
                c && /* @__PURE__ */ y.jsx(je.Description, { size: d, __inheritStyles: !1, ...E("description"), children: c }),
                f && typeof f != "boolean" && /* @__PURE__ */ y.jsx(je.Error, { size: d, __inheritStyles: !1, ...E("error"), children: f })
              ] })
            ]
          }
        )
      }
    );
  }
);
Hd.displayName = "@mantine/core/InlineInput";
const Bd = Cn(null), QC = Bd.Provider, zd = () => nn(Bd), [JC, XC] = wu();
var $d = { card: "m_26775b0a" };
const ZC = {
  withBorder: !0
}, ew = (n, { radius: e }) => ({
  card: {
    "--card-radius": Ct(e)
  }
}), js = le((n, e) => {
  const t = J("CheckboxCard", ZC, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    checked: l,
    mod: u,
    withBorder: f,
    value: d,
    onClick: h,
    ...p
  } = t, g = be({
    name: "CheckboxCard",
    classes: $d,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: ew,
    rootSelector: "card"
  }), m = zd(), b = typeof l == "boolean" ? l : (m == null ? void 0 : m.value.includes(d || "")) || !1;
  return /* @__PURE__ */ y.jsx(JC, { value: { checked: b }, children: /* @__PURE__ */ y.jsx(
    vr,
    {
      ref: e,
      mod: [{ "with-border": f, checked: b }, u],
      ...g("card"),
      ...p,
      role: "checkbox",
      "aria-checked": b,
      onClick: (C) => {
        h == null || h(C), m == null || m.onChange(d || "");
      }
    }
  ) });
});
js.displayName = "@mantine/core/CheckboxCard";
js.classes = $d;
function tw({ children: n, role: e }) {
  const t = oo();
  return t ? /* @__PURE__ */ y.jsx("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy, children: n }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: n });
}
const nw = {}, Us = le((n, e) => {
  const { value: t, defaultValue: r, onChange: o, size: i, wrapperProps: a, children: s, readOnly: c, ...l } = J("CheckboxGroup", nw, n), [u, f] = Fn({
    value: t,
    defaultValue: r,
    finalValue: [],
    onChange: o
  }), d = (h) => {
    const p = typeof h == "string" ? h : h.currentTarget.value;
    !c && f(
      u.includes(p) ? u.filter((g) => g !== p) : [...u, p]
    );
  };
  return /* @__PURE__ */ y.jsx(QC, { value: { value: u, onChange: d, size: i }, children: /* @__PURE__ */ y.jsx(
    je.Wrapper,
    {
      size: i,
      ref: e,
      ...a,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ y.jsx(tw, { role: "group", children: s })
    }
  ) });
});
Us.classes = je.Wrapper.classes;
Us.displayName = "@mantine/core/CheckboxGroup";
function Hs({ size: n, style: e, ...t }) {
  const r = n !== void 0 ? { width: N(n), height: N(n), ...e } : e;
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
function Kd({ indeterminate: n, ...e }) {
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
  ) : /* @__PURE__ */ y.jsx(Hs, { ...e });
}
var qd = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const rw = {
  icon: Kd
}, ow = (n, { radius: e, color: t, size: r, iconColor: o, variant: i, autoContrast: a }) => {
  const s = zn({ color: t || n.primaryColor, theme: n }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    indicator: {
      "--checkbox-size": De(r, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Ct(e),
      "--checkbox-color": i === "outline" ? c : Bt(t, n),
      "--checkbox-icon-color": o ? Bt(o, n) : Fu(a, n) ? Qa({ color: t, theme: n, autoContrast: a }) : void 0
    }
  };
}, Bs = le((n, e) => {
  const t = J("CheckboxIndicator", rw, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    icon: l,
    indeterminate: u,
    radius: f,
    color: d,
    iconColor: h,
    autoContrast: p,
    checked: g,
    mod: m,
    variant: b,
    disabled: C,
    ...v
  } = t, w = l, S = be({
    name: "CheckboxIndicator",
    classes: qd,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: ow,
    rootSelector: "indicator"
  }), E = XC(), _ = typeof g == "boolean" || typeof u == "boolean" ? g || u : (E == null ? void 0 : E.checked) || !1;
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ref: e,
      ...S("indicator", { variant: b }),
      variant: b,
      mod: [{ checked: _, disabled: C }, m],
      ...v,
      children: /* @__PURE__ */ y.jsx(w, { indeterminate: u, ...S("icon") })
    }
  );
});
Bs.displayName = "@mantine/core/CheckboxIndicator";
Bs.classes = qd;
var Vd = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const iw = {
  labelPosition: "right",
  icon: Kd
}, aw = (n, { radius: e, color: t, size: r, iconColor: o, variant: i, autoContrast: a }) => {
  const s = zn({ color: t || n.primaryColor, theme: n }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": De(r, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : Ct(e),
      "--checkbox-color": i === "outline" ? c : Bt(t, n),
      "--checkbox-icon-color": o ? Bt(o, n) : Fu(a, n) ? Qa({ color: t, theme: n, autoContrast: a }) : void 0
    }
  };
}, Kn = le((n, e) => {
  const t = J("Checkbox", iw, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    color: l,
    label: u,
    id: f,
    size: d,
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
    icon: _,
    rootRef: T,
    iconColor: M,
    onChange: B,
    autoContrast: z,
    mod: V,
    ...Z
  } = t, D = zd(), j = d || (D == null ? void 0 : D.size), R = _, A = be({
    name: "Checkbox",
    props: t,
    classes: Vd,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: aw
  }), { styleProps: P, rest: $ } = oi(Z), H = rn(f), re = D ? {
    checked: D.value.includes($.value),
    onChange: (fe) => {
      D.onChange(fe), B == null || B(fe);
    }
  } : {};
  return /* @__PURE__ */ y.jsx(
    Hd,
    {
      ...A("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: H,
      size: j,
      labelPosition: b,
      label: u,
      description: C,
      error: v,
      disabled: w,
      classNames: r,
      styles: a,
      unstyled: s,
      "data-checked": re.checked || m || void 0,
      variant: S,
      ref: T,
      mod: V,
      ...P,
      ...p,
      children: /* @__PURE__ */ y.jsxs(ne, { ...A("inner"), mod: { "data-label-position": b }, children: [
        /* @__PURE__ */ y.jsx(
          ne,
          {
            component: "input",
            id: H,
            ref: e,
            checked: m,
            disabled: w,
            mod: { error: !!v, indeterminate: E },
            ...A("input", { focusable: !0, variant: S }),
            onChange: B,
            ...$,
            ...re,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ y.jsx(R, { indeterminate: E, ...A("icon") })
      ] })
    }
  );
});
Kn.classes = { ...Vd, ...YC };
Kn.displayName = "@mantine/core/Checkbox";
Kn.Group = Us;
Kn.Indicator = Bs;
Kn.Card = js;
function Wr(n) {
  return "group" in n;
}
function Gd({
  options: n,
  search: e,
  limit: t
}) {
  const r = e.trim().toLowerCase(), o = [];
  for (let i = 0; i < n.length; i += 1) {
    const a = n[i];
    if (o.length === t)
      return o;
    Wr(a) && o.push({
      group: a.group,
      items: Gd({
        options: a.items,
        search: e,
        limit: t - o.length
      })
    }), Wr(a) || a.label.toLowerCase().includes(r) && o.push(a);
  }
  return o;
}
function sw(n) {
  if (n.length === 0)
    return !0;
  for (const e of n)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function Wd(n, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(n))
    for (const t of n)
      if (Wr(t))
        Wd(t.items, e);
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
function cw(n, e) {
  return Array.isArray(n) ? n.includes(e) : n === e;
}
function Yd({
  data: n,
  withCheckIcon: e,
  value: t,
  checkIconPosition: r,
  unstyled: o,
  renderOption: i
}) {
  if (!Wr(n)) {
    const s = cw(t, n.value), c = e && s && /* @__PURE__ */ y.jsx(Hs, { className: ot.optionsDropdownCheckIcon }), l = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      r === "left" && c,
      /* @__PURE__ */ y.jsx("span", { children: n.label }),
      r === "right" && c
    ] });
    return /* @__PURE__ */ y.jsx(
      de.Option,
      {
        value: n.value,
        disabled: n.disabled,
        className: zt({ [ot.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": s || void 0,
        "aria-selected": s,
        active: s,
        children: typeof i == "function" ? i({ option: n, checked: s }) : l
      }
    );
  }
  const a = n.items.map((s) => /* @__PURE__ */ y.jsx(
    Yd,
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
  return /* @__PURE__ */ y.jsx(de.Group, { label: n.group, children: a });
}
function Qd({
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
  checkIconPosition: f,
  nothingFoundMessage: d,
  unstyled: h,
  labelId: p,
  renderOption: g,
  scrollAreaProps: m,
  "aria-label": b
}) {
  Wd(n);
  const v = typeof o == "string" ? (r || Gd)({
    options: n,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : n, w = sw(v), S = v.map((E) => /* @__PURE__ */ y.jsx(
    Yd,
    {
      data: E,
      withCheckIcon: l,
      value: u,
      checkIconPosition: f,
      unstyled: h,
      renderOption: g
    },
    Wr(E) ? E.group : E.value
  ));
  return /* @__PURE__ */ y.jsx(de.Dropdown, { hidden: e || t && w, children: /* @__PURE__ */ y.jsxs(de.Options, { labelledBy: p, "aria-label": b, children: [
    s ? /* @__PURE__ */ y.jsx(
      no.Autosize,
      {
        mah: a ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...m,
        children: S
      }
    ) : S,
    w && d && /* @__PURE__ */ y.jsx(de.Empty, { children: d })
  ] }) });
}
const lw = {}, zs = le((n, e) => {
  const t = J("Autocomplete", lw, n), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: a,
    dropdownOpened: s,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: f,
    onBlur: d,
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
    filter: _,
    limit: T,
    withScrollArea: M,
    maxDropdownHeight: B,
    size: z,
    id: V,
    renderOption: Z,
    autoComplete: D,
    scrollAreaProps: j,
    ...R
  } = t, A = rn(V), P = Od(g), $ = ks(P), [H, re] = Fn({
    value: m,
    defaultValue: b,
    finalValue: "",
    onChange: p
  }), fe = mi({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), fe.resetSelectedOption();
    }
  }), { resolvedClassNames: _e, resolvedStyles: Be } = Lu({
    props: t,
    styles: o,
    classNames: r
  });
  return X(() => {
    C && fe.selectFirstOption();
  }, [C, H]), /* @__PURE__ */ y.jsxs(
    de,
    {
      store: fe,
      __staticSelector: "Autocomplete",
      classNames: _e,
      styles: Be,
      unstyled: i,
      readOnly: S,
      onOptionSubmit: (pe) => {
        v == null || v(pe), re($[pe].label), fe.closeDropdown();
      },
      size: z,
      ...w,
      children: [
        /* @__PURE__ */ y.jsx(de.Target, { autoComplete: D, children: /* @__PURE__ */ y.jsx(
          an,
          {
            ref: e,
            ...R,
            size: z,
            __staticSelector: "Autocomplete",
            disabled: E,
            readOnly: S,
            value: H,
            onChange: (pe) => {
              re(pe.currentTarget.value), fe.openDropdown(), C && fe.selectFirstOption();
            },
            onFocus: (pe) => {
              fe.openDropdown(), f == null || f(pe);
            },
            onBlur: (pe) => {
              fe.closeDropdown(), d == null || d(pe);
            },
            onClick: (pe) => {
              fe.openDropdown(), h == null || h(pe);
            },
            classNames: _e,
            styles: Be,
            unstyled: i,
            id: A
          }
        ) }),
        /* @__PURE__ */ y.jsx(
          Qd,
          {
            data: P,
            hidden: S || E,
            filter: _,
            search: H,
            limit: T,
            hiddenWhenEmpty: !0,
            withScrollArea: M,
            maxDropdownHeight: B,
            unstyled: i,
            labelId: R.label ? `${A}-label` : void 0,
            "aria-label": R.label ? void 0 : R["aria-label"],
            renderOption: Z,
            scrollAreaProps: j
          }
        )
      ]
    }
  );
});
zs.classes = { ...an.classes, ...de.classes };
zs.displayName = "@mantine/core/Autocomplete";
var yi = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const wl = {
  orientation: "horizontal"
}, uw = (n, { borderWidth: e }) => ({
  group: { "--button-border-width": N(e) }
}), $s = le((n, e) => {
  const t = J("ButtonGroup", wl, n), {
    className: r,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: f,
    mod: d,
    ...h
  } = J("ButtonGroup", wl, n), p = be({
    name: "ButtonGroup",
    props: t,
    classes: yi,
    className: r,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: uw,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    ne,
    {
      ...p("group"),
      ref: e,
      variant: f,
      mod: [{ "data-orientation": c }, d],
      role: "group",
      ...h
    }
  );
});
$s.classes = yi;
$s.displayName = "@mantine/core/ButtonGroup";
const dw = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${N(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, fw = {}, hw = (n, { radius: e, color: t, gradient: r, variant: o, size: i, justify: a, autoContrast: s }) => {
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
      "--button-height": De(i, "button-height"),
      "--button-padding-x": De(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? dt(i.replace("compact-", "")) : dt(i),
      "--button-radius": e === void 0 ? void 0 : Ct(e),
      "--button-bg": t || o ? c.background : void 0,
      "--button-hover": t || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": t || o ? c.border : void 0,
      "--button-hover-color": t || o ? c.hoverColor : void 0
    }
  };
}, Sr = $n((n, e) => {
  const t = J("Button", fw, n), {
    style: r,
    vars: o,
    className: i,
    color: a,
    disabled: s,
    children: c,
    leftSection: l,
    rightSection: u,
    fullWidth: f,
    variant: d,
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
    ..._
  } = t, T = be({
    name: "Button",
    props: t,
    classes: yi,
    className: i,
    style: r,
    classNames: b,
    styles: C,
    unstyled: v,
    vars: o,
    varsResolver: hw
  }), M = !!l, B = !!u;
  return /* @__PURE__ */ y.jsxs(
    vr,
    {
      ref: e,
      ...T("root", { active: !s && !p && !w }),
      unstyled: v,
      variant: d,
      disabled: s || p,
      mod: [
        {
          disabled: s || w,
          loading: p,
          block: f,
          "with-left-section": M,
          "with-right-section": B
        },
        E
      ],
      ..._,
      children: [
        /* @__PURE__ */ y.jsx(di, { mounted: !!p, transition: dw, duration: 150, children: (z) => /* @__PURE__ */ y.jsx(ne, { component: "span", ...T("loader", { style: z }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(
          fi,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("span", { ...T("inner"), children: [
          l && /* @__PURE__ */ y.jsx(ne, { component: "span", ...T("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ y.jsx(ne, { component: "span", mod: { loading: p }, ...T("label"), children: c }),
          u && /* @__PURE__ */ y.jsx(ne, { component: "span", ...T("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
Sr.classes = yi;
Sr.displayName = "@mantine/core/Button";
Sr.Group = $s;
var Jd = { root: "m_7485cace" };
const pw = {}, gw = (n, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : De(e, "container-size")
  }
}), Ks = le((n, e) => {
  const t = J("Container", pw, n), { classNames: r, className: o, style: i, styles: a, unstyled: s, vars: c, fluid: l, mod: u, ...f } = t, d = be({
    name: "Container",
    classes: Jd,
    props: t,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: gw
  });
  return /* @__PURE__ */ y.jsx(ne, { ref: e, mod: [{ fluid: l }, u], ...d("root"), ...f });
});
Ks.classes = Jd;
Ks.displayName = "@mantine/core/Container";
const mw = {
  duration: 100,
  transition: "fade"
};
function yw(n, e) {
  return { ...mw, ...e, ...n };
}
function vw({
  offset: n,
  position: e,
  defaultOpened: t
}) {
  const [r, o] = te(t), i = ue(), { x: a, y: s, elements: c, refs: l, update: u, placement: f } = gs({
    placement: e,
    middleware: [
      ds({
        crossAxis: !0,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  }), d = f.includes("right") ? n : e.includes("left") ? n * -1 : 0, h = f.includes("bottom") ? n : e.includes("top") ? n * -1 : 0, p = me(
    ({ clientX: g, clientY: m }) => {
      l.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: g,
            y: m,
            left: g + d,
            top: m + h,
            right: g,
            bottom: m
          };
        }
      });
    },
    [c.reference]
  );
  return X(() => {
    if (l.floating.current) {
      const g = i.current;
      g.addEventListener("mousemove", p);
      const m = Jt(l.floating.current);
      return m.forEach((b) => {
        b.addEventListener("scroll", u);
      }), () => {
        g.removeEventListener("mousemove", p), m.forEach((b) => {
          b.removeEventListener("scroll", u);
        });
      };
    }
  }, [c.reference, l.floating.current, u, p, r]), { handleMouseMove: p, x: a, y: s, opened: r, setOpened: o, boundaryRef: i, floating: l.setFloating };
}
var vi = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
const bw = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  defaultOpened: !1,
  position: "right",
  zIndex: Ka("popover")
}, Cw = (n, { radius: e, color: t }) => ({
  tooltip: {
    "--tooltip-radius": e === void 0 ? void 0 : Ct(e),
    "--tooltip-bg": t ? Bt(t, n) : void 0,
    "--tooltip-color": t ? "var(--mantine-color-white)" : void 0
  }
}), qs = le((n, e) => {
  const t = J("TooltipFloating", bw, n), {
    children: r,
    refProp: o,
    withinPortal: i,
    style: a,
    className: s,
    classNames: c,
    styles: l,
    unstyled: u,
    radius: f,
    color: d,
    label: h,
    offset: p,
    position: g,
    multiline: m,
    zIndex: b,
    disabled: C,
    defaultOpened: v,
    variant: w,
    vars: S,
    portalProps: E,
    ..._
  } = t, T = $t(), M = be({
    name: "TooltipFloating",
    props: t,
    classes: vi,
    className: s,
    style: a,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: S,
    varsResolver: Cw
  }), { handleMouseMove: B, x: z, y: V, opened: Z, boundaryRef: D, floating: j, setOpened: R } = vw({
    offset: p,
    position: g,
    defaultOpened: v
  });
  if (!Hn(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const A = at(D, r.ref, e), P = (H) => {
    var re, fe;
    (fe = (re = r.props).onMouseEnter) == null || fe.call(re, H), B(H), R(!0);
  }, $ = (H) => {
    var re, fe;
    (fe = (re = r.props).onMouseLeave) == null || fe.call(re, H), R(!1);
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(ui, { ...E, withinPortal: i, children: /* @__PURE__ */ y.jsx(
      ne,
      {
        ..._,
        ...M("tooltip", {
          style: {
            ...Xa(a, T),
            zIndex: b,
            display: !C && Z ? "block" : "none",
            top: (V && Math.round(V)) ?? "",
            left: (z && Math.round(z)) ?? ""
          }
        }),
        variant: w,
        ref: j,
        mod: { multiline: m },
        children: h
      }
    ) }),
    gr(r, {
      ...r.props,
      [o]: A,
      onMouseEnter: P,
      onMouseLeave: $
    })
  ] });
});
qs.classes = vi;
qs.displayName = "@mantine/core/TooltipFloating";
const Xd = Cn(!1), ww = Xd.Provider, Sw = () => nn(Xd), Ew = {
  openDelay: 0,
  closeDelay: 0
};
function Zd(n) {
  const { openDelay: e, closeDelay: t, children: r } = J("TooltipGroup", Ew, n);
  return /* @__PURE__ */ y.jsx(ww, { value: !0, children: /* @__PURE__ */ y.jsx(Ib, { delay: { open: e, close: t }, children: r }) });
}
Zd.displayName = "@mantine/core/TooltipGroup";
function Iw(n) {
  var E, _, T;
  const [e, t] = te(n.defaultOpened), o = typeof n.opened == "boolean" ? n.opened : e, i = Sw(), a = rn(), { delay: s, currentId: c, setCurrentId: l } = yd(), u = me(
    (M) => {
      t(M), M && l(a);
    },
    [l, a]
  ), {
    x: f,
    y: d,
    context: h,
    refs: p,
    update: g,
    placement: m,
    middlewareData: { arrow: { x: b, y: C } = {} }
  } = gs({
    strategy: n.strategy,
    placement: n.position,
    open: o,
    onOpenChange: u,
    middleware: [
      fd(n.offset),
      ds({ padding: 8 }),
      Sa(),
      hd({ element: n.arrowRef, padding: n.arrowOffset }),
      ...n.inline ? [Ea()] : []
    ]
  }), { getReferenceProps: v, getFloatingProps: w } = Nb([
    Eb(h, {
      enabled: (E = n.events) == null ? void 0 : E.hover,
      delay: i ? s : { open: n.openDelay, close: n.closeDelay },
      mouseOnly: !((_ = n.events) != null && _.touch)
    }),
    Pb(h, { enabled: (T = n.events) == null ? void 0 : T.focus, visibleOnly: !0 }),
    Ob(h, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    Ab(h, { enabled: typeof n.opened > "u" }),
    Tb(h, { id: a })
  ]);
  Id({
    opened: o,
    position: n.position,
    positionDependencies: n.positionDependencies,
    floating: { refs: p, update: g }
  }), mn(() => {
    var M;
    (M = n.onPositionChange) == null || M.call(n, m);
  }, [m]);
  const S = o && c && c !== a;
  return {
    x: f,
    y: d,
    arrowX: b,
    arrowY: C,
    reference: p.setReference,
    floating: p.setFloating,
    getFloatingProps: w,
    getReferenceProps: v,
    isGroupPhase: S,
    opened: o,
    placement: m
  };
}
const Sl = {
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
  zIndex: Ka("popover"),
  positionDependencies: []
}, Tw = (n, { radius: e, color: t }) => ({
  tooltip: {
    "--tooltip-radius": e === void 0 ? void 0 : Ct(e),
    "--tooltip-bg": t ? Bt(t, n) : void 0,
    "--tooltip-color": t ? "var(--mantine-color-white)" : void 0
  }
}), ao = le((n, e) => {
  const t = J("Tooltip", Sl, n), {
    children: r,
    position: o,
    refProp: i,
    label: a,
    openDelay: s,
    closeDelay: c,
    onPositionChange: l,
    opened: u,
    defaultOpened: f,
    withinPortal: d,
    radius: h,
    color: p,
    classNames: g,
    styles: m,
    unstyled: b,
    style: C,
    className: v,
    withArrow: w,
    arrowSize: S,
    arrowOffset: E,
    arrowRadius: _,
    arrowPosition: T,
    offset: M,
    transitionProps: B,
    multiline: z,
    events: V,
    zIndex: Z,
    disabled: D,
    positionDependencies: j,
    onClick: R,
    onMouseEnter: A,
    onMouseLeave: P,
    inline: $,
    variant: H,
    keepMounted: re,
    vars: fe,
    portalProps: _e,
    mod: Be,
    floatingStrategy: pe,
    ...Oe
  } = J("Tooltip", Sl, t), { dir: ze } = ii(), It = ue(null), Re = Iw({
    position: vd(ze, o),
    closeDelay: c,
    openDelay: s,
    onPositionChange: l,
    opened: u,
    defaultOpened: f,
    events: V,
    arrowRef: It,
    arrowOffset: E,
    offset: typeof M == "number" ? M + (w ? S / 2 : 0) : M,
    positionDependencies: [...j, r],
    inline: $,
    strategy: pe
  }), Tt = be({
    name: "Tooltip",
    props: t,
    classes: vi,
    className: v,
    style: C,
    classNames: g,
    styles: m,
    unstyled: b,
    rootSelector: "tooltip",
    vars: fe,
    varsResolver: Tw
  });
  if (!Hn(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const En = at(Re.reference, r.ref, e), cn = yw(B, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(ui, { ..._e, withinPortal: d, children: /* @__PURE__ */ y.jsx(
      di,
      {
        ...cn,
        keepMounted: re,
        mounted: !D && !!Re.opened,
        duration: Re.isGroupPhase ? 10 : cn.duration,
        children: (_t) => /* @__PURE__ */ y.jsxs(
          ne,
          {
            ...Oe,
            variant: H,
            mod: [{ multiline: z }, Be],
            ...Re.getFloatingProps({
              ref: Re.floating,
              className: Tt("tooltip").className,
              style: {
                ...Tt("tooltip").style,
                ..._t,
                zIndex: Z,
                top: Re.y ?? 0,
                left: Re.x ?? 0
              }
            }),
            children: [
              a,
              /* @__PURE__ */ y.jsx(
                ms,
                {
                  ref: It,
                  arrowX: Re.arrowX,
                  arrowY: Re.arrowY,
                  visible: w,
                  position: Re.placement,
                  arrowSize: S,
                  arrowOffset: E,
                  arrowRadius: _,
                  arrowPosition: T,
                  ...Tt("arrow")
                }
              )
            ]
          }
        )
      }
    ) }),
    gr(
      r,
      Re.getReferenceProps({
        onClick: R,
        onMouseEnter: A,
        onMouseLeave: P,
        onMouseMove: t.onMouseMove,
        onPointerDown: t.onPointerDown,
        onPointerEnter: t.onPointerEnter,
        [i]: En,
        className: zt(v, r.props.className),
        ...r.props
      })
    )
  ] });
});
ao.classes = vi;
ao.displayName = "@mantine/core/Tooltip";
ao.Floating = qs;
ao.Group = Zd;
const _w = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Vs = le((n, e) => {
  const t = J("Select", _w, n), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: a,
    dropdownOpened: s,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: f,
    onBlur: d,
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
    filter: _,
    limit: T,
    withScrollArea: M,
    maxDropdownHeight: B,
    size: z,
    searchable: V,
    rightSection: Z,
    checkIconPosition: D,
    withCheckIcon: j,
    nothingFoundMessage: R,
    name: A,
    form: P,
    searchValue: $,
    defaultSearchValue: H,
    onSearchChange: re,
    allowDeselect: fe,
    error: _e,
    rightSectionPointerEvents: Be,
    id: pe,
    clearable: Oe,
    clearButtonProps: ze,
    hiddenInputProps: It,
    renderOption: Re,
    onClear: Tt,
    autoComplete: En,
    scrollAreaProps: cn,
    ..._t
  } = t, ke = Br(() => Od(g), [g]), Kt = Br(() => ks(ke), [ke]), qn = rn(pe), [We, In, Vn] = Fn({
    value: m,
    defaultValue: b,
    finalValue: null,
    onChange: p
  }), Ye = typeof We == "string" ? Kt[We] : void 0, qt = Lm(Ye), [Gn, gt] = Fn({
    value: $,
    defaultValue: H,
    finalValue: Ye ? Ye.label : "",
    onChange: re
  }), kt = mi({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: () => {
      u == null || u(), kt.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      l == null || l(), kt.resetSelectedOption();
    }
  }), { resolvedClassNames: rc, resolvedStyles: oc } = Lu({
    props: t,
    styles: o,
    classNames: r
  });
  X(() => {
    C && kt.selectFirstOption();
  }, [C, We]), X(() => {
    m === null && gt(""), typeof m == "string" && Ye && ((qt == null ? void 0 : qt.value) !== Ye.value || (qt == null ? void 0 : qt.label) !== Ye.label) && gt(Ye.label);
  }, [m, Ye]);
  const ic = Oe && !!We && !E && !S && /* @__PURE__ */ y.jsx(
    de.ClearButton,
    {
      size: z,
      ...ze,
      onClear: () => {
        In(null, null), gt(""), Tt == null || Tt();
      }
    }
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      de,
      {
        store: kt,
        __staticSelector: "Select",
        classNames: rc,
        styles: oc,
        unstyled: i,
        readOnly: S,
        onOptionSubmit: (mt) => {
          v == null || v(mt);
          const Vt = fe && Kt[mt].value === We ? null : Kt[mt], Ii = Vt ? Vt.value : null;
          Ii !== We && In(Ii, Vt), !Vn && gt(typeof Ii == "string" && (Vt == null ? void 0 : Vt.label) || ""), kt.closeDropdown();
        },
        size: z,
        ...w,
        children: [
          /* @__PURE__ */ y.jsx(de.Target, { targetType: V ? "input" : "button", autoComplete: En, children: /* @__PURE__ */ y.jsx(
            an,
            {
              id: qn,
              ref: e,
              rightSection: Z || ic || /* @__PURE__ */ y.jsx(de.Chevron, { size: z, error: _e, unstyled: i }),
              rightSectionPointerEvents: Be || (ic ? "all" : "none"),
              ..._t,
              size: z,
              __staticSelector: "Select",
              disabled: E,
              readOnly: S || !V,
              value: Gn,
              onChange: (mt) => {
                gt(mt.currentTarget.value), kt.openDropdown(), C && kt.selectFirstOption();
              },
              onFocus: (mt) => {
                V && kt.openDropdown(), f == null || f(mt);
              },
              onBlur: (mt) => {
                var Vt;
                V && kt.closeDropdown(), gt(We != null && ((Vt = Kt[We]) == null ? void 0 : Vt.label) || ""), d == null || d(mt);
              },
              onClick: (mt) => {
                V ? kt.openDropdown() : kt.toggleDropdown(), h == null || h(mt);
              },
              classNames: rc,
              styles: oc,
              unstyled: i,
              pointer: !V,
              error: _e
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            Qd,
            {
              data: ke,
              hidden: S || E,
              filter: _,
              search: Gn,
              limit: T,
              hiddenWhenEmpty: !R,
              withScrollArea: M,
              maxDropdownHeight: B,
              filterOptions: V && (Ye == null ? void 0 : Ye.label) !== Gn,
              value: We,
              checkIconPosition: D,
              withCheckIcon: j,
              nothingFoundMessage: R,
              unstyled: i,
              labelId: _t.label ? `${qn}-label` : void 0,
              "aria-label": _t.label ? void 0 : _t["aria-label"],
              renderOption: Re,
              scrollAreaProps: cn
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      de.HiddenInput,
      {
        value: We,
        name: A,
        form: P,
        disabled: E,
        ...It
      }
    )
  ] });
});
Vs.classes = { ...an.classes, ...de.classes };
Vs.displayName = "@mantine/core/Select";
const kw = {}, ef = le((n, e) => {
  const { w: t, h: r, miw: o, mih: i, ...a } = J("Space", kw, n);
  return /* @__PURE__ */ y.jsx(ne, { ref: e, ...a, w: t, miw: o ?? t, h: r, mih: i ?? r });
});
ef.displayName = "@mantine/core/Space";
var tf = { root: "m_6d731127" };
const Aw = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, Rw = (n, { gap: e, align: t, justify: r }) => ({
  root: {
    "--stack-gap": qa(e),
    "--stack-align": t,
    "--stack-justify": r
  }
}), Gs = le((n, e) => {
  const t = J("Stack", Aw, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    align: l,
    justify: u,
    gap: f,
    variant: d,
    ...h
  } = t, p = be({
    name: "Stack",
    props: t,
    classes: tf,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: Rw
  });
  return /* @__PURE__ */ y.jsx(ne, { ref: e, ...p("root"), variant: d, ...h });
});
Gs.classes = tf;
Gs.displayName = "@mantine/core/Stack";
const Pw = {}, Dn = le((n, e) => {
  const t = J("TextInput", Pw, n);
  return /* @__PURE__ */ y.jsx(an, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Dn.classes = an.classes;
Dn.displayName = "@mantine/core/TextInput";
const Nw = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Mw(n, e) {
  const t = e !== void 0 ? e : `h${n}`;
  return Nw.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: N(t),
    fontWeight: `var(--mantine-h${n}-font-weight)`,
    lineHeight: `var(--mantine-h${n}-line-height)`
  };
}
var nf = { root: "m_8a5d1357" };
const Ow = {
  order: 1
}, xw = (n, { order: e, size: t, lineClamp: r, textWrap: o }) => {
  const i = Mw(e, t);
  return {
    root: {
      "--title-fw": i.fontWeight,
      "--title-lh": i.lineHeight,
      "--title-fz": i.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, Ko = le((n, e) => {
  const t = J("Title", Ow, n), {
    classNames: r,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    order: c,
    vars: l,
    size: u,
    variant: f,
    lineClamp: d,
    textWrap: h,
    mod: p,
    ...g
  } = t, m = be({
    name: "Title",
    props: t,
    classes: nf,
    className: o,
    style: i,
    classNames: r,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: xw
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ y.jsx(
    ne,
    {
      ...m("root"),
      component: `h${c}`,
      variant: f,
      ref: e,
      mod: [{ order: c, "data-line-clamp": typeof d == "number" }, p],
      size: u,
      ...g
    }
  ) : null;
});
Ko.classes = nf;
Ko.displayName = "@mantine/core/Title";
var rf = { exports: {} }, Dw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Lw = Dw, Fw = Lw;
function of() {
}
function af() {
}
af.resetWarningCache = of;
var jw = function() {
  function n(r, o, i, a, s, c) {
    if (c !== Fw) {
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
    checkPropTypes: af,
    resetWarningCache: of
  };
  return t.PropTypes = t, t;
};
rf.exports = jw();
var Uw = rf.exports;
const Tn = /* @__PURE__ */ qf(Uw);
var Hw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, Bw = Object.defineProperty, zw = Object.defineProperties, $w = Object.getOwnPropertyDescriptors, qo = Object.getOwnPropertySymbols, sf = Object.prototype.hasOwnProperty, cf = Object.prototype.propertyIsEnumerable, El = (n, e, t) => e in n ? Bw(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, Il = (n, e) => {
  for (var t in e || (e = {}))
    sf.call(e, t) && El(n, t, e[t]);
  if (qo)
    for (var t of qo(e))
      cf.call(e, t) && El(n, t, e[t]);
  return n;
}, Kw = (n, e) => zw(n, $w(e)), qw = (n, e) => {
  var t = {};
  for (var r in n)
    sf.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && qo)
    for (var r of qo(n))
      e.indexOf(r) < 0 && cf.call(n, r) && (t[r] = n[r]);
  return t;
}, Ws = (n, e, t) => {
  const r = Ce(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: c = 24, stroke: l = 2, children: u } = a, f = qw(a, ["color", "size", "stroke", "children"]);
      return Qi(
        "svg",
        Il(Kw(Il({
          ref: i
        }, Hw), {
          width: c,
          height: c,
          stroke: s,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${n}`
        }), f),
        [...t.map(([d, h]) => Qi(d, h)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Tn.string,
    size: Tn.oneOfType([Tn.string, Tn.number]),
    stroke: Tn.oneOfType([Tn.string, Tn.number])
  }, r.displayName = `${e}`, r;
}, Vw = Ws("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), Gw = Ws("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]), Ww = Ws("grip-horizontal", "IconGripHorizontal", [
  ["path", { d: "M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]);
function Yw({ indeterminate: n, ...e }) {
  return n ? /* @__PURE__ */ y.jsx(Gw, { ...e }) : /* @__PURE__ */ y.jsx(Vw, { ...e });
}
const Qw = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px"
  },
  components: {
    Checkbox: Kn.extend({
      defaultProps: {
        icon: Yw,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    }),
    InputWrapper: {
      styles: (n) => ({
        description: {
          display: "inline-block"
        },
        label: {
          display: "inline-block"
        }
      })
    }
  }
}, Tl = {
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
}, Jw = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Tl.authorities.signUpSignIn.authority,
    knownAuthorities: [Tl.authorityDomain],
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
            case Ie.Error:
              console.error(e);
              return;
            case Ie.Info:
              console.info(e);
              return;
            case Ie.Verbose:
              console.debug(e);
              return;
            case Ie.Warning:
              console.warn(e);
              return;
            default:
              return;
          }
      }
    }
  }
};
class Xw {
  constructor(e = {}) {
    Qe(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Qe(this, "securityData", null);
    Qe(this, "securityWorker");
    Qe(this, "abortControllers", /* @__PURE__ */ new Map());
    Qe(this, "customFetch", (...e) => fetch(...e));
    Qe(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Qe(this, "setSecurityData", (e) => {
      this.securityData = e;
    });
    Qe(this, "contentFormatters", {
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
    Qe(this, "createAbortSignal", (e) => {
      if (this.abortControllers.has(e)) {
        const r = this.abortControllers.get(e);
        return r ? r.signal : void 0;
      }
      const t = new AbortController();
      return this.abortControllers.set(e, t), t.signal;
    });
    Qe(this, "abortRequest", (e) => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e));
    });
    Qe(this, "request", async ({
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
      const u = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, f = this.mergeRequestParams(l, u), d = i && this.toQueryString(i), h = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], p = a || f.format;
      return this.customFetch(`${s || this.baseUrl || ""}${r}${d ? `?${d}` : ""}`, {
        ...f,
        headers: {
          ...f.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (c ? this.createAbortSignal(c) : f.signal) || null,
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
class Zw extends Xw {
  constructor() {
    super(...arguments);
    Qe(this, "api", {
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
class Yr extends Zw {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const lf = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, eS = !0, tS = "production";
const nS = {
  bsddApiEnvironment: "production",
  mainDictionary: {
    ifcClassification: {
      type: "IfcClassification",
      source: "VolkerWessels BVGO",
      edition: "0.1",
      editionDate: "0001-01-01T00:00:00",
      name: "Basis bouwproducten O&E",
      description: "",
      location: "https://identifier.buildingsmart.org/uri/volkerwesselsbvgo/basis_bouwproducten_oene/0.1"
    },
    parameterMapping: "Description"
  },
  ifcDictionary: {
    ifcClassification: {
      type: "IfcClassification",
      location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3",
      editionDate: "0001-01-01T00:00:00",
      name: "IFC"
    },
    parameterMapping: "Export Type to IFC As"
  },
  filterDictionaries: [
    {
      ifcClassification: {
        type: "IfcClassification",
        location: "https://identifier.buildingsmart.org/uri/nlsfb/nlsfb2005/2.2",
        editionDate: "0001-01-01T00:00:00",
        name: "NL-SfB 2005"
      },
      parameterMapping: "Assembly Code"
    }
  ],
  language: "nl-NL",
  includeTestDictionaries: !1
}, so = wh, Ne = Pn;
function rS(n) {
  if (!n)
    return { type: void 0, predefinedType: void 0 };
  const e = n.length - [...n].reverse().findIndex((o) => o === o.toLowerCase()), [t, r] = [
    n.slice(0, e),
    n.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: r };
}
function Fe(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var oS = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), _l = oS, Bi = () => Math.random().toString(36).substring(7).split("").join("."), iS = {
  INIT: `@@redux/INIT${Bi()}`,
  REPLACE: `@@redux/REPLACE${Bi()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bi()}`
}, Vo = iS;
function Ys(n) {
  if (typeof n != "object" || n === null)
    return !1;
  let e = n;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(n) === e || Object.getPrototypeOf(n) === null;
}
function uf(n, e, t) {
  if (typeof n != "function")
    throw new Error(Fe(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(Fe(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(Fe(1));
    return t(uf)(n, e);
  }
  let r = n, o = e, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((m, b) => {
      a.set(b, m);
    }));
  }
  function u() {
    if (c)
      throw new Error(Fe(3));
    return o;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(Fe(4));
    if (c)
      throw new Error(Fe(5));
    let b = !0;
    l();
    const C = s++;
    return a.set(C, m), function() {
      if (b) {
        if (c)
          throw new Error(Fe(6));
        b = !1, l(), a.delete(C), i = null;
      }
    };
  }
  function d(m) {
    if (!Ys(m))
      throw new Error(Fe(7));
    if (typeof m.type > "u")
      throw new Error(Fe(8));
    if (typeof m.type != "string")
      throw new Error(Fe(17));
    if (c)
      throw new Error(Fe(9));
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
      throw new Error(Fe(10));
    r = m, d({
      type: Vo.REPLACE
    });
  }
  function p() {
    const m = f;
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
          throw new Error(Fe(11));
        function C() {
          const w = b;
          w.next && w.next(u());
        }
        return C(), {
          unsubscribe: m(C)
        };
      },
      [_l]() {
        return this;
      }
    };
  }
  return d({
    type: Vo.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: u,
    replaceReducer: h,
    [_l]: p
  };
}
function aS(n) {
  Object.keys(n).forEach((e) => {
    const t = n[e];
    if (typeof t(void 0, {
      type: Vo.INIT
    }) > "u")
      throw new Error(Fe(12));
    if (typeof t(void 0, {
      type: Vo.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Fe(13));
  });
}
function sS(n) {
  const e = Object.keys(n), t = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    typeof n[a] == "function" && (t[a] = n[a]);
  }
  const r = Object.keys(t);
  let o;
  try {
    aS(t);
  } catch (i) {
    o = i;
  }
  return function(a = {}, s) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < r.length; u++) {
      const f = r[u], d = t[f], h = a[f], p = d(h, s);
      if (typeof p > "u")
        throw s && s.type, new Error(Fe(14));
      l[f] = p, c = c || p !== h;
    }
    return c = c || r.length !== Object.keys(a).length, c ? l : a;
  };
}
function Go(...n) {
  return n.length === 0 ? (e) => e : n.length === 1 ? n[0] : n.reduce((e, t) => (...r) => e(t(...r)));
}
function cS(...n) {
  return (e) => (t, r) => {
    const o = e(t, r);
    let i = () => {
      throw new Error(Fe(15));
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = n.map((c) => c(a));
    return i = Go(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function lS(n) {
  return Ys(n) && "type" in n && typeof n.type == "string";
}
var df = Symbol.for("immer-nothing"), kl = Symbol.for("immer-draftable"), ht = Symbol.for("immer-state");
function Rt(n, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var pr = Object.getPrototypeOf;
function bn(n) {
  return !!n && !!n[ht];
}
function tn(n) {
  var e;
  return n ? ff(n) || Array.isArray(n) || !!n[kl] || !!((e = n.constructor) != null && e[kl]) || Ci(n) || wi(n) : !1;
}
var uS = Object.prototype.constructor.toString();
function ff(n) {
  if (!n || typeof n != "object")
    return !1;
  const e = pr(n);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === uS;
}
function Wo(n, e) {
  bi(n) === 0 ? Reflect.ownKeys(n).forEach((t) => {
    e(t, n[t], n);
  }) : n.forEach((t, r) => e(r, t, n));
}
function bi(n) {
  const e = n[ht];
  return e ? e.type_ : Array.isArray(n) ? 1 : Ci(n) ? 2 : wi(n) ? 3 : 0;
}
function Ta(n, e) {
  return bi(n) === 2 ? n.has(e) : Object.prototype.hasOwnProperty.call(n, e);
}
function hf(n, e, t) {
  const r = bi(n);
  r === 2 ? n.set(e, t) : r === 3 ? n.add(t) : n[e] = t;
}
function dS(n, e) {
  return n === e ? n !== 0 || 1 / n === 1 / e : n !== n && e !== e;
}
function Ci(n) {
  return n instanceof Map;
}
function wi(n) {
  return n instanceof Set;
}
function kn(n) {
  return n.copy_ || n.base_;
}
function _a(n, e) {
  if (Ci(n))
    return new Map(n);
  if (wi(n))
    return new Set(n);
  if (Array.isArray(n))
    return Array.prototype.slice.call(n);
  const t = ff(n);
  if (e === !0 || e === "class_only" && !t) {
    const r = Object.getOwnPropertyDescriptors(n);
    delete r[ht];
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
    return Object.create(pr(n), r);
  } else {
    const r = pr(n);
    if (r !== null && t)
      return { ...n };
    const o = Object.create(r);
    return Object.assign(o, n);
  }
}
function Qs(n, e = !1) {
  return Si(n) || bn(n) || !tn(n) || (bi(n) > 1 && (n.set = n.add = n.clear = n.delete = fS), Object.freeze(n), e && Object.entries(n).forEach(([t, r]) => Qs(r, !0))), n;
}
function fS() {
  Rt(2);
}
function Si(n) {
  return Object.isFrozen(n);
}
var hS = {};
function Un(n) {
  const e = hS[n];
  return e || Rt(0, n), e;
}
var Qr;
function pf() {
  return Qr;
}
function pS(n, e) {
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
function Al(n, e) {
  e && (Un("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = e);
}
function ka(n) {
  Aa(n), n.drafts_.forEach(gS), n.drafts_ = null;
}
function Aa(n) {
  n === Qr && (Qr = n.parent_);
}
function Rl(n) {
  return Qr = pS(Qr, n);
}
function gS(n) {
  const e = n[ht];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Pl(n, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return n !== void 0 && n !== t ? (t[ht].modified_ && (ka(e), Rt(4)), tn(n) && (n = Yo(e, n), e.parent_ || Qo(e, n)), e.patches_ && Un("Patches").generateReplacementPatches_(
    t[ht].base_,
    n,
    e.patches_,
    e.inversePatches_
  )) : n = Yo(e, t, []), ka(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), n !== df ? n : void 0;
}
function Yo(n, e, t) {
  if (Si(e))
    return e;
  const r = e[ht];
  if (!r)
    return Wo(
      e,
      (o, i) => Nl(n, r, e, o, i, t)
    ), e;
  if (r.scope_ !== n)
    return e;
  if (!r.modified_)
    return Qo(n, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, a = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Wo(
      i,
      (s, c) => Nl(n, r, o, s, c, t, a)
    ), Qo(n, o, !1), t && n.patches_ && Un("Patches").generatePatches_(
      r,
      t,
      n.patches_,
      n.inversePatches_
    );
  }
  return r.copy_;
}
function Nl(n, e, t, r, o, i, a) {
  if (bn(o)) {
    const s = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ta(e.assigned_, r) ? i.concat(r) : void 0, c = Yo(n, o, s);
    if (hf(t, r, c), bn(c))
      n.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && t.add(o);
  if (tn(o) && !Si(o)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1)
      return;
    Yo(n, o), (!e || !e.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(t, r) && Qo(n, o);
  }
}
function Qo(n, e, t = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Qs(e, t);
}
function mS(n, e) {
  const t = Array.isArray(n), r = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : pf(),
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
  let o = r, i = Js;
  t && (o = [r], i = Jr);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return r.draft_ = s, r.revoke_ = a, s;
}
var Js = {
  get(n, e) {
    if (e === ht)
      return n;
    const t = kn(n);
    if (!Ta(t, e))
      return yS(n, t, e);
    const r = t[e];
    return n.finalized_ || !tn(r) ? r : r === zi(n.base_, e) ? ($i(n), n.copy_[e] = Pa(r, n)) : r;
  },
  has(n, e) {
    return e in kn(n);
  },
  ownKeys(n) {
    return Reflect.ownKeys(kn(n));
  },
  set(n, e, t) {
    const r = gf(kn(n), e);
    if (r != null && r.set)
      return r.set.call(n.draft_, t), !0;
    if (!n.modified_) {
      const o = zi(kn(n), e), i = o == null ? void 0 : o[ht];
      if (i && i.base_ === t)
        return n.copy_[e] = t, n.assigned_[e] = !1, !0;
      if (dS(t, o) && (t !== void 0 || Ta(n.base_, e)))
        return !0;
      $i(n), Ra(n);
    }
    return n.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in n.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(n.copy_[e]) || (n.copy_[e] = t, n.assigned_[e] = !0), !0;
  },
  deleteProperty(n, e) {
    return zi(n.base_, e) !== void 0 || e in n.base_ ? (n.assigned_[e] = !1, $i(n), Ra(n)) : delete n.assigned_[e], n.copy_ && delete n.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(n, e) {
    const t = kn(n), r = Reflect.getOwnPropertyDescriptor(t, e);
    return r && {
      writable: !0,
      configurable: n.type_ !== 1 || e !== "length",
      enumerable: r.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    Rt(11);
  },
  getPrototypeOf(n) {
    return pr(n.base_);
  },
  setPrototypeOf() {
    Rt(12);
  }
}, Jr = {};
Wo(Js, (n, e) => {
  Jr[n] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Jr.deleteProperty = function(n, e) {
  return Jr.set.call(this, n, e, void 0);
};
Jr.set = function(n, e, t) {
  return Js.set.call(this, n[0], e, t, n[0]);
};
function zi(n, e) {
  const t = n[ht];
  return (t ? kn(t) : n)[e];
}
function yS(n, e, t) {
  var o;
  const r = gf(e, t);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(n.draft_)
  ) : void 0;
}
function gf(n, e) {
  if (!(e in n))
    return;
  let t = pr(n);
  for (; t; ) {
    const r = Object.getOwnPropertyDescriptor(t, e);
    if (r)
      return r;
    t = pr(t);
  }
}
function Ra(n) {
  n.modified_ || (n.modified_ = !0, n.parent_ && Ra(n.parent_));
}
function $i(n) {
  n.copy_ || (n.copy_ = _a(
    n.base_,
    n.scope_.immer_.useStrictShallowCopy_
  ));
}
var vS = class {
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
      typeof t != "function" && Rt(6), r !== void 0 && typeof r != "function" && Rt(7);
      let o;
      if (tn(e)) {
        const i = Rl(this), a = Pa(e, void 0);
        let s = !0;
        try {
          o = t(a), s = !1;
        } finally {
          s ? ka(i) : Aa(i);
        }
        return Al(i, r), Pl(o, i);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === df && (o = void 0), this.autoFreeze_ && Qs(o, !0), r) {
          const i = [], a = [];
          Un("Patches").generateReplacementPatches_(e, o, i, a), r(i, a);
        }
        return o;
      } else
        Rt(1, e);
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
    tn(n) || Rt(8), bn(n) && (n = mf(n));
    const e = Rl(this), t = Pa(n, void 0);
    return t[ht].isManual_ = !0, Aa(e), t;
  }
  finishDraft(n, e) {
    const t = n && n[ht];
    (!t || !t.isManual_) && Rt(9);
    const { scope_: r } = t;
    return Al(r, e), Pl(void 0, r);
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
    const r = Un("Patches").applyPatches_;
    return bn(n) ? r(n, e) : this.produce(
      n,
      (o) => r(o, e)
    );
  }
};
function Pa(n, e) {
  const t = Ci(n) ? Un("MapSet").proxyMap_(n, e) : wi(n) ? Un("MapSet").proxySet_(n, e) : mS(n, e);
  return (e ? e.scope_ : pf()).drafts_.push(t), t;
}
function mf(n) {
  return bn(n) || Rt(10, n), yf(n);
}
function yf(n) {
  if (!tn(n) || Si(n))
    return n;
  const e = n[ht];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = _a(n, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = _a(n, !0);
  return Wo(t, (r, o) => {
    hf(t, r, yf(o));
  }), e && (e.finalized_ = !1), t;
}
var pt = new vS(), vf = pt.produce;
pt.produceWithPatches.bind(
  pt
);
pt.setAutoFreeze.bind(pt);
pt.setUseStrictShallowCopy.bind(pt);
pt.applyPatches.bind(pt);
pt.createDraft.bind(pt);
pt.finishDraft.bind(pt);
function bS(n, e = `expected a function, instead received ${typeof n}`) {
  if (typeof n != "function")
    throw new TypeError(e);
}
function CS(n, e = `expected an object, instead received ${typeof n}`) {
  if (typeof n != "object")
    throw new TypeError(e);
}
function wS(n, e = "expected all items to be functions, instead received the following types: ") {
  if (!n.every((t) => typeof t == "function")) {
    const t = n.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var Ml = (n) => Array.isArray(n) ? n : [n];
function SS(n) {
  const e = Array.isArray(n[0]) ? n[0] : n;
  return wS(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function ES(n, e) {
  const t = [], { length: r } = n;
  for (let o = 0; o < r; o++)
    t.push(n[o].apply(null, e));
  return t;
}
var IS = class {
  constructor(n) {
    this.value = n;
  }
  deref() {
    return this.value;
  }
}, TS = typeof WeakRef < "u" ? WeakRef : IS, _S = 0, Ol = 1;
function yo() {
  return {
    s: _S,
    v: void 0,
    o: null,
    p: null
  };
}
function Xs(n, e = {}) {
  let t = yo();
  const { resultEqualityCheck: r } = e;
  let o, i = 0;
  function a() {
    var f;
    let s = t;
    const { length: c } = arguments;
    for (let d = 0, h = c; d < h; d++) {
      const p = arguments[d];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = s.o;
        g === null && (s.o = g = /* @__PURE__ */ new WeakMap());
        const m = g.get(p);
        m === void 0 ? (s = yo(), g.set(p, s)) : s = m;
      } else {
        let g = s.p;
        g === null && (s.p = g = /* @__PURE__ */ new Map());
        const m = g.get(p);
        m === void 0 ? (s = yo(), g.set(p, s)) : s = m;
      }
    }
    const l = s;
    let u;
    if (s.s === Ol)
      u = s.v;
    else if (u = n.apply(null, arguments), i++, r) {
      const d = ((f = o == null ? void 0 : o.deref) == null ? void 0 : f.call(o)) ?? o;
      d != null && r(d, u) && (u = d, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new TS(u) : u;
    }
    return l.s = Ol, l.v = u, u;
  }
  return a.clearCache = () => {
    t = yo(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function bf(n, ...e) {
  const t = typeof n == "function" ? {
    memoize: n,
    memoizeOptions: e
  } : n, r = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), bS(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...t,
      ...c
    }, {
      memoize: f,
      memoizeOptions: d = [],
      argsMemoize: h = Xs,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, m = Ml(d), b = Ml(p), C = SS(o), v = f(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), w = h(function() {
      a++;
      const E = ES(
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
      memoize: f,
      argsMemoize: h
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Sn = /* @__PURE__ */ bf(Xs), kS = Object.assign(
  (n, e = Sn) => {
    CS(
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
  { withTypes: () => kS }
);
function Cf(n) {
  return ({ dispatch: t, getState: r }) => (o) => (i) => typeof i == "function" ? i(t, r, n) : o(i);
}
var AS = Cf(), RS = Cf, PS = (...n) => {
  const e = bf(...n), t = Object.assign((...r) => {
    const o = e(...r), i = (a, ...s) => o(bn(a) ? mf(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => t
  });
  return t;
};
PS(Xs);
var NS = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Go : Go.apply(null, arguments);
}, MS = (n) => n && typeof n.match == "function";
function Ut(n, e) {
  function t(...r) {
    if (e) {
      let o = e(...r);
      if (!o)
        throw new Error(rt(0));
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
  return t.toString = () => `${n}`, t.type = n, t.match = (r) => lS(r) && r.type === n, t;
}
var wf = class Pr extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Pr.prototype);
  }
  static get [Symbol.species]() {
    return Pr;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Pr(...e[0].concat(this)) : new Pr(...e.concat(this));
  }
};
function xl(n) {
  return tn(n) ? vf(n, () => {
  }) : n;
}
function Dl(n, e, t) {
  if (n.has(e)) {
    let o = n.get(e);
    return t.update && (o = t.update(o, e, n), n.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(rt(10));
  const r = t.insert(e, n);
  return n.set(e, r), r;
}
function OS(n) {
  return typeof n == "boolean";
}
var xS = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = e ?? {};
  let a = new wf();
  return t && (OS(t) ? a.push(AS) : a.push(RS(t.extraArgument))), a;
}, DS = "RTK_autoBatch", Sf = (n) => (e) => {
  setTimeout(e, n);
}, LS = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Sf(10), FS = (n = {
  type: "raf"
}) => (e) => (...t) => {
  const r = e(...t);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = n.type === "tick" ? queueMicrotask : n.type === "raf" ? LS : n.type === "callback" ? n.queueNotification : Sf(n.timeout), l = () => {
    a = !1, i && (i = !1, s.forEach((u) => u()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const f = () => o && u(), d = r.subscribe(f);
      return s.add(u), () => {
        d(), s.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var f;
      try {
        return o = !((f = u == null ? void 0 : u.meta) != null && f[DS]), i = !o, i && (a || (a = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, jS = (n) => function(t) {
  const {
    autoBatch: r = !0
  } = t ?? {};
  let o = new wf(n);
  return r && o.push(FS(typeof r == "object" ? r : void 0)), o;
}, US = !0;
function HS(n) {
  const e = xS(), {
    reducer: t = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = n || {};
  let s;
  if (typeof t == "function")
    s = t;
  else if (Ys(t))
    s = sS(t);
  else
    throw new Error(rt(1));
  let c;
  typeof r == "function" ? c = r(e) : c = e();
  let l = Go;
  o && (l = NS({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !US,
    ...typeof o == "object" && o
  }));
  const u = cS(...c), f = jS(u);
  let d = typeof a == "function" ? a(f) : f();
  const h = l(...d);
  return uf(s, i, h);
}
function Ef(n) {
  const e = {}, t = [];
  let r;
  const o = {
    addCase(i, a) {
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(rt(28));
      if (s in e)
        throw new Error(rt(29));
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
function BS(n) {
  return typeof n == "function";
}
function zS(n, e) {
  let [t, r, o] = Ef(e), i;
  if (BS(n))
    i = () => xl(n());
  else {
    const s = xl(n);
    i = () => s;
  }
  function a(s = i(), c) {
    let l = [t[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, f) => {
      if (f)
        if (bn(u)) {
          const h = f(u, c);
          return h === void 0 ? u : h;
        } else {
          if (tn(u))
            return vf(u, (d) => f(d, c));
          {
            const d = f(u, c);
            if (d === void 0) {
              if (u === null)
                return u;
              throw new Error(rt(9));
            }
            return d;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = i, a;
}
var $S = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", If = (n = 21) => {
  let e = "", t = n;
  for (; t--; )
    e += $S[Math.random() * 64 | 0];
  return e;
}, KS = (n, e) => MS(n) ? n.match(e) : n(e);
function qS(...n) {
  return (e) => n.some((t) => KS(t, e));
}
var VS = ["name", "message", "stack", "code"], Ki = class {
  constructor(n, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Qe(this, "_type");
    this.payload = n, this.meta = e;
  }
}, Ll = class {
  constructor(n, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Qe(this, "_type");
    this.payload = n, this.meta = e;
  }
}, GS = (n) => {
  if (typeof n == "object" && n !== null) {
    const e = {};
    for (const t of VS)
      typeof n[t] == "string" && (e[t] = n[t]);
    return e;
  }
  return {
    message: String(n)
  };
}, sn = /* @__PURE__ */ (() => {
  function n(e, t, r) {
    const o = Ut(e + "/fulfilled", (c, l, u, f) => ({
      payload: c,
      meta: {
        ...f || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = Ut(e + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), a = Ut(e + "/rejected", (c, l, u, f, d) => ({
      payload: f,
      error: (r && r.serializeError || GS)(c || "Rejected"),
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        rejectedWithValue: !!f,
        requestStatus: "rejected",
        aborted: (c == null ? void 0 : c.name) === "AbortError",
        condition: (c == null ? void 0 : c.name) === "ConditionError"
      }
    }));
    function s(c) {
      return (l, u, f) => {
        const d = r != null && r.idGenerator ? r.idGenerator(c) : If(), h = new AbortController();
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
              extra: f
            });
            if (YS(E) && (E = await E), E === !1 || h.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const _ = new Promise((T, M) => {
              p = () => {
                M({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, h.signal.addEventListener("abort", p);
            });
            l(i(d, c, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: d,
              arg: c
            }, {
              getState: u,
              extra: f
            }))), C = await Promise.race([_, Promise.resolve(t(c, {
              dispatch: l,
              getState: u,
              extra: f,
              requestId: d,
              signal: h.signal,
              abort: m,
              rejectWithValue: (T, M) => new Ki(T, M),
              fulfillWithValue: (T, M) => new Ll(T, M)
            })).then((T) => {
              if (T instanceof Ki)
                throw T;
              return T instanceof Ll ? o(T.payload, d, c, T.meta) : o(T, d, c);
            })]);
          } catch (E) {
            C = E instanceof Ki ? a(null, d, c, E.payload, E.meta) : a(E, d, c);
          } finally {
            p && h.signal.removeEventListener("abort", p);
          }
          return r && !r.dispatchConditionRejection && a.match(C) && C.meta.condition || l(C), C;
        }();
        return Object.assign(b, {
          abort: m,
          requestId: d,
          arg: c,
          unwrap() {
            return b.then(WS);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: a,
      fulfilled: o,
      settled: qS(a, o),
      typePrefix: e
    });
  }
  return n.withTypes = () => n, n;
})();
function WS(n) {
  if (n.meta && n.meta.rejectedWithValue)
    throw n.payload;
  if (n.error)
    throw n.error;
  return n.payload;
}
function YS(n) {
  return n !== null && typeof n == "object" && typeof n.then == "function";
}
var QS = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function JS(n, e) {
  return `${n}/${e}`;
}
function XS({
  creators: n
} = {}) {
  var t;
  const e = (t = n == null ? void 0 : n.asyncThunk) == null ? void 0 : t[QS];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(rt(11));
    typeof process < "u";
    const s = (typeof o.reducers == "function" ? o.reducers(e0()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(v, w) {
        const S = typeof v == "string" ? v : v.type;
        if (!S)
          throw new Error(rt(12));
        if (S in l.sliceCaseReducersByType)
          throw new Error(rt(13));
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
        type: JS(i, v),
        createNotation: typeof o.reducers == "function"
      };
      n0(w) ? o0(S, w, u, e) : t0(S, w, u);
    });
    function f() {
      const [v = {}, w = [], S = void 0] = typeof o.extraReducers == "function" ? Ef(o.extraReducers) : [o.extraReducers], E = {
        ...v,
        ...l.sliceCaseReducersByType
      };
      return zS(o.initialState, (_) => {
        for (let T in E)
          _.addCase(T, E[T]);
        for (let T of l.sliceMatchers)
          _.addMatcher(T.matcher, T.reducer);
        for (let T of w)
          _.addMatcher(T.matcher, T.reducer);
        S && _.addDefaultCase(S);
      });
    }
    const d = (v) => v, h = /* @__PURE__ */ new Map();
    let p;
    function g(v, w) {
      return p || (p = f()), p(v, w);
    }
    function m() {
      return p || (p = f()), p.getInitialState();
    }
    function b(v, w = !1) {
      function S(_) {
        let T = _[v];
        return typeof T > "u" && w && (T = m()), T;
      }
      function E(_ = d) {
        const T = Dl(h, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Dl(T, _, {
          insert: () => {
            const M = {};
            for (const [B, z] of Object.entries(o.selectors ?? {}))
              M[B] = ZS(z, _, m, w);
            return M;
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
function ZS(n, e, t, r) {
  function o(i, ...a) {
    let s = e(i);
    return typeof s > "u" && r && (s = t()), n(s, ...a);
  }
  return o.unwrapped = n, o;
}
var Ei = /* @__PURE__ */ XS();
function e0() {
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
function t0({
  type: n,
  reducerName: e,
  createNotation: t
}, r, o) {
  let i, a;
  if ("reducer" in r) {
    if (t && !r0(r))
      throw new Error(rt(17));
    i = r.reducer, a = r.prepare;
  } else
    i = r;
  o.addCase(n, i).exposeCaseReducer(e, i).exposeAction(e, a ? Ut(n, a) : Ut(n));
}
function n0(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function r0(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function o0({
  type: n,
  reducerName: e
}, t, r, o) {
  if (!o)
    throw new Error(rt(18));
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = t, f = o(n, i, u);
  r.exposeAction(e, f), a && r.addCase(f.fulfilled, a), s && r.addCase(f.pending, s), c && r.addCase(f.rejected, c), l && r.addMatcher(f.settled, l), r.exposeCaseReducer(e, {
    fulfilled: a || vo,
    pending: s || vo,
    rejected: c || vo,
    settled: l || vo
  });
}
function vo() {
}
var i0 = (n, e) => {
  if (typeof n != "function")
    throw new Error(rt(32));
}, Zs = "listenerMiddleware", a0 = (n) => {
  let {
    type: e,
    actionCreator: t,
    matcher: r,
    predicate: o,
    effect: i
  } = n;
  if (e)
    o = Ut(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(rt(21));
  return i0(i), {
    predicate: o,
    type: e,
    effect: i
  };
}, s0 = Object.assign((n) => {
  const {
    type: e,
    predicate: t,
    effect: r
  } = a0(n);
  return {
    id: If(),
    effect: r,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(rt(22));
    }
  };
}, {
  withTypes: () => s0
}), c0 = Object.assign(Ut(`${Zs}/add`), {
  withTypes: () => c0
});
Ut(`${Zs}/removeAll`);
var l0 = Object.assign(Ut(`${Zs}/remove`), {
  withTypes: () => l0
});
function rt(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const u0 = "main", co = {
  "X-User-Agent": `bSDD-filter-UI/${u0}`,
  Accept: "text/plain"
}, d0 = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Fl = (n, e) => {
  n.language = e.payload, Ue.changeLanguage(e.payload);
}, Tf = Ut("settings/setSettings"), _f = Ei({
  name: "settings",
  initialState: d0,
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
    setLanguage: Fl,
    setIncludeTestDictionaries: (n, e) => {
      n.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (n) => {
    n.addCase(
      Tf,
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
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(r) && (e.mainDictionary = r), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(i) && (e.filterDictionaries = i), JSON.stringify(e.language) !== JSON.stringify(a) && Fl(e, { payload: a, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(s) && (e.includeTestDictionaries = s);
      }
    );
  }
}), Na = (n) => {
  const e = n.settings.bsddApiEnvironment;
  return e !== null ? lf[e] : null;
}, kf = Sn(
  (n) => n.settings.mainDictionary,
  (n) => n.settings.ifcDictionary,
  (n) => n.settings.filterDictionaries,
  (n, e, t) => {
    const r = [n, e, ...t].filter(Boolean), o = new Map(r.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
), f0 = Sn(kf, (n) => new Map(
  n.map((t) => [t.ifcClassification.location, t.ifcClassification])
)), ec = (n) => n.settings.mainDictionary, Af = (n) => n.settings.language, h0 = (n) => n.settings.includeTestDictionaries, p0 = Sn(
  kf,
  (n) => n.map((e) => e.ifcClassification.location)
), g0 = Sn(
  ec,
  (n) => n ? n.ifcClassification.location : null
);
_f.actions;
const m0 = _f.reducer, Ma = 500, y0 = 500;
let Je = null, bo = {};
const jl = {
  mainDictionaryClassification: null,
  mainDictionaryClassificationUri: null,
  classes: {},
  propertyNamesByLanguage: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1,
  groupedClassRelations: {}
}, v0 = (n) => {
  const e = Na(n);
  return e && (!Je || Je.baseUrl !== e) && (Je = new Yr(e)), Je;
}, Ul = sn("bsdd/fetchDictionaries", ({ bsddApiEnvironment: n, includeTestDictionaries: e }, t) => {
  if (!n)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const r = new Yr(n), o = y0;
  let i = 0;
  const a = [];
  return new Promise((s, c) => {
    function l() {
      r.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: i }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: f, totalCount: d } = {} } = u;
        if (f && typeof d < "u")
          if (a.push(...f), i += o, a.length >= d) {
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
}), b0 = sn("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: n, dictionaryUris: e }, t) => {
  if (!n || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const r = new Yr(n), o = {};
  return await Promise.all(
    e.map(async (i) => {
      var a;
      try {
        const s = await r.api.dictionaryV1List({ Uri: i }, { headers: co });
        s.ok && s.data ? (a = s.data.dictionaries) == null || a.forEach((c) => {
          o[c.uri] = c;
        }) : console.error(`Failed to fetch dictionaries for URI: ${i}`);
      } catch (s) {
        console.error(`Error fetching dictionaries for URI: ${i}`, s);
      }
    })
  ), o;
});
async function Hl(n, e, t, r) {
  const o = await n.api.dictionaryV1ClassesList(
    {
      Uri: e,
      UseNestedClasses: !1,
      ClassType: "Class",
      Offset: t,
      Limit: Ma,
      languageCode: r
    },
    { headers: co }
  );
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const C0 = async (n, e, t) => {
  const r = [];
  let o = 0;
  const i = await Hl(n, e, o, t), a = i.classesTotalCount;
  if (a == null)
    throw new Error("Total count is null or undefined");
  r.push(...i.classes ?? []);
  const s = [];
  for (o = Ma; o < a; o += Ma)
    s.push(Hl(n, e, o, t));
  return (await Promise.all(s)).forEach((l) => {
    r.push(...l.classes ?? []);
  }), r;
}, tc = sn(
  "bsdd/fetchDictionaryClasses",
  async ({ location: n, languageCode: e }, { getState: t, dispatch: r }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[n])
      return o.bsdd.dictionaryClasses[n];
    if (bo[n])
      return bo[n];
    const i = v0(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const a = C0(i, n, e).then((s) => (r({ type: "bsdd/addDictionaryClasses", payload: { uri: n, data: s } }), s)).finally(() => {
      delete bo[n];
    });
    return bo[n] = a, a;
  }
), w0 = sn(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (n, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: r, languageCode: o } = n;
    if (!r || r.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(r.map((i) => e(tc({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), Rf = sn(
  "bsdd/updateDictionaries",
  async (n) => n
), Pf = sn(
  "bsdd/updatePropertyNaturalLanguageNames",
  async ({ classProperties: n, languageCode: e }) => {
    if (!Je)
      throw new Error("BsddApi is not initialized");
    const t = {}, r = async (i) => {
      if (Je != null && Je.api && i.propertyUri)
        try {
          const a = await Je.api.propertyV4List(
            {
              uri: i.propertyUri,
              languageCode: e,
              includeClasses: !1
            },
            { headers: co }
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
), Hr = Ei({
  name: "bsdd",
  initialState: jl,
  reducers: {
    resetState: () => jl,
    setMainDictionaryClassification: (n, e) => {
      n.mainDictionaryClassification = e.payload;
    },
    setMainDictionaryClassificationUri: (n, e) => {
      n.mainDictionaryClassificationUri = e.payload;
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
      Pf.fulfilled,
      (e, t) => {
        const { languageCode: r, propertyNames: o } = t.payload;
        e.propertyNamesByLanguage[r] = o;
      }
    ).addCase(Ul.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      Ul.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(tc.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(Rf.fulfilled, (e, t) => {
      const r = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => r.includes(o)).reduce((o, i) => (o[i] = e.dictionaries[i], o), {});
    });
  }
}), Nf = sn(
  "bsdd/fetchClasses",
  async (n, { getState: e, dispatch: t }) => {
    const r = e(), o = r.settings.language;
    if (!Je)
      throw new Error("BsddApi is not initialized");
    const i = { ...r.bsdd.classes }, a = async (c) => {
      if (!i[c])
        if (Je && Je.api) {
          const l = await Je.api.classV1List({
            Uri: c,
            languageCode: o
          });
          if (!l.ok)
            throw new Error(`HTTP error! status: ${l.status}`);
          const { data: u } = l;
          i[c] = u;
        } else
          throw new Error("bsddApi or bsddApi.api is not initialized");
    }, s = n.map(a);
    await Promise.all(s), t({ type: "bsdd/setClasses", payload: i });
  }
), Mf = (n) => n.bsdd.mainDictionaryClassification, S0 = (n) => n.bsdd.mainDictionaryClassificationUri, Of = (n) => n.bsdd.dictionaries, E0 = (n) => n.bsdd.classes, I0 = (n) => n.bsdd.propertyNamesByLanguage, T0 = Sn([E0], (n) => Object.values(n).reduce((r, o) => {
  const { dictionaryUri: i } = o;
  return i && (r[i] || (r[i] = []), r[i].push(o)), r;
}, {})), {
  resetState: oE,
  setMainDictionaryClassification: _0,
  setMainDictionaryClassificationUri: iE,
  addDictionaryClasses: aE,
  addDictionary: sE
} = Hr.actions, xf = sn(
  "bsdd/fetchMainDictionaryClassification",
  async (n, { getState: e, dispatch: t }) => {
    if (!Je)
      throw new Error("BsddApi is not initialized");
    const o = e().settings.language, i = {
      headers: co
    }, a = {
      Uri: n,
      IncludeClassRelations: !0,
      IncludeClassProperties: !0,
      languageCode: o
    };
    try {
      const s = await Je.api.classV1List(a, i);
      if (s.status !== 200)
        return console.error(`API request failed with status ${s.status}`), null;
      const c = s.data;
      return t(_0(c)), c;
    } catch (s) {
      return console.error("Error fetching classification:", s), null;
    }
  }
), Oa = sn(
  "bsdd/updateMainDictionaryClassificationUri",
  async (n, { dispatch: e, getState: t }) => {
    const r = t();
    if (n !== r.bsdd.mainDictionaryClassificationUri)
      if (e(Hr.actions.setMainDictionaryClassificationUri(n)), n === null)
        e(Hr.actions.setMainDictionaryClassification(null));
      else {
        const i = (await e(xf(n))).payload;
        if (e(Hr.actions.setMainDictionaryClassification(i)), i != null && i.classRelations) {
          const a = i.classRelations.map(
            (s) => s.relatedClassUri
          );
          a.push(i.uri), await e(Nf(a));
        }
      }
  }
), k0 = Hr.reducer, A0 = {
  type: void 0,
  name: void 0,
  description: void 0,
  objectType: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
};
function qi(n, e, t) {
  let r = n.objectType, o = n.predefinedType;
  e ? !t || t === "NOTDEFINED" ? o = "USERDEFINED" : o = t : (r = "", !t || t === "USERDEFINED" ? o = "NOTDEFINED" : o = t), n.objectType !== r && (n.objectType = r), n.predefinedType !== o && (n.predefinedType = o);
}
function Bl(n, e) {
  var r, o, i, a, s, c;
  if (n.isDefinedBy = e || [], !e)
    return;
  const t = e.find((l) => l.name === "Attributes");
  if (t) {
    const l = t.hasProperties.find((f) => f.name === "ObjectType");
    l && (l.type === "IfcPropertySingleValue" ? n.objectType = (r = l.nominalValue) == null ? void 0 : r.value : l.type === "IfcPropertyEnumeratedValue" && (n.objectType = (i = (o = l.enumerationValues) == null ? void 0 : o[0]) == null ? void 0 : i.value));
    const u = t.hasProperties.find(
      (f) => f.name === "PredefinedType"
    );
    u && (u.type === "IfcPropertySingleValue" ? n.predefinedType = (a = u.nominalValue) == null ? void 0 : a.value : u.type === "IfcPropertyEnumeratedValue" && (n.predefinedType = (c = (s = u.enumerationValues) == null ? void 0 : s[0]) == null ? void 0 : c.value));
  }
}
function zl(n, e) {
  const t = JSON.stringify(n.hasAssociations), r = JSON.stringify(e);
  t !== r && (n.hasAssociations = e);
}
const Df = Ei({
  name: "ifcEntity",
  initialState: A0,
  reducers: {
    setIfcEntity: (n, e) => {
      n.type !== e.payload.type && (n.type = e.payload.type), n.name !== e.payload.name && (n.name = e.payload.name), n.description !== e.payload.description && (n.description = e.payload.description), qi(n, e.payload.objectType, e.payload.predefinedType), n.tag !== e.payload.tag && (n.tag = e.payload.tag), Bl(n, e.payload.isDefinedBy), zl(n, e.payload.hasAssociations);
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
      qi(n, e.payload, n.predefinedType);
    },
    setTag: (n, e) => {
      n.tag = e.payload;
    },
    setPredefinedType: (n, e) => {
      n.predefinedType = e.payload, qi(n, n.objectType, e.payload);
    },
    setIsDefinedBy: (n, e) => {
      Bl(n, e.payload);
    },
    setHasAssociations: (n, e) => {
      zl(n, e.payload);
    }
  }
}), R0 = (n) => n.ifcEntity, nc = (n) => n.ifcEntity.isDefinedBy, Lf = (n) => n.ifcEntity.hasAssociations, P0 = Sn(
  Lf,
  (n) => (n == null ? void 0 : n.filter(
    (r) => r && r.type === "IfcClassificationReference"
  )).reduce((r, o) => {
    var a;
    const i = (a = o == null ? void 0 : o.referencedSource) == null ? void 0 : a.location;
    return i && (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {})
), { setIfcEntity: N0, setName: cE, setDescription: lE, setTag: uE, setPredefinedType: dE, setIsDefinedBy: So, setHasAssociations: M0 } = Df.actions, O0 = Df.reducer;
function x0({ callback: n, ifcEntity: e }) {
  const { t } = Zr();
  Ne(Of);
  const r = Pn(nc), o = Pn(Lf);
  function i(s) {
    const c = s ? { ...JSON.parse(JSON.stringify(s)) } : { hasAssociations: [], isDefinedBy: [] };
    return c.isDefinedBy = r == null ? void 0 : r.filter((l) => l.name !== "Attributes"), c.hasAssociations = [], o == null || o.forEach((l) => {
      var u, f, d;
      if (l.type === "IfcClassificationReference" && ((f = (u = l == null ? void 0 : l.referencedSource) == null ? void 0 : u.location) != null && f.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))) {
        const { type: h, predefinedType: p } = rS(l.identification);
        h && (c.type = h), p && (c.predefinedType = p), c.predefinedType || (c.predefinedType = "NOTDEFINED");
      } else
        (d = c.hasAssociations) == null || d.push(l);
    }), c;
  }
  const a = () => {
    const s = i(e);
    console.log(s), n(s);
  };
  return /* @__PURE__ */ y.jsx(Sr, { color: "gray", fullWidth: !0, onClick: a, variant: "filled", children: t("apply") });
}
const $l = 25, D0 = 25;
function L0({ height: n, options: e, label: t, value: r, setValue: o, placeholder: i = "Search values", disabled: a }) {
  const [s, c] = te(""), [l, u] = te(e.slice(0, $l)), f = ue(null), d = mi({
    onDropdownClose: () => {
      d.resetSelectedOption(), d.focusTarget();
    },
    onDropdownOpen: () => {
      d.focusSearchInput();
    }
  });
  X(() => {
    e.length === 1 && r !== e[0] && (o(e[0]), c(e[0].label));
  }, [e, o, r, c]), X(() => {
    c((r == null ? void 0 : r.label) || "");
  }, [r]), X(() => {
    const g = r === null ? e.filter(
      (m) => (m == null ? void 0 : m.label.toLowerCase().includes(s.toLowerCase().trim())) || (m == null ? void 0 : m.value.toString().toLowerCase().includes(s.toLowerCase().trim()))
    ) : e;
    u(g.slice(0, $l));
  }, [e, s, r]);
  const h = (g) => {
    const { scrollTop: m, scrollHeight: b, clientHeight: C } = g.currentTarget, v = 5;
    b - m <= C + v && u((S) => {
      const E = S.length, _ = e.filter((T) => T == null ? void 0 : T.label.toLowerCase().includes(s.toLowerCase().trim())).slice(E, E + D0);
      return [...S, ..._];
    });
  }, p = Br(() => l.map((g) => /* @__PURE__ */ y.jsx(de.Option, { value: g.value, active: (r == null ? void 0 : r.value) === g.value, children: /* @__PURE__ */ y.jsxs(Gr, { gap: "sm", children: [
    (r == null ? void 0 : r.value) === g.value ? /* @__PURE__ */ y.jsx(Hs, { size: 12 }) : null,
    /* @__PURE__ */ y.jsx($o, { fz: "sm", opacity: a ? 0.6 : 1, children: g.label }),
    /* @__PURE__ */ y.jsxs($o, { fz: "xs", opacity: 0.6, children: [
      "(",
      g.value,
      ")"
    ] })
  ] }) }, g.value)), [l, r, a]);
  return /* @__PURE__ */ y.jsx("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: /* @__PURE__ */ y.jsxs(
    de,
    {
      store: d,
      onOptionSubmit: (g) => {
        if (!a) {
          const m = e.find((C) => C.value === g), b = m && (r == null ? void 0 : r.value) !== m.value ? m : null;
          o(b), d.closeDropdown();
        }
      },
      disabled: a,
      children: [
        /* @__PURE__ */ y.jsx(de.Target, { children: /* @__PURE__ */ y.jsx(
          an,
          {
            rightSection: !a && /* @__PURE__ */ y.jsx(
              wr,
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
        n < 80 ? /* @__PURE__ */ y.jsx(
          de.Dropdown,
          {
            style: { maxHeight: "20em", overflowY: "auto" },
            ref: f,
            onScroll: h,
            children: /* @__PURE__ */ y.jsx(de.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(de.Empty, { children: "Nothing found..." }) })
          }
        ) : /* @__PURE__ */ y.jsx(
          si,
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
            ref: f,
            onScroll: h,
            children: /* @__PURE__ */ y.jsx(de.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(de.Empty, { children: "Nothing found..." }) })
          }
        )
      ]
    }
  ) });
}
function F0({ height: n, handleMouseDown: e }) {
  const t = so(), { t: r } = Zr(), [o, i] = te(/* @__PURE__ */ new Map()), [a, s] = te(/* @__PURE__ */ new Map()), c = Ne(f0), l = Ne(P0), u = Pn(Of), f = Pn(T0), d = Pn(Mf), h = Pn(g0);
  return X(() => {
    (async () => {
      const m = Array.from(c.entries()).map(async ([w, S]) => {
        var B;
        if (d && w === h) {
          const { code: z, name: V, uri: Z } = d;
          return [
            w,
            [
              {
                value: z,
                label: V,
                uri: Z
              }
            ]
          ];
        }
        let E = [];
        const _ = f[w], T = (B = d == null ? void 0 : d.classRelations) == null ? void 0 : B.map(
          (z) => z.relatedClassUri
        ), M = _ == null ? void 0 : _.filter((z) => T == null ? void 0 : T.includes(z.uri));
        if (M && M.length > 0)
          E = M.map((z) => ({
            value: z.code,
            label: z.name,
            uri: z.uri
          }));
        else
          try {
            E = (await t(
              tc({
                location: w,
                languageCode: "nl-NL"
              })
            ).unwrap()).map(
              (V) => ({
                value: V.code,
                label: V.name || "",
                uri: V.uri
              })
            );
          } catch (z) {
            console.error("Failed to fetch dictionary classes for", w, z), E = [];
          }
        return [w, E];
      }), b = await Promise.all(m), C = new Map(b);
      i(C);
      const v = /* @__PURE__ */ new Map();
      C.forEach((w, S) => {
        if (w.length === 1)
          v.set(S, w[0]);
        else if (S in l) {
          const E = l[S];
          if (E.length === 1) {
            const _ = E[0];
            if (w.some((M) => M.value === _.identification)) {
              const M = {
                label: _.name || "",
                value: _.identification || "",
                uri: S
              };
              v.set(S, M);
            }
          }
        }
      }), s(v);
    })();
  }, [
    c,
    f,
    t,
    l,
    d,
    h
  ]), X(() => {
    (() => {
      const g = Array.from(a.entries()).map(([m, b]) => {
        if (!b || !b.value)
          return null;
        const C = u[m];
        return {
          type: "IfcClassificationReference",
          name: b.label,
          location: b.uri,
          identification: b.value,
          referencedSource: {
            type: "IfcClassification",
            name: C.name,
            location: C.uri,
            edition: C.version,
            editionDate: C.releaseDate
          }
        };
      }).filter((m) => m !== null);
      g.length > 0 && t(M0(g));
    })();
  }, [u, t, a]), /* @__PURE__ */ y.jsxs(si, { style: { height: `${n}px`, position: "relative" }, children: [
    Array.from(c.entries()).map(([p, g]) => {
      var m;
      return /* @__PURE__ */ y.jsx(
        L0,
        {
          height: n,
          label: g.name,
          options: o.get(p) || [],
          value: a.get(p) || null,
          setValue: (b) => {
            const C = new Map(a);
            C.set(p, b), s(C);
          },
          placeholder: r("classifications.searchClassesPlaceholder"),
          disabled: p === (d == null ? void 0 : d.dictionaryUri) || ((m = o.get(p)) == null ? void 0 : m.length) === 1
        },
        p
      );
    }),
    /* @__PURE__ */ y.jsx(ne, { onMouseDown: e, style: { marginTop: "4px" }, children: /* @__PURE__ */ y.jsx(ao, { label: r("classifications.dragResize"), withArrow: !0, children: /* @__PURE__ */ y.jsx(Sr, { fullWidth: !0, variant: "subtle", size: "sm", color: "gray", "aria-label": r("classifications.dragResize"), children: /* @__PURE__ */ y.jsx(Ww, {}) }) }) })
  ] });
}
const j0 = {
  loadedIfcEntities: []
}, Ff = Ei({
  name: "ifcData",
  initialState: j0,
  reducers: {
    setLoadedIfcEntities: (n, e) => {
      n.loadedIfcEntities = e.payload;
    }
  }
}), { setLoadedIfcEntities: U0 } = Ff.actions, H0 = (n) => n.ifcData.loadedIfcEntities, jf = Sn(H0, (n) => n[0]), B0 = Ff.reducer;
function Vi(n, e) {
  return n == null || e == null ? null : n.toLowerCase() !== e.toLowerCase() ? `(${e})` : null;
}
function z0({ label: n, description: e, value: t, setValue: r, disabled: o }) {
  const { t: i } = Zr(), [a, s] = te(!1), [c, l] = te(!0), u = () => i(c ? "checkbox.indeterminate" : a ? "checkbox.true" : "checkbox.false"), f = (d) => {
    d.target.indeterminate = !1, r(d.target.checked);
  };
  return X(() => {
    t === !0 ? (s(!0), l(!1)) : t === !1 ? (s(!1), l(!1)) : t === void 0 && (s(!1), l(!0));
  }, [t]), /* @__PURE__ */ y.jsx(je.Wrapper, { label: n, description: e, children: /* @__PURE__ */ y.jsx(
    Kn,
    {
      description: u(),
      checked: a,
      indeterminate: c,
      type: "checkbox",
      onChange: (d) => f(d),
      disabled: o
    }
  ) });
}
const Gi = (n, e, t, r) => n.map((o) => {
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
function $0({ propertySet: n, property: e, property_natural_language_name: t }) {
  const r = so(), o = Ne(nc), [i, a] = te();
  return X(() => {
    var s, c, l, u, f;
    switch (e.type) {
      case "IfcPropertySingleValue": {
        e.nominalValue.type === "IfcBoolean" ? a(
          /* @__PURE__ */ y.jsx(
            z0,
            {
              label: t,
              description: Vi(t, e.name),
              disabled: !1,
              value: e.nominalValue.value,
              setValue: (d) => {
                if (o && n.name) {
                  const h = {
                    nominalValue: { ...e.nominalValue, value: d }
                  }, p = Gi(
                    o,
                    n.name,
                    e.name,
                    h
                  );
                  r(So(Object.values(p)));
                }
              }
            }
          )
        ) : a(
          /* @__PURE__ */ y.jsx(
            Dn,
            {
              label: t,
              description: Vi(t, e.name),
              placeholder: e.nominalValue.value,
              value: e.nominalValue.value || "",
              onChange: (d) => {
                if (o && n.name) {
                  const h = {
                    nominalValue: { ...e.nominalValue, value: d.target.value }
                  }, p = Gi(o, n.name, e.name, h);
                  r(So(Object.values(p)));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const d = (c = (s = e.enumerationValues) == null ? void 0 : s[0]) == null ? void 0 : c.value, h = ((l = e.enumerationReference) == null ? void 0 : l.enumerationValues) || [];
        a(
          /* @__PURE__ */ y.jsx(
            Vs,
            {
              label: t,
              description: Vi(t, e.name),
              value: d,
              disabled: ((f = (u = e.enumerationReference) == null ? void 0 : u.enumerationValues) == null ? void 0 : f.length) === 1,
              onChange: (p) => {
                if (o && n.name) {
                  const g = h.find((C) => C.value === p), m = {
                    enumerationValues: g ? [g] : []
                  }, b = Gi(o, n.name, e.name, m);
                  r(So(Object.values(b)));
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
        a(/* @__PURE__ */ y.jsx(Dn, { placeholder: e.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [e, n, a, t, r, o]), i;
}
const K0 = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function Jo(n, e) {
  const t = n && K0[n] || "default";
  let r;
  return n === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? r = !0 : e.toUpperCase() === "FALSE" ? r = !1 : r = void 0 : r = e, {
    type: t,
    value: r
  };
}
function Uf(n, e, t) {
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
function q0(n, e, t, r) {
  var a;
  const o = Uf(e, t, r), i = ((a = o == null ? void 0 : o.nominalValue) == null ? void 0 : a.value) ?? null;
  return Jo(n, i);
}
function V0(n, e, t, r, o) {
  const i = Uf(e, t, r);
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
function G0(n, e, t, r) {
  var s;
  const o = ((s = n.allowedValues) == null ? void 0 : s.map(
    (c) => Jo(n.dataType, c.value)
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
  const a = n.predefinedValue ? [Jo(n.dataType, n.predefinedValue)] : V0(
    n.dataType,
    r,
    t,
    e,
    o
  );
  return a.length > 0 && (i.enumerationValues = a), i;
}
function W0(n, e, t, r) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e,
    specification: n.propertyUri || ""
  }, i = n.predefinedValue ? Jo(n.dataType, n.predefinedValue) : q0(n.dataType, r, t, e);
  return i !== null && (o.nominalValue = i), o;
}
function Y0(n, e, t) {
  const { propertyCode: r } = n, o = r || "unknown", i = n.allowedValues ? G0(n, o, e, t) : W0(n, o, e, t);
  return i.specification = n.propertyUri || "", i;
}
function Q0({ mainDictionaryClassification: n, recursiveMode: e }) {
  const t = so(), r = Ne(jf), o = Ne(nc), i = Ne(I0), a = Ne(Af), [s, c] = te({});
  return X(() => {
    if (!n)
      return;
    const l = {};
    [n].forEach((f) => {
      var d;
      (d = f.classProperties) == null || d.forEach((h) => {
        if (!h || !h.propertySet)
          return;
        const p = h.propertySet || f.name;
        l[p] || (l[p] = {
          type: "IfcPropertySet",
          name: p,
          hasProperties: []
        }), l[p].hasProperties.push(
          Y0(h, p, r)
        );
      });
    }), t(So(Object.values(l)));
  }, [t, r, n]), X(() => {
    if (!n)
      return;
    const l = {};
    [n].forEach((f) => {
      var d;
      (d = f.classProperties) == null || d.forEach((h) => {
        h && h.propertyUri && (a && i && i[a] && i[a][h.propertyUri] ? l[h.propertyUri] = i[a][h.propertyUri] || "" : l[h.propertyUri] = h.name);
      });
    }), c(l);
  }, [n, e, r, i, a]), /* @__PURE__ */ y.jsx("div", { children: Yi.toArray(
    o == null ? void 0 : o.map((l, u) => /* @__PURE__ */ y.jsx(xe, { variant: "contained", radius: "xs", children: /* @__PURE__ */ y.jsxs(
      xe.Item,
      {
        value: l.name || "Unknown",
        style: u !== 0 ? { borderTopWidth: 0 } : {},
        children: [
          /* @__PURE__ */ y.jsx(xe.Control, { children: l.name }),
          /* @__PURE__ */ y.jsx(xe.Panel, { children: /* @__PURE__ */ y.jsx(Gs, { children: Yi.toArray(
            l.hasProperties.map((f) => {
              const d = f.specification ? s[f.specification] : "";
              return /* @__PURE__ */ y.jsx(
                $0,
                {
                  propertySet: l,
                  property: f,
                  property_natural_language_name: d
                }
              );
            })
          ) }) })
        ]
      },
      l.name || "Unknown"
    ) }))
  ) });
}
function J0({ api: n, defaultSelection: e }) {
  const t = so(), { t: r } = Zr(), [o, i] = te([]), a = Ne(ec), s = ue(null), [c, l] = te(void 0), [u, f] = te(""), [d] = Tm(u, 300), [h, p] = te(!1);
  X(() => {
    e && (l(e), f(e.label));
  }, [e]);
  const g = me((v) => {
    f(v);
  }, []), m = me(
    (v) => {
      const w = o.find((S) => S.value === v);
      w && (l(w), p(!0));
    },
    [o]
  ), b = me(
    (v) => {
      v.key === "Enter" && o[0] && (f(o[0].label), m(o[0].value), s.current && s.current.blur());
    },
    [o, m]
  );
  X(() => {
    e && !h && (f(e.label), l(e));
  }, [e, h]), X(() => {
    if (a) {
      t(Nf([]));
      const v = {
        headers: co
      }, w = {
        SearchText: d,
        DictionaryUri: a.ifcClassification.location
      };
      n.api.searchInDictionaryV1List(w, v).then((S) => {
        var _;
        const E = S.data;
        if (E) {
          if (E.count) {
            const T = (_ = E.dictionary) == null ? void 0 : _.classes;
            T && i(
              T.filter((M) => M.uri && M.name).map(
                (M) => ({
                  value: M.uri,
                  label: M.name
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
  }, [n.api, d, t, a]), X(() => {
    s.current && s.current.focus();
  }, []), X(() => {
    t(Oa(c ? c.value : null));
  }, [t, c]);
  const C = me(() => {
    g(""), s.current && s.current.focus(), l(void 0);
  }, [g]);
  return /* @__PURE__ */ y.jsx(
    zs,
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
        wr,
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
const Wi = 60.7969;
let Kl = 0, ql = 0;
function X0() {
  const { t: n } = Zr(), e = so(), [t, r] = te(), [o, i] = te(!1), [a, s] = te(new Yr(lf[tS])), c = Ne(ec), l = Ne(Af), [u, f] = te(null), d = Ne(Na), h = Ne(Na), p = Ne(h0), g = Ne(p0), m = Ne(R0), b = Ne(jf), C = Ne(S0), [v, w] = te(Wi), [S, E] = te("auto"), [_, T] = te(!1), M = Ne(Mf), B = me((A) => {
    var $;
    const P = JSON.stringify(A);
    ($ = window == null ? void 0 : window.bsddBridge) == null || $.save(P).then((H) => {
      console.log("Sent to Revit", H);
    });
  }, []), z = me(() => {
    var A;
    (A = window == null ? void 0 : window.bsddBridge) == null || A.cancel();
  }, []), V = (A) => {
    f(A);
  };
  X(() => {
    if (!M || !_)
      return;
    const A = M.classProperties || [];
    e(Pf({ classProperties: A, languageCode: l }));
  }, [M, _, l, e]), X(() => {
    u && (console.log("settings updated: ", u), e(Tf(u)), f(null));
  }, [u, e]), X(() => {
    d && s(new Yr(d));
  }, [d]), X(() => {
    (async () => {
      try {
        let P, $;
        if (eS)
          if (window != null && window.bsddBridge) {
            const H = await window.bsddBridge.loadSettings();
            ({ settings: P, ifcData: $ } = JSON.parse(H));
          } else
            P = nS;
        if (P && V(P), $ && (e(U0($)), $.length > 0)) {
          const H = $[0];
          e(N0(H));
        }
      } catch (P) {
        console.error("Failed to load settings:", P);
      }
    })();
  }, [e]), X(() => {
    var P;
    if (!b || !c)
      return;
    const A = c.ifcClassification.location;
    (P = b.hasAssociations) == null || P.forEach(($) => {
      var H;
      if ($.type === "IfcClassificationReference") {
        const re = $;
        (H = re.referencedSource) != null && H.location && re.referencedSource.location === A && (re.location && e(Oa(re.location)), r({
          label: re.name,
          value: re.location
        }));
      }
    });
  }, [c, b, e]), X(() => {
    if (d !== null && p !== null) {
      const A = {
        bsddApiEnvironment: d,
        includeTestDictionaries: p,
        languageCode: l,
        dictionaryUris: g
      };
      e(Rf(g)), e(b0(A)), e(w0(A));
    }
  }, [
    d,
    h,
    p,
    e,
    g,
    l
  ]), X(() => {
    C && e(xf(C));
  }, [C, e]), X(() => {
    E(`${v * g.length + 48}px`);
  }, [g.length, v]);
  const Z = (A) => {
    const P = ql + (A.clientY - Kl) / g.length;
    w(P > Wi ? P : Wi);
  }, D = () => {
    document.removeEventListener("mousemove", Z), document.removeEventListener("mouseup", D);
  }, j = (A) => {
    Kl = A.clientY, ql = v, document.addEventListener("mousemove", Z), document.addEventListener("mouseup", D);
  }, R = (A) => {
    T(A.includes("Propertysets"));
  };
  return /* @__PURE__ */ y.jsxs(Ks, { children: [
    /* @__PURE__ */ y.jsx(Dn, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ y.jsx(Dn, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ y.jsx(Dn, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ y.jsx(Gr, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ y.jsx(J0, { api: a, defaultSelection: t }) }),
    C ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs(xe, { defaultValue: ["Classifications"], multiple: !0, onChange: R, children: [
        /* @__PURE__ */ y.jsxs(xe.Item, { value: "Classifications", children: [
          /* @__PURE__ */ y.jsx(xe.Control, { children: /* @__PURE__ */ y.jsx(Ko, { order: 5, children: n("classificationsLabel") }) }),
          /* @__PURE__ */ y.jsx(xe.Panel, { style: { height: S }, children: /* @__PURE__ */ y.jsx(F0, { height: v, handleMouseDown: j }) })
        ] }, "Classifications"),
        /* @__PURE__ */ y.jsxs(xe.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ y.jsx(xe.Control, { children: /* @__PURE__ */ y.jsx(Ko, { order: 5, children: n("propertysetsLabel") }) }),
          /* @__PURE__ */ y.jsx(xe.Panel, { children: /* @__PURE__ */ y.jsx(
            Q0,
            {
              mainDictionaryClassification: M,
              recursiveMode: o
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ y.jsxs(Gr, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ y.jsx(x0, { callback: B, ifcEntity: m }),
        /* @__PURE__ */ y.jsx(Sr, { fullWidth: !0, variant: "light", color: "gray", onClick: z, children: n("cancel") })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs(_s, { mx: "md", title: n("noClassificationSelected"), mt: "xl", children: [
      n("classSearchInstruction"),
      /* @__PURE__ */ y.jsx(ef, { h: "md" }),
      n("needHelp"),
      " ",
      /* @__PURE__ */ y.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: n("checkDocumentation") })
    ] })
  ] });
}
function Z0() {
  const [n, e] = te(null);
  return X(() => {
    const t = new lm(Jw);
    e(t);
  }, []), n ? /* @__PURE__ */ y.jsx(Du, { theme: Qw, children: /* @__PURE__ */ y.jsx(X0, {}) }) : /* @__PURE__ */ y.jsx("div", { children: "Loading..." });
}
const eE = HS({
  reducer: {
    settings: m0,
    ifcData: B0,
    ifcEntity: O0,
    bsdd: k0
  }
});
Ji.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ y.jsx(Xo.StrictMode, { children: /* @__PURE__ */ y.jsx(vh, { store: eE, children: /* @__PURE__ */ y.jsx(Z0, {}) }) })
);
