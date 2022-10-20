import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResultResolver } from './result.resolver';
import { ResultGuard } from './results/result.guard';
import { ResultService } from './results/result.service';

const routes: Routes = [
  
  {
    path: 'result',
    loadComponent: () => import('./results/approved/approved.component').then((m) => m.ApprovedComponent),
    data: {
      type: 'approved',
    },
    //canLoad: [ResultGuard],
    //canActivate: [ResultGuard],
    canMatch: [ResultGuard],
    resolve: {
      data: ResultResolver
    },
    providers: [ResultService, ResultGuard]
  },
  {
    path: 'result',
    loadComponent: () => import('./results/denied/denied.component').then((m) => m.DeniedComponent),
    data: {
      type: 'denied',
    },
    //canLoad: [ResultGuard],
    //canActivate: [ResultGuard],
    canMatch: [ResultGuard],
    resolve: {
      data: ResultResolver
    },
    providers: [ResultService, ResultGuard]
  },
  {
    path: 'page',
    loadComponent: () => import('./page/page.component').then((m) => m.PageComponent),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
