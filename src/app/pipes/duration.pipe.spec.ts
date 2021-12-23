import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 100 to "1h 40min"' , () => {
    expect(pipe.transform(100)).toBe('1h 40min');
  });
});
