import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { PtagtransitionsComponent } from '../components/animations/ptagtransitions/ptagtransitions.component';
import { MstepwithcallbacksComponent } from '../components/animations/mstepwithcallbacks/mstepwithcallbacks.component';
//import { AppComponent } from '../app.component'
//import { PtagtransitionsComponent  } from '../components/animations/'

const routes: Routes = [
    { path: '', component: PtagtransitionsComponent },
    { path: 'a2', component:  MstepwithcallbacksComponent}    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
