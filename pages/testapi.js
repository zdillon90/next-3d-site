import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Profile () {
    const id = 3
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const name = data.name
  
    // render data
    return <div>User {name}!</div>
  }