import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: (): {
    isSignIn: boolean;
  } => ({
    isSignIn: false,
  }),
  getters: {
    // greeting: (state) => (state.isSignIn ? '已登入' : '未登入'),
    greeting(): string {
      return this.isSignIn ? '已登入' : '未登入';
    },
  },
  actions: {
    signIn(email: string, password: string) {
      this.isSignIn = true;
    },
    signOut() {
      this.isSignIn = false;
    },
  },
});

// export const useUserStore = defineStore('user', () => {
//   const isSignIn = ref(false);

//   const greeting = computed(() => {
//     return isSignIn.value ? '用戶已登入' : '用戶尚未登入';
//   });

//   const signIn = (email: string, password: string) => {
//     isSignIn.value = true;
//   };

//   const signOut = () => {
//     isSignIn.value = false;
//   };

//   return { isSignIn, greeting, signIn, signOut };
// });
