import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { AuthService } from './services/auth.service';
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonList,
  IonLabel,
  IonMenuToggle,
} from '@ionic/angular';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NotificationComponent,
    IonApp,
    IonRouterOutlet,
    IonFooter,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonList,
    IonLabel,
    IonMenuToggle,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //NADA POR AQUI TODAVÍA
  public authService = inject(AuthService);
}
