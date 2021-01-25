import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { IonicModule } from '@ionic/angular';

import { SetRolesPageRoutingModule } from './set-roles-routing.module';

import { SetRolesPage } from './set-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SetRolesPageRoutingModule
  ],
  declarations: [SetRolesPage,HeaderComponent]
})
export class SetRolesPageModule {}
