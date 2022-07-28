import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PansagePage } from './pansage.page';

const routes: Routes = [
  {
    path: '',
    component: PansagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PansagePageRoutingModule {}
