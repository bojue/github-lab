import { useState } from 'react'
import { IconGithubLogo, IconArrowUpRight } from '@douyinfe/semi-icons'
import Right from '@/components/Hero/Right'
import './Index.scss'

function Hero() {
  const [count, setCount] = useState(0)
  const [stack] = useState([{
    label: 'React',
    process: 80
  }, {
    label: 'Vue3',
    process: 95
  }, {
    label: 'Angular',
    process: 80
  }, 
  // {
  //   label: 'Node',
  //   process: 60
  // }, 
  {
    label: 'Python',
    process: 60
  }
  ])
  return (
    <section className='stack'>
      <div className="content">
        <div className="content-left">
          <div className="title">
            我的<span className="lab">技术栈</span>
          </div>
          <div className="description">
            <div className="stack-list">
              {
                stack.map(item => {
                  const {
                    label,
                    process
                  } = item
                  return (
                    <div className="stack-item" >
                      <span className="label">
                        {label}
                      </span>
                      <span className="progress">
                        <span 
                        className="stack-process" 
                        style={{
                          width: `${process}% `,
                          opacity: `${process / 100}`
                        }}></span> 
                        {
                          label === 'Vue3' &&    <span className='val' style={{
                          left: `${process + 10}% `
                        }}>{process} <span className="unit">%</span></span>
                        }
                      </span>
                    </div>
                  )
                })
              }
   
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
