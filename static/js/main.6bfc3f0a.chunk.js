(window["webpackJsonpexample-app"]=window["webpackJsonpexample-app"]||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/blog-home.3da39ac5.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/blog-about.90ccf6e2.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/blog-team.bdbbd061.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/blog-contact.c1f81c44.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/blog-dishes.7b6804f0.jpg"},41:function(e,t,a){e.exports=a(78)},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=(a(46),a(6)),s=a(7),i=a(9),m=a(8),u=a(10),d=a(2),h=a(12),p=(a(47),a(48),a(33)),E=a.n(p),f=(a(49),function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{src:E.a,alt:"home"}),r.a.createElement("h1",{className:"homeHeader"},"Welcome to Food Blog"))}),v=a(34),b=a.n(v);a(50);function g(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about"},r.a.createElement("img",{src:b.a,alt:"citrus"}),r.a.createElement("h1",{className:"aboutHeader"},"About")),r.a.createElement("div",{className:"aboutText"},r.a.createElement("p",null,"\u0422\u0443\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0442\u0435\u043a\u0441\u0442")))}var w=a(35),N=a.n(w);a(51);function x(){return r.a.createElement("div",{className:"team"},r.a.createElement("img",{src:N.a,alt:"team"}),r.a.createElement("h1",{className:"teamHeader"},"Our Team"))}var j=a(36),y=a.n(j);a(52);function O(){return r.a.createElement("div",{className:"contacts"},r.a.createElement("img",{src:y.a,alt:"contact"}),r.a.createElement("h1",{className:"contactsHeader"},"Contact Us"))}var k=[{id:1,name:"Norway",text:"text1",title:"Norway"},{id:2,name:"Lazania",text:"text2",title:"Lazania"},{id:3,name:"United States",text:"text3",title:"United States"},{id:4,name:"Switzerland",text:"text3",title:"Switzerland"},{id:5,name:"Argentina",text:"text3",title:"Argentina"},{id:6,name:"Australia",text:"text3",title:"Australia"},{id:7,name:"Sweden",text:"text3",title:"Sweden"},{id:8,name:"Austria",text:"text3",title:"Austria"},{id:9,name:"Georgia",text:"text3",title:"Georgia"},{id:10,name:"Canada",text:"text3",title:"Canada"}],C=a(37),U=a.n(C);a(53);function I(){Object(h.j)();return r.a.createElement("div",null,r.a.createElement("div",{className:"dishes"},r.a.createElement("img",{src:U.a,alt:"dishes"}),r.a.createElement("h1",{className:"dishesHeader"},"Dishes")),r.a.createElement("ul",null,k.map((function(e){return r.a.createElement("li",null,r.a.createElement(d.b,{to:"/dishes/".concat(e.id)},e.title))}))))}function S(e){var t=Object(h.i)().dishId;return r.a.createElement("h3",null,"Requested dish ID: ",k[t-1].text)}var A=a(22).create({baseURL:"https://fakerestapi.azurewebsites.net/api"}),z=(r.a.Component,function(e){var t=e.id,a=e.username,n=e.password;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"text-center text-muted"},r.a.createElement("h1",{key:t},"User Name: ",a),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h3",{key:t},"Password: ",n))))}),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,data:[],error:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;A.get("/Users/".concat(t)).then((function(t){return e.setState({loading:!1,data:t.data})})).catch((function(t){return e.setState({loading:!1,error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.data;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",null," loading "),!t&&r.a.createElement("div",{className:"container"},r.a.createElement(z,{username:a.UserName,password:a.Password,id:a.ID})))}}]),t}(r.a.Component),T=Object(h.k)(D),L=(a(31),function(e){var t=e.id,a=e.username,n=e.password;return r.a.createElement("div",{class:"collectionItemOuter"},r.a.createElement("div",{class:"collectionItem",key:t},r.a.createElement("img",{src:"https://www.mieten-in-adlershof.de/wp-content/uploads/2017/08/placeholder-profile.jpg",alt:"Users"}),r.a.createElement("div",{className:"collectionText"},r.a.createElement("h4",{key:t},"User Name: ",a),r.a.createElement("p",{key:t},n),r.a.createElement(d.b,{to:"/users/".concat(t)},r.a.createElement("span",{className:"btn btn-secondary"},"More")))))}),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,data:[],error:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.get("/Users").then((function(t){return e.setState({loading:!1,data:t.data})})).catch((function(t){return e.setState({loading:!1,error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.data;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",null," loading "),!t&&r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"collectionTitle"},"Users"),r.a.createElement("div",{className:"collection"},a.map((function(e){return r.a.createElement(L,{username:e.UserName,password:e.Password,id:e.ID})})))))}}]),t}(r.a.Component),P=a(40);a(76),new P.a;function B(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light"},r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"navbar-nav mr-auto navList"},r.a.createElement("span",{className:"nav-link navItem"},r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("span",{className:"nav-link navItem"},r.a.createElement(d.b,{to:"/about"},"About")),r.a.createElement("span",{className:"nav-link navItem"},r.a.createElement(d.b,{to:"/dishes"},"Dishes")),r.a.createElement("span",{className:"nav-link navItem"},r.a.createElement(d.b,{to:"/contacts"},"Contact Us")),r.a.createElement("span",{className:"nav-link navItem"},r.a.createElement(d.b,{to:"/team"},"Our Team")),r.a.createElement("span",{className:"nav-link navItem"},r.a.createElement(d.b,{to:"/users"},"Users")))))}a(77);function F(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("link",{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css",rel:"stylesheet"}),r.a.createElement("div",{className:"footerContainer"},r.a.createElement("a",{href:"https://www.instagram.com"},r.a.createElement("i",{class:"fa fa-instagram"})),r.a.createElement("a",{href:"https://www.facebook.com"},r.a.createElement("i",{class:"fa fa-facebook"})),r.a.createElement("a",{href:"https://github.com/"},r.a.createElement("i",{class:"fa fa-github"})),r.a.createElement("p",{className:"footerContainerText"},"Copyright \xa9 Kristina Tkachyk 2019")))}var M=a(20),R=function(e){e.label;var t=e.value,a=e.type,n=e.onChange,c=e.placeholder;return r.a.createElement("div",null,r.a.createElement("input",{type:a,value:t,onChange:n,placeholder:c}))},W=a(22).create({baseURL:"https://reqres.in/api"}),q={authorize:!1,authenticate:function(e){q.authorize=!0,setTimeout(e,100)}};function G(e){var t=e.children,a=e.props;return r.a.createElement(h.b,Object.assign({},a,{render:function(e){var a=e.location;return q.authorize?t:r.a.createElement(h.a,{to:{pathname:"/login",state:{from:a}}})}}))}var J=function(){var e=Object(n.useState)(),t=Object(M.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(M.a)(l,2),s=o[0],i=o[1],m=Object(h.h)(),u=Object(h.g)(),d=(m.state||{from:{pathname:"/"}}).from;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),W.post("/login/",{email:a,password:s}).then((function(e){console.log(e)})).then((function(){q.authenticate(!0)})).catch((function(e){console.log("An error occurred:",e)})),q.authenticate?u.replace(d):u.push("/home")}},r.a.createElement(R,{value:a,placeholder:"Login",type:"email",onChange:function(e){return c(e.target.value)}}),r.a.createElement(R,{value:s,placeholder:"Password",type:"password",onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement("div",null))},K=(n.Component,function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/"},r.a.createElement(f,null)),r.a.createElement(h.b,{path:"/login",component:J}),r.a.createElement(G,{path:"/about"},r.a.createElement(g,null)),r.a.createElement(G,{path:"/dishes/:id"},r.a.createElement(S,null)),r.a.createElement(G,{path:"/dishes"},r.a.createElement(I,null)),r.a.createElement(G,{path:"/contacts"},r.a.createElement(O,null)),r.a.createElement(h.b,{path:"/team"},r.a.createElement(x,null)),r.a.createElement(h.b,{path:"/users/:id"},r.a.createElement(T,null)),r.a.createElement(h.b,{path:"/users"},r.a.createElement(H,null)),r.a.createElement(h.a,{to:"/home"}))),r.a.createElement(F,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.6bfc3f0a.chunk.js.map