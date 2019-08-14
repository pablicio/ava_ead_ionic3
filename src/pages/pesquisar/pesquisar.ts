import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar, ModalController } from 'ionic-angular';
import { CursoItem } from '../meus-cursos/meus-cursos';
import { PopOverFilterCursosPage } from '../pop-over-filter-cursos/pop-over-filter-cursos';

export interface CategoriaItem {
  title: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

  @ViewChild('searchbar') searchbar: Searchbar;

  categorias: Array<CategoriaItem>;

  cursos: Array<CursoItem>;

  showCategorias: Boolean = true;

  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.categorias = this.getCategorias();

    this.cursos = this.getCursos();

  }

  ionViewDidLoad() {

    if (this.showCategorias) {
      setTimeout(() => {
        this.searchbar.setFocus();
      }, 300)
    }

    document.querySelectorAll('.searchbar-search-icon')[1].addEventListener("click", () => {   
      
      if (!this.showCategorias) {

        this.searchbar.setValue('');        

        let elem: any = document.querySelectorAll('.searchbar-search-icon')[1];
        elem.style.backgroundImage = 'url("/assets/svg/search.svg")';

        this.showCategorias = !this.showCategorias;

      }

    });

  }

  ionViewDidEnter() {
    if (this.showCategorias) {
      this.searchbar.setFocus();
    }
  }

  ionViewDidLeave() {
    if (this.showCategorias) {
      this.searchbar.setValue('');
    }
  }

  showOptions() {
    const popover = this.modalCtrl.create(PopOverFilterCursosPage, { cursos: this.cursos }, { cssClass: 'center-modal-topper' });
    popover.present();
  }

  // Provider
  getCategorias() {
    return this.categorias = [
      { title: 'Desenvolvimento', icon: 'code' },
      { title: 'Negócios', icon: 'stats' },
      { title: 'TI e Software', icon: 'desktop' },
      { title: 'Produtividade', icon: 'list-box' },
      { title: 'Pessoal', icon: 'book' },
      { title: 'Design', icon: 'brush' },
      { title: 'Marketing', icon: 'bulb' },
      { title: 'Estilo de vida', icon: 'paw' },
      { title: 'Fotográfia', icon: 'camera' }
    ];
  }

  getCursos() {
    return this.cursos = [
      {image: 'laravel', title: 'Ninja em Laravel', instructor: 'Pablicio', progress: 50, categoria: 'Desenvolvimento'},
      {image: 'merda', title: 'Como não ser um merda na vida', instructor: 'Sou um merda', progress: 0, categoria: 'Pessoal'},
      {image: 'cachaca', title: 'Produção de cachaça', instructor: 'Seu Lunga', progress: 100, categoria: 'Estilo de vida'}
    ];
  }

  showCursosByCategoria(categoria: CategoriaItem) {

    this.showCategorias = !this.showCategorias;

    if (!this.showCategorias) {

      this.searchbar.setValue(categoria.title);

      let elem: any = document.querySelectorAll('.searchbar-search-icon')[1];
      elem.style.backgroundImage = 'url("/assets/svg/arrow-back.svg")';

      this.cursos = this.getCursos().filter( (value) => {
  
        console.log(value.title.toLocaleLowerCase());
        
        return value.categoria.toLocaleLowerCase().indexOf(categoria.title.toLocaleLowerCase()) > -1;
        
      });

    }

  }

  // Searchbar
  onSearch(event) {

    console.log(event.target.value);
    let search: string = event.target.value;

    if (search.trim() != "") {
      this.searching = true;
    }

    setTimeout(() => {
     
      if (search.trim() != "") {

        this.showCategorias = false;

        this.cursos = this.getCursos().filter( (value) => {
  
          console.log(value.title.toLocaleLowerCase());
          
          return value.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1 || value.categoria.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
          
        });
    
      } else {
  
        if (search.trim() == "") {
          
          this.showCategorias = true;
          this.cursos = this.getCursos();

        }

      }

      this.searching = false;

    }, 300);

  }

  onClear() {
    this.showCategorias = true;
    this.cursos = this.getCursos();
  }

  onCancelSearch() {

    if (this.showCategorias && this.searchbar.value == "") {

      //faz nada

    } else {
      this.showCategorias = !this.showCategorias;
      let elem: any = document.querySelectorAll('.searchbar-search-icon')[1];
      elem.style.backgroundImage = 'url("/assets/svg/search.svg")';
    }

  }

}
