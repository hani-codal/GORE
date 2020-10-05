import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeStoriesComponent } from './life-stories/life-stories.component';
import { MainComponent } from './main.component';
import { VisionComponent } from './vision/vision.component';


const routes: Routes =[
  {
    path :'',
    component:MainComponent,
    children:[
      {
        path:'',
        redirectTo:'home'
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
          path : 'life-stories',
          component:LifeStoriesComponent
        },
        {
          path : 'vision',
          component : VisionComponent
        }
    ]
  }
  // {
  //   path:'main',
  //   component:MainComponent
  // },
  // {
  //   path : 'life-stories',
  //   component:LifeStoriesComponent
  // },
  // {
  //   path : 'main/vision',
  //   component : VisionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
