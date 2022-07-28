import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElekidPage } from './elekid.page';

const routes: Routes = [
  {
    path: '',
    component: ElekidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElekidPageRoutingModule {}
