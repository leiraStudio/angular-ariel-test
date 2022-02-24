import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },

  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
