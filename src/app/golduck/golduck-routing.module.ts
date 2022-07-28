import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GolduckPage } from './golduck.page';

const routes: Routes = [
  {
    path: '',
    component: GolduckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GolduckPageRoutingModule {}
