<script setup lang="ts">
import { usePostStore } from '@/store/post'
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IPosts } from '@/types/interface';
const usePost = usePostStore();
const route = useRoute();
const router = useRouter();
const apiData = ref<IPosts>({
    posts: [],
    skip: 0,
    limit: 10,
    total: 0
});

// functions

// hooks
watch(() => apiData.value?.skip, async (newVal, oldVal) => {
    // console.log('newVal', newVal, new Date().getMilliseconds());
    if (newVal !== oldVal) {
        await usePost.fetchPosts({
            skip: apiData.value.skip,
            limit: apiData.value.limit
        })
        router.replace({
            query: {
                skip: apiData.value.skip,
                limit: apiData.value.limit
            }
        })
        apiData.value = usePost.posts || { posts: [], skip: 0, limit: 10, total: 0 };

    }
}, { immediate: true, deep: true })

</script>
<template>
    <div>
        Posts view
        <pre> {{ apiData }}</pre>
        <RouterLink :to="{ name: 'post-item', params: { id: 1 } }">Post 1</RouterLink>
        
        <!-- <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div> -->
    </div>
</template>
