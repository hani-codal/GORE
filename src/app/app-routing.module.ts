import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path :'',
    redirectTo:'main',
    pathMatch : 'full'
  },
  // {
  //   path:'main',
  //   component:MainComponent
  // },
  // {
  //   path : 'main/life-stories',
  //   component:LifeStoriesComponent
  // },
  // {
  //   path : 'main/vision',
  //   component : VisionComponent
  // },
  {path:'main', loadChildren: ()=> import('./main/main.module').then((m)=> m.MainModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
