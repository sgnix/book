<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Sign Up</h1>

      <!-- Step 1: Username & Password -->
      <div v-if="step === 1">
        <form>
          <!-- Username -->
          <FormElement for="username" label="Username">
            <input
              v-model="username"
              type="text"
              id="username"
              class="p-2 w-full border rounded-md"
              required
            />
          </FormElement>

          <!-- Password -->
          <FormElement for="password" label="Password">
            <input
              v-model="password"
              type="password"
              id="password"
              class="p-2 w-full border rounded-md"
              required
            />
          </FormElement>

          <!-- Password again -->
          <FormElement for="password2" label="Password again">
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
            @click="validate"
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
        <div class="mb-4">
          <label for="book" class="block text-sm font-medium text-gray-600 mb-2"
            >Favorite Book:</label
          >
          <select
            v-model="favoriteBook"
            id="book"
            class="p-2 w-full border rounded-md"
          >
            <option v-for="book in books" :key="book" :value="book">
              {{ book }}
            </option>
          </select>
        </div>
        <button
          @click="completeSignup"
          class="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
        >
          Complete Signup
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Link from "../atoms/Link.vue";
import FormElement from "../atoms/FormElement.vue";
import { ref } from "vue";
import apiService from "../models/service";

export default {
  name: "SignUp",
  components: {
    Link,
    FormElement,
  },
  setup() {
    const step = ref(1);
    const username = ref<string>("");
    const password = ref<string>("");
    const password2 = ref<string>("");
    const error = ref<string>();
    const favoriteBook = ref("");
    const books = ["Book A", "Book B", "Book C", "Book D"];

    const validate = () => {
      // validate that the username contains only letters and numbers
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!usernameRegex.test(username.value)) {
        error.value = "Username must contain only letters and numbers!";
        return;
      }

      // validate that the password is at least 8 characters long
      // and that it contains at least one number and special character
      if (password.value.length < 8) {
        error.value = "Password must be at least 8 characters long!";
        return;
      }
      const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password.value)) {
        error.value =
          "Password must contain at least one number and special character!";
        return;
      }

      // validate that the passwords match
      if (password.value !== password2.value) {
        error.value = "Passwords do not match!";
        return false;
      }

      step.value = 2;
    };

    const completeSignup = () => {
      console.log("Signup Details:", {
        username: username.value,
        password: password.value,
        favoriteBook: favoriteBook.value,
      });
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
    };
  },
};
</script>
