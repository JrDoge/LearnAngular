import { ChangeBorderDirective } from './change-border.directive';

describe('ChangeBorderDirective', () => {
  const directive = new ChangeBorderDirective();
  beforeEach(() => {
    directive.border = '';
  });
  it('Должен быть зелёный border', () => {
    directive.creationDate = '05-09-2024';
    directive.ngOnChanges();
    expect(directive.border).toBe('1px greenyellow solid');
  });
  it('Не должно быть цвета у border', () => {
    directive.creationDate = '2024-04-24';
    directive.ngOnChanges();
    console.log(directive.border);
    expect(directive.border).toBe('none');
  });
  it('Должен быть голубой border', () => {
    directive.creationDate = '2024-06-29';
    directive.ngOnChanges();
    expect(directive.border).toBe('1px lightskyblue solid');
  });
});
