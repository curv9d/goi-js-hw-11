import{S as p,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="43804581-49fe3e91f026bba4b33393e39",d="https://pixabay.com/api/";function h(i){const s=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(i){const s=i.map(({largeImageURL:r,webformatURL:n,tags:e,likes:t,views:o,comments:f,downloads:u})=>`<li class="item-results">
          <a href="${r}" class="gallery-link">
            <img src="${n}" alt="${e}" class="gallery-img"/>
          </a>
          <div class="wrap-info">
            <ul class="list-info">
              <li class="item-info">
                <p class="headline-info">Likes</p>
                <p class="text-info">${t}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Views</p>
                <p class="text-info">${o}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Comments</p>
                <p class="text-info">${f}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Downloads</p>
                <p class="text-info">${u}</p>
              </li>
            </ul>
          </div>
        </li>`).join("");document.querySelector(".list-results").innerHTML=s}const y=new p(".gallery-link",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".form-search-img"),a=document.querySelector(".search-input"),c=document.querySelector(".loader"),b=document.querySelector(".list-results");function S(i){if(i.preventDefault(),!a.value.trim())return l.warning({message:"The field cannot be empty!",position:"topRight"});c.classList.toggle("is-hidden"),b.innerHTML="",h(a.value.trim()).then(s=>{i.target.reset(),s.hits.length===0&&l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(s.hits),y.refresh()}).catch(s=>console.log(s)).finally(()=>{c.classList.toggle("is-hidden")})}L.addEventListener("submit",S);
//# sourceMappingURL=commonHelpers.js.map
