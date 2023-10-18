<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Log In</h1>
      <form @submit="validate">
        <!-- Username -->
        <FormElement inputId="username" label="Username">
          <input
            v-model="username"
            type="text"
            id="username"
            class="p-2 w-full border rounded-md"
            required
          />
        </FormElement>

        <!-- Password -->
        <FormElement inputId="password" label="Password">
          <input
            v-model="password"
            type="password"
            id="password"
            class="p-2 w-full border rounded-md"
            required
          />
        </FormElement>
        <div v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</div>
        <button
          class="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          Login
        </button>

        <div class="mt-3 text-center">
          <Link to="/signup" text="No account? Sign up here." />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Link from "../atoms/Link.vue";
import FormElement from "../atoms/FormElement.vue";
import { ref } from "vue";
import { UserService } from "../services/user.service";
import { useRouter } from "vue-router";

export default {
  name: "LogIn",
  components: { Link, FormElement },
  setup() {
    const username = ref<string>("");
    const password = ref<string>("");
    const userService = new UserService();
    const router = useRouter();
    const error = ref("");

    const validate = async (e: Event) => {
      e.preventDefault();
      error.value = "";

      if (username.value === "" || password.value === "") {
        error.value = "Please fill out all fields";
        return;
      }

      const request = {
        username: username.value,
        password: password.value,
      };

      try {
        const res = await userService.loginUser(request);
        console.log(res);
        router.push(`/dashboard/${username.value}`);
      } catch (e) {
        error.value = "Invalid username or password";
      }
    };

    return { username, password, validate, error };
  },
};
</script>
