import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { ErrorComponent } from './pages/error/error.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { EdicionComponent } from './pages/edicion/edicion.component';
import { ListAvataresComponent } from './pages/list-avatares/list-avatares.component';
import { CloneAvatarComponent } from './pages/clone-avatar/clone-avatar.component';

const routes: Routes = [
  {
    path: '', redirectTo: "/login", pathMatch:"full"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'singUp', component: SignUpComponent
  },
  {
    path: 'list', component: ListAvataresComponent
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'edit/:avatarId', component: EdicionComponent
  },
  {
    path: 'clone/:avatarId', component: CloneAvatarComponent
  },
  {
    path: 'edit', component: EdicionComponent
  },
  {
    path: '**', component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
