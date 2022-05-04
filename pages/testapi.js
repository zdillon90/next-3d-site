import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Profile () {
    const { data, error } = useSWR('/api/getQuestions', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    return <div>Asker {data[0].asker}!</div>
  }