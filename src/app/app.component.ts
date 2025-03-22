import { Component , OnInit ,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VOITURE } from './mosk-voiture-liste' ;
import { Voiture } from './Voiture' ;
import { CommonModule } from '@angular/common';
import { EffetCarDirective } from './effet-car.directive';


@Component({
  selector: 'app-root',
  //template: `<h1> {{ title }} </h1>`,
  standalone: true,
  imports: [CommonModule,EffetCarDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  voitureList : Voiture[] = VOITURE ;
  title = 'Liste des  voitures'
  voitureSelected : Voiture|undefined ;

  ngOnInit () : void {
    console.table(this.voitureList) ;
  }

  selectVoiture(voitureId : string ) : void {
    const voiture : Voiture|undefined = this.voitureList.find(voiture => voiture.id == +voitureId) ;
    if(voiture){
      console.log(`Vous avez choisi la voiture ${ voiture.marque}`)
      this.voitureSelected = voiture ;
    }else{

      console.log(`La voiture selectionnee n'existe pas .`) ;
      this.voitureSelected = voiture ;
    }

  }
}
