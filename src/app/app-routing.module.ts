import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { PeopleComponent } from './people/people.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'details/:id/:mediaType',canActivate:[AuthGuard],component:DetailsComponent},
  {path:'networks',canActivate:[AuthGuard],component:NetworksComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvshowsComponent},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},

  {path:'settings',canActivate:[AuthGuard],loadChildren:()=>import('./settings/settings.module').then(m=>m.SettingsModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
