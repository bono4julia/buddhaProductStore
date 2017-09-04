import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePaths } from './consts/route-paths'; 

const routes: Routes = [{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
{
  path: RoutePaths.main,
  loadChildren: 'app/pages/main/main.module#MainModule'
},
{
  path: RoutePaths.create,
  loadChildren: 'app/pages/create/create.module#CreateModule'
},
{
  path: RoutePaths.details,
  loadChildren: 'app/pages/details/details.module#DetailsModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
