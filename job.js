// Render a job mini page from the query string id
(function(){
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const data = DETAILS?.job?.[id];
  
    // year
    const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  
    if(!data){
      document.title = 'Job Not Found';
      const main = document.querySelector('main');
      if(main){
        main.innerHTML = '<div class="panel"><h2>Not found</h2><p>Sorry, that job does not exist. <a href="index.html#experience">Back to experience</a>.</p></div>';
      }
      return;
    }
  
    document.title = data.title + ' • Job';
    document.getElementById('jTitle').textContent = data.title;
  
    const jLogo = document.getElementById('jLogo');
    if(data.logo){ jLogo.src = data.logo; jLogo.alt = data.title + ' logo'; }
    else { jLogo.style.display = 'none'; }
  
    const jTags = document.getElementById('jTags');
    (data.tags||[]).forEach(t=>{ const span=document.createElement('span'); span.className='chip'; span.textContent=t; jTags.appendChild(span); });
  
    const jBody = document.getElementById('jBody');
    (data.description||[]).forEach(p=>{ const el=document.createElement('p'); el.textContent=p; jBody.appendChild(el); });
  })();
  