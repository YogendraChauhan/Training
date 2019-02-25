import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {
  title = 'Angular Training';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.title = event.snapshot.data.name;
        console.log(event.snapshot);
      }
    });
  }
}
