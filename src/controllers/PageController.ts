import { Request, Response } from 'express';
import { IMenu } from '../interfaces/IMenu';
import { getInitialParams } from '../utils/initialParams';

const showHome = (req: Request, res: Response, menus: IMenu[]) => {
  res.render('pages/home', {
    ...getInitialParams(menus, req),
  });
};

const showDogs = (req: Request, res: Response, menus: IMenu[]) => {
  res.render('pages/dogs', {
    ...getInitialParams(menus, req),
  });
};

const showCats = (req: Request, res: Response, menus: IMenu[]) => {
  res.render('pages/cats', {
    ...getInitialParams(menus, req),
  });
};

const showFishes = (req: Request, res: Response, menus: IMenu[]) => {
  res.render('pages/fishes', {
    ...getInitialParams(menus, req),
  });
};

export default {
  showHome,
  showDogs,
  showCats,
  showFishes,
};
