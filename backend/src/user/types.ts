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

interface IJwtPayload {
  id: number;
  username: string;
}

interface IJwtOptions {
  expiresIn?: string;
}

interface IUser {
  id: number;
  username: string;
  password: string;
  refreshToken: string;
  generateAccessToken(options: IJwtOptions): string;
}

interface IGeneratedTokens {
  accessToken: string;
}

export { ILoginRequest, IRegisterRequest, IJwtPayload, IJwtOptions, IUser, IGeneratedTokens };
