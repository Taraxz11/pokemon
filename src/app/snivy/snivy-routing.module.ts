import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnivyPage } from './snivy.page';

const routes: Routes = [
  {
    path: '',
    component: SnivyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnivyPageRoutingModule {}
