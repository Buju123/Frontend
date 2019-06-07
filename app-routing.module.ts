import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';



const routes: Routes = [{
  path:'',component:LogincomponentComponent
},
  {  
path:'app-logincomponent',component:LogincomponentComponent
 
},
{
  path:'app-registercomponent',component:RegistercomponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
