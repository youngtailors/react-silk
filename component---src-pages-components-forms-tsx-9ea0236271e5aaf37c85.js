(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(222),s=n(221),r=n(214),c=n(217),m=r.a.ul.withConfig({displayName:"Anchors__NavItems",componentId:"sc-1v2zq6s-0"})(["list-style:none;"]),i=r.a.li.withConfig({displayName:"Anchors__NavItem",componentId:"sc-1v2zq6s-1"})([""]),u=function(){return a.createElement(m,null,a.createElement(i,null,a.createElement(c.a,{to:"/components/text"},"Text")),a.createElement(i,null,a.createElement(c.a,{to:"/components/buttons"},"Buttons")),a.createElement(i,null,a.createElement(c.a,{to:"/components/modals"},"Modals")),a.createElement(i,null,a.createElement(c.a,{to:"/components/inputs"},"Inputs")),a.createElement(i,null,a.createElement(c.a,{to:"/components/icons"},"Icons")),a.createElement(i,null,a.createElement(c.a,{to:"/components/dropdowns"},"Dropdowns")),a.createElement(i,null,a.createElement(c.a,{to:"/components/carousels"},"Carousels")),a.createElement(i,null,a.createElement(c.a,{to:"/components/input_pins"},"Input Pins")),a.createElement(i,null,a.createElement(c.a,{to:"/components/forms"},"Forms")))};t.default=function(e){var t=e.children;return l.a.createElement(o.a,null,l.a.createElement(s.a,{title:"Components",keywords:["gatsby","application","react"]}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},t),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(u,null))))}},208:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=(n(76),n(55),n(335),n(118),n(8)),s=n.n(o),r=n(57),c=n.n(r),m=n(52),i=n(220),u=function(e){function t(t){var n;n=e.call(this,t)||this;var a={};return t.fields.forEach(function(e){t.initialValues?a[e.name]=t.initialValues[e.name]:a[e.name]=""}),n.state={values:a},n.onSubmit=n.onSubmit.bind(c()(c()(n))),n}s()(t,e);var n=t.prototype;return n.fieldChanged=function(e,t){this.setState(function(n){var a;return{values:Object.assign({},n.values,(a={},a[e]=t,a))}})},n.onSubmit=function(){this.props.onSubmit(this.state.values)},n.render=function(){var e=this;return l.a.createElement(m.a,null,this.props.fields.map(function(t){return l.a.createElement(i.n,Object.assign({key:t.name},t,{value:e.state.values[t.name],onChanged:function(n){return e.fieldChanged(t.name,n)}}))}),this.props.onSubmit&&l.a.createElement(i.a,{onPress:this.onSubmit},"Submit"))},t}(l.a.PureComponent),p=n(194);t.default=l.a.memo(function(){var e=Object(a.useState)({}),t=e[0],n=e[1];return l.a.createElement(p.default,null,l.a.createElement(u,{fields:[{name:"email",label:"Enter your email"},{name:"password",label:"Password",secureTextEntry:!0}],onSubmit:n}),l.a.createElement("code",null,JSON.stringify(t)))})}}]);
//# sourceMappingURL=component---src-pages-components-forms-tsx-9ea0236271e5aaf37c85.js.map