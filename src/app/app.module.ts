// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { WatchPipe } from './watch.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { ApiKeyInterceptor } from './api-key.interceptor';
import { SettingsModule } from './settings/settings.module';


// import { TranslateModule , TranslateLoader } from '@ngx-translate/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    DetailsComponent,
    NavbarComponent,
    NetworksComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    PeopleComponent,
    TvshowsComponent,
    WatchPipe,
    SeemorePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SettingsModule,
    // BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    // TranslateModule.forRoot({
    //   loader:{
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // }),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ApiKeyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function createTranslateLoader(http:HttpClient){
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }




