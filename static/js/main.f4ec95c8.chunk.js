(this["webpackJsonps-p-a-c-e-time"] = this["webpackJsonps-p-a-c-e-time"]
    || []).push([[0], {
  104: function (e, t, a) {
    e.exports = a(211)
  }, 109: function (e, t, a) {
  }, 211: function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0), r = a.n(n), i = a(6), o = a.n(i), c = (a(109), a(8)),
        l = a(58), s = a.n(l), m = a(82), u = a.n(m), p = a(83), d = a.n(p),
        h = a(84), f = a.n(h), g = a(85), E = a.n(g), k = a(86), b = a.n(k),
        y = a(87), v = a.n(y), w = a(59), x = a(40), D = a(41), S = a(49),
        O = a(48), j = a(5), N = (a(66), a(247)), F = a(31), C = a(51),
        I = a(240), R = a(243), T = a(244), P = a(245), B = a(215), U = a(251),
        _ = a(248), M = a(94), G = a(242), H = Object(I.a)((function (e) {
          return {
            grow: {flexGrow: 1},
            menuButton: {marginRight: e.spacing(2)},
            title: Object(C.a)({display: "flex"}, e.breakpoints.up("sm"),
                {display: "block"}),
            inputRoot: {color: "inherit"},
            sectionDesktop: Object(C.a)({display: "none"}, e.breakpoints.up("md"),
                {display: "flex"}),
            sectionMobile: Object(C.a)({display: "flex"}, e.breakpoints.up("md"),
                {display: "none"}),
            buttons: {
              textTransform: "none",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              fontWeight: 600,
              "&:hover": {backgroundColor: "#fffffc"}
            }
          }
        }));

    function W() {
      var e = H(), t = r.a.useState(null), a = Object(F.a)(t, 1)[0],
          n = r.a.useState(null), i = Object(F.a)(n, 2), o = i[0], c = i[1],
          l = Boolean(o),
          s = Object(M.a)({props: {MuiButtonBase: {disableRipple: !0}}}),
          m = r.a.createElement(_.a, {
                anchorEl: o,
                anchorOrigin: {vertical: "top", horizontal: "right"},
                id: "primary-search-account-menu-mobile",
                keepMounted: !0,
                transformOrigin: {vertical: "top", horizontal: "right"},
                open: l,
                onClose: function () {
                  c(null)
                }
              }, r.a.createElement(U.a, {className: e.buttons},
              r.a.createElement(B.a, null, "Categories")),
              r.a.createElement(U.a, {className: e.buttons},
                  r.a.createElement(B.a, null, "Tags")),
              r.a.createElement(U.a, {className: e.buttons},
                  r.a.createElement(B.a, null, "Contact")));
      return r.a.createElement(G.a, {theme: s},
          r.a.createElement("div", {className: e.grow}, r.a.createElement(R.a, {
            position: "static",
            color: "transparent",
            style: {boxShadow: "none"}
          }, r.a.createElement(T.a, null,
              r.a.createElement("div", {className: e.grow}),
              r.a.createElement("div", {className: e.sectionDesktop},
                  r.a.createElement(P.a, {
                    className: e.buttons,
                    style: {marginRight: 90},
                    color: "inherit"
                  }, r.a.createElement(B.a, null, "Categories")),
                  r.a.createElement(P.a, {
                    className: e.buttons,
                    style: {marginRight: 90},
                    color: "inherit"
                  }, r.a.createElement(B.a, null, "Tags")),
                  r.a.createElement(P.a, {
                    className: e.buttons,
                    style: {marginRight: 90},
                    edge: "end",
                    "aria-label": "account of current user",
                    "aria-controls": "primary-search-account-menu",
                    "aria-haspopup": "true",
                    onClick: function (e) {
                      a(e.currentTarget)
                    },
                    color: "inherit"
                  }, r.a.createElement(B.a, null, "Contact"))),
              r.a.createElement("div", {className: e.sectionMobile},
                  r.a.createElement(P.a, {
                    className: e.buttons,
                    "aria-label": "show more",
                    "aria-controls": "primary-search-account-menu-mobile",
                    "aria-haspopup": "true",
                    onClick: function (e) {
                      c(e.currentTarget)
                    },
                    color: "inherit"
                  }, r.a.createElement(B.a, null, "|||"))))), m))
    }

    var z = a(249), L = a(250), A = a(246), J = Object(I.a)((function (e) {
      return {
        grow: {flexGrow: 1},
        comment: {
          color: "#505050",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
        },
        inline: {
          color: "#204060",
          flexGrow: 1,
          display: "inline",
          marginRight: 10
        },
        lowText: {
          flexGrow: 1,
          display: "inline",
          marginRight: 10,
          color: "#808080",
          fontSize: 12
        }
      }
    }));

    function K(e) {
      var t = J();
      return void 0 !== e.gitIssue ? r.a.createElement("div", null,
          r.a.createElement(z.a, {display: "flex", flexDirection: "row", p: 1},
              r.a.createElement(z.a, {p: 1},
                  r.a.createElement(L.a, {src: e.commentData.ImgSrc})),
              r.a.createElement(z.a, {p: 1},
                  r.a.createElement(B.a, {className: t.inline},
                      e.commentData.userName), r.a.createElement("br", null),
                  r.a.createElement(B.a, {className: t.lowText},
                      e.commentData.createdDateTime), r.a.createElement(A.a, {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: e.commentData.commentUrl,
                    color: "inherit",
                    className: t.lowText
                  }, "#", e.commentData.id),
                  r.a.createElement(B.a, {className: t.comment},
                      e.commentData.comment)))) : r.a.createElement("div", null)
    }

    var $ = a(91), q = a.n($).a.create({
      baseURL: "https://api.github.com/repos/akhil-ghatiki/akhil-ghatiki.github.io",
      responseType: "json"
    }), Q = a(92), V = a.n(Q), X = (a(208), Object(I.a)((function (e) {
      return {
        grow: {flexGrow: 1},
        markdownText: {paddingLeft: 30, paddingRight: 30, paddingBottom: 30}
      }
    })));

    function Y(e) {
      var t = X(), a = Object(n.useState)(""), i = Object(F.a)(a, 2), o = i[0],
          c = i[1];
      Object(n.useEffect)((function () {
        fetch(e.markDownFilePath).then((function (e) {
          return e.text()
        })).then((function (e) {
          c(e)
        }))
      }), [e.markDownFilePath]);
      var l = Object(n.useRef)(null), s = function (e) {
        var t = Object(n.useCallback)((function () {
              return e.current.offsetWidth
            }), [e]), a = Object(n.useState)(void 0), r = Object(F.a)(a, 2),
            i = r[0], o = r[1];
        return Object(n.useEffect)((function () {
          var a = function () {
            o(t())
          };
          return e.current && o(t()), window.addEventListener("resize",
              a), function () {
            window.removeEventListener("resize", a)
          }
        }), [e, t]), i && i > 50 ? i - 50 : i
      }(l), m = {
        image: function (e) {
          var t = e.alt, a = e.src, n = e.title;
          return r.a.createElement("img",
              {alt: t, src: a, title: n, style: {maxWidth: s}})
        }
      };
      return r.a.createElement("div", {ref: l, className: "markdown-body"},
          r.a.createElement(V.a, {
            source: o,
            className: t.markdownText,
            renderers: m,
            maxWidth: s
          }))
    }

    var Z = function (e) {
          Object(S.a)(a, e);
          var t = Object(O.a)(a);

          function a(e) {
            var n;
            return Object(x.a)(this, a), (n = t.call(this,
                e)).state = {markDownContent: null, commentsData: []}, n
          }

          return Object(D.a)(a, [{
            key: "componentDidMount", value: function () {
              this.updateCommentsState()
            }
          }, {
            key: "updateCommentsState", value: function () {
              var e = this;
              q.get("/issues/1/comments").then((function (t) {
                e.setState({
                  commentsData: t.data.map((function (t) {
                    return e.createCommentData(t)
                  }))
                })
              }))
            }
          }, {
            key: "createCommentData", value: function (e) {
              var t = {};
              return t.comment = e.body, t.ImgSrc = e.user.avatar_url, t.commentUrl = e.html_url, t.id = e.id, t.userName = e.user.login, t.createdDateTime = e.created_at, t
            }
          }, {
            key: "render", value: function () {
              var e = this, t = this.props.classes,
                  a = this.props.contentFilePath.includes("keep-waiting")
                      ? "https://github.com/akhil-ghatiki/akhil-ghatiki.github.io/issues/".concat(
                          this.props.gitIssue)
                      : "https://github.com/akhil-ghatiki/ghpages-blog-comments/issues".concat(
                          this.props.gitIssue);
              return r.a.createElement("div", {className: "App"},
                  r.a.createElement(W, null), r.a.createElement(N.a,
                      {container: !0, justify: "center", className: t.root},
                      r.a.createElement(N.a, {item: !0, xs: 12, sm: 3.5},
                          r.a.createElement("div", null)),
                      r.a.createElement(N.a, {item: !0, xs: 12, sm: 5},
                          r.a.createElement("div", null, r.a.createElement(Y,
                              {markDownFilePath: this.props.contentFilePath})),
                          r.a.createElement("p", {className: t.commentHeader},
                              "Try adding a comment in ",
                              r.a.createElement("span", null, r.a.createElement("a",
                                  {
                                    href: a,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, "this issue")),
                              " and it should show up in the comments below"),
                          r.a.createElement(B.a,
                              {className: t.commentHeader, variant: "h6"},
                              "Comments:"),
                          this.state.commentsData.map((function (t) {
                            return r.a.createElement(K,
                                {commentData: t, gitIssue: e.props.gitIssue})
                          }))), r.a.createElement(N.a, {item: !0, xs: 12, sm: 3.5},
                          r.a.createElement("div", null))))
            }
          }], [{
            key: "getDerivedStateFromProps", value: function () {
            }
          }]), a
        }(n.Component), ee = Object(j.a)((function (e) {
          return {
            root: {flexGrow: 1},
            paper: {padding: e.spacing(2)},
            control: {padding: e.spacing(2)},
            commentHeader: {margin: 15},
            link: {fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}
          }
        }))(Z), te = a(93), ae = a.n(te), ne = function (e) {
          Object(S.a)(a, e);
          var t = Object(O.a)(a);

          function a(e) {
            var n;
            return Object(x.a)(this, a), (n = t.call(this,
                e)).state = {markDownContent: null, commentsData: []}, n
          }

          return Object(D.a)(a, [{
            key: "render", value: function () {
              var e = this.props.classes;
              return r.a.createElement("div", {className: "App"},
                  r.a.createElement(W, null), r.a.createElement(N.a,
                      {container: !0, justify: "center", className: e.root},
                      r.a.createElement(N.a, {item: !0, xs: 12, sm: 2},
                          r.a.createElement("div", null)),
                      r.a.createElement(N.a, {item: !0, xs: 12, sm: 8},
                          r.a.createElement("div", null,
                              r.a.createElement(Y, {markDownFilePath: ae.a}))),
                      r.a.createElement(N.a, {item: !0, xs: 12, sm: 2},
                          r.a.createElement("div", null))))
            }
          }]), a
        }(n.Component), re = Object(j.a)((function (e) {
          return {
            root: {flexGrow: 1},
            paper: {padding: e.spacing(2)},
            control: {padding: e.spacing(2)},
            markdownText: {margin: 30},
            link: {fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}
          }
        }))(ne), ie = "/", oe = "/keep-waiting", ce = "/silk-destiny-1",
        le = "/silk-destiny-2", se = "/silk-destiny-3", me = "/silk-destiny-4",
        ue = "/silk-destiny-5", pe = "/silk-destiny-6";

    function de() {
      return r.a.createElement(w.a, null, r.a.createElement(c.c, null,
          r.a.createElement(c.a, {
            exact: !0, path: ie, render: function () {
              return r.a.createElement(re, {key: "home"})
            }
          }), r.a.createElement(c.a, {
            path: oe, render: function () {
              return r.a.createElement(ee,
                  {key: "keepWaiting", contentFilePath: s.a, gitIssue: 1})
            }
          }), r.a.createElement(c.a, {
            path: ce, render: function () {
              return r.a.createElement(ee,
                  {key: "silkDestiny1", contentFilePath: u.a, gitIssue: 1})
            }
          }), r.a.createElement(c.a, {
            path: le, render: function () {
              return r.a.createElement(ee,
                  {key: "silkDestiny2", contentFilePath: d.a, gitIssue: 2})
            }
          }), r.a.createElement(c.a, {
            path: se, render: function () {
              return r.a.createElement(ee,
                  {key: "silkDestiny3", contentFilePath: f.a, gitIssue: 3})
            }
          }), r.a.createElement(c.a, {
            path: me, render: function () {
              return r.a.createElement(ee,
                  {key: "silkDestiny4", contentFilePath: E.a, gitIssue: 4})
            }
          }), r.a.createElement(c.a, {
            path: ue, render: function () {
              return r.a.createElement(ee,
                  {key: "silkDestiny5", contentFilePath: b.a, gitIssue: 5})
            }
          }), r.a.createElement(c.a, {
            path: pe, render: function () {
              return r.a.createElement(ee,
                  {key: "silkDestiny6", contentFilePath: v.a, gitIssue: 6})
            }
          })))
    }

    Boolean("localhost" === window.location.hostname || "[::1]"
        === window.location.hostname || window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(de, null)),
        document.getElementById("root")), "serviceWorker" in navigator
    && navigator.serviceWorker.ready.then((function (e) {
      e.unregister()
    })).catch((function (e) {
      console.error(e.message)
    }))
  }, 58: function (e, t, a) {
    e.exports = a.p + "static/media/Keepwaiting.64df78da.md"
  }, 66: function (e, t, a) {
  }, 82: function (e, t, a) {
    e.exports = a.p + "static/media/SilkDestiny_1.ee0682d0.md"
  }, 83: function (e, t, a) {
    e.exports = a.p + "static/media/SilkDestiny_2.7d82c2f5.md"
  }, 84: function (e, t, a) {
    e.exports = a.p + "static/media/SilkDestiny_3.eb7a6577.md"
  }, 85: function (e, t, a) {
    e.exports = a.p + "static/media/SilkDestiny_4.19d37890.md"
  }, 86: function (e, t, a) {
    e.exports = a.p + "static/media/SilkDestiny_5.ece45a09.md"
  }, 87: function (e, t, a) {
    e.exports = a.p + "static/media/SilkDestiny_6.18fbf306.md"
  }, 93: function (e, t, a) {
    e.exports = a.p + "static/media/home.e76d1139.md"
  }
}, [[104, 1, 2]]]);
//# sourceMappingURL=main.f4ec95c8.chunk.js.map