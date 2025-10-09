// Add click navigation from cards to detail pages (projects -> project.html, jobs -> job.html)
(function(){
    // Map titles to IDs as a fallback if data-id is missing
    const titleToId = {
      'TaskFlow — Task Management Web App': 'taskflow',
      'Weather App — Live Weather Viewer': 'weather',
      'Personal Finance Tracker': 'financetracker',
      'Barista — Starbucks': 'starbucks',
      'Team Lead — Tim Hortons': 'timhortons',
      'Dietary Aide — Seine River Retirement': 'seineriver'
    };
  
    document.querySelectorAll('.card').forEach(card=>{
      const h3 = card.querySelector('h3');
      const kind = card.getAttribute('data-kind') 
                || (card.closest('#projects') ? 'project' 
                    : (card.closest('.row')?.querySelector('h2')?.textContent.includes('Experience') ? 'job' : null));
      const id = card.getAttribute('data-id') || (h3 ? titleToId[h3.textContent.trim()] : null);
  
      if(!kind || !id) return; // skip non-clickable cards
  
      card.setAttribute('role','link');
      card.setAttribute('tabindex','0');
  
      const go = ()=>{
        const url = kind === 'project' ? `project.html?id=${id}` : `job.html?id=${id}`;
        window.location.href = url;
      };
  
      card.addEventListener('click', (e)=>{
        if (e.target.closest('.actions a')) return; // allow inner buttons to work normally
        go();
      });
      card.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); }
      });
    });
  })();
  