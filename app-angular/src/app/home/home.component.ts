
import { Component, Input,  } from '@angular/core';
import { Historia } from '../interface/interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent  {
  
  historia:Historia[] = [
    { 
        texto:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        img:"" 
    },

    {
        texto:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        img:"" 
    },
    
    {
        texto:"L'heroi va decidir travessar la porta que el portava a casa",
        img:"" 
    },
    
    {
        texto:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
        img:""    
    }

  
    
  
    
]




}
