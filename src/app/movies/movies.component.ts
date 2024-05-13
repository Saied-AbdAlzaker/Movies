import { TrendingService } from '../Services/trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList: any[] = [];
  imgBaseUrl: string = '';
  searchItem: string = '';
  pageItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // BuiltIn Pipe
  price: number = 2000;
  userInfo: object = {
    name: 'Saed',
    age: 22
  }

  constructor(private _TrendingService: TrendingService) {
    this.imgBaseUrl = _TrendingService.imgBaseUrl;
  }

  ngOnInit(): void {
    // this.getTrendingMovies();
    this.getPaageItem(1);
  }

  // getTrendingMovies() {
  //   this._TrendingService.getTrendingItems('movie').subscribe((response) => {
  //     console.log(response.results);
  //     this.moviesList = response.results;
  //   })
  // }

  // Pagination
  getPaageItem(num: number) {
    console.log(num);
    this._TrendingService.getPaginatedMovies(num).subscribe({
      next: (response) => {
        this.moviesList = response.results;

      }
    })

  }

}
