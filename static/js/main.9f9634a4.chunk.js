(this["webpackJsonps-p-a-c-e-time"]=this["webpackJsonps-p-a-c-e-time"]||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=(a(92),a(68)),l=a(69),s=a(78),m=a(77),u=a(5),p=(a(93),a(70)),d=a.n(p),h=a(229),f=a(26),g=a(42),b=a(222),E=a(225),v=a(226),k=a(227),y=a(196),w=a(233),x=a(230),O=a(76),D=a(224),j=Object(b.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(g.a)({display:"flex"},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"},sectionDesktop:Object(g.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(g.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),buttons:{textTransform:"none",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",fontWeight:600,"&:hover":{backgroundColor:"#fffffc"}}}}));function N(){var e=j(),t=r.a.useState(null),a=Object(f.a)(t,1)[0],n=r.a.useState(null),o=Object(f.a)(n,2),i=o[0],c=o[1],l=Boolean(i),s=Object(O.a)({props:{MuiButtonBase:{disableRipple:!0}}}),m=r.a.createElement(x.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){c(null)}},r.a.createElement(w.a,{className:e.buttons},r.a.createElement(y.a,null,"Categories")),r.a.createElement(w.a,{className:e.buttons},r.a.createElement(y.a,null,"Tags")),r.a.createElement(w.a,{className:e.buttons},r.a.createElement(y.a,null,"Contact")));return r.a.createElement(D.a,{theme:s},r.a.createElement("div",{className:e.grow},r.a.createElement(E.a,{position:"static",color:"transparent",style:{boxShadow:"none"}},r.a.createElement(v.a,null,r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(k.a,{className:e.buttons,style:{marginRight:90},color:"inherit"},r.a.createElement(y.a,null,"Categories")),r.a.createElement(k.a,{className:e.buttons,style:{marginRight:90},color:"inherit"},r.a.createElement(y.a,null,"Tags")),r.a.createElement(k.a,{className:e.buttons,style:{marginRight:90},edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},color:"inherit"},r.a.createElement(y.a,null,"Contact"))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(k.a,{className:e.buttons,"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},r.a.createElement(y.a,null,"|||"))))),m))}var S=a(231),C=a(232),T=a(228),R=Object(b.a)((function(e){return{grow:{flexGrow:1},comment:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},inline:{display:"inline",marginRight:20},lowText:{display:"inline",marginRight:20,color:"#808080"}}}));function F(e){var t=R();return r.a.createElement("div",null,r.a.createElement(S.a,{display:"flex",flexDirection:"row",p:1},r.a.createElement(S.a,{p:1},r.a.createElement(C.a,{src:e.commentData.ImgSrc})),r.a.createElement(S.a,{p:1},r.a.createElement(y.a,{className:t.inline},e.commentData.userName),r.a.createElement(y.a,{className:t.lowText},e.commentData.createdDateTime),r.a.createElement(T.a,{target:"_blank",rel:"noopener noreferrer",href:e.commentData.commentUrl,color:"inherit",className:t.lowText},"#",e.commentData.id),r.a.createElement(y.a,{className:t.comment},e.commentData.comment))))}var B=a(74),M=a.n(B).a.create({baseURL:"https://api.github.com/repos/akhil-ghatiki/akhil-ghatiki.github.io",responseType:"json"}),U=a(75),I=a.n(U),W=Object(b.a)((function(e){return{grow:{flexGrow:1},markdownText:{paddingLeft:30,paddingRight:30,paddingBottom:30}}}));function _(e){var t=W(),a=Object(n.useState)(""),o=Object(f.a)(a,2),i=o[0],c=o[1];Object(n.useEffect)((function(){fetch(e.markDownFilePath).then((function(e){return e.text()})).then((function(e){c(e)}))}),[e.markDownFilePath]);var l=Object(n.useRef)(null),s=function(e){var t=Object(n.useCallback)((function(){return e.current.offsetWidth}),[e]),a=Object(n.useState)(void 0),r=Object(f.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){var a=function(){i(t())};return e.current&&i(t()),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[e,t]),o&&o>25?o-25:o}(l),m={image:function(e){var t=e.alt,a=e.src,n=e.title;return r.a.createElement("img",{alt:t,src:a,title:n,style:{maxWidth:s}})}};return r.a.createElement("div",{ref:l},r.a.createElement(I.a,{source:i,className:t.markdownText,renderers:m,maxWidth:s}))}var z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={markDownContent:null,commentsData:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateCommentsState()}},{key:"updateCommentsState",value:function(){var e=this;M.get("/issues/1/comments").then((function(t){e.setState({commentsData:t.data.map((function(t){return e.createCommentData(t)}))})}))}},{key:"createCommentData",value:function(e){var t={};return t.comment=e.body,t.ImgSrc=e.user.avatar_url,t.commentUrl=e.html_url,t.id=e.id,t.userName=e.user.login,t.createdDateTime=e.created_at,t}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(h.a,{container:!0,justify:"center",className:e.root},r.a.createElement(h.a,{item:!0,xs:12,sm:2},r.a.createElement("div",null)),r.a.createElement(h.a,{item:!0,xs:12,sm:8},r.a.createElement("div",null,r.a.createElement(_,{markDownFilePath:d.a})),r.a.createElement("p",null,"Try adding a comment in ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/akhil-ghatiki/akhil-ghatiki.github.io/issues/1",target:"_blank",rel:"noopener noreferrer"},"this issue"))," and it should show up in the comments below"),r.a.createElement(y.a,{variant:"h6"},"Comments:"),this.state.commentsData.map((function(e){return r.a.createElement(F,{commentData:e})}))),r.a.createElement(h.a,{item:!0,xs:12,sm:2},r.a.createElement("div",null))))}}]),a}(n.Component),G=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2)},control:{padding:e.spacing(2)},markdownText:{margin:30},link:{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}}}))(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a.p+"static/media/Keepwaiting.ce6a0e7c.md"},87:function(e,t,a){e.exports=a(192)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.9f9634a4.chunk.js.map