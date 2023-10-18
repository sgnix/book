<template>
  <header class="p-6 bg-white shadow-md">
    <nav>
      <ul class="flex justify-end text-lg">
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/login">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>
