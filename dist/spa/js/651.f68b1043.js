"use strict";(self["webpackChunksplot_frontend"]=self["webpackChunksplot_frontend"]||[]).push([[651],{9828:(t,e,a)=>{a.d(e,{Z$:()=>c,m_:()=>l,l8:()=>p,pO:()=>u,qE:()=>d,ZV:()=>h,xT:()=>m,s$:()=>f,_w:()=>g,kf:()=>y,IT:()=>D});const n="http://localhost:5000",o="http://localhost:3001";async function s(t,e="GET"){let a={},n=await fetch(t,{method:`${e}`});return 200===n.status&&(a=await n.json()),{status:n.status,data:a}}async function r(t,e="POST",a){let n=await fetch(t,{method:`${e}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});return 200===n.status&&(a=await n.json()),{status:n.status,data:a}}async function i(t,e){let a=await fetch(`${o}/api/mqtt/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return 200===a.status&&(e=await a.json()),{status:a.status,data:e}}async function c(){return await s(`${n}/api/v1/actives`)}async function l(){return await s(`${n}/api/v1/reports/countPlaces`)}async function p(t){const e=await s(`${n}/api/v1/vehicles/${t}`);if(200!==e.status)return e;const a=await s(`${n}/api/v1/entries/?vehicleId=${e.data.id}`);if(200!==a.status)return a;const o=await s(`${n}/api/v1/vehiclePhotos?entryId=${a.data[0].id}`);return 200!==o.status?o:await s(`${n}/api/v1/vehiclePhotos/photo/${o.data[0].id}`)}async function u(t){return await s(`${n}/api/v1/entries/${t}`,"DELETE")}async function d(t=1630805031,e=1631669031){return await s(`${n}/api/v1/reports/collected?since=${t}&until=${e}`)}async function h(t=1630805031,e=1631669031){return await s(`${n}/api/v1/reports/occupation?since=${t}&until=${e}`)}async function m(t=1630805031,e=1631669031){return await s(`${n}/api/v1/reports/paymentMethods?since=${t}&until=${e}`)}async function f(t,e){return await r(`${n}/api/v1/entries/${t}`,"PUT",e)}async function g(t){return await r(`${n}/api/v1/payments`,"POST",t)}async function y(t){return await s(`${n}/api/v1/trafficlights?id=${t}`)}async function D(t){return await i("traffic_light",{id:t,data:"1"})}},2651:(t,e,a)=>{a.r(e),a.d(e,{default:()=>j});var n=a(3673);function o(t,e,a,o,s,r){const i=(0,n.up)("SearchDateRange"),c=(0,n.up)("bar-graph"),l=(0,n.up)("occupation-graph"),p=(0,n.up)("payment-graph"),u=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(u,{class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{onDateChange:t.getChartsData},null,8,["onDateChange"]),(0,n.Wm)(c,{ref:"barGraphRef"},null,512),(0,n.Wm)(l,{ref:"occupationGraphRef"},null,512),(0,n.Wm)(p,{ref:"paymentGraphRef"},null,512)])),_:1})}const s={class:"row q-mb-md justify-center"},r={class:"col-xs-4 col-sm-3 col-md-4 col-lg-3 col-xl-2 q-px-sm q-pb-md"},i={class:"col-xs-4 col-sm-3 col-md-4 col-lg-3 col-xl-2 q-px-sm q-pb-md"},c={class:"col-xs-2 col-sm-1 self-center q-pb-md"},l={class:"row items-center justify-end q-gutter-sm"},p={class:"col-xs-12 col-sm-2 col-md-1 self-center text-center q-pb-md"};function u(t,e,a,o,u,d){const h=(0,n.up)("q-input"),m=(0,n.up)("q-btn"),f=(0,n.up)("q-date"),g=(0,n.up)("q-popup-proxy"),y=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",s,[(0,n._)("div",r,[(0,n.Wm)(h,{label:"Fecha Inicio",outlined:"",dense:"",modelValue:u.startDate,"onUpdate:modelValue":e[0]||(e[0]=t=>u.startDate=t),mask:"##/##/####",onInput:d.onStartDateChange,disable:""},null,8,["modelValue","onInput"])]),(0,n._)("div",i,[(0,n.Wm)(h,{label:"Fecha Fin",outlined:"",dense:"",modelValue:u.endDate,"onUpdate:modelValue":e[1]||(e[1]=t=>u.endDate=t),mask:"##/##/####",onInput:d.onEndDateChange,disable:""},null,8,["modelValue","onInput"])]),(0,n._)("div",c,[(0,n.Wm)(m,{icon:"event",color:"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{ref:"qPopupProxyRangeEmployeeRecordsRef","transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{modelValue:u.rangeDate,"onUpdate:modelValue":[e[2]||(e[2]=t=>u.rangeDate=t),d.updateRangeDate],range:"",mask:"DD/MM/YYYY"},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n.wy)((0,n.Wm)(m,{label:"Cerrar",color:"primary",flat:""},null,512),[[y]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1},512)])),_:1})]),(0,n._)("div",p,[(0,n.Wm)(m,{color:"primary",outline:"",label:"Buscar",onClick:d.didTapSearchByRange},null,8,["onClick"])])])])}a(71),a(7280);const d={props:{employees:Array},data(){return{rangeDate:{},endDate:"",startDate:""}},computed:{},methods:{onStartDateChange(t){console.log("onStartDateChange: ",t)},onEndDateChange(t){console.log("onEndDateChange: ",t)},didTapSearchByRange(t){""!==this.startDate&&""!==this.endDate&&this.$emit("date-change",this.rangeDate)},updateRangeDate(t){console.log(t),this.startDate=t.from,this.endDate=t.to,this.rangeDate={from:this.toDate(t.from),to:this.toDate(t.to)},console.log(t,this.rangeDate)},toDate(t){const[e,a,n]=t.split("/");return new Date(n,a-1,e,23,0).getTime()/1e3}}};var h=a(4842),m=a(8240),f=a(3944),g=a(3124),y=a(677),D=a(7518),w=a.n(D);d.render=u;const v=d;function b(t,e,a,o,s,r){const i=(0,n.up)("apexchart");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i,{height:"350",type:"bar",options:s.chartOptions,series:s.series},null,8,["options","series"])])}w()(d,"components",{QInput:h.Z,QBtn:m.Z,QPopupProxy:f.Z,QDate:g.Z}),w()(d,"directives",{ClosePopup:y.Z});var x=a(515),$=a.n(x),C=a(2585),O=a.n(C);const k={name:"BarGraph",components:{apexchart:O()},data(){return{series:[{name:"Recaudación",data:[]}],chartOptions:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},title:{text:"Recaudación"},xaxis:{categories:[]},yaxis:{title:{text:"Ingresos"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" pesos"}}}}}},methods:{updateChart(t,e){this.series=[{data:e}],this.chartOptions=$()($()({},this.chartOptions),{xaxis:{categories:t}})}}};k.render=b;const q=k;function E(t,e,a,o,s,r){const i=(0,n.up)("apexchart");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i,{type:"bar",height:"350",options:s.chartOptions,series:s.series},null,8,["options","series"])])}const P={name:"OccupationGraph",components:{apexchart:O()},data(){return{series:[{name:"Autos",data:[]},{name:"Motos",data:[]},{name:"Camionetas",data:[]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{width:2,colors:["transparent"]},title:{text:"Ocupación"},xaxis:{categories:[],labels:{formatter:function(t){return t+"%"}}},yaxis:{title:{text:void 0}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}},legend:{position:"top",horizontalAlign:"left",offsetX:40}}}},methods:{updateChart(t,e,a,n){this.series=[{name:"Autos",data:e},{name:"Motos",data:a},{name:"Camionetas",data:n}],this.chartOptions=$()($()({},this.chartOptions),{xaxis:{categories:t}})}}};P.render=E;const R=P;function T(t,e,a,o,s,r){const i=(0,n.up)("apexchart");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i,{type:"bar",height:"350",options:s.chartOptions,series:s.series},null,8,["options","series"])])}const S={name:"PaymentGraph",components:{apexchart:O()},data(){return{series:[{name:"Efectivo",data:[]},{name:"Tarjeta",data:[]},{name:"Debito",data:[]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{width:2,colors:["transparent"]},title:{text:"Metodos de pago"},xaxis:{categories:[],labels:{formatter:function(t){return t+"%"}}},yaxis:{title:{text:void 0}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}},legend:{position:"top",horizontalAlign:"left",offsetX:40}}}},methods:{updateChart(t,e,a,n){this.series=[{name:"Efectivo",data:e},{name:"Credito",data:a},{name:"Debito",data:n}],this.chartOptions=$()($()({},this.chartOptions),{xaxis:{categories:t}})}}};S.render=T;const W=S;var _=a(9828);const G=(0,n.aZ)({name:"Stats",components:{SearchDateRange:v,BarGraph:q,OccupationGraph:R,PaymentGraph:W},setup(){return{}},data(){return{}},mounted(){},methods:{async getChartsData(t){console.log("from: ",t.from,"to: ",t.to),this.getMoneyEarn(t),this.getOccupation(t),this.getPaymentMethods(t)},async getMoneyEarn(t){const e=await(0,_.qE)(t.from,t.to);console.log(e);let a=[],n=[];e.data.forEach((t=>{var e=new Date(t.date);a.push(e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)),n.push(t.collected)})),console.log(a,n),this.$refs.barGraphRef.updateChart(a,n)},async getOccupation(t){const e=await(0,_.ZV)(t.from,t.to);console.log(e);let a=[],n=[],o=[],s=[];Object.values(e.data).forEach((t=>{var e=new Date(t.date);a.push(e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)),n.push(t.cars),s.push(t.vans),o.push(t.motorbikes)})),this.$refs.occupationGraphRef.updateChart(a,n,o,s)},async getPaymentMethods(t){const e=await(0,_.xT)(t.from,t.to);console.log(e);let a=[],n=[],o=[],s=[];Object.values(e.data).forEach((t=>{var e=new Date(t.date);a.push(e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)),n.push(t.cash),o.push(t.creditCard),s.push(t.debitCard)})),this.$refs.paymentGraphRef.updateChart(a,n,o,s)},getFiles(t){console.log(t)}}});var M=a(4379),V=a(5252);G.render=o;const j=G;w()(G,"components",{QPage:M.Z,QUploader:V.Z})}}]);