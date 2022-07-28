import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/pokemons',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'regiones',
    loadChildren: () => import('./regiones/regiones.module').then( m => m.RegionesPageModule)
  },
  {
    path: 'pikachu',
    loadChildren: () => import('./pikachu/pikachu.module').then( m => m.PikachuPageModule)
  },
  {
    path: 'jolteon',
    loadChildren: () => import('./jolteon/jolteon.module').then( m => m.JolteonPageModule)
  },
  {
    path: 'elekid',
    loadChildren: () => import('./elekid/elekid.module').then( m => m.ElekidPageModule)
  },
  {
    path: 'squirtle',
    loadChildren: () => import('./squirtle/squirtle.module').then( m => m.SquirtlePageModule)
  },
  {
    path: 'golduck',
    loadChildren: () => import('./golduck/golduck.module').then( m => m.GolduckPageModule)
  },
  {
    path: 'vaporeon',
    loadChildren: () => import('./vaporeon/vaporeon.module').then( m => m.VaporeonPageModule)
  },
  {
    path: 'chikorita',
    loadChildren: () => import('./chikorita/chikorita.module').then( m => m.ChikoritaPageModule)
  },
  {
    path: 'snivy',
    loadChildren: () => import('./snivy/snivy.module').then( m => m.SnivyPageModule)
  },
  {
    path: 'treecko',
    loadChildren: () => import('./treecko/treecko.module').then( m => m.TreeckoPageModule)
  },
  {
    path: 'pansage',
    loadChildren: () => import('./pansage/pansage.module').then( m => m.PansagePageModule)
  },
  {
    path: 'kanto',
    loadChildren: () => import('./kanto/kanto.module').then( m => m.KantoPageModule)
  },
  {
    path: 'hoenn',
    loadChildren: () => import('./hoenn/hoenn.module').then( m => m.HoennPageModule)
  },
  {
    path: 'alola',
    loadChildren: () => import('./alola/alola.module').then( m => m.AlolaPageModule)
  },
  {
    path: 'islas',
    loadChildren: () => import('./islas/islas.module').then( m => m.IslasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
