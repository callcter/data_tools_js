(()=>{"use strict";var e={718:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isNumber=function(e){return"number"==typeof e&&!isNaN(e)&&Number.isFinite(e)},t.getTypeOfVariable=function(e){try{var t=Object.prototype.toString.call(e),r=t.match(/\[object (\w+)]/);return r?"generatorfunction"===(t=r[1].toLowerCase())?"generator":t:"none"}catch(e){return console.warn(e),"catch"}}},345:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=2),e||0===e?(0,n.isNumber)(e)?Math.abs(e)>=1e12?(e/1e12).toFixed(r)+" 万亿":Math.abs(e)>=1e8?(e/1e8).toFixed(r)+" 亿":Math.abs(e)>=1e4?(e/1e4).toFixed(r)+" 万":e.toFixed(r):e:t},t.formatPercent=function(e,t,r){return void 0===t&&(t=null),void 0===r&&(r=2),e||0===e?(0,n.isNumber)(e)?e.toFixed(r)+"%":e:t};var n=r(718)},156:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.isNumber=t.getTypeOfVariable=t.tree2List=t.list2Tree=t.list2Dict=t.calculateIntervalDistribution=t.quartile=t.quartileVal=t.arraySum=t.formatPercent=t.formatNum=void 0;var u=o(r(345)),l=o(r(277)),c=o(r(824)),s=o(r(718));t.formatNum=u.formatNum,t.formatPercent=u.formatPercent,t.arraySum=l.arraySum,t.quartileVal=l.quartileVal,t.quartile=l.quartile,t.calculateIntervalDistribution=l.calculateIntervalDistribution,t.list2Dict=c.list2Dict,t.list2Tree=c.list2Tree,t.tree2List=c.tree2List,t.getTypeOfVariable=s.getTypeOfVariable,t.isNumber=s.isNumber,t.default=n(n(n(n({},u),l),c),s)},277:function(e,t){var r=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};function n(e){return e.reduce((function(e,t){return e+t}),0)}function i(e,t,r){var n=e*(t+1);if(Number.isInteger(n))return r[n+1];var i=Math.floor(n)-1,a=Math.ceil(n)-1;return(r[i]+r[a])/2}Object.defineProperty(t,"__esModule",{value:!0}),t.arraySum=n,t.quartileVal=i,t.quartile=function(e){var t=r([],e,!0);t.sort((function(e,t){return e-t}));var a=t.length;return{min:t[0],max:t[a-1],p05:i(.05,a,t),p10:i(.1,a,t),p15:i(.15,a,t),p20:i(.2,a,t),p25:i(.25,a,t),p50:i(.5,a,t),p75:i(.75,a,t),p80:i(.8,a,t),p85:i(.85,a,t),p90:i(.9,a,t),p95:i(.95,a,t),len:a,mean:n(t)/a}},t.calculateIntervalDistribution=function(e,t){for(var r=Math.min.apply(Math,e),n=Math.max.apply(Math,e),i=(n-r)/t,a=new Array(t).fill(0),o=0;o<e.length;o++){var u=e[o];u===n?a[t-1]++:a[Math.floor((u-r)/i)]++}return{distribution:a,step:i}}},824:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.list2Dict=function(e,t,r){for(var n={},i=0;i<e.length;i++){var a=e[i];n[a[t]]=r?a[r]:a}return n},t.list2Tree=function(e,t){void 0===t&&(t={key:"key",parent:"parent"});for(var n=t.key,i=t.parent,a={},o=0;o<e.length;o++){var u=e[o][n];a[u]=r(r({},e[o]),{children:a[u]?a[u].children:[]});var l=e[o][i];l&&(a[l]||(a[l]={key:l,children:[]}),a[l].children.push(a[u]))}return Object.values(a).filter((function(e){return!e[i]}))},t.tree2List=function e(t,n){void 0===n&&(n={key:"key",parent:"parent"});for(var i=[],a=0;a<t.length;a++){var o=t[a],u=r({},o);if(delete u.children,i.push(u),o.children&&o.children.length){var l=e(o.children,n);i=i.concat(l)}}return i}}},t={},r=function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(156);this.data_tools_js=r})();