// data.js
// Shared data for projects and jobs. Update paths, text, and links as you like.
// Place images here: assets/screenshots/*  and  assets/logos/*

window.DETAILS = {
  project: {
    AWS: {
      title: 'AWS',
      image: 'assets/logos/AWS.jpg.webp',
      logo: 'assets/logos/hq720.jpg',
      tags: ['Research','Cloud'],
      languages: ['English'],
      skills: ['Research','UpToDate','Cloud'],
      description: [
        'Executive Summary',
        'Timeline of Event',
        'Root Cause Analysis',
        'Impact Assessment',
        'Lessons Learned and Recommendations',
        'Conclusion',
        'References'
      ],
      links: [
        {label:'References[Main]', href:'https://www.tomsguide.com/news/live/amazon-outage-october-2025'},
        {label:'Case Study', href:'https://docs.google.com/document/d/10Fm0rs_BQXq_D6HccYQAK8fWW9GIPcFS_Vd5FD-view/edit?usp=sharing'}
      ]
    },
    Atlas: {
      title: 'Atlas',
      image: 'assets/logos/108402_openai-unveils-google-rival-with-chatgpt-atlas-new-web-browser.jpg',
      logo: 'assets/logos/hq720.jpg',
      tags: ['Research','AI','Browser'],
      languages: ['English'],
      skills: ['Research','UpToDate','AI'],
      description: [
      'Executive Summary',
       'Background and Context',
       'Key Features and Innovations',
       'Technical Overview',
       'Advantages and Disadvantages',
       'Reviews and Reactionn',
       'Conclusion',
       'References'

      ],
      links: [
        {label:'References[Main]', href:'https://www.tomsguide.com/ai/chatgpt/chatgpt-atlas-browser-is-live-heres-the-top-7-features-that-make-it-different'},
        {label:'Case Study', href:'https://docs.google.com/document/d/1lNOKNx65zVQg_sohogjEH5Dqwhjl7WoAK59erxA4wrY/edit?usp=sharing'}
      ]
    },
    taskflow: {
      title: 'TaskFlow — Task Management Web App',
      image: 'assets/logos/MERN.jpeg',
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
      image: 'assets/logos/Weather.jpg',
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
      image: 'assets/logos/images.png',
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

// ===== Certificates (main + sub-certificates) =====
window.CERTIFICATES = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials — Main Certificate",
    issuer: "Google",
    year: "2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/44E7IXQUJPPR", 
    summary: "Practical AI foundations: prompts, ML basics, responsible AI, and real workflows.",
    subcerts: [
      { title: "Discover the Art of Prompting",       credentialUrl: "https://coursera.org/verify/1GLUIOQ55WG8" },
      { title: "Use AI Responsibly",                   credentialUrl: "https://coursera.org/verify/9OF3A5Y20V35" },
      { title: "Maximize Productivity With AI Tools",  credentialUrl: "https://coursera.org/verify/U3RXL1VQZ0OM" },
      { title: "Introduction to AI",                   credentialUrl: "https://coursera.org/verify/ZRD2ZEVGF2BI" },
      { title: "Stay Ahead of the AI Curve",         credentialUrl: "https://www.coursera.org/account/accomplishments/verify/YNLD1OAD8FIT" } 
    ]
  },
  {
    id: "Google Data Analysis",
    title: "Google Data Analysis with Python Specialization[In Progress]",
    issuer: "Google",
    year: "2025",
    //credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/44E7IXQUJPPR", 
    summary: "Completed a hands-on program covering the full analytics lifecycle: defining business questions, gathering data, cleaning & wrangling, exploratory analysis, visualization, and communicating insights to stakeholders. Worked with real datasets to build dashboards and answer decision-driven questions using Spreadsheets, SQL, R, and Tableau/Looker Studio, with emphasis on reproducibility, data ethics, and clear storytelling.",
    subcerts: [
      { title: "Hello, Python!",       credentialUrl: "https://www.coursera.org/account/accomplishments/verify/CR6OIGBUQ55H" },
      { title: "Functions and Conditional Statment",                   credentialUrl: "https://www.coursera.org/account/accomplishments/records/B0Z5CAKGDIGS" },
      { title: "Loops and Strings",  credentialUrl: "https://www.coursera.org/account/accomplishments/records/AD6MQODZUMZV" },
      { title: "Data Structures in Python",       credentialUrl: "https://www.coursera.org/account/accomplishments/verify/I2UON24LGZU1"}, 
      { title: "Explore Raw Data",        /* credentialUrl: "https://www.coursera.org/account/accomplishments/verify/YNLD1OAD8FIT"*/},
      { title: "Clean Your Data",                   /*credentialUrl: "https://coursera.org/verify/ZRD2ZEVGF2BI"*/}, 
    ]
  },
  {
    id: "Google Cybersecurity Professional Certificate",
    title: "Google Cybersecurity Professional Certificate[In Progress]",
    issuer: "Google",
    year: "2025",
    //credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/44E7IXQUJPPR", 
    summary: "Completing the Google Cybersecurity Certificate, gaining hands-on skills in cybersecurity tools, threat analysis, risk management, and security best practices to protect systems and data.",
    subcerts: [
      { title: "Foundation of CyberSecurity",       credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/I37EKA0LIYSM" },
      { title: "Play It Safe: Manage Security Risks",                  /* credentialUrl: "https://www.coursera.org/account/accomplishments/records/B0Z5CAKGDIGS"*/ },
      { title: "Connect and Protect: Networks and Network Security.",  /*credentialUrl: "https://www.coursera.org/account/accomplishments/records/AD6MQODZUMZV"*/ },
      { title: "Tools of the Trade: Linux and SQL",       /*credentialUrl: "https://www.coursera.org/account/accomplishments/verify/I2UON24LGZU1"*/}, 
      { title: "Assets, Threats, and Vulnerabilities",        /* credentialUrl: "https://www.coursera.org/account/accomplishments/verify/YNLD1OAD8FIT"*/},
      { title: "Sound the Alarm: Detection and Response ",                   /*credentialUrl: "https://coursera.org/verify/ZRD2ZEVGF2BI"*/}, 
      { title: "Automate Cybersecurity Tasks with Python ",                   /*credentialUrl: "https://coursera.org/verify/ZRD2ZEVGF2BI"*/}, 
      { title: "Put It to Work: Prepare for Cybersecurity Jobs ",                   /*credentialUrl: "https://coursera.org/verify/ZRD2ZEVGF2BI"*/}, 
      { title: "Accelerate Your Job Search with AI ",                   /*credentialUrl: "https://coursera.org/verify/ZRD2ZEVGF2BI"*/}, 

    ]
  }
];
