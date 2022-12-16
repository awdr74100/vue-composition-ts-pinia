<template>
  <form action="#" @submit.prevent="signIn">
    <label for="email">信箱：</label>
    <input type="email" id="email" v-model="email" />
    <label for="password">密碼：</label>
    <input type="password" id="password" v-model="password" />
    <button type="submit">登入</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router/auto';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const user = useUserStore();

const email = ref('');
const password = ref('');

const signIn = async () => {
  const done = await user.signIn(email.value, password.value);

  // user.$patch((state) => (state.id = 123));
  // user.$patch({ id: 456 });

  if (done) router.push('/user');
};

user.$subscribe((mutation, state) => {
  // console.log(mutation);
  // console.log(state.email);
});
</script>

<style scoped></style>
