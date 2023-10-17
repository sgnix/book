<template>
  <div class="mb-4">
    <label :for="for" class="block text-sm font-medium text-gray-600 mb-2">{{
      label
    }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineProps } from "vue";

export default {
  name: "FormElement",
  props: {
    for: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },
};
</script>
