import { PrivacyComponent } from './privacy/privacy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';

// Lazy Loading (Multi Modules)

const routes: Routes = [
  {path:'',redirectTo:'privacy',pathMatch:'full'},
  {path:'privacy',component:PrivacyComponent},
  {path:'profile',component:ProfileComponent},
  {path:'password',component:PasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
