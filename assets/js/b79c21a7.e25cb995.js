"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[456],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={id:"use-erc20",title:"useERC20",sidebar_position:14},o=void 0,p={unversionedId:"hooks/use-erc20",id:"hooks/use-erc20",title:"useERC20",description:"Returns a ERC20 Contract instance and a bunch of other useful functions from contract address.",source:"@site/docs/hooks/use-erc20.md",sourceDirName:"hooks",slug:"/hooks/use-erc20",permalink:"/react-ethooks/hooks/use-erc20",draft:!1,editUrl:"https://github.com/incirLabs/react-ethooks/tree/main/packages/react-ethooks/docs/docs/hooks/use-erc20.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"use-erc20",title:"useERC20",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"useEnsText",permalink:"/react-ethooks/hooks/use-ens-text"},next:{title:"useERC20Balance",permalink:"/react-ethooks/hooks/use-erc20-balance"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"address",id:"address",level:3},{value:"Returns",id:"returns",level:2},{value:"contract",id:"contract",level:3},{value:"getBalance",id:"getbalance",level:3},{value:"getAllowance",id:"getallowance",level:3},{value:"getTotalSupply",id:"gettotalsupply",level:3},{value:"getSymbol",id:"getsymbol",level:3},{value:"approve",id:"approve",level:3},{value:"transfer",id:"transfer",level:3}],u={toc:i},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns a ERC20 Contract instance and a bunch of other useful functions from contract address."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {useERC20} from '@incirlabs/react-ethooks';\n\nexport default function MyComponent() {\n  const {\n    // Contract instance\n    contract,\n\n    // Other useful functions\n    getBalance,\n    getAllowance,\n    getTotalSupply,\n    getSymbol,\n\n    approve,\n    transfer,\n  } = useERC20('0x00');\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"address"},"address"),(0,r.kt)("p",null,"ERC20 contract address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An object with the following properties:"),(0,r.kt)("h3",{id:"contract"},"contract"),(0,r.kt)("p",null,"Contract instance."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.ethers.org/v5/api/contract/contract/"},(0,r.kt)("inlineCode",{parentName:"a"},"ethers.Contract")))))),(0,r.kt)("h3",{id:"getbalance"},"getBalance"),(0,r.kt)("p",null,"Get the balance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(address: string) => Promise","<",(0,r.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))),(0,r.kt)("h3",{id:"getallowance"},"getAllowance"),(0,r.kt)("p",null,"Get the allowance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spender")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(owner: string, spender: string) => Promise","<",(0,r.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))),(0,r.kt)("h3",{id:"gettotalsupply"},"getTotalSupply"),(0,r.kt)("p",null,"Get the total supply of the token"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"() => Promise","<",(0,r.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))),(0,r.kt)("h3",{id:"getsymbol"},"getSymbol"),(0,r.kt)("p",null,"Get the symbol of the token"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"() => Promise","<",(0,r.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))),(0,r.kt)("h3",{id:"approve"},"approve"),(0,r.kt)("p",null,"Approve the ",(0,r.kt)("inlineCode",{parentName:"p"},"spender")," to spend the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of tokens"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(spender: string, amount: number ","|"," string) => Promise","<",(0,r.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))),(0,r.kt)("h3",{id:"transfer"},"transfer"),(0,r.kt)("p",null,"Transfer the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of tokens to the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(recipient: string, amount: number ","|"," string) => Promise","<",(0,r.kt)("a",{parentName:"td",href:"../types#contractresult"},"ContractResult"),">")))))}d.isMDXComponent=!0}}]);