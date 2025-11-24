'use client'

import { useQueryState, parseAsInteger } from 'nuqs'

export default () => {
  const [count, setCount] = useQueryState('count', parseAsInteger)

  return (
    <>
      <pre>count: {count}</pre>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* handing null values in setCout is annoying: */}
      <button onClick={() => setCount(c => (c ?? 0) + 1)}>+</button>
      <button onClick={() => setCount(c => (c ?? 0) - 1)}>-</button>
      <button onClick={() => setCount(null)}>Clear</button>
    </>
  )
}
