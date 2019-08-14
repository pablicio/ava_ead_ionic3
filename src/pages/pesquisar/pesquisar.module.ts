import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisarPage } from './pesquisar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PesquisarPage
  ],
  imports: [
    IonicPageModule.forChild(PesquisarPage),
    ComponentsModule
  ],
})
export class PesquisarPageModule {}
