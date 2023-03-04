import { ref } from "vue";
import { defineStore } from "pinia";
import type { AuthRequest } from "@/entities/auth.entity";
export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref(false);
  function login(credential: AuthRequest) {
    console.log(credential);
    isLogin.value = true;
    localStorage.setItem("is_login", JSON.stringify(isLogin.value));
  }

  return { login, isLogin };
});
