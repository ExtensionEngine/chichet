import { Request } from 'express';
import User from 'user/user.model';

interface IAuthRequest extends Request {
  user?: User;
}

export { IAuthRequest };
