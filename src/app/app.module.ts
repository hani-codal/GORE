import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LifeStoriesComponent } from './life-stories/life-stories.component';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LifeStoriesComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
