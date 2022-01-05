import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { DaoService } from '../dao.service';
import { r2dModel } from './r2data';



@Component({
  selector: 'app-rform2',
  templateUrl: './rform2.component.html',
  styleUrls: ['./rform2.component.css']
})
export class Rform2Component implements OnInit {

user:r2dModel = new r2dModel();//southi pehla ama store thase 

ulist:r2dModel[] = [];//amaa dao ni help thi ahiya list ma value laiva service na help thi
btn:string = 'Submit';

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })
 
    

  countryList = [{'id':1,'name':'India'},
                {'id':2,'name':'Pakistan'},
                {'id':3,'name':'USA'}]
  
   

  constructor(private dao:DaoService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.ulist = this.dao.list;
    console.log(this.ulist); //ahiya apde a rite pan value lavi sakee
  }

  index:number = -1;
  onSubmit(uu:any)
  {
    this.user = this.contactForm.value as r2dModel;//ahiya model mathi value pehla koi variable ma store karai 6ee
    console.log(this.user);
  
    this.dao.store(this.user,this.index);//ahiya doa service constructor  throw dao ma value user ni lai gaya 6ee store function ni help thi  service ma store karvava mateee
    
     this.user =new  r2dModel();
    //  this.contactForm.reset(this.contactForm.value);


    if(this.index == -1)
    {
      alert("submited value"); 
         
    }
    else if(this.index != -1)
    {
      alert("Value updated");
      this.btn = 'Submit';
      this.index = -1;  
    }
    
      
      uu.reset();

  }

  updateForm(cd:r2dModel,index:number)
  {
      // this.user = cd;
      // console.log(cd);
    
       
      this.contactForm = this.formBuilder.group({
        firstname: [cd.firstname],
        lastname: [cd.lastname],
        email: [cd.email],
        gender: [cd.gender],
        isMarried:[cd.isMarried],
        country:[cd.country]
      });
      
      this.index=index;
      this.btn = 'update';

  }

  deleteForm(index:number)
  {
    this.ulist = this.dao.deleteRow(index);
  }


}
