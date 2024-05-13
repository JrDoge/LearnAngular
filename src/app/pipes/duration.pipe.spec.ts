import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('Получаем строку в формате hh mm', () => {
    const pipe = new DurationPipe();
    const result = pipe.transform(95);
    expect(result).toMatch('1 h 35 m');
  });
  it('Получаем строку в формате hh без минут', () => {
    const pipe = new DurationPipe();
    const result = pipe.transform(60);
    expect(result).toMatch('1 h');
  });
  it('Получаем строку в формате mm без часов', () => {
    const pipe = new DurationPipe();
    const result = pipe.transform(40);
    expect(result).toMatch('40 m');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
