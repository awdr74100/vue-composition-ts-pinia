<template>
  <p>
    Hi <span class="text-primary">{{ user.name }}</span>
  </p>
  <p>
    ID: <span class="text-primary">{{ user.id }}</span>
  </p>
  <p>
    Email: <span class="text-primary">{{ user.email }}</span>
  </p>
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
  const done = await user.signOut();

  if (done) router.push('/');
};
</script>

<style scoped>
.text-primary {
  color: darkcyan;
}
</style>
