import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <div class="alert alert-danger">Sorry, the requested page is not available!</div>
    
`,
  styles: []
})
export class Error404Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
