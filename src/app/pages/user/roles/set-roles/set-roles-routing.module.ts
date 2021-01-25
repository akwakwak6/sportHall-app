import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetRolesPage } from './set-roles.page';

const routes: Routes = [
  {
    path: '',
    component: SetRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetRolesPageRoutingModule {}
