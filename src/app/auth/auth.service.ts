import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

isAuthenticated(username: string, password: string): boolean {
  if (username === 'usuario' && password === 'contraseña') {
    // Almacena un token de autenticación en localStorage
    localStorage.setItem('token', 'token_de_ejemplo');
    return true;
  }
  return false;  
}

}
