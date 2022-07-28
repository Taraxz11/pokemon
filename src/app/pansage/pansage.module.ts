import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PansagePageRoutingModule } from './pansage-routing.module';

import { PansagePage } from './pansage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PansagePageRoutingModule
  ],
  declarations: [PansagePage]
})
export class PansagePageModule {}
