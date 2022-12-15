import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', () => {
  const id = ref<null | number>(null);
  const name = ref<null | string>(null);
  const email = ref<null | string>(null);

  const loggedIn = computed(() => id.value !== null);

  function updateUser(payload: {
    id: null | number;
    name: null | string;
    email: null | string;
  }) {
    id.value = payload.id;
    name.value = payload.name;
    email.value = payload.email;
  }

  async function signIn(email: string, password: string) {
    const url = `${import.meta.env.VITE_BACKEND_URL}/users/3`;
    const data = await fetch(url).then((res) => res.json() as Promise<User>);

    updateUser(data);

    return true;
  }

  async function signOut() {
    updateUser({ id: null, name: null, email: null });

    return true;
  }

  return { id, name, email, loggedIn, signIn, signOut };
});
