var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{handleSubmit:()=>c});const n="4e801574c06f442aa353acebe81dd3e3",o="https://api.weatherbit.io/v2.0/forecast/daily?",a="https://pixabay.com/api/?key=",r="30047972-e9972e364d39e66fe6cc6b641";function c(e){event.preventDefault();const t=document.getElementById("from_place").value,c=document.getElementById("to_place").value,s=document.getElementById("travel_date").value,d=`http://api.geonames.org/searchJSON?q=${c}&maxRows=10&username=xiaohua`,m=function(e){let t=new Date(e),n=new Date;return Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()))/864e5)}(document.getElementById("travel_date").value);l(d).then((function(e){const t=e.geonames[0].lat,a=e.geonames[0].lng;return console.log(t),console.log(a),async function(e,t,a){const r=Math.floor(new Date(a).getTime()/1e3),c=new Date,l=Math.floor(new Date(c.getFullYear()+"-"+c.getMonth()+"-"+c.getDate()).getTime()/1e3);let i;i=r-l<604800?await fetch(weatherCurrentUR+"lat="+e+"&lon="+t+"&key="+n):await fetch(o+"lat="+e+"&lon="+t+"&key="+n);try{const e=await i.json();return console.log(e),e}catch(e){console.log("error",e)}}(t,a,travel_date)})).then((e=>{const n=e.data[0].temp,o=e.data[0].weather.description;return console.log(n),console.log(o),async function(e){const t=await fetch(a+r+"&q="+e+" city&image_type=photo");try{const e=await t.json();return console.log(e),e}catch(e){console.log("error",e)}}(c).then((e=>{if(e.hits.length>0){const a=e.hits[0].webformatURL;return console.log(a),async function(e,t){console.log(t);const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("error",e)}}("/add",{from:t,to:c,date:s,days_away:m,image:a,temp:n,condition:o})}})).then((e=>{i(e)}))}))}const l=async e=>{const t=await fetch(e);try{const e=await t.json();return console.log(e),e}catch(e){console.log("error",e)}};const i=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log(t);const n=document.getElementById("trip_information");n.classList.remove("invisible"),n.scrollIntoView({behavior:"smooth"}),document.getElementById("boarding").innerHTML=t.from,document.getElementById("destination").innerHTML=t.to,document.getElementById("departing_date").innerHTML=t.date,document.getElementById("days_away").innerHTML=t.days_away,void 0!==t.image&&document.getElementById("destination_image").setAttribute("src",t.image),document.getElementById("temperature").innerHTML=t.temp,document.getElementById("weather_condition").innerHTML=t.condition}catch(e){console.log("error",e)}};document.querySelector(".planNow").addEventListener("click",(function(e){document.getElementById("plan_form").reset(),document.getElementById("plan_trip").scrollIntoView({behavior:"smooth"})}));document.getElementById("travel_submit").addEventListener("click",c);document.getElementById("remove_trip").addEventListener("click",(function(e){document.getElementById("plan_form").reset(),document.getElementById("trip_information").classList.add("invisible")}));Client=t})();