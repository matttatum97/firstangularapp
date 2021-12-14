import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeComponent } from './meme/meme.component';

const routes: Routes = [
  {path: "meme", component: MemeComponent},
  {path: "", redirectTo: "meme", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
