(this.webpackJsonpviva=this.webpackJsonpviva||[]).push([[0],{40:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},52:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),i=s(22),o=s.n(i),c=(s(49),s(14)),r=s(15),l=s(8),u=s(17),h=s(16),g=(s.p,s(50),s(5)),d=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=n.props.suggestions,s=e.currentTarget.value,a=t.filter((function(e){return e.toLowerCase().indexOf(s.toLowerCase())>-1}));n.setState({activeSuggestion:0,filteredSuggestions:a,showSuggestions:!0,userInput:e.currentTarget.value})},n.onClick=function(e){n.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:e.currentTarget.innerText})},n.onKeyDown=function(e){var t=n.state,s=t.activeSuggestion,a=t.filteredSuggestions;if(13===e.keyCode)n.setState({activeSuggestion:0,showSuggestions:!1,userInput:a[s]});else if(38===e.keyCode){if(0===s)return;n.setState({activeSuggestion:s-1})}else if(40===e.keyCode){if(s-1===a.length)return;n.setState({activeSuggestion:s+1})}},n.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},n}return Object(r.a)(s,[{key:"render",value:function(){var e,t=this.onChange,s=this.onClick,a=this.onKeyDown,i=this.state,o=i.activeSuggestion,c=i.filteredSuggestions,r=i.showSuggestions,l=i.userInput;return r&&l&&(e=c.length?Object(g.jsx)("ul",{class:"suggestions",children:c.map((function(e,t){var n;return t===o&&(n="suggestion-active"),Object(g.jsx)("li",{className:n,onClick:s,children:e},e)}))}):Object(g.jsx)("div",{class:"no-suggestions",children:Object(g.jsx)("em",{children:"No suggestions, you're on your own!"})})),Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)("input",{type:"text",onChange:t,onKeyDown:a,value:l}),e]})}}]),s}(n.Component);d.defaultProps={suggestions:[]};s(52);var j=function(e){var t=e.handleClose,s=e.show,n=e.children,a=s?"modal display-block":"modal display-none";return Object(g.jsx)("div",{className:a,children:Object(g.jsxs)("section",{className:"modal-main",children:[n,Object(g.jsx)("button",{type:"button",onClick:t,children:"Close"})]})})},b=s(28),m=[];s(40),s(40),localStorage.setItem("count",0),localStorage.setItem("names",JSON.stringify(m));var p=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var n;Object(c.a)(this,s),(n=t.call(this,e)).showModal=function(e){n.setState({show:!0}),n.setState({imagesrc:e.target.getAttribute("src")})},n.hideModal=function(){n.setState({show:!1})},n.onClick=function(e){n.setState({value:e.target.getAttribute("value")})},n.state={value:""},n.state={show:!1};return localStorage.setItem("count",0),n.showModal=n.showModal.bind(Object(l.a)(n)),n.hideModal=n.hideModal.bind(Object(l.a)(n)),n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.imagesrc="",n}return Object(r.a)(s,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({value:""}),m[localStorage.getItem("count")]=this.state.value,localStorage.setItem("names",JSON.stringify(m));JSON.parse(localStorage.getItem("names"));var t=parseInt(localStorage.getItem("count"))+1;localStorage.setItem("count",t),fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e82316c1e5694bb17b8723a3c02437e9&text="+this.state.value+"&format=json&nojsoncallback=1").then((function(e){return e.json()})).then(function(e){var t=this;if(void 0!==e.photos){var s=e.photos.photo.map((function(e){var s="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg";return Object(g.jsx)("img",{onClick:t.showModal,src:s})}));this.setState({pictures:s})}else alert("No Such Image Present in Database"),this.componentDidMount()}.bind(this)),e.preventDefault()}},{key:"componentDidMount",value:function(){fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e82316c1e5694bb17b8723a3c02437e9&format=json&nojsoncallback=1").then((function(e){return e.json()})).then(function(e){var t=this,s=e.photos.photo.map((function(e){var s="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg";return Object(g.jsx)("img",{onClick:t.showModal,src:s})}));this.setState({pictures:s})}.bind(this))}},{key:"makeDog",value:function(e){}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("h1",{className:"App-title",children:"SEARCH PHOTOS"}),Object(g.jsx)("form",{onSubmit:this.handleSubmit,children:Object(g.jsx)(b.c,{md:"6",children:Object(g.jsxs)("div",{className:"input-group md-form form-sm form-1 pl-0",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{className:"input-group-text purple lighten-3",id:"basic-text1",children:Object(g.jsx)(b.d,{className:"text-white",icon:"search"})})}),Object(g.jsx)("input",{className:"form-control my-0 py-1",type:"text",placeholder:"Search",value:this.state.value,onChange:this.handleChange,"aria-label":"Search"}),Object(g.jsx)("a",{href:"",children:"clear searches"}),Object(g.jsx)("ul",{children:m.map((function(t){return Object(g.jsx)("li",{onClick:e.onClick,value:t,children:t},t)}))}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})})})]}),Object(g.jsx)("div",{className:"App-intro",children:this.state.pictures}),Object(g.jsx)(j,{show:this.state.show,handleClose:this.hideModal,children:Object(g.jsx)("img",{src:this.state.imagesrc})}),Object(g.jsx)("div",{className:"autocomplete-wrapper"})]})}}]),s}(n.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,82)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root")),f()}},[[78,1,2]]]);
//# sourceMappingURL=main.7b612c27.chunk.js.map