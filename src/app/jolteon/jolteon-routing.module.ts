import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JolteonPage } from './jolteon.page';

const routes: Routes = [
  {
    path: '',
    component: JolteonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JolteonPageRoutingModule {}
