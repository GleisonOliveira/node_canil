import { Request, Response } from 'express';
import { IMenu } from '../interfaces/IMenu';
import { getInitialParams } from '../utils/initialParams';
import { Pet } from '../models/Pet';
import { ISearch } from '../interfaces/ISearch';

const show = (req: Request, res: Response, menus: IMenu[]) => {
	const pets = req.query.search
		? Pet.find(req.query.search.toString())
		: Pet.getAll();

	res.render('pages/search', {
		...getInitialParams(menus, req),
		pets,
		total: pets.length,
	} as ISearch);
};

export default {
	show,
};
