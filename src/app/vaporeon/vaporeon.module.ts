import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaporeonPageRoutingModule } from './vaporeon-routing.module';

import { VaporeonPage } from './vaporeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaporeonPageRoutingModule
  ],
  declarations: [VaporeonPage]
})
export class VaporeonPageModule {}
