import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreeckoPageRoutingModule } from './treecko-routing.module';

import { TreeckoPage } from './treecko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreeckoPageRoutingModule
  ],
  declarations: [TreeckoPage]
})
export class TreeckoPageModule {}
