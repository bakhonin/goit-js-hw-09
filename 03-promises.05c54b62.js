function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var i=n("7Y9D8");document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const o=Number(t.target.elements.delay.value),r=Number(t.target.elements.step.value),n=Number(t.target.elements.amount.value);Array.from({length:n}).forEach(((t,n)=>{var l,a;(l=n+1,a=o+n*r,new Promise(((e,t)=>{const o=Math.random()>.3;setTimeout((()=>{o?e({position:l,delay:a}):t({position:l,delay:a})}),a)}))).then((({position:t,delay:o})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`Rejected promise ${t} in ${o}ms`)}))}))}));
//# sourceMappingURL=03-promises.05c54b62.js.map
