<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="modal-close" @click="closeModal">&times;</button>
      <header class="modal-header">
        <slot name="header"></slot>
      </header>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
