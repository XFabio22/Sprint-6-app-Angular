import { Historia } from './../interface/interface';
import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent  {
  @Input() historia:Historia[]= [];


  currentSentence = 0;
   prev(){
    

  }

   next(){

  }


}
