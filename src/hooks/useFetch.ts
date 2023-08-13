import {useState, useRef, useEffect, useCallback} from 'react'
import {useSearchParams} from "react-router-dom";
import axios from "axios";


export function useFetch <T>(url: string) {
    const [searchParams] = useSearchParams();

    const searchParamsRef = useRef({})

    const observer = useRef<IntersectionObserver | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<T>([]);
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(false)



    const lastNodeRef = useCallback((nodeLast: HTMLElement | null) => {
        if (isLoading) return;

        if (observer.current) {
            observer?.current?.disconnect()
        }

        observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {

            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prev => prev + 1)
            }
        })

        if (nodeLast) {
            observer?.current?.observe(nodeLast)
        }

    }, [hasMore])

    useEffect(() => {
        setData([])
    }, [searchParams])

    useEffect(() => {
        setIsLoading(true)
        let cancel;
        setError('')
        if (searchParams.size > 0) {
            for (const entry of searchParams.entries()) {
                const [param, value] = entry;
                searchParamsRef.current = {...searchParamsRef.current, [param]: value}
            }
        } else {
            searchParamsRef.current = {}
        }

        axios({
            method: 'GET',
            url,
            params: {...searchParamsRef.current, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)

        }).then(res => {
            setData(prev => [...new Set( [...prev, ...res.data.results])])
            if(pageNumber >= res.data.info.pages) {
                setHasMore(false)
            }else  {
                setHasMore(true)
            }
            setIsLoading(false)
        })
            .catch(err => {
                if(axios.isCancel(err)) {
                    return;
                }
                setError(err.message)
                setIsLoading(false)
            })
        return () => cancel()
    },[searchParams, pageNumber])

    return {isLoading, error, data,lastNodeRef}
}

export function useFetchDetail<T>(url) {

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<T>({})


    useEffect(() => {
        setIsLoading(true)
        setError('')
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [url])

    return {error, isLoading, data}

}








