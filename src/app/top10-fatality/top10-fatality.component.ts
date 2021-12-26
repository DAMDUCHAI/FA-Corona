import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Top10Service } from '../top10.service';



@Component({
  selector: 'app-top10-fatality',
  templateUrl: './top10-fatality.component.html',
  styleUrls: ['./top10-fatality.component.css'],
})
export class Top10FatalityComponent implements OnInit {
  datas: any;
  chart!: Chart;
  constructor(private top10: Top10Service) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.top10.getLatestData().subscribe((data: any) => {
      this.datas = data
        .map((item: any) => {
          return {
            country: item.countryregion,
            fatality: ((item.deaths / item.confirmed) * 100).toFixed(2),
          };
        })
        .sort((a: any, b: any) => {
          //sort tu cao den thap
          return b.fatality - a.fatality;
        });
      this.drawBarChart();
      console.log(this.datas);
    });
  }

  drawBarChart() {
    let fatalityRate = this.top10.fatality(this.datas);
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
    this.chart = new Chart('fatality', {
      type: 'bar',
      data: {
        labels: countries.slice(0, 10),
        datasets: [
          {
            backgroundColor: barColors,
            data: fatalityRate.slice(0, 10),
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
            text: 'Top 10 countries with highest fatality rate(%)',
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
