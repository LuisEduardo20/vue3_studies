import type { AxiosPromise } from 'axios';

import { api } from '@/api/api';
import type { IGetUserData, IGetUserRepositories } from '@/types/api';

export const UserServices = {
  getUserData(nickname: string): AxiosPromise<IGetUserData> {
    return api.get(`/users/${nickname}`);
  },

  getUserRepositories(nickname: string): AxiosPromise<IGetUserRepositories> {
    return api.get(`/users/${nickname}/repos`);
  }
};
