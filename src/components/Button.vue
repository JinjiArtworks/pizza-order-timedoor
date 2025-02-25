<template>
    <button :class="['custom-button', `custom-button__${variant}`]" :disabled="disabled" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

defineEmits(['click']);
</script>

