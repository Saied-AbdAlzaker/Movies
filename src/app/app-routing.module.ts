import { AuthGuard } from './Guards/auth.guard';
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
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},
  {path:'movies',component:MoviesComponent,canActivate:[AuthGuard]},
  {path:'networks',component:NetworksComponent,canActivate:[AuthGuard]},
  {path:'people',component:PeopleComponent,canActivate:[AuthGuard]},
  {path:'tv',component:TvshowsComponent,canActivate:[AuthGuard]},
  {path:'details/:id/:mediaType',component:DetailsComponent,canActivate:[AuthGuard]},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},

  {path:'settings',loadChildren:()=>import('./settings/settings.module').then(m=>m.SettingsModule),canActivate:[AuthGuard]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
