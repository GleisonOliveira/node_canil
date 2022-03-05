import { Request } from 'express';
import { IMenu } from '../interfaces/IMenu';

export interface IInitialParams {
	title: string;
	subtitle: string;
	menus: IMenu[];
	pageTitle?: string,
	query?: string
}

const returnActive = (menus: IMenu[], req: Request): IMenu[] => {
	return menus.map(menu => {
		if (req.path === menu.href) {
			menu.isActive = true;
			return menu;
		}

		menu.isActive = false;
		return menu;
	});
};

export const getInitialParams = (
	menus: IMenu[],
	req: Request,
	pageTitle?: string
): IInitialParams => ({
	title: process.env.TITLE || '',
	subtitle: process.env.SUBTITLE || '',
	menus: returnActive(menus, req),
	pageTitle: pageTitle,
	query: req.query.search?.toString()
});
