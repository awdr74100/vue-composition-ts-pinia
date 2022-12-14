<template>
  <header>
    <ul>
      <li @click.prevent="$router.push('/')">/</li>
      <li @click.prevent="$router.push('/user')">/user</li>
    </ul>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
ul {
  display: flex;
}

li {
  margin: 0px 20px;
  cursor: pointer;
}

li:hover {
  color: red;
}
</style>
