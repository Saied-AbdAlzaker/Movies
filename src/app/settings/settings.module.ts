import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PrivacyComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
