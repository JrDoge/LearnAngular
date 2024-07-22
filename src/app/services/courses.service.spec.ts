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
    const newCourse: CourseData = {
      id: '7',
      title: 'Bla bla',
      creationDate: String(new Date()),
      duration: 90,
      description: 'Bla bla bla bla',
      topRated: false,
    };
    service.addCourse(newCourse);
    expect(service.courses).toHaveLength(7);
  });
  it('should edit set course', () => {
    const info: Partial<CourseData> = {
      title: 'bla',
      creationDate: 'bla bla',
      duration: 100,
      topRated: true,
    };
    service.editCourse('4', info);
    expect(service.courses[3].title).toBe(info.title);
  });
  it('should return course with chosen id', () => {
    const gettedCourse = service.getCourseById('3');
    expect(gettedCourse).toEqual(service.courses[2]);
  });
  it("shouldn't return course with chosen id", () => {
    const gettedCourse = service.getCourseById('8');
    expect(gettedCourse).toBeUndefined();
  });
  it('should delete course with chosen id', () => {
    service.deleteCourse('1');
    expect(service.courses).toHaveLength(5);
  });
});
