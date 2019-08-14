import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusCursosPage } from './meus-cursos';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MeusCursosPage
  ],
  imports: [
    IonicPageModule.forChild(MeusCursosPage),
    ComponentsModule
  ],
})
export class MeusCursosPageModule {}
