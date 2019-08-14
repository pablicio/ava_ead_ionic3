import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulasPage } from '../aulas/aulas';

export interface CursoItem {
  image: string;
  title: string;
  instructor: string;
  progress: number;
  categoria: string;
}

@IonicPage()
@Component({
  selector: 'page-meus-cursos',
  templateUrl: 'meus-cursos.html',
})
export class MeusCursosPage {

  cursos: Array<CursoItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cursos = [
      {image: 'laravel', title: 'Ninja em Laravel', instructor: 'Pablicio', progress: 50, categoria: 'Desenvolvimento'},
      {image: 'merda', title: 'Como não ser um merda na vida', instructor: 'Sou um merda', progress: 0, categoria: 'Pessoal'},
      {image: 'cachaca', title: 'Produção de cachaça', instructor: 'Seu Lunga', progress: 100, categoria: 'Estilo de vida'},
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusCursosPage');
  }

  goToAula() {
    this.navCtrl.push(AulasPage)
  }

}
