import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LineChartService {
  baseUrl: string = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu';
  iso2!: string;
  constructor(private http: HttpClient) {}

  getTotalData() {
    // tong so ca toan cau
    return this.http.get(this.baseUrl + '/brief');
  }

  getCountryData(iso2: string) {
    //tra ve tổng số ca tưng nước
    return this.http.get(
      this.baseUrl + '/latest?iso2=' + iso2 + '&onlyCountries=true'
    );
  }

  getCountryDataByDate(iso2: string) {
    //tra ve so ca theo ngày của từng nước
    return this.http.get(
      this.baseUrl + '/timeseries?iso2=' + iso2 + '&onlyCountries=true'
    );
  }
  getLatestData() {
    return this.http.get(this.baseUrl + '/latest?onlyCountries=true');
  }

  sort(obj: any) {
    // sort từ bé đến lớn
    return Object.keys(obj)
      .sort((a: any, b: any) => {
        return a - b;
      })
      .reduce(function (result: any, key) {
        result[key] = obj[key];
        return result;
      }, {});
  }

  getDate(obj: any) {
    let dates = [];
    for (let key in obj) {
      dates.push(key);
    }
    return dates;
  }

  getCases(obj: any) {
    let cases = [];
    for (let value in obj) {
      cases.push(obj[value]);
    }
    return cases;
  }

  confirmedCases(arr: any) {
    let confirmed = [];
    for (let i = 0; i < arr.length; i++) {
      confirmed.push(arr[i].confirmed);
    }
    return confirmed;
  }

  recoveredCases(arr: any) {
    let recover = [];
    for (let i = 0; i < arr.length; i++) {
      recover.push(arr[i].recovered);
    }
    return recover;
  }

  deathsCases(arr: any) {
    let death = [];
    for (let i = 0; i < arr.length; i++) {
      death.push(arr[i].deaths);
    }
    return death;
  }
}
