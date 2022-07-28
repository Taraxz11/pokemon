import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChikoritaPage } from './chikorita.page';

const routes: Routes = [
  {
    path: '',
    component: ChikoritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChikoritaPageRoutingModule {}
