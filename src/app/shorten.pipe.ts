import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // Shortens the pipe to the length specified as parameter
  // It takes limit as an optional parameter
  // ere the parameter could have been stored in args
  // for readability, an optional parameter 'limit' was defined
  transform(value: any, limit?: number, args?: any): any {
    if(value.length > limit){
      return value.substr(0, limit) + '...'
    }
    return value.substr(0, 10) + '...';
  }

}
