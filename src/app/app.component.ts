import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'aMag';

  products = [
    {
      name: 'iPhone L',
      summary: 'iPhone L(50) 2030',
      description: 'The new and amazing iPhone L (or 50) blows the minds of users with right to left gestures instead of old and out of fashion bottom to up',
      price: '5000',
    },
    {
      name: 'Huawei P345',
      summary: 'Huawei P349 34 cameras, 9"',
      description: 'Huawei P345 will catch every detail of the picture you take with its 34 cameras of ultra high resolution. Details will never esacpe your camera and the 9 inch design allows folding like a papirus. You will look like a digitalized roman emperor',
      price: '4800',
    }
  ];

  product = this.products[0];
}
