import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Dao2Service } from '../dao2.service';
import { r3dModel } from './r3data';

@Component({
  selector: 'app-rform3',
  templateUrl: './rform3.component.html',
  styleUrls: ['./rform3.component.css']
})
export class Rform3Component implements OnInit {

  u3list:r3dModel[] =[];
  btn:string = 'Submit';

  contactForm = new FormGroup({
    firstname:new FormControl(),
   lastname:new FormControl(),
   email:new FormControl(),
   password:new FormControl(),
    selvalue:new FormControl(),
    chkval:new FormGroup({
       chkval1:new FormControl(),
       chkval2:new FormControl(),
       chkval3:new FormControl()
    })
});

data:r3dModel = new r3dModel();

  constructor(private dao2:Dao2Service,private formBuilder:FormBuilder) { }

  index:number = -1;
  public onSubmit(kk:any)
  {
     this.data = this.contactForm.value as r3dModel;
     console.log(this.data);
     this.dao2.store(this.data,this.index);

     this.data = new r3dModel();

     
    if(this.index == -1)
    {
      //alert("submited value");
      Swal.fire(
        'Submitted value scussesfully',
        'Let Next to be move',
        'success'
      )
         
    }
    else if(this.index != -1)
    {
      //alert("Value updated");

      Swal.fire({
        title: 'Update the valuee...?',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })


      this.btn = 'Submit';
      this.index = -1;  
    }
    
      
      kk.reset();
  }

  updateForm(jx:r3dModel,index:number)
  {
    this.contactForm = this.formBuilder.group({
      firstname: [jx.firstname],
      lastname: [jx.lastname],
      email:[jx.email],
      password:[jx.password],
      selvalue:[jx.selvalue],
      chkval : this.formBuilder.group({
        chkval1:[jx.chkval1],
        chkval2:[jx.chkval2],
        chkval3:[jx.chkval3]
      })
      

    });

      this.index=index;
      this.btn = 'update';
  }

  deleteForm(index:number)
  {
    this.u3list = this.dao2.deleteRow(index);
  }





  ngOnInit(): void {

    this.u3list = this.dao2.p3list;
    console.log(this.u3list);
  }

}
