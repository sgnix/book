<template>
  <router-link :to="to" class="text-sm text-blue-500 hover:text-blue-400">
    {{ text }}
  </router-link>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Link",
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const url = ref<string>();
    return { url };
  },
};
</script>
