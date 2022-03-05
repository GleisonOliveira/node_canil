import { IPage } from './IPage';

export interface ISearch extends IPage {
	term?: string;
	total?: number
}
