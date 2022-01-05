import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { r3dModel } from './rform3/r3data';

@Injectable({
  providedIn: 'root'
})
export class Dao2Service {
   
  p3list:r3dModel[] = [];
  constructor() { }

  store(dat:r3dModel,index:number)
  {
      
    if(index == -1)
    {
      this.p3list.push(dat);
    }
    else{
      this.p3list[index] = dat;
    }
    return this.p3list;

  }


  public deleteRow(index:number)
  {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be  DELETE this DATA!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.p3list.splice(index,1);//ahiya store service mathi southi pehla delete thavani value 
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  
    return this.p3list;
  }
  
}
