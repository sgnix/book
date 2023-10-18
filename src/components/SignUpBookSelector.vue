<template>
  <label for="book" class="block text-sm font-medium text-gray-600 mb-2"
    >Favorite Book:</label
  >
  <select
    v-model="selectedBookId"
    @change="handleSelectBook"
    id="book"
    class="p-2 w-full border rounded-md"
  >
    <option v-for="book in allBooks" :key="book.id" :value="book.id">
      {{ book.title }}
    </option>
  </select>
</template>

<script lang="ts">
import { Book } from "../models/Book";
import { ref, onMounted } from "vue";
import { BookService } from "../services/book.service";

export default {
  name: "SignUpBookSelector",
  setup(_, { emit }) {
    const selectedBookId = ref<string>();
    const allBooks = ref<Array<Book>>([]);
    const handleSelectBook = () => {
      emit("selectBook", selectedBookId.value);
    };
    const bookService = new BookService();

    onMounted(async () => {
      try {
        const response = await bookService.getBooks();
        allBooks.value = response.books;
      } catch (e) {
        console.error(e);
      }
    });

    return { selectedBookId, allBooks, handleSelectBook };
  },
};
</script>
