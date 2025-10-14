// certificates.js — reads ?id= and renders main+subcerts from CERTIFICATES
(function() {
  function qp(key) {
    const u = new URL(window.location.href);
    return u.searchParams.get(key);
  }

  const id = qp('id');
  const crumb = document.getElementById('crumb-cert-title');
  const hero = document.getElementById('cert-hero');
  const list = document.getElementById('subcert-list');

  if (!window.CERTIFICATES || !Array.isArray(CERTIFICATES)) {
    crumb.textContent = "Not found";
    hero.innerHTML = `<div class="card-body"><h3 class="card-title">Certificates not loaded</h3></div>`;
    return;
  }

  const cert = CERTIFICATES.find(c => c.id === id) || CERTIFICATES[0];
  if (!cert) {
    crumb.textContent = "Not found";
    hero.innerHTML = `<div class="card-body"><h3 class="card-title">Certificate not found</h3></div>`;
    return;
  }

  crumb.textContent = cert.title;

  hero.innerHTML = `
    <div class="card-body" style="padding:1rem 1.25rem">
      <div class="tag">${[cert.issuer, cert.year].filter(Boolean).join(" • ")}</div>
      <h1 class="card-title" style="margin:.25rem 0 .5rem">${cert.title}</h1>
      <p class="card-text">${cert.summary ?? ""}</p>
      ${cert.credentialUrl ? `<a class="btn" href="${cert.credentialUrl}" target="_blank" rel="noopener">View Main Credential</a>` : ""}
    </div>
  `;

  const items = (cert.subcerts || []).map((s, i) => `
    <article class="card" style="padding: .9rem 1rem">
      <div class="tag">#${i+1}</div>
      <h3 style="margin:.35rem 0">${s.title}</h3>
      ${s.credentialUrl
        ? `<p><a class="btn secondary" href="${s.credentialUrl}" target="_blank" rel="noopener">View Credential</a></p>`
        : `<p class="muted">Credential link coming soon</p>`
      }
    </article>
  `).join('');

  list.innerHTML = items || `<div class="muted">No sub-certificates listed yet.</div>`;
})();
