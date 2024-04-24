import { SearchSectionComponent } from './search-section.component';

describe('Если нажать на кнопку поиска', () => {

  const component = new SearchSectionComponent();
  
  const stringForTest: string = "54354353453"

  it('То один раз будет вызван метод поиска курсов', () => {
    expect(component.startSearching(stringForTest)).toHaveBeenCalledTimes(1);
  });
});

