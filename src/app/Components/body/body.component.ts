import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
mostrar= true;
 frase:any ={
  mensaje: "Un poder lleva una gran responsanvilidad",
  autor: "Ben Parker"
 };

personajes: string[] = ['Iron-man','Bat-man','HellBoy']

}
