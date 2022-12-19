import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useNotificationsStore } from '@/stores/notifications';

export interface User {
  id: string;
  name: string;
}

export const useUserStore = defineStore('user', () => {
  const notifications = useNotificationsStore();

  const id = ref('');
  const name = ref('');

  const signedIn = computed(() => !!id.value);

  function updateUser(user: User) {
    id.value = user.id;
    name.value = user.name;
  }

  async function signIn(email: string, password: string) {
    const url = `${import.meta.env.VITE_BACKEND_URL}/users/5`;
    const data = await fetch(url).then((res) => res.json() as Promise<User>);

    updateUser(data);

    notifications.add({ type: 'success', title: '登入成功...' });

    return true;
  }

  function signOut() {
    const data = { id: '', name: '' };

    updateUser(data);

    notifications.add({ type: 'success', title: '登出成功...' });

    return true;
  }

  return { id, name, signedIn, signIn, signOut };
});
