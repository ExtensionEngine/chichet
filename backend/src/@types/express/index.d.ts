import { User } from 'shared/database';

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
