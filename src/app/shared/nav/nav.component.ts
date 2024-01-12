import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  cerrarSesion() {
    // Realizar lógica de cierre de sesión si es necesario

    // Navegar a la página de inicio u otra página después de cerrar sesión
    this.router.navigate(['/iniciar-sesion']);

    // Eliminar la última entrada en el historial para que no pueda regresar
    this.location.replaceState('/');
  }
  userLoginOn: boolean = false;
  
  constructor(private router: Router, private location: Location){}

  ngOnInit() {}

}
