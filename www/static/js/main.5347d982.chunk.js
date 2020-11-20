(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{127:function(e,a,t){e.exports=t(159)},132:function(e,a,t){},159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),l=t(4),c=t(34),s=t(35),m=t(37),p=t(36),d=t(11),u=t(50),h=t(13),g=(t(132),t(5)),b=t(3),E=t(61),f=t.n(E),v=t(75),y=t(22),O=t(198),j=t(121),w=t(45),A=t(203),C=t(224),N=t(207),T=t(209),S=t(201),I=Object(O.a)((function(e){return{root:{width:"100%"},spinner:{width:"40px",height:"40px",marginLeft:"47%",marginRight:"47%"}}})),x=function(){var e=I();return r.a.createElement("div",{className:e.root},r.a.createElement(S.a,{className:e.spinner}))},k=t(16),R=t.n(k),L=function(e){return function(a){a({type:"LOADING_USER"}),R.a.get("/user/".concat(e)).then((function(e){a({type:"SET_USER",payload:e.data})})).catch((function(e){return console.log(e)}))}},U=function(e){var a="Bearer ".concat(e);localStorage.setItem("FBidToken",a),R.a.defaults.headers.common.Authorization=a},D=t(20),_=t(208),P=t(210),F=t(211),B=Object(O.a)((function(e){return{root:Object(d.a)({backgroundColor:"#bbdefb",padding:"5rem",paddingLeft:"15rem",paddingRight:"15rem",height:"95vh"},e.breakpoints.down("md"),{padding:"1rem"}),paper:{padding:"5%"},form:{"& > *":{margin:e.spacing(1),width:"100%"},padding:"5vh"},button:Object(d.a)({margin:e.spacing(1),width:"20%",marginLeft:"40%",marginRight:"40%"},e.breakpoints.down("md"),{width:"36%",marginLeft:"32%",marginRight:"32%"}),forgotPass:{marginTop:"-3%"},customError:{color:"red",textAlign:"center",marginTop:10},spinner:Object(d.a)({marginLeft:0},e.breakpoints.down("md"),{marginLeft:"-5%"})}})),M={loginUser:function(e){return function(a){a({type:"LOADING_UI"}),R.a.post("/login",e).then((function(e){localStorage.userId=e.data.id,U(e.data.token),a(L(e.data.id)),a({type:"CLEAR_ERRORS"}),a({type:"STOP_LOADING_UI"})})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}},registor:function(e,a){return function(t){t({type:"LOADING_UI"}),R.a.post("/registor",e).then((function(e){U(e.data.token),t(L(e.data.id)),t({type:"CLEAR_ERRORS"}),t({type:"STOP_LOADING_UI"}),a.push("/")})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}}},q=Object(D.b)((function(e){return{user:e.user,UI:e.UI}}),M)((function(e){var a=Object(n.useState)(""),t=Object(y.a)(a,2),i=t[0],o=t[1],c=Object(n.useState)(""),s=Object(y.a)(c,2),m=s[0],p=s[1],d=Object(n.useState)(""),u=Object(y.a)(d,2),h=u[0],g=u[1],b=Object(n.useState)("login"),E=Object(y.a)(b,2),O=E[0],S=E[1],I=Object(n.useState)({}),k=Object(y.a)(I,2),R=k[0],L=k[1],U=Object(n.useState)("Initial render"),D=Object(y.a)(U,2),M=D[0],q=D[1],G=B();Object(n.useEffect)((function(){"Initial render"!==M&&(e.UI.loading||(null!==e.UI.errors?L(Object(l.a)(Object(l.a)({},R),{},{login:e.UI.errors})):e.login.setState(Object(l.a)(Object(l.a)({},e.login.state),{},{login:!0}))))}),[e.UI]);var H=function(e){switch(e.target.name){case"email":o(e.target.value);break;case"password":p(e.target.value);break;case"confirmPassword":g(e.target.value)}L({})},z=function(){var a=Object(v.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!i.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){a.next=12;break}if(!m){a.next=9;break}return n={email:i,password:m,confirmPassword:h},q("Not initial render"),a.next=7,e.loginUser(n);case 7:a.next=10;break;case 9:L(Object(l.a)(Object(l.a)({},R),{},{password:"Password is not empty"}));case 10:a.next=13;break;case 12:L(Object(l.a)(Object(l.a)({},R),{},{email:"Email is not valid"}));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),W=function(){var a=Object(v.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!i.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){a.next=12;break}if(!m){a.next=9;break}return n={email:i,password:m},q("Not initial render"),a.next=7,e.loginUser(n);case 7:a.next=10;break;case 9:L(Object(l.a)(Object(l.a)({},R),{},{password:"Password is not empty"}));case 10:a.next=13;break;case 12:L(Object(l.a)(Object(l.a)({},R),{},{email:"Email is not valid"}));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:G.root},r.a.createElement(j.a,{className:G.paper,elevation:3},r.a.createElement(w.a,{variant:"h4",align:"center"},"RentalZ"),r.a.createElement(w.a,{variant:"subtitle1",align:"center"},"Place to rend apartments"),r.a.createElement(A.a,null),"login"===O?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:G.form,noValidate:!0,autoComplete:"off"},R.email?r.a.createElement(C.a,{name:"email",error:!0,label:"Email",type:"email",variant:"outlined",helperText:R.email,onChange:H}):r.a.createElement(C.a,{name:"email",label:"Email",type:"email",variant:"outlined",onChange:H}),R.password?r.a.createElement(C.a,{name:"password",error:!0,label:"Password",type:"password",variant:"outlined",helperText:R.password,onChange:H}):r.a.createElement(C.a,{name:"password",label:"Password",type:"password",variant:"outlined",onChange:H}),r.a.createElement(N.a,{variant:"contained",color:"primary",type:"submit",className:G.button,endIcon:r.a.createElement(_.a,null),onClick:W},"Login"),R.login&&!R.email&&r.a.createElement(w.a,{variant:"body2",className:G.customError},R.login),e.UI.loading&&r.a.createElement("div",{className:G.spinner}," ",r.a.createElement(x,null))),r.a.createElement(w.a,{className:G.forgotPass,variant:"subtitle1",align:"center"},"Forgot password? ",r.a.createElement("a",{href:"#"},"Click here")),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"h6",align:"center"},"Don't have an account?",r.a.createElement(T.a,{"aria-label":"Registor",color:"primary",onClick:function(){S("registor")}},r.a.createElement(P.a,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:G.form,noValidate:!0,autoComplete:"off"},R.email?r.a.createElement(C.a,{name:"email",error:!0,label:"Email",type:"email",variant:"outlined",helperText:R.email,onChange:H}):r.a.createElement(C.a,{name:"email",label:"Email",type:"email",variant:"outlined",onChange:H}),R.password?r.a.createElement(C.a,{name:"password",error:!0,label:"Password",type:"password",variant:"outlined",helperText:R.password,onChange:H}):r.a.createElement(C.a,{name:"password",label:"Password",type:"password",variant:"outlined",onChange:H}),r.a.createElement(C.a,{name:"confirmPassword",label:"Confirm password",type:"password",variant:"outlined",onChange:H}),r.a.createElement(N.a,{variant:"contained",color:"primary",className:G.button,endIcon:r.a.createElement(P.a,null),onClick:z,type:"submit"},"Registor"),R.login&&!R.email&&r.a.createElement(w.a,{variant:"body2",className:G.customError},R.login),e.UI.loading&&r.a.createElement("div",{className:G.spinner}," ",r.a.createElement(x,null))),r.a.createElement(w.a,{variant:"h6",align:"center"},"Had an account?",r.a.createElement(T.a,{"aria-label":"Login",color:"primary",onClick:function(e){e.preventDefault(),S("login")}},r.a.createElement(F.a,null))))))})),G=t(102);function H(){var e=Object(G.a)(["\n    min-height: 40vh;\n    background: url(",") center/cover no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return H=function(){return e},e}var z=t(103).a.header(H(),(function(e){return e.img})),W=Object(O.a)((function(e){return{banner:{margin:0}}})),Y=function(){var e=W();return r.a.createElement("div",{className:e.banner})},Z=t(212),V=Object(O.a)((function(e){return{root:{flexGrow:1},paper:Object(d.a)({padding:e.spacing(2),margin:"auto",maxWidth:500,backgroundColor:"transparent"},e.breakpoints.down("sm"),{width:400}),image:Object(d.a)({width:128,height:128},e.breakpoints.down("sm"),{width:110,height:110}),img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},content:{textAlign:"justify"},contentContainer:{marginTop:"auto",marginBottom:"auto"}}})),$=function(e){var a=e.content,t=e.img,n=e.direction,i=V();return r.a.createElement("div",{className:i.root},r.a.createElement(j.a,{className:i.paper,elevation:0},r.a.createElement(Z.a,{container:!0,spacing:2,direction:n},r.a.createElement(Z.a,{item:!0,xs:12,sm:5,align:"center"},t),r.a.createElement(Z.a,{item:!0,xs:12,sm:7,className:i.contentContainer},r.a.createElement(w.a,{variant:"body2",className:i.content},a)))))},J=t(107),K=t.n(J),Q=t(108),X=t.n(Q),ee=t(109),ae=t.n(ee),te={data:[{content:"Lorem ipsum dolor, it amet consectetur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",img:r.a.createElement(K.a,{style:{width:100,height:100}}),direction:"row"},{content:"Lorem ipsum dolor, sit amet consecttur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",img:r.a.createElement(X.a,{style:{width:100,height:100}}),direction:"row"},{content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",img:r.a.createElement(ae.a,{style:{width:100,height:100}}),direction:"row"}]},ne=function(){return r.a.createElement("div",null,r.a.createElement(Z.a,{container:!0},te.data.map((function(e){return r.a.createElement(Z.a,{item:!0,xs:12,lg:4,key:e.content},r.a.createElement($,{content:e.content,direction:e.direction,img:e.img}))}))))},re=t(77),ie=t.n(re),oe=t(214),le=t(215),ce=t(213),se=t(216),me=t(217),pe=t(229),de=t(227),ue=t(225),he=function(){return function(e){e({type:"LOADING_DATA"}),R.a.get("/apartments").then((function(a){e({type:"SET_APARTMENTS",payload:a.data}),e({type:"STOP_LOADING_UI"})})).catch((function(a){e({type:"SET_APARTMENTS",payload:[]})}))}},ge=function(e,a){return function(t){t({type:"LOADING_UI"}),R.a.post("/apartment/image/".concat(a),e).then((function(e){t(be(a)),t({type:"STOP_LOADING_UI"})})).catch((function(e){return console.log(e)}))}},be=function(e){return function(a){a({type:"LOADING_DATA"}),R.a.get("/apartment/".concat(e)).then((function(e){a({type:"SET_APARTMENT",payload:e.data})})).catch((function(e){return console.log(e)}))}},Ee=function(){return function(e){e({type:"CLEAR_ERRORS"})}},fe=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={type:"",bedrooms:"",price:0,furniture:"",reporter:"",notes:"Empty",message:"",url:null,uploadedImage:null,errors:{}},e.handleChange=function(a){e.setState(Object(l.a)(Object(l.a)({},e.state),{},Object(d.a)({},a.target.name,a.target.value)))},e.handleUpload=function(a){a.preventDefault();var t=a.target.files[0];e.setState(Object(l.a)(Object(l.a)({},e.state),{},{uploadedImage:t}))},e.handleSubmit=function(a){a.preventDefault();var t={};if(""===e.state.type?t.type="Type is required!":""===e.state.bedrooms&&(t.bedrooms="Bedrooms is required!"),0===e.state.price&&(t.price="Price is required!"),""===e.state.reporter&&(t.reporter="Reporter is required!"),t.type||t.bedrooms||t.price||t.reporter)e.setState(Object(l.a)(Object(l.a)({},e.state),{},{errors:t}));else{var n={type:e.state.type,bedrooms:e.state.bedrooms,price:e.state.price,furniture:e.state.furniture,reporter:e.state.reporter,notes:e.state.notes,url:e.state.url};if(console.log(e.props.UI),null!==e.state.uploadedImage){var r=new FormData;r.append("image",e.state.uploadedImage,e.state.uploadedImage.name),e.props.uploadImage(r,e.props.apartment.id)}e.props.updateApartment(e.props.apartment.id,n)}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.apartment;this.setState(Object(l.a)(Object(l.a)({},this.state),{},{type:e.type,bedrooms:e.bedrooms,price:e.price,furniture:e.furniture,reporter:e.reporter,notes:e.notes,url:e.url}))}},{key:"render",value:function(){console.log(this.props.UI);var e=this.props.classes;return this.props.data.loading?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,"Update successfully!"===this.props.data.message&&r.a.createElement(w.a,{variant:"h5",align:"center",color:"secondary"},this.props.data.message),r.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},this.state.errors.type?r.a.createElement(C.a,{name:"type",error:!0,helperText:this.state.errors.type,required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange,value:this.state.type}):r.a.createElement(C.a,{name:"type",required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange,value:this.state.type}),this.state.errors.bedrooms?r.a.createElement(C.a,{name:"bedrooms",error:!0,helperText:this.state.errors.bedrooms,required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange,value:this.state.bedrooms}):r.a.createElement(C.a,{name:"bedrooms",required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange,value:this.state.bedrooms}),this.state.errors.price?r.a.createElement(C.a,{name:"price",error:!0,helperText:this.state.errors.price,type:"number",required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange,value:this.state.price}):r.a.createElement(C.a,{name:"price",type:"number",required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange,value:this.state.price}),r.a.createElement(C.a,{name:"furniture",label:"4. Furniture",variant:"filled",onChange:this.handleChange,value:this.state.furniture}),this.state.errors.reporter?r.a.createElement(C.a,{name:"reporter",error:!0,helperText:this.state.errors.reporter,required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange,value:this.state.reporter}):r.a.createElement(C.a,{name:"reporter",required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange,value:this.state.reporter}),r.a.createElement(C.a,{name:"notes",label:"6. Notes",variant:"filled",onChange:this.handleChange,value:this.state.notes&&this.state.notes}),null!==this.state.url&&r.a.createElement(ce.a,{className:e.media,image:this.state.url,onClick:this.handleMediaClick}),r.a.createElement(C.a,{type:"file",name:"image",onChange:this.handleUpload}),r.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary"},"Update"),this.props.data.loading&&r.a.createElement(x,null),this.props.UI.errors&&r.a.createElement("h2",null,"Update failed!")))}}]),t}(n.Component),ve={getOne:be,updateApartment:function(e,a){return function(t){t({type:"LOADING_DATA"}),R.a.patch("/apartment/".concat(e),a).then((function(a){var n={apartment:Object(l.a)(Object(l.a)({},a.data.apartment),{},{id:e}),message:"Update successfully!"};t({type:"UPDATE_APARTMENT",payload:n}),t(Ee())})).catch((function(e){t({type:"SET_ERRORS",payload:"Update failed!"})}))}},uploadImage:ge,getApartments:he},ye=Object(D.b)((function(e){return{UI:e.UI,user:e.user,data:e.data}}),ve)(Object(g.a)((function(e){return{form:{"& > *":{margin:e.spacing(.5),width:"100%"}},media:{height:0,paddingTop:"45%"}}}))(fe)),Oe=t(111),je=t.n(Oe),we=Object(O.a)((function(e){return{form:{"& > *":{margin:e.spacing(1),width:"25ch"}},paper:Object(d.a)({position:"absolute",width:500,height:700,overflow:"scroll",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e.breakpoints.down("md"),{width:300,height:500}),addIcon:{width:"60%",height:"60%",margin:"20%"}}})),Ae=function(e){var a=e.apartment,t=we(),n=r.a.useState(!1),i=Object(y.a)(n,2),o=i[0],l=i[1],c=r.a.createElement("div",{className:t.paper},r.a.createElement(w.a,{variant:"h4",align:"center"},"Update an apartment"),r.a.createElement(ye,{apartment:a}));return r.a.createElement("div",null,r.a.createElement(de.a,{title:"Update and note",placement:"top"},r.a.createElement(T.a,{"aria-label":"update",color:"primary",onClick:function(){l(!0)}},r.a.createElement(je.a,null))),r.a.createElement(ue.a,{open:o,onClose:function(){l(!1)}},c))},Ce=t(112),Ne=t.n(Ce),Te=Object(O.a)((function(e){return{root:{maxWidth:"500px",marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"56.25%"},cardActions:{justifyContent:"flex-end"},cardContent:{height:"350px"}}})),Se=function(e){var a=e.apartment,t=e.flag,n=e.deleteApartment,i=Te();return a?r.a.createElement(oe.a,{className:i.root,raised:!0},r.a.createElement(le.a,{avatar:r.a.createElement(pe.a,{src:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media"}),title:a.type,subheader:ie()(a.dateCreate).format("DD/MM/YYYY")}),r.a.createElement(ce.a,{className:i.media,image:a.url}),r.a.createElement(se.a,{className:i.cardContent},r.a.createElement(w.a,{variant:"h6"},"Details"),r.a.createElement(w.a,{variant:"subtitle1"},"\xa0\u2022 Type: ",a.type),r.a.createElement(w.a,{variant:"subtitle1"},"\xa0\u2022 Bedrooms: ",a.bedrooms),r.a.createElement(w.a,{variant:"subtitle1"},"\xa0\u2022 Price: ",a.price),r.a.createElement(w.a,{variant:"subtitle1"},"\xa0\u2022 Furniture type: ",a.furniture),r.a.createElement(w.a,{variant:"subtitle1"},"\xa0\u2022 Reporter: ",a.reporter),r.a.createElement(w.a,{variant:"subtitle1"},"\xa0\u2022 Created date: ",ie()(a.dateCreate).format("DD/MM/YYYY")),"Empty"!==a.notes&&r.a.createElement(w.a,{variant:"subtitle2",color:"secondary"},"\xa0",r.a.createElement("i",null,"*Note: ",a.notes))),"apartments"===t&&r.a.createElement(me.a,{className:i.cardActions,disableSpacing:!0},r.a.createElement(Ae,{apartment:a}),r.a.createElement(de.a,{title:"Delete",placement:"top"},r.a.createElement(T.a,{"aria-label":"delete",color:"secondary",onClick:function(){n(a.id)}},r.a.createElement(Ne.a,null))))):r.a.createElement(r.a.Fragment,null)},Ie=Object(O.a)((function(e){return{root:{margin:"2%"},hover:{"&:hover":{opacity:.8}},container:{maxHeight:"1000px",width:"90%",marginLeft:"5%",marginRight:"5%",overflow:"auto"}}})),xe=function(e){var a=Ie();return r.a.createElement("div",{className:a.root},r.a.createElement(w.a,{variant:"h4",align:"center"},"New Rent Apartments"),r.a.createElement("br",null),r.a.createElement(Z.a,{container:!0,className:a.container,spacing:3,alignItems:"center"},e.loading&&r.a.createElement(x,null),e.apartments.map((function(e){return r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:4,className:a.hover,key:e.id},r.a.createElement(Se,{apartment:e,flag:"home"}))}))))},ke=Object(O.a)((function(e){return{root:{backgroundColor:"#3f51b5",padding:"2%"},hover:{"&:hover":{opacity:.8}},title:{color:"white"},container:{maxHeight:"1000px",width:"90%",marginLeft:"5%",marginRight:"5%",overflow:"auto"}}})),Re=function(e){var a=ke();return r.a.createElement("div",{className:a.root},r.a.createElement(w.a,{variant:"h4",align:"center",className:a.title},"Search result"),r.a.createElement("br",null),r.a.createElement(Z.a,{container:!0,className:a.container,spacing:3,alignItems:"center"},e.loading&&r.a.createElement(x,null),0!==e.apartmentsFilter.length&&e.apartmentsFilter.map((function(e){return r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:4,className:a.hover,key:e.id},r.a.createElement(Se,{apartment:e,flag:"apartments"}))})),0===e.apartmentsFilter.length&&r.a.createElement("h3",{style:{width:"100%",textAlign:"center",color:"white"}},"No matched results")))},Le=function(){return r.a.createElement(A.a,{style:{marginTop:"3rem",marginBottom:"3rem"}})},Ue=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getApartments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{img:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/homeBanner.jpg?alt=media"},r.a.createElement(Y,null)),r.a.createElement(Le,null),this.props.app.state.search&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{apartmentsFilter:this.props.data.apartmentsFilter,loading:this.props.data.loading}),r.a.createElement(Le,null)),r.a.createElement(ne,null),r.a.createElement(Le,null),r.a.createElement(xe,{apartments:this.props.data.apartments,loading:this.props.data.loading}))}}]),t}(n.Component),De={getApartments:he},_e=Object(D.b)((function(e){return{user:e.user,UI:e.UI,data:e.data}}),De)(Ue),Pe=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={type:"",bedrooms:"",price:0,furniture:"",reporter:"",notes:"Empty",url:"",message:"",errors:{}},e.handleChange=function(a){e.setState(Object(l.a)(Object(l.a)({},e.state),{},Object(d.a)({},a.target.name,a.target.value)))},e.handleUpload=function(a){a.preventDefault();var t=a.target.files[0],n=new FormData;n.append("image",t,t.name),e.props.uploadImage(n,e.props.data.apartments[e.props.data.apartments.length-1].apartment.id)},e.handleSubmit=function(a){a.preventDefault();var t={};if(""===e.state.type?t.type="Type is required!":""===e.state.bedrooms&&(t.bedrooms="Bedrooms is required!"),0===e.state.price&&(t.price="Price is required!"),""===e.state.reporter&&(t.reporter="Reporter is required!"),t!=={})e.setState(Object(l.a)(Object(l.a)({},e.state),{},{errors:t}));else{var n={type:e.state.type,bedrooms:e.state.bedrooms,price:e.state.price,furniture:e.state.furniture,reporter:e.props.user.credentials.email,notes:e.state.notes};e.props.postApartment(n)}},e}return Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{message:this.props.data.message}))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},this.state.errors.type?r.a.createElement(C.a,{error:!0,name:"type",helperText:this.state.errors.type,required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange}):r.a.createElement(C.a,{name:"type",required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange}),this.state.errors.bedrooms?r.a.createElement(C.a,{error:!0,name:"bedrooms",helperText:this.state.errors.bedrooms,required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange}):r.a.createElement(C.a,{name:"bedrooms",required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange}),this.state.errors.price?r.a.createElement(C.a,{error:!0,name:"price",type:"number",helperText:this.state.errors.price,required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange}):r.a.createElement(C.a,{name:"price",type:"number",required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange}),r.a.createElement(C.a,{name:"furniture",label:"4. Furniture",variant:"filled",onChange:this.handleChange}),this.state.errors.reporter?r.a.createElement(C.a,{error:!0,name:"reporter",helperText:this.state.errors.reporter,required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange}):r.a.createElement(C.a,{name:"reporter",required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange}),r.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary"},"Create information"),this.state.message&&r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,"Add apartment image:"),r.a.createElement(C.a,{type:"file",name:"image",onChange:this.handleUpload})),"Loaded image"===this.state.message&&r.a.createElement(w.a,{variant:"body2",className:e.customError},this.state.message),this.props.data.loading&&r.a.createElement(x,null))}}]),t}(n.Component),Fe={postApartment:function(e){return function(a){a({type:"LOADING_DATA"}),R.a.post("/apartment",e).then((function(e){console.log(e.data),a({type:"POST_APARTMENT",payload:e.data}),a(Ee())})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}},uploadImage:ge},Be=Object(D.b)((function(e){return{UI:e.UI,user:e.user,data:e.data}}),Fe)(Object(g.a)((function(e){return{form:{"& > *":{margin:e.spacing(1),width:"100%"}},customError:{color:"red",textAlign:"center",marginTop:10}}}))(Pe)),Me=t(113),qe=t.n(Me),Ge=Object(O.a)((function(e){return{form:{"& > *":{margin:e.spacing(1),width:"25ch"}},paper:Object(d.a)({position:"absolute",width:500,height:700,overflow:"scroll",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e.breakpoints.down("md"),{width:300,height:500}),addIcon:{width:"60%",height:"60%",margin:"20%"}}})),He=function(){var e=Ge(),a=r.a.useState(!1),t=Object(y.a)(a,2),n=t[0],i=t[1],o=r.a.createElement("div",{className:e.paper},r.a.createElement(w.a,{variant:"h4",align:"center"},"Create an apartment"),r.a.createElement(Be,null));return r.a.createElement("div",null,r.a.createElement(de.a,{title:"Add more"},r.a.createElement(qe.a,{className:e.addIcon,onClick:function(){i(!0)}})),r.a.createElement(ue.a,{open:n,onClose:function(){i(!1)}},o))},ze=Object(O.a)((function(e){return{root:{margin:"2%"},divider:{marginBottom:"1rem"},hover:{"&:hover":{opacity:.8}},hoverAdd:{"&:hover":{opacity:.8,cursor:"pointer"}},container:{maxHeight:"1000px",width:"90%",marginLeft:"5%",marginRight:"5%",overflow:"auto"},addIcon:{width:"40%",height:"40%",margin:"30%"}}})),We=function(e){var a=ze();return r.a.createElement("div",{className:a.root},r.a.createElement(w.a,{variant:"h4",align:"center"},"Rent Apartments"),r.a.createElement(Le,{className:a.divider}),r.a.createElement(Z.a,{container:!0,className:a.container,spacing:3,alignItems:"center"},r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:4,className:a.hoverAdd},r.a.createElement(de.a,{title:"Add more"},r.a.createElement(r.a.Fragment,null,r.a.createElement(He,null)))),e.loading&&r.a.createElement(x,null),e.apartments.map((function(t){return r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:4,className:a.hover,key:t.id+Math.random()},r.a.createElement(Se,{apartment:t,flag:"apartments",deleteApartment:e.deleteApartment}))}))))},Ye=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getApartments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{img:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/apartmentBanner.jpg?alt=media"},r.a.createElement(Y,null)),r.a.createElement(Le,null),this.props.app.state.search&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{apartmentsFilter:this.props.data.apartmentsFilter}),r.a.createElement(Le,null)),r.a.createElement(We,{apartments:this.props.data.apartments,loading:this.props.data.loading,deleteApartment:this.props.deleteApartment.bind(this)}))}}]),t}(n.Component),Ze={getApartments:he,deleteApartment:function(e){return function(a){a({type:"LOADING_DATA"}),R.a.delete("/apartment/".concat(e)).then((function(){a({type:"DELETE_APARTMENT",payload:e})})).catch((function(e){return console.log(e)}))}}},Ve=Object(D.b)((function(e){return{user:e.user,UI:e.UI,data:e.data}}),Ze)(Ye),$e=t(218),Je=t(219),Ke=t(220),Qe=t(228),Xe=t(226),ea=t(206),aa=t(221),ta=t(222),na=t(223),ra=t(14),ia=t(19),oa=t(80),la=t.n(oa),ca=t(81),sa=t.n(ca),ma=t(82),pa=t.n(ma),da=t(115),ua=t.n(da),ha=t(114),ga=t.n(ha),ba=t(116),Ea=t.n(ba),fa=t(117),va=t.n(fa),ya=Object(O.a)((function(e){return Object(d.a)({appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},navLink:{textDecoration:"none",color:"black"},avatarSize:{height:e.spacing(7),width:e.spacing(7)},divider:{background:"blue"},search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ra.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ra.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"8ch"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:e.mixins.toolbar},e.breakpoints.up("md"),{menuButton:{marginRight:e.spacing(2)},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}})})),Oa={getUserData:L,filter:function(e){return function(a){a({type:"LOADING_DATA"}),R.a.get("/apartmentsFilter/".concat(e)).then((function(e){a({type:"FILTER_APARTMENTS",payload:e.data}),a({type:"STOP_LOADING_UI"})})).catch((function(e){a({type:"FILTER_APARTMENTS",payload:[]})}))}}},ja=Object(D.b)((function(e){return{user:e.user,data:e.data}}),Oa)((function(e){var a=ya(),t=Object(ia.a)(),i=Object(n.useState)(!1),o=Object(y.a)(i,2),c=o[0],s=o[1],m=Object(n.useState)(window.innerWidth),p=Object(y.a)(m,2),h=(p[0],p[1]),g=function(){localStorage.removeItem("FBidToken"),localStorage.removeItem("userId"),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{login:!1}))},E=function(){s(!1),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{open:!1}))},f=function(){h(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",f),function(){return window.removeEventListener("resize",f)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement($e.a,null),r.a.createElement(Je.a,{position:"fixed",className:Object(b.a)(a.appBar,Object(d.a)({},a.appBarShift,c))},r.a.createElement(Ke.a,null,window.innerWidth<=960&&r.a.createElement(T.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{open:!0}))},edge:"start",className:Object(b.a)(a.menuButton,c&&a.hide)},r.a.createElement(ga.a,null)),r.a.createElement(Z.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(Z.a,{item:!0},r.a.createElement(w.a,{variant:"h5",noWrap:!0,align:"center"},"RentalZ")),r.a.createElement(Z.a,{item:!0},r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(ua.a,null)),r.a.createElement(Qe.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},name:"search",onChange:function(a){var t=a.target.value;""!==t?(e.filter(t),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{search:!0}))):(e.data.apartmentsFilter=[],e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{search:!1})))}})))))),window.innerWidth>960?r.a.createElement(Xe.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper},anchor:"left",open:!0},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(A.a,{className:a.divider}),r.a.createElement(Z.a,{container:!0,style:{padding:"1rem"}},r.a.createElement(Z.a,{container:!0,item:!0,xs:4,justify:"center",alignItems:"center"},r.a.createElement(pe.a,{alt:"User avatar",src:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media",className:a.avatarSize})),r.a.createElement(Z.a,{container:!0,item:!0,xs:8,alignItems:"center"},r.a.createElement(Z.a,{item:!0},r.a.createElement(w.a,null,"Hello, ",e.user.credentials.email)))),r.a.createElement(A.a,{className:a.divider}),r.a.createElement(ea.a,null,["Home","Apartments"].map((function(e,t){return"Home"===e?r.a.createElement(u.b,{to:"/home",className:a.navLink,key:e},r.a.createElement(aa.a,{button:!0},r.a.createElement(ta.a,null,r.a.createElement(la.a,null)),r.a.createElement(na.a,{primary:e}))):r.a.createElement(u.b,{to:"/apartments",className:a.navLink,key:e},r.a.createElement(aa.a,{button:!0,key:e},r.a.createElement(ta.a,null,r.a.createElement(sa.a,null)),r.a.createElement(na.a,{primary:e})))}))),r.a.createElement(A.a,{className:a.divider}),r.a.createElement(ea.a,null,r.a.createElement("div",{className:a.navLink,onClick:g},r.a.createElement(aa.a,{button:!0},r.a.createElement(ta.a,null,r.a.createElement(pa.a,null)),r.a.createElement(na.a,{primary:"Log out"}))))):r.a.createElement(Xe.a,{className:a.drawer,variant:"persistent",classes:{paper:a.drawerPaper},anchor:"left",open:c},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(T.a,{onClick:E},"ltr"===t.direction?r.a.createElement(Ea.a,null):r.a.createElement(va.a,null))),r.a.createElement("div",{className:a.toolbar}),r.a.createElement(A.a,{className:a.divider}),r.a.createElement(Z.a,{container:!0,style:{padding:"1rem"}},r.a.createElement(Z.a,{container:!0,item:!0,xs:4,justify:"center",alignItems:"center"},r.a.createElement(pe.a,{alt:"User avatar",src:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media",className:a.avatarSize})),r.a.createElement(Z.a,{container:!0,item:!0,xs:8,alignItems:"center"},r.a.createElement(Z.a,{item:!0},r.a.createElement(w.a,null,"Hello, ",e.user.credentials.email)))),r.a.createElement(A.a,{className:a.divider}),r.a.createElement(ea.a,null,["Home","Apartments"].map((function(e,t){return"Home"===e?r.a.createElement(u.b,{to:"/home",className:a.navLink,key:e,onClick:E},r.a.createElement(aa.a,{button:!0},r.a.createElement(ta.a,null,r.a.createElement(la.a,null)),r.a.createElement(na.a,{primary:e}))):r.a.createElement(u.b,{to:"/apartments",className:a.navLink,key:e,onClick:E},r.a.createElement(aa.a,{button:!0,key:e},r.a.createElement(ta.a,null,r.a.createElement(sa.a,null)),r.a.createElement(na.a,{primary:e})))}))),r.a.createElement(A.a,{className:a.divider}),r.a.createElement(ea.a,null,r.a.createElement("div",{className:a.navLink,onClick:g},r.a.createElement(aa.a,{button:!0},r.a.createElement(ta.a,null,r.a.createElement(pa.a,null)),r.a.createElement(na.a,{primary:"Log out"}))))))})),wa=t(49),Aa=t(118),Ca={authenticated:!1,loading:!1,credentials:{}},Na={apartments:[],apartmentsFilter:[],apartment:{},loading:!1,message:""},Ta={loading:!1,errors:null},Sa=[Aa.a],Ia=Object(wa.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ca,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_AUTHENTICATED":return Object(l.a)(Object(l.a)({},e),{},{authenticated:!0});case"SET_UNAUTHENTICATED":return Ca;case"SET_USER":return Object(l.a)(Object(l.a)({},e),{},{authenticated:!0,loading:!1,credentials:a.payload});case"LOADING_USER":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return e}},data:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Na,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Object(l.a)(Object(l.a)({},a),{},{loading:!0});case"SET_APARTMENTS":return Object(l.a)(Object(l.a)({},a),{},{apartments:t.payload,loading:!1});case"SET_APARTMENT":return Object(l.a)(Object(l.a)({},a),{},{loading:!1,message:"Loaded image",apartment:t.payload});case"FILTER_APARTMENTS":return Object(l.a)(Object(l.a)({},a),{},{apartmentsFilter:t.payload,loading:!1});case"POST_APARTMENT":return a.apartments.push(t.payload),Object(l.a)(Object(l.a)({},a),{},{loading:!1,message:t.payload.message});case"UPDATE_APARTMENT":return e=a.apartments.findIndex((function(e){return e.id===t.payload.apartment.id})),a.apartments.splice(e,1),a.apartments.push(t.payload.apartment),a.apartments.sort((function(e,a){return e.dateCreate<a.dateCreate||e.dateCreate===a.dateCreate&&e.type>a.type?1:-1})),Object(l.a)(Object(l.a)({},a),{},{loading:!1,apartmentsFilter:[],message:t.payload.message});case"DELETE_APARTMENT":return e=a.apartments.findIndex((function(e){return e.id===t.payload})),a.apartments.splice(e,1),Object(l.a)(Object(l.a)({},a),{},{loading:!1});default:return a}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ta,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_ERRORS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errors:a.payload.message});case"CLEAR_ERRORS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errors:null});case"LOADING_UI":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"STOP_LOADING_UI":return Object(l.a)(Object(l.a)({},e),{},{loading:!1});default:return e}}}),xa=Object(wa.e)(Ia,{},Object(wa.d)(wa.a.apply(void 0,Sa))),ka=t(119),Ra=t.n(ka);R.a.defaults.baseURL="https://app-rentalz.herokuapp.com/";var La=localStorage.FBidToken;La&&(1e3*Ra()(La).exp<Date.now()?(window.location.href="/login",xa.dispatch((function(e){localStorage.removeItem("FBidToken"),delete R.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}))):(xa.dispatch({type:"SET_AUTHENTICATED"}),R.a.defaults.headers.common.Authorization=La,xa.dispatch(L(localStorage.userId))));var Ua=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={open:!1,login:!1},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){void 0===localStorage.FBidToken?this.setState(Object(l.a)(Object(l.a)({},this.state),{},{login:!1})):this.setState(Object(l.a)(Object(l.a)({},this.state),{},{login:!0}))}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(D.a,{store:xa},r.a.createElement(u.a,null,this.state.login?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(ja,{app:this}),r.a.createElement("main",{className:Object(b.a)(a.content,Object(d.a)({},a.contentShift,this.state.open))},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(h.d,null,r.a.createElement(h.a,{exact:!0,path:"/",to:"/home"}),r.a.createElement(h.a,{exact:!0,path:"/login",to:"/home"}),r.a.createElement(h.b,{path:"/home",exact:!0,component:function(){return r.a.createElement(_e,{app:e})}}),r.a.createElement(h.b,{path:"/apartments",exact:!0,component:function(){return r.a.createElement(Ve,{app:e})}}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",to:"/login"}),r.a.createElement(h.b,{path:"/login",exact:!0,render:function(){return r.a.createElement(q,{login:e})}}))))}}]),t}(n.Component),Da=Object(g.a)((function(e){return Object(d.a)({root:{display:"flex",overflow:"hidden"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:"rgba(0, 0, 0.08, 0.08)"}},e.breakpoints.down("sm"),{content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})}))(Ua);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _a=function(){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Da,null)),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",(function(){_a()}),!1):_a(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.5347d982.chunk.js.map