import { IUser } from 'user/types';
import { Request } from 'express';

interface IAuthRequest extends Request {
  user?: IUser;
}

export { IAuthRequest };
