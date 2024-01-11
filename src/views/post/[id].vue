<script setup lang="ts">
const props = defineProps({
    id: String
})
</script>

<template>
    <div>
        Post id: {{ props.id }}
    </div>
</template>
