"use strict";(self["webpackChunksplot_frontend"]=self["webpackChunksplot_frontend"]||[]).push([[825],{4256:(e,t,a)=>{a.d(t,{UC:()=>n,VY:()=>i,M2:()=>o});var s=a(5615);function n(e){return(0,s.ZP)(`http://localhost:${e}`)}function i(e,t){e.on("active_plates_update",(()=>{t()}))}function o(e,t){e.on("new_alert",(e=>{t(e)}))}},9828:(e,t,a)=>{a.d(t,{Z$:()=>i,m_:()=>o,l8:()=>r,pO:()=>l});const s="http://0.0.0.0:5000";async function n(e,t="GET"){let a={},s=await fetch(e,{method:`${t}`});return 200===s.status&&(a=await s.json()),{status:s.status,data:a}}async function i(){return await n(`${s}/api/v1/actives`)}async function o(){return await n(`${s}/api/v1/reports/countPlaces`)}async function r(e){const t=await n(`${s}/api/v1/vehicles/${e}`);if(200!==t.status)return t;const a=await n(`${s}/api/v1/entries/?vehicleId=${t.data.id}`);if(200!==a.status)return a;const i=await n(`${s}/api/v1/vehiclePhotos?entryId=${a.data[0].id}`);return 200!==i.status?i:await n(`${s}/api/v1/vehiclePhotos/photo/${i.data[0].id}`)}async function l(e){return await n(`${s}/api/v1/entries/${e}`,"DELETE")}},825:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(3673);function n(e,t,a,n,i,o){const r=(0,s.up)("bar-graph"),l=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(l,{class:"q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(r)])),_:1})}a(246);var i=a(8825);function o(e,t,a,n,i,o){const r=(0,s.up)("apexchart");return(0,s.wg)(),(0,s.j4)(r,{type:"bar",height:"230",options:i.chartOptions,series:i.series},null,8,["options","series"])}a(9835);const r={name:"BarGraph",components:{apexchart:VueApexCharts},data(){return{series:[{name:"PRODUCT A",data:[44,55,41,67,22,43,21,49]},{name:"PRODUCT B",data:[13,23,20,8,13,27,33,12]},{name:"PRODUCT C",data:[11,17,15,15,21,14,15,13]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},title:{text:"Stacked Columns 100",align:"left",style:{color:"#FFF"}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"],labels:{style:{colors:"#fff"}}},yaxis:{labels:{style:{colors:"#fff"}}},fill:{opacity:1},legend:{position:"right",offsetX:0,offsetY:50,labels:{colors:"#FFF"}}}}}};r.render=o;const l=r;var c=a(4256),p=a(9828);const h=(0,s.aZ)({name:"Stats",components:{BarGraph:l},setup(){(0,i.Z)()},data(){return{wsNotification:!1,parkPlaces:{total:0,free:0,busy:0},plates:{},activePlates:[],filteredPlates:[],emptyTable:!1}},mounted(){const e=(0,c.UC)(5e3);(0,c.VY)(e,this.newMessage),(0,c.M2)(e,this.handleAlarms),this.filteredPlates=Object.values(this.plates),this.newMessage()},methods:{async newMessage(){let e,t={},a={};e=await(0,p.Z$)(),200===e.status&&(t=e.data),this.activePlates=t,e=await(0,p.m_)(),200===e.status&&(a=e.data),this.parkPlaces=a},newEntry(){console.log("nuevo ingreso")},handleAlarms(e){e=JSON.parse(e),console.log("new Alarm: ",e),this.$q.notify({message:e.title,caption:e.description,color:"negative"})},filterPlates(e){this.emptyTable=!1,console.log(e),this.filteredPlates=JSON.parse(JSON.stringify(e)),console.log(JSON.parse(JSON.stringify(this.filteredPlates)),0!==JSON.parse(JSON.stringify(this.filteredPlates)).length)},showEmptyTable(){this.emptyTable=!0},async showPhoto(e){console.log(e);let t="",a=await(0,p.l8)(e);200===a.status&&(t=a.data),this.$refs.imageViewerRef.showModal(t)},async deleteEntry(e){this.$q.dialog({title:"Eliminar ingreso",message:"¿Esta seguro que desea eliminar este ingreso?",ok:{color:"negative",label:"eliminar"},cancel:{color:"accent"}}).onOk((async()=>{console.log("eliminando la entry: ",e);const t=await(0,p.pO)(e);200===t.status?(this.$refs.searchBarRef.cleanSearchBar(),await this.newMessage(),this.filteredPlates=[],this.$q.notify({progress:!0,message:"Se eliminó el ingreso correctamente",color:"accent"})):this.$q.notify({progress:!0,message:"No se ha podido eliminar el ingreso seleccionado",color:"negative"})}))}}});var f=a(4379),u=a(4899),d=a(7518),g=a.n(d);h.render=n;const m=h;g()(h,"components",{QPage:f.Z,QLayout:u.Z})}}]);