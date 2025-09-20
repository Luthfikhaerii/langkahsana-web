import axios from "axios"
import { useAuthStore } from "~/stores/auth"

export const useAuth = () => {
    const auth = useAuthStore()
    const error = ref<any>(null)

    async function login(data: { email: string, password: string }) {
        try {
            const res = await axios.post(process.env.URL_API + '/api/user/login', {
                email: data.email,
                password: data.password
            })
            auth.setAuth({
                role: res.data.data.role,
                email: res.data.data.email,
            })
        } catch (err) {
            error.value = err
        }
    }

    async function logout(id: number) {
        try {
            await axios.delete(process.env.URL_API + '/api/user/logout/' + id)
            auth.clearAuth()
        } catch (err) {
            error.value = err
        }
    }

    async function getAuth() {
        try {
            const res = await axios.get(process.env.URL_API + '/api/user/auth', { withCredentials: true })
            auth.setAuth({
                role: res.data.data.role,
                email: res.data.data.email
            })
        } catch (err) {
            error.value = err
        }
    }

    if (!auth.auth) {
        getAuth()
    }

    return { login, logout, error }
}