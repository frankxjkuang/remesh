var re=Object.defineProperty,ae=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var Y=(e,t,r)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&Y(e,r,t[r]);if(A)for(var r of A(t))j.call(t,r)&&Y(e,r,t[r]);return e},T=(e,t)=>ae(e,oe(t));var K=(e,t)=>{var r={};for(var n in e)P.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&j.call(e,n)&&(r[n]=e[n]);return r};import{j as v,a,r as O,F as J,c as ie}from"./jsx-runtime.a8396eb8.js";import{S as Z,_ as z,a as X,O as _,n as se,o as M,c as ee,i as le,R as U,u as F,b as q,d as x,m as N,e as de,f as ce,g as me}from"./remesh-logger.3c4497cd.js";import{c as H}from"./concat.5465819c.js";import{p as ue}from"./mergeAll.c6f90998.js";import{m as pe}from"./merge.52b1bff1.js";import{s as he,t as ye}from"./takeUntil.e57e0a9c.js";import{L as Ce}from"./list.1de299b3.js";import"./mergeMap.e508a938.js";var te={now:function(){return(te.delegate||performance).now()},delegate:void 0},L={schedule:function(e){var t=requestAnimationFrame,r=cancelAnimationFrame,n=L.delegate;n&&(t=n.requestAnimationFrame,r=n.cancelAnimationFrame);var i=t(function(o){r=void 0,e(o)});return new Z(function(){return r==null?void 0:r(i)})},requestAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=L.delegate;return((r==null?void 0:r.requestAnimationFrame)||requestAnimationFrame).apply(void 0,z([],X(e)))},cancelAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=L.delegate;return((r==null?void 0:r.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,z([],X(e)))},delegate:void 0};function fe(e){return e?ne(e):ge}function ne(e){var t=L.schedule;return new _(function(r){var n=new Z,i=e||te,o=i.now(),c=function(h){var m=i.now();r.next({timestamp:e?m:h,elapsed:m-o}),r.closed||n.add(t(c))};return n.add(t(c)),n})}var ge=ne(),Se=new _(se);function ve(e,t){return t===void 0&&(t=le),e=e!=null?e:xe,M(function(r,n){var i,o=!0;r.subscribe(ee(n,function(c){var h=t(c);(o||!e(i,h))&&(o=!1,i=h,n.next(c))}))})}function xe(e,t){return e===t}function be(){return M(function(e,t){var r,n=!1;e.subscribe(ee(t,function(i){var o=r;r=i,n&&t.next([o,i]),n=!0}))})}function we(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=ue(e);return M(function(n,i){(r?H(e,n,r):H(e,n)).subscribe(i)})}const De=U.domain({name:"CounterDomain",impl:e=>{const t=e.state({name:"CounterState",default:0}),r=e.query({name:"CounterQuery",impl:({get:i})=>i(t())}),n=e.command({name:"IncreCommand",impl:({get:i})=>{const o=i(t());return t().new(o+1)}});return{query:{CountQuery:r},command:{IncreCommand:n}}}}),Qe=()=>{const e=F(),t=q(De()),r=x(t.query.CountQuery());return v("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[a("h2",{children:"Counter"}),a("input",{type:"number",readOnly:!0,value:r}),v("label",{children:[a("button",{onClick:()=>{e(t.command.IncreCommand())},children:"Count "})," "]})]})},Ie=U.domain({name:"TemperatureConverterDomain",impl:e=>{const t=e.state({name:"CelsiusState",default:""}),r=e.query({name:"CelsiusQuery",impl:({get:m})=>m(t())}),n=e.state({name:"FahrenheitState",default:""}),i=e.query({name:"FahrenheitQuery",impl:({get:m})=>m(n())}),o=e.command({name:"ResetBothCommand",impl:({})=>[t().new(""),n().new("")]}),c=e.command({name:"UpdateCelsiusCommand",impl:({},m)=>{if(m==="")return o();const y=parseFloat(m);if(Number.isNaN(y))return t().new(m);const l=y*(9/5)+32;return[t().new(m),n().new(l.toString())]}}),h=e.command({name:"UpdateFahrenheitCommand",impl:({},m)=>{if(m==="")return o();const y=parseFloat(m);if(Number.isNaN(y))return n().new(m);const l=(y-32)*(5/9);return[t().new(l.toString()),n().new(m)]}});return{query:{CelsiusQuery:r,FahrenheitQuery:i},command:{UpdateCelsiusCommand:c,UpdateFahrenheitCommand:h}}}}),qe=()=>{const e=F(),t=q(Ie()),r=x(t.query.CelsiusQuery()),n=x(t.query.FahrenheitQuery());return v("div",{style:{border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[a("h2",{children:"Temperature Converter"}),v("div",{children:[a("input",{type:"text",value:r,onChange:c=>{e(t.command.UpdateCelsiusCommand(c.target.value))}}),a("label",{htmlFor:"",children:"Celsius"}),"=",a("input",{type:"text",value:n,onChange:c=>{e(t.command.UpdateFahrenheitCommand(c.target.value))}}),a("label",{htmlFor:"",children:"Fahrenheit"})]})]})},W=e=>{const t=e.split(".");if(t.length!==3)return null;const r=new Date(`${t[2]}.${t[1]}.${t[0]}`);return r.toString()==="Invalid Date"?null:r},V=e=>{const t=e.toLocaleDateString().split("/");return`${t[2]}.${t[1]}.${t[0]}`},Ue=(e,t)=>e.getFullYear()!==t.getFullYear()?e.getFullYear()-t.getFullYear():e.getMonth()!==t.getMonth()?e.getMonth()-t.getMonth():e.getDate()-t.getDate(),Fe=U.domain({name:"FlightBookerDomain",impl:e=>{const t=e.state({name:"OptionState",default:"one-way"}),r=e.query({name:"OptionQuery",impl:({get:s})=>s(t())}),n=e.state({name:"StartDateInputState",default:V(new Date)}),i=e.query({name:"StartDateInputQuery",impl:({get:s})=>s(n())}),o=e.state({name:"EndDateInputState",default:V(new Date)}),c=e.query({name:"EndDateInputQuery",impl:({get:s})=>s(o())}),h=e.query({name:"StartDateQuery",impl:({get:s})=>{const b=s(n());return W(b)}}),m=e.query({name:"EndDateQuery",impl:({get:s})=>{const b=s(o());return W(b)}}),y=e.command({name:"UpdateOptionCommand",impl:({},s)=>t().new(s)}),l=e.command({name:"UpdateStartDateCommand",impl:({},s)=>n().new(s)}),f=e.command({name:"UpdateEndDateCommand",impl:({},s)=>o().new(s)});return{query:{StatusQuery:e.query({name:"StatusQuery",impl:({get:s})=>{const b=s(t()),u=s(h()),d=s(m()),g=u?"valid":"invalid",w=b==="return"?d?"valid":"invalid":"disabled",p=b==="one-way"?u?"enabled":"disabled":!!u&&!!d&&Ue(u,d)<=0?"enabled":"disabled";return{startDate:g,endDate:w,bookButton:p}}}),OptionQuery:r,StartDateQuery:h,EndDateQuery:m,StartDateInputQuery:i,EndDateInputQuery:c},command:{UpdateOptionCommand:y,UpdateStartDateCommand:l,UpdateEndDateCommand:f}}}}),Re=()=>{const e=F(),t=q(Fe()),r=x(t.query.OptionQuery()),n=x(t.query.StatusQuery()),i=x(t.query.StartDateInputQuery()),o=x(t.query.EndDateInputQuery()),c=l=>{e(t.command.UpdateOptionCommand(l.target.value))},h=l=>{e(t.command.UpdateStartDateCommand(l.target.value))},m=l=>{e(t.command.UpdateEndDateCommand(l.target.value))},y=()=>{n.bookButton==="enabled"&&alert(r==="one-way"?`You have booked a one-way flight on ${i}`:`You have booked return flight from ${i} to ${o}`)};return v("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[a("h2",{children:"Flight Booker"}),a("div",{children:v("select",{value:r,onChange:c,children:[a("option",{value:"one-way",children:"One-way flight"}),a("option",{value:"return",children:"Return flight"})]})}),a("div",{children:a("input",{type:"text",style:{backgroundColor:n.startDate==="invalid"?"red":""},value:i,onChange:h})}),a("div",{children:a("input",{type:"text",style:{backgroundColor:n.endDate==="invalid"?"red":""},disabled:n.endDate==="disabled",value:o,onChange:m})}),a("div",{children:a("button",{disabled:n.bookButton==="disabled",onClick:y,children:"Book"})})]})},Ee=U.domain({name:"TimerDomain",inspectable:!1,impl:e=>{const t=e.state({name:"DurationState",default:15e3}),r=e.query({name:"DurationQuery",impl:({get:l})=>l(t())}),n=e.state({name:"ElapsedState",default:0}),i=e.query({name:"ElapsedQuery",impl:({get:l})=>l(n())}),o=e.event({name:"StartEvent"}),c=e.event({name:"StopEvent"}),h=e.command({name:"UpdateElapsedCommand",impl:({get:l},f)=>{const C=l(t()),s=l(n());return s>C?c():n().new(s+f)}}),m=e.command({name:"UpdateDurationCommand",impl:({get:l},f)=>{const C=l(n());return f>C?[t().new(f),o()]:t().new(f)}}),y=e.command({name:"ResetElapsedCommand",impl:({})=>[n().new(0),o()]});return e.effect({name:"UpdateElapsedByAnimationEffect",impl:({fromEvent:l})=>{const f=l(o).pipe(we(o()),N(()=>1)),C=l(c).pipe(N(()=>0));return pe(f,C).pipe(ve(),he(s=>s===0?Se:fe().pipe(be(),N(([b,u])=>h(u.elapsed-b.elapsed)),ye(l(c)))))}}),{query:{DurationQuery:r,ElapsedQuery:i},command:{ResetElapsedCommand:y,UpdateDurationCommand:m}}}}),ke=()=>{const e=F(),t=q(Ee()),r=x(t.query.ElapsedQuery()),n=x(t.query.DurationQuery()),i=c=>{const h=parseInt(c.target.value,10);isNaN(h)||e(t.command.UpdateDurationCommand(h))},o=()=>{e(t.command.ResetElapsedCommand())};return v("div",{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[a("h2",{children:"Timer"}),v("div",{style:{display:"flex"},children:[a("label",{style:{marginRight:10,whiteSpace:"nowrap"},children:"Elapsed Timer:"}),a("div",{style:{width:"100%"},children:a("span",{style:{display:"inline-block",height:10,background:"green",width:`${Math.min(r/n,1)*100}%`,verticalAlign:"middle",borderRadius:5}})})]}),v("div",{children:[r>n?(n/1e3).toFixed(1):(r/1e3).toFixed(1),"s"]}),v("div",{style:{display:"flex"},children:[a("label",{style:{width:100,marginRight:10},children:"Duration:"}),a("input",{style:{width:"100%"},type:"range",min:0,max:3e4,value:n,onChange:i})]}),a("div",{children:a("button",{style:{width:"100% "},onClick:o,children:"Reset Timer"})})]})},Ae=U.domain({name:"CRUDDomain",impl:e=>{let t=0;const r=Ce(e,{name:"NameListModule",key:d=>d.id}),n=e.state({name:"FilterPrefixState",default:""}),i=e.query({name:"FilterPrefixQuery",impl:({get:d})=>d(n())}),o=e.command({name:"UpdateFilterPrefixCommand",impl:({},d)=>n().new(d)}),c=e.state({name:"CreatedState",default:{name:"",surname:""}}),h=e.query({name:"CreatedQuery",impl:({get:d})=>d(c())}),m=e.command({name:"UpdateCreatedCommand",impl:({get:d},g)=>{const w=d(c());return c().new(I(I({},w),g))}}),y=e.state({name:"SelectedState",default:null}),l=e.query({name:"SelectedQuery",impl:({get:d})=>d(y())}),f=e.command({name:"SelectItemCommand",impl:({get:d},g)=>{const w=d(y());if(g===null)return w===null?null:y().new(null);if(w&&w.id===g)return y().new(null);const p=d(r.query.ItemQuery(g));return y().new(p)}}),C=e.command({name:"UpdateSelectedNameCommand",impl:({get:d},g)=>{const w=d(y());return w===null?null:y().new(I(I({},w),g))}}),s=e.query({name:"FilteredListQuery",impl:({get:d})=>{const g=d(n()),w=d(r.query.ItemListQuery());return g===""?w:w.filter(p=>p.surname.startsWith(g))}}),b=e.command({name:"SyncSelectedCommand",impl:({get:d})=>{const g=d(y());return g===null?null:r.command.UpdateItemCommand(g)}}),u=e.command({name:"CreateNameItemCommand",impl:({get:d})=>{const g=d(c()),w=I({id:`${t++}`},g);return[r.command.AddItemCommand(w),m({name:"",surname:""})]}});return{query:T(I({},r.query),{FilteredListQuery:s,SelectedQuery:l,FilterPrefixQuery:i,CreatedQuery:h}),command:T(I({},r.command),{UpdateFilterPrefixCommand:o,SelectItemCommand:f,UpdateCreatedCommand:m,UpdateSelectedNameCommand:C,CreateNameItemCommand:u,SyncSelectedCommand:b})}}}),B=e=>{const i=e,{onOuterClick:t}=i,r=K(i,["onOuterClick"]),n=O.exports.useRef(null);return O.exports.useEffect(()=>{const o=c=>{var m;if(!((m=c.target)!=null&&m.parentElement))return;!!(n.current&&!n.current.contains(c.target))&&(t==null||t(c))};return document.addEventListener("click",o,!1),()=>{document.removeEventListener("click",o,!1)}},[]),a("div",I({ref:n},r))},Le=()=>{const e=F(),t=q(Ae()),r=x(t.query.FilteredListQuery()),n=x(t.query.FilterPrefixQuery()),i=x(t.query.CreatedQuery()),o=x(t.query.SelectedQuery()),c=s=>{e(t.command.UpdateFilterPrefixCommand(s.target.value))},h=s=>{e(t.command.SelectItemCommand(s))},m=s=>{e(o?t.command.UpdateSelectedNameCommand({name:s.target.value}):t.command.UpdateCreatedCommand({name:s.target.value}))},y=s=>{e(o?t.command.UpdateSelectedNameCommand({surname:s.target.value}):t.command.UpdateCreatedCommand({surname:s.target.value}))},l=()=>{o===null&&e(t.command.CreateNameItemCommand())},f=()=>{o&&e(t.command.SyncSelectedCommand())},C=()=>{o&&e([t.command.DeleteItemCommand(o.id),t.command.SelectItemCommand(null)])};return v(B,{style:{width:400,border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},onOuterClick:()=>{h(null)},children:[a("h2",{children:"CRUD"}),v("div",{children:[a("label",{htmlFor:"",children:"Filter prefix"}),a("input",{type:"text",value:n,onChange:c})]}),v("div",{style:{display:"flex"},children:[a("div",{style:{width:"50%",height:100,border:"1px solid #eaeaea",overflow:"scroll"},children:r.map(s=>{const b=s.name+", "+s.surname;return a("div",{style:{background:(o==null?void 0:o.id)===s.id?"blue":"",color:(o==null?void 0:o.id)===s.id?"white":""},onClick:()=>{h(s.id)},children:b},s.id)})}),v("div",{style:{width:"50%",padding:10},children:[v("div",{children:[a("label",{children:"Name:"}),a("input",{type:"text",value:o?o.name:i.name,onChange:m})]}),v("div",{children:[a("label",{children:"Surname:"}),a("input",{type:"text",value:o?o.surname:i.surname,onChange:y})]})]}),v("div",{children:[a("button",{disabled:o!==null,style:{marginRight:10},onClick:l,children:"Create"}),a("button",{disabled:o===null,style:{marginRight:10},onClick:f,children:"Update"}),a("button",{disabled:o===null,style:{marginRight:10},onClick:C,children:"Delete"})]})]})]})},Te=U.domain({name:"CircleDrawerDomain",impl:e=>{const t=e.state({name:"HistoryState",default:{items:[],currentIndex:-1}}),r=e.query({name:"HistoryQuery",impl:({get:p})=>p(t())}),n=e.command({name:"RecordHistoryStateCommand",impl:({get:p},S)=>{const Q=p(t()),D=Q.items.slice(0,Q.currentIndex+1);if(S.action==="adjust-circle"){const k=D[D.length-1];k.action==="adjust-circle"&&k.index===S.index&&D.pop()}const R=[...D,S],E=R.length-1;return t().new({items:R,currentIndex:E})}}),i=e.state({name:"DrawState",default:{circles:[]}}),o=e.query({name:"DrawQuery",impl:({get:p})=>p(i())}),c=e.command({name:"UndoCommand",impl:({get:p})=>{const S=p(t()),Q=p(m()),D=S.currentIndex-1;return!Q||D<0?[i().new({circles:[]}),t().new({items:S.items,currentIndex:-1})]:[i().new(S.items[D].state),t().new({items:S.items,currentIndex:D})]}}),h=e.command({name:"RedoCommand",impl:({get:p})=>{const S=p(t());if(!p(y()))return[];const D=S.currentIndex+1;return[i().new(S.items[D].state),t().new({items:S.items,currentIndex:D})]}}),m=e.query({name:"CanUndoQuery",impl:({get:p})=>p(t()).currentIndex>=0}),y=e.query({name:"CanRedoQuery",impl:({get:p})=>{const S=p(t());return S.currentIndex<S.items.length-1}}),l=e.state({name:"SelectedIndexState",default:-1}),f=e.query({name:"SelectedIndexQuery",impl:({get:p})=>p(l())}),C=e.command({name:"SetSelectedIndexCommand",impl:({},p)=>l().new(p)}),s=e.query({name:"SelectedCircleInfoQuery",impl:({get:p})=>{const S=p(l()),Q=p(i()).circles;return S===-1?null:{index:S,circle:Q[S]}}}),b=e.command({name:"DrawCommand",impl:({get:p},S)=>{const D={circles:[...p(i()).circles,{position:S.position,diameter:S.diameter}]};return[i().new(D),n({action:"add-circle",state:D})]}}),u=e.command({name:"AdjustCommand",impl:({get:p},S)=>{const R={circles:p(i()).circles.map((E,k)=>k===S.index?{position:E.position,diameter:S.diameter}:E)};return[i().new(R),n({action:"adjust-circle",index:S.index,state:R})]}}),d=e.state({name:"TooltipsState",default:{type:"default"}}),g=e.query({name:"TooltipsQuery",impl:({get:p})=>p(d())}),w=e.command({name:"UpdateTooltipsCommand",impl:({},p)=>d().new(p)});return{query:{HistoryQuery:r,DrawQuery:o,TooltipsQuery:g,SelectedIndexQuery:f,SelectedCircleInfoQuery:s,CanUndoQuery:m,CanRedoQuery:y},command:{DrawCommand:b,AdjustCommand:u,UpdateTooltipsCommand:w,UndoCommand:c,RedoCommand:h,SetSelectedIndexCommand:C}}}}),Ne=(e,t)=>{const{x:r,y:n}=e,{diameter:i,position:o}=t,{x:c,y:h}=o,m=i/2,y=r-c,l=n-h;return y*y+l*l<m*m},Oe=()=>{var b;const e=F(),t=q(Te()),r=x(t.query.DrawQuery()),n=x(t.query.TooltipsQuery()),i=x(t.query.SelectedCircleInfoQuery()),o=x(t.query.CanUndoQuery()),c=x(t.query.CanRedoQuery()),h=u=>{const d=r.circles.find(w=>Ne(u,w));return d?{index:r.circles.indexOf(d),circle:d}:null},m=u=>{u.preventDefault();const d={x:u.pageX,y:u.pageY},g=h(d);g&&e([t.command.SetSelectedIndexCommand(g.index),t.command.UpdateTooltipsCommand({type:"show-tips",index:g.index,circle:g.circle,pageX:u.pageX,pageY:u.pageY})])},y=u=>{if(n.type!=="default")return;const d={x:u.pageX,y:u.pageY};h(d)||e(t.command.DrawCommand({position:d,diameter:30}))},l=u=>{if(n.type!=="default")return;const d={x:u.pageX,y:u.pageY},g=h(d);e(g?t.command.SetSelectedIndexCommand(g.index):t.command.SetSelectedIndexCommand(-1))},f=()=>{n.type==="show-tips"&&e(t.command.UpdateTooltipsCommand({type:"open-slider",index:n.index,circle:n.circle,pageX:n.pageX,pageY:n.pageY}))},C=()=>{e(t.command.UpdateTooltipsCommand({type:"default"}))},s=u=>{const d=parseInt(u.target.value,10);i&&!isNaN(d)&&e(t.command.AdjustCommand({index:i.index,diameter:d}))};return v("div",{style:{border:"1px solid #eaeaea",boxSizing:"border-box",padding:10},children:[a("h2",{children:"Circle Drawer"}),v("div",{style:{width:400,textAlign:"center",padding:10},children:[a("button",{onClick:()=>e(t.command.UndoCommand()),style:{margin:"0 10px"},disabled:!o,children:"Undo"}),a("button",{onClick:()=>e(t.command.RedoCommand()),style:{margin:"0 10px"},disabled:!c,children:"Redo"})]}),a("div",{style:{width:400,height:400,border:"1px solid #eaeaea",boxSizing:"border-box",overflow:"hidden"},onClick:y,onMouseMove:l,children:r.circles.map((u,d)=>a("div",{style:{position:"absolute",left:u.position.x-u.diameter/2,top:u.position.y-u.diameter/2,width:u.diameter,height:u.diameter,borderRadius:u.diameter/2,border:"1px solid #666",backgroundColor:(i==null?void 0:i.index)===d?"#eaeaea":""},onContextMenu:m},u.position.x+"-"+u.position.y+"-"+u.diameter))}),n.type==="show-tips"&&a(B,{style:{position:"absolute",left:n.pageX,top:n.pageY,zIndex:100,background:"#fff",border:"1px solid #666",padding:10},onOuterClick:C,onClick:f,children:"Adjust Diameter"},"show-tips"),n.type==="open-slider"&&v(B,{style:{position:"absolute",left:n.pageX,top:n.pageY,background:"#fff",border:"1px solid #666",zIndex:100,padding:10},onOuterClick:C,children:[a("p",{children:"Adjust Diameter"}),a("div",{children:a("input",{type:"range",value:(b=i==null?void 0:i.circle.diameter)!=null?b:"",min:1,max:150,onChange:s})})]},"open-slider")]})},$=U.domain({name:"CellsDomain",inspectable:!1,impl:e=>{const t=e.state({name:"RowKeyListState",default:[0,1,2,3,4,5,6,7,8,9].map(String)}),r=e.query({name:"RowKeyListQuery",impl:({get:l})=>l(t())}),n=e.state({name:"ColumnKeyListState",default:["A","B","C","D","E","F","G","H","I","J"]}),i=e.query({name:"ColumnKeyListQuery",impl:({get:l})=>l(n())}),o=e.state({name:"CellState",default:{content:{type:"text",text:""},isEditing:!1}}),c=e.query({name:"CellQuery",impl:({get:l},f)=>{const C=l(o(f));if(C.content.type==="text")return{type:"text",isEditing:C.isEditing,content:C.content.text,displayContent:C.content.text};if(C.content.type==="formula"){const s=Be(C.content.formula),b=u=>Number(l(c(u)).displayContent);return{type:"formula",isEditing:C.isEditing,content:C.content.formula,displayContent:s(b)}}throw new Error("Unknown cell type")}}),h=e.command({name:"SelectCellCommand",impl:({get:l},f)=>{const C=l(o(f));return o(f).new({content:C.content,isEditing:!0})}}),m=e.command({name:"UnselectCellCommand",impl:({get:l},f)=>{const C=l(o(f));return o(f).new({content:C.content,isEditing:!1})}}),y=e.command({name:"SetCellContentCommand",impl:({get:l},{key:f,input:C})=>{const s=l(o(f));return C.startsWith("=")?o(f).new({content:{type:"formula",formula:C},isEditing:s.isEditing}):o(f).new({content:{type:"text",text:C},isEditing:s.isEditing})}});return{query:{CellQuery:c,ColumnKeyListQuery:i,RowKeyListQuery:r},command:{SelectCellCommand:h,UnselectCellCommand:m,SetCellContentCommand:y}}}}),Be=e=>t=>{try{const r=e.slice(1).replace(/\w\d+/g,i=>`get('${i}')`);return new Function("get",`return (${r}).toString()`)(t)}catch{return"-"}},Me=()=>{const e=q($()),t=x(e.query.ColumnKeyListQuery()),r=x(e.query.RowKeyListQuery());return v("div",{children:[a("h2",{children:"Cells"}),v("table",{style:{borderCollapse:"collapse",border:"1px solid #bbb",textAlign:"center"},children:[a("thead",{children:v("tr",{style:{backgroundColor:"#f6f6f6"},children:[a("th",{style:{width:30,display:"block"}}),t.map(n=>a("th",{style:{maxWidth:80,border:"1px solid #bbb"},children:n},n))]})}),a("tbody",{children:r.map(n=>a("tr",{children:a($e,{rowKey:n,columnKeyList:t})},n))})]})]})},$e=({columnKeyList:e,rowKey:t})=>{const r=F(),n=q($());return v(J,{children:[a("td",{style:{width:30,border:"1px solid #bbb",backgroundColor:"#f6f6f6"},children:t}),e.map(i=>{const o=`${i}${t}`;return a("td",{style:{maxWidth:80,minWidth:80,border:"1px solid #bbb",overflow:"hidden"},onClick:c=>{c.target instanceof HTMLInputElement||r(n.command.SelectCellCommand(o))},children:a(Ye,{cellKey:o})},o)})]})},Ye=({cellKey:e})=>{const t=F(),r=q($()),n=x(r.query.CellQuery(e)),i=o=>{t(r.command.SetCellContentCommand({key:e,input:o.target.value}))};return v(J,{children:[n.isEditing&&a("input",{style:{width:"100%",height:"100%",backgroundColor:"transparent",boxSizing:"border-box",textAlign:"center"},value:n.content,onChange:i,onBlur:()=>{n.isEditing&&t(r.command.UnselectCellCommand(e))},autoFocus:!0}),!n.isEditing&&n.displayContent]})},Pe=()=>v("div",{children:[a("h1",{children:"7GUIs in React/Remesh/TypeScript"}),a("p",{children:"This is a live version of an implementation (source) of 7GUIs with React, TypeScript and Remesh."}),a("hr",{}),a(Qe,{}),a("hr",{}),a(qe,{}),a("hr",{}),a(Re,{}),a("hr",{}),a(ke,{}),a("hr",{}),a(Le,{}),a("hr",{}),a(Oe,{}),a("hr",{}),a(Me,{})]}),G=document.getElementById("root");if(G){const e=ie(G),t=U.store({inspectors:[de(),ce()]});e.render(a(O.exports.StrictMode,{children:a(me,{store:t,children:a(Pe,{})})}))}
//# sourceMappingURL=index.256cb081.js.map
