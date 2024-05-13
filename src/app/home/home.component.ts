import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TrendingService } from '../Services/trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgBaseUrl: string = '';
  moviesList: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private _TrendingService: TrendingService) {
    this.imgBaseUrl = _TrendingService.imgBaseUrl;
  }

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  getTrendingMovies() {
    this._TrendingService.getTrendingItems('movie').subscribe((response) => {
      console.log(response.results);
      this.moviesList = response.results;
    })
  }

}
