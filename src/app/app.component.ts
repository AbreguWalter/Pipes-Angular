import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line: no-inferrable-types
  nombre: string = 'Capital America';
  nombre2: string = 'waLteR HuGo ABRegu TInoCo';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  // tslint:disable-next-line: no-inferrable-types
  porcertanje: number = 0.235;

  salario = 1234.5;

  idioma: string = 'es';

  fecha: Date = new Date();

  videoURL: string = "https://www.youtube.com/embed/Nguo5HVshY8";

  activar : boolean =  true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });


  heroe = {
    nombre: 'Logan',
    clave: 'wolverin',
    edad: 500,
    direccion : {
      calle: 'Primera',
      casa: 20
    }
  };
}
