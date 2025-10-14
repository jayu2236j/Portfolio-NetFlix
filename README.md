Jay Champaneri — Portfolio (Netflix-style)
Live: https://jayu2236j.github.io/Portfolio-NetFlix/
A simple, fast, static portfolio inspired by Netflix rows. Built with HTML + CSS + vanilla JS.
Cards open detail pages, and content is driven by one data file.
📁 Project Structure
index.html          # Home
styles.css          # Global styles (dark Netflix look)
data.js             # All content (projects, jobs, certificates)
script.js           # Small UX helpers (year, row scroll, etc.)
nav.js              # Card click → open detail page
project.html        # Project detail template
project.js          # Renders project by ?id=
job.html            # Job detail template
job.js              # Renders job by ?id=
certificates.html   # Main certificate page (lists sub-certs)
certificates.js     # Renders certificate + sub-certs by ?id=
assets/
  logos/            # Company logos & icons
  screenshots/      # Project screenshots
  me/               # Personal photo (avatar)
🧩 Editing Content
All content lives in data.js.
Projects
window.DETAILS.project.taskflow = {
  title: "TaskFlow — Task Management Web App",
  image: "assets/screenshots/taskflow.png",
  tags: ["Full-Stack","Productivity"],
  languages: ["JavaScript"],
  skills: ["Node.js","Express","MongoDB","Auth","Responsive UI"],
  description: [
    "Full-stack app to create, edit, and track tasks with deadlines.",
    "Implemented authentication, CRUD, and MongoDB storage."
  ],
  links: [{ label: "Code", href: "https://github.com/..." }]
}
Jobs
window.DETAILS.job.timhortons = {
  title: "Team Lead — Tim Hortons",
  logo: "assets/logos/tims.png",
  tags: ["Leadership","Operations","Training"],
  description: [
    "Led and coached a team of 10+ in a fast-paced environment.",
    "Optimized workflow and trained new staff."
  ]
}
Certificates (Main + Sub-certificates)
window.CERTIFICATES = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials — Main Certificate",
    issuer: "Google",
    year: "2025",
    credentialUrl: "https://coursera.org/verify/YOUR-MAIN-ID",
    summary: "Prompts, ML basics, responsible AI, and real workflows.",
    subcerts: [
      { title: "Discover the Art of Prompting",      credentialUrl: "https://coursera.org/verify/..." },
      { title: "Use AI Responsibly",                 credentialUrl: "https://coursera.org/verify/..." },
      { title: "Maximize Productivity With AI Tools",credentialUrl: "https://coursera.org/verify/..." },
      { title: "Introduction to AI",                 credentialUrl: "https://coursera.org/verify/..." },
      { title: "Capstone / Practical Project",       credentialUrl: "https://coursera.org/verify/..." }
    ]
  }
];
The home page shows each main certificate as a card.
Clicking View details opens certificates.html?id=the-id which lists the sub-certs with links.
🖼️ Adding Your Photo (optional)
Place an image at assets/me/jay.webp (or jay.jpg).
In index.html, the About panel uses:
<img class="avatar" src="assets/me/jay.webp" alt="Jay Champaneri — Computer Science student">
🛠️ Run Locally
No build step required — it’s a static site.
Open index.html directly in a browser or use VS Code Live Server.
🚀 Deploy (GitHub Pages)
Push to GitHub.
Repo → Settings → Pages → Deploy from a branch → main and root (/).
Your site will be at: https://<username>.github.io/Portfolio-NetFlix/
Troubleshooting
404 on details page? Make sure project.html, job.html, and certificates.html are in the repo root.
Case matters: Assets/ vs assets/ will break on GitHub Pages.
If Actions is stuck, set Settings → Actions → Workflow permissions → Read and write and re-run.
✅ To-do / Ideas
Add LinkedIn button in Contact
Add favicon and Open Graph meta tags for nice link previews
Optional printable resume link
More projects with live demos
✨ Credits
Designed & built by Jay Champaneri.
Tech: HTML, CSS, JavaScript (no frameworks).