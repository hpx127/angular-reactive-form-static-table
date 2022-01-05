import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RformComponent } from './rform/rform.component';
import { ReactiveFormsModule} from '@angular/forms';
import { Rform2Component } from './rform2/rform2.component';
import { Rform3Component } from './rform3/rform3.component';

@NgModule({
  declarations: [
    AppComponent,
    RformComponent,
    Rform2Component,
    Rform3Component,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
