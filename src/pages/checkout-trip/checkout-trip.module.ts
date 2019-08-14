import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CheckoutTripPage } from './checkout-trip';

@NgModule({
  declarations: [
    CheckoutTripPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutTripPage),
    ComponentsModule
  ],
})
export class CheckoutTripPageModule {}
