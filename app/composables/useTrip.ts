import axios from "axios"

export const useTrips = () => {
    const trips = useState('trips', () => [] as any)
    const error = ref<any>(null)
    const loading = ref<boolean>(false)

    async function fetchTrips(query: { page: number, limit: number, search: string }) {
        loading.value = true
        try {
            const res = await axios.get(process.env.API_URL + '/api/trip', {
                params: query
            })
            trips.value = res.data.data
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    

    return { trips, fetchTrips, error, loading }
}