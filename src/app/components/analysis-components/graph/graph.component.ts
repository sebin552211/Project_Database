import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-graph2',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ChartModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent1 implements OnInit {

  // Data for Bar Charts
  barData1: any;
  barData2: any;
  barData3: any;

  // Data for Pie Charts
  pieData1: any;
  pieData2: any;
  pieData3: any;

  // Options for Bar and Pie Charts
  barOptions1: any;
  barOptions2: any;
  barOptions3: any;
  pieOptions: any;

  // Toggle states
  showPieChart1: boolean = false;
  showPieChart2: boolean = false;
  showPieChart3: boolean = false;

  ngOnInit() {
    // Overall Feedback - Bar Chart
    this.barData1 = {
      labels: ['Very Satisfied', 'Neither Satisfied Nor Dissatisfied', 'Very Dissatisfied', 'N/A'],
      datasets: [
        {
          label: 'Feedback',
          backgroundColor: '#42A5F5',
          data: [3, 2, 7, 4]
        }
      ]
    };

    // Feedback - Parameter Wise - Bar Chart
    this.barData2 = {
      labels: ['Customer Focus', 'Planning and Control', 'Quality', 'Communication', 'Knowledge'],
      datasets: [
        {
          label: 'Very Satisfied',
          backgroundColor: '#42A5F5',
          data: [78, 58, 70, 68, 71]
        },
        {
          label: 'Satisfied',
          backgroundColor: '#66BB6A',
          data: [9, 12, 21, 22, 25]
        },
        {
          label: 'Neither Satisfied Nor Dissatisfied',
          backgroundColor: '#FFA726',
          data: [10, 0, 0, 0, 0]
        },
        {
          label: 'Dissatisfied',
          backgroundColor: '#EF5350',
          data: [0, 0, 0, 0, 0]
        }
      ]
    };

    // Engage Experion Services in Future - Bar Chart
    this.barData3 = {
      labels: ['Very Likely', 'Likely'],
      datasets: [
        {
          label: 'Likelihood',
          backgroundColor: ['#42A5F5', '#EF5350'],
          data: [50, 30]
        }
      ]
    };

    // Pie Chart Data
    this.pieData1 = {
      labels: ['Very Satisfied', 'Neither Satisfied Nor Dissatisfied', 'Very Dissatisfied', 'N/A'],
      datasets: [
        {
          data: [63, 22, 7, 4],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350']
        }
      ]
    };

    this.pieData2 = {
      labels: ['Customer Focus', 'Planning and Control', 'Quality', 'Communication', 'Knowledge'],
      datasets: [
        {
          data: [78, 58, 70, 68, 71],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350', '#AB47BC']
        }
      ]
    };

    this.pieData3 = {
      labels: ['Very Likely', 'Likely'],
      datasets: [
        {
          data: [50, 30],
          backgroundColor: ['#42A5F5', '#EF5350']
        }
      ]
    };

    // Chart Options
    this.barOptions1 = this.barOptions2 = this.barOptions3 = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          }
        }
      }
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };
  }

  // Toggle Functions for Pie Charts
  togglePieChart(chartNumber: number) {
    switch (chartNumber) {
      case 1:
        this.showPieChart1 = !this.showPieChart1;
        break;
      case 2:
        this.showPieChart2 = !this.showPieChart2;
        break;
      case 3:
        this.showPieChart3 = !this.showPieChart3;
        break;
    }
  }
}
