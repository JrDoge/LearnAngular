import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { CourseDataComponent } from './course-data.component';
import { By } from '@angular/platform-browser';
import { courseMock } from './course-mock';
import { CUSTOM_ELEMENTS_SCHEMA, Component, DebugElement, EventEmitter, Input, Output } from '@angular/core';
import { CourseData } from '../../course-data';
import { CourseDataModule } from './course-data.module';
import { CourseListModule } from '../course-list/course-list.module';

let component: CourseDataComponent;
let fixture: ComponentFixture<CourseDataComponent>;
const mockedCourse = courseMock[1];
const emptyCourses = {}

describe('Если есть данные для отображения (stand-alone)', () => {
  beforeEach(async () => {
      TestBed.configureTestingModule({
      declarations: [CourseDataComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDataComponent);
    component = fixture.componentInstance;
    
    component.course = mockedCourse;

    fixture.detectChanges();
  })

  it('То в качестве даты выводятся данные из поля creationDate', () => {
    const courseContainer = fixture.debugElement.query(By.css('.course-container')).nativeElement;
    expect(courseContainer.textContent).toContain(mockedCourse.creationDate);
  });
  it('То в качестве описания выводятся данные из поля description', () => {
    const courseContainer = fixture.debugElement.query(By.css('.course-container')).nativeElement;
    expect(courseContainer.textContent).toContain(mockedCourse.description);
  });
  it('То присутствует заголовок курса', () => {
    const courseTitle = fixture.debugElement.query(By.css('.line-clamp-box')).nativeElement;
    expect(courseTitle).toBeTruthy();
  });
  it('То присутствует бейдж длительности курса', () => {
    const courseBadge = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(courseBadge).toBeTruthy();
  });
  it('То присутствует кнопка "Edit"', () => {
    const courseButtons = fixture.debugElement.query(By.css('.course-buttons')).nativeElement;
    expect(courseButtons).toBeTruthy();
  });
  it('То присутствует кнопка "Delete"', () => {
    const courseButtons = fixture.debugElement.query(By.css('.course-buttons')).nativeElement;
    expect(courseButtons).toBeTruthy();
  });
});

@Component({
  standalone: true,
  imports: [CourseDataModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-data.component.html'
})
class TestHostComponent {
  @Input() course!: CourseData;

  @Output() deleteEvent = new EventEmitter<string>();

  deleteCourse() {
    this.deleteEvent.emit(this.course.id);
    console.log(this.course.id);
  }
}

let testHostComponent: TestHostComponent

describe('Компонент-хост должен успешно создаваться',() => {

  beforeEach(async ()=>{
    TestBed.configureTestingModule({
      imports: [TestHostComponent, CourseListModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
    fixture = TestBed.createComponent(TestHostComponent)

    testHostComponent = fixture.componentInstance
  })

  it('Успешно создан.', () =>{
    expect(testHostComponent).toBeTruthy()
  })
  it('Через @input не были переданы данные, не выводим ничего', ()=>{
    testHostComponent.course = emptyCourses;
    fixture.detectChanges()

    const coursecontainer = fixture.debugElement.query(By.css('.course-header-container')).nativeElement

    expect(coursecontainer.textContent).toBeNull
  })
})

describe('Если через @Input переданы данные для отображения',() =>{
  beforeEach(async ()=>{
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
    fixture = TestBed.createComponent(TestHostComponent)
    testHostComponent = fixture.componentInstance
  })
  it('То содержимое компонента не пустое',()=>{
    testHostComponent.course = mockedCourse;
    fixture.detectChanges()

    const coursecontainer = fixture.debugElement.query(By.css('.course-header-container')).nativeElement

    expect(coursecontainer.textContent).not.toBeNull
  })
  it('Если нажать на кнопку удаления курса, то через @Output будет передано событие удаления курса',()=>{
    const spy = jest.spyOn(testHostComponent, 'deleteCourse')

    const loadButton: DebugElement = fixture.debugElement.query(
      By.css('[data-id = "delete-button"]')
    )

    loadButton.triggerEventHandler('click');

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    })
  })
})