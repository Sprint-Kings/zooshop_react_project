import { useState, useCallback } from "react";
import EventBus from "../services/EventBus";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, header=null, method='get', body=null) => {

        setLoading(true);

        try {
            let options = {}
            if (body) {
                options = {
                    method: method,
                    body: JSON.stringify(body)
                }
                console.log(options)
            } else if (header) {
                options = {
                    method: method,
                    headers: header
                }
            } else {
                options = {
                    method: method
                }
            }
            const response = await fetch(url, options);
            
            if (response.statusText === 'Forbidden' && response.status === 403) {
                EventBus.dispatch("logout");  
            }

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            const data = await response.json();
            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setError(e.message);
            console.log(error)
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])


    return {loading, request, error , clearError}
}

  