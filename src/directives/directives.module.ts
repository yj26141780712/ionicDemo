import { NgModule } from '@angular/core';
import { FormDirective, RegExpValidatorDirective, RequiredUserValidatorDirective } from './form/form';
@NgModule({
	declarations: [FormDirective,RegExpValidatorDirective,RequiredUserValidatorDirective],
	imports: [],
	exports: [FormDirective,RegExpValidatorDirective,RequiredUserValidatorDirective]
})  
export class DirectivesModule {}
