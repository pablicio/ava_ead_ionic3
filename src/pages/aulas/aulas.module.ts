import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulasPage } from './aulas';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AulasPage,
  ],
  imports: [
    IonicPageModule.forChild(AulasPage),
    ComponentsModule,
  ],
})
export class AulasPageModule {}
