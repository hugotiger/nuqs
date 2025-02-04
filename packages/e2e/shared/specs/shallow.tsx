'use client'

import { parseAsString, useQueryState, useQueryStates } from 'nuqs'
import { ShallowDisplay } from './shallow-display'
import { shallowSearchParams } from './shallow.defs'

export function ShallowUseQueryState() {
  const [{ shallow, history }] = useQueryStates(shallowSearchParams)
  const [state, setState] = useQueryState('test', { shallow, history })
  return (
    <>
      <button onClick={() => setState('pass')}>Test</button>
      <ShallowDisplay environment="client" state={state} />
    </>
  )
}

export function ShallowUseQueryStates() {
  const [{ shallow, history }] = useQueryStates(shallowSearchParams)
  const [{ state }, setSearchParams] = useQueryStates(
    {
      state: parseAsString.withOptions({ shallow, history })
    },
    {
      urlKeys: {
        state: 'test'
      }
    }
  )
  return (
    <>
      <button onClick={() => setSearchParams({ state: 'pass' })}>Test</button>
      <ShallowDisplay environment="client" state={state} />
    </>
  )
}
