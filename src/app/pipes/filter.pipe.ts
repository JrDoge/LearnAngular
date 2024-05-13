import { Pipe, PipeTransform } from '@angular/core';
import type { CourseData } from '../course-data';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courseTitle: string, courses: CourseData[]) : CourseData[]{
    if (courseTitle !== ''){
      return courses.filter((course) =>
        course.title.toLocaleLowerCase().includes(courseTitle.toLowerCase()))
    } 
    return courses
  }

}
