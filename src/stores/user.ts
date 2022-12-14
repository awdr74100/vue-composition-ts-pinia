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

  const signIn = async (usernameOrEmail: string, password: string) => {
    const url = 'https://jsonplaceholder.typicode.com/users/2';

    const data = await fetch(url).then((res) => res.json() as Promise<User>);

    id.value = data.id;
    name.value = data.name;
    email.value = data.email;

    return true;
  };

  const signOut = async () => {
    id.value = null;
    name.value = null;
    email.value = null;

    return true;
  };

  return { id, name, email, loggedIn, signIn, signOut };
});
