import { Layout } from '@/shared/ui';
import { LayoutHeader } from '@/widgets/LayoutHeader';

type Props = {
  children: React.ReactNode;
};

/**
 * Default app layout
 */
export const DefaultLayout = (props: Props) => (
  <Layout headerSlot={<LayoutHeader />}>{props.children}</Layout>
);
