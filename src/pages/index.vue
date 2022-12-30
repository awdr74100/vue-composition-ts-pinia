<template>
  <ul>
    <li>
      <button
        class="success"
        @click.prevent="
          notifications.add({ type: 'success', title: '成功通知...' })
        "
      >
        成功通知
      </button>
    </li>
    <li>
      <button
        class="warning"
        @click.prevent="
          notifications.add({ type: 'warning', title: '警告通知...' })
        "
      >
        警告通知
      </button>
    </li>
    <li>
      <button
        type="button"
        class="error"
        @click.prevent="
          notifications.add({ type: 'error', title: '失敗通知...' })
        "
      >
        失敗通知
      </button>
    </li>
    <li v-if="!user.signedIn">
      <button
        type="button"
        class="signIn"
        @click.prevent="signIn('email', 'password')"
      >
        登入
      </button>
    </li>
    <li v-else>
      <button type="button" class="signOut" @click.prevent="signOut">
        登出
      </button>
    </li>
  </ul>
  <div class="user" v-if="signedIn">
    <p>編號： {{ id }}</p>
    <p>姓名： {{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNotificationsStore } from '@/stores/notifications';
import { useUserStore } from '@/stores/user';

const notifications = useNotificationsStore();
const user = useUserStore();

const { id, name, signedIn } = storeToRefs(user);
const { signIn, signOut } = user;
</script>

<style scoped>
ul {
  margin-top: 20px;
  display: flex;
}

li {
  margin-right: 16px;
}

button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: all 0.15s;
  cursor: pointer;
}

button.success {
  background-color: rgb(48, 180, 48);
  color: white;
}

button.warning {
  background-color: rgb(255, 118, 27);
  color: white;
}

button.error {
  background-color: rgb(202, 42, 42);
  color: white;
}

button.signIn,
button.signOut {
  background-color: rgb(9, 159, 209);
  color: white;
}

div.user {
  max-width: 350px;
  margin-top: 20px;
  border: 1px solid rgb(63, 63, 63);
  color: rgb(63, 63, 63);
  padding: 20px;
}
</style>
