import { ref, type Ref } from 'vue'
import axios from 'axios'

export function useBored() {
    const activity : Ref<Activity|null> = ref(null)
    const error : Ref<BoredError|null> = ref(null)
    const loading = ref(false)

    const fetch = async (url : string) =>{
        await axios.get<Activity | BoredError>(url).then(function (response) {
            if ('error' in response.data) {
                activity.value = null;
                error.value = response.data as BoredError;
                return;
            }
            
            error.value = null;
            activity.value = response.data as Activity;
              
          }).catch((error) => {
            console.error("error:",error);
        });
    }

    return { activity, error, loading, fetch }
}