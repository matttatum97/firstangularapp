import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeComponent } from './meme/meme.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "meme", component: MemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
