import { NgModule } from '@angular/core';
import { DetailComponent } from './detail/detail';
import { IonicPageModule } from 'ionic-angular';
import { PaginationComponent } from './pagination/pagination';
@NgModule({
	declarations: [
    DetailComponent,
    PaginationComponent],
	imports: [IonicPageModule.forChild(ComponentsModule)],//此处需要改成IonicPageModule
	exports: [
	DetailComponent,
    PaginationComponent],
	entryComponents:[DetailComponent]
})
export class ComponentsModule {}
