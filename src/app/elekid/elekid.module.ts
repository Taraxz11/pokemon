import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElekidPageRoutingModule } from './elekid-routing.module';

import { ElekidPage } from './elekid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElekidPageRoutingModule
  ],
  declarations: [ElekidPage]
})
export class ElekidPageModule {}
