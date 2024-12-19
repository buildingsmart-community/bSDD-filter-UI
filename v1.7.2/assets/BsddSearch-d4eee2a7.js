import{aG as P,aH as C,b3 as X,b9 as ue,ba as fe,bb as de,bc as ee,r as u,j as n,az as W,bd as he,aY as pe,aZ as k,ag as z,be as me,a3 as _,aU as ge,W as te,P as ne,u as L,bf as be,bg as xe,b as H,bh as ye,bi as se,bj as ve,B as ae,at as F,ay as Ce,bk as Ie,bl as Se,aE as oe,ah as we,bm as je,av as R,au as De,bn as le,bo as Ee,bp as Ve,t as Y,bq as Me,br as ie,bs as Oe,bt as Ae,aO as re,b0 as A,aB as Te,aL as ce,bu as ke,aD as Le,bv as Re,bw as Be,bx as G,aF as Pe,aJ as Ne,by as He,bz as ze,bA as $e,bB as Ue,bC as Fe,b1 as K,aA as Ge,S as We}from"./defaultSettings-b141d3fd.js";const _e={test:"https://test.bsdd.buildingsmart.org",production:"https://api.bsdd.buildingsmart.org"},Ye="production";function Ke({bsddSearchSave:t}){const{t:e}=P();C(X);const r=C(ue),s=C(fe),l=C(de),i=C(ee);function a(f,x){return console.log("Creating bsddSearchSave data",i),i?{ifcData:he(f,i),settings:s,propertyIsInstanceMap:x}:{ifcData:[],settings:s,propertyIsInstanceMap:x}}const h=u.useCallback(f=>{console.log("Sending bsddSearchSave data back to host",f),t(a(f,l)).then(x=>{console.log("Sent iFC data back to host",x)})},[t,l]),c=()=>{console.log(r),h(r)};return n.jsx(W,{color:"gray",fullWidth:!0,onClick:c,variant:"filled",children:e("apply")})}const q=25,qe=25;function J({height:t,options:e,label:r,value:s,setValue:l,placeholder:i="Search values",disabled:a}){const[h,c]=u.useState(""),[f,x]=u.useState(e.slice(0,q)),d=u.useRef(null),o=pe({onDropdownClose:()=>{o.resetSelectedOption(),o.focusTarget&&o.focusTarget()},onDropdownOpen:()=>{o.focusSearchInput&&o.focusSearchInput()}});u.useEffect(()=>{c(s?.label||"")},[s]),u.useEffect(()=>{const m=s===null?e.filter(I=>I?.label.toLowerCase().includes(h.toLowerCase().trim())||I?.value.toString().toLowerCase().includes(h.toLowerCase().trim())):e;x(m.slice(0,q))},[e,h,s]);const y=m=>{const{scrollTop:I,scrollHeight:M,clientHeight:w}=m.currentTarget,S=5;M-I<=w+S&&x(E=>{const V=E.length,b=e.filter(g=>g?.label.toLowerCase().includes(h.toLowerCase().trim())).slice(V,V+qe);return[...E,...b]})},p=f.map(m=>n.jsx(k.Option,{value:m.value,active:s?.value===m.value,children:n.jsxs(z,{gap:"sm",children:[s?.value===m.value?n.jsx(me,{size:12}):null,n.jsx(_,{fz:"sm",opacity:a?.6:1,children:m.label}),n.jsxs(_,{fz:"xs",opacity:.6,children:["(",m.value,")"]})]})},m.value));return n.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:n.jsxs(k,{store:o,onOptionSubmit:m=>{if(!a){const I=e.find(w=>w.value===m),M=I&&s?.value!==I.value?I:null;l(M),o.closeDropdown()}},disabled:a,children:[n.jsx(k.Target,{children:n.jsx(ge,{rightSection:!a&&n.jsx(te,{size:"sm",onMouseDown:m=>{m.preventDefault()},onClick:()=>{c(""),l(null)},"aria-label":"Clear value"}),label:r,value:s?`${s.label} (${s.value})`:h,onChange:m=>{a||(l(null),o.updateSelectedOptionIndex(),c(m.currentTarget.value))},onClick:()=>{a||o.openDropdown()},onBlur:()=>o.closeDropdown(),placeholder:a?"":i,disabled:a})}),t<80?n.jsx(k.Dropdown,{style:{maxHeight:"20em",overflowY:"auto"},ref:d,onScroll:y,children:n.jsx(k.Options,{children:p.length>0?p:n.jsx(k.Empty,{children:"Nothing found..."})})}):n.jsx(ne,{withBorder:!0,my:"0.2em",style:{flexGrow:1,overflow:"auto",backgroundColor:a?"var(--mantine-color-gray-0)":"transparent",color:a?"var(--mantine-color-gray-6)":"inherit",pointerEvents:a?"none":"auto"},ref:d,onScroll:y,children:n.jsx(k.Options,{children:p.length>0?p:n.jsx(k.Empty,{children:"Nothing found..."})})})]})})}const Je=(t,e,r)=>{if(!e||!e.value)return null;const s=r[t];return s?{type:"IfcClassificationReference",name:e.label,location:e.uri,identification:e.value,referencedSource:{type:"IfcClassification",name:s.name,location:s.uri,edition:s.version,editionDate:s.releaseDate}}:null},Ze=(t,e,r)=>{const s=Array.from(t.entries()).map(([l,i])=>Je(l,i,e)).filter(l=>l!==null);s.length>0&&r(Ie(s))};function Qe({height:t,handleMouseDown:e}){const r=L(),{t:s}=P(),[l,i]=u.useState(new Map),[a,h]=u.useState(new Map),c=C(be),f=C(xe),x=H(X),d=H(ye),o=H(se),y=H(ve);return u.useEffect(()=>{(async()=>{const I=Array.from(c.entries()).map(async([D,E])=>{if(o&&D===y){const{code:v,name:O,uri:T}=o;return[D,[{value:v,label:O,uri:T}]]}let V=[];const b=d[D],g=o?.classRelations?.map(v=>v.relatedClassUri),j=b?.filter(v=>g?.includes(v.uri));if(j&&j.length>0)V=j.map(v=>({value:v.code,label:v.name,uri:v.uri}));else try{V=(await r(Se(D)).unwrap())?.map(O=>({value:O.code,label:O.name||"",uri:O.uri}))??[]}catch(v){console.error("Failed to fetch dictionary classes for",D,v),V=[]}return[D,V]}),M=await Promise.all(I),w=new Map(M);i(w);const S=new Map;w.forEach((D,E)=>{if(D.length===1)S.set(E,D[0]);else if(E in f){const V=f[E];if(V.length===1){const b=V[0];if(D.some(j=>j.value===b.identification)){const j={label:b.name||"",value:b.identification||"",uri:b.location||""};S.set(E,j)}}}}),h(S)})()},[c,d,r,f,o,y]),u.useEffect(()=>{Ze(a,x,r)},[x,r,a]),n.jsxs(ne,{style:{height:`${t}px`,position:"relative"},children:[Array.from(c.entries()).map(([p,m])=>{const I=p===y,M=p===o?.dictionaryUri;return I?n.jsx(J,{height:t,label:m.name,options:l.get(p)||[],value:a.get(p)||null,setValue:w=>{const S=new Map(a);S.set(p,w),h(S)},placeholder:s("classifications.searchClassesPlaceholder"),disabled:l.get(p)?.length===1},p):M?null:n.jsx(J,{height:t,label:m.name,options:l.get(p)||[],value:a.get(p)||null,setValue:w=>{const S=new Map(a);S.set(p,w),h(S)},placeholder:s("classifications.searchClassesPlaceholder"),disabled:l.get(p)?.length===1},p)}),n.jsx(ae,{onMouseDown:e,style:{marginTop:"4px"},children:n.jsx(F,{label:s("classifications.dragResize"),withArrow:!0,children:n.jsx(W,{fullWidth:!0,variant:"subtle",size:"sm",color:"gray","aria-label":s("classifications.dragResize"),children:n.jsx(Ce,{})})})})]})}function Xe(t,e){return t==null||e==null?null:t.toLowerCase()!==e.toLowerCase()?`(${e})`:null}function et({label:t,description:e,value:r,setValue:s,disabled:l,inputContainer:i}){const{t:a}=P(),[h,c]=u.useState(!1),[f,x]=u.useState(!0),d=()=>a(f?"checkbox.indeterminate":h?"checkbox.true":"checkbox.false"),o=p=>{p.target.indeterminate=!1,s(p.target.checked)};u.useEffect(()=>{r===!0?(c(!0),x(!1)):r===!1?(c(!1),x(!1)):r===void 0&&(c(!1),x(!0))},[r]);const y=n.jsx(oe,{description:d(),checked:h,indeterminate:f,type:"checkbox",onChange:p=>o(p),disabled:l});return n.jsx(we.Wrapper,{label:t,description:e,children:i?i(y):y})}const tt=(t,e,r,s)=>t.map(l=>{if(l.name===e){const i=l.hasProperties.map(a=>a.name===r?{...a,...s}:a);return{...l,hasProperties:i}}return l}),nt=({propertySet:t,property:e,propertyNaturalLanguageName:r,isInstance:s,inputContainer:l})=>{const i=L(),a=C(je),h=r?.trim()?r:e.name,c=Xe(h,e.name),f=e.type==="IfcPropertySingleValue"?e.nominalValue?.value||void 0:e.type==="IfcPropertyEnumeratedValue"&&e.enumerationValues?.[0]?.value||void 0,x=o=>{if(a&&t.name)if(t.name!=="Attributes"){let y;"nominalValue"in e?y={nominalValue:{...e.nominalValue,value:o}}:"enumerationValues"in e?y={enumerationValues:[{value:o}]}:y={value:o};const p=tt(a,t.name,e.name,y);i(le(Object.values(p)))}else e.name==="ObjectType"?i(Ee(o)):e.name==="Description"&&i(Ve(o))},d=o=>{x(o)};switch(e.type){case"IfcPropertySingleValue":return e.nominalValue?.type==="IfcBoolean"?n.jsx(et,{label:h,description:c,disabled:s,inputContainer:l,value:e.nominalValue?.value??!1,setValue:o=>d(o)}):n.jsx(R,{label:h,description:c,placeholder:e.nominalValue?.value??"",value:e.nominalValue?.value??"",disabled:s,inputContainer:l,onChange:o=>d(o.target.value),onBlur:o=>x(o.target.value)});case"IfcPropertyEnumeratedValue":{const o=e.enumerationValues?.[0]?.value??"",y=e.enumerationReference?.enumerationValues||[],p=y.length===1;return n.jsx(De,{label:h,description:c,value:o,inputContainer:l,disabled:s||p,clearable:!p,onChange:m=>d(m),data:y.map(m=>({value:m.value,label:m.value}))})}default:return n.jsx(R,{placeholder:e.name,defaultValue:f,disabled:s,inputContainer:l,onChange:o=>d(o.target.value),onBlur:o=>x(o.target.value)})}},st=["Name","Description","ObjectType"],at=(t,e,r)=>{if(e==="Attributes"&&!st.includes(r))return!0;const s=`${e}/${r}`;return t[s]||t[r]||!1};function ot({propertySet:t,property:e,propertyNaturalLanguageName:r}){const s=L(),l=C(d=>d.ifcData.propertyIsInstanceMap),i=C(d=>d.ifcData.savedPropertyIsInstanceMap),a=t.name!=="Attributes",h=`${t.name}/${e.name}`,c=i.hasOwnProperty(h)||i.hasOwnProperty(e.name),f=at(l,t.name||"",e.name),x=d=>a&&f?n.jsx(F,{label:Y("bsddSearch.property.tooltipEditInstance"),withArrow:!0,children:d}):d;return n.jsxs(z,{children:[n.jsx("div",{style:{flex:1},children:n.jsx(nt,{propertySet:t,property:e,propertyNaturalLanguageName:r,isInstance:f,inputContainer:x})}),a&&n.jsx(F,{label:Y("bsddSearch.property.setAsInstanceCheckboxTooltip"),withArrow:!0,children:n.jsx(oe,{style:{marginTop:"2rem"},disabled:c,checked:f,onChange:d=>{c||s(Me({propertyName:h,value:d.currentTarget.checked}))}})})]})}const lt={Boolean:"IfcBoolean",Character:"IfcText",Integer:"IfcInteger",Real:"IfcReal",String:"IfcText",Time:"IfcDateTime"};function B(t,e){const r=t&&lt[t]||"default";let s;return t==="Boolean"&&typeof e=="string"?e.toUpperCase()==="TRUE"?s=!0:e.toUpperCase()==="FALSE"?s=!1:s=void 0:s=e,{type:r,value:s}}function it(t,e,r){let s;if(t&&t.isDefinedBy){let l=t.isDefinedBy.find(i=>i.name===e);if(l&&(s=l.hasProperties.find(i=>i.name===r)),s)return s;if(l=t.isDefinedBy.find(i=>i.name===""),l)return l.hasProperties.find(i=>i.name===r)}return s}function rt(t,e,r,s){const i=it(e,r,s)?.nominalValue?.value??null;return B(t,i)}function ct(t,e,r,s){const l=t.allowedValues?.map(a=>B(t.dataType,a.value))||[],i={type:"IfcPropertyEnumeratedValue",name:e,enumerationReference:{type:"IfcPropertyEnumeration",name:e,enumerationValues:l}};return t.propertyUri&&(i.specification=t.propertyUri),t.allowedValues&&t.allowedValues.length===1?i.enumerationValues=[B(t.dataType,t.allowedValues[0].value)]:i.enumerationValues=t.predefinedValue?[B(t.dataType,t.predefinedValue)]:null,i}function ut(t,e,r,s){const l={type:"IfcPropertySingleValue",name:e,specification:t.propertyUri||""},i=t.predefinedValue?B(t.dataType,t.predefinedValue):rt(t.dataType,s,r,e);return i!==null&&(l.nominalValue=i),l}function ft(t,e,r){const{propertyCode:s}=t,l=s||"unknown",i=t.allowedValues?ct(t,l):ut(t,l,e,r);return i.specification=t.propertyUri||"",i}function dt({mainDictionaryClassification:t,recursiveMode:e}){const r=L(),s=C(ie),l=C(Oe),i=C(Ae),a=C(re),[h,c]=u.useState({});return u.useEffect(()=>{if(!t)return;const f={};[t].forEach(d=>{d.classProperties?.forEach(o=>{if(!o||!o.propertySet)return;const y=o.propertySet||d.name;f[y]||(f[y]={type:"IfcPropertySet",name:y,hasProperties:[]}),s&&f[y].hasProperties.push(ft(o,y,s))})}),r(le(Object.values(f)))},[r,s,t]),u.useEffect(()=>{if(!t)return;const f={};[t].forEach(d=>{d.classProperties?.forEach(o=>{o&&o.propertyUri&&(a&&i&&i[a]&&i[a][o.propertyUri]?f[o.propertyUri]=i[a][o.propertyUri]||"":f[o.propertyUri]=o.name)})}),c(f)},[t,e,s,i,a]),n.jsx("div",{children:u.Children.toArray(l?.map((f,x)=>n.jsx(A,{variant:"contained",radius:"xs",children:n.jsxs(A.Item,{value:f.name||"Unknown",style:x!==0?{borderTopWidth:0}:{},children:[n.jsx(A.Control,{children:f.name}),n.jsx(A.Panel,{children:n.jsx(Te,{children:u.Children.toArray(f.hasProperties.map(d=>{const o=d.specification?h[d.specification]:"";return n.jsx(ot,{propertySet:f,property:d,propertyNaturalLanguageName:o})}))})})]},f.name||"Unknown")})))})}function ht({api:t,defaultSelection:e}){const r=L(),{t:s}=P(),l=C(ce),i=C(ke),[a,h]=u.useState([]),c=u.useRef(null),[f,x]=u.useState(void 0),[d,o]=u.useState(""),[y]=Le(d,300),[p,m]=u.useState(!1),[I,M]=u.useState(-1);u.useEffect(()=>{e&&!p&&a.length>0&&(a.find(g=>g.value===e.value)?(x(e),o(e.label),c.current&&c.current.blur()):(o(e.label),c.current&&(c.current.focus(),c.current.setSelectionRange(0,c.current.value.length))),m(!0))},[e,p,a]);const w=u.useCallback(b=>{o(b),M(-1);const g=a.filter(j=>j.label.toLowerCase().includes(b.toLowerCase().trim())||j.synonyms?.some(v=>v.toLowerCase().includes(b.toLowerCase().trim())));h(g)},[a]),S=u.useCallback(b=>{const g=a.find(j=>j.value===b);g&&(x(g),c.current&&c.current.blur())},[a]),D=u.useCallback(b=>{if(b.key==="Enter"){if(I>=0&&I<a.length){const g=a[I];o(g.label),S(g.value)}else if(I===-1&&a.length>0){const g=a[0];o(g.label),S(g.value)}c.current&&c.current.blur()}else b.key==="ArrowDown"?M(g=>Math.min(g+1,a.length-1)):b.key==="ArrowUp"&&M(g=>Math.max(g-1,-1))},[I,a,S]);u.useEffect(()=>{if(l){const b={SearchText:y,DictionaryUri:l.ifcClassification.location};r(Re(b))}else r(Be([]))},[r,y,l]),u.useEffect(()=>{c.current&&c.current.focus()},[]),u.useEffect(()=>{if(i){if(i.count){const b=i.dictionary?.classes;b&&h(b.filter(g=>g.uri&&g.name).map(g=>({value:g.uri,label:g.name,synonyms:g.synonyms||[]})))}}else h([])},[i]),u.useEffect(()=>{r(f?G(f.value):G(null))},[r,f]);const E=u.useCallback(()=>{w(""),c.current&&c.current.focus(),x(void 0)},[w]),V=({options:b,search:g})=>{const j=g.toLowerCase().trim().split(" ");return b.filter(v=>{const O=v.label.toLowerCase().trim().split(" "),T=v.synonyms?.map(N=>N.toLowerCase().trim().split(" ")).flat()||[];return j.every(N=>O.some($=>$.includes(N))||T.some($=>$.includes(N)))})};return n.jsx(Pe,{label:`${s("searchMainDictionaryLabel")} ${l?l.ifcClassification.name:""}`,data:a,placeholder:"bSDD search...",value:d,onChange:w,onOptionSubmit:S,filter:V,onKeyDown:D,ref:c,style:{width:"100%"},rightSection:n.jsx(te,{size:"sm",onMouseDown:b=>{b.preventDefault()},onClick:E,"aria-label":"Clear value"})})}const U=60.7969;let Z=0,Q=0;function mt(){const{t}=P(),e=L(),{bsddSearchSave:r,bsddSearchCancel:s}=Ne(),l=C(ce),i=C(re),a=C(He),h=C(ie),c=C(ze);C(ee);const[f,x]=u.useState(),[d,o]=u.useState(!1),[y,p]=u.useState(new $e(_e[Ye])),[m,I]=u.useState(U),[M,w]=u.useState("auto"),[S,D]=u.useState(!1),E=C(se);u.useEffect(()=>{if(!E||!S)return;const v=E.classProperties||[];e(Ue({classProperties:v,languageCode:i}))},[E,S,i,e]),u.useEffect(()=>{if(!h||!l)return;const v=l.ifcClassification.location;h.hasAssociations?.forEach(O=>{if(O.type==="IfcClassificationReference"){const T=O;T.referencedSource?.location&&T.referencedSource.location===v&&(T.location&&e(G(T.location)),x({label:T.name,value:T.location}))}})},[l,h,e]),u.useEffect(()=>{c&&e(Fe(c))},[c,e]),u.useEffect(()=>{w(`${m*a.length+48}px`)},[a.length,m]);const V=v=>{const O=Q+(v.clientY-Z)/a.length;I(O>U?O:U)},b=()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",b)},g=v=>{Z=v.clientY,Q=m,document.addEventListener("mousemove",V),document.addEventListener("mouseup",b)},j=v=>{D(v.includes("Propertysets"))};return n.jsxs(ae,{children:[n.jsx(R,{type:"hidden",name:"ifcType",id:"ifcType",value:""}),n.jsx(R,{type:"hidden",name:"name",id:"name",value:""}),n.jsx(R,{type:"hidden",name:"material",id:"material",value:""}),n.jsx(z,{mx:"md",mt:"lg",mb:"sm",children:n.jsx(ht,{api:y,defaultSelection:f})}),c?n.jsxs(n.Fragment,{children:[n.jsxs(A,{defaultValue:["Classifications"],multiple:!0,onChange:j,children:[n.jsxs(A.Item,{value:"Classifications",children:[n.jsx(A.Control,{children:n.jsx(K,{order:5,children:t("classificationsLabel")})}),n.jsx(A.Panel,{style:{height:M},children:n.jsx(Qe,{height:m,handleMouseDown:g})})]},"Classifications"),n.jsxs(A.Item,{value:"Propertysets",children:[n.jsx(A.Control,{children:n.jsx(K,{order:5,children:t("propertysetsLabel")})}),n.jsx(A.Panel,{children:n.jsx(dt,{mainDictionaryClassification:E,recursiveMode:d})})]},"Propertysets")]}),n.jsxs(z,{my:"sm",justify:"center",children:[n.jsx(Ke,{bsddSearchSave:r}),n.jsx(W,{fullWidth:!0,variant:"light",color:"gray",onClick:s,children:t("cancel")})]})]}):n.jsxs(Ge,{mx:"md",title:t("noClassificationSelected"),mt:"xl",children:[t("classSearchInstruction"),n.jsx(We,{h:"md"}),t("needHelp")," ",n.jsx("a",{href:"https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",target:"_blank",rel:"noreferrer",children:t("checkDocumentation")})]})]})}export{mt as B};
