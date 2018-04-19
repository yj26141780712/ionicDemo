import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Generated class for the PaginationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pagination',
  templateUrl: 'pagination.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
  }]
})
export class PaginationComponent { 

  @Input() firstText:string;
  @Input() previousText:string;
  @Input() nextText:string;
  @Input() lastText:string;

  @Input() pageNum:string;
  text: string;

  constructor() {
    console.log('Hello PaginationComponent Component');
    this.text = 'Hello World';
    //this.firstText="1333";
  }

}
