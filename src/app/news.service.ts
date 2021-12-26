import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?q=corona&from=2021-12-18&to=2021-12-22&language=en&sortBy=popularity&apiKey=50e6b911e8aa4385b9dafcb6d5b42137';
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.newsApiUrl);
  }
}
