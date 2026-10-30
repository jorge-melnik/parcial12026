import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular';

@Component({
  imports: [IonGrid, IonRow, IonCol],
  selector: 'app-home',
  styleUrl: './home.page.css',
  templateUrl: './home.page.html',
})
export class HomePage {
  //Acá nuestro código. Dentro de la clase.
}
