
import { Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { Top10Service } from '../top10.service';
import { LineChartService } from '../line-chart.service';


@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css'],
})
export class Top10Component implements OnInit {
  datas: any;
  chart!: Chart;
  constructor(private ChartService: LineChartService, private top10: Top10Service) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.ChartService.getLatestData().subscribe((data: any) => {
      this.datas = data
        .map((item: any) => {
          return {
            country: item.countryregion,
            confirmed: item.confirmed,
          };
        })
        .sort((a: any, b: any) => {
          //sort tu cao den thap
          return b.confirmed - a.confirmed;
        });

      this.drawBarChart();
    });
  }

  drawBarChart() {
    let confirmedCases = this.ChartService.confirmedCases(this.datas);
    let countries = this.top10.country(this.datas);
    let barColors = [
      '#660000',
      '#800000',
      '#990000',
      ' #b30000',
      '#cc0000',
      '#e60000',
      '#ff0000',
      ' #ff3300',
      '#ff471a',
      ' #ff5c33',
    ];
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: countries.slice(0, 10),
        datasets: [
          {
            backgroundColor: barColors,
            data: confirmedCases.slice(0, 10),
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Top 10 countries with most cases',
            color: 'black',
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
