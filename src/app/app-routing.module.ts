import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './declaration/add/add.component';
import { CheckPhoneComponent } from './declaration/check-phone/check-phone.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RegionalDetailComponent } from './regional-detail/regional-detail.component';
import { Top10Component } from './top10/top10.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"view-details",component:RegionalDetailComponent},
  {path:"top-10",component:Top10Component},
  {path:"news",component:NewsComponent},
  {path:"check-phone",component:CheckPhoneComponent},
  {path:"add",component:AddComponent},
  {path:":id/update",component:AddComponent},
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
