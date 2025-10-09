// Render a project detail page from the query string id
(function(){
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const data = DETAILS?.project?.[id];
  
    // year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  
    if(!data){
      document.title = 'Project Not Found';
      const main = document.querySelector('main');
      if(main){
        main.innerHTML = '<div class="panel"><h2>Not found</h2><p>Sorry, that project does not exist. <a href="index.html#projects">Back to projects</a>.</p></div>';
      }
      return;
    }
  
    document.title = data.title + ' • Project';
    document.getElementById('pCrumb').textContent = data.title;
    document.getElementById('pTitle').textContent = data.title;
  
    const pImage = document.getElementById('pImage');
    if(data.image){ pImage.src = data.image; pImage.alt = data.title + ' screenshot'; }
    else { pImage.closest('.shot').style.display = 'none'; }
  
    const pTags = document.getElementById('pTags');
    (data.tags||[]).forEach(t=>{ const s=document.createElement('span'); s.className='chip'; s.textContent=t; pTags.appendChild(s); });
  
    const pLangs = document.getElementById('pLangs');
    (data.languages||[]).forEach(l=>{ const s=document.createElement('span'); s.className='chip'; s.textContent=l; pLangs.appendChild(s); });
  
    const pSkills = document.getElementById('pSkills');
    (data.skills||[]).forEach(sk=>{ const s=document.createElement('span'); s.className='chip'; s.textContent=sk; pSkills.appendChild(s); });
  
    const pDesc = document.getElementById('pDesc');
    (data.description||[]).forEach(p=>{ const el=document.createElement('p'); el.textContent=p; pDesc.appendChild(el); });
  
    const pActions = document.getElementById('pActions');
    (data.links||[]).forEach(link=>{
      const a = document.createElement('a');
      a.className = 'btn';
      a.href = link.href || '#';
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.textContent = link.label || 'Open';
      pActions.appendChild(a);
    });
  })();
  