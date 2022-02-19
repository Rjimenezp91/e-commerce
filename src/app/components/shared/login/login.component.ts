import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isRegistered : boolean = true;
  isSecret : boolean = true;
  isRegisterPasswordSecret : boolean = true;
  isRegisterSecondPasswordSecret : boolean = true;

  emailRegEx: RegExp  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  
  constructor(private auth : AngularFireAuth,

    ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
    console.log(this.loginForm);
    
    
  }

  get getLoginEmail(): any {
    return this.loginForm.get('email');
  }
  get getLoginPassword(): any {
    return this.loginForm.get('password');
  }
  get getRegisterEmail(): any {
    return this.registerForm.get('email');
  }
  get getRegisterPassword(): any {
    return this.registerForm.get('password');
  }
  get getRegisterSecondPassword(): any {
    return this.registerForm.get('secondPassword');
  }

  loginWithGoogle(){
        const popUp = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(popUp);
  }

  createLoginForm(){
    this.loginForm =  new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
      password: new FormControl('', Validators.required)
    })
  }
  createRegisterForm(){
    this.registerForm =  new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegEx)]),
      password: new FormControl('', Validators.required),
      secondPassword: new FormControl('', Validators.required),
    })
  }

  validateRegister(){

    const formBox = document.querySelector('.formBox');
    const body = document.querySelector('body');
    const buttonSignIn = document.querySelector('.button.sign-in');
    const buttonSignUp = document.querySelector('.button.sign-up');
    console.log(this.isRegistered);
    
    if (this.isRegistered) {
      console.log('isRegistered true',this.isRegistered);
      this.loginForm.reset();
      formBox?.classList.add('active');
      body?.classList.add('active');
      buttonSignIn?.classList.add('active');
      buttonSignUp?.classList.remove('active');
    }else{
      console.log('isRegistered false',this.isRegistered);
      this.registerForm.reset();
      formBox?.classList.remove('active');
      body?.classList.remove('active');
      buttonSignIn?.classList.remove('active');
      buttonSignUp?.classList.add('active');
    }

    this.isRegistered = !this.isRegistered;
  }

  loginWithUserAndPass(){
    const email = this.getLoginEmail.value;
    const pass = this.getLoginPassword.value;

    
    this.auth.signInWithEmailAndPassword(email, pass).then(response => {
      console.log(response);
      
    }).catch(err => {
      console.log(err);
      return null
      
    })
  }

  async createUserWithEmailAndPassword(){
    if(this.getRegisterPassword.value === this.getRegisterSecondPassword.value){

      await this.auth.createUserWithEmailAndPassword(this.getRegisterEmail, this.getRegisterPassword).then(user =>{
        console.log(user);
        
      }).catch(err =>{
        console.log(err);
        return null;  
        
      });
    }
  
  }
}
