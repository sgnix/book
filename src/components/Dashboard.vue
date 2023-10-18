<template>
  <NavBar />
  <div class="flex flex-row flex-wrap mt-5">
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      :isFavorite="book.id === favoriteBookId"
    />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { BookService } from "../services/book.service";
import { UserService } from "../services/user.service";
import NavBar from "./NavBar.vue";
import BookCard from "./BookCard.vue";
import { Book } from "../models/Book";

export default {
  name: "Dashboard",
  components: { NavBar, BookCard },
  setup() {
    const route = useRoute();
    const books = ref<Array<Book>>([]);
    const favoriteBookId = ref<string>();
    const bookService = new BookService();
    const userService = new UserService();

    onMounted(async () => {
      try {
        const { username } = route.params;
        const all = await Promise.all([
          bookService.getBooks(),
          userService.getFavoriteBook(username as string),
        ]);
        books.value = all[0].books;
        favoriteBookId.value = all[1];
      } catch (e) {
        console.error(e);
      }
    });

    return { books, favoriteBookId };
  },
};
</script>
