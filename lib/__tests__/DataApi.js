import DataApi from '../DataApi.js';
import {
  data
} from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHavePropery(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getArticles();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].title;

    expect(authors).toHavePropery(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});