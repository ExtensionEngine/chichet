import Audience from 'shared/auth/audience';

const authTokens = {
  type: {
    ACCESS: 'ACCESS',
    REFRESH: 'REFRESH',
  },
  config: {
    ACCESS: {
      secret: process.env.ACCESS_TOKEN_SECRET || '',
      duration: process.env.ACCESS_TOKEN_DURATION,
      audience: Audience.Scope.Access,
    },
    REFRESH: {
      secret: process.env.REFRESH_TOKEN_SECRET || '',
      duration: process.env.REFRESH_TOKEN_DURATION,
      audience: Audience.Scope.Refresh,
    },
  },
};

export default authTokens;
