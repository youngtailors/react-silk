(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(238),i=n(236);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},213:function(e,t,n){"use strict";n.d(t,"c",function(){return J}),n.d(t,"q",function(){return g}),n.d(t,"g",function(){return b}),n.d(t,"h",function(){return y}),n.d(t,"i",function(){return v}),n.d(t,"j",function(){return E}),n.d(t,"k",function(){return j}),n.d(t,"l",function(){return w}),n.d(t,"a",function(){return F}),n.d(t,"p",function(){return _}),n.d(t,"n",function(){return W}),n.d(t,"b",function(){return L}),n.d(t,"m",function(){return C}),n.d(t,"r",function(){return k}),n.d(t,"d",function(){return Y}),n.d(t,"e",function(){return H}),n.d(t,"f",function(){return Z}),n.d(t,"o",function(){return Q});n(267),n(119);var a=n(10),r=n.n(a),o=(n(247),n(55),n(248)),i=n(0),l=n.n(i),c=n(13),s=n(228),u=n(54),d=n(233),f=n(229),p=n(225),h=n(240),m=c.a.create({baseText:{marginBottom:10},text:{fontSize:16},h1:{fontSize:30},h2:{fontSize:28},h3:{fontSize:26},h4:{fontSize:24},h5:{fontSize:22},h6:{fontSize:20}}),g=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.text,t]},n))},b=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.baseText,m.h1,t]},n))},y=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.baseText,m.h2,t]},n))},v=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.baseText,m.h3,t]},n))},E=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.baseText,m.h4,t]},n))},j=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.baseText,m.h5,t]},n))},w=function(e){var t=e.style,n=Object(o.a)(e,["style"]);return Object(i.createElement)(s.a,Object.assign({style:[m.baseText,m.h6,t]},n))},O=function(e){return l.a.createElement(u.a,null,l.a.createElement(s.a,null,e.name))};function k(e){O=e}var C=function(e){return l.a.createElement(O,Object.assign({},e))};C.defaultProps={size:24,color:"#666"};var x={colors:{primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#343a40",transparent:"transparent",white:"#FFF",black:"#555",gray:"#a6a6a6",smokeWhite:"#f4f4f4"}},S=l.a.createContext(x),R=S.Consumer;function I(){return Object(i.useContext)(S)}function T(e,t){var n;switch(e){case"primary":n=t.primary;break;case"secondary":n=t.secondary;break;case"success":n=t.success;break;case"danger":n=t.danger;break;case"warning":n=t.warning;break;case"info":n=t.info;break;case"light":n=t.light;break;case"dark":n=t.dark;break;case"link":default:n=t.transparent}return n}var z=["light","link"],P=c.a.create({containerNatural:{alignSelf:"flex-start"},button:{alignItems:"center",justifyContent:"center",flexDirection:"row",paddingVertical:10,paddingHorizontal:15},alignLeft:{justifyContent:"flex-start"},iconRight:{marginLeft:5},iconLeft:{marginRight:5},disabledButton:{opacity:.6},buttonBorder:{borderWidth:1},hasRightIcon:{flexDirection:"row-reverse"},iconStyle:{alignItems:"center",justifyContent:"center"}}),F=function(e){var t=e.children,n=e.onPress,a=e.variant,r=e.disabled,o=e.block,i=e.ghost,c=e.icon,f=e.iconPosition,p=e.style,h=e.iconStyle,m=e.textStyle,g=e.iconSize,b=I(),y=[P.buttonBorder],v=T(a,b.colors);"link"===a?y.push({borderWidth:0}):i?y.push({borderColor:v}):y.push({backgroundColor:v,borderColor:v}),o||y.push(P.containerNatural);var E=[],j=function(e){return!~z.indexOf(e)}(a);i&&j?E.push({color:v}):E.push({color:j?b.colors.white:b.colors.black}),r&&y.push(P.disabledButton),c&&y.push(P.alignLeft);var w,O=[P.iconStyle];h&&O.push(h),"left"===f?O.push(P.iconLeft):"right"===f&&(y.push(P.hasRightIcon),O.push(P.iconRight)),p&&y.push(p),m&&E.push(m),w="string"==typeof t?l.a.createElement(s.a,{style:E},t):t;var k=l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(u.a,{style:O},l.a.createElement(C,{name:c,color:j?b.colors.white:b.colors.black,size:g})),w);return n&&!r?l.a.createElement(d.a,{onPress:n,style:[P.button].concat(y)},k):l.a.createElement(u.a,{style:[P.button].concat(y)},k)};F.defaultProps={variant:"primary",ghost:!1,disabled:!1,block:!1,iconPosition:"left",iconSize:14};var N=c.a.create({container:{position:"absolute",top:0,left:0,right:0,bottom:0}}),q=function(e){return l.a.createElement(f.a,{onPress:e.onPress},l.a.createElement(u.a,{style:N.container}))},B=c.a.create({container:{position:"absolute",top:0,left:0,bottom:0,right:0,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,.8)"},modal:{backgroundColor:"#FFF"},body:{padding:15}}),_=function(e){var t=e.toggle,n=e.isOpen,a=e.children,r=e.style;if(!n)return null;if("web"!==p.a.OS)throw new Error("This component does not support modal on this native platform yet");return Object(i.createElement)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:2}},Object(i.createElement)(u.a,{style:B.container},Object(i.createElement)(q,{onPress:t}),Object(i.createElement)(u.a,{style:[B.modal,r]},Object(i.createElement)(u.a,{style:B.body},a))))},M=c.a.create({container:{marginBottom:10},label:{marginBottom:5},textInput:{borderWidth:1,paddingVertical:5,paddingHorizontal:8},disabledView:{paddingVertical:5,paddingHorizontal:8,borderWidth:1,height:33}}),W=l.a.forwardRef(function(e,t){var n=e.label,a=e.placeholder,r=e.errorMessage,i=e.disabled,c=e.onChanged,s=e.value,d=e.style,f=e.inputStyle,p=Object(o.a)(e,["label","placeholder","errorMessage","disabled","onChanged","value","style","inputStyle"]),m=I(),b=[{borderColor:m.colors.gray}],y={borderColor:m.colors.danger},v={color:m.colors.danger,fontSize:14};r&&b.push(y),f&&b.push(f);var E=l.a.useRef(null),j=t||E;return l.a.createElement(u.a,{style:[M.container,d]},n&&l.a.createElement(g,{style:M.label},n),i?l.a.createElement(u.a,{style:[M.disabledView].concat(b,[{backgroundColor:m.colors.smokeWhite,borderColor:m.colors.smokeWhite}])},l.a.createElement(g,null,s||a)):l.a.createElement(h.a,Object.assign({ref:j,editable:!0,style:[M.textInput].concat(b),underlineColorAndroid:"transparent",placeholder:a,onChangeText:c,value:s},p)),r&&l.a.createElement(g,{style:v},r))});W.defaultProps={disabled:!1};var D=c.a.create({container:{flexDirection:"row",alignItems:"center",marginBottom:5},indicator:{width:20,height:20,borderWidth:1,marginRight:5},circleIndicator:{borderRadius:10}}),L=function(e){var t=e.disabled,n=e.onChange,a=e.checked,r=e.children,o=e.variant,i=e.square,c=I(),s=[D.indicator],f=[];if(i||s.push(D.circleIndicator),t)f.push({color:c.colors.gray}),a?s.push({backgroundColor:c.colors.gray,borderColor:c.colors.gray}):s.push({borderColor:c.colors.gray});else{var p=T(o,c.colors);a?s.push({backgroundColor:p,borderColor:p}):s.push({borderColor:p})}var h=r;return"string"==typeof r&&(h=l.a.createElement(g,{style:f},r)),t?l.a.createElement(u.a,{style:D.container},l.a.createElement(u.a,{style:s}),h):l.a.createElement(d.a,{style:D.container,onPress:n},l.a.createElement(u.a,{style:s}),h)};L.defaultProps={disabled:!1,variant:"primary",checked:!1,square:!0};var V=c.a.create({dropdown:{position:"absolute",alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"#f4f4f4",backgroundColor:"#FFFFFF"},upZ:{zIndex:5}}),Y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1,height:0,pageX:0,pageY:0},n._view=Object(i.createRef)(),n.toggle=function(){n.setState(function(e){return{open:!e.open}})},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._view.current.measure(function(t,n,a,r,o,i){e.setState({height:r,pageX:o,pageY:i})})},n.render=function(){var e=[V.dropdown],t=[];return this.state.open&&(e.push({top:this.state.height+this.state.pageY,left:this.state.pageX}),t.push(V.upZ)),Object(i.createElement)(u.a,{ref:this._view,style:t},this.props.renderButton({isOpen:this.state.open,toggle:this.toggle}),this.state.open&&Object(i.createElement)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:10}},Object(i.createElement)(q,{onPress:this.toggle}),Object(i.createElement)(u.a,{style:e},this.props.children)))},t}(i.Component),A="angle-down",G="angle-up",H=function(e){var t=e.isOpen,n=e.toggle,a=e.children,r=Object(o.a)(e,["isOpen","toggle","children"]);return Object(i.createElement)(F,Object.assign({onPress:n,icon:t?G:A},r),a)},X=c.a.create({container:{marginBottom:10},label:{marginBottom:5}}),J=function(e){var t=e.label,n=e.errorMessage,a=e.onChanged,r=e.value,o=e.style,i=e.choices,c=e.mutiple,s={color:I().colors.danger,fontSize:14};return l.a.createElement(u.a,{style:[X.container,o]},t&&l.a.createElement(g,{style:X.label},t),i.map(function(e){return l.a.createElement(L,{key:e.key,square:c,checked:(t=e.key,!!r&&!!~r.split(",").indexOf(t)),onChange:function(){return function(e){if(a)if(r&&c){var t=r.split(","),n=t.filter(function(t){return t!==e});n.length<t.length?a(n.join(",")):n.length===t.length&&a([].concat(t,[e]).join(","))}else a(e)}(e.key)}},e.value);var t}),n&&l.a.createElement(g,{style:s},n))};J.defaultProps={disabled:!1,choices:[],mutiple:!1,value:""};var Z=function(e){var t=e.children,n=e.icon;return Object(i.createElement)(F,{variant:"link",icon:n,iconPosition:"left"},t)},K=c.a.create({container:{flexDirection:"row"},input:{marginRight:5,marginBottom:0},inputStyle:{textAlign:"center",height:40,width:40}}),Q=function(e){function t(t){var n;n=e.call(this,t)||this;for(var a=[],r="",o=0;o<Number(t.length);o+=1)a.push(l.a.createRef()),r+=" ";return n.localRefs=a,n.state={value:r},n.onChange=function(e,t){var a=e.nativeEvent.text||" ";if(n.setState(function(e){return{value:""+e.value.substr(0,t)+a[a.length-1]+e.value.substr(t+1)}},function(){n.props.onChanged&&n.props.onChanged(n.state.value)}),"deleteContentBackward"===e.nativeEvent.inputType){if(n.localRefs[t-1]){var r=n.localRefs[t-1].current;r&&r.focus&&r.focus()}}else if(a.trim()&&n.localRefs[t+1]){var o=n.localRefs[t+1].current;o&&o.focus&&o.focus()}},n}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.fieldStyles||{};return l.a.createElement(R,null,function(n){return l.a.createElement(u.a,{style:M.container},e.props.label&&l.a.createElement(g,{style:M.label},e.props.label),l.a.createElement(u.a,{style:K.container},e.localRefs.map(function(n,a){return l.a.createElement(W,{ref:n,key:a,selectTextOnFocus:!0,style:[K.input,t.style],inputStyle:[K.inputStyle,t.inputStyle],onChange:function(t){return e.onChange(t,a)},value:e.state.value[a]||""})})),e.props.errorMessage&&l.a.createElement(g,{style:{color:n.colors.danger,fontSize:14}},e.props.errorMessage))})},t}(l.a.Component);Q.defaultProps={length:6}},214:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(3),i=n.n(o),l=n(53),c=n.n(l);n.d(t,"a",function(){return c.a});n(220);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},220:function(e,t,n){var a;e.exports=(a=n(231))&&a.default||a},230:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk"}}}}},231:function(e,t,n){"use strict";n.r(t);n(55);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),l=n(78),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},236:function(e,t,n){"use strict";var a=n(237),r=n(0),o=n.n(r),i=n(270),l=n.n(i),c=n(214),s=function(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=void 0===i?[]:i,d=e.title;return o.a.createElement(c.b,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:d,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:d},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:a}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="1025518380"},237:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@youngtailors"}}}}},238:function(e,t,n){"use strict";var a=n(230),r=n(0),o=n.n(r),i=n(3),l=n.n(i),c=n(214),s=n(251),u=n.n(s),d=n(213),f=n(227),p=n(216),h=p.a.nav.attrs({className:"container"}).withConfig({displayName:"header__Nav",componentId:"dlac5w-0"})(["display:flex;align-items:center;"]),m=p.a.ul.withConfig({displayName:"header__NavItems",componentId:"dlac5w-1"})(["list-style:none;display:flex;flex-direction:row;margin-left:auto;margin-bottom:0;padding:0;"]),g=p.a.li.withConfig({displayName:"header__NavItem",componentId:"dlac5w-2"})(["a{padding:1rem;display:block;color:#757575;:hover{text-decoration:none;color:#111;}}"]),b=Object(p.a)(c.a).withConfig({displayName:"header__Brand",componentId:"dlac5w-3"})([":hover{text-decoration:none;}"]),y=f.a.create({brand:{color:"#111"}}),v=function(e){var t=e.siteTitle;return o.a.createElement("div",null,o.a.createElement(h,null,o.a.createElement(b,{to:"/"},o.a.createElement(d.i,{style:y.brand},t)),o.a.createElement(m,null,o.a.createElement(g,null,o.a.createElement(c.a,{to:"/components/text"},"Components")),o.a.createElement(g,null,o.a.createElement(c.a,{to:"/showcase"},"Showcase")),o.a.createElement(g,null,o.a.createElement("a",{href:"https://github.com/youngtailors/react-silk"},"Github")))))};v.defaultProps={siteTitle:""};var E=v,j=p.a.footer.attrs({className:"container-fluid"}).withConfig({displayName:"Footer__Wrapper",componentId:"sc-2uq88x-0"})(["padding:2rem 0;border-top:1px solid #dfdfdf;margin-top:2rem;text-align:center;"]),w=function(){return r.createElement(j,null,"© 2019 Young Tailors")};n(268),n(269);Object(d.r)(u.a);var O=function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"container"},t),o.a.createElement(w,null))},data:a})};O.propTypes={children:l.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-404-tsx-8ec83f7c2a3eae2e0037.js.map