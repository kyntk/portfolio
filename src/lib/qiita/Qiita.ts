export class Qiita {
  private token: string
  private headers: { [key: string]: string }
  private url = 'https://qiita.com'
  private apiVersion = '/api/v2'

  constructor(options: { token: string; headers?: { [key: string]: string } }) {
    this.token = options.token
    const baseHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }
    this.headers = { ...baseHeaders, ...options.headers }
  }

  setHeaders(headers: { [key: string]: string }) {
    this.headers = { ...this.headers, ...headers }
  }

  get<T>(path: string): Promise<T> {
    return fetch(`${this.url}${this.apiVersion}${path}`, {
      method: 'GET',
      headers: this.headers,
      cache: 'force-cache',
    }).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    })
  }
}
