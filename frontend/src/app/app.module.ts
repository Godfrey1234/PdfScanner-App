import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    WebcamModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'landing', component: LandingComponent }
      
    
    ])

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
