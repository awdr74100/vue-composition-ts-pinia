import { ref } from 'vue';
import { defineStore } from 'pinia';

type Role = 'admin' | 'member';

interface User {
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', () => {
  const name = ref<null | string>(null);
  const email = ref<null | string>(null);
  const role = ref<null | Role>('member');
  const isAuthenticated = ref(false);

  const signIn = async (usernameOrEmail: string, password: string) => {
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    const data = await fetch(url).then((res) => res.json() as Promise<User>);

    name.value = data.name;
    email.value = data.email;
    role.value = 'admin';
    isAuthenticated.value = true;

    return true;
  };

  const signOut = async () => {
    name.value = null;
    email.value = null;
    role.value = 'member';
    isAuthenticated.value = false;

    return true;
  };

  return { name, email, role, isAuthenticated, signIn, signOut };
});
