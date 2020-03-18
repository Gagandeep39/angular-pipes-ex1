import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // any -> Servers Array 
  // filterString -> Search key 
  // property -> Server's property to be compoared with key
  transform(values: any, filterString: string, property: string): any {
    let tempArray = [];
    if(values.length === 0 || filterString === ''){
      return values;
    }
    // 
    for (const item of values) {
      if (item[property] === filterString)
        tempArray.push(item);
    }
    return tempArray;
  }

}
