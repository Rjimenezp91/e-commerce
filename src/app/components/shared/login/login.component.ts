import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // signInBtn = document.querySelector('.sign-in');
  // signUpBtn = document.querySelector('.sign-up');
  // formBox = document.querySelector('.formBox');

  constructor(private auth : AngularFireAuth) { 
    
  }

  ngOnInit(): void {

  }

  signUpActive(){
    console.log('en loginComponent');
    const formBox = document.querySelector('.formBox');
    formBox?.classList.remove('active');
  }
  signInActive(){
    console.log('en loginComponent');
    const formBox = document.querySelector('.formBox');
    formBox?.classList.add('active');
    const popUp = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(popUp);
    
  }

}
