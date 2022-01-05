import { FormControl, FormGroup } from "@angular/forms";

export class regModel{
    contactForm = new FormGroup({
         firstname:new FormControl(),
        lastname:new FormControl(),
        email:new FormControl(),
        password:new FormControl(),
        selvalue:new FormControl(),
        chkval:new FormControl()
    })


    
}