import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'api_MARVEL';
  declare $: any;

  ngOnInit() {}
}

// TODO implementar funcion en el boton busqueda quye guarde el string y lo pase como parametro a una función que recoja la url como la del service. Habrá que crear el método dinámico
