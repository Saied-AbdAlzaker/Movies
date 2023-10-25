import { PrivacyComponent } from './privacy/privacy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';

// Lazy Loading (Multi Modules)

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'password',component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
