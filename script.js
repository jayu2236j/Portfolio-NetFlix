// Footer year
import { certificates } from "./data.js";

const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();



function renderCertificates() {
  const row = document.getElementById("certsRow");
  if (!row) return;

  row.innerHTML = certificates.map(c => {
    const isPending = !!c.pending;
    const openAttrs = isPending
      ? `aria-label="${c.title} (in progress)"`
      : `role="button" tabindex="0"
         onclick="window.open('${c.link}', '_blank')"
         onkeypress="if(event.key==='Enter'){ window.open('${c.link}', '_blank') }"
         aria-label="Open certificate ${c.title}"`;

    return `
      <article class="cert-card ${isPending ? 'pending' : ''}" ${openAttrs}>
        <img class="cert-banner" src="${c.image || 'assets/certs/_placeholder.png'}" alt="${c.issuer} badge">
        <h3 class="cert-title">${c.title}</h3>
        <div class="cert-meta">${c.issuer} • ${c.date}</div>
        ${isPending ? `<div class="badge">⌛ In progress</div>` : `<div class="badge">Verified</div>`}
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCertificates();
});


// Arrow keys: nudge horizontally (Netflix feel)
window.addEventListener('keydown', (e)=>{
  if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const active = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2);
  const scroller = active?.closest('.row')?.querySelector('.scroller');
  if(!scroller) return;
  const delta = (e.key === 'ArrowRight' ? 1 : -1) * scroller.clientWidth * 0.9;
  scroller.scrollBy({left: delta, behavior:'smooth'});
});

// === Skills horizontal enhancements ===
(function(){
  const skillsScroller = document.querySelector('#skills .scroller');
  if(!skillsScroller) return;

  // 1) Mouse wheel -> horizontal scroll
  skillsScroller.addEventListener('wheel', (e)=>{
    // If vertical wheel, use it to scroll horizontally
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      skillsScroller.scrollBy({ left: e.deltaY, behavior: 'auto' });
      e.preventDefault();
    }
  }, { passive:false });

  // 2) Click & drag to scroll
  let isDown = false, startX = 0, startScroll = 0;
  skillsScroller.addEventListener('mousedown', (e)=>{
    isDown = true;
    skillsScroller.classList.add('dragging');
    startX = e.pageX - skillsScroller.getBoundingClientRect().left;
    startScroll = skillsScroller.scrollLeft;
  });
  window.addEventListener('mouseup', ()=>{
    isDown = false; skillsScroller.classList.remove('dragging');
  });
  skillsScroller.addEventListener('mouseleave', ()=>{ isDown = false; skillsScroller.classList.remove('dragging'); });
  skillsScroller.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - skillsScroller.getBoundingClientRect().left;
    const walk = (x - startX) * 1.5; // drag speed
    skillsScroller.scrollLeft = startScroll - walk;
  });

  // 3) Prev/Next buttons (if you add them in HTML)
  document.querySelectorAll('.scroll-btn[data-scroll="#skills .scroller"]').forEach(btn=>{
    const dir = btn.classList.contains('next') ? 1 : -1;
    btn.addEventListener('click', ()=>{
      skillsScroller.scrollBy({ left: dir * skillsScroller.clientWidth * 0.9, behavior:'smooth' });
    });
  });
})();
