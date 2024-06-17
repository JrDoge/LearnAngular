import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import type { CourseData } from '../course-data';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should add new course', () => {
    const spy = jest.spyOn(service, 'addCourse');
    const newCourse: CourseData = {
      id: '7',
      title: 'Bla bla',
      creationDate: String(new Date()),
      duration: 90,
      description: 'Bla bla bla bla',
      topRated: false,
    };
    service.addCourse(newCourse);
    expect(spy).toHaveBeenCalled();
  });
  it('should edit set course', () => {
    const spy = jest.spyOn(service, 'editCourse');
    const info: Partial<CourseData> = {
      title: 'bla',
      creationDate: 'bla bla',
      duration: 100,
      topRated: true,
    };
    service.editCourse('4', info);
    console.log(service.course);
    expect(spy).toHaveBeenCalled();
  });
});
