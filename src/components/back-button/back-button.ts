import { Component, Input } from '@angular/core';

/**
 * Generated class for the BackButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-button',
  templateUrl: 'back-button.html'
})
export class BackButtonComponent {

  @Input() title:string

  constructor() {
    
  }

}
