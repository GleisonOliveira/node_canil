import { Request, Response, Router } from 'express';
import PageController from '../controllers/PageController';
import SearchController from '../controllers/SearchController';
import { IMenu } from '../interfaces/IMenu';

const router = Router();

const menus: IMenu[] = [
	{
		text: 'Home',
		href: '/',
		title: 'Home',
		icon: 'fas fa-home',
		isActive: false,
	},
	{
		text: 'Cachorros',
		href: '/dogs',
		title: 'Cachorros',
		icon: 'fas fa-dog',
		isActive: false,
	},
	{
		text: 'Gatos',
		href: '/cats',
		title: 'Gatos',
		icon: 'fas fa-cat',
		isActive: false,
	},
	{
		text: 'Peixes',
		href: '/fishes',
		title: 'Peixes',
		icon: 'fas fa-fish',
		isActive: false,
	},
];

router.get('/', (req: Request, res: Response) =>
	PageController.showHome(req, res, menus)
);
router.get('/search', (req: Request, res: Response) =>
	SearchController.show(req, res, menus)
);
router.get('/dogs', (req: Request, res: Response) =>
	PageController.showDogs(req, res, menus)
);
router.get('/cats', (req: Request, res: Response) =>
	PageController.showCats(req, res, menus)
);
router.get('/fishes', (req: Request, res: Response) =>
	PageController.showFishes(req, res, menus)
);

export default router;
