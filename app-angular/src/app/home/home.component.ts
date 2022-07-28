import { historia } from 'assets/historia.json';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @Input() public historia:any = historia.json;

  constructor() {

   }

  ngOnInit(): void {
  }

}
