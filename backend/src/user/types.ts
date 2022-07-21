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

interface IJwtOptions {
  expiresIn?: string;
}

interface IGeneratedTokens {
  accessToken: string;
  refreshToken: string;
}

interface IUser {
  id: number;
  username: string;
  password: string;
  refreshToken: string;
  generateTokens(): Promise<IGeneratedTokens>;
}

export { ILoginRequest, IRegisterRequest, IJwtOptions, IUser };
