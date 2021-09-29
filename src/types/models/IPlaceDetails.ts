import { IPlace } from './IPlace';
import { IStation } from './IStation';

export interface IPlaceDetails extends IPlace {
  stations: IStation[];
}
