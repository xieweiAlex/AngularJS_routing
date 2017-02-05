import { Component, OnInit } from '@angular/core';
import { StudentsDBService } from '../students-db.service';

@Component({
  selector: 'app-students',
  template: `
    <ul>
        <li *ngFor="let stu of datas">
            <a [routerLink]= "['profile', stu.id]" > {{ stu.name }}</a>
        </li>
        

        
    </ul>
`,
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  datas: Object[];
  id: string;

  constructor(private studentsDB: StudentsDBService) {

    console.log(studentsDB.getData());
    this.datas = studentsDB.getData();
  }

  ngOnInit() {
  }

}




