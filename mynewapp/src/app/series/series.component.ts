import { Component, OnInit } from '@angular/core';
import { Series } from './Series';
import { dataSeries } from './dataSeries';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Series> = [];
  constructor(private seriesService: SeriesService) { }

  getSeriesList(){
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeriesList();
  }

}
