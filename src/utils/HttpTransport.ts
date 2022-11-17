enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
type Options = {
  tries: number;
  timeout: number;
  method: METHODS;
  headers: Record<string, string>;
  data?: any;
};
type RequestProps = {
  url: string;
  options: Options;
};

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export default class HTTPTransport {
  static get({ url, options }: RequestProps): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }

  static post({ url, options }: RequestProps): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  static put({ url, options }: RequestProps): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  }

  static delete({ url, options }: RequestProps): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  }

  static request(
    url: string,
    options: Options,
    timeout = 5000
  ): Promise<XMLHttpRequest> {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
export function fetchWithRetry(url: string, options: Options) {
  const { tries = 1 } = options;

  function onError(err: any) {
    const triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }

    return HTTPTransport.get({
      url,
      options: { ...options, tries: triesLeft },
    });
  }

  return HTTPTransport.get({ url, options }).catch(onError);
}
