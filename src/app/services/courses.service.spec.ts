import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { CoursesService } from './courses.service';
import type { CourseData } from '../interfaces/course-data';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(CoursesService);
  });

  it('should return courses', () => {
    service.loadCourses$();
    service.coursesCollection$.subscribe((val) => expect(val).toHaveLength(3));
  });

  it('should add new course', () => {
    const mockCourse: CourseData = {
      id: '7',
      title: 'Bla bla',
      creationDate: String(new Date()),
      duration: 90,
      description: 'Bla bla bla bla',
      topRated: false,
      authors: ['Konstantin Decker'],
    };

    service.addCourse(mockCourse);

    service.coursesCollection$.subscribe((val) => {
      expect(val).toHaveLength(8);
    });
  });
  it('should edit set course', () => {
    const mockInfo: Partial<CourseData> = {
      title: 'bla',
      creationDate: 'bla bla',
      duration: 100,
      topRated: true,
    };

    service.editCourse('4', mockInfo);
    service.coursesCollection$.subscribe((val) => {
      const gettedCourse = val.find((el) => el.id === '4');
      expect(gettedCourse!.title).toBe(mockInfo.title);
    });
  });

  it('should return course with chosen id', () => {
    const gettedCourse = service.getCoursesById('3');
    gettedCourse.subscribe((val) => {
      expect(val?.id).toEqual('3');
    });
  });

  it("shouldn't return course with chosen id", () => {
    const gettedCourse = service.getCoursesById('8');
    gettedCourse.subscribe((val) => expect(val).toBeUndefined());
  });

  it('should delete course with chosen id', () => {
    service.deleteCourse('1');
    service.coursesCollection$.subscribe((val) => {
      expect(val).toHaveLength(6);
    });
  });
});
