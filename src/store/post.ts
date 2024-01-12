import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { ref, computed } from "vue";
import api from "@/service/api";
import { IPagination,IPosts } from '@/types/interface';

const toast = useToast();

export const usePostStore = defineStore("post", () => {
  //   state
  const posts = ref<IPosts>();
  const loading = ref(false);

  //   getters
  const getPosts = computed(() => posts.value);

  //   actions
  const fetchPosts = async (payload: IPagination) => {
    try {
      loading.value = true;
      const res = await api.get("/posts", {
        params: {
          ...payload,
        },
      });
      if (res.status === 200) {
        posts.value = res.data;
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Error in fetching posts");
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    loading,
    fetchPosts,
    getPosts,
  };
});
