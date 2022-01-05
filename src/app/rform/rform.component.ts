import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { regModel } from './regdata';





@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
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

 ulist:regModel = new regModel();
 
user:any;
 

  constructor() { }

  onSubmit()
   {
    console.log(this.contactForm.value);
    this.ulist = this.contactForm.value as regModel;
    this.user = this.ulist;
    console.log(this.user);
    
  }

  ngOnInit(): void {
  }

}
