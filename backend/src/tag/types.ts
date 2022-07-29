import { User } from 'shared/database';

interface ITag {
  id: number;
  label: string;
  users: typeof User[];
}

export { ITag };
