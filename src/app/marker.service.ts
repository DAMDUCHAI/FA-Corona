import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  countryUrl = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';
  constructor(private http: HttpClient) { }
 
   scaledRadius(zoom:number,val: number, maxVal: number): number {
    return zoom * 30* (val / maxVal);
  }

  makeCircleMarkers(map: L.Map,zoom:number): void {
    this.http.get(this.countryUrl).subscribe((res: any) => {
      const maxPop = Math.max(...res.map((x: any)=> x.deaths), 0);
      for (const c of res) {
        const lat = c.location.lat;
        const lng = c.location.lng;
        const circle = L.circleMarker([lat, lng],{           
        color: "orange",
        fillColor: "orange",
        fillOpacity: 0.6, 
        radius: this.scaledRadius(zoom,c.deaths, maxPop) }).addTo(map);
        circle.bindPopup(`<p>Country: ${ c.countryregion }</p>
        <p>Deaths: ${ c.deaths.toLocaleString('it-IT') }</p>`)
      }
    });
  }
  
  }

