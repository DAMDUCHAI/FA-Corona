import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Top10Service {
  baseUrl: string = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu';
  constructor(private http: HttpClient) {}
  getLatestData() {
    return this.http.get(this.baseUrl + '/latest?onlyCountries=true');
  }

  country(arr: any) {
    let countries = [];
    for (let i = 0; i < arr.length; i++) {
      countries.push(arr[i].country);
    }
    return countries;
  }
  fatality(arr: any) {
    let fatalities = [];
    for (let i = 0; i < arr.length; i++) {
      fatalities.push(arr[i].fatality);
    }
    return fatalities;
  }
}
