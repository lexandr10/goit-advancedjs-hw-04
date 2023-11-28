import{i as c,a as f}from"./assets/vendor-2dcf4ad5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s={form:document.querySelector(".search-form"),list:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-load-more"),guard:document.querySelector(".js-guard")};s.form.addEventListener("submit",h);s.btnLoadMore.addEventListener("click",p);let l=1;async function p(n){l+=1;const r=s.form.elements.searchQuery.value,o=await u(r,l),{hits:a,totalHits:e}=o,t=Math.ceil(e/40);l>=t?(c.show({title:"Hey",message:"We're sorry, but you've reached the end of search results."}),s.list.insertAdjacentHTML("beforeend",d(a)),s.btnLoadMore.classList.replace("load-more","load-more-hidden")):s.list.insertAdjacentHTML("beforeend",d(a))}async function h(n){n.preventDefault();const r=n.currentTarget.elements.searchQuery.value.trim();if(r==="")return c.show({title:"Hey",message:"You need to enter some words"});l=1,s.list.innerHTML="",s.btnLoadMore.classList.replace("load-more","load-more-hidden");try{const o=await u(r);if(o.hits.length===0)return c.show({title:"Hey",message:'"Sorry, there are no images matching your search query. Please try again."'});s.list.insertAdjacentHTML("beforeend",d(o.hits)),s.btnLoadMore.classList.replace("load-more-hidden","load-more")}catch(o){console.log(o)}}function d(n){return n.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:m})=>`
      <div class="photo-card">
    <img class="img-gallery" src="${r}" alt="${a}" loading="lazy" />
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
            <b>Downloads: ${m}</b>
        </p>
    </div>
</div>`).join("")}async function u(n,r=1){const o="https://pixabay.com/api/",a=new URLSearchParams({key:"40911522-ba38adab2f7d889473ea5ba96",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r});return(await f.get(`${o}?${a}`)).data}
//# sourceMappingURL=commonHelpers.js.map
