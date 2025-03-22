import { Voiture } from './Voiture' ;

 export const VOITURE: Voiture[] = [

  {
    id : 1 ,
    marque : 'Mercedes',
    type : 'luxe',
    poids : 1200,
    created : new Date(2023 ,12 , 10) ,
    picture : 'assets/images/v6.jpg'

  } ,

  {
    id: 2,
    marque: 'Toyota',
    type: 'SUV',
    poids: 1500,
    created: new Date(2022, 5, 15), // Juin
    picture: 'assets/images/v7.jpg'
  },

  {
    id: 3,
    marque: 'BMW',
    type: 'Sport',
    poids: 1400,
    created: new Date(2023, 7, 5), // Août
    picture: 'assets/images/v3.jpg'
  },

  {
    id: 4,
    marque: 'Ford',
    type: 'Pickup',
    poids: 1800,
    created: new Date(2021, 3, 20), // Avril
    picture: 'assets/images/v7.jpg'
  },

  {
    id: 5,
    marque: 'Audi',
    type: 'Luxe',
    poids: 1300,
    created: new Date(2020, 10, 25), // Novembre
    picture: 'assets/images/v5.jpg'
  },

  {
    id: 6,
    marque: 'Honda',
    type: 'Compacte',
    poids: 1100,
    created: new Date(2023, 0, 30), // Janvier
    picture: 'assets/images/v6.jpg'
  },

  {
    id: 7,
    marque: 'Porsche',
    type: 'Sport',
    poids: 1350,
    created: new Date(2022, 9, 12), // Octobre
    picture: 'assets/images/v7.jpg'
  },

  {
    id: 8,
    marque: 'Tesla',
    type: 'Électrique',
    poids: 1600,
    created: new Date(2024, 1, 5), // Février
    picture: 'assets/images/v3.jpg'
  },

  {
    id: 9,
    marque: 'Chevrolet',
    type: 'Muscle',
    poids: 1750,
    created: new Date(2019, 4, 14), // Mai
    picture: 'assets/images/v5.jpg'
  },


]