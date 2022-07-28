import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeckoPage } from './treecko.page';

const routes: Routes = [
  {
    path: '',
    component: TreeckoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeckoPageRoutingModule {}
