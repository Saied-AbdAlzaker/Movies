import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit{

  tvShowList:any[]=[];
  imgBaseUrl:string='';

  constructor(private _TrendingService:TrendingService)
  {
    this.imgBaseUrl = _TrendingService.imgBaseUrl;
  }

  getTrendingTvshows()
  {
    this._TrendingService.getTrendingItems('tv').subscribe((response)=>{
      this.tvShowList = response.results;
    })
  }

  ngOnInit(): void {
    this.getTrendingTvshows();
  }


}
