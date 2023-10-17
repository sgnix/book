<template>
  <header class="p-6 bg-white shadow-md">
    <nav>
      <ul class="flex justify-start text-lg">
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/">Books</router-link>
        </li>
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/favs">Favorites</router-link>
        </li>
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/logout">Logout</router-link>
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
