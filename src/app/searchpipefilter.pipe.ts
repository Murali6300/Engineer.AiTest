import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipefilter'
})
export class SearchpipefilterPipe implements PipeTransform {
  transform(tableData: any[], searchItem: any[]): any {
    // console.log(tableData, 'filter');
    if (!searchItem) {
      return tableData;
    }
    return tableData.filter(item => {
      return item.title.toLowerCase().match(searchItem)
    });
  }
}
