import monstera from '../assets/monstera.jpg';
import lyrata from '../assets/lyrata.jpg';
import pothos from '../assets/pothos.jpg';
import succulent from '../assets/succulent.jpg';
import olivier from '../assets/olivier.jpg';
import basil from '../assets/basil.jpg';
import mint from '../assets/mint.jpg';
import calathea from '../assets/calathea.jpg';
import cactus from '../assets/cactus.jpg';

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        // isBestSale: true,
        // isSpecialOffer: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        // isBestSale: false,
        // isSpecialOffer: true,
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16

	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        // isBestSale: true,
        // isSpecialOffer: true,
		light: 1,
		water: 2,
		cover: pothos,
		price: 9

	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        // isBestSale: true,
        // isSpecialOffer: true,
		light: 3,
		water: 1,
		cover: calathea,
		price: 20

	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        // isBestSale: false,
        // isSpecialOffer: false,
		light: 3,
		water: 1,
		cover: olivier,
		price: 25

	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        // isBestSale: true,
        // isSpecialOffer: false,
		light: 2,
		water: 2,
		cover: cactus,
		price: 6

	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        // isBestSale: false,
        // isSpecialOffer: false,
		light: 2,
		water: 3,
		cover: basil,
		price: 5

	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        // isBestSale: true,
        // isSpecialOffer: true,
		light: 2,
		water: 1,
		cover: succulent,
		price: 8

	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        // isBestSale: false,
        // isSpecialOffer: false,
		light: 2,
		water: 1,
		cover: mint,
		price: 4

	}
];

/*
const plantList = [
	{
		name: 'monstera',
		light: 2,
		water: 3,
	},
	{
		name: 'ficus lyrata',
		light: 3,
		water: 1,
	}];

// const plant = plantList.map(plant => plant.name)
const plant = plantList.map(plant => plant.light)
const lightExtr = plant[1];

 const range = [1, 2, 3];

range.map( rangeElem => lightExtr >= rangeElem ? console.log('*') : null )
*/