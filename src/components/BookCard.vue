<template>
  <div class="w-80 bg-white overflow-hidden p-4 text-center">
    <img :src="book.cover_url" :alt="book.title" class="h-48 w-48 mx-auto" />
    <h2 class="text-xl font-bold mt-2">{{ book.title }}</h2>
    <p class="text-gray-600">{{ book.author }}</p>
    <div v-if="isFavorite" class="mt-2">
      <span class="text-red-500"> ❤️ Favorite </span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Book } from "../models/Book";

export default {
  name: "BookCard",
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
    isFavorite: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
};
</script>
