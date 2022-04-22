<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
  <button class="d-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>
