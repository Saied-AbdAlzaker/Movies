import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{

  peopleList:any[]=[];
  imgBaseUrl:string='';

  constructor(private _TrendingService:TrendingService)
  {
    this.imgBaseUrl = _TrendingService.imgBaseUrl;
  }

  getTrendingPerson()
  {
    this._TrendingService.getTrendingItems('person').subscribe((response)=>{
      this.peopleList = response.results;
    })
  }

  ngOnInit(): void {
    this.getTrendingPerson();
  }

}
