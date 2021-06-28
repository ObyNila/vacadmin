import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service


import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './com/appheader/appheader.component';
import { HomeComponent } from './com/home/home.component';
import { LeaveformComponent } from './com/leaveform/leaveform.component';
import { LoginComponent } from './com/login/login.component';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';


import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './com/dashboard/dashboard.component';


import { MsalModule } from '@azure/msal-angular';
import { MsalGuard } from '@azure/msal-angular';




const appRoutes: Route[] = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  // { path: 'dashboard', component: DashboardComponent},
  { path: 'leaveform', component: LeaveformComponent},

  // { path: 'login', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    HomeComponent,
    LeaveformComponent,
    LoginComponent
    // DashboardComponent,




  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SmartTableModule,


  ],
  providers:[BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
