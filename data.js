// Shared data for projects and jobs. Update paths, text, and links as you like.
// Place images here (create folders): assets/screenshots/*  and  assets/logos/*


const DETAILS = {
    project: {
      taskflow: {
        title: 'TaskFlow — Task Management Web App',
        image: 'assets/screenshots/taskflow.png',
        logo: 'assets/logos/taskflow.png',
        tags: ['Full-Stack','Productivity'],
        languages: ['JavaScript'],
        skills: ['Node.js','Express','MongoDB','Auth','Responsive UI'],
        description: [
          'Full-stack app to create, edit, and track tasks with deadlines.',
          'Implemented user authentication, CRUD operations, and MongoDB storage.',
          'Designed a clean, responsive interface focused on speed and clarity.'
        ],
        links: [
          {label:'Code', href:'https://github.com/jayu2236j'},
          {label:'Live Demo', href:'#'}
        ]
      },
      weather: {
        title: 'Weather App — Live Weather Viewer',
        image: 'assets/screenshots/weather.png',
        logo: 'assets/logos/weather.png',
        tags: ['Frontend','API'],
        languages: ['HTML','CSS','JavaScript'],
        skills: ['REST API','Fetch','UI/UX','Deployment'],
        description: [
          'Displays real-time weather by city using a public API.',
          'Focuses on clean UI, loading/error states, and deployment workflow.'
        ],
        links: [
          {label:'Code', href:'https://github.com/jayu2236j'},
          {label:'Live Demo', href:'#'}
        ]
      },
      financetracker: {
        title: 'Personal Finance Tracker (Planned)',
        image: 'assets/screenshots/finance.png',
        logo: 'assets/logos/finance.png',
        tags: ['Full-Stack','Analytics'],
        languages: ['JavaScript'],
        skills: ['PostgreSQL','Express','Charts','CRUD'],
        description: [
          'Track expenses, categories, and goals with a clean UX.',
          'Focus on CRUD, basic analytics, and chart visualizations.'
        ],
        links: []
      }
    },
    job: {
      starbucks: {
        title: 'Barista — Starbucks',
        logo: 'assets/logos/starbucks.jpeg',
        tags: ['Customer Service','POS','Teamwork'],
        description: [
          'Provided excellent customer service and maintained a welcoming environment.',
          'Prepared and customized drinks efficiently while meeting quality standards.',
          'Handled cash, mobile, and card payments accurately.',
          'Supported team operations during peak hours by coordinating tasks and inventory.'
        ]
      },
      timhortons: {
        title: 'Team Lead — Tim Hortons',
        logo: 'assets/logos/tims.png',
        tags: ['Leadership','Operations','Training'],
        description: [
          'Led and coached a team of 10+ to achieve high efficiency under pressure.',
          'Optimized workflow and scheduling; trained new staff for faster onboarding.',
          'Resolved operational issues quickly to maintain speed and quality.'
        ]
      },
      seineriver: {
        title: 'Dietary Aide — Seine River Retirement',
        logo: 'assets/logos/dietaryaid.webp',
        tags: ['Compliance','Teamwork','Care'],
        description: [
          'Delivered meals according to residents’ dietary requirements and safety standards.',
          'Coordinated with kitchen staff for accuracy and timeliness.',
          'Assisted residents and supported a clean, safe food service environment.'
        ]
      },
      pizzapizza: {
        title: 'Shift Supervisor  — Pizza Pizza',
        logo: 'assets/logos/pizza.png',
        tags: ['Compliance','Teamwork','Leadership'],
        description: [
          "Ran fast-paced dinner and late-night shifts, coordinating cooks, cash, and delivery orders to keep wait-times low and accuracy high.",
    "Trained new staff on POS, food-safety (HACCP), portioning, and upselling best practices.",
    "Balanced tills and completed end-of-day paperwork, including deposits and variance checks.",
    "Managed online/phone orders and prioritized the make-line to hit on-time delivery targets.",
    "Resolved customer issues on the spot and protected reviews through quick, fair solutions."
  ]
        
      }
    }
  };
// ===== Certificates (Coursera → Google AI Essentials) =====
// export const certificates = [
//   {
//     title: "Discover the Art of Prompting",
//     issuer: "Google on Coursera",
//     date: "Oct 11, 2025",
//     link: "https://coursera.org/verify/1GLUIOQ55WG8",
//     image: "assets/logos/Certificates/Coursera 1GLUIOQ55WG8.pdf"
//   },
//   {
//     title: "Use AI Responsibly",
//     issuer: "Google on Coursera",
//     date: "Oct 12, 2025",
//     link: "https://coursera.org/verify/9OF3A5Y20V35",
//     image: "assets/logos/Certificates/Coursera 9OF3A5Y20V35.pdf"
//   },
//   {
//     title: "Maximize Productivity With AI Tools",
//     issuer: "Google on Coursera",
//     date: "Oct 10, 2025",
//     link: "https://coursera.org/verify/U3RXL1VQZ0OM",
//     image: "assets/logos/Certificates/Coursera U3RXL1VQZ0OM.pdf"
//   },
//   {
//     title: "Introduction to AI",
//     issuer: "Google on Coursera",
//     date: "Oct 10, 2025",
//     link: "https://coursera.org/verify/ZRD2ZEVGF2BI",
//     image: "assets/logos/Certificates/Coursera ZRD2ZEVGF2BI.pdf"
//   },
//   // Optional: show what’s next
//   {
//     title: "AWS Cloud Practitioner (in progress)",
//     issuer: "AWS",
//     date: "Pending",
//     link: "",
//     image: "",
//     pending: true
//   }
// ];
/* ===== Certificates Data =====
   Each main certificate has an id and a list of subcerts.
   Replace the sample titles/links with your real ones. */

   // ===== Certificates Data =====
const CERTIFICATES = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials — Main Certificate",
    issuer: "Google",
    year: "2025",
    credentialUrl: "https://coursera.org/verify/MAIN-CERT-ID", // replace
    summary: "Practical AI foundations: prompts, ML basics, responsible AI, and real workflows.",
    subcerts: [
      { title: "Foundations of AI", credentialUrl: "https://coursera.org/verify/SUB-1" },
      { title: "Prompting & Responsible AI", credentialUrl: "https://coursera.org/verify/SUB-2" },
      { title: "AI in Workplace Tools", credentialUrl: "https://coursera.org/verify/SUB-3" },
      { title: "Intro to Machine Learning", credentialUrl: "https://coursera.org/verify/SUB-4" },
      { title: "Capstone / Practical Project", credentialUrl: "https://coursera.org/verify/SUB-5" }
    ]
  }
];

  
 