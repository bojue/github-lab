import { useState } from 'react'
import './Index.scss'

function Right() {
  const [count, setCount] = useState(0)

  return (
    <section className='right'>
      <div className="right-content">
        {/* <img src={img} alt="" /> */}
      </div>
    </section>
  )
}

export default Right
