import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { AuthModule} from '@angular/fire/auth';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import {environment} from 'src/environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    // AuthModule,
    // provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    // provideFirestore(()=> getFirestore())
  ],
  providers: [
    // { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
