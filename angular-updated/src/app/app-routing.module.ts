import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TranslationLoaderResolver } from './core/services/translation-loader.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'feature1',
    loadChildren: () => import('./feature1/feature1.module').then(m => m.Feature1Module),
    // resolve: { trans: TranslationLoaderResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
