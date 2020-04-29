import dynamic from 'next/dynamic';
import Page from '@components/common/page';
import withDashboardLayout from '@components/common/layouts/dashboard';

// const Dashboard = dynamic(
//   () => import('@components/dashboard/DisputeContent/Mails').then(mod => mod.Mails),
//   { ssr: false }
// );

const Dashboard = () => (
  <Page title="Home" layoutProvider={withDashboardLayout}>
    {() => <h1>Dashboard</h1>}
  </Page>
);

export default Dashboard;
