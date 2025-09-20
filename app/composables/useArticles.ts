import axios from "axios"

export const useArticles = ({ page, limit, search }: { page: number, limit: number, search?: string }) => {
    const articles = useState('articles', () => [] as any)
    const error = ref<any>(null)
    const loading = ref<boolean>(false)

    async function fetchArticles(query: { page: number, limit: number, search: string }) {
        loading.value = true
        try {
            const res = await axios.get(process.env.API_URL + '/api/article', {
                params: query
            })
            articles.value = res.data.data
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    

    return { articles, fetchArticles, error, loading }
}