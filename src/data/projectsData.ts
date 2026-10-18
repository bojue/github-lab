export interface ProductItem {
  id: string;
  name: string;
  info: string;
  categories: ('editor' | 'topology')[];
  categoryLabel: string;
  /** 附加能力标签（如：建站工具） */
  tags?: string[];
  statusTag?: string;
  github?: string;
  demoUrl?: string;
  productHunt?: string;
  image: string;
  /** 卡片缩略图（小体积）；image 仅用于弹窗大图查看 */
  thumb: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'mailcraft-editor',
    name: 'MailCraft',
    info: '商业化 HTML 邮件设计器，提供场景模板库、拖拽排版与一键导出跨客户端兼容 HTML。',
    categories: ['editor'],
    categoryLabel: '邮件设计',
    statusTag: '产品调研中',
    demoUrl: 'https://nocokit.cn/mail/',
    image: `${import.meta.env.BASE_URL}assets/editor_mailcraft.webp`,
    thumb: `${import.meta.env.BASE_URL}assets/thumbs/editor_mailcraft.webp`
  },
  {
    id: 'form-editor',
    name: 'Noco Form',
    info: '配置化动态表单产品，支持字段级联、条件显隐与跨字段公式联动。',
    categories: ['editor'],
    categoryLabel: '表单系统',
    statusTag: '核心产品',
    github: 'https://github.com/nocokit/noco-form',
    demoUrl: 'https://www.nocokit.cn/form/',
    image: `${import.meta.env.BASE_URL}assets/editor_form.webp`,
    thumb: `${import.meta.env.BASE_URL}assets/thumbs/editor_form.webp`
  },
  {
    id: 'noco-page',
    name: 'Noco Page Builder',
    info: '落地页建站工具，轻松搭建商品落地页，支持SEO,域名绑定和一键发布等核心功能。',
    categories: ['editor'],
    categoryLabel: '页面搭建',
    tags: ['建站工具'],
    statusTag: '产品调研',
    productHunt: 'https://www.producthunt.com/products/nocokit',
    github: 'https://github.com/nocokit/noco-page-builder',
    demoUrl: 'https://www.nocokit.cn/page',
    image: `${import.meta.env.BASE_URL}assets/noco_page.webp`,
    thumb: `${import.meta.env.BASE_URL}assets/thumbs/noco_page.webp`
  },
  {
    id: 'web-builder-preview',
    name: 'Web Editor（IDC）',
    info: '基于 Web-Editor 落地的商业IDC组态编辑，支持IDC行业组态搭建，在行业大厂落地',
    categories: ['editor', 'topology'],
    categoryLabel: '低代码平台',
    statusTag: '已商业化落地',
    github: 'https://github.com/bojue/web-editor',
    image: `${import.meta.env.BASE_URL}assets/editor_web_preview.webp`,
    thumb: `${import.meta.env.BASE_URL}assets/thumbs/editor_web_preview.webp`
  },
  {
    id: 'noco-3d',
    name: 'Noco 3D 组态编辑器',
    info: '3D 组态编辑器，支持工业场景三维建模，业务场景搭建',
    categories: ['editor', 'topology'],
    categoryLabel: '页面搭建',
    statusTag: '技术调研',
    demoUrl: 'https://www.nocokit.cn/3d/',
    image: `${import.meta.env.BASE_URL}assets/3d.webp`,
    thumb: `${import.meta.env.BASE_URL}assets/thumbs/3d.webp`
  },
  {
    id: 'editor-basemap',
    name: '底图绘制编辑器 (BaseMap)',
    info: 'IDC 机房 2.5D 等轴测底图与机柜拓扑绘制工具，辅助行业2D/3D组件的组态搭建。',
    categories: ['topology'],
    categoryLabel: '底图组态',
    statusTag: '行业工具',
    github: 'https://github.com/bojue/BaseMap',
    demoUrl: 'https://bojue.github.io/BaseMap',
    image: `${import.meta.env.BASE_URL}assets/editor_basemap.webp`,
    thumb: `${import.meta.env.BASE_URL}assets/thumbs/editor_basemap.webp`
  }
];
