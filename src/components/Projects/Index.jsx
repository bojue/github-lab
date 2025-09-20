import { useState } from 'react'
import Project from '@/components/Project'
import Title from '@/components/Title'
import './Index.scss'

function Projects() {
  const [count, setCount] = useState(0)
  const projects = [
    {
      name: 'Web-Builder',
      info: '低代码可视化产品',
      techStack: ['Vue3', 'TypeScript', 'Pinia'],
      demo_img: 'https://private-user-images.githubusercontent.com/14350577/473795395-9f952ea0-3dbd-46c7-9df9-03ab6505c4be.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgzNDA3MzYsIm5iZiI6MTc1ODM0MDQzNiwicGF0aCI6Ii8xNDM1MDU3Ny80NzM3OTUzOTUtOWY5NTJlYTAtM2RiZC00NmM3LTlkZjktMDNhYjY1MDVjNGJlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTIwVDAzNTM1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3YjJjMjI2MTcwMzEwOTg2N2UzYzdkY2I2MTYxMTg4YTg5MGM5MDY2Y2M5NWJhMDgxYzY2ODcyNjc4NTc5M2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xBZd_PL4P82EkylXzKp0KKc-EiXr2LPAeqq0Hufwfvo',
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
      github: "https://github.com/bojue/Web-Editor",
      demo_img: 'https://private-user-images.githubusercontent.com/14350577/312403897-5913829b-2ee3-4b5f-bc4f-2e7c50f0d4d2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgzNjQ1ODksIm5iZiI6MTc1ODM2NDI4OSwicGF0aCI6Ii8xNDM1MDU3Ny8zMTI0MDM4OTctNTkxMzgyOWItMmVlMy00YjVmLWJjNGYtMmU3YzUwZjBkNGQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTIwVDEwMzEyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkNWU3NTdlYzUwYWFhMWNiNmRkNWViNGExOTlkOWMyNGE3MzY1NTgwNDUzNDhhMjQxMjJmMTQ2MmVmZDc1MWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.e3XbsfLpbddN9eGP70oIXXHU8u3auPYdpy11TGaW1f8',
      demo_url: 'https://bojue.github.io/Web-Editor',
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
            projects.map(project => (
              <Project project={project} key={project.name} />
            ))
          }
        </div>
      </section>
    </>

  )
}

export default Projects
