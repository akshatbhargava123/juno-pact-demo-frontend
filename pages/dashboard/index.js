import dynamic from 'next/dynamic';
import Page from '@components/common/page';

const DashboardComponent = dynamic(
  () => import('@components/dashboard').then(mod => mod.default),
  { ssr: false }
);

const DashboardPage = () => (
  <Page title="Home">
    {() => <DashboardComponent />}
  </Page>
);

export default DashboardPage;
