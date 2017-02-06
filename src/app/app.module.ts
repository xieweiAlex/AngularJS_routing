import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// routes
import { myRoutes } from "./app.route";

// servers
import { StudentsDBService } from "./students-db.service";

import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { ProfileGuardService } from './profile-guard.service'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [StudentsDBService, ProfileGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }



