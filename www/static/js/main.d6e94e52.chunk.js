(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{125:function(e,t,a){e.exports=a(156)},130:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),l=a(5),c=a(34),s=a(35),m=a(37),p=a(36),d=a(11),u=a(50),h=a(13),g=(a(130),a(4)),E=a(3),b=a(25),f=a(195),v=a(119),y=a(45),O=a(200),j=a(221),w=a(204),A=a(206),C=a(198),N=Object(f.a)((function(e){return{root:{width:"100%"},spinner:{width:"6%",height:"40px",marginLeft:"47%",marginRight:"47%"}}})),T=function(){var e=N();return r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{className:e.spinner}))},S=a(16),I=a.n(S),x=function(e){return function(t){t({type:"LOADING_USER"}),I.a.get("/user/".concat(e)).then((function(e){t({type:"SET_USER",payload:e.data})})).catch((function(e){return console.log(e)}))}},k=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBidToken",t),I.a.defaults.headers.common.Authorization=t},R=a(20),L=a(205),D=a(207),U=a(208),_=Object(f.a)((function(e){return{root:Object(d.a)({backgroundColor:"#bbdefb",padding:"5rem",paddingLeft:"15rem",paddingRight:"15rem",height:"95vh"},e.breakpoints.down("md"),{padding:"1rem"}),paper:{padding:"5%"},form:{"& > *":{margin:e.spacing(1),width:"100%"},padding:"5vh"},button:Object(d.a)({margin:e.spacing(1),width:"20%",marginLeft:"40%",marginRight:"40%"},e.breakpoints.down("md"),{width:"36%",marginLeft:"32%",marginRight:"32%"}),forgotPass:{marginTop:"-3%"},customError:{color:"red",textAlign:"center",marginTop:10}}})),P={loginUser:function(e,t){return function(t){t({type:"LOADING_UI"}),I.a.post("/login",e).then((function(e){localStorage.userId=e.data.id,k(e.data.token),t(x(e.data.id)),t({type:"CLEAR_ERRORS"}),t({type:"STOP_LOADING_UI"})})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}},registor:function(e,t){return function(a){a({type:"LOADING_UI"}),I.a.post("/registor",e).then((function(e){k(e.data.token),a(x(e.data.id)),a({type:"CLEAR_ERRORS"}),a({type:"STOP_LOADING_UI"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},F=Object(R.b)((function(e){return{user:e.user,UI:e.UI}}),P)((function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),m=s[0],p=s[1],d=Object(n.useState)(""),u=Object(b.a)(d,2),h=u[0],g=u[1],E=Object(n.useState)("login"),f=Object(b.a)(E,2),C=f[0],N=f[1],S=Object(n.useState)({}),I=Object(b.a)(S,2),x=I[0],k=I[1],R=_();Object(n.useEffect)((function(){e.UI.errors&&k(e.UI.errors)}));var P=function(e){switch(e.target.name){case"email":o(e.target.value);break;case"password":p(e.target.value);break;case"confirmPassword":g(e.target.value)}};return r.a.createElement("div",{className:R.root},r.a.createElement(v.a,{className:R.paper,elevation:3},r.a.createElement(y.a,{variant:"h4",align:"center"},"RentalZ"),r.a.createElement(y.a,{variant:"subtitle1",align:"center"},"Place to rend apartments"),r.a.createElement(O.a,null),"login"===C?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:R.form,noValidate:!0,autoComplete:"off"},r.a.createElement(j.a,{name:"email",label:"Email",type:"text",variant:"outlined",onChange:P}),r.a.createElement(j.a,{name:"password",label:"Password",type:"password",variant:"outlined",onChange:P}),r.a.createElement(w.a,{variant:"contained",color:"primary",type:"submit",className:R.button,endIcon:r.a.createElement(L.a,null),onClick:function(t){t.preventDefault();var a={email:i,password:m};e.loginUser(a,e.history),e.login.setState(Object(l.a)(Object(l.a)({},e.login.state),{},{login:!0}))}},"Login"),x.message&&r.a.createElement(y.a,{variant:"body2",className:R.customError},x.message),e.UI.loading&&r.a.createElement(T,null)),r.a.createElement(y.a,{className:R.forgotPass,variant:"subtitle1",align:"center"},"Forgot password? ",r.a.createElement("a",{href:"#"},"Click here")),r.a.createElement("br",null),r.a.createElement(y.a,{variant:"h6",align:"center"},"Don't have an account?",r.a.createElement(A.a,{"aria-label":"Registor",color:"primary",onClick:function(){N("registor")}},r.a.createElement(D.a,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:R.form,noValidate:!0,autoComplete:"off"},r.a.createElement(j.a,{name:"email",label:"Email",type:"text",variant:"outlined",onChange:P}),r.a.createElement(j.a,{name:"password",label:"Password",type:"password",variant:"outlined",onChange:P}),r.a.createElement(j.a,{name:"confirmPassword",label:"Confirm password",type:"password",variant:"outlined",onChange:P}),r.a.createElement(w.a,{variant:"contained",color:"primary",className:R.button,endIcon:r.a.createElement(D.a,null),onClick:function(t){t.preventDefault();var a={email:i,password:m,confirmPassword:h};e.registor(a,e.history),e.login.setState(Object(l.a)(Object(l.a)({},e.login.state),{},{login:!0}))},type:"submit"},"Registor"),x.message&&r.a.createElement(y.a,{variant:"body2",className:R.customError},x.message),e.UI.loading&&r.a.createElement(T,null)),r.a.createElement(y.a,{variant:"h6",align:"center"},"Had an account?",r.a.createElement(A.a,{"aria-label":"Login",color:"primary",onClick:function(e){e.preventDefault(),N("login")}},r.a.createElement(U.a,null))))))})),B=a(100);function M(){var e=Object(B.a)(["\n    min-height: 40vh;\n    background: url(",") center/cover no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return M=function(){return e},e}var q=a(101).a.header(M(),(function(e){return e.img})),G=Object(f.a)((function(e){return{banner:{margin:0}}})),H=function(){var e=G();return r.a.createElement("div",{className:e.banner})},W=a(209),z=Object(f.a)((function(e){return{root:{flexGrow:1},paper:Object(d.a)({padding:e.spacing(2),margin:"auto",maxWidth:500,backgroundColor:"transparent"},e.breakpoints.down("sm"),{width:400}),image:Object(d.a)({width:128,height:128},e.breakpoints.down("sm"),{width:110,height:110}),img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},content:{textAlign:"justify"},contentContainer:{marginTop:"auto",marginBottom:"auto"}}})),Y=function(e){var t=e.content,a=e.img,n=e.direction,i=z();return r.a.createElement("div",{className:i.root},r.a.createElement(v.a,{className:i.paper,elevation:0},r.a.createElement(W.a,{container:!0,spacing:2,direction:n},r.a.createElement(W.a,{item:!0,xs:12,sm:5,align:"center"},a),r.a.createElement(W.a,{item:!0,xs:12,sm:7,className:i.contentContainer},r.a.createElement(y.a,{variant:"body2",className:i.content},t)))))},V=a(105),J=a.n(V),Z=a(106),$=a.n(Z),K=a(107),Q=a.n(K),X={data:[{content:"Lorem ipsum dolor, it amet consectetur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",img:r.a.createElement(J.a,{style:{width:100,height:100}}),direction:"row"},{content:"Lorem ipsum dolor, sit amet consecttur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",img:r.a.createElement($.a,{style:{width:100,height:100}}),direction:"row"},{content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptas sapiente, deserunt minima laudantium possimus.",img:r.a.createElement(Q.a,{style:{width:100,height:100}}),direction:"row"}]},ee=function(){return r.a.createElement("div",null,r.a.createElement(W.a,{container:!0},X.data.map((function(e){return r.a.createElement(W.a,{item:!0,xs:12,lg:4,key:e.content},r.a.createElement(Y,{content:e.content,direction:e.direction,img:e.img}))}))))},te=a(75),ae=a.n(te),ne=a(211),re=a(212),ie=a(210),oe=a(213),le=a(214),ce=a(226),se=a(224),me=a(222),pe=function(){return function(e){e({type:"LOADING_DATA"}),I.a.get("/apartments").then((function(t){e({type:"SET_APARTMENTS",payload:t.data}),e({type:"STOP_LOADING_UI"})})).catch((function(t){e({type:"SET_APARTMENTS",payload:[]})}))}},de=function(e,t){return function(a){a({type:"LOADING_UI"}),I.a.post("/apartment/image/".concat(t),e).then((function(e){a(ue(t)),a({type:"STOP_LOADING_UI"})})).catch((function(e){return console.log(e)}))}},ue=function(e){return function(t){t({type:"LOADING_DATA"}),I.a.get("/apartment/".concat(e)).then((function(e){t({type:"SET_APARTMENT",payload:e.data})})).catch((function(e){return console.log(e)}))}},he=function(){return function(e){e({type:"CLEAR_ERRORS"})}},ge=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={type:"",bedrooms:"",price:0,furniture:"",reporter:"",notes:"Empty",message:"",url:null,uploadedImage:null,errors:{}},e.handleChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},Object(d.a)({},t.target.name,t.target.value)))},e.handleUpload=function(t){t.preventDefault();var a=t.target.files[0];e.setState(Object(l.a)(Object(l.a)({},e.state),{},{uploadedImage:a}))},e.handleSubmit=function(t){t.preventDefault();var a={};if(""===e.state.type?a.type="Type is required!":""===e.state.bedrooms&&(a.bedrooms="Bedrooms is required!"),0===e.state.price&&(a.price="Price is required!"),""===e.state.reporter&&(a.reporter="Reporter is required!"),a.type||a.bedrooms||a.price||a.reporter)e.setState(Object(l.a)(Object(l.a)({},e.state),{},{errors:a}));else{var n={type:e.state.type,bedrooms:e.state.bedrooms,price:e.state.price,furniture:e.state.furniture,reporter:e.state.reporter,notes:e.state.notes,url:e.state.url};if(console.log(e.props.UI),null!==e.state.uploadedImage){var r=new FormData;r.append("image",e.state.uploadedImage,e.state.uploadedImage.name),e.props.uploadImage(r,e.props.apartment.id)}e.props.updateApartment(e.props.apartment.id,n)}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.apartment;this.setState(Object(l.a)(Object(l.a)({},this.state),{},{type:e.type,bedrooms:e.bedrooms,price:e.price,furniture:e.furniture,reporter:e.reporter,notes:e.notes,url:e.url}))}},{key:"render",value:function(){console.log(this.props.UI);var e=this.props.classes;return this.props.data.loading?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,"Update successfully!"===this.props.data.message&&r.a.createElement(y.a,{variant:"h5",align:"center",color:"secondary"},this.props.data.message),r.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},this.state.errors.type?r.a.createElement(j.a,{name:"type",error:!0,helperText:this.state.errors.type,required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange,value:this.state.type}):r.a.createElement(j.a,{name:"type",required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange,value:this.state.type}),this.state.errors.bedrooms?r.a.createElement(j.a,{name:"bedrooms",error:!0,helperText:this.state.errors.bedrooms,required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange,value:this.state.bedrooms}):r.a.createElement(j.a,{name:"bedrooms",required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange,value:this.state.bedrooms}),this.state.errors.price?r.a.createElement(j.a,{name:"price",error:!0,helperText:this.state.errors.price,type:"number",required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange,value:this.state.price}):r.a.createElement(j.a,{name:"price",type:"number",required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange,value:this.state.price}),r.a.createElement(j.a,{name:"furniture",label:"4. Furniture",variant:"filled",onChange:this.handleChange,value:this.state.furniture}),this.state.errors.reporter?r.a.createElement(j.a,{name:"reporter",error:!0,helperText:this.state.errors.reporter,required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange,value:this.state.reporter}):r.a.createElement(j.a,{name:"reporter",required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange,value:this.state.reporter}),r.a.createElement(j.a,{name:"notes",label:"6. Notes",variant:"filled",onChange:this.handleChange,value:this.state.notes&&this.state.notes}),null!==this.state.url&&r.a.createElement(ie.a,{className:e.media,image:this.state.url,onClick:this.handleMediaClick}),r.a.createElement(j.a,{type:"file",name:"image",onChange:this.handleUpload}),r.a.createElement(w.a,{type:"submit",variant:"contained",color:"primary"},"Update"),this.props.data.loading&&r.a.createElement(T,null),this.props.UI.errors&&r.a.createElement("h2",null,"Update failed!")))}}]),a}(n.Component),Ee={getOne:ue,updateApartment:function(e,t){return function(a){a({type:"LOADING_DATA"}),I.a.patch("/apartment/".concat(e),t).then((function(t){var n={apartment:Object(l.a)(Object(l.a)({},t.data.apartment),{},{id:e}),message:"Update successfully!"};a({type:"UPDATE_APARTMENT",payload:n}),a(he())})).catch((function(e){a({type:"SET_ERRORS",payload:"Update failed!"})}))}},uploadImage:de,getApartments:pe},be=Object(R.b)((function(e){return{UI:e.UI,user:e.user,data:e.data}}),Ee)(Object(g.a)((function(e){return{form:{"& > *":{margin:e.spacing(.5),width:"100%"}},media:{height:0,paddingTop:"45%"}}}))(ge)),fe=a(109),ve=a.n(fe),ye=Object(f.a)((function(e){return{form:{"& > *":{margin:e.spacing(1),width:"25ch"}},paper:Object(d.a)({position:"absolute",width:500,height:700,overflow:"scroll",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e.breakpoints.down("md"),{width:300,height:500}),addIcon:{width:"60%",height:"60%",margin:"20%"}}})),Oe=function(e){var t=e.apartment,a=ye(),n=r.a.useState(!1),i=Object(b.a)(n,2),o=i[0],l=i[1],c=r.a.createElement("div",{className:a.paper},r.a.createElement(y.a,{variant:"h4",align:"center"},"Update an apartment"),r.a.createElement(be,{apartment:t}));return r.a.createElement("div",null,r.a.createElement(se.a,{title:"Update and note",placement:"top"},r.a.createElement(A.a,{"aria-label":"update",color:"primary",onClick:function(){l(!0)}},r.a.createElement(ve.a,null))),r.a.createElement(me.a,{open:o,onClose:function(){l(!1)}},c))},je=a(110),we=a.n(je),Ae=Object(f.a)((function(e){return{root:{maxWidth:"500px",marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"56.25%"},cardActions:{justifyContent:"flex-end"},cardContent:{height:"350px"}}})),Ce=function(e){var t=e.apartment,a=e.flag,n=e.deleteApartment,i=Ae();return t?r.a.createElement(ne.a,{className:i.root,raised:!0},r.a.createElement(re.a,{avatar:r.a.createElement(ce.a,{src:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media"}),title:t.type,subheader:ae()(t.dateCreate).format("DD/MM/YYYY")}),r.a.createElement(ie.a,{className:i.media,image:t.url}),r.a.createElement(oe.a,{className:i.cardContent},r.a.createElement(y.a,{variant:"h6"},"Details"),r.a.createElement(y.a,{variant:"subtitle1"},"\xa0\u2022 Type: ",t.type),r.a.createElement(y.a,{variant:"subtitle1"},"\xa0\u2022 Bedrooms: ",t.bedrooms),r.a.createElement(y.a,{variant:"subtitle1"},"\xa0\u2022 Price: ",t.price),r.a.createElement(y.a,{variant:"subtitle1"},"\xa0\u2022 Furniture type: ",t.furniture),r.a.createElement(y.a,{variant:"subtitle1"},"\xa0\u2022 Reporter: ",t.reporter),r.a.createElement(y.a,{variant:"subtitle1"},"\xa0\u2022 Created date: ",ae()(t.dateCreate).format("DD/MM/YYYY")),"Empty"!==t.notes&&r.a.createElement(y.a,{variant:"subtitle2",color:"secondary"},"\xa0",r.a.createElement("i",null,"*Note: ",t.notes))),"apartments"===a&&r.a.createElement(le.a,{className:i.cardActions,disableSpacing:!0},r.a.createElement(Oe,{apartment:t}),r.a.createElement(se.a,{title:"Delete",placement:"top"},r.a.createElement(A.a,{"aria-label":"delete",color:"secondary",onClick:function(){n(t.id)}},r.a.createElement(we.a,null))))):r.a.createElement(r.a.Fragment,null)},Ne=Object(f.a)((function(e){return{root:{margin:"2%"},hover:{"&:hover":{opacity:.8}},container:{maxHeight:"1000px",width:"90%",marginLeft:"5%",marginRight:"5%",overflow:"auto"}}})),Te=function(e){var t=Ne();return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{variant:"h4",align:"center"},"New Rent Apartments"),r.a.createElement("br",null),r.a.createElement(W.a,{container:!0,className:t.container,spacing:3,alignItems:"center"},e.loading&&r.a.createElement(T,null),e.apartments.map((function(e){return r.a.createElement(W.a,{item:!0,xs:12,md:6,lg:4,className:t.hover,key:e.id},r.a.createElement(Ce,{apartment:e,flag:"home"}))}))))},Se=Object(f.a)((function(e){return{root:{backgroundColor:"#3f51b5",padding:"2%"},hover:{"&:hover":{opacity:.8}},title:{color:"white"},container:{maxHeight:"1000px",width:"90%",marginLeft:"5%",marginRight:"5%",overflow:"auto"}}})),Ie=function(e){var t=Se();return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{variant:"h4",align:"center",className:t.title},"Search result"),r.a.createElement("br",null),r.a.createElement(W.a,{container:!0,className:t.container,spacing:3,alignItems:"center"},e.loading&&r.a.createElement(T,null),0!==e.apartmentsFilter.length&&e.apartmentsFilter.map((function(e){return r.a.createElement(W.a,{item:!0,xs:12,md:6,lg:4,className:t.hover,key:e.id},r.a.createElement(Ce,{apartment:e,flag:"apartments"}))})),0===e.apartmentsFilter.length&&r.a.createElement("h3",{style:{width:"100%",textAlign:"center",color:"white"}},"No matched results")))},xe=function(){return r.a.createElement(O.a,{style:{marginTop:"3rem",marginBottom:"3rem"}})},ke=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getApartments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,{img:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/homeBanner.jpg?alt=media"},r.a.createElement(H,null)),r.a.createElement(xe,null),this.props.app.state.search&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie,{apartmentsFilter:this.props.data.apartmentsFilter,loading:this.props.data.loading}),r.a.createElement(xe,null)),r.a.createElement(ee,null),r.a.createElement(xe,null),r.a.createElement(Te,{apartments:this.props.data.apartments,loading:this.props.data.loading}))}}]),a}(n.Component),Re={getApartments:pe},Le=Object(R.b)((function(e){return{user:e.user,UI:e.UI,data:e.data}}),Re)(ke),De=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={type:"",bedrooms:"",price:0,furniture:"",reporter:"",notes:"Empty",url:"",message:"",errors:{}},e.handleChange=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},Object(d.a)({},t.target.name,t.target.value)))},e.handleUpload=function(t){t.preventDefault();var a=t.target.files[0],n=new FormData;n.append("image",a,a.name),e.props.uploadImage(n,e.props.data.apartments[e.props.data.apartments.length-1].apartment.id)},e.handleSubmit=function(t){t.preventDefault();var a={};if(""===e.state.type?a.type="Type is required!":""===e.state.bedrooms&&(a.bedrooms="Bedrooms is required!"),0===e.state.price&&(a.price="Price is required!"),""===e.state.reporter&&(a.reporter="Reporter is required!"),a!=={})e.setState(Object(l.a)(Object(l.a)({},e.state),{},{errors:a}));else{var n={type:e.state.type,bedrooms:e.state.bedrooms,price:e.state.price,furniture:e.state.furniture,reporter:e.props.user.credentials.email,notes:e.state.notes};e.props.postApartment(n)}},e}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{message:this.props.data.message}))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},this.state.errors.type?r.a.createElement(j.a,{error:!0,name:"type",helperText:this.state.errors.type,required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange}):r.a.createElement(j.a,{name:"type",required:!0,label:"1. Type",variant:"filled",onChange:this.handleChange}),this.state.errors.bedrooms?r.a.createElement(j.a,{error:!0,name:"bedrooms",helperText:this.state.errors.bedrooms,required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange}):r.a.createElement(j.a,{name:"bedrooms",required:!0,label:"2. Bedrooms",variant:"filled",onChange:this.handleChange}),this.state.errors.price?r.a.createElement(j.a,{error:!0,name:"price",type:"number",helperText:this.state.errors.price,required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange}):r.a.createElement(j.a,{name:"price",type:"number",required:!0,label:"3. Price",variant:"filled",onChange:this.handleChange}),r.a.createElement(j.a,{name:"furniture",label:"4. Furniture",variant:"filled",onChange:this.handleChange}),this.state.errors.reporter?r.a.createElement(j.a,{error:!0,name:"reporter",helperText:this.state.errors.reporter,required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange}):r.a.createElement(j.a,{name:"reporter",required:!0,label:"5. Reporter",variant:"filled",onChange:this.handleChange}),r.a.createElement(w.a,{type:"submit",variant:"contained",color:"primary"},"Create information"),this.state.message&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,"Add apartment image:"),r.a.createElement(j.a,{type:"file",name:"image",onChange:this.handleUpload})),"Loaded image"===this.state.message&&r.a.createElement(y.a,{variant:"body2",className:e.customError},this.state.message),this.props.data.loading&&r.a.createElement(T,null))}}]),a}(n.Component),Ue={postApartment:function(e){return function(t){t({type:"LOADING_DATA"}),I.a.post("/apartment",e).then((function(e){console.log(e.data),t({type:"POST_APARTMENT",payload:e.data}),t(he())})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}},uploadImage:de},_e=Object(R.b)((function(e){return{UI:e.UI,user:e.user,data:e.data}}),Ue)(Object(g.a)((function(e){return{form:{"& > *":{margin:e.spacing(1),width:"100%"}},customError:{color:"red",textAlign:"center",marginTop:10}}}))(De)),Pe=a(111),Fe=a.n(Pe),Be=Object(f.a)((function(e){return{form:{"& > *":{margin:e.spacing(1),width:"25ch"}},paper:Object(d.a)({position:"absolute",width:500,height:700,overflow:"scroll",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e.breakpoints.down("md"),{width:300,height:500}),addIcon:{width:"60%",height:"60%",margin:"20%"}}})),Me=function(){var e=Be(),t=r.a.useState(!1),a=Object(b.a)(t,2),n=a[0],i=a[1],o=r.a.createElement("div",{className:e.paper},r.a.createElement(y.a,{variant:"h4",align:"center"},"Create an apartment"),r.a.createElement(_e,null));return r.a.createElement("div",null,r.a.createElement(se.a,{title:"Add more"},r.a.createElement(Fe.a,{className:e.addIcon,onClick:function(){i(!0)}})),r.a.createElement(me.a,{open:n,onClose:function(){i(!1)}},o))},qe=Object(f.a)((function(e){return{root:{margin:"2%"},divider:{marginBottom:"1rem"},hover:{"&:hover":{opacity:.8}},hoverAdd:{"&:hover":{opacity:.8,cursor:"pointer"}},container:{maxHeight:"1000px",width:"90%",marginLeft:"5%",marginRight:"5%",overflow:"auto"},addIcon:{width:"40%",height:"40%",margin:"30%"}}})),Ge=function(e){var t=qe();return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{variant:"h4",align:"center"},"Rent Apartments"),r.a.createElement(xe,{className:t.divider}),r.a.createElement(W.a,{container:!0,className:t.container,spacing:3,alignItems:"center"},r.a.createElement(W.a,{item:!0,xs:12,md:6,lg:4,className:t.hoverAdd},r.a.createElement(se.a,{title:"Add more"},r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,null)))),e.loading&&r.a.createElement(T,null),e.apartments.map((function(a){return r.a.createElement(W.a,{item:!0,xs:12,md:6,lg:4,className:t.hover,key:a.id+Math.random()},r.a.createElement(Ce,{apartment:a,flag:"apartments",deleteApartment:e.deleteApartment}))}))))},He=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getApartments()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,{img:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/apartmentBanner.jpg?alt=media"},r.a.createElement(H,null)),r.a.createElement(xe,null),this.props.app.state.search&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie,{apartmentsFilter:this.props.data.apartmentsFilter}),r.a.createElement(xe,null)),r.a.createElement(Ge,{apartments:this.props.data.apartments,loading:this.props.data.loading,deleteApartment:this.props.deleteApartment.bind(this)}))}}]),a}(n.Component),We={getApartments:pe,deleteApartment:function(e){return function(t){t({type:"LOADING_DATA"}),I.a.delete("/apartment/".concat(e)).then((function(){t({type:"DELETE_APARTMENT",payload:e})})).catch((function(e){return console.log(e)}))}}},ze=Object(R.b)((function(e){return{user:e.user,UI:e.UI,data:e.data}}),We)(He),Ye=a(215),Ve=a(216),Je=a(217),Ze=a(225),$e=a(223),Ke=a(203),Qe=a(218),Xe=a(219),et=a(220),tt=a(14),at=a(19),nt=a(78),rt=a.n(nt),it=a(79),ot=a.n(it),lt=a(80),ct=a.n(lt),st=a(113),mt=a.n(st),pt=a(112),dt=a.n(pt),ut=a(114),ht=a.n(ut),gt=a(115),Et=a.n(gt),bt=Object(f.a)((function(e){return Object(d.a)({appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},navLink:{textDecoration:"none",color:"black"},avatarSize:{height:e.spacing(7),width:e.spacing(7)},divider:{background:"blue"},search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(tt.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(tt.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"8ch"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:e.mixins.toolbar},e.breakpoints.up("md"),{menuButton:{marginRight:e.spacing(2)},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}})})),ft={getUserData:x,filter:function(e){return function(t){t({type:"LOADING_DATA"}),I.a.get("/apartmentsFilter/".concat(e)).then((function(e){t({type:"FILTER_APARTMENTS",payload:e.data}),t({type:"STOP_LOADING_UI"})})).catch((function(e){t({type:"FILTER_APARTMENTS",payload:[]})}))}}},vt=Object(R.b)((function(e){return{user:e.user,data:e.data}}),ft)((function(e){var t=bt(),a=Object(at.a)(),i=Object(n.useState)(!1),o=Object(b.a)(i,2),c=o[0],s=o[1],m=Object(n.useState)(window.innerWidth),p=Object(b.a)(m,2),h=(p[0],p[1]),g=function(){localStorage.removeItem("FBidToken"),localStorage.removeItem("userId")},f=function(){s(!1),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{open:!1}))},v=function(){h(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",v),function(){return window.removeEventListener("resize",v)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye.a,null),r.a.createElement(Ve.a,{position:"fixed",className:Object(E.a)(t.appBar,Object(d.a)({},t.appBarShift,c))},r.a.createElement(Je.a,null,window.innerWidth<=960&&r.a.createElement(A.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{open:!0}))},edge:"start",className:Object(E.a)(t.menuButton,c&&t.hide)},r.a.createElement(dt.a,null)),r.a.createElement(W.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(W.a,{item:!0},r.a.createElement(y.a,{variant:"h5",noWrap:!0,align:"center"},"RentalZ")),r.a.createElement(W.a,{item:!0},r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(mt.a,null)),r.a.createElement(Ze.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},name:"search",onChange:function(t){var a=t.target.value;""!==a?(e.filter(a),e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{search:!0}))):(e.data.apartmentsFilter=[],e.app.setState(Object(l.a)(Object(l.a)({},e.app),{},{search:!1})))}})))))),window.innerWidth>960?r.a.createElement($e.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left",open:!0},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(O.a,{className:t.divider}),r.a.createElement(W.a,{container:!0,style:{padding:"1rem"}},r.a.createElement(W.a,{container:!0,item:!0,xs:4,justify:"center",alignItems:"center"},r.a.createElement(ce.a,{alt:"User avatar",src:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media",className:t.avatarSize})),r.a.createElement(W.a,{container:!0,item:!0,xs:8,alignItems:"center"},r.a.createElement(W.a,{item:!0},r.a.createElement(y.a,null,"Hello, ",e.user.credentials.email)))),r.a.createElement(O.a,{className:t.divider}),r.a.createElement(Ke.a,null,["Home","Apartments"].map((function(e,a){return"Home"===e?r.a.createElement(u.b,{to:"/home",className:t.navLink,key:e},r.a.createElement(Qe.a,{button:!0},r.a.createElement(Xe.a,null,r.a.createElement(rt.a,null)),r.a.createElement(et.a,{primary:e}))):r.a.createElement(u.b,{to:"/apartments",className:t.navLink,key:e},r.a.createElement(Qe.a,{button:!0,key:e},r.a.createElement(Xe.a,null,r.a.createElement(ot.a,null)),r.a.createElement(et.a,{primary:e})))}))),r.a.createElement(O.a,{className:t.divider}),r.a.createElement(Ke.a,null,r.a.createElement("div",{className:t.navLink,onClick:g},r.a.createElement(Qe.a,{button:!0},r.a.createElement(Xe.a,null,r.a.createElement(ct.a,null)),r.a.createElement(et.a,{primary:"Log out"}))))):r.a.createElement($e.a,{className:t.drawer,variant:"persistent",classes:{paper:t.drawerPaper},anchor:"left",open:c},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(A.a,{onClick:f},"ltr"===a.direction?r.a.createElement(ht.a,null):r.a.createElement(Et.a,null))),r.a.createElement("div",{className:t.toolbar}),r.a.createElement(O.a,{className:t.divider}),r.a.createElement(W.a,{container:!0,style:{padding:"1rem"}},r.a.createElement(W.a,{container:!0,item:!0,xs:4,justify:"center",alignItems:"center"},r.a.createElement(ce.a,{alt:"User avatar",src:"https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media",className:t.avatarSize})),r.a.createElement(W.a,{container:!0,item:!0,xs:8,alignItems:"center"},r.a.createElement(W.a,{item:!0},r.a.createElement(y.a,null,"Hello, ",e.user.credentials.email)))),r.a.createElement(O.a,{className:t.divider}),r.a.createElement(Ke.a,null,["Home","Apartments"].map((function(e,a){return"Home"===e?r.a.createElement(u.b,{to:"/home",className:t.navLink,key:e,onClick:f},r.a.createElement(Qe.a,{button:!0},r.a.createElement(Xe.a,null,r.a.createElement(rt.a,null)),r.a.createElement(et.a,{primary:e}))):r.a.createElement(u.b,{to:"/apartments",className:t.navLink,key:e,onClick:f},r.a.createElement(Qe.a,{button:!0,key:e},r.a.createElement(Xe.a,null,r.a.createElement(ot.a,null)),r.a.createElement(et.a,{primary:e})))}))),r.a.createElement(O.a,{className:t.divider}),r.a.createElement(Ke.a,null,r.a.createElement("div",{className:t.navLink,onClick:g},r.a.createElement(Qe.a,{button:!0},r.a.createElement(Xe.a,null,r.a.createElement(ct.a,null)),r.a.createElement(et.a,{primary:"Log out"}))))))})),yt=a(49),Ot=a(116),jt={authenticated:!1,loading:!1,credentials:{}},wt={apartments:[],apartmentsFilter:[],apartment:{},loading:!1,message:""},At={loading:!1,errors:null},Ct=[Ot.a],Nt=Object(yt.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(l.a)(Object(l.a)({},e),{},{authenticated:!0});case"SET_UNAUTHENTICATED":return jt;case"SET_USER":return Object(l.a)(Object(l.a)({},e),{},{authenticated:!0,loading:!1,credentials:t.payload});case"LOADING_USER":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return e}},data:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING_DATA":return Object(l.a)(Object(l.a)({},t),{},{loading:!0});case"SET_APARTMENTS":return Object(l.a)(Object(l.a)({},t),{},{apartments:a.payload,loading:!1});case"SET_APARTMENT":return Object(l.a)(Object(l.a)({},t),{},{loading:!1,message:"Loaded image",apartment:a.payload});case"FILTER_APARTMENTS":return Object(l.a)(Object(l.a)({},t),{},{apartmentsFilter:a.payload,loading:!1});case"POST_APARTMENT":return t.apartments.push(a.payload),Object(l.a)(Object(l.a)({},t),{},{loading:!1,message:a.payload.message});case"UPDATE_APARTMENT":return e=t.apartments.findIndex((function(e){return e.id===a.payload.apartment.id})),t.apartments.splice(e,1),t.apartments.push(a.payload.apartment),t.apartments.sort((function(e,t){return e.dateCreate<t.dateCreate||e.dateCreate===t.dateCreate&&e.type>t.type?1:-1})),Object(l.a)(Object(l.a)({},t),{},{loading:!1,apartmentsFilter:[],message:a.payload.message});case"DELETE_APARTMENT":return e=t.apartments.findIndex((function(e){return e.id===a.payload})),t.apartments.splice(e,1),Object(l.a)(Object(l.a)({},t),{},{loading:!1});default:return t}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,errors:null});case"LOADING_UI":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"STOP_LOADING_UI":return Object(l.a)(Object(l.a)({},e),{},{loading:!1});default:return e}}}),Tt=Object(yt.e)(Nt,{},Object(yt.d)(yt.a.apply(void 0,Ct))),St=a(117),It=a.n(St);I.a.defaults.baseURL="https://app-rentalz.herokuapp.com/";var xt=localStorage.FBidToken;xt&&(1e3*It()(xt).exp<Date.now()?(window.location.href="/login",Tt.dispatch((function(e){localStorage.removeItem("FBidToken"),delete I.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})}))):(Tt.dispatch({type:"SET_AUTHENTICATED"}),I.a.defaults.headers.common.Authorization=xt,Tt.dispatch(x(localStorage.userId))));var kt=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,login:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){void 0===localStorage.FBidToken?this.setState(Object(l.a)(Object(l.a)({},this.state),{},{login:!1})):this.setState(Object(l.a)(Object(l.a)({},this.state),{},{login:!0}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(R.a,{store:Tt},r.a.createElement(u.a,null,this.state.login?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(vt,{app:this}),r.a.createElement("main",{className:Object(E.a)(t.content,Object(d.a)({},t.contentShift,this.state.open))},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(h.d,null,r.a.createElement(h.a,{exact:!0,path:"/",to:"/home"}),r.a.createElement(h.a,{exact:!0,path:"/login",to:"/home"}),r.a.createElement(h.b,{path:"/home",exact:!0,component:function(){return r.a.createElement(Le,{app:e})}}),r.a.createElement(h.b,{path:"/apartments",exact:!0,component:function(){return r.a.createElement(ze,{app:e})}}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",to:"/login"}),r.a.createElement(h.b,{path:"/login",exact:!0,render:function(){return r.a.createElement(F,{login:e})}}))))}}]),a}(n.Component),Rt=Object(g.a)((function(e){return Object(d.a)({root:{display:"flex",overflow:"hidden"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:"rgba(0, 0, 0.08, 0.08)"}},e.breakpoints.down("sm"),{content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})}))(kt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Lt=function(){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Rt,null)),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",(function(){Lt()}),!1):Lt(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.d6e94e52.chunk.js.map