export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
type Options = {
  tries?: number;
  timeout?: number;
  method?: METHODS;
  headers?: Record<string, string>;
  data?: any;
};
type RequestProps = {
  url: string;
  options?: Options;
};

export function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export default class HTTPTransport {
  url?: string;
  constructor(url: string) {
    this.url = url;
  }
  static get<P = XMLHttpRequest>({ url, options }: RequestProps): Promise<P> {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options?.timeout
    );
  }

  static post<P = XMLHttpRequest>({ url, options }: RequestProps): Promise<P> {
    return this.request<P>(
      url,
      { ...options, method: METHODS.POST },
      options?.timeout
    );
  }

  static put<P = XMLHttpRequest>({ url, options }: RequestProps): Promise<P> {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options?.timeout
    );
  }

  static delete<P = XMLHttpRequest>({
    url,
    options,
  }: RequestProps): Promise<P> {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options?.timeout
    );
  }

  static request<P = XMLHttpRequest>(
    url: string,
    options: Options,
    timeout = 5000
  ): Promise<P> {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);
      xhr.withCredentials = true;

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr as P);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
