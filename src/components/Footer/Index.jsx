import { useState } from 'react'
import './Index.scss'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <section class='footer'>
      <div className="circle"></div>
      <div className="square"></div>
    </section>
  )
}

export default Footer
