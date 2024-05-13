import { courseMock } from '../components/course-data/course-mock';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('должен отфильтровать массив курсов', () => {
    const result = pipe.transform('video course 1', courseMock);
    expect(result).toStrictEqual(courseMock[0]);
  });
  it('должен вернуть пустоту', () => {
    const result = pipe.transform('543353453', courseMock);
    expect(result).toBeUndefined();
  });
  it('должен вернуть исходный список объектов', () => {
    const result = pipe.transform('', courseMock);
    expect(result).toStrictEqual(courseMock);
  });
});
