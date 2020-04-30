import dynamic from 'next/dynamic';
import Page from '@components/common/page';
import withDashboardLayout from '@components/common/layouts/dashboard';

const ChatSection = dynamic(
  () => import('@components/dashboard/ChatSection').then(mod => mod.ChatSection),
  { ssr: false }
);

const Dashboard = () => (
  <Page title="Home" layoutProvider={withDashboardLayout}>
    {() => <ChatSection />}
  </Page>
);

export default Dashboard;
