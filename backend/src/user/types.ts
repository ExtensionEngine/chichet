interface ILoginRequest {
  body: {
    username: string;
    password: string;
  };
}

interface IRegisterRequest {
  body: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
  };
}

interface IUser {
  id: number;
  username: string;
  password: string;
}

export { ILoginRequest, IRegisterRequest, IUser };
