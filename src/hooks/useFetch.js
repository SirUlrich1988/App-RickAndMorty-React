import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const useFetch = URL => {

    const [response, setResponse] = useState()
    const [isLoading, setisLoading] = useState(true)

    useEffect(()=> {
        axios.get(URL)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }, [])

    return response
    
}
export default useFetch
 