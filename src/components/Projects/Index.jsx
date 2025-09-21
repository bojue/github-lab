import { useState } from 'react'
import Project from '@/components/Project'
import Title from '@/components/Title'
import webBuilder from '@/assets/webBuilder.png'
import webEditor from '@/assets/webeditor.png'
import './Index.scss'

function Projects() {
  const projects = [
    {
      name: 'Web-Builder',
      info: '低代码可视化产品',
      techStack: ['Vue3', 'TypeScript', 'Pinia'],
      demo_img: webBuilder,
      state: 'toBeRelease',
    },
    {
      name: "lemon-form",
      info: '表单产品',
      techStack: ['Vue3', 'TypeScript', 'Pinia'],
      github: "https://github.com/bojue/lemon-form",
      demo_img: 'https://bojue.github.io/lemon-form/assets/demo.png',
      demo_url: 'https://bojue.github.io/lemon-form',
      demo_state: false
    }, {
      name: "Web-Editor",
      info: '可视化组态编辑器',
      techStack: ['Angular', 'TypeScript'],
      demo_img: webEditor,
      github: "https://github.com/bojue/Web-Editor",
      demo_state: false
    }, {
      name: "BaseMap",
      info: 'IDC管理2.5D底图绘制',
      techStack: ['Vue2'],
      github: "https://github.com/bojue/BaseMap",
      demo_img: 'https://user-images.githubusercontent.com/14350577/156908201-c62eed78-f316-485f-8cc5-f4c32cbceef4.png',
      demo_url: 'https://bojue.github.io/BaseMap',

    }, {
      name: "canvas-excel",
      info: 'Excel技术预研',
      techStack: ['React', 'Canvas'],
      github: "https://github.com/bojue/canvas-excel",
      demo_img: 'https://user-images.githubusercontent.com/14350577/156909030-4816fa59-b44d-48e4-9bc2-b0f5cacbded9.PNG',
      demo_url: 'https://bojue.github.io/canvas-excel'
    }, {
      name: "M-Charts",
      info: '前端Charts实现',
      techStack: ['React', 'Canvas'],
      github: "https://github.com/bojue/M-Charts",
      demo_img: 'https://user-images.githubusercontent.com/14350577/156899401-d2c10722-c14a-40ca-9377-69aa9ce2b2e0.png',
      demo_url: 'https://bojue.github.io/M-Charts/#/'
    }]


  return (
    <>
      <Title />
      <section className='projects'>
        <div className="content">
          {
            projects.map((project, index) => (
              <Project project={project} key={project.name} index={index}/>
            ))
          }
        </div>
      </section>
    </>

  )
}

export default Projects
