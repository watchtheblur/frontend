import * as helper from '../helper';

describe('forming proper query string to call search api', () => {
  test('function to append proper string', () => {
    const url = '/api/v1/resources';
    const searchValue = 'benefit';

    expect(helper.appendQueryString(url, searchValue)).toBe(
      '/api/v1/resources/?search=benefit'
    );
  });
});
