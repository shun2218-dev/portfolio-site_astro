<script setup lang="ts">
import DynamicButton from "@/components/elements/DynamicButton/DynamicButton.vue";

export type Props = {
  variant: "contained" | "outlined";
  full?: boolean;
  fit?: boolean;
  disabled?: boolean;
};
withDefaults(defineProps<Props>(), {
  variant: "contained",
  full: false,
  fit: false,
  disabled: false,
});
</script>

<template>
  <DynamicButton
    class="BasicButton"
    :class="{ [`variant-${variant}`]: variant, full, fit, disabled }"
    :disabled
  >
    <slot />
  </DynamicButton>
</template>

<style lang="scss" scoped>
// $primary-color: #fcf9cd;
$primary-color: #f8ef6f;
$font-color: #063f5c;
$disabled-color: #cbcbcb;
$border-width: 2px;
.BasicButton {
  border: $border-width solid $primary-color;
  display: grid;
  width: 100%;
  max-width: 25rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2rem;

  &.variant {
    &-contained {
      background-color: $primary-color;
      transition: background-color 0.3s ease-in-out;
      color: #ffffff;

      &:hover {
        background-color: darken($color: $primary-color, $amount: 20);
      }

      &.disabled {
        color: darken($color: $disabled-color, $amount: 40);
        background-color: $disabled-color;
        border: solid $border-width $disabled-color;
        cursor: not-allowed;
      }
    }

    &-outlined {
      background-color: transparent;
      transition: background-color 0.3s ease-in-out;
      color: $font-color;

      &:hover {
        background-color: lighten($color: $primary-color, $amount: 25);
      }

      &.disabled {
        color: darken($color: $disabled-color, $amount: 10);
        border: solid $border-width $disabled-color;

        &:hover {
          background-color: transparent;
          cursor: not-allowed;
        }
      }
    }
  }

  &.full {
    max-width: none;
  }

  &.fit {
    width: auto;
  }
}
</style>
