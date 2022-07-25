import Audience from 'shared/auth/audience';
import { ITokenType } from 'user/types';

const authTokens = {
  type: {
    ACCESS: 'ACCESS' as ITokenType,
    REFRESH: 'REFRESH' as ITokenType,
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
