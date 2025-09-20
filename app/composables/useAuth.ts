import axios from "axios"

export const useAuth = () => {
    const user = useState('user', () => null as null | { role: string, email: string, auth: boolean })
    const error = ref<any>(null)

    async function login(data: { email: string, password: string }) {
        try {
            const res = await axios.post(process.env.URL_API + '/api/user/login', {
                email: data.email,
                password: data.password
            })
            user.value = {
                role: res.data.data.role,
                email: res.data.data.email,
                auth: true
            }
        } catch (err) {
            error.value = err
        }
    }

    async function logout(id: number) {
        try {
            await axios.post(process.env.URL_API + '/api/user/login/' + id)
            user.value = null
        } catch (err) {
            error.value = err
        }
    }

    async function getAuth() {
        try {
            const res = await axios.get(process.env.URL_API + '/api/user/login', { withCredentials: true })
            user.value = {
                role: res.data.data.role,
                email: res.data.data.email,
                auth: true
            }
        } catch (err) {
            error.value = err
        }
    }

    if (!user?.value?.auth) {
        getAuth()
    }

    return { user, login, logout, error }
}