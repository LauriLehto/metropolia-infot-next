//import Traffic from './Traffic'
import dynamic from 'next/dynamic'

const Traffic = dynamic(
  () => import('./Traffic'),
  { ssr: false }
)

export default Traffic