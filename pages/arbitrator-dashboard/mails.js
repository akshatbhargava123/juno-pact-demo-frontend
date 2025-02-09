import dynamic from 'next/dynamic';
import Page from '@components/common/page';
import withDashboardLayout from '@components/common/layouts/arbitrator-dashboard';

const MailsComponent = dynamic(
  () => import('@components/arbitrator-dashboard/DisputeContent/Mails').then(mod => mod.Mails),
  { ssr: false }
);

const MailsPage = () => (
  <Page title="Home" layoutProvider={withDashboardLayout}>
    {() => <MailsComponent />}
  </Page>
);

export default MailsPage;
