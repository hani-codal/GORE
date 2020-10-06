import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-story',
  templateUrl: './latest-story.component.html',
  styleUrls: ['./latest-story.component.scss']
})
export class LatestStoryComponent implements OnInit {

  stories = [
    {title:"remaining the city's limits", bgColor:'#F891A5'},
    {title:"stop trying to calm the strom...",bgColor:'#244C5A'},
    {title:"the zen of ice cold showers",bgColor:'#ACA39A'},
    {title:"why own less",bgColor:'#00968F'},
    {title:"remaining the city's limits" ,bgColor:'#244C5A'},
    {title:"stop trying to calm the strom...",bgColor:'#F891A5'},
    {title:"the zen of ice cold showers",bgColor:'#ACA39A'},
    {title:"why own less",bgColor:'#00968F'}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
