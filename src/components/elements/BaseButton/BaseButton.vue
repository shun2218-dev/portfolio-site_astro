<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

type Props = {
  type?: ButtonHTMLAttributes["type"];
};
withDefaults(defineProps<Props>(), {
  type: "button",
});
</script>

<template>
  <button :type="type">
    <slot />
  </button>
</template>
