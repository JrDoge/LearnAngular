import { MarkTopDirective } from './mark-top.directive';

describe('MarkTopDirective', () => {
  const directive = new MarkTopDirective();
  beforeEach(() => {
    directive.color = '';
  });
  it('Должен поменять на жёлтый background', () => {
    directive.topRated = true;
    directive.ngOnChanges();
    expect(directive.color).toBe('hsl(46, 100%, 94%, 1)');
  });
  it('Не должен меняться background', () => {
    directive.topRated = false;
    directive.ngOnChanges();
    expect(directive.color).toBe('');
  });
});
