/**
 * Created by Alex_Xie on 02/02/2017.
 */

import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { StudentsComponent } from "./students/students.component";
import { ProfileComponent } from "./profile/profile.component"


const MY_ROUTES: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
