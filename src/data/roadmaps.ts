import { ProgrammingLanguage } from '../types/roadmap';

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    description: 'Versatile, beginner-friendly language perfect for web development, data science, and automation.',
    icon: '🐍',
    color: 'from-blue-500 to-green-500',
    difficulty: 'Beginner Friendly',
    weeks: [
      {
        week: 1,
        title: 'Introduction to Programming & Python Basics',
        description: 'Learn what programming is, set up Python environment, and understand basic syntax.',
        resources: [
          {
            title: 'Python for Everybody - Getting Started',
            url: 'https://www.youtube.com/watch?v=8DvywoWv6fI',
            type: 'video',
            duration: '13 min'
          },
          {
            title: 'Python Official Tutorial',
            url: 'https://docs.python.org/3/tutorial/',
            type: 'documentation'
          },
          {
            title: 'Python.org Beginner\'s Guide',
            url: 'https://www.python.org/about/gettingstarted/',
            type: 'website'
          }
        ],
        projects: [
          {
            title: 'Hello World Program',
            description: 'Write your first Python program that prints a personalized greeting.',
            difficulty: 'easy'
          },
          {
            title: 'Simple Calculator',
            description: 'Create a basic calculator that performs addition, subtraction, multiplication, and division.',
            difficulty: 'easy'
          }
        ]
      },
      {
        week: 2,
        title: 'Variables, Data Types & Basic Operations',
        description: 'Master Python\'s core data types including strings, numbers, booleans, and basic operations.',
        resources: [
          {
            title: 'Python Variables and Data Types',
            url: 'https://www.youtube.com/watch?v=OH86oLzVzzw',
            type: 'video',
            duration: '20 min'
          },
          {
            title: 'Built-in Types Documentation',
            url: 'https://docs.python.org/3/library/stdtypes.html',
            type: 'documentation'
          },
          {
            title: 'Real Python - Basic Data Types',
            url: 'https://realpython.com/python-data-types/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Personal Information Collector',
            description: 'Build a program that collects and displays user information using different data types.',
            difficulty: 'easy'
          },
          {
            title: 'Unit Converter',
            description: 'Create converters for temperature, distance, or weight measurements.',
            difficulty: 'medium'
          }
        ]
      },
      {
        week: 3,
        title: 'Control Flow: Conditionals & Decision Making',
        description: 'Learn if/else statements, comparison operators, and logical operators for decision-making in programs.',
        resources: [
          {
            title: 'Python If Else and Elif Statements',
            url: 'https://www.youtube.com/watch?v=f79MRyMsjrQ',
            type: 'video',
            duration: '15 min'
          },
          {
            title: 'More Control Flow Tools',
            url: 'https://docs.python.org/3/tutorial/controlflow.html',
            type: 'documentation'
          },
          {
            title: 'Automate the Boring Stuff - Flow Control',
            url: 'https://automatetheboringstuff.com/2e/chapter2/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Number Guessing Game',
            description: 'Create a game where the computer picks a random number and the user tries to guess it.',
            difficulty: 'medium'
          },
          {
            title: 'Grade Calculator',
            description: 'Build a program that determines letter grades based on numerical scores.',
            difficulty: 'easy'
          }
        ]
      },
      {
        week: 4,
        title: 'Loops: Repetition and Iteration',
        description: 'Master for and while loops to handle repetitive tasks and iterate through data.',
        resources: [
          {
            title: 'Python Loops Tutorial',
            url: 'https://www.youtube.com/watch?v=6iF8Xb7Z3wQ',
            type: 'video',
            duration: '25 min'
          },
          {
            title: 'Python Loops Documentation',
            url: 'https://docs.python.org/3/tutorial/controlflow.html#for-statements',
            type: 'documentation'
          },
          {
            title: 'Real Python - Python Loops',
            url: 'https://realpython.com/python-for-loop/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Multiplication Table Generator',
            description: 'Create a program that generates multiplication tables for any number.',
            difficulty: 'easy'
          },
          {
            title: 'Password Strength Checker',
            description: 'Build a tool that evaluates password strength based on various criteria.',
            difficulty: 'medium'
          }
        ]
      },
      {
        week: 5,
        title: 'Data Structures: Lists and Tuples',
        description: 'Learn to work with collections of data using Python\'s list and tuple data structures.',
        resources: [
          {
            title: 'Python Lists Tutorial',
            url: 'https://www.youtube.com/watch?v=ohCC5YGbTfg',
            type: 'video',
            duration: '30 min'
          },
          {
            title: 'Data Structures Documentation',
            url: 'https://docs.python.org/3/tutorial/datastructures.html',
            type: 'documentation'
          },
          {
            title: 'Real Python - Lists and Tuples',
            url: 'https://realpython.com/python-lists-tuples/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'To-Do List Manager',
            description: 'Create a simple to-do list application that can add, remove, and display tasks.',
            difficulty: 'medium'
          },
          {
            title: 'Shopping Cart Calculator',
            description: 'Build a program that manages a shopping cart and calculates total prices.',
            difficulty: 'medium'
          }
        ]
      },
      {
        week: 6,
        title: 'Data Structures: Dictionaries and Sets',
        description: 'Explore dictionaries for key-value storage and sets for unique collections.',
        resources: [
          {
            title: 'Python Dictionaries Tutorial',
            url: 'https://www.youtube.com/watch?v=daefaLgNkw0',
            type: 'video',
            duration: '20 min'
          },
          {
            title: 'Dictionaries Documentation',
            url: 'https://docs.python.org/3/tutorial/datastructures.html#dictionaries',
            type: 'documentation'
          },
          {
            title: 'Real Python - Dictionaries',
            url: 'https://realpython.com/python-dicts/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Student Grade Book',
            description: 'Create a grade book system that stores and manages student information and grades.',
            difficulty: 'medium'
          },
          {
            title: 'Word Frequency Counter',
            description: 'Build a program that counts word frequencies in a given text.',
            difficulty: 'medium'
          }
        ]
      },
      {
        week: 7,
        title: 'Functions: Code Organization and Reusability',
        description: 'Learn to create functions to organize code, avoid repetition, and improve maintainability.',
        resources: [
          {
            title: 'Python Functions Tutorial',
            url: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
            type: 'video',
            duration: '35 min'
          },
          {
            title: 'Defining Functions',
            url: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions',
            type: 'documentation'
          },
          {
            title: 'Real Python - Functions',
            url: 'https://realpython.com/defining-your-own-python-function/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Math Utility Library',
            description: 'Create a collection of useful mathematical functions (factorial, prime check, etc.).',
            difficulty: 'medium'
          },
          {
            title: 'Text Processor',
            description: 'Build functions that manipulate text (reverse, count vowels, capitalize words).',
            difficulty: 'easy'
          }
        ]
      },
      {
        week: 8,
        title: 'File Handling: Reading and Writing Data',
        description: 'Master file operations to read from and write to files for data persistence.',
        resources: [
          {
            title: 'Python File Handling Tutorial',
            url: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM',
            type: 'video',
            duration: '25 min'
          },
          {
            title: 'Reading and Writing Files',
            url: 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files',
            type: 'documentation'
          },
          {
            title: 'Automate the Boring Stuff - Files',
            url: 'https://automatetheboringstuff.com/2e/chapter9/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Contact Book',
            description: 'Create a contact management system that saves and loads contact information from files.',
            difficulty: 'medium'
          },
          {
            title: 'Log File Analyzer',
            description: 'Build a program that reads and analyzes log files for specific patterns.',
            difficulty: 'hard'
          }
        ]
      },
      // Continue with remaining weeks...
      {
        week: 9,
        title: 'Error Handling and Debugging',
        description: 'Learn to handle errors gracefully and debug your programs effectively.',
        resources: [
          {
            title: 'Python Exception Handling',
            url: 'https://www.youtube.com/watch?v=NIWwJbo-9_8',
            type: 'video',
            duration: '20 min'
          },
          {
            title: 'Errors and Exceptions',
            url: 'https://docs.python.org/3/tutorial/errors.html',
            type: 'documentation'
          },
          {
            title: 'Real Python - Exception Handling',
            url: 'https://realpython.com/python-exceptions/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Robust Calculator',
            description: 'Enhance your calculator with proper error handling for invalid inputs.',
            difficulty: 'medium'
          },
          {
            title: 'File Backup Tool',
            description: 'Create a tool that safely backs up files with error recovery.',
            difficulty: 'hard'
          }
        ]
      },
      {
        week: 10,
        title: 'Object-Oriented Programming Basics',
        description: 'Introduction to classes, objects, and the fundamentals of OOP in Python.',
        resources: [
          {
            title: 'Python OOP Tutorial',
            url: 'https://www.youtube.com/watch?v=JeznW_7DlB0',
            type: 'video',
            duration: '45 min'
          },
          {
            title: 'Classes Documentation',
            url: 'https://docs.python.org/3/tutorial/classes.html',
            type: 'documentation'
          },
          {
            title: 'Real Python - OOP',
            url: 'https://realpython.com/python3-object-oriented-programming/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Bank Account Simulator',
            description: 'Create a class-based bank account system with deposits, withdrawals, and balance tracking.',
            difficulty: 'medium'
          },
          {
            title: 'Simple Game Character',
            description: 'Design a character class for a simple game with attributes and methods.',
            difficulty: 'medium'
          }
        ]
      },
      // Weeks 11-24 would continue with advanced topics...
      {
        week: 24,
        title: 'Final Project and Portfolio Preparation',
        description: 'Complete your capstone project and prepare your programming portfolio.',
        resources: [
          {
            title: 'Building a Python Portfolio',
            url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            type: 'video',
            duration: '30 min'
          },
          {
            title: 'GitHub Portfolio Guide',
            url: 'https://docs.github.com/en/github/creating-cloning-and-archiving-repositories',
            type: 'documentation'
          },
          {
            title: 'Real Python - Portfolio Projects',
            url: 'https://realpython.com/python-portfolio/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Portfolio Website',
            description: 'Create a personal website showcasing your Python projects and skills.',
            difficulty: 'hard'
          },
          {
            title: 'Code Review Session',
            description: 'Review and refactor your previous projects with best practices.',
            difficulty: 'medium'
          }
        ]
      }
    ],
    capstoneProject: {
      title: 'Task Management Web Application',
      description: 'Build a full-featured task management application with user authentication, database integration, and a web interface.',
      features: [
        'User registration and authentication',
        'Create, edit, and delete tasks',
        'Task categorization and priority levels',
        'Due date reminders and notifications',
        'Progress tracking and statistics',
        'Export tasks to different formats',
        'Responsive web interface',
        'RESTful API design'
      ],
      technologies: ['Python', 'Flask/Django', 'SQLite/PostgreSQL', 'HTML/CSS/JavaScript', 'Bootstrap/Tailwind CSS'],
      estimatedTime: '3-4 weeks'
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'The language of the web, essential for front-end development and increasingly popular for back-end.',
    icon: '⚡',
    color: 'from-yellow-400 to-orange-500',
    difficulty: 'Beginner Friendly',
    weeks: [
      // JavaScript roadmap would be similar structure...
      {
        week: 1,
        title: 'JavaScript Fundamentals & Setup',
        description: 'Learn JavaScript basics, syntax, and set up your development environment.',
        resources: [
          {
            title: 'JavaScript Crash Course',
            url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c',
            type: 'video',
            duration: '1.5 hours'
          },
          {
            title: 'MDN JavaScript Guide',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            type: 'documentation'
          },
          {
            title: 'JavaScript.info',
            url: 'https://javascript.info/',
            type: 'tutorial'
          }
        ],
        projects: [
          {
            title: 'Interactive Greeting',
            description: 'Create a webpage that greets users with their name and current time.',
            difficulty: 'easy'
          },
          {
            title: 'Simple Calculator',
            description: 'Build a basic calculator using HTML, CSS, and JavaScript.',
            difficulty: 'medium'
          }
        ]
      }
      // ... more weeks would follow
    ],
    capstoneProject: {
      title: 'Social Media Dashboard',
      description: 'Create a comprehensive social media dashboard with real-time updates, user interactions, and data visualization.',
      features: [
        'User authentication and profiles',
        'Real-time post creation and updates',
        'Like, comment, and share functionality',
        'Friend/follower system',
        'Image and video upload',
        'Data visualization charts',
        'Responsive design',
        'Progressive Web App features'
      ],
      technologies: ['JavaScript', 'React/Vue', 'Node.js', 'Express', 'MongoDB/Firebase', 'Socket.io', 'Chart.js'],
      estimatedTime: '4-5 weeks'
    }
  }
];