<template>
  <h1>
    Hi <span class="text-primary">{{ user.name }}</span>
  </h1>
  <h3>
    You are <span class="text-primary">{{ user.role }}</span>
  </h3>
  <h3>
    Email is <span class="text-primary">{{ user.email }}</span>
  </h3>
  <button type="button" @click.prevent="signOut">登出</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router/auto';
import { useUserStore } from '@/stores/user';
import { _definePage as definePage } from 'unplugin-vue-router/runtime';

const router = useRouter();

const user = useUserStore();

definePage({
  meta: {
    requiredAuth: true,
  },
});

const signOut = async () => {
  const isSignOut = await user.signOut();

  if (isSignOut) router.push('/');
};
</script>

<style scoped>
.text-primary {
  color: darkcyan;
}
</style>
