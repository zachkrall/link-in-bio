import { Suspense, lazy } from 'preact/compat'
import Links from './components/Links'

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Links />
    </Suspense>
  )
}
