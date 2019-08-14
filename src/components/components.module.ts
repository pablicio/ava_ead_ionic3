import { NgModule } from '@angular/core';
import { VideoComponent } from './video/video';
import { IonicPageModule } from 'ionic-angular';
import { ProgressbarComponent } from './progressbar/progressbar';
import { AccordionListComponent } from './accordion-list/accordion-list';
@NgModule({
	declarations: [VideoComponent, AccordionListComponent,
    ProgressbarComponent,
    AccordionListComponent],
	imports: [IonicPageModule.forChild(VideoComponent), IonicPageModule.forChild(AccordionListComponent)],
	exports: [VideoComponent,
    ProgressbarComponent,
    AccordionListComponent]
})
export class ComponentsModule {}
