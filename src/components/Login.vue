<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="flex flex-col items-center justify-center mt-8">
      <p class="text-xl text-gray-600">Login</p>
      <input
        class="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Username"
      />
      <input
        class="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        placeholder="Password"
      />
      <button
        class="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Login",
  };
</script>

