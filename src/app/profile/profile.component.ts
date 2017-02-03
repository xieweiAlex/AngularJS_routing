import {Component, OnInit, Input} from '@angular/core';
import { StudentsDBService } from '../students-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
    <h1> Student Profile </h1>
    <p> something  </p>
    <p> id: {{id}},name: {{stu.name}}, email: {{ stu.email }}  </p>
`,
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  stu: Object;
  id: string;

  constructor(private studentsDB: StudentsDBService, private router: ActivatedRoute) {
    console.log(studentsDB.getData());

    router.params.subscribe(params => {this.id = params['id']});
    this.stu = studentsDB.getData()[this.id];

    console.log(this.stu);
  }


  ngOnInit() {
  }

}
