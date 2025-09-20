import { useState } from 'react'
import './Index.scss'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <section class='header'>
      <span className="user-label">
        bojue's Lab
      </span>
    </section>
  )
}

export default Header
