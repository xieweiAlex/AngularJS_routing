import {Component, OnInit, Input} from '@angular/core';
import { StudentsDBService } from '../students-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
    <p> id: {{id}} </p>
    <p> name: {{stu.name}} </p>
    <p> email: {{ stu.email }} </p>
`,
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  stu: Object;
  id: string;

  constructor(private studentsDB: StudentsDBService, private router: ActivatedRoute) {

    console.log("my id is: " + this.id);

    console.log(studentsDB.getData());

    router.params.subscribe(params => {this.id = params['id']});
    this.stu = studentsDB.getData().filter(stu => stu.id === this.id )[0];

    console.log(this.stu);
  }

  ngOnInit() {
  }

}
