import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BucketsComponent} from './components/buckets/buckets.component';
import {ConnectComponent} from './connect/connect.component';

const routes: Routes = [
  {path: 'buckets', component: BucketsComponent},
  {path: '', component: ConnectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
