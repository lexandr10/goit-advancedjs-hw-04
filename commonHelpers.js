import{i as c,a as f}from"./assets/vendor-2dcf4ad5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s={form:document.querySelector(".search-form"),list:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-load-more"),guard:document.querySelector(".js-guard")};s.form.addEventListener("submit",h);s.btnLoadMore.addEventListener("click",p);let l=1;async function p(a){l+=1;const r=s.form.elements.searchQuery.value,o=await u(r,l),{hits:n,totalHits:e}=o,t=Math.ceil(e/40);l>=t?(c.show({title:"Hey",message:"We're sorry, but you've reached the end of search results."}),s.btnLoadMore.classList.replace("load-more","load-more-hidden")):s.list.insertAdjacentHTML("beforeend",d(n))}async function h(a){a.preventDefault();const r=a.currentTarget.elements.searchQuery.value.trim();if(r==="")return c.show({title:"Hey",message:"You need to enter some words"});l=1,s.list.innerHTML="",s.btnLoadMore.classList.replace("load-more","load-more-hidden");try{const o=await u(r);if(o.hits.length===0)return c.show({title:"Hey",message:'"Sorry, there are no images matching your search query. Please try again."'});s.list.insertAdjacentHTML("beforeend",d(o.hits)),s.btnLoadMore.classList.replace("load-more-hidden","load-more")}catch(o){console.log(o)}}function d(a){return a.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:m})=>`
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
            <b>Downloads: ${m}</b>
        </p>
    </div>
</div>`).join("")}async function u(a,r=1){const o="https://pixabay.com/api/",n=new URLSearchParams({key:"40911522-ba38adab2f7d889473ea5ba96",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r});return(await f.get(`${o}?${n}`)).data}
//# sourceMappingURL=commonHelpers.js.map
