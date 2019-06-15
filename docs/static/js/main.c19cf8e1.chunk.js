(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function(e, t, a) {
      e.exports = a(18);
    },
    16: function(e, t, a) {},
    17: function(e, t, a) {},
    18: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(8),
        l = a.n(c),
        s = (a(16), a(1)),
        i = a(2),
        o = a(4),
        m = a(3),
        u = a(5),
        d =
          (a(17),
          (function(e) {
            function t(e) {
              var a;
              return (
                Object(s.a)(this, t),
                ((a = Object(o.a)(
                  this,
                  Object(m.a)(t).call(this, e)
                ))._refreshList = function() {
                  a.setState({
                    requests: performance
                      .getEntriesByType('resource')
                      .filter(function(e) {
                        return e.name.indexOf(a.props.filter) > -1;
                      }),
                  });
                }),
                (a.state = { requests: [] }),
                a
              );
            }
            return (
              Object(u.a)(t, e),
              Object(i.a)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.intervalHandle = setInterval(this._refreshList, 200);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    clearInterval(this.intervalHandle);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    return r.a.createElement(
                      'div',
                      { className: 'section' },
                      r.a.createElement('h3', null, 'Network Inspector:'),
                      r.a.createElement(
                        'table',
                        null,
                        r.a.createElement(
                          'tr',
                          null,
                          r.a.createElement(
                            'th',
                            null,
                            'Time from Page load(ms)'
                          ),
                          r.a.createElement('th', null, 'Resource URL'),
                          r.a.createElement(
                            'th',
                            null,
                            'Time Taken to Download(ms)'
                          )
                        ),
                        this.state.requests.map(function(e) {
                          return r.a.createElement(
                            'tr',
                            null,
                            r.a.createElement(
                              'td',
                              null,
                              Math.round(e.startTime)
                            ),
                            r.a.createElement('td', null, e.name),
                            r.a.createElement(
                              'td',
                              null,
                              Math.round(e.duration)
                            )
                          );
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        h = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(o.a)(this, Object(m.a)(t).call(this, e))).state = {
                clicked: !1,
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    'div',
                    { class: 'section' },
                    r.a.createElement(
                      'div',
                      {
                        class: 'cta-button',
                        onClick: function() {
                          return e.setState({ clicked: !0 });
                        },
                      },
                      'Click to show image'
                    ),
                    this.state.clicked
                      ? r.a.createElement('img', {
                          src:
                            'https://assets.imgix.net/examples/kingfisher.jpg?w=200&rand=' +
                            this.props.rand,
                          alt: '',
                        })
                      : null
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        f = a(9),
        p = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(o.a)(this, Object(m.a)(t).call(this, e))).state = {
                clicked: !1,
              }),
              (a.imageUrl =
                'https://assets.imgix.net/examples/kingfisher.jpg?w=200&rand=' +
                a.props.rand),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    'div',
                    { class: 'section' },
                    r.a.createElement(
                      f.a,
                      { onRenderAssets: [this.imageUrl] },
                      r.a.createElement(
                        'div',
                        {
                          class: 'cta-button',
                          onClick: function() {
                            return e.setState({ clicked: !0 });
                          },
                        },
                        'Click to show image'
                      )
                    ),
                    this.state.clicked
                      ? r.a.createElement('img', {
                          src: this.imageUrl,
                          alt: '',
                        })
                      : null
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        v = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).noPrefetchRand = Math.random()),
              (a.onRenderPrefetchRand = Math.random()),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'div',
                    { className: 'App' },
                    r.a.createElement(
                      'div',
                      { className: 'header' },
                      r.a.createElement(
                        'span',
                        { className: 'title' },
                        'Component without any Prefetching'
                      ),
                      r.a.createElement(
                        'a',
                        {
                          className: 'code-link',
                          href:
                            'https://github.com/manojVivek/react-prefetcher/blob/master/demo/src/components/NoPrefetchApp/index.js',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        '(see code)'
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'wrapper' },
                      r.a.createElement(
                        'div',
                        { className: 'left' },
                        r.a.createElement(h, { rand: this.noPrefetchRand })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'right' },
                        r.a.createElement(d, { filter: this.noPrefetchRand })
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'header' },
                      r.a.createElement(
                        'span',
                        { className: 'title' },
                        'Component with OnRender Prefetching'
                      ),
                      r.a.createElement(
                        'a',
                        {
                          className: 'code-link',
                          href:
                            'https://github.com/manojVivek/react-prefetcher/blob/master/demo/src/components/OnRenderPrefetchApp/index.js',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        '(see code)'
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'wrapper' },
                      r.a.createElement(
                        'div',
                        { className: 'left' },
                        r.a.createElement(p, {
                          rand: this.onRenderPrefetchRand,
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'right' },
                        r.a.createElement(d, {
                          filter: this.onRenderPrefetchRand,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(r.a.createElement(v, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[10, 1, 2]],
]);
//# sourceMappingURL=main.c19cf8e1.chunk.js.map
