(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{176:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c}),t.d(a,"pageQuery",function(){return i});var n=t(0),r=t.n(n),l=t(189);function c(e){var a=e.data.markdownRemark,t=a.frontmatter,n=a.html;return r.a.createElement(l.a,{fullMenu:!0},r.a.createElement("article",{id:"main"},r.a.createElement("header",null,r.a.createElement("h2",null,"Gatherings")),r.a.createElement("section",{className:"wrapper style5"},r.a.createElement("div",{className:"inner"},r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,t.title),r.a.createElement("p",null,t.description))),r.a.createElement("hr",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))))}var i="4286548762"},184:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=t(57),o=t.n(i);t.d(a,"a",function(){return o.a}),t.d(a,"c",function(){return i.navigate});t(185);var s=r.a.createContext({});function u(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,c=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:a,query:t,render:n||l,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},185:function(e,a,t){var n;e.exports=(n=t(187))&&n.default||n},186:function(e){e.exports={data:{site:{siteMetadata:{title:"Overseas Chinese Homecoming Gathering"}}}}},187:function(e,a,t){"use strict";t.r(a);t(16);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=t(82),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},188:function(e,a){e.exports={siteTitle:"Overseas Chinese Homecoming Gathering",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#0abab5",manifestThemeColor:"#0abab5",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/overseas-chinese-homecoming-gathering-website",heading:"Overseas Chinese Homecoming Gathering",subHeading:"It’s the fullness of time, overseas Chinese come home!",socialLinks:[{icon:"fa-youtube",name:"YouTube",url:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/"}]}},189:function(e,a,t){"use strict";var n=t(7),r=t.n(n),l=t(186),c=t(0),i=t.n(c),o=t(12),s=t.n(o),u=t(190),m=t.n(u),d=t(184),f=(t(191),t(35),t(188)),h=t.n(f);function E(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("ul",{className:"icons"},h.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return i.a.createElement("li",{key:n},i.a.createElement("a",{href:n,className:"icon brands "+a},i.a.createElement("span",{className:"label"},t)))})),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"&copy North American Chinese Homecoming Gathering Servant Team (NACC)"),i.a.createElement("li",null,"Design: ",i.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}var p=t(29),g=(t(120),t(121),function(e){return e.path.includes("zh-Hans")?"/zh-Hans":"/"});function v(e){var a=e.onMenuToggle,t=void 0===a?function(){}:a;return i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{className:"special"},i.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),t()},className:"menuToggle"},i.a.createElement("span",null,"Menu")),i.a.createElement("div",{id:"menu"},i.a.createElement(p.Location,null,function(e){var a=e.location.pathname,t=g({path:a});return i.a.createElement("select",{id:"langSelect",value:t,onChange:function(e){e.preventDefault(),Object(d.c)(document.getElementById("langSelect").value)}},i.a.createElement("option",{key:"en",value:"/"},"English"),i.a.createElement("option",{key:"zh-Hans",value:"/zh-Hans"},"简体中文"))}),i.a.createElement("br",null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.a,{to:"/",className:"col-6"},"Home")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/about",className:"col-6"},"About Us")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/gatherings",className:"col-6"},"Gatherings")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/sharings",className:"col-6"},"Sharings")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/giving",className:"col-6"},"Giving")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.flickr.com/photos/182245855@N04/albums",target:"_blank",rel:"noopener noreferrer",className:"col-6"},"Gallery")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA/live",target:"_blank",rel:"noopener noreferrer",className:"col-6"},"Live Stream"))),i.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),t()},href:"#menu"},"")))))}function b(e){var a=e.fullMenu,t=Object(c.useState)(!1),n=t[0],r=t[1];return i.a.createElement("header",{id:"header",className:a?"":"alt"},i.a.createElement("h1",null,i.a.createElement(d.a,{to:"/"},"OCHG")),i.a.createElement("div",{className:n?"is-menu-visible":" "},i.a.createElement(v,{onMenuToggle:function(){return r(!n)}})))}var y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isPreloaded:!0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props,a=e.children,t=e.fullMenu,n=this.state.isPreloaded;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},i.a.createElement("div",{id:"page-wrapper"},i.a.createElement(b,{fullMenu:t}),a,i.a.createElement(E,null))))},data:l})},a}(c.Component);y.propTypes={children:s.a.node.isRequired};a.a=y}}]);
//# sourceMappingURL=component---src-templates-gathering-template-js-4afb64eed8de75180132.js.map