import { useSelectLayoutCv } from '@/provider/provider-layout-cv';
import template from '..';

export default function LayoutContainer() {
  const { selectLayoutState } = useSelectLayoutCv();
  const Component = template.find(item => item.id === selectLayoutState.id)?.component;
  return <>{Component && <Component />}</>;
}
