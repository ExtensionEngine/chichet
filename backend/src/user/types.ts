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

export { ILoginRequest, IRegisterRequest, IJwtOptions };
