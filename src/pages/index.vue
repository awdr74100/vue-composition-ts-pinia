<template>
  <form action="#" @submit.prevent="signIn">
    <label for="usernameOrEmail">用戶名稱或信箱：</label>
    <input type="text" id="usernameOrEmail" v-model="usernameOrEmail" />
    <label for="password">密碼：</label>
    <input type="text" id="password" v-model="password" />
    <button type="submit">登入</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router/auto';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const userStore = useUserStore();

const usernameOrEmail = ref('');
const password = ref('');

const signIn = async () => {
  const done = await userStore.signIn(usernameOrEmail.value, password.value);

  if (done) router.push('/user');
};
</script>

<style scoped></style>
