import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RelogGuardService } from './relog-guard.service';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [RelogGuardService], //can't go to login when already logged in
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [RelogGuardService], //can't go to register when already logged in
    component: RegisterComponent,
  },
  {
    path: 'todo-list',
    canActivate: [AuthGuardService], //can't go to todo-list when not logged in
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
