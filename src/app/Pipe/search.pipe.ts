import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchTxt: string):  string[] {
    if(searchTxt===''){
      return value;
     }
     else{
      return value.filter((item:string)=>item.toLowerCase().startsWith(searchTxt.toLowerCase()));
      //return value.filter((item:string)=>item.toLowerCase().includes(searchTxt.toLowerCase()));
  
     }
  }

}
