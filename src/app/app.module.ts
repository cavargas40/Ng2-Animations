import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//router
import { AppRoutingModule } from './util/app-routing.module';

//components
import { PtagtransitionsComponent } from './components/animations/ptagtransitions/ptagtransitions.component';
import { MstepwithcallbacksComponent } from './components/animations/mstepwithcallbacks/mstepwithcallbacks.component';




@NgModule({
  declarations: [
    AppComponent,
    PtagtransitionsComponent,
    MstepwithcallbacksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
