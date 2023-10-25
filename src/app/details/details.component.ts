import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  currentId:number=0;
  currentMediaType:string='';
  itemDetails:any={};
  imgBaseUrl:string=''

  constructor(private _ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService)
   {
    console.log(_ActivatedRoute.snapshot.params);
    this.currentId = _ActivatedRoute.snapshot.params.id;
    this.currentMediaType = _ActivatedRoute.snapshot.params.mediaType;
    this.imgBaseUrl = _TrendingService.imgBaseUrl;
   }

   getTrendingItemsDetails()
   {
    this._TrendingService.getTrendingDetails(this.currentId,this.currentMediaType).subscribe((response)=>{
      console.log(response);
      this.itemDetails=response;
    })
   }

   ngOnInit(): void {
     this.getTrendingItemsDetails();
   }

}
