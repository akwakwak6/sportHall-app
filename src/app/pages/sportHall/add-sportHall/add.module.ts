import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPage } from './add.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AddPageRoutingModule }  from './add-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule
  ],
  declarations: [AddPage,HeaderComponent]
})
export class AddPageModule {}