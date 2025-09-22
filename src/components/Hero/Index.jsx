import { useState } from 'react'
import { IconGithubLogo, IconArrowUpRight } from '@douyinfe/semi-icons'
import Right from '@/components/Hero/Right'
import './Index.scss'

function TechStack() {
  const [count, setCount] = useState(0)

  return (
    <section className='hero'>
      <div className="content">
        <div className="content-left">
          <div className="title">
            用代码解决<span className="lab">实际问题</span>
          </div>
          <div className="description">
            专注前端技术与工具链研发，打造可复用的低代码方案、可视化工具与性能优化项目，覆盖零代码/低代码构建器、低代码表单构建、IDC管理、数据交互等核心场景。
          </div>
          <div className="btns">
            <a target="_blank" href='https://github.com/bojue'>
              <button class="flow">
                <IconGithubLogo class="icon"/>
                关注我的Github</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
