import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPage } from './admin.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AdminPageRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage,HeaderComponent]
})
export class AdminPageModule {}


