"use strict";(self["webpackChunksplot_frontend"]=self["webpackChunksplot_frontend"]||[]).push([[462],{4462:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var i=n(3673);const a=(0,i.Uk)("0.0.1");function l(e,t,n,l,o,s){const c=(0,i.up)("PagesLink"),u=(0,i.up)("q-space"),r=(0,i.up)("q-item-label"),m=(0,i.up)("q-list"),p=(0,i.up)("q-drawer"),d=(0,i.up)("router-view"),k=(0,i.up)("q-page-container"),w=(0,i.up)("q-layout");return(0,i.wg)(),(0,i.j4)(w,{view:"lHh Lpr lff"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:"",class:"bg-primary",mini:e.miniState,onMouseover:t[1]||(t[1]=t=>e.miniState=!1),onMouseout:t[2]||(t[2]=t=>e.miniState=!0),width:250,breakpoint:500},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{class:"q-py-md"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.essentialLinks,(e=>((0,i.wg)(),(0,i.j4)(c,(0,i.dG)({key:e.title},e),null,16)))),128)),(0,i.Wm)(u),(0,i.Wm)(r,{class:"absolute-bottom q-pl-sm text-grey-3"},{default:(0,i.w5)((()=>[a])),_:1})])),_:1})])),_:1},8,["modelValue","mini"]),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d)])),_:1})])),_:1})}var o=n(2323);function s(e,t,n,a,l,s){const c=(0,i.up)("q-icon"),u=(0,i.up)("q-item-section"),r=(0,i.up)("q-item-label"),m=(0,i.up)("q-item");return(0,i.wg)(),(0,i.j4)(m,{clickable:"",exact:"",to:e.link,active:e.link===this.activeMenu,onClick:e.setActiveMenu,"active-class":"activeMenu"},{default:(0,i.w5)((()=>[e.icon?((0,i.wg)(),(0,i.j4)(u,{key:0,avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{name:e.icon,color:"white"},null,8,["name"])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,{class:"text-white"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1})])),_:1},8,["to","active","onClick"])}const c=(0,i.aZ)({name:"PagesLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}},data(){return{activeMenu:"/"}},methods:{setActiveMenu(){this.activeMenu=this.link}}});var u=n(3414),r=n(2035),m=n(4554),p=n(2350),d=n(7518),k=n.n(d);c.render=s;const w=c;k()(c,"components",{QItem:u.Z,QItemSection:r.Z,QIcon:m.Z,QItemLabel:p.Z});var f=n(1959);const g=[{title:"Dashboard",icon:"dashboard",link:"/"},{title:"Estadisticas",icon:"analytics",link:"/estadisticas"},{title:"Historial",icon:"history",link:"/history"},{title:"Cámaras",icon:"videocam",link:"/camera"},{title:"Configuración",icon:"settings",link:"/configuration"},{title:"Sistema",icon:"info",link:"/system"},{title:"Gestión de cuentas",icon:"manage_accounts",link:"/management-account"},{title:"Empleados",icon:"people",link:"/employees"}],v=(0,i.aZ)({name:"MainLayout",components:{PagesLink:w},setup(){const e=(0,f.iH)(!1);return{miniState:(0,f.iH)(!0),essentialLinks:g,leftDrawerOpen:(0,f.iH)(!1),toggleLeftDrawer(){e.value=!e.value},onLogoutClick(){console.log("cerrando sesion")}}}});var h=n(4899),y=n(2428),b=n(7011),q=n(2025),L=n(2652);v.render=l;const Z=v;k()(v,"components",{QLayout:h.Z,QDrawer:y.Z,QList:b.Z,QItemLabel:p.Z,QSpace:q.Z,QPageContainer:L.Z})}}]);