import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output()vision = new EventEmitter();
@Output()lifestories = new EventEmitter();
@Output()checkhome = new EventEmitter();
  constructor() { }
 isClose :boolean = false ;
  ngOnInit(): void {
    this.isClose = false;
  }
  isClosed(){
  if(this.isClose){
    this.isClose = false;
  }
  else{
    this.isClose = true;
  }
  console.log(this.isClose)
  }
  checkHome(){
this.checkhome.emit(true);
  }
  onRouteChange(){
    this.lifestories.emit(true);
  }
  onvisionChange(){
  this.vision.emit(true);
  }
}
