import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'api_MARVEL';
}

// TODO implementar funcion en el boton busqueda quye guarde el string y lo pase como parametro a una función que recoja la url como la del service. Habrá que crear el método dinámico
