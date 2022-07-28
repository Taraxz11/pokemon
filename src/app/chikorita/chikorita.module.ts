import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChikoritaPageRoutingModule } from './chikorita-routing.module';

import { ChikoritaPage } from './chikorita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChikoritaPageRoutingModule
  ],
  declarations: [ChikoritaPage]
})
export class ChikoritaPageModule {}
