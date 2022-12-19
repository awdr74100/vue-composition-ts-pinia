import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export interface Notification {
  id: number;
  type: 'success' | 'warning' | 'error';
  title: string;
}

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<Notification[]>([]);

  const active = computed(() => !!notifications.value.length);

  function add(notification: Omit<Notification, 'id'>) {
    notifications.value.push({ id: Date.now(), ...notification });
  }

  function remove(notificationId: Notification['id']) {
    const index = notifications.value.findIndex(
      ({ id }) => id === notificationId,
    );
    notifications.value.splice(index, 1);
  }

  function clear() {
    notifications.value = [];
  }

  return { notifications, active, add, remove, clear };
});
