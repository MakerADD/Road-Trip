// Phone navigation keeps the atlas's three working areas a single tap apart.
(() => {
 const narrow=window.matchMedia('(max-width: 900px)');
 const bar=document.createElement('nav');bar.id='mobile-navigation';bar.setAttribute('aria-label','Atlas views');
 const panels=[['map','Map'],['plans','Trips & places'],['entry','Grave details']];
 for(const [id,label] of panels){const b=document.createElement('button');b.type='button';b.dataset.panel=id;b.textContent=label;b.setAttribute('aria-controls',id==='map'?'map':id==='plans'?'plans-panel':'details');b.onclick=()=>show(id);bar.append(b);}
 document.getElementById('atlas-content').append(bar);
 document.querySelector('main>aside').id='plans-panel';
 function show(panel){document.body.dataset.mobilePanel=panel;for(const b of bar.children)b.setAttribute('aria-pressed',String(b.dataset.panel===panel));if(narrow.matches){window.scrollTo({top:0,behavior:'instant'});if(panel==='map')window.dispatchEvent(new Event('atlas-open'));}}
 show('plans');
 for(const id of ['journeys','destinations'])document.getElementById(id).addEventListener('click',()=>{if(narrow.matches)show('plans');});
 document.getElementById('collection').addEventListener('click',event=>{if(!narrow.matches||!event.target.closest('[data-item]'))return;if(document.getElementById('destinations').classList.contains('active'))show('entry');else document.getElementById('itinerary').scrollIntoView({block:'start',behavior:'smooth'});});
 document.getElementById('itinerary').addEventListener('click',event=>{if(narrow.matches&&event.target.closest('[data-stop]')&&!document.getElementById('modal').open)show('entry');});
 document.getElementById('map').addEventListener('click',event=>{if(narrow.matches&&event.target.closest('.leaflet-marker-icon'))setTimeout(()=>show('entry'),0);},true);
 narrow.addEventListener('change',()=>window.dispatchEvent(new Event('atlas-open')));
})();
