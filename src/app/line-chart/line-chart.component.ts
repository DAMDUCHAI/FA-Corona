import { LineChartService } from './../line-chart.service';
import {
  Component,
  OnInit,
  SimpleChanges,
  Input,
  OnChanges,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',

  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input('iso2') iso2!: string;
  chart!: Chart;
  datas: any;

  constructor(private LineChartService: LineChartService) {
    Chart.register(...registerables);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.iso2);
    this.LineChartService.getCountryDataByDate(this.iso2).subscribe((data) => {
      this.datas = data;
      this.drawLineChart();
    });
  }

  ngOnInit(): void {
    this.LineChartService.getCountryDataByDate(this.iso2).subscribe((data) => {
      this.datas = data;
      this.drawLineChart();
    });
  }

  drawLineChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    // vì số ca tăng theo từng ngày=> sắp xếp số ca và ngày tăng dần
    let dates = this.LineChartService.getDate(
      this.LineChartService.sort(this.datas[0].timeseries)
    );
    let cases = this.LineChartService.getCases(
      this.LineChartService.sort(this.datas[0].timeseries)
    );
    let confirmedCases = this.LineChartService.confirmedCases(cases);
    let recoveredCases = this.LineChartService.recoveredCases(cases);
    let deathsCases = this.LineChartService.deathsCases(cases);
    this.chart = new Chart('canvas', {
      type: 'line',

      data: {
        labels: dates.slice(deathsCases.length - 30, deathsCases.length - 1),
        datasets: [
          {
            label: 'Confirmed',
            data: confirmedCases.slice(
              confirmedCases.length - 30,
              confirmedCases.length - 1
            ),
            backgroundColor: '#ffcc66',
            borderColor: '#ffcc66',
            fill: false,
          },
          {
            label: 'Recovered',
            backgroundColor: '#00e64d',
            borderColor: '#00e64d',
            data: recoveredCases.slice(
              recoveredCases.length - 30,
              recoveredCases.length - 1
            ),
            fill: false,
          },
          {
            label: 'Deaths',
            backgroundColor: '#ff1a1a',
            borderColor: ' #ff1a1a',
            data: deathsCases.slice(
              deathsCases.length - 30,
              deathsCases.length - 1
            ),
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Cases in 30 days from ' + this.iso2,
            color: 'black',
          },
          legend: {
            position: 'bottom',
            labels: {
              color: 'black',
            },
          },
        },
      },
    });
  }
}
