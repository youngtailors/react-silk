(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(220),l=n(218),c=n(213),i=n(212),s=c.a.ul.withConfig({displayName:"Anchors__NavItems",componentId:"sc-1v2zq6s-0"})(["list-style:none;"]),m=c.a.li.withConfig({displayName:"Anchors__NavItem",componentId:"sc-1v2zq6s-1"})([""]),d=function(){return a.createElement(s,null,a.createElement(m,null,a.createElement(i.a,{to:"/components/text"},"Text")),a.createElement(m,null,a.createElement(i.a,{to:"/components/buttons"},"Buttons")),a.createElement(m,null,a.createElement(i.a,{to:"/components/modals"},"Modals")),a.createElement(m,null,a.createElement(i.a,{to:"/components/inputs"},"Inputs")),a.createElement(m,null,a.createElement(i.a,{to:"/components/icons"},"Icons")),a.createElement(m,null,a.createElement(i.a,{to:"/components/dropdowns"},"Dropdowns")),a.createElement(m,null,a.createElement(i.a,{to:"/components/carousels"},"Carousels")),a.createElement(m,null,a.createElement(i.a,{to:"/components/input_pins"},"Input Pins")))};t.default=function(e){var t=e.children;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Components",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},t),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(d,null))))}},200:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(213),o=n(194),l=n(215),c=r.a.div.withConfig({displayName:"dropdowns__Wrapper",componentId:"sc-8sw9ld-0"})(["> div{margin-bottom:10px;}"]);t.default=function(){return a.createElement(o.default,null,a.createElement(c,null,a.createElement(l.d,{renderButton:function(e){return a.createElement(l.e,e,"Dropdown")}},a.createElement(l.f,null,"Action one"),a.createElement(l.f,null,"Action two"),a.createElement(l.f,null,"Action three"),a.createElement(l.f,null,"Action four"),a.createElement(l.f,null,"Action five")),a.createElement(l.d,{renderButton:function(e){return a.createElement(l.e,e,"Dropdown with icons")}},a.createElement(l.f,{icon:"paypal"},"Paypal"),a.createElement(l.f,{icon:"google-wallet"},"Google Wallet"),a.createElement(l.f,{icon:"cc-visa"},"VISA"),a.createElement(l.f,{icon:"cc-mastercard"},"Master Card"),a.createElement(l.f,{icon:"cc-discover"},"Discover"))))}},212:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),o=n(11),l=n.n(o),c=n(52),i=n.n(c);n.d(t,"a",function(){return i.a});n(214);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},214:function(e,t,n){var a;e.exports=(a=n(217))&&a.default||a},216:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk"}}}}},217:function(e,t,n){"use strict";n.r(t);n(54);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),c=n(75),i=n(2),s=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},218:function(e,t,n){"use strict";var a=n(219),r=n(0),o=n.n(r),l=n(229),c=n.n(l),i=n(212),s=function(e){var t=e.description,n=e.lang,r=e.meta,l=e.keywords,s=void 0===l?[]:l,d=e.title;return o.a.createElement(i.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:d,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:d},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:a}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var m="1025518380"},219:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@youngtailors"}}}}},220:function(e,t,n){"use strict";var a=n(216),r=n(0),o=n.n(r),l=n(11),c=n.n(l),i=n(212),s=n(226),m=n.n(s),d=n(215),u=n(10),p=n(213),f=p.a.nav.attrs({className:"container"}).withConfig({displayName:"header__Nav",componentId:"dlac5w-0"})(["display:flex;align-items:center;"]),E=p.a.ul.withConfig({displayName:"header__NavItems",componentId:"dlac5w-1"})(["list-style:none;display:flex;flex-direction:row;margin-left:auto;margin-bottom:0;padding:0;"]),h=p.a.li.withConfig({displayName:"header__NavItem",componentId:"dlac5w-2"})(["a{padding:1rem;display:block;color:#757575;:hover{text-decoration:none;color:#111;}}"]),y=Object(p.a)(i.a).withConfig({displayName:"header__Brand",componentId:"dlac5w-3"})([":hover{text-decoration:none;}"]),g=u.a.create({brand:{color:"#111"}}),w=function(e){var t=e.siteTitle;return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement(y,{to:"/"},o.a.createElement(d.i,{style:g.brand},t)),o.a.createElement(E,null,o.a.createElement(h,null,o.a.createElement(i.a,{to:"/components/text"},"Components")),o.a.createElement(h,null,o.a.createElement(i.a,{to:"/showcase"},"Showcase")),o.a.createElement(h,null,o.a.createElement("a",{href:"https://github.com/youngtailors/react-silk"},"Github")))))};w.defaultProps={siteTitle:""};var v=w,b=p.a.footer.attrs({className:"container-fluid"}).withConfig({displayName:"Footer__Wrapper",componentId:"sc-2uq88x-0"})(["padding:2rem 0;border-top:1px solid #dfdfdf;margin-top:2rem;text-align:center;"]),N=function(){return r.createElement(b,null,"© 2019 Young Tailors")};n(227),n(228);Object(d.r)(m.a);var x=function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"container"},t),o.a.createElement(N,null))},data:a})};x.propTypes={children:c.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-components-dropdowns-tsx-930240ed0c85acda1552.js.map