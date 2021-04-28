import Link from 'next/link'
export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/liikenne">Liikenne</Link>
      </li>
      <li>
        <Link href="/ruokalista">Ruokalista</Link>
      </li>
      <div>Koti</div>
    </ul>
  )
}
