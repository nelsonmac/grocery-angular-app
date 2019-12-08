import { PhCategoryPieData } from './../../../models/ph-category-pie-data';
import { PhService } from './../../../services/purchase-history/ph.service';
import { Ph } from './../../../models/ph';
import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ph-category-chart',
  templateUrl: './ph-category-chart.component.html',
  styleUrls: ['./ph-category-chart.component.scss']
})

export class PhCategoryChartComponent implements OnInit {

  phList: Ph[];
  dataSet: PhCategoryPieData[] = [];
  chart = [];


  constructor(
    public phService: PhService,
  ) { }

  ngOnInit() {
    this.subscribeToList();
  }

  subscribeToList() {
    this.phService.list$.subscribe(data => {
      this.phList = data;
      this.updateChart();
    });
  }
  refreshChartData() {
    if (this.dataSet.length > 0) {
      this.dataSet = [];
    }
    this.phList.forEach(ph => {
      const index = this.dataSet.findIndex((e) => e.category === ph.item.category.name);
      if (index === -1) {
        this.dataSet.push(new PhCategoryPieData(ph.item.category.name, ph.price));
      } else {
        this.dataSet[index].total += ph.price;
      }
    });
    console.log(this.dataSet);
  }
  updateChart() {
    console.log('chart starts');
    this.refreshChartData();
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.dataSet.map(i => i.category),
        datasets: [
          {
            data: this.dataSet.map(i => i.total),
            borderColor: '#3cba9f',
            backgroundColor: [
              "#3cb371",
              "#0000FF",
              "#9966FF",
              "#4C4CFF",
              "#00FFFF",
              "#f990a7",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
