import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        email: "",
        role: ""
    }),
    getters: {
        auth: (state) => state.email && state.role ? true : false,
    },
    actions: {
        setAuth({ email, role }: { email: string, role: string }) {
            this.email = email
            this.role = role
        },
        clearAuth() {
            this.email = "",
            this.role = ""
        }
    },
    persist:true
})