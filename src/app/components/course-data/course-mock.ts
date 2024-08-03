import type { CourseData } from '../../course-data';

export const courseMock: CourseData[] = [
  {
    id: '1',
    title: 'video course 1',
    creationDate: '2024-04-09',
    duration: 55,
    description:
      'Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...)',
    topRated: false,
    authors: ['Konstantin Decker', 'Petr Ivanov'],
  },
  {
    id: '2',
    title: 'video course 2',
    creationDate: '2024-05-03',
    duration: 95,
    description:
      'Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...) Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...)',
    topRated: true,
    authors: ['Konstantin Decker', 'Petr Ivanov'],
  },
  {
    id: '3',
    title:
      'super long title of difficult video course about programming and frontend development for taiga',
    creationDate: '05-09-2024',
    duration: 30,
    description:
      'Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...)',
    topRated: true,
    authors: ['Konstantin Decker', 'Petr Ivanov'],
  },
  {
    id: '4',
    title: 'video course 3',
    creationDate: '2024-05-10',
    duration: 120,
    description:
      'Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...)',
    topRated: false,
    authors: ['Konstantin Decker', 'Petr Ivanov'],
  },
  {
    id: '5',
    title: 'video course 4',
    creationDate: '2024-04-30',
    duration: 128,
    description:
      'Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...)',
    topRated: true,
    authors: ['Konstantin Decker', 'Petr Ivanov'],
  },
  {
    id: '6',
    title: 'custom course name for seach test',
    creationDate: '2024-06-29',
    duration: 60,
    description:
      'Create a repository at github/bitbucket Install ng-cli: npm install -g @angular/cli Use ng-cli to create initial a project Run the project by executing “ng serve” Explore a project structure Setup TS lint according to your preferences (indentation, spacing...)',
    topRated: false,
    authors: ['Konstantin Decker', 'Petr Ivanov'],
  },
];
