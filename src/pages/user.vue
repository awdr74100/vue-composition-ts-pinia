<template>
  <p>
    Hi <span class="text-primary">{{ userStore.name }}</span>
  </p>
  <p>
    ID: <span class="text-primary">{{ userStore.id }}</span>
  </p>
  <p>
    Email: <span class="text-primary">{{ userStore.email }}</span>
  </p>
  <button type="button" @click.prevent="signOut">登出</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router/auto';
import { _definePage as definePage } from 'unplugin-vue-router/runtime';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const userStore = useUserStore();

definePage({
  meta: {
    requiredAuth: true,
  },
});

const signOut = async () => {
  const done = await userStore.signOut();

  if (done) router.push('/');
};
</script>

<style scoped>
.text-primary {
  color: darkcyan;
}
</style>
