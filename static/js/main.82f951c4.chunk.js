(this.webpackJsonpfacerecognation=this.webpackJsonpfacerecognation||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/brain.014560c0.svg"},32:function(e,t,a){e.exports=a(96)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),i=a.n(r),o=(a(37),a(7)),c=a(8),l=a(10),m=a(9),u=(a(38),function(e){var t=e.onRoutechange;return e.isSigned?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer "},"signout")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer "},"SignIn"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer "},"Register"))}),p=a(29),h=a.n(p),d=(a(39),a(30)),g=a.n(d),b=function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(h.a,{className:"Tilt br2 shadow-2 pointer",options:{max:35},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"}," ",s.a.createElement("img",{style:{paddingTop:"5px"},src:g.a,alt:"logo"})," ")))},f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailchange=function(e){n.setState({email:e.target.value})},n.onPasswordchange=function(e){n.setState({password:e.target.value})},n.onSubmit=function(){fetch("http://localhost:3001/signin",{method:"POST",body:JSON.stringify({email:n.state.email,password:n.state.password}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e[0].id&&(console.log(e[0].id),n.props.loaduser(e[0]),n.props.onRoutechange("home"))}))},n.state={email:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRoutechange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",onChange:this.onEmailchange,name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",onChange:this.onPasswordchange,name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailchange=function(e){n.setState({email:e.target.value})},n.onPasswordchange=function(e){n.setState({password:e.target.value})},n.onNamechange=function(e){n.setState({name:e.target.value})},n.onSubmit=function(){fetch("http://localhost:3001/register",{method:"POST",body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e&&(n.props.loaduser(e),n.props.onRoutechange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(c.a)(a,[{key:"render",value:function(){this.props.onRoutechange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:this.onNamechange,type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:this.onEmailchange,type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:this.onPasswordchange,type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(n.Component),E=(a(40),function(e){var t=e.image,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"mt2 absolute"},s.a.createElement("img",{id:"imgrecognation",src:t,width:"500px",height:"auto"}),s.a.createElement("div",{className:"boundery-box",style:{top:a.toprow,right:a.rightcol,bottom:a.bottomrow,left:a.leftcol}})))}),v=(a(41),function(e){var t=e.onInputchange,a=e.onButtonsubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3 center"},"this is magic brain detect the face try it !"),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"pa4 form center br3 shadow-5"},s.a.createElement("input",{className:"f4  pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link pb3 pv2 dib white bg-light-purple ",onClick:a},"Detect"))))}),N=(a(42),function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f1 center"},"".concat(t,"your current rank is #").concat(a)))}),y=a(31),k=a.n(y),S=a(15),j=a.n(S),C=new j.a.App({apiKey:"a589da912e29434e96b0d9e5a13c970b"}),x={particles:{number:{value:130,density:{enable:!0,value_area:630}}}},O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loaduser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.onRoutechange=function(t){"signout"===t?e.setState({isSigned:!1}):"home"===t&&e.setState({isSigned:!0}),e.setState({route:t})},e.onInputchange=function(t){e.setState({input:t.target.value})},e.calculateFaceRecognation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("imgrecognation"),n=Number(a.width),s=Number(a.height);return{leftcol:t.left_col*n,toprow:t.top_row*s,rightcol:n-t.right_col*n,bottomrow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onButtonsubmit=function(){e.setState({imgurl:e.state.input}),C.models.predict(j.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t&&fetch("http://localhost:3001/image",{method:"put",body:JSON.stringify({id:e.state.user.id}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceRecognation(t))})).catch((function(e){return console.log("unable")}))},e.state={input:"",imgurl:"",box:{},route:"signin",isSigned:!1,user:{name:"",email:"",password:"",entries:0,joined:""}},e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k.a,{className:"particles",params:x}),s.a.createElement(u,{isSigned:this.state.isSigned,onRoutechange:this.onRoutechange}),"home"===this.state.route?s.a.createElement(s.a.Fragment,null,s.a.createElement(b,null),s.a.createElement(N,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(v,{onInputchange:this.onInputchange,onButtonsubmit:this.onButtonsubmit}),s.a.createElement(E,{box:this.state.box,image:this.state.imgurl})):"signin"===this.state.route?s.a.createElement(f,{loaduser:this.loaduser,onRoutechange:this.onRoutechange}):s.a.createElement(w,{loaduser:this.loaduser,onRoutechange:this.onRoutechange}))}}]),a}(n.Component);a(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.82f951c4.chunk.js.map