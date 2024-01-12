import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  userDefaults:string = '';
  passDefaults:string = '';
  
  login: FormGroup = this.FormBuilder.group({
    usuario: ['', Validators.required],
    contraseña: ['', Validators.required],
  })
  constructor(private FormBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {

    }

    onSubmit(){
       this.userDefaults ='admin';
       this.passDefaults= 'admin';
      if(this.login.valid){
        const user = {
          nombre: this.login.value.usuario,
          contraseña: this .login.value.contraseña
        }
        if (user.nombre == this.userDefaults && user.contraseña == this.passDefaults) {
          this.router.navigate(['inicio'])
          sessionStorage.setItem('login',JSON.stringify(user)) 
          
          console.log('USUARIO', user.nombre);
          console.log('contraseña', user.contraseña);
        }
        
        
        
      }
    }

}
