(this.webpackJsonpremox=this.webpackJsonpremox||[]).push([[15],{1619:function(e,s,t){"use strict";t.r(s);var c=t(18),i=t(28),r=t(101),n=t(394),a=t(122),d=t(1466),l=t(2),o=t(6),j={black:{color:"#000000",transition:{duration:1}},red:{color:["#000000","#ed0037","#000000"],transition:{duration:2,times:[0,.2,1]}},green:{color:["#000000","#00e55f","#000000"],transition:{duration:2,times:[0,.2,1]}}};s.default=function(){var e=Object(i.e)(a.a),s=Object(l.useRef)(e);return Object(l.useEffect)((function(){s.current=e}),[e]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"w-full sm:px-5 /pt-4 pb-6 ",children:[Object(o.jsxs)("div",{id:"header",className:"grid grid-cols-[35%,25%,20%,20%] sm:grid-cols-[25%,15%,15%,20%,12.5%,12.5%] sm:px-8 pb-5 /py-5",children:[Object(o.jsx)("div",{className:"text-sm sm:text-base",children:"Assets"}),Object(o.jsx)("div",{className:"text-sm sm:text-base",children:"Balance"}),Object(o.jsx)("div",{className:"text-sm sm:text-base",children:"Amount"}),Object(o.jsx)("div",{className:"hidden sm:block",children:"USD Price"}),Object(o.jsx)("div",{className:"hidden sm:block",children:"24h"}),Object(o.jsx)("div",{className:"text-sm sm:text-base",children:"% Assets"})]}),Object(o.jsx)("div",{className:"pb-5 px-2 sm:px-8 shadow-custom rounded-xl",children:Object.entries(e).map((function(e,t){var i,a,m=Object(c.a)(e,2),b=m[0],x=m[1];if(!x&&0==t)return Object(o.jsxs)("div",{className:"flex justify-center py-1",children:[" ",Object(o.jsx)(r.ClipLoader,{})]},t);if(!x)return Object(o.jsx)(l.Fragment,{},t);var h=0,u=0,v=0,O=0,p=s.current[b];return p&&(u=p.per_24!==x.per_24?p.per_24<x.per_24?1:-1:0,h=p.tokenPrice!==x.tokenPrice?p.tokenPrice<x.tokenPrice?1:-1:0,v=p.amount!==x.amount?p.amount<x.amount?1:-1:0,O=p.percent!==x.percent?p.percent<x.percent?1:-1:0),Object(o.jsxs)("div",{className:"grid grid-cols-[35%,25%,20%,20%] sm:grid-cols-[25%,15%,15%,20%,12.5%,12.5%] border-b border-black py-5",children:[Object(o.jsxs)("div",{className:"flex space-x-3 items-center",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:null===x||void 0===x||null===(i=x.coins)||void 0===i?void 0:i.coinUrl,width:30,height:30,alt:""})}),Object(o.jsxs)("div",{children:[null===x||void 0===x||null===(a=x.coins)||void 0===a?void 0:a.name," "]})]}),Object(o.jsxs)(d.a.div,{animate:0===h&&0===v?"black":0===h?v>0?"green":"red":h>0?"green":"red",children:["$ ",(x.amount*x.tokenPrice).toFixed(2)]}),Object(o.jsx)(d.a.div,{animate:0===v?"black":v>0?"green":"red",children:(x.amount||0).toFixed(2)}),Object(o.jsxs)(d.a.div,{variants:j,className:"hidden sm:block",animate:0===h?"black":h>0?"green":"red",children:["$ ",(x.tokenPrice||0).toFixed(2)]}),Object(o.jsxs)(d.a.div,{variants:j,className:"hidden sm:block",animate:0===u?"black":u>0?"green":"red",children:["% ",(x.per_24||0).toFixed(2)]}),Object(o.jsxs)(d.a.div,{animate:0===O?"black":O>0?"green":"red",children:["% ",(x.percent||0).toFixed(2)]})]},Object(n.generate)())}))})]})})})}}}]);
//# sourceMappingURL=15.f7dcdf3c.chunk.js.map