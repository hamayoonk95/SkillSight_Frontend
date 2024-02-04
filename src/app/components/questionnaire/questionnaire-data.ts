export const questionnaireData = [
  {
    stepLabel: 'First Group',
    formGroupName: 'firstGroup',
    questions: [
      {
        label: 'Which of these areas of technology are you most interested in?',
        formControlName: 'question1',
        options: [
          {
            value:
              'Software Developer, Fullstack Developer, Solution/Enterprise Developer',
            display: 'Software Development (General)',
          },
          {
            value: 'Frontend Developer, UX/UI Designer',
            display:
              'Frontend Technologies (e.g., HTML, CSS, JavaScript frameworks)',
          },
          {
            value: 'Backend Developer, DBA',
            display:
              'Backend Technologies (e.g., server-side programming, databases)',
          },
          {
            value: 'Mobile Developer',
            display: 'Mobile Platform Development (e.g., iOS, Android)',
          },
          {
            value: 'Game Developer',
            display: 'Game Development (e.g., Unity, Unreal Engine)',
          },
          {
            value: 'Data Scientist, ML/AI Developer',
            display: 'Data Analysis and Machine Learning',
          },
          {
            value: 'System/Network Engineer, Cloud Architect',
            display: 'Network and System Architecture',
          },
          {
            value: 'Security Engineer',
            display: 'IT Security and Cybersecurity',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display: 'DevOps and Cloud Services',
          },
          {
            value: 'System Admin',
            display: 'System Administration and Maintenance',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Second Group',
    formGroupName: 'secondGroup',
    questions: [
      {
        label:
          'When presented with a technical challenge, how do you prefer to solve it?',
        formControlName: 'question2',
        options: [
          {
            value: 'Frontend Developer, UX/UI Designer, Game Developer',
            display: 'Through creative and innovative solutions',
          },
          {
            value: 'Backend Developer, Data Scientist, ML/AI Developer',
            display: 'By applying algorithmic thinking and data analysis',
          },
          {
            value:
              'Backend Developer, System/Network Engineer, DevOps Engineer',
            display: 'By focusing on system efficiency and robustness',
          },
          {
            value: 'UX/UI Designer, Frontend Developer',
            display: 'By considering user experience and design aesthetics',
          },
          {
            value: 'Security Engineer, System Admin',
            display: 'By ensuring security and data integrity',
          },
          {
            value: 'Cloud Architect, DevOps Engineer',
            display: 'Through cloud solutions and scalable architectures',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Third Group',
    formGroupName: 'thirdGroup',
    questions: [
      {
        label:
          'In a professional setting, what type of work environment do you thrive in?',
        formControlName: 'question3',
        options: [
          {
            value: 'Frontend Developer, UX/UI Designer, Mobile Developer',
            display:
              'A collaborative environment with a focus on user interaction and design',
          },
          {
            value: 'Backend Developer, System/Network Engineer, DBA',
            display:
              'An environment that values structured problem-solving and logical analysis',
          },
          {
            value: 'Fullstack Developer, Game Developer, ML/AI Developer',
            display:
              'A dynamic setting with a focus on new technologies and innovation',
          },
          {
            value: 'Security Engineer, System Admin',
            display:
              'A setting that emphasizes data security and system integrity',
          },
          {
            value: 'DevOps Engineer, Cloud Architect',
            display:
              'An environment with a focus on efficiency, automation, and cloud technologies',
          },
        ],
      },
    ],
  },
  {
    stepLabel: 'Foruth Group',
    formGroupName: '4thGroup',
    questions: [
      {
        label: 'Your friends would describe you as...',
        formControlName: 'question4',
        options: [
          {
            value:
              'Security Engineer, System/Network Engineer, Backend Developer',
            display: 'Skeptical',
          },
          {
            value:
              'UX/UI Designer, Frontend Developer, Solution/Enterprise Developer',
            display: 'Empathetic',
          },
          {
            value: 'Game Developer, UX/UI Designer, Mobile Developer',
            display: 'A Storyteller',
          },
          {
            value:
              'Data Scientist, ML/AI Developer, DevOps Engineer, Fullstack Developer',
            display: 'A Problem-Solver',
          },
          {
            value: 'Cloud Architect, System Admin',
            display: 'A Leader',
          },
        ],
      },
    ],
  },
];
