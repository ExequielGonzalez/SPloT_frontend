"use strict";(self["webpackChunksplot_frontend"]=self["webpackChunksplot_frontend"]||[]).push([[6],{2143:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var o=a(3673);function s(e,t,a,s,n,l){const i=(0,o.up)("SearchBar"),r=(0,o.up)("TableHistory"),c=(0,o.up)("NotificationOut"),d=(0,o.up)("q-page"),m=(0,o.up)("image-viewer"),p=(0,o.up)("PaymentDialog");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(d,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{onResult:e.filterPlates,onSearchError:e.showEmptyTable,plates:JSON.parse(JSON.stringify(this.activePlates)),ref:"searchBarRef"},null,8,["onResult","onSearchError","plates"]),(0,o.Wm)(r,{plates:e.getPlates,onViewPhoto:e.showPhoto,onAddManualEntry:e.addManualEntry,onDeleteUser:e.deleteEntry},null,8,["plates","onViewPhoto","onAddManualEntry","onDeleteUser"]),(0,o.Wm)(c,{onManagePayment:e.managePayment,ref:"notificationOutRef"},null,8,["onManagePayment"])])),_:1}),(0,o.Wm)(m,{ref:"imageViewerRef"},null,512),(0,o.Wm)(p,{ref:"paymentDialogRef",onPaymentRealized:e.paymentRealized},null,8,["onPaymentRealized"])],64)}a(246);var n=a(8825),l=a(2323);(0,o.dD)("data-v-1482b3a7");const i={class:"q-pa-md"},r={class:"table__top"},c=(0,o._)("h6",null,"Historial de ingresos",-1),d={key:0},m={key:1},p=(0,o._)("strong",null,"Borrar",-1);function y(e,t,a,s,n,y){const h=(0,o.up)("q-btn"),f=(0,o.up)("q-td"),u=(0,o.up)("q-tooltip"),g=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(g,{dense:e.$q.screen.lt.md,title:"Plates",columns:e.columns,rows:e.plates,"row-key":"entryId","rows-per-page-options":[15]},{top:(0,o.w5)((()=>[(0,o._)("div",r,[c,(0,o.Wm)(h,{color:"primary",label:"Añadir ingreso",onClick:e.addEntry},null,8,["onClick"])])])),"body-cell":(0,o.w5)((e=>[(0,o.Wm)(f,{props:e,class:"table__items"},{default:(0,o.w5)((()=>[(0,o._)("span",null,(0,l.zw)(e.value),1)])),_:2},1032,["props"])])),"body-cell-actions":(0,o.w5)((t=>[(0,o.Wm)(f,{key:"actions",props:t},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{flat:"",onClick:a=>e.showPhoto(t.row),icon:"visibility",color:t.row.hasPhoto?"primary":"grey"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{"content-style":"font-size: 14px","transition-show":"scale","transition-hide":"scale",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:(0,o.w5)((()=>[t.row.hasPhoto?((0,o.wg)(),(0,o.iD)("strong",d,"Ver más")):(0,o.kq)("",!0),t.row.hasPhoto?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("strong",m,"No disponible"))])),_:2},1024)])),_:2},1032,["onClick","color"]),(0,o.Wm)(h,{flat:"",onClick:a=>e.deleteRecord(t.row.entryId),icon:"delete",color:"negative"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{"content-style":"font-size: 14px","transition-show":"scale","transition-hide":"scale",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:(0,o.w5)((()=>[p])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["props"])])),_:1},8,["dense","columns","rows"])])}(0,o.Cn)();a(7280),a(5363);const h=(0,o.aZ)({props:{plates:Array},data(){return{columns:[{name:"type",label:"Tipo",field:e=>e.type,format:e=>"car"===e?"Auto":"van"===e?"Camioneta":"Moto",sortable:!0,align:"left"},{name:"plateNumber",label:"Patente",field:e=>e.plateNumber,format:e=>`${e.replace("_","")}`,sortable:!0,align:"left"},{name:"entryTime",label:"Horario de ingreso",field:e=>e.entryTime,format:e=>new Date(e).toLocaleString(),sortable:!0,align:"left"},{name:"exitTime",label:"Horario de egreso",field:e=>e.exitTime,format:e=>new Date(e).toLocaleString(),sortable:!0,align:"left"},{name:"cost",label:"Ingreso",field:e=>e.paymentAmount,format:e=>`$${e}`,sortable:!0,align:"left"},{name:"paymentMethod",label:"Metodo de pago",field:e=>this.getPaymentMethod(e.paymentMethod),format:e=>`${e}`,sortable:!0,align:"left"},{name:"actions",field:"actions",label:"Acciones",align:"center"}]}},methods:{getPaymentMethod(e){return"Cash"===e?"Efectivo":"Credit Card"===e?"Tarjeta de credito":"Debito"},showPhoto(e){e.hasPhoto&&this.$emit("view-photo",e.entryId)},async deleteRecord(e){this.$emit("delete-user",e)},addEntry(){this.$emit("add-manual-entry")}}});var f=a(6429),u=a(2025),g=a(8240),w=a(3884),b=a(8870),P=a(7518),v=a.n(P);h.render=y,h.__scopeId="data-v-1482b3a7";const k=h;v()(h,"components",{QTable:f.Z,QSpace:u.Z,QBtn:g.Z,QTd:w.Z,QTooltip:b.Z});var _=a(2785),T=a(1836),N=a(6581),S=a(9821),O=a(4256),q=a(9828);const M=(0,o.aZ)({name:"Home",components:{TableHistory:k,SearchBar:_.Z,ImageViewer:T.Z,NotificationOut:N.Z,PaymentDialog:S.Z},setup(){(0,n.Z)()},data(){return{wsNotification:!1,parkPlaces:{total:0,free:0,busy:0},motorbikePlaces:{total:0,free:0,busy:0},plates:{},activePlates:[],filteredPlates:[],emptyTable:!1}},mounted(){const e=(0,O.UC)(5e3);(0,O.VY)(e,this.newMessage),(0,O.M2)(e,this.handleAlarms),(0,O.BF)(e,this.handlePaymentRequest),this.filteredPlates=Object.values(this.plates),this.newMessage()},computed:{getPlates(){return 0!==JSON.parse(JSON.stringify(this.filteredPlates)).length?JSON.parse(JSON.stringify(this.filteredPlates)):this.emptyTable?[]:JSON.parse(JSON.stringify(this.activePlates))}},methods:{async getHistoryData(){const e=await(0,q.s1)();return console.log(e),e},async newMessage(){let e,t={},a={};e=await this.getHistoryData(),200===e.status&&(t=e.data),this.activePlates=t,e=await(0,q.m_)(),200===e.status&&(a=e.data),this.parkPlaces=a.carsAndVans,this.motorbikePlaces=a.motorbikes},newEntry(){console.log("nuevo ingreso")},handleAlarms(e){const t={Info:"info",Warning:"warning",Error:"negative"};e=JSON.parse(e),console.log("new Alarm: ",e),this.$q.notify({message:e.title,caption:e.description,color:t[e.type]})},filterPlates(e){this.emptyTable=!1,this.filteredPlates=JSON.parse(JSON.stringify(e))},showEmptyTable(){this.emptyTable=!0},async showPhoto(e){console.log(e);let t="",a=await(0,q.X4)(e);200===a.status&&(t=a.data),this.$refs.imageViewerRef.showModal(t)},async deleteEntry(e){this.$q.dialog({title:"Eliminar ingreso",message:"¿Esta seguro que desea eliminar este ingreso?",ok:{color:"negative",label:"eliminar"},cancel:{color:"accent"}}).onOk((async()=>{console.log("eliminando la entry: ",e);const t=await(0,q.pO)(e);200===t.status?(this.$refs.searchBarRef.cleanSearchBar(),await this.newMessage(),this.filteredPlates=[],this.$q.notify({progress:!0,message:"Se eliminó el ingreso correctamente",color:"accent"})):this.$q.notify({progress:!0,message:"No se ha podido eliminar el ingreso seleccionado",color:"negative"})}))},async handlePaymentRequest(e){e=JSON.parse(e),console.log("This is a new payment request: ",e);const t=this.activePlates.filter((t=>t.entryId==e.entryId));this.$refs.notificationOutRef.showNotif(t)},async managePayment(e){e=e[0],console.log("ahora si va el popup",e);let t="";if(e.hasPhoto){console.log("tiene foto");let a=await(0,q.l8)(e.plateNumber);200===a.status&&(t=a.data)}this.$refs.paymentDialogRef.showDialog(t,e)},async paymentRealized(e){console.log("time to save the payment: ",e);let t=await(0,q.s$)(e.entryId,{exitTime:e.exitTime,computePayment:!1});if(200===t.status){console.log("entry edited succesfully: ",t);let a=await(0,q._w)({amount:e.cost,method:e.method,entryId:e.entryId});console.log("payment created succesfully: ",a);const o=await(0,q.kf)(t.data.exitPassagewayId);console.log(o),console.log(o.data[0].id),(0,q.IT)(o.data[0].id)}},async addManualEntry(){(0,q.IT)("1")}}});var R=a(4379),D=a(4899);M.render=s;const E=M;v()(M,"components",{QPage:R.Z,QLayout:D.Z})}}]);