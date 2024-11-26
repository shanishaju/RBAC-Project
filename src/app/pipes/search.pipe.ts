import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  //first arg - value to be transformed
  //second arg - based on which the transformation have to be done - format
  transform(allEmployee:any[],searchkey:string): any[] {

    const result:any = [] =[]

    if(!allEmployee || !searchkey || searchkey.trim() === ""){
      return allEmployee
    }
    allEmployee.forEach((item:any)=>{
      const empusername = item.empusername ? item.empusername.trim().toLowerCase() : "";

      if (empusername.includes(searchkey.trim().toLowerCase())) {
        result.push(item);
      }
    })
    return result
    
  }

}
