"use strict";(self["webpackChunksplot_frontend"]=self["webpackChunksplot_frontend"]||[]).push([[651],{2651:(t,e,a)=>{a.r(e),a.d(e,{default:()=>I});var o=a(3673);function n(t,e,a,n,s,r){const i=(0,o.up)("SearchDateRange"),l=(0,o.up)("bar-graph"),c=(0,o.up)("occupation-graph"),p=(0,o.up)("payment-graph"),d=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(d,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{onDateChange:t.getChartsData},null,8,["onDateChange"]),(0,o.Wm)(l,{ref:"barGraphRef"},null,512),(0,o.Wm)(c,{ref:"occupationGraphRef"},null,512),(0,o.Wm)(p,{ref:"paymentGraphRef"},null,512)])),_:1})}const s={class:"row q-mb-md justify-center"},r={class:"col-xs-4 col-sm-3 col-md-4 col-lg-3 col-xl-2 q-px-sm q-pb-md"},i={class:"col-xs-4 col-sm-3 col-md-4 col-lg-3 col-xl-2 q-px-sm q-pb-md"},l={class:"col-xs-2 col-sm-1 self-center q-pb-md"},c={class:"row items-center justify-end q-gutter-sm"},p={class:"col-xs-12 col-sm-2 col-md-1 self-center text-center q-pb-md"};function d(t,e,a,n,d,h){const u=(0,o.up)("q-input"),m=(0,o.up)("q-btn"),g=(0,o.up)("q-date"),f=(0,o.up)("q-popup-proxy"),D=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",s,[(0,o._)("div",r,[(0,o.Wm)(u,{label:"Fecha Inicio",outlined:"",dense:"",modelValue:d.startDate,"onUpdate:modelValue":e[0]||(e[0]=t=>d.startDate=t),mask:"##/##/####",onInput:h.onStartDateChange,disable:""},null,8,["modelValue","onInput"])]),(0,o._)("div",i,[(0,o.Wm)(u,{label:"Fecha Fin",outlined:"",dense:"",modelValue:d.endDate,"onUpdate:modelValue":e[1]||(e[1]=t=>d.endDate=t),mask:"##/##/####",onInput:h.onEndDateChange,disable:""},null,8,["modelValue","onInput"])]),(0,o._)("div",l,[(0,o.Wm)(m,{icon:"event",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{ref:"qPopupProxyRangeEmployeeRecordsRef","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:d.rangeDate,"onUpdate:modelValue":[e[2]||(e[2]=t=>d.rangeDate=t),h.updateRangeDate],range:"",mask:"DD/MM/YYYY"},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.wy)((0,o.Wm)(m,{label:"Cerrar",color:"primary",flat:""},null,512),[[D]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1},512)])),_:1})]),(0,o._)("div",p,[(0,o.Wm)(m,{color:"primary",outline:"",label:"Buscar",onClick:h.didTapSearchByRange},null,8,["onClick"])])])])}a(71),a(7280);const h={props:{employees:Array},data(){return{rangeDate:{},endDate:"",startDate:""}},computed:{},methods:{onStartDateChange(t){console.log("onStartDateChange: ",t)},onEndDateChange(t){console.log("onEndDateChange: ",t)},didTapSearchByRange(t){""!==this.startDate&&""!==this.endDate&&this.$emit("date-change",this.rangeDate)},updateRangeDate(t){console.log(t),this.startDate=t.from,this.endDate=t.to,this.rangeDate={from:this.toDate(t.from),to:this.toDate(t.to)},console.log(t,this.rangeDate)},toDate(t){const[e,a,o]=t.split("/");return new Date(o,a-1,e,23,0).getTime()/1e3}}};var u=a(4842),m=a(8240),g=a(3944),f=a(3124),D=a(677),y=a(7518),b=a.n(y);h.render=d;const x=h;function v(t,e,a,n,s,r){const i=(0,o.up)("apexchart");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{height:"350",type:"bar",options:s.chartOptions,series:s.series},null,8,["options","series"])])}b()(h,"components",{QInput:u.Z,QBtn:m.Z,QPopupProxy:g.Z,QDate:f.Z}),b()(h,"directives",{ClosePopup:D.Z});var C=a(515),w=a.n(C),O=a(2585),k=a.n(O);const R={name:"BarGraph",components:{apexchart:k()},data(){return{series:[{name:"Recaudación",data:[]}],chartOptions:{chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},title:{text:"Recaudación"},xaxis:{categories:[]},yaxis:{title:{text:"Ingresos"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" pesos"}}}}}},methods:{updateChart(t,e){this.series=[{data:e}],this.chartOptions=w()(w()({},this.chartOptions),{xaxis:{categories:t}})}}};R.render=v;const q=R;function W(t,e,a,n,s,r){const i=(0,o.up)("apexchart");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{type:"bar",height:"350",options:s.chartOptions,series:s.series},null,8,["options","series"])])}const E={name:"OccupationGraph",components:{apexchart:k()},data(){return{series:[{name:"Autos",data:[]},{name:"Motos",data:[]},{name:"Camionetas",data:[]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{width:2,colors:["transparent"]},title:{text:"Ocupación"},xaxis:{categories:[],labels:{formatter:function(t){return t+"%"}}},yaxis:{title:{text:void 0}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}},legend:{position:"top",horizontalAlign:"left",offsetX:40}}}},methods:{updateChart(t,e,a,o){this.series=[{name:"Autos",data:e},{name:"Motos",data:a},{name:"Camionetas",data:o}],this.chartOptions=w()(w()({},this.chartOptions),{xaxis:{categories:t}})}}};E.render=W;const G=E;function M(t,e,a,n,s,r){const i=(0,o.up)("apexchart");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{type:"bar",height:"350",options:s.chartOptions,series:s.series},null,8,["options","series"])])}const _={name:"PaymentGraph",components:{apexchart:k()},data(){return{series:[{name:"Efectivo",data:[]},{name:"Tarjeta",data:[]},{name:"Debito",data:[]}],chartOptions:{chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{width:2,colors:["transparent"]},title:{text:"Metodos de pago"},xaxis:{categories:[],labels:{formatter:function(t){return t+"%"}}},yaxis:{title:{text:void 0}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}},legend:{position:"top",horizontalAlign:"left",offsetX:40}}}},methods:{updateChart(t,e,a,o){this.series=[{name:"Efectivo",data:e},{name:"Credito",data:a},{name:"Debito",data:o}],this.chartOptions=w()(w()({},this.chartOptions),{xaxis:{categories:t}})}}};_.render=M;const S=_;var V=a(9828);const P=(0,o.aZ)({name:"Stats",components:{SearchDateRange:x,BarGraph:q,OccupationGraph:G,PaymentGraph:S},setup(){return{}},data(){return{}},mounted(){},methods:{async getChartsData(t){console.log("from: ",t.from,"to: ",t.to),this.getMoneyEarn(t),this.getOccupation(t),this.getPaymentMethods(t)},async getMoneyEarn(t){const e=await(0,V.qE)(t.from,t.to);console.log(e);let a=[],o=[];e.data.forEach((t=>{var e=new Date(t.date);a.push(e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)),o.push(t.collected)})),console.log(a,o),this.$refs.barGraphRef.updateChart(a,o)},async getOccupation(t){const e=await(0,V.ZV)(t.from,t.to);console.log(e);let a=[],o=[],n=[],s=[];Object.values(e.data).forEach((t=>{var e=new Date(t.date);a.push(e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)),o.push(t.cars),s.push(t.vans),n.push(t.motorbikes)})),this.$refs.occupationGraphRef.updateChart(a,o,n,s)},async getPaymentMethods(t){const e=await(0,V.xT)(t.from,t.to);console.log(e);let a=[],o=[],n=[],s=[];Object.values(e.data).forEach((t=>{var e=new Date(t.date);a.push(e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)),o.push(t.cash),n.push(t.creditCard),s.push(t.debitCard)})),this.$refs.paymentGraphRef.updateChart(a,o,n,s)},getFiles(t){console.log(t)}}});var Z=a(4379),F=a(5252);P.render=n;const I=P;b()(P,"components",{QPage:Z.Z,QUploader:F.Z})}}]);