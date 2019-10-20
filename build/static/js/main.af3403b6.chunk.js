(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),o=a.n(s),c=(a(48),a(6)),l=a(7),i=a(9),m=a(8),u=a(10),p=a(3),d=a(17),h=a(24),b=a.n(h),f=a(20),v=a.n(f),g=function(e){e?v.a.defaults.headers.common.Authorization=e:delete v.a.defaults.headers.common.Authorization},E=function(e){return{type:"SET_CURRENT_USER",payload:e}},w=function(){return function(e){localStorage.removeItem("jwtToken"),g(!1),e(E({}))}},y=a(13),O=a(16),N=a(40),j=a(19);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=a(72),C={isAuthenticated:!1,user:{},loading:!1},R={},T=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return x({},e,{isAuthenticated:!S(t.payload),user:t.payload});case"USER_LOADING":return x({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),U=[N.a],D=O.d,A=Object(O.e)(T,{},D(O.a.apply(void 0,U))),L=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper blue-grey lighten-5"},r.a.createElement(p.b,{to:"/",style:{fontFamily:"monospace"},className:"col s5 brand-logo center black-text"},r.a.createElement("i",{className:"material-icons"},"code"),"hugary.dev"))))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Register to use all web apps developed by Gary"),r.a.createElement("br",null),r.a.createElement("div",{className:"col s6"},r.a.createElement(p.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light blue accent-3"},"Register")),r.a.createElement("div",{className:"col s6"},r.a.createElement(p.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In")))))}}]),t}(n.Component),_=a(18),F=a.n(_),G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={nickname:e.state.nickname,username:e.state.username,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={nickname:"",username:"",password:"",password2:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(e){e.errors!==this.props.errors&&this.props.errors&&this.setState({errors:this.props.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(p.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace"),"Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(p.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.nickname,error:e.nickname,id:"nickname",type:"text",className:F()("",{invalid:e.nickname})}),r.a.createElement("label",{htmlFor:"nickname"},"Nickname"),r.a.createElement("span",{className:"red-text"},e.nickname)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",className:F()("",{invalid:e.username})}),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("span",{className:"red-text"},e.username)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:F()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:F()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),I=Object(y.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){v.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(d.g)(G)),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.loginUser(a)},e.state={username:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentDidUpdate",value:function(e){e.auth!==this.props.auth&&this.props.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors!==this.props.errors&&this.props.errors&&this.setState({errors:this.props.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(p.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(p.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",className:F()("",{invalid:e.username||e.usernamenotfound})}),r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("span",{className:"red-text"},e.username,e.usernamenotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:F()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}]),t}(n.Component),z=Object(y.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){v.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),g(a);var n=b()(a);t(E(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(B),M=a(42),J=Object(y.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(M.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/login"})}}))})),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.nickname.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a full-stack"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"MERN")," app \ud83d\udc4f")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"))))}}]),t}(n.Component),W=Object(y.b)((function(e){return{auth:e.auth}}),{logoutUser:w})(V);if(localStorage.jwtToken){var H=localStorage.jwtToken;g(H);var Y=b()(H);A.dispatch(E(Y));var $=Date.now()/1e3;Y.exp<$&&(A.dispatch(w()),window.location.href="./login")}var q=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{store:A},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(d.b,{exact:!0,path:"/",component:P}),r.a.createElement(d.b,{exact:!0,path:"/register",component:I}),r.a.createElement(d.b,{exact:!0,path:"/login",component:z}),r.a.createElement(d.d,null,r.a.createElement(J,{exact:!0,path:"/dashboard",component:W})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.af3403b6.chunk.js.map