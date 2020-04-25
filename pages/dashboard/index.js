import dynamic from 'next/dynamic';
import Page from '@components/common/page';
import withDashboardLayout from '@components/common/layouts/dashboard';

const DashboardComponent = dynamic(
  () => import('@components/dashboard').then(mod => mod.default),
  { ssr: false }
);

const DashboardPage = () => (
  <Page title="Home" layoutProvider={withDashboardLayout}>
    {() => <DashboardComponent />}
  </Page>
);

export default DashboardPage;
