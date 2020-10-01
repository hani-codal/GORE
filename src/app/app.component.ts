import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  checkLifeStory :boolean =false;
  checkVision :boolean =false;
  isHome:boolean = true;
  constructor(private route:Router){}

ngOnInit(){
}
isLifeStory(event){
  this.checkLifeStory = event;
  this.checkVision = false;
  this.isHome = false;
}
checkHome(event){
this.isHome = event;
this.checkLifeStory = false;
this.checkVision = false;
}
isVision(event){
  this.checkVision = event;
  this.checkLifeStory = false;
  this.isHome = false;
}
}
