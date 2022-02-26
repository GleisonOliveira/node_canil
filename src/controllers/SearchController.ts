import { Request, Response } from 'express';
import { IMenu } from '../interfaces/IMenu';
import { getInitialParams } from '../utils/initialParams';

const show = (req: Request, res: Response, menus: IMenu[]) => {
  res.render('pages/search', {
    ...getInitialParams(menus, req),
  });
};

export default {
  show,
};
