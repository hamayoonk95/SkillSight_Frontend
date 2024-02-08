export const questionnaireData = [
  {
    stepLabel: 'Interest in Technology Areas',
    formGroupName: 'interestGroup',
    questions: [
      {
        label: 'Which of technical areas interest you the most?',
        formControlName: 'questionInterest',
        options: [
          {
            value: 'UX/UI Designer, Frontend Developer',
            display: 'Designing user interfaces and experiences.',
          },
          {
            value: 'Backend Developer, DBA',
            display: 'Server logic and database management.',
          },
          {
            value: 'Fullstack Developer, Mobile Developer',
            display: 'End-to-end web and app development.',
          },
          {
            value: 'Game Developer',
            display: 'Creating engaging digital games.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Applying technology to analyse data and build intelligent systems.',
          },
          {
            value:
              'DevOps Engineer, System/Network Engineer, Security Engineer',
            display:
              'Enhancing the reliability and efficiency of IT systems and networks.',
          },
          {
            value: 'System Admin, Cloud Architect',
            display: 'System administration and network management.',
          },
          {
            value: 'Software Developer, Solution/Enterprise Developer',
            display: 'Developing enterprise software solutions.',
          },
        ],
      },
    ],
  },

  {
    stepLabel: 'Preferred Project Type',
    formGroupName: 'projectTypeGroup',
    questions: [
      {
        label: 'What type of projects do you prefer working on?',
        formControlName: 'questionProjectType',
        options: [
          {
            value: 'UX/UI Designer, Frontend Developer',
            display: 'User interface and experience design.',
          },
          {
            value: 'Backend Developer, System Admin, DBA',
            display: 'Infrastructure and database solutions.',
          },
          {
            value: 'Fullstack Developer, Solution/Enterprise Developer',
            display: 'Comprehensive software development.',
          },
          {
            value: 'Mobile Developer',
            display: 'Mobile app development.',
          },
          {
            value: 'Game Developer',
            display: 'Game creation and design.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display: 'Data-driven analysis and AI.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display: 'Cloud and DevOps infrastructure.',
          },
          {
            value: 'Security Engineer, System/Network Engineer',
            display: 'Security and network engineering.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Work Environment Preference',
    formGroupName: 'workEnvironmentGroup',
    questions: [
      {
        label: 'Choose your preferred work environment:',
        formControlName: 'questionWorkEnvironment',
        options: [
          {
            value: 'Software Developer, Fullstack Developer, Mobile Developer',
            display:
              'Adaptable startups with a focus on innovation and flexibility.',
          },
          {
            value: 'UX/UI Designer, Game Developer',
            display:
              'Creative studios emphasizing teamwork and artistic expression.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Research and development labs pushing technological boundaries.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect, Security Engineer',
            display:
              'High-tech firms with a fast-paced, cutting-edge environment.',
          },
          {
            value: 'System/Network Engineer, System Admin',
            display:
              'Organized, stable environments with clear processes and stability.',
          },
          {
            value: 'Backend Developer, DBA, Solution/Enterprise Developer',
            display:
              'Enterprise projects prioritizing scalability, security, and performance.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Problem-Solving Approach',
    formGroupName: 'problemSolvingGroup',
    questions: [
      {
        label: 'How do you approach problem-solving?',
        formControlName: 'questionProblemSolving',
        options: [
          {
            value: 'Software Developer, Backend Developer, Fullstack Developer',
            display:
              'Analyzing technical details and creating efficient algorithms.',
          },
          {
            value: 'UX/UI Designer, Frontend Developer',
            display: 'Focusing on user feedback to guide design improvements.',
          },
          {
            value: 'Mobile Developer, Game Developer',
            display:
              'Iterative testing and prototyping for engaging user experiences.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Leveraging data insights and machine learning models for solutions.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'Automating processes and optimising cloud-based solutions for scalability.',
          },
          {
            value: 'Security Engineer, System/Network Engineer',
            display:
              'Implementing robust security measures and network configurations.',
          },
          {
            value: 'System Admin, DBA',
            display:
              'Maintaining system reliability and database integrity under load.',
          },
          {
            value: 'Solution/Enterprise Developer',
            display:
              'Developing strategic solutions to meet business objectives efficiently.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Collaboration and Team Dynamics',
    formGroupName: 'collaborationGroup',
    questions: [
      {
        label: 'How do you prefer to collaborate and interact with your team?',
        formControlName: 'questionCollaboration',
        options: [
          {
            value: 'Software Developer, Backend Developer, Fullstack Developer',
            display:
              'Working closely in small, agile teams to rapidly iterate solutions.',
          },
          {
            value: 'UX/UI Designer, Frontend Developer',
            display:
              'Engaging in creative brainstorming and user-centric design discussions.',
          },
          {
            value: 'Mobile Developer, Game Developer',
            display:
              'Collaborating in cross-functional teams for diverse perspectives.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Sharing insights and models in a data-driven, research-oriented environment.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'Facilitating seamless development and operations through automation tools.',
          },
          {
            value: 'Security Engineer, System/Network Engineer',
            display:
              'Ensuring system integrity and security through proactive communication.',
          },
          {
            value: 'System Admin, DBA',
            display:
              'Providing backend support and ensuring smooth system operations.',
          },
          {
            value: 'Solution/Enterprise Developer',
            display:
              'Strategising and developing solutions with a focus on business goals.',
          },
        ],
      },
    ],
  },

  {
    stepLabel: 'Innovation and Creativity',
    formGroupName: 'innovationCreativityGroup',
    questions: [
      {
        label: 'How do you engage with innovation and creativity in your work?',
        formControlName: 'questionInnovationCreativity',
        options: [
          {
            value: 'Software Developer, Fullstack Developer',
            display:
              'Developing new software solutions with cutting-edge technologies.',
          },
          {
            value: 'UX/UI Designer, Frontend Developer',
            display:
              'Designing intuitive, aesthetically pleasing user interfaces.',
          },
          {
            value: 'Mobile Developer, Game Developer',
            display:
              'Creating unique, immersive experiences for mobile and gaming platforms.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Innovating with data models to uncover insights and trends.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'Automating and optimizing infrastructure for scalability and performance.',
          },
          {
            value: 'Security Engineer, System/Network Engineer',
            display:
              'Enhancing security measures and network designs for robustness.',
          },
          {
            value: 'DBA, System Admin',
            display:
              'Streamlining database and system management for efficiency.',
          },
          {
            value: 'Solution/Enterprise Developer',
            display:
              'Strategizing business solutions with innovative tech applications.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Technical Skills and Tools',
    formGroupName: 'technicalSkillsGroup',
    questions: [
      {
        label:
          'Which technical skills and tools are you most experienced with?',
        formControlName: 'questionTechnicalSkills',
        options: [
          {
            value: 'Software Developer, Frontend Developer',
            display: 'JavaScript, HTML/CSS, React, Angular, Vue.js',
          },
          {
            value: 'Backend Developer, Fullstack Developer',
            display: 'Node.js, Express, Django, Ruby on Rails, ASP.NET',
          },
          {
            value: 'Mobile Developer',
            display: 'Swift, Kotlin, Flutter, React Native, Xamarin',
          },
          {
            value: 'Game Developer',
            display: 'Unity, Unreal Engine, C++, C#, OpenGL, DirectX',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display: 'Python, R, TensorFlow, PyTorch, scikit-learn',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display: 'Docker, Kubernetes, AWS, Azure, Google Cloud Platform',
          },
          {
            value: 'System/Network Engineer',
            display: 'Cisco, Juniper, TCP/IP, VPN, Firewalls',
          },
          {
            value: 'Security Engineer',
            display: 'Penetration Testing, IDS/IPS, SIEM, Encryption',
          },
          {
            value: 'DBA',
            display: 'SQL, MySQL, PostgreSQL, MongoDB, Database Optimization',
          },
          {
            value: 'UX/UI Designer',
            display: 'Adobe XD, Sketch, Figma, InVision, User Research',
          },
          {
            value: 'System Admin',
            display: 'Linux, Windows Server, Active Directory, PowerShell',
          },
          {
            value: 'Cloud Architect, Solution/Enterprise Developer',
            display: 'Microservices, RESTful APIs, Serverless Computing, CI/CD',
          },
        ],
      },
    ],
  },

  {
    stepLabel: 'Learning Preferences',
    formGroupName: 'professionalDevelopmentGroup',
    questions: [
      {
        label: 'How do you prioritise professional development and learning?',
        formControlName: 'questionProfessionalDevelopment',
        options: [
          {
            value:
              'Software Developer, Frontend Developer, Backend Developer, Fullstack Developer',
            display:
              'Participating in coding bootcamps, online courses, and tech meetups.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Attending data science conferences, workshops, and research seminars.',
          },
          {
            value: 'Game Developer, UX/UI Designer',
            display:
              'Exploring new design trends, attending game development conferences.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'Obtaining cloud certifications, staying updated on DevOps best practices.',
          },
          {
            value: 'System/Network Engineer, System Admin',
            display:
              'Participating in ITIL training, pursuing networking certifications.',
          },
          {
            value: 'Mobile Developer, Frontend Developer',
            display:
              'Experimenting with new mobile frameworks, attending frontend workshops.',
          },
          {
            value: 'Solution/Enterprise Developer',
            display:
              'Engaging in business analysis courses, pursuing project management certifications.',
          },
          {
            value: 'Security Engineer',
            display:
              'Studying cybersecurity journals, obtaining security certifications.',
          },
          {
            value: 'DBA',
            display:
              'Enrolling in database management courses, attending DBA conferences.',
          },
          {
            value: 'Cloud Architect, Solution/Enterprise Developer',
            display:
              'Participating in cloud architecture workshops, obtaining AWS/Azure certifications.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Industry or Sector Preference',
    formGroupName: 'industryPreferenceGroup',
    questions: [
      {
        label: 'In which industry or sector would you prefer to work?',
        formControlName: 'questionIndustryPreference',
        options: [
          {
            value:
              'Software Developer, Frontend Developer, Backend Developer, Fullstack Developer',
            display:
              'Technology industry: Software companies, IT consulting firms.',
          },
          {
            value: 'Game Developer',
            display:
              'Gaming industry: Video game studios, mobile game development.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display: 'Data industry: Data analytics firms, AI startups.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display: 'Cloud industry: Cloud service providers, SaaS companies.',
          },
          {
            value: 'System/Network Engineer, System Admin',
            display:
              'Telecommunications industry: Internet service providers, network infrastructure firms.',
          },
          {
            value: 'Mobile Developer, UX/UI Designer',
            display:
              'Mobile industry: Mobile app development agencies, mobile device manufacturers.',
          },
          {
            value: 'Solution/Enterprise Developer',
            display:
              'Enterprise sector: Corporate IT departments, business software vendors.',
          },
          {
            value: 'Security Engineer',
            display:
              'Cybersecurity industry: Security consulting firms, cybersecurity startups.',
          },
          {
            value: 'DBA',
            display:
              'Finance industry: Banks, financial institutions, fintech companies.',
          },
          {
            value: 'Cloud Architect, Solution/Enterprise Developer',
            display:
              'E-commerce sector: Online retail companies, e-commerce platforms.',
          },
          {
            value: 'UX/UI Designer',
            display: 'Design industry: Design agencies, product design firms.',
          },
          {
            value: 'System Admin',
            display:
              'Healthcare sector: Hospitals, healthcare IT providers, medical research institutions.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Work-Life Balance',
    formGroupName: 'workLifeBalanceGroup',
    questions: [
      {
        label: 'How important is work-life balance to you?',
        formControlName: 'questionWorkLifeBalance',
        options: [
          {
            value:
              'Software Developer, Frontend Developer, Backend Developer, Fullstack Developer',
            display:
              'Extremely important: Seeking flexible work arrangements and remote work options.',
          },
          {
            value: 'Game Developer, Mobile Developer',
            display:
              'Very important: Valuing a healthy balance between work and personal life.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Moderately important: Balancing work commitments with personal interests and hobbies.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'Slightly important: Focusing on career advancement while maintaining a reasonable work-life balance.',
          },
          {
            value: 'System/Network Engineer, System Admin',
            display:
              'Not very important: Prioritizing professional responsibilities over personal time.',
          },
          {
            value: 'Security Engineer, DBA',
            display:
              'Not important at all: Fully dedicating to work-related tasks without considering work-life balance.',
          },
          {
            value: 'UX/UI Designer, Solution/Enterprise Developer',
            display:
              'Prefer not to answer: Deeming work-life balance preferences as a personal matter.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Career Goals',
    formGroupName: 'careerGoalsGroup',
    questions: [
      {
        label: 'What are your long-term career goals in the tech industry?',
        formControlName: 'questionCareerGoals',
        options: [
          {
            value:
              'Software Developer, Frontend Developer, Backend Developer, Fullstack Developer',
            display:
              'Mastering multiple tech stacks and contributing to open-source projects.',
          },
          {
            value: 'Game Developer, UX/UI Designer',
            display: 'Creating engaging, user-centric applications and games.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Advancing the field of AI and machine learning through research and development.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'Leading the design and architecture of innovative tech solutions.',
          },
          {
            value: 'System/Network Engineer, System Admin',
            display:
              'Managing large-scale networks and ensuring system reliability and efficiency.',
          },
          {
            value: 'Mobile Developer, Frontend Developer',
            display:
              'Specializing in cutting-edge mobile/front-end technologies and frameworks.',
          },
          {
            value: 'DBA',
            display:
              'Optimizing and managing complex databases for high performance.',
          },
          {
            value: 'Security Engineer, DevOps Engineer',
            display:
              'Enhancing cybersecurity and developing secure, scalable infrastructure.',
          },
          {
            value: 'Cloud Architect',
            display:
              'Leading cloud computing initiatives and shaping the future of cloud technology.',
          },
          {
            value: 'Solution/Enterprise Developer',
            display:
              'Designing comprehensive solutions to complex business problems.',
          },
          {
            value: 'UX/UI Designer, Solution/Enterprise Developer',
            display:
              'Innovating in product design and contributing to enterprise software development.',
          },
          {
            value: 'System Admin',
            display:
              'Managing critical IT systems and ensuring seamless operations.',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Risk Tolerance',
    formGroupName: 'riskToleranceGroup',
    questions: [
      {
        label:
          'How would you describe your tolerance for risk in your professional endeavors?',
        formControlName: 'questionRiskTolerance',
        options: [
          {
            value:
              'Software Developer, Frontend Developer, Backend Developer, Fullstack Developer',
            display:
              'Low risk tolerance: Preferring stability and predictability in work projects.',
          },
          {
            value: 'System/Network Engineer, System Admin, Security Engineer',
            display:
              'Moderate risk tolerance: Open to calculated risks that align with career goals.',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display:
              'Medium risk tolerance: Willing to take moderate risks for potential innovation and growth.',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'High risk tolerance: Embracing uncertainty and disruption for transformative opportunities.',
          },
          {
            value: 'DBA, Mobile Developer',
            display:
              'Very high risk tolerance: Thriving in dynamic environments with high levels of uncertainty.',
          },
          {
            value:
              'UX/UI Designer, Game Developer, Solution/Enterprise Developer',
            display:
              'Extremely high risk tolerance: Seeking out bold challenges and groundbreaking initiatives.',
          },
        ],
      },
    ],
  },
];
