var q_ = Object.defineProperty;
var $_ = (r, t, e) => t in r ? q_(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var hr = (r, t, e) => ($_(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as Fe from "react";
import k, { createContext as Fn, useContext as Bn, useState as pe, useRef as Ke, useEffect as me, useMemo as Ni, useReducer as G_, useCallback as Ve, useLayoutEffect as Ll, useId as vp, forwardRef as ft, cloneElement as hs, Children as ul } from "react";
import * as z_ from "react-dom";
import W_, { flushSync as V_, createPortal as Y_ } from "react-dom";
var mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yp = { exports: {} }, fs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j_ = k, Q_ = Symbol.for("react.element"), J_ = Symbol.for("react.fragment"), X_ = Object.prototype.hasOwnProperty, Z_ = j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, eS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cp(r, t, e) {
  var n, o = {}, a = null, c = null;
  e !== void 0 && (a = "" + e), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (c = t.ref);
  for (n in t)
    X_.call(t, n) && !eS.hasOwnProperty(n) && (o[n] = t[n]);
  if (r && r.defaultProps)
    for (n in t = r.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: Q_, type: r, key: a, ref: c, props: o, _owner: Z_.current };
}
fs.Fragment = J_;
fs.jsx = Cp;
fs.jsxs = Cp;
yp.exports = fs;
var Te = yp.exports, dl = {}, lf = W_;
dl.createRoot = lf.createRoot, dl.hydrateRoot = lf.hydrateRoot;
const tS = {
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
  output(r, t) {
    console && console[r] && console[r].apply(console, t);
  }
};
let rS = class hl {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, e);
  }
  init(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = e.prefix || "i18next:", this.logger = t || tS, this.options = e, this.debug = e.debug;
  }
  log() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return this.forward(e, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return this.forward(e, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return this.forward(e, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, e, n, o) {
    return o && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[e](t));
  }
  create(t) {
    return new hl(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new hl(this.logger, t);
  }
};
var Jr = new rS();
class ps {
  constructor() {
    this.observers = {};
  }
  on(t, e) {
    return t.split(" ").forEach((n) => {
      this.observers[n] = this.observers[n] || [], this.observers[n].push(e);
    }), this;
  }
  off(t, e) {
    if (this.observers[t]) {
      if (!e) {
        delete this.observers[t];
        return;
      }
      this.observers[t] = this.observers[t].filter((n) => n !== e);
    }
  }
  emit(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
      n[o - 1] = arguments[o];
    this.observers[t] && [].concat(this.observers[t]).forEach((c) => {
      c(...n);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((c) => {
      c.apply(c, [t, ...n]);
    });
  }
}
function vi() {
  let r, t;
  const e = new Promise((n, o) => {
    r = n, t = o;
  });
  return e.resolve = r, e.reject = t, e;
}
function uf(r) {
  return r == null ? "" : "" + r;
}
function nS(r, t, e) {
  r.forEach((n) => {
    t[n] && (e[n] = t[n]);
  });
}
function Dl(r, t, e) {
  function n(c) {
    return c && c.indexOf("###") > -1 ? c.replace(/###/g, ".") : c;
  }
  function o() {
    return !r || typeof r == "string";
  }
  const a = typeof t != "string" ? [].concat(t) : t.split(".");
  for (; a.length > 1; ) {
    if (o())
      return {};
    const c = n(a.shift());
    !r[c] && e && (r[c] = new e()), Object.prototype.hasOwnProperty.call(r, c) ? r = r[c] : r = {};
  }
  return o() ? {} : {
    obj: r,
    k: n(a.shift())
  };
}
function df(r, t, e) {
  const {
    obj: n,
    k: o
  } = Dl(r, t, Object);
  n[o] = e;
}
function oS(r, t, e, n) {
  const {
    obj: o,
    k: a
  } = Dl(r, t, Object);
  o[a] = o[a] || [], n && (o[a] = o[a].concat(e)), n || o[a].push(e);
}
function Ga(r, t) {
  const {
    obj: e,
    k: n
  } = Dl(r, t);
  if (e)
    return e[n];
}
function iS(r, t, e) {
  const n = Ga(r, e);
  return n !== void 0 ? n : Ga(t, e);
}
function Ep(r, t, e) {
  for (const n in t)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof t[n] == "string" || t[n] instanceof String ? e && (r[n] = t[n]) : Ep(r[n], t[n], e) : r[n] = t[n]);
  return r;
}
function Po(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var aS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function sS(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (t) => aS[t]) : r;
}
const cS = [" ", ",", "?", "!", ";"];
function lS(r, t, e) {
  t = t || "", e = e || "";
  const n = cS.filter((c) => t.indexOf(c) < 0 && e.indexOf(c) < 0);
  if (n.length === 0)
    return !0;
  const o = new RegExp(`(${n.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let a = !o.test(r);
  if (!a) {
    const c = r.indexOf(e);
    c > 0 && !o.test(r.substring(0, c)) && (a = !0);
  }
  return a;
}
function za(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!r)
    return;
  if (r[t])
    return r[t];
  const n = t.split(e);
  let o = r;
  for (let a = 0; a < n.length; ++a) {
    if (!o || typeof o[n[a]] == "string" && a + 1 < n.length)
      return;
    if (o[n[a]] === void 0) {
      let c = 2, l = n.slice(a, a + c).join(e), u = o[l];
      for (; u === void 0 && n.length > a + c; )
        c++, l = n.slice(a, a + c).join(e), u = o[l];
      if (u === void 0)
        return;
      if (u === null)
        return null;
      if (t.endsWith(l)) {
        if (typeof u == "string")
          return u;
        if (l && typeof u[l] == "string")
          return u[l];
      }
      const h = n.slice(a + c).join(e);
      return h ? za(u, h, e) : void 0;
    }
    o = o[n[a]];
  }
  return o;
}
function Wa(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class hf extends ps {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = e, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const e = this.options.ns.indexOf(t);
    e > -1 && this.options.ns.splice(e, 1);
  }
  getResource(t, e, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, c = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l = [t, e];
    n && typeof n != "string" && (l = l.concat(n)), n && typeof n == "string" && (l = l.concat(a ? n.split(a) : n)), t.indexOf(".") > -1 && (l = t.split("."));
    const u = Ga(this.data, l);
    return u || !c || typeof n != "string" ? u : za(this.data && this.data[t] && this.data[t][e], n, a);
  }
  addResource(t, e, n, o) {
    let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let l = [t, e];
    n && (l = l.concat(c ? n.split(c) : n)), t.indexOf(".") > -1 && (l = t.split("."), o = e, e = l[1]), this.addNamespaces(e), df(this.data, l, o), a.silent || this.emit("added", t, e, n, o);
  }
  addResources(t, e, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const a in n)
      (typeof n[a] == "string" || Object.prototype.toString.apply(n[a]) === "[object Array]") && this.addResource(t, e, a, n[a], {
        silent: !0
      });
    o.silent || this.emit("added", t, e, n);
  }
  addResourceBundle(t, e, n, o, a) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1
    }, l = [t, e];
    t.indexOf(".") > -1 && (l = t.split("."), o = n, n = e, e = l[1]), this.addNamespaces(e);
    let u = Ga(this.data, l) || {};
    o ? Ep(u, n, a) : u = {
      ...u,
      ...n
    }, df(this.data, l, u), c.silent || this.emit("added", t, e, n);
  }
  removeResourceBundle(t, e) {
    this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e);
  }
  hasResourceBundle(t, e) {
    return this.getResource(t, e) !== void 0;
  }
  getResourceBundle(t, e) {
    return e || (e = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, e)
    } : this.getResource(t, e);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const e = this.getDataByLanguage(t);
    return !!(e && Object.keys(e) || []).find((o) => e[o] && Object.keys(e[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var wp = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, t, e, n, o) {
    return r.forEach((a) => {
      this.processors[a] && (t = this.processors[a].process(t, e, n, o));
    }), t;
  }
};
const ff = {};
class Va extends ps {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), nS(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = e, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Jr.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const n = this.resolve(t, e);
    return n && n.res !== void 0;
  }
  extractFromKey(t, e) {
    let n = e.nsSeparator !== void 0 ? e.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const o = e.keySeparator !== void 0 ? e.keySeparator : this.options.keySeparator;
    let a = e.ns || this.options.defaultNS || [];
    const c = n && t.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !e.keySeparator && !this.options.userDefinedNsSeparator && !e.nsSeparator && !lS(t, n, o);
    if (c && !l) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: t,
          namespaces: a
        };
      const h = t.split(n);
      (n !== o || n === o && this.options.ns.indexOf(h[0]) > -1) && (a = h.shift()), t = h.join(o);
    }
    return typeof a == "string" && (a = [a]), {
      key: t,
      namespaces: a
    };
  }
  translate(t, e, n) {
    if (typeof e != "object" && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)), typeof e == "object" && (e = {
      ...e
    }), e || (e = {}), t == null)
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const o = e.returnDetails !== void 0 ? e.returnDetails : this.options.returnDetails, a = e.keySeparator !== void 0 ? e.keySeparator : this.options.keySeparator, {
      key: c,
      namespaces: l
    } = this.extractFromKey(t[t.length - 1], e), u = l[l.length - 1], h = e.lng || this.language, f = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (h && h.toLowerCase() === "cimode") {
      if (f) {
        const N = e.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${u}${N}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: h,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(e)
        } : `${u}${N}${c}`;
      }
      return o ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(e)
      } : c;
    }
    const g = this.resolve(t, e);
    let m = g && g.res;
    const v = g && g.usedKey || c, C = g && g.exactUsedKey || c, b = Object.prototype.toString.apply(m), _ = ["[object Number]", "[object Function]", "[object RegExp]"], A = e.joinArrays !== void 0 ? e.joinArrays : this.options.joinArrays, I = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (I && m && (typeof m != "string" && typeof m != "boolean" && typeof m != "number") && _.indexOf(b) < 0 && !(typeof A == "string" && b === "[object Array]")) {
      if (!e.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const N = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, {
          ...e,
          ns: l
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return o ? (g.res = N, g.usedParams = this.getUsedParamsDetails(e), g) : N;
      }
      if (a) {
        const N = b === "[object Array]", x = N ? [] : {}, D = N ? C : v;
        for (const W in m)
          if (Object.prototype.hasOwnProperty.call(m, W)) {
            const z = `${D}${a}${W}`;
            x[W] = this.translate(z, {
              ...e,
              joinArrays: !1,
              ns: l
            }), x[W] === z && (x[W] = m[W]);
          }
        m = x;
      }
    } else if (I && typeof A == "string" && b === "[object Array]")
      m = m.join(A), m && (m = this.extendTranslation(m, t, e, n));
    else {
      let N = !1, x = !1;
      const D = e.count !== void 0 && typeof e.count != "string", W = Va.hasDefaultValue(e), z = D ? this.pluralResolver.getSuffix(h, e.count, e) : "", se = e.ordinal && D ? this.pluralResolver.getSuffix(h, e.count, {
        ordinal: !1
      }) : "", ie = e[`defaultValue${z}`] || e[`defaultValue${se}`] || e.defaultValue;
      !this.isValidLookup(m) && W && (N = !0, m = ie), this.isValidLookup(m) || (x = !0, m = c);
      const ne = (e.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : m, de = W && ie !== m && this.options.updateMissing;
      if (x || N || de) {
        if (this.logger.log(de ? "updateKey" : "missingKey", h, u, c, de ? ie : m), a) {
          const te = this.resolve(c, {
            ...e,
            keySeparator: !1
          });
          te && te.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ce = [];
        const ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ve && ve[0])
          for (let te = 0; te < ve.length; te++)
            ce.push(ve[te]);
        else
          this.options.saveMissingTo === "all" ? ce = this.languageUtils.toResolveHierarchy(e.lng || this.language) : ce.push(e.lng || this.language);
        const j = (te, Z, Pe) => {
          const Qe = W && Pe !== m ? Pe : ne;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(te, u, Z, Qe, de, e) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(te, u, Z, Qe, de, e), this.emit("missingKey", te, u, Z, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && D ? ce.forEach((te) => {
          this.pluralResolver.getSuffixes(te, e).forEach((Z) => {
            j([te], c + Z, e[`defaultValue${Z}`] || ie);
          });
        }) : j(ce, c, ie));
      }
      m = this.extendTranslation(m, t, e, g, n), x && m === c && this.options.appendNamespaceToMissingKey && (m = `${u}:${c}`), (x || N) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${c}` : c, N ? m : void 0) : m = this.options.parseMissingKeyHandler(m));
    }
    return o ? (g.res = m, g.usedParams = this.getUsedParamsDetails(e), g) : m;
  }
  extendTranslation(t, e, n, o, a) {
    var c = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
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
      const h = typeof t == "string" && (n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (h) {
        const m = t.match(this.interpolator.nestingRegexp);
        f = m && m.length;
      }
      let g = n.replace && typeof n.replace != "string" ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), t = this.interpolator.interpolate(t, g, n.lng || this.language, n), h) {
        const m = t.match(this.interpolator.nestingRegexp), v = m && m.length;
        f < v && (n.nest = !1);
      }
      !n.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (n.lng = o.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var m = arguments.length, v = new Array(m), C = 0; C < m; C++)
          v[C] = arguments[C];
        return a && a[0] === v[0] && !n.context ? (c.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${e[0]}`), null) : c.translate(...v, e);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, u = typeof l == "string" ? [l] : l;
    return t != null && u && u.length && n.applyPostProcessor !== !1 && (t = wp.handle(u, t, e, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), t;
  }
  resolve(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, a, c, l;
    return typeof t == "string" && (t = [t]), t.forEach((u) => {
      if (this.isValidLookup(n))
        return;
      const h = this.extractFromKey(u, e), f = h.key;
      o = f;
      let g = h.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const m = e.count !== void 0 && typeof e.count != "string", v = m && !e.ordinal && e.count === 0 && this.pluralResolver.shouldUseIntlApi(), C = e.context !== void 0 && (typeof e.context == "string" || typeof e.context == "number") && e.context !== "", b = e.lngs ? e.lngs : this.languageUtils.toResolveHierarchy(e.lng || this.language, e.fallbackLng);
      g.forEach((_) => {
        this.isValidLookup(n) || (l = _, !ff[`${b[0]}-${_}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(l) && (ff[`${b[0]}-${_}`] = !0, this.logger.warn(`key "${o}" for languages "${b.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach((A) => {
          if (this.isValidLookup(n))
            return;
          c = A;
          const I = [f];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(I, f, A, _, e);
          else {
            let N;
            m && (N = this.pluralResolver.getSuffix(A, e.count, e));
            const x = `${this.options.pluralSeparator}zero`, D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (I.push(f + N), e.ordinal && N.indexOf(D) === 0 && I.push(f + N.replace(D, this.options.pluralSeparator)), v && I.push(f + x)), C) {
              const W = `${f}${this.options.contextSeparator}${e.context}`;
              I.push(W), m && (I.push(W + N), e.ordinal && N.indexOf(D) === 0 && I.push(W + N.replace(D, this.options.pluralSeparator)), v && I.push(W + x));
            }
          }
          let T;
          for (; T = I.pop(); )
            this.isValidLookup(n) || (a = T, n = this.getResource(A, _, T, e));
        }));
      });
    }), {
      res: n,
      usedKey: o,
      exactUsedKey: a,
      usedLng: c,
      usedNS: l
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, e, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, o) : this.resourceStore.getResource(t, e, n, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const e = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = t.replace && typeof t.replace != "string";
    let o = n ? t.replace : t;
    if (n && typeof t.count < "u" && (o.count = t.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !n) {
      o = {
        ...o
      };
      for (const a of e)
        delete o[a];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const e = "defaultValue";
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n) && e === n.substring(0, e.length) && t[n] !== void 0)
        return !0;
    return !1;
  }
}
function Xc(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class pf {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Jr.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Wa(t), !t || t.indexOf("-") < 0)
      return null;
    const e = t.split("-");
    return e.length === 2 || (e.pop(), e[e.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(e.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Wa(t), !t || t.indexOf("-") < 0)
      return t;
    const e = t.split("-");
    return this.formatLanguageCode(e[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n = t.split("-");
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Xc(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Xc(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Xc(n[2].toLowerCase()))), n.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t)
      return null;
    let e;
    return t.forEach((n) => {
      if (e)
        return;
      const o = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (e = o);
    }), !e && this.options.supportedLngs && t.forEach((n) => {
      if (e)
        return;
      const o = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(o))
        return e = o;
      e = this.options.supportedLngs.find((a) => {
        if (a === o)
          return a;
        if (!(a.indexOf("-") < 0 && o.indexOf("-") < 0) && a.indexOf(o) === 0)
          return a;
      });
    }), e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]), e;
  }
  getFallbackCodes(t, e) {
    if (!t)
      return [];
    if (typeof t == "function" && (t = t(e)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
      return t;
    if (!e)
      return t.default || [];
    let n = t[e];
    return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t[this.getLanguagePartFromCode(e)]), n || (n = t.default), n || [];
  }
  toResolveHierarchy(t, e) {
    const n = this.getFallbackCodes(e || this.options.fallbackLng || [], t), o = [], a = (c) => {
      c && (this.isSupportedCode(c) ? o.push(c) : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(t))) : typeof t == "string" && a(this.formatLanguageCode(t)), n.forEach((c) => {
      o.indexOf(c) < 0 && a(this.formatLanguageCode(c));
    }), o;
  }
}
let uS = [{
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
}], dS = {
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
const hS = ["v1", "v2", "v3"], fS = ["v4"], gf = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function pS() {
  const r = {};
  return uS.forEach((t) => {
    t.lngs.forEach((e) => {
      r[e] = {
        numbers: t.nr,
        plurals: dS[t.fc]
      };
    });
  }), r;
}
class gS {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = e, this.logger = Jr.create("pluralResolver"), (!this.options.compatibilityJSON || fS.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = pS();
  }
  addRule(t, e) {
    this.rules[t] = e;
  }
  getRule(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Wa(t), {
          type: e.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(t, e);
    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
  }
  getPluralFormsOfKey(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, n).map((o) => `${e}${o}`);
  }
  getSuffixes(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(t, e);
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, a) => gf[o] - gf[a]).map((o) => `${this.options.prepend}${e.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(t, o, e)) : [];
  }
  getSuffix(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, n);
    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(e)}` : this.getSuffixRetroCompatible(o, e) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, e) {
    const n = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e));
    let o = t.numbers[n];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
    const a = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : a() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? a() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
  }
  shouldUseIntlApi() {
    return !hS.includes(this.options.compatibilityJSON);
  }
}
function mf(r, t, e) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = iS(r, t, e);
  return !a && o && typeof e == "string" && (a = za(r, e, n), a === void 0 && (a = za(t, e, n))), a;
}
class mS {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Jr.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((e) => e), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const e = t.interpolation;
    this.escape = e.escape !== void 0 ? e.escape : sS, this.escapeValue = e.escapeValue !== void 0 ? e.escapeValue : !0, this.useRawValueToEscape = e.useRawValueToEscape !== void 0 ? e.useRawValueToEscape : !1, this.prefix = e.prefix ? Po(e.prefix) : e.prefixEscaped || "{{", this.suffix = e.suffix ? Po(e.suffix) : e.suffixEscaped || "}}", this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",", this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "", this.nestingPrefix = e.nestingPrefix ? Po(e.nestingPrefix) : e.nestingPrefixEscaped || Po("$t("), this.nestingSuffix = e.nestingSuffix ? Po(e.nestingSuffix) : e.nestingSuffixEscaped || Po(")"), this.nestingOptionsSeparator = e.nestingOptionsSeparator ? e.nestingOptionsSeparator : e.nestingOptionsSeparator || ",", this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3, this.alwaysFormat = e.alwaysFormat !== void 0 ? e.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, "g");
    const e = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(e, "g");
    const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(n, "g");
  }
  interpolate(t, e, n, o) {
    let a, c, l;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function h(C) {
      return C.replace(/\$/g, "$$$$");
    }
    const f = (C) => {
      if (C.indexOf(this.formatSeparator) < 0) {
        const I = mf(e, u, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(I, void 0, n, {
          ...o,
          ...e,
          interpolationkey: C
        }) : I;
      }
      const b = C.split(this.formatSeparator), _ = b.shift().trim(), A = b.join(this.formatSeparator).trim();
      return this.format(mf(e, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), A, n, {
        ...o,
        ...e,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const g = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, m = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (C) => h(C)
    }, {
      regex: this.regexp,
      safeValue: (C) => this.escapeValue ? h(this.escape(C)) : h(C)
    }].forEach((C) => {
      for (l = 0; a = C.regex.exec(t); ) {
        const b = a[1].trim();
        if (c = f(b), c === void 0)
          if (typeof g == "function") {
            const A = g(t, a, o);
            c = typeof A == "string" ? A : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, b))
            c = "";
          else if (m) {
            c = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${b} for interpolating ${t}`), c = "";
        else
          typeof c != "string" && !this.useRawValueToEscape && (c = uf(c));
        const _ = C.safeValue(c);
        if (t = t.replace(a[0], _), m ? (C.regex.lastIndex += c.length, C.regex.lastIndex -= a[0].length) : C.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, a, c;
    function l(u, h) {
      const f = this.nestingOptionsSeparator;
      if (u.indexOf(f) < 0)
        return u;
      const g = u.split(new RegExp(`${f}[ ]*{`));
      let m = `{${g[1]}`;
      u = g[0], m = this.interpolate(m, c);
      const v = m.match(/'/g), C = m.match(/"/g);
      (v && v.length % 2 === 0 && !C || C.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        c = JSON.parse(m), h && (c = {
          ...h,
          ...c
        });
      } catch (b) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, b), `${u}${f}${m}`;
      }
      return delete c.defaultValue, u;
    }
    for (; o = this.nestingRegexp.exec(t); ) {
      let u = [];
      c = {
        ...n
      }, c = c.replace && typeof c.replace != "string" ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let h = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const f = o[1].split(this.formatSeparator).map((g) => g.trim());
        o[1] = f.shift(), u = f, h = !0;
      }
      if (a = e(l.call(this, o[1].trim(), c), c), a && o[0] === t && typeof a != "string")
        return a;
      typeof a != "string" && (a = uf(a)), a || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), a = ""), h && (a = u.reduce((f, g) => this.format(f, g, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), a.trim())), t = t.replace(o[0], a), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function vS(r) {
  let t = r.toLowerCase().trim();
  const e = {};
  if (r.indexOf("(") > -1) {
    const n = r.split("(");
    t = n[0].toLowerCase().trim();
    const o = n[1].substring(0, n[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? e.currency || (e.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? e.range || (e.range = o.trim()) : o.split(";").forEach((c) => {
      if (!c)
        return;
      const [l, ...u] = c.split(":"), h = u.join(":").trim().replace(/^'+|'+$/g, "");
      e[l.trim()] || (e[l.trim()] = h), h === "false" && (e[l.trim()] = !1), h === "true" && (e[l.trim()] = !0), isNaN(h) || (e[l.trim()] = parseInt(h, 10));
    });
  }
  return {
    formatName: t,
    formatOptions: e
  };
}
function No(r) {
  const t = {};
  return function(n, o, a) {
    const c = o + JSON.stringify(a);
    let l = t[c];
    return l || (l = r(Wa(o), a), t[c] = l), l(n);
  };
}
class yS {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Jr.create("formatter"), this.options = t, this.formats = {
      number: No((e, n) => {
        const o = new Intl.NumberFormat(e, {
          ...n
        });
        return (a) => o.format(a);
      }),
      currency: No((e, n) => {
        const o = new Intl.NumberFormat(e, {
          ...n,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: No((e, n) => {
        const o = new Intl.DateTimeFormat(e, {
          ...n
        });
        return (a) => o.format(a);
      }),
      relativetime: No((e, n) => {
        const o = new Intl.RelativeTimeFormat(e, {
          ...n
        });
        return (a) => o.format(a, n.range || "day");
      }),
      list: No((e, n) => {
        const o = new Intl.ListFormat(e, {
          ...n
        });
        return (a) => o.format(a);
      })
    }, this.init(t);
  }
  init(t) {
    const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
  }
  add(t, e) {
    this.formats[t.toLowerCase().trim()] = e;
  }
  addCached(t, e) {
    this.formats[t.toLowerCase().trim()] = No(e);
  }
  format(t, e, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return e.split(this.formatSeparator).reduce((l, u) => {
      const {
        formatName: h,
        formatOptions: f
      } = vS(u);
      if (this.formats[h]) {
        let g = l;
        try {
          const m = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, v = m.locale || m.lng || o.locale || o.lng || n;
          g = this.formats[h](l, v, {
            ...f,
            ...o,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${h}`);
      return l;
    }, t);
  }
}
function CS(r, t) {
  r.pending[t] !== void 0 && (delete r.pending[t], r.pendingCount--);
}
class ES extends ps {
  constructor(t, e, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = e, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = Jr.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
  }
  queueLoad(t, e, n, o) {
    const a = {}, c = {}, l = {}, u = {};
    return t.forEach((h) => {
      let f = !0;
      e.forEach((g) => {
        const m = `${h}|${g}`;
        !n.reload && this.store.hasResourceBundle(h, g) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? c[m] === void 0 && (c[m] = !0) : (this.state[m] = 1, f = !1, c[m] === void 0 && (c[m] = !0), a[m] === void 0 && (a[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), f || (l[h] = !0);
    }), (Object.keys(a).length || Object.keys(c).length) && this.queue.push({
      pending: c,
      pendingCount: Object.keys(c).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(a),
      pending: Object.keys(c),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(t, e, n) {
    const o = t.split("|"), a = o[0], c = o[1];
    e && this.emit("failedLoading", a, c, e), n && this.store.addResourceBundle(a, c, n), this.state[t] = e ? -1 : 2;
    const l = {};
    this.queue.forEach((u) => {
      oS(u.loaded, [a], c), CS(u, t), e && u.errors.push(e), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((h) => {
        l[h] || (l[h] = {});
        const f = u.loaded[h];
        f.length && f.forEach((g) => {
          l[h][g] === void 0 && (l[h][g] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((u) => !u.done);
  }
  read(t, e, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, c = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length)
      return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: e,
        fcName: n,
        tried: o,
        wait: a,
        callback: c
      });
      return;
    }
    this.readingCalls++;
    const l = (h, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const g = this.waitingReads.shift();
        this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
      }
      if (h && f && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, e, n, o + 1, a * 2, c);
        }, a);
        return;
      }
      c(h, f);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const h = u(t, e);
        h && typeof h.then == "function" ? h.then((f) => l(null, f)).catch(l) : l(null, h);
      } catch (h) {
        l(h);
      }
      return;
    }
    return u(t, e, l);
  }
  prepareLoading(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof e == "string" && (e = [e]);
    const a = this.queueLoad(t, e, n, o);
    if (!a.toLoad.length)
      return a.pending.length || o(), null;
    a.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(t, e, n) {
    this.prepareLoading(t, e, {}, n);
  }
  reload(t, e, n) {
    this.prepareLoading(t, e, {
      reload: !0
    }, n);
  }
  loadOne(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = t.split("|"), o = n[0], a = n[1];
    this.read(o, a, "read", void 0, void 0, (c, l) => {
      c && this.logger.warn(`${e}loading namespace ${a} for language ${o} failed`, c), !c && l && this.logger.log(`${e}loaded namespace ${a} for language ${o}`, l), this.loaded(t, c, l);
    });
  }
  saveMissing(t, e, n, o, a) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend && this.backend.create) {
        const u = {
          ...c,
          isUpdate: a
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let f;
            h.length === 5 ? f = h(t, e, n, o, u) : f = h(t, e, n, o), f && typeof f.then == "function" ? f.then((g) => l(null, g)).catch(l) : l(null, f);
          } catch (f) {
            l(f);
          }
        else
          h(t, e, n, o, l, u);
      }
      !t || !t[0] || this.store.addResource(t[0], e, n, o);
    }
  }
}
function vf() {
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
      let e = {};
      if (typeof t[1] == "object" && (e = t[1]), typeof t[1] == "string" && (e.defaultValue = t[1]), typeof t[2] == "string" && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const n = t[3] || t[2];
        Object.keys(n).forEach((o) => {
          e[o] = n[o];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (r, t, e, n) => r,
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
function yf(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function Da() {
}
function wS(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((e) => {
    typeof r[e] == "function" && (r[e] = r[e].bind(r));
  });
}
class Oi extends ps {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = yf(t), this.services = {}, this.logger = Jr, this.modules = {
      external: []
    }, wS(this), e && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, e), this;
      setTimeout(() => {
        this.init(t, e);
      }, 0);
    }
  }
  init() {
    var t = this;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    typeof e == "function" && (n = e, e = {}), !e.defaultNS && e.defaultNS !== !1 && e.ns && (typeof e.ns == "string" ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const o = vf();
    this.options = {
      ...o,
      ...this.options,
      ...yf(e)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    function a(f) {
      return f ? typeof f == "function" ? new f() : f : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Jr.init(a(this.modules.logger), this.options) : Jr.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : typeof Intl < "u" && (f = yS);
      const g = new pf(this.options);
      this.store = new hf(this.options.resources, this.options);
      const m = this.services;
      m.logger = Jr, m.resourceStore = this.store, m.languageUtils = g, m.pluralResolver = new gS(g, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (m.formatter = a(f), m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new mS(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new ES(a(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", function(v) {
        for (var C = arguments.length, b = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          b[_ - 1] = arguments[_];
        t.emit(v, ...b);
      }), this.modules.languageDetector && (m.languageDetector = a(this.modules.languageDetector), m.languageDetector.init && m.languageDetector.init(m, this.options.detection, this.options)), this.modules.i18nFormat && (m.i18nFormat = a(this.modules.i18nFormat), m.i18nFormat.init && m.i18nFormat.init(this)), this.translator = new Va(this.services, this.options), this.translator.on("*", function(v) {
        for (var C = arguments.length, b = new Array(C > 1 ? C - 1 : 0), _ = 1; _ < C; _++)
          b[_ - 1] = arguments[_];
        t.emit(v, ...b);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = Da), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((f) => {
      this[f] = function() {
        return t.store[f](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((f) => {
      this[f] = function() {
        return t.store[f](...arguments), t;
      };
    });
    const u = vi(), h = () => {
      const f = (g, m) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(m), n(g, m);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initImmediate ? h() : setTimeout(h, 0), u;
  }
  loadResources(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Da;
    const o = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return n();
      const a = [], c = (l) => {
        if (!l || l === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((h) => {
          h !== "cimode" && a.indexOf(h) < 0 && a.push(h);
        });
      };
      o ? c(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => c(u)), this.options.preload && this.options.preload.forEach((l) => c(l)), this.services.backendConnector.load(a, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(l);
      });
    } else
      n(null);
  }
  reloadResources(t, e, n) {
    const o = vi();
    return t || (t = this.languages), e || (e = this.options.ns), n || (n = Da), this.services.backendConnector.reload(t, e, (a) => {
      o.resolve(), n(a);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && wp.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let e = 0; e < this.languages.length; e++) {
        const n = this.languages[e];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(t, e) {
    var n = this;
    this.isLanguageChangingTo = t;
    const o = vi();
    this.emit("languageChanging", t);
    const a = (u) => {
      this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u);
    }, c = (u, h) => {
      h ? (a(h), this.translator.changeLanguage(h), this.isLanguageChangingTo = void 0, this.emit("languageChanged", h), this.logger.log("languageChanged", h)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return n.t(...arguments);
      }), e && e(u, function() {
        return n.t(...arguments);
      });
    }, l = (u) => {
      !t && !u && this.services.languageDetector && (u = []);
      const h = typeof u == "string" ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      h && (this.language || a(h), this.translator.language || this.translator.changeLanguage(h), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(h)), this.loadResources(h, (f) => {
        c(f, h);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(t), o;
  }
  getFixedT(t, e, n) {
    var o = this;
    const a = function(c, l) {
      let u;
      if (typeof l != "object") {
        for (var h = arguments.length, f = new Array(h > 2 ? h - 2 : 0), g = 2; g < h; g++)
          f[g - 2] = arguments[g];
        u = o.options.overloadTranslationOptionHandler([c, l].concat(f));
      } else
        u = {
          ...l
        };
      u.lng = u.lng || a.lng, u.lngs = u.lngs || a.lngs, u.ns = u.ns || a.ns, u.keyPrefix = u.keyPrefix || n || a.keyPrefix;
      const m = o.options.keySeparator || ".";
      let v;
      return u.keyPrefix && Array.isArray(c) ? v = c.map((C) => `${u.keyPrefix}${m}${C}`) : v = u.keyPrefix ? `${u.keyPrefix}${m}${c}` : c, o.t(v, u);
    };
    return typeof t == "string" ? a.lng = t : a.lngs = t, a.ns = e, a.keyPrefix = n, a;
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
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = e.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, a = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode")
      return !0;
    const c = (l, u) => {
      const h = this.services.backendConnector.state[`${l}|${u}`];
      return h === -1 || h === 2;
    };
    if (e.precheck) {
      const l = e.precheck(this, c);
      if (l !== void 0)
        return l;
    }
    return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(n, t) && (!o || c(a, t)));
  }
  loadNamespaces(t, e) {
    const n = vi();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), e && e(o);
    }), n) : (e && e(), Promise.resolve());
  }
  loadLanguages(t, e) {
    const n = vi();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], a = t.filter((c) => o.indexOf(c) < 0);
    return a.length ? (this.options.preload = o.concat(a), this.loadResources((c) => {
      n.resolve(), e && e(c);
    }), n) : (e && e(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const e = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new pf(vf());
    return e.indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
    return new Oi(t, e);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Da;
    const n = t.forkResourceStore;
    n && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, a = new Oi(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)), ["store", "services", "language"].forEach((l) => {
      a[l] = this[l];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, n && (a.store = new hf(this.store.data, o), a.services.resourceStore = a.store), a.translator = new Va(a.services, o), a.translator.on("*", function(l) {
      for (var u = arguments.length, h = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
        h[f - 1] = arguments[f];
      a.emit(l, ...h);
    }), a.init(o, e), a.translator.options = o, a.translator.backendConnector.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, a;
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
const Kt = Oi.createInstance();
Kt.createInstance = Oi.createInstance;
Kt.createInstance;
Kt.dir;
Kt.init;
Kt.loadResources;
Kt.reloadResources;
Kt.use;
Kt.changeLanguage;
Kt.getFixedT;
Kt.t;
Kt.exists;
Kt.setDefaultNamespace;
Kt.hasLoadedNamespace;
Kt.loadNamespaces;
Kt.loadLanguages;
function bS() {
  if (console && console.warn) {
    for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
      t[e] = arguments[e];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Cf = {};
function fl() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  typeof t[0] == "string" && Cf[t[0]] || (typeof t[0] == "string" && (Cf[t[0]] = /* @__PURE__ */ new Date()), bS(...t));
}
const bp = (r, t) => () => {
  if (r.isInitialized)
    t();
  else {
    const e = () => {
      setTimeout(() => {
        r.off("initialized", e);
      }, 0), t();
    };
    r.on("initialized", e);
  }
};
function Ef(r, t, e) {
  r.loadNamespaces(t, bp(r, e));
}
function wf(r, t, e, n) {
  typeof e == "string" && (e = [e]), e.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(t, bp(r, n));
}
function _S(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = t.languages[0], o = t.options ? t.options.fallbackLng : !1, a = t.languages[t.languages.length - 1];
  if (n.toLowerCase() === "cimode")
    return !0;
  const c = (l, u) => {
    const h = t.services.backendConnector.state[`${l}|${u}`];
    return h === -1 || h === 2;
  };
  return e.bindI18n && e.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !c(t.isLanguageChangingTo, r) ? !1 : !!(t.hasResourceBundle(n, r) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || c(n, r) && (!o || c(a, r)));
}
function SS(r, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (fl("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(r, {
    lng: e.lng,
    precheck: (o, a) => {
      if (e.bindI18n && e.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : _S(r, t, e);
}
const TS = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, IS = {
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
}, AS = (r) => IS[r], RS = (r) => r.replace(TS, AS);
let pl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: RS
};
function kS() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  pl = {
    ...pl,
    ...r
  };
}
function PS() {
  return pl;
}
let _p;
function NS(r) {
  _p = r;
}
function OS() {
  return _p;
}
const MS = {
  type: "3rdParty",
  init(r) {
    kS(r.options.react), NS(r);
  }
}, xS = Fn();
class LS {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((e) => {
      this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const DS = (r, t) => {
  const e = Ke();
  return me(() => {
    e.current = t ? e.current : r;
  }, [r, t]), e.current;
};
function Ul(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: e
  } = t, {
    i18n: n,
    defaultNS: o
  } = Bn(xS) || {}, a = e || n || OS();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new LS()), !a) {
    fl("You will need to pass in an i18next instance by using initReactI18next");
    const T = (x, D) => typeof D == "string" ? D : D && typeof D == "object" && typeof D.defaultValue == "string" ? D.defaultValue : Array.isArray(x) ? x[x.length - 1] : x, N = [T, {}, !1];
    return N.t = T, N.i18n = {}, N.ready = !1, N;
  }
  a.options.react && a.options.react.wait !== void 0 && fl("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...PS(),
    ...a.options.react,
    ...t
  }, {
    useSuspense: l,
    keyPrefix: u
  } = c;
  let h = r || o || a.options && a.options.defaultNS;
  h = typeof h == "string" ? [h] : h || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(h);
  const f = (a.isInitialized || a.initializedStoreOnce) && h.every((T) => SS(T, a, c));
  function g() {
    return a.getFixedT(t.lng || null, c.nsMode === "fallback" ? h : h[0], u);
  }
  const [m, v] = pe(g);
  let C = h.join();
  t.lng && (C = `${t.lng}${C}`);
  const b = DS(C), _ = Ke(!0);
  me(() => {
    const {
      bindI18n: T,
      bindI18nStore: N
    } = c;
    _.current = !0, !f && !l && (t.lng ? wf(a, t.lng, h, () => {
      _.current && v(g);
    }) : Ef(a, h, () => {
      _.current && v(g);
    })), f && b && b !== C && _.current && v(g);
    function x() {
      _.current && v(g);
    }
    return T && a && a.on(T, x), N && a && a.store.on(N, x), () => {
      _.current = !1, T && a && T.split(" ").forEach((D) => a.off(D, x)), N && a && N.split(" ").forEach((D) => a.store.off(D, x));
    };
  }, [a, C]);
  const A = Ke(!0);
  me(() => {
    _.current && !A.current && v(g), A.current = !1;
  }, [a, u]);
  const I = [m, a, f];
  if (I.t = m, I.i18n = a, I.ready = f, f || !f && !l)
    return I;
  throw new Promise((T) => {
    t.lng ? wf(a, t.lng, h, () => T()) : Ef(a, h, () => T());
  });
}
Kt.use(MS).init({
  resources: {
    en: {
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
        Propertysets: "Property sets"
      }
    },
    nl: {
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
        Propertysets: "Eigenschappen sets"
      }
    }
  },
  lng: "nl",
  fallbackLng: "en",
  interpolation: {
    escapeValue: !1
  }
});
/*! @azure/msal-browser v2.38.3 2023-10-27 */
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
var gl = function(r, t) {
  return gl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
  }, gl(r, t);
};
function Pt(r, t) {
  gl(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var ae = function() {
  return ae = Object.assign || function(t) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function bf(r, t) {
  var e = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(r); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[o]) && (e[n[o]] = r[n[o]]);
  return e;
}
function q(r, t, e, n) {
  function o(a) {
    return a instanceof e ? a : new e(function(c) {
      c(a);
    });
  }
  return new (e || (e = Promise))(function(a, c) {
    function l(f) {
      try {
        h(n.next(f));
      } catch (g) {
        c(g);
      }
    }
    function u(f) {
      try {
        h(n.throw(f));
      } catch (g) {
        c(g);
      }
    }
    function h(f) {
      f.done ? a(f.value) : o(f.value).then(l, u);
    }
    h((n = n.apply(r, t || [])).next());
  });
}
function $(r, t) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, o, a, c;
  return c = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function l(h) {
    return function(f) {
      return u([h, f]);
    };
  }
  function u(h) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, o && (a = h[0] & 2 ? o.return : h[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, h[1])).done)
          return a;
        switch (o = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
          case 0:
          case 1:
            a = h;
            break;
          case 4:
            return e.label++, { value: h[1], done: !1 };
          case 5:
            e.label++, o = h[1], h = [0];
            continue;
          case 7:
            h = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              e = 0;
              continue;
            }
            if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
              e.label = h[1];
              break;
            }
            if (h[0] === 6 && e.label < a[1]) {
              e.label = a[1], a = h;
              break;
            }
            if (a && e.label < a[2]) {
              e.label = a[2], e.ops.push(h);
              break;
            }
            a[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        h = t.call(r, e);
      } catch (f) {
        h = [6, f], o = 0;
      } finally {
        n = a = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function US(r, t) {
  var e = typeof Symbol == "function" && r[Symbol.iterator];
  if (!e)
    return r;
  var n = e.call(r), o, a = [], c;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
      a.push(o.value);
  } catch (l) {
    c = { error: l };
  } finally {
    try {
      o && !o.done && (e = n.return) && e.call(n);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return a;
}
function Hl() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r = r.concat(US(arguments[t]));
  return r;
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
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
var ml = function(r, t) {
  return ml = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
  }, ml(r, t);
};
function nr(r, t) {
  ml(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var $e = function() {
  return $e = Object.assign || function(t) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, $e.apply(this, arguments);
};
function _e(r, t, e, n) {
  function o(a) {
    return a instanceof e ? a : new e(function(c) {
      c(a);
    });
  }
  return new (e || (e = Promise))(function(a, c) {
    function l(f) {
      try {
        h(n.next(f));
      } catch (g) {
        c(g);
      }
    }
    function u(f) {
      try {
        h(n.throw(f));
      } catch (g) {
        c(g);
      }
    }
    function h(f) {
      f.done ? a(f.value) : o(f.value).then(l, u);
    }
    h((n = n.apply(r, t || [])).next());
  });
}
function Se(r, t) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, o, a, c;
  return c = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function l(h) {
    return function(f) {
      return u([h, f]);
    };
  }
  function u(h) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, o && (a = h[0] & 2 ? o.return : h[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, h[1])).done)
          return a;
        switch (o = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
          case 0:
          case 1:
            a = h;
            break;
          case 4:
            return e.label++, { value: h[1], done: !1 };
          case 5:
            e.label++, o = h[1], h = [0];
            continue;
          case 7:
            h = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              e = 0;
              continue;
            }
            if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
              e.label = h[1];
              break;
            }
            if (h[0] === 6 && e.label < a[1]) {
              e.label = a[1], a = h;
              break;
            }
            if (a && e.label < a[2]) {
              e.label = a[2], e.ops.push(h);
              break;
            }
            a[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        h = t.call(r, e);
      } catch (f) {
        h = [6, f], o = 0;
      } finally {
        n = a = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function gs() {
  for (var r = 0, t = 0, e = arguments.length; t < e; t++)
    r += arguments[t].length;
  for (var n = Array(r), o = 0, t = 0; t < e; t++)
    for (var a = arguments[t], c = 0, l = a.length; c < l; c++, o++)
      n[o] = a[c];
  return n;
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var P = {
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
}, Fi = [
  P.OPENID_SCOPE,
  P.PROFILE_SCOPE,
  P.OFFLINE_ACCESS_SCOPE
], _f = gs(Fi, [
  P.EMAIL_SCOPE
]), pr;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(pr || (pr = {}));
var Ct;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(Ct || (Ct = {}));
var oo;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(oo || (oo = {}));
var Ae;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(Ae || (Ae = {}));
var Mo;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(Mo || (Mo = {}));
var Ft = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, _i;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(_i || (_i = {}));
var Sf = {
  PLAIN: "plain",
  S256: "S256"
}, Ya;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(Ya || (Ya = {}));
var ja;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(ja || (ja = {}));
var gn;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(gn || (gn = {}));
var wt;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(wt || (wt = {}));
var fe;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(fe || (fe = {}));
var mn;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(mn || (mn = {}));
var vl = "appmetadata", HS = "client_info", Si = "1", Ti = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, Ir;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(Ir || (Ir = {}));
var At = {
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
}, ze;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(ze || (ze = {}));
var Ii = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Tf = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, Qa;
(function(r) {
  r.username = "username", r.password = "password";
})(Qa || (Qa = {}));
var xo;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(xo || (xo = {}));
var xn;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(xn || (xn = {}));
var Ai;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Ai || (Ai = {}));
var Dn;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(Dn || (Dn = {}));
var yl;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(yl || (yl = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ua = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, ue = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n, o) {
      var a = this, c = n ? e + ": " + n : e;
      return a = r.call(this, c) || this, Object.setPrototypeOf(a, t.prototype), a.errorCode = e || P.EMPTY_STRING, a.errorMessage = n || P.EMPTY_STRING, a.subError = o || P.EMPTY_STRING, a.name = "AuthError", a;
    }
    return t.prototype.setCorrelationId = function(e) {
      this.correlationId = e;
    }, t.createUnexpectedError = function(e) {
      return new t(Ua.unexpectedError.code, Ua.unexpectedError.desc + ": " + e);
    }, t.createPostRequestFailed = function(e) {
      return new t(Ua.postRequestFailed.code, Ua.postRequestFailed.desc + ": " + e);
    }, t;
  }(Error)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ja = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw ue.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw ue.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw ue.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Crypto interface - signJwt() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Crypto interface - hashString() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  }
};
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Y = {
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
}, ee = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n) {
      var o = r.call(this, e, n) || this;
      return o.name = "ClientAuthError", Object.setPrototypeOf(o, t.prototype), o;
    }
    return t.createClientInfoDecodingError = function(e) {
      return new t(Y.clientInfoDecodingError.code, Y.clientInfoDecodingError.desc + " Failed with error: " + e);
    }, t.createClientInfoEmptyError = function() {
      return new t(Y.clientInfoEmptyError.code, "" + Y.clientInfoEmptyError.desc);
    }, t.createTokenParsingError = function(e) {
      return new t(Y.tokenParsingError.code, Y.tokenParsingError.desc + " Failed with error: " + e);
    }, t.createTokenNullOrEmptyError = function(e) {
      return new t(Y.nullOrEmptyToken.code, Y.nullOrEmptyToken.desc + " Raw Token Value: " + e);
    }, t.createEndpointDiscoveryIncompleteError = function(e) {
      return new t(Y.endpointResolutionError.code, Y.endpointResolutionError.desc + " Detail: " + e);
    }, t.createNetworkError = function(e, n) {
      return new t(Y.networkError.code, Y.networkError.desc + " | Fetch client threw: " + n + " | Attempted to reach: " + e.split("?")[0]);
    }, t.createUnableToGetOpenidConfigError = function(e) {
      return new t(Y.unableToGetOpenidConfigError.code, Y.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + e);
    }, t.createHashNotDeserializedError = function(e) {
      return new t(Y.hashNotDeserialized.code, Y.hashNotDeserialized.desc + " Given Object: " + e);
    }, t.createInvalidStateError = function(e, n) {
      return new t(Y.invalidStateError.code, Y.invalidStateError.desc + " Invalid State: " + e + ", Root Err: " + n);
    }, t.createStateMismatchError = function() {
      return new t(Y.stateMismatchError.code, Y.stateMismatchError.desc);
    }, t.createStateNotFoundError = function(e) {
      return new t(Y.stateNotFoundError.code, Y.stateNotFoundError.desc + ":  " + e);
    }, t.createNonceMismatchError = function() {
      return new t(Y.nonceMismatchError.code, Y.nonceMismatchError.desc);
    }, t.createAuthTimeNotFoundError = function() {
      return new t(Y.authTimeNotFoundError.code, Y.authTimeNotFoundError.desc);
    }, t.createMaxAgeTranspiredError = function() {
      return new t(Y.maxAgeTranspiredError.code, Y.maxAgeTranspiredError.desc);
    }, t.createNonceNotFoundError = function(e) {
      return new t(Y.nonceNotFoundError.code, Y.nonceNotFoundError.desc + ":  " + e);
    }, t.createMultipleMatchingTokensInCacheError = function() {
      return new t(Y.multipleMatchingTokens.code, Y.multipleMatchingTokens.desc + ".");
    }, t.createMultipleMatchingAccountsInCacheError = function() {
      return new t(Y.multipleMatchingAccounts.code, Y.multipleMatchingAccounts.desc);
    }, t.createMultipleMatchingAppMetadataInCacheError = function() {
      return new t(Y.multipleMatchingAppMetadata.code, Y.multipleMatchingAppMetadata.desc);
    }, t.createTokenRequestCannotBeMadeError = function() {
      return new t(Y.tokenRequestCannotBeMade.code, Y.tokenRequestCannotBeMade.desc);
    }, t.createAppendEmptyScopeToSetError = function(e) {
      return new t(Y.appendEmptyScopeError.code, Y.appendEmptyScopeError.desc + " Given Scope: " + e);
    }, t.createRemoveEmptyScopeFromSetError = function(e) {
      return new t(Y.removeEmptyScopeError.code, Y.removeEmptyScopeError.desc + " Given Scope: " + e);
    }, t.createAppendScopeSetError = function(e) {
      return new t(Y.appendScopeSetError.code, Y.appendScopeSetError.desc + " Detail Error: " + e);
    }, t.createEmptyInputScopeSetError = function() {
      return new t(Y.emptyInputScopeSetError.code, "" + Y.emptyInputScopeSetError.desc);
    }, t.createDeviceCodeCancelledError = function() {
      return new t(Y.DeviceCodePollingCancelled.code, "" + Y.DeviceCodePollingCancelled.desc);
    }, t.createDeviceCodeExpiredError = function() {
      return new t(Y.DeviceCodeExpired.code, "" + Y.DeviceCodeExpired.desc);
    }, t.createDeviceCodeUnknownError = function() {
      return new t(Y.DeviceCodeUnknownError.code, "" + Y.DeviceCodeUnknownError.desc);
    }, t.createNoAccountInSilentRequestError = function() {
      return new t(Y.NoAccountInSilentRequest.code, "" + Y.NoAccountInSilentRequest.desc);
    }, t.createNullOrUndefinedCacheRecord = function() {
      return new t(Y.invalidCacheRecord.code, Y.invalidCacheRecord.desc);
    }, t.createInvalidCacheEnvironmentError = function() {
      return new t(Y.invalidCacheEnvironment.code, Y.invalidCacheEnvironment.desc);
    }, t.createNoAccountFoundError = function() {
      return new t(Y.noAccountFound.code, Y.noAccountFound.desc);
    }, t.createCachePluginError = function() {
      return new t(Y.CachePluginError.code, "" + Y.CachePluginError.desc);
    }, t.createNoCryptoObjectError = function(e) {
      return new t(Y.noCryptoObj.code, "" + Y.noCryptoObj.desc + e);
    }, t.createInvalidCacheTypeError = function() {
      return new t(Y.invalidCacheType.code, "" + Y.invalidCacheType.desc);
    }, t.createUnexpectedAccountTypeError = function() {
      return new t(Y.unexpectedAccountType.code, "" + Y.unexpectedAccountType.desc);
    }, t.createUnexpectedCredentialTypeError = function() {
      return new t(Y.unexpectedCredentialType.code, "" + Y.unexpectedCredentialType.desc);
    }, t.createInvalidAssertionError = function() {
      return new t(Y.invalidAssertion.code, "" + Y.invalidAssertion.desc);
    }, t.createInvalidCredentialError = function() {
      return new t(Y.invalidClientCredential.code, "" + Y.invalidClientCredential.desc);
    }, t.createRefreshRequiredError = function() {
      return new t(Y.tokenRefreshRequired.code, Y.tokenRefreshRequired.desc);
    }, t.createUserTimeoutReachedError = function() {
      return new t(Y.userTimeoutReached.code, Y.userTimeoutReached.desc);
    }, t.createTokenClaimsRequiredError = function() {
      return new t(Y.tokenClaimsRequired.code, Y.tokenClaimsRequired.desc);
    }, t.createNoAuthCodeInServerResponseError = function() {
      return new t(Y.noAuthorizationCodeFromServer.code, Y.noAuthorizationCodeFromServer.desc);
    }, t.createBindingKeyNotRemovedError = function() {
      return new t(Y.bindingKeyNotRemovedError.code, Y.bindingKeyNotRemovedError.desc);
    }, t.createLogoutNotSupportedError = function() {
      return new t(Y.logoutNotSupported.code, Y.logoutNotSupported.desc);
    }, t.createKeyIdMissingError = function() {
      return new t(Y.keyIdMissing.code, Y.keyIdMissing.desc);
    }, t.createNoNetworkConnectivityError = function() {
      return new t(Y.noNetworkConnectivity.code, Y.noNetworkConnectivity.desc);
    }, t.createUserCanceledError = function() {
      return new t(Y.userCanceledError.code, Y.userCanceledError.desc);
    }, t;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var X = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(t) {
      if (r.isEmpty(t))
        throw ee.createTokenNullOrEmptyError(t);
      var e = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = e.exec(t);
      if (!n || n.length < 4)
        throw ee.createTokenParsingError("Given token is malformed: " + JSON.stringify(t));
      var o = {
        header: n[1],
        JWSPayload: n[2],
        JWSSig: n[3]
      };
      return o;
    }, r.isEmpty = function(t) {
      return typeof t > "u" || !t || t.length === 0;
    }, r.isEmptyObj = function(t) {
      if (t && !r.isEmpty(t))
        try {
          var e = JSON.parse(t);
          return Object.keys(e).length === 0;
        } catch {
        }
      return !0;
    }, r.startsWith = function(t, e) {
      return t.indexOf(e) === 0;
    }, r.endsWith = function(t, e) {
      return t.length >= e.length && t.lastIndexOf(e) === t.length - e.length;
    }, r.queryStringToObject = function(t) {
      var e = {}, n = t.split("&"), o = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "));
      };
      return n.forEach(function(a) {
        if (a.trim()) {
          var c = a.split(/=(.+)/g, 2), l = c[0], u = c[1];
          l && u && (e[o(l)] = o(u));
        }
      }), e;
    }, r.trimArrayEntries = function(t) {
      return t.map(function(e) {
        return e.trim();
      });
    }, r.removeEmptyStringsFromArray = function(t) {
      return t.filter(function(e) {
        return !r.isEmpty(e);
      });
    }, r.jsonParseHelper = function(t) {
      try {
        return JSON.parse(t);
      } catch {
        return null;
      }
    }, r.matchPattern = function(t, e) {
      var n = new RegExp(t.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
      return n.test(e);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var st;
(function(r) {
  r[r.Error = 0] = "Error", r[r.Warning = 1] = "Warning", r[r.Info = 2] = "Info", r[r.Verbose = 3] = "Verbose", r[r.Trace = 4] = "Trace";
})(st || (st = {}));
var ms = (
  /** @class */
  function() {
    function r(t, e, n) {
      this.level = st.Info;
      var o = function() {
      }, a = t || r.createDefaultLoggerOptions();
      this.localCallback = a.loggerCallback || o, this.piiLoggingEnabled = a.piiLoggingEnabled || !1, this.level = typeof a.logLevel == "number" ? a.logLevel : st.Info, this.correlationId = a.correlationId || P.EMPTY_STRING, this.packageName = e || P.EMPTY_STRING, this.packageVersion = n || P.EMPTY_STRING;
    }
    return r.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: st.Info
      };
    }, r.prototype.clone = function(t, e, n) {
      return new r({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, t, e);
    }, r.prototype.logMessage = function(t, e) {
      if (!(e.logLevel > this.level || !this.piiLoggingEnabled && e.containsPii)) {
        var n = (/* @__PURE__ */ new Date()).toUTCString(), o;
        X.isEmpty(e.correlationId) ? X.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + e.correlationId + "]";
        var a = o + " : " + this.packageName + "@" + this.packageVersion + " : " + st[e.logLevel] + " - " + t;
        this.executeCallback(e.logLevel, a, e.containsPii || !1);
      }
    }, r.prototype.executeCallback = function(t, e, n) {
      this.localCallback && this.localCallback(t, e, n);
    }, r.prototype.error = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Error,
        containsPii: !1,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.errorPii = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Error,
        containsPii: !0,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.warning = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Warning,
        containsPii: !1,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.warningPii = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Warning,
        containsPii: !0,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.info = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Info,
        containsPii: !1,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.infoPii = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Info,
        containsPii: !0,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.verbose = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Verbose,
        containsPii: !1,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.verbosePii = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Verbose,
        containsPii: !0,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.trace = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Trace,
        containsPii: !1,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.tracePii = function(t, e) {
      this.logMessage(t, {
        logLevel: st.Trace,
        containsPii: !0,
        correlationId: e || P.EMPTY_STRING
      });
    }, r.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Sp = "@azure/msal-common", Fl = "13.3.1";
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Mi;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(Mi || (Mi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var be = {
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
}, et = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n) {
      var o = r.call(this, e, n) || this;
      return o.name = "ClientConfigurationError", Object.setPrototypeOf(o, t.prototype), o;
    }
    return t.createRedirectUriEmptyError = function() {
      return new t(be.redirectUriNotSet.code, be.redirectUriNotSet.desc);
    }, t.createPostLogoutRedirectUriEmptyError = function() {
      return new t(be.postLogoutUriNotSet.code, be.postLogoutUriNotSet.desc);
    }, t.createClaimsRequestParsingError = function(e) {
      return new t(be.claimsRequestParsingError.code, be.claimsRequestParsingError.desc + " Given value: " + e);
    }, t.createInsecureAuthorityUriError = function(e) {
      return new t(be.authorityUriInsecure.code, be.authorityUriInsecure.desc + " Given URI: " + e);
    }, t.createUrlParseError = function(e) {
      return new t(be.urlParseError.code, be.urlParseError.desc + " Given Error: " + e);
    }, t.createUrlEmptyError = function() {
      return new t(be.urlEmptyError.code, be.urlEmptyError.desc);
    }, t.createEmptyScopesArrayError = function() {
      return new t(be.emptyScopesError.code, "" + be.emptyScopesError.desc);
    }, t.createClientIdSingleScopeError = function(e) {
      return new t(be.clientIdSingleScopeError.code, be.clientIdSingleScopeError.desc + " Given Scopes: " + e);
    }, t.createInvalidPromptError = function(e) {
      return new t(be.invalidPrompt.code, be.invalidPrompt.desc + " Given value: " + e);
    }, t.createInvalidClaimsRequestError = function() {
      return new t(be.invalidClaimsRequest.code, be.invalidClaimsRequest.desc);
    }, t.createEmptyLogoutRequestError = function() {
      return new t(be.logoutRequestEmptyError.code, be.logoutRequestEmptyError.desc);
    }, t.createEmptyTokenRequestError = function() {
      return new t(be.tokenRequestEmptyError.code, be.tokenRequestEmptyError.desc);
    }, t.createInvalidCodeChallengeMethodError = function() {
      return new t(be.invalidCodeChallengeMethod.code, be.invalidCodeChallengeMethod.desc);
    }, t.createInvalidCodeChallengeParamsError = function() {
      return new t(be.invalidCodeChallengeParams.code, be.invalidCodeChallengeParams.desc);
    }, t.createInvalidCloudDiscoveryMetadataError = function() {
      return new t(be.invalidCloudDiscoveryMetadata.code, be.invalidCloudDiscoveryMetadata.desc);
    }, t.createInvalidAuthorityMetadataError = function() {
      return new t(be.invalidAuthorityMetadata.code, be.invalidAuthorityMetadata.desc);
    }, t.createUntrustedAuthorityError = function() {
      return new t(be.untrustedAuthority.code, be.untrustedAuthority.desc);
    }, t.createInvalidAzureCloudInstanceError = function() {
      return new t(be.invalidAzureCloudInstance.code, be.invalidAzureCloudInstance.desc);
    }, t.createMissingSshJwkError = function() {
      return new t(be.missingSshJwk.code, be.missingSshJwk.desc);
    }, t.createMissingSshKidError = function() {
      return new t(be.missingSshKid.code, be.missingSshKid.desc);
    }, t.createMissingNonceAuthenticationHeadersError = function() {
      return new t(be.missingNonceAuthenticationHeader.code, be.missingNonceAuthenticationHeader.desc);
    }, t.createInvalidAuthenticationHeaderError = function(e, n) {
      return new t(be.invalidAuthenticationHeader.code, be.invalidAuthenticationHeader.desc + ". Invalid header: " + e + ". Details: " + n);
    }, t.createAuthorityMismatchError = function() {
      return new t(be.authorityMismatch.code, be.authorityMismatch.desc);
    }, t;
  }(ee)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ut = (
  /** @class */
  function() {
    function r(t) {
      var e = this, n = t ? X.trimArrayEntries(gs(t)) : [], o = n ? X.removeEmptyStringsFromArray(n) : [];
      this.validateInputScopes(o), this.scopes = /* @__PURE__ */ new Set(), o.forEach(function(a) {
        return e.scopes.add(a);
      });
    }
    return r.fromString = function(t) {
      var e = t || P.EMPTY_STRING, n = e.split(" ");
      return new r(n);
    }, r.createSearchScopes = function(t) {
      var e = new r(t);
      return e.containsOnlyOIDCScopes() ? e.removeScope(P.OFFLINE_ACCESS_SCOPE) : e.removeOIDCScopes(), e;
    }, r.prototype.validateInputScopes = function(t) {
      if (!t || t.length < 1)
        throw et.createEmptyScopesArrayError();
    }, r.prototype.containsScope = function(t) {
      var e = this.printScopesLowerCase().split(" "), n = new r(e);
      return X.isEmpty(t) ? !1 : n.scopes.has(t.toLowerCase());
    }, r.prototype.containsScopeSet = function(t) {
      var e = this;
      return !t || t.scopes.size <= 0 ? !1 : this.scopes.size >= t.scopes.size && t.asArray().every(function(n) {
        return e.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var t = this, e = 0;
      return _f.forEach(function(n) {
        t.containsScope(n) && (e += 1);
      }), this.scopes.size === e;
    }, r.prototype.appendScope = function(t) {
      X.isEmpty(t) || this.scopes.add(t.trim());
    }, r.prototype.appendScopes = function(t) {
      var e = this;
      try {
        t.forEach(function(n) {
          return e.appendScope(n);
        });
      } catch (n) {
        throw ee.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(t) {
      if (X.isEmpty(t))
        throw ee.createRemoveEmptyScopeFromSetError(t);
      this.scopes.delete(t.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var t = this;
      _f.forEach(function(e) {
        t.scopes.delete(e);
      });
    }, r.prototype.unionScopeSets = function(t) {
      if (!t)
        throw ee.createEmptyInputScopeSetError();
      var e = /* @__PURE__ */ new Set();
      return t.scopes.forEach(function(n) {
        return e.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return e.add(n.toLowerCase());
      }), e;
    }, r.prototype.intersectingScopeSets = function(t) {
      if (!t)
        throw ee.createEmptyInputScopeSetError();
      t.containsOnlyOIDCScopes() || t.removeOIDCScopes();
      var e = this.unionScopeSets(t), n = t.getScopeCount(), o = this.getScopeCount(), a = e.size;
      return a < o + n;
    }, r.prototype.getScopeCount = function() {
      return this.scopes.size;
    }, r.prototype.asArray = function() {
      var t = [];
      return this.scopes.forEach(function(e) {
        return t.push(e);
      }), t;
    }, r.prototype.printScopes = function() {
      if (this.scopes) {
        var t = this.asArray();
        return t.join(" ");
      }
      return P.EMPTY_STRING;
    }, r.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function Xa(r, t) {
  if (X.isEmpty(r))
    throw ee.createClientInfoEmptyError();
  try {
    var e = t.base64Decode(r);
    return JSON.parse(e);
  } catch (n) {
    throw ee.createClientInfoDecodingError(n.message);
  }
}
function Lo(r) {
  if (X.isEmpty(r))
    throw ee.createClientInfoDecodingError("Home account ID was empty.");
  var t = r.split(wt.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: t[0],
    utid: t.length < 2 ? P.EMPTY_STRING : t[1]
  };
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Wt;
(function(r) {
  r[r.Default = 0] = "Default", r[r.Adfs = 1] = "Adfs", r[r.Dsts = 2] = "Dsts", r[r.Ciam = 3] = "Ciam";
})(Wt || (Wt = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Rt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAccountId = function() {
      var t = [this.homeAccountId, this.environment];
      return t.join(wt.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.prototype.generateAccountKey = function() {
      return r.generateAccountCacheKey({
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId
      });
    }, r.prototype.generateType = function() {
      switch (this.authorityType) {
        case gn.ADFS_ACCOUNT_TYPE:
          return mn.ADFS;
        case gn.MSAV1_ACCOUNT_TYPE:
          return mn.MSA;
        case gn.MSSTS_ACCOUNT_TYPE:
          return mn.MSSTS;
        case gn.GENERIC_ACCOUNT_TYPE:
          return mn.GENERIC;
        default:
          throw ee.createUnexpectedAccountTypeError();
      }
    }, r.prototype.getAccountInfo = function() {
      return {
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId,
        name: this.name,
        idTokenClaims: this.idTokenClaims,
        nativeAccountId: this.nativeAccountId
      };
    }, r.generateAccountCacheKey = function(t) {
      var e = [
        t.homeAccountId,
        t.environment || P.EMPTY_STRING,
        t.tenantId || P.EMPTY_STRING
      ];
      return e.join(wt.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAccount = function(t, e, n, o, a, c, l, u) {
      var h, f, g, m, v, C, b = new r();
      b.authorityType = gn.MSSTS_ACCOUNT_TYPE, b.clientInfo = t, b.homeAccountId = e, b.nativeAccountId = u;
      var _ = l || o && o.getPreferredCache();
      if (!_)
        throw ee.createInvalidCacheEnvironmentError();
      if (b.environment = _, b.realm = ((h = n == null ? void 0 : n.claims) === null || h === void 0 ? void 0 : h.tid) || P.EMPTY_STRING, n) {
        b.idTokenClaims = n.claims, b.localAccountId = ((f = n == null ? void 0 : n.claims) === null || f === void 0 ? void 0 : f.oid) || ((g = n == null ? void 0 : n.claims) === null || g === void 0 ? void 0 : g.sub) || P.EMPTY_STRING;
        var A = (m = n == null ? void 0 : n.claims) === null || m === void 0 ? void 0 : m.preferred_username, I = !((v = n == null ? void 0 : n.claims) === null || v === void 0) && v.emails ? n.claims.emails[0] : null;
        b.username = A || I || P.EMPTY_STRING, b.name = (C = n == null ? void 0 : n.claims) === null || C === void 0 ? void 0 : C.name;
      }
      return b.cloudGraphHostName = a, b.msGraphHost = c, b;
    }, r.createGenericAccount = function(t, e, n, o, a, c) {
      var l, u, h, f, g = new r();
      g.authorityType = n && n.authorityType === Wt.Adfs ? gn.ADFS_ACCOUNT_TYPE : gn.GENERIC_ACCOUNT_TYPE, g.homeAccountId = t, g.realm = P.EMPTY_STRING;
      var m = c || n && n.getPreferredCache();
      if (!m)
        throw ee.createInvalidCacheEnvironmentError();
      return e && (g.localAccountId = ((l = e == null ? void 0 : e.claims) === null || l === void 0 ? void 0 : l.oid) || ((u = e == null ? void 0 : e.claims) === null || u === void 0 ? void 0 : u.sub) || P.EMPTY_STRING, g.username = ((h = e == null ? void 0 : e.claims) === null || h === void 0 ? void 0 : h.upn) || P.EMPTY_STRING, g.name = ((f = e == null ? void 0 : e.claims) === null || f === void 0 ? void 0 : f.name) || P.EMPTY_STRING, g.idTokenClaims = e == null ? void 0 : e.claims), g.environment = m, g.cloudGraphHostName = o, g.msGraphHost = a, g;
    }, r.generateHomeAccountId = function(t, e, n, o, a) {
      var c, l = !((c = a == null ? void 0 : a.claims) === null || c === void 0) && c.sub ? a.claims.sub : P.EMPTY_STRING;
      if (e === Wt.Adfs || e === Wt.Dsts)
        return l;
      if (t)
        try {
          var u = Xa(t, o);
          if (!X.isEmpty(u.uid) && !X.isEmpty(u.utid))
            return "" + u.uid + wt.CLIENT_INFO_SEPARATOR + u.utid;
        } catch {
        }
      return n.verbose("No client info in response"), l;
    }, r.isAccountEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("realm") && t.hasOwnProperty("localAccountId") && t.hasOwnProperty("username") && t.hasOwnProperty("authorityType") : !1;
    }, r.accountInfoIsEqual = function(t, e, n) {
      if (!t || !e)
        return !1;
      var o = !0;
      if (n) {
        var a = t.idTokenClaims || {}, c = e.idTokenClaims || {};
        o = a.iat === c.iat && a.nonce === c.nonce;
      }
      return t.homeAccountId === e.homeAccountId && t.localAccountId === e.localAccountId && t.username === e.username && t.tenantId === e.tenantId && t.environment === e.environment && t.nativeAccountId === e.nativeAccountId && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var en = (
  /** @class */
  function() {
    function r(t, e) {
      if (X.isEmpty(t))
        throw ee.createTokenNullOrEmptyError(t);
      this.rawToken = t, this.claims = r.extractTokenClaims(t, e);
    }
    return r.extractTokenClaims = function(t, e) {
      var n = X.decodeAuthToken(t);
      try {
        var o = n.JWSPayload, a = e.base64Decode(o);
        return JSON.parse(a);
      } catch (c) {
        throw ee.createTokenParsingError(c);
      }
    }, r.checkMaxAge = function(t, e) {
      var n = 3e5;
      if (e === 0 || Date.now() - n > t + e)
        throw ee.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var er = (
  /** @class */
  function() {
    function r(t, e, n) {
      this.clientId = t, this.cryptoImpl = e, this.commonLogger = n.clone(Sp, Fl);
    }
    return r.prototype.getAllAccounts = function() {
      var t = this, e = this.getAccountKeys();
      if (e.length < 1)
        return [];
      var n = e.reduce(function(a, c) {
        var l = t.getAccount(c);
        return l && a.push(l), a;
      }, []);
      if (n.length < 1)
        return [];
      var o = n.map(function(a) {
        return t.getAccountInfoFromEntity(a);
      });
      return o;
    }, r.prototype.getAccountInfoFilteredBy = function(t) {
      var e = this.getAccountsFilteredBy(t);
      return e.length > 0 ? this.getAccountInfoFromEntity(e[0]) : null;
    }, r.prototype.getAccountInfoFromEntity = function(t) {
      var e = t.getAccountInfo(), n = this.getIdToken(e);
      return n && (e.idToken = n.secret, e.idTokenClaims = new en(n.secret, this.cryptoImpl).claims), e;
    }, r.prototype.saveCacheRecord = function(t) {
      return _e(this, void 0, void 0, function() {
        return Se(this, function(e) {
          switch (e.label) {
            case 0:
              if (!t)
                throw ee.createNullOrUndefinedCacheRecord();
              return t.account && this.setAccount(t.account), t.idToken && this.setIdTokenCredential(t.idToken), t.accessToken ? [4, this.saveAccessToken(t.accessToken)] : [3, 2];
            case 1:
              e.sent(), e.label = 2;
            case 2:
              return t.refreshToken && this.setRefreshTokenCredential(t.refreshToken), t.appMetadata && this.setAppMetadata(t.appMetadata), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.saveAccessToken = function(t) {
      return _e(this, void 0, void 0, function() {
        var e, n, o, a, c = this;
        return Se(this, function(l) {
          switch (l.label) {
            case 0:
              return e = {
                clientId: t.clientId,
                credentialType: t.credentialType,
                environment: t.environment,
                homeAccountId: t.homeAccountId,
                realm: t.realm,
                tokenType: t.tokenType,
                requestedClaimsHash: t.requestedClaimsHash
              }, n = this.getTokenKeys(), o = Ut.fromString(t.target), a = [], n.accessToken.forEach(function(u) {
                if (c.accessTokenKeyMatchesFilter(u, e, !1)) {
                  var h = c.getAccessTokenCredential(u);
                  if (h && c.credentialMatchesFilter(h, e)) {
                    var f = Ut.fromString(h.target);
                    f.intersectingScopeSets(o) && a.push(c.removeAccessToken(u));
                  }
                }
              }), [4, Promise.all(a)];
            case 1:
              return l.sent(), this.setAccessTokenCredential(t), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getAccountsFilteredBy = function(t) {
      var e = this, n = this.getAccountKeys(), o = [];
      return n.forEach(function(a) {
        if (e.isAccountKey(a, t.homeAccountId, t.realm)) {
          var c = e.getAccount(a);
          c && (t.homeAccountId && !e.matchHomeAccountId(c, t.homeAccountId) || t.localAccountId && !e.matchLocalAccountId(c, t.localAccountId) || t.username && !e.matchUsername(c, t.username) || t.environment && !e.matchEnvironment(c, t.environment) || t.realm && !e.matchRealm(c, t.realm) || t.nativeAccountId && !e.matchNativeAccountId(c, t.nativeAccountId) || o.push(c));
        }
      }), o;
    }, r.prototype.isAccountKey = function(t, e, n) {
      return !(t.split(wt.CACHE_KEY_SEPARATOR).length < 3 || e && !t.toLowerCase().includes(e.toLowerCase()) || n && !t.toLowerCase().includes(n.toLowerCase()));
    }, r.prototype.isCredentialKey = function(t) {
      if (t.split(wt.CACHE_KEY_SEPARATOR).length < 6)
        return !1;
      var e = t.toLowerCase();
      if (e.indexOf(fe.ID_TOKEN.toLowerCase()) === -1 && e.indexOf(fe.ACCESS_TOKEN.toLowerCase()) === -1 && e.indexOf(fe.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && e.indexOf(fe.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (e.indexOf(fe.REFRESH_TOKEN.toLowerCase()) > -1) {
        var n = "" + fe.REFRESH_TOKEN + wt.CACHE_KEY_SEPARATOR + this.clientId + wt.CACHE_KEY_SEPARATOR, o = "" + fe.REFRESH_TOKEN + wt.CACHE_KEY_SEPARATOR + Si + wt.CACHE_KEY_SEPARATOR;
        if (e.indexOf(n.toLowerCase()) === -1 && e.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (e.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(t, e) {
      return !(e.clientId && !this.matchClientId(t, e.clientId) || e.userAssertionHash && !this.matchUserAssertionHash(t, e.userAssertionHash) || typeof e.homeAccountId == "string" && !this.matchHomeAccountId(t, e.homeAccountId) || e.environment && !this.matchEnvironment(t, e.environment) || e.realm && !this.matchRealm(t, e.realm) || e.credentialType && !this.matchCredentialType(t, e.credentialType) || e.familyId && !this.matchFamilyId(t, e.familyId) || e.target && !this.matchTarget(t, e.target) || (e.requestedClaimsHash || t.requestedClaimsHash) && t.requestedClaimsHash !== e.requestedClaimsHash || t.credentialType === fe.ACCESS_TOKEN_WITH_AUTH_SCHEME && (e.tokenType && !this.matchTokenType(t, e.tokenType) || e.tokenType === ze.SSH && e.keyId && !this.matchKeyId(t, e.keyId)));
    }, r.prototype.getAppMetadataFilteredBy = function(t) {
      return this.getAppMetadataFilteredByInternal(t.environment, t.clientId);
    }, r.prototype.getAppMetadataFilteredByInternal = function(t, e) {
      var n = this, o = this.getKeys(), a = {};
      return o.forEach(function(c) {
        if (n.isAppMetadata(c)) {
          var l = n.getAppMetadata(c);
          l && (t && !n.matchEnvironment(l, t) || e && !n.matchClientId(l, e) || (a[c] = l));
        }
      }), a;
    }, r.prototype.getAuthorityMetadataByAlias = function(t) {
      var e = this, n = this.getAuthorityMetadataKeys(), o = null;
      return n.forEach(function(a) {
        if (!(!e.isAuthorityMetadata(a) || a.indexOf(e.clientId) === -1)) {
          var c = e.getAuthorityMetadata(a);
          c && c.aliases.indexOf(t) !== -1 && (o = c);
        }
      }), o;
    }, r.prototype.removeAllAccounts = function() {
      return _e(this, void 0, void 0, function() {
        var t, e, n = this;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              return t = this.getAccountKeys(), e = [], t.forEach(function(a) {
                e.push(n.removeAccount(a));
              }), [4, Promise.all(e)];
            case 1:
              return o.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccount = function(t) {
      return _e(this, void 0, void 0, function() {
        var e;
        return Se(this, function(n) {
          switch (n.label) {
            case 0:
              if (e = this.getAccount(t), !e)
                throw ee.createNoAccountFoundError();
              return [4, this.removeAccountContext(e)];
            case 1:
              return n.sent(), this.removeItem(t), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccountContext = function(t) {
      return _e(this, void 0, void 0, function() {
        var e, n, o, a = this;
        return Se(this, function(c) {
          switch (c.label) {
            case 0:
              return e = this.getTokenKeys(), n = t.generateAccountId(), o = [], e.idToken.forEach(function(l) {
                l.indexOf(n) === 0 && a.removeIdToken(l);
              }), e.accessToken.forEach(function(l) {
                l.indexOf(n) === 0 && o.push(a.removeAccessToken(l));
              }), e.refreshToken.forEach(function(l) {
                l.indexOf(n) === 0 && a.removeRefreshToken(l);
              }), [4, Promise.all(o)];
            case 1:
              return c.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccessToken = function(t) {
      return _e(this, void 0, void 0, function() {
        var e, n, o;
        return Se(this, function(a) {
          switch (a.label) {
            case 0:
              if (e = this.getAccessTokenCredential(t), !e)
                return [
                  2
                  /*return*/
                ];
              if (e.credentialType.toLowerCase() !== fe.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (e.tokenType !== ze.POP)
                return [3, 4];
              if (n = e, o = n.keyId, !o)
                return [3, 4];
              a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(o)];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              throw a.sent(), ee.createBindingKeyNotRemovedError();
            case 4:
              return [2, this.removeItem(t)];
          }
        });
      });
    }, r.prototype.removeAppMetadata = function() {
      var t = this, e = this.getKeys();
      return e.forEach(function(n) {
        t.isAppMetadata(n) && t.removeItem(n);
      }), !0;
    }, r.prototype.readCacheRecord = function(t, e, n) {
      var o = this.getTokenKeys(), a = this.readAccountFromCache(t), c = this.getIdToken(t, o), l = this.getAccessToken(t, e, o), u = this.getRefreshToken(t, !1, o), h = this.readAppMetadataFromCache(n);
      return a && c && (a.idTokenClaims = new en(c.secret, this.cryptoImpl).claims), {
        account: a,
        idToken: c,
        accessToken: l,
        refreshToken: u,
        appMetadata: h
      };
    }, r.prototype.readAccountFromCache = function(t) {
      var e = Rt.generateAccountCacheKey(t);
      return this.getAccount(e);
    }, r.prototype.getIdToken = function(t, e) {
      var n = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: t.homeAccountId,
        environment: t.environment,
        credentialType: fe.ID_TOKEN,
        clientId: this.clientId,
        realm: t.tenantId
      }, a = this.getIdTokensByFilter(o, e), c = a.length;
      return c < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : c > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), a.forEach(function(l) {
        n.removeIdToken(l.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), a[0]);
    }, r.prototype.getIdTokensByFilter = function(t, e) {
      var n = this, o = e && e.idToken || this.getTokenKeys().idToken, a = [];
      return o.forEach(function(c) {
        if (n.idTokenKeyMatchesFilter(c, $e({ clientId: n.clientId }, t))) {
          var l = n.getIdTokenCredential(c);
          l && n.credentialMatchesFilter(l, t) && a.push(l);
        }
      }), a;
    }, r.prototype.idTokenKeyMatchesFilter = function(t, e) {
      var n = t.toLowerCase();
      return !(e.clientId && n.indexOf(e.clientId.toLowerCase()) === -1 || e.homeAccountId && n.indexOf(e.homeAccountId.toLowerCase()) === -1);
    }, r.prototype.removeIdToken = function(t) {
      this.removeItem(t);
    }, r.prototype.removeRefreshToken = function(t) {
      this.removeItem(t);
    }, r.prototype.getAccessToken = function(t, e, n) {
      var o = this;
      this.commonLogger.trace("CacheManager - getAccessToken called");
      var a = Ut.createSearchScopes(e.scopes), c = e.authenticationScheme || ze.BEARER, l = c && c.toLowerCase() !== ze.BEARER.toLowerCase() ? fe.ACCESS_TOKEN_WITH_AUTH_SCHEME : fe.ACCESS_TOKEN, u = {
        homeAccountId: t.homeAccountId,
        environment: t.environment,
        credentialType: l,
        clientId: this.clientId,
        realm: t.tenantId,
        target: a,
        tokenType: c,
        keyId: e.sshKid,
        requestedClaimsHash: e.requestedClaimsHash
      }, h = n && n.accessToken || this.getTokenKeys().accessToken, f = [];
      h.forEach(function(m) {
        if (o.accessTokenKeyMatchesFilter(m, u, !0)) {
          var v = o.getAccessTokenCredential(m);
          v && o.credentialMatchesFilter(v, u) && f.push(v);
        }
      });
      var g = f.length;
      return g < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : g > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), f.forEach(function(m) {
        o.removeAccessToken(m.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), f[0]);
    }, r.prototype.accessTokenKeyMatchesFilter = function(t, e, n) {
      var o = t.toLowerCase();
      if (e.clientId && o.indexOf(e.clientId.toLowerCase()) === -1 || e.homeAccountId && o.indexOf(e.homeAccountId.toLowerCase()) === -1 || e.realm && o.indexOf(e.realm.toLowerCase()) === -1 || e.requestedClaimsHash && o.indexOf(e.requestedClaimsHash.toLowerCase()) === -1)
        return !1;
      if (e.target)
        for (var a = e.target.asArray(), c = 0; c < a.length; c++) {
          if (n && !o.includes(a[c].toLowerCase()))
            return !1;
          if (!n && o.includes(a[c].toLowerCase()))
            return !0;
        }
      return !0;
    }, r.prototype.getAccessTokensByFilter = function(t) {
      var e = this, n = this.getTokenKeys(), o = [];
      return n.accessToken.forEach(function(a) {
        if (e.accessTokenKeyMatchesFilter(a, t, !0)) {
          var c = e.getAccessTokenCredential(a);
          c && e.credentialMatchesFilter(c, t) && o.push(c);
        }
      }), o;
    }, r.prototype.getRefreshToken = function(t, e, n) {
      var o = this;
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      var a = e ? Si : void 0, c = {
        homeAccountId: t.homeAccountId,
        environment: t.environment,
        credentialType: fe.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: a
      }, l = n && n.refreshToken || this.getTokenKeys().refreshToken, u = [];
      l.forEach(function(f) {
        if (o.refreshTokenKeyMatchesFilter(f, c)) {
          var g = o.getRefreshTokenCredential(f);
          g && o.credentialMatchesFilter(g, c) && u.push(g);
        }
      });
      var h = u.length;
      return h < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), u[0]);
    }, r.prototype.refreshTokenKeyMatchesFilter = function(t, e) {
      var n = t.toLowerCase();
      return !(e.familyId && n.indexOf(e.familyId.toLowerCase()) === -1 || !e.familyId && e.clientId && n.indexOf(e.clientId.toLowerCase()) === -1 || e.homeAccountId && n.indexOf(e.homeAccountId.toLowerCase()) === -1);
    }, r.prototype.readAppMetadataFromCache = function(t) {
      var e = {
        environment: t,
        clientId: this.clientId
      }, n = this.getAppMetadataFilteredBy(e), o = Object.keys(n).map(function(c) {
        return n[c];
      }), a = o.length;
      if (a < 1)
        return null;
      if (a > 1)
        throw ee.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, r.prototype.isAppMetadataFOCI = function(t) {
      var e = this.readAppMetadataFromCache(t);
      return !!(e && e.familyId === Si);
    }, r.prototype.matchHomeAccountId = function(t, e) {
      return typeof t.homeAccountId == "string" && e === t.homeAccountId;
    }, r.prototype.matchLocalAccountId = function(t, e) {
      return typeof t.localAccountId == "string" && e === t.localAccountId;
    }, r.prototype.matchUsername = function(t, e) {
      return typeof t.username == "string" && e.toLowerCase() === t.username.toLowerCase();
    }, r.prototype.matchUserAssertionHash = function(t, e) {
      return !!(t.userAssertionHash && e === t.userAssertionHash);
    }, r.prototype.matchEnvironment = function(t, e) {
      var n = this.getAuthorityMetadataByAlias(e);
      return !!(n && n.aliases.indexOf(t.environment) > -1);
    }, r.prototype.matchCredentialType = function(t, e) {
      return t.credentialType && e.toLowerCase() === t.credentialType.toLowerCase();
    }, r.prototype.matchClientId = function(t, e) {
      return !!(t.clientId && e === t.clientId);
    }, r.prototype.matchFamilyId = function(t, e) {
      return !!(t.familyId && e === t.familyId);
    }, r.prototype.matchRealm = function(t, e) {
      return !!(t.realm && e === t.realm);
    }, r.prototype.matchNativeAccountId = function(t, e) {
      return !!(t.nativeAccountId && e === t.nativeAccountId);
    }, r.prototype.matchTarget = function(t, e) {
      var n = t.credentialType !== fe.ACCESS_TOKEN && t.credentialType !== fe.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (n || !t.target)
        return !1;
      var o = Ut.fromString(t.target);
      return o.containsScopeSet(e);
    }, r.prototype.matchTokenType = function(t, e) {
      return !!(t.tokenType && t.tokenType === e);
    }, r.prototype.matchKeyId = function(t, e) {
      return !!(t.keyId && t.keyId === e);
    }, r.prototype.isAppMetadata = function(t) {
      return t.indexOf(vl) !== -1;
    }, r.prototype.isAuthorityMetadata = function(t) {
      return t.indexOf(Ti.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(t) {
      return Ti.CACHE_KEY + "-" + this.clientId + "-" + t;
    }, r.toObject = function(t, e) {
      for (var n in e)
        t[n] = e[n];
      return t;
    }, r;
  }()
), FS = (
  /** @class */
  function(r) {
    nr(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.setAccount = function() {
      var e = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getAccount = function() {
      var e = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setIdTokenCredential = function() {
      var e = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getIdTokenCredential = function() {
      var e = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setAccessTokenCredential = function() {
      var e = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getAccessTokenCredential = function() {
      var e = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setRefreshTokenCredential = function() {
      var e = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getRefreshTokenCredential = function() {
      var e = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setAppMetadata = function() {
      var e = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getAppMetadata = function() {
      var e = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setServerTelemetry = function() {
      var e = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getServerTelemetry = function() {
      var e = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setAuthorityMetadata = function() {
      var e = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getAuthorityMetadata = function() {
      var e = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getAuthorityMetadataKeys = function() {
      var e = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.setThrottlingCache = function() {
      var e = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getThrottlingCache = function() {
      var e = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.removeItem = function() {
      var e = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.containsKey = function() {
      var e = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getKeys = function() {
      var e = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getAccountKeys = function() {
      var e = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.getTokenKeys = function() {
      var e = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t.prototype.clear = function() {
      return _e(this, void 0, void 0, function() {
        var e;
        return Se(this, function(n) {
          throw e = "Storage interface - clear() has not been implemented for the cacheStorage interface.", ue.createUnexpectedError(e);
        });
      });
    }, t.prototype.updateCredentialCacheKey = function() {
      var e = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw ue.createUnexpectedError(e);
    }, t;
  }(er)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var BS = 300, Tp = {
  tokenRenewalOffsetSeconds: BS,
  preventCorsPreflight: !1
}, KS = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: st.Info,
  correlationId: P.EMPTY_STRING
}, qS = {
  claimsBasedCachingEnabled: !0
}, $S = {
  sendGetRequestAsync: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return _e(this, void 0, void 0, function() {
      var r;
      return Se(this, function(t) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", ue.createUnexpectedError(r);
      });
    });
  }
}, GS = {
  sku: P.SKU,
  version: Fl,
  cpu: P.EMPTY_STRING,
  os: P.EMPTY_STRING
}, zS = {
  clientSecret: P.EMPTY_STRING,
  clientAssertion: void 0
}, WS = {
  azureCloudInstance: Mi.None,
  tenant: "" + P.DEFAULT_COMMON_TENANT
}, VS = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function YS(r) {
  var t = r.authOptions, e = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, a = r.storageInterface, c = r.networkInterface, l = r.cryptoInterface, u = r.clientCredentials, h = r.libraryInfo, f = r.telemetry, g = r.serverTelemetryManager, m = r.persistencePlugin, v = r.serializableCache, C = $e($e({}, KS), n);
  return {
    authOptions: jS(t),
    systemOptions: $e($e({}, Tp), e),
    loggerOptions: C,
    cacheOptions: $e($e({}, qS), o),
    storageInterface: a || new FS(t.clientId, Ja, new ms(C)),
    networkInterface: c || $S,
    cryptoInterface: l || Ja,
    clientCredentials: u || zS,
    libraryInfo: $e($e({}, GS), h),
    telemetry: $e($e({}, VS), f),
    serverTelemetryManager: g || null,
    persistencePlugin: m || null,
    serializableCache: v || null
  };
}
function jS(r) {
  return $e({ clientCapabilities: [], azureCloudOptions: WS, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var co = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n, o) {
      var a = r.call(this, e, n, o) || this;
      return a.name = "ServerError", Object.setPrototypeOf(a, t.prototype), a;
    }
    return t;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Za = (
  /** @class */
  function() {
    function r() {
    }
    return r.generateThrottlingStorageKey = function(t) {
      return Ii.THROTTLING_PREFIX + "." + JSON.stringify(t);
    }, r.preProcess = function(t, e) {
      var n, o = r.generateThrottlingStorageKey(e), a = t.getThrottlingCache(o);
      if (a) {
        if (a.throttleTime < Date.now()) {
          t.removeItem(o);
          return;
        }
        throw new co(((n = a.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || P.EMPTY_STRING, a.errorMessage, a.subError);
      }
    }, r.postProcess = function(t, e, n) {
      if (r.checkResponseStatus(n) || r.checkResponseForRetryAfter(n)) {
        var o = {
          throttleTime: r.calculateThrottleTime(parseInt(n.headers[pr.RETRY_AFTER])),
          error: n.body.error,
          errorCodes: n.body.error_codes,
          errorMessage: n.body.error_description,
          subError: n.body.suberror
        };
        t.setThrottlingCache(r.generateThrottlingStorageKey(e), o);
      }
    }, r.checkResponseStatus = function(t) {
      return t.status === 429 || t.status >= 500 && t.status < 600;
    }, r.checkResponseForRetryAfter = function(t) {
      return t.headers ? t.headers.hasOwnProperty(pr.RETRY_AFTER) && (t.status < 200 || t.status >= 300) : !1;
    }, r.calculateThrottleTime = function(t) {
      var e = t <= 0 ? 0 : t, n = Date.now() / 1e3;
      return Math.floor(Math.min(n + (e || Ii.DEFAULT_THROTTLE_TIME_SECONDS), n + Ii.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
    }, r.removeThrottle = function(t, e, n, o) {
      var a = {
        clientId: e,
        authority: n.authority,
        scopes: n.scopes,
        homeAccountIdentifier: o,
        claims: n.claims,
        authenticationScheme: n.authenticationScheme,
        resourceRequestMethod: n.resourceRequestMethod,
        resourceRequestUri: n.resourceRequestUri,
        shrClaims: n.shrClaims,
        sshKid: n.sshKid
      }, c = this.generateThrottlingStorageKey(a);
      t.removeItem(c);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var QS = (
  /** @class */
  function() {
    function r(t, e) {
      this.networkClient = t, this.cacheManager = e;
    }
    return r.prototype.sendPostRequest = function(t, e, n) {
      return _e(this, void 0, void 0, function() {
        var o, a;
        return Se(this, function(c) {
          switch (c.label) {
            case 0:
              Za.preProcess(this.cacheManager, t), c.label = 1;
            case 1:
              return c.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(e, n)];
            case 2:
              return o = c.sent(), [3, 4];
            case 3:
              throw a = c.sent(), a instanceof ue ? a : ee.createNetworkError(e, a);
            case 4:
              return Za.postProcess(this.cacheManager, t, o), [2, o];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var fr;
(function(r) {
  r.HOME_ACCOUNT_ID = "home_account_id", r.UPN = "UPN";
})(fr || (fr = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var eo = (
  /** @class */
  function() {
    function r() {
    }
    return r.validateRedirectUri = function(t) {
      if (X.isEmpty(t))
        throw et.createRedirectUriEmptyError();
    }, r.validatePrompt = function(t) {
      var e = [];
      for (var n in Ft)
        e.push(Ft[n]);
      if (e.indexOf(t) < 0)
        throw et.createInvalidPromptError(t);
    }, r.validateClaims = function(t) {
      try {
        JSON.parse(t);
      } catch {
        throw et.createInvalidClaimsRequestError();
      }
    }, r.validateCodeChallengeParams = function(t, e) {
      if (X.isEmpty(t) || X.isEmpty(e))
        throw et.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(e);
    }, r.validateCodeChallengeMethod = function(t) {
      if ([
        Sf.PLAIN,
        Sf.S256
      ].indexOf(t) < 0)
        throw et.createInvalidCodeChallengeMethodError();
    }, r.sanitizeEQParams = function(t, e) {
      return t ? (e.forEach(function(n, o) {
        t[o] && delete t[o];
      }), Object.fromEntries(Object.entries(t).filter(function(n) {
        var o = n[1];
        return o !== "";
      }))) : {};
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ri = (
  /** @class */
  function() {
    function r() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return r.prototype.addResponseTypeCode = function() {
      this.parameters.set(Ae.RESPONSE_TYPE, encodeURIComponent(P.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(Ae.RESPONSE_TYPE, encodeURIComponent(P.TOKEN_RESPONSE_TYPE + " " + P.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(t) {
      this.parameters.set(Ae.RESPONSE_MODE, encodeURIComponent(t || Ya.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(Ae.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(t, e) {
      e === void 0 && (e = !0);
      var n = e ? gs(t || [], Fi) : t || [], o = new Ut(n);
      this.parameters.set(Ae.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(t) {
      this.parameters.set(Ae.CLIENT_ID, encodeURIComponent(t));
    }, r.prototype.addRedirectUri = function(t) {
      eo.validateRedirectUri(t), this.parameters.set(Ae.REDIRECT_URI, encodeURIComponent(t));
    }, r.prototype.addPostLogoutRedirectUri = function(t) {
      eo.validateRedirectUri(t), this.parameters.set(Ae.POST_LOGOUT_URI, encodeURIComponent(t));
    }, r.prototype.addIdTokenHint = function(t) {
      this.parameters.set(Ae.ID_TOKEN_HINT, encodeURIComponent(t));
    }, r.prototype.addDomainHint = function(t) {
      this.parameters.set(_i.DOMAIN_HINT, encodeURIComponent(t));
    }, r.prototype.addLoginHint = function(t) {
      this.parameters.set(_i.LOGIN_HINT, encodeURIComponent(t));
    }, r.prototype.addCcsUpn = function(t) {
      this.parameters.set(pr.CCS_HEADER, encodeURIComponent("UPN:" + t));
    }, r.prototype.addCcsOid = function(t) {
      this.parameters.set(pr.CCS_HEADER, encodeURIComponent("Oid:" + t.uid + "@" + t.utid));
    }, r.prototype.addSid = function(t) {
      this.parameters.set(_i.SID, encodeURIComponent(t));
    }, r.prototype.addClaims = function(t, e) {
      var n = this.addClientCapabilitiesToClaims(t, e);
      eo.validateClaims(n), this.parameters.set(Ae.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(t) {
      this.parameters.set(Ae.CLIENT_REQUEST_ID, encodeURIComponent(t));
    }, r.prototype.addLibraryInfo = function(t) {
      this.parameters.set(Ae.X_CLIENT_SKU, t.sku), this.parameters.set(Ae.X_CLIENT_VER, t.version), t.os && this.parameters.set(Ae.X_CLIENT_OS, t.os), t.cpu && this.parameters.set(Ae.X_CLIENT_CPU, t.cpu);
    }, r.prototype.addApplicationTelemetry = function(t) {
      t != null && t.appName && this.parameters.set(Ae.X_APP_NAME, t.appName), t != null && t.appVersion && this.parameters.set(Ae.X_APP_VER, t.appVersion);
    }, r.prototype.addPrompt = function(t) {
      eo.validatePrompt(t), this.parameters.set("" + Ae.PROMPT, encodeURIComponent(t));
    }, r.prototype.addState = function(t) {
      X.isEmpty(t) || this.parameters.set(Ae.STATE, encodeURIComponent(t));
    }, r.prototype.addNonce = function(t) {
      this.parameters.set(Ae.NONCE, encodeURIComponent(t));
    }, r.prototype.addCodeChallengeParams = function(t, e) {
      if (eo.validateCodeChallengeParams(t, e), t && e)
        this.parameters.set(Ae.CODE_CHALLENGE, encodeURIComponent(t)), this.parameters.set(Ae.CODE_CHALLENGE_METHOD, encodeURIComponent(e));
      else
        throw et.createInvalidCodeChallengeParamsError();
    }, r.prototype.addAuthorizationCode = function(t) {
      this.parameters.set(Ae.CODE, encodeURIComponent(t));
    }, r.prototype.addDeviceCode = function(t) {
      this.parameters.set(Ae.DEVICE_CODE, encodeURIComponent(t));
    }, r.prototype.addRefreshToken = function(t) {
      this.parameters.set(Ae.REFRESH_TOKEN, encodeURIComponent(t));
    }, r.prototype.addCodeVerifier = function(t) {
      this.parameters.set(Ae.CODE_VERIFIER, encodeURIComponent(t));
    }, r.prototype.addClientSecret = function(t) {
      this.parameters.set(Ae.CLIENT_SECRET, encodeURIComponent(t));
    }, r.prototype.addClientAssertion = function(t) {
      X.isEmpty(t) || this.parameters.set(Ae.CLIENT_ASSERTION, encodeURIComponent(t));
    }, r.prototype.addClientAssertionType = function(t) {
      X.isEmpty(t) || this.parameters.set(Ae.CLIENT_ASSERTION_TYPE, encodeURIComponent(t));
    }, r.prototype.addOboAssertion = function(t) {
      this.parameters.set(Ae.OBO_ASSERTION, encodeURIComponent(t));
    }, r.prototype.addRequestTokenUse = function(t) {
      this.parameters.set(Ae.REQUESTED_TOKEN_USE, encodeURIComponent(t));
    }, r.prototype.addGrantType = function(t) {
      this.parameters.set(Ae.GRANT_TYPE, encodeURIComponent(t));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(HS, "1");
    }, r.prototype.addExtraQueryParameters = function(t) {
      var e = this, n = eo.sanitizeEQParams(t, this.parameters);
      Object.keys(n).forEach(function(o) {
        e.parameters.set(o, t[o]);
      });
    }, r.prototype.addClientCapabilitiesToClaims = function(t, e) {
      var n;
      if (!t)
        n = {};
      else
        try {
          n = JSON.parse(t);
        } catch {
          throw et.createInvalidClaimsRequestError();
        }
      return e && e.length > 0 && (n.hasOwnProperty(Mo.ACCESS_TOKEN) || (n[Mo.ACCESS_TOKEN] = {}), n[Mo.ACCESS_TOKEN][Mo.XMS_CC] = {
        values: e
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(t) {
      this.parameters.set(Qa.username, encodeURIComponent(t));
    }, r.prototype.addPassword = function(t) {
      this.parameters.set(Qa.password, encodeURIComponent(t));
    }, r.prototype.addPopToken = function(t) {
      X.isEmpty(t) || (this.parameters.set(Ae.TOKEN_TYPE, ze.POP), this.parameters.set(Ae.REQ_CNF, encodeURIComponent(t)));
    }, r.prototype.addSshJwk = function(t) {
      X.isEmpty(t) || (this.parameters.set(Ae.TOKEN_TYPE, ze.SSH), this.parameters.set(Ae.REQ_CNF, encodeURIComponent(t)));
    }, r.prototype.addServerTelemetry = function(t) {
      this.parameters.set(Ae.X_CLIENT_CURR_TELEM, t.generateCurrentRequestHeaderValue()), this.parameters.set(Ae.X_CLIENT_LAST_TELEM, t.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(Ae.X_MS_LIB_CAPABILITY, Ii.X_MS_LIB_CAPABILITY_VALUE);
    }, r.prototype.addLogoutHint = function(t) {
      this.parameters.set(Ae.LOGOUT_HINT, encodeURIComponent(t));
    }, r.prototype.createQueryString = function() {
      var t = new Array();
      return this.parameters.forEach(function(e, n) {
        t.push(n + "=" + e);
      }), t.join("&");
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Bl = (
  /** @class */
  function() {
    function r(t, e) {
      this.config = YS(t), this.logger = new ms(this.config.loggerOptions, Sp, Fl), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new QS(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = e;
    }
    return r.prototype.createTokenRequestHeaders = function(t) {
      var e = {};
      if (e[pr.CONTENT_TYPE] = P.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && t)
        switch (t.type) {
          case fr.HOME_ACCOUNT_ID:
            try {
              var n = Lo(t.credential);
              e[pr.CCS_HEADER] = "Oid:" + n.uid + "@" + n.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case fr.UPN:
            e[pr.CCS_HEADER] = "UPN: " + t.credential;
            break;
        }
      return e;
    }, r.prototype.executePostToTokenEndpoint = function(t, e, n, o) {
      return _e(this, void 0, void 0, function() {
        var a;
        return Se(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(o, t, { body: e, headers: n })];
            case 1:
              return a = c.sent(), this.config.serverTelemetryManager && a.status < 500 && a.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), [2, a];
          }
        });
      });
    }, r.prototype.updateAuthority = function(t) {
      if (!t.discoveryComplete())
        throw ee.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = t;
    }, r.prototype.createTokenQueryParameters = function(t) {
      var e = new Ri();
      return t.tokenQueryParameters && e.addExtraQueryParameters(t.tokenQueryParameters), e.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Kl = (
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
        case fe.ID_TOKEN:
          return mn.ID_TOKEN;
        case fe.ACCESS_TOKEN:
        case fe.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return mn.ACCESS_TOKEN;
        case fe.REFRESH_TOKEN:
          return mn.REFRESH_TOKEN;
        default:
          throw ee.createUnexpectedCredentialTypeError();
      }
    }, r.generateCredentialCacheKey = function(t, e, n, o, a, c, l, u, h) {
      var f = [
        this.generateAccountIdForCacheKey(t, e),
        this.generateCredentialIdForCacheKey(n, o, a, l),
        this.generateTargetForCacheKey(c),
        this.generateClaimsHashForCacheKey(h),
        this.generateSchemeForCacheKey(u)
      ];
      return f.join(wt.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateAccountIdForCacheKey = function(t, e) {
      var n = [t, e];
      return n.join(wt.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateCredentialIdForCacheKey = function(t, e, n, o) {
      var a = t === fe.REFRESH_TOKEN && o || e, c = [
        t,
        a,
        n || P.EMPTY_STRING
      ];
      return c.join(wt.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateTargetForCacheKey = function(t) {
      return (t || P.EMPTY_STRING).toLowerCase();
    }, r.generateClaimsHashForCacheKey = function(t) {
      return (t || P.EMPTY_STRING).toLowerCase();
    }, r.generateSchemeForCacheKey = function(t) {
      return t && t.toLowerCase() !== ze.BEARER.toLowerCase() ? t.toLowerCase() : P.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ro = (
  /** @class */
  function(r) {
    nr(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.createIdTokenEntity = function(e, n, o, a, c) {
      var l = new t();
      return l.credentialType = fe.ID_TOKEN, l.homeAccountId = e, l.environment = n, l.clientId = a, l.secret = o, l.realm = c, l;
    }, t.isIdTokenEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("realm") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret") && e.credentialType === fe.ID_TOKEN : !1;
    }, t;
  }(Kl)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ar = (
  /** @class */
  function() {
    function r() {
    }
    return r.nowSeconds = function() {
      return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
    }, r.isTokenExpired = function(t, e) {
      var n = Number(t) || 0, o = r.nowSeconds() + e;
      return o > n;
    }, r.wasClockTurnedBack = function(t) {
      var e = Number(t);
      return e > r.nowSeconds();
    }, r.delay = function(t, e) {
      return new Promise(function(n) {
        return setTimeout(function() {
          return n(e);
        }, t);
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var no = (
  /** @class */
  function(r) {
    nr(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.createAccessTokenEntity = function(e, n, o, a, c, l, u, h, f, g, m, v, C, b, _) {
      var A, I, T = new t();
      T.homeAccountId = e, T.credentialType = fe.ACCESS_TOKEN, T.secret = o;
      var N = Ar.nowSeconds();
      if (T.cachedAt = N.toString(), T.expiresOn = u.toString(), T.extendedExpiresOn = h.toString(), g && (T.refreshOn = g.toString()), T.environment = n, T.clientId = a, T.realm = c, T.target = l, T.userAssertionHash = v, T.tokenType = X.isEmpty(m) ? ze.BEARER : m, b && (T.requestedClaims = b, T.requestedClaimsHash = _), ((A = T.tokenType) === null || A === void 0 ? void 0 : A.toLowerCase()) !== ze.BEARER.toLowerCase())
        switch (T.credentialType = fe.ACCESS_TOKEN_WITH_AUTH_SCHEME, T.tokenType) {
          case ze.POP:
            var x = en.extractTokenClaims(o, f);
            if (!(!((I = x == null ? void 0 : x.cnf) === null || I === void 0) && I.kid))
              throw ee.createTokenClaimsRequiredError();
            T.keyId = x.cnf.kid;
            break;
          case ze.SSH:
            T.keyId = C;
        }
      return T;
    }, t.isAccessTokenEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("realm") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret") && e.hasOwnProperty("target") && (e.credentialType === fe.ACCESS_TOKEN || e.credentialType === fe.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, t;
  }(Kl)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Do = (
  /** @class */
  function(r) {
    nr(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.createRefreshTokenEntity = function(e, n, o, a, c, l) {
      var u = new t();
      return u.clientId = a, u.credentialType = fe.REFRESH_TOKEN, u.environment = n, u.homeAccountId = e, u.secret = o, u.userAssertionHash = l, c && (u.familyId = c), u;
    }, t.isRefreshTokenEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret") && e.credentialType === fe.REFRESH_TOKEN : !1;
    }, t;
  }(Kl)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var If = [
  "interaction_required",
  "consent_required",
  "login_required"
], JS = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Uo = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
}, Br = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n, o, a, c, l, u) {
      var h = r.call(this, e, n, o) || this;
      return Object.setPrototypeOf(h, t.prototype), h.timestamp = a || P.EMPTY_STRING, h.traceId = c || P.EMPTY_STRING, h.correlationId = l || P.EMPTY_STRING, h.claims = u || P.EMPTY_STRING, h.name = "InteractionRequiredAuthError", h;
    }
    return t.isInteractionRequiredError = function(e, n, o) {
      var a = !!e && If.indexOf(e) > -1, c = !!o && JS.indexOf(o) > -1, l = !!n && If.some(function(u) {
        return n.indexOf(u) > -1;
      });
      return a || l || c;
    }, t.createNoTokensFoundError = function() {
      return new t(Uo.noTokensFoundError.code, Uo.noTokensFoundError.desc);
    }, t.createNativeAccountUnavailableError = function() {
      return new t(Uo.native_account_unavailable.code, Uo.native_account_unavailable.desc);
    }, t;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ki = (
  /** @class */
  function() {
    function r(t, e, n, o, a) {
      this.account = t || null, this.idToken = e || null, this.accessToken = n || null, this.refreshToken = o || null, this.appMetadata = a || null;
    }
    return r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var yn = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(t, e, n) {
      var o = r.generateLibraryState(t, n);
      return X.isEmpty(e) ? o : "" + o + P.RESOURCE_DELIM + e;
    }, r.generateLibraryState = function(t, e) {
      if (!t)
        throw ee.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: t.createNewGuid()
      };
      e && (n.meta = e);
      var o = JSON.stringify(n);
      return t.base64Encode(o);
    }, r.parseRequestState = function(t, e) {
      if (!t)
        throw ee.createNoCryptoObjectError("parseRequestState");
      if (X.isEmpty(e))
        throw ee.createInvalidStateError(e, "Null, undefined or empty state");
      try {
        var n = e.split(P.RESOURCE_DELIM), o = n[0], a = n.length > 1 ? n.slice(1).join(P.RESOURCE_DELIM) : P.EMPTY_STRING, c = t.base64Decode(o), l = JSON.parse(c);
        return {
          userRequestState: X.isEmpty(a) ? P.EMPTY_STRING : a,
          libraryState: l
        };
      } catch (u) {
        throw ee.createInvalidStateError(e, u);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ue = (
  /** @class */
  function() {
    function r(t) {
      if (this._urlString = t, X.isEmpty(this._urlString))
        throw et.createUrlEmptyError();
      X.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(t));
    }
    return Object.defineProperty(r.prototype, "urlString", {
      get: function() {
        return this._urlString;
      },
      enumerable: !1,
      configurable: !0
    }), r.canonicalizeUri = function(t) {
      if (t) {
        var e = t.toLowerCase();
        return X.endsWith(e, "?") ? e = e.slice(0, -1) : X.endsWith(e, "?/") && (e = e.slice(0, -2)), X.endsWith(e, "/") || (e += "/"), e;
      }
      return t;
    }, r.prototype.validateAsUri = function() {
      var t;
      try {
        t = this.getUrlComponents();
      } catch (e) {
        throw et.createUrlParseError(e);
      }
      if (!t.HostNameAndPort || !t.PathSegments)
        throw et.createUrlParseError("Given url string: " + this.urlString);
      if (!t.Protocol || t.Protocol.toLowerCase() !== "https:")
        throw et.createInsecureAuthorityUriError(this.urlString);
    }, r.appendQueryString = function(t, e) {
      return X.isEmpty(e) ? t : t.indexOf("?") < 0 ? t + "?" + e : t + "&" + e;
    }, r.removeHashFromUrl = function(t) {
      return r.canonicalizeUri(t.split("#")[0]);
    }, r.prototype.replaceTenantPath = function(t) {
      var e = this.getUrlComponents(), n = e.PathSegments;
      return t && n.length !== 0 && (n[0] === oo.COMMON || n[0] === oo.ORGANIZATIONS) && (n[0] = t), r.constructAuthorityUriFromObject(e);
    }, r.prototype.getHash = function() {
      return r.parseHash(this.urlString);
    }, r.prototype.getUrlComponents = function() {
      var t = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), e = this.urlString.match(t);
      if (!e)
        throw et.createUrlParseError("Given url string: " + this.urlString);
      var n = {
        Protocol: e[1],
        HostNameAndPort: e[4],
        AbsolutePath: e[5],
        QueryString: e[7]
      }, o = n.AbsolutePath.split("/");
      return o = o.filter(function(a) {
        return a && a.length > 0;
      }), n.PathSegments = o, !X.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
    }, r.getDomainFromUrl = function(t) {
      var e = RegExp("^([^:/?#]+://)?([^/?#]*)"), n = t.match(e);
      if (!n)
        throw et.createUrlParseError("Given url string: " + t);
      return n[2];
    }, r.getAbsoluteUrl = function(t, e) {
      if (t[0] === P.FORWARD_SLASH) {
        var n = new r(e), o = n.getUrlComponents();
        return o.Protocol + "//" + o.HostNameAndPort + t;
      }
      return t;
    }, r.parseHash = function(t) {
      var e = t.indexOf("#"), n = t.indexOf("#/");
      return n > -1 ? t.substring(n + 2) : e > -1 ? t.substring(e + 1) : P.EMPTY_STRING;
    }, r.parseQueryString = function(t) {
      var e = t.indexOf("?"), n = t.indexOf("/?");
      return n > -1 ? t.substring(n + 2) : e > -1 ? t.substring(e + 1) : P.EMPTY_STRING;
    }, r.constructAuthorityUriFromObject = function(t) {
      return new r(t.Protocol + "//" + t.HostNameAndPort + "/" + t.PathSegments.join("/"));
    }, r.getDeserializedHash = function(t) {
      if (X.isEmpty(t))
        return {};
      var e = r.parseHash(t), n = X.queryStringToObject(X.isEmpty(e) ? t : e);
      if (!n)
        throw ee.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(t) {
      if (X.isEmpty(t))
        return {};
      var e = r.parseQueryString(t), n = X.queryStringToObject(X.isEmpty(e) ? t : e);
      if (!n)
        throw ee.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(t) {
      if (X.isEmpty(t) || t.indexOf("=") < 0)
        return !1;
      var e = r.getDeserializedHash(t);
      return !!(e.code || e.error_description || e.error || e.state);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var U;
(function(r) {
  r.AcquireTokenByCode = "acquireTokenByCode", r.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", r.AcquireTokenSilent = "acquireTokenSilent", r.AcquireTokenSilentAsync = "acquireTokenSilentAsync", r.AcquireTokenPopup = "acquireTokenPopup", r.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", r.CryptoOptsSignJwt = "cryptoOptsSignJwt", r.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", r.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", r.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", r.SsoSilent = "ssoSilent", r.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", r.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", r.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", r.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", r.BrokerHandhshake = "brokerHandshake", r.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", r.AcquireTokenByBroker = "acquireTokenByBroker", r.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", r.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", r.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", r.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", r.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", r.AcquireTokenFromCache = "acquireTokenFromCache", r.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", r.InitializeBaseRequest = "initializeBaseRequest", r.InitializeSilentRequest = "initializeSilentRequest", r.InitializeClientApplication = "initializeClientApplication", r.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", r.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", r.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", r.SilentHandlerLoadFrame = "silentHandlerLoadFrame", r.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", r.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", r.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", r.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", r.GetAuthCodeUrl = "getAuthCodeUrl", r.HandleCodeResponseFromServer = "handleCodeResponseFromServer", r.HandleCodeResponseFromHash = "handleCodeResponseFromHash", r.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", r.AuthClientAcquireToken = "authClientAcquireToken", r.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", r.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", r.AuthClientCreateQueryString = "authClientCreateQueryString", r.PopTokenGenerateCnf = "popTokenGenerateCnf", r.PopTokenGenerateKid = "popTokenGenerateKid", r.HandleServerTokenResponse = "handleServerTokenResponse", r.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", r.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", r.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", r.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", r.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", r.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", r.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", r.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", r.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", r.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", r.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", r.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", r.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", r.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", r.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", r.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", r.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", r.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(U || (U = {}));
var es;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(es || (es = {}));
var XS = /* @__PURE__ */ new Set([
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
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Cl;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})(Cl || (Cl = {}));
var Ko = (
  /** @class */
  function() {
    function r(t, e) {
      this.cryptoUtils = t, this.performanceClient = e;
    }
    return r.prototype.generateCnf = function(t) {
      var e, n;
      return _e(this, void 0, void 0, function() {
        var o, a, c;
        return Se(this, function(l) {
          switch (l.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.PopTokenGenerateCnf, t.correlationId), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.PopTokenGenerateKid, t.correlationId), [4, this.generateKid(t)];
            case 1:
              return o = l.sent(), a = this.cryptoUtils.base64Encode(JSON.stringify(o)), c = {
                kid: o.kid,
                reqCnfString: a
              }, [4, this.cryptoUtils.hashString(a)];
            case 2:
              return [2, (c.reqCnfHash = l.sent(), c)];
          }
        });
      });
    }, r.prototype.generateKid = function(t) {
      var e;
      return _e(this, void 0, void 0, function() {
        var n;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.PopTokenGenerateKid, t.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(t)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: Cl.SW
              }];
          }
        });
      });
    }, r.prototype.signPopToken = function(t, e, n) {
      return _e(this, void 0, void 0, function() {
        return Se(this, function(o) {
          return [2, this.signPayload(t, e, n)];
        });
      });
    }, r.prototype.signPayload = function(t, e, n, o) {
      return _e(this, void 0, void 0, function() {
        var a, c, l, u, h, f;
        return Se(this, function(g) {
          switch (g.label) {
            case 0:
              return a = n.resourceRequestMethod, c = n.resourceRequestUri, l = n.shrClaims, u = n.shrNonce, h = c ? new Ue(c) : void 0, f = h == null ? void 0 : h.getUrlComponents(), [4, this.cryptoUtils.signJwt($e({ at: t, ts: Ar.nowSeconds(), m: a == null ? void 0 : a.toUpperCase(), u: f == null ? void 0 : f.HostNameAndPort, nonce: u || this.cryptoUtils.createNewGuid(), p: f == null ? void 0 : f.AbsolutePath, q: f != null && f.QueryString ? [[], f.QueryString] : void 0, client_claims: l || void 0 }, o), e, n.correlationId)];
            case 1:
              return [2, g.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var El = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(t, e) {
      var n = [
        vl,
        t,
        e
      ];
      return n.join(wt.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(t, e, n) {
      var o = new r();
      return o.clientId = t, o.environment = e, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(t, e) {
      return e ? t.indexOf(vl) === 0 && e.hasOwnProperty("clientId") && e.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ZS = (
  /** @class */
  function() {
    function r(t, e) {
      this.cache = t, this.hasChanged = e;
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
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ts = (
  /** @class */
  function() {
    function r(t, e, n, o, a, c, l) {
      this.clientId = t, this.cacheStorage = e, this.cryptoObj = n, this.logger = o, this.serializableCache = a, this.persistencePlugin = c, this.performanceClient = l;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(t, e, n) {
      if (!t.state || !e)
        throw t.state ? ee.createStateNotFoundError("Cached State") : ee.createStateNotFoundError("Server State");
      if (decodeURIComponent(t.state) !== decodeURIComponent(e))
        throw ee.createStateMismatchError();
      if (t.error || t.error_description || t.suberror)
        throw Br.isInteractionRequiredError(t.error, t.error_description, t.suberror) ? new Br(t.error || P.EMPTY_STRING, t.error_description, t.suberror, t.timestamp || P.EMPTY_STRING, t.trace_id || P.EMPTY_STRING, t.correlation_id || P.EMPTY_STRING, t.claims || P.EMPTY_STRING) : new co(t.error || P.EMPTY_STRING, t.error_description, t.suberror);
      t.client_info && Xa(t.client_info, n);
    }, r.prototype.validateTokenResponse = function(t) {
      if (t.error || t.error_description || t.suberror) {
        if (Br.isInteractionRequiredError(t.error, t.error_description, t.suberror))
          throw new Br(t.error, t.error_description, t.suberror, t.timestamp || P.EMPTY_STRING, t.trace_id || P.EMPTY_STRING, t.correlation_id || P.EMPTY_STRING, t.claims || P.EMPTY_STRING);
        var e = t.error_codes + " - [" + t.timestamp + "]: " + t.error_description + " - Correlation ID: " + t.correlation_id + " - Trace ID: " + t.trace_id;
        throw new co(t.error, e, t.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(t, e, n, o, a, c, l, u, h) {
      var f;
      return _e(this, void 0, void 0, function() {
        var g, m, v, C, b, _, A;
        return Se(this, function(I) {
          switch (I.label) {
            case 0:
              if ((f = this.performanceClient) === null || f === void 0 || f.addQueueMeasurement(U.HandleServerTokenResponse, t.correlation_id), t.id_token) {
                if (g = new en(t.id_token || P.EMPTY_STRING, this.cryptoObj), a && !X.isEmpty(a.nonce) && g.claims.nonce !== a.nonce)
                  throw ee.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (m = g.claims.auth_time, !m)
                    throw ee.createAuthTimeNotFoundError();
                  en.checkMaxAge(m, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Rt.generateHomeAccountId(t.client_info || P.EMPTY_STRING, e.authorityType, this.logger, this.cryptoObj, g), a && a.state && (v = yn.parseRequestState(this.cryptoObj, a.state)), t.key_id = t.key_id || o.sshKid || void 0, C = this.generateCacheRecord(t, e, n, o, g, c, a), I.label = 1;
            case 1:
              return I.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), b = new ZS(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(b)]) : [3, 3];
            case 2:
              I.sent(), I.label = 3;
            case 3:
              return l && !u && C.account && (_ = C.account.generateAccountKey(), A = this.cacheStorage.getAccount(_), !A) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, e, C, !1, o, g, v, void 0, h)]) : [4, this.cacheStorage.saveCacheRecord(C)];
            case 4:
              return I.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && b ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(b)]) : [3, 7];
            case 6:
              I.sent(), I.label = 7;
            case 7:
              return [
                7
                /*endfinally*/
              ];
            case 8:
              return [2, r.generateAuthenticationResult(this.cryptoObj, e, C, !1, o, g, v, t, h)];
          }
        });
      });
    }, r.prototype.generateCacheRecord = function(t, e, n, o, a, c, l) {
      var u = e.getPreferredCache();
      if (X.isEmpty(u))
        throw ee.createInvalidCacheEnvironmentError();
      var h, f;
      !X.isEmpty(t.id_token) && a && (h = ro.createIdTokenEntity(this.homeAccountIdentifier, u, t.id_token || P.EMPTY_STRING, this.clientId, a.claims.tid || P.EMPTY_STRING), f = this.generateAccountEntity(t, a, e, l));
      var g = null;
      if (!X.isEmpty(t.access_token)) {
        var m = t.scope ? Ut.fromString(t.scope) : new Ut(o.scopes || []), v = (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, C = (typeof t.ext_expires_in == "string" ? parseInt(t.ext_expires_in, 10) : t.ext_expires_in) || 0, b = (typeof t.refresh_in == "string" ? parseInt(t.refresh_in, 10) : t.refresh_in) || void 0, _ = n + v, A = _ + C, I = b && b > 0 ? n + b : void 0;
        g = no.createAccessTokenEntity(this.homeAccountIdentifier, u, t.access_token || P.EMPTY_STRING, this.clientId, a ? a.claims.tid || P.EMPTY_STRING : e.tenant, m.printScopes(), _, A, this.cryptoObj, I, t.token_type, c, t.key_id, o.claims, o.requestedClaimsHash);
      }
      var T = null;
      X.isEmpty(t.refresh_token) || (T = Do.createRefreshTokenEntity(this.homeAccountIdentifier, u, t.refresh_token || P.EMPTY_STRING, this.clientId, t.foci, c));
      var N = null;
      return X.isEmpty(t.foci) || (N = El.createAppMetadataEntity(this.clientId, u, t.foci)), new ki(f, h, g, T, N);
    }, r.prototype.generateAccountEntity = function(t, e, n, o) {
      var a = n.authorityType, c = o ? o.cloud_graph_host_name : P.EMPTY_STRING, l = o ? o.msgraph_host : P.EMPTY_STRING;
      if (a === Wt.Adfs)
        return this.logger.verbose("Authority type is ADFS, creating ADFS account"), Rt.createGenericAccount(this.homeAccountIdentifier, e, n, c, l);
      if (X.isEmpty(t.client_info) && n.protocolMode === "AAD")
        throw ee.createClientInfoEmptyError();
      return t.client_info ? Rt.createAccount(t.client_info, this.homeAccountIdentifier, e, n, c, l) : Rt.createGenericAccount(this.homeAccountIdentifier, e, n, c, l);
    }, r.generateAuthenticationResult = function(t, e, n, o, a, c, l, u, h) {
      var f, g, m;
      return _e(this, void 0, void 0, function() {
        var v, C, b, _, A, I, T, N, x, D, W;
        return Se(this, function(z) {
          switch (z.label) {
            case 0:
              if (v = P.EMPTY_STRING, C = [], b = null, A = P.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== ze.POP)
                return [3, 2];
              if (I = new Ko(t), T = n.accessToken, N = T.secret, x = T.keyId, !x)
                throw ee.createKeyIdMissingError();
              return [4, I.signPopToken(N, x, a)];
            case 1:
              return v = z.sent(), [3, 3];
            case 2:
              v = n.accessToken.secret, z.label = 3;
            case 3:
              C = Ut.fromString(n.accessToken.target).asArray(), b = new Date(Number(n.accessToken.expiresOn) * 1e3), _ = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), z.label = 4;
            case 4:
              return n.appMetadata && (A = n.appMetadata.familyId === Si ? Si : P.EMPTY_STRING), D = (c == null ? void 0 : c.claims.oid) || (c == null ? void 0 : c.claims.sub) || P.EMPTY_STRING, W = (c == null ? void 0 : c.claims.tid) || P.EMPTY_STRING, u != null && u.spa_accountid && n.account && (n.account.nativeAccountId = u == null ? void 0 : u.spa_accountid), [2, {
                authority: e.canonicalAuthority,
                uniqueId: D,
                tenantId: W,
                scopes: C,
                account: n.account ? n.account.getAccountInfo() : null,
                idToken: c ? c.rawToken : P.EMPTY_STRING,
                idTokenClaims: c ? c.claims : {},
                accessToken: v,
                fromCache: o,
                expiresOn: b,
                correlationId: a.correlationId,
                requestId: h || P.EMPTY_STRING,
                extExpiresOn: _,
                familyId: A,
                tokenType: ((f = n.accessToken) === null || f === void 0 ? void 0 : f.tokenType) || P.EMPTY_STRING,
                state: l ? l.userRequestState : P.EMPTY_STRING,
                cloudGraphHostName: ((g = n.account) === null || g === void 0 ? void 0 : g.cloudGraphHostName) || P.EMPTY_STRING,
                msGraphHost: ((m = n.account) === null || m === void 0 ? void 0 : m.msGraphHost) || P.EMPTY_STRING,
                code: u == null ? void 0 : u.spa_code,
                fromNativeBroker: !1
              }];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ip = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n) {
      var o = r.call(this, e, n) || this;
      return o.includeRedirectUri = !0, o;
    }
    return t.prototype.getAuthCodeUrl = function(e) {
      var n, o;
      return _e(this, void 0, void 0, function() {
        var a;
        return Se(this, function(c) {
          switch (c.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.GetAuthCodeUrl, e.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.AuthClientCreateQueryString, e.correlationId), [4, this.createAuthCodeUrlQueryString(e)];
            case 1:
              return a = c.sent(), [2, Ue.appendQueryString(this.authority.authorizationEndpoint, a)];
          }
        });
      });
    }, t.prototype.acquireToken = function(e, n) {
      var o, a, c, l, u, h;
      return _e(this, void 0, void 0, function() {
        var f, g, m, v, C, b, _ = this;
        return Se(this, function(A) {
          switch (A.label) {
            case 0:
              if (!e || !e.code)
                throw ee.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.AuthClientAcquireToken, e.correlationId), f = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement("AuthCodeClientAcquireToken", e.correlationId), this.logger.info("in acquireToken call in auth-code client"), g = Ar.nowSeconds(), (c = this.performanceClient) === null || c === void 0 || c.setPreQueueTime(U.AuthClientExecuteTokenRequest, e.correlationId), [4, this.executeTokenRequest(this.authority, e)];
            case 1:
              return m = A.sent(), v = (l = m.headers) === null || l === void 0 ? void 0 : l[pr.X_MS_REQUEST_ID], C = (u = m.headers) === null || u === void 0 ? void 0 : u[pr.X_MS_HTTP_VERSION], C && (f == null || f.addStaticFields({
                httpVerAuthority: C
              })), b = new ts(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), b.validateTokenResponse(m.body), (h = this.performanceClient) === null || h === void 0 || h.setPreQueueTime(U.HandleServerTokenResponse, e.correlationId), [2, b.handleServerTokenResponse(m.body, this.authority, g, e, n, void 0, void 0, void 0, v).then(function(I) {
                return f == null || f.endMeasurement({
                  success: !0
                }), I;
              }).catch(function(I) {
                throw _.logger.verbose("Error in fetching token in ACC", e.correlationId), f == null || f.endMeasurement({
                  errorCode: I.errorCode,
                  subErrorCode: I.subError,
                  success: !1
                }), I;
              })];
          }
        });
      });
    }, t.prototype.handleFragmentResponse = function(e, n) {
      var o = new ts(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), a = new Ue(e), c = Ue.getDeserializedHash(a.getHash());
      if (o.validateServerAuthorizationCodeResponse(c, n, this.cryptoUtils), !c.code)
        throw ee.createNoAuthCodeInServerResponseError();
      return $e($e({}, c), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: c.code
      });
    }, t.prototype.getLogoutUri = function(e) {
      if (!e)
        throw et.createEmptyLogoutRequestError();
      var n = this.createLogoutUrlQueryString(e);
      return Ue.appendQueryString(this.authority.endSessionEndpoint, n);
    }, t.prototype.executeTokenRequest = function(e, n) {
      var o, a;
      return _e(this, void 0, void 0, function() {
        var c, l, u, h, f, g, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.AuthClientExecuteTokenRequest, n.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.AuthClientCreateTokenRequestBody, n.correlationId), c = this.createTokenQueryParameters(n), l = Ue.appendQueryString(e.tokenEndpoint, c), [4, this.createTokenRequestBody(n)];
            case 1:
              if (u = v.sent(), h = void 0, n.clientInfo)
                try {
                  f = Xa(n.clientInfo, this.cryptoUtils), h = {
                    credential: "" + f.uid + wt.CLIENT_INFO_SEPARATOR + f.utid,
                    type: fr.HOME_ACCOUNT_ID
                  };
                } catch (C) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + C);
                }
              return g = this.createTokenRequestHeaders(h || n.ccsCredential), m = {
                clientId: this.config.authOptions.clientId,
                authority: e.canonicalAuthority,
                scopes: n.scopes,
                claims: n.claims,
                authenticationScheme: n.authenticationScheme,
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                sshKid: n.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, g, m)];
          }
        });
      });
    }, t.prototype.createTokenRequestBody = function(e) {
      var n, o;
      return _e(this, void 0, void 0, function() {
        var a, c, l, u, h, f, g, g, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.AuthClientCreateTokenRequestBody, e.correlationId), a = new Ri(), a.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? a.addRedirectUri(e.redirectUri) : eo.validateRedirectUri(e.redirectUri), a.addScopes(e.scopes), a.addAuthorizationCode(e.code), a.addLibraryInfo(this.config.libraryInfo), a.addApplicationTelemetry(this.config.telemetry.application), a.addThrottling(), this.serverTelemetryManager && a.addServerTelemetry(this.serverTelemetryManager), e.codeVerifier && a.addCodeVerifier(e.codeVerifier), this.config.clientCredentials.clientSecret && a.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (c = this.config.clientCredentials.clientAssertion, a.addClientAssertion(c.assertion), a.addClientAssertionType(c.assertionType)), a.addGrantType(ja.AUTHORIZATION_CODE_GRANT), a.addClientInfo(), e.authenticationScheme !== ze.POP ? [3, 2] : (l = new Ko(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.PopTokenGenerateCnf, e.correlationId), [4, l.generateCnf(e)]);
            case 1:
              return u = v.sent(), a.addPopToken(u.reqCnfString), [3, 3];
            case 2:
              if (e.authenticationScheme === ze.SSH)
                if (e.sshJwk)
                  a.addSshJwk(e.sshJwk);
                else
                  throw et.createMissingSshJwkError();
              v.label = 3;
            case 3:
              if (h = e.correlationId || this.config.cryptoInterface.createNewGuid(), a.addCorrelationId(h), (!X.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && a.addClaims(e.claims, this.config.authOptions.clientCapabilities), f = void 0, e.clientInfo)
                try {
                  g = Xa(e.clientInfo, this.cryptoUtils), f = {
                    credential: "" + g.uid + wt.CLIENT_INFO_SEPARATOR + g.utid,
                    type: fr.HOME_ACCOUNT_ID
                  };
                } catch (C) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + C);
                }
              else
                f = e.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && f)
                switch (f.type) {
                  case fr.HOME_ACCOUNT_ID:
                    try {
                      g = Lo(f.credential), a.addCcsOid(g);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case fr.UPN:
                    a.addCcsUpn(f.credential);
                    break;
                }
              return e.tokenBodyParameters && a.addExtraQueryParameters(e.tokenBodyParameters), e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[Ae.RETURN_SPA_CODE]) && a.addExtraQueryParameters((m = {}, m[Ae.RETURN_SPA_CODE] = "1", m)), [2, a.createQueryString()];
          }
        });
      });
    }, t.prototype.createAuthCodeUrlQueryString = function(e) {
      var n;
      return _e(this, void 0, void 0, function() {
        var o, a, c, l, u, h, h, h, f, g;
        return Se(this, function(m) {
          switch (m.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.AuthClientCreateQueryString, e.correlationId), o = new Ri(), o.addClientId(this.config.authOptions.clientId), a = gs(e.scopes || [], e.extraScopesToConsent || []), o.addScopes(a), o.addRedirectUri(e.redirectUri), c = e.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(c), o.addResponseMode(e.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), e.codeChallenge && e.codeChallengeMethod && o.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod), e.prompt && o.addPrompt(e.prompt), e.domainHint && o.addDomainHint(e.domainHint), e.prompt !== Ft.SELECT_ACCOUNT)
                if (e.sid && e.prompt === Ft.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(e.sid);
                else if (e.account) {
                  if (l = this.extractAccountSid(e.account), u = this.extractLoginHint(e.account), u) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(u);
                    try {
                      h = Lo(e.account.homeAccountId), o.addCcsOid(h);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (l && e.prompt === Ft.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(l);
                    try {
                      h = Lo(e.account.homeAccountId), o.addCcsOid(h);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (e.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(e.loginHint), o.addCcsUpn(e.loginHint);
                  else if (e.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(e.account.username);
                    try {
                      h = Lo(e.account.homeAccountId), o.addCcsOid(h);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  e.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(e.loginHint), o.addCcsUpn(e.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return e.nonce && o.addNonce(e.nonce), e.state && o.addState(e.state), (!X.isEmpty(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(e.claims, this.config.authOptions.clientCapabilities), e.extraQueryParameters && o.addExtraQueryParameters(e.extraQueryParameters), e.nativeBroker ? (o.addNativeBroker(), e.authenticationScheme !== ze.POP ? [3, 2] : (f = new Ko(this.cryptoUtils), [4, f.generateCnf(e)])) : [3, 2];
            case 1:
              g = m.sent(), o.addPopToken(g.reqCnfString), m.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, t.prototype.createLogoutUrlQueryString = function(e) {
      var n = new Ri();
      return e.postLogoutRedirectUri && n.addPostLogoutRedirectUri(e.postLogoutRedirectUri), e.correlationId && n.addCorrelationId(e.correlationId), e.idTokenHint && n.addIdTokenHint(e.idTokenHint), e.state && n.addState(e.state), e.logoutHint && n.addLogoutHint(e.logoutHint), e.extraQueryParameters && n.addExtraQueryParameters(e.extraQueryParameters), n.createQueryString();
    }, t.prototype.extractAccountSid = function(e) {
      var n;
      return ((n = e.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, t.prototype.extractLoginHint = function(e) {
      var n;
      return ((n = e.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, t;
  }(Bl)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ap = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n) {
      return r.call(this, e, n) || this;
    }
    return t.prototype.acquireToken = function(e) {
      var n, o, a, c, l, u, h;
      return _e(this, void 0, void 0, function() {
        var f, g, m, v, C, b, _ = this;
        return Se(this, function(A) {
          switch (A.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RefreshTokenClientAcquireToken, e.correlationId), f = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.RefreshTokenClientAcquireToken, e.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", e.correlationId), g = Ar.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.RefreshTokenClientExecuteTokenRequest, e.correlationId), [4, this.executeTokenRequest(e, this.authority)];
            case 1:
              return m = A.sent(), v = (c = m.headers) === null || c === void 0 ? void 0 : c[pr.X_MS_HTTP_VERSION], f == null || f.addStaticFields({
                refreshTokenSize: ((l = m.body.refresh_token) === null || l === void 0 ? void 0 : l.length) || 0
              }), v && (f == null || f.addStaticFields({
                httpVerToken: v
              })), C = (u = m.headers) === null || u === void 0 ? void 0 : u[pr.X_MS_REQUEST_ID], b = new ts(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), b.validateTokenResponse(m.body), (h = this.performanceClient) === null || h === void 0 || h.setPreQueueTime(U.HandleServerTokenResponse, e.correlationId), [2, b.handleServerTokenResponse(m.body, this.authority, g, e, void 0, void 0, !0, e.forceCache, C).then(function(I) {
                return f == null || f.endMeasurement({
                  success: !0
                }), I;
              }).catch(function(I) {
                throw _.logger.verbose("Error in fetching refresh token", e.correlationId), f == null || f.endMeasurement({
                  errorCode: I.errorCode,
                  subErrorCode: I.subError,
                  success: !1
                }), I;
              })];
          }
        });
      });
    }, t.prototype.acquireTokenByRefreshToken = function(e) {
      var n, o, a, c;
      return _e(this, void 0, void 0, function() {
        var l, u, h;
        return Se(this, function(f) {
          if (!e)
            throw et.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account)
            throw ee.createNoAccountInSilentRequestError();
          if (l = this.cacheManager.isAppMetadataFOCI(e.account.environment), l)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId), [2, this.acquireTokenWithCachedRefreshToken(e, !0)];
            } catch (g) {
              if (u = g instanceof Br && g.errorCode === Uo.noTokensFoundError.code, h = g instanceof co && g.errorCode === Tf.INVALID_GRANT_ERROR && g.subError === Tf.CLIENT_MISMATCH_ERROR, u || h)
                return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId), [2, this.acquireTokenWithCachedRefreshToken(e, !1)];
              throw g;
            }
          return (c = this.performanceClient) === null || c === void 0 || c.setPreQueueTime(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId), [2, this.acquireTokenWithCachedRefreshToken(e, !1)];
        });
      });
    }, t.prototype.acquireTokenWithCachedRefreshToken = function(e, n) {
      var o, a, c;
      return _e(this, void 0, void 0, function() {
        var l, u, h;
        return Se(this, function(f) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(U.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", e.correlationId), u = this.cacheManager.getRefreshToken(e.account, n), !u)
            throw l == null || l.discardMeasurement(), Br.createNoTokensFoundError();
          return l == null || l.endMeasurement({
            success: !0
          }), h = $e($e({}, e), { refreshToken: u.secret, authenticationScheme: e.authenticationScheme || ze.BEARER, ccsCredential: {
            credential: e.account.homeAccountId,
            type: fr.HOME_ACCOUNT_ID
          } }), (c = this.performanceClient) === null || c === void 0 || c.setPreQueueTime(U.RefreshTokenClientAcquireToken, e.correlationId), [2, this.acquireToken(h)];
        });
      });
    }, t.prototype.executeTokenRequest = function(e, n) {
      var o, a, c;
      return _e(this, void 0, void 0, function() {
        var l, u, h, f, g, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(U.RefreshTokenClientExecuteTokenRequest, e.correlationId), l = (a = this.performanceClient) === null || a === void 0 ? void 0 : a.startMeasurement(U.RefreshTokenClientExecuteTokenRequest, e.correlationId), (c = this.performanceClient) === null || c === void 0 || c.setPreQueueTime(U.RefreshTokenClientCreateTokenRequestBody, e.correlationId), u = this.createTokenQueryParameters(e), h = Ue.appendQueryString(n.tokenEndpoint, u), [4, this.createTokenRequestBody(e)];
            case 1:
              return f = v.sent(), g = this.createTokenRequestHeaders(e.ccsCredential), m = {
                clientId: this.config.authOptions.clientId,
                authority: n.canonicalAuthority,
                scopes: e.scopes,
                claims: e.claims,
                authenticationScheme: e.authenticationScheme,
                resourceRequestMethod: e.resourceRequestMethod,
                resourceRequestUri: e.resourceRequestUri,
                shrClaims: e.shrClaims,
                sshKid: e.sshKid
              }, [2, this.executePostToTokenEndpoint(h, f, g, m).then(function(C) {
                return l == null || l.endMeasurement({
                  success: !0
                }), C;
              }).catch(function(C) {
                throw l == null || l.endMeasurement({
                  success: !1
                }), C;
              })];
          }
        });
      });
    }, t.prototype.createTokenRequestBody = function(e) {
      var n, o, a;
      return _e(this, void 0, void 0, function() {
        var c, l, u, h, f, g, m;
        return Se(this, function(v) {
          switch (v.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RefreshTokenClientCreateTokenRequestBody, e.correlationId), c = e.correlationId, l = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.BaseClientCreateTokenRequestHeaders, c), u = new Ri(), u.addClientId(this.config.authOptions.clientId), u.addScopes(e.scopes), u.addGrantType(ja.REFRESH_TOKEN_GRANT), u.addClientInfo(), u.addLibraryInfo(this.config.libraryInfo), u.addApplicationTelemetry(this.config.telemetry.application), u.addThrottling(), this.serverTelemetryManager && u.addServerTelemetry(this.serverTelemetryManager), u.addCorrelationId(c), u.addRefreshToken(e.refreshToken), this.config.clientCredentials.clientSecret && u.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (h = this.config.clientCredentials.clientAssertion, u.addClientAssertion(h.assertion), u.addClientAssertionType(h.assertionType)), e.authenticationScheme !== ze.POP ? [3, 2] : (f = new Ko(this.cryptoUtils, this.performanceClient), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.PopTokenGenerateCnf, e.correlationId), [4, f.generateCnf(e)]);
            case 1:
              return g = v.sent(), u.addPopToken(g.reqCnfString), [3, 3];
            case 2:
              if (e.authenticationScheme === ze.SSH)
                if (e.sshJwk)
                  u.addSshJwk(e.sshJwk);
                else
                  throw l == null || l.endMeasurement({
                    success: !1
                  }), et.createMissingSshJwkError();
              v.label = 3;
            case 3:
              if ((!X.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && u.addClaims(e.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && e.ccsCredential)
                switch (e.ccsCredential.type) {
                  case fr.HOME_ACCOUNT_ID:
                    try {
                      m = Lo(e.ccsCredential.credential), u.addCcsOid(m);
                    } catch (C) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + C);
                    }
                    break;
                  case fr.UPN:
                    u.addCcsUpn(e.ccsCredential.credential);
                    break;
                }
              return l == null || l.endMeasurement({
                success: !0
              }), [2, u.createQueryString()];
          }
        });
      });
    }, t;
  }(Bl)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var eT = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n) {
      return r.call(this, e, n) || this;
    }
    return t.prototype.acquireToken = function(e) {
      return _e(this, void 0, void 0, function() {
        var n, o;
        return Se(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(e)];
            case 1:
              return [2, a.sent()];
            case 2:
              if (n = a.sent(), n instanceof ee && n.errorCode === Y.tokenRefreshRequired.code)
                return o = new Ap(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(e)];
              throw n;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.acquireCachedToken = function(e) {
      var n, o, a, c, l;
      return _e(this, void 0, void 0, function() {
        var u, h;
        return Se(this, function(f) {
          switch (f.label) {
            case 0:
              if (!e)
                throw et.createEmptyTokenRequestError();
              if (e.forceRefresh)
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(Dn.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), ee.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !X.isEmptyObj(e.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(Dn.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), ee.createRefreshRequiredError();
              if (!e.account)
                throw ee.createNoAccountInSilentRequestError();
              if (u = e.authority || this.authority.getPreferredCache(), h = this.cacheManager.readCacheRecord(e.account, e, u), h.accessToken) {
                if (Ar.wasClockTurnedBack(h.accessToken.cachedAt) || Ar.isTokenExpired(h.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (c = this.serverTelemetryManager) === null || c === void 0 || c.setCacheOutcome(Dn.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), ee.createRefreshRequiredError();
                if (h.accessToken.refreshOn && Ar.isTokenExpired(h.accessToken.refreshOn, 0))
                  throw (l = this.serverTelemetryManager) === null || l === void 0 || l.setCacheOutcome(Dn.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), ee.createRefreshRequiredError();
              } else
                throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(Dn.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), ee.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(h, e)];
            case 1:
              return [2, f.sent()];
          }
        });
      });
    }, t.prototype.generateResultFromCacheRecord = function(e, n) {
      return _e(this, void 0, void 0, function() {
        var o, a;
        return Se(this, function(c) {
          switch (c.label) {
            case 0:
              if (e.idToken && (o = new en(e.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (a = o == null ? void 0 : o.claims.auth_time, !a)
                  throw ee.createAuthTimeNotFoundError();
                en.checkMaxAge(a, n.maxAge);
              }
              return [4, ts.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, n, o)];
            case 1:
              return [2, c.sent()];
          }
        });
      });
    }, t;
  }(Bl)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function tT(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Rp = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Af = Rp.endpointMetadata, Rf = Rp.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.1 2023-10-27 */
var xi;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(xi || (xi = {}));
/*! @azure/msal-common v13.3.1 2023-10-27 */
var wl = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = Ar.nowSeconds() + Ti.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(t, e) {
      this.aliases = t.aliases, this.preferred_cache = t.preferred_cache, this.preferred_network = t.preferred_network, this.aliasesFromNetwork = e;
    }, r.prototype.updateEndpointMetadata = function(t, e) {
      this.authorization_endpoint = t.authorization_endpoint, this.token_endpoint = t.token_endpoint, this.end_session_endpoint = t.end_session_endpoint, this.issuer = t.issuer, this.endpointsFromNetwork = e, this.jwks_uri = t.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(t) {
      this.canonical_authority = t;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = Ar.nowSeconds() + Ti.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= Ar.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(t, e) {
      return e ? t.indexOf(Ti.CACHE_KEY) === 0 && e.hasOwnProperty("aliases") && e.hasOwnProperty("preferred_cache") && e.hasOwnProperty("preferred_network") && e.hasOwnProperty("canonical_authority") && e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer") && e.hasOwnProperty("aliasesFromNetwork") && e.hasOwnProperty("endpointsFromNetwork") && e.hasOwnProperty("expiresAt") && e.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
function rT(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
function nT(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.1 2023-10-27 */
var oT = (
  /** @class */
  function() {
    function r(t, e, n) {
      this.networkInterface = t, this.performanceClient = e, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(t, e) {
      var n, o, a, c;
      return _e(this, void 0, void 0, function() {
        var l, u, h, f, g;
        return Se(this, function(m) {
          switch (m.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RegionDiscoveryDetectRegion, this.correlationId), l = t, l)
                return [3, 8];
              u = r.IMDS_OPTIONS, m.label = 1;
            case 1:
              return m.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(P.IMDS_VERSION, u)];
            case 2:
              return h = m.sent(), h.status === xo.httpSuccess && (l = h.body, e.region_source = xn.IMDS), h.status !== xo.httpBadRequest ? [3, 5] : ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(u)]);
            case 3:
              return f = m.sent(), f ? ((c = this.performanceClient) === null || c === void 0 || c.setPreQueueTime(U.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(f, u)]) : (e.region_source = xn.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              g = m.sent(), g.status === xo.httpSuccess && (l = g.body, e.region_source = xn.IMDS), m.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return m.sent(), e.region_source = xn.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              e.region_source = xn.ENVIRONMENT_VARIABLE, m.label = 9;
            case 9:
              return l || (e.region_source = xn.FAILED_AUTO_DETECTION), [2, l || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(t, e) {
      var n;
      return _e(this, void 0, void 0, function() {
        return Se(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(U.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(P.IMDS_ENDPOINT + "?api-version=" + t + "&format=text", e, P.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(t) {
      var e;
      return _e(this, void 0, void 0, function() {
        var n;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(P.IMDS_ENDPOINT + "?format=json", t)];
            case 2:
              return n = o.sent(), n.status === xo.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Li = (
  /** @class */
  function() {
    function r(t, e, n, o, a, c, l) {
      this.canonicalAuthority = t, this._canonicalAuthority.validateAsUri(), this.networkInterface = e, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = a, this.performanceClient = c, this.correlationId = l, this.regionDiscovery = new oT(e, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(t) {
      if (t.HostNameAndPort.endsWith(P.CIAM_AUTH_URL))
        return Wt.Ciam;
      var e = t.PathSegments;
      if (e.length)
        switch (e[0].toLowerCase()) {
          case P.ADFS:
            return Wt.Adfs;
          case P.DSTS:
            return Wt.Dsts;
        }
      return Wt.Default;
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
      set: function(t) {
        this._canonicalAuthority = new Ue(t), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
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
        throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw ee.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.canReplaceTenant = function(t) {
      return t.PathSegments.length === 1 && !r.reservedTenantDomains.has(t.PathSegments[0]) && this.getAuthorityType(t) === Wt.Default && this.protocolMode === xi.AAD;
    }, r.prototype.replaceTenant = function(t) {
      return t.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, r.prototype.replacePath = function(t) {
      var e = this, n = t, o = new Ue(this.metadata.canonical_authority), a = o.getUrlComponents(), c = a.PathSegments, l = this.canonicalAuthorityUrlComponents.PathSegments;
      return l.forEach(function(u, h) {
        var f = c[h];
        if (h === 0 && e.canReplaceTenant(a)) {
          var g = new Ue(e.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          f !== g && (e.logger.verbose("Replacing tenant domain name " + f + " with id " + g), f = g);
        }
        u !== f && (n = n.replace("/" + f + "/", "/" + u + "/"));
      }), this.replaceTenant(n);
    }, Object.defineProperty(r.prototype, "defaultOpenIdConfigurationEndpoint", {
      /**
       * The default open id configuration endpoint for any canonical authority.
       */
      get: function() {
        return this.authorityType === Wt.Adfs || this.authorityType === Wt.Dsts || this.protocolMode === xi.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, r.prototype.resolveEndpointsAsync = function() {
      var t, e, n;
      return _e(this, void 0, void 0, function() {
        var o, a, c, l;
        return Se(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new wl(), o.updateCanonicalAuthority(this.canonicalAuthority)), (e = this.performanceClient) === null || e === void 0 || e.setPreQueueTime(U.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return a = u.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
            case 2:
              return c = u.sent(), a !== Ir.CACHE && c !== Ir.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), l = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(l, o), this.metadata = o, [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.updateEndpointMetadata = function(t) {
      var e, n, o, a, c, l;
      return _e(this, void 0, void 0, function() {
        var u, h;
        return Se(this, function(f) {
          switch (f.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.AuthorityUpdateEndpointMetadata, this.correlationId), u = this.getEndpointMetadataFromConfig(), u ? (t.updateEndpointMetadata(u, !1), [2, Ir.CONFIG]) : this.isAuthoritySameType(t) && t.endpointsFromNetwork && !t.isExpired() ? [2, Ir.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return u = f.sent(), u ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(U.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(u)]) : [3, 3] : [3, 4];
            case 2:
              u = f.sent(), f.label = 3;
            case 3:
              return t.updateEndpointMetadata(u, !0), [2, Ir.NETWORK];
            case 4:
              return h = this.getEndpointMetadataFromHardcodedValues(), h && !this.authorityOptions.skipAuthorityMetadataCache ? !((c = this.authorityOptions.azureRegionConfiguration) === null || c === void 0) && c.azureRegion ? ((l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(U.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(h)]) : [3, 6] : [3, 7];
            case 5:
              h = f.sent(), f.label = 6;
            case 6:
              return t.updateEndpointMetadata(h, !1), [2, Ir.HARDCODED_VALUES];
            case 7:
              throw ee.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
          }
        });
      });
    }, r.prototype.isAuthoritySameType = function(t) {
      var e = new Ue(t.canonical_authority), n = e.getUrlComponents().PathSegments;
      return n.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }, r.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata)
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch {
          throw et.createInvalidAuthorityMetadataError();
        }
      return null;
    }, r.prototype.getEndpointMetadataFromNetwork = function() {
      var t;
      return _e(this, void 0, void 0, function() {
        var e, n;
        return Se(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), e = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, e)];
            case 2:
              return n = o.sent(), [2, tT(n.body) ? n.body : null];
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
      return this.canonicalAuthority in Af ? Af[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(t) {
      var e, n, o, a;
      return _e(this, void 0, void 0, function() {
        var c, l;
        return Se(this, function(u) {
          switch (u.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), c = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, c ? c !== P.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Ai.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = c, [2, r.replaceWithRegionalInformation(t, c)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(U.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0 ? void 0 : a.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (l = u.sent(), l)
                return this.regionDiscoveryMetadata.region_outcome = Ai.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = l, [2, r.replaceWithRegionalInformation(t, l)];
              this.regionDiscoveryMetadata.region_outcome = Ai.AUTO_DETECTION_REQUESTED_FAILED, u.label = 2;
            case 2:
              return [2, t];
          }
        });
      });
    }, r.prototype.updateCloudDiscoveryMetadata = function(t) {
      var e, n;
      return _e(this, void 0, void 0, function() {
        var o, a, c;
        return Se(this, function(l) {
          switch (l.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(U.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || P.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || P.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (t.canonical_authority || P.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), t.updateCloudDiscoveryMetadata(o, !1), [2, Ir.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), a = t.isExpired(), this.isAuthoritySameType(t) && t.aliasesFromNetwork && !a ? (this.logger.verbose("Found metadata in the cache."), [2, Ir.CACHE]) : (a && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(U.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = l.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), t.updateCloudDiscoveryMetadata(o, !0), [2, Ir.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), c = this.getCloudDiscoveryMetadataFromHarcodedValues(), c && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), t.updateCloudDiscoveryMetadata(c, !1), [2, Ir.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), et.createUntrustedAuthorityError();
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === Wt.Ciam)
        return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      if (this.authorityOptions.cloudDiscoveryMetadata) {
        this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
        try {
          this.logger.verbose("Attempting to parse the cloud discovery metadata.");
          var t = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata), e = r.getCloudDiscoveryMetadataFromNetworkResponse(t.metadata, this.hostnameAndPort);
          if (this.logger.verbose("Parsed the cloud discovery metadata."), e)
            return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), e;
          this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
        } catch {
          throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), et.createInvalidCloudDiscoveryMetadataError();
        }
      }
      return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
    }, r.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var t;
      return _e(this, void 0, void 0, function() {
        var e, n, o, a, c, l, u, h;
        return Se(this, function(f) {
          switch (f.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(U.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), e = "" + P.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(e, n)];
            case 2:
              if (a = f.sent(), c = void 0, l = void 0, rT(a.body))
                c = a.body, l = c.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + c.tenant_discovery_endpoint);
              else if (nT(a.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + a.status), c = a.body, c.error === P.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + c.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + c.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), l = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(l, this.hostnameAndPort), [3, 4];
            case 3:
              return u = f.sent(), u instanceof ue ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ` + u.errorCode + `
Error Description: ` + u.errorMessage) : (h = u, this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ` + h.name + `
Error Description: ` + h.message)), [2, null];
            case 4:
              return o || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), o = r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), [2, o];
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function() {
      return this.canonicalAuthority in Rf ? Rf[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var t = this, e = this.authorityOptions.knownAuthorities.filter(function(n) {
        return Ue.getDomainFromUrl(n).toLowerCase() === t.hostnameAndPort;
      });
      return e.length > 0;
    }, r.generateAuthority = function(t, e) {
      var n;
      if (e && e.azureCloudInstance !== Mi.None) {
        var o = e.tenant ? e.tenant : P.DEFAULT_COMMON_TENANT;
        n = e.azureCloudInstance + "/" + o + "/";
      }
      return n || t;
    }, r.createCloudDiscoveryMetadataFromHost = function(t) {
      return {
        preferred_network: t,
        preferred_cache: t,
        aliases: [t]
      };
    }, r.getCloudDiscoveryMetadataFromNetworkResponse = function(t, e) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        if (o.aliases.indexOf(e) > -1)
          return o;
      }
      return null;
    }, r.prototype.getPreferredCache = function() {
      if (this.discoveryComplete())
        return this.metadata.preferred_cache;
      throw ee.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, r.prototype.isAlias = function(t) {
      return this.metadata.aliases.indexOf(t) > -1;
    }, r.isPublicCloudAuthority = function(t) {
      return P.KNOWN_PUBLIC_CLOUDS.indexOf(t) >= 0;
    }, r.buildRegionalAuthorityString = function(t, e, n) {
      var o = new Ue(t);
      o.validateAsUri();
      var a = o.getUrlComponents(), c = e + "." + a.HostNameAndPort;
      this.isPublicCloudAuthority(a.HostNameAndPort) && (c = e + "." + P.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var l = Ue.constructAuthorityUriFromObject($e($e({}, o.getUrlComponents()), { HostNameAndPort: c })).urlString;
      return n ? l + "?" + n : l;
    }, r.replaceWithRegionalInformation = function(t, e) {
      return t.authorization_endpoint = r.buildRegionalAuthorityString(t.authorization_endpoint, e), t.token_endpoint = r.buildRegionalAuthorityString(t.token_endpoint, e, P.REGIONAL_AUTH_NON_MSI_QUERY_STRING), t.end_session_endpoint && (t.end_session_endpoint = r.buildRegionalAuthorityString(t.end_session_endpoint, e)), t;
    }, r.transformCIAMAuthority = function(t) {
      var e = t.endsWith(P.FORWARD_SLASH) ? t : "" + t + P.FORWARD_SLASH, n = new Ue(t), o = n.getUrlComponents();
      if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(P.CIAM_AUTH_URL)) {
        var a = o.HostNameAndPort.split(".")[0];
        e = "" + e + a + P.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return e;
    }, r.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      oo.COMMON,
      oo.CONSUMERS,
      oo.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var rs = (
  /** @class */
  function() {
    function r() {
    }
    return r.createDiscoveredInstance = function(t, e, n, o, a, c, l) {
      return _e(this, void 0, void 0, function() {
        var u, h, f;
        return Se(this, function(g) {
          switch (g.label) {
            case 0:
              c == null || c.addQueueMeasurement(U.AuthorityFactoryCreateDiscoveredInstance, l), u = Li.transformCIAMAuthority(t), h = r.createInstance(u, e, n, o, a, c, l), g.label = 1;
            case 1:
              return g.trys.push([1, 3, , 4]), c == null || c.setPreQueueTime(U.AuthorityResolveEndpointsAsync, l), [4, h.resolveEndpointsAsync()];
            case 2:
              return g.sent(), [2, h];
            case 3:
              throw f = g.sent(), ee.createEndpointDiscoveryIncompleteError(f);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(t, e, n, o, a, c, l) {
      if (X.isEmpty(t))
        throw et.createUrlEmptyError();
      return new Li(t, e, n, o, a, c, l);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var ns = (
  /** @class */
  function() {
    function r() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return r.isServerTelemetryEntity = function(t, e) {
      var n = t.indexOf(At.CACHE_KEY) === 0, o = !0;
      return e && (o = e.hasOwnProperty("failedRequests") && e.hasOwnProperty("errors") && e.hasOwnProperty("cacheHits")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var kf = (
  /** @class */
  function() {
    function r() {
    }
    return r.isThrottlingEntity = function(t, e) {
      var n = !1;
      t && (n = t.indexOf(Ii.THROTTLING_PREFIX) === 0);
      var o = !0;
      return e && (o = e.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var iT = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(ue.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(ue.createUnexpectedError(r));
  }
};
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Ha = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, Pf = (
  /** @class */
  function(r) {
    nr(t, r);
    function t(e, n) {
      var o = r.call(this, e, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, t.prototype), o;
    }
    return t.createMissingKidError = function() {
      return new t(Ha.missingKidError.code, Ha.missingKidError.desc);
    }, t.createMissingAlgError = function() {
      return new t(Ha.missingAlgError.code, Ha.missingAlgError.desc);
    }, t;
  }(ue)
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var aT = (
  /** @class */
  function() {
    function r(t) {
      this.typ = t.typ, this.alg = t.alg, this.kid = t.kid;
    }
    return r.getShrHeaderString = function(t) {
      if (!t.kid)
        throw Pf.createMissingKidError();
      if (!t.alg)
        throw Pf.createMissingAlgError();
      var e = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: t.typ || yl.Pop,
        kid: t.kid,
        alg: t.alg
      });
      return JSON.stringify(e);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var sT = (
  /** @class */
  function() {
    function r(t, e) {
      this.cacheOutcome = Dn.NO_CACHE_HIT, this.cacheManager = e, this.apiId = t.apiId, this.correlationId = t.correlationId, this.wrapperSKU = t.wrapperSKU || P.EMPTY_STRING, this.wrapperVer = t.wrapperVer || P.EMPTY_STRING, this.telemetryCacheKey = At.CACHE_KEY + wt.CACHE_KEY_SEPARATOR + t.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var t = "" + this.apiId + At.VALUE_SEPARATOR + this.cacheOutcome, e = [this.wrapperSKU, this.wrapperVer].join(At.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [t, n].join(At.VALUE_SEPARATOR);
      return [At.SCHEMA_VERSION, o, e].join(At.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var t = this.getLastRequests(), e = r.maxErrorsToSend(t), n = t.failedRequests.slice(0, 2 * e).join(At.VALUE_SEPARATOR), o = t.errors.slice(0, e).join(At.VALUE_SEPARATOR), a = t.errors.length, c = e < a ? At.OVERFLOW_TRUE : At.OVERFLOW_FALSE, l = [a, c].join(At.VALUE_SEPARATOR);
      return [At.SCHEMA_VERSION, t.cacheHits, n, o, l].join(At.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(t) {
      var e = this.getLastRequests();
      e.errors.length >= At.MAX_CACHED_ERRORS && (e.failedRequests.shift(), e.failedRequests.shift(), e.errors.shift()), e.failedRequests.push(this.apiId, this.correlationId), X.isEmpty(t.subError) ? X.isEmpty(t.errorCode) ? t && t.toString() ? e.errors.push(t.toString()) : e.errors.push(At.UNKNOWN_ERROR) : e.errors.push(t.errorCode) : e.errors.push(t.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e);
    }, r.prototype.incrementCacheHits = function() {
      var t = this.getLastRequests();
      return t.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t), t.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var t = new ns(), e = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return e || t;
    }, r.prototype.clearTelemetryCache = function() {
      var t = this.getLastRequests(), e = r.maxErrorsToSend(t), n = t.errors.length;
      if (e === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new ns();
        o.failedRequests = t.failedRequests.slice(e * 2), o.errors = t.errors.slice(e), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(t) {
      var e, n = 0, o = 0, a = t.errors.length;
      for (e = 0; e < a; e++) {
        var c = t.failedRequests[2 * e] || P.EMPTY_STRING, l = t.failedRequests[2 * e + 1] || P.EMPTY_STRING, u = t.errors[e] || P.EMPTY_STRING;
        if (o += c.toString().length + l.toString().length + u.length + 3, o < At.MAX_LAST_HEADER_BYTES)
          n += 1;
        else
          break;
      }
      return n;
    }, r.prototype.getRegionDiscoveryFields = function() {
      var t = [];
      return t.push(this.regionUsed || P.EMPTY_STRING), t.push(this.regionSource || P.EMPTY_STRING), t.push(this.regionOutcome || P.EMPTY_STRING), t.join(",");
    }, r.prototype.updateRegionDiscoveryMetadata = function(t) {
      this.regionUsed = t.region_used, this.regionSource = t.region_source, this.regionOutcome = t.region_outcome;
    }, r.prototype.setCacheOutcome = function(t) {
      this.cacheOutcome = t;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var kp = (
  /** @class */
  function() {
    function r(t, e, n, o, a, c) {
      this.authority = e, this.libraryName = o, this.libraryVersion = a, this.applicationTelemetry = c, this.clientId = t, this.logger = n, this.callbacks = /* @__PURE__ */ new Map(), this.eventsByCorrelationId = /* @__PURE__ */ new Map(), this.queueMeasurements = /* @__PURE__ */ new Map(), this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    }
    return r.prototype.startPerformanceMeasurement = function(t, e) {
      return {};
    }, r.prototype.startPerformanceMeasuremeant = function(t, e) {
      return {};
    }, r.prototype.getIntFields = function() {
      return XS;
    }, r.prototype.getPreQueueTime = function(t, e) {
      var n = this.preQueueTimeByCorrelationId.get(e);
      if (n) {
        if (n.name !== t) {
          this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue time found for " + t + ", unable to add queue measurement");
          return;
        }
      } else {
        this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue times found for correlationId: " + e + ", unable to add queue measurement");
        return;
      }
      return n.time;
    }, r.prototype.calculateQueuedTime = function(t, e) {
      return t < 1 ? (this.logger.trace("PerformanceClient: preQueueTime should be a positive integer and not " + t), 0) : e < 1 ? (this.logger.trace("PerformanceClient: currentTime should be a positive integer and not " + e), 0) : e < t ? (this.logger.trace("PerformanceClient: currentTime is less than preQueueTime, check how time is being retrieved"), 0) : e - t;
    }, r.prototype.addQueueMeasurement = function(t, e, n, o) {
      if (!e) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: correlationId not provided for " + t + ", cannot add queue measurement");
        return;
      }
      if (n === 0)
        this.logger.trace("PerformanceClient.addQueueMeasurement: queue time provided for " + t + " is " + n);
      else if (!n) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: no queue time provided for " + t);
        return;
      }
      var a = { eventName: t, queueTime: n, manuallyCompleted: o }, c = this.queueMeasurements.get(e);
      if (c)
        c.push(a), this.queueMeasurements.set(e, c);
      else {
        this.logger.trace("PerformanceClient.addQueueMeasurement: adding correlationId " + e + " to queue measurements");
        var l = [a];
        this.queueMeasurements.set(e, l);
      }
      this.preQueueTimeByCorrelationId.delete(e);
    }, r.prototype.startMeasurement = function(t, e) {
      var n = this, o, a, c = e || this.generateId();
      e || this.logger.info("PerformanceClient: No correlation id provided for " + t + ", generating", c), this.logger.trace("PerformanceClient: Performance measurement started for " + t, c);
      var l = this.startPerformanceMeasuremeant(t, c);
      l.startMeasurement();
      var u = {
        eventId: this.generateId(),
        status: es.InProgress,
        authority: this.authority,
        libraryName: this.libraryName,
        libraryVersion: this.libraryVersion,
        clientId: this.clientId,
        name: t,
        startTimeMs: Date.now(),
        correlationId: c,
        appName: (o = this.applicationTelemetry) === null || o === void 0 ? void 0 : o.appName,
        appVersion: (a = this.applicationTelemetry) === null || a === void 0 ? void 0 : a.appVersion
      };
      return this.cacheEventByCorrelationId(u), {
        endMeasurement: function(h) {
          return n.endMeasurement($e($e({}, u), h), l);
        },
        discardMeasurement: function() {
          return n.discardMeasurements(u.correlationId);
        },
        addStaticFields: function(h) {
          return n.addStaticFields(h, u.correlationId);
        },
        increment: function(h) {
          return n.increment(h, u.correlationId);
        },
        measurement: l,
        event: u
      };
    }, r.prototype.endMeasurement = function(t, e) {
      var n = this, o, a, c = this.eventsByCorrelationId.get(t.correlationId);
      if (!c)
        return this.logger.trace("PerformanceClient: Measurement not found for " + t.eventId, t.correlationId), null;
      var l = t.eventId === c.eventId, u = {
        totalQueueTime: 0,
        totalQueueCount: 0,
        manuallyCompletedCount: 0
      };
      l ? (u = this.getQueueInfo(t.correlationId), this.discardCache(c.correlationId)) : (o = c.incompleteSubMeasurements) === null || o === void 0 || o.delete(t.eventId), e == null || e.endMeasurement();
      var h = e == null ? void 0 : e.flushMeasurement();
      if (!h)
        return this.logger.trace("PerformanceClient: Performance measurement not taken", c.correlationId), null;
      if (this.logger.trace("PerformanceClient: Performance measurement ended for " + t.name + ": " + h + " ms", t.correlationId), !l)
        return c[t.name + "DurationMs"] = Math.floor(h), $e({}, c);
      var f = $e($e({}, c), t), g = 0;
      return (a = f.incompleteSubMeasurements) === null || a === void 0 || a.forEach(function(m) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + m.name + " found for " + t.name, f.correlationId), g++;
      }), f.incompleteSubMeasurements = void 0, f = $e($e({}, f), { durationMs: Math.round(h), queuedTimeMs: u.totalQueueTime, queuedCount: u.totalQueueCount, queuedManuallyCompletedCount: u.manuallyCompletedCount, status: es.Completed, incompleteSubsCount: g }), this.truncateIntegralFields(f, this.getIntFields()), this.emitEvents([f], t.correlationId), f;
    }, r.prototype.addStaticFields = function(t, e) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var n = this.eventsByCorrelationId.get(e);
      n ? this.eventsByCorrelationId.set(e, $e($e({}, n), t)) : this.logger.trace("PerformanceClient: Event not found for", e);
    }, r.prototype.increment = function(t, e) {
      this.logger.trace("PerformanceClient: Updating counters");
      var n = this.eventsByCorrelationId.get(e);
      if (n)
        for (var o in t)
          n.hasOwnProperty(o) || (n[o] = 0), n[o] += t[o];
      else
        this.logger.trace("PerformanceClient: Event not found for", e);
    }, r.prototype.cacheEventByCorrelationId = function(t) {
      var e = this.eventsByCorrelationId.get(t.correlationId);
      e ? (this.logger.trace("PerformanceClient: Performance measurement for " + t.name + " added/updated", t.correlationId), e.incompleteSubMeasurements = e.incompleteSubMeasurements || /* @__PURE__ */ new Map(), e.incompleteSubMeasurements.set(t.eventId, { name: t.name, startTimeMs: t.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + t.name + " started", t.correlationId), this.eventsByCorrelationId.set(t.correlationId, $e({}, t)));
    }, r.prototype.getQueueInfo = function(t) {
      var e = this.queueMeasurements.get(t);
      e || this.logger.trace("PerformanceClient: no queue measurements found for for correlationId: " + t);
      var n = 0, o = 0, a = 0;
      return e == null || e.forEach(function(c) {
        n += c.queueTime, o++, a += c.manuallyCompleted ? 1 : 0;
      }), {
        totalQueueTime: n,
        totalQueueCount: o,
        manuallyCompletedCount: a
      };
    }, r.prototype.discardMeasurements = function(t) {
      this.logger.trace("PerformanceClient: Performance measurements discarded", t), this.eventsByCorrelationId.delete(t);
    }, r.prototype.discardCache = function(t) {
      this.discardMeasurements(t), this.logger.trace("PerformanceClient: QueueMeasurements discarded", t), this.queueMeasurements.delete(t), this.logger.trace("PerformanceClient: Pre-queue times discarded", t), this.preQueueTimeByCorrelationId.delete(t);
    }, r.prototype.addPerformanceCallback = function(t) {
      var e = this.generateId();
      return this.callbacks.set(e, t), this.logger.verbose("PerformanceClient: Performance callback registered with id: " + e), e;
    }, r.prototype.removePerformanceCallback = function(t) {
      var e = this.callbacks.delete(t);
      return e ? this.logger.verbose("PerformanceClient: Performance callback " + t + " removed.") : this.logger.verbose("PerformanceClient: Performance callback " + t + " not removed."), e;
    }, r.prototype.emitEvents = function(t, e) {
      var n = this;
      this.logger.verbose("PerformanceClient: Emitting performance events", e), this.callbacks.forEach(function(o, a) {
        n.logger.trace("PerformanceClient: Emitting event to callback " + a, e), o.apply(null, [t]);
      });
    }, r.prototype.truncateIntegralFields = function(t, e) {
      e.forEach(function(n) {
        n in t && typeof t[n] == "number" && (t[n] = Math.floor(t[n]));
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.1 2023-10-27 */
var Nf = (
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
), cT = (
  /** @class */
  function(r) {
    nr(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.generateId = function() {
      return "callback-id";
    }, t.prototype.startPerformanceMeasuremeant = function() {
      return new Nf();
    }, t.prototype.startPerformanceMeasurement = function() {
      return new Nf();
    }, t.prototype.calculateQueuedTime = function(e, n) {
      return 0;
    }, t.prototype.addQueueMeasurement = function(e, n, o) {
    }, t.prototype.setPreQueueTime = function(e, n) {
    }, t;
  }(kp)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var V = {
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
}, Q = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n) {
      var o = r.call(this, e, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o.name = "BrowserAuthError", o;
    }
    return t.createPkceNotGeneratedError = function(e) {
      return new t(V.pkceNotGenerated.code, V.pkceNotGenerated.desc + " Detail:" + e);
    }, t.createCryptoNotAvailableError = function(e) {
      return new t(V.cryptoDoesNotExist.code, V.cryptoDoesNotExist.desc + " Detail:" + e);
    }, t.createHttpMethodNotImplementedError = function(e) {
      return new t(V.httpMethodNotImplementedError.code, V.httpMethodNotImplementedError.desc + " Given Method: " + e);
    }, t.createEmptyNavigationUriError = function() {
      return new t(V.emptyNavigateUriError.code, V.emptyNavigateUriError.desc);
    }, t.createEmptyHashError = function(e) {
      return new t(V.hashEmptyError.code, V.hashEmptyError.desc + " Given Url: " + e);
    }, t.createHashDoesNotContainStateError = function() {
      return new t(V.hashDoesNotContainStateError.code, V.hashDoesNotContainStateError.desc);
    }, t.createHashDoesNotContainKnownPropertiesError = function() {
      return new t(V.hashDoesNotContainKnownPropertiesError.code, V.hashDoesNotContainKnownPropertiesError.desc);
    }, t.createUnableToParseStateError = function() {
      return new t(V.unableToParseStateError.code, V.unableToParseStateError.desc);
    }, t.createStateInteractionTypeMismatchError = function() {
      return new t(V.stateInteractionTypeMismatchError.code, V.stateInteractionTypeMismatchError.desc);
    }, t.createInteractionInProgressError = function() {
      return new t(V.interactionInProgress.code, V.interactionInProgress.desc);
    }, t.createPopupWindowError = function(e) {
      var n = V.popupWindowError.desc;
      return n = X.isEmpty(e) ? n : n + " Details: " + e, new t(V.popupWindowError.code, n);
    }, t.createEmptyWindowCreatedError = function() {
      return new t(V.emptyWindowError.code, V.emptyWindowError.desc);
    }, t.createUserCancelledError = function() {
      return new t(V.userCancelledError.code, V.userCancelledError.desc);
    }, t.createMonitorPopupTimeoutError = function() {
      return new t(V.monitorPopupTimeoutError.code, V.monitorPopupTimeoutError.desc);
    }, t.createMonitorIframeTimeoutError = function() {
      return new t(V.monitorIframeTimeoutError.code, V.monitorIframeTimeoutError.desc);
    }, t.createRedirectInIframeError = function(e) {
      return new t(V.redirectInIframeError.code, V.redirectInIframeError.desc + " (window.parent !== window) => " + e);
    }, t.createBlockReloadInHiddenIframeError = function() {
      return new t(V.blockTokenRequestsInHiddenIframeError.code, V.blockTokenRequestsInHiddenIframeError.desc);
    }, t.createBlockAcquireTokenInPopupsError = function() {
      return new t(V.blockAcquireTokenInPopupsError.code, V.blockAcquireTokenInPopupsError.desc);
    }, t.createIframeClosedPrematurelyError = function() {
      return new t(V.iframeClosedPrematurelyError.code, V.iframeClosedPrematurelyError.desc);
    }, t.createSilentLogoutUnsupportedError = function() {
      return new t(V.silentLogoutUnsupportedError.code, V.silentLogoutUnsupportedError.desc);
    }, t.createNoAccountError = function() {
      return new t(V.noAccountError.code, V.noAccountError.desc);
    }, t.createSilentPromptValueError = function(e) {
      return new t(V.silentPromptValueError.code, V.silentPromptValueError.desc + " Given value: " + e);
    }, t.createUnableToParseTokenRequestCacheError = function() {
      return new t(V.unableToParseTokenRequestCacheError.code, V.unableToParseTokenRequestCacheError.desc);
    }, t.createNoTokenRequestCacheError = function() {
      return new t(V.noTokenRequestCacheError.code, V.noTokenRequestCacheError.desc);
    }, t.createAuthRequestNotSetError = function() {
      return new t(V.authRequestNotSet.code, V.authRequestNotSet.desc);
    }, t.createNoCachedAuthorityError = function() {
      return new t(V.noCachedAuthorityError.code, V.noCachedAuthorityError.desc);
    }, t.createInvalidCacheTypeError = function() {
      return new t(V.invalidCacheType.code, "" + V.invalidCacheType.desc);
    }, t.createNonBrowserEnvironmentError = function() {
      return new t(V.notInBrowserEnvironment.code, V.notInBrowserEnvironment.desc);
    }, t.createDatabaseNotOpenError = function() {
      return new t(V.databaseNotOpen.code, V.databaseNotOpen.desc);
    }, t.createNoNetworkConnectivityError = function() {
      return new t(V.noNetworkConnectivity.code, V.noNetworkConnectivity.desc);
    }, t.createPostRequestFailedError = function(e, n) {
      return new t(V.postRequestFailed.code, V.postRequestFailed.desc + " | Network client threw: " + e + " | Attempted to reach: " + n.split("?")[0]);
    }, t.createGetRequestFailedError = function(e, n) {
      return new t(V.getRequestFailed.code, V.getRequestFailed.desc + " | Network client threw: " + e + " | Attempted to reach: " + n.split("?")[0]);
    }, t.createFailedToParseNetworkResponseError = function(e) {
      return new t(V.failedToParseNetworkResponse.code, V.failedToParseNetworkResponse.desc + " | Attempted to reach: " + e.split("?")[0]);
    }, t.createUnableToLoadTokenError = function(e) {
      return new t(V.unableToLoadTokenError.code, V.unableToLoadTokenError.desc + " | " + e);
    }, t.createSigningKeyNotFoundInStorageError = function(e) {
      return new t(V.signingKeyNotFoundInStorage.code, V.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + e);
    }, t.createAuthCodeRequiredError = function() {
      return new t(V.authCodeRequired.code, V.authCodeRequired.desc);
    }, t.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new t(V.authCodeOrNativeAccountRequired.code, V.authCodeOrNativeAccountRequired.desc);
    }, t.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new t(V.spaCodeAndNativeAccountPresent.code, V.spaCodeAndNativeAccountPresent.desc);
    }, t.createDatabaseUnavailableError = function() {
      return new t(V.databaseUnavailable.code, V.databaseUnavailable.desc);
    }, t.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new t(V.unableToAcquireTokenFromNativePlatform.code, V.unableToAcquireTokenFromNativePlatform.desc);
    }, t.createNativeHandshakeTimeoutError = function() {
      return new t(V.nativeHandshakeTimeout.code, V.nativeHandshakeTimeout.desc);
    }, t.createNativeExtensionNotInstalledError = function() {
      return new t(V.nativeExtensionNotInstalled.code, V.nativeExtensionNotInstalled.desc);
    }, t.createNativeConnectionNotEstablishedError = function() {
      return new t(V.nativeConnectionNotEstablished.code, V.nativeConnectionNotEstablished.desc);
    }, t.createNativeBrokerCalledBeforeInitialize = function() {
      return new t(V.nativeBrokerCalledBeforeInitialize.code, V.nativeBrokerCalledBeforeInitialize.desc);
    }, t.createNativePromptParameterNotSupportedError = function() {
      return new t(V.nativePromptNotSupported.code, V.nativePromptNotSupported.desc);
    }, t;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Fr = {
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
}, bi = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, vn;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(vn || (vn = {}));
var gt;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(gt || (gt = {}));
var Qr;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(Qr || (Qr = {}));
var Be;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(Be || (Be = {}));
var jr;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(jr || (jr = {}));
var Ho;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Ho || (Ho = {}));
var Ze;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(Ze || (Ze = {}));
var re;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(re || (re = {}));
var pt;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(pt || (pt = {}));
var Of = {
  scopes: Fi
}, qo = "jwk", bl;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(bl || (bl = {}));
var _l = "msal.db", lT = 1, uT = _l + ".keys", rr;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
})(rr || (rr = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Zt = {
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
}, Et = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n) {
      var o = r.call(this, e, n) || this;
      return o.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(o, t.prototype), o;
    }
    return t.createRedirectUriEmptyError = function() {
      return new t(Zt.redirectUriNotSet.code, Zt.redirectUriNotSet.desc);
    }, t.createPostLogoutRedirectUriEmptyError = function() {
      return new t(Zt.postLogoutUriNotSet.code, Zt.postLogoutUriNotSet.desc);
    }, t.createStorageNotSupportedError = function(e) {
      return new t(Zt.storageNotSupportedError.code, Zt.storageNotSupportedError.desc + " Given Location: " + e);
    }, t.createRedirectCallbacksNotSetError = function() {
      return new t(Zt.noRedirectCallbacksSet.code, Zt.noRedirectCallbacksSet.desc);
    }, t.createStubPcaInstanceCalledError = function() {
      return new t(Zt.stubPcaInstanceCalled.code, Zt.stubPcaInstanceCalled.desc);
    }, t.createInMemoryRedirectUnavailableError = function() {
      return new t(Zt.inMemRedirectUnavailable.code, Zt.inMemRedirectUnavailable.desc);
    }, t.createEntropyNotProvided = function() {
      return new t(Zt.entropyNotProvided.code, Zt.entropyNotProvided.desc);
    }, t;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Mf = (
  /** @class */
  function() {
    function r(t) {
      this.validateWindowStorage(t), this.windowStorage = window[t];
    }
    return r.prototype.validateWindowStorage = function(t) {
      if (t !== gt.LocalStorage && t !== gt.SessionStorage)
        throw Et.createStorageNotSupportedError(t);
      var e = !!window[t];
      if (!e)
        throw Et.createStorageNotSupportedError(t);
    }, r.prototype.getItem = function(t) {
      return this.windowStorage.getItem(t);
    }, r.prototype.setItem = function(t, e) {
      this.windowStorage.setItem(t, e);
    }, r.prototype.removeItem = function(t) {
      this.windowStorage.removeItem(t);
    }, r.prototype.getKeys = function() {
      return Object.keys(this.windowStorage);
    }, r.prototype.containsKey = function(t) {
      return this.windowStorage.hasOwnProperty(t);
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Sl = (
  /** @class */
  function() {
    function r() {
      this.cache = /* @__PURE__ */ new Map();
    }
    return r.prototype.getItem = function(t) {
      return this.cache.get(t) || null;
    }, r.prototype.setItem = function(t, e) {
      this.cache.set(t, e);
    }, r.prototype.removeItem = function(t) {
      this.cache.delete(t);
    }, r.prototype.getKeys = function() {
      var t = [];
      return this.cache.forEach(function(e, n) {
        t.push(n);
      }), t;
    }, r.prototype.containsKey = function(t) {
      return this.cache.has(t);
    }, r.prototype.clear = function() {
      this.cache.clear();
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Pp = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(t, e) {
      if (X.isEmpty(e))
        return null;
      try {
        var n = yn.parseRequestState(t, e);
        return n.libraryState.meta;
      } catch (o) {
        throw ee.createInvalidStateError(e, o);
      }
    }, r.parseServerResponseFromHash = function(t) {
      if (!t)
        return {};
      var e = new Ue(t);
      return Ue.getDeserializedHash(e.getHash());
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Tl = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a) {
      var c = r.call(this, e, o, a) || this;
      return c.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, c.cacheConfig = n, c.logger = a, c.internalStorage = new Sl(), c.browserStorage = c.setupBrowserStorage(c.cacheConfig.cacheLocation), c.temporaryCacheStorage = c.setupTemporaryCacheStorage(c.cacheConfig.temporaryCacheLocation, c.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (c.migrateCacheEntries(), c.createKeyMaps()), c;
    }
    return t.prototype.setupBrowserStorage = function(e) {
      switch (e) {
        case gt.LocalStorage:
        case gt.SessionStorage:
          try {
            return new Mf(e);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = gt.MemoryStorage, new Sl();
    }, t.prototype.setupTemporaryCacheStorage = function(e, n) {
      switch (n) {
        case gt.LocalStorage:
        case gt.SessionStorage:
          try {
            return new Mf(e || gt.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case gt.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, t.prototype.migrateCacheEntries = function() {
      var e = this, n = P.CACHE_PREFIX + "." + Ct.ID_TOKEN, o = P.CACHE_PREFIX + "." + Ct.CLIENT_INFO, a = P.CACHE_PREFIX + "." + Ct.ERROR, c = P.CACHE_PREFIX + "." + Ct.ERROR_DESC, l = this.browserStorage.getItem(n), u = this.browserStorage.getItem(o), h = this.browserStorage.getItem(a), f = this.browserStorage.getItem(c), g = [l, u, h, f], m = [Ct.ID_TOKEN, Ct.CLIENT_INFO, Ct.ERROR, Ct.ERROR_DESC];
      m.forEach(function(v, C) {
        return e.migrateCacheEntry(v, g[C]);
      });
    }, t.prototype.migrateCacheEntry = function(e, n) {
      n && this.setTemporaryCache(e, n, !0);
    }, t.prototype.createKeyMaps = function() {
      var e = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var n = this.getItem(jr.ACCOUNT_KEYS), o = this.getItem(jr.TOKEN_KEYS + "." + this.clientId);
      if (n && o) {
        this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
        return;
      }
      var a = this.browserStorage.getKeys();
      a.forEach(function(c) {
        if (e.isCredentialKey(c)) {
          var l = e.getItem(c);
          if (l) {
            var u = e.validateAndParseJson(l);
            if (u && u.hasOwnProperty("credentialType"))
              switch (u.credentialType) {
                case fe.ID_TOKEN:
                  if (ro.isIdTokenEntity(u)) {
                    e.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), e.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + c + " found, saving key to token key map");
                    var h = er.toObject(new ro(), u), f = e.updateCredentialCacheKey(c, h);
                    e.addTokenKey(f, fe.ID_TOKEN);
                    return;
                  } else
                    e.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), e.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + c);
                  break;
                case fe.ACCESS_TOKEN:
                case fe.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (no.isAccessTokenEntity(u)) {
                    e.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), e.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + c + " found, saving key to token key map");
                    var g = er.toObject(new no(), u), f = e.updateCredentialCacheKey(c, g);
                    e.addTokenKey(f, fe.ACCESS_TOKEN);
                    return;
                  } else
                    e.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), e.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + c);
                  break;
                case fe.REFRESH_TOKEN:
                  if (Do.isRefreshTokenEntity(u)) {
                    e.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), e.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + c + " found, saving key to token key map");
                    var m = er.toObject(new Do(), u), f = e.updateCredentialCacheKey(c, m);
                    e.addTokenKey(f, fe.REFRESH_TOKEN);
                    return;
                  } else
                    e.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."), e.logger.tracePii("BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: " + c);
                  break;
              }
          }
        }
        if (e.isAccountKey(c)) {
          var l = e.getItem(c);
          if (l) {
            var v = e.validateAndParseJson(l);
            v && Rt.isAccountEntity(v) && (e.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), e.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + c + " found, saving key to account key map"), e.addAccountKeyToMap(c));
          }
        }
      });
    }, t.prototype.validateAndParseJson = function(e) {
      try {
        var n = JSON.parse(e);
        return n && typeof n == "object" ? n : null;
      } catch {
        return null;
      }
    }, t.prototype.getItem = function(e) {
      return this.browserStorage.getItem(e);
    }, t.prototype.setItem = function(e, n) {
      this.browserStorage.setItem(e, n);
    }, t.prototype.getAccount = function(e) {
      this.logger.trace("BrowserCacheManager.getAccount called");
      var n = this.getItem(e);
      if (!n)
        return this.removeAccountKeyFromMap(e), null;
      var o = this.validateAndParseJson(n);
      return !o || !Rt.isAccountEntity(o) ? (this.removeAccountKeyFromMap(e), null) : er.toObject(new Rt(), o);
    }, t.prototype.setAccount = function(e) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var n = e.generateAccountKey();
      this.setItem(n, JSON.stringify(e)), this.addAccountKeyToMap(n);
    }, t.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var e = this.getItem(jr.ACCOUNT_KEYS);
      return e ? JSON.parse(e) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, t.prototype.addAccountKeyToMap = function(e) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + e);
      var n = this.getAccountKeys();
      n.indexOf(e) === -1 ? (n.push(e), this.setItem(jr.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, t.prototype.removeAccountKeyFromMap = function(e) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + e);
      var n = this.getAccountKeys(), o = n.indexOf(e);
      o > -1 ? (n.splice(o, 1), this.setItem(jr.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }, t.prototype.removeAccount = function(e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return r.prototype.removeAccount.call(this, e), this.removeAccountKeyFromMap(e), [
            2
            /*return*/
          ];
        });
      });
    }, t.prototype.removeIdToken = function(e) {
      r.prototype.removeIdToken.call(this, e), this.removeTokenKey(e, fe.ID_TOKEN);
    }, t.prototype.removeAccessToken = function(e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return r.prototype.removeAccessToken.call(this, e), this.removeTokenKey(e, fe.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, t.prototype.removeRefreshToken = function(e) {
      r.prototype.removeRefreshToken.call(this, e), this.removeTokenKey(e, fe.REFRESH_TOKEN);
    }, t.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var e = this.getItem(jr.TOKEN_KEYS + "." + this.clientId);
      if (e) {
        var n = this.validateAndParseJson(e);
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
    }, t.prototype.addTokenKey = function(e, n) {
      this.logger.trace("BrowserCacheManager addTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case fe.ID_TOKEN:
          o.idToken.indexOf(e) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(e));
          break;
        case fe.ACCESS_TOKEN:
          o.accessToken.indexOf(e) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(e));
          break;
        case fe.REFRESH_TOKEN:
          o.refreshToken.indexOf(e) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(e));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), ee.createUnexpectedCredentialTypeError();
      }
      this.setItem(jr.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, t.prototype.removeTokenKey = function(e, n) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case fe.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + e + " from map");
          var a = o.idToken.indexOf(e);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case fe.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + e + " from map");
          var c = o.accessToken.indexOf(e);
          c > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(c, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case fe.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + e + " from map");
          var l = o.refreshToken.indexOf(e);
          l > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(l, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), ee.createUnexpectedCredentialTypeError();
      }
      this.setItem(jr.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, t.prototype.getIdTokenCredential = function(e) {
      var n = this.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(e, fe.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !ro.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(e, fe.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), er.toObject(new ro(), o));
    }, t.prototype.setIdTokenCredential = function(e) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = e.generateCredentialKey();
      this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, fe.ID_TOKEN);
    }, t.prototype.getAccessTokenCredential = function(e) {
      var n = this.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(e, fe.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !no.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(e, fe.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), er.toObject(new no(), o));
    }, t.prototype.setAccessTokenCredential = function(e) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = e.generateCredentialKey();
      this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, fe.ACCESS_TOKEN);
    }, t.prototype.getRefreshTokenCredential = function(e) {
      var n = this.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(e, fe.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Do.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(e, fe.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), er.toObject(new Do(), o));
    }, t.prototype.setRefreshTokenCredential = function(e) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = e.generateCredentialKey();
      this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, fe.REFRESH_TOKEN);
    }, t.prototype.getAppMetadata = function(e) {
      var n = this.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !El.isAppMetadataEntity(e, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), er.toObject(new El(), o));
    }, t.prototype.setAppMetadata = function(e) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = e.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(e));
    }, t.prototype.getServerTelemetry = function(e) {
      var n = this.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !ns.isServerTelemetryEntity(e, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), er.toObject(new ns(), o));
    }, t.prototype.setServerTelemetry = function(e, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(e, JSON.stringify(n));
    }, t.prototype.getAuthorityMetadata = function(e) {
      var n = this.internalStorage.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && wl.isAuthorityMetadataEntity(e, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), er.toObject(new wl(), o)) : null;
    }, t.prototype.getAuthorityMetadataKeys = function() {
      var e = this, n = this.internalStorage.getKeys();
      return n.filter(function(o) {
        return e.isAuthorityMetadata(o);
      });
    }, t.prototype.setWrapperMetadata = function(e, n) {
      this.internalStorage.setItem(Ho.WRAPPER_SKU, e), this.internalStorage.setItem(Ho.WRAPPER_VER, n);
    }, t.prototype.getWrapperMetadata = function() {
      var e = this.internalStorage.getItem(Ho.WRAPPER_SKU) || P.EMPTY_STRING, n = this.internalStorage.getItem(Ho.WRAPPER_VER) || P.EMPTY_STRING;
      return [e, n];
    }, t.prototype.setAuthorityMetadata = function(e, n) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(e, JSON.stringify(n));
    }, t.prototype.getActiveAccount = function() {
      var e = this.generateCacheKey(Ct.ACTIVE_ACCOUNT_FILTERS), n = this.getItem(e);
      if (!n) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var o = this.generateCacheKey(Ct.ACTIVE_ACCOUNT), a = this.getItem(o);
        if (!a)
          return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
        var c = this.getAccountInfoByFilter({ localAccountId: a })[0] || null;
        return c ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(c), c) : null;
      }
      var l = this.validateAndParseJson(n);
      return l ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoByFilter({
        homeAccountId: l.homeAccountId,
        localAccountId: l.localAccountId
      })[0] || null) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null);
    }, t.prototype.setActiveAccount = function(e) {
      var n = this.generateCacheKey(Ct.ACTIVE_ACCOUNT_FILTERS), o = this.generateCacheKey(Ct.ACTIVE_ACCOUNT);
      if (e) {
        this.logger.verbose("setActiveAccount: Active account set");
        var a = {
          homeAccountId: e.homeAccountId,
          localAccountId: e.localAccountId
        };
        this.browserStorage.setItem(n, JSON.stringify(a)), this.browserStorage.setItem(o, e.localAccountId);
      } else
        this.logger.verbose("setActiveAccount: No account passed, active account not set"), this.browserStorage.removeItem(n), this.browserStorage.removeItem(o);
    }, t.prototype.getAccountInfoByFilter = function(e) {
      var n = this.getAllAccounts();
      return this.logger.trace("BrowserCacheManager.getAccountInfoByFilter: total " + n.length + " accounts found"), n.filter(function(o) {
        return !(e.username && e.username.toLowerCase() !== o.username.toLowerCase() || e.homeAccountId && e.homeAccountId !== o.homeAccountId || e.localAccountId && e.localAccountId !== o.localAccountId || e.tenantId && e.tenantId !== o.tenantId || e.environment && e.environment !== o.environment);
      });
    }, t.prototype.getAccountInfoByHints = function(e, n) {
      var o = this.getAllAccounts().filter(function(a) {
        if (n) {
          var c = a.idTokenClaims && a.idTokenClaims.sid;
          return n === c;
        }
        return e ? e === a.username : !1;
      });
      if (o.length === 1)
        return o[0];
      if (o.length > 1)
        throw ee.createMultipleMatchingAccountsInCacheError();
      return null;
    }, t.prototype.getThrottlingCache = function(e) {
      var n = this.getItem(e);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !kf.isThrottlingEntity(e, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), er.toObject(new kf(), o));
    }, t.prototype.setThrottlingCache = function(e, n) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(e, JSON.stringify(n));
    }, t.prototype.getTemporaryCache = function(e, n) {
      var o = n ? this.generateCacheKey(e) : e;
      if (this.cacheConfig.storeAuthStateInCookie) {
        var a = this.getItemCookie(o);
        if (a)
          return this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"), a;
      }
      var c = this.temporaryCacheStorage.getItem(o);
      if (!c) {
        if (this.cacheConfig.cacheLocation === gt.LocalStorage) {
          var l = this.browserStorage.getItem(o);
          if (l)
            return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"), l;
        }
        return this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null;
      }
      return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), c;
    }, t.prototype.setTemporaryCache = function(e, n, o) {
      var a = o ? this.generateCacheKey(e) : e;
      this.temporaryCacheStorage.setItem(a, n), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.setItemCookie(a, n));
    }, t.prototype.removeItem = function(e) {
      this.browserStorage.removeItem(e), this.temporaryCacheStorage.removeItem(e), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.clearItemCookie(e));
    }, t.prototype.containsKey = function(e) {
      return this.browserStorage.containsKey(e) || this.temporaryCacheStorage.containsKey(e);
    }, t.prototype.getKeys = function() {
      return Hl(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, t.prototype.clear = function() {
      return q(this, void 0, void 0, function() {
        var e = this;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              return n.sent(), this.removeAppMetadata(), this.getKeys().forEach(function(o) {
                (e.browserStorage.containsKey(o) || e.temporaryCacheStorage.containsKey(o)) && (o.indexOf(P.CACHE_PREFIX) !== -1 || o.indexOf(e.clientId) !== -1) && e.removeItem(o);
              }), this.internalStorage.clear(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.clearTokensAndKeysWithClaims = function() {
      return q(this, void 0, void 0, function() {
        var e, n, o = this;
        return $(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.trace("BrowserCacheManager.clearTokensAndKeysWithClaims called"), e = this.getTokenKeys(), n = [], e.accessToken.forEach(function(c) {
                var l = o.getAccessTokenCredential(c);
                l != null && l.requestedClaimsHash && c.includes(l.requestedClaimsHash.toLowerCase()) && n.push(o.removeAccessToken(c));
              }), [4, Promise.all(n)];
            case 1:
              return a.sent(), n.length > 0 && this.logger.warning(n.length + " access tokens with claims in the cache keys have been removed from the cache."), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.setItemCookie = function(e, n, o) {
      var a = encodeURIComponent(e) + "=" + encodeURIComponent(n) + ";path=/;SameSite=Lax;";
      if (o) {
        var c = this.getCookieExpirationTime(o);
        a += "expires=" + c + ";";
      }
      this.cacheConfig.secureCookies && (a += "Secure;"), document.cookie = a;
    }, t.prototype.getItemCookie = function(e) {
      for (var n = encodeURIComponent(e) + "=", o = document.cookie.split(";"), a = 0; a < o.length; a++) {
        for (var c = o[a]; c.charAt(0) === " "; )
          c = c.substring(1);
        if (c.indexOf(n) === 0)
          return decodeURIComponent(c.substring(n.length, c.length));
      }
      return P.EMPTY_STRING;
    }, t.prototype.clearMsalCookies = function() {
      var e = this, n = P.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(a) {
        for (; a.charAt(0) === " "; )
          a = a.substring(1);
        if (a.indexOf(n) === 0) {
          var c = a.split("=")[0];
          e.clearItemCookie(c);
        }
      });
    }, t.prototype.clearItemCookie = function(e) {
      this.setItemCookie(e, P.EMPTY_STRING, -1);
    }, t.prototype.getCookieExpirationTime = function(e) {
      var n = /* @__PURE__ */ new Date(), o = new Date(n.getTime() + e * this.COOKIE_LIFE_MULTIPLIER);
      return o.toUTCString();
    }, t.prototype.getCache = function() {
      return this.browserStorage;
    }, t.prototype.setCache = function() {
    }, t.prototype.generateCacheKey = function(e) {
      var n = this.validateAndParseJson(e);
      return n ? JSON.stringify(e) : X.startsWith(e, P.CACHE_PREFIX) || X.startsWith(e, Ct.ADAL_ID_TOKEN) ? e : P.CACHE_PREFIX + "." + this.clientId + "." + e;
    }, t.prototype.generateAuthorityKey = function(e) {
      var n = yn.parseRequestState(this.cryptoImpl, e).libraryState.id;
      return this.generateCacheKey(Be.AUTHORITY + "." + n);
    }, t.prototype.generateNonceKey = function(e) {
      var n = yn.parseRequestState(this.cryptoImpl, e).libraryState.id;
      return this.generateCacheKey(Be.NONCE_IDTOKEN + "." + n);
    }, t.prototype.generateStateKey = function(e) {
      var n = yn.parseRequestState(this.cryptoImpl, e).libraryState.id;
      return this.generateCacheKey(Be.REQUEST_STATE + "." + n);
    }, t.prototype.getCachedAuthority = function(e) {
      var n = this.generateStateKey(e), o = this.getTemporaryCache(n);
      if (!o)
        return null;
      var a = this.generateAuthorityKey(o);
      return this.getTemporaryCache(a);
    }, t.prototype.updateCacheEntries = function(e, n, o, a, c) {
      this.logger.trace("BrowserCacheManager.updateCacheEntries called");
      var l = this.generateStateKey(e);
      this.setTemporaryCache(l, e, !1);
      var u = this.generateNonceKey(e);
      this.setTemporaryCache(u, n, !1);
      var h = this.generateAuthorityKey(e);
      if (this.setTemporaryCache(h, o, !1), c) {
        var f = {
          credential: c.homeAccountId,
          type: fr.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(f), !0);
      } else if (!X.isEmpty(a)) {
        var f = {
          credential: a,
          type: fr.UPN
        };
        this.setTemporaryCache(Be.CCS_CREDENTIAL, JSON.stringify(f), !0);
      }
    }, t.prototype.resetRequestCache = function(e) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), X.isEmpty(e) || this.getKeys().forEach(function(o) {
        o.indexOf(e) !== -1 && n.removeItem(o);
      }), e && (this.removeItem(this.generateStateKey(e)), this.removeItem(this.generateNonceKey(e)), this.removeItem(this.generateAuthorityKey(e))), this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(Be.ORIGIN_URI)), this.removeItem(this.generateCacheKey(Be.URL_HASH)), this.removeItem(this.generateCacheKey(Be.CORRELATION_ID)), this.removeItem(this.generateCacheKey(Be.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(Be.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, t.prototype.cleanRequestByState = function(e) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), e) {
        var n = this.generateStateKey(e), o = this.temporaryCacheStorage.getItem(n);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || P.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, t.prototype.cleanRequestByInteractionType = function(e) {
      var n = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(Be.REQUEST_STATE) !== -1) {
          var a = n.temporaryCacheStorage.getItem(o);
          if (a) {
            var c = Pp.extractBrowserRequestState(n.cryptoImpl, a);
            c && c.interactionType === e && (n.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + a), n.resetRequestCache(a));
          }
        }
      }), this.clearMsalCookies(), this.setInteractionInProgress(!1);
    }, t.prototype.cacheCodeRequest = function(e, n) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var o = n.base64Encode(JSON.stringify(e));
      this.setTemporaryCache(Be.REQUEST_PARAMS, o, !0);
    }, t.prototype.getCachedRequest = function(e, n) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var o = this.getTemporaryCache(Be.REQUEST_PARAMS, !0);
      if (!o)
        throw Q.createNoTokenRequestCacheError();
      var a = this.validateAndParseJson(n.base64Decode(o));
      if (!a)
        throw Q.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(Be.REQUEST_PARAMS)), X.isEmpty(a.authority)) {
        var c = this.generateAuthorityKey(e), l = this.getTemporaryCache(c);
        if (!l)
          throw Q.createNoCachedAuthorityError();
        a.authority = l;
      }
      return a;
    }, t.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var e = this.getTemporaryCache(Be.NATIVE_REQUEST, !0);
      if (!e)
        return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null;
      var n = this.validateAndParseJson(e);
      return n || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null);
    }, t.prototype.isInteractionInProgress = function(e) {
      var n = this.getInteractionInProgress();
      return e ? n === this.clientId : !!n;
    }, t.prototype.getInteractionInProgress = function() {
      var e = P.CACHE_PREFIX + "." + Be.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(e, !1);
    }, t.prototype.setInteractionInProgress = function(e) {
      var n = P.CACHE_PREFIX + "." + Be.INTERACTION_STATUS_KEY;
      if (e) {
        if (this.getInteractionInProgress())
          throw Q.createInteractionInProgressError();
        this.setTemporaryCache(n, this.clientId, !1);
      } else
        !e && this.getInteractionInProgress() === this.clientId && this.removeItem(n);
    }, t.prototype.getLegacyLoginHint = function() {
      var e = this.getTemporaryCache(Ct.ADAL_ID_TOKEN);
      e && (this.browserStorage.removeItem(Ct.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
      var n = this.getTemporaryCache(Ct.ID_TOKEN, !0);
      n && (this.removeItem(this.generateCacheKey(Ct.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
      var o = n || e;
      if (o) {
        var a = new en(o, this.cryptoImpl);
        if (a.claims && a.claims.preferred_username)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"), a.claims.preferred_username;
        if (a.claims && a.claims.upn)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"), a.claims.upn;
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
      }
      return null;
    }, t.prototype.updateCredentialCacheKey = function(e, n) {
      var o = n.generateCredentialKey();
      if (e !== o) {
        var a = this.getItem(e);
        if (a)
          return this.removeItem(e), this.setItem(o, a), this.logger.verbose("Updated an outdated " + n.credentialType + " cache key"), o;
        this.logger.error("Attempted to update an outdated " + n.credentialType + " cache key but no item matching the outdated key was found in storage");
      }
      return e;
    }, t.prototype.getRedirectRequestContext = function() {
      return this.getTemporaryCache(Be.REDIRECT_CONTEXT, !0);
    }, t.prototype.setRedirectRequestContext = function(e) {
      this.setTemporaryCache(Be.REDIRECT_CONTEXT, e, !0);
    }, t;
  }(er)
), dT = function(r, t) {
  var e = {
    cacheLocation: gt.MemoryStorage,
    temporaryCacheLocation: gt.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new Tl(r, e, Ja, t);
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Zc = "@azure/msal-browser", Pi = "2.38.3";
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var hT = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n, o, a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return c.trys.push([0, 2, , 3]), [4, fetch(t, {
                method: Qr.GET,
                headers: this.getFetchHeaders(e)
              })];
            case 1:
              return n = c.sent(), [3, 3];
            case 2:
              throw o = c.sent(), window.navigator.onLine ? Q.createGetRequestFailedError(o, t) : Q.createNoNetworkConnectivityError();
            case 3:
              return c.trys.push([3, 5, , 6]), a = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (a.body = c.sent(), a.status = n.status, a)];
            case 5:
              throw c.sent(), Q.createFailedToParseNetworkResponseError(t);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendPostRequestAsync = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c;
        return $(this, function(l) {
          switch (l.label) {
            case 0:
              n = e && e.body || P.EMPTY_STRING, l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), [4, fetch(t, {
                method: Qr.POST,
                headers: this.getFetchHeaders(e),
                body: n
              })];
            case 2:
              return o = l.sent(), [3, 4];
            case 3:
              throw a = l.sent(), window.navigator.onLine ? Q.createPostRequestFailedError(a, t) : Q.createNoNetworkConnectivityError();
            case 4:
              return l.trys.push([4, 6, , 7]), c = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (c.body = l.sent(), c.status = o.status, c)];
            case 6:
              throw l.sent(), Q.createFailedToParseNetworkResponseError(t);
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getFetchHeaders = function(t) {
      var e = new Headers();
      if (!(t && t.headers))
        return e;
      var n = t.headers;
      return Object.keys(n).forEach(function(o) {
        e.append(o, n[o]);
      }), e;
    }, r.prototype.getHeaderDict = function(t) {
      var e = {};
      return t.forEach(function(n, o) {
        e[o] = n;
      }), e;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var fT = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, this.sendRequestAsync(t, Qr.GET, e)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, this.sendRequestAsync(t, Qr.POST, e)];
        });
      });
    }, r.prototype.sendRequestAsync = function(t, e, n) {
      var o = this;
      return new Promise(function(a, c) {
        var l = new XMLHttpRequest();
        if (l.open(
          e,
          t,
          /* async: */
          !0
        ), o.setXhrHeaders(l, n), l.onload = function() {
          (l.status < 200 || l.status >= 300) && (e === Qr.POST ? c(Q.createPostRequestFailedError("Failed with status " + l.status, t)) : c(Q.createGetRequestFailedError("Failed with status " + l.status, t)));
          try {
            var u = JSON.parse(l.responseText), h = {
              headers: o.getHeaderDict(l),
              body: u,
              status: l.status
            };
            a(h);
          } catch {
            c(Q.createFailedToParseNetworkResponseError(t));
          }
        }, l.onerror = function() {
          window.navigator.onLine ? e === Qr.POST ? c(Q.createPostRequestFailedError("Failed with status " + l.status, t)) : c(Q.createGetRequestFailedError("Failed with status " + l.status, t)) : c(Q.createNoNetworkConnectivityError());
        }, e === Qr.POST && n && n.body)
          l.send(n.body);
        else if (e === Qr.GET)
          l.send();
        else
          throw Q.createHttpMethodNotImplementedError(e);
      });
    }, r.prototype.setXhrHeaders = function(t, e) {
      if (e && e.headers) {
        var n = e.headers;
        Object.keys(n).forEach(function(o) {
          t.setRequestHeader(o, n[o]);
        });
      }
    }, r.prototype.getHeaderDict = function(t) {
      var e = t.getAllResponseHeaders(), n = e.trim().split(/[\r\n]+/), o = {};
      return n.forEach(function(a) {
        var c = a.split(": "), l = c.shift(), u = c.join(": ");
        l && u && (o[l] = u);
      }), o;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ct = (
  /** @class */
  function() {
    function r() {
    }
    return r.clearHash = function(t) {
      t.location.hash = P.EMPTY_STRING, typeof t.history.replaceState == "function" && t.history.replaceState(null, P.EMPTY_STRING, "" + t.location.origin + t.location.pathname + t.location.search);
    }, r.replaceHash = function(t) {
      var e = t.split("#");
      e.shift(), window.location.hash = e.length > 0 ? e.join("#") : P.EMPTY_STRING;
    }, r.isInIframe = function() {
      return window.parent !== window;
    }, r.isInPopup = function() {
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(Fr.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var t = new Ue(window.location.href), e = t.getUrlComponents();
      return e.Protocol + "//" + e.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new hT() : new fT();
    }, r.blockReloadInHiddenIframes = function() {
      var t = Ue.hashContainsKnownProperties(window.location.hash);
      if (t && r.isInIframe())
        throw Q.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(t, e) {
      var n = r.isInIframe();
      if (t === re.Redirect && n && !e)
        throw Q.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw Q.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(t) {
      if (!t)
        throw Q.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(t, e) {
      if (t && !e)
        throw Q.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var t = window.navigator.userAgent, e = t.indexOf("MSIE "), n = t.indexOf("Trident/"), o = t.indexOf("Edge/"), a = e > 0 || n > 0, c = o > 0;
      return a || c;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Np = (
  /** @class */
  function() {
    function r(t, e, n, o, a, c, l, u, h) {
      this.config = t, this.browserStorage = e, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = a, this.navigationClient = c, this.nativeMessageHandler = u, this.correlationId = h || this.browserCrypto.createNewGuid(), this.logger = o.clone(Fr.MSAL_SKU, Pi, this.correlationId), this.performanceClient = l;
    }
    return r.prototype.clearCacheOnLogout = function(t) {
      return q(this, void 0, void 0, function() {
        return $(this, function(e) {
          switch (e.label) {
            case 0:
              if (!t)
                return [3, 5];
              Rt.accountInfoIsEqual(t, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)), e.label = 1;
            case 1:
              return e.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(Rt.generateAccountCacheKey(t))];
            case 2:
              return e.sent(), this.logger.verbose("Cleared cache items belonging to the account provided in the logout request."), [3, 4];
            case 3:
              return e.sent(), this.logger.error("Account provided in logout request was not found. Local cache unchanged."), [3, 4];
            case 4:
              return [3, 9];
            case 5:
              return e.trys.push([5, 8, , 9]), this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId), [4, this.browserStorage.clear()];
            case 6:
              return e.sent(), [4, this.browserCrypto.clearKeystore()];
            case 7:
              return e.sent(), [3, 9];
            case 8:
              return e.sent(), this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged."), [3, 9];
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.initializeBaseRequest = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c;
        return $(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.InitializeBaseRequest, t.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), n = t.authority || this.config.auth.authority, e ? [4, this.validateRequestAuthority(n, e)] : [3, 2];
            case 1:
              l.sent(), l.label = 2;
            case 2:
              if (o = Hl(t && t.scopes || []), a = ae(ae({}, t), {
                correlationId: this.correlationId,
                authority: n,
                scopes: o
              }), !a.authenticationScheme)
                a.authenticationScheme = ze.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (a.authenticationScheme === ze.SSH) {
                  if (!t.sshJwk)
                    throw et.createMissingSshJwkError();
                  if (!t.sshKid)
                    throw et.createMissingSshKidError();
                }
                this.logger.verbose('Authentication Scheme set to "' + a.authenticationScheme + '" as configured in Auth request');
              }
              return this.config.cache.claimsBasedCachingEnabled && t.claims && !X.isEmptyObj(t.claims) ? (c = a, [4, this.browserCrypto.hashString(t.claims)]) : [3, 4];
            case 3:
              c.requestedClaimsHash = l.sent(), l.label = 4;
            case 4:
              return [2, a];
          }
        });
      });
    }, r.prototype.getRedirectUri = function(t) {
      this.logger.verbose("getRedirectUri called");
      var e = t || this.config.auth.redirectUri || ct.getCurrentUri();
      return Ue.getAbsoluteUrl(e, ct.getCurrentUri());
    }, r.prototype.validateRequestAuthority = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(t)];
            case 1:
              if (n = o.sent(), !n.isAlias(e.environment))
                throw et.createAuthorityMismatchError();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.initializeServerTelemetryManager = function(t, e) {
      this.logger.verbose("initializeServerTelemetryManager called");
      var n = {
        clientId: this.config.auth.clientId,
        correlationId: this.correlationId,
        apiId: t,
        forceRefresh: e || !1,
        wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
        wrapperVer: this.browserStorage.getWrapperMetadata()[1]
      };
      return new sT(n, this.browserStorage);
    }, r.prototype.getDiscoveredAuthority = function(t) {
      return q(this, void 0, void 0, function() {
        var e;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return this.logger.verbose("getDiscoveredAuthority called"), e = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata
              }, t ? (this.logger.verbose("Creating discovered authority with request authority"), [4, rs.createDiscoveredInstance(t, this.config.system.networkClient, this.browserStorage, e, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, rs.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, e, this.logger)];
            case 3:
              return [2, n.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Yo = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.initializeAuthorizationCodeRequest = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o;
        return $(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientInitializeAuthorizationCodeRequest, e.correlationId), this.logger.verbose("initializeAuthorizationRequest called", e.correlationId), [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              return n = a.sent(), o = ae(ae({}, e), { redirectUri: e.redirectUri, code: P.EMPTY_STRING, codeVerifier: n.verifier }), e.codeChallenge = n.challenge, e.codeChallengeMethod = P.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, t.prototype.initializeLogoutRequest = function(e) {
      this.logger.verbose("initializeLogoutRequest called", e == null ? void 0 : e.correlationId);
      var n = ae({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, e);
      if (e)
        if (e.logoutHint)
          this.logger.verbose("logoutHint has already been set in logoutRequest");
        else if (e.account) {
          var o = this.getLogoutHintFromIdTokenClaims(e.account);
          o && (this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided"), n.logoutHint = o);
        } else
          this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
      else
        this.logger.verbose("logoutHint will not be set since no logout request was configured");
      return !e || e.postLogoutRedirectUri !== null ? e && e.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", n.correlationId), n.postLogoutRedirectUri = Ue.getAbsoluteUrl(e.postLogoutRedirectUri, ct.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", n.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", n.correlationId), n.postLogoutRedirectUri = Ue.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, ct.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", n.correlationId), n.postLogoutRedirectUri = Ue.getAbsoluteUrl(ct.getCurrentUri(), ct.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", n.correlationId), n;
    }, t.prototype.getLogoutHintFromIdTokenClaims = function(e) {
      var n = e.idTokenClaims;
      if (n) {
        if (n.login_hint)
          return n.login_hint;
        this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
      } else
        this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
      return null;
    }, t.prototype.createAuthCodeClient = function(e, n, o) {
      return q(this, void 0, void 0, function() {
        var a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(e, n, o)];
            case 1:
              return a = c.sent(), [2, new Ip(a, this.performanceClient)];
          }
        });
      });
    }, t.prototype.getClientConfiguration = function(e, n, o) {
      return q(this, void 0, void 0, function() {
        var a, c;
        return $(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(n, o)];
            case 1:
              return a = l.sent(), c = this.config.system.loggerOptions, [2, {
                authOptions: {
                  clientId: this.config.auth.clientId,
                  authority: a,
                  clientCapabilities: this.config.auth.clientCapabilities
                },
                systemOptions: {
                  tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                  preventCorsPreflight: !0
                },
                loggerOptions: {
                  loggerCallback: c.loggerCallback,
                  piiLoggingEnabled: c.piiLoggingEnabled,
                  logLevel: c.logLevel,
                  correlationId: this.correlationId
                },
                cacheOptions: {
                  claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
                },
                cryptoInterface: this.browserCrypto,
                networkInterface: this.networkClient,
                storageInterface: this.browserStorage,
                serverTelemetryManager: e,
                libraryInfo: {
                  sku: Fr.MSAL_SKU,
                  version: Pi,
                  cpu: P.EMPTY_STRING,
                  os: P.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    }, t.prototype.validateAndExtractStateFromHash = function(e, n, o) {
      if (this.logger.verbose("validateAndExtractStateFromHash called", o), !e.state)
        throw Q.createHashDoesNotContainStateError();
      var a = Pp.extractBrowserRequestState(this.browserCrypto, e.state);
      if (!a)
        throw Q.createUnableToParseStateError();
      if (a.interactionType !== n)
        throw Q.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), e.state;
    }, t.prototype.getDiscoveredAuthority = function(e, n) {
      var o;
      return q(this, void 0, void 0, function() {
        var a, c, l, u;
        return $(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), c = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, l = e || this.config.auth.authority, u = Li.generateAuthority(l, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(U.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, rs.createDiscoveredInstance(u, this.config.system.networkClient, this.browserStorage, c, this.logger, this.performanceClient, this.correlationId).then(function(f) {
                return a.endMeasurement({
                  success: !0
                }), f;
              }).catch(function(f) {
                throw a.endMeasurement({
                  errorCode: f.errorCode,
                  subErrorCode: f.subError,
                  success: !1
                }), f;
              })];
            case 1:
              return [2, h.sent()];
          }
        });
      });
    }, t.prototype.initializeAuthorizationRequest = function(e, n) {
      return q(this, void 0, void 0, function() {
        var o, a, c, l, u, h, f;
        return $(this, function(g) {
          switch (g.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(e.redirectUri), a = {
                interactionType: n
              }, c = yn.setRequestState(this.browserCrypto, e && e.state || P.EMPTY_STRING, a), this.performanceClient.setPreQueueTime(U.InitializeBaseRequest, this.correlationId), u = [{}], [4, this.initializeBaseRequest(e)];
            case 1:
              return l = ae.apply(void 0, [ae.apply(void 0, u.concat([g.sent()])), { redirectUri: o, state: c, nonce: e.nonce || this.browserCrypto.createNewGuid(), responseMode: Ya.FRAGMENT }]), h = e.account || this.browserStorage.getActiveAccount(), h && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + h.homeAccountId, this.correlationId), l.account = h), X.isEmpty(l.loginHint) && !h && (f = this.browserStorage.getLegacyLoginHint(), f && (l.loginHint = f)), [2, l];
          }
        });
      });
    }, t;
  }(Np)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ql = (
  /** @class */
  function() {
    function r(t, e, n, o, a) {
      this.authModule = t, this.browserStorage = e, this.authCodeRequest = n, this.logger = o, this.performanceClient = a;
    }
    return r.prototype.handleCodeResponseFromHash = function(t, e, n, o) {
      return q(this, void 0, void 0, function() {
        var a, c, l;
        return $(this, function(u) {
          if (this.performanceClient.addQueueMeasurement(U.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), X.isEmpty(t))
            throw Q.createEmptyHashError(t);
          if (a = this.browserStorage.generateStateKey(e), c = this.browserStorage.getTemporaryCache(a), !c)
            throw ee.createStateNotFoundError("Cached State");
          try {
            l = this.authModule.handleFragmentResponse(t, c);
          } catch (h) {
            throw h instanceof co && h.subError === V.userCancelledError.code ? Q.createUserCancelledError() : h;
          }
          return this.performanceClient.setPreQueueTime(U.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(l, e, n, o)];
        });
      });
    }, r.prototype.handleCodeResponseFromServer = function(t, e, n, o, a) {
      return a === void 0 && (a = !0), q(this, void 0, void 0, function() {
        var c, l, u, h, f, g;
        return $(this, function(m) {
          switch (m.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(U.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), c = this.browserStorage.generateStateKey(e), l = this.browserStorage.getTemporaryCache(c), !l)
                throw ee.createStateNotFoundError("Cached State");
              return u = this.browserStorage.generateNonceKey(l), h = this.browserStorage.getTemporaryCache(u), this.authCodeRequest.code = t.code, t.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(U.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(t.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              m.sent(), m.label = 2;
            case 2:
              return a && (t.nonce = h || void 0), t.state = l, t.client_info ? this.authCodeRequest.clientInfo = t.client_info : (f = this.checkCcsCredentials(), f && (this.authCodeRequest.ccsCredential = f)), this.performanceClient.setPreQueueTime(U.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, t)];
            case 3:
              return g = m.sent(), this.browserStorage.cleanRequestByState(e), [2, g];
          }
        });
      });
    }, r.prototype.updateTokenEndpointAuthority = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        var o, a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + t + "/" + e.tenant + "/", [4, rs.createDiscoveredInstance(o, n, this.browserStorage, e.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              return a = c.sent(), this.authModule.updateAuthority(a), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.checkCcsCredentials = function() {
      var t = this.browserStorage.getTemporaryCache(Be.CCS_CREDENTIAL, !0);
      if (t)
        try {
          return JSON.parse(t);
        } catch {
          this.authModule.logger.error("Cache credential could not be parsed"), this.authModule.logger.errorPii("Cache credential could not be parsed: " + t);
        }
      return null;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var xf = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l) {
      var u = r.call(this, e, n, o, a, l) || this;
      return u.browserCrypto = c, u;
    }
    return t.prototype.initiateAuthRequest = function(e, n) {
      return q(this, void 0, void 0, function() {
        var o, a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), X.isEmpty(e) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(Be.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + e), o = {
                apiId: Ze.acquireTokenRedirect,
                timeout: n.redirectTimeout,
                noHistory: !1
              }, typeof n.onRedirectNavigate != "function" ? [3, 4] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), a = n.onRedirectNavigate(e), a === !1 ? [3, 2] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), [4, n.navigationClient.navigateExternal(e, o)])));
            case 1:
              return c.sent(), [
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
              return this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url"), [4, n.navigationClient.navigateExternal(e, o)];
            case 5:
              return c.sent(), [
                2
                /*return*/
              ];
            case 6:
              return [3, 8];
            case 7:
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), Q.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.handleCodeResponseFromHash = function(e, n, o, a) {
      return q(this, void 0, void 0, function() {
        var c, l, u, h, f, g, m;
        return $(this, function(v) {
          switch (v.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), X.isEmpty(e))
                throw Q.createEmptyHashError(e);
              if (this.browserStorage.setInteractionInProgress(!1), c = this.browserStorage.generateStateKey(n), l = this.browserStorage.getTemporaryCache(c), !l)
                throw ee.createStateNotFoundError("Cached State");
              try {
                u = this.authModule.handleFragmentResponse(e, l);
              } catch (C) {
                throw C instanceof co && C.subError === V.userCancelledError.code ? Q.createUserCancelledError() : C;
              }
              return h = this.browserStorage.generateNonceKey(l), f = this.browserStorage.getTemporaryCache(h), this.authCodeRequest.code = u.code, u.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(u.cloud_instance_host_name, o, a)] : [3, 2];
            case 1:
              v.sent(), v.label = 2;
            case 2:
              return u.nonce = f || void 0, u.state = l, u.client_info ? this.authCodeRequest.clientInfo = u.client_info : (g = this.checkCcsCredentials(), g && (this.authCodeRequest.ccsCredential = g)), [4, this.authModule.acquireToken(this.authCodeRequest, u)];
            case 3:
              return m = v.sent(), this.browserStorage.cleanRequestByState(n), [2, m];
          }
        });
      });
    }, t;
  }(ql)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var le;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(le || (le = {}));
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Ln;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(Ln || (Ln = {}));
var yi = {
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
}, Xr = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o) {
      var a = r.call(this, e, n) || this;
      return Object.setPrototypeOf(a, t.prototype), a.name = "NativeAuthError", a.ext = o, a;
    }
    return t.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Ln.PERSISTENT_ERROR || this.ext.status === Ln.DISABLED))
        return !0;
      switch (this.errorCode) {
        case yi.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, t.createError = function(e, n, o) {
      if (o && o.status)
        switch (o.status) {
          case Ln.ACCOUNT_UNAVAILABLE:
            return Br.createNativeAccountUnavailableError();
          case Ln.USER_INTERACTION_REQUIRED:
            return new Br(e, n);
          case Ln.USER_CANCEL:
            return Q.createUserCancelledError();
          case Ln.NO_NETWORK:
            return Q.createNoNetworkConnectivityError();
        }
      return new t(e, n, o);
    }, t.createUserSwitchError = function() {
      return new t(yi.userSwitch.code, yi.userSwitch.desc);
    }, t.createTokensNotFoundInCacheError = function() {
      return new t(yi.tokensNotFoundInCache.code, yi.tokensNotFoundInCache.desc);
    }, t;
  }(ue)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Op = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.acquireToken = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l;
        return $(this, function(u) {
          switch (u.label) {
            case 0:
              return n = this.performanceClient.startMeasurement(U.SilentCacheClientAcquireToken, e.correlationId), o = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, e.authority, e.azureCloudOptions)];
            case 1:
              a = u.sent(), this.logger.verbose("Silent auth client created"), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), [4, a.acquireCachedToken(e)];
            case 3:
              return c = u.sent(), n.endMeasurement({
                success: !0,
                fromCache: !0
              }), [2, c];
            case 4:
              throw l = u.sent(), l instanceof Q && l.errorCode === V.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
                errorCode: l instanceof ue && l.errorCode || void 0,
                subErrorCode: l instanceof ue && l.subError || void 0,
                success: !1
              }), l;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.logout = function() {
      return Promise.reject(Q.createSilentLogoutUnsupportedError());
    }, t.prototype.createSilentFlowClient = function(e, n, o) {
      return q(this, void 0, void 0, function() {
        var a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(e, n, o)];
            case 1:
              return a = c.sent(), [2, new eT(a, this.performanceClient)];
          }
        });
      });
    }, t.prototype.initializeSilentRequest = function(e, n) {
      return q(this, void 0, void 0, function() {
        var o;
        return $(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(U.InitializeBaseRequest, this.correlationId), o = [ae({}, e)], [4, this.initializeBaseRequest(e, n)];
            case 1:
              return [2, ae.apply(void 0, [ae.apply(void 0, o.concat([a.sent()])), { account: n, forceRefresh: e.forceRefresh || !1 }])];
          }
        });
      });
    }, t;
  }(Yo)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Fo = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l, u, h, f, g, m, v) {
      var C = r.call(this, e, n, o, a, c, l, h, f, v) || this;
      return C.apiId = u, C.accountId = g, C.nativeMessageHandler = f, C.nativeStorageManager = m, C.silentCacheClient = new Op(e, C.nativeStorageManager, o, a, c, l, h, f, v), C;
    }
    return t.prototype.acquireToken = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h;
        return $(this, function(f) {
          switch (f.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(U.NativeInteractionClientAcquireToken, e.correlationId), o = Ar.nowSeconds(), [4, this.initializeNativeRequest(e)];
            case 1:
              a = f.sent(), f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 5]), [4, this.acquireTokensFromCache(this.accountId, a)];
            case 3:
              return c = f.sent(), n.endMeasurement({
                success: !0,
                isNativeBroker: !1,
                fromCache: !0
              }), [2, c];
            case 4:
              return f.sent(), this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call"), [3, 5];
            case 5:
              return l = {
                method: vn.GetToken,
                request: a
              }, [4, this.nativeMessageHandler.sendMessage(l)];
            case 6:
              return u = f.sent(), h = this.validateNativeResponse(u), [2, this.handleNativeResponse(h, a, o).then(function(g) {
                return n.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: g.requestId
                }), g;
              }).catch(function(g) {
                throw n.endMeasurement({
                  success: !1,
                  errorCode: g.errorCode,
                  subErrorCode: g.subError,
                  isNativeBroker: !0
                }), g;
              })];
          }
        });
      });
    }, t.prototype.createSilentCacheRequest = function(e, n) {
      return {
        authority: e.authority,
        correlationId: this.correlationId,
        scopes: Ut.fromString(e.scope).asArray(),
        account: n,
        forceRefresh: !1
      };
    }, t.prototype.acquireTokensFromCache = function(e, n) {
      return q(this, void 0, void 0, function() {
        var o, a, c, l;
        return $(this, function(u) {
          switch (u.label) {
            case 0:
              if (!e)
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), ee.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: e }), !o)
                throw ee.createNoAccountFoundError();
              u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), a = this.createSilentCacheRequest(n, o), [4, this.silentCacheClient.acquireToken(a)];
            case 2:
              return c = u.sent(), [2, c];
            case 3:
              throw l = u.sent(), l;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.acquireTokenRedirect = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u;
        return $(this, function(h) {
          switch (h.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireTokenRedirect called."), [4, this.initializeNativeRequest(e)];
            case 1:
              n = h.sent(), o = {
                method: vn.GetToken,
                request: n
              }, h.label = 2;
            case 2:
              return h.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return a = h.sent(), this.validateNativeResponse(a), [3, 5];
            case 4:
              if (c = h.sent(), c instanceof Xr && c.isFatal())
                throw c;
              return [3, 5];
            case 5:
              return this.browserStorage.setTemporaryCache(Be.NATIVE_REQUEST, JSON.stringify(n), !0), l = {
                apiId: Ze.acquireTokenRedirect,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, u = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(e.redirectUri), [4, this.navigationClient.navigateExternal(u, l)];
            case 6:
              return h.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.handleRedirectPromise = function() {
      return q(this, void 0, void 0, function() {
        var e, n, o, a, c, l, u, h;
        return $(this, function(f) {
          switch (f.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (e = this.browserStorage.getCachedNativeRequest(), !e)
                return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), [2, null];
              n = e.prompt, o = bf(e, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.NATIVE_REQUEST)), a = {
                method: vn.GetToken,
                request: o
              }, c = Ar.nowSeconds(), f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker."), [4, this.nativeMessageHandler.sendMessage(a)];
            case 2:
              return l = f.sent(), this.validateNativeResponse(l), u = this.handleNativeResponse(l, o, c), this.browserStorage.setInteractionInProgress(!1), [2, u];
            case 3:
              throw h = f.sent(), this.browserStorage.setInteractionInProgress(!1), h;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.logout = function() {
      return this.logger.trace("NativeInteractionClient - logout called."), Promise.reject("Logout not implemented yet");
    }, t.prototype.handleNativeResponse = function(e, n, o) {
      return q(this, void 0, void 0, function() {
        var a, c, l, u, h, f;
        return $(this, function(g) {
          switch (g.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleNativeResponse called."), e.account.id !== n.accountId)
                throw Xr.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(n.authority)];
            case 1:
              return a = g.sent(), c = a.getPreferredCache(), l = this.createIdTokenObj(e), u = this.createHomeAccountIdentifier(e, l), h = this.createAccountEntity(e, u, l, c), [4, this.generateAuthenticationResult(e, n, l, h, a.canonicalAuthority, o)];
            case 2:
              return f = g.sent(), this.cacheAccount(h), this.cacheNativeTokens(e, n, u, h, l, f.accessToken, f.tenantId, o), [2, f];
          }
        });
      });
    }, t.prototype.createIdTokenObj = function(e) {
      return new en(e.id_token || P.EMPTY_STRING, this.browserCrypto);
    }, t.prototype.createHomeAccountIdentifier = function(e, n) {
      var o = Rt.generateHomeAccountId(e.client_info || P.EMPTY_STRING, Wt.Default, this.logger, this.browserCrypto, n);
      return o;
    }, t.prototype.createAccountEntity = function(e, n, o, a) {
      return Rt.createAccount(e.client_info, n, o, void 0, void 0, void 0, a, e.account.id);
    }, t.prototype.generateScopes = function(e, n) {
      return e.scope ? Ut.fromString(e.scope) : Ut.fromString(n.scope);
    }, t.prototype.generatePopAccessToken = function(e, n) {
      return q(this, void 0, void 0, function() {
        var o, a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              if (n.tokenType !== ze.POP)
                return [3, 2];
              if (e.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, e.shr];
              if (o = new Ko(this.browserCrypto), a = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw ee.createKeyIdMissingError();
              return [4, o.signPopToken(e.access_token, n.keyId, a)];
            case 1:
              return [2, c.sent()];
            case 2:
              return [2, e.access_token];
          }
        });
      });
    }, t.prototype.generateAuthenticationResult = function(e, n, o, a, c, l) {
      return q(this, void 0, void 0, function() {
        var u, h, f, g, m, v, C, b;
        return $(this, function(_) {
          switch (_.label) {
            case 0:
              return u = this.addTelemetryFromNativeResponse(e), h = e.scope ? Ut.fromString(e.scope) : Ut.fromString(n.scope), f = e.account.properties || {}, g = f.UID || o.claims.oid || o.claims.sub || P.EMPTY_STRING, m = f.TenantId || o.claims.tid || P.EMPTY_STRING, [4, this.generatePopAccessToken(e, n)];
            case 1:
              return v = _.sent(), C = n.tokenType === ze.POP ? ze.POP : ze.BEARER, b = {
                authority: c,
                uniqueId: g,
                tenantId: m,
                scopes: h.asArray(),
                account: a.getAccountInfo(),
                idToken: e.id_token,
                idTokenClaims: o.claims,
                accessToken: v,
                fromCache: u ? this.isResponseFromCache(u) : !1,
                expiresOn: new Date(Number(l + e.expires_in) * 1e3),
                tokenType: C,
                correlationId: this.correlationId,
                state: e.state,
                fromNativeBroker: !0
              }, [2, b];
          }
        });
      });
    }, t.prototype.cacheAccount = function(e) {
      var n = this;
      this.browserStorage.setAccount(e), this.browserStorage.removeAccountContext(e).catch(function(o) {
        n.logger.error("Error occurred while removing account context from browser storage. " + o);
      });
    }, t.prototype.cacheNativeTokens = function(e, n, o, a, c, l, u, h) {
      var f = ro.createIdTokenEntity(o, n.authority, e.id_token || P.EMPTY_STRING, n.clientId, c.claims.tid || P.EMPTY_STRING), g = n.tokenType === ze.POP ? P.SHR_NONCE_VALIDITY : (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, m = h + g, v = this.generateScopes(e, n), C = no.createAccessTokenEntity(o, n.authority, l, n.clientId, c ? c.claims.tid || P.EMPTY_STRING : u, v.printScopes(), m, 0, this.browserCrypto), b = new ki(a, f, C);
      this.nativeStorageManager.saveCacheRecord(b);
    }, t.prototype.addTelemetryFromNativeResponse = function(e) {
      var n = this.getMATSFromResponse(e);
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
    }, t.prototype.validateNativeResponse = function(e) {
      if (e.hasOwnProperty("access_token") && e.hasOwnProperty("id_token") && e.hasOwnProperty("client_info") && e.hasOwnProperty("account") && e.hasOwnProperty("scope") && e.hasOwnProperty("expires_in"))
        return e;
      throw Xr.createUnexpectedError("Response missing expected properties.");
    }, t.prototype.getMATSFromResponse = function(e) {
      if (e.properties.MATS)
        try {
          return JSON.parse(e.properties.MATS);
        } catch {
          this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
        }
      return null;
    }, t.prototype.isResponseFromCache = function(e) {
      return typeof e.is_cached > "u" ? (this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false."), !1) : !!e.is_cached;
    }, t.prototype.initializeNativeRequest = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h, f, g, m, v = this;
        return $(this, function(C) {
          switch (C.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = e.authority || this.config.auth.authority, e.account ? [4, this.validateRequestAuthority(n, e.account)] : [3, 2];
            case 1:
              C.sent(), C.label = 2;
            case 2:
              return o = new Ue(n), o.validateAsUri(), a = e.scopes, c = bf(e, ["scopes"]), l = new Ut(a || []), l.appendScopes(Fi), u = function() {
                switch (v.apiId) {
                  case Ze.ssoSilent:
                  case Ze.acquireTokenSilent_silentFlow:
                    return v.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ft.NONE;
                }
                if (!e.prompt) {
                  v.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (e.prompt) {
                  case Ft.NONE:
                  case Ft.CONSENT:
                  case Ft.LOGIN:
                    return v.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), e.prompt;
                  default:
                    throw v.logger.trace("initializeNativeRequest: prompt = " + e.prompt + " is not compatible with native flow"), Q.createNativePromptParameterNotSupportedError();
                }
              }, h = ae(ae({}, c), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: l.printScopes(),
                redirectUri: this.getRedirectUri(e.redirectUri),
                prompt: u(),
                correlationId: this.correlationId,
                tokenType: e.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: ae(ae(ae({}, e.extraQueryParameters), e.tokenQueryParameters), { telemetry: bi.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), e.authenticationScheme !== ze.POP ? [3, 4] : (f = {
                resourceRequestUri: e.resourceRequestUri,
                resourceRequestMethod: e.resourceRequestMethod,
                shrClaims: e.shrClaims,
                shrNonce: e.shrNonce
              }, g = new Ko(this.browserCrypto), [4, g.generateCnf(f)]);
            case 3:
              m = C.sent(), h.reqCnf = m.reqCnfString, h.keyId = m.kid, C.label = 4;
            case 4:
              return [2, h];
          }
        });
      });
    }, t;
  }(Np)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var io = (
  /** @class */
  function() {
    function r(t, e, n, o) {
      this.logger = t, this.handshakeTimeoutMs = e, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = n, this.handshakeEvent = n.startMeasurement(U.NativeMessageHandlerHandshake);
    }
    return r.prototype.sendMessage = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n = this;
        return $(this, function(o) {
          return this.logger.trace("NativeMessageHandler - sendMessage called."), e = {
            channel: bi.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: t
          }, this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(e)), this.messageChannel.port1.postMessage(e), [2, new Promise(function(a, c) {
            n.resolvers.set(e.responseId, { resolve: a, reject: c });
          })];
        });
      });
    }, r.createProvider = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        var o, a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              t.trace("NativeMessageHandler - createProvider called."), c.label = 1;
            case 1:
              return c.trys.push([1, 3, , 5]), o = new r(t, e, n, bi.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
            case 2:
              return c.sent(), [2, o];
            case 3:
              return c.sent(), a = new r(t, e, n), [4, a.sendHandshakeRequest()];
            case 4:
              return c.sent(), [2, a];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendHandshakeRequest = function() {
      return q(this, void 0, void 0, function() {
        var t, e = this;
        return $(this, function(n) {
          return this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1), t = {
            channel: bi.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: vn.HandshakeRequest
            }
          }, this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          }), this.messageChannel.port1.onmessage = function(o) {
            e.onChannelMessage(o);
          }, window.postMessage(t, window.origin, [this.messageChannel.port2]), [2, new Promise(function(o, a) {
            e.handshakeResolvers.set(t.responseId, { resolve: o, reject: a }), e.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", e.windowListener, !1), e.messageChannel.port1.close(), e.messageChannel.port2.close(), e.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), a(Q.createNativeHandshakeTimeoutError()), e.handshakeResolvers.delete(t.responseId);
            }, e.handshakeTimeoutMs);
          })];
        });
      });
    }, r.prototype.onWindowMessage = function(t) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), t.source === window) {
        var e = t.data;
        if (!(!e.channel || e.channel !== bi.CHANNEL_ID) && !(e.extensionId && e.extensionId !== this.extensionId) && e.body.method === vn.HandshakeRequest) {
          this.logger.verbose(e.extensionId ? "Extension with id: " + e.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var n = this.handshakeResolvers.get(e.responseId);
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(Q.createNativeExtensionNotInstalledError()));
        }
      }
    }, r.prototype.onChannelMessage = function(t) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var e = t.data, n = this.resolvers.get(e.responseId), o = this.handshakeResolvers.get(e.responseId);
      try {
        var a = e.body.method;
        if (a === vn.Response) {
          if (!n)
            return;
          var c = e.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(c)), c.status !== "Success")
            n.reject(Xr.createError(c.code, c.description, c.ext));
          else if (c.result)
            c.result.code && c.result.description ? n.reject(Xr.createError(c.result.code, c.result.description, c.result.ext)) : n.resolve(c.result);
          else
            throw ue.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(e.responseId);
        } else if (a === vn.HandshakeResponse) {
          if (!o)
            return;
          clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = e.extensionId, this.extensionVersion = e.body.version, this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId), this.handshakeEvent.endMeasurement({ extensionInstalled: !0, success: !0 }), o.resolve(), this.handshakeResolvers.delete(e.responseId);
        }
      } catch (l) {
        this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii("Error parsing response from WAM Extension: " + l.toString()), this.logger.errorPii("Unable to parse " + t), n ? n.reject(l) : o && o.reject(l);
      }
    }, r.prototype.getExtensionId = function() {
      return this.extensionId;
    }, r.prototype.getExtensionVersion = function() {
      return this.extensionVersion;
    }, r.isNativeAvailable = function(t, e, n, o) {
      if (e.trace("isNativeAvailable called"), !t.system.allowNativeBroker)
        return e.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false"), !1;
      if (!n)
        return e.trace("isNativeAvailable: WAM extension provider is not initialized, returning false"), !1;
      if (o)
        switch (o) {
          case ze.BEARER:
          case ze.POP:
            return e.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return e.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var pT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l, u, h, f, g) {
      var m = r.call(this, e, n, o, a, c, l, u, f, g) || this;
      return m.nativeStorage = h, m;
    }
    return t.prototype.acquireToken = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h, f, g, m = this;
        return $(this, function(v) {
          switch (v.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, e.correlationId), [4, this.initializeAuthorizationRequest(e, re.Redirect)];
            case 1:
              n = v.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || P.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(Ze.acquireTokenRedirect), a = function(C) {
                C.persisted && (m.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), m.browserStorage.cleanRequestByState(n.state), m.eventHandler.emitEvent(le.RESTORE_FROM_BFCACHE, re.Redirect));
              }, v.label = 2;
            case 2:
              return v.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationCodeRequest, e.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return c = v.sent(), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, e.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return l = v.sent(), this.logger.verbose("Auth code client created"), u = new xf(l, this.browserStorage, c, this.logger, this.browserCrypto, this.performanceClient), [4, l.getAuthCodeUrl(ae(ae({}, n), { nativeBroker: io.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, e.authenticationScheme) }))];
            case 5:
              return h = v.sent(), f = this.getRedirectStartPage(e.redirectStartPage), this.logger.verbosePii("Redirect start page: " + f), window.addEventListener("pageshow", a), [4, u.initiateAuthRequest(h, {
                navigationClient: this.navigationClient,
                redirectTimeout: this.config.system.redirectNavigationTimeout,
                redirectStartPage: f,
                onRedirectNavigate: e.onRedirectNavigate
              })];
            case 6:
              return [2, v.sent()];
            case 7:
              throw g = v.sent(), g instanceof ue && g.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", a), o.cacheFailedRequest(g), this.browserStorage.cleanRequestByState(n.state), g;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.handleRedirectPromise = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h, f, g, m, v, C;
        return $(this, function(b) {
          switch (b.label) {
            case 0:
              n = this.initializeServerTelemetryManager(Ze.handleRedirectPromise), b.label = 1;
            case 1:
              if (b.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(e || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(re.Redirect), [2, null];
              a = void 0;
              try {
                c = Ue.getDeserializedHash(o), a = this.validateAndExtractStateFromHash(c, re.Redirect), this.logger.verbose("State extracted from hash");
              } catch (_) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + _), this.browserStorage.cleanRequestByInteractionType(re.Redirect), [2, null];
              }
              return l = this.browserStorage.getTemporaryCache(Be.ORIGIN_URI, !0) || P.EMPTY_STRING, u = Ue.removeHashFromUrl(l), h = Ue.removeHashFromUrl(window.location.href), u === h && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, a, n)]) : [3, 3];
            case 2:
              return f = b.sent(), l.indexOf("#") > -1 && ct.replaceHash(l), [2, f];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, a, n)]);
            case 4:
              return !ct.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(Be.URL_HASH, o, !0), g = {
                apiId: Ze.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, m = !0, !l || l === "null" ? (v = ct.getHomepage(), this.browserStorage.setTemporaryCache(Be.ORIGIN_URI, v, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(v, g)]) : [3, 6]) : [3, 9];
            case 5:
              return m = b.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + l), [4, this.navigationClient.navigateInternal(l, g)];
            case 7:
              m = b.sent(), b.label = 8;
            case 8:
              if (!m)
                return [2, this.handleHash(o, a, n)];
              b.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw C = b.sent(), C instanceof ue && C.setCorrelationId(this.correlationId), n.cacheFailedRequest(C), this.browserStorage.cleanRequestByInteractionType(re.Redirect), C;
            case 11:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.getRedirectResponseHash = function(e) {
      this.logger.verbose("getRedirectResponseHash called");
      var n = Ue.hashContainsKnownProperties(e);
      if (n)
        return ct.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), e;
      var o = this.browserStorage.getTemporaryCache(Be.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(Be.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, t.prototype.handleHash = function(e, n, o) {
      return q(this, void 0, void 0, function() {
        var a, c, l, u, h, f, g, m = this;
        return $(this, function(v) {
          switch (v.label) {
            case 0:
              if (a = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), c = Ue.getDeserializedHash(e), c.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw Q.createNativeConnectionNotEstablishedError();
                return l = new Fo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, c.accountId, this.nativeStorage, a.correlationId), u = yn.parseRequestState(this.browserCrypto, n).userRequestState, [2, l.acquireToken(ae(ae({}, a), {
                  state: u,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  m.browserStorage.cleanRequestByState(n);
                })];
              }
              if (h = this.browserStorage.getCachedAuthority(n), !h)
                throw Q.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, a.correlationId), [4, this.createAuthCodeClient(o, h)];
            case 1:
              return f = v.sent(), this.logger.verbose("Auth code client created"), Za.removeThrottle(this.browserStorage, this.config.auth.clientId, a), g = new xf(f, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, g.handleCodeResponseFromHash(e, n, f.authority, this.networkClient)];
            case 2:
              return [2, v.sent()];
          }
        });
      });
    }, t.prototype.logout = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h;
        return $(this, function(f) {
          switch (f.label) {
            case 0:
              this.logger.verbose("logoutRedirect called"), n = this.initializeLogoutRequest(e), o = this.initializeServerTelemetryManager(Ze.logout), f.label = 1;
            case 1:
              return f.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(le.LOGOUT_START, re.Redirect, e), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return f.sent(), a = {
                apiId: Ze.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, e && e.authority)];
            case 3:
              return c = f.sent(), this.logger.verbose("Auth code client created"), l = c.getLogoutUri(n), this.eventHandler.emitEvent(le.LOGOUT_SUCCESS, re.Redirect, n), e && typeof e.onRedirectNavigate == "function" ? (u = e.onRedirectNavigate(l), u === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)])) : [3, 7];
            case 4:
              return f.sent(), [
                2
                /*return*/
              ];
            case 5:
              this.browserStorage.setInteractionInProgress(!1), this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation"), f.label = 6;
            case 6:
              return [3, 9];
            case 7:
              return this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(l, a)];
            case 8:
              return f.sent(), [
                2
                /*return*/
              ];
            case 9:
              return [3, 11];
            case 10:
              throw h = f.sent(), h instanceof ue && h.setCorrelationId(this.correlationId), o.cacheFailedRequest(h), this.eventHandler.emitEvent(le.LOGOUT_FAILURE, re.Redirect, null, h), this.eventHandler.emitEvent(le.LOGOUT_END, re.Redirect), h;
            case 11:
              return this.eventHandler.emitEvent(le.LOGOUT_END, re.Redirect), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.getRedirectStartPage = function(e) {
      var n = e || window.location.href;
      return Ue.getAbsoluteUrl(n, ct.getCurrentUri());
    }, t;
  }(Yo)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var gT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l, u, h, f, g) {
      var m = r.call(this, e, n, o, a, c, l, u, f, g) || this;
      return m.unloadWindow = m.unloadWindow.bind(m), m.nativeStorage = h, m;
    }
    return t.prototype.acquireToken = function(e) {
      try {
        var n = this.generatePopupName(e.scopes || Fi, e.authority || this.config.auth.authority), o = e.popupWindowAttributes || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(e, n, o);
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        var a = this.openSizedPopup("about:blank", n, o);
        return this.acquireTokenPopupAsync(e, n, o, a);
      } catch (c) {
        return Promise.reject(c);
      }
    }, t.prototype.logout = function(e) {
      try {
        this.logger.verbose("logoutPopup called");
        var n = this.initializeLogoutRequest(e), o = this.generateLogoutPopupName(n), a = e && e.authority, c = e && e.mainWindowRedirectUri, l = (e == null ? void 0 : e.popupWindowAttributes) || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(n, o, l, a, void 0, c);
        this.logger.verbose("asyncPopup set to false, opening popup");
        var u = this.openSizedPopup("about:blank", o, l);
        return this.logoutPopupAsync(n, o, l, a, u, c);
      } catch (h) {
        return Promise.reject(h);
      }
    }, t.prototype.acquireTokenPopupAsync = function(e, n, o, a) {
      return q(this, void 0, void 0, function() {
        var c, l, u, h, f, g, m, v, C, b, _, A, I, T, N, x, D, W = this;
        return $(this, function(z) {
          switch (z.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), c = this.initializeServerTelemetryManager(Ze.acquireTokenPopup), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, e.correlationId), [4, this.initializeAuthorizationRequest(e, re.Popup)];
            case 1:
              l = z.sent(), this.browserStorage.updateCacheEntries(l.state, l.nonce, l.authority, l.loginHint || P.EMPTY_STRING, l.account || null), z.label = 2;
            case 2:
              return z.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationCodeRequest, e.correlationId), [4, this.initializeAuthorizationCodeRequest(l)];
            case 3:
              return u = z.sent(), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, e.correlationId), [4, this.createAuthCodeClient(c, l.authority, l.azureCloudOptions)];
            case 4:
              return h = z.sent(), this.logger.verbose("Auth code client created"), f = io.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, e.authenticationScheme), g = void 0, f && (g = this.performanceClient.startMeasurement(U.FetchAccountIdWithNativeBroker, e.correlationId)), [4, h.getAuthCodeUrl(ae(ae({}, l), { nativeBroker: f }))];
            case 5:
              return m = z.sent(), v = new ql(h, this.browserStorage, u, this.logger, this.performanceClient), C = {
                popup: a,
                popupName: n,
                popupWindowAttributes: o
              }, b = this.initiateAuthRequest(m, C), this.eventHandler.emitEvent(le.POPUP_OPENED, re.Popup, { popupWindow: b }, null), [4, this.monitorPopupForHash(b)];
            case 6:
              if (_ = z.sent(), A = Ue.getDeserializedHash(_), I = this.validateAndExtractStateFromHash(A, re.Popup, l.correlationId), Za.removeThrottle(this.browserStorage, this.config.auth.clientId, u), A.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), g && g.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw Q.createNativeConnectionNotEstablishedError();
                return T = new Fo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, A.accountId, this.nativeStorage, l.correlationId), N = yn.parseRequestState(this.browserCrypto, I).userRequestState, [2, T.acquireToken(ae(ae({}, l), {
                  state: N,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  W.browserStorage.cleanRequestByState(I);
                })];
              }
              return [4, v.handleCodeResponseFromHash(_, I, h.authority, this.networkClient)];
            case 7:
              return x = z.sent(), [2, x];
            case 8:
              throw D = z.sent(), a && a.close(), D instanceof ue && D.setCorrelationId(this.correlationId), c.cacheFailedRequest(D), this.browserStorage.cleanRequestByState(l.state), D;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.logoutPopupAsync = function(e, n, o, a, c, l) {
      return q(this, void 0, void 0, function() {
        var u, h, f, g, m, v, C;
        return $(this, function(b) {
          switch (b.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(le.LOGOUT_START, re.Popup, e), u = this.initializeServerTelemetryManager(Ze.logoutPopup), b.label = 1;
            case 1:
              return b.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(e.account)];
            case 2:
              return b.sent(), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, e.correlationId), [4, this.createAuthCodeClient(u, a)];
            case 3:
              return h = b.sent(), this.logger.verbose("Auth code client created"), f = h.getLogoutUri(e), this.eventHandler.emitEvent(le.LOGOUT_SUCCESS, re.Popup, e), g = this.openPopup(f, { popupName: n, popupWindowAttributes: o, popup: c }), this.eventHandler.emitEvent(le.POPUP_OPENED, re.Popup, { popupWindow: g }, null), [4, this.waitForLogoutPopup(g)];
            case 4:
              return b.sent(), l ? (m = {
                apiId: Ze.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, v = Ue.getAbsoluteUrl(l, ct.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + v), this.navigationClient.navigateInternal(v, m)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw C = b.sent(), c && c.close(), C instanceof ue && C.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(le.LOGOUT_FAILURE, re.Popup, null, C), this.eventHandler.emitEvent(le.LOGOUT_END, re.Popup), u.cacheFailedRequest(C), C;
            case 6:
              return this.eventHandler.emitEvent(le.LOGOUT_END, re.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.initiateAuthRequest = function(e, n) {
      if (X.isEmpty(e))
        throw this.logger.error("Navigate url is empty"), Q.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + e), this.openPopup(e, n);
    }, t.prototype.monitorPopupForHash = function(e) {
      var n = this;
      return new Promise(function(o, a) {
        var c = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, l = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var u = setInterval(function() {
          if (e.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(u), a(Q.createUserCancelledError());
            return;
          }
          var h = P.EMPTY_STRING, f = P.EMPTY_STRING;
          try {
            h = e.location.href, f = e.location.hash;
          } catch {
          }
          X.isEmpty(h) || h === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), l++, f ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(u), n.cleanPopup(e), Ue.hashContainsKnownProperties(f) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(f)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + f), a(Q.createHashDoesNotContainKnownPropertiesError()))) : l > c && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(u), a(Q.createMonitorPopupTimeoutError())));
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, t.prototype.waitForLogoutPopup = function(e) {
      var n = this;
      return new Promise(function(o) {
        n.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var a = setInterval(function() {
          e.closed && (n.logger.error("PopupHandler.waitForLogoutPopup - window closed"), n.cleanPopup(), clearInterval(a), o());
          var c = P.EMPTY_STRING;
          try {
            c = e.location.href;
          } catch {
          }
          X.isEmpty(c) || c === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(a), n.cleanPopup(e), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, t.prototype.openPopup = function(e, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + e), o.location.assign(e)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + e), o = this.openSizedPopup(e, n.popupName, n.popupWindowAttributes)), !o)
          throw Q.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (a) {
        throw this.logger.error("error opening popup " + a.message), this.browserStorage.setInteractionInProgress(!1), Q.createPopupWindowError(a.toString());
      }
    }, t.prototype.openSizedPopup = function(e, n, o) {
      var a, c, l, u, h = window.screenLeft ? window.screenLeft : window.screenX, f = window.screenTop ? window.screenTop : window.screenY, g = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, m = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, v = (a = o.popupSize) === null || a === void 0 ? void 0 : a.width, C = (c = o.popupSize) === null || c === void 0 ? void 0 : c.height, b = (l = o.popupPosition) === null || l === void 0 ? void 0 : l.top, _ = (u = o.popupPosition) === null || u === void 0 ? void 0 : u.left;
      return (!v || v < 0 || v > g) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), v = Fr.POPUP_WIDTH), (!C || C < 0 || C > m) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), C = Fr.POPUP_HEIGHT), (!b || b < 0 || b > m) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), b = Math.max(0, m / 2 - Fr.POPUP_HEIGHT / 2 + f)), (!_ || _ < 0 || _ > g) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), _ = Math.max(0, g / 2 - Fr.POPUP_WIDTH / 2 + h)), window.open(e, n, "width=" + v + ", height=" + C + ", top=" + b + ", left=" + _ + ", scrollbars=yes");
    }, t.prototype.unloadWindow = function(e) {
      this.browserStorage.cleanRequestByInteractionType(re.Popup), this.currentWindow && this.currentWindow.close(), e.preventDefault();
    }, t.prototype.cleanPopup = function(e) {
      e && e.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, t.prototype.generatePopupName = function(e, n) {
      return Fr.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + e.join("-") + "." + n + "." + this.correlationId;
    }, t.prototype.generateLogoutPopupName = function(e) {
      var n = e.account && e.account.homeAccountId;
      return Fr.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + n + "." + this.correlationId;
    }, t;
  }(Yo)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var mT = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.navigateInternal = function(t, e) {
      return r.defaultNavigateWindow(t, e);
    }, r.prototype.navigateExternal = function(t, e) {
      return r.defaultNavigateWindow(t, e);
    }, r.defaultNavigateWindow = function(t, e) {
      return e.noHistory ? window.location.replace(t) : window.location.assign(t), new Promise(function(n) {
        setTimeout(function() {
          n(!0);
        }, e.timeout);
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var vT = 6e4, Il = 6e3, yT = 3e4, CT = 2e3;
function ET(r, t) {
  var e = r.auth, n = r.cache, o = r.system, a = r.telemetry, c = {
    clientId: P.EMPTY_STRING,
    authority: "" + P.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: P.EMPTY_STRING,
    authorityMetadata: P.EMPTY_STRING,
    redirectUri: P.EMPTY_STRING,
    postLogoutRedirectUri: P.EMPTY_STRING,
    navigateToLoginRequestUrl: !0,
    clientCapabilities: [],
    protocolMode: xi.AAD,
    azureCloudOptions: {
      azureCloudInstance: Mi.None,
      tenant: P.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, l = {
    cacheLocation: gt.SessionStorage,
    temporaryCacheLocation: gt.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(n && n.cacheLocation === gt.LocalStorage),
    claimsBasedCachingEnabled: !0
  }, u = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: st.Info,
    piiLoggingEnabled: !1
  }, h = ae(ae({}, Tp), {
    loggerOptions: u,
    networkClient: t ? ct.getBrowserNetworkClient() : iT,
    navigationClient: new mT(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || vT,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Il,
    navigateFrameWait: t && ct.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: yT,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || CT,
    pollIntervalMilliseconds: Fr.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), f = ae(ae({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || u }), g = {
    application: {
      appName: P.EMPTY_STRING,
      appVersion: P.EMPTY_STRING
    }
  }, m = {
    auth: ae(ae({}, c), e),
    cache: ae(ae({}, l), n),
    system: ae(ae({}, h), f),
    telemetry: ae(ae({}, g), a)
  };
  return m;
}
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Mp = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l) {
      var u = r.call(this, e, n, o, a, l) || this;
      return u.navigateFrameWait = c.navigateFrameWait, u.pollIntervalMilliseconds = c.pollIntervalMilliseconds, u;
    }
    return t.prototype.initiateAuthRequest = function(e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(U.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), X.isEmpty(e))
                throw this.logger.info("Navigate url is empty"), Q.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(U.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(e)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return [2, this.loadFrameSync(e)];
          }
        });
      });
    }, t.prototype.monitorIframeForHash = function(e, n) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(U.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(a, c) {
        n < Il && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + Il + "ms). This may result in timeouts.");
        var l = window.performance.now(), u = l + n, h = setInterval(function() {
          if (window.performance.now() > u) {
            o.removeHiddenIframe(e), clearInterval(h), c(Q.createMonitorIframeTimeoutError());
            return;
          }
          var f = P.EMPTY_STRING, g = e.contentWindow;
          try {
            f = g ? g.location.href : P.EMPTY_STRING;
          } catch {
          }
          if (!X.isEmpty(f)) {
            var m = g ? g.location.hash : P.EMPTY_STRING;
            if (Ue.hashContainsKnownProperties(m)) {
              o.removeHiddenIframe(e), clearInterval(h), a(m);
              return;
            }
          }
        }, o.pollIntervalMilliseconds);
      });
    }, t.prototype.loadFrame = function(e) {
      var n = this;
      return this.performanceClient.addQueueMeasurement(U.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, a) {
        var c = n.createHiddenIframe();
        setTimeout(function() {
          if (!c) {
            a("Unable to load iframe");
            return;
          }
          c.src = e, o(c);
        }, n.navigateFrameWait);
      });
    }, t.prototype.loadFrameSync = function(e) {
      var n = this.createHiddenIframe();
      return n.src = e, n;
    }, t.prototype.createHiddenIframe = function() {
      var e = document.createElement("iframe");
      return e.style.visibility = "hidden", e.style.position = "absolute", e.style.width = e.style.height = "0", e.style.border = "0", e.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), document.getElementsByTagName("body")[0].appendChild(e), e;
    }, t.prototype.removeHiddenIframe = function(e) {
      document.body === e.parentNode && document.body.removeChild(e);
    }, t;
  }(ql)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var wT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l, u, h, f, g, m) {
      var v = r.call(this, e, n, o, a, c, l, h, g, m) || this;
      return v.apiId = u, v.nativeStorage = f, v;
    }
    return t.prototype.acquireToken = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l;
        return $(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(U.SilentIframeClientAcquireToken, e.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(U.SilentIframeClientAcquireToken, e.correlationId), X.isEmpty(e.loginHint) && X.isEmpty(e.sid) && (!e.account || X.isEmpty(e.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), e.prompt && e.prompt !== Ft.NONE && e.prompt !== Ft.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), Q.createSilentPromptValueError(e.prompt);
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, e.correlationId), [4, this.initializeAuthorizationRequest(ae(ae({}, e), { prompt: e.prompt || Ft.NONE }), re.Silent)];
            case 1:
              o = u.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || P.EMPTY_STRING, o.account || null), a = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(U.StandardInteractionClientCreateAuthCodeClient, e.correlationId), [4, this.createAuthCodeClient(a, o.authority, o.azureCloudOptions)];
            case 3:
              return c = u.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(U.SilentIframeClientTokenHelper, e.correlationId), [4, this.silentTokenHelper(c, o).then(function(h) {
                return n.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: h.requestId
                }), h;
              })];
            case 4:
              return [2, u.sent()];
            case 5:
              throw l = u.sent(), l instanceof ue && l.setCorrelationId(this.correlationId), a.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: l instanceof ue && l.errorCode || void 0,
                subErrorCode: l instanceof ue && l.subError || void 0,
                success: !1
              }), l;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.logout = function() {
      return Promise.reject(Q.createSilentLogoutUnsupportedError());
    }, t.prototype.silentTokenHelper = function(e, n) {
      return q(this, void 0, void 0, function() {
        var o, a, c, l, u, h, f, g, m, v = this;
        return $(this, function(C) {
          switch (C.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = C.sent(), this.performanceClient.setPreQueueTime(U.GetAuthCodeUrl, n.correlationId), [4, e.getAuthCodeUrl(ae(ae({}, n), { nativeBroker: io.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return a = C.sent(), c = new Mp(e, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(U.SilentHandlerInitiateAuthRequest, n.correlationId), [4, c.initiateAuthRequest(a)];
            case 3:
              return l = C.sent(), this.performanceClient.setPreQueueTime(U.SilentHandlerMonitorIframeForHash, n.correlationId), [4, c.monitorIframeForHash(l, this.config.system.iframeHashTimeout)];
            case 4:
              if (u = C.sent(), h = Ue.getDeserializedHash(u), f = this.validateAndExtractStateFromHash(h, re.Silent, o.correlationId), h.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw Q.createNativeConnectionNotEstablishedError();
                return g = new Fo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, h.accountId, this.browserStorage, this.correlationId), m = yn.parseRequestState(this.browserCrypto, f).userRequestState, [2, g.acquireToken(ae(ae({}, n), { state: m, prompt: n.prompt || Ft.NONE })).finally(function() {
                  v.browserStorage.cleanRequestByState(f);
                })];
              }
              return this.performanceClient.setPreQueueTime(U.HandleCodeResponseFromHash, n.correlationId), [2, c.handleCodeResponseFromHash(u, f, e.authority, this.networkClient)];
          }
        });
      });
    }, t;
  }(Yo)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var bT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.acquireToken = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u = this;
        return $(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.SilentRefreshClientAcquireToken, e.correlationId), this.performanceClient.setPreQueueTime(U.InitializeBaseRequest, e.correlationId), o = [ae({}, e)], [4, this.initializeBaseRequest(e, e.account)];
            case 1:
              return n = ae.apply(void 0, o.concat([h.sent()])), a = this.performanceClient.startMeasurement(U.SilentRefreshClientAcquireToken, n.correlationId), c = this.initializeServerTelemetryManager(Ze.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(c, n.authority, n.azureCloudOptions)];
            case 2:
              return l = h.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(U.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), [2, l.acquireTokenByRefreshToken(n).then(function(f) {
                return a.endMeasurement({
                  success: !0,
                  fromCache: f.fromCache,
                  requestId: f.requestId
                }), f;
              }).catch(function(f) {
                throw f instanceof ue && f.setCorrelationId(u.correlationId), c.cacheFailedRequest(f), a.endMeasurement({
                  errorCode: f.errorCode,
                  subErrorCode: f.subError,
                  success: !1
                }), f;
              })];
          }
        });
      });
    }, t.prototype.logout = function() {
      return Promise.reject(Q.createSilentLogoutUnsupportedError());
    }, t.prototype.createRefreshTokenClient = function(e, n, o) {
      return q(this, void 0, void 0, function() {
        var a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(e, n, o)];
            case 1:
              return a = c.sent(), [2, new Ap(a, this.performanceClient)];
          }
        });
      });
    }, t;
  }(Yo)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var _T = (
  /** @class */
  function() {
    function r(t, e) {
      this.eventCallbacks = /* @__PURE__ */ new Map(), this.logger = t, this.browserCrypto = e, this.listeningToStorageEvents = !1, this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
    }
    return r.prototype.addEventCallback = function(t) {
      if (typeof window < "u") {
        var e = this.browserCrypto.createNewGuid();
        return this.eventCallbacks.set(e, t), this.logger.verbose("Event callback registered with id: " + e), e;
      }
      return null;
    }, r.prototype.removeEventCallback = function(t) {
      this.eventCallbacks.delete(t), this.logger.verbose("Event callback " + t + " removed.");
    }, r.prototype.enableAccountStorageEvents = function() {
      typeof window > "u" || (this.listeningToStorageEvents ? this.logger.verbose("Account storage listener already registered.") : (this.logger.verbose("Adding account storage listener."), this.listeningToStorageEvents = !0, window.addEventListener("storage", this.handleAccountCacheChange)));
    }, r.prototype.disableAccountStorageEvents = function() {
      typeof window > "u" || (this.listeningToStorageEvents ? (this.logger.verbose("Removing account storage listener."), window.removeEventListener("storage", this.handleAccountCacheChange), this.listeningToStorageEvents = !1) : this.logger.verbose("No account storage listener registered."));
    }, r.prototype.emitEvent = function(t, e, n, o) {
      var a = this;
      if (typeof window < "u") {
        var c = {
          eventType: t,
          interactionType: e || null,
          payload: n || null,
          error: o || null,
          timestamp: Date.now()
        };
        this.logger.info("Emitting event: " + t), this.eventCallbacks.forEach(function(l, u) {
          a.logger.verbose("Emitting event to callback " + u + ": " + t), l.apply(null, [c]);
        });
      }
    }, r.prototype.handleAccountCacheChange = function(t) {
      try {
        var e = t.newValue || t.oldValue;
        if (!e)
          return;
        var n = JSON.parse(e);
        if (typeof n != "object" || !Rt.isAccountEntity(n))
          return;
        var o = er.toObject(new Rt(), n), a = o.getAccountInfo();
        !t.oldValue && t.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(le.ACCOUNT_ADDED, void 0, a)) : !t.newValue && t.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(le.ACCOUNT_REMOVED, void 0, a));
      } catch {
        return;
      }
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Dt = (
  /** @class */
  function() {
    function r() {
    }
    return r.decimalToHex = function(t) {
      for (var e = t.toString(16); e.length < 2; )
        e = "0" + e;
      return e;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var xp = (
  /** @class */
  function() {
    function r(t) {
      this.cryptoObj = t;
    }
    return r.prototype.generateGuid = function() {
      try {
        var t = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(t), t[6] |= 64, t[6] &= 79, t[8] |= 128, t[8] &= 191, Dt.decimalToHex(t[0]) + Dt.decimalToHex(t[1]) + Dt.decimalToHex(t[2]) + Dt.decimalToHex(t[3]) + "-" + Dt.decimalToHex(t[4]) + Dt.decimalToHex(t[5]) + "-" + Dt.decimalToHex(t[6]) + Dt.decimalToHex(t[7]) + "-" + Dt.decimalToHex(t[8]) + Dt.decimalToHex(t[9]) + "-" + Dt.decimalToHex(t[10]) + Dt.decimalToHex(t[11]) + Dt.decimalToHex(t[12]) + Dt.decimalToHex(t[13]) + Dt.decimalToHex(t[14]) + Dt.decimalToHex(t[15]);
      } catch {
        for (var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef", o = 0, a = P.EMPTY_STRING, c = 0; c < 36; c++)
          e[c] !== "-" && e[c] !== "4" && (o = Math.random() * 16 | 0), e[c] === "x" ? a += n[o] : e[c] === "y" ? (o &= 3, o |= 8, a += n[o]) : a += e[c];
        return a;
      }
    }, r.prototype.isGuid = function(t) {
      var e = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return e.test(t);
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Cn = (
  /** @class */
  function() {
    function r() {
    }
    return r.stringToUtf8Arr = function(t) {
      for (var e, n = 0, o = t.length, a = 0; a < o; a++)
        e = t.charCodeAt(a), n += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : e < 2097152 ? 4 : e < 67108864 ? 5 : 6;
      for (var c = new Uint8Array(n), l = 0, u = 0; l < n; u++)
        e = t.charCodeAt(u), e < 128 ? c[l++] = e : e < 2048 ? (c[l++] = 192 + (e >>> 6), c[l++] = 128 + (e & 63)) : e < 65536 ? (c[l++] = 224 + (e >>> 12), c[l++] = 128 + (e >>> 6 & 63), c[l++] = 128 + (e & 63)) : e < 2097152 ? (c[l++] = 240 + (e >>> 18), c[l++] = 128 + (e >>> 12 & 63), c[l++] = 128 + (e >>> 6 & 63), c[l++] = 128 + (e & 63)) : e < 67108864 ? (c[l++] = 248 + (e >>> 24), c[l++] = 128 + (e >>> 18 & 63), c[l++] = 128 + (e >>> 12 & 63), c[l++] = 128 + (e >>> 6 & 63), c[l++] = 128 + (e & 63)) : (c[l++] = 252 + (e >>> 30), c[l++] = 128 + (e >>> 24 & 63), c[l++] = 128 + (e >>> 18 & 63), c[l++] = 128 + (e >>> 12 & 63), c[l++] = 128 + (e >>> 6 & 63), c[l++] = 128 + (e & 63));
      return c;
    }, r.stringToArrayBuffer = function(t) {
      for (var e = new ArrayBuffer(t.length), n = new Uint8Array(e), o = 0; o < t.length; o++)
        n[o] = t.charCodeAt(o);
      return e;
    }, r.utf8ArrToString = function(t) {
      for (var e = P.EMPTY_STRING, n = void 0, o = t.length, a = 0; a < o; a++)
        n = t[a], e += String.fromCharCode(n > 251 && n < 254 && a + 5 < o ? (
          /* six bytes */
          /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (n - 252) * 1073741824 + (t[++a] - 128 << 24) + (t[++a] - 128 << 18) + (t[++a] - 128 << 12) + (t[++a] - 128 << 6) + t[++a] - 128
        ) : n > 247 && n < 252 && a + 4 < o ? (
          /* five bytes */
          (n - 248 << 24) + (t[++a] - 128 << 18) + (t[++a] - 128 << 12) + (t[++a] - 128 << 6) + t[++a] - 128
        ) : n > 239 && n < 248 && a + 3 < o ? (
          /* four bytes */
          (n - 240 << 18) + (t[++a] - 128 << 12) + (t[++a] - 128 << 6) + t[++a] - 128
        ) : n > 223 && n < 240 && a + 2 < o ? (
          /* three bytes */
          (n - 224 << 12) + (t[++a] - 128 << 6) + t[++a] - 128
        ) : n > 191 && n < 224 && a + 1 < o ? (
          /* two bytes */
          (n - 192 << 6) + t[++a] - 128
        ) : (
          /* nPart < 127 ? */
          /* one byte */
          n
        ));
      return e;
    }, r.getSortedObjectString = function(t) {
      return JSON.stringify(t, Object.keys(t).sort());
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Lp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(t) {
      return encodeURIComponent(this.encode(t).replace(/=/g, P.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(t) {
      return this.base64EncArr(t).replace(/=/g, P.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(t) {
      var e = Cn.stringToUtf8Arr(t);
      return this.base64EncArr(e);
    }, r.prototype.base64EncArr = function(t) {
      for (var e = (3 - t.length % 3) % 3, n = P.EMPTY_STRING, o = void 0, a = t.length, c = 0, l = 0; l < a; l++)
        o = l % 3, c |= t[l] << (16 >>> o & 24), (o === 2 || t.length - l === 1) && (n += String.fromCharCode(this.uint6ToB64(c >>> 18 & 63), this.uint6ToB64(c >>> 12 & 63), this.uint6ToB64(c >>> 6 & 63), this.uint6ToB64(c & 63)), c = 0);
      return e === 0 ? n : n.substring(0, n.length - e) + (e === 1 ? "=" : "==");
    }, r.prototype.uint6ToB64 = function(t) {
      return t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t === 62 ? 43 : t === 63 ? 47 : 65;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var ST = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(t) {
      var e = t.replace(/-/g, "+").replace(/_/g, "/");
      switch (e.length % 4) {
        case 0:
          break;
        case 2:
          e += "==";
          break;
        case 3:
          e += "=";
          break;
        default:
          throw new Error("Invalid base64 string");
      }
      var n = this.base64DecToArr(e);
      return Cn.utf8ArrToString(n);
    }, r.prototype.base64DecToArr = function(t, e) {
      for (var n = t.replace(/[^A-Za-z0-9\+\/]/g, P.EMPTY_STRING), o = n.length, a = e ? Math.ceil((o * 3 + 1 >>> 2) / e) * e : o * 3 + 1 >>> 2, c = new Uint8Array(a), l = void 0, u = void 0, h = 0, f = 0, g = 0; g < o; g++)
        if (u = g & 3, h |= this.b64ToUint6(n.charCodeAt(g)) << 18 - 6 * u, u === 3 || o - g === 1) {
          for (l = 0; l < 3 && f < a; l++, f++)
            c[f] = h >>> (16 >>> l & 24) & 255;
          h = 0;
        }
      return c;
    }, r.prototype.b64ToUint6 = function(t) {
      return t > 64 && t < 91 ? t - 65 : t > 96 && t < 123 ? t - 71 : t > 47 && t < 58 ? t + 4 : t === 43 ? 62 : t === 47 ? 63 : 0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var TT = 32, IT = (
  /** @class */
  function() {
    function r(t) {
      this.base64Encode = new Lp(), this.cryptoObj = t;
    }
    return r.prototype.generateCodes = function() {
      return q(this, void 0, void 0, function() {
        var t, e;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return t = this.generateCodeVerifier(), [4, this.generateCodeChallengeFromVerifier(t)];
            case 1:
              return e = n.sent(), [2, {
                verifier: t,
                challenge: e
              }];
          }
        });
      });
    }, r.prototype.generateCodeVerifier = function() {
      try {
        var t = new Uint8Array(TT);
        this.cryptoObj.getRandomValues(t);
        var e = this.base64Encode.urlEncodeArr(t);
        return e;
      } catch (n) {
        throw Q.createPkceNotGeneratedError(n);
      }
    }, r.prototype.generateCodeChallengeFromVerifier = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(t)];
            case 1:
              return e = o.sent(), [2, this.base64Encode.urlEncodeArr(new Uint8Array(e))];
            case 2:
              throw n = o.sent(), Q.createPkceNotGeneratedError(n);
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
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var AT = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(t) {
      return window.crypto.getRandomValues(t);
    }, r.prototype.generateKey = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, window.crypto.subtle.generateKey(t, e, n)];
        });
      });
    }, r.prototype.exportKey = function(t) {
      return q(this, void 0, void 0, function() {
        return $(this, function(e) {
          return [2, window.crypto.subtle.exportKey(qo, t)];
        });
      });
    }, r.prototype.importKey = function(t, e, n, o) {
      return q(this, void 0, void 0, function() {
        return $(this, function(a) {
          return [2, window.crypto.subtle.importKey(qo, t, e, n, o)];
        });
      });
    }, r.prototype.sign = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, window.crypto.subtle.sign(t, e, n)];
        });
      });
    }, r.prototype.digest = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, window.crypto.subtle.digest(t, e)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var RT = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(t) {
      return window.msrCrypto.initPrng(Hl(t));
    }, r.prototype.getRandomValues = function(t) {
      return window.msrCrypto.getRandomValues(t);
    }, r.prototype.generateKey = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, window.msrCrypto.subtle.generateKey(t, e, n)];
        });
      });
    }, r.prototype.exportKey = function(t) {
      return q(this, void 0, void 0, function() {
        return $(this, function(e) {
          return [2, window.msrCrypto.subtle.exportKey(qo, t)];
        });
      });
    }, r.prototype.importKey = function(t, e, n, o) {
      return q(this, void 0, void 0, function() {
        return $(this, function(a) {
          return [2, window.msrCrypto.subtle.importKey(qo, t, e, n, o)];
        });
      });
    }, r.prototype.sign = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, window.msrCrypto.subtle.sign(t, e, n)];
        });
      });
    }, r.prototype.digest = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, window.msrCrypto.subtle.digest(t, e)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var kT = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(t) {
      return window.msCrypto.getRandomValues(t);
    }, r.prototype.generateKey = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, new Promise(function(a, c) {
            var l = window.msCrypto.subtle.generateKey(t, e, n);
            l.addEventListener("complete", function(u) {
              a(u.target.result);
            }), l.addEventListener("error", function(u) {
              c(u);
            });
          })];
        });
      });
    }, r.prototype.exportKey = function(t) {
      return q(this, void 0, void 0, function() {
        return $(this, function(e) {
          return [2, new Promise(function(n, o) {
            var a = window.msCrypto.subtle.exportKey(qo, t);
            a.addEventListener("complete", function(c) {
              var l = c.target.result, u = Cn.utf8ArrToString(new Uint8Array(l)).replace(/\r/g, P.EMPTY_STRING).replace(/\n/g, P.EMPTY_STRING).replace(/\t/g, P.EMPTY_STRING).split(" ").join(P.EMPTY_STRING).replace("\0", P.EMPTY_STRING);
              try {
                n(JSON.parse(u));
              } catch (h) {
                o(h);
              }
            }), a.addEventListener("error", function(c) {
              o(c);
            });
          })];
        });
      });
    }, r.prototype.importKey = function(t, e, n, o) {
      return q(this, void 0, void 0, function() {
        var a, c;
        return $(this, function(l) {
          return a = Cn.getSortedObjectString(t), c = Cn.stringToArrayBuffer(a), [2, new Promise(function(u, h) {
            var f = window.msCrypto.subtle.importKey(qo, c, e, n, o);
            f.addEventListener("complete", function(g) {
              u(g.target.result);
            }), f.addEventListener("error", function(g) {
              h(g);
            });
          })];
        });
      });
    }, r.prototype.sign = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, new Promise(function(a, c) {
            var l = window.msCrypto.subtle.sign(t, e, n);
            l.addEventListener("complete", function(u) {
              a(u.target.result);
            }), l.addEventListener("error", function(u) {
              c(u);
            });
          })];
        });
      });
    }, r.prototype.digest = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, new Promise(function(o, a) {
            var c = window.msCrypto.subtle.digest(t, e.buffer);
            c.addEventListener("complete", function(l) {
              o(l.target.result);
            }), c.addEventListener("error", function(l) {
              a(l);
            });
          })];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var PT = "RSASSA-PKCS1-v1_5", Lf = "SHA-256", NT = 2048, OT = new Uint8Array([1, 0, 1]), Dp = (
  /** @class */
  function() {
    function r(t, e) {
      var n, o;
      if (this.logger = t, this.cryptoOptions = e, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new AT();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new kT();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new RT();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), Q.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Et.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: PT,
        hash: Lf,
        modulusLength: NT,
        publicExponent: OT
      };
    }
    return r.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    }, r.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    }, r.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    }, r.prototype.sha256Digest = function(t) {
      return q(this, void 0, void 0, function() {
        var e;
        return $(this, function(n) {
          return e = Cn.stringToUtf8Arr(t), [2, this.subtleCrypto.digest({ name: Lf }, e)];
        });
      });
    }, r.prototype.getRandomValues = function(t) {
      return this.subtleCrypto.getRandomValues(t);
    }, r.prototype.generateKeyPair = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, t, e)];
        });
      });
    }, r.prototype.exportJwk = function(t) {
      return q(this, void 0, void 0, function() {
        return $(this, function(e) {
          return [2, this.subtleCrypto.exportKey(t)];
        });
      });
    }, r.prototype.importJwk = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          return [2, this.subtleCrypto.importKey(t, this.keygenAlgorithmOptions, e, n)];
        });
      });
    }, r.prototype.sign = function(t, e) {
      return q(this, void 0, void 0, function() {
        return $(this, function(n) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, t, e)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var MT = (
  /** @class */
  function() {
    function r() {
      this.dbName = _l, this.version = lT, this.tableName = uT, this.dbOpen = !1;
    }
    return r.prototype.open = function() {
      return q(this, void 0, void 0, function() {
        var t = this;
        return $(this, function(e) {
          return [2, new Promise(function(n, o) {
            var a = window.indexedDB.open(t.dbName, t.version);
            a.addEventListener("upgradeneeded", function(c) {
              var l = c;
              l.target.result.createObjectStore(t.tableName);
            }), a.addEventListener("success", function(c) {
              var l = c;
              t.db = l.target.result, t.dbOpen = !0, n();
            }), a.addEventListener("error", function() {
              return o(Q.createDatabaseUnavailableError());
            });
          })];
        });
      });
    }, r.prototype.closeConnection = function() {
      var t = this.db;
      t && this.dbOpen && (t.close(), this.dbOpen = !1);
    }, r.prototype.validateDbIsOpen = function() {
      return q(this, void 0, void 0, function() {
        return $(this, function(t) {
          switch (t.label) {
            case 0:
              return this.dbOpen ? [3, 2] : [4, this.open()];
            case 1:
              return [2, t.sent()];
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getItem = function(t) {
      return q(this, void 0, void 0, function() {
        var e = this;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, a) {
                if (!e.db)
                  return a(Q.createDatabaseNotOpenError());
                var c = e.db.transaction([e.tableName], "readonly"), l = c.objectStore(e.tableName), u = l.get(t);
                u.addEventListener("success", function(h) {
                  var f = h;
                  e.closeConnection(), o(f.target.result);
                }), u.addEventListener("error", function(h) {
                  e.closeConnection(), a(h);
                });
              })];
          }
        });
      });
    }, r.prototype.setItem = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n = this;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return o.sent(), [2, new Promise(function(a, c) {
                if (!n.db)
                  return c(Q.createDatabaseNotOpenError());
                var l = n.db.transaction([n.tableName], "readwrite"), u = l.objectStore(n.tableName), h = u.put(e, t);
                h.addEventListener("success", function() {
                  n.closeConnection(), a();
                }), h.addEventListener("error", function(f) {
                  n.closeConnection(), c(f);
                });
              })];
          }
        });
      });
    }, r.prototype.removeItem = function(t) {
      return q(this, void 0, void 0, function() {
        var e = this;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, a) {
                if (!e.db)
                  return a(Q.createDatabaseNotOpenError());
                var c = e.db.transaction([e.tableName], "readwrite"), l = c.objectStore(e.tableName), u = l.delete(t);
                u.addEventListener("success", function() {
                  e.closeConnection(), o();
                }), u.addEventListener("error", function(h) {
                  e.closeConnection(), a(h);
                });
              })];
          }
        });
      });
    }, r.prototype.getKeys = function() {
      return q(this, void 0, void 0, function() {
        var t = this;
        return $(this, function(e) {
          switch (e.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return e.sent(), [2, new Promise(function(n, o) {
                if (!t.db)
                  return o(Q.createDatabaseNotOpenError());
                var a = t.db.transaction([t.tableName], "readonly"), c = a.objectStore(t.tableName), l = c.getAllKeys();
                l.addEventListener("success", function(u) {
                  var h = u;
                  t.closeConnection(), n(h.target.result);
                }), l.addEventListener("error", function(u) {
                  t.closeConnection(), o(u);
                });
              })];
          }
        });
      });
    }, r.prototype.containsKey = function(t) {
      return q(this, void 0, void 0, function() {
        var e = this;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, a) {
                if (!e.db)
                  return a(Q.createDatabaseNotOpenError());
                var c = e.db.transaction([e.tableName], "readonly"), l = c.objectStore(e.tableName), u = l.count(t);
                u.addEventListener("success", function(h) {
                  var f = h;
                  e.closeConnection(), o(f.target.result === 1);
                }), u.addEventListener("error", function(h) {
                  e.closeConnection(), a(h);
                });
              })];
          }
        });
      });
    }, r.prototype.deleteDatabase = function() {
      return q(this, void 0, void 0, function() {
        return $(this, function(t) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(e, n) {
            var o = window.indexedDB.deleteDatabase(_l);
            o.addEventListener("success", function() {
              return e(!0);
            }), o.addEventListener("blocked", function() {
              return e(!0);
            }), o.addEventListener("error", function() {
              return n(!1);
            });
          })];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Df = (
  /** @class */
  function() {
    function r(t, e) {
      this.inMemoryCache = new Sl(), this.indexedDBCache = new MT(), this.logger = t, this.storeName = e;
    }
    return r.prototype.handleDatabaseAccessError = function(t) {
      if (t instanceof Q && t.errorCode === V.databaseUnavailable.code)
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      else
        throw t;
    }, r.prototype.getItem = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              if (e = this.inMemoryCache.getItem(t), e)
                return [3, 4];
              o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage."), [4, this.indexedDBCache.getItem(t)];
            case 2:
              return [2, o.sent()];
            case 3:
              return n = o.sent(), this.handleDatabaseAccessError(n), [3, 4];
            case 4:
              return [2, e];
          }
        });
      });
    }, r.prototype.setItem = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              this.inMemoryCache.setItem(t, e), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.indexedDBCache.setItem(t, e)];
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
    }, r.prototype.removeItem = function(t) {
      return q(this, void 0, void 0, function() {
        var e;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              this.inMemoryCache.removeItem(t), n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), [4, this.indexedDBCache.removeItem(t)];
            case 2:
              return n.sent(), [3, 4];
            case 3:
              return e = n.sent(), this.handleDatabaseAccessError(e), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getKeys = function() {
      return q(this, void 0, void 0, function() {
        var t, e;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              if (t = this.inMemoryCache.getKeys(), t.length !== 0)
                return [3, 4];
              n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), this.logger.verbose("In-memory cache is empty, now querying persistent storage."), [4, this.indexedDBCache.getKeys()];
            case 2:
              return [2, n.sent()];
            case 3:
              return e = n.sent(), this.handleDatabaseAccessError(e), [3, 4];
            case 4:
              return [2, t];
          }
        });
      });
    }, r.prototype.containsKey = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              if (e = this.inMemoryCache.containsKey(t), e)
                return [3, 4];
              o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), this.logger.verbose("Key not found in in-memory cache, now querying persistent storage."), [4, this.indexedDBCache.containsKey(t)];
            case 2:
              return [2, o.sent()];
            case 3:
              return n = o.sent(), this.handleDatabaseAccessError(n), [3, 4];
            case 4:
              return [2, e];
          }
        });
      });
    }, r.prototype.clearInMemory = function() {
      this.logger.verbose("Deleting in-memory keystore " + this.storeName), this.inMemoryCache.clear(), this.logger.verbose("In-memory keystore " + this.storeName + " deleted");
    }, r.prototype.clearPersistent = function() {
      return q(this, void 0, void 0, function() {
        var t, e;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), this.logger.verbose("Deleting persistent keystore"), [4, this.indexedDBCache.deleteDatabase()];
            case 1:
              return t = n.sent(), t && this.logger.verbose("Persistent keystore deleted"), [2, t];
            case 2:
              return e = n.sent(), this.handleDatabaseAccessError(e), [2, !1];
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
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var os;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(os || (os = {}));
var xT = (
  /** @class */
  function() {
    function r(t) {
      this.logger = t, this.asymmetricKeys = new Df(this.logger, os.asymmetricKeys), this.symmetricKeys = new Df(this.logger, os.symmetricKeys);
    }
    return r.prototype.clear = function() {
      return q(this, void 0, void 0, function() {
        var t;
        return $(this, function(e) {
          switch (e.label) {
            case 0:
              this.asymmetricKeys.clearInMemory(), this.symmetricKeys.clearInMemory(), e.label = 1;
            case 1:
              return e.trys.push([1, 3, , 4]), [4, this.asymmetricKeys.clearPersistent()];
            case 2:
              return e.sent(), [2, !0];
            case 3:
              return t = e.sent(), t instanceof Error ? this.logger.error("Clearing keystore failed with error: " + t.message) : this.logger.error("Clearing keystore failed with unknown error"), [2, !1];
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
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var LT = (
  /** @class */
  function() {
    function r(t, e, n) {
      this.logger = t, this.browserCrypto = new Dp(this.logger, n), this.b64Encode = new Lp(), this.b64Decode = new ST(), this.guidGenerator = new xp(this.browserCrypto), this.pkceGenerator = new IT(this.browserCrypto), this.cache = new xT(this.logger), this.performanceClient = e;
    }
    return r.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    }, r.prototype.base64Encode = function(t) {
      return this.b64Encode.encode(t);
    }, r.prototype.base64Decode = function(t) {
      return this.b64Decode.decode(t);
    }, r.prototype.generatePkceCodes = function() {
      return q(this, void 0, void 0, function() {
        return $(this, function(t) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    }, r.prototype.getPublicKeyThumbprint = function(t) {
      var e;
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h, f;
        return $(this, function(g) {
          switch (g.label) {
            case 0:
              return n = (e = this.performanceClient) === null || e === void 0 ? void 0 : e.startMeasurement(U.CryptoOptsGetPublicKeyThumbprint, t.correlationId), [4, this.browserCrypto.generateKeyPair(r.EXTRACTABLE, r.POP_KEY_USAGES)];
            case 1:
              return o = g.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return a = g.sent(), c = {
                e: a.e,
                kty: a.kty,
                n: a.n
              }, l = Cn.getSortedObjectString(c), [4, this.hashString(l)];
            case 3:
              return u = g.sent(), [4, this.browserCrypto.exportJwk(o.privateKey)];
            case 4:
              return h = g.sent(), [4, this.browserCrypto.importJwk(h, !1, ["sign"])];
            case 5:
              return f = g.sent(), [4, this.cache.asymmetricKeys.setItem(u, {
                privateKey: f,
                publicKey: o.publicKey,
                requestMethod: t.resourceRequestMethod,
                requestUri: t.resourceRequestUri
              })];
            case 6:
              return g.sent(), n && n.endMeasurement({
                success: !0
              }), [2, u];
          }
        });
      });
    }, r.prototype.removeTokenBindingKey = function(t) {
      return q(this, void 0, void 0, function() {
        var e;
        return $(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.cache.asymmetricKeys.removeItem(t)];
            case 1:
              return n.sent(), [4, this.cache.asymmetricKeys.containsKey(t)];
            case 2:
              return e = n.sent(), [2, !e];
          }
        });
      });
    }, r.prototype.clearKeystore = function() {
      return q(this, void 0, void 0, function() {
        return $(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.cache.clear()];
            case 1:
              return [2, t.sent()];
          }
        });
      });
    }, r.prototype.signJwt = function(t, e, n) {
      var o;
      return q(this, void 0, void 0, function() {
        var a, c, l, u, h, f, g, m, v, C, b, _, A;
        return $(this, function(I) {
          switch (I.label) {
            case 0:
              return a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(U.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(e)];
            case 1:
              if (c = I.sent(), !c)
                throw Q.createSigningKeyNotFoundInStorageError(e);
              return [4, this.browserCrypto.exportJwk(c.publicKey)];
            case 2:
              return l = I.sent(), u = Cn.getSortedObjectString(l), h = this.b64Encode.urlEncode(JSON.stringify({ kid: e })), f = aT.getShrHeaderString({ kid: h, alg: l.alg }), g = this.b64Encode.urlEncode(f), t.cnf = {
                jwk: JSON.parse(u)
              }, m = this.b64Encode.urlEncode(JSON.stringify(t)), v = g + "." + m, C = Cn.stringToArrayBuffer(v), [4, this.browserCrypto.sign(c.privateKey, C)];
            case 3:
              return b = I.sent(), _ = this.b64Encode.urlEncodeArr(new Uint8Array(b)), A = v + "." + _, a && a.endMeasurement({
                success: !0
              }), [2, A];
          }
        });
      });
    }, r.prototype.hashString = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n;
        return $(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.browserCrypto.sha256Digest(t)];
            case 1:
              return e = o.sent(), n = new Uint8Array(e), [2, this.b64Encode.urlEncodeArr(n)];
          }
        });
      });
    }, r.POP_KEY_USAGES = ["sign", "verify"], r.EXTRACTABLE = !0, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var Uf = (
  /** @class */
  function() {
    function r(t, e) {
      this.correlationId = e, this.measureName = r.makeMeasureName(t, e), this.startMark = r.makeStartMark(t, e), this.endMark = r.makeEndMark(t, e);
    }
    return r.makeMeasureName = function(t, e) {
      return "msal.measure." + t + "." + e;
    }, r.makeStartMark = function(t, e) {
      return "msal.start." + t + "." + e;
    }, r.makeEndMark = function(t, e) {
      return "msal.end." + t + "." + e;
    }, r.supportsBrowserPerformance = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.mark == "function" && typeof window.performance.measure == "function" && typeof window.performance.clearMarks == "function" && typeof window.performance.clearMeasures == "function" && typeof window.performance.getEntriesByName == "function";
    }, r.flushMeasurements = function(t, e) {
      if (r.supportsBrowserPerformance())
        try {
          e.forEach(function(n) {
            var o = r.makeMeasureName(n.name, t), a = window.performance.getEntriesByName(o, "measure");
            a.length > 0 && (window.performance.clearMeasures(o), window.performance.clearMarks(r.makeStartMark(o, t)), window.performance.clearMarks(r.makeEndMark(o, t)));
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
          var t = window.performance.getEntriesByName(this.measureName, "measure");
          if (t.length > 0) {
            var e = t[0].duration;
            return window.performance.clearMeasures(this.measureName), window.performance.clearMarks(this.startMark), window.performance.clearMarks(this.endMark), e;
          }
        } catch {
        }
      return null;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var DT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l, u) {
      var h = r.call(this, e, n, o, a, c, l) || this;
      return h.browserCrypto = new Dp(h.logger, u), h.guidGenerator = new xp(h.browserCrypto), h;
    }
    return t.prototype.startPerformanceMeasuremeant = function(e, n) {
      return new Uf(e, n);
    }, t.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, t.prototype.getPageVisibility = function() {
      var e;
      return ((e = document.visibilityState) === null || e === void 0 ? void 0 : e.toString()) || null;
    }, t.prototype.deleteIncompleteSubMeasurements = function(e) {
      var n = this.eventsByCorrelationId.get(e.event.correlationId), o = n && n.eventId === e.event.eventId, a = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(c) {
        a.push(ae({}, c));
      }), a.length > 0 && Uf.flushMeasurements(e.event.correlationId, a);
    }, t.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, t.prototype.startMeasurement = function(e, n) {
      var o = this, a = this.getPageVisibility(), c = r.prototype.startMeasurement.call(this, e, n);
      return ae(ae({}, c), { endMeasurement: function(l) {
        var u = c.endMeasurement(ae({ startPageVisibility: a, endPageVisibility: o.getPageVisibility() }, l));
        return o.deleteIncompleteSubMeasurements(c), u;
      }, discardMeasurement: function() {
        c.discardMeasurement(), o.deleteIncompleteSubMeasurements(c), c.measurement.flushMeasurement();
      } });
    }, t.prototype.setPreQueueTime = function(e, n) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to set telemetry queue time for " + e);
        return;
      }
      if (!n) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + e + " not provided, unable to set telemetry queue time");
        return;
      }
      var o = this.preQueueTimeByCorrelationId.get(n);
      o && (this.logger.trace("BrowserPerformanceClient: Incomplete pre-queue " + o.name + " found", n), this.addQueueMeasurement(o.name, n, void 0, !0)), this.preQueueTimeByCorrelationId.set(n, { name: e, time: window.performance.now() });
    }, t.prototype.addQueueMeasurement = function(e, n, o, a) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to add queue measurement for " + e);
        return;
      }
      if (!n) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + e + " not provided, unable to add queue measurement");
        return;
      }
      var c = r.prototype.getPreQueueTime.call(this, e, n);
      if (c) {
        var l = window.performance.now(), u = o || r.prototype.calculateQueuedTime.call(this, c, l);
        return r.prototype.addQueueMeasurement.call(this, e, n, u, a);
      }
    }, t;
  }(kp)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var UT = (
  /** @class */
  function() {
    function r(t, e, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = t, this.storage = e, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(t, e, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !e.id_token)
        throw Q.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new en(e.id_token, this.cryptoObj), a, c;
      if (t.account) {
        var l = this.loadAccount(o, t.account.environment, void 0, void 0, t.account.homeAccountId);
        a = new ki(l, this.loadIdToken(o, l.homeAccountId, t.account.environment, t.account.tenantId), this.loadAccessToken(t, e, l.homeAccountId, t.account.environment, t.account.tenantId, n), this.loadRefreshToken(t, e, l.homeAccountId, t.account.environment));
      } else if (t.authority) {
        var u = Li.generateAuthority(t.authority, t.azureCloudOptions), h = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (c = new Li(u, this.config.system.networkClient, this.storage, h, this.logger), n.clientInfo) {
          this.logger.trace("TokenCache - homeAccountId from options");
          var l = this.loadAccount(o, c.hostnameAndPort, n.clientInfo, c.authorityType);
          a = new ki(l, this.loadIdToken(o, l.homeAccountId, c.hostnameAndPort, c.tenant), this.loadAccessToken(t, e, l.homeAccountId, c.hostnameAndPort, c.tenant, n), this.loadRefreshToken(t, e, l.homeAccountId, c.hostnameAndPort));
        } else if (e.client_info) {
          this.logger.trace("TokenCache - homeAccountId from response");
          var l = this.loadAccount(o, c.hostnameAndPort, e.client_info, c.authorityType);
          a = new ki(l, this.loadIdToken(o, l.homeAccountId, c.hostnameAndPort, c.tenant), this.loadAccessToken(t, e, l.homeAccountId, c.hostnameAndPort, c.tenant, n), this.loadRefreshToken(t, e, l.homeAccountId, c.hostnameAndPort));
        } else
          throw Q.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw Q.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(t, o, a, c);
    }, r.prototype.loadAccount = function(t, e, n, o, a) {
      var c;
      if (a ? c = a : o !== void 0 && n && (c = Rt.generateHomeAccountId(n, o, this.logger, this.cryptoObj, t)), !c)
        throw Q.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var l = n ? Rt.createAccount(n, c, t, void 0, void 0, void 0, e) : Rt.createGenericAccount(c, t, void 0, void 0, void 0, e);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(l), l;
      throw Q.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(t, e, n, o) {
      var a = ro.createIdTokenEntity(e, n, t.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(a), a;
      throw Q.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(t, e, n, o, a, c) {
      if (!e.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!e.expires_in)
        throw Q.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!c.extendedExpiresOn)
        throw Q.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var l = new Ut(t.scopes).printScopes(), u = c.expiresOn || e.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, h = c.extendedExpiresOn, f = no.createAccessTokenEntity(n, o, e.access_token, this.config.auth.clientId, a, l, u, h, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(f), f;
      throw Q.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(t, e, n, o) {
      if (!e.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var a = Do.createRefreshTokenEntity(n, o, e.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(a), a;
      throw Q.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(t, e, n, o) {
      var a, c, l, u = P.EMPTY_STRING, h = [], f = null, g;
      n != null && n.accessToken && (u = n.accessToken.secret, h = Ut.fromString(n.accessToken.target).asArray(), f = new Date(Number(n.accessToken.expiresOn) * 1e3), g = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var m = (e == null ? void 0 : e.claims.oid) || (e == null ? void 0 : e.claims.sub) || P.EMPTY_STRING, v = (e == null ? void 0 : e.claims.tid) || P.EMPTY_STRING;
      return {
        authority: o ? o.canonicalAuthority : P.EMPTY_STRING,
        uniqueId: m,
        tenantId: v,
        scopes: h,
        account: n != null && n.account ? n.account.getAccountInfo() : null,
        idToken: e ? e.rawToken : P.EMPTY_STRING,
        idTokenClaims: e ? e.claims : {},
        accessToken: u,
        fromCache: !0,
        expiresOn: f,
        correlationId: t.correlationId || P.EMPTY_STRING,
        requestId: P.EMPTY_STRING,
        extExpiresOn: g,
        familyId: P.EMPTY_STRING,
        tokenType: ((a = n == null ? void 0 : n.accessToken) === null || a === void 0 ? void 0 : a.tokenType) || P.EMPTY_STRING,
        state: P.EMPTY_STRING,
        cloudGraphHostName: ((c = n == null ? void 0 : n.account) === null || c === void 0 ? void 0 : c.cloudGraphHostName) || P.EMPTY_STRING,
        msGraphHost: ((l = n == null ? void 0 : n.account) === null || l === void 0 ? void 0 : l.msGraphHost) || P.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: !1
      };
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var HT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.includeRedirectUri = !1, n;
    }
    return t;
  }(Ip)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var FT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e, n, o, a, c, l, u, h, f, g) {
      var m = r.call(this, e, n, o, a, c, l, h, f, g) || this;
      return m.apiId = u, m;
    }
    return t.prototype.acquireToken = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h;
        return $(this, function(f) {
          switch (f.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !e.code)
                throw Q.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(U.StandardInteractionClientInitializeAuthorizationRequest, e.correlationId), [4, this.initializeAuthorizationRequest(e, re.Silent)];
            case 1:
              n = f.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || P.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 5]), a = ae(ae({}, n), { code: e.code }), this.performanceClient.setPreQueueTime(U.StandardInteractionClientGetClientConfiguration, e.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return c = f.sent(), l = new HT(c), this.logger.verbose("Auth code client created"), u = new Mp(l, this.browserStorage, a, this.logger, this.config.system, this.performanceClient), [2, u.handleCodeResponseFromServer({
                code: e.code,
                msgraph_host: e.msGraphHost,
                cloud_graph_host_name: e.cloudGraphHostName,
                cloud_instance_host_name: e.cloudInstanceHostName
              }, n.state, l.authority, this.networkClient, !1)];
            case 4:
              throw h = f.sent(), h instanceof ue && h.setCorrelationId(this.correlationId), o.cacheFailedRequest(h), this.browserStorage.cleanRequestByState(n.state), h;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.logout = function() {
      return Promise.reject(Q.createSilentLogoutUnsupportedError());
    }, t;
  }(Yo)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var BT = (
  /** @class */
  function() {
    function r(t) {
      this.isBrowserEnvironment = typeof window < "u", this.config = ET(t, this.isBrowserEnvironment), this.initialized = !1, this.logger = new ms(this.config.system.loggerOptions, Zc, Pi), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new DT(this.config.auth.clientId, this.config.auth.authority, this.logger, Zc, Pi, this.config.telemetry.application, this.config.system.cryptoOptions) : new cT(this.config.auth.clientId, this.config.auth.authority, this.logger, Zc, Pi, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new LT(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Ja, this.eventHandler = new _T(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new Tl(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : dT(this.config.auth.clientId, this.logger);
      var e = {
        cacheLocation: gt.MemoryStorage,
        temporaryCacheLocation: gt.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new Tl(this.config.auth.clientId, e, this.browserCrypto, this.logger), this.tokenCache = new UT(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    return r.prototype.initialize = function() {
      return q(this, void 0, void 0, function() {
        var t, e, n, o, a;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              if (this.logger.trace("initialize called"), this.initialized)
                return this.logger.info("initialize has already been called, exiting early."), [
                  2
                  /*return*/
                ];
              if (t = this.config.system.allowNativeBroker, e = this.performanceClient.startMeasurement(U.InitializeClientApplication), this.eventHandler.emitEvent(le.INITIALIZE_START), !t)
                return [3, 4];
              c.label = 1;
            case 1:
              return c.trys.push([1, 3, , 4]), n = this, [4, io.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return n.nativeExtensionProvider = c.sent(), [3, 4];
            case 3:
              return o = c.sent(), this.logger.verbose(o), [3, 4];
            case 4:
              return this.config.cache.claimsBasedCachingEnabled ? [3, 6] : (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), a = this.performanceClient.startMeasurement(U.ClearTokensAndKeysWithClaims), [4, this.browserStorage.clearTokensAndKeysWithClaims()]);
            case 5:
              c.sent(), a.endMeasurement({ success: !0 }), c.label = 6;
            case 6:
              return this.initialized = !0, this.eventHandler.emitEvent(le.INITIALIZE_END), e.endMeasurement({ allowNativeBroker: t, success: !0 }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.handleRedirectPromise = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n, o, a, c, l, u, h, f = this;
        return $(this, function(g) {
          return this.logger.verbose("handleRedirectPromise called"), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e = this.getAllAccounts(), this.isBrowserEnvironment ? (n = t || P.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(le.HANDLE_REDIRECT_START, re.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), a = this.browserStorage.getCachedNativeRequest(), c = void 0, a && io.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !t ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), l = new Fo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, a.accountId, this.nativeInternalStorage, a.correlationId), c = l.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), u = this.browserStorage.getTemporaryCache(Be.CORRELATION_ID, !0) || P.EMPTY_STRING, h = this.createRedirectClient(u), c = h.handleRedirectPromise(t)), o = c.then(function(m) {
            if (m) {
              var v = e.length < f.getAllAccounts().length;
              v ? (f.eventHandler.emitEvent(le.LOGIN_SUCCESS, re.Redirect, m), f.logger.verbose("handleRedirectResponse returned result, login success")) : (f.eventHandler.emitEvent(le.ACQUIRE_TOKEN_SUCCESS, re.Redirect, m), f.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return f.eventHandler.emitEvent(le.HANDLE_REDIRECT_END, re.Redirect), m;
          }).catch(function(m) {
            throw e.length > 0 ? f.eventHandler.emitEvent(le.ACQUIRE_TOKEN_FAILURE, re.Redirect, null, m) : f.eventHandler.emitEvent(le.LOGIN_FAILURE, re.Redirect, null, m), f.eventHandler.emitEvent(le.HANDLE_REDIRECT_END, re.Redirect), m;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n, o, a, c, l = this;
        return $(this, function(u) {
          return e = this.getRequestCorrelationId(t), this.logger.verbose("acquireTokenRedirect called", e), this.preflightBrowserEnvironmentCheck(re.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(le.ACQUIRE_TOKEN_START, re.Redirect, t) : this.eventHandler.emitEvent(le.LOGIN_START, re.Redirect, t), this.nativeExtensionProvider && this.canUseNative(t) ? (a = new Fo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(t), this.nativeInternalStorage, t.correlationId), o = a.acquireTokenRedirect(t).catch(function(h) {
            if (h instanceof Xr && h.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var f = l.createRedirectClient(t.correlationId);
              return f.acquireToken(t);
            } else if (h instanceof Br) {
              l.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var f = l.createRedirectClient(t.correlationId);
              return f.acquireToken(t);
            }
            throw l.browserStorage.setInteractionInProgress(!1), h;
          })) : (c = this.createRedirectClient(t.correlationId), o = c.acquireToken(t)), [2, o.catch(function(h) {
            throw n ? l.eventHandler.emitEvent(le.ACQUIRE_TOKEN_FAILURE, re.Redirect, null, h) : l.eventHandler.emitEvent(le.LOGIN_FAILURE, re.Redirect, null, h), h;
          })];
        });
      });
    }, r.prototype.acquireTokenPopup = function(t) {
      var e = this, n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(U.AcquireTokenPopup, n);
      try {
        this.logger.verbose("acquireTokenPopup called", n), this.preflightBrowserEnvironmentCheck(re.Popup);
      } catch (u) {
        return Promise.reject(u);
      }
      var a = this.getAllAccounts();
      a.length > 0 ? this.eventHandler.emitEvent(le.ACQUIRE_TOKEN_START, re.Popup, t) : this.eventHandler.emitEvent(le.LOGIN_START, re.Popup, t);
      var c;
      if (this.canUseNative(t))
        c = this.acquireTokenNative(t, Ze.acquireTokenPopup).then(function(u) {
          return e.browserStorage.setInteractionInProgress(!1), o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: u.requestId
          }), u;
        }).catch(function(u) {
          if (u instanceof Xr && u.isFatal()) {
            e.nativeExtensionProvider = void 0;
            var h = e.createPopupClient(t.correlationId);
            return h.acquireToken(t);
          } else if (u instanceof Br) {
            e.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
            var h = e.createPopupClient(t.correlationId);
            return h.acquireToken(t);
          }
          throw e.browserStorage.setInteractionInProgress(!1), u;
        });
      else {
        var l = this.createPopupClient(t.correlationId);
        c = l.acquireToken(t);
      }
      return c.then(function(u) {
        var h = a.length < e.getAllAccounts().length;
        return h ? e.eventHandler.emitEvent(le.LOGIN_SUCCESS, re.Popup, u) : e.eventHandler.emitEvent(le.ACQUIRE_TOKEN_SUCCESS, re.Popup, u), o.addStaticFields({
          accessTokenSize: u.accessToken.length,
          idTokenSize: u.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: u.requestId
        }), u;
      }).catch(function(u) {
        return a.length > 0 ? e.eventHandler.emitEvent(le.ACQUIRE_TOKEN_FAILURE, re.Popup, null, u) : e.eventHandler.emitEvent(le.LOGIN_FAILURE, re.Popup, null, u), o.endMeasurement({
          errorCode: u.errorCode,
          subErrorCode: u.subError,
          success: !1
        }), Promise.reject(u);
      });
    }, r.prototype.trackPageVisibilityWithMeasurement = function() {
      var t = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
      t && (this.logger.info("Perf: Visibility change detected in ", t.event.name), t.increment({
        visibilityChangeCount: 1
      }));
    }, r.prototype.ssoSilent = function(t) {
      var e;
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l = this;
        return $(this, function(u) {
          return n = this.getRequestCorrelationId(t), o = ae(ae({}, t), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: t.prompt,
            correlationId: n
          }), this.preflightBrowserEnvironmentCheck(re.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(U.SsoSilent, n), (e = this.ssoSilentMeasurement) === null || e === void 0 || e.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(le.SSO_SILENT_START, re.Silent, o), this.canUseNative(o) ? a = this.acquireTokenNative(o, Ze.ssoSilent).catch(function(h) {
            if (h instanceof Xr && h.isFatal()) {
              l.nativeExtensionProvider = void 0;
              var f = l.createSilentIframeClient(o.correlationId);
              return f.acquireToken(o);
            }
            throw h;
          }) : (c = this.createSilentIframeClient(o.correlationId), a = c.acquireToken(o)), [2, a.then(function(h) {
            var f, g;
            return l.eventHandler.emitEvent(le.SSO_SILENT_SUCCESS, re.Silent, h), (f = l.ssoSilentMeasurement) === null || f === void 0 || f.addStaticFields({
              accessTokenSize: h.accessToken.length,
              idTokenSize: h.idToken.length
            }), (g = l.ssoSilentMeasurement) === null || g === void 0 || g.endMeasurement({
              success: !0,
              isNativeBroker: h.fromNativeBroker,
              requestId: h.requestId
            }), h;
          }).catch(function(h) {
            var f;
            throw l.eventHandler.emitEvent(le.SSO_SILENT_FAILURE, re.Silent, null, h), (f = l.ssoSilentMeasurement) === null || f === void 0 || f.endMeasurement({
              errorCode: h.errorCode,
              subErrorCode: h.subError,
              success: !1
            }), h;
          }).finally(function() {
            document.removeEventListener("visibilitychange", l.trackPageVisibilityWithMeasurement);
          })];
        });
      });
    }, r.prototype.acquireTokenByCode = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n, o, a, c = this;
        return $(this, function(l) {
          e = this.getRequestCorrelationId(t), this.preflightBrowserEnvironmentCheck(re.Silent), this.logger.trace("acquireTokenByCode called", e), this.eventHandler.emitEvent(le.ACQUIRE_TOKEN_BY_CODE_START, re.Silent, t), n = this.performanceClient.startMeasurement(U.AcquireTokenByCode, t.correlationId);
          try {
            if (t.code && t.nativeAccountId)
              throw Q.createSpaCodeAndNativeAccountIdPresentError();
            if (t.code)
              return o = t.code, a = this.hybridAuthCodeResponses.get(o), a ? (this.logger.verbose("Existing acquireTokenByCode request found", t.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", e), a = this.acquireTokenByCodeAsync(ae(ae({}, t), { correlationId: e })).then(function(u) {
                return c.eventHandler.emitEvent(le.ACQUIRE_TOKEN_BY_CODE_SUCCESS, re.Silent, u), c.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: u.accessToken.length,
                  idTokenSize: u.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: u.fromNativeBroker,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw c.hybridAuthCodeResponses.delete(o), c.eventHandler.emitEvent(le.ACQUIRE_TOKEN_BY_CODE_FAILURE, re.Silent, null, u), n.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              }), this.hybridAuthCodeResponses.set(o, a)), [2, a];
            if (t.nativeAccountId) {
              if (this.canUseNative(t, t.nativeAccountId))
                return [2, this.acquireTokenNative(t, Ze.acquireTokenByCode, t.nativeAccountId).catch(function(u) {
                  throw u instanceof Xr && u.isFatal() && (c.nativeExtensionProvider = void 0), u;
                })];
              throw Q.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw Q.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (u) {
            throw this.eventHandler.emitEvent(le.ACQUIRE_TOKEN_BY_CODE_FAILURE, re.Silent, null, u), n.endMeasurement({
              errorCode: u instanceof ue && u.errorCode || void 0,
              subErrorCode: u instanceof ue && u.subError || void 0,
              success: !1
            }), u;
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByCodeAsync = function(t) {
      var e;
      return q(this, void 0, void 0, function() {
        var n, o, a = this;
        return $(this, function(c) {
          switch (c.label) {
            case 0:
              return this.logger.trace("acquireTokenByCodeAsync called", t.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(U.AcquireTokenByCodeAsync, t.correlationId), (e = this.acquireTokenByCodeAsyncMeasurement) === null || e === void 0 || e.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), n = this.createSilentAuthCodeClient(t.correlationId), [4, n.acquireToken(t).then(function(l) {
                var u;
                return (u = a.acquireTokenByCodeAsyncMeasurement) === null || u === void 0 || u.endMeasurement({
                  success: !0,
                  fromCache: l.fromCache,
                  isNativeBroker: l.fromNativeBroker,
                  requestId: l.requestId
                }), l;
              }).catch(function(l) {
                var u;
                throw (u = a.acquireTokenByCodeAsyncMeasurement) === null || u === void 0 || u.endMeasurement({
                  errorCode: l.errorCode,
                  subErrorCode: l.subError,
                  success: !1
                }), l;
              }).finally(function() {
                document.removeEventListener("visibilitychange", a.trackPageVisibilityWithMeasurement);
              })];
            case 1:
              return o = c.sent(), [2, o];
          }
        });
      });
    }, r.prototype.acquireTokenFromCache = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        return $(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(U.AcquireTokenFromCache, e.correlationId), n.cacheLookupPolicy) {
            case rr.Default:
            case rr.AccessToken:
            case rr.AccessTokenAndRefreshToken:
              return [2, t.acquireToken(e)];
            default:
              throw ee.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByRefreshToken = function(t, e) {
      return q(this, void 0, void 0, function() {
        var n;
        return $(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(U.AcquireTokenByRefreshToken, t.correlationId), e.cacheLookupPolicy) {
            case rr.Default:
            case rr.AccessTokenAndRefreshToken:
            case rr.RefreshToken:
            case rr.RefreshTokenAndNetwork:
              return n = this.createSilentRefreshClient(t.correlationId), this.performanceClient.setPreQueueTime(U.SilentRefreshClientAcquireToken, t.correlationId), [2, n.acquireToken(t)];
            default:
              throw ee.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenBySilentIframe = function(t) {
      return q(this, void 0, void 0, function() {
        var e;
        return $(this, function(n) {
          return this.performanceClient.addQueueMeasurement(U.AcquireTokenBySilentIframe, t.correlationId), e = this.createSilentIframeClient(t.correlationId), this.performanceClient.setPreQueueTime(U.SilentIframeClientAcquireToken, t.correlationId), [2, e.acquireToken(t)];
        });
      });
    }, r.prototype.logout = function(t) {
      return q(this, void 0, void 0, function() {
        var e;
        return $(this, function(n) {
          return e = this.getRequestCorrelationId(t), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", e), [2, this.logoutRedirect(ae({ correlationId: e }, t))];
        });
      });
    }, r.prototype.logoutRedirect = function(t) {
      return q(this, void 0, void 0, function() {
        var e, n;
        return $(this, function(o) {
          return e = this.getRequestCorrelationId(t), this.preflightBrowserEnvironmentCheck(re.Redirect), n = this.createRedirectClient(e), [2, n.logout(t)];
        });
      });
    }, r.prototype.logoutPopup = function(t) {
      try {
        var e = this.getRequestCorrelationId(t);
        this.preflightBrowserEnvironmentCheck(re.Popup);
        var n = this.createPopupClient(e);
        return n.logout(t);
      } catch (o) {
        return Promise.reject(o);
      }
    }, r.prototype.getAllAccounts = function() {
      return this.logger.verbose("getAllAccounts called"), this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
    }, r.prototype.getAccountByUsername = function(t) {
      if (this.logger.trace("getAccountByUsername called"), !t)
        return this.logger.warning("getAccountByUsername: No username provided"), null;
      var e = this.browserStorage.getAccountInfoFilteredBy({ username: t });
      return e ? (this.logger.verbose("getAccountByUsername: Account matching username found, returning"), this.logger.verbosePii("getAccountByUsername: Returning signed-in accounts matching username: " + t), e) : (this.logger.verbose("getAccountByUsername: No matching account found, returning null"), null);
    }, r.prototype.getAccountByHomeId = function(t) {
      if (this.logger.trace("getAccountByHomeId called"), !t)
        return this.logger.warning("getAccountByHomeId: No homeAccountId provided"), null;
      var e = this.browserStorage.getAccountInfoFilteredBy({ homeAccountId: t });
      return e ? (this.logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning"), this.logger.verbosePii("getAccountByHomeId: Returning signed-in accounts matching homeAccountId: " + t), e) : (this.logger.verbose("getAccountByHomeId: No matching account found, returning null"), null);
    }, r.prototype.getAccountByLocalId = function(t) {
      if (this.logger.trace("getAccountByLocalId called"), !t)
        return this.logger.warning("getAccountByLocalId: No localAccountId provided"), null;
      var e = this.browserStorage.getAccountInfoFilteredBy({ localAccountId: t });
      return e ? (this.logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning"), this.logger.verbosePii("getAccountByLocalId: Returning signed-in accounts matching localAccountId: " + t), e) : (this.logger.verbose("getAccountByLocalId: No matching account found, returning null"), null);
    }, r.prototype.setActiveAccount = function(t) {
      this.browserStorage.setActiveAccount(t);
    }, r.prototype.getActiveAccount = function() {
      return this.browserStorage.getActiveAccount();
    }, r.prototype.preflightBrowserEnvironmentCheck = function(t, e) {
      if (e === void 0 && (e = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), ct.blockNonBrowserEnvironment(this.isBrowserEnvironment), ct.blockRedirectInIframe(t, this.config.system.allowRedirectInIframe), ct.blockReloadInHiddenIframes(), ct.blockAcquireTokenInPopups(), ct.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t === re.Redirect && this.config.cache.cacheLocation === gt.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Et.createInMemoryRedirectUnavailableError();
      (t === re.Redirect || t === re.Popup) && this.preflightInteractiveRequest(e);
    }, r.prototype.preflightInteractiveRequest = function(t) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), ct.blockReloadInHiddenIframes(), t && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(t, e, n) {
      return q(this, void 0, void 0, function() {
        var o;
        return $(this, function(a) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw Q.createNativeConnectionNotEstablishedError();
          return o = new Fo(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, e, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(t), this.nativeInternalStorage, t.correlationId), [2, o.acquireToken(t)];
        });
      });
    }, r.prototype.canUseNative = function(t, e) {
      if (this.logger.trace("canUseNative called"), !io.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (t.prompt)
        switch (t.prompt) {
          case Ft.NONE:
          case Ft.CONSENT:
          case Ft.LOGIN:
            this.logger.trace("canUseNative: prompt is compatible with native flow");
            break;
          default:
            return this.logger.trace("canUseNative: prompt = " + t.prompt + " is not compatible with native flow, returning false"), !1;
        }
      return !e && !this.getNativeAccountId(t) ? (this.logger.trace("canUseNative: nativeAccountId is not available, returning false"), !1) : !0;
    }, r.prototype.getNativeAccountId = function(t) {
      var e = t.account || this.browserStorage.getAccountInfoByHints(t.loginHint, t.sid) || this.getActiveAccount();
      return e && e.nativeAccountId || "";
    }, r.prototype.createPopupClient = function(t) {
      return new gT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, t);
    }, r.prototype.createRedirectClient = function(t) {
      return new pT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, t);
    }, r.prototype.createSilentIframeClient = function(t) {
      return new wT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, t);
    }, r.prototype.createSilentCacheClient = function(t) {
      return new Op(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, t);
    }, r.prototype.createSilentRefreshClient = function(t) {
      return new bT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, t);
    }, r.prototype.createSilentAuthCodeClient = function(t) {
      return new FT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, Ze.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, t);
    }, r.prototype.addEventCallback = function(t) {
      return this.eventHandler.addEventCallback(t);
    }, r.prototype.removeEventCallback = function(t) {
      this.eventHandler.removeEventCallback(t);
    }, r.prototype.addPerformanceCallback = function(t) {
      return this.performanceClient.addPerformanceCallback(t);
    }, r.prototype.removePerformanceCallback = function(t) {
      return this.performanceClient.removePerformanceCallback(t);
    }, r.prototype.enableAccountStorageEvents = function() {
      this.eventHandler.enableAccountStorageEvents();
    }, r.prototype.disableAccountStorageEvents = function() {
      this.eventHandler.disableAccountStorageEvents();
    }, r.prototype.getTokenCache = function() {
      return this.tokenCache;
    }, r.prototype.getLogger = function() {
      return this.logger;
    }, r.prototype.setLogger = function(t) {
      this.logger = t;
    }, r.prototype.initializeWrapperLibrary = function(t, e) {
      this.browserStorage.setWrapperMetadata(t, e);
    }, r.prototype.setNavigationClient = function(t) {
      this.navigationClient = t;
    }, r.prototype.getConfiguration = function() {
      return this.config;
    }, r.prototype.getRequestCorrelationId = function(t) {
      return t != null && t.correlationId ? t.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : P.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var KT = (
  /** @class */
  function(r) {
    Pt(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return t.prototype.loginRedirect = function(e) {
      return q(this, void 0, void 0, function() {
        var n;
        return $(this, function(o) {
          return n = this.getRequestCorrelationId(e), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(ae({ correlationId: n }, e || Of))];
        });
      });
    }, t.prototype.loginPopup = function(e) {
      var n = this.getRequestCorrelationId(e);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(ae({ correlationId: n }, e || Of));
    }, t.prototype.acquireTokenSilent = function(e) {
      return q(this, void 0, void 0, function() {
        var n, o, a, c, l, u, h, f = this;
        return $(this, function(g) {
          if (n = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(U.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: e.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(re.Silent), this.logger.verbose("acquireTokenSilent called", n), a = e.account || this.getActiveAccount(), !a)
            throw Q.createNoAccountError();
          return c = {
            clientId: this.config.auth.clientId,
            authority: e.authority || P.EMPTY_STRING,
            scopes: e.scopes,
            homeAccountIdentifier: a.homeAccountId,
            claims: e.claims,
            authenticationScheme: e.authenticationScheme,
            resourceRequestMethod: e.resourceRequestMethod,
            resourceRequestUri: e.resourceRequestUri,
            shrClaims: e.shrClaims,
            sshKid: e.sshKid
          }, l = JSON.stringify(c), u = this.activeSilentTokenRequests.get(l), typeof u > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(U.AcquireTokenSilentAsync, n), h = this.acquireTokenSilentAsync(ae(ae({}, e), { correlationId: n }), a).then(function(m) {
            return f.activeSilentTokenRequests.delete(l), o.addStaticFields({
              accessTokenSize: m.accessToken.length,
              idTokenSize: m.idToken.length
            }), o.endMeasurement({
              success: !0,
              fromCache: m.fromCache,
              isNativeBroker: m.fromNativeBroker,
              cacheLookupPolicy: e.cacheLookupPolicy,
              requestId: m.requestId
            }), m;
          }).catch(function(m) {
            throw f.activeSilentTokenRequests.delete(l), o.endMeasurement({
              errorCode: m.errorCode,
              subErrorCode: m.subError,
              success: !1
            }), m;
          }), this.activeSilentTokenRequests.set(l, h), [2, h]) : (this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", n), o.discardMeasurement(), [2, u]);
        });
      });
    }, t.prototype.trackPageVisibility = function() {
      this.astsAsyncMeasurement && (this.logger.info("Perf: Visibility change detected"), this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      }));
    }, t.prototype.acquireTokenSilentAsync = function(e, n) {
      var o;
      return q(this, void 0, void 0, function() {
        var a, c, l, u, h, f = this;
        return $(this, function(g) {
          switch (g.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(U.AcquireTokenSilentAsync, e.correlationId), this.eventHandler.emitEvent(le.ACQUIRE_TOKEN_START, re.Silent, e), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(U.AcquireTokenSilentAsync, e.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), io.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), c = ae(ae({}, e), { account: n }), a = this.acquireTokenNative(c, Ze.acquireTokenSilent_silentFlow).catch(function(m) {
                return q(f, void 0, void 0, function() {
                  var v;
                  return $(this, function(C) {
                    if (m instanceof Xr && m.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, v = this.createSilentIframeClient(e.correlationId), [2, v.acquireToken(e)];
                    throw m;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), l = this.createSilentCacheClient(e.correlationId), this.performanceClient.setPreQueueTime(U.InitializeSilentRequest, e.correlationId), [4, l.initializeSilentRequest(e, n)];
            case 2:
              u = g.sent(), h = ae(ae({}, e), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: e.cacheLookupPolicy || rr.Default
              }), this.performanceClient.setPreQueueTime(U.AcquireTokenFromCache, u.correlationId), a = this.acquireTokenFromCache(l, u, h).catch(function(m) {
                if (h.cacheLookupPolicy === rr.AccessToken)
                  throw m;
                return ct.blockReloadInHiddenIframes(), f.eventHandler.emitEvent(le.ACQUIRE_TOKEN_NETWORK_START, re.Silent, u), f.performanceClient.setPreQueueTime(U.AcquireTokenByRefreshToken, u.correlationId), f.acquireTokenByRefreshToken(u, h).catch(function(v) {
                  var C = v instanceof co, b = v instanceof Br, _ = v.errorCode === Uo.noTokensFoundError.code, A = v.errorCode === Fr.INVALID_GRANT_ERROR;
                  if ((!C || !A || b || h.cacheLookupPolicy === rr.AccessTokenAndRefreshToken || h.cacheLookupPolicy === rr.RefreshToken) && h.cacheLookupPolicy !== rr.Skip && !_)
                    throw v;
                  return f.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", e.correlationId), f.performanceClient.setPreQueueTime(U.AcquireTokenBySilentIframe, u.correlationId), f.acquireTokenBySilentIframe(u);
                });
              }), g.label = 3;
            case 3:
              return [2, a.then(function(m) {
                var v;
                return f.eventHandler.emitEvent(le.ACQUIRE_TOKEN_SUCCESS, re.Silent, m), (v = f.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  success: !0,
                  fromCache: m.fromCache,
                  isNativeBroker: m.fromNativeBroker,
                  requestId: m.requestId
                }), m;
              }).catch(function(m) {
                var v;
                throw f.eventHandler.emitEvent(le.ACQUIRE_TOKEN_FAILURE, re.Silent, null, m), (v = f.astsAsyncMeasurement) === null || v === void 0 || v.endMeasurement({
                  errorCode: m.errorCode,
                  subErrorCode: m.subError,
                  success: !1
                }), m;
              }).finally(function() {
                document.removeEventListener("visibilitychange", f.trackPageVisibility);
              })];
          }
        });
      });
    }, t;
  }(BT)
);
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var qT = {
  initialize: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  acquireTokenPopup: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  acquireTokenRedirect: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  acquireTokenSilent: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  acquireTokenByCode: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  getAllAccounts: function() {
    return [];
  },
  getAccountByHomeId: function() {
    return null;
  },
  getAccountByUsername: function() {
    return null;
  },
  getAccountByLocalId: function() {
    return null;
  },
  handleRedirectPromise: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  loginPopup: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  loginRedirect: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  logout: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  logoutRedirect: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  logoutPopup: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  ssoSilent: function() {
    return Promise.reject(Et.createStubPcaInstanceCalledError());
  },
  addEventCallback: function() {
    return null;
  },
  removeEventCallback: function() {
  },
  addPerformanceCallback: function() {
    return "";
  },
  removePerformanceCallback: function() {
    return !1;
  },
  enableAccountStorageEvents: function() {
  },
  disableAccountStorageEvents: function() {
  },
  getTokenCache: function() {
    throw Et.createStubPcaInstanceCalledError();
  },
  getLogger: function() {
    throw Et.createStubPcaInstanceCalledError();
  },
  setLogger: function() {
  },
  setActiveAccount: function() {
  },
  getActiveAccount: function() {
    return null;
  },
  initializeWrapperLibrary: function() {
  },
  setNavigationClient: function() {
  },
  getConfiguration: function() {
    throw Et.createStubPcaInstanceCalledError();
  }
};
/*! @azure/msal-browser v2.38.3 2023-10-27 */
var $T = (
  /** @class */
  function() {
    function r() {
    }
    return r.getInteractionStatusFromEvent = function(t, e) {
      switch (t.eventType) {
        case le.LOGIN_START:
          return pt.Login;
        case le.SSO_SILENT_START:
          return pt.SsoSilent;
        case le.ACQUIRE_TOKEN_START:
          if (t.interactionType === re.Redirect || t.interactionType === re.Popup)
            return pt.AcquireToken;
          break;
        case le.HANDLE_REDIRECT_START:
          return pt.HandleRedirect;
        case le.LOGOUT_START:
          return pt.Logout;
        case le.SSO_SILENT_SUCCESS:
        case le.SSO_SILENT_FAILURE:
          if (e && e !== pt.SsoSilent)
            break;
          return pt.None;
        case le.LOGOUT_END:
          if (e && e !== pt.Logout)
            break;
          return pt.None;
        case le.HANDLE_REDIRECT_END:
          if (e && e !== pt.HandleRedirect)
            break;
          return pt.None;
        case le.LOGIN_SUCCESS:
        case le.LOGIN_FAILURE:
        case le.ACQUIRE_TOKEN_SUCCESS:
        case le.ACQUIRE_TOKEN_FAILURE:
        case le.RESTORE_FROM_BFCACHE:
          if (t.interactionType === re.Redirect || t.interactionType === re.Popup) {
            if (e && e !== pt.Login && e !== pt.AcquireToken)
              break;
            return pt.None;
          }
          break;
      }
      return null;
    }, r;
  }()
);
const GT = {
  instance: qT,
  inProgress: pt.None,
  accounts: [],
  logger: /* @__PURE__ */ new ms({})
}, Up = /* @__PURE__ */ Fn(GT);
Up.Consumer;
function Hf(r, t) {
  if (r.length !== t.length)
    return !1;
  const e = [...t];
  return r.every((n) => {
    const o = e.shift();
    return !n || !o ? !1 : n.homeAccountId === o.homeAccountId && n.localAccountId === o.localAccountId && n.username === o.username;
  });
}
const zT = "@azure/msal-react", Ff = "1.5.12";
var $o;
(function(r) {
  r.UNBLOCK_INPROGRESS = "UNBLOCK_INPROGRESS", r.EVENT = "EVENT";
})($o || ($o = {}));
const WT = (r, t) => {
  const {
    type: e,
    payload: n
  } = t;
  let o = r.inProgress;
  switch (e) {
    case $o.UNBLOCK_INPROGRESS:
      r.inProgress === pt.Startup && (o = pt.None, n.logger.info("MsalProvider - handleRedirectPromise resolved, setting inProgress to 'none'"));
      break;
    case $o.EVENT:
      const c = n.message, l = $T.getInteractionStatusFromEvent(c, r.inProgress);
      l && (n.logger.info(`MsalProvider - ${c.eventType} results in setting inProgress from ${r.inProgress} to ${l}`), o = l);
      break;
    default:
      throw new Error(`Unknown action type: ${e}`);
  }
  const a = n.instance.getAllAccounts();
  return o !== r.inProgress && !Hf(a, r.accounts) ? {
    ...r,
    inProgress: o,
    accounts: a
  } : o !== r.inProgress ? {
    ...r,
    inProgress: o
  } : Hf(a, r.accounts) ? r : {
    ...r,
    accounts: a
  };
};
function VT(r) {
  let {
    instance: t,
    children: e
  } = r;
  me(() => {
    t.initializeWrapperLibrary(bl.React, Ff);
  }, [t]);
  const n = Ni(() => t.getLogger().clone(zT, Ff), [t]), [o, a] = G_(WT, void 0, () => ({
    inProgress: pt.Startup,
    accounts: t.getAllAccounts()
  }));
  me(() => {
    const l = t.addEventCallback((u) => {
      a({
        payload: {
          instance: t,
          logger: n,
          message: u
        },
        type: $o.EVENT
      });
    });
    return n.verbose(`MsalProvider - Registered event callback with id: ${l}`), t.initialize().then(() => {
      t.handleRedirectPromise().catch(() => {
      }).finally(() => {
        a({
          payload: {
            instance: t,
            logger: n
          },
          type: $o.UNBLOCK_INPROGRESS
        });
      });
    }), () => {
      l && (n.verbose(`MsalProvider - Removing event callback ${l}`), t.removeEventCallback(l));
    };
  }, [t, n]);
  const c = {
    instance: t,
    inProgress: o.inProgress,
    accounts: o.accounts,
    logger: n
  };
  return k.createElement(Up.Provider, {
    value: c
  }, e);
}
function Zr(r) {
  return Object.keys(r);
}
function el(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function $l(r, t) {
  const e = { ...r }, n = t;
  return el(r) && el(t) && Object.keys(t).forEach((o) => {
    el(n[o]) && o in r ? e[o] = $l(e[o], n[o]) : e[o] = n[o];
  }), e;
}
function YT(r) {
  return r.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function jT(r) {
  var t;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (t = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function QT(r) {
  const t = jT(r);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function tl(r) {
  return `calc(${r} * var(--mantine-scale))`;
}
function Hp(r, { shouldScale: t = !1 } = {}) {
  function e(n) {
    if (n === 0 || n === "0")
      return "0";
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return t ? tl(o) : o;
    }
    if (typeof n == "string") {
      if (n.startsWith("calc(") || n.startsWith("var(") || n.startsWith("clamp("))
        return n;
      if (n.includes(" "))
        return n.split(" ").map((a) => e(a)).join(" ");
      if (n.includes(r))
        return t ? tl(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const a = `${Number(o) / 16}${r}`;
        return t ? tl(a) : a;
      }
    }
    return n;
  }
  return e;
}
const K = Hp("rem", { shouldScale: !0 }), Bf = Hp("em");
function Gl(r) {
  return Object.keys(r).reduce((t, e) => (r[e] !== void 0 && (t[e] = r[e]), t), {});
}
function Fp(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function Bi(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== k.Fragment : !1;
}
function jo(r) {
  const t = Fn(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ k.createElement(t.Provider, { value: a }, o), () => {
    const o = Bn(t);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function JT(r = null) {
  const t = Fn(r);
  return [({ children: o, value: a }) => /* @__PURE__ */ k.createElement(t.Provider, { value: a }, o), () => Bn(t)];
}
function Kf(r, t) {
  return (e) => {
    if (typeof e != "string" || e.trim().length === 0)
      throw new Error(t);
    return `${r}-${e}`;
  };
}
function Al(r, t) {
  let e = r;
  for (; (e = e.parentElement) && !e.matches(t); )
    ;
  return e;
}
function XT(r, t, e) {
  for (let n = r - 1; n >= 0; n -= 1)
    if (!t[n].disabled)
      return n;
  if (e) {
    for (let n = t.length - 1; n > -1; n -= 1)
      if (!t[n].disabled)
        return n;
  }
  return r;
}
function ZT(r, t, e) {
  for (let n = r + 1; n < t.length; n += 1)
    if (!t[n].disabled)
      return n;
  if (e) {
    for (let n = 0; n < t.length; n += 1)
      if (!t[n].disabled)
        return n;
  }
  return r;
}
function e0(r, t, e) {
  return Al(r, e) === Al(t, e);
}
function t0({
  parentSelector: r,
  siblingSelector: t,
  onKeyDown: e,
  loop: n = !0,
  activateOnFocus: o = !1,
  dir: a = "rtl",
  orientation: c
}) {
  return (l) => {
    var C;
    e == null || e(l);
    const u = Array.from(
      ((C = Al(l.currentTarget, r)) == null ? void 0 : C.querySelectorAll(
        t
      )) || []
    ).filter((b) => e0(l.currentTarget, b, r)), h = u.findIndex((b) => l.currentTarget === b), f = ZT(h, u, n), g = XT(h, u, n), m = a === "rtl" ? g : f, v = a === "rtl" ? f : g;
    switch (l.key) {
      case "ArrowRight": {
        c === "horizontal" && (l.stopPropagation(), l.preventDefault(), u[m].focus(), o && u[m].click());
        break;
      }
      case "ArrowLeft": {
        c === "horizontal" && (l.stopPropagation(), l.preventDefault(), u[v].focus(), o && u[v].click());
        break;
      }
      case "ArrowUp": {
        c === "vertical" && (l.stopPropagation(), l.preventDefault(), u[g].focus(), o && u[g].click());
        break;
      }
      case "ArrowDown": {
        c === "vertical" && (l.stopPropagation(), l.preventDefault(), u[f].focus(), o && u[f].click());
        break;
      }
      case "Home": {
        l.stopPropagation(), l.preventDefault(), !u[0].disabled && u[0].focus();
        break;
      }
      case "End": {
        l.stopPropagation(), l.preventDefault();
        const b = u.length - 1;
        !u[b].disabled && u[b].focus();
        break;
      }
    }
  };
}
const r0 = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function n0(r) {
  return r0[r];
}
const o0 = () => {
};
function i0(r, t = { active: !0 }) {
  return typeof r != "function" || !t.active ? t.onKeyDown || o0 : (e) => {
    var n;
    e.key === "Escape" && (r(e), (n = t.onTrigger) == null || n.call(t));
  };
}
function kt(r, t = "size", e = !0) {
  if (r !== void 0)
    return Fp(r) ? e ? K(r) : r : `var(--${t}-${r})`;
}
function Bp(r) {
  return kt(r, "mantine-spacing");
}
function Qo(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : kt(r, "mantine-radius");
}
function gr(r) {
  return kt(r, "mantine-font-size");
}
function a0(r) {
  return kt(r, "mantine-line-height", !1);
}
function s0(r) {
  if (r)
    return kt(r, "mantine-shadow", !1);
}
function Kp(r) {
  var t, e, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (t = 0; t < r.length; t++)
        r[t] && (e = Kp(r[t])) && (n && (n += " "), n += e);
    else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function bn() {
  for (var r, t, e = 0, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = Kp(r)) && (n && (n += " "), n += t);
  return n;
}
const c0 = {};
function l0(r) {
  const t = {};
  return r.forEach((e) => {
    Object.entries(e).forEach(([n, o]) => {
      t[n] ? t[n] = bn(t[n], o) : t[n] = o;
    });
  }), t;
}
function vs({ theme: r, classNames: t, props: e, stylesCtx: n }) {
  const a = (Array.isArray(t) ? t : [t]).map(
    (c) => typeof c == "function" ? c(r, e, n) : c || c0
  );
  return l0(a);
}
function is({ theme: r, styles: t, props: e, stylesCtx: n }) {
  return (Array.isArray(t) ? t : [t]).reduce((a, c) => typeof c == "function" ? { ...a, ...c(r, e, n) } : { ...a, ...c }, {});
}
function qp() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function to(r) {
  const t = Ke(r);
  return me(() => {
    t.current = r;
  }), Ni(() => (...e) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...e);
  }, []);
}
function ys(r, t) {
  const e = to(r), n = Ke(0);
  return me(() => () => window.clearTimeout(n.current), []), Ve(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(e, t);
  }, [e, t]);
}
const qf = ["mousedown", "touchstart"];
function u0(r, t, e) {
  const n = Ke();
  return me(() => {
    const o = (a) => {
      const { target: c } = a ?? {};
      if (Array.isArray(e)) {
        const l = (c == null ? void 0 : c.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(c) && c.tagName !== "HTML";
        e.every((h) => !!h && !a.composedPath().includes(h)) && !l && r();
      } else
        n.current && !n.current.contains(c) && r();
    };
    return (t || qf).forEach((a) => document.addEventListener(a, o)), () => {
      (t || qf).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, r, e]), n;
}
function d0(r, t) {
  try {
    return r.addEventListener("change", t), () => r.removeEventListener("change", t);
  } catch {
    return r.addListener(t), () => r.removeListener(t);
  }
}
function h0(r, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function f0(r, t, { getInitialValueInEffect: e } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = pe(
    e ? t : h0(r, t)
  ), a = Ke();
  return me(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(r), o(a.current.matches), d0(a.current, (c) => o(c.matches));
  }, [r]), n;
}
function p0(r, t, e = { leading: !1 }) {
  const [n, o] = pe(r), a = Ke(!1), c = Ke(null), l = Ke(!1), u = () => window.clearTimeout(c.current);
  return me(() => {
    a.current && (!l.current && e.leading ? (l.current = !0, o(r)) : (u(), c.current = window.setTimeout(() => {
      l.current = !1, o(r);
    }, t)));
  }, [r, e.leading, t]), me(() => (a.current = !0, u), []), [n, u];
}
const Ki = typeof document < "u" ? Ll : me;
function lo(r, t) {
  const e = Ke(!1);
  me(
    () => () => {
      e.current = !1;
    },
    []
  ), me(() => {
    if (e.current)
      return r();
    e.current = !0;
  }, t);
}
function g0({ opened: r, shouldReturnFocus: t = !0 }) {
  const e = Ke(), n = () => {
    var o;
    e.current && "focus" in e.current && typeof e.current.focus == "function" && ((o = e.current) == null || o.focus({ preventScroll: !0 }));
  };
  return lo(() => {
    let o = -1;
    const a = (c) => {
      c.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", a), r ? e.current = document.activeElement : t && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", a);
    };
  }, [r, t]), n;
}
function m0(r, t = "body > :not(script)") {
  const e = qp(), n = Array.from(
    document.querySelectorAll(t)
  ).map((o) => {
    var u;
    if ((u = o == null ? void 0 : o.shadowRoot) != null && u.contains(r) || o.contains(r))
      return;
    const a = o.getAttribute("aria-hidden"), c = o.getAttribute("data-hidden"), l = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", e), a === null || a === "false" ? o.setAttribute("aria-hidden", "true") : !c && !l && o.setAttribute("data-hidden", a), {
      node: o,
      ariaHidden: c || null
    };
  });
  return () => {
    n.forEach((o) => {
      !o || e !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const v0 = /input|select|textarea|button|object/, $p = "a, input, select, textarea, button, object, [tabindex]";
function y0(r) {
  return r.style.display === "none";
}
function C0(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let e = r;
  for (; e && !(e === document.body || e.nodeType === 11); ) {
    if (y0(e))
      return !1;
    e = e.parentNode;
  }
  return !0;
}
function Gp(r) {
  let t = r.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Rl(r) {
  const t = r.nodeName.toLowerCase(), e = !Number.isNaN(Gp(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (v0.test(t) && !r.disabled || r instanceof HTMLAnchorElement && r.href || e) && C0(r);
}
function zp(r) {
  const t = Gp(r);
  return (Number.isNaN(t) || t >= 0) && Rl(r);
}
function E0(r) {
  return Array.from(r.querySelectorAll($p)).filter(zp);
}
function w0(r, t) {
  const e = E0(r);
  if (!e.length) {
    t.preventDefault();
    return;
  }
  const n = e[t.shiftKey ? 0 : e.length - 1], o = r.getRootNode();
  let a = n === o.activeElement || r === o.activeElement;
  const c = o.activeElement;
  if (c.tagName === "INPUT" && c.getAttribute("type") === "radio" && (a = e.filter(
    (f) => f.getAttribute("type") === "radio" && f.getAttribute("name") === c.getAttribute("name")
  ).includes(n)), !a)
    return;
  t.preventDefault();
  const u = e[t.shiftKey ? e.length - 1 : 0];
  u && u.focus();
}
function b0(r = !0) {
  const t = Ke(), e = Ke(null), n = (a) => {
    let c = a.querySelector("[data-autofocus]");
    if (!c) {
      const l = Array.from(a.querySelectorAll($p));
      c = l.find(zp) || l.find(Rl) || null, !c && Rl(a) && (c = a);
    }
    c && c.focus({ preventScroll: !0 });
  }, o = Ve(
    (a) => {
      if (r) {
        if (a === null) {
          e.current && (e.current(), e.current = null);
          return;
        }
        e.current = m0(a), t.current !== a && (a ? (setTimeout(() => {
          a.getRootNode() && n(a);
        }), t.current = a) : t.current = null);
      }
    },
    [r]
  );
  return me(() => {
    if (!r)
      return;
    t.current && setTimeout(() => n(t.current));
    const a = (c) => {
      c.key === "Tab" && t.current && w0(t.current, c);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), e.current && e.current();
    };
  }, [r]), o;
}
const _0 = k["useId".toString()] || (() => {
});
function S0() {
  const r = _0();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function fo(r) {
  const t = S0(), [e, n] = pe(t);
  return Ki(() => {
    n(qp());
  }, []), typeof r == "string" ? r : typeof window > "u" ? t : e;
}
function Wp(r, t) {
  typeof r == "function" ? r(t) : typeof r == "object" && r !== null && "current" in r && (r.current = t);
}
function Vp(...r) {
  return (t) => {
    r.forEach((e) => Wp(e, t));
  };
}
function kr(...r) {
  return Ve(Vp(...r), r);
}
function uo({
  value: r,
  defaultValue: t,
  finalValue: e,
  onChange: n = () => {
  }
}) {
  const [o, a] = pe(
    t !== void 0 ? t : e
  ), c = (l) => {
    a(l), n == null || n(l);
  };
  return r !== void 0 ? [r, n, !0] : [o, c, !1];
}
function Yp(r, t) {
  return f0("(prefers-reduced-motion: reduce)", r, t);
}
const jp = Fn(null);
function zl() {
  const r = Bn(jp);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function T0() {
  return zl().cssVariablesResolver;
}
function I0() {
  return zl().classNamesPrefix;
}
function Wl() {
  return zl().getStyleNonce;
}
function A0(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function R0(r) {
  let t = r.replace("#", "");
  if (t.length === 3) {
    const c = t.split("");
    t = [
      c[0],
      c[0],
      c[1],
      c[1],
      c[2],
      c[2]
    ].join("");
  }
  const e = parseInt(t, 16), n = e >> 16 & 255, o = e >> 8 & 255, a = e & 255;
  return {
    r: n,
    g: o,
    b: a,
    a: 1
  };
}
function k0(r) {
  const [t, e, n, o] = r.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: e, b: n, a: o || 1 };
}
function P0(r) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, e = r.match(t);
  if (!e)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(e[1], 10), o = parseInt(e[2], 10) / 100, a = parseInt(e[3], 10) / 100, c = e[5] ? parseFloat(e[5]) : void 0, l = (1 - Math.abs(2 * a - 1)) * o, u = n / 60, h = l * (1 - Math.abs(u % 2 - 1)), f = a - l / 2;
  let g, m, v;
  return u >= 0 && u < 1 ? (g = l, m = h, v = 0) : u >= 1 && u < 2 ? (g = h, m = l, v = 0) : u >= 2 && u < 3 ? (g = 0, m = l, v = h) : u >= 3 && u < 4 ? (g = 0, m = h, v = l) : u >= 4 && u < 5 ? (g = h, m = 0, v = l) : (g = l, m = 0, v = h), {
    r: Math.round((g + f) * 255),
    g: Math.round((m + f) * 255),
    b: Math.round((v + f) * 255),
    a: c || 1
  };
}
function Qp(r) {
  return A0(r) ? R0(r) : r.startsWith("rgb") ? k0(r) : r.startsWith("hsl") ? P0(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Fa(r, t) {
  if (r.startsWith("var("))
    return r;
  const { r: e, g: n, b: o, a } = Qp(r), c = 1 - t, l = (u) => Math.round(u * c);
  return `rgba(${l(e)}, ${l(n)}, ${l(o)}, ${a})`;
}
function kl(r, t) {
  return typeof r.primaryShade == "number" ? r.primaryShade : t === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function Cs({
  color: r,
  theme: t,
  colorScheme: e
}) {
  if (typeof r != "string")
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof r}`);
  if (r === "white" || r === "black")
    return {
      color: r,
      value: r === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      variable: `--mantine-color-${r}`
    };
  const [n, o] = r.split("."), a = o ? Number(o) : void 0, c = n in t.colors;
  return c ? {
    color: n,
    value: a !== void 0 ? t.colors[n][a] : t.colors[n][kl(t, e || "light")],
    shade: a,
    isThemeColor: c,
    variable: o ? `--mantine-color-${n}-${a}` : `--mantine-color-${n}-filled`
  } : {
    color: r,
    value: r,
    isThemeColor: c,
    shade: a,
    variable: void 0
  };
}
function Go(r, t) {
  const e = Cs({ color: r || t.primaryColor, theme: t });
  return e.variable ? `var(${e.variable})` : r;
}
function Pl(r, t) {
  const e = {
    from: (r == null ? void 0 : r.from) || t.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || t.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || t.defaultGradient.deg || 0
  }, n = Go(e.from, t), o = Go(e.to, t);
  return `linear-gradient(${e.deg}deg, ${n} 0%, ${o} 100%)`;
}
function tr(r, t) {
  if (typeof r != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: e, g: n, b: o } = Qp(r);
  return `rgba(${e}, ${n}, ${o}, ${t})`;
}
const N0 = ({
  color: r,
  theme: t,
  variant: e,
  gradient: n
}) => {
  const o = Cs({ color: r, theme: t });
  if (e === "filled")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: `var(--mantine-color-${r}-filled)`,
      hover: `var(--mantine-color-${r}-filled-hover)`,
      color: "var(--mantine-color-white)",
      border: `${K(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${o.color}-${o.shade})`,
      hover: `var(--mantine-color-${o.color}-${o.shade === 9 ? 8 : o.shade + 1})`,
      color: "var(--mantine-color-white)",
      border: `${K(1)} solid transparent`
    } : {
      background: r,
      hover: Fa(r, 0.1),
      color: "var(--mantine-color-white)",
      border: `${K(1)} solid transparent`
    };
  if (e === "light") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: `var(--mantine-color-${r}-light)`,
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${K(1)} solid transparent`
        };
      const a = t.colors[o.color][o.shade];
      return {
        background: tr(a, 0.1),
        hover: tr(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${K(1)} solid transparent`
      };
    }
    return {
      background: tr(r, 0.1),
      hover: tr(r, 0.12),
      color: r,
      border: `${K(1)} solid transparent`
    };
  }
  if (e === "outline")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${r}-outline-hover)`,
      color: `var(--mantine-color-${r}-outline)`,
      border: `${K(1)} solid var(--mantine-color-${r}-outline)`
    } : {
      background: "transparent",
      hover: tr(t.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${K(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: tr(r, 0.05),
      color: r,
      border: `${K(1)} solid ${r}`
    };
  if (e === "subtle") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${K(1)} solid transparent`
        };
      const a = t.colors[o.color][o.shade];
      return {
        background: "transparent",
        hover: tr(a, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${K(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: tr(r, 0.12),
      color: r,
      border: `${K(1)} solid transparent`
    };
  }
  return e === "transparent" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${r}-light-color)`,
    border: `${K(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
    border: `${K(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: r,
    border: `${K(1)} solid transparent`
  } : e === "white" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Fa(t.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${K(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Fa(t.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${K(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Fa(t.white, 0.01),
    color: r,
    border: `${K(1)} solid transparent`
  } : e === "gradient" ? {
    background: Pl(n, t),
    hover: Pl(n, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : e === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${K(1)} solid var(--mantine-color-default-border)`
  } : {};
}, O0 = {
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
}, $f = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Vl = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: O0,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: N0,
  fontFamily: $f,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: $f,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: K(34), lineHeight: "1.3" },
      h2: { fontSize: K(26), lineHeight: "1.35" },
      h3: { fontSize: K(22), lineHeight: "1.4" },
      h4: { fontSize: K(18), lineHeight: "1.45" },
      h5: { fontSize: K(16), lineHeight: "1.5" },
      h6: { fontSize: K(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: K(12),
    sm: K(14),
    md: K(16),
    lg: K(18),
    xl: K(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: K(2),
    sm: K(4),
    md: K(8),
    lg: K(16),
    xl: K(32)
  },
  spacing: {
    xs: K(10),
    sm: K(12),
    md: K(16),
    lg: K(20),
    xl: K(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${K(1)} ${K(3)} rgba(0, 0, 0, 0.05), 0 ${K(1)} ${K(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${K(1)} ${K(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${K(10)} ${K(
      15
    )} ${K(-5)}, rgba(0, 0, 0, 0.04) 0 ${K(7)} ${K(7)} ${K(-5)}`,
    md: `0 ${K(1)} ${K(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${K(20)} ${K(
      25
    )} ${K(-5)}, rgba(0, 0, 0, 0.04) 0 ${K(10)} ${K(10)} ${K(-5)}`,
    lg: `0 ${K(1)} ${K(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${K(28)} ${K(
      23
    )} ${K(-7)}, rgba(0, 0, 0, 0.04) 0 ${K(12)} ${K(12)} ${K(-7)}`,
    xl: `0 ${K(1)} ${K(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${K(36)} ${K(
      28
    )} ${K(-7)}, rgba(0, 0, 0, 0.04) 0 ${K(17)} ${K(17)} ${K(-7)}`
  },
  other: {},
  components: {}
};
function Gf(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function M0({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (e) => {
      if (typeof window > "u")
        return e;
      try {
        const n = window.localStorage.getItem(r);
        return Gf(n) ? n : e;
      } catch {
        return e;
      }
    },
    set: (e) => {
      try {
        window.localStorage.setItem(r, e);
      } catch (n) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          n
        );
      }
    },
    subscribe: (e) => {
      t = (n) => {
        n.storageArea === window.localStorage && n.key === r && Gf(n.newValue) && e(n.newValue);
      }, window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(r);
    }
  };
}
const x0 = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", zf = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function rl(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Wf(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(x0);
  if (typeof r.primaryShade == "object" && (!rl(r.primaryShade.dark) || !rl(r.primaryShade.light)))
    throw new Error(zf);
  if (typeof r.primaryShade == "number" && !rl(r.primaryShade))
    throw new Error(zf);
}
function L0(r, t) {
  var n;
  if (!t)
    return Wf(r), r;
  const e = $l(r, t);
  return t.fontFamily && !((n = t.headings) != null && n.fontFamily) && (e.headings.fontFamily = t.fontFamily), Wf(e), e;
}
const Yl = Fn(null), D0 = () => Bn(Yl) || Vl;
function Kn() {
  const r = Bn(Yl);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function Jp({
  theme: r,
  children: t,
  inherit: e = !0
}) {
  const n = D0(), o = Ni(
    () => L0(e ? n : Vl, r),
    [r, n, e]
  );
  return /* @__PURE__ */ k.createElement(Yl.Provider, { value: o }, t);
}
Jp.displayName = "@mantine/core/MantineThemeProvider";
function U0() {
  const r = Kn(), t = Wl(), e = Zr(r.breakpoints).reduce((n, o) => {
    const a = QT(r.breakpoints[o]);
    return `${n}@media (max-width: ${Bf(
      a - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Bf(
      a
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: e }
    }
  );
}
function nl(r) {
  return Object.entries(r).map(([t, e]) => `${t}: ${e};`).join("");
}
function ol(r, t) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, t);
}
function H0(r, t) {
  const e = nl(r.variables), n = e ? ol(t, e) : "", o = nl(r.dark), a = o ? ol(`${t}[data-mantine-color-scheme="dark"]`, o) : "", c = nl(r.light), l = c ? ol(`${t}[data-mantine-color-scheme="light"]`, c) : "";
  return `${n}${a}${l}`;
}
function Oo(r, t, e) {
  Zr(t).forEach(
    (n) => Object.assign(r, { [`--mantine-${e}-${n}`]: t[n] })
  );
}
const Xp = (r) => {
  const t = kl(r, "dark"), e = kl(r, "light"), n = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : K(r.defaultRadius), o = {
    variables: {
      "--mantine-scale": r.scale.toString(),
      "--mantine-cursor-type": r.cursorType,
      "--mantine-webkit-font-smoothing": r.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": r.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": r.white,
      "--mantine-color-black": r.black,
      "--mantine-line-height": r.lineHeights.md,
      "--mantine-font-family": r.fontFamily,
      "--mantine-font-family-monospace": r.fontFamilyMonospace,
      "--mantine-font-family-headings": r.headings.fontFamily,
      "--mantine-heading-font-weight": r.headings.fontWeight,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${r.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${r.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${r.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${r.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${r.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": r.black,
      "--mantine-color-body": r.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-${e})`,
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
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)"
    }
  };
  Oo(o.variables, r.breakpoints, "breakpoint"), Oo(o.variables, r.spacing, "spacing"), Oo(o.variables, r.fontSizes, "font-size"), Oo(o.variables, r.lineHeights, "line-height"), Oo(o.variables, r.shadows, "shadow"), Oo(o.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((c, l) => {
    o.variables[`--mantine-primary-color-${l}`] = `var(--mantine-color-${r.primaryColor}-${l})`;
  }), Zr(r.colors).forEach((c) => {
    r.colors[c].forEach((h, f) => {
      o.variables[`--mantine-color-${c}-${f}`] = h;
    });
    const l = `var(--mantine-color-${c}-${e === 9 ? 8 : e + 1})`, u = `var(--mantine-color-${c}-${t === 9 ? 8 : t + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${c}-text`] = `var(--mantine-color-${c}-filled)`, o.light[`--mantine-color-${c}-filled`] = `var(--mantine-color-${c}-${e})`, o.light[`--mantine-color-${c}-filled-hover`] = l, o.light[`--mantine-color-${c}-light`] = tr(
      r.colors[c][e],
      0.1
    ), o.light[`--mantine-color-${c}-light-hover`] = tr(
      r.colors[c][e],
      0.12
    ), o.light[`--mantine-color-${c}-light-color`] = `var(--mantine-color-${c}-${e})`, o.light[`--mantine-color-${c}-outline`] = `var(--mantine-color-${c}-${e})`, o.light[`--mantine-color-${c}-outline-hover`] = tr(
      r.colors[c][e],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${c}-text`] = `var(--mantine-color-${c}-4)`, o.dark[`--mantine-color-${c}-filled`] = `var(--mantine-color-${c}-${t})`, o.dark[`--mantine-color-${c}-filled-hover`] = u, o.dark[`--mantine-color-${c}-light`] = tr(
      r.colors[c][Math.max(0, t - 2)],
      0.15
    ), o.dark[`--mantine-color-${c}-light-hover`] = tr(
      r.colors[c][Math.max(0, t - 2)],
      0.2
    ), o.dark[`--mantine-color-${c}-light-color`] = `var(--mantine-color-${c}-${Math.max(
      t - 5,
      0
    )})`, o.dark[`--mantine-color-${c}-outline`] = `var(--mantine-color-${c}-${Math.max(
      t - 4,
      0
    )})`, o.dark[`--mantine-color-${c}-outline-hover`] = tr(
      r.colors[c][Math.max(t - 4, 0)],
      0.05
    );
  });
  const a = r.headings.sizes;
  return Zr(a).forEach((c) => {
    o.variables[`--mantine-${c}-font-size`] = a[c].fontSize, o.variables[`--mantine-${c}-line-height`] = a[c].lineHeight, o.variables[`--mantine-${c}-font-weight`] = a[c].fontWeight || r.headings.fontWeight;
  }), o;
};
function F0({ theme: r, generator: t }) {
  const e = Xp(r), n = t == null ? void 0 : t(r);
  return n ? $l(e, n) : e;
}
const il = Xp(Vl);
function B0(r) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return Zr(r.variables).forEach((e) => {
    il.variables[e] !== r.variables[e] && (t.variables[e] = r.variables[e]);
  }), Zr(r.light).forEach((e) => {
    il.light[e] !== r.light[e] && (t.light[e] = r.light[e]);
  }), Zr(r.dark).forEach((e) => {
    il.dark[e] !== r.dark[e] && (t.dark[e] = r.dark[e]);
  }), t;
}
function K0(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Zp({ cssVariablesSelector: r }) {
  const t = Kn(), e = Wl(), n = T0(), o = F0({ theme: t, generator: n }), a = r === ":root", c = a ? B0(o) : o, l = H0(c, r);
  return l ? /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: {
        __html: `${l}${a ? "" : K0(r)}`
      }
    }
  ) : null;
}
Zp.displayName = "@mantine/CssVariables";
function q0() {
  const r = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || r(...t);
  };
}
function Ci(r, t) {
  var n;
  const e = r !== "auto" ? r : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (n = t()) == null || n.setAttribute("data-mantine-color-scheme", e);
}
function $0({
  manager: r,
  defaultColorScheme: t,
  getRootElement: e,
  forceColorScheme: n
}) {
  const o = Ke(), [a, c] = pe(() => r.get(t)), l = n || a, u = Ve(
    (f) => {
      n || (Ci(f, e), c(f), r.set(f));
    },
    [r.set, l, n]
  ), h = Ve(() => {
    c(t), Ci(t, e), r.clear();
  }, [r.clear, t]);
  return me(() => (r.subscribe(u), r.unsubscribe), [r.subscribe, r.unsubscribe]), Ki(() => {
    Ci(r.get(t), e);
  }, []), me(() => {
    var g;
    if (n)
      return Ci(n, e), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const f = (m) => {
      a === "auto" && Ci(m.matches ? "dark" : "light", e);
    };
    return (g = o.current) == null || g.addEventListener("change", f), () => {
      var m;
      return (m = o.current) == null ? void 0 : m.removeEventListener("change", f);
    };
  }, [a, n]), { colorScheme: l, setColorScheme: u, clearColorScheme: h };
}
function G0({
  respectReducedMotion: r,
  getRootElement: t
}) {
  Ki(() => {
    var e;
    r && ((e = t()) == null || e.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
q0();
function eg({
  theme: r,
  children: t,
  getStyleNonce: e,
  withCssVariables: n = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: c = M0(),
  defaultColorScheme: l = "light",
  getRootElement: u = () => document.documentElement,
  cssVariablesResolver: h,
  forceColorScheme: f
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: v } = $0({
    defaultColorScheme: l,
    forceColorScheme: f,
    manager: c,
    getRootElement: u
  });
  return G0({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: u
  }), /* @__PURE__ */ k.createElement(
    jp.Provider,
    {
      value: {
        colorSchemeManager: c,
        colorScheme: g,
        setColorScheme: m,
        clearColorScheme: v,
        getRootElement: u,
        classNamesPrefix: a,
        getStyleNonce: e,
        cssVariablesResolver: h,
        cssVariablesSelector: o
      }
    },
    /* @__PURE__ */ k.createElement(Jp, { theme: r }, n && /* @__PURE__ */ k.createElement(Zp, { cssVariablesSelector: o }), /* @__PURE__ */ k.createElement(U0, null), t)
  );
}
eg.displayName = "@mantine/core/MantineProvider";
function tg({
  classNames: r,
  styles: t,
  props: e,
  stylesCtx: n
}) {
  const o = Kn();
  return {
    resolvedClassNames: vs({
      theme: o,
      classNames: r,
      props: e,
      stylesCtx: n || void 0
    }),
    resolvedStyles: is({
      theme: o,
      styles: t,
      props: e,
      stylesCtx: n || void 0
    })
  };
}
const z0 = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function W0({ theme: r, options: t, unstyled: e }) {
  return bn(
    (t == null ? void 0 : t.focusable) && !e && (r.focusClassName || z0[r.focusRing]),
    (t == null ? void 0 : t.active) && !e && r.activeClassName
  );
}
function V0({
  selector: r,
  stylesCtx: t,
  options: e,
  props: n,
  theme: o
}) {
  return vs({
    theme: o,
    classNames: e == null ? void 0 : e.classNames,
    props: (e == null ? void 0 : e.props) || n,
    stylesCtx: t
  })[r];
}
function Y0({
  selector: r,
  stylesCtx: t,
  theme: e,
  classNames: n,
  props: o
}) {
  return vs({ theme: e, classNames: n, props: o, stylesCtx: t })[r];
}
function j0({ rootSelector: r, selector: t, className: e }) {
  return r === t ? e : void 0;
}
function Q0({ selector: r, classes: t, unstyled: e }) {
  return e ? void 0 : t[r];
}
function J0({
  themeName: r,
  classNamesPrefix: t,
  selector: e
}) {
  return r.map((n) => `${t}-${n}-${e}`);
}
function X0({
  themeName: r,
  theme: t,
  selector: e,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (a) => {
      var c, l;
      return (l = vs({
        theme: t,
        classNames: (c = t.components[a]) == null ? void 0 : c.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : l[e];
    }
  );
}
function Z0({
  options: r,
  classes: t,
  selector: e,
  unstyled: n
}) {
  return r != null && r.variant && !n ? t[`${e}--${r.variant}`] : void 0;
}
function eI({
  theme: r,
  options: t,
  themeName: e,
  selector: n,
  classNamesPrefix: o,
  classNames: a,
  classes: c,
  unstyled: l,
  className: u,
  rootSelector: h,
  props: f,
  stylesCtx: g
}) {
  return bn(
    W0({ theme: r, options: t, unstyled: l }),
    X0({ theme: r, themeName: e, selector: n, props: f, stylesCtx: g }),
    Z0({ options: t, classes: c, selector: n, unstyled: l }),
    Y0({ selector: n, stylesCtx: g, theme: r, classNames: a, props: f }),
    V0({ selector: n, stylesCtx: g, options: t, props: f, theme: r }),
    j0({ rootSelector: h, selector: n, className: u }),
    Q0({ selector: n, classes: c, unstyled: l }),
    J0({ themeName: e, classNamesPrefix: o, selector: n }),
    t == null ? void 0 : t.className
  );
}
function tI({
  theme: r,
  themeName: t,
  props: e,
  stylesCtx: n,
  selector: o
}) {
  return t.map(
    (a) => {
      var c;
      return is({
        theme: r,
        styles: (c = r.components[a]) == null ? void 0 : c.styles,
        props: e,
        stylesCtx: n
      })[o];
    }
  ).reduce((a, c) => ({ ...a, ...c }), {});
}
function Nl({ style: r, theme: t }) {
  return Array.isArray(r) ? [...r].reduce(
    (e, n) => ({ ...e, ...Nl({ style: n, theme: t }) }),
    {}
  ) : typeof r == "function" ? r(t) : r ?? {};
}
function rI(r) {
  return r.reduce((t, e) => (e && Object.keys(e).forEach((n) => {
    t[n] = { ...t[n], ...Gl(e[n]) };
  }), t), {});
}
function nI({
  vars: r,
  varsResolver: t,
  theme: e,
  props: n,
  stylesCtx: o,
  selector: a,
  themeName: c
}) {
  var l;
  return (l = rI([
    t == null ? void 0 : t(e, n, o),
    ...c.map((u) => {
      var h, f, g;
      return (g = (f = (h = e.components) == null ? void 0 : h[u]) == null ? void 0 : f.vars) == null ? void 0 : g.call(f, e, n, o);
    }),
    r == null ? void 0 : r(e, n, o)
  ])) == null ? void 0 : l[a];
}
function oI({
  theme: r,
  themeName: t,
  selector: e,
  options: n,
  props: o,
  stylesCtx: a,
  rootSelector: c,
  styles: l,
  style: u,
  vars: h,
  varsResolver: f
}) {
  return {
    ...tI({ theme: r, themeName: t, props: o, stylesCtx: a, selector: e }),
    ...is({ theme: r, styles: l, props: o, stylesCtx: a })[e],
    ...is({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: a })[e],
    ...nI({ theme: r, props: o, stylesCtx: a, vars: h, varsResolver: f, selector: e, themeName: t }),
    ...c === e ? Nl({ style: u, theme: r }) : null,
    ...Nl({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function lt({
  name: r,
  classes: t,
  props: e,
  stylesCtx: n,
  className: o,
  style: a,
  rootSelector: c = "root",
  unstyled: l,
  classNames: u,
  styles: h,
  vars: f,
  varsResolver: g
}) {
  const m = Kn(), v = I0(), C = (Array.isArray(r) ? r : [r]).filter((b) => b);
  return (b, _) => ({
    className: eI({
      theme: m,
      options: _,
      themeName: C,
      selector: b,
      classNamesPrefix: v,
      classNames: u,
      classes: t,
      unstyled: l,
      className: o,
      rootSelector: c,
      props: e,
      stylesCtx: n
    }),
    style: oI({
      theme: m,
      themeName: C,
      selector: b,
      options: _,
      props: e,
      stylesCtx: n,
      rootSelector: c,
      styles: h,
      style: a,
      vars: f,
      varsResolver: g
    })
  });
}
function Ee(r, t, e) {
  var c;
  const n = Kn(), o = (c = n.components[r]) == null ? void 0 : c.defaultProps, a = typeof o == "function" ? o(n) : o;
  return { ...t, ...a, ...Gl(e) };
}
function Vf(r) {
  return Zr(r).reduce(
    (t, e) => r[e] !== void 0 ? `${t}${YT(e)}:${r[e]};` : t,
    ""
  ).trim();
}
function iI({ selector: r, styles: t, media: e }) {
  const n = t ? Vf(t) : "", o = Array.isArray(e) ? e.map((a) => `@media${a.query}{${r}{${Vf(a.styles)}}}`) : [];
  return `${n ? `${r}{${n}}` : ""}${o.join("")}`.trim();
}
function aI({ selector: r, styles: t, media: e }) {
  const n = Wl();
  return /* @__PURE__ */ k.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: { __html: iI({ selector: r, styles: t, media: e }) }
    }
  );
}
function Es(r) {
  const {
    m: t,
    mx: e,
    my: n,
    mt: o,
    mb: a,
    ml: c,
    mr: l,
    p: u,
    px: h,
    py: f,
    pt: g,
    pb: m,
    pl: v,
    pr: C,
    bg: b,
    c: _,
    opacity: A,
    ff: I,
    fz: T,
    fw: N,
    lts: x,
    ta: D,
    lh: W,
    fs: z,
    tt: se,
    td: ie,
    w: we,
    miw: ne,
    maw: de,
    h: ce,
    mih: ve,
    mah: j,
    bgsz: te,
    bgp: Z,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: ut,
    left: Gr,
    bottom: rn,
    right: Yt,
    inset: or,
    display: nn,
    hiddenFrom: ir,
    visibleFrom: Mr,
    lightHidden: on,
    darkHidden: qt,
    ...vr
  } = r;
  return { styleProps: Gl({
    m: t,
    mx: e,
    my: n,
    mt: o,
    mb: a,
    ml: c,
    mr: l,
    p: u,
    px: h,
    py: f,
    pt: g,
    pb: m,
    pl: v,
    pr: C,
    bg: b,
    c: _,
    opacity: A,
    ff: I,
    fz: T,
    fw: N,
    lts: x,
    ta: D,
    lh: W,
    fs: z,
    tt: se,
    td: ie,
    w: we,
    miw: ne,
    maw: de,
    h: ce,
    mih: ve,
    mah: j,
    bgsz: te,
    bgp: Z,
    bgr: Pe,
    bga: Qe,
    pos: ot,
    top: ut,
    left: Gr,
    bottom: rn,
    right: Yt,
    inset: or,
    display: nn,
    hiddenFrom: ir,
    visibleFrom: Mr,
    lightHidden: on,
    darkHidden: qt
  }), rest: vr };
}
const sI = {
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
function cI(r, t) {
  const e = Cs({ color: r, theme: t });
  return e.color === "dimmed" ? "var(--mantine-color-dimmed)" : e.color === "bright" ? "var(--mantine-color-bright)" : e.isThemeColor && e.shade === void 0 ? `var(--mantine-color-${e.color}-text)` : e.variable ? `var(${e.variable})` : e.color;
}
function lI(r, t) {
  return typeof r == "string" && r in t.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "number" || typeof r == "string" ? K(r) : r;
}
function uI(r) {
  return r;
}
function dI(r, t) {
  return typeof r == "string" && r in t.lineHeights ? `var(--mantine-line-height-${r})` : r;
}
function hI(r) {
  return typeof r == "number" ? K(r) : r;
}
function fI(r, t) {
  if (typeof r == "number")
    return K(r);
  if (typeof r == "string") {
    const e = r.replace("-", "");
    if (!(e in t.spacing))
      return K(r);
    const n = `--mantine-spacing-${e}`;
    return r.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return r;
}
const al = {
  color: cI,
  fontSize: lI,
  spacing: fI,
  identity: uI,
  size: hI,
  lineHeight: dI
};
function Yf(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function pI({
  media: r,
  ...t
}) {
  const n = Object.keys(r).sort((o, a) => Number(Yf(o)) - Number(Yf(a))).map((o) => ({ query: o, styles: r[o] }));
  return { ...t, media: n };
}
function gI(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const t = Object.keys(r);
  return !(t.length === 1 && t[0] === "base");
}
function mI(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function vI(r) {
  return typeof r == "object" && r !== null ? Zr(r).filter((t) => t !== "base") : [];
}
function yI(r, t) {
  return typeof r == "object" && r !== null && t in r ? r[t] : r;
}
function CI({
  styleProps: r,
  data: t,
  theme: e
}) {
  return pI(
    Zr(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return n;
        const a = t[o], c = Array.isArray(a.property) ? a.property : [a.property], l = mI(r[o]);
        if (!gI(r[o]))
          return c.forEach((h) => {
            n.inlineStyles[h] = al[a.type](l, e);
          }), n;
        n.hasResponsiveStyles = !0;
        const u = vI(r[o]);
        return c.forEach((h) => {
          l && (n.styles[h] = al[a.type](l, e)), u.forEach((f) => {
            const g = `(min-width: ${e.breakpoints[f]})`;
            n.media[g] = {
              ...n.media[g],
              [h]: al[a.type](
                yI(r[o], f),
                e
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
function EI() {
  return `__m__-${vp().replace(/:/g, "")}`;
}
function rg(r, t) {
  return Array.isArray(r) ? [...r].reduce(
    (e, n) => ({ ...e, ...rg(n, t) }),
    {}
  ) : typeof r == "function" ? r(t) : r ?? {};
}
function ng(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function wI(r) {
  return Object.keys(r).reduce((t, e) => {
    const n = r[e];
    return n === void 0 || n === "" || n === !1 || n === null || (t[ng(e)] = r[e]), t;
  }, {});
}
function og(r) {
  return r ? typeof r == "string" ? { [ng(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (t, e) => ({ ...t, ...og(e) }),
    {}
  ) : wI(r) : null;
}
function Ol(r, t) {
  return Array.isArray(r) ? [...r].reduce(
    (e, n) => ({ ...e, ...Ol(n, t) }),
    {}
  ) : typeof r == "function" ? r(t) : r ?? {};
}
function bI({
  theme: r,
  style: t,
  vars: e,
  styleProps: n
}) {
  const o = Ol(t, r), a = Ol(e, r);
  return { ...o, ...a, ...n };
}
const ig = ft(
  ({
    component: r,
    style: t,
    __vars: e,
    className: n,
    variant: o,
    mod: a,
    size: c,
    hiddenFrom: l,
    visibleFrom: u,
    lightHidden: h,
    darkHidden: f,
    renderRoot: g,
    ...m
  }, v) => {
    const C = Kn(), b = r || "div", { styleProps: _, rest: A } = Es(m), I = EI(), T = CI({
      styleProps: _,
      theme: C,
      data: sI
    }), N = {
      ref: v,
      style: bI({
        theme: C,
        style: t,
        vars: e,
        styleProps: T.inlineStyles
      }),
      className: bn(n, {
        [I]: T.hasResponsiveStyles,
        "mantine-light-hidden": h,
        "mantine-dark-hidden": f,
        [`mantine-hidden-from-${l}`]: l,
        [`mantine-visible-from-${u}`]: u
      }),
      "data-variant": o,
      "data-size": Fp(c) ? void 0 : c || void 0,
      ...og(a),
      ...A
    };
    return /* @__PURE__ */ k.createElement(k.Fragment, null, T.hasResponsiveStyles && /* @__PURE__ */ k.createElement(
      aI,
      {
        selector: `.${I}`,
        styles: T.styles,
        media: T.media
      }
    ), typeof g == "function" ? g(N) : /* @__PURE__ */ k.createElement(b, { ...N }));
  }
);
ig.displayName = "@mantine/core/Box";
const ke = ig;
function ag(r) {
  return r;
}
function He(r) {
  const t = ft(r);
  return t.extend = ag, t;
}
function Jo(r) {
  const t = ft(r);
  return t.extend = ag, t;
}
const _I = Fn({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function jl() {
  return Bn(_I);
}
function SI(r) {
  if (!r || typeof r == "string")
    return 0;
  const t = r / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function sl(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const Ei = typeof window < "u" && window.requestAnimationFrame;
function TI({
  transitionDuration: r,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: e = () => {
  },
  opened: n
}) {
  const o = Ke(null), a = 0, c = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [l, u] = pe(n ? {} : c), h = (C) => {
    V_(() => u(C));
  }, f = (C) => {
    h((b) => ({ ...b, ...C }));
  };
  function g(C) {
    return {
      transition: `height ${r || SI(C)}ms ${t}`
    };
  }
  lo(() => {
    typeof Ei == "function" && Ei(n ? () => {
      f({ willChange: "height", display: "block", overflow: "hidden" }), Ei(() => {
        const C = sl(o);
        f({ ...g(C), height: C });
      });
    } : () => {
      const C = sl(o);
      f({ ...g(C), willChange: "height", height: C }), Ei(() => f({ height: a, overflow: "hidden" }));
    });
  }, [n]);
  const m = (C) => {
    if (!(C.target !== o.current || C.propertyName !== "height"))
      if (n) {
        const b = sl(o);
        b === l.height ? h({}) : f({ height: b }), e();
      } else
        l.height === a && (h(c), e());
  };
  function v({ style: C = {}, refKey: b = "ref", ..._ } = {}) {
    const A = _[b];
    return {
      "aria-hidden": !n,
      ..._,
      [b]: Vp(o, A),
      onTransitionEnd: m,
      style: { boxSizing: "border-box", ...C, ...l }
    };
  }
  return v;
}
const II = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, sg = He((r, t) => {
  const {
    children: e,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: a,
    style: c,
    onTransitionEnd: l,
    animateOpacity: u,
    ...h
  } = Ee("Collapse", II, r), f = Kn(), g = Yp(), v = (f.respectReducedMotion ? g : !1) ? 0 : o, C = TI({
    opened: n,
    transitionDuration: v,
    transitionTimingFunction: a,
    onTransitionEnd: l
  });
  return v === 0 ? n ? /* @__PURE__ */ k.createElement(ke, { ...h }, e) : null : /* @__PURE__ */ k.createElement(ke, { ...C({ style: rg(c, f), ref: t, ...h }) }, /* @__PURE__ */ k.createElement(
    "div",
    {
      style: {
        opacity: n || !u ? 1 : 0,
        transition: u ? `opacity ${v}ms ${a}` : "none"
      }
    },
    e
  ));
});
sg.displayName = "@mantine/core/Collapse";
const [AI, Pr] = jo(
  "ScrollArea.Root component was not found in tree"
);
function zo(r, t) {
  const e = to(t);
  Ki(() => {
    let n = 0;
    if (r) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(e);
      });
      return o.observe(r), () => {
        window.cancelAnimationFrame(n), o.unobserve(r);
      };
    }
  }, [r, e]);
}
const RI = k.forwardRef((r, t) => {
  const { style: e, ...n } = r, o = Pr(), [a, c] = k.useState(0), [l, u] = k.useState(0), h = !!(a && l);
  return zo(o.scrollbarX, () => {
    var g;
    const f = ((g = o.scrollbarX) == null ? void 0 : g.offsetHeight) || 0;
    o.onCornerHeightChange(f), u(f);
  }), zo(o.scrollbarY, () => {
    var g;
    const f = ((g = o.scrollbarY) == null ? void 0 : g.offsetWidth) || 0;
    o.onCornerWidthChange(f), c(f);
  }), h ? /* @__PURE__ */ k.createElement("div", { ...n, ref: t, style: { ...e, width: a, height: l } }) : null;
}), kI = k.forwardRef(
  (r, t) => {
    const e = Pr(), n = !!(e.scrollbarX && e.scrollbarY);
    return e.type !== "scroll" && n ? /* @__PURE__ */ k.createElement(RI, { ...r, ref: t }) : null;
  }
), PI = {
  scrollHideDelay: 1e3,
  type: "hover"
}, cg = ft((r, t) => {
  const e = Ee("ScrollAreaRoot", PI, r), { type: n, scrollHideDelay: o, scrollbars: a, ...c } = e, [l, u] = pe(null), [h, f] = pe(null), [g, m] = pe(null), [v, C] = pe(null), [b, _] = pe(null), [A, I] = pe(0), [T, N] = pe(0), [x, D] = pe(!1), [W, z] = pe(!1), se = kr(t, (ie) => u(ie));
  return /* @__PURE__ */ k.createElement(
    AI,
    {
      value: {
        type: n,
        scrollHideDelay: o,
        scrollArea: l,
        viewport: h,
        onViewportChange: f,
        content: g,
        onContentChange: m,
        scrollbarX: v,
        onScrollbarXChange: C,
        scrollbarXEnabled: x,
        onScrollbarXEnabledChange: D,
        scrollbarY: b,
        onScrollbarYChange: _,
        scrollbarYEnabled: W,
        onScrollbarYEnabledChange: z,
        onCornerWidthChange: I,
        onCornerHeightChange: N
      }
    },
    /* @__PURE__ */ k.createElement(
      ke,
      {
        ...c,
        ref: se,
        __vars: {
          "--sa-corner-width": a !== "xy" ? "0px" : `${A}px`,
          "--sa-corner-height": a !== "xy" ? "0px" : `${T}px`
        }
      }
    )
  );
});
cg.displayName = "@mantine/core/ScrollAreaRoot";
function lg(r, t) {
  const e = r / t;
  return Number.isNaN(e) ? 0 : e;
}
function ws(r) {
  const t = lg(r.viewport, r.content), e = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function ug(r, t) {
  return (e) => {
    if (r[0] === r[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (r[1] - r[0]);
    return t[0] + n * (e - r[0]);
  };
}
function NI(r, [t, e]) {
  return Math.min(e, Math.max(t, r));
}
function jf(r, t, e = "ltr") {
  const n = ws(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, c = t.content - t.viewport, l = a - n, u = e === "ltr" ? [0, c] : [c * -1, 0], h = NI(r, u);
  return ug([0, c], [0, l])(h);
}
function OI(r, t, e, n = "ltr") {
  const o = ws(e), a = o / 2, c = t || a, l = o - c, u = e.scrollbar.paddingStart + c, h = e.scrollbar.size - e.scrollbar.paddingEnd - l, f = e.content - e.viewport, g = n === "ltr" ? [0, f] : [f * -1, 0];
  return ug([u, h], g)(r);
}
function dg(r, t) {
  return r > 0 && r < t;
}
function as(r) {
  return r ? parseInt(r, 10) : 0;
}
function ao(r, t, { checkForDefaultPrevented: e = !0 } = {}) {
  return (n) => {
    r == null || r(n), (e === !1 || !n.defaultPrevented) && (t == null || t(n));
  };
}
const [MI, hg] = jo(
  "ScrollAreaScrollbar was not found in tree"
), fg = ft((r, t) => {
  const {
    sizes: e,
    hasThumb: n,
    onThumbChange: o,
    onThumbPointerUp: a,
    onThumbPointerDown: c,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: h,
    onResize: f,
    ...g
  } = r, m = Pr(), [v, C] = k.useState(null), b = kr(t, (z) => C(z)), _ = k.useRef(null), A = k.useRef(""), { viewport: I } = m, T = e.content - e.viewport, N = to(h), x = to(l), D = ys(f, 10), W = (z) => {
    if (_.current) {
      const se = z.clientX - _.current.left, ie = z.clientY - _.current.top;
      u({ x: se, y: ie });
    }
  };
  return me(() => {
    const z = (se) => {
      const ie = se.target;
      (v == null ? void 0 : v.contains(ie)) && N(se, T);
    };
    return document.addEventListener("wheel", z, { passive: !1 }), () => document.removeEventListener("wheel", z, { passive: !1 });
  }, [I, v, T, N]), me(x, [e, x]), zo(v, D), zo(m.content, D), /* @__PURE__ */ k.createElement(
    MI,
    {
      value: {
        scrollbar: v,
        hasThumb: n,
        onThumbChange: to(o),
        onThumbPointerUp: to(a),
        onThumbPositionChange: x,
        onThumbPointerDown: to(c)
      }
    },
    /* @__PURE__ */ k.createElement(
      "div",
      {
        ...g,
        ref: b,
        style: { position: "absolute", ...g.style },
        onPointerDown: ao(r.onPointerDown, (z) => {
          z.button === 0 && (z.target.setPointerCapture(z.pointerId), _.current = v.getBoundingClientRect(), A.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", W(z));
        }),
        onPointerMove: ao(r.onPointerMove, W),
        onPointerUp: ao(r.onPointerUp, (z) => {
          const se = z.target;
          se.hasPointerCapture(z.pointerId) && se.releasePointerCapture(z.pointerId), document.body.style.webkitUserSelect = A.current, _.current = null;
        })
      }
    )
  );
}), xI = ft(
  (r, t) => {
    const { sizes: e, onSizesChange: n, style: o, ...a } = r, c = Pr(), [l, u] = pe(), h = Ke(null), f = kr(t, h, c.onScrollbarXChange);
    return me(() => {
      h.current && u(getComputedStyle(h.current));
    }, [h]), /* @__PURE__ */ k.createElement(
      fg,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: f,
        sizes: e,
        style: {
          ...o,
          "--sa-thumb-width": `${ws(e)}px`
        },
        onThumbPointerDown: (g) => r.onThumbPointerDown(g.x),
        onDragScroll: (g) => r.onDragScroll(g.x),
        onWheelScroll: (g, m) => {
          if (c.viewport) {
            const v = c.viewport.scrollLeft + g.deltaX;
            r.onWheelScroll(v), dg(v, m) && g.preventDefault();
          }
        },
        onResize: () => {
          h.current && c.viewport && l && n({
            content: c.viewport.scrollWidth,
            viewport: c.viewport.offsetWidth,
            scrollbar: {
              size: h.current.clientWidth,
              paddingStart: as(l.paddingLeft),
              paddingEnd: as(l.paddingRight)
            }
          });
        }
      }
    );
  }
), LI = ft(
  (r, t) => {
    const { sizes: e, onSizesChange: n, style: o, ...a } = r, c = Pr(), [l, u] = k.useState(), h = Ke(null), f = kr(t, h, c.onScrollbarYChange);
    return me(() => {
      h.current && u(getComputedStyle(h.current));
    }, [h]), /* @__PURE__ */ k.createElement(
      fg,
      {
        ...a,
        "data-orientation": "vertical",
        ref: f,
        sizes: e,
        style: {
          "--sa-thumb-height": `${ws(e)}px`,
          ...o
        },
        onThumbPointerDown: (g) => r.onThumbPointerDown(g.y),
        onDragScroll: (g) => r.onDragScroll(g.y),
        onWheelScroll: (g, m) => {
          if (c.viewport) {
            const v = c.viewport.scrollTop + g.deltaY;
            r.onWheelScroll(v), dg(v, m) && g.preventDefault();
          }
        },
        onResize: () => {
          h.current && c.viewport && l && n({
            content: c.viewport.scrollHeight,
            viewport: c.viewport.offsetHeight,
            scrollbar: {
              size: h.current.clientHeight,
              paddingStart: as(l.paddingTop),
              paddingEnd: as(l.paddingBottom)
            }
          });
        }
      }
    );
  }
), Ql = ft((r, t) => {
  const { orientation: e = "vertical", ...n } = r, { dir: o } = jl(), a = Pr(), c = Ke(null), l = Ke(0), [u, h] = pe({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), f = lg(u.viewport, u.content), g = {
    ...n,
    sizes: u,
    onSizesChange: h,
    hasThumb: f > 0 && f < 1,
    onThumbChange: (v) => {
      c.current = v;
    },
    onThumbPointerUp: () => {
      l.current = 0;
    },
    onThumbPointerDown: (v) => {
      l.current = v;
    }
  }, m = (v, C) => OI(v, l.current, u, C);
  return e === "horizontal" ? /* @__PURE__ */ k.createElement(
    xI,
    {
      ...g,
      ref: t,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const v = a.viewport.scrollLeft, C = jf(v, u, o);
          c.current.style.transform = `translate3d(${C}px, 0, 0)`;
        }
      },
      onWheelScroll: (v) => {
        a.viewport && (a.viewport.scrollLeft = v);
      },
      onDragScroll: (v) => {
        a.viewport && (a.viewport.scrollLeft = m(v, o));
      }
    }
  ) : e === "vertical" ? /* @__PURE__ */ k.createElement(
    LI,
    {
      ...g,
      ref: t,
      onThumbPositionChange: () => {
        if (a.viewport && c.current) {
          const v = a.viewport.scrollTop, C = jf(v, u);
          c.current.style.transform = `translate3d(0, ${C}px, 0)`;
        }
      },
      onWheelScroll: (v) => {
        a.viewport && (a.viewport.scrollTop = v);
      },
      onDragScroll: (v) => {
        a.viewport && (a.viewport.scrollTop = m(v));
      }
    }
  ) : null;
}), pg = ft(
  (r, t) => {
    const e = Pr(), { forceMount: n, ...o } = r, [a, c] = pe(!1), l = r.orientation === "horizontal", u = ys(() => {
      if (e.viewport) {
        const h = e.viewport.offsetWidth < e.viewport.scrollWidth, f = e.viewport.offsetHeight < e.viewport.scrollHeight;
        c(l ? h : f);
      }
    }, 10);
    return zo(e.viewport, u), zo(e.content, u), n || a ? /* @__PURE__ */ k.createElement(
      Ql,
      {
        "data-state": a ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), DI = ft(
  (r, t) => {
    const { forceMount: e, ...n } = r, o = Pr(), [a, c] = pe(!1);
    return me(() => {
      const { scrollArea: l } = o;
      let u = 0;
      if (l) {
        const h = () => {
          window.clearTimeout(u), c(!0);
        }, f = () => {
          u = window.setTimeout(() => c(!1), o.scrollHideDelay);
        };
        return l.addEventListener("pointerenter", h), l.addEventListener("pointerleave", f), () => {
          window.clearTimeout(u), l.removeEventListener("pointerenter", h), l.removeEventListener("pointerleave", f);
        };
      }
    }, [o.scrollArea, o.scrollHideDelay]), e || a ? /* @__PURE__ */ k.createElement(
      pg,
      {
        "data-state": a ? "visible" : "hidden",
        ...n,
        ref: t
      }
    ) : null;
  }
), UI = ft(
  (r, t) => {
    const { forceMount: e, ...n } = r, o = Pr(), a = r.orientation === "horizontal", [c, l] = pe("hidden"), u = ys(() => l("idle"), 100);
    return me(() => {
      if (c === "idle") {
        const h = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(h);
      }
    }, [c, o.scrollHideDelay]), me(() => {
      const { viewport: h } = o, f = a ? "scrollLeft" : "scrollTop";
      if (h) {
        let g = h[f];
        const m = () => {
          const v = h[f];
          g !== v && (l("scrolling"), u()), g = v;
        };
        return h.addEventListener("scroll", m), () => h.removeEventListener("scroll", m);
      }
    }, [o.viewport, a, u]), e || c !== "hidden" ? /* @__PURE__ */ k.createElement(
      Ql,
      {
        "data-state": c === "hidden" ? "hidden" : "visible",
        ...n,
        ref: t,
        onPointerEnter: ao(r.onPointerEnter, () => l("interacting")),
        onPointerLeave: ao(r.onPointerLeave, () => l("idle"))
      }
    ) : null;
  }
), Qf = k.forwardRef(
  (r, t) => {
    const { forceMount: e, ...n } = r, o = Pr(), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: c } = o, l = r.orientation === "horizontal";
    return k.useEffect(() => (l ? a(!0) : c(!0), () => {
      l ? a(!1) : c(!1);
    }), [l, a, c]), o.type === "hover" ? /* @__PURE__ */ k.createElement(DI, { ...n, ref: t, forceMount: e }) : o.type === "scroll" ? /* @__PURE__ */ k.createElement(UI, { ...n, ref: t, forceMount: e }) : o.type === "auto" ? /* @__PURE__ */ k.createElement(pg, { ...n, ref: t, forceMount: e }) : o.type === "always" ? /* @__PURE__ */ k.createElement(Ql, { ...n, ref: t }) : null;
  }
);
function HI(r, t = () => {
}) {
  let e = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const a = { left: r.scrollLeft, top: r.scrollTop }, c = e.left !== a.left, l = e.top !== a.top;
    (c || l) && t(), e = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const FI = ft((r, t) => {
  const { style: e, ...n } = r, o = Pr(), a = hg(), { onThumbPositionChange: c } = a, l = kr(t, (f) => a.onThumbChange(f)), u = Ke(), h = ys(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return me(() => {
    const { viewport: f } = o;
    if (f) {
      const g = () => {
        if (h(), !u.current) {
          const m = HI(f, c);
          u.current = m, c();
        }
      };
      return c(), f.addEventListener("scroll", g), () => f.removeEventListener("scroll", g);
    }
  }, [o.viewport, h, c]), /* @__PURE__ */ k.createElement(
    "div",
    {
      "data-state": a.hasThumb ? "visible" : "hidden",
      ...n,
      ref: l,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...e
      },
      onPointerDownCapture: ao(r.onPointerDownCapture, (f) => {
        const m = f.target.getBoundingClientRect(), v = f.clientX - m.left, C = f.clientY - m.top;
        a.onThumbPointerDown({ x: v, y: C });
      }),
      onPointerUp: ao(r.onPointerUp, a.onThumbPointerUp)
    }
  );
}), Jf = k.forwardRef(
  (r, t) => {
    const { forceMount: e, ...n } = r, o = hg();
    return e || o.hasThumb ? /* @__PURE__ */ k.createElement(FI, { ref: t, ...n }) : null;
  }
), gg = ft(
  ({ children: r, style: t, ...e }, n) => {
    const o = Pr(), a = kr(n, o.onViewportChange);
    return /* @__PURE__ */ k.createElement(
      ke,
      {
        ...e,
        ref: a,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        }
      },
      /* @__PURE__ */ k.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange }, r)
    );
  }
);
gg.displayName = "@mantine/core/ScrollAreaViewport";
var Jl = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const mg = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, BI = (r, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": K(t)
  }
}), qi = He((r, t) => {
  const e = Ee("ScrollArea", mg, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    scrollbarSize: u,
    vars: h,
    type: f,
    scrollHideDelay: g,
    viewportProps: m,
    viewportRef: v,
    onScrollPositionChange: C,
    children: b,
    offsetScrollbars: _,
    scrollbars: A,
    ...I
  } = e, [T, N] = pe(!1), x = lt({
    name: "ScrollArea",
    props: e,
    classes: Jl,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    vars: h,
    varsResolver: BI
  });
  return /* @__PURE__ */ k.createElement(
    cg,
    {
      type: f === "never" ? "always" : f,
      scrollHideDelay: g,
      ref: t,
      scrollbars: A,
      ...x("root"),
      ...I
    },
    /* @__PURE__ */ k.createElement(
      gg,
      {
        ...m,
        ...x("viewport"),
        ref: v,
        "data-offset-scrollbars": _ === !0 ? "xy" : _ || void 0,
        "data-scrollbars": A || void 0,
        onScroll: typeof C == "function" ? ({ currentTarget: D }) => C({
          x: D.scrollLeft,
          y: D.scrollTop
        }) : void 0
      },
      b
    ),
    (A === "xy" || A === "x") && /* @__PURE__ */ k.createElement(
      Qf,
      {
        ...x("scrollbar"),
        orientation: "horizontal",
        "data-hidden": f === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1)
      },
      /* @__PURE__ */ k.createElement(Jf, { ...x("thumb") })
    ),
    (A === "xy" || A === "y") && /* @__PURE__ */ k.createElement(
      Qf,
      {
        ...x("scrollbar"),
        orientation: "vertical",
        "data-hidden": f === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1)
      },
      /* @__PURE__ */ k.createElement(Jf, { ...x("thumb") })
    ),
    /* @__PURE__ */ k.createElement(
      kI,
      {
        ...x("corner"),
        "data-hovered": T || void 0,
        "data-hidden": f === "never" || void 0
      }
    )
  );
});
qi.displayName = "@mantine/core/ScrollArea";
const Xl = He((r, t) => {
  const {
    children: e,
    classNames: n,
    styles: o,
    scrollbarSize: a,
    scrollHideDelay: c,
    type: l,
    dir: u,
    offsetScrollbars: h,
    viewportRef: f,
    onScrollPositionChange: g,
    unstyled: m,
    variant: v,
    viewportProps: C,
    scrollbars: b,
    style: _,
    vars: A,
    ...I
  } = Ee("ScrollAreaAutosize", mg, r);
  return /* @__PURE__ */ k.createElement(ke, { ...I, ref: t, style: [{ display: "flex" }, _] }, /* @__PURE__ */ k.createElement(ke, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ k.createElement(
    qi,
    {
      classNames: n,
      styles: o,
      scrollHideDelay: c,
      scrollbarSize: a,
      type: l,
      dir: u,
      offsetScrollbars: h,
      viewportRef: f,
      onScrollPositionChange: g,
      unstyled: m,
      variant: v,
      viewportProps: C,
      vars: A,
      scrollbars: b
    },
    e
  )));
});
qi.classes = Jl;
Xl.displayName = "@mantine/core/ScrollAreaAutosize";
Xl.classes = Jl;
qi.Autosize = Xl;
var vg = { root: "m-87cf2631" };
const KI = {
  __staticSelector: "UnstyledButton"
}, $i = Jo(
  (r, t) => {
    const e = Ee("UnstyledButton", KI, r), {
      className: n,
      component: o = "button",
      __staticSelector: a,
      unstyled: c,
      classNames: l,
      styles: u,
      style: h,
      ...f
    } = e, g = lt({
      name: a,
      props: e,
      classes: vg,
      className: n,
      style: h,
      classNames: l,
      styles: u,
      unstyled: c
    });
    return /* @__PURE__ */ k.createElement(
      ke,
      {
        ...g("root", { focusable: !0 }),
        component: o,
        ref: t,
        type: o === "button" ? "button" : void 0,
        ...f
      }
    );
  }
);
$i.classes = vg;
$i.displayName = "@mantine/core/UnstyledButton";
const qr = Math.min, Ht = Math.max, ss = Math.round, Ba = Math.floor, Un = (r) => ({
  x: r,
  y: r
}), qI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $I = {
  start: "end",
  end: "start"
};
function Ml(r, t, e) {
  return Ht(r, qr(t, e));
}
function En(r, t) {
  return typeof r == "function" ? r(t) : r;
}
function $r(r) {
  return r.split("-")[0];
}
function Xo(r) {
  return r.split("-")[1];
}
function Zl(r) {
  return r === "x" ? "y" : "x";
}
function eu(r) {
  return r === "y" ? "height" : "width";
}
function po(r) {
  return ["top", "bottom"].includes($r(r)) ? "y" : "x";
}
function tu(r) {
  return Zl(po(r));
}
function GI(r, t, e) {
  e === void 0 && (e = !1);
  const n = Xo(r), o = tu(r), a = eu(o);
  let c = o === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = cs(c)), [c, cs(c)];
}
function zI(r) {
  const t = cs(r);
  return [xl(r), t, xl(t)];
}
function xl(r) {
  return r.replace(/start|end/g, (t) => $I[t]);
}
function WI(r, t, e) {
  const n = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], c = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return e ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? a : c;
    default:
      return [];
  }
}
function VI(r, t, e, n) {
  const o = Xo(r);
  let a = WI($r(r), e === "start", n);
  return o && (a = a.map((c) => c + "-" + o), t && (a = a.concat(a.map(xl)))), a;
}
function cs(r) {
  return r.replace(/left|right|bottom|top/g, (t) => qI[t]);
}
function YI(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function ru(r) {
  return typeof r != "number" ? YI(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function Wo(r) {
  return {
    ...r,
    top: r.y,
    left: r.x,
    right: r.x + r.width,
    bottom: r.y + r.height
  };
}
function Xf(r, t, e) {
  let {
    reference: n,
    floating: o
  } = r;
  const a = po(t), c = tu(t), l = eu(c), u = $r(t), h = a === "y", f = n.x + n.width / 2 - o.width / 2, g = n.y + n.height / 2 - o.height / 2, m = n[l] / 2 - o[l] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: g
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: g
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Xo(t)) {
    case "start":
      v[c] -= m * (e && h ? -1 : 1);
      break;
    case "end":
      v[c] += m * (e && h ? -1 : 1);
      break;
  }
  return v;
}
const jI = async (r, t, e) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: c
  } = e, l = a.filter(Boolean), u = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let h = await c.getElementRects({
    reference: r,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: g
  } = Xf(h, n, u), m = n, v = {}, C = 0;
  for (let b = 0; b < l.length; b++) {
    const {
      name: _,
      fn: A
    } = l[b], {
      x: I,
      y: T,
      data: N,
      reset: x
    } = await A({
      x: f,
      y: g,
      initialPlacement: n,
      placement: m,
      strategy: o,
      middlewareData: v,
      rects: h,
      platform: c,
      elements: {
        reference: r,
        floating: t
      }
    });
    if (f = I ?? f, g = T ?? g, v = {
      ...v,
      [_]: {
        ...v[_],
        ...N
      }
    }, x && C <= 50) {
      C++, typeof x == "object" && (x.placement && (m = x.placement), x.rects && (h = x.rects === !0 ? await c.getElementRects({
        reference: r,
        floating: t,
        strategy: o
      }) : x.rects), {
        x: f,
        y: g
      } = Xf(h, m, u)), b = -1;
      continue;
    }
  }
  return {
    x: f,
    y: g,
    placement: m,
    strategy: o,
    middlewareData: v
  };
};
async function nu(r, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: c,
    elements: l,
    strategy: u
  } = r, {
    boundary: h = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: g = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = En(t, r), C = ru(v), _ = l[m ? g === "floating" ? "reference" : "floating" : g], A = Wo(await a.getClippingRect({
    element: (e = await (a.isElement == null ? void 0 : a.isElement(_))) == null || e ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: h,
    rootBoundary: f,
    strategy: u
  })), I = g === "floating" ? {
    ...c.floating,
    x: n,
    y: o
  } : c.reference, T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), N = await (a.isElement == null ? void 0 : a.isElement(T)) ? await (a.getScale == null ? void 0 : a.getScale(T)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Wo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: I,
    offsetParent: T,
    strategy: u
  }) : I);
  return {
    top: (A.top - x.top + C.top) / N.y,
    bottom: (x.bottom - A.bottom + C.bottom) / N.y,
    left: (A.left - x.left + C.left) / N.x,
    right: (x.right - A.right + C.right) / N.x
  };
}
const Zf = (r) => ({
  name: "arrow",
  options: r,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: o,
      rects: a,
      platform: c,
      elements: l,
      middlewareData: u
    } = t, {
      element: h,
      padding: f = 0
    } = En(r, t) || {};
    if (h == null)
      return {};
    const g = ru(f), m = {
      x: e,
      y: n
    }, v = tu(o), C = eu(v), b = await c.getDimensions(h), _ = v === "y", A = _ ? "top" : "left", I = _ ? "bottom" : "right", T = _ ? "clientHeight" : "clientWidth", N = a.reference[C] + a.reference[v] - m[v] - a.floating[C], x = m[v] - a.reference[v], D = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h));
    let W = D ? D[T] : 0;
    (!W || !await (c.isElement == null ? void 0 : c.isElement(D))) && (W = l.floating[T] || a.floating[C]);
    const z = N / 2 - x / 2, se = W / 2 - b[C] / 2 - 1, ie = qr(g[A], se), we = qr(g[I], se), ne = ie, de = W - b[C] - we, ce = W / 2 - b[C] / 2 + z, ve = Ml(ne, ce, de), j = !u.arrow && Xo(o) != null && ce != ve && a.reference[C] / 2 - (ce < ne ? ie : we) - b[C] / 2 < 0, te = j ? ce < ne ? ce - ne : ce - de : 0;
    return {
      [v]: m[v] + te,
      data: {
        [v]: ve,
        centerOffset: ce - ve - te,
        ...j && {
          alignmentOffset: te
        }
      },
      reset: j
    };
  }
}), QI = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(t) {
      var e, n;
      const {
        placement: o,
        middlewareData: a,
        rects: c,
        initialPlacement: l,
        platform: u,
        elements: h
      } = t, {
        mainAxis: f = !0,
        crossAxis: g = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: b = !0,
        ..._
      } = En(r, t);
      if ((e = a.arrow) != null && e.alignmentOffset)
        return {};
      const A = $r(o), I = $r(l) === l, T = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), N = m || (I || !b ? [cs(l)] : zI(l));
      !m && C !== "none" && N.push(...VI(l, b, C, T));
      const x = [l, ...N], D = await nu(t, _), W = [];
      let z = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && W.push(D[A]), g) {
        const ne = GI(o, c, T);
        W.push(D[ne[0]], D[ne[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: W
      }], !W.every((ne) => ne <= 0)) {
        var se, ie;
        const ne = (((se = a.flip) == null ? void 0 : se.index) || 0) + 1, de = x[ne];
        if (de)
          return {
            data: {
              index: ne,
              overflows: z
            },
            reset: {
              placement: de
            }
          };
        let ce = (ie = z.filter((ve) => ve.overflows[0] <= 0).sort((ve, j) => ve.overflows[1] - j.overflows[1])[0]) == null ? void 0 : ie.placement;
        if (!ce)
          switch (v) {
            case "bestFit": {
              var we;
              const ve = (we = z.map((j) => [j.placement, j.overflows.filter((te) => te > 0).reduce((te, Z) => te + Z, 0)]).sort((j, te) => j[1] - te[1])[0]) == null ? void 0 : we[0];
              ve && (ce = ve);
              break;
            }
            case "initialPlacement":
              ce = l;
              break;
          }
        if (o !== ce)
          return {
            reset: {
              placement: ce
            }
          };
      }
      return {};
    }
  };
};
function yg(r) {
  const t = qr(...r.map((a) => a.left)), e = qr(...r.map((a) => a.top)), n = Ht(...r.map((a) => a.right)), o = Ht(...r.map((a) => a.bottom));
  return {
    x: t,
    y: e,
    width: n - t,
    height: o - e
  };
}
function JI(r) {
  const t = r.slice().sort((o, a) => o.y - a.y), e = [];
  let n = null;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    !n || a.y - n.y > n.height / 2 ? e.push([a]) : e[e.length - 1].push(a), n = a;
  }
  return e.map((o) => Wo(yg(o)));
}
const XI = function(r) {
  return r === void 0 && (r = {}), {
    name: "inline",
    options: r,
    async fn(t) {
      const {
        placement: e,
        elements: n,
        rects: o,
        platform: a,
        strategy: c
      } = t, {
        padding: l = 2,
        x: u,
        y: h
      } = En(r, t), f = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), g = JI(f), m = Wo(yg(f)), v = ru(l);
      function C() {
        if (g.length === 2 && g[0].left > g[1].right && u != null && h != null)
          return g.find((_) => u > _.left - v.left && u < _.right + v.right && h > _.top - v.top && h < _.bottom + v.bottom) || m;
        if (g.length >= 2) {
          if (po(e) === "y") {
            const ie = g[0], we = g[g.length - 1], ne = $r(e) === "top", de = ie.top, ce = we.bottom, ve = ne ? ie.left : we.left, j = ne ? ie.right : we.right, te = j - ve, Z = ce - de;
            return {
              top: de,
              bottom: ce,
              left: ve,
              right: j,
              width: te,
              height: Z,
              x: ve,
              y: de
            };
          }
          const _ = $r(e) === "left", A = Ht(...g.map((ie) => ie.right)), I = qr(...g.map((ie) => ie.left)), T = g.filter((ie) => _ ? ie.left === I : ie.right === A), N = T[0].top, x = T[T.length - 1].bottom, D = I, W = A, z = W - D, se = x - N;
          return {
            top: N,
            bottom: x,
            left: D,
            right: W,
            width: z,
            height: se,
            x: D,
            y: N
          };
        }
        return m;
      }
      const b = await a.getElementRects({
        reference: {
          getBoundingClientRect: C
        },
        floating: n.floating,
        strategy: c
      });
      return o.reference.x !== b.reference.x || o.reference.y !== b.reference.y || o.reference.width !== b.reference.width || o.reference.height !== b.reference.height ? {
        reset: {
          rects: b
        }
      } : {};
    }
  };
};
async function ZI(r, t) {
  const {
    placement: e,
    platform: n,
    elements: o
  } = r, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), c = $r(e), l = Xo(e), u = po(e) === "y", h = ["left", "top"].includes(c) ? -1 : 1, f = a && u ? -1 : 1, g = En(t, r);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: C
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...g
  };
  return l && typeof C == "number" && (v = l === "end" ? C * -1 : C), u ? {
    x: v * f,
    y: m * h
  } : {
    x: m * h,
    y: v * f
  };
}
const eA = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(t) {
      var e, n;
      const {
        x: o,
        y: a,
        placement: c,
        middlewareData: l
      } = t, u = await ZI(t, r);
      return c === ((e = l.offset) == null ? void 0 : e.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: o + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: c
        }
      };
    }
  };
}, tA = function(r) {
  return r === void 0 && (r = {}), {
    name: "shift",
    options: r,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: c = !1,
        limiter: l = {
          fn: (_) => {
            let {
              x: A,
              y: I
            } = _;
            return {
              x: A,
              y: I
            };
          }
        },
        ...u
      } = En(r, t), h = {
        x: e,
        y: n
      }, f = await nu(t, u), g = po($r(o)), m = Zl(g);
      let v = h[m], C = h[g];
      if (a) {
        const _ = m === "y" ? "top" : "left", A = m === "y" ? "bottom" : "right", I = v + f[_], T = v - f[A];
        v = Ml(I, v, T);
      }
      if (c) {
        const _ = g === "y" ? "top" : "left", A = g === "y" ? "bottom" : "right", I = C + f[_], T = C - f[A];
        C = Ml(I, C, T);
      }
      const b = l.fn({
        ...t,
        [m]: v,
        [g]: C
      });
      return {
        ...b,
        data: {
          x: b.x - e,
          y: b.y - n
        }
      };
    }
  };
}, rA = function(r) {
  return r === void 0 && (r = {}), {
    options: r,
    fn(t) {
      const {
        x: e,
        y: n,
        placement: o,
        rects: a,
        middlewareData: c
      } = t, {
        offset: l = 0,
        mainAxis: u = !0,
        crossAxis: h = !0
      } = En(r, t), f = {
        x: e,
        y: n
      }, g = po(o), m = Zl(g);
      let v = f[m], C = f[g];
      const b = En(l, t), _ = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...b
      };
      if (u) {
        const T = m === "y" ? "height" : "width", N = a.reference[m] - a.floating[T] + _.mainAxis, x = a.reference[m] + a.reference[T] - _.mainAxis;
        v < N ? v = N : v > x && (v = x);
      }
      if (h) {
        var A, I;
        const T = m === "y" ? "width" : "height", N = ["top", "left"].includes($r(o)), x = a.reference[g] - a.floating[T] + (N && ((A = c.offset) == null ? void 0 : A[g]) || 0) + (N ? 0 : _.crossAxis), D = a.reference[g] + a.reference[T] + (N ? 0 : ((I = c.offset) == null ? void 0 : I[g]) || 0) - (N ? _.crossAxis : 0);
        C < x ? C = x : C > D && (C = D);
      }
      return {
        [m]: v,
        [g]: C
      };
    }
  };
}, nA = function(r) {
  return r === void 0 && (r = {}), {
    name: "size",
    options: r,
    async fn(t) {
      const {
        placement: e,
        rects: n,
        platform: o,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...l
      } = En(r, t), u = await nu(t, l), h = $r(e), f = Xo(e), g = po(e) === "y", {
        width: m,
        height: v
      } = n.floating;
      let C, b;
      h === "top" || h === "bottom" ? (C = h, b = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, C = f === "end" ? "top" : "bottom");
      const _ = v - u[C], A = m - u[b], I = !t.middlewareData.shift;
      let T = _, N = A;
      if (g) {
        const D = m - u.left - u.right;
        N = f || I ? qr(A, D) : D;
      } else {
        const D = v - u.top - u.bottom;
        T = f || I ? qr(_, D) : D;
      }
      if (I && !f) {
        const D = Ht(u.left, 0), W = Ht(u.right, 0), z = Ht(u.top, 0), se = Ht(u.bottom, 0);
        g ? N = m - 2 * (D !== 0 || W !== 0 ? D + W : Ht(u.left, u.right)) : T = v - 2 * (z !== 0 || se !== 0 ? z + se : Ht(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: T
      });
      const x = await o.getDimensions(a.floating);
      return m !== x.width || v !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Hn(r) {
  return Cg(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function mr(r) {
  var t;
  return (r == null || (t = r.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _n(r) {
  var t;
  return (t = (Cg(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cg(r) {
  return r instanceof Node || r instanceof mr(r).Node;
}
function wn(r) {
  return r instanceof Element || r instanceof mr(r).Element;
}
function tn(r) {
  return r instanceof HTMLElement || r instanceof mr(r).HTMLElement;
}
function ep(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof mr(r).ShadowRoot;
}
function Gi(r) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: o
  } = Rr(r);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(o);
}
function oA(r) {
  return ["table", "td", "th"].includes(Hn(r));
}
function ou(r) {
  const t = iu(), e = Rr(r);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function iA(r) {
  let t = Vo(r);
  for (; tn(t) && !bs(t); ) {
    if (ou(t))
      return t;
    t = Vo(t);
  }
  return null;
}
function iu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function bs(r) {
  return ["html", "body", "#document"].includes(Hn(r));
}
function Rr(r) {
  return mr(r).getComputedStyle(r);
}
function _s(r) {
  return wn(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.pageXOffset,
    scrollTop: r.pageYOffset
  };
}
function Vo(r) {
  if (Hn(r) === "html")
    return r;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    ep(r) && r.host || // Fallback.
    _n(r)
  );
  return ep(t) ? t.host : t;
}
function Eg(r) {
  const t = Vo(r);
  return bs(t) ? r.ownerDocument ? r.ownerDocument.body : r.body : tn(t) && Gi(t) ? t : Eg(t);
}
function Di(r, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const o = Eg(r), a = o === ((n = r.ownerDocument) == null ? void 0 : n.body), c = mr(o);
  return a ? t.concat(c, c.visualViewport || [], Gi(o) ? o : [], c.frameElement && e ? Di(c.frameElement) : []) : t.concat(o, Di(o, [], e));
}
function wg(r) {
  const t = Rr(r);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = tn(r), a = o ? r.offsetWidth : e, c = o ? r.offsetHeight : n, l = ss(e) !== a || ss(n) !== c;
  return l && (e = a, n = c), {
    width: e,
    height: n,
    $: l
  };
}
function au(r) {
  return wn(r) ? r : r.contextElement;
}
function Bo(r) {
  const t = au(r);
  if (!tn(t))
    return Un(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = wg(t);
  let c = (a ? ss(e.width) : e.width) / n, l = (a ? ss(e.height) : e.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: c,
    y: l
  };
}
const aA = /* @__PURE__ */ Un(0);
function bg(r) {
  const t = mr(r);
  return !iu() || !t.visualViewport ? aA : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function sA(r, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== mr(r) ? !1 : t;
}
function ho(r, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const o = r.getBoundingClientRect(), a = au(r);
  let c = Un(1);
  t && (n ? wn(n) && (c = Bo(n)) : c = Bo(r));
  const l = sA(a, e, n) ? bg(a) : Un(0);
  let u = (o.left + l.x) / c.x, h = (o.top + l.y) / c.y, f = o.width / c.x, g = o.height / c.y;
  if (a) {
    const m = mr(a), v = n && wn(n) ? mr(n) : n;
    let C = m.frameElement;
    for (; C && n && v !== m; ) {
      const b = Bo(C), _ = C.getBoundingClientRect(), A = Rr(C), I = _.left + (C.clientLeft + parseFloat(A.paddingLeft)) * b.x, T = _.top + (C.clientTop + parseFloat(A.paddingTop)) * b.y;
      u *= b.x, h *= b.y, f *= b.x, g *= b.y, u += I, h += T, C = mr(C).frameElement;
    }
  }
  return Wo({
    width: f,
    height: g,
    x: u,
    y: h
  });
}
function cA(r) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = r;
  const o = tn(e), a = _n(e);
  if (e === a)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Un(1);
  const u = Un(0);
  if ((o || !o && n !== "fixed") && ((Hn(e) !== "body" || Gi(a)) && (c = _s(e)), tn(e))) {
    const h = ho(e);
    l = Bo(e), u.x = h.x + e.clientLeft, u.y = h.y + e.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function lA(r) {
  return Array.from(r.getClientRects());
}
function _g(r) {
  return ho(_n(r)).left + _s(r).scrollLeft;
}
function uA(r) {
  const t = _n(r), e = _s(r), n = r.ownerDocument.body, o = Ht(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Ht(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let c = -e.scrollLeft + _g(r);
  const l = -e.scrollTop;
  return Rr(n).direction === "rtl" && (c += Ht(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: c,
    y: l
  };
}
function dA(r, t) {
  const e = mr(r), n = _n(r), o = e.visualViewport;
  let a = n.clientWidth, c = n.clientHeight, l = 0, u = 0;
  if (o) {
    a = o.width, c = o.height;
    const h = iu();
    (!h || h && t === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: l,
    y: u
  };
}
function hA(r, t) {
  const e = ho(r, !0, t === "fixed"), n = e.top + r.clientTop, o = e.left + r.clientLeft, a = tn(r) ? Bo(r) : Un(1), c = r.clientWidth * a.x, l = r.clientHeight * a.y, u = o * a.x, h = n * a.y;
  return {
    width: c,
    height: l,
    x: u,
    y: h
  };
}
function tp(r, t, e) {
  let n;
  if (t === "viewport")
    n = dA(r, e);
  else if (t === "document")
    n = uA(_n(r));
  else if (wn(t))
    n = hA(t, e);
  else {
    const o = bg(r);
    n = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Wo(n);
}
function Sg(r, t) {
  const e = Vo(r);
  return e === t || !wn(e) || bs(e) ? !1 : Rr(e).position === "fixed" || Sg(e, t);
}
function fA(r, t) {
  const e = t.get(r);
  if (e)
    return e;
  let n = Di(r, [], !1).filter((l) => wn(l) && Hn(l) !== "body"), o = null;
  const a = Rr(r).position === "fixed";
  let c = a ? Vo(r) : r;
  for (; wn(c) && !bs(c); ) {
    const l = Rr(c), u = ou(c);
    !u && l.position === "fixed" && (o = null), (a ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Gi(c) && !u && Sg(r, c)) ? n = n.filter((f) => f !== c) : o = l, c = Vo(c);
  }
  return t.set(r, n), n;
}
function pA(r) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: o
  } = r;
  const c = [...e === "clippingAncestors" ? fA(t, this._c) : [].concat(e), n], l = c[0], u = c.reduce((h, f) => {
    const g = tp(t, f, o);
    return h.top = Ht(g.top, h.top), h.right = qr(g.right, h.right), h.bottom = qr(g.bottom, h.bottom), h.left = Ht(g.left, h.left), h;
  }, tp(t, l, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function gA(r) {
  return wg(r);
}
function mA(r, t, e) {
  const n = tn(t), o = _n(t), a = e === "fixed", c = ho(r, !0, a, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Un(0);
  if (n || !n && !a)
    if ((Hn(t) !== "body" || Gi(o)) && (l = _s(t)), n) {
      const h = ho(t, !0, a, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else
      o && (u.x = _g(o));
  return {
    x: c.left + l.scrollLeft - u.x,
    y: c.top + l.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function rp(r, t) {
  return !tn(r) || Rr(r).position === "fixed" ? null : t ? t(r) : r.offsetParent;
}
function Tg(r, t) {
  const e = mr(r);
  if (!tn(r))
    return e;
  let n = rp(r, t);
  for (; n && oA(n) && Rr(n).position === "static"; )
    n = rp(n, t);
  return n && (Hn(n) === "html" || Hn(n) === "body" && Rr(n).position === "static" && !ou(n)) ? e : n || iA(r) || e;
}
const vA = async function(r) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = r;
  const o = this.getOffsetParent || Tg, a = this.getDimensions;
  return {
    reference: mA(t, await o(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await a(e)
    }
  };
};
function yA(r) {
  return Rr(r).direction === "rtl";
}
const CA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cA,
  getDocumentElement: _n,
  getClippingRect: pA,
  getOffsetParent: Tg,
  getElementRects: vA,
  getClientRects: lA,
  getDimensions: gA,
  getScale: Bo,
  isElement: wn,
  isRTL: yA
};
function EA(r, t) {
  let e = null, n;
  const o = _n(r);
  function a() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function c(l, u) {
    l === void 0 && (l = !1), u === void 0 && (u = 1), a();
    const {
      left: h,
      top: f,
      width: g,
      height: m
    } = r.getBoundingClientRect();
    if (l || t(), !g || !m)
      return;
    const v = Ba(f), C = Ba(o.clientWidth - (h + g)), b = Ba(o.clientHeight - (f + m)), _ = Ba(h), I = {
      rootMargin: -v + "px " + -C + "px " + -b + "px " + -_ + "px",
      threshold: Ht(0, qr(1, u)) || 1
    };
    let T = !0;
    function N(x) {
      const D = x[0].intersectionRatio;
      if (D !== u) {
        if (!T)
          return c();
        D ? c(!1, D) : n = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      T = !1;
    }
    try {
      e = new IntersectionObserver(N, {
        ...I,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(N, I);
    }
    e.observe(r);
  }
  return c(!0), a;
}
function wA(r, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, h = au(r), f = o || a ? [...h ? Di(h) : [], ...Di(t)] : [];
  f.forEach((A) => {
    o && A.addEventListener("scroll", e, {
      passive: !0
    }), a && A.addEventListener("resize", e);
  });
  const g = h && l ? EA(h, e) : null;
  let m = -1, v = null;
  c && (v = new ResizeObserver((A) => {
    let [I] = A;
    I && I.target === h && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      v && v.observe(t);
    })), e();
  }), h && !u && v.observe(h), v.observe(t));
  let C, b = u ? ho(r) : null;
  u && _();
  function _() {
    const A = ho(r);
    b && (A.x !== b.x || A.y !== b.y || A.width !== b.width || A.height !== b.height) && e(), b = A, C = requestAnimationFrame(_);
  }
  return e(), () => {
    f.forEach((A) => {
      o && A.removeEventListener("scroll", e), a && A.removeEventListener("resize", e);
    }), g && g(), v && v.disconnect(), v = null, u && cancelAnimationFrame(C);
  };
}
const bA = (r, t, e) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: CA,
    ...e
  }, a = {
    ...o.platform,
    _c: n
  };
  return jI(r, t, {
    ...o,
    platform: a
  });
}, _A = (r) => {
  function t(e) {
    return {}.hasOwnProperty.call(e, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(e) {
      const {
        element: n,
        padding: o
      } = typeof r == "function" ? r(e) : r;
      return n && t(n) ? n.current != null ? Zf({
        element: n.current,
        padding: o
      }).fn(e) : {} : n ? Zf({
        element: n,
        padding: o
      }).fn(e) : {};
    }
  };
};
var $a = typeof document < "u" ? Ll : me;
function ls(r, t) {
  if (r === t)
    return !0;
  if (typeof r != typeof t)
    return !1;
  if (typeof r == "function" && r.toString() === t.toString())
    return !0;
  let e, n, o;
  if (r && t && typeof r == "object") {
    if (Array.isArray(r)) {
      if (e = r.length, e != t.length)
        return !1;
      for (n = e; n-- !== 0; )
        if (!ls(r[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(r), e = o.length, e !== Object.keys(t).length)
      return !1;
    for (n = e; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = e; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && r.$$typeof) && !ls(r[a], t[a]))
        return !1;
    }
    return !0;
  }
  return r !== r && t !== t;
}
function Ig(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function np(r, t) {
  const e = Ig(r);
  return Math.round(t * e) / e;
}
function op(r) {
  const t = Fe.useRef(r);
  return $a(() => {
    t.current = r;
  }), t;
}
function SA(r) {
  r === void 0 && (r = {});
  const {
    placement: t = "bottom",
    strategy: e = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: c
    } = {},
    transform: l = !0,
    whileElementsMounted: u,
    open: h
  } = r, [f, g] = Fe.useState({
    x: 0,
    y: 0,
    strategy: e,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = Fe.useState(n);
  ls(m, n) || v(n);
  const [C, b] = Fe.useState(null), [_, A] = Fe.useState(null), I = Fe.useCallback((j) => {
    j != D.current && (D.current = j, b(j));
  }, [b]), T = Fe.useCallback((j) => {
    j !== W.current && (W.current = j, A(j));
  }, [A]), N = a || C, x = c || _, D = Fe.useRef(null), W = Fe.useRef(null), z = Fe.useRef(f), se = op(u), ie = op(o), we = Fe.useCallback(() => {
    if (!D.current || !W.current)
      return;
    const j = {
      placement: t,
      strategy: e,
      middleware: m
    };
    ie.current && (j.platform = ie.current), bA(D.current, W.current, j).then((te) => {
      const Z = {
        ...te,
        isPositioned: !0
      };
      ne.current && !ls(z.current, Z) && (z.current = Z, z_.flushSync(() => {
        g(Z);
      }));
    });
  }, [m, t, e, ie]);
  $a(() => {
    h === !1 && z.current.isPositioned && (z.current.isPositioned = !1, g((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [h]);
  const ne = Fe.useRef(!1);
  $a(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), $a(() => {
    if (N && (D.current = N), x && (W.current = x), N && x) {
      if (se.current)
        return se.current(N, x, we);
      we();
    }
  }, [N, x, we, se]);
  const de = Fe.useMemo(() => ({
    reference: D,
    floating: W,
    setReference: I,
    setFloating: T
  }), [I, T]), ce = Fe.useMemo(() => ({
    reference: N,
    floating: x
  }), [N, x]), ve = Fe.useMemo(() => {
    const j = {
      position: e,
      left: 0,
      top: 0
    };
    if (!ce.floating)
      return j;
    const te = np(ce.floating, f.x), Z = np(ce.floating, f.y);
    return l ? {
      ...j,
      transform: "translate(" + te + "px, " + Z + "px)",
      ...Ig(ce.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: e,
      left: te,
      top: Z
    };
  }, [e, l, ce.floating, f.x, f.y]);
  return Fe.useMemo(() => ({
    ...f,
    update: we,
    refs: de,
    elements: ce,
    floatingStyles: ve
  }), [f, we, de, ce, ve]);
}
var Ag = typeof document < "u" ? Ll : me;
let cl = !1, TA = 0;
const ip = () => "floating-ui-" + TA++;
function IA() {
  const [r, t] = Fe.useState(() => cl ? ip() : void 0);
  return Ag(() => {
    r == null && t(ip());
  }, []), Fe.useEffect(() => {
    cl || (cl = !0);
  }, []), r;
}
const AA = Fe[/* @__PURE__ */ "useId".toString()], RA = AA || IA;
function kA() {
  const r = /* @__PURE__ */ new Map();
  return {
    emit(t, e) {
      var n;
      (n = r.get(t)) == null || n.forEach((o) => o(e));
    },
    on(t, e) {
      r.set(t, [...r.get(t) || [], e]);
    },
    off(t, e) {
      var n;
      r.set(t, ((n = r.get(t)) == null ? void 0 : n.filter((o) => o !== e)) || []);
    }
  };
}
const PA = /* @__PURE__ */ Fe.createContext(null), NA = () => Fe.useContext(PA);
function OA(r) {
  return (r == null ? void 0 : r.ownerDocument) || document;
}
function MA(r) {
  return OA(r).defaultView || window;
}
function Ka(r) {
  return r ? r instanceof Element || r instanceof MA(r).Element : !1;
}
const xA = Fe[/* @__PURE__ */ "useInsertionEffect".toString()], LA = xA || ((r) => r());
function DA(r) {
  const t = Fe.useRef(() => {
  });
  return LA(() => {
    t.current = r;
  }), Fe.useCallback(function() {
    for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
function UA(r) {
  var t;
  r === void 0 && (r = {});
  const {
    open: e = !1,
    onOpenChange: n,
    nodeId: o
  } = r, [a, c] = Fe.useState(null), l = ((t = r.elements) == null ? void 0 : t.reference) || a, u = SA(r), h = NA(), f = DA((N, x) => {
    N && (m.current.openEvent = x), n == null || n(N, x);
  }), g = Fe.useRef(null), m = Fe.useRef({}), v = Fe.useState(() => kA())[0], C = RA(), b = Fe.useCallback((N) => {
    const x = Ka(N) ? {
      getBoundingClientRect: () => N.getBoundingClientRect(),
      contextElement: N
    } : N;
    u.refs.setReference(x);
  }, [u.refs]), _ = Fe.useCallback((N) => {
    (Ka(N) || N === null) && (g.current = N, c(N)), (Ka(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    N !== null && !Ka(N)) && u.refs.setReference(N);
  }, [u.refs]), A = Fe.useMemo(() => ({
    ...u.refs,
    setReference: _,
    setPositionReference: b,
    domReference: g
  }), [u.refs, _, b]), I = Fe.useMemo(() => ({
    ...u.elements,
    domReference: l
  }), [u.elements, l]), T = Fe.useMemo(() => ({
    ...u,
    refs: A,
    elements: I,
    dataRef: m,
    nodeId: o,
    floatingId: C,
    events: v,
    open: e,
    onOpenChange: f
  }), [u, o, C, v, e, f, A, I]);
  return Ag(() => {
    const N = h == null ? void 0 : h.nodesRef.current.find((x) => x.id === o);
    N && (N.context = T);
  }), Fe.useMemo(() => ({
    ...u,
    context: T,
    refs: A,
    elements: I
  }), [u, A, I, T]);
}
function HA(r, t) {
  if (r === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [e, n] = t.split("-"), o = e === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return t;
}
function ap(r, t, e, n) {
  return r === "center" || n === "center" ? { top: t } : r === "end" ? { bottom: e } : r === "start" ? { top: e } : {};
}
function sp(r, t, e, n, o) {
  return r === "center" || n === "center" ? { left: t } : r === "end" ? { [o === "ltr" ? "right" : "left"]: e } : r === "start" ? { [o === "ltr" ? "left" : "right"]: e } : {};
}
const FA = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function BA({
  position: r,
  arrowSize: t,
  arrowOffset: e,
  arrowRadius: n,
  arrowPosition: o,
  arrowX: a,
  arrowY: c,
  dir: l
}) {
  const [u, h = "center"] = r.split("-"), f = {
    width: K(t),
    height: K(t),
    transform: "rotate(45deg)",
    position: "absolute",
    [FA[u]]: K(n)
  }, g = K(-t / 2);
  return u === "left" ? {
    ...f,
    ...ap(h, c, e, o),
    right: g,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : u === "right" ? {
    ...f,
    ...ap(h, c, e, o),
    left: g,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : u === "top" ? {
    ...f,
    ...sp(h, a, e, o, l),
    bottom: g,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : u === "bottom" ? {
    ...f,
    ...sp(h, a, e, o, l),
    top: g,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Rg = ft(
  ({
    position: r,
    arrowSize: t,
    arrowOffset: e,
    arrowRadius: n,
    arrowPosition: o,
    visible: a,
    arrowX: c,
    arrowY: l,
    style: u,
    ...h
  }, f) => {
    const { dir: g } = jl();
    return a ? /* @__PURE__ */ k.createElement(
      "div",
      {
        ...h,
        ref: f,
        style: {
          ...u,
          ...BA({
            position: r,
            arrowSize: t,
            arrowOffset: e,
            arrowRadius: n,
            arrowPosition: o,
            dir: g,
            arrowX: c,
            arrowY: l
          })
        }
      }
    ) : null;
  }
);
Rg.displayName = "@mantine/core/FloatingArrow";
const [KA, kg] = jo(
  "Popover component was not found in the tree"
);
function Pg({
  children: r,
  active: t = !0,
  refProp: e = "ref"
}) {
  const n = b0(t), o = kr(n, r == null ? void 0 : r.ref);
  return Bi(r) ? hs(r, { [e]: o }) : r;
}
Pg.displayName = "@mantine/core/FocusTrap";
function qA(r) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof r.className == "string" && t.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(t.style, r.style), typeof r.id == "string" && t.setAttribute("id", r.id), t;
}
const $A = {}, Ng = ft((r, t) => {
  const { children: e, target: n, ...o } = Ee("Portal", $A, r), [a, c] = pe(!1), l = Ke(null);
  return Ki(() => (c(!0), l.current = n ? typeof n == "string" ? document.querySelector(n) : n : qA(o), Wp(t, l.current), !n && l.current && document.body.appendChild(l.current), () => {
    !n && l.current && document.body.removeChild(l.current);
  }), [n]), !a || !l.current ? null : Y_(/* @__PURE__ */ k.createElement(k.Fragment, null, e), l.current);
});
Ng.displayName = "@mantine/core/Portal";
function Og({ withinPortal: r = !0, children: t, ...e }) {
  return r ? /* @__PURE__ */ k.createElement(Ng, { ...e }, t) : /* @__PURE__ */ k.createElement(k.Fragment, null, t);
}
Og.displayName = "@mantine/core/OptionalPortal";
const wi = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${K(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), qa = {
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
    out: { opacity: 0, transform: `translateY(-${K(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${K(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${K(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${K(20)}) rotate(5deg)` },
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
    ...wi("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...wi("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...wi("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...wi("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...wi("top"),
    common: { transformOrigin: "top right" }
  }
}, cp = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function GA({
  transition: r,
  state: t,
  duration: e,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${e}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in qa ? {
    transitionProperty: qa[r].transitionProperty,
    ...o,
    ...qa[r].common,
    ...qa[r][cp[t]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[cp[t]]
  };
}
function zA({
  duration: r,
  exitDuration: t,
  timingFunction: e,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: c,
  onExited: l
}) {
  const u = Kn(), h = Yp(), f = u.respectReducedMotion ? h : !1, [g, m] = pe(f ? 0 : r), [v, C] = pe(n ? "entered" : "exited"), b = Ke(-1), _ = (A) => {
    const I = A ? o : a, T = A ? c : l;
    C(A ? "pre-entering" : "pre-exiting"), window.clearTimeout(b.current);
    const N = f ? 0 : A ? r : t;
    if (m(N), N === 0)
      typeof I == "function" && I(), typeof T == "function" && T(), C(A ? "entered" : "exited");
    else {
      const x = window.setTimeout(() => {
        typeof I == "function" && I(), C(A ? "entering" : "exiting");
      }, 10);
      b.current = window.setTimeout(() => {
        window.clearTimeout(x), typeof T == "function" && T(), C(A ? "entered" : "exited");
      }, N);
    }
  };
  return lo(() => {
    _(n);
  }, [n]), me(() => () => window.clearTimeout(b.current), []), {
    transitionDuration: g,
    transitionStatus: v,
    transitionTimingFunction: e || "ease"
  };
}
function Mg({
  keepMounted: r,
  transition: t = "fade",
  duration: e = 250,
  exitDuration: n = e,
  mounted: o,
  children: a,
  timingFunction: c = "ease",
  onExit: l,
  onEntered: u,
  onEnter: h,
  onExited: f
}) {
  const { transitionDuration: g, transitionStatus: m, transitionTimingFunction: v } = zA({
    mounted: o,
    exitDuration: n,
    duration: e,
    timingFunction: c,
    onExit: l,
    onEntered: u,
    onEnter: h,
    onExited: f
  });
  return g === 0 ? o ? /* @__PURE__ */ k.createElement(k.Fragment, null, a({})) : r ? a({ display: "none" }) : null : m === "exited" ? r ? a({ display: "none" }) : null : /* @__PURE__ */ k.createElement(k.Fragment, null, a(
    GA({
      transition: t,
      duration: g,
      state: m,
      timingFunction: v
    })
  ));
}
Mg.displayName = "@mantine/core/Transition";
var xg = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const WA = {}, su = He((r, t) => {
  var _, A, I, T;
  const e = Ee("PopoverDropdown", WA, r), {
    className: n,
    style: o,
    vars: a,
    children: c,
    onKeyDownCapture: l,
    variant: u,
    classNames: h,
    styles: f,
    ...g
  } = e, m = kg(), v = g0({
    opened: m.opened,
    shouldReturnFocus: m.returnFocus
  }), C = m.withRoles ? {
    "aria-labelledby": m.getTargetId(),
    id: m.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, b = kr(t, m.floating);
  return m.disabled ? null : /* @__PURE__ */ k.createElement(Og, { ...m.portalProps, withinPortal: m.withinPortal }, /* @__PURE__ */ k.createElement(
    Mg,
    {
      mounted: m.opened,
      ...m.transitionProps,
      transition: ((_ = m.transitionProps) == null ? void 0 : _.transition) || "fade",
      duration: ((A = m.transitionProps) == null ? void 0 : A.duration) ?? 150,
      keepMounted: m.keepMounted,
      exitDuration: typeof ((I = m.transitionProps) == null ? void 0 : I.exitDuration) == "number" ? m.transitionProps.exitDuration : (T = m.transitionProps) == null ? void 0 : T.duration
    },
    (N) => /* @__PURE__ */ k.createElement(Pg, { active: m.trapFocus }, /* @__PURE__ */ k.createElement(
      ke,
      {
        ...C,
        ...g,
        variant: u,
        ref: b,
        onKeyDownCapture: i0(m.onClose, {
          active: m.closeOnEscape,
          onTrigger: v,
          onKeyDown: l
        }),
        "data-position": m.placement,
        ...m.getStyles("dropdown", {
          className: n,
          props: e,
          classNames: h,
          styles: f,
          style: [
            {
              ...N,
              zIndex: m.zIndex,
              top: m.y ?? 0,
              left: m.x ?? 0,
              width: m.width === "target" ? void 0 : K(m.width)
            },
            o
          ]
        })
      },
      c,
      /* @__PURE__ */ k.createElement(
        Rg,
        {
          ref: m.arrowRef,
          arrowX: m.arrowX,
          arrowY: m.arrowY,
          visible: m.withArrow,
          position: m.placement,
          arrowSize: m.arrowSize,
          arrowRadius: m.arrowRadius,
          arrowOffset: m.arrowOffset,
          arrowPosition: m.arrowPosition,
          ...m.getStyles("arrow", {
            props: e,
            classNames: h,
            styles: f
          })
        }
      )
    ))
  ));
});
su.classes = xg;
su.displayName = "@mantine/core/PopoverDropdown";
const VA = {
  refProp: "ref",
  popupType: "dialog"
}, Lg = He((r, t) => {
  const { children: e, refProp: n, popupType: o, ...a } = Ee(
    "PopoverTarget",
    VA,
    r
  );
  if (!Bi(e))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const c = a, l = kg(), u = kr(l.reference, e.ref, t), h = l.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return hs(e, {
    ...c,
    ...h,
    ...l.targetProps,
    className: bn(l.targetProps.className, c.className, e.props.className),
    [n]: u,
    ...l.controlled ? null : { onClick: l.onToggle }
  });
});
Lg.displayName = "@mantine/core/PopoverTarget";
function YA({
  opened: r,
  floating: t,
  position: e,
  positionDependencies: n
}) {
  const [o, a] = pe(0);
  me(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return wA(
        t.refs.reference.current,
        t.refs.floating.current,
        t.update
      );
  }, [
    t.refs.reference.current,
    t.refs.floating.current,
    r,
    o,
    e
  ]), lo(() => {
    t.update();
  }, n), lo(() => {
    a((c) => c + 1);
  }, [r]);
}
function jA(r, t) {
  var n, o, a, c;
  const e = [eA(r.offset)];
  return (n = r.middlewares) != null && n.shift && e.push(tA({ limiter: rA() })), (o = r.middlewares) != null && o.flip && e.push(QI()), (a = r.middlewares) != null && a.inline && e.push(XI()), e.push(_A({ element: r.arrowRef, padding: r.arrowOffset })), ((c = r.middlewares) != null && c.size || r.width === "target") && e.push(
    nA({
      apply({ rects: l, availableWidth: u, availableHeight: h }) {
        var m, v;
        const g = ((m = t().refs.floating.current) == null ? void 0 : m.style) ?? {};
        (v = r.middlewares) != null && v.size && Object.assign(g, {
          maxWidth: `${u}px`,
          maxHeight: `${h}px`
        }), r.width === "target" && Object.assign(g, {
          width: `${l.reference.width}px`
        });
      }
    })
  ), e;
}
function QA(r) {
  const [t, e] = uo({
    value: r.opened,
    defaultValue: r.defaultOpened,
    finalValue: !1,
    onChange: r.onChange
  }), n = () => {
    var c;
    t && ((c = r.onClose) == null || c.call(r), e(!1));
  }, o = () => {
    var c, l;
    t ? ((c = r.onClose) == null || c.call(r), e(!1)) : ((l = r.onOpen) == null || l.call(r), e(!0));
  }, a = UA({
    placement: r.position,
    middleware: jA(r, () => a)
  });
  return YA({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: a
  }), lo(() => {
    var c;
    (c = r.onPositionChange) == null || c.call(r, a.placement);
  }, [a.placement]), lo(() => {
    var c, l;
    r.opened ? (l = r.onOpen) == null || l.call(r) : (c = r.onClose) == null || c.call(r);
  }, [r.opened]), {
    floating: a,
    controlled: typeof r.opened == "boolean",
    opened: t,
    onClose: n,
    onToggle: o
  };
}
const JA = {
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
  zIndex: n0("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, XA = (r, { radius: t, shadow: e }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : Qo(t),
    "--popover-shadow": s0(e)
  }
});
function qn(r) {
  var Sn, mt, Mt, Gn, xr, St;
  const t = Ee("Popover", JA, r), {
    children: e,
    position: n,
    offset: o,
    onPositionChange: a,
    positionDependencies: c,
    opened: l,
    transitionProps: u,
    width: h,
    middlewares: f,
    withArrow: g,
    arrowSize: m,
    arrowOffset: v,
    arrowRadius: C,
    arrowPosition: b,
    unstyled: _,
    classNames: A,
    styles: I,
    closeOnClickOutside: T,
    withinPortal: N,
    portalProps: x,
    closeOnEscape: D,
    clickOutsideEvents: W,
    trapFocus: z,
    onClose: se,
    onOpen: ie,
    onChange: we,
    zIndex: ne,
    radius: de,
    shadow: ce,
    id: ve,
    defaultOpened: j,
    __staticSelector: te,
    withRoles: Z,
    disabled: Pe,
    returnFocus: Qe,
    variant: ot,
    keepMounted: ut,
    vars: Gr,
    ...rn
  } = t, Yt = lt({
    name: te,
    props: t,
    classes: xg,
    classNames: A,
    styles: I,
    unstyled: _,
    rootSelector: "dropdown",
    vars: Gr,
    varsResolver: XA
  }), or = Ke(null), [nn, ir] = pe(null), [Mr, on] = pe(null), { dir: qt } = jl(), vr = fo(ve), je = QA({
    middlewares: f,
    width: h,
    position: HA(qt, n),
    offset: typeof o == "number" ? o + (g ? m / 2 : 0) : o,
    arrowRef: or,
    arrowOffset: v,
    onPositionChange: a,
    positionDependencies: c,
    opened: l,
    defaultOpened: j,
    onChange: we,
    onOpen: ie,
    onClose: se
  });
  u0(() => T && je.onClose(), W, [
    nn,
    Mr
  ]);
  const Nt = Ve(
    (tt) => {
      ir(tt), je.floating.refs.setReference(tt);
    },
    [je.floating.refs.setReference]
  ), Ot = Ve(
    (tt) => {
      on(tt), je.floating.refs.setFloating(tt);
    },
    [je.floating.refs.setFloating]
  );
  return /* @__PURE__ */ k.createElement(
    KA,
    {
      value: {
        returnFocus: Qe,
        disabled: Pe,
        controlled: je.controlled,
        reference: Nt,
        floating: Ot,
        x: je.floating.x,
        y: je.floating.y,
        arrowX: (Mt = (mt = (Sn = je.floating) == null ? void 0 : Sn.middlewareData) == null ? void 0 : mt.arrow) == null ? void 0 : Mt.x,
        arrowY: (St = (xr = (Gn = je.floating) == null ? void 0 : Gn.middlewareData) == null ? void 0 : xr.arrow) == null ? void 0 : St.y,
        opened: je.opened,
        arrowRef: or,
        transitionProps: u,
        width: h,
        withArrow: g,
        arrowSize: m,
        arrowOffset: v,
        arrowRadius: C,
        arrowPosition: b,
        placement: je.floating.placement,
        trapFocus: z,
        withinPortal: N,
        portalProps: x,
        zIndex: ne,
        radius: de,
        shadow: ce,
        closeOnEscape: D,
        onClose: je.onClose,
        onToggle: je.onToggle,
        getTargetId: () => `${vr}-target`,
        getDropdownId: () => `${vr}-dropdown`,
        withRoles: Z,
        targetProps: rn,
        __staticSelector: te,
        classNames: A,
        styles: I,
        unstyled: _,
        variant: ot,
        keepMounted: ut,
        getStyles: Yt
      }
    },
    e
  );
}
qn.Target = Lg;
qn.Dropdown = su;
qn.displayName = "@mantine/core/Popover";
qn.extend = (r) => r;
var Kr = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const ZA = ft(({ className: r, ...t }, e) => /* @__PURE__ */ k.createElement(ke, { component: "span", className: bn(Kr.barsLoader, r), ...t, ref: e }, /* @__PURE__ */ k.createElement("span", { className: Kr.bar }), /* @__PURE__ */ k.createElement("span", { className: Kr.bar }), /* @__PURE__ */ k.createElement("span", { className: Kr.bar }))), eR = ft(({ className: r, ...t }, e) => /* @__PURE__ */ k.createElement(ke, { component: "span", className: bn(Kr.dotsLoader, r), ...t, ref: e }, /* @__PURE__ */ k.createElement("span", { className: Kr.dot }), /* @__PURE__ */ k.createElement("span", { className: Kr.dot }), /* @__PURE__ */ k.createElement("span", { className: Kr.dot }))), tR = ft(({ className: r, ...t }, e) => /* @__PURE__ */ k.createElement(ke, { component: "span", className: bn(Kr.ovalLoader, r), ...t, ref: e })), Dg = {
  bars: ZA,
  oval: tR,
  dots: eR
}, rR = {
  loaders: Dg,
  type: "oval"
}, nR = (r, { size: t, color: e }) => ({
  root: {
    "--loader-size": kt(t, "loader-size"),
    "--loader-color": e ? Go(e, r) : void 0
  }
}), Ss = He((r, t) => {
  const e = Ee("Loader", rR, r), {
    size: n,
    color: o,
    type: a,
    vars: c,
    className: l,
    style: u,
    classNames: h,
    styles: f,
    unstyled: g,
    loaders: m,
    variant: v,
    children: C,
    ...b
  } = e, _ = lt({
    name: "Loader",
    props: e,
    classes: Kr,
    className: l,
    style: u,
    classNames: h,
    styles: f,
    unstyled: g,
    vars: c,
    varsResolver: nR
  });
  return C ? /* @__PURE__ */ k.createElement(ke, { ..._("root"), ref: t, ...b }, C) : /* @__PURE__ */ k.createElement(
    ke,
    {
      ..._("root"),
      ref: t,
      component: m[a],
      variant: v,
      size: n,
      ...b
    }
  );
});
Ss.defaultLoaders = Dg;
Ss.classes = Kr;
Ss.displayName = "@mantine/core/Loader";
const Ug = ft(
  ({ size: r = "var(--cb-icon-size, 70%)", style: t, ...e }, n) => /* @__PURE__ */ k.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: r, height: r },
      ref: n,
      ...e
    },
    /* @__PURE__ */ k.createElement(
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
Ug.displayName = "@mantine/core/CloseIcon";
var Hg = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const oR = {
  variant: "subtle"
}, iR = (r, { size: t, radius: e, iconSize: n }) => ({
  root: {
    "--cb-size": kt(t, "cb-size"),
    "--cb-radius": e === void 0 ? void 0 : Qo(e),
    "--cb-icon-size": K(n)
  }
}), cu = Jo((r, t) => {
  const e = Ee("CloseButton", oR, r), {
    iconSize: n,
    children: o,
    vars: a,
    radius: c,
    className: l,
    classNames: u,
    style: h,
    styles: f,
    unstyled: g,
    "data-disabled": m,
    disabled: v,
    variant: C,
    ...b
  } = e, _ = lt({
    name: "CloseButton",
    props: e,
    className: l,
    style: h,
    classes: Hg,
    classNames: u,
    styles: f,
    unstyled: g,
    vars: a,
    varsResolver: iR
  });
  return /* @__PURE__ */ k.createElement(
    $i,
    {
      ref: t,
      ...b,
      unstyled: g,
      variant: C,
      disabled: v,
      mod: { disabled: v || m },
      ..._("root", { variant: C, active: !0 })
    },
    /* @__PURE__ */ k.createElement(Ug, null),
    o
  );
});
cu.classes = Hg;
cu.displayName = "@mantine/core/CloseButton";
function aR(r) {
  return ul.toArray(r).filter(Boolean);
}
var Fg = { root: "m-4081bf90" };
const sR = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, cR = (r, { grow: t, preventGrowOverflow: e, gap: n, align: o, justify: a, wrap: c }, { childWidth: l }) => ({
  root: {
    "--group-child-width": t && e ? l : void 0,
    "--group-gap": Bp(n),
    "--group-align": o,
    "--group-justify": a,
    "--group-wrap": c
  }
}), Ui = He((r, t) => {
  const e = Ee("Group", sR, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    children: u,
    gap: h,
    align: f,
    justify: g,
    wrap: m,
    grow: v,
    preventGrowOverflow: C,
    vars: b,
    variant: _,
    __size: A,
    ...I
  } = e, T = aR(u), N = T.length, x = Bp(h ?? "md"), W = { childWidth: `calc(${100 / N}% - (${x} - ${x} / ${N}))` }, z = lt({
    name: "Group",
    props: e,
    stylesCtx: W,
    className: o,
    style: a,
    classes: Fg,
    classNames: n,
    styles: c,
    unstyled: l,
    vars: b,
    varsResolver: cR
  });
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ...z("root"),
      ref: t,
      variant: _,
      mod: { grow: v },
      size: A,
      ...I
    },
    T
  );
});
Ui.classes = Fg;
Ui.displayName = "@mantine/core/Group";
const [lR, zi] = JT({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var Nr = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const lp = {}, uR = (r, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${gr(t)} - ${K(2)})`
  }
}), Ts = He((r, t) => {
  const e = Ee("InputDescription", lp, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    vars: u,
    size: h,
    __staticSelector: f,
    __inheritStyles: g = !0,
    variant: m,
    ...v
  } = Ee("InputDescription", lp, e), C = zi(), b = lt({
    name: ["InputWrapper", f],
    props: e,
    classes: Nr,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    rootSelector: "description",
    vars: u,
    varsResolver: uR
  }), _ = g && (C == null ? void 0 : C.getStyles) || b;
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      component: "p",
      ref: t,
      variant: m,
      size: h,
      ..._("description"),
      ...v
    }
  );
});
Ts.classes = Nr;
Ts.displayName = "@mantine/core/InputDescription";
const dR = {}, hR = (r, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${gr(t)} - ${K(2)})`
  }
}), Is = He((r, t) => {
  const e = Ee("InputError", dR, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    vars: u,
    size: h,
    __staticSelector: f,
    __inheritStyles: g = !0,
    variant: m,
    ...v
  } = e, C = lt({
    name: ["InputWrapper", f],
    props: e,
    classes: Nr,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    rootSelector: "error",
    vars: u,
    varsResolver: hR
  }), b = zi(), _ = g && (b == null ? void 0 : b.getStyles) || C;
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      component: "p",
      ref: t,
      variant: m,
      size: h,
      ..._("error"),
      ...v
    }
  );
});
Is.classes = Nr;
Is.displayName = "@mantine/core/InputError";
const up = {
  labelElement: "label"
}, fR = (r, { size: t }) => ({
  label: {
    "--input-label-size": gr(t),
    "--input-asterisk-color": void 0
  }
}), As = He((r, t) => {
  const e = Ee("InputLabel", up, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    vars: u,
    labelElement: h,
    size: f,
    required: g,
    htmlFor: m,
    onMouseDown: v,
    children: C,
    __staticSelector: b,
    variant: _,
    ...A
  } = Ee("InputLabel", up, e), I = lt({
    name: ["InputWrapper", b],
    props: e,
    classes: Nr,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    rootSelector: "label",
    vars: u,
    varsResolver: fR
  }), T = zi(), N = (T == null ? void 0 : T.getStyles) || I;
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ...N("label"),
      component: h,
      variant: _,
      size: f,
      ref: t,
      htmlFor: h === "label" ? m : void 0,
      mod: { required: g },
      onMouseDown: (x) => {
        v == null || v(x), !x.defaultPrevented && x.detail > 1 && x.preventDefault();
      },
      ...A
    },
    C,
    g && /* @__PURE__ */ k.createElement("span", { ...N("required"), "aria-hidden": !0 }, " *")
  );
});
As.classes = Nr;
As.displayName = "@mantine/core/InputLabel";
const dp = {}, lu = He((r, t) => {
  const e = Ee("InputPlaceholder", dp, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    vars: u,
    __staticSelector: h,
    variant: f,
    error: g,
    ...m
  } = Ee("InputPlaceholder", dp, e), v = lt({
    name: ["InputPlaceholder", h],
    props: e,
    classes: Nr,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ...v("placeholder"),
      mod: { error: !!g },
      component: "span",
      variant: f,
      ref: t,
      ...m
    }
  );
});
lu.classes = Nr;
lu.displayName = "@mantine/core/InputPlaceholder";
function pR(r, { hasDescription: t, hasError: e }) {
  const n = r.findIndex((u) => u === "input"), o = r[n - 1], a = r[n + 1];
  return { offsetBottom: t && a === "description" || e && a === "error", offsetTop: t && o === "description" || e && o === "error" };
}
const gR = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, mR = (r, { size: t }) => ({
  label: {
    "--input-label-size": gr(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${gr(t)} - ${K(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${gr(t)} - ${K(2)})`
  }
}), uu = He((r, t) => {
  const e = Ee("InputWrapper", gR, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    vars: u,
    size: h,
    variant: f,
    __staticSelector: g,
    inputContainer: m,
    inputWrapperOrder: v,
    label: C,
    error: b,
    description: _,
    labelProps: A,
    descriptionProps: I,
    errorProps: T,
    labelElement: N,
    children: x,
    withAsterisk: D,
    id: W,
    required: z,
    __stylesApiProps: se,
    ...ie
  } = e, we = lt({
    name: ["InputWrapper", g],
    props: se || e,
    classes: Nr,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: mR
  }), ne = {
    size: h,
    variant: f,
    __staticSelector: g
  }, de = fo(W), ce = typeof D == "boolean" ? D : z, ve = (T == null ? void 0 : T.id) || `${de}-error`, j = (I == null ? void 0 : I.id) || `${de}-description`, te = de, Z = !!b && typeof b != "boolean", Pe = !!_, Qe = `${Z ? ve : ""} ${Pe ? j : ""}`, ot = Qe.trim().length > 0 ? Qe.trim() : void 0, ut = (A == null ? void 0 : A.id) || `${de}-label`, Gr = C && /* @__PURE__ */ k.createElement(
    As,
    {
      key: "label",
      labelElement: N,
      id: ut,
      htmlFor: te,
      required: ce,
      ...ne,
      ...A
    },
    C
  ), rn = Pe && /* @__PURE__ */ k.createElement(
    Ts,
    {
      key: "description",
      ...I,
      ...ne,
      size: (I == null ? void 0 : I.size) || ne.size,
      id: (I == null ? void 0 : I.id) || j
    },
    _
  ), Yt = /* @__PURE__ */ k.createElement(k.Fragment, { key: "input" }, m(x)), or = Z && /* @__PURE__ */ k.createElement(
    Is,
    {
      ...T,
      ...ne,
      size: (T == null ? void 0 : T.size) || ne.size,
      key: "error",
      id: (T == null ? void 0 : T.id) || ve
    },
    b
  ), nn = v.map((ir) => {
    switch (ir) {
      case "label":
        return Gr;
      case "input":
        return Yt;
      case "description":
        return rn;
      case "error":
        return or;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ k.createElement(
    lR,
    {
      value: {
        getStyles: we,
        describedBy: ot,
        inputId: te,
        labelId: ut,
        ...pR(v, { hasDescription: Pe, hasError: Z })
      }
    },
    /* @__PURE__ */ k.createElement(
      ke,
      {
        ref: t,
        variant: f,
        size: h,
        mod: { error: !!b },
        ...we("root"),
        ...ie
      },
      nn
    )
  );
});
uu.classes = Nr;
uu.displayName = "@mantine/core/InputWrapper";
const vR = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, yR = (r, t, e) => ({
  wrapper: {
    "--input-margin-top": e.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": e.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": kt(t.size, "input-height"),
    "--input-fz": gr(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : Qo(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? K(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? K(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? kt(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), Bt = Jo((r, t) => {
  const e = Ee("Input", vR, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    required: u,
    __staticSelector: h,
    __stylesApiProps: f,
    size: g,
    wrapperProps: m,
    error: v,
    disabled: C,
    leftSection: b,
    leftSectionProps: _,
    leftSectionWidth: A,
    rightSection: I,
    rightSectionProps: T,
    rightSectionWidth: N,
    rightSectionPointerEvents: x,
    leftSectionPointerEvents: D,
    variant: W,
    vars: z,
    pointer: se,
    multiline: ie,
    radius: we,
    id: ne,
    withAria: de,
    withErrorStyles: ce,
    ...ve
  } = e, { styleProps: j, rest: te } = Es(ve), Z = zi(), Pe = { offsetBottom: Z == null ? void 0 : Z.offsetBottom, offsetTop: Z == null ? void 0 : Z.offsetTop }, Qe = lt({
    name: ["Input", h],
    props: f || e,
    classes: Nr,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    stylesCtx: Pe,
    rootSelector: "wrapper",
    vars: z,
    varsResolver: yR
  }), ot = de ? {
    required: u,
    disabled: C,
    "aria-invalid": !!v,
    "aria-describedby": Z == null ? void 0 : Z.describedBy,
    id: (Z == null ? void 0 : Z.inputId) || ne
  } : {};
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ...Qe("wrapper"),
      ...j,
      ...m,
      mod: {
        error: !!v && ce,
        pointer: se,
        disabled: C,
        multiline: ie,
        "data-with-right-section": !!I,
        "data-with-left-section": !!b
      },
      variant: W,
      size: g
    },
    b && /* @__PURE__ */ k.createElement(
      "div",
      {
        ..._,
        "data-position": "left",
        ...Qe("section", {
          className: _ == null ? void 0 : _.className,
          style: _ == null ? void 0 : _.style
        })
      },
      b
    ),
    /* @__PURE__ */ k.createElement(
      ke,
      {
        component: "input",
        ...te,
        ...ot,
        ref: t,
        required: u,
        mod: { disabled: C, error: !!v && ce },
        variant: W,
        ...Qe("input")
      }
    ),
    I && /* @__PURE__ */ k.createElement(
      "div",
      {
        ...T,
        "data-position": "right",
        ...Qe("section", {
          className: T == null ? void 0 : T.className,
          style: T == null ? void 0 : T.style
        })
      },
      I
    )
  );
});
Bt.classes = Nr;
Bt.Wrapper = uu;
Bt.Label = As;
Bt.Error = Is;
Bt.Description = Ts;
Bt.Placeholder = lu;
Bt.displayName = "@mantine/core/Input";
function CR(r, t, e) {
  const n = Ee(r, t, e), {
    label: o,
    description: a,
    error: c,
    required: l,
    classNames: u,
    styles: h,
    className: f,
    unstyled: g,
    __staticSelector: m,
    __stylesApiProps: v,
    errorProps: C,
    labelProps: b,
    descriptionProps: _,
    wrapperProps: A,
    id: I,
    size: T,
    style: N,
    inputContainer: x,
    inputWrapperOrder: D,
    withAsterisk: W,
    variant: z,
    vars: se,
    ...ie
  } = n, { styleProps: we, rest: ne } = Es(ie), de = {
    label: o,
    description: a,
    error: c,
    required: l,
    classNames: u,
    className: f,
    __staticSelector: m,
    __stylesApiProps: v || n,
    errorProps: C,
    labelProps: b,
    descriptionProps: _,
    unstyled: g,
    styles: h,
    size: T,
    style: N,
    inputContainer: x,
    inputWrapperOrder: D,
    withAsterisk: W,
    variant: z,
    id: I,
    ...A
  };
  return {
    ...ne,
    classNames: u,
    styles: h,
    unstyled: g,
    wrapperProps: { ...de, ...we },
    inputProps: {
      required: l,
      classNames: u,
      styles: h,
      unstyled: g,
      size: T,
      __staticSelector: m,
      __stylesApiProps: v || n,
      error: c,
      variant: z,
      id: I
    }
  };
}
const ER = {
  __staticSelector: "InputBase",
  withAria: !0
}, $n = Jo((r, t) => {
  const { inputProps: e, wrapperProps: n, ...o } = CR("InputBase", ER, r);
  return /* @__PURE__ */ k.createElement(Bt.Wrapper, { ...n }, /* @__PURE__ */ k.createElement(Bt, { ...e, ...o, ref: t }));
});
$n.classes = { ...Bt.classes, ...Bt.Wrapper.classes };
$n.displayName = "@mantine/core/InputBase";
const [wR, du] = jo(
  "Accordion component was not found in the tree"
);
function hu({ style: r, size: t = 16, ...e }) {
  return /* @__PURE__ */ k.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: K(t), height: K(t), display: "block" },
      ...e
    },
    /* @__PURE__ */ k.createElement(
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
hu.displayName = "@mantine/core/AccordionChevron";
const [bR, Bg] = jo("Accordion.Item component was not found in the tree");
var Wi = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const _R = {}, fu = He((r, t) => {
  const {
    classNames: e,
    className: n,
    style: o,
    styles: a,
    vars: c,
    chevron: l,
    icon: u,
    onClick: h,
    onKeyDown: f,
    children: g,
    disabled: m,
    ...v
  } = Ee("AccordionControl", _R, r), { value: C } = Bg(), b = du(), _ = b.isItemActive(C), A = typeof b.order == "number", I = `h${b.order}`, T = /* @__PURE__ */ k.createElement(
    $i,
    {
      ...v,
      ...b.getStyles("control", { className: n, classNames: e, style: o, styles: a, variant: b.variant }),
      unstyled: b.unstyled,
      mod: [
        "accordion-control",
        { active: _, "chevron-position": b.chevronPosition, disabled: m }
      ],
      ref: t,
      onClick: (N) => {
        h == null || h(N), b.onChange(C);
      },
      type: "button",
      disabled: m,
      "aria-expanded": _,
      "aria-controls": b.getRegionId(C),
      id: b.getControlId(C),
      onKeyDown: t0({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: b.loop,
        orientation: "vertical",
        onKeyDown: f
      })
    },
    /* @__PURE__ */ k.createElement(
      ke,
      {
        component: "span",
        mod: { rotate: !b.disableChevronRotation && _, position: b.chevronPosition },
        ...b.getStyles("chevron", { classNames: e, styles: a })
      },
      l || b.chevron
    ),
    /* @__PURE__ */ k.createElement("span", { ...b.getStyles("label", { classNames: e, styles: a }) }, g),
    u && /* @__PURE__ */ k.createElement(
      ke,
      {
        component: "span",
        mod: { "chevron-position": b.chevronPosition },
        ...b.getStyles("icon", { classNames: e, styles: a })
      },
      u
    )
  );
  return A ? /* @__PURE__ */ k.createElement(I, { ...b.getStyles("itemTitle", { classNames: e, styles: a }) }, T) : T;
});
fu.displayName = "@mantine/core/AccordionControl";
fu.classes = Wi;
const SR = {}, pu = He((r, t) => {
  const { classNames: e, className: n, style: o, styles: a, vars: c, value: l, ...u } = Ee(
    "AccordionItem",
    SR,
    r
  ), h = du();
  return /* @__PURE__ */ k.createElement(bR, { value: { value: l } }, /* @__PURE__ */ k.createElement(
    ke,
    {
      ref: t,
      mod: { active: h.isItemActive(l) },
      ...h.getStyles("item", { className: n, classNames: e, styles: a, style: o, variant: h.variant }),
      ...u
    }
  ));
});
pu.displayName = "@mantine/core/AccordionItem";
pu.classes = Wi;
const TR = {}, gu = He((r, t) => {
  const { classNames: e, className: n, style: o, styles: a, vars: c, children: l, ...u } = Ee(
    "AccordionPanel",
    TR,
    r
  ), { value: h } = Bg(), f = du();
  return /* @__PURE__ */ k.createElement(
    sg,
    {
      ref: t,
      ...f.getStyles("panel", { className: n, classNames: e, style: o, styles: a }),
      ...u,
      in: f.isItemActive(h),
      transitionDuration: f.transitionDuration ?? 200,
      role: "region",
      id: f.getRegionId(h),
      "aria-labelledby": f.getControlId(h)
    },
    /* @__PURE__ */ k.createElement("div", { ...f.getStyles("content", { classNames: e, styles: a }) }, l)
  );
});
gu.displayName = "@mantine/core/AccordionPanel";
gu.classes = Wi;
const IR = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ k.createElement(hu, null)
}, AR = (r, { transitionDuration: t, chevronSize: e, radius: n }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": e === void 0 ? void 0 : K(e),
    "--accordion-radius": n === void 0 ? void 0 : Qo(n)
  }
});
function _t(r) {
  const t = Ee("Accordion", IR, r), {
    classNames: e,
    className: n,
    style: o,
    styles: a,
    unstyled: c,
    vars: l,
    children: u,
    multiple: h,
    value: f,
    defaultValue: g,
    onChange: m,
    id: v,
    loop: C,
    transitionDuration: b,
    disableChevronRotation: _,
    chevronPosition: A,
    chevronSize: I,
    order: T,
    chevron: N,
    variant: x,
    radius: D,
    ...W
  } = t, z = fo(v), [se, ie] = uo({
    value: f,
    defaultValue: g,
    finalValue: h ? [] : null,
    onChange: m
  }), we = (ce) => Array.isArray(se) ? se.includes(ce) : ce === se, ne = (ce) => {
    const ve = Array.isArray(se) ? se.includes(ce) ? se.filter((j) => j !== ce) : [...se, ce] : ce === se ? null : ce;
    ie(ve);
  }, de = lt({
    name: "Accordion",
    classes: Wi,
    props: t,
    className: n,
    style: o,
    classNames: e,
    styles: a,
    unstyled: c,
    vars: l,
    varsResolver: AR
  });
  return /* @__PURE__ */ k.createElement(
    wR,
    {
      value: {
        isItemActive: we,
        onChange: ne,
        getControlId: Kf(
          `${z}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Kf(
          `${z}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: b,
        disableChevronRotation: _,
        chevronPosition: A,
        order: T,
        chevron: N,
        loop: C,
        getStyles: de,
        variant: x,
        unstyled: c
      }
    },
    /* @__PURE__ */ k.createElement(ke, { ...de("root"), id: z, ...W, variant: x, "data-accordion": !0 }, u)
  );
}
const RR = (r) => r;
_t.extend = RR;
_t.classes = Wi;
_t.displayName = "@mantine/core/Accordion";
_t.Item = pu;
_t.Panel = gu;
_t.Control = fu;
_t.Chevron = hu;
var Kg = { root: "m-b6d8b162" };
function kR(r) {
  if (r === "start")
    return "start";
  if (r === "end" || r)
    return "end";
}
const PR = {
  inherit: !1
}, NR = (r, { variant: t, lineClamp: e, gradient: n, size: o, color: a }) => ({
  root: {
    "--text-fz": gr(o),
    "--text-lh": a0(o),
    "--text-gradient": t === "gradient" ? Pl(n, r) : void 0,
    "--text-line-clamp": typeof e == "number" ? e.toString() : void 0,
    "--text-color": a ? Go(a, r) : void 0
  }
}), mu = Jo((r, t) => {
  const e = Ee("Text", PR, r), {
    lineClamp: n,
    truncate: o,
    inline: a,
    inherit: c,
    gradient: l,
    span: u,
    __staticSelector: h,
    vars: f,
    className: g,
    style: m,
    classNames: v,
    styles: C,
    unstyled: b,
    variant: _,
    mod: A,
    size: I,
    ...T
  } = e, N = lt({
    name: ["Text", h],
    props: e,
    classes: Kg,
    className: g,
    style: m,
    classNames: v,
    styles: C,
    unstyled: b,
    vars: f,
    varsResolver: NR
  });
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ...N("root", { focusable: !0 }),
      ref: t,
      component: u ? "span" : "p",
      variant: _,
      mod: [
        {
          "data-truncate": kR(o),
          "data-line-clamp": typeof n == "number",
          "data-inline": a,
          "data-inherit": c
        },
        A
      ],
      size: I,
      ...T
    }
  );
});
mu.classes = Kg;
mu.displayName = "@mantine/core/Text";
function qg(r) {
  return typeof r == "string" ? { value: r, label: r } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((t) => qg(t))
  } : r;
}
function $g(r) {
  return r ? r.map(qg) : [];
}
function vu(r) {
  return r.reduce((t, e) => "group" in e ? { ...t, ...vu(e.items) } : (t[e.value] = e, t), {});
}
var Vt = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const OR = {
  error: null
}, MR = (r, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": kt(t, "combobox-chevron-size")
  }
}), yu = He((r, t) => {
  const e = Ee("ComboboxChevron", OR, r), { size: n, error: o, style: a, className: c, classNames: l, styles: u, unstyled: h, vars: f, ...g } = e, m = lt({
    name: "ComboboxChevron",
    classes: Vt,
    props: e,
    style: a,
    className: c,
    classNames: l,
    styles: u,
    unstyled: h,
    vars: f,
    varsResolver: MR,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      component: "svg",
      ...g,
      ...m("chevron"),
      size: n,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }],
      ref: t
    },
    /* @__PURE__ */ k.createElement(
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
yu.classes = Vt;
yu.displayName = "@mantine/core/ComboboxChevron";
const [xR, Or] = jo(
  "Combobox component was not found in tree"
), Gg = ft(
  ({ size: r, onMouseDown: t, onClick: e, onClear: n, ...o }, a) => /* @__PURE__ */ k.createElement(
    cu,
    {
      ref: a,
      size: r || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...o,
      onMouseDown: (c) => {
        c.preventDefault(), t == null || t(c);
      },
      onClick: (c) => {
        n(), e == null || e(c);
      }
    }
  )
);
Gg.displayName = "@mantine/core/ComboboxClearButton";
const LR = {}, Cu = He((r, t) => {
  const { classNames: e, styles: n, className: o, style: a, hidden: c, ...l } = Ee(
    "ComboboxDropdown",
    LR,
    r
  ), u = Or();
  return /* @__PURE__ */ k.createElement(
    qn.Dropdown,
    {
      ...l,
      ref: t,
      role: "presentation",
      "data-hidden": c || void 0,
      ...u.getStyles("dropdown", { className: o, style: a, classNames: e, styles: n })
    }
  );
});
Cu.classes = Vt;
Cu.displayName = "@mantine/core/ComboboxDropdown";
const DR = {
  refProp: "ref"
}, zg = He((r, t) => {
  const { children: e, refProp: n } = Ee("ComboboxDropdownTarget", DR, r);
  if (Or(), !Bi(e))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ k.createElement(qn.Target, { ref: t, refProp: n }, e);
});
zg.displayName = "@mantine/core/ComboboxDropdownTarget";
const UR = {}, Eu = He((r, t) => {
  const { classNames: e, className: n, style: o, styles: a, vars: c, ...l } = Ee(
    "ComboboxEmpty",
    UR,
    r
  ), u = Or();
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ref: t,
      ...u.getStyles("empty", { className: n, classNames: e, styles: a, style: o }),
      ...l
    }
  );
});
Eu.classes = Vt;
Eu.displayName = "@mantine/core/ComboboxEmpty";
function wu({
  onKeyDown: r,
  withKeyboardNavigation: t,
  withAriaAttributes: e,
  withExpandedAttribute: n,
  targetType: o
}) {
  const a = Or(), [c, l] = pe(null), u = (f) => {
    if (r == null || r(f), !a.readOnly && t) {
      if (f.nativeEvent.code === "ArrowDown" && (f.preventDefault(), a.store.dropdownOpened ? l(a.store.selectNextOption()) : (a.store.openDropdown("keyboard"), l(a.store.selectActiveOption()))), f.nativeEvent.code === "ArrowUp" && (f.preventDefault(), a.store.dropdownOpened ? l(a.store.selectPreviousOption()) : (a.store.openDropdown("keyboard"), l(a.store.selectActiveOption()))), f.nativeEvent.code === "Enter") {
        const g = a.store.getSelectedOptionIndex();
        a.store.dropdownOpened && g !== -1 ? (f.preventDefault(), a.store.clickSelectedOption()) : o === "button" && (f.preventDefault(), a.store.openDropdown("keyboard"));
      }
      f.nativeEvent.code === "Escape" && a.store.closeDropdown("keyboard"), f.nativeEvent.code === "Space" && o === "button" && (f.preventDefault(), a.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...e ? {
      "aria-haspopup": "listbox",
      "aria-expanded": n && !!(a.store.listId && a.store.dropdownOpened) || void 0,
      "aria-controls": a.store.listId,
      "aria-activedescendant": a.store.dropdownOpened && c || void 0,
      autoComplete: "off",
      "data-expanded": a.store.dropdownOpened ? !0 : void 0
    } : {},
    onKeyDown: u
  };
}
const HR = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Wg = He((r, t) => {
  const {
    children: e,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: c,
    targetType: l,
    ...u
  } = Ee("ComboboxEventsTarget", HR, r);
  if (!Bi(e))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const h = Or(), f = wu({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: c,
    onKeyDown: e.props.onKeyDown
  });
  return hs(e, {
    ...f,
    ...u,
    [n]: kr(t, h.store.targetRef, e == null ? void 0 : e.ref)
  });
});
Wg.displayName = "@mantine/core/ComboboxEventsTarget";
const FR = {}, bu = He((r, t) => {
  const { classNames: e, className: n, style: o, styles: a, vars: c, ...l } = Ee(
    "ComboboxFooter",
    FR,
    r
  ), u = Or();
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ref: t,
      ...u.getStyles("footer", { className: n, classNames: e, style: o, styles: a }),
      ...l
    }
  );
});
bu.classes = Vt;
bu.displayName = "@mantine/core/ComboboxFooter";
const BR = {}, _u = He((r, t) => {
  const { classNames: e, className: n, style: o, styles: a, vars: c, children: l, label: u, ...h } = Ee(
    "ComboboxGroup",
    BR,
    r
  ), f = Or();
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ref: t,
      ...f.getStyles("group", { className: n, classNames: e, style: o, styles: a }),
      ...h
    },
    u && /* @__PURE__ */ k.createElement("div", { ...f.getStyles("groupLabel", { classNames: e, styles: a }) }, u),
    l
  );
});
_u.classes = Vt;
_u.displayName = "@mantine/core/ComboboxGroup";
const KR = {}, Su = He((r, t) => {
  const { classNames: e, className: n, style: o, styles: a, vars: c, ...l } = Ee(
    "ComboboxHeader",
    KR,
    r
  ), u = Or();
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ref: t,
      ...u.getStyles("header", { className: n, classNames: e, style: o, styles: a }),
      ...l
    }
  );
});
Su.classes = Vt;
Su.displayName = "@mantine/core/ComboboxHeader";
const qR = {}, Tu = He((r, t) => {
  const e = Ee("ComboboxOption", qR, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    vars: l,
    onClick: u,
    id: h,
    active: f,
    onMouseDown: g,
    onMouseOver: m,
    disabled: v,
    selected: C,
    ...b
  } = e, _ = Or(), A = vp(), I = h || A;
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ..._.getStyles("option", { className: o, classNames: n, styles: c, style: a }),
      ...b,
      ref: t,
      id: I,
      mod: [
        "combobox-option",
        { "combobox-active": f, "combobox-disabled": v, "combobox-selected": C }
      ],
      role: "option",
      onClick: (T) => {
        var N;
        v ? T.preventDefault() : ((N = _.onOptionSubmit) == null || N.call(_, e.value, e), u == null || u(T));
      },
      onMouseDown: (T) => {
        T.preventDefault(), g == null || g(T);
      },
      onMouseOver: (T) => {
        _.resetSelectionOnOptionHover && _.store.resetSelectedOption(), m == null || m(T);
      }
    }
  );
});
Tu.classes = Vt;
Tu.displayName = "@mantine/core/ComboboxOption";
const $R = {}, Iu = He((r, t) => {
  const e = Ee("ComboboxOptions", $R, r), { classNames: n, className: o, style: a, styles: c, id: l, onMouseDown: u, labelledBy: h, ...f } = e, g = Or(), m = fo(l);
  return me(() => {
    g.store.setListId(m);
  }, [m]), /* @__PURE__ */ k.createElement(
    ke,
    {
      ref: t,
      ...g.getStyles("options", { className: o, style: a, classNames: n, styles: c }),
      ...f,
      id: m,
      role: "listbox",
      "aria-labelledby": h,
      onMouseDown: (v) => {
        v.preventDefault(), u == null || u(v);
      }
    }
  );
});
Iu.classes = Vt;
Iu.displayName = "@mantine/core/ComboboxOptions";
const GR = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Au = He((r, t) => {
  const e = Ee("ComboboxSearch", GR, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: c,
    withAriaAttributes: l,
    onKeyDown: u,
    withKeyboardNavigation: h,
    size: f,
    ...g
  } = e, m = Or(), v = m.getStyles("search"), C = wu({
    targetType: "input",
    withAriaAttributes: l,
    withKeyboardNavigation: h,
    withExpandedAttribute: !1,
    onKeyDown: u
  });
  return /* @__PURE__ */ k.createElement(
    Bt,
    {
      ref: kr(t, m.store.searchRef),
      classNames: [{ input: v.className }, n],
      styles: [{ input: v.style }, o],
      size: f || m.size,
      ...C,
      ...g,
      __staticSelector: "Combobox"
    }
  );
});
Au.classes = Vt;
Au.displayName = "@mantine/core/ComboboxSearch";
const zR = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Vg = He((r, t) => {
  const {
    children: e,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: a,
    withExpandedAttribute: c,
    targetType: l,
    ...u
  } = Ee("ComboboxTarget", zR, r);
  if (!Bi(e))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const h = Or(), f = wu({
    targetType: l,
    withAriaAttributes: a,
    withKeyboardNavigation: o,
    withExpandedAttribute: c,
    onKeyDown: e.props.onKeyDown
  }), g = hs(e, {
    ...f,
    ...u
  });
  return /* @__PURE__ */ k.createElement(qn.Target, { ref: kr(t, h.store.targetRef) }, g);
});
Vg.displayName = "@mantine/core/ComboboxTarget";
function WR(r, t, e) {
  for (let n = r - 1; n >= 0; n -= 1)
    if (!t[n].hasAttribute("data-combobox-disabled"))
      return n;
  if (e) {
    for (let n = t.length - 1; n > -1; n -= 1)
      if (!t[n].hasAttribute("data-combobox-disabled"))
        return n;
  }
  return r;
}
function VR(r, t, e) {
  for (let n = r + 1; n < t.length; n += 1)
    if (!t[n].hasAttribute("data-combobox-disabled"))
      return n;
  if (e) {
    for (let n = 0; n < t.length; n += 1)
      if (!t[n].hasAttribute("data-combobox-disabled"))
        return n;
  }
  return r;
}
function YR(r) {
  for (let t = 0; t < r.length; t += 1)
    if (!r[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function Ru({
  defaultOpened: r,
  opened: t,
  onOpenedChange: e,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: a = !0,
  scrollBehavior: c = "instant"
} = {}) {
  const [l, u] = uo({
    value: t,
    defaultValue: r,
    finalValue: !1,
    onChange: e
  }), h = Ke(null), f = Ke(-1), g = Ke(null), m = Ke(null), v = Ke(-1), C = Ke(-1), b = Ke(-1), _ = Ve(
    (j = "unknown") => {
      l || (u(!0), o == null || o(j));
    },
    [u, o, l]
  ), A = Ve(
    (j = "unknown") => {
      l && (u(!1), n == null || n(j));
    },
    [u, n, l]
  ), I = Ve(
    (j = "unknown") => {
      l ? A(j) : _(j);
    },
    [A, _, l]
  ), T = Ve(() => {
    const j = document.querySelector(`#${h.current} [data-combobox-selected]`);
    j == null || j.removeAttribute("data-combobox-selected"), j == null || j.removeAttribute("aria-selected");
  }, []), N = Ve(
    (j) => {
      const te = document.getElementById(h.current), Z = te == null ? void 0 : te.querySelectorAll("[data-combobox-option]");
      if (!Z)
        return null;
      const Pe = j >= Z.length ? 0 : j < 0 ? Z.length - 1 : j;
      return f.current = Pe, Z != null && Z[Pe] && !Z[Pe].hasAttribute("data-combobox-disabled") ? (T(), Z[Pe].setAttribute("data-combobox-selected", "true"), Z[Pe].setAttribute("aria-selected", "true"), Z[Pe].scrollIntoView({ block: "nearest", behavior: c }), Z[Pe].id) : null;
    },
    [c, T]
  ), x = Ve(() => {
    const j = document.querySelector(
      `#${h.current} [data-combobox-active]`
    );
    if (j) {
      const te = document.querySelectorAll(
        `#${h.current} [data-combobox-option]`
      ), Z = Array.from(te).findIndex((Pe) => Pe === j);
      return N(Z);
    }
    return N(0);
  }, [N]), D = Ve(
    () => N(
      VR(
        f.current,
        document.querySelectorAll(`#${h.current} [data-combobox-option]`),
        a
      )
    ),
    [N, a]
  ), W = Ve(
    () => N(
      WR(
        f.current,
        document.querySelectorAll(`#${h.current} [data-combobox-option]`),
        a
      )
    ),
    [N, a]
  ), z = Ve(
    () => N(
      YR(
        document.querySelectorAll(`#${h.current} [data-combobox-option]`)
      )
    ),
    [N]
  ), se = Ve((j = "selected") => {
    b.current = window.setTimeout(() => {
      const te = document.querySelectorAll(
        `#${h.current} [data-combobox-option]`
      ), Z = Array.from(te).findIndex(
        (Pe) => Pe.hasAttribute(`data-combobox-${j}`)
      );
      f.current = Z;
    }, 0);
  }, []), ie = Ve(() => {
    f.current = -1, T();
  }, [T]), we = Ve(() => {
    const j = document.querySelectorAll(
      `#${h.current} [data-combobox-option]`
    ), te = j == null ? void 0 : j[f.current];
    te == null || te.click();
  }, []), ne = Ve((j) => {
    h.current = j;
  }, []), de = Ve(() => {
    v.current = window.setTimeout(() => g.current.focus(), 0);
  }, []), ce = Ve(() => {
    C.current = window.setTimeout(() => m.current.focus(), 0);
  }, []), ve = Ve(() => f.current, []);
  return me(
    () => () => {
      window.clearTimeout(v.current), window.clearTimeout(C.current), window.clearTimeout(b.current);
    },
    []
  ), {
    dropdownOpened: l,
    openDropdown: _,
    closeDropdown: A,
    toggleDropdown: I,
    selectedOptionIndex: f.current,
    getSelectedOptionIndex: ve,
    selectOption: N,
    selectFirstOption: z,
    selectActiveOption: x,
    selectNextOption: D,
    selectPreviousOption: W,
    resetSelectedOption: ie,
    updateSelectedOptionIndex: se,
    listId: h.current,
    setListId: ne,
    clickSelectedOption: we,
    searchRef: g,
    focusSearchInput: de,
    targetRef: m,
    focusTarget: ce
  };
}
const jR = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, QR = (r, { size: t, dropdownPadding: e }) => ({
  options: {
    "--combobox-option-fz": gr(t),
    "--combobox-option-padding": kt(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": e === void 0 ? void 0 : K(e),
    "--combobox-option-fz": gr(t),
    "--combobox-option-padding": kt(t, "combobox-option-padding")
  }
});
function Ye(r) {
  const t = Ee("Combobox", jR, r), {
    classNames: e,
    styles: n,
    unstyled: o,
    children: a,
    store: c,
    vars: l,
    onOptionSubmit: u,
    size: h,
    dropdownPadding: f,
    resetSelectionOnOptionHover: g,
    __staticSelector: m,
    readOnly: v,
    ...C
  } = t, b = Ru(), _ = c || b, A = lt({
    name: m || "Combobox",
    classes: Vt,
    props: t,
    classNames: e,
    styles: n,
    unstyled: o,
    vars: l,
    varsResolver: QR
  });
  return /* @__PURE__ */ k.createElement(
    xR,
    {
      value: {
        getStyles: A,
        store: _,
        onOptionSubmit: u,
        size: h,
        resetSelectionOnOptionHover: g,
        readOnly: v
      }
    },
    /* @__PURE__ */ k.createElement(
      qn,
      {
        opened: _.dropdownOpened,
        ...C,
        onClose: _.closeDropdown,
        withRoles: !1,
        unstyled: o
      },
      a
    )
  );
}
const JR = (r) => r;
Ye.extend = JR;
Ye.classes = Vt;
Ye.displayName = "@mantine/core/Combobox";
Ye.Target = Vg;
Ye.Dropdown = Cu;
Ye.Options = Iu;
Ye.Option = Tu;
Ye.Search = Au;
Ye.Empty = Eu;
Ye.Chevron = yu;
Ye.Footer = bu;
Ye.Header = Su;
Ye.EventsTarget = Wg;
Ye.DropdownTarget = zg;
Ye.Group = _u;
Ye.ClearButton = Gg;
var Yg = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const XR = Yg, jg = ft(
  ({
    __staticSelector: r,
    __stylesApiProps: t,
    className: e,
    classNames: n,
    styles: o,
    unstyled: a,
    children: c,
    label: l,
    description: u,
    id: h,
    disabled: f,
    error: g,
    size: m,
    labelPosition: v = "left",
    variant: C,
    style: b,
    vars: _,
    ...A
  }, I) => {
    const T = lt({
      name: r,
      props: t,
      className: e,
      style: b,
      classes: Yg,
      classNames: n,
      styles: o,
      unstyled: a
    });
    return /* @__PURE__ */ k.createElement(
      ke,
      {
        ...T("root"),
        ref: I,
        __vars: {
          "--label-fz": gr(m),
          "--label-lh": kt(m, "label-lh")
        },
        mod: { "label-position": v },
        variant: C,
        size: m,
        ...A
      },
      /* @__PURE__ */ k.createElement("div", { ...T("body") }, c, /* @__PURE__ */ k.createElement("div", { ...T("labelWrapper"), "data-disabled": f || void 0 }, l && /* @__PURE__ */ k.createElement("label", { ...T("label"), "data-disabled": f || void 0, htmlFor: h }, l), u && /* @__PURE__ */ k.createElement(Bt.Description, { size: m, __inheritStyles: !1, ...T("description") }, u), g && g !== "boolean" && /* @__PURE__ */ k.createElement(Bt.Error, { size: m, __inheritStyles: !1, ...T("error") }, g)))
    );
  }
);
jg.displayName = "@mantine/core/InlineInput";
const Qg = Fn(null), ZR = Qg.Provider, ek = () => Bn(Qg);
function tk({ children: r, role: t }) {
  const e = zi();
  return e ? /* @__PURE__ */ k.createElement("div", { role: t, "aria-labelledby": e.labelId, "aria-describedby": e.describedBy }, r) : /* @__PURE__ */ k.createElement(k.Fragment, null, r);
}
const rk = {}, ku = He((r, t) => {
  const { value: e, defaultValue: n, onChange: o, size: a, wrapperProps: c, children: l, ...u } = Ee(
    "CheckboxGroup",
    rk,
    r
  ), [h, f] = uo({
    value: e,
    defaultValue: n,
    finalValue: [],
    onChange: o
  }), g = (m) => {
    const v = m.currentTarget.value;
    f(
      h.includes(v) ? h.filter((C) => C !== v) : [...h, v]
    );
  };
  return /* @__PURE__ */ k.createElement(ZR, { value: { value: h, onChange: g, size: a } }, /* @__PURE__ */ k.createElement(
    Bt.Wrapper,
    {
      size: a,
      ref: t,
      ...c,
      ...u,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ k.createElement(tk, { role: "group" }, l)
  ));
});
ku.classes = Bt.Wrapper.classes;
ku.displayName = "@mantine/core/CheckboxGroup";
function Jg({ size: r, style: t, ...e }) {
  const n = r !== void 0 ? { width: K(r), height: K(r), ...t } : t;
  return /* @__PURE__ */ k.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      "aria-hidden": !0,
      ...e
    },
    /* @__PURE__ */ k.createElement(
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
function nk({ indeterminate: r, ...t }) {
  return r ? /* @__PURE__ */ k.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...t
    },
    /* @__PURE__ */ k.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
  ) : /* @__PURE__ */ k.createElement(Jg, { ...t });
}
var Xg = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const ok = {
  labelPosition: "right",
  icon: nk
}, ik = (r, { radius: t, color: e, size: n, iconColor: o, variant: a }) => {
  const c = Cs({ color: e || r.primaryColor, theme: r }), l = c.isThemeColor && c.shade === void 0 ? `var(--mantine-color-${c.color}-outline)` : c.color;
  return {
    root: {
      "--checkbox-size": kt(n, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Qo(t),
      "--checkbox-color": a === "outline" ? l : Go(e, r),
      "--checkbox-icon-color": o ? Go(o, r) : void 0
    }
  };
}, Rs = He((r, t) => {
  const e = Ee("Checkbox", ok, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    vars: u,
    color: h,
    label: f,
    id: g,
    size: m,
    radius: v,
    wrapperProps: C,
    children: b,
    checked: _,
    labelPosition: A,
    description: I,
    error: T,
    disabled: N,
    variant: x,
    indeterminate: D,
    icon: W,
    rootRef: z,
    iconColor: se,
    onChange: ie,
    ...we
  } = e, ne = ek(), de = m || (ne == null ? void 0 : ne.size), ce = W, ve = lt({
    name: "Checkbox",
    props: e,
    classes: Xg,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: ik
  }), { styleProps: j, rest: te } = Es(we), Z = fo(g), Pe = ne ? {
    checked: ne.value.includes(te.value),
    onChange: (Qe) => {
      ne.onChange(Qe), ie == null || ie(Qe);
    }
  } : {};
  return /* @__PURE__ */ k.createElement(
    jg,
    {
      ...ve("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: e,
      id: Z,
      size: de,
      labelPosition: A,
      label: f,
      description: I,
      error: T,
      disabled: N,
      classNames: n,
      styles: c,
      unstyled: l,
      "data-checked": Pe.checked || _ || void 0,
      variant: x,
      ref: z,
      ...j,
      ...C
    },
    /* @__PURE__ */ k.createElement(ke, { ...ve("inner"), mod: { "data-label-position": A } }, /* @__PURE__ */ k.createElement(
      ke,
      {
        component: "input",
        id: Z,
        ref: t,
        checked: _,
        disabled: N,
        mod: { error: !!T, indeterminate: D },
        ...ve("input", { focusable: !0, variant: x }),
        onChange: ie,
        ...te,
        ...Pe,
        type: "checkbox"
      }
    ), /* @__PURE__ */ k.createElement(ce, { indeterminate: D, ...ve("icon") }))
  );
});
Rs.classes = { ...Xg, ...XR };
Rs.displayName = "@mantine/core/Checkbox";
Rs.Group = ku;
function Hi(r) {
  return "group" in r;
}
function Zg({
  options: r,
  search: t,
  limit: e
}) {
  const n = t.trim().toLowerCase(), o = [];
  for (let a = 0; a < r.length; a += 1) {
    const c = r[a];
    if (o.length === e)
      return o;
    Hi(c) && o.push({
      group: c.group,
      items: Zg({
        options: c.items,
        search: t,
        limit: e - o.length
      })
    }), Hi(c) || c.label.toLowerCase().includes(n) && o.push(c);
  }
  return o;
}
function ak(r) {
  if (r.length === 0)
    return !0;
  for (const t of r)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function em(r, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const e of r)
      if (Hi(e))
        em(e.items, t);
      else {
        if (typeof e.value > "u")
          throw new Error("[@mantine/core] Each option must have value property");
        if (typeof e.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof e.value}`
          );
        if (t.has(e.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${e.value}" was provided more than once`
          );
        t.add(e.value);
      }
}
function ll(r, t) {
  return Array.isArray(r) ? r.includes(t) : r === t;
}
function tm({ data: r, withCheckIcon: t, value: e, checkIconPosition: n, unstyled: o }) {
  if (!Hi(r)) {
    const c = t && ll(e, r.value) && /* @__PURE__ */ k.createElement(Jg, { className: Vt.optionsDropdownCheckIcon });
    return /* @__PURE__ */ k.createElement(
      Ye.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: bn({ [Vt.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": ll(e, r.value) || void 0,
        "aria-selected": ll(e, r.value)
      },
      n === "left" && c,
      /* @__PURE__ */ k.createElement("span", null, r.label),
      n === "right" && c
    );
  }
  const a = r.items.map((c) => /* @__PURE__ */ k.createElement(
    tm,
    {
      data: c,
      value: e,
      key: c.value,
      unstyled: o,
      withCheckIcon: t,
      checkIconPosition: n
    }
  ));
  return /* @__PURE__ */ k.createElement(Ye.Group, { label: r.group }, a);
}
function rm({
  data: r,
  hidden: t,
  hiddenWhenEmpty: e,
  filter: n,
  search: o,
  limit: a,
  maxDropdownHeight: c,
  withScrollArea: l = !0,
  filterOptions: u = !0,
  withCheckIcon: h = !1,
  value: f,
  checkIconPosition: g,
  nothingFoundMessage: m,
  unstyled: v,
  labelId: C
}) {
  em(r);
  const _ = typeof o == "string" ? (n || Zg)({
    options: r,
    search: u ? o : "",
    limit: a ?? 1 / 0
  }) : r, A = ak(_), I = _.map((T) => /* @__PURE__ */ k.createElement(
    tm,
    {
      data: T,
      key: Hi(T) ? T.group : T.value,
      withCheckIcon: h,
      value: f,
      checkIconPosition: g,
      unstyled: v
    }
  ));
  return /* @__PURE__ */ k.createElement(Ye.Dropdown, { hidden: t || e && A }, /* @__PURE__ */ k.createElement(Ye.Options, { labelledBy: C }, l ? /* @__PURE__ */ k.createElement(
    qi.Autosize,
    {
      mah: c ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Vt.optionsDropdownScrollArea
    },
    I
  ) : I, A && m && /* @__PURE__ */ k.createElement(Ye.Empty, null, m)));
}
const sk = {}, Pu = He((r, t) => {
  const e = Ee("Autocomplete", sk, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: c,
    dropdownOpened: l,
    defaultDropdownOpened: u,
    onDropdownClose: h,
    onDropdownOpen: f,
    onFocus: g,
    onBlur: m,
    onClick: v,
    onChange: C,
    data: b,
    value: _,
    defaultValue: A,
    selectFirstOptionOnChange: I,
    onOptionSubmit: T,
    comboboxProps: N,
    readOnly: x,
    disabled: D,
    filter: W,
    limit: z,
    withScrollArea: se,
    maxDropdownHeight: ie,
    size: we,
    id: ne,
    ...de
  } = e, ce = fo(ne), ve = $g(b), j = vu(ve), [te, Z] = uo({
    value: _,
    defaultValue: A,
    finalValue: "",
    onChange: C
  }), Pe = Ru({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: f,
    onDropdownClose: () => {
      h == null || h(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: Qe, resolvedStyles: ot } = tg({
    props: e,
    styles: o,
    classNames: n
  });
  return me(() => {
    I && Pe.selectFirstOption();
  }, [I, te]), /* @__PURE__ */ k.createElement(
    Ye,
    {
      store: Pe,
      __staticSelector: "Autocomplete",
      classNames: Qe,
      styles: ot,
      unstyled: a,
      readOnly: x,
      onOptionSubmit: (ut) => {
        T == null || T(ut), Z(j[ut].label), Pe.closeDropdown();
      },
      size: we,
      ...N
    },
    /* @__PURE__ */ k.createElement(Ye.Target, null, /* @__PURE__ */ k.createElement(
      $n,
      {
        ref: t,
        ...de,
        size: we,
        __staticSelector: "Autocomplete",
        disabled: D,
        readOnly: x,
        value: te,
        onChange: (ut) => {
          Z(ut.currentTarget.value), Pe.openDropdown(), I && Pe.selectFirstOption();
        },
        onFocus: (ut) => {
          Pe.openDropdown(), g == null || g(ut);
        },
        onBlur: (ut) => {
          Pe.closeDropdown(), m == null || m(ut);
        },
        onClick: (ut) => {
          Pe.openDropdown(), v == null || v(ut);
        },
        classNames: Qe,
        styles: ot,
        unstyled: a,
        id: ce
      }
    )),
    /* @__PURE__ */ k.createElement(
      rm,
      {
        data: ve,
        hidden: x || D,
        filter: W,
        search: te,
        limit: z,
        hiddenWhenEmpty: !0,
        withScrollArea: se,
        maxDropdownHeight: ie,
        unstyled: a,
        labelId: `${ce}-label`
      }
    )
  );
});
Pu.classes = { ...$n.classes, ...Ye.classes };
Pu.displayName = "@mantine/core/Autocomplete";
var ks = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const hp = {
  orientation: "horizontal"
}, ck = (r, { borderWidth: t }) => ({
  group: { "--button-border-width": K(t) }
}), Nu = He((r, t) => {
  const e = Ee("ButtonGroup", hp, r), {
    className: n,
    style: o,
    classNames: a,
    styles: c,
    unstyled: l,
    orientation: u,
    vars: h,
    borderWidth: f,
    variant: g,
    ...m
  } = Ee("ButtonGroup", hp, r), v = lt({
    name: "ButtonGroup",
    props: e,
    classes: ks,
    className: n,
    style: o,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: h,
    varsResolver: ck,
    rootSelector: "group"
  });
  return /* @__PURE__ */ k.createElement(
    ke,
    {
      ...v("group"),
      ref: t,
      variant: g,
      mod: { "data-orientation": u },
      role: "group",
      ...m
    }
  );
});
Nu.classes = ks;
Nu.displayName = "@mantine/core/ButtonGroup";
const lk = {}, uk = (r, { radius: t, color: e, gradient: n, variant: o, size: a, justify: c }) => {
  const l = r.variantColorResolver({
    color: e || r.primaryColor,
    theme: r,
    gradient: n,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": c,
      "--button-height": kt(a, "button-height"),
      "--button-padding-x": kt(a, "button-padding-x"),
      "--button-fz": a != null && a.includes("compact") ? gr(a.replace("compact-", "")) : gr(a),
      "--button-radius": t === void 0 ? void 0 : Qo(t),
      "--button-bg": e || o ? l.background : void 0,
      "--button-hover": e || o ? l.hover : void 0,
      "--button-color": e || o ? l.color : void 0,
      "--button-bd": e || o ? l.border : void 0,
      "--button-hover-color": e || o ? l.hoverColor : void 0
    }
  };
}, Vi = Jo((r, t) => {
  const e = Ee("Button", lk, r), {
    style: n,
    vars: o,
    className: a,
    color: c,
    disabled: l,
    children: u,
    leftSection: h,
    rightSection: f,
    fullWidth: g,
    variant: m,
    radius: v,
    loading: C,
    loaderProps: b,
    gradient: _,
    classNames: A,
    styles: I,
    unstyled: T,
    "data-disabled": N,
    ...x
  } = e, D = lt({
    name: "Button",
    props: e,
    classes: ks,
    className: a,
    style: n,
    classNames: A,
    styles: I,
    unstyled: T,
    vars: o,
    varsResolver: uk
  }), W = !!h, z = !!f;
  return /* @__PURE__ */ k.createElement(
    $i,
    {
      ref: t,
      ...D("root", { active: !l && !C && !N }),
      unstyled: T,
      variant: m,
      disabled: l || C,
      mod: {
        disabled: l || N,
        loading: C,
        block: g,
        "with-left-section": W,
        "with-right-section": z
      },
      ...x
    },
    /* @__PURE__ */ k.createElement(ke, { component: "span", ...D("loader"), "aria-hidden": !0 }, /* @__PURE__ */ k.createElement(
      Ss,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...b
      }
    )),
    /* @__PURE__ */ k.createElement("span", { ...D("inner") }, h && /* @__PURE__ */ k.createElement(ke, { component: "span", ...D("section"), mod: { position: "left" } }, h), /* @__PURE__ */ k.createElement(ke, { component: "span", mod: { loading: C }, ...D("label") }, u), f && /* @__PURE__ */ k.createElement(ke, { component: "span", ...D("section"), mod: { position: "right" } }, f))
  );
});
Vi.classes = ks;
Vi.displayName = "@mantine/core/Button";
Vi.Group = Nu;
var nm = { root: "m-7485cace" };
const dk = {}, hk = (r, { size: t, fluid: e }) => ({
  root: {
    "--container-size": e ? void 0 : kt(t, "container-size")
  }
}), Ou = He((r, t) => {
  const e = Ee("Container", dk, r), { classNames: n, className: o, style: a, styles: c, unstyled: l, vars: u, fluid: h, ...f } = e, g = lt({
    name: "Container",
    classes: nm,
    props: e,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: hk
  });
  return /* @__PURE__ */ k.createElement(ke, { ref: t, mod: { fluid: h }, ...g("root"), ...f });
});
Ou.classes = nm;
Ou.displayName = "@mantine/core/Container";
const fk = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Ps = He((r, t) => {
  const e = Ee("Select", fk, r), {
    classNames: n,
    styles: o,
    unstyled: a,
    vars: c,
    dropdownOpened: l,
    defaultDropdownOpened: u,
    onDropdownClose: h,
    onDropdownOpen: f,
    onFocus: g,
    onBlur: m,
    onClick: v,
    onChange: C,
    data: b,
    value: _,
    defaultValue: A,
    selectFirstOptionOnChange: I,
    onOptionSubmit: T,
    comboboxProps: N,
    readOnly: x,
    disabled: D,
    filter: W,
    limit: z,
    withScrollArea: se,
    maxDropdownHeight: ie,
    size: we,
    searchable: ne,
    rightSection: de,
    checkIconPosition: ce,
    withCheckIcon: ve,
    nothingFoundMessage: j,
    name: te,
    form: Z,
    searchValue: Pe,
    defaultSearchValue: Qe,
    onSearchChange: ot,
    allowDeselect: ut,
    error: Gr,
    rightSectionPointerEvents: rn,
    id: Yt,
    clearable: or,
    clearButtonProps: nn,
    hiddenInputProps: ir,
    ...Mr
  } = e, on = Ni(() => $g(b), [b]), qt = Ni(() => vu(on), [on]), vr = fo(Yt), [je, Nt] = uo({
    value: _,
    defaultValue: A,
    finalValue: null,
    onChange: C
  }), Ot = typeof je == "string" ? qt[je] : void 0, [Sn, mt] = uo({
    value: Pe,
    defaultValue: Qe,
    finalValue: Ot ? Ot.label : "",
    onChange: ot
  }), Mt = Ru({
    opened: l,
    defaultOpened: u,
    onDropdownOpen: f,
    onDropdownClose: () => {
      h == null || h(), Mt.resetSelectedOption();
    }
  }), { resolvedClassNames: Gn, resolvedStyles: xr } = tg({
    props: e,
    styles: o,
    classNames: n
  });
  me(() => {
    I && Mt.selectFirstOption();
  }, [I, je]), me(() => {
    _ === null && mt(""), typeof _ == "string" && Ot && mt(Ot.label);
  }, [_, Ot]);
  const St = or && !!je && !D && !x && /* @__PURE__ */ k.createElement(
    Ye.ClearButton,
    {
      size: we,
      ...nn,
      onClear: () => {
        Nt(null), mt("");
      }
    }
  );
  return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(
    Ye,
    {
      store: Mt,
      __staticSelector: "Select",
      classNames: Gn,
      styles: xr,
      unstyled: a,
      readOnly: x,
      onOptionSubmit: (tt) => {
        T == null || T(tt);
        const zr = ut && qt[tt].value === je ? null : qt[tt].value;
        Nt(zr), mt(typeof zr == "string" ? qt[tt].label : ""), Mt.closeDropdown();
      },
      size: we,
      ...N
    },
    /* @__PURE__ */ k.createElement(Ye.Target, { targetType: ne ? "input" : "button" }, /* @__PURE__ */ k.createElement(
      $n,
      {
        id: vr,
        ref: t,
        rightSection: de || St || /* @__PURE__ */ k.createElement(Ye.Chevron, { size: we, error: Gr, unstyled: a }),
        rightSectionPointerEvents: rn || (St ? "all" : "none"),
        ...Mr,
        size: we,
        __staticSelector: "Select",
        disabled: D,
        readOnly: x || !ne,
        value: Sn,
        onChange: (tt) => {
          mt(tt.currentTarget.value), Mt.openDropdown(), I && Mt.selectFirstOption();
        },
        onFocus: (tt) => {
          ne && Mt.openDropdown(), g == null || g(tt);
        },
        onBlur: (tt) => {
          var zr;
          ne && Mt.closeDropdown(), mt(je != null && ((zr = qt[je]) == null ? void 0 : zr.label) || ""), m == null || m(tt);
        },
        onClick: (tt) => {
          ne ? Mt.openDropdown() : Mt.toggleDropdown(), v == null || v(tt);
        },
        classNames: Gn,
        styles: xr,
        unstyled: a,
        pointer: !ne,
        error: Gr
      }
    )),
    /* @__PURE__ */ k.createElement(
      rm,
      {
        data: on,
        hidden: x || D,
        filter: W,
        search: Sn,
        limit: z,
        hiddenWhenEmpty: !ne || !j,
        withScrollArea: se,
        maxDropdownHeight: ie,
        filterOptions: ne && (Ot == null ? void 0 : Ot.label) !== Sn,
        value: je,
        checkIconPosition: ce,
        withCheckIcon: ve,
        nothingFoundMessage: j,
        unstyled: a,
        labelId: `${vr}-label`
      }
    )
  ), /* @__PURE__ */ k.createElement(
    "input",
    {
      type: "hidden",
      name: te,
      value: je || "",
      form: Z,
      disabled: D,
      ...ir
    }
  ));
});
Ps.classes = { ...$n.classes, ...Ye.classes };
Ps.displayName = "@mantine/core/Select";
const pk = {}, so = He((r, t) => {
  const e = Ee("TextInput", pk, r);
  return /* @__PURE__ */ k.createElement($n, { component: "input", ref: t, ...e, __staticSelector: "TextInput" });
});
so.classes = $n.classes;
so.displayName = "@mantine/core/TextInput";
const gk = ["h1", "h2", "h3", "h4", "h5", "h6"];
function mk(r, t) {
  const e = t !== void 0 ? t : `h${r}`;
  return gk.includes(e) ? {
    fontSize: `var(--mantine-${e}-font-size)`,
    fontWeight: `var(--mantine-${e}-font-weight)`,
    lineHeight: `var(--mantine-${e}-line-height)`
  } : {
    fontSize: K(e),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var om = { root: "m-8a5d1357" };
const vk = {
  order: 1
}, yk = (r, { order: t, size: e, lineClamp: n }) => {
  const o = mk(t, e);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0
    }
  };
}, us = He((r, t) => {
  const e = Ee("Title", vk, r), {
    classNames: n,
    className: o,
    style: a,
    styles: c,
    unstyled: l,
    order: u,
    vars: h,
    size: f,
    variant: g,
    lineClamp: m,
    ...v
  } = e, C = lt({
    name: "Title",
    props: e,
    classes: om,
    className: o,
    style: a,
    classNames: n,
    styles: c,
    unstyled: l,
    vars: h,
    varsResolver: yk
  });
  return [1, 2, 3, 4, 5, 6].includes(u) ? /* @__PURE__ */ k.createElement(
    ke,
    {
      ...C("root"),
      component: `h${u}`,
      variant: g,
      ref: t,
      mod: { order: u, "data-line-clamp": typeof m == "number" },
      size: f,
      ...v
    }
  ) : null;
});
us.classes = om;
us.displayName = "@mantine/core/Title";
const Ck = {
  /** Put your mantine theme override here */
}, fp = {
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
}, Ek = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: fp.authorities.signUpSignIn.authority,
    knownAuthorities: [fp.authorityDomain],
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
      loggerCallback: (r, t, e) => {
        if (!e)
          switch (r) {
            case st.Error:
              console.error(t);
              return;
            case st.Info:
              console.info(t);
              return;
            case st.Verbose:
              console.debug(t);
              return;
            case st.Warning:
              console.warn(t);
              return;
            default:
              return;
          }
      }
    }
  }
};
class wk {
  constructor(t = {}) {
    hr(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    hr(this, "securityData", null);
    hr(this, "securityWorker");
    hr(this, "abortControllers", /* @__PURE__ */ new Map());
    hr(this, "customFetch", (...t) => fetch(...t));
    hr(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    hr(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    hr(this, "contentFormatters", {
      "application/json": (t) => t !== null && (typeof t == "object" || typeof t == "string") ? JSON.stringify(t) : t,
      "text/plain": (t) => t !== null && typeof t != "string" ? JSON.stringify(t) : t,
      "multipart/form-data": (t) => Object.keys(t || {}).reduce((e, n) => {
        const o = t[n];
        return e.append(
          n,
          o instanceof Blob ? o : typeof o == "object" && o !== null ? JSON.stringify(o) : `${o}`
        ), e;
      }, new FormData()),
      "application/x-www-form-urlencoded": (t) => this.toQueryString(t)
    });
    hr(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const n = this.abortControllers.get(t);
        return n ? n.signal : void 0;
      }
      const e = new AbortController();
      return this.abortControllers.set(t, e), e.signal;
    });
    hr(this, "abortRequest", (t) => {
      const e = this.abortControllers.get(t);
      e && (e.abort(), this.abortControllers.delete(t));
    });
    hr(this, "request", async ({
      body: t,
      secure: e,
      path: n,
      type: o,
      query: a,
      format: c,
      baseUrl: l,
      cancelToken: u,
      ...h
    }) => {
      const f = (typeof e == "boolean" ? e : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, g = this.mergeRequestParams(h, f), m = a && this.toQueryString(a), v = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], C = c || g.format;
      return this.customFetch(`${l || this.baseUrl || ""}${n}${m ? `?${m}` : ""}`, {
        ...g,
        headers: {
          ...g.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (u ? this.createAbortSignal(u) : g.signal) || null,
        body: typeof t > "u" || t === null ? null : v(t)
      }).then(async (b) => {
        const _ = b;
        _.data = null, _.error = null;
        const A = C ? await b[C]().then((I) => (_.ok ? _.data = I : _.error = I, _)).catch((I) => (_.error = I, _)) : _;
        if (u && this.abortControllers.delete(u), !b.ok)
          throw A;
        return A;
      });
    });
    Object.assign(this, t);
  }
  encodeQueryParam(t, e) {
    return `${encodeURIComponent(t)}=${encodeURIComponent(typeof e == "number" ? e : `${e}`)}`;
  }
  addQueryParam(t, e) {
    return this.encodeQueryParam(e, t[e]);
  }
  addArrayQueryParam(t, e) {
    return t[e].map((o) => this.encodeQueryParam(e, o)).join("&");
  }
  toQueryString(t) {
    const e = t || {};
    return Object.keys(e).filter((o) => typeof e[o] < "u").map((o) => Array.isArray(e[o]) ? this.addArrayQueryParam(e, o) : this.addQueryParam(e, o)).join("&");
  }
  addQueryParams(t) {
    const e = this.toQueryString(t);
    return e ? `?${e}` : "";
  }
  mergeRequestParams(t, e) {
    return {
      ...this.baseApiParams,
      ...t,
      ...e || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...t.headers || {},
        ...e && e.headers || {}
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
 * <p>API to access the buildingSMART Data Dictionary.</p><p>For manually uploading import files, please go to <a href="https://manage.bsdd.buildingsmart.org">bSDD Management portal</a>. Version history can be found at <a href="https://github.com/buildingSMART/bSDD/blob/master/API%20version%20history.md">Version history</a>.</p><p>If you have any questions or need further assistance, feel free to send us an e-mail</p> <p>In case you want to try out secured APIs via this swagger portal, you need to enter client ID <span style="white-space: nowrap;">b222e220-1f71-4962-9184-05e0481a390d</span>. If you create your own tool
 *   that needs to access secured APIs, please contact us via e-mail.</p>
 */
class bk extends wk {
  constructor() {
    super(...arguments);
    hr(this, "api", {
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
      classV1List: (e, n = {}) => this.request({
        path: "/api/Class/v1",
        method: "GET",
        query: e,
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
      dictionaryV1List: (e, n = {}) => this.request({
        path: "/api/Dictionary/v1",
        method: "GET",
        query: e,
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
      dictionaryV1ClassesList: (e, n = {}) => this.request({
        path: "/api/Dictionary/v1/Classes",
        method: "GET",
        query: e,
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
      dictionaryV1PropertiesList: (e, n = {}) => this.request({
        path: "/api/Dictionary/v1/Properties",
        method: "GET",
        query: e,
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
      dictionaryDownloadSketchupV1Create: (e, n = {}) => this.request({
        path: "/api/DictionaryDownload/sketchup/v1",
        method: "POST",
        query: e,
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
      uploadImportFileV1Create: (e, n = {}) => this.request({
        path: "/api/UploadImportFile/v1",
        method: "POST",
        body: e,
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
      dictionaryV1Update: (e, n, o, a, c = {}) => this.request({
        path: `/api/Dictionary/v1/${e}/${n}/${o}`,
        method: "PUT",
        body: a,
        secure: !0,
        type: "application/json",
        ...c
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
      dictionaryV1Delete: (e, n, o, a = {}) => this.request({
        path: `/api/Dictionary/v1/${e}/${n}/${o}`,
        method: "DELETE",
        secure: !0,
        ...a
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
      dictionaryV1Delete2: (e, n, o = {}) => this.request({
        path: `/api/Dictionary/v1/${e}/${n}`,
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
      propertyV4List: (e, n = {}) => this.request({
        path: "/api/Property/v4",
        method: "GET",
        query: e,
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
      propertyValueV2List: (e, n = {}) => this.request({
        path: "/api/PropertyValue/v2",
        method: "GET",
        query: e,
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
      textSearchV1List: (e, n = {}) => this.request({
        path: "/api/TextSearch/v1",
        method: "GET",
        query: e,
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
      searchInDictionaryV1List: (e, n = {}) => this.request({
        path: "/api/SearchInDictionary/v1",
        method: "GET",
        query: e,
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
      classSearchV1List: (e, n = {}) => this.request({
        path: "/api/Class/Search/v1",
        method: "GET",
        query: e,
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
      unitV1List: (e = {}) => this.request({
        path: "/api/Unit/v1",
        method: "GET",
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name ReferenceDocumentV1List
       * @summary Get list of all ReferenceDocuments
       * @request GET:/api/ReferenceDocument/v1
       */
      referenceDocumentV1List: (e = {}) => this.request({
        path: "/api/ReferenceDocument/v1",
        method: "GET",
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name LanguageV1List
       * @summary Get list of available Languages
       * @request GET:/api/Language/v1
       */
      languageV1List: (e = {}) => this.request({
        path: "/api/Language/v1",
        method: "GET",
        format: "json",
        ...e
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name CountryV1List
       * @summary Get list of all Countries
       * @request GET:/api/Country/v1
       */
      countryV1List: (e = {}) => this.request({
        path: "/api/Country/v1",
        method: "GET",
        format: "json",
        ...e
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
      textSearchListOpenV6List: (e, n = {}) => this.request({
        path: "/api/TextSearchListOpen/v6",
        method: "GET",
        query: e,
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
      textSearchListOpenV5List: (e, n = {}) => this.request({
        path: "/api/TextSearchListOpen/v5",
        method: "GET",
        query: e,
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
      searchListV2List: (e, n = {}) => this.request({
        path: "/api/SearchList/v2",
        method: "GET",
        query: e,
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
      searchListOpenV2List: (e, n = {}) => this.request({
        path: "/api/SearchListOpen/v2",
        method: "GET",
        query: e,
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
      requestExportFilePreviewCreate: (e, n = {}) => this.request({
        path: "/api/RequestExportFile/preview",
        method: "POST",
        query: e,
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
      propertyV3List: (e, n = {}) => this.request({
        path: "/api/Property/v3",
        method: "GET",
        query: e,
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
      propertyV2List: (e, n = {}) => this.request({
        path: "/api/Property/v2",
        method: "GET",
        query: e,
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
      propertyValueV1List: (e, n = {}) => this.request({
        path: "/api/PropertyValue/v1",
        method: "GET",
        query: e,
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
      materialV2List: (e, n = {}) => this.request({
        path: "/api/Material/v2",
        method: "GET",
        query: e,
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
      materialV1List: (e, n = {}) => this.request({
        path: "/api/Material/v1",
        method: "GET",
        query: e,
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
      materialSearchOpenPreviewList: (e, n = {}) => this.request({
        path: "/api/Material/SearchOpen/preview",
        method: "GET",
        query: e,
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
      domainV3List: (e, n = {}) => this.request({
        path: "/api/Domain/v3",
        method: "GET",
        query: e,
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
      domainV3ClassificationsList: (e, n = {}) => this.request({
        path: "/api/Domain/v3/Classifications",
        method: "GET",
        query: e,
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
      domainV3Update: (e, n, o, a, c = {}) => this.request({
        path: `/api/Domain/v3/${e}/${n}/${o}`,
        method: "PUT",
        body: a,
        secure: !0,
        type: "application/json",
        ...c
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
      domainV3Delete: (e, n, o, a = {}) => this.request({
        path: `/api/Domain/v3/${e}/${n}/${o}`,
        method: "DELETE",
        secure: !0,
        ...a
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
      domainV3Delete2: (e, n, o = {}) => this.request({
        path: `/api/Domain/v3/${e}/${n}`,
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
      domainV2List: (e, n = {}) => this.request({
        path: "/api/Domain/v2",
        method: "GET",
        query: e,
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
      domainV2ClassificationsList: (e, n = {}) => this.request({
        path: "/api/Domain/v2/Classifications",
        method: "GET",
        query: e,
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
      classificationV4List: (e, n = {}) => this.request({
        path: "/api/Classification/v4",
        method: "GET",
        query: e,
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
      classificationV3List: (e, n = {}) => this.request({
        path: "/api/Classification/v3",
        method: "GET",
        query: e,
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
      classificationSearchOpenV1List: (e, n = {}) => this.request({
        path: "/api/ClassificationSearchOpen/v1",
        method: "GET",
        query: e,
        format: "json",
        ...n
      })
    });
  }
}
class pp extends bk {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const gp = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
};
function _k(r) {
  return {
    type: "IfcClassification",
    source: r == null ? void 0 : r.organizationCodeOwner,
    edition: (r == null ? void 0 : r.version) || void 0,
    editionDate: (r == null ? void 0 : r.releaseDate) || void 0,
    name: r == null ? void 0 : r.name,
    location: r == null ? void 0 : r.uri
    // specification: bsddDictionary?.uri,
  };
}
function Sk({ callback: r, domains: t, classifications: e, propertySetMap: n, ifcEntity: o }) {
  const { t: a } = Ul();
  function c(f) {
    if (f in t) {
      const g = t[f];
      if (g)
        return _k(g);
    }
    return null;
  }
  function l(f) {
    if (!f || !f.dictionaryUri || f.dictionaryUri.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))
      return null;
    const g = {
      type: "IfcClassificationReference",
      name: f.name
    };
    if (f.uri && (g.location = f.uri), f.code && (g.identification = f.code), f.dictionaryUri) {
      const m = c(f.dictionaryUri);
      m && (g.referencedSource = m);
    }
    return g;
  }
  function u() {
    const f = o || {};
    e.length && (f.hasAssociations = e.map((m) => l(m)).filter(Boolean));
    const g = Object.values(n);
    return g.length && (f.isDefinedBy = g), f;
  }
  const h = () => {
    r(u());
  };
  return /* @__PURE__ */ Te.jsx(Vi, { color: "gray", fullWidth: !0, onClick: h, variant: "filled", children: a("Save") });
}
var ds = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ds.exports;
(function(r, t) {
  (function() {
    var e, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", h = 500, f = "__lodash_placeholder__", g = 1, m = 2, v = 4, C = 1, b = 2, _ = 1, A = 2, I = 4, T = 8, N = 16, x = 32, D = 64, W = 128, z = 256, se = 512, ie = 30, we = "...", ne = 800, de = 16, ce = 1, ve = 2, j = 3, te = 1 / 0, Z = 9007199254740991, Pe = 17976931348623157e292, Qe = 0 / 0, ot = 4294967295, ut = ot - 1, Gr = ot >>> 1, rn = [
      ["ary", W],
      ["bind", _],
      ["bindKey", A],
      ["curry", T],
      ["curryRight", N],
      ["flip", se],
      ["partial", x],
      ["partialRight", D],
      ["rearg", z]
    ], Yt = "[object Arguments]", or = "[object Array]", nn = "[object AsyncFunction]", ir = "[object Boolean]", Mr = "[object Date]", on = "[object DOMException]", qt = "[object Error]", vr = "[object Function]", je = "[object GeneratorFunction]", Nt = "[object Map]", Ot = "[object Number]", Sn = "[object Null]", mt = "[object Object]", Mt = "[object Promise]", Gn = "[object Proxy]", xr = "[object RegExp]", St = "[object Set]", tt = "[object String]", zr = "[object Symbol]", sm = "[object Undefined]", Zo = "[object WeakMap]", cm = "[object WeakSet]", ei = "[object ArrayBuffer]", go = "[object DataView]", Ns = "[object Float32Array]", Os = "[object Float64Array]", Ms = "[object Int8Array]", xs = "[object Int16Array]", Ls = "[object Int32Array]", Ds = "[object Uint8Array]", Us = "[object Uint8ClampedArray]", Hs = "[object Uint16Array]", Fs = "[object Uint32Array]", lm = /\b__p \+= '';/g, um = /\b(__p \+=) '' \+/g, dm = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Mu = /&(?:amp|lt|gt|quot|#39);/g, xu = /[&<>"']/g, hm = RegExp(Mu.source), fm = RegExp(xu.source), pm = /<%-([\s\S]+?)%>/g, gm = /<%([\s\S]+?)%>/g, Lu = /<%=([\s\S]+?)%>/g, mm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vm = /^\w*$/, ym = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bs = /[\\^$.*+?()[\]{}|]/g, Cm = RegExp(Bs.source), Ks = /^\s+/, Em = /\s/, wm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, bm = /\{\n\/\* \[wrapped with (.+)\] \*/, _m = /,? & /, Sm = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Tm = /[()=,{}\[\]\/\s]/, Im = /\\(\\)?/g, Am = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Du = /\w*$/, Rm = /^[-+]0x[0-9a-f]+$/i, km = /^0b[01]+$/i, Pm = /^\[object .+?Constructor\]$/, Nm = /^0o[0-7]+$/i, Om = /^(?:0|[1-9]\d*)$/, Mm = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yi = /($^)/, xm = /['\n\r\u2028\u2029\\]/g, ji = "\\ud800-\\udfff", Lm = "\\u0300-\\u036f", Dm = "\\ufe20-\\ufe2f", Um = "\\u20d0-\\u20ff", Uu = Lm + Dm + Um, Hu = "\\u2700-\\u27bf", Fu = "a-z\\xdf-\\xf6\\xf8-\\xff", Hm = "\\xac\\xb1\\xd7\\xf7", Fm = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Bm = "\\u2000-\\u206f", Km = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ku = "\\ufe0e\\ufe0f", qu = Hm + Fm + Bm + Km, qs = "['’]", qm = "[" + ji + "]", $u = "[" + qu + "]", Qi = "[" + Uu + "]", Gu = "\\d+", $m = "[" + Hu + "]", zu = "[" + Fu + "]", Wu = "[^" + ji + qu + Gu + Hu + Fu + Bu + "]", $s = "\\ud83c[\\udffb-\\udfff]", Gm = "(?:" + Qi + "|" + $s + ")", Vu = "[^" + ji + "]", Gs = "(?:\\ud83c[\\udde6-\\uddff]){2}", zs = "[\\ud800-\\udbff][\\udc00-\\udfff]", mo = "[" + Bu + "]", Yu = "\\u200d", ju = "(?:" + zu + "|" + Wu + ")", zm = "(?:" + mo + "|" + Wu + ")", Qu = "(?:" + qs + "(?:d|ll|m|re|s|t|ve))?", Ju = "(?:" + qs + "(?:D|LL|M|RE|S|T|VE))?", Xu = Gm + "?", Zu = "[" + Ku + "]?", Wm = "(?:" + Yu + "(?:" + [Vu, Gs, zs].join("|") + ")" + Zu + Xu + ")*", Vm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ym = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ed = Zu + Xu + Wm, jm = "(?:" + [$m, Gs, zs].join("|") + ")" + ed, Qm = "(?:" + [Vu + Qi + "?", Qi, Gs, zs, qm].join("|") + ")", Jm = RegExp(qs, "g"), Xm = RegExp(Qi, "g"), Ws = RegExp($s + "(?=" + $s + ")|" + Qm + ed, "g"), Zm = RegExp([
      mo + "?" + zu + "+" + Qu + "(?=" + [$u, mo, "$"].join("|") + ")",
      zm + "+" + Ju + "(?=" + [$u, mo + ju, "$"].join("|") + ")",
      mo + "?" + ju + "+" + Qu,
      mo + "+" + Ju,
      Ym,
      Vm,
      Gu,
      jm
    ].join("|"), "g"), ev = RegExp("[" + Yu + ji + Uu + Ku + "]"), tv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rv = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], nv = -1, rt = {};
    rt[Ns] = rt[Os] = rt[Ms] = rt[xs] = rt[Ls] = rt[Ds] = rt[Us] = rt[Hs] = rt[Fs] = !0, rt[Yt] = rt[or] = rt[ei] = rt[ir] = rt[go] = rt[Mr] = rt[qt] = rt[vr] = rt[Nt] = rt[Ot] = rt[mt] = rt[xr] = rt[St] = rt[tt] = rt[Zo] = !1;
    var Xe = {};
    Xe[Yt] = Xe[or] = Xe[ei] = Xe[go] = Xe[ir] = Xe[Mr] = Xe[Ns] = Xe[Os] = Xe[Ms] = Xe[xs] = Xe[Ls] = Xe[Nt] = Xe[Ot] = Xe[mt] = Xe[xr] = Xe[St] = Xe[tt] = Xe[zr] = Xe[Ds] = Xe[Us] = Xe[Hs] = Xe[Fs] = !0, Xe[qt] = Xe[vr] = Xe[Zo] = !1;
    var ov = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, iv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, av = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, sv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, cv = parseFloat, lv = parseInt, td = typeof mi == "object" && mi && mi.Object === Object && mi, uv = typeof self == "object" && self && self.Object === Object && self, Tt = td || uv || Function("return this")(), Vs = t && !t.nodeType && t, zn = Vs && !0 && r && !r.nodeType && r, rd = zn && zn.exports === Vs, Ys = rd && td.process, yr = function() {
      try {
        var O = zn && zn.require && zn.require("util").types;
        return O || Ys && Ys.binding && Ys.binding("util");
      } catch {
      }
    }(), nd = yr && yr.isArrayBuffer, od = yr && yr.isDate, id = yr && yr.isMap, ad = yr && yr.isRegExp, sd = yr && yr.isSet, cd = yr && yr.isTypedArray;
    function ar(O, H, L) {
      switch (L.length) {
        case 0:
          return O.call(H);
        case 1:
          return O.call(H, L[0]);
        case 2:
          return O.call(H, L[0], L[1]);
        case 3:
          return O.call(H, L[0], L[1], L[2]);
      }
      return O.apply(H, L);
    }
    function dv(O, H, L, oe) {
      for (var Ie = -1, qe = O == null ? 0 : O.length; ++Ie < qe; ) {
        var vt = O[Ie];
        H(oe, vt, L(vt), O);
      }
      return oe;
    }
    function Cr(O, H) {
      for (var L = -1, oe = O == null ? 0 : O.length; ++L < oe && H(O[L], L, O) !== !1; )
        ;
      return O;
    }
    function hv(O, H) {
      for (var L = O == null ? 0 : O.length; L-- && H(O[L], L, O) !== !1; )
        ;
      return O;
    }
    function ld(O, H) {
      for (var L = -1, oe = O == null ? 0 : O.length; ++L < oe; )
        if (!H(O[L], L, O))
          return !1;
      return !0;
    }
    function Tn(O, H) {
      for (var L = -1, oe = O == null ? 0 : O.length, Ie = 0, qe = []; ++L < oe; ) {
        var vt = O[L];
        H(vt, L, O) && (qe[Ie++] = vt);
      }
      return qe;
    }
    function Ji(O, H) {
      var L = O == null ? 0 : O.length;
      return !!L && vo(O, H, 0) > -1;
    }
    function js(O, H, L) {
      for (var oe = -1, Ie = O == null ? 0 : O.length; ++oe < Ie; )
        if (L(H, O[oe]))
          return !0;
      return !1;
    }
    function nt(O, H) {
      for (var L = -1, oe = O == null ? 0 : O.length, Ie = Array(oe); ++L < oe; )
        Ie[L] = H(O[L], L, O);
      return Ie;
    }
    function In(O, H) {
      for (var L = -1, oe = H.length, Ie = O.length; ++L < oe; )
        O[Ie + L] = H[L];
      return O;
    }
    function Qs(O, H, L, oe) {
      var Ie = -1, qe = O == null ? 0 : O.length;
      for (oe && qe && (L = O[++Ie]); ++Ie < qe; )
        L = H(L, O[Ie], Ie, O);
      return L;
    }
    function fv(O, H, L, oe) {
      var Ie = O == null ? 0 : O.length;
      for (oe && Ie && (L = O[--Ie]); Ie--; )
        L = H(L, O[Ie], Ie, O);
      return L;
    }
    function Js(O, H) {
      for (var L = -1, oe = O == null ? 0 : O.length; ++L < oe; )
        if (H(O[L], L, O))
          return !0;
      return !1;
    }
    var pv = Xs("length");
    function gv(O) {
      return O.split("");
    }
    function mv(O) {
      return O.match(Sm) || [];
    }
    function ud(O, H, L) {
      var oe;
      return L(O, function(Ie, qe, vt) {
        if (H(Ie, qe, vt))
          return oe = qe, !1;
      }), oe;
    }
    function Xi(O, H, L, oe) {
      for (var Ie = O.length, qe = L + (oe ? 1 : -1); oe ? qe-- : ++qe < Ie; )
        if (H(O[qe], qe, O))
          return qe;
      return -1;
    }
    function vo(O, H, L) {
      return H === H ? Rv(O, H, L) : Xi(O, dd, L);
    }
    function vv(O, H, L, oe) {
      for (var Ie = L - 1, qe = O.length; ++Ie < qe; )
        if (oe(O[Ie], H))
          return Ie;
      return -1;
    }
    function dd(O) {
      return O !== O;
    }
    function hd(O, H) {
      var L = O == null ? 0 : O.length;
      return L ? ec(O, H) / L : Qe;
    }
    function Xs(O) {
      return function(H) {
        return H == null ? e : H[O];
      };
    }
    function Zs(O) {
      return function(H) {
        return O == null ? e : O[H];
      };
    }
    function fd(O, H, L, oe, Ie) {
      return Ie(O, function(qe, vt, Je) {
        L = oe ? (oe = !1, qe) : H(L, qe, vt, Je);
      }), L;
    }
    function yv(O, H) {
      var L = O.length;
      for (O.sort(H); L--; )
        O[L] = O[L].value;
      return O;
    }
    function ec(O, H) {
      for (var L, oe = -1, Ie = O.length; ++oe < Ie; ) {
        var qe = H(O[oe]);
        qe !== e && (L = L === e ? qe : L + qe);
      }
      return L;
    }
    function tc(O, H) {
      for (var L = -1, oe = Array(O); ++L < O; )
        oe[L] = H(L);
      return oe;
    }
    function Cv(O, H) {
      return nt(H, function(L) {
        return [L, O[L]];
      });
    }
    function pd(O) {
      return O && O.slice(0, yd(O) + 1).replace(Ks, "");
    }
    function sr(O) {
      return function(H) {
        return O(H);
      };
    }
    function rc(O, H) {
      return nt(H, function(L) {
        return O[L];
      });
    }
    function ti(O, H) {
      return O.has(H);
    }
    function gd(O, H) {
      for (var L = -1, oe = O.length; ++L < oe && vo(H, O[L], 0) > -1; )
        ;
      return L;
    }
    function md(O, H) {
      for (var L = O.length; L-- && vo(H, O[L], 0) > -1; )
        ;
      return L;
    }
    function Ev(O, H) {
      for (var L = O.length, oe = 0; L--; )
        O[L] === H && ++oe;
      return oe;
    }
    var wv = Zs(ov), bv = Zs(iv);
    function _v(O) {
      return "\\" + sv[O];
    }
    function Sv(O, H) {
      return O == null ? e : O[H];
    }
    function yo(O) {
      return ev.test(O);
    }
    function Tv(O) {
      return tv.test(O);
    }
    function Iv(O) {
      for (var H, L = []; !(H = O.next()).done; )
        L.push(H.value);
      return L;
    }
    function nc(O) {
      var H = -1, L = Array(O.size);
      return O.forEach(function(oe, Ie) {
        L[++H] = [Ie, oe];
      }), L;
    }
    function vd(O, H) {
      return function(L) {
        return O(H(L));
      };
    }
    function An(O, H) {
      for (var L = -1, oe = O.length, Ie = 0, qe = []; ++L < oe; ) {
        var vt = O[L];
        (vt === H || vt === f) && (O[L] = f, qe[Ie++] = L);
      }
      return qe;
    }
    function Zi(O) {
      var H = -1, L = Array(O.size);
      return O.forEach(function(oe) {
        L[++H] = oe;
      }), L;
    }
    function Av(O) {
      var H = -1, L = Array(O.size);
      return O.forEach(function(oe) {
        L[++H] = [oe, oe];
      }), L;
    }
    function Rv(O, H, L) {
      for (var oe = L - 1, Ie = O.length; ++oe < Ie; )
        if (O[oe] === H)
          return oe;
      return -1;
    }
    function kv(O, H, L) {
      for (var oe = L + 1; oe--; )
        if (O[oe] === H)
          return oe;
      return oe;
    }
    function Co(O) {
      return yo(O) ? Nv(O) : pv(O);
    }
    function Lr(O) {
      return yo(O) ? Ov(O) : gv(O);
    }
    function yd(O) {
      for (var H = O.length; H-- && Em.test(O.charAt(H)); )
        ;
      return H;
    }
    var Pv = Zs(av);
    function Nv(O) {
      for (var H = Ws.lastIndex = 0; Ws.test(O); )
        ++H;
      return H;
    }
    function Ov(O) {
      return O.match(Ws) || [];
    }
    function Mv(O) {
      return O.match(Zm) || [];
    }
    var xv = function O(H) {
      H = H == null ? Tt : Eo.defaults(Tt.Object(), H, Eo.pick(Tt, rv));
      var L = H.Array, oe = H.Date, Ie = H.Error, qe = H.Function, vt = H.Math, Je = H.Object, oc = H.RegExp, Lv = H.String, Er = H.TypeError, ea = L.prototype, Dv = qe.prototype, wo = Je.prototype, ta = H["__core-js_shared__"], ra = Dv.toString, We = wo.hasOwnProperty, Uv = 0, Cd = function() {
        var i = /[^.]+$/.exec(ta && ta.keys && ta.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), na = wo.toString, Hv = ra.call(Je), Fv = Tt._, Bv = oc(
        "^" + ra.call(We).replace(Bs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), oa = rd ? H.Buffer : e, Rn = H.Symbol, ia = H.Uint8Array, Ed = oa ? oa.allocUnsafe : e, aa = vd(Je.getPrototypeOf, Je), wd = Je.create, bd = wo.propertyIsEnumerable, sa = ea.splice, _d = Rn ? Rn.isConcatSpreadable : e, ri = Rn ? Rn.iterator : e, Wn = Rn ? Rn.toStringTag : e, ca = function() {
        try {
          var i = Jn(Je, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), Kv = H.clearTimeout !== Tt.clearTimeout && H.clearTimeout, qv = oe && oe.now !== Tt.Date.now && oe.now, $v = H.setTimeout !== Tt.setTimeout && H.setTimeout, la = vt.ceil, ua = vt.floor, ic = Je.getOwnPropertySymbols, Gv = oa ? oa.isBuffer : e, Sd = H.isFinite, zv = ea.join, Wv = vd(Je.keys, Je), yt = vt.max, xt = vt.min, Vv = oe.now, Yv = H.parseInt, Td = vt.random, jv = ea.reverse, ac = Jn(H, "DataView"), ni = Jn(H, "Map"), sc = Jn(H, "Promise"), bo = Jn(H, "Set"), oi = Jn(H, "WeakMap"), ii = Jn(Je, "create"), da = oi && new oi(), _o = {}, Qv = Xn(ac), Jv = Xn(ni), Xv = Xn(sc), Zv = Xn(bo), ey = Xn(oi), ha = Rn ? Rn.prototype : e, ai = ha ? ha.valueOf : e, Id = ha ? ha.toString : e;
      function E(i) {
        if (at(i) && !Re(i) && !(i instanceof Le)) {
          if (i instanceof wr)
            return i;
          if (We.call(i, "__wrapped__"))
            return Ah(i);
        }
        return new wr(i);
      }
      var So = function() {
        function i() {
        }
        return function(s) {
          if (!it(s))
            return {};
          if (wd)
            return wd(s);
          i.prototype = s;
          var d = new i();
          return i.prototype = e, d;
        };
      }();
      function fa() {
      }
      function wr(i, s) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = e;
      }
      E.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: pm,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: gm,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Lu,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: E
        }
      }, E.prototype = fa.prototype, E.prototype.constructor = E, wr.prototype = So(fa.prototype), wr.prototype.constructor = wr;
      function Le(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function ty() {
        var i = new Le(this.__wrapped__);
        return i.__actions__ = jt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = jt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = jt(this.__views__), i;
      }
      function ry() {
        if (this.__filtered__) {
          var i = new Le(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function ny() {
        var i = this.__wrapped__.value(), s = this.__dir__, d = Re(i), p = s < 0, y = d ? i.length : 0, w = gC(0, y, this.__views__), S = w.start, R = w.end, M = R - S, F = p ? R : S - 1, B = this.__iteratees__, G = B.length, J = 0, he = xt(M, this.__takeCount__);
        if (!d || !p && y == M && he == M)
          return Qd(i, this.__actions__);
        var ye = [];
        e:
          for (; M-- && J < he; ) {
            F += s;
            for (var Oe = -1, Ce = i[F]; ++Oe < G; ) {
              var xe = B[Oe], De = xe.iteratee, ur = xe.type, zt = De(Ce);
              if (ur == ve)
                Ce = zt;
              else if (!zt) {
                if (ur == ce)
                  continue e;
                break e;
              }
            }
            ye[J++] = Ce;
          }
        return ye;
      }
      Le.prototype = So(fa.prototype), Le.prototype.constructor = Le;
      function Vn(i) {
        var s = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++s < d; ) {
          var p = i[s];
          this.set(p[0], p[1]);
        }
      }
      function oy() {
        this.__data__ = ii ? ii(null) : {}, this.size = 0;
      }
      function iy(i) {
        var s = this.has(i) && delete this.__data__[i];
        return this.size -= s ? 1 : 0, s;
      }
      function ay(i) {
        var s = this.__data__;
        if (ii) {
          var d = s[i];
          return d === u ? e : d;
        }
        return We.call(s, i) ? s[i] : e;
      }
      function sy(i) {
        var s = this.__data__;
        return ii ? s[i] !== e : We.call(s, i);
      }
      function cy(i, s) {
        var d = this.__data__;
        return this.size += this.has(i) ? 0 : 1, d[i] = ii && s === e ? u : s, this;
      }
      Vn.prototype.clear = oy, Vn.prototype.delete = iy, Vn.prototype.get = ay, Vn.prototype.has = sy, Vn.prototype.set = cy;
      function an(i) {
        var s = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++s < d; ) {
          var p = i[s];
          this.set(p[0], p[1]);
        }
      }
      function ly() {
        this.__data__ = [], this.size = 0;
      }
      function uy(i) {
        var s = this.__data__, d = pa(s, i);
        if (d < 0)
          return !1;
        var p = s.length - 1;
        return d == p ? s.pop() : sa.call(s, d, 1), --this.size, !0;
      }
      function dy(i) {
        var s = this.__data__, d = pa(s, i);
        return d < 0 ? e : s[d][1];
      }
      function hy(i) {
        return pa(this.__data__, i) > -1;
      }
      function fy(i, s) {
        var d = this.__data__, p = pa(d, i);
        return p < 0 ? (++this.size, d.push([i, s])) : d[p][1] = s, this;
      }
      an.prototype.clear = ly, an.prototype.delete = uy, an.prototype.get = dy, an.prototype.has = hy, an.prototype.set = fy;
      function sn(i) {
        var s = -1, d = i == null ? 0 : i.length;
        for (this.clear(); ++s < d; ) {
          var p = i[s];
          this.set(p[0], p[1]);
        }
      }
      function py() {
        this.size = 0, this.__data__ = {
          hash: new Vn(),
          map: new (ni || an)(),
          string: new Vn()
        };
      }
      function gy(i) {
        var s = Ia(this, i).delete(i);
        return this.size -= s ? 1 : 0, s;
      }
      function my(i) {
        return Ia(this, i).get(i);
      }
      function vy(i) {
        return Ia(this, i).has(i);
      }
      function yy(i, s) {
        var d = Ia(this, i), p = d.size;
        return d.set(i, s), this.size += d.size == p ? 0 : 1, this;
      }
      sn.prototype.clear = py, sn.prototype.delete = gy, sn.prototype.get = my, sn.prototype.has = vy, sn.prototype.set = yy;
      function Yn(i) {
        var s = -1, d = i == null ? 0 : i.length;
        for (this.__data__ = new sn(); ++s < d; )
          this.add(i[s]);
      }
      function Cy(i) {
        return this.__data__.set(i, u), this;
      }
      function Ey(i) {
        return this.__data__.has(i);
      }
      Yn.prototype.add = Yn.prototype.push = Cy, Yn.prototype.has = Ey;
      function Dr(i) {
        var s = this.__data__ = new an(i);
        this.size = s.size;
      }
      function wy() {
        this.__data__ = new an(), this.size = 0;
      }
      function by(i) {
        var s = this.__data__, d = s.delete(i);
        return this.size = s.size, d;
      }
      function _y(i) {
        return this.__data__.get(i);
      }
      function Sy(i) {
        return this.__data__.has(i);
      }
      function Ty(i, s) {
        var d = this.__data__;
        if (d instanceof an) {
          var p = d.__data__;
          if (!ni || p.length < o - 1)
            return p.push([i, s]), this.size = ++d.size, this;
          d = this.__data__ = new sn(p);
        }
        return d.set(i, s), this.size = d.size, this;
      }
      Dr.prototype.clear = wy, Dr.prototype.delete = by, Dr.prototype.get = _y, Dr.prototype.has = Sy, Dr.prototype.set = Ty;
      function Ad(i, s) {
        var d = Re(i), p = !d && Zn(i), y = !d && !p && Mn(i), w = !d && !p && !y && Ro(i), S = d || p || y || w, R = S ? tc(i.length, Lv) : [], M = R.length;
        for (var F in i)
          (s || We.call(i, F)) && !(S && // Safari 9 has enumerable `arguments.length` in strict mode.
          (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          y && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
          dn(F, M))) && R.push(F);
        return R;
      }
      function Rd(i) {
        var s = i.length;
        return s ? i[yc(0, s - 1)] : e;
      }
      function Iy(i, s) {
        return Aa(jt(i), jn(s, 0, i.length));
      }
      function Ay(i) {
        return Aa(jt(i));
      }
      function cc(i, s, d) {
        (d !== e && !Ur(i[s], d) || d === e && !(s in i)) && cn(i, s, d);
      }
      function si(i, s, d) {
        var p = i[s];
        (!(We.call(i, s) && Ur(p, d)) || d === e && !(s in i)) && cn(i, s, d);
      }
      function pa(i, s) {
        for (var d = i.length; d--; )
          if (Ur(i[d][0], s))
            return d;
        return -1;
      }
      function Ry(i, s, d, p) {
        return kn(i, function(y, w, S) {
          s(p, y, d(y), S);
        }), p;
      }
      function kd(i, s) {
        return i && Vr(s, bt(s), i);
      }
      function ky(i, s) {
        return i && Vr(s, Jt(s), i);
      }
      function cn(i, s, d) {
        s == "__proto__" && ca ? ca(i, s, {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        }) : i[s] = d;
      }
      function lc(i, s) {
        for (var d = -1, p = s.length, y = L(p), w = i == null; ++d < p; )
          y[d] = w ? e : $c(i, s[d]);
        return y;
      }
      function jn(i, s, d) {
        return i === i && (d !== e && (i = i <= d ? i : d), s !== e && (i = i >= s ? i : s)), i;
      }
      function br(i, s, d, p, y, w) {
        var S, R = s & g, M = s & m, F = s & v;
        if (d && (S = y ? d(i, p, y, w) : d(i)), S !== e)
          return S;
        if (!it(i))
          return i;
        var B = Re(i);
        if (B) {
          if (S = vC(i), !R)
            return jt(i, S);
        } else {
          var G = Lt(i), J = G == vr || G == je;
          if (Mn(i))
            return Zd(i, R);
          if (G == mt || G == Yt || J && !y) {
            if (S = M || J ? {} : yh(i), !R)
              return M ? aC(i, ky(S, i)) : iC(i, kd(S, i));
          } else {
            if (!Xe[G])
              return y ? i : {};
            S = yC(i, G, R);
          }
        }
        w || (w = new Dr());
        var he = w.get(i);
        if (he)
          return he;
        w.set(i, S), Vh(i) ? i.forEach(function(Ce) {
          S.add(br(Ce, s, d, Ce, i, w));
        }) : zh(i) && i.forEach(function(Ce, xe) {
          S.set(xe, br(Ce, s, d, xe, i, w));
        });
        var ye = F ? M ? kc : Rc : M ? Jt : bt, Oe = B ? e : ye(i);
        return Cr(Oe || i, function(Ce, xe) {
          Oe && (xe = Ce, Ce = i[xe]), si(S, xe, br(Ce, s, d, xe, i, w));
        }), S;
      }
      function Py(i) {
        var s = bt(i);
        return function(d) {
          return Pd(d, i, s);
        };
      }
      function Pd(i, s, d) {
        var p = d.length;
        if (i == null)
          return !p;
        for (i = Je(i); p--; ) {
          var y = d[p], w = s[y], S = i[y];
          if (S === e && !(y in i) || !w(S))
            return !1;
        }
        return !0;
      }
      function Nd(i, s, d) {
        if (typeof i != "function")
          throw new Er(c);
        return pi(function() {
          i.apply(e, d);
        }, s);
      }
      function ci(i, s, d, p) {
        var y = -1, w = Ji, S = !0, R = i.length, M = [], F = s.length;
        if (!R)
          return M;
        d && (s = nt(s, sr(d))), p ? (w = js, S = !1) : s.length >= o && (w = ti, S = !1, s = new Yn(s));
        e:
          for (; ++y < R; ) {
            var B = i[y], G = d == null ? B : d(B);
            if (B = p || B !== 0 ? B : 0, S && G === G) {
              for (var J = F; J--; )
                if (s[J] === G)
                  continue e;
              M.push(B);
            } else
              w(s, G, p) || M.push(B);
          }
        return M;
      }
      var kn = oh(Wr), Od = oh(dc, !0);
      function Ny(i, s) {
        var d = !0;
        return kn(i, function(p, y, w) {
          return d = !!s(p, y, w), d;
        }), d;
      }
      function ga(i, s, d) {
        for (var p = -1, y = i.length; ++p < y; ) {
          var w = i[p], S = s(w);
          if (S != null && (R === e ? S === S && !lr(S) : d(S, R)))
            var R = S, M = w;
        }
        return M;
      }
      function Oy(i, s, d, p) {
        var y = i.length;
        for (d = Ne(d), d < 0 && (d = -d > y ? 0 : y + d), p = p === e || p > y ? y : Ne(p), p < 0 && (p += y), p = d > p ? 0 : jh(p); d < p; )
          i[d++] = s;
        return i;
      }
      function Md(i, s) {
        var d = [];
        return kn(i, function(p, y, w) {
          s(p, y, w) && d.push(p);
        }), d;
      }
      function It(i, s, d, p, y) {
        var w = -1, S = i.length;
        for (d || (d = EC), y || (y = []); ++w < S; ) {
          var R = i[w];
          s > 0 && d(R) ? s > 1 ? It(R, s - 1, d, p, y) : In(y, R) : p || (y[y.length] = R);
        }
        return y;
      }
      var uc = ih(), xd = ih(!0);
      function Wr(i, s) {
        return i && uc(i, s, bt);
      }
      function dc(i, s) {
        return i && xd(i, s, bt);
      }
      function ma(i, s) {
        return Tn(s, function(d) {
          return hn(i[d]);
        });
      }
      function Qn(i, s) {
        s = Nn(s, i);
        for (var d = 0, p = s.length; i != null && d < p; )
          i = i[Yr(s[d++])];
        return d && d == p ? i : e;
      }
      function Ld(i, s, d) {
        var p = s(i);
        return Re(i) ? p : In(p, d(i));
      }
      function $t(i) {
        return i == null ? i === e ? sm : Sn : Wn && Wn in Je(i) ? pC(i) : AC(i);
      }
      function hc(i, s) {
        return i > s;
      }
      function My(i, s) {
        return i != null && We.call(i, s);
      }
      function xy(i, s) {
        return i != null && s in Je(i);
      }
      function Ly(i, s, d) {
        return i >= xt(s, d) && i < yt(s, d);
      }
      function fc(i, s, d) {
        for (var p = d ? js : Ji, y = i[0].length, w = i.length, S = w, R = L(w), M = 1 / 0, F = []; S--; ) {
          var B = i[S];
          S && s && (B = nt(B, sr(s))), M = xt(B.length, M), R[S] = !d && (s || y >= 120 && B.length >= 120) ? new Yn(S && B) : e;
        }
        B = i[0];
        var G = -1, J = R[0];
        e:
          for (; ++G < y && F.length < M; ) {
            var he = B[G], ye = s ? s(he) : he;
            if (he = d || he !== 0 ? he : 0, !(J ? ti(J, ye) : p(F, ye, d))) {
              for (S = w; --S; ) {
                var Oe = R[S];
                if (!(Oe ? ti(Oe, ye) : p(i[S], ye, d)))
                  continue e;
              }
              J && J.push(ye), F.push(he);
            }
          }
        return F;
      }
      function Dy(i, s, d, p) {
        return Wr(i, function(y, w, S) {
          s(p, d(y), w, S);
        }), p;
      }
      function li(i, s, d) {
        s = Nn(s, i), i = bh(i, s);
        var p = i == null ? i : i[Yr(Sr(s))];
        return p == null ? e : ar(p, i, d);
      }
      function Dd(i) {
        return at(i) && $t(i) == Yt;
      }
      function Uy(i) {
        return at(i) && $t(i) == ei;
      }
      function Hy(i) {
        return at(i) && $t(i) == Mr;
      }
      function ui(i, s, d, p, y) {
        return i === s ? !0 : i == null || s == null || !at(i) && !at(s) ? i !== i && s !== s : Fy(i, s, d, p, ui, y);
      }
      function Fy(i, s, d, p, y, w) {
        var S = Re(i), R = Re(s), M = S ? or : Lt(i), F = R ? or : Lt(s);
        M = M == Yt ? mt : M, F = F == Yt ? mt : F;
        var B = M == mt, G = F == mt, J = M == F;
        if (J && Mn(i)) {
          if (!Mn(s))
            return !1;
          S = !0, B = !1;
        }
        if (J && !B)
          return w || (w = new Dr()), S || Ro(i) ? gh(i, s, d, p, y, w) : hC(i, s, M, d, p, y, w);
        if (!(d & C)) {
          var he = B && We.call(i, "__wrapped__"), ye = G && We.call(s, "__wrapped__");
          if (he || ye) {
            var Oe = he ? i.value() : i, Ce = ye ? s.value() : s;
            return w || (w = new Dr()), y(Oe, Ce, d, p, w);
          }
        }
        return J ? (w || (w = new Dr()), fC(i, s, d, p, y, w)) : !1;
      }
      function By(i) {
        return at(i) && Lt(i) == Nt;
      }
      function pc(i, s, d, p) {
        var y = d.length, w = y, S = !p;
        if (i == null)
          return !w;
        for (i = Je(i); y--; ) {
          var R = d[y];
          if (S && R[2] ? R[1] !== i[R[0]] : !(R[0] in i))
            return !1;
        }
        for (; ++y < w; ) {
          R = d[y];
          var M = R[0], F = i[M], B = R[1];
          if (S && R[2]) {
            if (F === e && !(M in i))
              return !1;
          } else {
            var G = new Dr();
            if (p)
              var J = p(F, B, M, i, s, G);
            if (!(J === e ? ui(B, F, C | b, p, G) : J))
              return !1;
          }
        }
        return !0;
      }
      function Ud(i) {
        if (!it(i) || bC(i))
          return !1;
        var s = hn(i) ? Bv : Pm;
        return s.test(Xn(i));
      }
      function Ky(i) {
        return at(i) && $t(i) == xr;
      }
      function qy(i) {
        return at(i) && Lt(i) == St;
      }
      function $y(i) {
        return at(i) && Ma(i.length) && !!rt[$t(i)];
      }
      function Hd(i) {
        return typeof i == "function" ? i : i == null ? Xt : typeof i == "object" ? Re(i) ? Kd(i[0], i[1]) : Bd(i) : sf(i);
      }
      function gc(i) {
        if (!fi(i))
          return Wv(i);
        var s = [];
        for (var d in Je(i))
          We.call(i, d) && d != "constructor" && s.push(d);
        return s;
      }
      function Gy(i) {
        if (!it(i))
          return IC(i);
        var s = fi(i), d = [];
        for (var p in i)
          p == "constructor" && (s || !We.call(i, p)) || d.push(p);
        return d;
      }
      function mc(i, s) {
        return i < s;
      }
      function Fd(i, s) {
        var d = -1, p = Qt(i) ? L(i.length) : [];
        return kn(i, function(y, w, S) {
          p[++d] = s(y, w, S);
        }), p;
      }
      function Bd(i) {
        var s = Nc(i);
        return s.length == 1 && s[0][2] ? Eh(s[0][0], s[0][1]) : function(d) {
          return d === i || pc(d, i, s);
        };
      }
      function Kd(i, s) {
        return Mc(i) && Ch(s) ? Eh(Yr(i), s) : function(d) {
          var p = $c(d, i);
          return p === e && p === s ? Gc(d, i) : ui(s, p, C | b);
        };
      }
      function va(i, s, d, p, y) {
        i !== s && uc(s, function(w, S) {
          if (y || (y = new Dr()), it(w))
            zy(i, s, S, d, va, p, y);
          else {
            var R = p ? p(Lc(i, S), w, S + "", i, s, y) : e;
            R === e && (R = w), cc(i, S, R);
          }
        }, Jt);
      }
      function zy(i, s, d, p, y, w, S) {
        var R = Lc(i, d), M = Lc(s, d), F = S.get(M);
        if (F) {
          cc(i, d, F);
          return;
        }
        var B = w ? w(R, M, d + "", i, s, S) : e, G = B === e;
        if (G) {
          var J = Re(M), he = !J && Mn(M), ye = !J && !he && Ro(M);
          B = M, J || he || ye ? Re(R) ? B = R : dt(R) ? B = jt(R) : he ? (G = !1, B = Zd(M, !0)) : ye ? (G = !1, B = eh(M, !0)) : B = [] : gi(M) || Zn(M) ? (B = R, Zn(R) ? B = Qh(R) : (!it(R) || hn(R)) && (B = yh(M))) : G = !1;
        }
        G && (S.set(M, B), y(B, M, p, w, S), S.delete(M)), cc(i, d, B);
      }
      function qd(i, s) {
        var d = i.length;
        if (d)
          return s += s < 0 ? d : 0, dn(s, d) ? i[s] : e;
      }
      function $d(i, s, d) {
        s.length ? s = nt(s, function(w) {
          return Re(w) ? function(S) {
            return Qn(S, w.length === 1 ? w[0] : w);
          } : w;
        }) : s = [Xt];
        var p = -1;
        s = nt(s, sr(ge()));
        var y = Fd(i, function(w, S, R) {
          var M = nt(s, function(F) {
            return F(w);
          });
          return { criteria: M, index: ++p, value: w };
        });
        return yv(y, function(w, S) {
          return oC(w, S, d);
        });
      }
      function Wy(i, s) {
        return Gd(i, s, function(d, p) {
          return Gc(i, p);
        });
      }
      function Gd(i, s, d) {
        for (var p = -1, y = s.length, w = {}; ++p < y; ) {
          var S = s[p], R = Qn(i, S);
          d(R, S) && di(w, Nn(S, i), R);
        }
        return w;
      }
      function Vy(i) {
        return function(s) {
          return Qn(s, i);
        };
      }
      function vc(i, s, d, p) {
        var y = p ? vv : vo, w = -1, S = s.length, R = i;
        for (i === s && (s = jt(s)), d && (R = nt(i, sr(d))); ++w < S; )
          for (var M = 0, F = s[w], B = d ? d(F) : F; (M = y(R, B, M, p)) > -1; )
            R !== i && sa.call(R, M, 1), sa.call(i, M, 1);
        return i;
      }
      function zd(i, s) {
        for (var d = i ? s.length : 0, p = d - 1; d--; ) {
          var y = s[d];
          if (d == p || y !== w) {
            var w = y;
            dn(y) ? sa.call(i, y, 1) : wc(i, y);
          }
        }
        return i;
      }
      function yc(i, s) {
        return i + ua(Td() * (s - i + 1));
      }
      function Yy(i, s, d, p) {
        for (var y = -1, w = yt(la((s - i) / (d || 1)), 0), S = L(w); w--; )
          S[p ? w : ++y] = i, i += d;
        return S;
      }
      function Cc(i, s) {
        var d = "";
        if (!i || s < 1 || s > Z)
          return d;
        do
          s % 2 && (d += i), s = ua(s / 2), s && (i += i);
        while (s);
        return d;
      }
      function Me(i, s) {
        return Dc(wh(i, s, Xt), i + "");
      }
      function jy(i) {
        return Rd(ko(i));
      }
      function Qy(i, s) {
        var d = ko(i);
        return Aa(d, jn(s, 0, d.length));
      }
      function di(i, s, d, p) {
        if (!it(i))
          return i;
        s = Nn(s, i);
        for (var y = -1, w = s.length, S = w - 1, R = i; R != null && ++y < w; ) {
          var M = Yr(s[y]), F = d;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return i;
          if (y != S) {
            var B = R[M];
            F = p ? p(B, M, R) : e, F === e && (F = it(B) ? B : dn(s[y + 1]) ? [] : {});
          }
          si(R, M, F), R = R[M];
        }
        return i;
      }
      var Wd = da ? function(i, s) {
        return da.set(i, s), i;
      } : Xt, Jy = ca ? function(i, s) {
        return ca(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Wc(s),
          writable: !0
        });
      } : Xt;
      function Xy(i) {
        return Aa(ko(i));
      }
      function _r(i, s, d) {
        var p = -1, y = i.length;
        s < 0 && (s = -s > y ? 0 : y + s), d = d > y ? y : d, d < 0 && (d += y), y = s > d ? 0 : d - s >>> 0, s >>>= 0;
        for (var w = L(y); ++p < y; )
          w[p] = i[p + s];
        return w;
      }
      function Zy(i, s) {
        var d;
        return kn(i, function(p, y, w) {
          return d = s(p, y, w), !d;
        }), !!d;
      }
      function ya(i, s, d) {
        var p = 0, y = i == null ? p : i.length;
        if (typeof s == "number" && s === s && y <= Gr) {
          for (; p < y; ) {
            var w = p + y >>> 1, S = i[w];
            S !== null && !lr(S) && (d ? S <= s : S < s) ? p = w + 1 : y = w;
          }
          return y;
        }
        return Ec(i, s, Xt, d);
      }
      function Ec(i, s, d, p) {
        var y = 0, w = i == null ? 0 : i.length;
        if (w === 0)
          return 0;
        s = d(s);
        for (var S = s !== s, R = s === null, M = lr(s), F = s === e; y < w; ) {
          var B = ua((y + w) / 2), G = d(i[B]), J = G !== e, he = G === null, ye = G === G, Oe = lr(G);
          if (S)
            var Ce = p || ye;
          else
            F ? Ce = ye && (p || J) : R ? Ce = ye && J && (p || !he) : M ? Ce = ye && J && !he && (p || !Oe) : he || Oe ? Ce = !1 : Ce = p ? G <= s : G < s;
          Ce ? y = B + 1 : w = B;
        }
        return xt(w, ut);
      }
      function Vd(i, s) {
        for (var d = -1, p = i.length, y = 0, w = []; ++d < p; ) {
          var S = i[d], R = s ? s(S) : S;
          if (!d || !Ur(R, M)) {
            var M = R;
            w[y++] = S === 0 ? 0 : S;
          }
        }
        return w;
      }
      function Yd(i) {
        return typeof i == "number" ? i : lr(i) ? Qe : +i;
      }
      function cr(i) {
        if (typeof i == "string")
          return i;
        if (Re(i))
          return nt(i, cr) + "";
        if (lr(i))
          return Id ? Id.call(i) : "";
        var s = i + "";
        return s == "0" && 1 / i == -te ? "-0" : s;
      }
      function Pn(i, s, d) {
        var p = -1, y = Ji, w = i.length, S = !0, R = [], M = R;
        if (d)
          S = !1, y = js;
        else if (w >= o) {
          var F = s ? null : uC(i);
          if (F)
            return Zi(F);
          S = !1, y = ti, M = new Yn();
        } else
          M = s ? [] : R;
        e:
          for (; ++p < w; ) {
            var B = i[p], G = s ? s(B) : B;
            if (B = d || B !== 0 ? B : 0, S && G === G) {
              for (var J = M.length; J--; )
                if (M[J] === G)
                  continue e;
              s && M.push(G), R.push(B);
            } else
              y(M, G, d) || (M !== R && M.push(G), R.push(B));
          }
        return R;
      }
      function wc(i, s) {
        return s = Nn(s, i), i = bh(i, s), i == null || delete i[Yr(Sr(s))];
      }
      function jd(i, s, d, p) {
        return di(i, s, d(Qn(i, s)), p);
      }
      function Ca(i, s, d, p) {
        for (var y = i.length, w = p ? y : -1; (p ? w-- : ++w < y) && s(i[w], w, i); )
          ;
        return d ? _r(i, p ? 0 : w, p ? w + 1 : y) : _r(i, p ? w + 1 : 0, p ? y : w);
      }
      function Qd(i, s) {
        var d = i;
        return d instanceof Le && (d = d.value()), Qs(s, function(p, y) {
          return y.func.apply(y.thisArg, In([p], y.args));
        }, d);
      }
      function bc(i, s, d) {
        var p = i.length;
        if (p < 2)
          return p ? Pn(i[0]) : [];
        for (var y = -1, w = L(p); ++y < p; )
          for (var S = i[y], R = -1; ++R < p; )
            R != y && (w[y] = ci(w[y] || S, i[R], s, d));
        return Pn(It(w, 1), s, d);
      }
      function Jd(i, s, d) {
        for (var p = -1, y = i.length, w = s.length, S = {}; ++p < y; ) {
          var R = p < w ? s[p] : e;
          d(S, i[p], R);
        }
        return S;
      }
      function _c(i) {
        return dt(i) ? i : [];
      }
      function Sc(i) {
        return typeof i == "function" ? i : Xt;
      }
      function Nn(i, s) {
        return Re(i) ? i : Mc(i, s) ? [i] : Ih(Ge(i));
      }
      var eC = Me;
      function On(i, s, d) {
        var p = i.length;
        return d = d === e ? p : d, !s && d >= p ? i : _r(i, s, d);
      }
      var Xd = Kv || function(i) {
        return Tt.clearTimeout(i);
      };
      function Zd(i, s) {
        if (s)
          return i.slice();
        var d = i.length, p = Ed ? Ed(d) : new i.constructor(d);
        return i.copy(p), p;
      }
      function Tc(i) {
        var s = new i.constructor(i.byteLength);
        return new ia(s).set(new ia(i)), s;
      }
      function tC(i, s) {
        var d = s ? Tc(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.byteLength);
      }
      function rC(i) {
        var s = new i.constructor(i.source, Du.exec(i));
        return s.lastIndex = i.lastIndex, s;
      }
      function nC(i) {
        return ai ? Je(ai.call(i)) : {};
      }
      function eh(i, s) {
        var d = s ? Tc(i.buffer) : i.buffer;
        return new i.constructor(d, i.byteOffset, i.length);
      }
      function th(i, s) {
        if (i !== s) {
          var d = i !== e, p = i === null, y = i === i, w = lr(i), S = s !== e, R = s === null, M = s === s, F = lr(s);
          if (!R && !F && !w && i > s || w && S && M && !R && !F || p && S && M || !d && M || !y)
            return 1;
          if (!p && !w && !F && i < s || F && d && y && !p && !w || R && d && y || !S && y || !M)
            return -1;
        }
        return 0;
      }
      function oC(i, s, d) {
        for (var p = -1, y = i.criteria, w = s.criteria, S = y.length, R = d.length; ++p < S; ) {
          var M = th(y[p], w[p]);
          if (M) {
            if (p >= R)
              return M;
            var F = d[p];
            return M * (F == "desc" ? -1 : 1);
          }
        }
        return i.index - s.index;
      }
      function rh(i, s, d, p) {
        for (var y = -1, w = i.length, S = d.length, R = -1, M = s.length, F = yt(w - S, 0), B = L(M + F), G = !p; ++R < M; )
          B[R] = s[R];
        for (; ++y < S; )
          (G || y < w) && (B[d[y]] = i[y]);
        for (; F--; )
          B[R++] = i[y++];
        return B;
      }
      function nh(i, s, d, p) {
        for (var y = -1, w = i.length, S = -1, R = d.length, M = -1, F = s.length, B = yt(w - R, 0), G = L(B + F), J = !p; ++y < B; )
          G[y] = i[y];
        for (var he = y; ++M < F; )
          G[he + M] = s[M];
        for (; ++S < R; )
          (J || y < w) && (G[he + d[S]] = i[y++]);
        return G;
      }
      function jt(i, s) {
        var d = -1, p = i.length;
        for (s || (s = L(p)); ++d < p; )
          s[d] = i[d];
        return s;
      }
      function Vr(i, s, d, p) {
        var y = !d;
        d || (d = {});
        for (var w = -1, S = s.length; ++w < S; ) {
          var R = s[w], M = p ? p(d[R], i[R], R, d, i) : e;
          M === e && (M = i[R]), y ? cn(d, R, M) : si(d, R, M);
        }
        return d;
      }
      function iC(i, s) {
        return Vr(i, Oc(i), s);
      }
      function aC(i, s) {
        return Vr(i, mh(i), s);
      }
      function Ea(i, s) {
        return function(d, p) {
          var y = Re(d) ? dv : Ry, w = s ? s() : {};
          return y(d, i, ge(p, 2), w);
        };
      }
      function To(i) {
        return Me(function(s, d) {
          var p = -1, y = d.length, w = y > 1 ? d[y - 1] : e, S = y > 2 ? d[2] : e;
          for (w = i.length > 3 && typeof w == "function" ? (y--, w) : e, S && Gt(d[0], d[1], S) && (w = y < 3 ? e : w, y = 1), s = Je(s); ++p < y; ) {
            var R = d[p];
            R && i(s, R, p, w);
          }
          return s;
        });
      }
      function oh(i, s) {
        return function(d, p) {
          if (d == null)
            return d;
          if (!Qt(d))
            return i(d, p);
          for (var y = d.length, w = s ? y : -1, S = Je(d); (s ? w-- : ++w < y) && p(S[w], w, S) !== !1; )
            ;
          return d;
        };
      }
      function ih(i) {
        return function(s, d, p) {
          for (var y = -1, w = Je(s), S = p(s), R = S.length; R--; ) {
            var M = S[i ? R : ++y];
            if (d(w[M], M, w) === !1)
              break;
          }
          return s;
        };
      }
      function sC(i, s, d) {
        var p = s & _, y = hi(i);
        function w() {
          var S = this && this !== Tt && this instanceof w ? y : i;
          return S.apply(p ? d : this, arguments);
        }
        return w;
      }
      function ah(i) {
        return function(s) {
          s = Ge(s);
          var d = yo(s) ? Lr(s) : e, p = d ? d[0] : s.charAt(0), y = d ? On(d, 1).join("") : s.slice(1);
          return p[i]() + y;
        };
      }
      function Io(i) {
        return function(s) {
          return Qs(of(nf(s).replace(Jm, "")), i, "");
        };
      }
      function hi(i) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new i();
            case 1:
              return new i(s[0]);
            case 2:
              return new i(s[0], s[1]);
            case 3:
              return new i(s[0], s[1], s[2]);
            case 4:
              return new i(s[0], s[1], s[2], s[3]);
            case 5:
              return new i(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new i(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new i(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var d = So(i.prototype), p = i.apply(d, s);
          return it(p) ? p : d;
        };
      }
      function cC(i, s, d) {
        var p = hi(i);
        function y() {
          for (var w = arguments.length, S = L(w), R = w, M = Ao(y); R--; )
            S[R] = arguments[R];
          var F = w < 3 && S[0] !== M && S[w - 1] !== M ? [] : An(S, M);
          if (w -= F.length, w < d)
            return dh(
              i,
              s,
              wa,
              y.placeholder,
              e,
              S,
              F,
              e,
              e,
              d - w
            );
          var B = this && this !== Tt && this instanceof y ? p : i;
          return ar(B, this, S);
        }
        return y;
      }
      function sh(i) {
        return function(s, d, p) {
          var y = Je(s);
          if (!Qt(s)) {
            var w = ge(d, 3);
            s = bt(s), d = function(R) {
              return w(y[R], R, y);
            };
          }
          var S = i(s, d, p);
          return S > -1 ? y[w ? s[S] : S] : e;
        };
      }
      function ch(i) {
        return un(function(s) {
          var d = s.length, p = d, y = wr.prototype.thru;
          for (i && s.reverse(); p--; ) {
            var w = s[p];
            if (typeof w != "function")
              throw new Er(c);
            if (y && !S && Ta(w) == "wrapper")
              var S = new wr([], !0);
          }
          for (p = S ? p : d; ++p < d; ) {
            w = s[p];
            var R = Ta(w), M = R == "wrapper" ? Pc(w) : e;
            M && xc(M[0]) && M[1] == (W | T | x | z) && !M[4].length && M[9] == 1 ? S = S[Ta(M[0])].apply(S, M[3]) : S = w.length == 1 && xc(w) ? S[R]() : S.thru(w);
          }
          return function() {
            var F = arguments, B = F[0];
            if (S && F.length == 1 && Re(B))
              return S.plant(B).value();
            for (var G = 0, J = d ? s[G].apply(this, F) : B; ++G < d; )
              J = s[G].call(this, J);
            return J;
          };
        });
      }
      function wa(i, s, d, p, y, w, S, R, M, F) {
        var B = s & W, G = s & _, J = s & A, he = s & (T | N), ye = s & se, Oe = J ? e : hi(i);
        function Ce() {
          for (var xe = arguments.length, De = L(xe), ur = xe; ur--; )
            De[ur] = arguments[ur];
          if (he)
            var zt = Ao(Ce), dr = Ev(De, zt);
          if (p && (De = rh(De, p, y, he)), w && (De = nh(De, w, S, he)), xe -= dr, he && xe < F) {
            var ht = An(De, zt);
            return dh(
              i,
              s,
              wa,
              Ce.placeholder,
              d,
              De,
              ht,
              R,
              M,
              F - xe
            );
          }
          var Hr = G ? d : this, pn = J ? Hr[i] : i;
          return xe = De.length, R ? De = RC(De, R) : ye && xe > 1 && De.reverse(), B && M < xe && (De.length = M), this && this !== Tt && this instanceof Ce && (pn = Oe || hi(pn)), pn.apply(Hr, De);
        }
        return Ce;
      }
      function lh(i, s) {
        return function(d, p) {
          return Dy(d, i, s(p), {});
        };
      }
      function ba(i, s) {
        return function(d, p) {
          var y;
          if (d === e && p === e)
            return s;
          if (d !== e && (y = d), p !== e) {
            if (y === e)
              return p;
            typeof d == "string" || typeof p == "string" ? (d = cr(d), p = cr(p)) : (d = Yd(d), p = Yd(p)), y = i(d, p);
          }
          return y;
        };
      }
      function Ic(i) {
        return un(function(s) {
          return s = nt(s, sr(ge())), Me(function(d) {
            var p = this;
            return i(s, function(y) {
              return ar(y, p, d);
            });
          });
        });
      }
      function _a(i, s) {
        s = s === e ? " " : cr(s);
        var d = s.length;
        if (d < 2)
          return d ? Cc(s, i) : s;
        var p = Cc(s, la(i / Co(s)));
        return yo(s) ? On(Lr(p), 0, i).join("") : p.slice(0, i);
      }
      function lC(i, s, d, p) {
        var y = s & _, w = hi(i);
        function S() {
          for (var R = -1, M = arguments.length, F = -1, B = p.length, G = L(B + M), J = this && this !== Tt && this instanceof S ? w : i; ++F < B; )
            G[F] = p[F];
          for (; M--; )
            G[F++] = arguments[++R];
          return ar(J, y ? d : this, G);
        }
        return S;
      }
      function uh(i) {
        return function(s, d, p) {
          return p && typeof p != "number" && Gt(s, d, p) && (d = p = e), s = fn(s), d === e ? (d = s, s = 0) : d = fn(d), p = p === e ? s < d ? 1 : -1 : fn(p), Yy(s, d, p, i);
        };
      }
      function Sa(i) {
        return function(s, d) {
          return typeof s == "string" && typeof d == "string" || (s = Tr(s), d = Tr(d)), i(s, d);
        };
      }
      function dh(i, s, d, p, y, w, S, R, M, F) {
        var B = s & T, G = B ? S : e, J = B ? e : S, he = B ? w : e, ye = B ? e : w;
        s |= B ? x : D, s &= ~(B ? D : x), s & I || (s &= ~(_ | A));
        var Oe = [
          i,
          s,
          y,
          he,
          G,
          ye,
          J,
          R,
          M,
          F
        ], Ce = d.apply(e, Oe);
        return xc(i) && _h(Ce, Oe), Ce.placeholder = p, Sh(Ce, i, s);
      }
      function Ac(i) {
        var s = vt[i];
        return function(d, p) {
          if (d = Tr(d), p = p == null ? 0 : xt(Ne(p), 292), p && Sd(d)) {
            var y = (Ge(d) + "e").split("e"), w = s(y[0] + "e" + (+y[1] + p));
            return y = (Ge(w) + "e").split("e"), +(y[0] + "e" + (+y[1] - p));
          }
          return s(d);
        };
      }
      var uC = bo && 1 / Zi(new bo([, -0]))[1] == te ? function(i) {
        return new bo(i);
      } : jc;
      function hh(i) {
        return function(s) {
          var d = Lt(s);
          return d == Nt ? nc(s) : d == St ? Av(s) : Cv(s, i(s));
        };
      }
      function ln(i, s, d, p, y, w, S, R) {
        var M = s & A;
        if (!M && typeof i != "function")
          throw new Er(c);
        var F = p ? p.length : 0;
        if (F || (s &= ~(x | D), p = y = e), S = S === e ? S : yt(Ne(S), 0), R = R === e ? R : Ne(R), F -= y ? y.length : 0, s & D) {
          var B = p, G = y;
          p = y = e;
        }
        var J = M ? e : Pc(i), he = [
          i,
          s,
          d,
          p,
          y,
          B,
          G,
          w,
          S,
          R
        ];
        if (J && TC(he, J), i = he[0], s = he[1], d = he[2], p = he[3], y = he[4], R = he[9] = he[9] === e ? M ? 0 : i.length : yt(he[9] - F, 0), !R && s & (T | N) && (s &= ~(T | N)), !s || s == _)
          var ye = sC(i, s, d);
        else
          s == T || s == N ? ye = cC(i, s, R) : (s == x || s == (_ | x)) && !y.length ? ye = lC(i, s, d, p) : ye = wa.apply(e, he);
        var Oe = J ? Wd : _h;
        return Sh(Oe(ye, he), i, s);
      }
      function fh(i, s, d, p) {
        return i === e || Ur(i, wo[d]) && !We.call(p, d) ? s : i;
      }
      function ph(i, s, d, p, y, w) {
        return it(i) && it(s) && (w.set(s, i), va(i, s, e, ph, w), w.delete(s)), i;
      }
      function dC(i) {
        return gi(i) ? e : i;
      }
      function gh(i, s, d, p, y, w) {
        var S = d & C, R = i.length, M = s.length;
        if (R != M && !(S && M > R))
          return !1;
        var F = w.get(i), B = w.get(s);
        if (F && B)
          return F == s && B == i;
        var G = -1, J = !0, he = d & b ? new Yn() : e;
        for (w.set(i, s), w.set(s, i); ++G < R; ) {
          var ye = i[G], Oe = s[G];
          if (p)
            var Ce = S ? p(Oe, ye, G, s, i, w) : p(ye, Oe, G, i, s, w);
          if (Ce !== e) {
            if (Ce)
              continue;
            J = !1;
            break;
          }
          if (he) {
            if (!Js(s, function(xe, De) {
              if (!ti(he, De) && (ye === xe || y(ye, xe, d, p, w)))
                return he.push(De);
            })) {
              J = !1;
              break;
            }
          } else if (!(ye === Oe || y(ye, Oe, d, p, w))) {
            J = !1;
            break;
          }
        }
        return w.delete(i), w.delete(s), J;
      }
      function hC(i, s, d, p, y, w, S) {
        switch (d) {
          case go:
            if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset)
              return !1;
            i = i.buffer, s = s.buffer;
          case ei:
            return !(i.byteLength != s.byteLength || !w(new ia(i), new ia(s)));
          case ir:
          case Mr:
          case Ot:
            return Ur(+i, +s);
          case qt:
            return i.name == s.name && i.message == s.message;
          case xr:
          case tt:
            return i == s + "";
          case Nt:
            var R = nc;
          case St:
            var M = p & C;
            if (R || (R = Zi), i.size != s.size && !M)
              return !1;
            var F = S.get(i);
            if (F)
              return F == s;
            p |= b, S.set(i, s);
            var B = gh(R(i), R(s), p, y, w, S);
            return S.delete(i), B;
          case zr:
            if (ai)
              return ai.call(i) == ai.call(s);
        }
        return !1;
      }
      function fC(i, s, d, p, y, w) {
        var S = d & C, R = Rc(i), M = R.length, F = Rc(s), B = F.length;
        if (M != B && !S)
          return !1;
        for (var G = M; G--; ) {
          var J = R[G];
          if (!(S ? J in s : We.call(s, J)))
            return !1;
        }
        var he = w.get(i), ye = w.get(s);
        if (he && ye)
          return he == s && ye == i;
        var Oe = !0;
        w.set(i, s), w.set(s, i);
        for (var Ce = S; ++G < M; ) {
          J = R[G];
          var xe = i[J], De = s[J];
          if (p)
            var ur = S ? p(De, xe, J, s, i, w) : p(xe, De, J, i, s, w);
          if (!(ur === e ? xe === De || y(xe, De, d, p, w) : ur)) {
            Oe = !1;
            break;
          }
          Ce || (Ce = J == "constructor");
        }
        if (Oe && !Ce) {
          var zt = i.constructor, dr = s.constructor;
          zt != dr && "constructor" in i && "constructor" in s && !(typeof zt == "function" && zt instanceof zt && typeof dr == "function" && dr instanceof dr) && (Oe = !1);
        }
        return w.delete(i), w.delete(s), Oe;
      }
      function un(i) {
        return Dc(wh(i, e, Ph), i + "");
      }
      function Rc(i) {
        return Ld(i, bt, Oc);
      }
      function kc(i) {
        return Ld(i, Jt, mh);
      }
      var Pc = da ? function(i) {
        return da.get(i);
      } : jc;
      function Ta(i) {
        for (var s = i.name + "", d = _o[s], p = We.call(_o, s) ? d.length : 0; p--; ) {
          var y = d[p], w = y.func;
          if (w == null || w == i)
            return y.name;
        }
        return s;
      }
      function Ao(i) {
        var s = We.call(E, "placeholder") ? E : i;
        return s.placeholder;
      }
      function ge() {
        var i = E.iteratee || Vc;
        return i = i === Vc ? Hd : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Ia(i, s) {
        var d = i.__data__;
        return wC(s) ? d[typeof s == "string" ? "string" : "hash"] : d.map;
      }
      function Nc(i) {
        for (var s = bt(i), d = s.length; d--; ) {
          var p = s[d], y = i[p];
          s[d] = [p, y, Ch(y)];
        }
        return s;
      }
      function Jn(i, s) {
        var d = Sv(i, s);
        return Ud(d) ? d : e;
      }
      function pC(i) {
        var s = We.call(i, Wn), d = i[Wn];
        try {
          i[Wn] = e;
          var p = !0;
        } catch {
        }
        var y = na.call(i);
        return p && (s ? i[Wn] = d : delete i[Wn]), y;
      }
      var Oc = ic ? function(i) {
        return i == null ? [] : (i = Je(i), Tn(ic(i), function(s) {
          return bd.call(i, s);
        }));
      } : Qc, mh = ic ? function(i) {
        for (var s = []; i; )
          In(s, Oc(i)), i = aa(i);
        return s;
      } : Qc, Lt = $t;
      (ac && Lt(new ac(new ArrayBuffer(1))) != go || ni && Lt(new ni()) != Nt || sc && Lt(sc.resolve()) != Mt || bo && Lt(new bo()) != St || oi && Lt(new oi()) != Zo) && (Lt = function(i) {
        var s = $t(i), d = s == mt ? i.constructor : e, p = d ? Xn(d) : "";
        if (p)
          switch (p) {
            case Qv:
              return go;
            case Jv:
              return Nt;
            case Xv:
              return Mt;
            case Zv:
              return St;
            case ey:
              return Zo;
          }
        return s;
      });
      function gC(i, s, d) {
        for (var p = -1, y = d.length; ++p < y; ) {
          var w = d[p], S = w.size;
          switch (w.type) {
            case "drop":
              i += S;
              break;
            case "dropRight":
              s -= S;
              break;
            case "take":
              s = xt(s, i + S);
              break;
            case "takeRight":
              i = yt(i, s - S);
              break;
          }
        }
        return { start: i, end: s };
      }
      function mC(i) {
        var s = i.match(bm);
        return s ? s[1].split(_m) : [];
      }
      function vh(i, s, d) {
        s = Nn(s, i);
        for (var p = -1, y = s.length, w = !1; ++p < y; ) {
          var S = Yr(s[p]);
          if (!(w = i != null && d(i, S)))
            break;
          i = i[S];
        }
        return w || ++p != y ? w : (y = i == null ? 0 : i.length, !!y && Ma(y) && dn(S, y) && (Re(i) || Zn(i)));
      }
      function vC(i) {
        var s = i.length, d = new i.constructor(s);
        return s && typeof i[0] == "string" && We.call(i, "index") && (d.index = i.index, d.input = i.input), d;
      }
      function yh(i) {
        return typeof i.constructor == "function" && !fi(i) ? So(aa(i)) : {};
      }
      function yC(i, s, d) {
        var p = i.constructor;
        switch (s) {
          case ei:
            return Tc(i);
          case ir:
          case Mr:
            return new p(+i);
          case go:
            return tC(i, d);
          case Ns:
          case Os:
          case Ms:
          case xs:
          case Ls:
          case Ds:
          case Us:
          case Hs:
          case Fs:
            return eh(i, d);
          case Nt:
            return new p();
          case Ot:
          case tt:
            return new p(i);
          case xr:
            return rC(i);
          case St:
            return new p();
          case zr:
            return nC(i);
        }
      }
      function CC(i, s) {
        var d = s.length;
        if (!d)
          return i;
        var p = d - 1;
        return s[p] = (d > 1 ? "& " : "") + s[p], s = s.join(d > 2 ? ", " : " "), i.replace(wm, `{
/* [wrapped with ` + s + `] */
`);
      }
      function EC(i) {
        return Re(i) || Zn(i) || !!(_d && i && i[_d]);
      }
      function dn(i, s) {
        var d = typeof i;
        return s = s ?? Z, !!s && (d == "number" || d != "symbol" && Om.test(i)) && i > -1 && i % 1 == 0 && i < s;
      }
      function Gt(i, s, d) {
        if (!it(d))
          return !1;
        var p = typeof s;
        return (p == "number" ? Qt(d) && dn(s, d.length) : p == "string" && s in d) ? Ur(d[s], i) : !1;
      }
      function Mc(i, s) {
        if (Re(i))
          return !1;
        var d = typeof i;
        return d == "number" || d == "symbol" || d == "boolean" || i == null || lr(i) ? !0 : vm.test(i) || !mm.test(i) || s != null && i in Je(s);
      }
      function wC(i) {
        var s = typeof i;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null;
      }
      function xc(i) {
        var s = Ta(i), d = E[s];
        if (typeof d != "function" || !(s in Le.prototype))
          return !1;
        if (i === d)
          return !0;
        var p = Pc(d);
        return !!p && i === p[0];
      }
      function bC(i) {
        return !!Cd && Cd in i;
      }
      var _C = ta ? hn : Jc;
      function fi(i) {
        var s = i && i.constructor, d = typeof s == "function" && s.prototype || wo;
        return i === d;
      }
      function Ch(i) {
        return i === i && !it(i);
      }
      function Eh(i, s) {
        return function(d) {
          return d == null ? !1 : d[i] === s && (s !== e || i in Je(d));
        };
      }
      function SC(i) {
        var s = Na(i, function(p) {
          return d.size === h && d.clear(), p;
        }), d = s.cache;
        return s;
      }
      function TC(i, s) {
        var d = i[1], p = s[1], y = d | p, w = y < (_ | A | W), S = p == W && d == T || p == W && d == z && i[7].length <= s[8] || p == (W | z) && s[7].length <= s[8] && d == T;
        if (!(w || S))
          return i;
        p & _ && (i[2] = s[2], y |= d & _ ? 0 : I);
        var R = s[3];
        if (R) {
          var M = i[3];
          i[3] = M ? rh(M, R, s[4]) : R, i[4] = M ? An(i[3], f) : s[4];
        }
        return R = s[5], R && (M = i[5], i[5] = M ? nh(M, R, s[6]) : R, i[6] = M ? An(i[5], f) : s[6]), R = s[7], R && (i[7] = R), p & W && (i[8] = i[8] == null ? s[8] : xt(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = y, i;
      }
      function IC(i) {
        var s = [];
        if (i != null)
          for (var d in Je(i))
            s.push(d);
        return s;
      }
      function AC(i) {
        return na.call(i);
      }
      function wh(i, s, d) {
        return s = yt(s === e ? i.length - 1 : s, 0), function() {
          for (var p = arguments, y = -1, w = yt(p.length - s, 0), S = L(w); ++y < w; )
            S[y] = p[s + y];
          y = -1;
          for (var R = L(s + 1); ++y < s; )
            R[y] = p[y];
          return R[s] = d(S), ar(i, this, R);
        };
      }
      function bh(i, s) {
        return s.length < 2 ? i : Qn(i, _r(s, 0, -1));
      }
      function RC(i, s) {
        for (var d = i.length, p = xt(s.length, d), y = jt(i); p--; ) {
          var w = s[p];
          i[p] = dn(w, d) ? y[w] : e;
        }
        return i;
      }
      function Lc(i, s) {
        if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__")
          return i[s];
      }
      var _h = Th(Wd), pi = $v || function(i, s) {
        return Tt.setTimeout(i, s);
      }, Dc = Th(Jy);
      function Sh(i, s, d) {
        var p = s + "";
        return Dc(i, CC(p, kC(mC(p), d)));
      }
      function Th(i) {
        var s = 0, d = 0;
        return function() {
          var p = Vv(), y = de - (p - d);
          if (d = p, y > 0) {
            if (++s >= ne)
              return arguments[0];
          } else
            s = 0;
          return i.apply(e, arguments);
        };
      }
      function Aa(i, s) {
        var d = -1, p = i.length, y = p - 1;
        for (s = s === e ? p : s; ++d < s; ) {
          var w = yc(d, y), S = i[w];
          i[w] = i[d], i[d] = S;
        }
        return i.length = s, i;
      }
      var Ih = SC(function(i) {
        var s = [];
        return i.charCodeAt(0) === 46 && s.push(""), i.replace(ym, function(d, p, y, w) {
          s.push(y ? w.replace(Im, "$1") : p || d);
        }), s;
      });
      function Yr(i) {
        if (typeof i == "string" || lr(i))
          return i;
        var s = i + "";
        return s == "0" && 1 / i == -te ? "-0" : s;
      }
      function Xn(i) {
        if (i != null) {
          try {
            return ra.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function kC(i, s) {
        return Cr(rn, function(d) {
          var p = "_." + d[0];
          s & d[1] && !Ji(i, p) && i.push(p);
        }), i.sort();
      }
      function Ah(i) {
        if (i instanceof Le)
          return i.clone();
        var s = new wr(i.__wrapped__, i.__chain__);
        return s.__actions__ = jt(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s;
      }
      function PC(i, s, d) {
        (d ? Gt(i, s, d) : s === e) ? s = 1 : s = yt(Ne(s), 0);
        var p = i == null ? 0 : i.length;
        if (!p || s < 1)
          return [];
        for (var y = 0, w = 0, S = L(la(p / s)); y < p; )
          S[w++] = _r(i, y, y += s);
        return S;
      }
      function NC(i) {
        for (var s = -1, d = i == null ? 0 : i.length, p = 0, y = []; ++s < d; ) {
          var w = i[s];
          w && (y[p++] = w);
        }
        return y;
      }
      function OC() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var s = L(i - 1), d = arguments[0], p = i; p--; )
          s[p - 1] = arguments[p];
        return In(Re(d) ? jt(d) : [d], It(s, 1));
      }
      var MC = Me(function(i, s) {
        return dt(i) ? ci(i, It(s, 1, dt, !0)) : [];
      }), xC = Me(function(i, s) {
        var d = Sr(s);
        return dt(d) && (d = e), dt(i) ? ci(i, It(s, 1, dt, !0), ge(d, 2)) : [];
      }), LC = Me(function(i, s) {
        var d = Sr(s);
        return dt(d) && (d = e), dt(i) ? ci(i, It(s, 1, dt, !0), e, d) : [];
      });
      function DC(i, s, d) {
        var p = i == null ? 0 : i.length;
        return p ? (s = d || s === e ? 1 : Ne(s), _r(i, s < 0 ? 0 : s, p)) : [];
      }
      function UC(i, s, d) {
        var p = i == null ? 0 : i.length;
        return p ? (s = d || s === e ? 1 : Ne(s), s = p - s, _r(i, 0, s < 0 ? 0 : s)) : [];
      }
      function HC(i, s) {
        return i && i.length ? Ca(i, ge(s, 3), !0, !0) : [];
      }
      function FC(i, s) {
        return i && i.length ? Ca(i, ge(s, 3), !0) : [];
      }
      function BC(i, s, d, p) {
        var y = i == null ? 0 : i.length;
        return y ? (d && typeof d != "number" && Gt(i, s, d) && (d = 0, p = y), Oy(i, s, d, p)) : [];
      }
      function Rh(i, s, d) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = yt(p + y, 0)), Xi(i, ge(s, 3), y);
      }
      function kh(i, s, d) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var y = p - 1;
        return d !== e && (y = Ne(d), y = d < 0 ? yt(p + y, 0) : xt(y, p - 1)), Xi(i, ge(s, 3), y, !0);
      }
      function Ph(i) {
        var s = i == null ? 0 : i.length;
        return s ? It(i, 1) : [];
      }
      function KC(i) {
        var s = i == null ? 0 : i.length;
        return s ? It(i, te) : [];
      }
      function qC(i, s) {
        var d = i == null ? 0 : i.length;
        return d ? (s = s === e ? 1 : Ne(s), It(i, s)) : [];
      }
      function $C(i) {
        for (var s = -1, d = i == null ? 0 : i.length, p = {}; ++s < d; ) {
          var y = i[s];
          p[y[0]] = y[1];
        }
        return p;
      }
      function Nh(i) {
        return i && i.length ? i[0] : e;
      }
      function GC(i, s, d) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var y = d == null ? 0 : Ne(d);
        return y < 0 && (y = yt(p + y, 0)), vo(i, s, y);
      }
      function zC(i) {
        var s = i == null ? 0 : i.length;
        return s ? _r(i, 0, -1) : [];
      }
      var WC = Me(function(i) {
        var s = nt(i, _c);
        return s.length && s[0] === i[0] ? fc(s) : [];
      }), VC = Me(function(i) {
        var s = Sr(i), d = nt(i, _c);
        return s === Sr(d) ? s = e : d.pop(), d.length && d[0] === i[0] ? fc(d, ge(s, 2)) : [];
      }), YC = Me(function(i) {
        var s = Sr(i), d = nt(i, _c);
        return s = typeof s == "function" ? s : e, s && d.pop(), d.length && d[0] === i[0] ? fc(d, e, s) : [];
      });
      function jC(i, s) {
        return i == null ? "" : zv.call(i, s);
      }
      function Sr(i) {
        var s = i == null ? 0 : i.length;
        return s ? i[s - 1] : e;
      }
      function QC(i, s, d) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var y = p;
        return d !== e && (y = Ne(d), y = y < 0 ? yt(p + y, 0) : xt(y, p - 1)), s === s ? kv(i, s, y) : Xi(i, dd, y, !0);
      }
      function JC(i, s) {
        return i && i.length ? qd(i, Ne(s)) : e;
      }
      var XC = Me(Oh);
      function Oh(i, s) {
        return i && i.length && s && s.length ? vc(i, s) : i;
      }
      function ZC(i, s, d) {
        return i && i.length && s && s.length ? vc(i, s, ge(d, 2)) : i;
      }
      function eE(i, s, d) {
        return i && i.length && s && s.length ? vc(i, s, e, d) : i;
      }
      var tE = un(function(i, s) {
        var d = i == null ? 0 : i.length, p = lc(i, s);
        return zd(i, nt(s, function(y) {
          return dn(y, d) ? +y : y;
        }).sort(th)), p;
      });
      function rE(i, s) {
        var d = [];
        if (!(i && i.length))
          return d;
        var p = -1, y = [], w = i.length;
        for (s = ge(s, 3); ++p < w; ) {
          var S = i[p];
          s(S, p, i) && (d.push(S), y.push(p));
        }
        return zd(i, y), d;
      }
      function Uc(i) {
        return i == null ? i : jv.call(i);
      }
      function nE(i, s, d) {
        var p = i == null ? 0 : i.length;
        return p ? (d && typeof d != "number" && Gt(i, s, d) ? (s = 0, d = p) : (s = s == null ? 0 : Ne(s), d = d === e ? p : Ne(d)), _r(i, s, d)) : [];
      }
      function oE(i, s) {
        return ya(i, s);
      }
      function iE(i, s, d) {
        return Ec(i, s, ge(d, 2));
      }
      function aE(i, s) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var p = ya(i, s);
          if (p < d && Ur(i[p], s))
            return p;
        }
        return -1;
      }
      function sE(i, s) {
        return ya(i, s, !0);
      }
      function cE(i, s, d) {
        return Ec(i, s, ge(d, 2), !0);
      }
      function lE(i, s) {
        var d = i == null ? 0 : i.length;
        if (d) {
          var p = ya(i, s, !0) - 1;
          if (Ur(i[p], s))
            return p;
        }
        return -1;
      }
      function uE(i) {
        return i && i.length ? Vd(i) : [];
      }
      function dE(i, s) {
        return i && i.length ? Vd(i, ge(s, 2)) : [];
      }
      function hE(i) {
        var s = i == null ? 0 : i.length;
        return s ? _r(i, 1, s) : [];
      }
      function fE(i, s, d) {
        return i && i.length ? (s = d || s === e ? 1 : Ne(s), _r(i, 0, s < 0 ? 0 : s)) : [];
      }
      function pE(i, s, d) {
        var p = i == null ? 0 : i.length;
        return p ? (s = d || s === e ? 1 : Ne(s), s = p - s, _r(i, s < 0 ? 0 : s, p)) : [];
      }
      function gE(i, s) {
        return i && i.length ? Ca(i, ge(s, 3), !1, !0) : [];
      }
      function mE(i, s) {
        return i && i.length ? Ca(i, ge(s, 3)) : [];
      }
      var vE = Me(function(i) {
        return Pn(It(i, 1, dt, !0));
      }), yE = Me(function(i) {
        var s = Sr(i);
        return dt(s) && (s = e), Pn(It(i, 1, dt, !0), ge(s, 2));
      }), CE = Me(function(i) {
        var s = Sr(i);
        return s = typeof s == "function" ? s : e, Pn(It(i, 1, dt, !0), e, s);
      });
      function EE(i) {
        return i && i.length ? Pn(i) : [];
      }
      function wE(i, s) {
        return i && i.length ? Pn(i, ge(s, 2)) : [];
      }
      function bE(i, s) {
        return s = typeof s == "function" ? s : e, i && i.length ? Pn(i, e, s) : [];
      }
      function Hc(i) {
        if (!(i && i.length))
          return [];
        var s = 0;
        return i = Tn(i, function(d) {
          if (dt(d))
            return s = yt(d.length, s), !0;
        }), tc(s, function(d) {
          return nt(i, Xs(d));
        });
      }
      function Mh(i, s) {
        if (!(i && i.length))
          return [];
        var d = Hc(i);
        return s == null ? d : nt(d, function(p) {
          return ar(s, e, p);
        });
      }
      var _E = Me(function(i, s) {
        return dt(i) ? ci(i, s) : [];
      }), SE = Me(function(i) {
        return bc(Tn(i, dt));
      }), TE = Me(function(i) {
        var s = Sr(i);
        return dt(s) && (s = e), bc(Tn(i, dt), ge(s, 2));
      }), IE = Me(function(i) {
        var s = Sr(i);
        return s = typeof s == "function" ? s : e, bc(Tn(i, dt), e, s);
      }), AE = Me(Hc);
      function RE(i, s) {
        return Jd(i || [], s || [], si);
      }
      function kE(i, s) {
        return Jd(i || [], s || [], di);
      }
      var PE = Me(function(i) {
        var s = i.length, d = s > 1 ? i[s - 1] : e;
        return d = typeof d == "function" ? (i.pop(), d) : e, Mh(i, d);
      });
      function xh(i) {
        var s = E(i);
        return s.__chain__ = !0, s;
      }
      function NE(i, s) {
        return s(i), i;
      }
      function Ra(i, s) {
        return s(i);
      }
      var OE = un(function(i) {
        var s = i.length, d = s ? i[0] : 0, p = this.__wrapped__, y = function(w) {
          return lc(w, i);
        };
        return s > 1 || this.__actions__.length || !(p instanceof Le) || !dn(d) ? this.thru(y) : (p = p.slice(d, +d + (s ? 1 : 0)), p.__actions__.push({
          func: Ra,
          args: [y],
          thisArg: e
        }), new wr(p, this.__chain__).thru(function(w) {
          return s && !w.length && w.push(e), w;
        }));
      });
      function ME() {
        return xh(this);
      }
      function xE() {
        return new wr(this.value(), this.__chain__);
      }
      function LE() {
        this.__values__ === e && (this.__values__ = Yh(this.value()));
        var i = this.__index__ >= this.__values__.length, s = i ? e : this.__values__[this.__index__++];
        return { done: i, value: s };
      }
      function DE() {
        return this;
      }
      function UE(i) {
        for (var s, d = this; d instanceof fa; ) {
          var p = Ah(d);
          p.__index__ = 0, p.__values__ = e, s ? y.__wrapped__ = p : s = p;
          var y = p;
          d = d.__wrapped__;
        }
        return y.__wrapped__ = i, s;
      }
      function HE() {
        var i = this.__wrapped__;
        if (i instanceof Le) {
          var s = i;
          return this.__actions__.length && (s = new Le(this)), s = s.reverse(), s.__actions__.push({
            func: Ra,
            args: [Uc],
            thisArg: e
          }), new wr(s, this.__chain__);
        }
        return this.thru(Uc);
      }
      function FE() {
        return Qd(this.__wrapped__, this.__actions__);
      }
      var BE = Ea(function(i, s, d) {
        We.call(i, d) ? ++i[d] : cn(i, d, 1);
      });
      function KE(i, s, d) {
        var p = Re(i) ? ld : Ny;
        return d && Gt(i, s, d) && (s = e), p(i, ge(s, 3));
      }
      function qE(i, s) {
        var d = Re(i) ? Tn : Md;
        return d(i, ge(s, 3));
      }
      var $E = sh(Rh), GE = sh(kh);
      function zE(i, s) {
        return It(ka(i, s), 1);
      }
      function WE(i, s) {
        return It(ka(i, s), te);
      }
      function VE(i, s, d) {
        return d = d === e ? 1 : Ne(d), It(ka(i, s), d);
      }
      function Lh(i, s) {
        var d = Re(i) ? Cr : kn;
        return d(i, ge(s, 3));
      }
      function Dh(i, s) {
        var d = Re(i) ? hv : Od;
        return d(i, ge(s, 3));
      }
      var YE = Ea(function(i, s, d) {
        We.call(i, d) ? i[d].push(s) : cn(i, d, [s]);
      });
      function jE(i, s, d, p) {
        i = Qt(i) ? i : ko(i), d = d && !p ? Ne(d) : 0;
        var y = i.length;
        return d < 0 && (d = yt(y + d, 0)), xa(i) ? d <= y && i.indexOf(s, d) > -1 : !!y && vo(i, s, d) > -1;
      }
      var QE = Me(function(i, s, d) {
        var p = -1, y = typeof s == "function", w = Qt(i) ? L(i.length) : [];
        return kn(i, function(S) {
          w[++p] = y ? ar(s, S, d) : li(S, s, d);
        }), w;
      }), JE = Ea(function(i, s, d) {
        cn(i, d, s);
      });
      function ka(i, s) {
        var d = Re(i) ? nt : Fd;
        return d(i, ge(s, 3));
      }
      function XE(i, s, d, p) {
        return i == null ? [] : (Re(s) || (s = s == null ? [] : [s]), d = p ? e : d, Re(d) || (d = d == null ? [] : [d]), $d(i, s, d));
      }
      var ZE = Ea(function(i, s, d) {
        i[d ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function ew(i, s, d) {
        var p = Re(i) ? Qs : fd, y = arguments.length < 3;
        return p(i, ge(s, 4), d, y, kn);
      }
      function tw(i, s, d) {
        var p = Re(i) ? fv : fd, y = arguments.length < 3;
        return p(i, ge(s, 4), d, y, Od);
      }
      function rw(i, s) {
        var d = Re(i) ? Tn : Md;
        return d(i, Oa(ge(s, 3)));
      }
      function nw(i) {
        var s = Re(i) ? Rd : jy;
        return s(i);
      }
      function ow(i, s, d) {
        (d ? Gt(i, s, d) : s === e) ? s = 1 : s = Ne(s);
        var p = Re(i) ? Iy : Qy;
        return p(i, s);
      }
      function iw(i) {
        var s = Re(i) ? Ay : Xy;
        return s(i);
      }
      function aw(i) {
        if (i == null)
          return 0;
        if (Qt(i))
          return xa(i) ? Co(i) : i.length;
        var s = Lt(i);
        return s == Nt || s == St ? i.size : gc(i).length;
      }
      function sw(i, s, d) {
        var p = Re(i) ? Js : Zy;
        return d && Gt(i, s, d) && (s = e), p(i, ge(s, 3));
      }
      var cw = Me(function(i, s) {
        if (i == null)
          return [];
        var d = s.length;
        return d > 1 && Gt(i, s[0], s[1]) ? s = [] : d > 2 && Gt(s[0], s[1], s[2]) && (s = [s[0]]), $d(i, It(s, 1), []);
      }), Pa = qv || function() {
        return Tt.Date.now();
      };
      function lw(i, s) {
        if (typeof s != "function")
          throw new Er(c);
        return i = Ne(i), function() {
          if (--i < 1)
            return s.apply(this, arguments);
        };
      }
      function Uh(i, s, d) {
        return s = d ? e : s, s = i && s == null ? i.length : s, ln(i, W, e, e, e, e, s);
      }
      function Hh(i, s) {
        var d;
        if (typeof s != "function")
          throw new Er(c);
        return i = Ne(i), function() {
          return --i > 0 && (d = s.apply(this, arguments)), i <= 1 && (s = e), d;
        };
      }
      var Fc = Me(function(i, s, d) {
        var p = _;
        if (d.length) {
          var y = An(d, Ao(Fc));
          p |= x;
        }
        return ln(i, p, s, d, y);
      }), Fh = Me(function(i, s, d) {
        var p = _ | A;
        if (d.length) {
          var y = An(d, Ao(Fh));
          p |= x;
        }
        return ln(s, p, i, d, y);
      });
      function Bh(i, s, d) {
        s = d ? e : s;
        var p = ln(i, T, e, e, e, e, e, s);
        return p.placeholder = Bh.placeholder, p;
      }
      function Kh(i, s, d) {
        s = d ? e : s;
        var p = ln(i, N, e, e, e, e, e, s);
        return p.placeholder = Kh.placeholder, p;
      }
      function qh(i, s, d) {
        var p, y, w, S, R, M, F = 0, B = !1, G = !1, J = !0;
        if (typeof i != "function")
          throw new Er(c);
        s = Tr(s) || 0, it(d) && (B = !!d.leading, G = "maxWait" in d, w = G ? yt(Tr(d.maxWait) || 0, s) : w, J = "trailing" in d ? !!d.trailing : J);
        function he(ht) {
          var Hr = p, pn = y;
          return p = y = e, F = ht, S = i.apply(pn, Hr), S;
        }
        function ye(ht) {
          return F = ht, R = pi(xe, s), B ? he(ht) : S;
        }
        function Oe(ht) {
          var Hr = ht - M, pn = ht - F, cf = s - Hr;
          return G ? xt(cf, w - pn) : cf;
        }
        function Ce(ht) {
          var Hr = ht - M, pn = ht - F;
          return M === e || Hr >= s || Hr < 0 || G && pn >= w;
        }
        function xe() {
          var ht = Pa();
          if (Ce(ht))
            return De(ht);
          R = pi(xe, Oe(ht));
        }
        function De(ht) {
          return R = e, J && p ? he(ht) : (p = y = e, S);
        }
        function ur() {
          R !== e && Xd(R), F = 0, p = M = y = R = e;
        }
        function zt() {
          return R === e ? S : De(Pa());
        }
        function dr() {
          var ht = Pa(), Hr = Ce(ht);
          if (p = arguments, y = this, M = ht, Hr) {
            if (R === e)
              return ye(M);
            if (G)
              return Xd(R), R = pi(xe, s), he(M);
          }
          return R === e && (R = pi(xe, s)), S;
        }
        return dr.cancel = ur, dr.flush = zt, dr;
      }
      var uw = Me(function(i, s) {
        return Nd(i, 1, s);
      }), dw = Me(function(i, s, d) {
        return Nd(i, Tr(s) || 0, d);
      });
      function hw(i) {
        return ln(i, se);
      }
      function Na(i, s) {
        if (typeof i != "function" || s != null && typeof s != "function")
          throw new Er(c);
        var d = function() {
          var p = arguments, y = s ? s.apply(this, p) : p[0], w = d.cache;
          if (w.has(y))
            return w.get(y);
          var S = i.apply(this, p);
          return d.cache = w.set(y, S) || w, S;
        };
        return d.cache = new (Na.Cache || sn)(), d;
      }
      Na.Cache = sn;
      function Oa(i) {
        if (typeof i != "function")
          throw new Er(c);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, s[0]);
            case 2:
              return !i.call(this, s[0], s[1]);
            case 3:
              return !i.call(this, s[0], s[1], s[2]);
          }
          return !i.apply(this, s);
        };
      }
      function fw(i) {
        return Hh(2, i);
      }
      var pw = eC(function(i, s) {
        s = s.length == 1 && Re(s[0]) ? nt(s[0], sr(ge())) : nt(It(s, 1), sr(ge()));
        var d = s.length;
        return Me(function(p) {
          for (var y = -1, w = xt(p.length, d); ++y < w; )
            p[y] = s[y].call(this, p[y]);
          return ar(i, this, p);
        });
      }), Bc = Me(function(i, s) {
        var d = An(s, Ao(Bc));
        return ln(i, x, e, s, d);
      }), $h = Me(function(i, s) {
        var d = An(s, Ao($h));
        return ln(i, D, e, s, d);
      }), gw = un(function(i, s) {
        return ln(i, z, e, e, e, s);
      });
      function mw(i, s) {
        if (typeof i != "function")
          throw new Er(c);
        return s = s === e ? s : Ne(s), Me(i, s);
      }
      function vw(i, s) {
        if (typeof i != "function")
          throw new Er(c);
        return s = s == null ? 0 : yt(Ne(s), 0), Me(function(d) {
          var p = d[s], y = On(d, 0, s);
          return p && In(y, p), ar(i, this, y);
        });
      }
      function yw(i, s, d) {
        var p = !0, y = !0;
        if (typeof i != "function")
          throw new Er(c);
        return it(d) && (p = "leading" in d ? !!d.leading : p, y = "trailing" in d ? !!d.trailing : y), qh(i, s, {
          leading: p,
          maxWait: s,
          trailing: y
        });
      }
      function Cw(i) {
        return Uh(i, 1);
      }
      function Ew(i, s) {
        return Bc(Sc(s), i);
      }
      function ww() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Re(i) ? i : [i];
      }
      function bw(i) {
        return br(i, v);
      }
      function _w(i, s) {
        return s = typeof s == "function" ? s : e, br(i, v, s);
      }
      function Sw(i) {
        return br(i, g | v);
      }
      function Tw(i, s) {
        return s = typeof s == "function" ? s : e, br(i, g | v, s);
      }
      function Iw(i, s) {
        return s == null || Pd(i, s, bt(s));
      }
      function Ur(i, s) {
        return i === s || i !== i && s !== s;
      }
      var Aw = Sa(hc), Rw = Sa(function(i, s) {
        return i >= s;
      }), Zn = Dd(function() {
        return arguments;
      }()) ? Dd : function(i) {
        return at(i) && We.call(i, "callee") && !bd.call(i, "callee");
      }, Re = L.isArray, kw = nd ? sr(nd) : Uy;
      function Qt(i) {
        return i != null && Ma(i.length) && !hn(i);
      }
      function dt(i) {
        return at(i) && Qt(i);
      }
      function Pw(i) {
        return i === !0 || i === !1 || at(i) && $t(i) == ir;
      }
      var Mn = Gv || Jc, Nw = od ? sr(od) : Hy;
      function Ow(i) {
        return at(i) && i.nodeType === 1 && !gi(i);
      }
      function Mw(i) {
        if (i == null)
          return !0;
        if (Qt(i) && (Re(i) || typeof i == "string" || typeof i.splice == "function" || Mn(i) || Ro(i) || Zn(i)))
          return !i.length;
        var s = Lt(i);
        if (s == Nt || s == St)
          return !i.size;
        if (fi(i))
          return !gc(i).length;
        for (var d in i)
          if (We.call(i, d))
            return !1;
        return !0;
      }
      function xw(i, s) {
        return ui(i, s);
      }
      function Lw(i, s, d) {
        d = typeof d == "function" ? d : e;
        var p = d ? d(i, s) : e;
        return p === e ? ui(i, s, e, d) : !!p;
      }
      function Kc(i) {
        if (!at(i))
          return !1;
        var s = $t(i);
        return s == qt || s == on || typeof i.message == "string" && typeof i.name == "string" && !gi(i);
      }
      function Dw(i) {
        return typeof i == "number" && Sd(i);
      }
      function hn(i) {
        if (!it(i))
          return !1;
        var s = $t(i);
        return s == vr || s == je || s == nn || s == Gn;
      }
      function Gh(i) {
        return typeof i == "number" && i == Ne(i);
      }
      function Ma(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Z;
      }
      function it(i) {
        var s = typeof i;
        return i != null && (s == "object" || s == "function");
      }
      function at(i) {
        return i != null && typeof i == "object";
      }
      var zh = id ? sr(id) : By;
      function Uw(i, s) {
        return i === s || pc(i, s, Nc(s));
      }
      function Hw(i, s, d) {
        return d = typeof d == "function" ? d : e, pc(i, s, Nc(s), d);
      }
      function Fw(i) {
        return Wh(i) && i != +i;
      }
      function Bw(i) {
        if (_C(i))
          throw new Ie(a);
        return Ud(i);
      }
      function Kw(i) {
        return i === null;
      }
      function qw(i) {
        return i == null;
      }
      function Wh(i) {
        return typeof i == "number" || at(i) && $t(i) == Ot;
      }
      function gi(i) {
        if (!at(i) || $t(i) != mt)
          return !1;
        var s = aa(i);
        if (s === null)
          return !0;
        var d = We.call(s, "constructor") && s.constructor;
        return typeof d == "function" && d instanceof d && ra.call(d) == Hv;
      }
      var qc = ad ? sr(ad) : Ky;
      function $w(i) {
        return Gh(i) && i >= -Z && i <= Z;
      }
      var Vh = sd ? sr(sd) : qy;
      function xa(i) {
        return typeof i == "string" || !Re(i) && at(i) && $t(i) == tt;
      }
      function lr(i) {
        return typeof i == "symbol" || at(i) && $t(i) == zr;
      }
      var Ro = cd ? sr(cd) : $y;
      function Gw(i) {
        return i === e;
      }
      function zw(i) {
        return at(i) && Lt(i) == Zo;
      }
      function Ww(i) {
        return at(i) && $t(i) == cm;
      }
      var Vw = Sa(mc), Yw = Sa(function(i, s) {
        return i <= s;
      });
      function Yh(i) {
        if (!i)
          return [];
        if (Qt(i))
          return xa(i) ? Lr(i) : jt(i);
        if (ri && i[ri])
          return Iv(i[ri]());
        var s = Lt(i), d = s == Nt ? nc : s == St ? Zi : ko;
        return d(i);
      }
      function fn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Tr(i), i === te || i === -te) {
          var s = i < 0 ? -1 : 1;
          return s * Pe;
        }
        return i === i ? i : 0;
      }
      function Ne(i) {
        var s = fn(i), d = s % 1;
        return s === s ? d ? s - d : s : 0;
      }
      function jh(i) {
        return i ? jn(Ne(i), 0, ot) : 0;
      }
      function Tr(i) {
        if (typeof i == "number")
          return i;
        if (lr(i))
          return Qe;
        if (it(i)) {
          var s = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = it(s) ? s + "" : s;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = pd(i);
        var d = km.test(i);
        return d || Nm.test(i) ? lv(i.slice(2), d ? 2 : 8) : Rm.test(i) ? Qe : +i;
      }
      function Qh(i) {
        return Vr(i, Jt(i));
      }
      function jw(i) {
        return i ? jn(Ne(i), -Z, Z) : i === 0 ? i : 0;
      }
      function Ge(i) {
        return i == null ? "" : cr(i);
      }
      var Qw = To(function(i, s) {
        if (fi(s) || Qt(s)) {
          Vr(s, bt(s), i);
          return;
        }
        for (var d in s)
          We.call(s, d) && si(i, d, s[d]);
      }), Jh = To(function(i, s) {
        Vr(s, Jt(s), i);
      }), La = To(function(i, s, d, p) {
        Vr(s, Jt(s), i, p);
      }), Jw = To(function(i, s, d, p) {
        Vr(s, bt(s), i, p);
      }), Xw = un(lc);
      function Zw(i, s) {
        var d = So(i);
        return s == null ? d : kd(d, s);
      }
      var eb = Me(function(i, s) {
        i = Je(i);
        var d = -1, p = s.length, y = p > 2 ? s[2] : e;
        for (y && Gt(s[0], s[1], y) && (p = 1); ++d < p; )
          for (var w = s[d], S = Jt(w), R = -1, M = S.length; ++R < M; ) {
            var F = S[R], B = i[F];
            (B === e || Ur(B, wo[F]) && !We.call(i, F)) && (i[F] = w[F]);
          }
        return i;
      }), tb = Me(function(i) {
        return i.push(e, ph), ar(Xh, e, i);
      });
      function rb(i, s) {
        return ud(i, ge(s, 3), Wr);
      }
      function nb(i, s) {
        return ud(i, ge(s, 3), dc);
      }
      function ob(i, s) {
        return i == null ? i : uc(i, ge(s, 3), Jt);
      }
      function ib(i, s) {
        return i == null ? i : xd(i, ge(s, 3), Jt);
      }
      function ab(i, s) {
        return i && Wr(i, ge(s, 3));
      }
      function sb(i, s) {
        return i && dc(i, ge(s, 3));
      }
      function cb(i) {
        return i == null ? [] : ma(i, bt(i));
      }
      function lb(i) {
        return i == null ? [] : ma(i, Jt(i));
      }
      function $c(i, s, d) {
        var p = i == null ? e : Qn(i, s);
        return p === e ? d : p;
      }
      function ub(i, s) {
        return i != null && vh(i, s, My);
      }
      function Gc(i, s) {
        return i != null && vh(i, s, xy);
      }
      var db = lh(function(i, s, d) {
        s != null && typeof s.toString != "function" && (s = na.call(s)), i[s] = d;
      }, Wc(Xt)), hb = lh(function(i, s, d) {
        s != null && typeof s.toString != "function" && (s = na.call(s)), We.call(i, s) ? i[s].push(d) : i[s] = [d];
      }, ge), fb = Me(li);
      function bt(i) {
        return Qt(i) ? Ad(i) : gc(i);
      }
      function Jt(i) {
        return Qt(i) ? Ad(i, !0) : Gy(i);
      }
      function pb(i, s) {
        var d = {};
        return s = ge(s, 3), Wr(i, function(p, y, w) {
          cn(d, s(p, y, w), p);
        }), d;
      }
      function gb(i, s) {
        var d = {};
        return s = ge(s, 3), Wr(i, function(p, y, w) {
          cn(d, y, s(p, y, w));
        }), d;
      }
      var mb = To(function(i, s, d) {
        va(i, s, d);
      }), Xh = To(function(i, s, d, p) {
        va(i, s, d, p);
      }), vb = un(function(i, s) {
        var d = {};
        if (i == null)
          return d;
        var p = !1;
        s = nt(s, function(w) {
          return w = Nn(w, i), p || (p = w.length > 1), w;
        }), Vr(i, kc(i), d), p && (d = br(d, g | m | v, dC));
        for (var y = s.length; y--; )
          wc(d, s[y]);
        return d;
      });
      function yb(i, s) {
        return Zh(i, Oa(ge(s)));
      }
      var Cb = un(function(i, s) {
        return i == null ? {} : Wy(i, s);
      });
      function Zh(i, s) {
        if (i == null)
          return {};
        var d = nt(kc(i), function(p) {
          return [p];
        });
        return s = ge(s), Gd(i, d, function(p, y) {
          return s(p, y[0]);
        });
      }
      function Eb(i, s, d) {
        s = Nn(s, i);
        var p = -1, y = s.length;
        for (y || (y = 1, i = e); ++p < y; ) {
          var w = i == null ? e : i[Yr(s[p])];
          w === e && (p = y, w = d), i = hn(w) ? w.call(i) : w;
        }
        return i;
      }
      function wb(i, s, d) {
        return i == null ? i : di(i, s, d);
      }
      function bb(i, s, d, p) {
        return p = typeof p == "function" ? p : e, i == null ? i : di(i, s, d, p);
      }
      var ef = hh(bt), tf = hh(Jt);
      function _b(i, s, d) {
        var p = Re(i), y = p || Mn(i) || Ro(i);
        if (s = ge(s, 4), d == null) {
          var w = i && i.constructor;
          y ? d = p ? new w() : [] : it(i) ? d = hn(w) ? So(aa(i)) : {} : d = {};
        }
        return (y ? Cr : Wr)(i, function(S, R, M) {
          return s(d, S, R, M);
        }), d;
      }
      function Sb(i, s) {
        return i == null ? !0 : wc(i, s);
      }
      function Tb(i, s, d) {
        return i == null ? i : jd(i, s, Sc(d));
      }
      function Ib(i, s, d, p) {
        return p = typeof p == "function" ? p : e, i == null ? i : jd(i, s, Sc(d), p);
      }
      function ko(i) {
        return i == null ? [] : rc(i, bt(i));
      }
      function Ab(i) {
        return i == null ? [] : rc(i, Jt(i));
      }
      function Rb(i, s, d) {
        return d === e && (d = s, s = e), d !== e && (d = Tr(d), d = d === d ? d : 0), s !== e && (s = Tr(s), s = s === s ? s : 0), jn(Tr(i), s, d);
      }
      function kb(i, s, d) {
        return s = fn(s), d === e ? (d = s, s = 0) : d = fn(d), i = Tr(i), Ly(i, s, d);
      }
      function Pb(i, s, d) {
        if (d && typeof d != "boolean" && Gt(i, s, d) && (s = d = e), d === e && (typeof s == "boolean" ? (d = s, s = e) : typeof i == "boolean" && (d = i, i = e)), i === e && s === e ? (i = 0, s = 1) : (i = fn(i), s === e ? (s = i, i = 0) : s = fn(s)), i > s) {
          var p = i;
          i = s, s = p;
        }
        if (d || i % 1 || s % 1) {
          var y = Td();
          return xt(i + y * (s - i + cv("1e-" + ((y + "").length - 1))), s);
        }
        return yc(i, s);
      }
      var Nb = Io(function(i, s, d) {
        return s = s.toLowerCase(), i + (d ? rf(s) : s);
      });
      function rf(i) {
        return zc(Ge(i).toLowerCase());
      }
      function nf(i) {
        return i = Ge(i), i && i.replace(Mm, wv).replace(Xm, "");
      }
      function Ob(i, s, d) {
        i = Ge(i), s = cr(s);
        var p = i.length;
        d = d === e ? p : jn(Ne(d), 0, p);
        var y = d;
        return d -= s.length, d >= 0 && i.slice(d, y) == s;
      }
      function Mb(i) {
        return i = Ge(i), i && fm.test(i) ? i.replace(xu, bv) : i;
      }
      function xb(i) {
        return i = Ge(i), i && Cm.test(i) ? i.replace(Bs, "\\$&") : i;
      }
      var Lb = Io(function(i, s, d) {
        return i + (d ? "-" : "") + s.toLowerCase();
      }), Db = Io(function(i, s, d) {
        return i + (d ? " " : "") + s.toLowerCase();
      }), Ub = ah("toLowerCase");
      function Hb(i, s, d) {
        i = Ge(i), s = Ne(s);
        var p = s ? Co(i) : 0;
        if (!s || p >= s)
          return i;
        var y = (s - p) / 2;
        return _a(ua(y), d) + i + _a(la(y), d);
      }
      function Fb(i, s, d) {
        i = Ge(i), s = Ne(s);
        var p = s ? Co(i) : 0;
        return s && p < s ? i + _a(s - p, d) : i;
      }
      function Bb(i, s, d) {
        i = Ge(i), s = Ne(s);
        var p = s ? Co(i) : 0;
        return s && p < s ? _a(s - p, d) + i : i;
      }
      function Kb(i, s, d) {
        return d || s == null ? s = 0 : s && (s = +s), Yv(Ge(i).replace(Ks, ""), s || 0);
      }
      function qb(i, s, d) {
        return (d ? Gt(i, s, d) : s === e) ? s = 1 : s = Ne(s), Cc(Ge(i), s);
      }
      function $b() {
        var i = arguments, s = Ge(i[0]);
        return i.length < 3 ? s : s.replace(i[1], i[2]);
      }
      var Gb = Io(function(i, s, d) {
        return i + (d ? "_" : "") + s.toLowerCase();
      });
      function zb(i, s, d) {
        return d && typeof d != "number" && Gt(i, s, d) && (s = d = e), d = d === e ? ot : d >>> 0, d ? (i = Ge(i), i && (typeof s == "string" || s != null && !qc(s)) && (s = cr(s), !s && yo(i)) ? On(Lr(i), 0, d) : i.split(s, d)) : [];
      }
      var Wb = Io(function(i, s, d) {
        return i + (d ? " " : "") + zc(s);
      });
      function Vb(i, s, d) {
        return i = Ge(i), d = d == null ? 0 : jn(Ne(d), 0, i.length), s = cr(s), i.slice(d, d + s.length) == s;
      }
      function Yb(i, s, d) {
        var p = E.templateSettings;
        d && Gt(i, s, d) && (s = e), i = Ge(i), s = La({}, s, p, fh);
        var y = La({}, s.imports, p.imports, fh), w = bt(y), S = rc(y, w), R, M, F = 0, B = s.interpolate || Yi, G = "__p += '", J = oc(
          (s.escape || Yi).source + "|" + B.source + "|" + (B === Lu ? Am : Yi).source + "|" + (s.evaluate || Yi).source + "|$",
          "g"
        ), he = "//# sourceURL=" + (We.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++nv + "]") + `
`;
        i.replace(J, function(Ce, xe, De, ur, zt, dr) {
          return De || (De = ur), G += i.slice(F, dr).replace(xm, _v), xe && (R = !0, G += `' +
__e(` + xe + `) +
'`), zt && (M = !0, G += `';
` + zt + `;
__p += '`), De && (G += `' +
((__t = (` + De + `)) == null ? '' : __t) +
'`), F = dr + Ce.length, Ce;
        }), G += `';
`;
        var ye = We.call(s, "variable") && s.variable;
        if (!ye)
          G = `with (obj) {
` + G + `
}
`;
        else if (Tm.test(ye))
          throw new Ie(l);
        G = (M ? G.replace(lm, "") : G).replace(um, "$1").replace(dm, "$1;"), G = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + G + `return __p
}`;
        var Oe = af(function() {
          return qe(w, he + "return " + G).apply(e, S);
        });
        if (Oe.source = G, Kc(Oe))
          throw Oe;
        return Oe;
      }
      function jb(i) {
        return Ge(i).toLowerCase();
      }
      function Qb(i) {
        return Ge(i).toUpperCase();
      }
      function Jb(i, s, d) {
        if (i = Ge(i), i && (d || s === e))
          return pd(i);
        if (!i || !(s = cr(s)))
          return i;
        var p = Lr(i), y = Lr(s), w = gd(p, y), S = md(p, y) + 1;
        return On(p, w, S).join("");
      }
      function Xb(i, s, d) {
        if (i = Ge(i), i && (d || s === e))
          return i.slice(0, yd(i) + 1);
        if (!i || !(s = cr(s)))
          return i;
        var p = Lr(i), y = md(p, Lr(s)) + 1;
        return On(p, 0, y).join("");
      }
      function Zb(i, s, d) {
        if (i = Ge(i), i && (d || s === e))
          return i.replace(Ks, "");
        if (!i || !(s = cr(s)))
          return i;
        var p = Lr(i), y = gd(p, Lr(s));
        return On(p, y).join("");
      }
      function e_(i, s) {
        var d = ie, p = we;
        if (it(s)) {
          var y = "separator" in s ? s.separator : y;
          d = "length" in s ? Ne(s.length) : d, p = "omission" in s ? cr(s.omission) : p;
        }
        i = Ge(i);
        var w = i.length;
        if (yo(i)) {
          var S = Lr(i);
          w = S.length;
        }
        if (d >= w)
          return i;
        var R = d - Co(p);
        if (R < 1)
          return p;
        var M = S ? On(S, 0, R).join("") : i.slice(0, R);
        if (y === e)
          return M + p;
        if (S && (R += M.length - R), qc(y)) {
          if (i.slice(R).search(y)) {
            var F, B = M;
            for (y.global || (y = oc(y.source, Ge(Du.exec(y)) + "g")), y.lastIndex = 0; F = y.exec(B); )
              var G = F.index;
            M = M.slice(0, G === e ? R : G);
          }
        } else if (i.indexOf(cr(y), R) != R) {
          var J = M.lastIndexOf(y);
          J > -1 && (M = M.slice(0, J));
        }
        return M + p;
      }
      function t_(i) {
        return i = Ge(i), i && hm.test(i) ? i.replace(Mu, Pv) : i;
      }
      var r_ = Io(function(i, s, d) {
        return i + (d ? " " : "") + s.toUpperCase();
      }), zc = ah("toUpperCase");
      function of(i, s, d) {
        return i = Ge(i), s = d ? e : s, s === e ? Tv(i) ? Mv(i) : mv(i) : i.match(s) || [];
      }
      var af = Me(function(i, s) {
        try {
          return ar(i, e, s);
        } catch (d) {
          return Kc(d) ? d : new Ie(d);
        }
      }), n_ = un(function(i, s) {
        return Cr(s, function(d) {
          d = Yr(d), cn(i, d, Fc(i[d], i));
        }), i;
      });
      function o_(i) {
        var s = i == null ? 0 : i.length, d = ge();
        return i = s ? nt(i, function(p) {
          if (typeof p[1] != "function")
            throw new Er(c);
          return [d(p[0]), p[1]];
        }) : [], Me(function(p) {
          for (var y = -1; ++y < s; ) {
            var w = i[y];
            if (ar(w[0], this, p))
              return ar(w[1], this, p);
          }
        });
      }
      function i_(i) {
        return Py(br(i, g));
      }
      function Wc(i) {
        return function() {
          return i;
        };
      }
      function a_(i, s) {
        return i == null || i !== i ? s : i;
      }
      var s_ = ch(), c_ = ch(!0);
      function Xt(i) {
        return i;
      }
      function Vc(i) {
        return Hd(typeof i == "function" ? i : br(i, g));
      }
      function l_(i) {
        return Bd(br(i, g));
      }
      function u_(i, s) {
        return Kd(i, br(s, g));
      }
      var d_ = Me(function(i, s) {
        return function(d) {
          return li(d, i, s);
        };
      }), h_ = Me(function(i, s) {
        return function(d) {
          return li(i, d, s);
        };
      });
      function Yc(i, s, d) {
        var p = bt(s), y = ma(s, p);
        d == null && !(it(s) && (y.length || !p.length)) && (d = s, s = i, i = this, y = ma(s, bt(s)));
        var w = !(it(d) && "chain" in d) || !!d.chain, S = hn(i);
        return Cr(y, function(R) {
          var M = s[R];
          i[R] = M, S && (i.prototype[R] = function() {
            var F = this.__chain__;
            if (w || F) {
              var B = i(this.__wrapped__), G = B.__actions__ = jt(this.__actions__);
              return G.push({ func: M, args: arguments, thisArg: i }), B.__chain__ = F, B;
            }
            return M.apply(i, In([this.value()], arguments));
          });
        }), i;
      }
      function f_() {
        return Tt._ === this && (Tt._ = Fv), this;
      }
      function jc() {
      }
      function p_(i) {
        return i = Ne(i), Me(function(s) {
          return qd(s, i);
        });
      }
      var g_ = Ic(nt), m_ = Ic(ld), v_ = Ic(Js);
      function sf(i) {
        return Mc(i) ? Xs(Yr(i)) : Vy(i);
      }
      function y_(i) {
        return function(s) {
          return i == null ? e : Qn(i, s);
        };
      }
      var C_ = uh(), E_ = uh(!0);
      function Qc() {
        return [];
      }
      function Jc() {
        return !1;
      }
      function w_() {
        return {};
      }
      function b_() {
        return "";
      }
      function __() {
        return !0;
      }
      function S_(i, s) {
        if (i = Ne(i), i < 1 || i > Z)
          return [];
        var d = ot, p = xt(i, ot);
        s = ge(s), i -= ot;
        for (var y = tc(p, s); ++d < i; )
          s(d);
        return y;
      }
      function T_(i) {
        return Re(i) ? nt(i, Yr) : lr(i) ? [i] : jt(Ih(Ge(i)));
      }
      function I_(i) {
        var s = ++Uv;
        return Ge(i) + s;
      }
      var A_ = ba(function(i, s) {
        return i + s;
      }, 0), R_ = Ac("ceil"), k_ = ba(function(i, s) {
        return i / s;
      }, 1), P_ = Ac("floor");
      function N_(i) {
        return i && i.length ? ga(i, Xt, hc) : e;
      }
      function O_(i, s) {
        return i && i.length ? ga(i, ge(s, 2), hc) : e;
      }
      function M_(i) {
        return hd(i, Xt);
      }
      function x_(i, s) {
        return hd(i, ge(s, 2));
      }
      function L_(i) {
        return i && i.length ? ga(i, Xt, mc) : e;
      }
      function D_(i, s) {
        return i && i.length ? ga(i, ge(s, 2), mc) : e;
      }
      var U_ = ba(function(i, s) {
        return i * s;
      }, 1), H_ = Ac("round"), F_ = ba(function(i, s) {
        return i - s;
      }, 0);
      function B_(i) {
        return i && i.length ? ec(i, Xt) : 0;
      }
      function K_(i, s) {
        return i && i.length ? ec(i, ge(s, 2)) : 0;
      }
      return E.after = lw, E.ary = Uh, E.assign = Qw, E.assignIn = Jh, E.assignInWith = La, E.assignWith = Jw, E.at = Xw, E.before = Hh, E.bind = Fc, E.bindAll = n_, E.bindKey = Fh, E.castArray = ww, E.chain = xh, E.chunk = PC, E.compact = NC, E.concat = OC, E.cond = o_, E.conforms = i_, E.constant = Wc, E.countBy = BE, E.create = Zw, E.curry = Bh, E.curryRight = Kh, E.debounce = qh, E.defaults = eb, E.defaultsDeep = tb, E.defer = uw, E.delay = dw, E.difference = MC, E.differenceBy = xC, E.differenceWith = LC, E.drop = DC, E.dropRight = UC, E.dropRightWhile = HC, E.dropWhile = FC, E.fill = BC, E.filter = qE, E.flatMap = zE, E.flatMapDeep = WE, E.flatMapDepth = VE, E.flatten = Ph, E.flattenDeep = KC, E.flattenDepth = qC, E.flip = hw, E.flow = s_, E.flowRight = c_, E.fromPairs = $C, E.functions = cb, E.functionsIn = lb, E.groupBy = YE, E.initial = zC, E.intersection = WC, E.intersectionBy = VC, E.intersectionWith = YC, E.invert = db, E.invertBy = hb, E.invokeMap = QE, E.iteratee = Vc, E.keyBy = JE, E.keys = bt, E.keysIn = Jt, E.map = ka, E.mapKeys = pb, E.mapValues = gb, E.matches = l_, E.matchesProperty = u_, E.memoize = Na, E.merge = mb, E.mergeWith = Xh, E.method = d_, E.methodOf = h_, E.mixin = Yc, E.negate = Oa, E.nthArg = p_, E.omit = vb, E.omitBy = yb, E.once = fw, E.orderBy = XE, E.over = g_, E.overArgs = pw, E.overEvery = m_, E.overSome = v_, E.partial = Bc, E.partialRight = $h, E.partition = ZE, E.pick = Cb, E.pickBy = Zh, E.property = sf, E.propertyOf = y_, E.pull = XC, E.pullAll = Oh, E.pullAllBy = ZC, E.pullAllWith = eE, E.pullAt = tE, E.range = C_, E.rangeRight = E_, E.rearg = gw, E.reject = rw, E.remove = rE, E.rest = mw, E.reverse = Uc, E.sampleSize = ow, E.set = wb, E.setWith = bb, E.shuffle = iw, E.slice = nE, E.sortBy = cw, E.sortedUniq = uE, E.sortedUniqBy = dE, E.split = zb, E.spread = vw, E.tail = hE, E.take = fE, E.takeRight = pE, E.takeRightWhile = gE, E.takeWhile = mE, E.tap = NE, E.throttle = yw, E.thru = Ra, E.toArray = Yh, E.toPairs = ef, E.toPairsIn = tf, E.toPath = T_, E.toPlainObject = Qh, E.transform = _b, E.unary = Cw, E.union = vE, E.unionBy = yE, E.unionWith = CE, E.uniq = EE, E.uniqBy = wE, E.uniqWith = bE, E.unset = Sb, E.unzip = Hc, E.unzipWith = Mh, E.update = Tb, E.updateWith = Ib, E.values = ko, E.valuesIn = Ab, E.without = _E, E.words = of, E.wrap = Ew, E.xor = SE, E.xorBy = TE, E.xorWith = IE, E.zip = AE, E.zipObject = RE, E.zipObjectDeep = kE, E.zipWith = PE, E.entries = ef, E.entriesIn = tf, E.extend = Jh, E.extendWith = La, Yc(E, E), E.add = A_, E.attempt = af, E.camelCase = Nb, E.capitalize = rf, E.ceil = R_, E.clamp = Rb, E.clone = bw, E.cloneDeep = Sw, E.cloneDeepWith = Tw, E.cloneWith = _w, E.conformsTo = Iw, E.deburr = nf, E.defaultTo = a_, E.divide = k_, E.endsWith = Ob, E.eq = Ur, E.escape = Mb, E.escapeRegExp = xb, E.every = KE, E.find = $E, E.findIndex = Rh, E.findKey = rb, E.findLast = GE, E.findLastIndex = kh, E.findLastKey = nb, E.floor = P_, E.forEach = Lh, E.forEachRight = Dh, E.forIn = ob, E.forInRight = ib, E.forOwn = ab, E.forOwnRight = sb, E.get = $c, E.gt = Aw, E.gte = Rw, E.has = ub, E.hasIn = Gc, E.head = Nh, E.identity = Xt, E.includes = jE, E.indexOf = GC, E.inRange = kb, E.invoke = fb, E.isArguments = Zn, E.isArray = Re, E.isArrayBuffer = kw, E.isArrayLike = Qt, E.isArrayLikeObject = dt, E.isBoolean = Pw, E.isBuffer = Mn, E.isDate = Nw, E.isElement = Ow, E.isEmpty = Mw, E.isEqual = xw, E.isEqualWith = Lw, E.isError = Kc, E.isFinite = Dw, E.isFunction = hn, E.isInteger = Gh, E.isLength = Ma, E.isMap = zh, E.isMatch = Uw, E.isMatchWith = Hw, E.isNaN = Fw, E.isNative = Bw, E.isNil = qw, E.isNull = Kw, E.isNumber = Wh, E.isObject = it, E.isObjectLike = at, E.isPlainObject = gi, E.isRegExp = qc, E.isSafeInteger = $w, E.isSet = Vh, E.isString = xa, E.isSymbol = lr, E.isTypedArray = Ro, E.isUndefined = Gw, E.isWeakMap = zw, E.isWeakSet = Ww, E.join = jC, E.kebabCase = Lb, E.last = Sr, E.lastIndexOf = QC, E.lowerCase = Db, E.lowerFirst = Ub, E.lt = Vw, E.lte = Yw, E.max = N_, E.maxBy = O_, E.mean = M_, E.meanBy = x_, E.min = L_, E.minBy = D_, E.stubArray = Qc, E.stubFalse = Jc, E.stubObject = w_, E.stubString = b_, E.stubTrue = __, E.multiply = U_, E.nth = JC, E.noConflict = f_, E.noop = jc, E.now = Pa, E.pad = Hb, E.padEnd = Fb, E.padStart = Bb, E.parseInt = Kb, E.random = Pb, E.reduce = ew, E.reduceRight = tw, E.repeat = qb, E.replace = $b, E.result = Eb, E.round = H_, E.runInContext = O, E.sample = nw, E.size = aw, E.snakeCase = Gb, E.some = sw, E.sortedIndex = oE, E.sortedIndexBy = iE, E.sortedIndexOf = aE, E.sortedLastIndex = sE, E.sortedLastIndexBy = cE, E.sortedLastIndexOf = lE, E.startCase = Wb, E.startsWith = Vb, E.subtract = F_, E.sum = B_, E.sumBy = K_, E.template = Yb, E.times = S_, E.toFinite = fn, E.toInteger = Ne, E.toLength = jh, E.toLower = jb, E.toNumber = Tr, E.toSafeInteger = jw, E.toString = Ge, E.toUpper = Qb, E.trim = Jb, E.trimEnd = Xb, E.trimStart = Zb, E.truncate = e_, E.unescape = t_, E.uniqueId = I_, E.upperCase = r_, E.upperFirst = zc, E.each = Lh, E.eachRight = Dh, E.first = Nh, Yc(E, function() {
        var i = {};
        return Wr(E, function(s, d) {
          We.call(E.prototype, d) || (i[d] = s);
        }), i;
      }(), { chain: !1 }), E.VERSION = n, Cr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        E[i].placeholder = E;
      }), Cr(["drop", "take"], function(i, s) {
        Le.prototype[i] = function(d) {
          d = d === e ? 1 : yt(Ne(d), 0);
          var p = this.__filtered__ && !s ? new Le(this) : this.clone();
          return p.__filtered__ ? p.__takeCount__ = xt(d, p.__takeCount__) : p.__views__.push({
            size: xt(d, ot),
            type: i + (p.__dir__ < 0 ? "Right" : "")
          }), p;
        }, Le.prototype[i + "Right"] = function(d) {
          return this.reverse()[i](d).reverse();
        };
      }), Cr(["filter", "map", "takeWhile"], function(i, s) {
        var d = s + 1, p = d == ce || d == j;
        Le.prototype[i] = function(y) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: ge(y, 3),
            type: d
          }), w.__filtered__ = w.__filtered__ || p, w;
        };
      }), Cr(["head", "last"], function(i, s) {
        var d = "take" + (s ? "Right" : "");
        Le.prototype[i] = function() {
          return this[d](1).value()[0];
        };
      }), Cr(["initial", "tail"], function(i, s) {
        var d = "drop" + (s ? "" : "Right");
        Le.prototype[i] = function() {
          return this.__filtered__ ? new Le(this) : this[d](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(Xt);
      }, Le.prototype.find = function(i) {
        return this.filter(i).head();
      }, Le.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, Le.prototype.invokeMap = Me(function(i, s) {
        return typeof i == "function" ? new Le(this) : this.map(function(d) {
          return li(d, i, s);
        });
      }), Le.prototype.reject = function(i) {
        return this.filter(Oa(ge(i)));
      }, Le.prototype.slice = function(i, s) {
        i = Ne(i);
        var d = this;
        return d.__filtered__ && (i > 0 || s < 0) ? new Le(d) : (i < 0 ? d = d.takeRight(-i) : i && (d = d.drop(i)), s !== e && (s = Ne(s), d = s < 0 ? d.dropRight(-s) : d.take(s - i)), d);
      }, Le.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(ot);
      }, Wr(Le.prototype, function(i, s) {
        var d = /^(?:filter|find|map|reject)|While$/.test(s), p = /^(?:head|last)$/.test(s), y = E[p ? "take" + (s == "last" ? "Right" : "") : s], w = p || /^find/.test(s);
        y && (E.prototype[s] = function() {
          var S = this.__wrapped__, R = p ? [1] : arguments, M = S instanceof Le, F = R[0], B = M || Re(S), G = function(xe) {
            var De = y.apply(E, In([xe], R));
            return p && J ? De[0] : De;
          };
          B && d && typeof F == "function" && F.length != 1 && (M = B = !1);
          var J = this.__chain__, he = !!this.__actions__.length, ye = w && !J, Oe = M && !he;
          if (!w && B) {
            S = Oe ? S : new Le(this);
            var Ce = i.apply(S, R);
            return Ce.__actions__.push({ func: Ra, args: [G], thisArg: e }), new wr(Ce, J);
          }
          return ye && Oe ? i.apply(this, R) : (Ce = this.thru(G), ye ? p ? Ce.value()[0] : Ce.value() : Ce);
        });
      }), Cr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var s = ea[i], d = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(i);
        E.prototype[i] = function() {
          var y = arguments;
          if (p && !this.__chain__) {
            var w = this.value();
            return s.apply(Re(w) ? w : [], y);
          }
          return this[d](function(S) {
            return s.apply(Re(S) ? S : [], y);
          });
        };
      }), Wr(Le.prototype, function(i, s) {
        var d = E[s];
        if (d) {
          var p = d.name + "";
          We.call(_o, p) || (_o[p] = []), _o[p].push({ name: s, func: d });
        }
      }), _o[wa(e, A).name] = [{
        name: "wrapper",
        func: e
      }], Le.prototype.clone = ty, Le.prototype.reverse = ry, Le.prototype.value = ny, E.prototype.at = OE, E.prototype.chain = ME, E.prototype.commit = xE, E.prototype.next = LE, E.prototype.plant = UE, E.prototype.reverse = HE, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = FE, E.prototype.first = E.prototype.head, ri && (E.prototype[ri] = DE), E;
    }, Eo = xv();
    zn ? ((zn.exports = Eo)._ = Eo, Vs._ = Eo) : Tt._ = Eo;
  }).call(mi);
})(ds, ds.exports);
var im = ds.exports;
const mp = (r) => im.groupBy(r, "dictionaryUri");
async function Tk(r, t, e) {
  try {
    const n = await r.api.classV1List({ uri: t, includeClassRelations: !0 }, e);
    if (n.status !== 200)
      throw new Error(`API request failed with status ${n.status}`);
    return n.data;
  } catch (n) {
    return console.error("Error fetching classification:", n), null;
  }
}
function Ik({
  api: r,
  activeClassificationUri: t,
  setClassifications: e,
  domains: n,
  accessToken: o
}) {
  const [a, c] = pe(0), [l, u] = pe({}), [h, f] = pe([]), [g, m] = pe(
    () => mp(h)
  ), [v, C] = pe({}), b = Ve(
    (A) => {
      const I = {
        headers: { Accept: "text/plain" }
      };
      o !== "" && (I.headers = { ...I.headers, Authorization: `Bearer ${o}` });
      const T = new Promise(function(N) {
        const x = {
          uri: A,
          includeClassRelations: !0,
          includeClassProperties: !0
        };
        N(
          r.api.classV1List(x, I).then((D) => D.status !== 200 ? (console.error(`API request failed with status ${D.status}`), null) : D.data).catch((D) => (console.error("Error fetching classification:", D), null))
        );
      });
      return u((N) => ({
        ...N,
        classificationUri: T
      })), T;
    },
    [o, r.api]
  );
  me(() => {
    m(mp(h));
  }, [h]), me(() => {
    if (c(0), t) {
      const A = {};
      t && (A[t] = b(t)), u(A);
    }
  }, [t, b]), me(() => {
    const A = {
      headers: { Accept: "text/plain" }
    };
    o !== "" && (A.headers = { ...A.headers, Authorization: `Bearer ${o}` }), c(Object.keys(l).length), a !== Object.keys(l).length && Promise.allSettled(Object.values(l)).then(function(I) {
      const T = I.map((D) => D.status === "fulfilled" ? D.value : null).filter((D) => D !== null);
      I.map(async (D) => {
        if (D.status === "fulfilled") {
          const W = D.value;
          if (W && W.classRelations) {
            const z = {
              ...l
            };
            W.classRelations.forEach((se) => {
              se.relatedClassUri in Object.keys(l) || (z[se.relatedClassUri] = Tk(
                r,
                se.relatedClassUri,
                A
              ));
            }), u(z);
          }
        }
      });
      const N = { ...v }, x = im.groupBy(T, "dictionaryUri");
      Object.entries(x).forEach(([D, W]) => {
        W.some((z) => z.uri === N[D]) || (N[D] = W[0].uri);
      }), C(N), e(T), f(T);
    });
  }, [l, a, v, r, e, o]), me(() => {
    e(
      Object.values(v).map((A) => h.find((I) => I.uri === A)).filter((A) => A !== void 0)
    );
  }, [v, h, e]);
  const _ = Ve(
    (A) => (I) => {
      if (!I)
        return;
      if (!h.find(
        (x) => x.uri === I
      )) {
        console.log(`Selected classification '${I}' not found`);
        return;
      }
      const N = { ...v, [A]: I };
      C(N);
    },
    [h, v]
  );
  return /* @__PURE__ */ Te.jsx(Te.Fragment, { children: Object.entries(g).map(([A, I]) => /* @__PURE__ */ Te.jsx(
    Ps,
    {
      mb: "sm",
      label: n[A] ? n[A].name : "",
      data: I.map((T) => ({
        value: T.uri,
        label: T.name
      })),
      value: v[A],
      readOnly: I.length === 1,
      variant: I.length === 1 ? "filled" : "default",
      onChange: (T) => _(A)(T)
    },
    A
  )) });
}
function Ak(r) {
  const { value: t, setValue: e, disabled: n } = r, o = Ke(null), a = (c) => {
    c.target.indeterminate = !1, e(c.target.checked);
  };
  return me(() => {
    o.current && (t === !0 ? o.current.checked = !0 : t === void 0 && (o.current.indeterminate = !0));
  }), /* @__PURE__ */ Te.jsx(Rs, { ref: o, type: "checkbox", onChange: (c) => a(c), disabled: n });
}
function Rk({ propertySet: r, property: t, propertyIndex: e, propertySets: n, setPropertySets: o }) {
  const [a, c] = pe(), l = t, u = r, h = n, f = o;
  return me(() => {
    switch (l.type) {
      case "IfcPropertySingleValue": {
        l.nominalValue.type === "IfcBoolean" ? c(
          /* @__PURE__ */ Te.jsx(
            Ak,
            {
              disabled: !1,
              value: l.nominalValue.value,
              setValue: (g) => {
                const m = { ...h }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.nominalValue.value = g;
                  const b = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  b != -1 && (v.hasProperties[b] = C, m[v.name] = v, f(m));
                }
              }
            }
          )
        ) : c(
          /* @__PURE__ */ Te.jsx(
            so,
            {
              placeholder: l.nominalValue.value,
              value: l.nominalValue.value,
              onChange: (g) => {
                const m = { ...h }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.nominalValue.value = g.target.value;
                  const b = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  b != -1 && (v.hasProperties[b] = C, m[v.name] = v, f(m));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        c(
          /* @__PURE__ */ Te.jsx(
            Ps,
            {
              value: l.enumerationValues,
              onChange: (g) => {
                const m = { ...h }, v = { ...u };
                if (v.name) {
                  const C = { ...l };
                  C.enumerationValues = [g];
                  const b = v.hasProperties.findIndex(
                    (_) => _.name === l.name
                  );
                  b != -1 && (v.hasProperties[b] = C, m[v.name] = v, f(m));
                }
              },
              data: l.enumerationReference.enumerationValues.map((g, m) => ({
                value: g,
                label: g
              }))
            }
          )
        );
        break;
      }
      default: {
        c(/* @__PURE__ */ Te.jsx(so, { placeholder: l.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [l, u, c, h, f]), /* @__PURE__ */ Te.jsxs(Ui, { className: "mb-3 row", children: [
    /* @__PURE__ */ Te.jsx(mu, { children: l.name }),
    /* @__PURE__ */ Te.jsx("div", { className: "col-sm-7", children: a })
  ] }, e);
}
function kk(r, t) {
  switch (r) {
    case "Boolean": {
      const e = {
        type: "IfcBoolean"
      };
      switch (t) {
        case !0:
        case "TRUE":
          return e.value = !0, e;
        case !1:
        case "FALSE":
          return e.value = !1, e;
        default:
          return e.value = void 0, e;
      }
    }
    case "Character": {
      const e = {
        type: "default"
      };
      return t && (e.value = t), e;
    }
    case "Integer": {
      const e = {
        type: "IfcInteger"
      };
      return t && (e.value = t), e;
    }
    case "Real": {
      const e = {
        type: "IfcReal"
      };
      return t && (e.value = t), e;
    }
    case "String": {
      const e = {
        type: "default"
      };
      return t && (e.value = t), e;
    }
    case "Time": {
      const e = {
        type: "IfcDate"
      };
      return t && (e.value = t), e;
    }
    default: {
      const e = {
        type: "default"
      };
      return t && (e.value = t), e;
    }
  }
}
function Pk(r) {
  if (r.allowedValues) {
    const e = {
      type: "IfcPropertyEnumeratedValue",
      name: r.name,
      enumerationReference: {
        type: "IfcPropertyEnumeration",
        name: r.name,
        enumerationValues: r.allowedValues.map((n) => n.value)
      }
    };
    return r.propertyUri && (e.specification = r.propertyUri), e;
  }
  const t = {
    type: "IfcPropertySingleValue",
    name: r.name
  };
  return r.propertyUri && (t.specification = r.propertyUri), t.nominalValue = kk(
    r.dataType,
    r.predefinedValue
  ), t;
}
function Nk(r) {
  Ul();
  const { classifications: t } = r, { propertySets: e } = r, { setPropertySets: n } = r, { recursiveMode: o } = r;
  return me(() => {
    const a = {};
    (o ? t : t.slice(0, 1)).forEach((l) => {
      l.classProperties && l.classProperties.map((u) => {
        const h = u.propertySet || l.name;
        h in a || (a[h] = {
          type: "IfcPropertySet",
          name: h,
          hasProperties: []
        }), a[h].hasProperties.push(Pk(u));
      });
    }), n(a);
  }, [t, n, o]), /* @__PURE__ */ Te.jsx("div", { children: ul.toArray(
    Object.values(e).map((a, c) => /* @__PURE__ */ Te.jsx(_t, { children: /* @__PURE__ */ Te.jsxs(_t.Item, { value: a.name || c.toString(), children: [
      /* @__PURE__ */ Te.jsx(_t.Control, { children: a.name }),
      /* @__PURE__ */ Te.jsx(_t.Panel, { children: ul.toArray(
        a.hasProperties.map((l, u) => /* @__PURE__ */ Te.jsx(
          Rk,
          {
            propertySet: a,
            property: l,
            propertyIndex: u,
            propertySets: e,
            setPropertySets: n
          }
        ))
      ) })
    ] }, c) }))
  ) });
}
const am = 25, Ok = (r, t, e, n, o) => {
  const a = {
    SearchText: n,
    DictionaryUri: t[0].value,
    Limit: am
    // LanguageCode: 'NL',
    // RelatedIfcEntities: 'IfcWall',
  };
  r.api.searchInDictionaryV1List(a, e).then((c) => {
    var u;
    const l = c.data;
    if (l.count) {
      const h = (u = l.dictionary) == null ? void 0 : u.classes;
      h && o(
        h.map((f) => ({
          value: f.uri,
          label: f.name
        }))
      );
    }
  });
}, Mk = (r, t, e, n, o) => {
  const a = {
    SearchText: n,
    DictionaryUris: [t[0].value],
    Limit: am
    // DictionaryUris: activeDomains.map((domain) => domain.value),
    // LanguageCode: 'NL',
    // RelatedIfcEntities: 'IfcWall',
  };
  r.api.classSearchV1List(a, e).then((c) => {
    c.data.classes && o(
      c.data.classes.map((l) => ({
        value: l.uri,
        label: l.name
      }))
    );
  });
};
function xk({
  api: r,
  activeDomains: t,
  defaultValue: e,
  setActiveClassificationUri: n,
  accessToken: o
}) {
  const [a, c] = pe(e), [l, u] = pe([]), [h, f] = pe(""), [g] = p0(h, 300), [m, v] = pe(!1), C = Ke(null), b = Ve((I) => {
    f(I);
  }, []), _ = Ve(
    (I) => {
      const T = l.find((N) => N.value === I);
      T && (c(T), v(!1));
    },
    [l]
  ), A = Ve(
    (I) => {
      I.key === "Enter" && l[0] && (f(l[0].label), _(l[0].value), C.current && C.current.blur());
    },
    [l, _, C]
  );
  return me(() => {
    c(e);
  }, [e]), me(() => {
    if (g !== "") {
      const I = {
        headers: { Accept: "text/plain" }
      };
      o !== "" && (I.headers = { ...I.headers, Authorization: `Bearer ${o}` }), t.length === 1 ? Ok(r, t, I, g, (N) => u(N)) : t.length > 2 ? Mk(r, t, I, g, (N) => u(N)) : u([]);
    }
  }, [o, t, r, g]), me(() => {
    C.current && C.current.focus();
  }, []), me(() => {
    e && (f((e == null ? void 0 : e.label) || ""), c(e), v(!1));
  }, [e]), me(() => {
    a && n(a.value);
  }, [a, n]), /* @__PURE__ */ Te.jsx(
    Pu,
    {
      data: l,
      placeholder: "bSDD search...",
      value: h,
      onChange: b,
      onOptionSubmit: _,
      onKeyDown: A,
      dropdownOpened: m,
      onDropdownOpen: () => v(!0),
      ref: C,
      style: { width: "100%" }
    }
  );
}
function Lk() {
  const { t: r } = Ul(), [t, e] = pe(), [n, o] = pe(), [a, c] = pe(), [l, u] = pe(), [h, f] = pe(), [g, m] = pe(!1), [v, C] = pe([]), [b, _] = pe({}), [A, I] = pe([]), [T, N] = pe({}), [x, D] = pe(""), [W, z] = pe(new pp("https://test.bsdd.buildingsmart.org"));
  me(() => {
    t && o(
      t && gp[t] ? gp[t] : "https://test.bsdd.buildingsmart.org"
    );
  }, [t]), me(() => {
    n && z(new pp(n));
  }, [n]), me(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const we = await window.bsddBridge.loadConfig();
        if (!we)
          return;
        const de = JSON.parse(we);
        de && de.defaultDomains && de.defaultDomains.length && C(de.defaultDomains), de.baseUrl && e(de.baseUrl), de.defaultSearch && u(de.defaultSearch), de.ifcEntity && f(de.ifcEntity);
      }
    })();
  }, []);
  const se = Ve((ie) => {
    var ne;
    const we = JSON.stringify(ie);
    (ne = window == null ? void 0 : window.bsddBridge) == null || ne.save(we).then((de) => {
      console.log("Sent to Revit", de);
    });
  }, []);
  return me(() => {
    const ie = {
      headers: { Accept: "text/plain" }
    };
    x !== "" && (ie.headers = { ...ie.headers, Authorization: `Bearer ${x}` }), (async () => {
      try {
        const ne = await W.api.dictionaryV1List(void 0, ie), { dictionaries: de } = ne.data;
        if (de) {
          const ce = de.reduce((ve, j) => j.uri ? { ...ve, [j.uri]: j } : ve, {});
          _(ce);
        }
      } catch (ne) {
        console.error("Failed to fetch dictionaries:", ne);
      }
    })();
  }, [W, _, x]), /* @__PURE__ */ Te.jsxs(Ou, { children: [
    /* @__PURE__ */ Te.jsx(so, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ Te.jsx(so, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ Te.jsx(so, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ Te.jsx(Ui, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ Te.jsx(
      xk,
      {
        api: W,
        activeDomains: v,
        defaultValue: l,
        setActiveClassificationUri: c,
        accessToken: x
      }
    ) }),
    /* @__PURE__ */ Te.jsxs(_t, { defaultValue: ["Classifications"], multiple: !0, children: [
      /* @__PURE__ */ Te.jsxs(_t.Item, { value: "Classifications", children: [
        /* @__PURE__ */ Te.jsx(_t.Control, { children: /* @__PURE__ */ Te.jsx(us, { order: 5, children: r("Classifications") }) }),
        /* @__PURE__ */ Te.jsx(_t.Panel, { children: /* @__PURE__ */ Te.jsx(
          Ik,
          {
            api: W,
            activeClassificationUri: a,
            setClassifications: I,
            domains: b,
            accessToken: x
          }
        ) })
      ] }, "Classifications"),
      /* @__PURE__ */ Te.jsxs(_t.Item, { value: "Propertysets", children: [
        /* @__PURE__ */ Te.jsx(_t.Control, { children: /* @__PURE__ */ Te.jsx(us, { order: 5, children: r("Propertysets") }) }),
        /* @__PURE__ */ Te.jsx(_t.Panel, { children: /* @__PURE__ */ Te.jsx(
          Nk,
          {
            classifications: A,
            propertySets: T,
            setPropertySets: N,
            recursiveMode: g
          }
        ) })
      ] }, "Propertysets")
    ] }),
    /* @__PURE__ */ Te.jsxs(Ui, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ Te.jsx(
        Sk,
        {
          callback: se,
          domains: b,
          classifications: A,
          propertySetMap: T,
          ifcEntity: h
        }
      ),
      /* @__PURE__ */ Te.jsx(Vi, { fullWidth: !0, variant: "light", color: "gray", children: r("Cancel") })
    ] })
  ] });
}
function Dk() {
  const [r, t] = pe(null);
  return me(() => {
    const e = new KT(Ek);
    t(e);
  }, []), r ? /* @__PURE__ */ Te.jsx(eg, { theme: Ck, children: /* @__PURE__ */ Te.jsx(VT, { instance: r, children: /* @__PURE__ */ Te.jsx(Lk, {}) }) }) : /* @__PURE__ */ Te.jsx("div", { children: "Loading..." });
}
dl.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Te.jsx(k.StrictMode, { children: /* @__PURE__ */ Te.jsx(Dk, {}) })
);
