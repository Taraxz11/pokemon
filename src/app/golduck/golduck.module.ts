import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GolduckPageRoutingModule } from './golduck-routing.module';

import { GolduckPage } from './golduck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GolduckPageRoutingModule
  ],
  declarations: [GolduckPage]
})
export class GolduckPageModule {}
