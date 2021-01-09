import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./pages/sportHall/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/sportHall/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'user/login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user/register',
    loadChildren: () => import('./pages/user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user/roles/admin',
    loadChildren: () => import('./pages/user/roles/admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
