parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,a){return r(e)||n(e,a)||l(e,a)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}function r(e){if(Array.isArray(e))return e}function a(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=l(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function o(e){return u(e)||c(e)||l(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=document.querySelectorAll("thead th"),f=document.querySelector("tbody"),m=1,y=500,p=function(e,t,n,r,a){y+=120;var o=document.createElement("div"),i=document.createElement("h2"),l=document.createElement("p");i.textContent=n,i.classList.toggle("title"),l.textContent=r,o.appendChild(i),o.appendChild(l),o.classList.add("notification",a),o.setAttribute("data-qa","notification"),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),document.body.appendChild(o),setTimeout(function(){o.remove(),y=500},2e3)};s.forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelectorAll("tbody tr");m++;var n=o(s).indexOf(e.target),r=o(t).sort(function(e,t){var r,a;return m%2!=0?(r=e.children[n].innerText,a=t.children[n].innerText):(r=t.children[n].innerText,a=e.children[n].innerText),"$"!==r[0]&&isNaN(+r)?r.localeCompare(a):parseInt(r.replace(/\D/g,""))-parseInt(a.replace(/\D/g,""))});f.append.apply(f,o(r))})});var b,v=document.querySelector("tbody"),h=v.querySelectorAll("tr"),g=a(h);try{var S=function(){var e=b.value;e.addEventListener("click",function(){h.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})};for(g.s();!(b=g.n()).done;)S()}catch(E){g.e(E)}finally{g.f()}var q=document.createElement("form"),A=document.querySelector("body");q.classList.add("new-employee-form"),q.action="#",q.method="post",q.innerHTML='\n<label>Name: <input data-qa="name" name="name" type="text" required></label>\n<label>Position: <input\n  data-qa="position" name="position" type="text" required></label>\n<label>Office: <select data-qa="office" name="office">\n  <option>Tokyo</option>\n  <option>Singapore</option>\n  <option>London</option>\n  <option>New York</option>\n  <option>Edinburgh</option>\n  <option>San Francisco</option>\n  </select>\n</label>\n<label>Age: <input\n  data-qa="age" name="age" type="number" required></label>\n<label>Salary:\n  <input data-qa="salary" name="salary" type="number" required>\n</label>\n<button type="submit">Save to table</button>\n',A.append(q),q.addEventListener("click",function(t){if("BUTTON"===t.target.tagName){t.preventDefault();var n={name:document.querySelector('[data-qa="name"]'),position:document.querySelector('[data-qa="position"]'),office:document.querySelector('[data-qa="office"]'),age:document.querySelector('[data-qa="age"]'),salary:document.querySelector('[data-qa="salary"]')};if(n.name.value.length<4)p(y,235,"failure","From the user\n the name is too short, must be at least 4 characters.","error");else if(+n.age.value<18)p(y,235,"failure","From the user\n age too young must be at least 18 years old.","error");else if(0===n.age.value.length||0===n.name.value.length||0===n.position.value.length||0===n.salary.value.length)p(y,235,"failure","All field\n should not be empty.","error");else if(+n.age.value>90)p(y,235,"failure","From the user\n age too old should be no more than 90","error");else{for(var r=document.createElement("tr"),a=0,o=Object.entries(n);a<o.length;a++){var i=e(o[a],2),l=i[0],c=i[1],u=document.createElement("td");u.textContent="salary"===l?"$"+(+c.value).toLocaleString("en-US"):c.value,r.appendChild(u)}v.append(r),q.reset(),h=v.querySelectorAll("tr"),r.addEventListener("click",function(){h.forEach(function(e){return e.classList.remove("active")}),r.classList.add("active")}),p(y,235,"succes","The user\n add a table","succes")}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1fcd2895.js.map