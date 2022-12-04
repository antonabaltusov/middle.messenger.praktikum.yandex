import { APIError } from 'api/login-api';

export function apiHasError(response: any): response is APIError {
  return response && response.reason;
}
