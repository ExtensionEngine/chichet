interface ILoginRequest {
  body: {
    username: string;
    password: string;
  };
}

interface IUser {
  id: number;
  username: string;
  password: string;
}

export { ILoginRequest, IUser };
