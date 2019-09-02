import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'aMag';

  product = {
    name: 'iPhone L',
    summary: 'iPhone L(50) 2030',
    description: 'The new and amazing iPhone L (or 50) blows the minds of users with right to left gestures instead of old and out of fashion bottom to up',
    price: '5000',
  };
}
