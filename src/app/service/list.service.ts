import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  userChangeSubject = new Subject();

  private countryUrl: any;

  constructor(private http: HttpClient) { }

 
  getWordWide(){
    this.countryUrl = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief';
    return this.http.get(this.countryUrl);
  }
  getRegionalList(){
      this.countryUrl = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';
      return this.http.get(this.countryUrl);
  }

  getRegionalByIso2(iso2: any){
    this.countryUrl =`https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${iso2}&onlyCountries=true`;
    return this.http.get(this.countryUrl);
  }
  getRegionalDetail(iso2: any){
    this.countryUrl =`https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${iso2}`;
    return this.http.get(this.countryUrl);
  }

  
}