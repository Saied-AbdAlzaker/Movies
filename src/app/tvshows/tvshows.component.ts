import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../Services/trending.service';

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

  ngOnInit(): void {
    this.getTrendingTvshows();
  }

  getTrendingTvshows()
  {
    this._TrendingService.getTrendingItems('tv').subscribe((response)=>{
      this.tvShowList = response.results;
    })
  }

}
