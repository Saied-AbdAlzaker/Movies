import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingList:any[],term:string): any[] {
    return trendingList.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
