(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{190:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(202),i={giving:"奉獻",check:"支票",check_description_html:'請將支票寫給 <b><i><u>Travis Christian Assembly</u></i></b> 並於備忘註明 <b><i><u>"Overseas Chinese Homecoming Gathering"</u></i></b>，郵寄到以下地址：',zelle:"Zelle",zelle_description_html:'在使用Zelle（例如：Chase QuickPay）作為奉獻方式時，請於收款人一項填入 <b><i><u>chase@tcaweb.org</u></i></b>，並於備忘註明 <b><i><u>"Overseas Chinese Homecoming Gathering"</u></i></b>。',paypal:"PayPal",paypal_description:"信用卡以及借記卡均可用於在線支付，請點擊下方按鈕。",paypal_button_text:"在線奉獻"};a.default=function(){return l.a.createElement(r.a,{intl:i})}},193:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),l=t.n(n),r=t(12),i=t.n(r),c=t(57),s=t.n(c);t.d(a,"a",function(){return s.a}),t.d(a,"c",function(){return c.navigate});t(194);var o=l.a.createContext({});function u(e){var a=e.staticQueryData,t=e.data,n=e.query,r=e.render,i=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,i&&r(i),!i&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,r=e.children;return l.a.createElement(o.Consumer,null,function(e){return l.a.createElement(u,{data:a,query:t,render:n||r,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},194:function(e,a,t){var n;e.exports=(n=t(196))&&n.default||n},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Overseas Chinese Homecoming Gathering"}}}}},196:function(e,a,t){"use strict";t.r(a);t(16);var n=t(0),l=t.n(n),r=t(12),i=t.n(r),c=t(82),s=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},197:function(e,a){e.exports={siteTitle:"Overseas Chinese Homecoming Gathering",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#0abab5",manifestThemeColor:"#0abab5",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/overseas-chinese-homecoming-gathering-website",heading:"Overseas Chinese Homecoming Gathering",subHeading:"It’s the fullness of time, overseas Chinese come home!",socialLinks:[{icon:"fa-youtube",name:"YouTube",url:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/"}]}},198:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=t(195),i=t(0),c=t.n(i),s=t(12),o=t.n(s),u=t(199),m=t.n(u),h=t(193),g=(t(200),t(35),t(197)),d=t.n(g);function p(){return c.a.createElement("footer",{id:"footer"},c.a.createElement("ul",{className:"icons"},d.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return c.a.createElement("li",{key:n},c.a.createElement("a",{href:n,className:"icon brands "+a},c.a.createElement("span",{className:"label"},t)))})),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"&copy North American Chinese Homecoming Gathering Servant Team (NACC)"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}var E=t(29),f=(t(120),t(121),function(e){var a=e.path;return a.includes("zh-Hans")?"zh-Hans":a.includes("zh-Hant")?"zh-Hant":"en"}),v={en:{menu:"Menu",home:"Home",about_us:"About Us",gatherings:"Gatherings",sharings:"Sharings",giving:"Giving",gallery:"Gallery",live_stream:"Live Stream"},"zh-Hans":{menu:"菜单",home:"首页",about_us:"关于我们",gatherings:"回家聚集",sharings:"信息分享",giving:"奉献",gallery:"图集",live_stream:"在线直播"},"zh-Hant":{menu:"菜單",home:"首頁",about_us:"關於我們",gatherings:"回家聚集",sharings:"信息分享",giving:"奉獻",gallery:"圖集",live_stream:"在線直播"}},b={en:"/","zh-Hans":"/zh-Hans/","zh-Hant":"/zh-Hant/"};function y(e){var a=e.onMenuToggle,t=void 0===a?function(){}:a;return c.a.createElement(E.Location,null,function(e){var a=e.location.pathname,n=f({path:a});return console.log(v),console.log(n),console.log(v[n]),c.a.createElement("nav",{id:"nav"},c.a.createElement("ul",null,c.a.createElement("li",{className:"special"},c.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),t()},className:"menuToggle"},c.a.createElement("span",null,v[n].menu)),c.a.createElement("div",{id:"menu"},c.a.createElement("select",{id:"langSelect",value:b[n],onChange:function(e){e.preventDefault(),Object(h.c)(document.getElementById("langSelect").value)}},c.a.createElement("option",{key:"en",value:"/"},"English"),c.a.createElement("option",{key:"zh-Hans",value:"/zh-Hans/"},"简体中文"),c.a.createElement("option",{key:"zh-Hant",value:"/zh-Hant/"},"繁體中文")),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(h.a,{to:b[n],className:"col-6"},v[n].home)),c.a.createElement("li",null,c.a.createElement(h.a,{to:b[n]+"about",className:"col-6"},v[n].about_us)),c.a.createElement("li",null,c.a.createElement(h.a,{to:b[n]+"gatherings",className:"col-6"},v[n].gatherings)),c.a.createElement("li",null,c.a.createElement(h.a,{to:b[n]+"sharings",className:"col-6"},v[n].sharings)),c.a.createElement("li",null,c.a.createElement(h.a,{to:b[n]+"giving",className:"col-6"},v[n].giving)),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.flickr.com/photos/182245855@N04/albums",target:"_blank",rel:"noopener noreferrer",className:"col-6"},v[n].gallery)),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA/live",target:"_blank",rel:"noopener noreferrer",className:"col-6"},v[n].live_stream))),c.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),t()},href:"#menu"},"")))))})}function w(e){var a=e.fullMenu,t=Object(i.useState)(!1),n=t[0],l=t[1];return c.a.createElement("header",{id:"header",className:a?"":"alt"},c.a.createElement("h1",null,c.a.createElement(h.a,{to:"/"},"OCHG")),c.a.createElement("div",{className:n?"is-menu-visible":" "},c.a.createElement(y,{onMenuToggle:function(){return l(!n)}})))}var _=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isPreloaded:!0},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props,a=e.children,t=e.fullMenu,n=this.state.isPreloaded;return c.a.createElement(h.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},c.a.createElement("div",{id:"page-wrapper"},c.a.createElement(w,{fullMenu:t}),a,c.a.createElement(p,null))))},data:r})},a}(i.Component);_.propTypes={children:o.a.node.isRequired};a.a=_},202:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),l=t.n(n),r=t(198);function i(e){var a=e.intl;return l.a.createElement(r.a,{fullMenu:!0},l.a.createElement("article",{id:"main"},l.a.createElement("header",null,l.a.createElement("h2",null,a.giving)),l.a.createElement("section",{className:"wrapper style5"},l.a.createElement("div",{className:"inner"},l.a.createElement("h2",null,a.giving),l.a.createElement("header",null,l.a.createElement("h5",null,a.check),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.check_description_html}})),l.a.createElement("p",null,l.a.createElement("b",null,"Travis Christian Assembly",l.a.createElement("br",null),"8304 East US Hwy 290",l.a.createElement("br",null),"Austin, TX 78724",l.a.createElement("br",null),"USA")),l.a.createElement("header",null,l.a.createElement("h5",null,a.zelle),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.zelle_description_html}})),l.a.createElement("header",null,l.a.createElement("h5",null,a.paypal),l.a.createElement("p",null,a.paypal_description),l.a.createElement("a",{className:"button primary",href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PS6U4A9K67WBS&source=url",target:"_blank",rel:"noopener noreferrer"},a.paypal_button_text))))))}}}]);
//# sourceMappingURL=component---src-pages-zh-hant-giving-js-917df291b151c21bcaaa.js.map