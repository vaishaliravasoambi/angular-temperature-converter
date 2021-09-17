import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  c = '';
  f = '';
  constructor() {}

  ngOnInit() {}

  onChange(value: String | null, type: 'c' | 'f') {
    if (value === null) {
      this.c = '';
      this.f = '';
      return;
    }

    const temperature = Number(value);
    if (type === 'c') {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
}
