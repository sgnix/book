<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Log In</h1>
      <div>
        <div class="mb-4">
          <label
            for="username"
            class="block text-sm font-medium text-gray-600 mb-2"
            >Username:</label
          >
          <input
            v-model="username"
            type="text"
            id="username"
            class="p-2 w-full border rounded-md"
          />
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-600 mb-2"
            >Password:</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="p-2 w-full border rounded-md"
          />
        </div>
        <button
          class="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          Login
        </button>

        <div class="mt-3 text-center">
          <Link to="/signup" text="No account? Sign up here." />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Link from "../atoms/Link.vue";
import { ref } from "vue";

export default {
  name: "LogIn",
  components: { Link },
  setup() {
    const username = ref("");
    const password = ref("");
  },
};
</script>
