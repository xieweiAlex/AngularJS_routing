import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// routes
import { myRoutes } from "./app.route";

// servers
import { StudentsDBService } from "./students-db.service"

import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes

  ],
  providers: [StudentsDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
