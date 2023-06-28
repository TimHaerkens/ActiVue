import { ref, type Ref } from 'vue'
import axios from 'axios'

export function useBored() {
    const activity : Ref<Activity|null> = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const fetch = async (url : string) =>{
        await axios.get<Activity>(url).then(function (response) {
            activity.value = response.data
          }).catch((error) => {
            error = error.toJSON();
        });
    }

    return { activity, error, loading, fetch }
}