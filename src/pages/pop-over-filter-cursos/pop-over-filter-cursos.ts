import { CursoItem } from './../meus-cursos/meus-cursos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pop-over-filter-cursos',
  templateUrl: 'pop-over-filter-cursos.html',
})
export class PopOverFilterCursosPage {

  cursos: Array<CursoItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.cursos = navParams.get('cursos');

  }

  ionViewDidLoad() {
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
