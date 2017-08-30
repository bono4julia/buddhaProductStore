import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
{
  path: 'main',
  loadChildren: 'app/pages/main/main.module#MainModule'
},
{
  path: 'create',
  loadChildren: 'app/pages/create/create.module#CreateModule'
},
{
  path: 'details/:id',
  loadChildren: 'app/pages/details/details.module#DetailsModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
