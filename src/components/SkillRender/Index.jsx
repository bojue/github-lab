import { VChart } from '@visactor/react-vchart';
import './Index.scss'

function StackRender() {
  const spec = {
    type: 'wordCloud',
    nameField: 'name',
    valueField: 'value',
    wordCloudConfig: {
      zoomToFit: {
        enlarge: true,
        fontSizeLimitMax: 20
      }
    },
    word: {
      style: {
        fill: datum => datum.color
      }
    },
    rotateAngles: [0, 90],
    background: 'transparent',
    height: 300,
    data: {
      name: '产品经验',
      values: [
        { name: '组态编辑器', value: 200, color: '#c04ecdff' },
        { name: '大屏编辑器', value: 200, color: '#790dc0ff' }, // 蓝色
        { name: 'ToB低代码产品', value: 100, color: '#59b662ff' }, // 紫色
        { name: '建站工具', value: 240, color: '#ffd166' }, // 深红色
        { name: '大数据前端产品', value: 100, color: '#68f609ff' }, // 绿松石色
        { name: '表单产品', value: 100, color: '#f39c12' }, // 橙色
      ]
    }
  };

  return (
    <section className='stack-render'>
      <VChart spec={spec}></VChart>
    </section>
  )
}

export default StackRender
