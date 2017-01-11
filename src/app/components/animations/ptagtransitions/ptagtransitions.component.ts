import {
  Component,
  OnInit,
  /*
    importaciones especificas para animaciones
  */
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-ptagtransitions',
  templateUrl: './ptagtransitions.component.html',
  styleUrls: ['./ptagtransitions.component.css'],
  animations: [
    /*
      Desencadenadores:  que inicia y para la animacion
     */
    trigger('pState', [
      //vuelve el fondo gris y el texto un poco mas pequeño
      //para indicare la etiqueta p esta 'inactiva'
      state('activo', style({
        fontWeight: "bold",
        backgroundColor: "#eeff00",
        transform: "scale(1)"
      })),
      state('inactivo', style({
        backgroundColor: "#efefef",
        transform: 'scale(.9)'
      })),

      //Transiciones: define los estados de la animacion con Transiciones
      transition('activo => inactivo', animate('300ms ease-out')),

      //fijese que esta transicion es un poco mas despacio con fines de demostracion
      transition('inactivo => activo', animate('100ms ease-in'))
    ])
  ]
})
export class PtagtransitionsComponent implements OnInit {

  pStatus: string;

  constructor() {
    this.pStatus = "activo";
  }

  toggleP() {
    this.pStatus = (this.pStatus == "inactivo") ? "activo" : "inactivo";
  }

  ngOnInit() {

  }

}
