import { Component , OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VOITURE } from './mosk-voiture-liste' ;
import { Voiture } from './Voiture' ;


@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ title }} !.</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  voitureList = VOITURE ;
  title = 'Liste des  voitures'

  ngOnInit () : void {
    console.table(this.voitureList) ;
    this.selectVoiture(this.voitureList[1]);
  }

  selectVoiture( voiture : Voiture) : void {
    console.log(` vous avez cliquer sur la voiture ${voiture.marque}.`) ;
  }
}
