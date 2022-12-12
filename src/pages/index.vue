<template>
  <h1>{{ greeting }}</h1>
  <form
    action="#"
    @submit.prevent="user.signIn(email, password)"
    v-if="!user.isSignIn"
  >
    <label for="email">信箱：</label>
    <input type="email" id="email" v-model="email" />
    <label for="password">密碼：</label>
    <input type="password" id="password" v-model="password" />
    <button type="submit">登入</button>
  </form>
  <button type="button" @click.prevent="user.signOut" v-else>登出</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const user = useUserStore();
const { greeting } = storeToRefs(user);

const email = ref('');
const password = ref('');
</script>

<style></style>
