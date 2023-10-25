import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{

  moviesList:any[]=[];
  imgBaseUrl:string='';
  term:string=''

// BuiltIn Pipe
  price:number=2000;
  userInfo:object = {
    name:'Saed',
    age:22
  }

  getTrendingMovies()
  {
    this._TrendingService.getTrendingItems('movie').subscribe((response)=>{
      console.log(response.results);
      this.moviesList = response.results;
    })
  }

  constructor(private _TrendingService:TrendingService)
  {
    this.imgBaseUrl = _TrendingService.imgBaseUrl;
  }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

}
