import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaporeonPage } from './vaporeon.page';

const routes: Routes = [
  {
    path: '',
    component: VaporeonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaporeonPageRoutingModule {}
