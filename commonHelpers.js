import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as l}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),v=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let c,a;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(c=t,o.disabled=!1)}};y(s,b);o.addEventListener("click",()=>{if(!c){l.error({title:"Error",message:"Please select a valid date."});return}s.disabled=!0,o.disabled=!0,clearInterval(a),a=setInterval(()=>{const t=c-new Date;if(t<=0){clearInterval(a),s.disabled=!1;return}const{days:d,hours:u,minutes:i,seconds:r}=q(t);S.textContent=n(d),p.textContent=n(u),v.textContent=n(i),D.textContent=n(r)},1e3)});function q(e){const r=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:m,minutes:f,seconds:h}}function n(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map