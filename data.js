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
        logo: 'assets/logos/starbucks.png',
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
        logo: 'assets/logos/timhortons.png',
        tags: ['Leadership','Operations','Training'],
        description: [
          'Led and coached a team of 10+ to achieve high efficiency under pressure.',
          'Optimized workflow and scheduling; trained new staff for faster onboarding.',
          'Resolved operational issues quickly to maintain speed and quality.'
        ]
      },
      seineriver: {
        title: 'Dietary Aide — Seine River Retirement',
        logo: 'assets/logos/seineriver.png',
        tags: ['Compliance','Teamwork','Care'],
        description: [
          'Delivered meals according to residents’ dietary requirements and safety standards.',
          'Coordinated with kitchen staff for accuracy and timeliness.',
          'Assisted residents and supported a clean, safe food service environment.'
        ]
      }
    }
  };
  