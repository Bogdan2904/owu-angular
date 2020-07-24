import {IAddress} from './address';
export interface IUser {
  id: number;
  name: string;
  username: number;
  email: string;
  address: IAddress;
}
