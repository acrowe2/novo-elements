/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!(function (e) {
  var n = ('object' == typeof window && window) || ('object' == typeof self && self);
  'undefined' != typeof exports
    ? e(exports)
    : n &&
      ((n.hljs = e({})),
      'function' == typeof define &&
        define.amd &&
        define([], function () {
          return n.hljs;
        }));
})(function (e) {
  function n(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function t(e) {
    return e.nodeName.toLowerCase();
  }
  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 === t.index;
  }
  function a(e) {
    return k.test(e);
  }
  function i(e) {
    var n,
      t,
      r,
      i,
      o = e.className + ' ';
    if (((o += e.parentNode ? e.parentNode.className : ''), (t = B.exec(o)))) return w(t[1]) ? t[1] : 'no-highlight';
    for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++) if (((i = o[n]), a(i) || w(i))) return i;
  }
  function o(e) {
    var n,
      t = {},
      r = Array.prototype.slice.call(arguments, 1);
    for (n in e) t[n] = e[n];
    return (
      r.forEach(function (e) {
        for (n in e) t[n] = e[n];
      }),
      t
    );
  }
  function u(e) {
    var n = [];
    return (
      (function r(e, a) {
        for (var i = e.firstChild; i; i = i.nextSibling)
          3 === i.nodeType
            ? (a += i.nodeValue.length)
            : 1 === i.nodeType &&
              (n.push({ event: 'start', offset: a, node: i }),
              (a = r(i, a)),
              t(i).match(/br|hr|img|input/) || n.push({ event: 'stop', offset: a, node: i }));
        return a;
      })(e, 0),
      n
    );
  }
  function c(e, r, a) {
    function i() {
      return e.length && r.length
        ? e[0].offset !== r[0].offset
          ? e[0].offset < r[0].offset
            ? e
            : r
          : 'start' === r[0].event
          ? e
          : r
        : e.length
        ? e
        : r;
    }
    function o(e) {
      function r(e) {
        return ' ' + e.nodeName + '="' + n(e.value).replace('"', '&quot;') + '"';
      }
      s += '<' + t(e) + E.map.call(e.attributes, r).join('') + '>';
    }
    function u(e) {
      s += '</' + t(e) + '>';
    }
    function c(e) {
      ('start' === e.event ? o : u)(e.node);
    }
    for (var l = 0, s = '', f = []; e.length || r.length; ) {
      var g = i();
      if (((s += n(a.substring(l, g[0].offset))), (l = g[0].offset), g === e)) {
        f.reverse().forEach(u);
        do c(g.splice(0, 1)[0]), (g = i());
        while (g === e && g.length && g[0].offset === l);
        f.reverse().forEach(o);
      } else 'start' === g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0]);
    }
    return s + n(a.substr(l));
  }
  function l(e) {
    return (
      e.v &&
        !e.cached_variants &&
        (e.cached_variants = e.v.map(function (n) {
          return o(e, { v: null }, n);
        })),
      e.cached_variants || (e.eW && [o(e)]) || [e]
    );
  }
  function s(e) {
    function n(e) {
      return (e && e.source) || e;
    }
    function t(t, r) {
      return new RegExp(n(t), 'm' + (e.cI ? 'i' : '') + (r ? 'g' : ''));
    }
    function r(a, i) {
      if (!a.compiled) {
        if (((a.compiled = !0), (a.k = a.k || a.bK), a.k)) {
          var o = {},
            u = function (n, t) {
              e.cI && (t = t.toLowerCase()),
                t.split(' ').forEach(function (e) {
                  var t = e.split('|');
                  o[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                });
            };
          'string' == typeof a.k
            ? u('keyword', a.k)
            : x(a.k).forEach(function (e) {
                u(e, a.k[e]);
              }),
            (a.k = o);
        }
        (a.lR = t(a.l || /\w+/, !0)),
          i &&
            (a.bK && (a.b = '\\b(' + a.bK.split(' ').join('|') + ')\\b'),
            a.b || (a.b = /\B|\b/),
            (a.bR = t(a.b)),
            a.e || a.eW || (a.e = /\B|\b/),
            a.e && (a.eR = t(a.e)),
            (a.tE = n(a.e) || ''),
            a.eW && i.tE && (a.tE += (a.e ? '|' : '') + i.tE)),
          a.i && (a.iR = t(a.i)),
          null == a.r && (a.r = 1),
          a.c || (a.c = []),
          (a.c = Array.prototype.concat.apply(
            [],
            a.c.map(function (e) {
              return l('self' === e ? a : e);
            }),
          )),
          a.c.forEach(function (e) {
            r(e, a);
          }),
          a.starts && r(a.starts, i);
        var c = a.c
          .map(function (e) {
            return e.bK ? '\\.?(' + e.b + ')\\.?' : e.b;
          })
          .concat([a.tE, a.i])
          .map(n)
          .filter(Boolean);
        a.t = c.length
          ? t(c.join('|'), !0)
          : {
              exec: function () {
                return null;
              },
            };
      }
    }
    r(e);
  }
  function f(e, t, a, i) {
    function o(e, n) {
      var t, a;
      for (t = 0, a = n.c.length; a > t; t++) if (r(n.c[t].bR, e)) return n.c[t];
    }
    function u(e, n) {
      if (r(e.eR, n)) {
        for (; e.endsParent && e.parent; ) e = e.parent;
        return e;
      }
      return e.eW ? u(e.parent, n) : void 0;
    }
    function c(e, n) {
      return !a && r(n.iR, e);
    }
    function l(e, n) {
      var t = N.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t];
    }
    function p(e, n, t, r) {
      var a = r ? '' : I.classPrefix,
        i = '<span class="' + a,
        o = t ? '' : C;
      return (i += e + '">'), i + n + o;
    }
    function h() {
      var e, t, r, a;
      if (!E.k) return n(k);
      for (a = '', t = 0, E.lR.lastIndex = 0, r = E.lR.exec(k); r; )
        (a += n(k.substring(t, r.index))),
          (e = l(E, r)),
          e ? ((B += e[1]), (a += p(e[0], n(r[0])))) : (a += n(r[0])),
          (t = E.lR.lastIndex),
          (r = E.lR.exec(k));
      return a + n(k.substr(t));
    }
    function d() {
      var e = 'string' == typeof E.sL;
      if (e && !y[E.sL]) return n(k);
      var t = e ? f(E.sL, k, !0, x[E.sL]) : g(k, E.sL.length ? E.sL : void 0);
      return E.r > 0 && (B += t.r), e && (x[E.sL] = t.top), p(t.language, t.value, !1, !0);
    }
    function b() {
      (L += null != E.sL ? d() : h()), (k = '');
    }
    function v(e) {
      (L += e.cN ? p(e.cN, '', !0) : ''), (E = Object.create(e, { parent: { value: E } }));
    }
    function m(e, n) {
      if (((k += e), null == n)) return b(), 0;
      var t = o(n, E);
      if (t) return t.skip ? (k += n) : (t.eB && (k += n), b(), t.rB || t.eB || (k = n)), v(t, n), t.rB ? 0 : n.length;
      var r = u(E, n);
      if (r) {
        var a = E;
        a.skip ? (k += n) : (a.rE || a.eE || (k += n), b(), a.eE && (k = n));
        do E.cN && (L += C), E.skip || (B += E.r), (E = E.parent);
        while (E !== r.parent);
        return r.starts && v(r.starts, ''), a.rE ? 0 : n.length;
      }
      if (c(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || '<unnamed>') + '"');
      return (k += n), n.length || 1;
    }
    var N = w(e);
    if (!N) throw new Error('Unknown language: "' + e + '"');
    s(N);
    var R,
      E = i || N,
      x = {},
      L = '';
    for (R = E; R !== N; R = R.parent) R.cN && (L = p(R.cN, '', !0) + L);
    var k = '',
      B = 0;
    try {
      for (var M, j, O = 0; ; ) {
        if (((E.t.lastIndex = O), (M = E.t.exec(t)), !M)) break;
        (j = m(t.substring(O, M.index), M[0])), (O = M.index + j);
      }
      for (m(t.substr(O)), R = E; R.parent; R = R.parent) R.cN && (L += C);
      return { r: B, value: L, language: e, top: E };
    } catch (T) {
      if (T.message && -1 !== T.message.indexOf('Illegal')) return { r: 0, value: n(t) };
      throw T;
    }
  }
  function g(e, t) {
    t = t || I.languages || x(y);
    var r = { r: 0, value: n(e) },
      a = r;
    return (
      t.filter(w).forEach(function (n) {
        var t = f(n, e, !1);
        (t.language = n), t.r > a.r && (a = t), t.r > r.r && ((a = r), (r = t));
      }),
      a.language && (r.second_best = a),
      r
    );
  }
  function p(e) {
    return I.tabReplace || I.useBR
      ? e.replace(M, function (e, n) {
          return I.useBR && '\n' === e ? '<br>' : I.tabReplace ? n.replace(/\t/g, I.tabReplace) : '';
        })
      : e;
  }
  function h(e, n, t) {
    var r = n ? L[n] : t,
      a = [e.trim()];
    return e.match(/\bhljs\b/) || a.push('hljs'), -1 === e.indexOf(r) && a.push(r), a.join(' ').trim();
  }
  function d(e) {
    var n,
      t,
      r,
      o,
      l,
      s = i(e);
    a(s) ||
      (I.useBR
        ? ((n = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')),
          (n.innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n')))
        : (n = e),
      (l = n.textContent),
      (r = s ? f(s, l, !0) : g(l)),
      (t = u(n)),
      t.length &&
        ((o = document.createElementNS('http://www.w3.org/1999/xhtml', 'div')), (o.innerHTML = r.value), (r.value = c(t, u(o), l))),
      (r.value = p(r.value)),
      (e.innerHTML = r.value),
      (e.className = h(e.className, s, r.language)),
      (e.result = { language: r.language, re: r.r }),
      r.second_best && (e.second_best = { language: r.second_best.language, re: r.second_best.r }));
  }
  function b(e) {
    I = o(I, e);
  }
  function v() {
    if (!v.called) {
      v.called = !0;
      var e = document.querySelectorAll('pre code');
      E.forEach.call(e, d);
    }
  }
  function m() {
    addEventListener('DOMContentLoaded', v, !1), addEventListener('load', v, !1);
  }
  function N(n, t) {
    var r = (y[n] = t(e));
    r.aliases &&
      r.aliases.forEach(function (e) {
        L[e] = n;
      });
  }
  function R() {
    return x(y);
  }
  function w(e) {
    return (e = (e || '').toLowerCase()), y[e] || y[L[e]];
  }
  var E = [],
    x = Object.keys,
    y = {},
    L = {},
    k = /^(no-?highlight|plain|text)$/i,
    B = /\blang(?:uage)?-([\w-]+)\b/i,
    M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    C = '</span>',
    I = { classPrefix: 'hljs-', tabReplace: null, useBR: !1, languages: void 0 };
  return (
    (e.highlight = f),
    (e.highlightAuto = g),
    (e.fixMarkup = p),
    (e.highlightBlock = d),
    (e.configure = b),
    (e.initHighlighting = v),
    (e.initHighlightingOnLoad = m),
    (e.registerLanguage = N),
    (e.listLanguages = R),
    (e.getLanguage = w),
    (e.inherit = o),
    (e.IR = '[a-zA-Z]\\w*'),
    (e.UIR = '[a-zA-Z_]\\w*'),
    (e.NR = '\\b\\d+(\\.\\d+)?'),
    (e.CNR = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
    (e.BNR = '\\b(0b[01]+)'),
    (e.RSR =
      '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
    (e.BE = { b: '\\\\[\\s\\S]', r: 0 }),
    (e.ASM = { cN: 'string', b: "'", e: "'", i: '\\n', c: [e.BE] }),
    (e.QSM = { cN: 'string', b: '"', e: '"', i: '\\n', c: [e.BE] }),
    (e.PWM = {
      b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    }),
    (e.C = function (n, t, r) {
      var a = e.inherit({ cN: 'comment', b: n, e: t, c: [] }, r || {});
      return a.c.push(e.PWM), a.c.push({ cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0 }), a;
    }),
    (e.CLCM = e.C('//', '$')),
    (e.CBCM = e.C('/\\*', '\\*/')),
    (e.HCM = e.C('#', '$')),
    (e.NM = { cN: 'number', b: e.NR, r: 0 }),
    (e.CNM = { cN: 'number', b: e.CNR, r: 0 }),
    (e.BNM = { cN: 'number', b: e.BNR, r: 0 }),
    (e.CSSNM = {
      cN: 'number',
      b: e.NR + '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
      r: 0,
    }),
    (e.RM = { cN: 'regexp', b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }),
    (e.TM = { cN: 'title', b: e.IR, r: 0 }),
    (e.UTM = { cN: 'title', b: e.UIR, r: 0 }),
    (e.METHOD_GUARD = { b: '\\.\\s*' + e.UIR, r: 0 }),
    e
  );
});
hljs.registerLanguage('json', function (e) {
  var i = { literal: 'true false null' },
    n = [e.QSM, e.CNM],
    r = { e: ',', eW: !0, eE: !0, c: n, k: i },
    t = { b: '{', e: '}', c: [{ cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n' }, e.inherit(r, { b: /:/ })], i: '\\S' },
    c = { b: '\\[', e: '\\]', c: [e.inherit(r)], i: '\\S' };
  return n.splice(n.length, 0, t, c), { c: n, k: i, i: '\\S' };
});
hljs.registerLanguage('bash', function (e) {
  var t = { cN: 'variable', v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
    s = { cN: 'string', b: /"/, e: /"/, c: [e.BE, t, { cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE] }] },
    a = { cN: 'string', b: /'/, e: /'/ };
  return {
    aliases: ['sh', 'zsh'],
    l: /\b-?[a-z\._]+\b/,
    k: {
      keyword: 'if then else elif fi for while in do done case esac function',
      literal: 'true false',
      built_in:
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
      _: '-ne -eq -lt -gt -f -d -e -s -l -a',
    },
    c: [
      { cN: 'meta', b: /^#![^\n]+sh\s*$/, r: 10 },
      { cN: 'function', b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 },
      e.HCM,
      s,
      a,
      t,
    ],
  };
});
hljs.registerLanguage('xml', function (s) {
  var e = '[A-Za-z0-9\\._:-]+',
    t = {
      eW: !0,
      i: /</,
      r: 0,
      c: [
        { cN: 'attr', b: e, r: 0 },
        { b: /=\s*/, r: 0, c: [{ cN: 'string', endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] },
      ],
    };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    cI: !0,
    c: [
      { cN: 'meta', b: '<!DOCTYPE', e: '>', r: 10, c: [{ b: '\\[', e: '\\]' }] },
      s.C('<!--', '-->', { r: 10 }),
      { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', r: 10 },
      { b: /<\?(php)?/, e: /\?>/, sL: 'php', c: [{ b: '/\\*', e: '\\*/', skip: !0 }] },
      { cN: 'tag', b: '<style(?=\\s|>|$)', e: '>', k: { name: 'style' }, c: [t], starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] } },
      {
        cN: 'tag',
        b: '<script(?=\\s|>|$)',
        e: '>',
        k: { name: 'script' },
        c: [t],
        starts: { e: '</script>', rE: !0, sL: ['actionscript', 'javascript', 'handlebars', 'xml'] },
      },
      {
        cN: 'meta',
        v: [
          { b: /<\?xml/, e: /\?>/, r: 10 },
          { b: /<\?\w+/, e: /\?>/ },
        ],
      },
      { cN: 'tag', b: '</?', e: '/?>', c: [{ cN: 'name', b: /[^\/><\s]+/, r: 0 }, t] },
    ],
  };
});
hljs.registerLanguage('markdown', function (e) {
  return {
    aliases: ['md', 'mkdown', 'mkd'],
    c: [
      { cN: 'section', v: [{ b: '^#{1,6}', e: '$' }, { b: '^.+?\\n[=-]{2,}$' }] },
      { b: '<', e: '>', sL: 'xml', r: 0 },
      { cN: 'bullet', b: '^([*+-]|(\\d+\\.))\\s+' },
      { cN: 'strong', b: '[*_]{2}.+?[*_]{2}' },
      { cN: 'emphasis', v: [{ b: '\\*.+?\\*' }, { b: '_.+?_', r: 0 }] },
      { cN: 'quote', b: '^>\\s+', e: '$' },
      { cN: 'code', v: [{ b: '^```w*s*$', e: '^```s*$' }, { b: '`.+?`' }, { b: '^( {4}|	)', e: '$', r: 0 }] },
      { b: '^[-\\*]{3,}', e: '$' },
      {
        b: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
        rB: !0,
        c: [
          { cN: 'string', b: '\\[', e: '\\]', eB: !0, rE: !0, r: 0 },
          { cN: 'link', b: '\\]\\(', e: '\\)', eB: !0, eE: !0 },
          { cN: 'symbol', b: '\\]\\[', e: '\\]', eB: !0, eE: !0 },
        ],
        r: 10,
      },
      {
        b: /^\[[^\n]+\]:/,
        rB: !0,
        c: [
          { cN: 'symbol', b: /\[/, e: /\]/, eB: !0, eE: !0 },
          { cN: 'link', b: /:\s*/, e: /$/, eB: !0 },
        ],
      },
    ],
  };
});
hljs.registerLanguage('scss', function (e) {
  var t = '[a-zA-Z-][a-zA-Z0-9_-]*',
    i = { cN: 'variable', b: '(\\$' + t + ')\\b' },
    r = { cN: 'number', b: '#[0-9A-Fa-f]+' };
  ({
    cN: 'attribute',
    b: '[A-Z\\_\\.\\-]+',
    e: ':',
    eE: !0,
    i: '[^\\s]',
    starts: { eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: 'meta', b: '!important' }] },
  });
  return {
    cI: !0,
    i: "[=/|']",
    c: [
      e.CLCM,
      e.CBCM,
      { cN: 'selector-id', b: '\\#[A-Za-z0-9_-]+', r: 0 },
      { cN: 'selector-class', b: '\\.[A-Za-z0-9_-]+', r: 0 },
      { cN: 'selector-attr', b: '\\[', e: '\\]', i: '$' },
      {
        cN: 'selector-tag',
        b: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        r: 0,
      },
      {
        b: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)',
      },
      { b: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)' },
      i,
      {
        cN: 'attribute',
        b: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
        i: '[^\\s]',
      },
      {
        b: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b',
      },
      { b: ':', e: ';', c: [i, r, e.CSSNM, e.QSM, e.ASM, { cN: 'meta', b: '!important' }] },
      {
        b: '@',
        e: '[{;]',
        k: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
        c: [i, e.QSM, e.ASM, r, e.CSSNM, { b: '\\s[A-Za-z0-9_.-]+', r: 0 }],
      },
    ],
  };
});
hljs.registerLanguage('css', function (e) {
  var c = '[a-zA-Z-][a-zA-Z0-9_-]*',
    t = {
      b: /[A-Z\_\.\-]+\s*:/,
      rB: !0,
      e: ';',
      eW: !0,
      c: [
        {
          cN: 'attribute',
          b: /\S/,
          e: ':',
          eE: !0,
          starts: {
            eW: !0,
            eE: !0,
            c: [
              {
                b: /[\w-]+\(/,
                rB: !0,
                c: [
                  { cN: 'built_in', b: /[\w-]+/ },
                  { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] },
                ],
              },
              e.CSSNM,
              e.QSM,
              e.ASM,
              e.CBCM,
              { cN: 'number', b: '#[0-9A-Fa-f]+' },
              { cN: 'meta', b: '!important' },
            ],
          },
        },
      ],
    };
  return {
    cI: !0,
    i: /[=\/|'\$]/,
    c: [
      e.CBCM,
      { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ },
      { cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/ },
      { cN: 'selector-attr', b: /\[/, e: /\]/, i: '$' },
      { cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
      { b: '@(font-face|page)', l: '[a-z-]+', k: 'font-face page' },
      {
        b: '@',
        e: '[{;]',
        i: /:/,
        c: [
          { cN: 'keyword', b: /\w+/ },
          { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] },
        ],
      },
      { cN: 'selector-tag', b: c, r: 0 },
      { b: '{', e: '}', i: /\S/, c: [e.CBCM, t] },
    ],
  };
});
hljs.registerLanguage('typescript', function (e) {
  var r = {
    keyword:
      'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
    literal: 'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise',
  };
  return {
    aliases: ['ts'],
    k: r,
    c: [
      { cN: 'meta', b: /^\s*['"]use strict['"]/ },
      e.ASM,
      e.QSM,
      { cN: 'string', b: '`', e: '`', c: [e.BE, { cN: 'subst', b: '\\$\\{', e: '\\}' }] },
      e.CLCM,
      e.CBCM,
      { cN: 'number', v: [{ b: '\\b(0[bB][01]+)' }, { b: '\\b(0[oO][0-7]+)' }, { b: e.CNR }], r: 0 },
      {
        b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
        k: 'return throw case',
        c: [
          e.CLCM,
          e.CBCM,
          e.RM,
          {
            cN: 'function',
            b: '(\\(.*?\\)|' + e.IR + ')\\s*=>',
            rB: !0,
            e: '\\s*=>',
            c: [
              { cN: 'params', v: [{ b: e.IR }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: ['self', e.CLCM, e.CBCM] }] },
            ],
          },
        ],
        r: 0,
      },
      {
        cN: 'function',
        b: 'function',
        e: /[\{;]/,
        eE: !0,
        k: r,
        c: [
          'self',
          e.inherit(e.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
          { cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: [e.CLCM, e.CBCM], i: /["'\(]/ },
        ],
        i: /%/,
        r: 0,
      },
      {
        bK: 'constructor',
        e: /\{/,
        eE: !0,
        c: ['self', { cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: [e.CLCM, e.CBCM], i: /["'\(]/ }],
      },
      { b: /module\./, k: { built_in: 'module' }, r: 0 },
      { bK: 'module', e: /\{/, eE: !0 },
      { bK: 'interface', e: /\{/, eE: !0, k: 'interface extends' },
      { b: /\$[(.]/ },
      { b: '\\.' + e.IR, r: 0 },
      { cN: 'meta', b: '@[A-Za-z]+' },
    ],
  };
});
