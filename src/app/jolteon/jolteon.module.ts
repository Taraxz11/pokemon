import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JolteonPageRoutingModule } from './jolteon-routing.module';

import { JolteonPage } from './jolteon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JolteonPageRoutingModule
  ],
  declarations: [JolteonPage]
})
export class JolteonPageModule {}
