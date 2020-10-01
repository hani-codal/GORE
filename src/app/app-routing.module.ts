import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LifeStoriesComponent } from './life-stories/life-stories.component';
import { VisionComponent } from './vision/vision.component';


const routes: Routes = [
  {
    path :'',
    redirectTo:'home',
    pathMatch : 'full'
  },
  {
    path:'home',
    component:AppComponent
  },
  {
    path : 'life-stories',
    component:LifeStoriesComponent
  },
  {
    path : 'vision',
    component : VisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
