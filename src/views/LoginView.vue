<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth'

const useAuth = useAuthStore()

// data
const formData = ref({
    username: 'kminchelle',
    password: '0lelplR'
})

// functions
const handlelogin = () => {
    useAuth.login(formData.value)
}


</script>
<template>
    <div>
        <h1> Login view</h1>
        <form @submit.prevent="handlelogin">
            <input type="text" v-model="formData.username" placeholder="username" />
            <br>
            <input type="password" v-model="formData.password" placeholder="password" />
            <br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
