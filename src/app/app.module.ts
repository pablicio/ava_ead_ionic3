import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import { BrMaskerModule } from 'brmasker-ionic-3';
import { ComponentsModule } from "../components/components.module";
import { PopOverFilterCursosPage } from "../pages/pop-over-filter-cursos/pop-over-filter-cursos";
import { AulasPageModule } from "../pages/aulas/aulas.module";
import { VideoPlayerPageModule } from "../pages/video-player/video-player.module";
import { MeusCursosPageModule } from "../pages/meus-cursos/meus-cursos.module";
import { PesquisarPageModule } from "../pages/pesquisar/pesquisar.module";
import { PopOverFilterCursosPageModule } from "../pages/pop-over-filter-cursos/pop-over-filter-cursos.module";
import { CheckoutTripPageModule } from "../pages/checkout-trip/checkout-trip.module";
import { SettingsPageModule } from "../pages/settings/settings.module";
import { HomePageModule } from "../pages/home/home.module";
import { LoginPageModule } from "../pages/login/login.module";
import { LocalWeatherPageModule } from "../pages/local-weather/local-weather.module";
import { NotificationsPageModule } from "../pages/notifications/notifications.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { SearchLocationPageModule } from "../pages/search-location/search-location.module";

@NgModule({
  declarations: [
    MyApp
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrMaskerModule,
    ComponentsModule,
    AulasPageModule,
    VideoPlayerPageModule,
    MeusCursosPageModule,
    PesquisarPageModule,
    PopOverFilterCursosPageModule,
    CheckoutTripPageModule,
    SettingsPageModule,
    HomePageModule,
    LoginPageModule,
    LocalWeatherPageModule,
    NotificationsPageModule,
    RegisterPageModule,
    SearchLocationPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
  ]
})

export class AppModule {
}
