import { assert, expect } from 'chai';
import { newMockXhr } from 'mock-xmlhttprequest';
import HTTPTransport, { METHODS, queryStringify } from './HttpTransport';

const MockXhr = newMockXhr();
MockXhr.onSend = (request) => {
  const requestHeaders = request.requestHeaders.getAll();
  const requestUrl = request.url;
  const requestBody = request.body;

  const responseHeaders = { 'Content-Type': 'application/json' };

  const response = {
    message: 'Success!',
    requestUrl,
    requestHeaders,
    requestBody,
  };
  request.respond(200, responseHeaders, JSON.stringify(response));
};

global.XMLHttpRequest = MockXhr;

describe('utils/HTTPTransport', () => {
  it('метод get возвращает успешный ответ', () => {
    return HTTPTransport.get({
      url: '',
      options: {
        data: {
          user: 'name',
          userId: 123,
        },
      },
    }).then((result) =>
      assert.equal(JSON.parse(result.response).message, 'Success!')
    );
  });
  it('метод queryStringify преобразует data в queryparams', () => {
    expect(
      queryStringify({
        user: 'name',
        userId: 123,
      })
    ).to.have.string('?user=name&userId=123');
  });
  it('метод post возвращает успешный ответ', () => {
    return HTTPTransport.post({
      url: '',
      options: {
        data: {
          user: 'name',
          userId: 123,
        },
      },
    }).then((result) =>
      assert.equal(JSON.parse(result.response).message, 'Success!')
    );
  });
  it('метод put возвращает успешный ответ', () => {
    return HTTPTransport.put({
      url: '',
      options: {
        data: {
          user: 'name',
          userId: 123,
        },
      },
    }).then((result) =>
      assert.equal(JSON.parse(result.response).message, 'Success!')
    );
  });
  it('метод delete возвращает успешный ответ', () => {
    return HTTPTransport.delete({
      url: '',
      options: {
        data: {
          user: 'name',
          userId: 123,
        },
      },
    }).then((result) =>
      assert.equal(JSON.parse(result.response).message, 'Success!')
    );
  });
  it('метод request создае запрос и возвращает успешный ответ', () => {
    return HTTPTransport.request('', { method: METHODS.GET }).then((result) =>
      assert.equal(JSON.parse(result.response).message, 'Success!')
    );
  });
});
