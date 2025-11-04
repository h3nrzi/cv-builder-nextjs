import StandardTemplateComponent from './layout/_standard';
import ModernTemplateComponent from './layout/_modern';
import ClassicTemplateComponent from './layout/_classic';
import MinimalTemplateComponent from './layout/_minimal';
import CreativeTemplateComponent from './layout/_creative';
import ElegantTemplateComponent from './layout/_elegant';

const template = [
  {
    id: 1,
    name: 'standard',
    description: 'standard',
    component: StandardTemplateComponent,
    preview: 'standard.png',
  },
  {
    id: 2,
    name: 'minimal',
    description: 'minimal',
    component: MinimalTemplateComponent,
    preview: 'minimal.png',
  },
  {
    id: 3,
    name: 'modern',
    description: 'modern',
    component: ModernTemplateComponent,
    preview: 'modern.png',
  },
  {
    id: 6,
    name: 'elegant',
    description: 'elegant',
    component: ElegantTemplateComponent,
    preview: 'elegant.png',
  },
  {
    id: 4,
    name: 'classic',
    description: 'classic',
    component: ClassicTemplateComponent,
    preview: 'classic.png',
  },
  {
    id: 5,
    name: 'creative',
    description: 'creative',
    component: CreativeTemplateComponent,
    preview: 'creative.png',
  },
];

export default template;
export {
  StandardTemplateComponent,
  ModernTemplateComponent,
  ClassicTemplateComponent,
  MinimalTemplateComponent,
  CreativeTemplateComponent,
  ElegantTemplateComponent,
};
