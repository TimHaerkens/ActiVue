import { ref, type Ref } from 'vue'
import axios from 'axios'

interface Activity {
    activity: string,
    accessibility: string,
    type: string,
    participants: number,
    price: number,
    link: string,
    key: string,
}

export function useBored() {
    const data : Ref<Activity|null> = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const fetch = async (url : string) =>{
        const boredResponse = await axios.get<Activity>(url)
        data.value = boredResponse.data
    }

    return { data, error, loading, fetch }
}