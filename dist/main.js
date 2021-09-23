(()=>{"use strict";var n={215:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,".popup {\r\n  background-color: rgba(220, 220, 220, 0.707);\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  top: 0;\r\n  width: 60%;\r\n  z-index: 2000;\r\n  height: auto;\r\n}\r\n\r\n.flex-div {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-top: 20px;\r\n}\r\n\r\n.image-div {\r\n  text-align: center;\r\n  display: flex;\r\n  margin-top: 50px;\r\n}\r\n\r\n.image-container {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\n.image-container img {\r\n  width: 60%;\r\n  border-radius: 0.4rem;\r\n}\r\n\r\n.comment-container {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.form-control {\r\n  width: 50%;\r\n}\r\n\r\n.commentForm {\r\n  margin-left: 10px;\r\n}\r\n\r\n.close-btn {\r\n  display: block;\r\n  float: right;\r\n  margin-right: 1rem;\r\n  margin-top: 1rem;\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #d5473d;\r\n  border: none;\r\n  font-weight: bold;\r\n  color: azure;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.comment-name {\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.textarea-comment {\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.submit {\r\n  border-radius: 0.2rem;\r\n  cursor: pointer;\r\n}\r\n",""]);const i=a},426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\nheader {\r\n  align-items: center;\r\n  padding: 10px 0 10px 120px;\r\n  background-color: #d5473d;\r\n  font-weight: 500;\r\n  border-bottom: 2px solid #272727;\r\n}\r\n\r\n.title {\r\n  padding-right: 30px;\r\n  align-items: center;\r\n  color: azure;\r\n}\r\n\r\n.title h1 {\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n\r\n.nav-links {\r\n  padding-right: 20px;\r\n  text-decoration: none;\r\n  color: rgb(255, 247, 247);\r\n}\r\n\r\n.fas {\r\n  font-size: 26px;\r\n  padding-right: 10px;\r\n  font-style: italic;\r\n}\r\n\r\n.page-footer {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border: 2px solid #272727;\r\n  background-color: #d5473d;\r\n  text-align: center;\r\n  padding: 15px;\r\n  margin-top: 20px;\r\n  color: azure;\r\n}\r\n\r\n#tumericMeals,\r\n#garamMeals {\r\n  display: none;\r\n}\r\n\r\n.sections {\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  margin: auto;\r\n  padding-top: 50px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.mealCard {\r\n  flex-direction: column;\r\n  width: 28%;\r\n  text-align: center;\r\n}\r\n\r\n.mealCard img {\r\n  width: 100%;\r\n  height: 60%;\r\n  border-radius: 0.4rem;\r\n}\r\n\r\n.mealName {\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.comment {\r\n  padding: 10px 60px;\r\n  margin-top: 6px;\r\n  border: 1px solid #d5473d;\r\n  background-color: #272727;\r\n  color: rgb(255, 247, 247);\r\n  border-radius: 0.5rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.likes {\r\n  margin-left: 150px;\r\n}\r\n\r\n.far {\r\n  cursor: pointer;\r\n}\r\n",""]);const i=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],s=0;s<n.length;s++){var l=n[s],d=r.base?l[0]+r.base:l[0],c=i[d]||0,m="".concat(d," ").concat(c);i[d]=c+1;var p=t(m),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(e[p].references++,e[p].updater(u)):e.push({identifier:m,updater:a(u,r),references:1}),o.push(m)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var l=r(n,a),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),s=t(565),l=t.n(s),d=t(216),c=t.n(d),m=t(589),p=t.n(m),u=t(426),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),e()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;var f=t(215),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=async(n,e)=>{const t=await fetch(`${n}?${e}`);return await t.json()};class y{static async postComment(n,e,t){const r=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments",{method:"POST",body:JSON.stringify({item_id:n,username:e,comment:t}),headers:{"content-type":"application/json"}});if(201===r.status)return r}static async getComments(n){const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCZQ9jd97Oj1oy24PzZg/comments?item_id=${n}`);return await e.json()}}const b=(n,e)=>{y.getComments(e).then((e=>{n.innerHTML="";const t=n.previousSibling.previousSibling,r=(n=>n.length)(e);r>0&&(t.innerHTML=`Comments (${r})`),e.length>0?e.forEach((e=>{n.innerHTML+=`${e.creation_date} ${e.username}: ${e.comment} <br>`})):n.innerHTML="No comments"}))},x=document.getElementById("home"),M=document.getElementById("main"),E=document.getElementsByTagName("header"),w=document.getElementsByTagName("footer"),T=(n,e,t)=>{(async n=>{const e=await fetch(n);return await e.json()})(n).then((n=>{n=n.filter((n=>n.item_id===t)),e.innerHTML=`${n[0].likes} likes`}))},I=document.getElementById("main"),$=document.getElementsByTagName("header"),k=document.getElementsByTagName("footer"),C="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N3qJO6H3DKthRFBBn3Uz/likes/",B=(n,e)=>{n.innerHTML="",e.forEach((e=>{const t=e.idMeal+1,r=`<img src="${e.strMealThumb}" alt="Food">\n    <div class="mealName flex">\n      <p>${e.strMeal}</p>\n      <i class="far fa-heart" id="${e.strMeal}"></i>\n    </div>\n    <span class="likes" id="${t}">0 likes</span>\n    <button class="comment" id="${e.idMeal}">Comments</button>`,a=document.createElement("div");a.classList.add("mealCard"),a.innerHTML=r,n.appendChild(a);const i=document.getElementById(e.strMeal),o=document.getElementById(t);i.addEventListener("click",(()=>{(async(n,e)=>await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N3qJO6H3DKthRFBBn3Uz/likes/",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:e})}))(0,e.idMeal).then((()=>T(C,o,e.idMeal)))})),T(C,o,e.idMeal),document.getElementById(e.idMeal).addEventListener("click",(()=>{var n;n=e.idMeal,v("https://www.themealdb.com/api/json/v1/1/lookup.php",`i=${n}`).then((n=>{const e=n.meals[0].idMeal+1;x.innerHTML="";const t=document.createElement("div");t.className="popup",t.innerHTML=`<button type='button' class='close-btn'>X</button>\n                            <div class='comment-container'>\n                              <div class='image-div'>\n                                <div class='image-container'><img src="${n.meals[0].strMealThumb}" class='img-fluid'></div>\n                              </div>\n                              <div class='meal-name'><h2>${n.meals[0].strMeal}</h2></div>\n                              <div class='cuisine'><b>Category:</b> ${n.meals[0].strCategory}</div>\n                              <div class='ingredients'><b> Ingredients:</b> ${n.meals[0].strIngredient1}, ${n.meals[0].strIngredient2}, ${n.meals[0].strIngredient3}, ${n.meals[0].strIngredient4}, ${n.meals[0].strIngredient5}</div>\n                              <div class='flex-div'>\n                              <div>\n                                <h3 class='counter'>Comments</h3>\n                                <div class='comment-list' id="${e}"> </div>\n                              </div>\n                              \n                              <div class="commentForm form-group">\n                                  <div class='add-comment'><h2>Add a comment:</h2></div>\n                                  <div><input type="text" id="${n.meals[0].strMeal}" name="name" class="comment-name" placeholder="Your Name"></div><br>\n                                  <div> <textarea id="${n.meals[0].strIngredient1}" name="comment-text" class="textarea-comment" placeholder="Your Message"></textarea></div><br>\n                                  <div><button type="button" id="${n.meals[0].idMeal}" class="submit" >Add Comment</button></div>\n                              </div>\n                              </div>\n                            </div>`,x.appendChild(t),document.querySelector(".close-btn").addEventListener("click",(()=>{t.remove(),M.style.display="block",E[0].style.display="flex",w[0].style.display="block"}));const r=document.getElementById(n.meals[0].idMeal),a=document.getElementById(n.meals[0].strMeal),i=document.getElementById(n.meals[0].strIngredient1);r.addEventListener("click",(()=>{y.postComment(n.meals[0].idMeal,a.value,i.value).then((()=>b(o,n.meals[0].idMeal))),a.value="",i.value=""}));const o=document.getElementById(e);b(o,n.meals[0].idMeal)})),I.style.display="none",$[0].style.display="none",k[0].style.display="none"}))}))},L=n=>n.length,j=document.getElementById("allMeals"),N=document.getElementById("tumericMeals"),H=document.getElementById("garamMeals"),A=document.getElementById("indian"),S=document.getElementById("tumeric"),Z=document.getElementById("garam"),O="https://www.themealdb.com/api/json/v1/1/filter.php";v(O,"a=Indian").then((n=>{const e=L(n.meals);A.innerHTML+=`(${e})`,B(j,n.meals)})),v(O,"i=turmeric").then((n=>{const e=L(n.meals);S.innerHTML+=`(${e})`,B(N,n.meals)})),v(O,"i=garam_masala").then((n=>{const e=L(n.meals);Z.innerHTML+=`(${e})`,B(H,n.meals)})),A.addEventListener("click",(()=>{j.style.display="flex",N.style.display="none",H.style.display="none"})),S.addEventListener("click",(()=>{j.style.display="none",N.style.display="flex",H.style.display="none"})),Z.addEventListener("click",(()=>{j.style.display="none",N.style.display="none",H.style.display="flex"}))})()})();