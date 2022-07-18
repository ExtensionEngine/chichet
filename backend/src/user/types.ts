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

interface IUser {
  id: number;
  username: string;
  password: string;
  refreshToken: string;
  generateAccessToken(options: IJwtOptions): string;
  generateRefreshToken(options: IJwtOptions): string;
}

interface IGeneratedTokens {
  accessToken: string;
  refreshToken: string;
}

export { ILoginRequest, IRegisterRequest, IJwtOptions, IUser, IGeneratedTokens };
