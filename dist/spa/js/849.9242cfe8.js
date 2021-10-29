"use strict";(self["webpackChunksplot_frontend"]=self["webpackChunksplot_frontend"]||[]).push([[849],{2929:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var s=a(3673);const o={class:"home-header q-pa-lg"};function l(e,t,a,l,n,i){const r=(0,s.up)("PlacesCounter"),c=(0,s.up)("SearchBar"),d=(0,s.up)("TablePlates"),m=(0,s.up)("NotificationOut"),p=(0,s.up)("q-page"),u=(0,s.up)("image-viewer"),f=(0,s.up)("PaymentDialog");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(p,{class:"q-pa-md"},{default:(0,s.w5)((()=>[(0,s._)("section",o,[(0,s.Wm)(r,{title:"Lugares generales",places:e.parkPlaces},null,8,["places"]),(0,s.Wm)(r,{title:"Lugares motos",places:e.motorbikePlaces},null,8,["places"])]),(0,s.Wm)(c,{onResult:e.filterPlates,onSearchError:e.showEmptyTable,plates:JSON.parse(JSON.stringify(this.activePlates)),ref:"searchBarRef"},null,8,["onResult","onSearchError","plates"]),(0,s.Wm)(d,{plates:0!==JSON.parse(JSON.stringify(this.filteredPlates)).length?JSON.parse(JSON.stringify(this.filteredPlates)):this.emptyTable?[]:JSON.parse(JSON.stringify(this.activePlates)),onViewPhoto:e.showPhoto,onAddManualEntry:e.addManualEntry,onDeleteUser:e.deleteEntry},null,8,["plates","onViewPhoto","onAddManualEntry","onDeleteUser"]),(0,s.Wm)(m,{onManagePayment:e.managePayment,ref:"notificationOutRef"},null,8,["onManagePayment"])])),_:1}),(0,s.Wm)(u,{ref:"imageViewerRef"},null,512),(0,s.Wm)(f,{ref:"paymentDialogRef",onPaymentRealized:e.paymentRealized},null,8,["onPaymentRealized"])],64)}a(246);var n=a(8825),i=a(2323);(0,s.dD)("data-v-42756826");const r={class:"q-pa-md"},c={class:"table__top"},d=(0,s._)("h6",null,"Patentes activas",-1),m={key:0},p={key:1},u=(0,s._)("strong",null,"Borrar",-1);function f(e,t,a,o,l,n){const f=(0,s.up)("q-btn"),h=(0,s.up)("q-td"),y=(0,s.up)("q-tooltip"),g=(0,s.up)("q-table");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(g,{dense:e.$q.screen.lt.md,title:"Plates",columns:e.columns,rows:e.plates,"row-key":"entryId","rows-per-page-options":[15]},{top:(0,s.w5)((()=>[(0,s._)("div",c,[d,(0,s.Wm)(f,{color:"primary",label:"Añadir ingreso",onClick:e.addEntry},null,8,["onClick"])])])),"body-cell":(0,s.w5)((e=>[(0,s.Wm)(h,{props:e,class:"table__items"},{default:(0,s.w5)((()=>[(0,s._)("span",null,(0,i.zw)(e.value),1)])),_:2},1032,["props"])])),"body-cell-actions":(0,s.w5)((t=>[(0,s.Wm)(h,{key:"actions",props:t},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{flat:"",onClick:a=>e.showPhoto(t.row),icon:"visibility",color:t.row.hasPhoto?"primary":"grey"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{"content-style":"font-size: 14px","transition-show":"scale","transition-hide":"scale",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:(0,s.w5)((()=>[t.row.hasPhoto?((0,s.wg)(),(0,s.iD)("strong",m,"Ver más")):(0,s.kq)("",!0),t.row.hasPhoto?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("strong",p,"No disponible"))])),_:2},1024)])),_:2},1032,["onClick","color"]),(0,s.Wm)(f,{flat:"",onClick:a=>e.deleteRecord(t.row.entryId),icon:"delete",color:"negative"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{"content-style":"font-size: 14px","transition-show":"scale","transition-hide":"scale",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:(0,s.w5)((()=>[u])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["dense","columns","rows"])])}(0,s.Cn)();a(7280),a(5363);const h=(0,s.aZ)({props:{plates:Array},data(){return{columns:[{name:"type",label:"Tipo",field:e=>e.type,format:e=>"car"===e?"Auto":"van"===e?"Camioneta":"Moto",sortable:!0,align:"left"},{name:"plateNumber",label:"Patente",field:e=>e.plateNumber,format:e=>`${e.replace("_","")}`,sortable:!0,align:"left"},{name:"entryTime",label:"Horario de ingreso",field:e=>e.entryTime,format:e=>new Date(e).toLocaleString(),sortable:!0,align:"left"},{name:"cost",label:"Monto actual",field:e=>e.cost,format:e=>`$${e}`,sortable:!0,align:"left"},{name:"actions",field:"actions",label:"Acciones",align:"center"}]}},methods:{showPhoto(e){e.hasPhoto&&this.$emit("view-photo",e.plateNumber)},async deleteRecord(e){this.$emit("delete-user",e)},addEntry(){this.$emit("add-manual-entry")}}});var y=a(6429),g=a(2025),w=a(8240),P=a(3884),b=a(8870),_=a(7518),v=a.n(_);h.render=f,h.__scopeId="data-v-42756826";const k=h;v()(h,"components",{QTable:y.Z,QSpace:g.Z,QBtn:w.Z,QTd:P.Z,QTooltip:b.Z});var N=a(2785);(0,s.dD)("data-v-63a3faa7");const S={class:"counter"},O={class:"counter__title"},q={class:"counter__container-free"},R=(0,s._)("p",null,"LIBRES",-1),T={class:"counter__container-busy"},E=(0,s._)("p",null,"OCUPADOS",-1);function W(e,t,a,o,l,n){return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("p",O,(0,i.zw)(e.title),1),(0,s._)("div",q,[R,(0,s._)("p",null,(0,i.zw)(null===e.places.free?0:e.places.free),1)]),(0,s._)("div",T,[E,(0,s._)("p",null,(0,i.zw)(null===e.places.busy?0:e.places.busy),1)])])}(0,s.Cn)();const Z=(0,s.aZ)({props:{title:String,places:{busy:Number,free:Number}}});Z.render=W,Z.__scopeId="data-v-63a3faa7";const $=Z;var D=a(1836),C=a(6581),I=a(9821),M=a(4256),J=a(9828);const A=(0,s.aZ)({name:"Home",components:{TablePlates:k,SearchBar:N.Z,PlacesCounter:$,ImageViewer:D.Z,NotificationOut:C.Z,PaymentDialog:I.Z},setup(){(0,n.Z)()},data(){return{wsNotification:!1,parkPlaces:{total:0,free:0,busy:0},motorbikePlaces:{total:0,free:0,busy:0},plates:{},activePlates:[],filteredPlates:[],emptyTable:!1}},mounted(){const e=(0,M.UC)(5e3);(0,M.VY)(e,this.newMessage),(0,M.M2)(e,this.handleAlarms),(0,M.BF)(e,this.handlePaymentRequest),this.filteredPlates=Object.values(this.plates),this.newMessage()},methods:{async newMessage(){let e,t={},a={};e=await(0,J.Z$)(),200===e.status&&(t=e.data),this.activePlates=t,e=await(0,J.m_)(),200===e.status&&(a=e.data),this.parkPlaces=a.carsAndVans,this.motorbikePlaces=a.motorbikes},newEntry(){console.log("nuevo ingreso")},handleAlarms(e){const t={Info:"info",Warning:"warning",Error:"negative"};e=JSON.parse(e),console.log("new Alarm: ",e),this.$q.notify({message:e.title,caption:e.description,color:t[e.type]})},filterPlates(e){this.emptyTable=!1,this.filteredPlates=JSON.parse(JSON.stringify(e))},showEmptyTable(){this.emptyTable=!0},async showPhoto(e){console.log(e);let t="",a=await(0,J.l8)(e);200===a.status&&(t=a.data),this.$refs.imageViewerRef.showModal(t)},async deleteEntry(e){this.$q.dialog({title:"Eliminar ingreso",message:"¿Esta seguro que desea eliminar este ingreso?",ok:{color:"negative",label:"eliminar"},cancel:{color:"accent"}}).onOk((async()=>{console.log("eliminando la entry: ",e);const t=await(0,J.pO)(e);200===t.status?(this.$refs.searchBarRef.cleanSearchBar(),await this.newMessage(),this.filteredPlates=[],this.$q.notify({progress:!0,message:"Se eliminó el ingreso correctamente",color:"accent"})):this.$q.notify({progress:!0,message:"No se ha podido eliminar el ingreso seleccionado",color:"negative"})}))},async handlePaymentRequest(e){e=JSON.parse(e),console.log("This is a new payment request: ",e);const t=this.activePlates.filter((t=>t.entryId==e.entryId));this.$refs.notificationOutRef.showNotif(t)},async managePayment(e){e=e[0],console.log("ahora si va el popup",e);let t="";if(e.hasPhoto){console.log("tiene foto");let a=await(0,J.l8)(e.plateNumber);200===a.status&&(t=a.data)}this.$refs.paymentDialogRef.showDialog(t,e)},async paymentRealized(e){console.log("time to save the payment: ",e);let t=await(0,J.s$)(e.entryId,{exitTime:e.exitTime,computePayment:!1});if(200===t.status){console.log("entry edited succesfully: ",t);let a=await(0,J._w)({amount:e.cost,method:e.method,entryId:e.entryId});console.log("payment created succesfully: ",a);const s=await(0,J.kf)(t.data.exitPassagewayId);console.log(s),console.log(s.data[0].id),(0,J.IT)(s.data[0].id)}},async addManualEntry(){(0,J.IT)("1")}}});var z=a(4379),B=a(4899);A.render=l;const Q=A;v()(A,"components",{QPage:z.Z,QBtn:w.Z,QLayout:B.Z})}}]);