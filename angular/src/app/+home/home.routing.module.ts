import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent}
];

export const routing = RouterModule.forChild(routes);
