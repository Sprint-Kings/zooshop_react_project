import { useState, useCallback } from "react";
import EventBus from "../services/EventBus";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, header=null, method='GET', body=null) => {

        setLoading(true);

        try {
            let options = {}
            if (body && header) {
                options = {
                    method: method,
                    headers: header,
                    body: JSON.stringify(body)
                }
                console.log(options)
            } else if (body) {
                options = {
                    method: method,
                    body: JSON.stringify(body)
                }
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
                const data = await response.json();
                console.log(data.message)
                throw new Error(data.message)
            }

            const data = await response.json();
            console.log(data)
            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])


    return {loading, request, error , clearError}
}

  