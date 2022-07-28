import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnivyPageRoutingModule } from './snivy-routing.module';

import { SnivyPage } from './snivy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnivyPageRoutingModule
  ],
  declarations: [SnivyPage]
})
export class SnivyPageModule {}
