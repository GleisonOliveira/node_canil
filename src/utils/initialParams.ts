import { Request } from 'express';
import { IMenu } from '../interfaces/IMenu';

interface IInitialParams {
  title: string;
  subtitle: string;
  menus: IMenu[];
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
  req: Request
): IInitialParams => ({
  title: process.env.TITLE || '',
  subtitle: process.env.SUBTITLE || '',
  menus: returnActive(menus, req),
});
