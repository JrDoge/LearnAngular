import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, EventEmitter, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { first } from 'rxjs';
import { By } from '@angular/platform-browser';

let COMPONENT: AppComponent;
let FIXTURE: ComponentFixture<AppComponent>;


@Component({
  template: `<button class='btn' (click)="searchResult()" >click me</button>`,
})
class TestHostComponent{

  stringInputted: string = 'video course 1';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  searchResult(){
    this.searchEvent.emit(this.stringInputted);
  }

}

let TESTHOSTCOMPONENT: TestHostComponent;
let HOST_FIXTURE: ComponentFixture<TestHostComponent>;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    FIXTURE = TestBed.createComponent(AppComponent)
    COMPONENT = FIXTURE.componentInstance;

    HOST_FIXTURE = TestBed.createComponent(TestHostComponent);
    TESTHOSTCOMPONENT = HOST_FIXTURE.componentInstance;

    FIXTURE.detectChanges();
    HOST_FIXTURE.detectChanges();
  });
  it('Должна отработать функция фильтрации', () => {
    let stringInputted: string;

    const HOST_SPY = jest.spyOn(TESTHOSTCOMPONENT.searchEvent, 'emit');

    const HOST_EL = HOST_FIXTURE.debugElement.query(By.css('.btn')).nativeElement;

    HOST_EL.click()

    TESTHOSTCOMPONENT.searchEvent.pipe(first()).subscribe((inputtedString: string) => (inputtedString = stringInputted));

    expect(HOST_SPY).toHaveBeenCalled()
  })
});
