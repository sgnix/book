<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Sign Up</h1>

      <!-- Step 1: Username & Password -->
      <div v-if="step === 1">
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

          <!-- Password again -->
          <FormElement inputId="password2" label="Password again">
            <input
              v-model="password2"
              type="password"
              id="password2"
              class="p-2 w-full border rounded-md"
              required
            />
          </FormElement>

          <div v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</div>

          <button
            class="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
          >
            Next
          </button>
          <div class="mt-1 text-center">
            <Link to="/login" text="Already have an account? Sign in." />
          </div>
        </form>
      </div>

      <!-- Step 2: Favorite Book -->
      <div v-if="step === 2">
        <form @submit="completeSignup">
          <div class="mb-4">
            <SignUpBookSelector @selectBook="handleSelectBook" />
          </div>
          <button
            class="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
          >
            Complete Signup
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AxiosError } from "axios";
import Link from "../atoms/Link.vue";
import FormElement from "../atoms/FormElement.vue";
import SignUpBookSelector from "./SignUpBookSelector.vue";
import { ref } from "vue";
import { UserService } from "../services/user.service";
import { validateUsername, validatePassword } from "../utils/validators";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",
  components: {
    Link,
    FormElement,
    SignUpBookSelector,
  },
  setup() {
    const step = ref(1);
    const username = ref<string>("");
    const password = ref<string>("");
    const password2 = ref<string>("");
    const error = ref<string>();
    const favoriteBook = ref("");
    const books = ["Book A", "Book B", "Book C", "Book D"];
    const userService = new UserService();
    const router = useRouter();

    const validate = async (e: Event) => {
      e.preventDefault();
      error.value = undefined;

      // validate all fields required
      if (!username.value || !password.value || !password2.value) {
        error.value = "All fields are required!";
        return;
      }

      // validate that the passwords match
      if (password.value !== password2.value) {
        error.value = "Passwords do not match!";
        return false;
      }

      const usernameError = validateUsername(username.value);
      if (usernameError !== null) {
        error.value = usernameError;
        return;
      }

      const passwordError = validatePassword(password.value);
      if (passwordError !== null) {
        error.value = passwordError;
        return;
      }

      try {
        const request = { username: username.value, password: password.value };
        await userService.createUser(request);
      } catch (e) {
        error.value = (e as AxiosError).message;
        return;
      }

      step.value = 2;
    };

    const handleSelectBook = (bookId: string) => {
      userService.setFavoriteBook(username.value, bookId);
    };

    const completeSignup = (e: Event) => {
      e.preventDefault();
      router.push(`/dashboard/${username.value}`);
    };

    return {
      step,
      username,
      password,
      password2,
      favoriteBook,
      books,
      completeSignup,
      validate,
      error,
      handleSelectBook,
    };
  },
};
</script>
