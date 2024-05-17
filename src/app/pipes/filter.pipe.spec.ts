import { courseMock } from '../components/course-data/course-mock';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('должен отфильтровать массив из одного курса', () => {
    const result = pipe.transform('video course 1', courseMock);
    expect(result[0]).toStrictEqual(courseMock[0]);
  });
  it('должен вернуть один или больше массив курсов', () => {
    const result = pipe.transform('course', courseMock);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
  it('должен вернуть пустоту', () => {
    const result = pipe.transform('543353453', courseMock);
    expect(result).toStrictEqual([]);
  });
  it('должен вернуть исходный список объектов', () => {
    const result = pipe.transform('', courseMock);
    expect(result).toStrictEqual(courseMock);
  });
});
