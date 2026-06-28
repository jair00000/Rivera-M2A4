import { useState } from 'react'

export default function LiftedSearch() {
  const [query, setQuery] = useState('')

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p>You searched for: {query}</p>
    </>
  )
}
