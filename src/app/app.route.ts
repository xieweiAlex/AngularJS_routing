/**
 * Created by Alex_Xie on 02/02/2017.
 */

import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { StudentsComponent } from "./students/students.component";
import { ProfileComponent } from "./profile/profile.component"
import { Error404Component } from "./error404/error404.component"
import { ProfileGuardService } from "./profile-guard.service"


const MY_ROUTES: Routes = [
  { path: 'error/404', component: Error404Component },
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/profile/:id', component: ProfileComponent, canActivate: [ProfileGuardService] },
  { path: 'students/profile/', redirectTo: 'error/404'},
  { path: '**', redirectTo: 'error/404' }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
