import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { ref, computed } from "vue";
import api from "@/service/api";
import { useRouter } from "vue-router";
import { IUser } from "@/types/interface";

interface ILoginPayload {
  username: string;
  password: string;
}

const toast = useToast();

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

  //   state
  const user = ref<IUser>();
  const token = ref(localStorage.getItem("token") || "");
  const isLoggedIn = ref(false);
  const loading = ref(false);

  //   getters
  const getToken = computed(() => token.value);

  //   actions
  const setUser = (newUser: IUser) => {
    user.value = newUser;
  };
  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem("token", newToken);
  };

  const fetchProfile = async () => {
    try {
      loading.value = true;
      const res = await api.get("/auth/me");
      if (res.status === 200) {
        setUser(res.data);
        isLoggedIn.value = true;
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in fetching user");
    } finally {
      loading.value = false;
    }
  };

  const login = async (payload: ILoginPayload) => {
    try {
      loading.value = true;
      const res = await api.post("/auth/login", {
        ...payload,
      });

      if (res.status === 200) {
        toast.success("Login success");
        setUser(res.data);
        setToken(res.data.token);
        router.push("/post");
      }

      console.log(res);
    } catch (error: any) {
      toast.error(error.response.data.message || "Error in login");
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    token.value = "";
    localStorage.removeItem("token");
    toast.success("Logout success");
    router.push("/login"); // Redirect to login page or another route
  };
  return {
    token,
    user,
    isLoggedIn,
    getToken,
    fetchProfile,
    setToken,
    logout,
    login,
  };
});
