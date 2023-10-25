import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  imgBaseUrl:string='https://image.tmdb.org/t/p/original/';

  constructor(private http:HttpClient) { }

  getTrendingItems(mediaType:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=`);
  }

  getTrendingDetails(id:number,mediaType:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=&language=en-US`);
  }

}
