import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.sass']
})
export class EscenaComponent implements OnInit {
  @Input() data:string[];

  currentSentence = 0;

  public prev(){

  }

  public next(){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
