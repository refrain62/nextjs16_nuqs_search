'use client'

import { useQueryState } from 'nuqs'

export function DemoNuqs() {
  const [name, setName] = useQueryState('name')

  return (
    <>
      <input className='border border-blue-400' value={name || ''} onChange={e => setName(e.target.value)} />
      <button className='border border-blue-400' onClick={() => setName(null)}>
        clear
      </button>
      <p>
        Hello, {name || 'anonymous visitor'}!
      </p>
    </>
  )
}
