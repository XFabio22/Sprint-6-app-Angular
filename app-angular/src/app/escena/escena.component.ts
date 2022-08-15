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
    if(this.currentSentence === 0){
      this.currentSentence = this.historia.length- 1;

    }else{
      this.currentSentence --;
    }

    let prueba = this.historia[this.historia.length -1 ];
    
    console.log(prueba)
  }

   next(){
    if(      this.currentSentence == this.historia.length- 1){
      this.currentSentence === 0

    }else{
      this.currentSentence ++;
    }
  }


}
