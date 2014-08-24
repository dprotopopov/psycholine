﻿var buildNumber = 89;
var buildDate = "20140718 09:21 (patched)";
(function(a, b) {

    function c(a) {
        var b = oa[a] = {}, c, d, a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++)b[a[c]] = !0;
        return b;
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType)
            if (d = "data-" + c.replace(Va, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : i.isNumeric(d) ? parseFloat(d) : Wa.test(d) ? i.parseJSON(d) : d;
                } catch (e) {
                }
                i.data(a, c, d);
            } else d = b;
        return d;
    }

    function e(a) {
        for (var b in a)if (!("data" === b && i.isEmptyObject(a[b])) && "toJSON" !== b)return!1;
        return!0;
    }

    function f(a,
        b, c) {
        var d = b + "defer", e = b + "queue", f = b + "mark", g = i._data(a, d);
        g && ("queue" === c || !i._data(a, e)) && ("mark" === c || !i._data(a, f)) && setTimeout(function() { !i._data(a, e) && !i._data(a, f) && (i.removeData(a, d, !0), g.fire()); }, 0);
    }

    function g() { return!1; }

    function h() { return!0; }

    function j(a, b, c) {
        b = b || 0;
        if (i.isFunction(b))return i.grep(a, function(a, d) { return!!b.call(a, d, a) === c; });
        if (b.nodeType)return i.grep(a, function(a) { return a === b === c; });
        if ("string" === typeof b) {
            var d = i.grep(a, function(a) { return 1 === a.nodeType; });
            if (Xa.test(b))
                return i.filter(b,
                    d, !c);
            b = i.filter(b, d);
        }
        return i.grep(a, function(a) { return 0 <= i.inArray(a, b) === c; });
    }

    function k(a) {
        var b = pa.split("|"), a = a.createDocumentFragment();
        if (a.createElement)for (; b.length;)a.createElement(b.pop());
        return a;
    }

    function l(a, b) {
        if (1 === b.nodeType && i.hasData(a)) {
            var c, d, e;
            d = i._data(a);
            var f = i._data(b, d), g = d.events;
            if (g)for (c in delete f.handle, f.events = {}, g)for (d = 0, e = g[c].length; d < e; d++)i.event.add(b, c + (g[c][d].namespace ? "." : "") + g[c][d].namespace, g[c][d], g[c][d].data);
            if (f.data)f.data = i.extend({}, f.data);
        }
    }

    function m(a, b) {
        var c;
        if (1 === b.nodeType) {
            b.clearAttributes && b.clearAttributes();
            b.mergeAttributes && b.mergeAttributes(a);
            c = b.nodeName.toLowerCase();
            if ("object" === c)b.outerHTML = a.outerHTML;
            else if ("input" === c && ("checkbox" === a.type || "radio" === a.type)) {
                if (a.checked)b.defaultChecked = b.checked = a.checked;
                if (b.value !== a.value)b.value = a.value;
            } else if ("option" === c)b.selected = a.defaultSelected;
            else if ("input" === c || "textarea" === c)b.defaultValue = a.defaultValue;
            b.removeAttribute(i.expando);
        }
    }

    function n(a) {
        return"undefined" !==
            typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : [];
    }

    function p(a) { if ("checkbox" === a.type || "radio" === a.type)a.defaultChecked = a.checked; }

    function u(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? p(a) : "script" !== b && "undefined" !== typeof a.getElementsByTagName && i.grep(a.getElementsByTagName("input"), p);
    }

    function o(a, b) {
        b.src ? i.ajax({ url: b.src, async: !1, dataType: "script" }) : i.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ya,
            "/*$0*/"));
        b.parentNode && b.parentNode.removeChild(b);
    }

    function r(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = "width" === b ? Za : $a, f = 0, g = e.length;
        if (0 < d) {
            if ("border" !== c)for (; f < g; f++)c || (d -= parseFloat(i.css(a, "padding" + e[f])) || 0), d = "margin" === c ? d + (parseFloat(i.css(a, c + e[f])) || 0) : d - (parseFloat(i.css(a, "border" + e[f] + "Width")) || 0);
            return d + "px";
        }
        d = H(a, b, b);
        if (0 > d || null == d)d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; f < g; f++)
                d += parseFloat(i.css(a, "padding" + e[f])) || 0, "padding" !== c && (d += parseFloat(i.css(a,
                    "border" + e[f] + "Width")) || 0), "margin" === c && (d += parseFloat(i.css(a, c + e[f])) || 0);
        return d + "px";
    }

    function z(a) {
        return function(b, c) {
            var s;
            "string" !== typeof b && (c = b, b = "*");
            if (i.isFunction(c))for (var d = b.toLowerCase().split(qa), e = 0, f = d.length, g, h; e < f; e++)g = d[e], (h = /^\+/.test(g)) && (g = g.substr(1) || "*"), s = a[g] = a[g] || [], g = s, g[h ? "unshift" : "push"](c);
        };
    }

    function J(a, c, d, e, f, g) {
        f = f || c.dataTypes[0];
        g = g || {};
        g[f] = !0;
        for (var f = a[f], h = 0, i = f ? f.length : 0, j = a === da, k; h < i && (j || !k); h++)
            k = f[h](c, d, e), "string" === typeof k && (!j ||
                g[k] ? k = b : (c.dataTypes.unshift(k), k = J(a, c, d, e, k, g)));
        if ((j || !k) && !g["*"])k = J(a, c, d, e, "*", g);
        return k;
    }

    function ra(a, c) {
        var d, e, f = i.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && i.extend(!0, a, e);
    }

    function E(a, b, c, d) {
        if (i.isArray(b))i.each(b, function(b, e) { c || ab.test(a) ? d(a, e) : E(a + "[" + ("object" === typeof e || i.isArray(e) ? b : "") + "]", e, c, d); });
        else if (!c && null != b && "object" === typeof b)for (var e in b)E(a + "[" + e + "]", b[e], c, d);
        else d(a, b);
    }

    function L() {
        try {
            return new a.XMLHttpRequest;
        } catch (b) {
        }
    }

    function X() {
        setTimeout(Q, 0);
        return Y = i.now();
    }

    function Q() { Y = b; }

    function M(a, b) {
        var c = {};
        i.each(sa.concat.apply([], sa.slice(0, b)), function() { c[this] = a; });
        return c;
    }

    function V(a) {
        if (!ea[a]) {
            var b = q.body, c = i("<" + a + ">").appendTo(b), d = c.css("display");
            c.remove();
            if ("none" === d || "" === d) {
                if (!C)C = q.createElement("iframe"), C.frameBorder = C.width = C.height = 0;
                b.appendChild(C);
                if (!R || !C.createElement)
                    R = (C.contentWindow || C.contentDocument).document, R.write(("CSS1Compat" === q.compatMode ? "<!doctype html>" : "") + "<html><body>"),
                        R.close();
                c = R.createElement(a);
                R.body.appendChild(c);
                d = i.css(c, "display");
                b.removeChild(C);
            }
            ea[a] = d;
        }
        return ea[a];
    }

    function fa(a) { return i.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1; }

    var q = a.document,
        bb = a.navigator,
        cb = a.location,
        i = function() {

            function c() {
                if (!d.isReady) {
                    try {
                        q.documentElement.doScroll("left");
                    } catch (a) {
                        setTimeout(c, 1);
                        return;
                    }
                    d.ready();
                }
            }

            var d = function(a, b) { return new d.fn.init(a, b, g); },
                e = a.jQuery,
                f = a.$,
                g,
                h = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                i = /\S/,
                k = /^\s+/,
                j = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                l = /^[\],:{}\s]*$/,
                n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                o = /(?:^|:|,)(?:\s*\[)+/g,
                u = /(webkit)[ \/]([\w.]+)/,
                r = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                D = /(msie) ([\w.]+)/,
                I = /(mozilla)(?:.*? rv:([\w.]+))?/,
                L = /-([a-z]|[0-9])/ig,
                z = /^-ms-/,
                s = function(a, b) { return(b + "").toUpperCase(); },
                w = bb.userAgent,
                Z,
                T,
                db = Object.prototype.toString,
                ha = Object.prototype.hasOwnProperty,
                ia = Array.prototype.push,
                W = Array.prototype.slice,
                ua = String.prototype.trim,
                va = Array.prototype.indexOf,
                wa = {};
            d.fn = d.prototype = {
                constructor: d,
                init: function(a, c, e) {
                    var f;
                    if (!a)return this;
                    if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && q.body)return this.context = q, this[0] = q.body, this.selector = a, this.length = 1, this;
                    if ("string" === typeof a) {
                        if ((f = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : h.exec(a)) && (f[1] || !c)) {
                            if (f[1])
                                return e = (c = c instanceof d ? c[0] : c) ? c.ownerDocument || c : q, (a = m.exec(a)) ?
                                    d.isPlainObject(c) ? (a = [q.createElement(a[1])], d.fn.attr.call(a, c, !0)) : a = [e.createElement(a[1])] : (a = d.buildFragment([f[1]], [e]), a = (a.cacheable ? d.clone(a.fragment) : a.fragment).childNodes), d.merge(this, a);
                            if ((c = q.getElementById(f[2])) && c.parentNode) {
                                if (c.id !== f[2])return e.find(a);
                                this.length = 1;
                                this[0] = c;
                            }
                            this.context = q;
                            this.selector = a;
                            return this;
                        }
                        return!c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a);
                    }
                    if (d.isFunction(a))return e.ready(a);
                    if (a.selector !== b)
                        this.selector = a.selector, this.context =
                            a.context;
                    return d.makeArray(a, this);
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() { return this.length; },
                toArray: function() { return W.call(this, 0); },
                get: function(a) { return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]; },
                pushStack: function(a, b, c) {
                    var e = this.constructor();
                    d.isArray(a) ? ia.apply(e, a) : d.merge(e, a);
                    e.prevObject = this;
                    e.context = this.context;
                    if ("find" === b)e.selector = this.selector + (this.selector ? " " : "") + c;
                    else if (b)e.selector = this.selector + "." + b + "(" + c + ")";
                    return e;
                },
                each: function(a,
                    b) { return d.each(this, a, b); },
                ready: function(a) {
                    d.bindReady();
                    Z.add(a);
                    return this;
                },
                eq: function(a) {
                    a = +a;
                    return-1 === a ? this.slice(a) : this.slice(a, a + 1);
                },
                first: function() { return this.eq(0); },
                last: function() { return this.eq(-1); },
                slice: function() { return this.pushStack(W.apply(this, arguments), "slice", W.call(arguments).join(",")); },
                map: function(a) { return this.pushStack(d.map(this, function(b, c) { return a.call(b, c, b); })); },
                end: function() { return this.prevObject || this.constructor(null); },
                push: ia,
                sort: [].sort,
                splice: [].splice
            };
            d.fn.init.prototype = d.fn;
            d.extend = d.fn.extend = function() {
                var a, c, e, f, t, g = arguments[0] || {}, h = 1, i = arguments.length, K = !1;
                "boolean" === typeof g && (K = g, g = arguments[1] || {}, h = 2);
                "object" !== typeof g && !d.isFunction(g) && (g = {});
                i === h && (g = this, --h);
                for (; h < i; h++)if (null != (a = arguments[h]))for (c in a)e = g[c], f = a[c], g !== f && (K && f && (d.isPlainObject(f) || (t = d.isArray(f))) ? (t ? (t = !1, e = e && d.isArray(e) ? e : []) : e = e && d.isPlainObject(e) ? e : {}, g[c] = d.extend(K, e, f)) : f !== b && (g[c] = f));
                return g;
            };
            d.extend({
                noConflict: function(b) {
                    if (a.$ ===
                        d)a.$ = f;
                    if (b && a.jQuery === d)a.jQuery = e;
                    return d;
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) { a ? d.readyWait++ : d.ready(!0); },
                ready: function(a) {
                    if (!0 === a && !--d.readyWait || !0 !== a && !d.isReady) {
                        if (!q.body)return setTimeout(d.ready, 1);
                        d.isReady = !0;
                        !0 !== a && 0 < --d.readyWait || (Z.fireWith(q, [d]), d.fn.trigger && d(q).trigger("ready").off("ready"));
                    }
                },
                bindReady: function() {
                    if (!Z) {
                        Z = d.Callbacks("once memory");
                        if ("complete" === q.readyState)return setTimeout(d.ready, 1);
                        if (q.addEventListener)
                            q.addEventListener("DOMContentLoaded",
                                T, !1), a.addEventListener("load", d.ready, !1);
                        else if (q.attachEvent) {
                            q.attachEvent("onreadystatechange", T);
                            a.attachEvent("onload", d.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement;
                            } catch (e) {
                            }
                            q.documentElement.doScroll && b && c();
                        }
                    }
                },
                isFunction: function(a) { return"function" === d.type(a); },
                isArray: Array.isArray || function(a) { return"array" === d.type(a); },
                isWindow: function(a) { return a && "object" === typeof a && "setInterval" in a; },
                isNumeric: function(a) { return!isNaN(parseFloat(a)) && isFinite(a); },
                type: function(a) {
                    return null ==
                        a ? "" + a : wa[db.call(a)] || "object";
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== d.type(a) || a.nodeType || d.isWindow(a))return!1;
                    try {
                        if (a.constructor && !ha.call(a, "constructor") && !ha.call(a.constructor.prototype, "isPrototypeOf"))return!1;
                    } catch (c) {
                        return!1;
                    }
                    for (var e in a);
                    return e === b || ha.call(a, e);
                },
                isEmptyObject: function(a) {
                    for (var b in a)return!1;
                    return!0;
                },
                error: function(a) { throw Error(a); },
                parseJSON: function(b) {
                    if ("string" !== typeof b || !b)return null;
                    b = d.trim(b);
                    if (a.JSON && a.JSON.parse)return a.JSON.parse(b);
                    if (l.test(b.replace(n, "@").replace(p, "]").replace(o, "")))return(new Function("return " + b))();
                    d.error("Invalid JSON: " + b);
                },
                parseXML: function(c) {
                    var e, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, e = f.parseFromString(c, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(c));
                    } catch (t) {
                        e = b;
                    }
                    (!e || !e.documentElement || e.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + c);
                    return e;
                },
                noop: function() {},
                globalEval: function(b) {
                    b && i.test(b) && (a.execScript || function(b) {
                        a.eval.call(a,
                            b);
                    })(b);
                },
                camelCase: function(a) { return a.replace(z, "ms-").replace(L, s); },
                nodeName: function(a, b) { return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase(); },
                each: function(a, c, e) {
                    var f, t = 0, g = a.length, h = g === b || d.isFunction(a);
                    if (e)
                        if (h)
                            for (f in a) {
                                if (!1 === c.apply(a[f], e))break;
                            }
                        else for (; t < g && !(!1 === c.apply(a[t++], e)););
                    else if (h)
                        for (f in a) {
                            if (!1 === c.call(a[f], f, a[f]))break;
                        }
                    else for (; t < g && !(!1 === c.call(a[t], t, a[t++])););
                    return a;
                },
                trim: ua ? function(a) { return null == a ? "" : ua.call(a); } : function(a) {
                    return null ==
                        a ? "" : a.toString().replace(k, "").replace(j, "");
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (null != a) {
                        var e = d.type(a);
                        null == a.length || "string" === e || "function" === e || "regexp" === e || d.isWindow(a) ? ia.call(c, a) : d.merge(c, a);
                    }
                    return c;
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (va)return va.call(b, a, c);
                        d = b.length;
                        for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)if (c in b && b[c] === a)return c;
                    }
                    return-1;
                },
                merge: function(a, c) {
                    var d = a.length, e = 0;
                    if ("number" === typeof c.length)for (var f = c.length; e < f; e++)a[d++] = c[e];
                    else
                        for (; c[e] !== b;)
                            a[d++] =
                                c[e++];
                    a.length = d;
                    return a;
                },
                grep: function(a, b, c) {
                    for (var d = [], e, c = !!c, f = 0, t = a.length; f < t; f++)e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d;
                },
                map: function(a, c, e) {
                    var f, t, g = [], h = 0, i = a.length;
                    if (a instanceof d || i !== b && "number" === typeof i && (0 < i && a[0] && a[i - 1] || 0 === i || d.isArray(a)))for (; h < i; h++)f = c(a[h], h, e), null != f && (g[g.length] = f);
                    else for (t in a)f = c(a[t], t, e), null != f && (g[g.length] = f);
                    return g.concat.apply([], g);
                },
                guid: 1,
                proxy: function(a, c) {
                    if ("string" === typeof c)var e = a[c], c = a, a = e;
                    if (!d.isFunction(a))return b;
                    var f = W.call(arguments, 2), e = function() { return a.apply(c, f.concat(W.call(arguments))); };
                    e.guid = a.guid = a.guid || e.guid || d.guid++;
                    return e;
                },
                access: function(a, c, e, f, t, g) {
                    var h = a.length;
                    if ("object" === typeof c) {
                        for (var i in c)d.access(a, i, c[i], f, t, e);
                        return a;
                    }
                    if (e !== b) {
                        f = !g && f && d.isFunction(e);
                        for (i = 0; i < h; i++)t(a[i], c, f ? e.call(a[i], i, t(a[i], c)) : e, g);
                        return a;
                    }
                    return h ? t(a[0], c) : b;
                },
                now: function() { return(new Date).getTime(); },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    a = u.exec(a) || r.exec(a) || D.exec(a) || 0 > a.indexOf("compatible") &&
                        I.exec(a) || [];
                    return{ browser: a[1] || "", version: a[2] || "0" };
                },
                sub: function() {

                    function a(b, c) { return new a.fn.init(b, c); }

                    d.extend(!0, a, this);
                    a.superclass = this;
                    a.fn = a.prototype = this();
                    a.fn.constructor = a;
                    a.sub = this.sub;
                    a.fn.init = function(c, e) {
                        e && e instanceof d && !(e instanceof a) && (e = a(e));
                        return d.fn.init.call(this, c, e, b);
                    };
                    a.fn.init.prototype = a.fn;
                    var b = a(q);
                    return a;
                },
                browser: {}
            });
            d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) { wa["[object " + b + "]"] = b.toLowerCase(); });
            w = d.uaMatch(w);
            if (w.browser)d.browser[w.browser] = !0, d.browser.version = w.version;
            if (d.browser.webkit)d.browser.safari = !0;
            i.test("\u00a0") && (k = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
            g = d(q);
            q.addEventListener ? T = function() {
                q.removeEventListener("DOMContentLoaded", T, !1);
                d.ready();
            } : q.attachEvent && (T = function() { "complete" === q.readyState && (q.detachEvent("onreadystatechange", T), d.ready()); });
            return d;
        }(),
        oa = {};
    i.Callbacks = function(a) {
        var a = a ? oa[a] || c(a) : {},
            d = [],
            e = [],
            f,
            g,
            h,
            k,
            j,
            m = function(b) {
                var c, e, f, g;
                for (c = 0, e = b.length; c <
                    e; c++)f = b[c], g = i.type(f), "array" === g ? m(f) : "function" === g && (!a.unique || !n.has(f)) && d.push(f);
            },
            l = function(b, c) {
                c = c || [];
                f = !a.memory || [b, c];
                g = !0;
                j = h || 0;
                h = 0;
                for (k = d.length; d && j < k; j++)
                    if (!1 === d[j].apply(b, c) && a.stopOnFalse) {
                        f = !0;
                        break;
                    }
                g = !1;
                d && (a.once ? !0 === f ? n.disable() : d = [] : e && e.length && (f = e.shift(), n.fireWith(f[0], f[1])));
            },
            n = {
                add: function() {
                    if (d) {
                        var a = d.length;
                        m(arguments);
                        g ? k = d.length : f && !0 !== f && (h = a, l(f[0], f[1]));
                    }
                    return this;
                },
                remove: function() {
                    if (d)
                        for (var b = arguments, c = 0, e = b.length; c < e; c++)
                            for (var f =
                                0; f < d.length && !(b[c] === d[f] && (g && f <= k && (k--, f <= j && j--), d.splice(f--, 1), a.unique)); f++);
                    return this;
                },
                has: function(a) {
                    if (d)for (var b = 0, c = d.length; b < c; b++)if (a === d[b])return!0;
                    return!1;
                },
                empty: function() {
                    d = [];
                    return this;
                },
                disable: function() {
                    d = e = f = b;
                    return this;
                },
                disabled: function() { return!d; },
                lock: function() {
                    e = b;
                    (!f || !0 === f) && n.disable();
                    return this;
                },
                locked: function() { return!e; },
                fireWith: function(b, c) {
                    e && (g ? a.once || e.push([b, c]) : (!a.once || !f) && l(b, c));
                    return this;
                },
                fire: function() {
                    n.fireWith(this, arguments);
                    return this;
                },
                fired: function() { return!!f; }
            };
        return n;
    };
    var ja = [].slice;
    i.extend({
        Deferred: function(a) {
            var b = i.Callbacks("once memory"),
                c = i.Callbacks("once memory"),
                d = i.Callbacks("memory"),
                e = "pending",
                f = { resolve: b, reject: c, notify: d },
                g = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() { return e; },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        h.done(a).fail(b).progress(c);
                        return this;
                    },
                    always: function() {
                        h.done.apply(h, arguments).fail.apply(h, arguments);
                        return this;
                    },
                    pipe: function(a, b, c) {
                        return i.Deferred(function(d) {
                            i.each({
                                done: [
                                    a,
                                    "resolve"
                                ],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0], e = b[1], f;
                                if (i.isFunction(c))
                                    h[a](function() {
                                        if ((f = c.apply(this, arguments)) && i.isFunction(f.promise))f.promise().then(d.resolve, d.reject, d.notify);
                                        else d[e + "With"](this === h ? d : this, [f]);
                                    });
                                else h[a](d[e]);
                            });
                        }).promise();
                    },
                    promise: function(a) {
                        if (null == a)a = g;
                        else for (var b in g)a[b] = g[b];
                        return a;
                    }
                },
                h = g.promise({}),
                k;
            for (k in f)h[k] = f[k].fire, h[k + "With"] = f[k].fireWith;
            h.done(function() { e = "resolved"; }, c.disable, d.lock).fail(function() {
                e =
                    "rejected";
            }, b.disable, d.lock);
            a && a.call(h, h);
            return h;
        },
        when: function(a) {

            function b(a) {
                return function(b) {
                    d[a] = 1 < arguments.length ? ja.call(arguments, 0) : b;
                    --h || k.resolveWith(k, d);
                };
            }

            function c(a) {
                return function(b) {
                    g[a] = 1 < arguments.length ? ja.call(arguments, 0) : b;
                    k.notifyWith(j, g);
                };
            }

            var d = ja.call(arguments, 0), e = 0, f = d.length, g = Array(f), h = f, k = 1 >= f && a && i.isFunction(a.promise) ? a : i.Deferred(), j = k.promise();
            if (1 < f) {
                for (; e < f; e++)
                    d[e] && d[e].promise && i.isFunction(d[e].promise) ? d[e].promise().then(b(e), k.reject, c(e)) :
                        --h;
                h || k.resolveWith(k, d);
            } else k !== a && k.resolveWith(k, f ? [a] : []);
            return j;
        }
    });
    i.support = function() {
        var b, c, d, e, f, g, h, k, j = q.createElement("div");
        j.setAttribute("className", "t");
        j.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        c = j.getElementsByTagName("*");
        d = j.getElementsByTagName("a")[0];
        if (!c || !c.length || !d)return{};
        e = q.createElement("select");
        f = e.appendChild(q.createElement("option"));
        c = j.getElementsByTagName("input")[0];
        b = {
            leadingWhitespace: 3 ===
                j.firstChild.nodeType,
            tbody: !j.getElementsByTagName("tbody").length,
            htmlSerialize: !!j.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === c.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== j.className,
            enctype: !!q.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        c.checked = !0;
        b.noCloneChecked = c.cloneNode(!0).checked;
        e.disabled = !0;
        b.optDisabled = !f.disabled;
        try {
            delete j.test;
        } catch (m) {
            b.deleteExpando = !1;
        }
        !j.addEventListener && j.attachEvent && j.fireEvent && (j.attachEvent("onclick", function() { b.noCloneEvent = !1; }), j.cloneNode(!0).fireEvent("onclick"));
        c = q.createElement("input");
        c.value = "t";
        c.setAttribute("type", "radio");
        b.radioValue = "t" === c.value;
        c.setAttribute("checked", "checked");
        j.appendChild(c);
        d = q.createDocumentFragment();
        d.appendChild(j.lastChild);
        b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.appendChecked = c.checked;
        d.removeChild(c);
        d.appendChild(j);
        j.innerHTML = "";
        if (a.getComputedStyle)c = q.createElement("div"), c.style.width = "0", c.style.marginRight = "0", j.style.width = "2px", j.appendChild(c), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(c, null) || { marginRight: 0 }).marginRight, 10) || 0);
        if (j.attachEvent)
            for (h in{
                submit: 1,
                change: 1,
                focusin: 1
            })c = "on" + h, k = c in j, k || (j.setAttribute(c, "return;"), k = "function" === typeof j[c]), b[h + "Bubbles"] = k;
        d.removeChild(j);
        d = e = f = c = j = c = null;
        i(function() {
            var a, c, d, e, f = q.getElementsByTagName("body")[0];
            if (f) {
                a = q.createElement("div");
                a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
                f.insertBefore(a, f.firstChild);
                j = q.createElement("div");
                a.appendChild(j);
                j.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                g = j.getElementsByTagName("td");
                k = 0 === g[0].offsetHeight;
                g[0].style.display = "";
                g[1].style.display = "none";
                b.reliableHiddenOffsets = k && 0 === g[0].offsetHeight;
                j.innerHTML = "";
                j.style.width = j.style.paddingLeft = "1px";
                i.boxModel = b.boxModel = 2 === j.offsetWidth;
                if ("undefined" !== typeof j.style.zoom)j.style.display = "inline", j.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === j.offsetWidth, j.style.display = "", j.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== j.offsetWidth;
                j.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";
                j.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                c = j.firstChild;
                d = c.firstChild;
                e = { doesNotAddBorder: 5 !== d.offsetTop, doesAddBorderForTableAndCells: 5 === c.nextSibling.firstChild.firstChild.offsetTop };
                d.style.position = "fixed";
                d.style.top = "20px";
                e.fixedPosition =
                    20 === d.offsetTop || 15 === d.offsetTop;
                d.style.position = d.style.top = "";
                c.style.overflow = "hidden";
                c.style.position = "relative";
                e.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop;
                e.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop;
                f.removeChild(a);
                j = null;
                i.extend(b, e);
            }
        });
        return b;
    }();
    var Wa = /^(?:\{.*\}|\[.*\])$/, Va = /([A-Z])/g;
    i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function(a) {
            a =
                a.nodeType ? i.cache[a[i.expando]] : a[i.expando];
            return!!a && !e(a);
        },
        data: function(a, c, d, e) {
            if (i.acceptData(a)) {
                var f;
                f = i.expando;
                var g = "string" === typeof c, h = a.nodeType, j = h ? i.cache : a, k = h ? a[f] : a[f] && f, m = "events" === c;
                if (k && j[k] && (m || e || j[k].data) || !(g && d === b)) {
                    k || (h ? a[f] = k = ++i.uuid : k = f);
                    if (!j[k] && (j[k] = {}, !h))j[k].toJSON = i.noop;
                    if ("object" === typeof c || "function" === typeof c)e ? j[k] = i.extend(j[k], c) : j[k].data = i.extend(j[k].data, c);
                    f = a = j[k];
                    if (!e) {
                        if (!a.data)a.data = {};
                        a = a.data;
                    }
                    d !== b && (a[i.camelCase(c)] = d);
                    if (m &&
                        !a[c])return f.events;
                    g ? (d = a[c], null == d && (d = a[i.camelCase(c)])) : d = a;
                    return d;
                }
            }
        },
        removeData: function(a, b, c) {
            if (i.acceptData(a)) {
                var d, f, g, h = i.expando, j = a.nodeType, k = j ? i.cache : a, m = j ? a[h] : h;
                if (k[m]) {
                    if (b && (d = c ? k[m] : k[m].data)) {
                        i.isArray(b) || (b in d ? b = [b] : (b = i.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; f < g; f++)delete d[b[f]];
                        if (!(c ? e : i.isEmptyObject)(d))return;
                    }
                    if (!c && (delete k[m].data, !e(k[m])))return;
                    i.support.deleteExpando || !k.setInterval ? delete k[m] : k[m] = null;
                    j && (i.support.deleteExpando ?
                        delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null);
                }
            }
        },
        _data: function(a, b, c) { return i.data(a, b, c, !0); },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = i.noData[a.nodeName.toLowerCase()];
                if (b)return!(!0 === b || a.getAttribute("classid") !== b);
            }
            return!0;
        }
    });
    i.fn.extend({
        data: function(a, c) {
            var e, f, g, h = null;
            if ("undefined" === typeof a) {
                if (this.length && (h = i.data(this[0]), 1 === this[0].nodeType && !i._data(this[0], "parsedAttrs"))) {
                    f = this[0].attributes;
                    for (var j = 0, k = f.length; j < k; j++)
                        g = f[j].name, 0 === g.indexOf("data-") &&
                        (g = i.camelCase(g.substring(5)), d(this[0], g, h[g]));
                    i._data(this[0], "parsedAttrs", !0);
                }
                return h;
            }
            if ("object" === typeof a)return this.each(function() { i.data(this, a); });
            e = a.split(".");
            e[1] = e[1] ? "." + e[1] : "";
            return c === b ? (h = this.triggerHandler("getData" + e[1] + "!", [e[0]]), h === b && this.length && (h = i.data(this[0], a), h = d(this[0], a, h)), h === b && e[1] ? this.data(e[0]) : h) : this.each(function() {
                var b = i(this), d = [e[0], c];
                b.triggerHandler("setData" + e[1] + "!", d);
                i.data(this, a, c);
                b.triggerHandler("changeData" + e[1] + "!", d);
            });
        },
        removeData: function(a) {
            return this.each(function() {
                i.removeData(this,
                    a);
            });
        }
    });
    i.extend({
        _mark: function(a, b) { a && (b = (b || "fx") + "mark", i._data(a, b, (i._data(a, b) || 0) + 1)); },
        _unmark: function(a, b, c) {
            !0 !== a && (c = b, b = a, a = !1);
            if (b) {
                var c = c || "fx", d = c + "mark";
                (a = a ? 0 : (i._data(b, d) || 1) - 1) ? i._data(b, d, a) : (i.removeData(b, d, !0), f(b, c, "mark"));
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a)return b = (b || "fx") + "queue", d = i._data(a, b), c && (!d || i.isArray(c) ? d = i._data(a, b, i.makeArray(c)) : d.push(c)), d || [];
        },
        dequeue: function(a, b) {
            var b = b || "fx", c = i.queue(a, b), d = c.shift(), e = {};
            "inprogress" === d && (d = c.shift());
            d &&
            ("fx" === b && c.unshift("inprogress"), i._data(a, b + ".run", e), d.call(a, function() { i.dequeue(a, b); }, e));
            c.length || (i.removeData(a, b + "queue " + b + ".run", !0), f(a, b, "queue"));
        }
    });
    i.fn.extend({
        queue: function(a, c) {
            "string" !== typeof a && (c = a, a = "fx");
            return c === b ? i.queue(this[0], a) : this.each(function() {
                var b = i.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && i.dequeue(this, a);
            });
        },
        dequeue: function(a) { return this.each(function() { i.dequeue(this, a); }); },
        delay: function(a, b) {
            a = i.fx ? i.fx.speeds[a] || a : a;
            return this.queue(b || "fx",
                function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() { clearTimeout(d); };
                });
        },
        clearQueue: function(a) { return this.queue(a || "fx", []); },
        promise: function(a) {

            function c() { --g || d.resolveWith(e, [e]); }

            "string" !== typeof a && (a = b);
            for (var a = a || "fx", d = i.Deferred(), e = this, f = e.length, g = 1, h = a + "defer", j = a + "queue", a = a + "mark", k; f--;)if (k = i.data(e[f], h, b, !0) || (i.data(e[f], j, b, !0) || i.data(e[f], a, b, !0)) && i.data(e[f], h, i.Callbacks("once memory"), !0))g++, k.add(c);
            c();
            return d.promise();
        }
    });
    var xa = /[\n\t\r]/g,
        aa = /\s+/,
        eb = /\r/g,
        fb = /^(?:button|input)$/i,
        gb = /^(?:button|input|object|select|textarea)$/i,
        hb = /^a(?:rea)?$/i,
        ya = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        za = i.support.getSetAttribute,
        B,
        Aa,
        Ba;
    i.fn.extend({
        attr: function(a, b) { return i.access(this, a, b, !0, i.attr); },
        removeAttr: function(a) { return this.each(function() { i.removeAttr(this, a); }); },
        prop: function(a, b) { return i.access(this, a, b, !0, i.prop); },
        removeProp: function(a) {
            a = i.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] =
                        b, delete this[a];
                } catch (c) {
                }
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (i.isFunction(a))return this.each(function(b) { i(this).addClass(a.call(this, b, this.className)); });
            if (a && "string" === typeof a) {
                b = a.split(aa);
                for (c = 0, d = this.length; c < d; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (!e.className && 1 === b.length)e.className = a;
                        else {
                            f = " " + e.className + " ";
                            for (g = 0, h = b.length; g < h; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = i.trim(f);
                        }
            }
            return this;
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, j;
            if (i.isFunction(a))
                return this.each(function(b) {
                    i(this).removeClass(a.call(this,
                        b, this.className));
                });
            if (a && "string" === typeof a || a === b) {
                c = (a || "").split(aa);
                for (d = 0, e = this.length; d < e; d++)
                    if (f = this[d], 1 === f.nodeType && f.className)
                        if (a) {
                            g = (" " + f.className + " ").replace(xa, " ");
                            for (h = 0, j = c.length; h < j; h++)g = g.replace(" " + c[h] + " ", " ");
                            f.className = i.trim(g);
                        } else f.className = "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a, d = "boolean" === typeof b;
            return i.isFunction(a) ? this.each(function(c) { i(this).toggleClass(a.call(this, c, this.className, b), b); }) : this.each(function() {
                if ("string" ===
                    c)for (var e, f = 0, g = i(this), h = b, j = a.split(aa); e = j[f++];)h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else if ("undefined" === c || "boolean" === c)this.className && i._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : i._data(this, "__className__") || "";
            });
        },
        hasClass: function(a) {
            for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(xa, " ").indexOf(a))return!0;
            return!1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (arguments.length)
                return e =
                    i.isFunction(a), this.each(function(d) {
                    var f = i(this);
                    if (1 === this.nodeType && (d = e ? a.call(this, d, f.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : i.isArray(d) && (d = i.map(d, function(a) { return null == a ? "" : a + ""; })), c = i.valHooks[this.nodeName.toLowerCase()] || i.valHooks[this.type], !c || !("set" in c) || c.set(this, d, "value") === b))this.value = d;
                });
            if (f) {
                if ((c = i.valHooks[f.nodeName.toLowerCase()] || i.valHooks[f.type]) && "get" in c && (d = c.get(f, "value")) !== b)return d;
                d = f.value;
                return"string" === typeof d ? d.replace(eb, "") : null ==
                    d ? "" : d;
            }
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return!b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.selectedIndex, e = [], f = a.options, g = "select-one" === a.type;
                    if (0 > d)return null;
                    a = g ? d : 0;
                    for (c = g ? d + 1 : f.length; a < c; a++)
                        if (b = f[a], b.selected && (i.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !i.nodeName(b.parentNode, "optgroup"))) {
                            b = i(b).val();
                            if (g)return b;
                            e.push(b);
                        }
                    return g && !e.length && f.length ? i(f[d]).val() :
                        e;
                },
                set: function(a, b) {
                    var c = i.makeArray(b);
                    i(a).find("option").each(function() { this.selected = 0 <= i.inArray(i(this).val(), c); });
                    if (!c.length)a.selectedIndex = -1;
                    return c;
                }
            }
        },
        attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 },
        attr: function(a, c, d, e) {
            var f, g, h = a.nodeType;
            if (a && !(3 === h || 8 === h || 2 === h)) {
                if (e && c in i.attrFn)return i(a)[c](d);
                if ("undefined" === typeof a.getAttribute)return i.prop(a, c, d);
                if (e = 1 !== h || !i.isXMLDoc(a))c = c.toLowerCase(), g = i.attrHooks[c] || (ya.test(c) ? Aa : B);
                if (d !==
                    b)
                    if (null === d)i.removeAttr(a, c);
                    else {
                        if (g && "set" in g && e && (f = g.set(a, d, c)) !== b)return f;
                        a.setAttribute(c, "" + d);
                        return d;
                    }
                else {
                    if (g && "get" in g && e && null !== (f = g.get(a, c)))return f;
                    f = a.getAttribute(c);
                    return null === f ? b : f;
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType) {
                d = b.toLowerCase().split(aa);
                for (f = d.length; g < f; g++)if (e = d[g])c = i.propFix[e] || e, i.attr(a, e, ""), a.removeAttribute(za ? e : c), ya.test(e) && c in a && (a[c] = !1);
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (fb.test(a.nodeName) && a.parentNode)i.error("type property can't be changed");
                    else if (!i.support.radioValue && "radio" === b && i.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        if (c)a.value = c;
                        return b;
                    }
                }
            },
            value: {
                get: function(a, b) { return B && i.nodeName(a, "button") ? B.get(a, b) : b in a ? a.value : null; },
                set: function(a, b, c) {
                    if (B && i.nodeName(a, "button"))return B.set(a, b, c);
                    a.value = b;
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && !(3 === g || 8 === g || 2 === g)) {
                if (1 !== g || !i.isXMLDoc(a))c = i.propFix[c] || c, f = i.propHooks[c];
                return d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : gb.test(a.nodeName) || hb.test(a.nodeName) && a.href ? 0 : b;
                }
            }
        }
    });
    i.attrHooks.tabindex = i.propHooks.tabIndex;
    Aa = {
        get: function(a, c) {
            var d, e = i.prop(a, c);
            return!0 === e || "boolean" !== typeof e && (d = a.getAttributeNode(c)) && !1 !== d.nodeValue ? c.toLowerCase() : b;
        },
        set: function(a, b, c) {
            !1 === b ? i.removeAttr(a, c) : (b = i.propFix[c] || c, b in a && (a[b] = !0), a.setAttribute(c, c.toLowerCase()));
            return c;
        }
    };
    if (!za)
        Ba = { name: !0, id: !0 }, B = i.valHooks.button = {
            get: function(a, c) {
                var d;
                return(d = a.getAttributeNode(c)) && (Ba[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b;
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                d || (d = q.createAttribute(c), a.setAttributeNode(d));
                return d.nodeValue = b + "";
            }
        }, i.attrHooks.tabindex.set = B.set, i.each(["width", "height"], function(a, b) { i.attrHooks[b] = i.extend(i.attrHooks[b], { set: function(a, c) { if ("" === c)return a.setAttribute(b, "auto"), c; } }); }), i.attrHooks.contenteditable = {
            get: B.get,
            set: function(a, b, c) {
                "" === b && (b = "false");
                B.set(a, b, c);
            }
        };
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(a, c) {
        i.attrHooks[c] = i.extend(i.attrHooks[c], {
            get: function(a) {
                a = a.getAttribute(c, 2);
                return null === a ? b : a;
            }
        });
    });
    if (!i.support.style)
        i.attrHooks.style =
        { get: function(a) { return a.style.cssText.toLowerCase() || b; }, set: function(a, b) { return a.style.cssText = "" + b; } };
    if (!i.support.optSelected)i.propHooks.selected = i.extend(i.propHooks.selected, { get: function() { return null; } });
    if (!i.support.enctype)i.propFix.enctype = "encoding";
    i.support.checkOn || i.each(["radio", "checkbox"], function() { i.valHooks[this] = { get: function(a) { return null === a.getAttribute("value") ? "on" : a.value; } }; });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(a,
                b) { if (i.isArray(b))return a.checked = 0 <= i.inArray(i(a).val(), b); }
        });
    });
    var ka = /^(?:textarea|input|select)$/i,
        Ca = /^([^\.]*)?(?:\.(.+))?$/,
        ib = /\bhover(\.\S+)?\b/,
        jb = /^key/,
        kb = /^(?:mouse|contextmenu)|click/,
        Da = /^(?:focusinfocus|focusoutblur)$/,
        lb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        mb = function(a) {
            if (a = lb.exec(a))a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)");
            return a;
        },
        Ea = function(a) { return i.event.special.hover ? a : a.replace(ib, "mouseenter$1 mouseleave$1"); };
    i.event = {
        add: function(a,
            c, d, e, f) {
            var g, h, j, k, m, l, n, p, o;
            if (!(3 === a.nodeType || 8 === a.nodeType || !c || !d || !(g = i._data(a)))) {
                if (d.handler)n = d, d = n.handler;
                if (!d.guid)d.guid = i.guid++;
                j = g.events;
                if (!j)g.events = j = {};
                h = g.handle;
                if (!h)g.handle = h = function(a) { return"undefined" !== typeof i && (!a || i.event.triggered !== a.type) ? i.event.dispatch.apply(h.elem, arguments) : b; }, h.elem = a;
                c = i.trim(Ea(c)).split(" ");
                for (g = 0; g < c.length; g++) {
                    k = Ca.exec(c[g]) || [];
                    m = k[1];
                    l = (k[2] || "").split(".").sort();
                    o = i.event.special[m] || {};
                    m = (f ? o.delegateType : o.bindType) ||
                        m;
                    o = i.event.special[m] || {};
                    k = i.extend({ type: m, origType: k[1], data: e, handler: d, guid: d.guid, selector: f, quick: mb(f), namespace: l.join(".") }, n);
                    p = j[m];
                    if (!p && (p = j[m] = [], p.delegateCount = 0, !o.setup || !1 === o.setup.call(a, e, l, h)))a.addEventListener ? a.addEventListener(m, h, !1) : a.attachEvent && a.attachEvent("on" + m, h);
                    if (o.add && (o.add.call(a, k), !k.handler.guid))k.handler.guid = d.guid;
                    f ? p.splice(p.delegateCount++, 0, k) : p.push(k);
                    i.event.global[m] = !0;
                }
                a = null;
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f = i.hasData(a) &&
                    i._data(a),
                g,
                h,
                j,
                k,
                m,
                l,
                n,
                p,
                o,
                u;
            if (f && (n = f.events)) {
                b = i.trim(Ea(b || "")).split(" ");
                for (g = 0; g < b.length; g++)
                    if (h = Ca.exec(b[g]) || [], j = k = h[1], h = h[2], j) {
                        p = i.event.special[j] || {};
                        j = (d ? p.delegateType : p.bindType) || j;
                        o = n[j] || [];
                        m = o.length;
                        h = h ? RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (l = 0; l < o.length; l++)
                            if (u = o[l], (e || k === u.origType) && (!c || c.guid === u.guid) && (!h || h.test(u.namespace)) && (!d || d === u.selector || "**" === d && u.selector))
                                o.splice(l--, 1), u.selector && o.delegateCount--,
                                    p.remove && p.remove.call(a, u);
                        0 === o.length && m !== o.length && ((!p.teardown || !1 === p.teardown.call(a, h)) && i.removeEvent(a, j, f.handle), delete n[j]);
                    } else for (j in n)i.event.remove(a, j + b[g], c, d, !0);
                if (i.isEmptyObject(n)) {
                    if (b = f.handle)b.elem = null;
                    i.removeData(a, ["events", "handle"], !0);
                }
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function(c, d, e, f) {
            if (!e || !(3 === e.nodeType || 8 === e.nodeType)) {
                var g = c.type || c, h = [], j, k, m, l, n;
                if (!Da.test(g + i.event.triggered) && (0 <= g.indexOf("!") && (g = g.slice(0, -1), j =
                    !0), 0 <= g.indexOf(".") && (h = g.split("."), g = h.shift(), h.sort()), e && !i.event.customEvent[g] || i.event.global[g]))
                    if (c = "object" === typeof c ? c[i.expando] ? c : new i.Event(g, c) : new i.Event(g), c.type = g, c.isTrigger = !0, c.exclusive = j, c.namespace = h.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, j = 0 > g.indexOf(":") ? "on" + g : "", e) {
                        c.result = b;
                        if (!c.target)c.target = e;
                        d = null != d ? i.makeArray(d) : [];
                        d.unshift(c);
                        m = i.event.special[g] || {};
                        if (!(m.trigger && !1 === m.trigger.apply(e, d))) {
                            n =
                            [[e, m.bindType || g]];
                            if (!f && !m.noBubble && !i.isWindow(e)) {
                                l = m.delegateType || g;
                                h = Da.test(l + g) ? e : e.parentNode;
                                for (k = null; h; h = h.parentNode)n.push([h, l]), k = h;
                                k && k === e.ownerDocument && n.push([k.defaultView || k.parentWindow || a, l]);
                            }
                            for (k = 0; k < n.length && !c.isPropagationStopped(); k++)h = n[k][0], c.type = n[k][1], (l = (i._data(h, "events") || {})[c.type] && i._data(h, "handle")) && l.apply(h, d), (l = j && h[j]) && i.acceptData(h) && !1 === l.apply(h, d) && c.preventDefault();
                            c.type = g;
                            if (!f && !c.isDefaultPrevented() && (!m._default || !1 === m._default.apply(e.ownerDocument,
                                d)) && !("click" === g && i.nodeName(e, "a")) && i.acceptData(e))if (j && e[g] && ("focus" !== g && "blur" !== g || 0 !== c.target.offsetWidth) && !i.isWindow(e))(k = e[j]) && (e[j] = null), i.event.triggered = g, e[g](), i.event.triggered = b, k && (e[j] = k);
                            return c.result;
                        }
                    } else for (k in e = i.cache, e)e[k].events && e[k].events[g] && i.event.trigger(c, d, e[k].handle.elem, !0);
            }
        },
        dispatch: function(c) {
            var c = i.event.fix(c || a.event),
                d = (i._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                f = [].slice.call(arguments, 0),
                g = !c.exclusive && !c.namespace,
                h = [],
                j,
                k,
                m,
                l,
                n,
                p,
                o;
            f[0] = c;
            c.delegateTarget = this;
            if (e && !c.target.disabled && !(c.button && "click" === c.type)) {
                m = i(this);
                m.context = this.ownerDocument || this;
                for (k = c.target; k != this; k = k.parentNode || this) {
                    n = {};
                    p = [];
                    m[0] = k;
                    for (j = 0; j < e; j++) {
                        l = d[j];
                        o = l.selector;
                        if (n[o] === b) {
                            var u = n, r = o, q;
                            if (l.quick) {
                                q = l.quick;
                                var D = k.attributes || {};
                                q = (!q[1] || k.nodeName.toLowerCase() === q[1]) && (!q[2] || (D.id || {}).value === q[2]) && (!q[3] || q[3].test((D["class"] || {}).value));
                            } else q = m.is(o);
                            u[r] = q;
                        }
                        n[o] && p.push(l);
                    }
                    p.length && h.push({
                        elem: k,
                        matches: p
                    });
                }
            }
            d.length > e && h.push({ elem: this, matches: d.slice(e) });
            for (j = 0; j < h.length && !c.isPropagationStopped(); j++) {
                e = h[j];
                c.currentTarget = e.elem;
                for (d = 0; d < e.matches.length && !c.isImmediatePropagationStopped(); d++)if (l = e.matches[d], g || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace))if (c.data = l.data, c.handleObj = l, l = ((i.event.special[l.origType] || {}).handle || l.handler).apply(e.elem, f), l !== b)c.result = l, !1 === l && (c.preventDefault(), c.stopPropagation());
            }
            return c.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                if (null == a.which)a.which = null != b.charCode ? b.charCode : b.keyCode;
                return a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f = c.button, g = c.fromElement;
                if (null == a.pageX && null != c.clientX)
                    d = a.target.ownerDocument || q, e = d.documentElement, d = d.body, a.pageX = c.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft ||
                        d && d.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0);
                if (!a.relatedTarget && g)a.relatedTarget = g === a.target ? c.toElement : g;
                if (!a.which && f !== b)a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0;
                return a;
            }
        },
        fix: function(a) {
            if (a[i.expando])return a;
            var c, d, e = a, f = i.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props, a = i.Event(e);
            for (c = g.length; c;)d = g[--c], a[d] = e[d];
            if (!a.target)a.target = e.srcElement || q;
            if (3 === a.target.nodeType)a.target = a.target.parentNode;
            if (a.metaKey === b)a.metaKey = a.ctrlKey;
            return f.filter ? f.filter(a, e) : a;
        },
        special: { ready: { setup: i.bindReady }, load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(a, b, c) { if (i.isWindow(this))this.onbeforeunload = c; }, teardown: function(a, b) { if (this.onbeforeunload === b)this.onbeforeunload = null; } } },
        simulate: function(a, b, c, d) {
            a = i.extend(new i.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? i.event.trigger(a, null, b) : i.event.dispatch.call(b, a);
            a.isDefaultPrevented() &&
                c.preventDefault();
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = q.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1); } : function(a, b, c) { a.detachEvent && a.detachEvent("on" + b, c); };
    i.Event = function(a, b) {
        if (!(this instanceof i.Event))return new i.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? h : g) : this.type = a;
        b && i.extend(this, b);
        this.timeStamp = a &&
            a.timeStamp || i.now();
        this[i.expando] = !0;
    };
    i.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = h;
            var a = this.originalEvent;
            if (a)a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        },
        stopPropagation: function() {
            this.isPropagationStopped = h;
            var a = this.originalEvent;
            if (a)a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = h;
            this.stopPropagation();
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) {
        i.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c = a.relatedTarget, d = a.handleObj, e;
                if (!c || c !== this && !i.contains(this, c))a.type = d.origType, e = d.handler.apply(this, arguments), a.type = b;
                return e;
            }
        };
    });
    if (!i.support.submitBubbles)
        i.event.special.submit = {
            setup: function() {
                if (i.nodeName(this, "form"))return!1;
                i.event.add(this, "click._submit keypress._submit", function(a) {
                    a = a.target;
                    if ((a = i.nodeName(a, "input") || i.nodeName(a,
                        "button") ? a.form : b) && !a._submit_attached)i.event.add(a, "submit._submit", function(a) { this.parentNode && !a.isTrigger && i.event.simulate("submit", this.parentNode, a, !0); }), a._submit_attached = !0;
                });
            },
            teardown: function() {
                if (i.nodeName(this, "form"))return!1;
                i.event.remove(this, "._submit");
            }
        };
    if (!i.support.changeBubbles)
        i.event.special.change = {
            setup: function() {
                if (ka.test(this.nodeName)) {
                    if ("checkbox" === this.type || "radio" === this.type)
                        i.event.add(this, "propertychange._change", function(a) {
                            if ("checked" === a.originalEvent.propertyName)
                                this._just_changed =
                                    !0;
                        }), i.event.add(this, "click._change", function(a) { if (this._just_changed && !a.isTrigger)this._just_changed = !1, i.event.simulate("change", this, a, !0); });
                    return!1;
                }
                i.event.add(this, "beforeactivate._change", function(a) {
                    a = a.target;
                    if (ka.test(a.nodeName) && !a._change_attached)i.event.add(a, "change._change", function(a) { this.parentNode && !a.isSimulated && !a.isTrigger && i.event.simulate("change", this.parentNode, a, !0); }), a._change_attached = !0;
                });
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger ||
                    "radio" !== b.type && "checkbox" !== b.type)return a.handleObj.handler.apply(this, arguments);
            },
            teardown: function() {
                i.event.remove(this, "._change");
                return ka.test(this.nodeName);
            }
        };
    i.support.focusinBubbles || i.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = 0, d = function(a) { i.event.simulate(b, a.target, i.event.fix(a), !0); };
        i.event.special[b] = { setup: function() { 0 === c++ && q.addEventListener(a, d, !0); }, teardown: function() { 0 === --c && q.removeEventListener(a, d, !0); } };
    });
    i.fn.extend({
        on: function(a, c, d, e, f) {
            var h,
                j;
            if ("object" === typeof a) {
                "string" !== typeof c && (d = c, c = b);
                for (j in a)this.on(j, c, d, a[j], f);
                return this;
            }
            null == d && null == e ? (e = c, d = c = b) : null == e && ("string" === typeof c ? (e = d, d = b) : (e = d, d = c, c = b));
            if (!1 === e)e = g;
            else if (!e)return this;
            if (1 === f)
                h = e, e = function(a) {
                    i().off(a);
                    return h.apply(this, arguments);
                }, e.guid = h.guid || (h.guid = i.guid++);
            return this.each(function() { i.event.add(this, a, e, d, c); });
        },
        one: function(a, b, c, d) { return this.on.call(this, a, b, c, d, 1); },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e =
                    a.handleObj;
                i(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this;
            }
            if ("object" === typeof a) {
                for (e in a)this.off(e, c, a[e]);
                return this;
            }
            if (!1 === c || "function" === typeof c)d = c, c = b;
            !1 === d && (d = g);
            return this.each(function() { i.event.remove(this, a, d, c); });
        },
        bind: function(a, b, c) { return this.on(a, null, b, c); },
        unbind: function(a, b) { return this.off(a, null, b); },
        live: function(a, b, c) {
            i(this.context).on(a, this.selector, b, c);
            return this;
        },
        die: function(a, b) {
            i(this.context).off(a,
                this.selector || "**", b);
            return this;
        },
        delegate: function(a, b, c, d) { return this.on(b, a, c, d); },
        undelegate: function(a, b, c) { return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c); },
        trigger: function(a, b) { return this.each(function() { i.event.trigger(a, b, this); }); },
        triggerHandler: function(a, b) { if (this[0])return i.event.trigger(a, b, this[0], !0); },
        toggle: function(a) {
            var b = arguments,
                c = a.guid || i.guid++,
                d = 0,
                e = function(c) {
                    var e = (i._data(this, "lastToggle" + a.guid) || 0) % d;
                    i._data(this, "lastToggle" + a.guid, e + 1);
                    c.preventDefault();
                    return b[e].apply(this, arguments) || !1;
                };
            for (e.guid = c; d < b.length;)b[d++].guid = c;
            return this.click(e);
        },
        hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a); }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        i.fn[b] = function(a, c) {
            null == c && (c = a, a = null);
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
        };
        i.attrFn && (i.attrFn[b] = !0);
        if (jb.test(b))i.event.fixHooks[b] = i.event.keyHooks;
        if (kb.test(b))i.event.fixHooks[b] = i.event.mouseHooks;
    });
    (function() {

        function a(b, c, d, f, g, h) {
            for (var g = 0, i = f.length; g < i; g++) {
                var j = f[g];
                if (j) {
                    for (var k = !1, j = j[b]; j;) {
                        if (j[e] === d) {
                            k = f[j.sizset];
                            break;
                        }
                        if (1 === j.nodeType && !h)j[e] = d, j.sizset = g;
                        if (j.nodeName.toLowerCase() === c) {
                            k = j;
                            break;
                        }
                        j = j[b];
                    }
                    f[g] = k;
                }
            }
        }

        function c(a, b, d, f, g, h) {
            for (var g = 0, i = f.length; g < i; g++) {
                var j = f[g];
                if (j) {
                    for (var k = !1, j = j[a]; j;) {
                        if (j[e] === d) {
                            k = f[j.sizset];
                            break;
                        }
                        if (1 ===
                            j.nodeType) {
                            if (!h)j[e] = d, j.sizset = g;
                            if ("string" !== typeof b) {
                                if (j === b) {
                                    k = !0;
                                    break;
                                }
                            } else if (0 < n.filter(b, [j]).length) {
                                k = j;
                                break;
                            }
                        }
                        j = j[a];
                    }
                    f[g] = k;
                }
            }
        }

        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = "sizcache" + (Math.random() + "").replace(".", ""), f = 0, g = Object.prototype.toString, h = !1, j = !0, k = /\\/g, m = /\r\n/g, l = /\W/;
        [0, 0].sort(function() {
            j = !1;
            return 0;
        });
        var n = function(a, b, c, e) {
            var c = c || [], f = b = b || q;
            if (1 !== b.nodeType && 9 !==
                b.nodeType)return[];
            if (!a || "string" !== typeof a)return c;
            var h, i, j, k, t, m = !0, l = n.isXML(b), v = [], O = a;
            do
                if (d.exec(""), h = d.exec(O))
                    if (O = h[3], v.push(h[1]), h[2]) {
                        k = h[3];
                        break;
                    }
            while (h);
            if (1 < v.length && u.exec(a))
                if (2 === v.length && o.relative[v[0]])i = w(v[0] + v[1], b, e);
                else for (i = o.relative[v[0]] ? [b] : n(v.shift(), b); v.length;)a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
            else if (!e && 1 < v.length && 9 === b.nodeType && !l && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (h = n.find(v.shift(), b, l), b = h.expr ? n.filter(h.expr,
                h.set)[0] : h.set[0]), b) {
                h = e ? { expr: v.pop(), set: I(e) } : n.find(v.pop(), 1 === v.length && ("~" === v[0] || "+" === v[0]) && b.parentNode ? b.parentNode : b, l);
                i = h.expr ? n.filter(h.expr, h.set) : h.set;
                for (0 < v.length ? j = I(i) : m = !1; v.length;)h = t = v.pop(), o.relative[t] ? h = v.pop() : t = "", null == h && (h = b), o.relative[t](j, h, l);
            } else j = [];
            j || (j = i);
            j || n.error(t || a);
            if ("[object Array]" === g.call(j))
                if (m)
                    if (b && 1 === b.nodeType)for (a = 0; null != j[a]; a++)j[a] && (!0 === j[a] || 1 === j[a].nodeType && n.contains(b, j[a])) && c.push(i[a]);
                    else
                        for (a = 0; null != j[a]; a++)
                            j[a] &&
                                1 === j[a].nodeType && c.push(i[a]);
                else c.push.apply(c, j);
            else I(j, c);
            k && (n(k, f, c, e), n.uniqueSort(c));
            return c;
        };
        n.uniqueSort = function(a) {
            if (z && (h = j, a.sort(z), h))for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1);
            return a;
        };
        n.matches = function(a, b) { return n(a, null, null, b); };
        n.matchesSelector = function(a, b) { return 0 < n(b, null, null, [a]).length; };
        n.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a)return[];
            for (e = 0, f = o.order.length; e < f; e++)
                if (h = o.order[e], g = o.leftMatch[h].exec(a))
                    if (i = g[1], g.splice(1, 1), "\\" !==
                        i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(k, ""), d = o.find[h](g, b, c), null != d)) {
                        a = a.replace(o.match[h], "");
                        break;
                    }
            d || (d = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
            return{ set: d, expr: a };
        };
        n.filter = function(a, c, d, e) {
            for (var f, g, h, i, j, k, t, m, l = a, v = [], O = c, K = c && c[0] && n.isXML(c[0]); a && c.length;) {
                for (h in o.filter)
                    if (null != (f = o.leftMatch[h].exec(a)) && f[2])
                        if (k = o.filter[h], j = f[1], g = !1, f.splice(1, 1), "\\" !== j.substr(j.length - 1)) {
                            O === v && (v = []);
                            if (o.preFilter[h])
                                if (f = o.preFilter[h](f,
                                    O, d, v, e, K)) {
                                    if (!0 === f)continue;
                                } else g = i = !0;
                            if (f)for (t = 0; null != (j = O[t]); t++)j && (i = k(j, f, t, O), m = e ^ i, d && null != i ? m ? g = !0 : O[t] = !1 : m && (v.push(j), g = !0));
                            if (i !== b) {
                                d || (O = v);
                                a = a.replace(o.match[h], "");
                                if (!g)return[];
                                break;
                            }
                        }
                if (a === l)
                    if (null == g)n.error(a);
                    else break;
                l = a;
            }
            return O;
        };
        n.error = function(a) { throw Error("Syntax error, unrecognized expression: " + a); };
        var p = n.getText = function(a) {
                var b, c;
                b = a.nodeType;
                var d = "";
                if (b)
                    if (1 === b || 9 === b) {
                        if ("string" === typeof a.textContent)return a.textContent;
                        if ("string" === typeof a.innerText)
                            return a.innerText.replace(m,
                                "");
                        for (a = a.firstChild; a; a = a.nextSibling)d += p(a);
                    } else {
                        if (3 === b || 4 === b)return a.nodeValue;
                    }
                else for (b = 0; c = a[b]; b++)8 !== c.nodeType && (d += p(c));
                return d;
            },
            o = n.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: { "class": "className", "for": "htmlFor" },
                attrHandle: { href: function(a) { return a.getAttribute("href"); }, type: function(a) { return a.getAttribute("type"); } },
                relative: {
                    "+": function(a, b) {
                        var c = "string" === typeof b, d = c && !l.test(b), c = c && !d;
                        d && (b = b.toLowerCase());
                        for (var d = 0, e = a.length, f; d < e; d++)
                            if (f = a[d]) {
                                for (; (f = f.previousSibling) && 1 !== f.nodeType;);
                                a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b;
                            }
                        c && n.filter(b, a, !0);
                    },
                    ">": function(a, b) {
                        var c, d = "string" === typeof b, e = 0, f = a.length;
                        if (d && !l.test(b))
                            for (b = b.toLowerCase(); e < f; e++) {
                                if (c = a[e])c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1;
                            }
                        else {
                            for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && n.filter(b, a, !0);
                        }
                    },
                    "": function(b, d, e) {
                        var g, h = f++, i = c;
                        "string" === typeof d && !l.test(d) && (g = d = d.toLowerCase(), i = a);
                        i("parentNode", d, h, b, g, e);
                    },
                    "~": function(b, d, e) {
                        var g, h = f++, i = c;
                        "string" ===
                            typeof d && !l.test(d) && (g = d = d.toLowerCase(), i = a);
                        i("previousSibling", d, h, b, g, e);
                    }
                },
                find: {
                    ID: function(a, b, c) { if ("undefined" !== typeof b.getElementById && !c)return(a = b.getElementById(a[1])) && a.parentNode ? [a] : []; },
                    NAME: function(a, b) {
                        if ("undefined" !== typeof b.getElementsByName) {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return 0 === c.length ? null : c;
                        }
                    },
                    TAG: function(a, b) { if ("undefined" !== typeof b.getElementsByTagName)return b.getElementsByTagName(a[1]); }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(k, "") + " ";
                        if (f)return a;
                        for (var f = 0, g; null != (g = b[f]); f++)g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
                        return!1;
                    },
                    ID: function(a) { return a[1].replace(k, ""); },
                    TAG: function(a) { return a[1].replace(k, "").toLowerCase(); },
                    CHILD: function(a) {
                        if ("nth" === a[1]) {
                            a[2] || n.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" ||
                                !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0;
                            a[3] = b[3] - 0;
                        } else a[2] && n.error(a[0]);
                        a[0] = f++;
                        return a;
                    },
                    ATTR: function(a, b, c, d, e, f) {
                        b = a[1] = a[1].replace(k, "");
                        !f && o.attrMap[b] && (a[1] = o.attrMap[b]);
                        a[4] = (a[4] || a[5] || "").replace(k, "");
                        "~=" === a[2] && (a[4] = " " + a[4] + " ");
                        return a;
                    },
                    PSEUDO: function(a, b, c, e, f) {
                        if ("not" === a[1])
                            if (1 < (d.exec(a[3]) || "").length || /^\w/.test(a[3]))a[3] = n(a[3], null, null, b);
                            else return a = n.filter(a[3], b, c, 1 ^ f), c || e.push.apply(e, a), !1;
                        else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0]))return!0;
                        return a;
                    },
                    POS: function(a) {
                        a.unshift(!0);
                        return a;
                    }
                },
                filters: {
                    enabled: function(a) { return!1 === a.disabled && "hidden" !== a.type; },
                    disabled: function(a) { return!0 === a.disabled; },
                    checked: function(a) { return!0 === a.checked; },
                    selected: function(a) { return!0 === a.selected; },
                    parent: function(a) { return!!a.firstChild; },
                    empty: function(a) { return!a.firstChild; },
                    has: function(a, b, c) { return!!n(c[3], a).length; },
                    header: function(a) { return/h\d/i.test(a.nodeName); },
                    text: function(a) {
                        var b = a.getAttribute("type"), c = a.type;
                        return"input" === a.nodeName.toLowerCase() &&
                            "text" === c && (b === c || null === b);
                    },
                    radio: function(a) { return"input" === a.nodeName.toLowerCase() && "radio" === a.type; },
                    checkbox: function(a) { return"input" === a.nodeName.toLowerCase() && "checkbox" === a.type; },
                    file: function(a) { return"input" === a.nodeName.toLowerCase() && "file" === a.type; },
                    password: function(a) { return"input" === a.nodeName.toLowerCase() && "password" === a.type; },
                    submit: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return("input" === b || "button" === b) && "submit" === a.type;
                    },
                    image: function(a) {
                        return"input" === a.nodeName.toLowerCase() &&
                            "image" === a.type;
                    },
                    reset: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return("input" === b || "button" === b) && "reset" === a.type;
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return"input" === b && "button" === a.type || "button" === b;
                    },
                    input: function(a) { return/input|select|textarea|button/i.test(a.nodeName); },
                    focus: function(a) { return a === a.ownerDocument.activeElement; }
                },
                setFilters: {
                    first: function(a, b) { return 0 === b; },
                    last: function(a, b, c, d) { return b === d.length - 1; },
                    even: function(a, b) { return 0 === b % 2; },
                    odd: function(a, b) {
                        return 1 ===
                            b % 2;
                    },
                    lt: function(a, b, c) { return b < c[3] - 0; },
                    gt: function(a, b, c) { return b > c[3] - 0; },
                    nth: function(a, b, c) { return c[3] - 0 === b; },
                    eq: function(a, b, c) { return c[3] - 0 === b; }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1], f = o.filters[e];
                        if (f)return f(a, c, b, d);
                        if ("contains" === e)return 0 <= (a.textContent || a.innerText || p([a]) || "").indexOf(b[3]);
                        if ("not" === e) {
                            b = b[3];
                            c = 0;
                            for (d = b.length; c < d; c++)if (b[c] === a)return!1;
                            return!0;
                        }
                        n.error(e);
                    },
                    CHILD: function(a, b) {
                        var c, d, f, g, h, i;
                        c = b[1];
                        i = a;
                        switch (c) {
                        case "only":
                        case "first":
                            for (; i = i.previousSibling;)
                                if (1 ===
                                    i.nodeType)return!1;
                            if ("first" === c)return!0;
                            i = a;
                        case "last":
                            for (; i = i.nextSibling;)if (1 === i.nodeType)return!1;
                            return!0;
                        case "nth":
                            c = b[2];
                            d = b[3];
                            if (1 === c && 0 === d)return!0;
                            f = b[0];
                            if ((g = a.parentNode) && (g[e] !== f || !a.nodeIndex)) {
                                h = 0;
                                for (i = g.firstChild; i; i = i.nextSibling)if (1 === i.nodeType)i.nodeIndex = ++h;
                                g[e] = f;
                            }
                            i = a.nodeIndex - d;
                            return 0 === c ? 0 === i : 0 === i % c && 0 <= i / c;
                        }
                    },
                    ID: function(a, b) { return 1 === a.nodeType && a.getAttribute("id") === b; },
                    TAG: function(a, b) {
                        return"*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() ===
                            b;
                    },
                    CLASS: function(a, b) { return-1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b); },
                    ATTR: function(a, b) {
                        var c = b[1], c = n.attr ? n.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c), d = c + "", e = b[2], f = b[4];
                        return null == c ? "!=" === e : !e && n.attr ? null != c : "=" === e ? d === f : "*=" === e ? 0 <= d.indexOf(f) : "~=" === e ? 0 <= (" " + d + " ").indexOf(f) : !f ? d && !1 !== c : "!=" === e ? d !== f : "^=" === e ? 0 === d.indexOf(f) : "$=" === e ? d.substr(d.length - f.length) === f : "|=" === e ? d === f || d.substr(0, f.length + 1) === f + "-" : !1;
                    },
                    POS: function(a,
                        b, c, d) {
                        var e = o.setFilters[b[2]];
                        if (e)return e(a, c, b, d);
                    }
                }
            },
            u = o.match.POS,
            r = function(a, b) { return"\\" + (b - 0 + 1); },
            D;
        for (D in o.match)o.match[D] = RegExp(o.match[D].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[D] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[D].source.replace(/\\(\d+)/g, r));
        var I = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            return b ? (b.push.apply(b, a), b) : a;
        };
        try {
            Array.prototype.slice.call(q.documentElement.childNodes, 0);
        } catch (L) {
            I = function(a, b) {
                var c = 0, d = b || [];
                if ("[object Array]" ===
                    g.call(a))Array.prototype.push.apply(d, a);
                else if ("number" === typeof a.length)for (var e = a.length; c < e; c++)d.push(a[c]);
                else for (; a[c]; c++)d.push(a[c]);
                return d;
            };
        }
        var z, s;
        q.documentElement.compareDocumentPosition ? z = function(a, b) { return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1; } : (z = function(a, b) {
            if (a === b)return h = !0, 0;
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [];
            c = a.parentNode;
            d = b.parentNode;
            var g = c;
            if (c === d)return s(a, b);
            if (c) {
                if (!d)return 1;
            } else return-1;
            for (; g;)e.unshift(g), g = g.parentNode;
            for (g = d; g;)f.unshift(g), g = g.parentNode;
            c = e.length;
            d = f.length;
            for (g = 0; g < c && g < d; g++)if (e[g] !== f[g])return s(e[g], f[g]);
            return g === c ? s(a, f[g], -1) : s(e[g], b, 1);
        }, s = function(a, b, c) {
            if (a === b)return c;
            for (a = a.nextSibling; a;) {
                if (a === b)return-1;
                a = a.nextSibling;
            }
            return 1;
        });
        (function() {
            var a = q.createElement("div"), c = "script" + (new Date).getTime(), d = q.documentElement;
            a.innerHTML = "<a name='" + c + "'/>";
            d.insertBefore(a, d.firstChild);
            if (q.getElementById(c))
                o.find.ID = function(a, c, d) { if ("undefined" !== typeof c.getElementById && !d)return(c = c.getElementById(a[1])) ? c.id === a[1] || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").nodeValue === a[1] ? [c] : b : []; }, o.filter.ID = function(a, b) {
                    var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                    return 1 === a.nodeType && c && c.nodeValue === b;
                };
            d.removeChild(a);
            d = a = null;
        })();
        (function() {
            var a = q.createElement("div");
            a.appendChild(q.createComment(""));
            if (0 < a.getElementsByTagName("*").length)
                o.find.TAG = function(a, b) {
                    var c = b.getElementsByTagName(a[1]);
                    if ("*" === a[1]) {
                        for (var d = [], e = 0; c[e]; e++)1 === c[e].nodeType && d.push(c[e]);
                        c = d;
                    }
                    return c;
                };
            a.innerHTML = "<a href='#'></a>";
            if (a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href"))o.attrHandle.href = function(a) { return a.getAttribute("href", 2); };
            a = null;
        })();
        q.querySelectorAll && function() {
            var a = n, b = q.createElement("div");
            b.innerHTML = "<p class='TEST'></p>";
            if (!(b.querySelectorAll &&
                0 === b.querySelectorAll(".TEST").length)) {
                n = function(b, c, d, e) {
                    c = c || q;
                    if (!e && !n.isXML(c)) {
                        var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                            if (f[1])return I(c.getElementsByTagName(b), d);
                            if (f[2] && o.find.CLASS && c.getElementsByClassName)return I(c.getElementsByClassName(f[2]), d);
                        }
                        if (9 === c.nodeType) {
                            if ("body" === b && c.body)return I([c.body], d);
                            if (f && f[3]) {
                                var g = c.getElementById(f[3]);
                                if (g && g.parentNode) {
                                    if (g.id === f[3])return I([g], d);
                                } else return I([], d);
                            }
                            try {
                                return I(c.querySelectorAll(b),
                                    d);
                            } catch (h) {
                            }
                        } else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                            var f = c, i = (g = c.getAttribute("id")) || "__sizzle__", j = c.parentNode, k = /^\s*[+~]/.test(b);
                            g ? i = i.replace(/'/g, "\\$&") : c.setAttribute("id", i);
                            if (k && j)c = c.parentNode;
                            try {
                                if (!k || j)return I(c.querySelectorAll("[id='" + i + "'] " + b), d);
                            } catch (t) {
                            } finally {
                                g || f.removeAttribute("id");
                            }
                        }
                    }
                    return a(b, c, d, e);
                };
                for (var c in a)n[c] = a[c];
                b = null;
            }
        }();
        (function() {
            var a = q.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector ||
                    a.msMatchesSelector;
            if (b) {
                var c = !b.call(q.createElement("div"), "div"), d = !1;
                try {
                    b.call(q.documentElement, "[test!='']:sizzle");
                } catch (e) {
                    d = !0;
                }
                n.matchesSelector = function(a, e) {
                    e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!n.isXML(a))
                        try {
                            if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                var f = b.call(a, e);
                                if (f || !c || a.document && 11 !== a.document.nodeType)return f;
                            }
                        } catch (g) {
                        }
                    return 0 < n(e, null, null, [a]).length;
                };
            }
        })();
        (function() {
            var a = q.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length))o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) { if ("undefined" !== typeof b.getElementsByClassName && !c)return b.getElementsByClassName(a[1]); }, a = null;
        })();
        n.contains = q.documentElement.contains ? function(a, b) { return a !== b && (a.contains ? a.contains(b) : !0); } : q.documentElement.compareDocumentPosition ? function(a, b) { return!!(a.compareDocumentPosition(b) & 16); } : function() { return!1; };
        n.isXML = function(a) { return(a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1; };
        var w = function(a, b, c) {
            for (var d, e = [], f = "", b = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);)f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            d = 0;
            for (var g = b.length; d < g; d++)n(a, b[d], e, c);
            return n.filter(f, e);
        };
        n.attr = i.attr;
        n.selectors.attrMap = {};
        i.find = n;
        i.expr = n.selectors;
        i.expr[":"] = i.expr.filters;
        i.unique = n.uniqueSort;
        i.text = n.getText;
        i.isXMLDoc = n.isXML;
        i.contains = n.contains;
    })();
    var nb = /Until$/,
        ob = /^(?:parents|prevUntil|prevAll)/,
        pb = /,/,
        Xa = /^.[^:#\[\.,]*$/,
        qb = Array.prototype.slice,
        Fa = i.expr.match.POS,
        rb = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        find: function(a) {
            var b = this, c, d;
            if ("string" !== typeof a)return i(a).filter(function() { for (c = 0, d = b.length; c < d; c++)if (i.contains(b[c], this))return!0; });
            var e = this.pushStack("", "find", a), f, g, h;
            for (c = 0, d = this.length; c < d; c++)
                if (f = e.length, i.find(a, this[c], e), 0 < c)
                    for (g = f; g < e.length; g++)
                        for (h = 0; h < f; h++)
                            if (e[h] === e[g]) {
                                e.splice(g--, 1);
                                break;
                            }
            return e;
        },
        has: function(a) {
            var b = i(a);
            return this.filter(function() { for (var a = 0, c = b.length; a < c; a++)if (i.contains(this, b[a]))return!0; });
        },
        not: function(a) { return this.pushStack(j(this, a, !1), "not", a); },
        filter: function(a) { return this.pushStack(j(this, a, !0), "filter", a); },
        is: function(a) { return!!a && ("string" === typeof a ? Fa.test(a) ? 0 <= i(a, this.context).index(this[0]) : 0 < i.filter(a, this).length : 0 < this.filter(a).length); },
        closest: function(a, b) {
            var c = [], d, e, f = this[0];
            if (i.isArray(a)) {
                for (e = 1; f && f.ownerDocument && f !== b;) {
                    for (d =
                        0; d < a.length; d++)i(f).is(a[d]) && c.push({ selector: a[d], elem: f, level: e });
                    f = f.parentNode;
                    e++;
                }
                return c;
            }
            var g = Fa.test(a) || "string" !== typeof a ? i(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++)
                for (f = this[d]; f;)
                    if (g ? -1 < g.index(f) : i.find.matchesSelector(f, a)) {
                        c.push(f);
                        break;
                    } else if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType)break;
            c = 1 < c.length ? i.unique(c) : c;
            return this.pushStack(c, "closest", a);
        },
        index: function(a) {
            return!a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : "string" ===
                typeof a ? i.inArray(this[0], i(a)) : i.inArray(a.jquery ? a[0] : a, this);
        },
        add: function(a, b) {
            var c = "string" === typeof a ? i(a, b) : i.makeArray(a && a.nodeType ? [a] : a), d = i.merge(this.get(), c);
            return this.pushStack(!c[0] || !c[0].parentNode || 11 === c[0].parentNode.nodeType || !d[0] || !d[0].parentNode || 11 === d[0].parentNode.nodeType ? d : i.unique(d));
        },
        andSelf: function() { return this.add(this.prevObject); }
    });
    i.each({
        parent: function(a) { return(a = a.parentNode) && 11 !== a.nodeType ? a : null; },
        parents: function(a) { return i.dir(a, "parentNode"); },
        parentsUntil: function(a, b, c) { return i.dir(a, "parentNode", c); },
        next: function(a) { return i.nth(a, 2, "nextSibling"); },
        prev: function(a) { return i.nth(a, 2, "previousSibling"); },
        nextAll: function(a) { return i.dir(a, "nextSibling"); },
        prevAll: function(a) { return i.dir(a, "previousSibling"); },
        nextUntil: function(a, b, c) { return i.dir(a, "nextSibling", c); },
        prevUntil: function(a, b, c) { return i.dir(a, "previousSibling", c); },
        siblings: function(a) { return i.sibling(a.parentNode.firstChild, a); },
        children: function(a) { return i.sibling(a.firstChild); },
        contents: function(a) { return i.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : i.makeArray(a.childNodes); }
    }, function(a, b) {
        i.fn[a] = function(c, d) {
            var e = i.map(this, b, c);
            nb.test(a) || (d = c);
            d && "string" === typeof d && (e = i.filter(d, e));
            e = 1 < this.length && !rb[a] ? i.unique(e) : e;
            if ((1 < this.length || pb.test(d)) && ob.test(a))e = e.reverse();
            return this.pushStack(e, a, qb.call(arguments).join(","));
        };
    });
    i.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return 1 === b.length ? i.find.matchesSelector(b[0], a) ? [b[0]] :
            [] : i.find.matches(a, b);
        },
        dir: function(a, c, d) {
            for (var e = [], a = a[c]; a && 9 !== a.nodeType && (d === b || 1 !== a.nodeType || !i(a).is(d));)1 === a.nodeType && e.push(a), a = a[c];
            return e;
        },
        nth: function(a, b, c) {
            for (var b = b || 1, d = 0; a && !(1 === a.nodeType && ++d === b); a = a[c]);
            return a;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var pa = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        sb = / jQuery\d+="(?:\d+|null)"/g,
        la = /^\s+/,
        Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Ha = /<([\w:]+)/,
        tb = /<tbody/i,
        ub = /<|&#?\w+;/,
        vb = /<(?:script|style)/i,
        wb = /<(?:script|object|embed|option|style)/i,
        Ia = RegExp("<(?:" + pa + ")", "i"),
        Ja = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xb = /\/(java|ecma)script/i,
        Ya = /^\s*<!(?:\[CDATA\[|\-\-)/,
        w = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [
                2, "<table><tbody>",
                "</tbody></table>"
            ],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ka = k(q);
    w.optgroup = w.option;
    w.tbody = w.tfoot = w.colgroup = w.caption = w.thead;
    w.th = w.td;
    if (!i.support.htmlSerialize)w._default = [1, "div<div>", "</div>"];
    i.fn.extend({
        text: function(a) {
            return i.isFunction(a) ? this.each(function(b) {
                var c = i(this);
                c.text(a.call(this, b, c.text()));
            }) : "object" !== typeof a && a !== b ? this.empty().append((this[0] &&
                this[0].ownerDocument || q).createTextNode(a)) : i.text(this);
        },
        wrapAll: function(a) {
            if (i.isFunction(a))return this.each(function(b) { i(this).wrapAll(a.call(this, b)); });
            if (this[0]) {
                var b = i(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return i.isFunction(a) ? this.each(function(b) { i(this).wrapInner(a.call(this, b)); }) : this.each(function() {
                var b =
                        i(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = i.isFunction(a);
            return this.each(function(c) { i(this).wrapAll(b ? a.call(this, c) : a); });
        },
        unwrap: function() { return this.parent().each(function() { i.nodeName(this, "body") || i(this).replaceWith(this.childNodes); }).end(); },
        append: function() { return this.domManip(arguments, !0, function(a) { 1 === this.nodeType && this.appendChild(a); }); },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a,
                    this.firstChild);
            });
        },
        before: function() {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this); });
            if (arguments.length) {
                var a = i.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments);
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this.nextSibling); });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a,
                    i.clean(arguments));
                return a;
            }
        },
        remove: function(a, b) {
            for (var c = 0, d; null != (d = this[c]); c++)if (!a || i.filter(a, [d]).length)!b && 1 === d.nodeType && (i.cleanData(d.getElementsByTagName("*")), i.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this;
        },
        empty: function() {
            for (var a = 0, b; null != (b = this[a]); a++)for (1 === b.nodeType && i.cleanData(b.getElementsByTagName("*")); b.firstChild;)b.removeChild(b.firstChild);
            return this;
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return i.clone(this,
                    a, b);
            });
        },
        html: function(a) {
            if (a === b)return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(sb, "") : null;
            if ("string" === typeof a && !vb.test(a) && (i.support.leadingWhitespace || !la.test(a)) && !w[(Ha.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Ga, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++)if (1 === this[c].nodeType)i.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a;
                } catch (e) {
                    this.empty().append(a);
                }
            } else
                i.isFunction(a) ? this.each(function(b) {
                    var c = i(this);
                    c.html(a.call(this, b,
                        c.html()));
                }) : this.empty().append(a);
            return this;
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (i.isFunction(a))
                    return this.each(function(b) {
                        var c = i(this), d = c.html();
                        c.replaceWith(a.call(this, b, d));
                    });
                "string" !== typeof a && (a = i(a).detach());
                return this.each(function() {
                    var b = this.nextSibling, c = this.parentNode;
                    i(this).remove();
                    b ? i(b).before(a) : i(c).append(a);
                });
            }
            return this.length ? this.pushStack(i(i.isFunction(a) ? a() : a), "replaceWith", a) : this;
        },
        detach: function(a) { return this.remove(a, !0); },
        domManip: function(a,
            c, d) {
            var e, f, g, h = a[0], j = [];
            if (!i.support.checkClone && 3 === arguments.length && "string" === typeof h && Ja.test(h))return this.each(function() { i(this).domManip(a, c, d, !0); });
            if (i.isFunction(h))
                return this.each(function(e) {
                    var f = i(this);
                    a[0] = h.call(this, e, c ? f.html() : b);
                    f.domManip(a, c, d);
                });
            if (this[0]) {
                e = h && h.parentNode;
                e = i.support.parentNode && e && 11 === e.nodeType && e.childNodes.length === this.length ? { fragment: e } : i.buildFragment(a, this, j);
                g = e.fragment;
                if (f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild) {
                    c = c &&
                        i.nodeName(f, "tr");
                    f = 0;
                    for (var k = this.length, m = k - 1; f < k; f++)d.call(c ? i.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f], e.cacheable || 1 < k && f < m ? i.clone(g, !0, !0) : g);
                }
                j.length && i.each(j, o);
            }
            return this;
        }
    });
    i.buildFragment = function(a, b, c) {
        var d, e, f, g, h = a[0];
        b && b[0] && (g = b[0].ownerDocument || b[0]);
        g.createDocumentFragment || (g = q);
        if (1 === a.length && "string" === typeof h && 512 > h.length && g === q && "<" === h.charAt(0) && !wb.test(h) &&
        (i.support.checkClone || !Ja.test(h)) && (i.support.html5Clone || !Ia.test(h)))e = !0, (f = i.fragments[h]) && 1 !== f && (d = f);
        d || (d = g.createDocumentFragment(), i.clean(a, g, d, c));
        e && (i.fragments[h] = f ? d : 1);
        return{ fragment: d, cacheable: e };
    };
    i.fragments = {};
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) {
        i.fn[a] = function(c) {
            var d = [], c = i(c), e = 1 === this.length && this[0].parentNode;
            if (e && 11 === e.nodeType && 1 === e.childNodes.length && 1 === c.length)
                return c[b](this[0]),
                    this;
            for (var e = 0, f = c.length; e < f; e++) {
                var g = (0 < e ? this.clone(!0) : this).get();
                i(c[e])[b](g);
                d = d.concat(g);
            }
            return this.pushStack(d, a, c.selector);
        };
    });
    i.extend({
        clone: function(a, b, c) {
            var d, e, f;
            i.support.html5Clone || !Ia.test("<" + a.nodeName) ? d = a.cloneNode(!0) : (d = q.createElement("div"), Ka.appendChild(d), d.innerHTML = a.outerHTML, d = d.firstChild);
            var g = d;
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !i.isXMLDoc(a)) {
                m(a, g);
                d = n(a);
                e = n(g);
                for (f = 0; d[f]; ++f)
                    e[f] && m(d[f],
                        e[f]);
            }
            if (b && (l(a, g), c)) {
                d = n(a);
                e = n(g);
                for (f = 0; d[f]; ++f)l(d[f], e[f]);
            }
            return g;
        },
        clean: function(a, b, c, d) {
            b = b || q;
            "undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || q);
            for (var e = [], f, g = 0, h; null != (h = a[g]); g++)
                if ("number" === typeof h && (h += ""), h) {
                    if ("string" === typeof h)
                        if (ub.test(h)) {
                            h = h.replace(Ga, "<$1></$2>");
                            f = (Ha.exec(h) || ["", ""])[1].toLowerCase();
                            var j = w[f] || w._default, m = j[0], l = b.createElement("div");
                            b === q ? Ka.appendChild(l) : k(b).appendChild(l);
                            for (l.innerHTML = j[1] + h + j[2]; m--;)
                                l =
                                    l.lastChild;
                            if (!i.support.tbody) {
                                m = tb.test(h);
                                j = "table" === f && !m ? l.firstChild && l.firstChild.childNodes : "<table>" === j[1] && !m ? l.childNodes : [];
                                for (f = j.length - 1; 0 <= f; --f)i.nodeName(j[f], "tbody") && !j[f].childNodes.length && j[f].parentNode.removeChild(j[f]);
                            }
                            !i.support.leadingWhitespace && la.test(h) && l.insertBefore(b.createTextNode(la.exec(h)[0]), l.firstChild);
                            h = l.childNodes;
                        } else h = b.createTextNode(h);
                    var n;
                    if (!i.support.appendChecked)
                        if (h[0] && "number" === typeof(n = h.length))for (f = 0; f < n; f++)u(h[f]);
                        else u(h);
                    h.nodeType ? e.push(h) : e = i.merge(e, h);
                }
            if (c) {
                a = function(a) { return!a.type || xb.test(a.type); };
                for (g = 0; e[g]; g++)d && i.nodeName(e[g], "script") && (!e[g].type || "text/javascript" === e[g].type.toLowerCase()) ? d.push(e[g].parentNode ? e[g].parentNode.removeChild(e[g]) : e[g]) : (1 === e[g].nodeType && (b = i.grep(e[g].getElementsByTagName("script"), a), e.splice.apply(e, [g + 1, 0].concat(b))), c.appendChild(e[g]));
            }
            return e;
        },
        cleanData: function(a) {
            for (var b, c, d = i.cache, e = i.event.special, f = i.support.deleteExpando, g = 0, h; null != (h = a[g]); g++)
                if (!h.nodeName ||
                    !i.noData[h.nodeName.toLowerCase()])
                    if (c = h[i.expando]) {
                        if ((b = d[c]) && b.events) {
                            for (var j in b.events)e[j] ? i.event.remove(h, j) : i.removeEvent(h, j, b.handle);
                            if (b.handle)b.handle.elem = null;
                        }
                        f ? delete h[i.expando] : h.removeAttribute && h.removeAttribute(i.expando);
                        delete d[c];
                    }
        }
    });
    var ma = /alpha\([^)]*\)/i, yb = /opacity=([^)]*)/, zb = /([A-Z]|^ms)/g, La = /^-?\d+(?:px)?$/i, Ab = /^-?\d/, Bb = /^([\-+])=([\-+.\de]+)/, Cb = { position: "absolute", visibility: "hidden", display: "block" }, Za = ["Left", "Right"], $a = ["Top", "Bottom"], H, Ma, Na;
    i.fn.css = function(a, c) { return 2 === arguments.length && c === b ? this : i.access(this, a, c, !0, function(a, c, d) { return d !== b ? i.style(a, c, d) : i.css(a, c); }); };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = H(a, "opacity", "opacity");
                        return"" === c ? "1" : c;
                    }
                    return a.style.opacity;
                }
            }
        },
        cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": i.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, c, d, e) {
            if (a && !(3 === a.nodeType || 8 === a.nodeType ||
                !a.style)) {
                var f, g = i.camelCase(c), h = a.style, j = i.cssHooks[g], c = i.cssProps[g] || g;
                if (d !== b) {
                    e = typeof d;
                    if ("string" === e && (f = Bb.exec(d)))d = +(f[1] + 1) * +f[2] + parseFloat(i.css(a, c)), e = "number";
                    if (!(null == d || "number" === e && isNaN(d)))
                        if ("number" === e && !i.cssNumber[g] && (d += "px"), !j || !("set" in j) || (d = j.set(a, d)) !== b)
                            try {
                                h[c] = d;
                            } catch (k) {
                            }
                } else return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : h[c];
            }
        },
        css: function(a, c, d) {
            var e, f, c = i.camelCase(c);
            f = i.cssHooks[c];
            c = i.cssProps[c] || c;
            "cssFloat" === c && (c = "float");
            if (f && "get" in
                f && (e = f.get(a, !0, d)) !== b)return e;
            if (H)return H(a, c);
        },
        swap: function(a, b, c) {
            var d = {}, e;
            for (e in b)d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b)a.style[e] = d[e];
        }
    });
    i.curCSS = i.css;
    i.each(["height", "width"], function(a, b) {
        i.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (0 !== a.offsetWidth)return r(a, b, d);
                    i.swap(a, Cb, function() { e = r(a, b, d); });
                    return e;
                }
            },
            set: function(a, b) {
                if (La.test(b)) {
                    if (b = parseFloat(b), 0 <= b)return b + "px";
                } else return b;
            }
        };
    });
    if (!i.support.opacity)
        i.cssHooks.opacity = {
            get: function(a,
                b) { return yb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""; },
            set: function(a, b) {
                var c = a.style, d = a.currentStyle, e = i.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (1 <= b && "" === i.trim(f.replace(ma, "")) && (c.removeAttribute("filter"), d && !d.filter))return;
                c.filter = ma.test(f) ? f.replace(ma, e) : f + " " + e;
            }
        };
    i(function() {
        if (!i.support.reliableMarginRight)
            i.cssHooks.marginRight = {
                get: function(a, b) {
                    var c;
                    i.swap(a, { display: "inline-block" },
                        function() { c = b ? H(a, "margin-right", "marginRight") : a.style.marginRight; });
                    return c;
                }
            };
    });
    q.defaultView && q.defaultView.getComputedStyle && (Ma = function(a, b) {
        var c, d, e, b = b.replace(zb, "-$1").toLowerCase();
        if ((d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)))c = e.getPropertyValue(b), "" === c && !i.contains(a.ownerDocument.documentElement, a) && (c = i.style(a, b));
        return c;
    });
    q.documentElement.currentStyle && (Na = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        if (null === e && f && (c = f[b]))
            e =
                c;
        if (!La.test(e) && Ab.test(e)) {
            c = f.left;
            if (d = a.runtimeStyle && a.runtimeStyle.left)a.runtimeStyle.left = a.currentStyle.left;
            f.left = "fontSize" === b ? "1em" : e || 0;
            e = f.pixelLeft + "px";
            f.left = c;
            if (d)a.runtimeStyle.left = d;
        }
        return"" === e ? "auto" : e;
    });
    H = Ma || Na;
    if (i.expr && i.expr.filters)
        i.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return 0 === a.offsetWidth && 0 === b || !i.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || i.css(a, "display"));
        }, i.expr.filters.visible = function(a) { return!i.expr.filters.hidden(a); };
    var Db = /%20/g, ab = /\[\]$/, Oa = /\r?\n/g, Eb = /#.*$/, Fb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Gb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Hb = /^(?:GET|HEAD)$/, Ib = /^\/\//, Pa = /\?/, Jb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Kb = /^(?:select|textarea)/i, qa = /\s+/, Lb = /([?&])_=[^&]*/, Qa = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Ra = i.fn.load, da = {}, Sa = {}, N, G, Ta = ["*/"] + ["*"];
    try {
        N = cb.href;
    } catch (Rb) {
        N = q.createElement("a"), N.href =
            "", N = N.href;
    }
    G = Qa.exec(N.toLowerCase()) || [];
    i.fn.extend({
        load: function(a, c, d) {
            if ("string" !== typeof a && Ra)return Ra.apply(this, arguments);
            if (!this.length)return this;
            var e = a.indexOf(" ");
            if (0 <= e)var f = a.slice(e, a.length), a = a.slice(0, e);
            e = "GET";
            c && (i.isFunction(c) ? (d = c, c = b) : "object" === typeof c && (c = i.param(c, i.ajaxSettings.traditional), e = "POST"));
            var g = this;
            i.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText;
                    a.isResolved() && (a.done(function(a) { c = a; }), g.html(f ? i("<div>").append(c.replace(Jb,
                        "")).find(f) : c));
                    d && g.each(d, [c, b, a]);
                }
            });
            return this;
        },
        serialize: function() { return i.param(this.serializeArray()); },
        serializeArray: function() {
            return this.map(function() { return this.elements ? i.makeArray(this.elements) : this; }).filter(function() { return this.name && !this.disabled && (this.checked || Kb.test(this.nodeName) || Gb.test(this.type)); }).map(function(a, b) {
                var c = i(this).val();
                return null == c ? null : i.isArray(c) ? i.map(c, function(a) { return{ name: b.name, value: a.replace(Oa, "\r\n") }; }) : {
                    name: b.name,
                    value: c.replace(Oa,
                        "\r\n")
                };
            }).get();
        }
    });
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) { i.fn[b] = function(a) { return this.on(b, a); }; });
    i.each(["get", "post"], function(a, c) {
        i[c] = function(a, d, e, f) {
            i.isFunction(d) && (f = f || e, e = d, d = b);
            return i.ajax({ type: c, url: a, data: d, success: e, dataType: f });
        };
    });
    i.extend({
        getScript: function(a, c) { return i.get(a, b, c, "script"); },
        getJSON: function(a, b, c) { return i.get(a, b, c, "json"); },
        ajaxSetup: function(a, b) {
            b ? ra(a, i.ajaxSettings) : (b = a, a = i.ajaxSettings);
            ra(a,
                b);
            return a;
        },
        ajaxSettings: {
            url: N,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(G[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Ta },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: "responseXML", text: "responseText" },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: { context: !0, url: !0 }
        },
        ajaxPrefilter: z(da),
        ajaxTransport: z(Sa),
        ajax: function(a, c) {

            function d(a, c, l, n) {
                if (2 !== z) {
                    z = 2;
                    q && clearTimeout(q);
                    u = b;
                    p = n || "";
                    s.readyState = 0 < a ? 4 : 0;
                    var t, v, o, n = c;
                    if (l) {
                        var K = e, r = s, w = K.contents, P = K.dataTypes, ta = K.responseFields, F, A, E, C;
                        for (A in ta)A in l && (r[ta[A]] = l[A]);
                        for (; "*" === P[0];)P.shift(), F === b && (F = K.mimeType || r.getResponseHeader("content-type"));
                        if (F)
                            for (A in w)
                                if (w[A] && w[A].test(F)) {
                                    P.unshift(A);
                                    break;
                                }
                        if (P[0] in l)E = P[0];
                        else {
                            for (A in l) {
                                if (!P[0] ||
                                    K.converters[A + " " + P[0]]) {
                                    E = A;
                                    break;
                                }
                                C || (C = A);
                            }
                            E = E || C;
                        }
                        E ? (E !== P[0] && P.unshift(E), l = l[E]) : l = void 0;
                    } else l = b;
                    if (200 <= a && 300 > a || 304 === a) {
                        if (e.ifModified) {
                            if (F = s.getResponseHeader("Last-Modified"))i.lastModified[m] = F;
                            if (F = s.getResponseHeader("Etag"))i.etag[m] = F;
                        }
                        if (304 === a)n = "notmodified", t = !0;
                        else
                            try {
                                F = e;
                                F.dataFilter && (l = F.dataFilter(l, F.dataType));
                                var ga = F.dataTypes;
                                A = {};
                                var D, J, X = ga.length, M, B = ga[0], Q, N, S, G, H;
                                for (D = 1; D < X; D++) {
                                    if (1 === D)for (J in F.converters)"string" === typeof J && (A[J.toLowerCase()] = F.converters[J]);
                                    Q = B;
                                    B = ga[D];
                                    if ("*" === B)B = Q;
                                    else if ("*" !== Q && Q !== B) {
                                        N = Q + " " + B;
                                        S = A[N] || A["* " + B];
                                        if (!S)
                                            for (G in H = b, A)
                                                if (M = G.split(" "), M[0] === Q || "*" === M[0])
                                                    if (H = A[M[1] + " " + B]) {
                                                        G = A[G];
                                                        !0 === G ? S = H : !0 === H && (S = G);
                                                        break;
                                                    }
                                        !S && !H && i.error("No conversion from " + N.replace(" ", " to "));
                                        !0 !== S && (l = S ? S(l) : H(G(l)));
                                    }
                                }
                                v = l;
                                n = "success";
                                t = !0;
                            } catch (R) {
                                n = "parsererror", o = R;
                            }
                    } else if (o = n, !n || a)n = "error", 0 > a && (a = 0);
                    s.status = a;
                    s.statusText = "" + (c || n);
                    t ? h.resolveWith(f, [v, n, s]) : h.rejectWith(f, [s, n, o]);
                    s.statusCode(k);
                    k = b;
                    L && g.trigger("ajax" +
                    (t ? "Success" : "Error"), [s, e, t ? v : o]);
                    j.fireWith(f, [s, n]);
                    L && (g.trigger("ajaxComplete", [s, e]), --i.active || i.event.trigger("ajaxStop"));
                }
            }

            "object" === typeof a && (c = a, a = b);
            var c = c || {},
                e = i.ajaxSetup({}, c),
                f = e.context || e,
                g = f !== e && (f.nodeType || f instanceof i) ? i(f) : i.event,
                h = i.Deferred(),
                j = i.Callbacks("once memory"),
                k = e.statusCode || {},
                m,
                l = {},
                n = {},
                p,
                o,
                u,
                q,
                r,
                z = 0,
                L,
                w,
                s = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!z) {
                            var c = a.toLowerCase(), a = n[c] = n[c] || a;
                            l[a] = b;
                        }
                        return this;
                    },
                    getAllResponseHeaders: function() {
                        return 2 ===
                            z ? p : null;
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === z) {
                            if (!o)for (o = {}; c = Fb.exec(p);)o[c[1].toLowerCase()] = c[2];
                            c = o[a.toLowerCase()];
                        }
                        return c === b ? null : c;
                    },
                    overrideMimeType: function(a) {
                        if (!z)e.mimeType = a;
                        return this;
                    },
                    abort: function(a) {
                        a = a || "abort";
                        u && u.abort(a);
                        d(0, a);
                        return this;
                    }
                };
            h.promise(s);
            s.success = s.done;
            s.error = s.fail;
            s.complete = j.add;
            s.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > z)for (b in a)k[b] = [k[b], a[b]];
                    else b = a[s.status], s.then(b, b);
                }
                return this;
            };
            e.url = ((a || e.url) + "").replace(Eb, "").replace(Ib,
                G[1] + "//");
            e.dataTypes = i.trim(e.dataType || "*").toLowerCase().split(qa);
            if (null == e.crossDomain)r = Qa.exec(e.url.toLowerCase()), e.crossDomain = !(!r || !(r[1] != G[1] || r[2] != G[2] || (r[3] || ("http:" === r[1] ? 80 : 443)) != (G[3] || ("http:" === G[1] ? 80 : 443))));
            if (e.data && e.processData && "string" !== typeof e.data)e.data = i.param(e.data, e.traditional);
            J(da, e, c, s);
            if (2 === z)return!1;
            L = e.global;
            e.type = e.type.toUpperCase();
            e.hasContent = !Hb.test(e.type);
            L && 0 === i.active++ && i.event.trigger("ajaxStart");
            if (!e.hasContent && (e.data && (e.url +=
            (Pa.test(e.url) ? "&" : "?") + e.data, delete e.data), m = e.url, !1 === e.cache)) {
                r = i.now();
                var E = e.url.replace(Lb, "$1_=" + r);
                e.url = E + (E === e.url ? (Pa.test(e.url) ? "&" : "?") + "_=" + r : "");
            }
            (e.data && e.hasContent && !1 !== e.contentType || c.contentType) && s.setRequestHeader("Content-Type", e.contentType);
            e.ifModified && (m = m || e.url, i.lastModified[m] && s.setRequestHeader("If-Modified-Since", i.lastModified[m]), i.etag[m] && s.setRequestHeader("If-None-Match", i.etag[m]));
            s.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ?
                e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", " + Ta + "; q=0.01" : "") : e.accepts["*"]);
            for (w in e.headers)s.setRequestHeader(w, e.headers[w]);
            if (e.beforeSend && (!1 === e.beforeSend.call(f, s, e) || 2 === z))return s.abort(), !1;
            for (w in{ success: 1, error: 1, complete: 1 })s[w](e[w]);
            if (u = J(Sa, e, c, s)) {
                s.readyState = 1;
                L && g.trigger("ajaxSend", [s, e]);
                e.async && 0 < e.timeout && (q = setTimeout(function() { s.abort("timeout"); }, e.timeout));
                try {
                    z = 1, u.send(l, d);
                } catch (C) {
                    if (2 > z)d(-1, C);
                    else throw C;
                }
            } else d(-1, "No Transport");
            return s;
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = i.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
                };
            if (c === b)c = i.ajaxSettings.traditional;
            if (i.isArray(a) || a.jquery && !i.isPlainObject(a))i.each(a, function() { e(this.name, this.value); });
            else for (var f in a)E(f, a[f], c, e);
            return d.join("&").replace(Db, "+");
        }
    });
    i.extend({ active: 0, lastModified: {}, etag: {} });
    var Mb = i.now(), ba = /(\=)\?(&|$)|\?\?/i;
    i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { return i.expando + "_" + Mb++; } });
    i.ajaxPrefilter("json jsonp",
        function(b, c, d) {
            c = "application/x-www-form-urlencoded" === b.contentType && "string" === typeof b.data;
            if ("jsonp" === b.dataTypes[0] || !1 !== b.jsonp && (ba.test(b.url) || c && ba.test(b.data))) {
                var e, f = b.jsonpCallback = i.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, g = a[f], h = b.url, j = b.data, k = "$1" + f + "$2";
                !1 !== b.jsonp && (h = h.replace(ba, k), b.url === h && (c && (j = j.replace(ba, k)), b.data === j && (h += (/\?/.test(h) ? "&" : "?") + b.jsonp + "=" + f)));
                b.url = h;
                b.data = j;
                a[f] = function(a) { e = [a]; };
                d.always(function() {
                    a[f] = g;
                    if (e &&
                        i.isFunction(g))a[f](e[0]);
                });
                b.converters["script json"] = function() {
                    e || i.error(f + " was not called");
                    return e[0];
                };
                b.dataTypes[0] = "json";
                return"script";
            }
        });
    i.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /javascript|ecmascript/ },
        converters: {
            "text script": function(a) {
                i.globalEval(a);
                return a;
            }
        }
    });
    i.ajaxPrefilter("script", function(a) {
        if (a.cache === b)a.cache = !1;
        if (a.crossDomain)a.type = "GET", a.global = !1;
    });
    i.ajaxTransport("script",
        function(a) {
            if (a.crossDomain) {
                var c, d = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
                return{
                    send: function(e, f) {
                        c = q.createElement("script");
                        c.async = "async";
                        if (a.scriptCharset)c.charset = a.scriptCharset;
                        c.src = a.url;
                        c.onload = c.onreadystatechange = function(a, e) { if (e || !c.readyState || /loaded|complete/.test(c.readyState))c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"); };
                        d.insertBefore(c, d.firstChild);
                    },
                    abort: function() { if (c)c.onload(0, 1); }
                };
            }
        });
    var na =
            a.ActiveXObject ? function() { for (var a in U)U[a](0, 1); } : !1,
        Nb = 0,
        U;
    i.ajaxSettings.xhr = a.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && L()))
            a: {
                try {
                    b = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a;
                } catch (c) {
                }
                b = void 0;
            }
        return b;
    } : L;
    (function(a) { i.extend(i.support, { ajax: !!a, cors: !!a && "withCredentials" in a }); })(i.ajaxSettings.xhr());
    i.support.ajax && i.ajaxTransport(function(c) {
        if (!c.crossDomain || i.support.cors) {
            var d;
            return{
                send: function(e, f) {
                    var g = c.xhr(), h, j;
                    c.username ? g.open(c.type, c.url, c.async, c.username,
                        c.password) : g.open(c.type, c.url, c.async);
                    if (c.xhrFields)for (j in c.xhrFields)g[j] = c.xhrFields[j];
                    c.mimeType && g.overrideMimeType && g.overrideMimeType(c.mimeType);
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e)g.setRequestHeader(j, e[j]);
                    } catch (k) {
                    }
                    g.send(c.hasContent && c.data || null);
                    d = function(a, e) {
                        var j, k, m, l, n;
                        try {
                            if (d && (e || 4 === g.readyState)) {
                                d = b;
                                if (h)g.onreadystatechange = i.noop, na && delete U[h];
                                if (e)4 !== g.readyState && g.abort();
                                else {
                                    j = g.status;
                                    m = g.getAllResponseHeaders();
                                    l = {};
                                    if ((n = g.responseXML) && n.documentElement)l.xml = n;
                                    l.text = g.responseText;
                                    try {
                                        k = g.statusText;
                                    } catch (o) {
                                        k = "";
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = l.text ? 200 : 404 : 1223 === j && (j = 204);
                                }
                            }
                        } catch (p) {
                            e || f(-1, p);
                        }
                        l && f(j, k, l, m);
                    };
                    !c.async || 4 === g.readyState ? d() : (h = ++Nb, na && (U || (U = {}, i(a).unload(na)), U[h] = d), g.onreadystatechange = d);
                },
                abort: function() { d && d(0, 1); }
            };
        }
    });
    var ea = {},
        C,
        R,
        Ob = /^(?:toggle|show|hide)$/,
        Pb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        ca,
        sa = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], [
                "width",
                "marginLeft", "marginRight", "paddingLeft", "paddingRight"
            ], ["opacity"]
        ],
        Y;
    i.fn.extend({
        show: function(a, b, c) {
            if (a || 0 === a)return this.animate(M("show", 3), a, b, c);
            for (var c = 0, d = this.length; c < d; c++)
                if (a = this[c], a.style) {
                    b = a.style.display;
                    if (!i._data(a, "olddisplay") && "none" === b)b = a.style.display = "";
                    "" === b && "none" === i.css(a, "display") && i._data(a, "olddisplay", V(a.nodeName));
                }
            for (c = 0; c < d; c++)if (a = this[c], a.style && (b = a.style.display, "" === b || "none" === b))a.style.display = i._data(a, "olddisplay") || "";
            return this;
        },
        hide: function(a, b, c) {
            if (a || 0 === a)return this.animate(M("hide", 3), a, b, c);
            for (var c = 0, d = this.length; c < d; c++)a = this[c], a.style && (b = i.css(a, "display"), "none" !== b && !i._data(a, "olddisplay") && i._data(a, "olddisplay", b));
            for (c = 0; c < d; c++)if (this[c].style)this[c].style.display = "none";
            return this;
        },
        _toggle: i.fn.toggle,
        toggle: function(a, b, c) {
            var d = "boolean" === typeof a;
            i.isFunction(a) && i.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : i(this).is(":hidden");
                i(this)[b ? "show" :
                    "hide"]();
            }) : this.animate(M("toggle", 3), a, b, c);
            return this;
        },
        fadeTo: function(a, b, c, d) { return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d); },
        animate: function(a, b, c, d) {

            function e() {
                var s;
                !1 === f.queue && i._mark(this);
                var b = i.extend({}, f), c = 1 === this.nodeType, d = c && i(this).is(":hidden"), g, h, j, k, m;
                b.animatedProperties = {};
                for (j in a) {
                    g = i.camelCase(j);
                    j !== g && (a[g] = a[j], delete a[j]);
                    h = a[g];
                    i.isArray(h) ? (b.animatedProperties[g] = h[1], s = a[g] = h[0], h = s) : b.animatedProperties[g] = b.specialEasing &&
                        b.specialEasing[g] || b.easing || "swing";
                    if ("hide" === h && d || "show" === h && !d)return b.complete.call(this);
                    if (c && ("height" === g || "width" === g))if (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === i.css(this, "display") && "none" === i.css(this, "float"))!i.support.inlineBlockNeedsLayout || "inline" === V(this.nodeName) ? this.style.display = "inline-block" : this.style.zoom = 1;
                }
                if (null != b.overflow)this.style.overflow = "hidden";
                for (j in a)
                    if (c = new i.fx(this, b, j), h = a[j], Ob.test(h))
                        if (g = i._data(this,
                            "toggle" + j) || ("toggle" === h ? d ? "show" : "hide" : 0))i._data(this, "toggle" + j, "show" === g ? "hide" : "show"), c[g]();
                        else c[h]();
                    else g = Pb.exec(h), k = c.cur(), g ? (h = parseFloat(g[2]), m = g[3] || (i.cssNumber[j] ? "" : "px"), "px" !== m && (i.style(this, j, (h || 1) + m), k *= (h || 1) / c.cur(), i.style(this, j, k + m)), g[1] && (h = ("-=" === g[1] ? -1 : 1) * h + k), c.custom(k, h, m)) : c.custom(k, h, "");
                return!0;
            }

            var f = i.speed(b, c, d);
            if (i.isEmptyObject(a))return this.each(f.complete, [!1]);
            a = i.extend({}, a);
            return!1 === f.queue ? this.each(e) : this.queue(f.queue, e);
        },
        stop: function(a,
            c, d) {
            "string" !== typeof a && (d = c, c = a, a = b);
            c && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b, c = !1, e = i.timers, f = i._data(this);
                d || i._unmark(!0, this);
                if (null == a)
                    for (b in f) {
                        if (f[b] && f[b].stop && b.indexOf(".run") === b.length - 4) {
                            var g = f[b];
                            i.removeData(this, b, !0);
                            g.stop(d);
                        }
                    }
                else if (f[b = a + ".run"] && f[b].stop)f = f[b], i.removeData(this, b, !0), f.stop(d);
                for (b = e.length; b--;)
                    if (e[b].elem === this && (null == a || e[b].queue === a)) {
                        if (d)e[b](!0);
                        else e[b].saveState();
                        c = !0;
                        e.splice(b, 1);
                    }
                (!d || !c) && i.dequeue(this,
                    a);
            });
        }
    });
    i.each({ slideDown: M("show", 1), slideUp: M("hide", 1), slideToggle: M("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { i.fn[a] = function(a, c, d) { return this.animate(b, a, c, d); }; });
    i.extend({
        speed: function(a, b, c) {
            var d = a && "object" === typeof a ? i.extend({}, a) : { complete: c || !c && b || i.isFunction(a) && a, duration: a, easing: c && b || b && !i.isFunction(b) && b };
            d.duration = i.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in i.fx.speeds ? i.fx.speeds[d.duration] :
                i.fx.speeds._default;
            if (null == d.queue || !0 === d.queue)d.queue = "fx";
            d.old = d.complete;
            d.complete = function(a) {
                i.isFunction(d.old) && d.old.call(this);
                d.queue ? i.dequeue(this, d.queue) : !1 !== a && i._unmark(this);
            };
            return d;
        },
        easing: { linear: function(a, b, c, d) { return c + d * a; }, swing: function(a, b, c, d) { return(-Math.cos(a * Math.PI) / 2 + 0.5) * d + c; } },
        timers: [],
        fx: function(a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            b.orig = b.orig || {};
        }
    });
    i.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now,
                this);
            (i.fx.step[this.prop] || i.fx.step._default)(this);
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))return this.elem[this.prop];
            var a, b = i.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || "auto" === b ? 0 : b : a;
        },
        custom: function(a, c, d) {

            function e(a) { return f.step(a); }

            var f = this, g = i.fx;
            this.startTime = Y || X();
            this.end = c;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = d || this.unit || (i.cssNumber[this.prop] ? "" : "px");
            e.queue = this.options.queue;
            e.elem = this.elem;
            e.saveState = function() { f.options.hide && i._data(f.elem, "fxshow" + f.prop) === b && i._data(f.elem, "fxshow" + f.prop, f.start); };
            e() && i.timers.push(e) && !ca && (ca = setInterval(g.tick, g.interval));
        },
        show: function() {
            var a = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || i.style(this.elem, this.prop);
            this.options.show = !0;
            a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            i(this.elem).show();
        },
        hide: function() {
            this.options.orig[this.prop] =
                i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0);
        },
        step: function(a) {
            var b, c = Y || X(), d = !0, e = this.elem, f = this.options;
            if (a || c >= f.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                f.animatedProperties[this.prop] = !0;
                for (b in f.animatedProperties)!0 !== f.animatedProperties[b] && (d = !1);
                if (d) {
                    null != f.overflow && !i.support.shrinkWrapBlocks && i.each(["", "X", "Y"], function(a, b) { e.style["overflow" + b] = f.overflow[a]; });
                    f.hide &&
                        i(e).hide();
                    if (f.hide || f.show)for (b in f.animatedProperties)i.style(e, b, f.orig[b]), i.removeData(e, "fxshow" + b, !0), i.removeData(e, "toggle" + b, !0);
                    if (a = f.complete)f.complete = !1, a.call(e);
                }
                return!1;
            }
            Infinity == f.duration ? this.now = c : (a = c - this.startTime, this.state = a / f.duration, this.pos = i.easing[f.animatedProperties[this.prop]](this.state, a, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return!0;
        }
    };
    i.extend(i.fx, {
        tick: function() {
            for (var a, b = i.timers, c = 0; c < b.length; c++)
                a = b[c],
                    !a() && b[c] === a && b.splice(c--, 1);
            b.length || i.fx.stop();
        },
        interval: 13,
        stop: function() {
            clearInterval(ca);
            ca = null;
        },
        speeds: { slow: 600, fast: 200, _default: 400 },
        step: { opacity: function(a) { i.style(a.elem, "opacity", a.now); }, _default: function(a) { a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now; } }
    });
    i.each(["width", "height"], function(a, b) { i.fx.step[b] = function(a) { i.style(a.elem, b, Math.max(0, a.now) + a.unit); }; });
    if (i.expr && i.expr.filters)
        i.expr.filters.animated = function(a) {
            return i.grep(i.timers,
                function(b) { return a === b.elem; }).length;
        };
    var Qb = /^t(?:able|d|h)$/i, Ua = /^(?:body|html)$/i;
    i.fn.offset = "getBoundingClientRect" in q.documentElement ? function(a) {
        var b = this[0], c;
        if (a)return this.each(function(b) { i.offset.setOffset(this, a, b); });
        if (!b || !b.ownerDocument)return null;
        if (b === b.ownerDocument.body)return i.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect();
        } catch (d) {
        }
        var e = b.ownerDocument, f = e.documentElement;
        if (!c || !i.contains(f, b))return c ? { top: c.top, left: c.left } : { top: 0, left: 0 };
        b = e.body;
        e = fa(e);
        return{ top: c.top + (e.pageYOffset || i.support.boxModel && f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0), left: c.left + (e.pageXOffset || i.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0) };
    } : function(a) {
        var b = this[0];
        if (a)return this.each(function(b) { i.offset.setOffset(this, a, b); });
        if (!b || !b.ownerDocument)return null;
        if (b === b.ownerDocument.body)return i.offset.bodyOffset(b);
        var c, d = b.offsetParent, e = b.ownerDocument, f = e.documentElement, g = e.body;
        c = (e = e.defaultView) ? e.getComputedStyle(b,
            null) : b.currentStyle;
        for (var h = b.offsetTop, j = b.offsetLeft; (b = b.parentNode) && b !== g && b !== f && !(i.support.fixedPosition && "fixed" === c.position);) {
            c = e ? e.getComputedStyle(b, null) : b.currentStyle;
            h -= b.scrollTop;
            j -= b.scrollLeft;
            if (b === d) {
                h += b.offsetTop;
                j += b.offsetLeft;
                if (i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !Qb.test(b.nodeName)))h += parseFloat(c.borderTopWidth) || 0, j += parseFloat(c.borderLeftWidth) || 0;
                d = b.offsetParent;
            }
            i.support.subtractsBorderForOverflowNotVisible && "visible" !==
                c.overflow && (h += parseFloat(c.borderTopWidth) || 0, j += parseFloat(c.borderLeftWidth) || 0);
        }
        if ("relative" === c.position || "static" === c.position)h += g.offsetTop, j += g.offsetLeft;
        i.support.fixedPosition && "fixed" === c.position && (h += Math.max(f.scrollTop, g.scrollTop), j += Math.max(f.scrollLeft, g.scrollLeft));
        return{ top: h, left: j };
    };
    i.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop, c = a.offsetLeft;
            i.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(i.css(a, "marginTop")) || 0, c += parseFloat(i.css(a, "marginLeft")) ||
                0);
            return{ top: b, left: c };
        },
        setOffset: function(a, b, c) {
            var d = i.css(a, "position");
            if ("static" === d)a.style.position = "relative";
            var e = i(a), f = e.offset(), g = i.css(a, "top"), h = i.css(a, "left"), j = {}, k = {};
            ("absolute" === d || "fixed" === d) && -1 < i.inArray("auto", [g, h]) ? (k = e.position(), d = k.top, h = k.left) : (d = parseFloat(g) || 0, h = parseFloat(h) || 0);
            i.isFunction(b) && (b = b.call(a, c, f));
            if (null != b.top)j.top = b.top - f.top + d;
            if (null != b.left)j.left = b.left - f.left + h;
            "using" in b ? b.using.call(a, j) : e.css(j);
        }
    };
    i.fn.extend({
        position: function() {
            if (!this[0])return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = Ua.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
            c.top -= parseFloat(i.css(a, "marginTop")) || 0;
            c.left -= parseFloat(i.css(a, "marginLeft")) || 0;
            d.top += parseFloat(i.css(b[0], "borderTopWidth")) || 0;
            d.left += parseFloat(i.css(b[0], "borderLeftWidth")) || 0;
            return{ top: c.top - d.top, left: c.left - d.left };
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || q.body; a && !Ua.test(a.nodeName) && "static" === i.css(a, "position");)a = a.offsetParent;
                return a;
            });
        }
    });
    i.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        i.fn[d] = function(c) {
            var e, f;
            if (c === b) {
                e = this[0];
                return!e ? null : (f = fa(e)) ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : i.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d];
            }
            return this.each(function() { (f = fa(this)) ? f.scrollTo(!a ? c : i(f).scrollLeft(), a ? c : i(f).scrollTop()) : this[d] = c; });
        };
    });
    i.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        i.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(i.css(a,
                d, "padding")) : this[d]() : null;
        };
        i.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(i.css(b, d, a ? "margin" : "border")) : this[d]() : null;
        };
        i.fn[d] = function(a) {
            var e = this[0];
            if (!e)return null == a ? null : this;
            if (i.isFunction(a))
                return this.each(function(b) {
                    var c = i(this);
                    c[d](a.call(this, b, c[d]()));
                });
            if (i.isWindow(e)) {
                var f = e.document.documentElement["client" + c], g = e.document.body;
                return"CSS1Compat" === e.document.compatMode && f || g && g["client" + c] || f;
            }
            if (9 === e.nodeType)
                return Math.max(e.documentElement["client" +
                    c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            return a === b ? (e = i.css(e, d), f = parseFloat(e), i.isNumeric(f) ? f : e) : this.css(d, "string" === typeof a ? a : a + "px");
        };
    });
    a.jQuery = a.$ = i;
    "function" === typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return i; });
})(window);
var trace = { box: null, useTextArea: !0, suppress: !0, zeroTime: new Date, filter: null };
trace.log = function(a, b) {
    if (!trace.suppress) {
        if (!trace.box)box = trace.useTextArea ? document.createElement("TEXTAREA") : document.createElement("DIV"), box.id = "tracebox", box.style.position = "absolute", box.style.width = "200px", box.style.height = "100px", box.style.left = "100%", box.style.top = "100%", box.style.overflow = "scroll", box.style.margin = "-120px 0 0 -220px", document.body.appendChild(box), trace.box = box;
        if (b || trace.logShouldClear)trace.box.innerHTML = "", trace.box.value = "";
        trace.useTextArea ? trace.box.value = trace.box.value +
            a + "\r\n" : trace.box.innerHTML = trace.box.innerHTML + a + "<br/>";
        trace.logShouldClear = !1;
        setTimeout("trace.logShouldClear = true", 100);
    }
};
trace.logMulti = function() {
    if (!trace.suppress) {
        for (var a = "", b = !0, c = 0; c < trace.logMulti.arguments.length; c++)b || (a += ", "), a += trace.logMulti.arguments[c], b = !1;
        trace.log(a);
    }
};
trace.getTicks = function() { return new Date - trace.zeroTime; };
if (window.console) {
    window.console.suppress = !0;
    window.console.logMulti = function() {
        if (!window.console.suppress) {
            for (var a = new Date - trace.zeroTime + ": ", b = !0, c = 0; c < window.console.logMulti.arguments.length; c++)b || (a += ", "), a += window.console.logMulti.arguments[c], b = !1;
            console.filter && -1 == a.indexOf(console.filter) || (window.console.log(a), window.console.logRemote && window.console.logRemote(a), window.EventLogger && window.EventLogger.logNote(a));
        }
    };
    if (-1 < navigator.userAgent.indexOf("AppleWebKit/") && -1 == location.search.indexOf("logging="))
        window.console.logMulti =
            function() {
                for (var a = new Date - trace.zeroTime + ": ", b = !0, c = 0; c < window.console.logMulti.arguments.length; c++)b || (a += ", "), a += window.console.logMulti.arguments[c], b = !1;
                (!console.filter || -1 != a.indexOf(console.filter)) && window.console.log(new Date - trace.zeroTime, window.console.logMulti.arguments);
                window.EventLogger && window.EventLogger.logNote(a);
            };
    if (-1 < location.search.indexOf("remote=1"))
        window.console.sockets = [], window.console.socketIndex = 0, window.console.logRemote = function(a) {
            a = "/Log?message=" + encodeURIComponent(a) +
                "&rand=" + Math.random();
            $.ajax({ url: a });
        };
} else var console = { log: function(a) { trace.log(a); }, logMulti: trace.logMulti, suppress: !0 };
var ppDebug = {
        m_arrDebug: [],
        WriteQueue: function() {
            for (var a = 0; a < this.m_arrDebug.length; a++)this.debug_trace(this.m_arrDebug[a]);
            this.m_arrDebug = [];
        },
        Clear: function() {},
        debug_trace: function() {},
        debug_error: function(a) { console.log("ERROR", a); }
    },
    g_nStartTime = new Date;

function Elapsed() { return(new Date).getTime() - g_nStartTime; }

function ParseXML() {}

window.trace = trace;
$.each("touchstart touchmove touchend orientationchange tap taphold swipe swipeleft swiperight swipeup swipedown scrollstart scrollstop".split(" "), function(a, b) {
    $.fn[b] = function(a) { return a ? this.bind(b, a) : this.trigger(b); };
    $.attrFn[b] = !0;
});
var supportTouch = -1 < navigator.userAgent.indexOf("iP"), scrollEvent = "touchmove scroll", touchStartEvent = supportTouch ? "touchstart" : "mousedown", touchStopEvent = supportTouch ? "touchend" : "mouseup", touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
$.event.special.scrollstart = {
    enabled: !0,
    setup: function() {

        function a(a, d) {
            c = d;
            var g = a.type;
            a.type = c ? "scrollstart" : "scrollstop";
            $.event.handle.call(b, a);
            a.type = g;
        }

        var b = this, c, d;
        $(b).bind(scrollEvent, function(b) { $.event.special.scrollstart.enabled && (c || a(b, !0), clearTimeout(d), d = setTimeout(function() { a(b, !1); }, 50)); });
    }
};
$.event.special.tap = {
    setup: function() {
        var a = this, b = $(a);
        b.bind(touchStartEvent, function(c) {

            function d() {
                c.pageX = c.pageX || c.originalEvent.touches[0].pageX;
                c.pageY = c.pageY || c.originalEvent.touches[0].pageY;
                if (10 < Math.abs(g[0] - c.pageX) || 10 < Math.abs(g[1] - c.pageY))e = !0;
            }

            if (!(c.which && 1 !== c.which)) {
                c.pageX = c.pageX || c.originalEvent.touches[0].pageX;
                c.pageY = c.pageY || c.originalEvent.touches[0].pageY;
                var e = !1, f = !0, g = [c.pageX, c.pageY], h, j;
                j = setTimeout(function() {
                    if (f && !e)
                        h = c.type, c.type = "taphold", $.event.handle.call(a,
                            c), c.type = h;
                }, 750);
                b.one(touchMoveEvent, d).one(touchStopEvent, function(c) {
                    b.unbind(touchMoveEvent, d);
                    clearTimeout(j);
                    f = !1;
                    if (10 < Math.abs(g[0] - c.pageX) || 10 < Math.abs(g[1] - c.pageY))e = !0;
                    if (!e)h = c.type, c.type = "tap", $.event.handle.call(a, c), c.type = h;
                });
            }
        });
    }
};
$.event.special.swipe = {
    setup: function() {
        var a = $(this);
        a.bind(touchStartEvent, function(b) {

            function c(a) {
                if (e) {
                    var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a;
                    f = { time: (new Date).getTime(), coords: [b.pageX, b.pageY] };
                    10 < Math.abs(e.coords[0] - f.coords[0]) && a.preventDefault();
                }
            }

            var d = b.originalEvent.touches ? b.originalEvent.touches[0] : b, e = { time: (new Date).getTime(), coords: [d.pageX, d.pageY], origin: $(b.target) }, f;
            a.bind(touchMoveEvent, c).one(touchStopEvent, function() {
                a.unbind(touchMoveEvent, c);
                e &&
                    f && (1E3 > f.time - e.time && 30 < Math.abs(e.coords[0] - f.coords[0]) && 75 > Math.abs(e.coords[1] - f.coords[1]) ? e.origin.trigger("swipe").trigger(e.coords[0] > f.coords[0] ? "swipeleft" : "swiperight") : 1E3 > f.time - e.time && 30 < Math.abs(e.coords[1] - f.coords[1]) && 75 > Math.abs(e.coords[0] - f.coords[0]) && e.origin.trigger("swipe").trigger(e.coords[1] > f.coords[1] ? "swipeup" : "swipedown"));
                e = f = void 0;
            });
        });
    }
};
(function(a) {

    function b() {
        var a = d();
        a !== e && (e = a, c.trigger("orientationchange"));
    }

    var c = a(window), d, e;
    a.event.special.orientationchange = {
        setup: function() {
            if (a.support.orientation)return!1;
            e = d();
            c.bind("resize", b);
        },
        teardown: function() {
            if (a.support.orientation)return!1;
            c.unbind("resize", b);
        },
        add: function(a) {
            var b = a.handler;
            a.handler = function(a) {
                a.orientation = d();
                return b.apply(this, arguments);
            };
        }
    };
    d = function() {
        var a = document.documentElement;
        return a && 1.1 > a.clientWidth / a.clientHeight ? "portrait" : "landscape";
    };
})(jQuery);
$.each({ scrollstop: "scrollstart", taphold: "tap", swipeup: "swipe", swipedown: "swipe", swipeleft: "swipe", swiperight: "swipe" }, function(a, b) { $.event.special[a] = { setup: function() { $(this).bind(b, $.noop); } }; });
(function() {

    function a(a, b) {
        var l;
        this.element = "object" == typeof a ? a : document.getElementById(a);
        this.wrapper = this.element.parentNode;
        this.element.style.webkitTransitionProperty = "-webkit-transform";
        this.element.style.webkitTransitionTimingFunction = "cubic-bezier(0,0,0.25,1)";
        this.element.style.webkitTransitionDuration = "0";
        this.element.style.webkitTransform = j + "0,0" + k;
        this.options = {
            bounce: c,
            momentum: c,
            checkDOMChanges: !0,
            topOnDOMChanges: !1,
            hScrollbar: c,
            vScrollbar: c,
            fadeScrollbar: d || !e,
            shrinkScrollbar: d ||
                !e,
            desktopCompatibility: !1,
            overflow: "auto",
            snap: !1,
            bounceLock: !1,
            directionLock: !0,
            scrollbarColor: "rgba(150,150,150,0.5)",
            onScrollEnd: function() {}
        };
        if ("object" == typeof b)for (l in b)this.options[l] = b[l];
        if (this.options.desktopCompatibility)this.options.overflow = "hidden";
        this.onScrollEnd = this.options.onScrollEnd;
        delete this.options.onScrollEnd;
        this.wrapper.style.overflow = this.options.overflow;
        this.refresh();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this, !1);
        if (e || this.options.desktopCompatibility)this.element.addEventListener(f, this, !1), this.element.addEventListener(g, this, !1), this.element.addEventListener(h, this, !1);
        this.options.checkDOMChanges && this.element.addEventListener("DOMSubtreeModified", this, !1);
    }

    function b(a, b, c, d, e) {
        var f = document;
        this.dir = a;
        this.fade = c;
        this.shrink = d;
        this.uid = ++l;
        this.bar = f.createElement("div");
        this.bar.style.cssText = "position:absolute;top:0;left:0;-webkit-transition-timing-function:cubic-bezier(0,0,0.25,1);pointer-events:none;-webkit-transition-duration:0;-webkit-transition-delay:0;-webkit-transition-property:-webkit-transform;z-index:10;background:" +
            e + ";-webkit-transform:" + j + "0,0" + k + ";" + ("horizontal" == a ? "-webkit-border-radius:3px 2px;min-width:6px;min-height:5px" : "-webkit-border-radius:2px 3px;min-width:5px;min-height:6px");
        this.wrapper = f.createElement("div");
        this.wrapper.style.cssText = "-webkit-mask:-webkit-canvas(scrollbar" + this.uid + this.dir + ");position:absolute;z-index:10;pointer-events:none;overflow:hidden;opacity:0;-webkit-transition-duration:" + (c ? "300ms" : "0") + ";-webkit-transition-delay:0;-webkit-transition-property:opacity;" + ("horizontal" ==
            this.dir ? "bottom:2px;left:2px;right:7px;height:5px" : "top:2px;right:2px;bottom:7px;width:5px;");
        this.wrapper.appendChild(this.bar);
        b.appendChild(this.wrapper);
    }

    a.prototype = {
        x: 0,
        y: 0,
        enabled: !0,
        handleEvent: function(a) {
            switch (a.type) {
            case f:
                this.touchStart(a);
                break;
            case g:
                this.touchMove(a);
                break;
            case h:
                this.touchEnd(a);
                break;
            case "webkitTransitionEnd":
                this.transitionEnd();
                break;
            case "orientationchange":
            case "resize":
                this.refresh();
                break;
            case "DOMSubtreeModified":
                this.onDOMModified(a);
            }
        },
        onDOMModified: function(a) {
            var b =
                this;
            a.target.parentNode == b.element && (setTimeout(function() { b.refresh(); }, 0), b.options.topOnDOMChanges && (0 != b.x || 0 != b.y) && b.scrollTo(0, 0, "0"));
        },
        refresh: function() {
            var a = this.x, c = this.y;
            this.scrollWidth = this.wrapper.clientWidth;
            this.scrollHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.element.offsetWidth;
            this.scrollerHeight = this.element.offsetHeight;
            this.maxScrollX = this.scrollWidth - this.scrollerWidth;
            this.maxScrollY = this.scrollHeight - this.scrollerHeight;
            this.directionY = this.directionX = 0;
            if (this.scrollX)
                if (0 <=
                    this.maxScrollX)a = 0;
                else if (this.x < this.maxScrollX)a = this.maxScrollX;
            if (this.scrollY)
                if (0 <= this.maxScrollY)c = 0;
                else if (this.y < this.maxScrollY)c = this.maxScrollY;
            if (this.options.snap)this.maxPageX = -Math.floor(this.maxScrollX / this.scrollWidth), this.maxPageY = -Math.floor(this.maxScrollY / this.scrollHeight), c = this.snap(a, c), a = c.x, c = c.y;
            if (a != this.x || c != this.y)this.setTransitionTime("0"), this.setPosition(a, c, !0);
            this.scrollX = this.scrollerWidth > this.scrollWidth;
            this.scrollY = !this.options.bounceLock && !this.scrollX ||
                this.scrollerHeight > this.scrollHeight;
            if (this.options.hScrollbar && this.scrollX)this.scrollBarX = this.scrollBarX || new b("horizontal", this.wrapper, this.options.fadeScrollbar, this.options.shrinkScrollbar, this.options.scrollbarColor), this.scrollBarX.init(this.scrollWidth, this.scrollerWidth);
            else if (this.scrollBarX)this.scrollBarX = this.scrollBarX.remove();
            if (this.options.vScrollbar && this.scrollY && this.scrollerHeight > this.scrollHeight)
                this.scrollBarY = this.scrollBarY || new b("vertical", this.wrapper, this.options.fadeScrollbar,
                    this.options.shrinkScrollbar, this.options.scrollbarColor), this.scrollBarY.init(this.scrollHeight, this.scrollerHeight);
            else if (this.scrollBarY)this.scrollBarY = this.scrollBarY.remove();
        },
        setPosition: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.element.style.webkitTransform = j + this.x + "px," + this.y + "px" + k;
            c || (this.scrollBarX && this.scrollBarX.setPosition(this.x), this.scrollBarY && this.scrollBarY.setPosition(this.y));
        },
        setTransitionTime: function(a) {
            a = a || "0";
            this.element.style.webkitTransitionDuration = a;
            if (this.scrollBarX)
                this.scrollBarX.bar.style.webkitTransitionDuration =
                    a, this.scrollBarX.wrapper.style.webkitTransitionDuration = c && this.options.fadeScrollbar ? "300ms" : "0";
            if (this.scrollBarY)this.scrollBarY.bar.style.webkitTransitionDuration = a, this.scrollBarY.wrapper.style.webkitTransitionDuration = c && this.options.fadeScrollbar ? "300ms" : "0";
        },
        touchStart: function(a) {
            var b;
            if (this.enabled) {
                a.preventDefault();
                a.stopPropagation();
                this.scrolling = !0;
                this.moved = !1;
                this.distY = this.distX = 0;
                this.setTransitionTime("0");
                if (this.options.momentum || this.options.snap)
                    if (b = new WebKitCSSMatrix(window.getComputedStyle(this.element).webkitTransform),
                        b.e != this.x || b.f != this.y)document.removeEventListener("webkitTransitionEnd", this, !1), this.setPosition(b.e, b.f), this.moved = !0;
                this.touchStartX = e ? a.changedTouches[0].pageX : a.pageX;
                this.scrollStartX = this.x;
                this.touchStartY = e ? a.changedTouches[0].pageY : a.pageY;
                this.scrollStartY = this.y;
                this.scrollStartTime = a.timeStamp;
                this.directionY = this.directionX = 0;
            }
        },
        touchMove: function(a) {
            if (this.scrolling) {
                var b = e ? a.changedTouches[0].pageX : a.pageX,
                    c = e ? a.changedTouches[0].pageY : a.pageY,
                    d = this.scrollX ? b - this.touchStartX :
                        0,
                    f = this.scrollY ? c - this.touchStartY : 0,
                    g = this.x + d,
                    h = this.y + f;
                a.stopPropagation();
                this.touchStartX = b;
                this.touchStartY = c;
                if (0 <= g || g < this.maxScrollX)g = this.options.bounce ? Math.round(this.x + d / 3) : 0 <= g || 0 <= this.maxScrollX ? 0 : this.maxScrollX;
                if (0 <= h || h < this.maxScrollY)h = this.options.bounce ? Math.round(this.y + f / 3) : 0 <= h || 0 <= this.maxScrollY ? 0 : this.maxScrollY;
                if (5 < this.distX + this.distY) {
                    if (this.options.directionLock)
                        if (this.distX - 3 > this.distY)h = this.y, f = 0;
                        else if (this.distY - 3 > this.distX)g = this.x, d = 0;
                    this.setPosition(g,
                        h);
                    this.moved = !0;
                    this.directionX = 0 < d ? -1 : 1;
                    this.directionY = 0 < f ? -1 : 1;
                } else this.distX += Math.abs(d), this.distY += Math.abs(f);
            }
        },
        touchEnd: function(a) {
            if (this.scrolling) {
                var b = a.timeStamp - this.scrollStartTime, c = e ? a.changedTouches[0] : a, d, f;
                d = 0;
                f = this.x;
                var g = this.y;
                this.scrolling = !1;
                a.preventDefault();
                if (this.moved)
                    if (!this.options.snap && 250 < b)this.resetPosition();
                    else {
                        this.options.momentum && (a = !0 === this.scrollX ? this.momentum(this.x - this.scrollStartX, b, this.options.bounce ? -this.x + this.scrollWidth / 5 : -this.x,
                            this.options.bounce ? this.x + this.scrollerWidth - this.scrollWidth + this.scrollWidth / 5 : this.x + this.scrollerWidth - this.scrollWidth) : { dist: 0, time: 0 }, c = !0 === this.scrollY ? this.momentum(this.y - this.scrollStartY, b, this.options.bounce ? -this.y + this.scrollHeight / 5 : -this.y, this.options.bounce ? (0 > this.maxScrollY ? this.y + this.scrollerHeight - this.scrollHeight : 0) + this.scrollHeight / 5 : this.y + this.scrollerHeight - this.scrollHeight) : { dist: 0, time: 0 }, d = Math.max(Math.max(a.time, c.time), 1), f = this.x + a.dist, g = this.y + c.dist);
                        if (this.options.snap)
                            a =
                                this.snap(f, g), f = a.x, g = a.y, d = Math.max(a.time, d);
                        this.scrollTo(f, g, d + "ms");
                    }
                else if (this.resetPosition(), e) {
                    for (d = c.target; 1 != d.nodeType;)d = d.parentNode;
                    a.preventDefault();
                    f = document.createEvent("MouseEvents");
                    f.initMouseEvent("click", !0, !0, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                    f._fake = !0;
                    d.dispatchEvent(f);
                }
            }
        },
        transitionEnd: function() {
            document.removeEventListener("webkitTransitionEnd", this, !1);
            this.resetPosition();
        },
        resetPosition: function() {
            var a =
                    this,
                b = a.x,
                c = a.y;
            if (0 <= a.x)b = 0;
            else if (a.x < a.maxScrollX)b = a.maxScrollX;
            if (0 <= a.y || 0 < a.maxScrollY)c = 0;
            else if (a.y < a.maxScrollY)c = a.maxScrollY;
            b != a.x || c != a.y ? a.scrollTo(b, c) : (a.moved && (a.onScrollEnd(), setTimeout(function() { a.moved = !1; }, 0)), a.scrollBarX && a.scrollBarX.hide(), a.scrollBarY && a.scrollBarY.hide());
        },
        snap: function(a, b) {
            var c, a = 0 < this.directionX ? Math.floor(a / this.scrollWidth) : 0 > this.directionX ? Math.ceil(a / this.scrollWidth) : Math.round(a / this.scrollWidth);
            this.pageX = -a;
            a *= this.scrollWidth;
            if (0 <
                a)a = this.pageX = 0;
            else if (a < this.maxScrollX)this.pageX = this.maxPageX, a = this.maxScrollX;
            b = 0 < this.directionY ? Math.floor(b / this.scrollHeight) : 0 > this.directionY ? Math.ceil(b / this.scrollHeight) : Math.round(b / this.scrollHeight);
            this.pageY = -b;
            b *= this.scrollHeight;
            if (0 < b)b = this.pageY = 0;
            else if (b < this.maxScrollY)this.pageY = this.maxPageY, b = this.maxScrollY;
            c = Math.round(Math.max(500 * (Math.abs(this.x - a) / this.scrollWidth), 500 * (Math.abs(this.y - b) / this.scrollHeight)));
            return{ x: a, y: b, time: c };
        },
        scrollTo: function(a, b, c) {
            this.x ==
                a && this.y == b ? this.resetPosition() : (this.moved = !0, this.setTransitionTime(c || "350ms"), this.setPosition(a, b), "0" === c || "0s" == c || "0ms" == c ? this.resetPosition() : document.addEventListener("webkitTransitionEnd", this, !1));
        },
        scrollToPage: function(a, b, c) {
            if (!this.options.snap)this.pageX = -Math.round(this.x / this.scrollWidth), this.pageY = -Math.round(this.y / this.scrollHeight);
            "next" == a ? a = ++this.pageX : "prev" == a && (a = --this.pageX);
            "next" == b ? b = ++this.pageY : "prev" == b && (b = --this.pageY);
            a = -a * this.scrollWidth;
            b = -b * this.scrollHeight;
            b = this.snap(a, b);
            a = b.x;
            b = b.y;
            this.scrollTo(a, b, c || "500ms");
        },
        scrollToElement: function(a, b) {
            if (a = "object" == typeof a ? a : this.element.querySelector(a)) {
                var c = this.scrollX ? -a.offsetLeft : 0, d = this.scrollY ? -a.offsetTop : 0;
                if (0 <= c)c = 0;
                else if (c < this.maxScrollX)c = this.maxScrollX;
                if (0 <= d)d = 0;
                else if (d < this.maxScrollY)d = this.maxScrollY;
                this.scrollTo(c, d, b);
            }
        },
        momentum: function(a, b, c, d) {
            var b = 1E3 * (Math.abs(a) / b), e = b * b / 2.5 / 1E3, f = 0;
            0 < a && e > c ? (b = b * c / e / 2.5, e = c) : 0 > a && e > d && (b = b * d / e / 2.5, e = d);
            f = b / 1.2;
            return{
                dist: Math.round(e *
                (0 > a ? -1 : 1)),
                time: Math.round(f)
            };
        },
        destroy: function(a) {
            window.removeEventListener("onorientationchange" in window ? "orientationchange" : "resize", this, !1);
            this.element.removeEventListener(f, this, !1);
            this.element.removeEventListener(g, this, !1);
            this.element.removeEventListener(h, this, !1);
            document.removeEventListener("webkitTransitionEnd", this, !1);
            this.options.checkDOMChanges && this.element.removeEventListener("DOMSubtreeModified", this, !1);
            if (this.scrollBarX)this.scrollBarX = this.scrollBarX.remove();
            if (this.scrollBarY)
                this.scrollBarY =
                    this.scrollBarY.remove();
            a && this.wrapper.parentNode.removeChild(this.wrapper);
            return null;
        }
    };
    b.prototype = {
        init: function(a, b) {
            var c = document, d = Math.PI;
            if ("horizontal" == this.dir) {
                if (this.maxSize != this.wrapper.offsetWidth)this.maxSize = this.wrapper.offsetWidth, c = c.getCSSCanvasContext("2d", "scrollbar" + this.uid + this.dir, this.maxSize, 5), c.fillStyle = "rgb(0,0,0)", c.beginPath(), c.arc(2.5, 2.5, 2.5, d / 2, -d / 2, !1), c.lineTo(this.maxSize - 2.5, 0), c.arc(this.maxSize - 2.5, 2.5, 2.5, -d / 2, d / 2, !1), c.closePath(), c.fill();
            } else if (this.maxSize !=
                this.wrapper.offsetHeight)this.maxSize = this.wrapper.offsetHeight, c = c.getCSSCanvasContext("2d", "scrollbar" + this.uid + this.dir, 5, this.maxSize), c.fillStyle = "rgb(0,0,0)", c.beginPath(), c.arc(2.5, 2.5, 2.5, d, 0, !1), c.lineTo(5, this.maxSize - 2.5), c.arc(2.5, this.maxSize - 2.5, 2.5, 0, d, !1), c.closePath(), c.fill();
            this.size = Math.max(Math.round(this.maxSize * this.maxSize / b), 6);
            this.maxScroll = this.maxSize - this.size;
            this.toWrapperProp = this.maxScroll / (a - b);
            this.bar.style["horizontal" == this.dir ? "width" : "height"] = this.size +
                "px";
        },
        setPosition: function(a) {
            "1" != this.wrapper.style.opacity && this.show();
            a = Math.round(this.toWrapperProp * a);
            0 > a ? (a = this.shrink ? a + 3 * a : 0, 7 > this.size + a && (a = -this.size + 6)) : a > this.maxScroll && (a = this.shrink ? a + 3 * (a - this.maxScroll) : this.maxScroll, 7 > this.size + this.maxScroll - a && (a = this.size + this.maxScroll - 6));
            a = "horizontal" == this.dir ? j + a + "px,0" + k : j + "0," + a + "px" + k;
            this.bar.style.webkitTransform = a;
        },
        show: function() {
            if (c)this.wrapper.style.webkitTransitionDelay = "0";
            this.wrapper.style.opacity = "1";
        },
        hide: function() {
            if (c)
                this.wrapper.style.webkitTransitionDelay =
                    "350ms";
            this.wrapper.style.opacity = "0";
        },
        remove: function() {
            this.wrapper.parentNode.removeChild(this.wrapper);
            return null;
        }
    };
    var c = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, d = /iphone|ipad/gi.test(navigator.appVersion), e = "ontouchstart" in window, f = e ? "touchstart" : "mousedown", g = e ? "touchmove" : "mousemove", h = e ? "touchend" : "mouseup", j = "translate" + (c ? "3d(" : "("), k = c ? ",0)" : ")", l = 0;
    window.iScroll = a;
})();
var util = {};
util.format = function(a) {
    var b = util.format.arguments[1], c = 1;
    if ("object" == typeof b) {
        for (key in b)a = a.replace("{" + key + "}", b[key]);
        return a;
    }
    !b || !b.splice ? b = util.format.arguments : c = 0;
    for (var d = c; d < b.length; d++)a = a.replace("{" + (d - c) + "}", b[d]);
    return a;
};
util.min = function(a, b) { return a > b ? b : a; };
util.max = function(a, b) { return a < b ? b : a; };
util.count = function(a) {
    var b = 0;
    for (key in a)b++;
    return b;
};
util.hasMutualKey = function(a, b) {
    var c = !1;
    $.each(a, function(a) { $.each(b, function(b) { c = c || a == b; }); });
    return c;
};
util.asyncEach = function(a, b, c, d) {
    d || (d = 0);
    var e = [], f = 0;
    $.each(a, function(a, b) {
        var c = { index: a, item: b, next: null };
        if (0 < e.length)e[e.length - 1].next = c;
        e.push(c);
        f++;
    });
    var g = function(a) {
            b(a.index, a.item);
            f--;
            a.next && setTimeout(function() { g(a.next); }, d);
        },
        h = function() { 0 == f && c ? c() : setTimeout(function() { h(); }, 10); };
    0 < e.length && g(e[0]);
    h();
};
util.popArrayElement = function(a, b) {
    if (!a.indexOf)return null;
    var c = a.indexOf(b);
    return-1 < c ? a.splice(c, 1)[0] : null;
};
jQuery.cookie = function(a, b, c) {
    if (1 < arguments.length && "[object Object]" !== "" + b) {
        c = jQuery.extend({}, c);
        if (null === b || void 0 === b)c.expires = -1;
        if ("number" === typeof c.expires) {
            var d = c.expires, e = c.expires = new Date;
            e.setDate(e.getDate() + d);
        }
        b = "" + b;
        return document.cookie = [encodeURIComponent(a), "=", c.raw ? b : encodeURIComponent(b), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("");
    }
    c = b || {};
    e = c.raw ? function(a) { return a; } : decodeURIComponent;
    return(d = RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie)) ? e(d[1]) : null;
};
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(a) {
        for (var b = "", c, d, e, f, g, h, j = 0, a = Base64._utf8_encode(a); j < a.length;)c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + this._keyStr.charAt(f) + this._keyStr.charAt(c) + this._keyStr.charAt(g) + this._keyStr.charAt(h);
        return b;
    },
    decode: function(a) {
        for (var b = "", c, d, e, f, g, h = 0, a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h <
            a.length;)c = this._keyStr.indexOf(a.charAt(h++)), d = this._keyStr.indexOf(a.charAt(h++)), f = this._keyStr.indexOf(a.charAt(h++)), g = this._keyStr.indexOf(a.charAt(h++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
        return b = Base64._utf8_decode(b);
    },
    _utf8_encode: function(a) {
        for (var a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >>
                6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128));
        }
        return b;
    },
    _utf8_decode: function(a) {
        for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length;)d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3);
        return b;
    }
};

function TaskQueue() {
    this.tasks = [];
    this.timeout = 50;
    this.tick();
}

TaskQueue.prototype.add = function(a) { this.tasks.push(a); };
TaskQueue.prototype.tick = function(a) {
    (a = this.tasks.shift()) && a();
    var b = this;
    setTimeout(function() { b.tick(); }, b.timeout);
};

function MatrixTransform() { this.reset(); }

MatrixTransform.PI_OVER_180 = Math.PI / 180;
MatrixTransform.prototype.reset = function() { this.m = [1, 0, 0, 1, 0, 0]; };
MatrixTransform.prototype.copy = function(a) {
    a = new MatrixTransform;
    a.m = [this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]];
    return a;
};
MatrixTransform.prototype.multiply = function(a) {
    var b = this.m[1] * a.m[0] + this.m[3] * a.m[1], c = this.m[0] * a.m[2] + this.m[2] * a.m[3], d = this.m[1] * a.m[2] + this.m[3] * a.m[3], e = this.m[0] * a.m[4] + this.m[2] * a.m[5] + this.m[4], f = this.m[1] * a.m[4] + this.m[3] * a.m[5] + this.m[5];
    this.m[0] = this.m[0] * a.m[0] + this.m[2] * a.m[1];
    this.m[1] = b;
    this.m[2] = c;
    this.m[3] = d;
    this.m[4] = e;
    this.m[5] = f;
};
MatrixTransform.prototype.invert = function() {
    var a = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), b = -this.m[1] * a, c = -this.m[2] * a, d = this.m[0] * a, e = a * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), f = a * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    this.m[0] = this.m[3] * a;
    this.m[1] = b;
    this.m[2] = c;
    this.m[3] = d;
    this.m[4] = e;
    this.m[5] = f;
};
MatrixTransform.prototype.rotateDegrees = function(a) { this.rotate(a * MatrixTransform.PI_OVER_180); };
MatrixTransform.prototype.rotate = function(a) {
    var b = Math.cos(a), a = Math.sin(a), c = this.m[1] * b + this.m[3] * a, d = this.m[0] * -a + this.m[2] * b, e = this.m[1] * -a + this.m[3] * b;
    this.m[0] = this.m[0] * b + this.m[2] * a;
    this.m[1] = c;
    this.m[2] = d;
    this.m[3] = e;
};
MatrixTransform.prototype.translate = function(a, b) {
    this.m[4] += this.m[0] * a + this.m[2] * b;
    this.m[5] += this.m[1] * a + this.m[3] * b;
};
MatrixTransform.prototype.scale = function(a, b) {
    this.m[0] *= a;
    this.m[1] *= a;
    this.m[2] *= b;
    this.m[3] *= b;
};
MatrixTransform.prototype.transformPoint = function(a, b) {
    var c = a, d = b, a = c * this.m[0] + d * this.m[2] + this.m[4], b = c * this.m[1] + d * this.m[3] + this.m[5];
    return{ x: a, y: b };
};
MatrixTransform.prototype.unTransformPoint = function(a, b) {
    var c = this.copy();
    c.invert();
    return c.transformPoint(a, b);
};
MatrixTransform.prototype.applyContext = function(a) { a.setTransform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]); };
MatrixTransform.prototype.toCSSTransform = function() { return"matrix(" + this.m[0] + "," + this.m[1] + "," + this.m[2] + "," + this.m[3] + "," + this.m[4] + "," + this.m[5] + ")"; };
var Element = function() {
    this.ref = this.container = null;
    this.events = [];
    this.actionGroups = {};
    this.variables = {};
    this.states = {};
    this.parent = null;
    this.children = {};
    this.log = [];
};
Element.prototype.objectType = "Element";
Element.prototype.innerType = "Element";
Element.PixelSrc = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
Element.prototype.restoreVariableResumeData = function(a) {
    for (var b = $(this.xml).children("variables").children("[resume='true'][type='boolean']"), c = $(this.xml).children("variables").children("[resume='true'][type!='boolean']"), a = new bwChunk(a), d = 0; !a.EOF();)for (var e = a.NextUBase10(1), f = 1; f <= e;)e & f && (d < b.length ? this.variables[$(b[d]).attr("name")] = "true" : this.extractNextSpecialBool && this.extractNextSpecialBool()), d++, f *= 2;
    b = null;
    for (d = 0; d <= c.length; d++)
        if (d < c.length) {
            var b = b ? b.NextChunk() : a.NextChunk(),
                e = $(c[d]),
                f = this.variableTypes[e.attr("name")],
                g = b.Data();
            switch (f) {
            case "number":
                g = b.NextBase10();
                break;
            case "string":
                g = bwChunk.DecodeString(g);
            }
            this.variables[e.attr("name")] = g;
        } else this.extractNextSpecialVar && (b = b ? b.NextChunk() : a.NextChunk(), this.extractNextSpecialVar(b.Data()));
    return b ? b.Remainder() : a.Remainder();
};
Element.prototype.shouldStoreVariableResume = function() { return this.getVariableResumeData() != bwChunk.EMPTY_CHUNK; };
Element.prototype.hasVariables = function() { return 0 < $(this.xml).children("variables").children().length; };
Element.prototype.hasResumeVariables = function() {
    var a = this, b = !1;
    $.each(this.variables, function(c, d) { a.variableResumes[c] && d != a.variableDefaults[c] && (b = !0); });
    return b;
};
Element.prototype.getVariableResumeData = function(a) {
    var b = this,
        c = "",
        d = "",
        e = 1,
        f = 0,
        g = !1,
        h = !1,
        j = {},
        k = function(a, k) {
            if (!j[a] && b.variableResumes[a])
                switch (k != b.variableDefaults[a] && (h = !0), b.variableTypes[a]) {
                case "bool":
                case "boolean":
                    k && "false" != k && (f += e);
                    e *= 2;
                    g = !0;
                    32 < e && (e = 1, d += bwChunk.UBase10toN(f), g = !1, f = 0);
                    break;
                case "string":
                    strTemp = bwChunk.EncodeString(k);
                    c += bwChunk.CreateChunk(strTemp);
                    break;
                case "number":
                    c += bwChunk.CreateChunk(bwChunk.Base10toN(parseInt(k)));
                }
        };
    $.each(this.variables, k);
    this.getExtraResumeVars &&
        $.each(this.getExtraResumeVars(), k);
    g && (d += bwChunk.UBase10toN(f));
    c = bwChunk.CreateChunk(d) + c;
    return!h ? a ? "" : bwChunk.EMPTY_CHUNK : bwChunk.CreateChunk(c);
};
Element.prototype.toData = function(a) {
    var b = this, c = {}, d = {};
    $.each(this.variables, function(a, f) {
        if (f != b.variableDefaults[a] && !d[a]) {
            if (!c.variables)c.variables = {};
            c.variables[a] = f;
        }
    });
    $.each(this.children, function(b, d) {
        if (d.toData) {
            var g = d.toData(a);
            if (!jQuery.isEmptyObject(g)) {
                if (!c.children)c.children = {};
                c.children[b] = g;
            }
        }
    });
    if (this.shuffled)c.shuffled = !0;
    if (void 0 != this.shuffleX)c.shuffleX = this.shuffleX, c.shuffleY = this.shuffleY;
    if (this.visible)c.visible = !0;
    return c;
};
Element.prototype.updateFromData = function(a, b) {
    var c = this;
    c.reset(b);
    a.variables && $.each(a.variables, function(b, e) {
        if (c.variables[b] != e)
            switch (c.variables[b] = e, b) {
            case "OnStage":
                a.visible = "true" == e;
            }
    });
    a.children && $.each(a.children, function(a, e) {
        var f = c.children[a];
        f && f.updateFromData(e, b);
    });
    if (!b) {
        if (a.shuffled) {
            this.shuffled = !0;
            if (this.shuffleGroup)this.shuffleGroup.shuffled = !0;
            if (void 0 != a.shuffleX)this.shuffleX = a.shuffleX, this.shuffleY = a.shuffleY, this.x = this.shuffleX, this.y = this.shuffleY;
            if (void 0 !=
                a.x) {
                if (!isNaN(parseInt(a.x)))this.x = parseInt(a.x);
                if (!isNaN(parseInt(a.y)))this.y = parseInt(a.y);
            }
            this.updateMatrixComplete(!0);
        }
        if (c.slide && c.slide == player.currentSlide() && c.ref)a.visible ? this.quickShow ? this.quickShow() : (this.show(), this.visible = !0) : "ShuffleGroup" != this.innerType && (this.quickHide ? this.quickHide() : this.hide());
    }
};
Element.prototype.reset = function(a, b) {
    var c = this;
    $.each(this.variables, function(a, b) { void 0 != c.variableDefaults[a] && c.variableDefaults[a] != b && (c.variables[a] = c.variableDefaults[a]); });
    c.variables._disabled = c.variableDefaults._disabled;
    if (!a && "Slide" != this.innerType)this.visible = !1;
    $.each(this.children, function(c, e) { (!b || b(e)) && e.reset && e.reset(a); });
};
Element.prototype.setElementProperty = function(a, b, c) {
    this[a] = b;
    c && this.children && $.each(this.children, function(d, e) { e.setElementProperty && e.setElementProperty(a, b, c); });
};
Element.prototype.constructElement = function() {
    this.events = [];
    this.actionGroups = {};
    this.variables = {};
    this.variableDefaults = {};
    this.variableResumes = {};
    this.variableTypes = {};
    this.content = {};
    this.states = {};
    this.colors = {};
    this.animations = {};
    this.resources = [];
    this.eventSubscribers = [];
    this.matrix = new MatrixTransform;
    this.isRotated = !1;
    this.parent = null;
    this.children = {};
    this.variableDefaults._default = "true";
    this.variables.ObjectState = "_default";
    this.variableDefaults.ObjectState = "_default";
    this.originalYOffset =
        this.originalXOffset = this.originalHeight = this.originalWidth = this.originalZ = this.originalY = this.originalX = this.rotation = this.yoffset = this.xoffset = this.rotateypos = this.rotatexpos = this.dragY = this.dragX = this.y = this.x = 0;
};
Element.prototype.emptyElement = function() {
    this.constructElement();
    this.xml = null;
};
Element.prototype.childItems = function() {
    var a = [];
    $.each(this.children, function(b, c) { "Item" == c.objectType && a.push(c); });
    return a;
};
Element.prototype.findDescendantById = function(a) {
    var b = null;
    $.each(this.children, function(c, d) {
        !b && d.id == a && (b = d);
        !b && d.findDescendantById && (b = d.findDescendantById(a));
    });
    return b;
};
Element.prototype.hasDescendantByType = function(a) {
    var b = !1;
    $.each(this.children, function(c, d) {
        !b && d.innerType.toLowerCase() == a.toLowerCase() && (b = !0);
        !b && d.hasDescendantByType && (b = d.hasDescendantByType(a));
    });
    return b;
};
Element.prototype.getDescendantsByType = function(a) {
    var b = this, c = [];
    $.each(this.children, function(d, e) { "Storyline" == b.innerType && "Slide" == e.innerType || (e.innerType.toLowerCase() == a.toLowerCase() && c.push(e), e.getDescendantsByType && (c = c.concat(e.getDescendantsByType(a)))); });
    return c;
};
Element.prototype.isAncestor = function(a) {
    for (var b = this.parent; b;) {
        if (a == b)return!0;
        b = b.parent;
    }
    return!1;
};
Element.prototype.findAncestorOfType = function(a) {
    for (var b = this; b;) {
        if (b.innerType == a)return b;
        b = b.parent;
    }
    return null;
};
Element.prototype.eachAncestor = function(a) { for (var b = this.parent; b;)a(b), b = b.parent; };
Element.prototype.getFullObjref = function(a) {
    var b = this.id;
    this.parent && this.parent.id && this.parent.getFullObjref && (b = this.parent.getFullObjref() + "." + b);
    return(a ? "_player." : "") + b;
};
Element.prototype.getFullVariableRef = function(a) {
    a = this.parseObjref(a);
    return"_player." + a.target.getFullObjref() + "." + a.variable;
};
Element.prototype.loadElementInfoFromXML = function(a) {
    var b = this;
    this.events = [];
    $(a).children("events").children().each(function(a, d) {
        var e = new StoryEvent(b);
        e.loadFromXML(d);
        b.events.push(e);
    });
    this.actionGroups = {};
    $(a).children("actiongroups").children().each(function(a, d) {
        var e = $(d).attr("id"), f = $(d).children("actions").children();
        b.actionGroups[e] = f;
    });
    $(a).children("variables").children().each(function(a, d) {
        b.variables[$(d).attr("name")] = $(d).attr("value");
        b.variableDefaults[$(d).attr("name")] =
            $(d).attr("value");
        b.variableTypes[$(d).attr("name")] = $(d).attr("type");
        b.variableResumes[$(d).attr("name")] = "true" == $(d).attr("resume");
    });
    $.each($(a).children("colors").children("color"), function(a, d) {
        var e = $(d).attr("name"), f = new Background(b.ref);
        f.loadFromXML($(d), "fill");
        b.colors[e] = f;
    });
    this.lmsid = $(a).attr("lmsid");
    b.variables.Id = $(a).attr("id");
    b.variableDefaults.Id = $(a).attr("id");
    b.resume = "true" == $(a).attr("resume");
};
Element.prototype.hasEvent = function(a, b) {
    if (!this.events)return null;
    for (var c = 0; c < this.events.length; c++) {
        var d = this.events[c];
        if (d.trigger == a)return d;
    }
    c = null;
    !c && b && this.parent && this.parent.hasEvent && (c = c || this.parent.hasEvent(a, b));
    return c;
};
Element.constructors = {};
Element.registerTagNames = function(a, b) { $.each(b, function(b, d) { Element.constructors[d] = a; }); };
Element.prototype.allResourcesLoaded = function() {
    var a = !0;
    $.each(this.resources, function(b, c) { a = a && c.loaded; });
    return a;
};
Element.prototype.loadResources = function() { $.each(this.resources, function(a, b) { b.load(player.deferredLoadingIndex++); }); };
Element.prototype.unloadResources = function() { $.each(this.resources, function(a, b) { b.unload(); }); };
Element.prototype.loadChildrenFromXML = function(a, b, c, d) {
    var e = this;
    $(a).children("objects").children().each(function(a, g) {
        var h;
        "objgroup" == g.tagName ? h = new ItemGroup(e.ref, b, c) : "expandinglabel" == g.tagName ? h = new ExpandingLabel(e.ref, b, c) : "sequencectrl" == g.tagName ? h = new SequenceCtrl(e.ref, b, c) : "shufflegroup" == g.tagName ? h = new ShuffleGroup(e.ref, b, c) : "scrollarea" == g.tagName ? h = new ScrollArea(e.ref, b, c) : "stategroup" == g.tagName ? h = new StateGroup(e.ref, b, c) : "dragitem" == g.tagName ? h = new DragItem(e.ref, b, c) :
            "droparea" == g.tagName ? h = new DropArea(e.ref, e.slide, c) : "droplist" == g.tagName ? h = new DropList(e.ref, b, c) : "textinput" == g.tagName ? h = new TextInput(e.ref, b, c) : "button" == g.tagName ? h = new Button(e.ref, b, c) : "image" == g.tagName ? h = new ImageItem(e.ref, b, c) : "vectorshape" == g.tagName ? h = (h = $(g).attr("id")) && 0 == h.indexOf("hotspot_") && h.indexOf("_marker") == h.length - 7 ? new HotspotMarker(e.ref, b, c) : ImageItem.extractAnimatedGif(g) ? new ImageItem(e.ref, b, c) : new VectorShape(e.ref, b, c) : "swf" == g.tagName ? (h = $(g).attr("id"), h = 0 ==
                h.indexOf("hotspot") ? new HotspotMarker(e.ref, b, c) : new SWFItem(e.ref, b, c)) : "video" == g.tagName ? (h = new Video(null, b, c), h.directParent = e) : h = new StageItem(e.ref, b, c);
        if (h)h.parent = e, h.offsetParent = e, h.loadFromXML(g, b, c), e.children[$(g).attr("id")] = h, d && d(h);
    });
};
Element.prototype.handleEventDeep = function(a, b, c, d) {
    this.handleEvent(a, b, c, !1, !0, d);
    this.deepEach(function(e, f) { f.handleEvent(a, b, c, !1, !0, d); });
};
Element.prototype.handleEvent = function(a, b, c, d, e, f) {
    var g = this, h = !0;
    StoryEvent.cancelEvent = !1;
    var j = !0;
    this.events.forEach(function(e) { if (e.trigger == a && (!e.filter || e.filter(b)) && (!c || c(g, b)))j = j && e.act(g, f), h = d; });
    this.group && !e && (j = j && this.group.handleEvent(a, b, c, d, e, f));
    !e && h && this.parent && this.parent.handleEvent && (j = j && this.parent.handleEvent(a, b, c, d, e, f));
    return j;
};
Element.prototype.runActionGroup = function(a) {
    var b = this.parseObjref(a), c = b.target, a = b.variable, d = c.actionGroups[a], e = !0;
    d && $.each(d, function(a, b) { e && (e = c.runAction(b)); });
    b.processChildren && $.each(this.children, function(b, c) {
        var d = c.actionGroups[a];
        d && $.each(d, function(a, b) { e && (e = c.runAction(b)); });
    });
    return e;
};
Element.prototype.performGotoPlay = function(a, b) {
    var c = !0;
    DragItem.cancelDrag();
    if ("_current" == a || "_frame" == a && null == player.currentWindow)c = !1;
    "Scene" == b.innerType && (b = b.getFirstSlide());
    if ("Slide" == b.innerType)
        if ("_current" != a && (b.variables.WindowId = a), "_current" != a && "_frame" != a) {
            player.pause();
            var d = story.parseObjref(a).target;
            d.showSlide(b);
            player.windowZoomModifier = d.zoomModifier;
            d.isPrompt && (c = !1);
        } else {
            if ("_current" == a && null != player.currentWindow)player.pause(), player.currentWindow.showSlide(b);
            else {
                c = player.currentSlide() == b;
                if (null != player.currentWindow)player.previousWindow = player.currentWindow;
                player.currentWindow = null;
                player.windowZoomModifier = 1;
                c && player.currentSlide().resetSlide(!1, !0, !0);
                player.showSlideIndex(b.slideIndex, null, !0, function() {
                    player.pause();
                    player.zoomParams = null;
                    player.play();
                });
            }
            c = !1;
        }
    else"SlideDraw" == b.innerType && (b.showFirst(), c = !1);
    return c;
};
Element.prototype.runAction = function(a) {
    var b = !0, c = this, d = $(a).attr("id"), e = $(a).get(0).tagName.toLowerCase();
    player.logActivity && this.log.push([e, trace.getTicks()]);
    switch (e) {
    case "adjustvar":
    case "show":
    case "hide":
    case "show_slidelayer":
    case "hide_slidelayer":
    case "hideallslidelayers":
    case "media_play":
    case "media_pause":
    case "media_toggle":
    case "set_volume":
        var d = new TimelineAction(c), f = new StoryEvent(c);
        f.isUserInitiated = !1;
        d.loadFromXML(a, f);
        d[e](f, c, !1);
        break;
    case "exe_actiongroup":
        b = this.runActionGroup(d);
        break;
    case "if_action":
        e = c.evaluateCondition($(a).children("condition").first()) ? "then_actions" : "else_actions";
        $.each($(a).children(e).children(), function(a, d) { b && (b = c.runAction(d)); });
        break;
    case "set_enabled":
        e = $(a).children("objref").attr("value");
        a = $(a).children("enabled").attr("value");
        e = c.parseObjref(e).target;
        e.variables._disabled = ("false" == a).toString();
        if ("textinput" == e.type)e.input.get(0).disabled = e.variables._disabled;
        else if ("droplist" == e.type)e.select.get(0).disabled = e.variables._disabled;
        break;
    case "set_review":
        e = $(a).children("objref").attr("value");
        a = $(a).children("enabled").attr("value");
        e = c.parseObjref(e).target;
        if (0 == e.id.indexOf("hotspot"))e.variables._disabled = "true", e.parent.variables._disabled = "true", e.ref.parent().find(".item.swf").show();
        e.setVariable("ReviewMode", !0);
        e.set_review && e.set_review();
        break;
    case "setdrawreview":
        e = $(a).attr("drawid");
        a = "true" == $(a).attr("review");
        e = c.parseObjref(e).target;
        e.setVariable("ReviewMode", a);
        e.m_bReviewMode = a;
        break;
    case "setobjstate":
        (e =
            c.parseObjrefFromXML(a).target) || (e = c);
        a = $(a).children("stateref").attr("value");
        e.setStates(a, "true");
        break;
    case "setfocus":
        c.input && c.input.get(0).focus();
        break;
    case "trigger_next_slide":
        b = player.currentSlide().handleEvent("onnextslide");
        break;
    case "trigger_prev_slide":
        b = player.currentSlide().handleEvent("onprevslide");
        break;
    case "trigger_submit_slide":
        b = player.currentSlide().handleEvent("onsubmitslide");
        break;
    case "trigger_submitall_slide":
        Interaction.partialEvaluateSlide(player.currentSlide());
        b = player.currentSlide().handleEvent("onsubmitallslide");
        break;
    case "trigger_slide_finish":
        b = player.currentSlide().handleEvent("onfinishslide");
        break;
    case "history_prev":
        player.currentWindow ? 0 < player.currentWindow.history.length && (a = player.currentWindow.history.pop(), player.currentWindow.showSlide(story.allSlides[a], !0)) : 0 < player.history.length && (a = player.history.pop(), player.showSlideIndex(a, null, !1));
        b = !1;
        break;
    case "reset_player":
        a = $(a).attr("startslideid");
        e = c.parseObjref(a).target;
        $.each(story.allSlides,
            function(a, b) { b.resetSlide(!0); });
        player.currentTime = 0;
        if (player.currentWindow)player.currentWindow.close(), player.currentWindow = null;
        a && (b = !1, this.performGotoPlay("_frame", e));
        break;
    case "resume_player":
        a = $(a).attr("resume");
        Audio.iOSPrepare && Audio.iOSPrepare();
        if ("true" == a) {
            a = player.resumeData;
            if (player.overrideResumeData)resumedata = player.overrideResumeData;
            try {
                player.useCompactResume ? story.updateFromCompactData(a) : story.updateFromData(JSON.parse(a));
            } catch (g) {
                console.error("could not restore from resumeData",
                    g);
            }
        } else story.clearLocalStorage(), SlideDraw.populateDraws();
        a = story.parseObjref(story.resumeWindow).target;
        a.close();
        $(".slide:not(.framed)").hide();
        e = story.getStartingSlide(!0);
        e.prepDownstreamMedia();
        player.showSlideID(story.startingslide, !0, function() {
            if (story.startingWindowInfo) {
                var a = 0, b = function() { 10 < a++ || player.currentSlide() && player.currentSlide().transitionedIn ? story.startingWindowInfo.win.showSlide(story.startingWindowInfo.slide) : setTimeout(b, 100); };
                b();
            }
        });
        break;
    case "notifylinkselected":
        a =
            $(a).attr("id");
        (a = story.parseObjref(a).target) && a.notifySelected();
        break;
    case "trigger_submit_slide":
        player.currentSlide().handleEvent("onsubmitslide");
        break;
    case "gotoplay":
        e = $(a).children("objref").attr("value");
        a = $(a).attr("window");
        e = c.parseObjref(e).target;
        b = this.performGotoPlay(a, e);
        break;
    case "playnextdrawslide":
        player.currentDraw.playnextdrawslide();
        b = !1;
        break;
    case "close_window":
        d = $(a).attr("id");
        "_current" == d ? player.currentWindow && player.currentWindow.close() : (a = story.parseObjref(d).target,
            a.close());
        break;
    case "close_player":
        window.manuallyClosing = !0;
        player.lmsManager.handleClosePlayer();
        window.close();
        setTimeout(function() { player.isCrossDomainFrame ? (window.open("", "_self", ""), window.close()) : (top.window.open("", "_self", ""), top.window.close()); }, 10);
        break;
    case "eval_interaction":
        d = $(a).attr("id");
        b = c.parseObjref(d).target.evaluate();
        break;
    case "eval_all_unanswered":
        d = this.parseObjrefFromXML(a).target;
        if (d == this)d = story.parseObjrefFromXML(a).target;
        Interaction.eval_all_unanswered(d,
            a);
        break;
    case "setquizcomplete":
        Interaction.setquizcomplete(a);
        break;
    case "object_action":
        e = $(a).attr("command");
        d = this.parseObjrefFromXML(a).target;
        if ("function" == typeof d[e])return d[e](this.xml), !0;
        break;
    case "showtimer":
        d = $(a).attr("id");
        a = c.parseObjref(d).target;
        a.show();
        break;
    case "hidetimer":
        d = $(a).attr("id");
        a = c.parseObjref(d).target;
        a.hide();
        break;
    case "starttimer":
        d = $(a).attr("id");
        a = c.parseObjref(d).target;
        a.start();
        break;
    case "pausetimer":
        d = $(a).attr("id");
        a = c.parseObjref(d).target;
        a.pause();
        break;
    case "pause_timeline":
        a = c.parseObjrefFromXML(a).target;
        "Layer" == a.innerType ? player.layerPlaying = !1 : player.pause();
        break;
    case "resetquiz":
        a = c.parseObjrefFromXML(a).target;
        a.reset();
        a.attemptCount++;
        $.each(a.sliderefs, function(a, b) {
            var d = c.parseObjref(b).target;
            d.compactResumeData = null;
            d.resumeData = null;
            d.resetSlide(!0, !0);
        });
        player.currentSlide().reset();
        break;
    case "exe_javascript":
        d = $(a).attr("id");
        window.ExecuteScript(d);
        break;
    case "emailto":
        a = $(a).attr("address");
        location.href = "mailto:" + a;
        break;
    case "printresults":
        break;
    case "enable_frame_control":
        e = $(a).attr("name");
        a = "true" == $(a).attr("enable");
        player.frame.setControlEnabled(e, a);
        break;
    case "setactivetimeline":
        if (player.useActiveTimeline)a = c.parseObjrefFromXML(a).target, player.activeTimeline = "Layer" == a.innerType ? a : player;
        break;
    case "debug_trace":
        $(a).attr("message");
        break;
    default:
        if (c[e])c[e](a);
        else if (d = new TimelineAction(c), f = new StoryEvent(c), d.loadFromXML(a, f), d[e])d[e](f, c, !1);
    }
    return b;
};
Element.prototype.getProperty = function(a) {
    switch (a) {
    case "AbsoluteId":
        return this.getFullObjref(!0);
    case "XPos":
        return this.x;
    case "YPos":
        return this.y;
    case "InitXPos":
        return this.originalX + this.xoffset - this.originalXOffset;
    case "InitYPos":
        return this.originalY + this.yoffset - this.originalYOffset;
    case "width":
        return this.width;
    case "height":
        return this.height;
    case "Position":
        if ("ScrollArea" == this.innerType && this.ref)return this.getScrollPosition();
    }
    return"function" === typeof this[a] ? this[a]() : "";
};
Element.prototype.GetProperty = function(a) { return this.extractVariable(a); };
Element.prototype.GetVariable = function(a) { return this.extractVariable(a); };
Element.prototype.extractVariable = function(a, b) {
    b = b || "var";
    switch (b) {
    case "var":
    case "variable":
    case "property":
        var c = this.parseObjref(a), d = c.target.variables[c.variable];
        void 0 == d && (d = c.target.getProperty(c.variable));
        "property" == b && story.properties[a] && (d = story.properties[a]);
        return d;
    case "number":
        return parseFloat(a);
    case "boolean":
        return a;
    case "string":
        return a;
    case "actparam":
        return TimelineAction.actparams[a];
    default:
        return a;
    }
};
Element.prototype.setVariable = function(a, b) {
    var c = this.parseObjref(a);
    c.target.variables[c.variable] != b && (c.target.variables[c.variable] = b, c.target.handleVarChanged(a, "onvarchanged"));
};
Element.prototype.registerVariableEventSubscriber = function(a, b) {
    for (var c in this.eventSubscribers) {
        var d = this.eventSubscribers[c];
        if (d.item == a && d.varname == b)return;
    }
    this.eventSubscribers.push({ item: a, varname: b, check: Math.random() });
};
Element.prototype.handleVarChanged = function(a, b) {
    var b = b || "onvarchanged", c = this;
    $.each(this.eventSubscribers, function(d, e) { if (e.varname == a || e.item.getFullVariableRef(e.varname) == c.getFullVariableRef(a))e.item.handleEvent(b, a, null, !1, !0), e.item.render && e.item.render(null, !0, null, "handleVarChanged"); });
};
Element.prototype.setProperty = function(a, b, c) {
    var d = this.parseObjref(a), a = d.target.variables[d.variable] != b;
    d.target.variables[d.variable] = b;
    a && !c && !this.group && setTimeout(function() { d.target.handleVarChanged(d.variable, "onpropchanged"); }, 0);
};
Element.prototype.parseObjrefFromXML = function(a) { return this.parseObjref($(a).find("objref").attr("value")); };
Element.prototype.parseObjref = function(a) {
    var b = this, c = a, d = !1, e = !0, f = !1;
    if (!a)return{ target: null, variable: null, success: !1, isVariableRef: !1 };
    var g = c.split(".");
    $.each(g, function(a, j) {
        switch (j) {
        case "_this":
            break;
        case "_children":
            d = !0;
            break;
        case "_parent":
            if (b.parent)for (b = b.parent; "ShuffleGroup" == b.innerType;)b = b.parent;
            break;
        case "_player":
            b = story;
            break;
        default:
            var k = a == g.length - 1, l = b.children[j];
            !l && b.children[""] && (l = b.children[""].children[j]);
            l ? b = l : k && (c = j, f = !0, "undefined" === typeof b.variables[j] &&
            (e = !1));
        }
    });
    return{ target: b, variable: c, processChildren: d, success: e, isVariableRef: f };
};
Element.prototype.setStates = function(a, b) {
    var c = this;
    1 < a.split("_").length && $.each(a.split("_"), function(a, e) { 0 != e.length && (e = "_" + e.toLowerCase(), c.variables[e] = b, c.handleVarChanged("onvarchanged", e)); });
    c.render && c.render(a, !0, null, "setStates");
    c.executeStateActions && c.executeStateActions(a);
    c.variables.ObjectState = a;
};
Element.prototype.store_resume_data = function(a) {
    var b = $(a).attr("objref"), a = $(a).attr("varref"), b = this.parseObjref(b).target, c = b.GetResumeData(!0);
    b.setVariable(a, bwChunk.CreateChunk(c));
};
Element.prototype.restore_resume_state = function(a) {
    var b = $(a).attr("objref"), c = $(a).attr("varref");
    $(a).attr("limited");
    a = this.parseObjref(b).target;
    (c = a.extractVariable(c)) && a.restoreFromResumeData(c);
};
Element.prototype.evaluateCondition = function(a, b) {
    var c = this,
        d = function() {
            if (b) {
                if (b.lmsCorrectResponses[0] && b.lmsCorrectResponses[0].lmstext)return b.lmsCorrectResponses[0].lmstext;
                b.lmsCorrectResponses[0] = { lmstext: "" };
            }
            return"";
        },
        e = function(a) {
            if (b) {
                var c = d();
                c && (c += " ");
                b.lmsCorrectResponses[0] = { lmstext: c + a };
            }
        },
        f = $(a).get(0).tagName;
    switch (f) {
    case "condition":
        return 1 != $(a).children().length && console.error("FAILED INVARIANT: condition with multiple children", f, c.id, c.innerType, $(a).children().length),
            c.evaluateCondition($(a).children().first(), b);
    case "and":
        var g = !0;
        $(a).children().each(function(a, f) {
            d() && e("and");
            g = b ? c.evaluateCondition(f, b) && g : g && c.evaluateCondition(f);
        });
        return g;
    case "or":
        return g = !1, $(a).children().each(function(a, f) {
            d() && e("or");
            g = b ? c.evaluateCondition(f, b) || g : g || c.evaluateCondition(f);
        }), g;
    case "nand":
        return g = !0, $(a).children().each(function(a, f) {
            d() && e("and");
            g = b ? c.evaluateCondition(f, b) && g : g && c.evaluateCondition(f);
        }), !g;
    case "nor":
        return g = !1, $(a).children().each(function(a,
            f) {
            d() && e("nor");
            g = b ? c.evaluateCondition(f, b) || g : g || c.evaluateCondition(f);
        }), !g;
    case "compare":
        var h = $(a), f = h.attr("operator"), j = !0, k = h.attr("valuea"), k = c.extractVariable(k, h.attr("typea")), l = h.attr("valueb"), h = c.extractVariable(l, h.attr("typeb"));
        !isNaN(k) && !isNaN(h) && "" !== k && "" !== h && (k = parseFloat(k), h = parseFloat(h));
        var l = k == h, m = "equals";
        switch (f) {
        case "eq":
            m = "equal to";
            break;
        case "iceq":
            l = k.toLowerCase() == h.toLowerCase();
            m = "equal to";
            break;
        case "noteq":
            l = !l;
            m = "not equal to";
            break;
        case "icneq":
            l =
                k.toLowerCase() != h.toLowerCase();
            m = "not equal to";
            break;
        case "gt":
            l = k > h;
            m = "greater than";
            break;
        case "gte":
            l = k >= h;
            m = "greater than or equal to";
            break;
        case "lt":
            l = k < h;
            m = "less than";
            break;
        case "lte":
            l = k <= h;
            m = "less than or equal to";
            break;
        default:
            j = !1;
        }
        e("Correct Response is " + m + " " + h);
        return!j ? !1 : l;
    case "hittestpoint":
        return f = this.parseObjref($(a).children("objref").attr("value")).target, j = parseInt(this.extractVariable($(a).children("xpos").attr("value"), $(a).children("xpos").attr("type"))), k = parseInt(this.extractVariable($(a).children("ypos").attr("value"),
            $(a).children("ypos").attr("type"))), !f ? !1 : f.isPointActive(j, k);
    case "hasslidetext":
        var f = this.parseObjref(this.extractVariable($(a).children("slideref").attr("value"), $(a).children("slideref").attr("type"))).target, n = this.extractVariable($(a).children("searchref").attr("value"), $(a).children("searchref").attr("type")), n = n.toLowerCase(), p = !1;
        f.xml.find("[alttext]").each(function(a, b) { p = p || -1 < $(b).attr("alttext").toLowerCase().indexOf(n); });
        return p;
    case "varexists":
        return f = this.parseObjref($(a).attr("value")),
            n = f.target.variables[f.variable], void 0 != n;
    case "isdescendant":
        return j = this.extractVariable($(a).attr("targeta"), $(a).attr("typea")), f = this.extractVariable($(a).attr("targetb"), $(a).attr("typeb")), j = this.parseObjref(j).target, f = this.parseObjref(f).target, j.isAncestor(f);
    default:
        return!1;
    }
};
Element.prototype.get_mouse_position = function(a) {
    if (!("true" == this.variables._disabled || "true" == this.parent.variables._disabled)) {
        swipe.sniff(player.lastEvent || window.event);
        swipe.moved = !1;
        var b = this.slide.ref.offset(), b = this.slide.matrix.unTransformPoint((swipe.rawX - b.left) / player.frameScale, (swipe.rawY - b.top) / player.frameScale);
        this.setVariable($(a).children("xvar").attr("value"), b.x);
        this.setVariable($(a).children("yvar").attr("value"), b.y);
    }
};
Element.prototype.moveto = function(a) {
    var b = this.parseObjref($(a).children("objref").attr("value")).target, c = parseInt(this.extractVariable($(a).children("xpos").attr("value"), $(a).children("xpos").attr("type"))), d = parseInt(this.extractVariable($(a).children("ypos").attr("value"), $(a).children("ypos").attr("type")));
    if ("true" == $(a).attr("addoffsetx"))var e = parseInt(this.extractVariable($(a).children("xoffset").attr("value"), $(a).children("xoffset").attr("type"))), c = c + e;
    "true" == $(a).attr("addoffsety") &&
    (a = parseInt(this.extractVariable($(a).children("yoffset").attr("value"), $(a).children("yoffset").attr("type"))), d += a);
    b.actionControlled = !0;
    b.ref.css("left", c);
    b.ref.css("top", d);
    b.x = c;
    b.y = d;
    b.updateMatrixComplete(!0);
};
Element.prototype.bringtofront = function(a) {
    var b = this;
    if (a)b = this.parseObjref($(a).children("value").attr("value")).target;
    if (b.depth < b.slide.topZ)b.depth = ++b.slide.topZ, b.setZIndex(b.depth);
};
Element.prototype.open_webobject = function(a) {
    if (this.webobject)this.webobject.remove(), this.webobject = null;
    var b = this.parent, c = this.slide;
    "Slide" == this.innerType ? (b = this, c = this) : "Layer" == this.innerType && (b = this);
    this.webobject = $("<iframe class='item webobject'></iframe>");
    this.webobject.attr("src", $(a).attr("url"));
    this.webobject.attr("width", $(a).attr("width"));
    this.webobject.attr("height", $(a).attr("height"));
    this.webobject.css("left", $(a).attr("xpos") + "px");
    this.webobject.css("top", $(a).attr("ypos") +
        "px");
    this.webobject.css("z-index", ++c.topZ);
    b.ref.append(this.webobject);
    this.webobject.show();
};
Element.prototype.destroyWebobjects = function() { if (this.webobject)this.webobject.remove(), this.webobject = null; };
Element.prototype.open_url = function(a) {
    var b = $(a).attr("url"), c = $(a).attr("window"), d = $(a).attr("windowsize");
    $(a).attr("usedefaultcontrols");
    var e = "true" == $(a).attr("status") ? 1 : 0,
        f = "true" == $(a).attr("toolbar") ? 1 : 0,
        g = "true" == $(a).attr("location") ? 1 : 0,
        h = "true" == $(a).attr("menubar") ? 1 : 0,
        j = "true" == $(a).attr("scrollbars") ? 1 : 0,
        k = "true" == $(a).attr("resizable") ? 1 : 0,
        l = parseInt($(a).attr("width")),
        a = parseInt($(a).attr("height")),
        e = "location=" + g + ",menubar=" + h + ",resizable=" + k + ",status=" + e + ",scrollbars=" + j + ",toolbar=" +
            f;
    switch (d) {
    case "fullscreen":
        e += ",width=" + (screen.width - 33) + ",height=" + (screen.height - 150);
        break;
    case "custom":
        e += ",width=" + l + ",height=" + a;
    }
    story.popWindow = window.open(b, c, e);
    story.popWindow && story.popWindow.focus && story.popWindow.focus();
};
Element.prototype.slideY = function() {
    for (var a = 0, b = this; b && !isNaN(b.y);)a += parseInt(b.y), !isNaN(b.yoffset) && b != this && (a += b.yoffset), "ScrollArea" == b.innerType && b.ref && b.ref.get(0) && b.ref.get(0).scrollTop && (a -= parseInt(b.ref.get(0).scrollTop)), b = b.parent;
    return parseInt(a);
};
Element.prototype.slideX = function() {
    for (var a = 0, b = this; b && !isNaN(b.x);)a += parseInt(b.x), !isNaN(b.xoffset) && b != this && (a += b.xoffset), "ScrollArea" == b.innerType && b.ref && b.ref.get(0) && b.ref.get(0).scrollLeft && (a -= parseInt(b.ref.get(0).scrollLeft)), b = b.parent;
    return parseInt(a);
};
Element.prototype.testOver = function(a, b) {
    var c = this.matrix.unTransformPoint(a, b);
    return 0 <= c.x && c.x <= this.width && 0 <= c.y && c.y <= this.height;
};
Element.prototype.deepEach = function(a, b, c) {
    isNaN(c) && (c = 0);
    $.each(this.children, function(d, e) { if (!b || b(e))a(d, e, c), e.deepEach && e.deepEach(a, b, c + 1); });
};
Element.prototype.getAbsoluteMatrix = function() {
    for (var a = this.matrix.copy(), b = this.parent, c = 0; b && b.matrix && 10 > c++;)a.multiply(b.matrix), b = b.parent;
    return a;
};
Element.prototype.updateMatrixComplete = function(a) {
    this.parent && this.parent.updateMatrixComplete && this.parent.updateMatrix && this.parent.updateMatrixComplete(!1);
    this.updateMatrix();
    a && this.deepEach(function(a, c) { c.matrix && c.isStageItem && c.updateMatrix(); });
};
Element.prototype.getAnimationTime = function() { return this.currentTime; };
var Storyline = function(a) {
    this.container = a;
    this.scenes = [];
    this.allSlides = [];
    this.slideLookup = {};
    this.media = [];
    this.slideDraws = [];
    this.startingslide = null;
    this.quizzes = {};
    this.timers = {};
    this.pathlibs = {};
    this.properties = {};
    this.currentSceneIndex = 0;
    this.constructElement();
};
Storyline.prototype = new Element;
Storyline.prototype.objectType = "Storyline";
Storyline.prototype.innerType = "Storyline";
Storyline.prototype.saveToLocalStorage = function() {
    if (player.useCompactResume) {
        var a = story.toResumeData();
        try {
            localStorageAlias[story.resumeID] = a;
        } catch (b) {
        }
    } else a = JSON.stringify(story.toData(!0)), localStorageAlias[story.resumeID] = a;
};
Storyline.prototype.clearLocalStorage = function() { localStorageAlias.removeItem(story.resumeID); };
Storyline.prototype.toResumeData = function() {
    var a = "";
    if (0 == player.history.length && null == player.currentWindowSlide)return"";
    var b = "", c = 0;
    $.each(this.allSlides, function(a, d) { d.variables.Visited && d.trackviews && (b += bwChunk.UBase10toN(d.slideIndexForResume, 2), c++); });
    1 == c && (b = "");
    var a = a + bwChunk.CreateChunk(b), d = "", e = Window.getWindowResumeData(0, story.allSlides[player.slideIndex], player.history), d = d + bwChunk.CreateChunk(e), f = 0;
    $.each(this.children, function(a, b) {
        if ("Window" == b.innerType && (f++, b.visible)) {
            var c =
                Window.getWindowResumeData(f, player.currentWindowSlide, b.history);
            d += bwChunk.CreateChunk(c);
        }
    });
    var a = a + bwChunk.CreateChunk(d), e = story.getVariableResumeData(), a = a + e, g = "";
    $.each(this.children, function(a, b) {
        if ("Scene" == b.innerType) {
            var c = bwChunk.EMPTY_CHUNK;
            if (b.compactResumeData)c = b.compactResumeData;
            g += c;
        }
    });
    a += g;
    e = bwChunk.UBase10toN(a.length);
    return a = bwChunk.CreateChunk(e) + a;
};
Storyline.prototype.updateFromCompactData = function(a) {
    var a = new bwChunk(a), b = a.Remainder(), c = bwChunk.UBaseNto10(a.Data());
    if (b.length != c)return!1;
    a = a.NextChunk();
    c = a.NextChunk();
    b = new bwChunk(c.Data());
    c = c.NextChunk();
    story.restoreVariableResumeData(c.Data());
    for (var c = c.NextChunk(), d = 0, e = story.getDescendantsByType("Scene"); !c.isNothing && d < e.length;)c.IsEmpty() || e[d].restoreFromResumeData(c.Data()), c = c.NextChunk(), d++;
    for (; !b.IsEmpty();) {
        var c = new bwChunk(b.Data()),
            f = bwChunk.UBaseNto10(c.Data()),
            g;
        if (0 == f) {
            c = Window.parseResumeChunk(b);
            if (c.slide)this.startingslide = c.slide.getFullObjref();
            player.history = c.history;
        } else {
            g = null;
            var h = 1;
            $.each(this.children, function(a, b) { "Window" == b.innerType && (h == f && (g = b), h++); });
            if (g && (c = Window.parseResumeChunk(b), c.slide))c.win = g, this.startingWindowInfo = c;
        }
        b = b.NextChunk();
    }
    for (; !a.EOF();) {
        var j = a.NextUBase10(2), k = null;
        $.each(story.allSlides, function(a, b) { b.slideIndexForResume == j && (k = b); });
        k.trackviews && player.lmsManager && (player.lmsManager.viewedSlides[k.id] = !0);
        player.slideList.markVisited(k);
        k.variables.Visited = !0;
    }
    return!0;
};
Storyline.prototype.toData = function(a) {
    var b = this, c = { slideID: player.currentSlide().id, history: player.history };
    $.each(this.variables, function(a, e) {
        if (e != b.variableDefaults[a]) {
            if (!c.variables)c.variables = {};
            c.variables[a] = e;
        }
    });
    $.each(this.children, function(b, e) {
        if ("Slide" != e.innerType && e.toData) {
            var f = e.toData(a);
            if (!jQuery.isEmptyObject(f)) {
                if (!c.children)c.children = {};
                c.children[b] = f;
            }
        }
    });
    return c;
};
Storyline.prototype.updateBaseFromData = Element.prototype.updateFromData;
Storyline.prototype.updateFromData = function(a) {
    try {
        this.updateBaseFromData(a);
        if (a.slideID)this.startingslide = a.slideID;
        if (a.history)player.history = a.history;
    } catch (b) {
    }
};
Storyline.prototype.loadFromXML = function(a) {
    var b = this;
    b.xml = $(a).children();
    this.scenes = [];
    this.allSlides = [];
    this.slideLookup = {};
    this.media = [];
    this.currentSceneIndex = 0;
    this.children = {};
    this.resumeID = $(a).children().children("resume").attr("id");
    this.resumeWindow = $(a).children().children("resume").attr("window");
    this.resumeSlideID = $(a).children().children("resume").attr("slideid");
    this.resumeLMS = "true" == $(a).children().children("resume").attr("lmsresume");
    this.resumeFlash = "true" == $(a).children().children("resume").attr("flashresume");
    this.resumePrompt = "true" == $(a).children().children("resume").attr("prompt");
    this.frameWidth = parseInt($(a).children().children("display").attr("width"));
    this.frameHeight = parseInt($(a).children().children("display").attr("height"));
    -1 < location.search.indexOf("&menu=1") && (this.frameWidth += 200);
    $(a).find("display").children("windows").children("window").each(function(a, c) {
        var f = new Window;
        f.loadFromXML(c, b);
        f.createRef();
        b.children[f.id] = f;
    });
    b.slidemap = [];
    $(a).children().children("slidemap").children("slideref").each(function(a,
        c) {
        var f = {};
        f.id = $(c).attr("id");
        b.slidemap.push(f);
    });
    $(a).children().children("pathlibs").children("pathlib").each(function(a, c) {
        var f = new PathLib;
        f.loadFromXML(c, b);
        b.pathlibs[f.id] = f;
    });
    b.entrypoint = $(a).find("bwContent").attr("entrypoint");
    b.startingslide = $(a).find("bwContent").attr("entrypoint");
    var c = $(a).find("scene");
    b.pendingSceneCount = c.length;
    c.each(function(c, e) {
        if (1 == c)story.startingSlideIndex = story.allSlides.length;
        var f = new Scene;
        f.id = $(e).attr("id");
        f.lmsid = $(e).attr("lmsid");
        f.startingslide =
            $(e).attr("startingslide");
        f.sceneIndex = c;
        f.parent = b;
        f.loadElementInfoFromXML(e);
        b.pendingSceneCount = 0;
        $(e).children("slides").children("slide").each(function(a, c) {
            var d = new Slide(b.container);
            d.loadFromXML($(c));
            d.parent = f;
            d.sceneIndex = f.sceneIndex;
            d.sceneSlideIndex = a;
            f.slides.push(d);
            f.children[$(c).attr("id")] = d;
            b.allSlides.push(d);
            b.slideLookup[$(c).attr("id")] = d;
            b.children[d.id] = d;
            d.slideIndex = b.allSlides.length - 1;
            d.slideIndexForResume = d.slideIndex + 1;
            if (-1 == d.id.indexOf("Prompt"))
                player.width =
                    d.width, player.height = d.height, player.aspectRatio = d.aspectRatio;
        });
        $(a).children().children("timers").children("timer").each(function(a, c) {
            var d = new Timer;
            d.loadFromXML(c, b);
            b.children[d.id] = d;
            b.timers[d.id] = d;
        });
        f.slideDraws = [];
        var g = 0;
        $(e).children("slidedraws").children("slidedraw").each(function(a, b) {
            var c = new SlideDraw;
            c.loadFromXML(b);
            c.parent = f;
            c.sceneDrawIndex = g;
            f.children[c.id] = c;
            f.slideDraws.push(c);
            g++;
        });
        f.title = "Scene " + c;
        b.children[f.id] = f;
    });
    this.loadElementInfoFromXML($(a).children());
    $(a).children().children("quizzes").children().each(function(a, c) {
        var f = new Quiz;
        f.loadFromXML(c, b);
        b.quizzes[f.id] = f;
        b.children[f.id] = f;
    });
    b.scoring = new Scoring;
    b.scoring.loadFromXML($(a).children().children("scoring"));
    SlideDraw.NextSlideIndex = this.allSlides.length + 1;
    $(a).children().children("slidebank").each(function(a, c) {
        var f = new SlideBank;
        f.loadFromXML(c, b);
        b.children[f.id] = f;
    });
    c = b.getStartingSlide();
    story.startingSlideIndex = c.slideIndex;
    player.width = c.width;
    player.height = c.height;
    player.aspectRatio =
        c.aspectRatio;
    if ("SlideDraw" == c.innerType)c = c.getFirstSpecifiedSlide(), player.width = c.width, player.height = c.height, player.aspectRatio = c.aspectRatio;
    $(a).children().children("slidemap").children("slideref").each(function(a, c) {
        var f = $(c).attr("id"), g = b.parseObjref(f).target;
        $(c).children("assets").children("asset").each(function(a, c) {
            var d = $(c).attr("url");
            $(c).attr("mobileurl");
            var e = $(c).attr("htmlurl"), d = player.basepath + (e ? e : d), e = "image";
            switch (d.split(".").pop()) {
            case "swf":
                d = d.replace(".swf", ".png");
                e = "swfImage";
                break;
            case "png":
            case "jpg":
            case "jpeg":
            case "gif":
            case "bmp":
                break;
            case "flv":
            case "mov":
            case "mp4":
            case "avi":
                e = "video";
                break;
            case "mp3":
                e = "audio";
                break;
            default:
                return;
            }
            switch (e) {
            case "image":
                e = new Resource(b, d);
                if ("Slide" == g.innerType)g.pushResource(e), e.src = d;
                break;
            case "video":
                if (Video.refStore[Video.getStoreReference(g, d)] || (e = $('<video class="item"><source src="' + d + '"/></video>'), Video.refStore[Video.getStoreReference(g, d)] = e), !g.firstVideoAssetSrc)
                    g.firstVideoAssetSrc = Video.getStoreReference(g,
                        d);
            }
        });
    });
    player.loadingSlide = null;
};
Storyline.prototype.addSlide = function() {};
Storyline.prototype.getStartingSlide = function(a) {
    var b = this.parseObjref(this.startingslide).target;
    switch (b.innerType) {
    case "Scene":
        b = this.parseObjref(b.startingslide).target;
    }
    "SlideDraw" == b.innerType && a && (b = b.getFirstSlide());
    return b;
};
Storyline.prototype.getSlideByID = function(a) {
    for (var b = 0; b < story.allSlides.length; b++)if (story.allSlides[b].id == a)return story.allSlides[b];
    return null;
};
var Window = function() {
    this.xml = "";
    this.constructElement();
    this.selected = !1;
    this.zoomModifier = 1;
    this.history = [];
    this.visible = !1;
};
Window.prototype = new Element;
Window.prototype.objectType = "Window";
Window.prototype.innerType = "Window";
Window.getWindowResumeData = function(a, b, c) {
    var a = "" + bwChunk.CreateChunk(bwChunk.UBase10toN(a)), a = a + Slide.getResumeReference(b), d = "";
    $.each(c, function(a, b) { d += Slide.getResumeReference(story.allSlides[b]); });
    d += Slide.getResumeReference(b);
    return a += bwChunk.CreateChunk(d);
};
Window.parseResumeChunk = function(a) {
    var b = {}, c = new bwChunk(a.Data());
    a.Skip(c.ChunkData().length);
    c = Slide.getFromResumeChunk(a);
    b.slide = c;
    for (var d = [], a = new bwChunk(a.NextString()); !a.EOF();)c = Slide.getFromResumeChunk(a), d.push(c.slideIndex);
    d.pop();
    b.history = d;
    return b;
};
Window.closeAll = function() { $.each(story.children, function(a, b) { "Window" == b.innerType && b.close(); }); };
Window.prototype.loadFromXML = function(a, b) {
    this.parent = b;
    this.children = {};
    this.id = $(a).attr("id");
    this.linkid = $(a).attr("linkid");
    this.width = parseInt($(a).attr("width")) - 2;
    this.height = parseInt($(a).attr("height")) - 2;
    this.alignto = $(a).attr("alignto");
    this.align = $(a).attr("align");
    this.valign = $(a).attr("valign");
    -1 < this.linkid.indexOf("StoryPopup") ? (this.width -= 6, this.height -= 6) : this.isPrompt = !0;
};
Window.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = $("<div class='window'><h1>Title</h1><hr><div class='windowContent'></div></div>");
    a.css("width", this.width);
    a.css("height", this.height);
    a.css("margin", "auto");
    a.addClass(this.id);
    this.contentRef = a.children("div").first();
    this.titleRef = a.children("h1").first();
    this.isPrompt && a.addClass("prompt");
    switch (this.align) {
    case "center":
        a.css("left", "50%"), a.css("margin-left", -this.width / 2);
    }
    switch (this.valign) {
    case "center":
        a.css("top", "50%"),
            a.css("margin-top", -this.height / 2);
    }
    $("#slidecontainer").append(a);
    this.ref = a;
    this.ref.hide();
    return!0;
};
Window.prototype.prepareLightbox = function() {
    $(".interstitial").removeClass("black");
    $(".interstitial").removeClass("white");
    $(".interstitial").unbind();
    $(document.body).append($(".window.prompt"));
    if (!this.lightboxPrepared) {
        $(document.body).append(this.ref);
        this.contentRef.css("width", this.width);
        this.contentRef.css("height", this.height);
        this.closeIcon = $("<div class='closeicon'><span>x</span></div>");
        this.closeIcon.css("left", 0.85 * player.width - 10 + "px");
        this.ref.append(this.closeIcon);
        var a = this;
        this.closeIcon.click(function() {
            a ==
                player.currentWindow && a.close();
        });
        this.lightboxPrepared = !0;
        this.zoomModifier = 0.85;
        if ("LightboxControlsWnd" == this.id)
            this.controls = $("#controls").clone(!1), this.controls.css("left", "0px"), this.ref.append(this.controls), this.progressBar = new ProgressBar(null, this.controls.find("#progressbar"), !0), this.progressBar.onDragUpdate = player.progressBar.onDragUpdate, this.progressBar.zoomModifier = this.zoomModifier, this.controls.find(".submit-slide").parent().bind("click", function() {
                    0 < $(".modalfence:visible").length ||
                        story.handleEvent("onobjectevent", "submit_pressed", null, !1, !1, !0);
                }), this.controls.find(".next-slide").parent().bind("click", function() { story.handleEvent("onobjectevent", "next_pressed", null, !1, !1, !0); }), this.controls.find(".previous-slide").parent().bind("click", function() { story.handleEvent("onobjectevent", "prev_pressed", null, !1, !1, !0); }), this.controls.find(".play").bind("click", function() { player.activeTimeline.play(); }), this.controls.find(".pause").bind("click", function() { player.activeTimeline.pause(); }),
                this.volumeSlider = new VolumeSlider(this.controls.find("#control-volume")), this.volumeSlider.onDragUpdate = function(a) {
                    $("audio, video").each(function(c, d) { d.volume = Math.min(a * player.clipVolume, 1); });
                    Audio.setMasterVolume && Audio.setMasterVolume(a);
                };
    }
};
Window.prototype.closeLightbox = function() {
    if (!player.stackedWindow)$(".blocker").hide(), $(".interstitial").hide(), $(".interstitial").removeClass("black"), player.showingInterstitial = !1, $("#slidecontainer").append($(".window.prompt"));
    player.currentWindowSlide.variables.Visited = !0;
    player.currentWindowSlide.viewedCurrent = !0;
    player.currentWindowSlide.saveIfNecessary();
    player.currentWindowSlide.hide();
    player.currentWindowSlide.resetSlide();
    player.currentWindowSlide.unloadContent();
    player.currentWindow =
        null;
    player.currentWindowSlide = null;
    player.currentSlide().handleEvent("ontransitionin", null, null, !1, !0);
    player.currentTime = player.currentSlide().currentTime;
};
Window.prototype.renderBackground = function() {
    var a = { canvas: this.background.get(0), m_nXOffset: 0, m_nYOffset: 0, m_nWidth: this.width + 100, m_nHeight: this.height };
    ppArt.DrawVector(a, "ZB1$v$vPCZy$f2L$_XA100jfZQA1$3N10OaXIA1ag70FCDY$v00LCYv0000PC_$3w2wPC_$9wn3PC_$9wn3PC_$9wn3PC_$9wn3e20PC_$9wn3PC_$PyDYg40PC_$PyDYPC_$VyYvLCYv_y00FCDY_y00e20FCDY_y009wn3_y00g409wn3_y003w2w_y00$v00VyYv$v00PyDYe20$v00PyDY$v009wn3g40$v009wn300003w2w3w2w$v009wn3$v003t3w00px000000E0505010100w00N10$$$$E0aEg70FC$v$v$vLCt1$v$vPC$v3wx_PC$v9w$vPC$v9w$vPC$v9w$vPC$v9w$ve20PC$v9w$vPC$vPy$vg40PC$vPy$vPC$vVyt1LCt1Zy$vFC$vZy$ve20FC$vZy$v9w$vZy$vg409w$vZy$v3wx_Zy$v$v$vVyt1$v$vPy$ve20$v$vPy$v$v$v9w$vg40$v$v9w$v$v$v3wx_3wx_$v$v9w$v$v$v3E", null,
        player.fontlib, null);
};
Window.prototype.appendSlide = function(a) {
    a.loadContentFromXML();
    this.slide && this.slide.ref.remove();
    this.slide = a;
    this.contentRef.empty();
    this.contentRef.append(a.ref);
    this.titleRef.html(a.title);
};
Window.prototype.close = function() {
    this.slide && this.slide.ref && (player.pause(), this.slide.ref.remove());
    this.slide = null;
    this.ref.hide();
    if (!(this != player.currentWindow && this != player.previousWindow))this.closeLightbox(), player.currentWindow = player.stackedWindow, player.currentWindowSlide = player.stackedWindowSlide, player.stackedWindow = null, player.stackedWindowSlide = null, this.visible = !1, player.windowZoomModifier = 1, player.zoomParams = null, player.pause(), player.play();
};
Window.prototype.showSlide = function(a, b) {
    if (player.currentWindow && player.currentWindow != this)player.stackedWindow = player.currentWindow, player.stackedWindowSlide = player.currentWindowSlide, player.windowStack.push(player.currentWindow);
    if (-1 < this.linkid.indexOf("StoryPopup"))this.isLightbox = !0, this.prepareLightbox();
    else if ("MessageWnd" == this.id) {
        var c = $("<div class='blocker'></div>");
        $(".contentpane").append(c);
    }
    player.currentSlide().saveIfNecessary();
    player.currentWindowSlide && (player.currentWindowSlide.saveIfNecessary(),
        player.currentWindowSlide.resetSlide());
    this.ref.show();
    a.createRef();
    this.appendSlide(a);
    a.ref.show();
    a.visible = !0;
    a.variables.WindowId = this.id;
    a.variables.Visited = !0;
    a.viewedCurrent = !0;
    a.currentIndex = 0;
    a.update(a.currentTime, !0);
    !b && player.currentWindow && player.currentWindowSlide && player.currentWindow.history.push(player.currentWindowSlide.slideIndex);
    player.currentWindow = this;
    player.currentWindowSlide = a;
    this.visible = !0;
    if (this.isLightbox)$(".interstitial").show(), player.showingInterstitial = !0;
    player.currentSlide().handleEvent("ontransitionin", null, null, !1, !0);
    player.currentSlide().handleEvent("ontransitionincomplete", null, null, !1, !0);
    player.currentSlide().handleEvent("onslidestart", null, null, !1, !0);
    player.currentSlide().deepEach(function(a, b) { b.handleEvent && b.handleEvent("onslidestart", null, null, !1, !0); });
    player.pause();
    player.currentTime = 0;
    player.play();
};
var ResumePrompt = function() {
    this.xml = "";
    this.constructElement();
    this.selected = !1;
};
ResumePrompt.prototype = new Window;
ResumePrompt.prototype.objectType = "ResumePrompt";
ResumePrompt.prototype.innerType = "ResumePrompt";
ResumePrompt.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = this, b = $("<div class='window dialog'><h1>Resume</h1><p>Would you like to resume where you left off?</p><div class='choose'><span class='button yes'>Yes</span><span class='button no'>No</span></div></div>");
    this.contentRef = b.children("p").first();
    this.titleRef = b.children("h1").first();
    this.suppressRef = $("<div></div>");
    $(document.body).append(b);
    this.ref = b;
    var c = b.find(".yes"), d = b.find(".no");
    b.find(".button").bind("mousedown touchstart",
        function() { $(this).addClass("pressed"); });
    b.find(".button").bind("mouseup touchend mouseout", function() { $(this).removeClass("pressed"); });
    c.bind("click", function() {
        a.slide.children.btn0.handleEvent("onrelease", null, null, !1, !1, !0);
        $(".interstitial").removeClass("resume");
        $(".interstitial").hide();
        player.showingInterstitial = !1;
    });
    d.bind("click", function() {
        a.slide.children.btn1.handleEvent("onrelease", null, null, !1, !1, !0);
        $(".interstitial").removeClass("resume");
        $(".interstitial").hide();
        player.showingInterstitial =
            !1;
    });
    this.ref.hide();
    return!0;
};
ResumePrompt.prototype.appendSlide = function(a) {
    this.slide && this.slide.ref.remove();
    this.slide = a;
    this.suppressRef.append(a.ref);
    this.titleRef.html($(a.title).text());
    setTimeout(function() {
        a.ref.find(".item_ResumePromptSlide_Text").text();
        $(".interstitial").removeClass("black");
        $(".interstitial").addClass("resume");
        $(".interstitial").show();
        player.showingInterstitial = !0;
    }, 1);
};
var Scene = function() {
    this.slides = [];
    this.slideDraws = [];
    this.constructElement();
};
Scene.prototype = new Element;
Scene.prototype.objectType = "Scene";
Scene.prototype.innerType = "Scene";
Scene.prototype.restoreFromResumeData = function(a) {
    var b = this.getDescendantsByType("Slide"), c = [];
    $.each(b, function(a, b) { (b.resume || 0 < b.interactionCount) && c.push(b); });
    this.hasVariables() && (a = this.restoreVariableResumeData((new bwChunk(a)).Data()));
    for (var b = new bwChunk(a), d = 0, e = 0; !b.isNothing;) {
        if (d >= c.length) {
            var f = this.slideDraws[e];
            f && f.restoreFromResumeData(b.Data());
            e++;
        } else f = c[d], f.compactResumeData = b.ChunkData(), f.restoreFromResumeData(b.Data(), !0);
        b = b.NextChunk();
        d++;
    }
    this.compactResumeData =
        bwChunk.CreateChunk(a);
};
Scene.prototype.getResumeData = function() {
    var a = "";
    this.hasVariables() && (a = this.hasResumeVariables() ? a + this.getVariableResumeData() : a + bwChunk.EMPTY_CHUNK);
    var b = "";
    $.each(this.children, function(a, c) { c.compactResumeData ? b += c.compactResumeData : c.resume && (b += bwChunk.EMPTY_CHUNK); });
    var c = "";
    $.each(this.children, function(a, b) {
        if ("SlideDraw" == b.innerType) {
            if (!b.compactResumeData)b.compactResumeData = b.getResumeData();
            c += b.compactResumeData || "0";
        }
    });
    b += c;
    return bwChunk.CreateChunk(a + b);
};
Scene.prototype.getFirstSlide = function() {
    for (var a = 0; a < story.allSlides.length; a++)if (story.allSlides[a].parent.id == this.id)return story.allSlides[a];
    return this;
};
Scene.prototype.populateDraws = function() { $.each(this.slideDraws, function(a, b) { 0 == b.draw.length && (b.createDraw(), b.populateDraw()); }); };
var Timer = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.content = { fontsize: 18, font: "Arial" };
    this.constructElement();
    this.events = [];
    this.active = !0;
    this.visible = !1;
    this.startPosition = 0;
    this.startTime = null;
    this.currentPosition = 0;
    this.visible = this.running = !1;
};
Timer.prototype = new Element;
Timer.prototype.innerType = "Timer";
Timer.prototype.objectType = "Timer";
Timer.prototype.toBaseData = Element.prototype.toData;
Timer.prototype.toData = function(a) {
    a = this.toBaseData(a);
    if (0 != this.currentPosition)a.currentPosition = this.currentPosition;
    if (this.running)a.running = !0;
    if (this.visible)a.visible = !0;
    return a;
};
Timer.prototype.updateBaseFromData = Element.prototype.updateFromData;
Timer.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    if (a.currentPosition)this.currentPosition = a.currentPosition;
    a.visible && this.show();
    a.running && this.start();
    if (a.variables && a.variables.DropTargetId)this.dropArea = this.parent.children[a.variables.DropTargetId];
};
Timer.prototype.loadFromXML = function(a) {
    this.loadElementInfoFromXML(a);
    this.id = $(a).attr("id");
    this.duration = parseInt($(a).attr("duration"));
};
Timer.prototype.show = function() {
    this.visible = !0;
    this.createRef();
    this.render();
    this.ref.show();
};
Timer.prototype.hide = function() {
    this.visible = !1;
    this.ref.hide();
};
Timer.prototype.start = function() {
    var a = this;
    this.startPosition = this.currentPosition;
    this.startTime = new Date;
    this.render();
    if (!this.interval)this.interval = setInterval(function() { a.tick(); }, 100);
};
Timer.prototype.pause = function() { if (this.interval)clearInterval(this.interval), this.interval = null; };
Timer.prototype.tick = function() {
    this.currentPosition = this.startPosition + (new Date - this.startTime);
    if (this.currentPosition > this.duration)this.currentPosition = this.duration, this.handleEvent("timercomplete"), this.pause();
    this.render();
};
Timer.prototype.createRef = function() {
    if (this.ref)return!1;
    this.ref = $("<canvas class='timer' width='20' height='20'></canvas>");
    player.isIOSFrame ? $(document.body).append(this.ref) : $(".framewrap").append(this.ref);
    this.context = this.ref.get(0).getContext("2d");
    return!0;
};
Timer.prototype.render = function() {
    if (this.context) {
        this.context.strokeStyle = "#cfcfcf";
        if (!player.isIOSFrame)this.context.strokeStyle = player.frame.colorGroups.timer.stroke.toColorString();
        this.context.beginPath();
        this.context.arc(10, 10, 9, 0, 2 * Math.PI, !1);
        this.context.stroke();
        var a = this.context.createLinearGradient(0, 0, 0, 20);
        a.addColorStop(0, "#039EF4");
        a.addColorStop(1, "#0147E6");
        var b = this.context.createLinearGradient(0, 0, 0, 20);
        b.addColorStop(0, "#FDE145");
        b.addColorStop(1, "#E4B202");
        player.isIOSFrame ||
        (a = player.frame.colorGroups.timer.duration.toCanvasGradient(this.context, 20), b = player.frame.colorGroups.timer.elapsed.toCanvasGradient(this.context, 20));
        this.context.beginPath();
        this.context.fillStyle = a;
        this.context.arc(10, 10, 9, 0, 2 * Math.PI, !1);
        this.context.fill();
        var a = -Math.PI / 2, c = a - 2 * this.currentPosition / this.duration * Math.PI;
        this.context.beginPath();
        this.context.fillStyle = b;
        this.context.moveTo(10, 10);
        this.context.arc(10, 10, 9, a, c, !0);
        this.context.closePath();
        this.context.fill();
    }
};
var Slide = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.title = "Untitled Slide";
    this.transition = null;
    this.layers = {};
    this.timelineEvents = [];
    this.clips = [];
    this.resources = [];
    this.interactions = {};
    this.responses = {};
    this.navLinks = [];
    this.layerStack = [];
    this.loadedChunkXML = this.backgroundReady = this.ready = !1;
    this.currentIndex = this.zeroTime = this.currentTime = this.slideIndex = 0;
    this.duration = 5E3;
    this.active = !0;
    this.paused = this.playing = !1;
    this.width = 720;
    this.height = 540;
    this.scale = 1;
    this.topZ =
        5;
    this.constructElement();
    this.audioInitialized = this.fullyLoaded = !1;
};
Slide.prototype = new Element;
Slide.prototype.objectType = "Slide";
Slide.prototype.innerType = "Slide";
Slide.getResumeReference = function(a) {
    var b;
    null == a ? b = 9 : (b = "" + (a.slideBank ? "1" : "0"), a.slideBank ? (b += bwChunk.CreateChunk(bwChunk.UBase10toN(a.drawSlideIndex)), b += bwChunk.CreateChunk(bwChunk.UBase10toN(a.sceneIndex)), b += bwChunk.CreateChunk(bwChunk.UBase10toN(a.drawIndex))) : (b += bwChunk.CreateChunk(bwChunk.UBase10toN(a.sceneSlideIndex)), b += bwChunk.CreateChunk(bwChunk.UBase10toN(a.sceneIndex))));
    return b;
};
Slide.getFromResumeChunk = function(a) {
    if ("1" == a.NextString(1))var b = a.NextChunkedUBase10(), c = a.NextChunkedUBase10(), a = a.NextChunkedUBase10(), c = story.getDescendantsByType("Scene")[c], b = c.getDescendantsByType("SlideDraw")[a].orderedChildren[b];
    else b = a.NextChunkedUBase10(), c = a.NextChunkedUBase10(), c = story.getDescendantsByType("Scene")[c], b = c.slides[b];
    return b;
};
Slide.prototype.restoreFromResumeData = function(a, b) {
    !this.fullyLoaded && !b && (this.loadContentFromXML(b), b = !0);
    this.hasRestoredInteractions = !0;
    var c = [];
    this.deepEach(function(a, b) { b.resume && "ShuffleGroup" != b.innerType && c.push(b); }, function(a) { return"Layer" == a.innerType ? !1 : !0; });
    var d = new bwChunk(a), e = new bwChunk(d.Data()), f = new bwChunk(e.Data());
    this.resume || (f = d);
    $.each(this.interactions, function(a, b) {
        b.restoreFromResumeChunk(f);
        f = f.NextChunk();
    });
    if (!b) {
        d = e.NextChunk();
        this.currentTime = bwChunk.BaseNto10(d.Data(),
            d.Length());
        this.fixCurrentIndex();
        for (var d = d.NextChunk(), e = new bwChunk(d.Data()), g = 0; !e.isNothing;) {
            var h = c[g];
            h ? h.restoreFromResumeData(e.ChunkData()) : console.error("u:ERROR restoring slide: unknown item", g);
            e = e.NextChunk();
            g++;
        }
        var j = [];
        $.each(this.children, function(a, b) { "Layer" == b.innerType && j.push(b); });
        g = d.NextChunk();
        h = new bwChunk(g.Data());
        for (e = 0; !h.isNothing;)d = j[e], d.restoreFromResumeData(h.Data()), h = h.NextChunk(), e++, d.reset(), d.hide();
        g = g.NextChunk();
        for (h = new bwChunk(g.Data()); !h.isNothing;)
            e =
                h.NextUBase10(), d = j[e], e = d.currentTime, d.slide == player.currentSlide() ? d.show() : (d.visible = !0, d.setOnStage(!0)), d.currentTime = e, h = h.NextChunk();
        var d = g.NextChunk(), k = d.Data();
        this.clips.forEach(function(a) {
            if ("audio" == a.innerType) {
                var b = new bwChunk(k);
                a.SetResumeData(b.Data());
                k = b.Remainder();
            }
        });
        this.restoreVariableResumeData(d.NextChunk().Data());
    }
};
Slide.prototype.getResumeData = function() {
    var a = "";
    if (this.variables.Visited)
        if (this.resume) {
            var b = "", c = "", d = "", e = "", f = "";
            this.deepEach(function(a, c) { c.resume && "ShuffleGroup" != c.innerType && (b += bwChunk.CreateChunk(c.GetResumeData())); }, function(a) { return"Layer" == a.innerType ? !1 : !0; });
            this.clips.forEach(function(a) { "audio" == a.innerType && (e += bwChunk.CreateChunk(a.GetResumeData())); });
            f = "";
            $.each(this.interactions, function(a, b) { f += bwChunk.CreateChunk(b.GetResumeData()); });
            var a = bwChunk.CreateChunk(f),
                g = bwChunk.Base10toN(this.currentTime),
                a = a + bwChunk.CreateChunk(g),
                a = a + bwChunk.CreateChunk(b),
                h = [];
            $.each(this.children, function(a, b) { "Layer" == b.innerType && (b.visible && h.push(b), b.resume && (c += bwChunk.CreateChunk(b.getResumeData()))); });
            a += bwChunk.CreateChunk(c);
            $.each(h, function(a, b) {
                var c = b.getItemIndex();
                d += bwChunk.CreateChunk(bwChunk.Base10toN(c));
            });
            a += bwChunk.CreateChunk(d);
            a += bwChunk.CreateChunk(e);
            g = this.getVariableResumeData();
            0 < util.count(this.variables) && (a += g);
            a = bwChunk.CreateChunk(a);
        } else
            0 < this.interactionCount && (f = this.buildInteractionResumeData(),
                a = bwChunk.CreateChunk(f));
    return a;
};
Slide.prototype.buildInteractionResumeData = function() {
    var a = "";
    $.each(this.interactions, function(b, c) { a += bwChunk.CreateChunk(c.GetResumeData()); });
    return a;
};
Slide.prototype.rebuildInteractionData = function() {
    if (this.compactResumeData) {
        var a = new bwChunk(this.compactResumeData), a = new bwChunk(a.Data()), b = "", c = "";
        $.each(this.interactions, function(a, b) { c += bwChunk.CreateChunk(b.GetResumeData()); });
        b += bwChunk.CreateChunk(c);
        b += a.Remainder();
        this.compactResumeData = bwChunk.CreateChunk(b);
    }
};
Slide.prototype.toBaseData = Element.prototype.toData;
Slide.prototype.toData = function(a) {
    if (a && this.resumeData) {
        if (this.variables.Visited) {
            if (!this.resumeData.variables)this.resumeData.variables = {};
            this.resumeData.variables.Visited = !0;
        }
        return this.resumeData;
    }
    var b = this.toBaseData(a);
    $.each(this.interactions, function(a, d) {
        var e = d.toData();
        if (!jQuery.isEmptyObject(e)) {
            if (!b.interactions)b.interactions = {};
            b.interactions[a] = e;
        }
    });
    return b;
};
Slide.prototype.updateBaseFromData = Element.prototype.updateFromData;
Slide.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    this.variables.Visited && player.slideList.markVisited(this);
    if (!this.resumeData)this.resumeData = a;
};
Slide.prototype.loadFromXML = function(a) {
    var b = this;
    this.width = parseInt($(a).attr("width"));
    this.height = parseInt($(a).attr("height"));
    this.aspectRatio = this.width / this.height;
    this.id = $(a).attr("id");
    this.title = $(a).attr("title");
    this.html5url = $(a).attr("html5url");
    this.dataurl = $(a).attr("dataurl");
    this.trackviews = "true" == $(a).attr("trackviews");
    this.resume = "true" == $(a).attr("resume");
    this.enableseek = "true" == $(a).attr("enableseek");
    this.enablereplay = "true" == $(a).attr("enablereplay");
    this.xml = a;
    this.loadedChunkXML =
        null == this.html5url;
    this.loadElementInfoFromXML(a);
    this.loadedChunkXML && (this.loadAudioFromXML(), this.loadBackgroundFromXML(), this.loadElementInfoFromXML(a));
    b.interactionCount = 0;
    $(a).children("interactions").children("interaction").each(function(a, d) {
        var e = new Interaction;
        e.loadFromXML(d, b);
        b.interactions[e.id] = e;
        b.children[e.id] = e;
        b.interactionCount++;
    });
    this.transition = new Transition(this);
    this.transition.loadFromXML(a);
    this.detectSimpleNavigation();
    player.preload && this.loadContentFromXML();
    b.variables.WindowId =
        "_frame";
    b.variableDefaults.WindowId = "_frame";
};
Slide.prototype.loadAudioFromXML = function() {
    if (!this.audioInitialized) {
        var a = this;
        this.audioInitialized = !0;
        $(this.xml).children("audiolib").children("audio").each(function(b, c) {
            var d = new Audio;
            d.loadFromXML(c, a, a.slide, a.layer);
            d.createRef();
            a.children[d.id] = d;
        });
    }
};
Slide.prototype.loadBackgroundFromXML = function() {
    var a = this;
    $(a.xml).children("background").each(function(b, c) {
        a.background = new Background(a.ref);
        a.background.loadFromXML(c);
        a.background.src ? (a.content = { src: a.background.src }, a.resource = new Resource(a, a.background.src, function() { a.backgroundReady = !0; }), a.pushResource(a.resource)) : a.backgroundReady = !0;
        a.ref && a.background.apply(a.ref);
    });
};
Slide.prototype.blockAndLoad = function(a) {
    var b = this;
    this.loadCallbackStack ? this.loadCallbackStack.push(a) : this.loadCallbackStack = [a];
    var c = function() {
        for (player.shouldShowLoadingSpinner = !1; b.loadCallbackStack.length;)b.loadCallbackStack.pop()();
        player.actionQueuePaused = !1;
    };
    player.actionQueuePaused = !0;
    if (b.ready && b.backgroundReady && b.loadedChunkXML)c();
    else {
        var d = 0;
        clearTimeout(b.readyWaitTimeout);
        b.readyWaitTimeout = null;
        var e = function() {
            b.ready && b.backgroundReady && b.loadedChunkXML || 50 < d++ ? c() : b.readyWaitTimeout =
                setTimeout(e, 100);
        };
        player.slideLoadQueue && 0 != b.slideIndex && player.slideLoadQueue.promote(b.slideIndex);
        player.shouldShowLoadingSpinner = !0;
        player.loadingSpinnerTimeout = setTimeout(function() { player.shouldShowLoadingSpinner && (player.loadingSpinner.show(), player.frame.setControlEnabled("previous", !1), player.frame.setControlEnabled("next", !1), player.frame.setControlEnabled("submit", !1)); }, 1E3);
        e();
    }
};
Slide.prototype.loadContentFromXML = function(a) {
    var b = this;
    if (this.loadedChunkXML) {
        if (!this.fullyLoaded) {
            this.fullyLoaded = !0;
            var c = b.xml;
            a || this.loadAudioFromXML();
            this.loadChildrenFromXML(c, b, null, null);
            b.timelineEvents = [];
            $(c).children("timeline").each(function(a, c) {
                b.duration = $(c).attr("duration");
                $(c).find("event").each(function(a, c) {
                    var d = new TimelineEvent(b);
                    d.loadFromXML(c);
                    b.timelineEvents.push(d);
                });
            });
            $(c).children("slidelayers").children("slidelayer").each(function(a, c) {
                var f = new Layer(b.ref,
                    b);
                f.loadFromXML(c);
                b.layers[f.id] = f;
                b.children[$(c).attr("id")] = f;
            });
            this.resetSlide();
        }
    } else if (!this.loadingChunkXML)this.loadingChunkXML = !0, this.loadChunkXML(!0);
};
Slide.prototype.integrateChunkXML = function(a, b) {
    var c = this;
    $(a).children("slide").children().each(function(a, b) { $(c.xml).append($(b)); });
    this.loadedChunkXML = !0;
    b && (this.loadAudioFromXML(), this.loadElementInfoFromXML(c.xml), this.loadContentFromXML(), this.loadBackgroundFromXML(), this.detectSimpleNavigation(), player.loadResourcesForSlide(c));
};
Slide.prototype.loadChunkXML = function(a) {
    var b = this;
    window.SlideXMLData = function(c, d) {
        if ("string" == typeof d) {
            d = d.replace(/[\u000a\u000b\u000c\u000d\u0085\u2028\u2029]/g, "");
            d = d.replace(/&#x[0-8bcef];/ig, "");
            -1 < location.search.indexOf("dumpxml=1") && console.log(d);
            var g;
            window.ActiveXObject ? (g = new ActiveXObject("Microsoft.XMLDOM"), g.loadXML(d)) : g = (new DOMParser).parseFromString(d, "text/xml");
            d = g;
        }
        b.id != c ? story.getSlideByID(c).integrateChunkXML(d, a) : b.integrateChunkXML(d, a);
    };
    if (player.loadFromScript) {
        var c =
                document.getElementsByTagName("head")[0],
            d = document.createElement("script");
        d.type = "text/javascript";
        d.src = player.basepath + b.html5url;
        c.appendChild(d);
    } else $.ajax({ url: player.basepath + b.dataurl.replace(".swf", ".xml") + "?rand=" + Math.random(), dataType: "xml", success: function(c) { b.integrateChunkXML(c, a); }, error: function() { return!1; } });
};
Slide.prototype.detectSimpleNavigation = function() {
    var a = this;
    this.hasSimpleNavigation = !0;
    $(this.xml).find('actiongroup[id="ActGrpOnNextButtonClick"]').each(function(b, c) {
        var d = $(c).children("actions").children(), e = $(c).children("actions").children("gotoplay");
        if (1 != d.length || 1 != e.length)a.hasSimpleNavigation = !1;
    });
};
Slide.prototype.unloadContent = function() {
    if (this.fullyLoaded && !player.preload) {
        this.fullyLoaded = !1;
        var a = this, b = 0, c = 0;
        $.each(this.layers, function(a, b) { b.emptyLayer(); });
        var d = [];
        this.deepEach(function(a, b) { d.push(b); }, function(a) { return"audio" != a.innerType && "Interaction" != a.innerType; });
        $.each(d, function(a, c) {
            c.emptyElement();
            b++;
        });
        var e = {};
        $.each(this.children, function(a, b) { "audio" != b.innerType && "Interaction" != b.innerType && (e[a] = b); });
        $.each(e, function(b) {
            delete a.children[b];
            c++;
        });
        $(this.ref).find(".webobject").each(function(a,
            b) {
            b.src = "";
            $(b).remove();
        });
        a.timelineEvents = [];
    }
};
Slide.prototype.pushResource = function(a) {
    for (var b = 0; b < this.resources.length; b++)if (this.resources[b].src == a.src)return;
    this.resources.push(a);
};
Slide.prototype.createRef = function(a) {
    if (this.ref)return!1;
    this.container = a || $("#slidecontainer");
    this.ref = $('<div class="slide transitionable"></div>');
    this.ref.css("display", "none");
    this.background && this.background.apply(this.ref);
    this.ref.get(0).id = "slide_" + this.id;
    this.ref.get(0).item = this;
    if (this.width > player.frame.availableWidth || this.height > player.frame.availableHeight)this.scale = Math.min(player.frame.availableWidth / this.width, player.frame.availableHeight / this.height), this.y = this.x = 0, this.applySize(this.ref);
    $.each(this.children, function(a, c) { c.createRef && c.createRef(); });
    this.container.append(this.ref);
    this.ref.css("width", this.width + "px");
    this.ref.css("height", this.height + "px");
    player.reorient(!0);
    return!0;
};
Slide.prototype.reduce = function() {
    $.each(this.children, function(a, b) { b.reduce && b.reduce(); });
    if (this.canvas)this.canvas.width = 1, this.canvas.height = 1;
};
Slide.prototype.destroyRef = function() {
    $.each(this.children, function(a, b) { b.destroyRef && b.destroyRef(); });
    if (this.ref)this.ref.get(0).item = null, this.ref.get(0).id = null, this.ref.remove(), this.ref = null;
    for (var a in this.children) {
        var b = this.children[a];
        b.destroyRef && (b.ref && b.destroyRef(), delete this.children[a]);
    }
    this.audioInitialized = !1;
    this.clips = [];
};
Slide.prototype.findClip = function(a) {
    var b = $.grep(this.clips, function(b) { return b.id == a; });
    return 0 < b.length ? b[0] : null;
};
Slide.prototype.topMostLayer = function() { return 0 < this.layerStack.length ? this.layerStack[this.layerStack.length - 1] : this; };
Slide.prototype.saveIfNecessary = function() {
    $.each(this.interactions, function(a, b) { if (!b.variables.Status || "incomplete" == b.variables.Status || "unanswered" == b.variables.Status)b.evaluate(!0, !0, !0), b.variables.Status || (b.variables.Status = "unanswered"); });
    if (this.resume || 0 < this.interactionCount)this.currentTime = player.currentTime, player.useCompactResume ? this.compactResumeData = this.getResumeData() : this.resumeData = this.toData();
    this.parent.compactResumeData = this.parent.getResumeData();
};
Slide.prototype.resetSlide = function(a, b, c) {
    this.timelineComplete = this.transitionedIn = !1;
    if (this.resume && !a)player.useCompactResume && this.compactResumeData ? this.restoreFromResumeData(this.compactResumeData) : this.resumeData && this.updateFromData(this.resumeData);
    else {
        this.deepEach(function(a, b) {
            b.quickHide && b.quickHide();
            b.reset();
        }, function(a) { return a.parent && "Layer" == a.parent.innerType && a.parent.resume ? !1 : "Interaction" == a.innerType ? !0 == b : !0; });
        this.compactResumeData = "";
        this.currentIndex = this.currentTime =
            0;
        if (player.currentSlide() == this)player.currentTime = 0;
        this.clips.forEach(function(a) { a.m_bResumeOnSeek = !1; });
        this.reset();
        this.update(this.currentTime, !c, !0);
    }
};
Slide.prototype.resetBase = Element.prototype.reset;
Slide.prototype.reset = function(a) { this.resetBase(a, function(a) { return"Interaction" == a.innerType ? !1 : !0; }); };
Slide.prototype.resetInteractions = function() { this.resume || $.each(this.interactions, function(a, b) { b.reset(); }); };
Slide.prototype.show = function(a, b, c) {
    this.createRef(this.container);
    this.resetSlide(!1, !0);
    player.modalLayer = null;
    this.visible = !0;
    $.each(this.layers, function(a, b) { b.visible || b.hide(); });
    player.container.children(".slide").removeClass("out");
    player.container.children(".slide.in").addClass("out");
    player.container.children(".slide").removeClass("in");
    this.ref.addClass("in");
    $(".slide:not(.in, .out, .framed)").css("display", "none");
    this.ref.css("display", "block");
    var b = this.transition,
        d = this,
        e = this.ref,
        f = $(".slide.out");
    if (b.wipe)d = 0 < f.length ? f.get(0).item : null, e = $(".slide.out"), f = this.ref, $(".slide.out").addClass("over"), Transition.applyCss({ "-webkit-transform": "translate3d(0px,0px,0px) scale(1) rotate(0deg)", opacity: 1, "-webkit-transition-duration": "0s" }, this.ref);
    f = function() {
        $(".slide.out").css("display", "none");
        $(".slide.over").removeClass("over");
        a && (player.play(!0), c && c());
    };
    if (b && 0 < b.duration && 0 < e.length) {
        this.currentIndex = 0;
        this.update(this.currentTime, !0, !0);
        var g = b.convertToAnimation(d);
        g.item = d;
        this.rotatexpos = this.width / 2;
        this.rotateypos = this.height / 2;
        g.start(e, b.reverse, player, f);
        g.seek(g.target, g.reverse, 0, !0);
    } else f();
    if ("SlideDraw" == this.parent.innerType)player.currentDraw = this.parent, this.parent.sniffDrawIndex(this);
    this.currentIndex = 0;
    this.transitionedIn = !1;
    player.zoomParams = null;
    this.transcript && this.transcript.show();
};
Slide.prototype.hide = function() {
    this.visible = !1;
    this.ref && this.destroyRef();
};
Slide.prototype.fixCurrentIndex = function() { for (this.currentIndex = 0; this.currentIndex < this.timelineEvents.length && this.timelineEvents[this.currentIndex].time <= this.currentTime;)this.currentIndex++; };
Slide.prototype.tick = function() {
    if (!(this.paused || this.animating && !this.animationEnded))
        if (this.currentTime += player.currentTickDuration, this.ended = !1, this.currentTime >= this.duration) {
            var a = this.handleEvent("ontimelinecomplete");
            !player.layerPlaying && a && this.handleEvent("onallopentimelinescomplete");
            this.currentTime = parseInt(this.duration);
            this.pause(!0, !1);
            this.endedAnimationTime = player.animationTime;
            this.ended = !0;
        }
};
Slide.prototype.update = function(a, b, c) {
    for (this.currentTime = a; 1 < this.currentIndex && this.currentIndex <= this.timelineEvents.length && parseInt(this.timelineEvents[this.currentIndex - 1].time) >= parseInt(this.currentTime);)this.currentIndex--, this.timelineEvents[this.currentIndex].revert(a);
    for (; this.currentIndex < this.timelineEvents.length && this.timelineEvents[this.currentIndex].time <= this.currentTime && (!player.paused || c);)a = this.timelineEvents[this.currentIndex], a.act(b, this.currentTime > a.time + 1E3), this.currentIndex++;
    b || this.handleTransitionIn(b);
    this.updateLayers();
    if (this.currentTime >= this.duration && !this.timelineComplete)b = this.handleEvent("ontimelinecomplete"), !player.layerPlaying && b && this.handleEvent("onallopentimelinescomplete"), this.timelineComplete = !0;
    if (this.currentTime < this.duration)this.timelineComplete = !1;
};
Slide.prototype.tickLayers = function() { $.each(this.layers, function(a, b) { b.visible && !b.paused && (b.currentTime += player.TICK_DURATION); }); };
Slide.prototype.updateLayers = function() { $.each(this.layers, function(a, b) { b.visible && b.update(); }); };
Slide.prototype.handleTransitionIn = function() { if (!this.transitionedIn)this.transitionedIn = !0, this.handleEvent("ontransitionin", null, null, !1, !0), this.handleEvent("ontransitionincomplete", null, null, !1, !0), this.handleEvent("onslidestart", null, null, !1, !0), this.deepEach(function(a, b) { b.handleEvent && b.handleEvent("onslidestart", null, null, !1, !0); }, function(a) { return"Layer" != a.innerType; }); };
Slide.prototype.addchoiceresponse = function(a) {
    var b = this.children[$(a).attr("interactionid")], a = $(a).attr("value"), c = this.extractVariable(a) || "true", d = b.parseObjref(a).target;
    "Choice" != d.innerType && $.each(b.choices, function(a, b) { b.lmstext.toLowerCase() == c.toLowerCase() && (d = b); });
    b.m_bAnswered = !0;
    "Choice" == d.innerType ? (b.responses[a] = d, b.lmsResponses.push(new ResponseData(!1, d.id, "", d.lmstext, "")), d.selected = !0) : (b.variables.Value = c, a = b.parseObjref(c).target, "Choice" == a.innerType ? (a.selected = !0, b.lmsResponses.push(new ResponseData(!1,
        a.id, "", a.lmstext, ""))) : b.lmsResponses.push(new ResponseData(!1, c, "", c, "")));
};
Slide.prototype.addpairresponse = function(a) {
    var b = this.children[$(a).attr("interactionid")], c = this.extractVariable($(a).attr("valuea"), $(a).attr("typea")), d = this.extractVariable($(a).attr("valueb"), $(a).attr("typeb"));
    if (c && d)
        switch (a = b.parseObjref(c).target, d = b.parseObjref(d).target, a.addPair(d), d.addPair(a), b.interactionType) {
        case "matching":
        case "sequence":
        case "likert":
            b.lmsResponses.push(new ResponseData(!0, d.id, a.id, d.lmstext, a.lmstext));
        }
    else b.parseObjref($(a).attr("valueb"));
    b.m_bAnswered =
        !0;
};
Slide.prototype.show_slidelayer = function(a) {
    var b = this.parseObjrefFromXML(a).target, c = new Transition(b);
    c.loadFromXML(a);
    b.show(c);
    b.update(0);
};
Slide.prototype.set_frame_layout = function(a) { player.currentSlide() == this || player.currentFramedSlide == this || player.currentWindowSlide == this ? player.frame.set_frame_layout(a) : this.deferredFrameLayoutXML = a; };
Slide.prototype.set_window_control_layout = function(a) { player.frame.set_window_control_layout(a); };
Slide.prototype.isPointActive = function() { return!1; };
Slide.prototype.isPointObscured = function() { return!1; };
Slide.prototype.simplify = function(a) {
    var b = this.childItems(), c = $('<canvas class="simplebackground"></canvas>');
    c.attr("width", player.width);
    c.attr("height", player.height);
    var d = c.get(0).getContext("2d");
    this.ref.prepend($(c));
    var e = 0, f = 0, g = !1, h = !0;
    $.each(b, function(a, b) {
        if (player.renderVectorShapes && player.renderVectorsAsSVG && b.content.path)b.canSimplify = !1;
        if (player.renderVectorShapes && (b.hasImagelib || b.hasTextlib))b.canSimplify = !1;
        b.canSimplify && h && !b.group ? f++ : (h = !1, b.canSimplify = !1);
    });
    var j = function(b,
            c, d, h) {
            g = !0;
            var j = function() {
                    e++;
                    if (e == f)l(), $(r).unbind("load"), r.src = Element.PixelSrc, a && a();
                },
                r = new Image;
            $(r).bind("load", function() { j(); });
            $(r).bind("error", function() { j(); });
            player.renderVectorShapes && !player.renderVectorsAsSVG && h && h.content.path && !h.hasImagelib && !h.hasTextlib ? e++ : r.src = b;
            k.push({ img: r, x: c, y: d, item: h });
        },
        k = [],
        l = function() {
            $.each(k, function(a, b) {
                if (player.renderVectorShapes && !player.renderVectorsAsSVG && b.item && b.item.content.path && !b.item.hasImagelib && !b.item.hasTextlib) {
                    var e = {
                        canvas: c.get(0),
                        m_nXOffset: b.x,
                        m_nYOffset: b.y,
                        m_nWidth: b.item.width,
                        m_nHeight: b.item.height
                    };
                    ppArt.DrawVector(e, b.item.content.path);
                    b.item.ref.addClass("vector");
                } else d.drawImage(b.img, b.x, b.y);
            });
        };
    this.background && this.background.src && (f++, j(this.background.src, 0, 0), this.ref.css("background", "transparent"));
    $.each(b, function(a, b) {
        if (b.canSimplify)
            j(b.content.src, b.x, b.y, b), b.ref.addClass("simplified"), b.simplified = !0, b.ref.attr("src", Element.PixelSrc), b.ref.css("background", "transparent"), b.hasEvents || b.ref.remove(),
                g = !0;
    });
    a && !g && a();
};
Slide.prototype.isSubmitted = function() {
    var a = !0;
    $.each(this.interactions, function(b, c) { a = a && c.variables.Status && "incomplete" != c.variables.Status && void 0 != c.variables.Points; });
    return a;
};
Slide.prototype.isAnswered = function() {
    var a = !0;
    $.each(this.interactions, function(b, c) { a = a && c.m_bAnswered; });
    return a;
};
Element.prototype.forceRepaint = function(a) { if ((!a || player.isIOS) && this.ref && "block" == this.ref.css("display"))a = this.ref.get(0), this.ref.hide(), player.uselessOffsetHeight = a.offsetHeight, this.ref.show(); };
var StageItem = function(a) {
    this.container = a;
    this.ref = null;
    this.constructElement();
    this.dirty = !0;
    this.hiddenByLayer = this.actionMoved = this.actionControlled = !1;
    this.content = {};
};
StageItem.prototype = new Element;
StageItem.prototype.objectType = "Item";
StageItem.prototype.innerType = "Item";
var Item = StageItem;
StageItem.prototype.isStageItem = !0;
StageItem.prototype.getItemIndex = function() {
    var a = this, b = 0, c = -1;
    if (this.itemIndex)return this.itemIndex;
    (this.layer || this.slide).deepEach(function(d, e) { e.isStageItem && "ShuffleGroup" != e.innerType && (e == a && (c = b), b++); }, function(a) { return"Layer" == a.innerType ? !1 : !0; });
    return this.itemIndex = c;
};
StageItem.prototype.getItemByResumeIndex = function(a) {
    var b = 0, c = null;
    (this.layer || this.slide).deepEach(function(d, e) { e.isStageItem && "ShuffleGroup" != e.innerType && (b == a && (c = e), b++); }, function(a) { return"Layer" == a.innerType ? !1 : !0; });
    return c;
};
StageItem.FlagA = { FLAGA_STATE: 1, FLAGA_VARIABLE: 2, FLAGA_ONSTAGE: 4, FLAGA_DRAGDROP: 8, FLAGA_POSITION: 16, FLAGA_USEFLAGB: 32 };
StageItem.FlagB = { FLAGB_DEPTH: 1, FLAGB_SHUFFLED: 2, FLAGB_ACTIONMOVED: 4, FLAGB_ACTIONCONTROLLED: 8, FLAGB_DISABLED: 16, FLAGB_REVIEW: 32 };
StageItem.prototype.restoreFromResumeData = function(a) {
    var b = StageItem.FlagA, c = StageItem.FlagB, d = !1, e = !1, a = new bwChunk(a), f = a.NextUBase10(1), g = 0;
    f & b.FLAGA_USEFLAGB && (g = a.NextUBase10(1));
    if (f & b.FLAGA_STATE) {
        var h = a.NextUBase10(2), j = "";
        $.each(this.states, function(a, b) { b.index == h && (j = a); });
        this.variables.ObjectState = j;
    }
    f & b.FLAGA_ONSTAGE ? d = !0 : e = !0;
    f & b.FLAGA_DRAGDROP && (a.NextUBase10(2), a.NextUBase10(1));
    var k = !1;
    if (f & b.FLAGA_POSITION) {
        var l = a.NextBase10(2), m = a.NextBase10(2), n = a.NextUBase10(2);
        this.x = l + this.xoffset;
        this.y = m + this.yoffset;
        k = !0;
        switch (n) {
        case 4094:
            break;
        case 4095:
            this.originalParent = this.parent;
            this.parent = this.slide;
            break;
        default:
            this.originalParent = this.parent, this.parent = this.getItemByResumeIndex(n);
        }
        this.updateMatrixComplete(!0);
    }
    g & c.FLAGB_DEPTH && this.setZIndex(a.NextUBase10(2));
    if (g & c.FLAGB_SHUFFLED) {
        this.shuffled = !0;
        if (this.shuffleGroup)this.shuffleGroup.shuffled = !0;
        l = a.NextUBase10(2);
        m = a.NextUBase10(2);
        if (!k)this.x = l, this.y = m;
        this.shuffleX = l;
        this.shuffleY = m;
        this.updateMatrixComplete(!0);
    }
    f &
        b.FLAGA_VARIABLE && this.restoreVariableResumeData(a.NextString());
    (this.hiddenByLayer = 1 == a.NextUBase10(1)) && "ShuffleGroup" != this.innerType && (e = !0);
    if (d)this.quickShow ? this.quickShow() : (this.show(), this.visible = !0);
    e && "ShuffleGroup" != this.innerType && (this.quickHide ? this.quickHide() : this.hide());
};
StageItem.prototype.GetResumeData = function(a) {
    var b = StageItem.FlagA, c = StageItem.FlagB, d = "", e = "";
    if (this.resume || a) {
        var f = this.shouldStoreVariableResume(), a = this.originalZ && this.depth != this.originalZ, g = "true" == this.variables._disabled, h = this.actionControlled || this.actionMoved || a || this.shuffled || g, j = 0, k = 0;
        if (this.variables.ObjectState != bwUtils.DEFAULT_STATE) {
            var l = this.states[this.variables.ObjectState], m = l ? l.index : 0;
            !l && this.actionstates && this.actionstateindices && (l = this.actionstates[this.variables.ObjectState],
                m = this.actionstateindices[this.variables.ObjectState] || 0);
            0 <= m && (j += b.FLAGA_STATE, e += bwChunk.UBase10toN(l.index, 2));
        }
        f && (j += b.FLAGA_VARIABLE);
        this.visible && (j += b.FLAGA_ONSTAGE);
        this.dropArea && (l = this.dropArea.getItemIndex(), m = this.dropArea.getDragItemIndex(this), -1 < m && (j += b.FLAGA_DRAGDROP, e += bwChunk.UBase10toN(l, 2), e += bwChunk.UBase10toN(m, 1)));
        l = this.x;
        m = this.y;
        isNaN(this.xoffset) || (l = this.x - this.xoffset, m = this.y - this.yoffset);
        if (this.shuffled && (l != this.shuffleX || m != this.shuffleX) || !this.shuffled &&
            !isNaN(this.originalX) && (l != this.originalX || m != this.originalY))j += b.FLAGA_POSITION, e += bwChunk.Base10toN(l, 2), e += bwChunk.Base10toN(m, 2), l = 4094, this.originalParent && this.parent != this.originalParent && (l = "wordbank" == this.style ? 4094 : "Slide" == this.parent.innerType ? 4095 : this.parent.getItemIndex()), e += bwChunk.UBase10toN(l, 2);
        h && (j += b.FLAGA_USEFLAGB, a && (k += c.FLAGB_DEPTH, e += bwChunk.Base10toN(this.depth, 2)), this.shuffled && (k += c.FLAGB_SHUFFLED, e += bwChunk.Base10toN(this.shuffleX, 2), e += bwChunk.Base10toN(this.shuffleY,
            2)), this.actionMoved && (k += c.FLAGB_ACTIONMOVED), this.actionControlled && (k += c.FLAGB_ACTIONCONTROLLED), g && (k += c.FLAGB_DISABLED));
    }
    d += bwChunk.UBase10toN(j);
    h && (d += bwChunk.UBase10toN(k));
    f && (b = (new bwChunk(this.getVariableResumeData())).Data(), e += b);
    e += this.hiddenByLayer ? "1" : "0";
    return d + e;
};
StageItem.prototype.getExtraResumeVars = function() { return{}; };
StageItem.prototype.loadFromXML = function(a, b, c) {
    this.slide = b;
    this.layer = c;
    this.children = {};
    this.links = {};
    this.jcanvas = null;
    this.innerType = this.type = a.tagName;
    this.id = "undefined" === typeof $(a).attr("id") ? $(a).attr("name") : $(a).attr("id");
    this.xml = a;
    this.loadElementInfoFromXML(a);
    $(a).find("html5data");
    this.scrolling = "true" == $(a).attr("scrolling");
    this.shufflelock = "true" == $(a).attr("shufflelock");
    this.hasEvents = 0 != $(a).find("events").length;
    this.content.src = Element.PixelSrc;
    this.loadContentFromXML(a);
    this.loadSizeFromXML(a);
    this.bitMask = new BitMask(!0, this.width, this.height);
    this.bitMask.itemID = this.id;
    if (0 < $(this.xml).children("dragdrop").length && ("true" == $(this.xml).children("dragdrop").first().attr("dragenabled") && this.convertToDragItem(this.xml), "true" == $(this.xml).children("dragdrop").first().attr("dropenabled") && this.convertToDropArea(this.xml), "true" == $(this.xml).children("dragdrop").first().attr("dragoverenabled")))this.announceDragOver = !0, this.setupDragOver(this.xml);
};
StageItem.prototype.setupDragOver = function() {
    this.announceDragOver = !0;
    this.parseDragGroupsFromXML = DragItem.prototype.parseDragGroupsFromXML;
    this.parseDragGroupsFromXML(this.xml);
};
StageItem.prototype.loadContentFromXML = function(a) {
    var b = $(a).find("html5data");
    this.scrolling = "true" == $(a).attr("scrolling");
    this.hasEvents = 0 != $(a).find("events").length;
    switch (this.type) {
    case "audio":
        this.canSimplify = !1;
        this.content.src = player.basepath + "" + $(a).attr("url");
        this.content.duration = parseInt($(a).attr("duration"));
        slide && slide.clips && slide.clips.push && slide.clips.push(this);
        if (layer && layer.clips && layer.clips.push)layer.clips.push(this), this.layered = !0;
        break;
    case "vectorshape":
    case "scrollarea":
    case "state":
    case "dragitem":
    case "droplist":
    case "droparea":
    case "button":
    case "expandinglabel":
    case "link":
        this.content.src =
            Element.PixelSrc;
        if (0 < $(a).children("textlib").length) {
            this.textlib = $(a).children("textlib");
            if (!story.textlibs)story.textlibs = {};
            if ((b = this.textlib.children("textdata").attr("linkid")) && 0 == this.textlib.find("path").length && 0 == this.textlib.find("pr").length && story.textlibs[b])this.textlib = story.textlibs[b];
            if (b && (1 == this.textlib.find("path").length || 1 == this.textlib.find("pr").length) && !story.textlibs[b])story.textlibs[b] = this.textlib;
        } else if (0 < $(a).children("data").length)this.textlib = $(a).children("data");
        0 < $(a).children("imagelib").length && this.loadImageDataFromXML(a);
        var b = $(a).children("data").children("vectordata").children("path"), c = $(a).children("data").children("vectordata").children("pr");
        if (1 == b.length || 1 == c.length) {
            a = $(a).children("data").children("vectordata");
            if (null != $(a).attr("top"))this.originalRectShape = this.rectShape = new ppRect(parseInt($(a).attr("left")), parseInt($(a).attr("top")), parseInt($(a).attr("right")), parseInt($(a).attr("bottom")));
            this.content.path = 1 == c.length ? PathLib.getPathFromXML(c) :
                b.text();
            a.attr("alttext");
        }
        this.type = "image";
        break;
    case "item":
        this.content.src = Element.PixelSrc;
        this.textlib = $(a);
        this.forceDivPattern = !0;
        this.type = "image";
        break;
    case "textfield":
        this.content.src = Element.PixelSrc;
        if (0 < b.length)this.content.src = player.basepath + "mobile/" + b.attr("url"), this.content.mask = b.attr("mask"), this.content.maskref = b.attr("maskref");
        this.textlib = $(a).children("data");
        break;
    case "image":
        this.content.src = $(a).find("imagedata").attr("url");
        this.content.src = this.content.src ? player.basepath +
            "mobile/" + this.content.src.replace("story_content/", "").replace(".swf", ".png") : "";
        if (0 < b.length)this.content.src = player.basepath + "mobile/" + b.attr("url"), this.content.mask = b.attr("mask"), this.content.maskref = b.attr("maskref");
        break;
    case "textinput":
        this.canSimplify = !1;
        this.content.src = Element.PixelSrc;
        break;
    case "video":
        if (this.canSimplify = !1, this.content.src = $(a).find("videodata").attr("url"), this.content.autoplay = "true" == $(a).attr("autoplay"), this.content.showcontrols = "true" == $(a).attr("showcontrols"),
            this.content.autorewind = "true" == $(a).attr("autorewind"), this.content.loop = "true" == $(a).attr("loop"), this.content.src) {
            if (this.content.src = player.basepath + "" + this.content.src, this.content.src = this.content.src.replace(".mp4", ".mov"), player.usePlaceholderVideo)this.content.src = "/aomock/DocumentHandler.ashx?mimetype=video/mp4&url=/test/video_3.mp4";
        } else this.content.src = "";
    }
    if (this.textlib && this.content.src == Element.PixelSrc && (a = this.textlib.children("textdata").children("vartext").first().text(), a || (a =
        this.textlib.children("textdata").attr("lmstext")) && (a = "<span>" + a + "</span>"), a))this.textTemplate = a = a.replace(/size='(.*?)(pt|)'/ig, "style='font-size:$1pt'"), this.textTemplateHeight = parseInt(this.textlib.children("textdata").attr("height")), this.textTemplateWidth = parseInt(this.textlib.children("textdata").attr("width"));
};
StageItem.prototype.loadImageDataFromXML = function(a) {
    var b = this;
    b.imagelib = new ppImageLib;
    $(a).children("imagelib").children("imagedata").each(function(a, d) {
        var e = b.imagelib.AddImage($(d).attr("id"), $(d).attr("type"), null, $(d).attr("width"), $(d).attr("height"), $(d).attr("mobiledx"), $(d).attr("mobiledy")), f = $(d).attr("altimage"), g = $(d).attr("url"), f = player.basepath + (f ? f : g), g = $(d).attr("mask");
        b.content.mask = g;
        b.content.maskref = $(d).attr("maskref");
        if (-1 < f.indexOf(".swf"))f = Element.PixelSrc;
        b.content.src =
            f;
        g = b.createResource(b.slide, f, function() { b.blocked && b.ref && b.render(b.lastRenderedState, !0, null, "resource callback"); });
        g.imgLibID = $(d).attr("id");
        g.src = f;
        if (!g.poolImage)g.poolImage = document.createElement("img"), g.poolImage.className = "loader";
        e.imgNode = g.poolImage;
        e.Width = $(d).attr("width");
        e.Height = $(d).attr("height");
    });
};
StageItem.prototype.loadSizeFromXML = function(a) {
    var b = $(a).children("data").children("html5data");
    if ("audio" != this.type)
        0 < b.length ? (this.hasImagelib = 0 < $(a).find("imagelib").length, this.hasTextlib = 0 < $(a).find("textlib").length, this.xpos = parseInt($(a).attr("xpos")), this.ypos = parseInt($(a).attr("ypos")), this.xoffset = parseInt($(a).attr("xoffset")) || 0, this.yoffset = parseInt($(a).attr("yoffset")) || 0, this.x = this.xpos + this.xoffset, this.y = this.ypos + this.yoffset, this.width = parseInt(b.attr("width")), this.height =
            parseInt(b.attr("height"))) : ("video" == this.type ? (this.xpos = parseInt($(a).attr("xpos")), this.ypos = parseInt($(a).attr("ypos")), this.x = parseInt($(a).attr("xpos")), this.y = parseInt($(a).attr("ypos"))) : (this.xpos = parseInt($(a).attr("xpos")), this.ypos = parseInt($(a).attr("ypos")), this.yoffset = this.xoffset = 0, this.x = this.xpos + this.xoffset, this.y = this.ypos + this.yoffset), this.width = parseInt($(a).attr("width")), this.height = parseInt($(a).attr("height")));
    this.rotatexpos = Math.round($(a).attr("rotatexpos")) || 0;
    this.rotateypos =
        Math.round($(a).attr("rotateypos")) || 0;
    this.rotation = parseInt($(a).attr("rotation")) || 0;
    this.xscale = parseInt($(a).attr("xscale")) || 0;
    this.yscale = parseInt($(a).attr("yscale")) || 0;
    this.originalX = this.x;
    this.originalY = this.y;
    this.originalXOffset = this.xoffset;
    this.originalyOffset = this.yoffset;
    this.depth = parseInt($(a).attr("depth")) || 1;
    if (0 == this.depth)this.depth = 1;
    this.originalZ = this.depth;
    if (this.depth > this.slide.topZ)this.slide.topZ = this.depth;
};
StageItem.prototype.createResource = function(a, b, c) {
    b = new Resource(this, b, function() { c && c(); });
    if (!a.resources)a = a.slide;
    a.pushResource(b);
    this.resources.push(b);
    return b;
};
StageItem.prototype.createRef = function() {
    if (!this.parent.ref)return this.parent.createRef(), !1;
    this.container = this.parent.ref;
    if (this.ref)return this.render(null, !1, null, "StageItem createRef"), !1;
    this.ref = $('<div class="item"></div>');
    this.ref.addClass(this.type);
    this.ref.addClass(this.innerType.toLowerCase());
    this.ref.addClass("item_" + this.id);
    player.showItemInfo && this.ref.append($('<div class="itemid">' + this.id + "</div>"));
    this.applySize(this.ref);
    "dragitem" == this.innerType && this.setZIndex(this.depth);
    this.container.append(this.ref);
    this.ref.get(0).item = this;
    "video" != this.type && "audio" != this.type && this.bindEvents();
    $.each(this.children, function(a, b) { b.createRef && b.createRef(); });
    this.initDrag && (this.initDrag(), this.convertRefToDragItem());
    ("DropArea" == this.innerType || this.isDropArea) && this.ref.addClass("droparea");
    this.announceDragOver && this.ref.addClass("dragover");
    this.visible = !1;
    this.nearestScrollAreaAncestor = this.findAncestorOfType("ScrollArea");
    return!0;
};
StageItem.prototype.setInteractive = function() {
    this.ref.addClass("interactive");
    this.parent.setInteractive && this.parent.setInteractive();
};
StageItem.prototype.setZIndex = function(a, b) { if (b || !("Layer" == this.innerType || "ExpandingLabel" == this.innerType))$.each(this.children, function(b, d) { if (d.depth > a)a = d.depth; }), this.ref && this.ref.css("z-index", a), this.depth = a, this.parent && this.parent.setZIndex && this.parent.setZIndex(a); };
Element.prototype.updateMatrix = function() {
    this.matrix.reset();
    "ScrollArea" == this.innerType && this.ref && 0 != this.ref.get(0).scrollTop && this.matrix.translate(0, -this.ref.get(0).scrollTop);
    "sequencectrl" == this.innerType && this.ref && 0 != this.ref.get(0).scrollTop && this.matrix.translate(0, -this.ref.get(0).scrollTop);
    this.parent && !this.parent.dragX && !this.parent.dragY && this.matrix.translate(this.dragX || 0, this.dragY || 0);
    this.parent && this.parent.matrix && this.matrix.multiply(this.parent.matrix.copy());
    this.centerpoint =
    { x: this.rotatexpos - this.xoffset, y: this.rotateypos - this.yoffset };
    this.matrix.translate(this.x + this.centerpoint.x, this.y + this.centerpoint.y);
    this.matrix.rotateDegrees(this.rotation);
    this.matrix.translate(-this.centerpoint.x, -this.centerpoint.y);
    this.isRotated = this.parent && this.parent.isRotated || 0 != this.rotation;
};
Element.prototype.applySize = function(a) {
    this.updateMatrix();
    if (player.showMatrixDebug) {
        if (!player.testCanvas)player.testCanvas = $("<canvas id='test' width='1000' height='1000' style='position:absolute;z-index:200;left:0px;top:0px;'></canvas>"), $("#slideframe").append(player.testCanvas), player.testContext = player.testCanvas.get(0).getContext("2d"), player.testContext.fillStyle = "rgba(255,255,0,0.5)", player.testContext.fillStyle = "rgba(0,0,0,0.5)", player.testContext.strokeStyle = "rgba(0,255,0,0.5)";
        player.testContext.save();
        this.matrix.applyContext(player.testContext);
        player.testContext.strokeStyle = "rgba(0,255,0,0.5)";
        player.testContext.strokeRect(0, 0, this.width, this.height);
        this.getAABB();
        player.testContext.restore();
    }
    a.css("left", this.x + "px");
    a.css("top", this.y + "px");
    a.css("width", this.width + "px");
    a.css("height", this.height + "px");
    if ("Layer" != this.innerType && "ExpandingLabel" != this.innerType && 0 < this.depth && (a.css("z-index", this.depth), this.parent && "ShuffleGroup" == this.parent.innerType && this.parent.ref))
        this.parent.depth =
            this.depth, this.parent.ref.css("z-index", this.depth);
    if (0 != this.rotation)
        a.css("-webkit-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-webkit-transform", "rotate(" + this.rotation + "deg)"), a.css("-moz-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-moz-transform", "rotate(" + this.rotation + "deg)"), a.css("-o-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-o-transform",
            "rotate(" + this.rotation + "deg)"), a.css("-ms-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-ms-transform", "rotate(" + this.rotation + "deg)"), this.canSimplify = !1;
};
StageItem.prototype.bindEvents = function() {
    var a = this,
        b = function(b) {
            if ("true" == a.variables._disabled || swipe.moved)return!1;
            var c = (b.pageX - a.ref.offset().left + a.xoffset) / player.currentZoom(), f = (b.pageY - a.ref.offset().top + a.yoffset) / player.currentZoom();
            a.ref.offset();
            a.ref.offset();
            swipe.parseEventCoords(b);
            b = swipe.getSlideCoords(a.slide);
            return c < a.width && f < a.height && a.isPointActive(b.x, b.y) && !a.isPointObscured(b.x, b.y) ? !0 : !1;
        },
        c = !1;
    a.bindStoryEvent("click touchstart", "ondoubleclick", function(a) {
        if (b(a)) {
            if (c)return!0;
            c = !0;
            setTimeout(function() { c = !1; }, 400);
        }
        return!1;
    });
    a.bindStoryEvent("mousedown", "onrightrelease", function(a) { return 3 == a.which; });
    a.shouldBindEvent("onpress") || a.shouldBindEvent("onrelease");
};
StageItem.prototype.unBindEvents = function() {};
StageItem.prototype.reduce = function() {
    $.each(this.children, function(a, b) { b.reduce && b.reduce(); });
    if (this.canvas)this.canvas.width = 1, this.canvas.height = 1;
};
StageItem.prototype.destroyRef = function() {
    $.each(this.children, function(a, b) { b.destroyRef && b.destroyRef(); });
    if (this.ref)this.ref.unbind(), this.ref.get(0).item = null, this.ref.get(0).id = null, removeDOMElement(this.ref), this.ref = null, this.destroyComponent("ref"), this.destroyComponent("contentRef"), this.destroyComponent("jcanvas"), this.destroyComponent("canvas"), this.destroyComponent("border"), this.dirty = !0;
    if (this.xml)this.xml = null;
    this.unloadResources();
};
StageItem.prototype.destroyComponent = function(a) { this[a] && ($(this[a]).remove(), this[a] = null); };
var removeDOMElement = function(a) {
    a.get && (a = a.get(0));
    a.parentNode && a.parentNode.removeChild(a);
};
StageItem.prototype.render = function() {
    if (this.ref)
        switch (this.innerType) {
        case "swf":
            this.ref.css("background-color", "orange"), player.addToShowQueue(this);
        case "textfield":
        case "image":
            this.content.src != Element.PixelSrc && (this.ref.css("background", "transparent url(" + escape(this.content.src) + ") no-repeat"), player.addToShowQueue(this));
        }
};
StageItem.prototype.show = function(a, b) {
    this.createRef(this.parent.ref);
    this.loadResources();
    var c = this;
    if (!this.visible || this.dirty)
        if (this.dirty = !1, !this.hiddenByLayer) {
            if (a && a.isUserInitiated)this.actionControlled = !0;
            if ("audio" != this.type) {
                c.textlib && c.textTemplate && c.content.src == Element.PixelSrc && c.textTemplate && c.renderTextTemplate();
                if (b && (0 != b.duration || "custom" == b.transition)) {
                    if (!this.ref)return;
                    this.visible = !0;
                    for (var d in this.children)this.children[d].bParentHidden && player.addToShowQueue(this.children[d]);
                    player.addToShowQueue(c);
                    c.handleEvent("ontransitionin", null, null, !1, !0);
                    c.runningTransition = b;
                    c.pendingHide = !1;
                    c.pendingShow = !0;
                    c.transitioning = !1;
                    c.justShowed = !0;
                    setTimeout(function() { c.justShowed = !1; }, 0);
                    d = b.convertToAnimation(c);
                    var e = player;
                    if (a && "TimelineEvent" == a.type)e = a.parentElement;
                    c.animated = !0;
                    d.start(c.ref, b.reverse, e, function() {
                        c.transitioning = !1;
                        if (c.ref && c.pendingShow)c.pendingHide = !1, c.pendingShow = !1, c.addWithChildrenToShowQueue();
                        c.handleEvent("ontransitionincomplete", null, null,
                            !1, !0);
                    });
                    c.transitioning = !0;
                } else c.runningTransition = null, c.pendingHide = !1, c.pendingShow = !1, this.bShowQueue = this.visible = !0, c.addWithChildrenToShowQueue(), c.handleEvent("ontransitionin", null, null, !1, !0), c.handleEvent("ontransitionincomplete", null, null, !1, !0);
                c.group && c.group.show(null, null, null, !0);
            }
            0 < c.events.length && (!c.ref.data("events") || !c.ref.data("events").mouseup && !c.ref.data("events").mousedown && !c.ref.data("events").touchstart && !c.ref.data("events").touchend) && this.bindEvents();
            this.setOnStage(!0);
            this.shuffleGroup && this.shuffleGroup.shuffle();
        }
};
StageItem.prototype.setOnStage = function(a, b) {
    this.setProperty("OnStage", (a && this.visible).toString(), b);
    $.each(this.children, function(c, d) { d.setOnStage && d.setOnStage(a, b); });
};
StageItem.prototype.quickShow = function() {
    this.visible = !0;
    if ("audio" != this.type && this.slide && this.slide == player.currentSlide() && this.ref)this.pendingShow = this.pendingHide = !1, player.addToShowQueue(this);
    this.setOnStage(!0, !0);
};
StageItem.prototype.quickHide = function() {
    this.visible = !1;
    if ("audio" != this.type && "ItemGroup" != this.type && this.slide && this.slide == player.currentSlide() && this.ref)this.ref.hide(), player.removeFromShowQueue(this), this.pendingShow = this.pendingHide = !1;
    this.setOnStage(!1, !0);
};
StageItem.prototype.hide = function(a, b) {
    if (this.visible && this.ref) {
        var c = this;
        this.visible = !1;
        if (a && a.isUserInitiated)this.actionControlled = !0;
        Animation.endForItem(this);
        if ("audio" != this.type)
            if (c.handleEvent("ontransitionout", null, null, !1, !0), b && (0 != b.duration || "custom" == b.transition)) {
                c.runningTransition = b;
                c.pendingHide = !0;
                c.pendingShow = !1;
                c.transitioning = !1;
                var d = b.convertToAnimation(c), e = player;
                if (a && "TimelineEvent" == a.type)e = a.parentElement;
                c.animated = !0;
                d.start(c.ref, b.reverse, e, function() {
                    c.transitioning =
                        !1;
                    if (c.ref && c.pendingHide)c.pendingHide = !1, c.pendingShow = !1, c.hideRefAndUnQueue();
                    c.handleEvent("ontransitionoutcomplete", null, null, !1, !0);
                });
                c.transitioning = !0;
            } else {
                c.runningTransition = null;
                if (this.ref)c.pendingHide = !1, c.pendingShow = !1, c.hideRefAndUnQueue();
                c.handleEvent("ontransitionoutcomplete", null, null, !1, !0);
            }
        this.setOnStage(!1);
        this.showOnFirstStep = !1;
        if (this.animation)this.animation.showOnFirstStep = !1;
    }
};
StageItem.prototype.addWithChildrenToShowQueue = function() {
    for (var a in this.children)this.children[a].bParentHidden && (this.children[a].shapemaskid && this.children[a].renderOnUpdate && player.addToRenderQueue(this.children[a]), player.addToShowQueue(this.children[a]));
    player.addToShowQueue(this);
};
StageItem.prototype.hideRefAndUnQueue = function() {
    for (var a in this.children)this.children[a].ref && this.children[a].ref.hide(), this.children[a].bParentHidden = !0;
    this.ref.hide();
    player.removeFromShowQueue(this);
};
StageItem.prototype.mediaReady = function() { return this && this.ref && this.ref.get(0) && 4 == this.ref.get(0).readyState ? !0 : !1; };
StageItem.prototype.shouldBindEvent = function(a) {
    if (player.showItemInfo)return!0;
    var b = this, c = !1;
    $.each(b.events, function(d, e) {
        if (e.trigger == a)c = !0;
        else {
            var f = b.parent;
            f && f.shouldBindEvent && !c && (c = f.shouldBindEvent(a));
        }
    });
    return c;
};
StageItem.prototype.bindStoryEvent = function(a, b, c) {
    if (this.shouldBindEvent(b)) {
        var d = this;
        this.ref.bind(a, function(a) {
            "onrelease" == b && player.updateItemInfo(d);
            var f = d.findDownstreamMedia();
            f && f.prep();
            var g = function(f, g) {
                    $.each(f, function(f, h) { if (h.trigger == b && (!c || "function" != typeof c || c(a)))h.act(d, !0), g = !1; });
                    return g;
                },
                f = g(d.events, !0);
            d.group && d.group.events && d.group.events.length && (f = g(d.group.events, f));
            return f;
        });
    }
};
Element.prototype.prepDownstreamMedia = function() {
    var a = this.findDownstreamMedia();
    this.firstVideoAssetSrc && Video.refStore[this.firstVideoAssetSrc] ? (Video.prepList[this.firstVideoAssetSrc] || Video.refStore[this.firstVideoAssetSrc].get(0).load(), Video.prepList[this.firstVideoAssetSrc] = !0, player.nextPreparedClipID = this.firstVideoAssetSrc) : a && a.prep && a.prep();
};
Element.prototype.findDownstreamMedia = function(a) {
    a = a || 0;
    if (!(6 < a)) {
        var b = this, c = [], d = function(d) { d && $.each(d, function(d, e) { e.findDownstreamMedia(b, c, ++a); }); };
        d(b.events);
        0 == c.length && b.timelineEvents && d(b.timelineEvents);
        0 == c.length && d(player.currentSlide().timelineEvents);
        return 0 < c.length ? c[0] : null;
    }
};
StageItem.prototype.bindVarListener = function(a) {
    for (var b = this.parseObjref(a).target, b = 0; b < this.events.length; b++) {
        var c = this.events[b];
        if ("onvarchanged" == c.trigger && c.varname == a && c.boundByItemID == this.id)return c;
    }
    c = new StoryEvent(this);
    c.trigger = "onvarchanged";
    c.varname = a;
    c.boundByItemID = this.id;
    c.filter = function(b) { return b == a; };
    b = new TimelineAction(this);
    b.type = "render_item";
    b.item = this;
    c.actions.push(b);
    this.events.push(c);
    b = this.parseObjref(a).target;
    b.registerVariableEventSubscriber(this, a);
    return c;
};
StageItem.prototype.renderTextTemplate = function() {

    function a(b, c) {
        var d = parseInt($(c).attr("data-font-size"));
        d || (d = parseInt($(c).css("font-size").replace("px", "")), $(c).attr("data-font-size", d));
        d = Math.floor(d * g);
        $(c).css("font-size", d + "px");
        $.each($(c).children(), a);
    }

    function b(b) { for (; f.get(0).clientHeight > c.textTemplateHeight;)g -= b, a(0, f); }

    var c = this, d = c.textTemplate, d = d.replace(/pt'/ig, "px'"), e = d.match(/\&(.*?);/g);
    e && $.each(e, function(a, b) {
        var e = b.replace(/\&|\$|;/g, ""), f = c.extractVariable(e);
        if (null ===
            f || "undefined" === typeof f)f = "";
        !isNaN(parseFloat(f)) && isFinite(f) && (f = Math.round(100 * parseFloat(f)) / 100);
        d = d.replace(b, f);
        c.bindVarListener(e);
    });
    if (!c.contentRef)c.contentRef = c.ref;
    c.contentRef.empty();
    var f = $(d);
    f.css("font-weight", "bold");
    if (!StageItem.contentSizer)StageItem.contentSizer = $("<div class='contentsizer'></div>"), $(document.body).append(StageItem.contentSizer);
    StageItem.contentSizer.css("width", c.textTemplateWidth);
    StageItem.contentSizer.append(f);
    var g = 1;
    b(0.05);
    1 > g && (g += 0.05, a(0, f),
        b(0.01));
    c.contentRef.append(f);
    var e = parseInt((c.width - c.textTemplateWidth) / 2) - c.xoffset, h = parseInt((c.height - c.textTemplateHeight) / 2) - c.yoffset;
    c.contentRef.css("width", c.textTemplateWidth + "px");
    c.contentRef.css("top", c.textTemplateHeight + "px");
    c.contentRef.css("left", e + "px");
    c.contentRef.css("top", h + "px");
    c.contentRef.find("p").first().css("width", c.textTemplateWidth);
    c.contentRef.find("p").first().css("height", c.textTemplateHeight);
};
StageItem.prototype.getBitMask = function() { return this.lastRenderedState && this.stateMasks && this.stateMasks[this.lastRenderedState] ? this.stateMasks[this.lastRenderedState] : this.bitMask; };
StageItem.prototype.fixRef = function() {
    if (!this.isState && this.ref.get(0).id) {
        var a = $("#" + this.ref.get(0).id);
        if (a.get(0) && this.ref.get(0) != a.get(0))this.ref = a;
    }
};
StageItem.prototype.getAABB = function() {
    var a = this, b = { left: 5E3, top: 5E3, right: -5E3, bottom: -5E3 };
    $.each([[0, 0], [this.width, 0], [this.width, this.height], [0, this.height]], function(c, d) {
        var e = a.matrix.transformPoint(d[0] - a.xoffset, d[1] - a.yoffset), f = e.x, e = e.y;
        if (f < b.left)b.left = f;
        if (f > b.right)b.right = f;
        if (e < b.top)b.top = e;
        if (e > b.bottom)b.bottom = e;
    });
    player.showDebugOverlap && player.testContext && setTimeout(function() {
        player.testContext.strokeStyle = "rgba(0,0,255,0.5)";
        player.testContext.strokeRect(b.left, b.top,
            b.right - b.left, b.bottom - b.top);
    }, 0);
    return b;
};
StageItem.prototype.getAABB_simple = function(a, b) {
    if (void 0 === a)a = this.rotation;
    if (0 == a) {
        var c = {};
        b ? (c.left = 0, c.top = 0, c.right = this.width, c.bottom = this.height) : (c.left = this.x + this.dragX, c.top = this.y + this.dragY, c.right = this.x + this.dragX + this.width, c.bottom = this.y + this.dragY + this.height);
        return c;
    }
    var c = { left: 5E3, top: 5E3, right: -5E3, bottom: -5E3 },
        d = [[-this.width / 2, -this.height / 2], [this.width / 2, -this.height / 2], [this.width / 2, this.height / 2], [-this.width / 2, this.height / 2]],
        e = Math.cos(a * Math.PI / 180),
        f = Math.sin(a *
            Math.PI / 180);
    $.each(d, function(a, b) {
        x = Math.ceil(-b[0] * e + b[1] * f);
        y = Math.ceil(b[0] * f - b[1] * e);
        if (x < c.left)c.left = x;
        if (x > c.right)c.right = x;
        if (y < c.top)c.top = y;
        if (y > c.bottom)c.bottom = y;
    });
    b ? (c.left += this.rotatexpos, c.top += this.rotateypos, c.right += this.rotatexpos, c.bottom += this.rotateypos) : (c.left += this.x + this.dragX + this.rotatexpos, c.top += this.y + this.dragY + this.rotateypos, c.right += this.x + this.dragX + this.rotatexpos, c.bottom += this.y + this.dragY + this.rotateypos);
    player.showDebugOverlap && player.testContext && setTimeout(function() {
        player.testContext.strokeStyle =
            "rgba(0,0,255,0.5)";
        player.testContext.strokeRect(c.left, c.top, c.right - c.left, c.bottom - c.top);
    }, 0);
    return c;
};
StageItem.prototype.testRotatedOverlap = function(a) {
    var b = this.getAABB(), c = a.getAABB(), d, e, f, g;
    d = BitMask.max(b.left, c.left);
    e = BitMask.min(b.right, c.right);
    f = BitMask.max(b.top, c.top);
    g = BitMask.min(b.bottom, c.bottom);
    if (b.right < c.left || b.left > c.right || b.bottom < c.top || b.top > c.bottom)return!1;
    if (player.showDebugOverlap) {
        if (!player.testCanvas)
            player.testCanvas = $("<canvas id='test' width='1000' height='1000' style='position:absolute;z-index:200;left:0px;top:0px;'></canvas>"), $("#slideframe").append(player.testCanvas),
                player.testContext = player.testCanvas.get(0).getContext("2d"), player.testContext.fillStyle = "rgba(255,255,0,0.5)";
        player.testCanvas.show();
        clearTimeout(player.testCanvasClear);
        player.testCanvasClear = setTimeout(function() { player.testCanvas.hide(); }, 1E3);
        if (!player.showDebugOverlapPersistent)
            player.testContext.clearRect(0, 0, 1E3, 1E3), player.testContext.fillStyle = "rgba(0,255,255,0.2)", player.testContext.fillRect(b.left, b.top, b.right - b.left, b.bottom - b.top), player.testContext.fillStyle = "rgba(0,0,255,0.2)",
                player.testContext.fillRect(c.left, c.top, c.right - c.left, c.bottom - c.top), player.testContext.strokeStyle = "rgba(255,0,255,0.8)", player.testContext.strokeRect(d, f, e - d, g - f);
    }
    b = e - d;
    g = b * (g - f);
    for (c = 0; c < g; c += 64) {
        e = d + c % b;
        var h = f + Math.floor(c / b);
        if (player.showDebugOverlap)
            this.isPointActive(e, h) ? a.isPointActive(e, h) ? a.isPointObscured(e, h, this, function(a) { return a.dropArea; }) ? (player.testContext.fillStyle = "rgba(255,0,0,0.9)", player.testContext.fillRect(e - 1, h - 1, 2, 2)) : (player.testContext.fillStyle = "rgba(0,255,0,0.9)",
                player.testContext.fillRect(e - 2, h - 2, 4, 4)) : (player.testContext.fillStyle = "rgba(255,255,0,0.9)", player.testContext.fillRect(e - 1, h - 1, 2, 2)) : (player.testContext.fillStyle = a.isPointActive(e, h) ? "rgba(0,0,0,0.5)" : "rgba(100,100,100,0.2)", player.testContext.fillRect(e - 1, h - 1, 2, 2));
        if (this.isPointActive(e, h) && a.isPointActive(e, h) && !a.isPointObscured(e, h, this, function(a) { return a.dropArea; }))return!0;
    }
    return!1;
};
var Layer = function(a, b) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.timelineEvents = [];
    this.clips = [];
    this.currentIndex = this.currentTime = 0;
    this.duration = 10;
    this.active = !0;
    this.slide = b;
    this.layer = null;
    this.parent = b;
    this.paused = this.viewed = !1;
};
Layer.prototype = new StageItem;
Layer.prototype.objectType = "Layer";
Layer.prototype.innerType = "Layer";
Layer.prototype.getItemIndex = function() {
    var a = this, b = 0, c = -1;
    if (this.itemIndex)return this.itemIndex;
    $.each(this.slide.children, function(d, e) { "Layer" == e.innerType && (e == a && (c = b), b++); });
    return this.itemIndex = c;
};
Layer.prototype.restoreFromResumeData = function(a) {
    var b = [];
    this.deepEach(function(a, c) { c.resume && "ShuffleGroup" != c.innerType && b.push(c); });
    a = (new bwChunk(a)).NextChunk();
    this.currentTime = bwChunk.BaseNto10(a.Data(), a.Length());
    for (var a = a.NextChunk(), c = new bwChunk(a.Data()), d = 0; !c.isNothing;) {
        var e = b[d];
        e && e.restoreFromResumeData(c.ChunkData());
        c = c.NextChunk();
        d++;
    }
    var f = a.NextChunk().NextChunk().NextChunk().Data();
    this.clips.forEach(function(a) {
        if ("audio" == a.innerType) {
            var b = new bwChunk(f);
            a.SetResumeData(b.Data());
            f = b.Remainder();
        }
    });
};
Layer.prototype.getResumeData = function() {
    var a = "";
    if (this.resume && this.viewed) {
        var b = "", c = "";
        this.deepEach(function(a, c) { c.resume && "ShuffleGroup" != c.innerType && (b += bwChunk.CreateChunk(c.GetResumeData())); });
        this.clips.forEach(function(a) { "audio" == a.innerType && (c += bwChunk.CreateChunk(a.GetResumeData())); });
        var a = a + bwChunk.EMPTY_CHUNK, d = bwChunk.Base10toN(this.currentTime), a = a + bwChunk.CreateChunk(d), a = a + bwChunk.CreateChunk(b), a = a + bwChunk.EMPTY_CHUNK, a = a + bwChunk.EMPTY_CHUNK, a = a + bwChunk.CreateChunk(c);
    }
    return a;
};
Layer.prototype.toBaseData = Element.prototype.toData;
Layer.prototype.toData = function() {
    var a = this.toBaseData();
    a.currentTime = this.currentTime;
    return a;
};
Layer.prototype.updateBaseFromData = Element.prototype.updateFromData;
Layer.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    this.currentTime = a.currentTime;
};
Layer.prototype.loadFromXML = function(a) {
    var b = this;
    this.id = $(a).attr("id");
    this.modal = "true" == $(a).attr("modal");
    this.resume = "true" == $(a).attr("resume");
    this.pauseparent = "true" == $(a).attr("pauseparent");
    this.depth = parseInt($(a).attr("depth"));
    this.hideobjectsondisplay = $(a).children("hideobjectsondisplay").children();
    this.loadChildrenFromXML(a, b.slide, b, function(a) { a.canSimplify = !1; });
    $(a).children("audiolib").children("audio").each(function(a, d) {
        var e = new Audio;
        e.loadFromXML(d, b.slide, b);
        e.createRef();
        b.children[e.id] = e;
    });
    $(a).find("timeline").each(function(a, d) {
        b.duration = $(d).attr("duration");
        $(d).find("event").each(function(a, c) {
            var d = new TimelineEvent(b);
            d.loadFromXML(c);
            b.timelineEvents.push(d);
        });
    });
    $(a).children("background").each(function(a, d) {
        b.background = new Background(b.ref);
        b.background.loadFromXML(d);
        if (!b.background.src)b.backgroundReady = !0;
        b.ref && b.background.apply(b.ref);
    });
    this.loadElementInfoFromXML(a);
    this.depth = ++this.slide.topZ;
    this.type = "layer";
};
Layer.prototype.resetBase = Element.prototype.reset;
Layer.prototype.reset = function(a) {
    if (this.resume)player.useCompactResume && this.compactResumeData ? this.restoreFromResumeData(this.compactResumeData) : this.resumeData && this.updateFromData(this.resumeData);
    else {
        this.resetBase();
        if (!a)this.visible = !1, this.ref && this.ref.hide();
        $.each(this.children, function(a, c) { c.hide && c.hide(); });
    }
};
Layer.prototype.createBaseRef = StageItem.prototype.createRef;
Layer.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
Layer.prototype.createRef = function() {
    if (this.ref || !this.createBaseRef())return!1;
    this.ref.removeClass("item");
    this.ref.addClass("layer");
    this.background && this.background.apply(this.ref);
    this.ref.css("display", "none");
    return!0;
};
Layer.prototype.show = function(a) {
    this.createRef(this.parent.ref);
    var b = this;
    $(".currentlayer").removeClass("currentlayer");
    this.ref.addClass("currentlayer");
    this.viewed = !0;
    var c = this.ref;
    if (a && 0 != a.duration) {
        var d = this.visible;
        c.css("display", "block");
        a.setTarget(this);
        b.transitioning = !0;
        a.apply(function() {
            b.transitioning = !1;
            d || (b.handleEvent("ontransitionincomplete", null, null, !1, !0), b.handleSlideStart());
        }, null, null, "ease-out");
        d || (b.handleEvent("ontransitionin", null, null, !1, !0), b.setOnStage(!0));
    } else
        b.runningTransition =
            null, c.css("display", "block"), this.visible || (b.handleEvent("ontransitionin", null, null, !1, !0), b.handleEvent("ontransitionincomplete", null, null, !1, !0), b.handleSlideStart(), b.setOnStage(!0));
    this.pauseparent && this.slide == player.currentSlide() && player.pause(!0);
    player.modalLayer = null;
    if (this.modal) {
        if (!this.modalfence)this.modalfence = $("<div class='modalfence'></div>"), this.parent.ref.append(this.modalfence), this.modalfence.bind("click", function() {});
        player.modalLayer = b;
        this.modalfence.show();
    }
    a = b.slide.topMostLayer();
    a != b && a.handleEvent("endtopmostlayer");
    util.popArrayElement(this.slide.layerStack, this);
    this.slide.layerStack.push(this);
    this.handleEvent("ontopmostlayer");
    b.hideBaseObjects();
    this.depth = this.slide.topZ + 1;
    this.slide.topZ = this.depth;
    if (this.visible && this.resume)this.ref.css("display", "block");
    else {
        if (!this.visible)this.currentIndex = this.currentTime = 0;
        if (this.resume && this.compactResumeData && (this.restoreFromResumeData(this.compactResumeData), player.activeTimeline == this))
            player.activeTimeline.currentTime =
                this.currentTime;
        this.visible = !0;
        this.paused = !1;
    }
};
Layer.prototype.emptyLayer = function() { this.timelineEvents = []; };
Layer.prototype.hide = function(a) {
    if (this.visible) {
        this.visible = !1;
        player.modalLayer = null;
        var b = this,
            c = function() {
                b.ref.css("display", "none");
                b.handleEvent("ontransitionoutcomplete", null, null, !1, !0);
                $.each(b.clips, function(a, b) {
                    if (b.getIsPlaying())b.m_bResumeOnSeek = !0;
                    b.pauseClip();
                });
                b.modalfence && b.modalfence.hide();
                b.destroyWebobjects();
                b.resume ? b.compactResumeData = b.getResumeData() : b.reset();
                b.slide.topMostLayer() == b && b.handleEvent("endtopmostlayer");
                util.popArrayElement(b.slide.layerStack, b);
                0 <
                    b.slide.layerStack.length ? b.slide.layerStack[b.slide.layerStack.length - 1].handleEvent("ontopmostlayer") : (b.slide.handleEvent("ontopmostlayer"), player.activeTimeline = player);
                b.setOnStage(!1);
                b.restoreBaseObjects();
                b.pauseparent && player.play(!0, !0, !1);
            };
        b.handleEvent("ontransitionout", null, null, !1, !0);
        a && 0 != a.duration ? (a.setTarget(this), a.apply(function() { c(); }, null, null, "ease-out")) : (b.runningTransition = null, c());
    }
};
Layer.prototype.hideBaseObjects = function() {
    var a = this;
    this.hideobjectsondisplay.each(function(b, c) {
        var d = a.parseObjref($(c).attr("value")).target;
        d.hiddenByLayer = !0;
        d.hide();
    });
};
Layer.prototype.restoreBaseObjects = function() {
    var a = this;
    this.hideobjectsondisplay.each(function(b, c) {
        var d = a.parseObjref($(c).attr("value")).target;
        if (d.hiddenByLayer)d.hiddenByLayer = !1, d.show();
    });
};
Layer.prototype.destroyWebobjects = function() { $.each(this.children, function(a, b) { b.destroyWebobjects && b.destroyWebobjects(); }); };
Layer.prototype.play = function(a, b, c) {
    this.paused = !1;
    var d = this;
    c || player.currentSlide().clips.forEach(function(a) { if (a.m_bResumeOnSeek && a.layer == d && (player.currentClipStartTime = a.lastStartTime, player.currentClipSyncToTimeline = !0, player.currentClip = a, a.playClip()))a.m_bResumeOnSeek = !1; });
    $(".controlbar-button").find(".wait").hide();
    $(".controlbar-button").find(".play").hide();
    $(".controlbar-button").find(".pause").show();
};
Layer.prototype.pause = function() {
    this.paused = !0;
    $.each(this.clips, function(a, b) {
        if (b.syncToTimeline) {
            if (b.getIsPlaying())b.m_bResumeOnSeek = !0;
            b.pauseClip();
            if (player.scheduledMediaSrc == b.content.src)clearTimeout(player.mediaTimeout), player.scheduledMediaSrc = null;
        }
    });
    $(".controlbar-button").find(".wait").hide();
    $(".controlbar-button").find(".pause").hide();
    $(".controlbar-button").find(".play").show();
};
Layer.prototype.update = function() {
    if (!(this.currentTime > parseInt(this.duration) + 100)) {
        if (ProgressBar.getCurrentProgressBar().dragging && player.currentClip)player.currentClip.currentTime = (player.activeTimeline.currentTime - player.currentClipStartTime) / 1E3;
        if (player.activeTimeline == this)
            ProgressBar.getCurrentProgressBar().index = player.activeTimeline.currentTime, ProgressBar.getCurrentProgressBar().count = player.activeTimeline.duration, ProgressBar.getCurrentProgressBar().update(), this.paused ? ($(".controlbar-button").find(".wait").hide(),
                $(".controlbar-button").find(".pause").hide(), $(".controlbar-button").find(".play").show()) : ($(".controlbar-button").find(".wait").hide(), $(".controlbar-button").find(".play").hide(), $(".controlbar-button").find(".pause").show());
        $.each(this.clips, function(a, b) { b.getIsPlaying && b.getIsPlaying(); });
        for (player.layerPlaying = !0; 0 < this.currentIndex && this.timelineEvents[this.currentIndex - 1].time > this.currentTime;)this.currentIndex--, this.timelineEvents[this.currentIndex].revert(this.currentTime);
        for (; this.currentIndex <
            this.timelineEvents.length && this.timelineEvents[this.currentIndex].time <= this.currentTime && player.layerPlaying;)this.timelineEvents[this.currentIndex].act(), this.currentIndex++;
        if (this.currentTime >= this.duration)this.handleEvent("ontimelinecomplete", null, null, !1, !0) && player.currentTime >= player.currentSlide().duration && this.handleEvent("onallopentimelinescomplete"), player.layerPlaying = !1;
    }
};
Layer.prototype.handleSlideStart = function() { if (!this.handledSlideStart)this.handledSlideStart = !0, this.handleEvent("onslidestart", null, null, !1, !0), this.deepEach(function(a, b) { b.handleEvent && b.handleEvent("onslidestart", null, null, !1, !0); }); };
var VectorShape = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "textfield";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.deferredResourceIndex = 0;
    this.lastRenderedState = "none";
    this.canvas = null;
    this.m_nYOffset = this.m_nXOffset = 0;
    this.height = this.width = 1E3;
    this.vectorHot = !1;
};
VectorShape.prototype = new StageItem;
VectorShape.prototype.objectType = "Item";
VectorShape.prototype.innerType = "vectorshape";
VectorShape.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
VectorShape.prototype.loadFromXML = function(a, b, c) {
    var d = this;
    this.loadBaseFromXML(a, b, c);
    this.yoffset = this.xoffset = 0;
    this.originalWidth = parseInt($(a).attr("width"));
    this.originalHeight = parseInt($(a).attr("height"));
    this.originalX = this.x;
    this.originalY = this.y;
    if (0 < $(a).children("data").children("textdata").children("vartext").length)this.textlib = $(a).children("data");
    this.canSimplify = !1;
    $(a).children("states").children().each(function(a, b) {
        var c = $(b).attr("name"),
            h = $(b).children("data").children("vectordata"),
            j = { left: h.attr("left"), top: h.attr("top"), right: h.attr("right"), bottom: h.attr("bottom"), path: PathLib.getPathFromXML(h.children("pr")), index: a };
        if (!j.path || "" == j.path)j.path = h.children("path").text();
        d.states[c] = j;
    });
    this.loadLinksFromXML(a);
};
VectorShape.prototype.loadLinksFromXML = function(a) {
    var b = this;
    $(a).children("textlib").children("textdata").each(function(a, d) {
        var e = $(d).attr("id");
        $(d).children("linkdata").children("link").each(function(a, c) {
            var d = new LinkArea(b.ref, b.slide, b.layer, e);
            d.parent = b;
            d.loadFromXML(c, b.slide, b.layer);
            b.links[d.id] = d;
            b.hasLinks = !0;
        });
    });
};
VectorShape.prototype.createBaseRef = StageItem.prototype.createRef;
VectorShape.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
VectorShape.prototype.createRef = function() {
    if (this.ref || !this.createBaseRef())return!1;
    if (!this.contentRef)this.contentRef = $('<div class="item unhideable vartext"></div>');
    this.ref.append(this.contentRef);
    this.ref.css("width", this.originalWidth);
    this.ref.css("height", this.originalHeight);
    var a = $(this.xml).find("textdata").first().attr("valign");
    a && this.contentRef.addClass("v" + a);
    a = $('<canvas class="content" width="' + this.originalWidth + '" height="' + this.originalHeight + '"></canvas>');
    a.css("position",
        "absolute");
    this.ref.append(a);
    this.jcanvas = a;
    this.canvas = a.get(0);
    this.context = this.canvas.getContext("2d");
    if (this.renderAsBackground)this.altRef = $('<div class="item unhideable alternate"></div>'), this.altRef.css("width", this.originalWidth), this.altRef.css("height", this.originalHeight), this.ref.append(this.altRef);
    this.lastRenderedState = null;
    this.render(this.variables.ObjectState, !0, null, "VectorShape createRef");
    return!0;
};
VectorShape.prototype.destroyRef = function() {
    this.destroyBaseRef();
    if (this.canvas)$(this.canvas).remove(), this.canvas = null;
    if (this.contentRef)this.contentRef.remove(), this.contentRef = null;
    this.bitMask = this.lastRenderedState = null;
    this.stateMasks = {};
};
VectorShape.prototype.renderCallback = function() {};
VectorShape.prototype.render = function(a, b, c, d, e, f) {
    if (this.ref) {
        var g = this;
        if (b || a != this.lastRenderedState)
            if (this.lastRenderedState = a, g.allResourcesLoaded()) {
                g.blocked = !1;
                if (!g.canvas)g.canvas = $(this.ref).find("canvas").get(0);
                if (player.useSafeCanvas)this.canvas.getContext("2d"), this.ref.css("background-color", "#" + parseInt(900 * Math.random() + 1100) % 1E3);
                else {
                    g.m_nXOffset = g.xoffset;
                    g.m_nYOffset = g.yoffset;
                    g.width = g.width;
                    g.height = g.height;
                    b = new ppTextLib(g.xml);
                    c = g.content.path;
                    if (g.states[a])
                        c = g.states[a].path,
                            g.rectShape = new ppRect(g.states[a].left, g.states[a].top, g.states[a].right, g.states[a].bottom);
                    else if (this.originalRectShape)this.rectShape = this.originalRectShape;
                    if (g.rectShape && 0 == g.rectShape.right && 0 == g.rectShape.bottom)g.rectShape.right = g.width, g.rectShape.bottom = g.height;
                    if (c)
                        try {
                            var h = new Date;
                            ppArt.itemID = g.id;
                            ppArt.item = g;
                            ppArt.DrawVector(g, c, b, player.fontlib, g.imagelib, f);
                            for (var j in g.links)g.links[j].linkdx = ppArt.m_listTextOffsets[g.links[j].textid].x, g.links[j].linkdy = ppArt.m_listTextOffsets[g.links[j].textid].y;
                            g.textOffset && (g.m_nXOffset += g.textOffset.x, g.m_nYOffset += g.textOffset.y);
                            if (g.m_nXOffset != g.xoffset || g.m_nYOffset != g.yoffset) {
                                var k = g.m_nXOffset - g.xoffset, l = g.m_nYOffset - g.yoffset;
                                g.xoffset = g.m_nXOffset;
                                g.yoffset = g.m_nYOffset;
                                this.x += k;
                                this.y += l;
                                g.applySize(g.ref);
                            }
                            parseInt(new Date - h);
                            if (a && !g.stateMasks)g.stateMasks = {};
                            f = function() {
                                if (player.usePixelTesting)return new BitMask(!0, g.width, g.height);
                                var a = new BitMask(!1, g.width, g.height, g.imageWidth || g.width, g.imageHeight || g.height);
                                if (!g.content.mask &&
                                    g.content.maskref)g.content.mask = player.bitmasks[g.content.maskref];
                                if (g.content.mask)a.loadFromRLE(g.content.mask), a.pixels && !a.isOpaque && (g.width != $(g.canvas).attr("width") || g.height != $(g.canvas).attr("height")) && a.resize($(g.canvas).attr("width"), $(g.canvas).attr("height"), -g.xoffset, -g.yoffset);
                                else if (-1 < g.content.src.indexOf(".jpg"))a.isOpaque = !0;
                                else if (player.isLocalFileSystem && g.imagelib)a.isOpaque = !0;
                                else {
                                    a = new BitMask(!1, $(g.canvas).attr("width"), $(g.canvas).attr("height"));
                                    if (!g.context)
                                        g.context =
                                            g.canvas.getContext("2d");
                                    a.loadFromContext(g.context);
                                }
                                return a;
                            };
                            if (a && !g.stateMasks[a])g.stateMasks[a] = f();
                            else if (!g.bitMask || g.bitMask.isOpaque)g.bitMask = f();
                        } catch (m) {
                            g.ref && g.ref.addClass("failedcanvas");
                        }
                    g.renderForeground && g.renderForeground();
                    g.updateDragPosition && g.dragging && g.updateDragPosition();
                }
            } else g.blocked = !0;
    }
};
VectorShape.prototype.renderForeground = function() {
    if (this.textlib) {
        this.ref.addClass("textlib");
        var a = this.textlib.children("textdata").children("vartext").first().text();
        !a && this.textlib.children("textdata").attr("lmstext") && (a = this.textlib.children("textdata").attr("lmstext"), a = "<span>" + a + "</span>");
        if (a)a = a.replace(/size='(.*?)(pt|)'/ig, "style='font-size:$1pt'"), this.textTemplate = a = a.replace(/pt'/ig, "px'"), this.renderTextTemplate();
    } else if (this.hasImagelib) {
        if (!this.image)
            this.image = new Image,
                this.image.src = this.content.src;
        this.ref.css("background", "url(" + escape(this.image.src) + ")");
        this.ref.removeClass("failedcanvas");
    }
};
var Audio = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "audio";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.isMedia = !0;
    this.playOnDecode = this.decodeOnLoad = this.decoding = this.isDecoded = !1;
    this.xml = "";
};
Audio.prototype = new StageItem;
Audio.prototype.objectType = "Item";
Audio.prototype.innerType = "audio";
Audio.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
Audio.prototype.GetResumeData = function() {
    var a = "";
    if (this.slide.resume) {
        a = 0;
        this.syncToTimeline && (a += 1);
        this.playing && (a += 2);
        if (this.playing || this.m_bResumeOnSeek)a += 4;
        a = a.toString();
    }
    return a;
};
Audio.prototype.SetResumeData = function(a) { if (0 < a.length)a = parseInt(a, 10), this.syncToTimeline = 0 < (a & 1), this.m_bResumeOnSeek = 0 < (a & 4); };
Audio.prototype.loadFromXML = function(a, b, c) {
    this.parent = c ? c : b;
    this.slide = b;
    this.layer = c;
    this.children = {};
    this.id = $(a).attr("id");
    this.xml = a;
    this.loadElementInfoFromXML(a);
    this.content.src = player.basepath + $(a).attr("url");
    this.content.duration = parseInt($(a).attr("duration"));
    b && b.clips && b.clips.push && b.clips.push(this);
    if (c && c.clips && c.clips.push)c.clips.push(this), this.layered = !0;
    if (!this.resource)this.resource = this.createResource(this.slide, this.content.src);
};
Audio.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = this;
    this.container = $(document.body);
    this.ref = $('<audio preload="auto"><source src="' + a.content.src + '"/></audio>');
    this.ref.attr("src", a.content.src);
    this.container.append(this.ref);
    this.ref.get(0).item = this;
    this.ref.bind("canplay", function() { if (player.blocked)player.currentSlide().currentIndex += 1, a.canPlayThrough = !0, player.unblock(); });
    this.ref.bind("timeupdate", function() {
        if (4 == a.ref.get(0).readyState && player.blocked)
            player.currentSlide().currentIndex +=
                1, a.canPlayThrough = !0, player.unblock();
    });
    this.ref.bind("error", function() {
        a.canPlayThrough = !0;
        player.unblock();
    });
    this.ref.bind("ended", function() { (a.slide == player.currentSlide() || a.slide == player.currentWindowSlide) && a.handleEvent("onmediacomplete"); });
    this.ref.bind("play", function() {
        if (!isNaN(a.correctedPosition) && a.shouldSetPosition)
            try {
                a.setCurrentTime(a.correctedPosition), a.shouldSetPosition = !1;
            } catch (b) {
            }
    });
    return!0;
};
Audio.prototype.destroyRef = function() {};
Audio.prototype.renderCallback = function() {};
Audio.prototype.render = function() {};
Audio.prototype.reset = function(a, b) {
    this.currentTime = 0;
    Element.prototype.reset.call(this, a, b);
};
Audio.prototype.prep = function() {
    if (player.isIOS) {
        var a = this;
        if (this.id != player.nextPreparedClipID) {
            var b = !1;
            $("audio, video").each(function(c, d) { !d.paused && !d.ended && (d.item.slide != a.slide ? d.pause() : b = !0); });
            if (!b)this.ref.get(0).load(), this.prepared = !0, player.nextPreparedClipID = this.id;
        }
    }
};
Audio.prototype.getTimelineAncestor = function() {
    for (var a = this.parent, b = 4; a && 0 < b--;) {
        if ("Layer" == a.innerType || "Slide" == a.innerType)return a;
        a = this.parent;
    }
    return this.slide;
};
Audio.prototype.playClip = function() {
    if (this.ref && this.ref.get && this.ref.get(0) && this.ref.get(0).play) {
        var a = this.layer ? this.layer : player.activeTimeline;
        if (!isNaN(player.currentClipStartTime) && (!isNaN(this.lastStartTime) && this.m_bResumeOnSeek && this.syncToTimeline || player.currentClipSyncToTimeline && player.currentClip == this))this.currentTime = (a.currentTime - player.currentClipStartTime) / 1E3;
        if (0 > this.currentTime || 1E3 * this.currentTime >= this.content.duration)return!1;
        this.syncToTimeline = !(StoryEvent.currentEvent &&
            StoryEvent.currentEvent.isUserInitiated) || player.currentClipSyncToTimeline && player.currentClip == this;
        this.lastStartTime = isNaN(player.currentClipStartTime) ? player.activeTimeline.currentTime : player.currentClipStartTime;
        if ((a = this.ref.get(0)) && a.play) {
            if (this.currentTime != a.currentTime)
                try {
                    a.currentTime = this.currentTime;
                } catch (b) {
                }
            a.play();
        }
    }
};
Audio.prototype.pauseClip = function(a) {
    if (this.ref && this.ref.get && this.ref.get(0) && this.ref.get(0).pause) {
        var b = this.ref.get(0), c = !b.ended && !b.paused;
        b && b.pause && b.pause();
        c && a && this.handleEvent("onmediacomplete");
    }
};
Audio.prototype.setCurrentTime = function(a) { if (this.ref && this.ref.get && this.ref.get(0))this.ref.get(0).currentTime = a; };
Audio.prototype.getScheduled = function() { return this.ref && this.ref.get && this.ref.get(0) ? this.ref.get(0).scheduled : !1; };
Audio.prototype.setScheduled = function(a) { if (this.ref && this.ref.get && this.ref.get(0))this.ref.get(0).scheduled = a; };
Audio.prototype.getClip = function() { return this.ref && this.ref.get && this.ref.get(0) ? this.ref.get(0) : null; };
Audio.prototype.getIsPlaying = function() { return this.ref && this.ref.get && this.ref.get(0) ? !this.ref.get(0).paused && !this.ref.get(0).ended : !1; };
var Video = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.storedRef = this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "video";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.isMedia = !0;
    this.xml = "";
};
Video.refStore = {};
Video.prepList = {};
Video.prototype = new StageItem;
Video.prototype.objectType = "Item";
Video.prototype.innerType = "video";
Video.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
Video.prototype.loadFromXML = function(a, b, c) {
    this.slide = b;
    this.layer = c;
    this.children = {};
    this.innerType = this.type = "video";
    this.id = $(a).attr("id");
    this.xml = a;
    this.loadElementInfoFromXML(a);
    this.loadSizeFromXML(a);
    this.canSimplify = !1;
    this.content.src = player.basepath + $(a).find("videodata").attr("url");
    this.content.autoplay = "true" == $(a).attr("autoplay");
    this.content.showcontrols = "true" == $(a).attr("showcontrols");
    this.content.autorewind = "true" == $(a).attr("autorewind");
    this.content.loop = "true" == $(a).attr("loop");
    this.content.captureanimation = "true" == $(a).attr("captureanimation");
    this.content.poster = player.basepath + $(a).find("videodata").attr("poster");
    this.content.hasPoster = "" != $(a).find("videodata").attr("poster");
    this.content.type = $(a).find("videodata").attr("type");
    this.isUnsupportedType = "youtube" == this.content.type;
    this.usehandcursor = "true" == $(a).attr("usehandcursor");
    this.content.src = this.content.src.replace(".flv", ".mp4");
    this.showPlaceholder = -1 < this.content.src.indexOf(".swf");
    if (this.directParent &&
        "Layer" == this.directParent.innerType)c = this.directParent;
    b && b.clips && b.clips.push && b.clips.push(this);
    if (c && c.clips && c.clips.push)c.clips.push(this), this.layered = !0;
    if (!this.resource)this.resource = this.createResource(this.slide, this.content.src);
    this.canSimplify = !1;
};
Video.prototype.createBaseRef = StageItem.prototype.createRef;
Video.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
Video.prototype.createRef = function() {
    if (this.parent.ref)this.container = this.parent.ref;
    else return this.parent.createRef(), !1;
    if (this.ref)return!1;
    var a = this, b = Video.getStoreReference(this.slide, this.content.src), c = Video.refStore[b];
    if (c) {
        if (this.ref = c, this.refInitialized || this.ref.hasClass("initialized"))return this.container.append(this.ref), !1;
    } else this.ref = $('<video class="item"><source src="' + a.content.src + '"/></video>'), this.ref.attr("src", a.content.src);
    this.ref.addClass(this.type);
    this.ref.addClass("initialized");
    this.content.showcontrols && this.ref.attr("controls", "controls");
    this.content.hasPoster && (player.isChrome || this.ref.attr("poster", this.content.poster));
    if (player.noVideo || this.showPlaceholder || this.isUnsupportedType) {
        if (!this.content.hasPoster)this.ref = $('<div class="item video unsupported"><h1>Not Supported</h1>Flash content is not supported in the HTML5 player.</div>'), this.ref.addClass(this.type);
        this.ref.css("width", this.width + "px");
        this.ref.css("height", this.height + "px");
        this.ref.get(0).play =
            function() {
                if (player.blockedOn == a) {
                    var b = player.blocked && !a.justPlayed;
                    player.unblock(!0);
                    b && a.handleEvent("onmediacomplete");
                    player.playing = !0;
                    player.activeTimeline.play(!1, !1, !0);
                }
                if (!a.justPlayed)a.justPlayed = !0, setTimeout(function() { a.justPlayed = !1; }, 100);
            };
        this.ref.get(0).load = function() {};
        this.ref.get(0).pause = function() {};
    }
    if (this.content.captureanimation && (player.suppressCaptureAnimations || player.isIOS))
        a.isSuppressedCaptureAnimation = !0, this.ref = $('<div class="item video captureanimation"></div>'),
            this.ref.css("width", this.width + "px"), this.ref.css("height", this.height + "px"), this.ref.get(0).play = function() {
                player.unblock(!0);
                a.handleEvent("onmediacomplete");
            }, this.ref.get(0).load = function() {}, this.ref.get(0).pause = function() {}, this.ref.get(0).src = "[captureanimation: no source]";
    this.applySize(this.ref);
    this.container.append(this.ref);
    this.ref.get(0).item = this;
    this.ref.bind("canplay", function() {
        a.canPlayThrough = !0;
        player.unblock();
    });
    this.ref.bind("timeupdate", function() {
        if (4 == a.ref.get(0).readyState)
            a.canPlayThrough =
                !0, player.unblock();
    });
    this.ref.bind("error", function() {
        a.canPlayThrough = !0;
        player.unblock();
    });
    this.ref.bind("ended", function() { a.handleEvent("onmediacomplete"); });
    this.ref.bind("play", function() {
        var c = a.prepared;
        a.canPlayThrough = !0;
        a.prepared = !0;
        a.controllableFromTimeline = !0;
        player.nextPreparedClipID = a.getFullObjref();
        Video.prepList[b] = !0;
        a.content.showcontrols || a.ref.removeAttr("controls");
        if (!isNaN(a.correctedPosition) && a.shouldSetPosition)
            try {
                a.setCurrentTime(a.correctedPosition), a.shouldSetPosition =
                    !1;
            } catch (e) {
            }
        if (!a.playingFromPlayClip && player.activeTimeline.paused && player.isIOS && !c && a.content.autoplay && (player.activeTimeline.play(), player.activeTimeline.paused = !1, player.activeTimeline.playing = !0, !c))player.activeTimeline.currentTime = 0;
    });
    return this.refInitialized = !0;
};
Video.prototype.destroyRef = function() {
    this.pauseClip();
    var a = Video.getStoreReference(this.slide, this.content.src);
    if (this.ref && this.ref.get && this.ref.get(0) && !Video.refStore[a])Video.refStore[a] = this.ref, this.ref.hide(), this.ref.remove();
    this.ref = null;
};
Video.prototype.renderCallback = function() {};
Video.prototype.render = function() {};
Video.prototype.showBase = StageItem.prototype.show;
Video.prototype.show = function(a, b, c) {
    var d = this;
    this.showBase(a, b, c);
    if (!player.noVideo && (this.container && !this.content.autoplay && 0 == this.ref.parent().length && (player.isIOS ? "block" == this.container.css("display") && (this.container.append(this.ref), this.ref.show()) : (this.container.append(this.ref), this.ref.show())), !c))
        if (this.showPlaceholder)this.handleEvent("onmediacomplete");
        else {
            var e = this;
            if (e.content.autoplay || !(a && "StoryEvent" != a.type))
                if (player.playing || player.layerPlaying) {
                    var f = e.getTimelineAncestor().currentTime -
                        a.time;
                    if (e.ref && e.ref.get && e.ref.get(0)) {
                        var g = e.ref.get(0);
                        this.isSuppressedCaptureAnimation ? e.playClip() : (b = StoryEvent.currentEvent && StoryEvent.currentEvent.isUserInitiated, this.syncToTimeline = StoryEvent.currentEvent && "TimelineEvent" == StoryEvent.currentEvent.type && (!b || player.currentClipSyncToTimeline && player.currentClip == this), this.lastStartTime = isNaN(player.currentClipStartTime) ? player.activeTimeline.currentTime : player.currentClipStartTime, clearTimeout(player.mediaTimeout), player.scheduledMediaSrc =
                            d.content.src, this.scheduled = !0, player.mediaTimeout = setTimeout(function() {
                            player.mediaTimeout = null;
                            player.scheduledMediaSrc = null;
                            d.scheduled = !1;
                            e.playClip();
                            player.currentClip = g;
                            player.currentClipStartTime = a.time;
                            player.currentClipSyncToTimeline = "TimelineEvent" == a.type;
                            try {
                                e.setCurrentTime(f / 1E3);
                            } catch (b) {
                            }
                        }, 0));
                    }
                }
        }
};
Video.prototype.prep = function() {
    var a = Video.getStoreReference(this.slide, this.content.src);
    if (player.isIOS && player.nextPreparedClipID != this.getFullObjref() && player.nextPreparedClipID != a && !Video.prepList[a] && this.ref && this.ref.get && this.ref.get(0))this.ref.get(0).load(), this.prepared = !0, player.nextPreparedClipID = a, Video.prepList[this.firstVideoAssetSrc] = !0;
};
Video.prototype.getTimelineAncestor = Audio.prototype.getTimelineAncestor;
Video.prototype.playClip = function() {
    var a = this;
    if (this.ref && this.ref.get && this.ref.get(0) && this.ref.get(0).play) {
        0 == this.ref.parent().length && (this.container.append(this.ref), this.ref.show());
        var b = Video.getStoreReference(this.slide, this.content.src);
        player.isIOS && player.nextPreparedClipID != this.getFullObjref() && player.nextPreparedClipID != b && !Video.prepList[b] ? (this.ref.get(0).setAttribute("controls", "controls"), Animation.finishForTimeline(a.slide, a.slide.currentTime), player.activeTimeline.pause(!0,
            !1), setTimeout(function() {
            a.ref.get(0).setAttribute("controls", "controls");
            player.unblock();
        }, 0)) : (player.isIOS && player.unblock(), a.content.showcontrols || a.ref.removeAttr("controls"), this.controllableFromTimeline = this.playingFromPlayClip = !0, this.ref.get(0).play(), setTimeout(function() { a.playingFromPlayClip = !1; }, 0));
    }
};
Video.prototype.pauseClip = function() {
    var a = this;
    if (this.ref && this.ref.get && this.ref.get(0) && this.ref.get(0).pause)this.pausingFromPauseClip = !0, this.ref.get(0).pause(), setTimeout(function() { a.pausingFromPauseClip = !1; }, 0);
};
Video.prototype.getCurrentTime = function() { return this.ref && this.ref.get && this.ref.get(0) ? this.ref.get(0).currentTime : 0; };
Video.prototype.setCurrentTime = function(a) { if (this.ref && this.ref.get && this.ref.get(0))this.ref.get(0).currentTime = a; };
Video.prototype.getScheduled = function() { return this.ref && this.ref.get && this.ref.get(0) ? this.ref.get(0).scheduled : !1; };
Video.prototype.setScheduled = function(a) { if (this.ref && this.ref.get && this.ref.get(0))this.ref.get(0).scheduled = a; };
Video.prototype.mediaReady = function() { return this && this.ref && this.ref.get(0) && 4 == this.ref.get(0).readyState ? !0 : !1; };
Video.prototype.getClip = function() { return this.ref && this.ref.get && this.ref.get(0) ? this.ref.get(0) : null; };
Video.prototype.getIsPlaying = function() { return this.ref && this.ref.get && this.ref.get(0) && !this.ref.get(0).paused && !this.ref.get(0).ended ? !0 : !1; };
Video.prototype.isPointObscured = function(a, b, c, d) {
    var e = this.matrix.unTransformPoint(a, b);
    return this.content.showcontrols && e.y > this.height - 35 ? !0 : StageItem.prototype.isPointObscured.call(this, a, b, c, d);
};
Video.getStoreReference = function(a, b) { return a.getFullObjref() + ":" + b; };
var LinkArea = function(a, b, c, d) {
    this.textid = d;
    this.linkdy = this.linkdx = 0;
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
};
LinkArea.prototype = new VectorShape;
LinkArea.prototype.innerType = "LinkArea";
LinkArea.prototype.objectType = "Item";
LinkArea.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
LinkArea.prototype.renderBase = VectorShape.prototype.render;
LinkArea.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    b = $(a).children("textdata").children("vectortext").children("pr");
    if (1 == b.length) {
        a = $(a).children("textdata").children("vectortext");
        if (null != $(a).attr("top"))this.originalRectShape = this.rectShape = new ppRect(parseInt($(a).attr("left")), parseInt($(a).attr("top")), parseInt($(a).attr("right")), parseInt($(a).attr("bottom")));
        if (1 == b.length)this.content.path = PathLib.getPathFromXML(b);
    }
    this.type = "LinkArea";
};
LinkArea.prototype.createRef = function() { return!0; };
LinkArea.prototype.render = function(a) {
    switch (a) {
    case "onrollover":
        new ppTextLib(this.xml);
        this.parent.render(this.parent.lastRenderedState, !0, null, "LinkArea render", !1, this.id);
        break;
    case "onrollout":
        this.parent.render(null, !0);
    }
};
LinkArea.prototype.handleIfOver = function(a, b, c) {
    b = this.parent.getCanvasPoint(b.x, b.y);
    if (b.x > this.xpos + this.linkdx && b.x < this.xpos + this.linkdx + this.width && b.y > this.ypos + this.linkdy && b.y < this.ypos + this.linkdy + this.height) {
        if (!c || !this.isMouseOver)this.isMouseOver = !0, this.parent.handleEvent(a, this.id, null, !1, !1, !0), this.render(a);
        return!0;
    }
    return!1;
};
LinkArea.prototype.handleIfOut = function(a, b) {
    var c = this.parent.getCanvasPoint(b.x, b.y);
    if (!(c.x > this.xpos + this.linkdx && c.x < this.xpos + this.linkdx + this.width && c.y > this.ypos + this.linkdy && c.y < this.ypos + this.linkdy + this.height)) {
        if (this.isMouseOver)this.isMouseOver = !1, this.parent.handleEvent(a, this.id, null, !1, !1, !0), this.render(a);
        return!0;
    }
    return!1;
};
var TextInput = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.content = { fontsize: 18, font: "Arial" };
    this.constructElement();
    this.events = [];
    this.active = !0;
    this.visible = !1;
    this.clickFocus = !0;
};
TextInput.prototype = new StageItem;
TextInput.prototype.innerType = "TextInput";
TextInput.prototype.objectType = "Item";
TextInput.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
TextInput.prototype.showBase = StageItem.prototype.show;
TextInput.prototype.hideBase = StageItem.prototype.hide;
TextInput.prototype.extractNextSpecialVar = function(a) {
    a = bwChunk.DecodeString(a);
    this.variables.Text = a;
    if (this.ref && this.input)this.input[0].value = a;
};
TextInput.prototype.getExtraResumeVars = function() {
    var a = "";
    this.variableResumes.VAR_TEXT = !0;
    this.variableDefaults.VAR_TEXT = a;
    this.variableTypes.VAR_TEXT = "string";
    if (this.ref && this.input)a = this.input[0].value;
    return{ VAR_TEXT: a };
};
TextInput.prototype.loadFromXML = function(a, b, c) {
    this.content.numeric = "true" == $(a).attr("numeric");
    this.content.multiline = "true" == $(a).attr("multiline");
    this.content.maxchars = parseInt($(a).attr("maxchars"));
    this.content.fontsize = $(a).attr("fontsize");
    this.content.textcolor = $(a).attr("textcolor").replace("0x", "#");
    this.content.bold = "true" == $(a).attr("bold");
    this.content.font = $(a).attr("font");
    this.bindto = $(a).attr("bindto");
    this.content.instructionText = "";
    var d = $(a).children("data").children("textdata").text();
    if ("" != d)this.content.instructionText = $(d).text();
    else if (!this.content.numeric)this.content.instructionText = "type your text here";
    var d = $(a).children("background").children("vectordata").children("path"), e = $(a).children("background").children("vectordata").children("pr");
    if (1 == d.length || 1 == e.length) {
        var f = $(a).children("background").children("vectordata");
        if (null != $(f).attr("top"))
            this.originalRectShape = this.rectShape = new ppRect(parseInt($(f).attr("left")), parseInt($(f).attr("top")), parseInt($(f).attr("right")),
                parseInt($(f).attr("bottom")));
        this.content.path = 1 == e.length ? PathLib.getPathFromXML(e) : d.text();
    }
    this.loadBaseFromXML(a, b, c);
    this.updateMatrixComplete();
    this.type = "textinput";
    this.variables.Text = "";
};
TextInput.prototype.validate = function() {
    var a = this.input.get(0).value;
    if (this.content.numeric && !a.match(/^-?([0-9]*\.|)[0-9]*$/))return!1;
    if (!isNaN(this.content.maxchars) && 0 < this.content.maxchars && a.length > this.content.maxchars)this.input.get(0).value = a.substr(0, this.content.maxchars);
    return!0;
};
TextInput.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = this;
    this.container = this.parent.ref;
    this.ref = $('<div class="item textinput interactive"></div>');
    this.applySize(this.ref);
    this.container.append(this.ref);
    var b = this.content.multiline ? $("<textarea>") : $("<input type='text'>");
    b.css("font-size", this.content.fontsize + "px");
    b.css("font-family", this.content.font + ",Arial,Sans-Serif");
    b.css("color", this.content.textcolor);
    b.attr("size", this.content.maxchars);
    b.attr("placeholder", this.content.instructionText);
    if ("" != this.variables.Text)b.get(0).value = this.variables.Text;
    var c = $("<canvas></canvas>");
    c.css("position", "absolute");
    this.ref.append(c);
    this.canvas = c.get(0);
    this.ref.append(b);
    this.input = b;
    this.input.get(0).item = this;
    if ("true" == this.variables._disabled)this.input.get(0).disabled = !0;
    this.ref.addClass("interactive");
    this.contentRef = this.ref;
    this.ref.get(0).item = this;
    a.input.bind("change", function() { a.variables.Text = this.value; });
    a.input.bind("keydown", function(b) {
        var c = a.input.get(0), f = c.value;
        setTimeout(function() {
            if (player.iOSKeyboardFault)
                switch (b.keyCode) {
                case 8:
                    if (0 <
                        c.value.length)c.value = c.value.substr(0, c.value.length - 1);
                }
            if (!a.validate(c.value))c.value = f;
            a.variables.Text = c.value;
            a.bindto && "" != a.bindto && a.setVariable(a.bindto, c.value);
        }, 0);
    });
    player.isIOS && window != top && a.input.bind("keypress", function(b) {
        var c = this, f = c.value;
        setTimeout(function() {
            var g = f + String.fromCharCode(b.charCode);
            if (c.value == f && g.length > f.length && g != f && a.validate(g))
                player.iOSKeyboardFault = !0, 1 < g.length && g.substr(1, 1).toLowerCase() != g.substr(1, 1) && (g = g.substr(0, 1) + g.substr(1, 1).toLowerCase() +
                    g.substr(2)), c.value = g, c.focus();
        }, 0);
    });
    a.input.bind("blur", function() { a.handleEvent("onlosefocus", null, null, !1, !1, !0); });
    if (a.bindto && "" != a.bindto)a.bindVarListener(a.bindto).act(a, !1), a.variables.Text = this.input.get(0).value;
    a.renderBackground("", !0, null, "textinput createref");
    return!0;
};
TextInput.prototype.renderBackground = VectorShape.prototype.render;
TextInput.prototype.render = function() {
    if (this.bindto && "" != this.bindto) {
        var a = this.extractVariable(this.bindto);
        if (a != this.input.get(0).value)this.input.get(0).value = a;
        this.variables.Text = a;
    }
};
TextInput.prototype.applySize = function(a) {
    a.css("left", this.x + "px");
    a.css("top", this.y + "px");
    a.css("width", this.width + "px");
    a.css("height", this.height + "px");
    "Layer" != this.innerType && "ExpandingLabel" != this.innerType && 0 < this.depth && a.css("z-index", this.depth);
    $(this.canvas).css("left", this.xoffset + "px");
    $(this.canvas).css("top", this.yoffset + "px");
    if (0 != this.rotation)
        a.css("-webkit-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-webkit-transform", "rotate(" +
            this.rotation + "deg)"), a.css("-moz-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-moz-transform", "rotate(" + this.rotation + "deg)"), a.css("-o-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-o-transform", "rotate(" + this.rotation + "deg)"), a.css("-ms-transform-origin", this.rotatexpos - this.xoffset + "px " + (this.rotateypos - this.yoffset) + "px"), a.css("-ms-transform", "rotate(" + this.rotation + "deg)"), this.canSimplify =
            !1;
};
var DragItem = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "textfield";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.deferredResourceIndex = 0;
    this.fillet = 10;
    this.lastRenderedState = "none";
    this.snapy = this.snapx = 0;
    this.multidrop = this.dragreturn = !0;
    this.dropoffsety = this.dropoffsetx = 0;
    this.canvas = null;
    this.m_nYOffset =
        this.m_nXOffset = 0;
    this.height = this.width = 1E3;
    this.downY = this.downX = this.dragY = this.dragX = 0;
    this.dropArea = null;
    this.dragDropIDs = { global: !0 };
    this.dragOverIDs = { global: !0 };
    this.currentlyOver = {};
    this.isDragItem = !0;
};
DragItem.prototype = new Item;
DragItem.prototype.objectType = "Item";
DragItem.prototype.innerType = "Item";
DragItem.prototype.extractNextSpecialVar = function(a) { if (a = this.getItemByResumeIndex(a))if (this.dropArea = a, this.dropArea.variables.DragConnectData = this.connectdata, "wordbank" == this.style)this.originalParent = this.parent, this.parent = this.dropArea.parent, this.x = this.dropArea.x, this.y = this.dropArea.y, this.depth = ++this.slide.topZ, this.updateMatrixComplete(!0); };
DragItem.prototype.getExtraResumeVars = function() {
    var a = -1;
    this.variableResumes.VAR_SELECTED_ITEM = !0;
    this.variableDefaults.VAR_SELECTED_ITEM = -1;
    this.variableTypes.VAR_SELECTED_ITEM = "number";
    this.dropArea && (a = this.dropArea.getItemIndex());
    return{ VAR_SELECTED_ITEM: a };
};
DragItem.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
DragItem.prototype.toBaseData = Element.prototype.toData;
DragItem.prototype.toData = function(a) {
    a = this.toBaseData(a);
    a.x = this.x;
    a.y = this.y;
    if (this.depth != this.originalZ)a.depth = this.depth;
    return a;
};
DragItem.prototype.updateBaseFromData = Element.prototype.updateFromData;
DragItem.prototype.updateFromData = function(a, b) {
    this.updateBaseFromData(a, b);
    if (!b) {
        if (!isNaN(parseInt(a.x)))this.x = parseInt(a.x);
        if (!isNaN(parseInt(a.y)))this.y = parseInt(a.y);
        if (a.depth && (this.depth = a.depth, this.depth > this.slide.topZ))this.slide.topZ = this.depth;
        this.updateMatrixComplete(!0);
    }
    if (a.variables && a.variables.DropTargetId && (this.dropArea = this.parent.children[a.variables.DropTargetId], !this.dropArea))this.dropArea = this.slide.findDescendantById(a.variables.DropTargetId);
    this.ref && this.updatePosition();
};
DragItem.prototype.resetBase = Element.prototype.reset;
DragItem.prototype.reset = function(a) {
    this.resetBase(a);
    if (!a) {
        this.x = this.originalX;
        this.y = this.originalY;
        if (this.shuffled)this.x = this.shuffleX, this.y = this.shuffleY;
        this.xoffset = this.originalXOffset || 0;
        this.yoffset = this.originalYOffset || 0;
        this.dragY = this.dragX = 0;
        this.dropArea = null;
        this.updatePosition();
        if (isNaN(this.x))this.x = this.originalX, this.y = this.originalY;
    }
};
StageItem.prototype.convertToDragItem = function(a) {
    this.toBaseData = DragItem.prototype.toBaseData;
    this.toData = DragItem.prototype.toData;
    this.updateBaseFromData = DragItem.prototype.updateBaseFromData;
    this.updateFromData = DragItem.prototype.updateFromData;
    this.resetBase = DragItem.prototype.resetBase;
    this.reset = DragItem.prototype.reset;
    this.initDrag = DragItem.prototype.initDrag;
    this.mousedown = DragItem.prototype.mousedown;
    this.mousemove = DragItem.prototype.mousemove;
    this.mouseup = DragItem.prototype.mouseup;
    this.fixPositionEvent =
        DragItem.prototype.fixPositionEvent;
    this.updateDragPosition = DragItem.prototype.updateDragPosition;
    this.testOverlap = DragItem.prototype.testOverlap;
    this.findDropArea = DragItem.prototype.findDropArea;
    this.dock = DragItem.prototype.dock;
    this.undock = DragItem.prototype.undock;
    this.updatePosition = DragItem.prototype.updatePosition;
    this.reParent = DragItem.prototype.reParent;
    this.getExtraResumeVars = DragItem.prototype.getExtraResumeVars;
    this.parseDragGroupsFromXML = DropArea.prototype.parseDragGroupsFromXML;
    this.extractNextSpecialVar =
        DragItem.prototype.extractNextSpecialVar;
    this.lastRenderedState = "none";
    this.currentlyOver = {};
    switch (this.innerType) {
    case "textfield":
    case "image":
        break;
    case "ItemGroup":
    case "StateGroup":
        this.render = function() {};
        $.each(this.children, function() {});
        break;
    default:
        this.render = VectorShape.prototype.render;
    }
    this.droptype = $(a).children("dragdrop").attr("droptype");
    this.snapx = parseInt($(a).children("dragdrop").attr("snapx"));
    this.snapy = parseInt($(a).children("dragdrop").attr("snapy"));
    this.dragreturn = "true" ==
        $(a).children("dragdrop").attr("dragreturn");
    this.multidrop = "true" == $(a).children("dragdrop").attr("multidrop");
    this.dropoffsetx = parseInt($(a).children("dragdrop").attr("dropoffsetx"));
    this.dropoffsety = parseInt($(a).children("dragdrop").attr("dropoffsety"));
    this.originalX = this.x;
    this.originalY = this.y;
    this.downY = this.downX = this.dragY = this.dragX = 0;
    this.parseDragGroupsFromXML(a);
    this.isDragItem = !0;
};
StageItem.prototype.convertRefToDragItem = function() {
    this.ref.addClass("dragitem");
    this.setInteractive();
};
DragItem.prototype.bustScrollAreas = function() {};
DragItem.initialized = !1;
DragItem.init = function() {
    DragItem.initialized = !0;
    DragItem.cargo = null;
    var a = function(a) { DragItem.cargo && (DragItem.cargo.mousemove(a), a.preventDefault()); }, b = function(a) { DragItem.cargo && (DragItem.cargo.mouseup(a), a.preventDefault()); };
    player.isIOS ? ($(document.body).bind("touchmove", a), $(window).bind("touchend", b)) : ($(document.body).bind("mousemove", a), $(window).bind("mouseup", b));
};
DragItem.cancelDrag = function() {
    if (DragItem.cargo)DragItem.cargo.dragging = !1;
    DragItem.cargo = null;
    $(".item").removeClass("dragging");
};
DragItem.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.parseDragGroupsFromXML(a);
    this.style = $(a).attr("style");
    this.connectdata = $(a).attr("connectdata");
    this.reviewdata = $(a).attr("reviewdata");
    this.width = parseInt($(a).attr("width"));
    this.height = parseInt($(a).attr("height"));
    this.originalX = this.x;
    this.originalY = this.y;
    this.alttext = $(this.xml).find("textdata").attr("alttext");
    if ("wordbank" == this.style && !this.colors.hover)
        b = new Background(this.ref), b.rotation = "90", b.fillType =
            "linear", b.stops.push(b.parseStop('<color rgb="0xBBF8FB" alpha="100" stop="0" />')), b.stops.push(b.parseStop('<color rgb="0xA5E8EB" alpha="100" stop="100" />')), this.colors.hover = b;
    this.variables.DropTargetId = "";
    b = $(a).children("data").children("textdata");
    a = $(a).children("data").children("textdata").children("vectortext");
    c = a.children("pr");
    if (1 == c.length) {
        this.textSprite = { canvas: null, m_nXOffset: 0, m_nYOffset: 0, width: 1E3, height: 1E3, charIndex: 0, maxCharIndex: 0, vectorHot: !1, isShapeMask: !1 };
        if (null !=
            $(a).attr("top"))
            this.textSprite.x = $(b).attr("xpos"), this.textSprite.y = $(b).attr("ypos"), this.textSprite.width = $(b).attr("width"), this.textSprite.height = $(b).attr("height"), this.textSprite.rectShape = new ppRect(parseInt($(a).attr("left")), parseInt($(a).attr("top")), parseInt($(a).attr("right")), parseInt($(a).attr("bottom"))), this.textSprite.rectShape.right = Math.max(this.textSprite.rectShape.right, this.width), this.textSprite.rectShape.bottom = Math.max(this.textSprite.rectShape.bottom, this.height), this.textSprite.originalRectShape =
                this.rectShape;
        this.textSprite.path = PathLib.getPathFromXML(c);
    }
    this.canSimplify = !1;
};
DragItem.prototype.parseDragGroupsFromXML = function(a) {
    var b = $(a).children("dragdrop").children("dragoverids").children("dragoverid"), a = $(a).children("dragdrop").children("dragdropids").children("dragdropid");
    if (0 == b.length && 0 == a.length)this.dragDropIDs = { global: !0 }, this.dragOverIDs = { global: !0 };
    else {
        this.dragDropIDs = {};
        this.dragOverIDs = {};
        var c = this;
        b.each(function(a, b) {
            var f = $(b).text();
            c.dragOverIDs[f] = !0;
        });
        a.each(function(a, b) {
            var f = $(b).text();
            c.dragDropIDs[f] = !0;
        });
    }
};
DragItem.prototype.initDrag = function() {
    this.canSimplify = !1;
    DragItem.initialized || DragItem.init();
};
DragItem.prototype.createBaseRef = StageItem.prototype.createRef;
DragItem.prototype.createRef = function() {
    if (this.ref)return this.render(null, !0), !1;
    if (!this.createBaseRef())return!1;
    this.ref.addClass("dragitem");
    this.setInteractive();
    var a = $("<canvas></canvas>");
    a.attr("width", this.width);
    a.attr("height", this.height);
    a.css("position", "absolute");
    this.ref.append(a);
    var b = $("<canvas></canvas>");
    b.attr("width", this.width);
    b.attr("height", this.height);
    b.css("margin", "0 0 0 " + 2 * this.fillet + "px");
    b.css("position", "absolute");
    this.ref.append(b);
    if (this.textSprite) {
        var c =
            $("<canvas></canvas>");
        c.css("position", "absolute");
        c.css("left", this.textSprite.x + "px");
        c.css("top", this.textSprite.y + "px");
        c.attr("width", this.width + "px");
        c.attr("height", this.height + "px");
        c.attr("id", this.id + "_text");
        this.ref.append(c);
        this.textSprite.canvas = c.get(0);
        this.textRef = c;
    }
    this.border = a.get(0);
    this.canvas = b.get(0);
    this.initDrag();
    this.render(null, !0);
    return!0;
};
DragItem.prototype.renderCallback = function() {
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    this.render();
    this.contentRef.css("margin-top", parseInt(this.height / 2) - 10);
    this.contentRef.empty();
    this.contentRef.text(this.alttext);
};
DragItem.prototype.render = function(a, b) {
    if (this.ref && (b || a != this.lastRenderedState)) {
        this.lastRenderedState = a;
        var c = this.border.getContext("2d"), d = parseInt(900 * Math.random() + 1100) % 1E3;
        c.fillStyle = "#" + d;
        c.fillStyle = "#fff";
        c.lineWidth = 1;
        c.strokeStyle = "#ccc";
        d = c.createLinearGradient(0, 0, 0, this.height);
        d.addColorStop(0, "#fcfcfc");
        d.addColorStop(1, "#eaeaea");
        c.fillStyle = d;
        this.colors[a] && this.colors[a].applyCanvas(c, this, !0, !1);
        d = this.fillet;
        switch (this.style) {
        case "matching":
            c.beginPath();
            c.moveTo(d +
                0.5, 0.5);
            c.lineTo(this.width - 0.5, 0.5);
            c.lineTo(this.width - 0.5, this.height - 0.5);
            c.lineTo(d + 0.5, this.height - 0.5);
            c.lineTo(d + 0.5, this.height - d - 0.5);
            c.lineTo(0.5, this.height - d - 0.5);
            c.lineTo(0.5, d + 0.5);
            c.lineTo(d + 0.5, d + 0.5);
            c.lineTo(d + 0.5, 0.5);
            c.fill();
            c.save();
            c.clip();
            c.strokeStyle = "#fff";
            c.lineWidth = 5;
            c.stroke();
            c.restore();
            c.save();
            c.lineWidth = 1;
            c.strokeStyle = "#ccc";
            if (c.setLineDash && (this.variables.ReviewMode || !this.dropArea))c.strokeStyle = "#aaa", c.setLineDash([1.3]);
            if (this.colors[a])
                c.strokeStyle =
                    this.colors[a].stops[0].color;
            c.stroke();
            c.restore();
            if (this.variables.ReviewMode) {
                c.fillStyle = "#DB0000";
                if (this.dropArea && this.reviewdata == this.dropArea.reviewdata)c.fillStyle = "#008520";
                d = 8;
                c.beginPath();
                c.arc(8.5, 8.5, d, 0, 2 * Math.PI);
                c.fill();
                d = 6.8;
                c.beginPath();
                c.strokeStyle = "rgba(255,255,255,0.6)";
                c.lineWidth = 0.8;
                c.arc(8.4, 8.4, d, 0, 2 * Math.PI);
                c.fill();
                c.stroke();
                c.fillStyle = "#fff";
                c.font = "10px sans-serif";
                c.textBaseline = "top";
                1 < this.reviewdata.length ? c.fillText(this.reviewdata, 2, 2) : c.fillText(this.reviewdata,
                    5, 2);
                if (this.dropArea && this.dropArea.matchingDragItem != this)this.dropArea.matchingDragItem = this, this.dropArea.variables.ReviewMode = this.variables.ReviewMode, this.dropArea.render(this.dropArea.lastRenderedState, !0);
            }
            break;
        case "wordbank":
            d = this.height / 2;
            c.beginPath();
            c.moveTo(d + 0.5, 0.5);
            c.lineTo(this.width - d - 0.5, 0.5);
            c.arc(this.width - d - 0.5, d, d - c.lineWidth / 2, 3 * Math.PI / 2, Math.PI / 2);
            c.lineTo(d + 0.5, this.height - 0.5);
            c.arc(d + 0.5, d, d - c.lineWidth / 2, Math.PI / 2, 3 * Math.PI / 2);
            c.fill();
            c.save();
            c.clip();
            c.strokeStyle =
                "#fff";
            c.lineWidth = 3.4;
            c.stroke();
            c.restore();
            if (this.variables.ReviewMode)
                if ("1" == this.reviewdata)c.lineWidth = 2, c.strokeStyle = "#008520";
                else if (this.dropArea)c.lineWidth = 2, c.strokeStyle = "#DB0000";
            if (0 != c.lineWidth) {
                if (this.colors[a])c.strokeStyle = this.colors[a].stops[0].color;
                c.stroke();
            }
            break;
        default:
            c.fillRect(0.5, 0.5, this.width, this.height - c.lineWidth), c.strokeRect(0.5, 0.5, this.width, this.height - c.lineWidth);
        }
        if (this.textSprite)
            c = new ppTextLib(this.xml), ppArt.itemID = this.id, ppArt.item = this, ppArt.m_bMaskMode =
                !1, ppArt.DrawVector(this.textSprite, this.textSprite.path, c, player.fontlib, this.imagelib, null, null);
    }
};
DragItem.prototype.fixPositionEvent = function(a) {
    if (!a.fixed) {
        if (a.originalEvent.touches)0 < a.originalEvent.touches.length ? (a.pageX = a.originalEvent.touches[0].pageX, a.pageY = a.originalEvent.touches[0].pageY) : (a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY);
        a.fixed = !0;
        a.pageX = parseInt(a.pageX / player.currentZoom());
        a.pageY = parseInt(a.pageY / player.currentZoom());
        var b = $(".framewrap").offset(), c = a.pageX - b.left, d = a.pageY - b.top;
        if (!player.frameScale || isNaN(player.frameScale))
            player.frameScale =
                1;
        a.pageX = parseInt(c / player.frameScale + b.left);
        a.pageY = parseInt(d / player.frameScale + b.top);
    }
};
DragItem.prototype.mousedown = function(a) {
    if (!("true" == this.variables._disabled || "true" == this.parent.variables._disabled))
        if ("wordbank" == this.style && this.dropArea)this.render("");
        else {
            this.fixPositionEvent(a);
            this.downScrollTop = 0;
            if (this.nearestScrollAreaAncestor)this.downScrollTop = this.nearestScrollAreaAncestor.ref.get(0).scrollTop;
            else if ("sequence" == this.style)this.downScrollTop = this.parent.ref.get(0).scrollTop;
            if (this.findAncestorOfType("ScrollArea"))this.originalParent = this.parent, this.reParent(this.slide);
            this.downX = a.pageX;
            this.downY = a.pageY;
            this.lastX = this.x;
            this.lastY = this.y;
            if (this.depth < this.slide.topZ) {
                if (!this.originalZ)this.originalZ = this.depth;
                this.depth = ++this.slide.topZ;
                this.setZIndex(this.depth);
            }
            this.dragStarted = !1;
            this.dragging = !0;
            DragItem.cargo = this;
            this.ref.addClass("dragging");
            this.handleEvent("ondragstart", null, null, !1, !1, !0);
            this.handleEvent("onpress", null, null, !1, !1, !0);
        }
};
DragItem.prototype.reParent = function(a) {
    var b = this.findAncestorOfType("ScrollArea"), c = a.findAncestorOfType("ScrollArea"), d = this.parent.ref.offset(), e = a.ref.offset(), f = 0, g = 0, h = 0, j = 0;
    if (b && (f = b.ref.get(0).scrollTop, g = b.ref.get(0).scrollLeft, !b.scrollPlaceHolder))b.scrollPlaceHolder = $("<div class='scrollplaceholder'/>"), b.scrollPlaceHolder.css("top", b.ref.get(0).scrollHeight - 1), b.scrollPlaceHolder.css("left", b.ref.get(0).scrollWidth - 1), b.ref.append(b.scrollPlaceHolder);
    if (c)
        h = c.ref.get(0).scrollTop,
            j = c.ref.get(0).scrollLeft;
    b = f - h;
    g -= j;
    a.ref.append(this.ref);
    this.parent = a;
    this.x += (d.left - e.left - g) / player.frameScale;
    this.y += (d.top - e.top - b) / player.frameScale;
    this.updateDragPosition();
};
DragItem.prototype.mousemove = function(a) {
    this.fixPositionEvent(a);
    if (!this.dragStarted)this.dragStarted = !0, this.handleEvent("ondragdisconnect", null, null, !1, !0, !1);
    if (this.dragging)swipe.moved = !0, this.dragX = a.pageX - this.downX, this.dragY = a.pageY - this.downY, this.updateDragPosition(), this.findDropArea();
};
DragItem.prototype.mouseup = function(a) {
    this.fixPositionEvent(a);
    this.dragging = !1;
    DragItem.cargo = null;
    $(".item").removeClass("dragging");
    this.updateDragPosition();
    DragItem.dropArea ? (this.dock(DragItem.dropArea), DragItem.dropArea = null, DropArea.update()) : (this.undock(), this.dragreturn && "sequence" != this.style && this.originalZ && this.setZIndex(this.originalZ));
    this.setElementProperty("dragX", 0, !0);
    this.setElementProperty("dragY", 0, !0);
    swipe.moved = !1;
    this.handleEvent("ondragend", null, null, !1, !1, !0);
    this.handleEvent("onrelease",
        null, null, !1, !1, !0);
    this.mouseupCallback && this.mouseupCallback(a);
    $.each(this.children, function(a, c) { if (void 0 != c.dragX)c.dragX = 0, c.dragY = 0; });
    !this.dropArea && this.dragreturn ? this.originalParent && this.originalParent != this.parent && (this.reParent(this.originalParent), this.updatePosition()) : this.dropArea && this.dropArea.parent != this.parent && (this.reParent(this.dropArea.parent), this.updatePosition());
    this.updateMatrixComplete(!0);
};
DragItem.prototype.updateDragPosition = function() {
    this.ref.css("left", this.x + this.dragX);
    this.ref.css("top", this.y + this.dragY);
    this.updateMatrixComplete(!0);
};
StageItem.prototype.testOverlap = function(a) {
    if (0 < $(".modalfence:visible").length)return!1;
    var b = this;
    if ("ItemGroup" == a.innerType || "StateGroup" == a.innerType) {
        var c = !1;
        $.each(a.children, function(a, e) { c = c || b.testOverlap(e); });
        return c;
    }
    return"ItemGroup" == b.innerType || "StateGroup" == b.innerType ? (c = !1, $.each(b.children, function(d, e) { e.testOverlap && (e.setElementProperty("dragX", b.dragX, !0), e.setElementProperty("dragY", b.dragY, !0), c = c || e.testOverlap(a)); }), c) : this.testRotatedOverlap(a);
};
VectorShape.prototype.getCanvasPoint = function(a, b) { return this.matrix.unTransformPoint(a, b); };
StageItem.prototype.isPointActive = function(a, b) { return!this.visible ? !1 : this.testOver(a, b); };
VectorShape.prototype.isPointActive = function(a, b) {
    var c = this.getCanvasPoint(a, b), d = this.getBitMask();
    if (0 >= c.x || 0 >= c.y || c.x >= this.canvas.width || c.y >= this.canvas.height)return!1;
    d = d.isPointActive(c.x, c.y);
    if (BitMask.showDebug && player.monitoringItem == this && "_default_Hover" == this.lastRenderedState) {
        if (!BitMask.testCanvas)
            BitMask.testCanvas = $("<canvas id='test' width='1000' height='1000' style='position:absolute;z-index:200;left:0px;top:0px;'></canvas>"), $(document.body).append(BitMask.testCanvas), BitMask.testContext =
                BitMask.testCanvas.get(0).getContext("2d"), BitMask.testContext.fillStyle = "rgba(255,255,0,0.5)";
        BitMask.testCanvas.show();
        clearTimeout(BitMask.testCanvasClear);
        BitMask.testCanvasClear = setTimeout(function() { BitMask.testCanvas.hide(); }, 1E3);
        BitMask.testContext.clearRect(0, 0, 1E3, 1E3);
        this.getBitMask().drawDebug(BitMask.testCanvas.get(0));
        BitMask.testContext.fillStyle = d ? "rgba(0,255,0,1)" : "rgba(255,0,0,1)";
        BitMask.testContext.fillRect(c.x - 2, c.y - 2, 4, 4);
    }
    return d;
};
StageItem.prototype.isAbove = function(a) {
    for (var b = this; b;) {
        for (var c = a; c;) {
            if (c.parent == b.parent)return b.depth > c.depth;
            c = c.parent;
        }
        b = b.parent;
    }
    return!1;
};
StageItem.prototype.isPointObscured = function(a, b, c, d) {
    var e = this, f = !1;
    e.slide.deepEach(function(g, h) {
        if (!f && h != e && h != c && h.isAbove && h.isAbove(e) && h.isPointActive(a, b) && (!c || !c.isAncestor(h)))
            if ("ScrollArea" == h.innerType) {
                h.isAncestor(e);
                var j = h.ref.get(0).scrollTop;
                f = h.isPointActive(a, b - j, c, d);
            } else h.nearestScrollAreaAncestor && h.nearestScrollAreaAncestor != e.nearestScrollAreaAncestor ? (j = h.nearestScrollAreaAncestor.ref.get(0).scrollTop, f = h.isPointActive(a, b - j)) : f = !0;
    }, function(a) {
        var b = d && d(a);
        return a !=
            e && a.visible && a != c && !b;
    });
    return f;
};
DragItem.prototype.findDropArea = function() {
    var a = this, b = null, c = 1E5;
    $.each(a.slide.ref.find(".droparea"), function(d, e) {
        if (e.item && util.hasMutualKey(e.item.dragDropIDs, a.dragDropIDs) && a.testOverlap(e.item)) {
            var f = a.slideX() + a.dragX, g = a.slideY() + a.dragY, f = Math.sqrt(Math.pow(f - e.item.slideX(), 2) + Math.pow(g - e.item.slideY(), 2));
            if (f < c)b = e.item, c = f;
        }
    });
    a.variables.DragOverId = "";
    $.each(a.slide.ref.find(".dragover"), function(b, c) {
        c.item && util.hasMutualKey(c.item.dragOverIDs, a.dragOverIDs) && a.testOverlap(c.item) ?
        (a.variables.DragOverId = c.item.id, a.currentlyOver[c.item.id] || a.handleEvent("ondragover", null, null, !1, !1, !0), a.currentlyOver[c.item.id] = !0) : a.currentlyOver[c.item.id] = !1;
    });
    DragItem.dropArea = b;
    DropArea.update();
    return b;
};
DragItem.prototype.swapPositionsWith = function(a) {
    var b = this.y;
    this.y = a.y;
    a.y = b;
    this.ref.css("top", this.y + "px");
    a.ref.css("top", a.y + "px");
};
DragItem.prototype.updatePosition = function() {
    var a = this.fillet || 0;
    if (this.dropArea)
        switch (this.dropArea.droptype) {
        case "matching":
            this.x = this.dropArea.x + this.dropArea.width - a;
            break;
        case "snap":
            this.x = this.dropArea.x + this.dropArea.snapx - this.snapx + this.xoffset - this.dropArea.xoffset;
            this.y = this.dropArea.y + this.dropArea.snapy - this.snapy + this.yoffset - this.dropArea.yoffset;
            break;
        case "tile":
            break;
        case "free":
            if (void 0 == this.lastX)this.lastX = this.x, this.lastY = this.y;
            this.x = this.dragX + this.lastX;
            this.y =
                this.dragY + this.lastY;
            this.lastX = this.x;
            this.lastY = this.y;
            break;
        case "stackoffset":
            break;
        case "stackrandom":
            if (void 0 == this.randx && (this.randx = Math.random(), this.randy = Math.random(), 1 == this.dropArea.dockedItemCount))this.randy = this.randx = 0.5;
            var a = parseInt(2 * this.randx * this.dropArea.dropoffsetx) - this.dropArea.dropoffsetx, b = parseInt(2 * this.randy * this.dropArea.dropoffsety) - this.dropArea.dropoffsety;
            this.x = this.dropArea.x + this.dropArea.snapx - this.snapx + a + this.xoffset - this.dropArea.xoffset;
            this.y = this.dropArea.y +
                this.dropArea.snapy - this.snapy + b + this.yoffset - this.dropArea.yoffset;
            break;
        case "wordbank":
            this.slideY();
            this.x = this.dropArea.x + this.x - this.slideX() + this.dropArea.x - this.dropArea.slideX();
            this.y = this.dropArea.y + this.y - this.slideY() + this.dropArea.y - this.dropArea.slideY();
            break;
        default:
            this.x = this.dropArea.x, this.y = this.dropArea.y;
        }
    else if (this.dragreturn)
        if (this.shuffled && "sequence" != this.style) {
            if (this.x = parseInt(this.shuffleX) + this.xoffset, "matching" != this.style)this.y = parseInt(this.shuffleY) + this.yoffset;
        } else {
            if (this.x =
                parseInt(this.originalX) + this.xoffset, "matching" != this.style)this.y = parseInt(this.originalY) + this.yoffset;
        }
    else this.x += this.dragX, this.y += this.dragY;
    this.ref && (this.ref.css("left", this.x + "px"), this.ref.css("top", this.y + "px"));
    this.updateMatrixComplete(!0);
};
DragItem.prototype.undock = function(a) {
    if (this.dropArea)this.dropArea.variables.DragConnectData = "", this.dropArea.dockedItemCount--, this.dropArea.dragItem = null;
    this.variables.DropTargetId = "";
    if (!a)this.dropArea = null, this.dragreturn && this.originalParent && this.originalParent != this.parent && this.reParent(this.originalParent), this.updatePosition(), DropArea.unstackItem(this), DropArea.update();
};
DragItem.prototype.dock = function(a) {
    var b = this;
    "matching" == b.style ? $.each(b.slide.ref.find(".dragitem"), function(c, d) {
        var e = d.item;
        e && e != b && e.y == a.y && (b.reParent(e.parent), b.swapPositionsWith(e), e.undock());
    }) : "wordbank" == b.style && $.each(b.slide.ref.find(".dragitem"), function(a, d) {
        var e = d.item;
        e && e != b && e.undock();
    });
    this.dropArea && this.undock(!0);
    a.variables.DragConnectData = this.connectdata;
    a.dragItem = this;
    a.dockedItemCount++;
    b.variables.DropTargetId = a.id;
    b.dropArea = a;
    DropArea.unstackItem(this, b.dropArea);
    b.updatePosition();
    b.render(b.lastRenderedState);
    a && (!a.multidrop && 0 < a.dockedItemCount && $.each(b.slide.ref.find(".dragitem"), function(c, d) {
        var e = d.item;
        if (e && e != b && e.dropArea == a)e.x = parseInt(e.originalX) + e.xoffset, e.y = parseInt(e.originalY) + e.yoffset, e.undock();
    }), a.findSlot(this), a.updateSlotPositions());
    swipe.moved = !1;
    this.handleEvent("ondragconnect", null, null, !1, !1, !0);
    a.handleEvent("ondragconnect", null, null, !1, !1, !0);
};
DragItem.prototype.set_review = function() { this.render("", !0); };
var DropArea = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "droparea";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.deferredResourceIndex = 0;
    this.fillet = 10;
    this.droptype = "matching";
    this.lastRenderedState = "none";
    this.snapy = this.snapx = 0;
    this.multidrop = this.dragreturn = !0;
    this.dropoffsety = this.dropoffsetx = 0;
    this.slots =
    [];
    this.dragItemIDs = [];
    this.dockedItemCount = 0;
    this.canvas = this.dragItem = null;
    this.m_nYOffset = this.m_nXOffset = 0;
    this.m_nHeight = this.m_nWidth = 1E3;
    this.dragDropIDs = { global: !0 };
    this.dragOverIDs = { global: !0 };
    this.isDropArea = !0;
};
DropArea.prototype = new StageItem;
DropArea.prototype.objectType = "Item";
DropArea.prototype.innerType = "DropArea";
DropArea.prototype.extractNextSpecialVar = function(a) { if (a = this.getItemByResumeIndex(a))this.dragItem = a; };
DropArea.prototype.getExtraResumeVars = function() {
    var a = -1;
    this.variableResumes.VAR_SELECTED_ITEM = !0;
    this.variableDefaults.VAR_SELECTED_ITEM = -1;
    this.variableTypes.VAR_SELECTED_ITEM = "number";
    switch (this.style) {
    case "matching":
    case "wordbank":
        return this.dragItem && (a = this.dragItem.getItemIndex()), { VAR_SELECTED_ITEM: a };
    default:
        return{};
    }
};
DropArea.prototype.toBaseData = Element.prototype.toData;
DropArea.prototype.toData = function(a) {
    var b = this.toBaseData(a);
    if (this.DragConnectData)b.DragConnectData = this.DragConnectData;
    if (this.slots && 0 < this.slots.length)b.slots = [], $.each(this.slots, function(a, d) { b.slots.push(d.id); });
    return b;
};
DropArea.prototype.updateBaseFromData = Element.prototype.updateFromData;
DropArea.prototype.updateFromData = function(a) {
    var b = this;
    this.updateBaseFromData(a);
    if (a.DragConnectData)this.DragConnectData = a.DragConnectData;
    if (a.slots)
        this.slots = [], $.each(a.slots, function(a, d) {
            var e = b.parent.children[d];
            e && b.slots.push(e);
        });
};
DropArea.prototype.resetBase = Element.prototype.reset;
DropArea.prototype.reset = function() {
    this.resetBase();
    this.slots = [];
    this.dragItemIDs = [];
    this.dockedItemCount = 0;
};
StageItem.prototype.convertToDropArea = function(a) {
    this.toBaseData = DropArea.prototype.toBaseData;
    this.toData = DropArea.prototype.toData;
    this.updateBaseFromData = DropArea.prototype.updateBaseFromData;
    this.updateFromData = DropArea.prototype.updateFromData;
    this.resetBase = DropArea.prototype.resetBase;
    this.reset = DropArea.prototype.reset;
    this.update = DragItem.prototype.update;
    this.findSlot = DropArea.prototype.findSlot;
    this.findTileSlot = DropArea.prototype.findTileSlot;
    this.findOffsetSlot = DropArea.prototype.findOffsetSlot;
    this.updateSlotPositions = DropArea.prototype.updateSlotPositions;
    this.unstack = DropArea.prototype.unstack;
    this.parseDragGroupsFromXML = DropArea.prototype.parseDragGroupsFromXML;
    this.getDragItemIndex = DropArea.prototype.getDragItemIndex;
    this.getExtraResumeVars = DropArea.prototype.getExtraResumeVars;
    this.extractNextSpecialVar = DropArea.prototype.extractNextSpecialVar;
    this.lastRenderedState = "none";
    switch (this.innerType) {
    case "textfield":
    case "image":
        break;
    case "ItemGroup":
    case "StateGroup":
        this.render = function() {};
        break;
    default:
        this.render = VectorShape.prototype.render, this.renderOnUpdate = VectorShape.prototype.renderOnUpdate;
    }
    this.originalWidth = parseInt($(a).attr("width"));
    this.originalHeight = parseInt($(a).attr("height"));
    this.originalX = this.x;
    this.originalY = this.y;
    this.droptype = $(a).children("dragdrop").attr("droptype");
    this.snapx = parseInt($(a).children("dragdrop").attr("snapx"));
    this.snapy = parseInt($(a).children("dragdrop").attr("snapy"));
    this.dragreturn = "true" == $(a).children("dragdrop").attr("dragreturn");
    this.multidrop = "true" == $(a).children("dragdrop").attr("multidrop");
    this.dropoffsetx = parseInt($(a).children("dragdrop").attr("dropoffsetx"));
    this.dropoffsety = parseInt($(a).children("dragdrop").attr("dropoffsety"));
    this.slots = [];
    this.dragItemIDs = [];
    this.dockedItemCount = 0;
    this.isDropArea = !0;
    this.variables.DragConnectData = "";
    this.variableDefaults.DragConnectData = "";
    this.parseDragGroupsFromXML(a);
};
DropArea.update = function() {
    $.each(player.currentSlide().ref.find(".droparea"), function(a, b) { b.item && (b.item == DragItem.dropArea ? b.item.render("over") : b.item.render(), b.item.updateSlotPositions()); });
    DragItem.cargo && DragItem.dropArea && DragItem.dropArea.findSlot(DragItem.cargo);
};
DropArea.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
DropArea.prototype.parseDragGroupsFromXML = DragItem.prototype.parseDragGroupsFromXML;
DropArea.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.style = $(a).attr("style");
    this.droptype = $(a).attr("style");
    this.reviewdata = $(a).attr("reviewdata");
    this.originalWidth = parseInt($(a).attr("width"));
    this.originalHeight = parseInt($(a).attr("height"));
    this.alttext = $(this.xml).find("textdata").attr("alttext");
    this.variables.DragConnectData = "";
    this.variableDefaults.DragConnectData = "";
    b = $(a).children("data").children("textdata");
    a = $(a).children("data").children("textdata").children("vectortext");
    c = a.children("pr");
    if (1 == c.length) {
        this.textSprite = { canvas: null, m_nXOffset: 0, m_nYOffset: 0, width: 1E3, height: 1E3, charIndex: 0, maxCharIndex: 0, vectorHot: !1, isShapeMask: !1 };
        if (null != $(a).attr("top"))
            this.textSprite.x = $(b).attr("xpos"), this.textSprite.y = $(b).attr("ypos"), this.textSprite.width = $(b).attr("width"), this.textSprite.height = $(b).attr("height"), this.textSprite.rectShape = new ppRect(parseInt($(a).attr("left")), parseInt($(a).attr("top")), parseInt($(a).attr("right")), parseInt($(a).attr("bottom"))),
                this.textSprite.rectShape.right = Math.max(this.textSprite.rectShape.right, this.width), this.textSprite.rectShape.bottom = Math.max(this.textSprite.rectShape.bottom, this.height), this.textSprite.originalRectShape = this.rectShape;
        this.textSprite.path = PathLib.getPathFromXML(c);
    }
    this.canSimplify = !1;
};
DropArea.prototype.loadDragDropFromXML = function() {};
DropArea.prototype.createBaseRef = StageItem.prototype.createRef;
DropArea.prototype.createRef = function() {
    if (this.ref)return this.render(null, !0), !1;
    this.type = "droparea";
    if (!this.createBaseRef())return!1;
    this.ref.addClass("droparea");
    var a = $("<canvas></canvas>");
    a.attr("width", this.width);
    a.attr("height", this.height);
    a.css("position", "absolute");
    this.ref.append(a);
    var b = $("<canvas></canvas>");
    b.attr("width", this.width);
    b.attr("height", this.height);
    b.css("margin", "0 0 0 " + this.fillet + "px");
    b.css("position", "absolute");
    this.ref.append(b);
    if (this.textSprite) {
        var c =
            $("<canvas></canvas>");
        c.css("position", "absolute");
        c.css("left", this.textSprite.x + "px");
        c.css("top", this.textSprite.y + "px");
        c.attr("width", this.width + "px");
        c.attr("height", this.height + "px");
        c.attr("id", this.id + "_text");
        this.ref.append(c);
        this.textSprite.canvas = c.get(0);
        this.textRef = c;
    }
    this.border = a.get(0);
    this.jcanvas = b;
    this.canvas = b.get(0);
    this.bindEvents();
    this.render();
    return!0;
};
DropArea.prototype.bindEvents = function() {
    var a = this;
    a.ref.bind("dragstart", function(a) { a.preventDefault(); });
    a.ref.bind("mouseover", function() { DragItem.cargo && a.render("over"); });
    a.ref.bind("mouseout", function() { a.render("out"); });
};
DropArea.prototype.renderCallback = function() {};
DropArea.prototype.render = function(a, b) {
    if (this.ref && (b || a != this.lastRenderedState)) {
        this.lastRenderedState = a;
        var c = this.border.getContext("2d"), d = parseInt(900 * Math.random() + 1100) % 1E3;
        c.fillStyle = "#" + d;
        c.fillStyle = "#fff";
        c.lineWidth = 1;
        c.strokeStyle = "#ccc";
        d = c.createLinearGradient(0, 0, 0, this.height);
        d.addColorStop(0, "#fcfcfc");
        d.addColorStop(1, "#eaeaea");
        c.fillStyle = d;
        this.colors[a] && this.colors[a].applyCanvas(c, this, !0, !1);
        switch (a) {
        case "over":
            c.lineWidth = 3;
            break;
        default:
            c.lineWidth = 1;
        }
        var d = c.lineWidth /
                2,
            e = this.fillet;
        switch (this.style) {
        case "matching":
            c.beginPath();
            c.moveTo(0 + d, 0 + d);
            c.lineTo(this.width - d, 0 + d);
            c.lineTo(this.width - d, e - d);
            c.lineTo(this.width - e - d, e - d);
            c.lineTo(this.width - e - d, this.height - e + d);
            c.lineTo(this.width - d, this.height - e + d);
            c.lineTo(this.width - d, this.height - d);
            c.lineTo(0 + d, this.height - d);
            c.lineTo(0 + d, 0 + d);
            c.fill();
            c.save();
            c.clip();
            c.strokeStyle = "#fff";
            c.lineWidth = 5;
            c.stroke();
            c.restore();
            c.lineWidth = 1;
            c.strokeStyle = "#ccc";
            c.stroke();
            if (this.variables.ReviewMode) {
                c.fillStyle =
                    "#DB0000";
                if (this.matchingDragItem && this.matchingDragItem.reviewdata == this.reviewdata)c.fillStyle = "#008520";
                e = 8;
                c.beginPath();
                c.arc(8, 8, e, 0, 2 * Math.PI);
                c.fill();
                e = 7;
                c.beginPath();
                c.fillStyle = "#000";
                c.strokeStyle = "rgba(255,255,255,0.5)";
                c.lineWidth = 0.5;
                c.arc(8, 8, e, 0, 2 * Math.PI);
                c.fill();
                c.stroke();
                c.fillStyle = "#fff";
                c.font = "10px sans-serif";
                c.textBaseline = "top";
                1 < this.reviewdata.length ? c.fillText(this.reviewdata, 2, 2) : c.fillText(this.reviewdata, 5, 2);
            }
            break;
        case "wordbank":
            if (this.variables.ReviewMode)
                c.lineWidth =
                    2, c.strokeStyle = "#DB0000";
            e = this.height / 2;
            c.beginPath();
            c.moveTo(e + d, d);
            c.lineTo(this.width - e - d, d);
            c.arc(this.width - e - d, e, e - c.lineWidth / 2, 3 * Math.PI / 2, Math.PI / 2);
            c.lineTo(e + d, this.height - d);
            c.arc(e + d, e, e - c.lineWidth / 2, Math.PI / 2, 3 * Math.PI / 2);
            c.fill();
            c.stroke();
            break;
        default:
            c.fillRect(d, d, this.width, this.height - c.lineWidth), c.strokeRect(d, d, this.width, this.height - c.lineWidth);
        }
        if (this.textSprite)
            c = new ppTextLib(this.xml), ppArt.itemID = this.id, ppArt.item = this, ppArt.m_bMaskMode = !1, ppArt.DrawVector(this.textSprite,
                this.textSprite.path, c, player.fontlib, this.imagelib, null, null);
    }
};
DropArea.prototype.updateSlotPositions = function() {
    switch (this.droptype) {
    case "stackrandom":
    case "free":
        return;
    case "stackoffset":
        for (var a = 0, b = 0; b < this.slots.length; b++) {
            var c = this.slots[b];
            if (c != DragItem.cargo)c.x = this.x + b * this.dropoffsetx, c.y = this.y + b * this.dropoffsety, c.ref.css("left", c.x + "px"), c.ref.css("top", c.y + "px"), c.updateMatrixComplete(!0), 0 == a ? a = c.depth : c.setZIndex(a + b);
        }
        return;
    }
    for (var d = a = 0, e = 0, b = 0; b < this.slots.length; b++) {
        c = this.slots[b];
        a + c.width > this.width && (a = 0, d += e);
        if (c != DragItem.cargo)
            c.x =
                this.x + a, c.y = this.y + d, c.updatePosition();
        e = c.height;
        a += c.width;
    }
};
DropArea.prototype.findSlot = function(a) { "tile" == this.droptype ? (this.findTileSlot(a), this.updateSlotPositions()) : "stackoffset" == this.droptype && (this.findOffsetSlot(a), this.updateSlotPositions()); };
DropArea.prototype.findTileSlot = function(a) {
    var b = a.x - this.x + a.dragX + a.snapx, c = a.y - this.y + a.dragY + a.snapy, d = this.slots.indexOf(a);
    -1 < d && this.slots.splice(d, 1);
    if (0 > b && 0 > c)this.slots.splice(0, 0, a);
    else {
        for (var e = 0, f = 0, g = 0, h = 0, d = h = 0; d < this.slots.length; d++) {
            var j = this.slots[d], e = e + g;
            e + j.width > this.width && (e = 0, f += h);
            g = j.width;
            h = j.height;
            if (b + a.width <= this.width && b <= e + g && c <= f + h) {
                this.slots.splice(d, 0, a);
                return;
            }
            if (c <= f + h && e + g >= this.width) {
                this.slots.splice(d, 0, a);
                return;
            }
        }
        this.slots.push(a);
    }
};
DropArea.prototype.findOffsetSlot = function(a) {
    var b = a.x - this.x + a.dragX, c = a.y - this.y + a.dragY, d = this.slots.indexOf(a);
    -1 < d && this.slots.splice(d, 1);
    for (d = 0; d < this.slots.length; d++)
        if (b < d * this.dropoffsetx && c < d * this.dropoffsety) {
            this.slots.splice(d, 0, a);
            return;
        }
    this.slots.push(a);
};
DropArea.prototype.getDragItemIndex = function(a) {
    if (0 == this.slots.length)return 0;
    for (var b = 0; b < this.slots.length; b++)if (this.slots[b] == a)return b;
    return-1;
};
DropArea.unstackItem = function(a, b) { $.each(player.currentSlide().ref.find(".droparea"), function(c, d) { d != b && d.item && d.item.unstack(a); }); };
DropArea.prototype.unstack = function(a) {
    a = this.slots.indexOf(a);
    -1 < a && this.slots.splice(a, 1);
};
DragItem.prototype.set_review = function() { this.render("", !0); };
var DropList = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.content = { fontsize: 18, font: "Arial" };
    this.constructElement();
    this.events = [];
    this.active = !0;
    this.visible = !1;
    this.clickFocus = !0;
    this.originalIndices = {};
};
DropList.prototype = new StageItem;
DropList.prototype.innerType = "DropList";
DropList.prototype.objectType = "Item";
DropList.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
DropList.prototype.showBase = StageItem.prototype.show;
DropList.prototype.hideBase = StageItem.prototype.hide;
DropList.prototype.toBaseData = Element.prototype.toData;
DropList.prototype.toData = function() {
    var a = this.toBaseData();
    if (this.shuffleOrder)a.shuffleOrder = this.shuffleOrder;
    return a;
};
DropList.prototype.updateBaseFromData = Element.prototype.updateFromData;
DropList.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    if (a.shuffleOrder)this.shuffleOrder = a.shuffleOrder;
};
DropList.prototype.extractNextSpecialVar = function(a) {
    a = $(this.xml).children("data").children("itemlist").children().get(a);
    a = $(a).attr("itemdata");
    this.variables.SelectedItemData = a;
    this.ref && this.select && this.select.val(a);
};
DropList.prototype.getExtraResumeVars = function() {
    this.variableResumes.VAR_SELECTED_ITEM = !0;
    this.variableDefaults.VAR_SELECTED_ITEM = -1;
    this.variableTypes.VAR_SELECTED_ITEM = "number";
    var a = -1;
    this.ref && this.select && (a = this.originalIndices[this.select.val()], void 0 === a && (a = -1));
    return{ VAR_SELECTED_ITEM: a };
};
DropList.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.updateMatrixComplete();
    this.alttext = $(a).children("data").children("textdata").attr("alttext");
    this.shuffle = "true" == $(a).attr("shuffle");
    this.shuffleOrder = [];
    this.type = "droplist";
};
DropList.prototype.update = function() { this.variables.SelectedItemData = this.select.val(); };
DropList.prototype.createRef = function() {
    if (this.ref)return this.update(), !1;
    var a = this;
    this.container = this.parent.ref;
    this.ref = $('<div class="item droplist interactive"></div>');
    this.applySize(this.ref);
    this.container.append(this.ref);
    this.canvas = this.ref.get(0);
    this.select = $("<select></select>");
    this.select.css("font-size", this.content.fontsize + "px");
    this.select.css("font-family", this.content.font + ",Arial,Sans-Serif");
    this.applySize(this.select);
    this.ref.append(this.select);
    if ("true" == this.variables._disabled)
        this.select.get(0).disabled =
            !0;
    this.contentRef = this.ref;
    this.ref.get(0).item = this;
    var b = {};
    $(this.xml).children("data").children("itemlist").children().each(function(c, e) {
        var f = $(e).attr("itemdata"), g = $(e).children("textdata").attr("alttext"), h = $("<option value='" + f + "'>" + g + "</option>");
        a.originalIndices[f] = c;
        b[g] = h;
        a.shuffleOrder.length <= c && a.shuffleOrder.push(0.5 < Math.random());
        a.shuffle && a.shuffleOrder[c] ? a.select.prepend(h) : a.select.append(h);
    });
    if (this.alttext && "" != this.alttext)
        if (b[this.alttext])
            b[this.alttext].get(0).selected =
                !0;
        else {
            var c = $("<option value=''>" + this.alttext + "</option>");
            a.select.prepend(c);
        }
    void 0 != this.variables.SelectedItemData && this.select.val(this.variables.SelectedItemData);
    a.select.bind("change click", function() { a.update(); });
    a.select.bind("blur", function() { a.handleEvent("onlosefocus", null, null, !1, !1, !0); });
    a.update();
    return!0;
};
var Button = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "textfield";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.deferredResourceIndex = 0;
    this.canvas = null;
    this.m_nYOffset = this.m_nXOffset = 0;
    this.height = this.width = 1E3;
};
Button.prototype = new StageItem;
Button.prototype.objectType = "Item";
Button.prototype.innerType = "Item";
Button.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
Button.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.style = $(a).attr("style");
    this.connectdata = $(a).attr("connectdata");
    this.originalWidth = parseInt($(a).attr("width"));
    this.originalHeight = parseInt($(a).attr("height"));
    this.originalX = this.x;
    this.originalY = this.y;
    if (0 < $(a).children("data").children("textdata").children("vartext").length)this.textlib = $(a).children("data");
    b = $(a).children("data").children("textdata").children("vectortext").children("path");
    c = $(a).children("data").children("textdata").children("vectortext").children("pr");
    if (1 == b.length || 1 == c.length) {
        a = $(a).children("data").children("textdata").children("vectortext");
        if (null != $(a).attr("top"))this.originalRectShape = this.rectShape = new ppRect(parseInt($(a).attr("left")), parseInt($(a).attr("top")), parseInt($(a).attr("right")), parseInt($(a).attr("bottom")));
        this.content.path = 1 == c.length ? PathLib.getPathFromXML(c) : b.text();
    }
    this.canSimplify = !1;
};
Button.prototype.createBaseRef = StageItem.prototype.createRef;
Button.prototype.createRef = function() {
    if (this.ref || !this.createBaseRef())return!1;
    this.ref.addClass("interactive");
    if (1 < this.ref.children().length)return!1;
    this.contentRef = $('<div class="item unhideable"></div>');
    this.contentRef.css("width", "100%");
    this.ref.append(this.contentRef);
    var a = $("<canvas></canvas>");
    a.css("position", "absolute");
    this.ref.append(a);
    var b = $("<canvas></canvas>");
    b.css("position", "relative");
    this.ref.append(b);
    this.jcanvas = b;
    this.border = a.get(0);
    this.canvas = b.get(0);
    this.render("btn_bg");
    this.ref.get(0).item = this;
    this.ref.css("width", this.width - 2);
    this.ref.css("height", this.height - 2);
    return!0;
};
Button.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
Button.prototype.destroyRef = function() {
    this.ref.empty();
    this.contentRef.remove();
    this.contentRef = null;
    this.destroyBaseRef();
};
Button.prototype.bindEventsBase = StageItem.prototype.bindEvents;
Button.prototype.bindEvents = function() {
    var a = this;
    this.bindEventsBase();
    this.ref.bind("mouseover", function() { a.render("btn_hover"); });
    this.ref.bind("mouseout mouseup", function() { a.render("btn_bg"); });
    this.ref.bind("mousedown", function() { a.render("btn_down"); });
};
Button.prototype.renderCallback = function() {
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    this.render("btn_bg");
};
Button.prototype.render = function(a) { this.ref && (this.colors[a] && this.colors[a].apply(this.ref, this, !0, !1), this.colors.btn_border && this.ref.css("border-color", this.colors.btn_border.toColorString()), this.renderVectorForeground(a)); };
Button.prototype.renderVectorForeground = VectorShape.prototype.render;
Button.prototype.renderCanvas = function(a) {
    if (this.ref) {
        var b = this.border.getContext("2d"), c = parseInt(900 * Math.random() + 1100) % 1E3;
        b.fillStyle = "#" + c;
        b.fillStyle = "#fff";
        b.lineWidth = 1;
        b.strokeStyle = "#ccc";
        c = b.createLinearGradient(0, 0, 0, this.height);
        c.addColorStop(0, "#fcfcfc");
        c.addColorStop(1, "#eaeaea");
        b.fillStyle = c;
        this.colors[a] && this.colors[a].applyCanvas(b, this, !0, !1);
        b.fillRect(0.5, 0.5, this.width, this.height - 1);
        b.strokeRect(0.5, 0.5, this.width, this.height - 1);
    }
};
var ImageItem = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.type = "image";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.deferredResourceIndex = 0;
    this.canvas = null;
    this.m_nYOffset = this.m_nXOffset = 0;
    this.height = this.width = 1E3;
};
ImageItem.prototype = new StageItem;
ImageItem.prototype.objectType = "Item";
ImageItem.prototype.innerType = "Image";
ImageItem.extractAnimatedGif = function(a) {
    var b = null;
    $(a).children("imagelib").children("imagedata").each(function(a, d) {
        var e = $(d).attr("altimage");
        e && e.indexOf(".gif") == e.length - 4 && (b = e);
    });
    return b;
};
ImageItem.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
ImageItem.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.zoomtype = $(a).attr("zoomtype");
    this.btnxpos = parseInt($(a).attr("btnxpos"));
    this.btnypos = parseInt($(a).attr("btnypos"));
    if (0 < $(a).children("zoomdata").children("imagedata").length)
        this.zoomSrc = player.basepath + $(a).children("zoomdata").children("imagedata").attr("url"), this.zoomType = $(a).children("zoomdata").children("imagedata").attr("type"), this.zoomWidth = parseInt($(a).children("zoomdata").children("imagedata").attr("width")),
            this.zoomHeight = parseInt($(a).children("zoomdata").children("imagedata").attr("height"));
    if (0 < $(a).children("zoomdata").children("html5data").length)this.zoomSrc = player.basepath + "mobile/" + $(a).children("zoomdata").children("html5data").attr("url");
    this.canSimplify = !1;
};
ImageItem.prototype.loadContentFromXML = function(a) {
    this.content.src = Element.PixelSrc;
    var b = $(a).find("html5data");
    this.content.mask = b.attr("mask");
    this.content.maskref = b.attr("maskref");
    var c;
    0 < b.length && b.attr("url") && (c = "mobile/" + b.attr("url"));
    c || (c = $(a).children("zoomdata").children("imagedata").attr("url"));
    c || (c = $(a).children("data").children("imagedata").attr("url"));
    if (c && (this.content.src = player.basepath + c, this.content.src.indexOf(".swf") == this.content.src.length - 4))
        this.content.src = this.content.src.replace(".swf",
            ".png"), this.content.src = this.content.src.replace("story_content", "mobile");
    0 < $(a).children("imagelib").length && this.loadImageDataFromXML(a);
};
ImageItem.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
ImageItem.prototype.destroyRef = function() {
    if (this.zoomButton)this.zoomButton.remove(), this.zoomButton = null, this.zoomImage.remove(), this.zoomImage = null;
    this.destroyBaseRef();
};
ImageItem.prototype.createBaseRef = StageItem.prototype.createRef;
ImageItem.prototype.createRef = function() {
    var a = this;
    if (this.ref || !this.createBaseRef())return!1;
    this.loadContentFromXML(this.xml, this.slide, this.layer);
    this.contentRef = $('<image class="item unhideable"></image>');
    this.contentRef.attr("width", this.width);
    this.contentRef.attr("height", this.height);
    this.contentRef.attr("src", this.content.src);
    this.ref.append(this.contentRef);
    this.ref.get(0).item = this;
    if (this.zoomType) {
        var b = $("<div class='zoombutton'><div class='zoombuttoninner'></div></div>");
        b.css("left",
            this.btnxpos);
        b.css("top", this.btnypos);
        b.css("z-index", this.depth);
        var c = $("<image class='zoomimage'/>");
        c.attr("src", this.zoomSrc);
        c.attr("width", this.zoomWidth);
        c.attr("height", this.zoomHeight);
        $(document.body).append(c);
        c.hide();
        this.ref.click(function() {
            var b = a.zoomWidth, e = a.zoomHeight, f = b / e;
            if (f > player.frame.aspectRatio && b > player.frame.containerWidth)b = player.frame.containerWidth, e = player.frame.containerWidth * a.zoomHeight / a.zoomWidth;
            else if (f <= player.frame.aspectRatio && e > player.frame.containerHeight)
                e =
                    player.frame.containerHeight, b = player.frame.containerHeight / a.zoomHeight * a.zoomWidth;
            var f = a.ref.offset().left + a.width / 2 - b / 2, g = a.ref.offset().top + a.height / 2 - e / 2;
            if (f < player.frame.containerLeft)f = player.frame.containerLeft;
            if (g < player.frame.containerTop)g = player.frame.containerTop;
            f + b > player.frame.containerLeft + player.frame.containerWidth && (f = f - (f + b) + (player.frame.containerLeft + player.frame.containerWidth));
            g + e > player.frame.containerTop + player.frame.containerHeight && (g = g - (g + e) + (player.frame.containerTop +
                player.frame.containerHeight));
            c.css("width", b);
            c.css("height", e);
            c.css("left", f);
            c.css("top", g);
            c.show();
            MouseEvents.addHideable(".zoomimage", ".zoombutton,.image", function() {
                $(".zoomimage").hide();
                $(".interstitial").hide();
                player.showingInterstitial = !1;
            });
            $(".interstitial").removeClass("black");
            $(".interstitial").unbind();
            $(".interstitial").show();
        });
        this.ref.addClass("interactive");
        this.ref.addClass("clickable");
        this.ref.append(b);
        this.zoomButton = b;
        this.zoomImage = c;
    }
    return!0;
};
ImageItem.prototype.render = function() {};
var ItemGroup = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.active = !0;
    this.visible = !1;
};
ItemGroup.prototype = new StageItem;
ItemGroup.prototype.innerType = "ItemGroup";
ItemGroup.prototype.objectType = "Item";
ItemGroup.prototype.loadFromXML = function(a) {
    this.id = $(a).attr("id");
    this.xml = a;
    this.loadElementInfoFromXML(a);
    this.loadSizeFromXML(a);
    if (0 < $(this.xml).children("dragdrop").length && ("true" == $(this.xml).children("dragdrop").first().attr("dragenabled") && this.convertToDragItem(this.xml), "true" == $(this.xml).children("dragdrop").first().attr("dropenabled") && this.convertToDropArea(this.xml), "true" == $(this.xml).children("dragdrop").first().attr("dragoverenabled")))this.announceDragOver = !0, this.setupDragOver(this.xml);
    this.loadChildrenFromXML(a, this.slide, this.layer, function(a) { a.canSimplify = !1; });
    this.canSimplify = !1;
};
ItemGroup.prototype.renderForeground = function() {};
ItemGroup.prototype.isPointActive = function(a, b, c, d) {
    var e = !1;
    $.each(this.children, function(f, g) { g != c && (e = e || g.isPointActive(a, b, c, d)); });
    return e;
};
var ShuffleGroup = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.active = !0;
    this.visible = !1;
};
ShuffleGroup.prototype = new ItemGroup;
ShuffleGroup.prototype.innerType = "ShuffleGroup";
ShuffleGroup.prototype.objectType = "Item";
ShuffleGroup.ShuffleArray = function(a) {
    for (var b, c, d = a.length; d; b = Math.floor(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
    return a;
};
ShuffleGroup.SortObjectArray = function(a, b) {
    var c = [];
    $.each(a, function(a, e) {
        for (var f = 0; f < c.length; f++)
            if (e[b] < c[f][b]) {
                c.splice(f, 0, e);
                return;
            }
        c.push(e);
    });
    return c;
};
ShuffleGroup.prototype.loadBaseFromXML = ItemGroup.prototype.loadFromXML;
ShuffleGroup.prototype.loadFromXML = function(a) {
    var b = this;
    b.xml = a;
    this.loadBaseFromXML(a);
    this.shuffleAttr = $(a).attr("shuffle");
    this.canSimplify = !1;
    $.each(this.children, function(a, d) { d.shuffleGroup = b; });
};
ShuffleGroup.prototype.createBaseRef = StageItem.prototype.createRef;
ShuffleGroup.prototype.createRef = function() {
    var a = this.createBaseRef();
    this.ref.addClass("unhideable");
    return a;
};
ShuffleGroup.prototype.baseShow = ShuffleGroup.prototype.show;
ShuffleGroup.prototype.show = function(a, b, c) {
    this.baseShow(a, b, c);
    "false" != this.shuffleAttr && this.shuffle();
};
ShuffleGroup.prototype.shuffle = function() {
    if (!("true" != this.shuffleAttr || this.shuffled)) {
        if (0 < $(this.xml).find("droplist").length)this.shuffleDropLists();
        else {
            var a = [];
            $.each(this.children, function(b, c) {
                c.shuffleX = c.x - c.xoffset;
                c.shuffleY = c.y - c.yoffset;
                a.push(c);
            });
            this.ShuffleObjects(a);
        }
        this.shuffled = !0;
    }
};
ShuffleGroup.prototype.shuffleDropLists = function() {
    var a = this;
    $.each(this.children, function(b, c) { "droplist" == c.innerType && (a.shuffleSelect(c.select.get(0)), c.update()); });
};
ShuffleGroup.prototype.shuffleSelect = function(a) {
    for (var b = a.options, c = [], d = b.length - 1; 0 <= d; d--)c.push(b[d]), $(b[d]).remove();
    for (; c.length;)d = c.splice(this.getRandomIndex(c), 1)[0], b.add(d);
    a.selectedIndex = 0;
};
ShuffleGroup.prototype.shuffleRows = function() {
    if (!this.shuffled) {
        this.shuffled = !0;
        var a = {}, b = [], c = [];
        $.each(this.children, function(d, f) {
            a[f.x] && (a = {}, b.push(c), c = []);
            c.push(f);
            a[f.x] = f;
        });
        b.push(c);
        for (var d = 0; 10 > d; d++)this.swapRow(this.getRandomMember(b), this.getRandomMember(b));
        $.each(this.children, function(a, b) {
            b.shuffled = !0;
            b.shuffleX = b.x - b.xoffset;
            b.shuffleY = b.y - b.yoffset;
        });
    }
};
ShuffleGroup.prototype.getRandomIndex = function(a) { return parseInt(Math.random() * a.length); };
ShuffleGroup.prototype.getRandomMember = function(a) {
    var b = this.getRandomIndex(a);
    return a[b];
};
ShuffleGroup.prototype.swapRow = function(a, b) {
    var c = this;
    a != b && $.each(a, function(a, e) { c.swapItem(e, b[a]); });
};
ShuffleGroup.prototype.swapItem = function(a, b, c) {
    if (!(a == b || !a || !b)) {
        var d = a.y, e = a.x;
        a.y = b.y;
        b.y = d;
        a.originalY = a.y;
        b.originalY = b.y;
        a.ref.css("top", a.y + "px");
        b.ref.css("top", b.y + "px");
        if (c)a.x = b.x, b.x = e, a.originalX = a.x, b.originalX = b.x, a.ref.css("left", a.x + "px"), b.ref.css("left", b.x + "px");
        a.updateMatrixComplete(!0);
        b.updateMatrixComplete(!0);
    }
};
ShuffleGroup.prototype.ShuffleObjects = function(a) {
    for (var b = [], c = null, d = null, c = void 0, e = 0, d = 0, f = [], e = 0; e < a.length; e++)f.push(ppRect.FromWidthHeight(a[e].shuffleX, a[e].shuffleY, a[e].width, a[e].height));
    var g = ShuffleGroup.ShuffleArray(a);
    if (this.CheckDisplayDown(a, b)) {
        a = ShuffleGroup.SortObjectArray(a, "y");
        for (e = 0; e < a.length; e++)
            if (a[e].shufflelock) {
                c = g[e];
                for (d = 0; d < g.length && !(g[d] == a[e]); d++);
                g[e] = g[d];
                g[d] = c;
            }
        g[0].shuffleX = "right" == b[1].HAlign ? a[0].shuffleX + a[0].width - g[0].width : a[0].shuffleX;
        g[0].shuffleY =
            a[0].shuffleY;
        for (e = 1; e < g.length; e++)
            switch (c = g[e], d = g[e - 1], c.shuffleY = d.shuffleY + d.height + b[e].yoffset, b[e].HAlign) {
            case "left":
                c.shuffleX = d.shuffleX;
                break;
            case "right":
                c.shuffleX = d.shuffleX + d.width - c.width;
                break;
            case "xoffset":
                c.shuffleX = d.shuffleX + b[e].xoffset;
                break;
            case "woffset":
                c.shuffleX = d.shuffleX + d.width + b[e].xoffset;
            }
    } else if (this.CheckDisplayAcross(a, b)) {
        a = ShuffleGroup.SortObjectArray(a, "x");
        for (e = 0; e < a.length; e++)
            if (a[e].shufflelock) {
                c = g[e];
                for (d = 0; d < g.length && !(g[d] == a[e]); d++);
                g[e] = g[d];
                g[d] = c;
            }
        g[0].shuffleX = a[0].shuffleX;
        g[0].shuffleY = a[0].shuffleY;
        for (e = 1; e < g.length; e++)
            switch (c = g[e], d = g[e - 1], c.shuffleX = d.shuffleX + d.width + b[e].xoffset, b[e].VAlign) {
            case "top":
                c.shuffleY = d.shuffleY;
                break;
            case "bottom":
                c.shuffleY = d.shuffleY + d.height - c.height;
                break;
            case "yoffset":
                c.shuffleY = d.shuffleY + b[e].yoffset;
                break;
            case "xoffset":
                c.shuffleY = d.shuffleY + d.height + b[e].yoffset;
            }
    } else {
        for (e = 0; e < a.length; e++)
            if (a[e].shufflelock) {
                c = g[e];
                for (d = 0; d < g.length && !(g[d] == a[e]); d++);
                g[e] = g[d];
                g[d] = c;
            }
        for (e = 0; e <
            g.length; e++)g[e].shuffleX = f[e].left, g[e].shuffleY = f[e].top;
    }
    for (e = 0; e < a.length; e++)b = a[e], b.shuffled = !0, b.x = b.shuffleX + b.xoffset, b.y = b.shuffleY + b.yoffset, b.ref && b.applySize(b.ref), b.updateMatrixComplete(!0);
};
ShuffleGroup.prototype.CompareYPos = function(a, b) { return a.shuffleY > b.shuffleY ? 1 : a.shuffleY < b.shuffleY ? -1 : 0; };
ShuffleGroup.prototype.CheckDisplayDown = function(a, b) {
    var c = !0, a = ShuffleGroup.SortObjectArray(a, "y");
    b[0] = {};
    for (var d = 1; d < a.length; d++)
        if (a[d].shuffleY < a[d - 1].shuffleY + 0.75 * a[d - 1].height) {
            c = !1;
            break;
        } else
            b[d] = {}, b[d].yoffset = a[d].shuffleY - (a[d - 1].shuffleY + a[d - 1].height), a[d - 1].shuffleX == a[d].shuffleX ? b[d].HAlign = "left" : a[d - 1].shuffleX + a[d - 1].width == a[d].shuffleX + a[d].width ? b[d].HAlign = "right" : a[d - 1].shuffleX + a[d - 1].width > a[d].shuffleX ? (b[d].HAlign = "xoffset", b[d].xoffset = a[d].shuffleX - a[d - 1].shuffleX) :
            (b[d].HAlign = "woffset", b[d].xoffset = a[d].shuffleX - (a[d - 1].shuffleX + a[d - 1].width));
    return c;
};
ShuffleGroup.prototype.CheckDisplayAcross = function(a, b) {
    var c = !0, a = ShuffleGroup.SortObjectArray(a, "x");
    b[0] = {};
    for (var d = 1; d < a.length; d++)
        if (a[d].shuffleX < a[d - 1].shuffleX + a[d - 1].width) {
            c = !1;
            break;
        } else
            b[d] = {}, b[d].xoffset = a[d].shuffleX - (a[d - 1].shuffleX + a[d - 1].width), a[d - 1].shuffleY == a[d].shuffleY ? b[d].VAlign = "top" : a[d - 1].shuffleY + a[d - 1].height == a[d].shuffleY + a[d].height ? b[d].VAlign = "bottom" : a[d - 1].shuffleY + a[d - 1].height > a[d].shuffleY ? (b[d].VAlign = "yoffset", b[d].yoffset = a[d].shuffleY - a[d - 1].shuffleY) :
            (b[d].VAlign = "xoffset", b[d].yoffset = a[d].shuffleY - (a[d - 1].shuffleY + a[d - 1].height));
    return c;
};
var ScrollArea = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.active = !0;
    this.visible = !1;
};
ScrollArea.prototype = new ItemGroup;
ScrollArea.prototype.innerType = "ScrollArea";
ScrollArea.prototype.objectType = "Item";
ScrollArea.prototype.loadBaseFromXML = ItemGroup.prototype.loadFromXML;
ScrollArea.prototype.loadFromXML = function(a) {
    var b = this;
    b.xml = a;
    this.loadBaseFromXML(a);
    $(b.xml).children("background").each(function(a, d) {
        b.background = new Background(b.ref);
        b.background.loadFromXML(d);
    });
    this.canSimplify = !1;
    $.each(this.children, function(a, d) { d.ScrollArea = b; });
};
ScrollArea.prototype.baseShow = ScrollArea.prototype.show;
ScrollArea.prototype.show = function(a, b, c) { this.baseShow(a, b, c); };
ScrollArea.prototype.createRef = function() {
    if (!this.parent.ref)return this.parent.createRef(), !1;
    this.container = this.parent.ref;
    if (this.ref)return this.render(null, !1, null, "StageItem createRef"), !1;
    var a = this;
    this.ref = $('<div class="item scrollarea"></div>');
    this.ref.addClass(this.type);
    this.ref.addClass(this.innerType.toLowerCase());
    this.ref.addClass("item_" + this.id);
    this.ref.attr("id", "item_" + this.id);
    player.showItemInfo && this.ref.append($('<div class="itemid">' + this.id + "</div>"));
    this.applySize(this.ref);
    this.container.append(this.ref);
    this.ref.get(0).item = this;
    a.background && a.background.apply(a.ref);
    $.each(this.children, function(a, c) { c.createRef && c.createRef(); });
    a.visible = !1;
    this.ref.bind("scroll", function() {
        var b = a.ref.get(0);
        b.style.cssText += ";-webkit-transform:rotateZ(0deg)";
        player.uselessOffsetHeight = b.offsetHeight;
        b.style.cssText += ";-webkit-transform:none";
        a.updateMatrixComplete(!0);
    });
    -1 < navigator.userAgent.indexOf("AppleWebKit") && -1 < navigator.userAgent.indexOf("Macintosh") && a.ref.css("border",
        "solid 1px transparent");
    return!0;
};
var StateGroup = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.active = !0;
    this.visible = !1;
};
StateGroup.prototype = new ItemGroup;
StateGroup.prototype.innerType = "StateGroup";
StateGroup.prototype.loadFromXML = function(a) {
    var b = this;
    this.id = $(a).attr("id");
    this.xml = a;
    this.loadElementInfoFromXML(a);
    this.loadSizeFromXML(a);
    if (0 < $(this.xml).children("dragdrop").length && ("true" == $(b.xml).children("dragdrop").first().attr("dragenabled") && b.convertToDragItem(b.xml), "true" == $(b.xml).children("dragdrop").first().attr("dropenabled") && b.convertToDropArea(b.xml), "true" == $(b.xml).children("dragdrop").first().attr("dragoverenabled")))this.announceDragOver = !0, b.setupDragOver(b.xml);
    this.loadChildrenFromXML(a,
        b.slide, b.layer, function(a) {
            a.canSimplify = !1;
            a.group = b;
        });
    this.canSimplify = !1;
    this.actionstates = {};
    this.actionstateindices = {};
    $(a).children("actionstates").children().each(function(a, d) {
        var e = $(d).attr("name"), f = $(d).children("actions").children();
        b.actionstates[e] = f;
        b.actionstateindices[e] = a;
    });
};
StateGroup.prototype.render = VectorShape.prototype.render;
StateGroup.prototype.executeStateActions = function(a) {
    var b = this;
    (a = b.actionstates[a]) && $.each(a, function(a, d) { b.runAction(d); });
};
var ExpandingLabel = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.events = [];
    this.active = !0;
    this.showContent = this.showTitle = this.visible = !1;
    this.VAR_EXPANDED = "_expanded";
    this.GROW_TITLE_TIME = 250;
    this.GROW_CONTENT_TIME = 500;
    this.ARROW_HEIGHT = 18;
    this.FILL_BORDER = "border";
    this.FILL_BG = "bg";
    this.borderwidth = 1;
    this.arrowxpos = this.arrowypos = 0;
    this.m_strAlign = "top";
    this.m_nContentHeight = 0;
    this.m_nRadius = 8;
    this.m_nTitleHeight = 80;
    this.m_bHideTitleOnComplete =
        this.m_bShowContentOnComplete = this.m_bAnimatingContentOut = this.m_bAnimatingContentIn = this.m_bAnimatingTitleOut = this.m_bAnimatingTitleIn = this.m_bContentShowing = this.m_bTitleShowing = !1;
    this.m_nGrowStartTime = 0;
    this.m_nTextHeight = 30;
    this.m_nMarginRight = this.m_nMarginLeft = 5;
    this.m_nMarginRightTitle = 20;
    this.m_nMarginText = this.m_nMarginBottom = this.m_nMarginTop = 5;
    this.m_nHotspotHeight = 0;
    this.m_bShowCloseButton = !1;
};
ExpandingLabel.prototype = new StageItem;
ExpandingLabel.prototype.innerType = "ExpandingLabel";
ExpandingLabel.prototype.objectType = "Item";
ExpandingLabel.prototype.extractNextSpecialBool = function() { this.showContent = !0; };
ExpandingLabel.prototype.getExtraResumeVars = function() {
    this.variableResumes.VAR_EXPANDED = !0;
    this.variableDefaults.VAR_EXPANDED = !1;
    this.variableTypes.VAR_EXPANDED = "bool";
    return{ VAR_EXPANDED: this.showContent };
};
ExpandingLabel.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
ExpandingLabel.prototype.loadFromXML = function(a, b, c) {
    var d = $(a).children("objects");
    d.remove();
    this.loadBaseFromXML(a, b, c);
    $(a).append(d);
    this.id = $(a).attr("id");
    this.xml = a;
    this.borderwidth = parseInt($(a).attr("borderwidth"));
    this.contentheight = parseInt($(a).attr("contentheight"));
    this.arrowxpos = parseInt($(a).attr("arrowxpos"));
    this.arrowypos = parseInt($(a).attr("arrowypos"));
    this.showclosebutton = "true" == $(a).attr("showclosebutton");
    this.hasContent = 0 < $(a).children("objects").length;
    this.width += 8;
    this.height +=
        8;
    if (0 > this.arrowypos) {
        this.m_strAlign = "top";
        if (0 > this.arrowxpos)this.arrowxpos = 0;
        if (this.arrowxpos > this.width)this.arrowxpos = this.width;
        this.arrowypos = this.ARROW_HEIGHT;
    } else if (this.arrowypos > this.height) {
        this.m_strAlign = "bottom";
        if (0 > this.arrowxpos)this.arrowxpos = 0;
        if (this.arrowxpos > this.width)this.arrowxpos = this.width;
        this.arrowypos = this.height + this.ARROW_HEIGHT;
    } else if (this.arrowxpos > this.width)this.m_strAlign = "left", this.arrowxpos = this.width + this.ARROW_HEIGHT;
    else if (0 > this.arrowxpos)
        this.m_strAlign =
            "right", this.arrowxpos = this.ARROW_HEIGHT;
    this.loadChildrenFromXML(a, this.slide, this.layer, function(a) { a.canSimplify = !1; });
    this.canSimplify = !1;
};
ExpandingLabel.prototype.createBaseRef = StageItem.prototype.createRef;
ExpandingLabel.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
ExpandingLabel.prototype.renderForeground = VectorShape.prototype.renderForeground;
ExpandingLabel.prototype.renderVector = VectorShape.prototype.render;
ExpandingLabel.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = this;
    if (!this.createBaseRef())return!1;
    this.ref.addClass("expandinglabel interactive");
    this.ref.children().addClass("expandinglabelcontent");
    this.expandingLabelContent = this.ref.children();
    this.canvasWidth = a.width + 2 * a.borderwidth + a.ARROW_HEIGHT;
    this.canvasHeight = a.height + 2 * a.borderwidth + a.ARROW_HEIGHT;
    var b = $('<canvas class="content" width="' + this.canvasWidth + '" height="' + this.canvasHeight + '"></canvas>');
    b.css("position", "absolute");
    this.ref.append(b);
    this.backgroundCanvas = b.get(0);
    b = $('<canvas class="content expandinglabeltitlecanvas" width="' + this.canvasWidth + '" height="' + this.canvasHeight + '"></canvas>');
    b.css("position", "absolute");
    this.ref.append(b);
    this.jcanvas = b;
    this.canvas = b.get(0);
    this.contentRef = $('<div class="item unhideable expandinglabeltitle"></div>');
    this.contentRef.css("width", "100%");
    this.ref.prepend(this.contentRef);
    this.ref.css("width", a.width);
    this.ref.css("height", a.height);
    this.visible = !1;
    this.hide();
    setTimeout(function() {
        var b =
            a.id.replace("_expandinglabel", "");
        a.button = a.parent ? a.parent.children[b] : null;
        if (!a.button)a.button = { ref: $("<div/>") };
        a.button && a.button.ref && a.button.ref.addClass("interactive");
    }, 0);
    return!0;
};
ExpandingLabel.prototype.show = function(a, b, c) {
    this.createRef(this.parent.ref);
    if (this.visible) {
        var d = this;
        if (b) {
            if (!c || 0 == b.duration)this.visible = !0, this.variables.Expanded = "true", d.ref.show(), d.handleEvent("ontransitionin", null, null, !1, !0), b.setTarget(this), b.apply(function() { d.handleEvent("ontransitionincomplete", null, null, !1, !0); });
        } else
            this.visible = !0, this.variables.Expanded = "true", d.ref.show(), d.handleEvent("ontransitionin", null, null, !1, !0), d.handleEvent("ontransitionincomplete", null, null, !1,
                !0);
    }
};
ExpandingLabel.prototype.hide = function(a, b) {
    this.visible = !1;
    this.variables.Expanded = "false";
    var c = this;
    c.handleEvent("ontransitionout", null, null, !1, !0);
    b ? (b.setTarget(this), b.apply(function() {
        c.ref && c.ref.hide();
        c.handleEvent("ontransitionoutcomplete", null, null, !1, !0);
    })) : (this.ref && this.ref.hide(), c.handleEvent("ontransitionoutcomplete", null, null, !1, !0));
};
ExpandingLabel.prototype.render = function(a, b) {
    this.renderVector(a, b);
    if (this.ref) {
        var c = this.width, d = this.showContent || !this.hasContent ? this.height : this.m_nTextHeight + this.m_nMarginTop + this.m_nMarginBottom;
        yoffset = xoffset = 0;
        var e = this.arrowypos;
        this.showContent ? (this.ref.css("top", this.y), this.expandingLabelContent.show()) : ("right" == this.m_strAlign || "left" == this.m_strAlign ? (e = this.arrowypos / this.height * d, this.ref.css("top", this.y + this.arrowypos - e)) : "bottom" == this.m_strAlign && this.ref.css("top", this.y +
            this.height - d), this.expandingLabelContent.hide());
        var f = this.backgroundCanvas.getContext("2d");
        f.lineWidth = this.borderwidth;
        this.colors[this.FILL_BORDER].applyCanvas(f, this, !1, !0);
        this.colors[this.FILL_BG].applyCanvas(f, this, !0, !1);
        f.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        f.save();
        f.translate(f.lineWidth / 2, f.lineWidth / 2);
        f.beginPath();
        $(this.canvas).css("margin", "8px 8px 0px " + (f.lineWidth + 8) + "px");
        switch (this.m_strAlign) {
        case "top":
            f.translate(0, this.ARROW_HEIGHT);
            $(this.backgroundCanvas).css("margin-top",
                -this.ARROW_HEIGHT + "px");
            this.DrawBottomCaption(f, 0, -this.ARROW_HEIGHT, c, d, this.m_nRadius, this.arrowxpos, this.ARROW_HEIGHT);
            break;
        case "bottom":
            $(this.canvas).css("margin-top", "-8px");
            $(this.backgroundCanvas).css("margin-top", "-8px");
            this.DrawTopCaption(f, 0, 0, c, d, this.m_nRadius, this.arrowxpos, this.ARROW_HEIGHT);
            break;
        case "left":
            $(this.canvas).css("margin-left", f.lineWidth - 8 + "px");
            $(this.backgroundCanvas).css("margin-left", "-8px");
            this.DrawLeftCaption(f, 0, 0, c, d, this.m_nRadius, e, this.ARROW_HEIGHT);
            break;
        case "right":
            f.translate(this.ARROW_HEIGHT, 0), $(this.backgroundCanvas).css("margin-left", -this.ARROW_HEIGHT + "px"), this.DrawRightCaption(f, -this.ARROW_HEIGHT, 0, c, d, this.m_nRadius, e, this.ARROW_HEIGHT);
        }
        f.fill();
        f.stroke();
        f.restore();
        this.renderForeground();
    }
};
ExpandingLabel.prototype.hideOthers = function() {
    var a = this;
    $(".expandinglabel").each(function(b, c) { c.item && c.item != a && c.item.hide(); });
};
ExpandingLabel.prototype.togglecontent = function() {
    this.showContent = !this.showContent;
    this.variables.Expanded = this.showContent.toString();
    this.showContent ? ($(".above").removeClass("above"), $(".showing").removeClass("showing"), this.hideOthers(), this.render(null, !0, this.width, this.height), this.visible = !0, this.show(), this.ref.addClass("above showing"), this.button.ref.addClass("above showing"), this.handleEvent("onobjectevent", "contentin", null, !1, !1, !0)) : (this.hide(), $(".above").removeClass("above"), this.handleEvent("onobjectevent",
        "contentout", null, !1, !1, !0));
};
ExpandingLabel.prototype.showcomplete = function() {
    this.showContent = !0;
    this.variables.Expanded = this.showContent.toString();
    $(".above").removeClass("above");
    $(".showing").removeClass("showing");
    this.hideOthers();
    this.render(null, !0, this.width, this.height);
    this.visible = !0;
    this.show();
    this.ref.addClass("above showing");
    this.button.ref.addClass("above showing");
    this.handleEvent("onobjectevent", "contentin");
};
ExpandingLabel.prototype.hidecomplete = function() {
    this.variables.Expanded = "false";
    this.hide();
    $(".above").removeClass("above");
    this.showTitle = this.showContent = !1;
};
ExpandingLabel.prototype.showtitle = function() {
    if (!this.showContent) {
        var a = this.m_nTextHeight + this.m_nMarginTop + this.m_nMarginBottom, b = this.height - a;
        this.showTitle = this.visible = !0;
        this.showContent = !1;
        this.variables.Expanded = "false";
        this.show();
        $(".above").removeClass("above");
        this.ref.addClass("above");
        this.button.ref.addClass("above");
        this.render(null, !0, this.width, a, 0, b);
    }
};
ExpandingLabel.prototype.hidetitle = function() { if (!this.showContent)this.showContent = this.showTitle = this.visible = !1, this.variables.Expanded = "false", this.hide(), $(".above").removeClass("above"); };
ExpandingLabel.prototype.DrawTopCaption = function(a, b, c, d, e, f, g, h) {
    0 > f && (f = 0);
    var j = g <= f + h / 2, k = g >= d - (f + h / 2), l = g - h / 2, m = d - (g + h / 2), n = 0;
    j && (l = g, m = d - (g + h));
    k && (l = g - h, m = d - g);
    0 > l && (l = 0);
    0 > m && (m = 0);
    l > d && (l = d);
    m > d && (m = d);
    var g = h / 2, p = 0, p = f;
    l + h > d && (n = h, h = n - (l + n - d) / 2, l -= (l + n - d) / 2);
    m + h > d && (n = h, h = n - (m + n - d) / 2, m -= (m + n - d) / 2);
    n = d - m;
    m < f && (n = d - f);
    a.moveTo(b + n, c);
    a.lineTo(b + d - p, c);
    a.arcTo(b + d, c, b + d, c + p, p);
    p = f;
    m < f && (p = m);
    a.lineTo(b + d, c + e - p);
    a.arcTo(b + d, c + e, b + d - p, c + e, p);
    p = f;
    a.lineTo(b + d - m, c + e);
    l < f && (p = l);
    j ? a.lineTo(b + l,
        c + e + h) : k ? a.lineTo(b + d - m, c + e + h) : a.lineTo(b + l + g, c + e + h);
    a.lineTo(b + l, c + e);
    a.lineTo(b + p, c + e);
    a.arcTo(b, c + e, b, c + e - p, p);
    p = f;
    a.lineTo(b, c + p);
    a.arcTo(b, c, b + p, c, p);
    a.lineTo(b + n, c);
};
ExpandingLabel.prototype.DrawBottomCaption = function(a, b, c, d, e, f, g, h) {
    0 > f && (f = 0);
    var j = g <= f + h / 2, k = g >= d - (f + h / 2), l = g - h / 2, m = d - (g + h / 2), n = 0;
    j && (l = g, m = d - (g + h));
    k && (l = g - h, m = d - g);
    0 > l && (l = 0);
    0 > m && (m = 0);
    l > d && (l = d);
    m > d && (m = d);
    var g = h / 2, p = 0, p = f;
    m < f && (p = m);
    l + h > d && (n = h, c += (l + n - d) / 2, h = n - (l + n - d) / 2, l -= (l + n - d) / 2);
    m + h > d && (n = h, c += (m + n - d) / 2, h = n - (m + n - d) / 2, m -= (m + n - d) / 2);
    n = d - m;
    a.moveTo(b + n, c + h);
    a.lineTo(b + d - p, c + h);
    a.arcTo(b + d, c + h, b + d, c + h + p, p);
    p = f;
    a.lineTo(b + d, c + e + h - p);
    a.arcTo(b + d, c + h + e, b + d - p, c + e + h, p);
    p = f;
    a.lineTo(b + p, c + h +
        e);
    a.arcTo(b, c + e + h, b, c + e + h - p, p);
    p = f;
    l < f && (p = l);
    a.lineTo(b, c + h + p);
    a.arcTo(b, c + h, b + p, c + h, p);
    a.lineTo(b + l, c + h);
    j ? a.lineTo(b + l, c) : k ? a.lineTo(b + d - m, c) : a.lineTo(b + l + g, c);
    a.lineTo(b + n, c + h);
};
ExpandingLabel.prototype.DrawLeftCaption = function(a, b, c, d, e, f, g, h) {
    0 > f && (f = 0);
    var j = g <= h / 2, k = g >= e - h / 2, l = g - h / 2, m = e - (g + h / 2), n = 0;
    j && (l = g, m = e - (g + h));
    k && (l = g - h, m = e - g);
    0 > l && (l = 0);
    0 > m && (m = 0);
    l > e && (l = e);
    m > e && (m = e);
    n = f;
    g = d / 2;
    a.moveTo(b + g, c);
    n = f;
    l < f && (n = l);
    a.lineTo(b + d - n, c);
    a.arcTo(b + d, c, b + d, c + n, n);
    m + h > e && (n = h, h = n - (m + n - e) / 2, m -= (m + n - e) / 2);
    if (l + h > e)var p = l, n = h, l = p - (p + n - e) / 2, h = n - (p + n - e) / 2;
    a.lineTo(b + d, c + l);
    j ? a.lineTo(b + d + h, c + l) : k ? a.lineTo(b + d + h, c + e - m) : a.lineTo(b + d + h, c + l + h / 2);
    a.lineTo(b + d, c + l + h);
    n = f;
    m < f && (n = m);
    a.lineTo(b + d, c + e - n);
    a.arcTo(b + d, c + e, b + d - n, c + e, n);
    n = f;
    a.lineTo(b + n, c + e);
    a.arcTo(b, c + e, b, c + e - n, n);
    n = f;
    a.lineTo(b, c + n);
    a.arcTo(b, c, b + n, c, n);
    a.lineTo(b + g, c);
};
ExpandingLabel.prototype.DrawRightCaption = function(a, b, c, d, e, f, g, h) {
    0 > f && (f = 0);
    var j = g <= h / 2, k = g >= e - h / 2, l = g - h / 2, m = e - (g + h / 2), n = 0;
    j && (l = g, m = e - (g + h));
    k && (l = g - h, m = e - g);
    0 > l && (l = 0);
    0 > m && (m = 0);
    l > e && (l = e);
    m > e && (m = e);
    n = f;
    g = d / 2;
    a.moveTo(b + h + g, c);
    a.lineTo(b + h + d - n, c);
    a.arcTo(b + h + d, c, b + h + d, c + n, n);
    a.lineTo(b + h + d, c + e - n);
    a.arcTo(b + h + d, c + e, b + h + d - n, c + e, n);
    n = f;
    m < f && (n = m);
    a.lineTo(b + h + n, c + e);
    a.arcTo(b + h, c + e, b + h, c + e - n, n);
    m + h > e && (n = h, b += (m + n - e) / 2, h = n - (m + n - e) / 2, m -= (m + n - e) / 2);
    l + h > e && (d = l, n = h, b += (d + n - e) / 2, l = d - (d + n - e) / 2, h =
        n - (d + n - e) / 2);
    a.lineTo(b + h, c + e - m);
    j ? a.lineTo(b, c + l) : k ? a.lineTo(b, c + e - m) : a.lineTo(b, c + l + h / 2);
    a.lineTo(b + h, c + l);
    n = f;
    l < f && (n = l);
    a.lineTo(b + h, c + n);
    a.arcTo(b + h, c, b + h + n, c, n);
    a.lineTo(b + h + g, c);
};
var SequenceCtrl = function(a, b, c) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.slide = b;
    this.layer = c;
    this.constructElement();
    this.events = [];
    this.active = !0;
    this.visible = !1;
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.deferredResourceIndex = 0;
    this.padY = 20;
    this.padX = 25;
    this.originalIndex = this.dropIndex = -1;
    this.indexedChildren = [];
};
SequenceCtrl.prototype = new StageItem;
SequenceCtrl.prototype.objectType = "Item";
SequenceCtrl.prototype.innerType = "SequenceCtrl";
SequenceCtrl.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
SequenceCtrl.prototype.shuffleRows = ShuffleGroup.prototype.shuffleRows;
SequenceCtrl.prototype.shuffleElements = ShuffleGroup.prototype.shuffleElements;
SequenceCtrl.prototype.getRandomMember = ShuffleGroup.prototype.getRandomMember;
SequenceCtrl.prototype.getRandomIndex = ShuffleGroup.prototype.getRandomIndex;
SequenceCtrl.prototype.swapRow = ShuffleGroup.prototype.swapRow;
SequenceCtrl.prototype.swapItem = ShuffleGroup.prototype.swapItem;
SequenceCtrl.prototype.extractNextSpecialVar = function(a) {
    for (var a = bwChunk.CreateChunk(a), a = new bwChunk(a), b = 0, c = 0; !a.EOF();) {
        var d = this.indexedChildren[a.NextUBase10(1)];
        d.y = b;
        this.variables["_pos" + c] = d.itemdata;
        b += d.height + this.padY;
        c++;
    }
};
SequenceCtrl.prototype.getExtraResumeVars = function() {
    this.variableResumes.VAR_ITEM_ORDER = !0;
    this.variableDefaults.VAR_ITEM_ORDER = "";
    this.variableTypes.VAR_ITEM_ORDER = "string";
    var a = "";
    if (this.ref) {
        var b = this.getOrderedItemList();
        $.each(b, function(b, d) { a += bwChunk.UBase10toN(d.sequenceIndex); });
    }
    return{ VAR_ITEM_ORDER: a };
};
SequenceCtrl.prototype.loadFromXML = function(a, b, c) {
    var d = this;
    this.loadBaseFromXML(a, b, c);
    this.loadSizeFromXML(a);
    this.shortid = $(a).attr("id").replace("list_", "");
    this.parent.children[this.shortid] = this;
    this.canSimplify = !1;
    var e = 10;
    $(a).children("data").children("itemlist").children().each(function(a, c) {
        var h = new SequenceItem(d.ref, b);
        h.offsetY = e;
        h.offsetX = d.padX;
        h.sequenceIndex = a;
        h.loadFromXML(c, b);
        h.width = d.width - d.padX - d.padX;
        h.parent = d;
        h.offsetParent = d;
        d.children[h.id] = h;
        d.indexedChildren[a] =
            h;
        e += h.height + d.padY;
        d.indicatorWidth = h.width;
        d.indicatorOffsetX = h.x;
    });
};
SequenceCtrl.prototype.createBaseRef = StageItem.prototype.createRef;
SequenceCtrl.prototype.createRef = function() {
    var a = this;
    if (a.ref)return!1;
    this.container = this.parent.ref;
    this.ref = $('<div class="item sequencectrl interactive"></div>');
    this.container.append(this.ref);
    this.applySize(this.ref);
    this.indicator = $('<div class="sequenceindicator"></div>');
    this.indicator.css("width", this.width);
    this.container.append(this.indicator);
    this.contentRef = this.ref;
    this.ref.get(0).item = this;
    this.indicator.css("left", this.x + this.indicatorOffsetX);
    this.indicator.css("width", this.indicatorWidth);
    var b = 0;
    $.each(a.children, function(c, d) {
        d.createRef();
        a.appendLineNumber(b++, d);
    });
    this.shuffleRows();
    this.ref.bind("scroll", function() {
        var b = a.ref.get(0);
        if (b.scrollHeight <= b.scrollTop + a.height)a.hasScrolledToEnd = !0;
        b = a.ref.get(0);
        b.style.cssText += ";-webkit-transform:rotateZ(0deg)";
        player.uselessOffsetHeight = b.offsetHeight;
        b.style.cssText += ";-webkit-transform:none";
        a.updateMatrixComplete(!0);
    });
    this.slide.ref.bind("scroll", function() { this.scrollLeft = this.scrollTop = 0; });
    this.updateScore();
    return!0;
};
SequenceCtrl.prototype.appendLineNumber = function(a, b) {
    var c = b.offsetY, d = $('<div class="sequencelinenumber"></div>');
    d.text(a + 1 + ".");
    d.css("top", -1E3);
    $(document.body).append(d);
    var e = d.height();
    0 < e && e < b.height && (c += (b.height - e) / 2);
    d.css("top", c);
    this.variables.ReviewMode && d.addClass("correct");
    this.ref.append(d);
};
SequenceCtrl.prototype.getOrderedItemList = function() {
    var a = [];
    $.each(this.children, function(b, c) {
        for (var d = !1, e = 0; e < a.length; e++)
            if (!d && c.y < a[e].y) {
                a.splice(e, 0, c);
                d = !0;
                break;
            }
        d || a.push(c);
    });
    return a;
};
SequenceCtrl.prototype.updateScore = function() {
    var a = this, b = a.getOrderedItemList();
    $.each(b, function(b, d) {
        a.variables["_pos" + b] = d.itemdata;
        d.currentIndex = b;
    });
};
SequenceCtrl.prototype.set_review = function() {
    var a = this.ref.children(".sequencelinenumber"), b = this.getOrderedItemList();
    $.each(b, function(b, d) { d.sequenceIndex == b ? $(a[b]).addClass("correct") : $(a[b]).addClass("incorrect"); });
};
SequenceCtrl.prototype.showBase = StageItem.prototype.show;
SequenceCtrl.prototype.show = function(a, b, c, d) { this.parent.ref && (this.render(), this.showBase(a, b, c, d), d || $.each(this.children, function(d, f) { f.show && (f.ref.show(), f.render(), f.show(a, b, c)); })); };
SequenceCtrl.prototype.Viewed = function() { return"true"; };
SequenceCtrl.prototype.Viewed = function() { return!this.ref ? "false" : this.ref.get(0).scrollHeight <= this.height || this.hasScrolledToEnd ? "true" : "false"; };
var SequenceItem = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "item";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
    this.offsetY = this.offsetX = this.deferredResourceIndex = 0;
    this.canvas = null;
    this.m_nYOffset = this.m_nXOffset = 0;
    this.m_nHeight = this.m_nWidth = 1E3;
};
SequenceItem.prototype = new StageItem;
SequenceItem.prototype.objectType = "Item";
SequenceItem.prototype.innerType = "SequenceItem";
SequenceItem.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
SequenceItem.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.id = $(a).attr("itemdata").split("_")[1];
    this.itemdata = $(a).attr("itemdata");
    this.width = parseInt($(a).children("textdata").first().attr("width"));
    this.height = parseInt($(a).children("textdata").first().attr("height"));
    this.x = this.offsetX;
    this.y = this.offsetY;
    this.originalWidth = this.width;
    this.originalHeight = this.height;
    this.canSimplify = !1;
    b = new Background(this.ref);
    b.rotation = "90";
    b.fillType = "linear";
    b.stops.push(b.parseStop('<color rgb="0xBBF8FB" alpha="100" stop="0" />'));
    b.stops.push(b.parseStop('<color rgb="0xA5E8EB" alpha="100" stop="100" />'));
    this.colors.hover = b;
    b = $(a).children("textdata");
    a = $(a).children("textdata").children("vectortext");
    c = a.children("pr");
    if (1 == c.length) {
        this.textSprite = { canvas: null, m_nXOffset: 0, m_nYOffset: 0, width: 1E3, height: 1E3, charIndex: 0, maxCharIndex: 0, vectorHot: !1, isShapeMask: !1 };
        if (null != $(a).attr("top"))
            this.textSprite.x = $(b).attr("xpos"), this.textSprite.y = $(b).attr("ypos"), this.textSprite.width = $(b).attr("width"), this.textSprite.height =
                $(b).attr("height"), this.textSprite.rectShape = new ppRect(parseInt($(a).attr("left")), parseInt($(a).attr("top")), parseInt($(a).attr("right")), parseInt($(a).attr("bottom"))), this.textSprite.rectShape.right = Math.max(this.textSprite.rectShape.right, this.width), this.textSprite.rectShape.bottom = Math.max(this.textSprite.rectShape.bottom, this.height), this.textSprite.originalRectShape = this.rectShape;
        this.textSprite.path = PathLib.getPathFromXML(c);
    }
};
SequenceItem.prototype.createBaseRef = StageItem.prototype.createRef;
SequenceItem.prototype.createRef = function() {
    if (this.ref)return this.render(), !1;
    this.container = this.parent.ref;
    this.ref = $('<div class="item sequenceitem interactive"></div>');
    this.container.append(this.ref);
    this.ref.css("left", this.x + "px");
    this.ref.css("top", this.y + "px");
    this.ref.css("width", this.width + "px");
    this.ref.css("height", this.height + "px");
    this.contentRef = $('<div class="item unhideable"></div>');
    this.contentRef.css("margin", "4px 20px");
    var a = $('<canvas class="content"></canvas>');
    a.css("position",
        "relative");
    this.ref.append(a);
    this.canvas = a.get(0);
    $(this.ref).css("width", this.width);
    $(this.ref).css("height", this.height);
    $(this.canvas).attr("width", this.width);
    $(this.canvas).attr("height", this.height);
    this.textSprite ? (a = $("<canvas></canvas>"), a.css("position", "absolute"), a.css("left", this.textSprite.x + "px"), a.css("top", this.textSprite.y + "px"), a.attr("width", this.width + "px"), a.attr("height", this.height + "px"), a.attr("id", this.id + "_text"), this.ref.append(a), this.textSprite.canvas = a.get(0), this.textRef =
        a) : this.ref.append(this.contentRef);
    this.textTemplate = "<span>" + this.textlib.children("textdata").attr("lmstext") + "</span>";
    this.renderTextTemplate();
    this.ref.get(0).item = this;
    this.convertToDragItem(this.xml);
    this.style = "sequence";
    this.dragreturn = !0;
    this.initDrag();
    this.render = SequenceItem.prototype.renderOverride;
    this.updateDragPosition = SequenceItem.prototype.updateDragPositionOverride;
    this.findDropArea = SequenceItem.prototype.findDropAreaOverride;
    this.mouseupCallback = SequenceItem.prototype.Drop;
    this.show();
    return!0;
};
SequenceItem.prototype.updateDragPositionOverride = function() {
    if (!this.ghost)this.ghost = this.ref.clone(), this.ghost.css("opacity", 0.7), this.ghost.css("z-index", 1E3), this.parent.container.append(this.ghost), this.ghostCanvas = this.ghost.find("canvas").get(0);
    var a = this.parent.ref.get(0).scrollTop, b = this.x + this.dragX + this.parent.x, a = this.getScrolledY() + this.parent.y - a;
    this.ghost.show();
    this.ghost.css("left", b);
    this.ghost.css("top", a);
    this.render("", this.ghostCanvas);
    this.render("hover", this.canvas);
};
SequenceItem.prototype.renderCallback = function() {};
SequenceItem.prototype.renderOverride = function(a, b) {
    var b = b || this.canvas, c = b.getContext("2d"), d = parseInt(900 * Math.random() + 1100) % 1E3;
    c.fillStyle = "#" + d;
    c.fillStyle = "#fff";
    c.lineWidth = 1;
    c.strokeStyle = "#C7C7C7";
    d = c.createLinearGradient(0, 0, 0, this.height);
    d.addColorStop(0, "#fcfcfc");
    d.addColorStop(1, "#eaeaea");
    c.fillStyle = d;
    this.colors[a] && this.colors[a].applyCanvas(c, this, !0, !1);
    d = this.height / 2;
    c.beginPath();
    c.moveTo(d + 0.5, 0.5);
    c.lineTo(this.width - d - 0.5, 0.5);
    c.arc(this.width - d - 0.5, d, d, 3 * Math.PI / 2, Math.PI /
        2);
    c.lineTo(d + 0.5, this.height - 0.5);
    c.arc(d + 0.5, d, d, Math.PI / 2, 3 * Math.PI / 2);
    c.fill();
    c.save();
    c.clip();
    c.strokeStyle = "#fff";
    c.lineWidth = 3.4;
    c.stroke();
    c.restore();
    if (this.colors[a])c.strokeStyle = this.colors[a].stops[0].color;
    c.stroke();
    if (this.textSprite)c = new ppTextLib(this.xml), ppArt.itemID = this.id, ppArt.item = this, ppArt.m_bMaskMode = !1, ppArt.DrawVector(this.textSprite, this.textSprite.path, c, player.fontlib, this.imagelib, null, null);
};
SequenceItem.prototype.getScrolledY = function() {
    var a = this.downScrollTop || 0;
    return this.y + this.dragY + this.parent.ref.get(0).scrollTop - a;
};
SequenceItem.prototype.findDropAreaOverride = function() {
    for (var a = this.parent.getOrderedItemList(), b = -1, c = this.getScrolledY(), d = this.parent.y, e = a.length - 1; 0 <= e; e--) {
        var f = a[e];
        c < f.y + f.height / 2 && (b = e, d = this.parent.y + f.y - this.parent.padY / 2);
        if (f == this)this.parent.originalIndex = e;
    }
    -1 == b && (f = a[a.length - 1], d = this.parent.y + f.y + f.height + this.parent.padY / 2);
    d -= this.parent.ref.get(0).scrollTop;
    this.parent.indicator.show();
    this.parent.indicator.css("top", d);
    this.parent.dropIndex = b;
    player.lastSequenceDropIndex =
        b;
};
SequenceItem.prototype.Drop = function() {
    if (-1 == this.parent.originalIndex)this.parent.indicator.hide(), this.ghost.hide();
    else {
        if (this.parent.dropIndex != player.lastSequenceDropIndex)this.parent.dropIndex = player.lastSequenceDropIndex;
        this.parent.indicator.hide();
        this.ghost.hide();
        var a = this.parent.getOrderedItemList();
        if (-1 == this.parent.dropIndex)this.parent.dropIndex = a.length;
        if (this.parent.dropIndex != this.parent.originalIndex)
            for (var b = this.parent.dropIndex > this.parent.originalIndex ? 1 : -1,
                c = this.parent.dropIndex > this.parent.originalIndex ?
                    0 : -1,
                d = this.parent.originalIndex; d != this.parent.dropIndex + c; d += b)this.parent.swapItem(this, a[d]);
        this.variables._checked = "true";
        this.parent.updateScore();
        this.parent.dropIndex = -1;
        this.parent.originalIndex = -1;
    }
    this.render();
};
var HotspotMarker = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.constructElement();
    this.xml = "";
    this.angle = 0;
    this.speed = 0.05;
};
HotspotMarker.prototype = new StageItem;
HotspotMarker.prototype.objectType = "Item";
HotspotMarker.prototype.innerType = "HotspotMarker";
HotspotMarker.prototype.toBaseData = Element.prototype.toData;
HotspotMarker.prototype.toData = function(a) {
    a = this.toBaseData(a);
    if (this.x != this.originalX)a.x = this.x;
    if (this.y != this.originalY)a.y = this.y;
    return a;
};
HotspotMarker.prototype.updateBaseFromData = Element.prototype.updateFromData;
HotspotMarker.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    if (a.x)this.x = a.x;
    if (a.y)this.y = a.y;
};
HotspotMarker.prototype.loadBaseFromXML = StageItem.prototype.loadFromXML;
HotspotMarker.prototype.loadFromXML = function(a, b, c) {
    this.loadBaseFromXML(a, b, c);
    this.originalX = this.x;
    this.originalY = this.y;
    this.height = this.width = 38;
    this.spinnerRadius = 5;
    this.ring1Radius = 7;
    this.ring2Radius = 16;
};
HotspotMarker.prototype.createBaseRef = StageItem.prototype.createRef;
HotspotMarker.prototype.createRef = function() {
    if (this.ref)return this.render(), !1;
    var a = this;
    if (!this.createBaseRef())return!1;
    this.ref.addClass("hotspotmarker");
    this.ref.css("margin-left", -this.width / 2);
    this.ref.css("margin-top", -this.height / 2);
    var b = $("<canvas></canvas>");
    b.attr("width", this.width);
    b.attr("height", this.height);
    this.ref.append(b);
    this.jcanvas = b;
    this.canvas = b.get(0);
    var b = parseInt(this.parent.variables[this.id.replace("_marker", "_xpos")]),
        c = parseInt(this.parent.variables[this.id.replace("_marker",
            "_ypos")]);
    !isNaN(b) && -1 < b ? (this.ref.css("left", b), this.ref.css("top", c), setTimeout(function() { a.ref.show(); }, 100)) : (this.ref.css("left", -100), this.ref.css("top", -100));
    if (!this.spinning)this.step(), this.spinning = !0;
    this.ref.show();
    return!0;
};
HotspotMarker.prototype.render = function() {

    function a(a) {
        a = a % 6 / 4;
        1 < a && (a = 0);
        0.5 < a && (a = 1 - a);
        0 > a && (a = 0);
        return a;
    }

    if (this.ref) {
        var b = this.canvas.getContext("2d"), c = this.width / 2 - 2;
        b.clearRect(0, 0, this.width, this.height);
        b.save();
        b.translate(c + 2, c + 2);
        b.rotate(this.angle);
        b.beginPath();
        b.arc(0, 0, this.spinnerRadius, 0, 2 * Math.PI);
        b.fillStyle = "#000";
        b.fill();
        b.beginPath();
        b.moveTo(0, 0);
        b.arc(0, 0, this.spinnerRadius, 0, Math.PI / 2);
        b.lineTo(0, 0);
        b.arc(0, 0, this.spinnerRadius, Math.PI, 3 * Math.PI / 2);
        b.fillStyle = "#fff";
        b.fill();
        var c = a(this.angle + 0.5), d = a(this.angle);
        if (0 < c)b.strokeStyle = "rgba(0,255,255,0)", b.strokeStyle = "rgba(100,255,255," + c + ")", b.lineWidth = 4, b.beginPath(), b.arc(0, 0, this.ring1Radius, 0, 2 * Math.PI), b.stroke(), b.beginPath(), b.strokeStyle = "rgba(100,255,255," + d + ")", b.arc(0, 0, this.ring2Radius, 0, 2 * Math.PI), b.stroke();
        b.restore();
    }
};
HotspotMarker.prototype.step = function() {
    var a = this;
    if (this.ref) {
        this.angle += this.speed;
        this.render();
        var a = this, b = a.ref.get(0);
        a.ref.show();
        setTimeout(function() { a.ref && a.ref.show(); }, 100);
    }
    HotspotMarker.requestAnimFrame()(function() { a.step(); }, b);
};
HotspotMarker.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { window.setTimeout(a, 1E3 / 60); }; };
var SWFItem = function(a, b, c) {
    this.container = a || $(document.body);
    this.slide = b;
    this.layer = c;
    this.ref = null;
    this.constructElement();
    this.currentIndex = 0;
    this.content = {};
    this.colors = {};
    this.type = "swf";
    this.active = !0;
    this.id = Math.random();
    this.name = "item";
    this.visible = this.layered = !1;
    this.canSimplify = !0;
    this.hasEvents = !1;
    this.xml = "";
};
SWFItem.prototype = new StageItem;
SWFItem.prototype.objectType = "Item";
SWFItem.prototype.innerType = "SWFItem";
SWFItem.prototype.createBaseRef = StageItem.prototype.createRef;
SWFItem.prototype.destroyBaseRef = StageItem.prototype.destroyRef;
SWFItem.prototype.createRef = function() {
    if (this.ref)return this.container.append(this.ref), !1;
    this.container = this.parent.ref;
    if (!this.container)return!1;
    this.ref = $('<div class="item swf unsupported"><h1>Not Supported</h1>SWF objects cannot be rendered by the HTML5 player.</div>');
    this.ref.addClass(this.type);
    this.applySize(this.ref);
    this.container.append(this.ref);
    this.ref.get(0).item = this;
    return!0;
};
SWFItem.prototype.renderCallback = function() {};
SWFItem.prototype.render = function() {};
var Resource = function(a, b, c) {
    this.item = a;
    this.src = b;
    this.loading = this.loaded = this.prepared = !1;
    this.callback = c;
    this.poolImage = null;
};
Resource.ImagePool = [];
Resource.LoadedImagesLog = {};
Resource.TotalPixels = 0;
Resource.LoadedImageCount = 0;
Resource.prototype.load = function(a, b) {
    if (!a && 0 != a)throw"undefined index " + a;
    var c = this;
    if (this.loaded || this.deferLoading)c.execCallback(b);
    else if (!this.loading)
        switch (this.item.type) {
        case "audio":
        case "video":
            c.execCallback(b);
            break;
        default:
            var d = Resource.LoadedImagesLog[c.src];
            if (d) {
                c.item.imageWidth = d.width;
                c.item.imageHeight = d.height;
                c.poolImage = d;
                c.item.imagelib && $.each(c.item.imagelib.m_listImages, function(a, b) {
                    if (c.imgLibID == b.Id)
                        b.width = c.item.imageWidth, b.height = c.item.imageHeight, b.imgNode =
                            d;
                });
                c.loaded = !0;
                c.execCallback(b);
                c.unbind();
                break;
            }
            if (!c.poolImage)c.poolImage = document.createElement("img"), c.poolImage.className = "loader";
            c.loadHandler = function() {
                if (c.poolImage) {
                    c.item.imageWidth = c.poolImage.width || c.poolImage.naturalWidth;
                    c.item.imageHeight = c.poolImage.height || c.poolImage.naturalHeight;
                    Resource.LoadedImagesLog[c.src] = c.poolImage;
                    Resource.TotalPixels += c.item.imageWidth * c.item.imageHeight;
                    Resource.LoadedImageCount++;
                    c.loading = !1;
                    if (!c.loaded)c.loaded = !0, c.execCallback(b);
                    c.unbind();
                }
            };
            c.errorHandler = function() {
                c.item.ref && c.item.ref.addClass("missing");
                c.loaded = !0;
                c.execCallback(b);
                c.unbind();
                return!1;
            };
            c.poolImage.addEventListener("load", c.loadHandler, !1);
            c.poolImage.addEventListener("error", c.errorHandler, !1);
            c.timeout = setTimeout(function() {
                if (!c.loaded)c.item.ref && c.item.ref.addClass("missing"), c.loaded = !0, c.execCallback(b);
                c.unbind();
            }, 1E4);
            c.poolImage.src = c.src;
            this.loading = !0;
        }
};
Resource.prototype.unload = function(a) {
    if (this.src)
        switch (this.item.type) {
        case "audio":
        case "video":
            this.execCallback(a);
            break;
        default:
            this.unbind(), delete Resource.LoadedImagesLog[this.src], delete this.poolImage, this.loaded = !1;
        }
};
Resource.prototype.unbind = function() {
    this.poolImage && this.poolImage.removeEventListener && (this.poolImage.removeEventListener("load", this.loadHandler, !1), this.poolImage.removeEventListener("error", this.errorHandler, !1));
    clearTimeout(this.timeout);
};
Resource.prototype.prep = function() { if (this.item.prep)this.item.prep(), this.prepared = !0; };
Resource.prototype.execCallback = function(a) {
    a && a(this);
    this.callback && this.callback(this);
};
var TimelineEvent = function(a) {
    this.actions = [];
    this.time = 0;
    this.type = "TimelineEvent";
    this.parentElement = a;
};
TimelineEvent.prototype.loadFromXML = function(a) {
    var b = this;
    b.time = parseInt($(a).attr("time"));
    $(a).children("actions").children().each(function(a, d) {
        var e = new TimelineAction(b.parentElement);
        e.loadFromXML(d, b);
        b.actions.push(e);
    });
};
TimelineEvent.prototype.act = function(a, b) {
    this.isUserInitiated = !1;
    var c = this, d = !0;
    player.currentTimelineEvent = this;
    $.each(this.actions, function(e, f) { if (!a || !("media_play" == f.type || "media_seek" == f.type || "media_toggle" == f.type))d && (d = f.act(c, null, a, b, !1)); });
    player.currentTimelineEvent = null;
};
TimelineEvent.prototype.getMediaDuration = function() {
    var a = 0;
    $.each(this.actions, function(b, c) {
        if ("media_play" == c.type || "media_seek" == c.type || "media_toggle" == c.type) {
            var d = c.getItem();
            if (d.content.duration)a = d.content.duration;
        }
    });
    return a;
};
TimelineEvent.prototype.revert = function() { $.each(this.actions, function(a, b) { b.revert(); }); };
var TimelineAction = function(a) {
    this.type = "show";
    this.transition = null;
    this.itemID = "";
    this.item = null;
    this.xml = "";
    this.variables = {};
    this.parentElement = a;
};
TimelineAction.prototype.loadFromXML = function(a, b) {
    this.type = a.tagName;
    this.originalItemID = this.itemID = $(a).children("objref").attr("value");
    if ("setfocus" == this.type)this.itemID = $(a).find("value").attr("value");
    if (this.itemID && -1 < this.itemID.indexOf(".")) {
        var c = this.itemID.split(".");
        this.itemID = c[c.length - 1];
    }
    this.transition = new Transition;
    this.transition.loadFromXML(a);
    this.xml = a;
    if (c = this.getItem())
        if ("StoryEvent" == b.type)c.canSimplify = !1;
        else if (0 != b.time)c.canSimplify = !1;
        else if (this.transition &&
            0 != this.transition.duration)c.canSimplify = !1;
};
TimelineAction.prototype.getItemPack = function() { return this.parentElement.parseObjref(this.originalItemID); };
TimelineAction.prototype.getItem = function() { return this.parentElement.parseObjref(this.originalItemID).target; };
TimelineAction.prototype.act = function(a, b, c, d) {
    var e = !0;
    b && this.getItem() && this.getItem();
    b = b || this.getItem() || this.parentElement || story;
    if ("function" === typeof this[this.type])this[this.type](a, b, c, d);
    else b ? e = b.runAction(this.xml) : "TimelineEvent" == a.type && (e = player.currentSlide().runAction(this.xml));
    return e;
};
TimelineAction.prototype.revert = function() {
    var a = this.getItem();
    switch (this.type) {
    case "show":
        a && "audio" != a.type && a.hide();
        break;
    case "hide":
        a && "audio" != a.type && a.show();
    }
};
TimelineAction.prototype.show = function(a, b, c, d) {
    var b = this.getItemPack(), e = b.target;
    if (!b.isVariableRef && e)b = e, e = this.transition, d && (e = null), "Slide" != b.innerType && b.show(a, e, c);
};
TimelineAction.prototype.hide = function(a, b, c, d) {
    c = this.getItemPack();
    b = c.target;
    if (!c.isVariableRef)b ? (c = this.transition, d && (c = null), b.hide(a, c)) : trace.logMulti("should hide", this.itemID, b);
};
TimelineAction.prototype.hideallslidelayers = function() {
    $(".layer").hide();
    $.each(player.currentSlide().layers, function(a, b) { b.hide(); });
};
TimelineAction.prototype.hide_slidelayer = function(a, b) {
    var c = b.parseObjrefFromXML(this.xml), d = c.target;
    c.isVariableRef || (d.hide(this.transition), d.transitioning && d.ref.hide());
};
TimelineAction.prototype.show_slidelayer = function(a, b) {
    var c = b.parseObjrefFromXML(this.xml), d = c.target;
    if (!c.isVariableRef) {
        var e = "true" == $(this.xml).attr("hideothers"), c = !d.visible;
        e && $.each(player.currentSlide().layers, function(a, b) { b != d && b.hide(); });
        e = new Transition(d);
        e.loadFromXML(this.xml);
        d.show(e);
        c && d.update(0);
        if (d.depth < d.slide.topZ)d.depth = ++d.slide.topZ;
        d.setZIndex(d.depth, !0);
    }
};
TimelineAction.prototype.media_seek = function(a, b) {
    var c = this.getItem();
    c && (b = c);
    if (b && b.setCurrentTime) {
        var d = c = parseInt($(this.xml).attr("position"));
        "TimelineEvent" == a.type && ((d = b.getTimelineAncestor()) || (d = player.currentSlide()), d = c + d.currentTime - a.time);
        b.shouldSetPosition = !1;
        c = 0;
        try {
            c = Math.abs(1E3 * clip.currentTime - d);
        } catch (e) {
        }
        if (100 < c) {
            b.correctedPosition = d;
            b.shouldSetPosition = !0;
            try {
                b.setCurrentTime(d / 1E3), b.shouldSetPosition = !1;
            } catch (f) {
            }
        }
    }
};
TimelineAction.prototype.set_volume = function(a, b) {
    var c = this.getItem();
    c && (b = c);
    c = parseInt($(this.xml).attr("volume"));
    player.clipVolume = c / 100;
    c = util.min(c, 100);
    c = util.max(c, 0);
    try {
        b.ref.get(0).volume = c / 100 * player.volumeSlider.volume / 100;
    } catch (d) {
    }
};
TimelineAction.prototype.media_toggle = function(a, b) {
    var c = this.getItem();
    c && (b = c);
    if (b)c = b.ref.get(0), !b.media_toggled && c.paused ? (b.media_toggled = !0, this.media_play(a, b)) : (b.media_toggled = !1, this.media_pause(a, b));
};
TimelineAction.prototype.media_play = function(a, b) {
    var c = this.getItem();
    c && (b = c);
    if (b && (a && "StoryEvent" == a.type && a.isUserInitiated && b.prep(), b.playClip)) {
        if (player.hasWebAudio && "audio" == b.innerType && !b.isDecoded)b.playOnDecode = !0, b.audioData ? b.decode() : (b.decodeOnLoad = !0, b.loadClip()), b.prePlayClip();
        if (!this.getItem().mediaReady())player.blockedOn = this.getItem(), player.block();
        b.isSuppressedCaptureAnimation ? b.playClip() : "audio" == b.innerType && player.hasWebAudio ? (player.currentClip = b.getClip(), player.currentClipStartTime =
            a.time, player.currentClipSyncToTimeline = "TimelineEvent" == a.type, b.playClip()) : (clearTimeout(player.mediaTimeout), player.scheduledMediaSrc = b.content.src, b.setScheduled(!0), player.mediaTimeout = setTimeout(function() {
            player.mediaTimeout = null;
            player.scheduledMediaSrc = null;
            b.setScheduled(!1);
            b.playClip();
            player.currentClip = b.getClip();
            player.currentClipStartTime = a.time;
            player.currentClipSyncToTimeline = "TimelineEvent" == a.type;
        }, 0));
    }
};
TimelineAction.prototype.media_pause = function(a, b) {
    if (b) {
        var c = this.getItem();
        c.pauseClip();
        c.media_toggled = !1;
    }
};
TimelineAction.prototype.move = function(a, b, c) {
    if (!c && b) {
        if (!this.path) {
            this.path = new BezierPath;
            this.path.loadFromXML(this.xml, b);
            this.animationName = "animation_" + b.id;
            var c = "@-webkit-keyframes " + this.animationName, d = this.path.toKeyFrames(10);
            document.styleSheets[0].insertRule(c + d, 0);
        }
        var e = this.path, f = this.animationName;
        if (a && "StoryEvent" == a.type && a.isUserInitiated)b.actionMoved = !0;
        b.ref.unbind("webkitAnimationEnd");
        b.ref.bind("webkitAnimationEnd", function() {
            var a = e.points[e.points.length - 1];
            b.ref.css("-webkit-transform",
                "translateX(" + a.x + "px) translateY(" + a.y + "px)");
            b.ref.css("-webkit-animation-name", "");
            b.ref.css("-webkit-animation-duration", "0s");
            b.ref.unbind("webkitAnimationEnd");
            b.handleEvent("onmovecomplete");
        });
        b.ref.css("-webkit-animation-name", "");
        b.ref.css("-webkit-animation-duration", "0s");
        setTimeout(function() {
            b.ref.css("-webkit-animation-name", f);
            b.ref.css("-webkit-animation-duration", e.duration + "ms");
            b.ref.css("-webkit-animation-iteration-count", "1");
        }, 0);
    }
};
TimelineAction.prototype.zoompan = function(a, b, c, d) {
    if (!d) {
        if (!this.zoomPanObj)this.zoomPanObj = new ZoomPan, this.zoomPanObj.loadFromXML(this.xml);
        c || this.zoomPanObj.apply(player.currentSlide().ref);
    }
};
TimelineAction.prototype.object_action = function(a, b) {
    var c = $(this.xml).attr("command");
    this.getItem();
    b = this.getItem().parseObjrefFromXML(this.xml).target;
    if ("function" == typeof b[c])b[c](this.xml);
    else
        switch (c) {
        case "togglecontent":
            b.visible ? b.hide() : b.show();
            break;
        case "hidecomplete":
            b.hide();
        }
};
TimelineAction.prototype.adjustvar = function(a, b, c, d) {
    var e = this, d = d || $(this.xml).attr("variable"), f = $(this.xml).attr("operator"), g = $(this.xml).children("value").attr("type"), h = $(this.xml).children("value").attr("value");
    switch (f) {
    case "toggle":
        h = "true" == b.extractVariable(d) ? "false" : "true";
        break;
    case "add":
        f = b.extractVariable(h, g);
        g = parseFloat(b.extractVariable(d));
        isNaN(g) && (g = 0);
        h = g + parseFloat(f);
        break;
    case "sub":
        f = b.extractVariable(h, g);
        g = parseFloat(b.extractVariable(d));
        isNaN(g) && (g = 0);
        h = g - parseFloat(f);
        break;
    case "mult":
        f = b.extractVariable(h, g);
        g = parseFloat(b.extractVariable(d));
        isNaN(g) && (g = 0);
        h = g * parseFloat(f);
        break;
    case "div":
        f = b.extractVariable(h, g);
        g = parseFloat(b.extractVariable(d));
        isNaN(g) && (g = 0);
        h = g / parseFloat(f);
        isNaN(h) && (h = 0);
        break;
    case "set":
        h = $(this.xml).children("value").attr("value");
        if ("property" == g || "variable" == g || "var" == g)h = b.extractVariable(h, g);
        "number" == g && (h = parseFloat(h));
    }
    b || (b = story);
    b.setVariable(d, h);
    0 == d.indexOf("_children") && $.each(b.children, function(b, f) {
        var g = d.replace("_children.",
            "");
        e.adjustvar(a, f, c, g);
    });
    b.group && this.adjustvar(a, b.group, c);
};
TimelineAction.prototype.exe_actiongroup = function(a, b) {
    var c = $(this.xml).attr("id");
    c.indexOf("State");
    b.runActionGroup(c);
    b.group && b.group.runActionGroup(c);
};
TimelineAction.prototype.render_item = function() { this.item.render(null, !0, null, "TimelineAction.prototype.render_item"); };
var StoryEvent = function(a) {
    this.trigger = "";
    this.time = 0;
    this.actions = [];
    this.type = "StoryEvent";
    this.parentElement = a;
};
StoryEvent.prototype.loadFromXML = function(a) {
    var b = this;
    this.trigger = a.tagName;
    $(a).children("actions").children().each(function(a, c) {
        var f = new TimelineAction(b.parentElement);
        f.loadFromXML(c, b);
        b.actions.push(f);
    });
    switch (b.trigger) {
    case "onvarchanged":
    case "onpropchanged":
        b.varname = $(a).attr("varname");
        if (!b.varname)b.varname = $(a).attr("propname");
        var c = this.parentElement.parseObjref(b.varname).target;
        b.filter = function(a) { return void 0 === a ? void 0 : a == b.varname || c.getFullVariableRef(a) == c.getFullVariableRef(b.varname); };
        c.registerVariableEventSubscriber(this.parentElement, b.varname);
        break;
    case "onobjectevent":
        b.eventname = $(a).attr("eventname");
        b.filter = function(a) { return a == b.eventname; };
        break;
    case "onkeypress":
        b.keyCode = $(a).attr("keycode");
        b.shiftKey = "true" == $(a).attr("shift");
        b.ctrlKey = "true" == $(a).attr("ctrl");
        b.altKey = "true" == $(a).attr("alt");
        b.filter = function(a) {
            var c = a.keyCode == b.keyCode && a.shiftKey == b.shiftKey && a.ctrlKey == b.ctrlKey && a.altKey == b.altKey;
            c && 13 == a.keyCode && a.target.blur();
            return c;
        };
        break;
    case "onlinkrelease":
        b.triggerid =
            $(a).attr("triggerid");
        b.filter = function(a) { return a == b.triggerid; };
        break;
    default:
        b.filter = function() { return!0; };
    }
};
StoryEvent.prototype.act = function(a, b) {
    this.isUserInitiated = b;
    StoryEvent.currentEvent = this;
    var c = this, d = !0;
    this.actions.forEach(function(b) { d && (d = b.act(c, a, !1, !1)); });
    StoryEvent.currentEvent = null;
    return d;
};
StoryEvent.prototype.findDownstreamMedia = function(a, b, c) {
    b || (b = []);
    $.each(this.actions, function(d, e) {
        switch (e.type) {
        case "media_play":
        case "media_toggle":
            var f = e.getItem();
            b.push(f);
            break;
        case "show":
            e.getItem() && "video" == e.getItem().type && b.push(e.getItem());
            break;
        case "show_slidelayer":
            if (f = a.parseObjrefFromXML(e.xml).target)(f = f.findDownstreamMedia(++c)) && b.push(f);
            break;
        case "if_action":
            $(e.xml).find("media_play, media_toggle").each(function(c, d) {
                    var e = a.parseObjrefFromXML(d).target;
                    e && b.push(e);
                }),
                $(e.xml).find("show_slidelayer").each(function(d, e) {
                    var f = a.parseObjrefFromXML(e).target;
                    f && (f = f.findDownstreamMedia(++c)) && b.push(f);
                });
        }
    });
    return 0 < b.length ? b[0] : null;
};
TimelineEvent.prototype.findDownstreamMedia = StoryEvent.prototype.findDownstreamMedia;
var Background = function(a) {
    this.container = a || $(document.body);
    this.backgroundType = "fill";
    this.fillType = "linear";
    this.stops = [];
};
Background.prototype.loadFromXML = function(a, b) {
    var c = this;
    c.backgroundType = b || $(a).attr("type");
    switch (this.backgroundType) {
    case "fill":
        c.rotation = $(a).children("fill").attr("rotation");
        c.fillType = $(a).children("fill").attr("type");
        c.stops = [];
        var d = $(a).attr("url");
        if (d)c.src = player.basepath + "mobile/" + d;
        $(a).children("fill").children("colors").children("color").each(function(a, b) {
            var d = c.parseStop(b);
            c.stops.push(d);
        });
        break;
    case "swf":
        c.src = player.basepath + "" + $(a).children("imagedata").attr("url").replace("story_content",
            "mobile").replace(".swf", ".jpg");
        break;
    case "vector":
        d = $(a).children("vectordata"), c.state = { left: d.attr("left"), top: d.attr("top"), right: d.attr("right"), bottom: d.attr("bottom"), path: PathLib.getPathFromXML(d.children("pr")) }, c.rectShape = new ppRect(c.state.left, c.state.top, c.state.right, c.state.bottom);
    }
    if (c.src)c.img = new Image, c.img.src = c.src;
};
Background.prototype.parseStop = function(a) { return{ rawcolor: $(a).attr("rgb").replace("0x", "#"), color: Background.parseRGBA($(a).attr("rgb"), $(a).attr("alpha")), stop: parseInt($(a).attr("stop")) / 255, alpha: parseInt($(a).attr("alpha")) / 100 }; };
Background.parseRGBA = function(a, b) {
    var c = Frame.parseRGB(a.replace("0x", "#"));
    c.push(parseInt(b) / 100);
    return"rgba(" + c.join(",") + ")";
};
Background.prototype.colorStops = function() {
    var a = "";
    $.each(this.stops, function(b, c) {
        "" != a && (a += ",");
        a += c.color + " " + 100 * c.stop + "%";
    });
    return a;
};
Background.prototype.toColorString = function() { return this.stops[0].color; };
Background.prototype.toCssString = function() {
    switch (this.backgroundType) {
    case "fill":
        return this.src ? "transparent url(" + this.src + ") no-repeat" : 1 == this.stops.length ? this.stops[0].color : "-webkit-linear-gradient(top, " + this.colorStops() + ")";
    case "swf":
        return"transparent url(" + this.src + ") no-repeat";
    }
};
Background.prototype.toCss = function() {
    if (player.noImg)return{};
    var a = {};
    switch (this.backgroundType) {
    case "fill":
        a.background = this.src ? "transparent url(" + escape(this.src) + ") no-repeat" : 1 == this.stops.length ? this.stops[0].color : "-webkit-linear-gradient(top, " + this.colorStops() + ")";
        break;
    case "swf":
        a.background = "transparent url(" + escape(this.src) + ") no-repeat";
        break;
    case "vector":
        this.generateVectorSrc(), a.background = "transparent url(" + this.src + ") no-repeat";
    }
    return a;
};
Background.prototype.generateVectorSrc = function() { if (!this.src)this.canvas = document.createElement("canvas"), this.canvas.width = this.state.right, this.canvas.height = this.state.bottom, this.m_nYOffset = this.m_nXOffset = 0, this.height = this.width = 1E3, ppArt.DrawVector(this, this.state.path, null, player.fontlib, this.imagelib, null), this.src = this.canvas.toDataURL("image/png"), this.canvas = null; };
Background.prototype.apply = function(a) {
    this.container = a || this.container;
    var b = this;
    $.each(this.toCss(), function(a, d) { $(b.container).css(a, d); });
};
Background.prototype.toCanvasGradient = function(a, b) {
    var c = a.createLinearGradient(0, 0, 0, b);
    $.each(this.stops, function(a, b) { c.addColorStop(b.stop, b.color); });
    return c;
};
Background.prototype.applyCanvas = function(a, b, c, d) {
    switch (this.backgroundType) {
    case "fill":
        var e = a.createLinearGradient(0, 0, 0, b.height);
        $.each(this.stops, function(a, b) { e.addColorStop(b.stop, b.color); });
        if (c)a.fillStyle = e;
        if (d)a.strokeStyle = e;
    }
};
Background.prototype.drawCanvas = function(a, b, c, d) {
    switch (this.backgroundType) {
    case "fill":
        this.src ? a.drawImage(this.img, 0, 0) : (this.applyCanvas(a, b, c, d), a.fillRect(0, 0, b.width, b.height));
        break;
    case "swf":
        a.drawImage(this.img, 0, 0);
    }
};
var SlideBank = function() {
    this.constructElement();
    this.id = "_slidebank_" + SlideBank.index;
    SlideBank.index++;
    this.bankSlideIndex = 0;
};
SlideBank.prototype = new Element;
SlideBank.prototype.objectType = "SlideBank";
SlideBank.prototype.innerType = "SlideBank";
SlideBank.index = 0;
SlideBank.prototype.loadFromXML = function(a) {
    var b = this;
    this.children = {};
    $(a).children("slides").children("slide").each(function(a, d) {
        var e = new Slide(story.container);
        e.loadFromXML($(d));
        e.parent = b;
        story.allSlides.push(e);
        story.slideLookup[e.id] = e;
        b.children[e.id] = e;
        e.slideIndex = story.allSlides.length - 1;
        e.bankSlideIndex = b.bankSlideIndex++;
    });
};
var SlideDraw = function() {
    this.constructElement();
    this.interactions = {};
    this.exitActions = [];
    this.draw = [];
    this.orderedChildren = [];
    this.navLinks = [];
    this.sceneDrawIndex = this.drawIndex = 0;
    this.quiz = null;
    this.populated = !1;
};
SlideDraw.NextSlideIndex = 0;
SlideDraw.prototype = new Element;
SlideDraw.prototype.objectType = "SlideDraw";
SlideDraw.prototype.innerType = "SlideDraw";
SlideDraw.prototype.getRandomMember = ShuffleGroup.prototype.getRandomMember;
SlideDraw.prototype.getRandomIndex = ShuffleGroup.prototype.getRandomIndex;
SlideDraw.populateDraws = function() {
    $.each(story.children, function(a, b) { "Scene" == b.innerType && b.populateDraws(); });
    player.calculateTotalViewSlides();
};
SlideDraw.prototype.restoreFromResumeData = function(a) {
    this.compactResumeData = bwChunk.CreateChunk(a);
    var b = new bwChunk(a);
    for (this.draw = []; !b.EOF();)this.draw.push(this.refs[b.NextUBase10(2)]);
    this.populateDraw();
    a = 0;
    for (b = b.NextChunk(); !b.isNothing;) {
        var c = this.orderedChildren[a];
        c.compactResumeData = b.ChunkData();
        c.restoreFromResumeData(b.ChunkData(), !0);
        a++;
        b = b.NextChunk();
    }
};
SlideDraw.prototype.getResumeData = function() {
    var a = "", b = "";
    $.each(this.orderedChildren, function(c, e) {
        a += bwChunk.UBase10toN(e.drawListIndex, 2);
        b = e.compactResumeData ? b + e.compactResumeData : b + bwChunk.EMPTY_CHUNK;
    });
    var c = bwChunk.CreateChunk(bwChunk.CreateChunk(a) + b);
    this.compactResumeData = c;
    this.parent.compactResumeData = this.parent.getResumeData();
    return c;
};
SlideDraw.prototype.toBaseData = Element.prototype.toData;
SlideDraw.prototype.toData = function(a) {
    a = this.toBaseData(a);
    a.draw = this.draw;
    return a;
};
SlideDraw.prototype.updateBaseFromData = Element.prototype.updateFromData;
SlideDraw.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    if (a.draw)this.draw = a.draw, this.populateDraw();
};
SlideDraw.prototype.loadFromXML = function(a) {
    var b = this;
    this.id = $(a).attr("id");
    this.lmsid = $(a).attr("lmsid");
    this.shuffle = "true" == $(a).attr("shuffle");
    this.shufflecount = parseInt($(a).attr("shufflecount"));
    b.variables.Id = $(a).attr("id");
    b.variableDefaults.Id = $(a).attr("id");
    b.variables.WindowId = "_frame";
    b.variableDefaults.WindowId = "_frame";
    $(a).children("exitaction").children().each(function(a, d) {
        var e = new TimelineAction(b);
        e.loadFromXML(d, b);
        b.exitActions.push(e);
    });
    this.refs = [];
    $(a).children("sliderefs").children("slideref").each(function(a,
        d) {
        var e = { id: $(d).attr("id"), index: a, shuffleinclude: "true" == $(d).attr("shuffleinclude"), linknext: "true" == $(d).attr("linknext"), linkprev: "true" == $(d).attr("linkprev") };
        b.refs.push(e);
    });
};
SlideDraw.prototype.createDraw = function() {
    if (this.shuffle) {
        var a = this;
        this.draw = [];
        for (var b = [], c = [], d = []; 0 < this.refs.length && this.refs[0].linkprev;) {
            var e = this.refs.shift();
            a.draw.push(e);
        }
        for (; 0 < this.refs.length && this.refs[this.refs.length - 1].linknext;)d.unshift(this.refs.pop());
        $.each(this.refs, function(a, d) {
            c.push(d);
            d.linknext || (b.push(c), c = []);
        });
        for (e = 0; a.draw.length + d.length < this.shufflecount && 0 < b.length && 100 > e++;) {
            var f = this.shufflecount - a.draw.length - d.length, g = a.getRandomIndex(b), h = b[g];
            h.length <= f && ($.each(h, function(b, c) { a.draw.push(c); }), b.splice(g, 1));
        }
        if (100 <= e && 0 < b.length) {
            var j = 1E3, j = null;
            $.each(b, function(a, b) { if (!j || j.length > b.length)j = b; });
            $.each(j, function(b, c) { a.draw.push(c); });
        }
        for (; 0 < d.length;)a.draw.push(d.shift());
    } else this.createDrawUnshuffled();
};
SlideDraw.prototype.createDrawUnshuffled = function() { for (this.draw = []; this.refs.length;)this.draw.push(this.refs.shift()); };
SlideDraw.prototype.getQuiz = function() { return this.quiz; };
SlideDraw.prototype.populateDraw = function() {
    var a = this;
    this.children = {};
    $.each(this.draw, function(b, c) {
        var d = c.id, e = story.slideLookup[d], f = new Slide(story.container);
        f.loadFromXML($(e.xml));
        f.parent = a;
        f.slideBank = a;
        story.allSlides.push(f);
        player.slideLoadQueue.push(story.allSlides.length - 1);
        f.originalSlideIndex = f.slideIndex;
        f.drawSlideIndex = b;
        f.slideIndex = story.allSlides.length - 1;
        f.slideIndexForResume = SlideDraw.NextSlideIndex++;
        f.sceneIndex = a.parent.sceneIndex;
        f.drawIndex = a.sceneDrawIndex;
        f.bankSlideIndex =
            e.bankSlideIndex;
        f.drawListIndex = c.index;
        a.children[d] = f;
        a.orderedChildren.push(f);
    });
    player.slideLoadQueue.restart();
    player.slideList.contentRef.empty();
    $("#slide_list_portrait").empty();
    player.slideList = new SlideList;
    player.slideList.build(Frame.navLinks, null, null, null, player.slideList.tree);
    player.slideList.build(Frame.navLinks, $("#slide_list_portrait"));
    this.populated = !0;
};
SlideDraw.prototype.showFirst = function() {
    player.currentDraw = this;
    var a = this.getFirstSlide();
    this.parent.compactResumeData = this.parent.getResumeData();
    player.showSlideIndex(a.slideIndex, null, !0);
};
SlideDraw.prototype.getFirstSlide = function() {
    this.drawIndex = 0;
    player.currentDraw = this;
    0 == this.draw.length && SlideDraw.populateDraws();
    return this.children[this.draw[this.drawIndex].id];
};
SlideDraw.prototype.getFirstSpecifiedSlide = function() { return story.slideLookup[this.refs[0].id]; };
SlideDraw.prototype.playnextdrawslide = function() {

    function a() { 10 < c++ || b.fullyLoaded ? player.currentWindow ? player.currentWindow.showSlide(b, !1) : player.showSlideIndex(b.slideIndex, null, !0) : setTimeout(a, 200); }

    player.currentDraw = this;
    0 == this.draw.length && SlideDraw.populateDraws();
    if (player.currentSlide().parent == this)this.drawIndex = player.currentSlide().drawSlideIndex;
    this.drawIndex++;
    if (this.drawIndex >= this.draw.length)player.currentSlide().saveIfNecessary(), this.fireExitActions();
    else {
        var b = this.children[this.draw[this.drawIndex].id];
        b.loadContentFromXML();
        var c = 0;
        a();
    }
};
SlideDraw.prototype.fireExitActions = function() {
    var a = this;
    $.each(this.exitActions, function(b, c) { c.act(a, null, !1, !1); });
};
SlideDraw.prototype.sniffDrawIndex = function(a) {
    var b = this;
    $.each(this.draw, function(c, d) { if (d == a.id)b.drawIndex = c; });
};
SlideDraw.prototype.resetSlide = function(a, b) {
    $.each(this.children, function(c, d) { d.resetSlide(a, b); });
    this.compactResumeData = "";
};
var SlideList = function(a) {
    this.container = a || $(document.body);
    this.ref = null;
    this.ref = $("#menu_container");
    this.landscapeContainer = $("#landscape_menu");
    this.portraitContainer = $("#portrait_menu");
    this.contentRef = $("#slide_list");
    this.closed = !1;
    this.scroll = { moved: !1 };
    this.tree = new SlideListNode;
    player.simplenav && (this.contentRef.removeClass("menu_list"), this.contentRef.addClass("slidelist"));
};
SlideList.maxDepth = 0;
SlideList.SetDepth = function(a, b) {
    if (b > SlideList.maxDepth) {
        if (!SlideList.styleSheet)SlideList.styleSheet = new CustomStyleSheet;
        SlideList.styleSheet.add("ul.slidelist li.depth" + b, "padding-left", 6 + 12 * b + "px");
        SlideList.styleSheet.add("ul.slidelist li.depth" + b + ".has_children", "padding-left", -10 + 12 * b + "px");
        SlideList.styleSheet.add("ul.slidelist li.depth" + b + ".correct:before", "left", 213 - 12 * b + "px");
        SlideList.styleSheet.add("ul.slidelist li.depth" + b + ".incorrect:before", "left", 213 - 12 * b + "px");
        SlideList.styleSheet.add(".toptab ul.slidelist li.depth" +
            b + ".correct:before", "left", 270 - 12 * b + "px");
        SlideList.styleSheet.add(".toptab ul.slidelist li.depth" + b + ".incorrect:before", "left", 270 - 12 * b + "px");
        SlideList.styleSheet.build();
        SlideList.maxDepth = b;
    }
    a.addClass("depth" + b);
};
SlideList.prototype.build = function(a, b, c, d, e) {
    var f = this, b = b || f.contentRef, c = c || "", d = d || 1, e = e || new SlideListNode;
    f.hasBuilt = !0;
    var g = function(a, c) {
            var g = $("<li>" + c + " " + a.displaytext + "</li>");
            a.slideid ? g.attr("id", a.slideid) : a.drawid && g.attr("id", a.drawid);
            SlideList.SetDepth(g, d);
            var h = new SlideListNode(e, a);
            e.push(h);
            g.toggleExpand = function() {
                h.toggleExpand();
                return!1;
            };
            g.click(function(b) {
                if (f.scroll.moved || player.currentWindow && "MessageWnd" == player.currentWindow.id)return!1;
                if (g.hasClass("has_children") &&
                    1 == g.children("span").length) {
                    var c = g.children("span").position().left;
                    if (b.offsetX < c + 10 && !g.hasClass("neither"))return g.toggleExpand();
                }
                if ($(this).hasClass("selected") || $(this).hasClass("locked"))return!1;
                $(".window").hide();
                player.slideList.hide();
                $(".toptab.active").removeClass("active");
                if (!story.parseObjref(a.slideid).target)return!1;
                player.showSlideID(a.slideid, !0);
                return!1;
            });
            b.append(g);
            if (a.links) {
                var j = $("<span/>");
                g.prepend(j);
                g.addClass("has_children open");
                f.build(a.links, b, c, d + 1, h);
            } else
            (j =
                story.parseObjref(a.slideid).target) && "SlideDraw" == j.innerType ? f.addSlideDraw(j, a) : !j && a.expand && (j = $("<span/>"), g.prepend(j), g.addClass("has_children neither"));
            if (!a.listitems)a.listitems = [];
            a.listitems.push(g);
            a.expand || g.toggleExpand();
        },
        h = player.frame.options.autonumber,
        j = 0;
    $.each(a, function(a, b) {
        if (b.drawid) {
            var d = story.parseObjref(b.drawid).target;
            $.each(d.children, function(a, b) {
                if ("Slide" == b.innerType) {
                    var d = h ? c + (j + 1) + "." : "", e = { slideid: b.getFullObjref(), displaytext: b.title, expand: !0 };
                    b && b.navLinks &&
                        b.navLinks.push(e);
                    g(e, d);
                    j++;
                }
            });
        } else g(b, h ? c + (a + 1) + "." : "");
    });
};
SlideList.prototype.addSlideDraw = function(a, b) {
    a.navLinks = [b];
    $.each(a.children, function(a, d) { "Slide" == d.innerType && d.navLinks.push(b); });
};
SlideList.prototype.addSlideDrawExpanded = function(a, b, c, d) {
    var e = this, d = d || "", f = 0;
    $.each(a.children, function(a, h) {
        if ("Slide" == h.innerType) {
            var j = $('<li><span></span><a href="javascript:void(null);" title="">' + (player.frame.options.autonumber ? d + (f + 1) + "." : "") + " " + h.title + "</a></li>");
            j.attr("id", h.getFullObjref());
            j.click(function() {
                if (e.scroll.moved)return!1;
                player.showSlideID(b + "." + h.id, !0);
                $(".window").hide();
                player.slideList.hide();
                return!1;
            });
            c.append(j);
            f++;
            h.navLinks.push({ listitems: [j] });
        }
    });
};
SlideList.prototype.toggle = function() { this.visible ? this.hide() : this.show(); };
SlideList.prototype.show = function() { if (!this.visible)this.visible = !0, Transition.applyCss({ "-webkit-transition-property": "none", "-webkit-transition-duration": "0ms", opacity: 1, display: "block" }, this.portraitContainer), $("#control-menu").addClass("active"), this.refresh(), this.scrollSelectedIntoView(1); };
SlideList.prototype.hide = function() { if (this.visible)this.visible = !1, this.portraitContainer.hide(), $("#control-menu").removeClass("active"); };
SlideList.prototype.refresh = function() { this.scroll = { moved: !1 }; };
SlideList.prototype.scrollSelectedIntoView = function() {
    $(".slidelist .selected").each(function(a, b) {
        var c = $(b).closest(".slidelist"), d = $(b).position().top, e = $(b).height(), f = c.position().top, g = c.parent().height(), h = c.parent().get(0).scrollTop, j = d - f - e, d = d - f - g + 2 * e;
        if (h < d)c.parent().get(0).scrollTop = d;
        if (h > j)c.parent().get(0).scrollTop = j;
    });
};
SlideList.prototype.markVisited = function(a) {
    var b = function(a) { a.listitems && $.each(a.listitems, function(a, b) { b.addClass("visited"); }); };
    (function(a) {
        $.each(a.navLinks, function(a, c) {
            c.parent && b(c.parent);
            b(c);
        });
    })(a);
};
SlideList.prototype.collapseSections = function(a) { Frame.navLinks && player.slideList && (player.frame.options.autocollapse && 0 < a.navLinks.length && $.each(player.slideList.tree.children, function(a, c) { c.collapse(); }), $.each(a.navLinks, function(a, c) { $.each(c.nodes, function(a, b) { for (; b && !b.isRoot;)b.expand(), b = b.parent; }); })); };
SlideList.prototype.collapseAll = function() {
    this.tree.collapse(!0);
    this.tree.expand();
};
SlideList.shorten = function(a, b) {
    if (a.length > b) {
        for (var c = a.substr(0, b - 3), d = c.length - 1; 0 < d; d--)if (" " == c.substr(d, 1))return c.substr(0, d) + "&hellip;";
        return"&hellip;";
    }
    return a;
};
var SlideListNode = function(a, b) {
    if (!b)b = { listitems: [] }, this.isRoot = !0;
    this.parent = a;
    this.link = b;
    this.children = [];
    this.expanded = !0;
    if (!b.nodes)b.nodes = [];
    b.nodes.push(this);
};
SlideListNode.prototype.push = function(a) { this.children.push(a); };
SlideListNode.prototype.hasChildren = function() { return 0 < this.children.length; };
SlideListNode.prototype.toggleExpand = function() { this.hasChildren() && (this.expanded ? this.collapse() : this.expand()); };
SlideListNode.prototype.expand = function() {
    this.expanded = !0;
    this.updateDescendants();
    $.each(this.link.listitems, function(a, b) { b.addClass("open"); });
};
SlideListNode.prototype.collapse = function(a, b) {
    a && $.each(this.children, function(a, b) { b.collapse(!0, !0); });
    this.expanded = !1;
    b || this.updateDescendants();
    $.each(this.link.listitems, function(a, b) { b.removeClass("open"); });
};
SlideListNode.prototype.show = function() { $.each(this.link.listitems, function(a, b) { b.show(); }); };
SlideListNode.prototype.hide = function() { $.each(this.link.listitems, function(a, b) { b.hide(); }); };
SlideListNode.prototype.updateDescendants = function(a) {
    var b = a || !this.expanded;
    $.each(this.children, function(a, d) {
        b ? d.hide() : d.show();
        d.updateDescendants(b);
    });
};
var Transition = function(a) {
    this.target = null;
    this.transition = Transition.TransType.appear;
    this.duration = 750;
    this.direction = 1;
    this.reverse = this.pan = this.wipe = !1;
    this.runCount = 0;
    this.hasContext = !1;
    a && this.setTarget(a);
};
Transition.TransType = { appear: "appear", fly: "fly", fade: "fade", grow: "grow", spin: "spin" };
Transition.Direction = { 1: { getLeft: function(a) { return-a.targetWidth; }, getTop: function(a, b) { return b; } }, 2: { getLeft: function(a) { return a.containerWidth; }, getTop: function(a, b) { return b; } }, 4: { getLeft: function(a, b) { return b; }, getTop: function(a) { return-a.targetHeight; } }, 8: { getLeft: function(a, b) { return b; }, getTop: function(a) { return a.containerHeight; } } };
Transition.prototype.toString = function() { return"[duration:" + this.duration + ", direction:" + this.direction + ", type:" + this.transition + "]"; };
Transition.prototype.setTarget = function(a) {
    this.target = a;
    this.hasContext || this.sniffContext();
};
Transition.prototype.sniffContext = function() {
    if (player.width && 1 != player.width) {
        switch (this.target.objectType) {
        case "Item":
            this.targetLeft = this.target.x;
            this.targetTop = this.target.y;
            this.targetWidth = this.target.width;
            this.targetHeight = this.target.height;
            this.containerWidth = player.width;
            this.containerHeight = player.height;
            break;
        case "Layer":
            this.targetTop = this.targetLeft = 0;
            this.targetWidth = player.width;
            this.targetHeight = player.height;
            this.containerWidth = player.width;
            this.containerHeight = player.height;
            break;
        case "Slide":
            this.targetTop = this.targetLeft = 0;
            this.targetWidth = player.width;
            this.targetHeight = player.height;
            this.containerWidth = player.width;
            this.containerHeight = player.height;
            break;
        case "Bounce":
            this.targetTop = this.targetLeft = 0, this.targetWidth = player.width / 10, this.targetHeight = player.height / 10, this.containerWidth = player.width / 10, this.containerHeight = player.height / 10;
        }
        this.hasContext = !0;
    }
};
Transition.prototype.loadFromXML = function(a, b) {
    b && this.setTarget(b);
    this.transition = $(a).attr("transition");
    this.animationid = $(a).attr("animationid");
    $(a).attr("transduration") ? (this.duration = parseInt($(a).attr("transduration")), this.direction = $(a).attr("transdir"), this.wipe = "true" == $(a).attr("wipetrans")) : (this.duration = parseInt($(a).attr("duration")), this.direction = $(a).attr("direction"));
    this.reverse = "hide" == $(a).get(0).tagName.toLowerCase();
};
Transition.prototype.getOffscreenPosition = function() {
    var a = this, b = { x: this.targetLeft, y: this.targetTop };
    $.each(Transition.Direction, function(c, d) { if (a.direction & parseInt(c))b.x = d.getLeft(a, b.x), b.y = d.getTop(a, b.y); });
    return b;
};
Transition.prototype.getOffscreenCss = function(a) {
    var b = 0, c = 0;
    -1 < this.transition.indexOf(Transition.TransType.fly) && (c = this.getOffscreenPosition(), b = c.x - this.targetLeft, c = c.y - this.targetTop);
    a && (b = -b, c = -c);
    a = 0;
    -1 < this.transition.indexOf(Transition.TransType.spin) && (a = 360);
    this.target && "Item" == this.target.objectType && (a += this.target.rotation);
    var d = 1;
    if (this.target && void 0 != this.target.scale)d = this.target.scale;
    -1 < this.transition.indexOf(Transition.TransType.grow) && (d = 0.01);
    var e = 1;
    -1 < this.transition.indexOf(Transition.TransType.fade) &&
    (e = 0.02);
    player.isChrome && this.target && this.target.hasDescendantByType && this.target.hasDescendantByType("video") && (a = 0 == a ? 0.02 : a);
    return{ "-webkit-transform": "translate3d(" + b + "px," + c + "px,0px) scale(" + d + ") rotate(" + a + "deg)", "-moz-transform": "translate3d(" + b + "px," + c + "px,0px) scale(" + d + ") rotate(" + a + "deg)", "-o-transform": "translate3d(" + b + "px," + c + "px,0px) scale(" + d + ") rotate(" + a + "deg)", "-ms-transform": "translate(" + b + "px," + c + "px) scale(" + d + ") rotate(" + a + "deg)", opacity: e };
};
Transition.prototype.getZeroCss = function() {
    var a = 0;
    if (this.target && "Item" == this.target.objectType)a = this.target.rotation;
    var b = 1;
    if (this.target && void 0 != this.target.scale)b = this.target.scale;
    player.isChrome && this.target && this.target.hasDescendantByType && this.target.hasDescendantByType("video") && (a = 0 == a ? 0.02 : a);
    return{
        "-webkit-transform": "translate3d(0px,0px,0px) scale(" + b + ") rotate(" + a + "deg)",
        "-moz-transform": "translate3d(0px,0px,0px) scale(" + b + ") rotate(" + a + "deg)",
        "-o-transform": "translate3d(0px,0px,0px) scale(" +
            b + ") rotate(" + a + "deg)",
        "-ms-transform": "translate(0px,0px) scale(" + b + ") rotate(" + a + "deg)",
        opacity: 1
    };
};
Transition.prototype.getImmediateCss = function() { return{ "-webkit-transition-property": "-webkit-transform, opacity", "-webkit-transition-duration": "0s", "-moz-transition-property": "-moz-transform, opacity", "-moz-transition-duration": "0s", "-o-transition-property": "-o-transform, opacity", "-o-transition-duration": "0s", "-ms-transition-property": "-ms-transform, opacity", "-ms-transition-duration": "0s" }; };
Transition.prototype.getTransitionCss = function(a) {
    a = a || "ease-out";
    return{
        "-webkit-transition-property": "-webkit-transform, opacity",
        "-webkit-transition-duration": this.duration + "ms",
        "-webkit-transition-timing-function": a,
        "-moz-transition-property": "-moz-transform, opacity",
        "-moz-transition-duration": this.duration + "ms",
        "-moz-transition-timing-function": a,
        "-o-transition-property": "-o-transform, opacity",
        "-o-transition-duration": this.duration + "ms",
        "-o-transition-timing-function": a,
        "-ms-transition-property": "-ms-transform, opacity",
        "-ms-transition-duration": this.duration + "ms",
        "-ms-transition-timing-function": a
    };
};
Transition.applyCss = function(a, b) { $.each(a, function(a, d) { $(b).css(a, d); }); };
Transition.prototype.applyCss = function(a, b) { Transition.applyCss(a, b); };
Transition.prototype.apply = function(a, b, c, d) {
    var e = this, f = {}, g = {}, b = b || e.target.ref, d = d || "ease-out";
    this.hasContext || this.sniffContext();
    !this.reverse && !this.wipe ? (f = e.getOffscreenCss(!1), g = e.getZeroCss()) : (f = e.getZeroCss(), g = e.getOffscreenCss(!1));
    var h = e.getOffscreenCss(!0);
    b.unbind("webkitTransitionEnd transitionend oTransitionEnd");
    e.applyCss(e.getImmediateCss(), b);
    e.applyCss(f, b);
    e.target.runningTransition = e;
    setTimeout(function() {
        var f = !1;
        b.bind("webkitTransitionEnd transitionend oTransitionEnd",
            function() {
                e.target.runningTransition = null;
                b.unbind("webkitTransitionEnd transitionend oTransitionEnd");
                a && !f && (f = !0, a());
            });
        0 < e.duration && 0 < b.length && setTimeout(function() { if (a && !f && e.target.runningTransition == e)b.unbind("webkitTransitionEnd transitionend oTransitionEnd"), e.target.runningTransition = null, f = !0, a(); }, 2 * e.duration);
        e.applyCss(e.getTransitionCss(d), b);
        e.applyCss(g, b);
        e.pan && c && (e.applyCss(e.getTransitionCss(d), c), e.applyCss(h, c));
        if ((!player.canAnimate || 0 == e.duration || 0 == b.length) && a)
            b.unbind("webkitTransitionEnd transitionend oTransitionEnd"),
                a && a();
    }, 0);
};
Transition.prototype.applyCustom = function(a) { this.target.animations[this.animationid].start(this.target, !1, player.activeTimeline, a); };
Transition.bounce = function(a, b) {
    if (player.canAnimate) {
        var c = new Transition({ objectType: "Bounce" });
        c.duration = 100;
        c.direction = b;
        c.transition = Transition.TransType.fly;
        $.each(a, function(a, b) {
            c.applyCss(c.getImmediateCss(), b);
            c.applyCss(c.getZeroCss(), b);
        });
        setTimeout(function() {
            $.each(a, function(a, b) {
                c.applyCss(c.getTransitionCss(), b);
                c.applyCss(c.getOffscreenCss(), b);
                b.unbind("webkitTransitionEnd transitionend oTransitionEnd");
                b.bind("webkitTransitionEnd transitionend oTransitionEnd", function() {
                    c.duration =
                        400;
                    b.unbind("webkitTransitionEnd transitionend oTransitionEnd");
                    c.applyCss(c.getTransitionCss(), b);
                    c.applyCss(c.getZeroCss(), b);
                });
            });
        }, 0);
    }
};
Transition.prototype.convertToAnimation = function(a) {
    if (this.transition == Transition.TransType.custom)return a.animations[this.animationid];
    if (this.convertedAnimation)return this.convertedAnimation;
    this.runCount++;
    var b = new Animation, c = new bwAnimation;
    c.setDuration(this.duration);
    c.SetEffects(this.transition);
    c.TransitionIn = !0;
    c.setStartXPos(a.originalX);
    c.setStartYPos(a.originalY);
    c.setStartAlpha(100);
    c.setStartXScale(1);
    c.setStartYScale(1);
    c.setEndXPos(a.originalX);
    c.setEndYPos(a.originalY);
    c.setEndAlpha(100);
    c.setEndRotation(0);
    c.setEndXScale(1);
    c.setEndYScale(1);
    a.animations[b.id] = b;
    if (c.getFlyEnabled()) {
        var d = this.direction;
        d & bwAnimation.TRANS_DIR_LEFT ? c.setStartXPos(-a.width) : d & bwAnimation.TRANS_DIR_RIGHT && c.setStartXPos(a.container.width());
        d & bwAnimation.TRANS_DIR_TOP ? c.setStartYPos(-a.height) : d & bwAnimation.TRANS_DIR_BOTTOM && c.setStartYPos(a.container.height());
    }
    c.getFadeEnabled() && c.setStartAlpha(0);
    c.getGrowEnabled() && (c.setStartXScale(0), c.setStartYScale(0));
    c.m_bReverse = this.reverse || this.wipe;
    b.bwa = c;
    b.item = a;
    b.target = a.ref;
    b.isTransition = !0;
    b.uniqueID = "trans_" + a.getFullObjref() + "_" + Animation.sequence++;
    b.duration = this.duration;
    return this.convertedAnimation = b;
};
var Animation = function() {
    this.running = !1;
    this.startTime = 0;
    this.ms = -1;
};
Animation.sequence = 0;
Animation.prototype.getAnimationName = function() { return this.uniqueID; };
Animation.prototype.isTimeWithinAnimation = function(a) { return a >= this.startTime && a <= this.startTime + this.duration; };
Animation.prototype.isTimeAfterAnimation = function(a) { return a > this.startTime + this.duration; };
Animation.prototype.step = function(a) {
    if (this.running && this.target && this.timeline.visible && (a -= this.startTime, !(a > this.duration && this.ended && !this.persistent))) {
        this.ended = !1;
        this.seek(this.target, this.reverse, a, !0);
        if (this.showOnFirstStep || this.item.showOnFirstStep)player.addToShowQueue(this.item, !0), this.showOnFirstStep = !1, this.item.showOnFirstStep = !1;
        a > this.duration && this.end();
    }
};
Animation.prototype.seek = function(a, b, c) {
    if (!(!a || !this.item.ref || a != this.item.ref && a.attr("id") != this.item.ref.attr("id")) && !(this.ms == c && 0 != this.ms)) {
        if (c > this.bwa.m_nDuration)c = this.bwa.m_nDuration;
        if (this.item.ref) {
            this.ms = c;
            var b = this.bwa.GetTransformAtTime(c), d = new MatrixTransform, e = c = "", f = this.item.rotatexpos, g = this.item.rotateypos;
            this.item.maskTranslate && (c += this.item.maskTranslate, e += this.item.maskTranslateIE);
            if (b.scale && !isNaN(b.scale.x)) {
                var h = 1;
                if (void 0 !== this.item.scale && 1 != this.item.scale)
                    h =
                        this.item.scale;
                d.scale(b.scale.x / 100 * h, b.scale.y / 100 * h);
                c += "scale(" + b.scale.x / 100 * h + "," + b.scale.y / 100 * h + ") ";
                e += "scale(" + b.scale.x / 100 * h + "," + b.scale.y / 100 * h + ") ";
            } else void 0 !== this.item.scale && 1 != this.item.scale && (d.scale(this.item.scale, this.item.scale), c += "scale(" + this.item.scale + ") ", e += "scale(" + this.item.scale + ") ");
            if (b.position && !isNaN(b.position.x) && (b.position.x = parseInt(b.position.x), b.position.y = parseInt(b.position.y), this.item))
                this.item.x = parseInt(b.position.x), this.item.y = parseInt(b.position.y),
                    this.item.ref.css("left", this.item.x + this.item.xoffset), this.item.ref.css("top", this.item.y + this.item.yoffset);
            this.item.realRotation = this.item.rotation;
            isNaN(b.rotation) ? 0 != this.item.rotation && (c += "rotate(" + this.item.rotation + "deg) ", e += "rotate(" + this.item.rotation + "deg) ") : (d.rotateDegrees(parseInt(b.rotation)), b.rotation = parseInt(b.rotation), d = parseInt(b.rotation) % 360, c += "rotate(" + d + "deg) ", e += "rotate(" + d + "deg) ", this.item.rotation = d);
            isNaN(b.alpha) || $(a).css("opacity", b.alpha / 100);
            $(a).css("-webkit-transform-origin",
                f + void 0 + "px " + (g + void 0) + "px");
            $(a).css("-webkit-transform", c);
            $(a).css("-moz-transform-origin", f + void 0 + "px " + (g + void 0) + "px");
            $(a).css("-moz-transform", c);
            $(a).css("-ms-transform-origin", f + void 0 + "px " + (g + void 0) + "px");
            $(a).css("-ms-transform", e);
            a.hasTransformed = !0;
            this.item.updateMatrix();
            this.item.currentTransform = b;
            this.item.rotation = this.item.realRotation;
            this.item.handleVarChanged("animationstep", "animationstep");
        }
    }
};
Animation.prototype.start = function(a, b, c, d, e) {
    this.timeline = c;
    var f = c.getAnimationTime();
    if (void 0 != e)f = e;
    else if (player.currentTimelineEvent)f = player.currentTimelineEvent.time;
    if (f + this.duration > c.duration)c.duration = f + this.duration;
    if (!this.item.transitioning)
        if (this.running && a == this.target && b != this.reverse && (c = f - this.startTime, c < this.duration && (f = f - this.duration + c)), this.endOtherAnimationsForItem(this.item), this.target = a, this.reverse = b, this.startTime = f, this.running = !0, this.ended = !1, this.item.currentTransform =
            null, this.item.animating = !0, this.item.animationEnded = !1, this.isZeroLength)this.bwa.m_bReverse = this.reverse, this.seek(this.target, this.reverse, 0, !0), this.end();
        else {
            if (this.item.justShowed)player.removeFromShowQueue(this.item), this.item.ref && this.item.ref.hide(), this.showOnFirstStep = !0;
            this.hasRun = !0;
            player.currentAnimations[this.uniqueID] = this;
            this.endCallback = d;
            player.ensureTicking();
        }
};
Animation.prototype.finish = function(a) { !this.ended && this.running && (this.seek(this.target, this.reverse, this.duration, !0), this.end(a)); };
Animation.prototype.end = function(a) {
    var b = this;
    if (!this.ended)
        this.ended = !0, this.item.animationEnded = !0, b.item.updateMatrixComplete(!0), a || (this.item && this.item.handleEvent && this.item.handleEvent("onanimationcomplete", this.reverse, function(a, d, e) {
            a = $(e.xml).attr("id");
            e = "true" == $(e.xml).attr("reverse");
            return b.id == a && b.reverse == e;
        }, !1, !0, !1), this.endCallback && this.endCallback());
};
Animation.prototype.endOtherAnimationsForItem = function(a) {
    var b = this;
    $.each(player.currentAnimations, function(c, d) { d.item == a && d != b && d.finish(!0); });
};
Animation.getBezierPoint = function(a, b, c, d, e) {
    var a = 1 - a,
        f = new function(a, b) {
            a || (a = 0);
            b || (b = 0);
            return{ x: a, y: b };
        };
    f.x = b.x * a * a * a + d.x * 3 * a * a * (1 - a) + e.x * 3 * a * (1 - a) * (1 - a) + c.x * (1 - a) * (1 - a) * (1 - a);
    f.y = b.y * a * a * a + d.y * 3 * a * a * (1 - a) + e.y * 3 * a * (1 - a) * (1 - a) + c.y * (1 - a) * (1 - a) * (1 - a);
    return f;
};
Animation.EasingLookups = {};
Animation.getEasingLookup = function(a) {

    function b(a, b, c, d) {
        for (var j = -1, k = {}, l = 0; 1 >= l; l += 0.01)for (var m = Animation.getBezierPoint(l, new Point(0, 0), new Point(1, 1), new Point(a, b), new Point(c, d)), n = Math.round(100 * m.x), p = j + 1; p <= n; p++)k[p] = m.y, j = p;
        k[0] = 0;
        k[100] = 1;
        return k;
    }

    function c() {
        for (var a = {}, b = 0; 100 >= b; b++) {
            var c = b / 100, d = void 0;
            c < 1 / 2.75 ? d = 7.5625 * Math.pow(c, 2) : c < 2 / 2.75 ? (c -= 1.5 / 2.75, d = 7.5625 * Math.pow(c, 2) + 0.75) : c < 2.5 / 2.75 ? (c -= 2.25 / 2.75, d = 7.5625 * Math.pow(c, 2) + 0.9375) : (c -= 2.625 / 2.75, d = 7.5625 * Math.pow(c,
                2) + 0.984375);
            a[b] = d;
        }
        return a;
    }

    if (a in Animation.EasingLookups)return Animation.EasingLookups[a];
    switch (a) {
    case bwTween.EASE_IN:
        Animation.EasingLookups[a] = b(0.42, 0, 1, 1);
        break;
    case bwTween.EASE_OUT:
        Animation.EasingLookups[a] = b(0, 0, 0.58, 1);
        break;
    case bwTween.EASE_INOUT:
        Animation.EasingLookups[a] = b(0.42, 0, 0.58, 1);
        break;
    case bwTween.EASE_BOUNCE:
        Animation.EasingLookups[a] = c();
        break;
    default:
        for (var d = 0; 100 >= d; d++)points[d] = d / 100;
        Animation.EasingLookups[a] = [];
    }
    return Animation.EasingLookups[a];
};
Animation.endForItem = function(a) { $.each(player.currentAnimations, function(b, c) { c.item == a && c.end(!0); }); };
Animation.finishForTimeline = function(a, b) {
    var c = b;
    $.each(player.currentAnimations, function(d, e) { e.timeline == a && b >= e.startTime && b <= e.startTime + e.duration && (c = Math.max(c, e.startTime + e.duration)); });
    a.currentTime = c;
};
Animation.getEasedPercent = function(a, b) {
    var c = Animation.getEasingLookup(b), d = Math.round(100 * a);
    return c[d];
};
var BlendMode = { NORMAL: 1, LAYER: 2 };

function Point(a, b) {
    this.x = a;
    this.y = b;
};

function bwAnimation(a) {
    this.m_strEasing = bwAnimation.EASE_CUBIC;
    this.m_nAnimationType = this.m_nCurrentTime = this.m_nDuration = this.m_nStartTime = this.m_nTriggerTime = 0;
    this.m_bTransitionIn = !0;
    this.m_nStartY = this.m_nStartX = 0;
    this.m_nSpinCount = 1;
    this.m_nCurRotation = this.m_nCurYPos = this.m_nCurXPos = 0;
    this.m_nCurYScale = this.m_nCurXScale = 1;
    this.m_nEndY = this.m_nEndX = 3735928495;
    this.m_nStartScaleY = this.m_nStartScaleX = this.m_nEndRotation = 0;
    this.m_nEndScaleY = this.m_nEndScaleX = 1;
    this.m_nStartAlpha = 0;
    this.m_nEndAlpha =
        1;
    this.m_aoTarget = null;
    this.m_bAdjustRotation = !0;
    this.m_bTimelineAnimating = this.m_bAnimating = !1;
    this.m_aoTarget = a;
}

bwAnimation.TRANS_APPEAR = "appear";
bwAnimation.TRANS_FADE = "fade";
bwAnimation.TRANS_FLY = "fly";
bwAnimation.TRANS_GROW = "grow";
bwAnimation.TRANS_SPIN = "spin";
bwAnimation.TRANS_MASK = "mask";
bwAnimation.TRANS_INT_FADE = 1;
bwAnimation.TRANS_INT_FLY = 2;
bwAnimation.TRANS_INT_GROW = 4;
bwAnimation.TRANS_INT_SPIN = 8;
bwAnimation.TRANS_INT_MASK = 16;
bwAnimation.TRANS_DIR_LEFT = 1;
bwAnimation.TRANS_DIR_RIGHT = 2;
bwAnimation.TRANS_DIR_TOP = 4;
bwAnimation.TRANS_DIR_BOTTOM = 8;
bwAnimation.EASE_BOUNCE = "bounce";
bwAnimation.EASE_CIRCULAR = "circular";
bwAnimation.EASE_CUBIC = "cubic";
bwAnimation.EASE_EXPONENTIAL = "exponetial";
bwAnimation.EASE_LINEAR = "linear";
bwAnimation.EASE_QUADRATIC = "quadradic";
bwAnimation.EASE_QUARTIC = "quartic";
bwAnimation.EASE_QUINTIC = "quintic";
bwAnimation.EASE_SINE = "sine";
bwAnimation.prototype.getAppear = function() { return 0 == this.m_nAnimationType; };
bwAnimation.prototype.getFlyEnabled = function() { return 0 < (this.m_nAnimationType & bwAnimation.TRANS_INT_FLY); };
bwAnimation.prototype.getFadeEnabled = function() { return 0 < (this.m_nAnimationType & bwAnimation.TRANS_INT_FADE); };
bwAnimation.prototype.getGrowEnabled = function() { return 0 < (this.m_nAnimationType & bwAnimation.TRANS_INT_GROW); };
bwAnimation.prototype.getSpinEnabled = function() { return 0 < (this.m_nAnimationType & bwAnimation.TRANS_INT_SPIN); };
bwAnimation.prototype.getMaskEnabled = function() { return 0 < (this.m_nAnimationType & bwAnimation.TRANS_INT_MASK); };
bwAnimation.prototype.SetEffects = function(a) {
    this.m_nAnimationType = 0;
    0 <= a.indexOf(bwAnimation.TRANS_FADE) && (this.m_nAnimationType += bwAnimation.TRANS_INT_FADE);
    0 <= a.indexOf(bwAnimation.TRANS_FLY) && (this.m_nAnimationType += bwAnimation.TRANS_INT_FLY);
    0 <= a.indexOf(bwAnimation.TRANS_GROW) && (this.m_nAnimationType += bwAnimation.TRANS_INT_GROW);
    0 <= a.indexOf(bwAnimation.TRANS_SPIN) && (this.m_nAnimationType += bwAnimation.TRANS_INT_SPIN);
    0 <= a.indexOf(bwAnimation.TRANS_MASK) && (this.m_nAnimationType += bwAnimation.TRANS_INT_MASK);
    if (a == bwAnimation.TRANS_APPEAR)this.m_nDuration = this.m_nAnimationType = 0;
};
bwAnimation.prototype.getAnimating = function() { return this.m_bAnimating; };
bwAnimation.prototype.setTarget = function(a) { this.m_aoTarget = a; };
bwAnimation.prototype.getTarget = function() { return this.m_aoTarget; };
bwAnimation.prototype.getDuration = function() { return this.m_nDuration; };
bwAnimation.prototype.setDuration = function(a) { this.m_nDuration = a; };
bwAnimation.prototype.getStartXPos = function() { return this.m_nStartX; };
bwAnimation.prototype.setStartXPos = function(a) { this.m_nStartX = a; };
bwAnimation.prototype.getStartYPos = function() { return this.m_nStartY; };
bwAnimation.prototype.setStartYPos = function(a) { this.m_nStartY = a; };
bwAnimation.prototype.getEndXPos = function() { return this.m_nEndX; };
bwAnimation.prototype.setEndXPos = function(a) { this.m_nEndX = a; };
bwAnimation.prototype.getEndYPos = function() { return this.m_nEndY; };
bwAnimation.prototype.setEndYPos = function(a) { this.m_nEndY = a; };
bwAnimation.prototype.getEndRotation = function() { return this.m_nEndRotation; };
bwAnimation.prototype.setEndRotation = function(a) { this.m_nEndRotation = a; };
bwAnimation.prototype.getStartXScale = function() { return this.m_nStartScaleX; };
bwAnimation.prototype.setStartXScale = function(a) { this.m_nStartScaleX = a; };
bwAnimation.prototype.getStartYScale = function() { return this.m_nStartScaleY; };
bwAnimation.prototype.setStartYScale = function(a) { this.m_nStartScaleY = a; };
bwAnimation.prototype.getEndXScale = function() { return this.m_nEndScaleX; };
bwAnimation.prototype.setEndXScale = function(a) { this.m_nEndScaleX = a; };
bwAnimation.prototype.getEndYScale = function() { return this.m_nEndScaleY; };
bwAnimation.prototype.setEndYScale = function(a) { this.m_nEndScaleY = a; };
bwAnimation.prototype.getEndAlpha = function() { return this.m_nEndAlpha; };
bwAnimation.prototype.setEndAlpha = function(a) { this.m_nEndAlpha = a; };
bwAnimation.prototype.getStartAlpha = function() { return this.m_nStartAlpha; };
bwAnimation.prototype.setStartAlpha = function(a) { this.m_nStartAlpha = a; };
bwAnimation.prototype.GetTransformAtTime = function(a) {
    var b = null, c = null, d = NaN, e = NaN, a = a / this.m_nDuration;
    this.m_bReverse && (a = 1 - a);
    0 > a && (a = 0);
    if (1 < a || 0 == this.m_nDuration)a = 1;
    this.m_nCurrentTime >= this.m_nDuration && (a = 1);
    a = Animation.getEasedPercent(a, bwTween.EASE_INOUT);
    this.m_nCurXPos = this.m_nEndX;
    this.m_nCurYPos = this.m_nEndY;
    this.m_nAnimationType & bwAnimation.TRANS_INT_FADE && (e = this.m_nStartAlpha + (this.m_nEndAlpha - this.m_nStartAlpha) * a);
    if (this.m_nAnimationType & bwAnimation.TRANS_INT_FLY)
        this.m_nCurXPos =
            this.m_nStartX + (this.m_nEndX - this.m_nStartX) * a, this.m_nCurYPos = this.m_nStartY + (this.m_nEndY - this.m_nStartY) * a, b = new Point(this.m_nCurXPos, this.m_nCurYPos);
    if (this.m_nAnimationType & bwAnimation.TRANS_INT_GROW)this.m_nCurXScale = (this.m_nEndScaleX - this.m_nStartScaleX) * a + this.m_nStartScaleX, this.m_nCurYScale = (this.m_nEndScaleY - this.m_nStartScaleY) * a + this.m_nStartScaleY, c = new Point(100 * this.m_nCurXScale, 100 * this.m_nCurYScale);
    this.m_nAnimationType & bwAnimation.TRANS_INT_SPIN && (d = (360 * this.m_nSpinCount + this.m_nEndRotation) *
        a);
    return{ position: b, scale: c, rotation: d, alpha: e };
};
bwAnimation.prototype.getAdjustRotation = function() { return this.m_bAdjustRotation; };
bwAnimation.prototype.setAdjustRotation = function(a) { this.m_bAdjustRotation = a; };
bwAnimation.prototype.StopAnimation = function() { if (this.m_bAnimating)this.m_bAnimating = !1; };
bwAnimation.prototype.PlayAnimation = function() {
    if (null != this.m_aoTarget) {
        if (3735928495 == this.m_nEndX)this.m_nEndX = this.m_aoTarget.x;
        if (3735928495 == this.m_nEndY)this.m_nEndY = this.m_aoTarget.y;
        this.m_nStartTime = this.getTimer();
        (this.m_bAnimating = !0) && this.StepAnimation(null);
    }
};
bwAnimation.prototype.StepAnimation = function() {
    var a = !1;
    this.m_nCurrentTime = this.getTimer() - this.m_nStartTime;
    if (this.m_nCurrentTime >= this.m_nDuration)a = !0, this.m_nCurrentTime = this.m_nDuration, this.m_bAnimating = !1;
    this.UpdateTarget();
    return a;
};
bwAnimation.prototype.Destroy = function() {
    this.StopAnimation();
    this.m_aoTarget = null;
};
var bwTween = { EASE_BOUNCE: "bounce", EASE_CIRCULAR: "circular", EASE_CUBIC: "cubic", EASE_EXPONENTIAL: "exponetial", EASE_LINEAR: "linear", EASE_QUADRATIC: "quadradic", EASE_QUARTIC: "quartic", EASE_QUINTIC: "quintic", EASE_SINE: "sine", EASE_IN: "easein", EASE_OUT: "easeout", EASE_INOUT: "easeinout" };
var Quiz = function() {
    this.xml = "";
    this.sliderefs = [];
    this.quizrefs = [];
    this.constructElement();
    this.variables.Score = 0;
    this.attemptCount = this.variables.PercentScore = 0;
    this.m_bCompleted = this.m_bEvaluated = !1;
};
Quiz.prototype = new Element;
Quiz.prototype.objectType = "Quiz";
Quiz.prototype.innerType = "Quiz";
Quiz.prototype.toBaseData = Element.prototype.toData;
Quiz.prototype.toData = function() {
    var a = this.toBaseData();
    if (0 < this.attemptCount)a.attemptCount = this.attemptCount;
    return a;
};
Quiz.prototype.updateBaseFromData = Element.prototype.updateFromData;
Quiz.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    if (a.attemptCount)this.attemptCount = a.attemptCount;
};
Quiz.prototype.SetResumeData = function(a) {
    this.m_bEvaluated = "1" == a.substr(0, 1);
    this.m_bCompleted = "1" == a.substr(1, 1);
};
Quiz.prototype.GetResumeData = function() {
    var a;
    a = "" + (this.m_bEvaluated ? "1" : "0");
    return a += this.m_bCompleted ? "1" : "0";
};
Quiz.prototype.loadFromXML = function(a, b) {
    var c = this;
    this.parent = b;
    this.children = {};
    this.id = $(a).attr("id");
    this.lmstext = $(a).attr("lmstext");
    this.issurvey = $(a).attr("issurvey");
    this.passpercent = $(a).attr("passpercent");
    this.submitall = $(a).attr("submitall");
    this.submitunanswered = $(a).attr("submitunanswered");
    this.scoretype = $(a).attr("scoretype");
    this.variables.PassPercent = this.passpercent;
    this.variables.PassScore = 0;
    this.loadElementInfoFromXML(a);
    $(a).children("sliderefs").children("slideref").each(function(a,
        b) {
        var d = $(b).attr("id");
        c.sliderefs.push(d);
        c.parseObjref(d).target.quiz = c;
    });
    $(a).children("quizrefs").children("quizref").each(function(a, b) {
        var d = { id: $(b).attr("id"), weight: parseInt($(b).attr("weight")), mustpass: "true" == $(b).attr("id") };
        c.quizrefs.push(d);
    });
    if (b.g_listQuizzes) {
        var d = new QuizData(this.id, this.lmstext);
        d.nPassingScore = this.passpercent;
        b.g_listQuizzes[this.id] = d;
    }
};
Quiz.prototype.AllQuestionsSubmitted = function(a) {
    if (this.m_bCompleted)return"true";
    var b = !0;
    $.each(this.sliderefs, function(c, d) {
        var e = story.parseObjref(d).target;
        if (e) {
            var f = function(c) {
                b = b && c.isAnswered();
                a || (b = b && c.isSubmitted());
            };
            "SlideDraw" == e.innerType ? $.each(e.children, function(a, b) {
                !b.hasRestoredInteractions && b.compactResumeData && b.restoreFromResumeData(b.compactResumeData, !0);
                f(b);
            }) : f(e);
        }
    });
    return b ? "true" : "false";
};
Quiz.prototype.AllQuestionsAnswered = function() { return this.AllQuestionsSubmitted(!0); };
Quiz.prototype.QuizComplete = function() {
    var a = this.m_bCompleted;
    this.quizrefs.forEach(function(b) {
        b = story.quizzes[b.id];
        a = a && b.QuizComplete();
    });
    return a ? "true" : "false";
};
Quiz.SEARCH_UNANSWERED = "SEARCH_UNANSWERED";
Quiz.SEARCH_UNSUBMITTED = "SEARCH_UNSUBMITTED";
Quiz.SEARCH_VIEWED = "SEARCH_VIEWED";
Quiz.prototype.findNextSlide = function(a, b) {
    var c = [];
    $.each(this.sliderefs, function(a, b) {
        var d = story.parseObjref(b).target;
        d && ("SlideDraw" == d.innerType ? $.each(d.children, function(a, b) { c.push(b); }) : c.push(d));
    });
    b && c.push(b);
    for (var d = player.currentWindowSlide || player.currentFramedSlide || player.currentSlide(), e = !1, f = 0; f < 2 * c.length; f++) {
        var g = c[f % c.length];
        if (e)
            switch (a) {
            case Quiz.SEARCH_UNANSWERED:
                if (!g.isAnswered())return g;
                break;
            case Quiz.SEARCH_UNSUBMITTED:
                if (!g.isSubmitted())return g;
                break;
            case Quiz.SEARCH_VIEWED:
                if (g.variables.Visited)return g;
            }
        else if (g ===
            d || f >= c.length - 1)e = !0;
    }
    return null;
};
Quiz.prototype.setquizcomplete = function(a) {
    a = this.parseObjrefFromXML(a).target;
    a.m_bCompleted = !0;
    player.lmsManager.handleQuizComplete(a);
};
Quiz.prototype.Passed = function() { return this.variables.Score >= this.variables.PassScore ? "true" : "false"; };
Quiz.dump = function() {
    $.each(story.quizzes, function(a, b) {
        $.each(b.sliderefs, function(a, d) {
            var e = story.parseObjref(d).target;
            if (e) {
                var f = function(a, b) {
                    var c = 0;
                    if (0 < b.attempts.length)c = b.attempts[0].answers.length;
                    console.log(["d:interaction", b.id, b.concatChoices(b.lmsResponses), b.GetResumeData(), b.attempts.length, c, b]);
                };
                "SlideDraw" == e.innerType && $.each(e.children, function(a, c) { ("partial" != b.scoretype || c.variables.Visited) && $.each(c.interactions, f); });
                ("partial" != b.scoretype || e.variables.Visited) && $.each(e.interactions,
                    f);
            }
        });
    });
};
var Answer = function() {
    this.xml = "";
    this.constructElement();
};
Answer.prototype = new Element;
Answer.prototype.objectType = "Answer";
Answer.prototype.innerType = "Answer";
Answer.prototype.loadFromXML = function(a, b) {
    this.parent = b;
    this.children = {};
    this.id = $(a).attr("id");
    this.points = $(a).attr("points");
    this.status = $(a).attr("status");
    this.actions = $(a).children("actions").children();
    this.evaluate = $(a).children("evaluate").children();
};
var Choice = function() {
    this.xml = "";
    this.constructElement();
    this.selected = !1;
    this.pairs = [];
};
Choice.prototype = new Element;
Choice.prototype.objectType = "Choice";
Choice.prototype.innerType = "Choice";
Choice.prototype.loadFromXML = function(a, b) {
    this.parent = b;
    this.children = {};
    this.id = $(a).attr("id");
    this.lmstext = $(a).attr("lmstext");
};
Choice.FromParameters = function(a, b, c) {
    var d = new Choice;
    d.id = a;
    d.lmstext = b;
    d.parent = c;
};
Choice.prototype.hasPair = function(a) {
    for (var b = 0; b < this.pairs.length; b++)if (this.pairs[b] == a)return!0;
    return!1;
};
Choice.prototype.findPair = function(a) {
    for (var b = 0; b < this.pairs.length; b++)if (this.pairs[b] == a)return a;
    return null;
};
Choice.prototype.addPair = function(a) { this.hasPair(a) || this.pairs.push(a); };
var ResponseData = function(a, b, c, d, e, f) {
    this.m_bValid = !0;
    this.m_bPairResponse = a;
    this.m_strChoice = b;
    this.m_strStatement = c || "";
    if (!b || 0 == this.m_strChoice.length)this.m_bValid = !1;
    else if (this.m_bPairResponse && (!c || 0 == this.m_strStatement.length))this.m_bValid = !1;
    this.lmstext = d;
    this.statementLMSText = e;
    this.interaction = f;
};
ResponseData.TYPE_STATEMENTS = "statements";
ResponseData.TYPE_CHOICES = "choices";
ResponseData.prototype.IsPair = function() { return this.m_bPairResponse; };
ResponseData.prototype.ChoiceID = function() { return this.m_strChoice; };
ResponseData.prototype.StatementID = function() { return this.m_strStatement; };
ResponseData.prototype.IsValid = function() { return this.m_bValid; };
ResponseData.prototype.GetResumeData = function(a, b) {
    var c;
    c = 0 + (this.m_bPairResponse ? 1 : 0);
    c += this.m_bValid ? 2 : 0;
    c = "" + bwChunk.UBase10toN(c, 1);
    this.m_bValid && (c += this.GetResumeResponseIndex(ResponseData.TYPE_CHOICES, this.m_strChoice, a), this.m_bPairResponse && (c += this.GetResumeResponseIndex(ResponseData.TYPE_STATEMENTS, this.m_strStatement, b)));
    return c;
};
ResponseData.prototype.SetResumeData = function(a, b, c) {
    var d = bwChunk.UBaseNto10(a.substr(0, 1));
    this.m_bPairResponse = 0 < (d & 1);
    this.m_bValid = 0 < (d & 2);
    a = a.substr(1);
    this.m_bValid && (a = this.SetResumeResponse(ResponseData.TYPE_CHOICES, a, b), this.m_bPairResponse && this.SetResumeResponse(ResponseData.TYPE_STATEMENTS, a, c));
};
ResponseData.prototype.GetResumeResponseIndex = function(a, b, c) {
    var d = b.split("."), e = -1, f = "";
    if (2 == d.length && d[0] == a) {
        var a = 0, g;
        for (g in c) {
            if (c[g].id == d[1]) {
                e = a;
                break;
            }
            a++;
        }
    }
    return f = 0 <= e ? "0" + bwChunk.UBase10toN(e, 2) : "1" + bwChunk.CreateChunk(b);
};
ResponseData.prototype.GetResponseByIndex = function(a, b) {
    var c = 0, d;
    for (d in a) {
        if (c == b)return a[d];
        c++;
    }
    return null;
};
ResponseData.prototype.SetResumeResponse = function(a, b, c) {
    var d = "0" == b.substr(0, 1), e = -1, b = b.substr(1);
    d ? (e = bwChunk.UBaseNto10(b.substr(0, 2)), b = b.substr(2), c = this.GetResponseByIndex(c, e).id, a == ResponseData.TYPE_CHOICES ? (this.m_strChoice = a + "." + c, this.lmstext = this.GetLMSText(c)) : (this.m_strStatement = a + "." + c, this.statementLMSText = this.GetLMSText(c))) : (b = new bwChunk(b), a == ResponseData.TYPE_CHOICES ? (this.m_strChoice = b.Data(), this.lmstext = this.GetLMSText(this.m_strChoice)) : (this.m_strStatement = b.Data(), this.statementLMSText =
        this.GetLMSText(this.m_strStatement)), b = b.Remainder());
    return b;
};
ResponseData.prototype.GetLMSText = function(a) { return!this.interaction ? "" : (a = this.interaction.children[a]) ? a.lmstext : ""; };
var Interaction = function() {
    this.xml = "";
    this.choices = {};
    this.answers = {};
    this.statements = {};
    this.responseActions = [];
    this.responses = {};
    this.correctResponses = {};
    this.attempts = [];
    this.variables = {};
    this.lmsResponses = [];
    this.lmsCorrectResponses = [];
    this.constructElement();
    this.m_bUnanswered = this.m_bAnswered = this.scoreAO = !1;
    this.m_nUserAnswerIndex = -1;
};
Interaction.prototype = new Element;
Interaction.prototype.objectType = "Interaction";
Interaction.prototype.innerType = "Interaction";
Interaction.prototype.toBaseData = Element.prototype.toData;
Interaction.prototype.toData = function() {
    var a = this.toBaseData();
    $.each(this.responses, function(b, c) {
        if (!a.responses)a.responses = {};
        a.responses[b] = c.toData();
    });
    if (0 < this.attempts.length)a.attempts = this.attempts;
    return a;
};
Interaction.prototype.restoreFromResumeChunk = function(a) {
    var b = a.NextUBase10(2);
    this.m_bAnswered = "1" == a.NextString(1);
    this.m_bUnanswered = "1" == a.NextString(1);
    if (0 < b) {
        var c = a.NextString(1), d = a.NextChunkedBase10(), e = a.NextChunkedBase10();
        a.NextChunkedBase10();
        a = "";
        switch (c) {
        case "0":
            a = "correct";
            break;
        case "1":
            a = "incomplete";
            break;
        case "2":
            a = "incorrect";
            break;
        case "3":
            a = "neutral";
        }
        this.variables.AttemptCount = b;
        this.variables.Points = d;
        this.variables.Status = a;
        if ("incomplete" != this.variables.Status)
            for (; this.attempts.length <
                b;)this.attempts.push({ time: player.elapsedTime(), isfinal: !0, sent: !1, pointsAwarded: e, result: a, answers: [] });
    } else {
        b = a.NextUBase10(2);
        this.lmsResponses = [];
        c = a.NextString();
        for (a = 0; a < b; a++) {
            c = new bwChunk(c);
            e = new ResponseData(!1, "", "", "", "", this);
            e.SetResumeData(c.Data(), this.choices, this.statements);
            this.lmsResponses.push(e);
            d = this.choices[e.ChoiceID()];
            e = this.statements[e.StatementID()];
            if (d)d.selected = !0, this.responses[d.longID] = d, this.m_bUnanswered = !1, e && (d.addPair(e), e.addPair(d));
            c = c.Remainder();
        }
        this.evaluate(!0,
            !0, !0, !0);
    }
    Interaction.updateScore("from restoreFromResumeChunk");
};
Interaction.prototype.GetResumeData = function() {
    var a = "", b = this.attempts.length, c = parseInt(this.variables.Points) || 0, d = this.variables.Status, a = a + bwChunk.UBase10toN(b, 2), a = a + (this.m_bAnswered ? "1" : "0"), a = a + (this.m_bUnanswered ? "1" : "0");
    if (0 < b) {
        switch (d) {
        case "correct":
            a += "0";
            break;
        case "incomplete":
            a += "1";
            break;
        case "incorrect":
            a += "2";
            break;
        case "neutral":
            a += "3";
        }
        a += bwChunk.CreateChunk(bwChunk.Base10toN(c));
        1 < b && (c = (b = this.attempts[this.attempts - 1]) ? parseInt(b.pointsAwarded) || 0 : 0);
        a += bwChunk.CreateChunk(bwChunk.Base10toN(c));
        a += bwChunk.CreateChunk(bwChunk.Base10toN(this.m_nUserAnswerIndex));
    } else {
        a += bwChunk.UBase10toN(this.lmsResponses.length, 2);
        for (b = 0; b < this.lmsResponses.length; b++)a += bwChunk.CreateChunk(this.lmsResponses[b].GetResumeData(this.choices, this.statements));
    }
    return a;
};
Interaction.prototype.updateBaseFromData = Element.prototype.updateFromData;
Interaction.prototype.updateFromData = function(a) {
    this.updateBaseFromData(a);
    if (a.responses)this.responses = {}, $.each(a.responses, function() {});
    if (a.attempts)this.attempts = a.attempts;
};
Interaction.prototype.resetBase = Element.prototype.reset;
Interaction.prototype.reset = function() {
    this.resetBase();
    this.choices = {};
    this.answers = {};
    this.statements = {};
    this.responseActions = [];
    this.responses = {};
    this.correctResponses = {};
    this.lmsResponses = [];
    this.lmsCorrectResponses = [];
    this.attempts = [];
    this.variables = {};
    this.loadFromXML(this.xml, this.parent);
    this.m_nUserAnswerIndex = -1;
};
Interaction.prototype.loadFromXML = function(a, b) {
    var c = this;
    this.slide = this.parent = b;
    this.children = {};
    this.xml = a;
    this.id = $(a).attr("id");
    this.lmsid = $(a).attr("lmsid");
    this.lmstext = $(a).attr("lmstext");
    this.interactionType = $(a).attr("type");
    this.maxpoints = $(a).attr("maxpoints");
    this.aoinclude = $(a).attr("aoinclude");
    this.istracked = $(a).attr("istracked");
    this.issurvey = "true" == $(a).attr("issurvey");
    $(a).children("choices").children("choice").each(function(a, b) {
        var f = new Choice;
        f.loadFromXML(b, this);
        f.longID =
            "choices." + f.id;
        c.choices[f.id] = f;
        c.children[f.id] = f;
    });
    $(a).children("statements").children("statement").each(function(a, b) {
        var f = new Choice;
        f.loadFromXML(b, this);
        f.innerType = "Statement";
        f.longID = "statements." + f.id;
        c.statements[f.id] = f;
        c.children[f.id] = f;
    });
    $(a).children("answers").children("answer").each(function(a, b) {
        var f = new Answer;
        f.loadFromXML(b, this);
        c.answers[f.id] = f;
        c.children[f.id] = f;
    });
    this.responseActions = $(a).children("response_definition").children("actions").children();
    this.variables.AttemptCount =
        0;
    this.variableDefaults.AttemptCount = 0;
};
Interaction.prototype.evaluate = function(a, b, c, d) {
    var e = this, f = this.slide;
    this.scoreAO = !b;
    if (!d)f.responses = {}, this.responses = {}, this.lmsResponses = [];
    this.lmsCorrectResponses = [];
    this.variables.AttemptCount++;
    this.partialEvaluate && (this.variables.AttemptCount = 1);
    var g = !0;
    d || ($.each(e.choices, function(a, b) {
        b.selected = !1;
        b.pairs = [];
    }), $.each(e.statements, function(a, b) { b.pairs = []; }), $.each(this.responseActions, function(a, b) { g && (g = g && f.runAction(b)); }));
    var h = !1, j = !0, k = 0;
    $.each(this.answers, function(a, b) {
        $.each(b.evaluate,
            function() { k++; });
    });
    var l = 0, m;
    for (m in e.responses)l++;
    this.m_bUnanswered = !0;
    var n = 0;
    $.each(this.answers, function(b, d) {
        var m = !0, r = !1, z = 0;
        $.each(d.evaluate, function() { z++; });
        var J = 0 < parseInt(d.points);
        $.each(d.evaluate, function(a, b) {
            var c = b.tagName;
            switch (c) {
            case "other":
                m = !j && !h ? !0 : 1 == k ? !0 : !1;
                break;
            case "equals":
                c = $(b).attr("choiceid");
                c = e.parseObjref(c).target;
                m = m && c.selected;
                r = r || c.selected;
                switch (e.interactionType) {
                case "fillin":
                case "numeric":
                    m = r;
                    break;
                case "multipleresponse":
                    l != z && (m = !1);
                }
                J && e.lmsCorrectResponses.push(new ResponseData(!1,
                    c.id, "", c.lmstext, ""));
                break;
            case "condition":
                m = m && f.evaluateCondition(b, e);
                break;
            case "pair":
                var c = $(b).attr("choiceid"), g = $(b).attr("statementid"), c = e.parseObjref(c).target, g = e.parseObjref(g).target, n = c.hasPair(g);
                if (n) {
                    var p = c.findPair(g), V = 0;
                    $.each(d.evaluate, function(a, b) { -1 < $(b).attr("statementid").indexOf(p.id) && V++; });
                    n = n && V == p.pairs.length;
                }
                m = m && n;
                r = r || n;
                J && e.lmsCorrectResponses.push(new ResponseData(!0, c.id, g.id, c.lmstext, g.lmstext));
                break;
            default:
                console.error("unknown evaluate operation:",
                    c);
            }
        });
        m && (r = !0);
        if (r)e.m_bUnanswered = !1, e.m_bAnswered = !0;
        if (c) {
            if (!e.partialEvaluate)e.partialEvaluate = {};
            e.partialEvaluate.attemptCount = e.variables.AttemptCount;
            if (m)e.partialEvaluate.status = d.status, e.partialEvaluate.points = d.points, e.m_nUserAnswerIndex = n, h = !0;
        } else if (m)e.variables.Status = d.status, e.variables.Points = d.points, e.m_nUserAnswerIndex = n, a || $.each(d.actions, function(a, b) { g && (g = g && f.runAction(b)); }), h = !0;
        j = !1;
        n++;
    });
    c || Interaction.updateScore("from interaction evaluate: " + e.id);
    if (c) {
        if (0 <
            l)this.m_bAnswered = !0;
        this.variables.AttemptCount--;
        return!0;
    }
    h || this.variables.AttemptCount--;
    this.partialEvaluate = null;
    this.noteAttempt();
    player.lmsManager.handleInteractionEvaluated(this);
    return g;
};
Interaction.prototype.noteAttempt = function() {
    var a = { time: player.elapsedTime(), isfinal: !0, sent: !1, pointsAwarded: this.variables.Points, result: this.variables.Status, answers: [] };
    $.each(this.lmsResponses, function(b, c) { a.answers.push(c.m_bPairResponse ? { statementid: c.statementLMSText, choiceid: c.lmstext } : { choiceid: c.lmstext }); });
    this.attempts.push(a);
};
Interaction.prototype.Answered = function() { return this.m_bAnswered ? "true" : "false"; };
Interaction.updateScore = function() {
    $.each(story.quizzes, function(a, b) {
        var c = 0, d = 0, e = 0;
        $.each(b.sliderefs, function(a, g) {
            var h = story.parseObjref(g).target;
            if (h) {
                var j = function(a, b) {
                    e++;
                    d += parseInt(b.maxpoints);
                    var f = parseInt(b.variables.Points) || 0;
                    c += f;
                };
                "SlideDraw" == h.innerType && $.each(h.children, function(a, c) {
                    !c.hasRestoredInteractions && c.compactResumeData && c.restoreFromResumeData(c.compactResumeData, !0);
                    ("partial" != b.scoretype || c.variables.Visited) && $.each(c.interactions, j);
                });
                ("partial" != b.scoretype ||
                    h.variables.Visited) && $.each(h.interactions, j);
            }
        });
        b.variables.Score = c;
        b.maxscore = d;
        b.variables.PercentScore = parseFloat(parseInt(1E4 * c / d) / 100);
        isNaN(b.variables.PercentScore) && (b.variables.PercentScore = 0);
        b.variables.PassScore = Math.ceil(parseFloat(b.variables.PassPercent * d / 100));
        if (window && window.g_oContentResults)window.g_oContentResults.nScore = b.variables.PercentScore;
        b.handleVarChanged(b.getFullVariableRef("Score"), "onvarchanged");
    });
    $.each(story.quizzes, function(a, b) {
        if (0 != b.quizrefs.length) {
            var c =
                    0,
                d = 0;
            $.each(b.quizrefs, function(a, b) {
                var g = story.parseObjref(b.id).target;
                g && !isNaN(g.variables.Score) && (c += g.variables.Score, d += g.maxscore);
            });
            b.variables.Score = c;
            b.maxscore = d;
            b.variables.PercentScore = parseFloat(parseInt(1E4 * c / d) / 100);
            isNaN(b.variables.PercentScore) && (b.variables.PercentScore = 0);
            b.variables.PassScore = Math.ceil(parseFloat(b.variables.PassPercent * d / 100));
            if (window && window.g_oContentResults)window.g_oContentResults.nScore = b.variables.PercentScore;
            b.handleVarChanged(b.getFullVariableRef("Score"),
                "onvarchanged");
        }
    });
};
Interaction.partialEvaluateSlide = function(a) { $.each(a.interactions, function(a, c) { (!c.variables.Status || "unanswered" == c.variables.Status) && c.evaluate(!0, !0, !0); }); };
Interaction.eval_all_unanswered = function(a) {
    var b = {},
        c = function(a) {
            a.compactResumeData && !a.loadedChunkXML && a.resume && a.restoreFromResumeData(a.compactResumeData, !0);
            var c = !1;
            $.each(a.interactions, function(a, b) {
                if (!b.variables.Status || "unanswered" == b.variables.Status) {
                    b.partialEvaluate || b.evaluate(!0, !0, !0);
                    if (b.partialEvaluate)b.variables.Status = b.partialEvaluate.status, b.variables.Points = b.partialEvaluate.points, b.variables.AttemptCount = b.partialEvaluate.attemptCount;
                    b.variables.Status || (b.variables.Status =
                        "unanswered");
                    for (c = !0; b.attempts.length < b.variables.AttemptCount;) {
                        var d = { time: player.elapsedTime(), isfinal: !0, sent: !1, pointsAwarded: b.variables.Points, result: b.variables.Status, answers: [] };
                        b.attempts.push(d);
                    }
                }
                b.m_bAnswered = !0;
            });
            if (c)a.rebuildInteractionData(), b[a.parent.id] = a.parent;
        };
    if (a && "Quiz" == a.innerType)
        a.m_bEvaluated = !0, $.each(a.sliderefs, function(a, b) {
            var f = story.parseObjref(b).target;
            f && ("SlideDraw" == f.innerType ? $.each(f.children, function(a, b) { c(b); }) : c(f));
        }), $.each(b, function(a, b) {
            b.compactResumeData =
                b.getResumeData();
        }), Interaction.updateScore("from eval_all_unanswered");
};
Interaction.setquizcomplete = function(a) {
    a = story.parseObjrefFromXML(a).target;
    a.m_bCompleted = !0;
    player.lmsManager.handleQuizComplete(a);
};

function Scoring() { this.scorerefs = {}; }

Scoring.prototype.loadFromXML = function(a, b) {
    var c = this;
    this.parent = b;
    this.scorerefs = {};
    this.id = $(a).attr("id");
    this.type = $(a).attr("type");
    this.passpercent = $(a).attr("passpercent");
    this.viewthreshold = parseInt($(a).attr("viewthreshold"));
    this.passstatus = $(a).attr("passstatus");
    this.failstatus = $(a).attr("failstatus");
    if (isNaN(this.viewthreshold))this.viewthreshold = 0;
    $(a).children("scorerefs").children("scoreref").each(function(a, b) {
        var f = {};
        f.type = $(b).attr("type");
        f.ref = $(b).attr("ref");
        f.weight = $(b).attr("weight");
        f.maxvalue = $(b).attr("maxvalue");
        f.mustpass = $(b).attr("mustpass");
        c.scorerefs[f.ref] = f;
    });
};

function AOClient() {
    this.endpoint = "http://" + window.location.host + "/services/content/api.asmx";
    if (-1 < location.href.indexOf("aomock=1"))this.endpoint = "/AOMock/AO.asmx";
    this.apiVersion = "0.0";
    this.sendcount = 0;
}

AOClient.prototype.call = function(a, b, c, d) {
    var e = "http://articulate.com/KnowledgeFlash/Services/Content/Api/" + a, f = $.parseXML(b), g = this, h = this.endpoint + "?rand=" + Math.random();
    $.ajax({
        url: h,
        type: "POST",
        dataType: "xml",
        data: f,
        headers: { SOAPAction: e },
        processData: !1,
        contentType: 'text/xml; charset="utf-8"',
        cache: !1,
        success: function(a, b, d) { c && c(a, b, d); },
        error: function() {
            if (-1 < location.search.indexOf("aodebug="))debugger;
            d && !window.manuallyClosing && confirm("Unable to connect to the server.  Please verify you can connect to the internet. Retry?") &&
                g.call(a, b, c, d);
            return!1;
        }
    });
};
AOClient.prototype.wrapWithEnvelope = function(a) { return'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>' + a + "</soap:Body></soap:Envelope>"; };
AOClient.prototype.getVanillaXML = function(a) { return this.wrapWithEnvelope("<" + a + ' xmlns="http://articulate.com/KnowledgeFlash/Services/Content/Api"><contentUrl>' + escape(location.href) + "</contentUrl></" + a + ">"); };
AOClient.prototype.GetApiVersion = function() {
    var a = this;
    this.call("GetApiVersion", this.getVanillaXML("GetApiVersion"), function(b) {
        this.apiVersion = $(b).find("GetApiVersionResult").text();
        a.apiVersionReturned = !0;
    });
};
AOClient.prototype.GetSessionId = function() {
    var a = this;
    this.call("GetSessionId", this.getVanillaXML("GetSessionId"), function(b) {
        player.aoSessionID = $(b).find("GetSessionIdResult").text();
        a.getSessionIdReturned = !0;
    });
};
AOClient.prototype.GetResumeInfo = function() {
    var a = this;
    this.call("GetResumeInfo", this.getVanillaXML("GetResumeInfo"), function(b) {
        b = $(b).find("GetResumeInfoResult").text();
        player.aoResumeData = b;
        a.getResumeInfoReturned = !0;
    });
};
AOClient.prototype.RefreshSession = function() { this.call("RefreshSession", this.getVanillaXML("RefreshSession"), function(a) { $(a).find("RefreshSessionResult").text(); }); };
AOClient.prototype.SetViewBasedComplete = function() {};
AOClient.prototype.SavePlayerData = function() {
    this.call("SavePlayerData", this.wrapWithEnvelope(story.toAOData()), function() {
        var a = story.getDescendantsByType("Interaction");
        $.each(a, function(a, c) { $.each(c.attempts, function(a, b) { b.sent = !0; }); });
    }, !0);
    this.sendcount++;
};
AOClient.prototype.SaveResume = function() {
    var a = "", a = player.useCompactResume ? story.toResumeData() : JSON.stringify(story.toData(!0));
    this.call("SaveResume", this.wrapWithEnvelope('<SaveResume xmlns="http://articulate.com/KnowledgeFlash/Services/Content/Api"><contentUrl>' + escape(location.href) + '</contentUrl><playerdata sessionid="string"><resumeData>' + a + "</resumeData></playerdata></SaveResume>"), function() {});
};
AOClient.prototype.reCapitalize = function(a, b) {
    $.each(b, function(b, d) {
        a = a.replace(RegExp("<" + d, "ig"), "<" + d);
        a = a.replace(RegExp("</" + d, "ig"), "</" + d);
        a = a.replace(RegExp(d + '="', "ig"), d + '="');
    });
    return a;
};
AOClient.prototype.handleInteractionEvaluated = function() { (player.isIOS || -1 < location.search.indexOf("aoforce=1")) && player.aoClient.SavePlayerData(!0); };
AOClient.prototype.init = function() {
    var a = this;
    this.GetApiVersion();
    this.GetSessionId();
    this.GetResumeInfo();
    this.refreshInterval = setInterval(function() { a.RefreshSession(); }, 6E4);
    var b = !1;
    $(window).bind("unload beforeunload", function() { b || (a.SavePlayerData(!1), b = !0); });
};
AOClient.prototype.isReady = function() { return!0 == this.apiVersionReturned && !0 == this.getSessionIdReturned && !0 == this.getResumeInfoReturned ? !0 : !1; };
Interaction.prototype.toAOData = function() {
    var a = this, b = $("<interaction/>");
    b.attr("idRef", this.getFullObjref());
    b.attr("type", this.interactionType);
    $.each(this.attempts, function(c, d) {
        var e = $("<attempt/>");
        e.attr("time", d.time);
        e.attr("final", d.isfinal);
        e.attr("sent", d.sent);
        e.attr("pointsAwarded", d.pointsAwarded);
        e.attr("result", d.result);
        switch (a.interactionType) {
        case "fillin":
        case "numeric":
            $.each(d.answers, function(a, b) {
                var c = $("<answer/>");
                c.get(0).innerHTML = b.choiceid;
                e.append(c);
            });
            break;
        case "matching":
        case "sequence":
            $.each(d.answers,
                function(a, b) {
                    var c = $("<answer/>");
                    c.attr("statementid", b.statementid);
                    c.attr("choiceid", b.choiceid);
                    e.append(c);
                });
            break;
        default:
            $.each(d.answers, function(a, b) {
                var c = $("<answer/>");
                c.attr("choiceid", b.choiceid);
                e.append(c);
            });
        }
        b.append(e);
    });
    return b;
};
Quiz.prototype.toAOData = function() {
    var a = $("<quiz/>");
    a.attr("idRef", this.getFullObjref());
    a.attr("score", this.variables.Score);
    a.attr("possibleScore", this.maxscore);
    a.attr("duration", player.elapsedTime());
    this.status = parseInt(this.variables.Score) >= parseInt(this.variables.PassScore) ? story.scoring.passstatus : story.scoring.failstatus;
    a.attr("status", this.status);
    var b = $("<interactions/>");
    $.each(this.sliderefs, function(a, d) {

        function e(a) {
            $.each(a.interactions, function(a, c) {
                (c.scoreAO || player.forceAO ||
                    0 < c.attempts.length) && b.append($(c.toAOData()));
            });
        }

        var f = story.parseObjref(d).target;
        "SlideDraw" == f.innerType ? $.each(f.children, function(a, b) { e(b); }) : e(f);
    });
    a.append(b);
    return a.get(0).outerHTML;
};
Storyline.prototype.toAOData = function() {
    var a = $('<SavePlayerData xmlns="http://articulate.com/KnowledgeFlash/Services/Content/Api"/>');
    a.append($("<contentUrl>" + location.href + "</contentUrl>"));
    var b = $("<playerdata/>");
    b.attr("sessionid", player.aoSessionID);
    b.attr("sendcount", player.aoClient.sendcount);
    var c = story.toResumeData();
    b.append($("<resumeData>" + c + "</resumeData>"));
    $.each(this.allSlides, function(a, b) {
        if (b != player.currentSlide() && b.compactResumeData && !b.hasRestoredInteractions)
            try {
                b.restoreFromResumeData(b.compactResumeData,
                    !0);
            } catch (c) {
            }
        b.hasRestoredInteractions = !0;
    });
    var c = $("<results/>"), d = $("<summary/>"), e = $("<quizzes/>"), f = $("<viewdata/>"), g = 0, h = 0, j = story.scoring.failstatus, k = 0, l = 0, m = 0;
    $.each(this.quizzes, function(a, b) { if (story.scoring.scorerefs[b.id])g += parseInt(b.variables.Score), h += b.maxscore, e.append($(b.toAOData())), j = b.status; });
    m = 0;
    $.each(this.allSlides, function(a, b) {
        if (b.trackviews && (m++, b.variables.Visited)) {
            l++;
            b.viewedCurrent && k++;
            var c = $("<slide/>");
            c.attr("id", b.getFullObjref());
            f.append(c);
        }
    });
    f.attr("total",
        m);
    f.attr("viewed", k);
    f.attr("viewedcomplete", l);
    b.append(f);
    var n = parseFloat(parseInt(1E4 * g / h) / 100);
    isNaN(n) && (n = 0);
    if ("view" == story.scoring.type) {
        if (0 < story.scoring.viewthreshold && l >= story.scoring.viewthreshold)j = story.scoring.passstatus;
        d.attr("slidesviewed", l);
        d.attr("slidestotal", m);
        d.attr("duration", player.elapsedTime());
        d.attr("status", j);
    } else
        "survey" == story.scoring.type ? (d.attr("duration", player.elapsedTime()), d.attr("status", j)) : (d.attr("score", n), d.attr("possibleScore", 100), d.attr("duration",
            player.elapsedTime()), d.attr("status", j), c.append(e));
    c.append(d);
    b.append(c);
    a.append(b);
    return player.aoClient.reCapitalize(a.get(0).outerHTML, "SavePlayerData,resumeData,contentUrl,idRef,pointsAwarded,possibleScore".split(","));
};

function LMSClient() {}

LMSClient.prototype.initResume = function() {
    var a = "";
    if (window && window.lms_DoFSCommand) {
        window.hasLMS = !0;
        window.lmsAPI = parent;
        if (!parent.GetDataChunk && window.GetDataChunk)window.lmsAPI = window;
        if (!window.lmsAPI.GetDataChunk)window.g_bAPIPresent = !1, window.g_bLMSPresent = window.lmsAPI.IsLmsPresent && window.lmsAPI.IsLmsPresent();
        window.g_bAPIPresent = !0;
        if (!window.lmsAPI.GetDataChunk)window.g_bAPIPresent = !1, window.hasLMS = !1, player.hasLMS = !1, player.lmsManager.hasLMS = !1;
        window.g_bLMSPresent = window.lmsAPI.IsLmsPresent &&
            window.lmsAPI.IsLmsPresent();
        if (window.g_bAPIPresent)a = window.lmsAPI.GetDataChunk("cmi.suspend_data"), window.lmsAPI.g_strResumeData = a, window.g_strResumeData = a, window.LMSCommit(), window.lms_DoFSCommand("BW_InitResume");
    }
    return a;
};
LMSClient.prototype.handleInteractionEvaluated = function(a) {
    if ("view" != story.scoring.type) {
        a = a.toLMSData();
        try {
            window.lms_DoFSCommand("BW_StoreQuestionResult", a);
        } catch (b) {
        }
        window.lms_DoFSCommand("BW_UpdateStatus");
    }
};
LMSClient.prototype.handleClosePlayer = function() {
    try {
        window.lms_DoFSCommand("BW_ClosePlayer");
    } catch (a) {
    }
};
LMSClient.prototype.sendResumeData = function() {
    if (player.useCompactResume) {
        var a = story.toResumeData();
        lms_DoFSCommand("BW_SetResumeData", a);
    }
};
LMSClient.prototype.reportViewBasedComplete = function() {
    window.g_oContentResults.nScore = 100;
    window.g_oContentResults.strStatus = story.scoring.passstatus;
    window.g_oContentResults.strType = "view";
    window.lms_DoFSCommand("BW_UpdateViewStatus", window.g_oContentResults.strStatus + "|~|view");
};
Interaction.prototype.toLMSData = function() {
    var a = [], b = this.parent, c = null;
    $.each(story.quizzes, function(a, d) {
        $.each(d.sliderefs, function(a, e) {
            var f = story.parseObjref(e).target;
            f == b && (c = d);
            "SlideDraw" == f.innerType && $.each(f.children, function(a, e) { e == b && (c = d); });
        });
    });
    if (!b || !c)return"";
    for (var d = c.attemptCount, e = parseInt(this.variables.AttemptCount - 1), f = 0, g = 0; g < c.sliderefs.length; g++)-1 < c.sliderefs[g].indexOf(b.id) && (f = g + 1);
    a.push(c.id);
    a.push(b.parent.lmsid + "_" + b.lmsid + "_" + this.lmsid + "_" + d + "_" + e);
    a.push(this.lmsid);
    a.push(this.interactionType);
    a.push(this.concatChoices(this.lmsCorrectResponses));
    a.push(this.concatChoices(this.lmsResponses));
    a.push("0");
    a.push(this.variables.Status);
    a.push(this.variables.Points);
    a.push(GetTime(new Date));
    a.push("1");
    a.push(f);
    a.push(this.lmstext);
    a.push(c.lmstext);
    a.push(this.istracked);
    return a.join(window.g_strLDelim || "|~|");
};
Interaction.prototype.concatChoices = function(a) {
    var b = [], c = window.g_strLInteractionDelim || "|#|";
    $.each(a, function(a, c) {
        c.m_bPairResponse && b.push(c.statementLMSText);
        b.push(c.lmstext);
    });
    return b.join(c);
};
Quiz.prototype.reportLMSStatus = function() {
    if ("view" != story.scoring.type && story.scoring.scorerefs[this.id]) {
        var a = [], b = "", b = parseInt(this.variables.Score) >= parseInt(this.variables.PassScore) ? story.scoring.passstatus : story.scoring.failstatus, c = 100 * this.variables.Score / this.maxscore, d = 100 * this.variables.PassScore / this.maxscore;
        a.push(b);
        a.push(c);
        a.push(0);
        a.push(100);
        a.push(d);
        a.push("quiz");
        a = a.join(window.g_strLDelim || "|~|");
        window.g_oContentResults.nScore = c;
        window.g_oContentResults.strStatus = b;
        window.lms_DoFSCommand("BW_UpdateStatus",
            a);
    }
};

function LMSManager() {
    this.hasTinCan = this.hasLMS = this.hasAO = !1;
    this.viewedSlides = {};
}

LMSManager.prototype.initResume = function() { if (this.hasLMS)return player.lmsClient.initResume(); };
LMSManager.prototype.handleInteractionEvaluated = function(a) { this.hasAO ? player.aoClient.handleInteractionEvaluated(a) : this.hasLMS ? player.lmsClient.handleInteractionEvaluated(a) : this.hasTinCan && player.tinCanClient.handleInteractionEvaluated(a); };
LMSManager.prototype.handleSlideViewed = function(a) {
    a.trackviews && (this.viewedSlides[a.id] = !0);
    a.viewedCurrent = !0;
    var b = Object.keys(this.viewedSlides).length;
    0 < story.scoring.viewthreshold && "view" == story.scoring.type && b >= story.scoring.viewthreshold ? this.hasAO ? (player.aoClient.SetViewBasedComplete(), player.aoClient.SavePlayerData(!0)) : this.hasLMS ? (player.lmsClient.reportViewBasedComplete(), player.lmsClient.sendResumeData()) : this.hasTinCan && player.tinCanClient.reportViewBasedComplete(b) : player.isIOS &&
        0 < story.scoring.viewthreshold && "view" == story.scoring.type && this.hasAO && player.aoClient.SavePlayerData(!0);
    this.hasLMS ? player.lmsClient.sendResumeData() : this.hasAO ? player.aoClient.SaveResume() : this.hasTinCan && (player.tinCanClient.handleSlideViewed(a), player.tinCanClient.sendResumeData());
};
LMSManager.prototype.handleQuizComplete = function(a) {
    this.hasAO && player.aoClient.SavePlayerData(!0);
    this.hasLMS && a.reportLMSStatus();
    this.hasTinCan && player.tinCanClient.reportQuizComplete(a);
};
LMSManager.prototype.handleClosePlayer = function() {
    this.hasLMS && player.lmsClient.handleClosePlayer();
    this.hasTinCan && player.tinCanClient.handleClosePlayer();
};
LMSManager.prototype.init = function() {
    if (globals.bAOSupport || window.g_bAOSupport || player.useAO)player.aoClient = new AOClient, player.aoClient.init(), this.hasAO = !0;
    else if (globals.bTinCan || window.g_bTinCan || player.useTinCan)player.tinCanClient = new TinCanClient, player.tinCanClient.init(), this.hasTinCan = !0;
    else if (window && window.lms_DoFSCommand) {
        player.lmsClient = new LMSClient;
        player.hasLMS = !0;
        window.lmsAPI = parent;
        if (!parent.GetDataChunk && window.GetDataChunk)window.lmsAPI = window;
        window.g_bAPIPresent = !0;
        window.g_bLMSPresent = window.lmsAPI.IsLmsPresent && window.lmsAPI.IsLmsPresent();
        this.hasLMS = !0;
    }
};
LMSManager.prototype.isReady = function() { return this.hasAO ? player.aoClient.isReady() : this.hasTinCan ? player.tinCanClient.isReady() : !0; };

function QuizData(a, b) {
    this.strQuizId = a;
    this.strQuizName = b;
    this.arrQuestions = [];
    this.dtmFinished = new Date;
    this.strStatus = "";
    this.nScore = 0;
    this.nPassingScore = 80;
    this.nMinScore = 0;
    this.nMaxScore = 100;
    this.nPtScore = 0;
    this.nPtMax = 100;
    this.AddQuestionResult = function(a) {
        for (var b = !1, e = 0; e < this.arrQuestions.length; e++)this.arrQuestions[e].nQuestionNumber == a.nQuestionNumber && (this.arrQuestions[e] = a, b = !0);
        b || this.arrQuestions.push(a);
    };
}

function ContentResults() {
    this.dtmFinished = new Date;
    this.nPassingScore = 80;
    this.nScore = 0;
    this.strStatus = "incomplete";
    this.strType = "quiz";
}

function QuestionResults(a, b, c, d, e, f, g, h, j, k, l, m, n) {
    this.strId = a;
    this.strLMSId = b;
    this.strType = c;
    this.strCorrectResponse = d;
    this.strUserResponse = e;
    this.nLatency = f;
    this.strStatus = g;
    this.nPoints = h;
    this.strCompletedTime = j;
    this.nWeight = k;
    this.nQuestionNumber = l;
    this.strDescription = m;
    this.bTracked = n;
}

function GetTime(a) {
    var b = "", b = a.getHours(), c = a.getMinutes(), d = "" + c, a = a.getSeconds(), e = "" + a;
    10 > c && (d = "0" + c);
    10 > a && (e = "0" + a);
    return b + ":" + d + ":" + e;
}

function GetDate(a) {
    var b = "";
    return b = a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear();
}

if (window) {
    window.g_oContentResults = new ContentResults;
    window.g_listQuizzes = {};
    var unloadFired = !1;
    $(window).bind("unload beforeunload", function() { !unloadFired && parent.LMSUnload && (parent.LMSUnload(), unloadFired = !0); });
};
var TC_PARAM_AUTH = "auth", TC_PARAM_REG = "registration", TC_PARAM_ACTIVITY_ID = "activity_id", TC_PARAM_ACTOR = "actor", TC_PARAM_ENDPOINT = "endpoint", TC_PARAM_GROUPING = "grouping", TC_PARAM_CONTENT_ENDPOINT = "content_endpoint", TC_PARAM_CONTENT_TOKEN = "content_token", REQ_TYPE_RESUME_SAVE = 1, REQ_TYPE_RESUME_RESTORE = 2, REQ_TYPE_TRACKING = 3;

function AlertError(a) { console.log("TinCan error: " + a); }

function ppTinCanRequest(a, b, c, d, e) {
    this.MessageType = a;
    this.Method = b;
    this.Data = c;
    this.Url = d;
    this.Callback = e;
}

function ppTinCanComm(a) {
    this.m_listParams = {};
    this.m_listCustomParams = {};
    this.m_jsActor = {};
    this.m_strQueryString = a;
    this.ParseQueryString(this.m_strQueryString);
    this.m_bStopPosting = this.m_bWaitingTinCanResponse = !1;
    this.m_arrTinCanMsgQueue = [];
    this.m_pfnFatalError = AlertError;
    this.m_bIE = document.all && -1 != navigator.appVersion.indexOf("MSIE") ? !0 : !1;
}

ppTinCanComm.prototype.PostOnClose = function() {
    for (this.m_bStopPosting = !0; 0 < this.m_arrTinCanMsgQueue.length;) {
        var a = this.m_arrTinCanMsgQueue.shift();
        PostSyncRequest(a);
    }
};
ppTinCanComm.prototype.GetAuth = function() { return this.m_listParams[TC_PARAM_AUTH]; };
ppTinCanComm.prototype.GetRegistration = function() { return this.m_listParams[TC_PARAM_REG]; };
ppTinCanComm.prototype.GetActivityId = function() { return this.m_listParams[TC_PARAM_ACTIVITY_ID]; };
ppTinCanComm.prototype.GetActor = function() { return this.m_listParams[TC_PARAM_ACTOR]; };
ppTinCanComm.prototype.GetActorObj = function() { return this.m_jsActor; };
ppTinCanComm.prototype.GetEndPoint = function() { return this.m_listParams[TC_PARAM_ENDPOINT]; };
ppTinCanComm.prototype.GetGrouping = function() { return this.m_listParams[TC_PARAM_GROUPING]; };
ppTinCanComm.prototype.ParseQueryString = function(a) {
    for (var a = a.split("&"), b = "", c = "", b = "", d = 0, e = 0; e < a.length; e++)
        switch (b = a[e], d = b.indexOf("="), c = decodeURIComponent(b.substr(0, d)), b = decodeURIComponent(b.substr(d + 1)), this.m_listParams[c] = b, c) {
        case TC_PARAM_ACTOR:
            this.m_jsActor = JSON.parse(b);
            break;
        case TC_PARAM_AUTH:
        case TC_PARAM_GROUPING:
        case TC_PARAM_ACTIVITY_ID:
        case TC_PARAM_REG:
        case TC_PARAM_ENDPOINT:
        case TC_PARAM_CONTENT_ENDPOINT:
        case TC_PARAM_CONTENT_TOKEN:
            break;
        default:
            this.m_listCustomParams[c] =
                b;
        }
};
ppTinCanComm.prototype.ConvertToPost = function(a, b, c, d, e, f) {
    var g = "", h;
    for (h in e)g += h + "=" + encodeURIComponent(e[h]) + "&";
    0 < d.length && (g += "content=" + encodeURIComponent(d));
    this.SendRequest(new ppTinCanRequest(a, "POST", g, b + "?method=" + c, f));
};
ppTinCanComm.prototype.GetHeaders = function() {
    var a = {};
    a.Authorization = this.m_listParams[TC_PARAM_AUTH];
    a.registration = this.m_listParams[TC_PARAM_REG];
    a["Content-Type"] = "application/json";
    for (var b in this.m_listCustomParams)a[b] = this.m_listCustomParams[b];
    return a;
};
ppTinCanComm.prototype.SendRequest = function(a) { this.m_bWaitingTinCanResponse || this.m_bStopPosting ? this.m_arrTinCanMsgQueue.push(a) : this.PostAsyncRequest(a); };
ppTinCanComm.prototype.PostAsyncRequest = function(a) {
    try {
        this.UseXDomainRequest(a.Url) ? this.PostXDomainRequest(a, !1) : this.PostXmlHttp(a);
    } catch (b) {
        confirm("Unable to connect to server.  Please verify that you are connected to the internet. Retry?") ? (this.m_bWaitingTinCanResponse = !1, this.SendRequest(a)) : (this.m_bFatalError = this.m_bStopPosting = !0, this.m_pfnFatalError(0));
    }
};
ppTinCanComm.prototype.PostXDomainRequest = function(a, b) {
    var c = new XDomainRequest;
    c.open(a.Method, a.Url);
    c.TCRequest = a;
    c.TCComm = this;
    c.status = 0;
    c.onload = function() {
        c.status = 200;
        b || this.TCComm.OnSendComplete(c);
    };
    c.onerror = function() {
        c.status = -1;
        b || this.TCComm.OnSendError(c);
    };
    c.send(strData);
    if (b)
        for (var d = (new Date).getTime(); 5E3 > (new Date).getTime() - d && 0 == c.status;) {
            var e = new XMLHttpRequest;
            e.open("GET", window.location + "?" + (new Date).getTime(), !1);
            e.send(null);
        }
    return c.status;
};
ppTinCanComm.prototype.PostXmlHttp = function(a) {
    var b = this.CreateXmlHttp();
    if (null != b)this.m_bWaitingTinCanResponse = !0, b.TCRequest = a, b.TCComm = this, b.onreadystatechange = function() { 4 == b.readyState && (400 <= b.status && !(this.m_bIE && 1223 == b.status) ? this.TCComm.OnSendError(b) : this.TCComm.OnSendComplete(b)); }, b.open(a.Method, a.Url, !0), b.send(a.Data);
};
ppTinCanComm.prototype.OnSendComplete = function(a) {
    null != a.TCRequest.Callback && void 0 != a.TCRequest.Callback && a.TCRequest.Callback(a.responseText);
    this.m_bWaitingTinCanResponse = !1;
    0 < this.m_arrTinCanMsgQueue.length && !this.m_bStopPosting && this.SendRequest(this.m_arrTinCanMsgQueue.shift());
};
ppTinCanComm.prototype.OnSendError = function(a) { a.TCRequest.MessageType == REQ_TYPE_RESUME_RESTORE ? (a.TCRequest.Callback(""), this.m_bWaitingTinCanResponse = !1, 0 < this.m_arrTinCanMsgQueue.length && !this.m_bStopPosting && this.SendRequest(this.m_arrTinCanMsgQueue.shift())) : confirm("Unable to connect to server.  Please verify that you are connected to the internet. Retry? ") ? (this.m_bWaitingTinCanResponse = !1, this.SendRequest(a.TCRequest)) : (this.m_bFatalError = this.m_bStopPosting = !0, a.status && this.m_pfnFatalError(a.status)); };
ppTinCanComm.prototype.CreateXmlHttp = function() {
    var a = null, b = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"], c = 0;
    if (window.XMLHttpRequest)
        try {
            a = new XMLHttpRequest;
        } catch (d) {
            a = null;
        }
    if (null == a && window.ActiveXObject)
        for (; null == a && c < b.length;) {
            try {
                a = new ActiveXObject(b[c]);
            } catch (e) {
                a = null;
            }
            c++;
        }
    return a;
};
ppTinCanComm.prototype.PostSyncRequest = function(a) {
    try {
        var b = 0, b = this.UseXDomainRequest(a.Url) ? this.PostXDomainRequest(a, !0) : this.PostSyncXmlHttp(a);
        if (200 != b)confirm("Could not save the result data. You may need to login again. Retry?") ? this.PostSyncRequest(a) : this.m_bFatalError = !0;
    } catch (c) {
        confirm("Unable to connect to server.  Please verify that you are connected to the internet. Retry?") ? this.PostSyncRequest(a) : this.m_bFatalError = !0;
    }
};
ppTinCanComm.prototype.PostSyncXmlHttp = function(a) {
    var b = this.CreateXmlHttp(), c = 200;
    null != b && (b.open(a.Method, a.Url, !1), b.send(a.Data), 400 <= b.status && !(this.m_bIE && 1223 == b.status) && (c = -1));
    return c;
};
ppTinCanComm.prototype.UseXDomainRequest = function(a) {
    var b = !1;
    if (this.m_bIE) {
        this.CreateXmlHttp();
        var b = document.createElement("a"), c = document.createElement("a");
        b.href = a;
        c.href = window.location;
        b = b.hostname != c.hostname || b.protocol != c.protocol || b.port != c.port;
    }
    return b;
};
var TC_DELIM_CHOICE = "[,]", TC_DELIM_STATEMENT = "[.]";

function ppResponsePair(a, b) {
    this.Choice = a;
    this.Statement = b;
}

function ppTinCanApi(a) { this.m_tcComm = new ppTinCanComm(a); }

ppTinCanApi.prototype.PostOnClose = function() { this.m_tcComm.PostOnClose(); };
ppTinCanApi.prototype.RequestResumeData = function(a) {
    var b = this.m_tcComm.GetHeaders();
    b.activityId = this.m_tcComm.GetActivityId();
    b.actor = this.m_tcComm.GetActor();
    b.stateId = "resume";
    this.m_tcComm.ConvertToPost(REQ_TYPE_RESUME_RESTORE, this.m_tcComm.GetEndPoint() + "activities/state", "GET", "", b, a);
};
ppTinCanApi.prototype.UpdateResumeData = function(a) {
    var b = this.m_tcComm.GetHeaders();
    b.activityId = this.m_tcComm.GetActivityId();
    b.actor = this.m_tcComm.GetActor();
    b.stateId = "resume";
    this.m_tcComm.ConvertToPost(REQ_TYPE_RESUME_SAVE, this.m_tcComm.GetEndPoint() + "activities/state", "PUT", a, b, null);
};
ppTinCanApi.prototype.NotifyCourseComplete = function(a, b, c, d) {
    var e = { id: this.m_tcComm.GetActivityId() }, f = "completed";
    c || (f = b ? "passed" : "failed");
    e = { verb: f, object: e, context: this.GetContext(this.m_tcComm.GetActivityId()) };
    e.result = c ? { duration: this.ConvertMSToISO(d) } : { score: { scaled: a / 100 }, success: b ? "true" : "false", duration: this.ConvertMSToISO(d) };
    this.PutStatement(e, REQ_TYPE_TRACKING);
};
ppTinCanApi.prototype.NotifyQuizComplete = function(a, b, c, d, e, f) {
    var g = { id: d }, h = "completed";
    f || (h = e ? "passed" : "failed");
    d = { verb: h, object: g, context: this.GetContext(d) };
    f || (d.result = { score: { scaled: a / 100, raw: b, min: 0, max: c }, success: e ? "true" : "false" });
    this.PutStatement(d, REQ_TYPE_TRACKING);
};
ppTinCanApi.prototype.NotifyCourseStarted = function() { this.PutStatement({ verb: "attempted", object: { id: this.m_tcComm.GetActivityId() }, context: this.GetContext(this.m_tcComm.GetActivityId()) }, REQ_TYPE_TRACKING); };
ppTinCanApi.prototype.NotifyViewedComplete = function(a, b) {
    var c = { id: this.m_tcComm.GetActivityId() }, d = { completion: !0, duration: this.ConvertMSToISO(b), extensions: { viewcount: a } };
    this.PutStatement({ verb: "completed", object: c, result: d, context: this.GetContext(this.m_tcComm.GetActivityId()) }, REQ_TYPE_TRACKING);
};
ppTinCanApi.prototype.NotifySlideViewed = function(a) { this.PutStatement({ verb: "experienced", object: { id: a }, context: this.GetContext(this.m_tcComm.GetActivityId()) }, REQ_TYPE_TRACKING); };
ppTinCanApi.prototype.LogQuestion = function(a, b, c, d, e, f, g, h) { "likert" == e ? this.LogLikertQuestion(a, b, c, d) : this.LogNormalQuestion(a, b, c, d, e, f, g, h); };
ppTinCanApi.prototype.LogLikertQuestion = function(a, b, c, d) {
    if (null != d && 0 < d.length)
        for (var e = null, f = 0, f = 0; f < d.length; f++) {
            var e = d[f], g = { id: b + "." + c + "." + this.GetSimpleId(e.Statement) }, e = { response: this.GetSimpleId(e.Choice) };
            this.PutStatement({ verb: "answered", object: g, result: e, context: this.GetContext(a) }, REQ_TYPE_TRACKING);
        }
};
ppTinCanApi.prototype.LogNormalQuestion = function(a, b, c, d, e, f, g, h) {
    var j = "", e = this.NormalizeType(e), k = 0, l = null;
    if (null != d && 0 < d.length)
        switch (e) {
        case "fill-in":
        case "numeric":
            for (k = 0; k < d.length; k++)l = d[k], 0 < k && (j += TC_DELIM_CHOICE), j += l.Choice;
            break;
        case "sequencing":
        case "true-false":
        case "choice":
            for (k = 0; k < d.length; k++)l = d[k], 0 < k && (j += TC_DELIM_CHOICE), j += this.GetSimpleId(l.Choice);
            break;
        case "matching":
            for (k = 0; k < d.length; k++)
                l = d[k], 0 < k && (j += TC_DELIM_CHOICE), j += this.GetSimpleId(l.Statement) + TC_DELIM_STATEMENT +
                    this.GetSimpleId(l.Choice);
        }
    b = { id: b + "." + c };
    j = { response: j };
    if (!f)j.success = g, j.score = { raw: h };
    this.PutStatement({ verb: "answered", object: b, result: j, context: this.GetContext(a) }, REQ_TYPE_TRACKING);
};
ppTinCanApi.prototype.PutStatement = function(a) {
    a.actor = this.m_tcComm.GetActorObj();
    var b = this.m_tcComm.GetHeaders();
    b.statementId = this.GetUUID();
    this.m_tcComm.ConvertToPost(REQ_TYPE_TRACKING, this.m_tcComm.GetEndPoint() + "statements/", "PUT", JSON.stringify(a), b, null);
};
ppTinCanApi.prototype.GetContext = function(a) { return{ contextActivities: { grouping: { id: this.m_tcComm.GetActivityId() }, parent: { id: a } }, registration: this.m_tcComm.GetRegistration() }; };
ppTinCanApi.prototype.GetSimpleId = function(a) {
    var b = a.lastIndexOf(".");
    0 <= b && (a = a.substr(b + 1));
    return a;
};
ppTinCanApi.prototype.NormalizeType = function(a) {
    var b = "";
    switch (a) {
    case "truefalse":
        b = "true-false";
        break;
    case "wordbank":
    case "hotspot":
    case "multiplechoice":
    case "multipleresponse":
        b = "choice";
        break;
    case "essay":
    case "fillin":
    case "numeric":
        b = "fill-in";
        break;
    case "matching":
        b = "matching";
        break;
    case "sequence":
        b = "sequencing";
        break;
    case "likert":
        b = "likert";
    }
    return b;
};
ppTinCanApi.prototype.GetUUID = function() {
    var a;
    a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/x/g, function() { return Math.floor(16 * Math.random()).toString(16); });
    return a = a.replace(/y/g, (Math.floor(4 * Math.random()) + 8).toString(16));
};
ppTinCanApi.prototype.ConvertMSToISO = function(a) {
    var b = "P", a = Math.floor(a / 10), c = 0, d = 0, e = 0, e = Math.floor(a / 864E4), a = a - 864E4 * e, d = Math.floor(a / 36E4), a = a - 36E4 * d, c = Math.floor(a / 6E3);
    0 < e && (b += e + "D");
    return b + "T" + (d + "H") + (c + "M") + ((a - 6E3 * c) / 100 + "S");
};

function TinCanClient() {}

TinCanClient.prototype.GetResumeData = function() {
    var a = this;
    this.api.RequestResumeData(function(b) {
        player.tinCanResumeData = b;
        a.getResumeDataReturned = !0;
    });
};
TinCanClient.prototype.SetViewBasedComplete = function() {};
TinCanClient.prototype.SavePlayerData = function() {};
TinCanClient.prototype.handleSlideViewed = function(a) { this.api.NotifySlideViewed(a.id); };
TinCanClient.prototype.handleInteractionEvaluated = function(a) {
    var b = a.parent, c = b.quiz, d = $.map(a.lmsResponses, function(a) { return a.IsPair() ? new ppResponsePair(a.ChoiceID(), a.StatementID()) : new ppResponsePair(a.ChoiceID(), ""); }), e = "correct" == a.variables.Status;
    switch (a.interactionType) {
    case "likert":
        this.api.LogLikertQuestion(c.id, b.id, a.id, d);
        return;
    case "essay":
    case "fillin":
    case "numeric":
        d = [new ppResponsePair(a.lmsResponses[0].lmstext)];
    }
    this.api.LogNormalQuestion(c.id, b.id, a.id, d, a.interactionType,
        "true" == a.issurvey, e, a.variables.Points);
};
TinCanClient.prototype.reportViewBasedComplete = function(a) { this.api.NotifyViewedComplete(a, new Date - this.startTime); };
TinCanClient.prototype.reportQuizComplete = function(a) {
    var b = this, c = a.variables.Score >= a.variables.PassScore;
    this.api.NotifyQuizComplete(a.variables.PercentScore, a.variables.Score, a.maxscore, a.id, c, "true" == a.issurvey);
    var d = new Date - this.startTime;
    $.each(story.scoring.scorerefs, function(e, f) {
        var g = story.parseObjref(f.ref);
        g && g.target && g.target.id == a.id && b.api.NotifyCourseComplete(a.variables.PercentScore, c, "true" == a.issurvey, d);
    });
};
TinCanClient.prototype.sendResumeData = function() {
    if (player.useCompactResume) {
        var a = story.toResumeData();
        "" != a && this.api.UpdateResumeData(a);
    }
};
TinCanClient.prototype.init = function() {
    var a = this, b = document.location.search.substr(1);
    a.startTime = new Date;
    this.api = new ppTinCanApi(b);
    this.GetResumeData();
    this.api.NotifyCourseStarted();
    var c = !1;
    $(window).bind("unload beforeunload", function() { c || (a.api.PostOnClose(), c = !0); });
};
TinCanClient.prototype.isReady = function() { return this.getResumeDataReturned; };
bwUtils = { DEFAULT_STATE: "_default" };

function bwChunk(a) {
    this.m_strRemainder = "";
    this.m_nLength = -1;
    this.m_strChunkData = this.m_strData = "";
    this.m_nOffset = 0;
    this.isNothing = "" == a;
    var b = "", c = 0, b = 0, d = a, b = a.charAt(0);
    "~" == b ? (c = parseInt(a.charAt(1)), b = a.substr(2, c), b = bwChunk.UBaseNto10(b), a = a.substr(2 + c), this.m_nLength = 2 + c + b) : (a = a.substr(1), b = bwChunk.UBaseNto10(b), this.m_nLength = 1 + b);
    if (0 < b)this.m_strData = a.substr(0, b), a = a.substr(b);
    this.m_strChunkData = d.substr(0, d.length - a.length);
    this.m_strRemainder = a;
}

bwChunk.EMPTY_CHUNK = "0";
bwChunk.BASE_NUMBER = 64;
bwChunk.BASE_POW = 6;
bwChunk.m_arr10to64 = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$".split(",");
bwChunk.m_o64to10 = { v0: 0, v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8, v9: 9, va: 10, vb: 11, vc: 12, vd: 13, ve: 14, vf: 15, vg: 16, vh: 17, vi: 18, vj: 19, vk: 20, vl: 21, vm: 22, vn: 23, vo: 24, vp: 25, vq: 26, vr: 27, vs: 28, vt: 29, vu: 30, vv: 31, vw: 32, vx: 33, vy: 34, vz: 35, vA: 36, vB: 37, vC: 38, vD: 39, vE: 40, vF: 41, vG: 42, vH: 43, vI: 44, vJ: 45, vK: 46, vL: 47, vM: 48, vN: 49, vO: 50, vP: 51, vQ: 52, vR: 53, vS: 54, vT: 55, vU: 56, vV: 57, vW: 58, vX: 59, vY: 60, vZ: 61, v_: 62, v$: 63 };
bwChunk.prototype.ChunkData = function() { return this.m_strChunkData; };
bwChunk.prototype.Remainder = function() { return this.m_strRemainder; };
bwChunk.prototype.Length = function() { return this.m_nLength; };
bwChunk.prototype.Data = function() { return this.m_strData; };
bwChunk.prototype.NextChunk = function() { return new bwChunk(this.Remainder()); };
bwChunk.prototype.Skip = function(a) { this.m_nOffset += a; };
bwChunk.prototype.NextString = function(a) {
    if (!a)a = this.m_nLength;
    var b = this.m_strData.substr(this.m_nOffset, a);
    this.m_nOffset += a;
    return b;
};
bwChunk.prototype.NextBase10 = function(a) {
    var b = bwChunk.BaseNto10(this.m_strData.substr(this.m_nOffset, a));
    this.m_nOffset += a;
    return b;
};
bwChunk.prototype.NextUBase10 = function(a) {
    var b = bwChunk.UBaseNto10(this.m_strData.substr(this.m_nOffset, a));
    this.m_nOffset += a;
    return b;
};
bwChunk.prototype.NextChunkedBase10 = function() {
    var a = new bwChunk(this.m_strData.substr(this.m_nOffset)), b = a.Length(), a = bwChunk.BaseNto10(a.Data(), a.Length());
    this.m_nOffset += b;
    return a;
};
bwChunk.prototype.NextChunkedUBase10 = function() {
    var a = new bwChunk(this.m_strData.substr(this.m_nOffset)), b = a.Length(), a = bwChunk.UBaseNto10(a.Data(), a.Length());
    this.m_nOffset += b;
    return a;
};
bwChunk.prototype.IsEmpty = function() { return"" == this.Data(); };
bwChunk.prototype.EOF = function() { return this.m_nOffset >= this.m_strData.length; };
bwChunk.CreateChunk = function(a) {
    var b = a.length, c = bwChunk.UBase10toN(b), d = "";
    return d = 63 < b ? "~" + c.length + c + a : c + a;
};
bwChunk.UBase10toN = function(a, b) {
    void 0 == b && (b = -1);
    for (var c = parseInt(a), d = 0, e = "", f = !0; 0 < c || f;)f = !1, d = c & bwChunk.BASE_NUMBER - 1, e += bwChunk.m_arr10to64[d], c >>= bwChunk.BASE_POW;
    for (; e.length < b;)e += "0";
    return e;
};
bwChunk.UBaseNto10 = function(a) {
    for (var b = 0, c = "", d = 0; d < a.length; d++)c = "v" + a.charAt(d), b += parseInt(bwChunk.m_o64to10[c]) << bwChunk.BASE_POW * d;
    return b;
};
bwChunk.Base10toN = function(a, b) {
    void 0 == b && (b = -1);
    for (var c = parseInt(a), d = 0, e = "", f = !0, g = 0 > c, d = 1; Math.pow(bwChunk.BASE_NUMBER, d) / 2 <= Math.abs(a);)d++;
    b < d && (b = d);
    if (g) {
        for (d = 0; -c >= Math.pow(bwChunk.BASE_NUMBER, d) / 2;)d++;
        c = Math.pow(bwChunk.BASE_NUMBER, d) + c;
    }
    for (; 0 < c || f;)f = !1, d = c & bwChunk.BASE_NUMBER - 1, e += bwChunk.m_arr10to64[d], c >>= bwChunk.BASE_POW;
    for (; e.length < b;)e += g ? "$" : "0";
    return e;
};
bwChunk.BaseNto10 = function(a) {
    for (var b = 0, c = "", d = 0; d < a.length; d++)c = "v" + a.charAt(d), b += parseInt(bwChunk.m_o64to10[c]) << bwChunk.BASE_POW * d;
    a = Math.pow(bwChunk.BASE_NUMBER, a.length) / 2;
    b >= a && (b -= 2 * a);
    return b;
};
bwChunk.GlobalReplace = function(a, b, c) {
    b = b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    return a.replace(RegExp(b, "g"), c);
};
bwChunk.GlobalUnReplace = function(a, b, c) { return bwChunk.GlobalReplace(a, c, b); };
bwChunk.StringEncodings = [["^", "^0"], ["&", "^1"], ["'", "^2"], ["+", "^3"], [String.fromCharCode(10), "^4"], [String.fromCharCode(13), "^5"], ["?", "^6"], [",", "^7"], ["%", "^8"], ["\\", "^9"], ['"', "^A"], ["\u2018", "^B"], ["\u2019", "^C"], ["\u201c", "^D"], ["\u201d", "^E"]];
bwChunk.EncodeString = function(a) {
    $.each(bwChunk.StringEncodings, function(b, c) { a = bwChunk.GlobalReplace(a, c[0], c[1]); });
    return a;
};
bwChunk.DecodeString = function(a) {
    $.each(bwChunk.StringEncodings, function(b, c) { a = bwChunk.GlobalReplace(a, c[1], c[0]); });
    return a;
};

function PathLib() {}

PathLib.prototype.loadFromXML = function(a) {
    var b = this;
    this.xml = a;
    this.id = $(a).attr("id");
    this.paths = {};
    $(a).children("path").each(function(a, d) { b.paths[$(d).attr("i")] = $(d).attr("p"); });
};
PathLib.getPath = function(a, b) { return story.pathlibs[a] && story.pathlibs[a].paths[b] ? story.pathlibs[a].paths[b] : ""; };
PathLib.getPathFromXML = function(a) { return PathLib.getPath($(a).attr("l"), $(a).attr("i")); };

function BezierPath(a) { a ? this.setPoints(a) : this.points = []; }

BezierPath.nCr = function(a, b) {
    for (var c = 1, d = 1; d <= b; d++)c *= (a + 1 - d) / d;
    return c;
};
BezierPath.prototype.setPoints = function(a) {
    a[0].time = 0;
    a[a.length - 1].time = 100;
    this.points = a;
};
BezierPath.prototype.loadFromXML = function(a, b) {
    var c = [];
    $(a).find("segment").children().each(function(a, e) {
        var f = parseInt($(e).attr("x")) - b.x + b.xoffset, g = parseInt($(e).attr("y")) - b.y + b.yoffset;
        c.push({ x: f, y: g });
    });
    this.setPoints(c);
    this.duration = $(a).attr("duration");
    this.easing = $(a).attr("easing");
    this.easingdir = $(a).attr("easingdir");
};
BezierPath.prototype.getXYAtTime = function(a) {
    var b = this.points;
    if (a < b[0].time)return b[0];
    if (a > b[b.length - 1].time)return b[b.length - 1];
    for (var c = 0, d = b.length - 1, e = 1; e < b.length; e++) {
        var f = b[e];
        if (a < f.time) {
            d = e;
            break;
        }
        void 0 != f.time && (c = e);
    }
    for (var g = d - c, e = b[c].time, a = (a - e) / (b[d].time - e), h = d = 0, e = 0; e <= g; e++)var f = b[c + e], j = BezierPath.nCr(g, e) * Math.pow(1 - a, g - e) * Math.pow(a, e), d = d + j * f.x, h = h + j * f.y;
    return{ x: parseInt(d), y: parseInt(h) };
};
BezierPath.EasingSteps = [0, 15, 23.75, 32.5, 41.25, 50, 58.75, 67.5, 76.25, 85, 100];
BezierPath.DirectSteps = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
BezierPath.prototype.toKeyFrames = function() {
    var a = "linear" != this.easing, b = "", c = BezierPath.DirectSteps;
    if (a)c = BezierPath.DirectSteps;
    for (var d = 0; d < BezierPath.DirectSteps.length; d++) {
        var e = c[d], f = this.getXYAtTime(BezierPath.DirectSteps[d]), g = "linear";
        0 == d && a ? g = "ease-in" : d == BezierPath.DirectSteps.length - 2 && a && (g = "ease-out");
        block = e + "% {-webkit-transform: translateX(" + f.x + "px) translateY(" + f.y + "px);-webkit-animation-timing-function:" + g + ";}";
        b += block + "\r\n";
    }
    return"{" + b + "}";
};
var ZoomPan = function() {
    this.target = null;
    this.duration = 750;
};
ZoomPan.prototype.loadFromXML = function(a) {
    this.lastx = parseInt($(a).attr("lastx"));
    this.lasty = parseInt($(a).attr("lasty"));
    this.lastwidth = parseInt($(a).attr("lastwidth"));
    this.lastheight = parseInt($(a).attr("lastheight"));
    this.xpos = parseInt($(a).attr("xpos"));
    this.ypos = parseInt($(a).attr("ypos"));
    this.width = parseInt($(a).attr("width"));
    this.height = parseInt($(a).attr("height"));
    this.duration = parseInt($(a).attr("duration"));
    this.staticimage = $(a).attr("staticimage");
};
ZoomPan.prototype.getZoomModifier = function() { return player.currentWindow ? player.currentWindow.zoomModifier : 1; };
ZoomPan.prototype.getStartCss = function() {
    var a = player.width / this.lastwidth, a = a * this.getZoomModifier(), b = this.lastx * a, c = this.lasty * a, d = "translate3d(" + -b + "px," + -c + "px,0px) scale(" + a + ") rotate(0deg)";
    0 == b && 0 == c && 1 == a && (d = "");
    return{
        "-webkit-transition-property": "",
        "-webkit-transition-duration": "0s",
        "-webkit-transform-origin": "top left",
        "-webkit-transition-timing-function": "ease-in",
        "-webkit-transform": d,
        "-moz-transition-property": "",
        "-moz-transition-duration": "0s",
        "-moz-transform-origin": "top left",
        "-moz-transition-timing-function": "ease-in",
        "-moz-transform": d,
        "-ms-transition-property": "",
        "-ms-transition-duration": "0s",
        "-ms-transform-origin": "top left",
        "-ms-transition-timing-function": "ease-in",
        "-ms-transform": "translate(" + -b + "px," + -c + "px) scale(" + a + ") rotate(0deg)"
    };
};
ZoomPan.prototype.getFinishCss = function() {
    var a = player.width / this.width, a = a * this.getZoomModifier(), b = this.xpos * a, c = this.ypos * a;
    this.zoomParams = { scale: a, scaledx: b, scaledy: c };
    var d = "translate3d(" + -b + "px," + -c + "px,0px) scale(" + a + ") rotate(0deg)";
    0 == b && 0 == c && 1 == a && (d = "");
    player.currentWindow && (this.zoomParams.scale /= player.currentWindow.zoomModifier);
    return{
        "-webkit-transition-property": "-webkit-transform, opacity",
        "-webkit-transition-duration": this.duration + "ms",
        "-webkit-transform-origin": "top left",
        "-webkit-transition-timing-function": "ease-in",
        "-webkit-transform": d,
        "-moz-transition-property": "-moz-transform, opacity",
        "-moz-transition-duration": this.duration + "ms",
        "-moz-transform-origin": "top left",
        "-moz-transition-timing-function": "ease-in",
        "-moz-transform": d,
        "-ms-transition-property": "-ms-transform, opacity",
        "-ms-transition-duration": this.duration + "ms",
        "-ms-transform-origin": "top left",
        "-ms-transition-timing-function": "ease-in",
        "-ms-transform": "translate(" + -b + "px," + -c + "px) scale(" + a + ") rotate(0deg)"
    };
};
ZoomPan.prototype.applyCss = function(a, b) { $.each(a, function(a, d) { $(b).css(a, d); }); };
ZoomPan.prototype.apply = function(a) {
    var b = this;
    b.applyCss(b.getStartCss(), a);
    setTimeout(function() {
        b.applyCss(b.getFinishCss(), a);
        player.zoomParams = b.zoomParams;
    }, 0);
};
var swipe = { swiping: !1, animating: !1, moved: !1, x: 0, y: 0, vx: 0, vy: 0, downX: 0, downY: 0, lastX: 0, lastY: 0, startTime: 0, lastTime: 0, quick: 200, normal: 300, modes: { follow: "follow", none: "none" } };
swipe.parseEventCoords = function(a) {
    a.originalEvent.touches ? 0 < a.originalEvent.touches.length ? (swipe.x = a.originalEvent.touches[0].pageX, swipe.y = a.originalEvent.touches[0].pageY) : (swipe.x = a.originalEvent.changedTouches[0].pageX, swipe.y = a.originalEvent.changedTouches[0].pageY) : (swipe.x = a.pageX, swipe.y = a.pageY);
    if (!a.frameScaled) {
        swipe.rawX = swipe.x;
        swipe.rawY = swipe.y;
        var b = $(".framewrap").offset(), c = swipe.y - b.top;
        swipe.x = parseInt((swipe.x - b.left) / player.frameScale + b.left);
        swipe.y = parseInt(c / player.frameScale +
            b.top);
    }
    a.frameScaled = !0;
};
swipe.sniff = function(a, b) {
    if (!a.originalEvent)a.originalEvent = a;
    swipe.lastX = swipe.x;
    swipe.lastY = swipe.y;
    swipe.parseEventCoords(a);
    swipe.deltaX = swipe.x - swipe.downX;
    swipe.deltaY = swipe.y - swipe.downY;
    swipe.deltaX *= 1 / player.currentZoom();
    swipe.deltay *= 1 / player.currentZoom();
    if (b) {
        var c = new Date - swipe.lastTime;
        swipe.vx = (swipe.x - swipe.lastX) / c / player.currentZoom();
        swipe.vy = (swipe.y - swipe.lastY) / c / player.currentZoom();
    }
    swipe.lastTime = new Date;
    if (10 < Math.abs(swipe.deltaX) || 10 < Math.abs(swipe.deltaY))swipe.moved = !0;
};
swipe.getSlideCoords = function(a) {
    a = a || player.currentSlide();
    if (!a.ref)return{ x: 0, y: 0 };
    var a = a.ref.offset(), b = $(".framewrap").offset();
    a.left = (a.left - b.left) / player.frameScale + b.left;
    a.top = (a.top - b.top) / player.frameScale + b.top;
    b = (swipe.x - a.left) / player.currentZoom();
    a = (swipe.y - a.top) / player.currentZoom();
    player.zoomParams && (b /= player.zoomParams.scale, a /= player.zoomParams.scale);
    1 != player.windowZoomModifier && (b *= player.frameScale, a *= player.frameScale);
    return{ x: parseInt(b), y: parseInt(a) };
};
swipe.noteDownCoords = function() {
    swipe.downX = swipe.x;
    swipe.downY = swipe.y;
    swipe.moved = !1;
    swipe.startTime = new Date;
};
swipe.hasMoved = function(a) {
    if (a)return swipe.x != swipe.downX || swipe.y != swipe.downY;
    var a = Math.abs(swipe.x - swipe.downX), b = Math.abs(swipe.y - swipe.downY);
    return 3 < a || 3 < b;
};
swipe.start = function(a) { if (!player.showingInterstitial)swipe.animating && swipe.applyCallback(), swipe.sniff(a, !1), swipe.downX = swipe.x, swipe.downY = swipe.y, swipe.swiping = !0, swipe.moved = !1, swipe.startTime = new Date; };
swipe.move = function(a) { "follow" != player.swipeMode ? swipe.moved = !0 : swipe.swiping && (swipe.sniff(a, !0), swipe.apply(swipe.deltaX, 0)); };
swipe.end = function(a) {
    if ("follow" == player.swipeMode)
        if (swipe.animating)swipe.swiping = !1;
        else if (swipe.swiping) {
            swipe.sniff(a, !1);
            swipe.swiping = !1;
            var a = 1E3 > new Date - swipe.startTime, b = 1 < Math.abs(swipe.vx);
            swipe.deltaX > 0.5 * player.width ? swipe.prev(swipe.normal) : swipe.deltaX < 0.5 * -player.width ? swipe.next(swipe.normal) : a && 100 < swipe.deltaX && 2 < Math.abs(swipe.deltaX / swipe.deltaY) ? swipe.prev(swipe.quick) : a && -100 > swipe.deltaX && 2 < Math.abs(swipe.deltaX / swipe.deltaY) ? swipe.next(swipe.quick) : b && 10 < swipe.deltaX &&
                2 < Math.abs(swipe.deltaX / swipe.deltaY) ? swipe.prev(swipe.quick) : b && -10 > swipe.deltaX && 2 < Math.abs(swipe.deltaX / swipe.deltaY) ? swipe.next(swipe.quick) : (swipe.apply(0, 300), (!a || !(-100 > swipe.deltaY && 0.5 > Math.abs(swipe.deltaX / swipe.deltaY))) && a && 100 < swipe.deltaY && Math.abs(swipe.deltaX / swipe.deltaY));
            swipe.moved = !1;
        } else swipe.apply(0, 0);
};
swipe.cancel = function() {
    swipe.swiping = !1;
    swipe.animating = !1;
    swipe.moved = !1;
    swipe.apply(0, 0);
};
swipe.cancelTap = function() { setTimeout(function() { player.justTapped = !1; }, 0); };
swipe.next = function(a) {
    a = a || swipe.normal;
    swipe.cancelTap();
    player.slideIndex == $(".slide").length - 1 ? swipe.apply(0, a) : (player.unblock(), player.prepAudio(player.slideIndex + 1), swipe.animating = !0, swipe.applyCallback = function() { if (swipe.animating)player.showNextSlide(), swipe.animating = !1; }, swipe.apply(-player.width, a, function() { swipe.applyCallback(); }));
};
swipe.prev = function(a) {
    a = a || swipe.normal;
    swipe.cancelTap();
    0 == player.slideIndex ? swipe.apply(0, a) : (player.unblock(), player.prepAudio(player.slideIndex - 1), swipe.animating = !0, swipe.applyCallback = function() { if (swipe.animating)player.showPreviousSlide(), swipe.animating = !1; }, swipe.apply(player.width, a, function() { swipe.applyCallback(); }));
};
swipe.applyCallback = function() {};
swipe.apply = function(a, b, c) {
    $(".slide").css("-webkit-transition-property", "-webkit-transform");
    $(".slide").css("-webkit-transition-duration", b + "ms");
    $(".slide.prev").css("-webkit-transform", "translate3d(" + (a - player.width) + "px,0px,0px) scale(1.0)");
    $(".slide.in").css("-webkit-transform", "translate3d(" + a + "px,0px,0px) scale(1.0)");
    $(".slide.next").css("-webkit-transform", "translate3d(" + (a + player.width) + "px,0px,0px) scale(1.0)");
    c && ($(".slide.in").unbind("webkitTransitionEnd"), $(".slide.in").bind("webkitTransitionEnd",
        function() {
            $(".slide.in").unbind("webkitTransitionEnd");
            c();
        }));
};
swipe.undo = function() { setTimeout(function() { swipe.swiping || swipe.apply(0, 300); }, 1E3); };
swipe.setSlideIndex = function(a) {
    player.slideIndex = a;
    var b = $(".slide");
    b.removeClass("in out next prev before after");
    0 < a && ($(b[a - 1]).addClass("prev"), player.slideIndex--, story.allSlides[player.slideIndex].update(0, !0), player.slideIndex++);
    $(b[a]).addClass("in");
    a < story.allSlides.length - 1 && ($(b[a + 1]).addClass("next"), player.slideIndex++, story.allSlides[player.slideIndex].update(0, !0), player.slideIndex--);
    swipe.apply(0, 0);
};
swipe.init = function() {
    $(document.body).bind("mousedown", function(a) { swipe.start(a); });
    $(document.body).bind("touchstart", function(a) { swipe.start(a); });
    $(document.body).bind("mousemove", function(a) { swipe.swiping && (swipe.move(a), a.preventDefault()); });
    $(document.body).bind("touchmove", function(a) {
        swipe.move(a);
        a.preventDefault();
    });
    $(document.body).bind("mouseup", function(a) { swipe.end(a); });
    $(document.body).bind("touchend", function(a) { swipe.end(a); });
    $(document.body).bind("dragstart", function(a) { a.preventDefault(); });
    if (player.useSwipeJiggle)swipe.jiggleInterval = setInterval(function() { if (!swipe.swiping && !swipe.animating)swipe.jiggleDelta = 0 == swipe.jiggleDelta ? 1 : 0, swipe.apply(swipe.jiggleDelta, 0); }, 100);
    if (player.showInstrumentation)
        swipe.lastJiggle = new Date, swipe.jiggleInterval = setInterval(function() {
            if (!swipe.swiping && !swipe.animating) {
                var a = new Date - swipe.lastJiggle;
                if (200 < a) {
                    if (!player.mediaMonitor)player.mediaMonitor = $("<div class='narrowmonitor'></div>"), $(document.body).append(player.mediaMonitor);
                    player.mediaMonitor.html(a +
                        "<br>" + player.mediaMonitor.html());
                }
                if (player.useSwipeJiggle)swipe.jiggleDelta = 0 == swipe.jiggleDelta ? 1 : 0, swipe.apply(swipe.jiggleDelta, 0);
                swipe.lastJiggle = new Date;
            }
        }, 10);
};

function BitMask(a, b, c, d, e) {
    this.isOpaque = a;
    this.width = b || 0;
    this.height = c || 0;
    this.sourceWidth = d || this.width;
    this.sourceHeight = e || this.height;
}

BitMask.showDebug = !1;
BitMask.debugOnly = !1;
BitMask.max = function(a, b) { return a > b ? a : b; };
BitMask.min = function(a, b) { return a < b ? a : b; };
BitMask.prototype.loadFromImageUrl = function(a, b) {
    var c = this, d = new Image;
    d.onload = function() {
        c.loadFromImage(d);
        b && b(d);
    };
    d.src = a;
};
BitMask.prototype.loadFromImage = function(a) {
    var b = document.createElement("canvas");
    b.width = a.width;
    b.height = a.height;
    this.width = a.width;
    this.height = a.height;
    b = b.getContext("2d");
    b.drawImage(a, 0, 0);
    this.loadFromContext(b, a.width, a.height);
};
BitMask.prototype.loadFromContext = function(a) {
    this.pixels = [];
    for (var a = a.getImageData(0, 0, this.width, this.height).data, b = 0, c = 0; c < this.height; c++) {
        for (var d = [], e = 0; e < this.width; e++)d.push(0 != a[b] || 0 != a[b + 1] || 0 != a[b + 2] || 1 < a[b + 3]), b += 4;
        this.pixels.push(d);
    }
};
BitMask.prototype.loadFromRLE = function(a) {
    this.pixels = [];
    var b = a.indexOf("X") > a.indexOf("O");
    -1 == a.indexOf("O") && (b = !1);
    for (var a = a.replace(/O/ig, "X").split("X"), c = [], d = 0; d < a.length; d++) {
        var e = parseInt(a[d], 16);
        isNaN(e) && (e = 0);
        for (b = !b; 0 <= e;)c.length > this.sourceWidth - 1 && (this.pixels.push(c), c = []), c.push(b), e--;
    }
    this.pixels.push(c);
    (this.sourceWidth != this.width || this.sourceHeight != this.height) && this.fixScale();
};
BitMask.prototype.fixScale = function() {
    for (var a = [], b = 0; b < this.height; b++) {
        for (var c = this.pixels[parseInt(b * this.sourceHeight / this.height)], d = [], e = 0; e < this.width; e++) {
            var f = parseInt(e * this.sourceWidth / this.width);
            d[e] = c[f];
        }
        a[b] = d;
    }
    this.pixels = a;
};
BitMask.prototype.resize = function(a, b, c, d) {
    for (var e = 0; e < this.height && e < this.pixels.length; e++) {
        for (var f = 0; f < c; f++)this.pixels[e].unshift(0), this.pixels[e].push(0);
        for (; this.pixels[e].length < a;)this.pixels[e].push(0);
    }
    this.pixels[this.pixels.length - 1].length < this.width && this.pixels.pop();
    c = [];
    for (f = 0; f < a; f++)c.push(0);
    for (e = 0; e < d; e++)this.pixels.unshift(c), this.pixels.push(c);
    for (; this.pixels.length < b;)this.pixels.push(c);
    this.width = a;
    this.height = b;
};
BitMask.prototype.testOverlap = function(a, b, c, d) {
    var e = this.width > b && a.width > -b && this.height > c && a.height > -c;
    return!e || this.isOpaque && a.isOpaque ? e : this.testPixelOverlap(a, b, c, d);
};
BitMask.prototype.testPixelOverlap = function(a, b, c, d) {
    var b = parseInt(b), c = parseInt(c), e = 0, f = BitMask.min(a.width + b, this.width);
    0 < b && (e = b, f = BitMask.min(this.width, this.width + b));
    var g = BitMask.min(f - e, a.width), h = 0, j = BitMask.min(a.height + c, this.height);
    0 < c && (h = c, f = BitMask.min(this.height, this.height + c));
    f = BitMask.min(j - h, a.height);
    if (BitMask.showDebug) {
        if (!BitMask.testCanvas)
            BitMask.testCanvas = $("<canvas id='test' width='1000' height='1000' style='position:absolute;z-index:200;left:0px;top:0px;'></canvas>"),
                $(document.body).append(BitMask.testCanvas), BitMask.testContext = BitMask.testCanvas.get(0).getContext("2d"), BitMask.testContext.fillStyle = "rgba(255,255,0,0.5)";
        BitMask.testCanvas.show();
        clearTimeout(BitMask.testCanvasClear);
        BitMask.testCanvasClear = setTimeout(function() { BitMask.testCanvas.hide(); }, 1E3);
    }
    if (BitMask.showDebug)BitMask.testContext.fillStyle = "rgba(255,255,0,0.5)", BitMask.testContext.clearRect(0, 0, 1E3, 1E3), BitMask.testContext.fillRect(e, h, g, f);
    j = parseInt(10 * Math.random()) + 30;
    BitMask.debugOnly &&
    (j = 1);
    for (var k = 0, l = h; l < h + f; l++) {
        for (k = e + k; k < e + g; k += j) {
            var m = this.isPointActive(k, l), n = a.isPointActive(k - b, l - c);
            if (m && n) {
                m = d && d(k, l);
                if (BitMask.showDebug)m ? (BitMask.testContext.fillStyle = "rgba(255,0,0,0.9)", BitMask.testContext.fillRect(k - 1, l - 1, 2, 2)) : (BitMask.testContext.fillStyle = "rgba(0,255,0,0.9)", BitMask.testContext.fillRect(k - 2, l - 2, 4, 4));
                if (!m && !BitMask.debugOnly)return!0;
            }
        }
        k = k % g % j;
    }
    return!1;
};
BitMask.prototype.isPointActive = function(a, b) {
    if (this.isOpaque)return!0;
    a = parseInt(a);
    b = parseInt(b);
    return 0 > a || a >= this.width || 0 > b || b >= this.height || b >= this.pixels.length || a >= this.pixels[b].length ? !1 : this.pixels[b][a];
};
BitMask.prototype.drawDebug = function(a) {
    if (!this.isOpaque)
        if (a = a.getContext("2d"), this.isOpaque)a.fillStyle = "#f00", a.fillRect(0, 0, this.width, this.height);
        else for (var b = 0; b < this.height && b < this.pixels.length; b++)for (var c = 0; c < this.width && c < this.pixels[b].length; c++)a.fillStyle = this.pixels[b][c] ? "#00f" : "#000", a.fillRect(c, b, 1, 1);
};
var ResumeParser = function() {};
ResumeParser.dump = function(a, b) {
    for (var b = b || 0, c = new bwChunk(a), d = 0; d < b; d++);
    c.Data() && ResumeParser.dump(c.Data(), b + 1);
    c.Remainder() && ResumeParser.dump(c.Remainder(), b);
};
var ProgressBar = function(a, b, c) {
    this.container = a || $(document.body);
    this.ref = b;
    this.draggable = c;
    this.dragging = !1;
    this.index = 0;
    this.zoomModifier = this.count = 1;
    this.onDragUpdate = null;
    this.ref || this.createRef();
    c && this.bindDragEvents();
};
ProgressBar.prototype.createRef = function() {
    if (this.ref)return!1;
    this.ref = $('<div class="progress-container"><div class="progress-bar"></div></div>');
    this.container.append(this.ref);
    return!0;
};
ProgressBar.prototype.show = function() { this.ref.show(); };
ProgressBar.prototype.hide = function() { this.ref.hide(); };
ProgressBar.prototype.update = function() {
    if (player.currentWindow && player.currentWindow.progressBar && this == player.progressBar)player.currentWindow.progressBar.update();
    else {
        var a = parseFloat(100 * (this.index / this.count));
        100 < a && (a = 100);
        var b = a + "%";
        this.ref.children(".progress-bar").css("width", b);
        this.ref.children(".seek_bar_fill").css("width", b);
        this.ref.children(".seek_bar_progress").css("left", b);
        this.index == this.count || 100 == a ? this.ref.children().addClass("full") : this.ref.children().removeClass("full");
    }
};
ProgressBar.prototype.bindDragEvents = function() {
    var a = this;
    a.dragging = !1;
    var b = function(b) {
            if (a.dragging) {
                var c = a.ref.offset().left, f = a.ref.width() * a.zoomModifier;
                swipe.parseEventCoords(b);
                b = (swipe.x - c) / f;
                0 > b && (b = 0);
                1 < b && (b = 1);
                if (a.onDragUpdate)a.onDragUpdate(b);
            }
        },
        c = function(c) { if (a.dragging)b(c), a.dragging = !1, a.wasPlaying && (player.play(), player.activeTimeline != player && player.activeTimeline.play && player.activeTimeline.play()); };
    $(this.ref).bind("mousedown touchstart", function(c) {
        a.dragging = !0;
        a.wasPlaying =
            player.playing;
        b(c);
        a.wasPlaying && player.activeTimeline.pause();
    });
    $(window).bind("mousemove touchmove", b);
    $(this.ref).bind("mouseup touchend", c);
    $(document.body).bind("mouseup touchend", c);
    $(window).bind("mouseup touchend", c);
};
ProgressBar.getCurrentProgressBar = function() { return player.currentWindow && player.currentWindow.progressBar ? player.currentWindow.progressBar : player.progressBar; };
var VolumeSlider = function(a) {
    this.button = a;
    this.visible = this.dragging = !1;
    this.volume = 80;
    this.onDragUpdate = null;
    this.createRef();
    this.bindDragEvents();
    VolumeSlider.sliderList.push(this);
};
VolumeSlider.sliderList = [];
VolumeSlider.prototype.createRef = function() {
    this.button.find(".volume-slider").remove();
    this.ref = $('<div class="volume-slider"><div class="volume-handle"></div></div>');
    this.handle = this.ref.children().first();
    this.icon = this.button.children().first();
    this.button.prepend(this.ref);
};
VolumeSlider.prototype.toggle = function() { this.visible ? this.hide() : this.show(); };
VolumeSlider.prototype.show = function() {
    this.button.addClass("volume-open");
    this.visible = !0;
};
VolumeSlider.prototype.hide = function() {
    this.button.removeClass("volume-open");
    this.visible = this.dragging = !1;
};
VolumeSlider.prototype.setVolume = function(a) {
    this.volume = a;
    this.update();
};
VolumeSlider.prototype.update = function() { this.handle.css("top", parseInt(100 - this.volume) + "%"); };
VolumeSlider.prototype.bindDragEvents = function() {
    var a = this;
    a.dragging = !1;
    var b = function(b) {
            if (a.dragging) {
                var c = a.ref.offset().top, f = a.ref.height();
                swipe.parseEventCoords(b);
                b = 1 - (swipe.rawY - c) / f;
                0 > b && (b = 0);
                1 < b && (b = 1);
                a.volume = parseInt(100 * b);
                a.update();
                if (a.onDragUpdate)a.onDragUpdate(b);
                $.each(VolumeSlider.sliderList, function(b, c) { if (c != a)c.volume = a.volume, c.update(); });
            }
        },
        c = function(c) { if (a.dragging && (b(c), c = a.dragging, a.dragging = !1, c))return!1; };
    $(this.ref).bind("mousedown touchstart", function(c) {
        a.dragging =
            !0;
        b(c);
    });
    $(window).bind("mousemove touchmove", b);
    $(this.ref).bind("mouseup touchend", c);
    $(document.body).bind("mouseup touchend", c);
    $(window).bind("mouseup touchend", c);
    this.button.bind("click", function(b) {
        a.toggle();
        MouseEvents.processHideables(b);
        return!1;
    });
    MouseEvents.addHideable(".volume-slider", ".volume-slider,.icon.volume", function() { a.hide(); });
};

function ppRect(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.right = c;
    this.bottom = d;
}

ppRect.FromWidthHeight = function(a, b, c, d) { return new ppRect(a, b, a + c, b + d); };
ppRect.prototype.GetWidth = function() { return this.right - this.left; };
ppRect.prototype.GetHeight = function() { return this.bottom - this.top; };
ppRect.prototype.Clone = function() { return new ppRect(this.left, this.top, this.right, this.bottom); };
ppRect.prototype.Translate = function(a, b) {
    this.left += a;
    this.right += a;
    this.top += b;
    this.bottom += b;
};
ppRect.prototype.Widen = function(a, b) {
    this.left -= a;
    this.right += a;
    this.top -= b;
    this.bottom += b;
};
ppRect.prototype.AddRect = function(a) {
    if (this.left > a.left)this.left = a.left;
    if (this.right < a.right)this.right = a.right;
    if (this.top > a.top)this.top = a.top;
    if (this.bottom < a.bottom)this.bottom = a.bottom;
};
ppRect.prototype.RotateRect = function(a) {
    var a = a * Math.PI / 180, b = this.GetWidth(), c = this.GetHeight(), d = Math.cos(a), e = Math.sin(a), a = 0 * d + 0 * e, f = -0.0 * e + 0 * d, g = b * d + 0 * e, h = b * e + 0 * d, j = b * d - c * e, k = b * e + c * d, b = 0 * d - c * e, e = -0.0 * e + c * d, c = Math.min(f, h, k, e), d = Math.min(a, g, j, b), f = Math.max(f, h, k, e), a = Math.max(a, g, j, b);
    console.warn(d + ", " + a + " : " + c + ", " + f);
    return new ppRect(d, c, a, f);
};
window.ppFudge = 0.5;

function ppGraphics(a) {
    ppArt.currentFudge = 0;
    this.m_nXOffset = -a.left;
    this.m_nYOffset = -a.top;
    this.m_nWidth = a.right - a.left + 1;
    this.m_nHeight = a.bottom - a.top + 1;
    this.m_bForMask = !1;
    this.m_nFillYPos = this.m_nFillXPos = this.m_nFillRotation = 0;
    this.m_nFillScaleY = this.m_nFillScaleX = 1;
    this.m_bRotatedFill = !1;
    if (0 >= this.m_nWidth)this.m_nWidth = 1;
    if (0 >= this.m_nHeight)this.m_nHeight = 1;
    this.m_ptOffset = { x: 0, y: 0 };
    this.m_bLineDrawn = this.m_bStrokeStarted = this.m_bFillStarted = !1;
    this.m_nCurYPos = this.m_nCurXPos = 0;
    this.m_arrShadows =
    [];
    this.m_bHasInnerShadow = this.m_bHasShadow = !1;
    this.m_arrStrokeCanvases = [];
    this.m_oFillCanvas = document.createElement("canvas");
    this.m_oStrokeCanvas = document.createElement("canvas");
    this.m_oFillCanvas.width = this.m_nWidth;
    this.m_oFillCanvas.height = this.m_nHeight;
    this.m_oStrokeCanvas.width = this.m_nWidth;
    this.m_oStrokeCanvas.height = this.m_nHeight;
    this.m_oFillContext = this.m_oFillCanvas.getContext("2d");
    this.m_oStrokeContext = this.m_oStrokeCanvas.getContext("2d");
    this.m_arrStrokeCanvases.push(this.m_oStrokeCanvas);
    this.lineJoin = this.lineWidth = this.strokeStyle = this.fillStyle = null;
}

ppGraphics.prototype.Destroy = function() {};
ppGraphics.prototype.GetOffset = function() { return this.m_ptOffset; };
ppGraphics.prototype.ResizeCanvas = function(a, b, c) {

    function d(a, b, c, d, j) {
        var k = (c - a.width) / 2, l = (d - a.height) / 2, m = b.getImageData(0, 0, a.width, a.height);
        a.width = c;
        a.height = d;
        j ? b.putImageData(m, k, l) : b.putImageData(m, 0, 0);
    }

    d(this.m_oFillCanvas, this.m_oFillContext, a, b, c);
    d(this.m_oStrokeCanvas, this.m_oStrokeContext, a, b, c);
};
ppGraphics.prototype.ResizeCanvasBox = function(a) {

    function b(a, b, f) {
        var g = Math.min(f.left, 0), h = Math.min(f.top, 0), j = Math.max(f.right, a.width), f = Math.max(f.bottom, a.height), k = b.getImageData(0, 0, a.width, a.height);
        a.width = j;
        a.height = f;
        c.m_nWidth = Math.max(c.m_nWidth, a.width);
        c.m_nHeight = Math.max(c.m_nHeight, a.height);
        b.putImageData(k, -g, -h);
    }

    var c = this;
    b(this.m_oFillCanvas, this.m_oFillContext, a);
    b(this.m_oStrokeCanvas, this.m_oStrokeContext, a);
};
ppGraphics.prototype.DumpDebugCanvas = function() {
    var a = document.createElement("canvas");
    a.width = this.m_nWidth;
    a.height = this.m_nHeight;
    var b = a.getContext("2d"), c = this.m_oFillContext.getImageData(0, 0, a.width, a.height);
    b.putImageData(c, 0, 0);
    a.style.border = "dashed 1px blue";
    document.body.appendChild(a);
    document.body.style.backgroundColor = "red";
};
ppGraphics.prototype.GetFinalCanvas = function(a) {
    null == a && (a = !1);
    var b = new ppRect(0, 0, this.m_nWidth, this.m_nHeight);
    if (!a)for (var c = null, c = null, d = 0, e = 0, f = 0; f < this.m_arrShadows.length; f++)c = this.m_arrShadows[f], c.bInner ? this.DrawInnerShadow(c) : (this.DrawShadow(c), d = (this.m_nWidth - c.canvas.width) / 2, e = (this.m_nHeight - c.canvas.height) / 2, c.nXPos = d + c.nXOffset, c.nYPos = e + c.nYOffset, c = new ppRect(c.nXPos, c.nYPos, c.nXPos + c.canvas.width, c.nYPos + c.canvas.height), b.AddRect(c));
    this.finalCanvas = document.createElement("canvas");
    d = this.finalCanvas.getContext("2d");
    if (!a && this.m_bHasShadow) {
        this.m_nWidth = b.GetWidth();
        this.m_nHeight = b.GetHeight();
        this.m_ptOffset.x = -b.left;
        this.m_ptOffset.y = -b.top;
        this.finalCanvas.width = this.m_nWidth;
        this.finalCanvas.height = this.m_nHeight;
        for (f = 0; f < this.m_arrShadows.length; f++)if (c = this.m_arrShadows[f], !c.bInner)d.drawImage(c.canvas, c.nXPos - b.left, c.nYPos - b.top), c.canvas.width = 1, c.canvas.height = 1;
    } else this.finalCanvas.width = this.m_nWidth, this.finalCanvas.height = this.m_nHeight;
    d.drawImage(this.m_oFillCanvas,
        -b.left, -b.top);
    if (!a)this.m_oFillCanvas.width = 1, this.m_oFillCanvas.height = 1, this.m_oFillCanvas = null;
    for (f = 0; f < this.m_arrStrokeCanvases.length; f++)if (d.drawImage(this.m_arrStrokeCanvases[f], -b.left, -b.top), !a)this.m_arrStrokeCanvases[f].width = 1, this.m_arrStrokeCanvases[f].height = 1, this.m_arrStrokeCanvases[f] = null;
    if (!a && this.m_bHasInnerShadow) {
        d.save();
        for (f = 0; f < this.m_arrShadows.length; f++)
            if (c = this.m_arrShadows[f], c.bInner)
                d.shadowOffsetX = c.nXOffset, d.shadowOffsetY = c.nYOffset, d.shadowBlur = c.nBlur,
                    d.shadowColor = ppArt.GetColor(c.nColor, c.nAlpha), d.globalCompositeOperation = "source-atop", d.drawImage(c.canvas, -10, -10), c.canvas.width = 1, c.canvas.height = 1;
        d.restore();
    }
    return this.finalCanvas;
};
ppGraphics.prototype.AddImage = function(a, b, c, d, e, f) {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    if (0 == this.m_oFillCanvas.width || 0 == this.m_oFillCanvas.height)this.m_oFillCanvas.width = a.width * d, this.m_oFillCanvas.height = a.height * e, this.m_oStrokeCanvas.width = this.m_oFillCanvas.width, this.m_oStrokeCanvas.height = this.m_oFillCanvas.height, this.m_nWidth = this.m_oFillCanvas.width, this.m_nHeight = this.m_oFillCanvas.height;
    var g = a.naturalWidth || a.width, h = a.naturalHeight || a.height;
    if (this.m_oFillCanvas.width <
        Math.ceil(g * d) + b + (this.m_nXOffset + ppArt.currentFudge))this.m_oFillCanvas.width = Math.ceil(g * d) + b + (this.m_nXOffset + ppArt.currentFudge), this.m_nWidth = this.m_oStrokeCanvas.width = this.m_oFillCanvas.width;
    if (this.m_oFillCanvas.height < Math.ceil(h * e) + c + (this.m_nYOffset + ppArt.currentFudge))this.m_oFillCanvas.height = Math.ceil(h * e) + c + (this.m_nYOffset + ppArt.currentFudge), this.m_nHeight = this.m_oStrokeCanvas.height = this.m_oFillCanvas.height;
    this.m_bFillStarted = !1;
    this.m_oFillContext.beginPath();
    this.m_oFillContext.globalAlpha =
        f;
    b -= ppArt.currentFudge;
    c -= ppArt.currentFudge;
    this.m_oFillContext.drawImage(a, 0, 0, g, h, b + (this.m_nXOffset + ppArt.currentFudge), c + (this.m_nYOffset + ppArt.currentFudge), Math.ceil(g * d), Math.ceil(h * e));
    this.m_oFillContext.globalAlpha = 1;
};
ppGraphics.prototype.StartSolidFill = function(a, b) {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    this.m_oFillContext.beginPath();
    this.m_oFillContext.fillStyle = ppArt.GetColor(a, b);
    this.m_bFillStarted = !0;
};
ppGraphics.prototype.StartGradientFill = function(a) {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    this.m_oFillContext.beginPath();
    this.m_oFillContext.fillStyle = a;
    this.m_bFillStarted = !0;
};
ppGraphics.prototype.EndFill = function() {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    this.m_bFillStarted = !1;
};
ppGraphics.prototype.StartImageFill = function(a) {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    this.m_oFillContext.beginPath();
    this.m_oFillContext.fillStyle = a;
    this.m_bFillStarted = !0;
};
ppGraphics.prototype.StartRotatedImageFill = function(a, b, c, d, e, f) {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    this.m_nFillRotation = b;
    this.m_nFillXPos = c;
    this.m_nFillYPos = d;
    this.m_nFillScaleX = e;
    this.m_nFillScaleY = f;
    this.m_bRotatedFill = !0;
    this.m_oFillContext.beginPath();
    this.m_oFillContext.fillStyle = a;
    this.m_bFillStarted = !0;
};
ppGraphics.prototype.SetLineStyle = function(a, b, c, d, e) {
    this.CreateNewStrokeCanvas();
    this.m_bStrokeStarted = !0;
    this.strokeStyle = ppArt.GetColor(b, c);
    this.lineWidth = a;
    this.lineJoin = d;
    this.lineCap = e;
    if (0 < a % 2)ppArt.currentFudge = window.ppFudge;
    this.m_oStrokeContext.strokeStyle = this.strokeStyle;
    this.m_oStrokeContext.lineWidth = this.lineWidth;
    this.m_oStrokeContext.lineJoin = this.lineJoin;
};
ppGraphics.prototype.SetGradientLineStyle = function(a, b, c, d) {
    this.CreateNewStrokeCanvas();
    this.m_bStrokeStarted = !0;
    this.strokeStyle = b;
    this.lineWidth = a;
    this.lineJoin = c;
    this.lineCap = d;
    if (0 < a % 2)ppArt.currentFudge = window.ppFudge;
    this.m_oStrokeContext.strokeStyle = b;
    this.m_oStrokeContext.lineWidth = this.lineWidth;
    this.m_oStrokeContext.lineJoin = this.lineJoin;
    this.m_bStrokeStarted = !0;
};
ppGraphics.prototype.ClearLineStyle = function() {
    this.CreateNewStrokeCanvas();
    this.m_bStrokeStarted = !1;
};
ppGraphics.prototype.CreateNewStrokeCanvas = function() {
    ppArt.currentFudge = 0;
    if (!0 == this.m_bLineDrawn)this.m_bStrokeStarted && this.m_oStrokeContext.stroke(), this.m_oStrokeContext.beginPath(), this.m_bLineDrawn = !1;
};
ppGraphics.prototype.AddShadow = function(a, b, c, d, e, f, g, h, j) {
    var k = {};
    k.nXOffset = a;
    k.nYOffset = b;
    k.nBlur = c;
    k.nColor = d;
    k.nAlpha = e;
    k.nScale = f;
    k.nStrength = g;
    k.nQuality = h;
    k.bInner = j;
    this.m_arrShadows.push(k);
};
ppGraphics.prototype.DrawShadow = function(a) {
    var b = a.nBlur, c = a.nScale, d = this.GetFinalCanvas(!0), e = document.createElement("canvas"), f = e.getContext("2d");
    e.height = 2 * d.height * c + 4 * b;
    e.width = d.width * c + 2 * b;
    f.shadowOffsetX = 0;
    f.shadowOffsetY = d.height * c + 2 * b;
    f.shadowBlur = b;
    f.shadowColor = ppArt.GetColor(a.nColor, a.nAlpha * (1 + (a.nStrength - 1) / 2));
    f.drawImage(d, 0, 0, d.width, d.height, b, b, d.width * c, d.height * c);
    a.canvas = document.createElement("canvas");
    a.context = a.canvas.getContext("2d");
    this.m_bHasShadow = !0;
    a.canvas.height =
        d.height * c + 2 * b;
    a.canvas.width = d.width * c + 2 * b;
    a.context.drawImage(e, 0, d.height * c + 2 * b, e.width, e.height - (d.height * c + 2 * b), 0, 0, e.width, e.height - (d.height * c + 2 * b));
    for (f = 1; f < a.nStrength; f++)a.context.drawImage(e, 0, d.height * c + 2 * b, e.width, e.height - (d.height * c + 2 * b), 0, 0, e.width, e.height - (d.height * c + 2 * b));
    e.width = 1;
    e.height = 1;
    d.width = 1;
    d.height = 1;
};
ppGraphics.prototype.DrawInnerShadow = function(a) {
    var b = this.GetFinalCanvas(!0);
    this.m_bHasInnerShadow = !0;
    a.canvas = document.createElement("canvas");
    a.canvas.width = b.width + 20;
    a.canvas.height = b.height + 20;
    a.context = a.canvas.getContext("2d");
    a.context.fillStyle = ppArt.GetColor(a.nColor, a.nAlpha);
    a.context.moveTo(0, 0);
    a.context.lineTo(a.canvas.width, 0);
    a.context.lineTo(a.canvas.width, a.canvas.height);
    a.context.lineTo(0, a.canvas.height);
    a.context.lineTo(0, 0);
    a.context.fill();
    a.context.globalCompositeOperation =
        "destination-out";
    a.context.drawImage(b, 10, 10);
    a.context.globalCompositeOperation = "source-over";
    b.width = 1;
    b.height = 1;
};
ppGraphics.prototype.fill = function() {
    this.m_bFillStarted && this.FillContext(this.m_oFillContext);
    this.m_oFillContext.beginPath();
};
ppGraphics.prototype.FillContext = function(a) {
    a.save();
    a.translate(this.m_nXOffset + ppArt.currentFudge, this.m_nYOffset + ppArt.currentFudge);
    this.m_bRotatedFill && (a.scale(this.m_nFillScaleX, this.m_nFillScaleY), a.translate(this.m_nFillXPos, this.m_nFillYPos), a.rotate(this.m_nFillRotation));
    a.fill();
    this.m_bRotatedFill = !1;
    a.restore();
};
ppGraphics.prototype.stroke = function() { this.m_bStrokeStarted && this.m_oStrokeContext.stroke(); };
ppGraphics.prototype.beginPath = function() {
    this.m_oFillContext.beginPath();
    this.m_oStrokeContext.beginPath();
    this.m_bLineDrawn = this.m_bFillStarted = this.m_bStrokeStarted = !1;
};
ppGraphics.prototype.closePath = function() {
    this.m_oFillContext.closePath();
    this.m_oStrokeContext.closePath();
    this.m_oFillContext.drawImage(this.m_oStrokeCanvas, 0, 0);
    this.m_oStrokeContext.clearRect(0, 0, this.m_oStrokeCanvas.width, this.m_oStrokeCanvas.height);
};
ppGraphics.prototype.lineTo = function(a, b) {
    this.m_bForMask && (a = Math.round(a), b = Math.round(b));
    this.m_bFillStarted && this.m_oFillContext.lineTo(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge));
    if (this.m_bStrokeStarted)this.m_bLineDrawn = !0, this.m_oStrokeContext.lineTo(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge));
    this.m_nCurXPos = a + (this.m_nXOffset + ppArt.currentFudge);
    this.m_nCurYPos = b + (this.m_nYOffset + ppArt.currentFudge);
};
ppGraphics.prototype.moveTo = function(a, b) {
    this.m_bForMask && (a = Math.round(a), b = Math.round(b));
    this.m_oFillContext.moveTo(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge));
    this.m_oStrokeContext.moveTo(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge));
    this.m_nCurXPos = a + (this.m_nXOffset + ppArt.currentFudge);
    this.m_nCurYPos = b + (this.m_nYOffset + ppArt.currentFudge);
};
ppGraphics.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
    this.m_bForMask && (a = Math.round(a), b = Math.round(b), c = Math.round(c), d = Math.round(d), e = Math.round(e), f = Math.round(f));
    this.m_bFillStarted && this.m_oFillContext.bezierCurveTo(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge), c + (this.m_nXOffset + ppArt.currentFudge), d + (this.m_nYOffset + ppArt.currentFudge), e + (this.m_nXOffset + ppArt.currentFudge), f + (this.m_nYOffset + ppArt.currentFudge));
    if (this.m_bStrokeStarted)
        this.m_bLineDrawn =
            !0, this.m_oStrokeContext.bezierCurveTo(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge), c + (this.m_nXOffset + ppArt.currentFudge), d + (this.m_nYOffset + ppArt.currentFudge), e + (this.m_nXOffset + ppArt.currentFudge), f + (this.m_nYOffset + ppArt.currentFudge));
    this.m_nCurXPos = e + (this.m_nXOffset + ppArt.currentFudge);
    this.m_nCurYPos = f + (this.m_nYOffset + ppArt.currentFudge);
};
ppGraphics.prototype.createLinearGradient = function(a, b, c, d) { return this.m_oFillContext.createLinearGradient(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge), c + (this.m_nXOffset + ppArt.currentFudge), d + (this.m_nYOffset + ppArt.currentFudge)); };
ppGraphics.prototype.createRadialGradient = function(a, b, c, d, e, f) { return this.m_oFillContext.createRadialGradient(a + (this.m_nXOffset + ppArt.currentFudge), b + (this.m_nYOffset + ppArt.currentFudge), c, d + (this.m_nXOffset + ppArt.currentFudge), e + (this.m_nYOffset + ppArt.currentFudge), f); };
ppGraphics.prototype.createPattern = function(a, b) { return this.m_oFillContext.createPattern(a, b); };
var ppArt = {
    CMD_CREATE_SHAPE: "0",
    CMD_CREATE_MASK: "1",
    CMD_END_PATH: "2",
    CMD_CLOSE_PATH: "3",
    CMD_ADD_TEXT: "4",
    CMD_ADD_IMAGE: "5",
    CMD_ROTATION_DATA: "6",
    CMD_START_SOLID_FILL: "A",
    CMD_START_GRADIENT_FILL: "B",
    CMD_START_BITMAP_FILL: "C",
    CMD_START_SLIDEBG_FILL: "D",
    CMD_END_FILL: "E",
    CMD_START_BITMAP_TILE_FILL: "F",
    CMD_REPEAT_FILL: "G",
    CMD_LINE_STYLE: "N",
    CMD_GRADIENT_LINE_STYLE: "O",
    CMD_CLEAR_LINE_STYLE: "P",
    CMD_REPEAT_LINE_STYLE: "Q",
    CMD_DEFAULT_HOT: "Z",
    CMD_DRAW_ARC: "a",
    CMD_DRAW_ELLIPSE: "b",
    CMD_DRAW_RECTANGLE: "c",
    CMD_DRAW_LINE: "d",
    CMD_DRAW_LINES: "e",
    CMD_DRAW_POLYGON: "f",
    CMD_DRAW_CURVE: "g",
    CMD_DRAW_CLOSED_CURVE: "h",
    CMD_DRAW_TEXT: "i",
    CMD_DRAW_SHADOW: "t",
    CMD_DRAW_SHAPE_SHADOW: "u",
    CMD_DRAW_REFLECTION: "v",
    CMD_SOFTEN_EDGES: "w",
    CMD_DRAW_PERSPECTIVE_SHADOW: "x",
    LINE_CAP_SQUARE: 1,
    LINE_CAP_FLAT: 2,
    LINE_CAP_ROUND: 4,
    LINE_JOIN_ROUND: 8,
    LINE_JOIN_BEVEL: 16,
    LINE_JOIN_MITER: 32,
    DEGREE_MULTIPLIER: 2 * Math.PI / 360,
    BASE_NUMBER: 64,
    BASE_POW: 6,
    m_strPath: "",
    m_nPos: 0,
    m_bPathStarted: !1,
    m_bShapeStarted: !1,
    m_bReverseCurve: !1,
    m_bResetReverse: !1,
    m_nStartX: 0,
    m_nStartY: 0,
    m_nCurX: 0,
    m_nCurY: 0,
    m_arrGraphics: null,
    m_listTextOffsets: null,
    m_arrShadows: null,
    m_oGraphics: null,
    m_bDebug: !1,
    m_nReflectionIndex: -1,
    m_nLastLineStyle: -1,
    m_nLastFill: -1,
    m_nLineWidth: 0,
    rectRotated: null,
    polyRotated: null,
    m_nRotationDistance: 0,
    m_o64to10: {
        "0": 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
        g: 16,
        h: 17,
        i: 18,
        j: 19,
        k: 20,
        l: 21,
        m: 22,
        n: 23,
        o: 24,
        p: 25,
        q: 26,
        r: 27,
        s: 28,
        t: 29,
        u: 30,
        v: 31,
        w: 32,
        x: 33,
        y: 34,
        z: 35,
        A: 36,
        B: 37,
        C: 38,
        D: 39,
        E: 40,
        F: 41,
        G: 42,
        H: 43,
        I: 44,
        J: 45,
        K: 46,
        L: 47,
        M: 48,
        N: 49,
        O: 50,
        P: 51,
        Q: 52,
        R: 53,
        S: 54,
        T: 55,
        U: 56,
        V: 57,
        W: 58,
        X: 59,
        Y: 60,
        Z: 61,
        _: 62,
        $: 63
    },
    UBaseNto10: function(a, b) {
        for (var c = 0, d = 0, e = a; e < a + b; e++)c += this.m_o64to10[this.m_strPath.charAt(this.m_nPos + e)] << this.BASE_POW * d, d++;
        return c;
    },
    BaseNto10: function(a, b) {
        for (var c = 0, d = 0, e = a; e < a + b; e++)c += this.m_o64to10[this.m_strPath.charAt(this.m_nPos + e)] << this.BASE_POW * d, d++;
        return c - 2047;
    },
    FBaseNto10: function(a, b) {
        var c = 0, c = 0, d = this.UBaseNto10(a + 2, b - 2);
        "00" == this.m_strPath.substr(a + this.m_nPos, 2) ? c = -d / 4095 : (c = this.BaseNto10(a, 2), c += d / 4095);
        return Math.round(1E3 *
            c) / 1E3;
    },
    GetColor: function(a, b) {
        void 0 == b && (b = 100);
        var c;
        c = b / 100;
        0 == c && (c = 0.01);
        return"rgba(" + (a >> 16) + "," + (a >> 8 & 255) + "," + (a & 255) + ", " + c + ")";
    },
    GetCommandDescription: function(a) {
        var b = "Unknown: " + a;
        switch (a) {
        case this.CMD_ROTATION_DATA:
            b = "CMD_ROTATION_DATA";
            break;
        case this.CMD_DRAW_TEXT:
            b = "CMD_DRAW_TEXT";
            break;
        case this.CMD_DEFAULT_HOT:
            b = "CMD_DEFAULT_HOT";
            break;
        case this.CMD_DRAW_LINE:
            b = "CMD_DRAW_LINE";
            break;
        case this.CMD_DRAW_LINES:
            b = "CMD_DRAW_LINES";
            break;
        case this.CMD_DRAW_POLYGON:
            b = "CMD_DRAW_POLYGON";
            break;
        case this.CMD_DRAW_CURVE:
            b = "CMD_DRAW_CURVE";
            break;
        case this.CMD_DRAW_CLOSED_CURVE:
            b = "**** implement CMD_DRAW_CLOSED_CURVE";
            break;
        case this.CMD_ADD_TEXT:
            b = "CMD_ADD_TEXT";
            break;
        case this.CMD_ADD_IMAGE:
            b = "CMD_ADD_IMAGE";
            break;
        case this.CMD_END_PATH:
            b = "CMD_END_PATH";
            break;
        case this.CMD_CLOSE_PATH:
            b = "CMD_CLOSE_PATH";
            break;
        case this.CMD_CREATE_SHAPE:
            b = "**** implement CMD_CREATE_SHAPE";
            break;
        case this.CMD_CREATE_MASK:
            b = "CMD_CREATE_MASK";
            break;
        case this.CMD_LINE_STYLE:
            b = "CMD_LINE_STYLE";
            break;
        case this.CMD_GRADIENT_LINE_STYLE:
            b =
                "**** implement CMD_GRADIENT_LINE_STYLE";
            break;
        case this.CMD_CLEAR_LINE_STYLE:
            b = "CMD_CLEAR_LINE_STYLE";
            break;
        case this.CMD_REPEAT_LINE_STYLE:
            b = "**** implement CMD_REPEAT_LINE_STYLE";
            break;
        case this.CMD_START_SLIDEBG_FILL:
            b = "**** implement CMD_START_SLIDEBG_FILL";
            break;
        case this.CMD_START_BITMAP_FILL:
            b = "**** implement CMD_START_BITMAP_FILL";
            break;
        case this.CMD_START_BITMAP_TILE_FILL:
            b = "CMD_START_BITMAP_TILE_FILL";
            break;
        case this.CMD_START_GRADIENT_FILL:
            b = "CMD_START_GRADIENT_FILL";
            break;
        case this.CMD_START_SOLID_FILL:
            b =
                "CMD_START_SOLID_FILL";
            break;
        case this.CMD_END_FILL:
            b = "CMD_END_FILL";
            break;
        case this.CMD_REPEAT_FILL:
            b = "**** implement CMD_REPEAT_FILL";
            break;
        case this.CMD_DRAW_ELLIPSE:
            b = "CMD_DRAW_ELLIPSE";
            break;
        case this.CMD_DRAW_RECTANGLE:
            b = "CMD_DRAW_RECTANGLE";
            break;
        case this.CMD_DRAW_SHADOW:
            b = "CMD_DRAW_SHADOW";
            break;
        case this.CMD_DRAW_ARC:
        case this.CMD_DRAW_SHAPE_SHADOW:
            b = "**** implement CMD_DRAW_SHAPE_SHADOW";
            break;
        case this.CMD_DRAW_PERSPECTIVE_SHADOW:
            b = "**** implement CMD_DRAW_PERSPECTIVE_SHADOW";
            break;
        case this.CMD_SOFTEN_EDGES:
            b =
                "CMD_SOFTEN_EDGES";
            break;
        case this.CMD_DRAW_REFLECTION:
            b = "CMD_DRAW_REFLECTION";
        }
        return b;
    },
    m_arrColors: [16711680, 16776960, 16777215, 65280, 65535, 255, 16711935, 0],
    m_nCurColor: 0,
    DrawVector: function(a, b, c, d, e, f) {
        if (null != this.m_arrGraphics)for (var g = 0; g < this.m_arrGraphics.length; g++)this.m_arrGraphics[g].Destroy();
        this.m_arrGraphics = [];
        this.m_listTextOffsets = {};
        if (!a.rectShape)a.rectShape = new ppRect(-1, -1, a.m_nWidth + 1, a.m_nHeight + 1);
        this.rectShape = a.rectShape;
        this.m_nRotation = a.rotation;
        this.m_oGraphics =
            new ppGraphics(a.rectShape);
        this.m_arrGraphics.push(this.m_oGraphics);
        this.m_nPos = 0;
        this.m_bShapeStarted = this.m_bPathStarted = !1;
        this.m_nReflectionIndex = -1;
        this.m_bResetReverse = this.m_bReverseCurve = !1;
        this.m_arrShadows = null;
        this.DrawPath(b, 0, 0, c, d, e, f);
        b = a.canvas.getContext("2d");
        b.save();
        for (var h = [], f = null, e = d = 0, c = { x: 0, y: 0 }, g = 0; g < this.m_arrGraphics.length; g++) {
            if (1 == this.m_arrGraphics.length && null != this.m_arrShadows) {
                for (var j = this.m_arrGraphics[0], f = null, k = 0; k < this.m_arrShadows.length; k++)
                    f = this.m_arrShadows[k],
                        j.AddShadow(f.nXOffset, f.nYOffset, f.nBlurX, f.nColor, f.nAlpha, f.nScale, f.nStrength, f.nQuality, f.bInner);
                this.m_arrShadows = null;
            }
            f = {};
            f.canvas = this.m_arrGraphics[g].GetFinalCanvas();
            f.offset = this.m_arrGraphics[g].GetOffset();
            f.width = this.m_oGraphics.m_nWidth;
            f.height = this.m_oGraphics.m_nHeight;
            if (d < f.canvas.height)d = f.canvas.height;
            if (e < f.canvas.width)e = f.canvas.width;
            h.push(f);
            if (c.x < h[g].offset.x)c.x = h[g].offset.x;
            if (c.y < h[g].offset.y)c.y = h[g].offset.y;
        }
        f = null;
        if (1 == h.length)f = h[0].canvas, c = h[0].offset;
        else {
            f = document.createElement("canvas");
            f.width = e;
            f.height = d;
            j = f.getContext("2d");
            for (g = 0; g < h.length; g++)j.drawImage(h[g].canvas, c.x - h[g].offset.x, c.y - h[g].offset.y);
        }
        if (null != this.m_arrShadows) {
            j = new ppGraphics(new ppRect(0, 0, e, d));
            j.AddImage(f, 0, 0, 1, 1, 100);
            for (g = 0; g < this.m_arrShadows.length; g++)f = this.m_arrShadows[g], j.AddShadow(f.nXOffset, f.nYOffset, f.nBlurX, f.nColor, f.nAlpha, f.nScale, f.nStrength, f.nQuality, f.bInner);
            f = j.GetFinalCanvas();
            e = f.width;
            d = f.height;
            g = j.GetOffset();
            0 < g.x && (c.x += g.x);
            0 <
                g.y && (c.y += g.y);
        }
        g = new ppRect(0, 0, e, d);
        d = new ppRect(0, 0, e, d);
        e = { x: 0, y: 0 };
        if (0 <= this.m_nReflectionIndex)this.m_nPos = this.m_nReflectionIndex, this.AdjustReflectionBounds(g, e, a.rectShape, this.rectRotated, a.rotation, a.rotatexpos, a.rotateypos, this.m_nRotationDistance);
        a.canvas.width = g.GetWidth();
        a.canvas.height = g.GetHeight();
        b.drawImage(f, 0, 0, d.right, d.bottom, e.x, e.y, d.right, d.bottom);
        b.restore();
        if (0 <= this.m_nReflectionIndex)
            this.m_nPos = this.m_nReflectionIndex, this.DrawReflection(b, a.canvas, a.rectShape,
                e, this.rectRotated, this.polyRotated, a.rotation, a.rotatexpos, a.rotateypos, this.m_nRotationDistance);
        a.m_nXOffset = a.rectShape.left - (e.x + c.x);
        a.m_nYOffset = a.rectShape.top - (e.y + c.y);
        for (var l in this.m_listTextOffsets)this.m_listTextOffsets[l].x += e.x + c.x, this.m_listTextOffsets[l].y += e.y + c.y;
        -1 < location.search.indexOf("info=1") && b.fillRect(a.rectShape.left, a.rectShape.top, a.rectShape.left + 10, a.rectShape.top + 10);
    },
    DrawPath: function(a, b, c, d, e, f, g) {
        this.m_strPath = a;
        for (this.m_oGraphics.beginPath(); this.m_nPos <
            this.m_strPath.length;) {
            a = this.m_strPath.charAt(this.m_nPos);
            this.m_nPos++;
            if (this.m_bResetReverse)this.m_bReverseCurve = !1;
            this.m_bResetReverse = !0;
            this.ExecuteCmd(a, b, c, d, e, f, g);
        }
        this.m_oGraphics.fill();
        this.m_oGraphics.stroke();
    },
    ExecuteCmd: function(a, b, c, d, e, f, g) {
        switch (a) {
        case this.CMD_ROTATION_DATA:
            this.m_nPos += this.StoreRotationData();
            break;
        case this.CMD_CREATE_SHAPE:
            b = this.m_nPos;
            this.m_oGraphics.fill();
            this.m_oGraphics.stroke();
            this.m_oGraphics = new ppGraphics(this.rectShape);
            this.m_arrGraphics.push(this.m_oGraphics);
            this.m_nPos = b + 1;
            break;
        case this.CMD_END_PATH:
            this.m_oGraphics.fill();
            this.m_oGraphics.stroke();
            this.m_bPathStarted = this.m_bShapeStarted = !1;
            this.m_nCurY = this.m_nCurX = 0;
            break;
        case this.CMD_CLOSE_PATH:
            this.m_bResetReverse = !1;
            this.m_oGraphics.lineTo(this.m_nStartX, this.m_nStartY);
            this.m_oGraphics.closePath();
            this.m_bShapeStarted = !0;
            this.m_bPathStarted = !1;
            this.m_nCurY = this.m_nCurX = 0;
            break;
        case this.CMD_ADD_IMAGE:
            this.m_nPos += this.AddImage(b, c, f);
            break;
        case this.CMD_START_SOLID_FILL:
            this.m_nLastFill = this.m_nPos -
                1;
            this.m_nPos += this.StartSolidFill();
            break;
        case this.CMD_START_GRADIENT_FILL:
            this.m_nLastFill = this.m_nPos - 1;
            this.m_oGraphics.fill();
            this.m_nPos += this.StartGradientFill(b, c);
            break;
        case this.CMD_START_BITMAP_FILL:
            this.m_nLastFill = this.m_nPos - 1;
            this.m_oGraphics.fill();
            this.m_nPos += this.StartBitmapFill(b, c, f);
            break;
        case this.CMD_START_SLIDEBG_FILL:
            this.m_nLastFill = this.m_nPos - 1;
            this.m_oGraphics.fill();
            this.StartSlideBgFill();
            break;
        case this.CMD_END_FILL:
            this.m_oGraphics.EndFill();
            break;
        case this.CMD_START_BITMAP_TILE_FILL:
            this.m_nLastFill =
                this.m_nPos - 1;
            this.m_nPos += this.StartBitmapTileFill(b, c, f);
            break;
        case this.CMD_REPEAT_FILL:
            a = this.m_nPos;
            this.m_nPos = this.m_nLastFill;
            g = this.m_strPath.charAt(this.m_nPos);
            this.m_nPos++;
            this.ExecuteCmd(g, b, c, d, e, f);
            this.m_nPos = a;
            break;
        case this.CMD_LINE_STYLE:
            this.m_nLastLineStyle = this.m_nPos - 1;
            this.m_nPos += this.SetLineStyle();
            break;
        case this.CMD_GRADIENT_LINE_STYLE:
            this.m_nLastLineStyle = this.m_nPos - 1;
            this.m_nPos += this.SetGradientLineStyle();
            break;
        case this.CMD_CLEAR_LINE_STYLE:
            this.m_nLineWidth = 0;
            this.m_oGraphics.ClearLineStyle();
            break;
        case this.CMD_REPEAT_LINE_STYLE:
            a = this.m_nPos;
            this.m_nPos = this.m_nLastLineStyle;
            g = this.m_strPath.charAt(this.m_nPos);
            this.m_nPos++;
            this.ExecuteCmd(g, b, c, d, e, f);
            this.m_nPos = a;
            break;
        case this.CMD_DEFAULT_HOT:
            if (this.item)this.item.vectorHot = !0;
            break;
        case this.CMD_DRAW_ELLIPSE:
            this.m_nPos += this.DrawEllipse(b, c);
            this.m_oGraphics.closePath();
            this.m_bPathStarted = !1;
            break;
        case this.CMD_DRAW_RECTANGLE:
            this.m_nPos += this.DrawRectangle(b, c);
            this.m_oGraphics.closePath();
            this.m_bPathStarted = !1;
            break;
        case this.CMD_DRAW_LINE:
            this.m_nPos += this.DrawLine(b, c);
            break;
        case this.CMD_DRAW_LINES:
            this.m_nPos += this.DrawLines(b, c);
            break;
        case this.CMD_DRAW_POLYGON:
            this.m_nPos += this.DrawPolygon(b, c);
            this.m_oGraphics.closePath();
            this.m_bPathStarted = !1;
            break;
        case this.CMD_DRAW_CURVE:
            this.m_bResetReverse = !1;
            this.m_nPos += this.DrawCurve(b, c);
            break;
        case this.CMD_DRAW_CLOSED_CURVE:
            this.m_bResetReverse = !1;
            this.m_nPos += this.DrawCurve(b, c);
            this.m_oGraphics.closePath();
            this.m_bPathStarted =
                !1;
            break;
        case this.CMD_DRAW_SHADOW:
            this.m_nPos += this.DrawGlobalShadow();
            break;
        case this.CMD_DRAW_SHAPE_SHADOW:
            this.m_nPos += this.DrawShadow();
            break;
        case this.CMD_DRAW_REFLECTION:
            this.m_nReflectionIndex = this.m_nPos;
            this.m_nPos += 12;
            break;
        case this.CMD_DRAW_PERSPECTIVE_SHADOW:
            this.m_nPos += 37;
            break;
        case this.CMD_DRAW_TEXT:
            this.m_nPos += this.DrawVectorText(b, c, e);
            break;
        case this.CMD_ADD_TEXT:
            this.m_nPos += this.AddText(b, c, d, e, g);
        }
    },
    GetGradientLine: function(a, b, c, d, e) {
        for (var f = !1; 180 <= e;)e -= 180, f = !f;
        var e =
                e * Math.PI / 180,
            g = 0,
            h = 0,
            c = c / 2,
            d = d / 2;
        e <= Math.atan2(d, c) ? (g = c, h = Math.tan(e) * c) : e <= Math.PI / 2 ? (g = Math.tan(Math.PI / 2 - e) * d, h = d) : e <= Math.PI / 2 + Math.atan2(c, d) ? (g = Math.tan(Math.PI / 2 - e) * d, h = d) : e <= Math.PI && (g = -c, h = Math.tan(e) * -c);
        f && (g = -g, h = -h);
        return{ x1: a + c - g, y1: b + d - h, x2: a + c + g, y2: b + d + h };
    },
    StartGradientFill: function() {
        var a = this.UBaseNto10(0, 1), b = this.BaseNto10(1, 2), c = this.BaseNto10(3, 2), d = this.BaseNto10(5, 2), e = this.BaseNto10(7, 2), f = 360 * this.UBaseNto10(9, 2) / 4095, g = this.UBaseNto10(11, 1);
        2 == a ? (a = d, e < d && (a = e), b = this.m_oGraphics.createRadialGradient(b +
            d / 2, c + e / 2, 0, b + d / 2, c + e / 2, a / 2)) : (b = this.GetGradientLine(b, c, d, e, f), b = this.m_oGraphics.createLinearGradient(b.x1, b.y1, b.x2, b.y2));
        if (null != b) {
            for (var h = 12, a = -1, f = 0; f < g; f++)c = this.UBaseNto10(h, 4), h += 4, d = this.UBaseNto10(h, 2), h += 2, e = this.UBaseNto10(h, 2), h += 2, e != a && b.addColorStop(e / 255, this.GetColor(c, d)), a = e;
            this.m_oGraphics.StartGradientFill(b);
        }
        return h;
    },
    SetGradientLineStyle: function() {
        var a = this.UBaseNto10(0, 2),
            b = this.UBaseNto10(2, 1),
            c = this.UBaseNto10(3, 1),
            d = this.BaseNto10(4, 2),
            e = this.BaseNto10(6, 2),
            f = this.BaseNto10(8, 2),
            g = this.BaseNto10(10, 2),
            h = 360 * this.UBaseNto10(12, 2) / 4095,
            j = this.UBaseNto10(14, 1),
            k = "round",
            l = "round";
        b & this.LINE_CAP_FLAT ? k = "butt" : b & this.LINE_CAP_ROUND ? k = "round" : b & this.LINE_CAP_SQUARE && (k = "square");
        b & this.LINE_JOIN_BEVEL ? l = "bevel" : b & this.LINE_JOIN_MITER ? l = "miter" : b & this.LINE_JOIN_ROUND && (l = "round");
        b = 15;
        2 == c ? (c = f, g < f && (c = g), d = this.m_oGraphics.createRadialGradient(d + f / 2, e + g / 2, 0, d + f / 2, e + g / 2, c / 2)) : (d = this.GetGradientLine(d, e, f, g, h), d = this.m_oGraphics.createLinearGradient(d.x1,
            d.y1, d.x2, d.y2));
        if (null != d) {
            for (c = 0; c < j; c++)e = this.UBaseNto10(b, 4), b += 4, f = this.UBaseNto10(b, 2), b += 2, g = this.UBaseNto10(b, 2), b += 2, d.addColorStop(g / 255, this.GetColor(e, f));
            this.m_oGraphics.SetGradientLineStyle(a, d, l, k);
        }
        return b;
    },
    SetLineStyle: function() {
        var a = this.UBaseNto10(0, 2), b = this.UBaseNto10(2, 4), c = this.UBaseNto10(6, 2), d = this.UBaseNto10(8, 1), e = "round", f = "round";
        0 == a && (a = 1.0E-4);
        this.m_nLineWidth = a;
        d & this.LINE_CAP_FLAT ? e = "butt" : d & this.LINE_CAP_ROUND ? e = "round" : d & this.LINE_CAP_SQUARE && (e = "square");
        d & this.LINE_JOIN_BEVEL ? f = "bevel" : d & this.LINE_JOIN_MITER ? f = "miter" : d & this.LINE_JOIN_ROUND && (f = "round");
        this.m_oGraphics.SetLineStyle(a, b, c, f, e);
        return 9;
    },
    AdjustShadowBounds: function(a) {
        var b = this.FBaseNto10(0, 4), c = this.FBaseNto10(4, 4) - this.m_nRotation, d = this.UBaseNto10(14, 2);
        this.UBaseNto10(16, 2);
        var e = this.FBaseNto10(22, 4),
            f = this.rectShape.GetWidth(),
            d = d + (f * e - f) / 2,
            e = { x: 0, y: 0 },
            f = b * Math.cos(c * this.DEGREE_MULTIPLIER),
            c = b * Math.sin(c * this.DEGREE_MULTIPLIER),
            b = Math.floor(a.left + f - d),
            f = Math.ceil(a.right +
                f + d),
            g = Math.floor(a.top + c - d),
            d = Math.ceil(a.bottom + c + d);
        if (b < a.left)a.left = b, e.x = -b;
        if (g < a.top)a.top = g, e.y = -g;
        if (f > a.right)a.right = f;
        if (d > a.bottom)a.bottom = d;
        return e;
    },
    DrawGlobalShadow: function() {
        if (null == this.m_arrShadows)this.m_arrShadows = [];
        var a = this.FBaseNto10(0, 4), b = this.FBaseNto10(4, 4) - this.m_nRotation, c = this.UBaseNto10(8, 4), d = this.UBaseNto10(12, 2), e = this.UBaseNto10(14, 2);
        this.UBaseNto10(16, 2);
        var f = this.UBaseNto10(18, 2),
            g = this.UBaseNto10(20, 1),
            h = "1" == this.m_strPath.substr(this.m_nPos + 21, 1),
            j = this.FBaseNto10(22, 4),
            k = a * Math.cos(b * this.DEGREE_MULTIPLIER),
            a = a * Math.sin(b * this.DEGREE_MULTIPLIER),
            b = {};
        b.nXOffset = k;
        b.nYOffset = a;
        b.nBlurX = e;
        b.nColor = c;
        b.nAlpha = d;
        b.nScale = j;
        b.nStrength = f;
        b.nQuality = g;
        b.bInner = h;
        this.m_arrShadows.push(b);
        return 26;
    },
    DrawShadow: function() {
        var a = this.FBaseNto10(0, 4), b = this.FBaseNto10(4, 4) - this.m_nRotation, c = this.UBaseNto10(8, 4), d = this.UBaseNto10(12, 2), e = this.UBaseNto10(14, 2);
        this.UBaseNto10(16, 2);
        var f = this.UBaseNto10(18, 2),
            g = this.UBaseNto10(20, 1),
            h = "1" == this.m_strPath.substr(this.m_nPos +
                21, 1),
            j = this.FBaseNto10(22, 4),
            k = a * Math.cos(b * this.DEGREE_MULTIPLIER),
            a = a * Math.sin(b * this.DEGREE_MULTIPLIER);
        this.m_oGraphics.AddShadow(k, a, e, c, d, j, f, g, h);
        return 26;
    },
    StoreRotationData: function() {
        this.m_nRotationDistance = this.BaseNto10(0, 2);
        this.rectRotated = new ppRect(this.BaseNto10(2, 2), this.BaseNto10(4, 2), this.BaseNto10(6, 2), this.BaseNto10(8, 2));
        this.polyRotated = [
            { x: this.BaseNto10(10, 2), y: this.BaseNto10(12, 2) }, { x: this.BaseNto10(14, 2), y: this.BaseNto10(16, 2) }, {
                x: this.BaseNto10(18, 2),
                y: this.BaseNto10(20,
                    2)
            }, { x: this.BaseNto10(22, 2), y: this.BaseNto10(24, 2) }
        ];
        if (0 == this.rectRotated.left && 0 == this.rectRotated.right && 0 == this.rectRotated.top && 0 == this.rectRotated.bottom)this.rectRotated = this.rectShape.Clone(), this.polyRotated = [{ x: this.rectShape.left - 10, y: this.rectShape.top - 10 }, { x: this.rectShape.right + 10, y: this.rectShape.top - 10 }, { x: this.rectShape.right + 10, y: this.rectShape.bottom + 10 }, { x: this.rectShape.left - 10, y: this.rectShape.bottom + 10 }];
        return 26;
    },
    AdjustReflectionBounds: function(a, b, c, d, e, f, g, h) {
        var j = this.UBaseNto10(0,
            2);
        if (0 < this.UBaseNto10(10, 2) / 100) {
            var k = 0, l = 0, m = c.bottom;
            0 != e && (k = (h + j / 2) / Math.sin(e * this.DEGREE_MULTIPLIER), l = k * Math.cos(2 * e * this.DEGREE_MULTIPLIER), m = k * Math.sin(2 * e * this.DEGREE_MULTIPLIER));
            h = c.left + Math.sin(2 * e * this.DEGREE_MULTIPLIER) * c.left;
            c = c.top + Math.cos(2 * e * this.DEGREE_MULTIPLIER) * c.left;
            f = f + k - l - (f - d.left) - h;
            g = g + m - (g - d.top) - c;
            m = d.GetWidth() - h;
            l = d.GetHeight() - c;
            d = Math.floor(f);
            k = Math.floor(g);
            m = Math.ceil(f + m);
            g = Math.ceil(g + l);
            if (a.left > d)b.x = -d, a.left = d;
            if (a.top > k)b.y = -k, a.top = k;
            if (a.bottom <
                g)a.bottom = g;
            if (a.right < m)a.right = m;
        }
    },
    DrawReflection: function(a, b, c, d, e, f, g, h, j, k) {
        var l = this.UBaseNto10(0, 2), m = [this.UBaseNto10(2, 2), this.UBaseNto10(4, 2)], n = [this.UBaseNto10(6, 2) / 100, this.UBaseNto10(8, 2) / 100], p = this.UBaseNto10(10, 2) / 100;
        if (0 < p) {
            var u = document.createElement("canvas");
            u.style.border = "red 1px dashed";
            u.width = e.GetWidth();
            u.height = e.GetHeight();
            var o = u.getContext("2d");
            o.save();
            o.translate(h - e.left, c.GetHeight() - (j - c.top) - (c.bottom - e.bottom));
            o.scale(1, -1);
            o.rotate(2 * g * this.DEGREE_MULTIPLIER);
            o.translate(-(h - c.left), -(j - c.top));
            o.drawImage(b, d.x, d.y, b.width - d.x, b.height - d.y, 0, 0, b.width - d.x, b.height - d.y);
            o.restore();
            Math.sqrt((f[3].x - f[0].x) * (f[3].x - f[0].x) + (f[3].y - f[0].y) * (f[3].y - f[0].y));
            b = o.createLinearGradient(f[0].x, f[0].y, f[3].x, f[3].y);
            o.save();
            b.addColorStop(m[0] / 255, "rgba(255, 255, 255, " + (1 - n[0]) + ")");
            b.addColorStop(m[1] / 255 * p, "rgba(255, 255, 255, " + (1 - n[1]) + ")");
            b.addColorStop(m[1] / 255 * p + 1.0E-4, "rgba(255, 255, 255, 100)");
            o.fillStyle = b;
            o.globalCompositeOperation = "destination-out";
            o.moveTo(f[0].x, f[0].y);
            o.lineTo(f[1].x, f[1].y);
            o.lineTo(f[2].x, f[2].y);
            o.lineTo(f[3].x, f[3].y);
            o.lineTo(f[0].x, f[0].y);
            o.fill();
            m = f = 0;
            n = this.rectShape.bottom + l;
            0 != g && (f = (k + l / 2) / Math.sin(g * this.DEGREE_MULTIPLIER), m = f * Math.cos(2 * g * this.DEGREE_MULTIPLIER), n = f * Math.sin(2 * g * this.DEGREE_MULTIPLIER));
            a.drawImage(u, 0, 0, u.width, u.height, f + d.x + h - c.left - m - (h + c.left - e.left) + c.left, d.y + j - c.top + n - (c.GetHeight() - j - (c.bottom - e.bottom)), u.width, u.height);
            u.width = 1;
            u.height = 1;
        }
        return 12;
    },
    StartSlideBgFill: function() {
        var a =
            this.item.slide;
        if (this.item.layer)a = this.item.layer;
        if (this.item.matrix && a && a.background) {
            var b = this.item.matrix.unTransformPoint(0, 0), c = document.createElement("canvas");
            c.width = this.item.slide.width;
            c.height = this.item.slide.height;
            var d = c.getContext("2d");
            d.translate(b.x, b.y);
            a.background.drawCanvas(d, this.item.slide, !0, !1);
            this.m_oGraphics.StartImageFill(this.m_oGraphics.createPattern(c, "no-repeat"));
        }
    },
    StartBitmapFill: function(a, b, c) {
        var d = this.m_strPath.substr(this.m_nPos, 2);
        this.BaseNto10(2,
            2);
        this.BaseNto10(4, 2);
        var e = this.BaseNto10(6, 2), f = this.BaseNto10(8, 2), a = this.BaseNto10(10, 2), b = this.BaseNto10(12, 2), g = this.FBaseNto10(14, 4), h = this.FBaseNto10(18, 4), j = 360 * this.UBaseNto10(22, 2) / 4095;
        this.UBaseNto10(24, 2);
        var k = c.GetImage(d), c = k.imgNode, d = document.createElement("canvas");
        d.width = e;
        d.height = f;
        e = d.getContext("2d");
        g = k.nWidth * g / c.naturalWidth;
        h = k.nHeight * h / c.naturalHeight;
        f = c.naturalWidth * g / 2;
        k = c.naturalHeight * h / 2;
        e.translate(f + a, k + b);
        e.rotate(j * this.DEGREE_MULTIPLIER);
        e.translate(-f,
            -k);
        e.scale(g, h);
        e.drawImage(c, 0, 0);
        this.m_oGraphics.StartImageFill(this.m_oGraphics.createPattern(d, "no-repeat"));
        d.width = 1;
        d.height = 1;
        return 26;
    },
    StartBitmapTileFill: function(a, b, c) {
        var d = this.m_strPath.substr(this.m_nPos, 2), a = this.BaseNto10(2, 2) + a, b = this.BaseNto10(4, 2) + b, e = this.FBaseNto10(6, 4), f = this.FBaseNto10(10, 4), g = 360 * this.UBaseNto10(14, 2) / 4095;
        this.UBaseNto10(16, 2);
        var h = this.UBaseNto10(18, 1), j = c.GetImage(d), c = j.imgNode, k, d = j.nWidth * e / c.naturalWidth, f = j.nHeight * f / c.naturalHeight;
        switch (h) {
        case 0:
            k =
                document.createElement("canvas");
            k.width = c.naturalWidth;
            k.height = c.naturalHeight;
            h = k.getContext("2d");
            h.drawImage(c, 0, 0);
            break;
        case 1:
            k = document.createElement("canvas");
            k.width = 2 * c.naturalWidth;
            k.height = c.naturalHeight;
            h = k.getContext("2d");
            h.drawImage(c, 0, 0);
            h.save();
            h.translate(c.naturalWidth, 0);
            h.scale(-1, 1);
            h.drawImage(c, -c.naturalWidth, 0);
            h.restore();
            break;
        case 2:
            k = document.createElement("canvas");
            k.width = c.naturalWidth;
            k.height = 2 * c.naturalHeight;
            h = k.getContext("2d");
            h.drawImage(c, 0, 0);
            h.save();
            h.translate(0, c.naturalHeight);
            h.scale(1, -1);
            h.drawImage(c, 0, -c.naturalHeight);
            h.restore();
            break;
        case 4:
            k = document.createElement("canvas"), k.width = 2 * c.naturalWidth, k.height = 2 * c.naturalHeight, h = k.getContext("2d"), h.drawImage(c, 0, 0), h.save(), h.translate(0, c.naturalHeight), h.scale(1, -1), h.drawImage(c, 0, -c.naturalHeight), h.restore(), h.save(), h.translate(c.naturalWidth, 0), h.scale(-1, 1), h.drawImage(c, -c.naturalWidth, 0), h.restore(), h.save(), h.translate(c.naturalWidth, c.naturalHeight), h.scale(-1, -1), h.drawImage(c,
                -c.naturalWidth, -c.naturalHeight), h.restore();
        }
        this.m_oGraphics.StartRotatedImageFill(this.m_oGraphics.createPattern(k, "repeat"), g * this.DEGREE_MULTIPLIER, a, b, d, f);
        k.width = 1;
        k.height = 1;
        return 19;
    },
    AddImage: function(a, b, c) {
        var d = this.m_strPath.substr(this.m_nPos, 2), a = this.FBaseNto10(2, 4) + a, b = this.FBaseNto10(6, 4) + b, e = this.FBaseNto10(10, 4), f = this.FBaseNto10(14, 4), g = this.UBaseNto10(18, 2) / 100;
        ppDebug.debug_trace(d + ": " + a + ", " + b + " :: " + e + ", " + f + " :: Alpha = " + g);
        c = c.GetImage(d);
        d = c.imgNode;
        e = Math.round(1E3 *
        (c.nWidth * e / d.naturalWidth)) / 1E3;
        f = Math.round(1E3 * (c.nHeight * f / d.naturalHeight)) / 1E3;
        this.m_oGraphics.AddImage(d, a + c.nDX, b + c.nDY, e, f, g);
        return 20;
    },
    StartSolidFill: function() {
        var a = this.UBaseNto10(0, 4), b = this.UBaseNto10(4, 2);
        this.m_oGraphics.StartSolidFill(a, b);
        return 6;
    },
    AddText: function(a, b, c, d, e) {
        var f = this.m_strPath.substr(this.m_nPos, 2), g = this.BaseNto10(2, 2), h = this.BaseNto10(4, 2), j = this.FBaseNto10(6, 4);
        this.m_strPath.substr(this.m_nPos + 10, 1);
        var k = c.GetPathById(f, e), l = this.m_nPos, m = this.m_strPath;
        this.m_nPos = 0;
        this.m_strPath = k;
        this.m_oGraphics.stroke();
        this.m_oGraphics.fill();
        this.m_listTextOffsets[f] = { id: f, x: g + a, y: h + b };
        this.item.textOffset = { x: 0, y: 0 };
        if (0 != j) {
            this.m_oGraphics.m_oStrokeContext.save();
            this.m_oGraphics.m_oFillContext.save();
            f = this.item.getAABB_simple(j, !0);
            if (0 > f.top || 0 > f.left || f.right > this.m_oGraphics.m_oFillCanvas.width || f.bottom > this.m_oGraphics.m_oFillCanvas.height)
                f.bottom += Math.max(f.bottom - this.m_oGraphics.m_oFillCanvas.height, 0), f.right += Math.max(f.right - this.m_oGraphics.m_oFillCanvas.width,
                    0), this.item.textOffset.x = Math.min(f.left, 0), this.item.textOffset.y = Math.min(f.top, 0), this.item.textOffset.box = f, this.m_oGraphics.ResizeCanvasBox(f), this.m_oGraphics.m_oFillContext.translate(-this.item.textOffset.x, -this.item.textOffset.y), this.m_oGraphics.m_oStrokeContext.translate(-this.item.textOffset.x, -this.item.textOffset.y);
            this.m_oGraphics.m_oFillContext.translate(g, h);
            this.m_oGraphics.m_oFillContext.rotate(j * Math.PI / 180);
            this.m_oGraphics.m_oFillContext.translate(-g, -h);
            this.m_oGraphics.m_oStrokeContext.translate(g,
                h);
            this.m_oGraphics.m_oStrokeContext.rotate(j * Math.PI / 180);
            this.m_oGraphics.m_oStrokeContext.translate(-g, -h);
        }
        this.DrawPath(k, g + a, h + b, c, d, e);
        0 != j && (this.m_oGraphics.m_oFillContext.restore(), this.m_oGraphics.m_oStrokeContext.restore());
        this.m_nPos = l;
        this.m_strPath = m;
        return 11;
    },
    DrawPolygon: function(a, b) {
        var c = this.UBaseNto10(0, 2), d = this.FBaseNto10(2, 4) + a, e = this.FBaseNto10(6, 4) + b, f = d, g = e;
        this.m_oGraphics.moveTo(f, g);
        for (var h = 10, j = 1; j < c; j++)
            d = this.FBaseNto10(h, 4) + a, h += 4, e = this.FBaseNto10(h, 4) + b, h += 4,
                this.m_oGraphics.lineTo(d, e);
        this.m_oGraphics.lineTo(f, g);
        return h;
    },
    DrawLine: function(a, b) {
        var c = this.FBaseNto10(0, 4) + a, d = this.FBaseNto10(4, 4) + b, e = this.FBaseNto10(8, 4) + a, f = this.FBaseNto10(12, 4) + b;
        this.m_bPathStarted ? this.m_oGraphics.lineTo(c, d) : (this.m_bPathStarted = !0, this.m_oGraphics.moveTo(c, d), this.m_nStartX = c, this.m_nStartY = d);
        this.m_oGraphics.lineTo(e, f);
        this.m_nCurX = e;
        this.m_nCurY = f;
        return 16;
    },
    DrawLines: function(a, b) {
        var c = this.UBaseNto10(0, 2),
            d = this.FBaseNto10(2, 4) + a,
            e = this.FBaseNto10(6, 4) +
                b;
        this.m_bPathStarted ? this.m_oGraphics.lineTo(d, e) : (this.m_bPathStarted = !0, this.m_oGraphics.moveTo(d, e), this.m_nStartX = d, this.m_nStartY = e);
        for (var f = 10, g = 1; g < c; g++)d = this.FBaseNto10(f, 4) + a, f += 4, e = this.FBaseNto10(f, 4) + b, f += 4, this.m_oGraphics.lineTo(d, e);
        this.m_nCurX = d;
        this.m_nCurY = e;
        return f;
    },
    DrawCurve: function(a, b) {
        var c = (this.UBaseNto10(0, 2) - 1) / 3, d = this.FBaseNto10(2, 4) + a, e = this.FBaseNto10(6, 4) + b, f, g, h, j, k, l, m = 0;
        if (this.m_bReverseCurve) {
            for (var n = this.m_nCurX, p = this.m_nCurY, u = !1, o = [], r = 10, m = 0; m < c; m++)
                f =
                {}, f.nControlAX = this.FBaseNto10(r, 4) + a, r += 4, f.nControlAY = this.FBaseNto10(r, 4) + b, r += 4, f.nControlBX = this.FBaseNto10(r, 4) + a, r += 4, f.nControlBY = this.FBaseNto10(r, 4) + b, r += 4, f.nX = this.FBaseNto10(r, 4) + a, r += 4, f.nY = this.FBaseNto10(r, 4) + b, r += 4, o.push(f);
            this.m_bPathStarted ? (this.m_oGraphics.moveTo(f.nX, f.nY), u = !0) : (this.m_bPathStarted = !0, this.m_oGraphics.moveTo(f.nX, f.nY), this.m_nStartX = f.nX, this.m_nStartY = f.nY);
            this.m_nCurX = f.nX;
            this.m_nCurY = f.nY;
            for (m = o.length - 1; 0 <= m; m--)
                f = o[m].nControlAX, g = o[m].nControlAY,
                    h = o[m].nControlBX, j = o[m].nControlBY, 0 != m ? (k = o[m - 1].nX, l = o[m - 1].nY) : (k = d, l = e), this.m_oGraphics.bezierCurveTo(h, j, f, g, k, l);
            u && this.m_oGraphics.lineTo(n, p);
            this.m_oGraphics.moveTo(this.m_nCurX, this.m_nCurY);
        } else {
            this.m_bPathStarted ? this.m_oGraphics.lineTo(d, e) : (this.m_bPathStarted = !0, this.m_oGraphics.moveTo(d, e), this.m_nStartX = d, this.m_nStartY = e);
            this.m_nCurX = d;
            this.m_nCurY = e;
            r = 10;
            for (m = 0; m < c; m++)
                f = this.FBaseNto10(r, 4) + a, r += 4, g = this.FBaseNto10(r, 4) + b, r += 4, h = this.FBaseNto10(r, 4) + a, r += 4, j = this.FBaseNto10(r,
                    4) + b, r += 4, k = this.FBaseNto10(r, 4) + a, r += 4, l = this.FBaseNto10(r, 4) + b, r += 4, this.m_oGraphics.bezierCurveTo(f, g, h, j, k, l), this.m_nCurX = k, this.m_nCurY = l;
        }
        return r;
    },
    DrawRectangle: function(a, b) {
        var c = this.FBaseNto10(0, 4) + a, d = this.FBaseNto10(4, 4) + b, e = this.FBaseNto10(8, 4), f = this.FBaseNto10(12, 4);
        if (!this.m_oGraphics.m_bFillStarted && !this.m_oGraphics.m_bStrokeStarted)this.m_oGraphics.m_bFillStarted = !0, this.m_oGraphics.m_oFillContext.beginPath(), this.m_oGraphics.m_oFillContext.fillStyle = "rgba(0,0,0,0.004)";
        this.m_oGraphics.moveTo(c,
            d);
        this.m_oGraphics.lineTo(c + e, d);
        this.m_oGraphics.lineTo(c + e, d + f);
        this.m_oGraphics.lineTo(c, d + f);
        this.m_oGraphics.lineTo(c, d);
        return 16;
    },
    DrawVectorText: function(a, b) {
        a -= ppArt.item.originalXOffset;
        b -= ppArt.item.originalYOffset;
        if (this.m_bPathStarted || this.m_bShapeStarted)this.m_oGraphics.fill(), this.m_oGraphics.stroke(), this.m_bShapeStarted = this.m_bPathStarted = !1;
        for (var c = 0,
            d = this.m_strPath.substr(this.m_nPos, 2),
            c = c + 2,
            e = this.FBaseNto10(c, 4),
            c = c + 4,
            f = this.UBaseNto10(c, 4),
            c = c + 4,
            g = this.UBaseNto10(c,
                1),
            c = c + 1,
            h = this.UBaseNto10(c, 2),
            c = c + 2,
            j = [],
            k = null,
            l = 0; l < h; l++)k = {}, k.CharCount = this.UBaseNto10(c, 2), c += 2, k.XPos = this.FBaseNto10(c, 4), c += 4, k.YPos = this.FBaseNto10(c, 4), c += 4, j.push(k);
        for (var m, n = 0, p = 0, u = 0, o = 0, l = 0; l < j.length; l++) {
            k = j[l];
            h = k.XPos + a + this.m_oGraphics.m_nXOffset - 0.5;
            m = k.YPos + b + this.m_oGraphics.m_nYOffset - 0.5;
            for (var r = 0; r < k.CharCount; r++) {
                n = this.FBaseNto10(c, 4);
                c += 4;
                p = this.UBaseNto10(c, g);
                c += g;
                this.m_oGraphics.beginPath();
                this.m_oGraphics.SetLineStyle(1, 16711680, 100, "round");
                if ("" != d) {
                    var z =
                        g_listFonts[d];
                    this.m_oGraphics.StartSolidFill(f, 255);
                    z.DrawGlyph(p, this.m_oGraphics.m_oFillContext, h, m, e);
                    this.m_oGraphics.fill();
                } else ppDebug.debug_trace("Could not find the font with id: " + d);
                h += n;
            }
            h > u && (u = h);
            m > o && (o = m);
        }
        this.m_oGraphics.beginPath();
        return c;
    },
    DrawEllipse: function(a, b) {
        var c = this.FBaseNto10(0, 4) + a, d = this.FBaseNto10(4, 4) + b, e = this.FBaseNto10(8, 4), f = this.FBaseNto10(12, 4), g = 0.5522848 * (e / 2), h = 0.5522848 * (f / 2), j = c + e, k = d + f, e = c + e / 2, f = d + f / 2;
        this.m_oGraphics.moveTo(c, f);
        this.m_oGraphics.bezierCurveTo(c,
            f - h, e - g, d, e, d);
        this.m_oGraphics.bezierCurveTo(e + g, d, j, f - h, j, f);
        this.m_oGraphics.bezierCurveTo(j, f + h, e + g, k, e, k);
        this.m_oGraphics.bezierCurveTo(e - g, k, c, f + h, c, f);
        return 16;
    }
};
var g_listFonts = {};

function AddFont(a, b) {
    var c = document.getElementsByTagName("head")[0], d = document.createElement("script");
    d.type = "text/javascript";
    $(d).load(function() { b(a); });
    d.src = a;
    c.appendChild(d);
}

function RegisterFonts(a) {
    "string" == typeof a && (a = a.replace(/[\u000a\u000b\u000c\u000d\u0085\u2028\u2029]/g, ""), a = a.replace(/&#x[0-8bcef];/ig, ""));
    var b = null;
    window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml");
    for (var a = b.getElementsByTagName("font"), b = null, c = 0; c < a.length; c++)b = new ppFont(a[c]), g_listFonts[b.Id] = b;
}

function ppFont(a) {
    this.m_xmlData = null;
    this.m_listGlyphs = {};
    this.m_bFontReady = !1;
    this.CMD_LINE = "%";
    this.CMD_MOVE = "^";
    this.CMD_CURVE = "#";
    this.CMD_LINE_E = "!";
    this.CMD_MOVE_E = "(";
    this.CMD_CURVE_E = ")";
    this.BASE_NUMBER = 64;
    this.BASE_POW = 6;
    this.m_o64to10 = {
        v0: 0,
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8,
        v9: 9,
        va: 10,
        vb: 11,
        vc: 12,
        vd: 13,
        ve: 14,
        vf: 15,
        vg: 16,
        vh: 17,
        vi: 18,
        vj: 19,
        vk: 20,
        vl: 21,
        vm: 22,
        vn: 23,
        vo: 24,
        vp: 25,
        vq: 26,
        vr: 27,
        vs: 28,
        vt: 29,
        vu: 30,
        vv: 31,
        vw: 32,
        vx: 33,
        vy: 34,
        vz: 35,
        vA: 36,
        vB: 37,
        vC: 38,
        vD: 39,
        vE: 40,
        vF: 41,
        vG: 42,
        vH: 43,
        vI: 44,
        vJ: 45,
        vK: 46,
        vL: 47,
        vM: 48,
        vN: 49,
        vO: 50,
        vP: 51,
        vQ: 52,
        vR: 53,
        vS: 54,
        vT: 55,
        vU: 56,
        vV: 57,
        vW: 58,
        vX: 59,
        vY: 60,
        vZ: 61,
        v_: 62,
        v$: 63
    };
    this.Name = this.GetAttrStr(a, "name");
    this.Id = this.GetAttrStr(a, "id");
    this.m_xmlData = (function(o) {
        var a = [];
        for (var i = o.length >>> 0; i--;) {
            a[i] = o[i];
        }
        return a;
    })(a.getElementsByTagName("g"));
    this.m_bFontReady = !0;
}

ppFont.prototype.LoadFontXML = function() {
    var a;
    window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("MSXML2.XMLHTTP"));
    a.oOwner = this;
    this.m_xmlRequest = a;
    a.onreadystatechange = function() { 4 == a.readyState && this.oOwner.OnReady(a.responseXML); };
    a.open("GET", this.m_strFileName, !0);
    a.send(null);
};
ppFont.prototype.GetGlyphData = function(a) {
    var b = "";
    null != this.m_xmlData[a] ? b = this.GetAttrStr(this.m_xmlData[a], "p") : ppDebug.debug_error("Glyph index out of range");
    return b;
};
ppFont.prototype.GetAttrStr = function(a, b) { return a.attributes.getNamedItem(b).value; };
ppFont.prototype.DrawGlyph = function(a, b, c, d, e) {
    var f = this.m_listGlyphs[a];
    null == f && (this.CreateGlyphData(a), f = this.m_listGlyphs[a]);
    for (var g = f.length, h = 0; h < g; h++)
        switch (a = f[h], a.cmd) {
        case 0:
            b.quadraticCurveTo(e * a.x1 + c, e * a.y1 + d, e * a.x2 + c, e * a.y2 + d);
            break;
        case 1:
            b.lineTo(e * a.x1 + c, e * a.y1 + d);
            break;
        case 2:
            b.moveTo(e * a.x1 + c, e * a.y1 + d);
        }
};
ppFont.prototype.CreateGlyphData = function(a) {
    this.m_strPath = this.GetGlyphData(a);
    this.m_nPos = 0;
    var b = this.m_strPath.charAt(this.m_nPos);
    this.m_nPos++;
    var c = "", d = [];
    for (this.m_listGlyphs[a] = d; this.m_nPos < this.m_strPath.length;)
        switch (c = this.m_strPath.charAt(this.m_nPos), this.m_nPos++, c) {
        case this.CMD_CURVE:
            d.push(new ppGlyphCmd(0, this.BaseNto10(0, 2), this.BaseNto10(2, 2), this.BaseNto10(4, 2), this.BaseNto10(6, 2)));
            this.m_nPos += 8;
            break;
        case this.CMD_LINE:
            d.push(new ppGlyphCmd(1, this.BaseNto10(0, 2), this.BaseNto10(2,
                2)));
            this.m_nPos += 4;
            break;
        case this.CMD_MOVE:
            d.push(new ppGlyphCmd(2, this.BaseNto10(0, 2), this.BaseNto10(2, 2)));
            this.m_nPos += 4;
            break;
        case this.CMD_CURVE_E:
            d.push(new ppGlyphCmd(0, this.BaseNto10(0, 3), this.BaseNto10(3, 3), this.BaseNto10(6, 3), this.BaseNto10(9, 3)));
            this.m_nPos += 12;
            break;
        case this.CMD_LINE_E:
            d.push(new ppGlyphCmd(1, this.BaseNto10(0, 3), this.BaseNto10(3, 3), 0, 0));
            this.m_nPos += 6;
            break;
        case this.CMD_MOVE_E:
            d.push(new ppGlyphCmd(2, this.BaseNto10(0, 3), this.BaseNto10(3, 3), 0, 0));
            this.m_nPos += 6;
            break;
        default:
            this.m_nPos--, b == this.CMD_CURVE ? (d.push(new ppGlyphCmd(0, this.BaseNto10(0, 2), this.BaseNto10(2, 2), this.BaseNto10(4, 2), this.BaseNto10(6, 2))), this.m_nPos += 8) : (d.push(new ppGlyphCmd(1, this.BaseNto10(0, 2), this.BaseNto10(2, 2))), this.m_nPos += 4);
        }
};
ppFont.prototype.UBaseNto10 = function(a, b) {
    for (var c = 0, d = "", e = 0, f = a; f < a + b; f++)d = "v" + this.m_strPath.charAt(this.m_nPos + f), c += parseInt(this.m_o64to10[d]) << this.BASE_POW * e, e++;
    return c;
};
ppFont.prototype.BaseNto10 = function(a, b) {
    var c = 2047;
    3 == b && (c = 131071);
    return this.UBaseNto10(a, b) - c;
};

function ppFontLib(a, b) {
    this.m_strFontUrl = b;
    null == a && (a = "");
    this.m_strBasePath = a;
}

ppFontLib.prototype.CreateFonts = function(a) { null != this.m_strFontUrl && 0 < this.m_strFontUrl.length ? AddFont(this.m_strBasePath + this.m_strFontUrl, a) : a(); };

function ppGlyphCmd(a, b, c, d, e) {
    this.cmd = a;
    this.x1 = b;
    this.y1 = c;
    this.x2 = d;
    this.y2 = e;
}

function ppTextLib(a) {
    this.m_bHasXML = !1;
    if (null != a)
        try {
            this.m_xmlData = a.getElementsByTagName("textdata"), this.m_bHasXML = !0;
        } catch (b) {
            this.m_bHasXML = !1;
        }
    else ppDebug.debug_trace("Text data is null");
}

ppTextLib.prototype.GetPathById = function(a, b) {
    var c = "", d = "";
    if (this.m_bHasXML)
        try {
            for (var e = 0; e < this.m_xmlData.length; e++)
                if (c = this.m_xmlData[e].attributes.getNamedItem("id").value, c == a) {
                    c = !1;
                    if (null != b)
                        for (var f = this.m_xmlData[e].getElementsByTagName("link"), g = 0; g < f.length; g++)
                            if (strCurLinkId = f[g].attributes.getNamedItem("id").value, strCurLinkId == b) {
                                var c = !0, h = f[g].getElementsByTagName("pr");
                                f[g].getElementsByTagName("path");
                                d = 0 < h.length ? PathLib.getPathFromXML(h[0]) : f[g].getElementsByTagName("path")[0].firstChild.nodeValue;
                                break;
                            }
                    c || (h = this.m_xmlData[e].getElementsByTagName("pr"), this.m_xmlData[e].getElementsByTagName("path"), d = 0 < h.length ? PathLib.getPathFromXML(h[0]) : this.m_xmlData[e].getElementsByTagName("path")[0].firstChild.nodeValue);
                    break;
                }
        } catch (j) {
            ppDebug.debug_trace("Text data is null");
            try {
                d = this.m_xmlData[0].getElementsByTagName("path")[0].firstChild.nodeValue, ppDebug.debug_trace("  fell back on path: " + d);
            } catch (k) {
                d = "";
            }
        }
    return d;
};

function ppImageLib() {
    this.m_listImages = {};
    this.m_nCount = 0;
}

ppImageLib.prototype.AddImage = function(a, b, c, d, e, f, g) {
    var h = {};
    h.Id = a;
    h.strType = b;
    h.imgNode = c;
    h.nWidth = Number(d);
    h.nHeight = Number(e);
    h.nDX = Number(f);
    h.nDY = Number(g);
    this.m_listImages[a] = h;
    this.m_nCount++;
    return h;
};
ppImageLib.prototype.GetImage = function(a) { return this.m_listImages[a]; };
ppImageLib.prototype.Destroy = function() {
    for (var a in this.m_listImages)ppDebug.debug_trace("Destroy: " + this.m_listImages[a].Id), this.m_listImages[a].imgNode = null, this.m_listImages[a] = null;
    this.m_listImages = null;
};
var Frame = function() {
    this.control_layouts = {};
    this.ready = !1;
    this.options = {};
    this.colorGroups = {};
    this.sidebarItems = {};
    this.visibleSidebarItems = {};
    this.hasLinksRight = this.hasLinksLeft = !1;
    this.defaultControlLayout = null;
    this.hasBottomBar = !1;
    this.controlOptions = {};
};
Frame.controlMap = {};
Frame.iconSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAAQCAYAAABqUoGHAAAI0klEQVRoQ+1aV6gUSxCtBf1QEBVEBRUTiAExYvwwJ8woigEDigkxYkAxY0DMghmzoJgwICYMCAbEiAERc0YUERFBoV6dfttNT+/M7MzsvQ/h7fzcuTM9XdVVdapOV2+K8lfeAv8TC6xevZovXbpE3759MysuVaoU9erVi4YPH56Ka4aJEyfy2rVrfb+LPVlc4fnxeQvkaAF2vndjNtt7unv3Lg8dOpTu3bsXqEq9evVo165dVL9+/UiYkPkY4+XKAytHB+c/T2gBBCE+lexOUiEiBa4lKhtwQt9LdWKA5tWrV9SzZ08aNmwYdDDTv3z5knbu3EmXL1+mypUrK/Bl09ECVTxg7dixQykbpTyOGTPGLKxs2bLUqFEjLMAYz35frlw5atKkCXXt2tX3ve23TZs2pfS3uLffffr0iefNm6ceue9sefY7/bxz584o/WZuN1ZsubVq1SIp9xm6wgFwVNDVtm1b6tevX2gAhdn4+/fvPGHCBLp9+zaVKVOGunTpQtOmTVPz+dnk9evXvGTJEmMP0Y2XLl1q1CtdujS1bNmSunXr5mt3UCGxi3l38eJFPnDggPkeNrl//z5v2LBBPYMNT58+Hbh+1ycyUMUIAhp+mzx5chxw5QQsARUDLOJHADtQbqtWrRjgkr8AmccW9kIBwnSl0o/NWFkbL1iwQP2fIQgOF0Cpj+Q+K7jatGmjeKt7gceWLFkyJZdrGDWUmZXsKlWqsF+Q4n2FChX4/fv3JNyYJk2aZHSdOnUqr1q1CkFGGzdu9KxhwIABvH//fiVD3mGMet+pUyc+e/YsHTlyhHr37p0Kk3v48GHu27evR88TJ05wjx49zLOgdWEA5Pfv3z/QiWE2fvDgAdetWzfDntpeWq7+HwMBJFmP0U2yMFetWjVjjtq1a9PDhw//dbzll/bt29O5c+eMvt27d+eTJ0+a7yFLgpOFJlGxYsVo79691KdPn4z59QNbt/QzTwyggqxZs4YkdqIALDGwbDujMomNAuWhssGGiFsn7n3j11p8ygIUxmYCy1YEH4KXCjpDF6+BhSAeNGgQdejQgW7cuEE1atSgJ0+eGGDB2PI/16xZU+m0ePFimjVrlglwZEAJfo8smZPHjRtH5cuXpw8fPph3OijevHlDFStWDASWDeAgYPnJxXcNGzbkO3fuACAAilnHtWvXqFmzZkbm7t27FX9HJZZ1RwkU2FXzc2UL25GtW7dWmXPkyJG0detWNd/58+dZgt8DiKjAwrhHjx5xnTp1lKyghGfP5yYNF1g/f/4065TqzFLhCNVs7NixQev3DU5QM9DDsIAXlRMDS1ehKHGc9oMqKtDr2LFjei1ZgZXWEeMzgeWCKlvp1Ii1gYXqIIHHLVq0MNnTzbASgHzz5s1IwLIzq3b8jx8/uESJEmZ+N23qirVo0SKaM2eOcpzQqlRcYP3584eLFi2qpp8yZQqhQgqVIqlcnuBJAizMme4oGfU1uIS2MYJfqB8tX748I1DjViy30n38+JGEkptEkQ4iunXrFpKJAaFN9woLWFg86CFiTVMo159JgSXrYgGHmc4Bi48YlXTY2n/lDiwXVFEooB+w4IwhQ4bQlStXqHnz5nT16lXjQAQKuC7oGC6XClavXt0stnjx4iScXi1MKh8/ffrUZMS5c+cyQDN+/Hhav359RuBpYG3btk1lfS0rCFhBcvHd/PnzwZmNXj4Uh5ICy86QWgDsDhshGeCCbitXrvTsWeMCC3M8e/ZMzQf6dujQIU/lQwWGrwYOHEj79u1LjRgxgrdv304XLlwg7BW1/WwqWFAVy47ukKqSqGIBJNgvwZ6gnmAB2ZoSaX20vNyBZVMTIBZ7pqhtx6A9lpsptRHBYwGUIkWKKMX99jrYY2hg6cDFdy9evEgJx+dfv36BGoIihgLr69evNH36dFqxYoUCdLY9li0XugkNZnSR9FXQwEIbWKifOVfRwYVqtm7dOiPXpplxgWUH76hRo2jz5s0ZlNKeM+i+sIHlNg0svRMBC99jr5meNxvdVOIKvGJh0qTg0sCS/ZIq640bN/ZsSrWjfv/+rTLm8ePHCcEkvNwDrKC9DnQLcrYdNPrerliSfU3F7Nixoy+wositVq0aPX/+3LdKJq1YQaCy1ySdPp49e7Z6hE6UsAHPnlWPxVwNGjQw1cVuXuhkIPScUZ2kY0ejR4/2zCNMg8+cOUPYs1aqVEl1xiS5esYUJrDSVDCooiQGll98hD3TzM0BedY9VtbmRRJwuXssV3EbFMgIaP3icqlgWIBL0LAEDy1btoxmzpyJDiE6hb4bZRdYkvkZjosLLDkS4FOnTqmNLDbm0qFUer99+xb3OTUvooBK21EDAmufMWOGCXbsUyWJKT0kqan2OiiPzJ3yA5ZUXtUw0baz/SK0j9u1a6feoVuHdUuLv9CBFfFQ9j8Bln3eFbYVchtPyPvaV6HtdvvDkPJs8BMHWPhIzmX4y5cv2L/gTMN0BQcPHuzB5J49e4zCdvsbgz5//ox5IgHLrni4d9vtfnKFjyuKZicAqRYsOhHO6uQcLSdg6W4V5nf3FhLcLN1TdEjp8ePHtGXLFqWHtMlJ2uUpOR/jgwcPqmfYa757905VIVxC80jongdYWB/mAxBxSYeRBEQZlc/uBPq19guyYsU8z0oMLLuFjgSJxOK3z7J/mZE+owzt7iY+II5zUh4XWLIxZqFoJmjDzpNspPk53oPE9D9uxcJjCU4W+qNGRDnH0rJ0R1HL0c/RUJBOoTJ+EioIh6OK4nKPMzQts9cmlQrV2jhbjjQYALEvaXWjsqoxQedYCxcuRKfUt22v2/xNmzal69evZ4wpKGCFBbifP+VZYmBhPpsdoEIioeMcU8sC/ZMDa7XPjdNfyP+kKcBbf/tj/JoCv7qQDmlg9owy5m9YJ4IQB7QI6oiHwrbaOQELE9kdwiB7xOwcqmnS4PL1T2jJ+xucktfhf2+BnIGlwXX06FEFbvuXPqB+6SoWtR0fySF5YEUyU35Q3gLxLPAPX1/vay7xMHUAAAAASUVORK5CYII=";
Frame.prototype.loadFromXML = function(a) {
    var b = this;
    b.xml = a;
    this.defaultLayoutName = $(a).find("bwFrame").attr("default_layout");
    this.textdirection = $(a).find("bwFrame").attr("textdirection");
    this.parseOptionGroups(a);
    this.parseColorSchemes(a);
    this.applyColorSchemes();
    $(a).find("control_layouts").children("control_layout").each(function(a, d) {
        var e = { controls: {} }, f = $(d).attr("name");
        $(d).children("control").each(function(a, b) { e.controls[$(b).attr("name")] = "true" == $(b).attr("enabled"); });
        b.control_layouts[f] =
            e;
        if (!b.defaultControlLayout)b.defaultControlLayout = e;
    });
    Frame.controlMap = {
        previous: $("#control-previous"),
        next: $("#control-next"),
        finish: $("#control-finish"),
        submit: $("#control-submit"),
        submitall: $("#control-submitall"),
        volume: $("#control-volume"),
        seekbar: $("#control-progress, #progressbar"),
        replay: $(".icon.restart"),
        pauseplay: $("#control-pauseplay"),
        resources: $(".tab.resources, .label.resources"),
        glossary: $(".tab.glossary, .label.glossary"),
        transcript: $(".tab.transcript, .label.transcript"),
        outline: $(".tab.outline, .label.outline"),
        search: $(".label.outline")
    };
    player.slideList = new SlideList;
    Frame.navLinks = this.parseNavLinks($(a).children().children("nav_data").children("outline"));
    player.slideList.build(Frame.navLinks, null, null, null, player.slideList.tree);
    player.slideList.build(Frame.navLinks, $("#slide_list_portrait"));
    this.ready = !0;
};
Frame.prototype.parseNavLinks = function(a) {
    var b = this, c = [], d = 0;
    $(a).children("links").children("slidelink, slidedrawref").each(function(a, f) {
        var g = { type: f.tagName, slideid: $(f).attr("slideid"), drawid: $(f).attr("drawid"), displaytext: $(f).attr("displaytext"), expand: "true" == $(f).attr("expand") };
        if ("slidedrawref" == g.type && !g.displaytext)g.displaytext = "Draw from Question Bank " + ++d;
        if (0 < $(f).children("links").length)g.links = b.parseNavLinks(f);
        c.push(g);
        var h = story.parseObjref(g.slideid).target;
        h && h.navLinks &&
            h.navLinks.push(g);
    });
    return c;
};
Frame.prototype.setVisibility = function(a, b) { b || a.hide(); };
Frame.prototype.parseOptionGroups = function(a) {
    var b = this;
    $(a).children().children("control_options").children("optiongroups").children("optiongroup").each(function(a, d) {
        var e = $(d).attr("name");
        b.parseOptions(d, e);
    });
    if (!b.options.title_enabled && !b.options.sidebar_enabled && !b.cant_hide_topbar)b.top_bar_hidden = !0;
    b.top_bar_hidden && $(".top_bar").hide();
    $("#menu_tabs li:first-child span").addClass("active");
    $("#menu_container > ul:first-child, #menu_container > div:first-child").addClass("active");
};
Frame.prototype.parseOptions = function(a, b) {
    var c = this;
    $(a).children("options").children().each(function(a, e) {
        $(e).get(0);
        var f = $(e).attr("name"), g = $(e).attr("value"), h = "true" == g;
        c.options[f] = g;
        if ("true" == g || "false" == g)c.options[f] = h;
        switch (f) {
        case "title_enabled":
            c.setVisibility($("#storytitle"), h);
            break;
        case "title_text":
            story.title = g;
            $("#storytitle").text(g);
            document.title = g;
            break;
        case "logo_enabled":
            h && ($(".landscape_menu").removeClass("no_logo"), $(".logo_background").show());
            break;
        case "logo_url":
            c.logoRef =
                $("<img/>");
            0 < $(e).find("property[name='width']").length ? (c.options.logo_width = parseInt($(e).find("property[name='width']").attr("value")), c.options.logo_height = parseInt($(e).find("property[name='height']").attr("value")), c.logoRef.css("width", c.options.logo_width), c.logoRef.css("height", c.options.logo_height)) : c.logoRef.bind("load", function() {
                c.options.logo_width = c.logoRef.height();
                c.options.logo_height = c.logoRef.height();
                c.updateLayout();
            });
            $(".logo_background").append(c.logoRef);
            c.logoSrc && c.logoRef.attr("src",
                c.logoSrc);
            break;
        case "html5_logo_url":
            c.logoSrc = player.basepath + g;
            c.logoRef && c.logoRef.attr("src", c.logoSrc);
            break;
        case "sidebar_enabled":
            player.forceMenu || (c.setVisibility($("#control-menu"), h), c.setVisibility($("#portrait_menu"), h), c.setVisibility($(".landscape_menu"), h));
            break;
        case "sidebarpos":
            $(".landscape_menu").addClass(g);
            break;
        case "tabs":
            $(e).children("listitems").children("listitem").each(function(a, b) {
                var d = $(b).attr("name"), e = "true" == $(b).attr("value"), f = $(b).attr("group");
                if (e)
                    switch (e =
                        function(a, b, d, e) { c.addTopTab(a, b, d, e); }, "sidebar" == f && (e = function(a, b, d, e) { c.addSideTab(a, b, d, e); }, c.sidebarItems[d] = !0), d) {
                    case "outline":
                        e(f, "Menu", $("#slide_list"), d);
                        break;
                    case "glossary":
                        c.glossaryPanel = new GlossaryPanel;
                        c.glossaryPanel.loadFromXML($(c.xml).find("glossary_data").first());
                        e(f, "Glossary", c.glossaryPanel.ref, d);
                        break;
                    case "resources":
                        c.resourcesPanel = new ResourcesPanel;
                        c.resourcesPanel.loadFromXML($(c.xml).find("resource_data").first());
                        e(f, "Resources", c.resourcesPanel.ref, d);
                        break;
                    case "transcript":
                        c.transcriptPanel = new TranscriptPanel;
                        c.transcriptPanel.loadFromXML($(c.xml).find("transcript_data").first());
                        e(f, "Notes", c.transcriptPanel.ref, d);
                        break;
                    case "customlink":
                        var g = $(b).find("property[name='title']").attr("value"), h = $(b).find("property[name='data']").attr("value");
                        e(f, g, h, d);
                    }
            });
            break;
        case "wraplistitems":
            h && $(".framewrap").addClass("wraplistitems");
            break;
        case "seekbar":
            h || ($(".player_controls").css("display", "none!important"), $("#control-progress").css("display", "none"));
            break;
        case "bottombar_enabled":
            if (c.setVisibility($(".bottom_bar"), h), c.setVisibility($("#controls"), h), h)c.hasBottomBar = !0;
        }
        c.parseOptions(e, b);
    });
};
Frame.prototype.addTopTab = function(a, b, c, d) {
    var e = this;
    if ("customlink" == d)return e.addTopLink(a, b, c);
    e.top_bar_hidden = !1;
    e.cant_hide_topbar = !0;
    var f = $('<div class="toptab"><span class="label ' + d + '">' + b + '</span><div class="menu_container"></div></div>');
    f.children(".menu_container").append(c);
    "linkright" == a ? ($("#toplinks_right").prepend(f), e.hasLinksRight = !0) : ($("#toplinks_left").append(f), e.hasLinksLeft = !0);
    a = player.isMobile ? "touchend" : "click";
    f.children("span").first().bind(a, function(a) {
        if (f.hasClass("active"))f.removeClass("active");
        else if (MouseEvents.processHideables(a), $("#topbar .active").removeClass("active"), f.addClass("active"), !e.registeredTopBar)MouseEvents.addHideable(".toptab.active", ".toptab .menu_container, #frameswitch", function() { $(".toptab.active").removeClass("active"); }), e.registeredTopBar = !0;
        return!1;
    });
};
Frame.prototype.addSideTab = function(a, b, c, d) {
    a = $('<li><span class="left label ' + d + '">' + b + "</span></li>");
    $("#menu_tabs").append(a);
    $("#menu_container").append(c);
    var e = a.children("span").first();
    a.bind("click", function() {
        $("#topbar .active").removeClass("active");
        $("#menu_tabs .active").removeClass("active");
        $("#menu_container .active").removeClass("active");
        e.addClass("active");
        c.addClass("active");
        return!1;
    });
};
Frame.prototype.addTopLink = function(a, b, c) {
    b = $('<div class="toptab customlink"><span class="label ' + name + '">' + b + "</span></div>");
    "linkright" == a ? ($("#toplinks_right").prepend(b), this.hasLinksRight = !0) : ($("#toplinks_left").append(b), this.hasLinksLeft = !0);
    b.children("span").first().bind("click", function() {
        story.handleEvent("onobjectevent", c, null, !1, !1, !0);
        return!1;
    });
};
Frame.prototype.parseColorSchemes = function(a) {
    var b = this;
    $(a).children().children("colorschemes").children("colorscheme").children("color_group").each(function(a, d) {
        var e = $(d).attr("name");
        b.parseColorGroup(d, e);
    });
};
Frame.prototype.parseColorGroup = function(a, b) {
    var c = {};
    $(a).children("group_colors").children("color").each(function(a, b) {
        var f = $(b).attr("name"), g = new Background;
        g.loadFromXML($(b), "fill");
        c[f] = g;
    });
    this.colorGroups[b] = c;
};
Frame.prototype.applyColorSchemes = function() {
    if (!player.noframe && !player.noframecolor && ($.each(story.children, function(a, b) {
        if ("Window" == b.innerType && "LightboxWnd" != b.id && "LightboxControlsWnd" != b.id && b.ref && player.frame.colorGroups.window && player.frame.colorGroups.window.bg)
            try {
                b.ref.css("background-color", player.frame.colorGroups.window.bg.toCssString()), b.ref.css("color", player.frame.colorGroups.window.text.toCssString()), b.ref.find("h1").css("color", player.frame.colorGroups.window.text.toCssString()),
                    b.ref.css("border-color", player.frame.colorGroups.window.divb.toCssString()), b.ref.find("hr").css("border-color", player.frame.colorGroups.window.divb.toCssString());
            } catch (c) {
            }
    }), player.isHTML5)) {
        var a = new CustomStyleSheet,
            b = function(b, c, d) {
                if (player.frame.colorGroups[b] && player.frame.colorGroups[b][c]) {
                    var h = player.frame.colorGroups[b][c].toCssString(), b = player.frame.colorGroups[b][c].toColorString();
                    a.add(d, "background", b);
                    a.add(d, "background", h);
                    a.add(d, "background", h.replace("-webkit", "-moz"));
                    a.add(d, "background", h.replace("-webkit", "-ms"));
                    (player.isIE8 || player.isIE9) && h.indexOf("progid");
                }
            },
            c = function(b, c, d) {
                if (player.frame.colorGroups[b] && player.frame.colorGroups[b][c]) {
                    var h = player.frame.colorGroups[b][c];
                    switch (h.backgroundType) {
                    case "fill":
                        a.add(d, "border-color", h.stops[0].color), 1 < h.stops.length && player.frame.colorGroups[b][c].toCssString();
                    }
                }
            },
            d = function(b, c, d, h, j, k) {
                if (player.frame.colorGroups[b] && player.frame.colorGroups[b][c])
                    switch (b = player.frame.colorGroups[b][c], b.backgroundType) {
                    case "fill":
                        b =
                            b.toColorString(), k && (b = k + b), j && (b += j), a.add(d, h, b);
                    }
            };
        b("base", "bg", "#slidebg");
        b("base", "slide_bg", ".framewrap,.bg");
        b("base", "slide_bg", ".window.LightboxControlsWnd");
        b("base", "menu_shade", ".landscape_menu");
        c("base", "border", ".framewrap");
        c("base", "border", ".landscape_menu");
        d("base", "text", "a,body", "color");
        b("button", "btn_bg", ".controlbar-button");
        c("button", "btn_border", ".controlbar-button");
        d("button", "btn_glow", ".controlbar-button.right", "box-shadow", " 0px 0px 1px 1px");
        player.isIOS || b("button",
            "btn_hover", ".controlbar-button.right:hover");
        b("button", "btn_down", ".controlbar-button.right.pressed");
        b("seekcontrol", "seek_bg", "#progressbar");
        b("seekcontrol", "seek_position", ".progress-bar");
        c("seekcontrol", "seek_border", "#progressbar,.progress-bar");
        b("seekcontrol", "bg", "#control-progress");
        c("seekcontrol", "border", "#control-progress");
        b("volume", "thumb_bg", ".volume-handle");
        b("volume", "slider_bg", ".volume-slider");
        c("volume", "thumb_border", ".volume-handle");
        c("volume", "slider_border", ".volume-slider");
        d("volume", "thumb_inner", ".volume-handle", "-webkit-box-shadow", " 0px 0px 1px 1px", "inset ");
        d("volume", "thumb_inner", ".volume-handle", "-moz-box-shadow", " 0px 0px 1px 1px", "inset ");
        d("volume", "thumb_inner", ".volume-handle", "-ms-box-shadow", " 0px 0px 1px 1px", "inset ");
        d("volume", "thumb_inner", ".volume-handle", "box-shadow", " 0px 0px 1px 1px", "inset ");
        b("menu", "bg", ".menu_container");
        d("listitem", "text", "ul.menu_list a", "color");
        d("listitem", "text", "ul.slidelist li", "color");
        player.isIOS || (b("listitem",
            "hover", "li.has_children.open li>a:hover"), b("listitem", "hover", "ul.slidelist li:hover"));
        b("listitem", "selected", "ul.menu_list li.selected, ul.menu_list li.selected > a, ul.menu_list li.selected > a:hover");
        b("listitem", "selected", "ul.slidelist li.selected, ul.slidelist li.selected > a:hover");
        d("listitem", "lines", "ul.menu_list>li", "border-top-color");
        d("listitem", "lines", "ul.slidelist li.divider", "border-bottom-color");
        d("listitem", "viewed", "ul.menu_list li.visited > a", "color");
        d("listitem", "viewed",
            "ul.slidelist li.visited", "color");
        d("listitem", "selected_text", "ul.menu_list li.selected > a", "color");
        d("listitem", "selected_text", "ul.slidelist li.selected", "color");
        d("listitem", "text", "ul.menu_list li.has_children > span", "border-left-color");
        d("listitem", "text", "ul.menu_list li.has_children.open > span", "border-top-color");
        d("listitem", "text", "ul.slidelist li>span", "border-left-color");
        d("listitem", "text", "ul.slidelist li.open>span", "border-top-color");
        b("tabs", "bg", "ul.menu_nav li span.active, .toptab.active>span");
        d("tabs", "text", "ul.menu_nav li span", "color");
        d("tabs", "selected", "ul.menu_nav li span.active, .toptab.active>span", "color");
        c("window", "divb", ".toptab.active>span,.toptab .menu_container");
        c("window", "divb", ".resources_container hr");
        d("menu", "shadow", ".toptab .menu_container", "-webkit-box-shadow", " 0px 0px 20px");
        d("menu", "shadow", ".toptab .menu_container", "-moz-box-shadow", " 0px 0px 20px");
        d("menu", "shadow", ".toptab .menu_container", "-ms-box-shadow", " 0px 0px 20px");
        d("menu", "shadow", ".toptab .menu_container",
            "box-shadow", " 0px 0px 20px");
        b("glossary", "bg", ".glossary_section");
        b("tabs", "bg", ".glossary_section_header");
        player.isIOS || b("glossary", "hover", ".glossary_section li:hover");
        b("glossary", "selected", ".glossary_section li.active");
        d("glossary", "selected", ".glossary_section li.active", "color");
        d("glossary", "diva", ".glossary_section_header, .glossary_section:first-child", "border-bottom-color");
        d("glossary", "divc", ".glossary_section_header", "border-top-color");
        b("logo", "bg", ".logo_background");
        player.frame.colorGroups.button &&
            player.frame.colorGroups.button.btn_icon_color && (b = player.frame.colorGroups.button.btn_text_shadow.stops[0], c = player.frame.colorGroups.seekcontrol.btn_icon_hover.stops[0], this.prepIconSprite(".controlbar-button .icon", player.frame.colorGroups.button.btn_icon_color.stops[0], b, a), player.isIOS || this.prepIconSprite("#control-progress .icon:hover", c, b, a), d("button", "btn_icon_color", ".controlbar-button .label", "color"), d("button", "btn_text_shadow", ".controlbar-button .label", "text-shadow", "", "0px 1px 1px "));
        a.build();
    }
};
Frame.parseRGB = function(a) {
    a = a.replace("#", "");
    return[parseInt(a.substr(0, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(4, 2), 16)];
};
Frame.prototype.prepIconSprite = function(a, b, c, d) {
    var e = Frame.parseRGB(b.rawcolor), f = Frame.parseRGB(c.rawcolor);
    e.push(b.alpha);
    f.push(c.alpha);
    var g = new Image;
    $(g).bind("load", function() {
        var b = document.createElement("canvas");
        b.width = 230;
        b.height = 16;
        var c = b.getContext("2d");
        c.drawImage(g, 0, 0);
        for (var k = c.getImageData(0, 0, b.width, b.height), l = 0; l < k.data.length - 4; l += 4) {
            var m = k.data[l];
            0 != k.data[l + 3] && (k.data[l] = e[0], k.data[l + 1] = e[1], k.data[l + 2] = e[2], k.data[l + 3] = 255 - m);
        }
        c.clearRect(k, 0, 0, b.width, b.height);
        c.putImageData(k, 0, 0);
        c.shadowColor = "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + f[3] + ")";
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 1;
        c.shadowBlur = 1;
        c.clearRect(k, 0, 0, b.width, b.height);
        c.drawImage(b, 0, 0);
        b = b.toDataURL("image/png");
        d && d.add(a, "background-image", "url(" + b + ")");
        d.build();
    });
    g.src = Frame.iconSrc;
};
Frame.prototype.set_window_control_layout = function(a) {
    Frame.windowControlMap = {
        previous: $(".window.LightboxControlsWnd #control-previous"),
        next: $(".window.LightboxControlsWnd #control-next"),
        submit: $(".window.LightboxControlsWnd #control-submit"),
        volume: $(".window.LightboxControlsWnd #control-volume"),
        seekbar: $(".window.LightboxControlsWnd #control-progress"),
        replay: $(".window.LightboxControlsWnd .icon.restart"),
        pauseplay: $(".window.LightboxControlsWnd #control-pauseplay"),
        resources: $(".label.resources"),
        glossary: $(".label.glossary"),
        transcript: $(".window.LightboxControlsWnd #TODO-resources"),
        outline: $(".window.LightboxControlsWnd #TODO-resources"),
        search: $(".window.LightboxControlsWnd #TODO-resources")
    };
    player.currentWindow && this.set_frame_layout(a, Frame.windowControlMap);
};
Frame.prototype.set_frame_layout = function(a, b) {
    var b = b || Frame.controlMap, c = ProgressBar.getCurrentProgressBar().ref.parent().parent(), d = this, e = $(a).attr("name");
    d.currentLayoutName = e;
    e = d.control_layouts[e];
    if (!e)e = d.control_layouts[d.defaultLayoutName], d.currentLayoutName = d.defaultLayoutName;
    if (!e)e = d.defaultControlLayout;
    if (e) {
        d.updateTextLabels();
        if (this.options.forceseekbar)e.controls.seekbar = !0, e.controls.pauseplay = !0, e.controls.replay = !0;
        var f = 0, g = !1;
        d.visibleSidebarItems = {};
        $.each(e.controls,
            function(a, c) {
                var e = b[a];
                e && (c ? (e.show(), ("previous" == a || "next" == a || "submit" == a) && f++, "volume" == a && (g = !0)) : e.hide());
                c && d.sidebarItems[a] && (d.visibleSidebarItems[a] = !0);
            });
        this.reorient(!0);
        if (player.isHTML5) {
            var h = 30 + 7 * f;
            $.each(["#control-previous", "#control-next", "#control-submit"], function(a, b) {
                var c = $(b);
                "block" == c.css("display") && (h += c.get(0).offsetWidth);
            });
            g && (h += 40);
            e = this.availableWidth - h;
            c.find("#control-progress").css("width", e);
            c.find("#control-progress .progress-container").css("width",
                e - 59);
        }
        c = $(".landscape_menu #menu_tabs > li > span");
        3 == c.length ? (c.css("width", "59px"), c.last().css("width", "60px")) : 3 < c.length && $("ul.menu_nav li span").css("padding", "0px 4px");
        this.updateLayout();
    }
};
Frame.prototype.isSidebarVisible = function() {
    for (key in this.visibleSidebarItems)return!0;
    return!1;
};
Frame.prototype.ensureHasActiveSidebarItem = function() {
    var a = null, b = null, c = !1;
    for (key in this.visibleSidebarItems) {
        var d = Frame.controlMap[key];
        a || (a = d);
        d.hasClass("active") && (b = d);
        c = c || d.hasClass("active");
    }
    a && !c ? a.click() : b && b.click();
};
Frame.prototype.initOrientation = function() { this.updateLayout(); };
Frame.prototype.reorient = function(a) { 1 != player.width && this.updateLayout(a); };
Frame.prototype.updateLayout = function() {
    this.updateFrameLayout();
    this.updatePlayerLayout();
};
Frame.prototype.updatePlayerLayout = function() {
    1 == player.width && player.detectSize();
    $("#loadingSpinner").css("left", Math.floor(window.innerWidth / 2) - 50);
    $("#loadingSpinner").css("top", Math.floor(window.innerHeight / 2) - 50);
    $(".blocked").css("left", Math.floor(window.innerWidth / 2) - 50);
    $(".blocked").css("top", Math.floor(window.innerHeight / 2) - 50);
    if (!player.noframe) {
        var a = player.frame.top_bar_hidden ? 0 : 33;
        if (player.frame.top_bar_hidden)$("#topbar").addClass("empty");
        else if (this.options.title_enabled) {
            if ($("#storytitle").removeClass("alone"),
                $(".toptab").removeClass("alone"), $(".toptab").removeClass("notitle"), $("#topbar").removeClass("empty"), !this.hasLinksLeft || !this.hasLinksRight)if (!this.hasLinksLeft || this.hasLinksRight)!this.hasLinksLeft && this.hasLinksRight ? ($("#storytitle").addClass("alone"), $(".toptab").addClass("alone")) : !this.hasLinksLeft && !this.hasLinksRight && (a = 10);
        } else
            $("#storytitle").removeClass("alone"), $(".toptab").removeClass("alone"), $("#topbar").removeClass("empty"), $(".toptab").addClass("notitle"), a = 10, !this.hasLinksLeft &&
                !this.hasLinksRight && (a = -10, $("#topbar").addClass("empty"));
        var b = player.frame.options.sidebar_enabled && this.isSidebarVisible();
        player.frame.ensureHasActiveSidebarItem();
        var c = player.frame.bottom_bar_hidden || !player.frame.hasBottomBar ? 0 : 41, d = b ? 239 : 0, d = b ? 240 : 0, e = "left" == player.frame.options.sidebarpos ? d : 0, f = this.containerHeight, g = this.containerWidth - d - 20 + 1, c = f - a - c - 20 + 1;
        this.availableWidth = g;
        this.availableHeight = c;
        var h = "left" == player.frame.options.sidebarpos ? 0 : g + 20,
            d = "left" == player.frame.options.sidebarpos ?
                d + 10 : 10;
        $(".landscape_menu").css("left", h);
        $("#controls").css("left", d);
        $("#controls").css("width", g);
        this.setVisibility($("#controls"), this.hasBottomBar);
        $("#topbar").css("left", d);
        $("#topbar").css("width", g);
        $(".toptab .menu_container").css("height", parseInt(0.8 * c));
        var j = g / c, d = 10, h = e + 10 - 1, f = f - 20 + 2, k = 0;
        player.frame.options.logo_enabled && (k = player.frame.options.logo_height + 20 + 10);
        k = f - k - 25;
        $(".landscape_menu .menu_container").css("height", k + "px");
        player.aspectRatio > j ? (g = (c - 1 * player.height) / 2, 0 < g &&
        (d = g + 10 + 2)) : (g = (g - 1 * player.width) / 2, 0 < g && (h = g + e + 10));
        a = "#slideframe{margin-left:" + h + "px!important;margin-top:" + d + "px!important;top:" + a + "px!important;}#slideframe, .slide{width:" + player.width + "px;height:" + player.height + "px;}.landscape_menu{height: " + f + "px;}.landscape_menu{display: " + (b ? "block" : "none") + ";}.interstitial{height:" + window.innerHeight + "px;}";
        player.frame.options.seekbar || (a += ".player_controls{display:none!important;}");
        if (!player.rotateLandscapeStyleSheet)
            player.rotateLandscapeStyleSheet =
                document.createElement("style"), document.body.appendChild(player.rotateLandscapeStyleSheet);
        player.rotateLandscapeStyleSheet.innerHTML = a;
        player.landscapeScale = 1;
        player.zoom = 1;
    }
};
Frame.prototype.updateFrameLayout = function() {
    if (!player.isIOS || player.hasNavOutsideFrame) {
        var a = window.innerWidth, b = window.innerHeight, c = story.frameWidth - 2, d = story.frameHeight - 2, e = 1;
        player.scaleToFit && (e = story.frameWidth / story.frameHeight > a / b ? a / story.frameWidth : b / story.frameHeight, $("document.body").css("overflow", "hidden"));
        b = parseInt((b - d * e) / 2 - 1);
        0 > b && (b = 0);
        a = parseInt((a - c * e) / 2 - 1);
        0 > a && (a = 0);
        this.containerWidth = c;
        this.containerHeight = d;
        this.containerLeft = a;
        this.containerTop = b;
        this.aspectRatio = c /
            d;
        $(".framewrap").css("width", c);
        $(".framewrap").css("height", d);
        $(".framewrap").css("top", b);
        $(".framewrap").css("left", a);
        c = ".framewrap{-webkit-transform-origin:top left;-webkit-transform:translate3d(0px,0px,0px) scale(" + e + ");-moz-transform-origin:top left;-moz-transform:translate3d(0px,0px,0px) scale(" + e + ");-ms-transform-origin:top left;-ms-transform:translate(0px,0px) scale(" + e + ");}";
        if (!player.frameLandscapeStyleSheet)player.frameLandscapeStyleSheet = document.createElement("style"), document.body.appendChild(player.frameLandscapeStyleSheet);
        player.frameLandscapeStyleSheet.innerHTML = c;
        player.frameScale = e;
    }
};
Frame.prototype.updateTextLabels = function() {
    $(this.xml).find("string_table").first().children("string").each(function(a, b) {
        var c = $(b).attr("id"), d = $(b).text(), b = $(".label." + c);
        0 < b.length && (b.text(d), b.parent().hasClass("controlbar-button") && (c = player.isIOS ? 0.88 : 0.9, c = b.get(0).offsetWidth * (1 - c), 0 != c && b.css("margin-right", -c + "px")));
    });
};
Frame.prototype.debugTopNav = function() {
    var a = this;
    this.topNavSelector = $("<div class='topnavselector'></div>");
    $(document.body).append(this.topNavSelector);
    var b = function(b) {
        var d = $("<input id='box_" + b + "' type='checkbox'><label for='box_" + b + "'>" + b + "</label>");
        d.first()[0].checked = player.frame[b];
        d.click(function() {
            var a = d.first()[0].checked;
            player.frame[b] = a;
            player.frame.updateLayout();
        });
        a.topNavSelector.append(d);
    };
    b("top_bar_hidden");
    b("hasLinksLeft");
    b("hasLinksRight");
    $("#topbar").css("background-color",
        "aqua");
    $("#toplinks_right").css("background-color", "yellow");
    $("#toplinks_left").css("background-color", "orange");
    $("#topbar > #storytitle").css("background-color", "lime");
};
Frame.prototype.setControlEnabled = function(a, b) {
    var c = Frame.controlMap[a];
    c && (b ? c.removeClass("disabled") : c.addClass("disabled"));
};
Frame.findCurrentFrame = function() {
    var a = null;
    if (self != top && !player.isCrossDomainFrame)
        try {
            $.each(top.document.getElementsByTagName("iframe"), function(b, d) { d.contentWindow == self && (a = d); }), $.each(top.document.getElementsByTagName("frame"), function(b, d) { d.contentWindow == self && (a = d); });
        } catch (b) {
        }
    return a;
};

function ResourcesPanel() {}

ResourcesPanel.prototype.loadFromXML = function(a) {
    var b = this;
    this.xml = a;
    this.description = $(a).attr("description");
    this.resources = [];
    $(a).children("resources").children("resource").each(function(a, d) {
        var e = {};
        e.url = $(d).attr("url");
        e.image = player.basepath + $(d).attr("image");
        e.title = $(d).attr("title");
        b.resources.push(e);
    });
    this.createRef();
};
ResourcesPanel.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = $("<div class='resources_container'></div>");
    a.append($("<div class='resources_description'>" + this.description + "</div>"));
    a.append($("<hr/>"));
    var b = $("<ul></ul>");
    $.each(this.resources, function(a, d) {
        var e = $("<li><a href='" + d.url + "' target='_blank'><img src='" + d.image + "' class='resources_icon'/>" + d.title + "</a></li>");
        b.append(e);
    });
    a.append(b);
    this.ref = a;
    return!0;
};

function GlossaryPanel() {}

GlossaryPanel.prototype.loadFromXML = function(a) {
    var b = this;
    this.xml = a;
    this.terms = [];
    $(a).children("terms").children("term").each(function(a, d) {
        var e = {};
        e.title = $(d).attr("title");
        e.definition = $(d).text();
        b.terms.push(e);
    });
    this.createRef();
};
GlossaryPanel.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = $("<div class='glossary_container'></div>"), b = $("<div id='glossaryscroll' class='glossary_section scrollarea'></div>");
    b.append($("<div class='glossary_section_header label terms'>Terms</div>"));
    var c = $("<ul></ul>");
    $.each(this.terms, function(a, b) {
        var f = $("<li><a href='javascript:void(null);' >" + b.title + "</a></li>");
        f.click(function() {
            $(".definitiontext").hide();
            $(".glossary_container .active").removeClass("active");
            b.defref &&
            (f.addClass("active"), b.defref.show());
        });
        c.append(f);
    });
    b.append(c);
    a.append(b);
    b = $("<div class='glossary_section'></div>");
    b.append($("<div class='glossary_section_header label definition'>Definition</div>"));
    $.each(this.terms, function(a, c) {
        var f = $("<div class='definitiontext'>" + c.definition + "</div>");
        c.defref = f;
        b.append(f);
    });
    a.append(b);
    this.ref = a;
    return!0;
};

function TranscriptPanel() {}

TranscriptPanel.prototype.loadFromXML = function(a) {
    var b = this;
    this.xml = a;
    this.transcripts = [];
    $(a).children("slidetranscripts").children("slidetranscript").each(function(a, d) {
        var e = {};
        e.slideid = $(d).attr("slideid");
        e.slidebank = "true" == $(d).attr("slidebank");
        e.content = $(d).text();
        b.transcripts.push(e);
        var f = story.parseObjref(e.slideid).target;
        f.transcript = e;
        e.show = function() {
            b.titleref.html(f.title);
            $(".transcript_content").hide();
            e.contentref && e.contentref.show();
        };
    });
    this.createRef();
};
TranscriptPanel.prototype.createRef = function() {
    if (this.ref)return!1;
    var a = $("<div class='transcript_container'></div>");
    this.titleref = $("<div class='transcript_title'></div>");
    a.append(this.titleref);
    $.each(this.transcripts, function(b, c) {
        var d = $("<div class='transcript_content'><hr/>" + c.content + "</div>");
        c.contentref = d;
        a.append(d);
    });
    this.ref = a;
    return!0;
};

function CustomStyleSheet() {
    this.rules = [];
    this.ruleLookup = {};
    this.sheet = null;
}

CustomStyleSheet.prototype.add = function(a, b, c) {
    if (this.ruleLookup[a])this.ruleLookup[a].add(b, c);
    else {
        var d = new StyleRule(a);
        d.add(b, c);
        this.ruleLookup[a] = d;
        this.rules.push(d);
    }
};
CustomStyleSheet.prototype.build = function() {
    if (!this.sheet)this.sheet = document.createElement("style"), document.body.appendChild(this.sheet);
    var a = "";
    $.each(this.rules, function(b, c) { a += c.toString(); });
    this.sheet.innerHTML = a;
};

function StyleRule(a) {
    this.selector = a;
    this.attributes = [];
}

StyleRule.prototype.add = function(a, b) { this.attributes.push({ name: a, value: b }); };
StyleRule.prototype.toString = function() {
    var a = this.selector + "\r\n{\r\n";
    $.each(this.attributes, function(b, c) { a += "\t" + c.name + ": " + c.value + ";\r\n"; });
    return a += "}\r\n\r\n";
};
var MouseEvents = { hideables: [] };
MouseEvents.addHideable = function(a, b, c) { MouseEvents.hideables.push({ selector: a, exclude: b, callback: c }); };
MouseEvents.processHideables = function(a) { $.each(MouseEvents.hideables, function(b, c) { (!c.exclude || !a || !(a.target && 0 < $(a.target).closest(c.exclude).length)) && $.each($(c.selector), function(a, b) { c.callback($(b)); }); }); };
MouseEvents.init = function() {
    var a = function(a) { return null != a.dropArea; };
    player.allowRightClick || $(window).bind("contextmenu", function() { return!1; });
    var b = player.isIOS ? "touchstart" : "mousedown", c = player.isIOS ? "touchend" : "mouseup", d = player.isIOS ? "touchmove" : "mousemove";
    $(window).bind(b, function(a) {
        player.lastEvent = a;
        if (player.currentSlide()) {
            swipe.parseEventCoords(a);
            var b = swipe.getSlideCoords(player.currentSlide());
            player.currentSlide().deepEach(function(a, c) {
                var d = !1;
                c.button && (d = c.button.testOver(b.x,
                    b.y));
                (!player.modalLayer || player.modalLayer == c.layer) && !d && "true" != c.variables._disabled && null != c.isPointActive && c.hasEvent("onclickoutside") && (!c.testOver(b.x, b.y) || !c.isPointActive(b.x, b.y) || c.isPointObscured(b.x, b.y)) && c.handleEvent("onclickoutside", null, null, !1, !1, !0);
            }, function(a) { return a.visible || "ShuffleGroup" == a.innerType; });
            return!0;
        }
    });
    $(window).bind("click", function(a) { MouseEvents.processHideables(a); });
    var e = function(a) {
        do if (-1 < a.className.indexOf("toptab") || -1 < a.className.indexOf("controlbar-button"))return!0;
        while (a = a.parentElement);
        return!1;
    };
    $(document.body).bind(b, function(a) {
        player.lastEvent = a;
        if (player.currentSlide() && player.currentSlide().ref && !e(a.target)) {
            swipe.parseEventCoords(a);
            var b = swipe.getSlideCoords(player.currentSlide());
            swipe.noteDownCoords();
            var c = !1;
            player.currentSlide().deepEach(function(d, e) {
                if (!c && (!player.modalLayer || player.modalLayer == e.layer) && "true" != e.variables._disabled && e.visible && (e.hasEvent("onpress") || e.hasEvent("onrelease") || e.hasEvent("onlink") || e.isDragItem || player.canChangeMonitoringItem) &&
                    e.slide.testOver(b.x, b.y) && e.isPointActive(b.x, b.y) && !e.isPointObscured(b.x, b.y))e.isDragItem ? (e.mousedown(a), c = !0) : e.hasEvent("onpress") && (e.handleEvent("onpress", null, null, !1, !1, !0), c = !0), e.hasEvent("onrelease") && e.ref && e.ref.addClass("hasmousedown"), $.each(e.children, function(a, b) { b.hasEvent("onrelease") && b.ref && b.ref.addClass("hasmousedown"); }), player.canChangeMonitoringItem && player.updateItemInfo(e);
                e.clickFocus && e.testOver(b.x, b.y) && !e.isPointObscured(b.x, b.y) && (c = !0, setTimeout(function() {
                    e.input &&
                        e.input.get && e.input.get(0) ? e.input.get(0).focus() : e.select && e.select.get && e.select.get(0) && e.select.get(0).focus();
                }, 0));
            }, function(a) { return a.visible || "ShuffleGroup" == a.innerType; });
        }
    });
    $(document.body).bind(c, function(b) {
        player.lastEvent = b;
        var c = swipe.hasMoved();
        if (player.currentSlide() && player.currentSlide().ref) {
            swipe.parseEventCoords(b);
            var d = swipe.getSlideCoords(player.currentSlide()), e = !1;
            player.currentSlide().deepEach(function(b, f) {
                if (!e && f.slide.testOver(d.x, d.y) && (!player.modalLayer || player.modalLayer ==
                    f.layer) && "true" != f.variables._disabled && f.visible && (f.hasEvent("onrelease") || f.hasEvent("onlinkrelease")) && (!c || f.ref && f.ref.hasClass("hasmousedown")) && f.isPointActive(d.x, d.y) && !f.isPointObscured(d.x, d.y, null, a))e = !0, f.handleEvent("onrelease", null, null, !1, !1, !0), f.hasEvent("onlinkrelease") && $.each(f.links, function(a, b) { b.handleIfOver("onlinkrelease", d, !1); }), f.prepDownstreamMedia(), e = !0;
            }, function(a) { return a.visible || "ShuffleGroup" == a.innerType; });
            !e && player.currentSlide().testOver(d.x, d.y) && player.currentSlide().handleEvent("onclickoutsideobjects",
                null, null, !1, !1, !0);
            $(".hasmousedown").removeClass("hasmousedown");
        }
    });
    $(".menu_container").bind("mouseup", function() { return!1; });
    $(document.body).bind(d, function(b) {
        player.lastEvent = b;
        if (player.currentSlide() && player.currentSlide().ref) {
            swipe.parseEventCoords(b);
            var c = swipe.getSlideCoords(player.currentSlide());
            if (player.followMouseCursor) {
                if (!player.mouseFollowDiv)player.mouseFollowDiv = $("<div class='mousecursorfollow'></div>");
                player.currentSlide().ref.append(player.mouseFollowDiv);
                player.mouseFollowDiv.css("left",
                    c.x);
                player.mouseFollowDiv.css("top", c.y - 5);
            }
            player.currentSlide().deepEach(function(d, e) {
                if (e.isMouseOver && (!player.modalLayer || player.modalLayer == e.layer) && "true" != e.variables._disabled && e.isPointActive && 0 == e.dragX && 0 == e.dragY && (e.hasEvent("onrollout") || e.hasEvent("onpress") || e.hasEvent("onrelease") || e.hasEvent("ondoubleclick", !0) || e.hasEvent("onlinkrelease", !0) || e.isDragItem) && (!e.isPointActive(c.x, c.y) || e.isPointObscured(c.x, c.y, null, a)))
                    e.isMouseOver = !1, e.hasEvent("onrollout") && e.handleEvent("onrollout",
                        null, null, !1, !1, !0), $(b.target).removeClass("pointercursor"), e.hasEvent("onlinkrelease") && $.each(e.links, function(a, b) { b.render("onrollout"); });
                if ((!e.isMouseOver || e.hasEvent("onlinkrelease", !0)) && (!player.modalLayer || player.modalLayer == e.layer) && (e.hasEvent("onrollover", !0) || e.hasEvent("onpress", !0) || e.hasEvent("onrelease", !0) || e.hasEvent("ondoubleclick", !0) || e.hasEvent("onlinkrelease", !0) || e.isDragItem) && "true" != e.variables._disabled && e.isPointActive && e.isPointActive(c.x, c.y) && !e.isPointObscured(c.x,
                    c.y, null, a))
                    if (e.isMouseOver = !0, e.hasEvent("onrollover") && e.handleEvent("onrollover", null, null, !1, !1, !0), e.hasEvent("onlinkrelease")) {
                        var k = !1;
                        $.each(e.links, function(a, b) {
                            b.handleIfOver("onrollover", c, !0) && (k = !0);
                            b.handleIfOut("onrollout", c);
                        });
                        k ? $(b.target).addClass("pointercursor") : $(b.target).removeClass("pointercursor");
                    } else $(b.target).addClass("pointercursor");
            }, function(a) { return a.visible || "ShuffleGroup" == a.innerType; });
        }
    });
};
var playerDiagnostics = {};
playerDiagnostics.init = function() {
    $.each(location.search.split("&"), function(a, b) {
        var c = unescape(b.replace("?", "")).split("=");
        switch (c[0].toLowerCase()) {
        case "controls":
            player.showControls = !0;
            player.swipeMode = "none";
            player.animations = "all";
            break;
        case "seek":
            setTimeout(function() {
                player.frame.options.forceseekbar = !0;
                player.frame.options.seekbar = !0;
                player.frame.set_frame_layout();
            }, 400);
            break;
        case "anim":
            player.animations = c[1];
            break;
        case "page":
            player.paging = c[1];
            break;
        case "zoom":
            player.tapZoomEnabled = !0;
            break;
        case "lockzoom":
            player.lockzoom = !player.lockzoom;
            break;
        case "scale":
            player.scaleToFit = !player.scaleToFit;
            break;
        case "swipe":
            player.swipeMode = c[1];
            break;
        case "rightclick":
            player.allowRightClick = !player.allowRightClick;
            break;
        case "menu":
            player.forceMenu = !0;
            break;
        case "jiggle":
            player.useSwipeJiggle = !0;
            break;
        case "simplezoom":
            player.useSimpleZoom = !0;
            break;
        case "framecount":
            player.showFrameCount = !0;
            break;
        case "heartbeat":
            setInterval(function() {
                $(".framewrap").hide();
                player.uselessOffsetHeight = $(".framewrap").get(0).offsetHeight;
                $(".framewrap").show();
            }, c[1] || 1E3);
            break;
        case "noimg":
            player.noImg = !0;
            break;
        case "bak":
            player.backOnly = !0;
            break;
        case "simplify":
            player.simplifySlides = !1;
            break;
        case "preload":
            player.preload = !0;
            break;
        case "nopreload":
            player.neverPreload = !0;
            break;
        case "canvasdebug":
            player.canvasDebug = !0;
            break;
        case "ppfudge":
            window.ppFudge = parseFloat(c[1]);
            break;
        case "nocanvas":
            player.useCanvas = !1;
            player.renderVectorShapes = !1;
            player.renderVectorsAsSVG = !1;
            break;
        case "safecanvas":
            player.useSafeCanvas = !0;
            break;
        case "basiccanvas":
            ppArt =
                ppArtBasic;
            break;
        case "oldnav":
            player.simplenav = !1;
            break;
        case "compact":
            player.useCompactResume = !player.useCompactResume;
            break;
        case "svg":
            player.useCanvas = !0;
            player.renderVectorShapes = !0;
            player.renderVectorsAsSVG = !0;
            break;
        case "logging":
            window.EventLogger.logging = !window.EventLogger.logging;
            break;
        case "console":
            console.suppress = !console.suppress;
            break;
        case "trace":
            trace.suppress = !trace.suppress;
            break;
        case "noconsole":
            console.suppress = !0;
            break;
        case "datestamp":
            var d = $("<div class='datestamp'>" + window.buildDate +
                "<div>");
            d.click(function() { alert(window.buildDate); });
            $(document.body).append(d);
            break;
        case "decode":
            Audio.decodeOnLoad = !Audio.decodeOnLoad;
            break;
        case "mobileaudio":
            player.simulateMobileAudio = !0;
            break;
        case "silent":
            Audio.setSilentMode();
            break;
        case "media":
            player.showMediaMonitor = !0;
            setInterval(playerDiagnostics.updateMediaMonitor, 100);
            break;
        case "medialist":
            var e = $("<div class='medialist'></div>");
            $(document.body).append(e);
            setTimeout(function() {
                story.xml.find("video").find("videodata").each(function(a,
                    b) { e.append("<a href='" + player.basepath + $(b).attr("url") + "' target='_blank'>" + $(b).attr("url") + "</a><br>"); });
            }, 2E3);
            break;
        case "timelines":
            playerDiagnostics.setupTimelineMonitor();
            break;
        case "resources":
            playerDiagnostics.setupResourceList();
            break;
        case "monitor":
            player.showInstrumentation = !0;
            break;
        case "follow":
            player.followMouseCursor = !0;
            break;
        case "info":
            player.showItemInfo = !0;
            player.canChangeMonitoringItem = !0;
            player.originalMonitoringItemID = c[1];
            setInterval(player.updateItemInfo, 1E3);
            setTimeout(function() {
                var a =
                    story.findDescendantById(c[1]);
                a && player.updateItemInfo(a);
            }, 1E3);
            $(".framewrap").addClass("info");
            break;
        case "placeholder":
            player.usePlaceholderVideo = !0;
            break;
        case "novideo":
            player.noVideo = !0;
            break;
        case "noaudiocache":
            player.noAudioCache = !0;
            break;
        case "filter":
            console.filter = c[1];
            break;
        case "overlap":
            player.showDebugOverlap = !0;
            BitMask.showDebug = !0;
            break;
        case "persist":
            player.showDebugOverlapPersistent = !0;
            break;
        case "overlapdebug":
            player.showDebugOverlap = !0;
            BitMask.showDebug = !0;
            BitMask.debugOnly = !0;
            break;
        case "matrixdebug":
            player.showMatrixDebug = !0;
            break;
        case "maskdebug":
            player.drawMaskDebugShapes = !0;
            break;
        case "maskimage":
            player.useMaskImage = !0;
            break;
        case "maskcanvas":
            player.useMaskCanvas = !0;
            break;
        case "backcanvas":
            player.useBackgroundCanvasWorkaround = !0;
            break;
        case "dumpcanvas":
            player.dumpCanvas = !0;
            player.canvasCommandLog = [];
            break;
        case "linkareas":
            player.showLinkAreas = !0;
            break;
        case "maximize":
            player.canMaximize = !0;
            player.maximized = !0;
            break;
        case "stresstest":
            playerDiagnostics.setupStressTest();
            break;
        case "navtest":
            setTimeout(function() { player.frame.debugTopNav(); }, 1E3);
            break;
        case "nointervals":
            player.nointervals = !0;
            break;
        case "noframe":
            player.noframe = !0;
            break;
        case "noframecolor":
            player.noframecolor = !0;
        case "novectorimage":
            player.suppressVectorImage = !0;
            break;
        case "bgcolor":
            globals.strBgColor = "#" + c[1];
            $(document.body).css("background", "#" + c[1]);
            break;
        case "slidescale":
            player.forceSlideScale = parseFloat(c[1]);
            break;
        case "resumedata":
            player.overrideResumeData = c[1];
            break;
        case "suppresscapture":
            player.suppressCaptureAnimations =
                !player.suppressCaptureAnimations;
            break;
        case "active":
            player.useActiveTimeline = !player.useActiveTimeline;
            break;
        case "iosplayer":
            player.simulateIOSPlayer = !player.simulateIOSPlayer;
            break;
        case "logactivity":
            player.logActivity = !player.logActivity;
            break;
        case "history":
            playerDiagnostics.setupHistoryDebug();
        }
    });
};
playerDiagnostics.setupStressTest = function() {
    var a = $("<a style='position:absolute;left:0px;top:10px;z-index:10000;background-color:#fff'>stress single</a>");
    a.click(function() {
        var b = 0,
            d = player.currentSlide(),
            e = d.container,
            f = function() {
                setTimeout(function() {
                    d.destroyRef();
                    setTimeout(function() {
                        d.createRef(e);
                        f();
                    }, 50);
                }, 50);
                b++;
                a.html(b);
            };
        f();
    });
    $(document.body).append(a);
    var b = $("<a style='position:absolute;left:0px;top:50px;z-index:10000;background-color:#fff'>stress cycle</a>");
    b.click(function() {
        var a =
                0,
            d = function() {
                setTimeout(function() { player.showSlideIndex((player.slideIndex + 1) % story.allSlides.length, null, !0, function() { d(); }); }, 1E3);
                a++;
                b.html(a);
            };
        d();
    });
    $(document.body).append(b);
};
playerDiagnostics.updateMediaMonitor = function() {
    if (player.showMediaMonitor) {
        if (!player.mediaMonitor)player.mediaMonitor = $("<div class='monitor'>hey</div>"), $(document.body).append(player.mediaMonitor);
        player.mediaMonitor.empty();
        $.each(story.allSlides, function(a, c) {
            player.mediaMonitor.append("<h2>" + c.title + "</h2>");
            var d = $("<ul></ul>");
            $.each(c.resources, function(a, b) {
                if (("audio" == b.item.type || "video" == b.item.type) && b.item.ref) {
                    var c = $("<li>" + b.prepared + ", " + b.item.ref.get(0).networkState + ", " + b.item.ref.get(0).readyState +
                        ", " + b.item.ref.get(0).paused + ", " + b.item.ref.get(0).ended + ", " + b.item.ref.get(0).error + ", " + b.item.ref.get(0).currentTime + ", " + b.src + "</li>");
                    !b.item.ref.get(0).paused && !b.item.ref.get(0).ended && c.css("background-color", "yellow");
                    b.item.getFullObjref() == player.nextPreparedClipID && c.css("color", "green");
                    player.currentClip && b.item.ref && player.currentClip == b.item.ref.get(0) && c.css("text-decoration", "underline");
                    d.append(c);
                }
            });
            player.mediaMonitor.append(d);
        });
        var a = $("<ul></ul>");
        $.each(Video.refStore,
            function(b, c) {
                var d = $("<li>" + b + ", " + c.get(0).networkState + ", " + c.get(0).readyState + ", " + c.get(0).paused + ", " + c.get(0).ended + ", " + c.get(0).error + ", " + c.get(0).currentTime + ", " + c.get(0).src + "</li>");
                a.append(d);
            });
        player.mediaMonitor.append(a);
    }
};
playerDiagnostics.setupTimelineMonitor = function() {
    var a = $("<ul class='timerlist'></ul>"),
        b = function(b, d, e) {
            b = $("<li class='t" + b + "'>" + b + ": <b>" + d + "</b> (" + e + ")</li>");
            a.append(b);
        };
    $(document.body).append(a);
    setInterval(function() {
        a.empty();
        b("active", player.activeTimeline.currentTime, player.activeTimeline.id);
        b("player", player.currentTime, "");
        b("slide", player.currentSlide().currentTime, player.currentSlide().id);
        player.currentFramedSlide && b("slideFrame", player.currentFramedSlide.currentTime, player.currentFramedSlide.id);
        player.currentWindowSlide && b("window", player.currentWindowSlide.currentTime, player.currentWindowSlide.id);
        b("animation", player.getAnimationTime(), "");
        var c = function(a) { a && a.deepEach(function(a, c) { "Layer" == c.innerType && b("layer", c.currentTime, c.id); }); };
        c(player.currentSlide());
        c(player.currentWindowSlide);
        c(player.currentFramedSlide);
    }, 100);
};
playerDiagnostics.setupResourceList = function() {
    var a = $("<ul class='resourcelist'></ul>");
    $(document.body).append(a);
    setInterval(function() {
        a.empty();
        var b = $("<li class='ttotal'>total: <b>" + Resource.TotalPixels + "</b> (" + Resource.LoadedImageCount + ")</li>");
        a.append(b);
    }, 100);
};
playerDiagnostics.setupHistoryDebug = function() {
    var a = $("<ul class='historylist'></ul>"),
        b = function(b, d, e) {
            b = $("<li class='t" + b + "'>" + b + ": <b>" + d + "</b> (" + e + ")</li>");
            a.append(b);
        };
    $(document.body).append(a);
    setInterval(function() {
        a.empty();
        player.history.forEach(function(a) { b("player", a, story.allSlides[a].id); });
        player.currentWindow && player.currentWindow.history.forEach(function(a) { b("window", a, story.allSlides[a].id); });
    }, 100);
};
var player = {
        slideIndex: 0,
        currentTime: 0,
        animationTime: 0,
        interval: null,
        showingInterstitial: !0,
        ready: !1,
        fontready: !1,
        playing: !1,
        paused: !0,
        blocked: !1,
        playall: !1,
        autoplay: !0,
        autoplaySlides: !0,
        loopable: !1,
        simplenav: !0,
        visible: !0,
        mediaCount: 0,
        loadedMediaCount: 0,
        deferredLoadingIndex: 0,
        frameScale: 1,
        width: 1,
        height: 1,
        aspectRatio: 720 / 540,
        windowZoomModifier: 1,
        transitionSeconds: 0.4,
        maxTransitionSeconds: 1.2,
        clipVolume: 1,
        progressBar: null,
        zoomed: !1,
        basepath: "",
        currentClip: null,
        currentClipStartTime: 0,
        currentAnimations: {},
        showControls: !1,
        slideList: null,
        fileList: null,
        swipeMode: "follow",
        useCanvas: !0,
        useCompactResume: !0,
        simplifySlides: !0,
        suppressCaptureAnimations: !1,
        hasUserScript: !1,
        startTime: new Date,
        useActiveTimeline: !0,
        simulateIOSPlayer: !1,
        logActivity: !1,
        frameCount: 0,
        renderedFrameCount: 0,
        fontlib: null,
        textlib: null,
        history: [],
        windowStack: [],
        renderQueue: [],
        showQueue: [],
        webAudioClips: {},
        listSlidesViewed: {},
        listSlidesViewedComplete: {},
        completeSlidesViewed: 0,
        currentSlidesViewed: 0,
        totalViewSlides: 0,
        allowTouchMove: !1
    },
    g_oFontLib;
player.TICK_DURATION = 30;
player.isIOS = -1 < navigator.userAgent.indexOf("AppleWebKit/") && -1 < navigator.userAgent.indexOf("Mobile/");
player.isIPhone = /iP(hone|od)/.test(navigator.platform);
player.isIOSFrame = !1;
player.isWebKit = -1 < navigator.userAgent.indexOf("AppleWebKit/");
player.canAnimate = -1 < navigator.userAgent.indexOf("AppleWebKit/");
player.isIE = -1 < navigator.userAgent.indexOf("MSIE ");
player.isIE8 = player.isIE && -1 < navigator.appVersion.indexOf("MSIE 8");
player.isIE9 = player.isIE && -1 < navigator.appVersion.indexOf("MSIE 9");
player.isFF = -1 < navigator.userAgent.indexOf("Firefox/");
player.isChrome = -1 < navigator.userAgent.indexOf("Chrome/");
player.isMac = -1 < navigator.userAgent.indexOf("Macintosh;");
player.isCrossDomainFrame = !1;
player.isAndroid = -1 < navigator.userAgent.indexOf("Android");
player.isIOS = player.isIOS || player.isAndroid;
player.isCrossDomainFrame = !1;
try {
    player.isCrossDomainFrame = void 0 == top.location.href;
} catch (e$$54) {
    player.isCrossDomainFrame = !0;
}
if (self != top && !player.isCrossDomainFrame) {
    var meta = $('<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1.0"/>');
    try {
        top.document.getElementsByTagName("head")[0].appendChild(meta.get(0));
    } catch (e$$55) {
        player.isCrossDomainFrame = !0;
    }
}
player.activeTimeline = player;
player.getIOSversion = function() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return[parseInt(a[1] || 7, 10), parseInt(a[2] || 0, 10), parseInt(a[3] || 0, 10)];
    }
    return[7, 0, 0];
};
window.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { window.setTimeout(a, 1E3 / 60); }; }();
player.getAnimationTime = function() { return player.animationTime; };
player.tick = function() {
    this.bTicked = !0;
    player.frameCount++;
    var a = new Date, b = a - player.lastRenderTime;
    window.requestAnimFrame(player.tick);
    if (!(b < 0.75 * player.TICK_DURATION)) {
        player.renderedFrameCount++;
        player.lastRenderTime = new Date;
        player.currentTickDuration = player.TICK_DURATION;
        if (b > 0.5 * player.TICK_DURATION && b < 4 * player.TICK_DURATION)player.currentTickDuration = b;
        player.tickAnimations();
        if (ProgressBar.getCurrentProgressBar().dragging && player.currentClip)
            player.currentClip.currentTime = (player.activeTimeline.currentTime -
                player.currentClipStartTime) / 1E3;
        else if (player.blocked || player.currentSlide() && player.currentSlide().tickLayers(), player.updateControls(), player.playing) {
            player.currentTime += player.currentTickDuration;
            player.activeTimeline != player && "Slide" == player.activeTimeline.innerType && player.activeTimeline.tick();
            a -= player.frameRateZeroTime;
            if (player.showFrameCount && !isNaN(a)) {
                if (!player.frameCounter)player.frameCounter = $("<div class='framecounter'></div>"), $(document.body).append(player.frameCounter);
                a = parseInt(1E3 *
                (player.renderedFrameCount / a));
                player.frameCounter.text(a + " " + b);
                player.frameCounter.css("color", player.currentTickDuration == b ? "green" : "red");
                player.currentTickDuration != b && console.log("long tick", player.currentTickDuration, b);
            }
            player.correctMedia();
            player.update();
            if (player.currentSlide() != player.activeTimeline)player.currentSlide().currentTime = player.currentTime;
        } else player.currentSlide() && player.currentSlide().updateLayers();
    }
};
player.tickAnimations = function() {

    function a(a) {
        if (!a.steppedThisTick) {
            var c = !0, d = null, e = null;
            $.each(a.animations, function(f, g) {
                if (g.running) {
                    var h = g.timeline.getAnimationTime() - g.startTime;
                    if (0 <= h && h <= g.duration)g.step(g.timeline.getAnimationTime()), a.steppedThisTick = !0;
                    c = c && 0 > h;
                    if (!d || g.startTime < d.startTime)d = g;
                    if (!e || g.startTime + g.duration > e.startTime + e.duration)e = g;
                }
            });
            !a.steppedThisTick && d && e && (c ? d.step(d.timeline.getAnimationTime()) : e.step(e.timeline.getAnimationTime()));
            a.steppedThisTick = !0;
        }
    }

    player.animationTime += player.currentTickDuration;
    $.each(player.currentAnimations, function(b, c) {
        c.item.destroyed && delete player.currentAnimations[b];
        c.item.steppedThisTick = !1;
        !c.item.steppedThisTick && c.isTimeWithinAnimation(c.timeline.getAnimationTime()) ? (c.step(c.timeline.getAnimationTime()), c.item.steppedThisTick = !0) : !c.ended && !c.item.steppedThisTick && c.isTimeAfterAnimation(c.timeline.getAnimationTime()) ? (c.step(c.timeline.getAnimationTime()), c.item.steppedThisTick = !0) : a(c.item);
    });
};
player.updateControls = function() {
    var a = $(".controlbar-button").find(".pause"), b = $(".controlbar-button").find(".play");
    player.activeTimeline.paused && (a = $(".controlbar-button").find(".play"), b = $(".controlbar-button").find(".pause"));
    b.hide();
    a.show();
};
player.correctMedia = function() {};
player.update = function(a) {

    function b(a) {
        var b = (Math.floor(a / 1E3) % 60 + 100 + "").substr(1, 2), e = Math.floor(a / 1E3 / 60), f = "";
        0 > a && (b = (Math.floor(a / 1E3) % 60 - 100 + "").substr(2, 2), e = Math.ceil(a / 1E3 / 60), f = "-");
        return f + Math.abs(e) + ":" + b;
    }

    if (player.activeTimeline == player)
        ProgressBar.getCurrentProgressBar().index = player.activeTimeline.currentTime, ProgressBar.getCurrentProgressBar().count = player.currentSlide().duration, ProgressBar.getCurrentProgressBar().update(), player.paused ? ($(".controlbar-button").find(".wait").hide(),
            $(".controlbar-button").find(".pause").hide(), $(".controlbar-button").find(".play").show()) : ($(".controlbar-button").find(".wait").hide(), $(".controlbar-button").find(".play").hide(), $(".controlbar-button").find(".pause").show());
    player.currentSlide().update(player.currentTime, !1, a);
    $(".time_elapsed").text(b(player.currentTime));
    $(".time_remaining").text(b(player.currentTime - player.currentSlide().duration));
};
player.wait = function() {
    $(".toolbar-button").find(".wait").parent().show();
    $(".toolbar-button").find(".play").parent().hide();
    $(".toolbar-button").find(".pause").parent().hide();
};
player.showSlideID = function(a, b, c) {
    a = story.parseObjref(a).target;
    if (a == player.currentSlide())return!1;
    if ("Scene" == a.innerType)a = story.parseObjref(a.startingslide).target;
    if ("SlideDraw" == a.innerType)a.showFirst();
    else {
        if (isNaN(a.slideIndex))return!1;
        player.showSlideIndex(a.slideIndex, null, b, c);
    }
    return!0;
};
player.showSlideIndex = function(a, b, c, d) {
    var e = story.allSlides[a];
    player.currentSlide().handleEvent("onbeforeslidejump", null, null, !1, !0);
    StoryEvent.cancelEvent || (e.loadContentFromXML(), StoryEvent.currentEvent && StoryEvent.currentEvent.isUserInitiated && player.prepAudio(a), e.blockAndLoad(function() {
        player.frame.setControlEnabled("previous", !0);
        player.frame.setControlEnabled("next", !0);
        player.frame.setControlEnabled("submit", !0);
        player.loadingSpinner.hide();
        if (null != player.currentWindow)
            player.previousWindow =
                player.currentWindow;
        player.currentWindow = null;
        DragItem.cancelDrag();
        var b = player.currentSlide().slideIndex;
        if (a != b) {
            player.currentSlide().saveIfNecessary();
            c && -1 == player.currentSlide().parent.id.indexOf("MsgScene") && (player.currentWindow ? player.currentWindow.history.push(b) : player.history.push(b));
            player.activeTimeline = player;
            player.setSlideIndex(a);
            if (player.onSelectSlide)player.onSelectSlide(story.allSlides[a]);
            player.isIOSFrame && ($("#slideframe").css("-webkit-box-shadow", "0 0 30px rgba(0, 0, 0, 0.35)"),
                $("#slideframe").css("-moz-box-shadow", "0 0 30px rgba(0, 0, 0, 0.35)"), $("#slideframe").css("-ms-box-shadow", "0 0 30px rgba(0, 0, 0, 0.35)"), $("#slideframe").css("box-shadow", "0 0 30px rgba(0, 0, 0, 0.35)"));
            story.saveToLocalStorage();
            player.currentSlide().deferredFrameLayoutXML && player.currentSlide().set_frame_layout(e.deferredFrameLayoutXML);
            var g = 0;
            player.neverPreload || setTimeout(function() { 20 < g++ || e.slideIndex + 1 < story.allSlides.length && story.allSlides[e.slideIndex + 1].loadContentFromXML(); }, 2E3);
        }
        d && d();
    }));
};
player.showNextSlide = function() {
    if (player.slideIndex == story.allSlides.length - 1)return Transition.bounce([$(".slide.in")], 1), !1;
    if ($(".icon.next-slide").hasClass("disabled"))return!1;
    for (var a = (player.slideIndex + 1) % story.allSlides.length; a != player.slideIndex; a = (a + 1) % story.allSlides.length)
        if (story.allSlides[a].active) {
            player.showSlideIndex(a, 2, !0);
            break;
        }
};
player.showPreviousSlide = function() {
    if (player.slideIndex == story.startingSlideIndex)return Transition.bounce([$(".slide.in")], 2), !1;
    if ($(".icon.previous-slide").hasClass("disabled"))return!1;
    for (var a = (player.slideIndex + story.allSlides.length - 1) % story.allSlides.length; a != player.slideIndex; a = (a + story.allSlides.length - 1) % story.allSlides.length)
        if (story.allSlides[a] && story.allSlides[a].active) {
            player.showSlideIndex(a, 1, !0);
            break;
        }
};
player.setSlideIndex = function(a, b) {
    player.zoomed && player.tapZoom();
    MouseEvents.processHideables();
    clearTimeout(player.mediaTimeout);
    player.blockedOn = null;
    player.unblock();
    player.pause(!1, !0);
    if (!isNaN(a)) {
        var c = player.currentSlide();
        player.slideIndex = a;
        player.currentTime = 0;
        player.currentTime = player.currentSlide().currentTime;
        player.activeTimeline = player;
        if (player.currentSlide())
            player.currentSlide().resetInteractions(), player.currentSlide().variables.Visited = !0, player.currentSlide().viewedCurrent =
                !0, player.lmsManager.handleSlideViewed(player.currentSlide()), player.slideList.markVisited(c), player.currentSlide().currentTime = 0, player.currentSlide().show(player.autoplaySlides, b, function() {
                c.slideIndex != player.currentSlide().slideIndex && c.reduce();
                player.hideInactiveSlides();
                c.unloadContent();
            }), c.handleEvent("ontransitionout", null, null, !1, !0), c.deepEach(function(a, b) { b.handleEvent && b.handleEvent("ontransitionout", null, null, !1, !0); }), c.variables.WindowId = "_frame", player.currentSlide().variables.WindowId =
                "_frame";
        player.loopable || ($(".icon.disabled").removeClass("disabled"), player.slideIndex == story.startingSlideIndex && $(".icon.previous-slide").addClass("disabled"), player.slideIndex == story.allSlides.length - 1 && $(".icon.next-slide").addClass("disabled"));
        $(".item").css("-webkit-animation-name", "");
        $(".item").css("-webkit-animation-duration", "0s");
        $("ul.menu_list li").removeClass("selected locked");
        $("ul.slidelist li").removeClass("selected locked");
        $(".controlbar-button.right, #control-submitall").removeClass("locked");
        $(".toptab.customlink").removeClass("locked");
        $(".progress-container").removeClass("locked");
        var d = player.currentSlide();
        if (d.slideBank && 0 == d.navLinks.length)d = d.slideBank;
        $.each(d.navLinks, function(a, b) { $.each(b.listitems, function(a, b) { b.addClass("selected"); }); });
        player.slideList.collapseSections(player.currentSlide());
        d.slidelock && ($("ul.menu_list li").addClass("locked"), $("ul.slidelist li").addClass("locked"), $(".controlbar-button.right, #control-submitall").addClass("locked"), $(".toptab.customlink").addClass("locked"),
            $(".progress-container").addClass("locked"));
        player.slideList.scrollSelectedIntoView();
    }
};
player.restoreViewedState = function(a) {
    a.variables.Visited = !0;
    this.listSlidesViewed[a.getFullObjref()] = !0;
    this.listSlidesViewedComplete[a.slideIndex] = !0;
};
player.calculateTotalViewSlides = function() {
    for (var a = {}, b = this.totalViewSlides = 0; b < story.allSlides.length; b++) {
        var c = story.allSlides[b];
        c.trackviews && ("" != c.viewgroupid ? null == a[c.viewgroupid] && (a[c.viewgroupid] = !0, this.totalViewSlides++) : this.totalViewSlides++);
    }
};
player.hideInactiveSlides = function(a) {
    var b = player.currentSlide();
    $.each(story.allSlides, function(a, d) { d.slideIndex != b.slideIndex && (d.hide(), d.unloadContent()); });
    a && a();
};
player.currentSlide = function() { return 0 == story.allSlides.length ? null : player.currentWindow ? player.currentWindowSlide : story.allSlides[player.slideIndex]; };
player.currentZoom = function() { return player.zoom * player.windowZoomModifier; };
player.elapsedTime = function() { return new Date - player.startTime; };
player.addToRenderQueue = function(a) { 0 > this.renderQueue.indexOf(a) && (this.renderQueue.push(a), player.scheduleShowQueueFlush()); };
player.addToShowQueue = function(a, b) { a.animating && !a.animationEnded && !b ? a.showOnFirstStep = !0 : 0 > this.showQueue.indexOf(a) && (this.showQueue.push(a), player.scheduleShowQueueFlush()); };
player.removeFromShowQueue = function(a) {
    a = this.showQueue.indexOf(a);
    0 <= a && this.showQueue.splice(a, 1);
};
player.scheduleShowQueueFlush = function() { this.renderTimer ? this.renderTimer.style.opacity = "1" : player.flushShowQueues(); };
player.flushShowQueues = function() {
    Math.random();
    if (0 < player.renderQueue.length || 0 < player.showQueue.length) {
        var a = [];
        player.bTicked = !1;
        for (var b = 0; b < player.showQueue.length; b++) {
            var c = player.showQueue[b];
            0 > player.renderQueue.indexOf(c) ? c.ref && c.ref.show() : a.push(c);
        }
        for (b = 0; b < player.renderQueue.length; b++)player.renderQueue[b].renderOnUpdate();
        player.renderQueue = [];
        player.showQueue = a;
        0 < a.length && player.scheduleShowQueueFlush();
    }
};
player.ensureTicking = function() { if (!player.nointervals && !player.interval)player.interval = !0, player.frameRateZeroTime = new Date, player.tick(), player.zeroTime = new Date; };
player.play = function(a, b, c) {
    if (a = player.currentSlide()) {
        if (!player.interval || !player.playing || player.paused) {
            a.currentTime >= a.duration && !b && player.restart();
            player.interval && window.clearInterval(player.interval);
            player.playing = !0;
            player.paused = !1;
            if (!player.nointervals)player.interval = setInterval(player.tick, player.TICK_DURATION);
            player.zeroTime = new Date;
            player.showControls && player.frame.hasBottomBar && $("#controls").show();
            c || player.currentSlide().clips.forEach(function(a) {
                if (a.m_bResumeOnSeek && !a.layer &&
                (player.currentClipStartTime = a.lastStartTime, player.currentClipSyncToTimeline = !0, player.currentClip = a, a.playClip()))a.m_bResumeOnSeek = !1;
            });
        }
        $(".controlbar-button").find(".wait").hide();
        $(".controlbar-button").find(".play").hide();
        $(".controlbar-button").find(".pause").show();
        $(".play_button").removeClass("play");
        $(".play_button").addClass("pause");
        $(document.body).removeClass("paused");
        if (player.onPlay)player.onPlay();
    }
};
player.pause = function(a, b, c) {
    player.unblock(!0);
    player.playing = !1;
    player.paused = !0;
    $.each(player.currentSlide().clips, function(d, e) {
        if (b || !a || !e.layered)
            if (b || e.syncToTimeline) {
                if (e.syncToTimeline && e.getIsPlaying())e.m_bResumeOnSeek = !0;
                e.pauseClip(c);
                if (player.scheduledMediaSrc == e.content.src)clearTimeout(player.mediaTimeout), player.scheduledMediaSrc = null;
            }
    });
    player.useActiveTimeline && $.each(player.currentSlide().children, function(c, e) { "Layer" == e.innerType && (b || !a) && e.pause(); });
    $(".controlbar-button").find(".wait").hide();
    $(".controlbar-button").find(".pause").hide();
    $(".controlbar-button").find(".play").show();
};
player.pauseClips = function() {
    clearTimeout(player.mediaTimeout);
    player.scheduledMediaSrc = null;
    $.each(player.currentSlide().clips, function(a, b) {
        if (b.getIsPlaying() && b.syncToTimeline)b.m_bResumeOnSeek = !0;
        b.pauseClip();
        if (player.scheduledMediaSrc == b.content.src)clearTimeout(player.mediaTimeout), player.scheduledMediaSrc = null;
    });
    $("audio, video").each(function(a, b) { b.get && b.get(0) && b.get(0).pause && b.get(0).pause(); });
    $.each(player.webAudioClips, function(a, b) { b.pauseClip(); });
};
player.block = function() {
    if (!player.blocknotice)player.blocknotice = $('<div class="blocked">loading...</div>'), $(".blocked").css("left", Math.floor(window.innerWidth / 2) - 50), $(".blocked").css("top", Math.floor(window.innerHeight / 2) - 50), $(document.body).append(player.blocknotice);
    player.blocknotice.show();
    player.playing = !1;
    player.blocked = !0;
    clearTimeout(player.blockedTimeout);
    if (!player.hasWebAudio)
        player.blockedTimeout = setTimeout(function() { player.blocked && (player.currentSlide().currentIndex += 1, player.unblock()); },
            4E3);
};
player.unblock = function(a) {
    clearTimeout(player.blockedTimeout);
    $(".blocked").hide();
    if (player.interval && !player.paused && !a)player.playing = !0, player.blockedOn && player.blockedOn.playClip();
    player.blocked = !1;
    player.blockedOn = null;
};
player.restart = function() { if (!player.currentSlide().resume)player.currentTime = 0, player.update(player.currentTime), player.currentSlide().resetSlide(), player.pause(), player.play(); };
player.initLoadQueue = function() {
    player.slideLoadQueue = [];
    player.slideLoadQueue.processing = !0;
    player.slideLoadQueueExhausted = !1;
    for (var a = 0; a < story.allSlides.length; a++)player.slideLoadQueue.push(a);
    player.slideLoadQueue.promote = function(a) {
        a = player.slideLoadQueue.indexOf(a);
        if (0 < a)for (a = player.slideLoadQueue.splice(a, player.slideLoadQueue.length - a); a.length;)player.slideLoadQueue.unshift(a.pop());
        player.slideLoadQueue.restart();
    };
    player.slideLoadQueue.restart = function() {
        if (player.slideLoadQueueExhausted ||
            !player.slideLoadQueue.processing)player.slideLoadQueue.processing = !0, player.slideLoadQueueExhausted = !1, player.loadResourcesForNextSlide();
    };
    player.slideLoadQueue.promote(story.startingSlideIndex);
};
player.loadResourcesForNextSlide = function() {
    slideIndex = player.slideLoadQueue.shift();
    void 0 != slideIndex ? player.loadResources(slideIndex) : player.slideLoadQueueExhausted = !0;
};
player.loadResources = function(a) { 0 > a || a > story.allSlides.length || player.loadResourcesForSlide(story.allSlides[a]); };
player.loadResourcesForSlide = function(a) {
    player.slideLoadQueue.processing = !0;
    var b = 0,
        c = function() {
            var c = a.resources.length, e = 0;
            $.each(a.resources, function(f, g) {
                e = player.simplifySlides && g.item.canSimplify || g.item.deferLoading ? e + 10 : e + 100;
                setTimeout(function() { g.load(f, function() { if (++b >= c && (a.ready = !0, slideIndex == story.startingSlideIndex))player.ready = !0; }, !0); }, e);
            });
        };
    player.simplifySlides ? a.simplify(c) : c();
    if (0 == a.resources.length) {
        a.ready = !0;
        if (slideIndex == story.startingSlideIndex)player.ready = !0;
        player.loadResourcesForNextSlide();
    }
};
player.unloadResources = function() { $.each(story.allSlides, function(a, b) { (a < player.slideIndex - 1 || a > player.slideIndex + 1) && $.each(b.resources, function(a, b) { b.unload(); }); }); };
player.prepAudio = function(a) {
    if (!Resource.justPrepped) {
        Resource.justPrepped = !0;
        setTimeout(function() { Resource.justPrepped = !1; }, 100);
        var b = !1;
        $.each(story.allSlides[a].resources, function(a, d) { if (("audio" == d.item.type || "video" == d.item.type) && !b && !d.prepared)d.prep(function() {}), b = !0; });
    }
};
player.onLoadedData = function() {
    player.loadedMediaCount++;
    player.loadedMediaCount == player.mediaCount && (player.pause(), $("#slideframe").css("-webkit-transition-property", "opacity"), $("#slideframe").css("-webkit-transition-duration", "1s"), $("#slideframe").css("opacity", "1.0"), player.showSlideID(story.startingslide));
};
player.reorient = function(a) { player.frame.reorient(a); };
player.detectSize = function() { story.allSlides.forEach(function(a) { if (1 == player.width && -1 == a.id.indexOf("Prompt"))player.width = a.width, player.height = a.height, player.aspectRatio = a.aspectRatio; }); };
player.maximize = function(a) {
    a && !player.maximized ? (player.width /= 2, player.height /= 2, player.reorient(!0)) : !a && player.maximized && (player.width *= 2, player.height *= 2, player.reorient(!0));
    player.maximized = a;
};
player.revealPostInterstitial = function() {
    SlideDraw.populateDraws();
    $("#slideframe").css("-webkit-transition-property", "opacity");
    $("#slideframe").css("-webkit-transition-duration", "1s");
    $("#slideframe").css("opacity", "1.0");
    $(".launch").remove();
    player.showSlideID(story.startingslide);
    var a = story.parseObjref(story.startingslide).target;
    if ("Scene" == a.innerType)a = story.parseObjref(a.startingslide).target;
    "SlideDraw" == a.innerType && (a = a.getFirstSlide());
    a && a.prepDownstreamMedia && a.prepDownstreamMedia();
    player.reorient(!0);
    player.showControls && $("#controls").show();
    setTimeout(function() { player.showingInterstitial = !1; }, 500);
    $(".interstitial").hide();
    player.playButton.hide();
    Audio.iOSPrepare && Audio.iOSPrepare();
};
player.showInterstitial = function() { player.showIOSLaunch(); };
player.addDiagnosticButton = function(a, b) {
    var c = $('<div class="diagnosticbutton">' + a + "</div>");
    c.click(b);
    $("#topbar").append(c);
};
player.sniffParameters = function() {
    $.each(location.search.split("&"), function(a, b) {
        var c = unescape(b.replace("?", "")).split("=");
        switch (c[0].toLowerCase()) {
        case "name":
            player.storyName = c[1];
            player.basepath = "/UserData/Upload/" + c[1] + "/";
            break;
        case "usexml":
            player.loadFromScript = !1;
            break;
        case "contentfolder":
            window.globals.strContentFolder = c[1];
            break;
        case "lms":
            player.useLMS = !0;
            break;
        case "ao":
            window.globals.bAOSupport = !0;
            window.g_bAOSupport = !0;
            player.useAO = !0;
            player.forceAO = !0;
            break;
        case "tincan":
            window.globals.bTinCan =
                !0, window.g_bTinCan = !0, player.useTinCan = !0;
        }
    });
};
player.loadFonts = function(a) {
    player.fontlib = new ppFontLib(player.basepath, $(a).find("bwContent").attr("iosfonts"));
    g_oFontLib = player.fontlib;
    player.fontlib.CreateFonts(function() { player.fontready = !0; });
};
player.parseFrameData = function(a) {
    player.frame.loadFromXML($(a));
    player.slideList.refresh();
    player.frame.initOrientation();
};
player.loadFrame = function() {
    if (player.frameData)player.parseFrameData(player.frameData);
    else if (player.loadFromScript) {
        player.parseDataOnLoad = !0;
        var a = $("<script><\/script>");
        a.attr("src", player.basepath + "story_content/frame.js");
        $(document.body).append(a);
        setTimeout(function() { if (!player.createdFrameData)player.loadFromScript = !1, player.loadFrame(), $(document.body).append($("<div class='framefailed'></div>")); }, 5E3);
    } else
        a = "?random=" + Math.random(), $.ajax({
            url: player.basepath + "story_content/frame.xml" +
                a,
            dataType: "xml",
            cache: !1,
            success: function(a) { player.parseFrameData(a); },
            error: function() { player.frame.ready = !0; }
        });
};
player.loadUserScript = function() { "file:" !== location.protocol && $.ajax({ url: player.basepath + "story_content/user.js", dataType: "script", cache: !1 }); };
player.loadMasks = function() {
    if (player.maskData)player.parseMaskData(player.maskData);
    else if (player.loadFromScript)player.parseDataOnLoad = !0;
};
player.parseMaskData = function(a) {
    player.bitmasks = {};
    $(a).find("maskdata").each(function(a, c) {
        var d = $(c).attr("i"), e = $(c).attr("m");
        player.bitmasks[d] = e;
    });
};
player.load = function(a) {
    if (player.isIOSFrame && (480 >= window.innerWidth || 480 >= window.innerHeight)) {
        $(".interstitial").show();
        $(".wrap").hide();
        $(".loading").hide();
        $(".interstitial_play").hide();
        $(".wrap").remove();
        $(".loading").remove();
        $(".interstitial_play").remove();
        var b = $("<div class='incompatible'><h1>Not yet</h1>Small device support is coming soon.</div>");
        $(document.body).append(b);
    } else
        player.parseStoryData = function(b) {
            if ("string" == typeof b) {
                var b = b.replace(/[\u000a\u000b\u000c\u000d\u0085\u2028\u2029]/g,
                        ""),
                    b = b.replace(/&#x[0-8bcef];/ig, ""),
                    d;
                -1 < location.search.indexOf("dumpxml=1") && console.log(b);
                window.ActiveXObject ? (d = new ActiveXObject("Microsoft.XMLDOM"), d.loadXML(b)) : d = (new DOMParser).parseFromString(b, "text/xml");
                b = d;
            }
            if ($(b).find("fontlib") && 0 > location.search.indexOf("nocanvas"))player.useCanvas = !0, player.renderVectorShapes = !0, player.renderVectorsAsSVG = !1;
            story.loadFromXML($(b));
            player.loadFrame();
            player.loadMasks();
            player.initLoadQueue();
            player.loadResourcesForNextSlide();
            player.loadFonts($(b));
            if (!window.ExecuteScript)window.ExecuteScript = function() {}, player.loadUserScript();
            var e = player.lmsManager.initResume(),
                f = setInterval(function() {
                    if (player.ready && player.frame.ready && player.fontready && 0 == story.pendingSceneCount && player.lmsManager.isReady()) {
                        player.loadingSpinner.hide();
                        player.pause();
                        window.clearInterval(f);
                        player.showControls && $("#controls").show();
                        if (!player.frame.defaultLayoutName) {
                            var d = $(b).find("set_frame_layout").first().attr("name");
                            if (d)player.frame.defaultLayoutName = d;
                        }
                        player.frame.set_frame_layout();
                        player.frame.updateLayout();
                        player.frame.set_frame_layout();
                        var d = player.hasLMS && story.resumeLMS || player.lmsManager.hasAO && player.aoResumeData && story.resumeLMS || player.lmsManager.hasTinCan && player.tinCanResumeData && story.resumeLMS || !player.hasLMS && !player.lmsManager.hasAO && story.resumeFlash, h = "";
                        if (player.overrideResumeData)h = player.overrideResumeData;
                        if (player.hasLMS && story.resumeLMS) {
                            if (h = e, player.overrideResumeData)h = player.overrideResumeData;
                        } else if (player.lmsManager.hasAO && player.aoResumeData &&
                            story.resumeLMS)h = player.aoResumeData;
                        else if (player.lmsManager.hasTinCan && player.tinCanResumeData && story.resumeLMS)h = player.tinCanResumeData;
                        else if (story.resumeFlash && (h = localStorageAlias[story.resumeID], player.overrideResumeData))h = player.overrideResumeData;
                        if (player.hasLMS && !h && story.resumeFlash) {
                            if (h = localStorageAlias[story.resumeID], player.overrideResumeData)h = player.overrideResumeData;
                        } else if (player.lmsManager.hasAO && !h && story.resumeFlash) {
                            if (h = localStorageAlias[story.resumeID], player.overrideResumeData)
                                h =
                                    player.overrideResumeData;
                        } else if (player.lmsManager.hasTinCan && !h && story.resumeFlash) {
                            if (h = localStorageAlias[story.resumeID], player.overrideResumeData)h = player.overrideResumeData;
                        } else if (!player.lmsManager.hasAO && !player.lmsManager.hasTinCan && !player.hasLMS && (h = localStorageAlias[story.resumeID], player.overrideResumeData))h = player.overrideResumeData;
                        if ((player.resumeData = h) && d && !story.resumePrompt) {
                            if (player.overrideResumeData)h = player.overrideResumeData;
                            if (player.useCompactResume)
                                try {
                                    resumeSuccess =
                                        story.updateFromCompactData(h);
                                } catch (j) {
                                }
                            else
                                try {
                                    story.updateFromData(JSON.parse(h));
                                } catch (k) {
                                }
                            player.isIOS && player.showInterstitial();
                        }
                        if (player.automate)
                            setTimeout(function() {
                                player.revealPostInterstitial();
                                player.automate();
                            }, 1);
                        else if (h && story.resumePrompt) {
                            d = story.parseObjref(story.resumeWindow).target;
                            h = story.parseObjref(story.resumeSlideID).target;
                            if (player.isIOSFrame) {
                                var l = new ResumePrompt;
                                l.loadFromXML(d.xml);
                                l.createRef();
                                story.children[d.id] = l;
                                l.showSlide(h);
                            } else d.showSlide(h);
                            $(".interstitial").hide();
                            $("#slideframe").css("opacity", "1.0");
                            $("#control-progress").hide();
                            player.reorient(!0);
                        } else player.isIOS ? player.showInterstitial() : setTimeout(function() { player.simulateIOSPlayer ? player.showInterstitial() : player.revealPostInterstitial(); }, 1);
                        a && a();
                    }
                }, 100);
        }, player.storyData ? player.parseStoryData(player.storyData) : player.loadFromScript ? (player.parseDataOnLoad = !0, b = $("<script><\/script>"), b.attr("src", player.basepath + "mobile/data.js"), $(document.body).append(b), setTimeout(function() {
            if (!player.createdStoryData)
                $(document.body).append($("<div class='datafailed'></div>")),
                    player.loadFromScript = !1, player.load();
        }, 5E3)) : $.ajax({ url: player.basepath + "story_content/data.xml", dataType: "xml", cache: !1, success: function(a) { player.parseStoryData(a); }, error: function(a, b) { alert("Error loading " + player.basepath + "story_content/data.xml: " + b); } });
};
player.tapPause = function() {
    player.hasReleasedFinger = !1;
    if (!player.pausenotice)
        player.pausenotice = $('<div class="interstitial light"></div><div class="pausemessage"></div>'), $(document.body).append(player.pausenotice), player.pausenotice.bind("click touchstart mousedown", function() {
            if (player.hasReleasedFinger)player.showingInterstitial = !1, player.pausenotice.hide(), player.play(!0);
            player.hasReleasedFinger = !0;
        });
    player.showingInterstitial = !0;
    player.pause();
    player.pausenotice.show();
    player.hasReleasedFinger =
        !1;
    swipe.cancel();
};
player.tapZoom = function(a) {
    var b = player.currentSlide().ref;
    if (player.zoomed)
        b.css("-webkit-transition-property", "none"), b.css("-webkit-transition-duration", "0s"), b.css("zoom", 1), b.css("-webkit-transform", player.lastSlideTransform), b.css("width", "720px"), b.css("height", "540px"), setTimeout(function() {
            b.css("-webkit-transition-property", "-webkit-transform");
            b.css("-webkit-transition-duration", "0.4s");
            b.css("-webkit-transform-origin", "top left");
            b.css("-webkit-transform", "translate3d(0px, 0px, 0px) scale(1.0)");
        }, 0);
    else {
        if (!a)return;
        var c = b.offset(), d = $("#slideframe").css("zoom"), e = (a.originalEvent.changedTouches[0].pageY - c.top) / d, f = parseInt((a.originalEvent.changedTouches[0].pageX - c.left) / d / 2), g = parseInt(e / 2), a = "scale(2.0) translate3d(-" + f + "px,-" + g + "px,0px) ";
        b.css("-webkit-transition-property", "-webkit-transform");
        b.css("-webkit-transition-duration", "0.4s");
        b.css("-webkit-transform-origin", "top left");
        b.css("-webkit-transform", a);
        b.css("width", "1440px");
        b.css("height", "1080px");
        player.lastSlideTransform = a;
        setTimeout(function() { player.zoomed && (b.css("-webkit-transition-property", "none"), b.css("-webkit-transition-duration", "0s"), b.css("zoom", 2), b.css("-webkit-transform", "translate3d(-" + f + "px,-" + g + "px,0px)")); }, 400);
    }
    player.zoomed = !player.zoomed;
};
player.updateItemInfo = function(a) {
    if (player.showItemInfo) {
        if (!player.itemInfoMonitor)player.itemInfoMonitor = $("<div class='monitor'></div>"), $(document.body).append(player.itemInfoMonitor);
        if (player.canChangeMonitoringItem && a)player.monitoringItem = a || player.monitoringItem, player.canChangeMonitoringItem = !1;
        a = player.monitoringItem;
        player.itemInfoMonitor.empty();
        player.itemInfoMonitor.append($("<p>currentTime:" + player.currentTime + ", currentLayerTime: " + player.currentLayerTime + "</p>"));
        if (a) {
            $(".item.monitoring").removeClass("monitoring");
            a.ref && a.ref.addClass("monitoring");
            var b = $("<h2>" + a.id + "</h2>");
            b.bind("click", function() { alert(a.id); });
            player.itemInfoMonitor.append(b);
            player.itemInfoMonitor.append($("<h3>" + a.innerType + " (visible:" + a.visible + ")</h3>"));
            player.itemInfoMonitor.append($("<p>x: " + a.x + " y: " + a.y + " w: " + a.width + " h: " + a.height + " z: " + a.depth + " xoff: " + a.xoffset + " yoff: " + a.yoffset + " dragX: " + a.dragX + " dragY: " + a.dragY + " ox: " + a.originalX + " oy: " + a.originalY + " sx: " + a.shuffleX + " sy: " + a.shuffleY + " vis: " + a.visible + " </p>"));
            b = $("<a>toggle&nbsp;</a>");
            b.click(function() { a.visible ? a.hide() : a.show(); });
            player.itemInfoMonitor.append(b);
            b = $("<a>&nbsp;render</a>");
            b.click(function() { a.render(a.lastRenderedState, !0, null, "info pane"); });
            player.itemInfoMonitor.append(b);
            a.content && player.itemInfoMonitor.append($("<span>" + a.content.src + "</span>"));
            b = function(a, b) {
                if (a) {
                    var c = $("<table></table>");
                    $.each(a, function(a, d) {
                        var e = d;
                        b && (e = "function" == typeof b ? b(a, d) : d[b]);
                        e = $("<tr><td>" + a + ":</td><td>" + e + "</td></tr>");
                        c.append(e);
                    });
                    player.itemInfoMonitor.append(c);
                }
            };
            player.itemInfoMonitor.append("<p/><a href='javascript:void(null);' onclick='player.monitoringItem=null;player.canChangeMonitoringItem=true;player.updateItemInfo();'>change</a>");
            player.monitoringItem.parent && player.itemInfoMonitor.append("(<a href='javascript:void(null);' onclick='player.monitoringItem=player.monitoringItem.parent;player.updateItemInfo();'>parent</a>)");
            player.itemInfoMonitor.append("<p/><a href='javascript:void(null);' onclick='player.monitoringItem=null;player.canChangeMonitoringItem=true;player.updateItemInfo(player.currentSlide());'>slide</a>");
            player.itemInfoMonitor.append("<p/><a href='javascript:void(null);' onclick='player.monitoringItem=story.findDescendantById(player.originalMonitoringItemID);player.updateItemInfo();'>sniff</a>");
            var c = $("<a href='javascript:void(null);'>log</a>");
            c.click(function() { console.log(a); });
            player.itemInfoMonitor.append("<p/>");
            player.itemInfoMonitor.append(c);
            b(a.variables);
            b(a.children, function(a, b) {
                return"<a href='javascript:void(null);' onclick='player.monitoringItem=player.monitoringItem.children[\"" +
                    b.id + "\"];player.updateItemInfo();'>_" + b.innerType + "_</a>";
            });
            b(a.events, "trigger");
            b(a.states);
            b(a.actionGroups);
            player.logActivity ? b(a.log) : a.content ? (player.itemInfoMonitor.append($("<span onclick='alert(this.innerHTML)'>" + a.content.path + "</span><br/>")), a.content.src && a.content.src != Element.PixelSrc ? player.itemInfoMonitor.append($("<img src='" + a.content.src + "' style='opacity:0.8;border:solid 1px green'>")) : player.itemInfoMonitor.append($("<span>NO IMAGE</span>")), a.canvas && a.canvas.toDataURL &&
                0 == location.href.indexOf("http") && (b = a.canvas.toDataURL("image/png"), player.itemInfoMonitor.append($("<img src='" + b + "' style='opacity:0.8;border:solid 1px yellow'>")))) : player.itemInfoMonitor.append($("NO CONTENT"));
            if (a.bitMask && player.showDebugOverlap) {
                var d = function(a) {
                    var b = $("<canvas></canvas>");
                    b.attr("width", a.width);
                    b.attr("height", a.height);
                    b.css("position", "relative");
                    player.itemInfoMonitor.append(b);
                    a.drawDebug(b.get(0));
                };
                d(a.bitMask);
                a.stateMasks && $.each(a.stateMasks, function(a, b) { d(b); });
            } else player.itemInfoMonitor.append($("NO BITMASK"));
        } else player.itemInfoMonitor.append($("<h2>select an item to monitor</h2>"));
    }
};
var story, tq;
$("#loadingSpinner").css("left", Math.floor(window.innerWidth / 2) - 50);
$("#loadingSpinner").css("top", Math.floor(window.innerHeight / 2) - 50);
$(".blocked").css("left", Math.floor(window.innerWidth / 2) - 50);
$(".blocked").css("top", Math.floor(window.innerHeight / 2) - 50);
$(document).ready(function() {
    if (window.WebKitMutationObserver)player.renderTimer = document.createElement("DIV"), player.renderTimer.id = "renderer", player.renderTimer.style.position = "absolute", player.renderTimer.style.visibility = "hidden", document.body.appendChild(player.renderTimer), player.renderTimer.observer = new WebKitMutationObserver(function(a) { a.forEach(player.flushShowQueues); }), player.renderTimer.observer.observe(player.renderTimer, { attributes: !0, subtree: !1 }), player.renderTimer.style.opacity = "1";
    player.iosVersion = player.getIOSversion();
    player.iPhoneiOS7Greater = 7 <= player.iosVersion[0] && player.isIPhone;
    player.loadingSpinner = $("#loadingSpinner");
    player.playButton = $("#playButton");
    player.container = $("#slidecontainer");
    story = new Storyline(player.container);
    player.frame = new Frame;
    player.showControls = !0;
    player.swipeMode = "none";
    player.simplifySlides = !1;
    player.loadFromScript = !0;
    player.lockzoom = !1;
    player.startTime = new Date;
    player.sniffParameters();
    playerDiagnostics.init();
    player.lmsManager = new LMSManager;
    player.lmsManager.init();
    player.initIOS && player.initIOS();
    player.load();
    if ("follow" != player.swipeMode) {
        $(".submit-slide").parent().bind("click", function() { player.currentWindow || 0 < $(".modalfence:visible").length || story.handleEvent("onobjectevent", "submit_pressed", null, !1, !1, !0); });
        $(".next-slide").parent().bind("click", function() { story.handleEvent("onobjectevent", "next_pressed", null, !1, !1, !0); });
        $(".previous-slide").parent().bind("click", function() {
            story.handleEvent("onobjectevent", "prev_pressed", null,
                !1, !1, !0);
        });
        if (player.isIOS) {
            var a = function() { player.currentSlide().hasSimpleNavigation && player.pause(); };
            $(".next-slide").parent().bind("touchend", a);
            $(".previous-slide").parent().bind("touchend", a);
        }
        $("#control-menu").bind("click", function() { player.slideList.toggle(); });
        $(".button, .controlbar-button").bind("mousedown touchstart", function() { $(this).addClass("pressed"); });
        $(".button, .controlbar-button").bind("mouseup mouseout touchend", function() { $(this).removeClass("pressed"); });
    } else console.log("swipe.init()");
    $("#control-pauseplay .play").bind("click", function() { player.activeTimeline.play(!1, !1, !1); });
    $("#control-pauseplay .pause").bind("click", function() { player.activeTimeline.pause(!1, !0, !1); });
    player.volumeSlider = new VolumeSlider($("#control-volume"));
    player.volumeSlider.onDragUpdate = function(a) {
        $("audio, video").each(function(c, d) { d.volume = Math.min(a * player.clipVolume, 1); });
        Audio.setMasterVolume && Audio.setMasterVolume(a);
    };
    "all" == player.paging && $(document.body).bind("tap", function(a) {
        !player.showingInterstitial &&
            !player.zoomed && (a = a.originalEvent.touches ? a.originalEvent.changedTouches[0].pageX : a.pageX, a < 0.1 * window.innerWidth ? player.showPreviousSlide() : a > 0.9 * window.innerWidth && player.showNextSlide());
    });
    $(document.body).bind("touchstart", function(a) { if (a && a.originalEvent && a.originalEvent.touches && 1 == a.originalEvent.touches.length)player.touchStart = { left: a.originalEvent.touches[0].pageX, top: a.originalEvent.touches[0].pageY }, player.touchFlickDirection = null; });
    $(document.body).bind("touchmove", function(a) {
        var c =
            a.originalEvent.touches;
        if (2 != c.length)return player.allowTouchMove && !player.showingInterstitial ? !0 : player.isFramedOffset || player.hasNavOutsideFrame;
        if (0 != $(a.target).closest(".slidelist").length)return!0;
        for (var d = !1, e = a.target; !d && e;) {
            d = $(e).hasClass("scrollarea");
            if ((inSlideList = $(e).hasClass("slidelist")) && 2 == c.length)return!0;
            if (d && player.touchStart) {
                c = parseInt(a.originalEvent.touches[0].pageX - player.touchStart.left);
                a = parseInt(a.originalEvent.touches[0].pageY - player.touchStart.top);
                if (!player.touchFlickDirection)
                    player.touchFlickDirection =
                        Math.abs(c) > Math.abs(a) ? "horizontal" : "vertical";
                return"horizontal" == player.touchFlickDirection || 0 >= e.scrollTop && 0 < a || e.scrollTop >= e.scrollHeight - e.offsetHeight && 0 > a ? !1 : !0;
            }
            e = e.parentNode;
        }
        return player.isFramedOffset || player.hasNavOutsideFrame;
    });
    $(window).bind("scroll", function() { return player.isFramedOffset || player.hasNavOutsideFrame; });
    $(window).unbind("keydown");
    $(window).bind("keydown", function(a) {
        var c, d = player.currentSlide();
        if (d) {
            var e = a.keyCode, f = String.fromCharCode(a.keyCode);
            if (90 < a.keyCode ||
                !/\w/.test(f))e = -1;
            story.properties.LastKeyCode = e;
            story.properties.LastKeyCodeString = f;
            setTimeout(function() {
                if (player.modalLayer && player.modalLayer.visible)d = player.modalLayer;
                c = d.handleEvent("onkeypress", a, null, !1, !0, !0) && c;
                c = d.handleEvent("onanykeypress", a, null, !1, !0, !0) && c;
                d.deepEach(function(d, e) { e.handleEvent && (c = e.handleEvent("onkeypress", a, null, !1, !0, !0) && c, c = e.handleEvent("onanykeypress", a, null, !1, !0, !0) && c); });
            }, 0);
        }
        if (13 == a.keyCode)
            return a.target && a.target.item && a.target.item.content && a.target.item.content.multiline ?
                !0 : !1;
    });
    MouseEvents.init();
    player.progressBar = new ProgressBar(null, $("#progressbar"), !0);
    player.progressBar.onDragUpdate = function(a) {
        var c = player.activeTimeline == player ? player.currentSlide().duration : player.activeTimeline.duration;
        player.activeTimeline.currentTime = parseInt(c * a);
        if (player.activeTimeline == player && player.currentClip && player.currentTime > player.currentClipStartTime && player.currentTime < 1E3 * player.currentClip.duration + player.currentClipStartTime)
            player.currentClip.currentTime = (player.currentTime -
                player.currentClipStartTime) / 1E3;
        player.activeTimeline.update(!0);
    };
    player.lastOrientation = -1;
    !player.nointervals && player.isIOS && setInterval(function() { player.frame.reorient(); }, 100);
    player.frame.reorient(!0);
    player.isIOS || ($(window).bind("resize", function() { player.reorient(!0); }), $(document.body).bind("dragstart", function(a) { a.preventDefault(); }));
});
player.forceRepaint = function() {
    $(".framewrap").hide();
    player.uselessOffsetHeight = $(".framewrap").get(0).offsetHeight;
    $(".framewrap").show();
};
player.initGlobals = function() {
    $(document.body).css("background-color", window.globals.strBgColor);
    player.scaleToFit = "noscale" != window.globals.strScale;
};
player.restrictUnsupportedBrowsers = function() {};
window.CreateData = function(a, b) {
    b = b || "storyData";
    if ("string" == typeof a) {
        a = a.replace(/[\u000a\u000b\u000c\u000d\u0085\u2028\u2029]/g, "");
        a = a.replace(/&#x[0-8bcef];/ig, "");
        -1 < location.search.indexOf("dumpxml=1") && console.log(a);
        var c;
        window.ActiveXObject ? (c = new ActiveXObject("Microsoft.XMLDOM"), c.loadXML(a)) : c = (new DOMParser).parseFromString(a, "text/xml");
        a = c;
    }
    player[b] = a;
    if (player.parseDataOnLoad && "storyData" == b)player.createdStoryData = !0, player.parseStoryData(player.storyData);
};
window.CreateFrameData = function(a) {
    player.createdFrameData = !0;
    CreateData(a, "frameData");
    player.parseDataOnLoad && player.parseFrameData(player.frameData);
};
window.CreateMaskData = function(a) {
    player.createdMaskData = !0;
    CreateData(a, "maskData");
    player.parseDataOnLoad && player.parseMaskData(player.maskData);
};
window.GetPlayer = function() { return player; };
player.GetVar = function(a) { return story.extractVariable(a); };
player.SetVar = function(a, b) { story.setVariable(a, b); };
window.player = player;
window.$ = $;
window.story = story;
var IE6 = !1;
window.IE6 = !1;
window.IE6 = !1;
if (!window.g_bWarnOnCommitFail) {
    var g_bWarnOnCommitFail = !1;
    window.g_bWarnOnCommitFail = !1;
    window.g_bWarnOnCommitFail = !1;
}
window.localStorageAlias = window.localStorage;
if (document.all && !window.localStorage)window.localStorageAlias = {}, window.localStorageAlias.removeItem = function() {};
player.meta = { title: "", description: "", thumburl: "" };
player.initIOS = function() {};
if (player.isIOS || -1 < location.search.indexOf("iosplayer=1"))
    player.initIOS = function() { player.loadMetaData(); }, player.loadMetaData = function() {
        var a = "?random=" + Math.random();
        $.ajax({ url: player.basepath + "meta.xml" + a, dataType: "xml", cache: !1, success: function(a) { player.parseMetaData(a); }, error: function() {} });
    }, player.parseMetaData = function(a) {
        a = $(a).children("meta").children("project");
        player.meta.title = a.attr("title");
        player.meta.thumburl = a.attr("thumburl");
        player.meta.description = a.children("description").text();
        player.populateIOSLaunch();
    }, player.showIOSLaunch = function() {
        player.launch = $('<div class="launch">&nbsp;<div class="launchwrap"><div class="container"><div class="launch_meta"><h1/><p/><a class="button"" title="play">Play</a></div><div class="screenshot"><img/></div></div></div></div>');
        $(document.body).prepend(player.launch);
        player.launch.show();
        player.launch.find("a").first().click(player.revealPostInterstitial);
        player.populateIOSLaunch();
        if (500 > window.innerWidth) {
            var a = player.launch.find(".screenshot"),
                b = player.launch.find("h1"),
                c = player.launch.find(".container"),
                d = function() {
                    var d = window.orientation / 180 == parseInt(window.orientation / 180);
                    player.isCrossDomainFrame || (d = top.window.orientation / 180 == parseInt(top.window.orientation / 180));
                    d ? a.insertAfter(b) : c.append(a);
                };
            window.addEventListener("orientationchange", d);
            d();
        }
    }, player.populateIOSLaunch = function() {
        player.launch && (player.launch.find("h1").text(player.meta.title), player.launch.find("p").first().text(player.meta.description), player.launch.find("img").first().attr("src",
            player.basepath + player.meta.thumburl));
    };
player.isFramed = top != self;
player.isFramedOffset = !1;
player.hasNavOutsideFrame = !1;
if (player.isFramed) {
    var myFrame = Frame.findCurrentFrame();
    if (myFrame)player.isFramedOffset = 0 < myFrame.offsetWidth || 0 < myFrame.offsetHeight;
}
if (player.isIOS || -1 < location.search.indexOf("iosorient=1"))
    player.iosFrameTop = 0, player.iosFrameLeft = 0, Frame.prototype.initOrientation = function() {
        var a = player.isCrossDomainFrame ? window.orientation : top.window.orientation, b = a / 180 == parseInt(a / 180);
        window.scrollTo(player.iosFrameTop, player.iosFrameLeft);
        if (self != top && !player.isCrossDomainFrame)
            b && $(document.body).addClass("portrait"), player.hasNavOutsideFrame = window.innerHeight != top.window.innerHeight || window.innerWidth != top.window.innerWidth, player.hasNavOutsideFrame ?
            (player.scaleToFit = !0, a = document.createElement("meta"), a.setAttribute("id", "viewport"), a.setAttribute("name", "viewport"), a.setAttribute("content", "width=device-width, user-scalable=yes"), document.getElementsByTagName("head")[0].appendChild(a), player.getMyFrame = function() {
                var a = top.document.getElementsByTagName("iframe"), b = window.frameElement;
                if (!b) {
                    for (var c = 0; c < a.length; c++)-1 < a[c].src.indexOf("index_lms_html5") && (b = a[c]);
                    !b && 0 < a.length && (b = a[0]);
                }
                return b;
            }, player.walkToTop = function(a, b) {
                var c = a,
                    d = self;
                do {
                    do b(c);
                    while (c = c.offsetParent || c.parentNode || c.frameElement);
                    c = d = d.parent;
                } while (d != top);
                return a;
            }, player.updateFrameOffset = function() {
                var a = player.getMyFrame();
                if (a) {
                    var b = parseInt(a.style.left), c = parseInt(a.style.top);
                    if (isNaN(b) || isNaN(c))c = b = 0;
                    player.walkToTop(a, function(a) {
                        b += a.offsetLeft || 0;
                        c += a.offsetTop || 0;
                    });
                    player.iosFrameTop = c;
                    player.iosFrameLeft = b;
                }
                return a;
            }, player.popMyFrame = function() {
                var a = player.updateFrameOffset();
                if (!player.hasPoppedOut)
                    player.hasPoppedOut = !0, a.style.position =
                        "absolute", a.style.left = player.iosFrameLeft + "px", a.style.top = player.iosFrameTop + "px", setTimeout(function() {
                        console.log("scrolling", player.iosFrameLeft, player.iosFrameTop, a.style.left, a.style.top);
                        player.updateFrameOffset();
                        top.window.scrollTo(player.iosFrameLeft, player.iosFrameTop);
                        console.log("scrolled", player.iosFrameLeft, player.iosFrameTop, a.style.left, a.style.top);
                    }, 1E3), console.log("popping", player.iosFrameLeft, player.iosFrameTop, a.style.left, a.style.top), setTimeout(function() {
                        top.document.body.appendChild(a);
                        console.log("popped", player.iosFrameLeft, player.iosFrameTop, a.style.left, a.style.top);
                    }, 0), top.window.scrollTo(player.iosFrameLeft, player.iosFrameTop);
                return a;
            }, player.fitToFrameContainer = function() {
                var a = function(a) { return a.innerWidth || a.clientWidth || a.style && !isNaN(parseInt(a.style.width)) && parseInt(a.style.width) || a.width || 0; }, b = function(a) { return a.innerHeight || a.clientHeight || a.style && !isNaN(parseInt(a.style.height)) && parseInt(a.style.height) || a.height || 0; }, c = player.getMyFrame(), d = a(c), e = b(c);
                player.walkToTop(c, function(c) {
                    var f = a(c), c = b(c);
                    f && c && (d = Math.min(d, f), e = Math.min(e, c));
                });
                window.innerWidth = d;
                window.innerHeight = e;
                player.frame.updateFrameLayout();
            }, player.fitToFrameContainer()) : top.window.scrollTo(player.iosFrameLeft, player.iosFrameTop);
        window.scrollTo(0, 0);
        if (!player.hasNavOutsideFrame) {
            player.iPhoneiOS7Greater && ($(document.body).bind("touchstart", function() { player.frame.touchStarted = !0; }), $(document.body).bind("touchend", function() { player.frame.touchStarted = !1; }));
            var c = window.innerWidth,
                d = window.innerHeight,
                e = b ? d : c,
                f = b ? c : d,
                a = b ? c : d,
                c = b ? d : c;
            player.isCrossDomainFrame || (c = Math.min(window.innerWidth, top.window.innerWidth), d = Math.min(window.innerHeight, top.window.innerHeight), e = b ? d : c, f = b ? c : d, a = b ? c : d, c = b ? d : c);
            var g = story.frameWidth - 2, h = story.frameHeight - 2;
            this.containerWidth = g;
            this.containerHeight = h;
            $(".framewrap").css("width", g);
            $(".framewrap").css("height", h);
            var j = window.screen.width, k = window.screen.height;
            if (!player.isAndroid && !b)j = window.screen.height, k = window.screen.width;
            d = k - d;
            b ?
            (c = k - d, a = j, f = j - d, e = k) : (f = k - d, e = j, c = j - d, a = k);
            b = 1;
            b = g / h > e / f ? e / g : f / h;
            this.aspectRatio = g / h;
            d = parseInt((f - h * b) / 2 - 1);
            0 > d && (d = 0);
            j = parseInt((e - g * b) / 2 - 1);
            0 > j && (j = 0);
            this.containerLeftLandscape = j;
            this.containerTopLandscape = d;
            d = "top:" + d + "px!important; left:" + j + "px!important;";
            if (player.iPhoneiOS7Greater || player.isFramed)d = "";
            e = ".framewrap{-webkit-transform-origin:top left;-webkit-transform:translate3d(0px,0px,0px) scale(" + b + ");width:" + g + "px;height:" + h + "px;" + d + ".interstitial{height:" + f + "px;width:" + e + "px;}}";
            player.landscapeFrameScale = b;
            b = 1;
            b = g / h > a / c ? a / g : c / h;
            d = parseInt((c - h * b) / 2 - 1);
            0 > d && (d = 0);
            j = parseInt((a - g * b) / 2 - 1);
            0 > j && (j = 0);
            this.containerLeftPortrait = j;
            this.containerTopPortrait = d;
            f = "top:" + d + "px!important; left:" + j + "px!important;";
            if (player.iPhoneiOS7Greater || player.isFramed)f = "";
            a = ".framewrap{-webkit-transform-origin:top left;-moz-transform-origin:top left;-ms-transform-origin:top left;-webkit-transform:translate3d(0px,0px,0px) scale(" + b + ");-moz-transform:translate3d(0px,0px,0px) scale(" + b + ");-ms-transform:translate(0px,0px) scale(" +
                b + ");width:" + g + "px;height:" + h + "px;" + f + ".interstitial{height:" + c + "px;width:" + a + "px;}}";
            player.rotatePortraitStyleSheet = document.createElement("style");
            player.rotatePortraitStyleSheet.innerHTML = a;
            document.body.appendChild(player.rotatePortraitStyleSheet);
            player.portraitFrameScale = b;
            player.frameLandscapeStyleSheet = document.createElement("style");
            player.frameLandscapeStyleSheet.media = "only screen and (max-device-width: 1024px) and (orientation:landscape)";
            player.frameLandscapeStyleSheet.innerHTML = e;
            document.body.appendChild(player.frameLandscapeStyleSheet);
            if (self != top)a = a.replace("framewrap", "portrait .framewrap").replace("interstitial", "portrait .interstitial"), player.rotatePortraitFramedStyleSheet = document.createElement("style"), player.rotatePortraitFramedStyleSheet.innerHTML = a, document.body.appendChild(player.rotatePortraitFramedStyleSheet);
        }
    }, Frame.prototype.reorient = function(a) {
        player.hasNavOutsideFrame && player.fitToFrameContainer && player.fitToFrameContainer();
        if (player.iPhoneiOS7Greater)this.reorientiOS7();
        else if ($("#loadingSpinner").css("left",
            Math.floor(window.innerWidth / 2) - 50), $("#loadingSpinner").css("top", Math.floor(window.innerHeight / 2) - 50), $(".blocked").css("left", Math.floor(window.innerWidth / 2) - 50), $(".blocked").css("top", Math.floor(window.innerHeight / 2) - 50), 1 == player.width)player.detectSize();
        else {
            var b = player.isCrossDomainFrame ? window.orientation : top.window.orientation, c = b / 180 == parseInt(b / 180);
            if (a || b != player.lastOrientation) {
                window.scrollTo(0, 0);
                if (!player.isCrossDomainFrame && (player.hasPoppedOut || !player.hasNavOutsideFrame))
                    player.updateFrameOffset &&
                        player.updateFrameOffset(), top.window.scrollTo(player.iosFrameLeft, player.iosFrameTop);
                !player.hasNavOutsideFrame && player.portraitFrameScale && !isNaN(player.portraitFrameScale) && player.landscapeFrameScale && !isNaN(player.landscapeFrameScale) ? c ? (player.frameScale = player.portraitFrameScale, $(document.body).addClass("portrait")) : (player.frameScale = player.landscapeFrameScale, $(document.body).removeClass("portrait")) : $(document.body).removeClass("portrait");
                player.lastOrientation = b;
            }
        }
    }, Frame.prototype.reorientiOS7 =
        function() {
            if (!player.frame.touchStarted) {
                var a = player.isCrossDomainFrame ? window.orientation : top.window.orientation;
                if (player.lastHeight != window.innerHeight || a != player.lastOrientation) {
                    player.lastHeight = window.innerHeight;
                    player.lastOrientation = a;
                    var b = 0, c = 0, d = 1;
                    if ((d = a / 180 != parseInt(a / 180)) && window.innerHeight != screen.width) {
                        if (!player.allowTouchMove) {
                            player.allowTouchMove = !0;
                            if (!player.scrollDiv)
                                player.scrollDiv = document.createElement("div"), player.scrollDiv.style.position = "absolute", player.scrollDiv.style.visibility =
                                    "visible", player.scrollDiv.style.width = "1px", player.scrollDiv.style.height = screen.width + 40 + "px";
                            document.body.appendChild(player.scrollDiv);
                        }
                        d = window.innerHeight / story.frameHeight;
                        b = (screen.height - story.frameWidth * d) / 2;
                        c = 0;
                    } else {
                        if (player.allowTouchMove)player.allowTouchMove = !1, player.scrollDiv && player.scrollDiv.parentNode && document.body.removeChild(player.scrollDiv);
                        d ? (d = screen.height / story.frameWidth, a = window.innerHeight / story.frameHeight, a < d && (d = a), b = (screen.height - story.frameWidth * d) / 2, c = 0) : (d =
                            window.innerWidth / story.frameWidth, b = 0, c = (window.innerHeight - story.frameHeight * d) / 2);
                    }
                    $(".framewrap").css("-webkit-transform", "translate3d(" + b + "px, " + c + "px, 0px) scale(" + d + ")");
                    player.frameScale = d;
                    player.frame.containerLeft = b;
                    player.frame.containerTop = c;
                    window.scrollTo(0, 0);
                    if (!player.isCrossDomainFrame && (player.hasPoppedOut || !player.hasNavOutsideFrame))player.updateFrameOffset && player.updateFrameOffset(), top.window.scrollTo(player.iosFrameLeft, player.iosFrameTop);
                }
            }
        };
if (-1 < location.search.indexOf("iosmarker=1"))player.isIOSMarkers = !0;
if (player.isIOS || player.isIOSMarkers)
    ExpandingLabel.prototype.togglecontent = function() {
        this.visible = !this.visible;
        this.variables.Expanded = this.visible.toString();
        this.visible ? ($(".above").removeClass("above"), $(".showing").removeClass("showing"), this.hideOthers(), this.showContent = !0, this.render(null, !0, this.width, this.height), this.show(), this.ref.addClass("above showing"), this.button.ref.addClass("above showing"), this.bringtofront(), this.button.bringtofront(), this.handleEvent("onobjectevent", "contentin",
            null, !1, !1, !0)) : (this.hide(), $(".above").removeClass("above"), this.handleEvent("onobjectevent", "contentout", null, !1, !1, !0));
    }, ExpandingLabel.prototype.hidecomplete = function() {
        this.variables.Expanded = "false";
        this.hide();
        $(".above").removeClass("above");
    }, ExpandingLabel.prototype.showtitle = function() {}, ExpandingLabel.prototype.hidetitle = function() {};
player.forceBitMaskTesting = -1 < location.search.indexOf("&pixel=");
player.isLocalFileSystem = "file:" == window.location.protocol;
player.usePixelTesting = (player.isIOS || !player.isLocalFileSystem) && !player.forceBitMaskTesting;
if (player.usePixelTesting)
    VectorShape.prototype.isPointActive = function(a, b) {
        if (!this.visible || !this.vectorHot)return!1;
        var c = this.getCanvasPoint(a, b);
        return 0 >= c.x || 0 >= c.y || c.x >= this.canvas.width || c.y >= this.canvas.height ? !1 : 0 != this.context.getImageData(c.x, c.y, 1, 1).data[3];
    }, StageItem.prototype.testOverlap = function(a) {
        if (0 < $(".modalfence:visible").length)return!1;
        var b = this;
        if ("ItemGroup" == a.innerType || "StateGroup" == a.innerType) {
            var c = !1;
            $.each(a.children, function(a, d) { c = c || b.testOverlap(d); });
            return c;
        }
        if ("ItemGroup" ==
            b.innerType || "StateGroup" == b.innerType)return c = !1, $.each(b.children, function(d, e) { e.testOverlap && (e.setElementProperty("dragX", b.dragX, !0), e.setElementProperty("dragY", b.dragY, !0), c = c || e.testOverlap(a)); }), c;
        var d = this.getAABB(), e = a.getAABB(), c = !0;
        if (d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom)c = !1;
        return this.isRotated ? c && this.testRotatedOverlap(a) : c && this.testPixelOverlap && a.testPixelOverlap ? this.testPixelOverlap(a) : c;
    }, VectorShape.prototype.testPixelOverlap = function(a) {
        if (player.showDebugOverlap) {
            if (!player.testCanvas)
                player.testCanvas =
                    $("<canvas id='test' width='1000' height='1000' style='position:absolute;z-index:200;left:0px;top:0px;'></canvas>"), $("#slideframe").append(player.testCanvas), player.testContext = player.testCanvas.get(0).getContext("2d"), player.testContext.fillStyle = "rgba(255,255,0,0.5)";
            player.testCanvas.show();
            clearTimeout(player.testCanvasClear);
            player.testCanvasClear = setTimeout(function() { player.testCanvas.hide(); }, 1E3);
        }
        var b = this.slideX() + this.dragX, c = this.slideY() + this.dragY, d = 0, e = 0, f = 0, g = 0;
        a.slideX() > b ? (d = a.slideX(),
            e = b + this.width) : (d = b, e = a.slideX() + a.width);
        a.slideY() > c ? (f = a.slideY(), g = c + this.height) : (f = c, g = a.slideY() + a.height);
        b = e - d;
        c = g - f;
        if (!(0 >= b || 0 >= c)) {
            if (player.showDebugOverlap && (!console.filter || this.id == console.filter || a.id == console.filter))player.testContext.fillStyle = "rgba(255,255,0,0.5)", player.testContext.clearRect(0, 0, 1E3, 1E3), player.testContext.fillRect(d, f, b, c);
            for (var c = this.getCanvasPoint(d, f),
                c = this.context.getImageData(c.x, c.y, e - d, g - f).data,
                h = a.getCanvasPoint(d, f),
                e = a.context.getImageData(h.x,
                    h.y, e - d, g - f).data,
                g = 0; g < c.length - 4; g += 256)
                if (0 != c[g + 3] && 0 != e[g + 3]) {
                    var h = d + g / 4 % b, j = f + Math.floor(g / 4 / b), k = a.isPointObscured(h, j, this, function(a) { return a.dropArea; });
                    if (player.showDebugOverlap && (!console.filter || this.id == console.filter || a.id == console.filter))k ? (player.testContext.fillStyle = "rgba(255,0,0,0.9)", player.testContext.fillRect(h - 1, j - 1, 2, 2)) : (player.testContext.fillStyle = "rgba(0,255,0,0.9)", player.testContext.fillRect(h - 2, j - 2, 4, 4));
                    if (!k)return!0;
                }
            return!1;
        }
    };
if (-1 < location.search.indexOf("iosscroll=1"))player.isIOSScroll = !0;
if (!window.AudioContext && window.webkitAudioContext)window.AudioContext = window.webkitAudioContext;
if (window.AudioContext && !player.isLocalFileSystem && -1 == location.search.indexOf("nowebaudio=1"))
    try {
        var createAlias = function(a, b, c) { a[b] || (a[b] = a[c]); };
        player.audioContext = new webkitAudioContext;
        player.hasWebAudio = !0;
        createAlias(player.audioContext, "createGain", "createGainNode");
        createAlias(player.audioContext, "createDelay", "createDelayNode");
        createAlias(player.audioContext, "createScriptProcessor", "createJavaScriptNode");
    } catch (e$$58) {
    }
if (player.audioContext)
    Audio.masterVolume = 0.8, Audio.playbackStates = { UNSCHEDULED: 0, SCHEDULED: 1, PLAYING: 2, FINISHED: 3 }, Audio.decodeOnLoad = !1, Audio.prototype.unblockIfBlocked = function() { if (player.blocked && player.blockedOn == this)player.currentSlide().currentIndex += 1, this.canPlayThrough = !0, player.blockedOn = null, player.unblock(); }, Audio.prototype.loadClip = function() {
            var a = this;
            if (!a.loadStarted) {
                a.source = null;
                var b = a.content.src;
                player.noAudioCache && (b += "?rand=" + Math.random());
                var c = new XMLHttpRequest;
                c.open("GET",
                    b, !0);
                c.responseType = "arraybuffer";
                var d = !1;
                c.onload = function() {
                    a.audioData = c.response;
                    (Audio.decodeOnLoad || a.decodeOnLoad) && a.queueDecode();
                    a.loadRequest = null;
                    a.loadStarted = !1;
                };
                c.onerror = function() { a.unblockIfBlocked(); };
                c.onprogress = function() { d = !0; };
                c.onreadystatechange = function() { d = !0; };
                c.onabort = function() { a.unblockIfBlocked(); };
                player.blockedTimeout = setTimeout(function() { d || a.unblockIfBlocked(); }, 4E3);
                c.send();
                this.loadRequest = c;
                this.loadStarted = !0;
            }
        }, Audio.prototype.decode = function() {
            if (!this.decoding) {
                var a =
                    this;
                this.decoding = Audio.currentlyDecoding = !0;
                player.audioContext.decodeAudioData(a.audioData, function(b) {
                    a.decoding = !1;
                    Audio.currentlyDecoding = !1;
                    a.unblockIfBlocked();
                    a.releaseOnDecode ? a.releaseBuffer() : (a.buffer = b, a.isDecoded = !0, a.canPlayThrough = !0, a.prepared = !0, a.playOnDecode && a.playClip(!0));
                    a.playOnDecode = !1;
                }, function() {
                    a.failedLoad = !0;
                    a.unblockIfBlocked();
                    Audio.currentlyDecoding = !1;
                    a.decoding = !1;
                    a.playOnDecode = !1;
                    a.releaseBuffer();
                });
            }
        }, Audio.prototype.queueDecode = function() {
            var a = this;
            Audio.currentlyDecoding ||
                Slide.currentlyIntegrating ? setTimeout(function() { a.queueDecode(a.audioData); }, 100) : a.decode();
        }, Audio.prototype.createRef = function() {
            if (this.loadStarted)return!1;
            this.loadClip();
            player.webAudioClips[this.getFullObjref()] = this;
            this.currentTime = 0;
            return!0;
        }, Audio.prototype.destroyRef = function() { if (player.isMobile || player.simulateMobileAudio)delete player.webAudioClips[this.getFullObjref()], this.loadRequest = this.audioData = null, this.playOnDecode = this.decodeOnLoad = this.loadStarted = !1, this.releaseBuffer(); },
        Audio.prototype.releaseBuffer = function() {
            if (this.playing && this.source)
                try {
                    this.source.noteOff(0);
                } catch (a) {
                }
            if (player.isMobile || player.simulateMobileAudio)
                this.decoding ? this.releaseOnDecode = !0 : (this.releaseOnDecode = !1, this.interval && window.clearInterval(this.interval), this.interval = null, this.source && this.source.disconnect && this.source.disconnect(), this.volume && this.volume.disconnect && this.volume.disconnect(), this.source = this.volume = this.buffer = null, this.prepared = this.canPlayThrough = this.isDecoded =
                    !1);
        }, Audio.prototype.prep = function() {}, Audio.prototype.prePlayClip = function() {
            var a = StoryEvent.currentEvent || player.currentTimelineEvent;
            if (a) {
                var b = "TimelineEvent" == a.type, a = a.isUserInitiated && !b;
                this.syncToTimeline = b && (!a || player.currentClipSyncToTimeline && player.currentClip == this);
                this.lastStartTime = isNaN(player.currentClipStartTime) ? player.activeTimeline.currentTime : player.currentClipStartTime;
            }
        }, Audio.prototype.playClip = function(a) {
            var b = this;
            if (this.failedLoad)return!1;
            a || this.prePlayClip();
            if (this.audioData && !this.isDecoded)b.playOnDecode = !0, this.decode();
            if (!this.prepared)return this.decodeOnLoad = !0, player.block(), player.blockedOn = this, !1;
            if (this.source)
                try {
                    this.source.stop ? this.source.stop(0) : this.source.noteOff(0);
                } catch (c) {
                }
            a = this.layer ? this.layer : player.activeTimeline;
            if (!isNaN(player.currentClipStartTime) && (!isNaN(this.lastStartTime) && this.m_bResumeOnSeek && this.syncToTimeline || player.currentClipSyncToTimeline && player.currentClip == this))
                this.currentTime = (a.currentTime - player.currentClipStartTime) /
                    1E3;
            if (0 > this.currentTime || 1E3 * this.currentTime >= this.content.duration)return!1;
            this.source = player.audioContext.createBufferSource();
            this.source.buffer = this.buffer;
            this.volume = player.audioContext.createGain();
            this.source.connect(this.volume);
            this.volume.connect(player.audioContext.destination);
            this.volume.gain.value = Audio.masterVolume * player.clipVolume;
            this.contextStartTime = this.source.context.currentTime;
            this.currentTimeAtStart = this.currentTime;
            this.source.start ? this.source.start(0, this.currentTime,
                this.content.duration / 1E3 - this.currentTime) : 0 == this.currentTime ? this.source.noteOn(0) : this.source.noteGrainOn(0, this.currentTime, this.content.duration / 1E3 - this.currentTime - 0.1);
            this.playing = !0;
            this.interval && window.clearInterval(this.interval);
            this.interval = window.setInterval(function() {
                if (b.source.playbackState == Audio.playbackStates.FINISHED && (window.clearInterval(b.interval), b.playing)) {
                    b.handleEvent("onmediacomplete");
                    b.playing = !1;
                    if (b.syncToTimeline)b.m_bResumeOnSeek = !0;
                    b.releaseBuffer();
                }
            }, 10);
            return!0;
        }, Audio.prototype.pauseClip = function(a) {
            this.playOnDecode = !1;
            if (this.source) {
                this.interval && window.clearInterval(this.interval);
                try {
                    this.source.stop ? this.source.stop(0) : this.source.noteOff(0);
                } catch (b) {
                }
                if (this.playing && a)this.handleEvent("onmediacomplete"), this.playing = !1, this.releaseBuffer();
                this.playing = !1;
            }
        }, Audio.prototype.getCurrentTime = function() {
            if (this.source && this.source.context && !isNaN(this.source.context.currentTime)) {
                var a = this.source.context.currentTime - this.contextStartTime + this.currentTimeAtStart;
                return isNaN(a) ? 0 : a;
            }
            return 0;
        }, Audio.prototype.getScheduled = function() { return this.scheduled; }, Audio.prototype.setScheduled = function(a) { this.scheduled = a; }, Audio.prototype.setCurrentTime = function(a) { this.currentTime = a; }, Audio.prototype.getClip = function() { return this; }, Audio.prototype.getIsPlaying = function() { return this.source ? 2 == this.source.playbackState : !1; }, Audio.prototype.mediaReady = function() { return this.failedLoad ? !0 : this.prepared; }, Audio.iOSPrepare = function() {
            var a = player.audioContext.createOscillator();
            a.type = 0;
            var b = player.audioContext.createGain();
            a.connect(b);
            b.connect(player.audioContext.destination);
            b.gain.value = 0;
            a.start ? a.start(0) : a.noteOn(0);
            try {
                a.stop ? a.stop(0) : a.noteGrainOff(0);
            } catch (c) {
            }
        }, Audio.setMasterVolume = function(a) {
            Audio.masterVolume = a;
            $.each(player.webAudioClips, function(a, c) { if (c.volume)c.volume.gain.value = Audio.masterVolume * player.clipVolume; });
        };