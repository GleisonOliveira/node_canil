import { Pet } from "../models/Pet";
import { IInitialParams } from "../utils/initialParams";
import { IBanner } from "./IBanner";

export interface IPage extends IInitialParams{
	banner?: IBanner
	animal: string,
	pets: Pet[],
}
