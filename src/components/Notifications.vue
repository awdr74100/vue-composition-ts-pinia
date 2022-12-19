<template>
  <ul v-if="notifications.active">
    <li
      v-for="(notification, index) in notifications.notifications"
      :key="index"
      :class="{ [notification.type]: true }"
    >
      <p>{{ notification.title }}</p>
      <p class="remove" @click="notifications.remove(notification.id)">x</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useNotificationsStore } from '@/stores/notifications';

const notifications = useNotificationsStore();
</script>

<style scoped>
ul {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 100;
}

li {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

li .remove {
  cursor: pointer;
  margin-left: 10px;
}

li.success {
  background-color: rgb(48, 180, 48);
  color: white;
}

li.warning {
  background-color: rgb(255, 118, 27);
  color: white;
}

li.error {
  background-color: rgb(202, 42, 42);
  color: white;
}
</style>
