(this["webpackJsonps-p-a-c-e-time"]=this["webpackJsonps-p-a-c-e-time"]||[]).push([[0],{109:function(e,t,a){e.exports=a(216)},114:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=(a(114),a(8)),s=a(81),l=a.n(s),m=a(82),u=a.n(m),p=a(83),d=a.n(p),h=a(84),f=a.n(h),g=a(85),E=a.n(g),k=a(86),b=a.n(k),y=a(87),v=a.n(y),x=a(88),w=a.n(x),D=a(89),S=a.n(D),F=a(90),O=a.n(F),j=a(91),I=a.n(j),N=a(92),C=a.n(N),P=a(58),_=a(40),R=a(41),T=a(49),U=a(48),B=a(5),G=(a(65),a(252)),M=a(31),H=a(51),W=a(245),A=a(248),z=a(249),L=a(250),K=a(220),J=a(256),$=a(253),q=a(99),Q=a(247),V=Object(W.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(H.a)({display:"flex"},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},sectionDesktop:Object(H.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(H.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),buttons:{textTransform:"none",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",fontWeight:600,"&:hover":{backgroundColor:"#fffffc"}}}}));function X(){var e=V(),t=r.a.useState(null),a=Object(M.a)(t,1)[0],n=r.a.useState(null),i=Object(M.a)(n,2),o=i[0],c=i[1],s=Boolean(o),l=Object(q.a)({props:{MuiButtonBase:{disableRipple:!0}}}),m=r.a.createElement($.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:function(){c(null)}},r.a.createElement(J.a,{className:e.buttons},r.a.createElement(K.a,null,"Categories")),r.a.createElement(J.a,{className:e.buttons},r.a.createElement(K.a,null,"Tags")));return r.a.createElement(Q.a,{theme:l},r.a.createElement("div",{className:e.grow},r.a.createElement(A.a,{position:"static",color:"transparent",style:{boxShadow:"none"}},r.a.createElement(z.a,null,r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(L.a,{className:e.buttons,style:{marginRight:90},edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},color:"inherit"},r.a.createElement(K.a,null,"/now")),r.a.createElement(L.a,{className:e.buttons,style:{marginRight:90},color:"inherit"},r.a.createElement(K.a,null,"Categories")),r.a.createElement(L.a,{className:e.buttons,style:{marginRight:90},color:"inherit"},r.a.createElement(K.a,null,"Tags"))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(L.a,{className:e.buttons,"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},r.a.createElement(K.a,null,"|||"))))),m))}var Y=a(254),Z=a(255),ee=a(251),te=Object(W.a)((function(e){return{grow:{flexGrow:1},comment:{color:"#505050",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},inline:{color:"#204060",flexGrow:1,display:"inline",marginRight:10},lowText:{flexGrow:1,display:"inline",marginRight:10,color:"#808080",fontSize:12}}}));function ae(e){var t=te();return void 0!==e.gitIssue?r.a.createElement("div",null,r.a.createElement(Y.a,{display:"flex",flexDirection:"row",p:1},r.a.createElement(Y.a,{p:1},r.a.createElement(Z.a,{src:e.commentData.ImgSrc})),r.a.createElement(Y.a,{p:1},r.a.createElement(K.a,{className:t.inline},e.commentData.userName),r.a.createElement("br",null),r.a.createElement(K.a,{className:t.lowText},e.commentData.createdDateTime),r.a.createElement(ee.a,{target:"_blank",rel:"noopener noreferrer",href:e.commentData.commentUrl,color:"inherit",className:t.lowText},"#",e.commentData.id),r.a.createElement(K.a,{className:t.comment},e.commentData.comment)))):r.a.createElement("div",null)}var ne=a(96),re=a.n(ne).a.create({baseURL:"https://api.github.com/repos/akhil-ghatiki/akhil-ghatiki.github.io",responseType:"json"}),ie=a(97),oe=a.n(ie),ce=(a(213),Object(W.a)((function(e){return{grow:{flexGrow:1},markdownText:{paddingLeft:30,paddingRight:30,paddingBottom:30}}})));function se(e){var t=ce(),a=Object(n.useState)(""),i=Object(M.a)(a,2),o=i[0],c=i[1];Object(n.useEffect)((function(){fetch(e.markDownFilePath).then((function(e){return e.text()})).then((function(e){c(e)}))}),[e.markDownFilePath]);var s=Object(n.useRef)(null),l=function(e){var t=Object(n.useCallback)((function(){return e.current.offsetWidth}),[e]),a=Object(n.useState)(void 0),r=Object(M.a)(a,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){var a=function(){o(t())};return e.current&&o(t()),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[e,t]),i&&i>50?i-50:i}(s),m={image:function(e){var t=e.alt,a=e.src,n=e.title;return r.a.createElement("img",{alt:t,src:a,title:n,style:{maxWidth:l}})}};return r.a.createElement("div",{ref:s,className:"markdown-body"},r.a.createElement(oe.a,{source:o,className:t.markdownText,renderers:m,maxWidth:l}))}var le=function(e){Object(T.a)(a,e);var t=Object(U.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={markDownContent:null,commentsData:[]},n}return Object(R.a)(a,[{key:"componentDidMount",value:function(){this.updateCommentsState()}},{key:"updateCommentsState",value:function(){var e=this;re.get(this.getCommentApiUrl()).then((function(t){e.setState({commentsData:t.data.map((function(t){return e.createCommentData(t)}))})}))}},{key:"createCommentData",value:function(e){var t={};return t.comment=e.body,t.ImgSrc=e.user.avatar_url,t.commentUrl=e.html_url,t.id=e.id,t.userName=e.user.login,t.createdDateTime=e.created_at,t}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.contentFilePath,n=this.getGitIssueUrl(a,"https://github.com/akhil-ghatiki/akhil-ghatiki.github.io/issues/","https://github.com/akhil-ghatiki/ghpages-blog-comments/issues/");return r.a.createElement("div",{className:"App"},r.a.createElement(X,null),r.a.createElement(G.a,{container:!0,justify:"center",className:t.root},r.a.createElement(G.a,{item:!0,xs:12,sm:3.5},r.a.createElement("div",null)),r.a.createElement(G.a,{item:!0,xs:12,sm:5},r.a.createElement("div",null,r.a.createElement(se,{markDownFilePath:this.props.contentFilePath})),r.a.createElement("p",{className:t.commentHeader},"Try adding a comment in ",r.a.createElement("span",null,r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"this issue"))," and it should show up in the comments below"),r.a.createElement(K.a,{className:t.commentHeader,variant:"h6"},"Comments:"),this.state.commentsData.map((function(t){return r.a.createElement(ae,{commentData:t,gitIssue:e.props.gitIssue})}))),r.a.createElement(G.a,{item:!0,xs:12,sm:3.5},r.a.createElement("div",null))))}},{key:"getGitIssueUrl",value:function(e,t,a){return e.includes("Keepwaiting")?t.concat(this.props.gitIssue):a.concat(this.props.gitIssue)}},{key:"getCommentApiUrl",value:function(){return this.props.contentFilePath.includes("Keepwaiting")?"https://api.github.com/repos/akhil-ghatiki/akhil-ghatiki.github.io/issues/"+this.props.gitIssue+"/comments":"https://api.github.com/repos/akhil-ghatiki/ghpages-blog-comments/issues/"+this.props.gitIssue+"/comments"}}],[{key:"getDerivedStateFromProps",value:function(){}}]),a}(n.Component),me=Object(B.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2)},control:{padding:e.spacing(2)},commentHeader:{margin:15},link:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}}}))(le),ue=a(98),pe=a.n(ue),de=function(e){Object(T.a)(a,e);var t=Object(U.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={markDownContent:null,commentsData:[]},n}return Object(R.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"App"},r.a.createElement(X,null),r.a.createElement(G.a,{container:!0,justify:"center",className:e.root},r.a.createElement(G.a,{item:!0,xs:12,sm:2},r.a.createElement("div",null)),r.a.createElement(G.a,{item:!0,xs:12,sm:8},r.a.createElement("div",null,r.a.createElement(se,{markDownFilePath:pe.a}))),r.a.createElement(G.a,{item:!0,xs:12,sm:2},r.a.createElement("div",null))))}}]),a}(n.Component),he=Object(B.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2)},control:{padding:e.spacing(2)},markdownText:{margin:30},link:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}}}))(de),fe="/",ge="/archive",Ee="/keep-waiting",ke="/silk-destiny-1",be="/silk-destiny-2",ye="/silk-destiny-3",ve="/silk-destiny-4",xe="/silk-destiny-5",we="/silk-destiny-6",De="/stolen-future-1",Se="/stolen-future-2",Fe="/stolen-future-3",Oe="/code-smell-katas-graceful-exception-handling";function je(){return r.a.createElement(P.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:fe,render:function(){return r.a.createElement(he,{key:"home"})}}),r.a.createElement(c.a,{path:ge,render:function(){return r.a.createElement(me,{key:"Archive",contentFilePath:l.a,gitIssue:1})}}),r.a.createElement(c.a,{path:Ee,render:function(){return r.a.createElement(me,{key:"keepWaiting",contentFilePath:u.a,gitIssue:1})}}),r.a.createElement(c.a,{path:ke,render:function(){return r.a.createElement(me,{key:"silkDestiny1",contentFilePath:d.a,gitIssue:1})}}),r.a.createElement(c.a,{path:be,render:function(){return r.a.createElement(me,{key:"silkDestiny2",contentFilePath:f.a,gitIssue:2})}}),r.a.createElement(c.a,{path:ye,render:function(){return r.a.createElement(me,{key:"silkDestiny3",contentFilePath:E.a,gitIssue:3})}}),r.a.createElement(c.a,{path:ve,render:function(){return r.a.createElement(me,{key:"silkDestiny4",contentFilePath:b.a,gitIssue:4})}}),r.a.createElement(c.a,{path:xe,render:function(){return r.a.createElement(me,{key:"silkDestiny5",contentFilePath:v.a,gitIssue:5})}}),r.a.createElement(c.a,{path:we,render:function(){return r.a.createElement(me,{key:"silkDestiny6",contentFilePath:w.a,gitIssue:6})}}),r.a.createElement(c.a,{path:De,render:function(){return r.a.createElement(me,{key:"stolenFuture1",contentFilePath:S.a,gitIssue:7})}}),r.a.createElement(c.a,{path:Se,render:function(){return r.a.createElement(me,{key:"stolenFuture2",contentFilePath:O.a,gitIssue:8})}}),r.a.createElement(c.a,{path:Fe,render:function(){return r.a.createElement(me,{key:"stolenFuture3",contentFilePath:I.a,gitIssue:9})}}),r.a.createElement(c.a,{path:Oe,render:function(){return r.a.createElement(me,{key:"codeSmellGracefulExceptionHandling",contentFilePath:C.a,gitIssue:10})}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/Archive.90ee9598.md"},82:function(e,t,a){e.exports=a.p+"static/media/Keepwaiting.64df78da.md"},83:function(e,t,a){e.exports=a.p+"static/media/SilkDestiny_1.22220d60.md"},84:function(e,t,a){e.exports=a.p+"static/media/SilkDestiny_2.a8ca48fb.md"},85:function(e,t,a){e.exports=a.p+"static/media/SilkDestiny_3.1f46caa1.md"},86:function(e,t,a){e.exports=a.p+"static/media/SilkDestiny_4.2dd56ff0.md"},87:function(e,t,a){e.exports=a.p+"static/media/SilkDestiny_5.1770ab53.md"},88:function(e,t,a){e.exports=a.p+"static/media/SilkDestiny_6.2414c114.md"},89:function(e,t,a){e.exports=a.p+"static/media/StolenFuture_1.cf2c41d0.md"},90:function(e,t,a){e.exports=a.p+"static/media/StolenFuture_2.b89bf061.md"},91:function(e,t,a){e.exports=a.p+"static/media/StolenFuture_3.b51c84d3.md"},92:function(e,t,a){e.exports=a.p+"static/media/code_smell_katas_graceful_exception_handling.fc21f107.md"},98:function(e,t,a){e.exports=a.p+"static/media/home.1fb6430e.md"}},[[109,1,2]]]);
//# sourceMappingURL=main.276e75cd.chunk.js.map