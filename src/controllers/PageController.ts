import { Request, Response } from 'express';
import { IMenu } from '../interfaces/IMenu';
import { IBanner } from '../interfaces/IBanner';
import { getInitialParams } from '../utils/initialParams';
import { IPage } from '../interfaces/IPage';
import { Pet } from '../models/Pet';

const showHome = (req: Request, res: Response, menus: IMenu[]) => {
	res.render('pages/page', {
		...getInitialParams(menus, req),
		banner: {
			title: 'Todos os animais',
			src: 'images/allanimals.jpg',
			text: 'Todos os animais',
			subtext: 'Alegria para toda sua casa e família',
		} as IBanner,
		pets: Pet.getAll(),
	} as IPage);
};

const showDogs = (req: Request, res: Response, menus: IMenu[]) => {
	res.render('pages/page', {
		...getInitialParams(menus, req, 'Cachorros'),
		banner: {
			title: 'Cachorros',
			src: 'images/banner_dog.jpg',
			text: 'Cachorros',
			subtext: 'Eu estava com tanta saudade',
		} as IBanner,
		animal: 'Cachorros',
		pets: Pet.getByType('dog'),
	} as IPage);
};

const showCats = (req: Request, res: Response, menus: IMenu[]) => {
	res.render('pages/page', {
		...getInitialParams(menus, req, 'Gatos'),
		banner: {
			title: 'Gatos',
			src: 'images/banner_cat.jpg',
			text: 'Gatos',
			subtext: 'Me dá meu sachê.',
		} as IBanner,
		animal: 'Gatos',
		pets: Pet.getByType('cat'),
	} as IPage);
};

const showFishes = (req: Request, res: Response, menus: IMenu[]) => {
	res.render('pages/page', {
		...getInitialParams(menus, req, 'Peixes'),
		banner: {
			title: 'Peixes',
			src: 'images/banner_fish.jpg',
			text: 'Peixes',
			subtext: 'Continua a nadar!!!',
		} as IBanner,
		animal: 'Peixes',
		pets: Pet.getByType('fish'),
	} as IPage);
};

export default {
	showHome,
	showDogs,
	showCats,
	showFishes,
};
