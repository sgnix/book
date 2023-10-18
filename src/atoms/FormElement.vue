<template>
  <div class="mb-4">
    <label
      :for="inputId"
      class="block text-sm font-medium text-gray-600 mb-2"
      >{{ label }}</label
    >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  name: "FormElement",
  props: {
    inputId: {
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
