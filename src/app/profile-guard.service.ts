import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { StudentsDBService } from './students-db.service';


@Injectable()
export class ProfileGuardService implements CanActivate {

  constructor(private stuDB: StudentsDBService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    var id = route.params['id'];
    if (id) {
      var stuList = this.stuDB.getData().filter(stu => stu.id === id);
      if (stuList.length > 0) {
        return true;
      }
    }

    this.router.navigate(['/error/404']);
    return false;
  }

}
