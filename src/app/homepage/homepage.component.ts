import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <h2> Maharish University of Management </h2>
    <p> Maharishi University of Management (MUM), formerly Maharishi International University, is an American non-profit university located in Fairfield, Iowa. It was founded in 1973 by Maharishi Mahesh Yogi and features a "consciousness-based education" system that includes the practice of the Transcendental Meditation technique.[6][7] Its founding principles include the development of the full potential of the individual, fulfilling economic aspirations while maximizing proper use of the environment and bringing spiritual fulfillment and happiness to humanity.[8]
    </p>
    
  `,
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
