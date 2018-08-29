import { AuthorPipe } from './Author.pipe';

describe('AuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
