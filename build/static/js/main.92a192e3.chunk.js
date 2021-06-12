(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),l=n.n(i),o=(n(51),n(5)),c=n(8),s=n(21),m=n(7),u=n(6),d=n(24),h=n(9),p=n(4),g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"customSideNav",value:function(){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement("img",{src:"header.jpeg",style:{maxWidth:"100%",display:"inline-block"},alt:""})),r.a.createElement(p.SideNavItem,{href:"/aboutme"},"ABOUT ME",r.a.createElement(p.Icon,{left:!0},"perm_identity")),r.a.createElement(p.SideNavItem,{href:"/"},"APP GALLERY",r.a.createElement(p.Icon,{left:!0},"casino")))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Navbar,{brand:r.a.createElement(d.b,{to:"/",className:"right",style:{marginRight:"30px"}},"Gary Hu"),fixed:!0,alignLinks:"left",className:"blue darken-4",menuIcon:r.a.createElement("div",null,r.a.createElement("b",null,"MENU"),r.a.createElement(p.Icon,{left:!0},"menu")),sidenav:this.customSideNav()},r.a.createElement(p.NavItem,{href:"/aboutme"},"ABOUT ME",r.a.createElement(p.Icon,{left:!0},"perm_identity")),r.a.createElement(p.NavItem,{href:"/"},"APP GALLERY",r.a.createElement(p.Icon,{left:!0},"casino"))))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"flow-text"},this.props.title),r.a.createElement("p",null,this.props.description),r.a.createElement("a",{href:this.props.to,target:"_blank",rel:"noopener noreferrer",className:"btn-floating btn-large halfway-fab right waves-effect waves-light blue"},r.a.createElement("i",{className:"material-icons"},"arrow_forward"))))}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{paddingTop:"50px"}},r.a.createElement("div",{className:"col m4 offset-m1 s10 offset-s1"},r.a.createElement(f,{title:"RACCOON",description:"Massively parallel FEM code being developed at the Dolbow lab",to:"https://hugary1995.github.io/raccoon/index.html"})))}}]),n}(a.Component),E=n(39),b=n(41),v=n(2),k=n(25),w=n(40),O=n.n(w),A=function(e){var t=e.className,n=e.viewBox,i=e.circleX,l=e.circleY,o=e.circleR,c=(e.textSize,e.strokeColor),s=e.strokeWidth,m=(e.legendText,e.percentage),u=e.trailStrokeWidth,d=e.trailStrokeColor,h=e.trailSpaced,p=e.speed,g=e.width,f=e.textOverride,y=Object(a.useState)(0),E=Object(k.a)(y,2),b=E[0],v=E[1],w=Object(a.useState)(0),A=Object(k.a)(w,2),C=A[0],j=A[1],x=Object(a.useState)(!1),S=Object(k.a)(x,2),M=S[0],N=S[1],I=6.28318530718*o,D=I/100,T=m/p,H=I/4;return Object(a.useEffect)((function(){b<m&&M&&setTimeout((function(){j(C+D),v(b+1)}),T)}),[b,M]),r.a.createElement("div",{className:t},r.a.createElement(O.a,{partialVisibility:!0,minTopValue:o,onChange:function(e){N(e),e||(N(!1),j(0),v(0))}},r.a.createElement("svg",{viewBox:n,width:g},r.a.createElement("circle",{cx:i,cy:l,r:o,fill:"transparent",stroke:d,strokeWidth:u,strokeDasharray:h?1:0}),r.a.createElement("circle",{cx:i,cy:l,r:o,fill:"transparent",stroke:c,strokeWidth:s,strokeDasharray:"".concat(C," ").concat(I-C),strokeDashoffset:H}),r.a.createElement("g",{className:"chart-text"},f.length>0?r.a.createElement("text",{x:"50%",y:"50%",className:"chart-number"},f):r.a.createElement("text",{x:"50%",y:"50%",className:"chart-number"},b,"%")))))};A.defaultProps={viewBox:"0 0 38 38",circleX:19,circleY:19,circleR:15,testSize:"1em",strokeColor:"blueviolet",strokeWidth:1,legendText:"",percentage:0,trailStrokeWidth:1,trailStrokeColor:"#d2d3d4",trailSpaced:!1,speed:50,width:"100px",textOverride:""};var C,j=A,x=Object(b.a)(j)(C||(C=Object(E.a)(["\n  /* vertical-align: middle; */\n  /* float: left; */\n  margin-top: 5px;\n\n  .chart-text {\n    fill: ",";\n    font-weight: ",";\n    transform: translateY(0.2px);\n  }\n\n  .chart-number {\n    font-size: ",";\n    line-height: 1;\n    text-anchor: middle;\n    alignment-baseline: middle;\n    transform: translateY(0em);\n  }\n"])),(function(e){return e.textColor}),(function(e){return e.fontWeight}),(function(e){return e.textSize}));x.propTypes={textColor:v.string,strokeColor:v.string,fontWeight:v.number},x.defaultProps={textColor:"brown",textSize:"1em",fontWeight:1e3};var S=x,M=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"gradeToPercentage",value:function(e){return"A+"===e||"A"===e?100:"A-"===e?93:"B+"===e?90:"B"===e?87:"B-"===e?83:"C+"===e?80:"C"===e?77:"C-"===e?73:"D+"===e?70:"D"===e?60:"D-"===e?63:"F"===e?50:void 0}},{key:"render",value:function(){return r.a.createElement(S,{viewBox:"0 0 10 10",circleX:5,circleY:5,circleR:4,textSize:"0.3em",percentage:this.gradeToPercentage(this.props.grade),speed:100,strokeColor:"brown",width:this.props.width,textOverride:this.props.grade})}}]),n}(a.Component),N=n(119),I=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).transcript={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,Object.keys(this.transcript).map((function(t,n){return r.a.createElement(N.a,{key:n,avatar:r.a.createElement(M,{grade:e.transcript[t],width:"32px"}),label:r.a.createElement("span",null,r.a.createElement("b",null,t)),variant:"outlined",style:{marginTop:"3px",marginBottom:"3px"}})})))}}]),n}(a.Component),D=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).transcript={"Multiscale Methods":"A","Continuum Mechanics":"A","Nonlinear FEM":"A+","Nonlinear Optimization":"A+","Elasticity ":"A","Numerical Linear Algebra":"A","Real Analysis":"A-","FEM for Fluids":"A","Uncertainty Quantification":"A","Data Structures & Algorithms":"A","Applied PDE":"A","Linear FEM":"A"},e}return n}(I),T=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).transcript={"Modeling, Simulation and Control":"A","Optimization in Engineering":"A","Cloud Computing":"A","Mobile App Design":"A","Nonlinear Optimization":"A","Fluid Mechanics":"A+","Machine Elements":"A","Heat Transfer":"A","Design of Thermal Systems":"A","Discrete Math":"A","Data Structures and Algorithms":"A","Probability and Statistics":"A-","Vibrations ":"A+","Object-Oriented Programming":"A"},e}return n}(I),H=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).transcript={"Logic Design and Computer Organization":"A","Aerostructures ":"A","Engineering Vibration":"A","Design and Manufacturing":"A","Heat & Mass Transfer":"A","Strength of Materials":"A","Intro to Modern Physics":"A","Differential Equations":"A","Dynamics ":"A","Circuits and Instruments":"A","Statics & Strength of Materials":"A","Mechanical Manufacturing":"A","Chemistry of Materials":"A","Calculus I":"A","Calculus II":"A","Physics I":"A","Physics II":"A"},e}return n}(I);function F(e){return r.a.createElement(p.Modal,{trigger:r.a.createElement("p",{className:"blue-text text-darken-4",style:{cursor:"pointer",textAlign:"right"}},"transcript"),header:r.a.createElement("h5",null,e.name)},e.coursework)}function W(e){return r.a.createElement(p.CollectionItem,{className:"avatar",style:{minHeight:"1em"}},r.a.createElement("a",{href:e.imglink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.imgsrc,alt:"",className:"circle"})),r.a.createElement("div",{style:{marginRight:"5em"}},r.a.createElement("p",{style:{fontSize:"16px"}},r.a.createElement("b",null,e.university)),r.a.createElement("p",null,e.school),r.a.createElement("p",null,e.degree),r.a.createElement("p",null,e.secondDegree)),r.a.createElement("div",{className:"secondary-content",style:{marginTop:"-5px"}},r.a.createElement("p",null,r.a.createElement("b",null,e.year)),e.transcript))}var P=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("blockquote",{className:"z-depth-1",style:{fontSize:"24px",paddingTop:"1px",paddingBottom:"1px"}},"Education"),r.a.createElement(p.Collection,null,r.a.createElement(W,{imgsrc:"duke.png",imglink:"https://www.duke.edu/",university:"Duke University",school:"Pratt School of Engineering",degree:"Ph.D. in Computational Mechanics, Advisor: John E. Dolbow",secondDegree:"Idaho National Laboratory Graduate Fellowship",year:"2017 - 2022",transcript:r.a.createElement(F,{name:"Transcript - Duke University",coursework:r.a.createElement(D,null)})}),r.a.createElement(W,{imgsrc:"wustl.png",imglink:"https://www.wustl.edu/",university:"Washington University in Saint Louis",school:"Mckelvey School of Engineering",degree:"B.S. in Mechanical Engineering, Advisor: Philip V. Bayly",secondDegree:"Second Major in Computer Science, Advisor: Ron K. Cytron",year:"2015 - 2017",transcript:r.a.createElement(F,{name:"Transcript - Washington University in Saint Louis",coursework:r.a.createElement(T,null)})}),r.a.createElement(W,{imgsrc:"cwru.png",imglink:"https://www.cwru.edu/",university:"Case Western Reserve University",school:"Case Institute of Technology",degree:"Mechanical and Aerospace Engineering, Advisor: Alexis R. Abramson",year:"2013 - 2015",transcript:r.a.createElement(F,{name:"Transcript - Case Western Reserve University",coursework:r.a.createElement(H,null)})}),r.a.createElement(W,{imgsrc:"nfls.jpg",university:"Nanjing Foreign Language School",degree:"High School Diploma",year:"2010 - 2013"})))}}]),n}(a.Component),z={"Finite Element Method":"Apply the Finite Element Method to solve generally nonlinear Partial Differential Equations.","Solid Mechanics":"Study large deformation with hyperelastic-plastic materials in the context of multiphysics-coupling.","Fracture Mechanics":"Study both analytical and numerical solutions to fracture problems for brittle and ductile materials.","Variational Approaches to Fracture":"Develop gradient-enhanced damage models, specifically phase-field models, to regularize complex crack geometries.","Uncertainty Quantification":"Use non-traditional Monte-Carlo sampling to quantify both qualitatively and quantitatively the uncertainty in quantities of interest.","Mechanical Contact":"Improve convergence and numerical stability of contact algorithms using Mortar method, embedded interface, phase-field, etc.","Scalable Parallel Algorithm":"Write scalable massively parallel programs on CPU and GPU clusters.","Nonlinear Numerical Optimization":"Employ Newton-type, Conjugate Gradient, Jacobian-free, and active  methods to solve nonlinear constraint minimization problems.","Nonlinear Dynamics / Vibration":"Study instability-induced vibration problems with beam and truss elements."},B=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChipSelect=a.onChipSelect.bind(Object(s.a)(a)),a.state={currentInterest:"Finite Element Method"},a}return Object(c.a)(n,[{key:"onChipSelect",value:function(e){var t=e.currentTarget.textContent;this.state.currentInterest!==t&&this.setState({currentInterest:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("blockquote",{className:"z-depth-1",style:{fontSize:"24px",paddingTop:"1px",paddingBottom:"1px"}},"Research Interests"),r.a.createElement("p",null,z[this.state.currentInterest]),Object.keys(z).map((function(t,n){return t===e.state.currentInterest?r.a.createElement(p.Chip,{key:n,className:"blue darken-4 white-text"},t):r.a.createElement(p.Chip,{key:n,className:"hoverable",onClick:e.onChipSelect,style:{cursor:"pointer"}},t)})))}}]),n}(a.Component),R=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("blockquote",{className:"z-depth-1",style:{fontSize:"24px",paddingTop:"1px",paddingBottom:"1px"}},"Publications"),r.a.createElement(p.Collection,null,r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu, T., Guilleminot, J., & Dolbow, J. E. (2020). A phase-field model of fracture with frictionless contact and random fracture properties: Application to thin-film fracture and soil desiccation."," ",r.a.createElement("i",null,"Computer Methods in Applied Mechanics and Engineering"),", 368, 113106."," ",r.a.createElement("a",{href:"https://doi.org/10.1016/j.cma.2020.113106",target:"_blank",rel:"noopener noreferrer"},"DOI")),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Jiang, W., Hu, T., Aagesen, L. K., & Zhang, Y. (2020). Three-dimensional phase-field modeling of porosity dependent intergranular fracture in UO2."," ",r.a.createElement("i",null,"Computational Materials Science"),", 171, 109269."," ",r.a.createElement("a",{href:"https://doi.org/10.1016/j.commatsci.2019.109269",target:"_blank",rel:"noopener noreferrer"},"DOI")),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Geelen, R. J., Liu, Y., Hu, T., Tupek, M. R., & Dolbow, J. E. (2019). A phase-field formulation for dynamic cohesive fracture."," ",r.a.createElement("i",null,"Computer Methods in Applied Mechanics and Engineering"),", 348, 680-711."," ",r.a.createElement("a",{href:"https://doi.org/10.1016/j.cma.2019.01.026",target:"_blank",rel:"noopener noreferrer"},"DOI")),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu, T., & Bayly, P. V. (2018). Finite element models of flagella with sliding radial spokes and interdoublet links exhibit propagating waves under steady dynein loading. ",r.a.createElement("i",null,"Cytoskeleton"),", 75(5), 185-200."," ",r.a.createElement("a",{href:"https://doi.org/10.1002/cm.21432",target:"_blank",rel:"noopener noreferrer"},"DOI")),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu, T., Dutcher, S. K., & Bayly, P. V. (2017). Steady Dynein Activity Produces Dynamic Instability and Wavelike Oscillations in a 9-Doublet Finite Element Model of Flagella."," ",r.a.createElement("i",null,"Biophysical Journal"),", 112(3), 268a-269a."," ",r.a.createElement("a",{href:"https://www.cell.com/biophysj/pdf/S0006-3495(16)32487-0.pdf",target:"_blank",rel:"noopener noreferrer"},"LINK")),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu, T. and Agarwal, R. K. (2016). Accented Models: Evaluating their effectiveness in Building Energy Simulation."," ",r.a.createElement("i",null,"Mechanical Engineering and Materials Science Independent Study"),". 2."," ",r.a.createElement("a",{href:"https://openscholarship.wustl.edu/mems500/2/",target:"_blank",rel:"noopener noreferrer"},"LINK"))))}}]),n}(a.Component),L=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("blockquote",{className:"z-depth-1",style:{fontSize:"24px",paddingTop:"1px",paddingBottom:"1px"}},"Conferences"),r.a.createElement(p.Collection,null,r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu T., Geelen R., Liu Y., & Dolbow J. E., A New Decomposition to Obtain Traction-Free Crack Surfaces in a Cohesive Phase-Field Model of Fracture, with Application to Soil Networks, 15th U.S. National Congress on Computational Mechanics, Austin, TX. Jul. 28 \u2013 Aug. 1, 2019."),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Lawal I., Shah S., Gonzalez-Madrid M., Hu T., Schwingshackl C. W., & Brake M. R. W., The Effect of Non-Flat Interfaces on System Dynamics, IMAC-XXXVI, Orlando, FL. Feb. 12 \u2013 Feb. 15, 2018."),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Bayly P. V., Hu T., & Dutcher S. K., Models of Axoneme Mechanics and Flagellar Oscillations, Dynein 2017 International Workshop, Awaji Island, Japan. Oct. 29 \u2013 Nov. 1, 2017."),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu T., Dutcher S. K., & Bayly P. V., Steady Dynein Activity Produces Dynamic Instability and Wavelike Oscillations in A 9-doublet Finite Element Model of Flagella, Biophysical Society 61 st Annual Meeting, New Orleans, LA. Feb. 11 \u2013 15, 2017."),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu T., Dutcher S. K., & Bayly P. V., Dynamic Instability and Wavelike Oscillations in A 9-doublet Finite Element Model of Flagella, International Mechanical Engineering Congress & Exposition, Phoenix, AZ. Nov. 11 \u2013 17, 2016."),r.a.createElement(p.CollectionItem,{style:{minHeight:"1em"}},"Hu T., Dynamic Instability and Wavelike Oscillations in Finite Element Models of Flagella, Motility Research in Progress, Saint Louis, MO. Oct 21, 2016.")))}}]),n}(a.Component),U=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{fontSize:"12pt",textAlign:"justify"}},r.a.createElement("img",{className:"z-depth-1",src:"headshot.jpg",style:{width:"40%",maxWidth:"200px",float:"left",marginRight:"15px",marginTop:"5px",borderRadius:"15px"},alt:""}),r.a.createElement("p",null,"My name is Tianchen (Gary) Hu, and this is my personal website. This website mainly serves as my online curriculum vitae, so you can learn most of (the good things about) me here."),r.a.createElement("p",null,"I hold degrees in both Mechanical Engineering and Computer Science, so my expertise largely resides in the intersection of the two fields, including algorithm, data structures, and numerical methods."),r.a.createElement("p",null,"Recently, I become interested in the full-stack view of techniques. Hence, I am learning basics of front-end, back-end, database, and ways to connect these pieces togather. I built this non-static site to test my knowledge about the MERN (Mongo-Express-React-Node) stack.")),r.a.createElement(B,null),r.a.createElement(P,null),r.a.createElement(R,null),r.a.createElement(L,null))}}]),n}(a.Component),_=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(s.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({height:window.innerHeight})}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App",style:{minHeight:this.state.height}},r.a.createElement(g,null),r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{exact:!0,path:"/aboutme",component:U})))}}]),n}(a.Component);function G(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col s4 right-align"},e.name,":"),r.a.createElement("div",{className:"col s8"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"white-text"},e.content)))}var J=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(p.Footer,{copyrights:"\xa9 2020 Tianchen (Gary) Hu All Rights Reserved",className:"blue darken-4",style:{minHeight:"1em",marginTop:"2em"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4"},r.a.createElement("h5",{className:"white-text right-align"},"Contact\xa0me"))),r.a.createElement("div",{className:"row"},r.a.createElement(G,{name:"Office",content:"Gross Hall 3rd floor D19, 140 Science Dr, Durham, NC 27710",link:"https://bigdata.duke.edu/"}),r.a.createElement(G,{name:"Email",content:"hu_gary@hotmail.com",link:"mailto:hu_gary@hotmail.com"}),r.a.createElement(G,{name:"LinkedIn",content:"linkedin.com/in/hugary1995",link:"https://www.linkedin.com/in/hugary1995/"}),r.a.createElement(G,{name:"ResearchGate",content:"Tianchen Hu",link:"https://www.researchgate.net/profile/Tianchen_Hu2"}),r.a.createElement(G,{name:"Wechat",content:"hugary1999"})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(_,null),document.getElementById("root")),l.a.render(r.a.createElement(J,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,n){e.exports=n(103)},51:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.92a192e3.chunk.js.map