import { Injectable } from '@angular/core';
import { r2dModel } from './rform2/r2data';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  list:r2dModel[]=[];
  
  
  constructor() { }

  public store(use:r2dModel,index:number)
  {
    if(index == -1)
    {
    this.list.push(use);
    console.log(this.list);
    }
    else{
      this.list[index] = use;
    }
    return this.list;
  }


  public deleteRow(index:number)
  {
    this.list.splice(index,1);//ahiya store service mathi southi pehla delete thavani value 
    return this.list;
  }
  
}
