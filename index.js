import{a as m,S as p,i as o}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",g="54244946-6cd806218e75715379c78dc38";async function y(r){return(await m.get(f,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const s=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
      <li class="gallery-item">
  <a href="${a}" class="gallery-link">
    <img src="${i}" alt="${e}" class="gallery-img" />
    <div class="info">
      <div class="info-item" title="Likes">
        <span class="emoji">👍</span>
        <span class="number">${t}</span>
      </div>
      <div class="info-item" title="Views">
        <span class="emoji">👁</span>
        <span class="number">${n}</span>
      </div>
      <div class="info-item" title="Comments">
        <span class="emoji">💬</span>
        <span class="number">${u}</span>
      </div>
      <div class="info-item" title="Downloads">
        <span class="emoji">⬇</span>
        <span class="number">${d}</span>
      </div>
    </div>
  </a>
</li>

    `).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",q);function q(r){r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(!s){o.warning({message:"Please enter a search query",position:"topRight"});return}L(),b(),y(s).then(i=>{const a=i.hits;if(a.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(a)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
