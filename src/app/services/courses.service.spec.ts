import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import type { CourseData } from '../course-data';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
    service.loadCourses$('');
  });

  it('should add new course', () => {
    let newCourseLength;
    const newCourse: CourseData = {
      id: '7',
      title: 'Bla bla',
      creationDate: String(new Date()),
      duration: 90,
      description: 'Bla bla bla bla',
      topRated: false,
    };
    service.addCourse(newCourse);

    service.coursesCollection$.subscribe((val) => {
      newCourseLength = val.length;
    });
    expect(newCourseLength).toEqual(7);
  });
  it('should edit set course', () => {
    let gettedCourse;
    const info: Partial<CourseData> = {
      title: 'bla',
      creationDate: 'bla bla',
      duration: 100,
      topRated: true,
    };
    service.editCourse('4', info);
    service.coursesCollection$.subscribe((val) => {
      gettedCourse = val.find((el) => el.id === '4');
    });
    expect(gettedCourse!.title).toBe(info.title);
  });
  it('should return course with chosen id', () => {
    let targetCourse;
    service.coursesCollection$.subscribe((val) => {
      targetCourse = val.find((el) => el.id === '3');
    });
    const gettedCourse = service.getCoursesById('3');
    expect(gettedCourse).toEqual(targetCourse);
  });
  it("shouldn't return course with chosen id", () => {
    const gettedCourse = service.getCoursesById('8');
    expect(gettedCourse).toBeUndefined();
  });
  it('should delete course with chosen id', () => {
    let newCourseLength;
    service.deleteCourse('1');
    service.coursesCollection$.subscribe((val) => {
      newCourseLength = val.length;
    });
    expect(newCourseLength).toEqual(5);
  });
});
