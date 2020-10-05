import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { VisionComponent } from './vision/vision.component';
import { LifeStoriesComponent } from './life-stories/life-stories.component';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    VisionComponent,
    LifeStoriesComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  providers: []
})
export class MainModule{}
