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

export { ILoginRequest, IRegisterRequest, IJwtOptions, IGeneratedTokens };
