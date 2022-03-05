import { IImage } from "./IImage";

export interface IBanner extends IImage {
  text?: string;
  subtext?: string;
}
