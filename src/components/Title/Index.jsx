import { useState } from 'react'
import './Index.scss'

function Title() {
  const [count, setCount] = useState(0)

  return (
    <section className='title-content'>
      <div className="title">
        核心开源项目
      </div>
      <div className="description">
        <div className="text">
          主要集中在低代码和可视化业务场景，包括【零代码】页面构建器，低代码拖拉拽表单产品，IDC组态编辑器，可视化大屏编辑器等工具开发
        </div>
      </div>
    </section>
  )
}

export default Title
