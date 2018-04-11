import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

/**
 * Generated class for the FormDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[form]' // Attribute selector
})
export class FormDirective {
  constructor() {
    console.log('Hello FormDirective Directive');
  }

}

export function requiredUserValidator(value: string, error: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const blRequired = control.value && control.value.length > 0
    console.log(blRequired);
    return !blRequired ? { 'requiredUserError': error } : null;
  }
}

@Directive({
  selector: "[requiredUser]",
  providers: [{ provide: NG_VALIDATORS, useExisting: RequiredUserValidatorDirective, multi: true }]
})
export class RequiredUserValidatorDirective implements Validator{
  @Input() requiredUser:string;
  @Input() requiredUserError:string;

  validate(control: AbstractControl): { [key: string]: any } {
    console.log(123);
    return this.requiredUser ? requiredUserValidator(this.requiredUser,this.requiredUserError)(control)
      : null;
  }
}

/**
 * 正则验证
 * @param strRe 正则表达式
 */
export function regExpValidator(strRe: RegExp, error: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const blRe = control.value && strRe.test(control.value); //control.value undefined
    return !blRe ? { 'reCheckError': error } : null; //正则验证失败返回错误
  };
}
@Directive({
  selector: "[reCheck]",
  providers: [{ provide: NG_VALIDATORS, useExisting: RegExpValidatorDirective, multi: true }]
})
export class RegExpValidatorDirective implements Validator {
  @Input('reCheck') reCheck: string;
  @Input('reCheckError') reCheckError: string;
  /**
   * 正则验证
   * @param control 控件
   */
  validate(control: AbstractControl): { [key: string]: any } {
    //console.log(this.reCheck);
    return this.reCheck ? regExpValidator(new RegExp(this.reCheck), this.reCheckError)(control)
      : null;
  }
}



