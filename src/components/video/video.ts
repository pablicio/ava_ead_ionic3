import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the VideoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ava-video',
  templateUrl: 'video.html'
})
export class VideoComponent {


  @Input() image = 'assets/img/trip/thumb/trip_5.jpg'
  @Input() id = 1
  @Input() name = 'uu'
  @Input() thumb = 'assets/img/trip/thumb/trip_1.jpg'
  @Input() time = '12h'


  public trip: any = {
    id: 1,
    name: "Copacabana Beach",
    price_adult: 60,
    price_child: 30,
    time: "12h",
    free_cancellation: 1,
    electric_voucher: 1,
    sub_name: "English Commentary Tour",
    thumb: "assets/img/trip/thumb/trip_1.jpg",
    description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
    location: "Rio de Janeiro, Brazil",
    images: [
      "assets/img/trip/thumb/trip_5.jpg",
      "assets/img/trip/thumb/trip_6.jpg",
      "assets/img/trip/thumb/trip_7.jpg",
      "assets/img/trip/thumb/trip_8.jpg",
    ],
    highlights: [
      "Numerous kiosks",
      "First in a string of Atlantic Ocean-facing beaches",
      "Sand is flanked by mountains in the background",
      "Swing in the turquoise waters",
      "Water Sports",
    ]
  };


  constructor(public nav: NavController) {
    // set sample data
  }

  // view trip detail
  viewDetail(id) {

  }

}
