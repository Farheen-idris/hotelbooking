(this.webpackJsonpbookingjini=this.webpackJsonpbookingjini||[]).push([[0],{104:function(e,t,i){},120:function(e,t,i){},135:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),s=i(20),l=i.n(s),r=(i(120),i(100)),a=(i.p,i(52)),o=i(137),j=i.p+"static/media/sheetal.c4851740.jpg",d=i.p+"static/media/room.9f45b5ba.jpg",b=i(138),x=i(143),h=i(37),p=i.n(h),f=(i(104),i(76)),O=i(77),u=i(113),m=i(110),y=i(114),g=i(1),v=function(e){var t=e.text;return Object(g.jsx)("div",{children:t})},w=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){return Object(f.a)(this,i),t.apply(this,arguments)}return Object(O.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsx)(y.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:Object(g.jsx)(v,{lat:59.955413,lng:30.337844,text:"My Marker"})})})}}]),i}(c.Component);w.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var k=w,D=i.p+"static/media/hotellogo.bdd5a21f.png",C=i(142),S=i(140),I=C.a.SubMenu,N=function(e){e.display;var t=e.setDisplay,i=e.price,c=e.setPrice,n=e.loginModal,s=e.packages,l=e.setPackages;return Object(g.jsx)("div",{children:Object(g.jsxs)(C.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(g.jsx)(C.a.Item,{children:Object(g.jsx)(S.a,{width:200,height:50,src:D})},"1"),Object(g.jsx)(C.a.Item,{children:Object(g.jsx)("a",{href:"http://hotelseetal.in/",children:"Home"})},"1"),Object(g.jsx)(C.a.Item,{onClick:function(){return t("about")},children:Object(g.jsx)("a",{href:"#about",children:"About"})},"2"),Object(g.jsx)(C.a.Item,{onClick:function(){return t("policy")},children:Object(g.jsx)("a",{href:"#policies",children:"Policies"})},"3"),Object(g.jsx)(C.a.Item,{onClick:function(){return t("map")},children:Object(g.jsx)("a",{href:"#map",children:"Map"})},"4"),Object(g.jsx)(I,{title:"Hotel Sheetal Bhubaneswar",children:Object(g.jsx)(C.a.Item,{children:"Hotel Sheetal Bhubaneswar"},"setting:1")},"5"),Object(g.jsx)(C.a.Item,{onClick:function(){return l("Packages"===s?"Room":"Packages")},children:s},"7"),Object(g.jsx)(I,{title:i,children:Object(g.jsxs)(C.a.ItemGroup,{children:[Object(g.jsxs)(C.a.Item,{onClick:function(){return c("USD")},children:[Object(g.jsx)("i",{className:"fa fa-usd"}),"USD"]},"price1"),Object(g.jsxs)(C.a.Item,{onClick:function(){return c("INR")},children:[Object(g.jsx)("i",{className:"fa fa-inr"}),"INR"]},"price2"),Object(g.jsxs)(C.a.Item,{onClick:function(){return c("EUR")},children:[Object(g.jsx)("i",{className:"fa fa-eur"}),"EUR"]},"price3"),Object(g.jsxs)(C.a.Item,{onClick:function(){return c("GBP")},children:[Object(g.jsx)("i",{className:"fa fa-gbp"}),"GBP"]},"price4")]})},"SubMenu"),Object(g.jsx)(C.a.Item,{onClick:n,children:"Log In"},"9")]})})},R=i(139),A=function(e){var t=e.price,i=e.currency,c=t.actualprice,n=t.discount,s=c-n/100*c,l=c-s;return Object(g.jsx)("div",{className:"col s12 m4",style:{backgroundColor:"rgb(245, 245, 245)",padding:"2%",borderRadius:"5px",display:"flex",flexDirection:"column",width:"66.6666666667%"},children:Object(g.jsx)("div",{style:{textAlign:"center"},children:Object(g.jsxs)("span",{children:[Object(g.jsxs)("p",{style:{color:"#4caf50",fontWeight:"400"},children:[Object(g.jsx)("span",{children:"You Save"}),Object(g.jsx)("i",{className:"INR"===i?"fa fa-inr":"USD"===i?"fa fa-usd":"EUR"===i?"fa fa-eur":"fa fa-gbp"}),"INR"===i?l:"USD"===i?75*l:"EUR"===i?80*l:50*l,Object(g.jsxs)("span",{style:{display:"inline-block",width:"auto",height:"16px",backgroundColor:"#eb2026",borderRadius:"1px 2px 2px 1px",borderLeft:"1px solid #eb2026",marginLeft:"10px",position:"relative",color:"#fff",fontWeight:"300",fontFamily:"Source Sans Pro,sans-serif",fontSize:"55%",lineHeight:"16px",padding:"0 4px",top:"-3px"},children:[n," %"]})]}),Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:Object(g.jsxs)("strike",{children:[Object(g.jsx)("i",{className:"INR"===i?"fa fa-inr":"USD"===i?"fa fa-usd":"EUR"===i?"fa fa-eur":"fa fa-gbp"}),"INR"===i?c:"USD"===i?75*c:"EUR"===i?80*c:50*c]})})}),Object(g.jsxs)("p",{style:{color:"#000",fontWeight:"400",fontSize:"120%"},children:[Object(g.jsx)("span",{children:"From"}),Object(g.jsx)("i",{className:"INR"===i?"fa fa-inr":"USD"===i?"fa fa-usd":"EUR"===i?"fa fa-eur":"fa fa-gbp"}),"INR"===i?s:"USD"===i?75*s:"EUR"===i?80*s:50*s]}),Object(g.jsx)("p",{style:{color:"#000"},children:"per room per night"})]})})})},z=function(e){var t=n.a.useState(!1),i=Object(a.a)(t,2),c=i[0],s=i[1],l=e.data,r=e.setIsModalVisible,o=e.currency;return Object(g.jsx)("div",{style:{marginLeft:30},children:l.map((function(e,t){return Object(g.jsxs)(R.a,{id:t,style:{boxShadow:"0 0 4px rgb(0 0 0 / 20%)",borderRadius:"5px",width:1120,marginBottom:"15px"},children:[Object(g.jsxs)("div",{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"20px",display:"flex",flexDirection:"row"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"33.3333333333%"},children:Object(g.jsx)("div",{style:{position:"relative",marginTop:"10%"},children:Object(g.jsx)("img",{width:"320px",height:"320px",src:"https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/uploads/17702131351308004063Executive-Room-1-1200x796.jpg"})})}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"66.6666666667%"},children:[Object(g.jsxs)("div",{style:{marginTop:"6%",display:"flex",flexDirection:"row"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"33.6666666667%"},children:[Object(g.jsx)("h2",{style:{cursor:"pointer",color:"#000",textTransform:"capitalize",fontWeight:"400",textAlign:"left",marginBottom:"3%"},onClick:function(){return r(!0)},children:e.roomType}),Object(g.jsx)("div",{children:Object(g.jsxs)("p",{children:["Max Room capacity:",e.capacity,Object(g.jsx)("i",{className:"fa fa-male","aria-hidden":"true"}),Object(g.jsx)("i",{className:"fa fa-child"})]})}),Object(g.jsx)("div",{style:{marginTop:"5%"},children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"24-hour front desk"}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fa fa-lock"}),"24-hour security"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fa fa-car"}),"Parking"]})]})})]}),Object(g.jsx)(A,{price:e.price,currency:o})]}),Object(g.jsx)("button",{style:{backgroundColor:e.availability?"red":"grey",fontWeight:"400",color:"white",width:120,marginLeft:530,marginTop:90},disabled:!e.availability,onClick:function(){return s(!c)},children:e.availability?"Available":"Not Available"})]})]}),Object(g.jsx)("div",{className:"row",style:{marginLeft:"auto",marginRight:"auto",marginBottom:"20px"}}),e.availability&&c&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"33.3333333333%"},children:[Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:"Room Only"})})," "]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"33.3333333333%",border:"1px",borderStyle:"dashed"},children:[Object(g.jsx)("h1",{children:"Rooms|Guest"}),Object(g.jsx)("span",{style:{display:"inline-block",fontSize:"65%",position:"relative",top:"-5px",color:"#f5ab35",fontWeight:"500"},children:"1 Room(s) 2 Adults, 0 Kids"})]}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"16.6333333333%"},children:Object(g.jsx)("ul",{children:Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:Object(g.jsxs)("strike",{children:[Object(g.jsx)("i",{className:"fa fa-inr"})," 2850"]})}),Object(g.jsx)("br",{}),Object(g.jsx)("i",{className:"fa fa-inr"})," 2000"]})})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"16.6333333333%"},children:Object(g.jsx)("ul",{children:Object(g.jsx)("li",{style:{marginLeft:"10%"},children:Object(g.jsx)("button",{style:{backgroundColor:"#f5ab35",width:"auto",margin:"0 auto",backgroundPosition:"50%"},children:"Add Rooms"})})})})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"33.3333333333%"},children:[Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:"Room Only"})})," "]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"33.3333333333%",border:"1px",borderStyle:"dashed"},children:[Object(g.jsx)("h1",{children:"Rooms|Guest"}),Object(g.jsx)("span",{style:{display:"inline-block",fontSize:"65%",position:"relative",top:"-5px",color:"#f5ab35",fontWeight:"500"},children:"1 Room(s) 2 Adults, 0 Kids"})]}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"16.6333333333%"},children:Object(g.jsx)("ul",{children:Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{children:Object(g.jsxs)("strike",{children:[Object(g.jsx)("i",{className:"fa fa-inr"})," 2850"]})}),Object(g.jsx)("br",{}),Object(g.jsx)("i",{className:"fa fa-inr"})," 2000"]})})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"16.6333333333%"},children:Object(g.jsx)("ul",{children:Object(g.jsx)("li",{style:{marginLeft:"10%"},children:Object(g.jsx)("button",{style:{backgroundColor:"#f5ab35",width:"auto",margin:"0 auto",backgroundPosition:"50%"},children:"Add Rooms"})})})})]})]})]})}))})},E=i(28),P=i(141),T=function(e){var t,i=e.isModalVisible,c=e.setIsModalVisible,n=e.isloginVisible,s=e.setLoginVisible;return Object(g.jsxs)("div",{children:[Object(g.jsx)(P.a,{title:"Details",visible:i,footer:null,onCancel:c,children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("h3",{style:{textAlign:"center",margin:"15px",fontWeight:"bold"},children:"EXECUTIVE SINGLE ROOM"}),Object(g.jsxs)("div",{style:{padding:"1% 2%"},children:[Object(g.jsx)("b",{children:"Description :"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{style:{color:"rgb(137, 137, 137)",fontFamily:"Lato",fontSize:"15.001px",backgroundColor:"rgb(255, 255, 255)"},children:"Complimentary Buffet Breakfast(Not Applicable for check in Date) Non alcoholic welcome drink on arrival\xa0 Complimentary Wi-Fi in the rooms 32Inche LED TV\xa0Cable Connected in every room. One way pick up or drop from railway station or airport. Well stocked mini bar in every room 24hrs"}),Object(g.jsx)("br",{})]}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:["Complimentary Buffet Breakfast(Not Applicable for check in Date)",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["Non alcoholic welcome drink on arrival",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["Complimentary Wi-Fi in the rooms",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["Complimentary Buffet Breakfast(Not Applicable for check in Date)",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["32Inche LED TV Cable Connected in every room.",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["Complimentary Buffet Breakfast(Not Applicable for check in Date)",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["32Inche LED TV Cable Connected in every room.",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["32Inche LED TV Cable Connected in every room.",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["32Inche LED TV Cable Connected in every room.",Object(g.jsx)("br",{})]}),Object(g.jsxs)("li",{children:["32Inche LED TV Cable Connected in every room.",Object(g.jsx)("br",{})]})]})]}),Object(g.jsx)("h5",{style:{padding:"2%"},children:Object(g.jsx)("b",{children:"Room Ammenities : "})}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col m4",style:{width:"33.3333333333%"},children:Object(g.jsx)("li",{children:"24-hour front desk"})}),Object(g.jsx)("div",{className:"col m4",style:{width:"33.3333333333%"},children:Object(g.jsx)("li",{children:"24-hour front desk"})})," ",Object(g.jsx)("div",{className:"col m4",style:{width:"33.3333333333%"},children:Object(g.jsx)("li",{children:"24-hour front desk"})})," "]})]})}),Object(g.jsxs)(P.a,{visible:n,onOk:s,onCancel:s,footer:null,children:[Object(g.jsx)("h3",{style:{textTransform:"capitalize",fontWeight:"400",color:"#f5ab35"},children:"Please, login into your account"}),Object(g.jsx)("h4",{style:{textAlign:"center"},children:"Enter Mobile Number"}),Object(g.jsx)("form",{action:"/action_page.php",children:Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(g.jsxs)("select",{style:(t={border:"none",color:"#1c1b1b"},Object(E.a)(t,"border","none"),Object(E.a)(t,"borderBottom","1px solid #9e9e9e"),Object(E.a)(t,"height","2rem"),Object(E.a)(t,"width","88.6666666667%"),Object(E.a)(t,"marginLeft","50px"),t),children:[Object(g.jsx)("option",{value:"+91",children:"+91"}),Object(g.jsx)("option",{value:"+92",children:"+92"}),Object(g.jsx)("option",{value:"+93",children:"+93"}),Object(g.jsx)("option",{value:"+94",children:"+94"}),Object(g.jsx)("option",{value:"+95",children:"+95"}),Object(g.jsx)("option",{value:"+96",children:"+96"}),Object(g.jsx)("option",{value:"+121",children:"+121"}),Object(g.jsx)("option",{value:"+123",children:"+123"}),Object(g.jsx)("option",{value:"+121",children:"+121"}),Object(g.jsx)("option",{value:"+343",children:"+343"}),Object(g.jsx)("option",{value:"+432",children:"+432"}),Object(g.jsx)("option",{value:"+212",children:"+212"})]})}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(g.jsx)("input",{style:{border:"none",borderBottom:"1px solid #9e9e9e",color:"#1c1b1b",fontSize:"110%",width:"66.6666666667%",marginLeft:"55px"},type:"tel",id:"phone",name:"phone",placeholder:"123-45-678",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}",required:!0}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"submit",value:"Login",style:{fontWeight:"400",backgroundColor:"#f5ab35"}})]})]})})]})]})},B=function(e){var t=e.display,i=e.setDisplay;return Object(g.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(g.jsxs)(R.a,{bordered:!1,style:{width:"100%"},children:[Object(g.jsxs)(C.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(g.jsx)(C.a.Item,{style:{width:"300px"},onClick:function(){return i("about")},children:"About"},"2"),Object(g.jsx)(C.a.Item,{style:{width:"300px"},onClick:function(){return i("policy")},children:"Policies"},"3"),Object(g.jsx)(C.a.Item,{style:{width:"300px"},onClick:function(){return i("map")},children:"Hotel Map"},"4"),Object(g.jsx)(C.a.Item,{style:{width:"300px"},children:"Review"},"5")]}),"about"===t&&Object(g.jsxs)("div",{id:"about",className:"col s12",children:[Object(g.jsx)("div",{classname:"row",children:Object(g.jsx)("h2",{style:{color:"#000",textTransform:"capitalize",textAlign:"left",padding:"2% 2% 0",fontWeight:"600",marginBottom:"1%",outline:"none",fontSize:"24px"},children:"About Hotel Sheetal Bhubaneswar"})}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(g.jsx)("img",{style:{cursor:"pointer",boxShadow:"none",marginLeft:"10px",padding:"1% 1% 0",border:"1px solid #c9c8c8",width:"500px"},src:"https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/uploads/2028603934196127646seetal1.jpg"})}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(g.jsx)("span",{children:Object(g.jsx)("p",{style:{fontSize:"20px",color:"#555",marginLeft:"27px",marginRight:"10px"},children:"The Hotel has 56 luxurious rooms and conference room suitable for conventions, banquets, meetings and weddings, with capacity up to 200 people. Most of them with natural light."})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:"fa fa-envelope"})," ","reservation@hotelseetal.net"]})}),Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:"fa fa-address-book"})," 06742541116, 06742541116"]})})]})}),Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:"fa fa-plane"})," Biju pattnaik international airport",Object(g.jsx)("span",{children:"(7km)"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:"fa fa-train"})," Bhubaneswar railway station",Object(g.jsx)("span",{children:"(7km)"})]})})]})})]})]}),Object(g.jsxs)("ul",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:"fa fa-clock-o"})," Check In :",Object(g.jsx)("span",{children:"12:00"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:"fa fa-clock-o"})," Check Out:",Object(g.jsx)("span",{children:"12:00"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)("p",{style:{fontSize:"20px",flexDirection:"column"},children:[Object(g.jsx)("i",{className:" fa fa-star"})," Ratings:",Object(g.jsx)("span",{children:"5"})]})})]}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:""},children:Object(g.jsxs)("h3",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"Important Tourist Places :"]})}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:"Nandankanan Zoological Park"}),Object(g.jsx)("p",{children:"Khandagiri Udaygiri Caves"}),Object(g.jsx)("p",{children:"Lingaraja Temple"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("h1",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"Hotel Ammenities"]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"5%"},children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{style:{fontSize:"0.9rem",fontWeight:"400"},children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"F&B"]}),":"]}),Object(g.jsx)("span",{style:{fontSize:"0.9rem"},children:" Restaurant"})]})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"5%"},children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{style:{fontSize:"0.9rem",fontWeight:"400"},children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"Facility"]}),":"]}),Object(g.jsx)("span",{style:{fontSize:"0.9rem"},children:"Parking,24-hour security,Lobby,Parking,24-hour security,Lobby,Parking"})]})})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"5%"},children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{style:{fontSize:"0.9rem",fontWeight:"400"},children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"F&B"]}),":"]}),Object(g.jsxs)("span",{style:{fontSize:"0.9rem"},children:[" ","24-hour front desk, Front desk, Front desk"]})]})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"5%"},children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{style:{fontSize:"0.9rem",fontWeight:"400"},children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"House Keeping"]}),":"]}),Object(g.jsx)("span",{style:{fontSize:"0.9rem"},children:"Sanitizers, Housekeeping - daily, Sanitizers, Housekeeping - daily"})]})})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(g.jsxs)("p",{style:{fontSize:"0.9rem",fontWeight:"400"},children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"Room Facility"]}),":"]}),Object(g.jsx)("span",{style:{fontSize:"0.9rem"},children:"Air conditioning, Air conditioning"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(g.jsxs)("p",{style:{fontSize:"0.9rem",fontWeight:"400"},children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("i",{className:" fa fa-camera"}),"FeedBack Link"]}),":"]}),Object(g.jsx)("span",{style:{fontSize:"0.9rem"},children:"Air conditioning, Air conditioning"})]})]}),"policy"===t&&Object(g.jsxs)("div",{id:"policies",className:"row",children:[Object(g.jsxs)("div",{classname:"row",children:[Object(g.jsx)("div",{classname:"col",children:Object(g.jsx)("h2",{style:{color:"#000",textTransform:"capitalize",textAlign:"left",padding:"2% 2% 0",fontWeight:"600",marginBottom:"1%",outline:"none",fontSize:"24px"},children:"Policies"})}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"66.3333333333%",fontSize:"26px"},children:Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Cancellation Policy"})})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"77.6666666667%"},children:Object(g.jsxs)("ul",{style:{marginTop:"1%"},children:[Object(g.jsx)("li",{children:"Before 30 days 10% of the Total billing Amount Retained with us."}),Object(g.jsx)("li",{children:"Before 30 days 10% of the Total billing Amount Retained with us."}),Object(g.jsx)("li",{children:"Before 30 days 10% of the Total billing Amount Retained with us."})]})})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"66.3333333333%",fontSize:"26px"},children:Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Child Policy"})})}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"77.6666666667%"},children:Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Child up to 5 years can share with parents (without mattress & food).Above 5 years we treat as extra person and on chargeable basis.(With extra bed and food)."})})})]})]}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"66.3333333333%",fontSize:"26px"},children:Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Privacy Policy"})})}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"77.6666666667%"},children:[Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Special Note:"})}),Object(g.jsx)("p",{children:"\xb7 It is mandatory to present any valid ID (Passport / Election ID / Driving license) at the time of check in. (As per the notification of Government of India"}),Object(g.jsx)("p",{children:"\xb7 Check in & Check out time is 12:00 noon. Early arrival and late departure is subject to Availability and as per hotel policy. (As per the notification of Government of India"}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Guarantee Policy:"})}),Object(g.jsx)("p",{children:"\xb7 It is mandatory to present any valid ID (Passport / Election ID / Driving license) at the time of check in. (As per the notification of Government of India"}),Object(g.jsx)("p",{children:"\xb7 Check in & Check out time is 12:00 noon. Early arrival and late departure is subject to Availability and as per hotel policy. (As per the notification of Government of India"}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Hotel Policy:"})}),Object(g.jsx)("p",{children:"\xb7 It is mandatory to present any valid ID (Passport / Election ID / Driving license) at the time of check in. (As per the notification of Government of India"}),Object(g.jsx)("p",{children:"\xb7 Check in & Check out time is 12:00 noon. Early arrival and late departure is subject to Availability and as per hotel policy. (As per the notification of Government of India"}),Object(g.jsx)("p",{children:"\xb7 If cancelled within 72 hours from the date of arrival / no-show entire amount for stay will be charged as retention charge. (As per the notification of Government of India"}),Object(g.jsx)("p",{children:"\xb7 If cancelled within 04 \u2013 07 days of the date of arrival: 100% of the 1st night stay will be charged as retention charge."}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Changes Policy:"})}),Object(g.jsx)("p",{children:"Any changes to the booking must be made before arrival at the hotel. Otherwise The NO REFUND policy will be applicable."}),Object(g.jsxs)("ul",{style:{marginTop:"1%"},children:[Object(g.jsx)("li",{children:"Cancellation policy may vary during peak-season in which case refund will be based on the hotel policy. Peak season cancellation must be done at least 15 days prior to arrival date to qualify for future use"}),Object(g.jsx)("li",{children:"Kindly arrange to send us the credit card holder's residence address & telephone number for Record purpose; which has been provided for guarantee of this booking with us."}),Object(g.jsx)("li",{children:"Before 30 days 10% of the Total billing Amount Retained with us."})]}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:Object(g.jsx)("b",{children:"Credit Card Pre-Authorization Policy:"})}),Object(g.jsx)("p",{children:"\xb7 It is mandatory to present any valid ID (Passport / Election ID / Driving license) at the time of check in. (As per the notification of Government of India"}),Object(g.jsx)("p",{children:"The amount that is taken is blocked from Credit limit. It is not processed as sale and is released when the guest settles the bill. The transaction is complete only when you sign the charge slip at the time of settlement. You may get a SMS from your bank informing you about the debit however, be rest assured that it is only blocking and not sale."}),Object(g.jsx)("p",{children:" "}),Object(g.jsx)("p",{children:"\xb7 If cancelled within 04 \u2013 07 days of the date of arrival: 100% of the 1st night stay will be charged as retention charge."}),Object(g.jsx)("p",{children:" "}),"\xb7 PAN number is compulsory, in case where Bill is exceeding Rs.25, 000/-in case of individual & in case of any Travel Agent or party makes net payment after deducting TDS & commission from the gross bill. Booking request on the travel agent\u2019s letter head is compulsory in case of any net payment made after deducting commission or in case of Direct Payment made by Guest after check-out of the guest",Object(g.jsx)("br",{})]})]})]}),"map"===t&&Object(g.jsx)("div",{id:"map",children:Object(g.jsx)(k,{})})]})})},L=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:"We Accept payment here"}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:"Follow us"})]}),"Ant Design \xa92018 Created by Ant UED"]})},U=function(){var e;return Object(g.jsx)("div",{className:"site-layout-content",children:Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(g.jsxs)(R.a,{style:Object(E.a)({width:"70%",justifyContent:"center",borderRadius:"5px",marginLeft:"90px",boxShadow:"0 0 4px rgb(0 0 0 / 20%)"},"borderRadius","5px"),children:[Object(g.jsx)("h3",{style:{paddingTop:"20px",color:"#000",textTransform:"capitalize",fontWeight:"400",textAlign:"center"},children:"search result"}),Object(g.jsx)("div",{style:{width:"150px",height:"150px",margin:"0 auto",borderRadius:"50%",backgroundColor:"#f5ab35",position:"relative"},children:Object(g.jsx)("i",{class:"fa fa-search",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"#fff",fontSize:"50px"},"aria-hidden":"true"})}),Object(g.jsx)("p",{style:{fontSize:"130%",textAlign:"center"},children:"No packages found in these dates !"}),Object(g.jsx)("p",{style:{fontSize:"100%",textAlign:"center"},children:"Please try in other dates and good luck!"})]}),Object(g.jsxs)(R.a,{style:(e={width:"30%",height:"auto",marginLeft:"5%",paddingLeft:"4%",paddingRight:"4%",borderRadius:"5px"},Object(E.a)(e,"marginLeft","90px"),Object(E.a)(e,"boxShadow","0 0 4px rgb(0 0 0 / 20%)"),Object(E.a)(e,"borderRadius","5px"),e),children:[Object(g.jsx)("h3",{style:{fontSize:"25px",fontWeight:"bold"},children:"Booking Summary"}),Object(g.jsx)("div",{style:{width:"90%"},children:Object(g.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/208-2083300_guest-booking-icon-bed-clipart.png",style:{height:"20%",width:"30%"}})}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{style:{fontSize:"22px",textAlign:"center"},children:"No Package Selected"}),Object(g.jsx)("p",{style:{fontSize:"20px"},children:"Click add package button to add the package"}),Object(g.jsx)("br",{})]})]})})},W=function(){return Object(g.jsx)(R.a,{style:Object(E.a)({width:"30%",height:"50%",paddingLeft:"4%",paddingRight:"4%",borderRadius:"5px",marginLeft:"40px",boxShadow:"0 0 4px rgb(0 0 0 / 20%)"},"borderRadius","5px"),children:Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(g.jsx)("h3",{style:{fontSize:"25px",fontWeight:"bold"},children:"Advertisement"}),Object(g.jsx)("div",{style:{width:"90%"},children:Object(g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg/1200px-7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg",style:{height:400,width:300}})}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{style:{fontSize:"22px",textAlign:"center"},children:"Dummy Advertisement"}),Object(g.jsx)("p",{style:{fontSize:"20px"},children:"Contact ! Contact! Contact!"}),Object(g.jsx)("br",{})]})})},M=b.a.RangePicker,F=(o.a.Header,o.a.Content),V=o.a.Footer,_=[{id:1,image:"room.jpg",roomType:"EXECUTIVE  ROOM",capacity:"1",availability:!0,price:{actualprice:4e3,discount:20}},{id:2,image:{Room1:d},roomType:"EXECUTIVE SINGLE ROOM",capacity:2,availability:!1,price:{actualprice:2e3,discount:5}},{id:3,image:{Room2:d},roomType:"EXECUTIVE DOUBLE ROOM",capacity:3,availability:!0,price:{actualprice:3e3,discount:10}},{id:4,image:{Room3:d},roomType:"EXECUTIVE SINGLE ROOM",capacity:1,availability:!1,price:{actualprice:5e3,discount:30}}];function G(e,t){console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])}var H=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),i=t[0],n=t[1],s=Object(c.useState)("INR"),l=Object(a.a)(s,2),r=l[0],d=l[1],b=Object(c.useState)("about"),h=Object(a.a)(b,2),f=h[0],O=h[1],u=Object(c.useState)(!1),m=Object(a.a)(u,2),y=m[0],v=m[1],w=Object(c.useState)("Packages"),k=Object(a.a)(w,2),D=k[0],C=k[1],S=function(e){O(e)};return Object(g.jsxs)(o.a,{children:[Object(g.jsx)("div",{className:"logo"}),Object(g.jsx)(N,{display:f,setDisplay:S,price:r,setPrice:d,loginModal:function(){v(!0)},packages:D,setPackages:function(e){C(e)}}),Object(g.jsx)("div",{style:{flexDirection:"row"},children:Object(g.jsxs)(F,{style:{padding:"0px",marginTop:"1px"},children:[Object(g.jsx)(x.b,{direction:"vertical",size:1,children:Object(g.jsxs)("div",{style:{flexDirection:"column",marginLeft:"auto",marginRight:"auto",marginBottom:"20px",position:"relative"},children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",position:"absolute",top:200,left:400,padding:20,width:800},children:[Object(g.jsx)(M,{style:{width:600},ranges:{Today:[p()(),p()()],"This Month":[p()().startOf("month"),p()().endOf("month")]},onChange:G}),Object(g.jsx)("button",{className:"btn-check",children:"Check Availability"})]}),Object(g.jsx)("div",{style:{zIndex:10,margin:30},children:Object(g.jsx)("img",{width:"1650px",height:"500px",src:j})})]})}),"Packages"===D?Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(g.jsx)(z,{data:_,setIsModalVisible:n,currency:r}),Object(g.jsx)(W,{})]}):Object(g.jsx)(U,{})]})}),Object(g.jsx)(B,{display:f,setDisplay:S}),Object(g.jsx)(V,{style:{textAlign:"center",color:"black"},children:Object(g.jsx)(L,{})}),Object(g.jsx)(T,{isModalVisible:i,setIsModalVisible:function(){return n(!1)},isloginVisible:y,setLoginVisible:function(){return v(!1)}})]})},K=i(23);var q=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(K.d,{children:[Object(g.jsx)(K.b,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(H,Object(r.a)({},e))}})," ",Object(g.jsx)(K.b,{exact:!0,path:"/packages",render:function(e){return Object(g.jsx)(U,Object(r.a)({},e))}})," ",Object(g.jsx)(K.a,{to:"/login"})]})})},X=(i(133),i(134),i(75)),Y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,144)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;i(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(g.jsx)(X.a,{children:Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(q,{})})}),document.getElementById("root")),Y()}},[[135,1,2]]]);
//# sourceMappingURL=main.a447f840.chunk.js.map