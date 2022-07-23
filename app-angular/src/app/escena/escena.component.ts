import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.sass']
})
export class EscenaComponent implements OnInit {
  @Input()frasesParaMostrar:frases;
  @Input()indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
