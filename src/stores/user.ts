import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useNotificationsStore } from '@/stores/notifications';
import { randomNumber } from '@/utils/randomNumber';

export interface User {
  id: string;
  name: string;
}

export const useUserStore = defineStore('user', () => {
  const notifications = useNotificationsStore();

  const id = ref<null | string>(null);
  const name = ref<null | string>(null);

  const signedIn = computed(() => id.value !== null);

  function setUser(user: User) {
    id.value = user.id;
    name.value = user.name;
  }

  function clearUser() {
    id.value = null;
    name.value = null;
  }

  async function signIn(email: string, password: string) {
    try {
      const userId = randomNumber(1, 10);
      const url = `${import.meta.env.VITE_BACKEND_URL}/users/${userId}`;
      const data = await fetch(url).then((res) => res.json() as Promise<User>);

      setUser(data);

      notifications.add({ type: 'success', title: '登入成功...' });
    } catch (error) {
      return error;
    }
  }

  function signOut() {
    clearUser();

    notifications.add({ type: 'success', title: '登出成功...' });
  }

  return { id, name, signedIn, signIn, signOut };
});
