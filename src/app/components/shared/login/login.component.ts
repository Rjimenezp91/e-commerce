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

  loginForm!: FormGroup;
  constructor(private auth : AngularFireAuth) { 
    
  }

  ngOnInit(): void {
    this.createLoginForm();
    
  }

  signUpActive(){
    console.log('en loginComponent');
    const formBox = document.querySelector('.formBox');
    const body = document.querySelector('body');
    const buttonSignIn = document.querySelector('.button.sign-in');
    const buttonSignUp = document.querySelector('.button.sign-up');
    formBox?.classList.remove('active');
    body?.classList.remove('active');
    buttonSignIn?.classList.remove('active');
    buttonSignUp?.classList.add('active');

  }
  signInActive(){
    console.log('en loginComponent');
    const formBox = document.querySelector('.formBox');
    const body = document.querySelector('body');
    const buttonSignIn = document.querySelector('.button.sign-in');
    const buttonSignUp = document.querySelector('.button.sign-up');
    formBox?.classList.add('active');
    body?.classList.add('active');
    buttonSignIn?.classList.add('active');
    buttonSignUp?.classList.remove('active');

    
  }
  loginWithGoogle(){
        const popUp = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(popUp);
  }

  createLoginForm(){
    this.loginForm =  new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
      // email: new FormControl('', Validators.required),
      // password: new FormControl('', Validators.required)
    })
  }

}
