(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={form:document.querySelector(".search-form"),list:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-load-more")};a.form.addEventListener("submit",m);a.btnLoadMore.addEventListener("click",f);let l=1;async function f(s){l+=1;const r=a.form.elements.searchQuery.value,o=await c(r,l);l===12?(alert("We're sorry, but you've reached the end of search results."),a.btnLoadMore.classList.replace("load-more","load-more-hidden")):a.list.insertAdjacentHTML("beforeend",d(o.hits))}async function m(s){s.preventDefault();const r=s.currentTarget.elements.searchQuery.value;l=1,a.list.innerHTML="",a.btnLoadMore.classList.replace("load-more","load-more-hidden");try{const o=await c(r);if(o.hits.length===0)return alert('"Sorry, there are no images matching your search query. Please try again."');a.list.insertAdjacentHTML("beforeend",d(o.hits)),a.btnLoadMore.classList.replace("load-more-hidden","load-more")}catch(o){console.log(o)}}async function c(s,r=1){const o="https://pixabay.com/api/",n=new URLSearchParams({key:"40911522-ba38adab2f7d889473ea5ba96",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}),e=await fetch(`${o}?${n}`);if(!e.ok)throw new Error(e.statusText);return await e.json()}function d(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:u})=>`
      <div class="photo-card">
    <img class="img-gallery" src="${r}" alt="${n}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes: ${e}</b>
        </p>
            <p class="info-item">
        <b>Views: ${t}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${i}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${u}</b>
        </p>
    </div>
</div>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
