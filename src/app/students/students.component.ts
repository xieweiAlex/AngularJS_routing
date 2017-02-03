import { Component, OnInit } from '@angular/core';
import { StudentsDBService } from '../students-db.service';

@Component({
  selector: 'app-students',
  template: `
    <ul>
        <li *ngFor="let obj of datas"><a href="/profile/{{obj.id}}"> {{ obj.name }}</a> </li>
    </ul>
`,
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  datas: Object[];

  constructor(private studentsDB: StudentsDBService) {

    console.log(studentsDB.getData());
    this.datas = studentsDB.getData();
  }

  ngOnInit() {
  }

}
