import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { MarkerService } from '../marker.service';
import * as L from 'leaflet';
import { ListService } from '../service/list.service';
import { LineChartService } from './../line-chart.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
 map!:any;
  constructor(private markerService: MarkerService,private service: ListService,private LineChartService: LineChartService) { }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 32.427908, 53.688046 ],
      zoom: 1
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  
  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCircleMarkers(this.map,2);
   
    
  }

}

