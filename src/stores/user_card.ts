import { type Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { UserServices } from '@/services/user';
import type { IGetUserData } from '@/types/api';

export const useUserCardStore = defineStore('user_card', () => {
  const user = ref<IGetUserData>();

  function setCardUser(newUser: IGetUserData) {
    user.value = newUser;
  }

  function getUserData() {
    return user.value;
  }

  async function fetchUserDataFromApi(nickname: string) {
    try {
      const { data } = await UserServices.getUserData(nickname);

      console.log('data:', data);

      setCardUser(data);
    } catch (error) {
      console.log('error:', error);
      window.alert('teste');
      console.log('alert não funcionou:');
    }
  }

  return { getUserData, fetchUserDataFromApi };
});
