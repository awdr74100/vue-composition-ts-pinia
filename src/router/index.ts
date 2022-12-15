import { createRouter, createWebHistory } from 'vue-router/auto';
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach((to) => {
  const user = useUserStore();

  if (!to.meta.requiredAuth) return true;

  if (user.loggedIn) return true;

  return { path: '/' };
});

export default router;
