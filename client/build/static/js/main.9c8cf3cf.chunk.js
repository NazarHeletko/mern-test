(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(35),s=n.n(a),i=(n(135),n(136),n(11)),o=n(231),u=n(232),l=n(207),d=n(230),j=n(233),p=n(113),b=n.n(p),O=n(208),x=n(14),f=n(4),h=n(218),g=n(234),m="CHANGE_PAGE",v=function(e){return{type:m,payload:e}},y=n(15),E=n(1),_=Object(f.a)((function(e){return Object(E.jsx)(h.a,Object(i.a)(Object(i.a)({},e),{},{TabIndicatorProps:{children:Object(E.jsx)("span",{className:"MuiTabs-indicatorSpan"})}}))}))({"& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"transparent"},"& .MuiTabs-indicatorSpan":{width:"80%",backgroundColor:"#54acff"}}),S=Object(f.a)((function(e){return Object(E.jsx)(g.a,Object(i.a)({disableRipple:!0},e))}))((function(e){var t=e.theme;return{textTransform:"none",fontWeight:t.typography.fontWeightRegular,fontSize:t.typography.pxToRem(15),marginRight:t.spacing(1),color:"rgba(255, 255, 255, 0.7)","&.Mui-selected":{color:"#c6efff"},"&.Mui-focusVisible":{backgroundColor:"rgba(100, 95, 228, 0.32)"}}}));function U(){var e=c.useState(0),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(y.b)();return Object(E.jsx)(d.a,{sx:{width:"100%"},children:Object(E.jsxs)(_,{value:n,onChange:function(e,t){r(t)},"aria-label":"styled tabs example",children:[Object(E.jsx)(S,{onClick:function(){return a(v("users"))},label:"List of Users"}),Object(E.jsx)(S,{onClick:function(){return a(v("groups"))},label:"List of Groups for Users"})]})})}function C(e){var t=e.children,n=e.window,c=Object(l.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(E.jsx)(O.a,{in:c,children:Object(E.jsx)(d.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function G(e){return Object(E.jsxs)(c.Fragment,{children:[Object(E.jsx)(o.a,{sx:{backgroundColor:"#000000"},children:Object(E.jsx)(u.a,{children:Object(E.jsx)(U,{})})}),Object(E.jsx)(u.a,{id:"back-to-top-anchor"}),Object(E.jsx)(C,Object(i.a)(Object(i.a)({},e),{},{children:Object(E.jsx)(j.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(E.jsx)(b.a,{})})}))]})}var D=n(226),R=n(170),T=function(){var e={margin:"8px 4px"},t={borderLeft:"2px solid #dcdcdc",paddingLeft:0};return Object(E.jsx)(d.a,{sx:{boxShadow:"0px 4px 8px 0px rgba(34, 60, 80, 0.2)",mb:"24px",background:"#caf0ff"},children:Object(E.jsxs)(D.a,{container:!0,spacing:0,children:[Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"User name"})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"Created"})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"Group"})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"Actions"})})]})})},w=n(227),A=n(39),N=n.n(A),k="users/GET_USERS",P="users/DELETE_USERS",I="users/UPDATE_USER",L="users/CREATE_USER",M="users/OPEN_DIALOG_FORM_ADD_USER",W="users/IS_USER_EDIT_OPEN",F="users/SET_EDITED_USER",z="users/SET_INPUT_NAME",V="users/DELETE_USER_SUCCESS",Y="users/CREATE_USER_SUCCESS",X="users/CREATE_USER_ERROR",B="users/UPDATE_USER_SUCCESS",H=function(e){return{type:B,payload:e}},J=function(e){return{type:X,payload:e}},q=function(e){return{type:Y,payload:e}},K=function(e){return{type:V,payload:e}},Q=function(e){return{type:W,payload:e}},Z=function(e){return{type:M,payload:e}};var $=function(){return function(e,t){N.a.get("http://localhost:5000/api/users").then((function(t){var n;e((n=t.data,{type:k,payload:n}))})).catch((function(e){return console.log(e)}))}};var ee=function(e){return function(t,n){N.a.delete("http://localhost:5000/api/users",{data:{id:e}}).then((function(){t(function(e){return{type:P,payload:e}}(e)),t(K(!0))})).catch((function(e){return console.log(e)}))}};var te=function(e){return function(t,n){N.a.patch("http://localhost:5000/api/users",e).then((function(){t({type:I,user:e}),t(H(!0))})).catch((function(e){return console.log(e)}))}};var ne=function(e){return function(t,n){N.a.post("http://localhost:5000/api/users",e).then((function(){t({type:L,payload:e}),t(q(!0))})).catch((function(e){return t(J(!0))}))}},ce=function(e){var t=e.name,n=e.created,c=e.group,r=e.id,a=Object(y.b)(),s={margin:"8px 4px"},i={paddingLeft:0};return Object(E.jsx)(d.a,{sx:{border:"2px solid #dcdcdc",mb:"4px"},children:Object(E.jsxs)(D.a,{container:!0,spacing:0,children:[Object(E.jsx)(D.a,{item:!0,xs:3,sx:i,children:Object(E.jsx)(R.a,{variant:"subtitle1",sx:s,children:t})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:i,children:Object(E.jsx)(R.a,{variant:"subtitle1",sx:s,children:n})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:i,children:Object(E.jsx)(R.a,{variant:"subtitle1",sx:s,children:c})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:i,children:Object(E.jsxs)(R.a,{variant:"subtitle1",sx:s,children:[Object(E.jsx)(w.a,{onClick:function(){a({type:F,payload:{_id:r,name:t,group:c}}),a(Q(!0))},size:"small",variant:"outlined",sx:{mr:"4px"},children:"edit user"}),Object(E.jsx)(w.a,{onClick:function(){return a(ee(r))},size:"small",variant:"outlined",color:"error",children:"delete"})]})})]})})},re=n(223),ae=n(236),se=n(237),ie=n(215),oe=n(225),ue=n(222),le=n(238),de=n(216),je=n(44),pe=n.n(je);function be(e){var t=e.name,n=e.setNameValue,r=c.useState("Noname"),a=Object(x.a)(r,2),s=a[0],i=a[1],o=Object(y.c)((function(e){return e.groups.groups})),u=(Object(y.c)((function(e){return e.users.isUserEditOpen})),Object(y.b)());return Object(E.jsxs)(d.a,{sx:{minWidth:120,mt:"6px"},children:[Object(E.jsxs)(le.a,{fullWidth:!0,children:[Object(E.jsx)(oe.a,{id:"demo-simple-select-label",children:"Group"}),Object(E.jsx)(de.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"Group",onChange:function(e){i(e.target.value)},children:o.map((function(e){return Object(E.jsx)(ue.a,{value:e.name,children:e.name},e._id)}))})]}),Object(E.jsx)(d.a,{sx:{display:"flex",justifyContent:"center",paddingTop:"22px"},children:Object(E.jsx)(w.a,{onClick:function(){u(ne({name:t,group:s,created:(new Date).toJSON().slice(0,10).replace(/-/g,"/")})),u(Z(!1)),n("")},color:"success",variant:"contained",startIcon:Object(E.jsx)(pe.a,{sx:{color:"#fff"},fontSize:"small"}),children:"save"})})]})}function Oe(){Object(y.c)((function(e){return e.users.isUserEditOpen}));var e=Object(y.c)((function(e){return e.users.userEditDialogOpen})),t=Object(y.b)(),n=c.useState(""),r=Object(x.a)(n,2),a=r[0],s=r[1];return Object(E.jsxs)(ae.a,{open:e,onClose:function(){t(Z(!1)),s("")},children:[Object(E.jsx)(ie.a,{children:"To add a new user fill out the form"}),Object(E.jsxs)(se.a,{children:[Object(E.jsx)(re.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,onChange:function(e){s(e.target.value)},value:a,autoComplete:"off"}),Object(E.jsx)(be,{name:a,setNameValue:s})]})]})}var xe="groups/GET_GROUPS",fe="groups/DELETE_GROUP",he="groups/DELETE_GROUP_ERROR",ge="groups/DELETE_GROUP_SUCCESS",me="groups/OPEN_ADD_GROUP_MODAL",ve="groups/CREATE_NEW_GROUP",ye="groups/ADD_GROUP_SUCCESS",Ee="groups/ADD_GROUP_ERROR",_e="groups/OPEN_EDIT_MODAL_GROUP",Se="groups/SET_EDITED_GROUP_DATA",Ue="groups/UPDATE_GROUP_DATA",Ce="groups/UPDATE_GROUP_DATA_SUCCESS";function Ge(e){return{type:Ce,payload:e}}var De=function(e){return function(t,n){N.a.put("http://localhost:5000/api/groups",e).then((function(n){t({type:Ue,payload:e}),t(Ge(!0))})).catch((function(e){return console.log(e)}))}};function Re(e){return{type:Se,payload:e}}function Te(e){return{type:_e,payload:e}}function we(e){return{type:Ee,payload:e}}function Ae(e){return{type:ye,payload:e}}var Ne=function(e){return function(t,n){N.a.post("http://localhost:5000/api/groups",e).then((function(e){var n;t((n=e.data,{type:ve,payload:n}))})).catch((function(e){return console.log(e)}))}};function ke(e){return{type:me,payload:e}}function Pe(e){return{type:ge,payload:e}}function Ie(e){return{type:he,payload:e}}var Le=function(e,t){return function(n,c){N.a.delete("http://localhost:5000/api/groups",{data:{name:e,_id:t}}).then((function(e){n({type:fe,_id:t}),n(Pe(!0))})).catch((function(e){return n(Ie(!0))}))}};var Me=function(){return function(e,t){N.a.get("http://localhost:5000/api/groups").then((function(t){var n;e((n=t.data,{type:xe,payload:n}))})).catch((function(e){return console.log(e)}))}};function We(e){var t=e.name,n=e.id,r=Object(y.c)((function(e){return e.groups.groups})),a=(Object(y.c)((function(e){return e.users.isUserEditOpen})),Object(y.c)((function(e){return e.users.editedUser.group}))),s=Object(y.b)(),i=c.useState(a),o=Object(x.a)(i,2),u=o[0],l=o[1];return Object(E.jsxs)(d.a,{sx:{minWidth:120,mt:"6px"},children:[Object(E.jsxs)(le.a,{fullWidth:!0,children:[Object(E.jsx)(oe.a,{id:"demo-simple-select-label",children:"Group"}),Object(E.jsx)(de.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:u,label:"Group",onChange:function(e){l(e.target.value)},children:r.map((function(e){return Object(E.jsx)(ue.a,{value:e.name,children:e.name},e._id)}))})]}),Object(E.jsx)(d.a,{sx:{display:"flex",justifyContent:"center",paddingTop:"22px"},children:Object(E.jsx)(w.a,{onClick:function(){""!==t&&(s(te({id:n,name:t,group:u})),s(Q(!1)))},color:"success",variant:"contained",startIcon:Object(E.jsx)(pe.a,{sx:{color:"#fff"},fontSize:"small"}),children:"save"})})]})}function Fe(){var e=Object(y.c)((function(e){return e.users.editedUser.name})),t=Object(y.c)((function(e){return e.users.editedUser._id})),n=Object(y.c)((function(e){return e.users.isUserEditOpen})),c=Object(y.b)(),r=function(e){var t;c((t=e.target.value,{type:z,payload:t}))};return Object(E.jsxs)(ae.a,{open:n,onClose:function(){c(Q(!1))},children:[Object(E.jsx)(ie.a,{children:"Edit user"}),Object(E.jsxs)(se.a,{children:[Object(E.jsx)(re.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,onChange:function(e){return r(e)},value:e,autoComplete:"off"}),Object(E.jsx)(We,{name:e,id:t})]})]})}var ze=n(221),Ve=n(219),Ye=function(e){var t=e.message,n=e.open,c=e.setOpen,r=e.severity,a=Object(y.b)(),s=function(e,t){"clickaway"!==t&&a(c(!1))};return Object(E.jsx)(ze.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:n,autoHideDuration:4e3,onClose:s,children:Object(E.jsx)(Ve.a,{onClose:s,severity:r,sx:{width:"100%"},children:t})})},Xe=function(){var e=Object(y.c)((function(e){return e.users.deleteUserSuccess})),t=Object(y.c)((function(e){return e.users.createUserSuccess})),n=Object(y.c)((function(e){return e.users.createUserError})),r=Object(y.c)((function(e){return e.users.updateUserSucess})),a=Object(y.c)((function(e){return e.users.users})),s=Object(y.b)();return Object(c.useEffect)((function(){s($()),s(Me())}),[]),Object(E.jsxs)(E.Fragment,{children:[a.map((function(e){return Object(E.jsx)(ce,{name:e.name,created:e.created,group:e.group,id:e._id},e._id)})),Object(E.jsx)(d.a,{sx:{mt:"16px"},children:Object(E.jsxs)(D.a,{container:!0,spacing:0,children:[Object(E.jsx)(D.a,{item:!0,xs:9}),Object(E.jsxs)(D.a,{item:!0,xs:3,children:[Object(E.jsx)(w.a,{onClick:function(){s(Z(!0)),s(Q(!1))},sx:{ml:"3px"},variant:"contained",color:"success",children:"add new user"}),Object(E.jsx)(Oe,{}),Object(E.jsx)(Fe,{})]})]})}),Object(E.jsx)(Ye,{message:"You have successfully deleted a user",open:e,setOpen:K,severity:"success"}),Object(E.jsx)(Ye,{message:"You have successfully create a user",open:t,setOpen:q,severity:"success"}),Object(E.jsx)(Ye,{message:"All fields must be filled",open:n,setOpen:J,severity:"error"}),Object(E.jsx)(Ye,{message:"User updated!",open:r,setOpen:H,severity:"success"})]})},Be=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(T,{}),Object(E.jsx)(Xe,{})]})},He=function(){var e={margin:"8px 4px"},t={borderLeft:"2px solid #dcdcdc",paddingLeft:0};return Object(E.jsx)(d.a,{sx:{boxShadow:"0px 4px 8px 0px rgba(34, 60, 80, 0.2)",mb:"24px",background:"#caf0ff"},children:Object(E.jsxs)(D.a,{container:!0,spacing:0,children:[Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"ID"})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"Name"})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"Description"})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:t,children:Object(E.jsx)(R.a,{variant:"h6",sx:e,children:"Actions"})})]})})},Je=function(e){var t=e.name,n=e.description,c=e.id,r=Object(y.b)(),a={margin:"8px 4px"},s={paddingLeft:0};return Object(E.jsx)(d.a,{sx:{border:"2px solid #dcdcdc",mb:"4px"},children:Object(E.jsxs)(D.a,{container:!0,spacing:0,children:[Object(E.jsx)(D.a,{item:!0,xs:3,sx:s,children:Object(E.jsx)(R.a,{variant:"subtitle1",sx:a,children:c})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:s,children:Object(E.jsx)(R.a,{variant:"subtitle1",sx:a,children:t})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:s,children:Object(E.jsx)(R.a,{variant:"subtitle1",sx:a,children:n})}),Object(E.jsx)(D.a,{item:!0,xs:3,sx:s,children:Object(E.jsxs)(R.a,{variant:"subtitle1",sx:a,children:[Object(E.jsx)(w.a,{onClick:function(){r(Re({name:t,description:n,_id:c})),r(Te(!0))},size:"small",variant:"outlined",sx:{mr:"4px"},children:"edit group"}),Object(E.jsx)(w.a,{onClick:function(){return r(Le(t,c))},size:"small",variant:"outlined",color:"error",children:"delete"})]})})]})})},qe=function(){var e=Object(y.c)((function(e){return e.groups.openAddGroupModal})),t=Object(y.b)(),n=Object(c.useState)(""),r=Object(x.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),o=Object(x.a)(i,2),u=o[0],l=o[1];return Object(E.jsx)("div",{children:Object(E.jsxs)(ae.a,{open:e,onClose:function(){t(ke(!1)),s(""),l("")},children:[Object(E.jsx)(ie.a,{children:"Fill in the fields to create a new group"}),Object(E.jsxs)(se.a,{children:[Object(E.jsx)(re.a,{value:a,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"email",fullWidth:!0,variant:"outlined",autoComplete:"off",onChange:function(e){return s(e.target.value)}}),Object(E.jsx)(re.a,{value:u,sx:{mt:"15px"},id:"outlined-multiline-static",label:"Description",multiline:!0,rows:4,fullWidth:!0,onChange:function(e){return l(e.target.value)}})]}),Object(E.jsx)(d.a,{sx:{display:"flex",justifyContent:"center",paddingTop:"2px",paddingBottom:"22px"},children:Object(E.jsx)(w.a,{onClick:function(){a&&u?(t(Ne({name:a,description:u})),t(Ae(!0))):t(we(!0));t(ke(!1)),s(""),l("")},color:"success",variant:"contained",startIcon:Object(E.jsx)(pe.a,{sx:{color:"#fff"},fontSize:"small"}),children:"save"})})]})})},Ke=function(){var e=Object(y.c)((function(e){return e.groups.isEditGroupModalOpen})),t=Object(y.c)((function(e){return e.groups.editedGroup})),n=Object(y.b)();return Object(E.jsx)("div",{children:Object(E.jsxs)(ae.a,{open:e,onClose:function(){n(Te(!1))},children:[Object(E.jsx)(ie.a,{children:"Edit group"}),Object(E.jsxs)(se.a,{children:[Object(E.jsx)(re.a,{value:t.name,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"email",fullWidth:!0,variant:"outlined",autoComplete:"off",onChange:function(e){return n(Re({name:e.target.value,description:t.description,_id:t._id}))}}),Object(E.jsx)(re.a,{value:t.description,sx:{mt:"15px"},id:"outlined-multiline-static",label:"Description",multiline:!0,rows:4,fullWidth:!0,onChange:function(e){return n(Re(Object(i.a)(Object(i.a)({},t),{},{description:e.target.value,_id:t._id})))}})]}),Object(E.jsx)(d.a,{sx:{display:"flex",justifyContent:"center",paddingTop:"2px",paddingBottom:"22px"},children:Object(E.jsx)(w.a,{onClick:function(){if(t.name&&t.description){var e={_id:t._id,name:t.name,description:t.description};n(De(e)),n(Te(!1))}else n(we(!0));n(ke(!1)),Re({name:"",description:""})},color:"success",variant:"contained",startIcon:Object(E.jsx)(pe.a,{sx:{color:"#fff"},fontSize:"small"}),children:"save"})})]})})},Qe=function(){var e=Object(y.c)((function(e){return e.groups.deleteGroupError})),t=Object(y.c)((function(e){return e.groups.deleteGroupSuccess})),n=Object(y.c)((function(e){return e.groups.addNewGroupSuccess})),r=Object(y.c)((function(e){return e.groups.addNewGroupError})),a=Object(y.c)((function(e){return e.groups.updateGroupDataSuccess})),s=Object(y.c)((function(e){return e.groups.groups})),i=Object(y.b)();return Object(c.useEffect)((function(){i($()),i(Me())}),[]),Object(E.jsxs)(E.Fragment,{children:[s.map((function(e){return Object(E.jsx)(Je,{name:e.name,description:e.description,id:e._id},e._id)})),Object(E.jsx)(d.a,{sx:{mt:"16px"},children:Object(E.jsxs)(D.a,{container:!0,spacing:0,children:[Object(E.jsx)(D.a,{item:!0,xs:9}),Object(E.jsxs)(D.a,{item:!0,xs:3,children:[Object(E.jsx)(w.a,{onClick:function(){i(ke(!0))},sx:{ml:"3px"},variant:"contained",color:"success",children:"add new group"}),Object(E.jsx)(qe,{}),Object(E.jsx)(Ke,{})]})]})}),Object(E.jsx)(Ye,{message:"You cannot delete the group the user belongs to!",open:e,setOpen:Ie,severity:"error"}),Object(E.jsx)(Ye,{message:"You have successfully deleted the group",open:t,setOpen:Pe,severity:"success"}),Object(E.jsx)(Ye,{message:"You have successfully created a group",open:n,setOpen:Ae,severity:"success"}),Object(E.jsx)(Ye,{message:"Fill in the fields to create a new group",open:r,setOpen:we,severity:"error"}),Object(E.jsx)(Ye,{message:"Group updated!",open:a,setOpen:Ge,severity:"success"})]})},Ze=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(He,{}),Object(E.jsx)(Qe,{})]})};var $e=function(){var e=Object(y.c)((function(e){return e.page.activePage}));return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(G,{}),"users"===e&&Object(E.jsx)(Be,{}),"groups"===e&&Object(E.jsx)(Ze,{})]})},et=n(55),tt=n(16),nt={users:[],editedUser:{_id:"",name:"",group:""},userEditDialogOpen:!1,isUserEditOpen:!1,deleteUserSuccess:!1,createUserSuccess:!1,createUserError:!1,updateUserSucess:!1},ct={groups:[],editedGroup:{_id:"",name:"",description:""},deleteGroupError:!1,deleteGroupSuccess:!1,openAddGroupModal:!1,addNewGroupSuccess:!1,addNewGroupError:!1,isEditGroupModalOpen:!1,updateGroupDataSuccess:!1},rt={activePage:"users"},at=Object(et.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(i.a)(Object(i.a)({},e),{},{updateUserSucess:t.payload});case X:return Object(i.a)(Object(i.a)({},e),{},{createUserError:t.payload});case Y:return Object(i.a)(Object(i.a)({},e),{},{createUserSuccess:t.payload});case V:return Object(i.a)(Object(i.a)({},e),{},{deleteUserSuccess:t.payload});case z:return Object(i.a)(Object(i.a)({},e),{},{editedUser:Object(i.a)(Object(i.a)({},e.editedUser),{},{name:t.payload})});case F:return Object(i.a)(Object(i.a)({},e),{},{editedUser:t.payload});case W:return Object(i.a)(Object(i.a)({},e),{},{isUserEditOpen:t.payload});case k:return Object(i.a)(Object(i.a)({},e),{},{users:t.payload});case P:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.filter((function(e){return e._id!==t.payload}))});case M:return Object(i.a)(Object(i.a)({},e),{},{userEditDialogOpen:t.payload});case L:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(tt.a)(e.users),[t.payload])});case I:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){if(e._id===t.user.id){var n=e,c=t.user;return delete c.id,Object.assign(n,c)}return e}))});default:return e}},groups:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(i.a)(Object(i.a)({},e),{},{isEditGroupModalOpen:t.payload});case Ee:return Object(i.a)(Object(i.a)({},e),{},{addNewGroupError:t.payload});case ye:return Object(i.a)(Object(i.a)({},e),{},{addNewGroupSuccess:t.payload});case ve:return Object(i.a)(Object(i.a)({},e),{},{groups:[].concat(Object(tt.a)(e.groups),[t.payload])});case me:return Object(i.a)(Object(i.a)({},e),{},{openAddGroupModal:t.payload});case ge:return Object(i.a)(Object(i.a)({},e),{},{deleteGroupSuccess:t.payload});case he:return Object(i.a)(Object(i.a)({},e),{},{deleteGroupError:t.payload});case xe:return Object(i.a)(Object(i.a)({},e),{},{groups:t.payload});case fe:return Object(i.a)(Object(i.a)({},e),{},{groups:e.groups.filter((function(e){return e._id!==t._id}))});case Se:return Object(i.a)(Object(i.a)({},e),{},{editedGroup:t.payload});case Ce:return Object(i.a)(Object(i.a)({},e),{},{updateGroupDataSuccess:t.payload});case Ue:return Object(i.a)(Object(i.a)({},e),{},{groups:e.groups.map((function(e){return e._id===t.payload._id?{_id:t.payload._id,name:t.payload.name,description:t.payload.description}:e}))});default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;return t.type===m?Object(i.a)(Object(i.a)({},e),{},{activePage:t.payload}):e}}),st=n(114),it=Object(et.d)(at,Object(et.c)(Object(et.a)(st.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(y.a,{store:it,children:Object(E.jsx)($e,{})})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.9c8cf3cf.chunk.js.map