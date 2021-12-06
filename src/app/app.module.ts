import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyBxQtD_0bB3ZbsmUv0Jqp0u9TFtECR1rHg',
  authDomain: 'to-do-list-f5327.firebaseapp.com',
  projectId: 'to-do-list-f5327',
  storageBucket: 'to-do-list-f5327.appspot.com',
  messagingSenderId: '852422687379',
  appId: '1:852422687379:web:bce4a262d816b69f6aab66',
  measurementId: 'G-Q18JJMVMCP',
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TodoListComponent,
  ],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
