import { useState } from 'react'
import { IconGithubLogo, IconArrowUpRight } from '@douyinfe/semi-icons'
import './Index.scss'

export default function Project(props) {
  const [count, setCount] = useState(0)
  const { project, key } = props;

  return (
    <div className="project-item" key={project.name}>
      <div className="name">
        {project.name}
      </div>
      <div
        className='info'>
        {project.info}
        {
          project?.github && 
          <div className="start">
          <img src={
            `https://img.shields.io/github/stars/bojue/${project.name}.svg?style=social`
          } alt=""></img>
        </div>
        }
      </div>
      <div className="tags-list">
        {
          project.techStack && project.techStack.map(tag => (
            <span className={
              `tag 
                ${['Vue2', 'Vue3'].includes(tag) ? 'Vue' : ''} 
                ${['React',].includes(tag) ? 'React' : ''} 
                ${['Angular'].includes(tag) ? 'Angular' : ''} 
                ${['TypeScript'].includes(tag) ? 'TypeScript' : ''} 
                ${['Canvas'].includes(tag) ? 'Canvas' : ''} 
                ${['Pinia'].includes(tag) ? 'Pinia' : ''} 
              `}
              key={tag}>{tag}</span>
          ))
        }
      </div>
      <img className='demo' src={project.demo_img} alt="" />
      <div className="footer">
        {
          project?.state === 'toBeRelease' && <div class="release">
            商业产品待上线</div>
        }
        {
          project?.github &&         <div className="github flex-row" >
          <IconGithubLogo className="icon" />
          <a href={project.github} target="_blank" className="label">
            Github仓库
          </a>

        </div>
        }

        {
          project?.demo_url &&         <div className="docs flex-row">
               <a href={project.demo_url} target="_blank" className="label">
            在线预览
          </a>

          <IconArrowUpRight className='icon'/>
        </div>
        }
      </div>
    </div>
  )
}
